/* Chapter intro and completion notice.
 *
 * On opening a chapter page the companion appears with a send-off; when the
 * reader reaches the bottom she leaves and a status window confirms the clear. */

import { makeCharacter } from './mascot.js';

const DONE = 'reader.cleared';

function chapterName() {
  const h = document.querySelector('h1.chtitle');
  return h ? h.textContent.trim() : '';
}

/** The page within the chapter: Mind map, Concepts, Formulae and so on. */
function pageName() {
  const tab = document.querySelector('.tabs a.on');
  return tab ? tab.textContent.trim() : '';
}

function intro() {
  const el = makeCharacter();
  el.className = 'mascot solo-intro';
  el.dataset.pose = 'smile';
  el.dataset.eyes = 'shut';
  el.dataset.mouth = 'wide';
  el.insertAdjacentHTML('afterbegin',
    '<div class="mc-bubble say"><p>All the best. Time to solo learn!</p></div>');
  document.body.appendChild(el);

  requestAnimationFrame(() => el.classList.add('in'));
  setTimeout(() => {
    el.classList.remove('in');
    el.classList.add('out');
    setTimeout(() => el.remove(), 700);
  }, 3400);
}

function statusWindow(name) {
  const el = document.createElement('div');
  el.className = 'status-win';
  el.innerHTML = `
    <div class="sw-frame">
      <div class="sw-head"><span class="sw-ico">&#9888;</span> ALERT</div>
      <div class="sw-body">[<span class="sw-name">${name}</span> <span class="sw-ok">COMPLETE.</span>]</div>
      <div class="sw-note">Chapter cleared. Open the next one tomorrow.</div>
    </div>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('in'));

  const close = () => {
    el.classList.remove('in');
    setTimeout(() => el.remove(), 500);
  };
  el.addEventListener('click', close);
  setTimeout(close, 6000);
}

function cleared() {
  try { return JSON.parse(localStorage.getItem(DONE) || '{}'); } catch (e) { return {}; }
}

function markCleared(key) {
  const all = cleared();
  all[key] = Date.now();
  try { localStorage.setItem(DONE, JSON.stringify(all)); } catch (e) { /* blocked */ }
}

let shownFor = '';
let tail = 0;

function check() {
  const hash = decodeURIComponent(location.hash.replace(/^#/, ''));
  if (!hash.includes('/') || shownFor === hash) return;

  const room = document.documentElement.scrollHeight - innerHeight;
  if (room <= 0 || scrollY < room - 140) return;

  const name = chapterName();
  if (!name) return;

  const page = pageName();
  shownFor = hash;
  markCleared(hash);
  document.querySelectorAll('.solo-intro').forEach((n) => n.remove());
  statusWindow((page ? `${name} \u2014 ${page}` : name).toUpperCase());
}

// a jump to the end fires very few events, and the page height is often still
// settling when they arrive, so check again once things are quiet
function onScroll() {
  check();
  clearTimeout(tail);
  tail = setTimeout(check, 350);
}

function start() {
  const hash = decodeURIComponent(location.hash.replace(/^#/, ''));
  if (!hash.includes('/')) return;
  if (!chapterName()) { setTimeout(start, 260); return; }
  intro();
}

addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll, { passive: true });
// a slow poll as well: reaching the end by keyboard, by a fling, or while the
// page is still growing does not always produce a usable scroll event
setInterval(check, 900);
addEventListener('hashchange', () => setTimeout(start, 320));
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(start, 700));
else setTimeout(start, 700);
