# Trigonometric Equations — JEE Main / AP EAPCET / TG EAPCET

All multiple choice. In the entrance exams this chapter almost never appears
alone — it appears **welded onto Chapter 6**. A transformation identity is
used to factorise, and then a general solution finishes it off.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 wrong       |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from this chapter:**

```
  AP EAPCET  (Maths, 80 questions)  ->  1 to 2
  TG EAPCET  (Maths, 80 questions)  ->  1 to 2
  JEE Main   (Maths, 25 questions)  ->  0 to 1  (usually a "number of
                                                 solutions in an interval"
                                                 question)
```

> Questions are grouped by **PATTERN**, not by year, because the pattern is
> what repeats. Verify against official papers before the exam.

## THE MCQ SUPER-WEAPON

```
  +----------------------------------------------------------------+
  |                                                                |
  |  In an MCQ you do NOT have to solve the equation.              |
  |                                                                |
  |  You can TEST the options. Put n = 0 into each option, get a   |
  |  number, and substitute it into the equation.                  |
  |                                                                |
  |  Wrong options usually die on the first try. This turns a      |
  |  four-minute algebra problem into a forty-second arithmetic    |
  |  problem.                                                      |
  |                                                                |
  |  Even faster on "number of solutions" questions: sketch the    |
  |  two graphs and COUNT the crossings.                           |
  |                                                                |
  +----------------------------------------------------------------+
```

---

# PATTERN 1 — STRAIGHT GENERAL SOLUTIONS

### Q1
The general solution of `sin theta = - 1/2` is

(a) n pi + (-1)^n pi/6 &nbsp;&nbsp; (b) n pi - (-1)^n pi/6 &nbsp;&nbsp;
(c) 2 n pi +- pi/6 &nbsp;&nbsp; (d) n pi +- pi/6

**ANSWER: (b)**
```
  -1/2 = sin( -pi/6 ) , so alpha = -pi/6 .

  theta = n pi + (-1)^n ( -pi/6 ) = n pi - (-1)^n pi/6 .

  Quick test: n = 0 gives -30 deg , sin(-30) = -1/2 . Correct.
  Option (a) with n = 0 gives +30 deg , sin30 = +1/2 . Wrong.
```

> **SHORTCUT:** put `n = 0` in each option. The one that gives the correct
> principal value wins in five seconds.

---

### Q2
The general solution of `cos theta = - 1/2` is

(a) 2 n pi +- pi/3 &nbsp;&nbsp; (b) n pi +- pi/3 &nbsp;&nbsp;
(c) 2 n pi +- 2 pi/3 &nbsp;&nbsp; (d) n pi + (-1)^n 2pi/3

**ANSWER: (c)**
```
  Cosine is negative, principal range [0, pi], so alpha is in quadrant II:
  alpha = 2 pi / 3 (120 deg).

  theta = 2 n pi  +-  2 pi / 3 .
```

---

### Q3
The general solution of `tan theta = - 1 / sqrt3` is

(a) n pi + pi/6 &nbsp;&nbsp; (b) n pi - pi/6 &nbsp;&nbsp;
(c) 2 n pi +- pi/6 &nbsp;&nbsp; (d) n pi +- pi/6

**ANSWER: (b)**
```
  -1/sqrt3 = tan(-pi/6) , and  tan th = tan al  =>  th = n pi + al .

  theta = n pi - pi/6 .
```

---

### Q4
The general solution of `sin 2 theta = 1` is

(a) n pi + pi/4 &nbsp;&nbsp; (b) n pi/2 + pi/4 &nbsp;&nbsp;
(c) 2 n pi + pi/2 &nbsp;&nbsp; (d) n pi +- pi/4

**ANSWER: (a)**
```
  sin 2 theta = 1  ->  2 theta = 2 n pi + pi/2  ->  theta = n pi + pi/4 .

  Test n = 1: theta = 225 deg , sin450 = sin90 = 1 . Correct.
```

