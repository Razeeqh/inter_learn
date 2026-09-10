# The Plane — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IB · **Chapter 7 — The Plane**

> **About the year tags:** BIEAP recycles the same questions across many sessions, often
> with only the numbers changed. So the questions below are grouped by **"how often they
> appear"** rather than tagged to one exact year. Before your exam, cross-check with the
> official question papers at **bie.ap.gov.in**.

---

## HONEST NOTE — READ THIS BEFORE YOU PLAN YOUR REVISION

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   THE PLANE IS MAINLY A  SECTION A  (2 mark) CHAPTER,             |
  |   OCCASIONALLY A  SECTION B  (4 mark) CHAPTER.                    |
  |                                                                   |
  |   In the BIEAP Maths IB paper you should expect:                  |
  |                                                                   |
  |      Section A  (2 marks)  ->  ONE question almost every year,    |
  |                                sometimes two                      |
  |      Section B  (4 marks)  ->  appears some years, not all        |
  |      Section C  (7 marks)  ->  RARE as a standalone question      |
  |                                                                   |
  |   Realistic haul: 2 to 6 marks.                                   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**Why you should still learn it properly:**

- The 2-mark question is almost **guaranteed** and takes about 90 seconds. That is the
  best marks-per-minute rate anywhere in Maths IB.
- The formulas are few and short. Even a student who is scared of Maths can finish this
  chapter in two evenings.
- The Section C long answers in IB come from Locus, Straight Line, Pair of Straight Lines,
  Limits, Differentiation and Applications of Derivatives. **Spend your long hours there.**
  Spend two short evenings here and collect the free marks.

The Section C questions in this file are therefore written as **revision-grade combined
questions**. They are not claimed to be past 7-mark board questions — they are built by
stitching together the 2-mark and 4-mark parts that BIEAP does ask, so that you get one
place to practise the whole chapter end to end. That is an honest description of what
they are.

**Where this chapter appears in the Maths IB paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually one of Q6 - Q10
  Section B  (4 marks each, answer any 5)    ->  occasionally Q15 - Q17
  Section C  (7 marks each, answer any 5)    ->  rarely on its own
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: The normal to a plane

### Q A1
Find the direction ratios of the normal to the plane `2x + 3y - z + 5 = 0`.

**ANSWER:**
```
  In  a x + b y + c z + d = 0 ,  the normal has direction ratios (a, b, c).

  Here  a = 2 ,  b = 3 ,  c = -1
```
**Direction ratios of the normal = `(2, 3, -1)`**

---

### Q A2
Find the direction cosines of the normal to the plane `x + 2y + 2z - 5 = 0`.

**ANSWER:**
```
  Direction ratios of the normal = (1, 2, 2)

  Length = sqrt(1^2 + 2^2 + 2^2) = sqrt(1 + 4 + 4) = sqrt(9) = 3

  Direction cosines = ( 1/3 , 2/3 , 2/3 )

  CHECK:  (1/9) + (4/9) + (4/9) = 9/9 = 1     correct
```
**`(1/3, 2/3, 2/3)`**

---

### Q A3
Find the direction cosines of the normal to `2x - 3y + 6z - 14 = 0` and the distance of the
plane from the origin.

**ANSWER:**
```
  DRs of normal = (2, -3, 6)     length = sqrt(4 + 9 + 36) = 7

  DCs = ( 2/7 , -3/7 , 6/7 )

  Distance from origin  p = |d| / sqrt(a^2+b^2+c^2) = |-14| / 7 = 2
```
**DCs `(2/7, -3/7, 6/7)`; distance from origin `= 2`**

---

## Topic: Normal form

### Q A4
Reduce `x + 2y - 2z - 9 = 0` to normal form.

**ANSWER:**
```
  STEP 1   x + 2y - 2z = 9            (right side already positive)
  STEP 2   r = sqrt(1 + 4 + 4) = 3
  STEP 3   divide by 3:

            1        2        2
           --- x  + --- y  - --- z  =  3
            3        3        3

  CHECK:  (1/9) + (4/9) + (4/9) = 1     correct ;   p = 3 > 0    correct
```
**Normal form: `(1/3)x + (2/3)y - (2/3)z = 3`, with `p = 3`.**

---

### Q A5
Reduce `2x + 3y - 6z + 14 = 0` to normal form.

**ANSWER:**
```
  STEP 1   2x + 3y - 6z = -14         <-- right side NEGATIVE, so divide by -r
  STEP 2   r = sqrt(4 + 9 + 36) = 7
  STEP 3   divide by -7:

           -2        -3        6            -14
          ---- x  + ---- y  + --- z   =    -----  =  2
            7         7        7             -7

  CHECK:  (4 + 9 + 36)/49 = 1  correct ;   p = 2 > 0    correct
```
**`(-2/7)x + (-3/7)y + (6/7)z = 2`; distance from origin `= 2`.**

---

### Q A6
Find the distance of the plane `3x + 4y - 12z + 26 = 0` from the origin.

**ANSWER:**
```
  p = |d| / sqrt(a^2 + b^2 + c^2)
    = |26| / sqrt(9 + 16 + 144)
    = 26 / sqrt(169)
    = 26 / 13
    = 2
```
**`2` units.**

---

### Q A7
Transform `x + y + z = 1` into normal form.

