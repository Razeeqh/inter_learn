# Pair of Straight Lines — Formula Sheet

**Maths 1B · Chapter 4**

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use each formula — that is what the exam
actually tests.

Throughout: `abs(...)` = absolute value (drop the minus sign),
`sqrt(...)` = square root, `theta` = the angle between the two lines.

---

# 0. THE TWO STANDARD SHAPES — LEARN TO TELL THEM APART IN 2 SECONDS

```
  +====================================================================+
  |                                                                    |
  |   SHAPE 1  --  HOMOGENEOUS  (both lines pass through the ORIGIN)   |
  |                                                                    |
  |            a x^2  +  2h xy  +  b y^2  =  0                         |
  |                                                                    |
  |            Only three terms. No x, no y, no plain number.          |
  |                                                                    |
  |                                                                    |
  |   SHAPE 2  --  GENERAL  (lines anywhere on the plane)              |
  |                                                                    |
  |     S = a x^2 + 2h xy + b y^2 + 2g x + 2f y + c  =  0              |
  |                                                                    |
  |            Six terms.                                              |
  |                                                                    |
  +====================================================================+
```

**THE HALVING RULE — the single biggest source of lost marks:**

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   The coefficient you SEE   ->   the letter you USE                |
  |                                                                    |
  |        of x^2  =  a                    a  =  what you see          |
  |        of xy   =  2h                   h  =  HALF of it            |
  |        of y^2  =  b                    b  =  what you see          |
  |        of x    =  2g                   g  =  HALF of it            |
  |        of y    =  2f                   f  =  HALF of it            |
  |        constant=  c                    c  =  what you see          |
  |                                                                    |
  |   Example:  5x^2 - 7xy + 2y^2 + 3x - 9y + 4 = 0                    |
  |                                                                    |
  |     a = 5 ,  h = -7/2 ,  b = 2 ,  g = 3/2 ,  f = -9/2 ,  c = 4     |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Rule | When to use |
|---|---|
| a, b, c taken straight | always |
| h = (coefficient of xy)/2 | always |
| g = (coefficient of x)/2 | general equation only |
| f = (coefficient of y)/2 | general equation only |

---

# 1. THE HOMOGENEOUS PAIR — SLOPES

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   a x^2 + 2h xy + b y^2 = 0   holds the two lines                  |
  |                                                                    |
  |            y = m1 x       and       y = m2 x                       |
  |                                                                    |
  |   THE SLOPE EQUATION  (divide the pair by x^2 and put m = y/x):    |
  |                                                                    |
  |            b m^2  +  2h m  +  a  =  0                              |
  |                                                                    |
  |                        -2h                          a              |
  |        m1 + m2  =    -------        m1 . m2  =   -------           |
  |                          b                          b              |
  |                                                                    |
  |                             2 sqrt( h^2 - ab )                     |
  |        abs( m1 - m2 )  =  ---------------------                    |
  |                                  abs( b )                          |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `b m^2 + 2h m + a = 0` | to actually FIND the two slopes / the two separate lines |
| `m1 + m2 = -2h/b` | any question mentioning "sum of the slopes" |
| `m1 m2 = a/b` | any question mentioning "product of the slopes" |
| `abs(m1 - m2) = 2 sqrt(h^2-ab)/abs(b)` | as a stepping stone to the angle |
| factorise directly | when the numbers are small and friendly |

**Two ways to separate the lines:**

```
  METHOD 1  Split the middle term.
            3x^2 + 7xy + 2y^2 :  split 7 into 6 and 1  (6 x 1 = 3 x 2)
            = 3x(x + 2y) + y(x + 2y) = (3x + y)(x + 2y)

  METHOD 2  Solve  b m^2 + 2h m + a = 0  and write  y = m1 x , y = m2 x.
```

---

# 2. THE NATURE OF THE PAIR

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |        THE DISCRIMINANT OF THE PAIR   IS    h^2  -  ab             |
  |                                                                    |
  |     h^2 - ab  >  0   ->  REAL, DISTINCT   (two different lines)    |
  |     h^2 - ab  =  0   ->  COINCIDENT       (one line drawn twice)   |
  |     h^2 - ab  <  0   ->  IMAGINARY        (only the point O is     |
  |                                            real)                   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Test | When to use |
