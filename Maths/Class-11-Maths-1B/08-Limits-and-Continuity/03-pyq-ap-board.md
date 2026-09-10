# Limits and Continuity — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IB · **Chapter 8 — Limits and Continuity**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So everything below is grouped by **"how often it appears"** rather than tagged
> to one exact year. Do NOT quote a year for these in an answer.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.

---

## WHERE THIS CHAPTER SITS IN THE MATHS IB PAPER

```
  +-------------------------------------------------------------------+
  |  MATHS IB  --  75 MARKS                                           |
  |                                                                   |
  |  SECTION A   VSAQ   10 questions x 2 marks   answer ALL     = 20  |
  |  SECTION B   SAQ     7 questions x 4 marks   answer any 5   = 20  |
  |  SECTION C   LAQ     7 questions x 7 marks   answer any 5   = 35  |
  |                                                                   |
  |  Pass mark = 26                                                   |
  +-------------------------------------------------------------------+


  WHERE LIMITS AND CONTINUITY TURNS UP

  Section A  (2 marks)  ->  usually TWO questions, often near the end of
                            the Section A block. Almost always one pure
                            "evaluate the limit" plus one continuity or
                            standard-limit question.

  Section B  (4 marks)  ->  usually ONE question. It is nearly always
                            "check continuity" or "find k so that f is
                            continuous".

  Section C  (7 marks)  ->  RARE.  See the honest note below.
```

```
  +===================================================================+
  |                                                                   |
  |   HONEST NOTE ABOUT SECTION C                                     |
  |                                                                   |
  |   In Maths IB, the seven 7-mark questions of Section C are         |
  |   normally shared out among:                                      |
  |                                                                   |
  |       Locus / Transformation of Axes                              |
  |       The Straight Line                                           |
  |       Pair of Straight Lines                                      |
  |       3D Coordinates / Direction Cosines / The Plane              |
  |       Differentiation (proofs and hard derivatives)               |
  |       Tangents and Normals                                        |
  |       Rate of Change / Maxima and Minima                          |
  |                                                                   |
  |   LIMITS AND CONTINUITY IS, IN PRACTICE, A SECTION A AND          |
  |   SECTION B CHAPTER.  A dedicated 7-mark question from it is      |
  |   uncommon.                                                       |
  |                                                                   |
  |   The Section C questions given later in this file are therefore  |
  |   written as REVISION-GRADE long questions: the shape a 7-mark    |
  |   question would take if it appeared, and excellent practice      |
  |   either way. Do not budget your revision as though 7 marks are   |
  |   guaranteed here.                                                |
  |                                                                   |
  |   WHAT IS GUARANTEED:  about 8 marks from Sections A and B, and   |
  |   the entire foundation of Chapter 9 (Differentiation), which     |
  |   IS a Section C chapter.                                         |
  |                                                                   |
  +===================================================================+
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# You must answer ALL TEN in Section A. These are free marks.
# ===============================================================

## Topic: direct substitution and factorisation

### Q A1
Evaluate `lim (x^2 - 4)/(x - 2)` as `x -> 2`.

**ANSWER:**
```
   Substituting x = 2 gives 0/0, so factorise.

        (x - 2)(x + 2)
   lim  --------------   =   lim (x + 2)   =   2 + 2   =   4
  x->2      (x - 2)          x->2
```
**Answer = 4**

---

### Q A2
Evaluate `lim (x^2 - 9)/(x^2 - 2x - 3)` as `x -> 3`.

**ANSWER:**
```
   Form is 0/0.

        (x - 3)(x + 3)              x + 3        3 + 3        6        3
   lim  ---------------   =   lim   -----   =   ------   =   ---   =   -
  x->3  (x - 3)(x + 1)       x->3   x + 1        3 + 1        4        2
```
**Answer = 3/2**

---

### Q A3
Evaluate `lim (x^3 - 8)/(x - 2)` as `x -> 2`.

**ANSWER:**
```
   Use  (x^n - a^n)/(x - a)  ->  n a^(n-1)   with n = 3 , a = 2:

        3 . 2^2   =   3 . 4   =   12
```
**Answer = 12**

---

### Q A4
Evaluate `lim (x^5 - 32)/(x^3 - 8)` as `x -> 2`.

**ANSWER:**
```
   Divide top and bottom by (x - 2):

        (x^5 - 2^5)/(x - 2)         5 . 2^4        80        20
   lim  ---------------------  =   ----------  =  ----   =   --
  x->2  (x^3 - 2^3)/(x - 2)         3 . 2^2        12         3
