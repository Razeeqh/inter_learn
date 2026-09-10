# Ellipse — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIB · **Chapter 4**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> The questions below are therefore grouped by "how often they appear" rather than
> being tagged to one exact year. No exam year has been invented here.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIB paper:**

```
  THE PAPER IS 75 MARKS

  Section A  (2 marks each, answer ALL 10)   ->  usually Q4
  Section B  (4 marks each, answer any 5)    ->  usually Q13 or Q14
  Section C  (7 marks each, answer any 5)    ->  usually Q20

  The Conics block is Circle (Ch 1), System of Circles (Ch 2), Parabola (Ch 3),
  Ellipse (Ch 4), Hyperbola (Ch 5). Between them they carry roughly a third of
  the paper. Ellipse alone is worth about 9-13 marks. It shares its whole
  toolkit with Parabola and Hyperbola, so it is very cheap to learn.
```

**Before you start:** keep this strip in front of you the whole time.

```
  x^2/a^2 + y^2/b^2 = 1 (a>b)      b^2 = a^2(1-e^2)      ae = sqrt(a^2-b^2)
  Foci (±ae,0)   Directrices x = ±a/e   LR = 2b^2/a   Area = pi a b
  P(theta) = (a cos th, b sin th)        SP = a - e x1 ,  SP + S'P = 2a
  Tangent at (x1,y1):  x x1/a^2 + y y1/b^2 = 1
  Tangent at theta  :  (x cos th)/a + (y sin th)/b = 1
  Tangent slope form:  y = mx ± sqrt(a^2m^2 + b^2) ,  contact (-a^2m/c, b^2/c)
  Normal at (x1,y1) :  a^2 x/x1 - b^2 y/y1 = a^2 - b^2
  Normal at theta   :  ax sec th - by cosec th = a^2 - b^2
  T = 0 / T = S11 / S·S11 = T^2      Director circle x^2 + y^2 = a^2 + b^2
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: reading a standard form

### Q A1
Find the eccentricity of the ellipse `9x^2 + 16y^2 = 144`.

**ANSWER:**
```
  Divide by 144:      x^2/16  +  y^2/9  =  1

  16 > 9 and 16 is under x^2   ->   a^2 = 16 , b^2 = 9

  b^2 = a^2 ( 1 - e^2 )
   9  = 16 ( 1 - e^2 )
  e^2 = 1 - 9/16 = 7/16

              sqrt(7)
        e  =  -------
                 4
```
**e = sqrt(7)/4** (about 0.66, correctly between 0 and 1)

---

### Q A2
Find the eccentricity of `2x^2 + 3y^2 = 6`.

**ANSWER:**
```
  Divide by 6:        x^2/3  +  y^2/2  =  1

  3 > 2  ->  a^2 = 3 , b^2 = 2   (major axis along x)

  e^2 = 1 - b^2/a^2 = 1 - 2/3 = 1/3

        e = 1 / sqrt(3)
```
**e = 1/sqrt(3)**

---

### Q A3
Find the length of the latus rectum of `x^2/25 + y^2/9 = 1`.

**ANSWER:**
```
  a^2 = 25 -> a = 5 ,   b^2 = 9

              2 b^2      2 * 9      18
        LR = ------- =  -------  =  ----  =  3.6
                a          5          5

  CHECK: 3.6 is much less than the major axis 2a = 10. TICK.
```
**18/5**

---

### Q A4
Find the foci and the equations of the directrices of `x^2/25 + y^2/16 = 1`.

**ANSWER:**
```
  a = 5 , b = 4
  a e = sqrt( a^2 - b^2 ) = sqrt( 25 - 16 ) = 3     ->     e = 3/5

  FOCI          ( ± 3 , 0 )
  DIRECTRICES   x = ± a/e = ± 5 / (3/5) = ± 25/3
```
**Foci (3, 0) and (-3, 0); directrices x = 25/3 and x = -25/3**

---

### Q A5
Find the lengths of the major and minor axes of `4x^2 + 9y^2 = 36`.

**ANSWER:**
```
  Divide by 36:     x^2/9  +  y^2/4  =  1

  a^2 = 9 -> a = 3        b^2 = 4 -> b = 2

  MAJOR AXIS  =  2a  =  6      (along the x-axis)
  MINOR AXIS  =  2b  =  4      (along the y-axis)
```
**Major axis 6, minor axis 4**

---

### Q A6
Find the coordinates of the foci of `9x^2 + 4y^2 = 36`.

**ANSWER:**
```
  Divide by 36:     x^2/4  +  y^2/9  =  1

  9 > 4 and 9 is under y^2   ->   MAJOR AXIS IS THE y-AXIS

        a^2 = 9 -> a = 3 (semi-major)     b^2 = 4

        a e = sqrt( 9 - 4 ) = sqrt(5)

        FOCI = ( 0 , ± sqrt(5) )
```
**(0, sqrt(5)) and (0, -sqrt(5))**

> This is the commonest 2-mark trap in the chapter: the bigger denominator was
> under `y^2`, so the foci go on the **y**-axis.

---

### Q A7
Find the area of the ellipse `9x^2 + 16y^2 = 144`.

**ANSWER:**
```
  x^2/16 + y^2/9 = 1  ->  a = 4 , b = 3

        AREA  =  pi a b  =  pi * 4 * 3  =  12 pi
```
**12 pi square units**

---

## Topic: eccentricity from a condition

### Q A8
If the length of the latus rectum is equal to **half of the minor axis**, find `e`.

**ANSWER:**
```
        2 b^2 / a   =   ( 1/2 )( 2 b )   =   b

        2 b^2  =  a b      ->      a  =  2 b

        e^2 = 1 - b^2/a^2 = 1 - b^2 / (4b^2) = 1 - 1/4 = 3/4

              sqrt(3)
        e  =  -------
                 2
```
**e = sqrt(3)/2**

---

### Q A9
If the length of the latus rectum is equal to **half of the major axis**, find `e`.

**ANSWER:**
```
        2 b^2 / a   =   ( 1/2 )( 2 a )   =   a

        2 b^2  =  a^2      ->      b^2 / a^2  =  1/2

        e^2 = 1 - 1/2 = 1/2       ->      e = 1 / sqrt(2)
```
**e = 1/sqrt(2)**

---

### Q A10
If the **minor axis equals the distance between the foci**, find `e`.

**ANSWER:**
```
        2 b  =  2 a e      ->      b  =  a e      ->      b^2 = a^2 e^2

  But   b^2 = a^2 - a^2 e^2 , so    a^2 e^2 = a^2 - a^2 e^2

        2 a^2 e^2 = a^2      ->      e^2 = 1/2      ->      e = 1/sqrt(2)
