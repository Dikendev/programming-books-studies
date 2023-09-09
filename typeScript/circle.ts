import shape = require("./shape-interface");

export class Circle implements shape.Shape {
	public draw(): string {
		let res = "Circle is drawn (external module";
		console.log(res);
		return res;
	}
}
