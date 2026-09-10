# Functions — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Functions / Relations:**

```
  AP EAPCET  (Maths, 80 questions)  ->  2 to 4
  TG EAPCET  (Maths, 80 questions)  ->  2 to 4
  JEE Main   (Maths, 25 questions)  ->  1 to 2

  Nearly all of them are DOMAIN, RANGE or COMPOSITE questions.
  Almost none are proofs. The competitive exam wants speed, not rigour.
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — Counting relations, functions, injections (free marks)

### Q1
If n(A) = 3 and n(B) = 2, the number of relations from A to B is

(a) 6 &nbsp;&nbsp; (b) 8 &nbsp;&nbsp; (c) 64 &nbsp;&nbsp; (d) 9

**ANSWER: (c)**
```
  Number of relations  =  2^(mn)  =  2^(3 x 2)  =  2^6  =  64
```

---

### Q2
If n(A) = 5 and n(B) = 4, the number of functions from A to B is

(a) 20 &nbsp;&nbsp; (b) 625 &nbsp;&nbsp; (c) 1024 &nbsp;&nbsp; (d) 120

**ANSWER: (c)**
```
  Number of functions  =  n^m  =  4^5  =  1024
```
> **SHORTCUT:** the BASE is the size of the set you go TO. It is n^m, never m^n.
> Option (b) is 5^4 — the trap answer put there for people who mix them up.

---

### Q3
The number of one-one functions from a set with 3 elements to a set with
5 elements is

(a) 15 &nbsp;&nbsp; (b) 60 &nbsp;&nbsp; (c) 125 &nbsp;&nbsp; (d) 243

**ANSWER: (b)**
```
  nPm  =  5P3  =  5 x 4 x 3  =  60

  (first input has 5 choices, second has 4 left, third has 3 left)
```

---

### Q4
The number of onto functions from a set with 4 elements to a set with
2 elements is

(a) 16 &nbsp;&nbsp; (b) 14 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) 2

**ANSWER: (b)**
```
  For n = 2 :   number of onto functions  =  2^m - 2  =  2^4 - 2  =  14

  Reason: from the 16 total functions, remove the 2 CONSTANT ones,
  which are the only functions that miss an element of B.
```

---

### Q5
The number of bijections from a set with 5 elements onto itself is

(a) 25 &nbsp;&nbsp; (b) 32 &nbsp;&nbsp; (c) 120 &nbsp;&nbsp; (d) 3125

**ANSWER: (c)**
```
  Bijections from a set to itself  =  n!  =  5!  =  120
```

---

### Q6
If A = {1, 2} and B = {a, b, c}, then n(A x B) + n(B x A) =

(a) 6 &nbsp;&nbsp; (b) 9 &nbsp;&nbsp; (c) 12 &nbsp;&nbsp; (d) 5

**ANSWER: (c)**
```
  n(A x B) = 2 x 3 = 6
  n(B x A) = 3 x 2 = 6
  Sum = 12
```
> **SHORTCUT:** A x B and B x A always have the SAME NUMBER of elements,
> even though they are different sets.

---

# PATTERN 2 — DOMAIN of a real function (the most common type)

> **THE ONLY THREE RULES:**
> `sqrt(E) needs E >= 0` , `1/E needs E not 0` , `log(E) needs E > 0`.
> Two conditions together -> take the INTERSECTION.

### Q7
The domain of f(x) = 1 / (x^2 - 3x + 2) is

(a) R &nbsp;&nbsp; (b) R \ {1, 2} &nbsp;&nbsp; (c) R \ {-1, -2} &nbsp;&nbsp; (d) [1, 2]

**ANSWER: (b)**
```
  x^2 - 3x + 2  =  (x - 1)(x - 2)  which is 0 at x = 1 and x = 2.

  DOMAIN  =  R \ {1, 2}
