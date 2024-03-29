import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SortPipe } from "./sort.pipe";
import { ProductViewComponent } from "./product-view/product-view.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "../cart/cart.component";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";
import { MaintenanceComponent } from "../maintenance/maintenance.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
	declarations: [
		ProductListComponent,
		ProductDetailComponent,
		SortPipe,
		ProductViewComponent,
		ProductCreateComponent,
		CartComponent,
		MaintenanceComponent,
	],

	imports: [
		CommonModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
	],
	exports: [ProductListComponent, MaintenanceComponent, ProductCreateComponent],
})
export class ProductsModule {}
