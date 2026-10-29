
import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeading: Locator;
  readonly timeAtWorkWidget: Locator;
  readonly myActionsWidget: Locator;
  readonly quickLaunchWidget: Locator;
  readonly buzzLatestPostsWidget: Locator;
  readonly employeesOnLeaveWidget: Locator;
  readonly employeeDistributionWidget: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dashboardHeading = page.getByText('Dashboard', {
      exact: true,
    }).first();

    this.timeAtWorkWidget = page.getByText('Time at Work', {
      exact: true,
    });

    this.myActionsWidget = page.getByText('My Actions', {
      exact: true,
    });

    this.quickLaunchWidget = page.getByText('Quick Launch', {
      exact: true,
    });

    this.buzzLatestPostsWidget = page.getByText('Buzz Latest Posts', {
      exact: true,
    });

    this.employeesOnLeaveWidget = page.getByText(
      'Employees on Leave Today',
      { exact: true }
    );

    this.employeeDistributionWidget = page.getByText(
      'Employee Distribution by Sub Unit',
      { exact: true }
    );
  }

  async navigate() {
    await this.page.goto('dashboard/index');
  }
}
