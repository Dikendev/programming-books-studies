function disp_details(id: number, name: string, mail_id?: string) {
	// console.log("ID:", id);
	// console.log("Name", name);

	if (mail_id != undefined) console.log("Email id", mail_id);
}

disp_details(123, "Jhon");
disp_details(111, "Mary", "mary@xyc.com");

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
	console.log(x);
})();
