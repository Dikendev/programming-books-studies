import {
	Component,
	Input,
	Output,
	OnInit,
	EventEmitter,
	ViewEncapsulation,
	ChangeDetectionStrategy,
	OnChanges,
} from "@angular/core";
import { Observable, of, switchMap } from "rxjs";
import { Product } from "src/app/products/product.interface";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../products.service";

@Component({
	selector: "app-product-detail",
	templateUrl: "./product-detail.component.html",
	styleUrls: ["./product-detail.component.css"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit, OnChanges {
	constructor(
		private productsService: ProductsService,
		private route: ActivatedRoute
	) {}

	@Input() id = -1;
	@Input() product: Product | undefined;
	// event occur in child, and notify to the parent.
	@Output() bought = new EventEmitter<string>();
	@Output() deleted = new EventEmitter<string>();
	//Observable
	product$: Observable<Product> | undefined;

	ngOnInit(): void {
		this.product$ = this.route.data.pipe(
			switchMap((data) => of(data["product"]))
		);
	}

	ngOnChanges(): void {
		this.product$ = this.productsService.getProduct(this.id);
	}

	buy() {
		this.bought.emit();
	}

	changePrice(product: Product, price: number) {
		this.productsService.updateProduct(product.id, price).subscribe(() => {
			alert(`The price of ${product.name} was changed!`);
		});
	}

	remove(product: Product) {
		this.productsService.deleteProduct(product.id).subscribe(() => {
			this.deleted.emit();
		});
	}
}
