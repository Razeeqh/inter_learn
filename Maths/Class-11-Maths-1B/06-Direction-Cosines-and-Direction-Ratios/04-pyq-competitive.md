# Direction Cosines and Direction Ratios — Competitive Exam Questions (EAPCET · JEE Main)

**Chapter 6, Maths IB — small in the board paper, but the ENGINE of every 3D question in
the entrance exams.** In JEE Main, "Three Dimensional Geometry" is a guaranteed 1-2
question topic, and every one of those questions uses direction ratios somewhere.

```
  +---------------+--------------------------------+---------------------------+
  |  EXAM         |  Questions using THIS chapter  |  Marking                  |
  +---------------+--------------------------------+---------------------------+
  |  AP EAPCET    |  1 - 2 (of 80 maths questions) |  +1 , NO negative marking |
  |  TG EAPCET    |  1 - 2                         |  +1 , NO negative marking |
  |  JEE Main     |  1 - 2 (3D geometry, of 25)    |  +4 , -1                  |
  +---------------+--------------------------------+---------------------------+

  EAPCET has NO negative marking  ->  NEVER leave a blank. Guess if you must.
  JEE Main has -1                 ->  Skip what you genuinely do not know.
```

**The single biggest speed weapon in this chapter:**

```
   Almost every option list can be narrowed by ONE check:

              l^2 + m^2 + n^2  must equal  1

   Any option that fails is dead. In a "find the direction cosines"
   question this alone often leaves only one survivor.
```

The questions below are grouped by **PATTERN**, not by year. Learn the pattern once and
every future version becomes a 20-second question.

---

# PATTERN 1 — CONVERT DIRECTION RATIOS TO DIRECTION COSINES

> **SHORTCUT:** Divide by `sqrt(a^2+b^2+c^2)`. Then scan the options and kill every one
> whose squares do not add to 1.

### Q1
The direction cosines of the line with direction ratios `(2, -1, 2)` are
(A) `(2, -1, 2)`  (B) `(2/3, -1/3, 2/3)`  (C) `(2/9, -1/9, 2/9)`  (D) `(1/2, -1, 1/2)`

**ANSWER: (B)**
```
  r = sqrt(4 + 1 + 4) = 3   ->   ( 2/3 , -1/3 , 2/3 )
  CHECK: (4 + 1 + 4)/9 = 1        correct
```

---

### Q2
The direction cosines of the line with direction ratios `(1, -2, -2)` are
(A) `(1/3, -2/3, -2/3)`  (B) `(1/9, -2/9, -2/9)`  (C) `(1, -2, -2)`  (D) `(1/5, -2/5, -2/5)`

**ANSWER: (A)** — `r = 3`; check `(1+4+4)/9 = 1`.

---

### Q3
Which of the following can **NOT** be the direction cosines of a line?
(A) `(0, 0, 1)`  (B) `(1/sqrt3, 1/sqrt3, 1/sqrt3)`  (C) `(1/2, 1/2, 1/2)`
(D) `(1/2, -1/2, 1/sqrt2)`

**ANSWER: (C)**
```
  (A)  0 + 0 + 1 = 1        valid
  (B)  1/3+1/3+1/3 = 1      valid
  (C)  1/4+1/4+1/4 = 3/4    NOT 1  ->  impossible
  (D)  1/4+1/4+1/2 = 1      valid
```
> **SHORTCUT:** This is the fastest question type in the chapter. Square and add. Done.

---

### Q4
The direction cosines of the line with direction ratios `(1/2, 1/3, 1/6)` are
(A) `(3/sqrt14, 2/sqrt14, 1/sqrt14)`  (B) `(1/2, 1/3, 1/6)`
(C) `(6/7, 4/7, 2/7)`  (D) `(1/sqrt14, 2/sqrt14, 3/sqrt14)`

**ANSWER: (A)**
```
  Multiply by 6:  (3, 2, 1) .  r = sqrt(9+4+1) = sqrt14.
  CHECK: 14/14 = 1        correct
  (D) is the same numbers in the WRONG ORDER - a classic trap option.
```

