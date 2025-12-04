import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 1,
  testDir: './tests',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
    baseURL: 'https://www.saucedemo.com'
  },
  reporter: [['html', { open: 'never' }]]
});

