/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const nums1 = [-1,0,1,2,-1,-4];
const nums2 = [];
const nums3 = [0];
const nums4 = [0,0,0,0];
const nums5 = [-1,0,1,2,-1,-4];

const threeSum = function(nums) {
  const result = {};

  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    hashMap[number] = (hashMap[number] || 0) + 1;
  }
  nums.length = 0;
  for (const number in hashMap) {
    const numberCountUnderThree = Math.min(hashMap[number], 3);
    // number라는 숫자로 numberCountUnderThree만큼 채운 배열
    const array = Array(numberCountUnderThree).fill(Number(number)); 
    nums.push(...array);
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      for (let k = j+1; k < nums.length; k++) {
        if ((nums[i] + nums[j] + nums[k] === 0) && (i != j && i != k && j != k)) {
          const keys = [nums[i], nums[j], nums[k]].sort();
          result[keys] = keys;
        }
      }
    }
  }
  return Object.values(result);
};

// console.log(threeSum(nums1));
// console.log(threeSum(nums2));
// console.log(threeSum(nums3));
console.log(threeSum(nums4));
// console.log(threeSum(nums5));