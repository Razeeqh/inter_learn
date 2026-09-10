# Direction Cosines and Direction Ratios — Formula Sheet

**Maths 1B · Chapter 6**

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what the exam actually tests.

There are only about **sixteen** formulas in the whole chapter, and one of them
(`cos theta = l1l2 + m1m2 + n1n2`) is used in more than half the questions.

---

# 1. THE ANGLES AND THE DIRECTION COSINES

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   A directed line makes angles  alpha , beta , gamma  with the    |
  |   POSITIVE x , y , z axes.                                        |
  |                                                                   |
  |        l  =  cos alpha                                            |
  |        m  =  cos beta                                             |
  |        n  =  cos gamma                                            |
  |                                                                   |
  |   (l, m, n) are the DIRECTION COSINES  (d.c.'s) of the line.      |
  |                                                                   |
  |   Each angle lies in   0 <= angle <= 180 degrees.                 |
  |   An angle above 90 degrees gives a NEGATIVE cosine. That is      |
  |   normal and correct.                                             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula / fact | When to use |
|---|---|
| `l = cos alpha`, `m = cos beta`, `n = cos gamma` | any question that gives you angles |
| Angles are measured from the **positive** half-axis | when a "negative direction" is mentioned |
| A d.c. may be negative; a d.c. is never outside `[-1, 1]` | to spot a wrong answer instantly |
| A line has **two** sets: `(l,m,n)` and `(-l,-m,-n)` | when your sign differs from the key |

---

# 2. THE LAW OF THE CHAPTER

```
  +===================================================================+
  |                                                                   |
  |            l^2  +  m^2  +  n^2   =   1                            |
  |                                                                   |
  |     cos^2 alpha  +  cos^2 beta  +  cos^2 gamma   =   1            |
  |                                                                   |
  +===================================================================+

  PROOF IN FOUR LINES  (worth 2 marks on its own)

     P(x,y,z) on the line through O ,  OP = r
     x = l r ,  y = m r ,  z = n r          (from the right triangles)
     x^2 + y^2 + z^2 = r^2                  (distance formula)
     r^2 (l^2+m^2+n^2) = r^2   ->   l^2+m^2+n^2 = 1
```

## The two spin-offs

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    sin^2 alpha + sin^2 beta + sin^2 gamma   =   2                 |
  |         ( because it is  3 - 1 )                                  |
  |                                                                   |
  |    cos 2alpha + cos 2beta + cos 2gamma      =   -1                |
  |         ( because it is  2(1) - 3 )                               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `l^2 + m^2 + n^2 = 1` | **CHECK every answer**; find a missing d.c.; find a missing angle |
| `sin^2 a + sin^2 b + sin^2 c = 2` | "prove that ..." 2-markers |
| `cos 2a + cos 2b + cos 2c = -1` | "prove that ..." 2-markers |
| `x = lr, y = mr, z = nr` | to find a point at distance `r` along a known direction |

---

# 3. DIRECTION COSINES OF THE COORDINATE AXES

```
  +-------------+--------+-------+--------+---------------------+
  |   LINE      | alpha  | beta  | gamma  |   d.c.'s (l, m, n)  |
  +-------------+--------+-------+--------+---------------------+
  |   x - axis  |   0    |  90   |   90   |     ( 1, 0, 0 )     |
  |   y - axis  |  90    |   0   |   90   |     ( 0, 1, 0 )     |
  |   z - axis  |  90    |  90   |    0   |     ( 0, 0, 1 )     |
  +-------------+--------+-------+--------+---------------------+
```

| Fact | When to use |
|---|---|
| x-axis has d.c.'s `(1, 0, 0)` | "angle between the line and the x-axis" |
| A line **perpendicular to the x-axis** has `l = 0` | condition questions |
| A line **parallel to the x-axis** has d.c.'s `(1, 0, 0)` | "parallel to an axis" questions |
| A line in the **xy-plane** has `n = 0` | a line lying in a coordinate plane |

---

# 4. DIRECTION RATIOS AND THE CONVERSION

```
  +===================================================================+
  |                                                                   |
  |   (a, b, c) are DIRECTION RATIOS  (d.r.'s) of a line if           |
  |                                                                   |
  |        a = k l ,   b = k m ,   c = k n     for some  k  not 0     |
  |                                                                   |
  |   A line has INFINITELY many sets of d.r.'s.                      |
  |   Any non-zero multiple of a valid set is also valid.             |
  |                                                                   |
  |   -------------------------------------------------------------   |
  |                                                                   |
  |   TO CONVERT   d.r.'s  ->  d.c.'s                                 |
  |                                                                   |
  |        r  =  sqrt( a^2 + b^2 + c^2 )                              |
  |                                                                   |
  |                     a           b           c                     |
  |        (l, m, n) = ( +-  --- , +-  --- , +-  --- )                |
  |                        r           r           r                  |
  |                                                                   |
  |   ALL THREE signs must be taken the same way.                     |
  |                                                                   |
  +===================================================================+
```

| Formula / fact | When to use |
|---|---|
| divide by `r = sqrt(a^2+b^2+c^2)` | every "find the direction cosines" question |
| both `+` and `-` sets are correct | when the question does not fix a direction |
| you may scale d.r.'s freely (clear fractions, cancel factors) | to make the arithmetic easy |
| `(1,2,2)` are RATIOS; `(1/3,2/3,2/3)` are COSINES | read the question word carefully |

## The whole-number triples worth memorising

```
  +---------------------+---------+---------------------------------+
  |   d.r.'s            |    r    |   d.c.'s                        |
  +---------------------+---------+---------------------------------+
  |   (1, 2, 2)         |    3    |   (1/3, 2/3, 2/3)               |
  |   (2, 2, 1)         |    3    |   (2/3, 2/3, 1/3)               |
  |   (1, -2, 2)        |    3    |   (1/3, -2/3, 2/3)              |
  |   (3, 4, 0)         |    5    |   (3/5, 4/5, 0)                 |
  |   (2, -3, 6)        |    7    |   (2/7, -3/7, 6/7)              |
  |   (3, 6, -2)        |    7    |   (3/7, 6/7, -2/7)              |
  |   (6, 2, 3)         |    7    |   (6/7, 2/7, 3/7)               |
  |   (2, 3, 6)         |    7    |   (2/7, 3/7, 6/7)               |
  |   (3, -4, 12)       |   13    |   (3/13, -4/13, 12/13)          |
  |   (4, 3, 12)        |   13    |   (4/13, 3/13, 12/13)           |
  |   (1, 1, 1)         | sqrt3   |   (1/sqrt3, 1/sqrt3, 1/sqrt3)   |
  |   (1, 1, 0)         | sqrt2   |   (1/sqrt2, 1/sqrt2, 0)         |
  |   (1, -1, 0)        | sqrt2   |   (1/sqrt2, -1/sqrt2, 0)        |
  +---------------------+---------+---------------------------------+
```

---

# 5. THE LINE JOINING TWO POINTS

```
  +===================================================================+
  |                                                                   |
  |   For  A(x1, y1, z1)  and  B(x2, y2, z2) :                        |
  |                                                                   |
  |     d.r.'s of AB  =  ( x2 - x1 ,  y2 - y1 ,  z2 - z1 )            |
  |                                                                   |
  |     AB = sqrt( (x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 )                |
  |                                                                   |
  |                       x2-x1     y2-y1     z2-z1                   |
  |     d.c.'s of AB = (  -----  ,  -----  ,  -----  )                |
  |                        AB        AB        AB                     |
  |                                                                   |
  +===================================================================+
```

| Formula / fact | When to use |
|---|---|
| **SUBTRACT** the coordinates for d.r.'s | any question with two points in it |
| divide by the distance `AB` for d.c.'s | when the word "cosines" appears |
| `B - A` and `A - B` give the two opposite sets | both are correct |
| d.r.'s of `OP` for the origin `O` are just `(x, y, z)` | line through the origin |

---

# 6. PROJECTIONS

```
  +===================================================================+
  |                                                                   |
  |   Projection of the segment AB on a line with direction           |
  |   COSINES (l, m, n) :                                             |
  |                                                                   |
  |       l (x2 - x1)  +  m (y2 - y1)  +  n (z2 - z1)                 |
  |                                                                   |
  |   Equivalently   AB cos theta ,  where theta is the angle         |
  |   between AB and the line.                                        |
  |                                                                   |
  |   -------------------------------------------------------------   |
  |                                                                   |
  |   Projections of AB on the three AXES :                           |
  |                                                                   |
  |       on x-axis :  x2 - x1                                        |
  |       on y-axis :  y2 - y1        <- these ARE the d.r.'s of AB   |
  |       on z-axis :  z2 - z1                                        |
  |                                                                   |
  |   -------------------------------------------------------------   |
  |                                                                   |
  |   If the projections on the axes are p, q, r then                 |
  |                                                                   |
  |       length  L = sqrt( p^2 + q^2 + r^2 )                         |
  |       d.c.'s    = ( p/L , q/L , r/L )                             |
  |                                                                   |
  +===================================================================+
```

| Formula / fact | When to use |
|---|---|
| `l dx + m dy + n dz` | "find the projection of the segment on the line ..." |
| the projecting line MUST be given by **cosines** | convert d.r.'s first, or your answer is `r` times too big |
| a projection may be **negative** | "length of the projection" means take the modulus |
| d.r.'s = the three axis-projections | to remember Section 5 |

---

# 7. THE ANGLE BETWEEN TWO LINES

```
  +===================================================================+
  |                                                                   |
  |   WITH DIRECTION COSINES                                          |
  |                                                                   |
  |        cos theta  =  l1 l2  +  m1 m2  +  n1 n2                    |
  |                                                                   |
  |        sin theta  =  sqrt[ (l1 m2 - l2 m1)^2                      |
  |                          + (m1 n2 - m2 n1)^2                      |
  |                          + (n1 l2 - n2 l1)^2 ]                    |
  |                                                                   |
  |   -------------------------------------------------------------   |
  |                                                                   |
  |   WITH DIRECTION RATIOS                                           |
  |                                                                   |
  |                       a1a2  +  b1b2  +  c1c2                      |
  |   cos theta  =  ----------------------------------------------    |
  |                 sqrt(a1^2+b1^2+c1^2) . sqrt(a2^2+b2^2+c2^2)       |
  |                                                                   |
  |                                                                   |
  |                 sqrt[ (a1b2-a2b1)^2 + (b1c2-b2c1)^2               |
  |                                      + (c1a2-c2a1)^2 ]            |
  |   sin theta  =  ----------------------------------------------    |
  |                 sqrt(a1^2+b1^2+c1^2) . sqrt(a2^2+b2^2+c2^2)       |
  |                                                                   |
  |   For the ACUTE angle, put the cos numerator in a modulus.        |
  |                                                                   |
  +===================================================================+
```

| Formula | When to use |
|---|---|
| `cos = l1l2 + m1m2 + n1n2` | when both lines are given by **cosines** — no denominator needed |
| the d.r. version with two square roots | the usual case, when ratios are given |
| the **sin** version | when the answer is wanted as `sin^-1`, or as a cross-check |
| `tan theta = sin / cos` | when the question asks for `tan` of the angle |
| check `sin^2 + cos^2 = 1` | **always** — it catches every arithmetic slip |

---

# 8. PERPENDICULAR AND PARALLEL

```
  +===================================================================+
  |                                                                   |
  |   PERPENDICULAR                                                   |
  |                                                                   |
  |        l1 l2 + m1 m2 + n1 n2  =  0                                |
  |        a1 a2 + b1 b2 + c1 c2  =  0                                |
  |                                                                   |
  |   -------------------------------------------------------------   |
  |                                                                   |
  |   PARALLEL                                                        |
  |                                                                   |
  |         a1       b1       c1                                      |
  |        ----  =  ----  =  ----                                     |
  |         a2       b2       c2                                      |
  |                                                                   |
  |        or, with cosines,   l1 = +- l2 , m1 = +- m2 , n1 = +- n2   |
  |        (all three signs the same)                                 |
  |                                                                   |
  +===================================================================+
```

| Formula / fact | When to use |
|---|---|
| dot product `= 0` | "show that the lines are perpendicular" / "find k so that ..." |
| ratios equal | "show that the lines are parallel" / "find p and q" |
| if a ratio has a zero denominator, argue in words instead | e.g. `(2,0,3)` and `(4,0,6)` |
| perpendicularity is the fastest 2 marks in the chapter | two lines of working |

---

# 9. A LINE PERPENDICULAR TO TWO GIVEN LINES

```
  +===================================================================+
  |                                                                   |
  |   Given d.r.'s  (a1, b1, c1)  and  (a2, b2, c2) , the line        |
  |   perpendicular to BOTH has d.r.'s                                |
  |                                                                   |
  |     ( b1c2 - b2c1 ,   c1a2 - c2a1 ,   a1b2 - a2b1 )               |
  |                                                                   |
  +===================================================================+

  THE CROSS-MULTIPLICATION LAYOUT

           b1      c1      a1      b1
             \    /  \    /  \    /
              \  /    \  /    \  /
               \/      \/      \/
               /\      /\      /\
              /  \    /  \    /  \
             /    \  /    \  /    \
           b2      c2      a2      b2

           |       |       |
           v       v       v
        b1c2 -  c1a2 -  a1b2 -
        b2c1    c2a1    a2b1

  THE LETTERS CYCLE:   bc  ->  ca  ->  ab
  The middle one is  ca , NOT  ac . Getting that wrong flips its sign.
```

| Formula / fact | When to use |
|---|---|
| the cross-multiplication triple | "find a line perpendicular to both ..." |
| **CHECK**: dot with line 1 `= 0` and dot with line 2 `= 0` | after every single cross product |
| a `(0,0,0)` result means the two lines were **parallel** | say so; do not divide by zero |
| the same triple appears inside `sin theta` | learn it once, use it twice |

---

# 10. COLLINEAR POINTS

```
  +===================================================================+
  |                                                                   |
  |   A, B, C are COLLINEAR                                           |
  |                                                                   |
  |     <=>  the d.r.'s of AB are PROPORTIONAL to the d.r.'s of BC    |
  |                                                                   |
  |          x3-x2       y3-y2       z3-z2                            |
  |         -------  =  -------  =  -------   =  k                    |
  |          x2-x1       y2-y1       z2-z1                            |
  |                                                                   |
  |   (the same k in all three places)                                |
  |                                                                   |
  |   Alternative from Chapter 5:   AB + BC = AC                      |
  |                                                                   |
  +===================================================================+
```

| Method | When to use |
|---|---|
| proportional d.r.'s | **preferred** — no square roots, works every time |
| `AB + BC = AC` | when the distances are nice whole numbers |
| set the ratios equal to find a missing coordinate | "find k so that the points are collinear" |

---

# 11. BISECTORS OF THE ANGLE BETWEEN TWO LINES

```
  +===================================================================+
  |                                                                   |
  |   Lines with DIRECTION COSINES (l1,m1,n1) and (l2,m2,n2) :        |
  |                                                                   |
  |     INTERNAL bisector d.r.'s :  ( l1+l2 , m1+m2 , n1+n2 )         |
  |                                                                   |
  |     EXTERNAL bisector d.r.'s :  ( l1-l2 , m1-m2 , n1-n2 )         |
  |                                                                   |
  |   Then divide each by its own length to get its d.c.'s.           |
  |                                                                   |
  |   The two bisectors are always PERPENDICULAR to each other.       |
  |                                                                   |
  +===================================================================+
```

| Formula / fact | When to use |
|---|---|
| add the cosines for the internal bisector | "find the d.c.'s of the bisector of the angle" |
| subtract for the external bisector | the same question, other part |
| you MUST convert to **cosines** before adding | ratios of different lengths give the wrong line |
| check the two bisectors dot to `0` | free verification |

---

# 12. A LINE AND A COORDINATE PLANE

```
  +===================================================================+
  |                                                                   |
  |   For a line with direction cosines (l, m, n) :                   |
  |                                                                   |
  |      angle with the  yz - plane :   sin phi  =  |l|               |
  |      angle with the  zx - plane :   sin phi  =  |m|               |
  |      angle with the  xy - plane :   sin phi  =  |n|               |
  |                                                                   |
  |   MEMORY RULE: use the letter MISSING from the plane's name.      |
  |                                                                   |
  |   And for free:                                                   |
  |      sin^2(yz) + sin^2(zx) + sin^2(xy)  =  1                      |
  |                                                                   |
  +===================================================================+

     LINE  vs  LINE   ->   use  COS
     LINE  vs  PLANE  ->   use  SIN
```

| Formula / fact | When to use |
|---|---|
| `sin phi = |n|` for the xy-plane | "angle made by the line with the xy-plane" |
| `phi = 90 - gamma` | the same fact stated with angles |
| a line **lying in** the xy-plane has `n = 0` | condition questions |
| a line **perpendicular to** the xy-plane has d.c.'s `(0, 0, 1)` | condition questions |

---

# 13. THE TWO-CONDITION QUESTIONS (method, not a formula)

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   GIVEN:  one LINEAR equation in l, m, n                          |
  |           one QUADRATIC equation in l, m, n                       |
  |                                                                   |
  |   STEP 1   Use the linear one to write  n = -(l+m)  (or similar). |
  |   STEP 2   Substitute into the quadratic.                         |
  |   STEP 3   You get a homogeneous quadratic in two letters.        |
  |            FACTORISE it -> two cases.                             |
  |   STEP 4   Each case gives one set of d.r.'s.                     |
  |   STEP 5   Use  cos theta = ...  on the two sets.                 |
  |                                                                   |
  |   STANDARD RESULTS worth recognising:                             |
  |                                                                   |
  |     l+m+n = 0 ,  l^2+m^2-n^2 = 0     ->   lines (0,1,-1),(1,0,-1) |
  |                                          angle = 60 degrees       |
  |                                                                   |
  |     2l+2m-n = 0 , mn+nl+lm = 0       ->   lines (1,-2,-2),        |
  |                                                 (-2,1,-2)         |
  |                                          they are PERPENDICULAR   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# 14. THE CUBE FACTS (loved by EAPCET and JEE)

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   Cube with one corner at O and edges along the axes:             |
  |                                                                   |
  |     an EDGE has d.r.'s     (1,0,0) , (0,1,0) , (0,0,1)            |
  |                                                                   |
  |     the four DIAGONALS have d.r.'s                                |
  |            (1, 1, 1) , (-1, 1, 1) , (1, -1, 1) , (1, 1, -1)       |
  |                                                                   |
  |     angle between TWO DIAGONALS      =  cos^-1 ( 1/3 )            |
  |                                         about 70 deg 32 min       |
  |                                                                   |
  |     angle between a DIAGONAL and an EDGE  =  cos^-1 ( 1/sqrt3 )   |
  |                                         about 54 deg 44 min       |
  |                                                                   |
  |     WORKING for the first one:                                    |
  |        (1,1,1).(-1,1,1) = -1+1+1 = 1 ,  lengths sqrt3 . sqrt3 = 3 |
  |        cos theta = 1/3                                            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+-------------------------------------------------------------+
  |  1 |  l = cos a ,  m = cos b ,  n = cos c                         |
  +----+-------------------------------------------------------------+
  |  2 |  l^2 + m^2 + n^2 = 1                        <- the law       |
  +----+-------------------------------------------------------------+
  |  3 |  sin^2 a + sin^2 b + sin^2 c = 2                             |
  +----+-------------------------------------------------------------+
  |  4 |  d.r. -> d.c. :  divide by  r = sqrt(a^2+b^2+c^2)   (+/-)    |
  +----+-------------------------------------------------------------+
  |  5 |  d.r.'s of AB = ( x2-x1 , y2-y1 , z2-z1 )                    |
  +----+-------------------------------------------------------------+
  |  6 |  d.c.'s of AB = those differences divided by AB              |
  +----+-------------------------------------------------------------+
  |  7 |  projection of AB on (l,m,n) = l dx + m dy + n dz            |
  +----+-------------------------------------------------------------+
  |  8 |  cos theta = l1l2 + m1m2 + n1n2                              |
  +----+-------------------------------------------------------------+
  |  9 |  cos theta = |a1a2+b1b2+c1c2| / (sqrt(..) sqrt(..))          |
  +----+-------------------------------------------------------------+
  | 10 |  perpendicular: a1a2+b1b2+c1c2 = 0                           |
  |    |  parallel:      a1/a2 = b1/b2 = c1/c2                        |
  +----+-------------------------------------------------------------+
  | 11 |  perpendicular to both:                                      |
  |    |  ( b1c2-b2c1 , c1a2-c2a1 , a1b2-a2b1 )                       |
  +----+-------------------------------------------------------------+
  | 12 |  bisectors: (l1+l2, m1+m2, n1+n2) and (l1-l2, m1-m2, n1-n2)  |
  +----+-------------------------------------------------------------+
```

## And the single habit worth more than all twelve

```
   Every time you produce direction cosines, write ONE more line:

           l^2 + m^2 + n^2  =  ......  =  1

   If it does not come to 1, your answer is wrong and you still
   have time to fix it. If it does, you have also shown the
   examiner that you know what direction cosines mean.
```
