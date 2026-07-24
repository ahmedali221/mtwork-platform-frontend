import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const URL = 'http://localhost:4280/CreateBusinessAccount/basic-info';
const DIR = 'screenshots/createaccount';
const browser = await chromium.launch();

const figFull = readFileSync(`${DIR}/figma-basic-info-3123379.png`); // 1440×1182
const figB64 = figFull.toString('base64');

// ── Live full frame at TRUE 1:1 (dsf=1, 1440 wide, full height) ──
const page = await browser.newPage({ viewport: { width: 1440, height: 1182 }, deviceScaleFactor: 1 });
await page.addInitScript(() => { localStorage.removeItem('MT_token'); localStorage.setItem('theme', 'light'); });
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.evaluate(() => Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).catch(() => {});

// full-page (document) capture
const liveFullBuf = await page.screenshot({ path: `${DIR}/live-full-1440.png`, fullPage: true });

// measurements + element boxes (in CSS px = 1:1 with Figma since dsf=1)
const M = await page.evaluate(() => {
  const r = s => { const e = document.querySelector(s); if (!e) return null; const b = e.getBoundingClientRect(); return { x: Math.round(b.x*100)/100, y: Math.round(b.y*100)/100, w: Math.round(b.width*100)/100, h: Math.round(b.height*100)/100, top: b.top, left: b.left, bottom: b.bottom, right: b.right }; };
  const cs = s => { const e = document.querySelector(s); return e ? getComputedStyle(e) : null; };
  const header = r('.ca-gradient-header');
  const topbar = r('.ca-topbar');
  const logo = r('.ca-topbar__logo');
  const stepper = r('.stepper');
  const stepItems = [...document.querySelectorAll('.stepper__item')].map(e => { const b = e.getBoundingClientRect(); return { cx: Math.round(b.x + b.width/2), labelTop: Math.round(e.querySelector('.stepper__label').getBoundingClientRect().top) }; });
  const stepLabels = [...document.querySelectorAll('.stepper__label')].map(e => e.textContent.trim());
  const card = r('.ca-card');
  const title = r('.ca-card__title'); const tcs = cs('.ca-card__title');
  const sub = r('.ca-card__subtitle'); const scs = cs('.ca-card__subtitle');
  const inputs = [...document.querySelectorAll('app-form-input-component input')];
  const i0 = inputs[0]?.getBoundingClientRect();
  const ics = inputs[0] ? getComputedStyle(inputs[0]) : null;
  const rows = [...document.querySelectorAll('.ca-form__row')];
  const cta = r('.ca-btn--primary'); const ctacs = cs('.ca-btn--primary');
  const google = r('.ca-btn--google');
  const login = r('.ca-card__login');
  const loginIcon = document.querySelector('.ca-card__login-icon');
  const errorBanner = document.querySelector('.ca-error-banner, [class*="error-banner"]');
  // gap probes
  const back = r('.ca-back');
  const gap = (a, b2) => (a && b2) ? Math.round(b2.top - a.bottom) : null;
  return {
    header: { h: header?.h, top: header?.y },
    topbar: { y: topbar?.y, h: topbar?.h },
    logo: { w: logo?.w, h: logo?.h, segs: document.querySelectorAll('.ca-topbar__logo-segment').length },
    stepper: { y: stepper?.y, w: stepper?.w, h: stepper?.h, centersX: stepItems.map(s=>s.cx), labelTop: stepItems[0]?.labelTop, labels: stepLabels },
    card: { x: card?.x, y: card?.y, w: card?.w, h: card?.h, radius: cs('.ca-card')?.borderTopLeftRadius, border: cs('.ca-card')?.borderTopWidth, pad: cs('.ca-card')?.paddingTop },
    cardCenterX: card ? Math.round(card.x + card.w/2) : null, viewportCenterX: 720,
    title: { fs: tcs?.fontSize, lh: tcs?.lineHeight, fw: tcs?.fontWeight, ff: tcs?.fontFamily.split(',')[0], color: tcs?.color },
    sub: { fs: scs?.fontSize, color: scs?.color },
    input: { h: i0 ? Math.round(i0.height) : null, w: i0 ? Math.round(i0.width) : null, bg: ics?.backgroundColor, radius: ics?.borderTopLeftRadius },
    rowCount: rows.length,
    cta: { w: cta?.w, h: cta?.h, radius: ctacs?.borderTopLeftRadius, bg: ctacs?.backgroundColor, fs: ctacs?.fontSize },
    google: { w: google?.w, h: google?.h },
    login: { present: !!login, iconViewBox: loginIcon?.getAttribute('viewBox'), text: login?.innerText?.replace(/\s+/g,' ').trim().slice(0,40) },
    errorBannerPresent: !!errorBanner,
    gaps: { backTitle: gap(back, title), titleSub: gap(title, sub) },
    docHeight: document.documentElement.scrollHeight,
    hscroll: document.documentElement.scrollWidth > window.innerWidth,
  };
});
console.log('=== LIVE MEASUREMENTS (1:1 CSS px) ===');
console.log(JSON.stringify(M, null, 2));