```
**Answer = 20/3**

---

### Q A5
Evaluate `lim ( 1/x - 1/3 ) / ( x - 3 )` as `x -> 3`.

**ANSWER:**
```
   Combine the top over 3x:

        (3 - x)/(3x)              -(x - 3)                -1           -1
   lim  ------------   =   lim  ------------   =   lim   -----   =    ----
  x->3     x - 3          x->3   3x (x - 3)       x->3    3x           9
```
**Answer = -1/9**

---

## Topic: rationalisation

### Q A6
Evaluate `lim ( sqrt(1 + x) - 1 ) / x` as `x -> 0`.

**ANSWER:**
```
   Form 0/0. Multiply top and bottom by sqrt(1+x) + 1:

            (1 + x) - 1                       1              1
   lim  --------------------   =   lim  ---------------  =   -
  x->0  x ( sqrt(1+x) + 1 )       x->0  sqrt(1+x) + 1        2
```
**Answer = 1/2**

---

### Q A7
Evaluate `lim ( sqrt(1 + x) - sqrt(1 - x) ) / x` as `x -> 0`.

**ANSWER:**
```
              (1 + x) - (1 - x)                     2x
   lim  ------------------------------   =   lim  -------------------------
  x->0  x ( sqrt(1+x) + sqrt(1-x) )        x->0  x ( sqrt(1+x)+sqrt(1-x) )

                    2                     2
        =   lim  ---------------   =    -----   =   1
           x->0  sqrt(1+x)+sqrt(1-x)     1+1
```
**Answer = 1**

---

### Q A8
Evaluate `lim x / ( sqrt(1 + x) - sqrt(1 - x) )` as `x -> 0`.

**ANSWER:** This is the reciprocal of Q A7, whose value is 1.
```
   Answer  =  1/1  =  1
```
**Answer = 1**

---

## Topic: limits at infinity

### Q A9
Evaluate `lim (3x^2 + 4x + 5) / (2x^2 - 7x + 1)` as `x -> infinity`.

**ANSWER:**
```
   Form inf/inf. Divide every term by x^2:

        3 + 4/x + 5/x^2           3 + 0 + 0          3
   lim  -----------------  =     -----------   =    ---
 x->inf 2 - 7/x + 1/x^2           2 - 0 + 0          2
```
**Answer = 3/2**

---

### Q A10
Evaluate `lim (2x + 3) / (x^2 + 1)` as `x -> infinity`.

**ANSWER:**
```
   Degree of top (1) is less than degree of bottom (2), so the limit is 0.

   Long way: divide by x^2  ->  (2/x + 3/x^2)/(1 + 1/x^2)  ->  0/1  =  0
```
**Answer = 0**

---

### Q A11
Evaluate `lim ( sqrt(x^2 + x) - x )` as `x -> infinity`.

**ANSWER:**
```
   Form inf - inf. Multiply and divide by sqrt(x^2 + x) + x:

        (x^2 + x) - x^2                       x
   lim  ------------------   =   lim  -------------------
 x->inf sqrt(x^2+x) + x       x->inf  sqrt(x^2 + x) + x

   Divide top and bottom by x:

                   1                      1           1
        =   lim  -------------------  =  -----   =    -
           x->inf sqrt(1 + 1/x) + 1       1+1         2
```
**Answer = 1/2**

---

## Topic: standard trigonometric limits

### Q A12
Evaluate `lim sin(ax) / sin(bx)` as `x -> 0`  (`b != 0`).

**ANSWER:**
```
        sin(ax)/(ax)  .  ax               1 . a          a
   lim  --------------------    =        -------   =     -
  x->0  sin(bx)/(bx)  .  bx               1 . b          b
```
**Answer = a/b**

---

### Q A13
Evaluate `lim tan(2x) / (3x)` as `x -> 0`.

**ANSWER:**
```
        tan(2x)     2            2            2
   lim  ------- . ---   =   1 . ---    =     ---
  x->0    2x       3             3            3
```
**Answer = 2/3**

---

### Q A14
Evaluate `lim (1 - cos 2x) / x^2` as `x -> 0`.

**ANSWER:**
```
   Use  1 - cos 2x = 2 sin^2 x :

        2 sin^2 x                 sin x  2
   lim  ---------   =   2 . lim ( ----- )   =   2 . 1   =   2
  x->0     x^2             x->0     x
```
**Answer = 2**

---

### Q A15
Evaluate `lim sin^-1(4x) / x` as `x -> 0`.

**ANSWER:**
```
        sin^-1(4x)
   lim  ---------- . 4   =   1 . 4   =   4
  x->0      4x
```
**Answer = 4**

---

### Q A16
Evaluate `lim (sin x) / x` as `x -> 0`, where x is measured in **degrees**.

**ANSWER:**
```
   Convert:  x degrees  =  (pi x / 180) radians.

        sin( pi x / 180 )         sin( pi x/180 )      pi          pi
   lim  ------------------ =  lim ---------------- .  ----  =  1 . ---
  x->0          x            x->0   pi x / 180        180          180