---

# PATTERN 2 — IDENTITIES BUILT ON l^2 + m^2 + n^2 = 1

> **SHORTCUT:** Everything in this pattern is "three minus one" or "twice one minus three".
> No calculation is ever needed.

### Q5
If a line makes angles `alpha, beta, gamma` with the coordinate axes, then
`sin^2 alpha + sin^2 beta + sin^2 gamma =`
(A) `1`  (B) `2`  (C) `3`  (D) `0`

**ANSWER: (B)** — `3 - (cos^2 a + cos^2 b + cos^2 c) = 3 - 1 = 2`.

---

### Q6
`cos 2alpha + cos 2beta + cos 2gamma =`
(A) `1`  (B) `-1`  (C) `2`  (D) `-2`

**ANSWER: (B)** — `2(1) - 3 = -1`.

---

### Q7
A line makes `60` degrees with the x-axis and `45` degrees with the y-axis. The angle it
makes with the z-axis is
(A) `30` or `150`  (B) `45` or `135`  (C) `60` or `120`  (D) `90` only

**ANSWER: (C)**
```
  cos^2 g = 1 - cos^2 60 - cos^2 45 = 1 - 1/4 - 1/2 = 1/4
  cos g = +/- 1/2   ->   g = 60 or 120
```
> **SHORTCUT:** Notice how often the answer is `1 - 1/4 - 1/2 = 1/4`. The setters reuse
> the pairs `(60, 45)`, `(45, 60)` and `(60, 60)` constantly.

---

### Q8
A line makes `45` degrees with **both** the x-axis and the y-axis. The angle it makes with
the z-axis is
(A) `0`  (B) `45`  (C) `60`  (D) `90`

**ANSWER: (D)**
```
  cos^2 g = 1 - 1/2 - 1/2 = 0   ->   cos g = 0   ->   g = 90
```
The line lies **in** the xy-plane, which is why `n = 0`.

---

### Q9
A line equally inclined to the three coordinate axes makes with each of them an angle of
(A) `30` deg  (B) `45` deg  (C) `cos^-1(1/sqrt3)`  (D) `cos^-1(1/3)`

**ANSWER: (C)** — `3k^2 = 1`, `k = 1/sqrt3`, angle `= cos^-1(1/sqrt3)` (about 54 deg 44 min).

---

### Q10
Can a line make an angle of `60` degrees with **all three** coordinate axes?
(A) yes  (B) no  (C) only if it passes through the origin  (D) only in the first octant

**ANSWER: (B)**
```
  3 cos^2 60 = 3 x (1/4) = 3/4 , which is not 1.
  No such line exists.
```

---

### Q11
If `(1/2, 1/sqrt2, k)` are the direction cosines of a line then `k =`
(A) `1/2` only  (B) `+/- 1/2`  (C) `+/- 1/4`  (D) `+/- 1/sqrt2`

**ANSWER: (B)** — `1/4 + 1/2 + k^2 = 1` gives `k^2 = 1/4`.

> **SHORTCUT:** If an option list has a `+/-` version and a single-sign version of the same
> number, the `+/-` one is almost always the intended answer for direction cosines.

---

# PATTERN 3 — THE LINE JOINING TWO POINTS

> **SHORTCUT:** Subtract, then divide by the distance. Do not even write "direction ratios"
> on the paper — just subtract in your head.

### Q12
The direction cosines of the line joining `(1, 2, 3)` and `(3, 4, 5)` are
(A) `(2, 2, 2)`  (B) `(1/sqrt3, 1/sqrt3, 1/sqrt3)`  (C) `(1/3, 1/3, 1/3)`  (D) `(2/3, 2/3, 2/3)`

**ANSWER: (B)**
```
  differences = (2, 2, 2)  ->  simplify to (1, 1, 1)  ->  r = sqrt3
  CHECK: 3/3 = 1        correct
```

---

