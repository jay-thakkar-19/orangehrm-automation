
import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('OrangeHRM Dashboard', () => {
  test('ORH-DASH-001 | Verify Dashboard opens successfully', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await dashboard.navigate();

    await expect(page).toHaveURL(/\/dashboard\/index/);
    await expect(dashboard.dashboardHeading).toBeVisible();
  });

  test('ORH-DASH-002 | Verify Time at Work widget', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await dashboard.navigate();

    await expect(dashboard.timeAtWorkWidget).toBeVisible();
  });

  test('ORH-DASH-003 | Verify My Actions widget', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await dashboard.navigate();

    await expect(dashboard.myActionsWidget).toBeVisible();
  });

  test('ORH-DASH-004 | Verify Quick Launch widget', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await dashboard.navigate();

    await expect(dashboard.quickLaunchWidget).toBeVisible();
  });

  test('ORH-DASH-005 | Verify Buzz Latest Posts widget', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await dashboard.navigate();

    await expect(dashboard.buzzLatestPostsWidget).toBeVisible();
  });

  test('ORH-DASH-006 | Verify Employees on Leave Today widget', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await dashboard.navigate();

    await expect(dashboard.employeesOnLeaveWidget).toBeVisible();
  });

  test('ORH-DASH-007 | Verify Employee Distribution widget', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await dashboard.navigate();

    await expect(dashboard.employeeDistributionWidget).toBeVisible();
  });
});
