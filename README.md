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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 310 "Minimum Height Trees":

## Example

Solution

```python
class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n == 1 or not edges:
            return [0]
        graph = collections.defaultdict(set)
        ans = []
        
        for u, v in edges:
            graph[u].add(v)
            graph[v].add(u)

        for label, children in graph.items():
            if len(children) == 1:
                ans.append(label)

        while n > 2:
            n -= len(ans)
            nextLeaves = []
            for leaf in ans:
                u = next(iter(graph[leaf]))
                graph[u].remove(leaf)
                if len(graph[u]) == 1:
                    nextLeaves.append(u)
            ans = nextLeaves

        return ans
```

Solution with Stencil

```python
c S:
    d f(s, n: i, e: L[L[i]]) -> L[i]:
        i n == 1 o n e:
            r [0]
        g = c.d(s)
        a = []
        
        f u, v i e:
            g[u].a(v)
            g[v].a(u)

        f l, c i g.i():
            i l(c) == 1:
                a.a(l)

        w n > 2:
            n -= l(a)
            n = []
            f l i a:
                u = n(i(g[l]))
                g[u].r(l)
                i l(g[u]) == 1:
                    n.a(u)
            a = n

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