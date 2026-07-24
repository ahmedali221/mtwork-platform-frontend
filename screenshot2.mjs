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
  await page.type('input[type="email"], input[formcontrolname="email"]', 'ebrahimnour186@gmail.com').catch(() => {});
  await page.type('input[type="password"]', 'Ii@123456').catch(() => {});
  await page.click('button[type="submit"]').catch(() => {});
  await new Promise(r => setTimeout(r, 3000));

  // Navigate to projects
  await page.goto('http://localhost:4200/dashboard/projects', { waitUntil: 'networkidle2', timeout: 20000 });
  await new Promise(r => setTimeout(r, 3000));

  // Screenshot 1: Default state
  await page.screenshot({ path: 'sc-1-default.png', fullPage: false });

  // Screenshot 2: Click filter button → filter panel opens
  const filterBtn = await page.$('.proj-icon-btn');
  if (filterBtn) {
    await filterBtn.click();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: 'sc-2-filter-panel-open.png', fullPage: false });

    // Click "High" priority chip
    const chips = await page.$$('.filter-chip');
    if (chips[2]) {
      await chips[2].click(); // High
      await new Promise(r => setTimeout(r, 300));
    }
    // Click progress range
    if (chips[4]) {
      await chips[4].click(); // First range
      await new Promise(r => setTimeout(r, 300));
    }
    await page.screenshot({ path: 'sc-3-filter-chips-selected.png', fullPage: false });

    // Click Apply Filters
    const applyBtn = await page.$('.filter-apply-btn');
    if (applyBtn) {
      await applyBtn.click();
      await new Promise(r => setTimeout(r, 500));
    }
    await page.screenshot({ path: 'sc-4-filter-applied.png', fullPage: false });
  }

  // Screenshot 5: Click Refresh — shows spinner briefly then reloads
  const refreshBtn = await page.$('.proj-expand-btn');
  if (refreshBtn) {
    await refreshBtn.click();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: 'sc-5-refresh-clicked.png', fullPage: false });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: 'sc-6-after-refresh.png', fullPage: false });
  }

  await browser.close();
  console.log('done');
})();