```
**e = 1/sqrt(2)**

---

### Q A11
If the distance between the directrices is **three times** the distance between the
foci, find `e`.

**ANSWER:**
```
        2 a / e   =   3 ( 2 a e )

        1 / e     =   3 e

        e^2  =  1/3      ->      e  =  1 / sqrt(3)

  CHECK: e = 0.577, which is less than 1. TICK.
```
**e = 1/sqrt(3)**

---

## Topic: building the equation

### Q A12
Find the equation of the ellipse whose foci are `(±2, 0)` and whose eccentricity is `1/2`.

**ANSWER:**
```
        a e = 2   and   e = 1/2      ->      a = 4 ,  a^2 = 16

        b^2 = a^2 - (a e)^2 = 16 - 4 = 12

              x^2      y^2
              ---  +   ---  =  1
              16        12

  CHECK: e = sqrt(1 - 12/16) = sqrt(1/4) = 1/2. TICK.
```
**x^2/16 + y^2/12 = 1**

---

### Q A13
Find the equation of the ellipse whose major axis is `10` and whose foci are `(±4, 0)`.

**ANSWER:**
```
        2a = 10 -> a = 5 ,   a e = 4   ->   e = 4/5

        b^2 = a^2 - (ae)^2 = 25 - 16 = 9

              x^2     y^2
              ---  +  ---  =  1
              25       9
```
**x^2/25 + y^2/9 = 1**

---

### Q A14
Find the equation of the ellipse (axes along the coordinate axes) whose latus rectum
is `5` and whose eccentricity is `2/3`.

**ANSWER:**
```
        LR = 2 b^2 / a = 2 a ( 1 - e^2 )   because  b^2 = a^2 ( 1 - e^2 )

        2 a ( 1 - 4/9 ) = 5      ->      2 a ( 5/9 ) = 5      ->     a = 9/2

        a^2 = 81/4 ,   b^2 = (5/9)(81/4) = 45/4

              x^2        y^2                    4 x^2      4 y^2
             -----  +   -----  =  1     i.e.   -------  +  -----  =  1
             81/4       45/4                      81         45

  CHECK: LR = 2 b^2 / a = 2 (45/4) / (9/2) = (45/2)(2/9) = 5. TICK.
```
**4x^2/81 + 4y^2/45 = 1**

---

### Q A15
Find the equation of the director circle of `x^2/25 + y^2/9 = 1`.

**ANSWER:**
```
        x^2 + y^2 = a^2 + b^2 = 25 + 9 = 34
```
**x^2 + y^2 = 34**

---

## Topic: points, focal distances, position

### Q A16
Find the sum of the focal distances of any point on `9x^2 + 16y^2 = 144`.

**ANSWER:**
```
        x^2/16 + y^2/9 = 1   ->   a = 4

        S P  +  S' P  =  2 a  =  8       (the same for EVERY point)
```
**8**

---

### Q A17
Find the focal distances of the point `(4, 9/5)` on `x^2/25 + y^2/9 = 1`.

**ANSWER:**
```
  First check it is on the curve:  16/25 + (81/25)/9 = 16/25 + 9/25 = 1. TICK.

        a = 5 , b = 3 , ae = sqrt(25 - 9) = 4 , e = 4/5

        S P  = a - e x1 = 5 - (4/5)(4) = 5 - 16/5 =  9/5
        S' P = a + e x1 = 5 + 16/5             = 41/5

  CHECK the sum: 9/5 + 41/5 = 50/5 = 10 = 2a. TICK.
```
**9/5 and 41/5**

---

### Q A18
Determine whether the point `(2, 3)` lies inside, on or outside `x^2/16 + y^2/9 = 1`.

**ANSWER:**
```
        S11 = x1^2/16 + y1^2/9 - 1 = 4/16 + 9/9 - 1 = 0.25 + 1 - 1 = 0.25

        S11 = 1/4  >  0     ->     the point is OUTSIDE
```
**Outside**

---

### Q A19
Find the point on `x^2/9 + y^2/4 = 1` whose eccentric angle is `45°`.

**ANSWER:**
```
        P ( theta ) = ( a cos th , b sin th ) = ( 3 cos45 , 2 sin45 )

                    = ( 3 / sqrt2 , 2 / sqrt2 )  =  ( 3 sqrt(2)/2 , sqrt(2) )

  CHECK on the curve: (9/2)/9 + 2/4 = 1/2 + 1/2 = 1. TICK.
```
**(3 sqrt(2)/2, sqrt(2))**

---

## Topic: tangents in 2 marks

### Q A20
Find the condition for `y = mx + c` to be a tangent to `x^2/a^2 + y^2/b^2 = 1`,
and hence find the tangents to `x^2/16 + y^2/9 = 1` with slope `2`.

**ANSWER:**
```
        CONDITION :      c^2  =  a^2 m^2  +  b^2

        Here a^2 = 16 , b^2 = 9 , m = 2 :

        c^2 = 16(4) + 9 = 73      ->      c = ± sqrt(73)

        TANGENTS :   y = 2 x + sqrt(73)   and   y = 2 x - sqrt(73)
```
**y = 2x ± sqrt(73)**

---

### Q A21
Find `k` if `3x - 4y = k` touches `x^2/16 + y^2/9 = 1`.

**ANSWER:**
```
        Write it as   y = (3/4) x  -  k/4    ->    m = 3/4 ,  c = -k/4

        c^2 = a^2 m^2 + b^2

        k^2 / 16  =  16 ( 9/16 )  +  9  =  9 + 9  =  18

        k^2 = 288      ->      k = ± sqrt(288) = ± 12 sqrt(2)
```
**k = ±12 sqrt(2)**

---

### Q A22
Find the equation of the tangent to `x^2/25 + y^2/16 = 1` at `(3, 16/5)`.

**ANSWER:**
```
  Check the point:  9/25 + (256/25)/16 = 9/25 + 16/25 = 1. TICK.

        T = 0 :      x(3)/25  +  y(16/5)/16  =  1

                     3x/25  +  y/5  =  1

        Multiply by 25 :     3 x  +  5 y  =  25
```
**3x + 5y = 25**

---

### Q A23
Find the equation of the polar (chord of contact) of `(1, 2)` with respect to
`x^2/9 + y^2/4 = 1`.

**ANSWER:**
```
        T = 0 :     x(1)/9  +  y(2)/4  =  1     ->     x/9 + y/2 = 1

        Multiply by 18 :     2 x  +  9 y  =  18
```
**2x + 9y = 18**

---

### Q A24
Find the pole of `x + 2y = 4` with respect to `x^2/9 + y^2/4 = 1`.

**ANSWER:**
```
        Write the line as  x + 2y - 4 = 0   ->   l = 1 , m = 2 , n = -4

        Pole = ( - a^2 l / n , - b^2 m / n )
             = ( - 9(1)/(-4) , - 4(2)/(-4) )
             = ( 9/4 , 2 )

  CHECK: polar of (9/4, 2) is (9/4)x/9 + 2y/4 = 1 -> x/4 + y/2 = 1 -> x + 2y = 4. TICK.
