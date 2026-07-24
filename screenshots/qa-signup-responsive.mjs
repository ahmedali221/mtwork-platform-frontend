import { chromium } from 'playwright';

const URL = 'http://localhost:4280/signup';
const browser = await chromium.launch();

const breakpoints = [
  { name: 'signup-1024', width: 1024, height: 900 },
  { name: 'signup-768',  width: 768,  height: 1024 },
  { name: 'signup-393',  width: 393,  height: 852 },
];

for (const bp of breakpoints) {
  const page = await browser.newPage({ viewport: { width: bp.width, height: bp.height } });
  await page.addInitScript(() => localStorage.setItem('theme', 'light'));
  const errs = [];
  page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await page.evaluate(() => Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).catch(() => {});
  await page.screenshot({ path: `screenshots/${bp.name}.png`, fullPage: true });

  const m = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('.signup-card')];
    const rects = cards.map(c => c.getBoundingClientRect());
    // detect stacking: are cards in one row (tops aligned) or stacked (tops differ)?
    const tops = rects.map(r => Math.round(r.top));
    const uniqueRows = [...new Set(tops)].length;
    const illus = cards.map(c => { const i = c.querySelector('.signup-card__illus').getBoundingClientRect(); return Math.round(i.width)+'x'+Math.round(i.height); });
    const title = document.querySelector('.signup-head__title');
    const sub = document.querySelector('.signup-head__subtitle');
    const main = document.querySelector('.signup-main');
    const mainCS = getComputedStyle(main);
    const footer = document.querySelector('.signup-footer').getBoundingClientRect();
    const head = document.querySelector('.signup-head').getBoundingClientRect();
    const cardsBox = document.querySelector('.signup-cards').getBoundingClientRect();
    return {
      hscroll: document.documentElement.scrollWidth > window.innerWidth,
      docScrollW: document.documentElement.scrollWidth,
      cardW: rects.map(r => Math.round(r.width)),
      cardH: rects.map(r => Math.round(r.height)),
      rows: uniqueRows,
      illus,
      titleFs: getComputedStyle(title).fontSize,
      subFs: getComputedStyle(sub).fontSize,
      mainGap: mainCS.gap,
      gapHeadCards: Math.round(cardsBox.top - head.bottom),
      gapCardsFooter: Math.round(footer.top - cardsBox.bottom),
      footerCentered: Math.abs((footer.left + footer.width/2) - window.innerWidth/2) < 6,
    };
  });
  console.log(`\n── ${bp.name} (${bp.width}px) ──`);
  console.log('  hscroll        :', m.hscroll, m.hscroll ? 'FAIL (scrollW '+m.docScrollW+')' : 'OK');
  console.log('  card widths    :', m.cardW.join(', '));
  console.log('  card heights   :', m.cardH.join(', '));
  console.log('  rows (1=row,3=stacked):', m.rows);
  console.log('  illus sizes    :', m.illus.join(' | '));
  console.log('  title / sub fs :', m.titleFs, '/', m.subFs);
  console.log('  main gap       :', m.mainGap);
  console.log('  gap head→cards :', m.gapHeadCards, '| cards→footer:', m.gapCardsFooter);
  console.log('  footer centered:', m.footerCentered ? 'OK' : 'off-center');
  console.log('  console errors :', errs.length, errs.length ? errs : 'OK');
  await page.close();
}
await browser.close();
