# Motion in a Straight Line — Concepts Explained Simply

This is the first chapter where you actually calculate things. Do not panic.
There are only three equations, and every numerical in the chapter uses one
of them.

Take `g = 9.8 m/s^2` unless the question says otherwise. Some papers use
`10 m/s^2` to make the arithmetic easy — always use whatever the question gives.

---

# TOPIC 1 — Rest, motion, frame of reference and point object

## Rest and motion

```
  AT REST   -  the position of the body does NOT change with time,
               with respect to its surroundings.

  IN MOTION -  the position of the body DOES change with time,
               with respect to its surroundings.
```

## Rest and motion are RELATIVE

You are sitting in a moving bus.

```
  With respect to the SEAT      ->  you are AT REST
  With respect to the ROAD      ->  you are IN MOTION

  Both statements are TRUE at the same time.
```

That is why we must always say **"with respect to what?"**. Nothing is
absolutely at rest and nothing is absolutely in motion.

## Frame of reference

```
  +---------------------------------------------------------------+
  |  A FRAME OF REFERENCE is a coordinate system (x, y, z) fixed  |
  |  to some body, together with a CLOCK to measure time.         |
  +---------------------------------------------------------------+
```

```
        y
        |
        |
        |
        O------------ x            O = ORIGIN
       /                           the point you measure everything from
      /
     z                             plus a clock at O
```

For motion in a straight line, we only need **one axis** — usually the x-axis.

```
       -x                    O                    +x
   <----|-----|-----|-----|---+---|-----|-----|-----|---->
       -4    -3    -2    -1   0   1     2     3     4     metres

   Position to the RIGHT of O  ->  POSITIVE
   Position to the LEFT  of O  ->  NEGATIVE
```

## Point object (particle)

```
  A body is treated as a POINT OBJECT when its SIZE is very small
  compared with the DISTANCE it travels.

  Examples:
     - A car travelling from Vijayawada to Hyderabad  ->  point object
       (car is 4 m long, journey is 270 km)
     - The Earth going round the Sun                  ->  point object
     - A car being parked in a small garage           ->  NOT a point object
```

## Types of motion

```
  +----------------+----------------------------+---------------------+
  |  1 DIMENSION   |  motion along a straight    |  car on a straight  |
  |  (rectilinear) |  line                       |  road, free fall    |
  +----------------+----------------------------+---------------------+
  |  2 DIMENSIONS  |  motion in a plane          |  projectile,        |
  |                |                             |  circular motion    |
  +----------------+----------------------------+---------------------+
  |  3 DIMENSIONS  |  motion in space            |  flying bird,       |
  |                |                             |  gas molecule       |
  +----------------+----------------------------+---------------------+
```

**This whole chapter is about the FIRST row only.**

> **TRAP:** In one-dimensional motion there are only TWO possible directions.
> So we do not need arrows for vectors — a **plus or minus sign is enough**.
> Forgetting the minus sign is the number-one reason students lose marks here.

## WORKED EXAMPLE 1

**A passenger sitting in a moving train says the trees are running backwards.
Is he wrong?**

```
  STEP 1   Identify the frame the passenger is using.
           He is using the TRAIN as his frame of reference.

  STEP 2   In the train's frame, the train is at rest and the ground
           (with the trees) moves backwards.

  STEP 3   In the ground frame, the trees are at rest and the train
           moves forward.

  ANSWER   He is NOT wrong. Both descriptions are correct because
           motion is RELATIVE to the chosen frame of reference.
```

---

# TOPIC 2 — Path length (distance) and displacement

```
  +---------------------------------------------------------------------+
  |  PATH LENGTH (DISTANCE)                                             |
  |     The TOTAL length of the actual path travelled.                  |
  |     SCALAR.  Always POSITIVE (or zero).  Never decreases.           |
  |                                                                     |
  |  DISPLACEMENT                                                       |
  |     The SHORTEST distance from the initial position to the final    |
  |     position, WITH DIRECTION.                                       |
  |     VECTOR.  Can be positive, negative or ZERO.                     |
  |                                                                     |
  |            displacement  =  x(final)  -  x(initial)                 |
  +---------------------------------------------------------------------+
```

## Picture it

```
   A man walks from O to B, then comes back to A.

        O          A                          B
        +----------+--------------------------+
        0          4 m                       10 m

   Forward journey  O -> B  =  10 m
   Return journey   B -> A  =   6 m

   PATH LENGTH   =  10 + 6           =  16 m
   DISPLACEMENT  =  x(final) - x(initial)
                 =  4 - 0            =  +4 m   (towards B)
```

## The famous zero-displacement case

```
   A man walks from O to B and comes ALL THE WAY BACK to O.

        O                                     B
        +-------------------------------------+
        0                                    10 m
             ------------->  10 m
             <-------------  10 m

   PATH LENGTH   =  10 + 10  =  20 m
   DISPLACEMENT  =  0 - 0    =  ZERO
```

**Why can displacement be zero while distance is not?**
Because displacement only cares about **where you started and where you
ended**. It does not care what happened in between. If you end where you
began, displacement is zero.

