export {};

class Car {
	engine: string;

	constructor(engine: string) {
		this.engine = engine;
	}

	disp(): void {
		console.log(`Function display Engine is: ${this.engine}`);
	}
}
let obj = new Car("XXSY1");

console.log(`Reading attribute value Engine as ${obj.engine}`);
console.log(`Accessing the function`);
obj.disp();
