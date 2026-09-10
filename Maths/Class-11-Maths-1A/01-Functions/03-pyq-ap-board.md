# Functions — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IA · **Chapter 1**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So these are grouped by "how often they appear" rather than being tagged to one
> exact year. Before your exam, cross-check with the official papers at
> **bie.ap.gov.in**.

**Where this chapter appears in the Maths IA paper:**

```
  Paper total 75 marks

  Section A  (2 marks each, answer ALL 10)   ->  usually Q1 and Q2
  Section B  (4 marks each, answer any 5)    ->  occasionally appears
  Section C  (7 marks each, answer any 5)    ->  usually the FIRST long answer

  So this chapter almost always gives you 2 + 2 = 4 easy marks in Section A,
  plus a 7-mark bijection-and-inverse question you can prepare word for word.
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10.
# ===============================================================

## Topic: Finding the DOMAIN (the single most repeated question)

### Q A1
Find the domain of the real function

```
                1
    f(x)  =  ---------
              x^2 - 1
```

**ANSWER:**
```
  The bottom must not be zero.

      x^2 - 1  is not 0
      (x - 1)(x + 1)  is not 0
      x is not 1  and  x is not -1

  DOMAIN  =  R  minus  { 1 , -1 }
```

---

### Q A2
Find the domain of f(x) = sqrt(4 - x^2)

**ANSWER:**
```
  Inside a square root must be >= 0.

      4 - x^2  >=  0
      x^2  <=  4
      -2  <=  x  <=  2

  DOMAIN  =  [ -2 , 2 ]
```

---

### Q A3
Find the domain of

```
                 1
    f(x)  =  --------------
              6x - x^2 - 5
```

**ANSWER:**
```
  Bottom must not be zero.

      6x - x^2 - 5  =  -(x^2 - 6x + 5)  =  -(x - 1)(x - 5)

      This is zero at  x = 1  and  x = 5.

  DOMAIN  =  R  minus  { 1 , 5 }
```

---

### Q A4
Find the domain of f(x) = sqrt(x^2 - 25)

**ANSWER:**
```
      x^2 - 25  >=  0
      (x - 5)(x + 5)  >=  0

  Roots are -5 and 5.  Positive OUTSIDE the roots:

  --------- + ---------o--------- - ---------o--------- + ---------
                      -5                     5

  DOMAIN  =  ( -inf , -5 ]  union  [ 5 , inf )
```

---

### Q A5
Find the domain of f(x) = log(x^2 - 4x + 3)

**ANSWER:**
```
  A log needs its inside STRICTLY greater than 0.

      x^2 - 4x + 3  >  0
      (x - 1)(x - 3)  >  0

  Positive outside the roots 1 and 3.  Strict, so ROUND brackets.

  DOMAIN  =  ( -inf , 1 )  union  ( 3 , inf )
```

---

### Q A6
Find the domain of

```
                   1
    f(x)  =  ---------------
              sqrt(1 - x^2)
```

**ANSWER:**
```
  Square root AND denominator together, so the inside must be
  STRICTLY greater than 0.

      1 - x^2  >  0
      x^2  <  1
      -1  <  x  <  1

  DOMAIN  =  ( -1 , 1 )        (open interval - endpoints excluded)
```

---

### Q A7
Find the domain of f(x) = sqrt(x - 1) + sqrt(3 - x)

**ANSWER:**
```
  First root :  x - 1 >= 0   ->   x >= 1
  Second root:  3 - x >= 0   ->   x <= 3

  BOTH must hold at once, so take the OVERLAP:

      ---------[=============]---------
               1             3

  DOMAIN  =  [ 1 , 3 ]
```

---

### Q A8
Find the domain of

```
                    1
    f(x)  =  ---------------
              log( 2 - x )
```

**ANSWER:**
```
  Condition 1 (log)        :   2 - x  >  0    ->   x  <  2
  Condition 2 (denominator):   log(2 - x)  is not 0
                               2 - x  is not 1
                               x  is not 1

  DOMAIN  =  ( -inf , 2 )  minus  { 1 }
```

---

### Q A9
Find the domain of

```
                    1
    f(x)  =  -----------------
              sqrt( x - |x| )