## The comparison table (learn this — it is a 2-mark question)

```
  +----------------------------+--------------------------------------+
  |  DISTANCE (path length)    |  DISPLACEMENT                        |
  +----------------------------+--------------------------------------+
  |  Scalar                    |  Vector                              |
  |  Always positive           |  Can be +ve, -ve or zero             |
  |  Depends on the PATH taken |  Depends only on START and END points|
  |  Never decreases with time |  Can decrease                        |
  |  Unit: metre               |  Unit: metre                         |
  |  Dimensions: [ L ]         |  Dimensions: [ L ]                   |
  +----------------------------+--------------------------------------+

  ALWAYS TRUE:      distance  >=  | displacement |

  They are EQUAL only when the body moves in a straight line
  WITHOUT changing direction.
```

## WORKED EXAMPLE 2

**A boy runs 300 m north, then 400 m south in a straight line. Find the
distance and the displacement.**

```
  STEP 1   Choose north as POSITIVE.

  STEP 2   Distance = total path length
                    = 300 + 400  =  700 m

  STEP 3   Displacement = sum of signed movements
                        = (+300) + (-400)
                        =  -100 m

  ANSWER   Distance = 700 m
           Displacement = 100 m towards SOUTH
```

> **TRAP:** Never write displacement as "100 m" alone. In one dimension you
> must give the **sign or the direction**, otherwise you lose half the mark.

---

# TOPIC 3 — Scalars and vectors in this chapter

```
  +--------------------------------+--------------------------------+
  |  SCALARS (magnitude only)      |  VECTORS (magnitude + direction)|
  +--------------------------------+--------------------------------+
  |  Distance / path length        |  Displacement                  |
  |  Speed                         |  Velocity                      |
  |  Time                          |  Acceleration                  |
  |  Mass                          |  Force                         |
  +--------------------------------+--------------------------------+
```

```
  In ONE dimension, a vector is written with just a SIGN:

        +5 m/s   means  5 m/s  to the RIGHT (or up, or east)
        -5 m/s   means  5 m/s  to the LEFT  (or down, or west)
```

---

# TOPIC 4 — Speed and velocity

## Average speed and average velocity

```
  +--------------------------------------------------------------------+
  |                            total path length                       |
  |     AVERAGE SPEED     =  ------------------------                  |
  |                              total time taken                      |
  |                                                                    |
  |                            total displacement       x2 - x1        |
  |     AVERAGE VELOCITY  =  ----------------------  =  ---------      |
  |                              total time taken        t2 - t1       |
  |                                                                    |
  |     Both have unit  m/s   and dimensions  [ L T^-1 ]               |
  +--------------------------------------------------------------------+
```

```
  AVERAGE SPEED     ->  SCALAR , never negative , never zero unless
                                 the body never moved
  AVERAGE VELOCITY  ->  VECTOR , can be positive, negative or ZERO
```

## WORKED EXAMPLE 3

**A car goes from A to B, a distance of 60 km, in 1 hour, and returns from B
to A in 2 hours. Find (i) average speed (ii) average velocity for the whole
trip.**

```
  STEP 1   Total path length  =  60 + 60  =  120 km
           Total time         =  1 + 2    =  3 h

  STEP 2   Average speed

                        120 km
             =        ----------      =   40 km/h
                         3 h

  STEP 3   The car ends where it started, so total displacement = 0.

  STEP 4   Average velocity

                          0
             =        --------        =   ZERO
                        3 h

  ANSWER   Average speed = 40 km/h ,  Average velocity = 0
```

> **TRAP:** Average speed is NOT the average of the two speeds.
> Speed going = 60 km/h, speed returning = 30 km/h.
> The plain average would be 45 km/h — **WRONG**.
> Always use total distance divided by total time.

## The "equal distances" shortcut

```
  If a body covers the SAME DISTANCE at speed v1 and then at speed v2,

                                2 v1 v2
        average speed   =    -------------      (HARMONIC mean)
                                v1 + v2

  Check with the example above:   2(60)(30) / (60 + 30)
                                = 3600 / 90  =  40 km/h    correct.


  If a body travels for EQUAL TIMES at v1 and v2,

                                v1 + v2
        average speed   =    -------------      (ordinary mean)
                                   2
```

## Instantaneous velocity

```
  INSTANTANEOUS VELOCITY  =  the velocity at ONE PARTICULAR INSTANT
                             (this is what a speedometer shows,
                              except a speedometer shows speed)
```

```
  Take the average velocity over a smaller and smaller time interval,
  and shrink that interval down to zero:

                              delta x           dx
        v   =     limit     ----------    =    ----
               delta t -> 0   delta t           dt

  In words:  velocity is the RATE OF CHANGE OF POSITION,
             or the DERIVATIVE of x with respect to t.
```

