class Solution {
  bool containsDuplicate(List<int> nums) {
    nums.sort();
    for (int i = 1; i < nums.length; i++) {
      if (nums[i] == nums[i - 1]) {
        return true;
      }
    }
    return false;
  }
}