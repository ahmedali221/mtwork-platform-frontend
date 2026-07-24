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
    const cols = [...document.querySelectorAll('.lp-footer__column')].map(r);
    const socials = [...document.querySelectorAll('.lp-footer__social-link')].map(r);
    const grid = q('.lp-footer__grid');
    const gb = grid?.getBoundingClientRect();
    return {
      footerBg: cs('.lp-footer', 'backgroundColor'),
      inner: r(q('.lp-footer__inner')),
      innerPad: cs('.lp-footer__inner', 'padding'),
      grid: r(grid),
      gridGap: cols.length ? +(cols[0].x - (q('.lp-footer__brand').getBoundingClientRect().x + q('.lp-footer__brand').getBoundingClientRect().width)).toFixed(2) : null,
      brand: r(q('.lp-footer__brand')),
      logo: r(q('.lp-footer__logo')),
      description: r(q('.lp-footer__description')),
      descFont: cs('.lp-footer__description', 'fontSize') + ' ' + cs('.lp-footer__description', 'color'),
      social: r(q('.lp-footer__social')),
      socialCount: socials.length,
      socialLink: socials[0],
      socialBg: cs('.lp-footer__social-link', 'backgroundColor'),
      socialGap: socials.length > 1 ? +(socials[1].x - (socials[0].x + socials[0].w)).toFixed(2) : null,
      columns: cols,
      heading: r(q('.lp-footer__heading')),
      headingFont: cs('.lp-footer__heading', 'fontSize') + ' ' + cs('.lp-footer__heading', 'fontWeight') + ' ' + cs('.lp-footer__heading', 'color'),
      linkFont: cs('.lp-footer__links a', 'fontSize') + ' ' + cs('.lp-footer__links a', 'color'),
      linkPad: cs('.lp-footer__links a', 'padding'),
      divider: r(q('.lp-footer__divider')),
      bottom: r(q('.lp-footer__bottom')),
      copyright: r(q('.lp-footer__copyright')),
      copyrightFont: cs('.lp-footer__copyright', 'fontSize') + ' ' + cs('.lp-footer__copyright', 'color'),
      policies: r(q('.lp-footer__policies')),
      policiesFont: cs('.lp-footer__policies a', 'fontSize') + ' ' + cs('.lp-footer__policies a', 'color'),
    };
  });
  console.log(`--- ${vp.name} ${vp.w} ---`);
  console.log(JSON.stringify(m, null, 2));
  await page.close();
}
await browser.close();
