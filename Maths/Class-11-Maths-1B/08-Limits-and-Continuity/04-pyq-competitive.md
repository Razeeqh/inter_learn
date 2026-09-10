# Limits and Continuity — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Limits and Continuity:**

```
  AP EAPCET  (Maths, 80 questions)  ->  2 to 4
  TG EAPCET  (Maths, 80 questions)  ->  2 to 4
  JEE Main   (Maths, 25 questions)  ->  1 to 2
                                        (usually merged with
                                         Differentiability)
```

> Questions are grouped by **PATTERN**, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

> **THE SINGLE BIGGEST TIME-SAVER:** in an MCQ you do not need a proof. You need
> the number. Substitute the standard limits mentally and pick the option.
> Most of these should take under 30 seconds each.

---

# PATTERN 1 — 0/0 with polynomials: factorise and cancel

### Q1
```
   lim  ( x^2 - 1 ) / ( x - 1 )   =
  x->1

   (a) 0      (b) 1      (c) 2      (d) does not exist
```
**ANSWER: (c)** — `(x-1)(x+1)/(x-1) = x + 1 -> 2`

---

### Q2
```
   lim  ( x^3 - 8 ) / ( x^2 - 4 )   =
  x->2

   (a) 2      (b) 3      (c) 4      (d) 12
```
**ANSWER: (b)**
```
   (x - 2)(x^2 + 2x + 4)          x^2 + 2x + 4        12
   ---------------------   =      ------------   ->  ----   =   3
      (x - 2)(x + 2)                 x + 2             4
```

> **SHORTCUT:** For `(x^n - a^n)/(x^m - a^m)` the answer is `(n/m) a^(n-m)`.
> Here `(3/2) . 2^1 = 3`. One line, no factorising.

---

### Q3
```
   lim  ( x^3 - 3x + 2 ) / ( x^2 - 1 )   =
  x->1

   (a) 0      (b) 1      (c) 3/2      (d) does not exist
```
**ANSWER: (a)**
```
   Top:     x^3 - 3x + 2  =  (x - 1)^2 (x + 2)
   Bottom:  x^2 - 1       =  (x - 1)(x + 1)

   Ratio  =  (x - 1)(x + 2)/(x + 1)   ->   0 . 3 / 2   =   0
```

> **SHORTCUT:** If `(x - a)` divides the top a HIGHER number of times than the
> bottom, the answer is 0. If it divides the bottom more, the answer is infinity.

---

# PATTERN 2 — the `x^n - a^n` standard result

### Q4
```
   lim  ( x^7 - 2^7 ) / ( x - 2 )   =
  x->2

   (a) 7      (b) 128      (c) 448      (d) 64
```
**ANSWER: (c)** — `n a^(n-1) = 7 . 2^6 = 7 . 64 = 448`

---

### Q5
```
   lim  ( x^(3/2) - a^(3/2) ) / ( x - a )   =
  x->a

   (a) (3/2) sqrt(a)     (b) (2/3) sqrt(a)
   (c) (3/2) a           (d) 3 sqrt(a)
```
**ANSWER: (a)** — `n a^(n-1) = (3/2) a^(1/2) = (3/2) sqrt(a)`

---

### Q6
```
   lim  ( x^15 - 1 ) / ( x^10 - 1 )   =
  x->1

   (a) 3/2      (b) 2/3      (c) 15/10 . 0      (d) 1
```
**ANSWER: (a)** — `(n/m) a^(n-m) = (15/10) . 1^5 = 3/2`

---

# PATTERN 3 — rationalisation (a square root plus 0/0)

### Q7
```
   lim  ( sqrt(1 + x) - sqrt(1 - x) ) / x   =
  x->0

   (a) 0      (b) 1/2      (c) 1      (d) 2
```
**ANSWER: (c)**
```
        2x                          2
   -----------------------  ->    -----   =   1
   x( sqrt(1+x)+sqrt(1-x) )        1+1
```

---

### Q8
```
   lim  ( sqrt(x + 1) - 2 ) / ( x - 3 )   =
  x->3

   (a) 1/2      (b) 1/4      (c) 4      (d) 1
```
**ANSWER: (b)**
```
        (x + 1) - 4                        1              1
   ------------------------  =   ------------------  ->   -
   (x-3)( sqrt(x+1) + 2 )         sqrt(x+1) + 2           4
```

---

### Q9
```
   lim  ( sqrt(1 + x^2) - 1 ) / x^2   =
  x->0

   (a) 0      (b) 1/2      (c) 1      (d) 2
```
**ANSWER: (b)**

