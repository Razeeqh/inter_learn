# Differential Equations — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIB · **Chapter 8**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So these are grouped by "how often they appear" rather than by a single year.
> No question below is tagged to one exact year. Before your exam, cross-check
> with the official papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIB paper:**

```
  Section A  (2 marks each, answer ALL 10)  ->  usually Q9 or Q10
  Section B  (4 marks each, answer any 5)   ->  usually Q17
  Section C  (7 marks each, answer any 5)   ->  usually Q24  (the LAST question)

  Chapter total available:  about 11 to 13 marks out of 75
```

**Read this before you start:** Q24 is the very last question on the paper.
Many students run out of time and never reach it. Since it is one of the easiest
7-mark questions in the whole book, **do it FIRST** when the paper starts, then
come back to the rest. That single tactic is worth 7 marks.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10.
# ===============================================================

## Topic: Order and degree

### Q A1
Find the order and degree of

```
   d2y/dx2  +  3 (dy/dx)^2  -  5y  =  0
```

**ANSWER:**
```
   No radicals to clear.
   Highest derivative     ->  d2y/dx2       ->  ORDER = 2
   Power of that term     ->  (d2y/dx2)^1   ->  DEGREE = 1
```
**Order 2, degree 1.** (The square on dy/dx is irrelevant — it is not the
highest derivative.)

---

### Q A2
Find the order and degree of

```
   (d3y/dx3)^2  -  3 (dy/dx)^2  -  e^x  =  4
```

**ANSWER:**
```
   Highest derivative  ->  d3y/dx3   ->  ORDER = 3
   Its power           ->  2         ->  DEGREE = 2
```
**Order 3, degree 2.** (e^x is a function of x only, so it changes nothing.)

---

### Q A3
Find the order and degree of

```
   sqrt( 1 + (dy/dx)^2 )  =  d2y/dx2
```

**ANSWER:**
```
   STEP 1  clear the radical -- square both sides:

           1  +  (dy/dx)^2   =   (d2y/dx2)^2

   STEP 2  ORDER  = 2       DEGREE = 2
```
**Order 2, degree 2.**

---

### Q A4
Find the order and degree of

```
   [ 1 + (dy/dx)^2 ]^(3/2)  =  a (d2y/dx2)
```

**ANSWER:**
```
   STEP 1  square both sides to kill the power 3/2 :

           [ 1 + (dy/dx)^2 ]^3   =   a^2 (d2y/dx2)^2

   STEP 2  ORDER = 2       DEGREE = 2
```
**Order 2, degree 2.**

---

### Q A5
Find the order and degree of

```
   [ (d2y/dx2)^2  +  (dy/dx)^3 ]^(6/5)  =  6 y
```

**ANSWER:**
```
   STEP 1  raise both sides to the power 5 :

           [ (d2y/dx2)^2 + (dy/dx)^3 ]^6   =   (6y)^5

   STEP 2  the biggest power of d2y/dx2 in the expansion is

           [ (d2y/dx2)^2 ]^6   =   (d2y/dx2)^12
```
**Order 2, degree 12.**

---

### Q A6
Find the order and degree of

```
   d2y/dx2  +  sin( dy/dx )  =  0
```

**ANSWER:**
```
   dy/dx sits INSIDE a sine. There is no algebraic way to free it,
   so the equation is not a polynomial in the derivatives.
```
**Order 2, degree not defined.**

---

### Q A7
Find the order and degree of

```
   d2y/dx2  =  [ 1 + (dy/dx)^2 ]^(1/3)
```

**ANSWER:**
```
   STEP 1  cube both sides :

           (d2y/dx2)^3   =   1  +  (dy/dx)^2

   STEP 2  ORDER = 2       DEGREE = 3
```
**Order 2, degree 3.**

---

### Q A8
Find the order and degree of

```
   (d2y/dx2)^3  =  sqrt( 1 + dy/dx )
```

**ANSWER:**
```
   STEP 1  square both sides :

           (d2y/dx2)^6   =   1  +  dy/dx

   STEP 2  ORDER = 2       DEGREE = 6
```
**Order 2, degree 6.**

---

### Q A9
Find the order and degree of

```
   dy/dx  +  log( dy/dx )  =  x
```

**ANSWER:** dy/dx is trapped inside a logarithm.
**Order 1, degree not defined.**

---

### Q A10
How many arbitrary constants are there in the general solution of a
differential equation of order 3?

**ANSWER:** The general solution of an nth order equation contains exactly n
arbitrary constants. **Three.**

---

## Topic: Formation by eliminating arbitrary constants

### Q A11
Form the differential equation corresponding to y = c x.

**ANSWER:**
```
   One arbitrary constant  ->  differentiate ONCE  ->  order 1

       y  =  c x

       dy/dx  =  c

   Substitute c = dy/dx into  y = c x :

       y  =  x ( dy/dx )
```
**x (dy/dx) - y = 0**

---

### Q A12
Form the differential equation of the family x^2 + y^2 = a^2.

