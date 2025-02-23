class Solution {
    function containsDuplicate($nums) {
        sort($nums);
        $n = count($nums);
        for ($i = 1; $i < $n; $i++) {
            if ($nums[$i] == $nums[$i - 1]) {
                return true;
            }
        }
        return false;
    }
}