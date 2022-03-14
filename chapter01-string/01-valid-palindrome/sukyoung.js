const input1 = "A man, a plan, a canal: Panama";
const input2 = "race a car";
const input3 = ' ';
const input4 = 'a.';

let isPalindrome = function(s) {
  const normalString = createNormalString(s);
  const reverseString = createReverseString(normalString);
  return (normalString === reverseString ? true : false);
};

function createNormalString(inputString) {
  if (inputString === ' ') return inputString;

  const result = [];
  const lowerCase = inputString.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {
    if (/[^a-zA-Z0-9]/.test(lowerCase[i])) continue;
    result.push(lowerCase[i]);
  }
  return result.join('');
};

function createReverseString(normalStr) {
  if (normalStr === ' ') return normalStr;

  const result = [];
  for (let i = normalStr.length - 1; i >= 0; i--) {
    result.push(normalStr[i]);
  }
  return result.join('');
};

console.log(isPalindrome(input1)); // true
console.log(isPalindrome(input2)); // false
console.log(isPalindrome(input3)); // true
console.log(isPalindrome(input4)); // true
// /^[a-zA-Z]$/.test(lowerCase)