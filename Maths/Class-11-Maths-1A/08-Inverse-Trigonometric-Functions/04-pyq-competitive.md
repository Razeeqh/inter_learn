# Inverse Trigonometric Functions — JEE Main / AP EAPCET / TG EAPCET

All multiple choice.

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

**How many questions come from Inverse Trigonometric Functions:**

```
  AP EAPCET  (Maths, 80 questions)  ->  1 to 2
  TG EAPCET  (Maths, 80 questions)  ->  1 to 2
  JEE Main   (Maths, 25 questions)  ->  0 to 1  (often merged with
                                                 Trigonometric Equations)
```

Small, but the questions are **fast**. Most are 30-second questions if you know the
principal ranges. That is exactly the kind of mark EAPCET is won on.

> Questions are grouped by **PATTERN**, not by year, because the pattern is what
> repeats. Verify against official papers before the exam.

---

# PATTERN 1 — PRINCIPAL VALUES (free marks, 20 seconds each)

### Q1
The principal value of `cos^-1(-1/2)` is

(a) `-pi/3` &nbsp;&nbsp; (b) `pi/3` &nbsp;&nbsp; (c) `2pi/3` &nbsp;&nbsp; (d) `4pi/3`

**ANSWER: (c)**
```
  cos^-1(-x) = pi - cos^-1(x) = pi - pi/3 = 2pi/3
  Options (a) is outside [0, pi] ; (d) is also outside [0, pi]. Both dead.
```

> **SHORTCUT:** for `cos^-1`, `cot^-1`, `sec^-1`, cross out every negative option
> and every option bigger than `pi` **before** you calculate. Usually only one
> option survives.

---

### Q2
The principal value of `cot^-1(-1/sqrt3)` is

(a) `-pi/3` &nbsp;&nbsp; (b) `pi/6` &nbsp;&nbsp; (c) `2pi/3` &nbsp;&nbsp; (d) `5pi/6`

**ANSWER: (c)**
```
  cot^-1(-x) = pi - cot^-1(x) = pi - pi/3 = 2pi/3
```

---

### Q3
The principal value of `sec^-1(-sqrt2)` is

(a) `-pi/4` &nbsp;&nbsp; (b) `pi/4` &nbsp;&nbsp; (c) `3pi/4` &nbsp;&nbsp; (d) `5pi/4`

**ANSWER: (c)**
```
  sec^-1(sqrt2) = cos^-1(1/sqrt2) = pi/4
  sec^-1(-sqrt2) = pi - pi/4 = 3pi/4
  (d) 5pi/4 is outside [0, pi] . Dead.
```

---

### Q4
`sin^-1(-1) + cos^-1(-1)` equals

(a) `0` &nbsp;&nbsp; (b) `pi/2` &nbsp;&nbsp; (c) `pi` &nbsp;&nbsp; (d) `3pi/2`

**ANSWER: (b)**
```
  Fast way:  sin^-1 x + cos^-1 x = pi/2 for EVERY x in [-1, 1] . Done.
  Longhand:  -pi/2 + pi = pi/2 .  Same.
```

---

### Q5
`tan^-1(-1) + cos^-1(-1/2)` equals

(a) `5pi/12` &nbsp;&nbsp; (b) `pi/12` &nbsp;&nbsp; (c) `-5pi/12` &nbsp;&nbsp; (d) `11pi/12`

**ANSWER: (a)**
```
  tan^-1(-1) = -pi/4 = -3pi/12
  cos^-1(-1/2) = 2pi/3 = 8pi/12
  Sum = 5pi/12
```

---

### Q6
`cosec^-1(-2) + sec^-1(2)` equals

(a) `pi/6` &nbsp;&nbsp; (b) `pi/2` &nbsp;&nbsp; (c) `-pi/6` &nbsp;&nbsp; (d) `pi/3`

**ANSWER: (a)**
```
  cosec^-1(-2) = -cosec^-1(2) = -pi/6
  sec^-1(2)    = cos^-1(1/2)  = pi/3
  Sum = -pi/6 + pi/3 = -pi/6 + 2pi/6 = pi/6
```

---

### Q7
Which of the following is NOT defined?

(a) `sin^-1(-1)` &nbsp;&nbsp; (b) `tan^-1(1000)` &nbsp;&nbsp; (c) `cosec^-1(1/2)` &nbsp;&nbsp; (d) `cos^-1(0)`