### Q13
The direction cosines of the line joining `(0, 1, 2)` and `(3, 5, 14)` are
(A) `(3, 4, 12)`  (B) `(3/13, 4/13, 12/13)`  (C) `(3/19, 4/19, 12/19)`  (D) `(1/3, 1/4, 1/12)`

**ANSWER: (B)**
```
  differences = (3, 4, 12) ,  r = sqrt(9+16+144) = sqrt169 = 13
  CHECK: 169/169 = 1        correct
```

---

### Q14
The direction cosines of `OP` where `O` is the origin and `P` is `(2, 3, -6)` are
(A) `(2/7, 3/7, -6/7)`  (B) `(2/11, 3/11, -6/11)`  (C) `(2, 3, -6)`  (D) `(1/2, 1/3, -1/6)`

**ANSWER: (A)** — `OP = sqrt(4+9+36) = 7`; check `49/49 = 1`.

---

### Q15
The direction cosines of the line joining `(2, -1, 3)` and `(5, 3, 3)` are
(A) `(3/5, 4/5, 0)`  (B) `(3, 4, 0)`  (C) `(3/7, 4/7, 0)`  (D) `(0, 3/5, 4/5)`

**ANSWER: (A)** — differences `(3, 4, 0)`, `r = 5`. Note `n = 0`: the line is parallel to
the xy-plane.

---

# PATTERN 4 — THE ANGLE BETWEEN TWO LINES

> **SHORTCUT:** Multiply matching entries, add, divide by the two lengths. If the numerator
> comes out `0`, the answer is `90` degrees and you are done in five seconds.

### Q16
The angle between the lines with direction ratios `(1, 1, 0)` and `(0, 1, 1)` is
(A) `30` deg  (B) `45` deg  (C) `60` deg  (D) `90` deg

**ANSWER: (C)**
```
  numerator = 0 + 1 + 0 = 1
  lengths   = sqrt2 and sqrt2
  cos theta = 1/2   ->   theta = 60 degrees
```

---

### Q17
The angle between the lines with direction ratios `(1, 1, 2)` and
`(sqrt3 - 1, -sqrt3 - 1, 4)` is
(A) `30` deg  (B) `45` deg  (C) `60` deg  (D) `90` deg

**ANSWER: (C)**
```
  numerator = (sqrt3-1) + (-sqrt3-1) + 8 = 6
  lengths   = sqrt6  and  sqrt(4-2sqrt3 + 4+2sqrt3 + 16) = sqrt24 = 2sqrt6
  cos theta = 6/12 = 1/2   ->   60 degrees
```
> **SHORTCUT:** Whenever surds appear in the direction ratios, they cancel. Add the
> numerator terms first and the `sqrt3`s vanish.

---

### Q18
The angle between the lines with direction ratios `(a, b, c)` and `(b - c, c - a, a - b)` is
(A) `0`  (B) `30` deg  (C) `60` deg  (D) `90` deg

**ANSWER: (D)**
```
  numerator = a(b-c) + b(c-a) + c(a-b)
            = ab - ac + bc - ab + ca - cb
            = 0

  So the lines are perpendicular.
```
> **SHORTCUT:** A cyclic-looking second triple like this almost always dots to zero.
> Expand the numerator only; never touch the denominators.

---

### Q19
The angle between the lines with direction ratios `(4, -3, 5)` and `(3, 4, 5)` is
(A) `30` deg  (B) `45` deg  (C) `60` deg  (D) `90` deg

**ANSWER: (C)** — numerator `12 - 12 + 25 = 25`; lengths `sqrt50` and `sqrt50`;
`cos = 25/50 = 1/2`.

---

### Q20
The angle between the line with direction ratios `(1, 1, 1)` and the x-axis is
(A) `cos^-1(1/3)`  (B) `cos^-1(1/sqrt3)`  (C) `45` deg  (D) `60` deg

**ANSWER: (B)**
```
  x-axis has d.c.'s (1, 0, 0).
  numerator = 1 ; lengths sqrt3 and 1 ; cos theta = 1/sqrt3
```

