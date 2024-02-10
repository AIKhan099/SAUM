import { browser, $ } from '@wdio/globals'
import { Page } from '../pageobjects/page.js';
import supertest from 'supertest';
const request = new supertest('https://automationexercise.com');
import  { expect } from 'chai';


export default class apiTesting {

    /*
        This class is specific for api testing. Different methods are defined. Every method is performing unique action and 
        also asserting certian condition.
    */
    public async get_(){
    const request = await new supertest('https://api.qa.soum.sa/api-v2/rest/api/v1/product/?');
    const res = await request.get('page%20number=2&size=3');
    await  console.log(
     res.status, res.body, res.body.message, res.body.responseData.info.pages, res.body.responseData.info.total)
    }

    public async status(){
        const request = await new supertest('https://api.qa.soum.sa/api-v2/rest/api/v1/product/?');
        const res = await request.get('page%20number=2&size=3');
        await console.log(res.status)
    }

    public async message(){
        const request = await new supertest('https://api.qa.soum.sa/api-v2/rest/api/v1/product/?');
        const res = await request.get('page%20number=2&size=3');
        await console.log(res.body.message)
        let msg = await res.body.message;
        expect(msg).contain(`Get Products`)
    }

    public async pages(){
        const request = await new supertest('https://api.qa.soum.sa/api-v2/rest/api/v1/product/?');
        const res = await request.get('page%20number=2&size=3');
        await console.log(res.body.responseData.info.pages)
        let pages = await res.body.responseData.info.pages;
        expect(pages == 153037)

    }

    public async total(){
        const request = await new supertest('https://api.qa.soum.sa/api-v2/rest/api/v1/product/?');
        const res = await request.get('page%20number=2&size=3');
        await console.log(res.body.responseData.info.total)
        let total = await res.body.responseData.info.total;
        expect(total == 459110)
    }

}