```

**ANSWER:**
```
  Case x >= 0 :   |x| = x   ->   x - |x| = 0   ->  bottom is 0.  Rejected.
  Case x <  0 :   |x| = -x  ->   x - |x| = 2x  <  0.  A negative number
                  cannot go inside a square root.  Rejected.

  No value of x works.

  DOMAIN  =  the EMPTY SET
```

---

## Topic: Finding the RANGE

### Q A10
Find the range of f(x) = |x| / x

**ANSWER:**
```
  Domain is R minus {0}.

      x > 0  ->  |x| = x   ->  f(x) =  x / x  =  1
      x < 0  ->  |x| = -x  ->  f(x) = -x / x  = -1

  RANGE  =  { -1 , 1 }
```

---

### Q A11
Find the domain and range of

```
              x^2 - 4
    f(x)  =  ---------
               x - 2
```

**ANSWER:**
```
  DOMAIN:  bottom not zero  ->  x is not 2   ->   R minus {2}

  Cancel:   (x - 2)(x + 2) / (x - 2)  =  x + 2 ,   but only for x not 2.

  Since x can never be 2, the output can never be 2 + 2 = 4.

  RANGE  =  R  minus  { 4 }
```

---

### Q A12
Find the range of f(x) = sqrt(9 - x^2)

**ANSWER:**
```
  Domain:  9 - x^2 >= 0  ->  -3 <= x <= 3

  As x runs over [-3, 3], the inside 9 - x^2 runs from 0 up to 9.
  Its square root runs from 0 up to 3.

  RANGE  =  [ 0 , 3 ]
```

---

## Topic: Algebra of functions on ordered pairs

### Q A13
If f = { (1, 2), (2, -3), (3, -1) }, then find 2f, f^2, 2 + f and sqrt(f).

**ANSWER:**
```
  Apply the operation to the SECOND component only.

  2f      = { (1, 4), (2, -6), (3, -2) }

  f^2     = { (1, 4), (2, 9), (3, 1) }

  2 + f   = { (1, 4), (2, -1), (3, 1) }

  sqrt(f) = { (1, sqrt 2) }

            Only x = 1 survives: the images -3 and -1 are NEGATIVE, and
            the square root of a negative number is not real.
```

---

### Q A14
If f(x) = 2, g(x) = x^2 and h(x) = 2x for all x in R, find ( f o (g o h) )(x).

**ANSWER:**
```
  (g o h)(x)  =  g( 2x )  =  (2x)^2  =  4x^2

  ( f o (g o h) )(x)  =  f( 4x^2 )

  But f is the CONSTANT function 2, so whatever you feed it, the output is 2.

  ANSWER  =  2
```

---

## Topic: Composite functions

### Q A15
If f(x) = 2x - 1 and g(x) = (x + 1)/2 for all x in R, find (gof)(x).

**ANSWER:**
```
  (gof)(x)  =  g( f(x) )  =  g( 2x - 1 )

                (2x - 1) + 1        2x
             =  --------------  =  ----  =  x
                      2             2

  (gof)(x) = x , the identity function.   So g is the inverse of f.
```

---

### Q A16
If f(x) = 3x - 1 and g(x) = x^2 + 1, find (fog)(2) and (gof)(2).

**ANSWER:**
```
  (fog)(2)  =  f( g(2) )  =  f( 4 + 1 )  =  f(5)  =  3(5) - 1  =  14

  (gof)(2)  =  g( f(2) )  =  g( 6 - 1 )  =  g(5)  =  25 + 1    =  26
```

---

## Topic: Piecewise functions

### Q A17
```
                 +-  3x - 2      if  x  >  3
                 |
     f(x)  =    -|  x^2 - 2      if  -2 <= x <= 2
                 |
                 +-  2x + 1      if  x  <  -3

     Find f(4), f(2.5), f(-2), f(-4), f(0) and f(-7).
```

**ANSWER:**
```
  f(4)    :  4 > 3            ->   3(4) - 2    =  10
  f(2.5)  :  2.5 is not > 3, not in [-2,2], not < -3
                              ->   NOT DEFINED
  f(-2)   :  -2 lies in [-2,2] ->  (-2)^2 - 2  =  2
  f(-4)   :  -4 < -3          ->   2(-4) + 1   =  -7
  f(0)    :  0 lies in [-2,2] ->   0 - 2       =  -2
  f(-7)   :  -7 < -3          ->   2(-7) + 1   =  -13