```

---

### Q8
The domain of f(x) = sqrt( (x - 1)(x - 2)(x - 3) ) is

(a) [1, 3] &nbsp;&nbsp; (b) [1, 2] U [3, inf) &nbsp;&nbsp;
(c) (-inf, 1] U [2, 3] &nbsp;&nbsp; (d) [2, 3]

**ANSWER: (b)**
```
  Need  (x-1)(x-2)(x-3)  >=  0.  Roots 1, 2, 3.  Test each strip:

     x = 0    : (-1)(-2)(-3) = -6      NEGATIVE
     x = 1.5  : (0.5)(-0.5)(-1.5) = +  POSITIVE
     x = 2.5  : (1.5)(0.5)(-0.5) = -   NEGATIVE
     x = 4    : (3)(2)(1) = +6         POSITIVE

  ------ - ------o------ + ------o------ - ------o------ + ------
                 1              2              3

  DOMAIN  =  [1, 2]  union  [3, inf)
```
> **SHORTCUT:** for a product of DISTINCT linear factors, the sign ALTERNATES
> as you cross each root, starting POSITIVE at the far right. Mark
> `+ - + -` backwards from the right and you never need to substitute.

---

### Q9
The domain of f(x) = log(3 - x) + 1 / sqrt(x - 1) is

(a) (1, 3) &nbsp;&nbsp; (b) [1, 3] &nbsp;&nbsp; (c) (1, 3] &nbsp;&nbsp; (d) [1, 3)

**ANSWER: (a)**
```
  From the log        :  3 - x > 0    ->   x < 3
  From sqrt in bottom :  x - 1 > 0    ->   x > 1     (strict, both rules)

  Overlap:   ------(===========)------
                   1           3

  DOMAIN  =  (1, 3)
```

---

### Q10
The domain of f(x) = log_10 (1 - x) + sqrt(x + 2) is

(a) (-2, 1) &nbsp;&nbsp; (b) [-2, 1) &nbsp;&nbsp; (c) [-2, 1] &nbsp;&nbsp; (d) (-2, 1]

**ANSWER: (b)**
```
  log  :  1 - x > 0    ->   x < 1        (round bracket at 1)
  sqrt :  x + 2 >= 0   ->   x >= -2      (square bracket at -2)

  DOMAIN  =  [ -2 , 1 )
