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

class car {
	constructor(public make: string) {
		this.make = make;
	}
}

class Sedan extends car {
	model: string;

	constructor(make: string, model: string) {
		super(make);
		this.model = model;
	}
}
