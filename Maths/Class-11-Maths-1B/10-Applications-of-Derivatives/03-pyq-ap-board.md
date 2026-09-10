# Applications of Derivatives — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IB · **Chapter 10 — Applications of Derivatives**

> **About the year tags:** BIEAP recycles the same questions across many
> sessions, and the same problem often appears as a 2-mark question one year and
> a 4-mark question the next. So the questions below are grouped by
> **"how often they appear"**, NOT tagged to one exact year. Before your exam,
> cross-check with the official question papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IB paper (75 marks):**

```
  +-------------------------------------------------------------------------+
  |  SECTION A   10 questions x 2 marks = 20     ANSWER ALL                 |
  |              -> this chapter usually supplies Q9 and/or Q10             |
  |                 (errors/approximations, slope, rate of change)          |
  +-------------------------------------------------------------------------+
  |  SECTION B    7 questions x 4 marks = 28     ANSWER ANY 5               |
  |              -> this chapter usually supplies Q16 or Q17                |
  |                 (related rates, Rolle/Lagrange, angle between curves)   |
  +-------------------------------------------------------------------------+
  |  SECTION C    7 questions x 7 marks = 49     ANSWER ANY 5               |
  |              -> this chapter usually supplies Q23 or Q24                |
  |                 (APPLIED MAXIMA AND MINIMA - almost every year)         |
  +-------------------------------------------------------------------------+
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. You must answer all 10.
# ===============================================================

## Topic: Errors, differentials and approximations

### Q A1
Find delta y and dy for y = x^2 + 3x + 6 when x = 10 and delta x = 0.01.

**ANSWER:**
```
  ACTUAL change
     f(10)    = 100 + 30 + 6           = 136
     f(10.01) = 100.2001 + 30.03 + 6   = 136.2301
     delta y  = 136.2301 - 136         = 0.2301

  APPROXIMATE change
     dy/dx = 2x + 3  ->  at x = 10 :  23
     dy    = 23 x 0.01 = 0.23
```
**delta y = 0.2301 , dy = 0.23**

---

### Q A2
Find the approximate value of sqrt(82).

**ANSWER:**
```
  f(x) = sqrt(x) ,  x = 81 ,  dx = 1

                1            1        1
  f'(81) =  ---------  =  ------  =  ----
             2 sqrt 81     2 x 9      18

  sqrt(82)  ~  9 + (1/18)(1)  =  9 + 0.0556  =  9.0556
```

---

### Q A3
Find the approximate value of the cube root of 999.

**ANSWER:**
```
  f(x) = x^(1/3) ,  x = 1000 ,  dx = 999 - 1000 = -1

                    1                1          1
  f'(1000) =  ---------------  =  --------  =  -----
               3 (1000)^(2/3)     3 x 100       300

  cbrt(999)  ~  10 + (1/300)(-1)  =  10 - 0.00333  =  9.99667
```

---

### Q A4
Find the approximate value of sqrt(26).

**ANSWER:**
```
  x = 25 , dx = 1 ,  f'(25) = 1/(2 x 5) = 1/10 = 0.1

  sqrt(26)  ~  5 + 0.1  =  5.1
```

---

### Q A5
The side of a square is measured as 10 cm with an error of 0.01 cm.
Find the approximate error in its area.

**ANSWER:**
```
  A = x^2 ,   dA/dx = 2x = 20

  dA = 20 x 0.01 = 0.2 square cm
```

---

### Q A6
The radius of a sphere is measured as 9 cm with an error of 0.03 cm.
Find the approximate error in its volume.

**ANSWER:**
```
  V = (4/3) pi r^3   ->   dV/dr = 4 pi r^2 = 4 pi (81) = 324 pi

  dV = 324 pi x 0.03 = 9.72 pi  =  30.55 cubic cm     (pi = 22/7)
```

---

### Q A7
If the side of a cube is measured with a percentage error of 0.1 %, find the
percentage error in its volume.

**ANSWER:**
```
  V = x^3 ,  so  (dV/V) = 3 (dx/x)

  percentage error in V = 3 x 0.1 = 0.3 %
```

---

## Topic: Rate of change

### Q A8
The radius of a circle increases at the rate of 0.7 cm/s. Find the rate of
increase of its circumference.

**ANSWER:**
```
  C = 2 pi r
  dC/dt = 2 pi (dr/dt) = 2 pi (0.7) = 1.4 pi cm/s
```

---

### Q A9
The side of a square increases at 0.2 cm/s. Find the rate of increase of its
area when the side is 10 cm.

**ANSWER:**
```
  A = x^2
  dA/dt = 2x (dx/dt) = 2(10)(0.2) = 4 square cm per second