|---|---|
| `h^2 - ab > 0` | to say "real and distinct" — needed in every 7-mark answer |
| `h^2 - ab = 0` | "coincident lines", "the equation is a perfect square" |
| `h^2 - ab < 0` | answer is "no real lines; only the origin" |

---

# 3. THE ANGLE BETWEEN THE PAIR

```
  +====================================================================+
  |                                                                    |
  |                          2 sqrt( h^2  -  ab )                      |
  |         tan( theta )  =  ------------------------                  |
  |                               abs( a  +  b )                       |
  |                                                                    |
  |                              abs( a  +  b )                        |
  |         cos( theta )  =  --------------------------                |
  |                           sqrt( (a - b)^2  +  4 h^2 )              |
  |                                                                    |
  |         PERPENDICULAR   <=>    a  +  b  =  0                       |
  |                                                                    |
  |         PARALLEL / COINCIDENT  <=>   h^2  =  ab                    |
  |                                                                    |
  |   >>> THIS SAME FORMULA WORKS FOR THE 6-TERM EQUATION TOO. <<<     |
  |       g, f, c shift the lines but never tilt them.                 |
  |                                                                    |
  +====================================================================+
```

| Formula | When to use |
|---|---|
| `tan(theta) = 2 sqrt(h^2-ab)/abs(a+b)` | the default; use for every "find the angle" |
| `cos(theta) = abs(a+b)/sqrt((a-b)^2+4h^2)` | when `a + b = 0` and tan is infinite |
| `a + b = 0` | to test / force perpendicular. FASTEST check in the chapter |
| `h^2 = ab` | to test / force parallel or coincident |

**Angles you should recognise instantly:**

| Result | Means |
|---|---|
| `a + b = 0` | theta = 90 degrees. Stop, no more work. |
| `tan(theta) = 1` | theta = 45 degrees |
| `tan(theta) = sqrt(3)` | theta = 60 degrees |
| `tan(theta) = 1/sqrt(3)` | theta = 30 degrees |
| `h^2 = ab` | theta = 0 degrees (same direction) |

---

# 4. THE BISECTORS OF THE ANGLES

```
  +====================================================================+
  |                                                                    |
  |   For   a x^2 + 2h xy + b y^2 = 0   the pair of bisectors is       |
  |                                                                    |
  |            x^2  -  y^2            x y                              |
  |          -----------------  =  ---------                           |
  |               a  -  b               h                              |
  |                                                                    |
  |   cleared:    h ( x^2 - y^2 )  =  ( a - b ) x y                    |
  |                                                                    |
  |   i.e.        h x^2  -  (a - b) x y  -  h y^2  =  0                |
  |                                                                    |
  |   >>> The bisectors are ALWAYS perpendicular to each other,        |
  |       because  h + (-h) = 0.  Use this as your check. <<<          |
  |                                                                    |
  +====================================================================+
```

**For the GENERAL equation** — first find where the lines meet, at `(x0, y0)`,
then shift:

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     ( x - x0 )^2  -  ( y - y0 )^2        ( x - x0 )( y - y0 )      |
  |    -------------------------------  =  ------------------------    |
  |                a  -  b                            h                |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Situation | Bisector pair |
|---|---|
| general homogeneous pair | `h(x^2 - y^2) = (a - b) xy` |
| `h = 0` (slopes m and -m) | `xy = 0`, i.e. the two axes |
| `a = b` | `x^2 - y^2 = 0`, i.e. `y = x` and `y = -x` |
| lines meet at `(x0, y0)` | shift x to `x - x0`, y to `y - y0` |

**Derivation in three lines (write this if the proof is asked):**

```
   A bisector has inclination theta with  2 theta = alpha1 + alpha2 .

                     m1 + m2       -2h/b        2h
   tan(2 theta) =  -----------  =  --------  =  ------
                    1 - m1 m2      1 - a/b      a - b

                     2 tan(theta)       2 (y/x)          2 x y
   tan(2 theta) =  ----------------  =  -----------  =  -----------
                    1 - tan^2 theta     1 - y^2/x^2      x^2 - y^2

   Equate:      (x^2 - y^2)/(a - b)  =  x y / h
```

---

