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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 44 "Wildcard Matching":

## Example

Solution

```python
class Solution(object):
    def isMatch(self, s, p):
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        dp[-1][-1] = True
        for i in range(len(s), -1, -1):
            for j in range(len(p) - 1, -1, -1):
                if p[j] == '*':
                    dp[i][j] = dp[i][j + 1] or (i < len(s)
                    and dp[i + 1][j])
                else:
                    dp[i][j] = i < len(s) and (p[j] == s[i]
                    or p[j] == '?') and dp[i + 1][j + 1]
        return dp[0][0]
```

Solution with Stencil

```python
c S(o):
    d i(s, s, p):
        d = [[F] * (l(p) + 1) f _ i r(l(s) + 1)]
        d[-1][-1] = T
        f i i r(l(s), -1, -1):
            f j i r(l(p) - 1, -1, -1):
                i p[j] == '*':
                    d[i][j] = d[i][j + 1] o (i < l(s)
                    a d[i + 1][j])
                e:
                    d[i][j] = i < l(s) a (p[j] == s[i]
                    o p[j] == '?') a d[i + 1][j + 1]
        r d[0][0]
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