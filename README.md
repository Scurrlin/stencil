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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 316 "Remove Duplicate Letters":

## Example

Solution

```python
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        last_occur = {}
        for i, char in enumerate(s):
            last_occur[char] = i        

        stack = []  
        visited = set()
        for i in range(len(s)):
            if s[i] in visited:
                continue
            while stack and s[i] < stack[-1] and i < last_occur.get(stack[-1], -1):
                visited.remove(stack.pop())
            visited.add(s[i])
            stack.append(s[i])
        return ''.join(stack)
```

Solution with Stencil

```python
c S:
    d r(s, s: s) -> s:
        l_o = {}
        f i, c i e(s):
            l_o[c] = i        

        s = []  
        v = s()
        f i i r(l(s)):
            i s[i] i v:
                c
            w s a s[i] < s[-1] a i < l_o.g(s[-1], -1):
                v.r(s.p())
            v.a(s[i])
            s.a(s[i])
        r ''.j(s)
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