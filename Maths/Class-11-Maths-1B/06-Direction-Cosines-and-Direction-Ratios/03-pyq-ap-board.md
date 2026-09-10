# Direction Cosines and Direction Ratios — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IB · **Chapter 6 — Direction Cosines and Direction Ratios**

> **About the year tags:** BIEAP recycles the same questions across many sessions, often
> with only the numbers changed. So the questions below are grouped by **"how often they
> appear"** rather than tagged to one exact year. Before your exam, cross-check with the
> official question papers at **bie.ap.gov.in**.

---

## HONEST NOTE — READ THIS BEFORE YOU PLAN YOUR REVISION

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   DIRECTION COSINES AND DIRECTION RATIOS IS MAINLY A              |
  |   SECTION A  (2 mark) CHAPTER, AND FAIRLY OFTEN A                 |
  |   SECTION B  (4 mark) CHAPTER.                                    |
  |                                                                   |
  |   In the BIEAP Maths IB paper you should expect:                  |
  |                                                                   |
  |      Section A  (2 marks)  ->  ONE question nearly every year,    |
  |                                sometimes two                      |
  |      Section B  (4 marks)  ->  appears in many years, not all     |
  |      Section C  (7 marks)  ->  essentially NEVER as a standalone  |
  |                                question                           |
  |                                                                   |
  |   Realistic haul: 2 to 6 marks.                                   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**Why you should still learn it properly:**

- The 2-mark question is almost **guaranteed** and takes about 60 seconds ("find the
  direction cosines", "show these two lines are perpendicular"). That is the best
  marks-per-minute rate in the whole paper, tied with Chapter 5 and Chapter 7.
- Section B in Maths IB asks you to answer **any 5 of 7**. This chapter's 4-marker (angle
  between two lines, or a line perpendicular to two lines) is one of the shortest 4-mark
  questions BIEAP sets. It is a good one to bank early in the exam.
- The Section C long answers in IB come from **Locus, The Straight Line, Pair of Straight
  Lines, Limits and Continuity, Differentiation, and Applications of Derivatives**. Spend
  your long hours there. Spend two short evenings here and collect the free marks.

The **Section C questions in this file are revision-grade combined questions.** They are
**not** claimed to be past 7-mark board questions — they are built by stitching together
the 2-mark and 4-mark parts that BIEAP does ask, so you get one place to practise the
whole chapter end to end. That is an honest description of what they are.

**Where this chapter appears in the Maths IB paper:**

```
  +--------------------------------------------------------------------+
  |  MATHS IB   -   75 marks                                           |
  |                                                                    |
  |  Section A   VSAQ   10 questions  x 2 marks   answer ALL     = 20   |
  |  Section B   SAQ     7 questions  x 4 marks   answer any 5   = 20   |
  |  Section C   LAQ     7 questions  x 7 marks   answer any 5   = 35   |
  |                                                                    |
  |  Pass mark = 26                                                    |
  +--------------------------------------------------------------------+

  This chapter:
     Section A  (2 marks each, answer ALL 10)   ->  usually one of Q6 - Q10
     Section B  (4 marks each, answer any 5)    ->  often Q15 - Q17
     Section C  (7 marks each, answer any 5)    ->  essentially never
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: Converting direction ratios to direction cosines

### Q A1
Find the direction cosines of the line whose direction ratios are `(1, 1, 2)`.

**ANSWER:**
```
  r = sqrt( 1^2 + 1^2 + 2^2 ) = sqrt(1 + 1 + 4) = sqrt6

  d.c.'s = ( 1/sqrt6 , 1/sqrt6 , 2/sqrt6 )

  CHECK:  1/6 + 1/6 + 4/6 = 6/6 = 1        correct
```
**`(1/sqrt6, 1/sqrt6, 2/sqrt6)`** — or all three with the opposite sign.

---

### Q A2
Find the direction cosines of the line whose direction ratios are `(2, -3, 6)`.

**ANSWER:**
```
  r = sqrt( 4 + 9 + 36 ) = sqrt49 = 7

  d.c.'s = ( 2/7 , -3/7 , 6/7 )

  CHECK:  4/49 + 9/49 + 36/49 = 49/49 = 1        correct
```
**`(2/7, -3/7, 6/7)`**

---

### Q A3
Find the direction cosines of the line with direction ratios `(-4, 12, -3)`.

**ANSWER:**
```
  r = sqrt( 16 + 144 + 9 ) = sqrt169 = 13

  d.c.'s = ( -4/13 , 12/13 , -3/13 )

  CHECK:  (16 + 144 + 9)/169 = 169/169 = 1        correct
```
**`(-4/13, 12/13, -3/13)`**

---

### Q A4
Find the direction cosines of the line with direction ratios `(1/2, 1/3, 1/6)`.

**ANSWER:**
```
  First clear the fractions - multiply all three by 6 (this is always legal
  for direction RATIOS):

      (1/2, 1/3, 1/6) x 6  =  (3, 2, 1)

  r = sqrt(9 + 4 + 1) = sqrt14

  d.c.'s = ( 3/sqrt14 , 2/sqrt14 , 1/sqrt14 )

  CHECK:  (9 + 4 + 1)/14 = 1        correct
```
**`(3/sqrt14, 2/sqrt14, 1/sqrt14)`**

---

## Topic: Angles with the axes

### Q A5
A line makes angles `90, 60, 30` degrees with the positive x, y, z axes. Find its
direction cosines.

**ANSWER:**
```
  l = cos 90 = 0
  m = cos 60 = 1/2
  n = cos 30 = sqrt3 / 2

  CHECK:  0 + 1/4 + 3/4 = 1        correct
```
**`(0, 1/2, sqrt3/2)`**

---

### Q A6
A line makes angles `45` degrees and `60` degrees with the positive x and y axes. Find the
angle it makes with the positive z-axis.

**ANSWER:**
```
  l = cos 45 = 1/sqrt2      m = cos 60 = 1/2

  l^2 + m^2 + n^2 = 1

      1/2  +  1/4  +  n^2 = 1

                     n^2 = 1 - 3/4 = 1/4

                     n   = +1/2  or  -1/2

  gamma = 60 degrees   or   120 degrees

  CHECK (with n = 1/2):  1/2 + 1/4 + 1/4 = 1        correct
