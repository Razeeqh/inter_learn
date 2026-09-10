# Inverse Trigonometric Functions — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IA · **Chapter 8 — Inverse Trigonometric Functions**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> often word for word with only the numbers swapped. So everything below is grouped
> by **how often it appears**, not tagged to a single year. Before your exam,
> cross-check against the official question papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IA paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually Q4 or Q5
                                                 (shares the slot with Ch 6 / Ch 7)

  Section B  (4 marks each, answer any 5)    ->  usually Q14 or Q15
                                                 THIS IS THE RELIABLE ONE

  Section C  (7 marks each, answer any 5)    ->  rare as a standalone item;
                                                 shows up as part of a
                                                 trigonometry long answer
```

> **Honest scope note.** In BIEAP Maths IA the seven-mark Section C slots are
> normally filled by Functions, Mathematical Induction, Matrices, Addition of
> Vectors, Product of Vectors, Trigonometric Transformations and Properties of
> Triangles. Chapter 8 is a **Section A + Section B chapter**, worth a realistic
> **4 to 6 marks**. The Section C items in this file are written as
> **revision-grade** questions: they are genuine exam-standard proofs at exactly
> the difficulty a 7-mark slot would demand, and they drill the same machinery the
> 4-mark question tests. Do them — but put your Section B practice first.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: Principal value with a NEGATIVE argument

### Q A1
Find the principal value of `sin^-1(-1/2)`.

**ANSWER:**
```
  Rule (sin family):  sin^-1(-x) = - sin^-1(x)

  sin^-1(-1/2) = - sin^-1(1/2) = - pi/6

  CHECK:  -pi/6 lies in [-pi/2, pi/2]  YES ;  sin(-pi/6) = -1/2  YES
```
**Principal value = -pi/6**

---

### Q A2
Find the principal value of `cos^-1(-1/2)`.

**ANSWER:**
```
  Rule (cos family):  cos^-1(-x) = pi - cos^-1(x)

  cos^-1(-1/2) = pi - cos^-1(1/2) = pi - pi/3 = 2pi/3

  CHECK:  2pi/3 = 120deg lies in [0, pi]  YES ;  cos 120deg = -1/2  YES
```
**Principal value = 2pi/3**

> Writing `-pi/3` here is the single most common wrong answer in this chapter.
> `cos^-1` is **never** negative.

---

### Q A3
Find the principal value of `tan^-1(-sqrt3)`.

**ANSWER:**
```
  tan^-1(-sqrt3) = - tan^-1(sqrt3) = - pi/3

  CHECK:  -pi/3 lies in (-pi/2, pi/2)  YES ;  tan(-60deg) = -sqrt3  YES
```
**Principal value = -pi/3**

---

### Q A4
Find the principal value of `cot^-1(-1)`.

**ANSWER:**
```
  cot^-1(-x) = pi - cot^-1(x)

  cot^-1(-1) = pi - cot^-1(1) = pi - pi/4 = 3pi/4

  CHECK:  cot(135deg) = cos135 / sin135 = (-1/sqrt2)/(1/sqrt2) = -1  YES
          3pi/4 lies in (0, pi)  YES
```
**Principal value = 3pi/4**

---

### Q A5
Find the principal value of `sec^-1(-2)`.

**ANSWER:**
```
  sec^-1(-x) = pi - sec^-1(x)

  sec^-1(2) = cos^-1(1/2) = pi/3
  sec^-1(-2) = pi - pi/3 = 2pi/3

  CHECK:  sec(2pi/3) = 1/cos120deg = 1/(-1/2) = -2  YES
```
**Principal value = 2pi/3**

---

### Q A6
Find the principal value of `cosec^-1(-sqrt2)`.

**ANSWER:**
```
  cosec^-1(-x) = - cosec^-1(x)

  cosec^-1(sqrt2) = sin^-1(1/sqrt2) = pi/4
  cosec^-1(-sqrt2) = - pi/4

  CHECK:  cosec(-pi/4) = 1/sin(-45deg) = 1/(-1/sqrt2) = -sqrt2  YES
```
**Principal value = -pi/4**

---

### Q A7
Find the principal value of `cos^-1(-sqrt3/2) + sin^-1(-1/2)`.

**ANSWER:**
```
  cos^-1(-sqrt3/2) = pi - cos^-1(sqrt3/2) = pi - pi/6 = 5pi/6
  sin^-1(-1/2)     = - pi/6

  Sum = 5pi/6 - pi/6 = 4pi/6 = 2pi/3
```
**= 2pi/3**

---

### Q A8
Does `sec^-1(1/2)` exist? Give a reason.

**ANSWER:**
```
  The domain of sec^-1 is  |x| >= 1 .
  Here |1/2| = 0.5 < 1 , so 1/2 is NOT in the domain.

  Reason: sec t = 1/cos t and |cos t| <= 1 , so |sec t| >= 1 always.
  No angle has secant 1/2.
```
**`sec^-1(1/2)` is NOT DEFINED.**

---

## Topic: `sin^-1(sin x)` type

### Q A9
Find the value of `sin^-1( sin(3pi/4) )`.

**ANSWER:**
```
  3pi/4 = 135deg is NOT in [-90deg, 90deg] , so we cannot cancel directly.

  sin(3pi/4) = sin(pi - 3pi/4) = sin(pi/4)
  pi/4 IS in [-pi/2, pi/2] .
```
**= pi/4**

---

### Q A10
Find the value of `cos^-1( cos(4pi/3) )`.

**ANSWER:**
```
  4pi/3 = 240deg is NOT in [0deg, 180deg] .

  cos(4pi/3) = cos(2pi - 4pi/3) = cos(2pi/3)
  2pi/3 = 120deg IS in [0, pi] .
