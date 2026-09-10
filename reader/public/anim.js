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
  },

  /* ------------------------------------------------------------- maths */

  tangent: {
    title: 'The derivative is a slope',
    caption: 'Slide the second point towards the first. The chord through them turns into the tangent, ' +
             'and its slope is the derivative at that point.',
    svg: `
      <svg viewBox="0 0 420 180" role="img" aria-label="A chord becoming a tangent to a curve">
        <line x1="30" y1="150" x2="400" y2="150" class="ax"/>
        <line x1="40" y1="15" x2="40" y2="160" class="ax"/>
        <path class="trace solid" d="M50,145 Q 160,10 380,120"/>
        <g class="chord">
          <line x1="97" y1="57" x2="347" y2="96" class="vec"/>
          <circle cx="316" cy="92" r="6" class="mass slide"/>
        </g>
        <circle cx="187" cy="71" r="6" class="mass"/>
        <text x="193" y="64" class="lbl">P</text>
        <text x="150" y="172" class="lbl">as Q slides to P the chord becomes the tangent</text>
      </svg>`
  },

  area: {
    title: 'An integral is an area',
    caption: 'Thin strips under the curve are added up. As the strips get narrower the total settles on ' +
             'the exact area, and that limit is the definite integral.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="Strips filling the area under a curve">
        <line x1="30" y1="140" x2="400" y2="140" class="ax"/>
        <line x1="40" y1="15" x2="40" y2="150" class="ax"/>
        <g class="strips">
          <rect x="60"  y="112" width="34" height="28"  class="strip"/>
          <rect x="98"  y="87"  width="34" height="53"  class="strip s2"/>
          <rect x="136" y="65"  width="34" height="75"  class="strip s3"/>
          <rect x="174" y="48"  width="34" height="92"  class="strip s4"/>
          <rect x="212" y="35"  width="34" height="105" class="strip s5"/>
          <rect x="250" y="26"  width="34" height="114" class="strip s6"/>
        </g>
        <path class="trace solid" d="M50,132 Q 180,30 300,22"/>
        <text x="60" y="160" class="lbl">a</text>
        <text x="280" y="160" class="lbl">b</text>
        <text x="310" y="90" class="lbl">area = &#8747; f(x) dx</text>
      </svg>`
  },

  unitcircle: {
    title: 'Where sine and cosine come from',
    caption: 'A point travels round a circle of radius 1. Its height above the axis is the sine of the ' +
             'angle and its distance along is the cosine. That is why they repeat every 360&#176;.',
    svg: `
      <svg viewBox="0 0 420 180" role="img" aria-label="A point on the unit circle tracing a sine curve">
        <circle cx="90" cy="90" r="62" class="ax dash" fill="none"/>
        <line x1="28" y1="90" x2="152" y2="90" class="ax"/>
        <line x1="90" y1="28" x2="90" y2="152" class="ax"/>
        <g class="uc">
          <line x1="90" y1="90" x2="152" y2="90" class="vec"/>
          <circle cx="152" cy="90" r="6" class="mass"/>
        </g>
        <line x1="170" y1="90" x2="400" y2="90" class="ax dash"/>
        <path class="trace solid" d="M170,90 q 14,-44 29,0 t 29,0 t 29,0 t 29,0 t 29,0 t 29,0 t 29,0"/>
        <text x="176" y="168" class="lbl">the height traces the sine curve</text>
      </svg>`
  },

  conic: {
    title: 'Where the conics come from',
    caption: 'One double cone, cut at different angles: level gives a circle, a gentle tilt an ellipse, ' +
             'parallel to the side a parabola, and steeper still a hyperbola.',
    svg: `
      <svg viewBox="0 0 420 180" role="img" aria-label="A cone cut at different angles">
        <path class="cone" d="M210,90 L150,20 L270,20 Z"/>
        <path class="cone" d="M210,90 L150,160 L270,160 Z"/>
        <g class="cut">
          <line x1="152" y1="52" x2="268" y2="52" class="vec"/>
          <ellipse cx="210" cy="52" rx="28" ry="7" class="section"/>
        </g>
        <text x="296" y="44" class="lbl">flat cut &#8594; circle</text>
        <text x="296" y="64" class="lbl">tilt &#8594; ellipse</text>
        <text x="296" y="84" class="lbl">steeper &#8594; parabola</text>
        <text x="296" y="104" class="lbl">steepest &#8594; hyperbola</text>
      </svg>`
  },

  vectors: {
    title: 'Adding two vectors',
    caption: 'Place them tail to tail and complete the parallelogram: the diagonal is the sum. ' +
             'Tail to head gives the same answer, which is the triangle law.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="The parallelogram law of vector addition">
        <g class="para">
          <line x1="60" y1="140" x2="200" y2="140" class="vec"/>
          <line x1="60" y1="140" x2="130" y2="50" class="vec"/>
          <line x1="200" y1="140" x2="270" y2="50" class="ax dash"/>
          <line x1="130" y1="50" x2="270" y2="50" class="ax dash"/>
          <line x1="60" y1="140" x2="270" y2="50" class="vec sum"/>
        </g>
        <text x="128" y="158" class="lbl">a</text>
        <text x="82" y="92" class="lbl">b</text>
        <text x="188" y="86" class="lbl">a + b</text>
      </svg>`
  },

  locus: {
    title: 'A locus is a rule',
    caption: 'Every point that obeys one condition. Keep the distance from a fixed point the same and ' +
             'the path you trace is a circle.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="A point tracing a circle at a fixed distance">
        <circle cx="210" cy="85" r="5" class="mass"/>
        <circle cx="210" cy="85" r="60" class="locus-path" fill="none"/>
        <g class="orbit2">
          <line x1="210" y1="85" x2="270" y2="85" class="ax dash"/>
          <circle cx="270" cy="85" r="7" class="mass"/>
        </g>
        <text x="218" y="82" class="lbl">C</text>
        <text x="228" y="104" class="lbl">r</text>
        <text x="120" y="164" class="lbl">CP = r at every point</text>
      </svg>`
  },

  /* --------------------------------------------------------- chemistry */

  orbital: {
    title: 'Shapes of the orbitals',
    caption: 'An orbital is where the electron is likely to be, not a track it runs on. ' +
             's is a ball; each p orbital is two lobes along one axis.',
    svg: `
      <svg viewBox="0 0 420 160" role="img" aria-label="An s orbital and a p orbital">
        <circle cx="95" cy="80" r="42" class="cloud pulse"/>
        <circle cx="95" cy="80" r="4" class="mass"/>
        <text x="78" y="140" class="lbl">s orbital</text>
        <g class="pulse2">
          <ellipse cx="255" cy="52" rx="24" ry="34" class="cloud"/>
          <ellipse cx="255" cy="108" rx="24" ry="34" class="cloud"/>
        </g>
        <circle cx="255" cy="80" r="4" class="mass"/>
        <text x="238" y="150" class="lbl">p orbital</text>
        <line x1="330" y1="80" x2="400" y2="80" class="ax dash"/>
        <text x="332" y="72" class="lbl">nodal plane</text>
      </svg>`
  },

  equilibrium: {
    title: 'Equilibrium is a balance of rates',
    caption: 'The forward rate falls and the backward rate rises until they are equal. Both reactions ' +
             'keep going after that, which is why it is called dynamic.',
    svg: `
      <svg viewBox="0 0 420 165" role="img" aria-label="Forward and backward rates meeting">
        <line x1="45" y1="135" x2="380" y2="135" class="ax"/>
        <line x1="45" y1="15" x2="45" y2="140" class="ax"/>
        <path class="trace solid" d="M50,25 C 130,25 170,80 330,84"/>
        <path class="trace solid alt" d="M50,132 C 130,132 170,88 330,84"/>
        <line x1="330" y1="84" x2="380" y2="84" class="ax dash"/>
        <circle r="6" class="mass eqdot"/>
        <text x="150" y="42" class="lbl">forward rate</text>
        <text x="150" y="126" class="lbl">backward rate</text>
        <text x="250" y="76" class="lbl">equilibrium</text>
        <text x="180" y="158" class="lbl">time</text>
      </svg>`
  },

  energyprofile: {
    title: 'Activation energy',
    caption: 'Reactants must climb a hill before they can become products. A catalyst gives a lower ' +
             'path over the hill; it never changes where the reaction ends up.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="An energy profile with and without a catalyst">
        <line x1="45" y1="140" x2="390" y2="140" class="ax"/>
        <line x1="45" y1="15" x2="45" y2="145" class="ax"/>
        <path class="trace solid" d="M55,95 C 130,95 150,25 210,25 C 270,25 290,110 360,110"/>
        <path class="trace solid alt dashy" d="M55,95 C 140,95 160,58 210,58 C 260,58 280,110 360,110"/>
        <circle r="6" class="mass climb"/>
        <text x="60" y="88" class="lbl">reactants</text>
        <text x="320" y="103" class="lbl">products</text>
        <text x="150" y="20" class="lbl">without catalyst</text>
        <text x="228" y="52" class="lbl">with catalyst</text>
      </svg>`
  },

  cell: {
    title: 'A galvanic cell',
    caption: 'The more reactive metal gives up electrons, which travel through the wire to the other ' +
             'electrode. Oxidation at the anode, reduction at the cathode.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="Electrons flowing between two electrodes">
        <rect x="50" y="60" width="120" height="80" class="beaker"/>
        <rect x="250" y="60" width="120" height="80" class="beaker"/>
        <rect x="100" y="35" width="14" height="80" class="wire"/>
        <rect x="306" y="35" width="14" height="80" class="wire"/>
        <path class="wirepath" d="M107,35 L107,20 L313,20 L313,35"/>
        <circle r="5" class="echarge flow"/>
        <circle r="5" class="echarge flow f2"/>
        <rect x="170" y="70" width="80" height="16" class="bridge"/>
        <text x="176" y="82" class="lbl">salt bridge</text>
        <text x="76" y="158" class="lbl">anode (&#8722;)</text>
        <text x="286" y="158" class="lbl">cathode (+)</text>
      </svg>`
  },

  lattice: {
    title: 'A unit cell',
    caption: 'A crystal is one small box repeated in every direction. Counting how much of each corner ' +
             'and face atom belongs to the box gives the atoms per unit cell.',
    svg: `
      <svg viewBox="0 0 420 170" role="img" aria-label="A cubic unit cell">
        <g class="cube">
          <rect x="140" y="45" width="90" height="90" class="cellface"/>
          <rect x="180" y="25" width="90" height="90" class="cellface back"/>
          <line x1="140" y1="45" x2="180" y2="25" class="ax"/>
          <line x1="230" y1="45" x2="270" y2="25" class="ax"/>
          <line x1="140" y1="135" x2="180" y2="115" class="ax"/>
          <line x1="230" y1="135" x2="270" y2="115" class="ax"/>
          <circle cx="140" cy="45" r="6" class="mass"/><circle cx="230" cy="45" r="6" class="mass"/>
          <circle cx="140" cy="135" r="6" class="mass"/><circle cx="230" cy="135" r="6" class="mass"/>
          <circle cx="180" cy="25" r="6" class="mass"/><circle cx="270" cy="25" r="6" class="mass"/>
          <circle cx="180" cy="115" r="6" class="mass"/><circle cx="270" cy="115" r="6" class="mass"/>
        </g>
        <text x="300" y="70" class="lbl">corner atom</text>
        <text x="300" y="88" class="lbl">= 1/8 each</text>
      </svg>`
  }
};

/* [heading pattern, figure, subjects it may appear under] */
const MATCHERS = [
  [/simple harmonic|oscillat|pendulum|loaded spring/i, 'shm', 'Physics'],
  [/projectile/i, 'projectile', 'Physics'],
  [/travelling wave|progressive wave|transverse|wave motion|what a wave/i, 'wave', 'Physics'],
  [/refraction|snell|total internal|through a prism/i, 'refraction', 'Physics'],
  [/drift velocity|current electricity|electric current/i, 'circuit', 'Physics'],
  [/circular motion|centripetal|banked|banking/i, 'circular', 'Physics'],
  [/kinetic energy|potential energy|conservation of (mechanical )?energy|work.energy/i, 'energy', 'Physics'],
  [/kinetic theory|mean free path|pressure of a gas|ideal gas/i, 'kinetic', 'Physics Chemistry'],
  [/double slit|interference|young|fringe/i, 'ydse', 'Physics'],
  [/field lines|electric field|coulomb|point charge/i, 'field', 'Physics'],
  [/\bfaraday|\blenz|magnetic flux|induced emf|electromagnetic induction/i, 'induction', 'Physics'],
  [/phasor|alternating current|\brms\b|a\.?c\.? circuit/i, 'phasor', 'Physics'],
  [/electromagnetic wave|displacement current|spectrum of light/i, 'emwave', 'Physics'],
  [/photoelectric|\bphoton|work function|threshold frequency/i, 'photoelectric', 'Physics Chemistry'],
  [/\bbohr|energy level|spectral series|hydrogen atom/i, 'bohr', 'Physics Chemistry'],

  [/derivative|tangent|slope of the curve|differentiat|rate of change/i, 'tangent', 'Maths'],
  [/integra|area under|antiderivative/i, 'area', 'Maths'],
  [/unit circle|sine curve|trigonometric ratio|periodic|radian/i, 'unitcircle', 'Maths'],
  [/conic|parabola|ellipse|hyperbola|eccentricity|directrix/i, 'conic', 'Maths'],
  [/vector|parallelogram law|triangle law|resultant/i, 'vectors', 'Maths'],
  [/\blocus\b|equation of a circle/i, 'locus', 'Maths'],

  [/orbital|quantum number|electron cloud|azimuthal/i, 'orbital', 'Chemistry'],
  [/equilibrium|le chatelier|reversible reaction|forward and backward/i, 'equilibrium', 'Chemistry'],
  [/activation energy|catalyst|rate of reaction|kinetics|collision theory/i, 'energyprofile', 'Chemistry'],
  [/galvanic|electrochem|electrode|cell potential|\bredox\b/i, 'cell', 'Chemistry'],
  [/unit cell|crystal|\blattice\b|packing|solid state/i, 'lattice', 'Chemistry']
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

/** Insert figures under matching headings, on any subject's concept pages. */
function decorate(root, subject, fileKey) {
  if (fileKey !== '01-concepts' && fileKey !== '00-mindmap') return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const used = new Set();
  let added = 0;
  for (const h of root.querySelectorAll('h1, h2')) {
    if (added >= 4) break;
    const text = h.textContent || '';
    for (const [re, key, subjects] of MATCHERS) {
      if (used.has(key) || !subjects.includes(subject) || !re.test(text)) continue;
      h.insertAdjacentElement('afterend', buildFigure(key));
      used.add(key);
      added++;
      break;
    }
  }
}

window.Anim = { decorate, build: buildFigure, keys: Object.keys(FIGURES) };
