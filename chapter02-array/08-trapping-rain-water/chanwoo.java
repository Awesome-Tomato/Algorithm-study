// import java.util.*;
// class Solution {
//     public int trap(int[] height) {
//         var len = height.length;
//         var max = Arrays.stream(height).max().getAsInt();
//         //System.out.println(max);
//         var water = new int[max][len];
//         var answer=0;
        
//         for(var r=0; r<max;r++){
//             for(var c=0; c<len; c++){
//                 water[r][c] = height[c]-r > 0 ? 1 : 0 ;
//             }
//             for(var c=0; c<len-1; c++){
//                 if(water[r][c]==0 && water[r][c+1]==0){
//                     water[r][c]=1;
//                     continue;
//                 }
//                 if(water[r][c]==0 && water[r][c+1]==1){
//                     water[r][c]=1;
//                     break;
//                 }
//                 if(water[r][c]==1 && water[r][c+1]==1){
//                     break;
//                 }
//                 if(water[r][c]==1 && water[r][c+1]==0){
//                     break;
//                 }
                
//             }
//             for(var c=len-1; c>0; c--){
//                 if(water[r][c]==0 && water[r][c-1]==0){
//                     water[r][c]=1;
//                     continue;
//                 }
//                 if(water[r][c]==0 && water[r][c-1]==1){
//                     water[r][c]=1;
//                     break;
//                 }
//                 if(water[r][c]==1 && water[r][c-1]==1){
//                     break;
//                 }
//                 if(water[r][c]==1 && water[r][c-1]==0){
//                     break;
//                 }
//             }
            
//             for(var c=0; c<len-1; c++){
//                 if(water[r][c]==0){
//                     answer+=1;
//                 }
//             }
            
            
//         }
        
        
//         //System.out.println(Arrays.deepToString(water));

        
//         return answer;
//     }
// }

class Solution {
    public int trap(int[] arr) {
        int n = arr.length;
        int low = 0;
        int high = n-1;
        int leftMax = 0, rightMax = 0;
        int ans = 0;
        
        while(low <= high){
            if(arr[low] < arr[high]){
                leftMax = Math.max(leftMax, arr[low]);
                ans += leftMax - arr[low];
                low++;
            }else {
                rightMax =  Math.max(rightMax, arr[high]);
                ans += rightMax - arr[high];
                high--;
            }
        }
        return ans;
    }
}
