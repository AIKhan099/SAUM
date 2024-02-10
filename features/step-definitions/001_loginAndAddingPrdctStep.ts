import { Given, When, Then, AfterAll } from '@wdio/cucumber-framework';
import { browser,expect, $ } from '@wdio/globals'
import  { Page } from '../pageobjects/page.js';
import { Login } from '../pageobjects/login.page.js';
import { allProducts } from '../pageobjects/allProducts_page.js';



let page = new Page();
let login = new Login();
let products = new allProducts();

const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
Given(/^I am on the (\w+) page$/, async (page) => {
    
    login.open();
});

When(/^I login with (.+) and (.+).$/, async (username:string, password:string) => {
    
  
    await sleep(3000);
    await login.login(username, password);
    
    
})


When(/^I click on the add to cart button of backpack.$/, async () => {
    
    await products.addToCartClick();
})
When(/^I click on the shopping cart.$/, async () => {
    
    await products.shoppingCartClick();
   
})
When(/^I remove the product from cart.$/, async () => {
    
    await products.removeCartClick();
    
})