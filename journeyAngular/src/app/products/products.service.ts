import { Injectable } from "@angular/core";
import { Product, ProductDTO } from "./product.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, map, of } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ProductsService {
	constructor(private http: HttpClient) {}
	private productsUrl = "https://fakestoreapi.com/products";

	getProducts(): Observable<Product[]> {
		return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
			map((products) =>
				products.map((product) => {
					return this.convertToProduct(product);
				})
			)
		);
	}

	getProduct(id: number): Observable<Product> {
		return this.http
			.get<ProductDTO>(`${this.productsUrl}/${id}`)
			.pipe(map((product) => this.convertToProduct(product)));
	}

	addProduct(name: string, price: number): Observable<Product> {
		return this.http
			.post<ProductDTO>(this.productsUrl, {
				title: name,
				price: price,
			})
			.pipe(map((product) => this.convertToProduct(product)));
	}

	updateProduct(id: number, price: number): Observable<void> {
		return this.http.patch<void>(`${this.productsUrl}/${id}`, {
			price,
		});
	}

	deleteProduct(id: number): Observable<void> {
		return this.http.delete<void>(`${this.productsUrl}/${id}`);
	}

	private convertToProduct(product: ProductDTO): Product {
		return {
			id: product.id,
			name: product.title,
			price: product.price,
		};
	}
}
