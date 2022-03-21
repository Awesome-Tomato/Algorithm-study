/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const set = {};
    for(const word of strs) {
        groupBySortedString(set, word);
    }

    return Object.values(set);
};

function groupBySortedString(groupSet, word) {
    const sortedCharacters = sortCharacter(word);
    const group = groupSet[sortedCharacters];

    const isPushed = push(group, word);
    if(!isPushed) groupSet[sortedCharacters] = [word];
}

function sortCharacter(word) {
    return word.split('').sort().join('');
}

function push(arr, item) {
    if(arr) {
        arr.push(item);
        return true;
    }
    return false;
}