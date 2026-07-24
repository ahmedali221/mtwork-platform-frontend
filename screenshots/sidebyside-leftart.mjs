import { chromium } from 'playwright';
import { readFileSync } from 'fs';
const fig = readFileSync('screenshots/_figma_leftart.png').toString('base64');
// crop the LEFT panel out of the live tall shot (720 wide × 1086)
import { execSync } from 'child_process';
const live = readFileSync('screenshots/_live_leftpanel.png').toString('base64');
const html = `<!doctype html><html><body style="margin:0;background:#888;font-family:sans-serif">
<div style="display:flex;gap:3px">
  <div style="flex:1"><div style="color:#fff;padding:6px;font:600 13px sans-serif">FIGMA left-art 3:123582</div>
    <img src="data:image/png;base64,${fig}" style="width:100%;display:block"></div>
  <div style="flex:1"><div style="color:#fff;padding:6px;font:600 13px sans-serif">LIVE left panel</div>
    <img src="data:image/png;base64,${live}" style="width:100%;display:block"></div>
</div></body></html>`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 820 } });
await page.setContent(html); await page.waitForTimeout(300);
await page.screenshot({ path: 'screenshots/login-leftart-sidebyside.png', fullPage: true });
await browser.close();
console.log('saved login-leftart-sidebyside.png');