```
> **SHORTCUT:** decide each bracket separately as you write each condition.
> `>=` gives `[`, `>` gives `(`. Most wrong answers here are bracket mistakes,
> not algebra mistakes.

---

### Q11
The domain of f(x) = 1 / sqrt( x - [x] ), where [x] is the greatest integer
function, is

(a) R &nbsp;&nbsp; (b) R \ Z &nbsp;&nbsp; (c) Z &nbsp;&nbsp; (d) (0, 1)

**ANSWER: (b)**
```
  x - [x]  is the FRACTIONAL PART of x, and its range is [0, 1).

  It equals 0 exactly when x is an INTEGER.
  Everywhere else it lies strictly between 0 and 1, which is fine.

  We need it strictly positive (square root in a denominator), so remove
  the integers.

  DOMAIN  =  R \ Z
```

---

### Q12
The domain of f(x) = sqrt(x - 1) / (x - 2) is

(a) [1, inf) &nbsp;&nbsp; (b) (1, inf) &nbsp;&nbsp; (c) [1, 2) U (2, inf) &nbsp;&nbsp; (d) R \ {2}

**ANSWER: (c)**
```
  sqrt        :  x - 1 >= 0   ->   x >= 1
  denominator :  x - 2 is not 0  ->  x is not 2

  DOMAIN  =  [1, inf) minus {2}  =  [1, 2) union (2, inf)
```

---

### Q13
The domain of f(x) = sqrt(2 - 2x - x^2) is

(a) [-1-sqrt3, -1+sqrt3] &nbsp;&nbsp; (b) [-3, 1] &nbsp;&nbsp;
(c) R &nbsp;&nbsp; (d) empty set

**ANSWER: (a)**
```
      2 - 2x - x^2  >=  0
      x^2 + 2x - 2  <=  0        (multiplied by -1, sign FLIPS)

  Roots by the quadratic formula:
                -2 +- sqrt(4 + 8)         -2 +- 2 sqrt3
      x  =  -----------------------  =  ----------------- =  -1 +- sqrt3
                       2                        2

  For an UPWARD parabola, "<= 0" means BETWEEN the roots.

  DOMAIN  =  [ -1 - sqrt3 ,  -1 + sqrt3 ]
```
> **TRAP:** multiplying an inequality by -1 flips `<=` into `>=`. Half the
> wrong answers in this question come from forgetting that.

---

# PATTERN 3 — RANGE of a real function

### Q14
The range of f(x) = x^2 / (1 + x^2) is

(a) [0, 1] &nbsp;&nbsp; (b) [0, 1) &nbsp;&nbsp; (c) (0, 1) &nbsp;&nbsp; (d) R

**ANSWER: (b)**
```
  Put  y = x^2 / (1 + x^2)
       y (1 + x^2) = x^2
       y = x^2 - y x^2 = x^2 (1 - y)
                y
       x^2 = -------
              1 - y

  A square must be >= 0, so  y / (1 - y)  >=  0 ,  giving  0 <= y < 1.

  RANGE  =  [ 0 , 1 )
```
> **SHORTCUT:** rewrite as `f(x) = 1 - 1/(1 + x^2)`. Since `1 + x^2 >= 1`,
> the fraction `1/(1+x^2)` lies in `(0, 1]`, so f lies in `[0, 1)`. Ten seconds.

---

### Q15
The range of f(x) = 1 / (2 - sin 3x) is

(a) [1/3, 1] &nbsp;&nbsp; (b) [1, 3] &nbsp;&nbsp; (c) (1/3, 1) &nbsp;&nbsp; (d) R

**ANSWER: (a)**
```
      -1  <=  sin 3x  <=  1
       1  <=  2 - sin 3x  <=  3

  Taking reciprocals REVERSES the inequality (all quantities positive):

      1/3  <=  1 / (2 - sin 3x)  <=  1

  RANGE  =  [ 1/3 , 1 ]
```
> **SHORTCUT:** for `1 / (a - sin x)` or `1 / (a - cos x)` with `a > 1`,
> the range is always `[ 1/(a+1) , 1/(a-1) ]`.

---

### Q16
The range of f(x) = (x - 2) / (3 - x) is

(a) R &nbsp;&nbsp; (b) R \ {1} &nbsp;&nbsp; (c) R \ {-1} &nbsp;&nbsp; (d) R \ {3}

**ANSWER: (c)**
```
  Write it as (ax + b)/(cx + d) :  a = 1 , b = -2 , c = -1 , d = 3.

  RANGE  =  R \ { a/c }  =  R \ { 1 / (-1) }  =  R \ { -1 }

  (And DOMAIN = R \ { -d/c } = R \ { 3 }.)
```
> **SHORTCUT — memorise this pair:**
> for `(ax+b)/(cx+d)`: **domain kills `-d/c`, range kills `a/c`.**
> That one line answers a whole family of EAPCET questions instantly.

---

### Q17
The range of f(x) = x - [x] is

(a) R &nbsp;&nbsp; (b) Z &nbsp;&nbsp; (c) [0, 1) &nbsp;&nbsp; (d) (0, 1)

**ANSWER: (c)**
```
  [x] <= x < [x] + 1
   0  <=  x - [x]  <  1

  It IS 0 (whenever x is an integer) but NEVER 1.

  RANGE  =  [ 0 , 1 )
```

---

### Q18
The range of f(x) = sqrt(16 - x^2) is

(a) [-4, 4] &nbsp;&nbsp; (b) [0, 4] &nbsp;&nbsp; (c) [0, 16] &nbsp;&nbsp; (d) (0, 4)

**ANSWER: (b)**
```
  Domain: 16 - x^2 >= 0  ->  -4 <= x <= 4.
  Inside runs from 0 (at x = +-4) up to 16 (at x = 0).
  Its square root runs from 0 up to 4.

  RANGE  =  [ 0 , 4 ]
```
> **TRAP:** option (a) is the DOMAIN, not the range. A square root symbol
> NEVER produces a negative output.

---

### Q19
The range of f(x) = |x - 3| is

(a) R &nbsp;&nbsp; (b) [0, inf) &nbsp;&nbsp; (c) [3, inf) &nbsp;&nbsp; (d) (-inf, 0]

**ANSWER: (b)**
```
  A modulus is never negative, and |x - 3| = 0 when x = 3.

  RANGE  =  [ 0 , inf )
```

---

# PATTERN 4 — One-one, onto, bijection

### Q20
f : R -> R defined by f(x) = x^3 - 3x is

(a) one-one and onto &nbsp;&nbsp; (b) one-one but not onto
(c) onto but not one-one &nbsp;&nbsp; (d) neither

**ANSWER: (c)**
```
  ONE-ONE?  f(0) = 0.   f(sqrt 3) = 3 sqrt3 - 3 sqrt3 = 0.
            Two different inputs, same output.   NOT one-one.

  ONTO?     It is a CUBIC polynomial. As x -> -inf it goes to -inf, and as
            x -> +inf it goes to +inf, and it is continuous, so it takes
            EVERY real value.   ONTO.
```
> **SHORTCUT:** every ODD-degree polynomial from R to R is ONTO.
> Whether it is one-one is a separate question.

---

### Q21
f : R -> R defined by f(x) = x / (1 + |x|) is

(a) one-one and onto &nbsp;&nbsp; (b) one-one but not onto
(c) onto but not one-one &nbsp;&nbsp; (d) neither

**ANSWER: (b)**
```
  ONE-ONE?  For x >= 0 it is x/(1+x), which increases from 0 towards 1.
            For x <  0 it is x/(1-x), which increases from -1 towards 0.
            The whole function is strictly increasing.   ONE-ONE.

  ONTO?     |f(x)| = |x| / (1 + |x|)  <  1  always.
            So the range is (-1, 1), which is smaller than R.
            The value 5 is never attained.   NOT onto.
```

---

### Q22
f : R -> R defined by f(x) = x^2 + 2x + 3 is

(a) one-one and onto &nbsp;&nbsp; (b) one-one but not onto
(c) onto but not one-one &nbsp;&nbsp; (d) neither

**ANSWER: (d)**
```
  f(x) = (x + 1)^2 + 2

  ONE-ONE?  f(0) = 3 and f(-2) = 4 - 4 + 3 = 3.   NOT one-one.
  ONTO?     (x+1)^2 >= 0, so f(x) >= 2.  Range = [2, inf).
            The value 0 is never attained.   NOT onto.
```
> **SHORTCUT:** any quadratic from R to R is NEITHER one-one nor onto.
> Complete the square once and you can read off the range immediately.

---

### Q23
If f : R -> R is f(x) = a x + b with a not 0, then f is

(a) one-one only &nbsp;&nbsp; (b) onto only &nbsp;&nbsp;
(c) a bijection &nbsp;&nbsp; (d) neither

**ANSWER: (c)**
```
  ONE-ONE:  a p + b = a q + b  ->  a(p - q) = 0  ->  p = q  (since a not 0)
  ONTO   :  x = (y - b)/a is real for every real y

  Every non-constant LINEAR function from R to R is a bijection.
```

---

### Q24
f : R -> R , f(x) = 2^x is

(a) one-one and onto &nbsp;&nbsp; (b) one-one but not onto
(c) onto but not one-one &nbsp;&nbsp; (d) neither

**ANSWER: (b)**
```
  ONE-ONE:  2^p = 2^q  ->  p = q.   YES
  ONTO   :  2^x > 0 always, so 0 and all negatives are missed.   NO

  It WOULD be a bijection if the codomain were written as (0, inf).
  Read the codomain before answering.
```

---

# PATTERN 5 — Composite functions

### Q25
If f(x) = 2x + 3 and g(x) = x^2, then (gof)(1) =

(a) 5 &nbsp;&nbsp; (b) 25 &nbsp;&nbsp; (c) 11 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
  (gof)(1)  =  g( f(1) )  =  g( 2 + 3 )  =  g(5)  =  25
```
> **SHORTCUT:** the letter nearest to x goes FIRST. In gof, f goes first.
> Option (c) is 2(1)^2 + 3 = 5... option (a) is f(1). The trap options are
> always the composite done in the wrong order. Slow down for one second.

---

### Q26
If f(x) = |x| and g(x) = [x], then (fog)(-1.5) - (gof)(-1.5) =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) -1 &nbsp;&nbsp; (d) 2

**ANSWER: (b)**
```
  (fog)(-1.5)  =  f( [-1.5] )  =  f( -2 )  =  |-2|  =  2
                       ^ round DOWN, so -2 not -1

  (gof)(-1.5)  =  g( |-1.5| )  =  g( 1.5 )  =  [1.5]  =  1

  Difference  =  2 - 1  =  1
```

---

### Q27
If f(x) = 1 / (1 - x) , x not 0, 1, then (fofof)(x) =

(a) x &nbsp;&nbsp; (b) 1/x &nbsp;&nbsp; (c) 1 - x &nbsp;&nbsp; (d) (x-1)/x

**ANSWER: (a)**
```
                          1              1                1 - x       x - 1
  (fof)(x) = f( 1/(1-x) ) = ------------- = ------------- = ------- = -------
                          1 - 1/(1-x)     ((1-x)-1)/(1-x)      -x         x

  (fofof)(x) = f( (x-1)/x )
                     1                1              x
             = --------------- = ------------- = --------- =  x
               1 - (x - 1)/x     (x - x + 1)/x        1

  So f has ORDER 3:  fofof = identity.
```
> **SHORTCUT:** if a composite question offers "x" as an option, TEST a number.
> Put x = 2: f(2) = -1, f(-1) = 1/2, f(1/2) = 2. Back to 2. Answer (a).
> Fifteen seconds, no algebra.

---

### Q28
If f(x) = x / (x - 1) , x not 1, then (fof)(x) =

(a) x &nbsp;&nbsp; (b) 1/x &nbsp;&nbsp; (c) x^2/(x-1)^2 &nbsp;&nbsp; (d) -x

**ANSWER: (a)**
```
  Here a = 1 , b = 0 , c = 1 , d = -1 , and  a + d = 1 + (-1) = 0.

  For (ax+b)/(cx+d),   a + d = 0   means   f is its OWN INVERSE,
  so  (fof)(x) = x.

  Direct check:
                x/(x-1)            x/(x-1)          x
    f(f(x)) = ------------- = ----------------- = ----- = x
              x/(x-1) - 1     (x - x + 1)/(x-1)     1
```
> **SHORTCUT — worth 4 marks in 5 seconds:** in `(ax+b)/(cx+d)`,
> **`a + d = 0`  =>  `fof = identity`**. Look at the two numbers a and d
> only. Nothing else matters.

---

### Q29
If f(x) = 3x - 2 and (fog)(x) = 6x + 1, then g(x) =

(a) 2x + 1 &nbsp;&nbsp; (b) 2x - 1 &nbsp;&nbsp; (c) 6x + 3 &nbsp;&nbsp; (d) 2x + 3

**ANSWER: (a)**
```
  (fog)(x) = f( g(x) ) = 3 g(x) - 2

      3 g(x) - 2  =  6x + 1
      3 g(x)      =  6x + 3
        g(x)      =  2x + 1
```

---

### Q30
If f(x) = x^2 and g(x) = sqrt(x), then the domain of fog is

(a) R &nbsp;&nbsp; (b) [0, inf) &nbsp;&nbsp; (c) (0, inf) &nbsp;&nbsp; (d) R \ {0}

**ANSWER: (b)**
```
  (fog)(x) = f( sqrt(x) ) = ( sqrt(x) )^2 = x

  The FORMULA simplifies to x, but the inner function sqrt(x) still needs
  x >= 0.

  DOMAIN of fog  =  [ 0 , inf )
```
> **TRAP:** the simplified formula is NOT the function. The domain is always
> decided by the INNER function first.

---

# PATTERN 6 — Inverse functions

### Q31
If f(x) = (2x + 3) / (x - 1) , x not 1, then f^-1(x) =

(a) (x + 3)/(x - 2) &nbsp;&nbsp; (b) (x - 3)/(x + 2) &nbsp;&nbsp;
(c) (2x - 3)/(x + 1) &nbsp;&nbsp; (d) (x - 1)/(2x + 3)

**ANSWER: (a)**
```
  Formula:   for  (ax+b)/(cx+d) ,   f^-1(x) = (-d x + b) / (c x - a)

  Here a = 2 , b = 3 , c = 1 , d = -1 :

      f^-1(x)  =  ( 1 . x + 3 ) / ( 1 . x - 2 )  =  (x + 3)/(x - 2)

  Long way (do this if you forget the formula):
      y(x - 1) = 2x + 3
      xy - y = 2x + 3
      xy - 2x = y + 3
      x(y - 2) = y + 3
      x = (y + 3)/(y - 2)
```
> **SHORTCUT:** substitute a number. f(0) = 3/(-1) = -3. So f^-1(-3) must be 0.
> Test option (a) at x = -3: (-3+3)/(-3-2) = 0. Correct. Options (b), (c), (d)
> do not give 0. One substitution kills three options.

---

### Q32
If f : R -> R is f(x) = 3x - 5, then f^-1(x) =

(a) (x - 5)/3 &nbsp;&nbsp; (b) (x + 5)/3 &nbsp;&nbsp;
(c) 3x + 5 &nbsp;&nbsp; (d) 1/(3x - 5)

**ANSWER: (b)**
```
      y = 3x - 5   ->   y + 5 = 3x   ->   x = (y + 5)/3

      f^-1(x) = (x + 5)/3
```
> **TRAP:** option (d) is 1/f(x). The symbol f^-1 means the INVERSE FUNCTION,
> NOT the reciprocal.

---

### Q33
If f : R -> (0, inf) is f(x) = 3^x, then f^-1(x) =

(a) 3^(-x) &nbsp;&nbsp; (b) log_3 x &nbsp;&nbsp; (c) x^(1/3) &nbsp;&nbsp; (d) 1/3^x

**ANSWER: (b)**
```
      y = 3^x   ->   x = log_3 y

      f^-1(x) = log_3 x ,  defined for x > 0
```

---

### Q34
If f is a bijection and f(3) = 7, then f^-1(7) =

(a) 1/7 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) 1/3