> **SHORTCUT:** for `sin X = 1` never use the `(-1)^n` form. Go straight to
> `X = 2 n pi + pi/2`.

---

### Q5
If `cos^2 theta = 1/4`, then `theta` equals

(a) n pi +- pi/6 &nbsp;&nbsp; (b) n pi +- pi/3 &nbsp;&nbsp;
(c) 2 n pi +- pi/3 &nbsp;&nbsp; (d) n pi + (-1)^n pi/3

**ANSWER: (b)**
```
  cos^2 theta = 1/4 = ( 1/2 )^2 = cos^2 ( pi/3 )

  A SQUARE always gives  theta = n pi +- alpha .

  theta = n pi +- pi/3 .
```

> **SHORTCUT:** the instant you see a SQUARE, the answer has the shape
> `n pi +- alpha`. Two of the four options usually die immediately.

---

### Q6
The general solution of `cos 3 theta = 0` is

(a) (2n+1) pi/2 &nbsp;&nbsp; (b) (2n+1) pi/6 &nbsp;&nbsp;
(c) n pi/3 &nbsp;&nbsp; (d) (2n+1) pi/3

**ANSWER: (b)**
```
  3 theta = (2n + 1) pi / 2    ->    theta = (2n + 1) pi / 6 .

  Test n = 0: theta = 30 deg , cos90 = 0 . Correct.
```

---

# PATTERN 2 — QUADRATIC IN sin / cos / tan

### Q7
The general solution of `2 sin^2 x - 3 sin x + 1 = 0` is

(a) n pi + (-1)^n pi/6 only &nbsp;&nbsp;
(b) 2 n pi + pi/2 only &nbsp;&nbsp;
(c) n pi + (-1)^n pi/6 or 2 n pi + pi/2 &nbsp;&nbsp;
(d) n pi +- pi/6

**ANSWER: (c)**
```
  ( 2 sin x - 1 )( sin x - 1 ) = 0   ->   sin x = 1/2  or  sin x = 1

  sin x = 1/2  ->  x = n pi + (-1)^n pi/6
  sin x = 1    ->  x = 2 n pi + pi/2

  BOTH families are needed.
```

> **SHORTCUT:** a quadratic gives TWO roots, so the answer normally has TWO
> families. An option showing only one family is usually a trap.

---

### Q8
The number of solutions of `2 cos^2 x - 5 cos x + 2 = 0` in `[0, 2 pi]` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
  ( 2 cos x - 1 )( cos x - 2 ) = 0

  cos x = 2 is impossible ( |cos| <= 1 ) - REJECT.

  cos x = 1/2  ->  x = pi/3 (60 deg) and 5 pi/3 (300 deg) in [0, 2pi].

  TWO solutions.
```

---

### Q9
If `tan^2 x - ( 1 + sqrt3 ) tan x + sqrt3 = 0` and `0 < x < pi/2`, then `x` is

(a) pi/6 or pi/4 &nbsp;&nbsp; (b) pi/4 or pi/3 &nbsp;&nbsp;
(c) pi/3 or pi/2 &nbsp;&nbsp; (d) pi/6 or pi/3

**ANSWER: (b)**
```
  The roots multiply to sqrt3 and add to 1 + sqrt3 : they are 1 and sqrt3.

  ( tan x - 1 )( tan x - sqrt3 ) = 0

  tan x = 1     ->  x = pi/4
  tan x = sqrt3 ->  x = pi/3
```

---

### Q10
The number of solutions of `2 sin^2 x + 5 sin x - 3 = 0` in `[0, 3 pi]` is

(a) 2 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 6

**ANSWER: (c)**
```
  ( 2 sin x - 1 )( sin x + 3 ) = 0 .  sin x = -3 rejected.

  sin x = 1/2 , and 3 pi = 540 degrees:

     30 , 150 , 390 , 510        ->  FOUR solutions.
