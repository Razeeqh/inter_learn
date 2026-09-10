# Circle — Concepts Explained Simply

Read one topic. Do its worked example with a pen. Then move to the next.
Nothing here assumes you remember anything from Class 10 or from Maths 1B.

The only two things you need from earlier classes are repeated here:

```
  DISTANCE between (x1,y1) and (x2,y2)
       =  sqrt( (x2 - x1)^2  +  (y2 - y1)^2 )

  PERPENDICULAR DISTANCE from the point (x1,y1) to the line ax + by + c = 0

              | a*x1 + b*y1 + c |
       =     ---------------------
                sqrt(a^2 + b^2)

       (the two straight bars mean "make it positive", i.e. modulus)
```

Write those two on the top of your rough sheet in the exam. Half this chapter is
just those two formulas used again and again.

---

# TOPIC 1 — What is a circle?

A circle is the set of all points in a plane that are at a **fixed distance** from
a **fixed point**.

- The fixed point is the **CENTRE**.
- The fixed distance is the **RADIUS**.

```
                       . . . . . .
                   . '             ' .
                 '                     '
                '                       '
               '          r             '
               '     C *---------* P    '     C = centre
               '                        '     P = any point on the circle
                '                      '      r = radius (the SAME for
                 '                    '           every point P)
                   ' .            . '
                       ' . . . . '
```

That one sentence produces every formula in this chapter. When you get stuck in an
exam, come back to it: **distance from the centre = radius**.

Some words you will meet:

| Word | Meaning | Picture |
|------|---------|---------|
| Radius | centre to any point on the circle | line C to P |
| Diameter | a chord passing through the centre; length 2r | longest chord |
| Chord | a line segment joining two points on the circle | AB below |
| Secant | a full LINE that cuts the circle at 2 points | the chord extended |
| Tangent | a line touching the circle at exactly 1 point | see Topic 12 |
| Normal | the line perpendicular to the tangent at the point of contact | always through C |

```
                    secant (cuts at 2 points)
                  ------A---------B--------
                     . '           ' .
                   '     the chord     '
                  '        AB           '
                 '                       '
                 '          * C          '
                 '                       '
                  '                     '
                   ' .               . '
       tangent  ------'-------------'-------   (touches at exactly 1 point)
                          . . . .
```

> **TRAP:** A "chord" is a piece of line INSIDE the circle. A "secant" is the whole
> infinite line. Boards use both words for the same question. Don't panic.

---

# TOPIC 2 — The standard equation of a circle

Let the centre be C(h, k) and the radius be r. Let P(x, y) be **any** point on the
circle. Then, by the definition:

```
          distance CP  =  r

     sqrt( (x - h)^2 + (y - k)^2 )  =  r

  square both sides:

     +-------------------------------------+
     |                                     |
     |    (x - h)^2  +  (y - k)^2  =  r^2  |     STANDARD FORM
     |                                     |     (centre-radius form)
     +-------------------------------------+
```

```
              y
              |
              |            . . . .
              |        . '        ' .
              |      '        r      '
              |     '   C(h,k)*-------* P(x,y)
              |     '                 '
              |      ' .           . '
              |          ' . . . '
              |
    ----------+--------------------------------- x
              |
```

## The special case: centre at the ORIGIN

Put h = 0 and k = 0:

```
     +-----------------------------+
     |                             |
     |     x^2  +  y^2  =  r^2     |     centre (0,0) , radius r
     |                             |
     +-----------------------------+
```

This is the version that appears in almost every competitive-exam question,
because it is the simplest.

### Worked example 2A
Find the equation of the circle with centre (-2, 3) and radius 4.

```
  h = -2 ,  k = 3 ,  r = 4

  (x - (-2))^2 + (y - 3)^2 = 4^2

  (x + 2)^2 + (y - 3)^2 = 16

  Expand if the question asks for the general form:

     x^2 + 4x + 4  +  y^2 - 6y + 9  =  16

     x^2 + y^2 + 4x - 6y + 13 - 16 = 0

     x^2 + y^2 + 4x - 6y - 3 = 0
```

### Worked example 2B
Find the equation of the circle with centre (1, 4) that passes through (-2, 8).

```
  STEP 1  The radius is the distance from the centre to that point.

     r = sqrt( (-2 - 1)^2 + (8 - 4)^2 )
       = sqrt( 9 + 16 )
       = sqrt(25)
       = 5

  STEP 2  Put centre and radius into the standard form.

     (x - 1)^2 + (y - 4)^2 = 25
```

> **TRAP:** The signs flip. Centre (-2, 3) gives (x + 2)^2 + (y - 3)^2.
> Students lose 2 marks every single year on this. The bracket has the
> OPPOSITE sign to the coordinate.

---

# TOPIC 3 — The GENERAL equation of a circle

Expand the standard form and see what shape it takes:

```
  (x - h)^2 + (y - k)^2 = r^2

  x^2 - 2hx + h^2 + y^2 - 2ky + k^2 - r^2 = 0

  x^2 + y^2 + (-2h)x + (-2k)y + (h^2 + k^2 - r^2) = 0
                \___/       \___/    \______________/
                 call        call        call
                 this 2g     this 2f     this c
```

So **every** circle can be written as:

```
  +----------------------------------------------------------+
  |                                                          |
  |        x^2  +  y^2  +  2gx  +  2fy  +  c  =  0           |
  |                                                          |
  |        CENTRE  =  ( -g , -f )                            |
  |                                                          |
  |        RADIUS  =  sqrt( g^2 + f^2 - c )                  |
  |                                                          |
  +----------------------------------------------------------+
```

## How to actually use it (do this every time)

```
  1.  Make sure the coefficient of x^2 is 1.
      If it says  3x^2 + 3y^2 + ... , DIVIDE THE WHOLE EQUATION BY 3 first.

  2.  Look at the x-term.  Its coefficient is 2g.  So g = (that number)/2.
  3.  Look at the y-term.  Its coefficient is 2f.  So f = (that number)/2.
  4.  The constant is c.  Take it WITH its sign.
  5.  Centre = (-g, -f).      Radius = sqrt(g^2 + f^2 - c).
```

## How do I know an equation IS a circle?

```
  +--------------------------------------------------+
  |  TEST 1   coefficient of x^2  =  coefficient of  |
  |           y^2   (and neither is zero)            |
  |                                                  |
  |  TEST 2   there is NO xy term                    |
  |                                                  |
  |  TEST 3   g^2 + f^2 - c  >  0                    |
  +--------------------------------------------------+
```

### Worked example 3A
Find the centre and radius of x^2 + y^2 - 4x + 6y - 12 = 0.

```
  Coefficient of x is -4  ->  2g = -4  ->  g = -2
  Coefficient of y is  6  ->  2f =  6  ->  f =  3
  Constant                ->  c = -12

  CENTRE  =  (-g, -f)  =  ( 2 , -3 )

  RADIUS  =  sqrt( g^2 + f^2 - c )
          =  sqrt( (-2)^2 + 3^2 - (-12) )
          =  sqrt( 4 + 9 + 12 )
          =  sqrt(25)
          =  5
```

### Worked example 3B (the "divide first" type — very commonly asked)
Find the centre and radius of 3x^2 + 3y^2 - 6x + 4y - 4 = 0.

