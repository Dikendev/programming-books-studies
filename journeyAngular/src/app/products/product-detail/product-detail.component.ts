import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewEncapsulation,
	ChangeDetectionStrategy,
	OnChanges,
	SimpleChanges,
} from "@angular/core";
import { Product } from "src/app/products/product.interface";

@Component({
	selector: "app-product-detail",
	templateUrl: "./product-detail.component.html",
	styleUrls: ["./product-detail.component.css"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnChanges {
	constructor() {}

	ngOnInit(): void {
		console.log(`Name is ${this.product?.name} in the ngOnInit`);
	}

	@Input() product: Product | undefined;

	// event occur in child, and notify to the parent.
	@Output() bought = new EventEmitter<string>();

	ngOnChanges(changes: SimpleChanges): void {
		const product = changes["product"];
		if (!product.isFirstChange()) {
			const oldValue = product.previousValue.name;
			const newValue = product.currentValue.name;
			console.log(`Product changed from ${oldValue} to ${newValue}`);
		}
	}

	buy() {
		this.bought.emit();
	}
}
