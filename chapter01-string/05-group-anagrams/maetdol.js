/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = [];
    for(const word of strs) {
        const anagramGroup = findMatchedAnagramGroup(groups, word);
        if(anagramGroup) {
            anagramGroup.push(word);
            continue;
        }
        const group = [word];
        group.set = getCharacterSet(word);
        groups.push(group);
    }
    
    return groups;
};

function findMatchedAnagramGroup(groups, word) {
    const wordSet = getCharacterSet(word);
    for(const group of groups) {
        const isAnagram = checkAnagram(group.set, wordSet);
        if(isAnagram) return group;
    }
    
    return null;
}

function checkAnagram(setA, setB) {
    for(const ch in setA) {
        if(setA[ch] !== setB[ch]) return false;
    }
    
    for(const ch in setB) {
        if(setA[ch] !== setB[ch]) return false;
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