**ANSWER: (c)**
```
  cosec^-1 needs |x| >= 1 , and |1/2| < 1 .
  tan^-1 accepts EVERY real number, so (b) is fine.
```

---

# PATTERN 2 — `sin^-1(sin t)` WITH `t` OUTSIDE THE RANGE

### Q8
`sin^-1( sin(2pi/3) )` equals

(a) `2pi/3` &nbsp;&nbsp; (b) `pi/3` &nbsp;&nbsp; (c) `-pi/3` &nbsp;&nbsp; (d) `pi/6`

**ANSWER: (b)**
```
  2pi/3 is outside [-pi/2, pi/2] .
  sin(2pi/3) = sin(pi - 2pi/3) = sin(pi/3)  ->  pi/3
```

---

### Q9
`cos^-1( cos(7pi/6) )` equals

(a) `7pi/6` &nbsp;&nbsp; (b) `pi/6` &nbsp;&nbsp; (c) `5pi/6` &nbsp;&nbsp; (d) `-pi/6`

**ANSWER: (c)**
```
  7pi/6 is outside [0, pi] .
  cos(7pi/6) = cos(2pi - 7pi/6) = cos(5pi/6)  ->  5pi/6
```

---

### Q10
`tan^-1( tan(2pi/3) )` equals

(a) `2pi/3` &nbsp;&nbsp; (b) `pi/3` &nbsp;&nbsp; (c) `-pi/3` &nbsp;&nbsp; (d) `-2pi/3`

**ANSWER: (c)**
```
  tan has period pi :  tan(2pi/3) = tan(2pi/3 - pi) = tan(-pi/3)  ->  -pi/3
```

> **SHORTCUT:** for `tan^-1(tan t)` just keep subtracting `pi` from `t` until you
> land inside `(-pi/2, pi/2)`. That IS the answer.

---

### Q11
`sin^-1( sin(-600 deg) )` equals

(a) `pi/3` &nbsp;&nbsp; (b) `-pi/3` &nbsp;&nbsp; (c) `2pi/3` &nbsp;&nbsp; (d) `-2pi/3`

**ANSWER: (a)**
```
  -600deg + 720deg = 120deg
  sin(120deg) = sin(60deg) = sqrt3/2
  sin^-1(sqrt3/2) = 60deg = pi/3
```

---

### Q12
`cos^-1( cos 5 )` (5 in radians) equals

(a) `5` &nbsp;&nbsp; (b) `5 - pi` &nbsp;&nbsp; (c) `2pi - 5` &nbsp;&nbsp; (d) `5 - 2pi`

**ANSWER: (c)**
```
  5 radians is about 286deg , outside [0, pi] .
  cos 5 = cos(2pi - 5) , and 2pi - 5 = 1.283 , which IS in [0, pi] .
```

---

### Q13
`sin^-1( sin 10 )` (10 in radians) equals

(a) `10` &nbsp;&nbsp; (b) `10 - 3pi` &nbsp;&nbsp; (c) `3pi - 10` &nbsp;&nbsp; (d) `10 - 2pi`

**ANSWER: (c)**
```
  10 - 2pi = 3.717 , still outside [-pi/2, pi/2] .
  sin(3.717) = sin(pi - 3.717) = sin(-0.575)
  and  pi - 3.717 = pi - (10 - 2pi) = 3pi - 10 = -0.575 , which IS inside.
```

---

# PATTERN 3 — COMPLEMENTARY / RECIPROCAL SHORTCUTS

### Q14
`tan^-1(1/3) + cot^-1(1/3) + sec^-1(2) + cosec^-1(2)` equals

(a) `pi/2` &nbsp;&nbsp; (b) `pi` &nbsp;&nbsp; (c) `3pi/2` &nbsp;&nbsp; (d) `2pi`

**ANSWER: (b)**
```
  Each pair is pi/2 .   pi/2 + pi/2 = pi .
  No arithmetic at all.
```

---

### Q15
`tan^-1(1/2) + tan^-1(2)` equals

(a) `pi/4` &nbsp;&nbsp; (b) `pi/2` &nbsp;&nbsp; (c) `3pi/4` &nbsp;&nbsp; (d) `pi`

**ANSWER: (b)**
```
  They are reciprocals and both positive, so  xy = 1 exactly:
       tan^-1 a + tan^-1(1/a) = pi/2  for a > 0
```

