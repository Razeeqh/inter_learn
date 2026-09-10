/* Small animated figures for the Physics concept pages.
 *
 * Each figure is plain SVG + CSS, drawn to illustrate one idea the text is
 * describing. They are injected under a matching heading, at most a few per
 * page, and can be paused - motion should help a reader, not fight them. */

const FIGURES = {

  shm: {
    title: 'Simple harmonic motion',
    caption: 'The mass accelerates towards the mean position, so the displacement traces a sine curve. ' +
             'Speed is greatest at the centre and zero at the extremes.',
    svg: `
      <svg viewBox="0 0 420 150" role="img" aria-label="A mass on a spring oscillating">
        <line x1="20" y1="20" x2="20" y2="130" class="ax"/>
        <line x1="20" y1="75" x2="400" y2="75" class="ax dash"/>
        <g class="shm-bob">
          <line x1="20" y1="75" x2="120" y2="75" class="spring"/>
          <circle cx="128" cy="75" r="13" class="mass"/>
        </g>
        <path class="trace" d="M150,75 q 15,-45 30,0 t 30,0 t 30,0 t 30,0 t 30,0 t 30,0 t 30,0"/>
        <text x="150" y="140" class="lbl">displacement against time</text>
      </svg>`
  },

  projectile: {
    title: 'Projectile motion',
    caption: 'Horizontal motion is uniform, vertical motion is free fall. Combining them gives a parabola. ' +
             'The horizontal speed never changes; only the vertical component does.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="A projectile following a parabolic path">
        <line x1="30" y1="145" x2="400" y2="145" class="ax"/>
        <path id="para" class="trace solid"
              d="M40,145 C 110,15 250,15 330,145"/>
        <circle r="8" class="mass proj"/>
        <text x="150" y="163" class="lbl">range</text>
        <text x="185" y="30" class="lbl">maximum height</text>
      </svg>`
  },

  wave: {
    title: 'A travelling wave',
    caption: 'The shape moves forward but each particle only moves up and down about its own position. ' +
             'Energy travels; matter does not.',
    svg: `
      <svg viewBox="0 0 420 130" role="img" aria-label="A transverse wave travelling to the right">
        <clipPath id="wclip"><rect x="20" y="10" width="380" height="110"/></clipPath>
        <g clip-path="url(#wclip)">
          <path class="trace solid wave-run"
                d="M-100,65 q 30,-40 60,0 t 60,0 t 60,0 t 60,0 t 60,0 t 60,0 t 60,0 t 60,0 t 60,0"/>
        </g>
        <line x1="20" y1="65" x2="400" y2="65" class="ax dash"/>
        <circle cx="120" cy="65" r="7" class="mass wave-dot"/>
        <text x="132" y="60" class="lbl">this particle only moves up and down</text>
      </svg>`
  },

  refraction: {
    title: 'Refraction at a surface',
    caption: 'Entering a denser medium the ray slows and bends towards the normal. ' +
             'The frequency stays the same; the wavelength and speed change.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="A light ray refracting at a boundary">
        <rect x="20" y="85" width="380" height="70" class="medium"/>
        <line x1="20" y1="85" x2="400" y2="85" class="ax"/>
        <line x1="210" y1="20" x2="210" y2="150" class="ax dash"/>
        <path class="ray" d="M90,20 L210,85 L285,150"/>
        <text x="120" y="46" class="lbl">i</text>
        <text x="232" y="128" class="lbl">r</text>
        <text x="30" y="108" class="lbl">denser medium</text>
        <text x="216" y="32" class="lbl">normal</text>
      </svg>`
  },

  circuit: {
    title: 'Drift of electrons',
    caption: 'Electrons already move fast and randomly. A field adds a slow steady drift along the wire, ' +
             'and that drift is the current.',
    svg: `
      <svg viewBox="0 0 420 130" role="img" aria-label="Electrons drifting along a conductor">
        <rect x="40" y="45" width="340" height="42" class="wire"/>
        <g class="drift">
          <circle cx="0" cy="66" r="6" class="echarge"/>
          <circle cx="0" cy="56" r="6" class="echarge d2"/>
          <circle cx="0" cy="76" r="6" class="echarge d3"/>
        </g>
        <text x="40" y="112" class="lbl">drift velocity is only a fraction of a millimetre per second</text>
        <text x="386" y="72" class="lbl">+</text>
        <text x="26" y="72" class="lbl">−</text>
      </svg>`
  },

  circular: {
    title: 'Uniform circular motion',
    caption: 'The speed is constant but the direction changes every instant, so there is an acceleration ' +
             'pointing at the centre. That is what the centripetal force provides.',
    svg: `
      <svg viewBox="0 0 420 180" role="img" aria-label="An object moving in a circle">
        <circle cx="210" cy="90" r="62" class="ax dash" fill="none"/>
        <circle cx="210" cy="90" r="4" class="mass"/>
        <g class="orbit">
          <circle cx="272" cy="90" r="10" class="mass"/>
          <line x1="210" y1="90" x2="262" y2="90" class="vec"/>
        </g>
        <text x="150" y="172" class="lbl">acceleration points to the centre</text>
      </svg>`
  }
};

const MATCHERS = [
  [/simple harmonic|oscillat|pendulum|loaded spring/i, 'shm'],
  [/projectile/i, 'projectile'],
  [/travelling wave|progressive wave|transverse|wave motion|what a wave/i, 'wave'],
  [/refraction|snell|total internal|through a prism/i, 'refraction'],
  [/drift|current electricity|electric current/i, 'circuit'],
  [/circular motion|centripetal|banked|banking/i, 'circular']
];

function buildFigure(key) {
  const f = FIGURES[key];
  const fig = document.createElement('figure');
  fig.className = 'anim';
  fig.innerHTML =
    '<div class="anim-head"><span class="anim-title">' + f.title + '</span>' +
    '<button class="anim-toggle" type="button">Pause</button></div>' +
    f.svg +
    '<figcaption>' + f.caption + '</figcaption>';

  const btn = fig.querySelector('.anim-toggle');
  btn.addEventListener('click', () => {
    const off = fig.classList.toggle('paused');
    btn.textContent = off ? 'Play' : 'Pause';
  });
  return fig;
}

/** Insert figures under matching headings. Only for Physics concept pages. */
function decorate(root, subject, fileKey) {
  if (subject !== 'Physics' || fileKey !== '01-concepts') return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const used = new Set();
  let added = 0;
  for (const h of root.querySelectorAll('h1, h2')) {
    if (added >= 4) break;
    const text = h.textContent || '';
    for (const [re, key] of MATCHERS) {
      if (used.has(key) || !re.test(text)) continue;
      h.insertAdjacentElement('afterend', buildFigure(key));
      used.add(key);
      added++;
      break;
    }
  }
}

window.Anim = { decorate, build: buildFigure, keys: Object.keys(FIGURES) };
