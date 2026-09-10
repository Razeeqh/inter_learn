# Motion in a Straight Line — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

Symbols used everywhere below:

```
  u  =  initial velocity        v  =  final velocity
  a  =  acceleration            t  =  time
  s  =  displacement            h  =  height
  g  =  9.8 m/s^2  (acceleration due to gravity)
  n  =  a whole number of seconds
```

---

# 1. DISTANCE AND DISPLACEMENT

```
  +---------------------------------------------------------------+
  |                                                               |
  |   Path length (distance)  =  total length of the actual path  |
  |                              SCALAR , always >= 0             |
  |                                                               |
  |   Displacement            =  x(final)  -  x(initial)          |
  |                              VECTOR , can be +ve, -ve, ZERO   |
  |                                                               |
  |   ALWAYS TRUE:    distance  >=  | displacement |              |
  |                                                               |
  +---------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `s = x2 - x1` | Displacement between two known positions |
| `distance = sum of all path segments` | The body changes direction |
| `distance = magnitude of displacement` | Straight line, no reversal of direction |

---

# 2. SPEED AND VELOCITY

```
                             total path length
   AVERAGE SPEED      =   -------------------------
                             total time taken


                             total displacement          x2 - x1
   AVERAGE VELOCITY   =   -------------------------  =  ---------
                             total time taken            t2 - t1


                                 delta x            dx
   INSTANTANEOUS       =  limit ---------    =     ----
   VELOCITY             dt -> 0  delta t             dt
```

## Special averages

```
  +--------------------------------------------------------------+
  |  EQUAL DISTANCES at speeds v1 and v2                         |
  |                                                              |
  |                          2 v1 v2                             |
  |     average speed  =  -------------      (harmonic mean)     |
  |                          v1 + v2                             |
  |                                                              |
  +--------------------------------------------------------------+
  |  EQUAL TIMES at speeds v1 and v2                             |
  |                                                              |
  |                          v1 + v2                             |
  |     average speed  =  -------------      (ordinary mean)     |
  |                             2                                |
  |                                                              |
  +--------------------------------------------------------------+
  |  THREE EQUAL DISTANCES at v1 , v2 , v3                       |
  |                                                              |
  |                              3                               |
  |     average speed  =  ------------------                     |
  |                        1     1     1                         |
  |                       ---  + ---  + ---                      |
  |                        v1    v2    v3                        |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `avg speed = total distance / total time` | Any speed question. ALWAYS safe. |
| `avg velocity = displacement / time` | The question says "velocity", not "speed" |
| `2 v1 v2 / (v1 + v2)` | "Half the journey at ... and half at ..." |
| `(v1 + v2)/2` | "For the first hour ... and the next hour ..." |
| `v = dx/dt` | Position is given as a function of t |

---

# 3. ACCELERATION

```
                                  v2 - v1        v - u
   AVERAGE ACCELERATION    =    ----------  =   -------
                                  t2 - t1          t


                                 dv        d^2 x
   INSTANTANEOUS ACCN      =    ----   =   -------
                                 dt         dt^2


                                     dv
   WHEN a IS A FUNCTION OF x   a = v ----
                                     dx
```

```
  +---------------------------+----------------------------------+
  |  v and a SAME sign        |  body is SPEEDING UP             |
  |  v and a OPPOSITE signs   |  body is SLOWING DOWN            |
  |                           |  (retardation / deceleration)    |
  |  a = 0                    |  uniform velocity                |
  +---------------------------+----------------------------------+
```

| Formula | When to use |
|---|---|
| `a = (v - u)/t` | Two velocities and a time are given |
| `a = dv/dt` | Velocity is given as a function of t |
| `a = d2x/dt2` | Position is given as a function of t |
| `a = v dv/dx` | Acceleration is given in terms of position x |

---

# 4. THE THREE EQUATIONS OF MOTION  *** memorise these ***

```
  +==================================================================+
  |                                                                  |
  |     1)      v    =    u   +   a t                                |
  |                                                                  |
  |     2)      s    =    u t   +   (1/2) a t^2                      |
  |                                                                  |
  |     3)      v^2  -  u^2   =   2 a s                              |
  |                                                                  |
  |                      +-         -+                               |
  |                      |   u + v   |                               |
  |     4)      s    =   | --------- |  x  t                         |
  |                      |     2     |                               |
  |                      +-         -+                               |
  |                                                                  |
  |     VALID ONLY WHEN a IS CONSTANT.                               |
  |                                                                  |
  +==================================================================+
```

