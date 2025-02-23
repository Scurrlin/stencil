object Solution {
    def containsDuplicate(nums: Array[Int]): Boolean = {
        val sortedNums = nums.sorted
        sortedNums.indices.drop(1).exists(i => sortedNums(i) == sortedNums(i - 1))
    }
}