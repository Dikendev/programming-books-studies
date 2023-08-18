// Declaring a tuple
let person: [string, number] = ["Alice", 30];

// Accessing tuple elements
let personName: string = person[0];
let age: number = person[1];

// console.log(personName);
// console.log(age);

// Declaring a tuple with option elements
let employee: [string, number, string?] = ["Jhon", 28];
let manager: [string, number, string?] = ["Jane", 35, "HR"];

// console.log(employee);
// console.log(manager);

// Tuple as function return type

function divideAndRemainder(
	dividend: number,
	divisor: number
): [number, number] {
	const quotient = Math.floor(dividend / divisor);
	const remainder = dividend % divisor;
	return [quotient, remainder];
}

let result: [number, number] = divideAndRemainder(10, 3);

console.log(result);
