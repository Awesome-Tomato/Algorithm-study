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
  let node1 = getBiggerNode(list1, list2);
  let node2 = getSmallerNode(list1, list2);
  const head = new ListNode(null, node2);

  while (node1 && node2) {
    node2 = linkToLargerNode({
      fixedLargerNode: node1,
      head: node2,
    });
    if (!node2) break;

    node1 = linkToLargerNode({
      fixedLargerNode: node2,
      head: node1,
    });
    if (!node1) break;
  }

  return head.next;
};

function getBiggerNode(node1, node2) {
  // getSmallerNode 에서 null이 아닌값을 우선적으로 찾으므로,
  // null인 노드를 가져온다
  if (!node1) return node1;
  if (!node2) return node2;
  return node1.val > node2.val ? node1 : node2;
}

function getSmallerNode(node1, node2) {
  // head 의 next 가 될 노드를 얻어오기 때문에,
  // null이 아닐것으로 추측되는 노드를 우선적으로 가져온다
  if (!node1) return node2;
  if (!node2) return node1;
  return node1.val > node2.val ? node2 : node1;
}

// 처음으로 value 보다 큰 값을 가진 노드를 찾아 반환한다
// 또한 직전 노드(value보다 작은)도 반환한다
function findNodeBiggerThen(value, head) {
  let prevNode = head;
  let node = head;
  while (node && value >= node.val) {
    prevNode = node;
    node = node.next;
  }
  return [prevNode, node];
}

// fixedLargerNode 의 val보다 큰 노드의 직전 노드를 찾아
// 직전 노드의 다음을 fixedLargerNode 로 설정한다
function linkToLargerNode({ fixedLargerNode, head }) {
  const [prevNode, biggerNode] = findNodeBiggerThen(fixedLargerNode.val, head);
  prevNode.next = fixedLargerNode;
  return biggerNode;
}
