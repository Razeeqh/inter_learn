# The Plane — Concepts, From Zero

Read this with a pen. Every worked example is done in full — copy each one into your
notebook as you go. If a step confuses you, you have not lost anything: every topic here
is short, and the next one starts fresh.

---

# TOPIC 1 — WHAT A PLANE IS, AND WHY ONE EQUATION IS ENOUGH

## The everyday picture

A **plane** is a perfectly flat surface that never ends. A wall, a tabletop, a sheet of
glass — but stretched out for ever in every direction, with no edges and no thickness.

In 2D (Maths IB chapters 1-4) you worked on one flat page, and a *line* needed one equation
like `2x + 3y - 6 = 0`. Now we have moved into 3D space, where a point needs three numbers
`(x, y, z)`. In 3D:

```
   ONE equation of the first degree   ->  a PLANE      (a flat 2D surface in 3D)
   TWO equations together             ->  a LINE       (where two planes cross)
```

So `2x + 3y + 4z = 12` is a plane, not a line. Do not let the "looks like a line" feeling
mislead you.

## The general equation

```
  +---------------------------------------------------------------+
  |                                                               |
  |     GENERAL EQUATION OF A PLANE                               |
  |                                                               |
  |             a x  +  b y  +  c z  +  d  =  0                   |
  |                                                               |
  |     where a, b, c are NOT all zero.                           |
  |                                                               |
  +---------------------------------------------------------------+
```

Any first-degree equation in `x, y, z` is a plane. And every plane can be written this way.

## The single most important fact in the chapter

```
  +---------------------------------------------------------------+
  |                                                               |
  |   In  a x + b y + c z + d = 0,   the triple  ( a , b , c )    |
  |   is the set of DIRECTION RATIOS OF THE NORMAL to the plane.  |
  |                                                               |
  +---------------------------------------------------------------+
```

The **normal** is the arrow that sticks straight out of the plane, at 90 degrees to it —
like a flagpole standing on flat ground, or a nail hammered straight into a wall.

```
                        n = (a, b, c)
                            ^
                            |          <-- the NORMAL, perpendicular
                            |              to EVERY line in the plane
        ____________________|____________________
       /                                        /
      /            T H E   P L A N E           /
     /                                        /
    /________________________________________/
```

### Why is (a, b, c) the normal? (the one-line proof, worth knowing)

Take two points `A(x1,y1,z1)` and `B(x2,y2,z2)` both lying in the plane. Then

```
   a x1 + b y1 + c z1 + d = 0
   a x2 + b y2 + c z2 + d = 0
   ---------------------------  subtract
   a(x1 - x2) + b(y1 - y2) + c(z1 - z2) = 0
```

The left side is exactly the dot product of `(a, b, c)` with the direction `AB`, which lies
in the plane. Dot product zero means perpendicular. So `(a, b, c)` is perpendicular to
**every** direction lying in the plane — that is precisely what "normal" means.

> **TRAP:** `(a, b, c)` are NOT the coordinates of a point on the plane, and they are NOT
> the intercepts. Students lose 2 marks every year by answering "the point (2, 3, 4)" for
> the plane `2x + 3y + 4z = 12`. Test it: does `(2,3,4)` satisfy it? `4 + 9 + 16 = 29`,
> not 12. It is not even on the plane. It is the NORMAL.

## Direction cosines of the normal

Direction ratios `(a, b, c)` become direction cosines by dividing by the length:

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |    l = a / sqrt(a^2+b^2+c^2)                                    |
  |    m = b / sqrt(a^2+b^2+c^2)                                    |
  |    n = c / sqrt(a^2+b^2+c^2)         and  l^2 + m^2 + n^2 = 1   |
  |                                                                 |
  +-----------------------------------------------------------------+
```

### WORKED EXAMPLE 1.1
**Find the direction cosines of the normal to the plane `2x - 3y + 6z - 14 = 0`.**

```
  Normal direction ratios:  (2, -3, 6)

  Length = sqrt(2^2 + (-3)^2 + 6^2) = sqrt(4 + 9 + 36) = sqrt(49) = 7

  Direction cosines = ( 2/7 , -3/7 , 6/7 )

  CHECK:  (2/7)^2 + (-3/7)^2 + (6/7)^2 = (4 + 9 + 36)/49 = 49/49 = 1    correct
```

**Answer: `(2/7, -3/7, 6/7)`** (or the negatives — a normal has two opposite directions,
both are accepted).

### WORKED EXAMPLE 1.2
**Does the point `(1, 2, -1)` lie on the plane `3x - 2y + 5z + 6 = 0`?**

```
  Substitute:   3(1) - 2(2) + 5(-1) + 6
              = 3 - 4 - 5 + 6
              = 0                       YES, it lies on the plane.
```

---

# TOPIC 2 — THE PLANE THROUGH A GIVEN POINT WITH A GIVEN NORMAL

This is the workhorse. You will use it in half the questions of this chapter.

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   Plane through  P(x1, y1, z1)  with normal DRs (a, b, c):      |
  |                                                                 |
  |        a (x - x1)  +  b (y - y1)  +  c (z - z1)  =  0           |
  |                                                                 |
  |   Expanded:   a x + b y + c z  =  a x1 + b y1 + c z1            |
  |                                                                 |
  +-----------------------------------------------------------------+
```

Read it as: *"same left-hand side as the normal tells you; the right-hand side is just the
point plugged in."* That is the whole trick, and it is faster than expanding.

### WORKED EXAMPLE 2.1
**Find the equation of the plane through `(1, 2, -3)` which is perpendicular to the line
with direction ratios `(2, -1, 3)`.**

"Perpendicular to that line" means that line IS the normal. So `(a, b, c) = (2, -1, 3)`.

```
  2(x - 1) - 1(y - 2) + 3(z + 3) = 0
  2x - 2 - y + 2 + 3z + 9 = 0
  2x - y + 3z + 9 = 0

  CHECK the given point:  2(1) - (2) + 3(-3) + 9 = 2 - 2 - 9 + 9 = 0    correct
```

**Answer: `2x - y + 3z + 9 = 0`**

### WORKED EXAMPLE 2.2
**Find the plane through `(2, 3, 4)` parallel to the plane `5x - 6y + 7z = 3`.**

Parallel planes share the SAME normal. So keep `5x - 6y + 7z` and only change the constant:

```
  5x - 6y + 7z = 5(2) - 6(3) + 7(4)
               = 10 - 18 + 28
               = 20

  Plane:  5x - 6y + 7z = 20        i.e.   5x - 6y + 7z - 20 = 0

  CHECK:  5(2) - 6(3) + 7(4) - 20 = 20 - 20 = 0    correct
```

