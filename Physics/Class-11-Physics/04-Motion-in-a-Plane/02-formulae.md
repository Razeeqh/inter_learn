# Motion in a Plane — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

Throughout: **g = 9.8 m/s^2** (use **10 m/s^2** when the question says so).

---

# 1. VECTOR BASICS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   MAGNITUDE (2-D)     | A |  =  sqrt( Ax^2  +  Ay^2 )                |
  |                                                                      |
  |   MAGNITUDE (3-D)     | A |  =  sqrt( Ax^2  +  Ay^2  +  Az^2 )       |
  |                                                                      |
  |                                A                                     |
  |   UNIT VECTOR         A-hat = -----      and     A = | A | A-hat     |
  |                               | A |                                  |
  |                                                                      |
  |   POSITION VECTOR     r  =  x i  +  y j  +  z k                      |
  |                                                                      |
  |   DISPLACEMENT        dr =  r2 - r1                                  |
  |                          =  (x2-x1) i + (y2-y1) j + (z2-z1) k        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `\|A\| = sqrt(Ax^2 + Ay^2)` | Any time you are given a vector in i, j form and asked for its size |
| `A-hat = A / \|A\|` | "Find the unit vector along ..." |
| `dr = r2 - r1` | "Find the displacement from point 1 to point 2" |
| `cos^2 a + cos^2 b + cos^2 c = 1` | Direction-cosine questions in 3-D |

---

# 2. ADDITION AND SUBTRACTION OF VECTORS  *** CORE ***

```
  +======================================================================+
  |                                                                      |
  |   PARALLELOGRAM LAW  (theta = angle BETWEEN A and B)                 |
  |                                                                      |
  |        R  =  sqrt( A^2  +  B^2  +  2 A B cos theta )                 |
  |                                                                      |
  |                          B sin theta                                 |
  |        tan alpha   =  ---------------------     (alpha measured      |
  |                        A  +  B cos theta         from A)             |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |   SUBTRACTION       A - B  =  A + ( -B )                             |
  |                                                                      |
  |      | A - B |  =  sqrt( A^2  +  B^2  -  2 A B cos theta )           |
  |                                                                      |
  |                          B sin theta                                 |
  |        tan alpha   =  ---------------------                          |
  |                        A  -  B cos theta                             |
  |                                                                      |
  +======================================================================+
```

## Special cases — pure marks

```
  +-------------------+---------------------------+----------------------+
  |  theta            |  R                        |  NOTE                |
  +-------------------+---------------------------+----------------------+
  |   0 deg           |  A + B                    |  MAXIMUM             |
  |  60 deg           |  sqrt(A^2 + B^2 + AB)     |  cos 60 = 1/2        |
  |  90 deg           |  sqrt(A^2 + B^2)          |  tan alpha = B/A     |
  | 120 deg           |  sqrt(A^2 + B^2 - AB)     |  cos 120 = -1/2      |
  | 180 deg           |  | A - B |                |  MINIMUM             |
  +-------------------+---------------------------+----------------------+

        | A - B |   <=   R   <=   A + B          ALWAYS TRUE
```

## Two EQUAL vectors of magnitude A at angle theta

```
  +---------------------------------------------------------------+
  |                                                               |
  |    | A + B |  =  2 A cos ( theta / 2 )   , bisects the angle  |
  |                                                               |
  |    | A - B |  =  2 A sin ( theta / 2 )                        |
  |                                                               |
  +---------------------------------------------------------------+

  Useful consequences:
     R = A            ->  theta = 120 degrees
     R = A sqrt(2)    ->  theta =  90 degrees
     R = A sqrt(3)    ->  theta =  60 degrees
     R = 2A           ->  theta =   0 degrees
     R = 0            ->  theta = 180 degrees
```

| Formula | When to use |
|---|---|
| `R = sqrt(A^2 + B^2 + 2AB cos theta)` | Resultant of exactly TWO vectors at a known angle |
| `tan alpha = B sin theta / (A + B cos theta)` | The DIRECTION part of the same question |
| `R = 2A cos(theta/2)` | Both vectors have the same magnitude |
| `\|A+B\| = \|A-B\|` | Instantly means theta = 90 degrees |
| `R_max = A+B`, `R_min = \|A-B\|` | "Find the maximum / minimum resultant" |

