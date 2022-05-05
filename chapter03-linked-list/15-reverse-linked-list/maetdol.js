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
    // 현재 노드의 다음을 이전노드로 변경한다
    head.next = prevNode;

    prevNode = head;
    head = next;
  }

  return prevNode;
};
