import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { GroupCoursesPage } from '../pages/GroupCoursesPage';

// import { courseData, seriesData } from '../utils/testData';

test('Check page title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const groupCoursesPage = new GroupCoursesPage(page);

  const username = "location-admin@test.com";
  const password = "123qwe";
  const passcode = "000000";
  const pageTitle = "Group Courses"

  await loginPage.login(username, password, passcode);
  await dashboardPage.goToGroupCourses();
  await groupCoursesPage.checkTitle(pageTitle);

});