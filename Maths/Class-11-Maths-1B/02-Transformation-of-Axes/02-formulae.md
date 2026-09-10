# Transformation of Axes — Every Formula You Need

**Maths 1B · Chapter 2**

This chapter has fewer formulas than any other chapter in Maths IB. That is the good
news. The bad news is that they all look similar, so the signs get mixed up. Every box
below therefore comes with a **sanity check** you can run in the exam hall in five
seconds.

Notation used throughout:

```
   x , y            OLD coordinates, measured from the OLD origin O
   X , Y            NEW coordinates, measured from the NEW origin O'
   (h, k)           the new origin, written in OLD coordinates
   (alpha, beta)    the same thing, used when the letter h is busy
                    being the coefficient of xy
   theta  (or t)    the angle of rotation, ANTICLOCKWISE
```

---

# SECTION 1 — TRANSLATION OF AXES

## 1.1 The two pairs of formulas

```
  +==========================================================================+
  |                                                                          |
  |    TRANSLATION : the origin moves to O'(h, k), the axes stay parallel    |
  |                                                                          |
  |    ------------------------------+-------------------------------        |
  |     OLD from NEW                 |    NEW from OLD                       |
  |     use when transforming an     |    use when transforming a            |
  |     EQUATION                     |    POINT                              |
  |    ------------------------------+-------------------------------        |
  |                                  |                                       |
  |          x  =  X + h             |         X  =  x - h                   |
  |          y  =  Y + k             |         Y  =  y - k                   |
  |                                  |                                       |
  +==========================================================================+

  SANITY CHECK:  put x = h , y = k  (the new origin itself).
                 X = h - h = 0 and Y = k - k = 0.  It must land on (0,0).
```

| Form | When to use |
|---|---|
| `X = x - h , Y = y - k` | "Find the NEW coordinates of the point (x, y)" |
| `x = X + h , y = Y + k` | "Find the TRANSFORMED EQUATION of the curve" |
| `x = X + h , y = Y + k` | "Find the ORIGINAL coordinates when the new ones are given" |
| `X = x - h , Y = y - k` | "The transformed equation is ... find the ORIGINAL equation" |

**One-line rule:** POINT means subtract. EQUATION means substitute the plus version.

## 1.2 Finding where to shift the origin (given a point pair)

```
  +==========================================================================+
  |                                                                          |
  |    "Find the point to which the origin must be shifted so that the       |
  |     point (x, y) becomes (X, Y)."                                        |
  |                                                                          |
  |          h  =  x - X                 k  =  y - Y                         |
  |                                                                          |
  |    i.e.  new origin  =  ( old coords ) minus ( new coords )              |
  |                                                                          |
  +==========================================================================+
```

| Form | When to use |
|---|---|
| `h = x - X , k = y - Y` | both the old and the new coordinates of one point are given |

## 1.3 What a translation does NOT change

```
  +==========================================================================+
  |                                                                          |
  |    UNCHANGED BY A TRANSLATION                                            |
  |                                                                          |
  |      a , h , b     the coefficients of x^2 , xy , y^2                    |
  |      distance between any two points                                     |
  |      area of any triangle / polygon                                      |
  |      slope of any line , angle between any two lines                     |
  |      the SHAPE and SIZE of the curve                                     |
  |                                                                          |
  |    CHANGED BY A TRANSLATION                                              |
  |                                                                          |
  |      the coordinates of every point                                      |
  |      g , f   (the first degree coefficients)                             |
  |      c       (the constant)                                              |
  |                                                                          |
  +==========================================================================+
```

| Fact | When to use |
|---|---|
| `a, h, b` unchanged | as a free error-check on any "transformed equation" answer |
| distance unchanged | "show that the distance between A and B is unaffected" |
| area unchanged | "show that the area of triangle ABC is unaffected" |

---

# SECTION 2 — ROTATION OF AXES

## 2.1 The two pairs of formulas

