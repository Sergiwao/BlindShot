import * as THREE from 'three';
import { io } from 'socket.io-client';
import { World } from './world.js';
import {
  createCharacter, animateCharacter, setCharacterOpacity, setCharacterWeapon, createShowcaseWeapon,
  BODY_COLORS, LASER_COLORS, HATS, FACES,
} from './character.js';
import {
  ARENAS, WEAPONS, SPEED, MOVE_TIME, REVEAL_TIME, MAX_PLAYERS,
  clampToArena, computeShot, computeGrenade,
  COINS_PER_KILL, COINS_PER_WIN, GRENADE_PRICE, GRENADE_RANGE, GRENADE_RADIUS,
} from '../../shared/game.js';
import { LocalGame } from './local.js';
import { LanManager, scanLocalLan } from './lan.js';
import { sound } from './sound.js';

// ---------- Helpers ----------
const $ = (s) => document.querySelector(s);
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem('lp_' + k)) ?? d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem('lp_' + k, JSON.stringify(v)); } catch {} },
};
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2400);
}
function show(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('active', s.id === 'screen-' + id));
  state.screen = id;
  if (id === 'custom') {
    enterMenuScene('custom');
  } else if (id === 'armory') {
    enterMenuScene('armory');
    const idx = ARMORY_ITEMS.findIndex((x) => x.id === state.look.weapon);
    if (idx >= 0) armoryIndex = idx;
    renderArmoryShowcase(true);
  } else if (['name', 'menu', 'create', 'lobby', 'local', 'lan'].includes(id)) {
    enterMenuScene(id === 'lobby' ? 'lobby' : 'menu');
  }
  syncCoinsUI();
  emitPresence();
}
function vibrate(ms) { navigator.vibrate?.(ms); }

// ---------- Armory Catalog (6 3D Weapons + 3D Frag Grenade) ----------
const ARMORY_ITEMS = [
  ...Object.values(WEAPONS).map((w) => ({ ...w, kind: 'weapon' })),
  {
    id: 'grenade',
    kind: 'grenade',
    name: 'Grenade Frag',
    price: GRENADE_PRICE,
    desc: 'Explose en zone large et élimine plusieurs cibles d\'un coup. Consommable (1 par lancer).',
  },
];
let armoryIndex = 0;

// ---------- State ----------
const savedLook = store.get('look', {});
const savedOwned = store.get('weapons', ['blaster']);
const ownedList = Array.isArray(savedOwned) && savedOwned.length
  ? savedOwned.filter((w) => WEAPONS[w])
  : ['blaster'];
if (!ownedList.includes('blaster')) ownedList.unshift('blaster');

const state = {
  screen: null,
  name: store.get('name', ''),
  coins: Number.isFinite(store.get('coins', null)) ? store.get('coins', 30) : 30,
  ownedWeapons: ownedList,
  grenades: Math.max(0, parseInt(store.get('grenades', 1), 10) || 0),
  combatMode: 'weapon', // 'weapon' | 'grenade'
  look: {
    body: BODY_COLORS.includes(savedLook.body) ? savedLook.body : BODY_COLORS[0],
    laser: LASER_COLORS.includes(savedLook.laser) ? savedLook.laser : LASER_COLORS[1],
    hat: HATS[savedLook.hat] ? savedLook.hat : 'cap',
    face: FACES[savedLook.face] ? savedLook.face : 'happy',
    weapon: ownedList.includes(savedLook.weapon) ? savedLook.weapon : ownedList[0],
  },
  room: null,
  me: { x: 0, z: 0, angle: 0, alive: true },
  phase: null,
  arena: null,
  zone: 0,
  phaseEnd: 0,
  phaseDur: 1,
  createArena: 'neon',
  lastTickSec: -1,
};

function saveEconomy() {
  store.set('coins', state.coins);
  store.set('weapons', state.ownedWeapons);
  store.set('grenades', state.grenades);
  store.set('look', state.look);
  syncCoinsUI();
  emitPresence();
}

function syncCoinsUI() {
  const mc = $('#menu-coins');
  if (mc) mc.textContent = `${state.coins} SC`;
  const ac = $('#armory-coins');
  if (ac) ac.textContent = `${state.coins} SC`;
  const gc = $('#armory-gren-count');
  if (gc) gc.textContent = `Stock : x${state.grenades}`;
}

/** Spawns falling golden Shoot Coins in both 2D UI and 3D scene when buying */
function triggerPurchaseCoinRain() {
  world.coinShower(30);
  const box = $('#coin-rain');
  if (!box) return;
  for (let i = 0; i < 22; i++) {
    const c = document.createElement('div');
    c.className = 'falling-coin';
    const left = 6 + Math.random() * 88;
    const delay = (Math.random() * 0.42).toFixed(2) + 's';
    const dur = (1.1 + Math.random() * 0.55).toFixed(2) + 's';
    const drop = (62 + Math.random() * 26).toFixed(1) + 'vh';
    const rot = ((Math.random() > 0.5 ? 1 : -1) * (220 + Math.random() * 260)).toFixed(0) + 'deg';
    c.style.left = `${left}%`;
    c.style.setProperty('--delay', delay);
    c.style.setProperty('--dur', dur);
    c.style.setProperty('--drop', drop);
    c.style.setProperty('--rot', rot);
    box.appendChild(c);
    setTimeout(() => c.remove(), 1900);
  }
}

function awardMatchCoins(kills, won) {
  const k = Math.max(0, kills || 0);
  const killCoins = k * COINS_PER_KILL;
  const winCoins = won ? COINS_PER_WIN : 0;
  const total = killCoins + winCoins;
  state.coins += total;
  saveEconomy();
  const el = $('#over-coins');
  if (el) {
    const parts = [];
    if (k > 0) parts.push(`${k} élim. (+${killCoins} SC)`);
    if (won) parts.push(`Survie Top 1 (+${winCoins} SC)`);
    const detail = parts.length ? parts.join(' · ') : 'Aucune élimination (0 SC)';
    el.innerHTML = `+${total} Shoot Coins<small>${detail} — Solde : ${state.coins} SC</small>`;
  }
}

// ---------- 3D ----------
const world = new World($('#game'));
let myChar = null;
let showcaseMesh = null;
const others = new Map(); // id -> { mesh, opacity, target }
let customTargetYaw = -Math.PI * 0.38;
let showcaseYaw = -Math.PI * 0.22;
let customDragging = false;
let customDragX = 0;

function rebuildMyChar() {
  const prevRot = myChar ? myChar.rotation.y : customTargetYaw;
  if (myChar) world.scene.remove(myChar);
  myChar = createCharacter(state.look);
  if (state.screen === 'hud' && state.combatMode === 'grenade' && state.grenades > 0) {
    setCharacterWeapon(myChar, 'grenade');
  }
  myChar.rotation.y = prevRot;
  world.scene.add(myChar);
}

function enterMenuScene(mode = 'menu') {
  clearOthers();
  world.showMenu(mode);
  if (!myChar) rebuildMyChar();
  setCharacterWeapon(myChar, state.look.weapon);
  if (mode === 'armory' || mode === 'lobby') {
    setCharacterOpacity(myChar, 0);
  } else {
    setCharacterOpacity(myChar, 1);
    myChar.position.set(0, 0, 0);
  }
  if (mode === 'custom') {
    customTargetYaw = -Math.PI * 0.38;
  }
  aimLine.visible = false;
  grenAim.visible = false;
}

function clearOthers() {
  for (const o of others.values()) world.scene.remove(o.mesh);
  others.clear();
}

function getShowcaseTargetScale() {
  const isPortrait = window.innerHeight > window.innerWidth;
  return isPortrait ? 1.55 : 2.45;
}