```

---

### Q A10
A particle moves in a straight line so that s = 16t - 2t^2 metres after
t seconds. Find its displacement and velocity at t = 2 s.

**ANSWER:**
```
  Displacement:  s(2) = 32 - 8 = 24 m

  v = ds/dt = 16 - 4t   ->   v(2) = 16 - 8 = 8 m/s
```

---

### Q A11
A stone dropped into still water produces circular waves whose radius grows at
5 cm/s. Find the rate of increase of the area when the radius is 8 cm.

**ANSWER:**
```
  A = pi r^2
  dA/dt = 2 pi r (dr/dt) = 2 pi (8)(5) = 80 pi square cm per second
```

---

## Topic: Slope, tangent, normal

### Q A12
Find the slope of the tangent to the curve y = 3x^4 - 4x at x = 4.

**ANSWER:**
```
  dy/dx = 12x^3 - 4
  At x = 4 :  12(64) - 4 = 768 - 4 = 764
```

---

### Q A13
Find the slope of the tangent to y = x^3 - x + 1 at the point whose
x-coordinate is 2.

**ANSWER:**
```
  dy/dx = 3x^2 - 1   ->   at x = 2 :  12 - 1 = 11
```

---

### Q A14
Find the equation of the tangent to the curve y^2 = 8x at the point (2, 4).

**ANSWER:**
```
  2y (dy/dx) = 8   ->   dy/dx = 4/y   ->   at (2,4) :  m = 4/4 = 1

  y - 4 = 1 (x - 2)     ->     x - y + 2 = 0
```

---

### Q A15
Find the point on the curve y = x^2 - 2x + 3 at which the tangent is parallel
to the x-axis.

**ANSWER:**
```
  Parallel to x-axis means  dy/dx = 0

  2x - 2 = 0   ->   x = 1
  y = 1 - 2 + 3 = 2

  The point is (1, 2)
```

---

### Q A16
Find the slope of the normal to the curve x = a cos^3 t , y = a sin^3 t
at t = pi/4.

**ANSWER:**
```
  dx/dt = -3a cos^2 t . sin t          dy/dt = 3a sin^2 t . cos t

  dy      3a sin^2 t cos t        sin t
  ---- = --------------------- = - ------ = - tan t
  dx     -3a cos^2 t sin t         cos t

  At t = pi/4 :  m = -tan(pi/4) = -1

  Slope of normal = -1/m = -1/(-1) = 1
```

---

## Topic: Subtangent and subnormal

### Q A17
Find the lengths of the subtangent and the subnormal at the point (1, 2) on the
curve y = 2x^2.

**ANSWER:**
```
  dy/dx = 4x   ->  at x = 1 :  m = 4 ,   y1 = 2

  SUBTANGENT = y1/m  = 2/4 = 1/2
  SUBNORMAL  = y1 . m = 2 x 4 = 8
```

---

### Q A18
Show that the subnormal at any point on the curve y^2 = 4ax is a constant.

**ANSWER:**
```
  2y (dy/dx) = 4a   ->   m = 2a/y

  SUBNORMAL = y . m = y . (2a/y) = 2a

  This does not contain x or y, so it is CONSTANT.
```

---

### Q A19
Find the subnormal at any point on the curve y = x^2.

**ANSWER:**
```
  m = 2x ,  y1 = x^2
  SUBNORMAL = y1 m = x^2 (2x) = 2x^3
```

---

## Topic: Angle between curves

### Q A20
Find the angle between the curves y = x^2 and y = x^3 at the point (1, 1).

**ANSWER:**
```
  Curve 1:  dy/dx = 2x   ->  m1 = 2
  Curve 2:  dy/dx = 3x^2 ->  m2 = 3

              | 2 - 3 |     1
  tan A  =    | ----- |  =  ---
              | 1 + 6 |     7

  A = Tan inverse (1/7)
```

---

## Topic: Rolle's theorem and Lagrange's MVT

### Q A21
Verify Rolle's theorem for f(x) = x^2 - 1 on [-1, 1].

**ANSWER:**
```
  f is a polynomial  ->  continuous on [-1,1] and differentiable on (-1,1).
  f(-1) = 0 ,  f(1) = 0 ,  so f(-1) = f(1).      All conditions hold.

  f'(x) = 2x = 0   ->   c = 0 ,  which lies in (-1, 1).

  Rolle's theorem is verified with c = 0.
