/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let tempListNode = new ListNode(0)
  tempListNode.next = head // tempListNode [0, head]의 listnode가 됨.
  let cursor = tempListNode // [0, head] 형태의 tempListNode를 listnode 형태의 cursor에 할당하는 건 head가 [], val이 1 이런 형태 때문.

  while(cursor.next !== null) { // (7) cursor는 마지막으로 [5]이므로 head.next는 null. while문 종료.
    if(cursor.next.val === val) cursor.next = cursor.next.next // (2)6 === 6니까 [2,3,4,5,6] // (6)6 === 6니까 [5]
    else cursor = cursor.next // (1)2 !== 6니까 [2,6,3,4,5,6] // (3)3 !== 6니까 [3, 4, 5, 6] // (4)4 !== 6니까 [4, 5, 6] // (5)5 !== 6니까 [5, 6]
  }

  return tempListNode.next
  // cursor는의 포인터는 끝(5)까지 가버렸으니, return은 tempListNode를. tempListNode.next를 하는 이유는 tempListNode [0, head]형태라서.
};