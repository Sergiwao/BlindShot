// Local Offline Multiplayer (LAN / Mobile Hotspot / Zero-Internet P2P)
// Designed for Blind Shot. Developed par Serge le dev.
import {
  ARENAS, WEAPONS, SPEED, MOVE_TIME, REVEAL_TIME, MAX_PLAYERS,
  clampToArena, computeShot, computeGrenade,
} from '../../shared/game.js';
import { io } from 'socket.io-client';

const BOT_NAMES = ['Zappy', 'Bzzt', 'Pixel', 'Nova', 'Kiwi', 'Bolt', 'Rico', 'Mochi'];
const WEAPON_IDS = Object.keys(WEAPONS);

export class LanManager {
  constructor({ toast, onRoom, onStart, onPhase, onReveal, onSync, onOver, onHostLost }) {
    this.toast = toast;
    this.callbacks = { onRoom, onStart, onPhase, onReveal, onSync, onOver, onHostLost };
    this.mode = 'none'; // 'none' | 'host' | 'guest'
    this.transport = 'none'; // 'socket' | 'webrtc'
    this.socket = null;
    this.isHost = false;
    this.hostEngine = null;
    this.active = false;
    this.peers = new Map(); // peerId -> { pc, dc, info }
    this.guestPeer = null; // for guest in WebRTC mode
  }

  get isLanActive() {
    return this.active;
  }

  // -------------------------------------------------------------
  // 1. HOST MODE (Authoritative game engine on Host device)
  // -------------------------------------------------------------
  createHostRoom({ name, look, arena = 'neon' }) {
    this.leave();
    this.active = true;
    this.mode = 'host';
    this.isHost = true;
    this.transport = 'host_engine';

    const chosenArena = ARENAS[arena] || ARENAS.neon;
    this.hostEngine = {
      code: 'HOTSPOT',
      arena: chosenArena,
      hostId: 'lan_host',
      state: 'lobby',
      players: new Map(),
      zone: chosenArena.size,
      round: 0,
      phase: null,
      timer: null,
    };

    // Host player
    this.hostEngine.players.set('lan_host', {
      id: 'lan_host',
      name: (name || 'Hôte').slice(0, 14),
      look: { ...look },
      bot: false,
      alive: true,
      kills: 0,
      x: 0, z: 0, angle: 0, mode: 'weapon',
    });

    // Pre-add 2 bots for quick solo/offline fun, host can add/kick bots anytime
    this.hostAddBot(true);
    this.hostAddBot(true);

    this.broadcastRoom();
    return { ok: true, code: 'HOTSPOT' };
  }

  getHostRoomInfo() {
    if (!this.hostEngine) return null;
    const r = this.hostEngine;
    return {
      code: r.code,
      arena: r.arena.id,
      host: r.hostId,
      state: r.state,
      isLan: true,
      players: [...r.players.values()].map((p) => ({
        id: p.id,
        name: p.name,
        look: p.look,
        alive: p.alive,
        bot: p.bot,
        kills: p.kills,
      })),
    };
  }

  broadcastRoom() {
    const info = this.getHostRoomInfo();
    if (!info) return;
    this.callbacks.onRoom?.(info);
    this.broadcastToGuests('room', info);
  }

  hostAddBot(silent = false) {
    const r = this.hostEngine;
    if (!r || r.state !== 'lobby' || r.players.size >= MAX_PLAYERS) return;
    const id = 'bot_' + Math.random().toString(36).slice(2, 8);
    const used = new Set([...r.players.values()].map((p) => p.name));
    const name = BOT_NAMES.find((n) => !used.has(n)) || 'Bot';
    const hatKeys = ['cap', 'crown', 'cone', 'horns', 'halo', 'none'];
    const faceKeys = ['happy', 'cool', 'angry', 'cute'];
    const bodyColors = ['#e8603c', '#3d7fd9', '#e6b52e', '#4fa36b', '#8a5cc7', '#2fa6a0'];
    const laserColors = ['#e8603c', '#3d7fd9', '#2fa6a0', '#e6b52e', '#8a5cc7', '#ffffff'];

    r.players.set(id, {
      id, name, bot: true, alive: true, kills: 0, x: 0, z: 0, angle: 0, mode: 'weapon',
      look: {
        body: bodyColors[Math.floor(Math.random() * bodyColors.length)],
        laser: laserColors[Math.floor(Math.random() * laserColors.length)],
        hat: hatKeys[Math.floor(Math.random() * hatKeys.length)],
        face: faceKeys[Math.floor(Math.random() * faceKeys.length)],
        weapon: WEAPON_IDS[Math.floor(Math.random() * WEAPON_IDS.length)],
      },
    });
    if (!silent) this.broadcastRoom();
  }

