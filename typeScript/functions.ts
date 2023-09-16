export {};
function disp_details(id: number, name: string, mail_id?: string) {
	// console.log("ID:", id);
	// console.log("Name", name);

	if (mail_id != undefined) console.log("Email id", mail_id);
}

disp_details(123, "Jhon");
// disp_details(111, "Mary", "mary@xyc.com");

// Rest parameters
function addNumbers(...nums: number[]) {
	let sum: number = 0;

	for (let i = 0; i < nums.length; i++) {
		sum = sum + nums[i];
	}
	// console.log("sum of the numbers", sum);
}

addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 20);

// Default parameters
function calculate_discount(price: number, rate: number = 0.5) {
	let discount = price * rate;
	// console.log("Discount Amount", discount);
}

calculate_discount(1000);
calculate_discount(1000, 0.3);

//	Recursion
function factorial(number: number): number {
	if (number <= 0) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
}

(function () {
	let x = "Oi";
	// console.log(x);
})();

// Lambda Functions
let foo = (x: number) => 10 + x;
// console.log(foo(100));

let foo2 = (x: number) => {
	x = 10 + x;
	console.log(x);
};

// foo2(100);

// Syntactic Variations
// Parameter type Inference

let func = (x: any) => {
	if (typeof x == "number") {
		console.log(x + "is number");
	} else if (typeof x == "string") {
		console.log(x + "is a string");
	}
};
func(12);
func("Diego");

let disp = () => {
	console.log("Function Invoked");
};

// disp();

function disp2(s1: string): void;
function disp2(n1: number, s1: string): void;

function disp2(x: any, y?: any): void {
	console.log(x);
	console.log(y);
}

disp2("abc");
disp2(1, "xyz");
