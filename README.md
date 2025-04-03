```

███████ ████████ ███████ ███    ██  ██████ ██ ██      
██         ██    ██      ████   ██ ██      ██ ██      
███████    ██    █████   ██ ██  ██ ██      ██ ██      
     ██    ██    ██      ██  ██ ██ ██      ██ ██      
███████    ██    ███████ ██   ████  ██████ ██ ███████ 

```

[![npm](https://img.shields.io/npm/dt/%40scurrlin%2Fstencil?style=flat&color=blue)](https://www.npmjs.com/package/@scurrlin/stencil)

## Overview

Whether you are studying for technical interviews, or just starting your coding journey, pattern recognition and memorization are absolutely necessary. It doesn't take a valedictorian to figure that out, but how exactly are you supposed to do that? Between data structures, algorithms, and design patterns, the task of incrementally committing enough of that information to memory can feel impossible. You could spend hours studying fully implemented algorithms only to draw a blank when staring at an empty code editor.

Most people when they attempt to memorize something study the full text and then attempt to regurgitate it on a blank page. Shocking, I know... but what if there was a step in between? What if memorization and pattern recognition weren't all or nothing games? This is where Stencil comes in.

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 16 "3Sum Closest":

## Example

Solution

```python
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        best = float('inf')
        
        for i in range(len(nums) - 2):        
            val = nums[i]
            left = i + 1
            right = len(nums) - 1
            while left < right:
                currentGap = abs(target - (val + nums[left] + nums[right]))                
                if abs(best - target) > currentGap:
                    best = val + nums[left] + nums[right]
                if val + nums[left] + nums[right] < target:
                    left += 1
                elif val + nums[left] + nums[right] > target:
                    right -= 1
                else:
                    return target
        return best
```

Solution with Stencil

```python
c S:
    d t(s, n: L[i], t: i) -> i:
        n.s()
        b = f('i')
        
        f i i r(l(n) - 2):        
            v = n[i]
            l = i + 1
            r = l(n) - 1
            w l < r:
                c = a(t - (v + n[l] + n[r]))                
                i a(b - t) > c:
                    b = v + n[l] + n[r]
                i v + n[l] + n[r] < t:
                    l += 1
                e v + n[l] + n[r] > t:
                    r -= 1
                e:
                    r t
        r b
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