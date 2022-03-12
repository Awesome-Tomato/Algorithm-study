public class Leetcode125 {
    public static void main(String[] args) {
        var sol = new Solution();

        System.out.println(sol.isPalindrome("A man, a plan, a canal: Panama"));

    }

    static class Solution {
        public boolean isPalindrome(String s) {
//             611ms
//            var preProcessedString = s.toLowerCase().replace(" ", "");
//
//            for(var c : preProcessedString.toCharArray()){
//                if(!Character.isLetterOrDigit(c)) {
//                    preProcessedString = preProcessedString.replace(Character.toString(c), "");
//                }
//            }

//            14ms
            var preProcessedString = s.toLowerCase()
                    .replaceAll("[^a-z0-9]", "");
            var preProcessedCharArray = preProcessedString.toCharArray();
            for(var index=0; index<preProcessedCharArray.length/2; index++) {
                if (preProcessedCharArray[index] != preProcessedCharArray[preProcessedCharArray.length - index - 1]) {
                    return false;
                }
                index++;
            }
            return true;
        }
    }
}
