
import { $$, $, browser } from "@wdio/globals";
import blueProduct from "../../data_driven/blueProduct.json"  assert { type: "json" };



export class allProducts{

   /*
    This class has the page objects regarding the page containing the product or regarding the page after getting logged in.
    Moreover, different actions are also defined in the form of methods which are performing certiain actions. Name of every method
    explains the action what that method is performing. 
   
   */

    public get addtoCartbackpack(){
        return $(`#add-to-cart-sauce-labs-backpack`);
    }


    public get shoppingCart(){
        // return $(`//button[@class="btn btn-success close-modal btn-block"]`)
        return $(`#shopping_cart_container`)
    }

    public get removeCart(){
        return $(`#remove-sauce-labs-backpack`)
    }


    public async addToCartClick(){
        const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(2000);
        await this.addtoCartbackpack.click();
    }

    public async shoppingCartClick(){
        const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(2000);
        await this.shoppingCart.click();
    }
    public async removeCartClick(){
        const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(2000);
        await this.removeCart.click();
    }



}

