import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://admin-dev.futureofsportcloud.com'
  }
});