> **SHORTCUT for the exam hall:** for small `u`,
> `sqrt(1 + u)` behaves like `1 + u/2`.
> So `(sqrt(1+u) - 1)/u -> 1/2` no matter what `u` is, as long as `u -> 0`.
> Here `u = x^2`, so the answer is `1/2` in three seconds.

---

# PATTERN 4 — limits as x -> infinity, rational functions

### Q10
```
   lim  ( 2x^3 + 3x ) / ( 5x^3 - x^2 + 1 )   =
 x->inf

   (a) 0      (b) 2/5      (c) 5/2      (d) infinity
```
**ANSWER: (b)** — equal degrees, so it is the ratio of leading coefficients: `2/5`

---

### Q11
```
   lim  ( 3x - 1 )( 4x + 2 ) / [ ( x + 8 )( x - 1 ) ]   =
 x->inf

   (a) 3      (b) 4      (c) 12      (d) 1
```
**ANSWER: (c)** — top leads with `12x^2`, bottom with `x^2`, so `12/1 = 12`

---

### Q12
```
   lim  ( x^2 + 1 ) / ( x^3 + 2 )   =
 x->inf

   (a) 0      (b) 1      (c) 1/2      (d) infinity
```
**ANSWER: (a)** — degree of top (2) < degree of bottom (3)

---

### Q13
```
   lim  ( 1 + 2 + 3 + ... + n ) / n^2   =
 n->inf

   (a) 0      (b) 1/2      (c) 1      (d) 2
```
**ANSWER: (b)**
```
   1 + 2 + ... + n   =   n(n + 1)/2

        n(n+1)/2        n^2 + n           1
        --------   =   ---------    ->    -
          n^2             2 n^2           2
```

> **SHORTCUT:** `p < q -> 0` ; `p = q -> a0/b0` ; `p > q -> infinity`.
> Never actually divide through in an MCQ. Just read the leading terms.

---

# PATTERN 5 — `inf - inf` with square roots

### Q14
```
   lim  ( sqrt( x^2 + 8x )  -  x )   =
 x->inf

   (a) 2      (b) 4      (c) 8      (d) infinity
```
**ANSWER: (b)**

> **SHORTCUT:** `sqrt(x^2 + ax + b) - x  ->  a/2`. Here `a = 8`, so `8/2 = 4`.
> This one formula answers almost every question of this pattern.

---

### Q15
```
   lim  x ( sqrt( x^2 + 1 )  -  x )   =
 x->inf

   (a) 0      (b) 1/2      (c) 1      (d) infinity
```
**ANSWER: (b)**
```
                    x . 1                        1              1
   x . -------------------------  =  ----------------------  -> -
       sqrt(x^2 + 1) + x              sqrt(1 + 1/x^2) + 1       2
```

---

### Q16
```
   lim  ( sqrt( x + 3 )  -  sqrt( x ) )   =
 x->inf

   (a) 0      (b) 3/2      (c) 3      (d) infinity
```
**ANSWER: (a)** — top becomes the constant 3, bottom `sqrt(x+3) + sqrt(x)` blows up.

---

# PATTERN 6 — standard trigonometric limits

### Q17
```
   lim  sin 5x / sin 3x   =
  x->0

   (a) 3/5      (b) 5/3      (c) 1      (d) 15
```
**ANSWER: (b)** — `sin(ax)/sin(bx) -> a/b`

---

### Q18
```
   lim  sin 3x / tan 5x   =
  x->0

   (a) 5/3      (b) 3/5      (c) 1      (d) 15
```
**ANSWER: (b)** — sin and tan behave identically for small angles, so `3/5`

> **SHORTCUT (the small-angle replacement):** as `x -> 0` you may replace
> ```
>    sin(kx)  ->  kx        tan(kx)  ->  kx
>    sin^-1(kx) -> kx       tan^-1(kx) -> kx
>    e^(kx) - 1 -> kx       log(1 + kx) -> kx
>    1 - cos(kx) -> (kx)^2 / 2
> ```
> Then just cancel. This turns nearly every limit MCQ into arithmetic.
> (Use it only for MCQs — in the board exam, show the standard-limit steps.)

---

### Q19
```
   lim  x . cot 4x   =
  x->0

   (a) 4      (b) 1/4      (c) 1      (d) 0
```
**ANSWER: (b)** — `x cos4x / sin4x  ->  x/(4x) = 1/4`

---