**ANSWER:**
```
  r = sqrt(1 + 1 + 1) = sqrt(3)

       1          1          1            1
    ------- x + ------- y + ------- z = -------
    sqrt(3)     sqrt(3)     sqrt(3)     sqrt(3)

  So  p = 1/sqrt(3).
```
**`(1/sqrt3)x + (1/sqrt3)y + (1/sqrt3)z = 1/sqrt3`, distance from origin `= 1/sqrt3`.**

---

## Topic: Intercepts

### Q A8
Find the intercepts made by the plane `4x + 3y - 6z = 12` on the coordinate axes.

**ANSWER:**
```
  Put y = 0, z = 0 :  4x = 12  ->  x = 3
  Put x = 0, z = 0 :  3y = 12  ->  y = 4
  Put x = 0, y = 0 : -6z = 12  ->  z = -2

  CHECK:  (3,0,0):  4(3) = 12       correct
          (0,4,0):  3(4) = 12       correct
          (0,0,-2): -6(-2) = 12     correct
```
**Intercepts `3, 4, -2`. (Intercept form: `x/3 + y/4 + z/(-2) = 1`.)**

---

### Q A9
Find the equation of the plane whose intercepts on the axes are `2, 3, 4`.

**ANSWER:**
```
   x     y     z
  --- + --- + --- = 1        multiply throughout by 12
   2     3     4

   6x + 4y + 3z = 12

  CHECK: (2,0,0): 12  correct ;  (0,3,0): 12  correct ;  (0,0,4): 12  correct
```
**`6x + 4y + 3z = 12`**

---

### Q A10
Write `2x + 3y + 4z = 12` in intercept form.

**ANSWER:**
```
  Divide throughout by 12:

      x       y       z
     --- +   --- +   --- = 1        intercepts 6, 4, 3
      6       4       3
```
**`x/6 + y/4 + z/3 = 1`**

---

## Topic: Plane through a point

### Q A11
Find the equation of the plane through `(2, 3, 4)` whose normal has direction ratios
`(1, -2, 3)`.

**ANSWER:**
```
  a x + b y + c z = a x1 + b y1 + c z1

  x - 2y + 3z = 1(2) - 2(3) + 3(4) = 2 - 6 + 12 = 8

  CHECK:  2 - 6 + 12 - 8 = 0     correct
```
**`x - 2y + 3z - 8 = 0`**

---

### Q A12
Find the equation of the plane through `(1, 2, 3)` and parallel to `2x + 3y - 4z = 1`.

**ANSWER:**
```
  Parallel  ->  keep the same left side, change only the constant.

  2x + 3y - 4z = 2(1) + 3(2) - 4(3) = 2 + 6 - 12 = -4

  CHECK:  2 + 6 - 12 + 4 = 0     correct
```
**`2x + 3y - 4z + 4 = 0`**

---

### Q A13
Find the equation of the plane passing through `(1, 2, 3)` and parallel to the XOY plane.

**ANSWER:**
```
  XOY plane is  z = 0 .   A parallel plane is  z = k .
  It passes through a point whose z-coordinate is 3, so k = 3.
```
**`z = 3`, i.e. `z - 3 = 0`.**

---

### Q A14
Write the equations of the three coordinate planes.

**ANSWER:**
```
  XOY plane :  z = 0
  YOZ plane :  x = 0
  ZOX plane :  y = 0
```

---

### Q A15
Find the equation of the plane through the origin with normal direction ratios `(1, 2, 3)`.

**ANSWER:**
```
  x + 2y + 3z = 1(0) + 2(0) + 3(0) = 0
```
**`x + 2y + 3z = 0`** (a plane through the origin always has `d = 0`).

---

## Topic: Distance

### Q A16
Find the distance from `(2, 5, -3)` to the plane `6x - 3y + 2z - 4 = 0`.

**ANSWER:**
```
  Numerator   = | 6(2) - 3(5) + 2(-3) - 4 |
              = | 12 - 15 - 6 - 4 |
              = | -13 | = 13

  Denominator = sqrt(36 + 9 + 4) = sqrt(49) = 7

  D = 13/7
```
**`13/7` units.**

---

### Q A17
Find the perpendicular distance from `(1, 1, 1)` to the plane `x + y + z = 6`.

**ANSWER:**
```
  Write the plane as  x + y + z - 6 = 0

  D = |1 + 1 + 1 - 6| / sqrt(1 + 1 + 1)
    = 3 / sqrt(3)
    = sqrt(3)
```
**`sqrt(3)` units.**

---

### Q A18
Find the distance between the parallel planes `2x - 2y + z + 3 = 0` and
`4x - 4y + 2z + 5 = 0`.

**ANSWER:**
```
  Make the coefficients IDENTICAL - divide the second by 2:

        2x - 2y + z + 5/2 = 0

  d1 = 3 ,  d2 = 5/2 ,  sqrt(4 + 4 + 1) = 3

  D = |3 - 5/2| / 3 = (1/2)/3 = 1/6
```
**`1/6` unit.**

---

## Topic: Angles, parallel and perpendicular

### Q A19
Find the angle between the planes `2x - y + z = 6` and `x + y + 2z = 7`.

**ANSWER:**
```
  n1 = (2, -1, 1) ,  |n1| = sqrt(6)
  n2 = (1,  1, 2) ,  |n2| = sqrt(6)

  n1 . n2 = 2 - 1 + 2 = 3

  cos(theta) = 3 / (sqrt6 . sqrt6) = 3/6 = 1/2
```
**`theta = 60` degrees.**

---

