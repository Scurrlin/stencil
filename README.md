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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 273 "Integer to English Words":

## Example

Solution

```python
class Solution:
    def numberToWords(self, num: int) -> str:
        if num == 0:
            return "Zero"
        
        bigString = ["Thousand", "Million", "Billion"]
        result = self.numberToWordsHelper(num % 1000)
        num //= 1000
        
        for i in range(len(bigString)):
            if num > 0 and num % 1000 > 0:
                result = self.numberToWordsHelper(num % 1000) + bigString[i] + " " + result
            num //= 1000
        
        return result.strip()

    def numberToWordsHelper(self, num: int) -> str:
        digitString = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
        teenString = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
        tenString = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
        
        result = ""
        if num > 99:
            result += digitString[num // 100] + " Hundred "
        
        num %= 100
        if num < 20 and num > 9:
            result += teenString[num - 10] + " "
        else:
            if num >= 20:
                result += tenString[num // 10] + " "
            num %= 10
            if num > 0:
                result += digitString[num] + " "
        
        return result
```

Solution with Stencil

```python
c S:
    d n(s, n: i) -> s:
        i n == 0:
            r "Z"
        
        b = ["T", "M", "B"]
        r = s.n(n % 1)
        n //= 1
        
        f i i r(l(b)):
            i n > 0 a n % 1 > 0:
                r = s.n(n % 1) + b[i] + " " + r
            n //= 1
        
        r r.s()

    d n(s, n: i) -> s:
        d = ["Z", "O", "T", "T", "F", "F", "S", "S", "E", "N"]
        t = ["T", "E", "T", "T", "F", "F", "S", "S", "E", "N"]
        t = ["", "", "T", "T", "F", "F", "S", "S", "E", "N"]
        
        r = ""
        i n > 9:
            r += d[n // 1] + " H "
        
        n %= 1
        i n < 2 a n > 9:
            r += t[n - 1] + " "
        e:
            i n >= 2:
                r += t[n // 1] + " "
            n %= 1
            i n > 0:
                r += d[n] + " "
        
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