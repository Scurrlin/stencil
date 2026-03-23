class Solution {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        var sortedNums = nums.sorted()
        for i in 1..<sortedNums.count {
            if sortedNums[i] == sortedNums[i - 1] {
                return true
            }
        }
        return false
    }
}