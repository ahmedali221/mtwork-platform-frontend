import { chromium } from 'playwright';
const b = await chromium.launch();
for (const dark of [false, true]) {
  for (const w of [1440, 768, 393]) {
    const p = await b.newPage({ viewport: { width: w, height: 1000 } });
    if (dark) await p.addInitScript(() => localStorage.setItem('theme','dark'));
    await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
    await p.waitForTimeout(1400);
    const r = await p.evaluate(() => {
      const de = document.documentElement;
      const q = (s,pr='backgroundColor') => { const e=document.querySelector(s); return e?getComputedStyle(e)[pr]:'--'; };
      return { hscroll: de.scrollWidth - de.clientWidth, kpi: q('.analysis-section__kpi'), chart: q('.analysis-section__chart-card') };
    });
    console.log(`${dark?'DARK':'LIGHT'} ${w}: hscroll=${r.hscroll} kpi=${r.kpi} chart=${r.chart}`);
    await p.close();
  }
}
await b.close();
