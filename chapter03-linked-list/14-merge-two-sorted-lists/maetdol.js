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
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let node1 = list1;
  let node2 = list2;
  let previouseNode = null;
  let head = null;
  while (node1 && node2) {
    if (node1.val > node2.val) {
      if (previouseNode) {
        previouseNode.next = node2;
      }
      const node2Next = node2.next;
      node2.next = node1;
      previouseNode = node2;
      node2 = node2Next;
    } else {
      previouseNode = node1;
      node1 = node1.next;
    }

    if (!head) {
      head = previouseNode;
    }
  }
  if (node2) {
    previouseNode.next = node2;
  }
  return head;
};