```
**= 2pi/3**

---

### Q A11
Find the value of `tan^-1( tan(3pi/4) )`.

**ANSWER:**
```
  3pi/4 = 135deg is NOT in (-90deg, 90deg) .
  tan has period pi , so  tan(3pi/4) = tan(3pi/4 - pi) = tan(-pi/4)
  -pi/4 IS in (-pi/2, pi/2) .
```
**= -pi/4**

---

### Q A12
Find the value of `cos^-1( cos(13pi/6) )`.

**ANSWER:**
```
  13pi/6 = 390deg .  Subtract one full turn:
  cos(13pi/6) = cos(13pi/6 - 2pi) = cos(pi/6)
  pi/6 IS in [0, pi] .
```
**= pi/6**

---

### Q A13
Find the value of `tan^-1( tan(7pi/6) )`.

**ANSWER:**
```
  7pi/6 = 210deg is outside (-90deg, 90deg) .
  tan(7pi/6) = tan(7pi/6 - pi) = tan(pi/6)
  pi/6 is inside.
```
**= pi/6**

---

## Topic: Complementary and reciprocal properties

### Q A14
Find `sin^-1(3/5) + cos^-1(3/5) + tan^-1(7) + cot^-1(7)`.

**ANSWER:**
```
  sin^-1 x + cos^-1 x = pi/2       ->  first pair  = pi/2
  tan^-1 x + cot^-1 x = pi/2       ->  second pair = pi/2

  Total = pi/2 + pi/2 = pi
```
**= pi**

---

### Q A15
If `sin^-1 x = pi/5`, find `cos^-1 x`.

**ANSWER:**
```
  sin^-1 x + cos^-1 x = pi/2
  cos^-1 x = pi/2 - pi/5 = (5pi - 2pi)/10 = 3pi/10
```
**= 3pi/10**

---

### Q A16
Find the value of `cot( tan^-1 a + cot^-1 a )`.

**ANSWER:**
```
  tan^-1 a + cot^-1 a = pi/2   for every real a
  cot(pi/2) = cos(pi/2)/sin(pi/2) = 0/1 = 0
```
**= 0**

---

### Q A17
Find `cosec^-1(sqrt2) + sec^-1(2)`.

**ANSWER:**
```
  cosec^-1(sqrt2) = sin^-1(1/sqrt2) = pi/4
  sec^-1(2)       = cos^-1(1/2)     = pi/3

  Sum = pi/4 + pi/3 = (3pi + 4pi)/12 = 7pi/12
```
**= 7pi/12**

---

## Topic: Value of a mixed expression (right-triangle work)

### Q A18
Find the value of `cos( sin^-1(3/5) )`.

**ANSWER:**
```
  Let A = sin^-1(3/5) , so sin A = 3/5 and A is in the FIRST quadrant.

                 |\
               3 | \  5        adjacent = sqrt(25 - 9) = 4
                 |__\
                  4

  cos A = 4/5
```
**= 4/5**

---

### Q A19
Find the value of `tan( cos^-1(3/5) )`.

**ANSWER:**
```
  cos A = 3/5  ->  adjacent 3, hypotenuse 5, opposite = sqrt(25-9) = 4
  tan A = opposite/adjacent = 4/3
```
**= 4/3**

---

### Q A20
Find the value of `sin( 2 sin^-1(3/5) )`.

**ANSWER:**
```
  Let A = sin^-1(3/5) , so sin A = 3/5 , cos A = 4/5 .

  sin 2A = 2 sinA cosA = 2 (3/5)(4/5) = 24/25
```
**= 24/25**

---

### Q A21
Find the value of `tan[ 2 tan^-1(1/5) - pi/4 ]`.

**ANSWER:**
```
  STEP 1  2 tan^-1(1/5) :  |1/5| < 1 so the tan form is legal
                 2(1/5)        2/5       10       5
          -------------- = --------- = ------ = ----
             1 - 1/25        24/25       24      12
          So 2 tan^-1(1/5) = tan^-1(5/12) .

  STEP 2  tan( tan^-1(5/12) - pi/4 )

                5/12 - 1        -7/12          7
           = -------------- = --------- = -  ----
              1 + (5/12)(1)     17/12         17
```
**= -7/17**

---

### Q A22
Find the value of `sin[ pi/3 - sin^-1(-1/2) ]`.

**ANSWER:**
```
  sin^-1(-1/2) = -pi/6

  pi/3 - (-pi/6) = pi/3 + pi/6 = 2pi/6 + pi/6 = 3pi/6 = pi/2

  sin(pi/2) = 1
```
**= 1**

---

### Q A23
Prove that `tan^-1(1/2) + tan^-1(1/3) = pi/4`.

**ANSWER:**
```
  x = 1/2 , y = 1/3 ,  xy = 1/6 < 1   ->  Case 1, plain formula

       x + y       1/2 + 1/3       5/6
      -------- = ------------- = ------- = 1
       1 - xy      1 - 1/6        5/6

  So the sum = tan^-1(1) = pi/4 .        PROVED
```

---

### Q A24
Express `tan^-1(3/4)` as (i) a `sin^-1` and (ii) a `cos^-1`.

**ANSWER:**
```
  tan A = 3/4  ->  opposite 3, adjacent 4, hypotenuse = sqrt(9+16) = 5

                 |\
               3 | \  5
                 |__\
                  4

  sin A = 3/5 ,  cos A = 4/5
