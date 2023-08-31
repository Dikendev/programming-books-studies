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

// concat() = Method returns a new array comprised of this array joined with two or more arrays. (pure method).
const numeric: number[] = [1, 2, 3];
const numericComp = ["1", "1", "1"].map(Number);
const newNumbers = numeric.concat(numericComp);
// console.log(newNumbers);

// every() = Method test whether all the elements in an array passes the test implemented by the provided function.
const isBigEnough = (element: number, index: number, array: number[]) => {
	if (element >= 10) {
		return element;
	} else if (element < 3) {
		return element;
	}
};
let passed: boolean = [12, 5, 6, 130, 44].every(isBigEnough);
// console.log("Test Value:", passed);

// filter() = Method creates a new array with all elements that pass the test implemented by the provided function.
let passedArrayNumbers: number[] = [12, 5, 5, 130, 44].filter(isBigEnough);
// console.log(passedArrayNumbers);

// forEach() = method calls a function for each element in the array.
let num: number[] = [7, 8, 9];
num.forEach((element) => {
	element * 2;
	// console.log(" element", element * 2);
});

// indefOf() = Method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const number: string = "8";
let numbers: number = "this is a test search of number 8:".indexOf(number);
// console.log("index of: ", numbers);

// join() = Method joins all the elements of an array into a string.
let arr = new Array("First", "Second", "Third");
let str = arr.join("+");
// console.log("str", str);

// lastIndexOf() = Method returns the last index at which a given element can be found in the array, or -1 if it not present. The array is searched backwards, starting at fromIndex.
let index = [12, 5, 8, 130, 55].lastIndexOf(130);
// console.log("index is:", index)

// map() = Method creates a new array with the results of calling a provided function on every element in this array.
let numbersMap = [1, 4, 9];
const squareNumber = (number: number) => {
	return number * number;
};
let square = numbersMap.map(squareNumber);
// console.log("roots", square);

// pop() = Method removes the last element from an array and returns that element.
let numberPop = [1, 5, 9];
let elementPop = numberPop.pop();
// console.log(elementPop);

// push() = Method appends the given elements(s) in the last of the array and returns the length of the new array.
let numberToPush: number[] = [6, 9, 3, 9, 7];
let numbPush: number[] = [2, 3, 4];
for (let i = 0; i < numberToPush.length; i++) {
	numbPush.push(numberToPush[i]);
}
// console.log("numbPush:", numbPush);

// reduce() = Method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
let totalReduce = [0, 1, 2, 3].reduce((a, b) => a + b);
// console.log(totalReduce);

// reduceRight() = Method applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
let reduceRight = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// console.log(reduceRight);

// reverse() = Method reverses the element of an array. The fist array element becomes the last and the last becomes the first.
let reverseNum = [0, 1, 2, 3, 4].reverse();
// console.log(reverseNum);

// shift() = Method removes the first element from an array and returns that element.
const shift = (number: number[]): number | undefined => {
	return number.shift();
};
let numberToShift = [12, 5, 3, 6];
// console.log(shift(numberToShift));

// slice() = Method extracts a section of an array and returns a new array.
let arrayToSlice = ["orange", "mango", "banana", "sugar", "tea"];
// console.log("arr.slice(1,2):", arrayToSlice.slice(1, 2));
// console.log("arr.slice(1,3):", arrayToSlice.slice(1, 3));

// some() = Method test whether some element in the array passes the test implemented by the provided function.
const isBigEnoughSome = (element: number, index: number, array: number[]) => {
	return element >= 10;
};
let retval = [2, 5, 6, 7, 12, 2].some(isBigEnoughSome);
// console.log("retval", retval);

// sort() = Method sorts the elements of an array.
let arrayToSorted = ["orange", "mango", "banana", "sugar"];
let sorted = arrayToSorted.sort();
// console.log("sorted", sorted);

// splice() = Method changes the content of an array, adding new elements while removing old elements.
let arrToSplice = ["orange", "mango", "banana", "sugar"];
let removed = arrToSplice.splice(2, 1, "water");
console.log("adding 1:", arrToSplice);
console.log("removed 1:", removed);