**Answer: `5x - 6y + 7z - 20 = 0`**

> **TRAP:** For a parallel plane, do NOT change `a, b, c`. Students sometimes "simplify"
> `5x - 6y + 7z = 20` into `x - y + z = 4`. That is a completely different plane
> (its normal is `(1,-1,1)`, not `(5,-6,7)`). Never divide unless every term divides.

### WORKED EXAMPLE 2.3 — the perpendicular bisector plane
**Find the plane that bisects the segment joining `A(1, 2, 3)` and `B(3, 2, 1)` at right
angles.**

```
  Midpoint M = ( (1+3)/2 , (2+2)/2 , (3+1)/2 ) = (2, 2, 2)

  Normal = direction AB = (3-1, 2-2, 1-3) = (2, 0, -2)  ->  simplify to (1, 0, -1)

  Plane:   1(x - 2) + 0(y - 2) - 1(z - 2) = 0
           x - 2 - z + 2 = 0
           x - z = 0

  CHECK distance to A:  |1 - 3| / sqrt(1+0+1) = 2/sqrt(2)
        distance to B:  |3 - 1| / sqrt(2)     = 2/sqrt(2)     equal    correct
```

**Answer: `x - z = 0`**

---

# TOPIC 3 — NORMAL FORM  lx + my + nz = p

## The idea

Stand at the origin. Walk in a straight line towards the plane, taking the shortest possible
route — that route is along the normal. Let the distance you walk be `p`, and let the
direction you walked be the unit vector `(l, m, n)`. Then the plane is exactly:

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |         NORMAL FORM :     l x  +  m y  +  n z  =  p             |
  |                                                                 |
  |   l, m, n  =  direction cosines of the normal  (l^2+m^2+n^2 = 1)|
  |   p        =  PERPENDICULAR DISTANCE FROM THE ORIGIN,  p >= 0   |
  |                                                                 |
  +-----------------------------------------------------------------+
```

```
                                          plane
                     O ------ p ------>  |
                  (origin)               |
                   direction (l,m,n)     |
                                         |
      p is the SHORTEST distance from O to the plane.
      "Shortest" always means "straight along the normal".
```

## Converting the general equation into normal form — the recipe

```
  STEP 1   Move the constant to the right so the equation reads
              a x + b y + c z  =  -d          (nothing on the right but a number)

  STEP 2   Compute  r = sqrt(a^2 + b^2 + c^2)

  STEP 3   Divide EVERY term by r, choosing the sign of r so that the
           right-hand side comes out POSITIVE.
           (If -d is negative, divide by -r instead of +r.)

  STEP 4   Read off:  l, m, n  from the left,   p  from the right.
```

### WORKED EXAMPLE 3.1
**Reduce `3x + 4y + 12z - 26 = 0` to normal form and find the distance of the plane from
the origin.**

```
  STEP 1   3x + 4y + 12z = 26                      (right side already positive)

  STEP 2   r = sqrt(9 + 16 + 144) = sqrt(169) = 13

  STEP 3   divide by 13:

               3        4        12         26
              --- x  + --- y  + ---- z  =  ----  = 2
               13       13       13         13

  STEP 4   l = 3/13 ,  m = 4/13 ,  n = 12/13 ,  p = 2

  CHECK:  (3/13)^2 + (4/13)^2 + (12/13)^2 = (9 + 16 + 144)/169 = 1     correct
```

**Answer: `(3/13)x + (4/13)y + (12/13)z = 2`; the plane is `2` units from the origin.**

### WORKED EXAMPLE 3.2 — when the sign has to flip
**Reduce `2x + 3y - 6z + 14 = 0` to normal form.**

```
  STEP 1   2x + 3y - 6z = -14                <-- RIGHT SIDE IS NEGATIVE

  STEP 2   r = sqrt(4 + 9 + 36) = sqrt(49) = 7

  STEP 3   Because the right side is negative, divide by  -7 :

              -2        -3         6          -14
             ---- x  + ---- y  +  --- z   =  ----- = 2
               7         7         7           -7

  STEP 4   l = -2/7 ,  m = -3/7 ,  n = 6/7 ,  p = 2

  CHECK:  (4 + 9 + 36)/49 = 1     correct.   And p = 2 > 0    correct
```

**Answer: `(-2/7)x + (-3/7)y + (6/7)z = 2`; distance from origin = `2`.**

> **TRAP:** `p` is a DISTANCE. It can never be negative. If you end up with a negative
> right-hand side you have used the wrong sign of the square root — flip every sign.

## The shortcut for "distance of the plane from the origin"

You do not always have to write the whole normal form:

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   Distance of the plane  a x + b y + c z + d = 0  from O :      |
  |                                                                 |
  |                        | d |                                    |
  |            p  =  --------------------                           |
  |                   sqrt(a^2+b^2+c^2)                             |
  |                                                                 |
  +-----------------------------------------------------------------+
```

Check on Example 3.1: `|-26| / 13 = 2`. Same answer, three seconds.

---

# TOPIC 4 — INTERCEPT FORM  x/a + y/b + z/c = 1

## What an intercept is

The **x-intercept** is where the plane cuts the x-axis. On the x-axis, `y = 0` and `z = 0`.
So to find it, set `y = 0, z = 0` and solve for `x`. Same idea for `y` and `z`.

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |          INTERCEPT FORM :     x/a  +  y/b  +  z/c  =  1         |
  |                                                                 |
  |   a = x-intercept ,  b = y-intercept ,  c = z-intercept         |
  |   The plane passes through (a,0,0), (0,b,0), (0,0,c).           |
  |                                                                 |
  +-----------------------------------------------------------------+
```

```
          z
          |
        c *
          | \
          |   \
          |     \             the shaded triangle is the piece of the
          |       \           plane cut off by the three axes
          |         * b ------ y
          |       /
        a *     /
        /
       x
```

## Converting a general plane into intercept form

```
  STEP 1   Move d to the right :   a x + b y + c z = -d
  STEP 2   Divide everything by (-d) so the right becomes 1
  STEP 3   Write each term as  x / (something)
```

### WORKED EXAMPLE 4.1
**Find the intercepts of the plane `2x + 3y + 4z = 12` and write it in intercept form.**

```
  Divide throughout by 12:

       2x     3y     4z              x       y       z
      ---- + ---- + ---- = 1   =>   ---  +  ---  +  ---  =  1
       12     12     12              6       4       3

  x-intercept a = 6      y-intercept b = 4      z-intercept c = 3

  CHECK by substitution:
      (6,0,0):  2(6) = 12       correct
      (0,4,0):  3(4) = 12       correct
      (0,0,3):  4(3) = 12       correct
