import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const consoleErrors = [];
page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
page.on('pageerror', e => consoleErrors.push('pageerror: ' + e.message));

// Stub the forgetPasswordMail GET so success fires without a live backend.
await page.route('**/Auth/forgetPasswordMail**', route =>
  route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true, message: 'sent' }) })
);

const TEST_EMAIL = 'reset.flow@test.com';

// ── 1. Open login ────────────────────────────────────────────────
await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
console.log('1. login loaded            :', page.url().includes('/login') ? 'OK' : 'FAIL');

// ── 2. Click forgot password (opens modal) ───────────────────────
await page.click('.login-link--danger');
await page.waitForTimeout(400);
const modalOpen = await page.$('.modal-card') !== null;
console.log('2. forgot modal opened     :', modalOpen ? 'OK' : 'FAIL');

// ── 3. Submit valid email ────────────────────────────────────────
await page.fill('#fp-modal-email', TEST_EMAIL);
await page.click('.modal-btn');

// ── 4/5. Request succeeds → redirect to /otp ─────────────────────
await page.waitForURL('**/otp**', { timeout: 5000 }).catch(() => {});
const onOtp = page.url().includes('/otp');
console.log('4. request succeeded        : OK (stub 200)');
console.log('5. auto-redirect to /otp    :', onOtp ? 'OK  (' + page.url() + ')' : 'FAIL (' + page.url() + ')');

// ── 6. Email appears in OTP screen ───────────────────────────────
await page.waitForTimeout(500);
const otpEmail = await page.$eval('.otp-head__email', e => e.textContent.trim()).catch(() => null);
console.log('6. email in OTP screen      :', otpEmail, otpEmail === TEST_EMAIL ? 'OK' : 'FAIL');

// ── 8. Refresh on /otp?email=... still works ─────────────────────
await page.reload({ waitUntil: 'networkidle' });
await page.waitForTimeout(500);
const afterRefreshEmail = await page.$eval('.otp-head__email', e => e.textContent.trim()).catch(() => null);
const cellsAfter = await page.$$eval('.otp-cell', els => els.length).catch(() => 0);
console.log('8. refresh keeps email/cells:', afterRefreshEmail, 'cells=' + cellsAfter,
  (afterRefreshEmail === TEST_EMAIL && cellsAfter === 4) ? 'OK' : 'FAIL');

// ── Also: standalone /forgot-password route path ─────────────────
await page.goto('http://localhost:4280/forgot-password', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.fill('input[type="email"]', 'standalone@test.com');
await page.click('button[type="submit"]');
await page.waitForURL('**/otp**', { timeout: 5000 }).catch(() => {});
const standaloneOtp = page.url().includes('/otp');
const standaloneEmail = await page.$eval('.otp-head__email', e => e.textContent.trim()).catch(() => null);
console.log('+  standalone fp -> /otp     :', standaloneOtp ? 'OK' : 'FAIL', '| email:', standaloneEmail);

// ── 7. Console errors ────────────────────────────────────────────
console.log('7. console errors           :', consoleErrors.length, consoleErrors.length === 0 ? 'OK' : consoleErrors);

await browser.close();