## Which equation to pick

```
  +--------------------------+--------------------------+---------------+
  |  GIVEN                   |  ASKED                   |  USE          |
  +--------------------------+--------------------------+---------------+
  |  u , a , t               |  v                       |  eqn 1        |
  |  u , a , t               |  s                       |  eqn 2        |
  |  u , v , a               |  s   (no time given)     |  eqn 3        |
  |  u , v , t               |  s   (no accn given)     |  eqn 4        |
  |  u , v , t               |  a                       |  eqn 1        |
  |  u , a , s               |  v                       |  eqn 3        |
  +--------------------------+--------------------------+---------------+

  SHORTCUT:  the equation you need is the one that does NOT contain
             the quantity you were NOT given.
```

## If the body starts from rest (u = 0) the equations collapse

```
  +---------------------------------------------------+
  |     v    =    a t                                 |
  |                                                   |
  |     s    =    (1/2) a t^2                         |
  |                                                   |
  |     v^2  =    2 a s        ->   v = sqrt(2 a s)   |
  +---------------------------------------------------+
```

---

# 5. DISTANCE TRAVELLED IN THE nth SECOND

```
  +---------------------------------------------------------------+
  |                                a                              |
  |     s(nth)   =    u    +    ------- ( 2 n  -  1 )             |
  |                                2                              |
  |                                                               |
  |  This is the distance covered during the nth second ALONE,    |
  |  i.e. between t = (n-1) s and t = n s.                        |
  |                                                               |
  |  Unit: metre  (NOT metre per second).                         |
  +---------------------------------------------------------------+


  UNDER GRAVITY (dropped from rest, u = 0):

                             g
              h(nth)   =   ----- ( 2 n  -  1 )
                             2
```

## The two ratios worth memorising (body starting from rest)

```
  +----------------------------------+--------------------------------+
  |  Distances in 1st, 2nd, 3rd ...  |  1 : 3 : 5 : 7 : 9 ...         |
  |  seconds                         |  (ODD NUMBERS)                 |
  +----------------------------------+--------------------------------+
  |  Total distance after            |  1 : 4 : 9 : 16 : 25 ...       |
  |  1, 2, 3 ... seconds             |  (PERFECT SQUARES)             |
  +----------------------------------+--------------------------------+
```

| Formula | When to use |
|---|---|
| `s(n) = u + (a/2)(2n - 1)` | "Distance travelled in the 5th second" |
| `s = ut + (1/2)at^2` | "Distance travelled in 5 seconds" |
| `1 : 3 : 5 : 7` | Ratio question, body starts from rest |

---

# 6. GRAPHS — SLOPE AND AREA RULES  *** highest-value box in the file ***

```
  +===============================================================+
  |                                                               |
  |    GRAPH        SLOPE MEANS            AREA MEANS             |
  |   -------      --------------         -------------           |
  |                                                               |
  |    x - t        VELOCITY               (no meaning)           |
  |                                                               |
  |    v - t        ACCELERATION           DISPLACEMENT           |
  |                                                               |
  |    a - t        (rate of change        CHANGE IN VELOCITY     |
  |                  of accn, "jerk")      ( v - u )              |
  |                                                               |
  +===============================================================+
```

## Areas you will actually need

```
  Rectangle        area  =  length  x  breadth

  Triangle         area  =  (1/2)  x  base  x  height

                              1
  Trapezium        area  =  ----- ( sum of the two parallel sides ) x height
                              2
```

## What each graph shape means

```
  +--------------------------+----------------------------------------+
  |  x-t : horizontal line   |  body at REST                          |
  |  x-t : straight sloping  |  UNIFORM VELOCITY                      |
  |  x-t : parabola          |  UNIFORM ACCELERATION                  |
  |  x-t : steeper line      |  greater speed                         |
  +--------------------------+----------------------------------------+
  |  v-t : on the time axis  |  body at REST                          |
  |  v-t : horizontal line   |  UNIFORM VELOCITY , a = 0              |
  |  v-t : straight sloping  |  UNIFORM ACCELERATION                  |
  |  v-t : sloping downward  |  RETARDATION                           |
  |  v-t : curve             |  NON-uniform acceleration              |
  +--------------------------+----------------------------------------+
  |  a-t : on the time axis  |  a = 0 , uniform velocity              |
  |  a-t : horizontal line   |  UNIFORM ACCELERATION                  |
  +--------------------------+----------------------------------------+

  IMPOSSIBLE GRAPHS (a favourite objective question):
     - a VERTICAL line on an x-t graph   (infinite velocity)
     - a VERTICAL line on a  v-t graph   (infinite acceleration)
     - any graph that gives TWO positions at ONE instant of time
     - a path-length (distance) graph that DECREASES
```

