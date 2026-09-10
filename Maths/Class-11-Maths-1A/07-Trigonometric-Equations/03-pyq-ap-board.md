# Trigonometric Equations — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IA · **Chapter 7 — Trigonometric Equations**

> **About the year tags:** BIEAP recycles the same questions across many
> sessions, so everything below is grouped by **"how often it appears"**
> rather than tagged to one exact year. Before your exam, cross-check with
> the official question papers at **bie.ap.gov.in**. Do not trust any book
> that puts a precise year on these — including this one.

---

## WHERE THIS CHAPTER SITS IN THE MATHS IA PAPER

```
  MATHS IA - 75 marks

  Section A   VSAQ   10 questions x 2 marks   answer ALL        = 20
  Section B   SAQ     7 questions x 4 marks   answer any 5      = 20
  Section C   LAQ     7 questions x 7 marks   answer any 5      = 35
  Pass mark = 26

  +----------------------------------------------------------------+
  |                                                                |
  |  SECTION A   ->  appears OCCASIONALLY (often as part of the    |
  |                  trigonometry VSAQ slot). Worth 2 marks when   |
  |                  it comes.                                     |
  |                                                                |
  |  SECTION B   ->  THIS IS THE CHAPTER'S HOME.  Almost every     |
  |                  year one of the 7 short-answer questions is   |
  |                  "solve the following trigonometric equation". |
  |                  Worth 4 marks. You choose any 5 of 7, so a    |
  |                  question you can do mechanically is gold.     |
  |                                                                |
  |  SECTION C   ->  BE HONEST: this chapter is essentially NEVER  |
  |                  a stand-alone 7-mark long answer in Maths IA. |
  |                  The 7-markers come from Functions,            |
  |                  Mathematical Induction, Matrices, Addition    |
  |                  and Product of Vectors, Trigonometric         |
  |                  Transformations and Properties of Triangles.  |
  |                  Prepare Section C from those chapters.        |
  |                  The Section C items at the end of this file   |
  |                  are practice for DEPTH, not a prediction.     |
  |                                                                |
  |  REALISTIC YIELD FROM THIS CHAPTER:   4 marks, sometimes 6.    |
  |                                                                |
  +----------------------------------------------------------------+
```

**Strategy in one line:** this is the cheapest 4 marks in Section B. Master
the six methods and you can walk into the hall knowing one of your five
choices is already decided.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

Remember: in Section A you answer **all 10**. There is no choice. If a
trigonometric-equation question appears, you must be able to do it.

**In every answer below, `n` is an integer.**

## Topic: principal solutions

### Q A1
Find the principal solution of `sin theta = 1 / sqrt2`.

**ANSWER:**
```
  Principal range for sine:  [ -pi/2 , pi/2 ]

  sin( pi/4 ) = 1/sqrt2 ,  and pi/4 lies inside that range.

  PRINCIPAL SOLUTION  =  pi / 4       ( 45 degrees )
```

---

### Q A2
Find the principal solution of `cos theta = - 1/2`.

**ANSWER:**
```
  Principal range for cosine:  [ 0 , pi ]

  The value is negative, so theta must be in the SECOND quadrant.

  cos( 2pi/3 ) = cos 120 deg = -1/2

  PRINCIPAL SOLUTION  =  2 pi / 3     ( 120 degrees )

  (Do NOT answer 4pi/3 or -2pi/3. Both are solutions, neither is
   inside [0, pi].)
```

---

### Q A3
Find the principal value of `theta` if `tan theta = -1`.

**ANSWER:**
```
  Principal range for tangent:  ( -pi/2 , pi/2 )

  tan( -pi/4 ) = -1

  PRINCIPAL SOLUTION  =  - pi / 4     ( -45 degrees )
```

---

### Q A4
Find the principal solution of `sin theta = - sqrt3 / 2`.

**ANSWER:**
```
  Sine is negative, and the principal range is [-pi/2, pi/2], so the
  answer must be a NEGATIVE angle.

  sin( -pi/3 ) = - sqrt3 / 2

  PRINCIPAL SOLUTION  =  - pi / 3     ( -60 degrees )
```

---

## Topic: one-line general solutions

### Q A5
Find the general solution of `sin theta = 1/2`.

**ANSWER:**
```
  1/2 = sin( pi/6 ) ,  so alpha = pi/6 .

  Using   sin theta = sin alpha  =>  theta = n pi + (-1)^n alpha :

        theta  =  n pi  +  (-1)^n  pi/6  ,   n an integer.

  CHECK   n = 0 -> 30 deg , sin30 = 1/2 .   n = 1 -> 150 deg , sin150 = 1/2 .
```

---

### Q A6
Solve `cos theta = - 1 / sqrt2`.

**ANSWER:**
```
  -1/sqrt2 = cos( 3pi/4 )  (135 deg, second quadrant) , so alpha = 3pi/4 .

  Using   cos theta = cos alpha  =>  theta = 2 n pi +- alpha :

        theta  =  2 n pi  +-  3 pi / 4  ,   n an integer.

  CHECK   theta = 135 deg : cos135 = -1/sqrt2 .
          theta = 225 deg (= 360 - 135) : cos225 = -1/sqrt2 .
```

---

### Q A7
Find the general solution of `tan theta = sqrt3`.

**ANSWER:**
```
  sqrt3 = tan( pi/3 ) ,  so alpha = pi/3 .

        theta  =  n pi  +  pi / 3  ,   n an integer.

  CHECK   n = 0 -> 60 deg , tan60 = sqrt3 .
          n = 1 -> 240 deg , tan240 = tan60 = sqrt3 .
```

---

### Q A8
Solve `cot theta = 0`.

**ANSWER:**
```
  cot theta = cos theta / sin theta = 0   means   cos theta = 0 .

        theta  =  ( 2 n + 1 ) pi / 2  ,   n an integer.

  (Note: NOT n pi. cot(n pi) is undefined, not zero.)
```

---

### Q A9
Find the general solution of `sec theta = 2`.

**ANSWER:**
```
  sec theta = 2   =>   cos theta = 1/2 = cos( pi/3 )

        theta  =  2 n pi  +-  pi / 3  ,   n an integer.
```

