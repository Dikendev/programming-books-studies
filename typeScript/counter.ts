type ReturnObj = {
	increment: () => number;
	decrement: () => number;
	reset: () => number;
};

function createCounter(init: number): ReturnObj | undefined {
	let newVal = init;

	return {
		increment: () => ++newVal,
		decrement: () => --newVal,
		reset: () => {
			newVal = init;
			return init;
		},
	};
}

const counter = createCounter(5);
console.log(counter?.increment());
console.log(counter?.reset());
console.log(counter?.decrement());

["increment", "reset", "decrement"];
/* 
Use Testcase
Output
[6,5,5] */

// expected [6,5,4]
