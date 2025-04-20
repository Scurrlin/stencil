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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 88 "Merge Sorted Array":

## Example

Solution

```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        if n == 0: return
        len1 = len(nums1)
        end_idx = len1 - 1

        while n > 0 and m > 0:
            if nums2[n - 1] >= nums1[m - 1]:
                nums1[end_idx] = nums2[n - 1]
                n -= 1
            else:
                nums1[end_idx] = nums1[m - 1]
                m -= 1
            end_idx -= 1
        while n > 0:
            nums1[end_idx] = nums2[n - 1]
            n -= 1
            end_idx -= 1
```

Solution with Stencil

```python
c S:
    d m(s, n: L[i], m: i, n: L[i], n: i) -> N:
        i n == 0: r
        l = l(n)
        e_i = l - 1

        w n > 0 a m > 0:
            i n[n - 1] >= n[m - 1]:
                n[e_i] = n[n - 1]
                n -= 1
            e:
                n[e_i] = n[m - 1]
                m -= 1
            e_i -= 1
        w n > 0:
            n[e_i] = n[n - 1]
            n -= 1
            e_i -= 1
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