```

> **SHORTCUT:** for `sin x = k` on `[0, 2 pi]` there are 2 solutions; each
> extra `2 pi` adds 2 more; a half-turn `pi` adds 1 more on average. Sketch
> the line `y = k` across the wave and count crossings.

---

### Q11
If `2 sin^2 theta = 3 cos theta`, the number of values of `theta` in
`[0, 2 pi]` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
  2 ( 1 - cos^2 th ) = 3 cos th
  2 cos^2 th + 3 cos th - 2 = 0
  ( 2 cos th - 1 )( cos th + 2 ) = 0

  cos th = -2  REJECT .    cos th = 1/2  ->  60 deg and 300 deg .

  TWO solutions.
```

---

### Q12
The general solution of `sec^2 theta = 4/3` is

(a) n pi +- pi/6 &nbsp;&nbsp; (b) n pi +- pi/3 &nbsp;&nbsp;
(c) 2 n pi +- pi/6 &nbsp;&nbsp; (d) n pi + (-1)^n pi/6

**ANSWER: (a)**
```
  sec^2 th = 4/3   ->   cos^2 th = 3/4 = ( sqrt3/2 )^2 = cos^2 ( pi/6 )

  theta = n pi +- pi/6 .
```

---

# PATTERN 3 — a cos theta + b sin theta = c

### Q13
The maximum value of `5 sin theta + 12 cos theta` is

(a) 12 &nbsp;&nbsp; (b) 13 &nbsp;&nbsp; (c) 17 &nbsp;&nbsp; (d) 7

**ANSWER: (b)**
```
  Maximum = sqrt( a^2 + b^2 ) = sqrt( 25 + 144 ) = sqrt169 = 13 .
```

> **SHORTCUT:** learn the Pythagorean triples 3-4-5, 5-12-13, 8-15-17,
> 7-24-25. Exam setters use them constantly.

---

### Q14
The number of solutions of `3 cos theta + 4 sin theta = 6` is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) infinitely many

**ANSWER: (a)**
```
  sqrt( 9 + 16 ) = 5 , so the left side always lies in [-5, 5] .

  6 is outside that range.  NO SOLUTION.
```

> **SHORTCUT:** the FIRST thing to compute in this pattern is
> `sqrt(a^2 + b^2)`. If `|c|` beats it, the answer is zero and you are done.

---

### Q15
`cos theta - sin theta = k` has a solution if and only if

(a) k in [-1, 1] &nbsp;&nbsp; (b) k in [-2, 2] &nbsp;&nbsp;
(c) k in [-sqrt2, sqrt2] &nbsp;&nbsp; (d) all real k

**ANSWER: (c)**
```
  sqrt( 1^2 + (-1)^2 ) = sqrt2 .

  So  - sqrt2  <=  cos th - sin th  <=  sqrt2 .
```

---

### Q16
The general solution of `sin x + sqrt3 cos x = 2` is

(a) 2 n pi + pi/6 &nbsp;&nbsp; (b) 2 n pi + pi/3 &nbsp;&nbsp;
(c) n pi + pi/6 &nbsp;&nbsp; (d) 2 n pi +- pi/6

**ANSWER: (a)**
```
  r = sqrt( 1 + 3 ) = 2 , and c = 2 = r . This is the MAXIMUM, so there
  is only one family.

  Divide by 2:  (1/2) sin x + (sqrt3/2) cos x = 1
                sin x cos(pi/3) + cos x sin(pi/3) = 1
                sin( x + pi/3 ) = 1

  x + pi/3 = 2 n pi + pi/2   ->   x = 2 n pi + pi/6 .

  Test n = 0: x = 30 deg .  sin30 + sqrt3 cos30 = 0.5 + 1.5 = 2 . Correct.
```

> **SHORTCUT:** when `c` exactly equals `sqrt(a^2+b^2)`, the equation is at
> its maximum, so the `+-` collapses and there is only ONE family.

---

### Q17
The general solution of `cos theta + sin theta = 1` is

