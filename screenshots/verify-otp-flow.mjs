import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 900 } });

const consoleErrors = [];
page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });

await page.goto('http://localhost:4280/otp?email=user@test.com', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);

// email param threaded into subtitle
const emailText = await page.$eval('.otp-head__email', e => e.textContent.trim());

// disabled-until-complete
const emptyDisabled = await page.$eval('.otp-btn', b => b.disabled);

// paste distributes
await page.$eval('.otp-cell', el => el.focus());
await page.evaluate(() => {
  const dt = new DataTransfer();
  dt.setData('text', '1234');
  document.querySelector('.otp-cells').dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true }));
});
await page.waitForTimeout(200);
const afterPaste = await page.$$eval('.otp-cell', els => els.map(e => e.value).join(''));
const enabledAfter = await page.$eval('.otp-btn', b => b.disabled);

// RTL / Arabic toggle
await page.click('.otp-ctrl--lang');
await page.waitForTimeout(600);
const dir = await page.evaluate(() => document.documentElement.getAttribute('dir'));
const titleAr = await page.$eval('.otp-head__title', e => e.textContent.trim());

console.log('email threaded     :', emailText, emailText === 'user@test.com' ? 'OK' : 'FAIL');
console.log('empty CTA disabled :', emptyDisabled, emptyDisabled ? 'OK' : 'FAIL');
console.log('paste -> cells     :', afterPaste, afterPaste === '1234' ? 'OK' : 'FAIL');
console.log('CTA enabled filled :', !enabledAfter, !enabledAfter ? 'OK' : 'FAIL');
console.log('dir after Arabic   :', dir, dir === 'rtl' ? 'OK' : '(check lang service)');
console.log('title (ar)         :', titleAr);
console.log('console errors     :', consoleErrors.length, consoleErrors.length === 0 ? 'OK' : consoleErrors);

await browser.close();
