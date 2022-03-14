const input1 = ["h","e","l","l","o"]; 
const input2 = ["H","a","n","n","a","h"]; 

let reverseString = function(s) {
  const refInput = [];
  for (let i = 0; i < s.length; i++) {
    refInput.push(s[i]);
  }

  let leftToRight = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    s[leftToRight] = refInput[i];  
    leftToRight = leftToRight + 1; 
  }
};

reverseString(input1);
reverseString(input2);
console.log(input1);// ["o","l","l","e","h"]
console.log(input2);// ["h","a","n","n","a","H"]

// reviewed
// const origin_i_value = s[i];
// s[i] = s[count];
// s[count] = origin_i_value;