# The Straight Line — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

Throughout: `abs(...)` means "absolute value" (drop the minus sign), and
`sqrt(...)` means square root.

---

# 1. SLOPE

```
  +----------------------------------------------------------------+
  |                                                                |
  |   From the angle of inclination:      m  =  tan(theta)         |
  |                                                                |
  |                                             y2 - y1            |
  |   From two points (x1,y1),(x2,y2):    m  =  ---------          |
  |                                             x2 - x1            |
  |                                                                |
  |                                             -a                 |
  |   From  ax + by + c = 0 :             m  =  ----               |
  |                                              b                 |
  |                                                                |
  |   From  y = mx + c :                  m  =  the number in      |
  |                                             front of x         |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| m = tan(theta) | the question gives an angle with the x-axis |
| m = (y2 - y1)/(x2 - x1) | two points are given |
| m = -a/b | the line is already in general form |
| m = 0 | line is horizontal, parallel to the x-axis, equation y = k |
| m is UNDEFINED | line is vertical, parallel to the y-axis, equation x = k |
| m1 = m2 | testing / forcing PARALLEL |
| m1 x m2 = -1 | testing / forcing PERPENDICULAR |

**The tan table you must know cold:**

| theta | 0 | 30 | 45 | 60 | 90 | 120 | 135 | 150 |
|-------|---|----|----|----|----|-----|-----|-----|
| m = tan(theta) | 0 | 1/sqrt(3) | 1 | sqrt(3) | undefined | -sqrt(3) | -1 | -1/sqrt(3) |

---

# 2. THE FIVE STANDARD FORMS

```
  +==============================================================+
  |                                                              |
  |  1. SLOPE-INTERCEPT      y  =  m x  +  c                     |
  |                                                              |
  |  2. POINT-SLOPE          y - y1  =  m ( x - x1 )             |
  |                                                              |
  |                           y - y1        y2 - y1              |
  |  3. TWO-POINT            ---------  =  ----------            |
  |                           x - x1        x2 - x1              |
  |                                                              |
  |                           x       y                          |
  |  4. INTERCEPT            ---  +  ---  =  1                   |
  |                           a       b                          |
  |                                                              |
  |  5. NORMAL               x cos(alpha) + y sin(alpha) = p     |
  |                                                              |
  |                           x - x1        y - y1               |
  |  6. SYMMETRIC (bonus)   -----------  = -----------  =  r     |
  |                          cos(theta)     sin(theta)           |
  |                                                              |
  +==============================================================+
```

| Form | What you must be given | When to use |
|------|------------------------|-------------|
| y = mx + c | slope and y-intercept | "slope is m and it cuts the y-axis at c" |
| y - y1 = m(x - x1) | one point and the slope | the most common case of all |
| two-point | two points | two points given (or find m first, then use point-slope) |
| x/a + y/b = 1 | both intercepts | any question containing the word "intercept" or "axes" |
| x cos(alpha) + y sin(alpha) = p | distance from origin and the normal's angle | the words "normal form", or "distance from origin is p" |
| symmetric form | one point and the inclination | "line through Q at angle theta meets L at P, find PQ" |

**Special lines to write instantly:**

```
  Parallel to the x-axis, through (h, k)    ->    y = k
  Parallel to the y-axis, through (h, k)    ->    x = h
  The x-axis itself                         ->    y = 0
  The y-axis itself                         ->    x = 0
  Through the origin with slope m           ->    y = m x
```

**Intercept-form variations that are asked as 2-mark questions:**

| Wording in the question | Set up | Reduces to |
|-------------------------|--------|------------|
| equal intercepts | b = a | x + y = a |
| intercepts equal in magnitude, opposite in sign | b = -a | x - y = a |
| sum of the intercepts is zero | b = -a | x - y = a |
| the intercepts are in ratio 2:3 | a = 2k, b = 3k | 3x + 2y = 6k |
| the line makes a triangle of area A with the axes | (1/2) abs(ab) = A | solve for a and b |

---

# 3. THE GENERAL EQUATION  ax + by + c = 0

```
  +----------------------------------------------------------------+
  |                                                                |
  |                    -a                    -c                    |
  |   slope  m  =     ----      x-intercept = ----                 |
  |                     b                      a                   |
  |                                                                |
  |                                          -c                    |
  |                             y-intercept = ----                 |
  |                                            b                   |
  |                                                                |
  +----------------------------------------------------------------+
