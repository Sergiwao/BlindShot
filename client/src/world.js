// ---------- Stylized Low-Poly PBR Material Helpers ----------
function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function matStone(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.88, metalness: 0.05, ...opts });
}

function matWood(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.68, metalness: 0.02, ...opts });
}

function matMetal(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.32, metalness: 0.78, ...opts });
}

function matFoliage(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.86, metalness: 0.0, ...opts });
}

function matGlow(color) {
  return new THREE.MeshBasicMaterial({ color });
}

function flat(color, opts = {}) {
  return matStone(color, opts);
}

function jitter(geo, amount, rand, keepBottom = false) {
  const pos = geo.attributes.position;
  const map = new Map();
  for (let i = 0; i < pos.count; i++) {
    const k = `${pos.getX(i).toFixed(3)},${pos.getY(i).toFixed(3)},${pos.getZ(i).toFixed(3)}`;
    if (!map.has(k)) map.set(k, [(rand() - 0.5) * amount, (rand() - 0.5) * amount, (rand() - 0.5) * amount]);
    const [jx, jy, jz] = map.get(k);
    const bottom = keepBottom && pos.getY(i) < -0.49 * (geo.parameters?.height ?? 1);
    pos.setXYZ(i, pos.getX(i) + jx, pos.getY(i) + (bottom ? 0 : jy), pos.getZ(i) + jz);
  }
  geo.computeVertexNormals();
  return geo;
}

/** Stylized low-poly trees with natural multi-layered branch canopies */
function makeTree(rand, scale = 1, style = 'pine') {
  const g = new THREE.Group();
  const woodCol = 0x664932;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 1.1, 5), matWood(woodCol));
  trunk.position.y = 0.55;
  trunk.castShadow = true; trunk.receiveShadow = true;
  g.add(trunk);

  if (style === 'cypress') {
    const greens = [0x2f5e4b, 0x3a6e58, 0x244f3e];
    const col = greens[Math.floor(rand() * greens.length)];
    const body = new THREE.Mesh(jitter(new THREE.ConeGeometry(0.55, 2.8, 6), 0.10, rand), matFoliage(col));
    body.position.y = 1.95; body.castShadow = true;
    g.add(body);
  } else if (style === 'cactus') {
    g.remove(trunk);
    const col = 0x568342;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 2.0, 6), matFoliage(col));
    stem.position.y = 1.0; stem.castShadow = true;
    g.add(stem);
    for (const s of [-1, 1]) {
      if (rand() > 0.20) {
        const armH = 0.8 + rand() * 0.3;
        const armJoint = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.12, 0.45, 5), matFoliage(col));
        armJoint.position.set(s * 0.28, 1.1 + rand() * 0.25, 0);
        armJoint.rotation.z = -s * (Math.PI / 2); armJoint.castShadow = true;
        const armUp = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.11, armH, 5), matFoliage(col));
        armUp.position.set(s * 0.50, 1.1 + armH * 0.5, 0); armUp.castShadow = true;
        g.add(armJoint, armUp);
      }
    }
  } else if (style === 'oak') {
    // Broadleaf deciduous oak with cloud-like clustered foliage
    const foliageCols = [0x5f8f4a, 0x6fa054, 0x52823e, 0x7aa552];
    const col = foliageCols[Math.floor(rand() * foliageCols.length)];
    const foliageG = new THREE.Group();
    const clusters = [
      { x: 0, y: 1.6, z: 0, s: 0.95 },
      { x: 0.35, y: 1.4, z: 0.2, s: 0.72 },
      { x: -0.32, y: 1.35, z: -0.22, s: 0.70 },
      { x: 0.1, y: 1.85, z: -0.15, s: 0.65 },
    ];
    for (const cl of clusters) {
      const clump = new THREE.Mesh(new THREE.DodecahedronGeometry(cl.s, 0), matFoliage(col));
      clump.position.set(cl.x, cl.y, cl.z); clump.rotation.set(rand() * 2, rand() * 2, rand() * 2);
      clump.castShadow = true; foliageG.add(clump);
    }
    g.add(foliageG);
  } else {
    // Layered alpine low-poly pine
    const greens = [0x4d7a42, 0x5a8a4d, 0x3e6b36, 0x689a54];
    const col = greens[Math.floor(rand() * greens.length)];
    const layers = rand() > 0.4 ? 4 : 3;
    for (let i = 0; i < layers; i++) {
      const r = 0.92 - i * 0.17;
      const h = 1.15;
      const c = new THREE.Mesh(jitter(new THREE.ConeGeometry(r, h, 6), 0.10, rand), matFoliage(col));
      c.position.y = 1.05 + i * 0.58; c.rotation.y = rand() * 3;
      c.castShadow = true;
      g.add(c);
    }
  }
  g.scale.setScalar(scale);
  return g;
}

