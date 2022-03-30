/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let answer = 0;

  let toRight = new Array(height.length);
  let toLeft = new Array(height.length);

  toRight[0] = height[0];
  toLeft[height.length-1] = height[height.length-1];

  for(let i = 1; i < height.length; i++){
    toRight[i] = Math.max(height[i],  toRight[i-1]);
    toLeft[height.length-1-i] = Math.max(height[height.length-1-i], toLeft[height.length-i]);
  }

  for(let i = 0; i < height.length; i++)
    answer += Math.min(toLeft[i], toRight[i]) - height[i];

  return answer;
};