```

## Reducing ax + by + c = 0 to the standard forms

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  TO SLOPE-INTERCEPT:   make y the subject.                           |
  |                                                                      |
  |                            -a          -c                            |
  |                     y  =  ---- x  +  ----                            |
  |                             b           b                            |
  |                                                                      |
  +----------------------------------------------------------------------+
  |                                                                      |
  |  TO INTERCEPT FORM:    move c to the right, then divide by (-c).     |
  |                                                                      |
  |                        x            y                                |
  |                     --------  +  --------  =  1                      |
  |                      (-c/a)       (-c/b)                             |
  |                                                                      |
  +----------------------------------------------------------------------+
  |                                                                      |
  |  TO NORMAL FORM:       divide the whole equation by                  |
  |                        sqrt(a^2 + b^2),                              |
  |                        then make the RIGHT-HAND SIDE POSITIVE        |
  |                        (multiply by -1 if you must).                 |
  |                                                                      |
  |          a                b                 -c                       |
  |     ------------ x + ------------ y  =  ------------                 |
  |     sqrt(a^2+b^2)    sqrt(a^2+b^2)      sqrt(a^2+b^2)                |
  |                                                                      |
  |     cos(alpha)         sin(alpha)            p                       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Building new lines from a given one

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  PARALLEL to  ax + by + c = 0        ->     ax + by + k = 0        |
  |     (keep a and b exactly, change only the constant)               |
  |                                                                    |
  |  PERPENDICULAR to  ax + by + c = 0   ->     bx - ay + k = 0        |
  |     (SWAP a and b, then flip ONE of the signs)                     |
  |                                                                    |
  |  Find k by substituting the point the new line must pass through.  |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| ax + by + k = 0 | "find the line parallel to ... through the point ..." |
| bx - ay + k = 0 | "find the line perpendicular to ... through the point ..." |
| a1/a2 = b1/b2 not equal to c1/c2 | the two lines are parallel (never meet) |
| a1/a2 = b1/b2 = c1/c2 | the two lines are the SAME line (coincident) |

---

# 4. TWO LINES: ANGLE, PARALLEL, PERPENDICULAR

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                             m1  -  m2                              |
  |     tan(theta)  =   abs  --------------                            |
  |                            1  +  m1 m2                             |
  |                                                                    |
  |     gives the ACUTE angle between the lines                        |
  |                                                                    |
  |     In general form (safer, works for vertical lines too):         |
  |                                                                    |
  |                            a1 b2  -  a2 b1                         |
  |     tan(theta)  =   abs  ------------------                        |
  |                            a1 a2  +  b1 b2                         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Condition | Using slopes | Using coefficients | When to use |
|-----------|--------------|--------------------|-------------|
| Parallel | m1 = m2 | a1 b2 - a2 b1 = 0 | "find k so the lines are parallel" |
| Perpendicular | m1 x m2 = -1 | a1 a2 + b1 b2 = 0 | "find k so the lines are perpendicular" |
| Angle theta given | tan formula above | tan formula above | "find k if the angle is 45 degrees" |
| Coincident | same line | a1/a2 = b1/b2 = c1/c2 | "for what k do they represent the same line" |

**Two lines making a given angle with a given line** (a standard 4-mark item):
if the given line has slope m2 and the angle is theta, then the required slope
m satisfies

```
              m  -  m2
     abs  ---------------   =   tan(theta)
            1  +  m m2
