import { chromium } from 'playwright';

const browser = await chromium.launch();

for (const vp of [{ w: 1440, name: 'DESKTOP' }, { w: 393, name: 'MOBILE' }]) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: 900 } });
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const m = await page.evaluate(() => {
    const r = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const b = el.getBoundingClientRect();
      return { x: +b.x.toFixed(2), y: +b.y.toFixed(2), w: +b.width.toFixed(2), h: +b.height.toFixed(2) };
    };
    const hero = r('.landing-hero');
    const panel = r('.analysis-section__panel');
    const out = {
      heroBottom: hero ? +(hero.y + hero.h).toFixed(2) : null,
      panel,
      kpiRow: r('.analysis-section__kpis'),
      kpiCard: r('.analysis-section__kpi'),
      chartCard: r('.analysis-section__chart-card'),
      chartBars: r('.analysis-section__chart-bars'),
      floatLeft: r('.analysis-section__float--left'),
      floatRight: r('.analysis-section__float--right'),
      trustedTitle: r('.landing-trusted__title'),
      trustedSubtitle: r('.landing-trusted__subtitle'),
      slider: r('.landing-trusted__slider'),
      logo: r('.landing-trusted__logo'),
    };
    if (hero && panel) out.heroToPanelGap = +(panel.y - (hero.y + hero.h)).toFixed(2);
    const tt = out.trustedTitle;
    if (panel && tt) out.panelToTrustedGap = +(tt.y - (panel.y + panel.h)).toFixed(2);
    return out;
  });
  console.log(`--- ${vp.name} ${vp.w} ---`);
  console.log(JSON.stringify(m, null, 2));
  await page.close();
}
await browser.close();