### Q A20
Find the angle between the planes `x + 2y + 2z - 5 = 0` and `3x + 4y - 12z + 7 = 0`.

**ANSWER:**
```
  |n1| = sqrt(1 + 4 + 4) = 3         |n2| = sqrt(9 + 16 + 144) = 13

  n1 . n2 = 1(3) + 2(4) + 2(-12) = 3 + 8 - 24 = -13

  cos(theta) = |-13| / (3 x 13) = 1/3
```
**`theta = cos^-1(1/3)`**

---

### Q A21
Find `k` so that the planes `3x - 2y + 2z = 5` and `x + y + kz = 3` are perpendicular.

**ANSWER:**
```
  Perpendicular  =>  a1a2 + b1b2 + c1c2 = 0

     3(1) + (-2)(1) + 2(k) = 0
     3 - 2 + 2k = 0
     2k = -1
     k = -1/2

  CHECK:  3 - 2 + 2(-1/2) = 3 - 2 - 1 = 0     correct
```
**`k = -1/2`**

---

### Q A22
Find `k` so that the planes `2x - 3y + kz = 5` and `4x - 6y + 10z = 7` are parallel.

**ANSWER:**
```
  Parallel  =>  2/4 = -3/-6 = k/10

     2/4 = 1/2 ,   -3/-6 = 1/2 ,  so  k/10 = 1/2  ->  k = 5

  CHECK:  (2, -3, 5) and (4, -6, 10) - the second is exactly twice the first.  correct
```
**`k = 5`**

---

### Q A23
Show that the planes `2x - y + z = 5` and `x + y - z = 3` are perpendicular.

**ANSWER:**
```
  a1a2 + b1b2 + c1c2 = 2(1) + (-1)(1) + 1(-1) = 2 - 1 - 1 = 0
```
**Dot product of the normals is 0, so the planes are perpendicular.**

---

## Topic: Points and planes

### Q A24
Show that the points `(1, 2, 3)` and `(4, -1, 2)` lie on opposite sides of the plane
`x - y + z = 3`.

**ANSWER:**
```
  Write as  x - y + z - 3 = 0

  At (1, 2, 3) :  1 - 2 + 3 - 3 = -1      (negative)
  At (4,-1, 2) :  4 + 1 + 2 - 3 =  4      (positive)
```
**Opposite signs, so the points lie on opposite sides of the plane.**

---

### Q A25
Find the foot of the perpendicular from the origin to the plane `x + 2y + 2z - 9 = 0`.

**ANSWER:**
```
  Value at origin:  0 + 0 + 0 - 9 = -9
  a^2 + b^2 + c^2 = 1 + 4 + 4 = 9

  k = -(-9)/9 = 1

  Foot = ( 0 + 1(1) , 0 + 2(1) , 0 + 2(1) ) = (1, 2, 2)

  CHECK:  1 + 4 + 4 - 9 = 0     correct
```
**`(1, 2, 2)`**

---

### Q A26
Find the ratio in which the XOY plane divides the segment joining `(1, 2, 3)` and
`(4, 5, -6)`.

**ANSWER:**
```
  XOY plane is  z = 0 , i.e.  0x + 0y + z + 0 = 0

  S1 = 3       S2 = -6

  Ratio = -S1 : S2 = -3 : -6 = 1 : 2      (positive -> INTERNAL)

  CHECK - the dividing point (1:2 from the first to the second):
     z = ( 1(-6) + 2(3) ) / 3 = ( -6 + 6 )/3 = 0     correct, it is on z = 0
```
**`1 : 2` internally.**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Appears in some years. Each of these is a complete method.
# ===============================================================

### Q B1
Find the equation of the plane passing through the points `A(1, 2, 3)`, `B(2, 3, 1)` and
`C(3, 1, 2)`.

**ANSWER:**
```
  v1 = B - A = (1, 1, -2)
  v2 = C - A = (2, -1, -1)

  Normal  n = v1 x v2 :

        |  i    j    k  |
        |  1    1   -2  |
        |  2   -1   -1  |

     i : (1)(-1) - (-2)(-1) = -1 - 2 = -3
     j : -[ (1)(-1) - (-2)(2) ] = -[ -1 + 4 ] = -3
     k : (1)(-1) - (1)(2) = -1 - 2 = -3

     n = (-3, -3, -3)  ->  simplify to (1, 1, 1)

  Plane:  1(x - 1) + 1(y - 2) + 1(z - 3) = 0
          x + y + z = 6

  CHECK  A: 1+2+3 = 6   B: 2+3+1 = 6   C: 3+1+2 = 6      all correct
```
**`x + y + z = 6`**

---

### Q B2
Find the equation of the plane through `(1, 1, 1)`, `(1, -1, 1)` and `(-7, -3, -5)`.

**ANSWER:**
```
  A = (1,1,1) ,  v1 = (0, -2, 0) ,  v2 = (-8, -4, -6)

  n = v1 x v2 :
     i : (-2)(-6) - (0)(-4) = 12 - 0 = 12
     j : -[ (0)(-6) - (0)(-8) ] = -[0 - 0] = 0
     k : (0)(-4) - (-2)(-8) = 0 - 16 = -16

     n = (12, 0, -16)  ->  divide by 4  ->  (3, 0, -4)

  Plane:  3(x - 1) + 0(y - 1) - 4(z - 1) = 0
          3x - 3 - 4z + 4 = 0
          3x - 4z + 1 = 0

  CHECK  (1,1,1):    3 - 4 + 1 = 0        correct
         (1,-1,1):   3 - 4 + 1 = 0        correct
         (-7,-3,-5): -21 + 20 + 1 = 0     correct
```
**`3x - 4z + 1 = 0`** (note: no `y` term, so this plane is parallel to the y-axis).