---

# 3. RESOLUTION INTO COMPONENTS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   2-D  (theta measured from the +x axis)                             |
  |                                                                      |
  |        Ax  =  A cos theta            Ay  =  A sin theta              |
  |                                                                      |
  |        A   =  Ax i  +  Ay j                                          |
  |                                                                      |
  |        A   =  sqrt( Ax^2 + Ay^2 )       tan theta  =  Ay / Ax        |
  |                                                                      |
  +----------------------------------------------------------------------+
  |                                                                      |
  |   3-D                                                                |
  |                                                                      |
  |        A  =  Ax i  +  Ay j  +  Az k                                  |
  |                                                                      |
  |        cos alpha = Ax/A ,  cos beta = Ay/A ,  cos gamma = Az/A       |
  |                                                                      |
  |        cos^2 alpha  +  cos^2 beta  +  cos^2 gamma  =  1              |
  |                                                                      |
  +----------------------------------------------------------------------+
  |                                                                      |
  |   ADDING BY COMPONENTS (any number of vectors)                       |
  |                                                                      |
  |        Rx = sum of all x-components                                  |
  |        Ry = sum of all y-components                                  |
  |                                                                      |
  |        R  = sqrt( Rx^2 + Ry^2 )        tan theta = Ry / Rx           |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 4. DOT AND CROSS PRODUCTS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   DOT     A . B  =  A B cos theta  =  Ax Bx + Ay By + Az Bz          |
  |           result is a SCALAR                                         |
  |                                                                      |
  |           A . B = 0  ->  PERPENDICULAR                               |
  |                                                                      |
  |                              A . B                                   |
  |           cos theta   =    ----------                                |
  |                             | A || B |                               |
  |                                                                      |
  +----------------------------------------------------------------------+
  |                                                                      |
  |   CROSS   A x B  =  A B sin theta  n-hat                             |
  |           result is a VECTOR, perpendicular to both                  |
  |                                                                      |
  |                     | i    j    k  |                                 |
  |           A x B  =  | Ax   Ay   Az |                                 |
  |                     | Bx   By   Bz |                                 |
  |                                                                      |
  |           A x B = 0  ->  PARALLEL                                    |
  |                                                                      |
  |           | A x B | = area of the parallelogram with sides A and B   |
  |                                                                      |
  +----------------------------------------------------------------------+

     i . i = j . j = k . k = 1          i x j = k    j x k = i    k x i = j
     i . j = j . k = k . i = 0          j x i = -k   k x j = -i   i x k = -j
```

| Formula | When to use |
|---|---|
| `A . B = 0` | Prove two vectors are perpendicular |
| `A x B = 0` | Prove two vectors are parallel |
| `W = F . s` | Work done by a constant force |
| `T = r x F` | Torque (comes back in rotation) |

---

# 5. MOTION IN A PLANE — GENERAL

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |             dr                       dv        d2r                   |
  |      v  =  ----             a  =    ----  =   -----                  |
  |             dt                       dt        dt2                   |
  |                                                                      |
  |      CONSTANT ACCELERATION (vector form):                            |
  |                                                                      |
  |            v   =   u   +   a t                                       |
  |                                                                      |
  |            r   =   r0  +  u t  +  (1/2) a t^2                        |
  |                                                                      |
  |      Split into components — SOLVE x AND y SEPARATELY:               |
  |                                                                      |
  |         vx = ux + ax t            vy = uy + ay t                     |
  |         x  = ux t + (1/2)ax t^2   y  = uy t + (1/2)ay t^2            |
  |         vx^2 = ux^2 + 2 ax x      vy^2 = uy^2 + 2 ay y               |
  |                                                                      |
  |      THE ONLY THING SHARED BY BOTH AXES IS THE TIME t.               |
  |                                                                      |
  +----------------------------------------------------------------------+
```

> `v^2 = u^2 + 2as` has **no vector form**. Use it one axis at a time only.

---

# 6. PROJECTILE FIRED AT AN ANGLE  *** THE 8-MARK BOX ***

