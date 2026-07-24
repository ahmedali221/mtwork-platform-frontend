import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 393]) {
  const p = await b.newPage({ viewport: { width: w, height: 1000 } });
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  const r = await p.evaluate(() => {
    const sec = document.querySelector('.landing-why');
    const wav = document.querySelector('.landing-why__wavey');
    const title = document.querySelector('.landing-why__title');
    const hl = document.querySelector('.landing-why__highlight');
    const rect = e => { if(!e) return null; const b=e.getBoundingClientRect(); return {x:+b.x.toFixed(1),right:+b.right.toFixed(1),w:+b.width.toFixed(1),y:+b.y.toFixed(1)}; };
    return { section: rect(sec), wavey: rect(wav), title: rect(title), highlight: rect(hl),
      hlText: hl?.textContent?.trim(), titleText: title?.textContent?.trim().replace(/\s+/g,' ') };
  });
  console.log(`--- ${w} ---`);
  console.log('section', JSON.stringify(r.section));
  console.log('title  ', JSON.stringify(r.title), '"'+r.titleText+'"');
  console.log('highlight', JSON.stringify(r.highlight), '"'+r.hlText+'"');
  console.log('wavey  ', JSON.stringify(r.wavey));
  await p.close();
}
await b.close();
