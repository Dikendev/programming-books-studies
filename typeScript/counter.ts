type ReturnObj = {
	increment: () => number;
	decrement: () => number;
	reset: () => number;
};

function createCounter(init: number): ReturnObj | undefined {
	return {
		increment: () => {
			return init + 1;
		},
		decrement: () => {
			return init - 1;
		},
		reset: () => {
			return init;
		},
	};
}
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5);
console.log(counter?.increment());
console.log(counter?.reset());
console.log(counter?.decrement());
