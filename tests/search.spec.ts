import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { InventoryPage } from '../page-objects/InventoryPage';

test('inventory page loads products', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  const loaded = await inventoryPage.isLoaded();
  expect(loaded).toBeTruthy();
});

test('user can open product details page from inventory', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.openFirstItemDetails();

  await expect(page).toHaveURL(/inventory-item/);
});

test('user can sort products by price low to high', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  await expect(inventoryPage.inventoryItems().first()).toBeVisible();

  const beforeSort = await inventoryPage.getFirstItemName();

  await inventoryPage.sortByPriceLowToHigh();

  await page.waitForTimeout(1500);

  const afterSort = await inventoryPage.getFirstItemName();

  expect(afterSort).not.toEqual(beforeSort);
});