```

---

### Q A22
Find the value of c given by Rolle's theorem for f(x) = sin x on [0, pi].

**ANSWER:**
```
  sin 0 = 0 = sin pi , sin x is continuous and differentiable everywhere.

  f'(x) = cos x = 0   ->   c = pi/2 ,  which lies in (0, pi).
```

---

### Q A23
Find c of Lagrange's mean value theorem for f(x) = x^2 on [2, 4].

**ANSWER:**
```
            f(4) - f(2)     16 - 4      12
  f'(c) = --------------- = ------- =  ----  =  6
              4 - 2            2         2

  f'(x) = 2x   ->   2c = 6   ->   c = 3 ,  which lies in (2, 4).
```

---

## Topic: Increasing / decreasing, maxima / minima

### Q A24
Show that f(x) = x^3 + 3x + 5 is increasing for all real x.

**ANSWER:**
```
  f'(x) = 3x^2 + 3 = 3(x^2 + 1)

  x^2 >= 0 for every real x , so x^2 + 1 >= 1 , so f'(x) >= 3 > 0.

  Since f'(x) > 0 everywhere, f is increasing on the whole real line.
```

---

### Q A25
Find the interval on which f(x) = x^2 - 4x is decreasing.

**ANSWER:**
```
  f'(x) = 2x - 4 < 0   ->   x < 2

  Decreasing on  (-infinity , 2)
```

---

### Q A26
Find the minimum value of f(x) = x^2 - 4x + 6.

**ANSWER:**
```
  f'(x) = 2x - 4 = 0    ->   x = 2
  f''(x) = 2 , which is POSITIVE  ->  MINIMUM at x = 2

  Minimum value = f(2) = 4 - 8 + 6 = 2
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks) — answer any 5 of 7
# ===============================================================

### Q B1
If y = x^2 + x and x changes from 10 to 10.1, find delta y and dy, and the
error in the approximation.

**ANSWER:**
```
  x = 10 , dx = 0.1

  ACTUAL
     f(10)   = 100 + 10           = 110
     f(10.1) = 102.01 + 10.1      = 112.11
     delta y = 112.11 - 110       = 2.11

  APPROXIMATE
     dy/dx = 2x + 1   ->  at x = 10 :  21
     dy = 21 x 0.1 = 2.1

  ERROR in the approximation  =  2.11 - 2.10  =  0.01
```
The differential dy under-estimates by only 0.01 — that is why it is used.

---

### Q B2
Find the approximate value of the fourth root of 17.

**ANSWER:**
```
  f(x) = x^(1/4) ,  x = 16  (since 2^4 = 16) ,  dx = 1

               1              1            1           1
  f'(16) = ------------- = --------  =  --------  =  ------
            4 (16)^(3/4)    4 x 8         32            32

  17^(1/4)  ~  2 + (1/32)(1)  =  2 + 0.03125  =  2.03125
```

---

### Q B3
The radius of a sphere is measured as 14 cm with an error of 0.02 cm. Find the
approximate error, the relative error and the percentage error in the volume.
(Take pi = 22/7.)

**ANSWER:**
```
  V = (4/3) pi r^3 ,   r = 14 ,   dr = 0.02

  Step 1   dV/dr = 4 pi r^2 = 4 pi (196) = 784 pi

  Step 2   APPROXIMATE ERROR
              dV = 784 pi x 0.02 = 15.68 pi
                 = 15.68 x 22/7  =  49.28 cubic cm

  Step 3   RELATIVE ERROR
              dV        dr        0.02
             ----  = 3 ----  = 3 ------  =  0.004286
              V         r          14

  Step 4   PERCENTAGE ERROR = 0.004286 x 100 = 0.4286 %  (about 0.43 %)
```

---

### Q B4
A balloon which always remains spherical is being inflated by pumping in
900 cubic cm of gas per second. Find the rate at which the radius of the balloon
increases when the radius is 15 cm.

**ANSWER:**
```
  Step 1   GIVEN dV/dt = 900 .  FIND dr/dt when r = 15.

  Step 2   V = (4/3) pi r^3

  Step 3   dV/dt = 4 pi r^2 . (dr/dt)

  Step 4   900 = 4 pi (15)^2 . (dr/dt)
           900 = 900 pi . (dr/dt)

  Step 5   dr/dt = 1/pi  cm/s   (about 0.318 cm/s)
```

---

### Q B5
A ladder 5 m long leans against a wall. The bottom of the ladder is pulled along
the ground away from the wall at 2 m/s. How fast is the top of the ladder
sliding down the wall when the bottom is 4 m from the wall?

