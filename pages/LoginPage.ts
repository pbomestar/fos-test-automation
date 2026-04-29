import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string, passcode: string) {
    await this.page.goto('/login');
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
    await this.page.fill('#passcode', passcode);
    await this.page.click('button[type="submit"]');
  }
}