---

### Q21
If the angle between the lines with direction ratios `(1, 2, 1)` and `(2, 3, -1)` is
`theta`, then `sin theta =`
(A) `sqrt21/6`  (B) `sqrt15/6`  (C) `7/6`  (D) `1/6`

**ANSWER: (B)**
```
  cos theta = 7 / (sqrt6 . sqrt14) = 7/sqrt84 = sqrt21/6
  sin^2 = 1 - 21/36 = 15/36   ->   sin theta = sqrt15/6
```
> **SHORTCUT:** Find `cos` first (it is easier), then use `sin^2 = 1 - cos^2`. Never build
> the three cross terms unless the question forces you to.

---

# PATTERN 5 — PERPENDICULAR AND PARALLEL CONDITIONS

> **SHORTCUT:** Perpendicular means the dot is zero — one equation, solve for the unknown.
> Parallel means one triple is `k` times the other — find `k` from the easiest pair.

### Q22
If the lines with direction ratios `(1, -2, 3)` and `(2, k, -1)` are perpendicular, then
`k =`
(A) `-1/2`  (B) `1/2`  (C) `-2`  (D) `2`

**ANSWER: (A)**
```
  (1)(2) + (-2)(k) + (3)(-1) = 0
       2 - 2k - 3 = 0
          -2k = 1
            k = -1/2

  CHECK: 2 + (-2)(-1/2) + (-3) = 2 + 1 - 3 = 0        correct
```

---

### Q23
If the lines with direction ratios `(3, -2, 0)` and `(k, 4, 0)` are parallel, then `k =`
(A) `6`  (B) `-6`  (C) `3`  (D) `-3`

**ANSWER: (B)**
```
  4 / (-2) = -2 , so the second triple is -2 times the first:
      k = -2 x 3 = -6
  CHECK: (3, -2, 0) x (-2) = (-6, 4, 0)        correct
```

---

### Q24
The line joining `(1, 2, 3)` and `(3, 1, 4)` is perpendicular to the line joining
`(2, 0, 1)` and
(A) `(3, 2, 1)`  (B) `(0, 1, 2)`  (C) `(1, 1, 1)`  (D) `(4, 4, 4)`

**ANSWER: (A)**
```
  First line d.r.'s = (2, -1, 1).
  Test (A): d.r.'s = (3-2, 2-0, 1-1) = (1, 2, 0)
            dot = 2 - 2 + 0 = 0        correct
```

---

### Q25
A line perpendicular to the z-axis must have
(A) `l = 0`  (B) `m = 0`  (C) `n = 0`  (D) `l = m = n`

**ANSWER: (C)** — z-axis is `(0,0,1)`; the dot is just `n`, so `n = 0`.

---

# PATTERN 6 — PERPENDICULAR TO TWO GIVEN LINES (CROSS PRODUCT)

> **SHORTCUT:** `bc`, `ca`, `ab` — the letters CYCLE. Then check your answer against the
> options by dotting with ONE of the given triples; it must give 0. That is usually enough
> to eliminate three options in ten seconds.

### Q26
The direction ratios of a line perpendicular to both the lines with direction ratios
`(2, 3, 4)` and `(1, -2, 1)` are
(A) `(11, 2, -7)`  (B) `(11, -2, 7)`  (C) `(2, 11, -7)`  (D) `(7, 2, -11)`

**ANSWER: (A)**
```
  a = (3)(1) - (4)(-2) = 3 + 8  = 11
  b = (4)(1) - (1)(2)  = 4 - 2  =  2
  c = (2)(-2) - (3)(1) = -4 - 3 = -7

  CHECK: (2,3,4).(11,2,-7)  = 22 + 6 - 28 = 0        correct
         (1,-2,1).(11,2,-7) = 11 - 4 - 7  = 0        correct
```

---

### Q27
The direction ratios of a line perpendicular to both `(1, 2, -1)` and `(2, -1, 3)` are
(A) `(1, 1, 1)`  (B) `(1, -1, -1)`  (C) `(5, 5, 5)`  (D) `(1, -5, -1)`

