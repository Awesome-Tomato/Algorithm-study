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
var isPalindrome = function(head) {
    let length = 0
    let temp = []

    while(head) {
        temp.push(head.val)
        head = head.next
        length++
    }
    length -= 1

    let end = 0
    if(length % 2 !== 0) end = Math.floor(length / 2)
    else end = Math.floor(length / 2) - 1

    let front = []
    for(let i=0; i<=Math.floor(length / 2); i++) {
        front.push(temp[i])
    }

    let back = []
    for(let j=length; j>end; j--) {
        back.push(temp[j])
    }

    console.log(front, back)
    return JSON.stringify(front) == JSON.stringify(back) ? true : false

};