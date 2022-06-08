class Solution {
    public ListNode middleNode(ListNode head) {
        
        var cursor = head;
        var size = 0;
        while(cursor != null){
            cursor = cursor.next;
            size +=1;
        }
        
        for(var i=0; i<size/2; i++){
            head = head.next;
        }
        
        return head;
    }
}
