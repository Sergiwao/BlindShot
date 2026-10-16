import { createServer } from 'node:http';
import { existsSync, createReadStream, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Server } from 'socket.io';
import {
  ARENAS, WEAPONS, MOVE_TIME, REVEAL_TIME, SPEED, MAX_PLAYERS,
  clampToArena, computeShot, computeGrenade,
} from '../shared/game.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APK_PATH = resolve(__dirname, '..', 'BlindShot.apk');
const PORT = process.env.PORT || 2567;

const rooms = new Map();
const sessions = new Map(); // socket.id -> { id, name, weapon, screen, connectedAt, ip }

const BOT_NAMES = ['Zappy', 'Bzzt', 'Pixel', 'Nova', 'Kiwi', 'Bolt', 'Rico', 'Mochi'];
const COLORS = ['#e8603c', '#3d7fd9', '#e6b52e', '#4fa36b', '#8a5cc7', '#2fa6a0'];
const WEAPON_IDS = Object.keys(WEAPONS);

function getLiveStats() {
  const users = [];
  let playingCount = 0;
  let inLobbyCount = 0;
  let inMenuCount = 0;

  for (const s of sessions.values()) {
    const room = s.roomCode ? rooms.get(s.roomCode) : null;
    const rp = room?.players.get(s.id);
    let status = 'Au menu';
    let stateKey = 'menu';

    if (room) {
      if (room.state === 'playing') {
        status = rp?.alive === false ? 'En partie (Spectateur)' : `En pleine partie (Manche ${room.round})`;
        stateKey = 'playing';
        playingCount++;
      } else {
        status = 'Dans un salon';
        stateKey = 'lobby';
        inLobbyCount++;
      }
    } else if (s.screen === 'lhud') {
      status = 'En partie (Mode local)';
      stateKey = 'playing';
      playingCount++;
    } else if (s.screen === 'armory') {
      status = 'Dans l\'Armurerie';
      inMenuCount++;
    } else if (s.screen === 'custom') {
      status = 'En personnalisation';
      inMenuCount++;
    } else {
      inMenuCount++;
    }

    const wId = rp?.look?.weapon || s.weapon || 'blaster';
    users.push({
      id: s.id.slice(0, 6),
      name: rp?.name || s.name || 'Sans pseudo',
      status,
      stateKey,
      roomCode: room ? room.code : '—',
      arenaName: room ? room.arena.name : '—',
      weaponName: WEAPONS[wId]?.name || 'Blaster Classique',
      kills: rp ? rp.kills : 0,
      connectedAt: s.connectedAt,
    });
  }

  const activeRooms = [...rooms.values()].map((r) => {
    const plist = [...r.players.values()];
    return {
      code: r.code,
      arena: r.arena.name,
      state: r.state === 'playing' ? `En jeu (Manche ${r.round})` : 'En attente au salon',
      stateRaw: r.state,
      humans: plist.filter((p) => !p.bot).length,
      bots: plist.filter((p) => p.bot).length,
      players: plist.map((p) => ({
        name: p.name,
        bot: p.bot,
        alive: p.alive,
        kills: p.kills,
        weapon: WEAPONS[p.look?.weapon]?.name || 'Blaster',
      })),
    };
  });

  return {
    timestamp: Date.now(),
    totalOnline: sessions.size,
    playingCount,
    inLobbyCount,
    inMenuCount,
    activeRoomsCount: activeRooms.length,
    users,
    activeRooms,
    apkAvailable: existsSync(APK_PATH),
  };
}

function logBackendStatus(eventLabel = '') {
  const st = getLiveStats();
  const names = st.users.map((u) => `${u.name} [${u.status}]`).join(', ') || 'Aucun joueur';
  console.log(
    `[LIVE${eventLabel ? ' · ' + eventLabel : ''}] Connectés: ${st.totalOnline} | En jeu: ${st.playingCount} | Salons: ${st.activeRoomsCount} -> ${names}`
  );
}

function broadcastAdmin(eventLabel = '') {
  const stats = getLiveStats();
  io?.to('admins').emit('admin:stats', stats);
  if (eventLabel) logBackendStatus(eventLabel);
}

