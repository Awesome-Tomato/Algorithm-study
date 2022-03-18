/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const center = Math.floor(s.length / 2);
    const lastCharacterIndex = s.length - 1;
    
    for(let i=0; i < center; i++) {
        const otherSideIndex = lastCharacterIndex - i;
        swap(s, i, otherSideIndex);
    }
};

function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}