(a) 2 n pi or 2 n pi + pi/2 &nbsp;&nbsp; (b) n pi/2 &nbsp;&nbsp;
(c) n pi + pi/4 &nbsp;&nbsp; (d) 2 n pi +- pi/4

**ANSWER: (a)**
```
  Divide by sqrt2:  sin( theta + pi/4 ) = 1/sqrt2 = sin(pi/4)

     theta + pi/4 = n pi + (-1)^n pi/4

     n even -> theta = 2 m pi
     n odd  -> theta = 2 m pi + pi/2

  Option (b) is the classic trap: it comes from SQUARING, and it wrongly
  includes theta = pi (where cos + sin = -1).
```

---

# PATTERN 4 — FACTORISE / SUM TO PRODUCT

### Q18
The number of solutions of `sin 2 theta = cos theta` in `[0, 2 pi]` is

(a) 2 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 6

**ANSWER: (c)**
```
  2 sin th cos th - cos th = 0
  cos th ( 2 sin th - 1 ) = 0

  cos th = 0    ->  90 deg , 270 deg
  sin th = 1/2  ->  30 deg , 150 deg

  FOUR solutions.

  (If you had CANCELLED cos th you would have answered 2 and lost the mark.)
```

> **SHORTCUT:** every time you see the same ratio on both sides, the
> answer count is bigger than you think. Factorise, never cancel.

---

### Q19
The general solution of `sin theta + sin 3 theta + sin 5 theta = 0` is

(a) n pi/3 or n pi +- pi/3 &nbsp;&nbsp; (b) n pi/3 only &nbsp;&nbsp;
(c) n pi/2 or 2 n pi +- 2pi/3 &nbsp;&nbsp; (d) n pi +- pi/6

**ANSWER: (a)**
```
  sin 5th + sin th = 2 sin 3th cos 2th

  So  sin 3th ( 2 cos 2th + 1 ) = 0

  sin 3th = 0     ->  theta = n pi / 3
  cos 2th = -1/2  ->  2 theta = 2 n pi +- 2pi/3  ->  theta = n pi +- pi/3
```

---

### Q20
The general solution of `cos 3 theta = cos 2 theta` is

(a) 2 n pi &nbsp;&nbsp; (b) 2 n pi / 5 &nbsp;&nbsp;
(c) n pi / 5 &nbsp;&nbsp; (d) (2n+1) pi/5

**ANSWER: (b)**
```
  cos X = cos Y  ->  X = 2 n pi +- Y

  3 theta = 2 n pi + 2 theta   ->   theta = 2 n pi
  3 theta = 2 n pi - 2 theta   ->   theta = 2 n pi / 5

  The second family already contains the first (take n a multiple of 5),
  so the complete answer is theta = 2 n pi / 5 .

  Test n = 1: theta = 72 deg . cos216 = -0.8090 , cos144 = -0.8090 . Correct.
```

---

### Q21
The general solution of `tan theta . tan 2 theta = 1` is

(a) n pi + pi/6 &nbsp;&nbsp; (b) (2n + 1) pi / 6 &nbsp;&nbsp;
(c) n pi/3 &nbsp;&nbsp; (d) (2n+1) pi/3

**ANSWER: (b)**
```
  tan 2th = 1 / tan th = cot th = tan( pi/2 - th )

  2 theta = n pi + pi/2 - theta
  3 theta = n pi + pi/2 = (2n + 1) pi / 2
  theta   = (2n + 1) pi / 6

  Test n = 0: theta = 30 deg . tan30 tan60 = (0.5774)(1.7321) = 1 . Correct.
```

---

### Q22
The number of roots of `cos x + cos 2x + cos 3x = 0` in `[0, 2 pi]` is

(a) 4 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 6 &nbsp;&nbsp; (d) 8

