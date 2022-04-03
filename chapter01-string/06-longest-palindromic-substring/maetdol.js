/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let longestResult = '';

	for(let left=0; left < s.length; left++) {
		for(let right=s.length; right > left; right--) {
			const length = right - left;
			if(length < longestResult.length) break;

			const partialString = s.slice(left, right);
			const isPalindrome = checkPalindrome(partialString);
			if(!isPalindrome) continue;

			longestResult = partialString;
			break;
		}
	}

		return longestResult;
};

function checkPalindrome(string) {
	const lastIndex = string.length - 1;
	for(let left=0; left < string.length; left++) {
		const right = lastIndex - left;
		if(string[left] !== string[right]) return false;
	}
	return true;
}