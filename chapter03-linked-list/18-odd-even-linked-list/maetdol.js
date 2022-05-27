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
var oddEvenList = function(head) {
    
  const evenHead = new ListNode();
  let evenTail = evenHead;
  
  const oddHead = new ListNode();
  let oddTail = oddHead;
  
  let node = head;
  
  while(node) {
    oddTail.next = node;
    node = node?.next;
    if(oddTail.next) {
      oddTail = oddTail.next;
    }
    
    if(!node) break;
    
    evenTail.next = node;
    node = node?.next; 
    if(evenTail.next) {
      evenTail = evenTail.next;
    }
  }
  
  evenTail.next = null;
  oddTail.next = evenHead.next;
  
  return oddHead.next;
};
