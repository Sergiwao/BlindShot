// Shared game constants & arena definitions (used by server and client)

export const MOVE_TIME = 5000;      // ms of blind movement
export const REVEAL_TIME = 4000;    // ms of verdict
export const SPEED = 6;             // units / second
export const PLAYER_RADIUS = 0.6;
export const LASER_RANGE = 60;
export const MAX_PLAYERS = 6;

// Economy & Armory
export const COINS_PER_KILL = 5;
export const COINS_PER_WIN = 20;
export const GRENADE_PRICE = 10;
export const GRENADE_RANGE = 8.5;
export const GRENADE_RADIUS = 3.2;

export const WEAPONS = {
  blaster: {
    id: 'blaster',
    name: 'Blaster Classique',
    price: 0,
    desc: 'Précis et équilibré. Le standard de tout tireur.',
  },
  bazooka: {
    id: 'bazooka',
    name: 'Méga-Tromblon',
    price: 15,
    desc: 'Gros canon évasé au son de plasma lourd.',
  },
  duck: {
    id: 'duck',
    name: 'Canard-Laser',
    price: 25,
    desc: 'Un canard en plastique qui tire par le bec avec un coin-coin.',
  },
  tesla: {
    id: 'tesla',
    name: 'Bobine Tesla',
    price: 40,
    desc: 'Propulse un arc électrique crépitant à haute tension.',
  },
  shark: {
    id: 'shark',
    name: 'Requin-Canon',
    price: 55,
    desc: 'Mini-requin féroce à aileron dorsal et tir sonar.',
  },
  royal: {
    id: 'royal',
    name: 'Sceptre Royal',
    price: 75,
    desc: 'Sceptre doré serti d\'un cristal rubis résonnant.',
  },
};

// theme: floor = sol de l'arène, line = bordure, accent = détails,
//        sky = fond, ground = terrain autour, rock = falaises / murs
export const ARENAS = {
  neon: {
    id: 'neon',
    name: 'Le Plateau',
    desc: 'Petite arène ouverte. Nulle part où se cacher.',
    shape: 'square',
    size: 9,            // half size
    obstacles: [],
    theme: { floor: 0xe6cfa3, line: 0xa8734c, accent: 0x6f9a5c, sky: 0xcfe0dc, ground: 0x93b56f, rock: 0x9c8a78 },
  },
  ruins: {
    id: 'ruins',
    name: 'Ruines',
    desc: 'Grande arène avec des murs qui bloquent les lasers.',
    shape: 'square',
    size: 15,
    obstacles: [
      { x: -7, z: -6, w: 4, d: 1.2 },
      { x: 7, z: 6, w: 4, d: 1.2 },
      { x: 6, z: -7, w: 1.2, d: 4 },
      { x: -6, z: 7, w: 1.2, d: 4 },
      { x: 0, z: 0, w: 2.2, d: 2.2 },
      { x: -11, z: 1, w: 1.2, d: 3 },
      { x: 11, z: -1, w: 1.2, d: 3 },
    ],
    theme: { floor: 0xc9b996, line: 0x7d6a55, accent: 0x5f8a4e, sky: 0xd9d2c0, ground: 0x7fa060, rock: 0x8f8a80 },
  },
  vise: {
    id: 'vise',
    name: "L'Étau",
    desc: 'Arène ronde qui rétrécit à chaque élimination.',
    shape: 'circle',
    size: 13,           // starting radius
    shrinkStep: 2.2,
    minSize: 4.5,
    obstacles: [],
    theme: { floor: 0x8fa3a8, line: 0xd0583a, accent: 0xe0a33a, sky: 0xe8cfb0, ground: 0x6f7f74, rock: 0x5e6366 },
  },
  sanctuary: {
    id: 'sanctuary',
    name: 'Le Sanctuaire',
    desc: 'Temple circulaire bordé de colonnes antiques et autel central.',
    shape: 'circle',
    size: 14,
    obstacles: [
      { x: 0, z: 0, w: 2.4, d: 2.4 },
      { x: 6.5, z: 0, w: 1.5, d: 1.5 },
      { x: -6.5, z: 0, w: 1.5, d: 1.5 },
      { x: 0, z: 6.5, w: 1.5, d: 1.5 },
      { x: 0, z: -6.5, w: 1.5, d: 1.5 },
      { x: 4.6, z: 4.6, w: 1.4, d: 1.4 },
      { x: -4.6, z: 4.6, w: 1.4, d: 1.4 },
      { x: 4.6, z: -4.6, w: 1.4, d: 1.4 },
      { x: -4.6, z: -4.6, w: 1.4, d: 1.4 },
    ],
    theme: { floor: 0xefe9dd, line: 0xc49a45, accent: 0x3d7a68, sky: 0xd5e5f0, ground: 0x7ca682, rock: 0xb8b0a2 },
  },
  bastion: {
    id: 'bastion',
    name: 'Le Canyon',
    desc: 'Quatre bastions rocheux forment une croisée fatale au centre.',
    shape: 'square',
    size: 13.5,
    obstacles: [
      { x: -5.2, z: -3.2, w: 4.2, d: 1.4 },
      { x: -3.8, z: -5.6, w: 1.4, d: 3.4 },
      { x: 5.2, z: 3.2, w: 4.2, d: 1.4 },
      { x: 3.8, z: 5.6, w: 1.4, d: 3.4 },
      { x: 5.2, z: -3.2, w: 4.2, d: 1.4 },
      { x: 3.8, z: -5.6, w: 1.4, d: 3.4 },
      { x: -5.2, z: 3.2, w: 4.2, d: 1.4 },
      { x: -3.8, z: 5.6, w: 1.4, d: 3.4 },
    ],
    theme: { floor: 0xdba37b, line: 0x8f3f29, accent: 0x6b8e4e, sky: 0xf2d9c2, ground: 0xc47d56, rock: 0x9e5439 },
  },
};