---

### Q A10
Solve `cosec theta = - 2`.

**ANSWER:**
```
  cosec theta = -2   =>   sin theta = -1/2 = sin( - pi/6 )

        theta  =  n pi  +  (-1)^n ( - pi/6 )
               =  n pi  -  (-1)^n  pi / 6  ,   n an integer.

  CHECK   n = 0 -> -30 deg , cosec(-30) = 1/(-1/2) = -2 .
          n = 1 -> 210 deg , sin210 = -1/2 , cosec210 = -2 .
```

---

## Topic: multiples of the angle

### Q A11
Solve `sin 2 theta = 0`.

**ANSWER:**
```
  Solve for the WHOLE angle first.

        2 theta = n pi        =>       theta = n pi / 2 ,  n an integer.

  CHECK   theta = 90 deg : sin180 = 0 .    theta = 180 deg : sin360 = 0 .
```

---

### Q A12
Find the general solution of `cos 2 theta = 0`.

**ANSWER:**
```
        2 theta = ( 2 n + 1 ) pi / 2

        theta   = ( 2 n + 1 ) pi / 4 ,   n an integer.

  CHECK   n = 0 -> 45 deg , cos90 = 0 .   n = 1 -> 135 deg , cos270 = 0 .
```

---

### Q A13
Solve `tan 2 theta = 1`.

**ANSWER:**
```
        2 theta = n pi + pi / 4

        theta   = n pi / 2  +  pi / 8 ,   n an integer.

  CHECK   n = 0 -> 22.5 deg , tan45 = 1 .
```

---

### Q A14
Find the general solution of `cos 3 theta = 1/2`.

**ANSWER:**
```
  1/2 = cos( pi/3 )

        3 theta = 2 n pi  +-  pi/3

        theta   = 2 n pi / 3  +-  pi / 9 ,   n an integer.

  CHECK   n = 0, + : theta = 20 deg , cos60 = 1/2 .
```

---

## Topic: squared equations

### Q A15
Solve `2 cos^2 theta = 1`.

**ANSWER:**
```
  cos^2 theta = 1/2 = ( 1/sqrt2 )^2 = cos^2 ( pi/4 )

  Using   cos^2 theta = cos^2 alpha  =>  theta = n pi +- alpha :

        theta  =  n pi  +-  pi / 4 ,   n an integer.

  CHECK   theta = 45 deg : 2(1/2) = 1 .    theta = 135 deg : 2(1/2) = 1 .
```

---

### Q A16
Find the general solution of `tan^2 theta = 1`.

**ANSWER:**
```
  tan^2 theta = 1 = tan^2 ( pi/4 )

        theta  =  n pi  +-  pi / 4 ,   n an integer.
```

---

### Q A17
Solve `4 sin^2 theta = 1`.

**ANSWER:**
```
  sin^2 theta = 1/4 = (1/2)^2 = sin^2 ( pi/6 )

        theta  =  n pi  +-  pi / 6 ,   n an integer.

  CHECK   theta = 30 deg : 4(1/4) = 1 .   theta = 150 deg : 4(1/4) = 1 .
```

---

### Q A18
Solve `sin^2 theta = 3/4`.

**ANSWER:**
```
  3/4 = ( sqrt3 / 2 )^2 = sin^2 ( pi/3 )

        theta  =  n pi  +-  pi / 3 ,   n an integer.
```

---

## Topic: quick reductions

### Q A19
Find the general solution of `sin theta = cos theta`.

**ANSWER:**
```
  Divide both sides by cos theta.  (cos theta = 0 is not a solution:
  it would force sin theta = 0 too, impossible since sin^2 + cos^2 = 1.)

        tan theta = 1 = tan( pi/4 )

        theta  =  n pi  +  pi / 4 ,   n an integer.

  CHECK   theta = 45 deg : sin45 = cos45 .   theta = 225 deg : both = -1/sqrt2.
```

---

### Q A20
Solve `sin theta + cos theta = 0`.

**ANSWER:**
```
        sin theta = - cos theta

        tan theta = -1 = tan( - pi/4 )

        theta  =  n pi  -  pi / 4 ,   n an integer.

  CHECK   theta = 135 deg : sin135 + cos135 = 0.7071 - 0.7071 = 0 .
```

---

### Q A21
Find the general solution of `sqrt3 sin theta = cos theta`.

**ANSWER:**
```
        tan theta = 1 / sqrt3 = tan( pi/6 )

        theta  =  n pi  +  pi / 6 ,   n an integer.
```

---

## Topic: existence, maxima and no-solution

### Q A22
Show that `sin theta + cos theta = 2` has no solution.

**ANSWER:**
```
  For a cos theta + b sin theta , the value always lies between
        - sqrt( a^2 + b^2 )   and   + sqrt( a^2 + b^2 ) .

  Here a = 1 , b = 1 , so sqrt( 1 + 1 ) = sqrt2 = 1.414 .

        - 1.414  <=  sin theta + cos theta  <=  1.414

  Since 2 > 1.414 , the equation can NEVER be satisfied.

  NO SOLUTION.
```

---

### Q A23
Find the maximum and minimum values of `3 cos theta + 4 sin theta`.

**ANSWER:**
```
  sqrt( a^2 + b^2 ) = sqrt( 9 + 16 ) = sqrt25 = 5

        MAXIMUM = + 5          MINIMUM = - 5

  (So 3 cos th + 4 sin th = 6 would have no solution, while
   3 cos th + 4 sin th = 5 has one.)
```

---

### Q A24
Find the values of `theta` in `[0, 2 pi]` for which `sin theta = 1/2`.

**ANSWER:**
```
  General solution:  theta = n pi + (-1)^n pi/6 .

        n = 0  ->  pi/6    =  30 deg      IN
        n = 1  ->  5pi/6   = 150 deg      IN
        n = 2  ->  2pi + pi/6 = 390 deg   OUT
        n = -1 ->  -pi - pi/6 = -210 deg  OUT

  ANSWER:   theta = pi/6   and   5 pi / 6
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# THIS IS WHERE THE CHAPTER LIVES. Learn these sixteen and you own it.
# ===============================================================

**Marking guide for a 4-mark solve-the-equation question:**

```
   1 mark   correct reduction / factorisation
   1 mark   correct roots of the reduced equation, with rejections justified
   1 mark   correct general-solution formula applied to EACH case
   1 mark   both/all families written, ending "where n is an integer"
