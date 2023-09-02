export {};

class Root {
	str: string;

	constructor(e: string) {
		this.str = e;
	}
}

class Child extends Root {}
class Leaf extends Child {}

const obj = new Leaf("Hello");
obj.str;
console.log(obj.str);