```
**(9/4, 2)**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Seven are set, you answer any five. Ellipse is usually one of them.
# ===============================================================

### Q B1
Find the equation of the ellipse whose focus is `(1, -1)`, whose directrix is
`x + y + 2 = 0` and whose eccentricity is `1/sqrt(2)`.

**ANSWER:**
```
  Let P ( x , y ) be any point on the ellipse. Use  S P^2 = e^2 * P M^2.

                   | x + y + 2 |                              ( x+y+2 )^2
        P M  =    --------------      so      P M^2   =       ------------
                     sqrt(2)                                        2

        ( x - 1 )^2 + ( y + 1 )^2   =   ( 1/2 ) * ( x + y + 2 )^2 / 2

        4 [ ( x - 1 )^2 + ( y + 1 )^2 ]  =  ( x + y + 2 )^2

  LEFT  = 4 [ x^2 - 2x + 1 + y^2 + 2y + 1 ]
        = 4x^2 + 4y^2 - 8x + 8y + 8

  RIGHT = x^2 + y^2 + 4 + 2xy + 4x + 4y

  LEFT - RIGHT = 0 :

        3 x^2  -  2 x y  +  3 y^2  -  12 x  +  4 y  +  4   =   0

  CHECK it is an ellipse: a = 3, h = -1, b = 3
        h^2 - ab = 1 - 9 = -8 < 0.  ELLIPSE. TICK.
```
**3x^2 - 2xy + 3y^2 - 12x + 4y + 4 = 0**

---

### Q B2
Find the equation of the ellipse whose focus is `(1, -1)`, whose directrix is
`x + y + 2 = 0` and whose eccentricity is `2/3`.

**ANSWER:**
```
        ( x - 1 )^2 + ( y + 1 )^2   =   ( 4/9 ) ( x + y + 2 )^2 / 2

        9 [ ( x - 1 )^2 + ( y + 1 )^2 ]  =  2 ( x + y + 2 )^2

  LEFT  = 9x^2 + 9y^2 - 18x + 18y + 18
  RIGHT = 2x^2 + 2y^2 + 4xy + 8x + 8y + 8

        7 x^2  -  4 x y  +  7 y^2  -  26 x  +  10 y  +  10   =   0

  CHECK: h = -2 , a = 7 , b = 7 ;  h^2 - ab = 4 - 49 = -45 < 0. ELLIPSE. TICK.
```
**7x^2 - 4xy + 7y^2 - 26x + 10y + 10 = 0**

---

### Q B3
Find the equation of the ellipse referred to its axes as the coordinate axes which
passes through `(-2, 2)` and `(3, -1)`.

**ANSWER:**
```
        Let the ellipse be   x^2 / A  +  y^2 / B  =  1 ,  and put u = 1/A , v = 1/B.

        Through ( -2 , 2 ) :    4 u  +  4 v  =  1
        Through (  3 , -1) :    9 u  +    v  =  1     ->    v = 1 - 9 u

        4 u  +  4 ( 1 - 9 u )  =  1
        4 u  +  4  -  36 u     =  1
             - 32 u            = -3        ->     u = 3/32
                                                  v = 1 - 27/32 = 5/32

        A = 32/3 ,  B = 32/5

        3 x^2 / 32  +  5 y^2 / 32  =  1     ->      3 x^2  +  5 y^2  =  32

  CHECK ( -2 , 2 ) :  3(4) + 5(4) = 32. TICK.
  CHECK (  3 , -1 ):  3(9) + 5(1) = 32. TICK.
```
**3x^2 + 5y^2 = 32**

---

### Q B4
Find the equation of the ellipse with centre at the origin, major axis along the
`x`-axis, eccentricity `2/3`, passing through `(-3, 1)`.

**ANSWER:**
```
        b^2 = a^2 ( 1 - e^2 ) = a^2 ( 1 - 4/9 ) = 5 a^2 / 9

        Substitute ( -3 , 1 ) into  x^2/a^2 + y^2/b^2 = 1 :

              9         1
            -----  +  --------  =  1
             a^2      5a^2 / 9

              9         9
            -----  +  ------  =  1
             a^2       5 a^2

            45 + 9  =  5 a^2      ->      a^2 = 54/5

            b^2 = ( 5/9 )( 54/5 ) = 6

              x^2         y^2
             ------  +   -----  =  1      ->      5 x^2  +  9 y^2  =  54
             54/5          6

  CHECK ( -3 , 1 ) : 5(9) + 9(1) = 54. TICK.
  CHECK e : a^2 = 10.8 , b^2 = 6 , e^2 = 1 - 6/10.8 = 0.4444 , e = 0.667 = 2/3. TICK.
```
**5x^2 + 9y^2 = 54**

---

### Q B5
Find the equation of the ellipse whose latus rectum is `15/2` and the distance
between whose foci is `2`, the major axis lying along the `x`-axis.

**ANSWER:**
```
        2 b^2 / a = 15/2        ... (1)
        2 a e = 2   ->  a e = 1  ->  a^2 e^2 = 1
        b^2 = a^2 - a^2 e^2 = a^2 - 1       ... (2)

  Put (2) into (1):

        2 ( a^2 - 1 ) / a  =  15/2
        4 ( a^2 - 1 )  =  15 a
        4 a^2  -  15 a  -  4  =  0

              15 ± sqrt( 225 + 64 )     15 ± 17
        a  =  ---------------------  =  --------      ->    a = 4
                        8                   8               (reject a = -1/4)

        b^2 = 16 - 1 = 15

                    x^2      y^2
                    ---  +   ---  =  1
                    16        15

  CHECK: LR = 2(15)/4 = 15/2. TICK.     e = 1/4 , 2ae = 2. TICK.
```
**x^2/16 + y^2/15 = 1**

---

### Q B6
Reduce `4x^2 + y^2 - 8x + 2y + 1 = 0` to standard form and find its centre, foci,
eccentricity and the length of the latus rectum.

**ANSWER:**
```
        4 ( x^2 - 2x )  +  ( y^2 + 2y )  =  -1

        4 [ ( x - 1 )^2 - 1 ]  +  [ ( y + 1 )^2 - 1 ]  =  -1

        4 ( x - 1 )^2  -  4  +  ( y + 1 )^2  -  1  =  -1

        4 ( x - 1 )^2  +  ( y + 1 )^2  =  4

              ( x - 1 )^2      ( y + 1 )^2
              -----------  +   -----------  =  1
                   1                4

        4 > 1 and 4 is under y  ->  MAJOR AXIS IS VERTICAL
        a = 2 (semi-major) , b = 1 (semi-minor)

        e^2 = 1 - 1/4 = 3/4    ->    e = sqrt(3)/2
        a e = 2 * sqrt(3)/2 = sqrt(3)

        CENTRE          ( 1 , -1 )
        FOCI            ( 1 , -1 + sqrt3 )  and  ( 1 , -1 - sqrt3 )
        ECCENTRICITY    sqrt(3) / 2
        LATUS RECTUM    2 b^2 / a  =  2 (1) / 2  =  1
        VERTICES        ( 1 , 1 )  and  ( 1 , -3 )

  CHECK the vertex (1,1) in the original: 4 + 1 - 8 + 2 + 1 = 0. TICK.