```

---

### Q B1  (quadratic after reduction — asked very often)
Solve `2 cos^2 theta + sqrt3 sin theta + 1 = 0`.

**ANSWER:**
```
  STEP 1  sin appears to the first power, so replace cos^2 by 1 - sin^2 .

            2 ( 1 - sin^2 th ) + sqrt3 sin th + 1 = 0
            2 - 2 sin^2 th + sqrt3 sin th + 1 = 0
            2 sin^2 th - sqrt3 sin th - 3 = 0

  STEP 2  Solve the quadratic in s = sin theta .

            Discriminant = 3 + 24 = 27 ,  sqrt27 = 3 sqrt3

                  sqrt3 +- 3 sqrt3
            s  =  ----------------  =  sqrt3    or    - sqrt3 / 2
                        4

  STEP 3  REJECT  s = sqrt3 = 1.732 , since | sin theta | <= 1 .

            sin theta = - sqrt3 / 2 = sin( - pi/3 )

  STEP 4  theta = n pi + (-1)^n ( - pi/3 )

          theta  =  n pi  -  (-1)^n  pi / 3 ,     n an integer.

  CHECK   theta = -60 deg :
             2 cos^2(-60) + sqrt3 sin(-60) + 1
           = 2(0.25) + 1.7321(-0.8660) + 1
           = 0.5 - 1.5 + 1 = 0 .                              CORRECT
```

---

### Q B2  (a cos + b sin = c, plus an interval — the single most likely question)
Solve `sqrt3 cos theta + sin theta = 1`, and hence find the solutions in
`0 <= theta <= 2 pi`.

**ANSWER:**
```
  STEP 1  a = sqrt3 , b = 1 , c = 1 .
          r = sqrt( a^2 + b^2 ) = sqrt( 3 + 1 ) = 2 .

          EXISTENCE:  |c| = 1 <= 2 , so solutions exist.

  STEP 2  Divide throughout by 2 :

            ( sqrt3 / 2 ) cos th  +  ( 1/2 ) sin th  =  1/2

            cos( pi/6 ) cos th  +  sin( pi/6 ) sin th  =  1/2

            cos( theta - pi/6 ) = 1/2 = cos( pi/3 )

  STEP 3  theta - pi/6 = 2 n pi  +-  pi/3

            theta = 2 n pi + pi/6 + pi/3  =  2 n pi + pi/2
            theta = 2 n pi + pi/6 - pi/3  =  2 n pi - pi/6

          GENERAL SOLUTION:
            theta = 2 n pi + pi/2   or   theta = 2 n pi - pi/6 ,  n integer.

  STEP 4  Solutions in [0, 2 pi] :

            Family 1:  n = 0 -> pi/2 = 90 deg      IN
                       n = 1 -> 450 deg            OUT
            Family 2:  n = 0 -> -30 deg            OUT
                       n = 1 -> 2pi - pi/6 = 11pi/6 = 330 deg   IN

            ANSWER:   theta = pi/2 , 11 pi / 6

  CHECK   theta = 90 deg  : sqrt3(0) + 1 = 1 .                 CORRECT
          theta = 330 deg : 1.7321(0.8660) + (-0.5)
                          = 1.5 - 0.5 = 1 .                    CORRECT
```

---

### Q B3  (a cos + b sin = c, folded into a SINE)
Solve `sqrt2 ( sin theta + cos theta ) = sqrt3`.

**ANSWER:**
```
  STEP 1  Divide by sqrt2 :   sin theta + cos theta = sqrt3 / sqrt2

          r = sqrt( 1 + 1 ) = sqrt2 .
          EXISTENCE: | sqrt3/sqrt2 | = 1.2247 <= 1.4142 . Fine.

  STEP 2  Divide by sqrt2 again :

            (1/sqrt2) sin th + (1/sqrt2) cos th = sqrt3 / 2

            sin th cos(pi/4) + cos th sin(pi/4) = sqrt3 / 2

            sin( theta + pi/4 ) = sqrt3 / 2 = sin( pi/3 )

  STEP 3  theta + pi/4 = n pi + (-1)^n ( pi/3 )

            theta = n pi + (-1)^n pi/3  -  pi/4 ,   n an integer.

  CHECK   n = 0 : theta = pi/3 - pi/4 = pi/12 = 15 deg
            sqrt2 ( sin15 + cos15 ) = 1.4142 ( 0.2588 + 0.9659 )
                                    = 1.4142 x 1.2247 = 1.7321 = sqrt3 . OK
          n = 1 : theta = pi - pi/3 - pi/4 = 5pi/12 = 75 deg
            sqrt2 ( sin75 + cos75 ) = 1.4142 x 1.2247 = sqrt3 .          OK
```

---

### Q B4  (sum to product — the classic)
Solve `sin theta + sin 2 theta + sin 3 theta = 0`.

**ANSWER:**
```
  STEP 1  Pair the OUTER two terms:

            sin 3th + sin th = 2 sin( (3th + th)/2 ) cos( (3th - th)/2 )
                             = 2 sin 2 theta cos theta

  STEP 2  The equation becomes

            2 sin 2th cos th + sin 2th = 0

            sin 2 theta ( 2 cos theta + 1 ) = 0

  STEP 3  CASE 1 :  sin 2 theta = 0
                    2 theta = n pi
                    theta   = n pi / 2

          CASE 2 :  cos theta = - 1/2 = cos( 2 pi / 3 )
                    theta = 2 n pi  +-  2 pi / 3

  ANSWER:  theta = n pi / 2   or   theta = 2 n pi +- 2 pi / 3 , n integer.

  CHECK   theta = 90 deg  : 1 + 0 + (-1) = 0 .                CORRECT
          theta = 120 deg : 0.8660 + (-0.8660) + 0 = 0 .      CORRECT
          theta = 240 deg : -0.8660 + 0.8660 + 0 = 0 .        CORRECT
