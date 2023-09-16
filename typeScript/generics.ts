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

const square = new Square();

const area = square?.area();

const mySquare = square ?? new Square();
// now with its support  in components templates