```
  STEP 1  Divide EVERY term by 3:

     x^2 + y^2 - 2x + (4/3)y - 4/3 = 0

  STEP 2  2g = -2      ->  g = -1
          2f = 4/3     ->  f = 2/3
          c  = -4/3

  STEP 3  CENTRE = (-g, -f) = ( 1 , -2/3 )

  STEP 4  RADIUS = sqrt( 1 + 4/9 + 4/3 )

                          9     4     12          25
                 = sqrt( --- + --- + ---- ) = sqrt(----)
                          9     9      9            9

                 = 5/3
```

### Worked example 3C
Find the centre and radius of 2x^2 + 2y^2 - 4x + 6y - 3 = 0.

```
  Divide by 2:   x^2 + y^2 - 2x + 3y - 3/2 = 0

  g = -1 ,  f = 3/2 ,  c = -3/2

  Centre = ( 1 , -3/2 )

  Radius = sqrt( 1 + 9/4 + 3/2 )

                    4 + 9 + 6            19        sqrt(19)
         = sqrt( -------------- ) = sqrt(----) =  ----------
                       4                   4           2
```

> **TRAP:** If you forget to divide by the leading coefficient FIRST, every
> single number after that is wrong. Make dividing an automatic reflex:
> **see a 2 or a 3 in front of x^2 -> divide immediately.**

---

# TOPIC 4 — Real circle, point circle, imaginary circle

The radius is sqrt(g^2 + f^2 - c). A square root only makes sense if the inside
is not negative. So:

```
  +-----------------------------+------------------------------------------+
  |  g^2 + f^2 - c   >   0      |  REAL CIRCLE                              |
  |                             |  a proper circle you can draw             |
  +-----------------------------+------------------------------------------+
  |  g^2 + f^2 - c   =   0      |  POINT CIRCLE                             |
  |                             |  radius = 0. It is just the single point  |
  |                             |  (-g, -f) and nothing else.               |
  +-----------------------------+------------------------------------------+
  |  g^2 + f^2 - c   <   0      |  IMAGINARY CIRCLE                         |
  |                             |  no real points at all. Nothing is drawn. |
  +-----------------------------+------------------------------------------+
```

### Worked example 4A
Classify x^2 + y^2 - 6x + 4y + 13 = 0.

```
  g = -3 , f = 2 , c = 13

  g^2 + f^2 - c  =  9 + 4 - 13  =  0

  ->  POINT CIRCLE.  It is only the point (3, -2).
```

### Worked example 4B
Classify x^2 + y^2 + 2x - 4y + 10 = 0.

```
  g = 1 , f = -2 , c = 10

  g^2 + f^2 - c  =  1 + 4 - 10  =  -5   <  0

  ->  IMAGINARY circle. No real point satisfies this equation.
```

### Worked example 4C
Find the values of a for which x^2 + y^2 - 4x + 6y + a = 0 is a real circle.

```
  g = -2 , f = 3 , c = a

  Need  g^2 + f^2 - c > 0
        4 + 9 - a > 0
        13 > a
        a < 13
```

---

# TOPIC 5 — Circle when the ENDS OF A DIAMETER are given

If A(x1, y1) and B(x2, y2) are the two ends of a diameter, and P(x, y) is any
other point on the circle, then the angle APB is a **right angle**
(angle in a semicircle = 90 degrees).

```
                    . . . . .
                . '     P     ' .
              '        *        '
             '        / \        '
            '        /   \        '
            A*------*-----*-------*B
            '        centre        '
             '                    '
               ' .             . '
                   ' . . . . '
```

Two perpendicular lines have (slope of PA) x (slope of PB) = -1, and working that
out gives the beautifully short **diameter form**:

```
  +--------------------------------------------------------+
  |                                                        |
  |   (x - x1)(x - x2)  +  (y - y1)(y - y2)  =  0          |
  |                                                        |
  +--------------------------------------------------------+
```

Just write the x's together and the y's together. Nothing to memorise beyond that.

### Worked example 5A
Find the equation of the circle whose diameter has endpoints (1, 2) and (4, 6).

```
  (x - 1)(x - 4) + (y - 2)(y - 6) = 0

  x^2 - 5x + 4  +  y^2 - 8y + 12  =  0

  x^2 + y^2 - 5x - 8y + 16 = 0

  CHECK:  centre = (5/2 , 4)
          radius = sqrt(25/4 + 16 - 16) = 5/2

          length AB = sqrt(3^2 + 4^2) = 5 ,  half of it = 5/2   CORRECT
```

Also worth knowing (it saves time):

```
  Centre  =  MIDPOINT of the diameter  =  ( (x1+x2)/2 , (y1+y2)/2 )

  Radius  =  HALF the distance AB
```

---

# TOPIC 6 — Circle passing through THREE given points

This is a standard **7-mark** question. It is long but there is nothing clever in it.

```
  METHOD (fixed, every time)

  1.  Write  x^2 + y^2 + 2gx + 2fy + c = 0
  2.  Substitute the FIRST point   ->  equation (1)
  3.  Substitute the SECOND point  ->  equation (2)
  4.  Substitute the THIRD point   ->  equation (3)
  5.  Subtract to kill c, giving two equations in g and f only.
  6.  Solve for g and f, then go back and find c.
  7.  Write the final circle.
  8.  CHECK by putting one of the given points back in.
```

### Worked example 6A
Find the circle through (1, 2), (3, -4) and (5, -6).

```
  Let the circle be  x^2 + y^2 + 2gx + 2fy + c = 0

  (1, 2)   :  1 + 4 + 2g + 4f + c = 0     ->   2g + 4f + c = -5    ...(1)
  (3, -4)  :  9 + 16 + 6g - 8f + c = 0    ->   6g - 8f + c = -25   ...(2)
  (5, -6)  :  25 + 36 + 10g - 12f + c = 0 ->  10g - 12f + c = -61  ...(3)

  (2) - (1) :   4g - 12f  =  -20     ->   g - 3f = -5      ...(4)
  (3) - (2) :   4g -  4f  =  -36     ->   g -  f = -9      ...(5)

  (4) - (5) :      -2f    =   4      ->   f = -2

  Put f = -2 in (5) :   g + 2 = -9   ->   g = -11

  Put both in (1)   :   -22 - 8 + c = -5   ->   c = 25

  THE CIRCLE:      x^2 + y^2 - 22x - 4y + 25 = 0

  CHECK with (1,2):  1 + 4 - 22 - 8 + 25 = 0   CORRECT
  CHECK with (5,-6): 25 + 36 - 110 + 24 + 25 = 0  CORRECT

  Centre = (11, 2)   Radius = sqrt(121 + 4 - 25) = sqrt(100) = 10
```

> **TRAP:** Subtract equations in ORDER — (2)-(1) then (3)-(2). Students who
> subtract randomly get sign errors. Also, ALWAYS check at the end; it costs
> 20 seconds and it is the difference between 7 marks and 3.

---

# TOPIC 7 — Circles touching the axes

"Touching" means the distance from the centre to the axis is exactly the radius.

```
    TOUCHES THE x-AXIS              TOUCHES THE y-AXIS
                                        y
       y                                |
       |     . . .                      |    . . .
       |  . '     ' .                   | . '     ' .
       | '           '                  |'           '
       |'   *(h,k)    '   r = |k|      *|   *(h,k)   '   r = |h|
       | ' _ _ _ _ _ '                  |'           '
    ---+------*--------- x           ---+-'---------'------ x
       |    touches                     |   ' . . '
       |    here                        |  touches the
                                        |  y-axis here


         TOUCHES BOTH AXES
       y
       |
       |     . . .
       |  . '     ' .
       | '           '        r = |h| = |k|
      *|'   *(a,a)    '       centre is (a, a)
       | ' _ _ _ _ _ '        equation (x-a)^2 + (y-a)^2 = a^2
    ---+------*--------- x
       |
```

