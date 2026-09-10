# System of Circles — Concepts Explained Simply

Read one topic. Do its worked example with a pen. Then move to the next.

This chapter is **two circles on the same page**. Nothing more frightening than that.

---

## THE FIVE THINGS FROM CHAPTER 1 YOU NEED (copy them onto a card)

```
  A circle          S  =  x^2 + y^2 + 2gx + 2fy + c  =  0

  CENTRE            C  =  ( -g , -f )

  RADIUS            r  =  sqrt( g^2 + f^2 - c )

  VALUE AT A POINT  S1 =  x1^2 + y1^2 + 2g*x1 + 2f*y1 + c
                    (S1 < 0 inside , S1 = 0 on , S1 > 0 outside)

  LENGTH OF THE TANGENT from (x1,y1)  =  sqrt(S1)

  DISTANCE between (x1,y1) and (x2,y2) = sqrt((x2-x1)^2 + (y2-y1)^2)

  PERPENDICULAR DISTANCE from (x1,y1) to  ax + by + c = 0

              | a*x1 + b*y1 + c |
       p  =   -------------------
                sqrt(a^2 + b^2)
```

> **TRAP — THE BIGGEST ONE IN THIS CHAPTER:** every formula below assumes the
> circle is written with the coefficient of x^2 and y^2 equal to **1**.
> If you are handed `3x^2 + 3y^2 - 8x + 29y = 0`, **divide the whole equation by 3**
> before you read off g, f and c. Students lose 4 and 7 mark questions on this
> single line every year.

---

## THE NAMING CONVENTION USED EVERYWHERE BELOW

```
  S1  =  x^2 + y^2 + 2 g1 x + 2 f1 y + c1     centre C1(-g1, -f1)   radius r1
  S2  =  x^2 + y^2 + 2 g2 x + 2 f2 y + c2     centre C2(-g2, -f2)   radius r2

  d   =  C1 C2  =  the distance between the two centres

         d  =  sqrt( (g1 - g2)^2 + (f1 - f2)^2 )

  (Careful: some textbooks write S and S' instead of S1 and S2, and use
   g', f', c'. Same thing. Do not let the dashes scare you.)
```

---

# TOPIC 1 — The distance between the centres, d

Before you do ANYTHING with two circles, work out three numbers:

```
   STEP 1   r1 = sqrt(g1^2 + f1^2 - c1)
   STEP 2   r2 = sqrt(g2^2 + f2^2 - c2)
   STEP 3   d  = distance between C1(-g1,-f1) and C2(-g2,-f2)
```

Write them in a little box at the top of your answer. Ninety percent of the
questions in this chapter are then answered by comparing them.

### WORKED EXAMPLE 1A
For `S1 : x^2 + y^2 - 6x - 2y + 1 = 0` and `S2 : x^2 + y^2 + 2x - 8y + 13 = 0`,
find r1, r2 and d.

```
  S1 :  2g1 = -6  ->  g1 = -3        C1 = (3, 1)
        2f1 = -2  ->  f1 = -1
         c1 = 1
        r1 = sqrt(9 + 1 - 1) = sqrt(9) = 3

  S2 :  2g2 = 2   ->  g2 = 1         C2 = (-1, 4)
        2f2 = -8  ->  f2 = -4
         c2 = 13
        r2 = sqrt(1 + 16 - 13) = sqrt(4) = 2

  d  = sqrt( (3 - (-1))^2 + (1 - 4)^2 )
     = sqrt( 16 + 9 )
     = sqrt(25)
     = 5

  Notice:  r1 + r2 = 3 + 2 = 5 = d.   These two circles TOUCH EXTERNALLY.
```

Three numbers, and the whole question is already half answered.

---

# TOPIC 2 — The angle between two intersecting circles

## What does "the angle between two circles" even mean?

Circles are curved. You cannot measure an angle between two curves directly.
So we do the natural thing: **at the point where they cross, draw the tangent to
each circle, and measure the angle between those two straight lines.**

```
                        tangent to
                        circle 2
                            \
                             \    theta
                              \  /
            . . . . . . . .    \/ . . . . .
        . '                    /\ P        ' .
      '                       /    '.          '
     '     circle 1          /       ' .        '
    '                       /            '.      '
    '        * C1          /   tangent      * C2  '
    '                     /    to circle 1        '
     '                   /                       '
      ' .               /                    . '
          ' . . . . . . . . . . . . . . . '


        theta  =  THE ANGLE BETWEEN THE CIRCLES
                  (the angle between the two TANGENTS at P)
```

Both circles cross at two points. The angle is the same at both, so it does not
matter which one you pick.

## The formula

Look at the triangle made by the two centres and the crossing point P:

```
                          P
                         / \
                       /     \
                 r1  /         \  r2
                   /             \
                 /                 \
               C1 ----------------- C2
                        d
```

The three sides are exactly r1, r2 and d. Use the cosine rule and a little
care about which angle you are measuring, and you get:

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    ANGLE theta BETWEEN TWO INTERSECTING CIRCLES                  |
  |                                                                  |
  |                        d^2  -  r1^2  -  r2^2                     |
  |         cos(theta)  =  ---------------------                     |
  |                              2 r1 r2                             |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The same formula written in the coefficients

You usually get the circles as equations, not as centres and radii. So convert
the formula once, and never do the geometry again.

```
  d^2  =  (g1 - g2)^2 + (f1 - f2)^2
       =  g1^2 - 2 g1 g2 + g2^2  +  f1^2 - 2 f1 f2 + f2^2

  r1^2 =  g1^2 + f1^2 - c1
  r2^2 =  g2^2 + f2^2 - c2

  Subtract:

  d^2 - r1^2 - r2^2
      = (g1^2 - 2g1g2 + g2^2 + f1^2 - 2f1f2 + f2^2)
        - (g1^2 + f1^2 - c1) - (g2^2 + f2^2 - c2)

      = - 2 g1 g2 - 2 f1 f2 + c1 + c2

  So:

  +------------------------------------------------------------------+
  |                                                                  |
  |                    c1 + c2  -  2 g1 g2  -  2 f1 f2               |
  |    cos(theta)  =  ---------------------------------------------  |
  |                   2 sqrt(g1^2+f1^2-c1) sqrt(g2^2+f2^2-c2)        |
  |                                                                  |
  +------------------------------------------------------------------+
```

> **IMPORTANT — WHY YOUR TEXTBOOK MAY LOOK DIFFERENT.**
> Many books print this formula with **every sign flipped**:
> ```
>                 r1^2 + r2^2 - d^2       2 g1 g2 + 2 f1 f2 - c1 - c2
>   cos(theta) =  -----------------   =   ---------------------------
>                      2 r1 r2                     2 r1 r2
> ```
> That version measures the angle **C1 P C2 inside the triangle**, which is the
> SUPPLEMENT of the angle between the circles: the two answers always add to 180 deg.
> So one book will tell you 45 deg and another 135 deg for the same pair of circles.
>
> **What to do in the exam:** compute the number, and if you get an obtuse angle,
> also write "so the acute angle between the circles is 180 - theta". Quote the
> ACUTE angle as your final answer and no examiner can mark you wrong.
>
> **And for orthogonality it does not matter at all** — theta = 90 makes cos(theta) = 0,
> and 0 = -0, so BOTH versions give the identical condition. That is the part
> that actually carries marks.

### WORKED EXAMPLE 2A (the classic)
Find the angle between the circles
`x^2 + y^2 - 12x - 6y + 41 = 0` and `x^2 + y^2 + 4x + 6y - 59 = 0`.

```
  CIRCLE 1   g1 = -6 , f1 = -3 , c1 = 41
             C1 = (6, 3)
             r1 = sqrt(36 + 9 - 41) = sqrt(4) = 2

  CIRCLE 2   g2 = 2 , f2 = 3 , c2 = -59
             C2 = (-2, -3)
             r2 = sqrt(4 + 9 + 59) = sqrt(72) = 6 sqrt(2)

  d^2 = (6 + 2)^2 + (3 + 3)^2 = 64 + 36 = 100      (so d = 10)

              d^2 - r1^2 - r2^2        100 - 4 - 72          24
  cos(theta) = ------------------  =  --------------  =  ------------
                    2 r1 r2            2 (2)(6 sqrt2)     24 sqrt(2)

                    1
             =  ---------
                 sqrt(2)

  theta = 45 degrees
```

```
  CHECK the circles really do intersect (otherwise there is no angle):
      r1 + r2 = 2 + 8.485 = 10.485   and   |r1 - r2| = 6.485
      6.485 < d = 10 < 10.485       YES, they cut at two points.
```

### WORKED EXAMPLE 2B
Find the angle between `x^2 + y^2 + 4x - 14y + 28 = 0` and `x^2 + y^2 + 4x - 5 = 0`.

```
  CIRCLE 1   g1 = 2 , f1 = -7 , c1 = 28
             C1 = (-2, 7)  ,  r1 = sqrt(4 + 49 - 28) = sqrt(25) = 5

  CIRCLE 2   g2 = 2 , f2 = 0 , c2 = -5
             C2 = (-2, 0)  ,  r2 = sqrt(4 + 0 + 5) = sqrt(9) = 3

  d^2 = (-2 + 2)^2 + (7 - 0)^2 = 0 + 49 = 49       (d = 7)

              49 - 25 - 9        15        1
  cos(theta) = ------------  =  ----  =   ---
                2 (5)(3)         30        2

  theta = 60 degrees
```

### WORKED EXAMPLE 2C
Find the angle between `x^2 + y^2 - 4x - 6y - 3 = 0` and `x^2 + y^2 + 8x - 4y + 11 = 0`.

