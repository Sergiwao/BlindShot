import * as THREE from 'three';

// Muted, premium palette (no neon)
export const BODY_COLORS = ['#e8603c', '#3d7fd9', '#e6b52e', '#4fa36b', '#8a5cc7', '#2fa6a0', '#f1ebe0', '#3a3a46'];
export const LASER_COLORS = ['#e8603c', '#3d7fd9', '#e6b52e', '#4fa36b', '#d94a8c', '#f1ebe0'];
export const HATS = { none: 'Aucun', cap: 'Casquette', crown: 'Couronne', cone: 'Fête', halo: 'Auréole', horns: 'Cornes' };
export const FACES = { happy: 'Joyeux', cool: 'Cool', angry: 'Vénère', cute: 'Mignon' };

const INK = '#22202b';
const faceCache = new Map();
function faceTexture(face) {
  if (faceCache.has(face)) return faceCache.get(face);
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = INK; g.strokeStyle = INK; g.lineWidth = 7; g.lineCap = 'round';
  const eye = (x, y, r = 10) => { g.beginPath(); g.ellipse(x, y, r * 0.8, r * 1.1, 0, 0, 7); g.fill(); };
  if (face === 'cool') {
    g.beginPath(); g.roundRect(22, 46, 38, 18, 4); g.roundRect(68, 46, 38, 18, 4); g.fill(); g.fillRect(56, 50, 16, 5);
    g.beginPath(); g.moveTo(50, 90); g.lineTo(80, 86); g.stroke();
  } else if (face === 'angry') {
    eye(44, 64, 8); eye(84, 64, 8);
    g.beginPath(); g.moveTo(30, 44); g.lineTo(56, 54); g.moveTo(98, 44); g.lineTo(72, 54); g.stroke();
    g.beginPath(); g.moveTo(50, 96); g.lineTo(78, 96); g.stroke();
  } else if (face === 'cute') {
    eye(42, 60, 13); eye(86, 60, 13);
    g.fillStyle = 'rgba(226,110,110,.45)'; g.beginPath(); g.ellipse(28, 82, 9, 6, 0, 0, 7); g.ellipse(100, 82, 9, 6, 0, 0, 7); g.fill();
    g.beginPath(); g.arc(64, 84, 7, 0.1, Math.PI - 0.1); g.stroke();
  } else {
    eye(44, 58); eye(84, 58);
    g.beginPath(); g.arc(64, 76, 18, 0.2 * Math.PI, 0.8 * Math.PI); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  faceCache.set(face, t);
  return t;
}

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0, flatShading: true, transparent: true, ...opts });
}

function buildHat(type, accent) {
  const g = new THREE.Group();
  if (type === 'cap') {
    const top = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), mat(accent));
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.05, 8, 1, false, -Math.PI / 2, Math.PI), mat(accent));
    brim.position.set(0.25, 0.02, 0); brim.scale.set(1.2, 1, 1);
    g.add(top, brim); g.position.y = 0.12;
  } else if (type === 'crown') {
    const m = mat('#d9a93a', { roughness: 0.4, metalness: 0.5 });
    m.side = THREE.DoubleSide;
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.16, 6, 1, true), m);
    g.add(ring);
    for (let i = 0; i < 6; i++) {
      const s = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.18, 4), m);
      const a = (i / 6) * Math.PI * 2;
      s.position.set(Math.cos(a) * 0.28, 0.16, Math.sin(a) * 0.28);
      g.add(s);
    }
    g.position.y = 0.38;
  } else if (type === 'cone') {
    const c = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.55, 6), mat('#d94a5a'));
    const pom = new THREE.Mesh(new THREE.IcosahedronGeometry(0.08, 0), mat('#f1ebe0'));
    pom.position.y = 0.3; c.add(pom); c.rotation.z = -0.2;
    g.add(c); g.position.y = 0.55;
  } else if (type === 'halo') {
    const h = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.045, 4, 10), mat('#e6c25a', { roughness: 0.4, metalness: 0.4 }));
    h.rotation.x = Math.PI / 2; g.add(h); g.position.y = 0.6; g.userData.spin = h;
  } else if (type === 'horns') {
    for (const s of [-1, 1]) {
      const h = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.32, 5), mat('#efe6d6'));
      h.position.set(0, 0.32, s * 0.2); h.rotation.x = s * 0.5;
      g.add(h);
    }
  }
  return g;
}

