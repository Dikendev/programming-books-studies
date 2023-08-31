let alphas: string[];
alphas = ["1", "2", "3", "4"];

let arr_names: number[] = new Array(4);
for (let i = 0; i < arr_names.length; i++) {
	arr_names[i] = i * 2;
	// console.log(arr_names[i]);
}
// console.log(arr_names);

let namesString = "Mary Tom, Jack, Jill";
let names: string[] = new Array(namesString);

for (let i = 0; i < names.length; i++) {
	// console.log(names[i]);
}

// concat() = Method returns a new array comprised of this array joined with two or more arrays. (pure method)
const numeric: number[] = [1, 2, 3];
const numericComp = ["1", "1", "1"].map(Number);
const newNumbers = numeric.concat(numericComp);
// console.log(newNumbers);

// every() = method test whether all the elements in an array passes the test implemented by the provided function.
function isBigEnough(element: number, index: number, array: number[]): boolean {
	return element >= 10;
}

let passed: boolean = [12, 5, 6, 130, 44].every(isBigEnough);
// console.log("Test Value:", passed);
