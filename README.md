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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 220 "Contains Duplicate III":

## Example

Solution

```python
class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        bucket = {}
        for i, n in enumerate(nums):
            bucket_i = n // (t + 1)
            if bucket_i in bucket and abs(n - bucket[bucket_i]) <= t:
                return True
            if bucket_i + 1 in bucket and abs(n - bucket[bucket_i + 1]) <= t:
                return True
            if bucket_i - 1 in bucket and abs(n - bucket[bucket_i - 1]) <= t:
                return True
            bucket[bucket_i] = n
            if i >= k:
                del bucket[nums[i - k] // (t + 1)]
        return False
```

Solution with Stencil

```python
c S:
    d c(s, n: L[i], k: i, t: i) -> b:
        b = {}
        f i, n i e(n):
            b_i = n // (t + 1)
            i b_i i b a a(n - b[b_i]) <= t:
                r T
            i b_i + 1 i b a a(n - b[b_i + 1]) <= t:
                r T
            i b_i - 1 i b a a(n - b[b_i - 1]) <= t:
                r T
            b[b_i] = n
            i i >= k:
                d b[n[i - k] // (t + 1)]
        r F
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