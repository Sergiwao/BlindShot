// Local "couch" mode: several players on one PC, each with a gamepad (or one keyboard).
// Turn based: one shooter aims while everyone else is invisible and sneaks away.
import * as THREE from 'three';
import { createCharacter, animateCharacter, setCharacterOpacity, setCharacterWeapon } from './character.js';
import {
  ARENAS, WEAPONS, SPEED, MAX_PLAYERS, PLAYER_RADIUS,
  GRENADE_RANGE, GRENADE_RADIUS, clampToArena, computeShot, computeGrenade,
} from '../../shared/game.js';
import { sound } from './sound.js';

const SLOT_COLORS = ['#e8603c', '#3d7fd9', '#e6b52e', '#4fa36b', '#8a5cc7', '#2fa6a0'];
const SLOT_HATS = ['cap', 'crown', 'cone', 'horns', 'halo', 'none'];
const SLOT_FACES = ['happy', 'cool', 'angry', 'cute', 'happy', 'cool'];
const TIMES = [5, 7, 10];
const DEAD = 0.22;

// Standard gamepad mapping: R2 (button 7) switches weapons/grenades
const B = { SOUTH: 0, EAST: 1, L1: 4, R1: 5, L2: 6, R2: 7, START: 9 };

const $ = (s) => document.querySelector(s);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function deadzone(x, y) {
  const m = Math.hypot(x, y);
  if (m < DEAD) return [0, 0];
  const k = Math.min(1, (m - DEAD) / (1 - DEAD)) / m;
  return [x * k, y * k];
}

function padName(id) {
  if (/dualsense|0ce6/i.test(id)) return 'DualSense';
  if (/dualshock|054c|wireless controller/i.test(id)) return 'DualShock 4';
  if (/xbox|xinput|045e/i.test(id)) return 'Manette Xbox';
  return 'Manette';
}

