import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [name,dark,w] of [['band-dark-1440',true,1440],['band-dark-393',true,393],['band-light-1440',false,1440]]) {
  const p = await b.newPage({ viewport: { width: w, height: 1000 } });
  if (dark) await p.addInitScript(() => localStorage.setItem('theme','dark'));
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1700);
  // capture from why top through testimonials bottom
  const box = await p.evaluate(() => {
    const why = document.querySelector('.landing-why').getBoundingClientRect();
    const tb = document.querySelector('.landing-testimonials').getBoundingClientRect();
    return { top: why.y + window.scrollY - 40, height: (tb.bottom - why.y) + 80 };
  });
  await p.evaluate(t => window.scrollTo({top:t,behavior:'instant'}), box.top);
  await p.waitForTimeout(300);
  await p.screenshot({ path: `screenshots/${name}.png`, clip: { x:0, y:0, width:w, height: Math.min(box.height, 1000) } });
  console.log('captured', name);
  await p.close();
}
await b.close();