**ANSWER: (b)**
```
  f^-1(y) = x  means exactly  f(x) = y.

  f(3) = 7   =>   f^-1(7) = 3
```

---

# PATTERN 7 — Greatest integer, modulus, signum

### Q35
If [x] denotes the greatest integer function, then [-3.4] + [3.4] =

(a) 0 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) -7

**ANSWER: (b)**
```
  [3.4]  =  3
  [-3.4] = -4        (round DOWN:  -4 <= -3.4 , but -3 > -3.4)

  Sum  =  3 + (-4)  =  -1
```
> **SHORTCUT:** for any NON-integer x, `[x] + [-x] = -1`.
> For any INTEGER x, `[x] + [-x] = 0`. That single line answers the whole
> family of these questions.

---

### Q36
If [x] = -3, then x lies in

(a) (-3, -2) &nbsp;&nbsp; (b) [-3, -2) &nbsp;&nbsp; (c) (-4, -3] &nbsp;&nbsp; (d) [-4, -3)

**ANSWER: (b)**
```
  [x] = n   means   n <= x < n + 1

  So  [x] = -3   means   -3 <= x < -2

  x lies in  [ -3 , -2 )
```

---

### Q37
The number of real solutions of |x| = x^2 is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  x^2 = |x|^2 always, so the equation is  |x|^2 = |x| .

  Put t = |x| , with t >= 0 :

      t^2 = t   ->   t(t - 1) = 0   ->   t = 0  or  t = 1

      t = 0  ->  x = 0
      t = 1  ->  x = 1  or  x = -1

  Three solutions:  x = -1, 0, 1
