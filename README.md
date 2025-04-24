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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 99 "Recover Binary Search Tree":

## Example

Solution

```python
class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        res, prev = [], None     
        startnode, lastnode = None, None
        
        def dfs(root):
            nonlocal res, startnode, prev, lastnode
            if not root:
                return  
            dfs(root.left)
            if prev and prev.val > root.val:
                if not startnode:
                    startnode = prev
                lastnode = root     
            prev = root   
            dfs(root.right)
        
        dfs(root)
        if startnode and lastnode:
            startnode.val, lastnode.val = lastnode.val, startnode.val
```

Solution with Stencil

```python
c S:
    d r(s, r: O[T]) -> N:
        r, p = [], N     
        s, l = N, N
        
        d d(r):
            n r, s, p, l
            i n r:
                r  
            d(r.l)
            i p a p.v > r.v:
                i n s:
                    s = p
                l = r     
            p = r   
            d(r.r)
        
        d(r)
        i s a l:
            s.v, l.v = l.v, s.v
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