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
console.log(person.sayHi());

let employee: Person = {
	firstName: "Diego",
	lastName: "Kennedy",
	sayHi: (): string => {
		return "Ola";
	},
};
console.log(employee.sayHi());