```

**Answer: intercept form `x/6 + y/4 + z/3 = 1`; intercepts `6, 4, 3`.**

### WORKED EXAMPLE 4.2 — negative intercepts are fine
**Find the intercepts of `2x + 3y - 6z + 14 = 0`.**

```
  2x + 3y - 6z = -14 ,  divide by -14 :

       2x      3y      -6z            x           y          z
      ----- + ----- + ------ = 1 =>  ----  +  --------  +  ------  = 1
      -14     -14     -14            (-7)     (-14/3)      (7/3)

  a = -7 ,   b = -14/3 ,   c = 7/3

  CHECK:  (-7,0,0):   2(-7) + 14 = 0        correct
          (0,-14/3,0): 3(-14/3) + 14 = 0    correct
          (0,0,7/3):  -6(7/3) + 14 = 0      correct
```

### The hidden formula that shows up in EAPCET

If `p` is the perpendicular distance of the plane from the origin and the intercepts are
`a, b, c`, then:

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |         1        1        1        1                            |
  |       ----- =  ----- +  ----- +  -----                          |
  |        p^2      a^2      b^2      c^2                           |
  |                                                                 |
  +-----------------------------------------------------------------+
```

Check with `2x + 3y + 4z = 12`: intercepts `6, 4, 3`, so
`1/36 + 1/16 + 1/9 = (4 + 9 + 16)/144 = 29/144`.
And `p = 12/sqrt(4+9+16) = 12/sqrt(29)`, so `1/p^2 = 29/144`. **They match.**

Also worth knowing (pure EAPCET material):

```
  Volume of the tetrahedron formed by the plane x/a + y/b + z/c = 1
  and the three coordinate planes  =  | a b c | / 6
```

> **TRAP:** A plane like `2x + 3y = 6` has NO z-intercept (it never meets the z-axis — it is
> parallel to it). If a variable is missing, that intercept does not exist; say "infinite"
> or "does not meet the axis", do not write 0.

---

# TOPIC 5 — THE COORDINATE PLANES AND PLANES PARALLEL TO THEM

```
  +---------------------+---------------------+-------------------------+
  |  Plane              |  Equation           |  Normal is along        |
  +---------------------+---------------------+-------------------------+
  |  XOY plane (the     |      z = 0          |  z-axis   (0, 0, 1)     |
  |  "floor")           |                     |                         |
  |  YOZ plane          |      x = 0          |  x-axis   (1, 0, 0)     |
  |  ZOX plane          |      y = 0          |  y-axis   (0, 1, 0)     |
  +---------------------+---------------------+-------------------------+
  |  Parallel to XOY    |      z = k          |  z-axis                 |
  |  Parallel to YOZ    |      x = k          |  x-axis                 |
  |  Parallel to ZOX    |      y = k          |  y-axis                 |
  +---------------------+---------------------+-------------------------+
```

```
             z
             |            z = 3   (a ceiling 3 units up, parallel to the floor)
             |  ______________________
             | /                     /
           3 |/_____________________/
             |
             |          z = 0   (the floor itself, the XOY plane)
             |______________________________  y
            /
           /
          x
```

Useful related facts:

```
  A plane PARALLEL to the x-axis  has NO x term:   b y + c z + d = 0
  A plane PARALLEL to the y-axis  has NO y term:   a x + c z + d = 0
  A plane PARALLEL to the z-axis  has NO z term:   a x + b y + d = 0

  A plane THROUGH the origin has  d = 0:           a x + b y + c z = 0
```

### WORKED EXAMPLE 5.1
**Find the equation of the plane through `(2, -3, 5)` parallel to the ZOX plane.**

The ZOX plane is `y = 0`. A parallel plane is `y = k`. It passes through a point whose
y-coordinate is `-3`, so `k = -3`.

**Answer: `y = -3`, i.e. `y + 3 = 0`.**

### WORKED EXAMPLE 5.2
**What surface is `3x + 4y - 12 = 0` in 3D?**

There is no `z`. So `z` is free — for every `(x, y)` on the 2D line `3x + 4y = 12`, EVERY
value of `z` works. The result is a vertical wall standing on that line.

**Answer: a plane parallel to the z-axis (its normal `(3, 4, 0)` is perpendicular to the
z-direction `(0,0,1)`, since `3(0) + 4(0) + 0(1) = 0`).**

---

# TOPIC 6 — THE PLANE THROUGH THREE GIVEN POINTS

Three points that are not in a straight line fix exactly one plane. (This is why a
three-legged stool never wobbles but a four-legged one does.)

## The determinant form — learn this grid

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   Plane through  A(x1,y1,z1) ,  B(x2,y2,z2) ,  C(x3,y3,z3) :      |
  |                                                                   |
  |        | x - x1     y - y1     z - z1  |                          |
  |        |                               |                          |
  |        | x2 - x1    y2 - y1    z2 - z1 |   =   0                  |
  |        |                               |                          |
  |        | x3 - x1    y3 - y1    z3 - z1 |                          |
  |                                                                   |
  |   Row 1 : the moving point minus A                                |
  |   Row 2 : B minus A                                               |
  |   Row 3 : C minus A                                               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Why it works: rows 2 and 3 are two directions lying in the plane. Row 1 is a third
direction from A to a general point. If all three lie flat in one plane, the determinant
(the "box volume" they enclose) is zero.

## The safer, mark-friendly method (recommended for a weak student)

```
  STEP 1   v1 = B - A          (subtract, three numbers)
  STEP 2   v2 = C - A
  STEP 3   normal n = v1 x v2  (cross product - the 3x3 determinant with i, j, k)
  STEP 4   simplify n by dividing out any common factor
  STEP 5   plane :  n1(x - x1) + n2(y - y1) + n3(z - z1) = 0
  STEP 6   CHECK all three given points satisfy it
```

Both methods give the same equation. Step 6 is free marks insurance — always do it.

### WORKED EXAMPLE 6.1
**Find the plane through `A(1, 2, 3)`, `B(2, 3, 1)` and `C(3, 1, 2)`.**

```
  v1 = B - A = (1, 1, -2)
  v2 = C - A = (2, -1, -1)

  n = v1 x v2 :

        |  i    j    k  |
        |  1    1   -2  |
        |  2   -1   -1  |

    i-part =  (1)(-1) - (-2)(-1)  =  -1 - 2  = -3
    j-part = -[ (1)(-1) - (-2)(2) ] = -[ -1 + 4 ] = -3
    k-part =  (1)(-1) - (1)(2)   =  -1 - 2  = -3

    n = (-3, -3, -3)   ->  divide by -3  ->  (1, 1, 1)

  Plane:  1(x - 1) + 1(y - 2) + 1(z - 3) = 0
          x + y + z = 6

  CHECK:  A(1,2,3):  1 + 2 + 3 = 6    correct
          B(2,3,1):  2 + 3 + 1 = 6    correct
          C(3,1,2):  3 + 1 + 2 = 6    correct
```

