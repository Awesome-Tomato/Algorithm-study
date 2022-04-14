/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums1 = [2,7,11,15];
const target1 = 9;
const nums2 = [3,2,4];
const target2 = 6;
const nums3 = [3,3];
const target3 = 6;
const nums4 = [2,5,5,11];
const target4 = 10;

const twoSum = function(nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = (i+1); j < nums.length; j++) {
      if (nums[i]+nums[j] !== target) continue;
      result.push(i, j);
      return result;
    }
  }
};

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
console.log(twoSum(nums4, target4));