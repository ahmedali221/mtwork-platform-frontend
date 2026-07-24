import { chromium } from 'playwright';

const runs = [
  { name: 'qa-desktop-1440', width: 1440, dark: false },
  { name: 'qa-tablet-768', width: 768, dark: false },
  { name: 'qa-mobile-393', width: 393, dark: false },
  { name: 'qa-desktop-dark-1440', width: 1440, dark: true },
  { name: 'qa-mobile-dark-393', width: 393, dark: true },
];

const browser = await chromium.launch();
for (const r of runs) {
  const page = await browser.newPage({ viewport: { width: r.width, height: 1000 } });
  if (r.dark) await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `screenshots/${r.name}.png`, fullPage: true });
  // measure section vertical rhythm
  const rhythm = await page.evaluate(() => {
    const sels = [
      '.landing-hero', '.landing-section--dashboard', '.landing-trusted',
      '.landing-section--hr', '.landing-section--impact', '.landing-section--compliance',
      '.landing-why', '.landing-testimonials', '.landing-section--choosing',
      '.landing-section--blog', '.landing-section--steps', '.lp-footer',
    ];
    return sels.map(s => {
      const el = document.querySelector(s);
      if (!el) return { sel: s, missing: true };
      const b = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return { sel: s, y: +(b.y + window.scrollY).toFixed(1), h: +b.height.toFixed(1),
        padTop: cs.paddingTop, padBottom: cs.paddingBottom, mTop: cs.marginTop, mBottom: cs.marginBottom,
        bg: cs.backgroundColor };
    });
  });
  // overflow check
  const overflow = await page.evaluate(() => {
    const de = document.documentElement;
    return { scrollW: de.scrollWidth, clientW: de.clientWidth, hasHScroll: de.scrollWidth > de.clientWidth + 1 };
  });
  console.log(`=== ${r.name} (overflow ${JSON.stringify(overflow)}) ===`);
  console.log(JSON.stringify(rhythm));
  await page.close();
}
await browser.close();