### Q20
```
   lim  sin x / ( pi - x )   =
  x->pi

   (a) 0      (b) -1      (c) 1      (d) does not exist
```
**ANSWER: (c)**
```
   Put x = pi - h , h -> 0 :   sin(pi - h)/h  =  sin h / h  ->  1
```

---

# PATTERN 7 — the `1 - cos` family and third-order limits

### Q21
```
   lim  ( 1 - cos 4x ) / x^2   =
  x->0

   (a) 2      (b) 4      (c) 8      (d) 16
```
**ANSWER: (c)** — `(1 - cos ax)/x^2 -> a^2/2 = 16/2 = 8`

---

### Q22
```
   lim  ( 1 - cos x ) / ( x . tan x )   =
  x->0

   (a) 0      (b) 1/2      (c) 1      (d) 2
```
**ANSWER: (b)** — top behaves like `x^2/2`, bottom like `x . x = x^2`

---

### Q23
```
   lim  ( x - sin x ) / x^3   =
  x->0

   (a) 1/2      (b) 1/3      (c) 1/6      (d) 0
```
**ANSWER: (c)** — memorise this one: `1/6`

---

### Q24
```
   lim  ( tan x - sin x ) / x^3   =
  x->0

   (a) 1/6      (b) 1/2      (c) 1      (d) 0
```
**ANSWER: (b)** — memorise this one: `1/2`

> **SHORTCUT:** the pair `(x - sin x)/x^3 = 1/6` and `(tan x - x)/x^3 = 1/3`
> and `(tan x - sin x)/x^3 = 1/2` are asked over and over.
> Note that `1/6 + 1/3 = 1/2` — a handy way to remember all three.

---

# PATTERN 8 — inverse trigonometric limits

### Q25
```
   lim  sin^-1(3x) / tan^-1(5x)   =
  x->0

   (a) 5/3      (b) 3/5      (c) 15      (d) 1
```
**ANSWER: (b)** — replace `sin^-1(3x) -> 3x` and `tan^-1(5x) -> 5x`

---

### Q26
```
   lim  tan^-1(2x) / sin(3x)   =
  x->0

   (a) 3/2      (b) 2/3      (c) 6      (d) 1
```
**ANSWER: (b)** — `2x / 3x = 2/3`

---

# PATTERN 9 — exponential and logarithmic limits

### Q27
```
   lim  ( e^(5x) - 1 ) / sin 2x   =
  x->0

   (a) 2/5      (b) 5/2      (c) 10      (d) 1
```
**ANSWER: (b)** — `5x / 2x = 5/2`

---

### Q28
```
   lim  ( 2^x - 1 ) / x   =
  x->0

   (a) 1      (b) 2      (c) log 2      (d) log_2 e
```
**ANSWER: (c)** — `(a^x - 1)/x -> log a` (natural log)

---

### Q29
```
   lim  log( 1 + 3x ) / sin 4x   =
  x->0

   (a) 4/3      (b) 3/4      (c) 12      (d) 1
```
**ANSWER: (b)** — `3x / 4x = 3/4`

---

### Q30
```
   lim  ( e^x  -  e^(-x) ) / x   =
  x->0

   (a) 0      (b) 1      (c) 2      (d) -2
```
**ANSWER: (c)**
```
   e^x - e^(-x)     (e^x - 1)  -  (e^(-x) - 1)
   ------------  =  --------------------------   ->   1 - (-1)   =   2
        x                       x
```

---

### Q31
```
   lim  ( 5^x  -  3^x ) / x   =
  x->0

   (a) log 15      (b) log(5/3)      (c) log 2      (d) 2
```
**ANSWER: (b)** — `(a^x - b^x)/x -> log(a/b)`

---

# PATTERN 10 — the `1^infinity` form

### Q32
```
   lim  ( 1 + 2/x )^(3x)   =
 x->inf

   (a) e^2      (b) e^3      (c) e^6      (d) e^(2/3)
```
**ANSWER: (c)** — `L = 3x . (2/x) = 6`, so `e^6`

---

### Q33
```
   lim  ( 1 + 2x )^(3/x)   =
  x->0

   (a) e^2      (b) e^3      (c) e^6      (d) e
```
**ANSWER: (c)** — `L = (3/x)(2x) = 6`, so `e^6`

---

### Q34
```
   lim  ( (x + 3) / (x + 1) )^(x + 2)   =
 x->inf

   (a) e      (b) e^2      (c) e^3      (d) e^4
```
**ANSWER: (b)**
```
   base - 1  =  2/(x + 1)

   L  =  (x + 2) . 2/(x + 1)   ->   2          Answer  =  e^2
```

