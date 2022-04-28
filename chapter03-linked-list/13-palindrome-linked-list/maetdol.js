/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const length = getLengthOfLinkedList(head);
  const center = Math.floor(length / 2);
  const centerNode = getLinkedListNodeAt(head, center);

  const reversedHalfLinkedList = reverseAll(centerNode);
  
  return isContains(head, reversedHalfLinkedList);
};

// 둘 중 한쪽이 다른 한쪽의 링크드 리스트의 값들을 포함하고 있는지 확인
function isContains(a, b) {
  while (a && b) {
    if (a.val !== b.val) return false;
    a = a.next;
    b = b.next;
  }
  return true;
}

// head 부터 시작하는 링크드 리스트를 뒤집는다
function reverseAll(head) {
  let node = head;
  let next = head.next;
  node.next = null;

  // next 노드의 next 를 node 로 변경하는 작업
  while (next) {
    const nextOfNext = next.next;
    next.next = node;
    node = next;
    next = nextOfNext;
  }
  return node;
}

// 링크드 리스트에서 index 에 위치한 노드를 가져온다
function getLinkedListNodeAt(head, index) {
  let node = head;
  for (let current = 0; current < index; current++) {
    node = node.next;
  }

  return node;
}

// 링크드 리스트의 길이를 가져온다
function getLengthOfLinkedList(linkedList) {
  let length = 0;
  let node = linkedList;
  while (node) {
    length += 1;
    node = node.next;
  }

  return length;
}
