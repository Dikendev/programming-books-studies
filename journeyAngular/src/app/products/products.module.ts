import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SortPipe } from "./sort.pipe";
import { ProductViewComponent } from "./product-view/product-view.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "../cart/cart.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
	declarations: [
		ProductListComponent,
		ProductDetailComponent,
		SortPipe,
		ProductViewComponent,
		ProductCreateComponent,
		CartComponent,
	],
	imports: [CommonModule, AppRoutingModule],
	exports: [ProductListComponent],
})
export class ProductsModule {}
