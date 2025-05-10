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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 153 "Find Minimum in Rotated Sorted Array":

## Example

Solution

```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        start, end = 0, len(nums) - 1 
        curr_min = float("inf")
        n = nums

        while start < end :
            m = start + (end - start)//2
            curr_min = min(curr_min, n[m])
            if n[m] > n[end]:
                start = m + 1
            else:
                end = m - 1
        return min(curr_min, n[start])
```

Solution with Stencil

```python
c S:
    d f(s, n: L[i]) -> i:
        s, e = 0, l(n) - 1 
        c_m = f("i")
        n = n

        w s < e :
            m = s + (e - s)//2
            c_m = m(c_m, n[m])
            i n[m] > n[e]:
                s = m + 1
            e:
                e = m - 1
        r m(c_m, n[s])
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