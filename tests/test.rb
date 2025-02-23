def contains_duplicate(nums)
    nums.sort!
    (1...nums.length).each do |i|
      return true if nums[i] == nums[i - 1]
    end
    false
  end