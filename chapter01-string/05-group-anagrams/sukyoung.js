/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"]; // output : [["bat"],["nat","tan"],["ate","eat","tea"]]
const input2 = [""]; // [[""]]
const input3 = ["a"]; // [["a"]]
const input4 = ["", ""]; // [["",""]]
const input5 = ["", "b"]; // [[""], ["b"]]

/* 
* sort한 값을 key로 사용
* sort했을때 같은 단어 나오는 애들은 value값으로 묶어줌
* ex. { 'eat' : ['eat', 'ate', 'tea'] }
* value값만 뽑아서 [] 여기다 넣어서 리턴
*/
const groupAnagrams = function(strs) {
  const sortStr = getSort(strs); // [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]
  const hash = createSortHash(sortStr, strs);  // { aet: 'eat,tea,ate', ant: 'tan,nat', abt: 'bat' }
  return getResultFromHashTable(hash);
};

function getSort(strs) {
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    const wordArray = strs[i].split('');
    const sortString = wordArray.sort(sortStrings).join('');
    result.push(sortString);
  }
  return result;
}

function createSortHash(sortStrs, originStrs) {
  const hash = {};
  for (let i = 0; i < sortStrs.length; i++) {
    const key = sortStrs[i];
    const value = getSort(originStrs[i]).join('');

    if (hash[key] !== undefined) {
      hash[key] = hash[key] + ',' + value;
    } else {
      hash[key] = value;
    }
  }
  return hash;
}

function getResultFromHashTable(hashObj) {
  const result = [];
  const values = Object.values(hashObj); // [ 'eat,tea,ate', 'tan,nat', 'bat' ]
  for (let i = 0; i < values.length; i++) {
    result.push(values[i].split(','));
  }
  return result;
}

function sortStrings(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

console.log(groupAnagrams(input1));
console.log(groupAnagrams(input2));
console.log(groupAnagrams(input3));
console.log(groupAnagrams(input4));
console.log(groupAnagrams(input5));