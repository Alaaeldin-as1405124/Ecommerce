import {TestBed} from '@angular/core/testing';

import {CartService} from './cart.service';
import {Product} from "../../models/Product";
import {Cart} from "../../models/Cart";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('CartService', () => {
  let service: CartService;
  let productMock: Product = {
    id: 1,
    title: "product 1",
    image: 'www.image.com',
    description: 'description 1',
    price: 123,
    reviews: []
  }
  beforeEach(() => {
    //make sure cart is empty
    localStorage.removeItem('cart');
    TestBed.configureTestingModule({
      imports:[MatSnackBarModule,BrowserAnimationsModule]
    });
    service = TestBed.inject(CartService);

  });

  afterEach(()=>{
    //make sure cart is empty
    localStorage.removeItem('cart');
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be cart object', () => {
    //to be defined
    expect(service.getCart()).toBeDefined();
    //define empty cart
    let cart: Cart = {
      products: [],
      total: 0
    }
    //to equal empty cart interface
    expect(service.getCart()).toEqual(jasmine.objectContaining(cart))
  })

  it('should add to cart', () => {
    let itemsCount = service.getItemsCount();
    //add to cart
    service.addToCart(productMock);
    //check the cart to have the product
    expect(service.getItemsCount()).toEqual(itemsCount + 1);

  })
  it('should add multiple quantities for the same product', () => {
    //make sure that the cart is cleared
    localStorage.removeItem('cart');
    const amount = 2;
    //add to cart
    service.addToCart(productMock, amount);
    //check the cart to have the product
    expect(service.getItemsCount()).toEqual(amount);
    expect(service.getProductCount(0)).toEqual(amount);
  })

  it('should set quantity of a product', () => {
    //add to cart
    service.addToCart(productMock);
    //set amount to 10 for example
    service.setProductAmount(0, 10);
    //check the cart to have the product
    expect(service.getProductCount(0)).toEqual(10);
  })

  it('should calculate the total price', () => {
    let currentTotalPrice = service.calculateTotalPrice();
    //add to cart
    service.addToCart(productMock);
    //test the new total
    expect(service.calculateTotalPrice()).toEqual(currentTotalPrice + productMock.price);
  })
  it('should remove product from cart', () => {
    const totalItems = service.getItemsCount();
    //add item to the cart if it's empty
    if (totalItems === 0) {
      //add item to the cart
      service.addToCart(productMock);
    }
    service.removeFromCart(0)//by default it will be the first index
    expect(service.getItemsCount()).toEqual(0);

  })

});