```
> The f(2.5) part is the whole point of the question. There is a GAP in the
> definition between 2 and 3. "Not defined" is the correct, full-mark answer.

---

## Topic: Greatest integer function

### Q A18
Find the value of [2.7] + [-2.7] + [3].

**ANSWER:**
```
  [2.7]  =  2      (greatest integer not exceeding 2.7)
  [-2.7] = -3      (NOT -2 :  -3 <= -2.7 , but -2 > -2.7)
  [3]    =  3      (x is already an integer)

  Sum  =  2 + (-3) + 3  =  2
```

---

## Topic: Substitution identities

### Q A19
If f(x) = (1 - x^2) / (1 + x^2), show that f(tan A) = cos 2A.

**ANSWER:**
```
                    1 - tan^2 A
  f(tan A)  =  -----------------
                    1 + tan^2 A

  This is exactly the standard identity

                    1 - tan^2 A
       cos 2A  =  -----------------
                    1 + tan^2 A

  Hence f(tan A) = cos 2A.
```

---

### Q A20
If f(x) = (x - 1)/(x + 1), show that f(2x) = ( 3 f(x) + 1 ) / ( f(x) + 3 ).

**ANSWER:**
```
  RHS  =  [ 3 (x-1)/(x+1) + 1 ]  /  [ (x-1)/(x+1) + 3 ]

  Multiply top and bottom by (x + 1):

       =  [ 3(x - 1) + (x + 1) ]  /  [ (x - 1) + 3(x + 1) ]

       =  ( 3x - 3 + x + 1 ) / ( x - 1 + 3x + 3 )

       =  ( 4x - 2 ) / ( 4x + 2 )

       =  ( 2x - 1 ) / ( 2x + 1 )

  LHS  =  f(2x)  =  ( 2x - 1 ) / ( 2x + 1 )

  LHS = RHS.  Proved.
```

---

## Topic: Counting

### Q A21
If A has 3 elements and B has 2 elements, find the number of functions from
A to B, and the number of one-one functions from A to B.

**ANSWER:**
```
  Number of functions  =  n^m  =  2^3  =  8
                          (base = size of the set you go TO)

  One-one functions:  m = 3 is bigger than n = 2, so two inputs are FORCED
  to share an image.

  Number of one-one functions  =  0
```

---

### Q A22
If n(A) = 3 and n(B) = 4, find the number of relations from A to B and the
number of one-one functions from A to B.

**ANSWER:**
```
  Relations  =  2^(mn)  =  2^(3 x 4)  =  2^12  =  4096

  One-one    =  nPm  =  4P3  =  4 x 3 x 2  =  24
```

---

## Topic: Inverse

### Q A23
If f : R -> R is defined by f(x) = 4x + 7, find f^-1.

**ANSWER:**
```
  Let  y = 4x + 7
       y - 7 = 4x
       x = (y - 7)/4

                   x - 7
  So   f^-1(x) =  -------
                     4

  Check: f( (x-7)/4 ) = 4[(x-7)/4] + 7 = x - 7 + 7 = x.  Correct.
```

---

### Q A24
If f(x) = (2x + 1)/(3x - 2), find (f o f)(x).

**ANSWER:**
```
  (fof)(x)  =  f( (2x+1)/(3x-2) )

               2 (2x+1)/(3x-2)  +  1
            =  -----------------------
               3 (2x+1)/(3x-2)  -  2

  Multiply top and bottom by (3x - 2):

               2(2x + 1) + (3x - 2)          4x + 2 + 3x - 2        7x
            =  ---------------------   =   -----------------  =  ------  =  x
               3(2x + 1) - 2(3x - 2)        6x + 3 - 6x + 4         7

  (fof)(x) = x , so f is its OWN inverse.
  (This happens because a + d = 2 + (-2) = 0.)
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 out of 7. Functions appears here some years.
# ===============================================================

### Q B1
```
    f = { (1, 2), (2, -3), (3, -1) }
    g = { (2, -1), (4, 2), (1, -3) }

    Find  f + g ,  f - g ,  fg ,  f/g  and their domains.
```