**ANSWER: (c)**
```
  cos 3x + cos x = 2 cos 2x cos x , so  cos 2x ( 2 cos x + 1 ) = 0 .

  cos 2x = 0   ->  2x = 90, 270, 450, 630   ->  x = 45, 135, 225, 315
  cos x = -1/2 ->  x = 120, 240

  SIX roots.
```

---

### Q23
The general solution of
`sin x - 3 sin 2x + sin 3x = cos x - 3 cos 2x + cos 3x` is

(a) n pi/2 + pi/8 &nbsp;&nbsp; (b) n pi + pi/8 &nbsp;&nbsp;
(c) n pi/2 + pi/4 &nbsp;&nbsp; (d) 2 n pi + pi/8

**ANSWER: (a)**
```
  LHS = sin 2x ( 2 cos x - 3 )      [ since sin3x + sinx = 2 sin2x cos x ]
  RHS = cos 2x ( 2 cos x - 3 )      [ since cos3x + cosx = 2 cos2x cos x ]

  ( 2 cos x - 3 )( sin 2x - cos 2x ) = 0

  cos x = 3/2 is impossible - REJECT.

  tan 2x = 1  ->  2x = n pi + pi/4  ->  x = n pi/2 + pi/8 .
```

> **SHORTCUT:** whenever both sides have the shape
> "first + last, minus a multiple of the middle", pair the outer terms on
> each side. A common bracket always falls out.

---

### Q24
In `(0, pi/2)`, the number of values of `theta` satisfying
`4 sin theta . sin 2 theta . sin 4 theta = sin 3 theta` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  The equation reduces to  sin theta ( 2 cos 6 theta + 1 ) = 0 , so

     theta = n pi          (none of these lie strictly inside (0, pi/2))
     theta = n pi/3 +- pi/9

  Listing:  pi/9 = 20 deg , 2pi/9 = 40 deg , 4pi/9 = 80 deg    IN
            5pi/9 = 100 deg                                     OUT

  THREE values.
```

---

# PATTERN 5 — COUNTING SOLUTIONS IN AN INTERVAL

### Q25
The number of solutions of `cos 2x = sin x` in `[0, 2 pi]` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  1 - 2 sin^2 x = sin x   ->   2 sin^2 x + sin x - 1 = 0
  ( 2 sin x - 1 )( sin x + 1 ) = 0

  sin x = 1/2  ->  30 deg , 150 deg
  sin x = -1   ->  270 deg

  THREE solutions.
```

---

### Q26
The number of solutions of `sin 2x = 1/2` in `[0, 2 pi]` is

(a) 2 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 6

**ANSWER: (c)**
```
  If x runs over [0, 2 pi] then 2x runs over [0, 4 pi] - TWO full waves.

  sin u = 1/2 has 2 solutions per 2 pi , so 4 in [0, 4 pi] :

     2x = 30, 150, 390, 510   ->   x = 15, 75, 195, 255 degrees.
```

> **SHORTCUT:** for `sin kx = c` on `[0, 2 pi]`, the count is `k` times the
> count for `sin u = c` on one full turn. Multiply by the coefficient.

---

### Q27
The number of values of `x` in `[0, 2 pi]` with `| sin x | = 1/2` is

(a) 2 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 8

**ANSWER: (c)**
```
  sin x = 1/2   ->  30 , 150
  sin x = -1/2  ->  210 , 330

  FOUR values.
```

---

### Q28
The number of solutions of `tan x + sec x = 2 cos x` in `[0, 2 pi]` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 0

**ANSWER: (b)**
```
  ( sin x + 1 ) / cos x = 2 cos x

  sin x + 1 = 2 cos^2 x = 2 - 2 sin^2 x

  2 sin^2 x + sin x - 1 = 0
  ( 2 sin x - 1 )( sin x + 1 ) = 0

  sin x = 1/2  ->  30 deg , 150 deg           BOTH VALID
  sin x = -1   ->  270 deg , but there cos x = 0 , so tan x and sec x
                   do NOT exist.  REJECT.

  TWO solutions.
```