```
**Centre (1, -1); foci (1, -1 ± sqrt 3); e = sqrt(3)/2; LR = 1**

---

### Q B7
Find the equations of the tangent and the normal to `x^2/25 + y^2/16 = 1` at the end
of the latus rectum in the **first quadrant**.

**ANSWER:**
```
        a = 5 , b = 4 , a e = sqrt(25-16) = 3 , e = 3/5 , b^2/a = 16/5

        END OF THE LATUS RECTUM IN Q1 :    P ( 3 , 16/5 )

  TANGENT   x x1/25 + y y1/16 = 1 :

        3x/25  +  (16/5) y / 16  =  1
        3x/25  +  y/5            =  1
        Multiply by 25 :        3 x  +  5 y  =  25

  NORMAL    a^2 x/x1 - b^2 y/y1 = a^2 - b^2 :

        25 x / 3   -   16 y / (16/5)   =   25 - 16 = 9
        25 x / 3   -   5 y             =   9
        Multiply by 3 :         25 x  -  15 y  =  27

  CHECKS: P on the tangent: 9 + 16 = 25. TICK.
          P on the normal : 75 - 48 = 27. TICK.
          Slopes: -3/5 and 25/15 = 5/3 ; product = -1. TICK.
```
**Tangent 3x + 5y = 25; Normal 25x - 15y = 27**

---

### Q B8
Find the equation of the tangent and the normal to `9x^2 + 16y^2 = 144` at the point
whose eccentric angle is `60°`.

**ANSWER:**
```
        x^2/16 + y^2/9 = 1   ->   a = 4 , b = 3

        POINT  =  ( 4 cos60 , 3 sin60 )  =  ( 2 , 3 sqrt(3)/2 )

  TANGENT  ( x cos th )/a + ( y sin th )/b = 1 :

        x ( 1/2 ) / 4   +   y ( sqrt3/2 ) / 3   =   1
             x/8        +   sqrt(3) y / 6       =   1
        Multiply by 24 :      3 x  +  4 sqrt(3) y  =  24

  NORMAL   a x sec th - b y cosec th = a^2 - b^2 :

        4 x ( 2 )  -  3 y ( 2/sqrt3 )  =  16 - 9 = 7
        8 x  -  2 sqrt(3) y  =  7

  CHECKS: tangent at ( 2 , 3 sqrt3/2 ): 6 + 4 sqrt3 * 3 sqrt3 / 2 = 6 + 18 = 24. TICK.
          normal  at the same point   : 16 - 2 sqrt3 * 3 sqrt3/2 = 16 - 9 = 7. TICK.
```
**Tangent 3x + 4 sqrt(3) y = 24; Normal 8x - 2 sqrt(3) y = 7**

---

### Q B9
Find the equations of the tangents to `2x^2 + y^2 = 8` which are
(i) parallel to `x - 2y - 4 = 0`, (ii) perpendicular to `x + y + 2 = 0`.

**ANSWER:**
```
        Divide by 8:      x^2/4  +  y^2/8  =  1

        Here the denominator under x^2 is 4 and under y^2 is 8, so the tangency
        condition for y = m x + c is        c^2  =  4 m^2  +  8

  (i) PARALLEL to x - 2y - 4 = 0 , whose slope is 1/2 :

        m = 1/2  ->  c^2 = 4 (1/4) + 8 = 9  ->  c = ± 3

        y = x/2 + 3   and   y = x/2 - 3
        i.e.   x - 2 y + 6 = 0    and    x - 2 y - 6 = 0

  (ii) PERPENDICULAR to x + y + 2 = 0 , whose slope is -1.
       A line perpendicular to slope -1 has slope m = +1.

        m = 1  ->  c^2 = 4 (1) + 8 = 12  ->  c = ± 2 sqrt(3)

        y = x ± 2 sqrt(3)     i.e.    x - y ± 2 sqrt(3) = 0

  CHECK (i): c = 3 , 4m^2 + 8 = 1 + 8 = 9 = c^2. TICK.
  CHECK (ii): c^2 = 12 , 4(1) + 8 = 12. TICK.
```
**(i) x - 2y ± 6 = 0  (ii) x - y ± 2 sqrt(3) = 0**

---

### Q B10
Find the equations of the tangents drawn to `x^2/9 + y^2/4 = 1` from the point `(1, 2)`,
and hence write the chord of contact.

**ANSWER:**
```
  STEP 1 — check that (1,2) is outside:
        S11 = 1/9 + 4/4 - 1 = 1/9 > 0.  OUTSIDE, so two tangents exist. TICK.

  STEP 2 — line through (1,2):  y = m x + ( 2 - m )  , so c = 2 - m.

        c^2 = a^2 m^2 + b^2
        ( 2 - m )^2 = 9 m^2 + 4
        4 - 4m + m^2 = 9 m^2 + 4
        8 m^2 + 4 m = 0
        4 m ( 2 m + 1 ) = 0     ->    m = 0    or    m = -1/2

  STEP 3 —
        m = 0    :  y = 2
        m = -1/2 :  y = -x/2 + 5/2    ->    x + 2 y = 5

  STEP 4 — CHORD OF CONTACT  T = 0 :
        x/9 + 2y/4 = 1   ->   x/9 + y/2 = 1   ->   2 x + 9 y = 18

  CHECKS: contact points are ( 0 , 2 ) and ( 9/5 , 8/5 ).
        2(0) + 9(2)     = 18. TICK.
        2(9/5) + 9(8/5) = 18/5 + 72/5 = 18. TICK.
```
**Tangents y = 2 and x + 2y = 5; chord of contact 2x + 9y = 18**

---

### Q B11
Find the equation of the chord of `x^2/25 + y^2/16 = 1` whose midpoint is `(2, 1)`.

**ANSWER:**
```
        Use  T = S11 :

        x (2)/25  +  y (1)/16   =   (2)^2/25  +  (1)^2/16

        2x/25  +  y/16   =   4/25  +  1/16

        Multiply everything by 400 :

        32 x  +  25 y   =   64  +  25   =   89

  CHECK: substituting y = (89 - 32x)/25 into 16x^2 + 25y^2 = 400 gives
        1424 x^2 - 5696 x - 2079 = 0 ,
        whose roots add to 5696/1424 = 4 , so their midpoint has x = 2. TICK.