function previewCustomShot(modeOverride = null) {
  if (state.screen === 'armory') {
    const item = ARMORY_ITEMS[armoryIndex] || ARMORY_ITEMS[0];
    const angle = -(showcaseMesh ? showcaseMesh.rotation.y : showcaseYaw);
    const dx = Math.cos(angle), dz = Math.sin(angle);
    if (item.id === 'grenade') {
      sound.grenade(0);
      world.grenadeLob(0, 0, dx * 2.4, dz * 2.4, new THREE.Color(state.look.laser), 1.8, 0);
    } else {
      sound.laser(0, item.id);
      world.beam(dx * 0.5, dz * 0.5, dx * 5.8, dz * 5.8, new THREE.Color(state.look.laser), 0, item.id);
    }
    if (showcaseMesh) showcaseMesh.scale.setScalar(getShowcaseTargetScale() * 1.25);
    return;
  }
  if (!myChar) return;
  const angle = -myChar.rotation.y;
  const dx = Math.cos(angle), dz = Math.sin(angle);
  const ox = dx * 0.75, oz = dz * 0.75;
  const held = modeOverride || myChar.userData.weaponId || state.look.weapon;
  if (held === 'grenade') {
    sound.grenade(0);
    world.grenadeLob(ox, oz, ox + dx * 3.8, oz + dz * 3.8, new THREE.Color(state.look.laser), 2.0, 0);
  } else {
    sound.laser(0, held);
    world.beam(ox, oz, ox + dx * 6.5, oz + dz * 6.5, new THREE.Color(state.look.laser), 0, held);
  }
  myChar.userData.model.scale.set(1.12, 0.9, 1.12);
}

// Allow dragging on the 3D canvas in custom or armory screen to rotate the character / 3D weapon
$('#game').addEventListener('pointerdown', (e) => {
  if (state.screen !== 'custom' && state.screen !== 'armory') return;
  customDragging = true;
  customDragX = e.clientX;
});
addEventListener('pointermove', (e) => {
  if (!customDragging || (state.screen !== 'custom' && state.screen !== 'armory')) return;
  const dx = e.clientX - customDragX;
  customDragX = e.clientX;
  if (state.screen === 'armory') {
    showcaseYaw += dx * 0.014;
    if (showcaseMesh) showcaseMesh.rotation.y = showcaseYaw;
  } else {
    customTargetYaw += dx * 0.012;
    if (myChar) myChar.rotation.y = customTargetYaw;
  }
});
addEventListener('pointerup', () => { customDragging = false; });

// Aim line (only for local player)
const aimLine = (() => {
  const c = document.createElement('canvas'); c.width = 256; c.height = 8;
  const g = c.getContext('2d');
  for (let x = 0; x < 256; x += 16) {
    g.fillStyle = `rgba(255,255,255,${1 - x / 256})`;
    g.fillRect(x, 0, 10, 8);
  }
  const tex = new THREE.CanvasTexture(c);
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 0.12),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
  );
  m.geometry.translate(0.5, 0, 0);
  m.rotation.x = -Math.PI / 2;
  m.scale.x = 14;
  const holder = new THREE.Group(); holder.add(m); holder.visible = false;
  world.scene.add(holder);
  holder.userData.mat = m.material;
  return holder;
})();

// Grenade target ring (for grenade AoE preview in online HUD)
const grenAim = (() => {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(GRENADE_RADIUS * 0.86, GRENADE_RADIUS, 32),
    new THREE.MeshBasicMaterial({ color: 0xffb340, side: THREE.DoubleSide, transparent: true, opacity: 0.78 })
  );
  ring.rotation.x = -Math.PI / 2;
  const fill = new THREE.Mesh(
    new THREE.CircleGeometry(GRENADE_RADIUS * 0.86, 32),
    new THREE.MeshBasicMaterial({ color: 0xffb340, side: THREE.DoubleSide, transparent: true, opacity: 0.18 })
  );
  fill.rotation.x = -Math.PI / 2;
  g.add(ring, fill);
  g.position.y = 0.06;
  g.visible = false;
  g.userData = { ring, fill };
  world.scene.add(g);
  return g;
})();

// ---------- HUD Weapon / Grenade Switch ----------
function updateHudWeaponUI() {
  const btn = $('#btn-hud-switch');
  if (!btn) return;
  if (state.combatMode === 'grenade' && state.grenades <= 0) {
    state.combatMode = 'weapon';
  }
  const nameEl = $('#hud-weapon-name');
  const hintEl = $('#hud-weapon-hint');
  if (state.combatMode === 'grenade') {
    if (nameEl) nameEl.textContent = `Grenade Frag (x${state.grenades})`;
    if (hintEl) hintEl.textContent = 'Zone large · Switch (Clic / R2)';
    btn.classList.add('grenade-mode');
    if (myChar) setCharacterWeapon(myChar, 'grenade');
  } else {
    const w = WEAPONS[state.look.weapon] || WEAPONS.blaster;
    const gTxt = state.grenades > 0 ? ` · Grenade x${state.grenades}` : '';
    if (nameEl) nameEl.textContent = `${w.name}${gTxt}`;
    if (hintEl) hintEl.textContent = 'Changer (Clic / R2)';
    btn.classList.remove('grenade-mode');
    if (myChar) setCharacterWeapon(myChar, state.look.weapon);
  }
}

function cycleMyWeapon() {
  if (state.screen !== 'hud' || state.phase !== 'move' || !state.me.alive) return;
  const list = [...state.ownedWeapons];
  if (state.grenades > 0) list.push('grenade');
  if (list.length <= 1) {
    toast('Achète des armes ou grenades dans l\'Armurerie');
    return;
  }
  const current = state.combatMode === 'grenade' ? 'grenade' : state.look.weapon;
  const idx = list.indexOf(current);
  const next = list[(idx + 1) % list.length];
  if (next === 'grenade') {
    state.combatMode = 'grenade';
  } else {
    state.combatMode = 'weapon';
    state.look.weapon = next;
    store.set('look', state.look);
  }
  sound.switchWeapon();
  updateHudWeaponUI();
  if (myChar) myChar.userData.model.scale.set(1.12, 0.9, 1.12);
  netEmit('input', {
    x: state.me.x,
    z: state.me.z,
    angle: state.me.angle,
    mode: state.combatMode,
    weapon: state.look.weapon,
  });
}

$('#btn-hud-switch').onclick = (e) => {
  e.stopPropagation();
  cycleMyWeapon();
};

// ---------- Network & Autonomous Offline Engine ----------
const RENDER_SERVER = 'https://blindshot-19b3.onrender.com';
const defaultServer = import.meta.env.VITE_SERVER_URL || (
  location.protocol === 'https:' || (location.hostname && location.hostname !== 'localhost' && !location.port)
    ? location.origin
    : RENDER_SERVER
);
let savedServer = store.get('server', '');
if (savedServer && savedServer.includes('192.168.')) {
  savedServer = '';
  store.set('server', '');
}
let serverUrl = savedServer || defaultServer;
let socket;

let lanManager;

function myId() {
  if (lanManager?.isLanActive) {
    return lanManager.isHost ? 'lan_host' : (lanManager.socket?.id || 'lan_guest');
  }
  return state.offlineMode ? 'local_me' : socket?.id;
}

const BOT_NAMES = ['Zappy', 'Bzzt', 'Pixel', 'Nova', 'Kiwi', 'Bolt', 'Rico', 'Mochi'];
const WEAPON_IDS = Object.keys(WEAPONS);