> **SHORTCUT:** if `tan` or `sec` is in the question, immediately delete any
> root at 90 or 270 degrees. That single check decides most of these MCQs.

---

### Q29
The number of values of `theta` in `[0, 2 pi]` with `tan theta + cot theta = 2`

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
  1 / ( sin th cos th ) = 2   ->   sin 2 theta = 1

  2 theta = 90 , 450    (2 theta runs over [0, 720])

  theta = 45 deg , 225 deg .    TWO values.
```

---

### Q30
The number of solutions of `sin 2x + cos 4x = 2` is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) infinitely many

**ANSWER: (a)**
```
  Both terms are at most 1, so the sum can only be 2 if BOTH are exactly 1.

  sin 2x = 1  ->  2x = pi/2 + 2 n pi  ->  x = pi/4 + n pi
  At those x , 4x = pi + 4 n pi , so cos 4x = -1 , not +1 .

  The two conditions can never hold together.  NO SOLUTION.
```

> **SHORTCUT:** "sum of two bounded terms = the sum of their maxima" always
> means "both must be at their maximum simultaneously". Test that; usually
> it fails.

---

### Q31
The number of solutions of `sin theta + cos theta = 1` in `[0, 2 pi]` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  General solution: theta = 2 n pi  or  2 n pi + pi/2 .

  In [0, 2 pi] :   0 ,  pi/2 ,  2 pi      ->   THREE.

  (If the interval had been [0, 2 pi) the answer would be 2. READ the
   brackets.)
```

---

# PATTERN 6 — SQUARING, EXTRANEOUS ROOTS, IDENTITY TRICKS

### Q32
If `sin x + cos x = 1/5` and `0 <= x <= pi`, then `tan x` equals

(a) 4/3 &nbsp;&nbsp; (b) -4/3 &nbsp;&nbsp; (c) 3/4 &nbsp;&nbsp; (d) -3/4

**ANSWER: (b)**
```
  Square:  1 + 2 sin x cos x = 1/25   ->   sin x cos x = -12/25

  So sin x and cos x are the roots of
        t^2 - (1/5) t - 12/25 = 0      ->    25 t^2 - 5 t - 12 = 0

        t = [ 5 +- sqrt( 25 + 1200 ) ] / 50 = [ 5 +- 35 ] / 50
        t = 4/5   or   t = -3/5

  On [0, pi] the sine is NOT negative, so sin x = 4/5 and cos x = -3/5 .

        tan x = (4/5) / (-3/5) = - 4/3 .

  CHECK  4/5 + (-3/5) = 1/5 .  Correct.
```

---

### Q33
If `sin x + cosec x = 2`, then `sin^n x + cosec^n x` equals

(a) 2 &nbsp;&nbsp; (b) 2^n &nbsp;&nbsp; (c) 2^(n-1) &nbsp;&nbsp; (d) n

**ANSWER: (a)**
```
  sin x + 1/sin x = 2   ->   sin^2 x - 2 sin x + 1 = 0
                        ->   ( sin x - 1 )^2 = 0   ->   sin x = 1

  Then cosec x = 1 , and 1^n + 1^n = 2 for every n.
```

---

### Q34
If `tan theta + sec theta = sqrt3` and `0 < theta < 2 pi`, then `theta` is

(a) pi/6 &nbsp;&nbsp; (b) pi/3 &nbsp;&nbsp; (c) 3pi/2 &nbsp;&nbsp;
(d) pi/6 or 3pi/2

**ANSWER: (a)**
```
  1 + sin th = sqrt3 cos th   ->   sqrt3 cos th - sin th = 1
                              ->   2 cos( th + pi/6 ) = 1
                              ->   th + pi/6 = 2 n pi +- pi/3

  theta = 2 n pi + pi/6      or      theta = 2 n pi - pi/2

  The second family lands on cos theta = 0 , where tan and sec are
  UNDEFINED. Reject it.  So theta = pi/6 only.

  Option (d) is the trap for anyone who forgets to check.
```