In terms of the general equation:

```
  +---------------------------------+---------------------------+
  |  TOUCHES THE x-AXIS             |     g^2  =  c             |
  +---------------------------------+---------------------------+
  |  TOUCHES THE y-AXIS             |     f^2  =  c             |
  +---------------------------------+---------------------------+
  |  TOUCHES BOTH AXES              |     g^2  =  f^2  =  c     |
  +---------------------------------+---------------------------+
  |  PASSES THROUGH THE ORIGIN      |     c  =  0               |
  +---------------------------------+---------------------------+
```

Why? Touching the x-axis means radius = |k| = |-f| = |f|.
So sqrt(g^2 + f^2 - c) = |f|, square both sides: g^2 + f^2 - c = f^2, so g^2 = c.

### Worked example 7A
Find the circle with centre (3, 4) that touches the x-axis.

```
  Touching the x-axis  ->  radius = |k| = 4

  (x - 3)^2 + (y - 4)^2 = 16

  x^2 - 6x + 9 + y^2 - 8y + 16 = 16

  x^2 + y^2 - 6x - 8y + 9 = 0

  CHECK the rule:  g = -3 , c = 9 ,  g^2 = 9 = c   CORRECT
```

### Worked example 7B
Find the circle with centre (3, 4) that touches the y-axis.

```
  Touching the y-axis  ->  radius = |h| = 3

  (x - 3)^2 + (y - 4)^2 = 9

  x^2 + y^2 - 6x - 8y + 16 = 0

  CHECK:  f = -4 , c = 16 ,  f^2 = 16 = c   CORRECT
```

### Worked example 7C
Find the circle of radius 3 lying in the first quadrant and touching both axes.

```
  Touching both axes in the FIRST quadrant  ->  centre = (3, 3)

  (x - 3)^2 + (y - 3)^2 = 9

  x^2 + y^2 - 6x - 6y + 9 = 0

  CHECK:  g^2 = 9 , f^2 = 9 , c = 9 .  All equal.   CORRECT
```

## Bonus: intercepts made on the axes

```
  Length of x-INTERCEPT  =  2 sqrt( g^2 - c )
  Length of y-INTERCEPT  =  2 sqrt( f^2 - c )
```

### Worked example 7D
What does x^2 + y^2 - 4x - 6y + 9 = 0 do to each axis?

```
  g = -2 , f = -3 , c = 9      centre (2, 3) , r = sqrt(4 + 9 - 9) = 2

  x-intercept = 2 sqrt(4 - 9)  ->  square root of a negative
                               ->  the circle does NOT meet the x-axis
      (check: distance from centre to x-axis is 3, and 3 > r = 2  CORRECT)

  y-intercept = 2 sqrt(9 - 9) = 0
                               ->  the circle TOUCHES the y-axis
      (check: distance from centre to y-axis is 2, and 2 = r  CORRECT)
```

---

# TOPIC 8 — Parametric equations of a circle

Instead of describing a point by (x, y), describe it by the **angle** it makes at
the centre. Call that angle theta.

```
                     . . . .
                 . '        ' .
               '       P       '
              '       /'        '
             '   r  /  |         '
             '    /    | r sin theta
             '  /theta |          '
             C *---------*        '
              '  r cos theta      '
               ' .             . '
                   ' . . . . '

     x  =  h  +  r cos(theta)
     y  =  k  +  r sin(theta)          0 <= theta < 360 degrees
```

```
  +-------------------------------------------------------------+
  |  Circle  (x-h)^2 + (y-k)^2 = r^2                            |
  |                                                             |
  |     x = h + r cos(theta)          y = k + r sin(theta)      |
  |                                                             |
  |  Circle  x^2 + y^2 = r^2   (centre at origin)               |
  |                                                             |
  |     x = r cos(theta)              y = r sin(theta)          |
  |                                                             |
  |  The point is written as  ( h + r cos t , k + r sin t )     |
  |  and is often just called "the point theta".                |
  +-------------------------------------------------------------+
```

Why does it work? Substitute back:

```
  (x - h)^2 + (y - k)^2  =  r^2 cos^2(t) + r^2 sin^2(t)
                         =  r^2 ( cos^2(t) + sin^2(t) )
                         =  r^2 x 1
                         =  r^2      TRUE for every t.
```

### Worked example 8A
Write the parametric equations of x^2 + y^2 - 4x - 6y - 3 = 0.

```
  g = -2 , f = -3 , c = -3

  Centre = (2, 3)
  Radius = sqrt(4 + 9 + 3) = sqrt(16) = 4

  x = 2 + 4 cos(theta)
  y = 3 + 4 sin(theta)
```

### Worked example 8B
Find the point on x^2 + y^2 = 4 at the parameter theta = 60 degrees.

```
  x = 2 cos 60 = 2 x (1/2) = 1
  y = 2 sin 60 = 2 x (sqrt(3)/2) = sqrt(3)

  The point is ( 1 , sqrt(3) ).

  CHECK:  1 + 3 = 4   CORRECT
```

---

# TOPIC 9 — Position of a POINT with respect to a circle (the number S1)

This is the most useful idea in the whole chapter. Define:

```
  +---------------------------------------------------------------+
  |                                                               |
  |   S   =  x^2  +  y^2  +  2gx  +  2fy  +  c      (the circle)  |
  |                                                               |
  |   S1  =  x1^2 + y1^2 + 2g*x1 + 2f*y1 + c                      |
  |                                                               |
  |         (just put the point (x1, y1) into the left side)      |
  |                                                               |
  +---------------------------------------------------------------+
```

Then read the SIGN:

```
  +-------------------+-----------------------------------------------+
  |   S1  <  0        |   the point is INSIDE the circle              |
  +-------------------+-----------------------------------------------+
  |   S1  =  0        |   the point is ON the circle                  |
  +-------------------+-----------------------------------------------+
  |   S1  >  0        |   the point is OUTSIDE the circle             |
  +-------------------+-----------------------------------------------+
```

Memory hook: **inside is negative, outside is positive.** The centre itself gives
the most negative value possible.

```
              . . . . . .
          . '              ' .
        '     S1 < 0 here     '
       '        (inside)       '
       '     *                 '        * on the ring:  S1 = 0
       '                       '
        '                     '
          ' .             . '
              ' . . . . '
                                *   S1 > 0 here (outside)
```

### Worked example 9A
Where is (2, 1) with respect to x^2 + y^2 - 2x + 4y - 4 = 0?

```
  S1 = (2)^2 + (1)^2 - 2(2) + 4(1) - 4
     = 4 + 1 - 4 + 4 - 4
     = 1        which is  > 0

  ->  the point lies OUTSIDE the circle.

  CHECK the long way:  centre (1, -2) , r = sqrt(1 + 4 + 4) = 3
                       distance = sqrt(1 + 9) = sqrt(10) = 3.16...
                       3.16 > 3   OUTSIDE   CORRECT
```

### Worked example 9B
Where is (1, 2) with respect to x^2 + y^2 - 4x - 6y - 3 = 0?