**Answer: `x + y + z = 6`**

### WORKED EXAMPLE 6.2 — using the determinant grid directly
**Find the plane through `A(0, -1, -1)`, `B(4, 5, 1)`, `C(3, 9, 4)`.**

```
        | x - 0    y + 1    z + 1 |
        | 4 - 0    5 + 1    1 + 1 |   =   0
        | 3 - 0    9 + 1    4 + 1 |

        |  x     y+1    z+1 |
        |  4      6      2  |   =   0
        |  3     10      5  |

  Expand along the first row:

     x (6 x 5 - 2 x 10)  -  (y+1)(4 x 5 - 2 x 3)  +  (z+1)(4 x 10 - 6 x 3)  = 0
     x (30 - 20)         -  (y+1)(20 - 6)         +  (z+1)(40 - 18)         = 0
     10x  -  14(y+1)  +  22(z+1) = 0
     10x  -  14y - 14  +  22z + 22 = 0
     10x  -  14y  +  22z  +  8 = 0

  Divide by 2:      5x  -  7y  +  11z  +  4  =  0

  CHECK:  A(0,-1,-1):   0 + 7 - 11 + 4 = 0     correct
          B(4,5,1):    20 - 35 + 11 + 4 = 0    correct
          C(3,9,4):    15 - 63 + 44 + 4 = 0    correct
```

**Answer: `5x - 7y + 11z + 4 = 0`**

### WORKED EXAMPLE 6.3 — showing four points are COPLANAR
**Show that `(0,-1,0)`, `(2,1,-1)`, `(1,1,1)`, `(3,3,0)` are coplanar.**

Find the plane through the first three, then test the fourth.

```
  A = (0,-1,0) ,  v1 = (2, 2, -1) ,  v2 = (1, 2, 1)

  n = v1 x v2 :
     i-part =  (2)(1) - (-1)(2) =  2 + 2 =  4
     j-part = -[ (2)(1) - (-1)(1) ] = -[2 + 1] = -3
     k-part =  (2)(2) - (2)(1)  =  4 - 2 =  2
     n = (4, -3, 2)

  Plane:  4(x - 0) - 3(y + 1) + 2(z - 0) = 0
          4x - 3y + 2z - 3 = 0

  CHECK:  (0,-1,0):   0 + 3 + 0 - 3 = 0     correct
          (2,1,-1):   8 - 3 - 2 - 3 = 0     correct
          (1,1,1):    4 - 3 + 2 - 3 = 0     correct
          (3,3,0):   12 - 9 + 0 - 3 = 0     correct  <-- the fourth point too
```

**All four lie on `4x - 3y + 2z - 3 = 0`, so they are coplanar.**

> **TRAP:** If the three given points happen to be COLLINEAR, the cross product comes out
> `(0, 0, 0)` and the determinant is identically zero. There is then no unique plane —
> infinitely many planes contain a line. Say that; do not write "0 = 0" and stop.

---

# TOPIC 7 — DISTANCE FROM A POINT TO A PLANE

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   Distance from  P(x1, y1, z1)  to  a x + b y + c z + d = 0 :   |
  |                                                                 |
  |                  | a x1 + b y1 + c z1 + d |                     |
  |          D  =   ---------------------------                     |
  |                    sqrt(a^2 + b^2 + c^2)                        |
  |                                                                 |
  +-----------------------------------------------------------------+
```

Notice how similar this is to the 2D formula `|ax1 + by1 + c| / sqrt(a^2+b^2)` from
The Straight Line. It is literally the same formula with one extra letter. If you learned
that one, you already know this one.

```
             P (x1,y1,z1)
              *
              |
              | D   <-- straight down the normal, the shortest route
              |
   ___________*_______________  the plane
              F  (the FOOT of the perpendicular)
```

### WORKED EXAMPLE 7.1
**Find the distance from `(3, -2, 1)` to the plane `2x - y + 2z + 3 = 0`.**

```
  Numerator:   | 2(3) - (-2) + 2(1) + 3 |  =  | 6 + 2 + 2 + 3 |  =  13
  Denominator:  sqrt(4 + 1 + 4) = sqrt(9) = 3

  D = 13 / 3
```

**Answer: `13/3` units.**

### WORKED EXAMPLE 7.2
**Find the distance of the origin from `2x + 3y + 6z - 12 = 0`.**

```
  D = | 2(0) + 3(0) + 6(0) - 12 | / sqrt(4 + 9 + 36)
    = 12 / 7
```

**Answer: `12/7`.**

> **TRAP 1:** The plane MUST be in the form `= 0` before you plug in. If you are given
> `2x - y + 2z = 5`, first rewrite it as `2x - y + 2z - 5 = 0`. Forgetting the sign of the
> moved constant is the number one error here.

> **TRAP 2:** Never forget the modulus bars. A distance is never negative.

---

# TOPIC 8 — DISTANCE BETWEEN TWO PARALLEL PLANES

Two planes are parallel when their normals are proportional. Before measuring the gap you
must make the `x, y, z` parts **identical**, not merely proportional.

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   For   a x + b y + c z + d1 = 0                                |
  |    and  a x + b y + c z + d2 = 0    (SAME a, b, c) :            |
  |                                                                 |
  |                    | d1  -  d2 |                                |
  |          D  =   -----------------------                         |
  |                  sqrt(a^2 + b^2 + c^2)                          |
  |                                                                 |
  +-----------------------------------------------------------------+
```

### WORKED EXAMPLE 8.1
**Find the distance between `x + 2y - 2z + 1 = 0` and `2x + 4y - 4z + 5 = 0`.**

```
  The coefficients are NOT identical yet: (1,2,-2) and (2,4,-4).
  Divide the SECOND equation by 2:

        x + 2y - 2z + 5/2 = 0

  Now  d1 = 1 ,  d2 = 5/2 ,  and  sqrt(1 + 4 + 4) = 3

        D = | 1 - 5/2 | / 3  =  (3/2) / 3  =  1/2
```

**Answer: `1/2` unit.**

*Second check (always available):* pick any point on the first plane, say `(-1, 0, 0)`
(test: `-1 + 0 - 0 + 1 = 0`, yes). Distance from it to `2x + 4y - 4z + 5 = 0`:
`|2(-1) + 5| / sqrt(4+16+16) = 3/6 = 1/2`. **Matches.**

### WORKED EXAMPLE 8.2
**Find the distance between `2x - 3y + z = 5` and `2x - 3y + z = 7`.**

