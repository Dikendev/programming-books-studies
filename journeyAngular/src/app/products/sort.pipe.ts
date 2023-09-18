import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./product.interface";

@Pipe({
	name: "sort",
})
export class SortPipe implements PipeTransform {
	transform(value: Product[]): Product[] {
		return [];
	}
}
