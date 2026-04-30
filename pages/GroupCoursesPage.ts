import { Page, expect } from '@playwright/test';

export class GroupCoursesPage {
  
  readonly gcUrl = '/en/subtenant/agenda/group-courses';
  readonly gcTitle = 'Group Courses';
  
  constructor(private page: Page) {}

  async createCourse(data: any) {
    await this.page.getByTestId('add-group-course-btn').click();
    await this.page.getByTestId('gc-name').fill(data.name);
    await this.page.getByTestId('gc-description').fill(data.description);
    await this.page.getByTestId('gc-coach').selectOption({ label: data.coach });
    await this.page.getByTestId('gc-room').fill(data.room);
    await this.page.getByTestId('gc-duration').selectOption(data.duration);
    await this.page.getByTestId('gc-min').fill(data.min);
    await this.page.getByTestId('gc-max').fill(data.max);
    await this.page.getByTestId('gc-booking-window').fill(data.booking);
    await this.page.getByTestId('gc-cancel-window').fill(data.cancel);

    // Uplaoad file
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.page.getByRole('button', { name: 'Click to upload a photo' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(data.photo);
    await this.page.getByTestId('crop-apply-btn').click();

    // Create course
    await this.page.getByTestId('save-group-course-btn').click();
  }

}