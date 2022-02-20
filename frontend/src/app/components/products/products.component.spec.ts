import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import {ProductService} from "../../services/product/product.service";
import {CartService} from "../../services/cart/cart.service";
import {Product} from "../../models/Product";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  //declare the required services, and variables
  let productService: ProductService;
  let cartService: CartService;
  let productsArray: Array<Product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports:[HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have loading as true initially',()=>{
    expect(component.loading).toBe(true);
  })
  it('should generate n array',()=>{
    const length = 3;
    expect(component.numSequence(length).length).toBe(length)
  })
});
