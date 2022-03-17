/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const alphanumeric = /[A-Za-z0-9]/;
    const filterAlphanumeric = [...s].filter(word=> alphanumeric.test(word));
    const reverseFilteralphanumeric = filterAlphanumeric.reverse();
    if(filterAlphanumeric.join("") === reverseFilteralphanumeric.join("")) {
        return true;
    } else {
        return false;
    }
};