const offlineEngine = {
  room: null,
  timer: null,
  roomInfo() {
    const r = this.room;
    return {
      code: r.code,
      arena: r.arena.id,
      host: r.host,
      state: r.state,
      players: [...r.players.values()].map((p) => ({
        id: p.id, name: p.name, look: p.look, alive: p.alive, bot: p.bot, kills: p.kills,
      })),
    };
  },
  create({ name, look, arena }, cb) {
    this.leave();
    state.offlineMode = true;
    const a = ARENAS[arena] || ARENAS.neon;
    this.room = {
      code: 'SOLO',
      host: 'local_me',
      state: 'lobby',
      arena: a,
      players: new Map(),
      zone: a.size,
      round: 0,
      phase: null,
    };
    this.room.players.set('local_me', {
      id: 'local_me',
      name: (name || 'Joueur').slice(0, 14),
      look: { ...look },
      bot: false,
      alive: true,
      kills: 0,
      x: 0, z: 0, angle: 0, mode: 'weapon',
    });
    // Pre-add 3 bots so a remote player can start immediately or customize bots
    for (let i = 0; i < 3; i++) this.addBot(true);
    onRoom(this.roomInfo());
    cb?.({ ok: true, code: 'SOLO' });
  },
  addBot(silent = false) {
    const r = this.room;
    if (!r || r.state !== 'lobby' || r.players.size >= MAX_PLAYERS) return;
    const id = 'bot_' + Math.random().toString(36).slice(2, 8);
    const used = new Set([...r.players.values()].map((p) => p.name));
    const name = BOT_NAMES.find((n) => !used.has(n)) || 'Bot';
    const hatKeys = Object.keys(HATS);
    const faceKeys = Object.keys(FACES);
    r.players.set(id, {
      id, name, bot: true, alive: true, kills: 0, x: 0, z: 0, angle: 0, mode: 'weapon',
      look: {
        body: BODY_COLORS[Math.floor(Math.random() * BODY_COLORS.length)],
        laser: LASER_COLORS[Math.floor(Math.random() * LASER_COLORS.length)],
        hat: hatKeys[Math.floor(Math.random() * hatKeys.length)],
        face: faceKeys[Math.floor(Math.random() * faceKeys.length)],
        weapon: WEAPON_IDS[Math.floor(Math.random() * WEAPON_IDS.length)],
      },
    });
    if (!silent) onRoom(this.roomInfo());
  },
  kick(id) {
    const r = this.room;
    if (!r || r.state !== 'lobby') return;
    if (r.players.get(id)?.bot) {
      r.players.delete(id);
      onRoom(this.roomInfo());
    }
  },
  arena(arenaId) {
    const r = this.room;
    if (!r || r.state !== 'lobby' || !ARENAS[arenaId]) return;
    r.arena = ARENAS[arenaId];
    r.zone = r.arena.size;
    onRoom(this.roomInfo());
  },
  start() {
    const r = this.room;
    if (!r || r.state !== 'lobby') return;
    if (r.players.size < 2) return toast('Il faut au moins 2 joueurs (ajoute un bot !)');
    r.state = 'playing';
    r.round = 0;
    r.zone = r.arena.size;
    const me = r.players.get('local_me');
    if (me) me.look = { ...state.look };
    const list = [...r.players.values()];
    const rad = r.arena.shape === 'circle' ? r.zone * 0.7 : r.zone * 0.75;
    const off = Math.random() * Math.PI * 2;
    list.forEach((p, i) => {
      const a = off + (i / list.length) * Math.PI * 2;
      const [x, z] = clampToArena(r.arena, r.zone, Math.cos(a) * rad, Math.sin(a) * rad);
      p.x = x; p.z = z; p.angle = Math.atan2(-z, -x);
      p.alive = true; p.kills = 0; p.mode = 'weapon';
    });
    onStart({ you: { x: me.x, z: me.z, angle: me.angle }, zone: r.zone });
    onRoom(this.roomInfo());
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.movePhase(), 1500);
  },
  movePhase() {
    const r = this.room;
    if (!r || r.state !== 'playing') return;
    r.round++;
    r.phase = 'move';
    const alive = [...r.players.values()].filter((p) => p.alive);
    for (const p of alive) {
      p.mode = 'weapon';
      if (p.bot) {
        const othersList = alive.filter((o) => o !== p);
        const a = Math.random() * Math.PI * 2;
        const dist = Math.random() * SPEED * 4;
        p.target = clampToArena(r.arena, r.zone, p.x + Math.cos(a) * dist, p.z + Math.sin(a) * dist);
        const t = othersList[Math.floor(Math.random() * othersList.length)];
        if (t) p.aimAt = [t.x + (Math.random() - 0.5) * 6, t.z + (Math.random() - 0.5) * 6];
      }
    }
    onPhase({
      phase: 'move',
      round: r.round,
      duration: MOVE_TIME,
      zone: r.zone,
      alive: alive.map((p) => p.id),
    });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.revealPhase(), MOVE_TIME + 150);
  },
  revealPhase() {
    const r = this.room;
    if (!r || r.state !== 'playing') return;
    r.phase = 'reveal';
    const alive = [...r.players.values()].filter((p) => p.alive);
    for (const b of alive) {
      if (b.bot && b.target) {
        [b.x, b.z] = b.target;
        if (b.aimAt) b.angle = Math.atan2(b.aimAt[1] - b.z, b.aimAt[0] - b.x);
      }
    }
    const shots = [];
    const hitIds = new Set();
    for (const p of alive) {
      if (p.mode === 'grenade') {
        const g = computeGrenade(r.arena, r.zone, p, alive);
        const hits = g.hits.map((h) => h.id);
        for (const hid of hits) hitIds.add(hid);
        p.kills += hits.length;
        shots.push({
          id: p.id, type: 'grenade', weapon: 'grenade',
          x: g.x, z: g.z, ex: g.ex, ez: g.ez,
          hits, hit: hits[0] || null,
        });
        p.mode = 'weapon';
      } else {
        const s = computeShot(r.arena, r.zone, p, alive);
        if (s.hit) { hitIds.add(s.hit.id); p.kills++; }
        shots.push({
          id: p.id, type: 'laser', weapon: p.look.weapon || 'blaster',
          x: s.x, z: s.z, ex: s.ex, ez: s.ez,
          hits: s.hit ? [s.hit.id] : [], hit: s.hit ? s.hit.id : null,
        });
      }
    }
    for (const id of hitIds) {
      const victim = r.players.get(id);
      if (victim) victim.alive = false;
    }
    const eliminated = [...hitIds];
    const survivors = [...r.players.values()].filter((p) => p.alive);
    let newZone = r.zone;
    if (r.arena.shape === 'circle' && r.arena.shrinkStep && eliminated.length) {
      newZone = Math.max(r.arena.minSize, r.zone - r.arena.shrinkStep * eliminated.length);
    }
    onReveal({
      round: r.round,
      players: alive.map((p) => ({
        id: p.id, x: p.x, z: p.z, angle: p.angle,
        weapon: p.look.weapon || 'blaster',
      })),
      shots,
      eliminated,
      zone: newZone,
    });
    r.zone = newZone;
    for (const p of survivors) [p.x, p.z] = clampToArena(r.arena, r.zone, p.x, p.z);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (!this.room) return;
      if (survivors.length <= 1) {
        const winner = survivors[0] || null;
        r.state = 'lobby';
        r.phase = null;
        const ranking = [...r.players.values()]
          .sort((a, b) => b.kills - a.kills)
          .map((p) => ({ id: p.id, name: p.name, kills: p.kills }));
        onOver({
          winner: winner ? { id: winner.id, name: winner.name, look: winner.look, alive: true, bot: winner.bot, kills: winner.kills } : null,
          draw: [],
          ranking,
        });
        for (const p of r.players.values()) p.alive = true;
        onRoom(this.roomInfo());
        return;
      }
      const me = r.players.get('local_me');
      if (me && me.alive) Object.assign(state.me, { x: me.x, z: me.z, angle: me.angle });
      this.movePhase();
    }, REVEAL_TIME);
  },
  input({ x, z, angle, mode, weapon }) {
    const r = this.room;
    if (!r || r.phase !== 'move') return;
    const p = r.players.get('local_me');
    if (!p || !p.alive) return;
    [p.x, p.z] = clampToArena(r.arena, r.zone, x, z);
    p.angle = angle;
    if (mode === 'grenade' || mode === 'weapon') p.mode = mode;
    if (WEAPON_IDS.includes(weapon)) p.look.weapon = weapon;
  },
  leave() {
    clearTimeout(this.timer);
    this.room = null;
    state.offlineMode = false;
  },
};

function netEmit(ev, payload, cb) {
  if (lanManager?.isLanActive) {
    if (ev === 'input') {
      lanManager.sendInput(payload);
    } else if (ev === 'start') {
      lanManager.startGame(state.look);
    } else if (ev === 'addBot' || ev === 'bot') {
      lanManager.addBot();
    } else if (ev === 'kick') {
      lanManager.kick(payload?.id || payload);
    } else if (ev === 'arena') {
      lanManager.setArena(payload);
    } else if (ev === 'leave') {
      lanManager.leave();
    }
    return;
  }
  if (ev === 'create') {
    if (socket?.connected) {
      state.offlineMode = false;
      socket.emit('create', payload, cb);
    } else {
      offlineEngine.create(payload, cb);
    }
    return;
  }
  if (state.offlineMode) {
    if (typeof offlineEngine[ev] === 'function') offlineEngine[ev](payload);
    return;
  }
  socket?.emit(ev, payload, cb);
}

