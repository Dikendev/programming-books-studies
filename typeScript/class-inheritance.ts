export {};

class Shape {
	Area: number;

	constructor(a: number) {
		this.Area = a;
	}
}

class Circle extends Shape {
	disp(): void {
		console.log(`Area of the circle: ${this.Area}`);
	}
}

const obj = new Circle(223);
obj.disp();
