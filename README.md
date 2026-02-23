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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 363 "Max Sum of Rectangle No Larger Than K":

## Example

Solution

```python
from bisect import bisect_left, insort

class Solution:
    def maxSumSubmatrix(self, matrix, k):
        ans = float("-inf")
        m, n = len(matrix), len(matrix[0])
        for left in range(n):
            rowSums = [0] * m
            
            for right in range(left, n):
                currSum, prefixSums = 0, [0]
                
                for r in range(m):
                    rowSums[r] += matrix[r][right]
                    currSum += rowSums[r]
                    
                    idx = bisect_left(prefixSums, currSum - k)
                    
                    if idx < len(prefixSums):
                        ans = max(ans, currSum - prefixSums[idx])
                    insort(prefixSums, currSum)
        
        return ans
```

Solution with Stencil

```python
f b i b_l, i

c S:
    d m(s, m, k):
        a = f("-i")
        m, n = l(m), l(m[0])
        f l i r(n):
            r = [0] * m
            
            f r i r(l, n):
                c, p = 0, [0]
                
                f r i r(m):
                    r[r] += m[r][r]
                    c += r[r]
                    
                    i = b_l(p, c - k)
                    
                    i i < l(p):
                        a = m(a, c - p[i])
                    i(p, c)
        
        r a
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