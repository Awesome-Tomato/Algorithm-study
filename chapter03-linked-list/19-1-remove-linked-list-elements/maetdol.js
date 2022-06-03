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
  let prev = new ListNode(0, head);
  const result = prev;
  let node = head;
  while(node) {
    if(node.val === val) {
      prev.next = node.next;
      node = node.next;
      continue;
    }
    prev = node;
    node = node.next;
  }
  
  return result.next;
};
