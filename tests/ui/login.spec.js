import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();

  await loginPage.login(
    process.env.LOGIN_EMAIL,
    process.env.LOGIN_PASSWORD
  );

  await expect(page.getByText(/Logged in as/)).toBeVisible();
});

test('User cannot login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();

  await loginPage.login(
    'ani@email.com',
    'wrongpassword'
  );

  await loginPage.assertErrorMessage(
    loginPage.errorMessage,
    'Your email or password is incorrect!'
  );
});

test('User cannot login with empty fields', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();

  await loginPage.login('', '');

  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
});