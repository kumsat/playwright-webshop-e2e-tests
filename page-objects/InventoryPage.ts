import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private inventoryItems() {
    return this.page.locator('.inventory_item');
  }

  private productTitleLinks() {
    return this.page.locator('.inventory_item_name');
  }

  private sortDropdown() {
  // Use simple CSS by class, less fragile than data-test
  return this.page.locator('select.product_sort_container');

  }

  private firstAddToCartButton() {
    return this.page.locator('[data-test^="add-to-cart"]').first();
  }

  private cartLink() {
    return this.page.locator('.shopping_cart_link');
  }

  // ✅ Used in search tests
  async isLoaded(): Promise<boolean> {
    const count = await this.inventoryItems().count();
    return count > 0;
  }

  // ✅ Used in checkout flow
  async addFirstItemToCart() {
    await this.firstAddToCartButton().click();
  }

  async openCart() {
    await this.cartLink().click();
  }

  // ✅ New: open first product details page
  async openFirstItemDetails() {
    await this.productTitleLinks().first().click();
  }

  // ✅ New: get first product name (for sorting checks)
  async getFirstItemName(): Promise<string> {
    return await this.productTitleLinks().first().innerText();
  }

  // ✅ Sort by price (low → high)
async sortByPriceLowToHigh() {
  // Wait for at least one product to be visible → ensures inventory loaded
  await this.inventoryItems().first().waitFor({ state: 'visible' });

  // Sort via dropdown
  await this.sortDropdown().selectOption('lohi');
}
}

