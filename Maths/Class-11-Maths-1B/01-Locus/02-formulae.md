# Locus — Every Formula You Need

**Maths 1B · Chapter 1**

This chapter has very few formulas of its own. What it has is a set of **borrowed
tools** (distance, section, slope, area) plus a set of **standard results** telling
you what shape each condition produces. Both are below.

Use this sheet the night before the exam.

---

# SECTION 1 — THE FOUR TRANSLATION TOOLS

These convert English into algebra. Nothing in this chapter works without them.

## 1.1 Distance between two points

```
  +==========================================================================+
  |                                                                          |
  |     A(x1, y1)          B(x2, y2)                                         |
  |                                                                          |
  |     AB   =  sqrt( (x2 - x1)^2  +  (y2 - y1)^2 )                          |
  |                                                                          |
  |     AB^2 =  (x2 - x1)^2  +  (y2 - y1)^2       <-- use THIS one           |
  |                                                                          |
  +==========================================================================+
```

Special case, distance from the **origin**:

```
     OP  =  sqrt( x^2 + y^2 )          OP^2  =  x^2 + y^2
```

| Form | When to use |
|---|---|
| `AB^2 = (x2-x1)^2 + (y2-y1)^2` | ALWAYS in locus work — kills the square root |
| `AB = sqrt(...)` | only when the question asks for a numerical length |
| `OP^2 = x^2 + y^2` | when one of the fixed points is the origin |

## 1.2 Section formula (internal division, ratio m : n)

```
  +==========================================================================+
  |                                                                          |
  |                m x2 + n x1          m y2 + n y1                          |
  |        P  =  ( -------------- ,  -------------- )                        |
  |                    m + n              m + n                              |
  |                                                                          |
  |             m           n                                                |
  |        A *-------P------------* B          AP : PB  =  m : n             |
  |                                                                          |
  +==========================================================================+
```

External division in m : n — just flip the sign of n:

```
                m x2 - n x1          m y2 - n y1
        P  =  ( -------------- ,  -------------- )
                    m - n              m - n
```

| Form | When to use |
|---|---|
| internal section formula | "P divides AB in the ratio 2:3", "trisects" |
| external section formula | "divides externally", "produced beyond B" |
| set m : n = 1 : 1 | to check you wrote the formula correctly |

## 1.3 Midpoint

```
  +==========================================================================+
  |                                                                          |
  |                 x1 + x2         y1 + y2                                  |
  |        M  =  ( --------- ,     --------- )                               |
  |                    2               2                                     |
  |                                                                          |
  |     BACKWARDS (the version you use in locus questions):                  |
  |                                                                          |
  |        if M(x, y) is the midpoint of A(a, p) and B(b, q) then            |
  |                                                                          |
  |               a + b = 2x          p + q = 2y                             |
  |                                                                          |
  +==========================================================================+
```

| Form | When to use |
|---|---|
| forwards | you know both ends, you want the middle |
| backwards | you are tracking the midpoint — this is the locus version |

## 1.4 Slope, parallel, perpendicular

```
  +==========================================================================+
  |                                                                          |
  |                  y2 - y1                                                 |
  |        m   =   ----------- ,    provided x2 is not equal to x1           |
  |                  x2 - x1                                                 |
  |                                                                          |
  |        from  ax + by + c = 0  :        m  =  -a / b                      |
  |                                                                          |
  |        from an inclination theta :     m  =  tan(theta)                  |
  |                                                                          |
  |        PARALLEL         m1  =  m2                                        |
  |        PERPENDICULAR    m1 x m2  =  -1                                   |
  |                                                                          |
  +==========================================================================+
```

| Form | When to use |
|---|---|
| `m = (y2-y1)/(x2-x1)` | two points given |
| `m1 m2 = -1` | the words "right angle", "subtends 90 degrees", "perpendicular" |
| `m = -a/b` | checking that your locus is perpendicular to AB |

## 1.5 Area of a triangle from three vertices