// Clamp a position inside the arena (and outside obstacles)
export function clampToArena(arena, zone, x, z) {
  if (arena.shape === 'circle') {
    const r = Math.max(0.1, zone - PLAYER_RADIUS);
    const d = Math.hypot(x, z);
    if (d > r) { x = (x / d) * r; z = (z / d) * r; }
  } else {
    const s = zone - PLAYER_RADIUS;
    x = Math.max(-s, Math.min(s, x));
    z = Math.max(-s, Math.min(s, z));
  }
  for (const o of arena.obstacles) {
    const hw = o.w / 2 + PLAYER_RADIUS, hd = o.d / 2 + PLAYER_RADIUS;
    const dx = x - o.x, dz = z - o.z;
    if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
      const px = hw - Math.abs(dx), pz = hd - Math.abs(dz);
      if (px < pz) x = o.x + Math.sign(dx || 1) * hw;
      else z = o.z + Math.sign(dz || 1) * hd;
    }
  }
  return [x, z];
}

// Ray vs axis-aligned box (2D). Returns distance or Infinity.
export function rayBox(ox, oz, dx, dz, o) {
  const minX = o.x - o.w / 2, maxX = o.x + o.w / 2;
  const minZ = o.z - o.d / 2, maxZ = o.z + o.d / 2;
  let tmin = -Infinity, tmax = Infinity;
  if (Math.abs(dx) < 1e-9) { if (ox < minX || ox > maxX) return Infinity; }
  else {
    let t1 = (minX - ox) / dx, t2 = (maxX - ox) / dx;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
  }
  if (Math.abs(dz) < 1e-9) { if (oz < minZ || oz > maxZ) return Infinity; }
  else {
    let t1 = (minZ - oz) / dz, t2 = (maxZ - oz) / dz;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
  }
  if (tmax < Math.max(tmin, 0)) return Infinity;
  return tmin > 0 ? tmin : Infinity;
}

// Ray vs circle. Returns distance or Infinity.
export function rayCircle(ox, oz, dx, dz, cx, cz, r) {
  const fx = ox - cx, fz = oz - cz;
  const b = fx * dx + fz * dz;
  const c = fx * fx + fz * fz - r * r;
  const disc = b * b - c;
  if (disc < 0) return Infinity;
  const t = -b - Math.sqrt(disc);
  return t > 0 ? t : Infinity;
}

/**
 * Compute a laser shot from `p` ({x,z,angle}) against `targets` (array of {id,x,z}).
 * Stops at obstacles and arena walls. Returns { x, z, ex, ez, hit } (hit = target or null).
 */
export function computeShot(arena, zone, p, targets) {
  const dx = Math.cos(p.angle), dz = Math.sin(p.angle);
  const ox = p.x + dx * (PLAYER_RADIUS + 0.05), oz = p.z + dz * (PLAYER_RADIUS + 0.05);
  let best = LASER_RANGE, hit = null;
  for (const o of arena.obstacles) {
    const t = rayBox(ox, oz, dx, dz, o);
    if (t < best) { best = t; hit = null; }
  }
  for (const q of targets) {
    if (q === p) continue;
    const t = rayCircle(ox, oz, dx, dz, q.x, q.z, PLAYER_RADIUS);
    if (t < best) { best = t; hit = q; }
  }
  if (arena.shape === 'square') {
    const s = zone;
    const tx = dx > 0 ? (s - ox) / dx : dx < 0 ? (-s - ox) / dx : Infinity;
    const tz = dz > 0 ? (s - oz) / dz : dz < 0 ? (-s - oz) / dz : Infinity;
    const tw = Math.min(tx, tz);
    if (tw < best) { best = tw; hit = null; }
  } else {
    const b = ox * dx + oz * dz, c = ox * ox + oz * oz - zone * zone;
    const tw = -b + Math.sqrt(Math.max(0, b * b - c));
    if (tw < best) { best = tw; hit = null; }
  }
  return { x: ox, z: oz, ex: ox + dx * best, ez: oz + dz * best, hit };
}

/**
 * Compute a grenade lob from `p` ({x,z,angle}) against `targets`.
 * Lands at up to GRENADE_RANGE (clamped inside arena) and hits ALL targets within GRENADE_RADIUS!
 * Returns { x, z, ex, ez, hits } (hits = array of hit target objects).
 */
export function computeGrenade(arena, zone, p, targets) {
  const dx = Math.cos(p.angle), dz = Math.sin(p.angle);
  const ox = p.x + dx * 0.5, oz = p.z + dz * 0.5;
  const rawX = p.x + dx * GRENADE_RANGE;
  const rawZ = p.z + dz * GRENADE_RANGE;
  const [ex, ez] = clampToArena(arena, zone, rawX, rawZ);
  const hits = [];
  for (const q of targets) {
    if (q === p) continue;
    if (Math.hypot(q.x - ex, q.z - ez) <= GRENADE_RADIUS + PLAYER_RADIUS * 0.5) {
      hits.push(q);
    }
  }
  return { x: ox, z: oz, ex, ez, hits };
}
