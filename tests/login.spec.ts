
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.use({
  storageState: {
    cookies: [],
    origins: [],
  },
});

test('ORH-LOGIN-001 | Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Step 1: Open the login page
  await loginPage.navigate();

  // Verify that the login form is visible
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();

  // Step 2–4: Enter credentials and log in
  const username = process.env.ORANGEHRM_USERNAME!;
  const password = process.env.ORANGEHRM_PASSWORD!;

  await loginPage.login(username, password);

  // Step 5: Verify successful login
  await expect(page).toHaveURL(/\/dashboard\/index/);
  await expect(
    page.getByText('Dashboard', { exact: true }).first()
  ).toBeVisible();
});