---

# 7. MOTION UNDER GRAVITY

## 7A — Dropped from rest (free fall), downwards taken positive

```
  +---------------------------------------------------------------+
  |                                                               |
  |     v    =   g t                                              |
  |                                                               |
  |     h    =   (1/2) g t^2                                      |
  |                                                               |
  |     v^2  =   2 g h            ->     v  =  sqrt( 2 g h )      |
  |                                                               |
  |                                        +----------+           |
  |     time to fall a height h    t  = sqrt|  2 h / g |          |
  |                                        +----------+           |
  |                                                               |
  |                             g                                 |
  |     h(nth)   =           ------- ( 2 n - 1 )                  |
  |                             2                                 |
  |                                                               |
  +---------------------------------------------------------------+
```

## 7B — Thrown vertically upward with speed u, upwards taken positive

```
  +---------------------------------------------------------------+
  |                                                               |
  |     v    =   u  -  g t                                        |
  |                                                               |
  |     h    =   u t  -  (1/2) g t^2                              |
  |                                                               |
  |     v^2  =   u^2  -  2 g h                                    |
  |                                                               |
  |                             u^2                               |
  |     MAXIMUM HEIGHT    H  = -------                            |
  |                             2 g                               |
  |                                                               |
  |                              u                                |
  |     TIME OF ASCENT  t(up) = ---                               |
  |                              g                                |
  |                                                               |
  |     TIME OF DESCENT       =  t(up)      (EQUAL)               |
  |                                                               |
  |                             2 u                               |
  |     TIME OF FLIGHT    T  = -----                              |
  |                              g                                |
  |                                                               |
  |     RETURN SPEED at the throwing point  =  u  (downwards)     |
  |                                                               |
  |     Speed at the same height going up and coming down         |
  |     is the SAME.                                              |
  |                                                               |
  +---------------------------------------------------------------+
```

## 7C — Thrown DOWNWARD with initial speed u (from a height)

```
  +---------------------------------------------------+
  |     v    =   u  +  g t                            |
  |     h    =   u t  +  (1/2) g t^2                  |
  |     v^2  =   u^2  +  2 g h                        |
  +---------------------------------------------------+
```

## 7D — Thrown UP from a tower of height H (lands at the bottom)

```
  Taking UP as positive, the ground is at displacement  s = -H :

              -H   =   u t   -   (1/2) g t^2

  Solve this quadratic for t and take the POSITIVE root.

  Striking speed:      v  =  sqrt( u^2  +  2 g H )
```

| Formula | When to use |
|---|---|
| `h = (1/2)gt^2` | Stone dropped, time known, height asked |
| `v = sqrt(2gh)` | Height known, striking speed asked |
| `t = sqrt(2h/g)` | Height known, time of fall asked |
| `H = u^2/2g` | "Maximum height reached" |
| `t(up) = u/g` | "Time to reach maximum height" |
| `T = 2u/g` | "Total time of flight" / "time to return" |
| `v^2 = u^2 + 2gH` | Thrown from a tower, striking speed asked |

---

# 8. RELATIVE VELOCITY IN ONE DIMENSION

```
  +---------------------------------------------------------------+
  |                                                               |
  |     v(AB)   =   v(A)   -   v(B)                               |
  |                                                               |
  |     v(BA)   =   v(B)   -   v(A)   =   - v(AB)                 |
  |                                                               |
  |     Both must be measured in the SAME frame (the ground),     |
  |     WITH their signs.                                         |
  |                                                               |
  +---------------------------------------------------------------+


  +------------------------------+--------------------------------+
  |  SAME direction              |  relative speed = DIFFERENCE   |
  |  OPPOSITE directions         |  relative speed = SUM          |
  +------------------------------+--------------------------------+


  TIME TO MEET / OVERTAKE

                       relative displacement to be covered
       time    =   -------------------------------------------
                            relative velocity


  For two trains of lengths L1 and L2:

       crossing in OPPOSITE directions  ->  distance = L1 + L2 ,
                                            rel. velocity = v1 + v2

       OVERTAKING (same direction)      ->  distance = L1 + L2 ,
                                            rel. velocity = v1 - v2
```