```
**`tan^-1(3/4) = sin^-1(3/5) = cos^-1(4/5)`**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# THIS is where the chapter really pays. Answer any 5 of 7 in the paper.
# ===============================================================

### Q B1  (asked very often)
Prove that `tan^-1(1/2) + tan^-1(1/5) + tan^-1(1/8) = pi/4`.

**ANSWER:**
```
  STEP 1  Combine the first two.  x = 1/2 , y = 1/5 ,  xy = 1/10 < 1
          -> Case 1 of the sum formula applies.

               1/2 + 1/5        7/10        7
              ------------ = ---------- = -----
               1 - 1/10        9/10         9

          tan^-1(1/2) + tan^-1(1/5) = tan^-1(7/9)

  STEP 2  Add the third.  x = 7/9 , y = 1/8 ,  xy = 7/72 < 1  -> Case 1 again.

               7/9 + 1/8       (56 + 9)/72       65/72
              ------------ = -------------- = --------- = 1
               1 - 7/72       (72 - 7)/72       65/72

          = tan^-1(1) = pi/4

  Hence  tan^-1(1/2) + tan^-1(1/5) + tan^-1(1/8) = pi/4 .      PROVED

  MARK SPLIT:  formula + condition 1 ; first combination 1 ;
               second combination 1 ; conclusion 1
```

---

### Q B2  (asked very often)
Prove that `tan^-1(1/3) + tan^-1(1/5) + tan^-1(1/7) + tan^-1(1/8) = pi/4`.

**ANSWER:**
```
  Pair them as (1st + 2nd) and (3rd + 4th) -- the fractions come out nicer.

  PAIR A   x = 1/3 , y = 1/5 ,  xy = 1/15 < 1

               1/3 + 1/5       8/15        8      4
              ------------ = --------- = ----- = ---
               1 - 1/15       14/15       14      7
           ->  tan^-1(4/7)

  PAIR B   x = 1/7 , y = 1/8 ,  xy = 1/56 < 1

               1/7 + 1/8       15/56       15      3
              ------------ = --------- = ----- = ----
               1 - 1/56       55/56       55      11
           ->  tan^-1(3/11)

  COMBINE  x = 4/7 , y = 3/11 ,  xy = 12/77 < 1

               4/7 + 3/11       (44 + 21)/77       65/77
              ------------- = --------------- = --------- = 1
               1 - 12/77        (77 - 12)/77       65/77

           = tan^-1(1) = pi/4                       PROVED
```

---

### Q B3  (asked very often)
Prove that `sin^-1(4/5) + sin^-1(5/13) + sin^-1(16/65) = pi/2`.

**ANSWER:**
```
  STEP 1  Turn every sin^-1 into a tan^-1 with a right triangle.

          sin^-1(4/5)   :  3-4-5 triangle    ->  tan^-1(4/3)
          sin^-1(5/13)  :  5-12-13 triangle  ->  tan^-1(5/12)
          sin^-1(16/65) :  adjacent = sqrt(65^2 - 16^2) = sqrt(4225 - 256)
                                     = sqrt(3969) = 63
                        ->  tan^-1(16/63)

  STEP 2  Add the first two.  x = 4/3 , y = 5/12 ,  xy = 20/36 = 5/9 < 1

               4/3 + 5/12        (16 + 5)/12      21/12      21     9      63
              ------------- = ---------------- = -------- = ---- x --- = -----
               1 - 5/9              4/9            4/9        12    4      16

           ->  tan^-1(63/16)

  STEP 3  Add the third:  tan^-1(63/16) + tan^-1(16/63) .
          These are RECIPROCALS and both are positive, so xy = 1 exactly
          -> boundary case:  tan^-1 a + tan^-1(1/a) = pi/2  for a > 0 .

  Total = pi/2 .                                    PROVED
```

---

### Q B4  (asked very often)
Prove that `cos^-1(4/5) + cos^-1(12/13) = cos^-1(33/65)`.

**ANSWER:**
```
  Formula:  cos^-1 x + cos^-1 y = cos^-1( xy - sqrt(1-x^2) sqrt(1-y^2) ) ,
            valid when  x + y >= 0 .

  Here x = 4/5 , y = 12/13 , both positive, so x + y >= 0 .  Condition met.

  sqrt(1 - 16/25)   = sqrt(9/25)   = 3/5
  sqrt(1 - 144/169) = sqrt(25/169) = 5/13

       xy - sqrt(1-x^2) sqrt(1-y^2)
          = (4/5)(12/13) - (3/5)(5/13)
          = 48/65 - 15/65
          = 33/65

  Hence  cos^-1(4/5) + cos^-1(12/13) = cos^-1(33/65) .        PROVED

  DECIMAL CHECK:  cos^-1(0.8) = 0.6435 , cos^-1(12/13) = 0.3948 , sum = 1.0383
                  cos^-1(33/65) = cos^-1(0.5077) = 1.0383 .   MATCHES.
```

---

### Q B5
Prove that `sin^-1(3/5) + sin^-1(8/17) = cos^-1(36/85)`.

**ANSWER:**
```
  STEP 1  Check which case.  x = 3/5 , y = 8/17 .

          x^2 + y^2 = 9/25 + 64/289 = (2601 + 1600)/7225 = 4201/7225 < 1
          -> the plain formula applies, NO pi correction.

  STEP 2  sqrt(1 - x^2) = 4/5 ,  sqrt(1 - y^2) = 15/17

          x sqrt(1-y^2) + y sqrt(1-x^2)
              = (3/5)(15/17) + (8/17)(4/5)
              = 45/85 + 32/85
              = 77/85

          So LHS = sin^-1(77/85) .

  STEP 3  Convert to cos^-1 .  If sin = 77/85 , the adjacent side is
          sqrt(85^2 - 77^2) = sqrt(7225 - 5929) = sqrt(1296) = 36 .

          sin^-1(77/85) = cos^-1(36/85)

  Hence proved.

  DECIMAL CHECK: 0.6435 + 0.4900 = 1.1335 ; cos^-1(36/85) = cos^-1(0.4235)
                 = 1.1335 .   MATCHES.