function renderAdminHtml() {
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blind Shot — Backend Monitor (Temps Réel)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #141722; --card: #1d2231; --line: #2e364d;
      --text: #f4efe6; --muted: #9aa3b8; --accent: #e8603c;
      --gold: #ffb340; --green: #4fa36b; --blue: #4c8bf5;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0; padding: 24px; background: var(--bg); color: var(--text);
      font-family: 'Manrope', system-ui, sans-serif;
    }
    .wrap { max-width: 1080px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; }
    header {
      display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
      gap: 14px; padding: 18px 22px; background: var(--card);
      border: 1.5px solid var(--line); border-radius: 16px;
    }
    .brand h1 { margin: 0; font: 800 26px 'Bricolage Grotesque'; letter-spacing: -.5px; }
    .brand h1 span { color: var(--accent); margin-left: 4px; }
    .brand p { margin: 4px 0 0; font-size: 13px; color: var(--muted); font-weight: 600; }
    .live-pill {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 8px 14px; border-radius: 12px; background: rgba(79,163,107,.16);
      border: 1.5px solid var(--green); color: #7ce09d; font-weight: 800; font-size: 13px;
    }
    .dot { width: 10px; height: 10px; border-radius: 50%; background: var(--green); }
    .kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; }
    .kpi {
      padding: 18px 20px; background: var(--card); border: 1.5px solid var(--line);
      border-radius: 16px; display: flex; flex-direction: column; gap: 6px;
    }
    .kpi span { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: var(--muted); }
    .kpi b { font: 800 38px 'Bricolage Grotesque'; color: var(--text); }
    .kpi.accent b { color: var(--gold); }
    .kpi.green b { color: #7ce09d; }
    .card {
      padding: 20px; background: var(--card); border: 1.5px solid var(--line);
      border-radius: 16px;
    }
    .card h2 { margin: 0 0 14px; font: 800 20px 'Bricolage Grotesque'; }
    table { width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; }
    th {
      padding: 10px 12px; color: var(--muted); font-size: 11px;
      text-transform: uppercase; letter-spacing: 1px; border-bottom: 1.5px solid var(--line);
    }
    td { padding: 12px; border-bottom: 1px solid rgba(255,255,255,.06); font-weight: 600; }
    .badge {
      display: inline-block; padding: 4px 9px; border-radius: 7px;
      font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .6px;
    }
    .badge.playing { background: rgba(232,96,60,.2); color: #ff8b6b; border: 1px solid var(--accent); }
    .badge.lobby { background: rgba(255,179,64,.18); color: var(--gold); border: 1px solid var(--gold); }
    .badge.menu { background: rgba(76,139,245,.18); color: #8ab4ff; border: 1px solid var(--blue); }
    .empty { color: var(--muted); text-align: center; padding: 24px; font-weight: 600; }
    .rooms-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
    .room-box {
      padding: 14px; border-radius: 12px; background: #161a26; border: 1.5px solid var(--line);
    }
    .room-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .room-code { font: 800 20px 'Bricolage Grotesque'; color: var(--gold); letter-spacing: 2px; }
    .apk-btn {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--accent); color: #fff; text-decoration: none;
      padding: 10px 16px; border-radius: 11px; font-weight: 800; font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="brand">
        <h1>BLIND<span>SHOT</span> — Console Backend Temps Réel</h1>
        <p>Développé par Serge le dev · Suivi en direct des joueurs connectés et parties en cours</p>
      </div>
      <div style="display:flex;gap:10px;align-items:center">
        <a class="apk-btn" href="/BlindShot.apk" download>Télécharger BlindShot.apk</a>
        <div class="live-pill"><span class="dot"></span> EN DIRECT</div>
      </div>
    </header>

    <section class="kpis">
      <div class="kpi green">
        <span>Joueurs connectés</span>
        <b id="k-online">0</b>
      </div>
      <div class="kpi accent">
        <span>En pleine partie</span>
        <b id="k-playing">0</b>
      </div>
      <div class="kpi">
        <span>Au menu / salon</span>
        <b id="k-menu">0</b>
      </div>
      <div class="kpi">
        <span>Salons actifs</span>
        <b id="k-rooms">0</b>
      </div>
    </section>

    <section class="card">
      <h2>Joueurs connectés en temps réel</h2>
      <div style="overflow-x:auto">
        <table>
          <thead>
            <tr>
              <th>Pseudo</th>
              <th>Statut actuel</th>
              <th>Salon</th>
              <th>Arène</th>
              <th>Arme équipée</th>
              <th>Éliminations</th>
              <th>Connecté depuis</th>
            </tr>
          </thead>
          <tbody id="tb-users">
            <tr><td colspan="7" class="empty">Aucun joueur connecté pour le moment</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="card">
      <h2>Salons & Parties en cours</h2>
      <div id="rooms-list" class="rooms-grid">
        <div class="empty">Aucun salon actif</div>
      </div>
    </section>
  </div>

  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io({ query: { role: 'admin' } });
    const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
    function fmtSince(ts) {
      const sec = Math.max(0, Math.floor((Date.now() - ts) / 1000));
      if (sec < 60) return sec + ' s';
      return Math.floor(sec / 60) + ' min ' + (sec % 60) + ' s';
    }
    let lastStats = null;
    function render(st) {
      lastStats = st;
      document.getElementById('k-online').textContent = st.totalOnline;
      document.getElementById('k-playing').textContent = st.playingCount;
      document.getElementById('k-menu').textContent = st.inMenuCount + st.inLobbyCount;
      document.getElementById('k-rooms').textContent = st.activeRoomsCount;

      const tb = document.getElementById('tb-users');
      if (!st.users.length) {
        tb.innerHTML = '<tr><td colspan="7" class="empty">Aucun joueur connecté pour le moment</td></tr>';
      } else {
        tb.innerHTML = st.users.map((u) => \`
          <tr>
            <td><b>\${esc(u.name)}</b> <small style="color:#9aa3b8">(#\${esc(u.id)})</small></td>
            <td><span class="badge \${esc(u.stateKey)}">\${esc(u.status)}</span></td>
            <td><b>\${esc(u.roomCode)}</b></td>
            <td>\${esc(u.arenaName)}</td>
            <td>\${esc(u.weaponName)}</td>
            <td>\${u.kills}</td>
            <td>\${fmtSince(u.connectedAt)}</td>
          </tr>
        \`).join('');
      }

      const rl = document.getElementById('rooms-list');
      if (!st.activeRooms.length) {
        rl.innerHTML = '<div class="empty">Aucun salon actif</div>';
      } else {
        rl.innerHTML = st.activeRooms.map((r) => \`
          <div class="room-box">
            <div class="room-head">
              <span class="room-code">\${esc(r.code)}</span>
              <span class="badge \${r.stateRaw === 'playing' ? 'playing' : 'lobby'}">\${esc(r.state)}</span>
            </div>
            <div style="font-size:13px;color:#9aa3b8;margin-bottom:8px">Arène : <b style="color:#f4efe6">\${esc(r.arena)}</b> · \${r.humans} joueur(s), \${r.bots} bot(s)</div>
            <div style="font-size:13px;line-height:1.6">
              \${r.players.map((p) => \`<div>• <b>\${esc(p.name)}</b> \${p.bot ? '(Bot)' : ''} — \${esc(p.weapon)} · \${p.kills} élim.</div>\`).join('')}
            </div>
          </div>
        \`).join('');
      }
    }
    socket.on('admin:stats', render);
    setInterval(() => { if (lastStats) render(lastStats); }, 1000);
  </script>
</body>
</html>`;
}

const DIST_DIR = resolve(__dirname, '..', 'client', 'dist');
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
};

const http = createServer((req, res) => {
  const url = (req.url || '/').split('?')[0];
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (url === '/api/stats' || url === '/status') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(getLiveStats(), null, 2));
    return;
  }

  if (url === '/admin' || url === '/dashboard') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderAdminHtml());
    return;
  }

  if (url === '/BlindShot.apk' && existsSync(APK_PATH)) {
    const stat = statSync(APK_PATH);
    res.writeHead(200, {
      'Content-Type': 'application/vnd.android.package-archive',
      'Content-Disposition': 'attachment; filename="BlindShot.apk"',
      'Content-Length': stat.size,
    });
    createReadStream(APK_PATH).pipe(res);
    return;
  }

  // Serve compiled web client (client/dist) so Render URL also hosts the game directly
  const relPath = url === '/' ? 'index.html' : url.replace(/^\/+/, '');
  if (!relPath.includes('..')) {
    const filePath = resolve(DIST_DIR, relPath);
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      const ext = filePath.slice(filePath.lastIndexOf('.')).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      createReadStream(filePath).pipe(res);
      return;
    }
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Blind Shot server OK — Console temps réel disponible sur /admin');
});