> **SHORTCUT:** the instant you see `tan^-1 a + tan^-1(1/a)` with `a > 0`,
> write `pi/2`. Do not touch the sum formula — it would divide by zero.

---

### Q16
`cos( sin^-1(3/5) + sin^-1(4/5) )` equals

(a) `0` &nbsp;&nbsp; (b) `7/25` &nbsp;&nbsp; (c) `24/25` &nbsp;&nbsp; (d) `1`

**ANSWER: (a)**
```
  In a 3-4-5 triangle,  sin^-1(3/5) = cos^-1(4/5) .
  So the sum is  cos^-1(4/5) + sin^-1(4/5) = pi/2 .
  cos(pi/2) = 0 .
```

---

### Q17
If `sin^-1(3/5) = a`, then `cos^-1(3/5)` equals

(a) `a` &nbsp;&nbsp; (b) `pi - a` &nbsp;&nbsp; (c) `pi/2 - a` &nbsp;&nbsp; (d) `pi/2 + a`

**ANSWER: (c)**

---

# PATTERN 4 — SUM OF `tan^-1` (and the `pi` correction)

### Q18
`tan^-1 2 + tan^-1 3` equals

(a) `-pi/4` &nbsp;&nbsp; (b) `pi/4` &nbsp;&nbsp; (c) `3pi/4` &nbsp;&nbsp; (d) `pi/2`

**ANSWER: (c)**
```
  xy = 6 > 1 and both are POSITIVE  ->  add pi .

       (2 + 3)/(1 - 6) = 5/(-5) = -1
       Sum = pi + tan^-1(-1) = pi - pi/4 = 3pi/4

  Numerical check: 1.107 + 1.249 = 2.356 = 3pi/4 .
```

> **SHORTCUT:** both angles are clearly bigger than `pi/4` (since 2 > 1 and 3 > 1),
> so the sum is bigger than `pi/2`. Options (a), (b), (d) are impossible on sight.

---

### Q19
`tan^-1(-2) + tan^-1(-3)` equals

(a) `pi/4` &nbsp;&nbsp; (b) `-pi/4` &nbsp;&nbsp; (c) `3pi/4` &nbsp;&nbsp; (d) `-3pi/4`

**ANSWER: (d)**
```
  xy = 6 > 1 and both NEGATIVE  ->  subtract pi .

       (-2 - 3)/(1 - 6) = (-5)/(-5) = +1
       Sum = -pi + tan^-1(1) = -pi + pi/4 = -3pi/4
```

---

### Q20
`tan^-1(1/2) + tan^-1(1/5) + tan^-1(1/8)` equals

(a) `pi/6` &nbsp;&nbsp; (b) `pi/4` &nbsp;&nbsp; (c) `pi/3` &nbsp;&nbsp; (d) `pi/2`

**ANSWER: (b)**
```
  (1/2 + 1/5)/(1 - 1/10) = (7/10)/(9/10) = 7/9
  (7/9 + 1/8)/(1 - 7/72) = (65/72)/(65/72) = 1     ->  tan^-1 1 = pi/4
```

---

### Q21
`tan^-1 1 + tan^-1 2 + tan^-1 3` equals

(a) `pi/2` &nbsp;&nbsp; (b) `3pi/4` &nbsp;&nbsp; (c) `pi` &nbsp;&nbsp; (d) `5pi/4`

**ANSWER: (c)**
```
  From Q18,  tan^-1 2 + tan^-1 3 = 3pi/4 .
  Add tan^-1 1 = pi/4 :   3pi/4 + pi/4 = pi .

  (This is the famous case  x + y + z = xyz , since 1+2+3 = 6 = 1x2x3 .)
```

---

### Q22
`cot^-1 3 + cot^-1 7` equals

(a) `cot^-1 2` &nbsp;&nbsp; (b) `cot^-1 5` &nbsp;&nbsp; (c) `pi/4` &nbsp;&nbsp; (d) `tan^-1 2`

**ANSWER: (a)**
```
  cot^-1 3 = tan^-1(1/3) ,  cot^-1 7 = tan^-1(1/7)     [both arguments > 0]

       (1/3 + 1/7)/(1 - 1/21) = (10/21)/(20/21) = 1/2

  = tan^-1(1/2) = cot^-1(2)
```

---

### Q23
`4 tan^-1(1/5) - tan^-1(1/239)` equals