**ANSWER:**
```
   Differentiate with respect to x :

       2x  +  2y ( dy/dx )  =  0

   Divide by 2 :
```
**x + y (dy/dx) = 0**

---

### Q A13
Form the differential equation of y = c e^(-3x).

**ANSWER:**
```
       y   =  c e^(-3x)

       y'  =  -3 c e^(-3x)  =  -3 y     (since c e^(-3x) is y itself)
```
**dy/dx + 3y = 0**

---

### Q A14
Form the differential equation of y = A cos 3x + B sin 3x.

**ANSWER:**
```
   Two constants  ->  differentiate TWICE  ->  order 2

       y    =   A cos 3x  +  B sin 3x

       y'   =  -3A sin 3x  +  3B cos 3x

       y''  =  -9A cos 3x  -  9B sin 3x   =   -9 y
```
**d2y/dx2 + 9y = 0**

---

### Q A15
Form the differential equation of the family of parabolas y^2 = 4 a x.

**ANSWER:**
```
       y^2  =  4 a x

   Differentiate:      2 y ( dy/dx )  =  4 a       ->     4a = 2y (dy/dx)

   Substitute back:    y^2  =  2 y x ( dy/dx )

   Divide by y:        y  =  2 x ( dy/dx )
```
**y = 2x (dy/dx),  i.e.  2x (dy/dx) - y = 0**

---

### Q A16
What is the order of the differential equation obtained by eliminating a, b, c
from y = a x^2 + b x + c?

**ANSWER:** Three arbitrary constants → differentiate three times.
**Order 3.** (In fact the equation is d3y/dx3 = 0.)

---

## Topic: Integrating factors

### Q A17
Find the integrating factor of

```
   dy/dx  +  y tan x  =  sec x
```

**ANSWER:**
```
   P = tan x

   INT P dx  =  INT tan x dx  =  log | sec x |

   IF  =  e^( log sec x )  =  sec x
```
**IF = sec x**

---

### Q A18
Find the integrating factor of

```
   x ( dy/dx )  +  2 y  =  x^2
```

**ANSWER:**
```
   STEP 1  divide by x to get the standard form :

           dy/dx  +  (2/x) y  =  x

   STEP 2  P = 2/x

           INT P dx  =  2 log x  =  log x^2

           IF  =  e^( log x^2 )  =  x^2
```
**IF = x^2**

---

### Q A19
Find the integrating factor of

```
   (1 + x^2) ( dy/dx )  +  2 x y  =  4 x^2
```

**ANSWER:**
```
   Divide by (1 + x^2) :     dy/dx  +  [2x/(1+x^2)] y  =  4x^2/(1+x^2)

   P = 2x/(1+x^2)  and the top is the derivative of the bottom, so

   INT P dx  =  log (1 + x^2)      ->      IF  =  1 + x^2
```
**IF = 1 + x^2**

---

### Q A20
Find the integrating factor of dx/dy + x = e^y.

**ANSWER:** This is linear in x with P = 1 (a function of y).
```
   INT P dy  =  y        ->        IF  =  e^y
```
**IF = e^y**

---

## Topic: Simple solving

### Q A21
Solve dy/dx = e^(x - y).

**ANSWER:**
```
   Split the exponential:      dy/dx  =  e^x . e^(-y)

   Separate:                   e^y dy  =  e^x dx

   Integrate:                  e^y  =  e^x  +  c
```
**e^y = e^x + c**

---

### Q A22
Solve dy/dx = (1 + y^2) / (1 + x^2).

**ANSWER:**
```
   Separate:      dy/(1 + y^2)  =  dx/(1 + x^2)

   Integrate:     tan^-1 (y)  =  tan^-1 (x)  +  c
```
**tan^-1 y = tan^-1 x + c**

---

### Q A23
Solve x dy + y dx = 0.

**ANSWER:**
```
   The left side is exactly  d( x y ) .

   So   d(xy) = 0   ->   x y = c
```
**x y = c**

(Or the long way: dy/y = -dx/x, so log y = -log x + log c, giving xy = c.)

---

### Q A24
Is (x^2 - y^2) dx + x y dy = 0 homogeneous? If so, state the degree.

**ANSWER:**
```
   x^2  ->  degree 2
   y^2  ->  degree 2
   x y  ->  degree 1 + 1 = 2
```
Every term has total degree 2. **Yes — homogeneous of degree 2.**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 out of 7. This chapter is usually Q17.
# ===============================================================

### Q B1
Solve (e^x + 1) y dy = (y + 1) e^x dx.

