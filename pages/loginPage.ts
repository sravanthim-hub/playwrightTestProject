import { expect, Page } from "@playwright/test"

export default class loginPage {
    readonly page: Page
    constructor(page: Page){
        this.page = page
    }
    async IsReady(baseURL){
        await this.page.goto(`${baseURL}route=account/login`)
        await expect(this.page.getByText('Returning Customer'))
            .toBeVisible
    }
    async enterEmail(email: string){
        await this.page.locator('#input-email').fill(email)
    }

    async enterPassword(password: string){
        await this.page.locator('#input-password').fill(password)
    }
    async clickLoginBtn(){
        await this.page.click('//input[@value="Login"]')
    }

    async login(
        email: string,
        password: string
    ){
        await this.enterEmail(email)
       await this.enterPassword(password)
       await this.clickLoginBtn()
       return
    }
}