```
  C1 = (2, 3)  , r1 = sqrt(4 + 9 + 3)  = sqrt(16) = 4
  C2 = (-4, 2) , r2 = sqrt(16 + 4 - 11) = sqrt(9) = 3

  d^2 = (2 + 4)^2 + (3 - 2)^2 = 36 + 1 = 37

              37 - 16 - 9       12       1
  cos(theta) = ------------ =  ----  =  ---     ->   theta = 60 degrees
                 2(4)(3)        24       2
```

> **TRAP:** Board answers are nearly always **45, 60 or 90 degrees**. If your
> cos(theta) comes out as 0.37 or 1.8, you have made an arithmetic slip — go back.
> (And |cos(theta)| can never exceed 1. If it does, the circles do not intersect
> at all and the question has no angle.)

---

# TOPIC 3 — ORTHOGONAL circles (cutting at right angles)

"Orthogonal" is just a long word for **perpendicular**. Two circles are orthogonal
if the tangents at their point of intersection are at 90 degrees.

## The picture that gives you the condition instantly

```
                            P
                           /|\
                          / | \
                    r1   /  |  \   r2
                        /   |   \
                       /    |    \
                      /  90 deg   \
                     /             \
                   C1 ------------- C2
                          d

     The tangent at P to circle 1 is perpendicular to C1 P.
     The tangent at P to circle 2 is perpendicular to C2 P.

     Turn BOTH tangents through 90 degrees and you get the two radii.
     Turning both lines by the same 90 degrees does not change the
     angle between them.

     So:      tangents at 90 deg   <=>   C1 P  perpendicular to  C2 P
              <=>   triangle C1 P C2 is right-angled at P
              <=>   PYTHAGORAS:
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    GEOMETRIC FORM                                                |
  |                                                                  |
  |               d^2   =   r1^2   +   r2^2                          |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The condition in the coefficients (this is the exam version)

Start from the angle formula and put theta = 90 deg, so cos(theta) = 0. The
numerator must be zero:

```
     c1 + c2 - 2 g1 g2 - 2 f1 f2  =  0
```

which rearranges to the line you must know by heart:

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    CONDITION FOR TWO CIRCLES TO CUT ORTHOGONALLY                 |
  |                                                                  |
  |            2 g1 g2   +   2 f1 f2   =   c1   +   c2               |
  |                                                                  |
  |    (the TWOS live on the left-hand side only)                    |
  |                                                                  |
  +------------------------------------------------------------------+
```

You can also get it straight from d^2 = r1^2 + r2^2:

```
   (g1-g2)^2 + (f1-f2)^2  =  (g1^2+f1^2-c1) + (g2^2+f2^2-c2)

   g1^2 - 2g1g2 + g2^2 + f1^2 - 2f1f2 + f2^2
                    = g1^2 + f1^2 - c1 + g2^2 + f2^2 - c2

   cancel g1^2, g2^2, f1^2, f2^2 from both sides:

   - 2 g1 g2 - 2 f1 f2  =  - c1 - c2

   2 g1 g2 + 2 f1 f2  =  c1 + c2         SAME ANSWER
```

### WORKED EXAMPLE 3A
Show that `x^2 + y^2 + 4x + 2y + 1 = 0` and `x^2 + y^2 - 2x - 5 = 0` are orthogonal.

```
  CIRCLE 1   g1 = 2 , f1 = 1 , c1 = 1
  CIRCLE 2   g2 = -1, f2 = 0 , c2 = -5

  LHS = 2 g1 g2 + 2 f1 f2 = 2(2)(-1) + 2(1)(0) = -4 + 0 = -4
  RHS = c1 + c2           = 1 + (-5)           = -4

  LHS = RHS   ->   THE CIRCLES CUT ORTHOGONALLY.

  GEOMETRIC CHECK (do this in rough, it catches sign errors):
      C1 = (-2, -1)  , r1 = sqrt(4 + 1 - 1) = 2   ->  r1^2 = 4
      C2 = ( 1,  0)  , r2 = sqrt(1 + 0 + 5) = sqrt(6) -> r2^2 = 6
      d^2 = (-2 - 1)^2 + (-1 - 0)^2 = 9 + 1 = 10
      r1^2 + r2^2 = 4 + 6 = 10 = d^2                      CORRECT
```

### WORKED EXAMPLE 3B (with a fraction — the classic trap)
Show that `x^2 + y^2 - 2x - 2y - 7 = 0` and `3x^2 + 3y^2 - 8x + 29y = 0`
cut each other orthogonally.

```
  STEP 1  DIVIDE THE SECOND CIRCLE BY 3. (Skip this and everything is wrong.)

              x^2 + y^2 - (8/3)x + (29/3)y = 0

  STEP 2  Read off:

     CIRCLE 1   g1 = -1  , f1 = -1   , c1 = -7
     CIRCLE 2   g2 = -4/3, f2 = 29/6 , c2 = 0

              (because 2 g2 = -8/3 -> g2 = -4/3
                   and 2 f2 = 29/3 -> f2 = 29/6)

  STEP 3  Test the condition.

     LHS = 2 g1 g2 + 2 f1 f2
         = 2(-1)(-4/3) + 2(-1)(29/6)
         = 8/3 - 29/3
         = -21/3
         = -7

     RHS = c1 + c2 = -7 + 0 = -7

     LHS = RHS    ->   ORTHOGONAL.
```

### WORKED EXAMPLE 3C — find k
Find k so that `x^2 + y^2 - 5x - 14y - 34 = 0` and
`x^2 + y^2 + 2x + 4y + k = 0` cut orthogonally.

```
  g1 = -5/2 , f1 = -7 , c1 = -34
  g2 =  1   , f2 =  2 , c2 =  k

  2 g1 g2 + 2 f1 f2 = c1 + c2

  2(-5/2)(1) + 2(-7)(2) = -34 + k

          -5   -   28    = -34 + k

               -33       = -34 + k

                 k = 1
```

```
  CHECK:   C1 = (5/2, 7) , r1^2 = 25/4 + 49 + 34 = 25/4 + 83 = 357/4
           C2 = (-1, -2) , r2^2 = 1 + 4 - 1 = 4
           d^2 = (5/2 + 1)^2 + (7 + 2)^2 = (7/2)^2 + 81 = 49/4 + 81 = 373/4
           r1^2 + r2^2 = 357/4 + 16/4 = 373/4  = d^2      CORRECT
```

### WORKED EXAMPLE 3D — a quadratic in k
Find k if `x^2 + y^2 + 2x + 2ky + 6 = 0` and `x^2 + y^2 + 2ky + k = 0`
are orthogonal.

```
  g1 = 1 , f1 = k , c1 = 6
  g2 = 0 , f2 = k , c2 = k

  2(1)(0) + 2(k)(k) = 6 + k

              2 k^2 = 6 + k

       2 k^2 - k - 6 = 0

       (2k + 3)(k - 2) = 0

              k = 2    or    k = -3/2
```

> **TRAP:** Do not "cancel" 2k on both sides here. There is nothing to cancel —
> the k's are in different places. Bring everything to one side and factorise.

---

# TOPIC 4 — Finding a circle orthogonal to given circles

Let the required circle be `x^2 + y^2 + 2gx + 2fy + c = 0` — three unknowns
**g, f, c**. So you need **three** pieces of information.

```
  +--------------------------------------------------------------+
  |  EACH condition gives you ONE linear equation:               |
  |                                                              |
  |   "orthogonal to  x^2+y^2+2g'x+2f'y+c' = 0"                  |
  |            ->   2 g g'  +  2 f f'  =  c  +  c'               |
  |                                                              |
  |   "passes through the point (x1, y1)"                        |
  |            ->   x1^2 + y1^2 + 2g x1 + 2f y1 + c = 0          |
  |                                                              |
  |   "centre lies on the line ax + by + k = 0"                  |
  |            ->   a(-g) + b(-f) + k = 0                        |
  |                                                              |
  |   "passes through the origin"     ->   c = 0                 |
  |   "touches the x-axis"            ->   g^2 = c               |
  |   "touches the y-axis"            ->   f^2 = c               |
  |                                                              |
  |  Collect any THREE of them and solve the linear system.      |
  +--------------------------------------------------------------+
```

Notice the beautiful thing: the orthogonality condition is **linear** in g, f, c.
No squares, no square roots. It is ordinary simultaneous equations.

### WORKED EXAMPLE 4A — orthogonal to two circles, through a point
Find the circle that cuts `x^2 + y^2 + 4x + 2y + 1 = 0` and
`x^2 + y^2 - 2x - 5 = 0` orthogonally and passes through the **origin**.

```
  Let the circle be   x^2 + y^2 + 2gx + 2fy + c = 0.

  CONDITION 1  Passes through (0,0):
                   0 + 0 + 0 + 0 + c = 0     ->    c = 0

  CONDITION 2  Orthogonal to circle 1 (g'=2, f'=1, c'=1):
                   2g(2) + 2f(1) = c + 1
                   4g + 2f = 0 + 1 = 1                    ... (I)

  CONDITION 3  Orthogonal to circle 2 (g'=-1, f'=0, c'=-5):
                   2g(-1) + 2f(0) = c + (-5)
                   -2g = -5      ->    g = 5/2            ... (II)

  Put g = 5/2 into (I):
                   4(5/2) + 2f = 1
                       10 + 2f = 1
                            2f = -9
                             f = -9/2

  THE CIRCLE:   x^2 + y^2 + 5x - 9y = 0
```