---

### Q B3
Show that the points `(0, -1, 0)`, `(2, 1, -1)`, `(1, 1, 1)` and `(3, 3, 0)` are coplanar,
and find the plane containing them.

**ANSWER:**
```
  Use the first three to build the plane.

  A = (0, -1, 0) ,   v1 = (2, 2, -1) ,   v2 = (1, 2, 1)

  n = v1 x v2 :
     i : (2)(1) - (-1)(2) = 2 + 2 = 4
     j : -[ (2)(1) - (-1)(1) ] = -[2 + 1] = -3
     k : (2)(2) - (2)(1) = 4 - 2 = 2

     n = (4, -3, 2)

  Plane:  4(x - 0) - 3(y + 1) + 2(z - 0) = 0
          4x - 3y + 2z - 3 = 0

  CHECK all four points:
     (0,-1,0) :   0 + 3 + 0 - 3 = 0      correct
     (2, 1,-1):   8 - 3 - 2 - 3 = 0      correct
     (1, 1, 1):   4 - 3 + 2 - 3 = 0      correct
     (3, 3, 0):  12 - 9 + 0 - 3 = 0      correct   <-- the fourth point too
```
**All four satisfy `4x - 3y + 2z - 3 = 0`, so they are coplanar.**

---

### Q B4
Find the foot of the perpendicular and the image of the point `P(1, 3, 4)` in the plane
`2x - y + z + 3 = 0`.

**ANSWER:**
```
  Value at P :  2(1) - 3 + 4 + 3 = 6
  a^2 + b^2 + c^2 = 4 + 1 + 1 = 6

  k = -6/6 = -1

  FOOT   = ( 1 + 2(-1) , 3 + (-1)(-1) , 4 + 1(-1) ) = (-1, 4, 3)
  IMAGE  = ( 1 + 2(2)(-1) , 3 + 2(-1)(-1) , 4 + 2(1)(-1) ) = (-3, 5, 2)

  CHECK 1  foot lies on the plane:   2(-1) - 4 + 3 + 3 = 0        correct
  CHECK 2  foot is the midpoint of P and the image:
           ( (1-3)/2 , (3+5)/2 , (4+2)/2 ) = (-1, 4, 3)           correct
```
**Foot `(-1, 4, 3)`; image `(-3, 5, 2)`.**

---

### Q B5
Find the foot of the perpendicular from `(3, -2, 1)` to the plane `2x - y + z + 1 = 0`,
and hence the perpendicular distance.

**ANSWER:**
```
  Value at the point:  2(3) - (-2) + 1 + 1 = 6 + 2 + 1 + 1 = 10
  a^2+b^2+c^2 = 4 + 1 + 1 = 6

  k = -10/6 = -5/3

  FOOT = ( 3 + 2(-5/3) , -2 + (-1)(-5/3) , 1 + 1(-5/3) )
       = ( 3 - 10/3 , -2 + 5/3 , 1 - 5/3 )
       = ( -1/3 , -1/3 , -2/3 )

  CHECK:  2(-1/3) - (-1/3) + (-2/3) + 1 = -2/3 + 1/3 - 2/3 + 1 = -1 + 1 = 0   correct

  Distance = |10| / sqrt(6) = 10/sqrt(6)
```
**Foot `(-1/3, -1/3, -2/3)`; distance `10/sqrt(6)`.**

---

### Q B6
Find the equation of the plane through the line of intersection of `x + y + z = 6` and
`2x + 3y + 4z + 5 = 0` and passing through `(1, 1, 1)`.

**ANSWER:**
```
  Family:   (x + y + z - 6) + k(2x + 3y + 4z + 5) = 0

  At (1,1,1):   (1 + 1 + 1 - 6) + k(2 + 3 + 4 + 5) = 0
                -3 + 14k = 0
                k = 3/14

  Multiply the family by 14 after substituting:

     14(x + y + z - 6) + 3(2x + 3y + 4z + 5) = 0
     14x + 14y + 14z - 84 + 6x + 9y + 12z + 15 = 0
     20x + 23y + 26z - 69 = 0

  CHECK (1,1,1):  20 + 23 + 26 - 69 = 0     correct
```
**`20x + 23y + 26z - 69 = 0`**

---

### Q B7
Find the equation of the plane through the intersection of `x + y + z = 1` and
`2x + 3y - z + 4 = 0` which is perpendicular to the plane `x - y + z = 0`.

**ANSWER:**
```
  Family:  (x + y + z - 1) + k(2x + 3y - z + 4) = 0

  Coefficients:   x : 1 + 2k       y : 1 + 3k       z : 1 - k

  Perpendicular to the plane whose normal is (1, -1, 1):

     (1 + 2k)(1) + (1 + 3k)(-1) + (1 - k)(1) = 0
      1 + 2k - 1 - 3k + 1 - k = 0
      1 - 2k = 0
      k = 1/2

  Substitute and multiply by 2:

     2(x + y + z - 1) + (2x + 3y - z + 4) = 0
     2x + 2y + 2z - 2 + 2x + 3y - z + 4 = 0
     4x + 5y + z + 2 = 0

  CHECK perpendicular: (4)(1) + (5)(-1) + (1)(1) = 4 - 5 + 1 = 0    correct
```
**`4x + 5y + z + 2 = 0`**

