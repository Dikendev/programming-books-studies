export {};

function method<T>(args: T): T {
	return args;
}
method<number>(1);
method<string>("hello generics");

function meth<T>(arg: T[]): T[] {
	console.log(arg.length);
	return arg;
}

interface Shape {
	area(): number;
}

class Square implements Shape {
	area() {
		return 1;
	}
}
class Circle implements Shape {
	area() {
		return 2;
	}
}

function allAreas<T extends Shape>(...args: T[]): number {
	let total = 0;
	args.forEach((x) => {
		total += x.area();
	});
	console.log(total);
	return total;
}

allAreas(new Square(), new Circle());

function getFirstElement<T>(array: T[]) {
	return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const string = ["string1", "string2", "string3"];
const firstString = getFirstElement(string);

function identity<T>(arg: Array<T>): Array<T> {
	console.log(arg.length);
	return arg;
}

identity<number>([1, 2]);
identity<string>(["2", "3"]);