```
**Answer = pi/180** (NOT 1 — the radian condition matters)

---

## Topic: exponential and logarithmic limits

### Q A17
Evaluate `lim (e^(3x) - 1) / x` as `x -> 0`.

**ANSWER:**
```
        e^(3x) - 1
   lim  ---------- . 3   =   1 . 3   =   3
  x->0      3x
```
**Answer = 3**

---

### Q A18
Evaluate `lim (a^x - b^x) / x` as `x -> 0`.

**ANSWER:**
```
        (a^x - 1) - (b^x - 1)
   lim  ---------------------   =   log a  -  log b   =   log (a/b)
  x->0            x
```
**Answer = log(a/b)** (natural logarithm)

---

### Q A19
Evaluate `lim log(1 + 5x) / x` as `x -> 0`.

**ANSWER:**
```
        log(1 + 5x)
   lim  ----------- . 5   =   1 . 5   =   5
  x->0      5x
```
**Answer = 5**

---

### Q A20
Evaluate `lim (3^x - 1) / ( sqrt(1 + x) - 1 )` as `x -> 0`.

**ANSWER:**
```
   Divide top and bottom by x:

        (3^x - 1)/x                log 3
   lim  ---------------------  =  -------   =   2 log 3
  x->0  (sqrt(1+x) - 1)/x          1/2
```
**Answer = 2 log 3**

---

### Q A21
Evaluate `lim ( 1 + 3/x )^x` as `x -> infinity`.

**ANSWER:**
```
   Form 1^inf.   L  =  lim  x . (3/x)  =  3

   Answer  =  e^3
```
**Answer = e^3**

---

### Q A22
Evaluate `lim (e^x - sin x - 1) / x` as `x -> 0`.

**ANSWER:**
```
        e^x - 1          sin x
   lim  -------  -  lim  -----   =   1 - 1   =   0
  x->0     x       x->0    x
```
**Answer = 0**

---

## Topic: existence of a limit

### Q A23
Show that `lim |x| / x` as `x -> 0` does not exist.

**ANSWER:**
```
   LHL  =   lim  (-x)/x   =   -1            ( |x| = -x  when x < 0 )
           x->0-

   RHL  =   lim  ( x)/x   =    1            ( |x| =  x  when x > 0 )
           x->0+

   LHL is not equal to RHL,  so the limit DOES NOT EXIST.
```

---

### Q A24
Find `lim [x]` as `x -> 2`, where `[x]` is the greatest integer function.

**ANSWER:**
```
   LHL  =  lim  [x]  =  1        (just below 2, [x] = 1)
          x->2-

   RHL  =  lim  [x]  =  2        (just above 2, [x] = 2)
          x->2+

   1 is not 2, so  lim [x]  DOES NOT EXIST.
                   x->2
