import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewEncapsulation,
	ChangeDetectionStrategy,
} from "@angular/core";

@Component({
	selector: "app-product-detail",
	templateUrl: "./product-detail.component.html",
	styleUrls: ["./product-detail.component.css"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
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
