import { Component, Input, OnInit } from "@angular/core";
import { ProductViewService } from "./product-view.service";

@Component({
	selector: "app-product-view",
	templateUrl: "./product-view.component.html",
	styleUrls: ["./product-view.component.css"],
	providers: [ProductViewService],
})
export class ProductViewComponent implements OnInit {
	@Input() id = -1;
	name = "";

	constructor(private productViewService: ProductViewService) {}
	ngOnInit(): void {
		this.getProduct();
	}

	private getProduct() {
		this.productViewService.getProduct(this.id).subscribe((product) => {
			if (product) {
				this.name = product.name;
			}
		});
	}
}