```
  S1 = 1 + 4 - 4(1) - 6(2) - 3
     = 1 + 4 - 4 - 12 - 3
     = -14      which is  < 0

  ->  INSIDE the circle.
```

> **TRAP:** Before using S1 you MUST have the coefficient of x^2 equal to 1.
> If the circle is 2x^2 + 2y^2 + ... , divide by 2 first. Otherwise the sign
> can still be right but the NUMBER (used for length of tangent) will be wrong.

---

# TOPIC 10 — Length of the tangent, and the power of a point

From a point P **outside** a circle you can draw exactly two tangents, and they
have the **same length**.

```
                             * P (x1, y1)
                            /|\
                           / | \
                          /  |  \       PA = PB = length of the tangent
                         /   |   \
                        A    |    B
                       .'    |    '.
                      '      |      '
                     '   d   |       '
                     '  *----+ C      '     angle CAP = 90 degrees
                     '   r                  (radius meets tangent at 90)
                      '                    '
                        ' . . . . . . '
```

In the right-angled triangle CAP, by Pythagoras: PA^2 = d^2 - r^2. Working that
out in coordinates gives exactly S1. So:

```
  +-------------------------------------------------------+
  |                                                       |
  |   LENGTH OF THE TANGENT from P(x1,y1)  =  sqrt( S1 )  |
  |                                                       |
  |   POWER OF THE POINT P                 =  S1          |
  |                                                       |
  +-------------------------------------------------------+
```

The **power of a point** is just the number S1 itself (positive outside, zero on,
negative inside). If any line through P cuts the circle at A and B, then
PA x PB = |S1| — that is what "power" really means.

### Worked example 10A
Find the length of the tangent from (1, 3) to x^2 + y^2 - 2x + 4y - 11 = 0.

```
  S1 = 1 + 9 - 2(1) + 4(3) - 11
     = 1 + 9 - 2 + 12 - 11
     = 9

  Length = sqrt(9) = 3

  CHECK the long way:
     centre (1, -2) , r = sqrt(1 + 4 + 11) = 4
     d = distance from (1,3) to (1,-2) = 5
     length = sqrt(d^2 - r^2) = sqrt(25 - 16) = sqrt(9) = 3   CORRECT
```

### Worked example 10B
Find the power of the point (5, -6) with respect to x^2 + y^2 + 8x + 12y + 15 = 0.

```
  S1 = 25 + 36 + 8(5) + 12(-6) + 15
     = 25 + 36 + 40 - 72 + 15
     = 44

  Power = 44 .  Since it is positive, the point is outside, and the
  tangent length from it is sqrt(44) = 2 sqrt(11).
```

> **TRAP:** If S1 comes out negative you CANNOT take its square root. That means
> the point is inside and **no tangent exists**. Write that sentence — it is the
> full answer and it earns the marks.

---

# TOPIC 11 — Position of a LINE with respect to a circle

Do not solve simultaneous equations. Just compare two numbers:

```
  d = perpendicular distance from the CENTRE to the LINE
  r = radius
```

```
  +--------------+------------------------+--------------------------------+
  |  d  <  r     |  the line CUTS it      |  SECANT — 2 common points      |
  +--------------+------------------------+--------------------------------+
  |  d  =  r     |  the line TOUCHES it   |  TANGENT — 1 common point      |
  +--------------+------------------------+--------------------------------+
  |  d  >  r     |  the line misses it    |  NO common point               |
  +--------------+------------------------+--------------------------------+
```

```
        d < r                d = r                  d > r
                                                     ______ line
     ----+-------              ------- line
        . . . .               . . . .              . . . .
     .'    |    '.          .'         '.        .'       '.
    '      |      '        '             '      '           '
   '   *---+ C     '      '   *---------o'     '   *---r---' d
    '  d   |       '       '  d = r      '      '            '  \
     '.    |     .'         '.         .'        '.        .'    line
        ' . . '                ' . . '              ' . . '     never
     SECANT                  TANGENT              reaches the circle
```

### Worked example 11A
Find the position of the line 3x + 4y - 25 = 0 with respect to x^2 + y^2 = 25.

```
  Centre = (0, 0) ,  r = 5

        | 3(0) + 4(0) - 25 |     25
  d  =  --------------------  =  ----  =  5
          sqrt(9 + 16)             5

  d = r  ->  the line is a TANGENT to the circle.
```

### Worked example 11B
Find the position of 3x + 4y = 20 with respect to x^2 + y^2 = 25.

```
        | 0 + 0 - 20 |     20
  d  =  --------------  =  ----  =  4
          sqrt(25)          5

  d = 4  <  r = 5   ->   the line CUTS the circle (a secant).
```

### Worked example 11C
Find k so that 3x + 4y = k touches x^2 + y^2 - 4x + 6y - 12 = 0.

```
  Centre = (2, -3) ,  r = sqrt(4 + 9 + 12) = 5

        | 3(2) + 4(-3) - k |     | 6 - 12 - k |     | -6 - k |
  d  =  --------------------  =  --------------  =  ----------
              sqrt(25)                  5                5

  Touching means d = r :

        | -6 - k | = 25

        -6 - k = 25    ->  k = -31
        -6 - k = -25   ->  k = 19

  ->  k = 19  or  k = -31
```

---

# TOPIC 12 — Condition for y = mx + c to touch a circle

For the circle **x^2 + y^2 = a^2** (centre origin, radius a), the line
y = mx + c can be written mx - y + c = 0, so

```
        | m(0) - 0 + c |          |c|
  d  =  ----------------  =  ---------------
         sqrt(m^2 + 1)        sqrt(1 + m^2)

  Set  d = a  and square:

  +-----------------------------------------------------------+
  |                                                           |
  |   TOUCHING CONDITION:      c^2  =  a^2 ( 1 + m^2 )        |
  |                                                           |
  |   equivalently             c  =  +/- a sqrt(1 + m^2)      |
  |                                                           |
  |   So the TANGENT IN SLOPE FORM is                         |
  |                                                           |
  |        y  =  mx  +/-  a sqrt(1 + m^2)                     |
  |                                                           |
  |   POINT OF CONTACT  =  ( -a^2 m / c  ,  a^2 / c )         |
  |                                                           |
  +-----------------------------------------------------------+
```

And for the general circle x^2 + y^2 + 2gx + 2fy + c = 0 with radius
r = sqrt(g^2 + f^2 - c), the tangent of slope m is

```
     y + f  =  m ( x + g )  +/-  r sqrt(1 + m^2)
```

(the centre (-g, -f) has simply been shifted in).

### Worked example 12A
Find k so that y = 2x + k touches x^2 + y^2 = 9.

```
  a = 3 , m = 2

  c^2 = a^2 (1 + m^2)
  k^2 = 9 (1 + 4) = 45

  k = +/- sqrt(45) = +/- 3 sqrt(5)
```

### Worked example 12B
Find the tangents to x^2 + y^2 = 16 that have slope 1.

```
  a = 4 , m = 1

  y = mx +/- a sqrt(1 + m^2)
  y = x  +/- 4 sqrt(2)

  Two tangents:   y = x + 4 sqrt(2)   and   y = x - 4 sqrt(2)
```

### Worked example 12C
Show that x + y + 1 = 0 touches x^2 + y^2 - 3x + 7y + 14 = 0 and find the point
of contact.

