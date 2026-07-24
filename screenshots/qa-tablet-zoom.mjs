import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 768, height: 1000 } });
await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

const zones = [
  { name: 'tablet-compliance', sel: '.landing-section--compliance' },
  { name: 'tablet-testimonials', sel: '.landing-testimonials' },
  { name: 'tablet-choosing', sel: '.landing-section--choosing' },
  { name: 'tablet-steps', sel: '.landing-section--steps' },
  { name: 'tablet-dashboard', sel: '.landing-section--dashboard' },
];
for (const z of zones) {
  const el = await page.$(z.sel);
  if (!el) { console.log(z.name, 'MISSING'); continue; }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await el.screenshot({ path: `screenshots/${z.name}.png` });
  console.log('captured', z.name);
}
// element-level overflow probe at tablet
const probe = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll('*').forEach(el => {
    if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
      const cls = (el.className && el.className.toString) ? el.className.toString().slice(0,40) : '';
      if (cls.includes('landing') || cls.includes('steps') || cls.includes('blog') || cls.includes('splits') || cls.includes('impact') || cls.includes('compliance') || cls.includes('lp-footer'))
        out.push({ tag: el.tagName, cls, scrollW: el.scrollWidth, clientW: el.clientWidth });
    }
  });
  return out.slice(0, 30);
});
console.log('TABLET inner-overflow elements:', JSON.stringify(probe, null, 1));
await page.close();
await browser.close();
