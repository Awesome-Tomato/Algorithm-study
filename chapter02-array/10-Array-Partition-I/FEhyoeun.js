/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b)

    let sum = 0
    const isEvenValue = (index) => index % 2 === 0

    nums.forEach((value, index) => {
        if(isEvenValue(index)) sum += value
    })

    return sum
};