  hostKick(id) {
    const r = this.hostEngine;
    if (!r || r.state !== 'lobby') return;
    if (r.players.has(id) && id !== 'lan_host') {
      const p = r.players.get(id);
      r.players.delete(id);
      if (this.peers.has(id)) {
        this.sendToGuest(id, 'kicked', {});
        try { this.peers.get(id).dc?.close(); } catch {}
        this.peers.delete(id);
      }
      this.broadcastRoom();
      this.toast?.(`${p.name} a été retiré`);
    }
  }

  hostSetArena(arenaId) {
    const r = this.hostEngine;
    if (!r || r.state !== 'lobby' || !ARENAS[arenaId]) return;
    r.arena = ARENAS[arenaId];
    r.zone = r.arena.size;
    this.broadcastRoom();
  }

  hostStartGame(hostLook) {
    const r = this.hostEngine;
    if (!r || r.state !== 'lobby') return;
    if (r.players.size < 2) {
      this.toast?.('Il faut au moins 2 joueurs (ajoute un bot !)');
      return;
    }
    r.state = 'playing';
    r.round = 0;
    r.zone = r.arena.size;

    const me = r.players.get('lan_host');
    if (me && hostLook) me.look = { ...hostLook };

    const list = [...r.players.values()];
    const rad = r.arena.shape === 'circle' ? r.zone * 0.7 : r.zone * 0.75;
    const off = Math.random() * Math.PI * 2;
    list.forEach((p, i) => {
      const a = off + (i / list.length) * Math.PI * 2;
      const [x, z] = clampToArena(r.arena, r.zone, Math.cos(a) * rad, Math.sin(a) * rad);
      p.x = x; p.z = z; p.angle = Math.atan2(-z, -x);
      p.alive = true; p.kills = 0; p.mode = 'weapon';
    });

    // Notify host
    this.callbacks.onStart?.({ you: { x: me.x, z: me.z, angle: me.angle }, zone: r.zone });
    // Notify guests
    for (const [id, peer] of this.peers.entries()) {
      const p = r.players.get(id);
      if (p) {
        this.sendToGuest(id, 'start', { you: { x: p.x, z: p.z, angle: p.angle }, zone: r.zone });
      }
    }
    this.broadcastRoom();

    clearTimeout(r.timer);
    r.timer = setTimeout(() => this.hostMovePhase(), 1500);
  }

  hostMovePhase() {
    const r = this.hostEngine;
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

    const payload = {
      phase: 'move',
      round: r.round,
      duration: MOVE_TIME,
      zone: r.zone,
      alive: alive.map((p) => p.id),
    };
    this.callbacks.onPhase?.(payload);
    this.broadcastToGuests('phase', payload);

    clearTimeout(r.timer);
    r.timer = setTimeout(() => this.hostRevealPhase(), MOVE_TIME + 150);
  }

  hostRevealPhase() {
    const r = this.hostEngine;
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

    const payload = {
      round: r.round,
      players: alive.map((p) => ({
        id: p.id, x: p.x, z: p.z, angle: p.angle,
        weapon: p.look.weapon || 'blaster',
      })),
      shots,
      eliminated,
      zone: newZone,
    };
    this.callbacks.onReveal?.(payload);
    this.broadcastToGuests('reveal', payload);

    r.zone = newZone;
    for (const p of survivors) [p.x, p.z] = clampToArena(r.arena, r.zone, p.x, p.z);

    clearTimeout(r.timer);
    r.timer = setTimeout(() => {
      if (!this.hostEngine) return;
      if (survivors.length <= 1) {
        const winner = survivors[0] || null;
        r.state = 'lobby';
        r.phase = null;
        const ranking = [...r.players.values()]
          .sort((a, b) => b.kills - a.kills)
          .map((p) => ({ id: p.id, name: p.name, kills: p.kills }));

        const overPayload = {
          winner: winner ? { id: winner.id, name: winner.name, look: winner.look, alive: true, bot: winner.bot, kills: winner.kills } : null,
          draw: [],
          ranking,
        };
        this.callbacks.onOver?.(overPayload);
        this.broadcastToGuests('over', overPayload);

        for (const p of r.players.values()) p.alive = true;
        this.broadcastRoom();
        return;
      }

      // Sync positions
      for (const [id, peer] of this.peers.entries()) {
        const p = r.players.get(id);
        if (p && p.alive) this.sendToGuest(id, 'sync', { x: p.x, z: p.z, angle: p.angle });
      }
      this.hostMovePhase();
    }, REVEAL_TIME);
  }

