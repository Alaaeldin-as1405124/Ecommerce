import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart/cart.service";
import {Cart} from "../../models/Cart";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  totalItems: number =0;//how many items are there
  cartService:CartService;
  constructor(cartService: CartService) {
    this.cartService = cartService;
    this.cart = cartService.getCart() //get the initial cart
    this.totalItems = cartService.getItemsCount();//get initial items count


  }
  ngOnInit() {
    //subscribe to the change
    this.cartService.subject.subscribe((value => {
      //value is the new cart emitted from the service
      this.cart = value;
      this.totalItems = this.cartService.getItemsCount();
    }))
  }


}
