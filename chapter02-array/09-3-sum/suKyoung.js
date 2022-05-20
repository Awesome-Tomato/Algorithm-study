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
  const hashMap = convertArrayToObject(nums);
  const resultArray = minimizeArrayLength(nums, hashMap); 
  return getRessult(resultArray)
};

const convertArrayToObject = function(numbers) {
  const hashMap = {};
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    hashMap[number] = (hashMap[number] || 0) + 1;
  }
  return hashMap;
};

const minimizeArrayLength = function(array, object) {
  array.length = 0; // reset array
  // if an array has same items over three, minimize the length of array into three...
  const TRIPLET = 3;
  for (const nums in object) {
    const numberCountUnderThree = Math.min(object[nums], TRIPLET);
    // number라는 숫자로 numberCountUnderThree만큼 채운 배열
    const newArray = Array(numberCountUnderThree).fill(Number(nums)); 
    array.push(...newArray);
  }
  return array;
};

const getRessult = function(array) {
  const result = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      for (let k = j+1; k < array.length; k++) {
        if ((array[i] + array[j] + array[k] === 0) && (i != j && i != k && j != k)) {
          const keys = [array[i], array[j], array[k]].sort();
          result[keys] = keys;
        }
      }
    }
  }
  return Object.values(result);
};

console.log(threeSum(nums1));
// console.log(threeSum(nums2));
// console.log(threeSum(nums3));
// console.log(threeSum(nums4));
// console.log(threeSum(nums5));