```
  +==========================================================================+
  |                                                                          |
  |    ROTATION : same origin, both axes turned anticlockwise through t      |
  |                                                                          |
  |    ------------------------------+-------------------------------        |
  |     OLD from NEW                 |    NEW from OLD                       |
  |     use for an EQUATION          |    use for a POINT                    |
  |    ------------------------------+-------------------------------        |
  |                                  |                                       |
  |      x = X cos t  -  Y sin t     |     X =    x cos t  +  y sin t        |
  |      y = X sin t  +  Y cos t     |     Y =  - x sin t  +  y cos t        |
  |                                  |                                       |
  +==========================================================================+

  SANITY CHECK 1:  put t = 0.  cos 0 = 1 , sin 0 = 0.
                   Every formula must collapse to  x = X ,  y = Y.

  SANITY CHECK 2:  put t = 90.  cos = 0 , sin = 1.
                   You should get  X = y  and  Y = -x.
                   (After a quarter turn the new X-axis lies along the old
                    y-axis, so the new X-coordinate is the old y. Correct.)
```

## 2.2 The sign pattern as a grid

```
  +==========================================================================+
  |                                                                          |
  |     OLD from NEW                        NEW from OLD                     |
  |                                                                          |
  |     +---------------------+             +---------------------+          |
  |     |   cos t    -sin t   |             |    cos t    sin t   |          |
  |     |   sin t     cos t   |             |   -sin t    cos t   |          |
  |     +---------------------+             +---------------------+          |
  |                                                                          |
  |     minus is TOP RIGHT                  minus is BOTTOM LEFT             |
  |                                                                          |
  |     Each grid is the other one flipped across the main diagonal.         |
  |     Remember ONE and you have BOTH.                                      |
  |                                                                          |
  +==========================================================================+
```

| Form | When to use |
|---|---|
| `X = x cos t + y sin t`, `Y = -x sin t + y cos t` | new coordinates of a given point |
| `x = X cos t - Y sin t`, `y = X sin t + Y cos t` | transformed equation of a curve |
| swap the pair | recovering the original equation from the transformed one |

## 2.3 The 45-degree shortcut (by far the most common case)

```
  +==========================================================================+
  |                                                                          |
  |    theta = 45 degrees ,  cos 45 = sin 45 = 1 / sqrt(2)                   |
  |                                                                          |
  |             X - Y                       X + Y                            |
  |      x =  ---------             y =  ---------                           |
  |            sqrt(2)                     sqrt(2)                           |
  |                                                                          |
  |             x + y                       y - x                            |
  |      X =  ---------             Y =  ---------                           |
  |            sqrt(2)                     sqrt(2)                           |
  |                                                                          |
  |    USEFUL CONSEQUENCES at 45 degrees:                                    |
  |                                                                          |
  |          x^2 + y^2  =  X^2 + Y^2                                         |
  |                                                                          |
  |                          X^2 - Y^2                                       |
  |          x y        =  --------------                                    |
  |                              2                                           |
  |                                                                          |
  +==========================================================================+
```

Those last two lines turn a 45-degree rotation into ten seconds of work whenever the
equation is of the form `a(x^2 + y^2) + 2h xy = c`.

## 2.4 The angle table you must know cold

| theta | cos t | sin t | sin 2t | cos 2t |
|---|---|---|---|---|
| 0 | 1 | 0 | 0 | 1 |
| 30 deg = pi/6 | sqrt(3)/2 | 1/2 | sqrt(3)/2 | 1/2 |
| 45 deg = pi/4 | 1/sqrt(2) | 1/sqrt(2) | 1 | 0 |
| 60 deg = pi/3 | 1/2 | sqrt(3)/2 | sqrt(3)/2 | -1/2 |
| 90 deg = pi/2 | 0 | 1 | 0 | -1 |

## 2.5 Clockwise rotation

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   If the question says the axes are turned CLOCKWISE through t,          |
  |   use  theta = -t , so                                                   |
  |                                                                          |
  |        cos(-t) =  cos t          sin(-t) = -sin t                        |
  |                                                                          |
  |   which flips every sin sign in all four formulas.                       |
  |   The default in the exam is ANTICLOCKWISE.                              |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

---

# SECTION 3 — REMOVING THE FIRST DEGREE TERMS (translation)

## 3.1 The standard form you must match against

```
  +==========================================================================+
  |                                                                          |
  |        a x^2  +  2h xy  +  b y^2  +  2g x  +  2f y  +  c   =   0        |
  |                                                                          |
  |   READING OFF (this is where the marks are lost):                        |
  |                                                                          |
  |        coefficient of x^2   ->   a          (take as is)                 |
  |        coefficient of xy    ->   2h , so HALVE it to get h               |
  |        coefficient of y^2   ->   b          (take as is)                 |
  |        coefficient of x     ->   2g , so HALVE it to get g               |
  |        coefficient of y     ->   2f , so HALVE it to get f               |
  |        constant             ->   c          (take as is)                 |
  |                                                                          |
  +==========================================================================+
```

