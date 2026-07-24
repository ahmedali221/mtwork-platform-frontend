import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const URL = 'http://localhost:4280/otp?email=example@gmaill.com';
const browser = await chromium.launch();

// ── Figma target rhythm (card-relative, from metadata 3:124189) ──
const FIGMA = {
  cardW: 426, cardH: 419,
  gaps: { backTitle: 24, titleSub: 4, subOtp: 24, otpResend: 4, resendCta: 32 },
  cell: { w: 88.5, h: 56, gap: 8 },
  cta: { h: 48, radius: 12 },
};

// ── 1. Capture live card at 1:1 (deviceScaleFactor 1, clip to card) ──
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(900);

// Measure real card-relative element tops to compute LIVE gaps
const live = await page.evaluate(() => {
  const r = s => { const e = document.querySelector(s); const b = e.getBoundingClientRect(); return { top: b.top, bottom: b.bottom, left: b.left, right: b.right, w: b.width, h: b.height }; };
  const card = r('.otp-card');
  const back = r('.otp-back');
  const title = r('.otp-head__title');
  const sub = r('.otp-head__subtitle');
  const cellsEls = [...document.querySelectorAll('.otp-cell')];
  const c0 = cellsEls[0].getBoundingClientRect();
  const c1 = cellsEls[1].getBoundingClientRect();
  const cLast = cellsEls[3].getBoundingClientRect();
  const resend = r('.otp-resend');
  const cta = r('.otp-btn');
  const csCta = getComputedStyle(document.querySelector('.otp-btn'));
  const round = v => Math.round(v * 10) / 10;
  return {
    card: { w: round(card.w), h: round(card.h) },
    gaps: {
      backTitle: round(title.top - back.bottom),
      titleSub: round(sub.top - title.bottom),
      subOtp: round(c0.top - sub.bottom),
      otpResend: round(resend.top - c0.bottom),
      resendCta: round(cta.top - resend.bottom),
    },
    cell: { w: round(c0.width), h: round(c0.height), gap: round(c1.left - c0.right), rowW: round(cLast.right - c0.left) },
    cta: { h: round(cta.h), radius: csCta.borderTopLeftRadius },
    cardBox: { x: card.left, y: card.top, w: card.w, h: card.h },
  };
});

// Clip-capture the live card exactly (no surrounding padding) at native scale
const b = live.cardBox;
const liveCardBuf = await page.screenshot({ clip: { x: b.x, y: b.y, width: b.w, height: b.h } });
const liveCardB64 = liveCardBuf.toString('base64');

// ── Report measured deltas ──
const figmaCard = readFileSync('screenshots/otp/figma-card-3124189.png').toString('base64');
const rows = [
  ['Card width',       live.card.w,        FIGMA.cardW],
  ['Card height',      live.card.h,        FIGMA.cardH],
  ['gap Back→Title',   live.gaps.backTitle, FIGMA.gaps.backTitle],
  ['gap Title→Sub',    live.gaps.titleSub,  FIGMA.gaps.titleSub],
  ['gap Sub→OTP',      live.gaps.subOtp,    FIGMA.gaps.subOtp],
  ['gap OTP→Resend',   live.gaps.otpResend, FIGMA.gaps.otpResend],
  ['gap Resend→CTA',   live.gaps.resendCta, FIGMA.gaps.resendCta],
  ['cell width',       live.cell.w,        FIGMA.cell.w],
  ['cell height',      live.cell.h,        FIGMA.cell.h],
  ['cell gap',         live.cell.gap,      FIGMA.cell.gap],
  ['OTP row width',    live.cell.rowW,     378],
  ['CTA height',       live.cta.h,         FIGMA.cta.h],
  ['CTA radius',       live.cta.radius,    FIGMA.cta.radius + 'px'],
];
console.log('\n=== OTP 1:1 GEOMETRY  Element | Live | Figma | Δ ===');
for (const [k, l, f] of rows) {
  const d = (typeof l === 'number' && typeof f === 'number') ? (Math.round((l - f) * 10) / 10) : '-';
  console.log(k.padEnd(16), String(l).padEnd(8), String(f).padEnd(8), 'Δ=' + d);
}

await page.close();

// ── 2. v2 side-by-side: BOTH cards rendered at EXACTLY 426px wide ──
const v2 = await browser.newPage({ viewport: { width: 1000, height: 520 } });
await v2.setContent(`<body style="margin:0;background:#33373b;font-family:sans-serif;display:flex;gap:40px;padding:30px;align-items:flex-start;">
  <div><div style="color:#fff;margin-bottom:10px;">FIGMA 3:124189 (426×419 native)</div>
    <img src="data:image/png;base64,${figmaCard}" style="width:426px;display:block;"/></div>
  <div><div style="color:#fff;margin-bottom:10px;">LIVE card (clipped, 426px native)</div>
    <img src="data:image/png;base64,${liveCardB64}" style="width:426px;display:block;"/></div>
</body>`);
await v2.waitForTimeout(300);
await v2.screenshot({ path: 'screenshots/otp-sidebyside-v2.png' });
await v2.close();
console.log('\nwrote otp-sidebyside-v2.png  (both at true 426px scale)');

// ── 3. Overlay diff: Figma card + live card stacked, live @55% opacity ──
const ov = await browser.newPage({ viewport: { width: 560, height: 520 } });
await ov.setContent(`<body style="margin:0;background:#888;font-family:sans-serif;padding:30px;">
  <div style="color:#fff;margin-bottom:10px;font-size:13px;">OVERLAY — Figma (base) + Live (magenta-tinted, 55% over). Perfect align = no ghosting.</div>
  <div style="position:relative;width:426px;height:419px;">
    <img src="data:image/png;base64,${figmaCard}" style="position:absolute;inset:0;width:426px;height:419px;"/>
    <img src="data:image/png;base64,${liveCardB64}" style="position:absolute;inset:0;width:426px;height:419px;opacity:0.55;filter:hue-rotate(280deg) saturate(3);"/>
  </div>
</body>`);
await ov.waitForTimeout(300);
await ov.screenshot({ path: 'screenshots/otp-overlay-diff.png' });
await ov.close();
console.log('wrote otp-overlay-diff.png');

await browser.close();
