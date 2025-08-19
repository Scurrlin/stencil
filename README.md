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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 304 "Range Sum Query 2D - Immutable":

## Example

Solution

```python
class NumMatrix:
    def __init__(self, matrix: List[List[int]]):
        rows = len(matrix)
        cols = len(matrix[0])
        for j in range(1,cols):
            matrix[0][j] += matrix[0][j - 1]  
        for i in range(1, rows):
            pref = 0
            for j in range(0,cols):
                pref += matrix[i][j]
                matrix[i][j] = pref + matrix[i - 1][j]       
        self.matrix = matrix

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        matrix = self.matrix
        if row1 == 0:
            if col1 == 0:
                return matrix[row2][col2]
            return matrix[row2][col2] - matrix[row2][col1 - 1]
        if col1 == 0:
            return matrix[row2][col2] - matrix[row1 - 1][col2] 

        return matrix[row2][col2] - matrix[row1 - 1][col2] - matrix[row2][col1 - 1] + matrix[row1 - 1][col1 - 1]
```

Solution with Stencil

```python
c N:
    d __i__(s, m: L[L[i]]):
        r = l(m)
        c = l(m[0])
        f j i r(1,c):
            m[0][j] += m[0][j - 1]  
        f i i r(1, r):
            p = 0
            f j i r(0,c):
                p += m[i][j]
                m[i][j] = p + m[i - 1][j]       
        s.m = m

    d s(s, r: i, c: i, r: i, c: i) -> i:
        m = s.m
        i r == 0:
            i c == 0:
                r m[r][c]
            r m[r][c] - m[r][c - 1]
        i c == 0:
            r m[r][c] - m[r - 1][c] 

        r m[r][c] - m[r - 1][c] - m[r][c - 1] + m[r - 1][c - 1]
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