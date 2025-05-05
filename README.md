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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 140 "Word Break II":

## Example

Solution

```python
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        word_set = set(wordDict)
        return self.wordBreakHelper(s, 0, word_set)
    
    def wordBreakHelper(self, s: str, start: int, word_set: set) -> List[str]:
        valid_substr = []    
        if start == len(s):
            valid_substr.append("")

        for end in range(start + 1, len(s) + 1):
            prefix = s[start:end]
            if prefix in word_set:
                suffixes = self.wordBreakHelper(s, end, word_set)
                for suffix in suffixes:
                    valid_substr.append(prefix + ("" if suffix == "" else " ") + suffix)
        return valid_substr
```

Solution with Stencil

```python
c S:
    d w(s, s: s, w: L[s]) -> L[s]:
        w_s = s(w)
        r s.w(s, 0, w_s)
    
    d w(s, s: s, s: i, w_s: s) -> L[s]:
        v_s = []    
        i s == l(s):
            v_s.a("")

        f e i r(s + 1, l(s) + 1):
            p = s[s:e]
            i p i w_s:
                s = s.w(s, e, w_s)
                f s i s:
                    v_s.a(p + ("" i s == "" e " ") + s)
        r v_s
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