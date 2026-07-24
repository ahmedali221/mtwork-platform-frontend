import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const figma = readFileSync('screenshots/_figma_ref_1440.png').toString('base64');
const live  = readFileSync('screenshots/login-desktop-tall.png').toString('base64');

const html = `<!doctype html><html><body style="margin:0;background:#333;display:flex;flex-direction:column;font-family:sans-serif">
<div style="display:flex">
  <div style="flex:1"><div style="color:#fff;padding:6px 10px;font:600 14px sans-serif">FIGMA 3:123581</div>
    <img src="data:image/png;base64,${figma}" style="width:100%;display:block"></div>
  <div style="flex:1"><div style="color:#fff;padding:6px 10px;font:600 14px sans-serif">LIVE /login</div>
    <img src="data:image/png;base64,${live}" style="width:100%;display:block"></div>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1800, height: 700 } });
await page.setContent(html);
await page.waitForTimeout(400);
await page.screenshot({ path: 'screenshots/login-sidebyside.png', fullPage: true });
await browser.close();
console.log('saved login-sidebyside.png');
