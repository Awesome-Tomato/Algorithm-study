/**
 * @param {string} s
 * @return {string}
 */

const input1 = "babad"; 
const input2 = "cbbd"; 
const input3 = 'oiasjdfiojaweoijfoiwjefoaofijwfeijoaef';
const input4 = 'abadd';

// 양 옆의 숫자 비교
const isNextSame = function(string, center1, center2, length) {
  const left = string[center1-length];
  const right = string[center2+length];
  
  if (left === undefined || right === undefined) return false;
  return (left === right);
};

// 팰린드롬이 홀수일 때
const getOddPalindromeLength = function(string, center) {
  for (let i = 0; i < string.length; i++) {
    if (isNextSame(string, center, center, i)) continue;
    return i;
  }
  return string.length;
};

const oddPalindromPosition = function(string) {
  let center;
  let offset = 0; 
  for (let i = 0; i < string.length; i++) {
    // 팰린드롬이 홀수일 때
    const oddPalindrome = getOddPalindromeLength(string, i); 
    if (offset < oddPalindrome) {
      offset = oddPalindrome;
      center = i;
    }
  }
  return {center, offset};
};

// 팰린드롬이 짝수일 때
const getEvenPalindromeLength = function(string, center) {
  for (let i = 0; i < string.length; i++) {
    const isSameCharacter = isNextSame(string, center, center+1, i);
    if (isSameCharacter) continue;
    return i;
  }
};

const evenPalindromPosition = function(string) {
  let center;
  let offset = 0; 
  for (let i = 0; i < string.length; i++) {
    const evenPalindrome = getEvenPalindromeLength(string, i); 
    if (offset < evenPalindrome) {
      offset = evenPalindrome;
      center = i;
    }
  }
  return {offset, center};
};

// 펠린드롬 판별
const longestPalindrome = function(string) {
  const {center: oddCenter, offset: oddOffset} = oddPalindromPosition(string);
  const {center: evenCenter, offset: evenOffset } = evenPalindromPosition(string);

  if (oddOffset > evenOffset) return string.substring(oddCenter - oddOffset + 1, oddCenter + oddOffset);
  return string.substring(evenCenter - evenOffset + 1, evenCenter + 1 + evenOffset);
};

console.log(longestPalindrome(input1));
console.log(longestPalindrome(input2)); 
console.log(longestPalindrome(input3)); 
console.log(longestPalindrome(input4)); 