/** Chiseled multi-faceted low-poly boulder with flat resting base */
function makeRock(rand, color, scale = 1) {
  const rock = new THREE.Mesh(jitter(new THREE.DodecahedronGeometry(0.65, 0), 0.32, rand), matStone(color));
  rock.scale.set(scale * (0.85 + rand() * 0.5), scale * (0.55 + rand() * 0.45), scale * (0.85 + rand() * 0.5));
  rock.rotation.set(rand() * 0.3, rand() * 6, rand() * 0.3);
  rock.castShadow = true; rock.receiveShadow = true;
  return rock;
}

/** Low-poly wooden post with warm ambient iron lantern */
function makeLantern(postColor = 0x5a3e2b, glowColor = 0xffbf47) {
  const g = new THREE.Group();
  // Carved wooden post
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.10, 1.6, 5), matWood(postColor));
  post.position.y = 0.8; post.castShadow = true;
  // Iron bracket
  const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.18), matMetal(0x282a30));
  bracket.position.set(0, 1.45, 0.12);
  // Lantern frame
  const frame = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.08, 0.22, 5), matMetal(0x222428));
  frame.position.set(0, 1.35, 0.22); frame.castShadow = true;
  // Emissive glowing core
  const core = new THREE.Mesh(new THREE.DodecahedronGeometry(0.07, 0), matGlow(glowColor));
  core.position.set(0, 1.35, 0.22);
  g.add(post, bracket, frame, core);
  return g;
}

/** Tactical supply crate with metal corner reinforcements */
function makeCrate(color = 0x6e523b, scale = 1) {
  const g = new THREE.Group();
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), matWood(color));
  box.castShadow = box.receiveShadow = true;
  // Cross braces
  const brace1 = new THREE.Mesh(new THREE.BoxGeometry(0.77, 0.08, 0.77), matMetal(0x353840));
  const brace2 = new THREE.Mesh(new THREE.BoxGeometry(0.77, 0.77, 0.08), matMetal(0x353840));
  g.add(box, brace1, brace2);
  g.scale.setScalar(scale);
  return g;
}

/** Wooden banded barrel */
function makeBarrel(color = 0x72543d, scale = 1) {
  const g = new THREE.Group();
  const stave = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.85, 7), matWood(color));
  stave.scale.set(1.15, 1, 1.15); stave.castShadow = stave.receiveShadow = true;
  for (const y of [-0.28, 0.28]) {
    const hoop = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.06, 7), matMetal(0x2b2e35));
    hoop.position.y = y; g.add(hoop);
  }
  g.add(stave);
  g.scale.setScalar(scale);
  return g;
}

