# Motion in a Plane — Concepts From Zero

**Physics 1st Year · Chapter 4**

Read this with a pen in your hand. Copy every diagram. If you only read it, you will
forget it by tomorrow.

---

# TOPIC 1 — SCALARS AND VECTORS

## The everyday idea

Suppose your friend rings you and says *"I am 5 km away."*
You still cannot find him. **5 km in which direction?**

Now he says *"I am 5 km EAST of you."* Now you can go straight to him.

```
  SCALAR   =  magnitude only                 (a plain number + a unit)
  VECTOR   =  magnitude  AND  direction
```

| SCALARS | VECTORS |
|---|---|
| mass, time, distance, speed | displacement, velocity, acceleration |
| work, energy, power | force, momentum, impulse |
| temperature, density, pressure | torque, angular velocity |
| electric charge, potential | electric field, magnetic field |
| volume, area (usually) | weight |

> **TRAP:** *Current* has a direction (we say "current flows from A to B") but it is a
> **SCALAR**, because currents do not add by the parallelogram law — they add
> arithmetically at a junction. Examiners love this one.

> **TRAP:** *Distance* is a scalar, *displacement* is a vector.
> *Speed* is a scalar, *velocity* is a vector. Never mix the words.

## How a vector is written and drawn

```
  In print :   A  in bold,   or   A with an arrow over it  ->  we write it as  A
  Magnitude:   | A |   or just   A   (plain letter, no arrow)

  DRAWING A VECTOR:

        tail                              head
         O------------------------------->
         |<--------- length = 5 cm ------>|
              drawn to a chosen SCALE
              e.g.  1 cm = 10 N

     The LENGTH of the arrow gives the MAGNITUDE.
     The DIRECTION the arrow points gives the DIRECTION.
```

A vector is fully described by two things only: **how long** and **which way**.
Where you draw it on the page does not matter — you may slide it around freely
as long as its length and direction do not change.

---

# TOPIC 2 — TYPES OF VECTORS

This is a pure-recall 2-mark question. Learn all seven.

```
  +-------------------+-------------------------------------------------+
  |  TYPE             |  MEANING                                        |
  +-------------------+-------------------------------------------------+
  |  EQUAL VECTORS    |  Same MAGNITUDE and same DIRECTION.             |
  |                   |  Their starting points may be different.        |
  |                   |      ------->        ------->     A = B         |
  |                   |                                                 |
  +-------------------+-------------------------------------------------+
  |  UNIT VECTOR      |  A vector of magnitude exactly 1.               |
  |                   |  Used only to POINT a direction.                |
  |                   |                                                 |
  |                   |            A                                    |
  |                   |    A-hat = ---       so    A = | A | x A-hat    |
  |                   |            |A|                                  |
  |                   |                                                 |
  |                   |  Standard ones:  i (x-axis), j (y-axis),        |
  |                   |                  k (z-axis)                     |
  +-------------------+-------------------------------------------------+
  |  ZERO (NULL)      |  Magnitude zero, direction indeterminate.       |
  |  VECTOR           |  Written 0.  Examples: displacement of a body   |
  |                   |  that returns to its start; A + (-A).           |
  +-------------------+-------------------------------------------------+
  |  NEGATIVE VECTOR  |  Same magnitude, EXACTLY OPPOSITE direction.    |
  |                   |      ------->   A          <-------   -A        |
  +-------------------+-------------------------------------------------+
  |  COLLINEAR        |  Vectors acting along the same line or along    |
  |  (PARALLEL /      |  parallel lines. Angle between them is either   |
  |  ANTI-PARALLEL)   |  0 degrees or 180 degrees.                      |
  +-------------------+-------------------------------------------------+
  |  COPLANAR         |  Vectors that all lie in the SAME PLANE.        |
  |  VECTORS          |  Any two vectors are always coplanar.           |
  +-------------------+-------------------------------------------------+
  |  POSITION VECTOR  |  A vector drawn from a fixed ORIGIN O to the    |
  |                   |  point P where the body is.                     |
  |                   |      r  =  x i  +  y j  +  z k                  |
  |                   |      | r | = sqrt( x^2 + y^2 + z^2 )            |
  +-------------------+-------------------------------------------------+
```

## Position vector and displacement vector — the picture

```
              y
              ^
              |            P2 (x2, y2)
              |           *
              |         / |
              |   r2  /   |    displacement  = r2 - r1
              |     /     |                  = (x2-x1) i + (y2-y1) j
              |   /   * P1 (x1, y1)
              | /   /
              |   / r1
              | /
              O----------------------> x

    POSITION VECTOR  r  : always starts at the ORIGIN.
    DISPLACEMENT     dr : from the OLD position to the NEW position.
                          It does NOT care about the path taken.
```

## WORKED EXAMPLE 1

**A particle moves from (2, 3) m to (6, 6) m. Find the displacement vector,
its magnitude and its direction.**

```
  r1  =  2 i  +  3 j
  r2  =  6 i  +  6 j

  Displacement  =  r2 - r1  =  (6 - 2) i  +  (6 - 3) j  =  4 i  +  3 j   metre

  Magnitude     =  sqrt( 4^2 + 3^2 )  =  sqrt( 16 + 9 )  =  sqrt(25)  =  5 m

                            3
  Direction     :  tan a = ---  =  0.75      ->   a = 36 deg 52 min
                            4
                   i.e. 36.87 degrees above the x-axis.
```

## WORKED EXAMPLE 2

**Find the unit vector along A = 3 i + 4 j + 12 k.**

```
  | A |   =  sqrt( 3^2 + 4^2 + 12^2 )  =  sqrt( 9 + 16 + 144 )
          =  sqrt(169)   =  13

              A        3 i  +  4 j  +  12 k
  A-hat  =  ------  =  ---------------------
             | A |              13

          =  0.231 i  +  0.308 j  +  0.923 k

  CHECK:  0.231^2 + 0.308^2 + 0.923^2 = 0.053 + 0.095 + 0.852 = 1.00   correct.
```

> **TRAP:** A unit vector has **no unit** (it is dimensionless). If A is a force in
> newton, A-hat is still just a pure direction. Never write "0.231 i newton".

---

# TOPIC 3 — ADDITION OF VECTORS

You **cannot** add vectors like ordinary numbers. Walk 3 km east then 4 km north and
you are **5 km** from home, not 7 km. Direction must be respected.

## 3.1 TRIANGLE LAW OF VECTOR ADDITION

> **Statement:** If two vectors are represented in **magnitude and direction** by the
> two sides of a triangle **taken in the same order**, then their resultant is
> represented in magnitude and direction by the **third side taken in the reverse
> order**.

```
                        B
                        *
                      / |\
                    /   |  \
             A    /     |    \   B
                /       |      \
              /         |        \
            /  R = A+B  |          \
          *-------------------------*
          O                          Q

     Put the TAIL of B on the HEAD of A.
     The resultant R runs from the tail of A to the head of B.

          OP = A ,   PQ = B   ->   OQ = A + B
```

**"Head to tail, then close the triangle."** That is all the triangle law says.

## 3.2 PARALLELOGRAM LAW OF VECTOR ADDITION  *** MOST IMPORTANT ***

> **Statement:** If two vectors acting simultaneously at a point are represented in
> magnitude and direction by the **two adjacent sides of a parallelogram** drawn from
> that point, then their resultant is represented in magnitude and direction by the
> **diagonal of the parallelogram passing through that same point**.