---

### Q B8
Find the angle between the line `(x+1)/2 = y/3 = (z-3)/6` and the plane
`10x + 2y - 11z = 3`.

**ANSWER:**
```
  Line direction (l, m, n) = (2, 3, 6) ,  length = sqrt(4 + 9 + 36) = 7
  Plane normal  (a, b, c)  = (10, 2, -11) , length = sqrt(100 + 4 + 121) = 15

  a l + b m + c n = 20 + 6 - 66 = -40

  sin(theta) = | -40 | / (7 x 15) = 40/105 = 8/21
```
**`theta = sin^-1(8/21)` (about 22 degrees).**

---

### Q B9
Show that the line `(x-1)/2 = (y-2)/3 = (z-3)/4` lies in the plane `x + 2y - 2z + 1 = 0`.

**ANSWER:**
```
  CONDITION 1  -  the direction must be perpendicular to the normal:

     a l + b m + c n = 1(2) + 2(3) + (-2)(4) = 2 + 6 - 8 = 0     correct

  CONDITION 2  -  a point of the line must satisfy the plane.
     The line passes through (1, 2, 3):

     1 + 2(2) - 2(3) + 1 = 1 + 4 - 6 + 1 = 0                     correct

  Both conditions hold, so the line LIES IN the plane.
```

---

### Q B10
Find the point where the line `(x-2)/3 = (y+1)/4 = (z-2)/2` meets the plane `x - y + z = 6`.

**ANSWER:**
```
  Put each ratio equal to t:
     x = 2 + 3t ,   y = -1 + 4t ,   z = 2 + 2t

  Substitute in the plane:
     (2 + 3t) - (-1 + 4t) + (2 + 2t) = 6
      2 + 3t + 1 - 4t + 2 + 2t = 6
      5 + t = 6
      t = 1

  Point:  x = 5 ,  y = 3 ,  z = 4

  CHECK:  5 - 3 + 4 = 6      correct
```
**`(5, 3, 4)`**

---

### Q B11
Find the equation of the plane through `(1, -1, 2)` and perpendicular to each of the planes
`2x + 3y - 2z = 5` and `x + 2y - 3z = 8`.

**ANSWER:**
```
  The new normal must be perpendicular to both given normals,
  so it is their cross product.

  n = (2, 3, -2) x (1, 2, -3) :
     i : (3)(-3) - (-2)(2) = -9 + 4 = -5
     j : -[ (2)(-3) - (-2)(1) ] = -[ -6 + 2 ] = 4
     k : (2)(2) - (3)(1) = 4 - 3 = 1

     n = (-5, 4, 1)

  Plane:  -5(x - 1) + 4(y + 1) + 1(z - 2) = 0
          -5x + 5 + 4y + 4 + z - 2 = 0
          -5x + 4y + z + 7 = 0
   i.e.    5x - 4y - z - 7 = 0

  CHECK point:   5(1) - 4(-1) - 2 - 7 = 5 + 4 - 2 - 7 = 0      correct
  CHECK perp 1:  5(2) + (-4)(3) + (-1)(-2) = 10 - 12 + 2 = 0   correct
  CHECK perp 2:  5(1) + (-4)(2) + (-1)(-3) = 5 - 8 + 3 = 0     correct
```
**`5x - 4y - z - 7 = 0`**

---

### Q B12
Find the equation of the plane through `A(1, 0, -1)` and `B(3, 2, 2)` and perpendicular to
the plane `x + y - z = 0`.

**ANSWER:**
```
  AB = (2, 2, 3)          given normal m = (1, 1, -1)

  n = AB x m :
     i : (2)(-1) - (3)(1) = -2 - 3 = -5
     j : -[ (2)(-1) - (3)(1) ] = -[ -2 - 3 ] = 5
     k : (2)(1) - (2)(1) = 0

     n = (-5, 5, 0)  ->  divide by -5  ->  (1, -1, 0)

  Plane:  1(x - 1) - 1(y - 0) + 0(z + 1) = 0
          x - y - 1 = 0

  CHECK A: 1 - 0 - 1 = 0     correct
  CHECK B: 3 - 2 - 1 = 0     correct
  CHECK perpendicular: (1)(1) + (-1)(1) + (0)(-1) = 0    correct
```
**`x - y - 1 = 0`**

---

### Q B13
Find the ratio in which the plane `x + y + z = 0` divides the segment joining `A(1, 2, 3)`
and `B(-3, 4, -5)`, and state which side of the plane each point lies on.

**ANSWER:**
```
  S1 (at A) = 1 + 2 + 3 = 6       positive
  S2 (at B) = -3 + 4 - 5 = -4     negative

  Opposite signs  ->  A and B are on OPPOSITE sides of the plane.

  Ratio = -S1 : S2 = -6 : -4 = 3 : 2       (positive -> INTERNAL)

  CHECK by finding the dividing point (3:2 from A to B):
     x = (3(-3) + 2(1))/5 = -7/5
     y = (3(4)  + 2(2))/5 = 16/5
     z = (3(-5) + 2(3))/5 = -9/5

     Substitute:  -7/5 + 16/5 - 9/5 = 0     correct, it is on the plane
```
**`3 : 2` internally; A and B are on opposite sides.**

---

### Q B14
Find the equation of the plane that bisects, at right angles, the segment joining
`A(1, 2, 3)` and `B(3, 2, 1)`.

