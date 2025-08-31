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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 321 "Create Maximum Number":

## Example

Solution

```python
class Solution:
    def maxNumber(self, nums1: List[int], nums2: List[int], k: int) -> List[int]:        
        def merge(n1, n2):
            res = []
            while (n1 or n2) :
                if n1 > n2:
                    res.append(n1[0])
                    n1 = n1[1:]
                else:
                    res.append(n2[0])
                    n2 = n2[1:]
            return res
        
        def findmax(nums, length):
            l = []
            maxpop = len(nums) - length
            for i in range(len(nums)):
                while maxpop > 0 and len(l) and nums[i] > l[-1]:
                    l.pop()
                    maxpop -= 1
                l.append(nums[i])
            return l[:length]
        
        n1, n2 = len(nums1), len(nums2)
        res = [0] * k
        for i in range(k + 1):
            j = k - i
            if i > n1 or j > n2: continue
            l1 = findmax(nums1, i)
            l2 = findmax(nums2, j)
            res = max(res, merge(l1, l2))
        return res
```

Solution with Stencil

```python
c S:
    d m(s, n: L[i], n: L[i], k: i) -> L[i]:        
        d m(n, n):
            r = []
            w (n o n) :
                i n > n:
                    r.a(n[0])
                    n = n[1:]
                e:
                    r.a(n[0])
                    n = n[1:]
            r r
        
        d f(n, l):
            l = []
            m = l(n) - l
            f i i r(l(n)):
                w m > 0 a l(l) a n[i] > l[-1]:
                    l.p()
                    m -= 1
                l.a(n[i])
            r l[:l]
        
        n, n = l(n), l(n)
        r = [0] * k
        f i i r(k + 1):
            j = k - i
            i i > n o j > n: c
            l = f(n, i)
            l = f(n, j)
            r = m(r, m(l, l))
        r r
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