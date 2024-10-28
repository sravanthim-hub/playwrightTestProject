import { test as base}  from "@playwright/test"
import registerPage from "./registerPage"
import loginPage from "./loginPage"
import accessibility from "../utils/accessibility"

type MyFixtures = {
    registerPage: registerPage
    loginPage: loginPage
    accessibility: accessibility
}

export const test = base.extend<MyFixtures>({
    registerPage: async ({ page }, use) => {
        await use(new registerPage(page))
    },
    loginPage: async({ page }, use ) => {
        await use(new loginPage(page))
    }, 
    accessibility: async({ page }, use) => {
        await use(new accessibility(page))
    }
})

export { expect } from "@playwright/test"