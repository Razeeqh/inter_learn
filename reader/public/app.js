/* Loads the chapter tree and documents live from the local folders. */

const $ = (s) => document.querySelector(s);
const state = { tree: null, flat: [], current: null };

async function boot() {
  const res = await fetch('tree.json');
  state.tree = await res.json();
  $('#rootline').textContent = state.tree.root;
  buildSide();
  buildFlat();
  restorePrefs();
  window.addEventListener('hashchange', route);
  route();
}

function buildFlat() {
  for (const s of state.tree.subjects)
    for (const c of s.courses)
      for (const ch of c.chapters) {
        state.flat.push({ kind: 'chapter', label: ch.title, ctx: `${c.label} · ${c.year}`, path: ch.path, file: ch.files[0].key });
        for (const f of ch.files)
          state.flat.push({ kind: 'page', label: `${ch.title} — ${f.label}`, ctx: `${c.label} · ${c.year}`, path: ch.path, file: f.key });
      }
}

function buildSide() {
  const out = [];
  for (const s of state.tree.subjects) {
    out.push(`<div class="grp"><h3>${s.name}</h3>`);
    for (const c of s.courses) {
      out.push(`<details><summary>${c.label} <em>${c.year}</em></summary><ul>`);
      for (const ch of c.chapters)
        out.push(`<li><a href="#${ch.path}/${ch.files[0].key}"><span>${ch.num}</span>${ch.title}</a></li>`);
      out.push('</ul></details>');
    }
    out.push('</div>');
  }
  $('#side').innerHTML = out.join('');
}

function findChapter(path) {
  for (const s of state.tree.subjects)
    for (const c of s.courses)
      for (const ch of c.chapters)
        if (ch.path === path) return { ch, course: c, subject: s };
  return null;
}

async function route() {
  const hash = decodeURIComponent(location.hash.slice(1));
  if (!hash) return;
  const idx = hash.lastIndexOf('/');
  const path = hash.slice(0, idx);
  const file = hash.slice(idx + 1);
  const found = findChapter(path);
  if (!found) return;

  const { ch, course } = found;
  document.body.dataset.subject = found.subject.name;   // drives the accent colour
  $('#main').innerHTML = '<p class="dim">Loading…</p>';

  const docPath = `${path}/${file}.md`.split('/').map(encodeURIComponent).join('/');
  const res = await fetch(docPath);
  if (!res.ok) { $('#main').innerHTML = '<p class="dim">Could not read that file.</p>'; return; }
  const src = await res.text();
  const { html, toc } = renderMarkdown(src);

  const tabs = ch.files.map((f) =>
    `<a href="#${path}/${f.key}" class="${f.key === file ? 'on' : ''}">${f.label}</a>`).join('');

  $('#main').innerHTML =
    `<div class="crumb">${course.label} · ${course.year} <span>›</span> Chapter ${ch.num}</div>
     <h1 class="chtitle">${ch.title}</h1>
     <div class="tabs">${tabs}</div>
     <article class="doc">${html}</article>`;

  $('#toc').innerHTML = toc.length > 3
    ? '<h4>On this page</h4>' + toc.map((t) =>
        `<a href="#${path}/${file}" data-id="${t.id}" class="l${t.level}">${t.text}</a>`).join('')
    : '';  $('#toc').querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const el = document.getElementById(a.dataset.id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('#side a').forEach((a) =>
    a.classList.toggle('cur', a.getAttribute('href').startsWith('#' + path + '/')));

  if (window.Anim) window.Anim.decorate($('#main'), found.subject.name, file);
  $('#main').scrollTop = 0;
  window.scrollTo(0, 0);
  state.current = { path, file };
}

/* ---------------------------------------------------------------- search */

function search(q) {
  const box = $('#hits');
  q = q.trim().toLowerCase();
  if (q.length < 2) { box.hidden = true; box.innerHTML = ''; return; }
  const words = q.split(/\s+/);
  const hits = [];
  for (const row of state.flat) {
    const hay = (row.label + ' ' + row.ctx).toLowerCase();
    if (words.every((w) => hay.includes(w))) hits.push(row);
    if (hits.length > 80) break;
  }
  box.hidden = false;
  box.innerHTML = hits.length
    ? hits.slice(0, 40).map((h) =>
        `<a href="#${h.path}/${h.file}">${h.label}<span>${h.ctx}</span></a>`).join('')
    : '<p class="dim">Nothing matched.</p>';
}

/* ---------------------------------------------------------------- prefs */

function restorePrefs() {
  const t = localStorage.getItem('reader.theme');
  if (t) document.documentElement.dataset.theme = t;
  const z = parseInt(localStorage.getItem('reader.zoom') || '0', 10);
  if (z) document.documentElement.style.setProperty('--mono', z + 'px');
}

function zoom(delta) {
  const cur = parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue('--mono'), 10) || 13;
  const next = Math.max(8, Math.min(22, cur + delta));
  document.documentElement.style.setProperty('--mono', next + 'px');
  localStorage.setItem('reader.zoom', String(next));
}

document.addEventListener('DOMContentLoaded', () => {
  $('#find').addEventListener('input', (e) => search(e.target.value));
  $('#hits').addEventListener('click', () => { $('#hits').hidden = true; $('#find').value = ''; });
  $('#zoomIn').addEventListener('click', () => zoom(1));
  $('#zoomOut').addEventListener('click', () => zoom(-1));
  $('#theme').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('reader.theme', next);
  });
  $('#menu').addEventListener('click', () => document.body.classList.toggle('nav-open'));
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault(); $('#find').focus();
    }
    if (e.key === 'Escape') { $('#hits').hidden = true; }
  });
  boot();
});
