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


var mergeTwoLists = function(list1, list2) {
    let mergedArr = []

    const transLinkedToArr = (linkedList) => { // Linked List를 Array로 바꾸는 함수
        let arr = []

        if(linkedList === null) return arr
        else {
            while(linkedList.next !== null) {
                arr.push(linkedList.val)
                linkedList = linkedList.next
            }

            arr.push(linkedList.val)

            return arr
        }
    }

    const resultByList1 = transLinkedToArr(list1) // list1을 array로 바꿈
    const resultByList2 = transLinkedToArr(list2) // list2를 array로 바꿈

    mergedArr = resultByList1.concat(resultByList2).sort((a, b) => a - b) // array로 바꾼 두 list를 합치고 오름차순 정렬

    const transArrToLinked = (array) => { // Array를 Linked list로 바꾸는 함수
        if(mergedArr.length === 0) return list1
        else {
            let list = new ListNode(mergedArr[0])
            let selectedNode = list

            for(let i=1; i<array.length; i++) {
                selectedNode.next = new ListNode(mergedArr[i])
                selectedNode = selectedNode.next
                // console.log(selectedNode, list)
            }

            return list
        }

    }

    const result = transArrToLinked(mergedArr)
    return result

};