**ANSWER: (B)**
```
  a = (2)(3)  - (-1)(-1) = 6 - 1  =  5
  b = (-1)(2) - (3)(1)   = -2 - 3 = -5
  c = (1)(-1) - (2)(2)   = -1 - 4 = -5

  (5, -5, -5)  ->  divide by 5  ->  (1, -1, -1)

  CHECK: (1,2,-1).(1,-1,-1) = 1 - 2 + 1 = 0        correct
         (2,-1,3).(1,-1,-1) = 2 + 1 - 3 = 0        correct
```
> **SHORTCUT:** Option (A) is the same triple with the wrong signs. Always run the dot-check
> before you answer — sign traps are the whole point of this pattern.

---

### Q28
The direction cosines of a line perpendicular to both `(1, -1, 1)` and `(2, 1, -1)` are
(A) `(0, 1, 1)`  (B) `(0, 1/sqrt2, 1/sqrt2)`  (C) `(1/sqrt2, 0, 1/sqrt2)`  (D) `(0, 3, 3)`

**ANSWER: (B)**
```
  cross = ( 1-1 , 2+1 , 1+2 ) = (0, 3, 3)  ->  (0, 1, 1)  ->  r = sqrt2
  d.c.'s = (0, 1/sqrt2, 1/sqrt2)
  CHECK: 0 + 1/2 + 1/2 = 1        correct
  (A) and (D) are RATIOS, not cosines - the l^2+m^2+n^2 test kills them.
```

---

### Q29
If the cross-multiplication of two sets of direction ratios gives `(0, 0, 0)`, the two
lines are
(A) perpendicular  (B) parallel  (C) skew  (D) coincident with an axis

**ANSWER: (B)** — a zero cross product means the two directions are proportional.

---

# PATTERN 7 — COLLINEAR POINTS

> **SHORTCUT:** Subtract to get two triples and look at them. If one is visibly a multiple
> of the other, they are collinear. You do not need to compute any distance.

### Q30
The points `(1, 2, 3)`, `(2, 3, 4)` and `(3, 4, 5)` are
(A) collinear  (B) vertices of a right triangle  (C) vertices of an equilateral triangle
(D) not coplanar

**ANSWER: (A)** — both `AB` and `BC` are `(1, 1, 1)`.

---

### Q31
The points `(2, -1, 3)`, `(3, -5, 1)` and `(-1, 11, 9)` are
(A) collinear  (B) vertices of an isosceles triangle  (C) vertices of a right triangle
(D) coincident

**ANSWER: (A)**
```
  AB = (1, -4, -2)
  BC = (-4, 16, 8) = -4 (1, -4, -2)        proportional  ->  collinear
```

---

### Q32
If `(1, 2, 3)`, `(4, 0, 4)` and `(-2, k, 2)` are collinear then `k =`
(A) `2`  (B) `4`  (C) `-4`  (D) `8`

**ANSWER: (B)**
```
  AB = (3, -2, 1) ,  BC = (-6, k, -2)
  -6/3 = -2 and -2/1 = -2 , so k/(-2) = -2  ->  k = 4
```

---

# PATTERN 8 — PROJECTIONS

> **SHORTCUT:** Convert the projecting line to direction COSINES first, always. Then it is
> one line of multiply-and-add.

### Q33
The projection of the segment joining `(2, 3, 0)` and `(0, 4, 5)` on the line with
direction ratios `(6, 2, 3)` is
(A) `5/7`  (B) `7/5`  (C) `5`  (D) `35`

**ANSWER: (A)**
```
  r = sqrt(36 + 4 + 9) = 7 ,  d.c.'s = (6/7, 2/7, 3/7)
  CHECK: 49/49 = 1        correct

  differences = (0-2, 4-3, 5-0) = (-2, 1, 5)

  projection = (6/7)(-2) + (2/7)(1) + (3/7)(5)
             = (-12 + 2 + 15)/7
             = 5/7
```
Option (C) is what you get if you forget to divide by `r` — the classic trap.

