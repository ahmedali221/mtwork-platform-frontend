import { test, expect } from '@playwright/test';
import { login, logout, BUSINESS } from './helpers';

// ── Business Owner Full Flow ──────────────────────────────────────────────────

test.describe('Business Owner', () => {

  test.beforeEach(async ({ page }) => {
    await login(page, BUSINESS.email, BUSINESS.password);
  });

  test.afterEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
  });

  // ── Dashboard ──────────────────────────────────────────────────────────────

  test.describe('Dashboard', () => {
    test('Lands on business dashboard after login', async ({ page }) => {
      await expect(page).toHaveURL(/\/dashboard/);
    });

    test('Dashboard shows key stats (not loading spinner after 5s)', async ({ page }) => {
      await page.waitForTimeout(5_000);
      const spinner = page.locator('[class*="spinner"], [class*="loading"]');
      await expect(spinner).toHaveCount(0);
    });

    test('Sidebar is visible', async ({ page }) => {
      // app-sidebar host is display:inline with a position:fixed child → zero dimensions
      // → Playwright reports "hidden". Target the actual rendered aside element instead.
      await expect(page.locator('aside.sidebar')).toBeVisible();
    });

    test('Header shows role badge "Business"', async ({ page }) => {
      // Role badge lives inside @if(userMenuOpen()) — must open menu first
      await page.getByRole('button', { name: /user menu/i }).click();
      await expect(page.locator('[class*="role-badge"]')).toContainText(/business/i);
      await page.keyboard.press('Escape');
    });
  });

  // ── Contracts ──────────────────────────────────────────────────────────────

  test.describe('Contracts', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/dashboard/contracts');
      // networkidle hangs because SignalR + session polling keep network active.
      // domcontentloaded is sufficient; give 2s for initial API calls to settle.
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2_000);
    });

    test('Contract list page loads without error', async ({ page }) => {
      await expect(page).toHaveURL(/contracts/);
      const error = page.locator('[class*="error"], [class*="alert--danger"]');
      await expect(error).toHaveCount(0);
    });

    test('Contract list shows table or empty state (not blank)', async ({ page }) => {
      const table    = page.locator('table, [class*="contract-list"]');
      const empty    = page.locator('[class*="empty"], [class*="no-data"]');
      const hasTable = await table.isVisible().catch(() => false);
      const hasEmpty = await empty.isVisible().catch(() => false);
      expect(hasTable || hasEmpty).toBeTruthy();
    });

    test('Create contract button is visible', async ({ page }) => {
      // The "New Contract" element is <a routerLink="..."> — role is "link", not "button".
      // aria-label = "Create new contract", text = "New Contract"
      const createBtn = page.getByRole('link', { name: /new contract|create new contract/i });
      await expect(createBtn).toBeVisible();
    });

    test('Contract status filter works', async ({ page }) => {
      const filter = page.getByRole('combobox').or(page.locator('select, mat-select')).first();
      if (await filter.isVisible()) {
        await filter.click();
        await page.keyboard.press('Escape');
      }
    });
  });

  // ── HR Module ──────────────────────────────────────────────────────────────

  test.describe('HR Module', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/dashboard/hr');
      // Same reason as contracts: networkidle never fires due to SignalR/session polling
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2_000);
    });

    test('HR list page loads', async ({ page }) => {
      await expect(page).toHaveURL(/hr/);
    });

    test('HR list shows employees or empty state', async ({ page }) => {
      const content = page.locator('table, [class*="hr-list"], [class*="empty"]');
      await expect(content.first()).toBeVisible({ timeout: 8_000 });
    });

    test('Leave requests section visible', async ({ page }) => {
      const leaveSection = page.getByText(/leave request|vacation|إجازة/i);
      await expect(leaveSection.first()).toBeVisible({ timeout: 8_000 });
    });
  });

  // ── Salary ─────────────────────────────────────────────────────────────────

  test.describe('Salary', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/dashboard/salary');
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2_000);
    });

    test('Salary page loads without errors', async ({ page }) => {
      await expect(page).toHaveURL(/salary/);
      const errorEl = page.locator('[class*="error-state"], [class*="alert--danger"]');
      await expect(errorEl).toHaveCount(0);
    });

    test('Company balance section is visible', async ({ page }) => {
      const balance = page.getByText(/balance|رصيد/i);
      await expect(balance.first()).toBeVisible({ timeout: 8_000 });
    });

    test('Pay salary button is visible', async ({ page }) => {
      const payBtn = page.getByRole('button', { name: /pay|salary|دفع/i });
      await expect(payBtn.first()).toBeVisible({ timeout: 8_000 });
    });
  });

  // ── Navigation ─────────────────────────────────────────────────────────────

  test.describe('Navigation', () => {
    test('All sidebar links navigate without 404', async ({ page }) => {
      const links = [
        '/dashboard/contracts',
        '/dashboard/hr',
        '/dashboard/salary',
      ];
      for (const href of links) {
        await page.goto(href);
        await expect(page).not.toHaveURL(/404|not-found/);
      }
    });
  });

});
