function map(arr: number[], fn: (n: number, i: number) => number): number[] {
	let newArr: number[] = [];

	for (let i = 0; i < arr.length; i++) {
		newArr[i] = fn(arr[i], i);
	}

	return newArr;
}

/* function map(arr: number[], fn: (n: number, i: number) => number): number[] {
	let newArr: number[] = [];

	for (let i = 0; i < arr.length; i++) {
		newArr[i] = fn(arr[i], i);
	}

	return newArr;
} */

const plusone = (n: number, i: number) => n + 1;
const plusI = (n: number, i: number): any => n + i;
const constant = () => 42;
const arr = [1, 2, 3];
console.log(map(arr, plusI));
