import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1800);

const m = await page.evaluate(() => {
  const q = (s) => document.querySelector(s);
  const r = (el) => {
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return { x: +b.x.toFixed(2), y: +b.y.toFixed(2), w: +b.width.toFixed(2), h: +b.height.toFixed(2) };
  };
  const panel = q('.analysis-section__panel');
  const bars = [...document.querySelectorAll('.analysis-section__chart-bars span')].map(s => +s.getBoundingClientRect().height.toFixed(2));
  const kpiBars = [...document.querySelectorAll('.analysis-section__kpi-bars span')].map(s => +s.getBoundingClientRect().height.toFixed(2));
  const kpis = [...document.querySelectorAll('.analysis-section__kpi')].map(el => r(el));
  const gap = (a, b) => +(b.x - (a.x + a.w)).toFixed(2);
  const logos = [...document.querySelectorAll('.landing-trusted__logo')];
  return {
    panel: r(panel),
    panelShadow: getComputedStyle(panel).boxShadow,
    kpis,
    kpiGap: kpis.length > 1 ? gap(kpis[0], kpis[1]) : null,
    chartCard: r(q('.analysis-section__chart-card')),
    barHeights: bars,
    kpiBarHeights: kpiBars,
    legendPill: r(q('.analysis-section__legend-pill')),
    datePill: r(q('.analysis-section__chart-date')),
    chartTitlePx: getComputedStyle(q('.analysis-section__chart-title')).fontSize,
    kpiLabelFont: getComputedStyle(q('.analysis-section__kpi-label')).fontFamily.split(',')[0] + ' ' + getComputedStyle(q('.analysis-section__kpi-label')).fontSize,
    floatLeft: r(q('.analysis-section__float--left')),
    floatRight: r(q('.analysis-section__float--right')),
    logoCount: logos.length,
    logoSize: r(logos[0]),
    logoGap: logos.length > 1 ? gap(r(logos[0]), r(logos[1])) : null,
    trustedTitleFont: getComputedStyle(q('.landing-trusted__title')).fontSize + ' / ' + getComputedStyle(q('.landing-trusted__title')).fontFamily.split(',')[0],
  };
});
console.log(JSON.stringify(m, null, 2));
await browser.close();
