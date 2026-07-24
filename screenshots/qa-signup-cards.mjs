import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const URL = 'http://localhost:4280/signup';
const browser = await chromium.launch();

// ── Figma card references (full card renders) ──
const fBusiness   = readFileSync('screenshots/signup/figma-card-business.png').toString('base64');
const fContractor = readFileSync('screenshots/signup/figma-card-contractor.png').toString('base64');
const fEmployee   = readFileSync('screenshots/signup/figma-card-employee.png').toString('base64');

// ── 1. figma-card-closeup.png — the 3 Figma cards side by side ──
const fc = await browser.newPage({ viewport: { width: 1100, height: 420 } });
await fc.setContent(`<body style="margin:0;background:#f0f0f0;display:flex;gap:24px;padding:30px;align-items:center;justify-content:center;">
  <img src="data:image/png;base64,${fBusiness}" style="height:320px;"/>
  <img src="data:image/png;base64,${fContractor}" style="height:320px;"/>
  <img src="data:image/png;base64,${fEmployee}" style="height:320px;"/>
</body>`);
await fc.waitForTimeout(300);
await fc.screenshot({ path: 'screenshots/figma-card-closeup.png' });
await fc.close();
console.log('wrote figma-card-closeup.png');

// ── 2. live-card-closeup.png — live 3-card row at 2x ──
const lp = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await lp.addInitScript(() => localStorage.setItem('theme', 'light'));
await lp.goto(URL, { waitUntil: 'networkidle' });
await lp.waitForTimeout(1500);
await lp.evaluate(() => Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).catch(() => {});
const rowBox = await lp.$eval('.signup-cards', el => { const b = el.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height }; });
await lp.screenshot({ path: 'screenshots/live-card-closeup.png', clip: { x: rowBox.x, y: rowBox.y, width: rowBox.w, height: rowBox.h } });

// measure illustration rendered sizes vs the card
const illusInfo = await lp.evaluate(() => {
  const out = {};
  for (const key of ['business','contractor','employee']) {
    const img = document.querySelector('.signup-card--'+key+' .signup-card__illus');
    const wrap = document.querySelector('.signup-card--'+key+' .signup-card__illus-wrap');
    const ri = img.getBoundingClientRect(), rw = wrap.getBoundingClientRect();
    out[key] = { imgW: Math.round(ri.width), imgH: Math.round(ri.height), natW: img.naturalWidth, natH: img.naturalHeight, slotH: Math.round(rw.height) };
  }
  return out;
});
console.log('illustration sizes:', JSON.stringify(illusInfo, null, 2));
await lp.close();
console.log('wrote live-card-closeup.png');

// ── 3. overlay-card-diff.png — single Business card: Figma vs live overlaid ──
// Capture one live business card cropped to 320×320 (card box only)
const op = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await op.addInitScript(() => localStorage.setItem('theme', 'light'));
await op.goto(URL, { waitUntil: 'networkidle' });
await op.waitForTimeout(1200);
const bizBox = await op.$eval('.signup-card--business', el => { const b = el.getBoundingClientRect(); return { x: b.x, y: b.y, width: b.width, height: b.height }; });
const liveBiz = (await op.screenshot({ clip: bizBox })).toString('base64');
await op.close();

// Figma business card cropped to its 320 card region (render is 536×353, card centered)
const ov = await browser.newPage({ viewport: { width: 760, height: 420 } });
await ov.setContent(`<body style="margin:0;background:#888;font-family:sans-serif;padding:24px;">
  <div style="color:#fff;font-size:12px;margin-bottom:8px;">BUSINESS card overlay — Figma full card (left) · Live card (right) · same 320px scale</div>
  <div style="display:flex;gap:30px;">
    <div><div style="color:#fff;font-size:11px;">FIGMA</div><img src="data:image/png;base64,${fBusiness}" style="height:320px;"/></div>
    <div><div style="color:#fff;font-size:11px;">LIVE</div><img src="data:image/png;base64,${liveBiz}" style="width:320px;height:320px;"/></div>
  </div>
</body>`);
await ov.waitForTimeout(300);
await ov.screenshot({ path: 'screenshots/overlay-card-diff.png' });
await ov.close();
console.log('wrote overlay-card-diff.png');

await browser.close();