---

### Q34
The projections of a line segment on the coordinate axes are `3, 4, 12`. Its length is
(A) `19`  (B) `13`  (C) `sqrt19`  (D) `12`

**ANSWER: (B)** — `sqrt(9 + 16 + 144) = sqrt169 = 13`.

---

### Q35
The projection of a segment on the x-axis is
(A) `l . AB`  (B) `x2 - x1`  (C) `AB cos alpha` where `alpha` is with the y-axis  (D) `AB`

**ANSWER: (B)** — and (A) is the same thing written differently, since `l = (x2-x1)/AB`;
the standard stated answer is `x2 - x1`.

---

# PATTERN 9 — TWO CONDITIONS ON l, m, n

> **SHORTCUT:** Substitute the linear one into the quadratic one, factorise, read off two
> triples, then dot them. In an MCQ the answer is nearly always `60` deg or `90` deg.

### Q36
The angle between the two lines whose direction cosines satisfy `l + m + n = 0` and
`l^2 + m^2 - n^2 = 0` is
(A) `30` deg  (B) `45` deg  (C) `60` deg  (D) `90` deg

**ANSWER: (C)**
```
  n = -(l+m)  ->  l^2 + m^2 - (l+m)^2 = -2lm = 0
  l = 0 -> (0, 1, -1) ;  m = 0 -> (1, 0, -1)
  cos theta = 1 / (sqrt2 . sqrt2) = 1/2   ->   60 degrees
```

---

### Q37
The lines whose direction cosines satisfy `2l + 2m - n = 0` and `mn + nl + lm = 0` are
(A) parallel  (B) perpendicular  (C) inclined at `60` deg  (D) inclined at `45` deg

**ANSWER: (B)**
```
  n = 2l + 2m  ->  2l^2 + 5lm + 2m^2 = 0  ->  (2l + m)(l + 2m) = 0
  gives (1, -2, -2) and (-2, 1, -2)
  dot = -2 - 2 + 4 = 0        perpendicular
```

---

# PATTERN 10 — THE CUBE

> **SHORTCUT:** Put the cube at the origin with edges along the axes. The diagonals are
> `(1,1,1)`, `(-1,1,1)`, `(1,-1,1)`, `(1,1,-1)`. Everything follows in one line.

### Q38
The angle between any two diagonals of a cube is
(A) `cos^-1(1/2)`  (B) `cos^-1(1/3)`  (C) `cos^-1(1/sqrt3)`  (D) `cos^-1(2/3)`

**ANSWER: (B)**
```
  (1,1,1).(-1,1,1) = -1 + 1 + 1 = 1 ,  lengths sqrt3 and sqrt3
  cos theta = 1/3        (about 70 deg 32 min)
```

---

### Q39
The angle between a diagonal of a cube and an edge meeting it is
(A) `cos^-1(1/3)`  (B) `cos^-1(1/sqrt3)`  (C) `45` deg  (D) `60` deg

**ANSWER: (B)**
```
  Diagonal (1,1,1), edge (1,0,0).
  cos theta = 1 / (sqrt3 . 1) = 1/sqrt3        (about 54 deg 44 min)
```

---

### Q40
The angle between a diagonal of a cube and a diagonal of one of its faces meeting it is
(A) `cos^-1(1/3)`  (B) `cos^-1(2/sqrt6)`  (C) `30` deg  (D) `45` deg

**ANSWER: (B)**
```
  Cube diagonal (1,1,1) ; face diagonal in the xy-face (1,1,0).
  numerator = 1 + 1 + 0 = 2
  lengths   = sqrt3 and sqrt2
  cos theta = 2 / sqrt6        (about 35 deg 16 min)
```

---

### Q41
If a line makes angles `alpha, beta, gamma, delta` with the four diagonals of a cube, then
`cos^2 alpha + cos^2 beta + cos^2 gamma + cos^2 delta =`
(A) `1`  (B) `4/3`  (C) `2`  (D) `8/3`