```
  +==========================================================================+
  |                                                                          |
  |     A(x1,y1)   B(x2,y2)   C(x3,y3)                                       |
  |                                                                          |
  |               1                                                          |
  |     Area  =  --- abs( x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2) )          |
  |               2                                                          |
  |                                                                          |
  |     COLLINEAR  <=>  Area = 0  <=>  x1(y2-y3)+x2(y3-y1)+x3(y1-y2) = 0     |
  |                                                                          |
  +==========================================================================+
```

The determinant version (same thing, sometimes quicker to write):

```
               1     | x1   y1   1 |
     Area  =  --- abs| x2   y2   1 |
               2     | x3   y3   1 |
```

| Form | When to use |
|---|---|
| area formula with abs | "area of triangle PAB = k" |
| set the bracket = 0 | "P, A, B are collinear" |

## 1.6 Perpendicular distance from a point to a line

```
  +==========================================================================+
  |                                                                          |
  |     From P(x1, y1) to the line  ax + by + c = 0 :                        |
  |                                                                          |
  |                 abs( a x1 + b y1 + c )                                   |
  |        d  =  ---------------------------                                 |
  |                   sqrt( a^2 + b^2 )                                      |
  |                                                                          |
  |     From P(x, y) to  x = k  :        d = abs( x - k )                    |
  |     From P(x, y) to  y = k  :        d = abs( y - k )                    |
  |                                                                          |
  +==========================================================================+
```

| Form | When to use |
|---|---|
| full formula | slanted directrix, "distance from the line 3x+4y-5=0" |
| `abs(x - k)` | vertical directrix — no square root needed |
| `abs(y - k)` | horizontal directrix |

---

# SECTION 2 — THE STANDARD LOCI (THE HEART OF THE CHAPTER)

This is the table to memorise. Every board question is a row of it.

```
  +==========================================================================+
  |  CONDITION ON P                    |  EQUATION TO WRITE  |  CURVE        |
  +====================================+=====================+===============+
  |  PA = PB                           |  PA^2 = PB^2        |  straight     |
  |  (equidistant from 2 points)       |                     |  line         |
  +------------------------------------+---------------------+---------------+
  |  PC = r                            |  PC^2 = r^2         |  circle       |
  |  (fixed distance from a point)     |                     |  centre C     |
  +------------------------------------+---------------------+---------------+
  |  PA : PB = m : n                   |  n^2 PA^2 = m^2 PB^2|  Apollonius   |
  |  (m not equal to n)                |                     |  circle       |
  +------------------------------------+---------------------+---------------+
  |  PA + PB = 2a  (constant)          |  isolate, square,   |  ellipse      |
  |                                    |  isolate, square    |               |
  +------------------------------------+---------------------+---------------+
  |  abs(PA - PB) = 2a  (constant)     |  isolate, square,   |  hyperbola    |
  |                                    |  isolate, square    |               |
  +------------------------------------+---------------------+---------------+
  |  angle APB = 90 degrees            |  (x-x1)(x-x2)       |  circle on AB |
  |                                    |  + (y-y1)(y-y2) = 0 |  as diameter  |
  +------------------------------------+---------------------+---------------+
  |  area of triangle PAB = k          |  abs( ... ) = 2k    |  PAIR of      |
  |                                    |  then TWO cases     |  parallel     |
  |                                    |                     |  lines        |
  +------------------------------------+---------------------+---------------+
  |  P, A, B collinear                 |  ( ... ) = 0        |  the line AB  |
  +------------------------------------+---------------------+---------------+
  |  PS = distance from P to line d    |  PS^2 = d^2         |  parabola     |
  +------------------------------------+---------------------+---------------+
  |  PA^2 + PB^2 = k                   |  add the two        |  circle       |
  |                                    |  squared distances  |               |
  +------------------------------------+---------------------+---------------+
  |  PA^2 - PB^2 = k                   |  subtract; the      |  straight     |
  |                                    |  x^2, y^2 cancel    |  line         |
  +==========================================================================+
```

## 2.1 The two you must be able to write instantly

