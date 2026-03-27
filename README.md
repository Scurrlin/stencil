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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 375 "Guess Number Higher or Lower II":

## Example

Solution

```python
class Solution:
    def getMoneyAmount(self, n: int) -> int:
        dp = {}

        def dfs(start, end):
            if start == end:
                return 0
            if start + 1 == end:
                return start
            if (start, end) in dp:
                return dp[(start, end)]

            res = float('inf')
            for mid in range((start + end)//2, end):
                res = min(mid + max(dfs(start, mid - 1), dfs(mid + 1, end)), res)

            dp[(start, end)] = res
            return res

        dfs(1, n)
        return dfs(1, n)
```

Solution with Stencil

```python
c S:
    d g(s, n: i) -> i:
        d = {}

        d d(s, e):
            i s == e:
                r 0
            i s + 1 == e:
                r s
            i (s, e) i d:
                r d[(s, e)]

            r = f('i')
            f m i r((s + e)//2, e):
                r = m(m + m(d(s, m - 1), d(m + 1, e)), r)

            d[(s, e)] = r
            r r

        d(1, n)
        r d(1, n)
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