## 3.2 The two conditions

```
  +==========================================================================+
  |                                                                          |
  |   Shift the origin to (alpha, beta). Both first degree terms vanish      |
  |   exactly when                                                           |
  |                                                                          |
  |         a . alpha  +  h . beta  +  g   =   0                             |
  |                                                                          |
  |         h . alpha  +  b . beta  +  f   =   0                             |
  |                                                                          |
  |   (these are dS/dx = 0 and dS/dy = 0, each divided by 2)                 |
  |                                                                          |
  +==========================================================================+
```

Always write these two lines down before using the fraction formula. They carry a
method mark on their own.

## 3.3 The ready formula

```
  +==========================================================================+
  |                                                                          |
  |                  h f  -  b g                     g h  -  a f             |
  |     alpha  =  ------------------     beta  =  ------------------         |
  |                  a b  -  h^2                     a b  -  h^2             |
  |                                                                          |
  |     provided   a b - h^2   is not zero                                   |
  |                                                                          |
  |     THE NEW CONSTANT:                                                    |
  |                                                                          |
  |          c'  =  g . alpha  +  f . beta  +  c                             |
  |                                                                          |
  |     THE TRANSFORMED EQUATION:                                            |
  |                                                                          |
  |          a X^2  +  2h XY  +  b Y^2  +  c'  =  0                          |
  |                                                                          |
  +==========================================================================+

  MEMORY HOOK for the numerators:
        alpha  uses the letters   h f  -  b g       (h,f then b,g)
        beta   uses the letters   g h  -  a f       (g,h then a,f)
  Both denominators are the same:  ab - h^2.
```

## 3.4 The no-xy shortcut: complete the square

```
  +==========================================================================+
  |                                                                          |
  |   If there is NO xy term, forget the formula. Complete the square.       |
  |                                                                          |
  |        A x^2 + B y^2 + 2g x + 2f y + c  =  0                             |
  |                                                                          |
  |        A( x^2 + (2g/A) x )  +  B( y^2 + (2f/B) y )  +  c  =  0           |
  |                                                                          |
  |        A( x + g/A )^2  +  B( y + f/B )^2  =  ( something )               |
  |                                                                          |
  |   Then  alpha = -g/A  and  beta = -f/B , and you get the new             |
  |   equation for free.                                                     |
  |                                                                          |
  |   Or use the same ready formula with h = 0:                              |
  |                                                                          |
  |        alpha = -g / a          beta = -f / b                             |
  |                                                                          |
  +==========================================================================+
```

That last pair, `alpha = -g/a` and `beta = -f/b`, is worth memorising separately.
It is the version you will need nine times out of ten.

Check it against the general formula with `h = 0`:

```
           h f - b g       0 - b g       -g
  alpha = -----------  =  ---------  =  ----          CORRECT.
           a b - h^2         a b          a

           g h - a f       0 - a f       -f
  beta  = -----------  =  ---------  =  ----          CORRECT.
           a b - h^2         a b          b
```

## 3.5 The degenerate case

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |    If  ab - h^2 = 0  there is NO such point.                             |
  |    The conic has no centre (it is a parabola or a pair of                |
  |    parallel lines). Say so in words - do not divide by zero.             |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Form | When to use |
|---|---|
| `alpha = -g/a , beta = -f/b` | no `xy` term present — the common case |
| full `alpha, beta` fractions | there IS an `xy` term |
| completing the square | no `xy` term, and you also want the new equation |
| `c' = g.alpha + f.beta + c` | to write the transformed equation quickly |
| `ab - h^2 = 0` statement | the rare "no such point exists" question |

---

# SECTION 4 — REMOVING THE xy TERM (rotation)

## 4.1 The angle formula