  handleGuestInput(guestId, { x, z, angle, mode, weapon }) {
    const r = this.hostEngine;
    if (!r || r.phase !== 'move') return;
    const p = r.players.get(guestId);
    if (!p || !p.alive) return;
    [p.x, p.z] = clampToArena(r.arena, r.zone, x, z);
    p.angle = angle;
    if (mode === 'grenade' || mode === 'weapon') p.mode = mode;
    if (WEAPON_IDS.includes(weapon)) p.look.weapon = weapon;
  }

  handleHostInput({ x, z, angle, mode, weapon }) {
    const r = this.hostEngine;
    if (!r || r.phase !== 'move') return;
    const p = r.players.get('lan_host');
    if (!p || !p.alive) return;
    [p.x, p.z] = clampToArena(r.arena, r.zone, x, z);
    p.angle = angle;
    if (mode === 'grenade' || mode === 'weapon') p.mode = mode;
    if (WEAPON_IDS.includes(weapon)) p.look.weapon = weapon;
  }

  // -------------------------------------------------------------
  // 2. GUEST & HOST PEER COMMUNICATIONS
  // -------------------------------------------------------------
  sendToGuest(guestId, ev, data) {
    const peer = this.peers.get(guestId);
    if (!peer || !peer.dc || peer.dc.readyState !== 'open') return;
    try {
      peer.dc.send(JSON.stringify({ ev, data }));
    } catch (err) {
      console.warn('Failed to send to guest', guestId, err);
    }
  }

  broadcastToGuests(ev, data) {
    const msg = JSON.stringify({ ev, data });
    for (const peer of this.peers.values()) {
      if (peer.dc && peer.dc.readyState === 'open') {
        try { peer.dc.send(msg); } catch {}
      }
    }
  }

  registerGuest(guestId, guestInfo, dc) {
    const r = this.hostEngine;
    if (!r) return;
    if (r.players.size >= MAX_PLAYERS) {
      try { dc.send(JSON.stringify({ ev: 'error', data: 'Salon complet' })); } catch {}
      return;
    }
    r.players.set(guestId, {
      id: guestId,
      name: (guestInfo.name || 'Invité').slice(0, 14),
      look: { ...guestInfo.look },
      bot: false,
      alive: true,
      kills: 0,
      x: 0, z: 0, angle: 0, mode: 'weapon',
    });
    this.toast?.(`${guestInfo.name || 'Un joueur'} a rejoint le salon local`);
    this.broadcastRoom();
  }

  unregisterGuest(guestId) {
    const r = this.hostEngine;
    if (!r || !r.players.has(guestId)) return;
    const p = r.players.get(guestId);
    r.players.delete(guestId);
    this.peers.delete(guestId);
    this.toast?.(`${p.name} s'est déconnecté du salon local`);
    this.broadcastRoom();
  }

  // -------------------------------------------------------------
  // 3. ZERO-SERVER P2P WEBRTC (OFFLINE DIRECT HOTSPOT)
  // -------------------------------------------------------------
  /**
   * Host generates an offline pairing offer ticket.
   */
  async createWebRtcHostOffer() {
    const pc = new RTCPeerConnection({ iceServers: [] });
    const guestId = 'peer_' + Math.random().toString(36).slice(2, 8);
    const dc = pc.createDataChannel('blindshot_lan', { ordered: true });

    const peerObj = { pc, dc, guestId };
    this.peers.set(guestId, peerObj);

    dc.onopen = () => {
      console.log('WebRTC LAN Host DC Open for', guestId);
    };

    dc.onclose = () => {
      this.unregisterGuest(guestId);
    };

    dc.onmessage = (e) => {
      try {
        const { ev, data } = JSON.parse(e.data);
        if (ev === 'join') {
          this.registerGuest(guestId, data, dc);
        } else if (ev === 'input') {
          this.handleGuestInput(guestId, data);
        } else if (ev === 'leave') {
          this.unregisterGuest(guestId);
        }
      } catch (err) {
        console.error('WebRTC msg parse error', err);
      }
    };

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    // Wait briefly for local candidates
    await new Promise((resolve) => {
      if (pc.iceGatheringState === 'complete') return resolve();
      const check = () => {
        if (pc.iceGatheringState === 'complete') {
          pc.removeEventListener('icegatheringstatechange', check);
          resolve();
        }
      };
      pc.addEventListener('icegatheringstatechange', check);
      setTimeout(resolve, 600); // 600ms fallback
    });

    const ticket = btoa(JSON.stringify({
      sdp: pc.localDescription.sdp,
      type: pc.localDescription.type,
      guestId,
    }));
    return { ticket, guestId, pc };
  }

