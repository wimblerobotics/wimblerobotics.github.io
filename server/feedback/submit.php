<?php
/**
 * submit.php — Receive feedback POSTs from wimblerobotics.github.io
 *
 * Deploy to: public_html/feedback/submit.php on Bluehost
 * Requires:  /home3/wimbleor/feedback_config.php  (defines DB_HOST, DB_NAME, DB_USER, DB_PASS)
 */
declare(strict_types=1);

$allowed_origin = 'https://wimblerobotics.github.io';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === $allowed_origin) {
    header('Access-Control-Allow-Origin: ' . $allowed_origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require '/home3/wimbleor/feedback_config.php';

$raw   = file_get_contents('php://input');
$input = json_decode($raw, true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$allowed_types = ['correct', 'correction', 'useful', 'not-useful'];
$article_url   = trim((string)($input['article_url'] ?? ''));
$feedback_type = (string)($input['feedback_type'] ?? '');
$body          = isset($input['body']) && $input['body'] !== '' ? trim((string)$input['body']) : null;

if ($article_url === '' || !in_array($feedback_type, $allowed_types, true)) {
    http_response_code(422);
    echo json_encode(['error' => 'Invalid input']);
    exit;
}

// Only accept URLs from our own site
if (!str_starts_with($article_url, 'https://wimblerobotics.github.io/')) {
    http_response_code(422);
    echo json_encode(['error' => 'Invalid article URL']);
    exit;
}

// Truncate to column limits
$article_url = substr($article_url, 0, 512);
$body        = $body !== null ? substr($body, 0, 65535) : null;
$ua          = substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 512);

// Hash IP — never store raw IP address
$ip_raw  = trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '')[0]);
$ip_hash = hash('sha256', $ip_raw);

try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );
    $stmt = $pdo->prepare(
        'INSERT INTO feedback (article_url, feedback_type, body, ip_hash, user_agent)
         VALUES (?, ?, ?, ?, ?)'
    );
    $stmt->execute([$article_url, $feedback_type, $body, $ip_hash, $ua]);
    echo json_encode(['ok' => true]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error']);
    // Never expose $e->getMessage() in production
}
