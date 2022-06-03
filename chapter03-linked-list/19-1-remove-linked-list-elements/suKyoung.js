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
 const removeElements = function(head, val) {
  const newNode = new ListNode(0, head);
  const copyHead = newNode; // node도 reference
  
  let prev = newNode;    
  while (head !== null) {
       if (head.val === val) {
          prev.next = head.next;   
          head = prev.next;
          continue;
      }
      prev = head; 
      head = head.next;  
  }
  
  return copyHead.next;
};