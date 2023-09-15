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
// Output: [1,2,2,3,5,6]
/* function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index = 0;  // Initialize a variable index to keep track of the current position in nums2

  while (index !== nums2.length) {  // Start a loop to iterate through nums2
      if (nums2[index] >= nums1[index]) {  // Compare the current elements of nums2 and nums1
          if (nums1[index] === 0) {  // Check if the current element in nums1 is 0
              nums1.splice(index, 0, nums2[index]);  // Insert nums2[index] at the current position in nums1
          } else {
              nums1.splice(index+1, 0, nums2[index]);  // Insert nums2[index] after the current position in nums1
          }
          if (nums1[nums1.length-1] === 0) {  // Check if the last element in nums1 is 0
              nums1.pop();  // Remove the last element if it's 0
          }
      } else {
          nums1.splice(index, 0, nums2[index]);  // Insert nums2[index] at the current position in nums1
          if (nums1[nums1.length-1] === 0) {  // Check if the last element in nums1 is 0
              nums1.pop();  // Remove the last element if it's 0
          }
      }
      index = index + 1;  // Move to the next position in nums2
  }

  nums1 = nums1.sort((a,b) => a-b);  // Sort nums1 in non-decreasing order
};


 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
/*  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (nums2.length === 0) return
  nums1.splice(m)

  for (let i = 0; i < n; i++) {
      nums1.push(nums2[i])
  }

  nums1.sort((a, b) => a - b)ß

  return
}; */
