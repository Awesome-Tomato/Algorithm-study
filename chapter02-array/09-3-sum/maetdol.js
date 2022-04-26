// 효은님이 푸신 방법으로 풀이
const threeSum = function(sum) {
  const usedTwoSumSet = new Set();
  const usedFixedNumberSet = new Set();
  
  sum.sort();
  const result = [];
  for(let i=0; i < sum.length; i++) {
    const fixedNumber = sum[i];
    if(usedFixedNumberSet.has(fixedNumber)) continue;

    // fixedNumber 를 기준으로 가능한 조합을 찾는다
    const combinations = getTwoSums(fixedNumber, sum.slice(i+1));
    // fixedNumber 로는 다 찾았으니 반복하지 않는다
    usedFixedNumberSet.add(fixedNumber);
    result.push(...combinations);
  }

  return result;

  function getTwoSums(targetNumber, numbers) {
    const usableNumberSet = new Set();
    const result = [];

    for(const number of numbers) {
      // target + number + sub = 0 을 만족하는 값
      const sub = -(targetNumber + number);
      if(!usableNumberSet.has(sub)) {
        usableNumberSet.add(number);
        continue;
      }

      const stringify = `${targetNumber},${number}`;
      if(usedTwoSumSet.has(stringify)) continue;

      usedTwoSumSet.add(stringify);
      result.push([targetNumber, number, sub]);
    }

    return result;
  }
}
