import { chromium } from 'playwright';

const shots = [
  { name: 'forgot-1440', width: 1440, height: 900, dark: false },
  { name: 'forgot-1024', width: 1024, height: 900, dark: false },
  { name: 'forgot-393',  width: 393,  height: 850, dark: false },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.width, height: s.height } });
  await page.addInitScript((dark) => localStorage.setItem('theme', dark ? 'dark' : 'light'), s.dark);
  await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1400);
  // open the forgot-password modal
  await page.click('.login-link--danger');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `screenshots/forgot/${s.name}.png`, fullPage: false });

  // measure the modal-card box + key children
  const m = await page.evaluate(() => {
    const q = (sel) => document.querySelector(sel);
    const box = (el) => { if (!el) return null; const r = el.getBoundingClientRect(); const c = getComputedStyle(el);
      return { w: Math.round(r.width), h: Math.round(r.height),
        radius: c.borderRadius, padding: c.padding, gap: c.gap,
        bg: c.backgroundColor, border: c.border, shadow: c.boxShadow }; };
    const txt = (el) => { if (!el) return null; const c = getComputedStyle(el);
      return { text: el.textContent.trim().slice(0,60), font: c.fontFamily.split(',')[0],
        size: c.fontSize, weight: c.fontWeight, color: c.color, lh: c.lineHeight }; };
    return {
      backdrop: (() => { const el = q('.modal-backdrop'); if(!el) return null; const c = getComputedStyle(el);
        return { bg: c.backgroundColor, blur: c.backdropFilter }; })(),
      card: box(q('.modal-card')),
      title: txt(q('.modal-card__title')),
      subtitle: txt(q('.modal-card__subtitle')),
      label: txt(q('.modal-label')),
      input: box(q('.modal-input')),
      inputText: txt(q('.modal-input')),
      close: box(q('.modal-card__close')),
      btn: box(q('.modal-btn')),
      btnText: txt(q('.modal-btn')),
    };
  });
  console.log(`\n=== ${s.name} ===`);
  console.log(JSON.stringify(m, null, 2));
  await page.close();
}
await browser.close();
