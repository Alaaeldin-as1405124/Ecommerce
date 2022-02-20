import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ProductComponent } from './product.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CartService} from "../../services/cart/cart.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let mockProduct = {title: '', description: '', id: 1, image: '', price: 0, reviews: []};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule,MatSnackBarModule,MatDialogModule,BrowserAnimationsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have loading as true',()=>{
    expect(component.loading).toBe(true);
  })

  it('should have product',()=>{
    expect(component.product).toBeDefined();
    expect(component.product).toEqual(mockProduct)
  })
  it('should have qty value as 1',()=>{
    expect(component.amountControl.value).toEqual(1);
  })
  it('should add to cart',()=>{
    let totalItems = component.cartService.getItemsCount();
    component.addToCart();
    expect(component.cartService.getItemsCount()).toBe(totalItems+1)

  })
});