```
  CHECK 1 (orthogonal to circle 1):
        2(5/2)(2) + 2(-9/2)(1) = 10 - 9 = 1
        c + c' = 0 + 1 = 1                       CORRECT

  CHECK 2 (orthogonal to circle 2):
        2(5/2)(-1) + 2(-9/2)(0) = -5
        c + c' = 0 + (-5) = -5                   CORRECT

  CHECK 3 (through the origin):  c = 0           CORRECT
```

### WORKED EXAMPLE 4B — orthogonal to THREE circles (the 7-mark question)
Find the circle orthogonal to all three of

```
   A :  x^2 + y^2 + 2x + 17y + 4 = 0
   B :  x^2 + y^2 + 7x +  6y + 11 = 0
   C :  x^2 + y^2 -  x + 22y + 3 = 0
```

```
  Let the circle be  x^2 + y^2 + 2gx + 2fy + c = 0.

  Read off the three given circles:

     A :  g' = 1    , f' = 17/2 , c' = 4
     B :  g' = 7/2  , f' = 3    , c' = 11
     C :  g' = -1/2 , f' = 11   , c' = 3

  ORTHOGONAL TO A :  2g(1) + 2f(17/2) = c + 4
                         2g + 17f = c + 4          ... (1)

  ORTHOGONAL TO B :  2g(7/2) + 2f(3) = c + 11
                         7g + 6f = c + 11          ... (2)

  ORTHOGONAL TO C :  2g(-1/2) + 2f(11) = c + 3
                        -g + 22f = c + 3           ... (3)

  Subtract to kill c.

  (2) - (1):   7g + 6f - 2g - 17f = 11 - 4
                    5g - 11f = 7                   ... (4)

  (2) - (3):   7g + 6f + g - 22f = 11 - 3
                    8g - 16f = 8
                     g -  2f = 1                   ... (5)

  From (5):    g = 1 + 2f.   Put into (4):

               5(1 + 2f) - 11f = 7
               5 + 10f - 11f  = 7
                        - f   = 2
                          f   = -2

               g = 1 + 2(-2) = -3

  From (1):    c = 2g + 17f - 4 = -6 - 34 - 4 = -44

  THE CIRCLE:   x^2 + y^2 - 6x - 4y - 44 = 0
```

```
  CHECK against equation (2):  7(-3) + 6(-2) = -21 - 12 = -33
                              c + 11 = -44 + 11 = -33      CORRECT
  CHECK against equation (3):  -(-3) + 22(-2) = 3 - 44 = -41
                              c + 3  = -44 + 3  = -41      CORRECT
```

There is a much faster route to the same answer using the **radical centre** —
see Topic 8. (Its centre (3, 2) is exactly the radical centre of A, B, C.)

---

# TOPIC 5 — The RADICAL AXIS

## The idea, in plain words

Stand at some point P outside both circles. Draw a tangent from P to circle 1 —
it has some length. Draw a tangent from P to circle 2 — it has some length.

Usually those two lengths are different. But there are special points where they
are **exactly equal**. Collect all such points, and you get a straight line.

```
                          P
                         /|\
                        / | \    both tangents from P
                       /  |  \   have the SAME length
                      /   |   \
         . . . .     /    |    \       . . . .
      .          .  /     |     \   .          .
     .   circle 1 ./      |      \ .  circle 2  .
     .        C1 * .      |     . * C2          .
      .          .        |       .            .
         . . . .          |          . . . .
                          |
                     RADICAL AXIS
                  (the locus of all such P)
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  DEFINITION                                                      |
  |                                                                  |
  |  The RADICAL AXIS of two circles is the LOCUS of a point that    |
  |  moves so that the LENGTHS OF THE TANGENTS drawn from it to the  |
  |  two circles are EQUAL.                                          |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Deriving its equation (this is a favourite 2 or 4 mark "derive" question)

```
  Let P(x1, y1) be a point on the radical axis.

  Length of the tangent from P to circle 1  =  sqrt( S1 at P )
  Length of the tangent from P to circle 2  =  sqrt( S2 at P )

  They are equal:

      sqrt(x1^2 + y1^2 + 2g1x1 + 2f1y1 + c1)
              =  sqrt(x1^2 + y1^2 + 2g2x1 + 2f2y1 + c2)

  SQUARE both sides:

      x1^2 + y1^2 + 2g1x1 + 2f1y1 + c1
              =  x1^2 + y1^2 + 2g2x1 + 2f2y1 + c2

  The x1^2 and y1^2 CANCEL. That is the whole magic of this chapter:

      2 g1 x1 + 2 f1 y1 + c1  =  2 g2 x1 + 2 f2 y1 + c2

      2(g1 - g2) x1 + 2(f1 - f2) y1 + (c1 - c2) = 0

  Drop the subscript 1 (P was any point on the locus):
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     RADICAL AXIS:        S1  -  S2  =  0                         |
  |                                                                  |
  |     i.e.   2(g1 - g2) x  +  2(f1 - f2) y  +  (c1 - c2)  =  0     |
  |                                                                  |
  |     It is a STRAIGHT LINE - the squared terms always cancel.     |
  |                                                                  |
  +------------------------------------------------------------------+
```

> **TRAP:** `S1 - S2 = 0` only works when BOTH circles have `x^2 + y^2` with
> coefficient 1. If one is `2x^2 + 2y^2 + ...`, divide it by 2 first, otherwise
> the squared terms do not cancel and you get a circle instead of a line.

## Property: the radical axis is PERPENDICULAR to the line of centres

```
  Slope of the radical axis  2(g1-g2)x + 2(f1-f2)y + (c1-c2) = 0 :

              - 2(g1 - g2)          (g1 - g2)
       m1  =  -------------  =  -  -----------
               2(f1 - f2)           (f1 - f2)

  Slope of the line joining C1(-g1, -f1) and C2(-g2, -f2) :

              -f2 - (-f1)        f1 - f2
       m2  =  --------------  =  ---------
              -g2 - (-g1)        g1 - g2

  Multiply:

              (g1 - g2)     (f1 - f2)
     m1 m2 = - ---------  x  ---------  =  -1
              (f1 - f2)     (g1 - g2)

  m1 * m2 = -1     ->    THEY ARE PERPENDICULAR.
```

```
                              |  radical axis
                              |
                              |
             * C1 ------------+------------- * C2
                              |    line of centres
                              |
                              |     (always a right angle)
```

## Where does the radical axis actually lie? THREE CASES

### CASE 1 — the circles CUT at two points: it is the COMMON CHORD

```
                     radical axis
                          |
                          |
             . . . . .    |    . . . . .
          .            . A|  .           .
        .               . | .              .
       .        * C1     .|.      * C2      .
        .               . | .              .
          .            . B|  .           .
             . . . . .    |    . . . . .
                          |

     A and B are the two crossing points.
     The radical axis passes through BOTH of them.
     So here:   RADICAL AXIS  =  COMMON CHORD  =  the line AB.
```

Why? Because at a crossing point A, the tangent length to **both** circles is zero,
and 0 = 0, so A satisfies the equal-tangent condition. Same for B.

### CASE 2 — the circles TOUCH: it is the COMMON TANGENT at the point of contact

```
                            |  radical axis
                            |
            . . . .         |         . . . .
         .         .        |      .          .
        .   * C1    .       |     .   * C2     .
        .            .      |    .             .
         .            . . . T . .             .
            . . . .         |       . . . .
                            |

     T is the single point where the circles touch.
     The radical axis is the common tangent line at T.
```

### CASE 3 — the circles do NOT meet: the radical axis lies OUTSIDE both

```
                                |  radical axis
            . . . .             |            . . . . . .
         .         .            |         .              .
        .   * C1    .           |        .    * C2        .
        .            .          |         .              .
         .         .            |            . . . . . .
            . . . .             |

     The line still exists. It is still perpendicular to C1C2.
     It just does not touch either circle. It is NOT a common chord.
     Do not call it one.
```

> **TRAP:** For two **concentric** circles (same centre, different radii) there is
> NO radical axis. Try it: g1 = g2 and f1 = f2, so S1 - S2 = c1 - c2, a non-zero
> constant. `c1 - c2 = 0` is impossible — no line at all.

### WORKED EXAMPLE 5A
Find the radical axis of `x^2 + y^2 - 2x - 4y - 1 = 0` and
`x^2 + y^2 - 4x - 6y + 11 = 0`.

```
  RADICAL AXIS  =  S1 - S2 = 0

  (x^2 + y^2 - 2x - 4y - 1) - (x^2 + y^2 - 4x - 6y + 11) = 0

  Watch the signs when you remove the bracket:

     - 2x - 4y - 1 + 4x + 6y - 11 = 0

              2x + 2y - 12 = 0

              x + y - 6 = 0
```

```
  CHECK it is perpendicular to the line of centres:
     C1 = (1, 2) , C2 = (2, 3)
     slope of C1C2 = (3 - 2)/(2 - 1) = 1
     slope of radical axis x + y - 6 = 0  is  -1
     1 x (-1) = -1        PERPENDICULAR                CORRECT
```

### WORKED EXAMPLE 5B — the coefficients are not 1
Find the radical axis of `x^2 + y^2 + 4x - 7 = 0` and `2x^2 + 2y^2 + 3x + 5y - 9 = 0`.

```
  STEP 1  DIVIDE the second by 2:

              x^2 + y^2 + (3/2)x + (5/2)y - 9/2 = 0

  STEP 2  Subtract.

     (4x - 7)  -  ( (3/2)x + (5/2)y - 9/2 )  =  0

        4x - (3/2)x  -  (5/2)y  - 7 + 9/2  =  0

            (5/2)x  -  (5/2)y  -  5/2  =  0

  STEP 3  Multiply through by 2/5:

              x  -  y  -  1  =  0
