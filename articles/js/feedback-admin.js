/* feedback-admin.js — Moderator feedback dashboard
 *
 * Only activates on pages containing <div id="fb-admin-root">.
 *
 * Data source: open GitHub Issues created by feedback.js (labels: feedback,
 * correction, verified-correct, useful, needs-improvement).
 *
 * Features:
 *   - Summary cards: corrections pending, total issues, zero-feedback pages
 *   - Table sorted by "needs most attention" (fixes × 4 + notuseful × 2 …)
 *   - Expandable list of individual correction issue links per article
 *   - "No feedback" section sourced from sitemap.xml
 *   - Reset: closes all open issues for one article (requires GitHub PAT)
 *     PAT is stored in localStorage; use a fine-grained token, Issues R+W only.
 */
(function () {
  'use strict';

  var ADMIN_ID = 'fb-admin-root';
  var OWNER    = 'wimblerobotics';
  var REPO     = 'wimblerobotics.github.io';
  var API      = 'https://api.github.com/repos/' + OWNER + '/' + REPO;
  var SITE     = 'https://wimblerobotics.github.io/';
  var PAT_KEY  = 'fb_github_pat';

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

  function getPat() { return localStorage.getItem(PAT_KEY) || ''; }
  function savePat(v) { if (v) { localStorage.setItem(PAT_KEY, v); } else { localStorage.removeItem(PAT_KEY); } }

  function apiHeaders(extra) {
    var h = { 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
    var pat = getPat();
    if (pat) { h['Authorization'] = 'Bearer ' + pat; }
    return Object.assign(h, extra || {});
  }

  async function apiFetch(url, opts) {
    var res = await fetch(url, Object.assign({ headers: apiHeaders() }, opts || {}));
    if (!res.ok) {
      var body = await res.text().catch(function () { return ''; });
      throw new Error('GitHub API ' + res.status + ' — ' + body.slice(0, 160));
    }
    return res.json();
  }

  async function fetchByLabel(label) {
    var page = 1, acc = [];
    while (true) {
      var batch = await apiFetch(
        API + '/issues?state=open&labels=' + encodeURIComponent(label) + '&per_page=100&page=' + page
      );
      acc = acc.concat(batch);
      if (batch.length < 100) { break; }
      page++;
    }
    return acc;
  }

  async function fetchAllFeedback() {
    var results = await Promise.all([fetchByLabel('feedback'), fetchByLabel('correction')]);
    var seen = {};
    return [].concat(results[0], results[1]).filter(function (i) {
      if (seen[i.number]) { return false; }
      seen[i.number] = true;
      return true;
    });
  }

  async function fetchSitemap() {
    try {
      var res = await fetch(SITE + 'sitemap.xml');
      var xml = await res.text();
      var doc = new DOMParser().parseFromString(xml, 'application/xml');
      return Array.from(doc.querySelectorAll('loc')).map(function (n) { return n.textContent.trim(); });
    } catch (e) { return []; }
  }

  function extractUrl(body) {
    var m = (body || '').match(/\*\*Article:\*\*\s*(https?:\/\/\S+)/);
    return m ? m[1].trim() : null;
  }

  function labelType(issue) {
    var names = issue.labels.map(function (l) { return l.name; });
    if (names.indexOf('verified-correct')  !== -1) { return 'correct'; }
    if (names.indexOf('correction')        !== -1) { return 'fix'; }
    if (names.indexOf('useful')            !== -1) { return 'useful'; }
    if (names.indexOf('needs-improvement') !== -1) { return 'notuseful'; }
    return null;
  }

  function aggregate(issues) {
    var map = {};
    issues.forEach(function (issue) {
      var url  = extractUrl(issue.body);
      var type = labelType(issue);
      if (!url || !type) { return; }
      if (!map[url]) { map[url] = { correct: [], fix: [], useful: [], notuseful: [] }; }
      map[url][type].push(issue);
    });
    return map;
  }

  function attScore(e) {
    return e.fix.length * 4 + e.notuseful.length * 2 - e.useful.length - e.correct.length;
  }

  function slug(url) {
    return url.replace(SITE, '').replace(/\/$/, '') || '/';
  }

  function normalize(url) {
    return url.endsWith('/') ? url : url + '/';
  }

  /* ── render ───────────────────────────────────────────────────── */

  function renderCards(map, zeroUrls) {
    var entries = Object.values(map);
    var total   = entries.reduce(function (s, e) { return s + e.fix.length + e.notuseful.length + e.useful.length + e.correct.length; }, 0);
    var fixing  = entries.filter(function (e) { return e.fix.length > 0; }).length;
    return '<div class="fba-cards">'
      + '<div class="fba-card fba-card-fix"><div class="fba-card-num">' + fixing + '</div><div class="fba-card-lbl">Corrections pending</div></div>'
      + '<div class="fba-card fba-card-total"><div class="fba-card-num">' + total + '</div><div class="fba-card-lbl">Open feedback issues</div></div>'
      + '<div class="fba-card fba-card-zero"><div class="fba-card-num">' + zeroUrls.length + '</div><div class="fba-card-lbl">Pages with no feedback</div></div>'
      + '<div class="fba-card"><div class="fba-card-num">' + Object.keys(map).length + '</div><div class="fba-card-lbl">Pages with feedback</div></div>'
      + '</div>';
  }

  function renderTable(entries) {
    if (!entries.length) { return '<p class="fba-empty">No open feedback issues found.</p>'; }

    var rows = entries.map(function (item, idx) {
      var url = item.url, e = item.entry;
      var rowClass = e.fix.length > 0 ? 'fba-row-fix' : attScore(e) < -1 ? 'fba-row-good' : '';
      var total = e.fix.length + e.notuseful.length + e.useful.length + e.correct.length;

      var fixCell = e.fix.length > 0
        ? '<button class="fba-count-btn" data-toggle="' + idx + '" title="Show correction details">⚠ ' + e.fix.length + '</button>'
        : '<span>' + (e.fix.length || '–') + '</span>';

      var fixLinks = e.fix.map(function (i) {
        return '<li><a href="' + esc(i.html_url) + '" target="_blank" rel="noopener noreferrer">'
          + '#' + i.number + ': ' + esc(i.title) + '</a></li>';
      }).join('');

      var detailRow = e.fix.length > 0
        ? '<tr class="fba-fix-detail" id="fba-detail-' + idx + '" style="display:none"><td colspan="6">'
          + '<ul class="fba-fix-list">' + fixLinks + '</ul></td></tr>'
        : '';

      return '<tr class="' + esc(rowClass) + '">'
        + '<td class="fba-cell-page"><a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(slug(url)) + '</a></td>'
        + '<td class="fba-cell-count fba-fix-col">' + fixCell + '</td>'
        + '<td class="fba-cell-count">' + (e.notuseful.length || '–') + '</td>'
        + '<td class="fba-cell-count">' + (e.useful.length   || '–') + '</td>'
        + '<td class="fba-cell-count">' + (e.correct.length  || '–') + '</td>'
        + '<td class="fba-cell-action">'
        + '<button class="fba-btn fba-btn-reset" data-idx="' + idx + '" data-total="' + total + '">Reset</button>'
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
      + '<tbody>' + rows + '</tbody>'
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

  function renderPage(map, zeroUrls) {
    var entries = Object.entries(map)
      .map(function (pair) { return { url: pair[0], entry: pair[1] }; })
      .sort(function (a, b) { return attScore(b.entry) - attScore(a.entry); });

    root.innerHTML =
      '<div class="fba-pat-row">'
      + '<label class="fba-pat-label" for="fba-pat">GitHub PAT</label>'
      + '<input id="fba-pat" class="fba-pat-input" type="password" autocomplete="off"'
      + ' placeholder="Fine-grained token — Issues: Read &amp; Write" value="' + esc(getPat()) + '">'
      + '<button class="fba-btn fba-btn-save" id="fba-pat-save">Save</button>'
      + '<span class="fba-pat-hint">Required only to reset (close) issues.</span>'
      + '</div>'
      + renderCards(map, zeroUrls)
      + renderTable(entries)
      + renderZero(zeroUrls);

    /* -- bind events -------------------------------------------- */

    root.querySelector('#fba-pat-save').addEventListener('click', function () {
      savePat(root.querySelector('#fba-pat').value.trim());
      var btn = root.querySelector('#fba-pat-save');
      btn.textContent = 'Saved ✓';
      setTimeout(function () { btn.textContent = 'Save'; }, 1500);
    });

    root.addEventListener('click', function (e) {
      var toggleBtn = e.target.closest('[data-toggle]');
      if (toggleBtn) {
        var idx = toggleBtn.dataset.toggle;
        var row = document.getElementById('fba-detail-' + idx);
        if (row) { row.style.display = row.style.display === 'none' ? '' : 'none'; }
      }

      var resetBtn = e.target.closest('.fba-btn-reset');
      if (resetBtn) {
        var idx2  = parseInt(resetBtn.dataset.idx, 10);
        var total = parseInt(resetBtn.dataset.total, 10);
        var item  = entries[idx2];
        if (!item) { return; }
        if (!getPat()) {
          alert('Enter and save a GitHub PAT first — needed to close issues.');
          return;
        }
        showReset(item.url, item.entry, total);
      }
    });
  }

  /* ── reset modal ──────────────────────────────────────────────── */

  function showReset(url, entry, total) {
    var overlay = document.createElement('div');
    overlay.className = 'fb-overlay';
    overlay.innerHTML =
      '<div class="fb-modal">'
      + '<h3 class="fb-modal-title">Reset feedback for this page?</h3>'
      + '<p><strong>' + esc(slug(url)) + '</strong></p>'
      + '<p class="fb-modal-hint">Closes ' + total + ' open issue' + (total !== 1 ? 's' : '') + '. '
      + 'The page feedback counts will return to zero.</p>'
      + '<div class="fb-modal-actions">'
      + '<button class="fb-btn fb-cancel" id="fba-modal-cancel">Cancel</button>'
      + '<button class="fb-btn fba-btn-danger" id="fba-modal-confirm">Close ' + total + ' issue' + (total !== 1 ? 's' : '') + '</button>'
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

    overlay.querySelector('#fba-modal-confirm').addEventListener('click', async function () {
      var btn    = overlay.querySelector('#fba-modal-confirm');
      var status = overlay.querySelector('#fba-modal-status');
      btn.disabled = true;
      status.textContent = 'Closing issues…';

      var all = [].concat(entry.correct, entry.fix, entry.useful, entry.notuseful);
      var closed = 0, failed = 0;

      for (var j = 0; j < all.length; j++) {
        var issue = all[j];
        try {
          var res = await fetch(API + '/issues/' + issue.number, {
            method: 'PATCH',
            headers: apiHeaders({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ state: 'closed', state_reason: 'completed' })
          });
          if (!res.ok) { throw new Error(res.status); }
          closed++;
          status.textContent = 'Closed ' + closed + '/' + all.length + '…';
        } catch (err) {
          failed++;
        }
      }

      if (failed) {
        status.textContent = closed + ' closed, ' + failed + ' failed — check PAT permissions.';
      } else {
        status.textContent = closed + ' issue' + (closed !== 1 ? 's' : '') + ' closed.';
      }

      setTimeout(function () {
        if (document.body.contains(overlay)) { document.body.removeChild(overlay); }
        init();   // re-fetch and re-render
      }, 1200);
    });
  }

  /* ── init ─────────────────────────────────────────────────────── */

  async function init() {
    root.innerHTML = '<div class="fba-loading"><span class="fba-spinner"></span>Loading feedback data…</div>';

    try {
      var results = await Promise.all([fetchAllFeedback(), fetchSitemap()]);
      var issues     = results[0];
      var sitemapUrls = results[1];
      var map        = aggregate(issues);

      /* Build zero-feedback page list from sitemap */
      var SKIP = new Set(['/', '/tags/', '/tag-glossary/', '/article-template/', '/contributing/', '/404.html']);
      var feedbackNorm = {};
      Object.keys(map).forEach(function (u) { feedbackNorm[normalize(u)] = true; });

      var zeroUrls = sitemapUrls
        .filter(function (u) { return u.startsWith(SITE); })
        .map(normalize)
        .filter(function (u) {
          var rel = '/' + u.replace(SITE, '');
          return !SKIP.has(rel) && !feedbackNorm[u];
        });

      renderPage(map, zeroUrls);

    } catch (e) {
      root.innerHTML = '<div class="fba-error"><strong>Error loading data:</strong><br>' + esc(e.message) + '</div>';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