```
  GRAPHICAL MEANING:

     x |                        the SLOPE of the TANGENT drawn at a
       |                 . P    point P on the x-t graph gives the
       |             .  /       INSTANTANEOUS VELOCITY at that instant.
       |          . /
       |       ./
       |    .  /
       | . /
       +---------------- t

  Magnitude of instantaneous velocity  =  instantaneous SPEED   (always).
  This is why a speedometer reading and the size of the velocity agree.
```

## WORKED EXAMPLE 4

**The position of a particle is x = 3t^2 + 2t + 5 (x in metres, t in seconds).
Find the velocity at t = 2 s.**

```
  STEP 1   Velocity is the derivative of x with respect to t.

              dx
        v  = ----  =  6t  +  2
              dt

  STEP 2   Put t = 2:

        v  =  6(2) + 2  =  12 + 2  =  14 m/s

  ANSWER   v = 14 m/s
```

---

# TOPIC 5 — Acceleration

```
  +--------------------------------------------------------------------+
  |                              change in velocity     v2 - v1        |
  |   AVERAGE ACCELERATION   =  -------------------  =  ---------      |
  |                                time taken            t2 - t1       |
  |                                                                    |
  |                                    dv        d^2 x                 |
  |   INSTANTANEOUS ACCELERATION  =   ----   =   -------               |
  |                                    dt         dt^2                 |
  |                                                                    |
  |   Unit: m/s^2       Dimensions: [ L T^-2 ]      VECTOR             |
  +--------------------------------------------------------------------+
```

## What the sign of acceleration means

```
  +--------------------------+-------------------------+----------------+
  |  velocity v              |  acceleration a         |  RESULT        |
  +--------------------------+-------------------------+----------------+
  |  positive                |  positive               |  speeding up   |
  |  positive                |  negative               |  slowing down  |
  |  negative                |  negative               |  speeding up   |
  |                          |                         |  (in -ve dirn) |
  |  negative                |  positive               |  slowing down  |
  +--------------------------+-------------------------+----------------+

  RULE:   v and a have the SAME sign   ->  SPEEDING UP
          v and a have OPPOSITE signs  ->  SLOWING DOWN (retardation)
```

**Retardation (deceleration)** is simply negative acceleration — acceleration
opposite in direction to the velocity.

## Uniform and non-uniform motion

```
  UNIFORM MOTION       -  equal displacements in equal intervals of time
                       -  velocity is CONSTANT , acceleration = 0
                       -  x-t graph is a STRAIGHT LINE

  NON-UNIFORM MOTION   -  unequal displacements in equal intervals
                       -  velocity changes , acceleration is NOT zero
                       -  x-t graph is a CURVE

  UNIFORMLY ACCELERATED MOTION
                       -  acceleration is CONSTANT in size AND direction
                       -  ONLY here can you use the 3 equations of motion
```

## The famous "zero velocity but non-zero acceleration" question

```
  Throw a ball straight up.  At the TOPMOST point:

              *   <-- v = 0  here (it stops for an instant)
             / \
            /   \        but  a = g = 9.8 m/s^2  DOWNWARDS,
           /     \            all the time, even at the top.
          /       \
         o         o

  ANSWER:  YES, a body CAN have zero velocity and non-zero acceleration.
           Example: a ball at the highest point of its vertical throw.
```

> **TRAP:** Students write "at the top, velocity = 0, so acceleration = 0".
> Completely wrong. Gravity never switches off. If a were zero at the top,
> the ball would hang in the air forever.

## WORKED EXAMPLE 5

**A car moving at 20 m/s is braked and stops in 5 s. Find the acceleration.**

```
  STEP 1   u = 20 m/s ,  v = 0 ,  t = 5 s

  STEP 2   Use   v = u + at

               0  =  20  +  a(5)

  STEP 3       5a  =  -20

                a  =  -4 m/s^2

  ANSWER   a = -4 m/s^2 , i.e. a RETARDATION of 4 m/s^2.
```

---

# TOPIC 6 — Position-time (x-t) graphs

```
  +-------------------------------------------------------------+
  |   SLOPE  of an  x-t  graph   =   VELOCITY                   |
  +-------------------------------------------------------------+
```

## The four graphs you MUST be able to draw

```
  (1) BODY AT REST                     (2) UNIFORM VELOCITY (positive)

   x |                                  x |               /
  (m)|                                 (m)|             /
     |                                    |           /
   5 |-------------------                 |         /
     |                                    |       /
     |                                    |     /
     |                                    |   /
   0 +------------------- t (s)         0 +-/---------------- t (s)

   Slope = 0     ->  v = 0             Slope = constant, positive
   Position never changes              Equal distances in equal times


  (3) UNIFORM VELOCITY (negative)      (4) UNIFORM ACCELERATION

   x |\                                 x |                      .
  (m)|  \                              (m)|                   .
     |    \                               |                .
     |      \                             |            .
     |        \                           |        .
     |          \                         |    .
   0 +------------\------ t (s)         0 +.------------------ t (s)

   Slope = constant, negative          A PARABOLA:  x is prop. to t^2
   Body moves backwards                Slope keeps INCREASING -> v increases
```

## Body thrown vertically upward — the x-t graph

