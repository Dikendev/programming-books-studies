type ToBeOrNotToBe = {
	toBe: (val: any) => boolean;
	notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
	return {
		toBe: (v: any) => {
			if (v !== val) throw new Error("Not Equal");
			return true;
		},
		notToBe: (v: any) => {
			if (v === val) throw new Error("Equal");
			return true;
		},
	};
}
/**
 *
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).notToBe(5));
