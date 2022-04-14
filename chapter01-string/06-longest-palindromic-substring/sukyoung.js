/**
 * @param {string} s
 * @return {string}
 */

const input1 = "babad"; 
const input2 = "cbbd"; 
const input3 = 'oiasjdfiojaweoijfoiwjefoaofijwfeijoaef';
const input4 = 'abadd';

// 팰린드롬이 홀수일 때
const isBothSame = function(string, center, length) {
  const left = string[center-length];
  const right = string[center+length];

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

const isOddPalinedrome = function(string) {
  let positionOdd;
  let longestOdd = 0; 
  for (let i = 0; i < string.length; i++) {
    // 팰린드롬이 홀수일 때
    const oddPalinedrome = getOddPalinedromeLength(string, i); 
    if (longestOdd < oddPalinedrome) {
      longestOdd = oddPalinedrome;
      positionOdd = i;
    }
  }
  return {positionOdd, longestOdd};
};

// 팰린드롬이 짝수일 때
const isNextSame = function(string, center1, center2, length) {
  const left = string[center1-length];
  const right = string[center2+length];
  
  if (left === undefined || right === undefined) return false;
  return (left === right);
};

const getEvenPalinedromeLength = function(string, center) {
  for (let i = 0; i < string.length; i++) {
    const isSameCharacter = isNextSame(string, center, center+1, i);
    if (isSameCharacter) continue;
    return i;
  }
};

const isEvenPalinedrome = function(string) {
  let positionEven;
  let longestEven = 0; 
  for (let i = 0; i < string.length; i++) {
    const evenPalinedrome = getEvenPalinedromeLength(string, i); 
    if (longestEven < evenPalinedrome) {
      longestEven = evenPalinedrome;
      positionEven = i;
    }
  }
  return {longestEven, positionEven};
};

// 펠린드롬 판별
const longestPalindrome = function(string) {
  const {positionOdd, longestOdd} = isOddPalinedrome(string);
  const {positionEven, longestEven} = isEvenPalinedrome(string);

  if (longestOdd > longestEven) return string.substring(positionOdd - longestOdd + 1, positionOdd + longestOdd);
  return string.substring(positionEven - longestEven + 1, positionEven + 1 + longestEven);
};

console.log(longestPalindrome(input1));
console.log(longestPalindrome(input2)); 
console.log(longestPalindrome(input3)); 
console.log(longestPalindrome(input4)); 