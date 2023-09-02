export {};

class Encapsulate {
	str: string = "hello";
	private strPrivate: string = "world";
}
let obj = new Encapsulate();
// console.log(obj.str);

interface Loan {
	interest: number;
}

class AgriLoan implements Loan {
	interest: number;
	rebate: number;

	constructor(interest: number, rebate: number) {
		this.interest = interest;
		this.rebate = rebate;
	}
}

const objWinterface = new AgriLoan(10, 1);
console.log(
	`Interest is: ${objWinterface.interest}, rebate is ${objWinterface.rebate}`
);