```

---

### Q38
sgn( sgn( sgn( x ) ) ) equals

(a) 1 &nbsp;&nbsp; (b) 0 &nbsp;&nbsp; (c) sgn(x) &nbsp;&nbsp; (d) x

**ANSWER: (c)**
```
  sgn(x) only ever outputs -1, 0 or 1.

      sgn(1)  =  1
      sgn(0)  =  0
      sgn(-1) = -1

  So applying sgn a second time changes nothing:  sgn(sgn(x)) = sgn(x),
  and therefore any number of applications gives sgn(x).
```

---

# PATTERN 8 — Functional equations (JEE favourite)

### Q39
If f(x + y) = f(x) f(y) for all x, y and f(1) = 2, then f(4) =

(a) 8 &nbsp;&nbsp; (b) 16 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 32

**ANSWER: (b)**
```
  f(2) = f(1 + 1) = f(1) f(1) = 2 x 2 = 4
  f(3) = f(2 + 1) = f(2) f(1) = 4 x 2 = 8
  f(4) = f(3 + 1) = f(3) f(1) = 8 x 2 = 16
```
> **SHORTCUT:** `f(x + y) = f(x) f(y)` always means `f(x) = a^x` with
> `a = f(1)`. Here f(x) = 2^x, so f(4) = 16 in one step.
> Similarly `f(xy) = f(x) + f(y)` means a LOG.

---

### Q40
If f(x) + 2 f(1/x) = 3x for all x not 0, then f(2) =

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) -2

**ANSWER: (b)**
```
  EQUATION 1 :        f(x) + 2 f(1/x)  =  3x

  Replace x by 1/x :

  EQUATION 2 :        f(1/x) + 2 f(x)  =  3/x

  Multiply EQUATION 2 by 2 :   2 f(1/x) + 4 f(x)  =  6/x

  Subtract EQUATION 1 :        3 f(x)  =  6/x  -  3x

                                f(x)  =  2/x  -  x

  Therefore  f(2)  =  2/2 - 2  =  1 - 2  =  -1
