import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';

test('inventory page loads products', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const items = page.locator('.inventory_item');
  await expect(items).toHaveCount(6);
});

