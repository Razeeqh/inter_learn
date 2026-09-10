# Three Dimensional Coordinates — Formula Sheet

**Maths 1B · Chapter 5**

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what the exam actually tests.

There are only about **fifteen** formulas in this whole chapter, and eleven of them are
one line long. This is the shortest formula sheet in Maths IB.

---

# 1. THE FRAME — AXES, PLANES, OCTANTS

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   A point in space          P(x, y, z)                            |
  |   The origin                O(0, 0, 0)                            |
  |                                                                   |
  |   x - axis   :   y = 0  and  z = 0      points look like (a,0,0)  |
  |   y - axis   :   z = 0  and  x = 0      points look like (0,b,0)  |
  |   z - axis   :   x = 0  and  y = 0      points look like (0,0,c)  |
  |                                                                   |
  |   xy - plane :   z = 0                  points look like (a,b,0)  |
  |   yz - plane :   x = 0                  points look like (0,b,c)  |
  |   zx - plane :   y = 0                  points look like (a,0,c)  |
  |                                                                   |
  |   Planes PARALLEL to them:   z = c ,   x = a ,   y = b            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula / fact | When to use |
|---|---|
| xy-plane is `z = 0` | any "equation of the xy-plane" question |
| A point on the x-axis is `(a, 0, 0)` | "find the point on the x-axis such that ..." |
| A point in the xy-plane is `(a, b, 0)` | "find the point in the xy-plane such that ..." |
| Plane parallel to the xy-plane: `z = c` | link question into Chapter 7 |
| Distance between `z = c1` and `z = c2` is `|c1 - c2|` | parallel-plane distance |

## The octant sign table

```
  +----------+-----+-----+-----+
  |  OCTANT  |  x  |  y  |  z  |
  +----------+-----+-----+-----+
  |    I     |  +  |  +  |  +  |
  |   II     |  -  |  +  |  +  |
  |  III     |  -  |  -  |  +  |
  |   IV     |  +  |  -  |  +  |
  +----------+-----+-----+-----+
  |    V     |  +  |  +  |  -  |
  |   VI     |  -  |  +  |  -  |
  |  VII     |  -  |  -  |  -  |
  | VIII     |  +  |  -  |  -  |
  +----------+-----+-----+-----+

  FAST METHOD:
     read the (x, y) signs as a 2D quadrant number:
          (+,+) = 1     (-,+) = 2     (-,-) = 3     (+,-) = 4
     then if  z < 0 ,  ADD 4.
```

---

# 2. PROJECTIONS AND IMAGES OF P(x, y, z)

```
  +-------------------+---------------------+----------------------+
  |  ON / IN          |   PROJECTION        |   IMAGE (reflection) |
  |                   |   "make them ZERO"  |   "make them MINUS"  |
  +-------------------+---------------------+----------------------+
  |  x - axis         |   ( x,  0,  0)      |   ( x, -y, -z)       |
  |  y - axis         |   ( 0,  y,  0)      |   (-x,  y, -z)       |
  |  z - axis         |   ( 0,  0,  z)      |   (-x, -y,  z)       |
  +-------------------+---------------------+----------------------+
  |  xy - plane (z=0) |   ( x,  y,  0)      |   ( x,  y, -z)       |
  |  yz - plane (x=0) |   ( 0,  y,  z)      |   (-x,  y,  z)       |
  |  zx - plane (y=0) |   ( x,  0,  z)      |   ( x, -y,  z)       |
  +-------------------+---------------------+----------------------+
  |  the ORIGIN       |   ( 0,  0,  0)      |   (-x, -y, -z)       |
  +-------------------+---------------------+----------------------+
```

| Rule | When to use |
|---|---|
| PROJECTION → set the coordinates NOT named by the axis/plane to **0** | "find the projection / foot of the perpendicular / shadow" |
| IMAGE → flip the SIGN of the coordinates NOT named | "find the image / reflection / mirror image" |
| AXIS → one letter survives; PLANE → two letters survive | quick check that you picked the right row |
| The projection is the MIDPOINT of the point and its image | to verify your answer in 5 seconds |

---