## Boat and river (motion along the stream)

```
  +--------------------------------------------------+
  |  DOWNSTREAM speed   =   v(boat)  +  v(river)     |
  |  UPSTREAM   speed   =   v(boat)  -  v(river)     |
  +--------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `v(AB) = vA - vB` | "Velocity of A with respect to B" |
| `vA + vB` | Bodies approaching each other head-on |
| `vA - vB` | Overtaking, or moving the same way |
| `(L1 + L2)/(v1 - v2)` | Time for one train to overtake another |
| `(L1 + L2)/(v1 + v2)` | Time for two trains to cross each other |

---

# 9. STOPPING DISTANCE AND REACTION TIME

```
  +---------------------------------------------------------------+
  |                                v^2                            |
  |   BRAKING DISTANCE       d = --------      (a = retardation)  |
  |                                2 a                            |
  |                                                               |
  |   REACTION DISTANCE      d(r)  =  v  x  t(reaction)           |
  |                                                               |
  |                                             v^2               |
  |   TOTAL STOPPING DISTANCE  =  v t(r)   +  --------            |
  |                                             2 a               |
  |                                                               |
  |   BRAKING DISTANCE IS PROPORTIONAL TO v^2 :                   |
  |        double the speed  ->  4 times the distance             |
  |        triple the speed  ->  9 times the distance             |
  +---------------------------------------------------------------+
```

---

# 10. UNIT CONVERSIONS YOU WILL NEED EVERY TIME

```
  +----------------------------+-------------------------------------+
  |                                5                                 |
  |   km/h  ->  m/s            multiply by  ---   ( = 0.278 )        |
  |                                18                                |
  |                                                                  |
  |                                18                                |
  |   m/s   ->  km/h           multiply by  ---   ( = 3.6 )          |
  |                                 5                                |
  +----------------------------+-------------------------------------+

  Handy values:
      18 km/h  =   5 m/s
      36 km/h  =  10 m/s
      54 km/h  =  15 m/s
      72 km/h  =  20 m/s
      90 km/h  =  25 m/s
     108 km/h  =  30 m/s

  1 minute = 60 s      1 hour = 3600 s      1 km = 1000 m
```

---

# 11. DIMENSIONS AND UNITS OF EVERYTHING IN THIS CHAPTER

```
  +---------------------------+------------------+-------------------+
  |  QUANTITY                 |  SI UNIT         |  DIMENSIONS       |
  +---------------------------+------------------+-------------------+
  |  Distance / Displacement  |  metre (m)       |  [ L ]            |
  |  Speed / Velocity         |  m / s           |  [ L T^-1 ]       |
  |  Acceleration             |  m / s^2         |  [ L T^-2 ]       |
  |  Time                     |  second (s)      |  [ T ]            |
  |  g                        |  m / s^2         |  [ L T^-2 ]       |
  +---------------------------+------------------+-------------------+
```

---

# THE 10 FORMULAE TO WRITE ON YOUR PALM

```
   1.   v    =   u  +  a t

   2.   s    =   u t  +  (1/2) a t^2

   3.   v^2  -  u^2   =   2 a s

   4.   s(nth)  =   u  +  (a/2)(2n - 1)

   5.   average speed = total distance / total time
        average velocity = displacement / total time

   6.   SLOPE of x-t  =  velocity
        SLOPE of v-t  =  acceleration
        AREA  of v-t  =  DISPLACEMENT

   7.   Free fall:   h = (1/2) g t^2   and   v = sqrt(2 g h)

   8.   Thrown up:   H = u^2 / 2g  ,  t(up) = u/g  ,  T = 2u/g

   9.   v(AB)  =  v(A)  -  v(B)
        same direction -> subtract , opposite -> add

  10.   Stopping distance  =  v t(reaction)  +  v^2 / (2a)

  AND:  km/h -> m/s , multiply by 5/18
```