/** Builds the 3D weapon or grenade mesh held by the character */
export function buildWeaponMesh(weaponId, laserColor, bodyMat) {
  const g = new THREE.Group();
  const hand = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), bodyMat);
  g.add(hand);

  if (weaponId === 'grenade') {
    // Low-poly pineapple grenade held in hand
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.19, 0), mat('#4b6b3e', { roughness: 0.6 }));
    body.position.set(0.14, 0.06, 0); body.scale.set(1, 1.2, 1); body.castShadow = true;
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.08, 6), mat('#8a8a90', { metalness: 0.4 }));
    cap.position.set(0.14, 0.26, 0);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.015, 4, 8), mat('#e6b52e'));
    ring.position.set(0.18, 0.28, 0.04);
    g.add(body, cap, ring);
    return g;
  }

  if (weaponId === 'bazooka') {
    // Heavy flared blunderbuss / plasma bazooka
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.58, 7), mat('#2d2e38', { roughness: 0.45 }));
    tube.rotation.z = Math.PI / 2; tube.position.x = 0.18; tube.castShadow = true;
    const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.12, 0.22, 7), mat('#d9a93a', { metalness: 0.35, roughness: 0.4 }));
    bell.rotation.z = -Math.PI / 2; bell.position.x = 0.52; bell.castShadow = true;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.135, 0.135, 0.09, 7), mat(laserColor));
    band.rotation.z = Math.PI / 2; band.position.x = 0.24;
    g.add(tube, bell, band);
    return g;
  }

  if (weaponId === 'duck') {
    // Quirky yellow rubber-duck blaster!
    const yellow = mat('#f2c12e', { roughness: 0.5 });
    const dBody = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), yellow);
    dBody.scale.set(1.35, 0.9, 0.95); dBody.position.set(0.16, 0.0, 0); dBody.castShadow = true;
    const dHead = new THREE.Mesh(new THREE.IcosahedronGeometry(0.15, 1), yellow);
    dHead.position.set(0.36, 0.14, 0); dHead.castShadow = true;
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 5), mat('#e8603c'));
    beak.rotation.z = -Math.PI / 2; beak.position.set(0.54, 0.13, 0);
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 5), mat('#22202b'));
      eye.position.set(0.41, 0.19, s * 0.11);
      g.add(eye);
    }
    g.add(dBody, dHead, beak);
    return g;
  }

  if (weaponId === 'tesla') {
    // Sci-fi Tesla coil with twin rings & electric orb
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.56, 6), mat('#4a5262', { metalness: 0.4 }));
    shaft.rotation.z = Math.PI / 2; shaft.position.x = 0.2; shaft.castShadow = true;
    for (const x of [0.18, 0.34]) {
      const coil = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 5, 8), mat('#d9a93a', { metalness: 0.5 }));
      coil.rotation.y = Math.PI / 2; coil.position.x = x;
      g.add(coil);
    }
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), mat(laserColor));
    orb.position.x = 0.54;
    g.add(shaft, orb);
    return g;
  }

  if (weaponId === 'shark') {
    // Low-poly shark launcher with dorsal fin
    const sharkMat = mat('#4e6e8e');
    const belly = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.68, 6), sharkMat);
    belly.rotation.z = -Math.PI / 2; belly.position.x = 0.25; belly.castShadow = true;
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.24, 4), sharkMat);
    fin.position.set(0.2, 0.2, 0); fin.rotation.z = 0.25;
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.2, 4), sharkMat);
    tail.rotation.z = Math.PI / 2; tail.position.x = -0.08;
    const muzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.12, 6), mat(laserColor));
    muzzle.rotation.z = Math.PI / 2; muzzle.position.x = 0.54;
    g.add(belly, fin, tail, muzzle);
    return g;
  }

  if (weaponId === 'royal') {
    // Golden royal scepter with spinning faceted gem
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.66, 6), mat('#d9a93a', { metalness: 0.55, roughness: 0.35 }));
    rod.rotation.z = Math.PI / 2; rod.position.x = 0.22; rod.castShadow = true;
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.06, 0.14, 6), mat('#d9a93a', { metalness: 0.55 }));
    crown.rotation.z = -Math.PI / 2; crown.position.x = 0.5;
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.13, 0), mat(laserColor, { roughness: 0.25 }));
    gem.position.x = 0.62;
    g.add(rod, crown, gem);
    g.userData.spinGem = gem;
    return g;
  }

  if (weaponId === 'vortex') {
    // Dark cosmic gravitational canon with floating vortex rings
    const coreMat = mat('#181424', { roughness: 0.35, metalness: 0.3 });
    const mainBody = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 0.52, 7), coreMat);
    mainBody.rotation.z = Math.PI / 2; mainBody.position.x = 0.22; mainBody.castShadow = true;
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 4, 10), mat('#7a3cd9', { metalness: 0.5 }));
    ring1.rotation.y = Math.PI / 2; ring1.position.x = 0.38;
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.20, 0.022, 4, 10), mat('#d93cb0', { metalness: 0.5 }));
    ring2.rotation.y = Math.PI / 2; ring2.position.x = 0.50;
    const darkOrb = new THREE.Mesh(new THREE.DodecahedronGeometry(0.12, 0), mat('#2b104a', { roughness: 0.2 }));
    darkOrb.position.x = 0.52;
    g.add(mainBody, ring1, ring2, darkOrb);
    g.userData.spinGem = ring2;
    return g;
  }

  if (weaponId === 'zeus') {
    // Divine Triple-Lightning Striker: 3-prong gold fork with crackling conductor nodes
    const goldMat = mat('#d9a93a', { metalness: 0.65, roughness: 0.3 });
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.44, 6), mat('#22202b'));
    handle.rotation.z = Math.PI / 2; handle.position.x = 0.16;
    const cross = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.32, 0.08), goldMat);
    cross.position.x = 0.34;
    // 3 prongs
    for (const offset of [-0.13, 0, 0.13]) {
      const prong = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.28, 5), goldMat);
      prong.rotation.z = -Math.PI / 2; prong.position.set(0.48, offset, 0);
      const tipOrb = new THREE.Mesh(new THREE.OctahedronGeometry(0.045, 0), mat('#42d9ff', { roughness: 0.2 }));
      tipOrb.position.set(0.64, offset, 0);
      g.add(prong, tipOrb);
    }
    g.add(handle, cross);
    return g;
  }

  if (weaponId === 'orbital') {
    // Heavy Photon Satellite Cannon: long precision chassis + multi-lens emitter
    const alloyMat = mat('#353b4d', { metalness: 0.45, roughness: 0.4 });
    const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.16, 0.14), alloyMat);
    barrel.position.x = 0.28; barrel.castShadow = true;
    const railTop = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.62, 6), mat('#d9a93a', { metalness: 0.6 }));
    railTop.rotation.z = Math.PI / 2; railTop.position.set(0.28, 0.11, 0);
    const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.08, 0.14, 8), mat('#202430', { metalness: 0.6 }));
    dish.rotation.z = -Math.PI / 2; dish.position.x = 0.66;
    const corePhoton = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), mat('#ffdc62', { roughness: 0.1 }));
    corePhoton.position.x = 0.70;
    g.add(barrel, railTop, dish, corePhoton);
    return g;
  }

  // Default: 'blaster'
  const gunBody = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.16, 0.14), mat('#3a3a46', { roughness: 0.5 }));
  gunBody.position.x = 0.15; gunBody.castShadow = true;
  const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.1, 6), mat(laserColor));
  tip.rotation.z = Math.PI / 2; tip.position.x = 0.46;
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.04, 0.15), mat(laserColor));
  stripe.position.set(0.12, 0.06, 0);
  g.add(gunBody, tip, stripe);
  return g;
}

