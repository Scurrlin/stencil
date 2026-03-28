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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 380 "Insert Delete GetRandom O(1)":

## Example

Solution

```python
class RandomizedSet:

    def __init__(self):
        self.nums = {}
        

    def insert(self, val: int) -> bool:
        if val in self.nums:
            return False
        self.nums[val] = 1
        return True


    def remove(self, val: int) -> bool:
        if val in self.nums:
            self.nums.pop(val)
            return True
        return False

    def getRandom(self) -> int:
        return random.choice(list(self.nums.keys()))
```

Solution with Stencil

```python
c R:

    d __i__(s):
        s.n = {}
        

    d i(s, v: i) -> b:
        i v i s.n:
            r F
        s.n[v] = 1
        r T


    d r(s, v: i) -> b:
        i v i s.n:
            s.n.p(v)
            r T
        r F

    d g(s) -> i:
        r r.c(l(s.n.k()))
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