### The diagram — draw it exactly like this in the exam

```
                          B                          C
                           *------------------------*
                          /|                       /|
                         / |                      / |
                        /  |                     /  |
                   B   /   |               R    /   |  B sin theta
                      /    |                   /    |
                     /     |                  /     |
                    /      |                 /      |
                   /theta  |                / alpha |
                  *--------------------------*------*
                  O             A            A        D
                                                  <------->
                                                  B cos theta

                  |<-------- A + B cos theta ------------>|

    O   is the point where both vectors act
    OA  = A          (vector A)
    OB  = B          (vector B)
    angle AOB = theta   (the angle BETWEEN the two vectors)
    OC  = R          (the resultant)
    alpha = the angle the resultant makes with A

    AC = OB = B  because OACB is a parallelogram (opposite sides equal & parallel)
    CD is the perpendicular dropped from C onto OA extended to D
```

### THE FULL DERIVATION OF R  (write this out for 8-mark questions)

```
  STEP 1   Since AC is parallel to OB, the angle  CAD = theta.

  STEP 2   In the right-angled triangle ACD:

               CD                                CD
        sin theta = ----  = ----   ->    CD  =  B sin theta
               AC     B

               AD                                AD
        cos theta = ----  = ----   ->    AD  =  B cos theta
               AC     B

  STEP 3   In the right-angled triangle ODC, by Pythagoras:

        OC^2  =  OD^2  +  CD^2

  STEP 4   But  OD  =  OA  +  AD  =  A  +  B cos theta

        R^2  =  ( A + B cos theta )^2   +   ( B sin theta )^2

  STEP 5   Expand:

        R^2  =  A^2 + 2 A B cos theta + B^2 cos^2 theta  +  B^2 sin^2 theta

             =  A^2 + 2 A B cos theta + B^2 ( cos^2 theta + sin^2 theta )

  STEP 6   Use  cos^2 theta + sin^2 theta = 1 :

        R^2  =  A^2  +  B^2  +  2 A B cos theta

  +-------------------------------------------------------------+
  |                                                             |
  |     R  =  sqrt( A^2  +  B^2  +  2 A B cos theta )           |
  |                                                             |
  +-------------------------------------------------------------+
```

### THE FULL DERIVATION OF THE DIRECTION alpha

```
  In the right-angled triangle ODC:

                        CD               CD
        tan alpha  =  ------   =   -------------
                        OD           OA  +  AD

  +-------------------------------------------------------------+
  |                                                             |
  |                          B sin theta                        |
  |     tan alpha   =    ---------------------                  |
  |                       A  +  B cos theta                     |
  |                                                             |
  +-------------------------------------------------------------+

  where alpha is measured from the direction of A.

  (Similarly, the angle beta made with B is given by
        tan beta = A sin theta / ( B + A cos theta ) .)
```

## 3.3 SPECIAL CASES — these give you three easy VSAQ marks

```
  +---------------+---------------------------+---------------------------+
  |  theta        |  RESULTANT R              |  DIRECTION                |
  +---------------+---------------------------+---------------------------+
  |               |                           |                           |
  |   0 degrees   |  R = A + B                |  along A (alpha = 0)      |
  |  (parallel)   |  *** MAXIMUM POSSIBLE *** |                           |
  |               |                           |                           |
  |  90 degrees   |  R = sqrt( A^2 + B^2 )    |  tan alpha = B / A        |
  | (perpendic.)  |                           |                           |
  |               |                           |                           |
  | 180 degrees   |  R = | A - B |            |  along the LARGER vector  |
  | (opposite)    |  *** MINIMUM POSSIBLE *** |                           |
  |               |                           |                           |
  +---------------+---------------------------+---------------------------+

  Therefore for ANY two vectors:

        | A - B |    <=    R    <=    A + B

  Special case A = B (two EQUAL vectors of magnitude A at angle theta):

        R  =  sqrt( A^2 + A^2 + 2 A^2 cos theta )
           =  A sqrt( 2 + 2 cos theta )
           =  A sqrt( 2 ( 1 + cos theta ) )
           =  A sqrt( 2 x 2 cos^2 (theta/2) )        [ 1 + cos t = 2cos^2(t/2) ]

        R  =  2 A cos ( theta / 2 )       and the resultant BISECTS the angle
                                          (alpha = theta / 2)
```

## 3.4 POLYGON LAW (for more than two vectors)

> **Statement:** If a number of vectors are represented in magnitude and direction by
> the sides of an **open polygon taken in order**, then their resultant is represented
> in magnitude and direction by the **closing side taken in the opposite order**.

```
                      D
                      *---------* E
                     /           \
                 C  /             \  D
                   *               \
                   |                \
               B   |                 * E
                   |                /
                   *              /
                  /             /   R = A + B + C + D
             A   /            /
                /          /
               *---------*----->
               O          .
                          . . . .
                                 . . .  R  (closing side, O to E)

    Head-to-tail all four vectors, then join the FIRST TAIL to the LAST HEAD.

    IMPORTANT COROLLARY:
    If the polygon CLOSES on itself (last head meets first tail), the
    resultant is the NULL VECTOR — the body is in equilibrium.
```

## WORKED EXAMPLE 3

**Two forces of 3 N and 4 N act at a point with an angle of 60 degrees between them.
Find the magnitude and direction of the resultant.**

```
  Given:  A = 3 N ,  B = 4 N ,  theta = 60 deg
          cos 60 = 0.5 ,  sin 60 = 0.866

  MAGNITUDE:
     R = sqrt( A^2 + B^2 + 2 A B cos theta )
       = sqrt( 3^2 + 4^2 + 2 x 3 x 4 x 0.5 )
       = sqrt( 9 + 16 + 12 )
       = sqrt( 37 )
       = 6.08 N

  DIRECTION (from the 3 N force):
                  B sin theta          4 x 0.866         3.464
     tan alpha = ----------------- = --------------- = --------- = 0.693
                 A + B cos theta      3 + 4 x 0.5         5

     alpha = 34 deg 42 min   (about 34.7 degrees from the 3 N force)
```

## WORKED EXAMPLE 4

**Two equal forces have a resultant equal in magnitude to either of them.
Find the angle between them.**

```
  Let each force be A. Given R = A.

  Using   R = 2 A cos( theta / 2 ) :

        A  =  2 A cos( theta / 2 )

        cos( theta / 2 )  =  1/2

        theta / 2  =  60 deg

        theta  =  120 degrees
```

> **TRAP:** theta in the formula is the angle **between** the two vectors, measured
> when both are drawn **from the same point** (tail to tail). If the diagram shows
> them head-to-tail, the angle between them is `180 - (angle in the triangle)`.

---

# TOPIC 4 — SUBTRACTION OF VECTORS AND MULTIPLICATION BY A SCALAR

## 4.1 Subtraction

There is no such operation as "vector subtraction". You **reverse and add**.

```
  +-------------------------------------------+
  |                                           |
  |        A  -  B    =    A  +  ( -B )       |
  |                                           |
  +-------------------------------------------+

                    B
                 ------->                  -B
                                       <-------

                          A + B
                       . . . . . >
              A     .
         ------->.
                  .
                   .   A - B
                    . . . . >

  MAGNITUDE OF THE DIFFERENCE:

     | A - B |  =  sqrt( A^2 + B^2  -  2 A B cos theta )     <-- note MINUS

  DIRECTION:
                        B sin theta
     tan alpha  =   ----------------------                   <-- note MINUS
                     A  -  B cos theta
```