**ANSWER:**
```
                 |\
            wall | \  5 m
                 |  \
               y |   \
                 +----\----
                    x

  Step 1   GIVEN dx/dt = 2 .  FIND dy/dt when x = 4.
           x = 4  =>  y = sqrt(25 - 16) = 3

  Step 2   x^2 + y^2 = 25

  Step 3   2x (dx/dt) + 2y (dy/dt) = 0

  Step 4   2(4)(2) + 2(3)(dy/dt) = 0
           16 + 6 (dy/dt) = 0

  Step 5   dy/dt = -16/6 = -8/3 m/s
```
**The top slides DOWN at 8/3 m/s (about 2.67 m/s).** The minus sign shows the
height is decreasing.

---

### Q B6
Water is poured into an inverted cone of semi-vertical angle 45 degrees at
8 cubic cm per second. Find the rate at which the water level rises when the
depth of the water is 4 cm.

**ANSWER:**
```
  Step 1   Semi-vertical angle 45  =>  r/h = tan 45 = 1  =>  r = h

  Step 2   V = (1/3) pi r^2 h = (1/3) pi h^3

  Step 3   dV/dt = pi h^2 . (dh/dt)

  Step 4   8 = pi (4)^2 . (dh/dt) = 16 pi (dh/dt)

  Step 5   dh/dt = 8 / (16 pi) = 1 / (2 pi)  cm/s
```

---

### Q B7
The volume of a cube is increasing at 9 cubic cm per second. How fast is the
surface area increasing when the edge is 10 cm?

**ANSWER:**
```
  Step 1   V = x^3    ->   dV/dt = 3x^2 (dx/dt)
           9 = 3(100)(dx/dt)   ->   dx/dt = 9/300 = 0.03 cm/s

  Step 2   S = 6x^2   ->   dS/dt = 12x (dx/dt)
           dS/dt = 12(10)(0.03) = 3.6 square cm per second
```

---

### Q B8
Find the equations of the tangent and the normal to the curve y = x^3 + 4x^2
at the point (-1, 3).

**ANSWER:**
```
  Step 1   Verify the point:  (-1)^3 + 4(-1)^2 = -1 + 4 = 3    YES.

  Step 2   dy/dx = 3x^2 + 8x

  Step 3   At x = -1 :  m = 3(1) + 8(-1) = -5

  Step 4   TANGENT   y - 3 = -5(x + 1)
                     y - 3 = -5x - 5
                     5x + y + 2 = 0

           NORMAL    y - 3 = (1/5)(x + 1)
                     5y - 15 = x + 1
                     x - 5y + 16 = 0

  CHECK    (-5) x (1/5) = -1 . The two lines are perpendicular. Correct.
```

---

### Q B9
Find the points on the curve y = x^3 - 3x at which the tangent is parallel to
the line 9x - y + 3 = 0, and write the equations of those tangents.

**ANSWER:**
```
  Step 1   Slope of the given line:  y = 9x + 3  ->  slope = 9

  Step 2   dy/dx = 3x^2 - 3 .  Set equal to 9 :
              3x^2 - 3 = 9
              3x^2 = 12
              x^2 = 4
              x = 2  or  x = -2

  Step 3   x = 2  :  y = 8 - 6 = 2    ->  point (2, 2)
           x = -2 :  y = -8 + 6 = -2  ->  point (-2, -2)

  Step 4   Tangent at (2, 2):    y - 2 = 9(x - 2)   ->  9x - y - 16 = 0
           Tangent at (-2, -2):  y + 2 = 9(x + 2)   ->  9x - y + 16 = 0
```

---

### Q B10
Find the lengths of the subtangent, subnormal, tangent and normal at the point
(2, 3) on the curve y = x^2 - 1.

**ANSWER:**
```
  Step 1   Check the point:  4 - 1 = 3   YES.

  Step 2   dy/dx = 2x   ->   m = 4 ,   y1 = 3

  Step 3   sqrt(1 + m^2) = sqrt(1 + 16) = sqrt(17)

  Step 4   SUBTANGENT       = y1/m         = 3/4

           SUBNORMAL        = y1 . m       = 3 x 4 = 12

                              y1 sqrt(1+m^2)     3 sqrt(17)
           LENGTH OF TANGENT = ---------------- = -----------
                                     m                4

           LENGTH OF NORMAL = y1 sqrt(1+m^2) = 3 sqrt(17)
```

---

### Q B11
Find the angle between the curves y^2 = 4x and x^2 = 4y at the point (4, 4).

