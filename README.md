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

Stencil is a language-agnostic memorization tool that strips code files down to their first letters while preserving spacing, capitalization, and punctuation. The "stencil" of the file is designed to act as a bridge between having something partially memorized and fully memorized. Below is an example of Stencil in action using LeetCode problem 355 "Design Twitter":

## Example

Solution

```python
from collections import defaultdict
import heapq

class Twitter:

    def __init__(self):
        self.time = 0
        self.followers = defaultdict(set)
        self.hist = defaultdict(set)

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.followers[userId].add(userId)
        self.hist[userId].add((-self.time, tweetId))
        self.time += 1

    def getNewsFeed(self, userId: int) -> List[int]:
        feed = []
        for followee in self.followers[userId]:
            for post in self.hist[followee]:
                heapq.heappush(feed, post)

        res = [] 
        for _ in range(10):
            if not feed:
                break               
            _, postId = heapq.heappop(feed)
            res.append(postId)
            
        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        self.followers[followerId].add(followeeId)
        
    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.followers[followerId].discard(followeeId)
```

Solution with Stencil

```python
f c i d
i h

c T:

    d __i__(s):
        s.t = 0
        s.f = d(s)
        s.h = d(s)

    d p(s, u: i, t: i) -> N:
        s.f[u].a(u)
        s.h[u].a((-s.t, t))
        s.t += 1

    d g(s, u: i) -> L[i]:
        f = []
        f f i s.f[u]:
            f p i s.h[f]:
                h.h(f, p)

        r = [] 
        f _ i r(1):
            i n f:
                b               
            _, p = h.h(f)
            r.a(p)
            
        r r

    d f(s, f: i, f: i) -> N:
        s.f[f].a(f)
        
    d u(s, f: i, f: i) -> N:
        s.f[f].d(f)
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