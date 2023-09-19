import { Directive, OnInit, ViewContainerRef } from "@angular/core";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Directive({
	selector: "[appProductHost]",
})
export class ProductHostDirective implements OnInit {
	constructor(private viewContainer: ViewContainerRef) {}

	ngOnInit(): void {
		const productRef = this.viewContainer.createComponent(
			ProductDetailComponent
		);
		productRef.setInput("product", {
			name: "Optical mouse",
			price: 130,
		});
	}
}