**ANSWER:**
```
  Step 1   The point (4,4) satisfies both:  16 = 16 in each. Good.

  Step 2   y^2 = 4x  ->  2y (dy/dx) = 4  ->  dy/dx = 2/y
           At (4,4):  m1 = 2/4 = 1/2

  Step 3   x^2 = 4y  ->  2x = 4 (dy/dx)  ->  dy/dx = x/2
           At (4,4):  m2 = 4/2 = 2

  Step 4              | m1 - m2 |     | (1/2) - 2 |     | -3/2 |     3
           tan A  =   | ------- |  =  | --------- |  =  | ---- |  =  ---
                      | 1+m1 m2 |     | 1 + 1     |     |  2   |     4

           A = Tan inverse (3/4)  , which is about 36 degrees 52 minutes.
```

---

### Q B12
Show that the curves x^2 - y^2 = 5 and 4x^2 + 9y^2 = 72 cut each other
orthogonally.

**ANSWER:**
```
  Step 1   POINT OF INTERSECTION
           From the first curve:  y^2 = x^2 - 5
           Substitute in the second:
                4x^2 + 9(x^2 - 5) = 72
                13x^2 = 117
                x^2 = 9      ->  x = 3 or -3
                y^2 = 4      ->  y = 2 or -2
           Take P(3, 2). (The same working holds at the other three points.)

  Step 2   Curve 1:  2x - 2y (dy/dx) = 0   ->   dy/dx = x/y
                     m1 = 3/2

  Step 3   Curve 2:  8x + 18y (dy/dx) = 0  ->   dy/dx = -4x/(9y)
                     m2 = -4(3)/(9 x 2) = -12/18 = -2/3

  Step 4   m1 . m2 = (3/2)(-2/3) = -1

           Since the product of the slopes is -1, the tangents are
           perpendicular, so the curves cut ORTHOGONALLY.       Proved.
```

---

### Q B13
Verify Rolle's theorem for the function f(x) = x(x + 3) e^(-x/2) on [-3, 0].

**ANSWER:**
```
  CONDITION (i)   f is the product of a polynomial and an exponential,
                  both continuous, so f is continuous on [-3, 0].

  CONDITION (ii)  For the same reason f is differentiable on (-3, 0).

  CONDITION (iii) f(-3) = (-3)(0) e^(3/2) = 0
                  f(0)  = (0)(3) e^0      = 0
                  So f(-3) = f(0).

  All three conditions hold, so Rolle's theorem applies.

  Write f(x) = (x^2 + 3x) e^(-x/2)  and use the product rule:

     f'(x) = (2x + 3) e^(-x/2) + (x^2 + 3x)(-1/2) e^(-x/2)

              e^(-x/2)
           = ---------- [ 2(2x + 3) - (x^2 + 3x) ]
                  2

              e^(-x/2)                          -e^(-x/2)
           = ---------- ( -x^2 + x + 6 )   =  ------------ (x - 3)(x + 2)
                  2                                 2

  e^(-x/2) is never zero, so f'(c) = 0 gives c = 3 or c = -2.

  Only c = -2 lies in (-3, 0).   (c = 3 is rejected.)

  Hence Rolle's theorem is VERIFIED with c = -2.
```

---

### Q B14
Verify Lagrange's mean value theorem for f(x) = (x - 1)(x - 2)(x - 3) on [0, 4].

**ANSWER:**
```
  Expand:  f(x) = x^3 - 6x^2 + 11x - 6

  (i)  Polynomial  ->  continuous on [0, 4].
  (ii) Polynomial  ->  differentiable on (0, 4).      Both conditions hold.

  f(0) = (-1)(-2)(-3) = -6
  f(4) = (3)(2)(1)    =  6

         f(4) - f(0)      6 - (-6)      12
  m  =  -------------  = ----------  = ----  =  3
            4 - 0            4           4

  f'(x) = 3x^2 - 12x + 11 .   Set f'(c) = 3 :

        3c^2 - 12c + 11 = 3
        3c^2 - 12c + 8  = 0

              12 +/- sqrt(144 - 96)      12 +/- sqrt 48        2
        c  =  ----------------------  =  --------------  = 2 +/- ------
                      6                        6                sqrt 3

        c = 2 + 1.1547 = 3.1547     and     c = 2 - 1.1547 = 0.8453

  Both values lie in (0, 4), so LMVT is VERIFIED
  (the theorem only promises at least one such c; here there are two).
```

---

### Q B15
Find the intervals on which f(x) = x^3 - 12x + 5 is increasing and decreasing.