---

### Q35
The general solution of `cos theta - sin theta = 1` is

(a) 2 n pi or 2 n pi - pi/2 &nbsp;&nbsp; (b) n pi/2 &nbsp;&nbsp;
(c) 2 n pi +- pi/4 &nbsp;&nbsp; (d) n pi + pi/4

**ANSWER: (a)**
```
  Divide by sqrt2 :   cos( theta + pi/4 ) = 1/sqrt2 = cos(pi/4)

     theta + pi/4 = 2 n pi +- pi/4

     theta = 2 n pi        or        theta = 2 n pi - pi/2

  Check theta = -90 deg : cos(-90) - sin(-90) = 0 + 1 = 1 . Correct.
```

---

### Q36
If `sin theta + cos theta = sqrt2 cos theta`, then `cos theta - sin theta`
equals

(a) sqrt2 sin theta &nbsp;&nbsp; (b) sqrt2 cos theta &nbsp;&nbsp;
(c) sin theta &nbsp;&nbsp; (d) -sqrt2 sin theta

**ANSWER: (a)**
```
  From the given:  sin theta = ( sqrt2 - 1 ) cos theta .

  cos th - sin th = cos th - ( sqrt2 - 1 ) cos th
                  = ( 2 - sqrt2 ) cos th
                  = sqrt2 ( sqrt2 - 1 ) cos th
                  = sqrt2 sin theta .
```

> **SHORTCUT:** multiply the two statements together and you get
> `cos^2 - sin^2 = sqrt2 sin cos . sqrt2 = 2 sin cos`... but the direct
> substitution above is faster. Use it.

---

### Q37
The general solution of `sin theta = tan theta` is

(a) n pi &nbsp;&nbsp; (b) 2 n pi &nbsp;&nbsp;
(c) n pi/2 &nbsp;&nbsp; (d) (2n+1) pi/2

**ANSWER: (a)**
```
  sin th = sin th / cos th .   Multiply by cos th (which is non-zero
  wherever tan th exists):

     sin th cos th = sin th
     sin th ( cos th - 1 ) = 0

  sin th = 0  ->  theta = n pi
  cos th = 1  ->  theta = 2 n pi   (already inside n pi)

  ANSWER: theta = n pi .
```

---

# PATTERN 7 — SIMULTANEOUS EQUATIONS

### Q38
If `sin theta = 1/2` and `cos theta = - sqrt3 / 2`, then the general value of
`theta` is

(a) 2 n pi + pi/6 &nbsp;&nbsp; (b) 2 n pi + 5pi/6 &nbsp;&nbsp;
(c) n pi + 5pi/6 &nbsp;&nbsp; (d) 2 n pi + 7pi/6

**ANSWER: (b)**
```
  sin POSITIVE and cos NEGATIVE  ->  QUADRANT II.

  The only angle in [0, 2 pi) with both values is 150 deg = 5 pi / 6 .

  theta = 2 n pi + 5 pi / 6 .
```

> **SHORTCUT:** with simultaneous equations you never need both formulas.
> Read the SIGNS, pick the quadrant with ASTC, name the angle, and put
> `2 n pi +` in front of it.

---

### Q39
If `tan theta = sqrt3` and `cos theta = - 1/2`, then `theta` equals

(a) 2 n pi + pi/3 &nbsp;&nbsp; (b) n pi + pi/3 &nbsp;&nbsp;
(c) 2 n pi + 4pi/3 &nbsp;&nbsp; (d) 2 n pi + 2pi/3

**ANSWER: (c)**
```
  tan positive, cos negative -> QUADRANT III.

  tan th = sqrt3  ->  60 or 240 deg
  cos th = -1/2   ->  120 or 240 deg

  Common value: 240 deg = 4 pi / 3 .

  theta = 2 n pi + 4 pi / 3 .
```

---

### Q40
The system `sin theta = 1/2` and `cos theta = 1/2` has