```
**`gamma = 60` degrees or `120` degrees.**

---

### Q A7
If `(1/2, 1/sqrt2, k)` are the direction cosines of a line, find `k`.

**ANSWER:**
```
  1/4  +  1/2  +  k^2 = 1

              k^2 = 1 - 3/4 = 1/4

              k   = +/- 1/2

  CHECK:  1/4 + 1/2 + 1/4 = 1        correct
```
**`k = 1/2` or `k = -1/2`.**

---

### Q A8
Find the direction cosines of a line which is equally inclined to the three coordinate
axes.

**ANSWER:**
```
  Equal angles -> l = m = n = k

      3 k^2 = 1   ->   k^2 = 1/3   ->   k = +/- 1/sqrt3

  d.c.'s = ( 1/sqrt3 , 1/sqrt3 , 1/sqrt3 )   or the all-negative set

  CHECK:  1/3 + 1/3 + 1/3 = 1        correct

  The common angle is  cos^-1 (1/sqrt3) , about 54 deg 44 min.
```
**`(1/sqrt3, 1/sqrt3, 1/sqrt3)`**

---

### Q A9
Write the direction cosines of the y-axis and of the z-axis.

**ANSWER:**
```
  y-axis: makes 90, 0, 90 with x, y, z   ->   ( 0, 1, 0 )
  z-axis: makes 90, 90, 0 with x, y, z   ->   ( 0, 0, 1 )

  CHECK:  0+1+0 = 1  and  0+0+1 = 1        correct
```
**y-axis `(0, 1, 0)`; z-axis `(0, 0, 1)`.**

---

## Topic: The line joining two points

### Q A10
Find the direction ratios and direction cosines of the line joining `A(4, 3, -5)` and
`B(-2, 1, -8)`.

**ANSWER:**
```
  d.r.'s = ( -2 - 4 , 1 - 3 , -8 - (-5) ) = ( -6 , -2 , -3 )

  AB = sqrt(36 + 4 + 9) = sqrt49 = 7

  d.c.'s = ( -6/7 , -2/7 , -3/7 )

  CHECK:  (36 + 4 + 9)/49 = 1        correct
```
**d.r.'s `(-6, -2, -3)`; d.c.'s `(-6/7, -2/7, -3/7)`.**

---

### Q A11
Find the direction cosines of the line joining `A(2, -1, 3)` and `B(5, 3, 3)`.

**ANSWER:**
```
  d.r.'s = ( 5-2 , 3-(-1) , 3-3 ) = ( 3 , 4 , 0 )

  AB = sqrt(9 + 16 + 0) = 5

  d.c.'s = ( 3/5 , 4/5 , 0 )

  CHECK:  9/25 + 16/25 + 0 = 25/25 = 1        correct
```
**`(3/5, 4/5, 0)`** — note `n = 0`, so this line is parallel to the xy-plane.

---

### Q A12
Find the direction cosines of the line joining `A(2, 3, 5)` and `B(-1, 3, 2)`.

**ANSWER:**
```
  d.r.'s = ( -1-2 , 3-3 , 2-5 ) = ( -3 , 0 , -3 )

  Simplify by dividing by -3:   ( 1 , 0 , 1 )

  r = sqrt(1 + 0 + 1) = sqrt2

  d.c.'s = ( 1/sqrt2 , 0 , 1/sqrt2 )

  CHECK:  1/2 + 0 + 1/2 = 1        correct
```
**`(1/sqrt2, 0, 1/sqrt2)`** (or the negative set).

---

### Q A13
Find the direction cosines of the line joining the origin to the point `P(2, 3, 6)`.

**ANSWER:**
```
  d.r.'s = ( 2, 3, 6 )        OP = sqrt(4 + 9 + 36) = 7

  d.c.'s = ( 2/7 , 3/7 , 6/7 )

  CHECK:  49/49 = 1        correct
```
**`(2/7, 3/7, 6/7)`**

---

## Topic: Perpendicular and parallel

### Q A14
Show that the lines whose direction ratios are `(1, -2, 1)` and `(4, 3, 2)` are
perpendicular.

**ANSWER:**
```
  a1a2 + b1b2 + c1c2 = (1)(4) + (-2)(3) + (1)(2)
                     = 4 - 6 + 2
                     = 0

  Since the sum is zero, the lines are perpendicular.        PROVED
```

---

### Q A15
Find `k` if the lines with direction ratios `(k, 2, 3)` and `(2, -3, 4)` are perpendicular.

**ANSWER:**
```
  (k)(2) + (2)(-3) + (3)(4) = 0

           2k - 6 + 12 = 0

                2k + 6 = 0

                     k = -3

  CHECK:  (-3)(2) + (2)(-3) + (3)(4) = -6 - 6 + 12 = 0        correct
```
**`k = -3`**

---

### Q A16
Find `p` and `q` if the lines with direction ratios `(2, p, 3)` and `(4, -6, q)` are
parallel.

**ANSWER:**
```
  Parallel  ->   2/4 = p/(-6) = 3/q

  From 2/4 = 1/2, the second set is 2 times the first:

       p x 2 = -6   ->   p = -3
       3 x 2 =  q   ->   q =  6

  CHECK:  (2, -3, 3) x 2 = (4, -6, 6)        correct
```
**`p = -3`, `q = 6`.**

---

### Q A17
Show that the line joining `A(1, 2, 3)` and `B(3, 1, 4)` is perpendicular to the line
joining `C(2, 0, 1)` and `D(3, 2, 1)`.

**ANSWER:**
```
  d.r.'s of AB = (3-1, 1-2, 4-3) = ( 2, -1, 1 )
  d.r.'s of CD = (3-2, 2-0, 1-1) = ( 1,  2, 0 )

  Dot: (2)(1) + (-1)(2) + (1)(0) = 2 - 2 + 0 = 0

  Therefore AB is perpendicular to CD.        PROVED
