import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('valid user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});

test('shows error for invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'wrong_password');

  await expect(loginPage.errorMessage()).toContainText('do not match');
});

test('shows error for locked out user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(loginPage.errorMessage()).toContainText('locked out');
});



