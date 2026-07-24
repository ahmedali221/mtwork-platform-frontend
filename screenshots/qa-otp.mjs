import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const URL = 'http://localhost:4280/otp?email=example@gmaill.com';
const browser = await chromium.launch();

// ── Figma target geometry (node 3:124181 / 3:124189, native px) ──
const FIGMA = {
  card: { w: 426, pad: 24, gap: 24, radius: 20, border: 0.5 },
  back: { w: 92, h: 48, fontWeight: 700, fontSize: 18 },
  title: { fontSize: 32, lineHeight: 1.4, fontWeight: 700 },
  subtitle: { fontSize: 18, lineHeight: 1.5 },
  cells: { count: 4, w: 88.5, h: 56, gap: 8, radius: 12, border: 1 },
  resend: { h: 32, fontSize: 12 },
  cta: { h: 48, radius: 12, fontSize: 18 },
};

function px(v) { return Math.round(v * 100) / 100; }

// ── 1. MEASURE (1440×900) ────────────────────────────────────────
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(900);

const measure = await page.evaluate(() => {
  const r = el => el ? el.getBoundingClientRect() : null;
  const cs = el => el ? getComputedStyle(el) : null;
  const card = document.querySelector('.otp-card');
  const back = document.querySelector('.otp-back');
  const title = document.querySelector('.otp-head__title');
  const sub = document.querySelector('.otp-head__subtitle');
  const cells = [...document.querySelectorAll('.otp-cell')];
  const resend = document.querySelector('.otp-resend');
  const cta = document.querySelector('.otp-btn');
  const cardCS = cs(card), titleCS = cs(title), subCS = cs(sub), cellCS = cs(cells[0]), backCS = cs(back), ctaCS = cs(cta), resCS = cs(resend);
  const c0 = r(cells[0]), c1 = r(cells[1]);
  return {
    card: { w: px(r(card).width), pad: cardCS.paddingTop, gap: cardCS.gap, radius: cardCS.borderTopLeftRadius, border: cardCS.borderTopWidth },
    cardTopY: px(r(card).top), cardCenterY: px(r(card).top + r(card).height/2), vh: window.innerHeight,
    back: { w: px(r(back).width), h: px(r(back).height), fw: backCS.fontWeight, fs: backCS.fontSize },
    title: { fs: titleCS.fontSize, lh: titleCS.lineHeight, fw: titleCS.fontWeight, ff: titleCS.fontFamily.split(',')[0] },
    subtitle: { fs: subCS.fontSize, lh: subCS.lineHeight, ff: subCS.fontFamily.split(',')[0], lines: Math.round(r(sub).height / parseFloat(subCS.lineHeight)) },
    cells: { count: cells.length, w: px(c0.width), h: px(c0.height), gap: px(c1.left - c0.right), radius: cellCS.borderTopLeftRadius, border: cellCS.borderTopWidth, ta: cellCS.textAlign, fs: cellCS.fontSize },
    resend: { h: px(r(resend).height), fs: resCS.fontSize },
    cta: { h: px(r(cta).height), radius: ctaCS.borderTopLeftRadius, fs: ctaCS.fontSize, bg: ctaCS.backgroundColor, disabled: document.querySelector('.otp-btn').disabled },
    hscroll: document.documentElement.scrollWidth > window.innerWidth,
  };
  function px(v){return Math.round(v*100)/100;}
});