```
  +======================================================================+
  |                                                                      |
  |   ux = u cos theta   (constant)        ax = 0                        |
  |   uy = u sin theta                     ay = -g                       |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |   EQUATION OF TRAJECTORY (a PARABOLA)                                |
  |                                                                      |
  |                                     g                                |
  |      y  =  ( tan theta ) x   -   ---------------------  x^2          |
  |                                   2 u^2 cos^2 theta                  |
  |                                                                      |
  |      also written   y = x tan theta ( 1  -  x / R )                  |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |                        2 u sin theta                                 |
  |   TIME OF FLIGHT   T = ----------------                              |
  |                              g                                       |
  |                                                                      |
  |   TIME TO TOP        = T / 2  =  u sin theta / g                     |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |                        u^2 sin^2 theta                               |
  |   MAX HEIGHT       H = -------------------   =  (1/8) g T^2          |
  |                              2 g                                     |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |                        u^2 sin 2 theta                               |
  |   RANGE            R = -------------------  =  ( u cos theta ) T     |
  |                              g                                       |
  |                                                                      |
  |                                                    u^2               |
  |   MAX RANGE at theta = 45 degrees :     R(max) = -----               |
  |                                                    g                 |
  |                                                                      |
  +======================================================================+
```

## The handy relations examiners love

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   theta  and  ( 90 - theta )  give the SAME range                   |
  |                                                                     |
  |   H / R   =   ( tan theta ) / 4        ->    tan theta = 4H / R     |
  |                                                                     |
  |   At theta = 45 deg :   H  =  R(max) / 4                            |
  |                                                                     |
  |   T1 x T2  =  2 R / g       (for the two complementary angles)      |
  |                                                                     |
  |   R  =  4 H / tan theta                                             |
  |                                                                     |
  |   H(max, when theta = 90)  =  u^2 / 2g                              |
  |                                                                     |
  |   For R = H :   tan theta = 4   ->  theta = 76 degrees approx.      |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Velocity at any time t

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     vx  =  u cos theta                                              |
  |     vy  =  u sin theta  -  g t                                      |
  |                                                                     |
  |     v   =  sqrt( u^2  -  2 u g t sin theta  +  g^2 t^2 )            |
  |                                                                     |
  |                     u sin theta  -  g t                             |
  |     tan beta  =    ----------------------                           |
  |                        u cos theta                                  |
  |                                                                     |
  |     Speed on landing = u   (same as launch), at angle theta below   |
  |     the horizontal.                                                 |
  |                                                                     |
  |     At the TOP:  v = u cos theta  (NOT zero),  a = g downward       |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `T = 2u sin theta / g` | "Time of flight", "time in air", "how long before it lands" |
| `H = u^2 sin^2 theta / 2g` | "Maximum height", "highest point reached" |
| `R = u^2 sin 2theta / g` | "Horizontal range", "how far does it land" |
| `R_max = u^2/g` | "Maximum range", the angle is then 45 degrees |
| `tan theta = 4H/R` | Given H and R, find the angle of projection |
| `y = x tan theta - g x^2/(2u^2cos^2 theta)` | "Show the path is a parabola"; also to find y at a given x |
| `v_top = u cos theta` | Speed / KE at the highest point |

---

# 7. HORIZONTAL PROJECTILE (FROM A HEIGHT h)

```
  +======================================================================+
  |                                                                      |
  |   ux = u  (the launch speed)      uy = 0     <-- THE KEY DIFFERENCE  |
  |   ax = 0                          ay = g     (down taken positive)   |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |                          g                                           |
  |   TRAJECTORY     y  =  --------  x^2         (half a PARABOLA)       |
  |                         2 u^2                                        |
  |                                                                      |
  |   TIME OF        T  =  sqrt( 2 h / g )       independent of u        |
  |   FLIGHT                                                             |
  |                                                                      |
  |   RANGE          R  =  u  sqrt( 2 h / g )    =  u T                  |
  |                                                                      |
  |   VELOCITY ON    v  =  sqrt( u^2  +  2 g h )                         |
  |   LANDING                                                            |
  |                                                                      |
  |                              sqrt( 2 g h )                           |
  |                  tan beta = ---------------   (below the horizontal) |
  |                                    u                                 |
  |                                                                      |
  +======================================================================+
```

