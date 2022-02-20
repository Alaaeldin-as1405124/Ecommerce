import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart/cart.service";
import {FormControl, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ToastService} from "../../services/toast/toast.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product =  {title: '', description: '', id: 1, image: '', price: 0, reviews: []};
  amount: number = 1;
  loading: boolean = true;
  minValue: number = 1;
  maxValue: number = 100;
  amountControl = new FormControl(this.amount,  [Validators.min(this.minValue),Validators.max(this.maxValue)]);//form control for the amount/qty
  avgRate: number = 0;
  cartService:CartService;//to be visible to the test
  constructor(cartService: CartService, private productService: ProductService, private router: Router, public activeRoute: ActivatedRoute,private dialog: MatDialog,public toastService:ToastService) {
    //initialize the cart service
    this.cartService = cartService;
    //close all dialogs if any;
    dialog.closeAll();
    // force route reload whenever params change;
    router.routeReuseStrategy.shouldReuseRoute = () => false;
    //get the passed product id
    const id = activeRoute.snapshot.paramMap.get("id");
    //get the single product details
    productService.getProduct(id).subscribe(value => {
      //set the product to the returned value
      this.product = value;
      //set loading to false after 1 sec, so the user feel smooth animation, and transition
      setTimeout(()=>{
        this.loading = false;
      },1000)
      //get the avg rating
      this.avgRate = productService.getProductAvgRate(this.product);
    })

  }

  addToCart(): void {
    let productAmount = this.amountControl.value;
    //check if the value is more less than the max
    if (productAmount <= this.maxValue) {
      //allowed max number
      this.cartService.addToCart(this.product,productAmount);

    }
    else{
      this.toastService.showToast(`Amount must be within the range of ${this.minValue}-${this.maxValue}`)
    }
  }

  ngOnInit(): void {

  }


}