lanManager = new LanManager({
  toast,
  onRoom: (r) => onRoom(r),
  onStart: (p) => onStart(p),
  onPhase: (p) => onPhase(p),
  onReveal: (p) => onReveal(p),
  onSync: (p) => Object.assign(state.me, p),
  onOver: (p) => onOver(p),
  onHostLost: () => {
    const dlg = $('#dlg-lan-host-lost');
    if (dlg) {
      try { dlg.showModal(); } catch { dlg.setAttribute('open', ''); }
    }
  },
});

function emitPresence() {
  if (!socket?.connected) return;
  socket.emit('presence', {
    name: state.name || 'Anonyme',
    weapon: state.look.weapon,
    screen: state.screen || 'menu',
  });
}

const clientSessionId = store.get('client_session_id') || ('sess_' + Math.random().toString(36).slice(2, 10));
store.set('client_session_id', clientSessionId);

let reconnectGraceTimer = null;

function connect() {
  socket?.disconnect();
  socket = io(serverUrl, {
    transports: ['websocket', 'polling'],
    auth: { sessionId: clientSessionId },
  });
  socket.on('connect', () => {
    $('#conn').classList.add('ok');
    $('#conn').textContent = 'Connecté au serveur (' + serverUrl + ')';
    if (reconnectGraceTimer) {
      clearTimeout(reconnectGraceTimer);
      reconnectGraceTimer = null;
    }
    emitPresence();
    const lastRoomCode = state.room?.code || store.get('current_room_code');
    if (lastRoomCode && ['lobby', 'hud'].includes(state.screen)) {
      socket.emit('resume', {
        sessionId: clientSessionId,
        roomCode: lastRoomCode,
        name: state.name,
        look: state.look,
      }, (res) => {
        if (res?.ok && res.room) {
          state.room = res.room;
          store.set('current_room_code', res.room.code);
          toast('Session rétablie');
          onRoom(res.room);
        }
      });
    }
  });
  socket.on('disconnect', () => {
    $('#conn').classList.remove('ok');
    $('#conn').textContent = 'Connexion en pause… reconnexion en cours';
    if (state.room && !state.offlineMode) {
      if (!reconnectGraceTimer) {
        reconnectGraceTimer = setTimeout(() => {
          if (!socket?.connected) {
            state.room = null;
            store.set('current_room_code', null);
            show('menu');
            toast('Connexion perdue');
          }
        }, 55000);
      }
    }
  });
  socket.on('connect_error', () => {
    $('#conn').classList.remove('ok');
    $('#conn').textContent = 'Mode Autonome prêt (Solo & Bots) · Serveur : ' + serverUrl;
  });
  socket.on('toast', toast);
  socket.on('room', onRoom);
  socket.on('start', onStart);
  socket.on('phase', onPhase);
  socket.on('reveal', onReveal);
  socket.on('sync', (p) => Object.assign(state.me, p));
  socket.on('over', onOver);
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    if (socket && !socket.connected) {
      socket.connect();
    }
  }
});

// ---------- Screens: name ----------
$('#btn-name-ok').onclick = () => {
  const n = $('#input-name').value.trim();
  if (!n) return toast('Choisis un pseudo');
  sound.ui('primary');
  state.name = n.slice(0, 14); store.set('name', state.name);
  $('#menu-name').textContent = state.name;
  emitPresence();
  show('custom');
};
$('#input-name').addEventListener('keydown', (e) => e.key === 'Enter' && $('#btn-name-ok').click());

// ---------- Menu ----------
$('#btn-custom').onclick = () => { sound.ui(); show('custom'); };
$('#btn-armory').onclick = () => { sound.ui('primary'); show('armory'); };
$('#btn-menu-coins').onclick = () => { sound.ui(); show('armory'); };
$('#btn-create').onclick = () => { sound.ui('primary'); renderArenas(); show('create'); };
$('#btn-join').onclick = () => {
  const code = $('#input-code').value.trim().toUpperCase();
  if (code.length !== 4) return toast('Le code fait 4 lettres');
  if (!socket?.connected) return toast('Pour rejoindre un ami en ligne, vérifie l\'adresse du serveur');
  sound.ui('primary');
  state.offlineMode = false;
  socket.emit('join', { code, name: state.name, look: state.look }, (r) => {
    if (!r.ok) toast(r.error);
  });
};
$('#input-code').addEventListener('keydown', (e) => e.key === 'Enter' && $('#btn-join').click());

// ---------- LAN Multiplayer Handlers ----------
$('#btn-menu-lan').onclick = () => {
  sound.ui('primary');
  show('lan');
};

$('#btn-lan-back').onclick = () => {
  sound.ui('back');
  show('menu');
};

$('#btn-lan-host').onclick = () => {
  sound.ui('primary');
  state.offlineMode = false;
  lanManager.createHostRoom({
    name: state.name || 'Hôte',
    look: state.look,
    arena: state.createArena || 'neon',
  });
  show('lobby');
  toast('Salon local créé ! Tes amis peuvent te rejoindre.');
};

$('#btn-lan-pre-android').onclick = () => {
  sound.ui();
  $('#input-lan-ip').value = '192.168.43.1:2567';
};

$('#btn-lan-pre-iphone').onclick = () => {
  sound.ui();
  $('#input-lan-ip').value = '172.20.10.1:2567';
};

$('#btn-lan-pre-pc').onclick = () => {
  sound.ui();
  $('#input-lan-ip').value = 'localhost:2567';
};

$('#btn-lan-join').onclick = () => {
  const ip = $('#input-lan-ip').value.trim();
  if (!ip) return toast('Saisis l\'adresse IP de l\'hôte');
  sound.ui('primary');
  state.offlineMode = false;
  lanManager.joinByIp(ip, { name: state.name, look: state.look }, (res) => {
    if (res?.ok) {
      show('lobby');
      toast('Connecté au salon local !');
    }
  });
};
$('#input-lan-ip').addEventListener('keydown', (e) => e.key === 'Enter' && $('#btn-lan-join').click());

$('#btn-lan-scan').onclick = async () => {
  sound.ui();
  const box = $('#lan-scan-results');
  box.style.display = 'block';
  box.innerHTML = '<div style="font-size:12px;color:var(--muted);text-align:center;">Recherche d\'hôtes sur le réseau local…</div>';
  const found = await scanLocalLan();
  if (!found.length) {
    box.innerHTML = '<div style="font-size:12px;color:var(--muted);text-align:center;">Aucun hôte automatique détecté. Utilise les raccourcis Hotspot (192.168.43.1).</div>';
  } else {
    box.innerHTML = found.map((h) => `
      <div class="lan-host-pill" data-ip="${h.ip}">
        <span>📡 Hôte détecté (${h.ip})</span>
        <b>Rejoindre &rarr;</b>
      </div>
    `).join('');
    box.querySelectorAll('.lan-host-pill').forEach((pill) => {
      pill.onclick = () => {
        const ip = pill.dataset.ip;
        $('#input-lan-ip').value = ip;
        $('#btn-lan-join').click();
      };
    });
  }
};

$('#btn-lan-host-lost-ok').onclick = () => {
  sound.ui('back');
  const dlg = $('#dlg-lan-host-lost');
  try { if (dlg.open) dlg.close(); } catch {}
  dlg.removeAttribute('open');
  lanManager.leave();
  state.room = null;
  store.set('current_room_code', null);
  show('menu');
};
function closeSettingsDialog() {
  const dlg = $('#dlg-settings');
  if (!dlg) return;
  try { if (dlg.open) dlg.close(); } catch {}
  dlg.removeAttribute('open');
}