```
  +==========================================================================+
  |                                                                          |
  |   THE EQUIDISTANT LOCUS  (perpendicular bisector of AB)                  |
  |                                                                          |
  |     (x - x1)^2 + (y - y1)^2  =  (x - x2)^2 + (y - y2)^2                  |
  |                                                                          |
  |     Expand. The x^2 and y^2 always cancel. Answer is a straight line.    |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   THE RIGHT-ANGLE LOCUS  (circle on AB as diameter)                      |
  |                                                                          |
  |     ( x - x1 )( x - x2 )  +  ( y - y1 )( y - y2 )  =  0                  |
  |                                                                          |
  |     Centre = midpoint of AB.    Radius = AB / 2.                         |
  |                                                                          |
  +==========================================================================+
```

## 2.2 The Apollonius circle in detail

```
  +==========================================================================+
  |                                                                          |
  |     Condition:      PA / PB  =  k          (k > 0 , k not equal to 1)    |
  |                                                                          |
  |     Write:          PA^2  =  k^2 PB^2                                    |
  |                                                                          |
  |     (x-x1)^2 + (y-y1)^2  =  k^2 [ (x-x2)^2 + (y-y2)^2 ]                  |
  |                                                                          |
  |     -> the x^2 and y^2 do NOT cancel; both keep the factor (1 - k^2)     |
  |     -> divide the whole equation by (1 - k^2) at the end                 |
  |     -> the result is a CIRCLE                                            |
  |                                                                          |
  |     If k = 1 the x^2 and y^2 DO cancel and you get the                   |
  |     perpendicular bisector instead. Both cases are one formula.          |
  |                                                                          |
  +==========================================================================+
```

## 2.3 Sum / difference of distances — the standard results

If the two fixed points are `(-c, 0)` and `(c, 0)` (both on the x-axis, equally
placed about the origin), the answers come out in the neat standard forms:

```
  +==========================================================================+
  |                                                                          |
  |   PA + PB = 2a        ->      x^2       y^2                              |
  |   (with a > c)               -----  +  -----  =  1  ,   b^2 = a^2 - c^2  |
  |                               a^2       b^2                              |
  |                                                        an ELLIPSE        |
  |                                                                          |
  |   abs(PA - PB) = 2a   ->      x^2       y^2                              |
  |   (with a < c)               -----  -  -----  =  1  ,   b^2 = c^2 - a^2  |
  |                               a^2       b^2                              |
  |                                                        a HYPERBOLA       |
  |                                                                          |
  +==========================================================================+
```

Worked instances you should recognise on sight:

| Fixed points | Condition | Answer |
|---|---|---|
| (-3,0), (3,0) | PA + PB = 10 | 16x^2 + 25y^2 = 400, i.e. x^2/25 + y^2/16 = 1 |
| (-4,0), (4,0) | PA + PB = 10 | 9x^2 + 25y^2 = 225, i.e. x^2/25 + y^2/9 = 1 |
| (-5,0), (5,0) | abs(PA - PB) = 8 | 9x^2 - 16y^2 = 144, i.e. x^2/16 - y^2/9 = 1 |
| (-5,0), (5,0) | abs(PA - PB) = 6 | 16x^2 - 9y^2 = 144, i.e. x^2/9 - y^2/16 = 1 |

(Check the pattern: `a` is half the given constant, `c` is half the distance
between the foci, and then `b^2 = a^2 - c^2` for an ellipse or `b^2 = c^2 - a^2`
for a hyperbola.)

---

# SECTION 3 — MIDPOINT AND SECTION LOCI

```
  +==========================================================================+
  |                                                                          |
  |   THE METHOD IN ONE BOX                                                  |
  |                                                                          |
  |   1.  Let P(x, y) be the point whose locus you want.                     |
  |   2.  Let the moving point(s) be (h, k)  --  NEVER (x, y).               |
  |   3.  Use the midpoint / section formula to write h and k                |
  |       in terms of x and y.                                               |
  |   4.  Substitute h and k into the equation the moving point obeys.       |
  |   5.  Simplify. The h and k must both disappear.                         |
  |                                                                          |
  +==========================================================================+
```

Standard results worth knowing:

