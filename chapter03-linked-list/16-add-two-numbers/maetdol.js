/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sumNode = new ListNode();
  const sumHead = sumNode;

  let 올림값 = 0;
  while (l1 || l2) {
    const sum = valueOf(l1) + valueOf(l2) + 올림값;
    올림값 = Math.floor(sum / 10);

    sumNode.next = new ListNode(sum % 10);
    sumNode = sumNode.next;

    l1 = next(l1);
    l2 = next(l2);
  }

  // 모든 노드를 다 돌고나서, 올림값이 있을 경우 추가해준다
  if (올림값) {
    sumNode.next = new ListNode(올림값);
  }

  return sumHead.next;
};

/**
 *
 * @param {ListNode} node
 * @returns {null | ListNode}
 * 다음 노드를 가져온다. null 일 경우 0을 반환한다
 */
function next(node) {
  if (!node) return null;
  return node.next;
}

/**
 *
 * @param {ListNode} node
 * @returns {number}
 * 노드의 값을 가져온다. null 일 경우 0을 반환한다
 */
function valueOf(node) {
  if (!node) return 0;
  return node.val;
}
