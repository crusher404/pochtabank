// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.pochtabank.ru/');
  await page.click("(//div[@role='presentation']//div)[2]")
  await page.waitForSelector("//div[@class='style_button__b7Gx3']/following-sibling::div[1]")
  await page.click("(//a[@class='style_link__3phuF'])[1]")
  await page.waitForURL("https://www.pochtabank.ru/service/cashloan")
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
