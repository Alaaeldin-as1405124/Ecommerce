import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductCardComponent} from './product-card.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {Product} from "../../models/Product";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let mockProduct: Product = {title: '', description: '', id: 1, image: '', price: 0, reviews: []};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule,MatSnackBarModule,MatDialogModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the product', () => {
    const nativeElement = fixture.nativeElement;

    expect(nativeElement.querySelector('.product-title').innerText).toEqual(
      mockProduct.title
    );
    expect(
      nativeElement.querySelector('.description-text').innerText
    ).toEqual(mockProduct.description);
    expect(nativeElement.querySelector('#product-price').innerText).toEqual(
      `Price: ${mockProduct.price}$`
    );
  })
});
