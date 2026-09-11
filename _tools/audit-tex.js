/* Converts every expression in the corpus to LaTeX and checks KaTeX accepts it.
 *   node _tools/audit-tex.js          summary
 *   node _tools/audit-tex.js --show   sample failures
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'reader/public/tex.js'), 'utf8'));
const katex = require(path.join(ROOT, 'reader/public/vendor/katex/katex.min.js'));
const Tex = window.Tex;

const SUBJECTS = ['Maths', 'Physics', 'Chemistry'];
const show = process.argv.includes('--show');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const files = SUBJECTS.flatMap((s) => walk(path.join(ROOT, s)));

let seen = 0, converted = 0, broke = 0;
const bad = [];
const reasons = {};
const samples = {};

for (const file of files) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const lines = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n');
  let fenced = false;

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^\s*```/.test(l)) { fenced = !fenced; continue; }

    const candidates = [];
    if (fenced) {
      const t = l.trim();
      if (t && !/^[|+\-_=\s]+$/.test(t)) candidates.push(t);
    } else {
      for (const m of l.matchAll(/`([^`]+)`/g)) candidates.push(m[1]);
    }

    for (const c of candidates) {
      seen++;
      const tex = Tex.toTeX(c);
      if (!tex) {
        const r = Tex.why(c) || 'other';
        reasons[r] = (reasons[r] || 0) + 1;
        if (!samples[r]) samples[r] = [];
        if (samples[r].length < 4) samples[r].push(c.slice(0, 90));
        continue;
      }
      converted++;
      try {
        katex.renderToString(tex, { throwOnError: true, strict: false });
      } catch (err) {
        broke++;
        if (bad.length < 400) bad.push({ rel, line: i + 1, src: c, tex, msg: err.message });
      }
    }
  }
}

console.log(`expressions seen ${seen}   converted to LaTeX ${converted}` +
  `  (${(100 * converted / seen).toFixed(1)}%)   KaTeX errors ${broke}`);

if (process.argv.includes('--why')) {
  console.log('\nnot converted, by reason:');
  for (const [k, v] of Object.entries(reasons).sort((a, b) => b[1] - a[1])) {
    console.log(`${String(v).padStart(7)}  ${k}`);
    for (const s of samples[k] || []) console.log(`           ${JSON.stringify(s)}`);
  }
}

if (show) {
  for (const b of bad.slice(0, 25)) {
    console.log(`\n-- ${b.rel}:${b.line}`);
    console.log('   src: ' + b.src);
    console.log('   tex: ' + b.tex);
    console.log('   err: ' + b.msg.slice(0, 110));
  }
}
process.exit(broke ? 1 : 0);