**ANSWER:**
```
  Domain of f = {1, 2, 3}          Domain of g = {1, 2, 4}

  COMMON DOMAIN  D  =  {1, 2, 3} intersect {1, 2, 4}  =  {1, 2}

  Values on the common domain:

      x        f(x)      g(x)
     ---      ------    ------
      1         2         -3
      2        -3         -1

  (f + g)  =  { (1, 2 + (-3)) , (2, -3 + (-1)) }
           =  { (1, -1) , (2, -4) }                  domain {1, 2}

  (f - g)  =  { (1, 2 - (-3)) , (2, -3 - (-1)) }
           =  { (1, 5) , (2, -2) }                   domain {1, 2}

  (f g)    =  { (1, 2 x (-3)) , (2, (-3) x (-1)) }
           =  { (1, -6) , (2, 3) }                   domain {1, 2}

  (f / g)  =  { (1, 2 / (-3)) , (2, (-3)/(-1)) }
           =  { (1, -2/3) , (2, 3) }                 domain {1, 2}

           (g is never 0 on the common domain, so nothing extra is removed)
```

---

### Q B2
If f(x) = sqrt(x) and g(x) = x - 3, find f + g, fg and f/g together with
their domains.

**ANSWER:**
```
  D(f) = [0, inf)          D(g) = R
  Common domain  D  =  [0, inf)

  (f + g)(x)  =  sqrt(x) + x - 3                domain  [0, inf)

  (f g)(x)    =  sqrt(x) . (x - 3)              domain  [0, inf)

   f            sqrt(x)
  ---(x)   =   ---------                        domain  [0, inf) minus {3}
   g             x - 3                          i.e.  [0, 3) union (3, inf)

  The extra step for f/g:  remove every x where g(x) = 0, that is x = 3.
```

---

### Q B3
Find the domain and the range of

```
              x - 3
    f(x) =  ---------
              x - 2
```

**ANSWER:**
```
  DOMAIN
      Bottom not zero:  x - 2 is not 0  ->  x is not 2
      DOMAIN = R minus {2}

  RANGE
      Put  y = (x - 3)/(x - 2)
           y(x - 2) = x - 3
           xy - 2y = x - 3
           xy - x = 2y - 3
           x(y - 1) = 2y - 3
                 2y - 3
           x  = ---------        this needs  y - 1  not equal to 0
                  y - 1

      So y can be anything except 1.

      RANGE = R minus {1}
```

---

### Q B4
Show that fog is not equal to gof, where f(x) = 2x - 1 and g(x) = x^2 + 2.

**ANSWER:**
```
  (fog)(x)  =  f( g(x) )
            =  f( x^2 + 2 )
            =  2(x^2 + 2) - 1
            =  2x^2 + 4 - 1
            =  2x^2 + 3

  (gof)(x)  =  g( f(x) )
            =  g( 2x - 1 )
            =  (2x - 1)^2 + 2
            =  4x^2 - 4x + 1 + 2
            =  4x^2 - 4x + 3

  Compare:      2x^2 + 3      and      4x^2 - 4x + 3

  Put x = 1 :   2 + 3 = 5             4 - 4 + 3 = 3

  5 is not 3, so  fog  is NOT equal to  gof.
```
> Always finish with a NUMERICAL check like x = 1. It makes the difference
> undeniable and the examiner cannot argue with it.

---

### Q B5
Find the domain of

```
    (i)  f(x) = sqrt(x^2 - 3x + 2)

    (ii) g(x) = 1 / sqrt(x^2 - 1)
```

**ANSWER:**
```
  (i)   x^2 - 3x + 2  >=  0
        (x - 1)(x - 2)  >=  0

        Roots 1 and 2.  Positive OUTSIDE the roots.
        Test:  x = 0 -> (-1)(-2) = 2 > 0    allowed
               x = 1.5 -> (0.5)(-0.5) < 0   not allowed
               x = 3 -> (2)(1) = 2 > 0      allowed

        DOMAIN = ( -inf , 1 ]  union  [ 2 , inf )


  (ii)  Square root AND denominator, so STRICT:
        x^2 - 1  >  0
        (x - 1)(x + 1)  >  0

        DOMAIN = ( -inf , -1 )  union  ( 1 , inf )
```

---

### Q B6
If f : R -> R is defined by f(x) = 4x + 7, show that f is a bijection and
find f^-1.

**ANSWER:**
```
  ONE-ONE
      Let f(a) = f(b).
          4a + 7 = 4b + 7
              4a = 4b
               a = b
      Hence f is one-one.

  ONTO
      Let y be any real number.
          y = 4x + 7   ->   x = (y - 7)/4 , which is a real number.
          f( (y-7)/4 ) = 4[(y-7)/4] + 7 = y.
      So every y in R has a pre-image.  Hence f is onto.

  CONCLUSION
      f is one-one and onto, therefore f is a BIJECTION.

                   x - 7
      f^-1(x)  =  -------
                     4
```

