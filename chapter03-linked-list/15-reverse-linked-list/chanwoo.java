/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
// class Solution {
//     public ListNode reverseList(ListNode head) {
//         var answer = new ListNode();
//         var tempStack = new ArrayList<Integer>();
        
//         if(head==null) {
//             return null;
//         }
        
//         while(head!=null) {
//             tempStack.add(head.val);
//             head=head.next;
//         }
        
//         Collections.reverse(tempStack);
        
        
//         var curr = answer;
//         for(var i=0; i<tempStack.size(); i++) {
//             curr.val = tempStack.get(i);
//             if(i!=tempStack.size()-1){
//                 curr.next = new ListNode();
//             }
//             curr = curr.next;
//         }
//         return answer;
//     }
// }

class Solution {

// public ListNode reverseList(ListNode head) {
//     ListNode curr = null;
//     ListNode temp = head;
//     ListNode prev = null;
    
//     while(temp != null){
//         prev = curr;
//         curr = temp;
//         temp = curr.next;
//         curr.next = prev;
//     }
//     return curr; 
// }
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    while(head != null){
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

}






