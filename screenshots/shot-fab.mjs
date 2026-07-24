import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [name,w,dark] of [['fab-desktop-light',1440,false],['fab-desktop-dark',1440,true],['fab-tablet-768',768,false],['fab-mobile-light',393,false],['fab-mobile-dark',393,true]]) {
  const p = await b.newPage({ viewport: { width: w, height: 820 } });
  if (dark) await p.addInitScript(() => localStorage.setItem('theme','dark'));
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `screenshots/${name}.png` }); // viewport shot shows fixed buttons
  console.log('shot', name);
  await p.close();
}
await b.close();
