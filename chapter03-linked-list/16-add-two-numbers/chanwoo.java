class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        var answer = new ListNode();
        var carry = false;
        var curr = answer;
        
        while (l1!=null || l2!=null){

            if(l1==null) {
                l1 = new ListNode();
            }
            if(l2==null) {
                l2 = new ListNode();
            }
            
            var sumVal = l1.val + l2.val;

            if(carry){
                sumVal+=1;
                carry=false;
            }
            
            if(sumVal>=10){
                sumVal %= 10;
                carry=true;    
            }
            
            curr.val = sumVal;
            // System.out.println(sumVal+" "+carry);

            l1=l1.next;    
            l2=l2.next;
            
            if(l1!=null || l2 != null){
                curr.next = new ListNode();
                curr = curr.next;                
            }
        }
        if(carry){
            curr.next = new ListNode(1);
        }

        return answer;
    }
}
