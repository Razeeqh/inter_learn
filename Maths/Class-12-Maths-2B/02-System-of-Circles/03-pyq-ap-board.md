# System of Circles — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIB · **Chapter 2**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So the questions below are grouped by "how often they appear" rather than being
> tagged to one exact year. No year has been invented here.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIB paper:**

```
  THE PAPER IS 75 MARKS

  Section A  (2 marks each, answer ALL 10)   ->  usually Q3  (sometimes Q2)
  Section B  (4 marks each, answer any 5)    ->  usually Q12 or Q13
  Section C  (7 marks each, answer any 5)    ->  usually Q19

  Chapter 1 (Circle) sits at Q1/Q2, Q11 and Q18.
  Chapter 2 (System of Circles) sits immediately after it.
  Do the two chapters BACK TO BACK in the exam hall.
```

**REMINDER BEFORE YOU START ANY QUESTION HERE**

```
  S1 = x^2 + y^2 + 2 g1 x + 2 f1 y + c1     C1 = (-g1, -f1)  r1 = sqrt(g1^2+f1^2-c1)
  S2 = x^2 + y^2 + 2 g2 x + 2 f2 y + c2     C2 = (-g2, -f2)  r2 = sqrt(g2^2+f2^2-c2)
  d  = C1C2

  ORTHOGONAL   2 g1 g2 + 2 f1 f2 = c1 + c2      (also  d^2 = r1^2 + r2^2)
  RADICAL AXIS S1 - S2 = 0
  ANGLE        cos(theta) = (d^2 - r1^2 - r2^2) / (2 r1 r2)
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: Angle between two circles

### Q A1
Find the angle between the circles `x^2 + y^2 - 12x - 6y + 41 = 0` and
`x^2 + y^2 + 4x + 6y - 59 = 0`.

**ANSWER:**
```
  CIRCLE 1  g1 = -6 , f1 = -3 , c1 = 41
            C1 = (6, 3)  ,  r1 = sqrt(36 + 9 - 41) = sqrt(4) = 2

  CIRCLE 2  g2 = 2 , f2 = 3 , c2 = -59
            C2 = (-2, -3) ,  r2 = sqrt(4 + 9 + 59) = sqrt(72) = 6 sqrt(2)

  d^2 = (6 + 2)^2 + (3 + 3)^2 = 64 + 36 = 100

               d^2 - r1^2 - r2^2      100 - 4 - 72         24         1
  cos(theta) = ------------------  =  -------------  =  --------- = ------
                    2 r1 r2            2(2)(6 sqrt2)    24 sqrt2    sqrt2
```
**theta = 45 degrees**

---

### Q A2
Find the angle between the circles `x^2 + y^2 + 4x - 14y + 28 = 0` and
`x^2 + y^2 + 4x - 5 = 0`.

**ANSWER:**
```
  C1 = (-2, 7) , r1 = sqrt(4 + 49 - 28) = sqrt(25) = 5
  C2 = (-2, 0) , r2 = sqrt(4 + 0 + 5)  = sqrt(9)  = 3

  d^2 = 0 + 49 = 49

               49 - 25 - 9       15      1
  cos(theta) = ------------ =  ------ = ---
                 2(5)(3)         30      2
```
**theta = 60 degrees**

---

### Q A3
Find the angle between `x^2 + y^2 - 4x - 6y - 3 = 0` and `x^2 + y^2 + 8x - 4y + 11 = 0`.

**ANSWER:**
```
  C1 = (2, 3)  , r1 = sqrt(4 + 9 + 3)   = 4
  C2 = (-4, 2) , r2 = sqrt(16 + 4 - 11) = 3

  d^2 = (2 + 4)^2 + (3 - 2)^2 = 36 + 1 = 37

               37 - 16 - 9       12      1
  cos(theta) = ------------  =  ---- =  ---
                 2(4)(3)         24      2
```
**theta = 60 degrees**

---

## Topic: Orthogonal circles

### Q A4
Show that the circles `x^2 + y^2 + 4x + 2y + 1 = 0` and `x^2 + y^2 - 2x - 5 = 0`
cut each other orthogonally.

**ANSWER:**
```
  g1 = 2 , f1 = 1 , c1 = 1
  g2 = -1, f2 = 0 , c2 = -5

  2 g1 g2 + 2 f1 f2 = 2(2)(-1) + 2(1)(0) = -4
  c1 + c2           = 1 + (-5)           = -4

  They are equal, so the circles cut ORTHOGONALLY.
```

---

### Q A5
Show that `x^2 + y^2 - 2x - 2y - 7 = 0` and `3x^2 + 3y^2 - 8x + 29y = 0`
cut each other orthogonally.

**ANSWER:** Divide the second circle by 3 first — this is the whole question.
```
  Second circle:  x^2 + y^2 - (8/3)x + (29/3)y = 0

  g1 = -1  , f1 = -1   , c1 = -7
  g2 = -4/3, f2 = 29/6 , c2 = 0

  2 g1 g2 + 2 f1 f2 = 2(-1)(-4/3) + 2(-1)(29/6)
                    = 8/3 - 29/3
                    = -21/3 = -7

  c1 + c2 = -7 + 0 = -7

  Equal, so the circles are ORTHOGONAL.
```

---

### Q A6
Find k if the circles `x^2 + y^2 - 5x - 14y - 34 = 0` and
`x^2 + y^2 + 2x + 4y + k = 0` are orthogonal.

**ANSWER:**
```
  g1 = -5/2 , f1 = -7 , c1 = -34
  g2 =  1   , f2 =  2 , c2 = k

  2(-5/2)(1) + 2(-7)(2) = -34 + k

           -5 - 28 = -34 + k

              -33  = -34 + k
```
**k = 1**

---

### Q A7
Find k if `x^2 + y^2 - 6x - 8y + 12 = 0` and `x^2 + y^2 - 4x + 6y + k = 0`
cut orthogonally.

**ANSWER:**
```
  g1 = -3 , f1 = -4 , c1 = 12
  g2 = -2 , f2 =  3 , c2 = k

  2(-3)(-2) + 2(-4)(3) = 12 + k

            12 - 24 = 12 + k

               -12  = 12 + k
```
**k = -24**
```
  CHECK:  r1^2 = 9 + 16 - 12 = 13 ,  r2^2 = 4 + 9 + 24 = 37
          d^2  = (3 - 2)^2 + (4 + 3)^2 = 1 + 49 = 50 = 13 + 37     CORRECT
```

---

### Q A8
Find k if `x^2 + y^2 + 2x + 2ky + 6 = 0` and `x^2 + y^2 + 2ky + k = 0`
are orthogonal.

**ANSWER:**
```
  g1 = 1 , f1 = k , c1 = 6
  g2 = 0 , f2 = k , c2 = k

  2(1)(0) + 2(k)(k) = 6 + k

              2k^2 = 6 + k

      2k^2 - k - 6 = 0

      (2k + 3)(k - 2) = 0
