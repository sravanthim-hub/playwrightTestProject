import { describe } from "node:test";
import { test } from "../../pages/base"
import { expect } from "../../pages/base";

const email = 'abc.test@gmail.com'
const password = 'password@123'


describe('Add product to Cart',() => {
    test.skip('User is able to add product to cart successfully', async(
        {page, loginPage, baseURL}) => {
            await loginPage.IsReady(baseURL)
            await loginPage.login(email,password)
            await page.getByTitle('My Account').isVisible()
            await page.getByText('Home').first().click()
            // await page.getByTitle('iMac').first().scrollIntoViewIfNeeded()
            // await page.hover('//img[@src="https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/10-270x338.webp"]')
            await page.hover("//div[@class='image']/a",{
                strict: false
            })
            // await page.locator("//button[@title='Add to Cart']").first().click()
            await page.locator("(//button[@class='btn btn-cart cart-107'])").nth(0).click()
            // await expect(page.locator('//span[@class="badge badge-pill badge-info cart-item-total"]')).toHaveText('3')

        })
})