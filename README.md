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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 306 "Additive Number":

## Example

Solution

```python
class Solution:
    def isAdditiveNumber(self, num: str) -> bool:
        def dfs(s, seq):        
            if not s:  
                if len(seq) > 2: 
                    return True
                else: 
                    return False        
            
            for i in range(len(s)):
                if s[0] == '0' and i > 0: 
                    break              
                cur = int(s[:i + 1])
                if len(seq) > 1 and cur != seq[-2] + seq[-1]: 
                    continue
                if dfs(s[i + 1:], seq + [cur]): return True                 
            return False
    
        return dfs(num, [])
```

Solution with Stencil

```python
c S:
    d i(s, n: s) -> b:
        d d(s, s):        
            i n s:  
                i l(s) > 2: 
                    r T
                e: 
                    r F        
            
            f i i r(l(s)):
                i s[0] == '0' a i > 0: 
                    b              
                c = i(s[:i + 1])
                i l(s) > 1 a c != s[-2] + s[-1]: 
                    c
                i d(s[i + 1:], s + [c]): r T                 
            r F
    
        r d(n, [])
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