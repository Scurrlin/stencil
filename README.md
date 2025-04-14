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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 60 "Permutation Sequence":

## Example

Solution

```python
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        factorials = [1] * (n + 1)

        for i in range(1, n + 1):
            factorials[i] = factorials[i - 1] * i
        digits = [str(i) for i in range(1, n + 1)]
        k -= 1
        result = []
        
        for i in range(n, 0, -1):
            block_size = factorials[i - 1]
            index = k // block_size
            result.append(digits[index])
            digits.pop(index)
            k %= block_size
        return "".join(result)
```

Solution with Stencil

```python
c S:
    d g(s, n: i, k: i) -> s:
        f = [1] * (n + 1)

        f i i r(1, n + 1):
            f[i] = f[i - 1] * i
        d = [s(i) f i i r(1, n + 1)]
        k -= 1
        r = []
        
        f i i r(n, 0, -1):
            b_s = f[i - 1]
            i = k // b_s
            r.a(d[i])
            d.p(i)
            k %= b_s
        r "".j(r)
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