```
**32x + 25y = 89**

---

### Q B12
Find the equation of the normal to `x^2/9 + y^2/4 = 1` at `(3/sqrt 2, sqrt 2)`.

**ANSWER:**
```
  CHECK the point is on the curve: (9/2)/9 + 2/4 = 1/2 + 1/2 = 1. TICK.

        a^2 = 9 , b^2 = 4 ,  a^2 - b^2 = 5

        a^2 x / x1  -  b^2 y / y1  =  a^2 - b^2

        9 x / ( 3/sqrt2 )   -   4 y / sqrt(2)   =   5

        3 sqrt(2) x   -   2 sqrt(2) y   =   5

  CHECK: 3 sqrt2 (3/sqrt2) - 2 sqrt2 (sqrt2) = 9 - 4 = 5. TICK.
```
**3 sqrt(2) x - 2 sqrt(2) y = 5**

---

### Q B13
If a tangent to the ellipse `x^2/a^2 + y^2/b^2 = 1` meets the major axis at `M` and the
minor axis at `N`, prove that

```
        a^2       b^2
       -----  +  -----   =   1
       C M^2     C N^2
```
where `C` is the centre.

**ANSWER:**
```
        Take the tangent at the parametric point theta :

              x cos th       y sin th
              --------  +    --------   =   1
                 a               b

  Where does it meet the x-axis?  Put y = 0 :

              x cos th / a = 1     ->     x =  a / cos th
                                          C M = a / cos theta

  Where does it meet the y-axis?  Put x = 0 :

              y sin th / b = 1     ->     y =  b / sin th
                                          C N = b / sin theta

  Therefore

         a^2        b^2         a^2                b^2
       -------  +  -------  =  ------------  +  -------------
        C M^2       C N^2      a^2/cos^2 th     b^2/sin^2 th

                            =  cos^2 theta  +  sin^2 theta   =   1     PROVED
```

---

### Q B14
Prove that the sum of the focal distances of any point on the ellipse is constant and
equal to the length of the major axis.

**ANSWER:**
```
        Take P ( x1 , y1 ) on   x^2/a^2 + y^2/b^2 = 1 ,  a > b.

        FOCUS  S  = ( a e , 0 )   with directrix  x = a/e
        FOCUS  S' = ( -a e , 0 )  with directrix  x = -a/e

        By the definition of a conic,   S P = e * ( distance from P to its directrix )

        S P   =  e ( a/e  -  x1 )  =  a  -  e x1
        S' P  =  e ( x1  +  a/e )  =  a  +  e x1

        Adding:

        S P  +  S' P   =   ( a - e x1 )  +  ( a + e x1 )   =   2 a

        which is the LENGTH OF THE MAJOR AXIS, and does not depend on the
        position of P.                                              PROVED
```

---

### Q B15
Prove that the product of the perpendicular distances from the two foci to any tangent
of the ellipse is `b^2`.

**ANSWER:**
```
        Let the tangent be  y = m x + c , with  c^2 = a^2 m^2 + b^2 ,
        written as   m x  -  y  +  c  =  0.

        Perpendicular from S ( a e , 0 ) :

                    | m a e  +  c |
             p1 =  ------------------
                     sqrt( m^2 + 1 )

        Perpendicular from S' ( -a e , 0 ) :

                    | - m a e  +  c |
             p2 =  --------------------
                     sqrt( m^2 + 1 )

                       | c^2  -  m^2 a^2 e^2 |
             p1 p2 =  -------------------------
                              m^2 + 1

        Now  a^2 e^2 = a^2 - b^2   and   c^2 = a^2 m^2 + b^2 , so

             c^2 - m^2 ( a^2 - b^2 )  =  a^2 m^2 + b^2 - a^2 m^2 + b^2 m^2
                                      =  b^2 ( 1 + m^2 )

                       b^2 ( 1 + m^2 )
             p1 p2 =  -----------------   =   b^2                   PROVED
                          1 + m^2
```

---

### Q B16
Find the equation of the chord of `x^2/16 + y^2/9 = 1` joining the points whose
eccentric angles are `60°` and `0°`.

**ANSWER:**
```
        a = 4 , b = 3 ,  ( alpha + beta )/2 = 30° ,  ( alpha - beta )/2 = 30°

         x               y
        --- cos30°  +   --- sin30°   =   cos30°
         4               3

         x  sqrt(3)       y ( 1/2 )        sqrt(3)
        -----------  +   ----------   =   ---------
           4 * 2              3               2

        Multiply everything by 24 :

        3 sqrt(3) x   +   4 y   =   12 sqrt(3)

  CHECK the point beta = 0 , i.e. ( 4 , 0 ) :  3 sqrt3 (4) = 12 sqrt3. TICK.
  CHECK the point alpha = 60°, i.e. ( 2 , 3 sqrt3/2 ) :
        3 sqrt3 (2) + 4 (3 sqrt3/2) = 6 sqrt3 + 6 sqrt3 = 12 sqrt3. TICK.
```
**3 sqrt(3) x + 4y = 12 sqrt(3)**

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Seven are set, you answer any five. Ellipse usually supplies one.
# ===============================================================

### Q C1  (the single most-asked long answer in the chapter)
Define an ellipse by the focus-directrix property and **derive its standard equation**
`x^2/a^2 + y^2/b^2 = 1`.

**MODEL ANSWER (mark split shown):**

```
  ---- DEFINITION  (1 mark) ------------------------------------------------

  An ELLIPSE is the locus of a point P that moves so that its distance from a
  fixed point S (the FOCUS) bears a constant ratio e, with 0 < e < 1, to its
  perpendicular distance from a fixed straight line (the DIRECTRIX) not
  passing through S.

              S P  =  e * P M        with     0 < e < 1

  ---- SETTING UP  (2 marks) -----------------------------------------------

  Let S be the focus, ZM the directrix. Draw SZ perpendicular to the directrix.
  Divide SZ internally at A and externally at A' in the ratio e : 1. Then A and
  A' both satisfy SP = e PM, so both lie on the ellipse.

  Let AA' = 2a and let C be the midpoint of AA'. Take C as the ORIGIN, and CA
  (i.e. the line AA') as the x-axis.

        S A  =  e * A Z          ... (1)
        S A' =  e * A' Z         ... (2)

  ADD (1) and (2):
        S A + S A' = e ( A Z + A' Z )
                A A' = e [ ( C Z - C A ) + ( C Z + C A' ) ]
                 2 a = e ( 2 C Z )
                                     a
                          C Z  =   -----      so the DIRECTRIX is  x = a/e
                                     e

  SUBTRACT (1) from (2):
        S A' - S A = e ( A' Z - A Z )
        ( C A' + C S ) - ( C A - C S ) = e ( A A' )
                       2 C S = e ( 2 a )
                          C S = a e          so the FOCUS is  ( a e , 0 )

  ---- THE DERIVATION  (3 marks) -------------------------------------------

  Let P ( x , y ) be any point on the ellipse and PM the perpendicular from P
  to the directrix x = a/e. Then

        S P  =  e * P M

        sqrt( ( x - a e )^2 + y^2 )   =   e | a/e - x |

  Squaring:

        ( x - a e )^2 + y^2   =   e^2 ( a/e - x )^2   =   ( a - e x )^2

        x^2 - 2 a e x + a^2 e^2 + y^2   =   a^2 - 2 a e x + e^2 x^2

        x^2 ( 1 - e^2 )  +  y^2   =   a^2 ( 1 - e^2 )

  Divide by a^2 ( 1 - e^2 ) , which is POSITIVE because e < 1 :

              x^2               y^2
             -----   +   ---------------   =   1
              a^2         a^2 ( 1 - e^2 )

  ---- FINISHING  (1 mark) -------------------------------------------------

  Write   b^2  =  a^2 ( 1 - e^2 )  ( b^2 > 0 ). Then

              x^2      y^2
              ---  +   ---   =   1
              a^2      b^2

  which is the STANDARD EQUATION of the ellipse, with

        Centre ( 0 , 0 ) , vertices ( ±a , 0 ) , foci ( ±a e , 0 ) ,
        directrices x = ± a/e , latus rectum 2 b^2 / a .
