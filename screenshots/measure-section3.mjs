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
    const slider = q('.landing-trusted__slider');
    const tabs = [...document.querySelectorAll('.impact__tab')].map(r);
    const cards = [...document.querySelectorAll('.impact__card')].map(r);
    const tabsRow = r(q('.impact__tabs'));
    const grid = r(q('.impact__grid'));
    const title = q('.impact__card-title');
    const text = q('.impact__card-text');
    return {
      trustedSliderBottom: slider ? +(slider.getBoundingClientRect().bottom).toFixed(2) : null,
      tabsRow, tabs, grid, cards,
      stars: r(q('.impact__card-stars')),
      cta: r(q('.impact__card-cta')),
      titleFont: title ? getComputedStyle(title).fontSize + '/' + getComputedStyle(title).lineHeight + ' ' + getComputedStyle(title).fontFamily.split(',')[0] : null,
      titleColor: title ? getComputedStyle(title).color : null,
      textFont: text ? getComputedStyle(text).fontSize + ' ' + getComputedStyle(text).color : null,
      tabBg: tabs.length ? getComputedStyle(q('.impact__tab--active')).backgroundColor : null,
      cardBg: cards.length ? getComputedStyle(q('.impact__card')).backgroundColor : null,
      sectionBg: getComputedStyle(q('.landing-section--hr')).backgroundColor,
      gapSliderToTabs: slider && tabsRow ? +(tabsRow.y - slider.getBoundingClientRect().bottom).toFixed(2) : null,
      gapTabsToGrid: tabsRow && grid ? +(grid.y - (tabsRow.y + tabsRow.h)).toFixed(2) : null,
    };
  });
  console.log(`--- ${vp.name} ${vp.w} ---`);
  console.log(JSON.stringify(m, null, 2));
  await page.close();
}
await browser.close();
