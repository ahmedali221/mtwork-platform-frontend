import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const URL = 'http://localhost:4280/signup';
const browser = await chromium.launch();

// ── Figma targets ──
const FIGMA = {
  title: { fontSize: 42, lineHeight: 1.3 },
  subtitle: { fontSize: 18, lineHeight: 1.5 },
  card: { w: 320, gap: 24, pad: 24, radius: 16 },
  cardTitle: { fontSize: 22 },
  cardBody: { fontSize: 14, lineHeight: 22 },
};

// ── 1. Desktop 1440 capture + measure ──
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
const consoleErrors = [];
page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.evaluate(() => Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).catch(() => {});
await page.screenshot({ path: 'screenshots/signup-desktop-1440.png', fullPage: false });

const m = await page.evaluate(() => {
  const r = s => { const e = document.querySelector(s); const b = e.getBoundingClientRect(); return { b, cs: getComputedStyle(e) }; };
  const title = r('.signup-head__title');
  const sub = r('.signup-head__subtitle');
  const cards = [...document.querySelectorAll('.signup-card')];
  const c0 = cards[0].getBoundingClientRect();
  const c1 = cards[1].getBoundingClientRect();
  const cardTitle = r('.signup-card__title');
  const cardBody = r('.signup-card__body');
  const round = v => Math.round(v * 10) / 10;
  return {
    title: { fs: title.cs.fontSize, lh: title.cs.lineHeight, ff: title.cs.fontFamily.split(',')[0], color: title.cs.color },
    sub: { fs: sub.cs.fontSize, lh: sub.cs.lineHeight, ff: sub.cs.fontFamily.split(',')[0], color: sub.cs.color },
    titleSubGap: round(sub.b.top - title.b.bottom),
    subCardsGap: round(c0.top - sub.b.bottom),
    cardW: round(c0.width), cardH: round(c0.height), cardGap: round(c1.left - c0.right),
    cardPad: r('.signup-card').cs.padding, cardRadius: r('.signup-card').cs.borderTopLeftRadius,
    cardCount: cards.length,
    cardTitle: { fs: cardTitle.cs.fontSize, ff: cardTitle.cs.fontFamily.split(',')[0] },
    cardBody: { fs: cardBody.cs.fontSize, lh: cardBody.cs.lineHeight, ff: cardBody.cs.fontFamily.split(',')[0], color: cardBody.cs.color },
    footerColor: r('.signup-footer__link').cs.color,
    hscroll: document.documentElement.scrollWidth > window.innerWidth,
  };
});

const rows = [
  ['Title size/lh',  m.title.fs + ' / ' + m.title.lh, '42px / 54.6px'],
  ['Title font',     m.title.ff, 'IBM Plex Sans'],
  ['Title color',    m.title.color, 'rgb(27,27,27)'],
  ['Subtitle size/lh', m.sub.fs + ' / ' + m.sub.lh, '18px / 27px'],
  ['Subtitle font',  m.sub.ff, 'DM Sans'],
  ['Subtitle color', m.sub.color, 'rgb(153,153,153)'],
  ['gap Title→Sub',  m.titleSubGap, '~8 (Figma flex gap 8)'],
  ['gap Sub→Cards',  m.subCardsGap, '~64 (Figma)'],
  ['Card count',     m.cardCount, 3],
  ['Card width',     m.cardW, FIGMA.card.w],
  ['Card height',    m.cardH, '320 (≥)'],
  ['Card gap',       m.cardGap, FIGMA.card.gap],
  ['Card padding',   m.cardPad, '24px'],
  ['Card radius',    m.cardRadius, '16px'],
  ['Card title size/font', m.cardTitle.fs + ' / ' + m.cardTitle.ff, '22px / IBM Plex Sans'],
  ['Card body size/lh', m.cardBody.fs + ' / ' + m.cardBody.lh, '14px / 22px'],
  ['Card body font', m.cardBody.ff, 'Instrument Sans'],
  ['Footer link color', m.footerColor, 'rgb(46,53,143)'],
  ['HScroll @1440',  m.hscroll, 'false'],
];
console.log('\n=== SIGNUP MEASUREMENT  Element | Live | Figma ===');
for (const [k, l, f] of rows) console.log(k.padEnd(22), String(l).padEnd(28), '| ' + f);
console.log('console errors:', consoleErrors.length, consoleErrors.length ? consoleErrors : 'OK');

const liveFull = await page.screenshot({ fullPage: false });
await page.close();

// ── 2. Side-by-side (Figma frame vs live, both at same width) ──
const figma = readFileSync('screenshots/signup/figma-3124199.png').toString('base64');
const sbs = await browser.newPage({ viewport: { width: 1540, height: 640 } });
await sbs.setContent(`<body style="margin:0;background:#33373b;font-family:sans-serif;display:flex;flex-direction:column;gap:20px;padding:24px;">
  <div style="color:#fff;">FIGMA 3:124199 (top) vs LIVE /signup (bottom) — both 1440px wide</div>
  <img src="data:image/png;base64,${figma}" style="width:1440px;border:1px solid #555;"/>
  <img src="data:image/png;base64,${liveFull.toString('base64')}" style="width:1440px;border:1px solid #555;"/>
</body>`);
await sbs.waitForTimeout(400);
await sbs.screenshot({ path: 'screenshots/signup-sidebyside.png', fullPage: true });
await sbs.close();
console.log('wrote signup-sidebyside.png');

// ── 3. Closeup: the 3-card row ──
const cp = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await cp.addInitScript(() => localStorage.setItem('theme', 'light'));
await cp.goto(URL, { waitUntil: 'networkidle' });
await cp.waitForTimeout(1500);
await cp.evaluate(() => Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).catch(() => {});
const rowBox = await cp.$eval('.signup-cards', el => { const b = el.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height }; });
await cp.screenshot({ path: 'screenshots/signup-closeup.png', clip: { x: rowBox.x - 20, y: rowBox.y - 20, width: rowBox.w + 40, height: rowBox.h + 40 } });
await cp.close();
console.log('wrote signup-closeup.png');

await browser.close();