```

---

### Q C2  (the second most-asked long answer)
Find the centre, vertices, eccentricity, foci, equations of the directrices and the
length of the latus rectum of the ellipse
`9x^2 + 16y^2 - 36x + 32y - 92 = 0`.

**MODEL ANSWER:**

```
  ---- STEP 1: group and factor out  (1 mark) ------------------------------

        9 ( x^2 - 4 x )   +   16 ( y^2 + 2 y )   =   92

  ---- STEP 2: complete the square  (2 marks) ------------------------------

        x^2 - 4x = ( x - 2 )^2 - 4
        y^2 + 2y = ( y + 1 )^2 - 1

        9 [ ( x - 2 )^2 - 4 ]  +  16 [ ( y + 1 )^2 - 1 ]  =  92

        9 ( x - 2 )^2  -  36  +  16 ( y + 1 )^2  -  16   =   92

        9 ( x - 2 )^2  +  16 ( y + 1 )^2   =   144

  ---- STEP 3: divide to make the RHS 1  (1 mark) --------------------------

              ( x - 2 )^2       ( y + 1 )^2
              -----------   +   -----------   =   1
                   16                 9

  ---- STEP 4: identify  (1 mark) ------------------------------------------

        h = 2 , k = -1 .   16 > 9 and 16 is under x , so the MAJOR AXIS is
        HORIZONTAL.        a = 4 , b = 3.

        e^2 = 1 - b^2/a^2 = 1 - 9/16 = 7/16      ->      e = sqrt(7)/4

        a e = 4 * sqrt(7)/4 = sqrt(7)
        a/e = 4 / ( sqrt(7)/4 ) = 16/sqrt(7)

  ---- STEP 5: write every element  (2 marks) ------------------------------

        CENTRE            ( 2 , -1 )
        VERTICES          ( 2 + 4 , -1 ) = ( 6 , -1 )
                          ( 2 - 4 , -1 ) = ( -2 , -1 )
        ENDS OF MINOR     ( 2 , -1 + 3 ) = ( 2 , 2 )
                          ( 2 , -1 - 3 ) = ( 2 , -4 )
        ECCENTRICITY      sqrt(7) / 4
        FOCI              ( 2 + sqrt7 , -1 )  and  ( 2 - sqrt7 , -1 )
        DIRECTRICES       x = 2 + 16/sqrt(7)   and   x = 2 - 16/sqrt(7)
        MAJOR AXIS        y = -1 , length 2a = 8
        MINOR AXIS        x =  2 , length 2b = 6
        LATUS RECTUM      2 b^2 / a = 2 (9) / 4 = 9/2

  ---- CHECK ---------------------------------------------------------------

        Substitute the vertex ( 6 , -1 ) into the original equation:
        9(36) + 16(1) - 36(6) + 32(-1) - 92
             = 324 + 16 - 216 - 32 - 92  =  0.   TICK.
```

---

### Q C3
Find all the elements (centre, vertices, foci, eccentricity, directrices, latus rectum)
of the ellipse `3x^2 + y^2 - 6x - 2y - 5 = 0`.

**MODEL ANSWER:**

```
        3 ( x^2 - 2x )  +  ( y^2 - 2y )  =  5

        3 [ ( x - 1 )^2 - 1 ]  +  [ ( y - 1 )^2 - 1 ]  =  5

        3 ( x - 1 )^2  -  3  +  ( y - 1 )^2  -  1  =  5

        3 ( x - 1 )^2  +  ( y - 1 )^2  =  9

              ( x - 1 )^2       ( y - 1 )^2
              -----------   +   -----------   =   1
                   3                  9

        9 > 3 and 9 is under y  ->  MAJOR AXIS IS VERTICAL ( the line x = 1 ).

        a^2 = 9 -> a = 3  (semi-major)
        b^2 = 3 -> b = sqrt(3)  (semi-minor)

        e^2 = 1 - b^2/a^2 = 1 - 3/9 = 2/3

                       sqrt(6)
        e = sqrt(2/3) = -------  ( about 0.816 )
                          3

        a e = 3 * sqrt(6)/3 = sqrt(6)
        a/e = 3 / ( sqrt6/3 ) = 9/sqrt(6) = 3 sqrt(6) / 2

        CENTRE            ( 1 , 1 )
        VERTICES          ( 1 , 4 )  and  ( 1 , -2 )
        ENDS OF MINOR     ( 1 + sqrt3 , 1 )  and  ( 1 - sqrt3 , 1 )
        FOCI              ( 1 , 1 + sqrt6 )  and  ( 1 , 1 - sqrt6 )
        ECCENTRICITY      sqrt(6) / 3
        DIRECTRICES       y = 1 + 3 sqrt(6)/2   and   y = 1 - 3 sqrt(6)/2
        MAJOR AXIS        x = 1 , length 6
        MINOR AXIS        y = 1 , length 2 sqrt(3)
        LATUS RECTUM      2 b^2 / a  =  2 (3) / 3  =  2
        AREA              pi a b = 3 sqrt(3) pi

  CHECK: vertex ( 1 , 4 ) in the original:
        3(1) + 16 - 6 - 8 - 5  =  0.  TICK.
        e = 0.816 lies in ( 0 , 1 ). TICK.
        LR = 2 < 2a = 6. TICK.
