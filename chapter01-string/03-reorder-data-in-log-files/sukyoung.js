const input1 = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"];
const input2 = ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"];

const reorderLogFiles = function(logs) {
  const { alphabetLogs, digitLogs } = divideLogs(logs);
  const alphabet = reorderAlphabetLog(alphabetLogs);

  return [
    ...convertArrayToStr(alphabet), 
    ...convertArrayToStr(digitLogs)
  ];
};

function divideLogs(logs){
  const alphabetTest = /[a-z]/;
  const alphabetLogs = []; 
  const digitLogs = [];

  for (let i = 0; i < logs.length; i++) {
    const eachLog = logs[i].split(' ');
    if (alphabetTest.test(eachLog[1])) {
      alphabetLogs.push(eachLog);
    } else {
      digitLogs.push(eachLog);
    }
  }

  return {alphabetLogs, digitLogs};
};

function convertArrayToStr(logs) {
  const result = [];
  for (let i = 0; i < logs.length; i++) {
    result.push(logs[i].join(' '));
  }
  return result;
};

function reorderAlphabetLog(logs) { 
  return logs.sort(sortLogs);
};

function sortLogs(a, b) {
  const [aIdentifier, ...aContents] = a; 
  const [bIdentifier, ...bContents] = b;

  if (aContents < bContents) return -1;
  if (aContents > bContents) return 1;
  
  if (aContents.length < bContents.length) return -1;
  if (aContents.length > bContents.length) return 1;

  if (aIdentifier < bIdentifier) return -1;
  if (aIdentifier > bIdentifier) return 1;
  return 0;
};

console.log(reorderLogFiles(input1));
console.log(reorderLogFiles(input2));

/* 
* logs : [ 'let1', 'art', 'can' ], [ 'let2', 'own', 'kit', 'dig' ], [ 'let3', 'art', 'zero' ]
* 1. 입력받은 logs 각각의 배열의 첫번째 단어를 비교하여 알파벳순서로 바꾼다. // art, own, art -> art, art, own
* 2. 만일 단어가 같다면, 배열의 길이가 더 큰 녀석이 뒤로 간다. // 가나다, 가나 -> 가나, 가나다
* 3. 만일 단어가 같고 배열의 길이가 같다면, identifier를 비교하여 순서를 정한다.
*/