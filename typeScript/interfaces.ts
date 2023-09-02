interface Person {
	firstName: string;
	lastName: string;
	sayHi: () => string;
}

const person: Person = {
	firstName: "Tom",
	lastName: "Hanks",
	sayHi: (): string => {
		return "Hi";
	},
};
// console.log(person.sayHi());

let employee: Person = {
	firstName: "Diego",
	lastName: "Kennedy",
	sayHi: (): string => {
		return "Ola";
	},
};
// console.log(employee.sayHi());

interface RunOptions {
	program: string;
	commandLine: string[] | string | (() => string);
}

//commandLine = string
let option1: RunOptions = {
	program: "test 1",
	commandLine: "Hello World",
};
// console.log(option1.commandLine);

//commandLine = string[]
let option2: RunOptions = {
	program: "test 2",
	commandLine: ["Hello, World"],
};
// console.log(option2.commandLine);

//commandLine = function expression

let option3: RunOptions = {
	program: "test 3",
	commandLine: (): string => {
		return "Hello World";
	},
};

let fn: any = option3.commandLine;
// console.log(fn());

interface NameList {
	[index: number]: string;
}
// let list1: NameList = ["jon", 1, "bran"]; //Error. 1 is not type string

interface Ages {
	[index: string]: number;
}
let ageList: Ages = {};
ageList["Diego"] = 15; // Ok
// ageList[2] = "ninve"; // Error

interface PersonMusic {
	age: number;
}

interface Musician extends PersonMusic {
	instrument: string;
}
let drummer = <Musician>{};

drummer.age = 27;

drummer.instrument = "Drums";
/* console.log(
	`Age is ${drummer.age}, and his instrument is ${drummer.instrument} `
);
 */

interface Parent1 {
	v1: number;
}

interface Parent2 {
	v2: number;
}

interface Child extends Parent1, Parent2 {}
const obj: Child = { v1: 12, v2: 23 };
console.log(`Value 1, ${obj.v1}, value ${obj.v2}`);
