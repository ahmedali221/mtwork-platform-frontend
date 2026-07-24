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
    const impactGrid = q('.impact__grid'); // section 3 grid (frozen)
    const band = q('.impact-band');
    const bandTitle = q('.impact-band__title');
    const stats = [...document.querySelectorAll('.impact-band__stat')].map(r);
    const intro = q('.compliance__intro');
    const cards = [...document.querySelectorAll('.compliance__card')].map(r);
    const services = [...document.querySelectorAll('.compliance__service')].map(r);
    const why = q('.compliance__why');
    return {
      sec3GridBottom: impactGrid ? +(impactGrid.getBoundingClientRect().bottom).toFixed(2) : null,
      bandTitle: r(bandTitle),
      bandTitleFont: bandTitle ? getComputedStyle(bandTitle).fontSize + '/' + getComputedStyle(bandTitle).lineHeight : null,
      stats,
      statIcon: r(q('.impact-band__stat-icon')),
      statValueFont: q('.impact-band__stat-value') ? getComputedStyle(q('.impact-band__stat-value')).fontSize : null,
      complianceBg: getComputedStyle(q('.compliance').closest('app-continouscompliance')).backgroundColor,
      intro: r(intro),
      introTitle: r(q('.compliance__title')),
      ctaTertiary: r(q('.compliance__cta--tertiary')),
      cards,
      cardArt: r(q('.compliance__card-art')),
      cardTitleFont: getComputedStyle(q('.compliance__card-title')).fontSize,
      why: r(why),
      ctaPrimary: r(q('.compliance__cta--primary')),
      services: services.slice(0, 3),
      serviceTitleFont: getComputedStyle(q('.compliance__service-title')).fontSize,
      gaps: {
        sec3ToBandTitle: bandTitle && impactGrid ? +(bandTitle.getBoundingClientRect().y - impactGrid.getBoundingClientRect().bottom).toFixed(2) : null,
        bandToCompliance: band && intro ? +(intro.getBoundingClientRect().y - band.getBoundingClientRect().bottom).toFixed(2) : null,
        introToCards: intro && cards.length ? +(cards[0].y - (intro.getBoundingClientRect().y + intro.getBoundingClientRect().height)).toFixed(2) : null,
        cardsToWhy: cards.length && why ? +(why.getBoundingClientRect().y - (cards[0].y + cards[0].h)).toFixed(2) : null,
        whyToServices: why && services.length ? +(services[0].y - (why.getBoundingClientRect().y + why.getBoundingClientRect().height)).toFixed(2) : null,
      },
    };
  });
  console.log(`--- ${vp.name} ${vp.w} ---`);
  console.log(JSON.stringify(m, null, 2));
  await page.close();
}
await browser.close();
