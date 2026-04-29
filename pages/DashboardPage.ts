import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async goToGroupCourses() {
    await this.page.click('text=Group Courses');
  }
}