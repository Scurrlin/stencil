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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 424 "Longest Repeating Character Replacement":

## Example

Solution

```python
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        l = 0
        maxfreq = 0

        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)
            maxfreq = max(maxfreq, count[s[r]])
            if (r - l + 1) - maxfreq > k:
                count[s[l]] -= 1
                l += 1
        return (r - l + 1)
```

Solution with Stencil

```python
c S:
    d c(s, s: s, k: i) -> i:
        c = {}
        l = 0
        m = 0

        f r i r(l(s)):
            c[s[r]] = 1 + c.g(s[r], 0)
            m = m(m, c[s[r]])
            i (r - l + 1) - m > k:
                c[s[l]] -= 1
                l += 1
        r (r - l + 1)
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