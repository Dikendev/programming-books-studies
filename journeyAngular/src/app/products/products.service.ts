import { Injectable } from "@angular/core";
import { Product } from "./product.interface";
import { Observable, of } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ProductsService {
	constructor() {}

	products: Product[] = [
		{ name: "WebCam", price: 100 },
		{ name: "Microphone", price: 200 },
		{ name: "Wireless keyboard", price: 85 },
	];

	getProducts(): Observable<Product[]> {
		return of(this.products);
	}
}
