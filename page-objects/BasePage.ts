import { Page } from '@playwright/test';

export class BasePage {
  constructor(public page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }
}

