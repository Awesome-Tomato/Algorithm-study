import java.util.*;
class Solution {
    public int[] twoSum(int[] nums, int target) {
        //System.out.println(Arrays.toString(nums));
        var len=nums.length;
        
        for(var i=0;i<len-1; i++){
            for(var j=i+1; j<len; j++){
                //System.out.println(i+" "+j);
                if(nums[i]+nums[j]==target){
                    return new int[]{i,j};
                }
            }
        }
        
        
        return null;
        
    }
}
