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
	constructor() {
		console.log(`Name is ${this.name} in the constructor`);
	}

	ngOnInit(): void {
		console.log(`Name is ${this.name} in the ngOnInit`);
	}

	ngOnChanges(changes: SimpleChanges): void {
		const product = changes["name"];
		const oldValue = product.previousValue;
		const newValue = product.currentValue;
		console.log(`Product changed from ${oldValue} to ${newValue}`);
	}

	@Input() name: string = "";

	// event occur in child, and notify to the parent.
	@Output() bought = new EventEmitter<string>();

	buy() {
		this.bought.emit(this.name);
	}

	get productName(): string {
		console.log(`Get ${this.name}`);
		return this.name;
	}
}
