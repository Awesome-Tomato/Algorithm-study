/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mostProfit = 0;
    let lowestPrice = prices[0];
    
    for(const price of prices) {
        if(price < lowestPrice) {
            lowestPrice = price;
            continue;
        }
        
        const profit = price - lowestPrice;
        if(profit > mostProfit) mostProfit = profit;
    }
    return mostProfit;
};