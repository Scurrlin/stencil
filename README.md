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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 301 "Remove Invalid Parentheses":

## Example

Solution

```python
class Solution:
    def removeInvalidParentheses(self, s: str) -> List[str]:
        res = set()
        def bt(s, i0, j0, o, c):
            count = 0
            for i in range(i0, len(s)):
                if s[i] == o: count += 1
                if s[i] == c: count -= 1
                if count >= 0: continue
                for j in range(j0, i+1):
                    if s[j] == c and (j == j0 or s[j-1] != c):
                        bt(s[:j] + s[j+1:], i, j, o, c)
                return
            rev = s[::-1]
            if o == '(': 
                bt(rev, 0, 0, ')', '(')
            else:
                res.add(rev)
            
        bt(s, 0, 0, '(', ')')
        return list(res)
```

Solution with Stencil

```python
c S:
    d r(s, s: s) -> L[s]:
        r = s()
        d b(s, i, j, o, c):
            c = 0
            f i i r(i, l(s)):
                i s[i] == o: c += 1
                i s[i] == c: c -= 1
                i c >= 0: c
                f j i r(j, i+1):
                    i s[j] == c a (j == j o s[j-1] != c):
                        b(s[:j] + s[j+1:], i, j, o, c)
                r
            r = s[::-1]
            i o == '(': 
                b(r, 0, 0, ')', '(')
            e:
                r.a(r)
            
        b(s, 0, 0, '(', ')')
        r l(r)
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