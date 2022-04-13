/**
 * @param {string} s
 * @return {string}
 */

const input1 = "babad"; 
const input2 = "cbbd"; 
const input3 = 'oiasjdfiojaweoijfoiwjefoaofijwfeijoaef';
const input4 = 'abcbaaaabbbddddabcdcbaee';

const isBothSame = function(string, position, length) {
  const left = string[position-length];
  const right = string[position+length];

  if (left === undefined || right === undefined) return false;
  return (left === right);
};

const getLength = function(string, center) {
  for (let i = 0; i < string.length; i++) {
    if (isBothSame(string, center, i)) continue;
    return i;
  }
};

const isEvenPalindrome = function(string) {
  return !(string.length % 2);
};

const longestPalidrome = function(string) {
  let position;
  let longest = 0;
  for (let i = 0; i < string.length; i++) {
    const length = getLength(string, i); 
    if (longest < length) {
      longest = length;
      position = i;
    }
  }

  if (isEvenPalindrome(string)) {
    return '짝수';
  } else {
    return string.substring(position - (longest - 1), position + longest);
  }
};

// console.log(longestPalidrome(input1));
console.log(longestPalidrome(input2)); 
// console.log(longestPalidrome(input3)); 
// console.log(longestPalidrome(input4)); 