```

---

# TOPIC 6 — The COMMON CHORD and its LENGTH

When two circles cut at two points A and B, the segment AB is the **common chord**.

```
  EQUATION OF THE COMMON CHORD    :    S1 - S2 = 0
  (exactly the same line as the radical axis)
```

## Finding its LENGTH

Use ordinary chord geometry on **either** circle. Both give the same answer —
which is a free way to check yourself.

```
                     A
                    /|
                   / |
              r  /   |  half the chord
               /     |
             /       |
          C * ------ M          M = midpoint of the chord
                p                p = perpendicular distance from C to the chord

     Right-angled triangle CMA:      AM^2 = r^2 - p^2

     FULL CHORD  AB  =  2 AM
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    LENGTH OF THE COMMON CHORD                                    |
  |                                                                  |
  |         L  =  2 sqrt( r1^2  -  p1^2 )                            |
  |                                                                  |
  |    where p1 = perpendicular distance from C1 to the common chord |
  |                                                                  |
  |    (Using r2 and p2 must give exactly the same number.)          |
  |                                                                  |
  +------------------------------------------------------------------+
```

### WORKED EXAMPLE 6A
Find the length of the common chord of `x^2 + y^2 = 25` and
`x^2 + y^2 - 8x - 6y + 5 = 0`.

```
  STEP 1  Write circle 1 as   x^2 + y^2 - 25 = 0.

  STEP 2  COMMON CHORD  =  S1 - S2 = 0

     (x^2+y^2-25) - (x^2+y^2-8x-6y+5) = 0

           - 25 + 8x + 6y - 5 = 0

               8x + 6y - 30 = 0

               4x + 3y - 15 = 0

  STEP 3  Centre and radius of circle 1:  C1 = (0, 0) , r1 = 5

  STEP 4  Perpendicular distance from C1(0,0) to 4x + 3y - 15 = 0:

              | 4(0) + 3(0) - 15 |        15
        p1 = ---------------------  =  -------  =  3
              sqrt( 16 + 9 )              5

  STEP 5  LENGTH  =  2 sqrt(r1^2 - p1^2)
                  =  2 sqrt(25 - 9)
                  =  2 sqrt(16)
                  =  2 x 4
                  =  8
```

```
  CHECK using the OTHER circle:
     C2 = (4, 3) ,  r2 = sqrt(16 + 9 - 5) = sqrt(20) = 2 sqrt(5)
     p2 = |4(4) + 3(3) - 15| / 5 = |16 + 9 - 15| / 5 = 10/5 = 2
     LENGTH = 2 sqrt(20 - 4) = 2 sqrt(16) = 8            SAME ANSWER

  CHECK by actually finding the two points:
     4x + 3y = 15  ->  y = (15 - 4x)/3 , substitute into x^2 + y^2 = 25:
        9x^2 + (15 - 4x)^2 = 225
        9x^2 + 225 - 120x + 16x^2 = 225
        25x^2 - 120x = 0     ->    x = 0  or  x = 24/5
        x = 0    -> y = 5        point (0, 5)
        x = 24/5 -> y = -7/5     point (24/5, -7/5)
     Distance = sqrt( (24/5)^2 + (5 + 7/5)^2 ) = sqrt(576/25 + 1024/25)
              = sqrt(1600/25) = sqrt(64) = 8              CORRECT
```

### WORKED EXAMPLE 6B
Find the length of the common chord of `x^2 + y^2 + 2x + 3y + 1 = 0`
and `x^2 + y^2 + 4x + 3y + 2 = 0`.

```
  COMMON CHORD:   (2x + 3y + 1) - (4x + 3y + 2) = 0
                        -2x - 1 = 0
                         2x + 1 = 0     i.e.   x = -1/2

  Circle 1:  g1 = 1 , f1 = 3/2 , c1 = 1
             C1 = (-1, -3/2)
             r1 = sqrt(1 + 9/4 - 1) = sqrt(9/4) = 3/2

  p1 = distance from (-1, -3/2) to the vertical line x = -1/2
     = | -1 - (-1/2) |  =  1/2

  LENGTH = 2 sqrt( (3/2)^2 - (1/2)^2 ) = 2 sqrt(9/4 - 1/4)
         = 2 sqrt(8/4) = 2 sqrt(2)
```

## When is the common chord LONGEST?

A chord of a circle is longest when it is a **diameter**. So the common chord
reaches its maximum length when it passes through the **centre of one of the
circles** — and the biggest chord you can get is the diameter of the **smaller**
circle.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   The common chord is a DIAMETER of circle 1                     |
  |          <=>   the centre C1 LIES ON the radical axis            |
  |          <=>   substitute C1 into  S1 - S2 = 0  and get 0        |
  |                                                                  |
  |   In terms of distances:      d^2  =  r2^2  -  r1^2              |
  |                                                                  |
  |   MAXIMUM POSSIBLE LENGTH  =  2 x (the SMALLER radius)           |
  |                                                                  |
  +------------------------------------------------------------------+
```

### WORKED EXAMPLE 6C
Show that the common chord of `x^2 + y^2 = 9` and `x^2 + y^2 - 4x - 9 = 0`
is a diameter of the first circle, and find its length.

```
  COMMON CHORD:  (x^2+y^2-9) - (x^2+y^2-4x-9) = 0
                        4x = 0     ->    x = 0

  Circle 1:  C1 = (0, 0) , r1 = 3.
  The line x = 0 passes through (0, 0), the centre.
  So the common chord IS a diameter of circle 1.

  LENGTH = 2 r1 = 6.

  CHECK the distance condition:
     Circle 2: C2 = (2, 0) , r2 = sqrt(4 + 9) = sqrt(13)
     d = 2 , so d^2 = 4 ,  r2^2 - r1^2 = 13 - 9 = 4       CORRECT
```

## Making the common chord pass through a given point

Simply substitute the point into `S1 - S2 = 0` and solve for the unknown.

### WORKED EXAMPLE 6D
Find k if the common chord of `x^2 + y^2 - 2x - 4y + 1 = 0` and
`x^2 + y^2 + 2x + k y - 3 = 0` passes through (1, 1).

```
  COMMON CHORD:

     (-2x - 4y + 1) - (2x + ky - 3) = 0

         -4x - (4 + k) y + 4 = 0

  Substitute (1, 1):

         -4 - (4 + k) + 4 = 0

              -(4 + k) = 0

                   k = -4
```

```
  CHECK:  with k = -4 the second circle is x^2 + y^2 + 2x - 4y - 3 = 0.
          Common chord: (-2x - 4y + 1) - (2x - 4y - 3) = -4x + 4 = 0, i.e. x = 1.
          The point (1, 1) lies on x = 1.                    CORRECT
```

---

# TOPIC 7 — RELATIVE POSITION of two circles and the number of common tangents

This is the single most-asked idea in the chapter. Work out r1, r2 and d, then
compare. Five cases, and the number of common tangents counts down 4, 3, 2, 1, 0.

### CASE 1 — the circles lie APART (each outside the other): d > r1 + r2

```
       . . . .                       . . . . . .
    .           .                 .              .
   .    * C1     .               .     * C2       .
   .             .               .                .
    .           .                 .              .
       . . . .                       . . . . . .

       |<--------------- d --------------->|

    d is BIGGER than r1 + r2.
    They never meet.
    COMMON TANGENTS:  4     (2 direct + 2 transverse)
```

### CASE 2 — the circles TOUCH EXTERNALLY: d = r1 + r2

```
       . . . .           . . . . . .
    .           .     .              .
   .    * C1     .   .     * C2       .
   .             . T .                .
    .           .     .              .
       . . . .           . . . . . .

    d is EXACTLY r1 + r2. One point of contact T.
    COMMON TANGENTS:  3     (2 direct + 1 at the point of contact)
```

### CASE 3 — the circles INTERSECT at two points: |r1 - r2| < d < r1 + r2

```
           . . . . .     . . . . .
        .           . A .          .
      .              . .            .
     .      * C1     . .    * C2     .
      .              . .            .
        .           . B .          .
           . . . . .     . . . . .

    COMMON TANGENTS:  2     (only the 2 direct ones - a transverse
                             tangent would have to pass between the
                             circles, and there is no gap)
```

### CASE 4 — the circles TOUCH INTERNALLY: d = |r1 - r2|

```
          . . . . . . . . .
       .                     .
     .      . . . . .          .
    .    .           .          .
   .    .   * C2      .   * C1   . T
    .    .           .          .
     .      . . . . .          .
       .                     .
          . . . . . . . . .

    The small circle sits inside and just kisses the big one at T.
    COMMON TANGENTS:  1     (the common tangent at T)
```

### CASE 5 — one circle lies COMPLETELY INSIDE the other: d < |r1 - r2|

```
          . . . . . . . . .
       .                     .
     .      . . . . .          .
    .    .           .          .
   .    .   * C2      .  * C1    .
    .    .           .          .
     .      . . . . .          .
       .                     .
          . . . . . . . . .

    No contact anywhere.
    COMMON TANGENTS:  0
```

## THE FULL TABLE — learn this, it is worth 2 marks every year

| # | Condition on d | Position | Common tangents | Radical axis is ... |
|---|---------------|----------|-----------------|---------------------|
| 1 | d > r1 + r2 | lie apart, each outside the other | **4** (2 direct + 2 transverse) | a line outside both circles |
| 2 | d = r1 + r2 | touch **externally** | **3** (2 direct + 1 at contact) | the common tangent at the contact point |
| 3 | \|r1 - r2\| < d < r1 + r2 | cut at **two** points | **2** (both direct) | the common chord |
| 4 | d = \|r1 - r2\| | touch **internally** | **1** (at the contact point) | the common tangent at the contact point |
| 5 | d < \|r1 - r2\| | one lies **inside** the other | **0** | a line outside both circles |