const io = new Server(http, { cors: { origin: '*' } });

function makeCode() {
  const L = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let c;
  do { c = Array.from({ length: 4 }, () => L[Math.floor(Math.random() * L.length)]).join(''); }
  while (rooms.has(c));
  return c;
}

function sanitizeLook(look = {}) {
  const hex = (v, d) => (typeof v === 'string' && /^#[0-9a-f]{6}$/i.test(v) ? v : d);
  return {
    body: hex(look.body, '#e8603c'),
    laser: hex(look.laser, '#3d7fd9'),
    hat: ['none', 'cap', 'crown', 'cone', 'halo', 'horns'].includes(look.hat) ? look.hat : 'none',
    face: ['happy', 'cool', 'angry', 'cute'].includes(look.face) ? look.face : 'happy',
    weapon: WEAPON_IDS.includes(look.weapon) ? look.weapon : 'blaster',
  };
}

function publicPlayer(p) {
  return { id: p.id, name: p.name, look: p.look, alive: p.alive, bot: p.bot, kills: p.kills };
}

function roomInfo(room) {
  return {
    code: room.code,
    arena: room.arena.id,
    host: room.host,
    state: room.state,
    players: [...room.players.values()].map(publicPlayer),
  };
}

function broadcastRoom(room) {
  io.to(room.code).emit('room', roomInfo(room));
  broadcastAdmin();
}

function spawnPlayers(room) {
  const list = [...room.players.values()];
  const r = room.arena.shape === 'circle' ? room.zone * 0.7 : room.zone * 0.75;
  const off = Math.random() * Math.PI * 2;
  list.forEach((p, i) => {
    const a = off + (i / list.length) * Math.PI * 2;
    const [x, z] = clampToArena(room.arena, room.zone, Math.cos(a) * r, Math.sin(a) * r);
    p.x = x; p.z = z; p.angle = Math.atan2(-z, -x);
    p.alive = true; p.kills = 0; p.mode = 'weapon';
  });
}

function startGame(room) {
  room.state = 'playing';
  room.round = 0;
  room.zone = room.arena.size;
  spawnPlayers(room);
  for (const p of room.players.values()) {
    if (!p.bot) io.to(p.id).emit('start', { you: { x: p.x, z: p.z, angle: p.angle }, zone: room.zone });
  }
  broadcastRoom(room);
  broadcastAdmin(`Partie lancée (${room.code})`);
  room.timer = setTimeout(() => movePhase(room), 1500);
}

function alivePlayers(room) { return [...room.players.values()].filter((p) => p.alive); }

function movePhase(room) {
  if (!rooms.has(room.code)) return;
  room.round++;
  room.phase = 'move';
  room.phaseEnd = Date.now() + MOVE_TIME;
  for (const p of alivePlayers(room)) {
    p.lastT = Date.now();
    p.mode = 'weapon';
    if (p.bot) planBot(room, p);
  }
  io.to(room.code).emit('phase', {
    phase: 'move', round: room.round, duration: MOVE_TIME, zone: room.zone,
    alive: alivePlayers(room).map((p) => p.id),
  });
  broadcastAdmin();
  room.timer = setTimeout(() => revealPhase(room), MOVE_TIME + 150);
}

function planBot(room, b) {
  const others = alivePlayers(room).filter((p) => p !== b);
  const a = Math.random() * Math.PI * 2;
  const dist = Math.random() * SPEED * 4;
  b.target = clampToArena(room.arena, room.zone, b.x + Math.cos(a) * dist, b.z + Math.sin(a) * dist);
  const t = others[Math.floor(Math.random() * others.length)];
  if (t) {
    const gx = t.x + (Math.random() - 0.5) * 6, gz = t.z + (Math.random() - 0.5) * 6;
    b.aimAt = [gx, gz];
  }
}

function finishBot(b) {
  [b.x, b.z] = b.target;
  if (b.aimAt) b.angle = Math.atan2(b.aimAt[1] - b.z, b.aimAt[0] - b.x);
}

function revealPhase(room) {
  if (!rooms.has(room.code)) return;
  room.phase = 'reveal';
  const alive = alivePlayers(room);
  for (const b of alive) if (b.bot) finishBot(b);

  const shots = [];
  const hitIds = new Set();
  for (const p of alive) {
    if (p.mode === 'grenade') {
      const g = computeGrenade(room.arena, room.zone, p, alive);
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
      const s = computeShot(room.arena, room.zone, p, alive);
      if (s.hit) { hitIds.add(s.hit.id); p.kills++; }
      shots.push({
        id: p.id, type: 'laser', weapon: p.look.weapon || 'blaster',
        x: s.x, z: s.z, ex: s.ex, ez: s.ez,
        hits: s.hit ? [s.hit.id] : [], hit: s.hit ? s.hit.id : null,
      });
    }
  }

  for (const id of hitIds) room.players.get(id).alive = false;
  const eliminated = [...hitIds];
  const survivors = alivePlayers(room);

  let newZone = room.zone;
  if (room.arena.shape === 'circle' && room.arena.shrinkStep && eliminated.length) {
    newZone = Math.max(room.arena.minSize, room.zone - room.arena.shrinkStep * eliminated.length);
  }

  io.to(room.code).emit('reveal', {
    round: room.round,
    players: alive.map((p) => ({
      id: p.id, x: p.x, z: p.z, angle: p.angle,
      weapon: p.look.weapon || 'blaster',
    })),
    shots, eliminated, zone: newZone,
  });
  broadcastAdmin();

  room.zone = newZone;
  for (const p of survivors) [p.x, p.z] = clampToArena(room.arena, room.zone, p.x, p.z);

  room.timer = setTimeout(() => {
    if (!rooms.has(room.code)) return;
    if (survivors.length <= 1) return endGame(room, survivors[0] || null, eliminated);
    for (const p of survivors) {
      if (!p.bot) io.to(p.id).emit('sync', { x: p.x, z: p.z, angle: p.angle });
    }
    movePhase(room);
  }, REVEAL_TIME);
}

function endGame(room, winner, lastDead) {
  room.state = 'lobby';
  room.phase = null;
  const ranking = [...room.players.values()]
    .sort((a, b) => b.kills - a.kills)
    .map((p) => ({ id: p.id, name: p.name, kills: p.kills }));
  io.to(room.code).emit('over', {
    winner: winner ? publicPlayer(winner) : null,
    draw: !winner ? lastDead.map((id) => room.players.get(id)?.name).filter(Boolean) : [],
    ranking,
  });
  for (const p of room.players.values()) p.alive = true;
  broadcastRoom(room);
  broadcastAdmin(`Fin de partie (${room.code})`);
}

function leave(socket) {
  const code = socket.data.room;
  const s = sessions.get(socket.id);
  if (s) s.roomCode = null;
  if (!code) return;
  const room = rooms.get(code);
  socket.leave(code);
  socket.data.room = null;
  if (!room) return;
  room.players.delete(socket.id);
  const humans = [...room.players.values()].filter((p) => !p.bot);
  if (!humans.length) {
    clearTimeout(room.timer);
    rooms.delete(code);
    broadcastAdmin(`Salon ${code} fermé`);
    return;
  }
  if (room.host === socket.id) room.host = humans[0].id;
  if (room.state === 'playing' && alivePlayers(room).length <= 1) {
    clearTimeout(room.timer);
    endGame(room, alivePlayers(room)[0] || null, []);
  }
  broadcastRoom(room);
}

io.on('connection', (socket) => {
  const role = socket.handshake.query?.role;
  if (role === 'admin') {
    socket.join('admins');
    socket.emit('admin:stats', getLiveStats());
    return;
  }

  sessions.set(socket.id, {
    id: socket.id,
    name: 'Joueur',
    weapon: 'blaster',
    screen: 'menu',
    roomCode: null,
    connectedAt: Date.now(),
  });
  broadcastAdmin('Connexion joueur');

  socket.on('presence', ({ name, weapon, screen } = {}) => {
    const s = sessions.get(socket.id);
    if (!s) return;
    if (name) s.name = String(name).replace(/[<>]/g, '').slice(0, 14) || 'Joueur';
    if (WEAPON_IDS.includes(weapon)) s.weapon = weapon;
    if (screen) s.screen = String(screen);
    broadcastAdmin();
  });

  socket.on('create', ({ name, look, arena }, cb) => {
    leave(socket);
    const code = makeCode();
    const room = {
      code, host: socket.id, state: 'lobby',
      arena: ARENAS[arena] || ARENAS.neon,
      players: new Map(), zone: 0, round: 0,
    };
    room.zone = room.arena.size;
    rooms.set(code, room);
    joinRoom(socket, room, name, look);
    broadcastAdmin(`Salon ${code} créé par ${name || 'Joueur'}`);
    cb?.({ ok: true, code });
  });

  socket.on('join', ({ code, name, look }, cb) => {
    const room = rooms.get(String(code || '').toUpperCase().trim());
    if (!room) return cb?.({ ok: false, error: 'Salon introuvable' });
    if (room.state !== 'lobby') return cb?.({ ok: false, error: 'Partie déjà en cours' });
    if (room.players.size >= MAX_PLAYERS) return cb?.({ ok: false, error: 'Salon plein (6 max)' });
    leave(socket);
    joinRoom(socket, room, name, look);
    broadcastAdmin(`${name || 'Joueur'} rejoint ${room.code}`);
    cb?.({ ok: true, code: room.code });
  });

  socket.on('addBot', () => {
    const room = rooms.get(socket.data.room);
    if (!room || room.host !== socket.id || room.state !== 'lobby' || room.players.size >= MAX_PLAYERS) return;
    const id = 'bot_' + Math.random().toString(36).slice(2, 8);
    const used = new Set([...room.players.values()].map((p) => p.name));
    const name = BOT_NAMES.find((n) => !used.has(n)) || 'Bot';
    room.players.set(id, {
      id, name, bot: true, alive: true, kills: 0, x: 0, z: 0, angle: 0, mode: 'weapon',
      look: sanitizeLook({
        body: COLORS[Math.floor(Math.random() * COLORS.length)],
        laser: COLORS[Math.floor(Math.random() * COLORS.length)],
        hat: ['none', 'cap', 'crown', 'cone', 'halo', 'horns'][Math.floor(Math.random() * 6)],
        face: ['happy', 'cool', 'angry', 'cute'][Math.floor(Math.random() * 4)],
        weapon: WEAPON_IDS[Math.floor(Math.random() * WEAPON_IDS.length)],
      }),
    });
    broadcastRoom(room);
  });

  socket.on('kick', (id) => {
    const room = rooms.get(socket.data.room);
    if (!room || room.host !== socket.id || room.state !== 'lobby') return;
    const p = room.players.get(id);
    if (p?.bot) { room.players.delete(id); broadcastRoom(room); }
  });

  socket.on('arena', (arenaId) => {
    const room = rooms.get(socket.data.room);
    if (!room || room.host !== socket.id || room.state !== 'lobby' || !ARENAS[arenaId]) return;
    room.arena = ARENAS[arenaId];
    room.zone = room.arena.size;
    broadcastRoom(room);
  });

  socket.on('start', () => {
    const room = rooms.get(socket.data.room);
    if (!room || room.host !== socket.id || room.state !== 'lobby') return;
    if (room.players.size < 2) return socket.emit('toast', 'Il faut au moins 2 joueurs (ajoute un bot !)');
    startGame(room);
  });

  socket.on('input', ({ x, z, angle, mode, weapon }) => {
    const room = rooms.get(socket.data.room);
    if (!room || room.phase !== 'move') return;
    const p = room.players.get(socket.id);
    if (!p || !p.alive || ![x, z, angle].every(Number.isFinite)) return;
    const now = Date.now();
    const dt = Math.max(0.05, (now - p.lastT) / 1000);
    p.lastT = now;
    let dx = x - p.x, dz = z - p.z;
    const d = Math.hypot(dx, dz), maxD = SPEED * dt * 1.35 + 0.3;
    if (d > maxD) { dx *= maxD / d; dz *= maxD / d; }
    [p.x, p.z] = clampToArena(room.arena, room.zone, p.x + dx, p.z + dz);
    p.angle = angle;
    if (mode === 'grenade' || mode === 'weapon') p.mode = mode;
    if (WEAPON_IDS.includes(weapon)) {
      p.look.weapon = weapon;
      const s = sessions.get(socket.id);
      if (s) s.weapon = weapon;
    }
  });

  socket.on('leave', () => leave(socket));
  socket.on('disconnect', () => {
    leave(socket);
    const s = sessions.get(socket.id);
    const nm = s?.name || 'Joueur';
    sessions.delete(socket.id);
    broadcastAdmin(`Déconnexion (${nm})`);
  });
});

function joinRoom(socket, room, name, look) {
  const clean = String(name || 'Joueur').replace(/[<>]/g, '').slice(0, 14) || 'Joueur';
  const cleanLook = sanitizeLook(look);
  room.players.set(socket.id, {
    id: socket.id, name: clean, look: cleanLook, bot: false,
    alive: true, kills: 0, x: 0, z: 0, angle: 0, mode: 'weapon', lastT: Date.now(),
  });
  socket.join(room.code);
  socket.data.room = room.code;
  const s = sessions.get(socket.id);
  if (s) {
    s.name = clean;
    s.weapon = cleanLook.weapon;
    s.roomCode = room.code;
  }
  broadcastRoom(room);
}

http.listen(PORT, '0.0.0.0', () => {
  console.log(`Blind Shot server on :${PORT}`);
  console.log(`Console Backend Temps Réel : http://localhost:${PORT}/admin`);
});
