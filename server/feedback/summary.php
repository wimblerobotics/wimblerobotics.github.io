<?php
/**
 * summary.php — Read/reset feedback for the admin dashboard
 *
 * Deploy to: public_html/feedback/summary.php on Bluehost
 * Requires:  /home3/wimbleor/feedback_config.php  (defines DB_HOST, DB_NAME, DB_USER, DB_PASS, ADMIN_TOKEN)
 *
 * GET  (no params)               → JSON array of per-article aggregated counts
 * GET  ?corrections=1&url=...    → JSON array of {body, created_at} for that article
 * POST {action:"reset", article_url:"..."} + X-Admin-Token header
 *                                → deletes all feedback rows for that article
 */
declare(strict_types=1);

$allowed_origin = 'https://wimblerobotics.github.io';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === $allowed_origin) {
    header('Access-Control-Allow-Origin: ' . $allowed_origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Admin-Token');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require '/home3/wimbleor/feedback_config.php';

try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::ATTR_STRINGIFY_FETCHES  => false,
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error']);
    exit;
}

/* ── GET ─────────────────────────────────────────────────────── */

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if (isset($_GET['corrections'])) {
        // Return individual correction bodies for one article
        $url = trim($_GET['url'] ?? '');
        if ($url === '' || !str_starts_with($url, 'https://wimblerobotics.github.io/')) {
            http_response_code(422);
            echo json_encode(['error' => 'Invalid URL']);
            exit;
        }
        $stmt = $pdo->prepare(
            "SELECT id, body, created_at
               FROM feedback
              WHERE article_url = ?
                AND feedback_type = 'correction'
              ORDER BY created_at DESC
              LIMIT 100"
        );
        $stmt->execute([$url]);
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));

    } else {
        // Return aggregated summary for all articles, sorted by attention score
        $stmt = $pdo->query(
            "SELECT
                article_url,
                SUM(feedback_type = 'correct')     AS correct_count,
                SUM(feedback_type = 'correction')  AS correction_count,
                SUM(feedback_type = 'useful')      AS useful_count,
                SUM(feedback_type = 'not-useful')  AS not_useful_count,
                COUNT(*)                           AS total,
                MAX(created_at)                    AS last_feedback_at
             FROM feedback
             GROUP BY article_url
             ORDER BY (
                 SUM(feedback_type = 'correction') * 4
               + SUM(feedback_type = 'not-useful') * 2
               - SUM(feedback_type = 'useful')
               - SUM(feedback_type = 'correct')
             ) DESC"
        );
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
    exit;
}

/* ── POST (admin actions) ────────────────────────────────────── */

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_SERVER['HTTP_X_ADMIN_TOKEN'] ?? '';
    if (!hash_equals(ADMIN_TOKEN, $token)) {
        http_response_code(403);
        echo json_encode(['error' => 'Forbidden']);
        exit;
    }

    $input = json_decode(file_get_contents('php://input'), true);
    if (!is_array($input)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }

    $action = $input['action'] ?? '';

    if ($action === 'reset') {
        $article_url = trim((string)($input['article_url'] ?? ''));
        if ($article_url === '') {
            http_response_code(422);
            echo json_encode(['error' => 'Missing article_url']);
            exit;
        }
        $stmt = $pdo->prepare('DELETE FROM feedback WHERE article_url = ?');
        $stmt->execute([$article_url]);
        echo json_encode(['ok' => true, 'deleted' => $stmt->rowCount()]);

    } elseif ($action === 'delete_correction') {
        $id = isset($input['id']) ? (int)$input['id'] : 0;
        if ($id <= 0) {
            http_response_code(422);
            echo json_encode(['error' => 'Missing or invalid id']);
            exit;
        }
        $stmt = $pdo->prepare("DELETE FROM feedback WHERE id = ? AND feedback_type = 'correction'");
        $stmt->execute([$id]);
        echo json_encode(['ok' => true, 'deleted' => $stmt->rowCount()]);

    } elseif ($action === 'reset_all') {
        $pdo->exec('TRUNCATE TABLE feedback');
        echo json_encode(['ok' => true]);

    } else {
        http_response_code(422);
        echo json_encode(['error' => 'Unknown action']);
    }
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