```
> **SHORTCUT for the whole family:** whenever you see f(x) and f(1/x) in one
> equation, write the SAME equation with x replaced by 1/x, then eliminate
> f(1/x) like two simultaneous equations. It works every time.

---

### Q41
If f(x) = ( a - x^n )^(1/n) with a > 0 and n a positive integer, then
(f o f)(x) =

(a) a &nbsp;&nbsp; (b) x &nbsp;&nbsp; (c) x^n &nbsp;&nbsp; (d) a - x

**ANSWER: (b)**
```
  f( f(x) )  =  [  a  -  ( (a - x^n)^(1/n) )^n  ]^(1/n)

             =  [  a  -  ( a - x^n )  ]^(1/n)

             =  [  x^n  ]^(1/n)

             =  x
```

---

### Q42
If f(x) = log( (1 + x) / (1 - x) ) for -1 < x < 1, then
f( 2x / (1 + x^2) ) =

(a) f(x) &nbsp;&nbsp; (b) 2 f(x) &nbsp;&nbsp; (c) [f(x)]^2 &nbsp;&nbsp; (d) -f(x)

**ANSWER: (b)**
```
                       1 + 2x/(1 + x^2)
  f( 2x/(1+x^2) ) = log ------------------
                       1 - 2x/(1 + x^2)

  Multiply top and bottom inside the log by (1 + x^2):

                       1 + x^2 + 2x           (1 + x)^2
                  = log --------------  =  log -----------
                       1 + x^2 - 2x           (1 - x)^2

                                  1 + x
                  =  2  log  -----------   =  2 f(x)
                                  1 - x