/** Creates a stylized low-poly character. Faces +X. */
export function createCharacter(look) {
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);
  const body = mat(look.body);
  const dark = mat(new THREE.Color(look.body).multiplyScalar(0.6));

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.45, 2, 8), body);
  torso.position.y = 0.75; torso.castShadow = true;
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.1, 8), dark);
  belt.position.y = 0.6;

  const headG = new THREE.Group(); headG.position.y = 1.5;
  const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), body);
  head.castShadow = true;
  const face = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), new THREE.MeshBasicMaterial({ map: faceTexture(look.face), transparent: true }));
  face.position.x = 0.4; face.rotation.y = Math.PI / 2;
  headG.add(head, face, buildHat(look.hat, dark.color.getStyle()));

  const feet = [];
  for (const s of [-1, 1]) {
    const f = new THREE.Mesh(new THREE.IcosahedronGeometry(0.17, 0), dark);
    f.scale.set(1.3, 0.7, 1); f.position.set(0.05, 0.12, s * 0.2); f.castShadow = true;
    feet.push(f); model.add(f);
  }

  const laserColor = new THREE.Color(look.laser);
  const gunHolder = new THREE.Group();
  gunHolder.position.set(0.42, 0.85, 0.22);
  const gun = buildWeaponMesh(look.weapon || 'blaster', laserColor, body);
  gunHolder.add(gun);

  const hand2 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), body);
  hand2.position.set(0.35, 0.8, -0.2);

  model.add(torso, belt, headG, gunHolder, hand2);

  // Ground marker (player color), flat & solid
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.62, 0.76, 6),
    new THREE.MeshBasicMaterial({ color: laserColor, transparent: true, opacity: 0.9 })
  );
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03;
  root.add(ring);

  root.userData = {
    model, headG, feet, ring, gunHolder, gun, bodyMat: body, laserColor,
    weaponId: look.weapon || 'blaster', walk: 0, hat: headG.children[2],
  };
  return root;
}

