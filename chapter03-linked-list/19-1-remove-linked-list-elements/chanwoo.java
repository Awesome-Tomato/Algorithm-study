class Solution {
    public ListNode removeElements(ListNode head, int val) {
        var prev = new ListNode(0, head);
        var cur = head;
        var result = prev;
        
        while(cur != null) {
            if(cur.val == val) {    
                prev.next = cur.next;
                cur = cur.next;
            } else {            
                prev = cur;
                cur = cur.next;
            }
        }
        
        
        return result.next;
    }
}
