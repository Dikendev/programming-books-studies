import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { productDetailResolver } from "./products/product-detail.resolver";

const routes: Routes = [
	{
		path: "products",
		component: ProductListComponent,
		children: [{ path: ":id", component: ProductDetailComponent }],
	},

	{ path: "cart", component: CartComponent },
	{
		path: "about",
		loadChildren: () =>
			import("./about/about.module").then((m) => m.AboutModule),
	},
	{
		path: "products/:id",
		component: ProductDetailComponent,
		resolve: { product: productDetailResolver },
	},

	{ path: "oioi", component: MaintenanceComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