  /**
   * Host applies Guest's answer ticket to seal the P2P connection.
   */
  async applyWebRtcGuestAnswer(guestId, answerTicket) {
    const peer = this.peers.get(guestId);
    if (!peer || !peer.pc) throw new Error('Hôte introuvable');
    const { sdp, type } = JSON.parse(atob(answerTicket.trim()));
    await peer.pc.setRemoteDescription(new RTCSessionDescription({ sdp, type }));
  }

  /**
   * Guest joins using Host's offer ticket and generates an answer ticket.
   */
  async joinWebRtcGuest(hostTicket, myProfile) {
    this.leave();
    this.active = true;
    this.mode = 'guest';
    this.isHost = false;
    this.transport = 'webrtc';

    const { sdp, type, guestId } = JSON.parse(atob(hostTicket.trim()));
    const pc = new RTCPeerConnection({ iceServers: [] });
    this.guestPeer = { pc, dc: null };

    return new Promise(async (resolve, reject) => {
      pc.ondatachannel = (e) => {
        const dc = e.channel;
        this.guestPeer.dc = dc;

        dc.onopen = () => {
          dc.send(JSON.stringify({ ev: 'join', data: myProfile }));
          resolve({ ok: true });
        };

        dc.onclose = () => {
          this.callbacks.onHostLost?.();
          this.leave();
        };

        dc.onmessage = (evt) => {
          try {
            const { ev, data } = JSON.parse(evt.data);
            if (ev === 'room') this.callbacks.onRoom?.(data);
            else if (ev === 'start') this.callbacks.onStart?.(data);
            else if (ev === 'phase') this.callbacks.onPhase?.(data);
            else if (ev === 'reveal') this.callbacks.onReveal?.(data);
            else if (ev === 'sync') this.callbacks.onSync?.(data);
            else if (ev === 'over') this.callbacks.onOver?.(data);
            else if (ev === 'kicked') {
              this.toast?.('Tu as été exclu du salon');
              this.leave();
            }
          } catch (err) {
            console.error('Guest parse error', err);
          }
        };
      };

      try {
        await pc.setRemoteDescription(new RTCSessionDescription({ sdp, type }));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        await new Promise((res) => {
          if (pc.iceGatheringState === 'complete') return res();
          const check = () => {
            if (pc.iceGatheringState === 'complete') {
              pc.removeEventListener('icegatheringstatechange', check);
              res();
            }
          };
          pc.addEventListener('icegatheringstatechange', check);
          setTimeout(res, 600);
        });

        const answerTicket = btoa(JSON.stringify({
          sdp: pc.localDescription.sdp,
          type: pc.localDescription.type,
          guestId,
        }));
        resolve({ answerTicket });
      } catch (err) {
        reject(err);
      }
    });
  }

  // -------------------------------------------------------------
  // 4. LOCAL IP / WEBSOCKET LAN MODE (HOTSPOT OR WI-FI ROUTER)
  // -------------------------------------------------------------
  joinByIp(ipOrUrl, profile, cb) {
    this.leave();
    this.active = true;
    this.mode = 'guest';
    this.isHost = false;
    this.transport = 'socket';

    let target = ipOrUrl.trim();
    if (!target) target = '192.168.43.1:2567';
    if (!/^https?:\/\//i.test(target)) {
      target = 'http://' + target;
    }
    // Append default port if missing
    try {
      const u = new URL(target);
      if (!u.port && !target.includes(':2567')) {
        target = `${u.protocol}//${u.hostname}:2567`;
      }
    } catch {}

    this.toast?.(`Connexion à ${target}…`);

    const sock = io(target, {
      transports: ['websocket', 'polling'],
      timeout: 5000,
      reconnectionAttempts: 2,
    });
    this.socket = sock;

    sock.on('connect', () => {
      this.toast?.('Connecté à l\'hôte local !');
      sock.emit('join', {
        code: 'SOLO', // Server will accept or join existing
        name: profile.name,
        look: profile.look,
      }, (res) => {
        if (!res?.ok) {
          // If SOLO didn't work, join with standard 4-char code or create
          sock.emit('create', { name: profile.name, look: profile.look, arena: 'neon' }, (cres) => {
            cb?.(cres);
          });
        } else {
          cb?.(res);
        }
      });
    });

    sock.on('room', (r) => { r.isLan = true; this.callbacks.onRoom?.(r); });
    sock.on('start', (p) => this.callbacks.onStart?.(p));
    sock.on('phase', (p) => this.callbacks.onPhase?.(p));
    sock.on('reveal', (p) => this.callbacks.onReveal?.(p));
    sock.on('sync', (p) => this.callbacks.onSync?.(p));
    sock.on('over', (p) => this.callbacks.onOver?.(p));
    sock.on('toast', (msg) => this.toast?.(msg));

    sock.on('disconnect', () => {
      if (this.active && this.mode === 'guest') {
        this.callbacks.onHostLost?.();
        this.leave();
      }
    });

    sock.on('connect_error', () => {
      this.toast?.(`Impossible de joindre ${target}. Vérifie l'adresse de l'hôte`);
      cb?.({ ok: false, error: 'Connexion échouée' });
    });
  }