```
  MEMORY HOOK

        far apart          4
        touch outside      3
        cross over         2
        touch inside       1
        swallowed          0

     Just count DOWN as the circles get closer. 4-3-2-1-0.
```

## Points of contact when the circles touch

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  TOUCH EXTERNALLY  (d = r1 + r2)                                 |
  |     The point of contact divides C1C2 INTERNALLY in r1 : r2       |
  |                                                                  |
  |          ( r1 x2 + r2 x1     r1 y2 + r2 y1 )                     |
  |          ( -------------- ,  -------------- )                    |
  |          (   r1 + r2            r1 + r2     )                    |
  |                                                                  |
  |  TOUCH INTERNALLY  (d = |r1 - r2|)                               |
  |     The point of contact divides C1C2 EXTERNALLY in r1 : r2       |
  |                                                                  |
  |          ( r1 x2 - r2 x1     r1 y2 - r2 y1 )                     |
  |          ( -------------- ,  -------------- )                    |
  |          (   r1 - r2            r1 - r2     )                    |
  |                                                                  |
  |  (C1 = (x1,y1) , C2 = (x2,y2))                                   |
  |                                                                  |
  |  FASTER ALTERNATIVE: the point of contact is where the radical   |
  |  axis meets the line of centres. Solve the two lines together.   |
  |                                                                  |
  +------------------------------------------------------------------+
```

### WORKED EXAMPLE 7A
Show that `x^2 + y^2 - 6x - 2y + 1 = 0` and `x^2 + y^2 + 2x - 8y + 13 = 0`
touch each other. Find the point of contact and the common tangent there.

```
  STEP 1   C1 = (3, 1) , r1 = sqrt(9 + 1 - 1) = 3
           C2 = (-1, 4), r2 = sqrt(1 + 16 - 13) = 2

  STEP 2   d = sqrt( (3+1)^2 + (1-4)^2 ) = sqrt(16 + 9) = 5

  STEP 3   r1 + r2 = 3 + 2 = 5 = d
           ->  THE CIRCLES TOUCH EXTERNALLY. (3 common tangents.)

  STEP 4   Point of contact divides C1C2 internally in 3 : 2 :

              ( 3(-1) + 2(3)     3(4) + 2(1) )     ( -3 + 6   12 + 2 )
              ( ------------- ,  ----------- )  =  ( ------ , ------ )
              (     3 + 2            3 + 2   )     (   5        5    )

                            =  ( 3/5 , 14/5 )

  STEP 5   Common tangent at contact = radical axis = S1 - S2 = 0 :

              (-6x - 2y + 1) - (2x - 8y + 13) = 0
                   -8x + 6y - 12 = 0
                    4x - 3y + 6 = 0
```

```
  CHECK the point lies on circle 1:
     (3/5)^2 + (14/5)^2 - 6(3/5) - 2(14/5) + 1
        = 9/25 + 196/25 - 18/5 - 28/5 + 1
        = 205/25 - 46/5 + 1  =  8.2 - 9.2 + 1  =  0       CORRECT

  CHECK the line touches circle 1:  distance from (3,1) to 4x - 3y + 6 = 0
        = |12 - 3 + 6| / sqrt(16 + 9) = 15/5 = 3 = r1     CORRECT
  CHECK the line touches circle 2:  distance from (-1,4)
        = |-4 - 12 + 6| / 5 = 10/5 = 2 = r2               CORRECT
```

### WORKED EXAMPLE 7B
Find the number of common tangents to `x^2 + y^2 = 25` and `x^2 + y^2 - 4x - 5 = 0`.

```
  C1 = (0, 0) , r1 = 5
  C2 = (2, 0) , r2 = sqrt(4 + 5) = 3
  d  = 2

  |r1 - r2| = |5 - 3| = 2 = d      ->    THEY TOUCH INTERNALLY

  NUMBER OF COMMON TANGENTS = 1

  (Point of contact: divides C1C2 externally in 5 : 3
      = ( (5(2) - 3(0))/(5-3) , 0 ) = (10/2, 0) = (5, 0).
   Check on circle 2: 25 + 0 - 20 - 5 = 0.   CORRECT
   The single common tangent is x = 5.)
```

---

# TOPIC 8 — The RADICAL CENTRE of three circles

Take three circles whose centres are **not in a straight line**. Draw the radical
axis of each pair — there are three of them. Amazing fact:

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   THE THREE RADICAL AXES OF THREE CIRCLES ARE CONCURRENT         |
  |   (they all pass through ONE single point)                       |
  |                                                                  |
  |   That point is called the RADICAL CENTRE.                       |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
                    circle 3
                      . . .
                   .        .
                  .   * C3   .
                   .        .
                      . . .
                        |
                        |  radical axis of 1 & 3
       radical axis  \  |  /  radical axis of 2 & 3
       of 1 & 2       \ | /
                       \|/
                        R          <-- RADICAL CENTRE
                       /|\
        . . .        /  |  \        . . .
     .        .    /    |    \   .        .
    .   * C1   . /      |      \.   * C2   .
     .        .         |        .        .
        . . .           |           . . .
```

## Why are they concurrent? (a two-line proof — often asked)

```
  Let R be the point where the radical axes of (1,2) and (1,3) meet.

  R is on the radical axis of circles 1 and 2
              ->  tangent length to 1  =  tangent length to 2

  R is on the radical axis of circles 1 and 3
              ->  tangent length to 1  =  tangent length to 3

  Therefore    tangent length to 2  =  tangent length to 3

              ->  R is on the radical axis of circles 2 and 3.

  So all three pass through R.
```

## How to find it

```
   STEP 1  Make all three circles start with x^2 + y^2 (divide if needed).
   STEP 2  Write ANY TWO radical axes:   S1 - S2 = 0  and  S1 - S3 = 0.
   STEP 3  Solve those two linear equations together.
   STEP 4  (Optional 30-second check) the third one, S2 - S3 = 0,
           must also be satisfied.
```

### WORKED EXAMPLE 8A
Find the radical centre of

```
   S1 :  x^2 + y^2 + 4x - 7 = 0
   S2 :  2x^2 + 2y^2 + 3x + 5y - 9 = 0
   S3 :  x^2 + y^2 + y = 0
```

```
  STEP 1   Divide S2 by 2:

              S2 :  x^2 + y^2 + (3/2)x + (5/2)y - 9/2 = 0

  STEP 2   S1 - S2 = 0 :

              (4x - 7) - ( (3/2)x + (5/2)y - 9/2 ) = 0

              4x - (3/2)x - (5/2)y - 7 + 9/2 = 0

              (5/2)x - (5/2)y - 5/2 = 0

  multiply by 2/5:        x - y - 1 = 0                    ... (I)

  STEP 3   S1 - S3 = 0 :

              (4x - 7) - ( y ) = 0

                    4x - y - 7 = 0                         ... (II)

  STEP 4   Solve (I) and (II).  Subtract (I) from (II):

              (4x - y - 7) - (x - y - 1) = 0
                       3x - 6 = 0
                          x = 2

           From (I):   2 - y - 1 = 0   ->   y = 1

           RADICAL CENTRE  =  ( 2 , 1 )
```

```
  CHECK with the third radical axis  S2 - S3 = 0 :
      ( (3/2)x + (5/2)y - 9/2 ) - ( y ) = 0
        (3/2)x + (3/2)y - 9/2 = 0   ->   x + y - 3 = 0
      At (2,1):  2 + 1 - 3 = 0                            CONCURRENT

  CHECK the tangent lengths are equal:
      S1 at (2,1) = 4 + 1 + 8 - 7 = 6
      S2 at (2,1) = 4 + 1 + 3 + 5/2 - 9/2 = 6
      S3 at (2,1) = 4 + 1 + 1 = 6
      All 6, so all three tangent lengths are sqrt(6).      CORRECT
```

## THE BIG USE — a circle orthogonal to three given circles

This is the fast route to Worked Example 4B, and it is a favourite 7-mark question.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   THE CIRCLE THAT CUTS ALL THREE GIVEN CIRCLES ORTHOGONALLY      |
  |                                                                  |
  |      CENTRE  =  the RADICAL CENTRE R of the three circles        |
  |                                                                  |
  |      RADIUS  =  the LENGTH OF THE TANGENT from R to any one      |
  |                 of them   =  sqrt( S1 at R )                     |
  |                                                                  |
  +------------------------------------------------------------------+
```

Why? Because if a circle centred at R with radius t cuts circle 1 at right angles,
then by Pythagoras `(distance R to C1)^2 = t^2 + r1^2`, i.e.
`t^2 = (distance)^2 - r1^2 = ` the power of R with respect to circle 1 `= S1 at R`.
So t is the tangent length. And the radical centre is exactly the point where
that tangent length is the **same** for all three circles — which is precisely
what makes one single circle work for all three.

```
                          . - - - - - - - .
                       '                     '
                     '     the required        '
                    '      orthogonal           '
                   '        circle               '
                   '          * R                '     R = radical centre
                   '         radius = tangent    '     from R
                    '        length from R      '
                     '                        '
                       ' - - - - - - - - - '

      It crosses each of the three circles at 90 degrees.
```

### WORKED EXAMPLE 8B
Find the circle that cuts the three circles of Worked Example 8A orthogonally.

```
  From 8A:   radical centre  R = (2, 1)
             S1 at R = 6   ->  radius = sqrt(6)

  CIRCLE:    (x - 2)^2 + (y - 1)^2 = 6

             x^2 - 4x + 4 + y^2 - 2y + 1 = 6

             x^2 + y^2 - 4x - 2y - 1 = 0
