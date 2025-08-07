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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 282 "Expression and Operators":

## Example

Solution

```python
class Solution:
    def addOperators(self, s: str, target: int) -> List[str]:
        res = []

        def dfs(i, path, cur_num, prevNum):
            if i == len(s):
                if cur_num == target:
                    res.append(path)
                return
            
            for j in range(i, len(s)):
                if j > i and s[i] == '0':
                    break
                num = int(s[i:j + 1])

                if i == 0:
                    dfs(j + 1, path + str(num), cur_num + num, num)
                else:
                    dfs(j + 1, path + "+" + str(num), cur_num + num, num)
                    dfs(j + 1, path + "-" + str(num), cur_num - num, -num)
                    dfs(j + 1, path + "*" + str(num), cur_num - prevNum + prevNum * num, prevNum * num)
        
        dfs(0, "", 0, 0)
        return res
```

Solution with Stencil

```python
c S:
    d a(s, s: s, t: i) -> L[s]:
        r = []

        d d(i, p, c_n, p):
            i i == l(s):
                i c_n == t:
                    r.a(p)
                r
            
            f j i r(i, l(s)):
                i j > i a s[i] == '0':
                    b
                n = i(s[i:j + 1])

                i i == 0:
                    d(j + 1, p + s(n), c_n + n, n)
                e:
                    d(j + 1, p + "+" + s(n), c_n + n, n)
                    d(j + 1, p + "-" + s(n), c_n - n, -n)
                    d(j + 1, p + "*" + s(n), c_n - p + p * n, p * n)
        
        d(0, "", 0, 0)
        r r
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