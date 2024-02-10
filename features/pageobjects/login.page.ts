import {$, browser } from '@wdio/globals';
import {Page} from './page.js';

let page = new Page()
export class Login{
    /*
    This class has the page objects regarding the login page.
    Moreover, different actions are also defined in the form of methods which are performing certiain actions. Name of every method
    explains the action what that method is performing. 
   
   */
    public get inputEmail(){
        return $(`#user-name`)
    }

    public get inputPassword(){
        return $(`#password`)
    }

    public get submit(){
        return $(`#login-button`)
    }
    

    public async login(email:string, password:string){
        // await signup.open();
        await this.inputEmail.waitForExist();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.submit.click();
        
        
    }
    public open () {
        
        return page.open();
       
    }
    

}