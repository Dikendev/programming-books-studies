export {};
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let index = 0;
	while (index !== nums2.length) {
		if (nums2[index] >= nums1[index]) {
			if (nums1[index] === 0) {
				nums1.splice(index, 0, nums2[index]);
			} else {
				nums1.splice(index + 1, 0, nums2[index]);
			}
			if (nums1[nums1.length - 1] === 0) {
				nums1.pop();
			}
		} else {
			nums1.splice(index, 0, nums2[index]);
			if (nums1[nums1.length - 1] === 0) {
				nums1.pop();
			}
		}
		index++;
	}
	nums1 = nums1.sort((a, b) => a - b);
}

let nums1 = [1, 2, 3, 0, 0, 0];
// m = 3
// n = 3
let nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);
console.log(nums1);