# 5. OTHER PAIRS BUILT FROM A GIVEN PAIR

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   GIVEN :   a x^2 + 2h xy + b y^2 = 0                              |
  |                                                                    |
  |   Pair through O PERPENDICULAR to it:                              |
  |                                                                    |
  |             b x^2  -  2h xy  +  a y^2  =  0                        |
  |             (swap a and b , flip the sign of h)                    |
  |                                                                    |
  |   Pair through O PARALLEL to  S = 0  (the 6-term one):             |
  |                                                                    |
  |             a x^2  +  2h xy  +  b y^2  =  0                        |
  |             (just delete g, f, c)                                  |
  |                                                                    |
  |   Pair through (x0, y0) parallel to  a x^2 + 2h xy + b y^2 = 0 :   |
  |                                                                    |
  |     a (x - x0)^2 + 2h (x - x0)(y - y0) + b (y - y0)^2 = 0          |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Wanted | Formula | When to use |
|---|---|---|
| perpendicular pair through O | `b x^2 - 2h xy + a y^2 = 0` | "find the pair perpendicular to ..." |
| parallel pair through O | `a x^2 + 2h xy + b y^2 = 0` | "the pair through the origin parallel to S = 0" |
| parallel pair through a point | replace x, y by `x - x0`, `y - y0` | shifted versions |
| bisector pair | `h(x^2-y^2) = (a-b)xy` | "angle bisectors" |

---

# 6. DISTANCES AND AREAS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PRODUCT OF PERPENDICULARS from (alpha, beta) to                  |
  |                a x^2 + 2h xy + b y^2 = 0 :                         |
  |                                                                    |
  |          abs( a alpha^2 + 2h alpha beta + b beta^2 )               |
  |         --------------------------------------------               |
  |                sqrt( (a - b)^2  +  4 h^2 )                         |
  |                                                                    |
  |   (top = just substitute the point into the equation)              |
  |                                                                    |
  |                                                                    |
  |   PRODUCT OF PERPENDICULARS FROM THE ORIGIN to the pair            |
  |                S = 0  (the 6-term one) :                           |
  |                                                                    |
  |                       abs( c )                                     |
  |                --------------------------                          |
  |                 sqrt( (a - b)^2 + 4 h^2 )                          |
  |                                                                    |
  |                                                                    |
  |   AREA OF THE TRIANGLE made by  a x^2 + 2h xy + b y^2 = 0          |
  |                with the line  l x + m y + n = 0 :                  |
  |                                                                    |
  |                     n^2 . sqrt( h^2 - ab )                         |
  |            -----------------------------------------               |
  |              abs( a m^2  -  2 h l m  +  b l^2 )                    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| product of perpendiculars from a point | "find the product of the perpendicular distances from ..." |
| `abs(c)/sqrt((a-b)^2+4h^2)` | same question but from the ORIGIN and the 6-term equation |
| area formula | "area of the triangle formed by the pair and the line ..." |

**Memory hook for the area denominator:** it is `a x^2 + 2h xy + b y^2` with
`x` replaced by `m` and `y` replaced by `-l`.

---

# 7. THE GENERAL EQUATION — THE CONDITION

```
  +====================================================================+
  |                                                                    |
  |   S = a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0                  |
  |                                                                    |
  |   REPRESENTS A PAIR OF STRAIGHT LINES                              |
  |                                                                    |
  |         if and only if                                             |
  |                                                                    |
  |    (1)   a b c  +  2 f g h  -  a f^2  -  b g^2  -  c h^2  =  0     |
  |                                                                    |
  |    (2)   h^2  >=  a b       (so the lines are real)                |
  |                                                                    |
  +====================================================================+


  THE SAME CONDITION AS A 3 x 3 DETERMINANT:

            +-------------------+
            |   a     h     g   |
            |                   |
            |   h     b     f   |    =    0
            |                   |
            |   g     f     c   |
            +-------------------+


  WHY THEY ARE THE SAME  --  expand along the top row with signs + - + :

      = a ( b c - f^2 )  -  h ( h c - f g )  +  g ( h f - b g )

      = a b c - a f^2 - c h^2 + f g h + f g h - b g^2

      = a b c + 2 f g h - a f^2 - b g^2 - c h^2
```

**The determinant is SYMMETRIC — you only really memorise six letters:**

```
              x       y       1
          +-------+-------+-------+
     x    |   a   |   h   |   g   |
          +-------+-------+-------+
     y    |   h   |   b   |   f   |
          +-------+-------+-------+
     1    |   g   |   f   |   c   |
          +-------+-------+-------+

     Main diagonal:  a , b , c
     Mirror pairs :  h with h ,  g with g ,  f with f
```

