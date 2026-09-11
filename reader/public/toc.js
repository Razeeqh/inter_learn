/* Highlights the heading you are currently reading in the page contents. */

let last = 0;

function mark() {
  last = Date.now();
  const links = [...document.querySelectorAll('#toc a[data-id]')];
  if (!links.length) return;
  const heads = links.map((a) => document.getElementById(a.dataset.id));

  // the last heading that has scrolled past the top of the reading area
  let at = 0;
  for (let i = 0; i < heads.length; i++) {
    if (heads[i] && heads[i].getBoundingClientRect().top - 90 <= 0) at = i;
    else break;
  }
  for (let i = 0; i < links.length; i++) links[i].classList.toggle('cur', i === at);
}

// a plain time throttle, not requestAnimationFrame, which is paused in a
// background tab and would leave the highlight stuck
function onScroll() {
  if (Date.now() - last < 80) return;
  mark();
}

function watch() {
  const toc = document.getElementById('toc');
  if (!toc) return;
  new MutationObserver(onScroll).observe(toc, { childList: true });
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  addEventListener('hashchange', () => setTimeout(mark, 140));
  mark();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch);
else watch();
