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

  let answer = '';
  for (let i = 0; i < inputString.length; i++) {
    const lowerCase = inputString[i].toLowerCase();
    if (/[^a-zA-Z0-9]/.test(lowerCase)) continue;
    answer = answer + lowerCase;
  }
  return answer;
};

function createReverseString(normalStr) {
  if (normalStr === ' ') return normalStr;

  let answer = '';
  for (let i = normalStr.length - 1; i >= 0; i--) {
    answer = answer + normalStr[i];
  }
  return answer;
};

console.log(isPalindrome(input1)); // true
console.log(isPalindrome(input2)); // false
console.log(isPalindrome(input3)); // true
console.log(isPalindrome(input4)); // true
// /^[a-zA-Z]$/.test(lowerCase)