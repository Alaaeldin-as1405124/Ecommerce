import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
import {Product} from "../../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // gets all the products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/products');
  }

  // gets a product by id
  getProduct(id:any): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/products/' + id);
  }

  getProductAvgRate(product:Product):number{
    return parseInt((product.reviews.reduce((total, next) => total + next.stars, 0) / product.reviews.length).toFixed(2))

  }
}