(a) `pi/6` &nbsp;&nbsp; (b) `pi/4` &nbsp;&nbsp; (c) `pi/3` &nbsp;&nbsp; (d) `pi/2`

**ANSWER: (b)** — this is **Machin's formula**.
```
  2 tan^-1(1/5)  = tan^-1( (2/5)/(1 - 1/25) )   = tan^-1(5/12)
  4 tan^-1(1/5)  = tan^-1( (5/6)/(1 - 25/144) ) = tan^-1(120/119)

  Subtract:   (120/119 - 1/239) / (1 + 120/(119 x 239))

       numerator   = (120 x 239 - 119) / (119 x 239) = (28680 - 119)/28441
                   = 28561/28441
       denominator = (28441 + 120)/28441 = 28561/28441

       ratio = 1     ->   tan^-1(1) = pi/4
```

---

# PATTERN 5 — VALUE OF A COMPOSITE EXPRESSION (right-triangle work)

### Q24
`sin( cot^-1 x )` equals

(a) `x/sqrt(1+x^2)` &nbsp; (b) `1/sqrt(1+x^2)` &nbsp; (c) `sqrt(1+x^2)` &nbsp; (d) `x`

**ANSWER: (b)**
```
  cot t = x = adjacent/opposite  ->  adjacent x , opposite 1 , hyp sqrt(1+x^2)
  sin t = opposite/hyp = 1/sqrt(1 + x^2)

  Sign check: cot^-1 t lies in (0, pi) , where sine is always POSITIVE.
  So the + root is correct for every real x.
```

---

### Q25
`sin( 2 tan^-1(1/3) )` equals

(a) `3/5` &nbsp;&nbsp; (b) `4/5` &nbsp;&nbsp; (c) `3/4` &nbsp;&nbsp; (d) `24/25`

**ANSWER: (a)**
```
  2 tan^-1 x = sin^-1( 2x/(1 + x^2) ) , valid since |1/3| <= 1

       2(1/3) / (1 + 1/9) = (2/3)/(10/9) = 18/30 = 3/5
```

---

### Q26
`cos( 2 tan^-1(1/7) )` equals

(a) `24/25` &nbsp;&nbsp; (b) `7/25` &nbsp;&nbsp; (c) `48/50` &nbsp;&nbsp; (d) `4/5`

**ANSWER: (a)**
```
  2 tan^-1 x = cos^-1( (1 - x^2)/(1 + x^2) ) , valid since x = 1/7 >= 0

       (1 - 1/49)/(1 + 1/49) = (48/49)/(50/49) = 48/50 = 24/25
```
(Option (c) is the same number unsimplified — a classic distractor. Always reduce.)

---

### Q27
`tan[ sin^-1(3/5) + cot^-1(3/2) ]` equals

(a) `6/17` &nbsp;&nbsp; (b) `7/16` &nbsp;&nbsp; (c) `17/6` &nbsp;&nbsp; (d) `16/7`

**ANSWER: (c)**
```
  sin^-1(3/5) = tan^-1(3/4)        [3-4-5 triangle]
  cot^-1(3/2) = tan^-1(2/3)        [2/3 > 0 , plain reciprocal rule]

  xy = (3/4)(2/3) = 1/2 < 1  ->  Case 1

       (3/4 + 2/3)/(1 - 1/2) = (17/12)/(1/2) = 17/6
```

---

### Q28
If `x = 1/5`, then `cos( 2 cos^-1 x + sin^-1 x )` equals

(a) `2 sqrt6 / 5` &nbsp;&nbsp; (b) `-2 sqrt6 / 5` &nbsp;&nbsp; (c) `1/5` &nbsp;&nbsp; (d) `-1/5`

**ANSWER: (b)**
```
  Split the angle cleverly:
       2 cos^-1 x + sin^-1 x = cos^-1 x + ( cos^-1 x + sin^-1 x )
                             = cos^-1 x + pi/2

  cos( cos^-1 x + pi/2 ) = - sin( cos^-1 x ) = - sqrt(1 - x^2)
                         = - sqrt(1 - 1/25) = - sqrt(24)/5 = - 2 sqrt6 / 5
```

> **SHORTCUT:** whenever `sin^-1 x` and `cos^-1 x` both appear with the SAME `x`,
> hunt for a `pi/2` you can peel off. It kills the question in one line.

---