function normalizeServerUrl(raw) {
  let u = String(raw || '').trim().replace(/\/+$/, '');
  if (!u) return defaultServer;
  if (!/^https?:\/\//i.test(u)) {
    const isIpOrLocal = /^(localhost|\d+\.\d+\.\d+\.\d+)/i.test(u);
    u = (isIpOrLocal ? 'http://' : 'https://') + u;
  }
  return u;
}

$('#btn-settings').onclick = () => {
  sound.ui();
  $('#input-server').value = serverUrl;
  const dlg = $('#dlg-settings');
  try { dlg.showModal(); } catch { dlg.setAttribute('open', ''); }
};
$('#btn-settings-cancel').onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  sound.ui('back');
  closeSettingsDialog();
};
$('#btn-settings-ok').onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  sound.ui('primary');
  serverUrl = normalizeServerUrl($('#input-server').value);
  store.set('server', serverUrl === defaultServer ? '' : serverUrl);
  closeSettingsDialog();
  connect();
  toast('Serveur enregistré');
};
$('#input-server').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') $('#btn-settings-ok').click();
  if (e.key === 'Escape') $('#btn-settings-cancel').click();
});
$('#dlg-settings').addEventListener('click', (e) => {
  if (e.target === $('#dlg-settings')) {
    sound.ui('back');
    closeSettingsDialog();
  }
});

// ---------- Customize ----------
document.querySelectorAll('#custom-tabs .ctab').forEach((btn) => {
  btn.onclick = () => {
    sound.ui();
    const tab = btn.dataset.tab;
    document.querySelectorAll('#custom-tabs .ctab').forEach((b) => b.classList.toggle('active', b === btn));
    document.querySelectorAll('.custom-pane').forEach((p) => p.classList.toggle('active', p.dataset.pane === tab));
    if (tab === 'face' || tab === 'hat') customTargetYaw = -Math.PI * 0.48;
    else if (tab === 'laser') customTargetYaw = -Math.PI * 0.25;
    else customTargetYaw = -Math.PI * 0.38;
  };
});
$('#btn-custom-shot').onclick = () => previewCustomShot('weapon');

function renderCustom() {
  const sw = (el, list, key) => {
    el.innerHTML = '';
    for (const c of list) {
      const b = document.createElement('button');
      b.className = 'swatch' + (state.look[key] === c ? ' sel' : '');
      b.style.background = c; b.style.color = c; b.ariaLabel = c;
      b.onclick = () => setLook(key, c);
      el.appendChild(b);
    }
  };
  const pl = (el, map, key) => {
    el.innerHTML = '';
    for (const [k, label] of Object.entries(map)) {
      const b = document.createElement('button');
      b.className = 'pill' + (state.look[key] === k ? ' sel' : '');
      b.textContent = label; b.onclick = () => setLook(key, k);
      el.appendChild(b);
    }
  };
  sw($('#sw-body'), BODY_COLORS, 'body');
  sw($('#sw-laser'), LASER_COLORS, 'laser');
  pl($('#pl-hat'), HATS, 'hat');
  pl($('#pl-face'), FACES, 'face');
  $('#input-rename').value = state.name;
}
function setLook(k, v) {
  state.look[k] = v; store.set('look', state.look);
  rebuildMyChar(); renderCustom(); vibrate(10);
  myChar.userData.model.scale.setScalar(1.15);
  if (k === 'laser') {
    previewCustomShot();
  } else {
    sound.ui();
  }
}
$('#input-rename').addEventListener('change', (e) => {
  const n = e.target.value.trim().slice(0, 14);
  if (n) {
    state.name = n; store.set('name', n); $('#menu-name').textContent = n;
    sound.ui('primary'); emitPresence();
  }
});
$('#btn-custom-back').onclick = () => { sound.ui('back'); show('menu'); };

// ---------- Armory 3D Showcase Carousel (Center 3D Weapon + Next/Prev + Falling Coins) ----------
function renderArmoryShowcase(rebuild3D = false) {
  syncCoinsUI();
  const item = ARMORY_ITEMS[armoryIndex] || ARMORY_ITEMS[0];
  $('#armory-counter').textContent = `${armoryIndex + 1} / ${ARMORY_ITEMS.length}`;

  if (rebuild3D) {
    showcaseMesh = createShowcaseWeapon(item.id, state.look.laser);
    showcaseYaw = -Math.PI * 0.22;
    showcaseMesh.rotation.y = showcaseYaw;
    world.setShowcaseMesh(showcaseMesh);
    const s = getShowcaseTargetScale();
    showcaseMesh.scale.setScalar(s * 1.12);
  }

  // Horizontal quick-strip at the bottom
  const strip = $('#armory-strip');
  if (strip) {
    strip.innerHTML = '';
    ARMORY_ITEMS.forEach((it, i) => {
      const b = document.createElement('button');
      const isOwned = it.kind === 'grenade' ? state.grenades > 0 : state.ownedWeapons.includes(it.id);
      b.className = 'strip-item' + (i === armoryIndex ? ' active' : '') + (isOwned ? ' owned' : '');
      b.textContent = it.name;
      b.onclick = () => {
        if (armoryIndex === i) return;
        armoryIndex = i;
        sound.switchWeapon();
        renderArmoryShowcase(true);
      };
      strip.appendChild(b);
    });
  }

  const nameEl = $('#armory-item-name');
  const badgeEl = $('#armory-item-badge');
  const descEl = $('#armory-item-desc');
  const actBtn = $('#btn-armory-action');

  nameEl.textContent = item.name;
  descEl.textContent = item.desc;

  if (item.kind === 'grenade') {
    badgeEl.className = 'tag hot';
    badgeEl.textContent = `Stock : x${state.grenades}`;
    actBtn.className = 'btn primary big';
    actBtn.textContent = `Acheter 1 Grenade · ${GRENADE_PRICE} SC`;
    actBtn.onclick = () => buyGrenade();
  } else {
    const owned = state.ownedWeapons.includes(item.id);
    const equipped = state.look.weapon === item.id;
    if (equipped) {
      badgeEl.className = 'tag eq';
      badgeEl.textContent = 'Équipé';
      actBtn.className = 'btn dark big';
      actBtn.textContent = 'Équipée · Tester le tir';
      actBtn.onclick = () => previewCustomShot(item.id);
    } else if (owned) {
      badgeEl.className = 'tag';
      badgeEl.textContent = 'Possédé';
      actBtn.className = 'btn primary big';
      actBtn.textContent = 'Équiper cette arme';
      actBtn.onclick = () => {
        state.look.weapon = item.id;
        state.combatMode = 'weapon';
        saveEconomy();
        rebuildMyChar();
        sound.switchWeapon();
        previewCustomShot(item.id);
        renderArmoryShowcase(false);
        toast(`${item.name} équipée`);
      };
    } else {
      badgeEl.className = 'tag price';
      badgeEl.textContent = `${item.price} SC`;
      actBtn.className = 'btn primary big';
      actBtn.textContent = `Acheter · ${item.price} SC`;
      actBtn.onclick = () => {
        if (state.coins < item.price) {
          sound.ui('back');
          return toast(`Il te manque ${item.price - state.coins} Shoot Coins`);
        }
        state.coins -= item.price;
        if (!state.ownedWeapons.includes(item.id)) state.ownedWeapons.push(item.id);
        state.look.weapon = item.id;
        state.combatMode = 'weapon';
        saveEconomy();
        rebuildMyChar();
        sound.buy();
        triggerPurchaseCoinRain();
        previewCustomShot(item.id);
        toast(`${item.name} débloquée et équipée`);
        renderArmoryShowcase(false);
      };
    }
  }
}

function stepArmory(dir) {
  armoryIndex = (armoryIndex + dir + ARMORY_ITEMS.length) % ARMORY_ITEMS.length;
  sound.switchWeapon();
  renderArmoryShowcase(true);
}

