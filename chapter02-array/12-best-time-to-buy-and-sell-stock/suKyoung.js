/**
 * @param {number[]} prices
 * @return {number}
 */
const prices1 = [7,1,5,3,6,4];
const prices2 = [7,6,4,3,1];
const prices3 = [2,4,1];
const prices4 = [3,2,6,5,0,3];

const maxProfit = function(prices) {
  const {buyPrice, buyDay} = getBuyPrice(prices);
  const sellPrice = getSellPrice(prices, buyDay);
  return (sellPrice - buyPrice);
};

const getBuyPrice = function(array) {
  let buyPrice = array[0]; // -> min
  let buyDay = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < buyPrice && i !== array.length - 1) {
      buyPrice = array[i];
      buyDay = i; // computing index
    }
  }
  return {buyPrice, buyDay};
};

const getSellPrice = function(array, number) {
  let sellPrice = 0; // -> max
  for (let i = number; i < array.length; i++) {
    if (array[i] > sellPrice) {
      sellPrice = array[i];
    }
  }
  return sellPrice;
};

// console.log(maxProfit(prices1));
// console.log(maxProfit(prices2));
// console.log(maxProfit(prices3));
console.log(maxProfit(prices4));