### Q29
`cos( sin^-1(4/5) - cos^-1(12/13) )` equals

(a) `33/65` &nbsp;&nbsp; (b) `56/65` &nbsp;&nbsp; (c) `63/65` &nbsp;&nbsp; (d) `16/65`

**ANSWER: (b)**
```
  A = sin^-1(4/5)   ->  sin A = 4/5 , cos A = 3/5
  B = cos^-1(12/13) ->  cos B = 12/13 , sin B = 5/13
  (Both A and B are in the first quadrant, so every ratio is positive.)

  cos(A - B) = cosA cosB + sinA sinB
             = (3/5)(12/13) + (4/5)(5/13)
             = 36/65 + 20/65 = 56/65
```

---

# PATTERN 6 — SIMPLIFY BY SUBSTITUTING `x = tan t` (or `x = sin t`)

### Q30
For `|x| < 1`, `tan^-1( 2x/(1 - x^2) )` equals

(a) `tan^-1 x` &nbsp;&nbsp; (b) `2 tan^-1 x` &nbsp;&nbsp; (c) `(1/2) tan^-1 x` &nbsp;&nbsp; (d) `pi - 2 tan^-1 x`

**ANSWER: (b)** — straight from the double-angle formula, condition `|x| < 1` given.

---

### Q31
For `0 < x < 1`, `sin^-1( 2x/(1 + x^2) ) + cos^-1( (1 - x^2)/(1 + x^2) )` equals

(a) `2 tan^-1 x` &nbsp;&nbsp; (b) `4 tan^-1 x` &nbsp;&nbsp; (c) `pi/2` &nbsp;&nbsp; (d) `tan^-1 x`

**ANSWER: (b)**
```
  sin^-1( 2x/(1+x^2) )       = 2 tan^-1 x   for |x| <= 1        OK
  cos^-1( (1-x^2)/(1+x^2) )  = 2 tan^-1 x   for x >= 0          OK

  Sum = 4 tan^-1 x
```

---

### Q32
For `0 < x < pi`, `tan^-1( sqrt( (1 - cos x)/(1 + cos x) ) )` equals

(a) `x` &nbsp;&nbsp; (b) `x/2` &nbsp;&nbsp; (c) `2x` &nbsp;&nbsp; (d) `pi/2 - x`

**ANSWER: (b)**
```
  1 - cos x = 2 sin^2(x/2) ,   1 + cos x = 2 cos^2(x/2)

       sqrt( 2sin^2(x/2) / 2cos^2(x/2) ) = |tan(x/2)| = tan(x/2)
       (positive, since 0 < x/2 < pi/2)

  tan^-1( tan(x/2) ) = x/2 , because x/2 is inside (-pi/2, pi/2) .
```

---

### Q33
For `0 < x < pi/2`,
`cot^-1[ ( sqrt(1 + sin x) + sqrt(1 - sin x) ) / ( sqrt(1 + sin x) - sqrt(1 - sin x) ) ]`
equals

(a) `x` &nbsp;&nbsp; (b) `x/2` &nbsp;&nbsp; (c) `pi - x` &nbsp;&nbsp; (d) `pi/2 - x/2`

**ANSWER: (b)**
```
  1 + sin x = ( sin(x/2) + cos(x/2) )^2   ->  sqrt = sin(x/2) + cos(x/2)
  1 - sin x = ( cos(x/2) - sin(x/2) )^2   ->  sqrt = cos(x/2) - sin(x/2)
        (both positive, since 0 < x/2 < pi/4 means cos(x/2) > sin(x/2))

  numerator   = 2 cos(x/2)
  denominator = 2 sin(x/2)
  ratio       = cot(x/2)

  cot^-1( cot(x/2) ) = x/2 , since x/2 is inside (0, pi) .
```

---

### Q34
For `-1/sqrt2 <= x <= 1/sqrt2`, `sin^-1( 2x sqrt(1 - x^2) )` equals

(a) `sin^-1 x` &nbsp;&nbsp; (b) `2 sin^-1 x` &nbsp;&nbsp; (c) `pi - 2 sin^-1 x` &nbsp;&nbsp; (d) `2 cos^-1 x`