```
  Centre = (3/2 , -7/2) ,  r = sqrt(9/4 + 49/4 - 14) = sqrt(58/4 - 56/4)
                             = sqrt(2/4) = 1/sqrt(2)

         | 3/2 - 7/2 + 1 |       | -1 |          1
  d  =   -----------------   =   ------   =   --------
             sqrt(2)             sqrt(2)       sqrt(2)

  d = r   ->   IT TOUCHES.

  Point of contact = foot of the perpendicular from the centre to the line.
  The perpendicular through (3/2, -7/2) with slope +1 (since the line has
  slope -1) is:   y + 7/2 = 1 (x - 3/2)   ->   y = x - 5

  Solve with x + y + 1 = 0 :   x + (x - 5) + 1 = 0  ->  2x = 4  ->  x = 2
                               y = 2 - 5 = -3

  Point of contact = ( 2 , -3 )

  CHECK in the circle: 4 + 9 - 6 - 21 + 14 = 0   CORRECT
```

---

# TOPIC 13 — The TANGENT at a point ON the circle (T = 0)

Define the expression **T** by this simple recipe:

```
  Start from  S = x^2 + y^2 + 2gx + 2fy + c   and REPLACE:

       x^2   ->   x * x1              (mix them)
       y^2   ->   y * y1              (mix them)
       2x    ->   x + x1              (average them)
       2y    ->   y + y1              (average them)
       c     ->   c                   (leave it alone)

  +-------------------------------------------------------------------+
  |                                                                   |
  |   T  =  x*x1 + y*y1 + g(x + x1) + f(y + y1) + c                   |
  |                                                                   |
  |   TANGENT at the point (x1, y1) LYING ON the circle:   T = 0      |
  |                                                                   |
  +-------------------------------------------------------------------+
```

For the circle x^2 + y^2 = a^2 this collapses to the one-liner:

```
       TANGENT at (x1, y1)  :    x*x1  +  y*y1  =  a^2
```

### Worked example 13A
Find the tangent to x^2 + y^2 = 25 at the point (3, 4).

```
  First CHECK the point is on the circle:  9 + 16 = 25  YES

  Tangent:   x(3) + y(4) = 25     ->     3x + 4y = 25
```

### Worked example 13B
Find the tangent to x^2 + y^2 - 6x + 4y - 12 = 0 at the point (-1, 1).

```
  CHECK:  1 + 1 + 6 + 4 - 12 = 0   the point IS on the circle.

  Here  g = -3 , f = 2 , c = -12 ,  x1 = -1 , y1 = 1

  T = x(-1) + y(1) + (-3)(x + (-1)) + (2)(y + 1) + (-12)

    = -x + y - 3x + 3 + 2y + 2 - 12

    = -4x + 3y - 7

  Tangent:   -4x + 3y - 7 = 0    ->    4x - 3y + 7 = 0

  CHECK: distance from centre (3, -2) to this line

         | 12 + 6 + 7 |     25
       = --------------  =  ---- = 5  =  radius   CORRECT
           sqrt(16 + 9)      5
```

> **TRAP:** T = 0 is the tangent ONLY if the point is on the circle.
> Always verify S1 = 0 first, in one line. If S1 is not 0 the same
> expression means something else (see Topics 15 and 17).

---

# TOPIC 14 — The NORMAL

The **normal** at a point on the circle is the line perpendicular to the tangent
there. For a circle, the normal always passes through the **CENTRE**.

```
                          normal
                            |
                            |
                     . . . .|. .
                 . '        |    ' .
               '            |        '
              '      C *----+---* P   '
              '             |          '
               ' .          |       . '
                   ' . . . .|. . '
                            |
                 -----------+----------- tangent at P
```

```
  +----------------------------------------------------------------+
  |  NORMAL at P(x1, y1)  =  the line joining the CENTRE (-g,-f)   |
  |                          to the point P.                       |
  |                                                                |
  |  Equation:   (y1 + f)(x - x1)  -  (x1 + g)(y - y1)  =  0       |
  |                                                                |
  |  For x^2 + y^2 = a^2 the normal at (x1,y1) is                  |
  |            y1 * x  -  x1 * y  =  0    (a line through O)       |
  +----------------------------------------------------------------+
```

### Worked example 14A
Find the normal to x^2 + y^2 - 6x + 4y - 12 = 0 at (-1, 1).

```
  Centre = (3, -2).   The normal is the line through (3, -2) and (-1, 1).

                 1 - (-2)        3
  slope  =  ---------------  =  ----  =  -3/4
                -1 - 3           -4

  y - 1 = (-3/4)(x + 1)

  4y - 4 = -3x - 3

  3x + 4y - 1 = 0

  CHECK: centre (3,-2) gives 9 - 8 - 1 = 0   CORRECT (it passes through C)
  CHECK: the tangent there was 4x - 3y + 7 = 0 with slope 4/3;
         (4/3) x (-3/4) = -1   they are perpendicular   CORRECT
```

---

# TOPIC 15 — Pair of tangents from an external point (S S1 = T^2)

From an external point P(x1, y1) two tangents can be drawn. Their **combined
equation** (both lines in one equation) is:

```
  +------------------------------------------+
  |                                          |
  |         S  *  S1   =   T^2               |
  |                                          |
  +------------------------------------------+
```

```
                       * P(x1,y1)
                      / \
                     /   \      the pair of tangents is ONE
                    /     \     second-degree equation whose
                   /       \    graph is these two lines
                  A         B
                .'           '.
               '               '
               '      * C      '
                '             '
                  ' . . . . '
```

### Worked example 15A
Find the pair of tangents from the origin to x^2 + y^2 + 4x + 3 = 0.

```
  Here  g = 2 , f = 0 , c = 3 ,  and  (x1, y1) = (0, 0)

  Centre (-2, 0) ,  r = sqrt(4 + 0 - 3) = 1

  S1 = 0 + 0 + 4(0) + 0 + 3 = 3       (positive, so the origin is outside)

  T  = x(0) + y(0) + 2(x + 0) + 0(y + 0) + 3  =  2x + 3

  S S1 = T^2 :

     3 ( x^2 + y^2 + 4x + 3 )  =  (2x + 3)^2

     3x^2 + 3y^2 + 12x + 9     =  4x^2 + 12x + 9

     3y^2  =  x^2

     x^2 - 3y^2 = 0        ->    ( x - sqrt(3) y )( x + sqrt(3) y ) = 0

  So the two tangents are   x = sqrt(3) y   and   x = -sqrt(3) y ,
  i.e.  y = x / sqrt(3)  and  y = -x / sqrt(3).

  CHECK: a line y = mx from the origin touches when

         | -2m |
         ---------- = 1   ->   4m^2 = 1 + m^2   ->   m^2 = 1/3   CORRECT
       sqrt(1 + m^2)
```

---

# TOPIC 16 — Chord of contact

Draw the two tangents from an external point P. They touch the circle at A and B.
The chord **AB** is called the **chord of contact** of P.

```
                       * P(x1,y1)
                      / \
                     /   \
                    /     \
              -----A-------B-----   <-- CHORD OF CONTACT
                 .'         '.
                '             '
                '     * C     '
                 '           '
                   ' . . . '
```

