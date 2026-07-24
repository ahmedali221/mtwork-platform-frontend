import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.addInitScript(() => localStorage.setItem('theme','dark'));
await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const r = await p.evaluate(() => {
  const wav = document.querySelector('.landing-why__wavey');
  const hl = document.querySelector('.landing-why__highlight');
  return { waveyDisplay: getComputedStyle(wav).display,
    highlightBeforeBg: getComputedStyle(hl,'::before').backgroundColor,
    hl: (()=>{const b=hl.getBoundingClientRect();return{x:+b.x.toFixed(0),right:+b.right.toFixed(0)}})(),
    wav: (()=>{const b=wav.getBoundingClientRect();return{x:+b.x.toFixed(0),right:+b.right.toFixed(0)}})() };
});
console.log('DESKTOP 1440:', JSON.stringify(r));
await p.close(); await b.close();