---

### Q B7
Determine whether each of the following is an injection, a surjection, a
bijection, or none:

```
   (i)   f : R -> R ,        f(x) = 2x + 1
   (ii)  f : R -> R ,        f(x) = x^2
   (iii) f : N -> N ,        f(x) = x^2
   (iv)  f : R -> [0, inf) , f(x) = x^2
```

**ANSWER:**
```
  (i)   ONE-ONE: 2a + 1 = 2b + 1  ->  a = b.   YES
        ONTO   : x = (y - 1)/2 is real for every real y.   YES
        VERDICT: BIJECTION

  (ii)  ONE-ONE: f(2) = 4 = f(-2) but 2 is not -2.   NO
        ONTO   : -9 is in the codomain R but x^2 is never negative.   NO
        VERDICT: neither (many-one into)

  (iii) ONE-ONE: a^2 = b^2 -> (a-b)(a+b) = 0.  Since a, b are natural
        numbers, a + b > 0, so a = b.   YES
        ONTO   : 3 is in N but sqrt(3) is not a natural number.   NO
        VERDICT: INJECTION only

  (iv)  ONE-ONE: f(2) = f(-2) = 4.   NO
        ONTO   : for any y >= 0, x = sqrt(y) is real and f(x) = y.   YES
        VERDICT: SURJECTION only
```
> Rows (ii), (iii) and (iv) use the SAME formula x^2. Only the sets changed.
> Read the arrow in "f : A -> B" before you answer anything.

---

### Q B8
If f : R -> R is defined by f(x) = cos( log x ) for x > 0, show that

```
                                  1
   f(1/x) f(1/y)  -  --- [ f(x/y) + f(xy) ]  =  0
                                  2
```

**ANSWER:**
```
  Write  P = log x  and  Q = log y.

      f(1/x)  =  cos( log(1/x) )  =  cos( -P )  =  cos P
      f(1/y)  =  cos( log(1/y) )  =  cos( -Q )  =  cos Q

      f(1/x) f(1/y)  =  cos P . cos Q

      f(x/y)  =  cos( log x - log y )  =  cos(P - Q)
      f(xy)   =  cos( log x + log y )  =  cos(P + Q)

      f(x/y) + f(xy)  =  cos(P - Q) + cos(P + Q)
                      =  2 cos P cos Q          (standard sum formula)

      (1/2)[ f(x/y) + f(xy) ]  =  cos P cos Q

  Therefore
      LHS  =  cos P cos Q  -  cos P cos Q  =  0.     Proved.
```

---

### Q B9
Find the number of onto functions from a set A with 4 elements to a set B
with 3 elements.

**ANSWER:**
```
  m = 4 , n = 3.  Since m >= n, onto functions can exist.

  Number of onto functions  =  n^m - nC1 (n-1)^m + nC2 (n-2)^m

                            =  3^4  -  3 x 2^4  +  3 x 1^4

                            =  81  -  48  +  3

                            =  36
```

---

### Q B10
If f(x) = 2x - 1 and g(x) = (x + 1)/2 for all x in R, prove that
fog = gof = I, and hence state the relation between f and g.

**ANSWER:**
```
  (fog)(x)  =  f( (x+1)/2 )  =  2 . (x+1)/2  -  1  =  (x + 1) - 1  =  x

  (gof)(x)  =  g( 2x - 1 )   =  ( (2x - 1) + 1 ) / 2  =  2x / 2  =  x

  Both composites equal the identity function I.

  By the theorem "if gof = I and fog = I then g = f^-1",

              g  =  f^-1        (and equally  f = g^-1)
```

---

### Q B11
If f(x) = x^2 and g(x) = 2^x, find (fog)(x) and (gof)(x), and evaluate each
at x = 3.

**ANSWER:**
```
  (fog)(x)  =  f( 2^x )  =  ( 2^x )^2  =  2^(2x)  =  4^x

  (gof)(x)  =  g( x^2 )  =  2^(x^2)

  At x = 3:
      (fog)(3)  =  4^3      =  64
      (gof)(3)  =  2^(3^2)  =  2^9  =  512

  Clearly fog is not gof.
```