**ANSWER:**
```
  Midpoint M = ( 2, 2, 2 )
  Normal = AB = (2, 0, -2)  ->  simplify to (1, 0, -1)

  Plane:  1(x - 2) + 0(y - 2) - 1(z - 2) = 0
          x - 2 - z + 2 = 0
          x - z = 0

  CHECK distance to A: |1 - 3|/sqrt(2) = 2/sqrt(2)
        distance to B: |3 - 1|/sqrt(2) = 2/sqrt(2)      equal    correct
```
**`x - z = 0`**

---

### Q B15
Show that the line through `(4, 1, 0)` with direction ratios `(1, 2, 2)` is parallel to the
plane `2x + y - 2z = 5`, and find the distance between them.

**ANSWER:**
```
  a l + b m + c n = 2(1) + 1(2) + (-2)(2) = 2 + 2 - 4 = 0     ->  parallel

  Is the point on the plane?  2(4) + 1 - 0 = 9 , not 5.
  So the line does NOT lie in the plane - it is genuinely parallel to it.

  Distance = distance from (4,1,0) to  2x + y - 2z - 5 = 0
           = |8 + 1 - 0 - 5| / sqrt(4 + 1 + 4)
           = 4/3
```
**Parallel; the distance is `4/3` units.**

---

### Q B16
Reduce `2x + 3y - 6z + 14 = 0` to (i) normal form and (ii) intercept form, and state the
distance from the origin.

**ANSWER:**
```
  (i)  NORMAL FORM
       2x + 3y - 6z = -14 ,  r = sqrt(4 + 9 + 36) = 7
       Right side is negative, so divide by -7:

           (-2/7)x + (-3/7)y + (6/7)z = 2

       DCs of the normal = (-2/7, -3/7, 6/7) ,   p = 2

  (ii) INTERCEPT FORM
       2x + 3y - 6z = -14 ,  divide by -14:

            x         y          z
          ------ + -------- + ------- = 1
           (-7)     (-14/3)     (7/3)

       Intercepts:  a = -7 ,  b = -14/3 ,  c = 7/3

  CHECK the intercepts:
       (-7,0,0):     2(-7) + 14 = 0        correct
       (0,-14/3,0):  3(-14/3) + 14 = 0     correct
       (0,0,7/3):   -6(7/3) + 14 = 0       correct

  CHECK  1/p^2 = 1/a^2 + 1/b^2 + 1/c^2 :
       1/49 + 9/196 + 9/49 = 4/196 + 9/196 + 36/196 = 49/196 = 1/4 = 1/p^2   correct
```
**Distance from the origin `= 2`.**

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)   [ REVISION-GRADE ]
# ===============================================================

> **Be honest with yourself about these.** BIEAP does **not** normally set a standalone
> 7-mark question on The Plane in Maths IB. The questions below are built by combining the
> 2-mark and 4-mark parts that BIEAP *does* ask, so you can practise the whole chapter in
> one go. Treat them as revision drills, not as predicted long answers.
> The mark splits shown are how such a question would be marked if it did appear.

---

### Q C1 — The complete anatomy of one plane
For the plane `2x + 3y + 6z - 12 = 0`, find:
(a) the direction cosines of the normal,
(b) the normal form and the perpendicular distance from the origin,
(c) the intercepts and the intercept form,
(d) the foot of the perpendicular from the origin,
(e) the volume of the tetrahedron it cuts off with the coordinate planes.

**ANSWER:**
```
  (a)  [1 mark]
       DRs of the normal = (2, 3, 6)
       Length = sqrt(4 + 9 + 36) = sqrt(49) = 7
       DCs = ( 2/7 , 3/7 , 6/7 )
       CHECK: (4 + 9 + 36)/49 = 1     correct

  (b)  [2 marks]
       2x + 3y + 6z = 12 ,  right side positive, divide by 7:

            (2/7)x + (3/7)y + (6/7)z = 12/7

       p = 12/7 .
       CHECK with the shortcut: |d|/r = |-12|/7 = 12/7     correct

  (c)  [2 marks]
       Put y = z = 0 :  2x = 12  ->  x-intercept = 6
       Put x = z = 0 :  3y = 12  ->  y-intercept = 4
       Put x = y = 0 :  6z = 12  ->  z-intercept = 2

       Intercept form:   x/6 + y/4 + z/2 = 1

       CHECK: (6,0,0): 12  correct ; (0,4,0): 12  correct ; (0,0,2): 12  correct

       CHECK the linking formula 1/p^2 = 1/a^2 + 1/b^2 + 1/c^2 :
           1/36 + 1/16 + 1/4 = (4 + 9 + 36)/144 = 49/144
           and (7/12)^2 = 49/144                        correct

  (d)  [1 mark]
       Value at the origin = -12 ,  a^2+b^2+c^2 = 49
       k = -(-12)/49 = 12/49
       Foot = ( 2(12/49) , 3(12/49) , 6(12/49) ) = ( 24/49 , 36/49 , 72/49 )

       CHECK: 2(24/49) + 3(36/49) + 6(72/49) = (48 + 108 + 432)/49
                                             = 588/49 = 12        correct

       CHECK the distance:  sqrt( (24/49)^2 + (36/49)^2 + (72/49)^2 )
                          = (1/49) sqrt(576 + 1296 + 5184)
                          = (1/49) sqrt(7056) = 84/49 = 12/7 = p   correct

  (e)  [1 mark]
       Volume = |a b c| / 6 = (6 x 4 x 2)/6 = 8 cubic units
```

