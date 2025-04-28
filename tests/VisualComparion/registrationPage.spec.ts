import exp = require('constants')
import { expect, test } from '../../pages/base'

test.describe('Visual Regression for Registration page', () => {

    test('Registration page landing page', async({
        page,baseURL,registerPage}) => {
            await registerPage.IsReady(baseURL)
            await registerPage.enterFirstName('abc')
            // await expect(page).toHaveScreenshot('registration-landing-page.png')
            //comment
    })
})