```
  +==========================================================================+
  |                                                                          |
  |   ROD OF LENGTH L SLIDING ON THE AXES, track the MIDPOINT:               |
  |                                                                          |
  |        ends A(a, 0) and B(0, b) with a^2 + b^2 = L^2                     |
  |        midpoint (x, y) gives a = 2x , b = 2y                             |
  |                                                                          |
  |             x^2 + y^2  =  L^2 / 4          a circle of radius L/2        |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   ROD OF LENGTH L SLIDING ON THE AXES, track the point dividing          |
  |   it in the ratio m : n from the x-axis end:                             |
  |                                                                          |
  |        the locus is an ELLIPSE, not a circle                             |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   FIXED POINT A , MOVING POINT Q ON A CURVE C , track the MIDPOINT:      |
  |                                                                          |
  |        the locus is C shrunk to HALF size,                               |
  |        centred at the midpoint of A and the centre of C                  |
  |                                                                          |
  +==========================================================================+
```

| Situation | When to use |
|---|---|
| midpoint, ends on the two axes | "rod / ladder of length L slides" |
| midpoint of A and a point on a circle | "Q moves on the circle, P is the midpoint of AQ" |
| section formula version | "P divides AQ in the ratio m : n" |

---

# SECTION 4 — ELIMINATING A PARAMETER

```
  +==========================================================================+
  |                                                                          |
  |   TRICK 1   MAKE THE PARAMETER THE SUBJECT                               |
  |             use the simpler equation, then substitute                    |
  |                                                                          |
  |   TRICK 2   SQUARE AND ADD           cos^2(t) + sin^2(t)  =  1           |
  |                                                                          |
  |   TRICK 3   SQUARE AND SUBTRACT      sec^2(t) - tan^2(t)  =  1           |
  |                                      cosec^2(t) - cot^2(t) = 1           |
  |                                                                          |
  |   TRICK 4   MULTIPLY THE TWO         for  x = ct , y = c/t               |
  |                                      gives xy = c^2                      |
  |                                                                          |
  +==========================================================================+
```

The standard parametric points:

| Parametric point | Method | Locus | Curve |
|---|---|---|---|
| ( a cos t , a sin t ) | square and add | x^2 + y^2 = a^2 | circle |
| ( a cos t , b sin t ) | divide, square, add | x^2/a^2 + y^2/b^2 = 1 | ellipse |
| ( a sec t , b tan t ) | divide, square, subtract | x^2/a^2 - y^2/b^2 = 1 | hyperbola |
| ( a sec t , a tan t ) | square and subtract | x^2 - y^2 = a^2 | rect. hyperbola |
| ( a t^2 , 2 a t ) | t = y/2a , substitute | y^2 = 4ax | parabola |
| ( a / t^2 , 2a / t ) | t = 2a/y , substitute | y^2 = 4ax | parabola |
| ( c t , c / t ) | multiply | xy = c^2 | rect. hyperbola |
| ( h + r cos t , k + r sin t ) | shift, square, add | (x-h)^2 + (y-k)^2 = r^2 | circle |
| ( at + b , ct + d ) | t from the first | a linear relation | straight line |

The identity that finishes most of these:

```
  +--------------------------------------------------------+
  |    cos^2(t) + sin^2(t)  =  1                           |
  |    sec^2(t) - tan^2(t)  =  1                           |
  |    cosec^2(t) - cot^2(t)  =  1                          |
  +--------------------------------------------------------+
```

---

# SECTION 5 — NAMING THE CURVE

```
  +==========================================================================+
  |                                                                          |
  |     GENERAL SECOND-DEGREE EQUATION                                       |
  |                                                                          |
  |        a x^2  +  2h xy  +  b y^2  +  2g x  +  2f y  +  c  =  0           |
  |                                                                          |
  |     h^2 - ab  <  0     ->    ELLIPSE   (CIRCLE if a = b and h = 0)       |
  |     h^2 - ab  =  0     ->    PARABOLA                                    |
  |     h^2 - ab  >  0     ->    HYPERBOLA                                   |
  |                                                                          |
  +==========================================================================+
```

The fast visual test (no formula needed):

| What you see | What it is |
|---|---|
| no squared terms | straight line |
| an `xy` term present | tilted conic — never a circle |
| only `x^2` (no `y^2`) | parabola opening up or down |
| only `y^2` (no `x^2`) | parabola opening left or right |
| `x^2` and `y^2`, equal coefficients, same sign | circle |
| `x^2` and `y^2`, unequal coefficients, same sign | ellipse |
| `x^2` and `y^2`, opposite signs | hyperbola |
| just `xy = constant` | rectangular hyperbola |

