/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0] // 일단 prices의 첫 번째 인자를 최소값으로 가정
  let max_diff = 0 // 가장 큰 차익

  for(let i=1; i<prices.length; i++){
    if(prices[i] < min) min = prices[i]
    else {
      let diff = prices[i] - min
      if(diff > max_diff) max_diff = diff
    }
  }

  return max_diff
};