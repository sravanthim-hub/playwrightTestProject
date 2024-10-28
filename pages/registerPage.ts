import { expect, Page } from "@playwright/test";

export default class registerPage{
    readonly page: Page
    constructor(page: Page)
    {
        this.page = page
    }
async enterFirstName(firstname: string){
    await this.page.locator('#input-firstname').fill(firstname)
}

async enterLastName(lastname: string){
    await this.page.locator('#input-lastname').fill(lastname)
}

async enterEmail(email: string){
    await this.page.locator('#input-email').fill(email)
}

async enterTelephone(phone: string){
    await this.page.locator('#input-telephone').fill(phone)
}

async enterPassword(password: string){
    await this.page.locator('#input-password').fill(password)
}

async confirmPassword(password: string){
    await this.page.locator('#input-confirm').fill(password)
}

checkIsSubscribed(){
   return this.page.locator("//input[@id='input-newsletter-no']")
}
async agreeTermsAndConditions(agreeTC: boolean){
    if(agreeTC)
    {
    await this.page.click("//label[@for='input-agree']")
    }
}
async clickContinue() {
    await this.page.click("input[value='Continue']")
}

async registerUser(
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    password: string,
    agreeTC: boolean = true
){
    await this.enterFirstName(firstname)
    await this.enterLastName(lastname)
    await this.enterEmail(email)
    await this.enterTelephone(phone)
    await this.enterPassword(password)
    await this.confirmPassword(password)
    await expect(this.checkIsSubscribed()).toBeChecked()
    await this.agreeTermsAndConditions(agreeTC)
    await this.clickContinue()
}

async IsReady(baseURL){
    console.log('inside isready function')
    await this.page.goto(`${baseURL}route=account/register`)  
    expect(this.page.locator('//body/div[1]/div[5]/div[1]/div[1]/div[1]/h1[1]')).toHaveText('Register Account')
}

}