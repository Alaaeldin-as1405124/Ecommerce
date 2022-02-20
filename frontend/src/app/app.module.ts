import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {CartComponent} from './components/cart/cart.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsComponent } from './components/products/products.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RatingsComponent } from './components/ratings/ratings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarsComponent } from './components/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    ProductCardComponent,
    ProductsComponent,
    RatingsComponent,
    StarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