| Test | Conclusion | When to use |
|---|---|---|
| `abc + 2fgh - af^2 - bg^2 - ch^2 = 0` | it IS a pair of lines | "Show that ... represents a pair of straight lines" |
| the same, containing k | solve for k | "Find k so that ... is a pair of lines" |
| `h^2 > ab` | real and distinct | always state this too |
| `h^2 = ab` | parallel or coincident | leads to the parallel formulas |
| `h^2 < ab` | imaginary lines | say "no real lines" |

**Second, equivalent test (useful when you must separate the lines anyway):**
treat `S = 0` as a quadratic in `x`. It is a pair of lines exactly when the
discriminant is a **perfect square in y**.

---

# 8. THE POINT OF INTERSECTION

```
  +====================================================================+
  |                                                                    |
  |   THE PARTIAL DERIVATIVE METHOD                                    |
  |                                                                    |
  |     dS/dx = 0   ->   2 a x + 2 h y + 2 g = 0                       |
  |     dS/dy = 0   ->   2 h x + 2 b y + 2 f = 0                       |
  |                                                                    |
  |   Cancel the 2 and SOLVE THESE TWO TOGETHER:                       |
  |                                                                    |
  |            a x  +  h y  +  g  =  0                                 |
  |            h x  +  b y  +  f  =  0                                 |
  |                                                                    |
  |   READY-MADE ANSWER:                                               |
  |                                                                    |
  |             h f  -  b g                    g h  -  a f             |
  |     x  =  -----------------  ,      y  =  -----------------        |
  |             a b  -  h^2                    a b  -  h^2             |
  |                                                                    |
  +====================================================================+
```

**How to write the two equations without memorising:** take the first two ROWS of
the determinant and attach `x , y , 1`:

```
      row 1   a   h   g     ->     a x + h y + g = 0
      row 2   h   b   f     ->     h x + b y + f = 0
```

| Formula | When to use |
|---|---|
| `ax + hy + g = 0`, `hx + by + f = 0` | ALWAYS — safest, and the examiner wants to see it |
| `x = (hf - bg)/(ab - h^2)` | when you are short of time, or to CHECK your answer |
| `y = (gh - af)/(ab - h^2)` | same |
| `ab - h^2 = 0` | the lines are PARALLEL — there is no meeting point |

---

# 9. THE PARALLEL PAIR AND THE DISTANCE BETWEEN THEM

```
  +====================================================================+
  |                                                                    |
  |   S = 0 is a pair of PARALLEL lines when                           |
  |                                                                    |
  |          h^2  =  a b        AND        a f^2  =  b g^2             |
  |                                                                    |
  |   The two lines are then                                           |
  |                                                                    |
  |          a x + h y + g - sqrt( g^2 - a c )  =  0                   |
  |          a x + h y + g + sqrt( g^2 - a c )  =  0                   |
  |                                                                    |
  |   and the DISTANCE between them is                                 |
  |                                                                    |
  |                             g^2  -  a c                            |
  |          d  =  2 . sqrt( --------------------- )                   |
  |                             a ( a  +  b )                          |
  |                                                                    |
  |                             f^2  -  b c                            |
  |             =  2 . sqrt( --------------------- )                   |
  |                             b ( a  +  b )                          |
  |                                                                    |
  +====================================================================+
```

| Formula | When to use |
|---|---|
| `h^2 = ab` and `af^2 = bg^2` | to PROVE the pair is parallel |
| `d = 2 sqrt((g^2-ac)/(a(a+b)))` | the standard version — use when `a` is not 0 |
| `d = 2 sqrt((f^2-bc)/(b(a+b)))` | use when `a = 0`, or as a check |
| `ax + hy = -g +/- sqrt(g^2-ac)` | to write down the two separate parallel lines |

---

# 10. HOMOGENISATION — THE 7-MARK RECIPE