```
   height
     x |             ___
   (m) |          ../   \..            <-- highest point, slope = 0
       |        ./         \.
       |      ./             \.
       |    ./                 \.
       |  ./                     \.
     0 +./-------------------------\.--------- t (s)
       0        t(up)          2 t(up)

   It is a PARABOLA opening DOWNWARDS.
   Slope starts POSITIVE (going up), becomes ZERO at the top,
   then becomes NEGATIVE (coming down).
```

## Reading an x-t graph

```
  +----------------------------------+------------------------------+
  |  WHAT YOU SEE                    |  WHAT IT MEANS               |
  +----------------------------------+------------------------------+
  |  Horizontal line                 |  body at rest                |
  |  Straight sloping line           |  uniform velocity            |
  |  Steeper line                    |  greater speed               |
  |  Line sloping downward           |  velocity is negative        |
  |  Curve bending upward            |  acceleration is positive    |
  |  Curve bending downward          |  acceleration is negative    |
  |  Graph crosses the time axis     |  body passes through origin  |
  +----------------------------------+------------------------------+
```

> **TRAP:** An x-t graph can NEVER be a vertical line. A vertical line would
> mean infinite velocity — the body being at two places at the same instant.
> Similarly the graph can never turn back on itself in time.

---

# TOPIC 7 — Velocity-time (v-t) graphs — the most important graph

```
  +=============================================================+
  |   SLOPE of a  v-t  graph   =   ACCELERATION                 |
  |                                                             |
  |   AREA under a  v-t  graph =   DISPLACEMENT                 |
  |                                                             |
  |   THIS BOX IS WORTH MORE MARKS THAN ANY OTHER IN THE        |
  |   CHAPTER. LEARN IT.                                        |
  +=============================================================+
```

## The four v-t graphs

```
  (1) BODY AT REST                     (2) UNIFORM VELOCITY

   v |                                  v |
     |                                    |
     |                                  10|-------------------
     |                                    |     |         |
   0 +------------------- t             0 +-----+---------+---- t
     Line lies ON the time axis            Horizontal line above the axis
     v = 0 always                          Slope = 0  ->  a = 0
                                           AREA = 10 x t = displacement


  (3) UNIFORM ACCELERATION             (4) UNIFORM RETARDATION
      (starting from rest)

   v |                    /            v |\
     |                  /             20| \
     |                /                  |   \
     |              /                    |     \
     |            /                      |       \
     |          /                        |         \
   0 +--------/----------- t           0 +-----------\------- t
     Straight line THROUGH origin        Straight line sloping DOWN
     Slope = a (positive, constant)      Slope = a (negative)
     AREA = (1/2) x t x v                AREA = (1/2) x t x 20
```

## Body thrown vertically up — the v-t graph

```
    v |
 (m/s)|\
   +u | \
      |   \
      |     \
      |       \
    0 +---------\-------------------- t
      |    t(up)  \
      |             \
      |               \
   -u |                 \
      |
      <-- straight line with slope = -g throughout

  It is ONE STRAIGHT LINE, not a V-shape.
  Velocity goes  +u  ->  0  ->  -u
  The slope is -9.8 m/s^2 at EVERY point, even at the top.

  AREA above the axis  =  height gone up      (positive)
  AREA below the axis  =  height come down    (negative)
  TOTAL area over the whole flight = 0  ->  displacement = 0.
```

> **TRAP:** For a body thrown up, if the question asks for **displacement**,
> use signed area (may be zero). If it asks for **distance travelled**, add
> the areas **ignoring signs**.

## WORKED EXAMPLE 6

**A body starts from rest, accelerates uniformly for 5 s reaching 20 m/s,
moves at 20 m/s for 10 s, then decelerates uniformly to rest in 5 s. Draw the
v-t graph and find the total distance travelled.**

```
   v |
(m/s)|
   20|          B------------------C
     |        / |                  | \
     |      /   |                  |   \
     |    /     |                  |     \
     |  /       |                  |       \
   0 +A---------+------------------+---------D--- t (s)
     0    5             15               20
        |<- 1 ->|<------- 2 ------->|<- 3 ->|

  STEP 1   The distance is the AREA under the graph.
           Break it into 3 pieces.

  STEP 2   Region 1 (triangle A-B):
              area = (1/2) x base x height
                   = (1/2) x 5 x 20   =  50 m

  STEP 3   Region 2 (rectangle B-C):
              area = length x breadth
                   = 10 x 20          =  200 m

  STEP 4   Region 3 (triangle C-D):
              area = (1/2) x 5 x 20   =  50 m

  STEP 5   Total = 50 + 200 + 50      =  300 m

  ANSWER   Total distance = 300 m
           (You could also use the trapezium formula in one go:
            area = (1/2)(sum of parallel sides)(height)
                 = (1/2)(20 + 10)(20) = 300 m )
```

---

# TOPIC 8 — Acceleration-time (a-t) graphs

