import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const m = await page.evaluate(() => {
  const r = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return { x: +b.x.toFixed(2), y: +b.y.toFixed(2), w: +b.width.toFixed(2), h: +b.height.toFixed(2) };
  };
  return {
    navFrame: r('.navbar__frame'),
    logoLockup: r('.navbar__brand-lockup'),
    themeBtn: r('.navbar__utility-button--theme'),
    langBtn: r('.navbar__utility-button--language'),
    loginCta: r('.navbar__cta--login'),
    demoCta: r('.navbar__cta--demo'),
    badge: r('.landing-hero__badge'),
    title: r('.landing-hero__title'),
    description: r('.landing-hero__description'),
    actions: r('.landing-hero__actions'),
    primaryBtn: r('.landing-hero__button--primary'),
    secondaryBtn: r('.landing-hero__button--secondary'),
    content: r('.landing-hero__content'),
    hero: r('.landing-hero'),
  };
});
console.log(JSON.stringify(m, null, 2));

// mobile
const mp = await browser.newPage({ viewport: { width: 393, height: 900 } });
await mp.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await mp.waitForTimeout(1500);
const mm = await mp.evaluate(() => {
  const r = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return { x: +b.x.toFixed(2), y: +b.y.toFixed(2), w: +b.width.toFixed(2), h: +b.height.toFixed(2) };
  };
  const title = document.querySelector('.landing-hero__title');
  return {
    navFrame: r('.navbar__frame'),
    menuToggle: r('.navbar__menu-toggle'),
    badge: r('.landing-hero__badge'),
    title: r('.landing-hero__title'),
    titleFont: title ? getComputedStyle(title).fontSize + ' / ' + getComputedStyle(title).lineHeight : null,
    content: r('.landing-hero__content'),
    actions: r('.landing-hero__actions'),
  };
});
console.log('--- MOBILE 393 ---');
console.log(JSON.stringify(mm, null, 2));
await browser.close();