---

### Q C2 — A point and a plane, every question at once
For the point `P(1, 3, 4)` and the plane `2x - y + z + 3 = 0`, find:
(a) the perpendicular distance from P to the plane,
(b) the foot of the perpendicular,
(c) the image of P in the plane,
(d) the plane through P parallel to the given plane,
(e) the distance between those two parallel planes, and confirm it agrees with (a).

**ANSWER:**
```
  Value at P = 2(1) - 3 + 4 + 3 = 6           a^2+b^2+c^2 = 4 + 1 + 1 = 6

  (a)  [1 mark]
       D = |6| / sqrt(6) = 6/sqrt(6) = sqrt(6)

  (b)  [2 marks]
       k = -6/6 = -1
       Foot = ( 1 + 2(-1) , 3 + (-1)(-1) , 4 + 1(-1) ) = (-1, 4, 3)
       CHECK on the plane: 2(-1) - 4 + 3 + 3 = 0        correct

  (c)  [2 marks]
       Image = ( 1 + 2(2)(-1) , 3 + 2(-1)(-1) , 4 + 2(1)(-1) ) = (-3, 5, 2)
       CHECK midpoint of P and image = ( -1, 4, 3 ) = the foot     correct

  (d)  [1 mark]
       Same normal, new constant:
       2x - y + z = 2(1) - 3 + 4 = 3      i.e.   2x - y + z - 3 = 0
       CHECK P:  2 - 3 + 4 - 3 = 0        correct

  (e)  [1 mark]
       Both planes now read  2x - y + z + d :   d1 = 3 , d2 = -3
       D = |3 - (-3)| / sqrt(6) = 6/sqrt(6) = sqrt(6)

       This equals the answer in (a), exactly as it must - because P lies on the
       second plane.                                    consistent
```

---

### Q C3 — Three points, then everything about the plane they make
The points are `A(1, 2, 3)`, `B(2, 3, 1)`, `C(3, 1, 2)`.
(a) Find the plane through A, B and C.
(b) Find the perpendicular distance of the origin from it.
(c) Find the foot of the perpendicular from the origin.
(d) Find the angle this plane makes with the XOY plane.
(e) Find the intercepts.

**ANSWER:**
```
  (a)  [3 marks]
       v1 = B - A = (1, 1, -2) ,   v2 = C - A = (2, -1, -1)

       n = v1 x v2 :
          i : (1)(-1) - (-2)(-1) = -1 - 2 = -3
          j : -[ (1)(-1) - (-2)(2) ] = -[ -1 + 4 ] = -3
          k : (1)(-1) - (1)(2) = -3
          n = (-3, -3, -3)  ->  (1, 1, 1)

       Plane:  x + y + z = 6
       CHECK A: 6   B: 6   C: 6      all correct

  (b)  [1 mark]
       p = |-6| / sqrt(3) = 6/sqrt(3) = 2 sqrt(3)

  (c)  [1 mark]
       Value at origin = -6 ,  a^2+b^2+c^2 = 3 ,  k = 6/3 = 2
       Foot = ( 0 + 2 , 0 + 2 , 0 + 2 ) = (2, 2, 2)
       CHECK: 2 + 2 + 2 = 6                       correct
       CHECK distance: sqrt(4+4+4) = sqrt(12) = 2 sqrt(3) = p    correct

  (d)  [1 mark]
       XOY plane is z = 0, normal (0, 0, 1).
       cos(theta) = | (1)(0) + (1)(0) + (1)(1) | / ( sqrt(3) x 1 ) = 1/sqrt(3)
       theta = cos^-1( 1/sqrt(3) )      (about 54 degrees 44 minutes)

  (e)  [1 mark]
       x = 6, y = 6, z = 6.   Intercept form:  x/6 + y/6 + z/6 = 1
```

---

### Q C4 — A line and a plane, the full treatment
For the line `(x-2)/3 = (y+1)/4 = (z-2)/2` and the plane `x - y + z = 6`:
(a) show that the line is not parallel to the plane,
(b) find their point of intersection,
(c) find the angle between them,
(d) find the plane through the point `(2, -1, 2)` that is perpendicular to the given plane
    and contains the given line's direction,
(e) find the distance from `(2, -1, 2)` to the given plane.

**ANSWER:**
```
  Line direction d = (3, 4, 2) ;  plane normal n = (1, -1, 1) ;  point on line (2,-1,2).

  (a)  [1 mark]
       a l + b m + c n = 1(3) + (-1)(4) + 1(2) = 3 - 4 + 2 = 1 , which is NOT 0.
       So the line is not parallel to the plane - it must cut it in exactly one point.

  (b)  [2 marks]
       x = 2 + 3t ,  y = -1 + 4t ,  z = 2 + 2t
       (2 + 3t) - (-1 + 4t) + (2 + 2t) = 6
        5 + t = 6   ->   t = 1
       Point = (5, 3, 4)
       CHECK:  5 - 3 + 4 = 6      correct

  (c)  [2 marks]
       |d| = sqrt(9 + 16 + 4) = sqrt(29)      |n| = sqrt(3)
       sin(theta) = |1| / ( sqrt(29) sqrt(3) ) = 1 / sqrt(87)
       theta = sin^-1( 1/sqrt(87) )     (about 6 degrees 10 minutes)

  (d)  [1 mark]
       The required normal is perpendicular to both d and n, so take d x n :
          i : (4)(1) - (2)(-1) = 4 + 2 = 6
          j : -[ (3)(1) - (2)(1) ] = -[3 - 2] = -1
          k : (3)(-1) - (4)(1) = -3 - 4 = -7
          normal = (6, -1, -7)

       Plane:  6(x - 2) - 1(y + 1) - 7(z - 2) = 0
               6x - 12 - y - 1 - 7z + 14 = 0
               6x - y - 7z + 1 = 0

       CHECK point (2,-1,2): 12 + 1 - 14 + 1 = 0            correct
       CHECK perpendicular to x - y + z = 6:
             (6)(1) + (-1)(-1) + (-7)(1) = 6 + 1 - 7 = 0    correct
       CHECK contains the line's direction:
             (6)(3) + (-1)(4) + (-7)(2) = 18 - 4 - 14 = 0   correct

  (e)  [1 mark]
       Distance = |2 - (-1) + 2 - 6| / sqrt(3) = |-1| / sqrt(3) = 1/sqrt(3)
```

