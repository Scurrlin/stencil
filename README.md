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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 113 "Path Sum II":

## Example

Solution

```python
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        if not root:
            return []        
        ans = []

        def dfs(node, targetSum, path) -> None:
            if not node:
                return
            targetSum -= node.val
            path.append(node.val)
            if targetSum == 0 and not node.left and not node.right:
                ans.append(path[:])
            else:
                left = dfs(node.left, targetSum, path)
                right = dfs(node.right, targetSum, path)
            path.pop()
        dfs(root, targetSum, [])
        return ans
```

Solution with Stencil

```python
c S:
    d p(s, r: O[T], t: i) -> L[L[i]]:
        i n r:
            r []        
        a = []

        d d(n, t, p) -> N:
            i n n:
                r
            t -= n.v
            p.a(n.v)
            i t == 0 a n n.l a n n.r:
                a.a(p[:])
            e:
                l = d(n.l, t, p)
                r = d(n.r, t, p)
            p.p()
        d(r, t, [])
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