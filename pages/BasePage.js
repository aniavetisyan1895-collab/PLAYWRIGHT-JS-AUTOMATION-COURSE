import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(path) {
    await this.page.goto(path);
  }

  async assertErrorMessage(locator, expectedText) {
    await expect(locator).toHaveText(expectedText);
  }
}