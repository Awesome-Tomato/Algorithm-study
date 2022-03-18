/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    const input = s;
    const output = input.splice(0, s.length);
    while(output.length > 0) {
        input.push(output.pop());
    }
    return input;
};
