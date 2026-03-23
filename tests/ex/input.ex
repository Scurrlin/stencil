defmodule Solution do
  @spec contains_duplicate(nums :: [integer]) :: boolean
  def contains_duplicate(nums) do
    sorted_nums = Enum.sort(nums)
    check_adjacent(sorted_nums)
  end

  defp check_adjacent([x, y | rest]) when x == y, do: true
  defp check_adjacent([_ | rest]), do: check_adjacent(rest)
  defp check_adjacent([]), do: false
end