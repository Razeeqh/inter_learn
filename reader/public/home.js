/* The library home: what fills the reading pane when no chapter is open.
 * Replaces the old plain welcome panel. */

import { makeScene, SUBJECTS } from './scene3d.js';

const LAST = 'reader.last';
let TREE = null;

function chaptersFor(name) {
  if (!TREE) return [];
  const subject = TREE.subjects.find((s) => s.name === name);
  if (!subject) return [];
  return subject.courses.flatMap((c) =>
    c.chapters.map((ch) => Object.assign({ course: c.label, year: c.year }, ch)));
}

function card(s) {
  const list = chaptersFor(s.key);
  const picks = list.slice(0, 4);
  return `
    <article class="hm-card" style="--c:${s.hex}">
      <header>
        <span class="hm-orb"></span>
        <div>
          <h3>${s.name}</h3>
          <p>${list.length} chapters &middot; 1st &amp; 2nd year</p>
        </div>
      </header>
      <p class="hm-line">${s.line}</p>
      <ul class="hm-chips">
        ${picks.map((c) => `<li><a href="#${c.path}/${c.files[0].key}">${c.title}</a></li>`).join('')}
      </ul>
      <a class="hm-go" href="${s.go}">${s.hook} &rarr;</a>
    </article>`;
}

function resumeCard() {
  let last;
  try { last = JSON.parse(localStorage.getItem(LAST) || 'null'); } catch (e) { last = null; }
  if (!last || !last.path) return '';
  return `
    <a class="hm-resume" href="#${last.path}/${last.file}">
      <span>Pick up where you stopped</span>
      <b>${last.title}</b>
      <em>${last.label} &rarr;</em>
    </a>`;
}

function render(main) {
  const el = document.createElement('div');
  el.className = 'hm';
  el.innerHTML = `
    <section class="hm-hero">
      <canvas class="hm-canvas"></canvas>
      <div class="hm-hero-in">
        <p class="hm-kick">The library</p>
        <h1 class="hm-title">Ninety-four chapters.<br>You only need today's one.</h1>
        <div class="hm-actions">
          ${SUBJECTS.map((s, i) => `<a class="hm-btn" data-i="${i}" href="${s.go}" style="--c:${s.hex}">${s.hook}</a>`).join('')}
        </div>
      </div>
    </section>
    ${resumeCard()}
    <section class="hm-grid">${SUBJECTS.map(card).join('')}</section>
    <section class="hm-how">
      <h2>What is inside every chapter</h2>
      <div class="hm-steps">
        <div><i>01</i><b>Mind map</b><span>the whole chapter on one screen</span></div>
        <div><i>02</i><b>Concepts</b><span>from zero, with worked examples</span></div>
        <div><i>03</i><b>Formulae</b><span>typeset, and when to use each</span></div>
        <div><i>04</i><b>Board papers</b><span>previous years, solved</span></div>
        <div><i>05</i><b>JEE / EAPCET</b><span>the competitive versions</span></div>
        <div><i>06</i><b>Patterns</b><span>every shape a question can take</span></div>
      </div>
    </section>`;

  main.innerHTML = '';
  main.appendChild(el);

  let gl = null;
  try {
    gl = makeScene(el.querySelector('.hm-canvas'), { compact: true });
    requestAnimationFrame(() => gl.resize());
  } catch (e) { /* no webgl: the gradient behind the canvas still reads well */ }

  if (gl) {
    el.querySelectorAll('.hm-btn, .hm-card').forEach((n, i) => {
      const idx = n.dataset.i !== undefined ? Number(n.dataset.i) : i % SUBJECTS.length;
      n.addEventListener('pointerenter', () => gl.focus(idx));
      n.addEventListener('pointerleave', () => gl.focus(-1));
    });
    el.addEventListener('pointermove', (e) => {
      const b = el.getBoundingClientRect();
      gl.setPointer((e.clientX - b.left) / b.width - 0.5, (e.clientY - b.top) / b.height - 0.5);
    });
  }
  return gl;
}

function boot() {
  const main = document.querySelector('#main');
  if (!main) return;
  let gl = null;

  const show = () => {
    if (location.hash.replace('#', '')) return;
    if (main.querySelector('.hm')) return;
    if (gl) gl.stop();
    gl = render(main);
  };

  const hide = () => {
    if (!location.hash.replace('#', '')) return;
    if (gl) { gl.stop(); gl = null; }
  };

  fetch('tree.json')
    .then((r) => r.json())
    .then((t) => { TREE = t; if (main.querySelector('.hm')) { main.innerHTML = ''; } show(); })
    .catch(() => show());

  window.addEventListener('hashchange', () => { hide(); show(); });
  show();

  // remember the chapter being read, for the resume card
  window.addEventListener('hashchange', () => {
    const hash = decodeURIComponent(location.hash.slice(1));
    if (!hash.includes('/')) return;
    const at = hash.lastIndexOf('/');
    const path = hash.slice(0, at);
    const file = hash.slice(at + 1);
    const title = document.querySelector('h1.chtitle');
    const tab = document.querySelector('.tabs a.on');
    if (!title) return;
    try {
      localStorage.setItem(LAST, JSON.stringify({
        path, file, title: title.textContent, label: tab ? tab.textContent : 'Open'
      }));
    } catch (e) { /* storage may be blocked */ }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
