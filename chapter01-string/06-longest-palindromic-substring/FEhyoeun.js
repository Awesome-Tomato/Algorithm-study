/**
* @param {string} s
* @return {string}
    */
var longestPalindrome = function(s) {
    function expand(left,right){
        while(left >= 0 && right <= s.length && s[left] === s[right-1]){
            left--
            right++
        }
        return s.substring(left+1, right-1)
    }

    // s가 2미만이거나 그 자체로 회문인 문자열인 경우, 그 문자열을 그대로 반환
    if(s.length < 2 || s === s.split('').reverse().join('')) return s;

    let result = ''

    for(let i=0; i<s.length-1; i++){
        result = [result,expand(i, i+1),expand(i, i+2)].sort((a,b) => {
            return b.length - a.length;
        })[0]
    }

    return result;
};