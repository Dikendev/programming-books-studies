function map(arr: number[], fn: (n: number, i: number) => number): number[] {
	return arr.map((n, i) => fn(n, i));
}

const plusone = (n: number, i: number) => n + 1;
const plusI = (n: number, i: number): any => n + i;
const constant = () => 42;
const arr = [1, 2, 3];
console.log(map(arr, plusone));