(a) one solution &nbsp;&nbsp; (b) two solutions &nbsp;&nbsp;
(c) infinitely many &nbsp;&nbsp; (d) no solution

**ANSWER: (d)**
```
  If both held, then  sin^2 th + cos^2 th = 1/4 + 1/4 = 1/2 ,
  but that sum must be 1. Contradiction.

  NO SOLUTION.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+-------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY          |
  +--------------------------------------+-------------------------------+
  |  Four options, all with n in them    |  Put n = 0 in each and test   |
  |                                      |  in the original equation     |
  +--------------------------------------+-------------------------------+
  |  A SQUARE: sin^2, cos^2, tan^2 = k   |  Answer has the shape         |
  |                                      |  n pi +- alpha . Kill the     |
  |                                      |  options that do not          |
  +--------------------------------------+-------------------------------+
  |  a cos th + b sin th = c             |  Compute sqrt(a^2+b^2) FIRST. |
  |                                      |  If |c| beats it: ZERO        |
  |                                      |  solutions, move on           |
  +--------------------------------------+-------------------------------+
  |  "maximum / minimum value of         |  +- sqrt(a^2+b^2) . Remember  |
  |   a cos th + b sin th"               |  3-4-5, 5-12-13, 8-15-17      |
  +--------------------------------------+-------------------------------+
  |  tan or sec anywhere in the question |  Delete every root at 90, 270 |
  |                                      |  degrees (cos theta = 0)      |
  +--------------------------------------+-------------------------------+
  |  cot or cosec anywhere               |  Delete every root at 0, 180, |
  |                                      |  360 degrees (sin theta = 0)  |
  +--------------------------------------+-------------------------------+
  |  Same ratio on both sides            |  FACTORISE, never cancel. The |
  |  (sin 2th = cos th)                  |  answer count is bigger than  |
  |                                      |  it looks                     |
  +--------------------------------------+-------------------------------+
  |  Three terms with angles th, 2th, 3th|  Pair the OUTER two with      |
  |                                      |  sinC+sinD or cosC+cosD       |
  +--------------------------------------+-------------------------------+
  |  "Number of solutions of sin kx = c  |  Count for one wave, then     |
  |   in [0, 2 pi]"                      |  MULTIPLY BY k                |
  +--------------------------------------+-------------------------------+
  |  A quadratic with roots like 2, -3   |  REJECT them for sin and cos, |
  |                                      |  KEEP them for tan and cot    |
  +--------------------------------------+-------------------------------+
  |  Sum of two terms = sum of their     |  Both must be at maximum at   |
  |  maxima (e.g. sin2x + cos4x = 2)     |  the SAME x. Usually          |
  |                                      |  impossible -> answer 0       |
  +--------------------------------------+-------------------------------+
  |  Two equations, one angle            |  Read the SIGNS, pick the     |
  |                                      |  quadrant, answer 2 n pi + be |
  +--------------------------------------+-------------------------------+
  |  Interval given as [0, 2 pi] with a  |  Check whether the ENDPOINTS  |
  |  square bracket                      |  count. It often changes the  |
  |                                      |  answer by one                |
  +--------------------------------------+-------------------------------+
  |  You cannot see the method in 30 sec |  EAPCET: guess and move on,   |
  |                                      |  there is no negative mark.   |
  |                                      |  JEE: leave it blank          |
  +--------------------------------------+-------------------------------+
```

## THE THIRTY-SECOND CHECKLIST FOR ANY MCQ IN THIS CHAPTER

```
   1.  Is it "solve" or "how many solutions"?  They need different work.
   2.  Is there a square?           -> n pi +- alpha
   3.  Is there a sin AND a cos with number coefficients?
                                    -> sqrt(a^2 + b^2) first
   4.  Are there several angles (th, 2th, 3th)?  -> pair the outer two
   5.  Is tan/sec/cot/cosec present?  -> domain deletions
   6.  Can I just substitute n = 0 into the options?   Usually YES.
```
