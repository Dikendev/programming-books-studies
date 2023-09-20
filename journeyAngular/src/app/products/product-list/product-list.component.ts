import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { Product } from "../product.interface";
import { ProductsService } from "../products.service";

@Component({
	selector: "app-product-list",
	templateUrl: "./product-list.component.html",
	styleUrls: ["./product-list.component.css"],
	providers: [ProductsService],
})
export class ProductListComponent implements OnInit, AfterViewInit {
	selectedProduct: Product | undefined;
	@ViewChild(ProductListComponent) productDetail:
		| ProductDetailComponent
		| undefined;
	products: Product[] = [];

	constructor(private productService: ProductsService) {}

	today = new Date();

	ngOnInit(): void {
		this.getProducts();
	}

	ngAfterViewInit(): void {
		if (this.productDetail) {
			console.log(this.productDetail.product);
		}
	}

	onBuy() {
		window.alert(`You just bought ${this.selectedProduct?.name}!`);
	}

	private getProducts() {
		this.productService.getProducts().subscribe((products) => {
			this.products = products;
		});
	}
}
