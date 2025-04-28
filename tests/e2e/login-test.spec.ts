import { describe } from "node:test";
import { expect, test } from "../../pages/base"

const email = 'abc.test@gmai.com'
const password = 'password@123'

describe('Login', () => {
    test('user is able to login successfully', async(
        {page,loginPage, baseURL, accessibility}) => {
            await loginPage.IsReady(baseURL)
            // await accessibility.a11y(page)
            await loginPage.login(email,password)
            await expect(page.locator('//div[@class="alert alert-danger alert-dismissible"]')).toBeVisible()
            // await expect(page.getByTitle('My Account')).toBeVisible()
    })
})
