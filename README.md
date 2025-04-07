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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 42 "Trapping Rain Water":

## Example

Solution

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        h = height
        if not h:
            return 0

        l, r = 0, len(h) - 1
        leftMax, rightMax = h[l], h[r]
        res = 0
        while l < r:
            if leftMax < rightMax:
                l += 1
                leftMax = max(leftMax, h[l])
                res += leftMax - h[l]
            else:
                r -= 1
                rightMax = max(rightMax, h[r])
                res += rightMax - h[r]
        return res
```

Solution with Stencil

```python
c S:
    d t(s, h: L[i]) -> i:
        h = h
        i n h:
            r 0

        l, r = 0, l(h) - 1
        l, r = h[l], h[r]
        r = 0
        w l < r:
            i l < r:
                l += 1
                l = m(l, h[l])
                r += l - h[l]
            e:
                r -= 1
                r = m(r, h[r])
                r += r - h[r]
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