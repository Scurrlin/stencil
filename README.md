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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 381 "Insert Delete GetRandom O(1) - Duplicates allowed":

## Example

Solution

```python
class RandomizedCollection:

    def __init__(self):
        self.mp = defaultdict(set)
        self.items = []   

    def insert(self, val: int) -> bool:
        ret = val not in self.mp
        self.mp[val].add(len(self.items))
        self.items.append(val)
        return ret

    def remove(self, val: int) -> bool:
        if val not in self.mp:
            return False
        
        i = self.mp[val].pop()

        if len(self.mp[val]) == 0:
            del self.mp[val]

        if i != (len(self.items) - 1): 
            last_val = self.items[-1]
            self.items[i] = last_val
            self.mp[last_val].remove(len(self.items) - 1)
            self.mp[last_val].add(i)

        self.items.pop()
        return True

    def getRandom(self) -> int:
        return random.choice(self.items)
```

Solution with Stencil

```python
c R:

    d __i__(s):
        s.m = d(s)
        s.i = []   

    d i(s, v: i) -> b:
        r = v n i s.m
        s.m[v].a(l(s.i))
        s.i.a(v)
        r r

    d r(s, v: i) -> b:
        i v n i s.m:
            r F
        
        i = s.m[v].p()

        i l(s.m[v]) == 0:
            d s.m[v]

        i i != (l(s.i) - 1): 
            l_v = s.i[-1]
            s.i[i] = l_v
            s.m[l_v].r(l(s.i) - 1)
            s.m[l_v].a(i)

        s.i.p()
        r T

    d g(s) -> i:
        r r.c(s.i)
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