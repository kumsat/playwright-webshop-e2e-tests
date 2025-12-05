import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // Global test timeout
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },

  // 🔁 Retry failing tests once (good for CI)
  retries: 1,

  // 🧾 Reporters: console + HTML
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // 🌐 Run tests on multiple browsers (matrix)
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

