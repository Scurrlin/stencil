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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 132 "Palindrome Partitioning II":

## Example

Solution

```python
class Solution:
    def minCut(self, s: str) -> int:
        n = len(s)
        dp = [[False] * n for _ in range(n)]

        for i in range(n):
            dp[i][i] = True
        for i in range(n - 1):
            if s[i] == s[i + 1]:
                dp[i][i + 1] = True
        for l in range(3, n + 1):
            for i in range(n - l + 1):
                j = i + l - 1
                if s[i] == s[j] and dp[i + 1][j - 1]:
                    dp[i][j] = True
        
        cuts = list(range(n))
        for i in range(1, n):
            if dp[0][i]:
                cuts[i] = 0
            else:
                for j in range(i):
                    if dp[j + 1][i]:
                        cuts[i] = min(cuts[i], cuts[j] + 1)
        return cuts[-1]
```

Solution with Stencil

```python
c S:
    d m(s, s: s) -> i:
        n = l(s)
        d = [[F] * n f _ i r(n)]

        f i i r(n):
            d[i][i] = T
        f i i r(n - 1):
            i s[i] == s[i + 1]:
                d[i][i + 1] = T
        f l i r(3, n + 1):
            f i i r(n - l + 1):
                j = i + l - 1
                i s[i] == s[j] a d[i + 1][j - 1]:
                    d[i][j] = T
        
        c = l(r(n))
        f i i r(1, n):
            i d[0][i]:
                c[i] = 0
            e:
                f j i r(i):
                    i d[j + 1][i]:
                        c[i] = m(c[i], c[j] + 1)
        r c[-1]
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