```

> **VARIATION with the same method:** `sin x + sin 5x = sin 3x`.
> `sin5x + sinx = 2 sin3x cos2x`, so `sin3x (2 cos2x - 1) = 0`, giving
> `x = n pi / 3` or `x = n pi +- pi/6`.

---

### Q B5  (sum to product, cosine version)
Solve `cos theta + cos 2 theta + cos 3 theta = 0`.

**ANSWER:**
```
  STEP 1  cos 3th + cos th = 2 cos( 2 theta ) cos( theta )

  STEP 2  2 cos 2th cos th + cos 2th = 0

            cos 2 theta ( 2 cos theta + 1 ) = 0

  STEP 3  CASE 1 :  cos 2 theta = 0
                    2 theta = ( 2 n + 1 ) pi / 2
                    theta   = ( 2 n + 1 ) pi / 4

          CASE 2 :  cos theta = -1/2 = cos( 2 pi / 3 )
                    theta = 2 n pi  +-  2 pi / 3

  CHECK   theta = 45 deg  : 0.7071 + 0 + (-0.7071) = 0 .      CORRECT
          theta = 120 deg : -0.5 + (-0.5) + 1 = 0 .           CORRECT
```

---

### Q B6  (reduce to one ratio)
Solve `tan theta + 3 cot theta = 5 sec theta`.

**ANSWER:**
```
  STEP 0  DOMAIN: cos theta != 0 (for tan, sec) and sin theta != 0 (for cot).

  STEP 1  Write in sin and cos and multiply by sin th cos th :

            sin^2 th + 3 cos^2 th = 5 sin th

  STEP 2  Replace cos^2 th by 1 - sin^2 th :

            sin^2 th + 3 - 3 sin^2 th = 5 sin th
            2 sin^2 th + 5 sin th - 3 = 0

  STEP 3  ( 2 sin th - 1 )( sin th + 3 ) = 0

            sin theta = 1/2      or     sin theta = -3  (REJECT, |sin| <= 1)

  STEP 4  sin theta = 1/2 = sin( pi/6 )

            theta = n pi + (-1)^n  pi / 6 ,   n an integer.

          Domain check: here sin th = 1/2 != 0 and cos th = +- sqrt3/2 != 0.
          Both fine.

  CHECK   theta = 30 deg :
            tan30 + 3 cot30 = 0.5774 + 3(1.7321) = 5.7735
            5 sec30 = 5 / 0.8660 = 5.7735 .                    CORRECT
```

---

### Q B7  (divide by cos^2 — the "homogeneous" trick)
Solve `1 + sin^2 theta = 3 sin theta cos theta`.

**ANSWER:**
```
  STEP 1  cos theta = 0 is not a solution (it would give 1 + 1 = 0).
          So we may divide the whole equation by cos^2 theta :

            sec^2 theta + tan^2 theta = 3 tan theta

  STEP 2  Replace sec^2 by 1 + tan^2 :

            1 + 2 tan^2 theta = 3 tan theta
            2 tan^2 theta - 3 tan theta + 1 = 0

  STEP 3  ( 2 tan th - 1 )( tan th - 1 ) = 0

            tan theta = 1/2        or        tan theta = 1

  STEP 4  tan theta = 1 = tan( pi/4 )   ->   theta = n pi + pi/4

          tan theta = 1/2  is not a standard angle; write

                  theta = n pi + Arctan( 1/2 )

  ANSWER:  theta = n pi + pi/4   or   theta = n pi + Arctan(1/2), n integer.

  CHECK   theta = 45 deg : 1 + 0.5 = 1.5 ;  3 (0.7071)(0.7071) = 1.5 . OK
          tan th = 1/2 -> sin th = 1/sqrt5 , cos th = 2/sqrt5
                          1 + 0.2 = 1.2 ;  3 (0.4472)(0.8944) = 1.2 .  OK
```

---

### Q B8  (sin on one side, cos on the other)
Solve `cos 3 theta = sin 2 theta`.

**ANSWER:**
```
  STEP 1  Convert the sine into a cosine:  sin A = cos( pi/2 - A ) .

            cos 3 theta = cos( pi/2 - 2 theta )

  STEP 2  cos X = cos Y   =>   X = 2 n pi +- Y :

            3 theta = 2 n pi  +-  ( pi/2 - 2 theta )

  STEP 3  CASE 1 (+) :  3 theta = 2 n pi + pi/2 - 2 theta
                        5 theta = 2 n pi + pi/2
                        theta   = ( 4 n + 1 ) pi / 10

          CASE 2 (-) :  3 theta = 2 n pi - pi/2 + 2 theta
                        theta   = 2 n pi - pi / 2

  CHECK   theta = pi/10 = 18 deg : cos54 = 0.5878 , sin36 = 0.5878 .  OK
          theta = pi/2 = 90 deg  : cos270 = 0 , sin180 = 0 .          OK
          theta = -90 deg        : cos(-270) = 0 , sin(-180) = 0 .    OK
```

---

### Q B9  (product to sum — a favourite hard one)
Solve `4 sin theta . sin 2 theta . sin 4 theta = sin 3 theta`.

**ANSWER:**
```
  STEP 1  Use  2 sinA sinB = cos(A - B) - cos(A + B)  on the last two:

            2 sin 2th sin 4th = cos 2th - cos 6th

          So   LHS = 2 sin th ( cos 2th - cos 6th )

  STEP 2  Use  2 sinA cosB = sin(A + B) - sin(B - A) :

            2 sin th cos 2th = sin 3th - sin th
            2 sin th cos 6th = sin 7th - sin 5th

            LHS = ( sin 3th - sin th ) - ( sin 7th - sin 5th )

  STEP 3  Set LHS = sin 3 theta and cancel sin 3th from both sides:

            - sin th - sin 7th + sin 5th = 0
              sin 5th - sin 7th = sin th

  STEP 4  sin 5th - sin 7th = 2 cos 6th sin( -th ) = - 2 cos 6th sin th

            - 2 cos 6th sin th = sin th
              sin th ( 2 cos 6 theta + 1 ) = 0

  STEP 5  CASE 1 :  sin theta = 0    ->    theta = n pi

          CASE 2 :  cos 6 theta = -1/2 = cos( 2 pi/3 )
                    6 theta = 2 n pi +- 2 pi/3
                    theta   = n pi / 3  +-  pi / 9

  CHECK   theta = 20 deg :
            LHS = 4 sin20 sin40 sin80 = 4 (0.3420)(0.6428)(0.9848)
                = 4 x 0.21651 = 0.86603
            RHS = sin60 = 0.86603 .                            CORRECT