## 5.1 Reading a circle

```
  +==========================================================================+
  |                                                                          |
  |     x^2 + y^2 + 2g x + 2f y + c  =  0                                    |
  |                                                                          |
  |        centre  =  ( -g , -f )                                            |
  |        radius  =  sqrt( g^2 + f^2 - c )                                  |
  |                                                                          |
  |     If the coefficients of x^2 and y^2 are not 1, DIVIDE FIRST.          |
  |                                                                          |
  +==========================================================================+
```

## 5.2 The standard conic forms to compare against

```
  circle       (x - h)^2 + (y - k)^2  =  r^2

  parabola     y^2 = 4ax        x^2 = 4ay        (and their shifted versions)

                 x^2      y^2
  ellipse       -----  + -----  =  1
                 a^2      b^2

                 x^2      y^2
  hyperbola     -----  - -----  =  1
                 a^2      b^2

  rect. hyp.   xy = c^2
```

---

# SECTION 6 — THE ALGEBRA YOU KEEP NEEDING

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |    (x - a)^2  =  x^2 - 2ax + a^2                                         |
  |    (x + a)^2  =  x^2 + 2ax + a^2                                         |
  |                                                                          |
  |    (a + b)^2  =  a^2 + 2ab + b^2                                         |
  |    (a - b)^2  =  a^2 - 2ab + b^2                                         |
  |                                                                          |
  |    abs(t) = k     means      t = k   OR   t = -k                         |
  |    abs(-t) = abs(t)                                                      |
  |                                                                          |
  |    sqrt(A) = sqrt(B)  =>  A = B      (both sides non-negative: safe)     |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**Sign discipline** — the two expansions that cause the most damage:

```
  (y - 5)^2  =  y^2 - 10y + 25            NOT  y^2 - 25
  (x + 4)^2  =  x^2 +  8x + 16            NOT  x^2 + 16
```

Write the middle term every single time. Do not do it in your head.

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +==========================================================================+
  |                                                                          |
  |   1.  AB^2 = (x2 - x1)^2 + (y2 - y1)^2                                   |
  |                                                                          |
  |   2.  P divides AB in m:n  ->  ( (m x2 + n x1)/(m+n) ,                   |
  |                                  (m y2 + n y1)/(m+n) )                   |
  |                                                                          |
  |   3.  midpoint = ( (x1+x2)/2 , (y1+y2)/2 )                               |
  |       and backwards:  x1 + x2 = 2x ,  y1 + y2 = 2y                       |
  |                                                                          |
  |   4.  slope m = (y2 - y1)/(x2 - x1) ;  perpendicular: m1 m2 = -1         |
  |                                                                          |
  |   5.  area = (1/2) abs( x1(y2-y3) + x2(y3-y1) + x3(y1-y2) )              |
  |                                                                          |
  |   6.  distance point to line = abs(a x1 + b y1 + c)/sqrt(a^2 + b^2)      |
  |                                                                          |
  |   7.  PA = PB       ->   PA^2 = PB^2      ->   STRAIGHT LINE             |
  |                                                                          |
  |   8.  PA = k PB     ->   PA^2 = k^2 PB^2  ->   CIRCLE (Apollonius)       |
  |                                                                          |
  |   9.  angle APB = 90  ->  (x-x1)(x-x2) + (y-y1)(y-y2) = 0                |
  |                           CIRCLE on AB as diameter                       |
  |                                                                          |
  |  10.  area of PAB = k  ->  abs(...) = 2k  ->  TWO PARALLEL LINES         |
  |                                                                          |
  |  11.  cos^2 t + sin^2 t = 1   and   sec^2 t - tan^2 t = 1                |
  |       (the two parameter-killers)                                        |
  |                                                                          |
  |  12.  x^2 + y^2 + 2gx + 2fy + c = 0  ->  centre (-g,-f) ,                |
  |                                          radius sqrt(g^2+f^2-c)          |
  |                                                                          |
  +==========================================================================+
```

If you learn only three of these, learn **1, 7 and 9**. Between them they cover
most of what BIEAP has ever asked from this chapter.
