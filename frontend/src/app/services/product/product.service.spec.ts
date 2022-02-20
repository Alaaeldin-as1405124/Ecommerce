import {TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Product} from "../../models/Product";
import {environment} from "../../../environments/environment";

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;//to mock the http request
  const apiUrl = environment.apiUrl;
  const dummyProducts: Array<Product> = [
    {title: '', description: '', id: 1, image: '', price: 1000, reviews: []},
    {title: '', description: '', id: 2, image: '', price: 1400, reviews: []},
  ]
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController)//define the http mock from the testing controller
  });

  afterEach(()=>{
    //finish the test http client
    httpMock.verify();
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products', () => {

    service.getProducts().subscribe(products => {
      expect(products.length).toEqual(dummyProducts.length);
      expect(products).toBe(dummyProducts);

    })
    //should send the request once to the API, and check if url is correct
    let request = httpMock.expectOne(`${apiUrl}/products`);
    //it should be get request
    expect(request.request.method).toBe('GET');
    //use Dummy posts to mock the response
    request.flush(dummyProducts)

  })
  it('should get product by id', () => {
    service.getProduct(dummyProducts[0].id).subscribe(productDetails => {
      //expecting the product details to be the same.
      expect(productDetails).toBe(dummyProducts[0]);
    })
    //should send the request once to the API, and check if url is correct
    let request = httpMock.expectOne(`${apiUrl}/products/${dummyProducts[0].id}`);
    //it should be get request
    expect(request.request.method).toBe('GET');
    //use Dummy posts to mock the response
    request.flush(dummyProducts[0])

  })

});