**Useful results:**

```
  | A + B | = | A - B |   happens only when  cos theta = 0 , i.e. theta = 90 deg
                          (the two vectors are PERPENDICULAR)

  | A + B | = | A | + | B |   only when theta = 0 (parallel)

  | A + B | = | A - B | = A = B  is impossible; check such statements carefully.
```

## 4.2 Multiplication of a vector by a scalar

```
  +--------------------------------------------------------------+
  |                                                              |
  |    m A   has magnitude  | m | x A                            |
  |                                                              |
  |    if  m > 0   ->  same direction as A                       |
  |    if  m < 0   ->  OPPOSITE direction to A                   |
  |    if  m = 0   ->  the null vector                           |
  |                                                              |
  +--------------------------------------------------------------+

  The UNIT of m A = (unit of m) x (unit of A).

  Example:   F  =  m a       mass (scalar) x acceleration (vector) = force (vector)
             p  =  m v       mass x velocity = momentum
```

Multiplying by a scalar **stretches or shrinks** a vector; it can flip it, but it can
never turn it through any other angle.

## WORKED EXAMPLE 5

**A = 5 units due east, B = 5 units due north. Find A + B and A - B.**

```
  theta between them = 90 degrees.

  | A + B |  =  sqrt( 25 + 25 + 0 )  =  sqrt(50)  =  7.07 units
               direction: tan alpha = 5/5 = 1  ->  45 deg north of east.

  | A - B |  =  sqrt( 25 + 25 - 0 )  =  sqrt(50)  =  7.07 units
               direction: 45 deg SOUTH of east.

  Both have the SAME magnitude because the angle is 90 degrees. Good check.
```

---

# TOPIC 5 — RESOLUTION OF A VECTOR INTO COMPONENTS

**This is the single most useful skill in the whole of Physics.** Adding vectors with
the parallelogram law is slow and only works for two at a time. Resolving into
components turns every vector problem into simple arithmetic.

Adding vectors is "put two things together". **Resolution is the reverse** — split
one vector into two perpendicular pieces that together do the same job.

## 5.1 In two dimensions

```
              y
              ^
              |
              |                    * P
              |                  / |
              |               /    |
              |            /       |
              |         /  A       |   Ay = A sin theta
              |      /             |   (the VERTICAL component)
              |   /                |
              | /  theta           |
              O--------------------+-------------> x
              |<------ Ax -------->|
                 Ax = A cos theta
                 (the HORIZONTAL component)

  +---------------------------------------------------------------+
  |                                                               |
  |     Ax  =  A cos theta            Ay  =  A sin theta          |
  |                                                               |
  |     A   =  Ax i  +  Ay j                                      |
  |                                                               |
  |     A   =  sqrt( Ax^2 + Ay^2 )                                |
  |                                                               |
  |     tan theta  =  Ay / Ax                                     |
  |                                                               |
  +---------------------------------------------------------------+

  theta is ALWAYS measured from the +x axis (anticlockwise) unless told otherwise.
```

> **TRAP:** cos goes with the component that is **ADJACENT** to the angle, sin with
> the **OPPOSITE** one. If the angle is measured from the **y-axis** instead, then
> `Ax = A sin theta` and `Ay = A cos theta`. Always look at where the angle is marked.

## 5.2 In three dimensions

```
                 z
                 ^
                 |    Az
                 |....................* P (x, y, z)
                 |  .              . /|
                 |.              .   /|
                 |             .    / |
                 |  A       .      /  |
                 |       .        /   |
                 |    .          /    |
                 | .    gamma   /     |
                 O-------------/------+---------> y
                / .   beta    /     .    Ay
               /   .         /  .
              /     .       /.
             /  alpha  .  .
            /        Ax  *
           v
           x

  +---------------------------------------------------------------+
  |                                                               |
  |     A   =  Ax i  +  Ay j  +  Az k                             |
  |                                                               |
  |     | A |  =  sqrt( Ax^2  +  Ay^2  +  Az^2 )                  |
  |                                                               |
  |     Direction cosines:                                        |
  |          cos alpha = Ax / A                                   |
  |          cos beta  = Ay / A                                   |
  |          cos gamma = Az / A                                   |
  |                                                               |
  |     and always     cos^2 alpha + cos^2 beta + cos^2 gamma = 1 |
  |                                                               |
  +---------------------------------------------------------------+
```

## 5.3 Adding vectors USING components (the fast method)

```
  If   A = Ax i + Ay j + Az k     and    B = Bx i + By j + Bz k    then

       A + B  =  (Ax + Bx) i  +  (Ay + By) j  +  (Az + Bz) k
       A - B  =  (Ax - Bx) i  +  (Ay - By) j  +  (Az - Bz) k

  THREE-STEP RECIPE FOR ANY NUMBER OF VECTORS:

    1.  Resolve every vector into x and y components (watch the signs!).
    2.  Add all the x's  ->  Rx  .  Add all the y's  ->  Ry .
    3.  R = sqrt( Rx^2 + Ry^2 )  ,   tan theta = Ry / Rx
```

## WORKED EXAMPLE 6

**A force of 50 N acts at 30 degrees to the horizontal. Find its components.**

```
  Fx  =  F cos 30  =  50 x 0.866  =  43.3 N     (horizontal)
  Fy  =  F sin 30  =  50 x 0.5    =  25.0 N     (vertical)

  CHECK:  sqrt( 43.3^2 + 25^2 ) = sqrt( 1875 + 625 ) = sqrt(2500) = 50 N   correct.
```

## WORKED EXAMPLE 7

**Three forces act on a body: 10 N along +x, 20 N at 60 degrees to +x, and
15 N along +y. Find the resultant.**

```
  RESOLVE:
     F1 = 10 N at 0 deg    ->  x: 10.0        y: 0
     F2 = 20 N at 60 deg   ->  x: 20 cos60    y: 20 sin60
                               = 10.0            = 17.32
     F3 = 15 N at 90 deg   ->  x: 0           y: 15.0

  ADD:
     Rx  =  10 + 10 + 0     =  20.0 N
     Ry  =  0 + 17.32 + 15  =  32.32 N

  COMBINE:
     R   =  sqrt( 20^2 + 32.32^2 )  =  sqrt( 400 + 1044.6 )
         =  sqrt( 1444.6 )  =  38.0 N

     tan theta = 32.32 / 20 = 1.616   ->   theta = 58.2 degrees from +x axis.
```

> **TRAP:** Components pointing **left** are negative x. Components pointing
> **down** are negative y. Losing a minus sign here is the number one cause of
> wrong answers in this chapter.

---

# TOPIC 6 — SCALAR (DOT) AND VECTOR (CROSS) PRODUCTS — IN OUTLINE

You only need these two in outline for this chapter; they return in Work-Energy and
in Rotational Motion.

## 6.1 Scalar product (dot product)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |      A . B   =   A B cos theta          RESULT IS A SCALAR       |
  |                                                                  |
  |      In components:   A . B  =  Ax Bx + Ay By + Az Bz            |
  |                                                                  |
  +------------------------------------------------------------------+

  PROPERTIES
     A . B   =   B . A                     (commutative)
     i . i  =  j . j  =  k . k  =  1
     i . j  =  j . k  =  k . i  =  0
     If  A . B = 0  (and neither is zero)  ->  the vectors are PERPENDICULAR
     A . A  =  A^2

  PHYSICS USES:   Work  W = F . s          Power  P = F . v