---

### Q C5 — Family of planes, and the two bisector planes
(a) Find the plane through the line of intersection of `x + y + z = 1` and
    `2x + 3y - z + 4 = 0` which is perpendicular to `x - y + z = 0`.
(b) Find both planes bisecting the angles between `2x - y + 2z + 3 = 0` and
    `3x - 2y + 6z + 8 = 0`, say which one contains the origin, and verify that the two
    bisectors are perpendicular.

**ANSWER:**
```
  (a)  [3 marks]
       Family:  (x + y + z - 1) + k(2x + 3y - z + 4) = 0
       Coefficients:  x : 1 + 2k ,  y : 1 + 3k ,  z : 1 - k

       Perpendicular to (1, -1, 1):
          (1 + 2k) - (1 + 3k) + (1 - k) = 0
          1 - 2k = 0  ->  k = 1/2

       2(x + y + z - 1) + (2x + 3y - z + 4) = 0
       4x + 5y + z + 2 = 0

       CHECK:  (4)(1) + (5)(-1) + (1)(1) = 0        correct

  (b)  [4 marks]
       sqrt(4 + 1 + 4) = 3 ,   sqrt(9 + 4 + 36) = 7 ,
       and both constants (3 and 8) are already positive.

            2x - y + 2z + 3          3x - 2y + 6z + 8
           -----------------  =  +-  -----------------
                   3                         7

       7(2x - y + 2z + 3)  = +- 3(3x - 2y + 6z + 8)
       14x - 7y + 14z + 21 = +- (9x - 6y + 18z + 24)

       With + :   5x - y - 4z - 3 = 0        <-- contains the ORIGIN
       With - :   23x - 13y + 32z + 45 = 0

       CHECK the first is a bisector - take (3/5, 0, 0) on it:
          distance to plane 1 = |2(3/5) + 3| / 3 = 4.2/3 = 1.4
          distance to plane 2 = |3(3/5) + 8| / 7 = 9.8/7 = 1.4     equal   correct

       CHECK the bisectors are perpendicular:
          (5)(23) + (-1)(-13) + (-4)(32) = 115 + 13 - 128 = 0      correct
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Chance of appearing |
|---|---|---|---|
| 1 | Reduce a plane to normal form / find its distance from the origin | A | Very high |
| 2 | Direction cosines or ratios of the normal to a given plane | A | Very high |
| 3 | Find the intercepts, or write the plane from given intercepts | A | High |
| 4 | Distance from a point to a plane | A | High |
| 5 | Plane through a point, parallel to a given plane | A | High |
| 6 | Plane through a point with a given normal / perpendicular to a line | A | High |
| 7 | Angle between two planes | A or B | Medium-high |
| 8 | Find k so two planes are perpendicular or parallel | A | Medium-high |
| 9 | Plane parallel to a coordinate plane through a point | A | Medium |
| 10 | Distance between two parallel planes | A | Medium |
| 11 | Plane through three given points | B | Medium |
| 12 | Foot of the perpendicular / image of a point | B | Medium |
| 13 | Plane through the intersection of two planes | B | Medium |
| 14 | Ratio in which a plane divides a segment / which side | A or B | Medium-low |
| 15 | Line and plane: angle, parallel, lies in, intersection | B | Medium-low |
| 16 | Bisector planes | B | Low |

---

# THE EXAM-DAY PLAN FOR THIS CHAPTER

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   1.  In Section A, scan for the words                            |
  |          "normal form" , "distance" , "intercepts" ,              |
  |          "direction cosines" , "parallel to the plane"            |
  |       That question is yours. Do it FIRST - it takes 90 seconds   |
  |       and it settles your nerves.                                 |
  |                                                                   |
  |   2.  Write the plane as  "= 0"  before you touch any formula.    |
  |                                                                   |
  |   3.  Substitute the given point back and show it gives 0.        |
  |       One extra line, and it protects the whole answer.           |
  |                                                                   |
  |   4.  If a 4-mark question from this chapter appears (three       |
  |       points, foot/image, or P1 + kP2), take it - it is far       |
  |       shorter than the trigonometry or derivative alternatives.   |
  |                                                                   |
  |   5.  Do NOT spend long-answer study time here. Two evenings,     |
  |       then move to Differentiation and Applications of            |
  |       Derivatives, where the 7-mark questions actually live.      |
  |                                                                   |
  +-------------------------------------------------------------------+
```
