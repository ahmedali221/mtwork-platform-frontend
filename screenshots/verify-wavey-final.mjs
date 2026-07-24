import { chromium } from 'playwright';
const b = await chromium.launch();
const runs = [
  ['wf-desktop-dark-1440', 1440, true],
  ['wf-tablet-768', 768, true],
  ['wf-tablet-1024', 1024, true],
  ['wf-mobile-393', 393, true],
  ['wf-desktop-light-1440', 1440, false],
];
for (const [name, w, dark] of runs) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  if (dark) await p.addInitScript(() => localStorage.setItem('theme','dark'));
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  const el = await p.$('.landing-why');
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(250);
  await el.screenshot({ path: `screenshots/${name}.png` });
  const r = await p.evaluate(() => {
    const rect = s => { const e=document.querySelector(s); if(!e)return null; const b=e.getBoundingClientRect(); return {x:+b.x.toFixed(0),right:+b.right.toFixed(0),top:+b.top.toFixed(0),bottom:+b.bottom.toFixed(0)}; };
    const hl = document.querySelector('.landing-why__highlight');
    const beforeBg = getComputedStyle(hl,'::before').backgroundImage;
    return { hl: rect('.landing-why__highlight'), wav: rect('.landing-why__wavey'),
      waveyDisplay: getComputedStyle(document.querySelector('.landing-why__wavey')).display,
      beforeHasImg: beforeBg.includes('wavey-highlight') };
  });
  console.log(`${name}: hl=${JSON.stringify(r.hl)} waveyDisplay=${r.waveyDisplay} spanBgImg=${r.beforeHasImg}`);
  await p.close();
}
await b.close();
