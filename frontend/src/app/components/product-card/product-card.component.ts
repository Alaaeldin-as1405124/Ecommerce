import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {Product} from "../../models/Product";
import {FormControl, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {ToastService} from "../../services/toast/toast.service";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  amount: number = 1;//if it's a cart item then we need to indicate how many quantities are there in the cart
  @Input()
  product: Product =  {title: '', description: '', id: 1, image: '', price: 0, reviews: []};
  @Input()
  cartItem: boolean = false;//by default it's not a product in the cart
  @Input()
  index: number = 0;//indicator which index is the item, if it's a cart item
  amountControl = new FormControl(this.amount, [Validators.min(1),Validators.max(100)]);//form control for the amount/qty
  avgRate:number = 0;
  constructor(private cartService: CartService,public productService:ProductService,public toastService:ToastService,private router: Router) {}

  ngOnInit(): void {
    //get Avg rate
    this.avgRate = this.productService.getProductAvgRate(this.product);


    //if it's a cart item then listen to Cart Changes
    if (this.cartItem) {
      //to let the validator start checked for the rules
      this.amountControl.markAsTouched();
      //set the amount initially
      this.amountControl.setValue(this.cartService.getProductCount(this.index));
      //listen to amount control changes
      this.amountControl.valueChanges.subscribe(amount => {
        if(amount > 100){
          this.toastService.showToast('Value must be within the range of 1-100')
        }
        else{
          this.cartService.setProductAmount(this.index, amount);
        }
      })
    }

  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart() {
    //remove from cart service
    this.cartService.removeFromCart(this.index)
  }

  navigateToSingleProduct() {
    this.router.navigate(['/product',this.product?.id])
  }
}