```

---

## Topic: Angle between two lines

### Q A18
Find the angle between the lines with direction ratios `(1, 2, 2)` and `(2, 2, 1)`.

**ANSWER:**
```
  numerator = (1)(2) + (2)(2) + (2)(1) = 2 + 4 + 2 = 8

  lengths   = sqrt(1+4+4) = 3   and   sqrt(4+4+1) = 3

  cos theta = 8 / (3 x 3) = 8/9

  theta = cos^-1 ( 8/9 )       about 27 degrees 16 minutes
```
**`theta = cos^-1(8/9)`**

---

### Q A19
Find the angle between the lines with direction ratios `(4, -3, 5)` and `(3, 4, 5)`.

**ANSWER:**
```
  numerator = 12 - 12 + 25 = 25

  lengths   = sqrt(16+9+25) = sqrt50 = 5 sqrt2
              sqrt(9+16+25) = sqrt50 = 5 sqrt2

  cos theta = 25 / (5sqrt2 x 5sqrt2) = 25/50 = 1/2

  theta = 60 degrees
```
**`60` degrees.**

---

## Topic: Perpendicular to two lines · collinearity · projections

### Q A20
Find the direction ratios of the line perpendicular to both the lines whose direction
ratios are `(1, 2, 3)` and `(2, 3, 4)`.

**ANSWER:**
```
  Cross-multiply:

     a = b1c2 - b2c1 = (2)(4) - (3)(3) = 8 - 9  = -1
     b = c1a2 - c2a1 = (3)(2) - (4)(1) = 6 - 4  =  2
     c = a1b2 - a2b1 = (1)(3) - (2)(2) = 3 - 4  = -1

  CHECK:  (1,2,3).(-1,2,-1) = -1 + 4 - 3 = 0        correct
          (2,3,4).(-1,2,-1) = -2 + 6 - 4 = 0        correct
```
**`(-1, 2, -1)`** (or `(1, -2, 1)`).

---

### Q A21
Show that the points `A(2, 3, -4)`, `B(1, -2, 3)` and `C(3, 8, -11)` are collinear.

**ANSWER:**
```
  d.r.'s of AB = (1-2, -2-3, 3+4)    = ( -1, -5,  7 )
  d.r.'s of BC = (3-1, 8+2, -11-3)   = (  2, 10, -14 )

  Ratios:   2/(-1) = -2 ,   10/(-5) = -2 ,   (-14)/7 = -2

  All three ratios are equal, so BC is parallel to AB.
  They share the point B, so all three points lie on one line.

  Therefore A, B, C are collinear.        PROVED
```

---

### Q A22
Find `k` so that `A(1, 2, 3)`, `B(4, 0, 4)` and `C(-2, k, 2)` are collinear.

**ANSWER:**
```
  d.r.'s of AB = ( 3, -2, 1 )
  d.r.'s of BC = ( -6, k, -2 )

  For collinearity:   -6/3 = k/(-2) = -2/1

  First and third both give -2, so   k/(-2) = -2   ->   k = 4

  CHECK:  BC = (-6, 4, -2) = -2 (3, -2, 1)        correct
```
**`k = 4`**

---

### Q A23
The projections of a line segment on the x, y and z axes are `12, 4, 3`. Find the length of
the segment and its direction cosines.

**ANSWER:**
```
  Length L = sqrt(144 + 16 + 9) = sqrt169 = 13

  d.c.'s   = ( 12/13 , 4/13 , 3/13 )

  CHECK:  (144 + 16 + 9)/169 = 1        correct
```
**Length `13`; d.c.'s `(12/13, 4/13, 3/13)`.**

---

### Q A24
Find the projection of the segment joining `A(1, 2, 3)` and `B(4, -1, 2)` on the line whose
direction ratios are `(2, 3, -6)`.

**ANSWER:**
```
  STEP 1   d.c.'s of the line:  r = sqrt(4 + 9 + 36) = 7
                                (l,m,n) = ( 2/7 , 3/7 , -6/7 )
           CHECK: 49/49 = 1        correct

  STEP 2   Differences for AB: ( 4-1 , -1-2 , 2-3 ) = ( 3 , -3 , -1 )

  STEP 3   Projection = (2/7)(3) + (3/7)(-3) + (-6/7)(-1)
                      = (6 - 9 + 6)/7
                      = 3/7
```
**Projection `= 3/7`.**

---

### Q A25
If a line makes angles `alpha, beta, gamma` with the coordinate axes, find the value of
`sin^2 alpha + sin^2 beta + sin^2 gamma`.

**ANSWER:**
```
  sin^2 a + sin^2 b + sin^2 c
     = (1 - cos^2 a) + (1 - cos^2 b) + (1 - cos^2 c)
     = 3 - (cos^2 a + cos^2 b + cos^2 c)
     = 3 - 1
     = 2
```
**`= 2`**

---

### Q A26
If a line makes angles `alpha, beta, gamma` with the coordinate axes, prove that
`cos 2alpha + cos 2beta + cos 2gamma = -1`.

**ANSWER:**
```
  cos 2A = 2 cos^2 A - 1 , so

  cos2a + cos2b + cos2c = 2(cos^2 a + cos^2 b + cos^2 c) - 3
                        = 2(1) - 3
                        = -1                                PROVED
```

---

### Q A27
Find the angle made by the line with direction ratios `(1, 2, 2)` with the `xy`-plane.

**ANSWER:**
```
  r = 3 ,  d.c.'s = ( 1/3 , 2/3 , 2/3 )        CHECK: 9/9 = 1   correct

  For a LINE and a PLANE we use SINE, and for the xy-plane we use n:

      sin phi = |n| = 2/3

      phi = sin^-1 ( 2/3 )        about 41 degrees 49 minutes