```

## 6.2 Vector product (cross product)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |      A x B   =   A B sin theta  n-hat     RESULT IS A VECTOR     |
  |                                                                  |
  |      n-hat is perpendicular to BOTH A and B,                     |
  |      its sense given by the RIGHT HAND RULE.                     |
  |                                                                  |
  |                  | i    j    k  |                                |
  |      A x B  =    | Ax   Ay   Az |                                |
  |                  | Bx   By   Bz |                                |
  |                                                                  |
  +------------------------------------------------------------------+

  PROPERTIES
     A x B  =  - ( B x A )                 (NOT commutative)
     A x A  =  0
     i x j = k ,   j x k = i ,   k x i = j       (cyclic: i -> j -> k -> i)
     j x i = -k ,  k x j = -i ,  i x k = -j
     If  A x B = 0  ->  the vectors are PARALLEL or ANTI-PARALLEL

  PHYSICS USES:   Torque  T = r x F        Angular momentum  L = r x p
```

## WORKED EXAMPLE 8

**If A = i + 2j + 3k and B = 2i + 3j + 4k, find A . B and A x B.**

```
  A . B  =  (1)(2) + (2)(3) + (3)(4)  =  2 + 6 + 12  =  20

              | i    j    k |
  A x B  =    | 1    2    3 |
              | 2    3    4 |

         =  i (2 x 4  -  3 x 3)  -  j (1 x 4  -  3 x 2)  +  k (1 x 3  -  2 x 2)
         =  i (8 - 9)            -  j (4 - 6)            +  k (3 - 4)
         =  - i  +  2 j  -  k

  CHECK (always do this):
     (A x B) . A  =  (-1)(1) + (2)(2) + (-1)(3)  =  -1 + 4 - 3  =  0   correct
     (A x B) . B  =  (-1)(2) + (2)(3) + (-1)(4)  =  -2 + 6 - 4  =  0   correct
     The cross product is perpendicular to both. Good.
```

---

# TOPIC 7 — MOTION IN A PLANE: POSITION, VELOCITY, ACCELERATION

Everything you learned in Chapter 3 (straight-line motion) now comes back, but with
arrows on top of the letters.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   POSITION       r  =  x i  +  y j                                   |
  |                                                                      |
  |   DISPLACEMENT   dr =  r2 - r1  =  (x2 - x1) i  +  (y2 - y1) j       |
  |                                                                      |
  |                              dr                                      |
  |   AVERAGE VELOCITY  v_av =  ----                                     |
  |                              dt                                      |
  |                                                                      |
  |                              dr                                      |
  |   INSTANTANEOUS     v    =  ----  =  vx i  +  vy j                   |
  |   VELOCITY                   dt                                      |
  |                                                                      |
  |                              dv       d2r                            |
  |   ACCELERATION      a    =  ----  =  -----  =  ax i  +  ay j         |
  |                              dt       dt2                            |
  |                                                                      |
  +----------------------------------------------------------------------+

  Magnitude of velocity :  | v |  =  sqrt( vx^2 + vy^2 )   = SPEED
  Direction of velocity :  tan theta  =  vy / vx
```

**Key fact:** the instantaneous velocity vector is always **TANGENT** to the path.

```
                          v (tangent)
                            ^
                          /
                        /
              . . . . *. . . .
           .                    .
         .        path            .
       .                            .
```

## 7.1 Equations of motion for CONSTANT acceleration in a plane

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |      v   =   u   +   a t                                             |
  |                                                                      |
  |      r   =   u t   +   (1/2) a t^2          (taking r0 = 0)          |
  |                                                                      |
  |      or   r  =  r0  +  u t  +  (1/2) a t^2                           |
  |                                                                      |
  +----------------------------------------------------------------------+
```

  These VECTOR equations split into TWO INDEPENDENT SETS of scalar equations:

```
  +------------------------------+------------------------------+
  |   ALONG x                    |   ALONG y                    |
  +------------------------------+------------------------------+
  |   vx = ux + ax t             |   vy = uy + ay t             |
  |   x  = ux t + (1/2) ax t^2   |   y  = uy t + (1/2) ay t^2   |
  |   vx^2 = ux^2 + 2 ax x       |   vy^2 = uy^2 + 2 ay y       |
  +------------------------------+------------------------------+
```

```
  *** THE ONE THING SHARED BY BOTH COLUMNS IS THE TIME t. ***
```

That last line is the whole secret of projectile motion. Underline it.

> **TRAP:** `v^2 = u^2 + 2 a s` has **no vector form** — it involves squares, so it
> can only be used **one axis at a time**.

## WORKED EXAMPLE 9

**A particle starts from the origin with velocity u = (3 i + 4 j) m/s and has a
constant acceleration a = (2 i - 1 j) m/s^2. Find its velocity and position after
2 seconds.**

```
  VELOCITY:
     v  =  u  +  a t
        =  (3 i + 4 j)  +  (2 i - 1 j)(2)
        =  (3 i + 4 j)  +  (4 i - 2 j)
        =  7 i  +  2 j    m/s

     Speed  =  sqrt( 49 + 4 )  =  sqrt(53)  =  7.28 m/s

  POSITION:
     r  =  u t  +  (1/2) a t^2
        =  (3 i + 4 j)(2)  +  (1/2)(2 i - 1 j)(4)
        =  (6 i + 8 j)  +  (4 i - 2 j)
        =  10 i  +  6 j   metre
```

---

# TOPIC 8 — PROJECTILE MOTION (FIRED AT AN ANGLE FROM THE GROUND)

**This is the 8-mark question. Learn every line of it.**

## 8.1 What is a projectile?

> A **projectile** is any body thrown into the air which then moves **only under the
> action of gravity** (air resistance neglected). The path it follows is called its
> **trajectory**.

Examples: a cricket ball hit for six, a bullet, a javelin, water from a hosepipe.

## 8.2 The one assumption that makes it easy

```
  +======================================================================+
  |                                                                      |
  |    THE HORIZONTAL AND VERTICAL MOTIONS ARE COMPLETELY INDEPENDENT.   |
  |                                                                      |
  |    Gravity acts only downwards. It has NO horizontal component.      |
  |    So it can change the vertical velocity but it can NEVER change    |
  |    the horizontal velocity.                                          |
  |                                                                      |
  +======================================================================+

     ax = 0                      ay = -g   (taking upward as positive)
     ux = u cos theta            uy = u sin theta
```

**A famous demonstration:** drop one ball from a table and, at the same instant,
fire another horizontally off the same table. **They hit the floor together.** The
horizontal motion does not delay the fall at all.

## 8.3 THE MASTER DIAGRAM — draw this before you write anything

```
        y
        ^
        |                    v = u cos theta  (only horizontal!)
        |                         --->
        |                    ....*....
        |               ....           ....
        |            ..                    ..
        |          ..     |                  ..
        |        ..       |                    ..
        |      ..         | H                    ..
   u    |    ..           |                        ..
    \   |  ..             |                          ..    v
     \  | ..              |                            ..  |
      \ |..               |                             .. v
       \|. theta          |                               .*  angle = theta
   -----O------------------+---------------------------------*----------> x
        |<---- R/2 ------->|<------------ R/2 --------------->|
        |<--------------------- R (range) ------------------->|

   AT THE START :  ux = u cos theta      uy = + u sin theta
   AT THE TOP   :  vx = u cos theta      vy = 0        <-- speed is NOT zero
   AT LANDING   :  vx = u cos theta      vy = - u sin theta
                   speed on landing = u (same as launch), angle = theta below
                   the horizontal.

   THE PATH IS SYMMETRIC about the highest point.
   Time up = Time down = T/2
```

