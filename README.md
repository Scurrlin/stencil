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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 224 "Basic Calculator":

## Example

Solution

```python
class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        result = 0

        # current sign
        sign = 1
        i = 0
        n = len(s)
    
        while i < n:
            char = s[i]
        
            if char.isspace():
                i += 1
                continue
        
            if char.isdigit():
                num = 0
                while i < n and s[i].isdigit():
                    num = num * 10 + int(s[i])
                    i += 1
                result += sign * num
                continue
        
            if char == '+':
                sign = 1
            elif char == '-':
                sign = -1
            elif char == '(':
                stack.append((result, sign))
                result = 0
                sign = 1
            elif char == ')':
                prev_result, prev_sign = stack.pop()
                result = prev_result + prev_sign * result
        
            i += 1

        return result
```

Solution with Stencil

```python
c S:
    d c(s, s: s) -> i:
        s = []
        r = 0

        # c s
        s = 1
        i = 0
        n = l(s)
    
        w i < n:
            c = s[i]
        
            i c.i():
                i += 1
                c
        
            i c.i():
                n = 0
                w i < n a s[i].i():
                    n = n * 1 + i(s[i])
                    i += 1
                r += s * n
                c
        
            i c == '+':
                s = 1
            e c == '-':
                s = -1
            e c == '(':
                s.a((r, s))
                r = 0
                s = 1
            e c == ')':
                p_r, p_s = s.p()
                r = p_r + p_s * r
        
            i += 1

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