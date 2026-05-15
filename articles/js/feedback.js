/* feedback.js — article feedback buttons for HB Robotics Knowledge Base
 *
 * Injects a feedback bar at the bottom of every article with four actions:
 *   - Correct      → POSTs feedback to the Bluehost endpoint
 *   - Needs fix    → shows a modal, then POSTs correction text to the endpoint
 *   - Useful       → POSTs feedback to the Bluehost endpoint
 *   - Not useful   → POSTs feedback to the Bluehost endpoint
 *
 * The correction modal also offers a direct "Edit file on GitHub" link
 * for readers who want to open a pull request.
 */
(function () {
  'use strict';

  var SUBMIT_URL = 'https://wimblerobotics.com/feedback/submit.php';
  var EDIT_BASE  = 'https://github.com/wimblerobotics/wimblerobotics.github.io/edit/main/articles/';

  /* ── helpers ─────────────────────────────────────────────────── */

  function esc(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function openTab(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function postFeedback(type, body, info) {
    fetch(SUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ article_url: info.url, feedback_type: type, body: body || null })
    }).catch(function () { /* silently ignore network errors */ });
  }

  function showToast(msg) {
    var t = document.createElement('div');
    t.className = 'fb-toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { if (document.body.contains(t)) { document.body.removeChild(t); } }, 3000);
  }

  /* Derive the source file path from the current URL, e.g.
     /devops/colcon-workspace-discipline/ → devops/colcon-workspace-discipline.md */
  function editUrl() {
    var base  = window.location.pathname.replace(/^\/[^/]+\//, ''); // strip /site-root/
    var clean = base.replace(/\/$/, '');                             // strip trailing slash
    if (!clean || clean === 'index') { return null; }
    return EDIT_BASE + clean + '.md';
  }

  function pageInfo() {
    var raw   = document.title || '';
    var title = raw.replace(/\s*[-–|].*$/, '').trim();  // strip " - Site Name"
    var url   = window.location.href;
    return { title: title, url: url };
  }

  /* ── correction modal ────────────────────────────────────────── */

  function showModal(info) {
    var eu = editUrl();

    var overlay = document.createElement('div');
    overlay.className = 'fb-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Report a correction');

    overlay.innerHTML = [
      '<div class="fb-modal">',
      '  <h3 class="fb-modal-title">Report a correction</h3>',
      '  <p class="fb-modal-sub">',
      '    Article: <strong>' + esc(info.title) + '</strong>',
      '  </p>',
      '  <textarea class="fb-textarea"',
      '    placeholder="Describe what needs to be corrected…"',
      '    rows="5"',
      '    aria-label="Correction description">',
      '  </textarea>',
      '  <p class="fb-modal-hint">',
      '    Your correction is recorded anonymously.',
      '    Press <kbd>Ctrl+Enter</kbd> to submit, or use "Edit file" to open a pull request.',
      '  </p>',
      '  <div class="fb-modal-actions">',
      '    <button class="fb-btn fb-cancel">Cancel</button>',
      eu ? ('    <button class="fb-btn fb-edit">Edit file on GitHub ↗</button>') : '',
      '    <button class="fb-btn fb-submit">Submit issue ↗</button>',
      '  </div>',
      '</div>',
    ].join('\n');

    document.body.appendChild(overlay);

    var textarea = overlay.querySelector('.fb-textarea');
    var btnClose = overlay.querySelector('.fb-cancel');
    var btnEdit  = eu ? overlay.querySelector('.fb-edit') : null;
    var btnSub   = overlay.querySelector('.fb-submit');

    // focus trap: textarea first
    setTimeout(function () { textarea.focus(); }, 10);

    function close() { document.body.removeChild(overlay); }

    function submit() {
      var desc = textarea.value.trim() || null;
      postFeedback('correction', desc, info);
      showToast('Thank you — correction noted!');
      close();
    }

    btnClose.addEventListener('click', close);
    if (btnEdit) { btnEdit.addEventListener('click', function () { openTab(eu); close(); }); }
    btnSub.addEventListener('click', submit);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) { close(); }
    });

    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escHandler); }
    });

    textarea.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.ctrlKey) { submit(); }
    });
  }

  /* ── feedback bar ────────────────────────────────────────────── */

  function buildBar(info) {
    var bar = document.createElement('div');
    bar.className = 'fb-bar';
    bar.setAttribute('aria-label', 'Article feedback');
    bar.innerHTML = [
      '<span class="fb-label">Feedback on this article:</span>',
      '<div class="fb-btns">',
      '  <button class="fb-btn fb-correct"   data-action="correct"   title="Article seems correct">',
      '    <span aria-hidden="true">✓</span> Correct',
      '  </button>',
      '  <button class="fb-btn fb-fix"       data-action="fix"       title="Article needs a correction">',
      '    <span aria-hidden="true">⚠</span> Needs correction',
      '  </button>',
      '  <button class="fb-btn fb-useful"    data-action="useful"    title="Article is useful">',
      '    <span aria-hidden="true">👍</span> Useful',
      '  </button>',
      '  <button class="fb-btn fb-notuseful" data-action="notuseful" title="Article is not very useful">',
      '    <span aria-hidden="true">👎</span> Not useful',
      '  </button>',
      '</div>',
    ].join('\n');

    bar.querySelector('[data-action="correct"]').addEventListener('click', function () {
      postFeedback('correct', null, info);
      showToast('Thanks for the feedback!');
    });

    bar.querySelector('[data-action="fix"]').addEventListener('click', function () {
      showModal(info);
    });

    bar.querySelector('[data-action="useful"]').addEventListener('click', function () {
      postFeedback('useful', null, info);
      showToast('Thanks for the feedback!');
    });

    bar.querySelector('[data-action="notuseful"]').addEventListener('click', function () {
      postFeedback('not-useful', null, info);
      showToast('Thanks for the feedback!');
    });

    return bar;
  }

  /* ── init ────────────────────────────────────────────────────── */

  function init() {
    // Remove any existing bar (for re-init safety)
    var existing = document.querySelector('.fb-bar');
    if (existing) { existing.parentNode.removeChild(existing); }

    var article = document.querySelector('.md-content__inner');
    if (!article) { return; }

    article.appendChild(buildBar(pageInfo()));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
