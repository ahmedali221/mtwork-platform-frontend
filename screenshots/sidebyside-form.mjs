import { chromium } from 'playwright';
import { readFileSync } from 'fs';
const fig  = readFileSync('screenshots/_form_node.png').toString('base64');
const live = readFileSync('screenshots/_live_form_crop.png').toString('base64');
const html = `<!doctype html><html><body style="margin:0;background:#888;font-family:sans-serif">
<div style="display:flex;gap:2px">
  <div style="flex:1"><div style="color:#fff;padding:6px;font:600 13px sans-serif">FIGMA form node 3:123680</div>
    <img src="data:image/png;base64,${fig}" style="width:100%;display:block"></div>
  <div style="flex:1"><div style="color:#fff;padding:6px;font:600 13px sans-serif">LIVE form (cropped)</div>
    <img src="data:image/png;base64,${live}" style="width:100%;display:block"></div>
</div></body></html>`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1120, height: 660 } });
await page.setContent(html); await page.waitForTimeout(300);
await page.screenshot({ path: 'screenshots/login-form-sidebyside.png', fullPage: true });
await browser.close();
console.log('saved login-form-sidebyside.png');