```
> **SHORTCUT:** if you cannot see the algebra, put x = 0.5 in your head or on
> paper and compare the numbers. In an MCQ, one numerical test beats a proof.

---

### Q43
If f(x) = cos(log x), then f(x) f(y) - (1/2) [ f(x/y) + f(xy) ] =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) -1 &nbsp;&nbsp; (d) 1/2

**ANSWER: (a)**
```
  Let P = log x and Q = log y.

      f(x) f(y)  =  cos P cos Q

      f(x/y) + f(xy)  =  cos(P - Q) + cos(P + Q)  =  2 cos P cos Q

      (1/2)[ f(x/y) + f(xy) ]  =  cos P cos Q

  Difference  =  0
```

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  "find the domain"                |  check only 3 things: sqrt >= 0,   |
  |                                   |  bottom not 0, log > 0             |
  +-----------------------------------+------------------------------------+
  |  Two or more conditions           |  INTERSECTION, never union         |
  +-----------------------------------+------------------------------------+
  |  (ax + b)/(cx + d)                |  domain kills -d/c ,               |
  |                                   |  range kills a/c                   |
  +-----------------------------------+------------------------------------+
  |  (ax + b)/(cx + d) with a + d = 0 |  fof = x , so f^-1 = f             |
  +-----------------------------------+------------------------------------+
  |  "number of functions A -> B"     |  n^m  (base = size of the TARGET)  |
  +-----------------------------------+------------------------------------+
  |  "number of one-one A -> B"       |  nPm , and 0 if m > n              |
  +-----------------------------------+------------------------------------+
  |  "number of onto A -> B", n = 2   |  2^m - 2                           |
  +-----------------------------------+------------------------------------+
  |  Odd-degree polynomial, R -> R    |  always ONTO                       |
  +-----------------------------------+------------------------------------+
  |  Any quadratic, R -> R            |  neither one-one nor onto          |
  +-----------------------------------+------------------------------------+
  |  a^x from R to R                  |  one-one, NOT onto (output > 0)    |
  +-----------------------------------+------------------------------------+
  |  A composite with "x" as an option|  substitute x = 2 and follow it    |
  +-----------------------------------+------------------------------------+
  |  f(x + y) = f(x) f(y)             |  f(x) = a^x  with a = f(1)         |
  +-----------------------------------+------------------------------------+
  |  f(xy) = f(x) + f(y)              |  f(x) = k log x                    |
  +-----------------------------------+------------------------------------+
  |  f(x) and f(1/x) in one equation  |  rewrite with x -> 1/x, eliminate  |
  +-----------------------------------+------------------------------------+
  |  [x] with a negative number       |  round DOWN.  [-2.7] = -3          |
  +-----------------------------------+------------------------------------+
  |  [x] + [-x]                       |  -1 if x is not an integer,        |
  |                                   |   0 if x is an integer             |
  +-----------------------------------+------------------------------------+
  |  Stuck, and it's EAPCET           |  GUESS - there is no negative      |
  |                                   |  marking                           |
  +-----------------------------------+------------------------------------+
```

---

# THE NUMBER-SUBSTITUTION TRICK

Most Functions MCQs have algebraic options. You almost never need the algebra.

```
  STEP 1   Pick an easy legal number, usually x = 2 (or x = 0 if it is legal).
  STEP 2   Compute what the question asks with that number.
  STEP 3   Compute every OPTION with that same number.
  STEP 4   Whichever option matches is the answer.
           If two survive, repeat with x = 3.
```

Where it works best:

| Question type | Test value |
|---------------|------------|
| Find f^-1(x) | use a point: if f(0) = -3 then f^-1(-3) must be 0 |
| Find (fof)(x) or (fofof)(x) | x = 2, just follow the number through |
| Prove f(2x) = something | x = 1 |
| Identify the domain | test one number from each option's interval |
| Functional equations | set x = y = 1, then x = y = 0 |

This turns a four-minute algebra problem into a forty-second arithmetic check.
Use it whenever the options are formulas, not numbers.
