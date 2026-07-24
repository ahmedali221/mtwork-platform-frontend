import { launch } from './node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';

(async () => {
  const browser = await launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Log in
  await page.goto('http://localhost:4200/login', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  const emailSel = 'input[type="email"], input[name="email"], input[placeholder*="mail" i], input[formcontrolname="email"]';
  const passSel = 'input[type="password"], input[formcontrolname="password"]';

  await page.waitForSelector(emailSel, { timeout: 10000 }).catch(() => {});
  await page.type(emailSel, 'ebrahimnour186@gmail.com').catch(() => {});
  await page.type(passSel, 'Ii@123456').catch(() => {});

  await page.click('button[type="submit"], button.login-btn, .btn-primary').catch(() => {});
  await new Promise(r => setTimeout(r, 3000));

  // Navigate to projects
  await page.goto('http://localhost:4200/dashboard/projects', { waitUntil: 'networkidle2', timeout: 20000 });
  await new Promise(r => setTimeout(r, 3000));

  await page.screenshot({ path: 'projects-full.png', fullPage: false });

  const card = await page.$('.proj-controls-card');
  if (card) await card.screenshot({ path: 'projects-controls.png' });

  const table = await page.$('.proj-table-wrap');
  if (table) await table.screenshot({ path: 'projects-table.png' });

  const empty = await page.$('.proj-empty');
  if (empty) await empty.screenshot({ path: 'projects-empty.png' });

  const pag = await page.$('.proj-pagination');
  if (pag) await pag.screenshot({ path: 'projects-pagination.png' });

  await browser.close();
  console.log('screenshots done');
})();
