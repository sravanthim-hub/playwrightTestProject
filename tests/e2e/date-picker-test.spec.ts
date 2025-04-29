import test from "@playwright/test"
import { describe } from "node:test"

let birthday = '1994-12-01'
let birthmmYY = 'May 2019'
describe('Date Picker', () => {
    test('user is able to fill the date successfully', async(
        {page}) => {
            await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
            await page.fill('id=birthday',birthday)
            await page.getByPlaceholder('Start date').click()
            const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
            const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")
            const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")
            if(await (mmYY.textContent()) != birthmmYY)
            {
            await prev.click()
        }
    })
})