```
  +==========================================================================+
  |                                                                          |
  |   To remove the xy term from                                             |
  |                                                                          |
  |        a x^2  +  2h xy  +  b y^2  +  ...  =  0                           |
  |                                                                          |
  |   rotate the axes through theta where                                    |
  |                                                                          |
  |                                2 h                                       |
  |            tan( 2 theta )  =  -------                                    |
  |                                a - b                                     |
  |                                                                          |
  |                     1               (  2h   )                            |
  |            theta = ---  tan^-1      ( ----- )                            |
  |                     2               (  a-b  )                            |
  |                                                                          |
  |   SPECIAL CASE      a = b   ->   theta  =  45 degrees  =  pi/4           |
  |                                                                          |
  +==========================================================================+

  THE NUMERATOR IS THE WHOLE COEFFICIENT OF xy.
  For 3x^2 + 10xy + 3y^2 the numerator is 10, not 5.
```

## 4.2 The new coefficients after a rotation

```
  +==========================================================================+
  |                                                                          |
  |     a'   =   a cos^2 t   +   2h sin t cos t   +   b sin^2 t              |
  |                                                                          |
  |     b'   =   a sin^2 t   -   2h sin t cos t   +   b cos^2 t              |
  |                                                                          |
  |     2h'  =   2h cos(2t)  -  ( a - b ) sin(2t)                            |
  |                                                                          |
  |     g'   =    g cos t  +  f sin t                                        |
  |     f'   =  - g sin t  +  f cos t          ( they rotate like a point )  |
  |                                                                          |
  |     c'   =   c                             ( never changes )             |
  |                                                                          |
  +==========================================================================+
```

## 4.3 The a = b shortcut

```
  +==========================================================================+
  |                                                                          |
  |    If  a = b  and  theta = 45 degrees , then                             |
  |                                                                          |
  |          a'  =  a  +  h                 b'  =  a  -  h                   |
  |                                                                          |
  |    Example:  17x^2 - 16xy + 17y^2 = 225 ,   a = 17 , h = -8              |
  |              a' = 17 - 8 =  9                                            |
  |              b' = 17 + 8 = 25                                            |
  |              ->  9X^2 + 25Y^2 = 225                                      |
  |                                                                          |
  +==========================================================================+
```

| Form | When to use |
|---|---|
| `tan 2t = 2h/(a-b)` | "find the angle of rotation to remove the xy term" |
| `a = b -> 45 degrees` | whenever the `x^2` and `y^2` coefficients are equal |
| `a', b', 2h'` formulas | "find the transformed equation after rotating through t" |
| `a' = a+h , b' = a-h` | the 45-degree case — saves a whole page of algebra |

---

# SECTION 5 — THE INVARIANTS

## 5.1 The algebraic invariants under rotation

```
  +==========================================================================+
  |                                                                          |
  |       a'  +  b'          =        a  +  b                                |
  |                                                                          |
  |       a' b'  -  h'^2     =        a b  -  h^2                            |
  |                                                                          |
  |       c'                 =        c                                      |
  |                                                                          |
  +==========================================================================+
```

Proof of the first, short enough to write out in an exam:

```
  a' + b' = ( a cos^2 t + 2h sc + b sin^2 t ) + ( a sin^2 t - 2h sc + b cos^2 t )

          = a( cos^2 t + sin^2 t ) + b( sin^2 t + cos^2 t ) + ( 2h sc - 2h sc )

          = a + b
```

## 5.2 The killer shortcut for competitive exams

```
  +==========================================================================+
  |                                                                          |
  |   When the rotation REMOVES the xy term, h' = 0, so                      |
  |                                                                          |
  |        a' + b'  =  a + b            ( their SUM )                        |
  |        a' b'    =  ab - h^2         ( their PRODUCT )                    |
  |                                                                          |
  |   Therefore a' and b' are the two roots of                               |
  |                                                                          |
  |        t^2  -  ( a + b ) t  +  ( a b - h^2 )   =   0                     |
  |                                                                          |
  |   Solve that quadratic and you have the new equation without doing       |
  |   ANY trigonometry.                                                      |
  |                                                                          |
  +==========================================================================+

  WORKED CHECK:   3x^2 + 10xy + 3y^2      a+b = 6 ,  ab-h^2 = 9-25 = -16
                  t^2 - 6t - 16 = 0   ->   t = 8 or -2
                  new equation:  8X^2 - 2Y^2 = ...            CORRECT.
```

## 5.3 The geometric invariants (both transformations)

