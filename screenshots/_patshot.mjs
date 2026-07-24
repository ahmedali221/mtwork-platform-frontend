import { chromium } from 'playwright';
import { readFileSync } from 'fs';
const svg = readFileSync('src/assets/images/login/promo-pattern.svg','utf8');
const b64 = Buffer.from(svg).toString('base64');
const html = `<!doctype html><html><body style="margin:0;background:#2e358f">
<div style="width:760px;height:520px;position:relative;overflow:hidden">
<img src="data:image/svg+xml;base64,${b64}" style="position:absolute;top:0;left:0;width:1100px;height:480px;opacity:0.25">
</div></body></html>`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 760, height: 520 } });
await page.setContent(html); await page.waitForTimeout(400);
await page.screenshot({ path: 'screenshots/_pat_full.png' });
await browser.close(); console.log('shot');
