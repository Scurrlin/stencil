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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 227 "Basic Calculator II":

## Example

Solution

```python
class Solution:
    def calculate(self, s: str) -> int:
        pre, curr, res = 0, 0, 0
        pre_op = "+"
        for ch in (s + "+"):
            if ch == " ":
                continue
            elif ch.isdigit():
                curr = (10 * curr + ord(ch) - ord("0"))
            else: 
                if pre_op == "+":
                    res += pre
                    pre = curr
                elif pre_op == "-":
                    res += pre
                    pre = -curr
                elif pre_op == "*":
                    pre *= curr
                else:
                    pre = int(pre / curr)
                pre_op = ch
                curr = 0
        res += pre
        return res
```

Solution with Stencil

```python
c S:
    d c(s, s: s) -> i:
        p, c, r = 0, 0, 0
        p_o = "+"
        f c i (s + "+"):
            i c == " ":
                c
            e c.i():
                c = (1 * c + o(c) - o("0"))
            e: 
                i p_o == "+":
                    r += p
                    p = c
                e p_o == "-":
                    r += p
                    p = -c
                e p_o == "*":
                    p *= c
                e:
                    p = i(p / c)
                p_o = c
                c = 0
        r += p
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