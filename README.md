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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 52 "N-Queens II":

## Example

Solution

```python
class Solution:
    def totalNQueens(self, n: int) -> int:
        answer = 0
        cols = set()
        posdiag = set()
        negdiag = set()

        def backtrack(i):
            if i == n:
                nonlocal answer
                answer += 1
                return
            
            for j in range(n):
                if j in cols or (i + j) in posdiag or (i - j) in negdiag:
                    continue
                cols.add(j)
                posdiag.add(i + j)
                negdiag.add(i - j)
                backtrack(i + 1)
                cols.remove(j)
                posdiag.remove(i + j)
                negdiag.remove(i - j)
        
        backtrack(0)
        return answer
```

Solution with Stencil

```python
c S:
    d t(s, n: i) -> i:
        a = 0
        c = s()
        p = s()
        n = s()

        d b(i):
            i i == n:
                n a
                a += 1
                r
            
            f j i r(n):
                i j i c o (i + j) i p o (i - j) i n:
                    c
                c.a(j)
                p.a(i + j)
                n.a(i - j)
                b(i + 1)
                c.r(j)
                p.r(i + j)
                n.r(i - j)
        
        b(0)
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