| Formula | When to use |
|---|---|
| `T = sqrt(2h/g)` | Bomb from a plane, ball off a table, stone off a cliff |
| `R = u sqrt(2h/g)` | "How far from the base does it land" |
| `v = sqrt(u^2 + 2gh)` | "With what speed does it strike the ground" |

---

# 8. UNIFORM CIRCULAR MOTION

```
  +======================================================================+
  |                                                                      |
  |   ANGULAR DISPLACEMENT     theta  =  s / r          (radian)         |
  |                                                                      |
  |   ANGULAR VELOCITY         omega  =  d theta / dt   (rad/s)          |
  |                                                                      |
  |   ANGULAR ACCELERATION     alpha  =  d omega / dt   (rad/s^2)        |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |   LINK BETWEEN LINEAR AND ANGULAR                                    |
  |                                                                      |
  |        s = r theta        v = r omega        a_t = r alpha           |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |   PERIOD AND FREQUENCY                                               |
  |                                                                      |
  |        T  =  2 pi r / v  =  2 pi / omega                             |
  |                                                                      |
  |        n  =  1 / T  =  omega / ( 2 pi )                              |
  |                                                                      |
  |        omega  =  2 pi n  =  2 pi / T                                 |
  |                                                                      |
  |        from rpm:   omega  =  2 pi N / 60                             |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |   CENTRIPETAL ACCELERATION  (always towards the CENTRE)              |
  |                                                                      |
  |            v^2                        4 pi^2 r                       |
  |    a_c =  -----  =  r omega^2  =  v omega  =  ---------              |
  |             r                                    T^2                 |
  |                                                                      |
  |        =  4 pi^2 n^2 r                                               |
  |                                                                      |
  |   CENTRIPETAL FORCE     F  =  m v^2 / r  =  m r omega^2              |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |   NON-UNIFORM CIRCULAR MOTION                                        |
  |                                                                      |
  |        a_r  =  v^2 / r        (changes the DIRECTION of v)           |
  |        a_t  =  dv / dt        (changes the MAGNITUDE of v)           |
  |                                                                      |
  |        a    =  sqrt( a_r^2  +  a_t^2 )                               |
  |                                                                      |
  |        tan phi  =  a_t / a_r                                         |
  |                                                                      |
  +======================================================================+
```

## Angular equations of motion (constant alpha) — the exact mirrors of Chapter 3

```
  +---------------------------+---------------------------------+
  |  LINEAR                   |  ANGULAR                        |
  +---------------------------+---------------------------------+
  |  v = u + a t              |  w = w0 + alpha t               |
  |  s = u t + (1/2) a t^2    |  theta = w0 t + (1/2) alpha t^2 |
  |  v^2 = u^2 + 2 a s        |  w^2 = w0^2 + 2 alpha theta     |
  +---------------------------+---------------------------------+
       (w is written for omega)
```

| Formula | When to use |
|---|---|
| `v = r omega` | Converting between linear speed and angular speed |
| `a_c = v^2/r` | Speed and radius are given |
| `a_c = r omega^2` | Angular speed and radius are given |
| `omega = 2 pi n` | Frequency in rev/s is given |
| `omega = 2 pi N/60` | Speed given in rpm |
| `a = sqrt(a_r^2 + a_t^2)` | Speed of circular motion is changing |

---

# 9. RELATIVE VELOCITY IN TWO DIMENSIONS

```
  +======================================================================+
  |                                                                      |
  |    v(AB)  =  v(A)  -  v(B)              v(BA) = - v(AB)              |
  |                                                                      |
  |    | v(AB) | = sqrt( vA^2 + vB^2 - 2 vA vB cos theta )               |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |    RIVER BOAT — width d , river v_r , boat v_b                       |
  |                                                                      |
  |    SHORTEST TIME  (head straight across)                             |
  |         t = d / v_b            drift = v_r d / v_b                   |
  |         resultant speed = sqrt( v_b^2 + v_r^2 )                      |
  |                                                                      |
  |    SHORTEST PATH  (land directly opposite)                           |
  |         sin theta = v_r / v_b      (theta upstream of the normal)    |
  |                             d                                        |
  |         t  =  --------------------------                             |
  |                sqrt( v_b^2  -  v_r^2 )                               |
  |         requires  v_b > v_r                                          |
  |                                                                      |
  +======================================================================+
  |                                                                      |
  |    RAIN AND UMBRELLA — rain v_r vertical, man v_m horizontal         |
  |                                                                      |
  |         | v(rel) |  =  sqrt( v_r^2  +  v_m^2 )                       |
  |                                                                      |
  |         tan theta  =  v_m / v_r     (theta from the VERTICAL)        |
  |                                                                      |
  |         TILT THE UMBRELLA FORWARD, in the direction of walking.      |
  |                                                                      |
  +======================================================================+
```

