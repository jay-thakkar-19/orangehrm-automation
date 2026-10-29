
import { Page, Locator } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search');
  }

  menuItem(name: string): Locator {
    return this.page.getByRole('link', {
      name,
      exact: true,
    });
  }

  async openMenu(name: string) {
    await this.menuItem(name).click();
  }

  async openDashboard() {
    await this.page.goto('dashboard/index');
  }
}
