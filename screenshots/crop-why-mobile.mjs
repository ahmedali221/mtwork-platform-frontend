import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 393, height: 900 } });
await p.addInitScript(() => localStorage.setItem('theme','dark'));
await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const el = await p.$('.landing-why');
await el.scrollIntoViewIfNeeded();
await p.waitForTimeout(250);
await el.screenshot({ path: 'screenshots/crop-why-mobile.png' });
const r = await p.evaluate(() => {
  const rect = s => { const e=document.querySelector(s); if(!e)return null; const b=e.getBoundingClientRect(); return {x:+b.x.toFixed(0),right:+b.right.toFixed(0)}; };
  return { hl: rect('.landing-why__highlight'), wav: rect('.landing-why__wavey'), title: rect('.landing-why__title'),
    wrap: getComputedStyle(document.querySelector('.landing-why__title')).whiteSpace };
});
console.log(JSON.stringify(r));
await p.close(); await b.close();
