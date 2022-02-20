import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {ProductsComponent} from "./components/products/products.component";

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent },
  { path: '', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