```
  +-------------------------------------------------------------+
  |   AREA under an  a-t  graph  =  CHANGE IN VELOCITY (v - u)  |
  +-------------------------------------------------------------+
```

```
  (1) UNIFORM VELOCITY (a = 0)         (2) UNIFORM ACCELERATION

   a |                                  a |
     |                                (m/s2)
     |                                  5 |---------------------
   0 +--------------------- t             |
     Line ON the axis                   0 +--------------------- t
                                          Horizontal line above axis
                                          AREA = 5 x t = change in v


  (3) UNIFORM RETARDATION              (4) THROWN VERTICALLY UP

   a |                                  a |
   0 +--------------------- t           0 +--------------------- t
     |                                    |
  -4 |---------------------            -9.8|-------------------
     Horizontal line BELOW axis            Constant -9.8 m/s^2 for the
     AREA is negative                      WHOLE flight, up and down
```

## The complete graph family for uniform acceleration from rest

```
    x |                 .           v |            /          a |
      |              .              |          /              5 |---------
      |          .                  |        /                  |
      |      .                      |      /                    |
      |  .                          |    /                      |
    0 +.------------- t           0 +--/------------ t        0 +--------- t

      PARABOLA                     STRAIGHT LINE            HORIZONTAL
      x = (1/2)at^2                v = at                   a = constant
```

---

# TOPIC 9 — The three equations of motion

**Valid ONLY when the acceleration is CONSTANT (uniform).**

```
  +====================================================================+
  |     1)   v   =   u  +  a t                    (no s)               |
  |                                                                    |
  |     2)   s   =   u t  +  (1/2) a t^2          (no v)               |
  |                                                                    |
  |     3)   v^2 - u^2   =   2 a s                (no t)               |
  |                                                                    |
  |     4)   s   =   ( (u + v) / 2 ) x t          (no a)               |
  +====================================================================+
```

**How to choose which one:** write down what you are given. The equation you
need is the one that does **not** contain the quantity you were not given.

```
  +------------------------------+------------------------------------+
  |  YOU ARE NOT GIVEN ...       |  USE THIS EQUATION                 |
  +------------------------------+------------------------------------+
  |  displacement s              |  v = u + at                        |
  |  final velocity v            |  s = ut + (1/2)at^2                |
  |  time t                      |  v^2 - u^2 = 2as                   |
  |  acceleration a              |  s = ((u + v)/2) t                 |
  +------------------------------+------------------------------------+
```

## DERIVATION A — the GRAPHICAL method (very frequently asked, 4 marks)

```
  A body has initial velocity u. It moves with uniform acceleration a
  for time t and reaches velocity v.

   v |
     |                            C
   v |. . . . . . . . . . . . . ./|
     |                        ./  |
     |                     ./     |
     |                  ./        |
   u |B. . . . . . . ./           |
     |               |            |
     |               |            |
     |    (rectangle)|            |
   0 +A--------------+------------D--- t
     0                            t

     OA = u  (on the v-axis) ,  CD = v ,  OD = t
     BC is the sloping line ,  BD is horizontal
     So   CB  =  CD - BD  =  v - u
```

### Equation 1: v = u + at

```
  STEP 1   Slope of the v-t line  =  acceleration.

  STEP 2                CB          v - u
              a   =   ------  =   ---------
                        BD             t

  STEP 3      a t  =  v - u

  RESULT      v   =   u  +  a t
```

### Equation 2: s = ut + (1/2)at^2

```
  STEP 1   Displacement = AREA of the trapezium OABCD... i.e. figure ABDO
           plus triangle BCD.

  STEP 2   s  =  area of rectangle ABDO  +  area of triangle BCD

  STEP 3   area of rectangle  =  OA x OD   =  u x t   =  u t

  STEP 4   area of triangle   =  (1/2) x BD x CB
                              =  (1/2) x t  x (v - u)
                              =  (1/2) x t  x (a t)         [ since v-u = at ]
                              =  (1/2) a t^2

  RESULT      s   =   u t  +  (1/2) a t^2
```

### Equation 3: v^2 - u^2 = 2as

```
  STEP 1   Displacement = area of the TRAPEZIUM OACD.

  STEP 2                1
              s   =   ----- (sum of parallel sides) x (height)
                        2

                        1
                  =   ----- ( OA + CD ) x OD
                        2

                        1
                  =   ----- ( u + v ) x t
                        2

  STEP 3   From equation 1,     t  =  ( v - u ) / a

  STEP 4                1                  ( v - u )
              s   =   ----- ( u + v )  x  -----------
                        2                      a

                        ( v + u )( v - u )        v^2 - u^2
                  =   ----------------------  =  -----------
                              2 a                    2 a

  RESULT      v^2  -  u^2   =   2 a s
```

## DERIVATION B — the CALCULUS method (also asked, 4 marks)

### Equation 1

```
  STEP 1   By definition,     a  =  dv / dt

  STEP 2   Separate:          dv  =  a dt

  STEP 3   Integrate from velocity u at time 0 to velocity v at time t:

              integral of dv from u to v   =   a  x  integral of dt from 0 to t

              [ v ] - [ u ]   =   a ( t  -  0 )

  RESULT      v   =   u  +  a t
```

