import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomerComponent } from "./customer/customer.component";
import { FormsModule } from "@angular/forms";
import { ProductsModule } from "./products/products.module";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
	declarations: [AppComponent, CustomerComponent, ProductListComponent, ProductDetailComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule, ProductsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
