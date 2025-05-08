import { describe } from "node:test";
import { test } from "../../pages/base";
import { expect } from "@playwright/test";
import registrationData from "../../testdata/registration-data.json";
import RegistrationData from "../../DataModel/testdata.ts"

const typedregistrationData = registrationData as RegistrationData

describe('Test Registration Process',() => {
    registrationData.forEach(data => {
    test(`User is able to register successfully with ${data.}`,async ({
    page, baseURL, registerPage}) => {

    await registerPage.IsReady(baseURL)

    await registerPage.registerUser(
        registrationData.firstName,
        registrationData.lastName,
        registrationData.newEmail,
        registrationData.phone,
                registrationData.password
    )
    // await expect(page.locator('//h1[@class="page-title my-3"]')).toHaveText(' Your Account Has Been Created!')
    })
});

    test('Error message received when existing user registered again',async ({
    page, baseURL, registerPage}) => {

    await registerPage.IsReady(baseURL)

    await registerPage.registerUser(
    'abc',
     'test',
     existingEmail,
        '1234567890',
                password
    )
    await expect(page.locator('//div[@class="alert alert-danger alert-dismissible"]'))
        .toHaveText('  Warning: E-Mail Address is already registered!')
    })

    test('Error message received when terms and conditions is not checked',async ({
        page, baseURL, registerPage}) => {
    
        await registerPage.IsReady(baseURL)
    
        await registerPage.registerUser(
        'abc',
         'test',
         existingEmail,
            '123456',
                    password,
                    false
        )
        await expect(page.locator('//div[@class="alert alert-danger alert-dismissible"]'))
            .toHaveText('  Warning: You must agree to the Privacy Policy!')
        })
    
})