### Equation 2

```
  STEP 1   By definition,     v  =  dx / dt      so    dx  =  v dt

  STEP 2   Put  v = u + at :        dx  =  ( u + a t ) dt

  STEP 3   Integrate from x0 at time 0 to x at time t:

              x - x0   =   u t   +   a ( t^2 / 2 )

  STEP 4   And  x - x0  is the displacement s.

  RESULT      s   =   u t  +  (1/2) a t^2
```

### Equation 3

```
  STEP 1   Use the chain-rule trick:

                dv        dv     dx           dv
           a = ----  =   ---- x ----   =   v ----
                dt        dx     dt           dx

  STEP 2   Separate:      v dv  =  a dx

  STEP 3   Integrate from u to v on the left, 0 to s on the right:

               v^2      u^2
              -----  -  -----   =   a s
                2        2

  STEP 4   Multiply both sides by 2:

  RESULT      v^2  -  u^2   =   2 a s
```

## WORKED EXAMPLE 7

**A train starting from rest attains a velocity of 72 km/h in 5 minutes.
Assuming uniform acceleration, find (i) the acceleration (ii) the distance
travelled.**

```
  STEP 1   Convert the units.

                          5
           72 km/h  =  72 x ---  m/s   =  20 m/s
                          18

           5 minutes  =  300 s

  STEP 2   u = 0 ,  v = 20 m/s ,  t = 300 s

  STEP 3   Use  v = u + at

               20  =  0  +  a(300)

                          20            1
                a  =   --------  =   -------  =  0.0667 m/s^2
                         300           15

  STEP 4   Use  s = ut + (1/2)at^2

                s  =  0  +  (1/2)(1/15)(300)^2

                   =  (1/2)(90000 / 15)

                   =  (1/2)(6000)   =   3000 m   =   3 km

  ANSWER   a = 0.067 m/s^2 ,  s = 3000 m = 3 km

  CHECK using equation 4:   s = ((0 + 20)/2) x 300 = 10 x 300 = 3000 m.
```

> **TRAP:** Always convert km/h to m/s before using the equations.
> Multiply by 5/18. Going the other way, multiply by 18/5.

---

# TOPIC 10 — Distance travelled in the nth second

This is NOT the distance in n seconds. It is the distance travelled during
the **nth second alone** — that is, between t = (n-1) s and t = n s.

```
  +--------------------------------------------------------------+
  |                                    a                         |
  |     s(nth)   =   u   +   ------- ( 2n  -  1 )                |
  |                                2                             |
  |                                                              |
  |  Unit is metre, even though the formula looks like a         |
  |  velocity. It is "metre per that one second".                |
  +--------------------------------------------------------------+
```

## Where it comes from

```
  STEP 1   Distance in n seconds:

              s(n)     =  u n     +  (1/2) a n^2

  STEP 2   Distance in (n-1) seconds:

              s(n-1)   =  u(n-1)  +  (1/2) a (n-1)^2

  STEP 3   Subtract:

              s(nth)  =  s(n) - s(n-1)

                      =  u[ n - (n-1) ]  +  (1/2) a [ n^2 - (n-1)^2 ]

                      =  u (1)           +  (1/2) a [ n^2 - n^2 + 2n - 1 ]

                      =  u  +  (a/2)(2n - 1)
```

## WORKED EXAMPLE 8

**A body starts from rest with an acceleration of 4 m/s^2. Find the distance
travelled in the 5th second.**

```
  STEP 1   u = 0 ,  a = 4 m/s^2 ,  n = 5

  STEP 2   s(nth)  =  u  +  (a/2)(2n - 1)

  STEP 3          =  0  +  (4/2)( 2x5 - 1 )

                  =  2 x ( 10 - 1 )

                  =  2 x 9   =   18 m

  ANSWER   18 m
```

## The beautiful pattern (starting from rest)

```
  Distances in the 1st, 2nd, 3rd, 4th ... seconds are in the ratio

              1  :  3  :  5  :  7  :  9  ...        (ODD NUMBERS)

  Total distances after 1, 2, 3, 4 ... seconds are in the ratio

              1  :  4  :  9  : 16  : 25  ...        (SQUARES)
```

> **TRAP:** "Distance in 5 seconds" and "distance in the 5th second" are
> completely different. Read the wording twice.

---

# TOPIC 11 — Motion under gravity

Near the Earth's surface, every freely falling body has the same acceleration
`g = 9.8 m/s^2` directed **downwards**, whatever its mass (ignoring air
resistance).

```
  Just replace  a -> g  and  s -> h  in the three equations.
```

## CASE 1 — Dropped from rest (free fall)

Take **downwards as positive**, so a = +g and u = 0.

```
  +----------------------------------------------------------+
  |     v   =   g t                                          |
  |                                                          |
  |     h   =   (1/2) g t^2                                  |
  |                                                          |
  |     v^2 =   2 g h        ->    v = sqrt( 2 g h )         |
  |                                                          |
  |     time to fall a height h    ->   t = sqrt( 2h / g )   |
  +----------------------------------------------------------+
```