**ANSWER: (b)**
```
  Put x = sin t . Then 2x sqrt(1-x^2) = 2 sin t cos t = sin 2t .
  The stated condition |x| <= 1/sqrt2 makes |t| <= pi/4 , so 2t is inside
  [-pi/2, pi/2] and the cancellation is legal.
```
(If `x > 1/sqrt2` the answer would be `pi - 2 sin^-1 x` — option (c) is there
to catch you when the condition is different.)

---

# PATTERN 7 — SOLVE FOR x

### Q35
If `tan^-1(2x) + tan^-1(3x) = pi/4`, then `x` equals

(a) `1` &nbsp;&nbsp; (b) `-1` &nbsp;&nbsp; (c) `1/6` &nbsp;&nbsp; (d) `1/6` or `-1`

**ANSWER: (c)**
```
       (2x + 3x)/(1 - 6x^2) = 1
       5x = 1 - 6x^2
       6x^2 + 5x - 1 = 0
       (6x - 1)(x + 1) = 0    ->   x = 1/6  or  x = -1

  CHECK x = -1 :  2x = -2 , 3x = -3 , both negative with product 6 > 1
                  -> the true sum is -3pi/4 , not pi/4 .  REJECT.
  CHECK x = 1/6 : 2x = 1/3 , 3x = 1/2 , product 1/6 < 1 , Case 1 valid.
                  0.3217 + 0.4636 = 0.7853 = pi/4 .   ACCEPT.
```
(Option (d) is the trap for anyone who does not check.)

---

### Q36
`2 tan^-1(1/3) + tan^-1(1/7)` equals

(a) `pi/6` &nbsp;&nbsp; (b) `pi/4` &nbsp;&nbsp; (c) `pi/3` &nbsp;&nbsp; (d) `pi/2`

**ANSWER: (b)**
```
  2 tan^-1(1/3) = tan^-1( (2/3)/(1 - 1/9) ) = tan^-1(3/4)     [|1/3| < 1 , OK]

  tan^-1(3/4) + tan^-1(1/7) :  xy = 3/28 < 1

       (3/4 + 1/7)/(1 - 3/28) = (25/28)/(25/28) = 1   ->  pi/4
```

---

### Q37
The solution set of `tan^-1(x - 1) + tan^-1 x + tan^-1(x + 1) = tan^-1(3x)` is

(a) `{0}` &nbsp;&nbsp; (b) `{1/2, -1/2}` &nbsp;&nbsp; (c) `{0, 1/2, -1/2}` &nbsp;&nbsp; (d) `{1, -1}`

**ANSWER: (c)**
```
  Pair the outer two:  tan^-1( 2x/(2 - x^2) ) = tan^-1(3x) - tan^-1 x
                                              = tan^-1( 2x/(1 + 3x^2) )

       2x(1 + 3x^2) = 2x(2 - x^2)
       2x(4x^2 - 1) = 0
       x = 0 , 1/2 , -1/2      (all three check out on substitution)
```

---

### Q38
The number of real solutions of `sin^-1 x + cos^-1 x = pi/2` is

(a) `0` &nbsp;&nbsp; (b) `1` &nbsp;&nbsp; (c) `2` &nbsp;&nbsp; (d) infinitely many

**ANSWER: (d)**
```
  It is an IDENTITY: it holds for every x in [-1, 1] .
  So there are infinitely many solutions -- the whole interval [-1, 1] .
```

---

# PATTERN 8 — TELESCOPING SUMS OF `tan^-1`

The key trick, and it is always the same one:

```
  +--------------------------------------------------------------------------+
  |                      1                                                   |
  |        tan^-1 --------------- = tan^-1(n + 1) - tan^-1(n)                |
  |                 n^2 + n + 1                                              |
  |                                                                          |
  |   because  ( (n+1) - n ) / ( 1 + n(n+1) ) = 1 / (n^2 + n + 1)            |
  +--------------------------------------------------------------------------+
```
The denominators `n^2 + n + 1` for `n = 1, 2, 3, 4, ...` are **3, 7, 13, 21, 31, ...**
If you see those numbers, this is the pattern.

### Q39
`cot^-1 3 + cot^-1 7 + cot^-1 13 + cot^-1 21` equals

(a) `tan^-1(2/3)` &nbsp;&nbsp; (b) `tan^-1 5` &nbsp;&nbsp; (c) `pi/4` &nbsp;&nbsp; (d) `pi/2`