```

---

### Q B10  (factorise, and never cancel)
Solve `2 sin^2 theta + sin^2 2 theta = 2`.

**ANSWER:**
```
  STEP 1  sin 2 theta = 2 sin th cos th , so sin^2 2th = 4 sin^2 th cos^2 th.

            2 sin^2 th + 4 sin^2 th cos^2 th = 2

  STEP 2  4 sin^2 th cos^2 th = 2 - 2 sin^2 th = 2 cos^2 th

            4 sin^2 th cos^2 th - 2 cos^2 th = 0

  STEP 3  FACTORISE (do NOT cancel cos^2 theta ):

            2 cos^2 theta ( 2 sin^2 theta - 1 ) = 0

  STEP 4  CASE 1 :  cos theta = 0    ->    theta = ( 2 n + 1 ) pi / 2

          CASE 2 :  sin^2 theta = 1/2 = sin^2 ( pi/4 )
                    theta = n pi  +-  pi / 4

  CHECK   theta = 90 deg  : 2(1) + sin^2 180 = 2 + 0 = 2 .    CORRECT
          theta = 45 deg  : 2(0.5) + sin^2 90 = 1 + 1 = 2 .   CORRECT
          theta = 135 deg : 2(0.5) + sin^2 270 = 1 + 1 = 2 .  CORRECT
```

---

### Q B11  (extraneous roots — the examiner's trap)
Solve `tan theta + sec theta = sqrt3`.

**ANSWER:**
```
  STEP 0  DOMAIN: cos theta != 0 .  Write this down first.

  STEP 1  ( sin th + 1 ) / cos th = sqrt3

            1 + sin theta = sqrt3 cos theta

            sqrt3 cos theta - sin theta = 1

  STEP 2  r = sqrt( 3 + 1 ) = 2 .  |c| = 1 <= 2 , solutions exist.
          Divide by 2 :

            cos(pi/6) cos th - sin(pi/6) sin th = 1/2

            cos( theta + pi/6 ) = 1/2 = cos( pi/3 )

  STEP 3  theta + pi/6 = 2 n pi  +-  pi/3

            theta = 2 n pi + pi/6           ... family 1
            theta = 2 n pi - pi/2           ... family 2

  STEP 4  REJECT family 2: at theta = -pi/2, 3pi/2, ... we have
          cos theta = 0 , so tan theta and sec theta do not even exist.

  ANSWER:  theta = 2 n pi + pi / 6 ,   n an integer.

  CHECK   theta = 30 deg : tan30 + sec30 = 0.5774 + 1.1547
                         = 1.7321 = sqrt3 .                    CORRECT
```

---

### Q B12  (quadratic in cot, roots in an interval)
Solve `cot^2 x - ( sqrt3 + 1 ) cot x + sqrt3 = 0` for `0 < x < pi / 2`.

**ANSWER:**
```
  STEP 1  Put c = cot x . The two roots multiply to sqrt3 and add to
          sqrt3 + 1 , so they are sqrt3 and 1 :

            ( cot x - sqrt3 )( cot x - 1 ) = 0

  STEP 2  CASE 1 :  cot x = sqrt3   =>   tan x = 1 / sqrt3
                    x = n pi + pi/6 .  In (0, pi/2) :  x = pi / 6 .

          CASE 2 :  cot x = 1       =>   tan x = 1
                    x = n pi + pi/4 .  In (0, pi/2) :  x = pi / 4 .

  ANSWER:  x = pi / 6   and   x = pi / 4     ( 30 deg and 45 deg )

  CHECK   x = 30 : cot30 = 1.7321
            3 - 2.7321(1.7321) + 1.7321 = 3 - 4.7321 + 1.7321 = 0 .  CORRECT
          x = 45 : cot45 = 1
            1 - 2.7321 + 1.7321 = 0 .                                CORRECT
```

---

### Q B13  (double angle reduced, roots in [0, 2 pi])
Find all `x` in `[0, 2 pi]` satisfying `cos 2x = sin x`.

**ANSWER:**
```
  STEP 1  Use cos 2x = 1 - 2 sin^2 x (chosen because the RHS is a sine).

            1 - 2 sin^2 x = sin x
            2 sin^2 x + sin x - 1 = 0

  STEP 2  ( 2 sin x - 1 )( sin x + 1 ) = 0

            sin x = 1/2     or     sin x = -1

  STEP 3  sin x = 1/2  ->  x = n pi + (-1)^n pi/6
              n = 0 :  pi/6  = 30 deg     IN
              n = 1 :  5pi/6 = 150 deg    IN
              n = 2 :  390 deg            OUT

          sin x = -1  ->  x = 2 n pi - pi/2
              n = 0 :  -90 deg            OUT
              n = 1 :  3pi/2 = 270 deg    IN

  ANSWER:  x = pi/6 ,  5 pi / 6 ,  3 pi / 2

  CHECK   x = 30  : cos60 = 0.5 = sin30 .                CORRECT
          x = 150 : cos300 = 0.5 = sin150 .              CORRECT
          x = 270 : cos540 = cos180 = -1 = sin270 .      CORRECT