```
**k = 2 or k = -3/2**

---

### Q A9
If two circles of radii 3 and 4 cut each other orthogonally, find the distance
between their centres.

**ANSWER:**
```
  Orthogonal  ->  d^2 = r1^2 + r2^2 = 9 + 16 = 25
```
**d = 5**

---

### Q A10
Show that `x^2 + y^2 + 2gx + c = 0` and `x^2 + y^2 + 2fy + c' = 0` cut
orthogonally if `c + c' = 0`.

**ANSWER:**
```
  CIRCLE 1  g1 = g , f1 = 0 , c1 = c
  CIRCLE 2  g2 = 0 , f2 = f , c2 = c'

  2 g1 g2 + 2 f1 f2 = 2(g)(0) + 2(0)(f) = 0

  Condition:  0 = c1 + c2 = c + c'

  So they are orthogonal exactly when c + c' = 0.
```

---

## Topic: Radical axis / common chord

### Q A11
Find the radical axis of `x^2 + y^2 - 2x - 4y - 1 = 0` and
`x^2 + y^2 - 4x - 6y + 11 = 0`.

**ANSWER:**
```
  RADICAL AXIS  =  S1 - S2 = 0

  (-2x - 4y - 1) - (-4x - 6y + 11) = 0

     -2x - 4y - 1 + 4x + 6y - 11 = 0

              2x + 2y - 12 = 0
```
**x + y - 6 = 0**
```
  CHECK: C1 = (1,2) , C2 = (2,3) , slope of C1C2 = 1
         slope of x + y - 6 = 0 is -1 ,  product = -1   PERPENDICULAR
```

---

### Q A12
Find the radical axis of `x^2 + y^2 + 4x - 7 = 0` and `2x^2 + 2y^2 + 3x + 5y - 9 = 0`.

**ANSWER:** Divide the second circle by 2 first.
```
  Second circle:  x^2 + y^2 + (3/2)x + (5/2)y - 9/2 = 0

  S1 - S2 :   (4x - 7) - ( (3/2)x + (5/2)y - 9/2 ) = 0

              (5/2)x - (5/2)y - 5/2 = 0

  multiply by 2/5:
```
**x - y - 1 = 0**

---

### Q A13
Find the equation of the common chord of `x^2 + y^2 - 4x - 4y + 3 = 0` and
`x^2 + y^2 - 2x - 4y + 1 = 0`.

**ANSWER:**
```
  S1 - S2 :  (-4x - 4y + 3) - (-2x - 4y + 1) = 0

             -4x - 4y + 3 + 2x + 4y - 1 = 0

                       -2x + 2 = 0
```
**x = 1**

---

### Q A14
Find the equation of the common chord of `x^2 + y^2 = 25` and
`x^2 + y^2 - 8x - 6y + 5 = 0`.

**ANSWER:**
```
  Write circle 1 as x^2 + y^2 - 25 = 0.

  S1 - S2 :  (-25) - (-8x - 6y + 5) = 0

               8x + 6y - 30 = 0
```
**4x + 3y - 15 = 0**

---

### Q A15
Find k if the common chord of `x^2 + y^2 - 2x - 4y + 1 = 0` and
`x^2 + y^2 + 2x + ky - 3 = 0` passes through the point (1, 1).

**ANSWER:**
```
  COMMON CHORD  S1 - S2 = 0 :

     (-2x - 4y + 1) - (2x + ky - 3) = 0

         -4x - (4 + k) y + 4 = 0

  Substitute (1, 1):

         -4 - (4 + k) + 4 = 0    ->    -(4 + k) = 0
```
**k = -4**

---

### Q A16
Why do two concentric circles have no radical axis?

**ANSWER:**
```
  Concentric means the same centre, so g1 = g2 and f1 = f2.

  S1 - S2 = 2(g1-g2)x + 2(f1-f2)y + (c1 - c2)
          = 0 + 0 + (c1 - c2)
          = c1 - c2 ,  a NON-ZERO constant (the radii differ).

  "c1 - c2 = 0" is impossible, so no line satisfies it.
```
**There is no radical axis for concentric circles.**

---

## Topic: Position of two circles and common tangents

### Q A17
Show that the circles `x^2 + y^2 - 6x - 2y + 1 = 0` and `x^2 + y^2 + 2x - 8y + 13 = 0`
touch each other.

**ANSWER:**
```
  C1 = (3, 1)  , r1 = sqrt(9 + 1 - 1)   = 3
  C2 = (-1, 4) , r2 = sqrt(1 + 16 - 13) = 2

  d = sqrt( (3 + 1)^2 + (1 - 4)^2 ) = sqrt(16 + 9) = 5

  r1 + r2 = 3 + 2 = 5 = d
```
**They touch each other EXTERNALLY. (3 common tangents.)**

---

### Q A18
Find the number of common tangents to `x^2 + y^2 = 25` and `x^2 + y^2 - 4x - 5 = 0`.

**ANSWER:**
```
  C1 = (0, 0) , r1 = 5
  C2 = (2, 0) , r2 = sqrt(4 + 5) = 3
  d  = 2

  |r1 - r2| = 2 = d   ->   the circles TOUCH INTERNALLY
```
**Exactly 1 common tangent.**

---

### Q A19
Find the number of common tangents to `x^2 + y^2 = 4` and `x^2 + y^2 - 6x - 8y + 16 = 0`.

**ANSWER:**
```
  C1 = (0, 0) , r1 = 2
  C2 = (3, 4) , r2 = sqrt(9 + 16 - 16) = 3
  d  = sqrt(9 + 16) = 5

  r1 + r2 = 5 = d   ->   TOUCH EXTERNALLY
```
**3 common tangents.**

---

### Q A20
Find the number of common tangents to `x^2 + y^2 - 4x - 6y - 12 = 0` and
`x^2 + y^2 + 6x + 18y + 26 = 0`.

**ANSWER:**
```
  C1 = (2, 3)   , r1 = sqrt(4 + 9 + 12)  = sqrt(25) = 5
  C2 = (-3, -9) , r2 = sqrt(9 + 81 - 26) = sqrt(64) = 8

  d = sqrt( (2 + 3)^2 + (3 + 9)^2 ) = sqrt(25 + 144) = sqrt(169) = 13

  r1 + r2 = 13 = d   ->   TOUCH EXTERNALLY
```
**3 common tangents.**

---

### Q A21
Find the point of contact of `x^2 + y^2 - 6x - 2y + 1 = 0` and
`x^2 + y^2 + 2x - 8y + 13 = 0`.

**ANSWER:** From Q A17 they touch externally with r1 = 3, r2 = 2.
```
  The contact point divides C1(3,1) C2(-1,4) INTERNALLY in 3 : 2 :

     ( 3(-1) + 2(3)     3(4) + 2(1) )     ( 3    14 )
     ( ------------- ,  ----------- )  =  ( -- , -- )
     (     5                 5      )     ( 5     5 )
```
**Point of contact = (3/5, 14/5)**
```
  CHECK on circle 1:
     9/25 + 196/25 - 18/5 - 28/5 + 1 = 8.2 - 3.6 - 5.6 + 1 = 0    CORRECT
```

