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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 41 "First Missing Positive":

## Example

Solution

```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        A = nums
        
        for i in range(len(A)):
            if A[i] < 0:
                A[i] = 0
        for i in range(len(A)):
            val = abs(A[i])
            if 1 <= val <= len(A):
                if A[val - 1] > 0:
                    A[val - 1] *= -1
                elif A[val - 1] == 0:
                    A[val - 1] = -1 * (len(A) + 1)
        for i in range( 1, len(A)+ 1):
            if A[i -1] >= 0:
                return i
        return len(A) + 1
        
    def firstMissingPositive_2(self, nums: List[int]) -> int:
        new = set(nums)
        i = 1
        while i in new:
            i += 1
        return i
```

Solution with Stencil

```python
c S:
    d f(s, n: L[i]) -> i:
        A = n
        
        f i i r(l(A)):
            i A[i] < 0:
                A[i] = 0
        f i i r(l(A)):
            v = a(A[i])
            i 1 <= v <= l(A):
                i A[v - 1] > 0:
                    A[v - 1] *= -1
                e A[v - 1] == 0:
                    A[v - 1] = -1 * (l(A) + 1)
        f i i r( 1, l(A)+ 1):
            i A[i -1] >= 0:
                r i
        r l(A) + 1
        
    d f_2(s, n: L[i]) -> i:
        n = s(n)
        i = 1
        w i i n:
            i += 1
        r i
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