import { Injectable } from "@angular/core";
import { Product } from "./product.interface";

@Injectable({
	providedIn: "root",
})
export class ProductsService {
	constructor() {}

	getProducts(): Product[] {
		return [
			{ name: "WebCam", price: 100 },
			{ name: "Microphone", price: 200 },
			{ name: "Wireless keyboard", price: 85 },
		];
	}
}
