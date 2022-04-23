/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
  // 맨 왼쪽에서부터 자신의 위치까지, 자신을 제외한 숫자들의 곱을 각 자리에 저장한다
  const shiftedMultiplies = Array(nums.length).fill(1);
  for(let i=1; i < nums.length; i++) {
    shiftedMultiplies[i] = nums[i - 1] * shiftedMultiplies[i - 1];
  }

  // 맨 오른쪽에서부터, 자신의 위치까지, 자신을 제외한 숫자들의 곱을
  // 위에서 구한 왼쪽 곱과 곱한다
  let acc = 1;
  for(let i=nums.length-1; i >= 0; i--) {
    const temp = nums[i];
    nums[i] = shiftedMultiplies[i] * acc;
    acc = temp * acc;
  }

  return nums;
};