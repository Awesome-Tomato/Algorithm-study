/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => b - a);
  let sum = 0;
  // nums 의 길이는 짝수, 짝수번째 숫자들의 합을 구한다
  for (let i = 1; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};