> **SHORTCUT:** `((x + a)/(x + b))^x  ->  e^(a - b)`.
> Any extra constant added to the index does not change the answer.

---

# PATTERN 11 — does the limit exist? (modulus, greatest integer, oscillation)

### Q35
```
   lim  [ x ]   , where [.] is the greatest integer function
  x->0

   (a) 0      (b) -1      (c) 1      (d) does not exist
```
**ANSWER: (d)** — LHL = `-1` (values just below 0), RHL = `0`. Unequal.

---

### Q36
```
   lim  | x - 2 | / ( x - 2 )   =
  x->2

   (a) 1      (b) -1      (c) 0      (d) does not exist
```
**ANSWER: (d)** — LHL = `-1`, RHL = `1`

---

### Q37
```
   lim  x . sin( 1/x )   =
  x->0

   (a) 0      (b) 1      (c) infinity      (d) does not exist
```
**ANSWER: (a)**
```
   | sin(1/x) |  <=  1  always,  so  | x sin(1/x) |  <=  | x |  ->  0
```

> **SHORTCUT (bounded x small = 0):** a bounded thing (sin, cos, anything
> between -1 and 1) multiplied by something going to 0 gives 0.
> Contrast: `lim sin(1/x)` as `x -> 0` DOES NOT EXIST — it oscillates forever.

---

### Q38
```
   lim  ( sin x ) / x   =
 x->inf

   (a) 1      (b) 0      (c) infinity      (d) does not exist
```
**ANSWER: (b)** — bounded top, unbounded bottom. Not 1: the arrow is `x -> inf`.

---

# PATTERN 12 — continuity: find the constant

### Q39
```
             { (sin 3x)/x     if x is not 0
    f(x) =   {                                is continuous at x = 0.  Then k =
             {     k          if x = 0

   (a) 0      (b) 1      (c) 3      (d) 1/3
```
**ANSWER: (c)** — `k = lim (sin3x)/x = 3`

---

### Q40
```
             { (1 - cos x)/x^2     if x is not 0
    f(x) =   {                                    is continuous at 0.  Then k =
             {        k            if x = 0

   (a) 0      (b) 1      (c) 1/2      (d) 2
```
**ANSWER: (c)**

---

### Q41
```
             { (e^(2x) - 1)/x      if x is not 0
    f(x) =   {                                   is continuous at 0.  Then k =
             {        k            if x = 0

   (a) 1      (b) 2      (c) 1/2      (d) 0
```
**ANSWER: (b)**

---

### Q42
```
             { a x + 1     if x <= 3
    f(x) =   {                          is continuous at x = 3.  Then
             { b x + 3     if x >  3

   (a) 3a - 3b = 2    (b) 3a + 3b = 2    (c) a = b    (d) a - b = 2
```
**ANSWER: (a)**
```
   LHL = 3a + 1 ,  RHL = 3b + 3 .   Equate:  3a + 1 = 3b + 3  ->  3a - 3b = 2
```

---

# PATTERN 13 — where is a function discontinuous?

### Q43
```
   The number of points at which f(x) = [ x ] is discontinuous in the
   open interval ( 0 , 3 ) is

   (a) 1      (b) 2      (c) 3      (d) infinitely many
```
**ANSWER: (b)** — the integers strictly inside `(0, 3)` are `1` and `2`

---

### Q44
```
   f(x) = 1 / ( x^2 - 3x + 2 )  is discontinuous at

   (a) x = 0 only      (b) x = 1 and x = 2
   (c) x = -1 and -2   (d) nowhere
```
**ANSWER: (b)** — `x^2 - 3x + 2 = (x - 1)(x - 2)`, zero at 1 and 2

---

### Q45
```
   Which of the following is continuous at every real number?

   (a) [ x ]      (b) 1/x      (c) | x |      (d) tan x
```
**ANSWER: (c)** — `|x|` has a corner at 0 but no break. `[x]` breaks at every
integer, `1/x` at 0, `tan x` at odd multiples of `pi/2`.

---

### Q46
```
   f(x) = (x^2 - 4)/(x - 2) for x is not 2, and f(2) = 3.
   The discontinuity of f at x = 2 is

   (a) removable      (b) a jump      (c) infinite      (d) f is continuous
```
**ANSWER: (a)** — the limit is `4` and exists, but `f(2) = 3`. Redefining `f(2) = 4`
would repair it, so it is removable.

---

