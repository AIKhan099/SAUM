import { Given, When, Then, AfterAll } from '@wdio/cucumber-framework';
import { browser, $ } from '@wdio/globals'
import { Page }  from '../pageobjects/page.js';
import  apiTesting    from '../pageobjects/apiTesting.page.js';
import  { expect } from 'chai';

let apiTesing = new apiTesting();


Given(/^I send the GET request at url.$/, async () => {
    await apiTesing.get_();
    
})
Given(/^I get 200 status.$/, async () => {
    await apiTesing.status();
})

Given(/^I get message Get Products Successfully.$/, async () => {
    await apiTesing.message();

})

Given(/^I get pages 153037.$/, async () => {
     await apiTesing.pages();
   
})

Given(/^I get total 459110.$/, async () => {
   await apiTesing.total();


})