```
  +====================================================================+
  |                                                                    |
  |   PROBLEM: find the pair of lines joining the ORIGIN to the        |
  |            points where a CURVE meets a LINE.                      |
  |                                                                    |
  |   STEP 1   Write the line as   U = 1 .                             |
  |                                                                    |
  |               l x + m y + n = 0                                    |
  |                              l x + m y                             |
  |               ->      U  =  -----------  ,  and  U = 1             |
  |                                 -n                                 |
  |                                                                    |
  |   STEP 2   Multiply the curve's terms up to degree 2:              |
  |                                                                    |
  |        a x^2 + 2h xy + b y^2                                       |
  |               + ( 2g x + 2f y ) . U   +   c . U^2   =   0          |
  |                                                                    |
  |        degree 2 terms  ->  x 1     (leave them alone)              |
  |        degree 1 terms  ->  x U     (once)                          |
  |        constant term   ->  x U^2   (twice)                         |
  |                                                                    |
  |   STEP 3   Expand, collect, divide out common factors.             |
  |                                                                    |
  |   STEP 4   Use the Section 3 angle formula on the result.          |
  |                                                                    |
  +====================================================================+
```

**Two standard results that follow immediately:**

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   THE CHORD SUBTENDS A RIGHT ANGLE AT THE ORIGIN                   |
  |                                                                    |
  |     <=>  (coefficient of x^2) + (coefficient of y^2) = 0           |
  |          in the homogenised equation                               |
  |                                                                    |
  |                                                                    |
  |   THE TWO LINES COINCIDE  (the line is a TANGENT to the curve)     |
  |                                                                    |
  |     <=>  h^2 = ab  in the homogenised equation                     |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Result | When to use |
|---|---|
| homogenise, then `tan(theta) = 2 sqrt(h^2-ab)/abs(a+b)` | "find the angle subtended at the origin" |
| homogenise, then `A + B = 0` | "show the lines are perpendicular" / "find k so they are perpendicular" |
| homogenise, then `H^2 = AB` | "show the line touches the curve" |
| `a^2(l^2 + m^2) = 2` | chord `lx + my = 1` of `x^2 + y^2 = a^2` subtends 90 degrees at the centre |

---

# 11. THE SMALL CONDITIONS (2-mark questions)

All of these come from `m1 + m2 = -2h/b` and `m1 m2 = a/b`.

| The condition asked for | The answer |
|---|---|
| lines are perpendicular | `a + b = 0` |
| lines are coincident | `h^2 = ab` |
| lines are real and distinct | `h^2 > ab` |
| lines are imaginary | `h^2 < ab` |
| sum of the slopes = 0 (equally inclined to the axes) | `h = 0` |
| sum of the slopes = product of the slopes | `a + 2h = 0` |
| one line is the x-axis (`y = 0`) | `a = 0` |
| one line is the y-axis (`x = 0`) | `b = 0` |
| `y = k x` is one of the lines | `b k^2 + 2h k + a = 0` |
| slopes in the ratio `p : q` | `4 p q h^2 = a b (p + q)^2` |
| one slope is twice the other | `8 h^2 = 9 a b` |
| one slope is three times the other | `3 h^2 = 4 a b` |
| slopes are `m` and `1/m` (reciprocal) | `a = b` |
| the pair is a perfect square | `h^2 = ab` |
| both lines pass through the origin | no x, y or constant term |

---

# 12. WORKED NUMBERS TO TEST YOURSELF AGAINST

Use these to check that you are applying the formulas correctly.

| Equation | a, h, b | h^2 - ab | tan(theta) | Separate lines |
|---|---|---|---|---|
| `3x^2 + 7xy + 2y^2 = 0` | 3, 7/2, 2 | 25/4 | 1 (45 deg) | `3x + y = 0`, `x + 2y = 0` |
| `x^2 - 5xy + 4y^2 = 0` | 1, -5/2, 4 | 9/4 | 3/5 | `x - y = 0`, `x - 4y = 0` |
| `x^2 - 7xy + 12y^2 = 0` | 1, -7/2, 12 | 1/4 | 1/13 | `x - 3y = 0`, `x - 4y = 0` |
| `4x^2 + 12xy + 9y^2 = 0` | 4, 6, 9 | 0 | 0 | `2x + 3y = 0` (twice) |
| `18x^2 - 9xy + y^2 = 0` | 18, -9/2, 1 | 9/4 | 3/19 | `3x - y = 0`, `6x - y = 0` |
| `x^2 + xy + y^2 = 0` | 1, 1/2, 1 | -3/4 | — | imaginary, only the origin |

*(Check on row 5: slopes 3 and 6, so
`abs((3-6)/(1+18)) = 3/19`, and the formula gives `2 x (3/2)/19 = 3/19`. Agrees.)*

