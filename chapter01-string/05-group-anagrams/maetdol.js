/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = [];
    strs = strs.map(str => ({str, set: getCharacterSet(str)}));
    
    for(const word of strs) {
        const anagramGroup = findMatchedAnagramGroup(groups, word);
        if(anagramGroup) {
            anagramGroup.push(word);
            continue;
        }
        groups.push([word]);
    }
    
    return groups.map(group => group.map(str => str.str));
};

function findMatchedAnagramGroup(groups, word) {
    for(const group of groups) {
        const representWord = group[0];
        const isAnagram = checkAnagram(representWord, word);
        if(isAnagram) return group;
    }
    
    return null;
}

function checkAnagram(a, b) {
    if(a.str.length !== b.str.length) return false;
    
    for(const ch in a.set) {
        if(a.set[ch] !== b.set[ch]) return false;
    }
    
    for(const ch in b.set) {
        if(a.set[ch] !== b.set[ch]) return false;
    }
    return true;
}

function getCharacterSet(word) {
    const set = {};
    for(const ch of word) {
        set[ch] = (set[ch] || 0) + 1;
    }
    
    return set;
}