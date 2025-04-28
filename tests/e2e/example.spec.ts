import { test, expect } from '@playwright/test';
test.describe('login',() => {
  test.beforeEach('Visit home page',async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    // await page.getByPlaceholder('Username').fill('standard_user')
    await page.locator('#user-name').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByText('Login').click()
    
    
  })

test('has title', async ({ page }) => {
  // await expect(page.getByRole('heading', { name: 'Swag labs' })).toBeVisible();
  // await page.goto('https://www.saucedemo.com/')
  // await expect(page).toHaveURL('https://www.saucedemo.com/');
  //   await page.getByPlaceholder('Username').fill('standard_user')
  //   await page.getByPlaceholder('Password').fill('secret_sauce')
  //  
  await expect(page.getByText('Swag labs')).toBeVisible()
});
})
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