| General equation | Is it a pair? | Angle | Meets at |
|---|---|---|---|
| `2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0` | YES | `Arctan(3)` | `(19/15, 7/15)` |
| `2x^2 + 3xy - 2y^2 - 5x + 5y - 3 = 0` | YES | 90 degrees | `(1/5, 7/5)` |
| `2x^2 + 3xy + y^2 - 5x - 4y + 3 = 0` | YES | `Arctan(1/3)` | `(2, -1)` |
| `x^2 - 3xy + 2y^2 + 3x - 5y + 2 = 0` | YES | `Arctan(1/3)` | `(-3, -1)` |
| `4x^2 + 12xy + 9y^2 + 8x + 12y - 5 = 0` | YES, PARALLEL | 0 degrees | never (distance `6/sqrt(13)`) |
| `2x^2 + 4xy - 6y^2 + 3x + y + 1 = 0` | YES | `Arctan(2)` | `(-5/8, -1/8)` |

*(Check on row 3: lines are `x + y - 1 = 0` and `2x + y - 3 = 0`, slopes -1 and -2,
so `abs((-1+2)/(1+2)) = 1/3`, and the formula gives
`2 sqrt(9/4 - 2)/abs(2+1) = 2(1/2)/3 = 1/3`. Agrees.)*

*(Check on row 4: lines are `x - y + 2 = 0` and `x - 2y + 1 = 0`, slopes 1 and 1/2,
so `abs((1 - 1/2)/(1 + 1/2)) = 1/3`, and the formula gives
`2 sqrt(9/4 - 2)/abs(1+2) = 1/3`. Agrees.)*

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +====================================================================+
  |                                                                    |
  |   1.   HALVE the xy, x and y coefficients:                         |
  |             h = (xy coeff)/2 ,  g = (x coeff)/2 ,  f = (y coeff)/2 |
  |                                                                    |
  |   2.   m1 + m2  =  -2h / b                                         |
  |                                                                    |
  |   3.   m1 . m2  =   a / b                                          |
  |                                                                    |
  |   4.   NATURE:   h^2 - ab   >0 real  =0 coincident  <0 imaginary   |
  |                                                                    |
  |                        2 sqrt( h^2 - ab )                          |
  |   5.   tan(theta) =  ----------------------                        |
  |                            abs( a + b )                            |
  |                                                                    |
  |   6.   PERPENDICULAR  <=>  a + b = 0                               |
  |        COINCIDENT     <=>  h^2 = ab                                |
  |                                                                    |
  |             x^2 - y^2       x y                                    |
  |   7.       -----------  =  -----        BISECTORS                  |
  |               a - b          h                                     |
  |                                                                    |
  |   8.   PAIR CONDITION:                                             |
  |            a b c + 2 f g h - a f^2 - b g^2 - c h^2  =  0           |
  |            (the 3x3 symmetric determinant a h g / h b f / g f c)   |
  |                                                                    |
  |   9.   MEETING POINT:  solve                                       |
  |            a x + h y + g = 0     and     h x + b y + f = 0         |
  |            or   x = (hf - bg)/(ab - h^2) , y = (gh - af)/(ab - h^2)|
  |                                                                    |
  |  10.   PERPENDICULAR PAIR through O:   b x^2 - 2h xy + a y^2 = 0   |
  |                                                                    |
  |  11.   PARALLEL PAIR:  h^2 = ab and a f^2 = b g^2 ,                |
  |                                          g^2 - a c                 |
  |            distance  d  =  2 sqrt( ------------------- )           |
  |                                        a ( a + b )                 |
  |                                                                    |
  |  12.   HOMOGENISATION: write the line as U = 1, then               |
  |            (degree 2)  +  (degree 1) . U  +  (constant) . U^2 = 0  |
  |            RIGHT ANGLE AT O  <=>  coeff x^2 + coeff y^2 = 0        |
  |                                                                    |
  +====================================================================+
```

**If you can only memorise THREE things, memorise:**

```
   (a)   a + b = 0   means the lines are perpendicular.
   (b)   abc + 2fgh - af^2 - bg^2 - ch^2 = 0   is the pair-of-lines test.
   (c)   a x + h y + g = 0  and  h x + b y + f = 0   give the meeting point.
```

Those three alone can carry a full 7-mark long answer.