export class World {
  constructor(canvas) {
    const mobile = matchMedia('(pointer: coarse)').matches;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.75 : 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xcfe0dc);
    // Light subtle background fog only for distant landscape, never obscuring the arena
    this.scene.fog = new THREE.Fog(0xcfe0dc, 120, 350);

    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 350);
    this.camTarget = new THREE.Vector3(0, 1, 0);
    // Start high & wide for launch animation
    this.camera.position.set(0, 14, 18);
    this.camPos = new THREE.Vector3(0, 4, 6);
    this.camLook = new THREE.Vector3(0, 1, 0);
    this.arenaIntroT = 0;

    this.hemi = new THREE.HemisphereLight(0xfff7e8, 0x5d685c, 1.5);
    this.sun = new THREE.DirectionalLight(0xffebd2, 2.6);
    this.sun.position.set(-14, 24, 12);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
    const sc = this.sun.shadow.camera; sc.left = sc.bottom = -26; sc.right = sc.top = 26; sc.far = 90;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.02;
    this.scene.add(this.hemi, this.sun);

    this.arenaGroup = new THREE.Group();
    this.scene.add(this.arenaGroup);
    this.fx = [];
    this.shake = 0;
    this.addPedestal();

    addEventListener('resize', () => this.resize());
    this.resize();
  }

  resize() {
    const w = innerWidth, h = innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this.fitSize) this.fitArena(this.fitSize);
  }

  setSky(hex, isArena = false) {
    this.scene.background.setHex(hex);
    if (isArena) {
      // In arena, push fog far beyond the action to guarantee crystal-clear view on all mobile devices
      this.scene.fog = new THREE.Fog(hex, 160, 450);
    } else {
      this.scene.fog = new THREE.Fog(hex, 90, 260);
    }
  }

  addPedestal() {
    const g = new THREE.Group();
    const rand = rng(7);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.3, 7), flat(0x93b56f));
    top.position.y = -0.15; top.receiveShadow = true;
    const cliff = new THREE.Mesh(jitter(new THREE.ConeGeometry(2.4, 2.6, 7, 2), 0.35, rand), flat(0x9c8a78));
    cliff.rotation.x = Math.PI; cliff.position.y = -1.6; cliff.castShadow = true;
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.05, 0.22, 6), flat(0xe6cfa3));
    plinth.position.y = 0.0; plinth.scale.y = 0.5; plinth.receiveShadow = true; plinth.castShadow = true;
    const lantern = makeLantern(0x6e523b, 0xffbe42);
    lantern.position.set(-1.8, 0, 0.8); lantern.rotation.y = 0.4;
    g.add(top, cliff, plinth, lantern);
    const t1 = makeTree(rand, 0.8); t1.position.set(-1.4, 0, -1.2); g.add(t1);
    const t2 = makeTree(rand, 0.6); t2.position.set(-0.4, 0, -1.9); g.add(t2);
    const r1 = makeRock(rand, 0x9c8a78, 0.6); r1.position.set(1.5, 0.1, -1.1); g.add(r1);
    const r2 = makeRock(rand, 0x8f8a80, 0.35); r2.position.set(1.8, 0.05, 0.6); g.add(r2);
    this.pedestal = g;
    this.scene.add(g);

    this.showcaseGroup = new THREE.Group();
    this.showcaseGroup.position.set(0, 1.18, 0);
    this.showcaseGroup.visible = false;
    this.scene.add(this.showcaseGroup);
  }

  setShowcaseMesh(mesh) {
    this.showcaseGroup.clear();
    if (!mesh) return;
    const portrait = innerWidth < innerHeight;
    mesh.scale.setScalar(portrait ? 1.6 : 2.4);
    this.showcaseGroup.add(mesh);
  }

  showMenu(mode = 'menu') {
    this.pedestal.visible = true;
    this.arenaGroup.visible = false;
    this.showcaseGroup.visible = mode === 'armory';
    this.fitSize = null;
    this.camMode = mode;
    this.setSky(mode === 'armory' ? 0xd8dfd8 : 0xcfe0dc, false);
  }

  fitArena(size) {
    this.fitSize = size;
    const a = this.camera.aspect;
    const vfov = THREE.MathUtils.degToRad(this.camera.fov);
    const needV = size * 2.12;
    const distV = (needV / 2) / Math.tan(vfov / 2);
    // On portrait mobile (a < 1), frame arena tightly and immersively without pushing camera into deep distance
    const d = a < 1
      ? Math.max(distV * 1.08, (size * 1.82) / (2 * Math.tan(vfov / 2) * Math.max(a, 0.62)))
      : distV * 1.02;
    const tilt = a < 1 ? 1.06 : 1.02;
    this.camPos.set(0, Math.sin(tilt) * d, Math.cos(tilt) * d + (a < 1 ? 0.6 : 0));
    this.camLook.set(0, 0, a < 1 ? 0.8 : 0.4);
  }

  buildArena(arena, zone) {
    this.pedestal.visible = false;
    this.showcaseGroup.visible = false;
    this.arenaGroup.visible = true;
    this.arenaGroup.clear();
    this.camMode = 'arena';
    const th = arena.theme;
    this.setSky(th.sky, true);
    this.arena = arena;
    const S = arena.size;
    const rand = rng(S * 97 + arena.id.length);
    const circle = arena.shape === 'circle';

    // Surrounding terrain
    const groundGeo = new THREE.PlaneGeometry(220, 220, 40, 40);
    groundGeo.rotateX(-Math.PI / 2);
    const gp = groundGeo.attributes.position;
    for (let i = 0; i < gp.count; i++) {
      const x = gp.getX(i), z = gp.getZ(i);
      const d = Math.hypot(x, z);
      const lift = Math.max(0, d - S - 6) * 0.06;
      gp.setY(i, -1.6 + (rand() - 0.5) * 0.5 + Math.min(lift, 4) + (d > S + 30 ? (rand() * 3) : 0));
    }
    groundGeo.computeVertexNormals();
    const ground = new THREE.Mesh(groundGeo, flat(th.ground));
    ground.receiveShadow = true;
    this.arenaGroup.add(ground);

    // Arena platform: tiled stone floor
    const floorGroup = new THREE.Group();
    const base = new THREE.Color(th.floor);
    if (circle) {
      const rings = Math.ceil(S / 2.2);
      for (let r = 0; r < rings; r++) {
        const r0 = (r / rings) * S, r1 = ((r + 1) / rings) * S;
        const segs = Math.max(6, Math.round(6 + r * 5));
        for (let s = 0; s < segs; s++) {
          const a0 = (s / segs) * Math.PI * 2, a1 = ((s + 1) / segs) * Math.PI * 2;
          const geo = new THREE.RingGeometry(r0 + 0.04, r1 - 0.04, 2, 1, a0 + 0.006, a1 - a0 - 0.012);
          geo.rotateX(-Math.PI / 2);
          const c = base.clone().offsetHSL(0, 0, (rand() - 0.5) * 0.06);
          const m = new THREE.Mesh(geo, flat(c));
          m.receiveShadow = true; floorGroup.add(m);
        }
      }
    } else {
      const tile = S > 12 ? 2.5 : 2.25;
      const n = Math.round((S * 2) / tile);
      const ts = (S * 2) / n;
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        const c = base.clone().offsetHSL(0, 0, (rand() - 0.5) * 0.07 + ((i + j) % 2 ? 0.015 : -0.015));
        const m = new THREE.Mesh(new THREE.BoxGeometry(ts - 0.08, 0.12, ts - 0.08), flat(c));
        m.position.set(-S + ts * (i + 0.5), -0.06, -S + ts * (j + 0.5));
        m.receiveShadow = true; floorGroup.add(m);
      }
    }
    const slabMat = flat(base.clone().multiplyScalar(0.72));
    const slab = circle
      ? new THREE.Mesh(new THREE.CylinderGeometry(S, S, 0.2, 48), slabMat)
      : new THREE.Mesh(new THREE.BoxGeometry(S * 2, 0.2, S * 2), slabMat);
    slab.position.y = -0.2; slab.receiveShadow = true;
    floorGroup.add(slab);
    this.arenaGroup.add(floorGroup);

    // Cliff / plinth sides
    const rockMat = flat(th.rock);
    const side = circle
      ? new THREE.Mesh(jitter(new THREE.CylinderGeometry(S + 0.3, S + 1.2, 1.6, 24, 2), 0.35, rand), rockMat)
      : new THREE.Mesh(jitter(new THREE.BoxGeometry(S * 2 + 0.6, 1.6, S * 2 + 0.6, 8, 2, 8), 0.3, rand), rockMat);
    side.position.y = -1.1; side.receiveShadow = true; side.castShadow = true;
    this.arenaGroup.add(side);

    // Border curb
    const curbMat = flat(th.line);
    if (circle) {
      const curb = new THREE.Mesh(new THREE.TorusGeometry(S, 0.14, 4, 48), curbMat);
      curb.rotation.x = Math.PI / 2; curb.position.y = 0.02; curb.castShadow = true;
      this.arenaGroup.add(curb);
    } else {
      for (const [x, z, w, d] of [[0, S, S * 2 + 0.3, 0.3], [0, -S, S * 2 + 0.3, 0.3], [S, 0, 0.3, S * 2 + 0.3], [-S, 0, 0.3, S * 2 + 0.3]]) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(w, 0.22, d), curbMat);
        b.position.set(x, 0.05, z); b.castShadow = b.receiveShadow = true;
        this.arenaGroup.add(b);
      }
      for (const [x, z] of [[S, S], [S, -S], [-S, S], [-S, -S]]) {
        const p = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.44, 1.3, 6), matStone(th.rock));
        p.position.set(x, 0.6, z); p.castShadow = true;
        const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.18, 6), matStone(th.line));
        cap.position.y = 0.72; cap.castShadow = true; p.add(cap);

        // Warm ambient low-poly lantern on corner pillar
        const lantern = makeLantern(th.line, 0xffc44d);
        lantern.position.set(x, 1.32, z);
        this.arenaGroup.add(p, lantern);
      }
    }

    // Obstacles — specialized per arena style
    for (const o of arena.obstacles) {
      const wall = new THREE.Group();
      if (arena.id === 'sanctuary') {
        const isCenter = Math.hypot(o.x, o.z) < 1;
        if (isCenter) {
          // Stepped central sanctuary altar with floating glowing crystal
          const b1 = new THREE.Mesh(new THREE.BoxGeometry(o.w, 0.45, o.d), matStone(th.rock));
          b1.position.y = 0.22; b1.castShadow = b1.receiveShadow = true;
          const b2 = new THREE.Mesh(new THREE.BoxGeometry(o.w * 0.75, 0.85, o.d * 0.75), matStone(0xf6f2e9));
          b2.position.y = 0.85; b2.castShadow = b2.receiveShadow = true;
          const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.45, 0), matGlow(0x42e0ff));
          crystal.position.y = 1.85;
          wall.add(b1, b2, crystal);
        } else {
          // Classical octagonal low-poly fluted column
          const r = o.w * 0.46;
          const plinth = new THREE.Mesh(new THREE.BoxGeometry(o.w, 0.28, o.d), matStone(th.rock));
          plinth.position.y = 0.14; plinth.castShadow = plinth.receiveShadow = true;
          const shaft = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.88, r, 1.8, 8), matStone(0xf4f0e6));
          shaft.position.y = 1.18; shaft.castShadow = shaft.receiveShadow = true;
          const cap = new THREE.Mesh(new THREE.BoxGeometry(o.w * 1.05, 0.22, o.d * 1.05), matStone(th.line));
          cap.position.y = 2.14; cap.castShadow = true;
          wall.add(plinth, shaft, cap);
        }
      } else if (arena.id === 'bastion') {
        // Military tactical battlements: wood barricades, metal plates, supply crates & barrels
        const long = o.w >= o.d;
        const mainBarricade = new THREE.Mesh(new THREE.BoxGeometry(o.w, 1.6, o.d), matWood(0x6e4e38));
        mainBarricade.position.y = 0.8; mainBarricade.castShadow = mainBarricade.receiveShadow = true;
        // Metal reinforced armor band
        const metalBand = new THREE.Mesh(new THREE.BoxGeometry(long ? o.w + 0.05 : o.w - 0.02, 0.18, long ? o.d - 0.02 : o.d + 0.05), matMetal(0x353842));
        metalBand.position.y = 0.95;
        // Side crate / barrel decor
        if (Math.max(o.w, o.d) > 2) {
          const crate = makeCrate(0x5a3e2b, 0.65);
          crate.position.set(long ? (o.w * 0.28) : 0, 0.26, long ? 0 : (o.d * 0.28));
          wall.add(crate);
        }
        wall.add(mainBarricade, metalBand);
      } else if (arena.id === 'forest') {
        // Ancient mossy monoliths and chiseled stone dolmens
        const rock = makeRock(rand, th.rock, Math.max(o.w, o.d) * 0.75);
        rock.scale.set(o.w * 0.85, 1.6, o.d * 0.85);
        rock.position.y = 0.8;
        const mossCap = new THREE.Mesh(jitter(new THREE.BoxGeometry(o.w * 0.88, 0.2, o.d * 0.88, 3, 1, 3), 0.08, rand), matFoliage(0x4d7c3b));
        mossCap.position.y = 1.65; mossCap.castShadow = true;
        wall.add(rock, mossCap);
      } else {
        // Layered stone / mesa masonry blocks with natural mortar
        const rows = 3, h = 1.8 / rows;
        for (let r = 0; r < rows; r++) {
          const long = o.w >= o.d;
          const L = long ? o.w : o.d;
          const count = Math.max(1, Math.round(L / 1.1));
          const off = r % 2 ? 0.5 : 0;
          for (let k = -off; k < count; k++) {
            const a = Math.max(0, k), b = Math.min(count, k + 1);
            if (b - a < 0.2) continue;
            const len = ((b - a) / count) * L - 0.04;
            const center = -L / 2 + ((a + b) / 2 / count) * L;
            const geo = new THREE.BoxGeometry(long ? len : o.w - 0.02, h - 0.04, long ? o.d - 0.02 : len);
            const c = new THREE.Color(th.rock).offsetHSL(0, 0, (rand() - 0.5) * 0.08);
            const brick = new THREE.Mesh(geo, matStone(c));
            brick.position.set(long ? center : 0, h * (r + 0.5), long ? 0 : center);
            brick.castShadow = brick.receiveShadow = true;
            wall.add(brick);
          }
        }
        const capColor = arena.id === 'bastion' ? th.line : th.accent;
        const moss = new THREE.Mesh(jitter(new THREE.BoxGeometry(o.w + 0.08, 0.16, o.d + 0.08, 3, 1, 3), 0.08, rand), matFoliage(capColor));
        moss.position.y = 1.86; moss.castShadow = true;
        wall.add(moss);
      }
      wall.position.set(o.x, 0, o.z);
      this.arenaGroup.add(wall);
    }

    // Decor around the arena matching theme
    const decorR = S + 3;
    const nDecor = Math.round(S * 3.5);
    for (let i = 0; i < nDecor; i++) {
      const a = rand() * Math.PI * 2;
      const r = decorR + rand() * 16;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = -1.6 + Math.min(Math.max(0, r - S - 6) * 0.06, 4);
      let treeStyle = 'pine';
      if (arena.id === 'sanctuary') treeStyle = 'cypress';
      else if (arena.id === 'bastion') treeStyle = 'cactus';
      else if (arena.id === 'forest') treeStyle = rand() > 0.45 ? 'oak' : 'pine';
      else if (arena.id === 'dune') treeStyle = rand() > 0.6 ? 'cactus' : 'pine';

      const obj = rand() > 0.35 ? makeTree(rand, 0.85 + rand() * 0.9, treeStyle) : makeRock(rand, th.rock, 0.75 + rand() * 1.3);
      obj.position.set(x, y, z);
      this.arenaGroup.add(obj);
    }
    for (let i = 0; i < 20; i++) {
      const a = rand() * Math.PI * 2, r = S + 1.2 + rand() * 2.2;
      const rock = makeRock(rand, th.rock, 0.25 + rand() * 0.35);
      rock.position.set(Math.cos(a) * r, -1.45, Math.sin(a) * r);
      this.arenaGroup.add(rock);
    }
    // Wild grass & vegetation clusters along arena periphery
    for (let i = 0; i < 26; i++) {
      const a = rand() * Math.PI * 2, r = S + 0.6 + rand() * 3.5;
      const grass = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.45, 4), matFoliage(th.accent));
      grass.position.set(Math.cos(a) * r, -0.25, Math.sin(a) * r);
      grass.rotation.set((rand() - 0.5) * 0.35, rand() * 3, (rand() - 0.5) * 0.35);
      this.arenaGroup.add(grass);
    }

    // Shrinking zone visuals
    this.zoneRing = null;
    if (circle && arena.shrinkStep) {
      const danger = new THREE.Mesh(new THREE.RingGeometry(S - 0.01, S, 64), new THREE.MeshStandardMaterial({ color: 0x5a2f2a, flatShading: true, roughness: 1, transparent: true, opacity: 0.82 }));
      danger.rotation.x = -Math.PI / 2; danger.position.y = 0.012;
      const edge = new THREE.Mesh(new THREE.TorusGeometry(1, 0.012, 4, 64), flat(th.line));
      edge.rotation.x = Math.PI / 2; edge.position.y = 0.04;
      const stakes = new THREE.Group();
      for (let i = 0; i < 28; i++) {
        const st = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.55, 4), flat(th.accent));
        const a = (i / 28) * Math.PI * 2;
        st.position.set(Math.cos(a), 0.27, Math.sin(a));
        st.castShadow = true;
        stakes.add(st);
      }
      this.arenaGroup.add(danger, edge, stakes);
      this.zoneRing = { danger, edge, stakes, cur: zone, target: zone };
      this.setZone(zone, true);
    }

    this.fitArena(S);
    // Dramatic launch swoop when entering the arena
    this.camera.position.set(this.camPos.x - 10, this.camPos.y * 1.55, this.camPos.z * 1.35);
    this.camTarget.set(0, 2, 0);
  }

  setZone(z, instant) {
    if (!this.zoneRing) return;
    this.zoneRing.target = z;
    if (instant) { this.zoneRing.cur = z; this.zoneRing.last = undefined; }
  }

  updateZone(dt) {
    const zr = this.zoneRing; if (!zr) return;
    zr.cur += (zr.target - zr.cur) * Math.min(1, dt * 2.5);
    const S = this.arena.size, r = zr.cur;
    if (zr.last === undefined || Math.abs(zr.last - r) > 0.01) {
      zr.last = r;
      zr.danger.geometry.dispose();
      zr.danger.geometry = new THREE.RingGeometry(r, S + 0.01, 64);
      zr.edge.scale.set(r, r, 1);
      zr.stakes.children.forEach((st, i) => {
        const a = (i / zr.stakes.children.length) * Math.PI * 2;
        st.position.set(Math.cos(a) * r, 0.27, Math.sin(a) * r);
      });
    }
  }

  // ---- Effects ----
  beam(x1, z1, x2, z2, color, delay = 0, weapon = 'blaster') {
    const len = Math.max(0.01, Math.hypot(x2 - x1, z2 - z1));
    const grp = new THREE.Group();
    const thick = weapon === 'orbital' ? 0.48 : weapon === 'vortex' ? 0.36 : weapon === 'bazooka' ? 0.30 : weapon === 'shark' ? 0.22 : weapon === 'zeus' ? 0.24 : weapon === 'royal' ? 0.20 : 0.16;
    const beamColor = weapon === 'orbital' ? new THREE.Color('#ffe26a') : weapon === 'vortex' ? new THREE.Color('#9b4df0') : weapon === 'zeus' ? new THREE.Color('#46d2ff') : weapon === 'duck' ? new THREE.Color('#f2c12e') : color;
    const coreColor = weapon === 'orbital' ? 0xffffff : weapon === 'vortex' ? 0x2b104a : weapon === 'royal' ? 0xffe699 : 0xffffff;
    const outer = new THREE.Mesh(new THREE.BoxGeometry(1, thick, thick), new THREE.MeshBasicMaterial({ color: beamColor, transparent: true, opacity: weapon === 'vortex' ? 0.92 : 0.85 }));
    const core = new THREE.Mesh(new THREE.BoxGeometry(1, thick * 0.45, thick * 1.15), new THREE.MeshBasicMaterial({ color: coreColor, transparent: true }));
    outer.position.x = core.position.x = 0.5;
    grp.add(outer, core);
    grp.position.set(x1, 0.95, z1);
    grp.rotation.y = -Math.atan2(z2 - z1, x2 - x1);
    grp.scale.set(0.001, 1, 1);
    grp.visible = false;
    this.scene.add(grp);
    const streak = new THREE.Mesh(new THREE.PlaneGeometry(1, thick * 1.4), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18, depthWrite: false }));
    streak.geometry.translate(0.5, 0, 0); streak.rotation.x = -Math.PI / 2;
    const streakHolder = new THREE.Group(); streakHolder.add(streak);
    streakHolder.position.set(x1, 0.02, z1); streakHolder.rotation.y = grp.rotation.y; streakHolder.visible = false;
    this.scene.add(streakHolder);
    let sparked = false;
    this.fx.push({
      t: -delay, life: 1.3,
      update: (t) => {
        if (t < 0) return;
        grp.visible = streakHolder.visible = true;
        const grow = Math.min(1, t / 0.1);
        grp.scale.set(len * grow, 1, 1);
        streak.scale.x = len * grow;
        if (grow >= 1 && !sparked) {
          sparked = true;
          this.chips(x2, 0.95, z2, beamColor, weapon === 'bazooka' ? 18 : 10, weapon === 'bazooka' ? 0.75 : 0.5);
        }
        const fade = t > 0.6 ? Math.max(0, 1 - (t - 0.6) / 0.6) : 1;
        const pulse = weapon === 'tesla' ? (0.85 + Math.sin(t * 70) * 0.3) : 1;
        const thin = (t > 0.6 ? fade : 1) * pulse;
        grp.scale.y = grp.scale.z = thin;
        outer.material.opacity = fade; core.material.opacity = fade;
        streak.material.opacity = 0.18 * fade;
      },
      dispose: () => { this.scene.remove(grp, streakHolder); },
    });
    this.shake = Math.max(this.shake, weapon === 'bazooka' ? 0.3 : 0.18);
  }

  /** Throws a 3D grenade in a parabolic arc then detonates an AoE shockwave */
  grenadeLob(x1, z1, x2, z2, color, radius = 3.2, delay = 0) {
    const gren = new THREE.Mesh(new THREE.IcosahedronGeometry(0.24, 0), flat('#4b6b3e'));
    gren.castShadow = true; gren.visible = false;
    this.scene.add(gren);

    const ringGeo = new THREE.RingGeometry(0.1, radius, 28);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xe8603c, transparent: true, opacity: 0 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(x2, 0.04, z2); ring.visible = false;
    this.scene.add(ring);

    const dome = new THREE.Mesh(new THREE.IcosahedronGeometry(radius * 0.72, 1), flat(0xf2a93b, { transparent: true, opacity: 0 }));
    dome.position.set(x2, 0.2, z2); dome.visible = false;
    this.scene.add(dome);

    let exploded = false;
    const flight = 0.35;
    this.fx.push({
      t: -delay, life: 1.35,
      update: (t) => {
        if (t < 0) return;
        if (t < flight) {
          gren.visible = true;
          const u = t / flight;
          gren.position.set(
            x1 + (x2 - x1) * u,
            0.95 * (1 - u) + Math.sin(u * Math.PI) * 3.4,
            z1 + (z2 - z1) * u
          );
          gren.rotation.x += 0.25; gren.rotation.z += 0.2;
        } else {
          gren.visible = false;
          if (!exploded) {
            exploded = true;
            ring.visible = dome.visible = true;
            this.chips(x2, 0.6, z2, new THREE.Color('#e8603c'), 38, 1.35);
            this.chips(x2, 0.4, z2, color, 20, 1.1);
            this.shake = Math.max(this.shake, 0.55);
          }
          const k = (t - flight) / (1.35 - flight);
          ring.scale.setScalar(0.35 + k * 0.75);
          ringMat.opacity = Math.max(0, 0.85 * (1 - k));
          dome.scale.setScalar(0.5 + k * 1.15);
          dome.material.opacity = Math.max(0, 0.85 * (1 - k * 1.25));
          dome.rotation.y = k * 2.5;
        }
      },
      dispose: () => {
        this.scene.remove(gren, ring, dome);
        gren.geometry.dispose(); ringGeo.dispose(); ringMat.dispose();
        dome.geometry.dispose(); dome.material.dispose();
      },
    });
  }

  chips(x, y, z, color, count = 24, power = 1) {
    const geo = new THREE.TetrahedronGeometry(0.12, 0);
    const mat = flat(color, { transparent: true });
    const parts = [];
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x + (Math.random() - 0.5) * 0.4, y + (Math.random() - 0.3) * 0.8, z + (Math.random() - 0.5) * 0.4);
      m.scale.setScalar(0.6 + Math.random() * 1.2);
      m.castShadow = true;
      const v = new THREE.Vector3((Math.random() - 0.5) * 6 * power, (1.5 + Math.random() * 4) * power, (Math.random() - 0.5) * 6 * power);
      const spin = new THREE.Vector3(Math.random() * 8, Math.random() * 8, Math.random() * 8);
      parts.push({ m, v, spin });
      this.scene.add(m);
    }
    this.fx.push({
      t: 0, life: 1.5,
      update: (t, dt) => {
        for (const p of parts) {
          p.v.y -= 14 * dt;
          p.m.position.addScaledVector(p.v, dt);
          if (p.m.position.y < 0.06) { p.m.position.y = 0.06; p.v.y *= -0.35; p.v.x *= 0.7; p.v.z *= 0.7; p.spin.multiplyScalar(0.7); }
          p.m.rotation.x += p.spin.x * dt; p.m.rotation.y += p.spin.y * dt; p.m.rotation.z += p.spin.z * dt;
        }
        mat.opacity = t > 1 ? 1 - (t - 1) / 0.5 : 1;
      },
      dispose: () => { for (const p of parts) this.scene.remove(p.m); geo.dispose(); mat.dispose(); },
    });
  }

  burst(x, z, color) {
    this.chips(x, 0.9, z, color, 34, 1);
    const puff = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 0), new THREE.MeshStandardMaterial({ color: 0xf4efe6, flatShading: true, transparent: true, roughness: 1 }));
    puff.position.set(x, 0.9, z);
    this.scene.add(puff);
    this.fx.push({
      t: 0, life: 0.7,
      update: (t) => { const k = t / 0.7; puff.scale.setScalar(1 + k * 2.2); puff.material.opacity = 0.9 * (1 - k); puff.rotation.y = k * 2; },
      dispose: () => { this.scene.remove(puff); puff.geometry.dispose(); puff.material.dispose(); },
    });
    this.shake = Math.max(this.shake, 0.4);
  }

  /** Spawns a shower of 3D low-poly golden Shoot Coins falling and bouncing on the pedestal */
  coinShower(count = 30) {
    const rimGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.055, 8);
    const faceGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.068, 6);
    const rimMat = flat(0xffb340, { transparent: true });
    const faceMat = flat(0xd98218, { transparent: true });
    const coins = [];
    for (let i = 0; i < count; i++) {
      const grp = new THREE.Group();
      const rim = new THREE.Mesh(rimGeo, rimMat);
      const face = new THREE.Mesh(faceGeo, faceMat);
      rim.castShadow = true;
      grp.add(rim, face);
      const angle = Math.random() * Math.PI * 2;
      const rad = 0.15 + Math.random() * 1.35;
      grp.position.set(
        Math.cos(angle) * rad,
        2.5 + Math.random() * 2.2,
        Math.sin(angle) * rad
      );
      grp.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 1.4,
        -1.5 - Math.random() * 2.5,
        (Math.random() - 0.5) * 1.4
      );
      const spin = new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14
      );
      coins.push({ grp, v, spin });
      this.scene.add(grp);
    }
    this.fx.push({
      t: 0, life: 2.2,
      update: (t, dt) => {
        for (const c of coins) {
          c.v.y -= 13.5 * dt;
          c.grp.position.addScaledVector(c.v, dt);
          if (c.grp.position.y < 0.08) {
            c.grp.position.y = 0.08;
            c.v.y *= -0.48;
            c.v.x *= 0.78;
            c.v.z *= 0.78;
            c.spin.multiplyScalar(0.75);
          }
          c.grp.rotation.x += c.spin.x * dt;
          c.grp.rotation.y += c.spin.y * dt;
          c.grp.rotation.z += c.spin.z * dt;
        }
        const fade = t > 1.6 ? Math.max(0, 1 - (t - 1.6) / 0.6) : 1;
        rimMat.opacity = fade;
        faceMat.opacity = fade;
      },
      dispose: () => {
        for (const c of coins) this.scene.remove(c.grp);
        rimGeo.dispose(); faceGeo.dispose();
        rimMat.dispose(); faceMat.dispose();
      },
    });
  }

  update(dt, t) {
    this.updateZone(dt);
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const f = this.fx[i]; f.t += dt; f.update(f.t, dt);
      if (f.t > f.life) { f.dispose(); this.fx.splice(i, 1); }
    }
    const portrait = this.camera.aspect < 1;
    if (this.camMode === 'menu') {
      const a = t * 0.15;
      this.camPos.set(Math.sin(a) * 0.6 + 4.5, 2.4, Math.cos(a) * 0.6 + 2.4);
      this.camLook.set(0, portrait ? 0.6 : 1, 0);
      if (portrait) this.camPos.multiplyScalar(1.3);
    } else if (this.camMode === 'custom') {
      // Frame the character cleanly above the compact bottom customization dock
      const dist = portrait ? 4.8 : 4.1;
      this.camPos.set(0, 1.75, dist);
      this.camLook.set(0, 0.35, 0);
    } else if (this.camMode === 'armory') {
      // Frame the 3D weapon showcase cleanly above the bottom card without cutting off
      const dist = portrait ? 3.85 : 2.95;
      this.camPos.set(0, portrait ? 1.62 : 1.52, dist);
      this.camLook.set(0, portrait ? 1.05 : 0.86, 0);
      if (this.showcaseGroup.visible) {
        this.showcaseGroup.position.y = (portrait ? 1.28 : 1.18) + Math.sin(t * 2.5) * 0.04;
      }
    }
    this.camera.position.lerp(this.camPos, Math.min(1, dt * 4));
    this.camTarget.lerp(this.camLook, Math.min(1, dt * 4));
    if (this.shake > 0) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake;
      this.camera.position.y += (Math.random() - 0.5) * this.shake;
      this.shake = Math.max(0, this.shake - dt * 1.5);
    }
    this.camera.lookAt(this.camTarget);
    this.renderer.render(this.scene, this.camera);
  }
}
