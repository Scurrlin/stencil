```

███████ ████████ ███████ ███    ██  ██████ ██ ██      
██         ██    ██      ████   ██ ██      ██ ██      
███████    ██    █████   ██ ██  ██ ██      ██ ██      
     ██    ██    ██      ██  ██ ██ ██      ██ ██      
███████    ██    ███████ ██   ████  ██████ ██ ███████ 

```

## Overview

Whether you are studying for technical interviews, or just starting your coding journey, pattern recognition and memorization are absolutely necessary. It doesn't take a valedictorian to figure that out, but how exactly are you supposed to do that? Between data structures, algorithms, and design patterns, the task of incrementally committing enough of that information to memory can feel impossible. You could spend hours studying fully implemented algorithms only to draw a blank when staring at an empty code editor.

Most people when they attempt to memorize something study the full text and then attempt to regurgitate it on a blank page. Shocking, I know... but what if there was a step in between? What if memorization and pattern recognition weren't all or nothing games? This is where Stencil comes in.

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 5 "Longest Palindromic Substring":

## Example

Solution

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if s == s[::-1]:
            return s
        start, length = 0, 1
        for i in range(1, len(s)):
            L, R = i - length, i + 1
            s1 = s[L-1 : R]
            if L >= 1 and s1 == s1[::-1]:
                length += 2
                start = L - 1
            else:
                s2 = s[L:R]
                if s2 == s2[::-1]:
                    length += 1
                    start = L
        return s[start:start + length]
```

Solution with Stencil

```python
c S:
    d l(s, s: s) -> s:
        i s == s[::-1]:
            r s
        s, l = 0, 1
        f i i r(1, l(s)):
            L, R = i - l, i + 1
            s = s[L-1 : R]
            i L >= 1 a s == s[::-1]:
                l += 2
                s = L - 1
            e:
                s = s[L:R]
                i s == s[::-1]:
                    l += 1
                    s = L
        r s[s:s + l]
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