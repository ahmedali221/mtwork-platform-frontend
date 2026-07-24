import { chromium } from 'playwright';

const browser = await chromium.launch();

for (const vp of [{ w: 1440, name: 'dark-desktop-1440' }, { w: 393, name: 'dark-mobile-393' }]) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: 720 } });
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);

  const m = await page.evaluate(() => {
    const cs = (sel, props) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const s = getComputedStyle(el);
      return Object.fromEntries(props.map(p => [p, s.getPropertyValue(p)]));
    };
    return {
      darkClassActive: document.documentElement.classList.contains('dark-theme'),
      heroBg: cs('.landing-hero', ['background-color']),
      heroGlow: cs('.landing-hero', ['--landing-hero-glow'])?.['--landing-hero-glow']?.slice(0, 80),
      navPill: cs('.navbar__frame', ['background-color']),
      langBtn: cs('.navbar__utility-button--language', ['background-color', 'color']),
      themeBtn: cs('.navbar__utility-button--theme', ['background-color', 'width', 'height']),
      demoCta: cs('.navbar__cta--demo', ['background-color', 'color']),
      loginCta: cs('.navbar__cta--login', ['background-color', 'color']),
      menuToggle: cs('.navbar__menu-toggle', ['background-color', 'color']),
      badge: cs('.landing-hero__badge', ['background-color', 'border-color', 'color']),
      title: cs('.landing-hero__title', ['color']),
      highlightText: cs('.landing-hero__title-highlight-text', ['color']),
      description: cs('.landing-hero__description', ['color']),
      primaryBtn: cs('.landing-hero__button--primary', ['background-color', 'color']),
      secondaryBtn: cs('.landing-hero__button--secondary', ['background-color', 'color']),
    };
  });
  console.log(`--- ${vp.name} ---`);
  console.log(JSON.stringify(m, null, 2));
  await page.screenshot({ path: `screenshots/${vp.name}.png` });
  await page.close();
}
await browser.close();
console.log('screenshots saved');
