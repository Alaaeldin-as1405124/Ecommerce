import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import {CartService} from "../../services/cart/cart.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService:CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[MatSnackBarModule,BrowserAnimationsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have total items 0 by default',()=>{
    if(component.cart.products.length ===0){
      expect(component.totalItems).toEqual(0);
    }
    else{
      expect(component.totalItems).toBeGreaterThan(0)
    }

  })
  it('should have cart defined',()=>{
    expect(component.cart).toBeDefined();
  })
  it('should have cart total price of 0 by default',()=>{
    //if cart has no products
    if(component.cart.products.length === 0){
      expect(component.cart.total).toEqual(0);
    }
    else{
      //the cart has products
      expect(component.cart.total).toBeGreaterThanOrEqual(0);
    }


  })
});
