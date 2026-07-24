import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [768, 1024]) {
  const p = await b.newPage({ viewport: { width: w, height: 1000 } });
  await p.addInitScript(() => localStorage.setItem('theme','dark'));
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  const r = await p.evaluate(() => {
    const de = document.documentElement;
    const q = s => { const e=document.querySelector(s); return e?getComputedStyle(e).backgroundColor:'--'; };
    return { hscroll: de.scrollWidth - de.clientWidth,
      dashboard: q('.landing-section--dashboard'), trusted: q('.landing-trusted'),
      why: q('.landing-why'), choosing: q('app-choosing-component') };
  });
  console.log('TABLET DARK ' + w + ': ' + JSON.stringify(r));
  await p.close();
}
await b.close();