export class LocalGame {
  constructor({ world, show, toast }) {
    this.world = world;
    this.show = show;
    this.toast = toast;
    this.active = false;
    this.state = 'off';
    this.players = [];
    this.arenaId = 'neon';
    this.time = 5;
    this.prev = new Map();
    this.keys = new Set();
    this.kbEdge = new Set();
    this.lastSec = -1;

    addEventListener('keydown', (e) => {
      if (!this.active || e.target.tagName === 'INPUT') return;
      const k = e.key.toLowerCase();
      if (!this.keys.has(k)) this.kbEdge.add(k);
      this.keys.add(k);
      if ([' ', 'tab', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    addEventListener('gamepadconnected', (e) => this.toast(`${padName(e.gamepad.id)} connectée`));
    addEventListener('gamepaddisconnected', (e) => {
      this.toast(`${padName(e.gamepad.id)} déconnectée`);
      if (this.state === 'lobby') this.removeDev(e.gamepad.index);
    });

    // Aim line + grenade target circle
    const c = document.createElement('canvas'); c.width = 256; c.height = 8;
    const g = c.getContext('2d');
    for (let x = 0; x < 256; x += 20) { g.fillStyle = `rgba(255,255,255,${1 - x / 300})`; g.fillRect(x, 0, 12, 8); }
    const tex = new THREE.CanvasTexture(c);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.14), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
    m.geometry.translate(0.5, 0, 0); m.rotation.x = -Math.PI / 2; m.scale.x = 30;
    this.aim = new THREE.Group(); this.aim.add(m); this.aim.visible = false;
    this.aim.userData.mat = m.material;
    this.aim.userData.beamMesh = m;

    const gRingGeo = new THREE.RingGeometry(GRENADE_RADIUS - 0.14, GRENADE_RADIUS, 32);
    gRingGeo.rotateX(-Math.PI / 2);
    this.grenAim = new THREE.Mesh(gRingGeo, new THREE.MeshBasicMaterial({ color: 0xe8603c, transparent: true, opacity: 0.75 }));
    this.grenAim.visible = false;
    world.scene.add(this.aim, this.grenAim);

    $('#btn-local-back').onclick = () => { sound.ui('back'); this.exit(); };
    $('#btn-local-start').onclick = () => { sound.ui('primary'); this.start(); };
    $('#btn-lhud-switch').onclick = () => {
      if (this.state === 'aim' && this.shooter()) this.cycleShooterWeapon(this.shooter());
    };
    this.paused = false;
    $('#btn-local-pause').onclick = () => { sound.ui('chip'); this.togglePause(); };
    $('#btn-pause-resume').onclick = () => { sound.ui('chip'); this.resume(); };
    $('#btn-pause-restart').onclick = () => { sound.ui('primary'); this.restart(); };
    $('#btn-pause-quit').onclick = () => { sound.ui('back'); this.quitToLobby(); };
  }

  // ---------- Lobby ----------
  openLobby() {
    this.active = true;
    this.state = 'lobby';
    this.clearMeshes();
    this.aim.visible = false;
    this.grenAim.visible = false;
    for (const p of this.players) { p.alive = true; p.kills = 0; }
    this.show('local');
    this.renderLobby();
  }

  pause() {
    if (this.paused || !['intro', 'aim', 'reveal'].includes(this.state)) return;
    this.paused = true;
    const dlg = $('#dlg-local-pause');
    if (dlg && typeof dlg.showModal === 'function') {
      try { dlg.showModal(); } catch (e) {}
    }
  }

  resume() {
    this.paused = false;
    const dlg = $('#dlg-local-pause');
    if (dlg && dlg.open) {
      try { dlg.close(); } catch (e) {}
    }
  }

  togglePause() {
    if (this.paused) this.resume();
    else this.pause();
  }

  restart() {
    this.resume();
    this.start();
  }

  quitToLobby() {
    this.resume();
    this.openLobby();
  }

  exit() {
    this.resume();
    this.clearMeshes();
    this.aim.visible = false;
    this.grenAim.visible = false;
    this.active = false;
    this.state = 'off';
    sound.startBgm();
    this.show('menu');
  }

  clearMeshes() {
    for (const p of this.players) if (p.mesh) { this.world.scene.remove(p.mesh); p.mesh = null; }
  }

  addDev(dev) {
    if (this.players.some((p) => p.dev === dev)) return;
    if (this.players.length >= MAX_PLAYERS) return this.toast('6 joueurs maximum');
    const used = new Set(this.players.map((p) => p.slot));
    let slot = 0; while (used.has(slot)) slot++;
    const pad = dev === 'kb' ? null : navigator.getGamepads()[dev];
    const defaultWeapon = this.hooks?.getDefaultWeapon?.() || 'blaster';
    this.players.push({
      slot, dev, name: `Joueur ${slot + 1}`, devName: dev === 'kb' ? 'Clavier' : padName(pad?.id || ''),
      look: {
        body: SLOT_COLORS[slot], laser: SLOT_COLORS[slot],
        hat: SLOT_HATS[slot], face: SLOT_FACES[slot], weapon: defaultWeapon,
      },
      alive: true, kills: 0, x: 0, z: 0, angle: 0, opacity: 1, target: 1, mesh: null, moving: false,
      onWall: false, lastWallRumble: 0, mode: 'weapon', weaponIdx: 0, grenades: 0,
    });
    this.players.sort((a, b) => a.slot - b.slot);
    sound.ui('primary');
    this.rumble(dev, 120, 0.5);
    this.renderLobby();
  }

  removeDev(dev) {
    const i = this.players.findIndex((p) => p.dev === dev);
    if (i >= 0) { sound.ui('back'); this.players.splice(i, 1); this.renderLobby(); }
  }

  renderLobby() {
    const ul = $('#local-slots'); ul.innerHTML = '';
    for (let i = 0; i < MAX_PLAYERS; i++) {
      const p = this.players.find((q) => q.slot === i);
      const li = document.createElement('li');
      if (p) {
        li.innerHTML = `<div class="who"><span class="dot" style="background:${p.look.body};border-color:${p.look.body}"></span><span class="nm">${esc(p.name)}</span></div><span class="dev">${esc(p.devName)}</span>`;
      } else {
        li.className = 'empty'; li.textContent = `Joueur ${i + 1} – libre`;
      }
      ul.appendChild(li);
    }
    const ar = $('#local-arena'); ar.innerHTML = '';
    for (const a of Object.values(ARENAS)) {
      const b = document.createElement('button');
      b.className = 'pill' + (a.id === this.arenaId ? ' sel' : '');
      b.textContent = a.name;
      b.onclick = () => { sound.ui(); this.arenaId = a.id; this.renderLobby(); };
      ar.appendChild(b);
    }
    const tm = $('#local-time'); tm.innerHTML = '';
    for (const s of TIMES) {
      const b = document.createElement('button');
      b.className = 'pill' + (s === this.time ? ' sel' : '');
      b.textContent = `${s} s`;
      b.onclick = () => { sound.ui(); this.time = s; this.renderLobby(); };
      tm.appendChild(b);
    }
    $('#btn-local-start').disabled = this.players.length < 2;
  }

  // ---------- Weapon / Grenade switching (R2 or HUD button) ----------
  cycleShooterWeapon(p) {
    const owned = this.hooks?.getOwnedWeapons?.() || ['blaster'];
    const items = [...owned];
    if (p.grenades > 0) items.push('grenade');
    if (items.length <= 1) {
      this.toast('Achète des armes ou grenades dans l\'Armurerie');
      return;
    }
    const curKey = p.mode === 'grenade' ? 'grenade' : p.look.weapon;
    const nextIdx = (items.indexOf(curKey) + 1) % items.length;
    const next = items[nextIdx];
    if (next === 'grenade') {
      p.mode = 'grenade';
      setCharacterWeapon(p.mesh, 'grenade');
    } else {
      p.mode = 'weapon';
      p.look.weapon = next;
      setCharacterWeapon(p.mesh, next);
    }
    sound.switchWeapon();
    this.rumble(p.dev, 45, 0.35);
    this.updateSwitchHud();
  }

  updateSwitchHud() {
    const s = this.shooter();
    if (!s) return;
    const btn = $('#btn-lhud-switch');
    const nameEl = $('#lhud-weapon-name');
    if (s.mode === 'grenade') {
      btn.classList.add('grenade-mode');
      nameEl.textContent = `Grenade (x${s.grenades})`;
    } else {
      btn.classList.remove('grenade-mode');
      const wName = WEAPONS[s.look.weapon]?.name || 'Blaster Classique';
      nameEl.textContent = s.grenades > 0 ? `${wName} · Grenade (${s.grenades})` : wName;
    }
  }

  // ---------- Game ----------
  start() {
    if (this.players.length < 2) return this.toast('Il faut au moins 2 joueurs');
    this.resume();
    sound.stopBgm();
    this.arena = ARENAS[this.arenaId];
    this.zone = this.arena.size;
    this.turn = 0;
    this.turnCount = 0;
    this.world.buildArena(this.arena, this.zone);
    this.hooks?.hideMenuChar?.();
    const r = this.arena.shape === 'circle' ? this.zone * 0.65 : this.zone * 0.7;
    const off = Math.random() * Math.PI * 2;
    const startGrenades = Math.max(1, this.hooks?.getGrenades?.() || 0);
    const defaultWeapon = this.hooks?.getDefaultWeapon?.() || 'blaster';
    this.players.forEach((p, i) => {
      const a = off + (i / this.players.length) * Math.PI * 2;
      [p.x, p.z] = clampToArena(this.arena, this.zone, Math.cos(a) * r, Math.sin(a) * r);
      p.angle = Math.atan2(-p.z, -p.x);
      p.alive = true; p.kills = 0; p.opacity = 1; p.target = 1; p.onWall = false;
      p.mode = 'weapon';
      p.look.weapon = defaultWeapon;
      p.grenades = startGrenades;
      p.mesh = createCharacter(p.look);
      p.mesh.position.set(p.x, 0, p.z);
      p.mesh.rotation.y = -p.angle;
      this.world.scene.add(p.mesh);
    });
    $('#lfeed').innerHTML = '';
    this.show('lhud');
    this.turn = 0;
    this.beginTurn();
  }

  shooter() { return this.players[this.turn]; }

  beginTurn() {
    this.turnCount++;
    const s = this.shooter();
    if (s.mode === 'grenade' && s.grenades <= 0) {
      s.mode = 'weapon';
      setCharacterWeapon(s.mesh, s.look.weapon);
    }
    this.state = 'intro';
    this.timer = 1.6;
    for (const p of this.players) if (p.alive) p.target = 1;
    $('#lhud-turn').textContent = `Tour ${this.turnCount}`;
    $('#lhud-shooter').innerHTML = `Tireur : <b style="color:${s.look.body}">${esc(s.name)}</b>`;
    this.banner(`${esc(s.name)} tire<small>Les autres : préparez-vous à disparaître</small>`, 1500);
    this.renderRoster();
    this.updateSwitchHud();
  }

  beginAim() {
    this.state = 'aim';
    this.timer = this.time;
    this.lastSec = Math.ceil(this.time);
    this.aimElapsed = 0;
    const s = this.shooter();
    for (const p of this.players) if (p !== s) { p.target = 0; p.onWall = false; }
    this.aim.visible = true;
    this.aim.userData.mat.color.set(s.look.laser);
    this.banner(`Cachez-vous<small>${esc(s.name)} vise – ${this.time} secondes</small>`, 1300);
    sound.roundStart();
    this.updateSwitchHud();
    for (const p of this.players) if (p.alive) this.rumble(p.dev, 90, p === s ? 0.3 : 0.6);
  }

  fire() {
    this.state = 'reveal';
    this.timer = 3.2;
    this.aim.visible = false;
    this.grenAim.visible = false;
    const s = this.shooter();
    const alive = this.players.filter((p) => p.alive);
    for (const p of alive) {
      if (p === s) continue;
      p.target = 1; p.opacity = 0;
      p.mesh.position.set(p.x, 0, p.z);
      p.mesh.userData.model.position.y = 1.6;
    }
    this.banner('Verdict', 900);

    if (s.mode === 'grenade' && s.grenades > 0) {
      s.grenades--;
      this.hooks?.consumeGrenade?.();
      const g = computeGrenade(this.arena, this.zone, s, alive);
      this.pending = [
        {
          at: 2.65,
          fn: () => {
            sound.grenade();
            this.world.grenadeLob(g.x, g.z, g.ex, g.ez, new THREE.Color(s.look.laser), GRENADE_RADIUS);
          },
        },
        {
          at: 2.25,
          fn: () => {
            this.resolveHits(s, g.hits);
            // Automatically switch back to weapon after throwing a grenade!
            s.mode = 'weapon';
            setCharacterWeapon(s.mesh, s.look.weapon);
            this.updateSwitchHud();
          },
        },
      ];
    } else {
      const shot = computeShot(this.arena, this.zone, s, alive);
      const wId = s.look.weapon || 'blaster';
      this.pending = [
        {
          at: 2.6,
          fn: () => {
            sound.laser(0, wId);
            this.world.beam(shot.x, shot.z, shot.ex, shot.ez, new THREE.Color(s.look.laser), 0, wId);
          },
        },
        { at: 2.35, fn: () => this.resolveHits(s, shot.hit ? [shot.hit] : []) },
      ];
    }
  }

  resolveHits(s, hits) {
    if (hits && hits.length) {
      hits.forEach((hit, idx) => {
        hit.alive = false;
        s.kills++;
        sound.hitAndScream(idx * 0.08);
        this.world.burst(hit.x, hit.z, new THREE.Color(hit.look.body));
        setCharacterOpacity(hit.mesh, 0);
        hit.target = 0; hit.opacity = 0;
        this.feed(`<b style="color:${s.look.body}">${esc(s.name)}</b> élimine <b style="color:${hit.look.body}">${esc(hit.name)}</b>`);
        this.rumble(hit.dev, 450, 1);
      });
      this.rumble(s.dev, 150, 0.4);
      const names = hits.map((h) => esc(h.name)).join(' & ');
      this.banner(`Pouf<small>${names} ${hits.length > 1 ? 'sont éliminés' : 'est éliminé'}</small>`, 1400);
      if (this.arena.shape === 'circle' && this.arena.shrinkStep) {
        this.zone = Math.max(this.arena.minSize, this.zone - this.arena.shrinkStep * hits.length);
        setTimeout(() => {
          this.world.setZone(this.zone);
          for (const p of this.players) if (p.alive) [p.x, p.z] = clampToArena(this.arena, this.zone, p.x, p.z);
        }, 900);
      }
    } else {
      this.banner('Raté<small>Personne n\'est touché</small>', 1300);
    }
    this.renderRoster();
  }

  nextTurn() {
    const alive = this.players.filter((p) => p.alive);
    if (alive.length <= 1) return this.finish(alive[0] || null);
    let i = this.turn;
    do { i = (i + 1) % this.players.length; } while (!this.players[i].alive);
    this.turn = i;
    this.beginTurn();
  }

  finish(winner) {
    this.state = 'over';
    this.aim.visible = false;
    this.grenAim.visible = false;
    sound.startBgm();
    const bestKills = winner ? winner.kills : Math.max(0, ...this.players.map((p) => p.kills));
    setTimeout(() => {
      sound.victory();
      this.hooks?.awardCoins?.(bestKills, !!winner);
      $('#over-kicker').textContent = 'Mode local';
      $('#over-title').textContent = winner ? `${winner.name} gagne` : 'Égalité';
      $('#over-rank').innerHTML = [...this.players].sort((a, b) => b.kills - a.kills)
        .map((p) => `<li><b style="color:${p.look.body}">${esc(p.name)}</b> — ${p.kills} élim.</li>`).join('');
      $('#btn-over-lobby').textContent = 'Rejouer';
      this.show('over');
      if (winner) this.rumble(winner.dev, 400, 0.6);
    }, 900);
  }

  // ---------- Input ----------
  readDev(dev) {
    if (dev === 'kb') {
      const k = this.keys, e = this.kbEdge;
      const mv = [(k.has('d') ? 1 : 0) - (k.has('a') || k.has('q') ? 1 : 0), (k.has('s') ? 1 : 0) - (k.has('w') || k.has('z') ? 1 : 0)];
      const am = [(k.has('arrowright') ? 1 : 0) - (k.has('arrowleft') ? 1 : 0), (k.has('arrowdown') ? 1 : 0) - (k.has('arrowup') ? 1 : 0)];
      const n = Math.hypot(...mv); if (n > 1) { mv[0] /= n; mv[1] /= n; }
      return {
        move: mv, aim: am,
        fire: e.has(' '),
        switchW: e.has('e') || e.has('tab'),
        join: e.has('enter'), back: e.has('escape'), start: false,
        pause: e.has('p') || e.has('escape'),
      };
    }
    const pad = navigator.getGamepads()[dev];
    if (!pad) return { move: [0, 0], aim: [0, 0] };
    const prev = this.prev.get(dev) || [];
    const pr = (i) => !!pad.buttons[i]?.pressed;
    const edge = (i) => pr(i) && !prev[i];
    let mv = deadzone(pad.axes[0] || 0, pad.axes[1] || 0);
    if (!mv[0] && !mv[1]) mv = [(pr(15) ? 1 : 0) - (pr(14) ? 1 : 0), (pr(13) ? 1 : 0) - (pr(12) ? 1 : 0)];
    const am = deadzone(pad.axes[2] || 0, pad.axes[3] || 0);
    return {
      move: mv, aim: am,
      fire: edge(B.SOUTH) || edge(B.R1),
      switchW: edge(B.R2),
      join: edge(B.SOUTH), back: edge(B.EAST), start: edge(B.START),
      pause: edge(B.START),
    };
  }

  pollPads() {
    const pads = [...navigator.getGamepads()].filter(Boolean);
    const out = [];
    for (const pad of pads) out.push([pad.index, this.readDev(pad.index)]);
    return out;
  }

  endPoll() {
    for (const pad of navigator.getGamepads()) if (pad) this.prev.set(pad.index, pad.buttons.map((b) => b.pressed));
    this.kbEdge.clear();
  }

  rumble(dev, ms, strength) {
    if (dev === 'kb') return;
    const pad = navigator.getGamepads()[dev];
    pad?.vibrationActuator?.playEffect?.('dual-rumble', { startDelay: 0, duration: ms, weakMagnitude: strength * 0.7, strongMagnitude: strength })?.catch?.(() => {});
  }

  // ---------- UI ----------
  banner(html, ms) {
    const b = $('#lbanner'); b.innerHTML = html; b.classList.add('show');
    clearTimeout(b._t); if (ms) b._t = setTimeout(() => b.classList.remove('show'), ms);
  }

  feed(html) {
    const d = document.createElement('div'); d.innerHTML = html; $('#lfeed').prepend(d);
    setTimeout(() => d.remove(), 5000);
  }

  renderRoster() {
    const s = this.shooter();
    $('#local-roster').innerHTML = this.players.map((p) =>
      `<div class="${p.alive ? '' : 'dead'} ${p === s && p.alive ? 'shooter' : ''}"><i style="background:${p.look.body}"></i>${esc(p.name)}</div>`).join('');
  }

  // ---------- Loop ----------
  update(dt, t) {
    if (!this.active) return;
    const pads = this.pollPads();

    if (this.state === 'lobby') {
      for (const [i, inp] of pads) {
        if (inp.join) this.addDev(i);
        if (inp.back) this.removeDev(i);
        if (inp.start) { sound.ui('primary'); this.start(); }
      }
      const kb = this.readDev('kb');
      if (kb.join) this.addDev('kb');
      if (kb.back) this.removeDev('kb');
      this.endPoll();
      return;
    }

    if (this.state === 'over') {
      for (const [, inp] of pads) if (inp.start || inp.join) { sound.ui('primary'); this.openLobby(); break; }
      this.endPoll();
      return;
    }

    if (this.paused) {
      for (const [, inp] of pads) {
        if (inp.pause || inp.back) { this.resume(); break; }
      }
      const kb = this.readDev('kb');
      if (kb.pause || kb.back) this.resume();
      this.endPoll();
      return;
    }

    // Toggle pause during active gameplay
    for (const [, inp] of pads) {
      if (inp.pause) { this.pause(); this.endPoll(); return; }
    }
    const kb = this.readDev('kb');
    if (kb.pause) { this.pause(); this.endPoll(); return; }

    const s = this.shooter();
    this.timer -= dt;

    if (this.state === 'intro' && this.timer <= 0) this.beginAim();

    if (this.state === 'aim') {
      this.aimElapsed += dt;
      const nowMs = performance.now();
      for (const p of this.players) {
        p.moving = false;
        if (!p.alive) continue;
        const inp = this.readDev(p.dev);
        if (p === s) {
          const a = Math.hypot(...inp.aim) > 0.3 ? inp.aim : inp.move;
          if (Math.hypot(...a) > 0.3) p.angle = Math.atan2(a[1], a[0]);
          if (inp.switchW) this.cycleShooterWeapon(s);
          if (inp.fire && this.aimElapsed > 0.8) this.timer = 0;
        } else if (Math.hypot(...inp.move) > 0.05) {
          p.moving = true;
          const nextX = p.x + inp.move[0] * SPEED * dt;
          const nextZ = p.z + inp.move[1] * SPEED * dt;
          const [cx, cz] = clampToArena(this.arena, this.zone, nextX, nextZ);

          // Check if player touched the arena boundary or an obstacle wall
          const clamped = Math.hypot(cx - nextX, cz - nextZ) > 0.0005;
          const maxR = this.zone - PLAYER_RADIUS;
          const distEdge = this.arena.shape === 'circle'
            ? maxR - Math.hypot(cx, cz)
            : maxR - Math.max(Math.abs(cx), Math.abs(cz));

          if (clamped || distEdge < 0.05) {
            if (!p.onWall) {
              this.rumble(p.dev, 150, 0.95);
              p.onWall = true;
              p.lastWallRumble = nowMs;
            } else if (nowMs - p.lastWallRumble > 210) {
              this.rumble(p.dev, 85, 0.65);
              p.lastWallRumble = nowMs;
            }
          } else {
            p.onWall = false;
            if (distEdge < 0.85 && nowMs - p.lastWallRumble > 340) {
              this.rumble(p.dev, 45, 0.25);
              p.lastWallRumble = nowMs;
            }
          }

          p.x = cx; p.z = cz;
          if (Math.hypot(...inp.aim) > 0.3) p.angle = Math.atan2(inp.aim[1], inp.aim[0]);
          else p.angle = Math.atan2(inp.move[1], inp.move[0]);
        } else {
          p.onWall = false;
        }
      }
      const left = Math.max(0, this.timer);
      const sec = Math.ceil(left);
      if (sec !== this.lastSec && sec > 0) {
        this.lastSec = sec;
        sound.tick(sec <= 2);
      }
      $('#ltimer-num').textContent = sec;
      $('#ltimer-bar').style.strokeDashoffset = 276.5 * (1 - left / this.time);
      $('#lhud-timer').classList.toggle('urgent', left < 2);
      if (this.timer <= 0) this.fire();
    } else {
      $('#ltimer-num').textContent = this.state === 'reveal' ? '!' : '–';
      $('#ltimer-bar').style.strokeDashoffset = 0;
      $('#lhud-timer').classList.remove('urgent');
    }

    if (this.state === 'reveal') {
      for (const ev of this.pending) if (!ev.done && this.timer <= ev.at) { ev.done = true; ev.fn(); }
      if (this.timer <= 0) this.nextTurn();
    }

    // Visuals
    for (const p of this.players) {
      if (!p.mesh) continue;
      if (!p.alive) { p.mesh.visible = false; continue; }
      p.opacity += (p.target - p.opacity) * Math.min(1, dt * 8);
      setCharacterOpacity(p.mesh, p.opacity);
      p.mesh.position.x += (p.x - p.mesh.position.x) * Math.min(1, dt * 20);
      p.mesh.position.z += (p.z - p.mesh.position.z) * Math.min(1, dt * 20);
      let diff = -p.angle - p.mesh.rotation.y;
      diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      p.mesh.rotation.y += diff * Math.min(1, dt * 18);
      p.mesh.userData.model.position.y *= 0.85;
      animateCharacter(p.mesh, dt, p.moving, t);
    }
    if (this.aim.visible && s?.mesh) {
      this.aim.position.set(s.mesh.position.x, 0.95, s.mesh.position.z);
      this.aim.rotation.y = s.mesh.rotation.y;
      this.aim.userData.mat.opacity = 0.75 + Math.sin(t * 8) * 0.15;
      if (s.mode === 'grenade') {
        this.aim.userData.beamMesh.scale.x = GRENADE_RANGE;
        const [gx, gz] = clampToArena(
          this.arena, this.zone,
          s.x + Math.cos(s.angle) * GRENADE_RANGE,
          s.z + Math.sin(s.angle) * GRENADE_RANGE
        );
        this.grenAim.visible = true;
        this.grenAim.position.set(gx, 0.04, gz);
      } else {
        this.aim.userData.beamMesh.scale.x = 30;
        this.grenAim.visible = false;
      }
    } else {
      this.grenAim.visible = false;
    }
    this.endPoll();
  }
}