```
**`phi = sin^-1(2/3)`**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 of the 7 in the paper. This chapter's 4-marker
# is one of the shortest on the sheet - bank it early.
# ===============================================================

### Q B1
Find the angle between the lines whose direction ratios are `(1, 2, 1)` and `(2, 3, -1)`.
Give the answer in both `cos` and `sin` form and verify them against each other.

**ANSWER:**
```
  STEP 1   The dot part
              (1)(2) + (2)(3) + (1)(-1) = 2 + 6 - 1 = 7

  STEP 2   The two lengths
              sqrt(1 + 4 + 1) = sqrt6
              sqrt(4 + 9 + 1) = sqrt14

  STEP 3   cos theta = 7 / (sqrt6 . sqrt14)
                     = 7 / sqrt84
                     = 7 / (2 sqrt21)
                     = 7 sqrt21 / 42
                     = sqrt21 / 6

  STEP 4   The sine form. The three "cross" terms:

              a1b2 - a2b1 = (1)(3) - (2)(2)  = 3 - 4  = -1
              b1c2 - b2c1 = (2)(-1) - (3)(1) = -2 - 3 = -5
              c1a2 - c2a1 = (1)(2) - (-1)(1) = 2 + 1  =  3

              sqrt(1 + 25 + 9) = sqrt35

              sin theta = sqrt35 / sqrt84 = sqrt(5/12) = sqrt15 / 6

  STEP 5   VERIFY
              sin^2 + cos^2 = 15/36 + 21/36 = 36/36 = 1        correct
```
**`theta = cos^-1(sqrt21 / 6) = sin^-1(sqrt15 / 6)`, about 40 degrees 12 minutes.**

---

### Q B2
Show that the lines whose direction ratios are `(1, 1, 2)` and `(sqrt3 - 1, -sqrt3 - 1, 4)`
are inclined at an angle of `60` degrees.

**ANSWER:**
```
  STEP 1   Numerator
              (1)(sqrt3 - 1) + (1)(-sqrt3 - 1) + (2)(4)
                 = sqrt3 - 1 - sqrt3 - 1 + 8
                 = 6                      (the sqrt3 terms cancel)

  STEP 2   First length:  sqrt(1 + 1 + 4) = sqrt6

  STEP 3   Second length:
              (sqrt3 - 1)^2  = 3 - 2 sqrt3 + 1 = 4 - 2 sqrt3
              (-sqrt3 - 1)^2 = 3 + 2 sqrt3 + 1 = 4 + 2 sqrt3
              4^2 = 16
              sum = 4 - 2sqrt3 + 4 + 2sqrt3 + 16 = 24
              length = sqrt24 = 2 sqrt6

  STEP 4   cos theta = 6 / (sqrt6 . 2 sqrt6) = 6 / 12 = 1/2

           theta = 60 degrees                                 PROVED
```

---

### Q B3
Find the direction cosines of the line perpendicular to both the lines whose direction
ratios are `(1, -1, 1)` and `(2, 1, -1)`.

**ANSWER:**
```
  STEP 1   Cross-multiplication layout:

                  -1       1       1      -1
                    \     / \     / \     /
                     \   /   \   /   \   /
                      \ /     \ /     \ /
                      / \     / \     / \
                     /   \   /   \   /   \
                    1      -1       2       1

              a = (-1)(-1) - (1)(1)  = 1 - 1 = 0
              b = (1)(2)   - (-1)(1) = 2 + 1 = 3
              c = (1)(1)   - (-1)(2) = 1 + 2 = 3

              d.r.'s = ( 0 , 3 , 3 )   ->   simplify to  ( 0 , 1 , 1 )

  STEP 2   CHECK both dot products:
              (1, -1,  1) . (0, 1, 1) = 0 - 1 + 1 = 0        correct
              (2,  1, -1) . (0, 1, 1) = 0 + 1 - 1 = 0        correct

  STEP 3   d.c.'s:  r = sqrt(0 + 1 + 1) = sqrt2

              ( 0 , 1/sqrt2 , 1/sqrt2 )

           CHECK:  0 + 1/2 + 1/2 = 1        correct
```
**d.r.'s `(0, 1, 1)`; d.c.'s `(0, 1/sqrt2, 1/sqrt2)`.**

---

### Q B4
`A(1, 0, 2)`, `B(2, 2, 5)`, `C(0, 1, 1)` and `D(2, 4, 7)` are four points. Find the
direction cosines of the line perpendicular to both `AB` and `CD`.

**ANSWER:**
```
  STEP 1   d.r.'s of AB = (2-1, 2-0, 5-2) = ( 1, 2, 3 )
           d.r.'s of CD = (2-0, 4-1, 7-1) = ( 2, 3, 6 )

  STEP 2   Cross-multiply:
              a = (2)(6) - (3)(3) = 12 - 9 =  3
              b = (3)(2) - (6)(1) =  6 - 6 =  0
              c = (1)(3) - (2)(2) =  3 - 4 = -1

              d.r.'s = ( 3 , 0 , -1 )

  STEP 3   CHECK:
              (1,2,3).(3,0,-1) = 3 + 0 - 3 = 0        correct
              (2,3,6).(3,0,-1) = 6 + 0 - 6 = 0        correct

  STEP 4   r = sqrt(9 + 0 + 1) = sqrt10

              d.c.'s = ( 3/sqrt10 , 0 , -1/sqrt10 )

           CHECK:  9/10 + 0 + 1/10 = 1        correct
```
**d.c.'s `(3/sqrt10, 0, -1/sqrt10)`.**

---

### Q B5
Find the angle between the two lines whose direction cosines satisfy `l + m + n = 0` and
`l^2 + m^2 - n^2 = 0`.

**ANSWER:**
```
  STEP 1   From the linear equation:   n = -(l + m)

  STEP 2   Substitute into the quadratic:

              l^2 + m^2 - (l + m)^2 = 0
              l^2 + m^2 - l^2 - 2lm - m^2 = 0
              -2 l m = 0

  STEP 3   So  l = 0  or  m = 0.

           CASE 1   l = 0  ->  n = -m   ->   ( 0 , 1 , -1 )
           CASE 2   m = 0  ->  n = -l   ->   ( 1 , 0 , -1 )

  STEP 4   Angle between ( 0, 1, -1 ) and ( 1, 0, -1 ):

              numerator = 0 + 0 + 1 = 1
              lengths   = sqrt2  and  sqrt2

              cos theta = 1 / 2

              theta = 60 degrees

  The direction cosines themselves:
              ( 0 , 1/sqrt2 , -1/sqrt2 )  and  ( 1/sqrt2 , 0 , -1/sqrt2 )

  CHECK:  0 + 1/2 + 1/2 = 1   and   1/2 + 0 + 1/2 = 1        correct