```
  +==========================================================================+
  |                                                                          |
  |    UNCHANGED BY TRANSLATION *AND* BY ROTATION:                           |
  |                                                                          |
  |       length of a line segment                                           |
  |       distance between two points                                        |
  |       area of a triangle or any polygon                                  |
  |       angle between two lines                                            |
  |       perpendicularity and parallelism                                   |
  |       the type of conic (circle stays a circle, etc.)                    |
  |                                                                          |
  |    EXTRA, ONLY UNDER ROTATION:                                           |
  |                                                                          |
  |       x^2 + y^2  =  X^2 + Y^2      (distance from the origin)            |
  |                                                                          |
  |    EXTRA, ONLY UNDER TRANSLATION:                                        |
  |                                                                          |
  |       a , h , b   are completely unchanged                               |
  |       the slope of every line is unchanged                               |
  |                                                                          |
  +==========================================================================+
```

| Fact | When to use |
|---|---|
| `X^2 + Y^2 = x^2 + y^2` | free check on any "new coordinates after rotation" answer |
| distance unchanged | "prove the distance between two points is invariant" |
| area unchanged | "prove the area of a triangle is invariant" |
| `a+b` and `ab-h^2` | free check on any "transformed equation after rotation" answer |

---

# SECTION 6 — COMBINED TRANSLATION AND ROTATION

```
  +==========================================================================+
  |                                                                          |
  |    ORDER:   TRANSLATE first (kills x and y terms)                        |
  |             ROTATE  second (kills the xy term)                           |
  |                                                                          |
  |    Combined into one step:                                               |
  |                                                                          |
  |        x  =  h  +  X cos t  -  Y sin t                                   |
  |        y  =  k  +  X sin t  +  Y cos t                                   |
  |                                                                          |
  |    Why this order works: after the translation g = f = 0, and the        |
  |    rotation sends g -> g cos t + f sin t = 0 and                         |
  |                   f -> -g sin t + f cos t = 0.                           |
  |    So the rotation cannot bring the first degree terms back.             |
  |                                                                          |
  +==========================================================================+
```

The full reduction of a general conic, in four lines:

```
  GIVEN     a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0

  STEP 1    alpha = (hf - bg)/(ab - h^2) ,  beta = (gh - af)/(ab - h^2)
            c' = g.alpha + f.beta + c
            NOW:   a X^2 + 2h XY + b Y^2 + c' = 0

  STEP 2    tan(2 theta) = 2h/(a - b)     (or 45 degrees if a = b)
            a' , b' are the roots of  t^2 - (a+b)t + (ab - h^2) = 0
            NOW:   a' X'^2 + b' Y'^2 + c' = 0

  STEP 3    Divide by -c' and name the conic.
```

| Form | When to use |
|---|---|
| combined `x = h + X cos t - Y sin t` | one-shot questions asking for both at once |
| the four-line reduction | "reduce the equation to its simplest form and name the curve" |

---

# SECTION 7 — SUPPORTING FORMULAS YOU WILL NEED

## 7.1 Distance and area (borrowed from Chapter 1)

```
  +==========================================================================+
  |                                                                          |
  |    AB^2   =   ( x2 - x1 )^2  +  ( y2 - y1 )^2                            |
  |                                                                          |
  |    OP^2   =   x^2  +  y^2                                                |
  |                                                                          |
  |                 1                                                        |
  |    AREA   =   ----- abs( x1(y2-y3) + x2(y3-y1) + x3(y1-y2) )             |
  |                 2                                                        |
  |                                                                          |
  +==========================================================================+
```

## 7.2 Trig identities used in the derivations

```
  +==========================================================================+
  |                                                                          |
  |    sin^2 t  +  cos^2 t   =   1                                           |
  |                                                                          |
  |    sin( A - B )  =  sin A cos B  -  cos A sin B                          |
  |    cos( A - B )  =  cos A cos B  +  sin A sin B                          |
  |                                                                          |
  |    sin( 2t )  =  2 sin t cos t                                           |
  |    cos( 2t )  =  cos^2 t  -  sin^2 t                                     |
  |                                                                          |
  |    cos^2 t = ( 1 + cos 2t ) / 2      sin^2 t = ( 1 - cos 2t ) / 2        |
  |                                                                          |
  +==========================================================================+
```

## 7.3 Completing the square

