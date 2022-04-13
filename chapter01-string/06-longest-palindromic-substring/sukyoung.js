/**
 * @param {string} s
 * @return {string}
 */

const input1 = "babad"; 
const input2 = "cbbd"; 
const input3 = 'oiasjdfiojaweoijfoiwjefoaofijwfeijoaef';
const input4 = 'abadd';

const isBothSame = function(string, position, length) {
  const left = string[position-length];
  const right = string[position+length];

  if (left === undefined || right === undefined) return false;
  return (left === right);
};

const isNextSame = function(string, center1, center2, length) {
  const left = string[center1-length];
  const right = string[center2+length];
  
  if (left === undefined || right === undefined) return false;
  return (left === right);
};

const getOddPalinedromeLength = function(string, center) {
  for (let i = 0; i < string.length; i++) {
    if (isBothSame(string, center, i)) continue;
    return i;
  }
  return string.length;
};

const getEvenPalinedromeLength = function(string, center) {
  for (let i = 0; i < string.length; i++) {
    const isSameCharacter = isNextSame(string, center, center+1, i);
    if (isSameCharacter) continue;
    return i;
  }
};

const longestPalindrome = function(string) {
  let positionOdd;
  let longestOdd = 0; 
  let longestEven = 0; 
  let positionEven;

  for (let i = 0; i < string.length; i++) {
    const oddPalinedrome = getOddPalinedromeLength(string, i); 
    if (longestOdd < oddPalinedrome) {
      longestOdd = oddPalinedrome;
      positionOdd = i;
    }

    const evenPalinedrome = getEvenPalinedromeLength(string, i); 
    if (longestEven < evenPalinedrome) {
      longestEven = evenPalinedrome;
      positionEven = i;
    }
  }

  if (longestOdd > longestEven) {
    return string.substring(positionOdd - longestOdd + 1, positionOdd + longestOdd);
  } else {
    return string.substring(positionEven - longestEven + 1, positionEven + 1 + longestEven);
  }
};

console.log(longestPalindrome(input1));
console.log(longestPalindrome(input2)); 
console.log(longestPalindrome(input3)); 
console.log(longestPalindrome(input4)); 