```
**`60` degrees.**

---

### Q B6
Show that the lines whose direction cosines satisfy `2l + 2m - n = 0` and
`mn + nl + lm = 0` are perpendicular to each other.

**ANSWER:**
```
  STEP 1   From the first equation:   n = 2l + 2m

  STEP 2   Substitute:

              m(2l + 2m) + (2l + 2m)l + lm = 0
              2lm + 2m^2 + 2l^2 + 2lm + lm = 0
              2 l^2 + 5 l m + 2 m^2 = 0

  STEP 3   Factorise:   ( 2l + m )( l + 2m ) = 0

  STEP 4   CASE 1   m = -2l  ->  n = 2l - 4l = -2l   ->  (  1 , -2 , -2 )
           CASE 2   l = -2m  ->  n = -4m + 2m = -2m  ->  ( -2 ,  1 , -2 )

  STEP 5   Test:  (1)(-2) + (-2)(1) + (-2)(-2) = -2 - 2 + 4 = 0

           Therefore the lines are perpendicular.             PROVED

  Their direction cosines (each length = 3):
              ( 1/3 , -2/3 , -2/3 )   and   ( -2/3 , 1/3 , -2/3 )

  CHECK:  (1 + 4 + 4)/9 = 1  for both                        correct
```

---

### Q B7
`A(1, 8, 4)`, `B(0, -11, 4)` and `C(2, -3, 1)` are three points. Find the foot `D` of the
perpendicular drawn from `A` to the line `BC`.

**ANSWER:**
```
                       A(1, 8, 4)
                          |
                          |
       B(0,-11,4) --------D-------- C(2,-3,1)

  STEP 1   d.r.'s of BC = ( 2-0 , -3+11 , 1-4 ) = ( 2 , 8 , -3 )

  STEP 2   D lies on BC, so write
              D = ( 2t , -11 + 8t , 4 - 3t )

  STEP 3   d.r.'s of AD = ( 2t - 1 , 8t - 19 , -3t )

  STEP 4   AD perpendicular to BC  ->  dot = 0:

              2(2t - 1) + 8(8t - 19) + (-3)(-3t) = 0
              4t - 2 + 64t - 152 + 9t = 0
              77 t = 154
              t = 2

  STEP 5   D = ( 4 , -11 + 16 , 4 - 6 ) = ( 4 , 5 , -2 )

  CHECK    d.r.'s of AD = (3, -3, -6)
           (3)(2) + (-3)(8) + (-6)(-3) = 6 - 24 + 18 = 0      correct
```
**`D(4, 5, -2)`**

---

### Q B8
Show that the points `A(2, 3, -4)`, `B(1, -2, 3)` and `C(3, 8, -11)` are collinear, and
find the direction cosines of the line on which they lie.

**ANSWER:**
```
  STEP 1   d.r.'s of AB = ( -1, -5,  7 )
           d.r.'s of BC = (  2, 10, -14 ) = -2 ( -1, -5, 7 )

           Proportional, and they share B, so A, B, C are collinear.

  STEP 2   AB = sqrt(1 + 25 + 49) = sqrt75 = 5 sqrt3

  STEP 3   d.c.'s = ( -1/(5 sqrt3) , -5/(5 sqrt3) , 7/(5 sqrt3) )
                  = ( -1/(5 sqrt3) , -1/sqrt3 , 7/(5 sqrt3) )

  CHECK    (1 + 25 + 49) / 75 = 75/75 = 1        correct
```
**Collinear; d.c.'s `(-1/(5sqrt3), -5/(5sqrt3), 7/(5sqrt3))`.**

---

### Q B9
Find the direction cosines of the bisectors of the angles between two lines whose direction
cosines are `(1/3, 2/3, 2/3)` and `(2/3, -2/3, 1/3)`.

**ANSWER:**
```
  STEP 0   Confirm both are genuine direction cosines:
              1/9 + 4/9 + 4/9 = 1        correct
              4/9 + 4/9 + 1/9 = 1        correct

  STEP 1   INTERNAL bisector: ADD

              ( 1/3 + 2/3 , 2/3 - 2/3 , 2/3 + 1/3 ) = ( 1 , 0 , 1 )

              r = sqrt2

              d.c.'s = ( 1/sqrt2 , 0 , 1/sqrt2 )
              CHECK:  1/2 + 0 + 1/2 = 1        correct

  STEP 2   EXTERNAL bisector: SUBTRACT

              ( 1/3 - 2/3 , 2/3 + 2/3 , 2/3 - 1/3 ) = ( -1/3 , 4/3 , 1/3 )

              x 3   ->   ( -1 , 4 , 1 )

              r = sqrt(1 + 16 + 1) = sqrt18 = 3 sqrt2

              d.c.'s = ( -1/(3sqrt2) , 4/(3sqrt2) , 1/(3sqrt2) )
              CHECK:  (1 + 16 + 1)/18 = 1        correct

  STEP 3   FINAL CHECK - the bisectors must be perpendicular:

              (1, 0, 1) . (-1, 4, 1) = -1 + 0 + 1 = 0        correct