```

---

### Q B6
Prove that `sin^-1(3/5) - sin^-1(8/17) = cos^-1(84/85)`.

**ANSWER:**
```
  x = 3/5 , y = 8/17 ,  x^2 + y^2 < 1  ->  plain difference formula.

       x sqrt(1-y^2) - y sqrt(1-x^2)
          = (3/5)(15/17) - (8/17)(4/5)
          = 45/85 - 32/85
          = 13/85

  LHS = sin^-1(13/85) .
  If sin = 13/85 , adjacent = sqrt(7225 - 169) = sqrt(7056) = 84 .

  sin^-1(13/85) = cos^-1(84/85)                     PROVED

  DECIMAL CHECK: 0.6435 - 0.4900 = 0.1535 ; cos^-1(84/85) = 0.1535 . MATCHES.
```

---

### Q B7  (asked very often)
Prove that `sin^-1(4/5) + 2 tan^-1(1/3) = pi/2`.

**ANSWER:**
```
  STEP 1  sin^-1(4/5) = tan^-1(4/3)        [3-4-5 triangle]

  STEP 2  2 tan^-1(1/3) :  |1/3| < 1 , so the tan form is legal.

                 2(1/3)         2/3        6      3
            ------------- = ---------- = ----- = ---
              1 - 1/9         8/9          8      4

          So  2 tan^-1(1/3) = tan^-1(3/4) .

  STEP 3  tan^-1(4/3) + tan^-1(3/4) :  here  xy = (4/3)(3/4) = 1 exactly.
          This is the BOUNDARY case, and both numbers are positive,
          so the sum is  pi/2 .
          (Do NOT try the xy < 1 formula -- you would divide by zero.)

  Hence  sin^-1(4/5) + 2 tan^-1(1/3) = pi/2 .        PROVED
```

---

### Q B8
Prove that `cot^-1(9) + cosec^-1(sqrt41 / 4) = pi/4`.

**ANSWER:**
```
  STEP 1  cot^-1(9) = tan^-1(1/9)          [valid since 9 > 0]

  STEP 2  cosec^-1(sqrt41 / 4) = sin^-1(4 / sqrt41)
          sin = 4/sqrt41  ->  opposite 4, hypotenuse sqrt41
          adjacent = sqrt(41 - 16) = sqrt(25) = 5
          So it equals  tan^-1(4/5) .

  STEP 3  Add:  x = 1/9 , y = 4/5 ,  xy = 4/45 < 1  -> Case 1

               1/9 + 4/5        (5 + 36)/45        41/45
              ------------- = --------------- = --------- = 1
               1 - 4/45         (45 - 4)/45        41/45

          = tan^-1(1) = pi/4                        PROVED
```

---

### Q B9
Prove that `tan^-1(x/y) - tan^-1((x - y)/(x + y)) = pi/4`, where `x > 0`, `y > 0`.

**ANSWER:**
```
  Let  a = x/y  and  b = (x - y)/(x + y) .

  ab = x(x-y) / [ y(x+y) ] .   With x, y > 0 this is > -1 , so Case 1 of the
  difference formula applies.

               a - b
            -----------
             1 + a b

                    x       x - y
                    - -  ---------
                    y     x + y                x(x+y) - y(x-y)
          =  --------------------------- = ----------------------
                       x    x - y             y(x+y) + x(x-y)
                 1 + --- . -------
                      y     x + y

               x^2 + xy - xy + y^2       x^2 + y^2
          =  ----------------------- = ------------- = 1
               xy + y^2 + x^2 - xy       x^2 + y^2

  So the difference = tan^-1(1) = pi/4 .            PROVED

  SPOT CHECK with x = 3, y = 1:
       tan^-1(3) - tan^-1(2/4) = 1.2490 - 0.4636 = 0.7854 = pi/4 .  MATCHES.
```

---

### Q B10
Prove that `tan^-1( (sqrt(1 + x^2) - 1) / x ) = (1/2) tan^-1 x` for `x > 0`.

**ANSWER:**
```
  Put  x = tan t , with  t = tan^-1 x  in  (0, pi/2)  since x > 0.

  sqrt(1 + x^2) = sqrt(1 + tan^2 t) = sec t          [positive, t is acute]

       sec t - 1        (1 - cos t)/cos t        1 - cos t
      ----------- = --------------------- = -------------
         tan t          sin t / cos t            sin t

                     2 sin^2 (t/2)
                  = ------------------- = tan(t/2)
                     2 sin(t/2) cos(t/2)

  So LHS = tan^-1( tan(t/2) ) .
  Since t is in (0, pi/2) , t/2 is in (0, pi/4) , which lies inside
  (-pi/2, pi/2) , so the cancellation is valid.

  LHS = t/2 = (1/2) tan^-1 x .                      PROVED
