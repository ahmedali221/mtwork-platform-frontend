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
    const header = q('.blog__header');
    const cards = [...document.querySelectorAll('.blog__card')].map(r);
    const prevSection = q('app-choosing-component'); // splits = section 5 end
    return {
      header: r(header),
      titleFont: q('.blog__title') ? getComputedStyle(q('.blog__title')).fontSize + ' ' + getComputedStyle(q('.blog__title')).color : null,
      wavey: r(q('.blog__wavey')),
      subtitle: r(q('.blog__subtitle')),
      headerCta: r(q('.blog__cta')),
      headerCtaBg: q('.blog__cta') ? getComputedStyle(q('.blog__cta')).backgroundColor : null,
      grid: r(q('.blog__grid')),
      cards,
      cardMedia: r(q('.blog__card-media')),
      cardTitleFont: q('.blog__card-title') ? getComputedStyle(q('.blog__card-title')).fontSize : null,
      cardTag: r(q('.blog__card-tag')),
      cardTagColors: q('.blog__card-tag') ? getComputedStyle(q('.blog__card-tag')).backgroundColor + ' / ' + getComputedStyle(q('.blog__card-tag')).color : null,
      cardCta: r(q('.blog__card-cta')),
      sectionBg: getComputedStyle(q('.landing-section--blog')).backgroundColor,
      gridGap: cards.length > 1 ? +(cards[1].x - (cards[0].x + cards[0].w)).toFixed(2) : null,
    };
  });
  console.log(`--- ${vp.name} ${vp.w} ---`);
  console.log(JSON.stringify(m, null, 2));
  await page.close();
}
await browser.close();