```

```
  CHECK orthogonality with S1 : x^2 + y^2 + 4x - 7 = 0
     required circle:  g = -2 , f = -1 , c = -1
     given circle   :  g' = 2 , f' = 0 , c' = -7
     2 g g' + 2 f f' = 2(-2)(2) + 2(-1)(0) = -8
     c + c'          = -1 + (-7) = -8                    CORRECT

  CHECK orthogonality with S3 : x^2 + y^2 + y = 0
     g' = 0 , f' = 1/2 , c' = 0
     2(-2)(0) + 2(-1)(1/2) = -1
     c + c' = -1 + 0 = -1                                CORRECT

  CHECK orthogonality with S2 : x^2 + y^2 + (3/2)x + (5/2)y - 9/2 = 0
     g' = 3/4 , f' = 5/4 , c' = -9/2
     2(-2)(3/4) + 2(-1)(5/4) = -3 - 5/2 = -11/2
     c + c' = -1 - 9/2 = -11/2                           CORRECT
```

> **TRAP:** If `S1 at R` comes out **negative**, R is inside the circles, no real
> tangent exists, and there is **no real orthogonal circle**. Say that in words —
> do not take the square root of a negative number and carry on.

---

# TOPIC 9 — COMMON TANGENTS

A **common tangent** touches both circles.

```
  DIRECT (also called EXTERNAL) common tangent
      -> both circles lie on the SAME side of the line
      -> it does NOT cross the line joining the centres between them

  TRANSVERSE (also called INTERNAL) common tangent
      -> the circles lie on OPPOSITE sides of the line
      -> it DOES cross between the two centres
```

```
   ______________________________________________  direct common tangent
       . . . .                     . . . . . .
    .           .               .              .
   .    * C1     .-------------.     * C2       .
    .           .               .              .
       . . . .                     . . . . . .
   ______________________________________________  direct common tangent


   The two DIRECT tangents meet each other at a point OUTSIDE both
   circles, on the line C1C2 extended.  That point is the
   EXTERNAL CENTRE OF SIMILITUDE.


                     \                    /
       . . . .        \                  /       . . . . . .
    .           .      \                /     .              .
   .    * C1     .      \      I       /     .     * C2       .
    .           .        \    /  \    /       .              .
       . . . .            \  /    \  /           . . . . . .
                           \/      \/
                           /\      /\
                          /  \    /  \
                    transverse common tangents

   The two TRANSVERSE tangents cross each other BETWEEN the circles,
   at the INTERNAL CENTRE OF SIMILITUDE.
```

## The centres of similitude

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  INTERNAL centre of similitude I                                 |
  |     divides C1 C2  INTERNALLY  in the ratio  r1 : r2             |
  |                                                                  |
  |          ( r1 x2 + r2 x1     r1 y2 + r2 y1 )                     |
  |     I =  ( -------------- ,  -------------- )                    |
  |          (   r1 + r2            r1 + r2     )                    |
  |                                                                  |
  |     The TRANSVERSE common tangents pass through I.               |
  |                                                                  |
  |  EXTERNAL centre of similitude E                                 |
  |     divides C1 C2  EXTERNALLY  in the ratio  r1 : r2             |
  |                                                                  |
  |          ( r1 x2 - r2 x1     r1 y2 - r2 y1 )                     |
  |     E =  ( -------------- ,  -------------- )                    |
  |          (   r1 - r2            r1 - r2     )                    |
  |                                                                  |
  |     The DIRECT common tangents pass through E.                   |
  |                                                                  |
  |  (If r1 = r2 there is NO external centre of similitude - the     |
  |   two direct tangents are PARALLEL to C1C2.)                     |
  |                                                                  |
  +------------------------------------------------------------------+
```

Memory hook: **I**nternal goes with **I**nternal (transverse) tangents;
**E**xternal goes with **E**xternal (direct) tangents.

## The LENGTHS of the common tangents

```
  DIRECT common tangent, length L1:  drop a perpendicular from C1 onto
  the radius of the second circle, making a right-angled triangle whose
  legs are L1 and (r1 - r2) and whose hypotenuse is d.

        A ________________ B          AB = L1 = the tangent segment
         |                |
      r1 |                | r2
         |                |
        C1 -------------- C2
                d

     Slide r2 along: the gap left over is (r1 - r2),
     so   d^2 = L1^2 + (r1 - r2)^2
```

```
  TRANSVERSE common tangent, length L2: same trick, but now the radii
  point in OPPOSITE directions, so the leftover leg is (r1 + r2).

        A                              A and B are the two touch points
         \                             on the transverse tangent
       r1 \
           \
        C1 -\--------------- C2
              \             |
                \           | r2
                  \         |
                    \       B

     d^2 = L2^2 + (r1 + r2)^2
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  LENGTH OF A DIRECT (external) COMMON TANGENT                    |
  |                                                                  |
  |        L1  =  sqrt( d^2  -  (r1 - r2)^2 )                        |
  |                                                                  |
  |        (needs d >= |r1 - r2| , i.e. the circles are not one      |
  |         inside the other)                                        |
  |                                                                  |
  |  LENGTH OF A TRANSVERSE (internal) COMMON TANGENT                |
  |                                                                  |
  |        L2  =  sqrt( d^2  -  (r1 + r2)^2 )                        |
  |                                                                  |
  |        (needs d >= r1 + r2 , i.e. the circles lie apart or       |
  |         touch externally)                                        |
  |                                                                  |
  +------------------------------------------------------------------+
```

### WORKED EXAMPLE 9A
Find the lengths of the direct and transverse common tangents to
`x^2 + y^2 = 49` and `x^2 + y^2 - 12x - 16y + 99 = 0`.

```
  C1 = (0, 0) , r1 = 7
  C2 = (6, 8) , r2 = sqrt(36 + 64 - 99) = sqrt(1) = 1
  d  = sqrt(36 + 64) = sqrt(100) = 10

  Since d = 10 > r1 + r2 = 8, the circles lie APART -> 4 common tangents.

  DIRECT:      L1 = sqrt( 100 - (7 - 1)^2 ) = sqrt(100 - 36) = sqrt(64) = 8

  TRANSVERSE:  L2 = sqrt( 100 - (7 + 1)^2 ) = sqrt(100 - 64) = sqrt(36) = 6
```

> **TRAP:** The direct tangent is always the LONGER one. If your "transverse"
> answer comes out bigger than your "direct" answer, you have swapped the
> `(r1 - r2)` and `(r1 + r2)`.

## FINDING THE EQUATIONS of the common tangents (7-mark method)

```
  STEP 1   Find C1, r1, C2, r2, d. Decide how many tangents exist.
  STEP 2   For DIRECT tangents: find E, the external centre of similitude.
           For TRANSVERSE tangents: find I, the internal one.
  STEP 3   Write a general line through that point:   y - y0 = m(x - x0),
           rearranged to   m x - y + (y0 - m x0) = 0.
  STEP 4   Make the perpendicular distance from ONE centre equal to
           THAT circle's radius. (Use the smaller circle - smaller numbers.)
  STEP 5   Square, tidy into a quadratic in m, solve for the two values of m.
  STEP 6   Substitute each m back into the line.
  STEP 7   ALWAYS check: distance from the OTHER centre must equal r2.
  STEP 8   Check separately whether a VERTICAL line x = x0 is also a tangent
           (the slope method can never produce it).
```

### WORKED EXAMPLE 9B — the classic 7-marker
Find the equations of the **direct** common tangents to
`x^2 + y^2 + 22x - 4y - 100 = 0` and `x^2 + y^2 - 22x + 4y + 100 = 0`.

```
  STEP 1   C1 = (-11, 2) , r1 = sqrt(121 + 4 + 100) = sqrt(225) = 15
           C2 = ( 11,-2) , r2 = sqrt(121 + 4 - 100) = sqrt(25)  = 5

           d = sqrt( 22^2 + 4^2 ) = sqrt(484 + 16) = sqrt(500) = 10 sqrt(5)
             ~ 22.36

           r1 + r2 = 20  <  d      ->  circles lie APART, 4 tangents exist.

  STEP 2   EXTERNAL centre of similitude E divides C1C2 externally in
           15 : 5  =  3 : 1.

              ( 3(11) - 1(-11)     3(-2) - 1(2) )
           E= ( ---------------- , ------------ )
              (      3 - 1              3 - 1   )

             = ( (33 + 11)/2 , (-6 - 2)/2 )

             = ( 22 , -4 )

  STEP 3   A line through (22, -4) with slope m:

              y + 4 = m(x - 22)

              m x - y - 22m - 4 = 0

  STEP 4   Distance from C2(11, -2) must equal r2 = 5:

              | 11m + 2 - 22m - 4 |
              ---------------------  =  5
                  sqrt(m^2 + 1)

              | -11m - 2 |  =  5 sqrt(m^2 + 1)

  STEP 5   Square both sides:

              (11m + 2)^2 = 25 (m^2 + 1)

              121 m^2 + 44 m + 4 = 25 m^2 + 25

               96 m^2 + 44 m - 21 = 0

           Discriminant = 44^2 + 4(96)(21) = 1936 + 8064 = 10000
                          sqrt(10000) = 100

                    -44 +- 100          56       7            -144        3
              m  =  ------------  =    ----  =  ----    or    ------ =  - ---
                       2(96)            192      24            192        4

  STEP 6   FIRST TANGENT   m = 7/24 :

              y + 4 = (7/24)(x - 22)
              24y + 96 = 7x - 154
              7x - 24y - 250 = 0

           SECOND TANGENT  m = -3/4 :

              y + 4 = (-3/4)(x - 22)
              4y + 16 = -3x + 66
              3x + 4y - 50 = 0

  STEP 7   CHECK  3x + 4y - 50 = 0
              from C1(-11,2):  |-33 + 8 - 50| / 5 = 75/5 = 15 = r1   OK
              from C2( 11,-2): | 33 - 8 - 50| / 5 = 25/5 =  5 = r2   OK

           CHECK  7x - 24y - 250 = 0
              from C1(-11,2):  |-77 - 48 - 250| / 25 = 375/25 = 15   OK
              from C2( 11,-2): | 77 + 48 - 250| / 25 = 125/25 =  5   OK

  ANSWER:   3x + 4y - 50 = 0    and    7x - 24y - 250 = 0
```