```
        o   <-- released here, u = 0
        |
        |          the drop is a PARABOLA in time:
        |          after 1 s -> 4.9 m
        |          after 2 s -> 19.6 m
        |          after 3 s -> 44.1 m
        v
   ///////////  ground,  v = sqrt(2gh)
```

## CASE 2 — Thrown vertically upward

Take **upwards as positive**, so u = +u and a = -g.

```
                        *   v = 0 at the top
                       / \
                      /   \
        max height H |     |
                    /       \
                   /         \
                  o           o
             thrown up      comes back
             with speed u   with speed u


  +--------------------------------------------------------------+
  |                            u^2                               |
  |    MAXIMUM HEIGHT     H = -------                            |
  |                            2 g                               |
  |                                                              |
  |                              u                               |
  |    TIME OF ASCENT   t(up) = ---                              |
  |                              g                               |
  |                                                              |
  |    TIME OF DESCENT  t(down) = t(up)     (THEY ARE EQUAL)     |
  |                                                              |
  |                            2 u                               |
  |    TIME OF FLIGHT     T = -----                              |
  |                             g                                |
  |                                                              |
  |    It returns to the thrower with the SAME SPEED u,          |
  |    but in the OPPOSITE direction.                            |
  +--------------------------------------------------------------+
```

### Why the maximum height formula works

```
  STEP 1   At the highest point the body stops for an instant:  v = 0.

  STEP 2   Use   v^2 - u^2 = 2 a s   with  a = -g  and  s = H:

               0  -  u^2   =   2 ( -g ) H

  STEP 3       -u^2  =  -2 g H

                             u^2
  RESULT           H  =   -------
                            2 g
```

### Why time up equals time down

```
  GOING UP     :  starts at u , ends at 0 , retardation g
                  t(up)   =  ( u - 0 ) / g   =   u / g

  COMING DOWN  :  starts at 0 , falls the same height H , acceleration g
                  H = (1/2) g t(down)^2

                  t(down) = sqrt( 2H / g ) = sqrt( 2 (u^2/2g) / g )
                          = sqrt( u^2 / g^2 )  =  u / g

  Therefore     t(up)  =  t(down)  =  u / g       (equal)
```

## WORKED EXAMPLE 9

**A ball is thrown vertically upward with a velocity of 19.6 m/s. Find
(i) the maximum height (ii) the time of ascent (iii) the total time of flight.
Take g = 9.8 m/s^2.**

```
  STEP 1   u = 19.6 m/s ,  g = 9.8 m/s^2

  STEP 2   Maximum height

                  u^2         (19.6)^2         384.16
             H = ------  =   -----------  =   --------   =   19.6 m
                  2 g        2 (9.8)            19.6

  STEP 3   Time of ascent

                  u          19.6
          t(up) = --- =    -------   =   2 s
                  g          9.8

  STEP 4   Total time of flight

              T  =  2 x t(up)  =  2 x 2  =  4 s

  ANSWER   H = 19.6 m ,  t(up) = 2 s ,  T = 4 s
```

## WORKED EXAMPLE 10

**A stone is dropped from the top of a tower and reaches the ground in 4 s.
Find the height of the tower and the speed on hitting the ground.
Take g = 9.8 m/s^2.**

```
  STEP 1   u = 0 ,  t = 4 s ,  a = g = 9.8 m/s^2

  STEP 2   h  =  ut  +  (1/2) g t^2

              =  0   +  (1/2)(9.8)(16)

              =  4.9 x 16   =   78.4 m

  STEP 3   v  =  u  +  g t  =  0 + 9.8 x 4  =  39.2 m/s

  ANSWER   Height = 78.4 m ,  striking speed = 39.2 m/s
```

> **TRAP:** Do not mix sign conventions inside one problem. Pick either
> "up is positive" or "down is positive" at the start and stay with it.
> If you take up as positive, then h for a falling body is NEGATIVE.

---

# TOPIC 12 — Relative velocity in one dimension

```
  +-----------------------------------------------------------------+
  |   Velocity of A as seen by an observer moving with B:           |
  |                                                                 |
  |          v(AB)   =   v(A)   -   v(B)                            |
  |                                                                 |
  |   and    v(BA)   =   v(B)   -   v(A)   =   - v(AB)              |
  |                                                                 |
  |   Both vA and vB must be measured in the SAME frame             |
  |   (usually the ground) and must carry their SIGNS.              |
  +-----------------------------------------------------------------+
```

## The two everyday cases

```
  SAME DIRECTION (both moving right)

     A ---> 60 km/h            B ---> 40 km/h
     o------------------------ o----------------

     v(AB) = 60 - 40 = 20 km/h
     They SEPARATE slowly. Relative speed = DIFFERENCE.


  OPPOSITE DIRECTIONS

     A ---> 60 km/h            40 km/h <--- B
     o------------------------ ----------------o

     v(AB) = 60 - (-40) = 100 km/h
     They APPROACH fast. Relative speed = SUM.
```

