import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const URL = 'http://localhost:4280/signup';
const browser = await chromium.launch();

const fFrame      = readFileSync('screenshots/signup/figma-3124199.png').toString('base64');
const fBusiness   = readFileSync('screenshots/signup/figma-card-business.png').toString('base64');
const fContractor = readFileSync('screenshots/signup/figma-card-contractor.png').toString('base64');
const fEmployee   = readFileSync('screenshots/signup/figma-card-employee.png').toString('base64');

// ── live full 1440 ──
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
const errs = [];
page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.evaluate(() => Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).catch(() => {});

// live card row closeup
const rowBox = await page.$eval('.signup-cards', el => { const b = el.getBoundingClientRect(); return { x: b.x, y: b.y, width: b.width, height: b.height }; });
await page.screenshot({ path: 'screenshots/live-card-closeup.png', clip: rowBox });

// brush / head closeup
const headBox = await page.$eval('.signup-head', el => { const b = el.getBoundingClientRect(); return { x: b.x, y: b.y, width: b.width, height: b.height }; });
const liveBrush = (await page.screenshot({ clip: { x: headBox.x - 20, y: headBox.y - 10, width: headBox.width + 40, height: headBox.height + 20 } })).toString('base64');

// footer closeup
const footBox = await page.$eval('.signup-footer', el => { const b = el.getBoundingClientRect(); return { x: b.x, y: b.y, width: b.width, height: b.height }; });
const liveFooter = (await page.screenshot({ clip: { x: footBox.x - 16, y: footBox.y - 12, width: footBox.width + 32, height: footBox.height + 24 } })).toString('base64');

// illus measured sizes
const illus = await page.evaluate(() => {
  const o = {};
  for (const k of ['business','contractor','employee']) {
    const i = document.querySelector('.signup-card--'+k+' .signup-card__illus').getBoundingClientRect();
    o[k] = Math.round(i.width)+'x'+Math.round(i.height);
  }
  return o;
});
console.log('illus rendered sizes:', JSON.stringify(illus));
console.log('console errors:', errs.length, errs.length ? errs : 'OK');
await page.close();

// 1x full live for side-by-side
const p1 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await p1.addInitScript(() => localStorage.setItem('theme', 'light'));
await p1.goto(URL, { waitUntil: 'networkidle' });
await p1.waitForTimeout(1300);
await p1.evaluate(() => Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).catch(() => {});
const liveFull = (await p1.screenshot({ fullPage: false })).toString('base64');
await p1.close();

// ── figma-card-closeup.png ──
const fc = await browser.newPage({ viewport: { width: 1100, height: 420 } });
await fc.setContent(`<body style="margin:0;background:#f0f0f0;display:flex;gap:24px;padding:30px;align-items:center;justify-content:center;">
  <img src="data:image/png;base64,${fBusiness}" style="height:320px;"/>
  <img src="data:image/png;base64,${fContractor}" style="height:320px;"/>
  <img src="data:image/png;base64,${fEmployee}" style="height:320px;"/>
</body>`);
await fc.waitForTimeout(300);
await fc.screenshot({ path: 'screenshots/figma-card-closeup.png' });
await fc.close();

// ── overlay-card-diff.png (3 cards: figma top, live bottom, same scale) ──
const liveRow = readFileSync('screenshots/live-card-closeup.png').toString('base64');
const ov = await browser.newPage({ viewport: { width: 1120, height: 760 } });
await ov.setContent(`<body style="margin:0;background:#33373b;font-family:sans-serif;padding:24px;color:#fff;">
  <div style="margin-bottom:8px;">FIGMA cards (top) vs LIVE cards (bottom) — same scale</div>
  <img src="data:image/png;base64,${fBusiness}" style="height:300px;"/>
  <img src="data:image/png;base64,${fContractor}" style="height:300px;margin-left:20px;"/>
  <img src="data:image/png;base64,${fEmployee}" style="height:300px;margin-left:20px;"/>
  <div style="margin:14px 0 8px;">LIVE:</div>
  <img src="data:image/png;base64,${liveRow}" style="width:1040px;"/>
</body>`);
await ov.waitForTimeout(300);
await ov.screenshot({ path: 'screenshots/overlay-card-diff.png', fullPage: true });
await ov.close();

// ── subtitle-brush-closeup.png (figma head crop vs live) ──
// crop figma frame head region (title+subtitle ~ x413-1027 y150-310 of 1440)
const sb = await browser.newPage({ viewport: { width: 900, height: 500 } });
await sb.setContent(`<body style="margin:0;background:#33373b;font-family:sans-serif;padding:24px;color:#fff;display:flex;flex-direction:column;gap:14px;">
  <div>FIGMA (full frame, head area) vs LIVE head closeup</div>
  <div style="overflow:hidden;width:840px;height:170px;position:relative;border:1px solid #555;">
    <img src="data:image/png;base64,${fFrame}" style="position:absolute;left:-300px;top:-150px;width:1440px;"/>
  </div>
  <div>LIVE:</div>
  <img src="data:image/png;base64,${liveBrush}" style="width:840px;border:1px solid #555;"/>
</body>`);
await sb.waitForTimeout(300);
await sb.screenshot({ path: 'screenshots/subtitle-brush-closeup.png', fullPage: true });
await sb.close();

// ── footer-login-closeup.png (figma footer crop vs live) ──
const ft = await browser.newPage({ viewport: { width: 760, height: 360 } });
await ft.setContent(`<body style="margin:0;background:#33373b;font-family:sans-serif;padding:24px;color:#fff;display:flex;flex-direction:column;gap:14px;">
  <div>FIGMA footer (frame crop) vs LIVE footer</div>
  <div style="overflow:hidden;width:520px;height:60px;position:relative;border:1px solid #555;background:#f7f5f2;">
    <img src="data:image/png;base64,${fFrame}" style="position:absolute;left:-560px;top:-735px;width:1440px;"/>
  </div>
  <div>LIVE:</div>
  <img src="data:image/png;base64,${liveFooter}" style="height:60px;border:1px solid #555;background:#f7f5f2;"/>
</body>`);
await ft.waitForTimeout(300);
await ft.screenshot({ path: 'screenshots/footer-login-closeup.png', fullPage: true });
await ft.close();

// ── final 1440 side-by-side ──
const fs2 = await browser.newPage({ viewport: { width: 1540, height: 640 } });
await fs2.setContent(`<body style="margin:0;background:#33373b;font-family:sans-serif;display:flex;flex-direction:column;gap:18px;padding:24px;color:#fff;">
  <div>FIGMA 3:124199 (top) vs LIVE /signup (bottom) — 1440</div>
  <img src="data:image/png;base64,${fFrame}" style="width:1440px;border:1px solid #555;"/>
  <img src="data:image/png;base64,${liveFull}" style="width:1440px;border:1px solid #555;"/>
</body>`);
await fs2.waitForTimeout(400);
await fs2.screenshot({ path: 'screenshots/signup-sidebyside.png', fullPage: true });
await fs2.close();

await browser.close();
console.log('wrote: figma-card-closeup, live-card-closeup, overlay-card-diff, subtitle-brush-closeup, footer-login-closeup, signup-sidebyside');
