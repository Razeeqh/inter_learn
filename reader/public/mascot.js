/* The study companion: a cool-headed hunter type with glowing eyes.
 *
 * One SVG with several poses; the caller swaps pose and speech. */

const ART = `
<svg class="mc-svg" viewBox="0 0 260 330" role="img" aria-label="A focused student with a book and pen">
  <defs>
    <linearGradient id="mcHair" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a1f36"/><stop offset="100%" stop-color="#0a0d18"/>
    </linearGradient>
    <linearGradient id="mcCoat" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e2745"/><stop offset="100%" stop-color="#111729"/>
    </linearGradient>
    <radialGradient id="mcEye" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#eaf6ff"/>
      <stop offset="45%" stop-color="#5ec8ff"/>
      <stop offset="100%" stop-color="#1b6ee0"/>
    </radialGradient>
    <filter id="mcGlow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="3.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <g class="mc-all">
    <!-- hair mass behind the head -->
    <path class="mc-hair-b" d="M60 122 C 54 44 96 18 130 18 C 166 18 206 44 200 122
      C 202 152 194 176 188 190 C 186 152 178 134 178 134 L 82 134
      C 82 134 74 152 72 190 C 66 176 58 152 60 122 Z"/>

    <!-- shoulders: high collared jacket -->
    <path class="mc-coat" d="M40 330 C 46 240 82 202 130 202 C 178 202 214 240 220 330 Z"/>
    <path class="mc-coat-sh" d="M130 202 C 178 202 214 240 220 330 L 180 330 C 176 264 158 222 130 202 Z"/>
    <path class="mc-collar" d="M96 206 L 130 246 L 164 206 C 152 200 142 198 130 198 C 118 198 108 200 96 206 Z"/>
    <path class="mc-lapel" d="M96 206 L 130 246 L 118 258 L 88 218 Z"/>
    <path class="mc-lapel" d="M164 206 L 130 246 L 142 258 L 172 218 Z"/>
    <path class="mc-trim" d="M84 240 C 92 268 92 300 88 330"/>
    <path class="mc-trim" d="M176 240 C 168 268 168 300 172 330"/>

    <!-- head -->
    <g class="mc-head">
      <rect class="mc-neck" x="115" y="160" width="30" height="42" rx="12"/>
      <path class="mc-skin" d="M74 118 C 74 78 98 58 130 58 C 162 58 186 78 186 118
        C 186 152 168 182 130 186 C 92 182 74 152 74 118 Z"/>
      <ellipse class="mc-ear" cx="76" cy="126" rx="8" ry="13"/>
      <ellipse class="mc-ear" cx="184" cy="126" rx="8" ry="13"/>

      <!-- sharp eyes, open -->
      <g class="mc-eyes-open">
        <path class="mc-socket" d="M92 128 C 102 116 118 116 126 128 C 118 138 102 138 92 128 Z"/>
        <path class="mc-socket" d="M134 128 C 142 116 158 116 168 128 C 158 138 142 138 134 128 Z"/>
        <ellipse class="mc-iris" cx="109" cy="128" rx="8" ry="9"/>
        <ellipse class="mc-iris" cx="151" cy="128" rx="8" ry="9"/>
        <ellipse class="mc-core" cx="109" cy="127" rx="3" ry="4"/>
        <ellipse class="mc-core" cx="151" cy="127" rx="3" ry="4"/>
        <path class="mc-lash" d="M90 124 C 100 112 120 112 128 124"/>
        <path class="mc-lash" d="M132 124 C 140 112 160 112 170 124"/>
      </g>

      <!-- closed, at ease -->
      <g class="mc-eyes-shut">
        <path d="M93 130 Q 109 118 126 130"/>
        <path d="M134 130 Q 151 118 167 130"/>
      </g>

      <!-- glancing up, thinking -->
      <g class="mc-eyes-up">
        <path class="mc-socket" d="M92 126 C 102 114 118 114 126 126 C 118 136 102 136 92 126 Z"/>
        <path class="mc-socket" d="M134 126 C 142 114 158 114 168 126 C 158 136 142 136 134 126 Z"/>
        <ellipse class="mc-iris" cx="112" cy="121" rx="7.5" ry="8.5"/>
        <ellipse class="mc-iris" cx="154" cy="121" rx="7.5" ry="8.5"/>
        <ellipse class="mc-core" cx="112" cy="120" rx="2.8" ry="3.6"/>
        <ellipse class="mc-core" cx="154" cy="120" rx="2.8" ry="3.6"/>
        <path class="mc-lash" d="M90 122 C 100 110 120 110 128 122"/>
        <path class="mc-lash" d="M132 122 C 140 110 160 110 170 122"/>
      </g>

      <path class="mc-brow l" d="M90 108 L 126 114"/>
      <path class="mc-brow r" d="M170 108 L 134 114"/>
      <path class="mc-nose" d="M130 140 L 134 152 L 127 153"/>

      <!-- mouths -->
      <path class="mc-mouth m-soft" d="M118 166 L 142 166"/>
      <path class="mc-mouth m-wide" d="M116 163 Q 130 176 144 163"/>
      <path class="mc-mouth m-small" d="M120 166 Q 130 171 140 165"/>

      <!-- hair: full cap with a soft fringe -->
      <path class="mc-hair-f" d="M66 132 C 60 60 96 28 130 28 C 166 28 200 58 194 132
        C 190 108 184 96 177 90 C 172 104 166 110 160 100
        C 154 112 146 116 140 104 C 133 116 124 118 117 106
        C 110 116 101 114 95 102 C 89 110 84 106 82 94
        C 74 100 68 114 66 132 Z"/>
      <path class="mc-strand" d="M104 40 C 94 58 88 80 86 104 C 97 82 105 66 118 54 Z"/>
      <path class="mc-strand" d="M148 40 C 160 58 168 80 172 102 C 164 78 155 62 142 50 Z"/>
      <path class="mc-shine" d="M96 52 C 110 40 130 36 148 42 C 130 42 112 46 96 60 Z"/>
    </g>

    <!-- left arm with the book -->
    <g class="mc-armL">
      <path class="mc-sleeve" d="M70 252 C 50 270 44 290 48 306"/>
      <g class="mc-book">
        <path class="mc-book-c" d="M16 306 L 78 292 L 78 330 L 16 330 Z"/>
        <path class="mc-page" d="M20 302 L 76 290 L 76 324 L 20 324 Z"/>
        <path class="mc-rule" d="M28 302 L 68 294"/>
        <path class="mc-rule" d="M28 309 L 68 301"/>
        <path class="mc-rule" d="M28 316 L 56 310"/>
      </g>
      <ellipse class="mc-skin" cx="54" cy="300" rx="14" ry="10"/>
    </g>

    <!-- right arm with the pen -->
    <g class="mc-armR">
      <path class="mc-sleeve" d="M190 252 C 210 266 218 282 216 298"/>
      <g class="mc-hand">
        <ellipse class="mc-skin" cx="0" cy="0" rx="15" ry="11"/>
        <g class="mc-pen">
          <rect x="-34" y="-3" width="68" height="6" rx="3"/>
          <path class="mc-nib" d="M34 -3 L 48 0 L 34 3 Z"/>
          <rect class="mc-cap" x="-34" y="-3" width="14" height="6" rx="3"/>
        </g>
        <ellipse class="mc-skin" cx="2" cy="1" rx="7" ry="9"/>
      </g>
    </g>
  </g>
</svg>`;

