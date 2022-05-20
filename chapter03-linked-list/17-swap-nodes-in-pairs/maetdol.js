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
var swapPairs = function(head) {
  if(!head) return head;
  
  let node = head;
  let nextNode = head.next;
  let previousNode = new ListNode(0, node);
  
  head = head.next || head;
  
  while(node && nextNode) {
    node.next = nextNode.next;
    nextNode.next = node;
  
    previousNode.next = nextNode;
    previousNode = node;
    
    node = node?.next;
    nextNode = node?.next;
  }
    
  return head;
};
