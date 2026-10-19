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

/** Builds a stylized low-poly hat or head accessory */
function buildHat(type, accentColor, darkColor) {
  const g = new THREE.Group();
  if (type === 'cap') {
    // Stylized baseball cap with curved visor and top button
    const capMat = mat(accentColor, { roughness: 0.7 });
    const crown = new THREE.Mesh(new THREE.SphereGeometry(0.33, 7, 5, 0, Math.PI * 2, 0, Math.PI * 0.58), capMat);
    crown.scale.set(1.05, 0.85, 1.05); crown.position.y = 0.16;
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.03, 0.28), capMat);
    visor.position.set(0.24, 0.17, 0); visor.rotation.z = -0.12;
    const button = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 5), mat(darkColor));
    button.position.y = 0.38;
    g.add(crown, visor, button);
    g.position.y = 0.22;
  } else if (type === 'crown') {
    // Regal chiseled golden crown with faceted points & ruby studs
    const goldMat = mat('#f0be3d', { roughness: 0.28, metalness: 0.8 });
    const rubyMat = mat('#d9384a', { roughness: 0.2, metalness: 0.3 });
    const baseRing = new THREE.Mesh(new THREE.CylinderGeometry(0.30, 0.28, 0.14, 8, 1, true), goldMat);
    baseRing.position.y = 0.07;
    g.add(baseRing);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const x = Math.cos(a) * 0.29, z = Math.sin(a) * 0.29;
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.18, 4), goldMat);
      spike.position.set(x, 0.20, z);
      g.add(spike);
      if (i % 2 === 0) {
        const ruby = new THREE.Mesh(new THREE.OctahedronGeometry(0.035, 0), rubyMat);
        ruby.position.set(x * 1.05, 0.08, z * 1.05);
        g.add(ruby);
      }
    }
    g.position.y = 0.36;
  } else if (type === 'cone') {
    // Festive party cone with spiral band and pom-pom
    const coneMat = mat('#e84d5d', { roughness: 0.65 });
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.20, 0.52, 7), coneMat);
    cone.rotation.z = -0.15; cone.position.y = 0.26;
    const pom = new THREE.Mesh(new THREE.DodecahedronGeometry(0.075, 0), mat('#fbf7f0', { roughness: 0.9 }));
    pom.position.set(-0.06, 0.52, 0);
    g.add(cone, pom);
    g.position.y = 0.35;
  } else if (type === 'halo') {
    // Floating luminescent golden halo
    const haloMat = mat('#ffd84d', { roughness: 0.25, metalness: 0.6 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.038, 5, 12), haloMat);
    ring.rotation.x = Math.PI / 2;
    g.add(ring);
    g.position.y = 0.62;
    g.userData.spin = ring;
  } else if (type === 'horns') {
    // Stylized curved dragon/demon horns with chiseled facets
    const hornMat = mat('#eee4d4', { roughness: 0.6 });
    for (const s of [-1, 1]) {
      const hornGroup = new THREE.Group();
      const seg1 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.26, 5), hornMat);
      seg1.position.y = 0.13;
      const seg2 = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.22, 5), hornMat);
      seg2.position.set(0.04, 0.28, 0); seg2.rotation.z = -0.35;
      hornGroup.add(seg1, seg2);
      hornGroup.position.set(-0.05, 0.28, s * 0.24);
      hornGroup.rotation.x = s * 0.45;
      hornGroup.rotation.y = -s * 0.2;
      g.add(hornGroup);
    }
    g.position.y = 0.24;
  }
  return g;
}

