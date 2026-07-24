import { chromium } from 'playwright';

const browser = await chromium.launch();
for (const vp of [{ w: 1440, name: 'DESKTOP' }, { w: 393, name: 'MOBILE' }]) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: 900 } });
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const m = await page.evaluate(() => {
    const r = (el) => {
      if (!el) return null;
      const b = el.getBoundingClientRect();
      return { x: +b.x.toFixed(2), y: +b.y.toFixed(2), w: +b.width.toFixed(2), h: +b.height.toFixed(2) };
    };
    const q = (s) => document.querySelector(s);
    const cs = (s, p) => q(s) ? getComputedStyle(q(s))[p] : null;
    const visual = q('.steps__visual');
    const vb = visual?.getBoundingClientRect();
    const rel = (el) => {
      if (!el || !vb) return null;
      const b = el.getBoundingClientRect();
      return { x: +(b.x - vb.x).toFixed(2), y: +(b.y - vb.y).toFixed(2), w: +b.width.toFixed(2), h: +b.height.toFixed(2) };
    };
    const nums = [...document.querySelectorAll('.steps__number')].map(r);
    const items = [...document.querySelectorAll('.steps__item')].map(r);
    return {
      sectionBg: cs('app-steps-component', 'backgroundColor'),
      visual: r(visual),
      peopleCard: rel(q('.steps__people-card')),
      profitCard: rel(q('.steps__profit-card')),
      payrollCard: rel(q('.steps__payroll-card')),
      cardRadius: cs('.steps__people-card', 'borderRadius'),
      filters: r(q('.steps__filters')),
      filter1: r(q('.steps__filter:nth-child(1)')),
      filter2: r(q('.steps__filter:nth-child(2)')),
      filterAction: r(q('.steps__filter-action')),
      filterActionBg: cs('.steps__filter-action', 'backgroundColor'),
      filterColor: cs('.steps__filter', 'color'),
      avatars: r(q('.steps__avatars')),
      barChart: r(q('.steps__bar-chart')),
      barColor: cs('.steps__bar-chart span', 'backgroundColor'),
      content: r(q('.steps__content')),
      timeline: r(q('.steps__timeline')),
      numbers: nums,
      numberBg: cs('.steps__number', 'backgroundColor'),
      numberColor: cs('.steps__number', 'color'),
      numberFont: cs('.steps__number', 'fontSize') + ' lh ' + cs('.steps__number', 'lineHeight'),
      copy: r(q('.steps__copy')),
      items,
      titleFont: cs('.steps__item h3', 'fontSize') + ' lh ' + cs('.steps__item h3', 'lineHeight') + ' ' + cs('.steps__item h3', 'color'),
      descFont: cs('.steps__item p', 'fontSize') + ' lh ' + cs('.steps__item p', 'lineHeight') + ' ' + cs('.steps__item p', 'color'),
      contentGap: items.length > 1 ? +(items[1].y - (items[0].y + items[0].h)).toFixed(2) : null,
    };
  });
  console.log(`--- ${vp.name} ${vp.w} ---`);
  console.log(JSON.stringify(m, null, 2));
  await page.close();
}
await browser.close();
