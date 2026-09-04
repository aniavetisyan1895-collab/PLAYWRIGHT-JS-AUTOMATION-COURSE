import { test, expect } from '@playwright/test';
import { AuthenticationAPI } from '../../api/AuthenticationAPI';
import { getSignupForm } from './testData';

test('User can sign up successfully', async ({ request }) => {
  const authenticationAPI = new AuthenticationAPI(request);

  const form = getSignupForm();

  const response = await authenticationAPI.apiSignup(form);

  expect(response.status()).toBe(200);
});