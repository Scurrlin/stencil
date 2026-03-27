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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 373 "Find K Pairs with Smallest Sums":

## Example

Solution

```python
import heapq

class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
        if not nums1 or not nums2:
            return []
        res, heap = [], []
        heap = []

        for i in range(min(k, len(nums1))):
            heapq.heappush(heap, (nums1[i] + nums2[0], i, 0))

        while heap and len(res) < k:
            total, i, j = heapq.heappop(heap)
            res.append([nums1[i], nums2[j]])

            if j + 1 < len(nums2):
                heapq.heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))

        return res
```

Solution with Stencil

```python
i h

c S:
    d k(s, n, n, k):
        i n n o n n:
            r []
        r, h = [], []
        h = []

        f i i r(m(k, l(n))):
            h.h(h, (n[i] + n[0], i, 0))

        w h a l(r) < k:
            t, i, j = h.h(h)
            r.a([n[i], n[j]])

            i j + 1 < l(n):
                h.h(h, (n[i] + n[j + 1], i, j + 1))

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