import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { InventoryPage } from '../page-objects/InventoryPage';
import { CartPage } from '../page-objects/CartPage';

test('user can add item to cart and proceed to checkout', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addToCart();
  await inventory.openCart();

  await cart.checkout();

  await expect(page).toHaveURL(/checkout-step-one/);
});

