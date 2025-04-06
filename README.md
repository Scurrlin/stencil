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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 37 "Sudoku Solver":

## Example

Solution

```python
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]

        for r in range(9):
            for c in range(9):
                if board[r][c] != '.':
                    val = board[r][c]
                    rows[r].add(val)
                    cols[c].add(val)
                    box_index = (r // 3) * 3 + (c // 3)
                    boxes[box_index].add(val)
                    
        def backtrack(r, c):
            if c == 9:
                return backtrack(r + 1, 0)
            if r == 9:
                return True
            if board[r][c] != '.':
                return backtrack(r, c + 1)
            box_index = (r // 3) * 3 + (c // 3)

            for digit in map(str, range(1, 10)):
                if (digit not in rows[r] 
                    and digit not in cols[c] 
                    and digit not in boxes[box_index]):
                    board[r][c] = digit
                    rows[r].add(digit)
                    cols[c].add(digit)
                    boxes[box_index].add(digit)
                    if backtrack(r, c + 1):
                        return True
                    board[r][c] = '.'
                    rows[r].remove(digit)
                    cols[c].remove(digit)
                    boxes[box_index].remove(digit)
            return False       
        backtrack(0, 0)
```

Solution with Stencil

```python
c S:
    d s(s, b: L[L[s]]) -> N:
        r = [s() f _ i r(9)]
        c = [s() f _ i r(9)]
        b = [s() f _ i r(9)]

        f r i r(9):
            f c i r(9):
                i b[r][c] != '.':
                    v = b[r][c]
                    r[r].a(v)
                    c[c].a(v)
                    b_i = (r // 3) * 3 + (c // 3)
                    b[b_i].a(v)
                    
        d b(r, c):
            i c == 9:
                r b(r + 1, 0)
            i r == 9:
                r T
            i b[r][c] != '.':
                r b(r, c + 1)
            b_i = (r // 3) * 3 + (c // 3)

            f d i m(s, r(1, 1)):
                i (d n i r[r] 
                    a d n i c[c] 
                    a d n i b[b_i]):
                    b[r][c] = d
                    r[r].a(d)
                    c[c].a(d)
                    b[b_i].a(d)
                    i b(r, c + 1):
                        r T
                    b[r][c] = '.'
                    r[r].r(d)
                    c[c].r(d)
                    b[b_i].r(d)
            r F       
        b(0, 0)
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