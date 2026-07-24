import { chromium } from 'playwright';
import fs from 'fs';

const browser = await chromium.launch();

// 1) Capture live modal (enabled state) at 1440, isolated card, for side-by-side
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
await page.waitForTimeout(1400);
await page.click('.login-link--danger');
await page.waitForTimeout(300);
await page.fill('#fp-modal-email', 'user@example.com');
await page.evaluate(() => document.querySelector('#fp-modal-email').blur());
await page.waitForTimeout(200);
const card = await page.$('.modal-card');
const liveBuf = await card.screenshot();
fs.writeFileSync('screenshots/forgot/_live-card.png', liveBuf);

// 2) Build a side-by-side HTML: Figma reference (left) vs live (right)
const figmaB64 = fs.readFileSync('screenshots/forgot/figma-modal.png').toString('base64');
const liveB64  = liveBuf.toString('base64');
const html = `<!doctype html><html><body style="margin:0;background:#ddd;font-family:sans-serif">
<div style="display:flex;gap:24px;padding:24px;align-items:flex-start">
  <figure style="margin:0"><figcaption style="font:600 14px sans-serif;margin-bottom:8px">FIGMA 3:124172</figcaption>
    <img src="data:image/png;base64,${figmaB64}" style="width:567px;display:block;border:1px solid #999"></figure>
  <figure style="margin:0"><figcaption style="font:600 14px sans-serif;margin-bottom:8px">LIVE @1440</figcaption>
    <img src="data:image/png;base64,${liveB64}" style="width:567px;display:block;border:1px solid #999"></figure>
</div></body></html>`;
const sbs = await browser.newPage({ viewport: { width: 1240, height: 420 } });
await sbs.setContent(html, { waitUntil: 'networkidle' });
await sbs.waitForTimeout(300);
await sbs.screenshot({ path: 'screenshots/forgot/forgot-sidebyside.png' });
console.log('side-by-side captured');

await browser.close();
