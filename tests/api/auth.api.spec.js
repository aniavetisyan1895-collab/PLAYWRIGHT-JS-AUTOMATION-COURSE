import { test, expect } from '@playwright/test';
import { AuthenticationAPI } from '../../api/AuthenticationAPI';

test('User can sign up successfully', async ({ request }) => {
  const authenticationAPI = new AuthenticationAPI(request);

  const form = {
    name: 'Ani',
    email: `ani${Date.now()}@example.com`,
    password: 'Test123!',
    title: 'Mrs',
    birth_date: '18',
    birth_month: 'June',
    birth_year: '1995',
    firstname: 'Ani',
    lastname: 'Avetisyan',
    company: 'Test Company',
    address1: 'Test Address',
    address2: '',
    country: 'Armenia',
    zipcode: '00100',
    state: 'Yerevan',
    city: 'Yerevan',
    mobile_number: '091234567'
  };

  const response = await authenticationAPI.apiSignup(form);

  expect(response.status()).toBe(200);
});