/**
 * Definition for singly-linked list.
 * 프로토타입
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * JS DOC
 *  {} : type, param's name : head
 * @param {ListNode} head
 * @return {boolean}
 */
 const isPalindrome = function(head) {
  const nodearray = getArrayFromLinkedList(head); // [1]
  const stack = getStackCenterToEnd(nodearray);
  return isSame(nodearray, stack);
};

const getArrayFromLinkedList = function(head) {
  const array = [];  
  let count = 1;
  array.push(head.val);

  while (true) {
    const node = eval('head' + '.next'.repeat(count));
    if (node === null) break;
    array.push(node.val); 
    count++;
  }
  return array;
};

const getStackCenterToEnd = function(array) {
  const stack = [];
  const center = Math.floor(array.length / 2);
  const end = array.length - 1;
  if (center === end) {
    stack.push(array[center]);
    return stack;
  };
  for (let i = end; i >= center; i--) {
    stack.push(array[i]);
  }
  return stack;
}

const isSame = function (array1, array2) {
    for (let i = 0; i < array1.length/2; i++) {
    if (array1[i] !== array2[i]) return false;
    continue;
  }
  return true;
};