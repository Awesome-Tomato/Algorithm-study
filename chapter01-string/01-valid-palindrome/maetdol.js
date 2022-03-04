/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const filteredString = alphanumericOnly(s);
    
    const lastCharacterIndex = filteredString.length - 1;
    const center = Math.floor(filteredString.length / 2);
    for(let i=0; i < center; i++) {
        const fromLastIndex = lastCharacterIndex - i;
        if(filteredString[i] !== filteredString[fromLastIndex]) {
            return false;
        }
    }
    return true;
};

function alphanumericOnly(str) {
    return str
        .replace(/[^a-zA-Z0-9]+/g, '')
        .toLowerCase();
}
