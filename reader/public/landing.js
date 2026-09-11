/* Full screen 3D landing page.
 *
 * Shown only when the reader is opened at the top level. Any deep link with a
 * hash goes straight to the chapter, so nothing about the reader changes. */

import { makeScene, SUBJECTS } from './scene3d.js';
import { mountMascot } from './mascot.js';

const POSE_FOR = {
  'ld-hero': 'read',
  'ld-story': 'write',
  'ld-pick': 'smile',
  'ld-stats': 'proud',
  'ld-end': 'think'
};

function shell() {
  const el = document.createElement('div');
  el.id = 'landing';
  el.innerHTML = `
    <div class="ld-loader"><div class="ld-loader-in">
      <div class="ld-mark">SL</div>
      <div class="ld-bar"><i></i></div>
      <div class="ld-pct">0%</div>
    </div></div>

    <canvas class="ld-canvas"></canvas>
    <div class="ld-grain"></div>

    <header class="ld-nav">
      <span class="ld-brand">SOLO <b>LEARNING</b></span>
      <button class="ld-skip" type="button">Skip the intro &rarr;</button>
    </header>

    <main class="ld-scroll">
      <section class="ld-sec ld-hero">
        <p class="ld-kick">Intermediate &middot; Maths, Physics, Chemistry</p>
        <h1 class="ld-h1"><span>EXAM.</span><span>I AM</span><span>COMING.</span></h1>
        <p class="ld-lead">Right now it feels like too much. Ninety-four chapters, two years,
           one shot. So don't look at all of it. Look at <b>one chapter</b>.</p>
        <p class="ld-lead dim">That is the whole trick. Open one. Finish one. Tomorrow, open the next.</p>
        <div class="ld-cta"><span class="ld-hint">scroll &darr;</span></div>
      </section>

      <section class="ld-sec ld-story">
        <div class="ld-beats">
          <div class="ld-beat"><i>01</i><b>Today you are behind.</b>
            <span>Everyone starts somewhere. Behind is a starting line, not a verdict.</span></div>
          <div class="ld-beat"><i>02</i><b>One chapter a day.</b>
            <span>Mind map first. Then concepts. Then the formulae you actually need.</span></div>
          <div class="ld-beat"><i>03</i><b>Then the papers.</b>
            <span>Board questions, JEE, EAPCET &mdash; and every pattern they can be asked in.</span></div>
          <div class="ld-beat"><i>04</i><b>Then the exam is small.</b>
            <span>Because you have already seen it. That is the only difference.</span></div>
        </div>
      </section>

      <section class="ld-sec ld-pick">
        <h2 class="ld-h2">So &mdash; where do we start?</h2>
        <p class="ld-sub">Pick the one that is scaring you the most. That is the one worth opening.</p>
        <div class="ld-cards"></div>
        <div class="ld-lost">
          <span>Struggling to choose?</span>
          <button class="ld-ghost" type="button">Take me to the library &rarr;</button>
        </div>
      </section>

      <section class="ld-sec ld-stats">
        <div><b data-count="94">0</b><span>chapters</span></div>
        <div><b data-count="564">0</b><span>pages</span></div>
        <div><b data-count="3">0</b><span>subjects</span></div>
        <div><b data-count="2">0</b><span>years</span></div>
      </section>

      <section class="ld-sec ld-end">
        <h2 class="ld-h1 sm"><span>OPEN ONE</span><span>CHAPTER.</span></h2>
        <p class="ld-lead">That is all today asks of you.</p>
        <button class="ld-primary big" type="button">Enter the library</button>
      </section>
    </main>`;

  el.querySelector('.ld-cards').innerHTML = SUBJECTS.map((s, i) => `
    <a class="ld-card" data-i="${i}" href="${s.go}" style="--c:${s.hex}">
      <span class="ld-chip"></span>
      <b>${s.hook}</b>
      <span class="ld-card-line">${s.line}</span>
      <em>Start ${s.name.toLowerCase()} &rarr;</em>
    </a>`).join('');
  return el;
}

function countUp(el) {
  const target = Number(el.dataset.count);
  const started = performance.now();
  const step = (now) => {
    const k = Math.min(1, (now - started) / 1100);
    el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function run(el) {
  const canvas = el.querySelector('.ld-canvas');
  const scroller = el.querySelector('.ld-scroll');
  const loader = el.querySelector('.ld-loader');
  const bar = el.querySelector('.ld-bar i');
  const pct = el.querySelector('.ld-pct');

  let progress = 0;
  const tick = setInterval(() => {
    progress = Math.min(96, progress + 6 + Math.random() * 12);
    bar.style.width = progress + '%';
    pct.textContent = Math.round(progress) + '%';
  }, 90);

  let gl = null;
  try {
    gl = makeScene(canvas);
  } catch (err) {
    el.classList.add('no-gl');
  }
  clearInterval(tick);
  bar.style.width = '100%';
  pct.textContent = '100%';
  setTimeout(() => { loader.classList.add('gone'); el.classList.add('ready'); }, 340);

  scroller.addEventListener('scroll', () => {
    const max = scroller.scrollHeight - scroller.clientHeight;
    if (gl) gl.setScroll(max > 0 ? scroller.scrollTop / max : 0);
  }, { passive: true });

  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.addEventListener('pointermove', (e) => {
      if (gl) gl.setPointer(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5);
    });
  }

  // hovering a subject lights up its solid in the scene
  el.querySelectorAll('.ld-card').forEach((card) => {
    card.addEventListener('pointerenter', () => gl && gl.focus(Number(card.dataset.i)));
    card.addEventListener('pointerleave', () => gl && gl.focus(-1));
  });

  const seen = new WeakSet();
  const mascot = mountMascot(el);
  mascot.set('read');

  const io = new IntersectionObserver((rows) => {
    for (const r of rows) {
      if (!r.isIntersecting) continue;
      r.target.classList.add('in');
      const pose = POSE_FOR[[...r.target.classList].find((c) => POSE_FOR[c])];
      if (pose) mascot.set(pose);
      if (r.target.classList.contains('ld-stats') && !seen.has(r.target)) {
        seen.add(r.target);
        r.target.querySelectorAll('[data-count]').forEach(countUp);
      }
    }
  }, { threshold: 0.25, root: scroller });
  el.querySelectorAll('.ld-sec').forEach((s) => io.observe(s));

  const enter = () => {
    el.classList.add('leaving');
    setTimeout(() => {
      el.remove();
      if (gl) gl.stop();
      document.body.classList.remove('landing-on');
      window.dispatchEvent(new Event('hashchange'));
    }, 620);
  };

  el.querySelectorAll('.ld-primary, .ld-skip, .ld-ghost, .ld-card')
    .forEach((b) => b.addEventListener('click', enter));
}

if (!location.hash.replace('#', '')) {
  const el = shell();
  document.body.appendChild(el);
  document.body.classList.add('landing-on');
  run(el);
}
