export {};

// An Object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects

type person = {
	[key: string]: string;
};

let firstname: string = "Diego";
let lastname = "Kennedy";

const person = {
	[lastname]: "Hanks",
};
console.log(person.lastname);