```

which gives TWO answers, and therefore TWO lines. Never write only one.

---

# 5. INTERSECTION AND CONCURRENCY

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  POINT OF INTERSECTION of  a1 x + b1 y + c1 = 0                    |
  |                       and  a2 x + b2 y + c2 = 0 :                  |
  |                                                                    |
  |         x                  y                    1                  |
  |   -------------- = --------------- = ------------------            |
  |   b1 c2 - b2 c1    c1 a2 - c2 a1     a1 b2 - a2 b1                 |
  |                                                                    |
  |   (or just solve the two equations - usually faster in the exam)   |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  THREE LINES ARE CONCURRENT  when                                  |
  |                                                                    |
  |            | a1   b1   c1 |                                        |
  |            | a2   b2   c2 |   =   0                                |
  |            | a3   b3   c3 |                                        |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| Solve two equations, test in the third | board question "show they are concurrent" |
| 3x3 determinant = 0 | quick MCQ, or "find k for concurrency" |
| Solve the two equations WITHOUT k first | always, when one line contains an unknown |

---

# 6. DISTANCES

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  DISTANCE BETWEEN TWO POINTS                                       |
  |                                                                    |
  |      d  =  sqrt( (x2 - x1)^2  +  (y2 - y1)^2 )                     |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  PERPENDICULAR DISTANCE from P(x1,y1) to  ax + by + c = 0          |
  |                                                                    |
  |                abs( a x1  +  b y1  +  c )                          |
  |      d  =    ------------------------------                        |
  |                    sqrt( a^2 + b^2 )                               |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  DISTANCE FROM THE ORIGIN to  ax + by + c = 0                      |
  |                                                                    |
  |                    abs( c )                                        |
  |      d  =    --------------------                                  |
  |               sqrt( a^2 + b^2 )                                    |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  DISTANCE BETWEEN THE PARALLEL LINES                               |
  |        ax + by + c1 = 0    and    ax + by + c2 = 0                 |
  |                                                                    |
  |                abs( c1  -  c2 )                                    |
  |      d  =    ---------------------                                 |
  |               sqrt( a^2 + b^2 )                                    |
  |                                                                    |
  |  ***  the a and b MUST be identical in both equations first  ***   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| point-to-line | "find the distance from ... to the line ..." , also for radius questions |
| origin-to-line | "length of the perpendicular from the origin" |
| parallel-pair | "distance between the parallel lines" — SCALE THEM FIRST |
| midpoint = ((x1+x2)/2, (y1+y2)/2) | perpendicular bisector, circumcentre, image checks |
| 1/p^2 = 1/a^2 + 1/b^2 | perpendicular from origin to x/a + y/b = 1 (standard proof) |

---

# 7. FOOT OF THE PERPENDICULAR AND IMAGE OF A POINT

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |    ONE FORMULA, TWO QUESTIONS.                                     |
  |                                                                    |
  |     x - x1        y - y1            ( a x1 + b y1 + c )            |
  |    ---------  =  ---------   =  k  --------------------            |
  |        a             b                 a^2  +  b^2                 |
  |                                                                    |
  |         k = -1   ->   (x, y) is the FOOT of the perpendicular      |
  |         k = -2   ->   (x, y) is the IMAGE (reflection)             |
  |                                                                    |
  |    Working method:  compute  t = k (a x1 + b y1 + c)/(a^2 + b^2)   |
  |                     then     x = x1 + a t   and   y = y1 + b t     |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| k = -1 version | "find the foot of the perpendicular from ... to ..." |
| k = -2 version | "find the image / reflection of ... in the line ..." |
| foot is the midpoint of P and its image | to CHECK an image answer in 20 seconds |
| image of (h,k) in y = x is (k,h) | instant MCQ answer |
| image of (h,k) in the x-axis is (h,-k) | instant MCQ answer |
| image of (h,k) in the y-axis is (-h,k) | instant MCQ answer |

---

# 8. FAMILY OF LINES

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     L1  +  k L2  =  0                                              |
  |                                                                    |
  |     ( a1 x + b1 y + c1 )  +  k ( a2 x + b2 y + c2 )  =  0          |
  |                                                                    |
  |     Passes through the intersection of L1 and L2 for EVERY k,      |
  |     so you never have to find that intersection point.             |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Extra condition in the question | What you do to find k |
|---------------------------------|-----------------------|
| "and passes through the point P" | substitute P, solve for k |
| "and is parallel to L3" | set slope of family = slope of L3 |
| "and is perpendicular to L3" | set (slope of family) x (slope of L3) = -1 |
| "and is parallel to the x-axis" | set the coefficient of x equal to 0 |
| "and passes through the origin" | set the constant term equal to 0 |

---

# 9. RATIO OF DIVISION AND SIDE OF A LINE

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  SECTION FORMULA - point dividing A(x1,y1), B(x2,y2) in m : n      |
  |                                                                    |
  |         ( m x2 + n x1      m y2 + n y1 )                           |
  |        ( --------------- , --------------- )     internally        |
  |         (     m + n            m + n     )                         |
  |                                                                    |
  |         ( m x2 - n x1      m y2 - n y1 )                           |
  |        ( --------------- , --------------- )     externally        |
  |         (     m - n            m - n     )                         |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  RATIO IN WHICH  ax + by + c = 0  DIVIDES  AB                      |
  |                                                                    |
  |                    -( a x1 + b y1 + c )              - L(A)        |
  |     ratio   =    -----------------------     i.e.   --------       |
  |                     ( a x2 + b y2 + c )               L(B)         |
  |                                                                    |
  |     POSITIVE  ->  internal division                                |
  |     NEGATIVE  ->  external division                                |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  SIDE OF A LINE                                                    |
  |                                                                    |
  |     L(P) x L(Q)  >  0   ->   P and Q on the SAME side              |
  |     L(P) x L(Q)  <  0   ->   P and Q on OPPOSITE sides             |
  |     L(P)         =  0   ->   P lies ON the line                    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| ratio = -L(A) : L(B) | "in what ratio does the line divide the join of ..." |
| ratio for the x-axis | put a=0, b=1, c=0 : ratio = -y1 : y2 |
| ratio for the y-axis | put a=1, b=0, c=0 : ratio = -x1 : x2 |
| sign test | "do the points lie on the same side of ..." |
| section formula | to actually FIND the dividing point after getting the ratio |

---

# 10. AREAS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  TRIANGLE FORMED BY A LINE WITH THE COORDINATE AXES                |
  |                                                                    |
  |     from  x/a + y/b = 1 :        Area  =  (1/2) abs( a b )         |
  |                                                                    |
  |                                              c^2                   |
  |     from  ax + by + c = 0 :      Area  =  ------------             |
  |                                            2 abs(a b)              |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  TRIANGLE FROM THREE VERTICES                                      |
  |                                                                    |
  |     Area = (1/2) abs[ x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2) ]    |
  |                                                                    |
  |     Area = 0   <=>   the three points are COLLINEAR                |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| (1/2) abs(ab) | line given in intercept form |
| c^2 / (2 abs(ab)) | line given in general form — no need to find intercepts |
| Area = 0 | proving three points are collinear |
| set Area = given value, solve for k | the reverse question "find k if the area is 6" |

---

# 11. ANGLE BISECTORS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     a1 x + b1 y + c1               a2 x + b2 y + c2                |
  |   ----------------------  =  +/-  ----------------------           |
  |     sqrt(a1^2 + b1^2)              sqrt(a2^2 + b2^2)               |
  |                                                                    |
  |   The two answers are the two bisectors, and they are always       |
  |   PERPENDICULAR to each other. Use that as your check.             |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The decision rule — follow the order exactly

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  STEP 0   Rewrite both equations so that c1 > 0 AND c2 > 0.        |
  |           (Multiply by -1 where needed.) DO THIS FIRST.            |
  |                                                                    |
  |  STEP 1   The  " + "  bisector is the one CONTAINING THE ORIGIN.   |
  |                                                                    |
  |  STEP 2   Compute   a1 a2  +  b1 b2                                |
  |                                                                    |
  |             NEGATIVE   ->  the origin bisector is the ACUTE one    |
  |             POSITIVE   ->  the origin bisector is the OBTUSE one   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Situation | Answer |
|-----------|--------|
| "bisector containing the origin" | the + sign, after making both constants positive |
| "bisector of the acute angle" | + if a1a2 + b1b2 is negative, otherwise - |
| "bisector of the obtuse angle" | the other one |
| "bisector of the angle containing the point P" | make L1(P) and L2(P) both positive, then take + |
| check your two answers | their slopes must multiply to -1 |

---

# 12. TRIANGLE CENTRES

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  CENTROID  G  (medians meet)                                       |
  |                                                                    |
  |        ( x1 + x2 + x3     y1 + y2 + y3 )                           |
  |       ( ---------------- , --------------- )                       |
  |        (       3                 3       )                         |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  ORTHOCENTRE  O  (altitudes meet)                                  |
  |     -> write TWO altitudes and solve them together                 |
  |        altitude from A  =  line through A with slope  -1/(slope BC)|
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  CIRCUMCENTRE  S  (perpendicular bisectors meet)                   |
  |     -> write TWO perpendicular bisectors and solve them together   |
  |        through the MIDPOINT of a side, perpendicular to that side  |
  |     -> S is equidistant from all three vertices (use as a check)   |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  INCENTRE  I  (internal angle bisectors meet)                      |
  |     with a = BC , b = CA , c = AB  (the SIDE LENGTHS)              |
  |                                                                    |
  |        ( a x1 + b x2 + c x3     a y1 + b y2 + c y3 )               |
  |       ( ---------------------- , ---------------------- )          |
  |        (      a + b + c                a + b + c      )            |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  EULER LINE:   O , G , S are always COLLINEAR  and  OG : GS = 2:1  |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Special triangle | Orthocentre | Circumcentre |
|------------------|-------------|--------------|
| Right-angled | the vertex with the right angle | the midpoint of the hypotenuse |
| Equilateral | same as the centroid | same as the centroid |
| Any triangle | solve two altitudes | solve two perpendicular bisectors |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

If you learn nothing else in this chapter, learn these twelve.
They cover roughly 90 percent of every mark this chapter has ever offered.

```
  +----+------------------------------------------------------------------+
  | 1  |  m = tan(theta)      and      m = (y2 - y1)/(x2 - x1)            |
  +----+------------------------------------------------------------------+
  | 2  |  y - y1  =  m ( x - x1 )                    point-slope form     |
  +----+------------------------------------------------------------------+
  | 3  |  x/a  +  y/b  =  1                          intercept form       |
  +----+------------------------------------------------------------------+
  | 4  |  x cos(alpha)  +  y sin(alpha)  =  p        normal form          |
  +----+------------------------------------------------------------------+
  | 5  |  for ax + by + c = 0 :  m = -a/b ,                               |
  |    |  x-intercept = -c/a ,   y-intercept = -c/b                       |
  +----+------------------------------------------------------------------+
  | 6  |  tan(theta) = abs( (m1 - m2)/(1 + m1 m2) )                       |
  |    |  parallel: m1 = m2      perpendicular: m1 m2 = -1                |
  +----+------------------------------------------------------------------+
  | 7  |  d = abs(a x1 + b y1 + c) / sqrt(a^2 + b^2)                      |
  +----+------------------------------------------------------------------+
  | 8  |  d = abs(c1 - c2) / sqrt(a^2 + b^2)      (SCALE the lines first) |
  +----+------------------------------------------------------------------+
  | 9  |  (x - x1)/a = (y - y1)/b = k (a x1 + b y1 + c)/(a^2 + b^2)       |
  |    |  k = -1 gives the FOOT , k = -2 gives the IMAGE                  |
  +----+------------------------------------------------------------------+
  | 10 |  L1 + k L2 = 0                              family of lines      |
  +----+------------------------------------------------------------------+
  | 11 |  ratio = - L(A) : L(B)     positive = internal, negative = ext.  |
  |    |  same sign of L(P), L(Q) = same side of the line                 |
  +----+------------------------------------------------------------------+
  | 12 |  Area with the axes = (1/2) abs(ab) = c^2 / (2 abs(ab))          |
  +----+------------------------------------------------------------------+
```

**And the one decision rule for the 7-mark bisector question:**

```
  make c1 > 0 and c2 > 0    ->    " + " is the ORIGIN bisector
  a1 a2 + b1 b2  <  0       ->    that origin bisector is the ACUTE one
  a1 a2 + b1 b2  >  0       ->    that origin bisector is the OBTUSE one
```
