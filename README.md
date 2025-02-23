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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 102 "Binary Tree Level Order Traversal":

## Example

Solution

```python
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        
        def dfs(node, level):
            if not node:
                return
            if len(res) <= level:
                res.append([])
            res[level].append(node.val)
            dfs(node.left, level + 1)
            dfs(node.right, level + 1)
        dfs(root, 0)
        return res
```

Solution with Stencil

```python
c S:
    d l(s, r: O[T]) -> L[L[i]]:
        r = []
        
        d d(n, l):
            i n n:
                r
            i l(r) <= l:
                r.a([])
            r[l].a(n.v)
            d(n.l, l + 1)
            d(n.r, l + 1)
        d(r, 0)
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