## 8.4 DERIVATION 1 — THE PATH IS A PARABOLA (equation of trajectory)

```
  Take the point of projection as the origin O.
  Let the projectile be at point P(x, y) after time t.

  HORIZONTAL MOTION  (ax = 0, so velocity is constant):

        x  =  ( u cos theta ) t

                            x
  therefore      t  =  --------------            ......... (1)
                        u cos theta

  VERTICAL MOTION  (uy = u sin theta, ay = -g):

        y  =  ( u sin theta ) t  -  (1/2) g t^2  ......... (2)

  Substitute (1) into (2):

                           /      x      \         1     /      x      \ 2
        y  =  u sin theta |  ------------  |   -   --- g |  ------------  |
                           \ u cos theta /          2     \ u cos theta /

                sin theta                    g x^2
        y  =   ----------- x     -     ---------------------
                cos theta               2 u^2 cos^2 theta

  +---------------------------------------------------------------------+
  |                                                                     |
  |                                    g                                |
  |     y  =  ( tan theta ) x   -   ---------------------  x^2          |
  |                                  2 u^2 cos^2 theta                  |
  |                                                                     |
  +---------------------------------------------------------------------+

  Now compare with the standard form   y = A x - B x^2   where

              A = tan theta            (a constant)
              B = g / (2 u^2 cos^2 theta)   (a constant)

  This is an equation of the SECOND DEGREE in x and of the FIRST DEGREE in y.

        ***  THEREFORE THE PATH OF A PROJECTILE IS A PARABOLA.  ***
```

## 8.5 DERIVATION 2 — TIME OF FLIGHT (T)

```
  DEFINITION: the total time the projectile stays in the air.

  Over the whole flight the projectile returns to the same height,
  so the NET VERTICAL DISPLACEMENT  y = 0.

  Using   y = uy t - (1/2) g t^2   with  y = 0  and  t = T :

        0  =  ( u sin theta ) T   -   (1/2) g T^2

        (1/2) g T^2  =  ( u sin theta ) T

  Divide by T (T is not zero, that is the trivial launch instant):

        (1/2) g T  =  u sin theta

  +----------------------------------------------+
  |                                              |
  |                  2 u sin theta               |
  |          T   =   ----------------            |
  |                        g                     |
  |                                              |
  +----------------------------------------------+

  TIME TO REACH THE HIGHEST POINT:

     At the top,  vy = 0.   Using  vy = u sin theta - g t :

                        u sin theta          T
            t(top)  =  -------------   =    ---
                             g               2

     Time of ascent = Time of descent. Perfect symmetry.
```

## 8.6 DERIVATION 3 — MAXIMUM HEIGHT (H)

```
  DEFINITION: the greatest vertical height reached above the point of projection.

  At the highest point the VERTICAL velocity is zero:  vy = 0.

  Using   vy^2  =  uy^2  -  2 g y     with  vy = 0 ,  y = H :

        0  =  ( u sin theta )^2  -  2 g H

        2 g H  =  u^2 sin^2 theta

  +----------------------------------------------+
  |                                              |
  |                  u^2 sin^2 theta             |
  |          H   =   ------------------          |
  |                        2 g                   |
  |                                              |
  +----------------------------------------------+

  ALTERNATIVE using T:      H  =  (1/8) g T^2       (a handy shortcut)
```

## 8.7 DERIVATION 4 — HORIZONTAL RANGE (R)

```
  DEFINITION: the horizontal distance covered during the time of flight.

  The horizontal velocity NEVER changes, so:

        R  =  ( horizontal velocity )  x  ( time of flight )

        R  =  ( u cos theta )  x  T

                                     2 u sin theta
        R  =  ( u cos theta )  x   ----------------
                                          g

              2 u^2 sin theta cos theta
        R  =  ----------------------------
                          g

  Use the identity   2 sin theta cos theta  =  sin 2 theta :

  +----------------------------------------------+
  |                                              |
  |                  u^2 sin 2 theta             |
  |          R   =   ------------------          |
  |                        g                     |
  |                                              |
  +----------------------------------------------+
```

## 8.8 MAXIMUM RANGE — WHY 45 DEGREES?

```
  In   R = u^2 sin 2theta / g ,  the quantities u and g are FIXED.
  So R is largest when  sin 2 theta  is largest.

        The maximum value of any sine is 1.

        sin 2 theta  =  1     ->     2 theta  =  90 degrees

  +-------------------------------------------------------------+
  |                                                             |
  |         theta  =  45 degrees        gives                   |
  |                                                             |
  |                        u^2                                  |
  |         R (maximum) = -----                                 |
  |                         g                                   |
  |                                                             |
  +-------------------------------------------------------------+

  Also useful:   at 45 degrees,   H  =  R(max) / 4
```

## 8.9 TWO ANGLES GIVE THE SAME RANGE

```
  Take a second angle  theta' = ( 90 - theta ).

        u^2 sin 2 theta'       u^2 sin ( 2 ( 90 - theta ) )
  R' =  ------------------  =  -----------------------------
              g                             g

        u^2 sin ( 180 - 2 theta )
     =  ----------------------------
                   g

  But   sin ( 180 - x )  =  sin x , therefore

        u^2 sin 2 theta
  R' =  -----------------  =  R
              g

  +-------------------------------------------------------------------+
  |                                                                   |
  |   theta  and  ( 90 - theta )  give the SAME horizontal range.     |
  |                                                                   |
  |   Example:  30 deg and 60 deg give equal ranges.                  |
  |             20 deg and 70 deg give equal ranges.                  |
  |                                                                   |
  |   BUT the higher angle gives the GREATER height and the           |
  |   LONGER time of flight.                                          |
  |                                                                   |
  |   Relation between the two flight times:   T1 x T2  =  2 R / g    |
  |                                                                   |
  +-------------------------------------------------------------------+
```

```
   Picture of the two paths with the SAME range:

         y
         ^                . . .
         |             .        .          <-- 60 degrees (high, slow)
         |           .            .
         |          .              .
         |         .   . . . . .    .
         |        .  .           .   .     <-- 30 degrees (flat, fast)
         |       . .               .  .
         |      ..                   . .
         |     .                        ..
      ---O---------------------------------*------> x
                                           same landing point
```

## 8.10 VELOCITY AT ANY INSTANT

```
  After time t :

        vx  =  u cos theta                (never changes)
        vy  =  u sin theta  -  g t        (decreases, becomes negative after the top)

  +------------------------------------------------------------------+
  |                                                                  |
  |    v  =  sqrt( vx^2 + vy^2 )                                     |
  |                                                                  |
  |       =  sqrt( u^2 cos^2 theta + ( u sin theta - g t )^2 )       |
  |                                                                  |
  |       =  sqrt( u^2  -  2 u g t sin theta  +  g^2 t^2 )           |
  |                                                                  |
  |                        vy        u sin theta  -  g t             |
  |    tan beta  =        ----   =   ----------------------          |
  |                        vx            u cos theta                 |
  |                                                                  |
  |    where beta is the angle of the velocity with the horizontal.  |
  |                                                                  |
  +------------------------------------------------------------------+
```

## WORKED EXAMPLE 10