```

---

### Q B14  (using the bounds — a lovely 4-marker)
If `tan( pi cos theta ) = cot( pi sin theta )`, prove that
`cos( theta - pi/4 ) = +- 1 / ( 2 sqrt2 )`.

**ANSWER:**
```
  STEP 1  Write cot as a tan:   cot A = tan( pi/2 - A ) .

            tan( pi cos theta ) = tan( pi/2 - pi sin theta )

  STEP 2  tan X = tan Y  =>  X = n pi + Y :

            pi cos theta = n pi + pi/2 - pi sin theta

          Divide by pi :

            cos theta + sin theta = n + 1/2

  STEP 3  Compress the left side.  r = sqrt(1 + 1) = sqrt2 :

            cos th + sin th = sqrt2 cos( theta - pi/4 )

            sqrt2 cos( theta - pi/4 ) = n + 1/2

                                        n + 1/2
            cos( theta - pi/4 )  =    -----------
                                         sqrt2

  STEP 4  But | cos | <= 1 , so  | n + 1/2 | <= sqrt2 = 1.414 .

            n = 0  ->  0.5     ALLOWED
            n = -1 ->  -0.5    ALLOWED
            n = 1  ->  1.5     TOO BIG, reject
            n = -2 ->  -1.5    TOO BIG, reject

  STEP 5  So  n + 1/2 = +- 1/2 , giving

                                    +- 1/2            1
            cos( theta - pi/4 ) = ----------  =  +- -------
                                    sqrt2            2 sqrt2

          PROVED.
```

---

### Q B15  (the tan(A+B) trick)
Solve `tan theta + tan 2 theta + sqrt3 tan theta tan 2 theta = sqrt3`.

**ANSWER:**
```
  STEP 1  Group:

            tan th + tan 2th = sqrt3 ( 1 - tan th tan 2th )

  STEP 2  Divide by ( 1 - tan th tan 2th ) :

              tan th + tan 2th
            ---------------------  =  sqrt3
            1 - tan th tan 2th

          The left side is tan( th + 2th ) = tan 3 theta .

  STEP 3  tan 3 theta = sqrt3 = tan( pi / 3 )

            3 theta = n pi + pi/3

            theta = n pi / 3  +  pi / 9 ,     n an integer.

  CHECK   theta = 20 deg :
            tan20 + tan40 + sqrt3 tan20 tan40
          = 0.3640 + 0.8391 + 1.7321 (0.3640)(0.8391)
          = 1.2031 + 0.5290 = 1.7321 = sqrt3 .                CORRECT
```

---

### Q B16  (componendo and dividendo)
Solve `3 tan( theta - 15 deg ) = tan( theta + 15 deg )`.

**ANSWER:**
```
  STEP 1  Write as a ratio and expand into sin / cos :

            tan( th + 15 )        sin(th+15) cos(th-15)        3
            ---------------  =    ---------------------   =   ---
            tan( th - 15 )        cos(th+15) sin(th-15)         1

  STEP 2  COMPONENDO AND DIVIDENDO :

            [ sin(th+15)cos(th-15) + cos(th+15)sin(th-15) ]      3 + 1
            ----------------------------------------------  =  -------
            [ sin(th+15)cos(th-15) - cos(th+15)sin(th-15) ]      3 - 1

            Numerator   = sin( 2 theta )
            Denominator = sin( 30 deg ) = 1/2

              sin 2 theta
              -----------  =  2       =>      sin 2 theta = 1
                  1/2

  STEP 3  2 theta = 2 n pi + pi/2

            theta = n pi + pi / 4 ,     n an integer.

  CHECK   theta = 45 deg :  3 tan30 = 3 (0.5774) = 1.7321
                            tan60 = 1.7321 .                  CORRECT
```

> **VARIATION with the same quadratic method as B12:**
> `4 cos^2 theta + sqrt3 = 2 ( sqrt3 + 1 ) cos theta`.
> Factorises as `(2 cos th - sqrt3)(2 cos th - 1) = 0`, so
> `theta = 2 n pi +- pi/6` or `theta = 2 n pi +- pi/3`.

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# ===============================================================

```
  +----------------------------------------------------------------+
  |  READ THIS BEFORE YOU SPEND TIME HERE                          |
  |                                                                |
  |  Trigonometric Equations is NOT a normal Section C chapter in  |
  |  Maths IA. In the standard blueprint the seven long answers    |
  |  come from Functions, Mathematical Induction, Matrices (two of |
  |  them), Addition of Vectors, Product of Vectors, Trigonometric |
  |  Transformations and Properties of Triangles.                  |
  |                                                                |
  |  So the items below are NOT a prediction. They are here for    |
  |  two honest reasons:                                           |
  |                                                                |
  |    1. Derivations of the general solutions DO get asked as     |
  |       part of a Section B question, and being able to prove    |
  |       them makes the 4-marker automatic.                       |
  |    2. Working a long multi-part problem is the best way to     |
  |       drill the six methods.                                   |
  |                                                                |
  |  Spend your Section C revision time on the chapters listed     |
  |  above. Spend your Section B revision time HERE.               |
  +----------------------------------------------------------------+
```

---

### Q C1  (derivation + application)
**(a)** Derive the general solution of `sin theta = sin alpha`.
**(b)** Hence solve `sin theta + sin 3 theta + sin 5 theta = 0`.

**ANSWER:**

**Part (a) — 3 marks**
```
  sin theta - sin alpha = 0

  Using   sin C - sin D = 2 cos((C+D)/2) sin((C-D)/2) :

              theta + alpha           theta - alpha
        2 cos -------------  .   sin  -------------   =  0
                    2                       2

  A product is zero when a factor is zero.

  CASE 1     cos( (theta + alpha)/2 ) = 0
             (theta + alpha)/2 = ( 2 m + 1 ) pi / 2
             theta = ( 2 m + 1 ) pi - alpha            [ ODD multiple of pi ]

  CASE 2     sin( (theta - alpha)/2 ) = 0
             (theta - alpha)/2 = m pi
             theta = 2 m pi + alpha                    [ EVEN multiple of pi ]

  Both cases are contained in the single formula

        theta = n pi + (-1)^n alpha ,      n an integer,

  since (-1)^n = +1 for even n (Case 2) and -1 for odd n (Case 1).
