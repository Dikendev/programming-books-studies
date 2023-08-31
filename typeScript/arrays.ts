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
	console.log(names[i]);
}

// Concat() = Method returns a new array comprised of this array joined with two or more arrays.
