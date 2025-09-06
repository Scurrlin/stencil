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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 329 "Longest Increasing Path in a Matrix":

## Example

Solution

```python
class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        if not matrix or not matrix[0]:
            return 0
        
        rows, cols = len(matrix), len(matrix[0])
        dp =[[0] * cols for i in range(rows)]
        def dfs(i, j):
            if not dp[i][j]:
                val = matrix[i][j]
                dp[i][j] = 1 + max(
                    dfs(i - 1, j) if i and val > matrix[i - 1][j] else 0,
                    dfs(i + 1, j) if i < rows - 1 and val > matrix[i + 1][j] else 0,
                    dfs(i, j - 1) if j and val > matrix[i][j - 1] else 0,
                    dfs(i, j + 1) if j < cols - 1 and val > matrix[i][j + 1] else 0)
            return dp[i][j]
        
        for r in range(rows):
            for c in range(cols):
                dfs(r, c)
        return max(max(x) for x in dp)
```

Solution with Stencil

```python
c S:
    d l(s, m: L[L[i]]) -> i:
        i n m o n m[0]:
            r 0
        
        r, c = l(m), l(m[0])
        d =[[0] * c f i i r(r)]
        d d(i, j):
            i n d[i][j]:
                v = m[i][j]
                d[i][j] = 1 + m(
                    d(i - 1, j) i i a v > m[i - 1][j] e 0,
                    d(i + 1, j) i i < r - 1 a v > m[i + 1][j] e 0,
                    d(i, j - 1) i j a v > m[i][j - 1] e 0,
                    d(i, j + 1) i j < c - 1 a v > m[i][j + 1] e 0)
            r d[i][j]
        
        f r i r(r):
            f c i r(c):
                d(r, c)
        r m(m(x) f x i d)
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