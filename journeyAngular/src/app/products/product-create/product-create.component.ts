import { Component, EventEmitter, Output } from "@angular/core";
import { Product } from "../product.interface";
import { ProductsService } from "../products.service";

@Component({
	selector: "app-product-create",
	templateUrl: "./product-create.component.html",
	styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent {
	constructor(private productsService: ProductsService) {}

	@Output() added = new EventEmitter<Product>();

	createProduct(name: string, price: number) {
		this.productsService.addProduct(name, price).subscribe((product) => {
			this.added.emit(product);
		});
	}
}
