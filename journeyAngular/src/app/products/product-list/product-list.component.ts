import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
	selector: "app-product-list",
	templateUrl: "./product-list.component.html",
	styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements AfterViewInit {
	selectedProduct: string = "";

	products: string[] = ["Webcam", "Microphone", "wireless keyboard"];

	@ViewChild(ProductListComponent) productDetail:
		| ProductDetailComponent
		| undefined;

	ngAfterViewInit(): void {
		if (this.productDetail) {
			console.log(this.productDetail.product);
		}
	}

	onBuy(product: string) {
		window.alert(`You just bought ${product}!`);
	}

	trackByProducts(index: number, product: string): string {
		return product;
	}
}