```

**Part (b) — 4 marks**
```
  Pair the OUTER two terms:

        sin 5th + sin th = 2 sin( 3 theta ) cos( 2 theta )

  So    2 sin 3th cos 2th + sin 3th = 0

        sin 3 theta ( 2 cos 2 theta + 1 ) = 0

  CASE 1  sin 3 theta = 0
          3 theta = n pi
          theta = n pi / 3

  CASE 2  cos 2 theta = - 1/2 = cos( 2 pi / 3 )
          2 theta = 2 n pi  +-  2 pi / 3
          theta   = n pi  +-  pi / 3

  ANSWER:  theta = n pi / 3   or   theta = n pi +- pi/3 ,  n an integer.

  CHECK   theta = 60 deg : sin60 + sin180 + sin300
                         = 0.8660 + 0 - 0.8660 = 0 .          CORRECT
          theta = 120 deg: sin120 + sin360 + sin600
                         = 0.8660 + 0 + sin240
                         = 0.8660 - 0.8660 = 0 .              CORRECT
```

---

### Q C2  (all three derivations)
Derive the general solutions of
**(a)** `cos theta = 0`, **(b)** `cos theta = cos alpha`,
**(c)** `tan theta = tan alpha`, and state the condition for each.

**ANSWER:**
```
  MARK SPLIT:  (a) 2 marks   (b) 3 marks   (c) 2 marks

  (a)  cos theta is the x-coordinate of the point on the unit circle at
       angle theta. It is zero exactly when the point lies on the y-axis,
       that is at

            theta = pi/2 , 3pi/2 , 5pi/2 , ... and  -pi/2 , -3pi/2 , ...

       These are precisely the ODD multiples of pi/2 :

            theta = ( 2 n + 1 ) pi / 2 ,    n an integer.

       CONDITION: none.

  (b)  cos theta - cos alpha = 0

       Using  cos C - cos D = - 2 sin((C+D)/2) sin((C-D)/2) :

                    theta + alpha            theta - alpha
            - 2 sin -------------  .   sin   -------------   =  0
                          2                        2

       CASE 1   sin( (theta + alpha)/2 ) = 0
                (theta + alpha)/2 = m pi
                theta = 2 m pi - alpha

       CASE 2   sin( (theta - alpha)/2 ) = 0
                (theta - alpha)/2 = m pi
                theta = 2 m pi + alpha

       Together:     theta = 2 n pi  +-  alpha ,   n an integer.

       CONDITION: | cos alpha | <= 1 ; take alpha in [0, pi].

  (c)  tan theta = tan alpha

            sin theta       sin alpha
            ---------  =   -----------
            cos theta       cos alpha

       Cross-multiplying (valid because cos theta != 0 and cos alpha != 0):

            sin theta cos alpha - cos theta sin alpha = 0

            sin( theta - alpha ) = 0

            theta - alpha = n pi

            theta = n pi + alpha ,     n an integer.

       CONDITION: cos theta != 0 and cos alpha != 0 , i.e. neither angle
       may be an odd multiple of pi/2 .
```

---

### Q C3  (the general theory of a cos + b sin = c, then a numerical case)
**(a)** Show that `a cos theta + b sin theta = c` has a solution if and only
if `c^2 <= a^2 + b^2`, and find its general solution.
**(b)** Hence solve `cos theta + sqrt3 sin theta = sqrt2` and list the roots
in `[0, 2 pi]`.

**ANSWER:**

**Part (a) — 4 marks**
```
  Let  r = sqrt( a^2 + b^2 ) .  (If a = b = 0 there is nothing to solve.)

  Since  ( a/r )^2 + ( b/r )^2 = 1 , there is an angle alpha with

            a                        b
       --------- = cos alpha ,  --------- = sin alpha ,   tan alpha = b/a
           r                        r

  Divide the equation by r :

        ( a/r ) cos theta + ( b/r ) sin theta  =  c / r

        cos alpha cos theta + sin alpha sin theta = c / r

        cos( theta - alpha ) = c / r                       ... (*)

  EXISTENCE.  The cosine of a real angle lies in [-1, 1]. So (*) has a
  solution if and only if

        | c / r | <= 1     <=>     | c | <= sqrt( a^2 + b^2 )

                           <=>     c^2  <=  a^2 + b^2 .

  (Equivalently: the maximum of a cos th + b sin th is + sqrt(a^2+b^2)
   and the minimum is - sqrt(a^2+b^2).)

  GENERAL SOLUTION.  Write c/r = cos beta with beta in [0, pi]. Then

        theta - alpha = 2 n pi  +-  beta

        theta = 2 n pi  +-  beta  +  alpha ,      n an integer.
```

**Part (b) — 3 marks**
```
  a = 1 , b = sqrt3 , c = sqrt2 .
  r = sqrt( 1 + 3 ) = 2 .    c^2 = 2 <= 4 = a^2 + b^2 .  Solutions exist.

  Divide by 2 :

        (1/2) cos th + (sqrt3/2) sin th = sqrt2 / 2 = 1 / sqrt2

        cos(pi/3) cos th + sin(pi/3) sin th = 1/sqrt2

        cos( theta - pi/3 ) = 1/sqrt2 = cos( pi/4 )

        theta - pi/3 = 2 n pi +- pi/4

        theta = 2 n pi  +-  pi/4  +  pi/3 ,     n an integer.

  Roots in [0, 2 pi] :

        n = 0 , + :  pi/4 + pi/3 = 7 pi / 12 = 105 deg     IN
        n = 0 , - : -pi/4 + pi/3 =   pi / 12 =  15 deg     IN
        n = 1     :  add 360 deg -> 465 and 375 deg        OUT
        n = -1    :  subtract 360 -> negative              OUT

  ANSWER:  theta = pi/12  and  7 pi/12    ( 15 deg and 105 deg )

  CHECK   theta = 15 deg  : cos15 + sqrt3 sin15
                          = 0.9659 + 1.7321(0.2588) = 1.4142 = sqrt2 . OK
          theta = 105 deg : cos105 + sqrt3 sin105
                          = -0.2588 + 1.7321(0.9659) = 1.4142 = sqrt2 . OK
