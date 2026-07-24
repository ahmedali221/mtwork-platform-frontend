import { Page, expect } from '@playwright/test';

// ── Test accounts (from CLAUDE.md §16) ───────────────────────────────────────
export const BUSINESS = {
  email:    'ebrahimnour186@gmail.com',
  password: 'Ii@123456',
};

export const EMPLOYEE = {
  email:    'aminachat@yopmail.com',
  password: 'Amina@1234',
};

// ── Reusable login helper ─────────────────────────────────────────────────────
export async function login(page: Page, email: string, password: string): Promise<void> {
  await page.goto('/login');
  await page.locator('#email').fill(email);
  await page.locator('#password').fill(password);
  // Target the submit button specifically — avoids matching SSO/Google/Facebook buttons
  await page.locator('button[type="submit"]').click();
  // Wait for redirect away from /login (API call may take a moment)
  await expect(page).not.toHaveURL(/\/login/, { timeout: 15_000 });
}

// ── Logout helper ─────────────────────────────────────────────────────────────
export async function logout(page: Page): Promise<void> {
  // Open the user avatar menu (aria-label: "User menu")
  await page.getByRole('button', { name: /user menu/i }).click();
  // Logout item has role="menuitem" and aria-label="Sign out"
  await page.getByRole('menuitem', { name: /sign out/i }).click();
  await expect(page).toHaveURL(/\/login/, { timeout: 8_000 });
}
