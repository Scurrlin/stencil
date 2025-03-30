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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 30 "Substring with Concatenation of All Words":

## Example

Solution

```python
from collections import defaultdict
from typing import List

class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if not s or not words:
            return []
        
        word_len = len(words[0])
        count_words = len(words)
        total_len = word_len * count_words
        
        if len(s) < total_len:
            return []
        word_count = defaultdict(int)
        for w in words:
            word_count[w] += 1
        result = []
        
        for start_offset in range(word_len):
            left = start_offset
            matched_words = 0
            seen_count = defaultdict(int)
            for right in range(start_offset, len(s), word_len):
                current_word = s[right : right + word_len]                
                if current_word in word_count:
                    seen_count[current_word] += 1
                    if seen_count[current_word] <= word_count[current_word]:
                        matched_words += 1
                    else:
                        while seen_count[current_word] > word_count[current_word]:
                            left_word = s[left : left + word_len]
                            seen_count[left_word] -= 1
                            if seen_count[left_word] < word_count[left_word]:
                                matched_words -= 1
                            left += word_len
                    if matched_words == count_words:
                        result.append(left)
                        left_word = s[left : left + word_len]
                        seen_count[left_word] -= 1
                        if seen_count[left_word] < word_count[left_word]:
                            matched_words -= 1
                        left += word_len
                else:
                    seen_count.clear()
                    matched_words = 0
                    left = right + word_len
        return result
```

Solution with Stencil

```python
f c i d
f t i L

c S:
    d f(s, s: s, w: L[s]) -> L[i]:
        i n s o n w:
            r []
        
        w_l = l(w[0])
        c_w = l(w)
        t_l = w_l * c_w
        
        i l(s) < t_l:
            r []
        w_c = d(i)
        f w i w:
            w_c[w] += 1
        r = []
        
        f s_o i r(w_l):
            l = s_o
            m_w = 0
            s_c = d(i)
            f r i r(s_o, l(s), w_l):
                c_w = s[r : r + w_l]                
                i c_w i w_c:
                    s_c[c_w] += 1
                    i s_c[c_w] <= w_c[c_w]:
                        m_w += 1
                    e:
                        w s_c[c_w] > w_c[c_w]:
                            l_w = s[l : l + w_l]
                            s_c[l_w] -= 1
                            i s_c[l_w] < w_c[l_w]:
                                m_w -= 1
                            l += w_l
                    i m_w == c_w:
                        r.a(l)
                        l_w = s[l : l + w_l]
                        s_c[l_w] -= 1
                        i s_c[l_w] < w_c[l_w]:
                            m_w -= 1
                        l += w_l
                e:
                    s_c.c()
                    m_w = 0
                    l = r + w_l
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