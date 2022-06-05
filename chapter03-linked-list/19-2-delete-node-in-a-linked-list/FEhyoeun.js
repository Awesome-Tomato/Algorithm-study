/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val // [4, 1, 1, 9] // node.val은 number, node.next.val도 number
    node.next = node.next.next // node.next는 linked list, node.next.next도 linked list잖어
};