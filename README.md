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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 188 "Best Time to Buy and Sell Stock IV":

## Example

Solution

```python
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        if n == 0 or k == 0:
            return 0
        curr = [[0] * 2 for _ in range(k + 1)]
        next = [[0] * 2 for _ in range(k + 1)]
        for i in range(n - 1, -1, -1):
            for j in range(1, k + 1):
                curr[j][1] = max(-prices[i] + next[j][0], next[j][1])
                curr[j][0] = max(prices[i] + next[j - 1][1], next[j][0])
            next = [row[:] for row in curr]
        return curr[k][1]
```

Solution with Stencil

```python
c S:
    d m(s, k: i, p: L[i]) -> i:
        n = l(p)
        i n == 0 o k == 0:
            r 0
        c = [[0] * 2 f _ i r(k + 1)]
        n = [[0] * 2 f _ i r(k + 1)]
        f i i r(n - 1, -1, -1):
            f j i r(1, k + 1):
                c[j][1] = m(-p[i] + n[j][0], n[j][1])
                c[j][0] = m(p[i] + n[j - 1][1], n[j][0])
            n = [r[:] f r i c]
        r c[k][1]
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