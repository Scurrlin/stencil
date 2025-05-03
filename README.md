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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 126 "Word Ladder II":

## Example

Solution

```python
class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        depthMap = {}
        ans = []
        
        def dfs(word, seq):
            if word == beginWord:
                ans.append(seq[::-1])
                return            
            steps = depthMap[word]
            for i in range(len(word)):
                original = word[i]
                for ch in 'abcdefghijklmnopqrstuvwxyz':
                    word = word[:i] + ch + word[i + 1:]
                    if word in depthMap and depthMap[word] + 1 == steps:
                        seq.append(word)
                        dfs(word, seq)
                        seq.pop()
                word = word[:i] + original + word[i + 1:]

        wordSet = set(wordList)
        q = deque([beginWord])
        depthMap[beginWord] = 1
        wordSet.discard(beginWord) 
        
        while q:
            word = q.popleft()
            steps = depthMap[word]
            if word == endWord:
                break
            for i in range(len(word)):
                original = word[i]
                for ch in 'abcdefghijklmnopqrstuvwxyz':
                    word = word[:i] + ch + word[i + 1:]
                    if word in wordSet:
                        q.append(word)
                        wordSet.discard(word)
                        depthMap[word] = steps + 1  
                word = word[:i] + original + word[i + 1:] 
        if endWord in depthMap:
            seq = [endWord]
            dfs(endWord, seq)
        return ans
```

Solution with Stencil

```python
c S:
    d f(s, b: s, e: s, w: L[s]) -> L[L[s]]:
        d = {}
        a = []
        
        d d(w, s):
            i w == b:
                a.a(s[::-1])
                r            
            s = d[w]
            f i i r(l(w)):
                o = w[i]
                f c i 'a':
                    w = w[:i] + c + w[i + 1:]
                    i w i d a d[w] + 1 == s:
                        s.a(w)
                        d(w, s)
                        s.p()
                w = w[:i] + o + w[i + 1:]

        w = s(w)
        q = d([b])
        d[b] = 1
        w.d(b) 
        
        w q:
            w = q.p()
            s = d[w]
            i w == e:
                b
            f i i r(l(w)):
                o = w[i]
                f c i 'a':
                    w = w[:i] + c + w[i + 1:]
                    i w i w:
                        q.a(w)
                        w.d(w)
                        d[w] = s + 1  
                w = w[:i] + o + w[i + 1:] 
        i e i d:
            s = [e]
            d(e, s)
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