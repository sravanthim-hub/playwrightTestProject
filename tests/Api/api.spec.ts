import {test, expect } from '@playwright/test'
import exp = require('constants')

const baseURL = 'https://reqres.in/api/'
test.describe('API testing', () => {
    test('Simple API testing - assert response status',async({request})=> {
        const response = await request.get(`${baseURL}users/2`)
        expect (response.status()).toBe(200)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.data.email).toEqual('janet.weaver@reqres.in')
    })

    test('simple API test - invalid end point', async({request}) => {
        const response = await request.get(`${baseURL}users/non-existing-endpoint`)
        expect(response.status()).toBe(404)
    })

    test('create new user - post request', async({request}) => {
        const response = await request.post(`${baseURL}usres`,{
            data:
            {
                name: "abc",
                job: "test"
            }
        })
        expect (response.status()).toBe(201)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.name).toEqual('abc')
        expect(responseBody.job).toEqual('test')
    })

    test('POST Request - login fail', async({request}) => {
        const response = await request.post(`${baseURL}login`,{
            data:{
                email: 'peter@klaven'
            }
        })
        expect(response.status()).toBe(400)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.error).toContain('Missing password')
    })

    test('update user using put request', async({request}) => {
        const response = await request.put(`${baseURL}users/2`,{
            data:{
                name: 'test',
                job: 'new job'
            }
        })
        expect(await response.status()).toBe(200)
        const userDetails = await request.get(`${baseURL}users/2`)
        expect(userDetails.status()).toBe(200)
        const userData = JSON.parse(await userDetails.text())
    })

    test('delete request - delete user', async({request}) => {
        const response = await request.delete(`${baseURL}users/2`)
        expect(response.status()).toBe(204)
    })
})