**ANSWER:**
```
   STEP 1   Separate the variables. Divide both sides by (y + 1)(e^x + 1):

                y                 e^x
             ------- dy   =   ----------- dx
              y + 1             e^x + 1

   STEP 2   Fix the left-hand integrand. The top must be reduced first:

                y          (y + 1) - 1               1
             -------  =  --------------  =  1  -  -------
              y + 1          y + 1                 y + 1

   STEP 3   Integrate the left side:

             INT [ 1 - 1/(y+1) ] dy  =  y  -  log | y + 1 |

   STEP 4   Integrate the right side. The top e^x is exactly the derivative
            of the bottom e^x + 1, so it is a straight log:

             INT e^x/(e^x + 1) dx  =  log ( e^x + 1 )

   STEP 5   Put them together:

             y  -  log | y + 1 |  =  log ( e^x + 1 )  +  c
```
**y - log|y + 1| = log(e^x + 1) + c**

---

### Q B2
Solve

```
   dy        x ( 2 log x  +  1 )
   --  =  -------------------------
   dx        sin y  +  y cos y
```

**ANSWER:**
```
   STEP 1   Separate:

             ( sin y + y cos y ) dy   =   x ( 2 log x + 1 ) dx

   STEP 2   LEFT SIDE.  INT sin y dy = - cos y.
            For INT y cos y dy use parts with u = y, dv = cos y dy:

             INT y cos y dy  =  y sin y  -  INT sin y dy
                             =  y sin y  +  cos y

            Adding:   - cos y  +  y sin y  +  cos y   =   y sin y

   STEP 3   RIGHT SIDE.  INT (2 x log x + x) dx.

            For INT x log x dx use parts with u = log x, dv = x dx:

             INT x log x dx  =  (x^2/2) log x  -  INT (x^2/2)(1/x) dx
                             =  (x^2/2) log x  -  x^2/4

            So   2 INT x log x dx  =  x^2 log x  -  x^2/2

            And  INT x dx  =  x^2/2

            Adding:   x^2 log x  -  x^2/2  +  x^2/2   =   x^2 log x

   STEP 4   Therefore
```
**y sin y = x^2 log x + c**

---

### Q B3
Solve sqrt(1 - x^2) dy + sqrt(1 - y^2) dx = 0.

**ANSWER:**
```
   STEP 1   Divide the whole equation by sqrt(1-x^2) . sqrt(1-y^2):

                  dy                    dx
            --------------   +   --------------   =   0
            sqrt(1 - y^2)        sqrt(1 - x^2)

   STEP 2   Each term now has only ONE variable. Integrate:

            sin^-1 (y)   +   sin^-1 (x)   =   c
```
**sin^-1 x + sin^-1 y = c**

---

### Q B4
Solve

```
   dy       y^2 + y + 1
   --  +  ---------------  =  0
   dx       x^2 + x + 1
```

**ANSWER:**
```
   STEP 1   Separate:

                dy                 dx
            -----------  =  -  -----------
            y^2 + y + 1        x^2 + x + 1

   STEP 2   Complete the square in each denominator:

            y^2 + y + 1  =  ( y + 1/2 )^2  +  3/4

            so  a = sqrt(3)/2

   STEP 3   Use  INT dt/(t^2 + a^2) = (1/a) tan^-1 (t/a) :

                 dy               2          -1 ( 2y + 1 )
            INT ---------  =  --------- tan     ( -------- )
                y^2+y+1        sqrt(3)          ( sqrt(3) )

            and the same shape for x.

   STEP 4   So

              2         -1 ( 2y+1 )        2         -1 ( 2x+1 )
            ------ tan    ( ------ )  = - ------ tan    ( ------ ) + c
            sqrt3         ( sqrt3 )       sqrt3         ( sqrt3 )

   STEP 5   Multiply by sqrt(3)/2 and rename the constant.
```
**tan^-1((2x + 1)/sqrt3) + tan^-1((2y + 1)/sqrt3) = c**

---

### Q B5
Solve dy/dx = e^(3x - 2y) + x^2 e^(-2y).

**ANSWER:**
```
   STEP 1   Take out the common factor e^(-2y) :

            dy/dx  =  e^(-2y) [ e^(3x)  +  x^2 ]

   STEP 2   Separate:

            e^(2y) dy   =   ( e^(3x) + x^2 ) dx

   STEP 3   Integrate:

            e^(2y)          e^(3x)        x^3
            -------    =    -------  +   -----   +   c
               2               3           3

   STEP 4   Multiply everything by 6:
```
**3 e^(2y) = 2 e^(3x) + 2 x^3 + c**

---

### Q B6
Solve dy/dx = (x + y)^2.

**ANSWER:**
```
   STEP 1   The right side depends only on the bracket (x + y).  Put

              v  =  x + y

   STEP 2   Differentiate the substitution:

              dv/dx  =  1  +  dy/dx      ->      dy/dx  =  dv/dx  -  1

   STEP 3   Substitute:

              dv/dx  -  1   =   v^2

              dv/dx   =   1 + v^2

   STEP 4   Separate and integrate:

                 dv
              --------   =   dx
              1 + v^2

              tan^-1 (v)   =   x  +  c

   STEP 5   Put v = x + y back.
```
**tan^-1(x + y) = x + c,  or  x + y = tan(x + c)**

---

### Q B7
Solve

```
   dy         x  -  y  +  3
   --  =  ---------------------
   dx       2x  -  2y  +  5
```

