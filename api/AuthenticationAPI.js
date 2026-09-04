import { expect } from '@playwright/test';

export class AuthenticationAPI {
  constructor(request) {
    this.request = request;
  }

  async apiLogin(email, password) {
    const response = await this.request.post('/login', {
      form: {
        email,
        password
      }
    });

    expect(response.status()).toBe(200);

    const cookies = await this.request.storageState();

    return cookies.cookies;
  }

  async apiSignup(form) {
  const response = await this.request.post(
    'https://automationexercise.com/api/createAccount',
    {
      form
    }
  );

  expect(response.status()).toBe(200);

  return response;
}
}