```

---

### Q B11  (asked very often)
Solve `tan^-1(x + 1) + tan^-1(x - 1) = tan^-1(8/31)`.

**ANSWER:**
```
  Take  a = x + 1 , b = x - 1 .  a + b = 2x ,  ab = x^2 - 1 .

  Assume ab < 1 (Case 1) -- this will be checked at the end.

                          2x                 2x
       LHS = tan^-1 --------------- = tan^-1 --------
                     1 - (x^2 - 1)           2 - x^2

  tan^-1 is one-one, so equate the arguments:

            2x         8
         -------- = -------
          2 - x^2     31

         62 x = 8 (2 - x^2) = 16 - 8x^2
         8x^2 + 62x - 16 = 0
         4x^2 + 31x - 8 = 0
         (4x - 1)(x + 8) = 0
         x = 1/4   or   x = -8

  CHECK x = 1/4 :  ab = 1/16 - 1 = -15/16 < 1 , Case 1 was legitimate.
        tan^-1(1.25) + tan^-1(-0.75) = 0.8961 - 0.6435 = 0.2526
        tan^-1(8/31) = tan^-1(0.2581) = 0.2526 .   ACCEPT.

  CHECK x = -8 :  a = -7 , b = -9 .  Both negative and ab = 63 > 1
        -> Case 3 , so the true sum is  -pi + tan^-1(8/31) , a NEGATIVE number.
        The RHS is positive.  REJECT.

  ANSWER:  x = 1/4
```

---

### Q B12
Solve `tan^-1((x - 1)/(x - 2)) + tan^-1((x + 1)/(x + 2)) = pi/4`.

**ANSWER:**
```
  a = (x-1)/(x-2) ,  b = (x+1)/(x+2)

  a + b  = [ (x-1)(x+2) + (x+1)(x-2) ] / (x^2 - 4)
         = [ (x^2 + x - 2) + (x^2 - x - 2) ] / (x^2 - 4)
         = (2x^2 - 4)/(x^2 - 4)

  ab     = (x^2 - 1)/(x^2 - 4)

  1 - ab = [ (x^2 - 4) - (x^2 - 1) ] / (x^2 - 4) = -3/(x^2 - 4)

       a + b        (2x^2 - 4)/(x^2 - 4)       2x^2 - 4
      -------- = ------------------------ = ------------
       1 - ab        -3/(x^2 - 4)               -3

  Set equal to  tan(pi/4) = 1 :

         2x^2 - 4 = -3
         2x^2 = 1
         x^2 = 1/2
         x = 1/sqrt2   or   x = -1/sqrt2

  CHECK x = 0.7071 :  a = (-0.2929)/(-1.2929) = 0.2265
                      b = (1.7071)/(2.7071)   = 0.6306
                      0.2228 + 0.5626 = 0.7854 = pi/4 .   ACCEPT.
  CHECK x = -0.7071 : the same two values appear, swapped.
                      Sum again pi/4 .                    ACCEPT.

  ANSWER:  x = +- 1/sqrt2
```

---

### Q B13
Solve `sin^-1(1 - x) - 2 sin^-1(x) = pi/2`.

**ANSWER:**
```
  Let  sin^-1 x = t .  Then  sin^-1(1 - x) = pi/2 + 2t .

  RESTRICTION:  sin^-1 can never exceed pi/2 , so  pi/2 + 2t <= pi/2 ,
                giving  t <= 0 , i.e.  x <= 0 .

  Take sine of both sides:

         1 - x = sin(pi/2 + 2t) = cos 2t = 1 - 2 sin^2 t = 1 - 2x^2

         1 - x = 1 - 2x^2
         2x^2 - x = 0
         x(2x - 1) = 0
         x = 0   or   x = 1/2

  CHECK x = 0 :   sin^-1(1) - 2 sin^-1(0) = pi/2 - 0 = pi/2 .   ACCEPT.
  CHECK x = 1/2 : violates x <= 0 .  Directly:
                  sin^-1(1/2) - 2 sin^-1(1/2) = -pi/6 , not pi/2 .  REJECT.

  ANSWER:  x = 0
```

---

### Q B14
Solve `2 tan^-1(cos x) = tan^-1(2 cosec x)`.

**ANSWER:**
```
  Left side, double-angle tan form ( needs |cos x| < 1 , so x =/= 0 , pi ):

                            2 cos x                2 cos x
       LHS = tan^-1 ------------------- = tan^-1 -----------
                       1 - cos^2 x                sin^2 x

  Equate arguments (tan^-1 is one-one):

          2 cos x        2
         ---------- = --------
          sin^2 x      sin x

          2 cos x sin x = 2 sin^2 x
          2 sin x ( cos x - sin x ) = 0

          sin x = 0    ->  rejected, cosec x would be undefined
          cos x = sin x  ->  tan x = 1

  ANSWER:  x = pi/4        (general solution  x = n pi + pi/4 , n integer)
```

---

### Q B15
Solve `tan^-1((1 - x)/(1 + x)) = (1/2) tan^-1 x`, for `x > 0`.

**ANSWER:**
```
  Recognise the pattern:  (1 - x)/(1 + x)  is the difference form with 1 and x.
  Since  (1)(x) = x > -1 , Case 1 applies:

       tan^-1((1 - x)/(1 + x)) = tan^-1(1) - tan^-1(x) = pi/4 - tan^-1 x

  So      pi/4 - tan^-1 x = (1/2) tan^-1 x
          pi/4 = (3/2) tan^-1 x
          tan^-1 x = pi/6
          x = tan(pi/6) = 1/sqrt3

  CHECK:  (1 - 0.5774)/(1 + 0.5774) = 0.4226/1.5774 = 0.2679
          tan^-1(0.2679) = 0.2618 = pi/12
          (1/2) tan^-1(0.5774) = (1/2)(0.5236) = 0.2618 .   MATCHES.

  ANSWER:  x = 1/sqrt3
```

---

### Q B16
If `tan^-1 x + tan^-1 y + tan^-1 z = pi/2`, prove that `xy + yz + zx = 1`.

**ANSWER:**
```
  Let  A = tan^-1 x ,  B = tan^-1 y ,  C = tan^-1 z .
  So  tan A = x , tan B = y , tan C = z  and  A + B + C = pi/2 .

  Then  A + B = pi/2 - C , so

         tan(A + B) = tan(pi/2 - C) = cot C = 1 / tan C = 1/z

          tan A + tan B          x + y        1
         ---------------- = ------------- = -----
          1 - tanA tanB        1 - xy         z

         z(x + y) = 1 - xy
         zx + zy + xy = 1

  Hence  xy + yz + zx = 1 .                          PROVED
