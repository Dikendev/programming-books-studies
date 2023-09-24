import { Component, EventEmitter, OnInit, Output } from "@angular/core";
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
export class ProductCreateComponent implements OnInit {
	constructor(
		private productsService: ProductsService,
		private formBuilder: FormBuilder
	) {}

	showPriceRangeHint = false;
	@Output() added = new EventEmitter<Product>();

	ngOnInit(): void {
		this.price.valueChanges.subscribe((price) => {
			if (price) {
				this.showPriceRangeHint = price > 1 && price < 10000;
			}
		});
	}

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
