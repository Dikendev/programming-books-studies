import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-product-detail",
	templateUrl: "./product-detail.component.html",
	styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent {
	@Input() name: string = "";

	// event occur in child, and notify to the parent.
	@Output() bought = new EventEmitter();

	buy() {
		this.bought.emit();
	}
}