**ANSWER:**
```
  Step 1   f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x - 2)(x + 2)

  Step 2   f'(x) = 0  ->  x = -2 , x = 2

  Step 3   SIGN LINE

                        -2                  2
        ----------------+-------------------+----------------
          x = -3           x = 0               x = 3
          3(-5)(-1)        3(-2)(2)            3(1)(5)
          = +15            = -12               = +15
          POSITIVE         NEGATIVE            POSITIVE
          INCREASING       DECREASING          INCREASING

  Step 4   Increasing on  (-infinity, -2)  and  (2, infinity)
           Decreasing on  (-2, 2)
```

---

### Q B16
Find the local maximum and local minimum values of
f(x) = 2x^3 - 3x^2 - 12x + 5.

**ANSWER:**
```
  Step 1   f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1)
           f'(x) = 0   ->   x = 2 ,  x = -1

  Step 2   f''(x) = 12x - 6

  Step 3   At x = -1 :  f''(-1) = -12 - 6 = -18 , NEGATIVE  ->  MAXIMUM
                        f(-1) = 2(-1) - 3(1) - 12(-1) + 5
                              = -2 - 3 + 12 + 5  =  12

           At x = 2  :  f''(2) = 24 - 6 = 18 , POSITIVE     ->  MINIMUM
                        f(2) = 2(8) - 3(4) - 12(2) + 5
                             = 16 - 12 - 24 + 5  =  -15

  Local maximum value = 12 at x = -1
  Local minimum value = -15 at x = 2
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks) — answer any 5 of 7
# This chapter's Section C question is almost always an APPLIED
# maxima-minima problem. Learn all six below.
# ===============================================================

### Q C1
Show that the rectangle of maximum area that can be inscribed in a circle of
radius r is a SQUARE, and find that maximum area.

**ANSWER:**
```
  STEP 1   FIGURE AND VARIABLES

              ___________
           ,-'     |     '-.
         ,'   +----+----+   ',
        /     |    |    |     \
       |      |    O----+---- r|
       |      |         |      |
        \     +----+----+     /
         ',         |       ,'
           '-.___________,-'

     Let the sides of the rectangle be x and y.
     The diagonal of an inscribed rectangle is a DIAMETER of the circle,
     so by Pythagoras:            x^2 + y^2 = (2r)^2 = 4 r^2

  STEP 2   QUANTITY TO MAXIMISE
              Area  A = x y

  STEP 3   REDUCE TO ONE VARIABLE
              y = sqrt(4r^2 - x^2)
              A = x sqrt(4r^2 - x^2)

           A square root is awkward, so maximise  S = A^2 instead.
           A is positive, so A is greatest exactly when A^2 is greatest.

              S = x^2 (4r^2 - x^2) = 4 r^2 x^2 - x^4

  STEP 4   DIFFERENTIATE AND SOLVE
              dS/dx = 8 r^2 x - 4 x^3 = 4x (2r^2 - x^2)

              dS/dx = 0   ->   x = 0   (rejected: no rectangle)
                          or   x^2 = 2 r^2   ->   x = r sqrt(2)

  STEP 5   SECOND DERIVATIVE TEST
              d^2S/dx^2 = 8 r^2 - 12 x^2
              At x^2 = 2r^2 :  8r^2 - 24 r^2 = -16 r^2 , which is NEGATIVE
              ->  MAXIMUM.

  STEP 6   CONCLUSION
              y = sqrt(4r^2 - 2r^2) = sqrt(2 r^2) = r sqrt(2) = x

              Since x = y the rectangle is a SQUARE.        Proved.

              MAXIMUM AREA = x y = (r sqrt2)(r sqrt2) = 2 r^2
```

---

### Q C2
From a square sheet of tin of side a, four equal squares of side x are cut from
the corners and the flaps are folded up to make an open box. Find x so that the
volume of the box is a maximum, and find that maximum volume.

**ANSWER:**
```
  STEP 1   FIGURE

     +---+---------------------+---+
     | x |                     | x |
     +---+                     +---+
     |                             |
     |          a - 2x             |     base = (a - 2x) by (a - 2x)
     |                             |     height = x
     |                             |
     +---+                     +---+
     | x |                     | x |
     +---+---------------------+---+
                  a

  STEP 2   VOLUME
              V = (a - 2x)^2 . x      with   0 < x < a/2

  STEP 3   Already one variable. Differentiate (product rule):

              dV/dx = (a - 2x)^2 (1) + x . 2(a - 2x)(-2)

                    = (a - 2x) [ (a - 2x) - 4x ]

                    = (a - 2x)(a - 6x)

  STEP 4   dV/dx = 0   ->   x = a/2   or   x = a/6

           x = a/2 makes the base (a - 2x) = 0 , impossible.  REJECT.
           Therefore   x = a/6.

  STEP 5   SECOND DERIVATIVE TEST
              dV/dx = a^2 - 8ax + 12x^2
              d^2V/dx^2 = -8a + 24x
              At x = a/6 :  -8a + 4a = -4a , which is NEGATIVE  ->  MAXIMUM.

  STEP 6   MAXIMUM VOLUME

                    a  (      2a )^2      a     4 a^2      2 a^3
              V  = --- ( a -  -- )    =  --- .  -----  =  -------
                    6  (      3  )        6       9          27