```
  Write as  2x - 3y + z - 5 = 0  and  2x - 3y + z - 7 = 0
  d1 = -5 , d2 = -7 ,  sqrt(4 + 9 + 1) = sqrt(14)

  D = | -5 - (-7) | / sqrt(14)  =  2 / sqrt(14)
```

**Answer: `2/sqrt(14)` units.**

> **TRAP:** If the coefficients are only proportional (like `1,2,-2` and `2,4,-4`) and you
> plug the constants straight in, you get a wrong answer. **Scale first, subtract second.**

---

# TOPIC 9 — ANGLE BETWEEN TWO PLANES

Two planes meet along a line and form an angle there. That angle is exactly the angle
between their **normals** — a fact you can see by looking end-on down the line of
intersection.

```
        n1  \      / n2
              \  /
               \/  theta
    ____________/\____________
       plane 1 /   \  plane 2
              /     \
```

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   Planes:   a1 x + b1 y + c1 z + d1 = 0                         |
  |             a2 x + b2 y + c2 z + d2 = 0                         |
  |                                                                 |
  |                    | a1 a2 + b1 b2 + c1 c2 |                    |
  |   cos(theta) = -------------------------------------------      |
  |                sqrt(a1^2+b1^2+c1^2) . sqrt(a2^2+b2^2+c2^2)      |
  |                                                                 |
  |   (the modulus gives the ACUTE angle - that is what is wanted)  |
  |                                                                 |
  |   PARALLEL:        a1/a2  =  b1/b2  =  c1/c2                    |
  |   PERPENDICULAR:   a1 a2 + b1 b2 + c1 c2  =  0                  |
  |                                                                 |
  +-----------------------------------------------------------------+
```

### WORKED EXAMPLE 9.1
**Find the angle between `2x - y + z = 6` and `x + y + 2z = 7`.**

```
  n1 = (2, -1, 1)     |n1| = sqrt(4 + 1 + 1) = sqrt(6)
  n2 = (1,  1, 2)     |n2| = sqrt(1 + 1 + 4) = sqrt(6)

  n1 . n2 = 2(1) + (-1)(1) + 1(2) = 2 - 1 + 2 = 3

  cos(theta) = 3 / (sqrt6 . sqrt6) = 3/6 = 1/2

  theta = 60 degrees
```

**Answer: `60` degrees (or `pi/3`).**

### WORKED EXAMPLE 9.2
**Find the angle between `x + 2y + 2z - 5 = 0` and `3x + 4y - 12z + 7 = 0`.**

```
  n1 = (1, 2, 2)      |n1| = sqrt(1 + 4 + 4) = 3
  n2 = (3, 4, -12)    |n2| = sqrt(9 + 16 + 144) = 13

  n1 . n2 = 3 + 8 - 24 = -13

  cos(theta) = | -13 | / (3 x 13) = 13/39 = 1/3

  theta = cos^-1 (1/3)
```

**Answer: `cos^-1(1/3)`, about `70` degrees 32 minutes.**

### WORKED EXAMPLE 9.3 — the "find k" question
**Find `k` so that `2x - 4y + 3z = 5` and `x + 2y + kz = 3` are perpendicular.**

```
  Perpendicular  =>  a1a2 + b1b2 + c1c2 = 0
                     2(1) + (-4)(2) + 3(k) = 0
                     2 - 8 + 3k = 0
                     3k = 6
                     k = 2

  CHECK:  2(1) + (-4)(2) + 3(2) = 2 - 8 + 6 = 0     correct
```

**Answer: `k = 2`.**

### WORKED EXAMPLE 9.4 — parallel check
**Are `2x - 3y + 4z = 5` and `4x - 6y + 8z = 11` parallel?**

```
  2/4 = 1/2 ,   -3/-6 = 1/2 ,   4/8 = 1/2      all equal  ->  PARALLEL

  Are they the SAME plane?  Constants:  5/11 is not 1/2  ->  different planes.
  So they are parallel and distinct.
```

> **TRAP:** If all four ratios match, including the constants, the two "planes" are the
> same plane written twice. Always check the constant before saying "parallel".

---

# TOPIC 10 — FOOT OF THE PERPENDICULAR, AND IMAGE OF A POINT

This is one recipe that answers two questions. Learn it once.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   Point P(x1,y1,z1) ,  plane  a x + b y + c z + d = 0             |
  |                                                                   |
  |   STEP 1:   compute      - ( a x1 + b y1 + c z1 + d )             |
  |                     k =  -----------------------------            |
  |                               a^2 + b^2 + c^2                     |
  |                                                                   |
  |   STEP 2:   FOOT  F  =  ( x1 + a k ,  y1 + b k ,  z1 + c k )      |
  |                                                                   |
  |   STEP 3:   IMAGE Q  =  ( x1 + 2ak , y1 + 2bk , z1 + 2ck )        |
  |                                                                   |
  |   (You travel k lots of the normal to reach the plane;            |
  |    travel the same again and you come out the other side.)        |
  |                                                                   |
  +-------------------------------------------------------------------+
```

```
             P *
               |
               | k
       ________*________   plane
               | F
               | k
             Q *          image (mirror reflection of P)

         F is the MIDPOINT of P and Q.  Use that as your check.
```

Equivalent line form, which some textbooks and examiners prefer:

```
     x - x1       y - y1       z - z1        - ( a x1 + b y1 + c z1 + d )
    --------  =  --------  =  --------  =  --------------------------------
        a            b            c                 a^2 + b^2 + c^2
```

### WORKED EXAMPLE 10.1
**Find the foot of the perpendicular and the image of `P(1, 3, 4)` in the plane
`2x - y + z + 3 = 0`.**

```
  a x1 + b y1 + c z1 + d = 2(1) - (3) + (4) + 3 = 2 - 3 + 4 + 3 = 6
  a^2 + b^2 + c^2 = 4 + 1 + 1 = 6

  k = -6 / 6 = -1

  FOOT  F = ( 1 + 2(-1) , 3 + (-1)(-1) , 4 + 1(-1) )
          = ( -1 , 4 , 3 )

  IMAGE Q = ( 1 + 2(2)(-1) , 3 + 2(-1)(-1) , 4 + 2(1)(-1) )
          = ( 1 - 4 , 3 + 2 , 4 - 2 )
          = ( -3 , 5 , 2 )

  CHECK 1  -  F must lie on the plane:
       2(-1) - 4 + 3 + 3 = -2 - 4 + 3 + 3 = 0        correct

  CHECK 2  -  F must be the midpoint of P and Q:
       ( (1 + -3)/2 , (3 + 5)/2 , (4 + 2)/2 ) = (-1, 4, 3) = F    correct

  CHECK 3  -  distance PF should equal the distance formula:
       PF = sqrt( (1+1)^2 + (3-4)^2 + (4-3)^2 ) = sqrt(4 + 1 + 1) = sqrt6
       formula: |6| / sqrt6 = sqrt6                   correct
```

