import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage.js';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();

  await loginPage.login(
    process.env.LOGIN_EMAIL,
    process.env.LOGIN_PASSWORD
  );

  await expect(page.getByText(/Logged in as/)).toBeVisible();
});

test('Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();

  await loginPage.login(
    'wrong@email.com',
    'wrongPassword123'
  );

  await expect(loginPage.errorMessage).toBeVisible();
});