const rows = [
  ['Card width',        measure.card.w + 'px',               FIGMA.card.w + 'px'],
  ['Card padding',      measure.card.pad,                    FIGMA.card.pad + 'px'],
  ['Card gap',          measure.card.gap,                    FIGMA.card.gap + 'px'],
  ['Card radius',       measure.card.radius,                 FIGMA.card.radius + 'px'],
  ['Card border',       measure.card.border,                 FIGMA.card.border + 'px'],
  ['Card center / vh',  measure.cardCenterY + ' / ' + measure.vh, '~centered (Figma y203, frame 1086)'],
  ['Back w×h',          measure.back.w+'×'+measure.back.h,    FIGMA.back.w+'×'+FIGMA.back.h],
  ['Back weight/size',  measure.back.fw+' / '+measure.back.fs, FIGMA.back.fontWeight+' / '+FIGMA.back.fontSize+'px'],
  ['Title font',        measure.title.ff,                    'IBM Plex Sans'],
  ['Title size/lh/wt',  measure.title.fs+' / '+measure.title.lh+' / '+measure.title.fw, FIGMA.title.fontSize+'px / '+(FIGMA.title.fontSize*FIGMA.title.lineHeight)+'px / '+FIGMA.title.fontWeight],
  ['Subtitle font',     measure.subtitle.ff,                 'Work Sans'],
  ['Subtitle size/lh',  measure.subtitle.fs+' / '+measure.subtitle.lh, FIGMA.subtitle.fontSize+'px / '+(FIGMA.subtitle.fontSize*FIGMA.subtitle.lineHeight)+'px'],
  ['Subtitle lines',    measure.subtitle.lines,              '2 (wraps)'],
  ['Cells count',       measure.cells.count,                 FIGMA.cells.count],
  ['Cell width',        measure.cells.w + 'px',              FIGMA.cells.w + 'px'],
  ['Cell height',       measure.cells.h + 'px',              FIGMA.cells.h + 'px'],
  ['Cell gap',          measure.cells.gap + 'px',            FIGMA.cells.gap + 'px'],
  ['Cell radius',       measure.cells.radius,                FIGMA.cells.radius + 'px'],
  ['Cell border',       measure.cells.border,                FIGMA.cells.border + 'px'],
  ['Cell text-align',   measure.cells.ta,                    'center'],
  ['Resend h / size',   measure.resend.h+' / '+measure.resend.fs, FIGMA.resend.h+'px / '+FIGMA.resend.fontSize+'px'],
  ['CTA height',        measure.cta.h + 'px',                FIGMA.cta.h + 'px'],
  ['CTA radius',        measure.cta.radius,                  FIGMA.cta.radius + 'px'],
  ['CTA size',          measure.cta.fs,                      FIGMA.cta.fontSize + 'px'],
  ['CTA bg (empty)',    measure.cta.bg,                      'rgb(27,27,27) @ .6 opacity (disabled)'],
  ['HScroll @1440',     measure.hscroll,                     'false'],
];
console.log('\n=== OTP MEASUREMENT  (Current → Figma) ===');
for (const [k,c,f] of rows) console.log(k.padEnd(20), String(c).padEnd(34), '| ' + f);

await page.close();

// ── 2. ENABLED vs DISABLED side-by-side ──────────────────────────
async function cardShot(filled, w=1440, h=900) {
  const p = await browser.newPage({ viewport: { width: w, height: h } });
  await p.addInitScript(() => localStorage.setItem('theme', 'light'));
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForTimeout(700);
  if (filled) {
    const cells = await p.$$('.otp-cell');
    const code = ['4','8','1','5'];
    for (let i=0;i<cells.length;i++){ await cells[i].click(); await cells[i].type(code[i]); }
    await p.waitForTimeout(200);
    await p.$eval('body', b => b.click()); // blur to drop focus ring for clean state shot
    await p.waitForTimeout(150);
  }
  const card = await p.$('.otp-card');
  const box = await card.boundingBox();
  const buf = await p.screenshot({ clip: { x: box.x-24, y: box.y-24, width: box.width+48, height: box.height+48 } });
  await p.close();
  return buf.toString('base64');
}

const disabledB64 = await cardShot(false);
const enabledB64  = await cardShot(true);

const cmp = await browser.newPage({ viewport: { width: 1100, height: 620 } });
await cmp.setContent(`<body style="margin:0;background:#33373b;font-family:sans-serif;display:flex;gap:30px;padding:30px;align-items:flex-start;">
  <div><div style="color:#fff;margin-bottom:8px;">DISABLED (empty OTP)</div><img src="data:image/png;base64,${disabledB64}" style="width:474px;"/></div>
  <div><div style="color:#fff;margin-bottom:8px;">ENABLED (4 digits)</div><img src="data:image/png;base64,${enabledB64}" style="width:474px;"/></div>
</body>`);
await cmp.waitForTimeout(300);
await cmp.screenshot({ path: 'screenshots/otp-enabled-vs-disabled.png' });
await cmp.close();
console.log('\nwrote otp-enabled-vs-disabled.png');

// ── 3. MOBILE side-by-side (Figma full frame scaled vs live 393) ──
const figmaFull = readFileSync('screenshots/otp/figma-3124181.png').toString('base64');
const mp = await browser.newPage({ viewport: { width: 393, height: 850 } });
await mp.addInitScript(() => localStorage.setItem('theme', 'light'));
await mp.goto(URL, { waitUntil: 'networkidle' });
await mp.waitForTimeout(700);
const mobileB64 = (await mp.screenshot({ fullPage: false })).toString('base64');
await mp.close();

const ms = await browser.newPage({ viewport: { width: 1200, height: 980 } });
await ms.setContent(`<body style="margin:0;background:#33373b;font-family:sans-serif;display:flex;gap:30px;padding:30px;align-items:flex-start;">
  <div><div style="color:#fff;margin-bottom:8px;">FIGMA 3:124181 (desktop frame, for content ref)</div><img src="data:image/png;base64,${figmaFull}" style="width:700px;"/></div>
  <div><div style="color:#fff;margin-bottom:8px;">LIVE mobile 393</div><img src="data:image/png;base64,${mobileB64}" style="width:300px;border:1px solid #555;"/></div>
</body>`);
await ms.waitForTimeout(300);
await ms.screenshot({ path: 'screenshots/otp-mobile-sidebyside.png' });
await ms.close();
console.log('wrote otp-mobile-sidebyside.png');

await browser.close();
