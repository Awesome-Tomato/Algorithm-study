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
 const middleNode = function(head) {
  let copyHead = head;

  let length = 0;
  while (head !== null) {
      head = head.next;
      length = length + 1;
  }
  
  const center = Math.floor(length / 2); 
  length = 0;
  while (copyHead !== null) {        
      if (length === center) return copyHead;
      length = length + 1;
      copyHead = copyHead.next;
  }
};