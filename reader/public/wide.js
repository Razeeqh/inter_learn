/* Diagrams are monospace, so on a narrow screen most of them are wider than the
 * column. Mark the ones that scroll, so a reader knows to swipe.
 * Kept in a closure: toc.js is a plain script too, and it has its own mark(). */
(function () {
  function flag(wrap) {
    const pre = wrap && wrap.querySelector('pre.art');
    if (!pre) return;
    const over = pre.scrollWidth > pre.clientWidth + 2;
    wrap.classList.toggle('over', over);
    if (!over) return;
    if (!wrap.querySelector('.hint')) {
      const hint = document.createElement('span');
      hint.className = 'hint';
      hint.textContent = 'swipe \u2192';
      wrap.appendChild(hint);
    }
    wrap.classList.toggle('end',
      pre.scrollLeft + pre.clientWidth >= pre.scrollWidth - 4);
  }

  function scan() {
    document.querySelectorAll('.artwrap').forEach((w) => {
      flag(w);
      const pre = w.querySelector('pre.art');
      if (pre && !pre.dataset.watched) {
        pre.dataset.watched = '1';
        pre.addEventListener('scroll', () => flag(w), { passive: true });
      }
    });
  }

  const main = document.getElementById('main');
  if (main) {
    new MutationObserver(() => setTimeout(scan, 60))
      .observe(main, { childList: true, subtree: true });
  }
  window.addEventListener('resize', scan);
  window.addEventListener('load', scan);
  setTimeout(scan, 300);
}());
