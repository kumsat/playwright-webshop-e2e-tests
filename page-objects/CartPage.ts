import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  async checkout() {
    await this.page.click('#checkout');
  }
}

