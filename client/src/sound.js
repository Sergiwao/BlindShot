// Procedural Web Audio sound design for Blind Shot
// Distinct sounds for each weapon, grenade throw/explosion, coin purchase, weapon switch, and UI.

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.uiStep = 0;
  }

  init() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  rand(a, b) { return a + Math.random() * (b - a); }

  // Key button sound — varied marimba/wood-pop tones so every click feels fresh
  ui(kind = 'tap') {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const now = ctx.currentTime;

    const scale = [261.6, 293.7, 329.6, 392.0, 440.0, 523.3, 587.3, 659.3];
    this.uiStep = (this.uiStep + 1 + Math.floor(Math.random() * 2)) % scale.length;
    const baseFreq = scale[this.uiStep] * this.rand(0.985, 1.015);

    if (kind === 'primary') {
      [1, 1.25].forEach((mult, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = i % 2 ? 'sine' : 'triangle';
        const t0 = now + i * 0.055;
        osc.frequency.setValueAtTime(baseFreq * mult * 0.9, t0);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * mult * 1.08, t0 + 0.09);
        gain.gain.setValueAtTime(0.001, t0);
        gain.gain.linearRampToValueAtTime(0.14, t0 + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.16);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + 0.17);
      });
      return;
    }

    if (kind === 'back') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * 0.95, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.62, now + 0.09);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.11, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.11);
      return;
    }

    const osc = ctx.createOscillator();
    const over = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = Math.random() > 0.5 ? 'triangle' : 'sine';
    over.type = 'sine';
    const ratio = [1.5, 2, 2.5, 3][Math.floor(Math.random() * 4)];
    osc.frequency.setValueAtTime(baseFreq * 0.85, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.045);
    over.frequency.setValueAtTime(baseFreq * ratio, now);

    const overGain = ctx.createGain();
    overGain.gain.setValueAtTime(0.03, now);
    overGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.11, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

    osc.connect(gain);
    over.connect(overGain).connect(gain);
    gain.connect(ctx.destination);
    osc.start(now); over.start(now);
    osc.stop(now + 0.12); over.stop(now + 0.06);
  }

  // Coin / Armory purchase sound with falling coins cascade
  buy() {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const now = ctx.currentTime;
    [587.33, 880, 1174.66].forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const t0 = now + i * 0.055;
      osc.frequency.setValueAtTime(f, t0);
      gain.gain.setValueAtTime(0.001, t0);
      gain.gain.linearRampToValueAtTime(0.15, t0 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.22);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.24);
    });
    // Cascading metallic coin clinks
    for (let c = 0; c < 9; c++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      const tc = now + 0.08 + c * 0.065 + Math.random() * 0.025;
      const freq = 1480 + (c % 4) * 260 + Math.random() * 140;
      osc.frequency.setValueAtTime(freq, tc);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.18, tc + 0.04);
      g.gain.setValueAtTime(0.001, tc);
      g.gain.linearRampToValueAtTime(0.09, tc + 0.006);
      g.gain.exponentialRampToValueAtTime(0.001, tc + 0.11);
      osc.connect(g).connect(ctx.destination);
      osc.start(tc);
      osc.stop(tc + 0.12);
    }
  }

  // Tactile mechanical click-clack when switching weapons / grenade
  switchWeapon() {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const now = ctx.currentTime;
    [280, 420].forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const t0 = now + i * 0.035;
      osc.frequency.setValueAtTime(f * this.rand(0.96, 1.04), t0);
      osc.frequency.exponentialRampToValueAtTime(f * 1.35, t0 + 0.03);
      gain.gain.setValueAtTime(0.001, t0);
      gain.gain.linearRampToValueAtTime(0.13, t0 + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.045);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.05);
    });
  }

  // Countdown tick
  tick(urgent = false) {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    const f = urgent ? this.rand(680, 740) : this.rand(420, 460);
    osc.frequency.setValueAtTime(f, now);
    osc.frequency.exponentialRampToValueAtTime(f * 0.7, now + 0.06);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(urgent ? 0.12 : 0.07, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  // Round / Turn start cue
  roundStart() {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [330, 440, 554.37];
    notes.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const t0 = now + i * 0.065;
      osc.frequency.setValueAtTime(f * this.rand(0.99, 1.01), t0);
      gain.gain.setValueAtTime(0.001, t0);
      gain.gain.linearRampToValueAtTime(0.11, t0 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.22);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.24);
    });
  }

  // Weapon-specific laser sound!
  laser(delaySec = 0, weapon = 'blaster') {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const t0 = ctx.currentTime + Math.max(0, delaySec);

    if (weapon === 'duck') {
      // Funny "Quack-quack!" + laser zip
      [0, 0.11].forEach((off, i) => {
        const ts = t0 + off;
        const osc = ctx.createOscillator();
        const f1 = ctx.createBiquadFilter();
        const g = ctx.createGain();
        osc.type = 'sawtooth';
        const base = i === 0 ? 390 : 340;
        osc.frequency.setValueAtTime(base * this.rand(0.95, 1.05), ts);
        osc.frequency.exponentialRampToValueAtTime(base * 1.45, ts + 0.035);
        osc.frequency.exponentialRampToValueAtTime(base * 0.72, ts + 0.095);
        f1.type = 'bandpass';
        f1.frequency.setValueAtTime(1150, ts);
        f1.Q.value = 5.5;
        g.gain.setValueAtTime(0.001, ts);
        g.gain.linearRampToValueAtTime(0.24, ts + 0.01);
        g.gain.exponentialRampToValueAtTime(0.001, ts + 0.1);
        osc.connect(f1).connect(g).connect(ctx.destination);
        osc.start(ts);
        osc.stop(ts + 0.11);
      });
      return;
    }

    if (weapon === 'bazooka') {
      // Heavy booming cannon blast + low sub drop
      const osc = ctx.createOscillator();
      const sub = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sawtooth';
      sub.type = 'sine';
      osc.frequency.setValueAtTime(280, t0);
      osc.frequency.exponentialRampToValueAtTime(42, t0 + 0.36);
      sub.frequency.setValueAtTime(130, t0);
      sub.frequency.exponentialRampToValueAtTime(30, t0 + 0.36);
      const flt = ctx.createBiquadFilter();
      flt.type = 'lowpass';
      flt.frequency.setValueAtTime(950, t0);
      flt.frequency.exponentialRampToValueAtTime(180, t0 + 0.36);
      g.gain.setValueAtTime(0.001, t0);
      g.gain.linearRampToValueAtTime(0.26, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.38);
      osc.connect(flt); sub.connect(flt);
      flt.connect(g).connect(ctx.destination);
      osc.start(t0); sub.start(t0);
      osc.stop(t0 + 0.4); sub.stop(t0 + 0.4);
      return;
    }

    if (weapon === 'tesla') {
      // High-voltage crackling electric arc (FM modulated)
      const mod = ctx.createOscillator();
      const modG = ctx.createGain();
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      mod.type = 'square';
      mod.frequency.setValueAtTime(55, t0);
      modG.gain.setValueAtTime(480, t0);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1450, t0);
      osc.frequency.exponentialRampToValueAtTime(380, t0 + 0.28);
      mod.connect(modG).connect(osc.frequency);
      g.gain.setValueAtTime(0.001, t0);
      g.gain.linearRampToValueAtTime(0.16, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.29);
      osc.connect(g).connect(ctx.destination);
      mod.start(t0); osc.start(t0);
      mod.stop(t0 + 0.3); osc.stop(t0 + 0.3);
      return;
    }

    if (weapon === 'shark') {
      // Deep sonar ping + hydro snap
      const ping = ctx.createOscillator();
      const snap = ctx.createOscillator();
      const g = ctx.createGain();
      ping.type = 'sine';
      snap.type = 'triangle';
      ping.frequency.setValueAtTime(780, t0);
      ping.frequency.exponentialRampToValueAtTime(520, t0 + 0.26);
      snap.frequency.setValueAtTime(420, t0);
      snap.frequency.exponentialRampToValueAtTime(85, t0 + 0.16);
      g.gain.setValueAtTime(0.001, t0);
      g.gain.linearRampToValueAtTime(0.2, t0 + 0.008);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.28);
      ping.connect(g); snap.connect(g);
      g.connect(ctx.destination);
      ping.start(t0); snap.start(t0);
      ping.stop(t0 + 0.29); snap.stop(t0 + 0.18);
      return;
    }

    if (weapon === 'royal') {
      // Shimmering royal crystal chord beam
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'triangle';
        const ts = t0 + i * 0.018;
        osc.frequency.setValueAtTime(f * 1.2, ts);
        osc.frequency.exponentialRampToValueAtTime(f * 0.85, ts + 0.26);
        g.gain.setValueAtTime(0.001, ts);
        g.gain.linearRampToValueAtTime(0.09, ts + 0.01);
        g.gain.exponentialRampToValueAtTime(0.001, ts + 0.28);
        osc.connect(g).connect(ctx.destination);
        osc.start(ts);
        osc.stop(ts + 0.29);
      });
      return;
    }

    if (weapon === 'vortex') {
      // Cosmic gravity vortex: dark FM whoosh + resonant space sweep
      const osc = ctx.createOscillator();
      const mod = ctx.createOscillator();
      const modG = ctx.createGain();
      const g = ctx.createGain();
      const flt = ctx.createBiquadFilter();
      mod.type = 'sine';
      mod.frequency.setValueAtTime(32, t0);
      mod.frequency.exponentialRampToValueAtTime(140, t0 + 0.28);
      modG.gain.setValueAtTime(320, t0);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440, t0);
      osc.frequency.exponentialRampToValueAtTime(65, t0 + 0.38);
      mod.connect(modG);
      modG.connect(osc.frequency);
      flt.type = 'bandpass';
      flt.frequency.setValueAtTime(650, t0);
      flt.frequency.exponentialRampToValueAtTime(220, t0 + 0.38);
      flt.Q.value = 4.2;
      g.gain.setValueAtTime(0.001, t0);
      g.gain.linearRampToValueAtTime(0.24, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.42);
      osc.connect(flt).connect(g).connect(ctx.destination);
      mod.start(t0); osc.start(t0);
      mod.stop(t0 + 0.44); osc.stop(t0 + 0.44);
      return;
    }

    if (weapon === 'zeus') {
      // Divine triple thunderbolt: 3 micro-bursts of crackling electric snaps
      [0, 0.045, 0.09].forEach((off, idx) => {
        const ts = t0 + off;
        const osc = ctx.createOscillator();
        const noise = ctx.createOscillator();
        const flt = ctx.createBiquadFilter();
        const g = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1800 - idx * 280, ts);
        osc.frequency.exponentialRampToValueAtTime(120, ts + 0.16);
        noise.type = 'square';
        noise.frequency.setValueAtTime(220, ts);
        flt.type = 'bandpass';
        flt.frequency.setValueAtTime(2400 - idx * 300, ts);
        flt.Q.value = 6;
        g.gain.setValueAtTime(0.001, ts);
        g.gain.linearRampToValueAtTime(0.22, ts + 0.008);
        g.gain.exponentialRampToValueAtTime(0.001, ts + 0.18);
        osc.connect(flt); noise.connect(flt);
        flt.connect(g).connect(ctx.destination);
        osc.start(ts); noise.start(ts);
        osc.stop(ts + 0.2); noise.stop(ts + 0.2);
      });
      return;
    }

    if (weapon === 'orbital') {
      // Giant photon satellite strike: piercing laser drop + colossal seismic bass
      const beam = ctx.createOscillator();
      const sub = ctx.createOscillator();
      const flt = ctx.createBiquadFilter();
      const g = ctx.createGain();
      beam.type = 'sawtooth';
      beam.frequency.setValueAtTime(2200, t0);
      beam.frequency.exponentialRampToValueAtTime(180, t0 + 0.45);
      sub.type = 'triangle';
      sub.frequency.setValueAtTime(160, t0);
      sub.frequency.exponentialRampToValueAtTime(32, t0 + 0.52);
      flt.type = 'lowpass';
      flt.frequency.setValueAtTime(4500, t0);
      flt.frequency.exponentialRampToValueAtTime(350, t0 + 0.45);
      flt.Q.value = 2.5;
      g.gain.setValueAtTime(0.001, t0);
      g.gain.linearRampToValueAtTime(0.28, t0 + 0.015);
      g.gain.setValueAtTime(0.25, t0 + 0.18);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.54);
      beam.connect(flt); sub.connect(flt);
      flt.connect(g).connect(ctx.destination);
      beam.start(t0); sub.start(t0);
      beam.stop(t0 + 0.56); sub.stop(t0 + 0.56);
      return;
    }

    // Default 'blaster'
    const osc = ctx.createOscillator();
    const sub = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    sub.type = 'triangle';
    const startF = this.rand(950, 1380);
    const endF = this.rand(110, 175);
    osc.frequency.setValueAtTime(startF, t0);
    osc.frequency.exponentialRampToValueAtTime(endF, t0 + 0.22);

    sub.frequency.setValueAtTime(220, t0);
    sub.frequency.exponentialRampToValueAtTime(55, t0 + 0.18);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3200, t0);
    filter.frequency.exponentialRampToValueAtTime(450, t0 + 0.22);
    filter.Q.value = 3.5;

    gain.gain.setValueAtTime(0.001, t0);
    gain.gain.linearRampToValueAtTime(0.18, t0 + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.25);

    osc.connect(filter);
    sub.connect(filter);
    filter.connect(gain).connect(ctx.destination);
    osc.start(t0); sub.start(t0);
    osc.stop(t0 + 0.26); sub.stop(t0 + 0.22);
  }

  // Grenade lob + heavy explosion
  grenade(delaySec = 0) {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const t0 = ctx.currentTime + Math.max(0, delaySec);

    // 1. Arc whistle (0.0 -> 0.35s)
    const whistle = ctx.createOscillator();
    const wGain = ctx.createGain();
    whistle.type = 'sine';
    whistle.frequency.setValueAtTime(520, t0);
    whistle.frequency.exponentialRampToValueAtTime(760, t0 + 0.15);
    whistle.frequency.exponentialRampToValueAtTime(260, t0 + 0.34);
    wGain.gain.setValueAtTime(0.001, t0);
    wGain.gain.linearRampToValueAtTime(0.11, t0 + 0.04);
    wGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.35);
    whistle.connect(wGain).connect(ctx.destination);
    whistle.start(t0);
    whistle.stop(t0 + 0.36);

    // 2. Heavy detonation at t0 + 0.35s
    const tb = t0 + 0.35;
    const bufSize = Math.floor(ctx.sampleRate * 0.45);
    const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.14));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const nFilter = ctx.createBiquadFilter();
    nFilter.type = 'lowpass';
    nFilter.frequency.setValueAtTime(750, tb);
    nFilter.frequency.exponentialRampToValueAtTime(140, tb + 0.42);
    const nGain = ctx.createGain();
    nGain.gain.setValueAtTime(0.34, tb);
    nGain.gain.exponentialRampToValueAtTime(0.001, tb + 0.44);
    noise.connect(nFilter).connect(nGain).connect(ctx.destination);
    noise.start(tb);

    const boom = ctx.createOscillator();
    const bGain = ctx.createGain();
    boom.type = 'sine';
    boom.frequency.setValueAtTime(150, tb);
    boom.frequency.exponentialRampToValueAtTime(28, tb + 0.4);
    bGain.gain.setValueAtTime(0.35, tb);
    bGain.gain.exponentialRampToValueAtTime(0.001, tb + 0.42);
    boom.connect(bGain).connect(ctx.destination);
    boom.start(tb);
    boom.stop(tb + 0.43);
  }

  // Target hit + funny/quirky light scream ("pouf" + goofy vocal synth)
  hitAndScream(delaySec = 0) {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const t0 = ctx.currentTime + Math.max(0, delaySec);

    const bufSize = Math.floor(ctx.sampleRate * 0.22);
    const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.055));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const nFilter = ctx.createBiquadFilter();
    nFilter.type = 'bandpass';
    nFilter.frequency.setValueAtTime(this.rand(420, 680), t0);
    nFilter.Q.value = 1.4;
    const nGain = ctx.createGain();
    nGain.gain.setValueAtTime(0.24, t0);
    nGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.21);
    noise.connect(nFilter).connect(nGain).connect(ctx.destination);
    noise.start(t0);

    const thump = ctx.createOscillator();
    const tGain = ctx.createGain();
    thump.type = 'sine';
    thump.frequency.setValueAtTime(160, t0);
    thump.frequency.exponentialRampToValueAtTime(42, t0 + 0.2);
    tGain.gain.setValueAtTime(0.26, t0);
    tGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.22);
    thump.connect(tGain).connect(ctx.destination);
    thump.start(t0);
    thump.stop(t0 + 0.23);

    const style = Math.floor(Math.random() * 4);
    const vStart = t0 + 0.04;
    const carrier = ctx.createOscillator();
    const vibrato = ctx.createOscillator();
    const vibGain = ctx.createGain();
    const formant1 = ctx.createBiquadFilter();
    const formant2 = ctx.createBiquadFilter();
    const vGain = ctx.createGain();

    carrier.type = 'sawtooth';
    vibrato.frequency.value = this.rand(11, 16);
    vibGain.gain.value = this.rand(14, 28);
    vibrato.connect(vibGain).connect(carrier.frequency);

    let dur = 0.38;
    const pitchScale = this.rand(0.9, 1.22);
    if (style === 0) {
      dur = 0.42;
      carrier.frequency.setValueAtTime(340 * pitchScale, vStart);
      carrier.frequency.exponentialRampToValueAtTime(620 * pitchScale, vStart + 0.13);
      carrier.frequency.exponentialRampToValueAtTime(210 * pitchScale, vStart + dur);
    } else if (style === 1) {
      dur = 0.30;
      carrier.frequency.setValueAtTime(520 * pitchScale, vStart);
      carrier.frequency.exponentialRampToValueAtTime(180 * pitchScale, vStart + dur);
    } else if (style === 2) {
      dur = 0.36;
      carrier.frequency.setValueAtTime(400 * pitchScale, vStart);
      carrier.frequency.setValueAtTime(590 * pitchScale, vStart + 0.09);
      carrier.frequency.exponentialRampToValueAtTime(260 * pitchScale, vStart + dur);
    } else {
      dur = 0.40;
      vibGain.gain.value = 38;
      carrier.frequency.setValueAtTime(460 * pitchScale, vStart);
      carrier.frequency.exponentialRampToValueAtTime(240 * pitchScale, vStart + dur);
    }

    formant1.type = 'bandpass';
    formant1.frequency.setValueAtTime(820, vStart);
    formant1.frequency.exponentialRampToValueAtTime(460, vStart + dur);
    formant1.Q.value = 4.5;

    formant2.type = 'bandpass';
    formant2.frequency.setValueAtTime(1400, vStart);
    formant2.frequency.exponentialRampToValueAtTime(950, vStart + dur);
    formant2.Q.value = 5.0;

    vGain.gain.setValueAtTime(0.001, vStart);
    vGain.gain.linearRampToValueAtTime(0.18, vStart + 0.03);
    vGain.gain.setValueAtTime(0.16, vStart + dur * 0.65);
    vGain.gain.exponentialRampToValueAtTime(0.001, vStart + dur);

    carrier.connect(formant1);
    carrier.connect(formant2);
    formant1.connect(vGain);
    formant2.connect(vGain);
    vGain.connect(ctx.destination);

    carrier.start(vStart);
    vibrato.start(vStart);
    carrier.stop(vStart + dur + 0.02);
    vibrato.stop(vStart + dur + 0.02);
  }

  // Victory fanfare
  victory() {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const now = ctx.currentTime;
    const chord = [261.63, 329.63, 392.00, 523.25];
    chord.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const t0 = now + i * 0.08;
      osc.frequency.setValueAtTime(f, t0);
      gain.gain.setValueAtTime(0.001, t0);
      gain.gain.linearRampToValueAtTime(0.13, t0 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.45);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.48);
    });
  }

  // Intro swoosh/impact
  introWhoosh() {
    if (this.muted) return;
    const ctx = this.init();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.25);
    osc.frequency.exponentialRampToValueAtTime(88, now + 0.55);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.58);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.6);
  }

  // ---------- Procedural Lo-Fi Chill Background Music (BGM) ----------
  startBgm() {
    if (this.muted || this.bgmActive) return;
    const ctx = this.init();
    if (!ctx) return;
    this.bgmActive = true;
    this.bgmStep = 0;

    // Master BGM gain node with smooth fade-in
    this.bgmMaster = ctx.createGain();
    this.bgmMaster.gain.setValueAtTime(0.001, ctx.currentTime);
    this.bgmMaster.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 1.2);

    this.bgmFilter = ctx.createBiquadFilter();
    this.bgmFilter.type = 'lowpass';
    this.bgmFilter.frequency.value = 1100;
    this.bgmFilter.Q.value = 1.2;
    this.bgmFilter.connect(this.bgmMaster);
    this.bgmMaster.connect(ctx.destination);

    // 4 Warm Lo-Fi Chords: Cmaj7 -> Am9 -> Fmaj7 -> Gsus4
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 440.00], // Am9
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 392.00], // G
    ];

    const melodyNotes = [
      [523.25, 587.33, 659.25],
      [440.00, 523.25, 659.25],
      [349.23, 440.00, 523.25],
      [392.00, 493.88, 587.33],
    ];

    const playBar = () => {
      if (!this.bgmActive || !this.ctx) return;
      const t = this.ctx.currentTime;
      const chordIdx = this.bgmStep % chords.length;
      const chord = chords[chordIdx];
      const melody = melodyNotes[chordIdx];
      this.bgmStep++;

      // Soft sustained pad chord
      chord.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq * (1 + (Math.random() - 0.5) * 0.003), t);
        g.gain.setValueAtTime(0.001, t);
        g.gain.linearRampToValueAtTime(0.12, t + 0.15);
        g.gain.setValueAtTime(0.10, t + 1.2);
        g.gain.exponentialRampToValueAtTime(0.001, t + 1.95);
        osc.connect(g);
        g.connect(this.bgmFilter);
        osc.start(t);
        osc.stop(t + 2.0);
      });

      // Gentle melodic arpeggio / bell tones
      [0.45, 0.95, 1.4].forEach((delay, i) => {
        if (Math.random() > 0.15) {
          const mTime = t + delay;
          const osc = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          const note = melody[i % melody.length];
          osc.type = 'sine';
          osc.frequency.setValueAtTime(note, mTime);
          g.gain.setValueAtTime(0.001, mTime);
          g.gain.linearRampToValueAtTime(0.08, mTime + 0.02);
          g.gain.exponentialRampToValueAtTime(0.001, mTime + 0.55);
          osc.connect(g);
          g.connect(this.bgmFilter);
          osc.start(mTime);
          osc.stop(mTime + 0.6);
        }
      });
    };

    playBar();
    this.bgmTimer = setInterval(playBar, 1900);
  }

  stopBgm() {
    if (!this.bgmActive) return;
    this.bgmActive = false;
    clearInterval(this.bgmTimer);
    this.bgmTimer = null;
    if (this.bgmMaster && this.ctx) {
      try {
        const t = this.ctx.currentTime;
        this.bgmMaster.gain.setValueAtTime(this.bgmMaster.gain.value, t);
        this.bgmMaster.gain.linearRampToValueAtTime(0.001, t + 0.45);
        setTimeout(() => {
          this.bgmMaster?.disconnect();
          this.bgmFilter?.disconnect();
          this.bgmMaster = null;
          this.bgmFilter = null;
        }, 500);
      } catch {
        this.bgmMaster = null;
      }
    }
  }
}

export const sound = new SoundEngine();
