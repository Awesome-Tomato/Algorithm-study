/**
 * @param {string[]} logs
 * @return {string[]}
 */

const input1 = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"];
const input2 = ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"];
const input3 = ["j mo", "5 m w"]

let reorderLogFiles = function(logs) {
	const isLetterLog = log => /[a-z]/.test(parseLog(log)[1]); 
	const isDigitLog = log => !isLetterLog(log);
	
	const letterLogs = logs.filter(isLetterLog);
	const sortedLetterLog = letterLogs.sort(compareLog); 
	const digitLogs = logs.filter(isDigitLog); 

	return sortedLetterLog.concat(digitLogs);
};

function parseLog(log) {
	return log.split(' ');
}

// 1이상을 반환할 경우: a가 b 뒤로 간다(오른쪽)
// -1 이하를 반환할 경우: a가 b 앞으로 간다(왼쪽)
// 0 을 반환할 경우: 차이 없음
function compareLog(a, b) {
	const A_IS_LEFT = -1;
	const A_NO_MOVE = 0;
  const A_IS_RIGHT = 1;

	const [a_identifier, ...a_contents] = parseLog(a);
	const [b_identifier, ...b_contents] = parseLog(b);

	for (let i=0; i < a_contents.length; i++) {
		const aLog = a_contents[i];
		const bLog = b_contents[i];

		if(aLog > bLog) return A_IS_RIGHT;
		if(aLog < bLog) return A_IS_LEFT;
	}

	if(a_contents.length > b_contents.length) return A_IS_RIGHT;
	if(a_contents.length < b_contents.length) return A_IS_LEFT;

	if(a_identifier > b_identifier) return A_IS_RIGHT;
	if(a_identifier < b_identifier) return A_IS_LEFT;
	return A_NO_MOVE;
}

console.log(reorderLogFiles(input1));
console.log(reorderLogFiles(input2));
console.log(reorderLogFiles(input3));