function buyGrenade() {
  if (state.coins < GRENADE_PRICE) {
    sound.ui('back');
    return toast(`Il te manque ${GRENADE_PRICE - state.coins} Shoot Coins`);
  }
  state.coins -= GRENADE_PRICE;
  state.grenades += 1;
  saveEconomy();
  sound.buy();
  triggerPurchaseCoinRain();
  if (ARMORY_ITEMS[armoryIndex]?.kind === 'grenade' && showcaseMesh) {
    showcaseMesh.scale.setScalar(getShowcaseTargetScale() * 1.25);
  }
  renderArmoryShowcase(false);
  toast(`Grenade achetée (Stock : x${state.grenades})`);
}

$('#btn-armory-prev').onclick = () => stepArmory(-1);
$('#btn-armory-next').onclick = () => stepArmory(1);
$('#btn-buy-grenade').onclick = () => buyGrenade();
$('#btn-armory-shot').onclick = () => previewCustomShot();
$('#btn-armory-back').onclick = () => { sound.ui('back'); show('menu'); };

// ---------- Create ----------
function arenaThumb(a) {
  const c = '#' + a.theme.line.toString(16).padStart(6, '0');
  const f = '#' + a.theme.floor.toString(16).padStart(6, '0');
  const g = '#' + a.theme.ground.toString(16).padStart(6, '0');
  const shape = a.shape === 'circle' ? 'border-radius:50%;' : 'border-radius:6px;';
  const obs = a.obstacles.map((o) => `<i style="position:absolute;left:${50 + (o.x / a.size) * 40 - (o.w / a.size) * 20}%;top:${50 + (o.z / a.size) * 40 - (o.d / a.size) * 40}%;width:${(o.w / a.size) * 40}%;height:${(o.d / a.size) * 40}%;background:#8f8a80"></i>`).join('');
  return `<div class="arena-thumb" style="background:${g}"><div style="position:absolute;inset:${a.size < 10 ? 16 : 6}px;${shape}background:${f};border:2px solid ${c}"></div>${obs}</div>`;
}
function renderArenas() {
  const list = $('#arena-list'); list.innerHTML = '';
  for (const a of Object.values(ARENAS)) {
    const d = document.createElement('div');
    d.className = 'arena-card panel' + (state.createArena === a.id ? ' sel' : '');
    d.id = 'arena-' + a.id;
    const tag = a.shrinkStep
      ? '<span class="tag hot">Rétrécit</span>'
      : a.obstacles.length > 6
        ? '<span class="tag">Tactique</span>'
        : a.size > 12
          ? '<span class="tag">Grande</span>'
          : '<span class="tag">Petite</span>';
    d.innerHTML = `${arenaThumb(a)}<div><h3>${a.name}${tag}</h3><p>${a.desc}</p></div>`;
    d.onclick = () => { sound.ui(); state.createArena = a.id; renderArenas(); };
    list.appendChild(d);
  }
}
$('#btn-create-back').onclick = () => { sound.ui('back'); show('menu'); };
$('#btn-create-ok').onclick = () => {
  sound.ui('primary');
  netEmit('create', { name: state.name, look: state.look, arena: state.createArena }, (r) => {
    if (!r?.ok) toast('Erreur de création');
  });
};

