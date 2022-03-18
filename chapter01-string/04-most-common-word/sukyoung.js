/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

const paragraph1 = "Bob hit a ball, the hit BALL flew far after it was hit."
const banned1 = ["hit"]; // output: "ball"

const paragraph2 = "a.";
const banned2 = []; // output: 'a'

const paragraph3 = "Bob. hIt, baLl";
const banned3 = ["bob", "hit"]; // output: ball

const paragraph4 = "a, a, a, a, b,b,b,c, c";
const banned4 = ["a"]; // output: b

const paragraph5 = "abc abc? abcd the jeff!";
const banned5 = ["abc","abcd","jeff"];

/* 
* punctuation 제거
* hash를 미리 만들고, banned 문자열 제거
*/

const mostCommonWord = function(paragraph, banned) {
  const paragraphWithoutPuntuation = getParagraphsWithoutPuntuation(paragraph).split(' '); 
  const hashParagraph = setParagraphToHashTable(paragraphWithoutPuntuation);
  const hashParagraphhWithoutBanned = setBannedWordValueZero(hashParagraph, banned); 
  const mostUsedWord = getMostUsedWord(hashParagraphhWithoutBanned); 

  return mostUsedWord;
};

function getParagraphsWithoutPuntuation(paragraph) {
  const puntuations = /[ "!?',;.]/g;
  
  return (
    paragraph
    .toLowerCase()
    .replaceAll(puntuations, ' ')
    .replaceAll(/ +/g, ' ')
  );
}

function setParagraphToHashTable(paragraphs) {
  const hash = {};

  for (let i = 0; i < paragraphs.length; i++) {
    const key = paragraphs[i];

    if (key === '') continue;
    if (hash[key] === undefined) {
      hash[key] = 1;
    } else {
      hash[key] += 1;
    }
  }

  return hash;
}

function setBannedWordValueZero(hashObj, banned) {

  for (let i = 0; i < banned.length; i++) {
    const keys = banned[i];
    if (hashObj[keys]) {
      hashObj[keys] = 0;
    }
  }
  return hashObj;
}

function getMostUsedWord(hash) {
  const num = Object.values(hash);
  let max = num[0];

  for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i]; // 2
    }
  }

  for ( const [key, value] of Object.entries(hash)) {
    if (value === max) {
      return key;
    }
  }
}

console.log(mostCommonWord(paragraph1, banned1));
console.log(mostCommonWord(paragraph2, banned2));
console.log(mostCommonWord(paragraph3, banned3));
console.log(mostCommonWord(paragraph4, banned4));
console.log(mostCommonWord(paragraph5, banned5));
