/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  for(let node = list1; node !== null; node = node.next) {
      let tempList1 = list1.next; // [2, 4]
      let tempList2 = list2.next; // [3, 4]
      
      if (list1.val <= list2.val) {
          tempList1 = list1.next;
          list1.next = list2;
      } else {
          tempList2 = list2.next;
          list2.next = list1;
      }            
      
  }


};