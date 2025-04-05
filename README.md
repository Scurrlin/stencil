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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 36 "Valid Sudoku":

## Example

Solution

```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        b = board
        rows = collections.defaultdict(set)
        cols = collections.defaultdict(set)
        squares = collections.defaultdict(set)

        for r in range(9):
            for c in range(9):
                if b[r][c] == ".":
                    continue
                
                if (
                    b[r][c] in rows[r]
                    or b[r][c] in cols[c]
                    or b[r][c] in squares[(r//3, c//3)]
                ):
                    return False
                rows[r].add(b[r][c])
                cols[c].add(b[r][c])
                squares[(r//3, c//3)].add(b[r][c])
        return True
```

Solution with Stencil

```python
c S:
    d i(s, b: L[L[s]]) -> b:
        b = b
        r = c.d(s)
        c = c.d(s)
        s = c.d(s)

        f r i r(9):
            f c i r(9):
                i b[r][c] == ".":
                    c
                
                i (
                    b[r][c] i r[r]
                    o b[r][c] i c[c]
                    o b[r][c] i s[(r//3, c//3)]
                ):
                    r F
                r[r].a(b[r][c])
                c[c].a(b[r][c])
                s[(r//3, c//3)].a(b[r][c])
        r T
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