**ANSWER:**
```
   STEP 1   TEST:   a/A = 1/2 ,   b/B = (-1)/(-2) = 1/2 .
            They are EQUAL, so the lines are PARALLEL -> Case 2.

   STEP 2   Put  v = x - y .   Then   dv/dx = 1 - dy/dx ,
            so   dy/dx = 1 - dv/dx .

            Also   x - y + 3 = v + 3   and   2x - 2y + 5 = 2v + 5 .

   STEP 3   Substitute:

                  dv        v + 3
            1  -  --   =   --------
                  dx        2v + 5

            dv           v + 3        2v + 5 - v - 3         v + 2
            --  =  1 - --------  =  ------------------  =  ---------
            dx          2v + 5           2v + 5             2v + 5

   STEP 4   Separate:

             2v + 5
            --------  dv   =   dx
              v + 2

   STEP 5   Force the top to look like the bottom:

             2v + 5      2(v + 2) + 1              1
            --------  =  ------------  =   2  +  -------
              v + 2         v + 2                 v + 2

   STEP 6   Integrate:

            2 v  +  log | v + 2 |   =   x   +   c

   STEP 7   Put v = x - y back:

            2(x - y)  +  log | x - y + 2 |  =  x  +  c
```
**x - 2y + log|x - y + 2| = c**

---

### Q B8
Solve dy/dx + y tan x = sin x.

**ANSWER:**
```
   STEP 1   Already in the form dy/dx + P y = Q with P = tan x , Q = sin x.

   STEP 2   IF  =  e^( INT tan x dx )  =  e^( log sec x )  =  sec x

   STEP 3   y (IF)  =  INT Q (IF) dx  +  c

            y sec x  =  INT  sin x . sec x dx  +  c

                     =  INT  tan x dx  +  c

                     =  log | sec x |  +  c
```
**y sec x = log|sec x| + c**

---

### Q B9
Solve dy/dx + y/x = x^2.

**ANSWER:**
```
   STEP 1   P = 1/x ,  Q = x^2

   STEP 2   INT P dx = log x    ->    IF = e^(log x) = x

   STEP 3   y . x  =  INT  x^2 . x dx  +  c

            y x    =  INT  x^3 dx  +  c   =   x^4/4  +  c

   STEP 4   Divide by x:
```
**y = x^3/4 + c/x**

**Check:** dy/dx = 3x^2/4 - c/x^2, and y/x = x^2/4 + c/x^2.
Adding gives x^2. Correct.

---

### Q B10
Solve (1 + x^2) dy/dx + 2 x y = 4 x^2.

**ANSWER:**
```
   STEP 1   Divide by (1 + x^2) so that dy/dx has coefficient 1:

            dy         2x                4x^2
            --  +  ---------- y   =   ----------
            dx      1 + x^2            1 + x^2

   STEP 2   P = 2x/(1+x^2). The top is the derivative of the bottom, so

            INT P dx  =  log(1 + x^2)      ->     IF  =  1 + x^2

   STEP 3   y (1 + x^2)  =  INT  [4x^2/(1+x^2)] . (1 + x^2) dx  +  c

                         =  INT  4 x^2 dx  +  c

                         =  4x^3 / 3  +  c
```
**y (1 + x^2) = (4 x^3)/3 + c**

---

### Q B11
Form the differential equation corresponding to x y = a e^x + b e^(-x).

**ANSWER:**
```
   STEP 1   Two constants -> differentiate twice -> order 2.

            x y  =  a e^x  +  b e^(-x)                    .... (1)

   STEP 2   Differentiate (1), using the product rule on the left:

            x y'  +  y   =   a e^x  -  b e^(-x)           .... (2)

   STEP 3   Differentiate (2), product rule again:

            x y''  +  y'  +  y'   =   a e^x  +  b e^(-x)

            x y''  +  2 y'        =   a e^x  +  b e^(-x)  .... (3)

   STEP 4   The right side of (3) is the right side of (1), which is x y :

            x y''  +  2 y'   =   x y
```
**x (d2y/dx2) + 2 (dy/dx) - x y = 0**

---

### Q B12
Form the differential equation corresponding to y = a x^2 + b x.

**ANSWER:**
```
   STEP 1   Two constants -> differentiate twice.

            y    =  a x^2  +  b x        .... (1)
            y'   =  2 a x  +  b          .... (2)
            y''  =  2 a                  .... (3)

   STEP 2   From (3):     a  =  y'' / 2

   STEP 3   From (2):     b  =  y' - 2 a x  =  y' - x y''

   STEP 4   Put both into (1):

            y  =  (y''/2) x^2  +  ( y' - x y'' ) x

               =  (x^2 y'')/2  +  x y'  -  x^2 y''

               =  x y'  -  (x^2 y'')/2

   STEP 5   Multiply by 2 and rearrange:
```
**x^2 (d2y/dx2) - 2x (dy/dx) + 2y = 0**