**ANSWER: (a)**
```
  Each term = tan^-1(1/(n^2+n+1)) = tan^-1(n+1) - tan^-1(n) for n = 1,2,3,4 .

       (tan^-1 2 - tan^-1 1) + (tan^-1 3 - tan^-1 2)
     + (tan^-1 4 - tan^-1 3) + (tan^-1 5 - tan^-1 4)

     = tan^-1 5 - tan^-1 1

     = tan^-1( (5 - 1)/(1 + 5) ) = tan^-1(4/6) = tan^-1(2/3)

  DECIMAL CHECK: 0.3217+0.1419+0.0767+0.0476 = 0.5879
                 tan^-1(2/3) = 0.5880 .   MATCHES.
```

---

### Q40
`tan^-1(1/3) + tan^-1(1/7) + tan^-1(1/13) + ...` continued to infinity equals

(a) `pi/8` &nbsp;&nbsp; (b) `pi/4` &nbsp;&nbsp; (c) `pi/2` &nbsp;&nbsp; (d) `pi`

**ANSWER: (b)**
```
  Partial sum up to n = N  =  tan^-1(N + 1) - tan^-1(1)

  As N -> infinity ,  tan^-1(N + 1) -> pi/2 .

  Sum = pi/2 - pi/4 = pi/4
```

---

# PATTERN 9 — DOMAIN AND RANGE

### Q41
The domain of `f(x) = sin^-1(2x)` is

(a) `[-1, 1]` &nbsp;&nbsp; (b) `[-1/2, 1/2]` &nbsp;&nbsp; (c) `[-2, 2]` &nbsp;&nbsp; (d) `R`

**ANSWER: (b)**
```
  Need  -1 <= 2x <= 1   ->   -1/2 <= x <= 1/2
```

---

### Q42
The domain of `f(x) = cos^-1(x - 2)` is

(a) `[-1, 1]` &nbsp;&nbsp; (b) `[0, 2]` &nbsp;&nbsp; (c) `[1, 3]` &nbsp;&nbsp; (d) `[2, 4]`

**ANSWER: (c)**
```
  Need  -1 <= x - 2 <= 1   ->   1 <= x <= 3
```

---

### Q43
The range of `cot^-1 x` is

(a) `[-pi/2, pi/2]` &nbsp;&nbsp; (b) `(-pi/2, pi/2)` &nbsp;&nbsp; (c) `[0, pi]` &nbsp;&nbsp; (d) `(0, pi)`

**ANSWER: (d)** — open at both ends, because `cot 0` and `cot pi` do not exist.

---

### Q44
The range of `sec^-1 x` is

(a) `[0, pi]` &nbsp;&nbsp; (b) `[0, pi]` without `pi/2` &nbsp;&nbsp; (c) `[-pi/2, pi/2]` &nbsp;&nbsp; (d) `(0, pi)`

**ANSWER: (b)** — `sec(pi/2) = 1/cos(pi/2) = 1/0`, which does not exist.

---

# PATTERN 10 — CONDITIONAL IDENTITIES

### Q45
If `tan^-1 x + tan^-1 y + tan^-1 z = pi/2`, then `xy + yz + zx` equals

(a) `0` &nbsp;&nbsp; (b) `1` &nbsp;&nbsp; (c) `xyz` &nbsp;&nbsp; (d) `x + y + z`

**ANSWER: (b)**
```
  A + B = pi/2 - C  ->  tan(A+B) = cot C = 1/z
       (x + y)/(1 - xy) = 1/z   ->   zx + zy = 1 - xy   ->   xy + yz + zx = 1
```

---

### Q46
If `tan^-1 x + tan^-1 y + tan^-1 z = pi`, then

(a) `xy + yz + zx = 1` &nbsp; (b) `x + y + z = xyz` &nbsp; (c) `x = y = z` &nbsp; (d) `xyz = 1`

**ANSWER: (b)**
```
  A + B = pi - C  ->  tan(A+B) = -tan C
       (x + y)/(1 - xy) = -z   ->   x + y = -z + xyz   ->   x + y + z = xyz
```

---

### Q47
If `sin^-1 x + sin^-1 y + sin^-1 z = 3pi/2`, then `x + y + z` equals

(a) `0` &nbsp;&nbsp; (b) `1` &nbsp;&nbsp; (c) `3` &nbsp;&nbsp; (d) `-3`

**ANSWER: (c)**
```
  Each sin^-1 is at most pi/2 . Three of them can reach 3pi/2 only if
  EVERY one is exactly pi/2 . So x = y = z = 1 and the sum is 3 .
```

