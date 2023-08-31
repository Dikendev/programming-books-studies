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
const isBigEnough = (element: number, index: number, array: number[]) => {
	if (element >= 10) {
		return element;
	} else if (element < 3) {
		return element;
	}
};
let passed: boolean = [12, 5, 6, 130, 44].every(isBigEnough);
// console.log("Test Value:", passed);

// filter() = method creates a new array with all elements that pass the test implemented by the provided function.
let passedArrayNumbers: number[] = [12, 5, 5, 130, 44].filter(isBigEnough);
// console.log(passedArrayNumbers);

// forEach() = method calls a function for each element in the array.
let num: number[] = [7, 8, 9];
num.forEach((element) => {
	element * 2;
	// console.log(" element", element * 2);
});

// indefOf() = method returns the first index at witch a given element can be found in the array, or -1 if it is not present.
const number: string = "8";
let numbers: number = "this is a test search of number 8:".indexOf(number);
// console.log("index of: ", numbers);