**ANSWER: (B)**
```
  Diagonals have d.c.'s (+/-1, +/-1, +/-1)/sqrt3 in the four sign patterns

      (1,1,1) , (-1,1,1) , (1,-1,1) , (1,1,-1)   all over sqrt3

  With the line's d.c.'s (l, m, n) :

      cos a = (l+m+n)/sqrt3     cos b = (-l+m+n)/sqrt3
      cos c = (l-m+n)/sqrt3     cos d = (l+m-n)/sqrt3

  Squaring and adding, every cross term (lm, mn, nl) cancels because
  each appears twice with + and twice with - . What remains is

      4 (l^2 + m^2 + n^2) / 3  =  4/3
```
> **SHORTCUT:** Remember the pair of results: `cos^2 sum = 4/3`, and therefore
> `sin^2 sum = 4 - 4/3 = 8/3`. Both are asked.

---

### Q42
For the same four angles, `sin^2 alpha + sin^2 beta + sin^2 gamma + sin^2 delta =`
(A) `4/3`  (B) `8/3`  (C) `2`  (D) `3`

**ANSWER: (B)** — `4 - 4/3 = 8/3`.

---

# PATTERN 11 — LINES AND THE COORDINATE PLANES

> **SHORTCUT:** LINE vs LINE uses `cos`. LINE vs PLANE uses `sin`. For a coordinate plane,
> use the letter that is MISSING from the plane's name.

### Q43
The angle made by the line with direction ratios `(1, 2, 2)` with the xy-plane is
(A) `cos^-1(2/3)`  (B) `sin^-1(2/3)`  (C) `sin^-1(1/3)`  (D) `45` deg

**ANSWER: (B)**
```
  d.c.'s = (1/3, 2/3, 2/3)        CHECK: 9/9 = 1   correct
  xy-plane is missing z, so use n = 2/3 , with SINE:
      sin phi = 2/3   ->   phi = sin^-1(2/3)
```

---

### Q44
A line lies in the zx-plane. Then its direction cosines satisfy
(A) `l = 0`  (B) `m = 0`  (C) `n = 0`  (D) `l = n`

**ANSWER: (B)** — the zx-plane is `y = 0`, so the line has no y-component.

---

### Q45
The direction cosines of a line perpendicular to the xy-plane are
(A) `(1, 0, 0)`  (B) `(0, 1, 0)`  (C) `(0, 0, 1)`  (D) `(1/sqrt3, 1/sqrt3, 1/sqrt3)`

**ANSWER: (C)** — perpendicular to the xy-plane means along the z-axis.

---

### Q46
For a line with direction cosines `(l, m, n)`, if `p`, `q`, `s` are the angles it makes with
the yz, zx and xy planes, then `sin^2 p + sin^2 q + sin^2 s =`
(A) `1`  (B) `2`  (C) `3`  (D) `0`

**ANSWER: (A)** — the three sines are `|l|`, `|m|`, `|n|`, and their squares add to 1.

> **TRAP:** Compare with Q5, where the answer was **2**. Angles with the **axes** give 2
> (they are cosines). Angles with the **planes** give 1 (they are sines). Two questions,
> almost identical wording, opposite answers.

---

# SPEED RULES FOR THE EXAM HALL