```
  +---------------------------------------------------------+
  |   CHORD OF CONTACT of P(x1, y1)   :    T  =  0          |
  |                                                         |
  |   i.e.  x*x1 + y*y1 + g(x+x1) + f(y+y1) + c  =  0       |
  |                                                         |
  |   For x^2 + y^2 = a^2  :   x*x1 + y*y1 = a^2            |
  +---------------------------------------------------------+
```

**Yes — it is the exact same formula as the tangent.** The only difference is
where the point sits:

```
  (x1,y1) ON the circle (S1 = 0)      ->  T = 0 is the TANGENT there
  (x1,y1) OUTSIDE      (S1 > 0)       ->  T = 0 is the CHORD OF CONTACT
  (x1,y1) anywhere at all             ->  T = 0 is the POLAR (Topic 19)
```

### Worked example 16A
Find the chord of contact of (2, 3) with respect to x^2 + y^2 = 9.

```
  S1 = 4 + 9 - 9 = 4 > 0   ->   the point is outside.   Good.

  Chord of contact:  x(2) + y(3) = 9    ->    2x + 3y = 9
```

### Worked example 16B
Find the chord of contact of (5, 4) with respect to x^2 + y^2 - 4x - 2y - 5 = 0.

```
  S1 = 25 + 16 - 20 - 8 - 5 = 8 > 0   ->   outside.   Good.

  g = -2 , f = -1 , c = -5 ,  x1 = 5 , y1 = 4

  T = 5x + 4y - 2(x + 5) - 1(y + 4) - 5
    = 5x + 4y - 2x - 10 - y - 4 - 5
    = 3x + 3y - 19

  Chord of contact:   3x + 3y - 19 = 0
```

---

# TOPIC 17 — Chord with a given MIDPOINT (T = S1)

If you are told the **midpoint** M(x1, y1) of a chord, its equation is:

```
  +---------------------------------+
  |                                 |
  |          T   =   S1             |
  |                                 |
  +---------------------------------+
```

```
                . . . . .
            . '           ' .
          '                   '
         '     A              '
         '      \             '
         '       *M           '        CM is PERPENDICULAR to AB.
         '        \           '        That fact is what produces T = S1.
         '   C *---+           '
         '          \          '
          '          B        '
            ' .           . '
                ' . . . '
```

### Worked example 17A
Find the chord of x^2 + y^2 - 4x - 6y - 3 = 0 whose midpoint is (1, 2).

```
  First check the point is INSIDE (a midpoint must be):
     S1 = 1 + 4 - 4 - 12 - 3 = -14  < 0    GOOD

  g = -2 , f = -3 , c = -3 ,  x1 = 1 , y1 = 2

  T  =  x(1) + y(2) - 2(x + 1) - 3(y + 2) - 3
     =  x + 2y - 2x - 2 - 3y - 6 - 3
     =  -x - y - 11

  T = S1 :      -x - y - 11  =  -14

                -x - y + 3 = 0

                x + y = 3

  CHECK 1: does the midpoint lie on it?  1 + 2 = 3   YES
  CHECK 2: centre is (2,3); slope of CM = (3-2)/(2-1) = 1;
           slope of x + y = 3 is -1;  1 x (-1) = -1   PERPENDICULAR  CORRECT
```

### Worked example 17B
Find the chord of x^2 + y^2 = 25 with midpoint (1, 2).

```
  T = S1

  x(1) + y(2) - 25  =  1 + 4 - 25

  x + 2y - 25 = -20

  x + 2y = 5
```

---

# TOPIC 18 — Length of a chord

```
                         line (the chord)
              ----A---------------B----
                 .'\             /'.
                '   \    d      /   '
               '     \    r    /     '
               '      \   |   /      '
               '       \  |  /       '
               '        \ | /        '
               '          * C        '
                '                   '
                  ' . . . . . . . '

     Drop a perpendicular from C to the chord. It BISECTS the chord.
     Right triangle:  (half chord)^2 + d^2 = r^2
```

```
  +--------------------------------------------------------+
  |                                                        |
  |   LENGTH OF THE CHORD  =  2 sqrt( r^2  -  d^2 )        |
  |                                                        |
  |   d = perpendicular distance from the CENTRE to the    |
  |       line;  r = radius                                |
  |                                                        |
  |   If d = 0 the chord passes through the centre and     |
  |   the length is 2r — a DIAMETER (the longest chord).   |
  |                                                        |
  +--------------------------------------------------------+
```

### Worked example 18A
Find the length of the chord cut off by 3x + 4y = 20 on x^2 + y^2 = 25.

```
  Centre (0,0) ,  r = 5

        | 0 + 0 - 20 |     20
  d  =  --------------  =  ----  =  4
          sqrt(25)          5

  Length = 2 sqrt(25 - 16) = 2 sqrt(9) = 2 x 3 = 6
```

### Worked example 18B
Find the length of the chord cut off by 5x + 12y = 65 on x^2 + y^2 = 169.

```
  r = 13

        | -65 |     65
  d  =  --------- = ---- = 5
        sqrt(169)    13

  Length = 2 sqrt(169 - 25) = 2 sqrt(144) = 2 x 12 = 24
```

### Worked example 18C
Find the length of the chord cut off by 3x + 4y - 11 = 0 on
x^2 + y^2 - 2x - 4y - 20 = 0.

```
  Centre (1, 2) ,  r = sqrt(1 + 4 + 20) = 5

        | 3(1) + 4(2) - 11 |     | 3 + 8 - 11 |     0
  d  =  --------------------  =  --------------  =  --- = 0
              sqrt(25)                  5            5

  d = 0  ->  the line passes THROUGH the centre.

  Length = 2r = 10  (it is a diameter).
```

---

# TOPIC 19 — Pole, polar, conjugate points, conjugate lines

## The polar

Take **any** point P(x1, y1) — inside, outside, anywhere. The line

```
       T = 0      i.e.   x*x1 + y*y1 + g(x+x1) + f(y+y1) + c = 0
```

is called the **POLAR** of P, and P is called the **POLE** of that line.

```
  Where P is                     What the polar looks like
  ----------------------------   ---------------------------------------
  P is OUTSIDE the circle        the polar is the chord of contact of P
  P is ON the circle             the polar is the tangent at P
  P is INSIDE the circle         the polar is a line that misses the circle
  P is the centre                the polar does not exist (no such line)
```

```
        P outside                          P inside
            * P                          . . . . . .
           / \                       . '             ' .
          /   \                    '        * P        '
     ----A-----B----  polar        '                   '
       .'       '.                  '                 '
      '           '                   ' . . . . . . '
      '     * C   '            ----------------------------  polar
       '         '              (a line completely outside)
         ' . . '
```

## Pole of a given line

For **x^2 + y^2 = a^2**, the pole of the line l*x + m*y + n = 0 is

```
  +--------------------------------------------------+
  |                                                  |
  |     POLE  =  (  - a^2 * l / n  ,  - a^2 * m / n  )
  |                                                  |
  +--------------------------------------------------+
```

Easier practical method: compare coefficients.

### Worked example 19A
Find the polar of (3, -1) with respect to x^2 + y^2 - 2x + 4y - 4 = 0.

```
  g = -1 , f = 2 , c = -4 ,  x1 = 3 , y1 = -1

  T = 3x - y - 1(x + 3) + 2(y - 1) - 4
    = 3x - y - x - 3 + 2y - 2 - 4
    = 2x + y - 9

  POLAR:   2x + y - 9 = 0
```

### Worked example 19B
Find the pole of x + y - 5 = 0 with respect to x^2 + y^2 = 25.

