import { chromium } from 'playwright';
import { readFileSync } from 'fs';
const figma = readFileSync('screenshots/_figma_fold_900.png').toString('base64');
const live  = readFileSync('screenshots/login-desktop-1440.png').toString('base64');
const html = `<!doctype html><html><body style="margin:0;background:#222;font-family:sans-serif">
<div style="display:flex">
  <div style="flex:1"><div style="color:#fff;padding:6px 10px;font:600 14px sans-serif">FIGMA 3:123581 — top fold (1440×900)</div>
    <img src="data:image/png;base64,${figma}" style="width:100%;display:block;border-right:2px solid #888"></div>
  <div style="flex:1"><div style="color:#fff;padding:6px 10px;font:600 14px sans-serif">LIVE /login (1440×900)</div>
    <img src="data:image/png;base64,${live}" style="width:100%;display:block"></div>
</div></body></html>`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 2200, height: 760 } });
await page.setContent(html); await page.waitForTimeout(400);
await page.screenshot({ path: 'screenshots/login-fold-sidebyside.png', fullPage: true });
await browser.close();
console.log('saved login-fold-sidebyside.png');
