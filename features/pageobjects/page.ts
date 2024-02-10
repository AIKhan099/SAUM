import { browser } from '@wdio/globals';


export class Page {
    /**
    * Opens a  page 
   
    */
    public open () {
        browser.maximizeWindow();
        return browser.url(`https://www.saucedemo.com/`)
    }
}

