import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Add the first visible item to the cart
  async addFirstItemToCart() {
    const firstAddToCartButton = this.page.locator('.inventory_item button').first();
    await firstAddToCartButton.click();
  }

  // Open the cart
  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  // (Optional) verify that at least one product is shown
  async expectProductsVisible() {
    const items = this.page.locator('.inventory_item');
    await expect(items).toHaveCountGreaterThan(0);
  }
}
