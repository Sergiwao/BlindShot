const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const { execSync } = require('child_process');

// ============================================================================
// 1. PNG Icon Generator (Blind Shot Low-Poly Shield + Split Visor + Laser Slash)
// ============================================================================
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const tp = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([tp, data])), 0);
  return Buffer.concat([len, tp, data, crcBuf]);
}

function pointInPoly(px, py, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1];
    const xj = poly[j][0], yj = poly[j][1];
    const intersect = ((yi > py) !== (yj > py)) && (px < ((xj - xi) * (py - yi)) / (yj - yi + 1e-9) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function generateBlindShotPng(size) {
  const raw = Buffer.alloc(size * (size * 4 + 1));
  const sc = (pts) => pts.map(([x, y]) => [(x / 256) * size, (y / 256) * size]);

  // Layered low-poly polygons matching client/public/logo.svg
  const layers = [
    { poly: sc([[72,8],[184,8],[248,72],[248,184],[184,248],[72,248],[8,184],[8,72]]), c: [0xff, 0xb3, 0x40] },
    { poly: sc([[78,18],[178,18],[238,78],[238,178],[178,238],[78,238],[18,178],[18,78]]), c: [0x14, 0x18, 0x22] },
    { poly: sc([[78,18],[178,18],[238,78],[128,128],[18,78]]), c: [0x23, 0x29, 0x3a] },
    { poly: sc([[238,78],[238,178],[178,238],[128,128]]), c: [0x1b, 0x20, 0x2e] },

    // Low-Poly Smiling Head (Faceted Golden-Amber Sphere)
    { poly: sc([[96,42],[160,42],[204,76],[214,132],[194,186],[156,214],[100,214],[62,186],[42,132],[52,76]]), c: [0xf5, 0x9e, 0x24] },
    { poly: sc([[96,42],[160,42],[204,76],[128,112],[52,76]]), c: [0xff, 0xca, 0x52] },
    { poly: sc([[52,76],[128,112],[42,132]]), c: [0xff, 0xb8, 0x38] },
    { poly: sc([[204,76],[214,132],[128,112]]), c: [0xf0, 0x96, 0x1e] },
    { poly: sc([[42,132],[128,112],[128,172],[62,186]]), c: [0xf5, 0x9e, 0x24] },
    { poly: sc([[214,132],[194,186],[128,172],[128,112]]), c: [0xe0, 0x82, 0x14] },
    { poly: sc([[62,186],[128,172],[194,186],[156,214],[100,214]]), c: [0xcf, 0x71, 0x0e] },

    // Cool Sunglasses
    { poly: sc([[38,94],[218,94],[214,106],[42,106]]), c: [0x14, 0x18, 0x22] },
    { poly: sc([[50,96],[120,96],[114,140],[60,140],[48,124]]), c: [0x14, 0x18, 0x22] },
    { poly: sc([[136,96],[206,96],[208,124],[196,140],[142,140]]), c: [0x14, 0x18, 0x22] },
    { poly: sc([[116,96],[140,96],[136,112],[120,112]]), c: [0x14, 0x18, 0x22] },
    // Lens Glints
    { poly: sc([[64,102],[80,102],[68,132],[56,132]]), c: [0xfb, 0xf7, 0xf0] },
    { poly: sc([[86,102],[94,102],[82,132],[74,132]]), c: [0xe8, 0x60, 0x3c] },
    { poly: sc([[150,102],[166,102],[154,132],[142,132]]), c: [0xfb, 0xf7, 0xf0] },
    { poly: sc([[172,102],[180,102],[168,132],[160,132]]), c: [0xe8, 0x60, 0x3c] },

    // Confident Smile
    { poly: sc([[80,156],[176,156],[164,186],[128,194],[92,186]]), c: [0x14, 0x18, 0x22] },
    { poly: sc([[86,160],[170,160],[162,174],[94,174]]), c: [0xfb, 0xf7, 0xf0] },
    { poly: sc([[104,178],[152,178],[146,186],[128,190],[110,186]]), c: [0xe8, 0x60, 0x3c] },
  ];

  for (let y = 0; y < size; y++) {
    const rowOff = y * (size * 4 + 1);
    raw[rowOff] = 0;
    for (let x = 0; x < size; x++) {
      const pOff = rowOff + 1 + x * 4;
      const px = x + 0.5, py = y + 0.5;
      let r = 0, g = 0, b = 0, a = 0;
      if (pointInPoly(px, py, layers[0].poly)) {
        a = 255;
        for (const layer of layers) {
          if (pointInPoly(px, py, layer.poly)) {
            [r, g, b] = layer.c;
          }
        }
      }
      raw[pOff] = r; raw[pOff + 1] = g; raw[pOff + 2] = b; raw[pOff + 3] = a;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', idat),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

// ============================================================================
// 2. Binary AndroidManifest.xml (AXML) Builder — Targets Android 14 (SDK 34)
// ============================================================================
function buildAxmlStringPool(strings, resourceIds = []) {
  const count = strings.length;
  const offsets = [];
  const dataParts = [];
  let curOffset = 0;
  for (const s of strings) {
    offsets.push(curOffset);
    const lenBuf = Buffer.alloc(2);
    lenBuf.writeUInt16LE(s.length, 0);
    const strBuf = Buffer.from(s + '\0', 'utf16le');
    const chunk = Buffer.concat([lenBuf, strBuf]);
    dataParts.push(chunk);
    curOffset += chunk.length;
  }
  while (curOffset % 4 !== 0) {
    dataParts.push(Buffer.from([0]));
    curOffset += 1;
  }
  const stringsStart = 28 + count * 4;
  const chunkSize = stringsStart + curOffset;
  const header = Buffer.alloc(28);
  header.writeUInt16LE(0x0001, 0);
  header.writeUInt16LE(28, 2);
  header.writeUInt32LE(chunkSize, 4);
  header.writeUInt32LE(count, 8);
  header.writeUInt32LE(0, 12);
  header.writeUInt32LE(0, 16);
  header.writeUInt32LE(stringsStart, 20);
  header.writeUInt32LE(0, 24);

  const offBuf = Buffer.alloc(count * 4);
  offsets.forEach((o, i) => offBuf.writeUInt32LE(o, i * 4));
  const poolChunk = Buffer.concat([header, offBuf, ...dataParts]);

  if (!resourceIds.length) return poolChunk;
  const resSize = 8 + resourceIds.length * 4;
  const resChunk = Buffer.alloc(resSize);
  resChunk.writeUInt16LE(0x0180, 0);
  resChunk.writeUInt16LE(8, 2);
  resChunk.writeUInt32LE(resSize, 4);
  resourceIds.forEach((id, i) => resChunk.writeUInt32LE(id >>> 0, 8 + i * 4));
  return Buffer.concat([poolChunk, resChunk]);
}

function buildAndroidManifestAxml() {
  // Strictly sorted by Android resource ID ascending!
  const attrDefs = [
    ['theme', 0x01010000],
    ['label', 0x01010001],
    ['icon', 0x01010002],
    ['name', 0x01010003],
    ['exported', 0x01010010],
    ['configChanges', 0x0101001f],
    ['minSdkVersion', 0x0101020c],
    ['versionCode', 0x0101021b],
    ['versionName', 0x0101021c],
    ['targetSdkVersion', 0x01010270],
    ['hardwareAccelerated', 0x010102d3],
    ['usesCleartextTraffic', 0x010104ec],
  ];
  const otherStrings = [
    'package',
    'android',
    'http://schemas.android.com/apk/res/android',
    'manifest',
    'com.sergeledev.blindshot',
    '1.1.0',
    'uses-sdk',
    'uses-permission',
    'android.permission.INTERNET',
    'android.permission.VIBRATE',
    'application',
    'Blind Shot',
    'activity',
    'com.sergeledev.blindshot.MainActivity',
    'intent-filter',
    'action',
    'android.intent.action.MAIN',
    'category',
    'android.intent.category.LAUNCHER',
  ];

  const allStrings = [...attrDefs.map((a) => a[0]), ...otherStrings];
  const resIds = attrDefs.map((a) => a[1]);
  const sIdx = (s) => {
    const i = allStrings.indexOf(s);
    if (i < 0) throw new Error('Missing string in pool: ' + s);
    return i;
  };

  const NS_ANDROID = sIdx('http://schemas.android.com/apk/res/android');
  const PFX_ANDROID = sIdx('android');
  const NO_NS = 0xffffffff;

  function startNamespace(prefix, uri, line = 1) {
    const b = Buffer.alloc(24);
    b.writeUInt16LE(0x0100, 0); b.writeUInt16LE(16, 2); b.writeUInt32LE(24, 4);
    b.writeUInt32LE(line, 8); b.writeUInt32LE(0xffffffff, 12);
    b.writeUInt32LE(prefix, 16); b.writeUInt32LE(uri, 20);
    return b;
  }
  function endNamespace(prefix, uri, line = 1) {
    const b = Buffer.alloc(24);
    b.writeUInt16LE(0x0101, 0); b.writeUInt16LE(16, 2); b.writeUInt32LE(24, 4);
    b.writeUInt32LE(line, 8); b.writeUInt32LE(0xffffffff, 12);
    b.writeUInt32LE(prefix, 16); b.writeUInt32LE(uri, 20);
    return b;
  }
  function attrStr(ns, nameStr, valStr) {
    const b = Buffer.alloc(20);
    const vs = sIdx(valStr);
    b.writeUInt32LE(ns >>> 0, 0);
    b.writeUInt32LE(sIdx(nameStr), 4);
    b.writeUInt32LE(vs, 8);
    b.writeUInt16LE(8, 12);
    b[15] = 0x03;
    b.writeUInt32LE(vs, 16);
    return b;
  }
  function attrInt(ns, nameStr, val, type = 0x10) {
    const b = Buffer.alloc(20);
    b.writeUInt32LE(ns >>> 0, 0);
    b.writeUInt32LE(sIdx(nameStr), 4);
    b.writeUInt32LE(0xffffffff, 8);
    b.writeUInt16LE(8, 12);
    b[15] = type;
    b.writeUInt32LE(val >>> 0, 16);
    return b;
  }
  function startEl(nameStr, attrs, line = 1) {
    const sorted = [...attrs].sort((a, b) => a.readUInt32LE(4) - b.readUInt32LE(4));
    const total = 36 + sorted.length * 20;
    const b = Buffer.alloc(36);
    b.writeUInt16LE(0x0102, 0); b.writeUInt16LE(16, 2); b.writeUInt32LE(total, 4);
    b.writeUInt32LE(line, 8); b.writeUInt32LE(0xffffffff, 12);
    b.writeUInt32LE(NO_NS, 16); b.writeUInt32LE(sIdx(nameStr), 20);
    b.writeUInt16LE(20, 24); b.writeUInt16LE(20, 26);
    b.writeUInt16LE(sorted.length, 28);
    return Buffer.concat([b, ...sorted]);
  }
  function endEl(nameStr, line = 1) {
    const b = Buffer.alloc(24);
    b.writeUInt16LE(0x0103, 0); b.writeUInt16LE(16, 2); b.writeUInt32LE(24, 4);
    b.writeUInt32LE(line, 8); b.writeUInt32LE(0xffffffff, 12);
    b.writeUInt32LE(NO_NS, 16); b.writeUInt32LE(sIdx(nameStr), 20);
    return b;
  }

  // Note: minSdkVersion = 24 (Android 7.0), targetSdkVersion = 34 (Android 14)
  // Targeting SDK 34 eliminates the "conçue pour une version plus ancienne d'Android" warning!
  const chunks = [
    buildAxmlStringPool(allStrings, resIds),
    startNamespace(PFX_ANDROID, NS_ANDROID, 2),
    startEl('manifest', [
      attrInt(NS_ANDROID, 'versionCode', 2, 0x10),
      attrStr(NS_ANDROID, 'versionName', '1.1.0'),
      attrStr(NO_NS, 'package', 'com.sergeledev.blindshot'),
    ], 2),
    startEl('uses-sdk', [
      attrInt(NS_ANDROID, 'minSdkVersion', 24, 0x10),
      attrInt(NS_ANDROID, 'targetSdkVersion', 34, 0x10),
    ], 3),
    endEl('uses-sdk', 3),
    startEl('uses-permission', [attrStr(NS_ANDROID, 'name', 'android.permission.INTERNET')], 4),
    endEl('uses-permission', 4),
    startEl('uses-permission', [attrStr(NS_ANDROID, 'name', 'android.permission.VIBRATE')], 5),
    endEl('uses-permission', 5),
    startEl('application', [
      attrStr(NS_ANDROID, 'label', 'Blind Shot'),
      attrInt(NS_ANDROID, 'icon', 0x7f010000, 0x01),
      attrInt(NS_ANDROID, 'hardwareAccelerated', 0xffffffff, 0x12),
      attrInt(NS_ANDROID, 'usesCleartextTraffic', 0xffffffff, 0x12),
    ], 6),
    startEl('activity', [
      attrInt(NS_ANDROID, 'theme', 0x01030007, 0x01),
      attrStr(NS_ANDROID, 'label', 'Blind Shot'),
      attrStr(NS_ANDROID, 'name', 'com.sergeledev.blindshot.MainActivity'),
      attrInt(NS_ANDROID, 'exported', 0xffffffff, 0x12),
      attrInt(NS_ANDROID, 'configChanges', 0x000004a0, 0x11),
    ], 7),
    startEl('intent-filter', [], 8),
    startEl('action', [attrStr(NS_ANDROID, 'name', 'android.intent.action.MAIN')], 9),
    endEl('action', 9),
    startEl('category', [attrStr(NS_ANDROID, 'name', 'android.intent.category.LAUNCHER')], 10),
    endEl('category', 10),
    endEl('intent-filter', 11),
    endEl('activity', 12),
    endEl('application', 13),
    endEl('manifest', 14),
    endNamespace(PFX_ANDROID, NS_ANDROID, 14),
  ];

  const body = Buffer.concat(chunks);
  const top = Buffer.alloc(8);
  top.writeUInt16LE(0x0003, 0);
  top.writeUInt16LE(8, 2);
  top.writeUInt32LE(8 + body.length, 4);
  return Buffer.concat([top, body]);
}

// ============================================================================
// 3. Minimal resources.arsc Defining @drawable/ic_launcher (0x7f010000)
// ============================================================================
function buildResourcesArsc() {
  const valuePool = buildAxmlStringPool(['res/drawable/ic_launcher.png']);
  const typePool = buildAxmlStringPool(['drawable']);
  const keyPool = buildAxmlStringPool(['ic_launcher']);

  const typeSpec = Buffer.alloc(20);
  typeSpec.writeUInt16LE(0x0202, 0);
  typeSpec.writeUInt16LE(16, 2);
  typeSpec.writeUInt32LE(20, 4);
  typeSpec[8] = 1;
  typeSpec.writeUInt32LE(1, 12);
  typeSpec.writeUInt32LE(0, 16);

  const typeHeaderSize = 68;
  const entryOffsetsSize = 4;
  const entryData = Buffer.alloc(16);
  entryData.writeUInt16LE(8, 0);
  entryData.writeUInt16LE(0, 2);
  entryData.writeUInt32LE(0, 4);
  entryData.writeUInt16LE(8, 8);
  entryData[10] = 0;
  entryData[11] = 0x03;
  entryData.writeUInt32LE(0, 12);

  const typeChunkSize = typeHeaderSize + entryOffsetsSize + entryData.length;
  const typeChunk = Buffer.alloc(typeHeaderSize + entryOffsetsSize);
  typeChunk.writeUInt16LE(0x0201, 0);
  typeChunk.writeUInt16LE(typeHeaderSize, 2);
  typeChunk.writeUInt32LE(typeChunkSize, 4);
  typeChunk[8] = 1;
  typeChunk.writeUInt32LE(1, 12);
  typeChunk.writeUInt32LE(typeHeaderSize + entryOffsetsSize, 16);
  typeChunk.writeUInt32LE(48, 20);
  typeChunk.writeUInt32LE(0, typeHeaderSize);

  const pkgHeaderSize = 288;
  const pkgBody = Buffer.concat([typePool, keyPool, typeSpec, typeChunk, entryData]);
  const pkgHeader = Buffer.alloc(pkgHeaderSize);
  pkgHeader.writeUInt16LE(0x0200, 0);
  pkgHeader.writeUInt16LE(pkgHeaderSize, 2);
  pkgHeader.writeUInt32LE(pkgHeaderSize + pkgBody.length, 4);
  pkgHeader.writeUInt32LE(0x7f, 8);
  pkgHeader.write('com.sergeledev.blindshot', 12, 'utf16le');
  pkgHeader.writeUInt32LE(pkgHeaderSize, 268);
  pkgHeader.writeUInt32LE(1, 272);
  pkgHeader.writeUInt32LE(pkgHeaderSize + typePool.length, 276);
  pkgHeader.writeUInt32LE(1, 280);

  const tableHeader = Buffer.alloc(12);
  const totalSize = 12 + valuePool.length + pkgHeader.length + pkgBody.length;
  tableHeader.writeUInt16LE(0x0002, 0);
  tableHeader.writeUInt16LE(12, 2);
  tableHeader.writeUInt32LE(totalSize, 4);
  tableHeader.writeUInt32LE(1, 8);

  return Buffer.concat([tableHeader, valuePool, pkgHeader, pkgBody]);
}

// ============================================================================
// 4. Dalvik classes.dex Builder for com.sergeledev.blindshot.MainActivity
// ============================================================================
function uleb128(val) {
  const out = [];
  let v = val >>> 0;
  do {
    let b = v & 0x7f;
    v >>>= 7;
    if (v !== 0) b |= 0x80;
    out.push(b);
  } while (v !== 0);
  return Buffer.from(out);
}

function adler32(buf) {
  let a = 1, b = 0;
  const MOD = 65521;
  for (let i = 0; i < buf.length; i++) {
    a = (a + buf[i]) % MOD;
    b = (b + a) % MOD;
  }
  return ((b << 16) | a) >>> 0;
}

function buildClassesDex() {
  const rawStrings = [
    '<init>',
    'L',
    'Landroid/app/Activity;',
    'Landroid/content/Context;',
    'Landroid/os/Bundle;',
    'Landroid/view/View;',
    'Landroid/webkit/WebChromeClient;',
    'Landroid/webkit/WebSettings;',
    'Landroid/webkit/WebView;',
    'Landroid/webkit/WebViewClient;',
    'Lcom/sergeledev/blindshot/MainActivity;',
    'Ljava/lang/String;',
    'V',
    'VL',
    'VZ',
    'Z',
    'file:///android_asset/index.html',
    'getSettings',
    'loadUrl',
    'onCreate',
    'setAllowContentAccess',
    'setAllowFileAccess',
    'setContentView',
    'setDomStorageEnabled',
    'setJavaScriptEnabled',
    'setMediaPlaybackRequiresUserGesture',
    'setWebChromeClient',
    'setWebViewClient',
  ].sort();

  const sId = (s) => rawStrings.indexOf(s);
  const rawTypes = [
    'Landroid/app/Activity;',
    'Landroid/content/Context;',
    'Landroid/os/Bundle;',
    'Landroid/view/View;',
    'Landroid/webkit/WebChromeClient;',
    'Landroid/webkit/WebSettings;',
    'Landroid/webkit/WebView;',
    'Landroid/webkit/WebViewClient;',
    'Lcom/sergeledev/blindshot/MainActivity;',
    'Ljava/lang/String;',
    'V',
    'Z',
  ].sort((a, b) => sId(a) - sId(b));

  const tId = (t) => rawTypes.indexOf(t);

  const rawProtos = [
    { shorty: 'L', ret: 'Landroid/webkit/WebSettings;', params: [] },
    { shorty: 'V', ret: 'V', params: [] },
    { shorty: 'VL', ret: 'V', params: ['Landroid/content/Context;'] },
    { shorty: 'VL', ret: 'V', params: ['Landroid/os/Bundle;'] },
    { shorty: 'VL', ret: 'V', params: ['Landroid/view/View;'] },
    { shorty: 'VL', ret: 'V', params: ['Landroid/webkit/WebChromeClient;'] },
    { shorty: 'VL', ret: 'V', params: ['Landroid/webkit/WebViewClient;'] },
    { shorty: 'VL', ret: 'V', params: ['Ljava/lang/String;'] },
    { shorty: 'VZ', ret: 'V', params: ['Z'] },
  ].sort((a, b) => {
    const r = tId(a.ret) - tId(b.ret);
    if (r !== 0) return r;
    if (a.params.length !== b.params.length) return a.params.length - b.params.length;
    for (let i = 0; i < a.params.length; i++) {
      const d = tId(a.params[i]) - tId(b.params[i]);
      if (d !== 0) return d;
    }
    return 0;
  });

  const pId = (ret, params = []) =>
    rawProtos.findIndex((p) => p.ret === ret && p.params.length === params.length && p.params.every((x, i) => x === params[i]));

  const rawMethods = [
    { cls: 'Landroid/app/Activity;', name: '<init>', ret: 'V', params: [] },
    { cls: 'Landroid/app/Activity;', name: 'onCreate', ret: 'V', params: ['Landroid/os/Bundle;'] },
    { cls: 'Landroid/app/Activity;', name: 'setContentView', ret: 'V', params: ['Landroid/view/View;'] },
    { cls: 'Landroid/webkit/WebChromeClient;', name: '<init>', ret: 'V', params: [] },
    { cls: 'Landroid/webkit/WebSettings;', name: 'setAllowContentAccess', ret: 'V', params: ['Z'] },
    { cls: 'Landroid/webkit/WebSettings;', name: 'setAllowFileAccess', ret: 'V', params: ['Z'] },
    { cls: 'Landroid/webkit/WebSettings;', name: 'setDomStorageEnabled', ret: 'V', params: ['Z'] },
    { cls: 'Landroid/webkit/WebSettings;', name: 'setJavaScriptEnabled', ret: 'V', params: ['Z'] },
    { cls: 'Landroid/webkit/WebSettings;', name: 'setMediaPlaybackRequiresUserGesture', ret: 'V', params: ['Z'] },
    { cls: 'Landroid/webkit/WebView;', name: '<init>', ret: 'V', params: ['Landroid/content/Context;'] },
    { cls: 'Landroid/webkit/WebView;', name: 'getSettings', ret: 'Landroid/webkit/WebSettings;', params: [] },
    { cls: 'Landroid/webkit/WebView;', name: 'loadUrl', ret: 'V', params: ['Ljava/lang/String;'] },
    { cls: 'Landroid/webkit/WebView;', name: 'setWebChromeClient', ret: 'V', params: ['Landroid/webkit/WebChromeClient;'] },
    { cls: 'Landroid/webkit/WebView;', name: 'setWebViewClient', ret: 'V', params: ['Landroid/webkit/WebViewClient;'] },
    { cls: 'Landroid/webkit/WebViewClient;', name: '<init>', ret: 'V', params: [] },
    { cls: 'Lcom/sergeledev/blindshot/MainActivity;', name: '<init>', ret: 'V', params: [] },
    { cls: 'Lcom/sergeledev/blindshot/MainActivity;', name: 'onCreate', ret: 'V', params: ['Landroid/os/Bundle;'] },
  ].sort((a, b) => (tId(a.cls) - tId(b.cls)) || (sId(a.name) - sId(b.name)) || (pId(a.ret, a.params) - pId(b.ret, b.params)));

  const mId = (cls, name) => rawMethods.findIndex((m) => m.cls === cls && m.name === name);

  function insn35c(op, count, regC, regD, methodOrTypeIdx) {
    const b = Buffer.alloc(6);
    b[0] = op;
    b[1] = ((count & 0x0f) << 4) | 0;
    b.writeUInt16LE(methodOrTypeIdx, 2);
    b[4] = (regC & 0x0f) | ((regD & 0x0f) << 4);
    b[5] = 0;
    return b;
  }
  function insn21c(op, regA, idx) {
    const b = Buffer.alloc(4);
    b[0] = op; b[1] = regA; b.writeUInt16LE(idx, 2);
    return b;
  }
  function insn11n(op, regA, lit4) {
    return Buffer.from([op, (regA & 0x0f) | ((lit4 & 0x0f) << 4)]);
  }
  function insn11x(op, regA) {
    return Buffer.from([op, regA]);
  }

  const initInsns = Buffer.concat([
    insn35c(0x70, 1, 0, 0, mId('Landroid/app/Activity;', '<init>')),
    Buffer.from([0x0e, 0x00]),
  ]);
  const codeInit = Buffer.alloc(16 + initInsns.length);
  codeInit.writeUInt16LE(1, 0);
  codeInit.writeUInt16LE(1, 2);
  codeInit.writeUInt16LE(1, 4);
  codeInit.writeUInt16LE(0, 6);
  codeInit.writeUInt32LE(0, 8);
  codeInit.writeUInt32LE(initInsns.length / 2, 12);
  initInsns.copy(codeInit, 16);

  const onCreateInsns = Buffer.concat([
    insn35c(0x6f, 2, 3, 4, mId('Landroid/app/Activity;', 'onCreate')),
    insn21c(0x22, 0, tId('Landroid/webkit/WebView;')),
    insn35c(0x70, 2, 0, 3, mId('Landroid/webkit/WebView;', '<init>')),
    insn35c(0x6e, 1, 0, 0, mId('Landroid/webkit/WebView;', 'getSettings')),
    insn11x(0x0c, 1),
    insn11n(0x12, 2, 1),
    insn35c(0x6e, 2, 1, 2, mId('Landroid/webkit/WebSettings;', 'setJavaScriptEnabled')),
    insn35c(0x6e, 2, 1, 2, mId('Landroid/webkit/WebSettings;', 'setDomStorageEnabled')),
    insn35c(0x6e, 2, 1, 2, mId('Landroid/webkit/WebSettings;', 'setAllowFileAccess')),
    insn35c(0x6e, 2, 1, 2, mId('Landroid/webkit/WebSettings;', 'setAllowContentAccess')),
    insn11n(0x12, 2, 0),
    insn35c(0x6e, 2, 1, 2, mId('Landroid/webkit/WebSettings;', 'setMediaPlaybackRequiresUserGesture')),
    insn21c(0x22, 2, tId('Landroid/webkit/WebChromeClient;')),
    insn35c(0x70, 1, 2, 0, mId('Landroid/webkit/WebChromeClient;', '<init>')),
    insn35c(0x6e, 2, 0, 2, mId('Landroid/webkit/WebView;', 'setWebChromeClient')),
    insn21c(0x22, 2, tId('Landroid/webkit/WebViewClient;')),
    insn35c(0x70, 1, 2, 0, mId('Landroid/webkit/WebViewClient;', '<init>')),
    insn35c(0x6e, 2, 0, 2, mId('Landroid/webkit/WebView;', 'setWebViewClient')),
    insn21c(0x1a, 2, sId('file:///android_asset/index.html')),
    insn35c(0x6e, 2, 0, 2, mId('Landroid/webkit/WebView;', 'loadUrl')),
    insn35c(0x6e, 2, 3, 0, mId('Landroid/app/Activity;', 'setContentView')),
    Buffer.from([0x0e, 0x00]),
  ]);
  const codeOnCreate = Buffer.alloc(16 + onCreateInsns.length);
  codeOnCreate.writeUInt16LE(5, 0);
  codeOnCreate.writeUInt16LE(2, 2);
  codeOnCreate.writeUInt16LE(2, 4);
  codeOnCreate.writeUInt16LE(0, 6);
  codeOnCreate.writeUInt32LE(0, 8);
  codeOnCreate.writeUInt32LE(onCreateInsns.length / 2, 12);
  onCreateInsns.copy(codeOnCreate, 16);

  const headerSize = 0x70;
  const stringIdsOff = headerSize;
  const typeIdsOff = stringIdsOff + rawStrings.length * 4;
  const protoIdsOff = typeIdsOff + rawTypes.length * 4;
  const methodIdsOff = protoIdsOff + rawProtos.length * 12;
  const classDefsOff = methodIdsOff + rawMethods.length * 8;
  const dataOff = classDefsOff + 32;
  const align4 = (n) => (n + 3) & ~3;

  let cur = dataOff;
  const protoTypeListOffs = [];
  const typeListBufs = [];
  for (const p of rawProtos) {
    if (!p.params.length) {
      protoTypeListOffs.push(0);
    } else {
      cur = align4(cur);
      protoTypeListOffs.push(cur);
      const b = Buffer.alloc(align4(4 + p.params.length * 2));
      b.writeUInt32LE(p.params.length, 0);
      p.params.forEach((pt, i) => b.writeUInt16LE(tId(pt), 4 + i * 2));
      typeListBufs.push({ off: cur, buf: b });
      cur += b.length;
    }
  }

  cur = align4(cur);
  const codeInitOff = cur;
  cur += align4(codeInit.length);
  const codeOnCreateOff = cur;
  cur += align4(codeOnCreate.length);

  const stringDataOffs = [];
  const stringDataBufs = [];
  for (const s of rawStrings) {
    stringDataOffs.push(cur);
    const b = Buffer.concat([uleb128(s.length), Buffer.from(s, 'utf8'), Buffer.from([0])]);
    stringDataBufs.push({ off: cur, buf: b });
    cur += b.length;
  }

  const classDataOff = cur;
  const idxInit = mId('Lcom/sergeledev/blindshot/MainActivity;', '<init>');
  const idxOnCreate = mId('Lcom/sergeledev/blindshot/MainActivity;', 'onCreate');
  const classDataBuf = Buffer.concat([
    uleb128(0), uleb128(0), uleb128(1), uleb128(1),
    uleb128(idxInit), uleb128(0x10001), uleb128(codeInitOff),
    uleb128(idxOnCreate), uleb128(0x0004), uleb128(codeOnCreateOff),
  ]);
  cur += classDataBuf.length;

  cur = align4(cur);
  const mapOff = cur;
  const mapItems = [
    [0x0000, 1, 0],
    [0x0001, rawStrings.length, stringIdsOff],
    [0x0002, rawTypes.length, typeIdsOff],
    [0x0003, rawProtos.length, protoIdsOff],
    [0x0005, rawMethods.length, methodIdsOff],
    [0x0006, 1, classDefsOff],
    [0x1001, typeListBufs.length, typeListBufs[0]?.off || 0],
    [0x2001, 2, codeInitOff],
    [0x2002, rawStrings.length, stringDataOffs[0]],
    [0x2000, 1, classDataOff],
    [0x1000, 1, mapOff],
  ];
  const mapBuf = Buffer.alloc(4 + mapItems.length * 12);
  mapBuf.writeUInt32LE(mapItems.length, 0);
  mapItems.forEach(([type, size, offset], i) => {
    const o = 4 + i * 12;
    mapBuf.writeUInt16LE(type, o);
    mapBuf.writeUInt16LE(0, o + 2);
    mapBuf.writeUInt32LE(size, o + 4);
    mapBuf.writeUInt32LE(offset, o + 8);
  });
  cur += mapBuf.length;
  const fileSize = align4(cur);

  const dex = Buffer.alloc(fileSize);
  stringDataOffs.forEach((off, i) => dex.writeUInt32LE(off, stringIdsOff + i * 4));
  rawTypes.forEach((t, i) => dex.writeUInt32LE(sId(t), typeIdsOff + i * 4));
  rawProtos.forEach((p, i) => {
    const o = protoIdsOff + i * 12;
    dex.writeUInt32LE(sId(p.shorty), o);
    dex.writeUInt32LE(tId(p.ret), o + 4);
    dex.writeUInt32LE(protoTypeListOffs[i], o + 8);
  });
  rawMethods.forEach((m, i) => {
    const o = methodIdsOff + i * 8;
    dex.writeUInt16LE(tId(m.cls), o);
    dex.writeUInt16LE(pId(m.ret, m.params), o + 2);
    dex.writeUInt32LE(sId(m.name), o + 4);
  });
  dex.writeUInt32LE(tId('Lcom/sergeledev/blindshot/MainActivity;'), classDefsOff + 0);
  dex.writeUInt32LE(0x0001, classDefsOff + 4);
  dex.writeUInt32LE(tId('Landroid/app/Activity;'), classDefsOff + 8);
  dex.writeUInt32LE(0, classDefsOff + 12);
  dex.writeUInt32LE(0xffffffff, classDefsOff + 16);
  dex.writeUInt32LE(0, classDefsOff + 20);
  dex.writeUInt32LE(classDataOff, classDefsOff + 24);
  dex.writeUInt32LE(0, classDefsOff + 28);

  for (const tl of typeListBufs) tl.buf.copy(dex, tl.off);
  codeInit.copy(dex, codeInitOff);
  codeOnCreate.copy(dex, codeOnCreateOff);
  for (const sd of stringDataBufs) sd.buf.copy(dex, sd.off);
  classDataBuf.copy(dex, classDataOff);
  mapBuf.copy(dex, mapOff);

  Buffer.from('dex\n035\0', 'ascii').copy(dex, 0);
  dex.writeUInt32LE(fileSize, 32);
  dex.writeUInt32LE(0x70, 36);
  dex.writeUInt32LE(0x12345678, 40);
  dex.writeUInt32LE(mapOff, 52);
  dex.writeUInt32LE(rawStrings.length, 56);
  dex.writeUInt32LE(stringIdsOff, 60);
  dex.writeUInt32LE(rawTypes.length, 64);
  dex.writeUInt32LE(typeIdsOff, 68);
  dex.writeUInt32LE(rawProtos.length, 72);
  dex.writeUInt32LE(protoIdsOff, 76);
  dex.writeUInt32LE(rawMethods.length, 88);
  dex.writeUInt32LE(methodIdsOff, 92);
  dex.writeUInt32LE(1, 96);
  dex.writeUInt32LE(classDefsOff, 100);
  dex.writeUInt32LE(fileSize - dataOff, 104);
  dex.writeUInt32LE(dataOff, 108);

  const sha1 = crypto.createHash('sha1').update(dex.subarray(32)).digest();
  sha1.copy(dex, 12);
  dex.writeUInt32LE(adler32(dex.subarray(12)), 8);
  return dex;
}

// ============================================================================
// 5. Self-Contained HTML Bundler for Android WebView (Inlines CSS, JS, Logo SVG)
// ============================================================================
function buildSelfContainedApkHtml(distDir, publicDir) {
  let html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const assetsDir = path.join(distDir, 'assets');
  const cssFile = fs.readdirSync(assetsDir).find((f) => f.endsWith('.css'));
  const jsFile = fs.readdirSync(assetsDir).find((f) => f.endsWith('.js'));
  const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
  const jsContent = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');
  const logoSvgB64 = fs.readFileSync(path.join(publicDir, 'logo.svg')).toString('base64');
  const logoDataUri = `data:image/svg+xml;base64,${logoSvgB64}`;

  // Remove external <script type="module" crossorigin ...> and <link rel="stylesheet" crossorigin ...>
  html = html.replace(/<script[^>]*src="[^"]*assets\/[^"]+\.js"[^>]*><\/script>/gi, '');
  html = html.replace(/<link[^>]*href="[^"]*assets\/[^"]+\.css"[^>]*>/gi, '');

  // Replace ./logo.svg and ./favicon.svg with inline data URI so images never fail to load
  html = html.replace(/\.\/logo\.svg/g, () => logoDataUri);
  html = html.replace(/\.\/favicon\.svg/g, () => logoDataUri);

  // Inject compiled CSS inside <head> and compiled JS at the end of </body>
  // IMPORTANT: Use callback functions () => ... so $& / $' in minified Three.js code are not expanded!
  html = html.replace('</head>', () => `<style>${cssContent}</style>\n</head>`);
  html = html.replace('</body>', () => `<script>${jsContent}</script>\n</body>`);
  return Buffer.from(html, 'utf8');
}

// ============================================================================
// 6. ZIP Builder + APK Signature Scheme v1 (jarsigner) + v2 (APK Sig Block 42)
// ============================================================================
function buildZipSections(entries) {
  const localParts = [];
  const cdParts = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBuf = Buffer.from(entry.name, 'utf8');
    const uncompressed = entry.data;
    const crc = crc32(uncompressed);
    const store = !!entry.store;
    const compressed = store ? uncompressed : zlib.deflateRawSync(uncompressed, { level: 9 });
    const method = store ? 0 : 8;

    let extraLen = 0;
    if (store) {
      const dataStart = offset + 30 + nameBuf.length;
      extraLen = (4 - (dataStart % 4)) % 4;
    }

    const lfh = Buffer.alloc(30 + nameBuf.length + extraLen);
    lfh.writeUInt32LE(0x04034b50, 0);
    lfh.writeUInt16LE(20, 4);
    lfh.writeUInt16LE(0, 6);
    lfh.writeUInt16LE(method, 8);
    lfh.writeUInt16LE(0, 10);
    lfh.writeUInt16LE(0x5421, 12);
    lfh.writeUInt32LE(crc, 14);
    lfh.writeUInt32LE(compressed.length, 18);
    lfh.writeUInt32LE(uncompressed.length, 22);
    lfh.writeUInt16LE(nameBuf.length, 26);
    lfh.writeUInt16LE(extraLen, 28);
    nameBuf.copy(lfh, 30);

    const localChunk = Buffer.concat([lfh, compressed]);
    localParts.push(localChunk);

    const cdh = Buffer.alloc(46 + nameBuf.length);
    cdh.writeUInt32LE(0x02014b50, 0);
    cdh.writeUInt16LE(20, 4);
    cdh.writeUInt16LE(20, 6);
    cdh.writeUInt16LE(0, 8);
    cdh.writeUInt16LE(method, 10);
    cdh.writeUInt16LE(0, 12);
    cdh.writeUInt16LE(0x5421, 14);
    cdh.writeUInt32LE(crc, 16);
    cdh.writeUInt32LE(compressed.length, 20);
    cdh.writeUInt32LE(uncompressed.length, 24);
    cdh.writeUInt16LE(nameBuf.length, 28);
    cdh.writeUInt32LE(offset, 42);
    nameBuf.copy(cdh, 46);
    cdParts.push(cdh);

    offset += localChunk.length;
  }

  const beforeCd = Buffer.concat(localParts);
  const cdBuf = Buffer.concat(cdParts);
  function buildEocd(cdOffset) {
    const eocd = Buffer.alloc(22);
    eocd.writeUInt32LE(0x06054b50, 0);
    eocd.writeUInt16LE(entries.length, 8);
    eocd.writeUInt16LE(entries.length, 10);
    eocd.writeUInt32LE(cdBuf.length, 12);
    eocd.writeUInt32LE(cdOffset, 16);
    return eocd;
  }
  return { beforeCd, cdBuf, buildEocd };
}

function readZipEntries(zipPath) {
  const buf = fs.readFileSync(zipPath);
  let eocdOff = buf.length - 22;
  while (eocdOff >= 0 && buf.readUInt32LE(eocdOff) !== 0x06054b50) eocdOff--;
  const count = buf.readUInt16LE(eocdOff + 10);
  let cdPos = buf.readUInt32LE(eocdOff + 16);
  const out = [];
  for (let i = 0; i < count; i++) {
    const method = buf.readUInt16LE(cdPos + 10);
    const compSize = buf.readUInt32LE(cdPos + 20);
    const nameLen = buf.readUInt16LE(cdPos + 28);
    const extraLen = buf.readUInt16LE(cdPos + 30);
    const commentLen = buf.readUInt16LE(cdPos + 32);
    const lfhOff = buf.readUInt32LE(cdPos + 42);
    const name = buf.subarray(cdPos + 46, cdPos + 46 + nameLen).toString('utf8');
    const lfhNameLen = buf.readUInt16LE(lfhOff + 26);
    const lfhExtraLen = buf.readUInt16LE(lfhOff + 28);
    const dataStart = lfhOff + 30 + lfhNameLen + lfhExtraLen;
    const rawData = buf.subarray(dataStart, dataStart + compSize);
    const data = method === 0 ? rawData : zlib.inflateRawSync(rawData);
    out.push({
      name,
      data,
      store: name === 'resources.arsc' || name.endsWith('.png') || name === 'assets/index.html',
    });
    cdPos += 46 + nameLen + extraLen + commentLen;
  }
  return out;
}

function buildApkSigBlockV2(beforeCd, cdBuf, buildEocdFn, privateKey, pubKeyBytes, certDer) {
  function lenPrefixed(buf) {
    const l = Buffer.alloc(4);
    l.writeUInt32LE(buf.length, 0);
    return Buffer.concat([l, buf]);
  }
  function chunkDigest(sections) {
    const chunkHashes = [];
    let totalChunks = 0;
    const CHUNK = 1024 * 1024;
    for (const sec of sections) {
      for (let pos = 0; pos < sec.length; pos += CHUNK) {
        const slice = sec.subarray(pos, Math.min(pos + CHUNK, sec.length));
        const h = Buffer.alloc(5);
        h[0] = 0xa5;
        h.writeUInt32LE(slice.length, 1);
        chunkHashes.push(crypto.createHash('sha256').update(h).update(slice).digest());
        totalChunks++;
      }
    }
    const topHead = Buffer.alloc(5);
    topHead[0] = 0x5a;
    topHead.writeUInt32LE(totalChunks, 1);
    return crypto.createHash('sha256').update(topHead).update(Buffer.concat(chunkHashes)).digest();
  }

  const eocdForDigest = buildEocdFn(beforeCd.length);
  const topDigest = chunkDigest([beforeCd, cdBuf, eocdForDigest]);

  // 0x0103 = RSASSA-PKCS1-v1_5 with SHA2-256
  const algId = Buffer.alloc(4);
  algId.writeUInt32LE(0x0103, 0);

  const digestEntry = lenPrefixed(Buffer.concat([algId, lenPrefixed(topDigest)]));
  const digestsSeq = lenPrefixed(digestEntry);
  const certsSeq = lenPrefixed(lenPrefixed(certDer));
  const attrsSeq = lenPrefixed(Buffer.alloc(0));
  // Strictly 3 length-prefixed slices inside signedData per AOSP ApkSignatureSchemeV2Verifier:
  const signedData = Buffer.concat([digestsSeq, certsSeq, attrsSeq]);

  const signatureBytes = crypto.sign('sha256', signedData, privateKey);
  const sigEntry = lenPrefixed(Buffer.concat([algId, lenPrefixed(signatureBytes)]));
  const sigsSeq = lenPrefixed(sigEntry);

  const signer = lenPrefixed(Buffer.concat([
    lenPrefixed(signedData),
    sigsSeq,
    lenPrefixed(pubKeyBytes),
  ]));
  const signersSeq = lenPrefixed(signer);

  const pairLen = 4 + signersSeq.length;
  const pair = Buffer.alloc(12 + signersSeq.length);
  pair.writeBigUInt64LE(BigInt(pairLen), 0);
  pair.writeUInt32LE(0x7109871a, 8);
  signersSeq.copy(pair, 12);

  const blockSizeField = BigInt(pair.length + 8 + 16);
  const head = Buffer.alloc(8);
  head.writeBigUInt64LE(blockSizeField, 0);
  const tail = Buffer.alloc(24);
  tail.writeBigUInt64LE(blockSizeField, 0);
  Buffer.from('APK Sig Block 42', 'ascii').copy(tail, 8);
  return Buffer.concat([head, pair, tail]);
}

function exportKeyFromP12(p12Path) {
  const keyOut = path.join(__dirname, 'blindshot.pk8');
  const certOut = path.join(__dirname, 'blindshot.der');
  if (!fs.existsSync(keyOut) || !fs.existsSync(certOut)) {
    const javaFile = path.join(__dirname, 'ExportKey.java');
    fs.writeFileSync(javaFile, `
import java.io.*;
import java.security.*;
import java.security.cert.Certificate;
public class ExportKey {
  public static void main(String[] args) throws Exception {
    KeyStore ks = KeyStore.getInstance("PKCS12");
    try (FileInputStream fis = new FileInputStream(args[0])) {
      ks.load(fis, "blindshot".toCharArray());
    }
    Key k = ks.getKey("blindshot", "blindshot".toCharArray());
    Certificate c = ks.getCertificate("blindshot");
    try (FileOutputStream fos = new FileOutputStream(args[1])) { fos.write(k.getEncoded()); }
    try (FileOutputStream fos = new FileOutputStream(args[2])) { fos.write(c.getEncoded()); }
  }
}
`);
    execSync(`java "${javaFile}" "${p12Path}" "${keyOut}" "${certOut}"`);
    fs.unlinkSync(javaFile);
  }
  const pk8Der = fs.readFileSync(keyOut);
  const certDer = fs.readFileSync(certOut);
  const privateKey = crypto.createPrivateKey({ key: pk8Der, format: 'der', type: 'pkcs8' });
  const publicKey = crypto.createPublicKey(privateKey);
  const spkiDer = publicKey.export({ type: 'spki', format: 'der' });
  return { privateKey, spkiDer, certDer };
}

// ============================================================================
// 7. Execute Build + Sign with v1 (jarsigner) AND v2 (APK Sig Block 42)
// ============================================================================
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'client', 'public');
const distDir = path.join(rootDir, 'client', 'dist');

const icon192 = generateBlindShotPng(192);
const icon512 = generateBlindShotPng(512);
fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192);
fs.writeFileSync(path.join(publicDir, 'icon-512.png'), icon512);
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'icon-192.png'), icon192);
  fs.writeFileSync(path.join(distDir, 'icon-512.png'), icon512);
}

