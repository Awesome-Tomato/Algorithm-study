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
var addTwoNumbers = function(l1, l2) {

    // 앞자리에서부터 더해나간다
    // 만약에 앞자리에서 더한 값이 10을 넘어가면 해당 자리의 수는 0으로 바꾸고, 그 뒤에 있는 수에 +1을 한다
    // (앞자리+1)도 더해나간다. 만약 이전 값에서 +1을 받은 게 있다면 그 값도 더한다
    // (앞자리+2)도 더해나간다. ...
    // 가장 긴 노드의 head의 값이 null이라면(linked list가 끝났다면) 종료 <- while(l1 || l2)

    let newList = new ListNode()
    const head = newList

    const getNodeValue = (node) => {
        if(!node) return 0
        return node.val
    }

    const getNextValue = (node) => {
        if(!node) return null
        return node.next
    }

    let ceilValue = 0
    while(l1 || l2) {
        let sum = getNodeValue(l1) + getNodeValue(l2) + ceilValue
        ceilValue = Math.floor(sum / 10)
        newList.next = new ListNode(sum % 10)
        newList = newList.next

        l1 = getNextValue(l1)
        l2 = getNextValue(l2)
    }

    // 이 부분이 없으면
    // l1 = [9,9,9,9,9,9,9]
    // l2 = [9,9,9,9]
    // 일 때, [8,9,9,9,0,0,0,1]가 나와야 하는데 [8,9,9,9,0,0,0]가 나옴

    // while(l1 || l2)가 끝나고 === 모든 노드를 다 돌고 나서
    // if(ceilValue) === 올림값이 있다면
    // newList.next = new ListNode(ceilValue) === 가장 마지막에 올림값을 추가해라
    if(ceilValue) newList.next = new ListNode(ceilValue)

    return head.next
};