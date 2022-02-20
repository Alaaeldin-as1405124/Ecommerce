import {Injectable} from '@angular/core';
import {Product} from "../../models/Product";
import {Subject} from "rxjs";
import {Cart} from "../../models/Cart";
import {ToastService} from "../toast/toast.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCart();//cart items array, initialized to the stored value or empty
  subject: Subject<any> = new Subject();//to multicast the cart to many observers
  constructor(public toastService:ToastService) {
    //calculate the total initially, if there's any stored cart
    this.calculateTotalPrice();
  }

  private getProductIndexById(id: number): number {
    return this.cart.products.findIndex((cartItem) => cartItem.product.id === id)
  }

  //add a product to the cart, then save it, notify the observers that it got changed
  addToCart(product: Product, amount:number = 1): void {
    //find the product
    let existingProductIndex = this.getProductIndexById(product.id);
    //if there's a product already in the cart
    if (existingProductIndex !== -1) {
      //increase the amount
      this.incrementAmount(existingProductIndex,amount);
    } else {
      //add the new product to the list
      this.cart.products.push({product, amount: amount});//define an amount if it doesn't exsists
    }

    //calculate the price
    this.cart.total = this.calculateTotalPrice();
    //notify the observers with the updated cart
    this.subject.next(this.cart);
    //save the cart
    this.saveCart();

    this.toastService.showToast(`Added ${amount}x ${product.title} to your cart!`)
  }

  //calculate the total price
  calculateTotalPrice(): number {
    return this.cart.products.reduce((a, b) => a + b.product.price * b.amount, 0);
  }

  //increase amount
  private incrementAmount(index: number, by:number =1) {
    this.cart.products[index].amount += by;
  }


  //remove product from cart
  removeFromCart(index: number): void {
    //check if the product is there

    //splice the index, with count 1
    this.cart.products.splice(index, 1);
    //calculate the total
    this.cart.total = this.calculateTotalPrice();
    //notify the observers with the updated cart
    this.subject.next(this.cart);
    //save the updated cart
    this.saveCart();
    this.toastService.showToast(`Item has been removed from your cart!`)
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart(): Cart {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : {products: [], total: 0};
  }

  getItemsCount(): number {
    return this.cart.products.reduce((a, b) => a + b.amount, 0);
  }

  getProductCount(index: number) {
    return this.cart.products[index].amount;
  }

  setProductAmount(index: number, amount: any) {
    console.log('changing index ',index, 'to amount ',amount)
    this.cart.products[index].amount = amount;
    //calculate the total
    this.cart.total = this.calculateTotalPrice();
    //notify the observers with the updated cart
    this.subject.next(this.cart);
    //save the updated cart
    this.saveCart();

  }
}