**Check with y = x^2:** y' = 2x, y'' = 2.
2x^2 - 4x^2 + 2x^2 = 0. Correct.

---

### Q B13
Find the equation of the curve passing through (1, 1) whose differential
equation is x dy = (2 x^2 + 1) dx.

**ANSWER:**
```
   STEP 1   Divide by x :

            dy   =   ( 2x  +  1/x ) dx

   STEP 2   Integrate:

            y   =   x^2  +  log | x |  +  c

   STEP 3   Use the point (1, 1):

            1   =   1  +  log 1  +  c   =   1 + 0 + c      ->     c = 0
```
**y = x^2 + log|x|**

---

### Q B14
A body is heated to 110 degrees C and placed in air at 10 degrees C. After one
hour its temperature is 60 degrees C. How much more time is required for it to
reach 30 degrees C?

**ANSWER:**
```
   STEP 1   Newton's law:   T - S  =  ( T0 - S ) e^( - k t )

            Here S = 10 and T0 = 110, so T0 - S = 100 :

            T  -  10   =   100 e^( - k t )

   STEP 2   Use t = 1, T = 60 :

            50  =  100 e^( - k )       ->      e^( - k )  =  1/2

   STEP 3   Find t when T = 30 :

            20  =  100 e^( - k t )     ->      e^( - k t )  =  1/5

            But e^(-kt) = ( e^(-k) )^t = (1/2)^t , so

            (1/2)^t  =  1/5      ->     2^t = 5     ->     t = log 5 / log 2

   STEP 4   log 5 = 1.609 , log 2 = 0.693 , so t = 2.32 hours.
```
**Total time about 2.32 hours, so about 1.32 more hours (roughly 1 hour 19 minutes).**

---

### Q B15
Solve dy/dx = y/x + tan(y/x).

**ANSWER:**
```
   STEP 1   The right side is written purely in terms of y/x, so the equation
            is homogeneous.  Put  y = v x , so  dy/dx = v + x dv/dx .

   STEP 2   Substitute:

                    dv
            v  +  x --   =   v  +  tan v

                    dx
            The v's cancel:

                    dv
                  x --   =   tan v
                    dx

   STEP 3   Separate:

            cot v dv   =   dx / x

   STEP 4   Integrate:

            log | sin v |   =   log | x |  +  log c

            sin v   =   c x

   STEP 5   Put v = y/x back.
```
**sin(y/x) = c x**

---

### Q B16
Solve dy/dx - 3y = e^(2x).

**ANSWER:**
```
   STEP 1   P = -3 , Q = e^(2x)

   STEP 2   INT P dx = -3x        ->        IF = e^(-3x)

   STEP 3   y e^(-3x)  =  INT  e^(2x) . e^(-3x) dx  +  c

                       =  INT  e^(-x) dx  +  c

                       =  - e^(-x)  +  c

   STEP 4   Multiply by e^(3x) :
```
**y = c e^(3x) - e^(2x)**

**Check:** y' = 3c e^(3x) - 2e^(2x), so y' - 3y = 3c e^(3x) - 2e^(2x)
- 3c e^(3x) + 3e^(2x) = e^(2x). Correct.

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 out of 7. This chapter is usually Q24, the LAST question.
# Do it FIRST when the paper starts.
# ===============================================================

### Q C1
Solve 2 x y (dy/dx) = x^2 + y^2.

**ANSWER:**

```
   STEP 1   IDENTIFY THE TYPE.
            Left side  2xy (dy/dx)   -- the xy part is degree 2
            Right side x^2 + y^2     -- degree 2

            Every term is degree 2  ->  HOMOGENEOUS.

   STEP 2   WRITE IT AS dy/dx = ...

            dy       x^2  +  y^2
            --  =  ---------------
            dx          2 x y

   STEP 3   SUBSTITUTE  y = v x ,  so  dy/dx = v + x dv/dx .

                    dv       x^2  +  v^2 x^2       x^2 ( 1 + v^2 )
            v  +  x --  =  -------------------  =  -----------------
                    dx        2 x ( v x )             2 v x^2

                                                     1  +  v^2
                                                 =  -----------
                                                       2 v

            (The x^2 cancels -- that is exactly why the substitution works.)

   STEP 4   ISOLATE  x dv/dx .

               dv       1 + v^2                1 + v^2  -  2 v^2
            x  --  =  -----------   -   v  =  --------------------
               dx        2 v                        2 v

                                                 1  -  v^2
                                            =  -------------
                                                   2 v

   STEP 5   SEPARATE.

              2 v                dx
            ---------  dv   =   ----
            1  -  v^2             x

   STEP 6   INTEGRATE.
            On the left put u = 1 - v^2, so du = -2v dv :

            INT 2v dv/(1 - v^2)  =  - INT du/u  =  - log | 1 - v^2 |

            So       - log | 1 - v^2 |   =   log | x |  +  log c

            Move everything to one side:

                     log | x |  +  log | 1 - v^2 |  +  log c   =   0

                     log | c x ( 1 - v^2 ) |  =  0

                     x ( 1 - v^2 )  =  C          (a new constant)

   STEP 7   PUT  v = y / x  BACK.

                 (       y^2 )
            x    ( 1  -  --- )   =   C
                 (       x^2 )

              x^2  -  y^2
            ---------------   =   C
                   x
```