```
**Cut squares of side a/6. Maximum volume = 2a^3 / 27.**

*(If the sheet is 12 cm square, x = 2 cm and V = 2(1728)/27 = 128 cubic cm.)*

---

### Q C3
A closed cylindrical can is to hold a given volume V. Show that its total
surface area is least when its height is equal to its diameter.

**ANSWER:**
```
  STEP 1   FIGURE AND VARIABLES

       +---------+
       |         |
       |         |  h        radius r , height h
       |         |
       +---------+
        <-- 2r -->

  STEP 2   CONSTRAINT (given, therefore FIXED)
              V = pi r^2 h

           QUANTITY TO MINIMISE
              S = 2 pi r^2  +  2 pi r h
                  (two circular ends)  (curved surface)

  STEP 3   REDUCE TO ONE VARIABLE
                    V
              h = -------
                  pi r^2

                                        V              2V
              S = 2 pi r^2 + 2 pi r . ------- = 2 pi r^2 + ----
                                      pi r^2                r

  STEP 4   DIFFERENTIATE
              dS               2V
             ----  =  4 pi r - ----
              dr               r^2

             Set to zero:      4 pi r = 2V / r^2
                               4 pi r^3 = 2V
                               V = 2 pi r^3

  STEP 5   SECOND DERIVATIVE TEST
              d^2S            4V
             ------ = 4 pi + ------ ,  which is POSITIVE for r > 0
              dr^2            r^3
              ->  MINIMUM.

  STEP 6   CONCLUSION
              But  V = pi r^2 h .  So

                      pi r^2 h = 2 pi r^3
                             h = 2 r  =  the DIAMETER.     Proved.
```

---

### Q C4
Find two positive numbers x and y such that x + y = 60 and x y^3 is a maximum.

**ANSWER:**
```
  STEP 1   Let the numbers be x and y with x + y = 60 , both positive.
           So   x = 60 - y   and   0 < y < 60.

  STEP 2   MAXIMISE
              P = x y^3 = (60 - y) y^3 = 60 y^3 - y^4

  STEP 3   DIFFERENTIATE
              dP/dy = 180 y^2 - 4 y^3 = 4 y^2 (45 - y)

  STEP 4   dP/dy = 0   ->   y = 0  (rejected, the numbers are positive)
                       or   y = 45

  STEP 5   SECOND DERIVATIVE TEST
              d^2P/dy^2 = 360 y - 12 y^2
              At y = 45 :  360(45) - 12(2025) = 16200 - 24300 = -8100
              NEGATIVE   ->   MAXIMUM.

  STEP 6   y = 45 ,   x = 60 - 45 = 15

           THE NUMBERS ARE  x = 15  and  y = 45 .

           Maximum value = 15 x 45^3 = 15 x 91125 = 1366875
```

> Useful general result: to maximise x^m y^n subject to x + y = S,
> take x = mS/(m+n) and y = nS/(m+n). Here m = 1, n = 3, S = 60 gives
> x = 60/4 = 15 and y = 180/4 = 45 — the same answer, as a check.

---

### Q C5
Find the point on the curve y^2 = 2x which is nearest to the point (1, 4), and
find that shortest distance.

**ANSWER:**
```
  STEP 1   Let P(x, y) be any point on the curve. Then x = y^2 / 2.

  STEP 2   Distance from (1, 4):

              d = sqrt( (x - 1)^2 + (y - 4)^2 )

  STEP 3   KEY STEP: minimise D = d^2 instead of d.
           d is positive, so d is least exactly when d^2 is least,
           and the square root disappears.

                    ( y^2      )^2
              D  =  ( ---- - 1 )    +   ( y - 4 )^2
                    (  2       )

  STEP 4   DIFFERENTIATE with respect to y

              dD          ( y^2     )
             ----  =  2 . ( ---- - 1) . y   +   2 ( y - 4 )
              dy          (  2      )

                    =  ( y^2 - 2 ) y  +  2y - 8

                    =  y^3 - 2y + 2y - 8

                    =  y^3 - 8

  STEP 5   dD/dy = 0   ->   y^3 = 8   ->   y = 2

           d^2D / dy^2 = 3 y^2 .  At y = 2 :  12 , POSITIVE  ->  MINIMUM.

  STEP 6   x = y^2 / 2 = 4/2 = 2

           THE NEAREST POINT IS  (2, 2).

           Shortest distance = sqrt( (2 - 1)^2 + (2 - 4)^2 )
                             = sqrt( 1 + 4 )
                             = sqrt(5)  units
