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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 93 "Restore IP Addresses":

## Example

Solution

```python
class Solution:
    def valid(self, temp: str) -> bool:
        if len(temp) > 3 or len(temp) == 0:
            return False
        if len(temp) > 1 and temp[0] == '0':
            return False
        if len(temp) and int(temp) > 255:
            return False
        return True

    def solve(self, ans, output, ind, s, dots):
        if dots == 3:
            if self.valid(s[ind:]):
                ans.append(output + s[ind:])
            return
        for i in range(ind, min(ind + 3, len(s))):
            if self.valid(s[ind:i + 1]):
                new_output = output + s[ind:i + 1] + '.'
                self.solve(ans, new_output, i + 1, s, dots + 1)

    def restoreIpAddresses(self, s: str) -> List[str]:
        ans = []
        self.solve(ans, "", 0, s, 0)
        return ans
```

Solution with Stencil

```python
c S:
    d v(s, t: s) -> b:
        i l(t) > 3 o l(t) == 0:
            r F
        i l(t) > 1 a t[0] == '0':
            r F
        i l(t) a i(t) > 2:
            r F
        r T

    d s(s, a, o, i, s, d):
        i d == 3:
            i s.v(s[i:]):
                a.a(o + s[i:])
            r
        f i i r(i, m(i + 3, l(s))):
            i s.v(s[i:i + 1]):
                n_o = o + s[i:i + 1] + '.'
                s.s(a, n_o, i + 1, s, d + 1)

    d r(s, s: s) -> L[s]:
        a = []
        s.s(a, "", 0, s, 0)
        r a
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