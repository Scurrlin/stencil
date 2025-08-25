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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 312 "Burst Balloons":

## Example

Solution

```python
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        b = [1] + nums + [1]
        n = len(b)
        dp = [[0] * n for _ in range(n)]

        for length in range(2, n):
            for left in range(0, n - length):
                right = left + length
                best = 0
                for k in range(left + 1, right):
                    gain = b[left] * b[k] * b[right]
                    total = gain + dp[left][k] + dp[k][right]
                    if total > best:
                        best = total
                dp[left][right] = best
        return dp[0][n - 1]
```

Solution with Stencil

```python
c S:
    d m(s, n: L[i]) -> i:
        b = [1] + n + [1]
        n = l(b)
        d = [[0] * n f _ i r(n)]

        f l i r(2, n):
            f l i r(0, n - l):
                r = l + l
                b = 0
                f k i r(l + 1, r):
                    g = b[l] * b[k] * b[r]
                    t = g + d[l][k] + d[k][r]
                    i t > b:
                        b = t
                d[l][r] = b
        r d[0][n - 1]
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