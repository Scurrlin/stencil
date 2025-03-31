```

███████ ████████ ███████ ███    ██  ██████ ██ ██      
██         ██    ██      ████   ██ ██      ██ ██      
███████    ██    █████   ██ ██  ██ ██      ██ ██      
     ██    ██    ██      ██  ██ ██ ██      ██ ██      
███████    ██    ███████ ██   ████  ██████ ██ ███████ 

```

## Overview

Whether you are studying for technical interviews, or just starting your coding journey, pattern recognition and memorization are absolutely necessary. It doesn't take a valedictorian to figure that out, but how exactly are you supposed to do that? Between data structures, algorithms, and design patterns, the task of incrementally committing enough of that information to memory can feel impossible. You could spend hours studying fully implemented algorithms only to draw a blank when staring at an empty code editor.

Most people when they attempt to memorize something study the full text and then attempt to regurgitate it on a blank page. Shocking, I know... but what if there was a step in between? What if memorization and pattern recognition weren't all or nothing games? This is where Stencil comes in.

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 31 "Next Permutation":

## Example

Solution

```python
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        i = len(nums) - 1
        
        while i > 0 and nums[i-1] >= nums[i]:
            i -= 1
        if i == 0:
            nums.reverse()
            return
        j = len(nums) - 1
        while j >= i and nums[j] <= nums[i-1]:
            j -= 1
        nums[i-1], nums[j] = nums[j], nums[i-1]
        nums[i:] = reversed(nums[i:])
```

Solution with Stencil

```python
c S:
    d n(s, n: L[i]) -> N:
        i = l(n) - 1
        
        w i > 0 a n[i-1] >= n[i]:
            i -= 1
        i i == 0:
            n.r()
            r
        j = l(n) - 1
        w j >= i a n[j] <= n[i-1]:
            j -= 1
        n[i-1], n[j] = n[j], n[i-1]
        n[i:] = r(n[i:])
```

## Local Installation

To install **Stencil** locally, run the following command in the terminal of your directory:

```bash
npm install @scurrlin/stencil
```

Once installed, you can run it with the following command:

```bash
npx stencil path/to/your/file.py --start <start_line> --end <end_line>
```

## Global Installation

If you prefer to install **Stencil** globally, run the following command in your terminal:

```bash
npm install -g @scurrlin/stencil
```

Once installed, you can run it with the following command:

```bash
stencil path/to/your/file.py --start <start_line> --end <end_line>
```