# 🧪 Future Of Sport - Test Automation

This project contains end-to-end tests using Playwright.

---

## ▶️ Run Tests Localy

### Installation

Make sure you have Node.js installed (recommended v18+ or v20+).

Install dependencies:

npm install
npx playwright install

---

### Run tests in headless mode (browser actions not visible)

npx playwright test

---

### Run tests in headed mode (browser actions visible)

npx playwright test --headed

---

### Run tests in debug mode

npx playwright test --debug

---

## 📊 HTML Report

### Generate + open report after tests

npx playwright test --reporter=html
npx playwright show-report

👉 Report will be in `playwright-report/`

---


## 🚀 Run Tests in CI (GitHub Actions)

### ▶️ Automatic CI runs

CI runs automatically on:

- every push to `main`
- every pull request

---
### ▶️ Manual CI run

You can trigger CI manually anytime:

1. Go to your GitHub repository
2. Open the **Actions** tab
3. Select **Playwright Tests** workflow
4. Click **Run workflow**
5. Select branch (usually `main`)
6. Click **Run workflow**

---
### 📊 How to view CI results

After CI runs:

1. Go to **Actions** tab in GitHub
2. Click the latest workflow run
3. You will see:
   - test logs
   - pass/fail results

---