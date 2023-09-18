import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { Product } from "../product.interface";

@Component({
	selector: "app-product-list",
	templateUrl: "./product-list.component.html",
	styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements AfterViewInit {
	selectedProduct: Product | undefined;

	@ViewChild(ProductListComponent) productDetail:
		| ProductDetailComponent
		| undefined;

	today = new Date();

	products: Product[] = [
		{
			name: "Webcam",
			price: 100,
		},
		{
			name: "Microphone",
			price: 200,
		},
		{
			name: "Wireless keyboard",
			price: 85,
		},
	];

	productsAdding = [
		...this.products,
		{
			name: "Headphones",
			price: 55,
		},
	];

	ngAfterViewInit(): void {
		if (this.productDetail) {
			console.log(this.productDetail.product);
		}
	}

	onBuy() {
		window.alert(`You just bought ${this.selectedProduct?.name}!`);
	}
}
