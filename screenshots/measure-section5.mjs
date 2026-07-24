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
    const compliance = q('app-continouscompliance');
    const whyTitle = q('.landing-why__title');
    const cols = [...document.querySelectorAll('.landing-testimonials__column')].map(r);
    const visibleCards = [...document.querySelectorAll('.landing-testimonials__column:first-child .landing-testimonials__card')].map(r);
    const rows = [...document.querySelectorAll('.splits__row')].map(r);
    const texts = [...document.querySelectorAll('.splits__text')].map(r);
    const panels = [...document.querySelectorAll('.splits__panel')].map(r);
    return {
      complianceBottom: compliance ? +(compliance.getBoundingClientRect().bottom).toFixed(2) : null,
      whyTitle: r(whyTitle),
      whyTitleFont: whyTitle ? getComputedStyle(whyTitle).fontSize : null,
      wavey: r(q('.landing-why__wavey')),
      desc: r(q('.landing-why__description')),
      cols,
      firstCard: visibleCards[0],
      cardBg: visibleCards.length ? getComputedStyle(q('.landing-testimonials__card')).backgroundColor : null,
      col2Bg: q('.landing-testimonials__column--blue .landing-testimonials__card') ? getComputedStyle(q('.landing-testimonials__column--blue .landing-testimonials__card')).backgroundColor : null,
      avatar: r(q('.landing-testimonials__avatar')),
      rows, texts, panels,
      badge: r(q('.splits__badge')),
      cta: r(q('.splits__cta')),
      listItemColor: q('.splits__list-item') ? getComputedStyle(q('.splits__list-item')).color : null,
      gaps: {
        complianceToWhy: compliance && whyTitle ? +(q('.landing-why').getBoundingClientRect().y - compliance.getBoundingClientRect().bottom).toFixed(2) : null,
        whyToCols: cols.length ? +(cols[0].y - (q('.landing-why').getBoundingClientRect().y + q('.landing-why').getBoundingClientRect().height)).toFixed(2) : null,
        colsToSplit1: rows.length && cols.length ? +(rows[0].y - (cols[0].y + cols[0].h)).toFixed(2) : null,
        split1ToSplit2: rows.length > 1 ? +(rows[1].y - (rows[0].y + rows[0].h)).toFixed(2) : null,
      },
    };
  });
  console.log(`--- ${vp.name} ${vp.w} ---`);
  console.log(JSON.stringify(m, null, 2));
  await page.close();
}
await browser.close();