```
**Internal `(1/sqrt2, 0, 1/sqrt2)`; external `(-1/(3sqrt2), 4/(3sqrt2), 1/(3sqrt2))`.**

---

### Q B10
Find the projection of the segment joining `A(3, 4, 5)` and `B(4, 6, 3)` on the line joining
`C(-1, 2, 4)` and `D(1, 0, 5)`.

**ANSWER:**
```
  STEP 1   d.r.'s of CD = ( 1+1 , 0-2 , 5-4 ) = ( 2 , -2 , 1 )

  STEP 2   r = sqrt(4 + 4 + 1) = 3
           d.c.'s of CD = ( 2/3 , -2/3 , 1/3 )
           CHECK:  9/9 = 1        correct

  STEP 3   Differences for AB = ( 4-3 , 6-4 , 3-5 ) = ( 1 , 2 , -2 )

  STEP 4   Projection = (2/3)(1) + (-2/3)(2) + (1/3)(-2)
                      = (2 - 4 - 2)/3
                      = -4/3
```
**Projection `= -4/3`; its length is `4/3`.** The minus sign means the shadow runs opposite
to the direction `C -> D`.

---

### Q B11
Show that the line joining `A(1, 2, 3)` and `B(4, 5, 7)` is parallel to the line joining
`C(-4, 3, -6)` and `D(2, 9, 2)`.

**ANSWER:**
```
  d.r.'s of AB = ( 4-1 , 5-2 , 7-3 )   = ( 3 , 3 , 4 )
  d.r.'s of CD = ( 2+4 , 9-3 , 2+6 )   = ( 6 , 6 , 8 )

  6/3 = 2 ,   6/3 = 2 ,   8/4 = 2

  All three ratios are equal, so the direction ratios are proportional
  and the lines are parallel.                                PROVED

  (They are different lines, not the same one: substituting A into the
   direction of CD does not reproduce C, and AB has d.c.'s
   ( 3/sqrt34 , 3/sqrt34 , 4/sqrt34 ) with CHECK (9+9+16)/34 = 1.)
```

---

### Q B12
Find the angle `ABC` where `A(1, 2, 3)`, `B(2, 3, 1)` and `C(3, 1, 2)`.

**ANSWER:**
```
  The angle at B is between the rays BA and BC, so use those directions.

  d.r.'s of BA = ( 1-2 , 2-3 , 3-1 ) = ( -1 , -1 ,  2 )
  d.r.'s of BC = ( 3-2 , 1-3 , 2-1 ) = (  1 , -2 ,  1 )

  numerator = (-1)(1) + (-1)(-2) + (2)(1) = -1 + 2 + 2 = 3

  lengths   = sqrt(1 + 1 + 4) = sqrt6
              sqrt(1 + 4 + 1) = sqrt6

  cos B = 3 / (sqrt6 . sqrt6) = 3/6 = 1/2

  B = 60 degrees
```
**`60` degrees.** (In fact `AB = BC = CA = sqrt6`, so `ABC` is equilateral — every angle
is 60 degrees.)

---

### Q B13
Find the angle between any two diagonals of a cube.

**ANSWER:**
```
  Place the cube with one vertex at the origin and edges of length a
  along the axes. The eight vertices are then

     O(0,0,0)  A(a,0,0)  B(a,a,0)  C(0,a,0)
     D(0,0,a)  E(a,0,a)  F(a,a,a)  G(0,a,a)

  The four diagonals are  OF, AG, BD, CE.  Their direction ratios:

     OF : ( a, a, a )        ->  (  1,  1,  1 )
     AG : ( -a, a, a )       ->  ( -1,  1,  1 )
     BD : ( -a, -a, a )      ->  ( -1, -1,  1 )
     CE : ( a, -a, a )       ->  (  1, -1,  1 )

  Take OF and AG:

     numerator = (1)(-1) + (1)(1) + (1)(1) = -1 + 1 + 1 = 1
     lengths   = sqrt3  and  sqrt3

     cos theta = 1 / 3

     theta = cos^-1 (1/3)        about 70 degrees 32 minutes

  Any other pair gives the same value (only the signs of the numerator
  terms move around, and the result is always +/- 1/3).
```
**`cos^-1(1/3)`**

---

### Q B14
If a line makes angles `alpha, beta, gamma` with the positive coordinate axes, prove that
`cos^2 alpha + cos^2 beta + cos^2 gamma = 1`, and hence find
`sin^2 alpha + sin^2 beta + sin^2 gamma`.

**ANSWER:**
```
  PROOF

  Let the line pass through the origin O and through P(x, y, z), with OP = r.

                          z
                          |
                          |             P(x, y, z)
                          |            /|
                          |     r    /  |
                          |        /    |
                          |      /      |  z
                          |  gamma      |
                          |/            |
                          O-------------+--------------- y
                         /|            /
                        / |           /
                       /  +----------+
                      x     (x, y, 0)

  Drop a perpendicular from P to the x-axis, with foot A(x, 0, 0).
  In the right triangle OAP the angle at O is alpha and the angle at A
  is 90 degrees, so

        cos alpha = OA / OP = x / r      ->    x = r cos alpha

  Similarly    y = r cos beta      and     z = r cos gamma .

  By the distance formula,   x^2 + y^2 + z^2 = r^2 , so

        r^2 ( cos^2 a + cos^2 b + cos^2 c ) = r^2

  Since r is not 0, divide by r^2 :

        cos^2 alpha + cos^2 beta + cos^2 gamma = 1              PROVED

  HENCE

        sin^2 a + sin^2 b + sin^2 c
             = (1 - cos^2 a) + (1 - cos^2 b) + (1 - cos^2 c)
             = 3 - 1
             = 2
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# HONEST WARNING: BIEAP does NOT normally set a 7-mark question on
# this chapter alone. The questions below are REVISION-GRADE
# COMBINED questions built from the 2-mark and 4-mark parts that
# ARE asked, so you can practise the whole chapter in one go.
# Use them for practice, not as a prediction of the paper.
# ===============================================================

### Q C1 — The law of the chapter, its consequences, and an application

**(a)** Prove that `l^2 + m^2 + n^2 = 1` for any line, where `l, m, n` are its direction
cosines. **(3 marks)**
**(b)** Deduce that `sin^2 alpha + sin^2 beta + sin^2 gamma = 2` and
`cos 2alpha + cos 2beta + cos 2gamma = -1`. **(2 marks)**
**(c)** A line makes an angle of `45` degrees with the positive x-axis and `60` degrees
with the positive y-axis. Find the angle it makes with the positive z-axis and write down
its direction cosines. **(2 marks)**