**A ball is projected with a speed of 20 m/s at 30 degrees to the horizontal.
Take g = 10 m/s^2. Find (a) time of flight (b) maximum height (c) range
(d) the velocity after 1 second.**

```
  GIVEN:  u = 20 m/s , theta = 30 deg , g = 10 m/s^2
          sin 30 = 0.5 , cos 30 = 0.866 , sin 60 = 0.866

  COMPONENTS:  ux = 20 x 0.866 = 17.32 m/s
               uy = 20 x 0.5   = 10.0  m/s

  (a) TIME OF FLIGHT
          2 u sin theta      2 x 20 x 0.5        20
      T = --------------- =  --------------  =  ----  =  2 seconds
                g                 10             10

  (b) MAXIMUM HEIGHT
          u^2 sin^2 theta     (20)^2 x (0.5)^2      400 x 0.25     100
      H = ----------------- = ------------------- = ----------- = ----- = 5 m
                2 g              2 x 10                 20          20

  (c) RANGE
          u^2 sin 2theta      400 x sin 60      400 x 0.866
      R = --------------- =  --------------- =  -------------  =  34.64 m
                g                  10                10

      CHECK:  R = ux x T = 17.32 x 2 = 34.64 m   correct.

  (d) VELOCITY AFTER 1 SECOND  (this is exactly the top, since T/2 = 1 s)
      vx = 17.32 m/s
      vy = 10 - 10 x 1 = 0
      v  = 17.32 m/s, purely horizontal.   As expected at the highest point.
```

## WORKED EXAMPLE 11

**A body is projected at 60 degrees with a speed of 40 m/s. Find the range, and find
another angle that would give the same range. (g = 10 m/s^2)**

```
       u^2 sin 2 theta      1600 x sin 120      1600 x 0.866
  R =  ----------------- =  ---------------- =  --------------  =  138.6 m
             g                    10                 10

  The other angle:   90 - 60  =  30 degrees.

  CHECK at 30 deg:  R = 1600 x sin 60 / 10 = 1600 x 0.866 / 10 = 138.6 m   equal.
```

> **TRAP:** At the highest point the velocity is **NOT zero**. Only the **vertical**
> component is zero. The horizontal component `u cos theta` continues unchanged.
> Students lose this mark every single year.

> **TRAP:** At the highest point the **acceleration is still g downwards**. It never
> becomes zero anywhere during the flight.

> **TRAP:** The kinetic energy at the top is `(1/2) m u^2 cos^2 theta`, not zero.

---

# TOPIC 9 — HORIZONTAL PROJECTILE (FIRED FROM A HEIGHT)

This is the "bomb released from an aeroplane" question.

## 9.1 The setup

```
    u
   ---->*----------------------------.
        |    .                        .
        |         .                    .
        |             .                 .
      h |                 .              .
        |                    .            .
        |                      .           .
        |                        .          .  <-- the path is HALF a parabola
        |                         .          .
        |                          .          .
        |                           .          .  vx = u
        |                            .          . |
        |                             .         . v vy = g t
   -----+------------------------------.---------*--------
        |<--------------- R --------------------->|
                                                  v (resultant)

  AT THE MOMENT OF RELEASE:
        horizontal velocity  ux  =  u      (the plane's speed)
        vertical velocity    uy  =  0      *** THIS IS THE KEY ***
        acceleration         ax  =  0  ,  ay  =  g   (taking DOWN as positive)
```

## 9.2 Equation of the trajectory

```
  HORIZONTAL:      x  =  u t         ->      t  =  x / u

  VERTICAL:        y  =  (1/2) g t^2         (uy = 0, so no "uy t" term)

  Substitute:

                        1    / x \ 2
                 y  =  --- g |---|
                        2    \ u /

  +-------------------------------------------+
  |                                           |
  |                  g                        |
  |         y  =  --------  x^2               |
  |                2 u^2                      |
  |                                           |
  +-------------------------------------------+

  y is proportional to x^2  ->  again a PARABOLA (only the descending half).
```

## 9.3 Time of flight

```
  The body falls a total vertical height h.

        h  =  (1/2) g T^2

        T^2  =  2 h / g

  +-------------------------------------------+
  |                                           |
  |         T  =  sqrt( 2 h / g )             |
  |                                           |
  +-------------------------------------------+

  *** T DOES NOT DEPEND ON u AT ALL. ***
  A bomb dropped and a bomb fired horizontally from the same height land at the
  same TIME (but at different places).
```

## 9.4 Horizontal range

```
        R  =  u  x  T

  +-------------------------------------------+
  |                                           |
  |         R  =  u  sqrt( 2 h / g )          |
  |                                           |
  +-------------------------------------------+
```

## 9.5 Velocity on striking the ground

```
        vx  =  u                                (unchanged)
        vy  =  g T  =  g sqrt(2h/g)  =  sqrt( 2 g h )

        v   =  sqrt( vx^2 + vy^2 )  =  sqrt( u^2  +  2 g h )

                          vy        sqrt( 2 g h )
        tan beta   =     ----  =   ---------------      (beta below the horizontal)
                          vx              u
```

## WORKED EXAMPLE 12

**An aeroplane flying horizontally at 100 m/s at a height of 500 m releases a bomb.
Find (a) the time taken to reach the ground (b) the horizontal distance travelled
(c) the velocity with which it hits the ground. (g = 10 m/s^2)**

```
  GIVEN:  u = 100 m/s ,  h = 500 m ,  g = 10 m/s^2

  (a)  T  =  sqrt( 2h / g )  =  sqrt( 2 x 500 / 10 )  =  sqrt(100)  =  10 s

  (b)  R  =  u T  =  100 x 10  =  1000 m  =  1 km

  (c)  vx = 100 m/s
       vy = g T = 10 x 10 = 100 m/s
       v  = sqrt( 100^2 + 100^2 ) = sqrt( 20000 ) = 141.4 m/s

       tan beta = 100 / 100 = 1   ->   beta = 45 degrees below the horizontal.
```

> **TRAP:** For a body released from a moving plane, the initial **vertical** velocity
> is **zero**, not the plane's speed. And to a passenger looking straight down, the
> bomb appears to fall **vertically** — it always stays directly below the plane
> (if the plane keeps a constant velocity).

---

# TOPIC 10 — UNIFORM CIRCULAR MOTION

## 10.1 What "uniform" means here

> **Uniform circular motion** = motion in a circle with **constant SPEED**.

But the **velocity is NOT constant**, because the *direction* keeps changing.
A changing velocity means there **is** an acceleration — even though the speed
never changes. This surprises everyone the first time.

```
                        v2
                        ^
                        |
              . . . . . *. . . . . .
          .             |            .
        .           a   |              .
      .         <-------*               .
     .              (towards            .
     *  <--- v1     the centre)         *
     .                  O                .
      .                                 .
        .                             .
          .  . . . . . . . . . .  .

   The velocity is always along the TANGENT.
   The acceleration is always along the RADIUS, pointing INWARD, towards O.
   They are ALWAYS at 90 degrees to each other in UNIFORM circular motion.
```

## 10.2 Angular quantities

