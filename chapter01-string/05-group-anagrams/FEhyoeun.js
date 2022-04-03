/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}

    let key = ''
    for(str of strs) {
        key = str.split("").sort().join("")
        if(!obj[key]) obj[key] = [str]
        else obj[key].push(str)
    }
    return Object.values(obj)
};