import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { GroupCoursesPage } from '../pages/GroupCoursesPage';

import { loginData, courseData, seriesData } from '../utils/testData';

test('Create group course', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const groupCoursesPage = new GroupCoursesPage(page);

  await loginPage.login(loginData);
  await dashboardPage.goToGroupCourses();
  await groupCoursesPage.createCourse(courseData);

  // Check if the course is created
  await expect(page).toHaveURL(groupCoursesPage.gcUrl);
  await expect(page.getByText(courseData.name)).toBeVisible();

});