**ANSWER:**
```
  (a)  [3 marks]   Use the full proof written out in Q B14 above:
       diagram (1 mark), x = lr / y = mr / z = nr (1 mark),
       substitute into x^2+y^2+z^2 = r^2 and divide (1 mark).

  (b)  [2 marks]

       sin^2 a + sin^2 b + sin^2 c
           = 3 - (cos^2 a + cos^2 b + cos^2 c)
           = 3 - 1  =  2                                        [1 mark]

       cos 2a + cos 2b + cos 2c
           = (2cos^2 a - 1) + (2cos^2 b - 1) + (2cos^2 c - 1)
           = 2(1) - 3  =  -1                                    [1 mark]

  (c)  [2 marks]

       l = cos 45 = 1/sqrt2        m = cos 60 = 1/2

       1/2 + 1/4 + n^2 = 1
                   n^2 = 1/4
                   n   = +1/2  or  -1/2

       gamma = 60 degrees  or  120 degrees

       d.c.'s = ( 1/sqrt2 , 1/2 , 1/2 )   or   ( 1/sqrt2 , 1/2 , -1/2 )

       CHECK:  1/2 + 1/4 + 1/4 = 1        correct
```

---

### Q C2 — Complete analysis of a triangle in space

The points are `A(1, 2, 3)`, `B(2, 3, 1)` and `C(3, 1, 2)`.

**(a)** Find the direction ratios and direction cosines of the sides `AB`, `BC` and `CA`.
**(b)** Find the three angles of the triangle.
**(c)** Find the direction ratios of a line perpendicular to the plane of the triangle,
and verify your answer.

**ANSWER:**
```
  (a)  [3 marks]

       d.r.'s of AB = ( 2-1 , 3-2 , 1-3 ) = (  1 ,  1 , -2 )
       d.r.'s of BC = ( 3-2 , 1-3 , 2-1 ) = (  1 , -2 ,  1 )
       d.r.'s of CA = ( 1-3 , 2-1 , 3-2 ) = ( -2 ,  1 ,  1 )

       Each length is sqrt(1 + 1 + 4) = sqrt6 , so

         d.c.'s of AB = (  1/sqrt6 ,  1/sqrt6 , -2/sqrt6 )
         d.c.'s of BC = (  1/sqrt6 , -2/sqrt6 ,  1/sqrt6 )
         d.c.'s of CA = ( -2/sqrt6 ,  1/sqrt6 ,  1/sqrt6 )

       CHECK for each:  (1 + 1 + 4)/6 = 1        correct

       Since AB = BC = CA = sqrt6, the triangle is EQUILATERAL.

  (b)  [2 marks]

       Angle at B is between the rays BA and BC.
         d.r.'s of BA = ( -1, -1, 2 ) ,   d.r.'s of BC = ( 1, -2, 1 )
         numerator = -1 + 2 + 2 = 3
         cos B = 3 / (sqrt6 . sqrt6) = 1/2   ->  B = 60 degrees

       Angle at A is between the rays AB and AC.
         d.r.'s of AB = ( 1, 1, -2 ) ,   d.r.'s of AC = ( 2, -1, -1 )
         numerator = 2 - 1 + 2 = 3
         cos A = 3/6 = 1/2   ->  A = 60 degrees

       Therefore C = 180 - 60 - 60 = 60 degrees.

       All three angles are 60 degrees, consistent with an equilateral
       triangle.                                   [good verification]

  (c)  [2 marks]

       A line perpendicular to the plane is perpendicular to both AB and BC.
       Cross-multiply ( 1, 1, -2 ) and ( 1, -2, 1 ):

           a = (1)(1)  - (-2)(-2) = 1 - 4  = -3
           b = (-2)(1) - (1)(1)   = -2 - 1 = -3
           c = (1)(-2) - (1)(1)   = -2 - 1 = -3

           d.r.'s = ( -3, -3, -3 )   ->   simplify to  ( 1, 1, 1 )

       VERIFY:
           ( 1,  1, -2 ) . ( 1, 1, 1 ) = 1 + 1 - 2 = 0        correct
           ( 1, -2,  1 ) . ( 1, 1, 1 ) = 1 - 2 + 1 = 0        correct
           ( -2, 1,  1 ) . ( 1, 1, 1 ) = -2 + 1 + 1 = 0       correct

       d.c.'s of that perpendicular = ( 1/sqrt3 , 1/sqrt3 , 1/sqrt3 )
       CHECK:  3/3 = 1        correct
```

---

### Q C3 — The two-condition problems, both types

**(a)** Find the direction cosines of the two lines whose direction cosines satisfy
`l + m + n = 0` and `l^2 + m^2 - n^2 = 0`, and find the angle between them. **(4 marks)**
**(b)** Show that the lines whose direction cosines satisfy `2l + 2m - n = 0` and
`mn + nl + lm = 0` are perpendicular. **(3 marks)**

**ANSWER:**
```
  (a)  [4 marks]

       n = -(l + m)                                            [1 mark]

       l^2 + m^2 - (l+m)^2 = -2lm = 0   ->   l = 0  or  m = 0  [1 mark]

       l = 0 -> ( 0, 1, -1 ) ;   m = 0 -> ( 1, 0, -1 )         [1 mark]

       cos theta = (0 + 0 + 1) / (sqrt2 . sqrt2) = 1/2
       theta = 60 degrees                                      [1 mark]

       d.c.'s:  ( 0 , 1/sqrt2 , -1/sqrt2 )  and  ( 1/sqrt2 , 0 , -1/sqrt2 )
       CHECK:   1/2 + 1/2 = 1  for both                        correct

  (b)  [3 marks]

       n = 2l + 2m                                             [1 mark]

       m(2l+2m) + (2l+2m)l + lm = 2l^2 + 5lm + 2m^2 = 0
       ( 2l + m )( l + 2m ) = 0                                [1 mark]

       m = -2l -> n = -2l -> (  1, -2, -2 )
       l = -2m -> n = -2m -> ( -2,  1, -2 )

       (1)(-2) + (-2)(1) + (-2)(-2) = -2 - 2 + 4 = 0
       Perpendicular.                                          [1 mark]

       d.c.'s: ( 1/3, -2/3, -2/3 ) and ( -2/3, 1/3, -2/3 )
       CHECK:  (1+4+4)/9 = 1  for both                         correct
```