### Q47
```
   If f is continuous at x = a then

   (a) f is differentiable at a
   (b) LHL = RHL = f(a)
   (c) f(a) may not exist
   (d) the graph must be a straight line near a
```
**ANSWER: (b)** — continuity does NOT imply differentiability (`|x|` at 0 proves it).

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +--------------------------------------+----------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY             |
  +--------------------------------------+----------------------------------+
  |  any limit at all                    |  SUBSTITUTE first. If you get a  |
  |                                      |  number, that is the option.     |
  +--------------------------------------+----------------------------------+
  |  0/0 with polynomials                |  Factorise and cancel (x - a).   |
  +--------------------------------------+----------------------------------+
  |  (x^n - a^n)/(x^m - a^m)             |  Write (n/m) a^(n-m). One line.  |
  +--------------------------------------+----------------------------------+
  |  a sqrt anywhere, with 0/0           |  Multiply by the conjugate.      |
  +--------------------------------------+----------------------------------+
  |  (sqrt(1 + u) - 1)/u  ,  u -> 0      |  The answer is 1/2. Always.      |
  +--------------------------------------+----------------------------------+
  |  a rational function, x -> infinity  |  Compare degrees:                |
  |                                      |  p<q -> 0 ; p=q -> a0/b0 ;       |
  |                                      |  p>q -> infinity                 |
  +--------------------------------------+----------------------------------+
  |  sqrt(x^2 + ax + b) - x , x -> inf   |  The answer is a/2.              |
  +--------------------------------------+----------------------------------+
  |  x -> -infinity with a sqrt          |  Remember sqrt(x^2) = -x.        |
  |                                      |  Put x = -t and redo it.         |
  +--------------------------------------+----------------------------------+
  |  sin, tan, sin^-1, tan^-1 of (kx),   |  Replace each by kx and cancel.  |
  |  as x -> 0                           |  (small-angle replacement)       |
  +--------------------------------------+----------------------------------+
  |  1 - cos(kx)                         |  Replace by (kx)^2 / 2.          |
  +--------------------------------------+----------------------------------+
  |  e^(kx) - 1   or   log(1 + kx)       |  Replace each by kx.             |
  +--------------------------------------+----------------------------------+
  |  a^x - 1                             |  Replace by x log a.             |
  +--------------------------------------+----------------------------------+
  |  a^x - b^x  over x                   |  The answer is log(a/b).         |
  +--------------------------------------+----------------------------------+
  |  base -> 1 and power -> infinity     |  Answer = e^( power x (base-1) ) |
  +--------------------------------------+----------------------------------+
  |  ((x+a)/(x+b))^x                     |  The answer is e^(a - b).        |
  +--------------------------------------+----------------------------------+
  |  |x| or [x] or a piecewise rule      |  Do LHL and RHL SEPARATELY.      |
  |                                      |  Unequal -> "does not exist".    |
  +--------------------------------------+----------------------------------+
  |  something bounded x something -> 0  |  The whole thing -> 0.           |
  +--------------------------------------+----------------------------------+
  |  sin(1/x) alone as x -> 0            |  Does not exist (it oscillates). |
  +--------------------------------------+----------------------------------+
  |  "find k for continuity"             |  k = the limit. Nothing else.    |
  +--------------------------------------+----------------------------------+
  |  "classify the discontinuity"        |  Limit exists -> removable.      |
  |                                      |  LHL != RHL finite -> jump.      |
  |                                      |  Either side infinite -> infinite|
  +--------------------------------------+----------------------------------+
  |  [x] , "how many discontinuities"    |  Count the INTEGERS in the       |
  |                                      |  interval. Watch open vs closed. |
  +--------------------------------------+----------------------------------+
  |  "continuous implies differentiable" |  FALSE. |x| at 0 is the answer.  |
  +--------------------------------------+----------------------------------+
```

## THE 20-SECOND MENTAL CHECKLIST

```
   1.  Substitute.        Number?  ->  answer it, move on.
   2.  0/0 ?              ->  factorise / conjugate / small-angle replace
   3.  inf/inf ?          ->  compare degrees
   4.  inf - inf ?        ->  a/2 formula, or conjugate
   5.  1^inf ?            ->  e^(power x (base - 1))
   6.  modulus / [x] ?    ->  LHL and RHL, expect "does not exist"

   EAPCET: you lose nothing for a wrong answer. If the clock is dying,
   pick the option that matches the leading-coefficient ratio or the
   small-angle ratio - it is right far more often than chance.
```