```
  The polar of (x1, y1) is   x*x1 + y*y1 = 25 ,  i.e.  x*x1 + y*y1 - 25 = 0

  This must be the SAME line as  x + y - 5 = 0. Compare coefficients:

       x1       y1       -25
      ----  =  ----  =  ------  =  5
        1        1        -5

  So  x1 = 5  and  y1 = 5.

  POLE = ( 5 , 5 )
```

## Conjugate points

Two points P(x1,y1) and Q(x2,y2) are **conjugate** if the polar of P passes
through Q. (If that happens, the polar of Q automatically passes through P —
the relationship is symmetric.) The condition is:

```
  +-------------------------------------------------------------------+
  |  S12  =  x1*x2 + y1*y2 + g(x1 + x2) + f(y1 + y2) + c  =  0        |
  |                                                                   |
  |  For x^2 + y^2 = a^2  :     x1*x2 + y1*y2  =  a^2                 |
  +-------------------------------------------------------------------+
```

### Worked example 19C
Show that (1, 3) and (2, 3) are conjugate points with respect to x^2 + y^2 = 11.

```
  S12 = x1*x2 + y1*y2 - 11
      = (1)(2) + (3)(3) - 11
      = 2 + 9 - 11
      = 0                 ->  they ARE conjugate points.
```

## Conjugate lines

Two lines are **conjugate** if the pole of one lies on the other.

```
  +-------------------------------------------------------------------+
  |  For  x^2 + y^2 = a^2 , the lines                                 |
  |        l1*x + m1*y + n1 = 0   and   l2*x + m2*y + n2 = 0          |
  |  are conjugate when                                               |
  |                                                                   |
  |        a^2 ( l1*l2  +  m1*m2 )  =  n1 * n2                        |
  |                                                                   |
  |  For the general circle, with r^2 = g^2 + f^2 - c :               |
  |                                                                   |
  |    r^2 (l1*l2 + m1*m2) = (l1*(-g) + m1*(-f) + n1)                 |
  |                          x (l2*(-g) + m2*(-f) + n2)               |
  +-------------------------------------------------------------------+
```

### Worked example 19D
Show that x + y - 4 = 0 and x - y = 0 are conjugate lines w.r.t. x^2 + y^2 = 8.

```
  l1 = 1 , m1 = 1 , n1 = -4
  l2 = 1 , m2 = -1 , n2 = 0

  LHS  =  a^2 ( l1 l2 + m1 m2 )  =  8 ( 1(1) + 1(-1) )  =  8 (0)  =  0
  RHS  =  n1 n2  =  (-4)(0)  =  0

  LHS = RHS   ->   conjugate.

  CHECK:  pole of x + y - 4 = 0 w.r.t. x^2+y^2 = 8:
          x1/1 = y1/1 = -8/(-4) = 2  ->  pole is (2, 2)
          Does (2,2) lie on x - y = 0 ?   2 - 2 = 0   YES   CORRECT
```

---

# TOPIC 20 — Angle between two circles, and ORTHOGONAL circles

The **angle between two intersecting circles** is the angle between their tangents
at a point of intersection — which is the same as the angle between the two radii
drawn to that point.

```
                     P
                     *
                    /|\
                   / | \      angle between the circles = the angle
              r1  /  |  \ r2  between the two radii C1P and C2P
                 /   |   \
          C1 *---------------* C2
                     d

     By the cosine rule in triangle C1 P C2 :

                       d^2  -  r1^2  -  r2^2
        cos(theta)  =  ------------------------
                            2 * r1 * r2
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                     d^2  -  r1^2  -  r2^2                        |
  |     cos(theta)  =  -----------------------                       |
  |                          2 * r1 * r2                             |
  |                                                                  |
  |  (Some books write ( r1^2 + r2^2 - d^2 ) / (2 r1 r2), which is   |
  |   the SUPPLEMENT of this angle. Either way the ORTHOGONALITY     |
  |   condition below is identical, so it never affects the answer.) |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Orthogonal circles

"Orthogonal" means they cut at **90 degrees**. Then cos(theta) = 0, so the top of
the fraction is zero:

```
  +----------------------------------------------------------+
  |                                                          |
  |   ORTHOGONAL   <=>   d^2  =  r1^2  +  r2^2               |
  |                                                          |
  |   In general-equation language:                          |
  |                                                          |
  |        2*g1*g2  +  2*f1*f2   =   c1  +  c2               |
  |                                                          |
  +----------------------------------------------------------+
```

Derivation (worth knowing — it is a 2-mark "prove" question):

```
  d^2 = (g1 - g2)^2 + (f1 - f2)^2
  r1^2 + r2^2 = (g1^2 + f1^2 - c1) + (g2^2 + f2^2 - c2)

  Set them equal:

  g1^2 - 2g1g2 + g2^2 + f1^2 - 2f1f2 + f2^2
        = g1^2 + f1^2 - c1 + g2^2 + f2^2 - c2

  Cancel the squares:   -2g1g2 - 2f1f2 = -c1 - c2

                        2g1g2 + 2f1f2 = c1 + c2
```

### Worked example 20A
Show that x^2 + y^2 = 9 and x^2 + y^2 - 10x + 9 = 0 cut orthogonally.

```
  Circle 1:  g1 = 0 , f1 = 0 , c1 = -9      centre (0,0) , r1 = 3
  Circle 2:  g2 = -5 , f2 = 0 , c2 = 9      centre (5,0) , r2 = sqrt(25-9) = 4

  CONDITION:  2 g1 g2 + 2 f1 f2  =  2(0)(-5) + 2(0)(0)  =  0
              c1 + c2            =  -9 + 9              =  0

              LHS = RHS   ->   ORTHOGONAL.

  CHECK geometrically:  d = 5 ,  d^2 = 25 ,  r1^2 + r2^2 = 9 + 16 = 25
                        Equal.   CORRECT (a 3-4-5 right triangle)
```

### Worked example 20B
Show that x^2 + y^2 - 2x - 2y - 7 = 0 and 3x^2 + 3y^2 - 8x + 29y = 0 cut
orthogonally.

```
  First DIVIDE the second by 3:

     x^2 + y^2 - (8/3)x + (29/3)y = 0

  Circle 1:  g1 = -1   , f1 = -1    , c1 = -7
  Circle 2:  g2 = -4/3 , f2 = 29/6  , c2 = 0

  LHS = 2 g1 g2 + 2 f1 f2
      = 2(-1)(-4/3) + 2(-1)(29/6)

           8      29        8      29       -21
      =   ---  -  ----  =  ---  -  ---  =  -----  =  -7
           3       3        3       3         3

  RHS = c1 + c2 = -7 + 0 = -7

  LHS = RHS   ->   the circles cut ORTHOGONALLY.
```

### Worked example 20C
Find k so that x^2 + y^2 - 6x - 8y + 12 = 0 and x^2 + y^2 - 4x + 6y + k = 0
cut orthogonally.

```
  g1 = -3 , f1 = -4 , c1 = 12
  g2 = -2 , f2 =  3 , c2 = k

  2 g1 g2 + 2 f1 f2  =  c1 + c2

  2(-3)(-2) + 2(-4)(3)  =  12 + k

       12  -  24  =  12 + k

           -12    =  12 + k

             k    =  -24