**Answer: foot `(-1, 4, 3)`, image `(-3, 5, 2)`.**

### WORKED EXAMPLE 10.2 — foot of the perpendicular from the ORIGIN
**Find the foot of the perpendicular from the origin to `2x + 3y + 4z - 12 = 0`.**

```
  Plug in (0,0,0):  0 + 0 + 0 - 12 = -12
  a^2+b^2+c^2 = 4 + 9 + 16 = 29
  k = -(-12)/29 = 12/29

  F = ( 0 + 2(12/29) , 0 + 3(12/29) , 0 + 4(12/29) )
    = ( 24/29 , 36/29 , 48/29 )

  CHECK:  2(24/29) + 3(36/29) + 4(48/29) = (48 + 108 + 192)/29 = 348/29 = 12   correct
```

**Answer: `(24/29, 36/29, 48/29)`.**

> **TRAP:** For the IMAGE, the multiplier is `2k`, not `k`. Half the marks in this
> 4-mark question are lost by forgetting the 2. Your midpoint check catches it instantly.

---

# TOPIC 11 — LINE AND PLANE

## The set-up

A line is normally given as

```
     x - x1       y - y1       z - z1
    --------  =  --------  =  --------  =  t
        l            m            n
```

so its **direction** is `(l, m, n)` and it passes through `(x1, y1, z1)`.
A plane `a x + b y + c z + d = 0` has **normal** `(a, b, c)`.

Notice the mismatch that causes most errors:

```
   For a LINE   ->  (l, m, n) points ALONG the line.
   For a PLANE  ->  (a, b, c) points ACROSS the plane, at 90 degrees to it.
```

That is why the line-plane angle uses **sine** while the plane-plane angle uses **cosine**.

## Angle between a line and a plane

```
                n (normal)
                 ^
                 |   90 - theta
                 |  /
                 | /   line
                 |/
    _____________/________________  plane
                /  theta
```

If the angle between the line and the normal is `90 - theta`, then the angle between the
line and the plane is `theta`, and `cos(90 - theta) = sin(theta)`. Hence:

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |                     | a l  +  b m  +  c n |                     |
  |   sin(theta) = -------------------------------------------      |
  |                 sqrt(a^2+b^2+c^2) . sqrt(l^2+m^2+n^2)           |
  |                                                                 |
  |   LINE PARALLEL TO PLANE :   a l + b m + c n = 0                |
  |   LINE PERPENDICULAR TO PLANE : a/l = b/m = c/n                 |
  |                                                                 |
  |   LINE LIES IN THE PLANE :   a l + b m + c n = 0                |
  |                              AND (x1,y1,z1) satisfies the plane |
  |                                                                 |
  +-----------------------------------------------------------------+
```

### WORKED EXAMPLE 11.1
**Find the angle between the line `(x+1)/2 = y/3 = (z-3)/6` and the plane
`10x + 2y - 11z = 3`.**

```
  Line direction  (l,m,n) = (2, 3, 6)     length = sqrt(4 + 9 + 36) = 7
  Normal (a,b,c) = (10, 2, -11)           length = sqrt(100 + 4 + 121) = sqrt(225) = 15

  a l + b m + c n = 10(2) + 2(3) + (-11)(6) = 20 + 6 - 66 = -40

  sin(theta) = |−40| / (7 x 15) = 40/105 = 8/21

  theta = sin^-1 (8/21)
```

**Answer: `sin^-1(8/21)`, about `22` degrees.**

### WORKED EXAMPLE 11.2 — line PARALLEL to a plane
**Show that the line through `(4, 1, 0)` with direction `(1, 2, 2)` is parallel to the plane
`2x + y - 2z = 5`, and find the distance between them.**

```
  a l + b m + c n = 2(1) + 1(2) + (-2)(2) = 2 + 2 - 4 = 0     ->  PARALLEL to the plane

  Is the point on the plane?  2(4) + 1 - 0 = 9 , not 5.  So the line is OUTSIDE
  the plane, truly parallel (it does not lie in it).

  Distance = distance from (4,1,0) to  2x + y - 2z - 5 = 0
           = |8 + 1 - 0 - 5| / sqrt(4 + 1 + 4)
           = 4 / 3
```

**Answer: parallel; the gap is `4/3` units.**

### WORKED EXAMPLE 11.3 — line LIES IN a plane
**Show that the line `(x-1)/2 = (y-2)/3 = (z-3)/4` lies in the plane `x + 2y - 2z + 1 = 0`.**

```
  TEST 1 (direction perpendicular to the normal):
      a l + b m + c n = 1(2) + 2(3) + (-2)(4) = 2 + 6 - 8 = 0     correct

  TEST 2 (a point of the line is on the plane): take (1, 2, 3)
      1 + 2(2) - 2(3) + 1 = 1 + 4 - 6 + 1 = 0                     correct

  Both hold  ->  the line LIES IN the plane.
```

> **TRAP:** Test 1 alone only proves "parallel". Without Test 2 you cannot say "lies in".
> Examiners award the second mark for Test 2 specifically.

## Point of intersection of a line and a plane

```
  STEP 1   Set the line ratios equal to t and write
              x = x1 + l t ,  y = y1 + m t ,  z = z1 + n t
  STEP 2   Substitute all three into the plane equation.
  STEP 3   Solve the (single, linear) equation for t.
  STEP 4   Put t back into step 1 to get the point.
  STEP 5   CHECK the point satisfies the plane.
```

### WORKED EXAMPLE 11.4
**Find where the line `(x-2)/3 = (y+1)/4 = (z-2)/2` meets the plane `x - y + z = 6`.**

```
  STEP 1   x = 2 + 3t ,  y = -1 + 4t ,  z = 2 + 2t

  STEP 2   (2 + 3t) - (-1 + 4t) + (2 + 2t) = 6

  STEP 3   2 + 3t + 1 - 4t + 2 + 2t = 6
           5 + t = 6
           t = 1

  STEP 4   x = 2 + 3 = 5 ,  y = -1 + 4 = 3 ,  z = 2 + 2 = 4

  STEP 5   CHECK:  5 - 3 + 4 = 6      correct
```

**Answer: `(5, 3, 4)`.**

What if step 3 gives something impossible?

```
   t disappears and you get a FALSE statement (like 5 = 6)  ->  line is PARALLEL,
                                                                 never meets the plane
   t disappears and you get a TRUE statement  (like 6 = 6)  ->  line LIES IN the plane,
                                                                 infinitely many points