```

---

### Q C4
Derive the condition for the line `y = mx + c` to be a tangent to the ellipse
`x^2/a^2 + y^2/b^2 = 1`, find the point of contact, and hence find the tangents drawn
from `(1, 2)` to `x^2/9 + y^2/4 = 1`.

**MODEL ANSWER:**

```
  ---- PART 1: THE CONDITION  (3 marks) ------------------------------------

  Substitute y = m x + c into the ellipse:

        x^2/a^2  +  ( m x + c )^2 / b^2  =  1

  Multiply by a^2 b^2 :

        b^2 x^2  +  a^2 ( m x + c )^2  =  a^2 b^2

        ( b^2 + a^2 m^2 ) x^2  +  2 a^2 m c x  +  a^2 ( c^2 - b^2 )  =  0  ...(*)

  This quadratic has EQUAL roots when the line is a tangent, so put its
  discriminant equal to zero:

        ( 2 a^2 m c )^2  -  4 ( b^2 + a^2 m^2 ) a^2 ( c^2 - b^2 )  =  0

              a^2 m^2 c^2  =  ( b^2 + a^2 m^2 )( c^2 - b^2 )

              a^2 m^2 c^2  =  b^2 c^2 - b^4 + a^2 m^2 c^2 - a^2 m^2 b^2

                       0   =  b^2 ( c^2 - b^2 - a^2 m^2 )

  Since b != 0 ,

              +-----------------------------+
              |     c^2  =  a^2 m^2 + b^2   |
              +-----------------------------+

  and the tangents of slope m are    y = m x ± sqrt( a^2 m^2 + b^2 ).

  ---- PART 2: THE POINT OF CONTACT  (2 marks) -----------------------------

  When the roots of (*) are equal, each root is

                - 2 a^2 m c              a^2 m c          a^2 m
        x  =  --------------------  =  - -----------  =  - -----
              2 ( b^2 + a^2 m^2 )        b^2 + a^2 m^2       c

  (using b^2 + a^2 m^2 = c^2 ), and then

        y = m x + c = - a^2 m^2 / c + c = ( c^2 - a^2 m^2 ) / c = b^2 / c

              +----------------------------------------+
              |   POINT OF CONTACT  ( -a^2 m/c , b^2/c )|
              +----------------------------------------+

  ---- PART 3: TANGENTS FROM (1, 2)  (2 marks) -----------------------------

  First, ( 1 , 2 ) is OUTSIDE, because S11 = 1/9 + 4/4 - 1 = 1/9 > 0.

  A line through ( 1 , 2 ) is    y = m x + ( 2 - m ) ,  so  c = 2 - m.

        c^2 = a^2 m^2 + b^2
        ( 2 - m )^2 = 9 m^2 + 4
        4 - 4 m + m^2 = 9 m^2 + 4
        8 m^2 + 4 m = 0
        4 m ( 2 m + 1 ) = 0        ->      m = 0    or    m = -1/2

        m = 0     ->   c = 2      ->   y = 2
        m = -1/2  ->   c = 5/2    ->   x + 2 y = 5

  CHECKS: for m = 0 , a^2m^2 + b^2 = 4 = c^2. TICK.
          for m = -1/2 , 9/4 + 4 = 25/4 = ( 5/2 )^2. TICK.
          Points of contact: ( 0 , 2 ) and ( 9/5 , 8/5 ), both on the ellipse:
                0/9 + 4/4 = 1 TICK ;  (81/25)/9 + (64/25)/4 = 9/25 + 16/25 = 1 TICK.
