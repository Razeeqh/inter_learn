/* The WebGL scene shared by the landing page and the library home. */

import * as THREE from './vendor/three/three.module.min.js';

export const SUBJECTS = [
  {
    key: 'Maths', name: 'MATHEMATICS', colour: 0x3f6fe0, hex: '#3f6fe0',
    hook: 'Wanna start Mathematics?',
    line: 'Functions, matrices, calculus, conics. The one that decides your rank.',
    go: '#Maths/Class-11-Maths-1A/01-Functions/00-mindmap'
  },
  {
    key: 'Physics', name: 'PHYSICS', colour: 0x8a4fd8, hex: '#8a4fd8',
    hook: 'Feel the magic of Physics',
    line: 'Why things fall, why light bends, why the universe bothers with rules.',
    go: '#Physics/Class-11-Physics/03-Motion-in-a-Straight-Line/00-mindmap'
  },
  {
    key: 'Chemistry', name: 'CHEMISTRY', colour: 0x13a07e, hex: '#13a07e',
    hook: 'Enter the nucleus of Chemistry',
    line: 'Inside the atom, inside the bond, inside every reaction you will be asked.',
    go: '#Chemistry/Class-11-Chemistry/01-Atomic-Structure/00-mindmap'
  }
];

/** @param {HTMLCanvasElement} canvas
 *  @param {{compact?: boolean}} opts */
export function makeScene(canvas, opts = {}) {
  const compact = Boolean(opts.compact);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b1020, compact ? 0.03 : 0.055);

  const camera = new THREE.PerspectiveCamera(compact ? 38 : 46, 1, 0.1, 100);
  camera.position.set(0, 0, compact ? 13 : 12);

  scene.add(new THREE.AmbientLight(0x6f7fbf, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 2.1);
  key.position.set(4, 6, 8);
  scene.add(key);
  const rim = new THREE.PointLight(0x5fa8ff, 120, 40);
  rim.position.set(-7, -3, 6);
  scene.add(rim);

  const world = new THREE.Group();
  scene.add(world);

  const shapes = [
    new THREE.IcosahedronGeometry(1.5, 0),
    new THREE.TorusKnotGeometry(1.05, 0.34, 150, 20),
    new THREE.OctahedronGeometry(1.6, 0)
  ];
  const solids = SUBJECTS.map((s, i) => {
    const mesh = new THREE.Mesh(shapes[i], new THREE.MeshStandardMaterial({
      color: s.colour, roughness: 0.22, metalness: 0.55,
      emissive: s.colour, emissiveIntensity: 0.18
    }));
    mesh.position.set((i - 1) * 4.6, 0, 0);
    world.add(mesh);
    const wire = new THREE.Mesh(shapes[i], new THREE.MeshBasicMaterial({
      color: 0xffffff, wireframe: true, transparent: true, opacity: 0.14
    }));
    wire.scale.setScalar(1.16);
    mesh.add(wire);
    return mesh;
  });

  // a book that opens as the page scrolls
  const book = new THREE.Group();
  const cover = new THREE.MeshStandardMaterial({ color: 0x2a3a63, roughness: 0.55, metalness: 0.25 });
  const paper = new THREE.MeshStandardMaterial({ color: 0xf5f5ef, roughness: 0.95 });
  const leaf = (mat, w, t) => {
    const g = new THREE.Group();
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, t, 2.4), mat);
    m.position.x = w / 2;
    g.add(m);
    return g;
  };
  const left = leaf(cover, 1.8, 0.12);
  const right = leaf(cover, 1.8, 0.12);
  const lp = leaf(paper, 1.68, 0.08);
  const rp = leaf(paper, 1.68, 0.08);
  lp.position.y = rp.position.y = 0.1;
  const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 2.4, 10), cover);
  spine.rotation.x = Math.PI / 2;
  book.add(left, right, lp, rp, spine);
  book.position.set(0, -3.6, 1.4);
  book.scale.setScalar(0.62);
  book.visible = !compact;
  world.add(book);

  const count = compact ? 420 : 900;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 44;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 26;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 6;
  }
  const dust = new THREE.Points(
    new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(pos, 3)),
    new THREE.PointsMaterial({ color: 0x9fc0ff, size: 0.055, transparent: true, opacity: 0.75 })
  );
  scene.add(dust);

  const state = { scroll: 0, mx: 0, my: 0, focus: -1 };

  function resize() {
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  const clock = new THREE.Clock();
  let running = true;

  function frame() {
    if (!running) return;
    requestAnimationFrame(frame);
    const t = clock.getElapsedTime();
    const s = state.scroll;

    solids.forEach((m, i) => {
      const lit = state.focus === i;
      m.rotation.x = t * (0.18 + i * 0.06);
      m.rotation.y = t * (0.26 - i * 0.05) + (lit ? t * 0.8 : 0);
      m.position.y = Math.sin(t * 0.8 + i * 1.7) * 0.34;
      m.position.x = (i - 1) * (4.6 + s * 3.4);
      m.position.z = -s * 7;
      const want = (lit ? 1.28 : 1) - s * 0.32;
      m.scale.setScalar(m.scale.x + (want - m.scale.x) * 0.12);
      m.material.emissiveIntensity = lit ? 0.55 : 0.18;
    });

    if (book.visible) {
      const open = Math.min(1, Math.max(0, (s - 0.05) * 2.6));
      left.rotation.z = open * 1.25;
      lp.rotation.z = open * 1.05;
      right.rotation.z = Math.PI - open * 1.25;
      rp.rotation.z = Math.PI - open * 1.05;
      book.rotation.x = -0.62 + s * 0.3;
      book.rotation.y = t * 0.3;
      book.position.y = -3.6 + s * 0.9;
      book.position.z = 1.4 + s * 2.6;
    }

    dust.rotation.y = t * 0.02;
    world.rotation.x = state.my * 0.12 - s * 0.25;
    world.rotation.y = state.mx * 0.2;
    camera.position.z = (compact ? 13 : 12) - s * 3.2;
    camera.position.y = s * 1.6;

    renderer.render(scene, camera);
  }

  resize();
  addEventListener('resize', resize);
  frame();

  return {
    setScroll: (v) => { state.scroll = v; },
    setPointer: (x, y) => { state.mx = x; state.my = y; },
    focus: (i) => { state.focus = i; },
    resize,
    stop: () => { running = false; renderer.dispose(); }
  };
}
