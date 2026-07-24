import { chromium } from 'playwright';
const b = await chromium.launch();
for (const dark of [false, true]) {
  for (const w of [1440, 1024, 768, 393]) {
    const p = await b.newPage({ viewport: { width: w, height: 1000 } });
    if (dark) await p.addInitScript(() => localStorage.setItem('theme','dark'));
    await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
    await p.waitForTimeout(1300);
    const r = await p.evaluate(() => {
      const de = document.documentElement;
      const g = s => { const e=document.querySelector(s); return e?getComputedStyle(e).backgroundColor:'--'; };
      return { hscroll: de.scrollWidth-de.clientWidth, why:g('.landing-why'), testim:g('.landing-testimonials'), kpi:g('.analysis-section__kpi') };
    });
    console.log(`${dark?'DARK ':'LIGHT'} ${w}: hscroll=${r.hscroll} why=${r.why} testim=${r.testim} kpi=${r.kpi}`);
    await p.close();
  }
}
await b.close();
