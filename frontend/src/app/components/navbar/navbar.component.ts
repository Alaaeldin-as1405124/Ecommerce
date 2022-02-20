import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CartComponent} from "../cart/cart.component";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  itemsCount:number = 0;//initially it's 0

  constructor(public dialog: MatDialog,private cartService: CartService) {
    //initialize the items count from the service
    this.itemsCount = cartService.getItemsCount();
    //subscribe to cart changes to get the synced total items
    cartService.subject.subscribe(value => {
      //cart value changed
      this.itemsCount = cartService.getItemsCount();
    })
  }

  ngOnInit(): void {
  }

  openCartDialog() {
    this.dialog.open(CartComponent);
  }
}