---

### Q C4 — Perpendicularity, cross products and projections together

`A(1, 0, 2)`, `B(2, 2, 5)`, `C(0, 1, 1)`, `D(2, 4, 7)`.

**(a)** Find the direction ratios and direction cosines of `AB` and `CD`.
**(b)** Find the angle between `AB` and `CD`.
**(c)** Find the direction cosines of a line perpendicular to both, and verify.
**(d)** Find the projection of `AB` on `CD`.

**ANSWER:**
```
  (a)  [2 marks]

       d.r.'s of AB = ( 1, 2, 3 ) ,  AB = sqrt(1+4+9) = sqrt14
       d.c.'s of AB = ( 1/sqrt14 , 2/sqrt14 , 3/sqrt14 )
       CHECK: 14/14 = 1        correct

       d.r.'s of CD = ( 2, 3, 6 ) ,  CD = sqrt(4+9+36) = 7
       d.c.'s of CD = ( 2/7 , 3/7 , 6/7 )
       CHECK: 49/49 = 1        correct

  (b)  [2 marks]

       numerator = (1)(2) + (2)(3) + (3)(6) = 2 + 6 + 18 = 26

       cos theta = 26 / ( sqrt14 . 7 ) = 26 / (7 sqrt14)

       Rationalise: 26 sqrt14 / 98 = 13 sqrt14 / 49

       theta = cos^-1 ( 13 sqrt14 / 49 )

       Numerically:  sqrt14 = 3.7417 , so cos theta = 26/26.192 = 0.99268
       theta is about 6 degrees 57 minutes - the two lines are nearly parallel.

  (c)  [2 marks]

       Cross-multiply ( 1, 2, 3 ) and ( 2, 3, 6 ):

           a = (2)(6) - (3)(3) = 3
           b = (3)(2) - (6)(1) = 0
           c = (1)(3) - (2)(2) = -1

           d.r.'s = ( 3 , 0 , -1 )

       VERIFY:  (1,2,3).(3,0,-1) = 3 + 0 - 3 = 0        correct
                (2,3,6).(3,0,-1) = 6 + 0 - 6 = 0        correct

       r = sqrt10 ,  d.c.'s = ( 3/sqrt10 , 0 , -1/sqrt10 )
       CHECK: (9 + 0 + 1)/10 = 1        correct

  (d)  [1 mark]

       Projection of AB on CD = l dx + m dy + n dz using the d.c.'s of CD:

           (2/7)(1) + (3/7)(2) + (6/7)(3) = (2 + 6 + 18)/7 = 26/7

       CROSS-CHECK: projection should also equal AB cos theta
           = sqrt14 x 26/(7 sqrt14) = 26/7        correct
```

---

# WHICH QUESTIONS REPEAT MOST

```
  +------+--------------------------------------+---------+-------------+
  | RANK |  TYPE OF QUESTION                    | SECTION |  CHANCE     |
  +------+--------------------------------------+---------+-------------+
  |   1  |  Convert d.r.'s to d.c.'s            |    A    |  very high  |
  |   2  |  d.r.'s / d.c.'s of the line joining |    A    |  very high  |
  |      |  two given points                    |         |             |
  |   3  |  Angle between two lines from d.r.'s |  A or B |  very high  |
  |   4  |  Show two lines are perpendicular /  |    A    |  high       |
  |      |  find k so that they are             |         |             |
  |   5  |  Missing angle or missing d.c. using |    A    |  high       |
  |      |  l^2 + m^2 + n^2 = 1                 |         |             |
  |   6  |  Show three points are collinear     |  A or B |  high       |
  |   7  |  Line perpendicular to two lines     |    B    |  high       |
  |      |  (cross-multiplication)              |         |             |
  |   8  |  Prove l^2+m^2+n^2 = 1 or            |  A or B |  medium     |
  |      |  sin^2+sin^2+sin^2 = 2               |         |             |
  |   9  |  Two conditions on l, m, n           |    B    |  medium     |
  |      |  (l+m+n = 0 type)                    |         |             |
  |  10  |  Projection of a segment on a line   |  A or B |  medium     |
  |  11  |  Foot of the perpendicular from a    |    B    |  medium     |
  |      |  point to a line                     |         |             |
  |  12  |  Find p, q so that lines are         |    A    |  low        |
  |      |  parallel                            |         |             |
  |  13  |  Angle between the diagonals of a    |    B    |  low        |
  |      |  cube                                |         |             |
  |  14  |  Direction cosines of the angle      |    B    |  low        |
  |      |  bisectors                           |         |             |
  |  15  |  Angle between a line and a          |    A    |  low        |
  |      |  coordinate plane                    |         |             |
  +------+--------------------------------------+---------+-------------+
```

## The exam-morning summary

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   If you learn ONLY ranks 1 to 5, you will almost certainly       |
  |   answer the Section A question from this chapter.                |
  |                                                                   |
  |   Add ranks 6 to 9 and you can also attempt the Section B         |
  |   question in the years it appears.                               |
  |                                                                   |
  |   That is 2 to 6 marks for two evenings of work - and it also     |
  |   hands you most of Chapter 7 for free, because every "normal     |
  |   to the plane" question there is a direction-ratios question.    |
  |                                                                   |
  |   Then go and spend your real study hours on Differentiation,     |
  |   Applications of Derivatives, The Straight Line and Pair of      |
  |   Straight Lines. That is where the 35 Section C marks live.      |
  |                                                                   |
  +-------------------------------------------------------------------+
```
