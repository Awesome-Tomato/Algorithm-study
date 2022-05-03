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
var reverseList = function(head) {
    // linked list를 array로 만든다.
    // array의 내장 메소드를 이용해서 역순으로 뒤집는다.
    // 뒤집은 array를 다시 linked list로 바꿔서 return한다.

    const linkedListToArray = (linkedList) => {
        let arr = []

        if(linkedList) {
            while(head.next !== null) {
                arr.push(head.val)
                head = head.next
            }
            arr.push(head.val)

            return arr
        } else {
            return arr
        }

    }

    const reverseArray = (array) => {
        const reverseArr = array.reverse()
        return reverseArr
    }

    const arrayToLinkedList = (array) => {
        if(array.length === 0) return head
        else {
            let node = new ListNode(array[0])
            let list = node

            for(let i=1; i<array.length; i++) {
                node.next = new ListNode(array[i])
                node = node.next
            }

            return list
        }
    }


    // 여기부터 위에서 구현한 함수를 통해 값을 구함
    const array = linkedListToArray(head)
    const reversedArray = reverseArray(array)
    const result = arrayToLinkedList(reversedArray)

    return result

};