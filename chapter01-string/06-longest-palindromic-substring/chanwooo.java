/*
5 0
4 0
4 1
3 0
3 1
3 2
2 0
2 1
2 2
2 3
1
*/

class Solution {
    public String longestPalindrome(String s) {
        var len = s.length();
        var ans = "";
        for(int i = 1; i<= len ;i++){//length of window
            for(int j = 0 ; i+j <= len ; j++){//offset of window
                // System.out.print(" "+i+" "+j+" ");
                // System.out.println(s.substring(j,i+j));
                var subs=s.substring(j,i+j);
                if(isPalindrome(subs)){
                    // System.out.println(subs);
                    ans = subs;
                    break;
                }
            }
        }
        return ans;
    }

    boolean isPalindrome(String s){
        var charArray = s.toCharArray();
        var index = 0;
        var len = charArray.length;
        while (index < len / 2) {
            if(charArray[index]!=charArray[len-index-1]) {
                return false;
            }
            index++;
        }
        return true;
    }
}

// class Solution {

//   public String longestPalindrome(String s) {
//         String ans=s.substring(0,1);

//         for(int i=0;i<s.length()-1;i++){
//             String tmp=getString(s,i,i);
//             if(tmp.length()>ans.length())
//                 ans=tmp;

//             tmp=getString(s,i,i+1);
//             if(tmp.length()>ans.length())
//                 ans=tmp;
//         }
//         return ans;
//     }

//     public String getString(String str, int start, int end){
//         while(start>=0 && end <str.length() && str.charAt(start)==str.charAt(end)){
//             start--;
//             end++;
//         }
//         return str.substring(start+1,end);
//     }
// }