```

> **TRAP:** You MUST divide by the leading coefficient before reading off
> g2, f2, c2. Example 20B is unsolvable if you skip that step.

---

# TOPIC 21 — Relative positions of TWO circles, and common tangents

Let d = distance between the centres, r1 and r2 the radii. Compare d with
r1 + r2 and with |r1 - r2|.

```
  +----------------------------+-------------------------+------------------+
  |  CONDITION                 |  POSITION               | COMMON TANGENTS  |
  +----------------------------+-------------------------+------------------+
  |  d  >  r1 + r2             |  each is outside the    |        4         |
  |                            |  other, no contact      |                  |
  +----------------------------+-------------------------+------------------+
  |  d  =  r1 + r2             |  touch EXTERNALLY       |        3         |
  +----------------------------+-------------------------+------------------+
  |  |r1 - r2| < d < r1 + r2   |  intersect at 2 points  |        2         |
  +----------------------------+-------------------------+------------------+
  |  d  =  |r1 - r2|           |  touch INTERNALLY       |        1         |
  +----------------------------+-------------------------+------------------+
  |  d  <  |r1 - r2|           |  one lies fully inside  |        0         |
  |                            |  the other              |                  |
  +----------------------------+-------------------------+------------------+
```

```
  4 TANGENTS (apart)             3 TANGENTS (touch outside)
   ___        ___                  ___   ___
  /   \      /   \                /   \ /   \
 | C1  |    | C2  |              | C1  X C2  |
  \___/      \___/                \___/ \___/
   2 direct + 2 transverse         2 direct + 1 at the contact point


  2 TANGENTS (cutting)          1 TANGENT (touch inside)     0 TANGENTS
     ___ ___                          ______                    ______
    /   X   \                        /  __  \                  /      \
   | C1 | C2 |                      | /C2\   |                | /--\   |
    \___X___/                       | \__/   |                | \__/   |
                                     \______/                  \______/
   2 direct only                    at the single               nothing
                                    contact point               touches
```

### Worked example 21A
Find the position of x^2 + y^2 - 4x - 6y - 12 = 0 and
x^2 + y^2 + 6x + 18y + 26 = 0, and the number of common tangents.

```
  CIRCLE 1:  centre C1 = (2, 3)    r1 = sqrt(4 + 9 + 12) = sqrt(25) = 5
  CIRCLE 2:  centre C2 = (-3, -9)  r2 = sqrt(9 + 81 - 26) = sqrt(64) = 8

  d = distance C1C2 = sqrt( (2 + 3)^2 + (3 + 9)^2 )
                    = sqrt( 25 + 144 )
                    = sqrt(169)
                    = 13

  r1 + r2 = 5 + 8 = 13

  d = r1 + r2   ->   the circles TOUCH EXTERNALLY.
                     Number of common tangents = 3
```

### Worked example 21B
Find the position of x^2 + y^2 - 2x - 4y - 20 = 0 and
x^2 + y^2 + 6x + 2y - 90 = 0.

```
  CIRCLE 1:  C1 = (1, 2)    r1 = sqrt(1 + 4 + 20) = 5
  CIRCLE 2:  C2 = (-3, -1)  r2 = sqrt(9 + 1 + 90) = sqrt(100) = 10

  d = sqrt( (1 + 3)^2 + (2 + 1)^2 ) = sqrt(16 + 9) = 5

  |r1 - r2| = |5 - 10| = 5

  d = |r1 - r2|   ->   they TOUCH INTERNALLY.
                       Number of common tangents = 1
```

---

# TOPIC 22 — Common chord and the RADICAL AXIS

Take two circles written with coefficient of x^2 equal to 1:

```
  S  =  x^2 + y^2 + 2*g1*x + 2*f1*y + c1  =  0
  S' =  x^2 + y^2 + 2*g2*x + 2*f2*y + c2  =  0
```

Subtract. The x^2 and y^2 disappear and you are left with a **straight line**:

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     S  -  S'  =  0                                                |
  |                                                                   |
  |     2(g1 - g2) x  +  2(f1 - f2) y  +  (c1 - c2)  =  0             |
  |                                                                   |
  |     This line is the RADICAL AXIS.                                |
  |                                                                   |
  |     If the circles intersect, it IS the COMMON CHORD.             |
  |     If they touch, it is the COMMON TANGENT at the contact point. |
  |     If they do not meet, it still exists as a line — the set of   |
  |     points with equal tangent lengths to both circles.            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

The radical axis is always **perpendicular to the line joining the two centres**.

```
                   |  radical axis (common chord)
              _____|_____
             /     |     \
            /   ___|___   \
      C1 * -----|---+---|----- * C2
            \   |___|___|   /
             \_____|_____/
                   |
```

**Radical centre:** three circles taken in pairs give three radical axes, and all
three pass through one common point called the radical centre.

### Worked example 22A
Find the common chord of x^2 + y^2 = 25 and x^2 + y^2 - 6x - 7 = 0, and its length.

```
  STEP 1  Both already have coefficient 1. Subtract:

     (x^2 + y^2 - 25)  -  (x^2 + y^2 - 6x - 7)  =  0

           -25 + 6x + 7 = 0

            6x - 18 = 0

               x = 3                <-- the common chord

  STEP 2  Length. Use circle 1: centre (0,0), r = 5.

     Perpendicular distance from (0,0) to the line x = 3  is  d = 3

     Length = 2 sqrt(r^2 - d^2) = 2 sqrt(25 - 9) = 2 sqrt(16) = 2 x 4 = 8

  CHECK with circle 2: centre (3,0), r = sqrt(9 + 7) = 4.
     Distance from (3,0) to x = 3 is 0, so the chord is a diameter of
     circle 2, length 2 x 4 = 8.   SAME ANSWER   CORRECT
```

### Worked example 22B
Find the radical axis of x^2 + y^2 + 2x + 3y + 1 = 0 and
x^2 + y^2 + 4x + 3y + 2 = 0.

```
  Subtract:

     (2x + 3y + 1) - (4x + 3y + 2) = 0

           -2x - 1 = 0

            2x + 1 = 0        <--  the radical axis
```

> **TRAP:** Before subtracting, both circles MUST have coefficient of x^2 = 1.
> If one is 2x^2 + 2y^2 + ... , divide it by 2 first. Otherwise the x^2 terms
> do not cancel and you get nonsense.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I DIVIDE by the coefficient of x^2 before reading g, f, c ?
  [ ]  Is my CENTRE (-g, -f) — did I flip BOTH signs ?
  [ ]  Did I take c WITH its own sign inside sqrt(g^2 + f^2 - c) ?
  [ ]  For (x - h)^2, did I use the OPPOSITE sign of the coordinate ?
  [ ]  Did I check S1 first, before calling T = 0 a "tangent" ?
  [ ]  Length of tangent = sqrt(S1). Did I remember the square ROOT ?
  [ ]  Chord length: did I use 2 sqrt(r^2 - d^2), not sqrt(r^2 - d^2) ?
  [ ]  Chord with a midpoint is T = S1 . Chord of contact is T = 0 .
       Did I use the right one ?
  [ ]  Orthogonality: 2g1g2 + 2f1f2 = c1 + c2 — did I keep BOTH 2's ?
  [ ]  Two circles: did I compare d with r1 + r2 AND with |r1 - r2| ?
  [ ]  Did I substitute my final answer back into the original data to
       check ?  (Takes 20 seconds. Saves 7 marks.)
```
