using System;

public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        Array.Sort(nums);
        int n = nums.Length;
        for (int i = 1; i < n; i++) {
            if (nums[i] == nums[i - 1]) {
                return true;
            }
        }
        return false;
    }
}