```

---

## Topic: continuity (2-mark versions)

### Q A25
```
             { (sin 2x)/x     if  x is not 0
    f(x) =   {
             {     k          if  x = 0

    Find k so that f is continuous at x = 0.
```
**ANSWER:**
```
   lim  (sin 2x)/x   =   lim ( sin2x / 2x ) . 2   =   1 . 2   =   2
  x->0                  x->0

   For continuity,  k = lim f(x)   ->   k = 2
```
**k = 2**

---

### Q A26
Is `f(x) = |x|` continuous at `x = 0`? Justify.

**ANSWER:**
```
   f(0)  =  |0|  =  0

   LHL  =  lim (-x)  =  0        RHL  =  lim ( x)  =  0
          x->0-                         x->0+

   LHL = RHL = f(0) = 0.   Therefore f IS CONTINUOUS at x = 0.
```

---

### Q A27
Evaluate `lim ( x^(2/3) - a^(2/3) ) / ( x - a )` as `x -> a`.

**ANSWER:**
```
   Use  (x^n - a^n)/(x - a) = n a^(n-1)  with n = 2/3 :

        (2/3) a^(2/3 - 1)   =   (2/3) a^(-1/3)
```
**Answer = (2/3) a^(-1/3)**

---

### Q A28
Evaluate `lim (2x + 1)/(x - 3)` as `x -> 3`.

**ANSWER:**
```
   Substituting gives  7 / 0 , which is NOT indeterminate.

   RHL:  x slightly above 3  ->  bottom is small positive  ->  +infinity
   LHL:  x slightly below 3  ->  bottom is small negative  ->  -infinity

   The limit DOES NOT EXIST (the function has an infinite discontinuity at x = 3).
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Seven are set, you answer any five. This chapter almost always
# contributes ONE of them, and it is nearly always continuity.
# ===============================================================

### Q B1  (the single most repeated 4-mark question of this chapter)
```
             { (x^2 - 9)/(x - 3)     if  x is not 3
    f(x) =   {
             {        k              if  x = 3

    Find the value of k for which f is continuous at x = 3.
```
**ANSWER:**
```
   STEP 1   f(3)  =  k                                          (given)

   STEP 2   lim f(x)  =  lim  (x - 3)(x + 3)/(x - 3)
            x->3        x->3

                      =  lim (x + 3)   =   3 + 3   =   6
                        x->3

   STEP 3   Continuity requires   lim f(x)  =  f(3)
                                  x->3

                                       6  =  k

   STEP 4   Therefore  k = 6,  and with that value f is continuous at x = 3.
```
**k = 6**

---

### Q B2
```
             { (x^2 - 2x)/(x^2 - 4)     if  x is not 2
    f(x) =   {
             {         k                if  x = 2

    Find k so that f is continuous at x = 2.
```
**ANSWER:**
```
   lim  x(x - 2) / [ (x - 2)(x + 2) ]   =   lim  x/(x + 2)
  x->2                                     x->2

                                        =   2 / 4   =   1/2

   Therefore  k  =  1/2.
```
**k = 1/2**

---

### Q B3  (the "two answers" trap)
```
             { k^2 x  -  k       if  x >= 1
    f(x) =   {
             {      2            if  x <  1

    Find the values of k for which f is continuous at x = 1.
```
**ANSWER:**
```
   x = 1 belongs to the FIRST branch (because it says x >= 1).

   f(1)  =  k^2 (1) - k   =   k^2 - k

   LHL  =  lim f(1 - h)  =  lim 2   =   2
           h->0             h->0

   RHL  =  lim f(1 + h)  =  lim [ k^2 (1 + h) - k ]   =   k^2 - k
           h->0             h->0

   For continuity   LHL = RHL = f(1) :

        2  =  k^2 - k
        k^2 - k - 2  =  0
        (k - 2)(k + 1)  =  0
        k = 2   or   k = -1

   CHECK   k = 2  :  k^2 - k = 4 - 2 = 2   YES
           k = -1 :  k^2 - k = 1 + 1 = 2   YES
```
**k = 2 or k = -1** (both are valid — losing one loses marks)

---

### Q B4  (the classic textbook continuity proof)
```
             { (cos ax  -  cos bx) / x^2      if  x is not 0
    f(x) =   {
             { (1/2)( b^2  -  a^2 )           if  x = 0

    Show that f is continuous at x = 0.
```
**ANSWER:**
```
   f(0)  =  (1/2)( b^2 - a^2 )                                (given)

   For the limit use    cos C - cos D  =  2 sin((C+D)/2) sin((D-C)/2)

   with C = ax and D = bx :

        cos ax - cos bx   =   2 sin( (a+b)x/2 ) . sin( (b-a)x/2 )

   So

        lim  2 sin((a+b)x/2) . sin((b-a)x/2)
        x->0 ------------------------------------
                         x^2

              sin((a+b)x/2)    (a+b)      sin((b-a)x/2)    (b-a)
   =  2 . lim ------------- .  -----  .   ------------- .  -----
         x->0   (a+b)x/2         2          (b-a)x/2         2

                (a+b)     (b-a)          b^2 - a^2
   =  2 . 1 . -------- . --------   =   -----------
                  2         2                2

   This equals f(0).   Hence f IS CONTINUOUS at x = 0.
```
```
   NUMERICAL CHECK:  put a = 0, b = 2.  f becomes (1 - cos2x)/x^2, whose
   limit is 2, and (b^2 - a^2)/2 = 4/2 = 2.  Consistent.
```

---

### Q B5
```
             { (x^2 - 9)/(x^2 - 2x - 3)      if  0 < x < 5  and  x is not 3
    f(x) =   {
             {          1.5                  if  x = 3

    Show that f is continuous at x = 3.
```
**ANSWER:**
```
   f(3)  =  1.5   =   3/2

   lim  (x - 3)(x + 3) / [ (x - 3)(x + 1) ]   =   lim  (x + 3)/(x + 1)
  x->3                                            x->3

                                              =   6/4   =   3/2

   lim f(x)  =  3/2  =  f(3).   Hence f is CONTINUOUS at x = 3.
```

---

### Q B6  (multi-branch, discuss all joints)
```
             { 4 - x^2      if  x <= 0
             { x - 5        if  0 < x <= 1
    f(x) =   { 4x^2 - 9     if  1 < x < 2
             { 3x + 4       if  x >= 2

    Discuss the continuity of f at x = 0, 1 and 2.
```
**ANSWER:**
```
   AT x = 0
      f(0)  =  4 - 0   =   4
      LHL   =  lim (4 - x^2)  =  4
      RHL   =  lim (x - 5)    =  -5
      4 is not -5   ->   DISCONTINUOUS at x = 0   (jump of size 9)

   AT x = 1
      f(1)  =  1 - 5  =  -4
      LHL   =  lim (x - 5)     =  -4
      RHL   =  lim (4x^2 - 9)  =  4 - 9  =  -5
      -4 is not -5  ->   DISCONTINUOUS at x = 1   (jump of size 1)

   AT x = 2
      f(2)  =  3(2) + 4  =  10
      LHL   =  lim (4x^2 - 9)  =  16 - 9  =  7
      RHL   =  lim (3x + 4)    =  10
      7 is not 10   ->   DISCONTINUOUS at x = 2   (jump of size 3)

   CONCLUSION: f is discontinuous at x = 0, 1 and 2, and continuous
   at every other real number (each branch is a polynomial).
```

---

### Q B7
```
             { ( sqrt(1 + px)  -  sqrt(1 - px) ) / x     if  -1 <= x < 0
    f(x) =   {
             { ( 2x + 1 ) / ( x - 1 )                    if   0 <= x <= 1

    Find p so that f is continuous on [-1, 1].
```
**ANSWER:**
```
   Each branch is continuous on its own piece, so the only doubt is x = 0.

   f(0)  =  (0 + 1)/(0 - 1)   =   -1                (x = 0 uses the 2nd branch)

   LHL  =  lim  ( sqrt(1+px) - sqrt(1-px) ) / x
          x->0-

           Rationalise:

              (1 + px) - (1 - px)                       2 p x
        =  ---------------------------------  =  ---------------------------
           x ( sqrt(1+px) + sqrt(1-px) )         x (sqrt(1+px)+sqrt(1-px))

                      2p             2p
        ->        ---------   =     ----   =   p
                    1 + 1             2

   Continuity at 0 needs   LHL  =  f(0) :        p  =  -1

   CHECK  p = -1 :  LHL = -1 = f(0).   Correct.
```
**p = -1**

---

### Q B8
Evaluate `lim (tan x - sin x) / x^3` as `x -> 0`.

**ANSWER:**
```
   tan x - sin x   =   sin x ( 1/cos x  -  1 )   =   sin x (1 - cos x)/cos x

        sin x      1 - cos x        1
   lim  -----  .  -----------  .  ------
  x->0    x           x^2          cos x

        =   1  .  (1/2)  .  1     =    1/2
```
**Answer = 1/2**

---

### Q B9
Evaluate `lim (1 - cos 2mx) / sin^2(nx)` as `x -> 0`.

**ANSWER:**
```
   Use  1 - cos 2mx  =  2 sin^2(mx) :

        2 sin^2(mx)                 [ sin(mx)/x ]^2         2 m^2
   lim  ------------   =   2 . lim  ----------------   =   -------
  x->0   sin^2(nx)            x->0  [ sin(nx)/x ]^2          n^2
```
**Answer = 2m^2 / n^2**

---

### Q B10
Evaluate `lim ( sin(a + bx) - sin(a - bx) ) / x` as `x -> 0`.

**ANSWER:**
```
   Use  sin C - sin D  =  2 cos((C+D)/2) sin((C-D)/2)

   with C = a + bx , D = a - bx :   (C+D)/2 = a ,  (C-D)/2 = bx

        2 cos(a) sin(bx)                       sin(bx)
   lim  ----------------  =  2 cos(a) .  lim   -------   =   2 b cos a
  x->0         x                        x->0      x
```
**Answer = 2b cos a**

---

### Q B11
Evaluate `lim ( sqrt(x^2 + 5x + 2) - x )` as `x -> infinity`.

**ANSWER:**
```
   Form inf - inf. Multiply by the conjugate:

        (x^2 + 5x + 2) - x^2                  5x + 2
   lim  ---------------------- = lim  --------------------------
 x->inf sqrt(x^2+5x+2) + x      x->inf sqrt(x^2 + 5x + 2) + x

   Divide top and bottom by x :

                 5 + 2/x                    5           5
   =  lim  ------------------------  =   -------   =    -
    x->inf sqrt(1 + 5/x + 2/x^2) + 1      1 + 1         2
```
**Answer = 5/2**

---

### Q B12
Evaluate `lim ( (x + 2)/(x - 1) )^x` as `x -> infinity`.

**ANSWER:**
```
   Base -> 1 and index -> infinity, so this is the 1^inf form.

                x + 2           x + 2 - x + 1            3
   base - 1  =  -----  -  1  =  -------------  =        -----
                x - 1               x - 1                x - 1

                        3x
   L  =   lim   x  .  -------   =   3
        x->inf         x - 1

   Answer  =  e^L  =  e^3
```
**Answer = e^3**

---

### Q B13
```
             { (sin 2x)/x     if  x is not 0
    f(x) =   {
             {     1          if  x = 0

    Is f continuous at x = 0? If not, what kind of discontinuity is it?
```
**ANSWER:**
```
   f(0)  =  1

   lim f(x)  =  lim (sin 2x)/x   =   2
   x->0        x->0

   The limit EXISTS (= 2) but it is NOT equal to f(0) = 1.

   Therefore f is NOT continuous at x = 0.

   Since the limit exists, this is a REMOVABLE discontinuity.
   Redefining f(0) = 2 would make f continuous.
```

---

### Q B14
```
             { 3x + a       if  x <= 1
    f(x) =   {
             { bx + 2       if  x >  1

    If f is continuous at x = 1 and f(1) = 5, find a and b.
```
**ANSWER:**
```
   f(1)  =  3(1) + a  =  3 + a       and we are told f(1) = 5

            3 + a = 5      ->      a = 2

   LHL  =  lim [ 3(1 - h) + a ]  =  3 + a  =  5
           h->0

   RHL  =  lim [ b(1 + h) + 2 ]  =  b + 2
           h->0

   Continuity needs RHL = f(1) = 5 :

            b + 2 = 5      ->      b = 3

   CHECK:  LHL = 5 , RHL = 3 + 2 = 5 , f(1) = 5.  All equal.
```
**a = 2, b = 3**

---

### Q B15
Evaluate `lim cos x / ( x - pi/2 )` as `x -> pi/2`.

**ANSWER:**
```
   Put  x  =  pi/2  +  h ,  so  h -> 0 :

        cos( pi/2 + h )          - sin h
   lim  ----------------  =  lim ---------   =   -1
   h->0        h             h->0    h
```
**Answer = -1**

---

### Q B16
Discuss the continuity of `f(x) = [x]` (greatest integer function) at `x = 2`
and at `x = 2.5`.

**ANSWER:**
```
   AT x = 2
      f(2)  =  [2]  =  2
      LHL   =  lim [x]  =  1        (values just below 2 give [x] = 1)
              x->2-
      RHL   =  lim [x]  =  2
              x->2+
      LHL is not RHL   ->   the limit does not exist
      ->  f is DISCONTINUOUS at x = 2, a NON-REMOVABLE JUMP of size 1.

   AT x = 2.5
      f(2.5) =  2
      LHL = RHL = 2 (the whole neighbourhood of 2.5 gives [x] = 2)
      ->  f IS CONTINUOUS at x = 2.5.

   GENERAL RESULT:  [x] is discontinuous exactly at the INTEGERS
   and continuous everywhere else.
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Read the honest note at the top of this file first: a dedicated
# 7-mark question from this chapter is UNCOMMON in Maths IB.
# The following are revision-grade long questions. They are still
# the best possible practice, because every step in them is
# exactly what Sections A and B ask in smaller pieces.
# ===============================================================

### Q C1 — Evaluate the following limits.  (7 marks: roughly 2 + 2 + 3)

```
   (a)   lim  ( sqrt(1 + x) - sqrt(1 - x) ) / x
        x->0

   (b)   lim  ( sqrt(x^2 + x)  -  x )
       x->inf

   (c)   lim  ( 1 - cos 2x ) / ( x . sin x )
        x->0
```

**ANSWER:**
```
   (a)   [2 marks]   Form 0/0. Multiply by the conjugate:

              (1+x) - (1-x)                          2
         lim  ---------------------------  =  lim  -------------------
        x->0  x ( sqrt(1+x) + sqrt(1-x) )   x->0  sqrt(1+x)+sqrt(1-x)

                =   2 / 2   =   1

         ANSWER (a) = 1


   (b)   [2 marks]   Form inf - inf. Multiply by the conjugate:

                     x                             1                1
         lim  ------------------  =  lim  --------------------  =   -
       x->inf sqrt(x^2 + x) + x    x->inf  sqrt(1 + 1/x) + 1        2

         ANSWER (b) = 1/2


   (c)   [3 marks]   Form 0/0.  Use 1 - cos 2x = 2 sin^2 x :

              1 - cos 2x        2 sin^2 x           2 sin x
              -----------   =   ----------    =     -------
              x . sin x         x . sin x               x

              (the sin x on top and bottom cancel)

         lim  2 sin x / x   =   2 . 1   =   2
        x->0

         ANSWER (c) = 2
```

---

### Q C2 — Continuity of a multi-branch function.  (7 marks)

```
             { 4 - x^2      if  x <= 0
             { x - 5        if  0 < x <= 1
    f(x) =   { 4x^2 - 9     if  1 < x < 2
             { 3x + 4       if  x >= 2

   (i)  Discuss the continuity of f at x = 0, x = 1 and x = 2.        (5 marks)
   (ii) State the type of each discontinuity and its jump size.       (2 marks)
```

**ANSWER — mark split shown**

```
   (i)   AT x = 0                                              [1.5 marks]
         f(0)  =  4 - 0^2  =  4                       (branch x <= 0)
         LHL   =  lim (4 - x^2)  =  4
                 x->0-
         RHL   =  lim (x - 5)    =  -5
                 x->0+
         LHL is not RHL  ->  DISCONTINUOUS at x = 0.

         AT x = 1                                              [1.5 marks]
         f(1)  =  1 - 5  =  -4                        (branch 0 < x <= 1)
         LHL   =  lim (x - 5)     =  -4
                 x->1-
         RHL   =  lim (4x^2 - 9)  =  -5
                 x->1+
         LHL is not RHL  ->  DISCONTINUOUS at x = 1.

         AT x = 2                                              [2 marks]
         f(2)  =  3(2) + 4  =  10                     (branch x >= 2)
         LHL   =  lim (4x^2 - 9)  =  7
                 x->2-
         RHL   =  lim (3x + 4)    =  10
                 x->2+
         LHL is not RHL  ->  DISCONTINUOUS at x = 2.

   (ii)  All three are NON-REMOVABLE JUMP discontinuities,      [2 marks]
         because both one-sided limits are finite but unequal.

              at x = 0 :  jump = | -5 - 4 |  =  9
              at x = 1 :  jump = | -5 - (-4) | =  1
              at x = 2 :  jump = | 10 - 7 |  =  3

         Elsewhere every branch is a polynomial, so f is continuous
         at every other real number.
```

---

### Q C3 — Standard limits used together.  (7 marks)

```
   (a)   lim  ( a^x - b^x ) / x                                     (2 marks)
        x->0

   (b)   lim  ( e^x - 1 ) / ( sqrt(1 + x) - 1 )                     (2 marks)
        x->0

   (c)   lim  ( 1 + 5x )^( 1 / 3x )                                 (3 marks)
        x->0
```

**ANSWER:**
```
   (a)   Add and subtract 1 in the numerator:

              (a^x - 1) - (b^x - 1)          a^x - 1        b^x - 1
         lim  ---------------------  =  lim  -------  - lim -------
        x->0            x              x->0     x      x->0    x

              =   log a  -  log b   =   log ( a / b )

         ANSWER (a) = log(a/b)


   (b)   Divide top and bottom by x :

              (e^x - 1)/x                   1
         lim  --------------------  =     -----   =   2
        x->0  (sqrt(1+x) - 1)/x            1/2

         ANSWER (b) = 2


   (c)   Base -> 1 and index -> infinity, so this is 1^inf.

              L  =  lim  ( 1/(3x) ) . ( 1 + 5x - 1 )
                   x->0

                 =  lim  ( 5x ) / ( 3x )   =   5/3
                   x->0

              Answer  =  e^L  =  e^(5/3)

         ANSWER (c) = e^(5/3)
```

---

### Q C4 — Find the constants, then classify.  (7 marks)

```
             { ( sqrt(x + 2) - 2 ) / ( x - 2 )     if  x is not 2
    f(x) =   {
             {              k                      if  x = 2

   (i)   Find k so that f is continuous at x = 2.                    (4 marks)
   (ii)  If instead k = 1, state whether f is continuous, and name
         the type of discontinuity.                                  (3 marks)
```

**ANSWER:**
```
   (i)   Form 0/0. Rationalise the numerator:                    [4 marks]

                ( sqrt(x+2) - 2 )( sqrt(x+2) + 2 )
         lim   -------------------------------------
        x->2    ( x - 2 ) ( sqrt(x+2) + 2 )

                     (x + 2) - 4                      x - 2
         =  lim  ------------------------  =  lim  ------------------------
           x->2  (x - 2)( sqrt(x+2) + 2 )    x->2  (x - 2)( sqrt(x+2)+2 )

                       1                1            1
         =  lim  --------------   =   -------   =    -
           x->2  sqrt(x+2) + 2         2 + 2         4

         For continuity   k  =  lim f(x)   ->   k  =  1/4


   (ii)  With k = 1 :                                            [3 marks]

         f(2)  =  1        but      lim f(x)  =  1/4
                                    x->2

         1 is not 1/4, so f is NOT continuous at x = 2.

         Because the limit still EXISTS, this is a
         REMOVABLE DISCONTINUITY. Redefining f(2) = 1/4 repairs it.
```

---

### Q C5 — A full "does the limit exist" investigation.  (7 marks)

```
   Examine the existence of each of the following limits. Where the limit
   exists, find it. Where it does not, explain precisely why, and classify
   the discontinuity of the function at that point.

   (a)   lim  |x - 3| / (x - 3)                                     (2 marks)
        x->3

   (b)   lim  [x]           ( greatest integer function )           (2 marks)
        x->1

   (c)   lim  1 / (x - 4)^2                                         (3 marks)
        x->4
```

**ANSWER:**
```
   (a)   For x > 3 :  |x - 3| =  (x - 3)   ->   f(x) =  1   ->  RHL =  1
         For x < 3 :  |x - 3| = -(x - 3)   ->   f(x) = -1   ->  LHL = -1

         LHL is not RHL, so the LIMIT DOES NOT EXIST.
         f is also undefined at x = 3.
         Type: NON-REMOVABLE JUMP discontinuity, jump size 2.


   (b)   LHL  =  lim [x]  =  0        (just below 1, [x] = 0)
                x->1-
         RHL  =  lim [x]  =  1        (just above 1, [x] = 1)
                x->1+

         LHL is not RHL, so the LIMIT DOES NOT EXIST.
         Type: NON-REMOVABLE JUMP discontinuity, jump size 1.


   (c)   As x -> 4 from either side, (x - 4)^2 is a small POSITIVE
         number, so 1/(x - 4)^2 -> +infinity on both sides.

         Both one-sided limits are +infinity, so the limit is not a
         finite number: the LIMIT DOES NOT EXIST (in the finite sense).
         f is undefined at x = 4 and has a vertical asymptote there.
         Type: INFINITE (second-kind) discontinuity.

         Contrast with 1/(x - 4), where LHL = -infinity and
         RHL = +infinity - also infinite, but with opposite signs.
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST
# ===============================================================

| Rank | Question type | Section | Chance of appearing |
|------|---------------|---------|---------------------|
| 1 | **Find k so that a piecewise f is continuous at a point** | B | Very high |
| 2 | **Evaluate a 0/0 limit by factorising / cancelling** | A | Very high |
| 3 | Standard trig limit: `sin(ax)/x`, `sin(ax)/sin(bx)`, `tan(ax)/x` | A | Very high |
| 4 | Limit as `x -> infinity` of a rational function | A | High |
| 5 | Rationalisation limit with `sqrt` | A or B | High |
| 6 | Exponential / log limit: `(e^(ax)-1)/x`, `(a^x-b^x)/x`, `log(1+ax)/x` | A | High |
| 7 | Check continuity of a piecewise function at a joint (LHL/RHL/f(a)) | B | High |
| 8 | `(1 - cos ax)/x^2` or `(1 - cos 2mx)/sin^2(nx)` | A or B | Medium-high |
| 9 | `inf - inf` with a square root, `x -> infinity` | A or B | Medium |
| 10 | Show a limit does NOT exist (`\|x\|/x`, `[x]` at an integer) | A | Medium |
| 11 | `1^infinity` form: `(1 + k/x)^x` or `((x+a)/(x+b))^x` | A or B | Medium |
| 12 | `(x^n - a^n)/(x - a)` standard result, including fractional n | A | Medium |
| 13 | The `(cos ax - cos bx)/x^2` continuity proof | B | Medium |
| 14 | Multi-branch function, discuss continuity at all joints | B | Medium |
| 15 | Classify the type of discontinuity | B | Low-medium |
| 16 | Two unknowns a and b from continuity | B | Low-medium |
| 17 | A dedicated 7-mark Section C question from this chapter | C | **Low** |

---

## THE MINIMUM YOU MUST BE ABLE TO DO ON EXAM DAY

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   1.  Factorise and cancel a 0/0 polynomial limit.                |
  |                                                                   |
  |   2.  Rationalise one square root and finish the limit.           |
  |                                                                   |
  |   3.  Quote  sin(ax)/x -> a  and  (e^(ax)-1)/x -> a  instantly.   |
  |                                                                   |
  |   4.  Divide by the highest power of x for an  x -> infinity      |
  |       question.                                                   |
  |                                                                   |
  |   5.  Write f(a), LHL and RHL as three labelled lines, set them   |
  |       equal, and solve for k.                                     |
  |                                                                   |
  |   Those five skills are the entire 8-10 marks this chapter gives  |
  |   you. None of them is hard. All of them are pure practice.       |
  |                                                                   |
  +-------------------------------------------------------------------+
```