```

---

### Q C6
Show that the portion of the tangent to the curve
x^(2/3) + y^(2/3) = a^(2/3) intercepted between the coordinate axes has
constant length a.

**ANSWER:**
```
  STEP 1   PARAMETRISE the curve. Put

              x = a cos^3 t ,   y = a sin^3 t

           Check: x^(2/3) + y^(2/3) = a^(2/3)(cos^2 t + sin^2 t) = a^(2/3). Good.

  STEP 2   FIND THE SLOPE

              dx/dt = -3a cos^2 t . sin t
              dy/dt =  3a sin^2 t . cos t

              dy      3a sin^2 t cos t          sin t
             ----  = --------------------  =  - ------  =  - tan t
              dx     -3a cos^2 t sin t          cos t

  STEP 3   EQUATION OF THE TANGENT at (a cos^3 t , a sin^3 t)

              y - a sin^3 t  =  - tan t ( x - a cos^3 t )

           Multiply throughout by cos t :

              y cos t - a sin^3 t cos t  =  - x sin t + a sin t cos^3 t

              x sin t + y cos t  =  a sin t cos^3 t + a sin^3 t cos t

                                 =  a sin t cos t ( cos^2 t + sin^2 t )

                                 =  a sin t cos t

  STEP 4   DIVIDE by sin t cos t to get the intercept form

                x          y
             --------  + --------  =  a
              cos t       sin t

           so         x-intercept  A = ( a cos t , 0 )
                      y-intercept  B = ( 0 , a sin t )

  STEP 5   LENGTH AB

              AB = sqrt( (a cos t - 0)^2 + (0 - a sin t)^2 )

                 = sqrt( a^2 cos^2 t + a^2 sin^2 t )

                 = sqrt( a^2 )

                 = a

  STEP 6   The length a does not depend on t, so it is the SAME at every point
           of the curve.                                             Proved.
```

---

# WHICH QUESTIONS REPEAT MOST

Ranked by how often they turn up in BIEAP Maths IB papers. Prepare from the top
down; if you run out of time, you will still have covered the most likely ones.

| Rank | Question | Marks | Prepare it |
|------|----------|-------|------------|
| 1 | Applied maxima-minima (box, rectangle, cylinder, two numbers) | 7 | ESSENTIAL |
| 2 | Verify Rolle's theorem / Lagrange's MVT | 4 | ESSENTIAL |
| 3 | Related rates (balloon, ladder, cone, sphere) | 4 | ESSENTIAL |
| 4 | Equations of tangent and normal at a given point | 2 or 4 | ESSENTIAL |
| 5 | Approximate value of a square root or cube root | 2 | ESSENTIAL |
| 6 | Approximate error / relative error / percentage error | 2 or 4 | ESSENTIAL |
| 7 | Lengths of subtangent, subnormal, tangent, normal | 2 or 4 | VERY LIKELY |
| 8 | Angle between two curves / orthogonal curves | 4 | VERY LIKELY |
| 9 | Intervals of increase and decrease | 4 | VERY LIKELY |
| 10 | Local maxima and minima by the second derivative test | 4 | VERY LIKELY |
| 11 | Slope of a tangent at a point | 2 | LIKELY |
| 12 | Rate of change of area / volume / circumference | 2 | LIKELY |
| 13 | Tangent parallel or perpendicular to a given line | 4 | LIKELY |
| 14 | Absolute maximum and minimum on a closed interval | 4 | LIKELY |
| 15 | Tangent to x^(2/3)+y^(2/3)=a^(2/3) has constant intercept | 7 | SOMETIMES |
| 16 | Shortest distance from a point to a curve | 7 | SOMETIMES |
| 17 | Slope of tangent/normal for parametric curves | 2 | SOMETIMES |
| 18 | Velocity and acceleration of a particle | 2 | SOMETIMES |

**Strategy:** the top 6 rows alone cover roughly 15 marks. Master those first.