```
  +==========================================================================+
  |                                                                          |
  |         x^2  +  p x   =   ( x  +  p/2 )^2   -   ( p/2 )^2                |
  |                                                                          |
  |    Example:  x^2 - 4x  =  (x - 2)^2 - 4                                  |
  |              y^2 + 6y  =  (y + 3)^2 - 9                                  |
  |                                                                          |
  |    WITH A COEFFICIENT - take it out FIRST:                               |
  |                                                                          |
  |         4x^2 - 8x  =  4( x^2 - 2x )  =  4[ (x-1)^2 - 1 ]                 |
  |                                                                          |
  +==========================================================================+
```

## 7.4 Naming the conic once the xy term is gone

| Reduced form | Curve |
|---|---|
| `X^2 + Y^2 = r^2` | circle |
| `a'X^2 + b'Y^2 = c'` with `a'`, `b'` same sign, unequal | ellipse |
| `a'X^2 - b'Y^2 = c'` (opposite signs) | hyperbola |
| `X^2 - Y^2 = c'` (equal size, opposite signs) | rectangular hyperbola |
| only ONE square term, e.g. `Y^2 = 4aX` | parabola |
| `ab - h^2 > 0` | ellipse type |
| `ab - h^2 = 0` | parabola type |
| `ab - h^2 < 0` | hyperbola type |

That last block of three is a very fast way to name a conic in a competitive exam
without transforming anything at all.

---

# WORKED CHECK-SHEET — THE STANDARD ANSWERS

Keep these five results in your head. They come up again and again, and knowing the
answer in advance lets you check your working instantly.

| Question | Answer |
|---|---|
| `x^2 + y^2 - 4x + 6y - 12 = 0`, remove first degree terms | shift to `(2, -3)`; `X^2 + Y^2 = 25` |
| `4x^2 + 9y^2 - 8x + 36y + 4 = 0`, remove first degree terms | shift to `(1, -2)`; `4X^2 + 9Y^2 = 36` |
| `2x^2 + 4xy + 5y^2 - 4x - 22y + 7 = 0`, remove first degree terms | shift to `(-2, 3)`; `2X^2 + 4XY + 5Y^2 = 22` |
| `3x^2 + 10xy + 3y^2 = 9`, rotate 45 degrees | `8X^2 - 2Y^2 = 9` |
| `17x^2 - 16xy + 17y^2 = 225`, rotate 45 degrees | `9X^2 + 25Y^2 = 225` |
| `x^2 + 2 sqrt(3) xy - y^2 = 2a^2`, rotate 30 degrees | `X^2 - Y^2 = a^2` |
| `x cos a + y sin a = p`, rotate through `a` | `X = p` |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

If you learn nothing else in this chapter, learn these twelve lines.

```
  +==========================================================================+
  |                                                                          |
  |   1.   x = X + h                y = Y + k          TRANSLATION,          |
  |                                                    for an EQUATION       |
  |                                                                          |
  |   2.   X = x - h                Y = y - k          TRANSLATION,          |
  |                                                    for a POINT           |
  |                                                                          |
  |   3.   h = x - X                k = y - Y          where to shift        |
  |                                                                          |
  |   4.   x = X cos t - Y sin t                       ROTATION,             |
  |        y = X sin t + Y cos t                       for an EQUATION       |
  |                                                                          |
  |   5.   X =  x cos t + y sin t                      ROTATION,             |
  |        Y = -x sin t + y cos t                      for a POINT           |
  |                                                                          |
  |   6.   a.alpha + h.beta + g = 0                    the two conditions    |
  |        h.alpha + b.beta + f = 0                    for killing x , y     |
  |                                                                          |
  |               h f - b g                g h - a f                         |
  |   7.  alpha = ----------      beta =  -----------                        |
  |               a b - h^2                a b - h^2                         |
  |                                                                          |
  |   8.   alpha = -g/a ,  beta = -f/b                 the h = 0 version     |
  |                                                                          |
  |   9.   c' = g.alpha + f.beta + c                   the new constant      |
  |                                                                          |
  |                        2h                                                |
  |   10.  tan(2 theta) = ------      and  a = b  ->  theta = 45 degrees     |
  |                        a - b                                             |
  |                                                                          |
  |   11.  a' + b' = a + b            a'b' - h'^2 = ab - h^2                 |
  |                                                                          |
  |   12.  Distance and area are UNCHANGED by both transformations.          |
  |                                                                          |
  +==========================================================================+
```

**Write those twelve out from memory three times.** That is genuinely the whole
chapter, and it is enough for the Section A mark plus a Section B question.