// section closeups — clip from a FULL-PAGE capture (card exceeds viewport height)
const DOC = M.docHeight;
async function clip(name, box) {
  try {
    const h = Math.max(10, Math.min(box.height, DOC - box.y - 1));
    await page.screenshot({ path: `${DIR}/closeup-${name}.png`, clip: { ...box, height: h }, fullPage: true });
  } catch (e) { console.log('clip', name, 'skipped:', e.message); }
}
if (M.header) await clip('topbar', { x: 0, y: 0, width: 1440, height: 90 });
if (M.header) await clip('header', { x: 0, y: 0, width: 1440, height: 235 });
if (M.stepper) await clip('stepper', { x: 360, y: Math.max(0, M.stepper.y - 6), width: 720, height: 80 });
if (M.card) await clip('card', { x: Math.max(0, M.card.x - 16), y: Math.max(0, M.card.y - 16), width: M.card.w + 32, height: M.card.h + 32 });
if (M.cta) await clip('cta', { x: Math.max(0, M.cta.x - 16), y: Math.max(0, M.cta.y - 16), width: M.cta.w + 32, height: 260 });

const liveDoc1440 = (await page.screenshot({ fullPage: true })).toString('base64');
await page.close();

// ── True 1:1 side-by-side: both rendered at 1440 CSS px wide ──
const sbs = await browser.newPage({ viewport: { width: 3000, height: 1260 } });
await sbs.setContent(`<body style="margin:0;background:#2b2f33;font-family:sans-serif;display:flex;gap:40px;padding:30px;color:#fff;">
  <div><div style="margin-bottom:10px;">FIGMA 3:123379 — 1440px native</div><img src="data:image/png;base64,${figB64}" style="width:1440px;display:block;border:1px solid #555;"/></div>
  <div><div style="margin-bottom:10px;">LIVE — 1440px native (1:1)</div><img src="data:image/png;base64,${liveDoc1440}" style="width:1440px;display:block;border:1px solid #555;"/></div>
</body>`);
await sbs.waitForTimeout(400);
await sbs.screenshot({ path: `${DIR}/sidebyside-1to1.png`, fullPage: true });
await sbs.close();

// ── Overlay diffs (Figma base + live magenta-tinted 55%), 1:1 ──
// top section: y 0–300 (gradient + stepper)
async function overlay(name, cropY, cropH) {
  const ov = await browser.newPage({ viewport: { width: 1480, height: cropH + 80 } });
  await ov.setContent(`<body style="margin:0;background:#888;font-family:sans-serif;padding:20px;color:#fff;">
    <div style="font-size:12px;margin-bottom:8px;">OVERLAY ${name}: Figma (base) + Live (magenta 55%). Aligned = no ghosting.</div>
    <div style="position:relative;width:1440px;height:${cropH}px;overflow:hidden;">
      <img src="data:image/png;base64,${figB64}" style="position:absolute;left:0;top:${-cropY}px;width:1440px;"/>
      <img src="data:image/png;base64,${liveDoc1440}" style="position:absolute;left:0;top:${-cropY}px;width:1440px;opacity:0.55;filter:hue-rotate(280deg) saturate(3);"/>
    </div>
  </body>`);
  await ov.waitForTimeout(300);
  await ov.screenshot({ path: `${DIR}/overlay-${name}.png`, fullPage: true });
  await ov.close();
}
await overlay('top', 0, 300);          // gradient + stepper
await overlay('card', 270, 560);       // card/form section

await browser.close();
console.log('\nwrote: live-full-1440, closeup-{topbar,header,stepper,card,cta}, sidebyside-1to1, overlay-top, overlay-card');
