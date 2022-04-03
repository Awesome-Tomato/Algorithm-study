/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const alreadyUsedTwoSums = new Set();
    const twoSum = function(numbers, targetNumber) {
        const results = [];
        const previous = new Set();

        for (const number of numbers) {
            const sub = targetNumber - number;
            if (previous.has(sub)) {
                const stringfied = [sub, number].toString();

                if (alreadyUsedTwoSums.has(stringfied)) continue;

                alreadyUsedTwoSums.add(stringfied);
                results.push([sub, number]);
                continue;
            }
            previous.add(number);
        }
        return results;
    }
    nums.sort();
    const fixedNums = new Set();
    const results = [];

    for (const [index, num] of nums.entries()) {
        if (fixedNums.has(num)) continue;

        const rest = nums.slice(index + 1);
        const twoSums = twoSum(rest, 0 - num);
        const attahced = twoSums.map((two) => [num, ...two]);

        results.push(...attahced);
        fixedNums.add(num);
    }
    return results;
};