import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async addToCart(itemIndex = 0) {
    await this.page.click('.inventory_item button', { strict: false });
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}

