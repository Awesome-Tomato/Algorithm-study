/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let input=[];
let answer=true;
let isPalindrome = function(head) {
    const item = head.val;
    input.push(item);
    const isNext = head.next;
    if(isNext) {
        isPalindrome(isNext);
    } else {
        const reverseInput=[...input].reverse();
        for(let i=0; i<input.length; i++) {
            if(input[i] !== reverseInput[i]) {  
                input=[];
                return answer=false;
            } 
        }
        input=[];
        return answer=true;
    }
    return answer;
};
