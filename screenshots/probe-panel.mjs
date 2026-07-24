import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
await p.addInitScript(() => localStorage.setItem('theme','dark'));
await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const r = await p.evaluate(() => {
  const q = (s, prop='backgroundColor') => { const e=document.querySelector(s); return e?getComputedStyle(e)[prop]:'--'; };
  return {
    panel_bg: q('.analysis-section__panel'),
    kpi_bg: q('.analysis-section__kpi'),
    kpi_value_color: q('.analysis-section__kpi-value','color'),
    kpi_label_color: q('.analysis-section__kpi-label','color'),
    chartcard_bg: q('.analysis-section__chart-card'),
    chartTitle_color: q('.analysis-section__chart-title','color'),
    selectDate_bg: q('.analysis-section__chart-date'),
    primaryKpi_bg: q('.analysis-section__kpi--primary'),
  };
});
console.log(JSON.stringify(r,null,1));
await p.close(); await b.close();