```

---

### Q B17
Find the value of `tan[ cos^-1(4/5) + tan^-1(2/3) ]`.

**ANSWER:**
```
  STEP 1  cos^-1(4/5) = tan^-1(3/4)     [3-4-5 triangle: cos = 4/5 -> tan = 3/4]

  STEP 2  x = 3/4 , y = 2/3 ,  xy = 6/12 = 1/2 < 1  -> Case 1

               3/4 + 2/3       (9 + 8)/12       17/12       17
              ------------ = ------------- = --------- = ------
               1 - 1/2            1/2           1/2          6

  So the angle is  tan^-1(17/6) , and its tangent is 17/6 .

  CHECK: cos^-1(0.8) = 0.6435 , tan^-1(2/3) = 0.5880 , sum = 1.2315
         tan(1.2315) = 2.8333 = 17/6 .   MATCHES.
```
**= 17/6**

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Revision-grade. See the honest scope note at the top of this file.
# ===============================================================

### Q C1
If `tan^-1 x + tan^-1 y + tan^-1 z = pi`, prove that `x + y + z = xyz`.
Hence find `x + y + z` when `x = 1`, `y = 2`, `z = 3`.

**ANSWER:**
```
  PART 1 -- THE PROOF                                          (5 marks)

  Let  A = tan^-1 x ,  B = tan^-1 y ,  C = tan^-1 z .
  Then  tan A = x ,  tan B = y ,  tan C = z ,  and  A + B + C = pi .

  From A + B + C = pi :          A + B = pi - C

  Take tan of both sides:        tan(A + B) = tan(pi - C) = - tan C

  Expand the left side:

          tan A + tan B
         ---------------- = - tan C
          1 - tanA tanB

              x + y
           ---------- = - z
             1 - xy

           x + y = -z (1 - xy)
           x + y = -z + xyz
           x + y + z = x y z                        PROVED


  PART 2 -- THE APPLICATION                                    (2 marks)

  Check the hypothesis first for x = 1, y = 2, z = 3 :
       x + y + z = 6  and  xyz = 6 .   They are equal, so the condition
       tan^-1 1 + tan^-1 2 + tan^-1 3 = pi  really does hold.

  VERIFY NUMERICALLY:  0.7854 + 1.1071 + 1.2490 = 3.1415 = pi .  YES.

  So  x + y + z = 6 .


  MARK SPLIT:  setting A, B, C and stating tanA = x etc.       1
               writing A + B = pi - C and taking tan           1
               expanding tan(A+B)                              1
               algebraic rearrangement                         1
               concluding statement                            1
               correct application and check                   2
```

---

### Q C2
If `cos^-1 x + cos^-1 y + cos^-1 z = pi`, prove that `x^2 + y^2 + z^2 + 2xyz = 1`.

**ANSWER:**
```
  Let  A = cos^-1 x , B = cos^-1 y , C = cos^-1 z .
  So  cos A = x , cos B = y , cos C = z , and  A + B + C = pi ,
  with each of A, B, C in [0, pi] -- hence sinA, sinB, sinC are all >= 0.

  STEP 1   A + B = pi - C

  STEP 2   cos(A + B) = cos(pi - C) = - cos C = - z

  STEP 3   Expand:   cosA cosB - sinA sinB = -z

                     x y - sinA sinB = -z

                     sinA sinB = x y + z

  STEP 4   Square both sides. Since sinA, sinB >= 0 , no sign is lost.

                     sin^2 A sin^2 B = (xy + z)^2
                     (1 - x^2)(1 - y^2) = (xy + z)^2

  STEP 5   Expand both sides:

              1 - x^2 - y^2 + x^2 y^2 = x^2 y^2 + 2xyz + z^2

              1 - x^2 - y^2 = 2xyz + z^2

              1 = x^2 + y^2 + z^2 + 2xyz            PROVED

  SANITY CHECK with x = y = z = 1/2 :
        cos^-1(1/2) = pi/3 , three of them sum to pi .  Condition holds.
        x^2+y^2+z^2+2xyz = 3(1/4) + 2(1/8) = 3/4 + 1/4 = 1 .   MATCHES.

  MARK SPLIT:  naming A, B, C and stating the range                1
               A + B = pi - C , taking cos                         1
               expansion of cos(A+B)                               1
               isolating sinA sinB and justifying the squaring     2
               algebra to the final line                           1
               conclusion                                          1
