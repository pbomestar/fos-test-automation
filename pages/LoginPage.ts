import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(data: any) {
    await this.page.goto('/login');
    await this.page.fill('#username', data.username);
    await this.page.fill('#password', data.password);
    await this.page.click('button[type="submit"]');
    await this.page.fill('#passcode', data.passcode);
    await this.page.click('button[type="submit"]');
  }
}