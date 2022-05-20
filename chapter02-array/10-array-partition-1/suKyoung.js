/**
 * @param {number[]} nums
 * @return {number}
 */

const nums1 = [1,4,3,2]; 
const nums2 = [6,2,6,5,1,2]; 

const arrayPairSum = function(nums) {
  nums = nums.sort(sortArray);
  return getResult(nums);
};

const getResult = function(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result += array[i];
    };
  }
  return result;
};

const sortArray = function(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

console.log(arrayPairSum(nums1));
console.log(arrayPairSum(nums2));