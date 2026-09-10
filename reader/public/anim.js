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
  },

  energy: {
    title: 'Kinetic and potential energy swap',
    caption: 'At the ends the bob is momentarily still and all the energy is potential. At the bottom it is ' +
             'fastest and all the energy is kinetic. The total stays the same.',
    svg: `
      <svg viewBox="0 0 420 180" role="img" aria-label="A pendulum swinging, with an energy bar">
        <line x1="60" y1="20" x2="260" y2="20" class="ax"/>
        <g class="pend">
          <line x1="160" y1="20" x2="160" y2="120" class="vec"/>
          <circle cx="160" cy="128" r="13" class="mass"/>
        </g>
        <rect x="300" y="30" width="26" height="110" class="wire"/>
        <rect x="300" y="30" width="26" height="110" class="bar-ke"/>
        <text x="292" y="156" class="lbl">KE</text>
        <text x="336" y="46" class="lbl">total energy</text>
        <text x="336" y="62" class="lbl">never changes</text>
      </svg>`
  },

  kinetic: {
    title: 'Molecules of a gas',
    caption: 'Molecules fly in straight lines and bounce off the walls. Those collisions are the pressure, ' +
             'and their average kinetic energy is the temperature.',
    svg: `
      <svg viewBox="0 0 420 160" role="img" aria-label="Gas molecules bouncing inside a box">
        <rect x="30" y="20" width="250" height="120" class="wire"/>
        <circle r="6" class="mass gas g1" cx="60" cy="50"/>
        <circle r="6" class="mass gas g2" cx="60" cy="50"/>
        <circle r="6" class="mass gas g3" cx="60" cy="50"/>
        <circle r="6" class="mass gas g4" cx="60" cy="50"/>
        <text x="300" y="60" class="lbl">hits on the wall</text>
        <text x="300" y="76" class="lbl">= pressure</text>
        <text x="300" y="102" class="lbl">average KE</text>
        <text x="300" y="118" class="lbl">= temperature</text>
      </svg>`
  },

  ydse: {
    title: "Young's double slit",
    caption: 'Two slits send out waves that overlap. Where crests meet crests you get a bright fringe; ' +
             'where a crest meets a trough you get a dark one.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="Two slits producing an interference pattern">
        <rect x="60" y="15" width="10" height="55" class="wire"/>
        <rect x="60" y="100" width="10" height="55" class="wire"/>
        <g class="ripple" clip-path="url(#yclip)">
          <circle cx="65" cy="78" r="10" class="trace"/>
          <circle cx="65" cy="92" r="10" class="trace"/>
        </g>
        <clipPath id="yclip"><rect x="70" y="0" width="255" height="170"/></clipPath>
        <line x1="330" y1="10" x2="330" y2="160" class="ax"/>
        <g class="fringes">
          <rect x="334" y="20" width="14" height="16" class="fringe"/>
          <rect x="334" y="52" width="14" height="16" class="fringe"/>
          <rect x="334" y="84" width="14" height="16" class="fringe"/>
          <rect x="334" y="116" width="14" height="16" class="fringe"/>
        </g>
        <text x="150" y="166" class="lbl">the two waves overlap here</text>
        <text x="354" y="92" class="lbl">screen</text>
      </svg>`
  },

  field: {
    title: 'Field of a point charge',
    caption: 'Field lines point away from a positive charge. A test charge placed anywhere feels a push ' +
             'along the line through it, stronger where the lines crowd together.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="Electric field lines around a positive charge">
        <g class="flines">
          <line x1="210" y1="85" x2="210" y2="15" class="ax"/>
          <line x1="210" y1="85" x2="210" y2="155" class="ax"/>
          <line x1="210" y1="85" x2="120" y2="85" class="ax"/>
          <line x1="210" y1="85" x2="300" y2="85" class="ax"/>
          <line x1="210" y1="85" x2="150" y2="30" class="ax"/>
          <line x1="210" y1="85" x2="270" y2="30" class="ax"/>
          <line x1="210" y1="85" x2="150" y2="140" class="ax"/>
          <line x1="210" y1="85" x2="270" y2="140" class="ax"/>
        </g>
        <circle cx="210" cy="85" r="14" class="mass"/>
        <text x="204" y="90" class="lbl pos">+</text>
        <circle r="7" class="testq" cx="0" cy="0"/>
        <text x="20" y="160" class="lbl">the test charge is pushed outwards</text>
      </svg>`
  },

  induction: {
    title: 'Electromagnetic induction',
    caption: 'Moving the magnet changes the flux through the coil, and that change drives a current. ' +
             'Stop moving it and the current stops, however strong the magnet is.',
    svg: `
      <svg viewBox="0 0 420 160" role="img" aria-label="A magnet moving in and out of a coil">
        <g class="coil">
          <ellipse cx="250" cy="80" rx="14" ry="42" class="wire"/>
          <ellipse cx="272" cy="80" rx="14" ry="42" class="wire"/>
          <ellipse cx="294" cy="80" rx="14" ry="42" class="wire"/>
        </g>
        <g class="magnet">
          <rect x="60" y="66" width="70" height="28" class="mass"/>
          <text x="70" y="86" class="lbl pos">N</text>
          <text x="112" y="86" class="lbl pos">S</text>
        </g>
        <circle cx="360" cy="80" r="20" class="wire"/>
        <line x1="360" y1="80" x2="360" y2="64" class="vec needle"/>
        <text x="336" y="120" class="lbl">meter</text>
        <text x="60" y="132" class="lbl">while it moves, there is a current</text>
      </svg>`
  },

  phasor: {
    title: 'A phasor and its sine curve',
    caption: 'A rotating arrow of length equal to the peak value casts a shadow on the vertical axis. ' +
             'That shadow is the alternating current at each instant.',
    svg: `
      <svg viewBox="0 0 420 160" role="img" aria-label="A rotating phasor drawing a sine wave">
        <circle cx="80" cy="80" r="55" class="ax dash" fill="none"/>
        <g class="phas">
          <line x1="80" y1="80" x2="135" y2="80" class="vec"/>
          <circle cx="135" cy="80" r="6" class="mass"/>
        </g>
        <line x1="150" y1="80" x2="400" y2="80" class="ax dash"/>
        <path class="trace solid" d="M150,80 q 15,-46 31,0 t 31,0 t 31,0 t 31,0 t 31,0 t 31,0 t 31,0"/>
        <text x="150" y="150" class="lbl">one turn of the arrow is one cycle</text>
      </svg>`
  },

  emwave: {
    title: 'An electromagnetic wave',
    caption: 'The electric and magnetic fields oscillate at right angles to each other and to the ' +
             'direction of travel. Nothing material is moving.',
    svg: `
      <svg viewBox="0 0 420 160" role="img" aria-label="Electric and magnetic fields of a light wave">
        <line x1="20" y1="80" x2="400" y2="80" class="ax"/>
        <g class="emrun">
          <path class="trace solid" d="M-90,80 q 24,-42 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0"/>
          <path class="trace bfield" d="M-90,80 q 24,26 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0 t 48,0"/>
        </g>
        <text x="24" y="34" class="lbl">E field</text>
        <text x="24" y="130" class="lbl">B field</text>
        <text x="330" y="70" class="lbl">travel</text>
      </svg>`
  },

  photoelectric: {
    title: 'The photoelectric effect',
    caption: 'One photon gives all its energy to one electron. Below the threshold frequency nothing is ' +
             'emitted, no matter how bright the light is.',
    svg: `
      <svg viewBox="0 0 420 160" role="img" aria-label="Photons striking a metal and ejecting electrons">
        <rect x="240" y="30" width="26" height="110" class="wire"/>
        <g class="photons">
          <circle r="6" class="mass ph p1" cx="0" cy="60"/>
          <circle r="6" class="mass ph p2" cx="0" cy="90"/>
        </g>
        <g class="ejected">
          <circle r="5" class="echarge e1" cx="0" cy="60"/>
          <circle r="5" class="echarge e2" cx="0" cy="90"/>
        </g>
        <text x="30" y="130" class="lbl">photons of energy h&#957;</text>
        <text x="300" y="130" class="lbl">electrons, KE = h&#957; &#8722; &#966;</text>
        <text x="228" y="24" class="lbl">metal</text>
      </svg>`
  },

  bohr: {
    title: 'A Bohr transition',
    caption: 'An electron may sit only on certain orbits. Dropping to a lower one releases the energy ' +
             'difference as a single photon, which is why spectra are lines and not a smear.',
    svg: `
      <svg viewBox="0 0 420 180" role="img" aria-label="An electron dropping to a lower orbit and emitting a photon">
        <circle cx="180" cy="90" r="28" class="ax dash" fill="none"/>
        <circle cx="180" cy="90" r="52" class="ax dash" fill="none"/>
        <circle cx="180" cy="90" r="76" class="ax dash" fill="none"/>
        <circle cx="180" cy="90" r="9" class="mass"/>
        <circle r="7" class="echarge jump" cx="0" cy="0"/>
        <path class="ray photon" d="M256,90 L400,90"/>
        <text x="300" y="80" class="lbl">photon</text>
        <text x="120" y="172" class="lbl">n = 3 &#8594; n = 1</text>
      </svg>`
  }
};

const MATCHERS = [
  [/simple harmonic|oscillat|pendulum|loaded spring/i, 'shm'],
  [/projectile/i, 'projectile'],
  [/travelling wave|progressive wave|transverse|wave motion|what a wave/i, 'wave'],
  [/refraction|snell|total internal|through a prism/i, 'refraction'],
  [/drift|current electricity|electric current/i, 'circuit'],
  [/circular motion|centripetal|banked|banking/i, 'circular'],
  [/kinetic energy|potential energy|conservation of (mechanical )?energy|work.energy/i, 'energy'],
  [/kinetic theory|molecul|mean free path|pressure of a gas|ideal gas/i, 'kinetic'],
  [/double slit|interference|young|fringe/i, 'ydse'],
  [/field lines|electric field|coulomb|point charge/i, 'field'],
  [/induction|faraday|lenz|flux|induced emf/i, 'induction'],
  [/phasor|alternating|rms|a\.?c\.? circuit/i, 'phasor'],
  [/electromagnetic wave|displacement current|spectrum of light/i, 'emwave'],
  [/photoelectric|photon|work function|threshold frequency/i, 'photoelectric'],
  [/bohr|energy level|spectral series|hydrogen atom|orbit of the electron/i, 'bohr']
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