```

---

# TOPIC 12 — THE FAMILY OF PLANES  P1 + k P2 = 0

Two non-parallel planes cross along a line. Infinitely many planes contain that same line —
imagine a door swinging on its hinge. The hinge is the line of intersection; the door in
each position is one member of the family.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   If  P1 :  a1x + b1y + c1z + d1 = 0                              |
  |   and P2 :  a2x + b2y + c2z + d2 = 0                              |
  |                                                                   |
  |   then     P1  +  k P2  =  0                                      |
  |                                                                   |
  |   is a plane through their LINE of intersection, for every k.     |
  |   Use ONE extra condition to pin down k.                          |
  |                                                                   |
  +-------------------------------------------------------------------+
```

```
                    the line of intersection (the "hinge")
                              *
                             /|\
             P1  ___________/ | \___________ P2
                              |
                    every plane P1 + kP2 = 0 swings around this line
```

Common extra conditions and what they give you:

| Extra condition | What you do |
|---|---|
| passes through a given point | substitute the point, solve for k |
| parallel to a given plane | make the new normal proportional to that plane's normal |
| perpendicular to a given plane | new normal DOT that normal = 0 |
| passes through the origin | substitute (0,0,0) |

### WORKED EXAMPLE 12.1
**Find the plane through the line of intersection of `x + y + z = 6` and
`2x + 3y + 4z + 5 = 0` and passing through `(1, 1, 1)`.**

```
  Write both in "= 0" form:
      P1 = x + y + z - 6
      P2 = 2x + 3y + 4z + 5

  Family:   (x + y + z - 6) + k(2x + 3y + 4z + 5) = 0

  Put (1,1,1):   (1 + 1 + 1 - 6) + k(2 + 3 + 4 + 5) = 0
                 (-3) + 14k = 0
                 k = 3/14

  Substitute and multiply through by 14:

     14(x + y + z - 6) + 3(2x + 3y + 4z + 5) = 0
     14x + 14y + 14z - 84 + 6x + 9y + 12z + 15 = 0
     20x + 23y + 26z - 69 = 0

  CHECK (1,1,1):  20 + 23 + 26 - 69 = 69 - 69 = 0     correct
```

**Answer: `20x + 23y + 26z - 69 = 0`**

### WORKED EXAMPLE 12.2
**Find the plane through the intersection of `x + y + z = 1` and `2x + 3y - z + 4 = 0`
which is perpendicular to the plane `x - y + z = 0`.**

```
  Family:  (x + y + z - 1) + k(2x + 3y - z + 4) = 0

  Group the coefficients:
      x : 1 + 2k
      y : 1 + 3k
      z : 1 - k
      const : -1 + 4k

  Perpendicular to  x - y + z = 0   whose normal is (1, -1, 1):

      (1 + 2k)(1) + (1 + 3k)(-1) + (1 - k)(1) = 0
       1 + 2k - 1 - 3k + 1 - k = 0
       1 - 2k = 0
       k = 1/2

  Substitute k = 1/2 and multiply by 2:

      2(x + y + z - 1) + 1(2x + 3y - z + 4) = 0
      2x + 2y + 2z - 2 + 2x + 3y - z + 4 = 0
      4x + 5y + z + 2 = 0

  CHECK perpendicular:  (4)(1) + (5)(-1) + (1)(1) = 4 - 5 + 1 = 0     correct
```

**Answer: `4x + 5y + z + 2 = 0`**

> **TRAP:** The form `P1 + k P2 = 0` can never produce `P2` itself (you would need
> k = infinity). If a question's answer seems to be P2, state it separately. In board
> questions this almost never happens, so do not worry — just be aware.

---

# TOPIC 13 — WHICH SIDE OF A PLANE, AND THE RATIO A PLANE CUTS

## Same side or opposite sides?

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   Compute   S1 = a x1 + b y1 + c z1 + d    for point A          |
  |             S2 = a x2 + b y2 + c z2 + d    for point B          |
  |                                                                 |
  |   SAME sign      ->  A and B are on the SAME side               |
  |   OPPOSITE signs ->  A and B are on OPPOSITE sides              |
  |   Either is 0    ->  that point is ON the plane                 |
  |                                                                 |
  +-----------------------------------------------------------------+
```

Think of the plane as sea level: positive = above water, negative = below.

## The ratio in which a plane divides a segment

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   The plane  a x + b y + c z + d = 0  divides the segment       |
  |   joining A(x1,y1,z1) and B(x2,y2,z2) in the ratio              |
  |                                                                 |
  |            - S1  :  S2         (internally if positive)         |
  |                                                                 |
  |   where S1, S2 are the plane expression evaluated at A and B.   |
  |                                                                 |
  +-----------------------------------------------------------------+
```

If the ratio comes out **positive** the plane cuts the segment **internally** (the two points
are on opposite sides). If **negative**, the division is **external** (both on the same side,
so the plane misses the segment itself).

### WORKED EXAMPLE 13.1
**Find the ratio in which the plane `x + y + z = 0` divides the segment joining
`A(1, 2, 3)` and `B(-3, 4, -5)`. Also say which side of the plane each point is on.**

```
  S1 = 1 + 2 + 3 - 0 = 6        (positive)
  S2 = -3 + 4 - 5 - 0 = -4      (negative)

  Opposite signs  ->  A and B are on OPPOSITE sides, so the plane really does cut
  the segment.

  Ratio = -S1 : S2 = -(6) : (-4) = -6 : -4 = 3 : 2      (positive -> INTERNAL)

  CHECK by finding the actual dividing point (section formula, 3:2 from A to B):

     x = (3(-3) + 2(1)) / 5 = (-9 + 2)/5 = -7/5
     y = (3(4)  + 2(2)) / 5 = (12 + 4)/5 = 16/5
     z = (3(-5) + 2(3)) / 5 = (-15 + 6)/5 = -9/5

     Substitute into the plane:  -7/5 + 16/5 - 9/5 = 0/5 = 0     correct
```

**Answer: `3 : 2` internally; A and B are on opposite sides.**

### WORKED EXAMPLE 13.2
**Are `(1, 1, 1)` and `(3, 2, 1)` on the same side of `x + y - z - 1 = 0`?**

```
  S1 = 1 + 1 - 1 - 1 = 0        <-- (1,1,1) is ON the plane
  S2 = 3 + 2 - 1 - 1 = 3        positive
```

**Answer: `(1,1,1)` lies on the plane itself; `(3,2,1)` is on the positive side.**

---

# TOPIC 14 — PLANES BISECTING THE ANGLE BETWEEN TWO PLANES