---

### Q A22
Find the length of the direct (external) common tangent to `x^2 + y^2 = 49`
and `x^2 + y^2 - 12x - 16y + 99 = 0`.

**ANSWER:**
```
  C1 = (0, 0) , r1 = 7
  C2 = (6, 8) , r2 = sqrt(36 + 64 - 99) = 1
  d  = sqrt(36 + 64) = 10

  L1 = sqrt( d^2 - (r1 - r2)^2 ) = sqrt(100 - 36) = sqrt(64)
```
**Length of the direct common tangent = 8**

---

### Q A23
For the same two circles, find the length of the transverse (internal) common tangent.

**ANSWER:**
```
  L2 = sqrt( d^2 - (r1 + r2)^2 ) = sqrt(100 - 64) = sqrt(36)
```
**Length of the transverse common tangent = 6**
```
  (Direct is always the longer one - use that as a check.)
```

---

### Q A24
Find the internal and external centres of similitude of `x^2 + y^2 = 4` and
`x^2 + y^2 - 6x - 8y + 16 = 0`.

**ANSWER:**
```
  C1 = (0, 0) , r1 = 2 ;   C2 = (3, 4) , r2 = 3 ;   ratio r1 : r2 = 2 : 3

  INTERNAL (divides C1C2 internally 2:3):

      ( 2(3) + 3(0)     2(4) + 3(0) )     ( 6    8 )
      ( ------------ ,  ----------- )  =  ( -- , -- )
      (    2 + 3            2 + 3   )     ( 5    5 )

  EXTERNAL (divides C1C2 externally 2:3):

      ( 2(3) - 3(0)     2(4) - 3(0) )     (  6      8  )
      ( ------------ ,  ----------- )  =  ( ---- , --- )  = ( -6 , -8 )
      (    2 - 3            2 - 3   )     (  -1     -1 )
```
**Internal (6/5, 8/5) and external (-6, -8)**

---

### Q A25
Find the radical centre of `x^2 + y^2 + 4x - 7 = 0`, `2x^2 + 2y^2 + 3x + 5y - 9 = 0`
and `x^2 + y^2 + y = 0`.

**ANSWER:**
```
  Divide the second by 2:  x^2 + y^2 + (3/2)x + (5/2)y - 9/2 = 0

  S1 - S2 :  (5/2)x - (5/2)y - 5/2 = 0    ->    x - y - 1 = 0     ...(I)
  S1 - S3 :  4x - y - 7 = 0                                       ...(II)

  (II) - (I):   3x - 6 = 0   ->   x = 2 ,  then y = 1
```
**Radical centre = (2, 1)**
```
  CHECK: S1 at (2,1) = 4 + 1 + 8 - 7 = 6
         S3 at (2,1) = 4 + 1 + 1 = 6    (equal tangent lengths)   CORRECT
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 of the 7. This chapter usually supplies Q12 or Q13.
# ===============================================================

### Q B1
Find the radical axis of `x^2 + y^2 - 2x - 4y - 1 = 0` and
`x^2 + y^2 - 4x - 6y + 11 = 0`, and prove it is perpendicular to the line
joining the centres.

**ANSWER:**
```
  STEP 1  RADICAL AXIS  =  S1 - S2 = 0

     (x^2+y^2-2x-4y-1) - (x^2+y^2-4x-6y+11) = 0

              2x + 2y - 12 = 0

              x + y - 6 = 0

  STEP 2  Centres:  C1 = (1, 2)  and  C2 = (2, 3)

  STEP 3  Slope of C1C2 = (3 - 2)/(2 - 1) = 1

  STEP 4  Slope of x + y - 6 = 0 is -1

  STEP 5  Product of the slopes = (1)(-1) = -1

          Therefore the radical axis is PERPENDICULAR to C1C2.
```
```
  EXTRA (do the general proof if the question says "show in general"):

     slope of 2(g1-g2)x + 2(f1-f2)y + (c1-c2) = 0  is  -(g1-g2)/(f1-f2)
     slope of C1(-g1,-f1) to C2(-g2,-f2)       is   (f1-f2)/(g1-g2)
     product = -1
```

---

### Q B2
Find the length of the common chord of `x^2 + y^2 = 25` and
`x^2 + y^2 - 8x - 6y + 5 = 0`.

**ANSWER:**
```
  STEP 1  COMMON CHORD = S1 - S2 = 0

     (x^2 + y^2 - 25) - (x^2 + y^2 - 8x - 6y + 5) = 0

               8x + 6y - 30 = 0     ->     4x + 3y - 15 = 0

  STEP 2  Circle 1:  C1 = (0, 0) ,  r1 = 5

  STEP 3  Perpendicular distance from C1 to the chord:

                | 0 + 0 - 15 |        15
          p1 = ---------------  =  ------  =  3
                sqrt(16 + 9)          5

  STEP 4  LENGTH = 2 sqrt(r1^2 - p1^2) = 2 sqrt(25 - 9) = 2(4)
```
**Length of the common chord = 8**
```
  CHECK with the other circle:
     C2 = (4, 3) , r2 = sqrt(16 + 9 - 5) = sqrt(20)
     p2 = |16 + 9 - 15|/5 = 2
     2 sqrt(20 - 4) = 2(4) = 8                        SAME ANSWER
```

---

### Q B3
Find the length of the common chord of `x^2 + y^2 + 2x + 3y + 1 = 0` and
`x^2 + y^2 + 4x + 3y + 2 = 0`.

**ANSWER:**
```
  COMMON CHORD:  (2x + 3y + 1) - (4x + 3y + 2) = 0
                     -2x - 1 = 0    ->    2x + 1 = 0    (i.e. x = -1/2)

  Circle 1:  g1 = 1 , f1 = 3/2 , c1 = 1
             C1 = (-1, -3/2)
             r1 = sqrt(1 + 9/4 - 1) = 3/2

  p1 = distance from (-1, -3/2) to the line x = -1/2
     = | -1 + 1/2 | = 1/2

  LENGTH = 2 sqrt( 9/4 - 1/4 ) = 2 sqrt(8/4) = 2 sqrt(2)
```
**Length = 2 sqrt(2)**

---

### Q B4
Find the length of the common chord of `x^2 + y^2 + 2x + 4y + 1 = 0` and
`x^2 + y^2 + 4x + 2y + 3 = 0`.

**ANSWER:**
```
  COMMON CHORD:  (2x + 4y + 1) - (4x + 2y + 3) = 0
                     -2x + 2y - 2 = 0    ->    x - y + 1 = 0

  Circle 1:  C1 = (-1, -2) , r1 = sqrt(1 + 4 - 1) = 2

  p1 = | -1 - (-2) + 1 | / sqrt(1 + 1) = | -1 + 2 + 1 | / sqrt2 = 2/sqrt2 = sqrt2

  LENGTH = 2 sqrt( 4 - 2 ) = 2 sqrt(2)