**ANSWER: x^2 - y^2 = C x**

**Verification.** Differentiate x^2 - y^2 = Cx:
```
   2x - 2y (dy/dx)  =  C  =  (x^2 - y^2)/x

   Multiply by x:   2x^2 - 2xy (dy/dx)  =  x^2 - y^2

                    x^2 + y^2  =  2xy (dy/dx)         <-- the original equation
```
Correct.

---

### Q C2
Solve (x^3 + 3 x y^2) dx + (y^3 + 3 x^2 y) dy = 0.

**ANSWER:**

```
   STEP 1   IDENTIFY.
            x^3, 3xy^2, y^3, 3x^2y  --  every term is degree 3.
            HOMOGENEOUS.

   STEP 2   WRITE AS dy/dx.

            dy          x^3  +  3 x y^2
            --  =  -  -------------------
            dx          y^3  +  3 x^2 y

   STEP 3   SUBSTITUTE  y = v x .

            numerator    =  x^3  +  3x (v^2 x^2)   =   x^3 ( 1 + 3 v^2 )

            denominator  =  v^3 x^3  +  3 x^2 (v x) =  x^3 ( v^3 + 3 v )

                    dv           1  +  3 v^2
            v  +  x --  =   -  ---------------
                    dx           v^3  +  3 v

   STEP 4   ISOLATE  x dv/dx .

               dv         1 + 3v^2                - (1 + 3v^2)  -  v(v^3 + 3v)
            x  --  =  -  ----------  -  v   =   ---------------------------------
               dx        v^3 + 3v                        v^3  +  3v

                                                 - ( 1 + 3v^2 + v^4 + 3v^2 )
                                             =  -----------------------------
                                                        v^3  +  3v

                                                 - ( v^4  +  6 v^2  +  1 )
                                             =  ---------------------------
                                                        v^3  +  3v

   STEP 5   SEPARATE.

              v^3  +  3 v                  dx
            -------------------  dv  =  -  ----
            v^4 + 6 v^2 + 1                  x

   STEP 6   SPOT THE LOG.

            d
            -- ( v^4 + 6v^2 + 1 )  =  4 v^3 + 12 v  =  4 ( v^3 + 3 v )
            dv

            The top is exactly 1/4 of that derivative, so the left integral is

               (1/4) log | v^4 + 6 v^2 + 1 |

   STEP 7   INTEGRATE.

            (1/4) log | v^4 + 6v^2 + 1 |  =  - log | x |  +  c

            log | v^4 + 6v^2 + 1 |  +  4 log | x |   =   c'

            log | x^4 ( v^4 + 6v^2 + 1 ) |   =   c'

            x^4 ( v^4  +  6 v^2  +  1 )   =   C

   STEP 8   PUT  v = y/x  BACK.

                 (  y^4       y^2      )
            x^4  ( -----  +  6 ---  + 1 )   =   C
                 (  x^4       x^2      )

            y^4  +  6 x^2 y^2  +  x^4   =   C
```

**ANSWER: x^4 + 6 x^2 y^2 + y^4 = C**

---

### Q C3
Solve

```
   dy        2x  +  y  -  3
   --  =  --------------------
   dx        x  -  2y  +  1
```

**ANSWER:**