/** Builds the 3D weapon or grenade mesh held by the character */
export function buildWeaponMesh(weaponId, laserColor, bodyMat) {
  const g = new THREE.Group();
  const hand = new THREE.Mesh(new THREE.DodecahedronGeometry(0.10, 0), bodyMat);
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

/**
 * Creates a stylized, realistic low-poly character with natural human proportions,
 * tailored jacket, utility belt, articulated arms/hands, and sturdy explorer boots.
 * Faces +X direction.
 */
export function createCharacter(look) {
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);

  // Stylized color palette & materials
  const skinMat = mat('#f2cca6', { roughness: 0.75, metalness: 0 });
  const bodyColor = new THREE.Color(look.body);
  const darkColor = bodyColor.clone().multiplyScalar(0.55);
  const darkerTone = bodyColor.clone().multiplyScalar(0.35);

  const jacketMat = mat(bodyColor, { roughness: 0.72 });
  const pantsMat = mat(darkColor, { roughness: 0.82 });
  const leatherMat = mat('#2a2320', { roughness: 0.55, metalness: 0.1 });
  const metalMat = mat('#d9a93a', { roughness: 0.35, metalness: 0.7 });

  // 1. Torso: Tailored jacket with tapered waist and collar lapels
  const torsoG = new THREE.Group();
  torsoG.position.y = 0.88;

  // Chest / Jacket
  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.25, 0.52, 6), jacketMat);
  chest.scale.set(1.15, 1, 0.9); chest.castShadow = true; chest.receiveShadow = true;
  // Collar lapel fold
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.24, 0.10, 6, 1, true), mat(darkColor));
  collar.position.y = 0.28; collar.scale.set(1.1, 1, 0.95);
  // Neck connector
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.13, 0.14, 5), skinMat);
  neck.position.y = 0.32;
  // Utility belt with buckle & side pouch
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.265, 0.265, 0.09, 6), leatherMat);
  belt.position.y = -0.25; belt.scale.set(1.12, 1, 0.92);
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.10), metalMat);
  buckle.position.set(0.29, -0.25, 0);
  const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.12), leatherMat);
  pouch.position.set(0.05, -0.25, -0.26); pouch.rotation.y = -0.15;

  torsoG.add(chest, collar, neck, belt, buckle, pouch);
  model.add(torsoG);

  // 2. Head: Chiseled stylized low-poly head with jawline & expressive face
  const headG = new THREE.Group();
  headG.position.y = 1.48;

  // Stylized faceted cranium & jaw
  const headMesh = new THREE.Mesh(new THREE.DodecahedronGeometry(0.29, 0), skinMat);
  headMesh.scale.set(1.02, 1.15, 0.98); headMesh.castShadow = true;

  // Stylized hair tuft / cap
  const hairMat = mat(darkerTone, { roughness: 0.85 });
  const hair = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.22, 5), hairMat);
  hair.position.set(-0.06, 0.24, 0); hair.rotation.z = 0.35; hair.rotation.y = 0.2;

  // Face texture decal on front (+X)
  const faceDecal = new THREE.Mesh(
    new THREE.PlaneGeometry(0.42, 0.42),
    new THREE.MeshBasicMaterial({ map: faceTexture(look.face), transparent: true })
  );
  faceDecal.position.set(0.28, 0.02, 0);
  faceDecal.rotation.y = Math.PI / 2;

  const hatMesh = buildHat(look.hat, bodyColor.getStyle(), darkColor.getStyle());
  headG.add(headMesh, hair, faceDecal, hatMesh);
  model.add(headG);

  // 3. Legs & Explorer Boots (articulated left/right)
  const legs = [];
  for (const s of [-1, 1]) {
    const legG = new THREE.Group();
    legG.position.set(0, 0.58, s * 0.15);

    // Thigh with pants
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 0.30, 5), pantsMat);
    thigh.position.y = -0.15; thigh.castShadow = true;

    // Shin with combat boot
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.26, 5), pantsMat);
    shin.position.y = -0.38; shin.castShadow = true;

    // Low-poly boot with distinct sole & toe bevel
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.13, 0.15), leatherMat);
    boot.position.set(0.05, -0.52, 0); boot.castShadow = true;
    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.03, 0.16), mat('#171518', { roughness: 0.9 }));
    sole.position.set(0.05, -0.59, 0); sole.receiveShadow = true;

    legG.add(thigh, shin, boot, sole);
    legs.push(legG);
    model.add(legG);
  }

  // 4. Arms & Hands
  // Right Arm (Weapon wielding arm)
  const rightArmG = new THREE.Group();
  rightArmG.position.set(0.06, 1.05, 0.26);

  const rightUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.24, 5), jacketMat);
  rightUpperArm.position.set(0.08, -0.10, 0);
  rightUpperArm.rotation.z = -0.65; rightUpperArm.rotation.y = 0.25;

  const rightForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.24, 5), jacketMat);
  rightForearm.position.set(0.24, -0.16, -0.04);
  rightForearm.rotation.z = -1.25;

  rightArmG.add(rightUpperArm, rightForearm);

  // Weapon holder attached to right hand position
  const laserColor = new THREE.Color(look.laser);
  const gunHolder = new THREE.Group();
  gunHolder.position.set(0.38, 0.88, 0.20);
  const gun = buildWeaponMesh(look.weapon || 'blaster', laserColor, jacketMat);
  gunHolder.add(gun);

  // Left Arm (Tactical support arm)
  const leftArmG = new THREE.Group();
  leftArmG.position.set(0.04, 1.05, -0.26);

  const leftUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.24, 5), jacketMat);
  leftUpperArm.position.set(0.06, -0.10, 0);
  leftUpperArm.rotation.z = -0.55; leftUpperArm.rotation.y = -0.35;

  const leftForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.22, 5), jacketMat);
  leftForearm.position.set(0.20, -0.14, 0.08);
  leftForearm.rotation.z = -1.15; leftForearm.rotation.y = -0.45;

  const leftHand = new THREE.Mesh(new THREE.DodecahedronGeometry(0.09, 0), skinMat);
  leftHand.position.set(0.31, 0.82, -0.06);

  leftArmG.add(leftUpperArm, leftForearm);
  model.add(rightArmG, gunHolder, leftArmG, leftHand);

  // 5. Stylized ground indicator ring (low-poly chiseled hexagon)
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.68, 0.82, 6),
    new THREE.MeshBasicMaterial({ color: laserColor, transparent: true, opacity: 0.88, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.02;
  root.add(ring);

  root.userData = {
    model, torsoG, headG, legs, feet: legs, rightArmG, leftArmG, leftHand,
    ring, gunHolder, gun, bodyMat: jacketMat, laserColor,
    weaponId: look.weapon || 'blaster', walk: 0, hat: hatMesh,
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

/**
 * Natural low-poly human animation: coordinated arm/leg swing, body bobbing,
 * idle breathing, and dynamic weapon tracking.
 */
export function animateCharacter(ch, dt, moving, t) {
  const u = ch.userData;
  if (!u || !u.legs || u.legs.length < 2) return;

  if (moving) {
    u.walk += dt * 11;
  } else {
    u.walk *= 0.82;
  }

  const s = Math.sin(u.walk);
  const c = Math.cos(u.walk);

  // Leg swing in opposition
  u.legs[0].rotation.z = s * 0.55;
  u.legs[1].rotation.z = -s * 0.55;

  // Arm swing coordinated with legs
  if (u.leftArmG) u.leftArmG.rotation.x = -s * 0.35;
  if (u.rightArmG) u.rightArmG.rotation.x = s * 0.20;

  // Vertical body bounce during walk + gentle idle breathing
  const walkBob = Math.abs(s) * 0.07;
  const idleBreathe = Math.sin(t * 2.4) * 0.016;
  u.model.position.y = walkBob + idleBreathe;

  // Subtle torso tilt when walking
  if (u.torsoG) {
    u.torsoG.rotation.z = moving ? 0.06 : 0;
    u.torsoG.rotation.y = s * 0.05;
  }

  // Head idle motion
  if (u.headG) {
    u.headG.rotation.z = Math.sin(t * 1.6) * 0.035;
    u.headG.position.y = 1.48 + idleBreathe * 0.5;
  }

  // Accessory animations
  if (u.hat?.userData?.spin) u.hat.rotation.y += dt * 2.2;
  if (u.gun?.userData?.spinGem) u.gun.userData.spinGem.rotation.x += dt * 3.2;
  if (u.ring) u.ring.rotation.z += dt * 0.5;
}

export function setCharacterOpacity(ch, o) {
  ch.traverse((m) => {
    if (m.material) {
      m.material.opacity = o;
      m.material.depthWrite = o > 0.95;
    }
  });
  ch.visible = o > 0.01;
}
