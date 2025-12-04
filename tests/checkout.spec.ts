import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { InventoryPage } from '../page-objects/InventoryPage';
import { CartPage } from '../page-objects/CartPage';

test('user can add item to cart and proceed to checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  await inventoryPage.addFirstItemToCart();
  await inventoryPage.openCart();

  await expect(page).toHaveURL(/cart/);

  await cartPage.proceedToCheckout();
  await cartPage.fillCheckoutInformation('Satendra', 'Kumar', '85051');
  await cartPage.finishCheckout();
  await cartPage.expectThankYouMessage();
});