---

### Q B12
Find the domain and range of f(x) = x / (1 + x).

**ANSWER:**
```
  DOMAIN
      1 + x is not 0   ->   x is not -1
      DOMAIN = R minus { -1 }

  RANGE
      y = x / (1 + x)
      y(1 + x) = x
      y + xy = x
      y = x - xy = x(1 - y)
                y
      x  =  --------      needs  1 - y  not equal to 0
             1 - y

      So y can be anything except 1.

      RANGE = R minus { 1 }
```
> **Shortcut:** for (ax+b)/(cx+d), domain excludes -d/c and range excludes a/c.
> Here a = 1, b = 0, c = 1, d = 1, so domain excludes -1 and range excludes 1.
> Same answer in five seconds. Still show the algebra for the 4 marks.

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 out of 7. This chapter is usually the FIRST long answer.
# ===============================================================

### Q C1  (the most common form)
Show that f : R \ {2} -> R \ {1} defined by

```
              x - 3
    f(x) =  ---------
              x - 2
```

is a bijection, and find f^-1.

**ANSWER:**

```
  PART 1 — f IS ONE-ONE

      Let a, b be in R\{2} with f(a) = f(b).

           a - 3       b - 3
          -------  =  -------
           a - 2       b - 2

      Cross multiply:

          (a - 3)(b - 2)  =  (b - 3)(a - 2)

          ab - 2a - 3b + 6  =  ab - 2b - 3a + 6

              -2a - 3b  =  -2b - 3a

              -2a + 3a  =  -2b + 3b

                     a  =  b

      Therefore f is ONE-ONE.


  PART 2 — f IS ONTO

      Let y be any element of R\{1}.  Solve y = f(x):

          y (x - 2)  =  x - 3
          xy - 2y    =  x - 3
          xy - x     =  2y - 3
          x (y - 1)  =  2y - 3

                    2y - 3
          x   =    ---------        defined because y is not 1
                     y - 1

      This x is a real number.  We must also check x is not 2:

          if  (2y - 3)/(y - 1) = 2   then   2y - 3 = 2y - 2   ->   -3 = -2,
          which is impossible.  So x is never 2, i.e. x lies in R\{2}.

      And f(x) = y by construction.

      Therefore every y in R\{1} has a pre-image in R\{2}, so f is ONTO.


  PART 3 — CONCLUSION AND THE INVERSE

      f is one-one and onto, hence f is a BIJECTION and f^-1 exists.

      From PART 2, x = (2y - 3)/(y - 1).  Swapping the letters:

                          2x - 3
          f^-1(x)   =   ---------- ,      x in R\{1}
                           x - 1

      VERIFICATION

          f( f^-1(x) )
              =  [ (2x-3)/(x-1)  -  3 ]  /  [ (2x-3)/(x-1)  -  2 ]

          multiply top and bottom by (x - 1):

              =  [ (2x - 3) - 3(x - 1) ]  /  [ (2x - 3) - 2(x - 1) ]

              =  ( 2x - 3 - 3x + 3 ) / ( 2x - 3 - 2x + 2 )

              =  ( -x ) / ( -1 )

              =  x                        correct.
```

---

### Q C2
If f : A -> B and g : B -> C are bijections, then prove that
g o f : A -> C is a bijection.

**ANSWER:**

```
  GIVEN
      f : A -> B is one-one and onto.
      g : B -> C is one-one and onto.
      (gof)(a) = g( f(a) )  for a in A ,  so  gof : A -> C.


  PART 1 — gof IS ONE-ONE

      Let a1, a2 be in A with  (gof)(a1) = (gof)(a2).

          g( f(a1) )  =  g( f(a2) )

      Since g is ONE-ONE, equal outputs force equal inputs:

          f(a1)  =  f(a2)

      Since f is ONE-ONE:

          a1  =  a2

      Therefore gof is ONE-ONE.


  PART 2 — gof IS ONTO

      Let c be any element of C.

      Since g is ONTO, there is some b in B with  g(b) = c.

      Since f is ONTO, there is some a in A with  f(a) = b.

      Then
          (gof)(a)  =  g( f(a) )  =  g(b)  =  c

      So every c in C has a pre-image a in A.

      Therefore gof is ONTO.


  CONCLUSION

      gof is both one-one and onto, hence  gof : A -> C  is a BIJECTION.
```

