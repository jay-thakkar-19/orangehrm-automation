
import { test, expect, Page } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';

async function verifyNavigation(
  page: Page,
  menuName: string,
  expectedUrl: RegExp
) {
  const navigation = new NavigationPage(page);

  await navigation.openDashboard();
  await expect(navigation.menuItem(menuName)).toBeVisible();

  await navigation.openMenu(menuName);

  await expect(page).toHaveURL(expectedUrl);
}

test.describe('OrangeHRM Navigation', () => {
  test('ORH-NAV-001 | Navigate to Admin', async ({ page }) => {
    await verifyNavigation(page, 'Admin', /\/admin\/viewSystemUsers/);
  });

  test('ORH-NAV-002 | Navigate to PIM', async ({ page }) => {
    await verifyNavigation(page, 'PIM', /\/pim\/viewEmployeeList/);
  });

  test('ORH-NAV-003 | Navigate to Leave', async ({ page }) => {
    await verifyNavigation(page, 'Leave', /\/leave\/viewLeaveList/);
  });

  test('ORH-NAV-004 | Navigate to Time', async ({ page }) => {
    await verifyNavigation(page, 'Time', /\/time\/viewEmployeeTimesheet/);
  });

  test('ORH-NAV-005 | Navigate to Recruitment', async ({ page }) => {
    await verifyNavigation(
      page,
      'Recruitment',
      /\/recruitment\/viewCandidates/
    );
  });

  test('ORH-NAV-006 | Navigate to My Info', async ({ page }) => {
    await verifyNavigation(page, 'My Info', /\/pim\/viewPersonalDetails/);
  });

  test('ORH-NAV-007 | Navigate to Performance', async ({ page }) => {
    await verifyNavigation(
      page,
      'Performance',
      /\/performance\//
    );
  });

  test('ORH-NAV-008 | Navigate to Directory', async ({ page }) => {
    await verifyNavigation(page, 'Directory', /\/directory\/viewDirectory/);
  });

  test('ORH-NAV-009 | Navigate to Buzz', async ({ page }) => {
    await verifyNavigation(page, 'Buzz', /\/buzz\/viewBuzz/);
  });
  
  test('ORH-NAV-010 | Verify sidebar Search', async ({ page }) => {
    const navigation = new NavigationPage(page);

    await navigation.openDashboard();

    await expect(navigation.searchInput).toBeVisible();

    await navigation.searchInput.fill('PIM');

    await expect(navigation.menuItem('PIM')).toBeVisible();
  });

});