```
   STEP 1   APPLY THE TEST.

            a/A  =  2/1  =  2          b/B  =  1/(-2)  =  -1/2

            They are NOT equal, so the two lines INTERSECT.
            We shift the origin to their meeting point.

   STEP 2   FIND THE MEETING POINT (h, k).

            2x  +   y  -  3  =  0        .... (i)
             x  -  2y  +  1  =  0        .... (ii)

            From (ii):   x  =  2y - 1

            Put into (i):   2(2y - 1) + y - 3  =  0
                            4y - 2 + y - 3     =  0
                            5y - 5             =  0
                            y  =  1

            Then   x  =  2(1) - 1  =  1

            So  h = 1 ,  k = 1 .

   STEP 3   SHIFT.   Put  x = X + 1 ,  y = Y + 1 .  Then dy/dx = dY/dX and

            2x + y - 3  =  2(X + 1) + (Y + 1) - 3  =  2X  +  Y

            x - 2y + 1  =  (X + 1) - 2(Y + 1) + 1  =  X  -  2Y

            dY       2X  +  Y
            --  =  ------------          <-- homogeneous, as promised
            dX       X  -  2Y

   STEP 4   SUBSTITUTE  Y = v X ,  so  dY/dX = v + X dv/dX .

                    dv       2X  +  vX        2  +  v
            v  +  X --  =  ------------  =  -----------
                    dX       X  -  2vX        1  -  2v

               dv      2 + v                 2 + v  -  v(1 - 2v)
            X  --  =  --------   -   v  =  ----------------------
               dX      1 - 2v                     1 - 2v

                                            2 + v - v + 2v^2
                                        =  ------------------
                                                1 - 2v

                                            2 ( 1  +  v^2 )
                                        =  -----------------
                                                1 - 2v

   STEP 5   SEPARATE.

               1  -  2 v                  dX
            -----------------  dv   =    ----
            2 ( 1  +  v^2 )                X

   STEP 6   INTEGRATE.  Split the left side into two standard pieces:

             1   [        dv                2 v dv    ]
            ---  [ INT --------   -   INT ---------   ]
             2   [      1 + v^2            1 + v^2    ]

             1
          = --- [  tan^-1 (v)   -   log ( 1 + v^2 )  ]
             2

            So    (1/2) tan^-1 v  -  (1/2) log(1 + v^2)  =  log | X |  +  c

            Multiply by 2:

                  tan^-1 v  -  log(1 + v^2)  =  2 log | X |  +  c'

   STEP 7   PUT  v = Y / X .

                 -1 ( Y )         (      Y^2 )
            tan     ( - )  -  log ( 1 +  --- )   =   2 log | X |  +  c'
                    ( X )         (      X^2 )

                 -1 ( Y )        ( X^2 + Y^2 )
            tan     ( - )  -  log( --------- )  =  2 log | X |  +  c'
                    ( X )        (    X^2    )

                 -1 ( Y )
            tan     ( - )  - log(X^2+Y^2) + 2log|X|  =  2 log|X| + c'

            The  2 log|X|  cancels from both sides:

                 -1 ( Y )
            tan     ( - )   -   log ( X^2  +  Y^2 )   =   c'
                    ( X )

   STEP 8   PUT  X = x - 1 ,  Y = y - 1 .
```

**ANSWER:**

```
        -1 ( y - 1 )
   tan     ( ------- )   -   log [ (x - 1)^2  +  (y - 1)^2 ]   =   c
           ( x - 1 )
```

---

### Q C4
Solve dy/dx + y tan x = sin 2x, given that y = 0 when x = pi/3.

**ANSWER:**

```
   STEP 1   IDENTIFY.  It is already in the form  dy/dx + P y = Q  with

            P  =  tan x        Q  =  sin 2x

            So it is LINEAR.

   STEP 2   FIND THE INTEGRATING FACTOR.

            INT P dx  =  INT tan x dx  =  log | sec x |

            IF  =  e^( log sec x )  =  sec x

   STEP 3   APPLY THE FORMULA   y (IF) = INT Q (IF) dx + c .

            y sec x   =   INT  sin 2x . sec x dx   +   c

   STEP 4   SIMPLIFY THE INTEGRAND.

                              2 sin x cos x
            sin 2x . sec x =  --------------  =  2 sin x
                                  cos x

   STEP 5   INTEGRATE.

            y sec x   =   INT 2 sin x dx  +  c   =   - 2 cos x  +  c

   STEP 6   MULTIPLY BY cos x  to get y on its own.

            y   =   - 2 cos^2 x   +   c cos x

            That is the GENERAL solution.

   STEP 7   USE THE CONDITION  y = 0  when  x = pi/3 .

            cos(pi/3) = 1/2 , so

            0  =  - 2 (1/2)^2  +  c (1/2)

            0  =  - 1/2  +  c/2

            c  =  1
```

**ANSWER (particular solution): y = cos x - 2 cos^2 x**

**Verification of the general solution.**
```
   y   =  c cos x  -  2 cos^2 x

   y'  =  - c sin x  +  4 cos x sin x

   y tan x  =  ( c cos x - 2 cos^2 x )( sin x / cos x )
            =  c sin x  -  2 sin x cos x

   y' + y tan x  =  4 cos x sin x  -  2 sin x cos x
                 =  2 sin x cos x   =   sin 2x
```
Correct.

---

### Q C5
Solve (1 + y^2) dx = (tan^-1 y - x) dy.

**ANSWER:**

```
   STEP 1   IDENTIFY.
            The equation contains tan^-1 y, which is horrible in y,
            but x appears only to the first power.
            So treat  x  as the dependent variable:  LINEAR IN x.

   STEP 2   DIVIDE by (1 + y^2) dy.

            dx        tan^-1 y  -  x
            --  =   -------------------
            dy            1 + y^2

   STEP 3   COLLECT THE x TERMS ON THE LEFT.

            dx           x              tan^-1 y
            --  +   ----------   =   -------------
            dy       1 + y^2            1 + y^2

            So       P  =  1/(1 + y^2)      Q  =  (tan^-1 y)/(1 + y^2)

   STEP 4   INTEGRATING FACTOR.  Note this uses  dy , not dx.

                          dy
            INT P dy = INT --------  =  tan^-1 y
                         1 + y^2

            IF  =  e^( tan^-1 y )

   STEP 5   APPLY THE FORMULA   x (IF)  =  INT Q (IF) dy + c .

                tan^-1 y            tan^-1 y      tan^-1 y
            x e^(       )  =  INT  ----------  e^(        ) dy   +   c
                                    1 + y^2

   STEP 6   SUBSTITUTE  t = tan^-1 y ,  so  dt = dy / (1 + y^2) .

            The integral becomes

            INT  t e^t dt

            By parts with u = t , dv = e^t dt :

            INT t e^t dt  =  t e^t  -  INT e^t dt  =  t e^t  -  e^t

                          =  ( t  -  1 ) e^t

   STEP 7   PUT  t = tan^-1 y  BACK.

                tan^-1 y                          tan^-1 y
            x e^(       )  =  ( tan^-1 y  -  1 ) e^(      )   +   c

   STEP 8   DIVIDE BY  e^(tan^-1 y) .
```

