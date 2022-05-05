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
var reverseList = function (head) {
  let prevNode = null;
  while (head) {
    const next = head.next;
    head.next = prevNode;

    prevNode = head;
    head = next;
  }

  return prevNode;
};