---

### Q48
If `cos^-1 x + cos^-1 y + cos^-1 z = 3pi`, then `xy + yz + zx` equals

(a) `0` &nbsp;&nbsp; (b) `1` &nbsp;&nbsp; (c) `3` &nbsp;&nbsp; (d) `-3`

**ANSWER: (c)**
```
  Each cos^-1 is at most pi , so all three must equal pi exactly,
  giving x = y = z = -1 .
  xy + yz + zx = 1 + 1 + 1 = 3 .
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +----------------------------------------+---------------------------------------+
  |  IF YOU SEE THIS ...                   |  DO THIS IMMEDIATELY                  |
  +----------------------------------------+---------------------------------------+
  |  cos^-1 , cot^-1 or sec^-1 of a        |  Cross out every NEGATIVE option and   |
  |  negative number                       |  every option above pi. Usually only   |
  |                                        |  one survives. Then use pi - (value).  |
  +----------------------------------------+---------------------------------------+
  |  sin^-1 , tan^-1 or cosec^-1 of a      |  Answer is just minus the positive     |
  |  negative number                       |  value. Cross out options above pi/2.  |
  +----------------------------------------+---------------------------------------+
  |  sin^-1 x + cos^-1 x  (same x)         |  Write pi/2 . Do not compute either.   |
  |  tan^-1 x + cot^-1 x                   |                                        |
  |  sec^-1 x + cosec^-1 x                 |                                        |
  +----------------------------------------+---------------------------------------+
  |  tan^-1 a + tan^-1 (1/a) , a > 0       |  Write pi/2 . Never use the sum        |
  |                                        |  formula -- it divides by zero.        |
  +----------------------------------------+---------------------------------------+
  |  tan^-1 x + tan^-1 y                   |  FIRST compute xy .                    |
  |                                        |  xy < 1  -> plain formula              |
  |                                        |  xy > 1 , both +  -> add pi            |
  |                                        |  xy > 1 , both -  -> subtract pi       |
  +----------------------------------------+---------------------------------------+
  |  tan^-1 (big) + tan^-1 (big)           |  The answer is bigger than pi/2 .      |
  |  (both arguments above 1)              |  Any option at or below pi/2 is dead.  |
  +----------------------------------------+---------------------------------------+
  |  sin^-1( sin t ) with t outside range  |  sin: use pi - t , or add/subtract 2pi |
  |                                        |  cos: use 2pi - t                      |
  |                                        |  tan: add/subtract pi (period is pi)   |
  +----------------------------------------+---------------------------------------+
  |  Denominators 3, 7, 13, 21, 31 ...     |  Telescoping.                          |
  |                                        |  tan^-1(1/(n^2+n+1))                   |
  |                                        |    = tan^-1(n+1) - tan^-1(n)           |
  +----------------------------------------+---------------------------------------+
  |  2x/(1-x^2) , 2x/(1+x^2) ,             |  Substitute x = tan t . The whole      |
  |  (1-x^2)/(1+x^2)                       |  bracket collapses to 2t .             |
  +----------------------------------------+---------------------------------------+
  |  sqrt(1 - x^2) or 2x sqrt(1-x^2)       |  Substitute x = sin t .                |
  +----------------------------------------+---------------------------------------+
  |  sqrt(1 + sin x) , sqrt(1 - cos x)     |  Use the half-angle squares:           |
  |                                        |  1 + sin x = (sin(x/2)+cos(x/2))^2     |
  |                                        |  1 - cos x = 2 sin^2(x/2)              |
  +----------------------------------------+---------------------------------------+
  |  "Solve" and the options include TWO   |  One of them is fake. Test the         |
  |  values                                |  negative / larger one against the      |
  |                                        |  xy > 1 rule and reject it.            |
  +----------------------------------------+---------------------------------------+
  |  An option outside the principal range |  Delete it without reading further.    |
  |  of the function being asked           |  This alone removes 1-2 options in     |
  |                                        |  most questions in this chapter.        |
  +----------------------------------------+---------------------------------------+
  |  You are stuck and it is EAPCET        |  Plug x = 1 (or x = 1/2) into every    |
  |                                        |  option with a calculator-free head     |
  |                                        |  check. NEVER leave it blank.          |
  +----------------------------------------+---------------------------------------+
```
