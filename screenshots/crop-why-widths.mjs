import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1280, 1100, 1024, 900, 820, 768]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.addInitScript(() => localStorage.setItem('theme','dark'));
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1300);
  const el = await p.$('.landing-why');
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(250);
  await el.screenshot({ path: `screenshots/crop-why-${w}.png` });
  const r = await p.evaluate(() => {
    const rect = s => { const e=document.querySelector(s); if(!e)return null; const b=e.getBoundingClientRect(); return {x:+b.x.toFixed(0),right:+b.right.toFixed(0),w:+b.width.toFixed(0)}; };
    const hl=document.querySelector('.landing-why__highlight');
    return { hl: rect('.landing-why__highlight'), wav: rect('.landing-why__wavey'),
      titleWrap: getComputedStyle(document.querySelector('.landing-why__title')).whiteSpace };
  });
  console.log(`${w}: highlight=${JSON.stringify(r.hl)} wavey=${JSON.stringify(r.wav)} wrap=${r.titleWrap}`);
  await p.close();
}
await b.close();
