import { chromium } from 'playwright';
const b = await chromium.launch();
for (const dark of [false, true]) {
  for (const w of [1440, 393]) {
    const p = await b.newPage({ viewport: { width: w, height: 1000 } });
    if (dark) await p.addInitScript(() => localStorage.setItem('theme','dark'));
    await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
    await p.waitForTimeout(1400);
    const r = await p.evaluate(() => {
      const de = document.documentElement;
      const g = (s) => { const e=document.querySelector(s); if(!e)return null; const b=e.getBoundingClientRect(); const cs=getComputedStyle(e); return {w:+b.width.toFixed(0), x:+b.x.toFixed(0), bg:cs.backgroundColor}; };
      return { hscroll: de.scrollWidth-de.clientWidth, page:getComputedStyle(document.querySelector('.landing-page')).backgroundColor,
        why:g('.landing-why'), testim:g('.landing-testimonials') };
    });
    console.log(`${dark?'DARK ':'LIGHT'} ${w}: hscroll=${r.hscroll} page=${r.page}`);
    console.log(`   why:    w=${r.why.w} x=${r.why.x} bg=${r.why.bg}`);
    console.log(`   testim: w=${r.testim.w} x=${r.testim.x} bg=${r.testim.bg}`);
    await p.close();
  }
}
await b.close();
