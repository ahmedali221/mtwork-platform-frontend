import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';

const URL = 'http://localhost:4280/otp?email=example@gmaill.com';
const browser = await chromium.launch();

// ── 1. Live full-frame capture at the Figma frame size (1440×1086) ──
const page = await browser.newPage({ viewport: { width: 1440, height: 1086 } });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
const liveFull = await page.screenshot({ fullPage: false });

// ── 2. Side-by-side: Figma (left) vs Live (right), labelled ──
const figma = readFileSync('screenshots/otp/figma-3124181.png');
const figmaB64 = figma.toString('base64');
const liveB64 = liveFull.toString('base64');

const compose = await browser.newPage({ viewport: { width: 2920, height: 1180 } });
await compose.setContent(`
  <body style="margin:0;background:#33373b;font-family:sans-serif;display:flex;gap:40px;padding:30px;">
    <div><div style="color:#fff;font-size:20px;margin-bottom:10px;">FIGMA 3:124181</div>
      <img src="data:image/png;base64,${figmaB64}" style="width:1400px;border:1px solid #555;"/></div>
    <div><div style="color:#fff;font-size:20px;margin-bottom:10px;">LIVE /otp</div>
      <img src="data:image/png;base64,${liveB64}" style="width:1400px;border:1px solid #555;"/></div>
  </body>`);
await compose.waitForTimeout(400);
await compose.screenshot({ path: 'screenshots/otp-sidebyside.png', fullPage: false });
await compose.close();
console.log('wrote otp-sidebyside.png');

// ── 3. Closeup: filled state (enabled CTA + focus), card cropped ──
const cells = await page.$$('.otp-cell');
const codes = ['4', '8', '1', '5'];
for (let i = 0; i < cells.length; i++) {
  await cells[i].click();
  await cells[i].type(codes[i]);
}
await page.waitForTimeout(300);
const card = await page.$('.otp-card');
const box = await card.boundingBox();
await page.screenshot({
  path: 'screenshots/otp-closeup.png',
  clip: { x: box.x - 24, y: box.y - 24, width: box.width + 48, height: box.height + 48 },
});
console.log('wrote otp-closeup.png');

// verify CTA enabled when filled
const ctaDisabled = await page.$eval('.otp-btn', b => b.disabled);
console.log('CTA disabled when all 4 filled:', ctaDisabled, '(expect false)');

await page.close();
await browser.close();
