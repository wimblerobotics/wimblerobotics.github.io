/* feedback-admin.js — Moderator feedback dashboard
 *
 * Only activates on pages containing <div id="fb-admin-root">.
 *
 * Data source: Bluehost MySQL endpoint (summary.php).
 *
 * Features:
 *   - Summary cards: corrections pending, total feedback, zero-feedback pages
 *   - Table sorted by "needs most attention" (fixes × 4 + notuseful × 2 …)
 *   - Expandable correction descriptions per article (loaded on demand)
 *   - "No feedback" section sourced from sitemap.xml
 *   - Reset: deletes all feedback rows for one article (requires admin token)
 *     Token is stored in localStorage under 'fb_admin_token'.
 */
(function () {
  'use strict';

  var ADMIN_ID    = 'fb-admin-root';
  var ENDPOINT    = 'https://wimblerobotics.com/feedback/summary.php';
  var SITE        = 'https://wimblerobotics.github.io/';
  var GITHUB_REPO = 'https://github.com/wimblerobotics/wimblerobotics.github.io';
  var TOKEN_KEY   = 'fb_admin_token';

  var root = document.getElementById(ADMIN_ID);
  if (!root) { return; }   // not the admin page — exit immediately

  /* ── utilities ────────────────────────────────────────────────── */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getToken() { return localStorage.getItem(TOKEN_KEY) || ''; }
  function saveToken(v) { if (v) { localStorage.setItem(TOKEN_KEY, v); } else { localStorage.removeItem(TOKEN_KEY); } }

  async function fetchSummary() {
    var res = await fetch(ENDPOINT, { headers: { 'X-Admin-Token': getToken() } });
    if (res.status === 403) { throw new Error('auth'); }
    if (!res.ok) { throw new Error('Summary API ' + res.status); }
    return res.json();
  }

  async function fetchCorrections(articleUrl) {
    var res = await fetch(
      ENDPOINT + '?corrections=1&url=' + encodeURIComponent(articleUrl),
      { headers: { 'X-Admin-Token': getToken() } }
    );
    if (!res.ok) { return []; }
    return res.json();
  }

  async function fetchSitemap() {
    try {
      var res = await fetch(SITE + 'sitemap.xml');
      var xml = await res.text();
      var doc = new DOMParser().parseFromString(xml, 'application/xml');
      return Array.from(doc.querySelectorAll('loc')).map(function (n) { return n.textContent.trim(); });
    } catch (e) { return []; }
  }

  function attScore(row) {
    return parseInt(row.correction_count, 10) * 4
      + parseInt(row.not_useful_count, 10) * 2
      - parseInt(row.useful_count, 10)
      - parseInt(row.correct_count, 10);
  }

  function slug(url) {
    return url.replace(SITE, '').replace(/\/$/, '') || '/';
  }

  function normalize(url) {
    return url.endsWith('/') ? url : url + '/';
  }

  /* ── render ───────────────────────────────────────────────────── */

  function renderCards(rows, zeroUrls) {
    var total  = rows.reduce(function (s, r) { return s + parseInt(r.total, 10); }, 0);
    var fixing = rows.filter(function (r) { return parseInt(r.correction_count, 10) > 0; }).length;
    return '<div class="fba-cards">'
      + '<div class="fba-card fba-card-fix"><div class="fba-card-num">' + fixing + '</div><div class="fba-card-lbl">Corrections pending</div></div>'
      + '<div class="fba-card fba-card-total"><div class="fba-card-num">' + total + '</div><div class="fba-card-lbl">Total feedback items</div></div>'
      + '<div class="fba-card fba-card-zero"><div class="fba-card-num">' + zeroUrls.length + '</div><div class="fba-card-lbl">Pages with no feedback</div></div>'
      + '<div class="fba-card"><div class="fba-card-num">' + rows.length + '</div><div class="fba-card-lbl">Pages with feedback</div></div>'
      + '</div>';
  }

  function renderTable(rows) {
    if (!rows.length) { return '<p class="fba-empty">No feedback yet.</p>'; }

    var htmlRows = rows.map(function (row, idx) {
      var url  = row.article_url;
      var corr = parseInt(row.correction_count, 10);
      var bad  = parseInt(row.not_useful_count, 10);
      var good = parseInt(row.useful_count, 10);
      var ok   = parseInt(row.correct_count, 10);
      var tot  = parseInt(row.total, 10);
      var score = corr * 4 + bad * 2 - good - ok;
      var rowClass = corr > 0 ? 'fba-row-fix' : score < -1 ? 'fba-row-good' : '';

      var fixCell = corr > 0
        ? '<button class="fba-count-btn" data-toggle="' + idx + '" title="Show correction details">⚠ ' + corr + '</button>'
        : '<span>–</span>';

      var detailRow = corr > 0
        ? '<tr class="fba-fix-detail" id="fba-detail-' + idx + '" style="display:none"'
          + ' data-loaded="0" data-url="' + esc(url) + '">'
          + '<td colspan="6"><ul class="fba-fix-list" id="fba-fix-list-' + idx + '">'
          + '<li class="fba-fix-loading">Loading…</li></ul></td></tr>'
        : '';

      return '<tr class="' + esc(rowClass) + '">'
        + '<td class="fba-cell-page"><a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(slug(url)) + '</a></td>'
        + '<td class="fba-cell-count fba-fix-col">' + fixCell + '</td>'
        + '<td class="fba-cell-count">' + (bad  || '–') + '</td>'
        + '<td class="fba-cell-count">' + (good || '–') + '</td>'
        + '<td class="fba-cell-count">' + (ok   || '–') + '</td>'
        + '<td class="fba-cell-action">'
        + '<button class="fba-btn fba-btn-reset" data-idx="' + idx + '" data-total="' + tot + '">Reset</button>'
        + '</td></tr>'
        + detailRow;
    }).join('');

    return '<div class="fba-section">'
      + '<h2 class="fba-section-h">Pages with Feedback</h2>'
      + '<div class="fba-table-wrap"><table class="fba-table">'
      + '<thead><tr>'
      + '<th class="fba-th-page">Article</th>'
      + '<th class="fba-th-count" title="Correction requests">⚠ Fixes</th>'
      + '<th class="fba-th-count" title="Not useful">👎 Meh</th>'
      + '<th class="fba-th-count" title="Useful">👍 Good</th>'
      + '<th class="fba-th-count" title="Verified correct">✓ OK</th>'
      + '<th>Actions</th>'
      + '</tr></thead>'
      + '<tbody>' + htmlRows + '</tbody>'
      + '</table></div></div>';
  }

  function renderZero(zeroUrls) {
    if (!zeroUrls.length) { return ''; }
    var items = zeroUrls.map(function (u) {
      return '<li><a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(slug(u)) + '</a></li>';
    }).join('');
    return '<details class="fba-section fba-section-zero">'
      + '<summary class="fba-section-h">Pages with No Feedback (' + zeroUrls.length + ')</summary>'
      + '<p class="fba-zero-note">These articles have never received feedback. Consider reviewing them proactively.</p>'
      + '<ul class="fba-zero-list">' + items + '</ul>'
      + '</details>';
  }

  function renderPage(rows, zeroUrls) {
    root.innerHTML =
      '<div class="fba-pat-row">'
      + '<label class="fba-pat-label" for="fba-pat">Admin Token</label>'
      + '<input id="fba-pat" class="fba-pat-input" type="password" autocomplete="off"'
      + ' placeholder="Admin token for reset operations" value="' + esc(getToken()) + '">'
      + '<button class="fba-btn fba-btn-save" id="fba-pat-save">Save</button>'
      + '<span class="fba-pat-hint">Required only to delete (reset) feedback entries.</span>'
      + '</div>'
      + renderCards(rows, zeroUrls)
      + renderTable(rows)
      + renderZero(zeroUrls);

    /* -- bind events -------------------------------------------- */

    root.querySelector('#fba-pat-save').addEventListener('click', function () {
      saveToken(root.querySelector('#fba-pat').value.trim());
      var btn = root.querySelector('#fba-pat-save');
      btn.textContent = 'Saved ✓';
      setTimeout(function () { btn.textContent = 'Save'; }, 1500);
    });

    root.addEventListener('click', function (e) {
      var toggleBtn = e.target.closest('[data-toggle]');
      if (toggleBtn) {
        var idx = toggleBtn.dataset.toggle;
        var detailRow = document.getElementById('fba-detail-' + idx);
        if (!detailRow) { return; }
        var wasHidden = detailRow.style.display === 'none';
        detailRow.style.display = wasHidden ? '' : 'none';
        if (wasHidden && detailRow.dataset.loaded === '0') {
          detailRow.dataset.loaded = '1';
          var articleUrl = detailRow.dataset.url;
          var listEl = document.getElementById('fba-fix-list-' + idx);
          fetchCorrections(articleUrl)
            .then(function (corrections) {
              if (!listEl) { return; }
              if (!corrections.length) {
                listEl.innerHTML = '<li>No correction text recorded.</li>';
                return;
              }
              listEl.innerHTML = corrections.map(function (c) {
                var d = c.created_at ? '<span class="fba-fix-date">' + c.created_at.split(' ')[0] + '</span>' : '';
                return '<li class="fba-fix-item">'
                  + '<div class="fba-fix-body">' + esc(c.body || '(no description)') + '</div>'
                  + d
                  + '<div class="fba-fix-actions">'
                  + '<button class="fba-btn fba-btn-convert"'
                  + ' data-id="' + esc(String(c.id)) + '"'
                  + ' data-url="' + esc(articleUrl) + '"'
                  + ' data-body="' + esc(c.body || '') + '">Convert to Issue ↗</button>'
                  + '<button class="fba-btn fba-btn-del-corr"'
                  + ' data-id="' + esc(String(c.id)) + '">🗑 Delete</button>'
                  + '</div>'
                  + '</li>';
              }).join('');
            })
            .catch(function () {
              if (listEl) { listEl.innerHTML = '<li>Failed to load corrections.</li>'; }
            });
        }
      }

      var resetBtn = e.target.closest('.fba-btn-reset');
      if (resetBtn) {
        var idx2  = parseInt(resetBtn.dataset.idx, 10);
        var total = parseInt(resetBtn.dataset.total, 10);
        var row   = rows[idx2];
        if (!row) { return; }
        if (!getToken()) {
          alert('Enter and save an admin token first — needed to delete entries.');
          return;
        }
        showReset(row.article_url, total);
      }

      var convertBtn = e.target.closest('.fba-btn-convert');
      if (convertBtn) {
        showCorrectionModal(
          convertBtn.dataset.id,
          convertBtn.dataset.url,
          convertBtn.dataset.body
        );
        return;
      }

      var delCorrBtn = e.target.closest('.fba-btn-del-corr');
      if (delCorrBtn) {
        deleteCorrectionOnly(delCorrBtn.dataset.id);
        return;
      }
    });
  }

  /* ── reset modal ──────────────────────────────────────────────── */

  function showReset(url, total) {
    var overlay = document.createElement('div');
    overlay.className = 'fb-overlay';
    overlay.innerHTML =
      '<div class="fb-modal">'
      + '<h3 class="fb-modal-title">Reset feedback for this page?</h3>'
      + '<p><strong>' + esc(slug(url)) + '</strong></p>'
      + '<p class="fb-modal-hint">Permanently deletes ' + total + ' feedback entr' + (total !== 1 ? 'ies' : 'y') + '. This cannot be undone.</p>'
      + '<div class="fb-modal-actions">'
      + '<button class="fb-btn fb-cancel" id="fba-modal-cancel">Cancel</button>'
      + '<button class="fb-btn fba-btn-danger" id="fba-modal-confirm">Delete ' + total + ' entr' + (total !== 1 ? 'ies' : 'y') + '</button>'
      + '</div>'
      + '<div class="fba-modal-status" id="fba-modal-status"></div>'
      + '</div>';

    document.body.appendChild(overlay);

    overlay.querySelector('#fba-modal-cancel').addEventListener('click', function () {
      document.body.removeChild(overlay);
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) { document.body.removeChild(overlay); }
    });

    overlay.querySelector('#fba-modal-confirm').addEventListener('click', function () {
      var btn    = overlay.querySelector('#fba-modal-confirm');
      var status = overlay.querySelector('#fba-modal-status');
      btn.disabled = true;
      status.textContent = 'Deleting…';

      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Token': getToken() },
        body: JSON.stringify({ action: 'reset', article_url: url })
      })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.ok) {
          status.textContent = (data.deleted || 0) + ' entr' + (data.deleted !== 1 ? 'ies' : 'y') + ' deleted.';
        } else {
          status.textContent = 'Error: ' + esc(data.error || 'unknown');
        }
        setTimeout(function () {
          if (document.body.contains(overlay)) { document.body.removeChild(overlay); }
          init();
        }, 1200);
      })
      .catch(function (err) {
        status.textContent = 'Request failed: ' + esc(err.message);
        btn.disabled = false;
      });
    });
  }

  /* ── convert correction to GitHub issue ──────────────────────── */

  function showCorrectionModal(corrId, articleUrl, bodyText) {
    var articleSlug = slug(articleUrl);
    var filePath    = articleSlug !== '/' ? 'articles/' + articleSlug + '.md' : null;
    var editUrl     = filePath ? (GITHUB_REPO + '/edit/main/' + filePath) : null;

    var overlay = document.createElement('div');
    overlay.className = 'fb-overlay';
    overlay.innerHTML = [
      '<div class="fb-modal fba-convert-modal">',
      '<h3 class="fb-modal-title">Convert Correction to GitHub Issue</h3>',
      '<p class="fb-modal-sub">Article: <strong>' + esc(articleSlug) + '</strong></p>',
      '<label class="fba-modal-label" for="fba-conv-title">Issue title</label>',
      '<input class="fba-modal-input" id="fba-conv-title" type="text" value="' + esc('Correction: ' + articleSlug) + '">',
      '<label class="fba-modal-label" for="fba-conv-body">Issue body (edit as needed)</label>',
      '<textarea class="fb-textarea" id="fba-conv-body" rows="6">' + esc(bodyText) + '</textarea>',
      '<label class="fba-modal-check">',
      '<input type="checkbox" id="fba-conv-delete" checked>',
      ' Delete correction from database after opening</label>',
      '<div class="fb-modal-actions">',
      '<button class="fb-btn fb-cancel" id="fba-conv-cancel">Cancel</button>',
      editUrl ? '<button class="fb-btn fb-edit" id="fba-conv-edit">Edit file on GitHub \u2197</button>' : '',
      '<button class="fb-btn fb-submit" id="fba-conv-issue">Open as GitHub Issue \u2197</button>',
      '</div>',
      '<div id="fba-conv-status" class="fba-modal-status"></div>',
      '</div>',
    ].join('\n');

    document.body.appendChild(overlay);

    var titleInput = overlay.querySelector('#fba-conv-title');
    var bodyArea   = overlay.querySelector('#fba-conv-body');
    var delCheck   = overlay.querySelector('#fba-conv-delete');
    var statusEl   = overlay.querySelector('#fba-conv-status');

    function close() { if (document.body.contains(overlay)) { document.body.removeChild(overlay); } }

    function maybeDelete(cb) {
      if (!delCheck.checked) { cb(true); return; }
      if (!getToken()) {
        statusEl.textContent = 'No admin token saved — correction NOT deleted from database.';
        delCheck.checked = false;
        cb(true);
        return;
      }
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Token': getToken() },
        body: JSON.stringify({ action: 'delete_correction', id: corrId })
      })
      .then(function (r) { return r.json(); })
      .then(function (data) { if (data.ok) { cb(true); } else { cb(false, data.error || 'unknown'); } })
      .catch(function (err) { cb(false, err.message); });
    }

    function openIssue() {
      var title     = titleInput.value.trim() || ('Correction: ' + articleSlug);
      var issueBody = bodyArea.value.trim();
      var issueUrl  = GITHUB_REPO + '/issues/new?title=' + encodeURIComponent(title)
                    + '&body=' + encodeURIComponent(issueBody);
      window.open(issueUrl, '_blank', 'noopener,noreferrer');
      maybeDelete(function (ok, err) {
        if (!ok) { statusEl.textContent = 'Delete failed: ' + esc(err); return; }
        close(); init();
      });
    }

    overlay.querySelector('#fba-conv-cancel').addEventListener('click', close);
    overlay.querySelector('#fba-conv-issue').addEventListener('click', openIssue);
    if (editUrl) {
      overlay.querySelector('#fba-conv-edit').addEventListener('click', function () {
        window.open(editUrl, '_blank', 'noopener,noreferrer');
        maybeDelete(function (ok, err) {
          if (!ok) { statusEl.textContent = 'Delete failed: ' + esc(err); return; }
          close(); init();
        });
      });
    }
    overlay.addEventListener('click', function (e) { if (e.target === overlay) { close(); } });
    document.addEventListener('keydown', function escH(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escH); }
    });
  }

  /* ── delete single correction ─────────────────────────────────── */

  function deleteCorrectionOnly(corrId) {
    if (!getToken()) {
      alert('Enter and save an admin token first — needed to delete entries.');
      return;
    }
    if (!confirm('Delete this correction? This cannot be undone.')) { return; }
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Token': getToken() },
      body: JSON.stringify({ action: 'delete_correction', id: corrId })
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data.ok) { init(); }
      else { alert('Delete error: ' + (data.error || 'unknown')); }
    })
    .catch(function (err) { alert('Request failed: ' + err.message); });
  }

  /* ── init ─────────────────────────────────────────────────────── */

  async function init() {
    root.innerHTML = '<div class="fba-loading"><span class="fba-spinner"></span>Loading feedback data…</div>';

    try {
      var results     = await Promise.all([fetchSummary(), fetchSitemap()]);
      var rows        = results[0];
      var sitemapUrls = results[1];

      /* Build zero-feedback page list from sitemap */
      var SKIP = new Set(['/', '/tags/', '/tag-glossary/', '/article-template/', '/contributing/', '/404.html']);
      var feedbackNorm = {};
      rows.forEach(function (r) { feedbackNorm[normalize(r.article_url)] = true; });

      var zeroUrls = sitemapUrls
        .filter(function (u) { return u.startsWith(SITE); })
        .map(normalize)
        .filter(function (u) {
          var rel = '/' + u.replace(SITE, '');
          return !SKIP.has(rel) && !feedbackNorm[u];
        });

      renderPage(rows, zeroUrls);

    } catch (e) {
      if (e.message === 'auth') {
        root.innerHTML = '<div class="fba-error"><strong>Admin token required.</strong><br>Enter your admin token in the field above and click Save, then reload the page.</div>';
        root.insertAdjacentHTML('afterbegin',
          '<div class="fba-pat-row">'
          + '<label class="fba-pat-label" for="fba-pat">Admin Token</label>'
          + '<input id="fba-pat" class="fba-pat-input" type="password" autocomplete="off"'
          + ' placeholder="Admin token" value="' + esc(getToken()) + '">'
          + '<button class="fba-btn fba-btn-save" id="fba-pat-save">Save &amp; Reload</button>'
          + '</div>'
        );
        var saveBtn = root.querySelector('#fba-pat-save');
        if (saveBtn) {
          saveBtn.addEventListener('click', function () {
            saveToken(root.querySelector('#fba-pat').value.trim());
            init();
          });
        }
      } else {
        root.innerHTML = '<div class="fba-error"><strong>Error loading data:</strong><br>' + esc(e.message) + '</div>';
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