```
  +-----------------------------------------------------------------------+
  |                                                                       |
  |  ANGULAR DISPLACEMENT  (theta)                                        |
  |     The angle swept by the radius, measured in RADIANS.               |
  |                                                                       |
  |               arc length         s                                    |
  |     theta  =  ------------  =  -----          unit: radian (rad)      |
  |                 radius           r                                    |
  |                                                                       |
  |     One full circle  =  2 pi radians  =  360 degrees                  |
  |                                                                       |
  +-----------------------------------------------------------------------+
  |                                                                       |
  |  ANGULAR VELOCITY  (omega)                                            |
  |     The rate of change of angular displacement.                       |
  |                                                                       |
  |               d theta                                                 |
  |     omega  =  ----------             unit: rad / s                    |
  |                  dt                  dimensions: [ T^-1 ]             |
  |                                                                       |
  +-----------------------------------------------------------------------+
  |                                                                       |
  |  ANGULAR ACCELERATION  (alpha)                                        |
  |     The rate of change of angular velocity.                           |
  |                                                                       |
  |               d omega                                                 |
  |     alpha  =  ----------             unit: rad / s^2                  |
  |                  dt                  dimensions: [ T^-2 ]             |
  |                                                                       |
  |     For UNIFORM circular motion  alpha = 0.                           |
  |                                                                       |
  +-----------------------------------------------------------------------+
```

## 10.3 Relation between v and omega

```
  DERIVATION:

     arc length         s  =  r theta

     Differentiate with respect to time (r is constant):

           ds             d theta
          ----  =   r  x  ---------
           dt               dt

     But  ds/dt = v  (the linear speed)  and  d theta/dt = omega .

  +---------------------------------------+
  |                                       |
  |            v  =  r  omega             |
  |                                       |
  +---------------------------------------+

  Similarly, differentiating v = r omega:      a(tangential)  =  r  alpha
```

## 10.4 Time period and frequency

```
  +-----------------------------------------------------------------------+
  |                                                                       |
  |  TIME PERIOD  T  :  time taken for ONE complete revolution            |
  |                                                                       |
  |            2 pi r          2 pi                                       |
  |      T  =  --------   =   -------            unit: second             |
  |               v            omega                                      |
  |                                                                       |
  |  FREQUENCY  n (or f) :  number of revolutions per second              |
  |                                                                       |
  |             1          omega                                          |
  |      n  =  ----   =   --------               unit: hertz (Hz)         |
  |             T           2 pi                                          |
  |                                                                       |
  |  therefore      omega  =  2 pi n  =  2 pi / T                         |
  |                                                                       |
  +-----------------------------------------------------------------------+
```

## 10.5 CENTRIPETAL ACCELERATION — the derivation

```
  A particle moves in a circle of radius r with constant speed v.
  At time t1 it is at P with velocity v1 ; at time t2 it is at Q with velocity v2.
  Both have the SAME magnitude v, but different directions.

     POSITION DIAGRAM                       VELOCITY DIAGRAM
                                            (draw v1 and v2 from a common point)

           . . . . . .                              v2
        .      Q      .                            /|
      .      *         .                          / |
     .     /  \         .                        /  |
    .    /     \         .                  v   /   |  dv = v2 - v1
    .  / d.theta\        .                     /    |
    * /_________\ * P    .                    / d.theta
    .      r              .                  *-------
     .                   .                        v1
       .               .
          . . . . . .

  STEP 1   The two triangles are SIMILAR (both isosceles, and the angle between
           v1 and v2 equals the angle d.theta between the two radii, because
           each velocity is perpendicular to its own radius).

  STEP 2   Therefore corresponding sides are in the same ratio:

                | dv |          | dr |
               --------   =    --------
                  v               r

           where | dr | is the chord PQ.

  STEP 3   Rearrange:
                                v
                | dv |   =    -----  | dr |
                                r

  STEP 4   Divide both sides by dt :

                | dv |         v      | dr |
               --------   =   ----- x --------
                  dt            r        dt

  STEP 5   As dt tends to zero, | dr | / dt tends to the speed v,
           and | dv | / dt is the magnitude of the acceleration a.

  +-------------------------------------------------------------+
  |                                                             |
  |                    v^2                                      |
  |         a      =  -----   =   r omega^2   =   v omega       |
  |          c          r                                       |
  |                                                             |
  |         also    a_c  =  4 pi^2 n^2 r  =  4 pi^2 r / T^2     |
  |                                                             |
  +-------------------------------------------------------------+

  DIRECTION:  As d.theta tends to zero, dv becomes perpendicular to v,
              i.e. it points along the radius TOWARDS THE CENTRE.

  That is why it is called CENTRIPETAL ("centre-seeking") acceleration.

  The force producing it:      F  =  m v^2 / r  =  m r omega^2
```

## 10.6 Non-uniform circular motion

If the speed also changes, there are now **two** accelerations at right angles:

```
                         a_t (tangential)
                          ^
                          |
                          |
              . . . . . . *. . . . . .
          .               |\           .
        .                 | \           .
      .              a_r  |  \  a (net)  .
     .            <-------*   \           .
     .                        v            .
     *          O                          *

  +-----------------------------------------------------------------------+
  |                                                                       |
  |  RADIAL (centripetal)   a_r  =  v^2 / r                               |
  |      changes the DIRECTION of the velocity. Points to the centre.     |
  |                                                                       |
  |  TANGENTIAL             a_t  =  dv/dt  =  r alpha                     |
  |      changes the MAGNITUDE (speed). Points along the tangent.         |
  |                                                                       |
  |  NET ACCELERATION       a  =  sqrt( a_r^2  +  a_t^2 )                 |
  |                                                                       |
  |                    tan phi  =  a_t / a_r                              |
  |                                                                       |
  +-----------------------------------------------------------------------+

  In UNIFORM circular motion  a_t = 0 , so  a = a_r = v^2 / r  only.
```

## WORKED EXAMPLE 13

**A stone tied to a string of length 0.5 m is whirled in a horizontal circle at
10 revolutions per second. Find the angular velocity, the linear speed and the
centripetal acceleration.**

```
  GIVEN:  r = 0.5 m ,  n = 10 rev/s

  ANGULAR VELOCITY
      omega  =  2 pi n  =  2 x 3.14 x 10  =  62.8 rad/s

  LINEAR SPEED
      v  =  r omega  =  0.5 x 62.8  =  31.4 m/s

  CENTRIPETAL ACCELERATION
           v^2       (31.4)^2       986.0
      a = ------ = ------------- = --------- = 1972 m/s^2
            r          0.5            0.5

      CHECK by the other formula:
      a = r omega^2 = 0.5 x (62.8)^2 = 0.5 x 3943.8 = 1972 m/s^2   correct.

  TIME PERIOD
      T = 1 / n = 1 / 10 = 0.1 s
```

## WORKED EXAMPLE 14

**A car goes round a circular track of radius 100 m at a constant speed of 20 m/s.
Find its centripetal acceleration and the time for one lap.**

```
       v^2      20^2       400
  a = ----- =  ------  =  -----  =  4 m/s^2   (directed towards the centre)
        r       100        100

       2 pi r      2 x 3.14 x 100      628
  T = -------- =  ----------------- = ------  =  31.4 s
          v              20             20
```

> **TRAP:** In uniform circular motion the **speed** is constant but the **velocity**
> is not, and therefore the motion **is accelerated**. If a question says
> "the acceleration is zero because the speed is constant", it is wrong.

> **TRAP:** omega must be in **rad/s** in every formula. If you are given rpm
> (revolutions per minute), convert: `omega = 2 pi N / 60`.

---

# TOPIC 11 — RELATIVE VELOCITY IN TWO DIMENSIONS

## 11.1 The idea