```

---

### Q C5
Show that the locus of the point of intersection of two **perpendicular** tangents to
the ellipse `x^2/a^2 + y^2/b^2 = 1` is the circle `x^2 + y^2 = a^2 + b^2`
(the **director circle**).

**MODEL ANSWER:**

```
  ---- SET UP  (2 marks) ---------------------------------------------------

  Let P ( h , k ) be the point from which the two tangents are drawn.
  Any line through P with slope m is

        y - k  =  m ( x - h )      i.e.      y = m x + ( k - m h )

  so its intercept is   c = k - m h.

  ---- IMPOSE TANGENCY  (2 marks) ------------------------------------------

  This line touches the ellipse when  c^2 = a^2 m^2 + b^2 :

        ( k - m h )^2  =  a^2 m^2  +  b^2

        k^2  -  2 m h k  +  m^2 h^2   =   a^2 m^2  +  b^2

        m^2 ( h^2 - a^2 )  -  2 h k m  +  ( k^2 - b^2 )   =   0        ...(#)

  This is a QUADRATIC IN m. Its two roots m1 , m2 are the slopes of the two
  tangents that can be drawn from P.

  ---- IMPOSE PERPENDICULARITY  (2 marks) ----------------------------------

  From (#),

                          k^2 - b^2
        m1 * m2   =   ---------------
                          h^2 - a^2

  The two tangents are perpendicular exactly when  m1 m2 = -1 :

              k^2 - b^2
            -------------  =  -1
              h^2 - a^2

              k^2 - b^2  =  -( h^2 - a^2 )  =  a^2 - h^2

              h^2  +  k^2   =   a^2  +  b^2

  ---- CONCLUSION  (1 mark) ------------------------------------------------

  Replacing ( h , k ) by ( x , y ), the locus is

              +---------------------------------+
              |    x^2  +  y^2  =  a^2  +  b^2  |
              +---------------------------------+

  a circle with centre at the centre of the ellipse and radius sqrt(a^2 + b^2).
  It is called the DIRECTOR CIRCLE of the ellipse.

  ---- NUMERICAL CHECK -----------------------------------------------------

  For x^2/16 + y^2/9 = 1 the director circle is x^2 + y^2 = 25.
  Take the point ( 5 , 0 ) on it. Then c = -5m and 25m^2 = 16m^2 + 9,
  so m^2 = 1 and m = ±1. The two slopes multiply to -1. TICK.
```

---

### Q C6
Show that the equation of the chord of the ellipse joining the points with eccentric
angles `alpha` and `beta` is

```
    x        alpha+beta        y        alpha+beta            alpha-beta
   --- cos( ------------ ) +  --- sin( ------------ )  =  cos( ---------- )
    a            2             b            2                       2
```

and deduce (i) the equation of the tangent at `alpha`, and (ii) the condition for the
chord to be a **focal chord** through `S(ae, 0)`.

**MODEL ANSWER:**

```
  ---- THE CHORD  (3 marks) ------------------------------------------------

  The two points are    P = ( a cos alpha , b sin alpha )
                        Q = ( a cos beta  , b sin beta  )

  Let L be the line whose equation is the one stated. Substitute the coordinates
  of P into its left-hand side:

        cos alpha * cos( (alpha+beta)/2 )  +  sin alpha * sin( (alpha+beta)/2 )

              = cos [ alpha  -  ( alpha + beta )/2 ]      [ cos(A-B) formula ]

              = cos [ ( alpha - beta ) / 2 ]

  which is exactly the right-hand side. So P lies on L.

  Substituting Q in the same way:

        cos beta * cos( (alpha+beta)/2 )  +  sin beta * sin( (alpha+beta)/2 )

              = cos [ beta - ( alpha + beta )/2 ]
              = cos [ ( beta - alpha ) / 2 ]
              = cos [ ( alpha - beta ) / 2 ]        ( cosine is even )

  so Q lies on L too. A straight line through both P and Q IS the chord PQ.  QED

  ---- (i) THE TANGENT AT alpha  (2 marks) ---------------------------------

  Let beta -> alpha . Then ( alpha + beta )/2 -> alpha and
  ( alpha - beta )/2 -> 0 , so cos( (alpha-beta)/2 ) -> 1 and the chord becomes

              x cos alpha       y sin alpha
              -----------  +    -----------   =   1
                   a                 b

  which is the TANGENT at the point alpha.

  ---- (ii) FOCAL CHORD CONDITION  (2 marks) -------------------------------

  The chord passes through S ( a e , 0 ) when

        e cos( (alpha+beta)/2 )  +  0   =   cos( (alpha-beta)/2 )

  Write  C = cos(alpha/2) cos(beta/2)  and  S = sin(alpha/2) sin(beta/2). Then

        cos( (alpha-beta)/2 ) = C + S ,   cos( (alpha+beta)/2 ) = C - S

        e ( C - S )  =  C + S
        C ( e - 1 )  =  S ( e + 1 )

              alpha        beta         e - 1
        tan( ------ ) tan( ---- )  =   -------
               2            2           e + 1

  Because e < 1 the right-hand side is NEGATIVE — a quick sign check.
  For the other focus S'( -a e , 0 ) the right-hand side becomes ( e+1 )/( e-1 ).
```

---

### Q C7
Define **conjugate diameters** of an ellipse. Prove that (i) the product of the slopes
of two conjugate diameters is `-b^2/a^2`, (ii) the sum of the squares of two conjugate
**semi-diameters** is constant and equal to `a^2 + b^2`.

**MODEL ANSWER:**

```
  ---- DEFINITION  (1 mark) ------------------------------------------------

  A DIAMETER of an ellipse is any chord that passes through the centre. Two
  diameters are CONJUGATE if each one bisects all the chords parallel to the
  other.

  ---- (i) THE SLOPE CONDITION  (3 marks) ----------------------------------

  Consider all chords parallel to the diameter y = m2 x. Let one such chord have
  midpoint ( x1 , y1 ). By the midpoint-chord result T = S11 its equation is

        x x1 / a^2  +  y y1 / b^2   =   x1^2/a^2  +  y1^2/b^2

  whose slope is    -  b^2 x1 / ( a^2 y1 ) .

  Because the chord is parallel to y = m2 x ,

        -  b^2 x1 / ( a^2 y1 )  =  m2                              ...(1)

  The locus of these midpoints is the conjugate diameter y = m1 x , so

        m1  =  y1 / x1                                             ...(2)

  From (1):    y1 / x1  =  -  b^2 / ( a^2 m2 )

  Comparing with (2):

              m1  =  -  b^2 / ( a^2 m2 )

              +-----------------------------+
              |    m1 * m2  =  - b^2 / a^2  |
              +-----------------------------+

  ---- (ii) SUM OF SQUARES  (3 marks) --------------------------------------

  Let P be an end of one diameter, with eccentric angle theta :

        P  =  ( a cos theta , b sin theta )

  Claim: the end D of the CONJUGATE diameter has eccentric angle theta + 90°,
  i.e.  D = ( -a sin theta , b cos theta ). Check the slope condition:

        slope of CP  =  ( b sin th ) / ( a cos th )
        slope of CD  =  ( b cos th ) / ( -a sin th )

        product      =  -  b^2 / a^2                       TICK, they are conjugate.

  Now

        C P^2  =  a^2 cos^2 th  +  b^2 sin^2 th
        C D^2  =  a^2 sin^2 th  +  b^2 cos^2 th
        ---------------------------------------------------
        C P^2 + C D^2  =  a^2 ( cos^2 th + sin^2 th )  +  b^2 ( sin^2 th + cos^2 th )

                       =  a^2  +  b^2          which is CONSTANT.       PROVED

  ---- NUMERICAL CHECK -----------------------------------------------------

  For x^2/16 + y^2/9 = 1 take the diameter y = 2x. Then m2 = -9/32.
  End of y = 2x :  x^2/16 + 4x^2/9 = 1  ->  x^2 = 144/73 , CP^2 = 5x^2 = 720/73.
  End of y = -9x/32 : x^2/16 + 9x^2/1024 = 1 -> x^2 = 1024/73 ,
                      CD^2 = x^2 (1105/1024) = 1105/73.
  SUM = ( 720 + 1105 )/73 = 1825/73 = 25 = 16 + 9. TICK.
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Chance of appearing |
|---|---|---|---|
| 1 | Reduce a general equation to standard form and find centre, vertices, foci, e, directrices, LR | **C (7M)** | very high |
| 2 | Find e / foci / directrices / LR of a clean standard form | A (2M) | very high |
| 3 | Find the equation of an ellipse from a focus, a directrix and e | B (4M) or C (7M) | high |
| 4 | Derive `x^2/a^2 + y^2/b^2 = 1` from the focus-directrix definition | C (7M) | high |
| 5 | Tangent and/or normal at a given point or at a given eccentric angle | B (4M) | high |
| 6 | Condition `c^2 = a^2m^2 + b^2`; tangents with a given slope or from a point | A (2M) or C (7M) | high |
| 7 | Find the equation of an ellipse from two given conditions (LR, foci, e, a point) | A (2M) or B (4M) | high |
| 8 | Prove `SP + S'P = 2a` | B (4M) | medium-high |
| 9 | Chord with a given midpoint (`T = S11`), chord of contact, pole and polar | B (4M) | medium |
| 10 | Director circle: locus of perpendicular tangents | C (7M) | medium |
| 11 | Chord joining two eccentric angles, focal chord condition | B (4M) or C (7M) | medium |
| 12 | Conjugate diameters: `m1m2 = -b^2/a^2`, `CP^2 + CD^2 = a^2 + b^2` | C (7M) | medium-low |
| 13 | Product of perpendiculars from the foci to a tangent `= b^2` | B (4M) | medium-low |
| 14 | Position of a point using `S11`, area `pi a b` | A (2M) | low but free |

```
  +--------------------------------------------------------------------------+
  |  THE MINIMUM YOU MUST BE ABLE TO DO ON EXAM DAY                          |
  |                                                                          |
  |  1. Divide any given equation until the right-hand side is 1, decide     |
  |     which axis is major, and write down e, foci, directrices and LR.     |
  |  2. Complete the square on a general equation and do the same thing.     |
  |  3. Write the derivation of x^2/a^2 + y^2/b^2 = 1 from memory.           |
  |  4. Write the tangent and the normal at (x1,y1) and at theta.            |
  |  5. Use c^2 = a^2 m^2 + b^2 both ways round.                             |
  |                                                                          |
  |  Those five skills cover Ranks 1-7 above — roughly 11 of the 75 marks.   |
  +--------------------------------------------------------------------------+
```
