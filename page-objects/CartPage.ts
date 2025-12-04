import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Click the checkout button on the cart page
  async proceedToCheckout() {
    await this.page.click('#checkout');
  }

  // Fill in the checkout form and continue
  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  // Finish the order
  async finishCheckout() {
    await this.page.click('#finish');
  }

  // Assert that the thank you message is shown
  async expectThankYouMessage() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
  
}