### WORKED EXAMPLE 9C — the transverse tangents to the same pair

```
  STEP 1   INTERNAL centre of similitude I divides C1C2 internally in 3 : 1:

              ( 3(11) + 1(-11)     3(-2) + 1(2) )     ( 22    -4 )
           I= ( ---------------- , ------------ )  =  ( ---- , -- )
              (      3 + 1              3 + 1   )     (  4     4 )

             = ( 11/2 , -1 )

  STEP 2   Line through (11/2, -1) with slope m:

              y + 1 = m(x - 11/2)

              m x - y - (11/2)m - 1 = 0

  STEP 3   Distance from C2(11, -2) = r2 = 5:

              | 11m + 2 - (11/2)m - 1 |          | (11/2)m + 1 |
              ------------------------- = 5  ->  --------------- = 5
                    sqrt(m^2 + 1)                 sqrt(m^2 + 1)

              ( (11/2)m + 1 )^2 = 25 (m^2 + 1)

              (121/4) m^2 + 11 m + 1 = 25 m^2 + 25

           multiply by 4:

              121 m^2 + 44 m + 4 = 100 m^2 + 100

               21 m^2 + 44 m - 96 = 0

           Discriminant = 44^2 + 4(21)(96) = 1936 + 8064 = 10000 , sqrt = 100

                    -44 +- 100         56      4              -144       24
              m  =  ------------  =   ----  =  ---    or      ------  = -----
                       2(21)           42       3               42        7
                                                                    (negative)
              m = 4/3    or    m = -24/7

  STEP 4   m = 4/3 :   y + 1 = (4/3)(x - 11/2)
                       3y + 3 = 4x - 22
                       4x - 3y - 25 = 0

           m = -24/7 : y + 1 = (-24/7)(x - 11/2)
                       7y + 7 = -24x + 132
                       24x + 7y - 125 = 0

  STEP 5   CHECK 4x - 3y - 25 = 0
               from C1(-11,2) : |-44 - 6 - 25|/5 = 75/5 = 15 = r1    OK
               from C2( 11,-2): | 44 + 6 - 25|/5 = 25/5 =  5 = r2    OK
           CHECK 24x + 7y - 125 = 0
               from C1(-11,2) : |-264 + 14 - 125|/25 = 375/25 = 15   OK
               from C2( 11,-2): | 264 - 14 - 125|/25 = 125/25 =  5   OK

  ANSWER:   4x - 3y - 25 = 0    and    24x + 7y - 125 = 0
```

```
  BONUS SANITY CHECK on the lengths:
     L1 (direct)     = sqrt(500 - (15-5)^2) = sqrt(500 - 100) = sqrt(400) = 20
     L2 (transverse) = sqrt(500 - (15+5)^2) = sqrt(500 - 400) = sqrt(100) = 10
```

### WORKED EXAMPLE 9D — circles that touch externally (3 tangents)
Find all the common tangents to `x^2 + y^2 = 1` and `x^2 + y^2 - 8x + 7 = 0`.

```
  C1 = (0, 0) , r1 = 1
  C2 = (4, 0) , r2 = sqrt(16 - 7) = 3
  d = 4 = 1 + 3     ->  TOUCH EXTERNALLY, so there are 3 common tangents.

  TANGENT AT THE POINT OF CONTACT = radical axis  S1 - S2 = 0 :

       (x^2 + y^2 - 1) - (x^2 + y^2 - 8x + 7) = 0
             8x - 8 = 0        ->     x = 1

  THE TWO DIRECT TANGENTS.
  E divides C1C2 externally in 1 : 3 :

       E = ( (1(4) - 3(0))/(1 - 3) , (1(0) - 3(0))/(1 - 3) )
         = ( 4/(-2) , 0 )
         = ( -2 , 0 )

  Line through (-2, 0):   y = m(x + 2)   ->   m x - y + 2m = 0

  Distance from C1(0,0) must be r1 = 1:

       | 2m | / sqrt(m^2 + 1) = 1
              4 m^2 = m^2 + 1
              3 m^2 = 1
                m = +- 1/sqrt(3)

  m =  1/sqrt(3) :  y = (x + 2)/sqrt(3)  ->  x - sqrt(3) y + 2 = 0
  m = -1/sqrt(3) :  y = -(x + 2)/sqrt(3) ->  x + sqrt(3) y + 2 = 0

  CHECK x - sqrt(3) y + 2 = 0 against circle 2:
      distance from (4,0) = |4 + 2| / sqrt(1 + 3) = 6/2 = 3 = r2      OK

  THE THREE COMMON TANGENTS:

       x = 1 ,     x - sqrt(3) y + 2 = 0 ,     x + sqrt(3) y + 2 = 0
```

> **TRAP:** Always test the vertical line separately. Writing `y - y0 = m(x - x0)`
> can never give you a vertical tangent, so if the answer is supposed to have
> three tangents and your quadratic only gives two, the missing one is vertical.

---

# TOPIC 10 — The FAMILY of circles through the intersection of two circles

## The idea

If a point lies on **both** circles, then S1 = 0 **and** S2 = 0 at that point.
So `S1 + k S2 = 0` is also 0 there — for **any** number k.

And `S1 + k S2 = 0` is still a circle (as long as k is not -1), because the
x^2 and y^2 coefficients stay equal:

```
   (1 + k) x^2 + (1 + k) y^2 + (2g1 + 2k g2) x + (2f1 + 2k f2) y + (c1 + k c2) = 0
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   FAMILY OF CIRCLES THROUGH THE INTERSECTION OF S1 = 0, S2 = 0   |
  |                                                                  |
  |             S1  +  k S2  =  0          (k not equal to -1)       |
  |                                                                  |
  |   k = -1 is banned because then the x^2 and y^2 terms vanish     |
  |   and you get the RADICAL AXIS (a straight line), not a circle.  |
  |                                                                  |
  |   One EXTRA condition is enough to pin down k.                   |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The other version — a circle and a LINE

If `S = 0` is a circle and `L = 0` is a line cutting it, then every circle
through the two crossing points is

```
  +------------------------------------------------------------------+
  |                                                                  |
  |             S  +  k L  =  0                                      |
  |                                                                  |
  |   (this one is often easier: the x^2, y^2 coefficients stay 1,   |
  |    so you can read off g, f, c directly)                         |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The extra conditions you will be given

| The words in the question | The equation you write |
|---|---|
| "and passes through the point (a, b)" | put (a, b) into S1 + k S2 and set it to 0 |
| "whose radius is R" | build g, f, c from the family, set g^2+f^2-c = R^2 |
| "whose centre lies on the line ax+by+c=0" | put the family's centre into that line |
| "which passes through the origin" | the constant term of the family = 0 |
| "whose diameter is the common chord" | the family's centre lies ON the radical axis |
| "which touches the x-axis" | g^2 = c for the family |

### WORKED EXAMPLE 10A — through a point (the easiest version)
Find the circle through the intersection of `x^2 + y^2 - 8x - 6y + 21 = 0` and
`x^2 + y^2 - 2x - 15 = 0` and through the point (1, 2).

```
  FAMILY:   S1 + k S2 = 0

  Put (1, 2) into each circle separately - much cleaner than expanding first.

     S1 at (1,2) = 1 + 4 - 8 - 12 + 21 = 6
     S2 at (1,2) = 1 + 4 - 2 - 15      = -12

  The point must lie on the family circle:

     6 + k(-12) = 0     ->     k = 1/2

  FAMILY with k = 1/2:

     (x^2 + y^2 - 8x - 6y + 21) + (1/2)(x^2 + y^2 - 2x - 15) = 0

  Multiply everything by 2:

     2x^2 + 2y^2 - 16x - 12y + 42  +  x^2 + y^2 - 2x - 15 = 0

     3x^2 + 3y^2 - 18x - 12y + 27 = 0

  Divide by 3:

     x^2 + y^2 - 6x - 4y + 9 = 0
```

```
  CHECK the point (1, 2) lies on it:
     1 + 4 - 6 - 8 + 9 = 0                              CORRECT
  It automatically passes through the intersection points, because at any
  such point S1 = 0 and S2 = 0, so S1 + (1/2) S2 = 0 too.
  (Centre (3,2), radius sqrt(9 + 4 - 9) = 2 - a real circle.)
```

### WORKED EXAMPLE 10B — with a given RADIUS (the hard 7-marker)
Find the circle through the intersection of `x^2 + y^2 - 2x - 4y - 4 = 0` and
`x^2 + y^2 - 10x - 12y + 40 = 0` whose radius is 4.