const POSES = {
  read:  { eyes: 'open', mouth: 'soft',  say: 'One chapter. That is all today asks.' },
  write: { eyes: 'open', mouth: 'small', say: 'One a day. That is genuinely the whole trick.' },
  smile: { eyes: 'shut', mouth: 'wide',  say: 'So — which one are we clearing first?' },
  proud: { eyes: 'shut', mouth: 'soft',  say: 'Ninety-four chapters. We clear them one by one.' },
  think: { eyes: 'up',   mouth: 'small', say: 'Not sure? Come on, I will show you the library.' }
};

export function makeCharacter() {
  const el = document.createElement('div');
  el.className = 'mascot';
  el.innerHTML = ART;
  return el;
}

export function mountMascot(root) {
  const el = makeCharacter();
  el.dataset.pose = 'read';
  el.insertAdjacentHTML('afterbegin', '<div class="mc-bubble"><p></p></div>');
  root.appendChild(el);

  const line = el.querySelector('.mc-bubble p');
  let current = '';

  return {
    set(pose) {
      if (!POSES[pose] || pose === current) return;
      current = pose;
      const p = POSES[pose];
      el.dataset.pose = pose;
      el.dataset.eyes = p.eyes;
      el.dataset.mouth = p.mouth;
      el.classList.remove('say');
      void el.offsetWidth;              // restart the bubble animation
      line.textContent = p.say;
      el.classList.add('say');
    },
    el
  };
}
