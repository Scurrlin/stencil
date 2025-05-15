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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 166 "Fraction to Recurring Decimal":

## Example

Solution

```python
class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        if numerator == 0: return '0'
        result = []

        if numerator < 0 and denominator > 0 or numerator >= 0 and denominator < 0:
            result.append('-')
        
        numerator, denominator = abs(numerator), abs(denominator)
        result.append(str(numerator // denominator))
        remainder = numerator % denominator
        
        if remainder == 0: return ''.join(result)
        result.append('.')
        
        d = {}
        while remainder != 0:
            if remainder in d:
                result.insert(d[remainder], '(')
                result.append(')')
                return ''.join(result)
            d[remainder] = len(result)
            remainder *= 10
            result += str(remainder // denominator)
            remainder = remainder % denominator
        return ''.join(result)
```

Solution with Stencil

```python
c S:
    d f(s, n: i, d: i) -> s:
        i n == 0: r '0'
        r = []

        i n < 0 a d > 0 o n >= 0 a d < 0:
            r.a('-')
        
        n, d = a(n), a(d)
        r.a(s(n // d))
        r = n % d
        
        i r == 0: r ''.j(r)
        r.a('.')
        
        d = {}
        w r != 0:
            i r i d:
                r.i(d[r], '(')
                r.a(')')
                r ''.j(r)
            d[r] = l(r)
            r *= 1
            r += s(r // d)
            r = r % d
        r ''.j(r)
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