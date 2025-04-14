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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 59 "Spiral Matrix II":

## Example

Solution

```python
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        ans = [[0] * n for _ in range(n)]
        DIR = [0, 1, 0, -1, 0]
        r, c = 0, 0
        d = 0
        for num in range(1, n * n + 1):
            nr, nc = r + DIR[d], c + DIR[d + 1]
            if not 0 <= nr < n or not 0 <= nc < n or ans[nr][nc] != 0:
                d = (d + 1) % 4
                nr, nc = r + DIR[d], c + DIR[d + 1]                
            ans[r][c] = num
            r, c = nr, nc
        return ans
```

Solution with Stencil

```python
c S:
    d g(s, n: i) -> L[L[i]]:
        a = [[0] * n f _ i r(n)]
        D = [0, 1, 0, -1, 0]
        r, c = 0, 0
        d = 0
        f n i r(1, n * n + 1):
            n, n = r + D[d], c + D[d + 1]
            i n 0 <= n < n o n 0 <= n < n o a[n][n] != 0:
                d = (d + 1) % 4
                n, n = r + D[d], c + D[d + 1]                
            a[r][c] = n
            r, c = n, n
        r a
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