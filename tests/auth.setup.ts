import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('Authenticate user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    process.env.ORANGEHRM_USERNAME!,
    process.env.ORANGEHRM_PASSWORD!
  );

  // Confirm login succeeded before saving the session
  await expect(page).toHaveURL(/\/dashboard\/index/);

  // Save cookies and local storage
  await page.context().storageState({ path: authFile });
});
