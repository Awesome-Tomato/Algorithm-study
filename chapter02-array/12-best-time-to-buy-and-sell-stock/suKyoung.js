/**
 * @param {number[]} prices
 * @return {number}
 */
const prices1 = [7,1,5,3,6,4];
const prices2 = [7,6,4,3,1];
const prices3 = [2,4,1];
const prices4 = [3,2,6,5,0,3];

const maxProfit = function(prices) {
// FIXME: prices를 전부 반복하며 maxProfit을 구한다
  const {buyPrice, buyDay} = getBuyPrice(prices);
  const sellPrice = getSellPrice(prices, buyDay);
  return (sellPrice - buyPrice);
};
// FIXME : i번째 인덱스부터 올라가기 직전의 최소값을 찾는다.
const getBuyPrice = function(array) {
  let buyPrice = array[0];
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
  let sellPrice = 0;
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