```

---

### Q C4  (a four-term transformation problem)
Solve `cos theta + cos 2 theta + cos 3 theta + cos 4 theta = 0`, and find the
roots in `[0, 2 pi]`.

**ANSWER:**
```
  STEP 1  Pair the OUTER two, and the INNER two.

          cos 4th + cos th  = 2 cos( 5 theta / 2 ) cos( 3 theta / 2 )
          cos 3th + cos 2th = 2 cos( 5 theta / 2 ) cos( theta / 2 )

  STEP 2  Add them:

          2 cos(5th/2) [ cos(3th/2) + cos(th/2) ] = 0

  STEP 3  Transform the bracket:

          cos(3th/2) + cos(th/2) = 2 cos( theta ) cos( theta / 2 )

          So the whole equation is

          4 cos( 5 theta / 2 ) . cos( theta ) . cos( theta / 2 ) = 0

  STEP 4  THREE cases.

          CASE 1  cos( 5 theta / 2 ) = 0
                  5 theta / 2 = ( 2 n + 1 ) pi / 2
                  theta = ( 2 n + 1 ) pi / 5

          CASE 2  cos theta = 0
                  theta = ( 2 n + 1 ) pi / 2

          CASE 3  cos( theta / 2 ) = 0
                  theta / 2 = ( 2 n + 1 ) pi / 2
                  theta = ( 2 n + 1 ) pi

  STEP 5  Roots in [0, 2 pi] :

          CASE 1 : pi/5 (36 deg) , 3pi/5 (108) , pi (180) , 7pi/5 (252) ,
                   9pi/5 (324)
          CASE 2 : pi/2 (90) , 3pi/2 (270)
          CASE 3 : pi (180)     [already listed]

          ANSWER:  36, 90, 108, 180, 252, 270, 324 degrees
                =  pi/5 , pi/2 , 3pi/5 , pi , 7pi/5 , 3pi/2 , 9pi/5

  CHECK   theta = 36 deg :
             cos36 + cos72 + cos108 + cos144
           = 0.8090 + 0.3090 - 0.3090 - 0.8090 = 0 .            CORRECT
          theta = 90 deg :
             cos90 + cos180 + cos270 + cos360 = 0 - 1 + 0 + 1 = 0. CORRECT
          theta = 180 deg :
             cos180 + cos360 + cos540 + cos720
           = -1 + 1 - 1 + 1 = 0 .                               CORRECT
```

---

### Q C5  (a long factorisation)
Solve `sin x - 3 sin 2x + sin 3x = cos x - 3 cos 2x + cos 3x`.

**ANSWER:**
```
  STEP 1  Group the outer terms on each side.

          LHS :  sin 3x + sin x = 2 sin 2x cos x
                 LHS = 2 sin 2x cos x - 3 sin 2x = sin 2x ( 2 cos x - 3 )

          RHS :  cos 3x + cos x = 2 cos 2x cos x
                 RHS = 2 cos 2x cos x - 3 cos 2x = cos 2x ( 2 cos x - 3 )

  STEP 2  Bring together:

          sin 2x ( 2 cos x - 3 ) - cos 2x ( 2 cos x - 3 ) = 0

          ( 2 cos x - 3 ) ( sin 2x - cos 2x ) = 0

  STEP 3  CASE 1  2 cos x - 3 = 0  =>  cos x = 3/2 .
                  REJECT: | cos x | <= 1 .

          CASE 2  sin 2x = cos 2x
                  Divide by cos 2x (it is not zero here, since if
                  cos 2x = 0 then sin 2x = 0 too, impossible).

                  tan 2x = 1 = tan( pi / 4 )

                  2x = n pi + pi/4

                  x  = n pi / 2  +  pi / 8 ,     n an integer.

  CHECK   x = pi/8 = 22.5 deg :
            LHS = sin22.5 - 3 sin45 + sin67.5
                = 0.38268 - 2.12132 + 0.92388 = -0.81476
            RHS = cos22.5 - 3 cos45 + cos67.5
                = 0.92388 - 2.12132 + 0.38268 = -0.81476 .      CORRECT
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Chance of appearing |
|---|---|---|---|
| 1 | Solve `a cos th + b sin th = c` (e.g. `sqrt3 cos th + sin th = 1`) | B | Very high |
| 2 | Solve a sum-to-product equation (`sin th + sin 2th + sin 3th = 0`) | B | Very high |
| 3 | Solve a quadratic type (`2 cos^2 th + sqrt3 sin th + 1 = 0`) | B | High |
| 4 | Reduce-to-one-ratio type (`tan th + 3 cot th = 5 sec th`) | B | High |
| 5 | Find the roots in `[0, 2 pi]` from a general solution | B (part ii) | High |
| 6 | Find a principal solution / principal value | A | Medium |
| 7 | One-line general solution (`sin th = 1/2`, `tan th = -1`) | A | Medium |
| 8 | `cos 3 th = sin 2 th` type (sin/cos on opposite sides) | B | Medium |
| 9 | Squared type (`2 cos^2 th = 1`, `tan^2 th = 3`) | A | Medium |
| 10 | Extraneous-root type (`tan th + sec th = sqrt3`) | B | Medium |
| 11 | `4 sin th sin 2th sin 4th = sin 3th` (product to sum) | B | Low-medium |
| 12 | `tan(pi cos th) = cot(pi sin th)` bounds question | B | Low |
| 13 | Simultaneous equations | A or B | Low |
| 14 | Derive a general solution from first principles | B (part i) | Low |
| 15 | Stand-alone 7-mark question from this chapter | C | **Very low** |

```
  +----------------------------------------------------------------+
  |                                                                |
  |  IF YOU LEARN ONLY FIVE QUESTIONS FROM THIS FILE, LEARN        |
  |                                                                |
  |        B2   sqrt3 cos th + sin th = 1                          |
  |        B4   sin th + sin 2th + sin 3th = 0                     |
  |        B1   2 cos^2 th + sqrt3 sin th + 1 = 0                  |
  |        B6   tan th + 3 cot th = 5 sec th                       |
  |        B11  tan th + sec th = sqrt3                            |
  |                                                                |
  |  Between them they cover five of the six methods, and one of   |
  |  the five (or a twin of it) turns up almost every year.        |
  |                                                                |
  +----------------------------------------------------------------+
```
