export {};

function method<T>(args: T): T {
	return args;
}
method<number>(1);
method<string>("hello generics");

function meth<T>(arg: T[]): T[] {
	console.log(arg.length);
	return arg;
}

class CustomPerson extends Array {}
class Person {}
const people: Person[] = [];
const newPerson = new CustomPerson();
meth<Person>(people);
meth<CustomPerson>(newPerson);
const person = new Person();