/** Swaps the character's held weapon/grenade in real time */
export function setCharacterWeapon(ch, weaponId) {
  const u = ch?.userData;
  if (!u || u.weaponId === weaponId) return;
  u.weaponId = weaponId;
  u.gunHolder.clear();
  u.gun = buildWeaponMesh(weaponId, u.laserColor, u.bodyMat);
  u.gunHolder.add(u.gun);
}

/** Builds a standalone centered 3D weapon/grenade model for the Armory showcase */
export function createShowcaseWeapon(weaponId, laserHex = '#e89b3c') {
  const root = new THREE.Group();
  const laserColor = new THREE.Color(laserHex);
  const standMat = mat('#3a3a46', { roughness: 0.55 });
  const w = buildWeaponMesh(weaponId, laserColor, standMat);
  // Remove the character's first child (hand sphere) so only the pure weapon/grenade is displayed
  if (w.children.length > 1) {
    w.remove(w.children[0]);
  }
  // Center the weapon horizontally around (0, 0, 0)
  w.position.x = weaponId === 'grenade' ? -0.05 : -0.22;
  if (weaponId === 'grenade') {
    w.scale.setScalar(1.45);
  }
  root.add(w);
  root.userData = { weaponMesh: w, weaponId };
  return root;
}

export function animateCharacter(ch, dt, moving, t) {
  const u = ch.userData;
  if (moving) u.walk += dt * 12; else u.walk *= 0.85;
  const s = Math.sin(u.walk);
  u.feet[0].position.x = 0.05 + s * 0.15;
  u.feet[1].position.x = 0.05 - s * 0.15;
  u.model.position.y = Math.abs(Math.sin(u.walk)) * 0.08 + Math.sin(t * 2) * 0.015;
  u.headG.rotation.z = Math.sin(t * 1.5) * 0.04;
  if (u.hat?.userData.spin) u.hat.rotation.y += dt * 2;
  if (u.gun?.userData.spinGem) u.gun.userData.spinGem.rotation.x += dt * 3;
  u.ring.rotation.z += dt * 0.5;
}

export function setCharacterOpacity(ch, o) {
  ch.traverse((m) => { if (m.material) { m.material.opacity = o; m.material.depthWrite = o > 0.95; } });
  ch.visible = o > 0.01;
}
