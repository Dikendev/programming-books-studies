let val: string | number;
val = 12;
// console.log(val);
val = "string";
// console.log(val);

const disp = (username: string | string[]) => {
	if (typeof username === "string") {
		console.log(username);
	} else {
		for (let i = 0; i < username.length; i++) {
			console.log(username[i]);
		}
	}
};
// disp(["mark", "diego"]);

let array: number[] | string[];
array = [1, 2, 4];
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}
array = ["Mumbai", "Pune", "Delhi"];
console.log(array);