```
**Length = 2 sqrt(2)**
```
  CHECK with circle 2:  C2 = (-2, -1) , r2 = sqrt(4 + 1 - 3) = sqrt(2)
     p2 = | -2 + 1 + 1 |/sqrt2 = 0
     So the chord is a DIAMETER of circle 2, length = 2 r2 = 2 sqrt(2)  CORRECT
```

---

### Q B5
Show that the common chord of `x^2 + y^2 = 9` and `x^2 + y^2 - 4x - 9 = 0`
is a diameter of the first circle, and find its length.

**ANSWER:**
```
  COMMON CHORD:  (x^2+y^2-9) - (x^2+y^2-4x-9) = 0

                        4x = 0     ->     x = 0

  Circle 1:  C1 = (0, 0) , r1 = 3.

  The line x = 0 passes through the centre (0, 0),
  so the common chord IS a diameter of the first circle.

  LENGTH = 2 r1 = 6
```
```
  CHECK using the distance condition d^2 = r2^2 - r1^2 :
     C2 = (2, 0) , r2 = sqrt(4 + 9) = sqrt(13) , d = 2
     d^2 = 4  and  r2^2 - r1^2 = 13 - 9 = 4               CORRECT
```

---

### Q B6
Find the radical centre of `x^2 + y^2 + 4x - 7 = 0`,
`2x^2 + 2y^2 + 3x + 5y - 9 = 0` and `x^2 + y^2 + y = 0`.

**ANSWER:**
```
  STEP 1  Make every circle start with x^2 + y^2.
          Divide the second by 2:   x^2 + y^2 + (3/2)x + (5/2)y - 9/2 = 0

  STEP 2  S1 - S2 = 0 :

     (4x - 7) - ( (3/2)x + (5/2)y - 9/2 ) = 0

          4x - (3/2)x - (5/2)y - 7 + 9/2 = 0

              (5/2)x - (5/2)y - 5/2 = 0

              x - y - 1 = 0                                 ...(I)

  STEP 3  S1 - S3 = 0 :

     (4x - 7) - (y) = 0    ->    4x - y - 7 = 0             ...(II)

  STEP 4  (II) - (I) :   3x - 6 = 0   ->   x = 2
          From (I):      2 - y - 1 = 0  ->  y = 1
```
**Radical centre = (2, 1)**
```
  CHECK with the third radical axis  S2 - S3 = 0 :
     (3/2)x + (3/2)y - 9/2 = 0  ->  x + y - 3 = 0
     At (2,1):  2 + 1 - 3 = 0                CONCURRENT - CORRECT
