/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // linked list를 다 돌고 length를 구하고 -> ok
    // linked list를 처음부터 돌면서 length의 절반에 해당하는 index의 value를 return -> ok

    let length = 0
    let cursor = new ListNode()
    cursor = head

    while(cursor !== null) {
        cursor = cursor.next // 여기서 cursor랑 cursor.next의 type은 linked list임. cursor.val은 number고!
        length++
    }

    let halfLength = Math.floor(length / 2)
    for(let i=0; i<halfLength; i++) {
        head = head.next
    }

    return head
};