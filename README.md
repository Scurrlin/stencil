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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 85 "Maximal Rectangle":

## Example

Solution

```python
class Solution:
    def maximalRectangle(self, matrix: list[list[str]], ans = 0) -> int:
        m, n = len(matrix), len(matrix[0])
        dp = [0] * (n + 1)
        
        for i in range(m):
            stack = deque([-1])
            for j in range(n + 1):
                if j < n and matrix[i][j] == '1': dp[j] += 1
                else: dp[j] = 0
                while (dp[stack[0]] > dp[j]):
                    ans = max(ans, dp[stack.popleft()] * (j - stack[0] - 1))
                stack.appendleft(j)
        return ans
```

Solution with Stencil

```python
c S:
    d m(s, m: l[l[s]], a = 0) -> i:
        m, n = l(m), l(m[0])
        d = [0] * (n + 1)
        
        f i i r(m):
            s = d([-1])
            f j i r(n + 1):
                i j < n a m[i][j] == '1': d[j] += 1
                e: d[j] = 0
                w (d[s[0]] > d[j]):
                    a = m(a, d[s.p()] * (j - s[0] - 1))
                s.a(j)
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