// ---------- Lobby ----------
function onRoom(room) {
  state.room = room;
  const isHost = room.host === myId();
  $('#lobby-code').textContent = room.isLan ? `${room.code} · Local` : room.code;
  const a = ARENAS[room.arena];
  $('#lobby-arena').innerHTML = isHost
    ? `<span>Arène</span><select id="sel-arena">${Object.values(ARENAS).map((x) => `<option value="${x.id}" ${x.id === a.id ? 'selected' : ''}>${x.name}</option>`).join('')}</select>`
    : `<span>Arène</span><b>${a.name}</b>`;
  if (isHost) $('#sel-arena').onchange = (e) => { sound.ui(); netEmit('arena', e.target.value); };
  const ul = $('#lobby-players'); ul.innerHTML = '';
  for (const p of room.players) {
    const li = document.createElement('li');
    const wName = WEAPONS[p.look?.weapon]?.name || 'Blaster';
    li.innerHTML = `<span class="dot" style="background:${p.look.body};border-color:${p.look.laser}"></span><span class="nm">${escapeHtml(p.name)}</span><span class="tag">${wName}</span>${p.bot ? '<span class="tag">Bot</span>' : ''}${p.id === room.host ? '<span class="tag">Hôte</span>' : ''}`;
    if (isHost && (p.bot || (lanManager?.isLanActive && p.id !== myId()))) {
      const x = document.createElement('button'); x.className = 'x'; x.innerHTML = '&times;';
      x.onclick = () => { sound.ui('back'); netEmit('kick', p.id); };
      li.appendChild(x);
    }
    ul.appendChild(li);
  }
  for (let i = room.players.length; i < 6; i++) {
    const li = document.createElement('li'); li.className = 'empty'; li.textContent = 'Libre'; ul.appendChild(li);
  }
  $('#btn-start').style.display = isHost ? '' : 'none';
  $('#btn-bot').style.display = isHost ? '' : 'none';
  $('#btn-bot').disabled = room.players.length >= 6;
  $('#lobby-wait').style.display = isHost ? 'none' : '';
  store.set('current_room_code', room.code);
  if (room.state === 'lobby' && ['menu', 'create', 'custom', 'armory', 'name', 'lan'].includes(state.screen)) show('lobby');
}
function escapeHtml(s) { return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
$('#btn-bot').onclick = () => { sound.ui(); netEmit('addBot'); };
$('#btn-start').onclick = () => { sound.ui('primary'); netEmit('start'); };
$('#btn-lobby-leave').onclick = () => {
  sound.ui('back');
  netEmit('leave');
  if (lanManager?.isLanActive) lanManager.leave();
  state.room = null;
  store.set('current_room_code', null);
  sound.startBgm();
  show('menu');
};
$('#btn-copy').onclick = () => { sound.ui(); navigator.clipboard?.writeText(state.room?.code || ''); toast('Code copié'); };
$('#btn-over-lobby').onclick = () => {
  sound.ui('primary');
  sound.startBgm();
  if (local.active) local.openLobby();
  else if (state.room) show('lobby');
  else show('menu');
};

// ---------- Game ----------
function banner(html, ms = 1200) {
  const b = $('#banner'); b.innerHTML = html; b.classList.add('show');
  clearTimeout(b._t); if (ms) b._t = setTimeout(() => b.classList.remove('show'), ms);
}
function feed(html) {
  const d = document.createElement('div'); d.innerHTML = html; $('#feed').prepend(d);
  setTimeout(() => d.remove(), 4000);
}
function playerById(id) { return state.room?.players.find((p) => p.id === id); }

function onStart({ you, zone }) {
  sound.stopBgm();
  state.arena = ARENAS[state.room.arena];
  state.zone = zone;
  state.combatMode = 'weapon';
  Object.assign(state.me, you, { alive: true });
  clearOthers();
  world.buildArena(state.arena, zone);
  if (!myChar) rebuildMyChar();
  setCharacterWeapon(myChar, state.look.weapon);
  setCharacterOpacity(myChar, 1);
  myChar.position.set(you.x, 0, you.z);
  $('#feed').innerHTML = '';
  $('#screen-hud').classList.add('locked');
  updateHudWeaponUI();
  show('hud');
  sound.introWhoosh();
  banner('Prêt ?<small>Tu ne verras que toi…</small>', 1400);
}

function onPhase(p) {
  state.phase = 'move';
  state.phaseDur = p.duration;
  state.phaseEnd = performance.now() + p.duration;
  state.lastTickSec = Math.ceil(p.duration / 1000);
  state.zone = p.zone;
  if (state.combatMode === 'grenade' && state.grenades <= 0) {
    state.combatMode = 'weapon';
  }
  updateHudWeaponUI();
  $('#hud-round').textContent = 'Manche ' + p.round;
  $('#hud-alive').textContent = p.alive.length + ' en vie';
  for (const o of others.values()) o.target = 0; // others become invisible
  sound.roundStart();
  if (state.me.alive) {
    $('#screen-hud').classList.remove('locked');
    banner('Bouge<small>Vise là où ils iront…</small>', 1300);
    aimLine.visible = true;
    grenAim.visible = state.combatMode === 'grenade';
    netEmit('input', {
      x: state.me.x,
      z: state.me.z,
      angle: state.me.angle,
      mode: state.combatMode,
      weapon: state.look.weapon,
    });
  } else {
    banner('Spectateur', 1300);
    aimLine.visible = false;
    grenAim.visible = false;
  }
  vibrate(30);
}

function onReveal(r) {
  state.phase = 'reveal';
  $('#screen-hud').classList.add('locked');
  aimLine.visible = false;
  grenAim.visible = false;
  banner('Verdict', 1100);
  vibrate([20, 40, 20]);

  const selfId = myId();
  for (const p of r.players) {
    if (p.id === selfId) {
      state.me.x = p.x; state.me.z = p.z; state.me.angle = p.angle;
      continue;
    }
    let o = others.get(p.id);
    if (!o) {
      const info = playerById(p.id);
      const mesh = createCharacter(info?.look || { body: '#888888', laser: '#ffffff', hat: 'none', face: 'happy', weapon: 'blaster' });
      setCharacterOpacity(mesh, 0);
      world.scene.add(mesh);
      o = { mesh, opacity: 0, target: 1 };
      others.set(p.id, o);
    }
    o.target = 1; o.opacity = 0;
    o.mesh.position.set(p.x, 0, p.z);
    o.mesh.rotation.y = -p.angle;
    o.mesh.userData.model.position.y = 2; // drop-in
  }

  // Check if local player used a grenade this round -> consume 1 and auto-return to weapon
  const myShot = r.shots.find((s) => s.id === selfId);
  if (myShot && myShot.type === 'grenade') {
    state.grenades = Math.max(0, state.grenades - 1);
    state.combatMode = 'weapon';
    saveEconomy();
    updateHudWeaponUI();
  }

  setTimeout(() => {
    r.shots.forEach((s, idx) => {
      const info = playerById(s.id);
      const delay = idx * 0.035 + Math.random() * 0.04;
      const col = new THREE.Color(info?.look.laser || '#fff');
      if (s.type === 'grenade') {
        sound.grenade(delay);
        world.grenadeLob(s.x, s.z, s.ex, s.ez, col, s.radius || GRENADE_RADIUS, delay);
      } else {
        sound.laser(delay, s.weapon || info?.look?.weapon || 'blaster');
        world.beam(s.x, s.z, s.ex, s.ez, col, delay, s.weapon || info?.look?.weapon || 'blaster');
      }
    });
  }, 700);

  setTimeout(() => {
    r.eliminated.forEach((id, idx) => {
      const info = playerById(id);
      const killer = r.shots.find((s) => (Array.isArray(s.hits) ? s.hits.includes(id) : s.hit === id));
      const kInfo = killer && playerById(killer.id);
      const viaGren = killer?.type === 'grenade' ? ' (Grenade)' : '';
      sound.hitAndScream(idx * 0.09);
      feed(`<b style="color:${kInfo?.look.laser}">${escapeHtml(kInfo?.name || '?')}</b> élimine ${escapeHtml(info?.name || '?')}${viaGren}`);
      if (id === selfId) {
        state.me.alive = false;
        world.burst(state.me.x, state.me.z, new THREE.Color(state.look.body));
        setCharacterOpacity(myChar, 0);
        banner('Pouf<small>Tu as été éliminé</small>', 2000);
        vibrate(300);
      } else {
        const o = others.get(id);
        if (o) {
          world.burst(o.mesh.position.x, o.mesh.position.z, new THREE.Color(info?.look.body || '#fff'));
          world.scene.remove(o.mesh); others.delete(id);
        }
      }
    });
    if (!r.eliminated.length) banner('Raté<small>Personne n\'est touché</small>', 1300);
  }, 950);

  setTimeout(() => {
    if (r.zone !== state.zone) { banner("L'arène rétrécit", 1300); }
    state.zone = r.zone;
    world.setZone(r.zone);
  }, 2000);
}

function onOver({ winner, ranking }) {
  setTimeout(() => {
    const selfId = myId();
    const me = winner?.id === selfId;
    const myRank = ranking.find((p) => p.id === selfId);
    const myKills = myRank?.kills || 0;
    awardMatchCoins(myKills, me);
    if (winner) sound.victory();
    sound.startBgm();
    $('#over-title').textContent = winner ? (me ? 'Victoire' : `${winner.name} gagne`) : 'Égalité';
    $('#over-kicker').textContent = 'Fin de partie';
    $('#btn-over-lobby').textContent = 'Retour au salon';
    $('#over-rank').innerHTML = ranking.map((p) => `<li><b>${escapeHtml(p.name)}</b> — ${p.kills} élim.</li>`).join('');
    show('over');
    if (me) vibrate([50, 50, 100]);
  }, 400);
}

// ---------- Controls (Touch + Keyboard/Mouse + PC Gamepad in Online Mode) ----------
const input = { move: new THREE.Vector2(), aim: new THREE.Vector2(), keys: new Set(), mouseAim: null };
let padR2Prev = false;
let lastWallRumbleAt = 0;

function getPrimaryGamepad() {
  const list = navigator.getGamepads ? navigator.getGamepads() : [];
  for (const g of list) {
    if (g && g.connected) return g;
  }
  return null;
}

function pulseOnlinePad(pad, duration = 120, strong = 0.8, weak = 0.4) {
  if (!pad) return;
  try {
    const act = pad.vibrationActuator;
    if (act?.playEffect) {
      act.playEffect(act.type || 'dual-rumble', {
        startDelay: 0,
        duration,
        strongMagnitude: strong,
        weakMagnitude: weak,
      }).catch(() => {});
    } else if (pad.hapticActuators?.[0]?.pulse) {
      pad.hapticActuators[0].pulse(strong, duration).catch(() => {});
    }
  } catch { /* ignore unsupported browsers */ }
}

function setupJoystick(el, vec) {
  const knob = el.querySelector('.knob');
  let id = null;
  const R = 50;
  const upd = (e) => {
    const r = el.getBoundingClientRect();
    let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy);
    if (d > R) { dx *= R / d; dy *= R / d; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    vec.set(dx / R, dy / R);
  };
  el.addEventListener('pointerdown', (e) => { id = e.pointerId; el.setPointerCapture(id); upd(e); });
  el.addEventListener('pointermove', (e) => e.pointerId === id && upd(e));
  const end = (e) => { if (e.pointerId !== id) return; id = null; knob.style.transform = ''; vec.set(0, 0); };
  el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
}
setupJoystick($('#joy-move'), input.move);
setupJoystick($('#joy-aim'), input.aim);

addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  const k = e.key.toLowerCase();
  if (state.screen === 'armory' && !e.repeat) {
    if (k === 'arrowleft' || k === 'a' || k === 'q') { stepArmory(-1); return; }
    if (k === 'arrowright' || k === 'd') { stepArmory(1); return; }
  }
  if ((k === 'e' || k === 'r') && !e.repeat && state.screen === 'hud') {
    cycleMyWeapon();
    return;
  }
  input.keys.add(k);
});
addEventListener('keyup', (e) => input.keys.delete(e.key.toLowerCase()));
const ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.9), hitP = new THREE.Vector3();
$('#game').addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || state.screen !== 'hud') return;
  ray.setFromCamera(new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1), world.camera);
  if (ray.ray.intersectPlane(plane, hitP)) input.mouseAim = hitP.clone();
});