```

---

### Q B7
Find the circle that cuts `x^2 + y^2 + 4x + 2y + 1 = 0` and `x^2 + y^2 - 2x - 5 = 0`
orthogonally and passes through the origin.

**ANSWER:**
```
  Let the circle be  x^2 + y^2 + 2gx + 2fy + c = 0.

  (i)  Through (0,0):    c = 0

  (ii) Orthogonal to circle 1 (g'=2, f'=1, c'=1):

           2g(2) + 2f(1) = c + 1
                4g + 2f = 1                       ...(I)

  (iii) Orthogonal to circle 2 (g'=-1, f'=0, c'=-5):

           2g(-1) + 2f(0) = c + (-5)
                    -2g = -5      ->    g = 5/2

  Put g = 5/2 in (I):   10 + 2f = 1   ->   f = -9/2
```
**x^2 + y^2 + 5x - 9y = 0**
```
  CHECK 1: 2(5/2)(2) + 2(-9/2)(1) = 10 - 9 = 1 = c + c' = 0 + 1    CORRECT
  CHECK 2: 2(5/2)(-1) + 0 = -5 = c + c' = 0 - 5                    CORRECT
```

---

### Q B8
Find the equation of the circle whose centre is (2, 3) and which cuts the circle
`x^2 + y^2 - 4x + 2y - 7 = 0` orthogonally.

**ANSWER:**
```
  Centre (2, 3)  ->  -g = 2 and -f = 3  ->  g = -2 , f = -3

  Given circle:  g' = -2 , f' = 1 , c' = -7

  ORTHOGONALITY:   2 g g' + 2 f f' = c + c'

                   2(-2)(-2) + 2(-3)(1) = c - 7

                          8 - 6 = c - 7

                             2 = c - 7      ->    c = 9
```
**x^2 + y^2 - 4x - 6y + 9 = 0**
```
  CHECK: our radius = sqrt(4 + 9 - 9) = 2 (a real circle)
         given circle: C' = (2, -1) , r' = sqrt(4 + 1 + 7) = sqrt(12)
         d^2 = (2-2)^2 + (3+1)^2 = 16
         r^2 + r'^2 = 4 + 12 = 16 = d^2                    ORTHOGONAL
```

---

### Q B9
Show that the circles `x^2 + y^2 - 6x - 2y + 1 = 0` and `x^2 + y^2 + 2x - 8y + 13 = 0`
touch each other, and find the point of contact and the common tangent there.

**ANSWER:**
```
  STEP 1  C1 = (3, 1)  , r1 = sqrt(9 + 1 - 1)   = 3
          C2 = (-1, 4) , r2 = sqrt(1 + 16 - 13) = 2

  STEP 2  d = sqrt(16 + 9) = 5 = r1 + r2   ->   TOUCH EXTERNALLY

  STEP 3  Point of contact divides C1C2 internally in 3 : 2 :

             ( 3(-1) + 2(3)     3(4) + 2(1) )
             ( ------------- ,  ----------- )  =  ( 3/5 , 14/5 )
             (      5                5      )

  STEP 4  Common tangent at the contact point = radical axis S1 - S2 = 0 :

             (-6x - 2y + 1) - (2x - 8y + 13) = 0

                  -8x + 6y - 12 = 0

                   4x - 3y + 6 = 0
```
```
  CHECK:  distance from C1(3,1) to 4x - 3y + 6 = 0 is |12-3+6|/5 = 3 = r1
          distance from C2(-1,4)                is |-4-12+6|/5 = 2 = r2
```
**Point of contact (3/5, 14/5); common tangent 4x - 3y + 6 = 0**

---

### Q B10
Find the lengths of the direct and transverse common tangents to `x^2 + y^2 = 49`
and `x^2 + y^2 - 12x - 16y + 99 = 0`.

**ANSWER:**
```
  C1 = (0, 0) , r1 = 7
  C2 = (6, 8) , r2 = sqrt(36 + 64 - 99) = 1
  d  = sqrt(36 + 64) = 10

  r1 + r2 = 8 < d = 10   ->   the circles lie apart, 4 common tangents exist.

  DIRECT      L1 = sqrt(d^2 - (r1 - r2)^2) = sqrt(100 - 36) = 8
  TRANSVERSE  L2 = sqrt(d^2 - (r1 + r2)^2) = sqrt(100 - 64) = 6
```
**Direct = 8, transverse = 6**

---

### Q B11
Find the equation of the circle passing through the intersection of
`x^2 + y^2 - 8x - 6y + 21 = 0` and `x^2 + y^2 - 2x - 15 = 0` and through
the point (1, 2).

**ANSWER:**
```
  FAMILY:  S1 + k S2 = 0

  Evaluate each circle at (1, 2):

     S1 at (1,2) = 1 + 4 - 8 - 12 + 21 = 6
     S2 at (1,2) = 1 + 4 - 2 - 15      = -12

  The point lies on the family circle:

     6 + k(-12) = 0     ->     k = 1/2

  S1 + (1/2) S2 = 0 ; multiply by 2:

     2(x^2+y^2-8x-6y+21) + (x^2+y^2-2x-15) = 0

     3x^2 + 3y^2 - 18x - 12y + 27 = 0
```
**x^2 + y^2 - 6x - 4y + 9 = 0**
```
  CHECK at (1,2):  1 + 4 - 6 - 8 + 9 = 0                     CORRECT
  Centre (3, 2) , radius = sqrt(9 + 4 - 9) = 2 (real circle)
```

---

### Q B12
Find the equation of the circle passing through the intersection of the circle
`x^2 + y^2 = 9` and the line `x + y = 3`, and whose centre lies on `x + 2y = 3`.

**ANSWER:**
```
  FAMILY:  S + k L = 0

     (x^2 + y^2 - 9) + k(x + y - 3) = 0

      x^2 + y^2 + kx + ky - 9 - 3k = 0

  So  2g = k  ->  g = k/2  and  2f = k  ->  f = k/2

  CENTRE = ( -k/2 , -k/2 )

  It lies on x + 2y = 3:

      (-k/2) + 2(-k/2) = 3

              -3k/2 = 3     ->     k = -2
```
**x^2 + y^2 - 2x - 2y - 3 = 0**
```
  CHECK: the line x + y = 3 meets x^2 + y^2 = 9 at (3,0) and (0,3).
     At (3,0):  9 - 6 - 3 = 0                                 CORRECT
     At (0,3):  9 - 6 - 3 = 0                                 CORRECT
     Centre (1,1) , and 1 + 2(1) = 3                          CORRECT
```

---

### Q B13
Find the equation of the circle passing through the intersection of
`x^2 + y^2 - 4x - 6y - 12 = 0` and `x^2 + y^2 + 6x + 4y - 12 = 0`, whose
centre lies on the x-axis.

**ANSWER:**
```
  FAMILY:   S1 + k S2 = 0

     (1+k)x^2 + (1+k)y^2 + (-4 + 6k)x + (-6 + 4k)y + (-12 - 12k) = 0

  The y-coefficient gives    2f = (-6 + 4k)/(1 + k)

  CENTRE ON THE x-AXIS means f = 0, so

           -6 + 4k = 0     ->     k = 3/2

  Use 2 S1 + 3 S2 = 0:

     2(x^2+y^2-4x-6y-12) + 3(x^2+y^2+6x+4y-12) = 0

     5x^2 + 5y^2 + 10x + 0y - 60 = 0
```
**x^2 + y^2 + 2x - 12 = 0**
```
  CHECK.  Radical axis: S1 - S2 = -10x - 10y = 0  ->  x + y = 0
          Substituting y = -x into S1:  2x^2 + 2x - 12 = 0  ->  x = 2 or -3
          Intersection points: (2, -2) and (-3, 3).
     At (2,-2):   4 + 4 + 4 - 12 = 0                          CORRECT
     At (-3,3):   9 + 9 - 6 - 12 = 0                          CORRECT
     Centre (-1, 0) lies on the x-axis                        CORRECT
```

---

### Q B14
Find the equation of the circle whose diameter is the common chord of
`x^2 + y^2 + 2x + 3y + 1 = 0` and `x^2 + y^2 + 4x + 3y + 2 = 0`.

**ANSWER:**
```
  STEP 1  COMMON CHORD (radical axis):

     (2x + 3y + 1) - (4x + 3y + 2) = 0   ->   -2x - 1 = 0   ->   2x + 1 = 0

  STEP 2  Every circle through those two points is  S1 + L(lambda) = 0 :

     x^2 + y^2 + 2x + 3y + 1 + lambda(2x + 1) = 0

     x^2 + y^2 + (2 + 2 lambda)x + 3y + (1 + lambda) = 0

     CENTRE = ( -(1 + lambda) , -3/2 )

  STEP 3  "The chord is a DIAMETER"  ->  the centre lies ON the chord:

     2( -(1 + lambda) ) + 1 = 0

          -2 - 2 lambda + 1 = 0     ->     lambda = -1/2

  STEP 4  Substitute back:

     x^2 + y^2 + x + 3y + 1/2 = 0
```
**2x^2 + 2y^2 + 2x + 6y + 1 = 0**
```
  CHECK: centre (-1/2, -3/2) lies on 2x + 1 = 0                CORRECT
         r^2 = 1/4 + 9/4 - 1/2 = 2 , so r = sqrt(2) (real)
```

---

### Q B15
Find k if the circles `x^2 + y^2 + 2x + 2ky + 6 = 0` and `x^2 + y^2 + 2ky + k = 0`
intersect orthogonally, and verify one of your answers geometrically.

**ANSWER:**
```
  g1 = 1 , f1 = k , c1 = 6        g2 = 0 , f2 = k , c2 = k

  2(1)(0) + 2(k)(k) = 6 + k

        2k^2 - k - 6 = 0     ->     (2k + 3)(k - 2) = 0

  k = 2   or   k = -3/2

  VERIFY k = 2:
     Circle 1: x^2+y^2+2x+4y+6=0 , C1=(-1,-2), r1^2 = 1 + 4 - 6 = -1

     NEGATIVE - so for k = 2 circle 1 is IMAGINARY.

  VERIFY k = -3/2:
     Circle 1: x^2+y^2+2x-3y+6=0 , r1^2 = 1 + 9/4 - 6 = -11/4 , also negative.
```
**k = 2 or k = -3/2** (these satisfy the algebraic condition; note that the
first circle is imaginary for both values, so the "orthogonality" here is purely
algebraic. Write the two values of k — that is what carries the marks — and add
the remark if you have time.)

---

### Q B16
Find the angle between the circles `x^2 + y^2 - 12x - 6y + 41 = 0` and
`x^2 + y^2 + 4x + 6y - 59 = 0`, and state whether they really intersect.

**ANSWER:**
```
  C1 = (6, 3)   , r1 = sqrt(36 + 9 - 41) = 2
  C2 = (-2, -3) , r2 = sqrt(4 + 9 + 59)  = sqrt(72) = 6 sqrt(2) ~ 8.485
  d  = sqrt(64 + 36) = 10

  DO THEY INTERSECT?
     |r1 - r2| ~ 6.485   and   r1 + r2 ~ 10.485
     6.485 < 10 < 10.485      YES - two points of intersection.

               d^2 - r1^2 - r2^2       100 - 4 - 72        24         1
  cos(theta) = ------------------  =  -------------  =  --------  = ------
                    2 r1 r2            2(2)(6 sqrt2)    24 sqrt2    sqrt2
```
**theta = 45 degrees; the circles do intersect at two points.**

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 of the 7. This chapter usually supplies Q19.
# ===============================================================

### Q C1  (the most-asked long answer from this chapter)
Find the equation of the circle which cuts each of the following circles
orthogonally:

```
     x^2 + y^2 + 2x + 17y + 4  = 0
     x^2 + y^2 + 7x +  6y + 11 = 0
     x^2 + y^2 -  x + 22y +  3 = 0
```

**ANSWER:**
```
  MARK SPLIT:  set-up 1 , three conditions 3 , solving 2 , answer + check 1

  STEP 1  Let the required circle be   x^2 + y^2 + 2gx + 2fy + c = 0.

  STEP 2  Read off g', f', c' for each given circle:

          A :  g' = 1    , f' = 17/2 , c' = 4
          B :  g' = 7/2  , f' = 3    , c' = 11
          C :  g' = -1/2 , f' = 11   , c' = 3

  STEP 3  Apply  2 g g' + 2 f f' = c + c'  three times:

     A :  2g(1)    + 2f(17/2) = c + 4     ->    2g + 17f = c + 4    ...(1)
     B :  2g(7/2)  + 2f(3)    = c + 11    ->    7g +  6f = c + 11   ...(2)
     C :  2g(-1/2) + 2f(11)   = c + 3     ->    -g + 22f = c + 3    ...(3)

  STEP 4  Eliminate c by subtracting.

     (2) - (1):   5g - 11f = 7                                      ...(4)
     (2) - (3):   8g - 16f = 8      ->      g - 2f = 1              ...(5)

  STEP 5  From (5):  g = 1 + 2f.  Substitute into (4):

               5(1 + 2f) - 11f = 7
                5 + 10f - 11f = 7
                        -f = 2       ->     f = -2

               g = 1 + 2(-2) = -3

  STEP 6  From (1):  c = 2g + 17f - 4 = -6 - 34 - 4 = -44
```
**x^2 + y^2 - 6x - 4y - 44 = 0**
```
  STEP 7  CHECK against (2):  7(-3) + 6(-2) = -33 ; c + 11 = -44 + 11 = -33  OK
          CHECK against (3):  3 + 22(-2)    = -41 ; c + 3  = -44 + 3  = -41  OK
          Radius = sqrt(9 + 4 + 44) = sqrt(57) , a real circle.

  ALTERNATIVE (faster, also full marks):
     The centre is the RADICAL CENTRE of the three circles and the radius is
     the tangent length from it.
        A - B :  -5x + 11y - 7 = 0
        A - C :   3x -  5y + 1 = 0
     Solving:  x = 3 , y = 2 , so the centre is (3, 2) = (-g, -f)   -> g=-3, f=-2
     Tangent length^2 = A at (3,2) = 9 + 4 + 6 + 34 + 4 = 57
     Circle: (x-3)^2 + (y-2)^2 = 57  ->  x^2 + y^2 - 6x - 4y - 44 = 0
```

---

### Q C2
Find the equation of the circle passing through the points of intersection of
`x^2 + y^2 - 2x - 4y - 4 = 0` and `x^2 + y^2 - 10x - 12y + 40 = 0`, whose
radius is 4.

**ANSWER:**
```
  MARK SPLIT: family 1 , g,f,c of the family 2 , radius equation 2 ,
              solving for k 1 , both answers + check 1

  STEP 1  Confirm the circles really cut each other.
     C1 = (1,2) , r1 = sqrt(1 + 4 + 4)   = 3
     C2 = (5,6) , r2 = sqrt(25 + 36 - 40) = sqrt(21) ~ 4.58
     d  = sqrt(16 + 16) = sqrt(32) ~ 5.66
     |r1 - r2| ~ 1.58 < 5.66 < r1 + r2 ~ 7.58     TWO points of intersection.

  STEP 2  FAMILY  S1 + k S2 = 0 :

     (1+k)x^2 + (1+k)y^2 + (-2 - 10k)x + (-4 - 12k)y + (-4 + 40k) = 0

  STEP 3  Divide by (1 + k) and write t = 1 + k :

          -(1 + 5k)            -(2 + 6k)            40k - 4
     g = -----------    f  =  -----------    c  =  ---------
             t                     t                   t

  STEP 4  Radius 4 means  g^2 + f^2 - c = 16 :

     (1 + 5k)^2 + (2 + 6k)^2        (40k - 4)
     ------------------------   -   ---------   =  16
              t^2                       t

     Multiply by t^2 = (1 + k)^2 :

     (1 + 10k + 25k^2) + (4 + 24k + 36k^2) - (40k - 4)(1 + k) = 16(1 + k)^2

              61k^2 + 34k + 5  -  (40k^2 + 36k - 4)  =  16k^2 + 32k + 16

                             21k^2 - 2k + 9  =  16k^2 + 32k + 16

                             5k^2 - 34k - 7  =  0

     Discriminant = 1156 + 140 = 1296 , sqrt(1296) = 36

              34 +- 36
        k  =  --------   =   7     or     -1/5
                 10

  STEP 5  k = -1/5.  Use 5 S1 - S2 = 0 :

     5(x^2+y^2-2x-4y-4) - (x^2+y^2-10x-12y+40) = 0

     4x^2 + 4y^2 - 8y - 60 = 0

     x^2 + y^2 - 2y - 15 = 0
        centre (0,1) , radius = sqrt(0 + 1 + 15) = 4                 CORRECT

  STEP 6  k = 7.   S1 + 7 S2 = 0 :

     8x^2 + 8y^2 - 72x - 88y + 276 = 0

     2x^2 + 2y^2 - 18x - 22y + 69 = 0
        divide by 2: g = -9/2 , f = -11/2 , c = 69/2
        r^2 = 81/4 + 121/4 - 138/4 = 64/4 = 16 , r = 4               CORRECT
```
**x^2 + y^2 - 2y - 15 = 0   or   2x^2 + 2y^2 - 18x - 22y + 69 = 0**

> Write **both**. A quadratic in k means two genuine circles, and the examiner
> is looking for both of them.

---

### Q C3
Find the equations of the **direct** common tangents to
`x^2 + y^2 + 22x - 4y - 100 = 0` and `x^2 + y^2 - 22x + 4y + 100 = 0`.

**ANSWER:**
```
  MARK SPLIT: centres and radii 1 , position 1 , centre of similitude 1 ,
              distance equation 2 , solving 1 , the two tangents 1

  STEP 1  C1 = (-11, 2) , r1 = sqrt(121 + 4 + 100) = 15
          C2 = ( 11,-2) , r2 = sqrt(121 + 4 - 100) = 5

  STEP 2  d = sqrt(22^2 + 4^2) = sqrt(500) = 10 sqrt(5) ~ 22.36
          r1 + r2 = 20 < d   ->   the circles lie APART, 4 tangents exist.

  STEP 3  The direct tangents pass through the EXTERNAL centre of similitude E,
          which divides C1C2 externally in r1 : r2 = 15 : 5 = 3 : 1 :

             ( 3(11) - 1(-11)     3(-2) - 1(2) )     ( 44    -8 )
          E =( ---------------- , ------------ ) =  ( ---- , -- ) = (22, -4)
             (      3 - 1              3 - 1   )     (  2     2 )

  STEP 4  A line through (22, -4) of slope m :

             y + 4 = m(x - 22)    ->    m x - y - 22m - 4 = 0

  STEP 5  It must touch circle 2, so the distance from C2(11, -2) equals 5:

             | 11m + 2 - 22m - 4 |
             ---------------------  =  5
                 sqrt(m^2 + 1)

             ( 11m + 2 )^2 = 25 (m^2 + 1)

             121m^2 + 44m + 4 = 25m^2 + 25

              96m^2 + 44m - 21 = 0

     Discriminant = 1936 + 8064 = 10000 , sqrt = 100

              -44 +- 100          7                3
        m  =  -----------  =    ----      or     - ---
                 192             24                4

  STEP 6  m = 7/24 :   24(y + 4) = 7(x - 22)   ->   7x - 24y - 250 = 0
          m = -3/4 :    4(y + 4) = -3(x - 22)  ->   3x + 4y - 50 = 0

  STEP 7  CHECK 3x + 4y - 50 = 0
             from C1(-11,2)  : |-33 + 8 - 50|/5   = 75/5   = 15 = r1   OK
             from C2( 11,-2) : | 33 - 8 - 50|/5   = 25/5   =  5 = r2   OK
          CHECK 7x - 24y - 250 = 0
             from C1(-11,2)  : |-77 - 48 - 250|/25 = 375/25 = 15 = r1  OK
             from C2( 11,-2) : | 77 + 48 - 250|/25 = 125/25 =  5 = r2  OK
```
**3x + 4y - 50 = 0   and   7x - 24y - 250 = 0**

---

### Q C4
Find the equations of the **transverse** common tangents to the same two circles,
`x^2 + y^2 + 22x - 4y - 100 = 0` and `x^2 + y^2 - 22x + 4y + 100 = 0`.

**ANSWER:**
```
  STEP 1  As in Q C3:  C1 = (-11, 2), r1 = 15 ; C2 = (11, -2), r2 = 5 ;
          d = 10 sqrt(5) > r1 + r2, so transverse tangents exist.

  STEP 2  They pass through the INTERNAL centre of similitude I, which divides
          C1C2 internally in 15 : 5 = 3 : 1 :

             ( 3(11) + 1(-11)     3(-2) + 1(2) )     ( 22    -4 )
          I =( ---------------- , ------------ )  =  ( ---- , -- ) = (11/2, -1)
             (      3 + 1              3 + 1   )     (  4     4 )

  STEP 3  A line through (11/2, -1) with slope m :

             y + 1 = m( x - 11/2 )    ->    m x - y - (11/2)m - 1 = 0

  STEP 4  Distance from C2(11, -2) must equal r2 = 5 :

             | 11m + 2 - (11/2)m - 1 |         | (11/2)m + 1 |
             -------------------------  = 5 ->  --------------- = 5
                    sqrt(m^2 + 1)                sqrt(m^2 + 1)

             (121/4)m^2 + 11m + 1 = 25m^2 + 25

     multiply by 4:

             121m^2 + 44m + 4 = 100m^2 + 100

              21m^2 + 44m - 96 = 0

     Discriminant = 1936 + 8064 = 10000 , sqrt = 100

              -44 +- 100          4                24
        m  =  -----------  =     ---     or      - ----
                  42              3                 7

  STEP 5  m = 4/3   :   3(y + 1) = 4(x - 11/2)     ->   4x - 3y - 25 = 0
          m = -24/7 :   7(y + 1) = -24(x - 11/2)   ->   24x + 7y - 125 = 0

  STEP 6  CHECK 4x - 3y - 25 = 0
             from C1(-11,2)  : |-44 - 6 - 25|/5   = 15 = r1        OK
             from C2( 11,-2) : | 44 + 6 - 25|/5   =  5 = r2        OK
          CHECK 24x + 7y - 125 = 0
             from C1(-11,2)  : |-264 + 14 - 125|/25 = 15 = r1      OK
             from C2( 11,-2) : | 264 - 14 - 125|/25 =  5 = r2      OK

  BONUS: length of a direct tangent   = sqrt(500 - (15-5)^2) = 20
         length of a transverse tangent = sqrt(500 - (15+5)^2) = 10
```
**4x - 3y - 25 = 0   and   24x + 7y - 125 = 0**

---

### Q C5
Find all the common tangents to `x^2 + y^2 = 1` and `x^2 + y^2 - 8x + 7 = 0`.

**ANSWER:**
```
  STEP 1  C1 = (0, 0) , r1 = 1
          C2 = (4, 0) , r2 = sqrt(16 - 7) = 3
          d  = 4  =  r1 + r2      ->   THEY TOUCH EXTERNALLY
          So there are exactly 3 common tangents.

  STEP 2  THE TANGENT AT THE POINT OF CONTACT is the radical axis:

          (x^2 + y^2 - 1) - (x^2 + y^2 - 8x + 7) = 0

                 8x - 8 = 0      ->      x = 1

          (Point of contact (1, 0): on circle 1 since 1 = 1,
           on circle 2 since 1 - 8 + 7 = 0.)

  STEP 3  THE TWO DIRECT TANGENTS pass through the external centre of
          similitude E, dividing C1C2 externally in 1 : 3 :

             ( 1(4) - 3(0)     1(0) - 3(0) )     (  4     )
          E =( ------------ ,  ----------- )  =  ( ---- , 0 ) = (-2, 0)
             (    1 - 3            1 - 3   )     ( -2     )

  STEP 4  Line through (-2, 0):   y = m(x + 2)   ->   m x - y + 2m = 0

          Distance from C1(0, 0) must equal r1 = 1 :

                 | 2m |
              ------------- = 1     ->     4m^2 = m^2 + 1
              sqrt(m^2+1)

                 3m^2 = 1      ->     m = +- 1/sqrt(3)

  STEP 5  m =  1/sqrt3 :   sqrt3 y = x + 2   ->   x - sqrt(3) y + 2 = 0
          m = -1/sqrt3 :   sqrt3 y = -(x+2)  ->   x + sqrt(3) y + 2 = 0

  STEP 6  CHECK x - sqrt(3) y + 2 = 0 :
             from C1(0,0): |2| / sqrt(1 + 3) = 2/2 = 1 = r1        OK
             from C2(4,0): |4 + 2| / 2 = 3 = r2                    OK
```
**The three common tangents are  x = 1 ,  x - sqrt(3) y + 2 = 0 ,
x + sqrt(3) y + 2 = 0**

> Remember to test the **vertical** line separately. The slope form
> `y - y0 = m(x - x0)` can never produce a vertical tangent, so if you expect
> three tangents and your quadratic only gives two, the missing one is vertical.

---

### Q C6
Find the radical centre of `x^2 + y^2 + 4x - 7 = 0`, `2x^2 + 2y^2 + 3x + 5y - 9 = 0`
and `x^2 + y^2 + y = 0`, and hence find the circle that cuts all three orthogonally.

**ANSWER:**
```
  MARK SPLIT: divide by 2 (1) , two radical axes (2) , solve (1) ,
              tangent length (1) , circle (1) , check (1)

  STEP 1  Make all three start with x^2 + y^2.
          Divide the second by 2:  x^2 + y^2 + (3/2)x + (5/2)y - 9/2 = 0

  STEP 2  S1 - S2 = 0 :   (5/2)x - (5/2)y - 5/2 = 0   ->   x - y - 1 = 0   ...(I)
          S1 - S3 = 0 :   4x - y - 7 = 0                                   ...(II)

  STEP 3  (II) - (I) :   3x - 6 = 0   ->   x = 2 ;  from (I)  y = 1

          RADICAL CENTRE  R = (2, 1)

  STEP 4  The required circle has CENTRE R and RADIUS = the tangent length
          from R (which is the same to all three circles):

          S1 at (2,1) = 4 + 1 + 8 - 7 = 6
          S2 at (2,1) = 4 + 1 + 3 + 5/2 - 9/2 = 6
          S3 at (2,1) = 4 + 1 + 1 = 6                 all equal - as expected

          radius = sqrt(6)

  STEP 5  CIRCLE:  (x - 2)^2 + (y - 1)^2 = 6

                   x^2 - 4x + 4 + y^2 - 2y + 1 = 6

                   x^2 + y^2 - 4x - 2y - 1 = 0
```
**Radical centre (2, 1); orthogonal circle x^2 + y^2 - 4x - 2y - 1 = 0**
```
  CHECK (our circle has g = -2 , f = -1 , c = -1):

     vs S1 (g'=2, f'=0, c'=-7)     : 2(-2)(2) + 2(-1)(0) = -8
                                     c + c' = -1 - 7 = -8              OK
     vs S3 (g'=0, f'=1/2, c'=0)    : 2(-2)(0) + 2(-1)(1/2) = -1
                                     c + c' = -1 + 0 = -1              OK
     vs S2 (g'=3/4, f'=5/4, c'=-9/2): 2(-2)(3/4) + 2(-1)(5/4) = -11/2
                                     c + c' = -1 - 9/2 = -11/2         OK
```

---

### Q C7  (the "theory" long answer — be ready for it)
(a) Define the angle between two intersecting circles and derive
`cos(theta) = (d^2 - r1^2 - r2^2) / (2 r1 r2)`.
(b) Hence derive the condition for two circles to cut orthogonally.
(c) Define the radical axis and derive its equation, and prove that it is
perpendicular to the line joining the centres.

**ANSWER:**
```
  (a)  DEFINITION.  If two circles intersect at P, the angle between them is
       the angle between the TANGENTS to the two circles drawn at P.

                        P
                       / \
                     /     \
               r1  /         \  r2
                 /             \
               C1 ------------- C2
                       d

       The tangent to circle 1 at P is perpendicular to C1P, and the tangent to
       circle 2 at P is perpendicular to C2P. Rotating both tangents through
       90 degrees turns them into the two radii and does not change the angle
       between them.

       In triangle C1 P C2 the sides are r1, r2 and d. Applying the cosine rule
       and measuring theta as the angle between the circles:

                 d^2 - r1^2 - r2^2
       cos(theta) = ------------------
                       2 r1 r2

       In the coefficients, with d^2 = (g1-g2)^2 + (f1-f2)^2 ,
       r1^2 = g1^2+f1^2-c1 and r2^2 = g2^2+f2^2-c2 :

       d^2 - r1^2 - r2^2 = c1 + c2 - 2 g1 g2 - 2 f1 f2

                     c1 + c2 - 2 g1 g2 - 2 f1 f2
       cos(theta) = ---------------------------------
                     2 sqrt(g1^2+f1^2-c1) sqrt(g2^2+f2^2-c2)

  (b)  ORTHOGONAL means theta = 90 degrees, so cos(theta) = 0, so the numerator
       is zero:

                 c1 + c2 - 2 g1 g2 - 2 f1 f2 = 0

                 2 g1 g2 + 2 f1 f2 = c1 + c2

       Geometrically the triangle C1 P C2 is right-angled at P, so by Pythagoras

                 d^2 = r1^2 + r2^2

  (c)  DEFINITION. The radical axis of two circles is the locus of a point from
       which the LENGTHS OF THE TANGENTS to the two circles are equal.

       Let P(x1, y1) be such a point.

           sqrt(S1 at P) = sqrt(S2 at P)

           x1^2+y1^2+2g1x1+2f1y1+c1 = x1^2+y1^2+2g2x1+2f2y1+c2

       The x1^2 and y1^2 cancel, giving

           2(g1 - g2)x1 + 2(f1 - f2)y1 + (c1 - c2) = 0

       so the locus is the straight line

           S1 - S2 = 0 ,  i.e.  2(g1-g2)x + 2(f1-f2)y + (c1-c2) = 0

       PERPENDICULARITY:

           slope of the radical axis      m1 = -(g1 - g2)/(f1 - f2)
           slope of C1(-g1,-f1) C2(-g2,-f2)  m2 =  (f1 - f2)/(g1 - g2)

           m1 m2 = -1

       Hence the radical axis is perpendicular to the line of centres.
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Chance of appearing |
|------|---------------|---------|---------------------|
| 1 | Show two circles are orthogonal / find k for orthogonality | A | very high |
| 2 | Find the radical axis or the common chord (S1 - S2 = 0) | A | very high |
| 3 | Find the angle between two circles | A | high |
| 4 | Position of two circles / number of common tangents | A | high |
| 5 | **Circle orthogonal to three given circles** | **C** | **very high** |
| 6 | Length of the common chord | B | high |
| 7 | Radical centre of three circles | B | high |
| 8 | **Circle through the intersection of two circles + one extra condition** | **C** | **very high** |
| 9 | **Equations of the direct / transverse common tangents** | **C** | **high** |
| 10 | Show two circles touch; point of contact and common tangent | B | medium-high |
| 11 | Lengths of the direct and transverse common tangents | B | medium |
| 12 | Circle through the intersection of a circle and a line (S + kL = 0) | B | medium |
| 13 | Circle whose diameter is the common chord | B | medium |
| 14 | Prove the radical axis is perpendicular to the line of centres | B | medium |
| 15 | Centres of similitude | A | low-medium |
| 16 | Derive the angle / orthogonality / radical axis formulas | C | low-medium |

```
  THE SAFE PLAN FOR THIS CHAPTER

     Learn ONLY these three and you already score about 6 marks in Section A:

        S1 - S2 = 0
        2 g1 g2 + 2 f1 f2 = c1 + c2
        the 4/3/2/1/0 table

     Add the two 7-mark workhorses:

        circle orthogonal to three circles   (radical centre method)
        circle through the intersection      (S1 + k S2 = 0)

     That is roughly 13 marks for two evenings of work. Nothing else in
     Maths IIB has that rate of return.
```