```
  +-------------------------------------+-------------------------------------+
  |   IF YOU SEE THIS ...               |   DO THIS IMMEDIATELY               |
  +-------------------------------------+-------------------------------------+
  |  "Find the direction cosines"       |  Square-and-add each option.        |
  |   with four options given           |  Kill every one that is not 1.      |
  +-------------------------------------+-------------------------------------+
  |  Direction RATIOS given, COSINES    |  Divide by sqrt(a^2+b^2+c^2).       |
  |   wanted                            |  Look for 3, 5, 7 or 13 first.      |
  +-------------------------------------+-------------------------------------+
  |  Two angles given, third wanted     |  n^2 = 1 - l^2 - m^2 . Answer has   |
  |                                     |  TWO angles: theta and 180-theta.   |
  +-------------------------------------+-------------------------------------+
  |  "sin^2 a + sin^2 b + sin^2 c"      |  2 . No working.                    |
  |  (angles with the AXES)             |                                     |
  +-------------------------------------+-------------------------------------+
  |  "sin^2 of the angles with the      |  1 . No working. Do not confuse     |
  |   three PLANES"                     |  it with the line above.            |
  +-------------------------------------+-------------------------------------+
  |  "cos 2a + cos 2b + cos 2c"         |  -1 . No working.                   |
  +-------------------------------------+-------------------------------------+
  |  Two points given                   |  SUBTRACT. Then divide by the       |
  |                                     |  distance if cosines are wanted.    |
  +-------------------------------------+-------------------------------------+
  |  "Angle between the lines ..."      |  Multiply matching entries and add. |
  |                                     |  If it is 0, answer 90 and move on. |
  +-------------------------------------+-------------------------------------+
  |  Surds like sqrt3 - 1 in the d.r.'s |  Add the numerator terms first.     |
  |                                     |  The surds cancel. Answer is 60.    |
  +-------------------------------------+-------------------------------------+
  |  "Find k so the lines are           |  One equation: a1a2+b1b2+c1c2 = 0.  |
  |   perpendicular"                    |  Solve. Substitute back to check.   |
  +-------------------------------------+-------------------------------------+
  |  "Find k so the lines are parallel" |  Find the scale factor from the     |
  |                                     |  easiest pair, apply it to the rest.|
  +-------------------------------------+-------------------------------------+
  |  "Perpendicular to BOTH lines"      |  Cross-multiply: bc, ca, ab.        |
  |                                     |  Then dot-check with ONE line to    |
  |                                     |  eliminate the sign-trap options.   |
  +-------------------------------------+-------------------------------------+
  |  Three points, "collinear?"         |  Subtract twice. Is one triple a    |
  |                                     |  multiple of the other? Done.       |
  +-------------------------------------+-------------------------------------+
  |  "Projection on the line ..."       |  Convert that line to COSINES       |
  |                                     |  first. Forgetting this gives an    |
  |                                     |  answer r times too big - and that  |
  |                                     |  wrong value is always an option.   |
  +-------------------------------------+-------------------------------------+
  |  l + m + n = 0 plus a quadratic     |  Substitute, factorise, get two     |
  |                                     |  triples, dot them. Answer is       |
  |                                     |  almost always 60 or 90 degrees.    |
  +-------------------------------------+-------------------------------------+
  |  Anything about a CUBE              |  Diagonals (1,1,1), (-1,1,1),       |
  |                                     |  (1,-1,1), (1,1,-1). Edges are the  |
  |                                     |  axes. Then one dot product.        |
  +-------------------------------------+-------------------------------------+
  |  A line and a PLANE                 |  SIN, not COS.                      |
  +-------------------------------------+-------------------------------------+
  |  You are stuck, EAPCET              |  GUESS. No negative marking.        |
  |                                     |  Prefer the option that passes      |
  |                                     |  l^2+m^2+n^2 = 1.                   |
  +-------------------------------------+-------------------------------------+
  |  You are stuck, JEE Main            |  SKIP. -1 per wrong answer.         |
  +-------------------------------------+-------------------------------------+
```

## The 30-second revision before you enter the hall

```
     l^2 + m^2 + n^2 = 1            <- test every option with this

     d.r. -> d.c. : divide by sqrt(a^2 + b^2 + c^2)

     cos theta = l1l2 + m1m2 + n1n2      (perp when it is 0)

     cross:  b1c2-b2c1 , c1a2-c2a1 , a1b2-a2b1     (bc, ca, ab)

     AXES  -> sin^2 sum = 2       PLANES -> sin^2 sum = 1

     cube: diagonals cos^-1(1/3) , diagonal-to-edge cos^-1(1/sqrt3)
```
