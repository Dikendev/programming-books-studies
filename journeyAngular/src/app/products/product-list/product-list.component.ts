import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
	selector: "app-product-list",
	templateUrl: "./product-list.component.html",
	styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements AfterViewInit {
	selectedProduct: string = "microphone";

	@ViewChild(ProductListComponent) productDetail:
		| ProductDetailComponent
		| undefined;

	ngAfterViewInit(): void {
		if (this.productDetail) {
			console.log(this.productDetail.name);
		}
	}

	onBuy(name: string) {
		window.alert(`You just bought ${name}!`);
	}
}