## WORKED EXAMPLE 11 — two trains

**Two trains, each 100 m long, travel on parallel tracks in the same direction
at 72 km/h and 54 km/h. How long does the faster train take to completely
overtake the slower one?**

```
  STEP 1   Convert:  72 km/h = 72 x 5/18 = 20 m/s
                     54 km/h = 54 x 5/18 = 15 m/s

  STEP 2   Same direction  ->  relative velocity = 20 - 15 = 5 m/s

  STEP 3   To completely overtake, the faster train must cover
           its OWN length + the OTHER train's length:

              relative displacement = 100 + 100 = 200 m

  STEP 4                200 m
              t   =   --------   =   40 s
                       5 m/s

  ANSWER   40 seconds
```

## WORKED EXAMPLE 12 — the rain problem (one dimension)

**Rain is falling vertically at 4 m/s. A man walks... ** — the true rain
problem needs two dimensions, so BIEAP normally asks the simpler version:

**Rain drops fall vertically downward at 10 m/s. A lift is descending at
4 m/s. What is the velocity of the rain relative to a person in the lift?**

```
  STEP 1   Take DOWNWARDS as positive.

           v(rain) = +10 m/s ,   v(lift) = +4 m/s

  STEP 2   v(rain, lift)  =  v(rain)  -  v(lift)
                          =  10  -  4
                          =  +6 m/s

  ANSWER   6 m/s DOWNWARDS.
           The rain appears to fall more slowly to the person in the lift.
```

## WORKED EXAMPLE 13 — the river / boat problem (along the line)

**A boat can move at 8 km/h in still water. A river flows at 3 km/h.
Find the speed of the boat (i) downstream (ii) upstream.**

```
  STEP 1   DOWNSTREAM  -  boat and river move the SAME way, so ADD:

              8  +  3   =   11 km/h

  STEP 2   UPSTREAM    -  boat moves AGAINST the river, so SUBTRACT:

              8  -  3   =   5 km/h

  ANSWER   Downstream 11 km/h , Upstream 5 km/h
```

> **TRAP:** Relative velocity questions are almost always lost on the SIGN,
> not on the arithmetic. Draw the arrows first, then write the numbers.

---

# TOPIC 13 — Stopping distance and reaction time

```
  +---------------------------------------------------------------+
  |                              v^2                              |
  |   BRAKING DISTANCE     d = --------      (a = retardation)    |
  |                              2 a                              |
  |                                                               |
  |   REACTION DISTANCE    d(r) = v x t(reaction)                 |
  |                                                               |
  |   TOTAL STOPPING DISTANCE  =  reaction distance               |
  |                               + braking distance              |
  |                                                               |
  |                     v^2                                       |
  |            =  v t + -------                                   |
  |                      2 a                                      |
  +---------------------------------------------------------------+
```

```
  THE PICTURE

  driver sees      driver presses     car
  the danger       the brake          stops
      |                 |               |
      +-----------------+---------------+
      |<--  reaction -->|<-- braking -->|
      |    distance     |    distance   |
        (car still at      (car slowing
         full speed)        down)
```

**The most important consequence:** braking distance is proportional to
`v^2`, not to v.

```
  Double the speed  ->  FOUR TIMES the braking distance.
  Triple the speed  ->  NINE TIMES the braking distance.
```

## WORKED EXAMPLE 14

**A car moving at 20 m/s is brought to rest with a retardation of 5 m/s^2.
The driver's reaction time is 0.5 s. Find the total stopping distance.**

```
  STEP 1   Reaction distance  =  v x t
                             =  20 x 0.5   =   10 m

  STEP 2   Braking distance: use  v^2 - u^2 = 2as
           with u = 20 , v = 0 , a = -5

              0 - 400  =  2 (-5) s

              -400     =  -10 s

                  s    =  40 m

  STEP 3   Total stopping distance = 10 + 40  =  50 m

  ANSWER   50 m
```

> **TRAP:** Many students forget the reaction distance completely and answer
> 40 m. If the question mentions reaction time, it wants BOTH parts.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I convert km/h to m/s by multiplying by 5 / 18 ?
  [ ]  Did I fix ONE positive direction and use it for the whole problem ?
  [ ]  For a body thrown up, did I use  a = -g  (not +g) ?
  [ ]  Did I give displacement a SIGN or a DIRECTION ?
  [ ]  Did I check "distance in n seconds" vs "distance in the nth second" ?
  [ ]  On the v-t graph, did I use SLOPE for acceleration and AREA for
       displacement ?
  [ ]  Did I remember that at the topmost point v = 0 but a = g ?
  [ ]  Did I include the REACTION distance in a stopping-distance problem ?
  [ ]  For relative velocity, same direction -> SUBTRACT ,
       opposite directions -> ADD ?
  [ ]  Did I label BOTH axes on every graph I drew, with units ?
  [ ]  Did I write the final answer with its UNIT ?
```