# 3. DISTANCES OF A SINGLE POINT

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   From the ORIGIN        OP = sqrt( x^2 + y^2 + z^2 )             |
  |                                                                   |
  |   From the  x - AXIS         =  sqrt( y^2 + z^2 )                 |
  |   From the  y - AXIS         =  sqrt( z^2 + x^2 )                 |
  |   From the  z - AXIS         =  sqrt( x^2 + y^2 )                 |
  |                                                                   |
  |   From the  xy - PLANE       =  |z|                               |
  |   From the  yz - PLANE       =  |x|                               |
  |   From the  zx - PLANE       =  |y|                               |
  |                                                                   |
  +-------------------------------------------------------------------+

  THE TWO OPPOSITE RULES - do not mix them up:

      AXIS   ->  THROW AWAY the letter named in the axis, keep the other two.
      PLANE  ->  KEEP ONLY the letter that is MISSING from the plane's name.

  SELF-CHECK that always works:

      (distance from the x-axis)^2  +  x^2   =   OP^2
```

| Formula | When to use |
|---|---|
| `OP = sqrt(x^2 + y^2 + z^2)` | "distance of P from the origin" — a 2-mark gift |
| `sqrt(y^2 + z^2)` | "distance of P from the x-axis" |
| `|z|` | "distance of P from the xy-plane" |
| `|z|` again | "height of P above the xy-plane" (same thing) |

---

# 4. THE DISTANCE FORMULA

```
  +===================================================================+
  |                                                                   |
  |   A(x1, y1, z1)   B(x2, y2, z2)                                   |
  |                                                                   |
  |   AB = sqrt( (x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2 )            |
  |                                                                   |
  |   AB^2 = (x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2                  |
  |          <- use the SQUARED version whenever you can. It kills    |
  |             all the surds and all the sign errors.                |
  |                                                                   |
  +===================================================================+
```

| Use it for | What you write |
|---|---|
| plain "find the distance AB" | one line, then simplify the surd |
| find an unknown coordinate | set `AB^2 = (given)^2`, solve the quadratic — expect **two** answers |
| collinearity | three distances, then `small + middle = big` |
| type of triangle | three SQUARED distances, then the table in section 5 |
| type of quadrilateral | four sides + two diagonals, all SQUARED |
| equidistant point / locus | `PA^2 = PB^2`, the squares cancel, a LINEAR equation is left |

---

# 5. WHAT THREE OR FOUR POINTS MAKE

```
  +----------------------------------------+--------------------------------+
  |  CONDITION (all lengths SQUARED)       |  CONCLUSION                    |
  +----------------------------------------+--------------------------------+
  |  small + middle = big  (NOT squared)   |  COLLINEAR - no triangle       |
  |  AB^2 = BC^2 = CA^2                    |  EQUILATERAL                   |
  |  exactly two equal                     |  ISOSCELES                     |
  |  a^2 + b^2 = c^2                       |  RIGHT ANGLED at the vertex    |
  |                                        |  where a and b MEET            |
  |  two equal AND Pythagoras holds        |  RIGHT ANGLED ISOSCELES        |
  +----------------------------------------+--------------------------------+
  |  FOUR points, taken in order A B C D :                                  |
  +----------------------------------------+--------------------------------+
  |  midpoint AC = midpoint BD             |  PARALLELOGRAM (also proves    |
  |                                        |  the 4 points are COPLANAR)    |
  |  4 sides equal, diagonals UNequal      |  RHOMBUS                       |
  |  4 sides equal, diagonals EQUAL        |  SQUARE                        |
  |  opposite sides equal, diagonals equal |  RECTANGLE                     |
  +----------------------------------------+--------------------------------+

  For a SQUARE there is a bonus check:   diagonal^2 = 2 x side^2
  For a RECTANGLE:                        diagonal^2 = sum of two adjacent sides^2
```

---

# 6. THE SECTION FORMULA

```
  +===================================================================+
  |                                                                   |
  |   P divides AB in the ratio  m : n                                |
  |                                                                   |
  |   INTERNALLY                                                      |
  |                                                                   |
  |          m x2 + n x1       m y2 + n y1       m z2 + n z1          |
  |     P = (----------- ,     ----------- ,     -----------)         |
  |             m + n             m + n             m + n             |
  |                                                                   |
  |   EXTERNALLY  (every + becomes a -)                               |
  |                                                                   |
  |          m x2 - n x1       m y2 - n y1       m z2 - n z1          |
  |     P = (----------- ,     ----------- ,     -----------)         |
  |             m - n             m - n             m - n             |
  |                                                                   |
  |   MIDPOINT   (m = n = 1)                                          |
  |                                                                   |
  |          x1 + x2       y1 + y2       z1 + z2                      |
  |     M = (------- ,     ------- ,     -------)                     |
  |             2             2             2                         |
  |                                                                   |
  +===================================================================+

  MEMORY:   " m goes with the SECOND point, n goes with the FIRST. "
            m2 + n1.   They CROSS OVER.

  SHORTCUT: external m : n  =  internal  m : (-n).
            So you only ever need ONE formula plus a minus sign.
```

| Formula | When to use |
|---|---|
| internal `m:n` | "find the point dividing AB in the ratio 2:3" |
| external `m:n` | the word "externally" appears, or the ratio comes out negative |
| midpoint | "find the midpoint", or to prove a parallelogram, or to prove B is between A and C |
| `k : 1` form, solve for `k` from the x-coordinate | "in what ratio does P divide AB?" — then VERIFY in y and z |
| `k > 0` internal, `k < 0` external | you MUST state which one; it carries a mark |

## Which ratio does a coordinate plane cut AB in?

```
  +===================================================================+
  |                                                                   |
  |   yz - plane  (x = 0)   divides AB in the ratio   -x1 : x2        |
  |   zx - plane  (y = 0)   divides AB in the ratio   -y1 : y2        |
  |   xy - plane  (z = 0)   divides AB in the ratio   -z1 : z2        |
  |                                                                   |
  |   " MINUS the FIRST, colon, the SECOND "                          |
  |   using the coordinate that the plane sets to zero.               |
  |                                                                   |
  |   Ratio comes out POSITIVE  ->  INTERNAL (A, B on opposite sides) |
  |   Ratio comes out NEGATIVE  ->  EXTERNAL (A, B on the same side)  |
  |                                                                   |
  +===================================================================+
```

| Formula | When to use |
|---|---|
| `-x1 : x2` | "in what ratio does the yz-plane divide AB?" |
| `-z1 : z2` | "in what ratio does the xy-plane divide AB?" |
| after finding the ratio, plug back into the section formula | "...and find the point of intersection" |

---

# 7. CENTROIDS AND THE INCENTRE

```
  +===================================================================+
  |                                                                   |
  |   CENTROID OF A TRIANGLE  A, B, C                                 |
  |                                                                   |
  |         x1+x2+x3     y1+y2+y3     z1+z2+z3                        |
  |    G = (--------- ,  --------- ,  ---------)                      |
  |             3             3             3                         |
  |                                                                   |
  |   G divides each median in the ratio  2 : 1  from the vertex.     |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |   CENTROID OF A TETRAHEDRON  A, B, C, D                           |
  |                                                                   |
  |         x1+x2+x3+x4     y1+y2+y3+y4     z1+z2+z3+z4               |
  |    G = (------------ ,  ------------ ,  ------------)             |
  |               4               4               4                   |
  |                                                                   |
  |   G divides the line from any vertex to the centroid of the       |
  |   opposite FACE in the ratio  3 : 1.                              |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |   INCENTRE OF A TRIANGLE                                          |
  |                                                                   |
  |   with  a = BC ,  b = CA ,  c = AB    (side OPPOSITE the vertex)  |
  |                                                                   |
  |         a x1 + b x2 + c x3      a y1 + b y2 + c y3                |
  |    I = (------------------- ,   ------------------- ,             |
  |              a + b + c               a + b + c                    |
  |                                                                   |
  |                                 a z1 + b z2 + c z3 )              |
  |                                 ------------------- )             |
  |                                      a + b + c                    |
  |                                                                   |
  +===================================================================+
```

| Formula | When to use |
|---|---|
| triangle centroid = sum / 3 | "find the centroid of the triangle" (2 marks) |
| tetrahedron centroid = sum / 4 | "find the centroid of the tetrahedron" (2 marks) |
| `4 x centroid − (sum of 3 given)` | "three vertices and the centroid are given, find the fourth" |
| `3 x centroid − (sum of 2 given)` | same question for a triangle |
| incentre with weights `a, b, c` | "find the incentre" — remember `a = BC` |
| if the triangle is equilateral, incentre = centroid | instant shortcut |

## The "find the missing vertex" master rule

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   TRIANGLE     :   missing vertex = 3 G  -  (sum of the 2 given)  |
  |   TETRAHEDRON  :   missing vertex = 4 G  -  (sum of the 3 given)  |
  |                                                                   |
  |   PARALLELOGRAM ABCD :   D  =  A + C  -  B                        |
  |                          (because midpoint AC = midpoint BD)      |
  |                                                                   |
  +-------------------------------------------------------------------+
```

`D = A + C - B` means do it coordinate by coordinate:
`D = (x1 + x3 - x2, y1 + y3 - y2, z1 + z3 - z2)`.

---

# 8. TRANSLATION OF AXES IN 3D

```
  +===================================================================+
  |                                                                   |
  |   Origin shifted to  O'(h, k, l),  axes directions unchanged.     |
  |                                                                   |
  |        X = x - h                    x = X + h                     |
  |        Y = y - k                    y = Y + k                     |
  |        Z = z - l                    z = Z + l                     |
  |                                                                   |
  |        " NEW  =  OLD  -  SHIFT "                                  |
  |                                                                   |
  |   Distances, ratios, areas and volumes are UNCHANGED.             |
  |                                                                   |
  +===================================================================+
```

| Formula | When to use |
|---|---|
| `X = x - h` etc. | "the origin is shifted to (h,k,l); find the new coordinates of P" |
| `x = X + h` etc. | "the new coordinates are (X,Y,Z); find the original point" |
| substitute `x = X + h` into an equation | "find the transformed equation of ..." |
| distances unchanged | to argue that a proof still works after shifting |

---

# 9. LINK FORWARD TO CHAPTERS 6 AND 7

You do not need these for Chapter 5 questions, but they are the same letters, so learn
them here and Chapters 6 and 7 become half the work.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   Direction ratios of AB      =  (x2-x1, y2-y1, z2-z1)            |
  |                                                                   |
  |   Direction cosines of AB     =  each one divided by AB           |
  |                                                                   |
  |          l = (x2-x1)/AB ,  m = (y2-y1)/AB ,  n = (z2-z1)/AB       |
  |                                                                   |
  |   and always            l^2 + m^2 + n^2 = 1                       |
  |                                                                   |
  |   Any plane                   a x + b y + c z + d = 0             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+---------------------------------------------------------------------+
  |  1 |  AB = sqrt( (x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 )                     |
  +----+---------------------------------------------------------------------+
  |  2 |  OP = sqrt( x^2 + y^2 + z^2 )                                       |
  +----+---------------------------------------------------------------------+
  |  3 |  distance from x-axis = sqrt(y^2 + z^2)     [drop the axis letter]  |
  +----+---------------------------------------------------------------------+
  |  4 |  distance from xy-plane = |z|               [keep the missing one]  |
  +----+---------------------------------------------------------------------+
  |  5 |  PROJECTION -> make them 0.   IMAGE -> make them negative.          |
  +----+---------------------------------------------------------------------+
  |  6 |  internal m:n   =  (m x2 + n x1)/(m + n)      [m with 2, n with 1]  |
  +----+---------------------------------------------------------------------+
  |  7 |  external m:n   =  (m x2 - n x1)/(m - n)                            |
  +----+---------------------------------------------------------------------+
  |  8 |  midpoint       =  ((x1+x2)/2 , (y1+y2)/2 , (z1+z2)/2)              |
  +----+---------------------------------------------------------------------+
  |  9 |  yz-plane cuts AB in -x1 : x2  (and the zx, xy versions)            |
  +----+---------------------------------------------------------------------+
  | 10 |  centroid of a triangle = sum / 3 ;  of a tetrahedron = sum / 4     |
  +----+---------------------------------------------------------------------+
  | 11 |  incentre = (aA + bB + cC)/(a+b+c) ,  a = BC , b = CA , c = AB      |
  +----+---------------------------------------------------------------------+
  | 12 |  parallelogram ABCD  ->  D = A + C - B                              |
  +----+---------------------------------------------------------------------+

  Plus the two words that never change:
        octant number  =  2D quadrant of (x, y),  then ADD 4 if z is negative.
        translation    =  NEW = OLD - SHIFT.
```
