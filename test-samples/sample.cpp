#include <vector>
#include <algorithm>

class Solution {
public:
    bool containsDuplicate(std::vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        int n = nums.size();
        for(int i = 1; i < n; ++i){
            if(nums[i] == nums[i - 1]){
                return true;
            }
        }
        return false;
    }
};