---

### Q C3
If f : A -> B and g : B -> C are bijections, prove that

```
    (g o f)^-1  =  f^-1 o g^-1
```

**ANSWER:**

```
  STEP 1 — both sides exist

      f is a bijection, so f^-1 : B -> A exists.
      g is a bijection, so g^-1 : C -> B exists.
      By the previous theorem gof : A -> C is a bijection,
      so (gof)^-1 : C -> A exists.

      Also  f^-1 o g^-1 : C -> A ,  so both sides map C to A.


  STEP 2 — show that f^-1 o g^-1 undoes gof

      ( f^-1 o g^-1 ) o ( g o f )

          =  f^-1 o ( g^-1 o g ) o f            (composition is associative)

          =  f^-1 o I_B o f                     (since g^-1 o g = I_B)

          =  f^-1 o f

          =  I_A


  STEP 3 — show it also works the other way round

      ( g o f ) o ( f^-1 o g^-1 )

          =  g o ( f o f^-1 ) o g^-1

          =  g o I_B o g^-1

          =  g o g^-1

          =  I_C


  STEP 4 — conclusion

      f^-1 o g^-1 composed with gof gives the identity on BOTH sides.
      Since the inverse of a bijection is UNIQUE,

              (g o f)^-1  =  f^-1 o g^-1
```

> **Why the order reverses (say this in one line if you are short of time):**
> to undo "put on socks, then shoes", you must "take off shoes, then socks".

---

### Q C4
Let f : A -> B and g : B -> A be two functions such that
g o f = I_A and f o g = I_B. Prove that g = f^-1.

**ANSWER:**

```
  PART 1 — gof = I_A forces f to be ONE-ONE

      Let a1, a2 be in A with f(a1) = f(a2).

          Apply g to both sides:   g( f(a1) )  =  g( f(a2) )
          i.e.                     (gof)(a1)   =  (gof)(a2)
          i.e.                     I_A(a1)     =  I_A(a2)
          i.e.                     a1          =  a2

      So f is ONE-ONE.


  PART 2 — fog = I_B forces f to be ONTO

      Let b be any element of B.

          Put  a = g(b) , which lies in A.

          Then  f(a)  =  f( g(b) )  =  (fog)(b)  =  I_B(b)  =  b

      So b has the pre-image a = g(b).

      Therefore f is ONTO.


  PART 3 — f is a bijection, so f^-1 exists

      f is one-one and onto, hence a bijection, and f^-1 : B -> A exists.


  PART 4 — g must BE that inverse

          g  =  g o I_B
             =  g o ( f o f^-1 )
             =  ( g o f ) o f^-1          (associativity)
             =  I_A o f^-1
             =  f^-1

      Therefore  g = f^-1.
```

---

### Q C5
Determine whether the following functions are injections, surjections or
bijections, giving reasons in each case.

```
   (i)   f : R -> R ,          f(x) = 2x + 1
   (ii)  f : R -> R ,          f(x) = x^2 + 1
   (iii) f : R -> (0, inf) ,   f(x) = 2^x
   (iv)  f : N -> N ,          f(x) = x^2
   (v)   f : R -> R ,          f(x) = x^3
   (vi)  f : R -> R ,          f(x) = |x|
```

**ANSWER:**