const inlinedHtml = buildSelfContainedApkHtml(distDir, publicDir);

const apkEntries = [
  { name: 'AndroidManifest.xml', data: buildAndroidManifestAxml(), store: false },
  { name: 'resources.arsc', data: buildResourcesArsc(), store: true },
  { name: 'res/drawable/ic_launcher.png', data: icon192, store: true },
  { name: 'classes.dex', data: buildClassesDex(), store: false },
  { name: 'assets/index.html', data: inlinedHtml, store: true },
];

const apkOut = path.join(rootDir, 'BlindShot.apk');
const keystorePath = path.join(__dirname, 'blindshot.p12');

if (!fs.existsSync(keystorePath)) {
  execSync(
    `keytool -genkeypair -keystore "${keystorePath}" -storetype PKCS12 -storepass blindshot -keypass blindshot -alias blindshot -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Serge le dev, O=Blind Shot, C=FR"`,
    { stdio: 'ignore' }
  );
}

// Step 1: Write unsigned ZIP and sign with official JDK jarsigner (v1 META-INF)
const { beforeCd: uBefore, cdBuf: uCd, buildEocd: uEocd } = buildZipSections(apkEntries);
fs.writeFileSync(apkOut, Buffer.concat([uBefore, uCd, uEocd(uBefore.length)]));
execSync(
  `jarsigner -keystore "${keystorePath}" -storepass blindshot -keypass blindshot -sigalg SHA256withRSA -digestalg SHA-256 "${apkOut}" blindshot`,
  { stdio: 'ignore' }
);

// Step 2: Re-align stored entries (resources.arsc & PNGs) to 4-byte boundaries
const v1SignedEntries = readZipEntries(apkOut);
const { beforeCd, cdBuf, buildEocd } = buildZipSections(v1SignedEntries);

// Step 3: Inject APK Signature Scheme v2 Block using the exact same key & certificate
const { privateKey, spkiDer, certDer } = exportKeyFromP12(keystorePath);
const sigBlock = buildApkSigBlockV2(beforeCd, cdBuf, buildEocd, privateKey, spkiDer, certDer);
const finalEocd = buildEocd(beforeCd.length + sigBlock.length);
fs.writeFileSync(apkOut, Buffer.concat([beforeCd, sigBlock, cdBuf, finalEocd]));

const verifyOut = execSync(`jarsigner -verify "${apkOut}"`).toString().trim();
console.log(
  `APK v1+v2 generated (SDK 34, self-contained HTML/CSS/JS): ${apkOut} (${(fs.statSync(apkOut).size / 1024).toFixed(1)} KB) — ${verifyOut}`
);
