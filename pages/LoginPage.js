import { BasePage } from './basepage.js';
import { loginLocators } from '../locators/login.locators.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.emailInput = page.locator(loginLocators.emailInput);
    this.passwordInput = page.locator(loginLocators.passwordInput);
    this.loginButton = page.locator(loginLocators.loginButton);
    this.errorMessage = page.locator(loginLocators.errorMessage);
  }

  async navigateToLogin() {
    await this.navigateTo('/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}