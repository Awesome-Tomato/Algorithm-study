/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let numsLength = nums.length
  let answer = Array(numsLength).fill(1) // 주어진 nums의 배열 길이만큼 array를 만듦. 값은 전부 1.

  // 왼쪽
  for(let i=1; i<nums.length; i++) { // 가장 끝은 어차피 1이기 때문에 i는 1부터 시작
    answer[i] = nums[i-1] * answer[i-1] // 최종적으로 answer = [1, 1, 2, 6]
  }

  // 오른쪽
  let right = 1;
  for(let i=nums.length-1; i>=0; i--) {
    answer[i] = answer[i] * right // 정답 answer 배열에 바로 값 곱하기
    right *= nums[i]
  }

  return answer

};