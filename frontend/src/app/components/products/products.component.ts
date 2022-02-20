import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  loading: boolean = true;

  constructor( private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
        //remove loader from the dom
        setTimeout(()=>{
          this.loading = false;
        },1000)

      },
      (error) => {
        console.warn('unable to fetch data', error);
        //remove loader from the dom, even if it failed
        this.loading = false;
      }
    );
  }


  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
