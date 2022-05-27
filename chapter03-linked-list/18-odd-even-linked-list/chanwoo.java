class Solution {
    public ListNode oddEvenList(ListNode head) {
        if(head == null){
            return head;
        }
        
        var first = head;
        var second = head.next;
        var second_head = head.next;
    
        while (second != null && second.next != null) { 
            first.next = first.next.next;
            first = first.next;
            
            second.next = second.next.next;
            second = second.next;
        }
        
        first.next = second_head;
        
        return head;
    }
}