```

---

### Q C3
If `sin^-1 x + sin^-1 y + sin^-1 z = pi`, prove that
`x sqrt(1-x^2) + y sqrt(1-y^2) + z sqrt(1-z^2) = 2xyz`.

**ANSWER:**
```
  Let  A = sin^-1 x , B = sin^-1 y , C = sin^-1 z .
  So  sin A = x , sin B = y , sin C = z ,  and  A + B + C = pi .

  Each of A, B, C lies in [-pi/2, pi/2].  If any one of them were negative,
  the other two could not make up more than pi together (each is at most pi/2).
  So all three are in [0, pi/2] , which means every cosine is NON-NEGATIVE:

         cos A = + sqrt(1 - x^2) ,  cos B = + sqrt(1 - y^2) ,
         cos C = + sqrt(1 - z^2)

  Since A + B + C = pi , the three behave exactly like the angles of a triangle,
  so we may use the standard triangle identity

         sin 2A + sin 2B + sin 2C = 4 sinA sinB sinC

  (Proof of that identity, if asked:
       sin2A + sin2B = 2 sin(A+B) cos(A-B) = 2 sin C cos(A-B)
       sin2C = 2 sinC cosC = -2 sinC cos(A+B)
       sum = 2 sinC [ cos(A-B) - cos(A+B) ] = 2 sinC [ 2 sinA sinB ]
           = 4 sinA sinB sinC . )

  Now substitute  sin 2A = 2 sinA cosA = 2 x sqrt(1 - x^2) , and likewise:

     2x sqrt(1-x^2) + 2y sqrt(1-y^2) + 2z sqrt(1-z^2) = 4 x y z

  Divide throughout by 2:

      x sqrt(1-x^2) + y sqrt(1-y^2) + z sqrt(1-z^2) = 2 x y z     PROVED

  SANITY CHECK with x = y = z = sqrt3/2 :
        sin^-1(sqrt3/2) = pi/3 , three of them sum to pi .  Condition holds.
        LHS = 3 (sqrt3/2)(1/2) = 3 sqrt3 / 4
        RHS = 2 (sqrt3/2)^3 = 2 (3 sqrt3 / 8) = 3 sqrt3 / 4 .   MATCHES.

  MARK SPLIT:  naming A, B, C                                     1
               justifying that all cosines are non-negative       2
               quoting / proving the sin2A identity               2
               substitution                                       1
               conclusion                                         1
```

---

### Q C4
Prove that `4 tan^-1(1/5) - tan^-1(1/70) + tan^-1(1/99) = pi/4`.

**ANSWER:**
```
  STEP 1   2 tan^-1(1/5) .   |1/5| < 1 , so the tan double-angle form is legal.

                 2 (1/5)        2/5        10       5
            --------------- = --------- = ------ = ----
              1 - (1/25)       24/25        24      12

            2 tan^-1(1/5) = tan^-1(5/12)                        (1 mark)

  STEP 2   4 tan^-1(1/5) = 2 tan^-1(5/12) .   |5/12| < 1 , legal.

                 2 (5/12)         5/6        5 x 144      720      120
            ----------------- = --------- = ---------- = ------ = -----
              1 - (25/144)       119/144      6 x 119      714      119

            4 tan^-1(1/5) = tan^-1(120/119)                     (2 marks)

  STEP 3   Subtract tan^-1(1/70) .  Product = 120/(119 x 70) > -1 , Case 1.

              120/119 - 1/70          (120 x 70 - 119) / (119 x 70)
            --------------------- = --------------------------------
             1 + 120/(119 x 70)       (119 x 70 + 120) / (119 x 70)

                  8400 - 119       8281
              = -------------- = --------
                  8330 + 120       8450

              8281 = 49 x 169 ,   8450 = 50 x 169
              so the fraction = 49/50

            -> tan^-1(49/50)                                    (2 marks)

  STEP 4   Add tan^-1(1/99) .  Product = 49/4950 < 1 , Case 1.

              49/50 + 1/99          (49 x 99 + 50) / 4950        4901
            ------------------ = ------------------------- = ---------- = 1
             1 - 49/4950            (4950 - 49) / 4950           4901

            = tan^-1(1) = pi/4                                  (2 marks)

  Hence  4 tan^-1(1/5) - tan^-1(1/70) + tan^-1(1/99) = pi/4 .   PROVED

  DECIMAL CHECK:  4(0.19740) - 0.014284 + 0.010100
                = 0.78960 - 0.014284 + 0.010100 = 0.785415
                pi/4 = 0.785398 .   MATCHES to 4 decimal places.
```

---

### Q C5
Solve `tan^-1(x - 1) + tan^-1(x) + tan^-1(x + 1) = tan^-1(3x)`.

**ANSWER:**
```
  STEP 1   Combine the OUTER two terms (they are symmetric about x).
           a = x - 1 , b = x + 1 ,  a + b = 2x ,  ab = x^2 - 1 .

                                          2x                  2x
           tan^-1(x-1) + tan^-1(x+1) = tan^-1 -------------- = tan^-1 -------
                                         1 - (x^2 - 1)         2 - x^2

  STEP 2   Instead of adding tan^-1 x , move it to the right-hand side:

           tan^-1( 2x/(2 - x^2) ) = tan^-1(3x) - tan^-1(x)

  STEP 3   Use the difference formula on the right ( 3x . x = 3x^2 >= 0 > -1 ):

                              3x - x                 2x
           RHS = tan^-1 --------------- = tan^-1 -----------
                            1 + 3x^2              1 + 3x^2

  STEP 4   tan^-1 is one-one, so the arguments are equal:

                 2x             2x
              -------- = -------------
               2 - x^2      1 + 3x^2

              2x (1 + 3x^2) = 2x (2 - x^2)
              2x [ (1 + 3x^2) - (2 - x^2) ] = 0
              2x ( 4x^2 - 1 ) = 0

              x = 0 ,   x = 1/2 ,   x = -1/2

  STEP 5   CHECK EVERY ROOT.

           x = 0    :  tan^-1(-1) + tan^-1(0) + tan^-1(1)
                       = -pi/4 + 0 + pi/4 = 0 ;  RHS = tan^-1 0 = 0 .  ACCEPT.

           x = 1/2  :  tan^-1(-0.5) + tan^-1(0.5) + tan^-1(1.5)
                       = -0.4636 + 0.4636 + 0.9828 = 0.9828
                       RHS = tan^-1(1.5) = 0.9828 .                    ACCEPT.

           x = -1/2 :  every term simply changes sign (all are odd functions),
                       so both sides become -0.9828 .                  ACCEPT.

  ANSWER:  x = 0 ,  1/2 ,  -1/2

  MARK SPLIT:  pairing the outer terms                               2
               rearranging and using the difference formula          2
               forming and factorising the cubic                     2
               checking all three roots and stating them             1
