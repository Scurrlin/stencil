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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 378 "Kth Smallest Element in a Sorted Matrix":

## Example

Solution

```python
class Solution:
    def countElements(self, matrix, target):
        n = len(matrix)
        row, col, count = n - 1, 0, 0

        while row >= 0 and col < n:
            if matrix[row][col] <= target:
                count += (row + 1)
                col += 1
            else:
                row -= 1
        return count

    def kthSmallest(self, matrix, k: int) -> int:
        n = len(matrix)
        low, high = matrix[0][0], matrix[-1][-1]
        ans = 0

        while low <= high:
            mid = (low + high)//2
            count = self.countElements(matrix, mid)
            if count >= k:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1
        return ans
```

Solution with Stencil

```python
c S:
    d c(s, m, t):
        n = l(m)
        r, c, c = n - 1, 0, 0

        w r >= 0 a c < n:
            i m[r][c] <= t:
                c += (r + 1)
                c += 1
            e:
                r -= 1
        r c

    d k(s, m, k: i) -> i:
        n = l(m)
        l, h = m[0][0], m[-1][-1]
        a = 0

        w l <= h:
            m = (l + h)//2
            c = s.c(m, m)
            i c >= k:
                a = m
                h = m - 1
            e:
                l = m + 1
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