Sit in a moving train and the trees appear to run backwards. What you see is the
**relative velocity** of the trees with respect to you.

```
  +---------------------------------------------------------------+
  |                                                               |
  |    Velocity of A relative to B:                               |
  |                                                               |
  |         v(AB)  =  v(A)  -  v(B)                               |
  |                                                               |
  |    and  v(BA)  =  v(B)  -  v(A)  =  - v(AB)                   |
  |                                                               |
  |    Magnitude:                                                 |
  |         | v(AB) | = sqrt( vA^2 + vB^2 - 2 vA vB cos theta )   |
  |                                                               |
  +---------------------------------------------------------------+

  Special cases:
     Same direction     (theta = 0)    ->  | v(AB) | = | vA - vB |
     Opposite direction (theta = 180)  ->  | v(AB) | = vA + vB
     Perpendicular      (theta = 90)   ->  | v(AB) | = sqrt(vA^2 + vB^2)
```

## 11.2 THE RIVER-BOAT PROBLEM

A river of width d flows with speed `v_r`. A boat can move with speed `v_b` in
**still water**. There are two different questions and they have different answers.

### CASE A — cross in the SHORTEST TIME

```
              <---------------- v_r ---------------->   (river flow)

   far bank  ================================================
                    ^                    /
                    |                  /
                    | v_b            /  resultant path
                  d |              /
                    |            /
                    |          /
   near bank  ======*=========/=====================
                    |<- drift ->|

   POINT THE BOAT STRAIGHT ACROSS (perpendicular to the bank).

     Time to cross         t  =  d / v_b          <-- MINIMUM possible
     Drift downstream      x  =  v_r  x  t  =  v_r d / v_b
     Resultant speed          =  sqrt( v_b^2 + v_r^2 )
     Actual path length       =  sqrt( d^2 + x^2 )
```

### CASE B — cross by the SHORTEST PATH (land straight opposite)

```
              <---------------- v_r ---------------->   (river flow)

   far bank  ================================================
                              ^
                              |
                              |  resultant  (straight across)
                            d |
                     v_b   \  |
                        \     |
                          \   |
   near bank  =============\==*==========================
                            theta

   AIM THE BOAT UPSTREAM at an angle theta to the perpendicular, so that the
   upstream component of the boat's velocity CANCELS the river flow:

        v_b sin theta  =  v_r

  +-------------------------------------------------------------+
  |                                                             |
  |     sin theta  =  v_r / v_b                                 |
  |                                                             |
  |     Effective speed across  =  v_b cos theta                |
  |                             =  sqrt( v_b^2  -  v_r^2 )      |
  |                                                             |
  |                        d                    d               |
  |     Time to cross  =  ------------  =  -------------------  |
  |                        v_b cos theta    sqrt(v_b^2 - v_r^2) |
  |                                                             |
  +-------------------------------------------------------------+

  NOTE:  this is only possible if  v_b > v_r .
         If the river is faster than the boat, you CANNOT land straight opposite.
```

## WORKED EXAMPLE 15

**A river 100 m wide flows at 3 m/s. A boat can move at 5 m/s in still water.
(a) If the boat heads straight across, how long does it take and how far downstream
does it land? (b) In which direction must it head to land straight opposite, and how
long does that take?**

```
  GIVEN:  d = 100 m ,  v_r = 3 m/s ,  v_b = 5 m/s

  (a) SHORTEST TIME
        t  =  d / v_b  =  100 / 5  =  20 s
        drift  =  v_r x t  =  3 x 20  =  60 m downstream
        resultant speed = sqrt(25 + 9) = sqrt(34) = 5.83 m/s

  (b) SHORTEST PATH
        sin theta = v_r / v_b = 3 / 5 = 0.6   ->   theta = 36 deg 52 min
        (i.e. about 37 degrees UPSTREAM from the perpendicular)

        speed across = sqrt( 5^2 - 3^2 ) = sqrt( 25 - 9 ) = sqrt(16) = 4 m/s

        t = 100 / 4 = 25 s

  Note that crossing by the shortest PATH takes LONGER than the shortest TIME.
```

## 11.3 THE RAIN-AND-UMBRELLA PROBLEM

```
  Rain falls VERTICALLY with speed v_r .
  A man walks HORIZONTALLY with speed v_m .
  To the man, the rain appears to come from the FRONT and from above.

     v(rain relative to man)  =  v(rain)  -  v(man)
                              =  v(rain)  +  ( - v(man) )

  So: draw the rain's velocity DOWN, then add a vector of size v_m pointing
  BACKWARDS (opposite to the man's motion).

                  |  theta
                  | /
             v_r  |/                        - v_m
                  *  <---------------------------
                  |\
                  | \
                  |  \  v(relative)
                  |   \
                  v    v

  +-------------------------------------------------------------+
  |                                                             |
  |    | v(rel) |  =  sqrt( v_r^2  +  v_m^2 )                   |
  |                                                             |
  |                        v_m                                  |
  |    tan theta   =     -------      (theta from the VERTICAL) |
  |                        v_r                                  |
  |                                                             |
  |    The man must tilt his umbrella at angle theta from the    |
  |    vertical, IN THE DIRECTION HE IS WALKING (forward).      |
  |                                                             |
  +-------------------------------------------------------------+
```

## WORKED EXAMPLE 16

**Rain is falling vertically at 4 m/s. A man walks at 3 m/s. At what angle to the
vertical should he hold his umbrella, and what is the apparent speed of the rain?**

```
  GIVEN:  v_r = 4 m/s (down) ,  v_m = 3 m/s (horizontal)

  APPARENT SPEED
     | v(rel) |  =  sqrt( 4^2 + 3^2 )  =  sqrt( 16 + 9 )  =  sqrt(25)  =  5 m/s

  ANGLE
                     v_m       3
     tan theta  =   ------  = ---  =  0.75    ->    theta = 36 deg 52 min
                     v_r       4

  He must tilt the umbrella about 37 degrees from the vertical, FORWARDS
  (in the direction he is walking).
```

> **TRAP:** The umbrella tilts **forward**, into the direction of walking. Everyone's
> instinct says backwards. Get this the wrong way round and you lose the mark.

> **TRAP:** If a man walking at speed v feels the rain vertical, then the rain was
> **not** vertical to begin with — it had a horizontal component equal to v.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I draw a DIAGRAM for every projectile and vector question?
       (Diagrams alone carry 1 mark in most 4 and 8 mark questions.)

  [ ]  Did I write the FORMULA before substituting numbers?

  [ ]  Is theta in the parallelogram law the angle BETWEEN the vectors,
       taken with both tails at the same point?

  [ ]  Did I use the correct sign for g?
       (Up positive -> a = -g.  Down positive -> a = +g. Pick one and stay with it.)

  [ ]  In the projectile formulas, is my calculator in DEGREE mode?

  [ ]  Did I remember that at the top of a projectile only the VERTICAL
       velocity is zero, never the whole velocity?

  [ ]  For the horizontal projectile, did I set the initial VERTICAL
       velocity to ZERO?

  [ ]  Is omega in rad/s, not in rpm?

  [ ]  Did I write the UNIT after every numerical answer?
       (m, m/s, m/s^2, N, rad/s, s)

  [ ]  Did I state the DIRECTION as well as the magnitude wherever the
       answer is a vector?

  [ ]  Did I underline or box my final answers?

  [ ]  Did I attempt EVERY Section A question? All ten are compulsory.
```