```

---

### Q C6
(a) State the domain and the principal value range of all six inverse
trigonometric functions.
(b) Prove that `sin^-1 x + cos^-1 x = pi/2` for all `x` in `[-1, 1]`.
(c) Hence evaluate `sin^-1(-1/2) + cos^-1(-1/2) + tan^-1(-1) + cot^-1(-1)`.

**ANSWER:**
```
  (a)  THE TABLE                                                  (3 marks)

  +-------------+---------------------------+-------------------------------+
  |  FUNCTION   |  DOMAIN                   |  PRINCIPAL VALUE RANGE        |
  +-------------+---------------------------+-------------------------------+
  |  sin^-1 x   |  [ -1 , 1 ]               |  [ -pi/2 , pi/2 ]             |
  |  cos^-1 x   |  [ -1 , 1 ]               |  [   0   ,  pi  ]             |
  |  tan^-1 x   |  R                        |  ( -pi/2 , pi/2 )             |
  |  cot^-1 x   |  R                        |  (   0   ,  pi  )             |
  |  sec^-1 x   |  |x| >= 1                 |  [ 0 , pi ]  minus  {pi/2}    |
  | cosec^-1 x  |  |x| >= 1                 |  [-pi/2, pi/2] minus  {0}     |
  +-------------+---------------------------+-------------------------------+


  (b)  THE PROOF                                                  (2 marks)

  Let  sin^-1 x = A .  Then  sin A = x , with  A in [-pi/2, pi/2] .

  Now    cos(pi/2 - A) = sin A = x

  Also, if  -pi/2 <= A <= pi/2 , then  -pi/2 <= -A <= pi/2 ,
  so  0 <= pi/2 - A <= pi , which is EXACTLY the principal range of cos^-1 .

  Therefore  cos^-1 x = pi/2 - A = pi/2 - sin^-1 x ,

  that is,   sin^-1 x + cos^-1 x = pi/2 .                       PROVED

  (The middle step -- checking that pi/2 - A lands in [0, pi] -- is the step
   that actually earns the mark. Without it you have only shown the cosine
   is right, not that the PRINCIPAL value is right.)


  (c)  THE EVALUATION                                             (2 marks)

  sin^-1(-1/2) + cos^-1(-1/2)  = pi/2      [complementary pair, x = -1/2]
  tan^-1(-1)   + cot^-1(-1)    = pi/2      [complementary pair, x = -1]

  Total = pi/2 + pi/2 = pi

  LONGHAND CHECK:
       sin^-1(-1/2) = -pi/6 ,  cos^-1(-1/2) = 2pi/3
       -pi/6 + 2pi/3 = -pi/6 + 4pi/6 = 3pi/6 = pi/2      OK
       tan^-1(-1) = -pi/4 ,  cot^-1(-1) = 3pi/4
       -pi/4 + 3pi/4 = 2pi/4 = pi/2                      OK
       Total = pi                                        OK
```
**= pi**

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Chance of appearing |
|:---:|---|:---:|:---:|
| 1 | Prove `tan^-1 a + tan^-1 b + tan^-1 c = pi/4` (the `1/2, 1/5, 1/8` family) | B | very high |
| 2 | Find the principal value of a NEGATIVE argument | A | very high |
| 3 | Prove `sin^-1 a + sin^-1 b + sin^-1 c = pi/2` (`4/5, 5/13, 16/65`) | B | high |
| 4 | Prove `cos^-1 a + cos^-1 b = cos^-1 c` (`4/5, 12/13, 33/65`) | B | high |
| 5 | `sin^-1(sin t)` / `cos^-1(cos t)` with `t` outside the range | A | high |
| 6 | Solve `tan^-1(x+1) + tan^-1(x-1) = tan^-1(k)` | B | high |
| 7 | Prove `sin^-1 a + 2 tan^-1 b = pi/2` | B | medium-high |
| 8 | `sin^-1 x + cos^-1 x = pi/2` used to shortcut an expression | A | medium-high |
| 9 | Value of `tan[2 tan^-1 a - pi/4]` or `cos(sin^-1 a)` | A | medium |
| 10 | Prove `sin^-1 a + sin^-1 b = cos^-1 c` | B | medium |
| 11 | Solve `tan^-1((x-1)/(x-2)) + tan^-1((x+1)/(x+2)) = pi/4` | B | medium |
| 12 | Conditional identity (`sum = pi` or `pi/2`) | B / C | medium |
| 13 | `tan^-1(x/y) - tan^-1((x-y)/(x+y)) = pi/4` | B | medium |
| 14 | Is `sec^-1(1/2)` defined? (domain question) | A | low-medium |
| 15 | State the domain and range table | A / part of C | low-medium |

---

# THE THREE-LINE EXAM STRATEGY FOR THIS CHAPTER

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  1.  In SECTION A, the ITF question is almost always a principal value.  |
  |      Write the negative-argument rule, then the answer, then a one-line  |
  |      check. Two marks in ninety seconds.                                 |
  |                                                                          |
  |  2.  In SECTION B, if you see three fractions with 1 on top, it is the   |
  |      tan^-1 sum question. Write "xy = ... < 1, so Case 1 applies",       |
  |      then combine two at a time. Four marks in five minutes.             |
  |                                                                          |
  |  3.  If you are asked to SOLVE, you are being handed a fake root.        |
  |      Reserve the last two lines for substituting back and rejecting it.  |
  |                                                                          |
  +--------------------------------------------------------------------------+
```
