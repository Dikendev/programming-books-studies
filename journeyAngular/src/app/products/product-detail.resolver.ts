import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Product } from "./product.interface";
import { ProductsService } from "./products.service";

export const productDetailResolver: ResolveFn<Product> = (
	route: ActivatedRouteSnapshot
) => {
	const productsService: ProductsService = inject(ProductsService);
	const id: number = Number(route.paramMap.get("id"));
	return productsService.getProduct(id);
};
