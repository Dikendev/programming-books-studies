import shape = require("./shape-interface");

export class Triangle implements shape.Shape {
	draw(): string {
		let res = "Triangle is drawn (external module)";
		console.log(res);
		return res;
	}
}