  // -------------------------------------------------------------
  // 5. UNIFIED DISPATCH (INPUT / ACTIONS)
  // -------------------------------------------------------------
  sendInput(inputData) {
    if (!this.active) return;
    if (this.isHost) {
      this.handleHostInput(inputData);
    } else if (this.transport === 'webrtc' && this.guestPeer?.dc?.readyState === 'open') {
      try { this.guestPeer.dc.send(JSON.stringify({ ev: 'input', data: inputData })); } catch {}
    } else if (this.transport === 'socket' && this.socket?.connected) {
      this.socket.emit('input', inputData);
    }
  }

  startGame(hostLook) {
    if (!this.active || !this.isHost) return;
    if (this.transport === 'host_engine') {
      this.hostStartGame(hostLook);
    } else if (this.socket?.connected) {
      this.socket.emit('start');
    }
  }

  addBot() {
    if (!this.active || !this.isHost) return;
    if (this.transport === 'host_engine') {
      this.hostAddBot();
    } else if (this.socket?.connected) {
      this.socket.emit('bot');
    }
  }

  kick(id) {
    if (!this.active || !this.isHost) return;
    if (this.transport === 'host_engine') {
      this.hostKick(id);
    } else if (this.socket?.connected) {
      this.socket.emit('kick', { id });
    }
  }

  setArena(arenaId) {
    if (!this.active || !this.isHost) return;
    if (this.transport === 'host_engine') {
      this.hostSetArena(arenaId);
    } else if (this.socket?.connected) {
      this.socket.emit('arena', arenaId);
    }
  }

  leave() {
    if (this.isHost) {
      this.broadcastToGuests('kicked', { reason: 'L\'hôte a fermé le salon' });
      clearTimeout(this.hostEngine?.timer);
      this.hostEngine = null;
      for (const peer of this.peers.values()) {
        try { peer.dc?.close(); peer.pc?.close(); } catch {}
      }
      this.peers.clear();
    } else {
      if (this.guestPeer) {
        try { this.guestPeer.dc?.close(); this.guestPeer.pc?.close(); } catch {}
        this.guestPeer = null;
      }
    }

    if (this.socket) {
      try { this.socket.disconnect(); } catch {}
      this.socket = null;
    }

    this.active = false;
    this.mode = 'none';
    this.transport = 'none';
    this.isHost = false;
  }
}

// -------------------------------------------------------------
// 6. LAN AUTO-SCANNER UTILITY
// -------------------------------------------------------------
export async function scanLocalLan(onFound) {
  const commonIps = [
    '192.168.43.1', // Android Hotspot default gateway
    '172.20.10.1',  // iPhone Hotspot default gateway
    '127.0.0.1',    // Localhost
    '192.168.1.1',
    '192.168.1.2',
    '192.168.1.100',
    '192.168.0.1',
    '192.168.0.2',
  ];

  const results = [];
  await Promise.all(
    commonIps.map(async (ip) => {
      const url = `http://${ip}:2567/api/stats`;
      try {
        const ctrl = new AbortController();
        const timeout = setTimeout(() => ctrl.abort(), 950);
        const res = await fetch(url, { signal: ctrl.signal, mode: 'cors' });
        clearTimeout(timeout);
        if (res.ok) {
          const data = await res.json();
          const info = { ip: `${ip}:2567`, totalOnline: data.totalOnline, rooms: data.activeRoomsCount };
          results.push(info);
          onFound?.(info);
        }
      } catch {}
    })
  );
  return results;
}