```
  (i)   f(x) = 2x + 1 ,  R -> R

        ONE-ONE:  f(a) = f(b)  ->  2a + 1 = 2b + 1  ->  a = b.  YES
        ONTO   :  y = 2x + 1  ->  x = (y - 1)/2 , real for every real y. YES
        VERDICT:  BIJECTION


  (ii)  f(x) = x^2 + 1 ,  R -> R

        ONE-ONE:  f(1) = 2 = f(-1) but 1 is not -1.  NO
        ONTO   :  x^2 + 1 >= 1 always, so 0 (which is in R) is never an
                  output.  NO
        VERDICT:  neither (many-one, into).  Range = [1, inf).


  (iii) f(x) = 2^x ,  R -> (0, inf)

        ONE-ONE:  2^a = 2^b  ->  taking log to base 2,  a = b.  YES
        ONTO   :  for y > 0 put x = log_2 y , which is a real number,
                  and 2^(log_2 y) = y.  YES
        VERDICT:  BIJECTION
                  (Note: if the codomain had been written R instead of
                  (0, inf), it would be an injection ONLY.)


  (iv)  f(x) = x^2 ,  N -> N

        ONE-ONE:  a^2 = b^2  ->  (a - b)(a + b) = 0.  For natural numbers
                  a + b > 0 , so a = b.  YES
        ONTO   :  3 is in N , but sqrt(3) is not a natural number, so 3 has
                  no pre-image.  NO
        VERDICT:  INJECTION only


  (v)   f(x) = x^3 ,  R -> R

        ONE-ONE:  a^3 = b^3  ->  a^3 - b^3 = 0
                  ->  (a - b)(a^2 + ab + b^2) = 0
                  The second factor is zero only when a = b = 0, so in every
                  case a = b.  YES
        ONTO   :  for any real y , x = y^(1/3) is real and f(x) = y.  YES
        VERDICT:  BIJECTION


  (vi)  f(x) = |x| ,  R -> R

        ONE-ONE:  f(3) = 3 = f(-3) but 3 is not -3.  NO
        ONTO   :  |x| >= 0 always, so -5 has no pre-image.  NO
        VERDICT:  neither.  Range = [0, inf).
```

---

### Q C6
If f : Q -> Q is defined by f(x) = 5x + 4 for all x in Q, show that f is a
bijection and find f^-1.

**ANSWER:**

```
  PART 1 — ONE-ONE

      Let a, b be in Q with f(a) = f(b).

          5a + 4  =  5b + 4
              5a  =  5b
               a  =  b

      Therefore f is ONE-ONE.


  PART 2 — ONTO

      Let y be any rational number.

          y = 5x + 4
          x = (y - 4)/5

      Since y is rational and 4 and 5 are rational, (y - 4)/5 is RATIONAL,
      so x lies in Q.

      Check:  f( (y-4)/5 ) = 5[(y-4)/5] + 4 = (y - 4) + 4 = y.

      Therefore f is ONTO.


  PART 3 — CONCLUSION

      f is one-one and onto, hence a BIJECTION, so f^-1 : Q -> Q exists and

                       x - 4
          f^-1(x)  =  -------
                         5
```

> The only extra sentence compared with the R -> R version is
> "(y - 4)/5 is RATIONAL". That single line is where the marks for this
> variant are hidden. If the codomain had been Z, the same function would
> NOT be onto, because (y - 4)/5 need not be an integer.

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST
# ===============================================================

| Rank | Question type | Section | Marks | How often |
|------|---------------|---------|-------|-----------|
| 1 | **Find the domain of a real function** (root / denominator / log) | A | 2 | almost every session |
| 2 | **Prove f is a bijection and find f^-1** | C | 7 | almost every session |
| 3 | Find the range of a real function | A | 2 | very often |
| 4 | Piecewise function: find f(4), f(-2), f(0), f(2.5) | A | 2 | very often |
| 5 | f = {(1,2),(2,-3),(3,-1)} : find 2f, f^2, 2+f, sqrt(f) | A | 2 | very often |
| 6 | Show that fog is not equal to gof | A or B | 2 or 4 | often |
| 7 | gof is a bijection when f and g are bijections | C | 7 | often |
| 8 | (gof)^-1 = f^-1 o g^-1 | C | 7 | often |
| 9 | Injection / surjection / bijection for a list of functions | C | 7 | often |
| 10 | f + g, fg, f/g with domains | B | 4 | fairly often |
| 11 | Counting functions / one-one / onto from A to B | A | 2 | fairly often |
| 12 | If gof = I and fog = I then g = f^-1 | C | 7 | fairly often |
| 13 | Identity such as f(2x) = (3f(x)+1)/(f(x)+3) | A or B | 2 or 4 | sometimes |
| 14 | f(x) = cos(log x) identity | B | 4 | sometimes |
| 15 | Greatest integer values, [2.7] + [-2.7] | A | 2 | sometimes |

**Study conclusion for a weak student:**

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Learn ONLY rank 1 and rank 2 properly and you already have       |
  |   2 + 7 = 9 marks from this chapter, in about three hours of work. |
  |                                                                    |
  |   Rank 1 is a one-line box (root >= 0 , bottom not 0 , log > 0).   |
  |   Rank 2 is one page you can rehearse word for word.               |
  |                                                                    |
  +--------------------------------------------------------------------+
```
