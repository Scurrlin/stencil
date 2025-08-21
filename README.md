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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 307 "Range Sum Query - Mutable":

## Example

Solution

```python
class NumArray:
    def __init__(self, nums: List[int]):
        self.nums = [0] + nums
        self.ftree = self.nums.copy()

        for i in range(1, len(self.ftree)):
            parent = i + (i & -i)
            if parent < len(self.ftree):
                self.ftree[parent] += self.ftree[i]

    def update(self, index: int, val: int) -> None:
        index += 1
        d = val - self.nums[index]
        self.nums[index] = val

        while index < len(self.ftree):
            self.ftree[index] += d
            index += index & -index

    def sumRange(self, left: int, right: int) -> int:
        left += 1
        right += 1
        l = self.get_prefix_sum(left) - self.nums[left]
        r = self.get_prefix_sum(right)
        return r - l

    def get_prefix_sum(self, i: int) -> int:
        result = 0
        while i:
            result += self.ftree[i]
            i -= i & -i
        return result
```

Solution with Stencil

```python
c N:
    d __i__(s, n: L[i]):
        s.n = [0] + n
        s.f = s.n.c()

        f i i r(1, l(s.f)):
            p = i + (i & -i)
            i p < l(s.f):
                s.f[p] += s.f[i]

    d u(s, i: i, v: i) -> N:
        i += 1
        d = v - s.n[i]
        s.n[i] = v

        w i < l(s.f):
            s.f[i] += d
            i += i & -i

    d s(s, l: i, r: i) -> i:
        l += 1
        r += 1
        l = s.g_p_s(l) - s.n[l]
        r = s.g_p_s(r)
        r r - l

    d g_p_s(s, i: i) -> i:
        r = 0
        w i:
            r += s.f[i]
            i -= i & -i
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