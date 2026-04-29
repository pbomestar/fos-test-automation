import { Page, expect } from '@playwright/test';

export class GroupCoursesPage {
  constructor(private page: Page) {}

  async checkTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

}