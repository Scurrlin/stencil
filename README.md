```
     _______.___________. _______ .__   __.   ______  __   __      
    /       |           ||   ____||  \ |  |  /      ||  | |  |     
   |   (----`---|  |----`|  |__   |   \|  | |  ,----'|  | |  |     
    \   \       |  |     |   __|  |  . `  | |  |     |  | |  |     
.----)   |      |  |     |  |____ |  |\   | |  `----.|  | |  `----.
|_______/       |__|     |_______||__| \__|  \______||__| |_______|
                                                                   
```

Whether you are studying for technical interviews, or just starting your coding journey, pattern recognition and memorization are absolutely necessary. It doesn't take a valedictorian to figure that out, but how exactly are you supposed to do that? Between data structures, algorithms, and design patterns, the task of incrementally committing a sufficient amount of that information to memory can feel impossible. You could spend hours studying fully implemented algorithms only to draw a blank when staring at an empty code editor.

Most people when they attempt to memorize something study the full text and then attempt to regurgitate it on a blank page. Shocking, I know... but what if there was a step in between? What if memorization and pattern recognition weren't all or nothing games? This is where Stencil comes in.

Stencil is a memorization tool strips code files down to their first letters while preserving spacing, capitlization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized to fully memorized. Below is an example of Stencil in action using LeetCode problem 217 "Contains Duplicate":

Solution

```python

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        n = len(nums)
        for i in range(1, n):
            if nums[i] == nums[i - 1]:
                return True
        return False
```

Solution with Stencil

```python

c S:
    d c(s, n: L[i]) -> b:
        n.s()
        n = l(n)
        f i i r(1, n):
            i n[i] == n[i - 1]:
                r T
        r F
```
