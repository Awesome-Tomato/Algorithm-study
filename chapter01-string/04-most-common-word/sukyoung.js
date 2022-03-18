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


const mostCommonWord = function(paragraph, banned) {
  const paragraphWithoutPuntuation = getParagraphsWithoutPuntuation(paragraph); // 'bob a ball the ball flew far after it was hit'
  const paragraphWithoutBanned = getParagraphWithouBanned(paragraphWithoutPuntuation, banned); // 'bob a ball the ball flew far after it was'

  const countWord = countEachWords(paragraphWithoutBanned); // { bob: 1, a: 1, ball: 2, the: 1, flew: 1, far: 1, after: 1, it: 1, was: 1 }
  const mostUsedWord = getMostUsedWord(countWord); 

  return mostUsedWord;
};

function getParagraphWithoutSpace(paragraphs) {
  const result = [];

  for (let i = 0; i < paragraphs.length; i++) {
    const eachWord = paragraphs[i];
    if (eachWord === ' ') continue;
    if (eachWord.length > 1) {
      const splittedWord = getParagraphsWithoutPuntuation(eachWord);
      result.push(splittedWord);
    }
    result.push(paragraphs);
  }
  return result;
}

function getMostUsedWord(words) {
  const num = Object.values(words);
  let max = num[0];

  for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i]; // 2
    }
  }

  for ( const [key, value] of Object.entries(words)) {
    if (value === max) {
      return key;
    }
  }
}

function countEachWords(paragraphs) {
  const words = {};

  for (let i = 0; i < paragraphs.length; i++) {
    const key = paragraphs[i];

    if (words[key] === undefined ) {
      words[key] = 1;
    } else {
      words[key] += 1;
    }
  }

  return words;
}

function getParagraphWithouBanned(paragraph, banned) {
  const result = [];

  for (let i = 0; i < paragraph.length; i++) {
    console.log(paragraph[i])
    if (banned.length === 1 && paragraph[i].includes(banned)) continue;
    if (banned.length > 1 && paragraph[i].includes(banned[i])) continue;
    result.push(paragraph[i]);
  }
  return result;
}

// 수정필요
function getParagraphsWithoutPuntuation(paragraph) {
  const lowerCase = paragraph.toLowerCase();
  const alphabetTest = /[a-z]/;
  
  const result = [];
  for (let i = 0; i < lowerCase.length; i++) {
    if (!alphabetTest.test(lowerCase[i])) continue;
    result.push(lowerCase[i]);
  }
  
  return result;  
  // let copyParagraph = lowerCase;
  // copyParagraph = lowerCase.replace('.', '');
  // copyParagraph = copyParagraph.replace(',', '');
  // copyParagraph = copyParagraph.replace('!', '');
  // copyParagraph = copyParagraph.replace(';', '');
  // copyParagraph = copyParagraph.replace('?', '');
  // copyParagraph = copyParagraph.replace('\'', '');
  // return copyParagraph;
}

console.log(mostCommonWord(paragraph1, banned1));
console.log(mostCommonWord(paragraph2, banned2));
console.log(mostCommonWord(paragraph3, banned3));
console.log(mostCommonWord(paragraph4, banned4));
