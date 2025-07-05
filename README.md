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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 218 "The Skyline Problem":

## Example

Solution

```python
from sortedcontainers import SortedList

class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        if len(buildings) == 0: 
            return []
        
        buildings.sort(key = lambda v: v[2])
        pos, height = [0], [0]
        for left, right, h in buildings: 
            i = bisect_left(pos, left)
            j = bisect_right(pos, right)
            height[i:j] = [h, height[j - 1]]
            pos[i:j] = [left, right]
        print(height, pos)
        res = []
        prev = 0
        for v, h in zip(pos, height): 
            if h != prev:
                res.append([v, h]) 
                prev = h
                
        return res
```

Solution with Stencil

```python
f s i S

c S:
    d g(s, b: L[L[i]]) -> L[L[i]]:
        i l(b) == 0: 
            r []
        
        b.s(k = l v: v[2])
        p, h = [0], [0]
        f l, r, h i b: 
            i = b_l(p, l)
            j = b_r(p, r)
            h[i:j] = [h, h[j - 1]]
            p[i:j] = [l, r]
        p(h, p)
        r = []
        p = 0
        f v, h i z(p, h): 
            i h != p:
                r.a([v, h]) 
                p = h
                
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