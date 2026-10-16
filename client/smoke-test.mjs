import { io } from 'socket.io-client';
const s = io('http://localhost:2567', { transports: ['websocket'] });
s.on('connect', () => {
  s.emit('create', { name: 'Test', look: {}, arena: 'vise' }, (r) => {
    console.log('created', r);
    for (let i = 0; i < 4; i++) s.emit('addBot');
    setTimeout(() => s.emit('start'), 300);
  });
});
s.on('phase', (p) => console.log('phase', p.round, 'alive', p.alive.length, 'zone', p.zone));
s.on('reveal', (r) => console.log('reveal elim', r.eliminated.length, 'zone', r.zone.toFixed(1)));
s.on('over', (o) => { console.log('over', o.winner?.name, o.ranking); process.exit(0); });
setTimeout(() => { console.log('timeout'); process.exit(1); }, 120000);
