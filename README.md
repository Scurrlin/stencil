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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 38 "Count and Say":

## Example

Solution

```python
class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1: 
            return "1"
        s = "1"
        
        for _ in range(n - 1):
            ans, i = "", 0
            while i < len(s):
                count = 1
                while i + 1 < len(s) and s[i] == s[i + 1]: 
                    count, i = count + 1, i + 1
                ans += str(count) + s[i]
                i += 1
            s = ans
        return s
```

Solution with Stencil

```python
c S:
    d c(s, n: i) -> s:
        i n == 1: 
            r "1"
        s = "1"
        
        f _ i r(n - 1):
            a, i = "", 0
            w i < l(s):
                c = 1
                w i + 1 < l(s) a s[i] == s[i + 1]: 
                    c, i = c + 1, i + 1
                a += s(c) + s[i]
                i += 1
            s = a
        r s
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