---

# 10. HANDY TRIGONOMETRY YOU WILL NEED

```
  +---------+--------+--------+--------+--------+--------+
  | angle   |   0    |   30   |   45   |   60   |   90   |
  +---------+--------+--------+--------+--------+--------+
  |  sin    |   0    |  0.5   | 0.707  | 0.866  |   1    |
  |  cos    |   1    | 0.866  | 0.707  |  0.5   |   0    |
  |  tan    |   0    | 0.577  |   1    | 1.732  |  inf   |
  +---------+--------+--------+--------+--------+--------+

  sin ( 180 - x )  =  sin x            cos ( 180 - x )  =  - cos x
  sin 2x  =  2 sin x cos x             cos 2x = 2 cos^2 x - 1
  1 + cos x  =  2 cos^2 ( x / 2 )      1 - cos x = 2 sin^2 ( x / 2 )
  sin^2 x + cos^2 x  =  1
```

---

# 11. UNITS AND DIMENSIONS FROM THIS CHAPTER

```
  +---------------------------+----------------+---------------------+
  |  QUANTITY                 |  SI UNIT       |  DIMENSIONS         |
  +---------------------------+----------------+---------------------+
  |  Displacement             |  m             |  [ L ]              |
  |  Velocity                 |  m / s         |  [ L T^-1 ]         |
  |  Acceleration             |  m / s^2       |  [ L T^-2 ]         |
  |  Angular displacement     |  radian        |  dimensionless      |
  |  Angular velocity omega   |  rad / s       |  [ T^-1 ]           |
  |  Angular acceleration     |  rad / s^2     |  [ T^-2 ]           |
  |  Time period T            |  s             |  [ T ]              |
  |  Frequency n              |  hertz (Hz)    |  [ T^-1 ]           |
  |  Centripetal acceleration |  m / s^2       |  [ L T^-2 ]         |
  |  Centripetal force        |  newton (N)    |  [ M L T^-2 ]       |
  +---------------------------+----------------+---------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+---------------------------------------------------------------+
  |  1 |  R = sqrt( A^2 + B^2 + 2 A B cos theta )                      |
  +----+---------------------------------------------------------------+
  |  2 |  tan alpha = B sin theta / ( A + B cos theta )                |
  +----+---------------------------------------------------------------+
  |  3 |  Ax = A cos theta   ,   Ay = A sin theta                      |
  +----+---------------------------------------------------------------+
  |  4 |  T = 2 u sin theta / g                                        |
  +----+---------------------------------------------------------------+
  |  5 |  H = u^2 sin^2 theta / ( 2 g )                                |
  +----+---------------------------------------------------------------+
  |  6 |  R = u^2 sin 2 theta / g          R(max) = u^2 / g at 45 deg  |
  +----+---------------------------------------------------------------+
  |  7 |  y = x tan theta  -  g x^2 / ( 2 u^2 cos^2 theta )            |
  +----+---------------------------------------------------------------+
  |  8 |  T = sqrt( 2 h / g )     ,     R = u sqrt( 2 h / g )          |
  +----+---------------------------------------------------------------+
  |  9 |  v = r omega                                                  |
  +----+---------------------------------------------------------------+
  | 10 |  a_c = v^2 / r  =  r omega^2                                  |
  +----+---------------------------------------------------------------+
  | 11 |  omega = 2 pi n = 2 pi / T                                    |
  +----+---------------------------------------------------------------+
  | 12 |  v(AB) = v(A) - v(B)                                          |
  +----+---------------------------------------------------------------+
```