**ANSWER: x = tan^-1 y - 1 + c e^(- tan^-1 y)**

---

### Q C6
Solve x (dy/dx) + y = 2 x^2 y^2.

**ANSWER:**

```
   STEP 1   IDENTIFY.  There is a y^2 on the right.
            This is BERNOULLI with n = 2.

   STEP 2   PUT IT IN STANDARD FORM.  Divide by x :

            dy        y
            --   +   ---   =   2 x y^2
            dx        x

   STEP 3   DIVIDE EVERY TERM BY  y^2 .

              -2  dy         1    -1
             y    --   +    --- y      =   2 x
                  dx         x

   STEP 4   SUBSTITUTE  v  =  y^(-1)  =  1/y .

            dv            -2   dy                    -2  dy         dv
            --   =   -   y     --      so           y    --   =  -  --
            dx                 dx                        dx         dx

            The equation becomes

                 dv        v
            -    --   +   ---   =   2 x
                 dx        x

            Multiply by -1 to get the standard linear shape:

            dv        v
            --   -   ---   =   - 2 x
            dx        x

            So      P  =  - 1/x        Q  =  - 2 x

   STEP 5   INTEGRATING FACTOR.

            INT P dx  =  INT ( -1/x ) dx  =  - log x  =  log ( 1/x )

            IF  =  e^( log (1/x) )  =  1 / x

   STEP 6   APPLY THE FORMULA   v (IF)  =  INT Q (IF) dx  +  c .

             v                     1
            ---   =   INT ( -2x ) --- dx   +   c
             x                     x

                   =   INT ( -2 ) dx   +   c

                   =   - 2 x   +   c

   STEP 7   SOLVE FOR v .

            v   =   x ( c  -  2 x )   =   c x  -  2 x^2

   STEP 8   PUT  v = 1/y  BACK.
```

**ANSWER: 1/y = c x - 2 x^2,  i.e.  y = 1 / (c x - 2 x^2)**

**Verification.** Write D = cx - 2x^2, so y = 1/D and dy/dx = -D'/D^2
with D' = c - 4x.
```
                     - x ( c - 4x )        1        - cx + 4x^2 + cx - 2x^2
   x (dy/dx)  +  y = ----------------  +  ---  =  ---------------------------
                          D^2              D                 D^2

                                              2 x^2
                                           =  ------   =   2 x^2 y^2
                                               D^2
```
Correct.

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST — study top-down if short on time
# ===============================================================

```
  RANK  QUESTION TYPE                                 SECTION   CHANCE
  ----  -------------------------------------------   -------   -----------
   1    Linear equation, IF method                       C       almost every year
   2    Order and degree (clear the radical first)       A       almost every year
   3    Homogeneous equation, y = vx                     C       very high
   4    Form the D.E. by eliminating constants           A / B   very high
   5    Find the integrating factor only                 A       very high
   6    Variables separable, small one                   A / B   very high
   7    Non-homogeneous (ax+by+c)/(Ax+By+C)              C       high
   8    Reducible to separable, v = ax + by + c          B / C   high
   9    Linear in x, dx/dy + Px = Q                      C       moderate
  10    Bernoulli, v = y^(1-n)                           C       moderate
  11    Newton's law of cooling / growth-decay           B       moderate
  12    Degree not defined (sin, log of a derivative)    A       moderate
```

---

# THE FOUR QUESTIONS TO MEMORISE COMPLETELY

If you have very little time, learn these four end to end. Between them they
cover most of what the board has repeatedly asked from this chapter.

```
  +---+----------------------------------------------+---------------------+
  | 1 |  dy/dx + y tan x = sin 2x                    |  7 marks, LINEAR    |
  +---+----------------------------------------------+---------------------+
  | 2 |  2xy dy/dx = x^2 + y^2                       |  7 marks, HOMOG.    |
  +---+----------------------------------------------+---------------------+
  | 3 |  (1 + x^2) dy/dx + 2xy = 4x^2                |  4 marks, LINEAR    |
  +---+----------------------------------------------+---------------------+
  | 4 |  Order and degree after clearing a radical   |  2 marks, always    |
  +---+----------------------------------------------+---------------------+
```
