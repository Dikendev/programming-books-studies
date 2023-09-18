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
		console.log(`Name is ${this.product} in the ngOnInit`);
	}

	ngOnChanges(changes: SimpleChanges): void {
		const product = changes["product"];
		const oldValue = product.previousValue;
		const newValue = product.currentValue;
		console.log(`Product changed from ${oldValue} to ${newValue}`);
	}

	@Input() product: string = "";

	// event occur in child, and notify to the parent.
	@Output() bought = new EventEmitter<string>();

	buy() {
		this.bought.emit(this.product);
	}

	get productName(): string {
		console.log(`Get ${this.product}`);
		return this.product;
	}
}