```
  STEP 1  Check the circles really intersect.
      C1 = (1,2)  , r1 = sqrt(1 + 4 + 4) = 3
      C2 = (5,6)  , r2 = sqrt(25 + 36 - 40) = sqrt(21) ~ 4.58
      d = sqrt(16 + 16) = sqrt(32) ~ 5.66
      |r1 - r2| ~ 1.58  <  5.66  <  r1 + r2 ~ 7.58     YES, two points.

  STEP 2  FAMILY:   S1 + k S2 = 0

     (1+k)x^2 + (1+k)y^2 + (-2 - 10k)x + (-4 - 12k)y + (-4 + 40k) = 0

  STEP 3  DIVIDE by (1 + k) to read off g, f, c:

              -(1 + 5k)              -(2 + 6k)            40k - 4
      g  =  -------------     f  =  -----------     c  =  ---------
               1 + k                  1 + k                1 + k

     (because  (-2 - 10k)/(1+k) = 2g  ->  g = (-1 - 5k)/(1+k)  etc.)

  STEP 4  Set g^2 + f^2 - c = r^2 = 16.  Write t = 1 + k for short.

      (1 + 5k)^2 + (2 + 6k)^2        40k - 4
      ------------------------  -    --------   =  16
              t^2                       t

     Multiply everything by t^2:

      (1 + 10k + 25k^2) + (4 + 24k + 36k^2) - (40k - 4)(1 + k) = 16 t^2

      61 k^2 + 34 k + 5  -  (40k^2 + 36k - 4)  =  16 (1 + k)^2

      21 k^2 - 2 k + 9  =  16 k^2 + 32 k + 16

       5 k^2 - 34 k - 7  =  0

     Discriminant = 34^2 + 4(5)(7) = 1156 + 140 = 1296 , sqrt(1296) = 36

               34 +- 36                     -2        1
        k  =  ----------   =   7      or    ----  =  ---
                  10                         10       -5

        k = 7      or     k = -1/5

  STEP 5  k = -1/5.   Use 5 S1 - S2 = 0 (multiply through by 5):

      5(x^2+y^2-2x-4y-4) - (x^2+y^2-10x-12y+40) = 0

      5x^2+5y^2-10x-20y-20 - x^2-y^2+10x+12y-40 = 0

      4x^2 + 4y^2 - 8y - 60 = 0

      x^2 + y^2 - 2y - 15 = 0

      CHECK: centre (0,1) , radius = sqrt(0 + 1 + 15) = sqrt(16) = 4   CORRECT

  STEP 6  k = 7.   S1 + 7 S2 = 0:

      8x^2 + 8y^2 + (-2 - 70)x + (-4 - 84)y + (-4 + 280) = 0

      8x^2 + 8y^2 - 72x - 88y + 276 = 0

      Divide by 4:   2x^2 + 2y^2 - 18x - 22y + 69 = 0

      CHECK: divide by 2 -> x^2+y^2-9x-11y+34.5 = 0
             g = -4.5 , f = -5.5 , c = 34.5
             r^2 = 20.25 + 30.25 - 34.5 = 16 , r = 4               CORRECT

  ANSWER:   x^2 + y^2 - 2y - 15 = 0     or     2x^2 + 2y^2 - 18x - 22y + 69 = 0
```

> **TRAP:** Quote **both** answers. A quadratic in k almost always has two roots,
> and both are genuine circles. Throwing one away costs you a mark.

### WORKED EXAMPLE 10C — a circle and a LINE, with the centre on a given line
Find the circle through the intersection of `x^2 + y^2 = 9` and `x + y = 3`
whose centre lies on the line `x + 2y = 3`.

```
  FAMILY:   S + k L = 0

     (x^2 + y^2 - 9) + k(x + y - 3) = 0

      x^2 + y^2 + k x + k y - 9 - 3k = 0

  Read off:   2g = k -> g = k/2 ;   2f = k -> f = k/2
  So the CENTRE is  ( -k/2 , -k/2 ).

  It must lie on x + 2y = 3:

      (-k/2) + 2(-k/2) = 3

           -k/2 - k = 3

           -(3k)/2 = 3

               k = -2

  THE CIRCLE:   x^2 + y^2 - 2x - 2y - 9 + 6 = 0

                x^2 + y^2 - 2x - 2y - 3 = 0
```

```
  CHECK.  The line x + y = 3 cuts x^2 + y^2 = 9 at (3, 0) and (0, 3).
     At (3,0):  9 + 0 - 6 - 0 - 3 = 0                    CORRECT
     At (0,3):  0 + 9 - 0 - 6 - 3 = 0                    CORRECT
     Centre (1, 1) , and 1 + 2(1) = 3                    CORRECT
     Radius = sqrt(1 + 1 + 3) = sqrt(5)
```

### WORKED EXAMPLE 10D — the common chord as a DIAMETER
Find the circle whose diameter is the common chord of
`x^2 + y^2 + 2x + 3y + 1 = 0` and `x^2 + y^2 + 4x + 3y + 2 = 0`.

```
  STEP 1  The common chord (radical axis):

     (2x + 3y + 1) - (4x + 3y + 2) = 0    ->    -2x - 1 = 0
                                          ->    2x + 1 = 0

  STEP 2  Every circle through the same two points can be written as
          S1 + L(lambda) = 0 with L = 2x + 1:

     x^2 + y^2 + 2x + 3y + 1 + lambda(2x + 1) = 0

     x^2 + y^2 + (2 + 2 lambda) x + 3y + (1 + lambda) = 0

     Centre = ( -(1 + lambda) , -3/2 )

  STEP 3  "The chord is a DIAMETER" means the CENTRE lies ON that chord:

     2( -(1 + lambda) ) + 1 = 0

          -2 - 2 lambda + 1 = 0

                   lambda = -1/2

  STEP 4  Substitute back:

     x^2 + y^2 + (2 - 1) x + 3y + (1 - 1/2) = 0

     x^2 + y^2 + x + 3y + 1/2 = 0

     2x^2 + 2y^2 + 2x + 6y + 1 = 0
```

```
  CHECK.  Centre = (-1/2, -3/2) which does lie on 2x + 1 = 0.   CORRECT
          Radius^2 = 1/4 + 9/4 - 1/2 = 2 , so r = sqrt(2).
          The chord x = -1/2 meets circle 1 where
             1/4 + y^2 - 1 + 3y + 1 = 0  ->  y^2 + 3y + 1/4 = 0
          and it meets the NEW circle where
             1/4 + y^2 - 1/2 + 3y + 1/2 = 0 -> y^2 + 3y + 1/4 = 0
          Identical - the same two points.                       CORRECT
```

---

# TOPIC 11 — Putting it all together: how to attack ANY two-circle question

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  THE UNIVERSAL OPENING MOVE (write this every single time)       |
  |                                                                  |
  |     1.  Divide so both circles start with x^2 + y^2.             |
  |     2.  Write down g1, f1, c1 and g2, f2, c2 in a little table.  |
  |     3.  C1, r1 , C2, r2 , d.                                     |
  |                                                                  |
  |  You now have every number the question can possibly want.       |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
   THE QUESTION SAYS ...                  ->   YOU DO ...

   "angle between the circles"            ->   cos(theta) formula
   "orthogonally" / "at right angles"     ->   2g1g2 + 2f1f2 = c1 + c2
   "radical axis"                         ->   S1 - S2 = 0
   "common chord"                         ->   S1 - S2 = 0
   "length of the common chord"           ->   S1-S2=0, then 2 sqrt(r^2 - p^2)
   "radical centre"                       ->   two radical axes, solve
   "orthogonal to three circles"          ->   centre = radical centre,
                                               radius = sqrt(S1 at it)
   "touch each other"                     ->   d = r1+r2  or  d = |r1-r2|
   "number of common tangents"            ->   the 4/3/2/1/0 table
   "length of the common tangent"         ->   sqrt(d^2 -+ (r1 -+ r2)^2)
   "equations of the common tangents"     ->   centre of similitude + slope
   "through the intersection of ..."      ->   S1 + k S2 = 0  or  S + k L = 0
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I DIVIDE every circle so that x^2 and y^2 have coefficient 1,
       before reading off g, f and c?

  [ ]  In the orthogonality condition, did I keep BOTH twos on the left?
            2 g1 g2 + 2 f1 f2 = c1 + c2      (not g1g2 + f1f2)

  [ ]  Did I substitute my value of k BACK into the condition to check it?

  [ ]  When I subtracted S1 - S2, did I change the sign of EVERY term
       inside the second bracket?

  [ ]  Did I state in words whether the line I found is the common chord,
       the common tangent, or "only the radical axis" (circles do not meet)?

  [ ]  For the length of a common chord: did I use the perpendicular
       distance p from the CENTRE to the chord, not the distance between
       the centres?

  [ ]  Did I cross-check the chord length using the OTHER circle?
       (Same answer both ways or something is wrong.)

  [ ]  For the position of two circles, did I compare d with BOTH
       r1 + r2 AND |r1 - r2|? One comparison is never enough.

  [ ]  Did I write the NUMBER of common tangents when asked (4/3/2/1/0),
       not just the position?

  [ ]  Direct tangent length uses (r1 - r2). Transverse uses (r1 + r2).
       Is my direct answer the LARGER one?

  [ ]  In the family S1 + k S2 = 0, did I remember k cannot be -1?

  [ ]  If the k-equation was a quadratic, did I give BOTH circles?

  [ ]  Did I check my final circle really passes through the required
       point by substituting it back?

  [ ]  Is my final radius a REAL number? (g^2 + f^2 - c must be > 0.)

  [ ]  Angles: did I give the ACUTE angle, and is it one of the
       friendly values 30, 45, 60, 90?

  [ ]  Did I draw a small rough sketch? Examiners give method marks
       for a correct diagram even when the algebra goes wrong.
```
