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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 130 "Surrounded Regions":

## Example

Solution

```python
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        b = board
        m, n = len(b), len(b[0])

        def dfs(x, y):
            b[x][y] = '#'
            for x2, y2 in ((x+1, y), (x-1, y), (x, y+1), (x, y-1)):
                if 0 <= x2 < m and 0 <= y2 < n and b[x2][y2] =='O':
                    dfs(x2, y2)
        for i in range(m):
            if b[i][0] == 'O': dfs(i, 0)
            if b[i][n-1] == 'O': dfs(i, n-1)
        for j in range(n):
            if b[0][j] == 'O': dfs(0, j)
            if b[m-1][j] == 'O': dfs(m-1, j)
        for x in range(m):
            for y in range(n):
                if b[x][y] == 'O':
                    b[x][y] = 'X'
                elif b[x][y] =='#':
                    b[x][y] = 'O'
```

Solution with Stencil

```python
c S:
    d s(s, b: L[L[s]]) -> N:
        b = b
        m, n = l(b), l(b[0])

        d d(x, y):
            b[x][y] = '#'
            f x, y i ((x+1, y), (x-1, y), (x, y+1), (x, y-1)):
                i 0 <= x < m a 0 <= y < n a b[x][y] =='O':
                    d(x, y)
        f i i r(m):
            i b[i][0] == 'O': d(i, 0)
            i b[i][n-1] == 'O': d(i, n-1)
        f j i r(n):
            i b[0][j] == 'O': d(0, j)
            i b[m-1][j] == 'O': d(m-1, j)
        f x i r(m):
            f y i r(n):
                i b[x][y] == 'O':
                    b[x][y] = 'X'
                e b[x][y] =='#':
                    b[x][y] = 'O'
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