A point on an angle-bisector plane is **equidistant** from both planes. Setting the two
distance formulas equal gives:

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    a1x + b1y + c1z + d1            a2x + b2y + c2z + d2           |
  |   ------------------------  =  +-  ------------------------       |
  |    sqrt(a1^2+b1^2+c1^2)            sqrt(a2^2+b2^2+c2^2)           |
  |                                                                   |
  |   The + sign and the - sign give the TWO bisector planes.         |
  |   They are perpendicular to each other.                           |
  |                                                                   |
  |   If you first make d1 and d2 BOTH POSITIVE, then the "+" sign    |
  |   gives the bisector of the angle CONTAINING THE ORIGIN.          |
  |                                                                   |
  +-------------------------------------------------------------------+
```

### WORKED EXAMPLE 14.1
**Find the planes bisecting the angles between `2x - y + 2z + 3 = 0` and
`3x - 2y + 6z + 8 = 0`. Which one bisects the angle containing the origin?**

```
  sqrt(4 + 1 + 4) = 3          sqrt(9 + 4 + 36) = 7
  Both constants (3 and 8) are already positive - good.

       2x - y + 2z + 3        3x - 2y + 6z + 8
      -----------------  = +- ------------------
              3                        7

  Cross-multiply:  7(2x - y + 2z + 3)  = +- 3(3x - 2y + 6z + 8)
                   14x - 7y + 14z + 21 = +- (9x - 6y + 18z + 24)

  With + :  14x - 7y + 14z + 21 - 9x + 6y - 18z - 24 = 0
            5x - y - 4z - 3 = 0                     <-- ORIGIN-CONTAINING bisector

  With - :  14x - 7y + 14z + 21 + 9x - 6y + 18z + 24 = 0
            23x - 13y + 32z + 45 = 0

  CHECK the first one - take a point on it, e.g. (3/5, 0, 0):
      distance to plane 1 = |2(3/5) - 0 + 0 + 3| / 3 = (1.2 + 3)/3 = 4.2/3 = 1.4
      distance to plane 2 = |3(3/5) - 0 + 0 + 8| / 7 = (1.8 + 8)/7 = 9.8/7 = 1.4
      EQUAL     correct

  CHECK the two bisectors are perpendicular:
      (5)(23) + (-1)(-13) + (-4)(32) = 115 + 13 - 128 = 0      correct
```

**Answer: `5x - y - 4z - 3 = 0` (contains the origin) and `23x - 13y + 32z + 45 = 0`.**

> This topic is on the edge of the IB syllabus — it appears in EAPCET-style objective
> questions more often than in the board paper. Learn the formula, do one example, move on.

---

# TOPIC 15 — TWO EXTRA PLANE CONSTRUCTIONS WORTH 4 MARKS

## (a) Plane through a point and perpendicular to TWO given planes

The new plane's normal must be perpendicular to **both** given normals, so it is their
**cross product**.

### WORKED EXAMPLE 15.1
**Find the plane through `(1, -1, 2)` perpendicular to `2x + 3y - 2z = 5` and
`x + 2y - 3z = 8`.**

```
  n = (2, 3, -2) x (1, 2, -3)

        |  i    j    k  |
        |  2    3   -2  |
        |  1    2   -3  |

    i-part =  (3)(-3) - (-2)(2)  = -9 + 4 = -5
    j-part = -[ (2)(-3) - (-2)(1) ] = -[-6 + 2] = 4
    k-part =  (2)(2) - (3)(1)   = 4 - 3 = 1

    n = (-5, 4, 1)

  Plane:  -5(x - 1) + 4(y + 1) + 1(z - 2) = 0
          -5x + 5 + 4y + 4 + z - 2 = 0
          -5x + 4y + z + 7 = 0
   i.e.    5x - 4y - z - 7 = 0

  CHECK point:  5(1) - 4(-1) - 2 - 7 = 5 + 4 - 2 - 7 = 0        correct
  CHECK perp 1: (5)(2) + (-4)(3) + (-1)(-2) = 10 - 12 + 2 = 0    correct
  CHECK perp 2: (5)(1) + (-4)(2) + (-1)(-3) = 5 - 8 + 3 = 0      correct
```

**Answer: `5x - 4y - z - 7 = 0`**

## (b) Plane through two points and perpendicular to a given plane

The normal is `(AB) x (normal of the given plane)`. Same technique.

### WORKED EXAMPLE 15.2
**Find the plane through `A(1, 0, -1)` and `B(3, 2, 2)` perpendicular to `x + y - z = 0`.**

```
  AB = (2, 2, 3)      given normal m = (1, 1, -1)

  n = AB x m :
    i-part =  (2)(-1) - (3)(1)  = -2 - 3 = -5
    j-part = -[ (2)(-1) - (3)(1) ] = -[-2 - 3] = 5
    k-part =  (2)(1) - (2)(1)   = 0

    n = (-5, 5, 0)  ->  divide by -5  ->  (1, -1, 0)

  Plane:  1(x - 1) - 1(y - 0) + 0 = 0
          x - y - 1 = 0

  CHECK A(1,0,-1):  1 - 0 - 1 = 0                     correct
  CHECK B(3,2,2):   3 - 2 - 1 = 0                     correct
  CHECK perpendicular: (1)(1) + (-1)(1) + (0)(-1) = 0 correct
```

**Answer: `x - y - 1 = 0`**

---

# THE FIVE MISTAKES THAT COST THE MOST MARKS

```
  1.  Reading (a, b, c) as a POINT instead of the NORMAL.
  2.  Using the distance formula without first writing the plane as "= 0".
  3.  Forgetting the modulus, and reporting a negative distance.
  4.  Using k instead of 2k for the IMAGE of a point.
  5.  Not scaling two parallel planes to identical coefficients before
      subtracting the constants.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Every plane equation I wrote is in the form  ax + by + cz + d = 0
       or  ax + by + cz = k , with no fractions left over where I could clear them.

  [ ]  Every point I was GIVEN has been substituted back into the plane I found,
       and it gave 0.

  [ ]  Every distance I wrote is POSITIVE and has "units" or is left as a surd
       (like 2/sqrt(14)) rather than a rounded decimal.

  [ ]  In the normal form  lx + my + nz = p  I checked  l^2 + m^2 + n^2 = 1
       and that  p  came out positive.

  [ ]  For angle questions I used cos for PLANE-to-PLANE and sin for LINE-to-PLANE.

  [ ]  For "lies in the plane" I wrote BOTH conditions, not just the dot product.

  [ ]  For an IMAGE question I used 2k, and I verified that the foot is the
       midpoint of the original point and the image.

  [ ]  For a plane through three points I verified all THREE points, not just one.

  [ ]  For a "find k" question I substituted k back and confirmed the condition.

  [ ]  I did not leave any 2-mark question blank. Even the normal's direction ratios
       written correctly earns a mark.
```
