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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 241 "Different Ways to Add Parentheses":

## Example

Solution

```python
class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        res = []
        for i in range(len(expression)):
            op = expression[i]
            if op == "+" or op == "-" or op == "*":
                sub_str1 = expression[0 : i]
                sub_str2 = expression[i + 1 : ]
                s1 = self.diffWaysToCompute(sub_str1)
                s2 = self.diffWaysToCompute(sub_str2)
                for i in s1:
                    for j in s2:
                        if op == "*":
                            res.append(int(i) * int(j))
                        if op == "+":
                            res.append(int(i) + int(j))
                        if op == "-":
                            res.append(int(i) - int(j))
        if len(res) == 0:
            res.append(int(expression))
        return res
```

Solution with Stencil

```python
c S:
    d d(s, e: s) -> L[i]:
        r = []
        f i i r(l(e)):
            o = e[i]
            i o == "+" o o == "-" o o == "*":
                s_s = e[0 : i]
                s_s = e[i + 1 : ]
                s = s.d(s_s)
                s = s.d(s_s)
                f i i s:
                    f j i s:
                        i o == "*":
                            r.a(i(i) * i(j))
                        i o == "+":
                            r.a(i(i) + i(j))
                        i o == "-":
                            r.a(i(i) - i(j))
        i l(r) == 0:
            r.a(i(e))
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