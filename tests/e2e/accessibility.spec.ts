import AxeBuilder from "@axe-core/playwright";
import { expect } from "@playwright/test";
import { test } from "../../pages/base"


test.describe('Verify Accessibility Violations', () => {
    test('Accessibility test', async(
        {page,baseURL,accessibility}) => {
        await page.goto(`${baseURL}`)
        await accessibility.a11y(page)
    })
})