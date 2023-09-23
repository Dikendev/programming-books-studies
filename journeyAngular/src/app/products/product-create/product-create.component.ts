import { Component, EventEmitter, Output } from "@angular/core";
import { Product } from "../product.interface";
import { ProductsService } from "../products.service";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import { priceRangeValidator } from "../price-range.directive";

@Component({
	selector: "app-product-create",
	templateUrl: "./product-create.component.html",
	styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent {
	constructor(
		private productsService: ProductsService,
		private formBuilder: FormBuilder
	) {}

	@Output() added = new EventEmitter<Product>();

	productForm = new FormGroup({
		name: new FormControl("", {
			nonNullable: true,
			validators: Validators.required,
		}),
		price: new FormControl<number | undefined>(undefined, {
			nonNullable: true,
			validators: [Validators.required, priceRangeValidator()],
		}),
		info: new FormGroup({
			category: new FormControl(""),
			description: new FormControl(""),
			image: new FormControl(""),
		}),
	});

	get name() {
		return this.productForm?.controls.name;
	}
	get price() {
		return this.productForm?.controls.price;
	}

	createProduct() {
		this.productsService
			.addProduct(this.name.value, Number(this.price.value))
			.subscribe((product) => {
				this.productForm?.reset();
				this.added.emit(product);
			});
	}
}