// ---------- Loop ----------
let last = performance.now(), sendAcc = 0;
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  const t = now / 1000;

  // Update gamepad status badge in menu
  const pad = getPrimaryGamepad();
  const padBadge = $('#pad-status');
  if (padBadge) {
    padBadge.style.display = pad ? '' : 'none';
  }

  let moving = false;
  if (state.screen === 'hud' && state.phase === 'move' && state.me.alive) {
    const k = input.keys;
    const mv = input.move.clone();
    if (k.has('w') || k.has('z') || k.has('arrowup')) mv.y -= 1;
    if (k.has('s') || k.has('arrowdown')) mv.y += 1;
    if (k.has('a') || k.has('q') || k.has('arrowleft')) mv.x -= 1;
    if (k.has('d') || k.has('arrowright')) mv.x += 1;

    // Poll connected PC Gamepad during online match
    let padAimX = 0, padAimY = 0;
    if (pad) {
      const dead = 0.18;
      const lx = Math.abs(pad.axes[0] || 0) < dead ? 0 : (pad.axes[0] || 0);
      const ly = Math.abs(pad.axes[1] || 0) < dead ? 0 : (pad.axes[1] || 0);
      const rx = Math.abs(pad.axes[2] || 0) < dead ? 0 : (pad.axes[2] || 0);
      const ry = Math.abs(pad.axes[3] || 0) < dead ? 0 : (pad.axes[3] || 0);
      const dpx = (pad.buttons[15]?.pressed ? 1 : 0) - (pad.buttons[14]?.pressed ? 1 : 0);
      const dpy = (pad.buttons[13]?.pressed ? 1 : 0) - (pad.buttons[12]?.pressed ? 1 : 0);
      if (Math.hypot(lx + dpx, ly + dpy) > 0.1) {
        mv.x += lx + dpx;
        mv.y += ly + dpy;
        input.mouseAim = null;
      }
      if (Math.hypot(rx, ry) > 0.25) {
        padAimX = rx;
        padAimY = ry;
        input.mouseAim = null;
      }
      // R2 trigger (button index 7) switches weapon/grenade in order
      const r2Now = !!(pad.buttons[7]?.pressed || (pad.buttons[7]?.value || 0) > 0.45);
      if (r2Now && !padR2Prev) {
        cycleMyWeapon();
      }
      padR2Prev = r2Now;
    } else {
      padR2Prev = false;
    }

    if (mv.length() > 1) mv.normalize();
    if (mv.length() > 0.1) {
      moving = true;
      const rawX = state.me.x + mv.x * SPEED * dt;
      const rawZ = state.me.z + mv.y * SPEED * dt;
      const [cx, cz, hitWall] = clampToArena(state.arena, state.zone, rawX, rawZ, true);
      state.me.x = cx;
      state.me.z = cz;
      if (hitWall && pad && now - lastWallRumbleAt > 240) {
        lastWallRumbleAt = now;
        pulseOnlinePad(pad, 130, 0.85, 0.45);
      }
    }

    if (Math.hypot(padAimX, padAimY) > 0.25) state.me.angle = Math.atan2(padAimY, padAimX);
    else if (input.aim.length() > 0.3) state.me.angle = Math.atan2(input.aim.y, input.aim.x);
    else if (input.mouseAim) state.me.angle = Math.atan2(input.mouseAim.z - state.me.z, input.mouseAim.x - state.me.x);
    else if (moving && !matchMedia('(pointer: coarse)').matches) state.me.angle = Math.atan2(mv.y, mv.x);

    sendAcc += dt;
    if (sendAcc > 1 / 15) {
      sendAcc = 0;
      netEmit('input', {
        x: state.me.x,
        z: state.me.z,
        angle: state.me.angle,
        mode: state.combatMode,
        weapon: state.look.weapon,
      });
    }

    // timer
    const left = Math.max(0, state.phaseEnd - now);
    const sec = Math.ceil(left / 1000);
    if (sec !== state.lastTickSec && sec > 0) {
      state.lastTickSec = sec;
      sound.tick(sec <= 2);
    }
    $('#timer-num').textContent = sec;
    $('#timer-bar').style.strokeDashoffset = 276.5 * (1 - left / state.phaseDur);
    $('#hud-timer').classList.toggle('urgent', left < 2000);
  } else if (state.screen === 'hud') {
    $('#timer-num').textContent = state.phase === 'reveal' ? '!' : '–';
    $('#timer-bar').style.strokeDashoffset = 0;
    $('#hud-timer').classList.remove('urgent');
  }

  // Rotate and lerp 3D Armory Showcase weapon in center
  if (state.screen === 'armory' && showcaseMesh) {
    if (!customDragging) {
      showcaseYaw += dt * 0.75;
      showcaseMesh.rotation.y = showcaseYaw;
    }
    const targetScale = getShowcaseTargetScale();
    showcaseMesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), dt * 8);
    const spinGem = showcaseMesh.userData.weaponMesh?.userData?.spinGem;
    if (spinGem) spinGem.rotation.x += dt * 3;
  }

  if (myChar) {
    if (state.screen === 'hud') {
      myChar.position.x += (state.me.x - myChar.position.x) * Math.min(1, dt * 20);
      myChar.position.z += (state.me.z - myChar.position.z) * Math.min(1, dt * 20);
      const target = -state.me.angle;
      let diff = target - myChar.rotation.y;
      diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      myChar.rotation.y += diff * Math.min(1, dt * 18);
      aimLine.position.set(myChar.position.x, 0.95, myChar.position.z);
      aimLine.rotation.y = myChar.rotation.y;
      aimLine.userData.mat.color.set(state.look.laser);
      aimLine.userData.mat.opacity = 0.7 + Math.sin(t * 8) * 0.2;
      aimLine.scale.x = state.combatMode === 'grenade' ? GRENADE_RANGE / 14 : 1;

      if (state.phase === 'move' && state.me.alive && state.combatMode === 'grenade') {
        const gx = state.me.x + Math.cos(state.me.angle) * GRENADE_RANGE;
        const gz = state.me.z + Math.sin(state.me.angle) * GRENADE_RANGE;
        const [ tx, tz ] = clampToArena(state.arena, state.zone, gx, gz);
        grenAim.visible = true;
        grenAim.position.set(tx, 0.06, tz);
        grenAim.userData.ring.material.color.set(state.look.laser);
        grenAim.userData.fill.material.color.set(state.look.laser);
      } else {
        grenAim.visible = false;
      }
    } else if (state.screen === 'custom') {
      if (!customDragging) {
        let diff = customTargetYaw - myChar.rotation.y;
        diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        myChar.rotation.y += diff * Math.min(1, dt * 10);
      }
      myChar.userData.model.scale.lerp(new THREE.Vector3(1, 1, 1), dt * 8);
    } else {
      myChar.rotation.y += dt * 0.5;
      myChar.userData.model.scale.lerp(new THREE.Vector3(1, 1, 1), dt * 8);
    }
    animateCharacter(myChar, dt, moving, t);
  }

  for (const o of others.values()) {
    o.opacity += (o.target - o.opacity) * Math.min(1, dt * 8);
    setCharacterOpacity(o.mesh, o.opacity);
    const m = o.mesh.userData.model;
    m.position.y *= 0.82;
    animateCharacter(o.mesh, dt, false, t);
  }

  local.update(dt, t);
  world.update(dt, t);
}

// ---------- Local mode (PC, gamepads) ----------
const local = new LocalGame({ world, show, toast });
local.hooks = {
  hideMenuChar: () => { if (myChar) setCharacterOpacity(myChar, 0); },
  getOwnedWeapons: () => state.ownedWeapons,
  getDefaultWeapon: () => state.look.weapon,
  getGrenades: () => state.grenades,
  consumeGrenade: () => {
    if (state.grenades > 0) {
      state.grenades -= 1;
      saveEconomy();
    }
  },
  awardCoins: (kills, won) => awardMatchCoins(kills, won),
};
$('#btn-local').onclick = () => { sound.ui('primary'); local.openLobby(); };

// ---------- Boot & Launch Animation ----------
connect();
syncCoinsUI();
renderCustom();
rebuildMyChar();
enterMenuScene('menu');
if (state.name) { $('#menu-name').textContent = state.name; show('menu'); }
else show('name');

const splash = $('#intro-splash');
if (splash) {
  const dismissSplash = () => {
    if (splash.classList.contains('hide')) return;
    sound.introWhoosh();
    splash.classList.add('hide');
  };
  splash.addEventListener('pointerdown', dismissSplash);
  setTimeout(() => splash.classList.add('hide'), 2100);
}

const unlockAudioAndBgm = () => {
  sound.startBgm();
  removeEventListener('pointerdown', unlockAudioAndBgm);
  removeEventListener('keydown', unlockAudioAndBgm);
};
addEventListener('pointerdown', unlockAudioAndBgm);
addEventListener('keydown', unlockAudioAndBgm);

requestAnimationFrame(loop);
