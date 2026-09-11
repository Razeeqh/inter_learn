# Systems of Particles and Rotational Motion — Concepts

Read this slowly, with a pen. Every topic ends with a fully worked example.
Nothing here assumes you already know anything.

---

# TOPIC 1 — RIGID BODY, TRANSLATION AND ROTATION

## What is a rigid body?

```
  RIGID BODY  =  a body in which the distance between ANY two particles
                 NEVER changes, no matter what force acts on it.
```

A cricket ball, a wheel, a steel rod, a brick — all treated as rigid bodies.
A rubber band, a spring, water — NOT rigid, they change shape.

> Real bodies bend a tiny bit. "Rigid body" is an **ideal model**, exactly like
> "point mass" was in earlier chapters. In the exam, always say
> "an ideal body whose shape and size never change".

## The only two motions a rigid body can have

```
  1. PURE TRANSLATION
  ---------------------------------------------------------------
     Every particle of the body moves through the SAME distance,
     in the SAME direction, in the SAME time.

        BEFORE                       AFTER
        +-------+                          +-------+
        | A   B |     ------------->       | A   B |
        | C   D |                          | C   D |
        +-------+                          +-------+

     A, B, C, D all shifted identically.
     Example: a block sliding down a smooth ramp.


  2. PURE ROTATION (about a fixed axis)
  ---------------------------------------------------------------
     Every particle moves in a CIRCLE. The centres of all those
     circles lie on one straight line called the AXIS OF ROTATION.
     Particles on the axis do not move at all.

                    axis
                     |
              . . . .|. . . .
            .        |        .
           .    P----+         .        P sweeps a circle of radius r
           .        r|         .        Q sweeps a bigger circle
            .   Q----+----- .           Both take the SAME time
              . . . .|. . . .           => same omega, different v
                     |

     Example: a ceiling fan, a merry-go-round.


  3. BOTH TOGETHER  =  ROLLING
  ---------------------------------------------------------------
     The centre of mass translates WHILE the body rotates about it.
     Example: a wheel rolling on a road, a ball rolling down a slope.
```

> **TRAP:** In pure rotation all particles have the **same angular velocity**
> `omega` but **different linear velocities** `v = r omega`. Students lose marks
> writing "all particles move with the same speed". They do not.

## WORKED EXAMPLE 1

*A fan blade of length 60 cm rotates at 5 rotations per second. Compare the speed
of the tip with the speed of a point 20 cm from the axis.*

```
  Both points have the SAME angular velocity:
      omega = 2 pi n = 2 x 3.14 x 5 = 31.4 rad/s

  Tip     :  v = r omega = 0.60 x 31.4 = 18.84 m/s
  Inner pt:  v = r omega = 0.20 x 31.4 =  6.28 m/s

  Ratio = 0.60 / 0.20 = 3 : 1   (just the ratio of the radii)
```

---

# TOPIC 2 — CENTRE OF MASS: WHAT IT IS

## The idea in one line

```
  CENTRE OF MASS  =  the single point where the WHOLE mass of the body
                     can be imagined to be concentrated, so that the
                     motion of that one point describes the motion of
                     the whole body.
```

**Everyday picture.** Throw a spanner spinning across the room. It tumbles wildly
and looks complicated. But one particular point on it — the centre of mass —
traces a perfectly smooth parabola, exactly like a thrown stone.

```
                     the CM traces a clean parabola

                        .  *  .
                    .             .
                 .    (spanner       .
              .        tumbling         .
            .           about it)          .
          .                                   .
        *                                        *
    thrown                                    lands

   The rest of the body wobbles around this point. The CM does not care.
```

That is the whole reason the centre of mass exists: **it lets us treat a big,
complicated, spinning object as a single particle.**

## Centre of mass of a TWO-PARTICLE system

Two particles of masses `m1` and `m2` at positions `x1` and `x2` on a line:

```
       m1                                    m2
       O------------------+-----------------O
       |                  |                 |
       x1                X_cm               x2
       |<---- d1 ------->|<------ d2 ------>|


  +---------------------------------------------------+
  |                                                   |
  |                  m1 x1  +  m2 x2                  |
  |        X_cm  =  -------------------               |
  |                     m1  +  m2                     |
  |                                                   |
  +---------------------------------------------------+


  Equivalent and very useful form:      m1 d1  =  m2 d2

  (the CM is CLOSER to the HEAVIER mass — like a see-saw balancing)
```

**Special cases worth remembering:**

```
  If m1 = m2         ->  CM is exactly at the MIDPOINT.
  If m1 >> m2        ->  CM lies almost ON m1.
  Two-particle CM    ->  ALWAYS lies on the line joining them,
                         and ALWAYS between them.
```

## WORKED EXAMPLE 2

*A 2 kg mass is at x = 0 and a 3 kg mass is at x = 5 m. Find the centre of mass.*

```
  STEP 1   Write the formula.

                m1 x1 + m2 x2
      X_cm  =  ---------------
                  m1 + m2

  STEP 2   Substitute.

               (2 x 0)  +  (3 x 5)          0 + 15         15
      X_cm  =  --------------------   =   ----------  =  ------  =  3 m
                     2  +  3                   5             5

  STEP 3   Sanity check.
      3 m is nearer to the 3 kg mass (at 5 m) than to the 2 kg mass (at 0).
      Correct — the CM leans towards the heavier body.  GOOD.

  ANSWER:  X_cm = 3 m from the 2 kg mass.
```

> **TRAP:** The centre of mass need NOT lie inside the material of the body.
> The CM of a ring, a hollow sphere, a horseshoe or a bangle lies in **empty
> space**. This is a favourite 2-mark question.

---

# TOPIC 3 — CENTRE OF MASS OF n PARTICLES

## The general formula

For `n` particles of masses `m1, m2, ... mn` at positions `x1, x2, ... xn`:

```
  +----------------------------------------------------------------+
  |                                                                |
  |               m1 x1 + m2 x2 + ... + mn xn        sum( mi xi )  |
  |     X_cm  =  ------------------------------  =  -------------- |
  |                  m1 + m2 + ... + mn                    M       |
  |                                                                |
  |               sum( mi yi )              sum( mi zi )           |
  |     Y_cm  =  --------------    Z_cm  =  --------------         |
  |                    M                          M                |
  |                                                                |
  |     where  M = total mass = sum( mi )                          |
  |                                                                |
  +----------------------------------------------------------------+


  In vector form (write this if the question says "vector form"):

                  sum( mi ri )
      R_cm  =  ------------------          or        M R_cm = sum( mi ri )
                       M
```

For a **continuous body** (a rod, a plate, a solid) the sum becomes an integral:

```
                1
      R_cm  =  ---  INT r dm
                M
```

You are NOT asked to actually do these integrals in the AP Inter exam. You are
asked to **quote the formula** and then use the **symmetry results** of Topic 4.

## WORKED EXAMPLE 3

*Three particles are placed as: 1 kg at (0, 0), 2 kg at (4, 0) and 3 kg at (0, 6),
all in metres. Find the centre of mass.*

```
  STEP 1   Total mass.
      M = 1 + 2 + 3 = 6 kg

  STEP 2   X coordinate.

                (1 x 0) + (2 x 4) + (3 x 0)        0 + 8 + 0        8
      X_cm  =  ------------------------------  =  ------------  =  ---  = 1.33 m
                            6                          6            6

  STEP 3   Y coordinate.

                (1 x 0) + (2 x 0) + (3 x 6)        0 + 0 + 18       18
      Y_cm  =  ------------------------------  =  ------------  =  ---- =  3 m
                            6                          6            6

  ANSWER:  CM is at ( 1.33 m , 3 m )

  Sanity check: the heaviest mass (3 kg) is high up on the y-axis,
  so the CM should be pulled upward and close to the y-axis. It is.
```

> **TRAP:** Always divide by the **TOTAL mass M**, never by the number of
> particles `n`. Dividing by `n` gives the average position, which is only
> correct when all the masses are equal.

---

# TOPIC 4 — CENTRE OF MASS OF UNIFORM BODIES

## The symmetry shortcut

```
  For a body of UNIFORM density, the centre of mass lies at the
  CENTRE OF SYMMETRY (the "geometric centre").
```

Learn this table. It is directly examinable.

```
  +---------------------------+-----------------------------------------+
  |  BODY (uniform)           |  POSITION OF THE CENTRE OF MASS         |
  +---------------------------+-----------------------------------------+
  |  Thin straight rod        |  its MIDPOINT  (at L/2)                 |
  |  Circular RING            |  the CENTRE of the ring (EMPTY SPACE)   |
  |  Circular DISC            |  the CENTRE of the disc                 |
  |  Solid SPHERE             |  the CENTRE of the sphere               |
  |  Hollow SPHERE (shell)    |  the CENTRE  (EMPTY SPACE)              |
  |  Cylinder                 |  midpoint of its axis                   |
  |  Rectangular / square     |  the point where the diagonals cross    |
  |    lamina                 |                                         |
  |  TRIANGULAR LAMINA        |  the CENTROID  -- where the three       |
  |                           |  medians meet                           |
  |  Cube / cuboid            |  the centre of the body                 |
  +---------------------------+-----------------------------------------+
```

## Diagrams

```
  UNIFORM ROD                       RING                     DISC
                                                          
  +--------X--------+              . - - - .            #########
  |        |        |            .           .         ###########
  0       L/2       L           .      X      .        #####X#####
                                 .    (empty)  .        ###########
  CM at the midpoint              . - - - .              #########
                                CM at the centre        CM at the centre
                                but there is NO
                                material there!


  SOLID SPHERE                      TRIANGULAR LAMINA
                                                A
       . - - - - .                             /|\
     .             .                          / | \
    .               .                        /  |  \
    .       X       .                       /   G   \       G = CENTROID
    .               .                      /  /   \  \      where the three
     .             .                      / /       \ \     medians meet
       . - - - - .                       B-------------C

  CM at the geometric              G divides each median in the ratio 2 : 1
  centre                           from the vertex.

                                         x1 + x2 + x3          y1 + y2 + y3
                                   X_G = -------------   Y_G = -------------
                                               3                     3
```

## A few extra results (useful for EAPCET / JEE, rarely for the board)

```
  +-------------------------------+---------------------------------------+
  |  BODY                         |  CM lies on the axis of symmetry at   |
  +-------------------------------+---------------------------------------+
  |  Semicircular RING, radius R  |  2R / pi        from the centre       |
  |  Semicircular DISC, radius R  |  4R / (3 pi)    from the centre       |
  |  Solid HEMISPHERE, radius R   |  3R / 8         from the flat face    |
  |  Hemispherical SHELL          |  R / 2          from the flat face    |
  |  Solid CONE, height h         |  h / 4          from the base         |
  +-------------------------------+---------------------------------------+
```

## WORKED EXAMPLE 4

*Find the centre of mass of a uniform triangular lamina with vertices at
(0, 0), (6, 0) and (0, 9).*

```
  A uniform triangular lamina has its CM at the CENTROID.

              x1 + x2 + x3        0 + 6 + 0        6
      X_cm =  --------------  =  -----------  =  -----  =  2
                    3                 3            3

              y1 + y2 + y3        0 + 0 + 9        9
      Y_cm =  --------------  =  -----------  =  -----  =  3
                    3                 3            3

  ANSWER:  CM at ( 2 , 3 )
```

---

# TOPIC 5 — MOTION OF THE CENTRE OF MASS

## Velocity and acceleration of the CM

Differentiate `M R_cm = sum( mi ri )` once, then twice:

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   Position       M R_cm  =  m1 r1 + m2 r2 + ... + mn rn         |
  |                                                                 |
  |   Velocity       M V_cm  =  m1 v1 + m2 v2 + ... + mn vn         |
  |                                                                 |
  |                             sum( mi vi )                        |
  |                  V_cm   =  --------------                       |
  |                                  M                              |
  |                                                                 |
  |   Acceleration   M A_cm  =  m1 a1 + m2 a2 + ... + mn an         |
  |                                                                 |
  |                             sum( mi ai )                        |
  |                  A_cm   =  --------------                       |
  |                                  M                              |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## The big result

Inside a system, every internal force comes in an action–reaction pair
(Newton's third law), so **all internal forces cancel out in pairs**. Only
external forces survive:

```
  +---------------------------------------------------------------+
  |                                                               |
  |          M A_cm  =  F_external                                |
  |                                                               |
  |   The centre of mass moves EXACTLY as if:                     |
  |     - all the mass M were concentrated at that point, and     |
  |     - all the external forces acted at that point.            |
  |                                                               |
  +---------------------------------------------------------------+
```

**Consequence (this is the exam sentence):**

```
  If F_external = 0    then    A_cm = 0    so    V_cm = CONSTANT.

  THE CENTRE OF MASS OF AN ISOLATED SYSTEM MOVES WITH CONSTANT VELOCITY
  (and if it was at rest, it STAYS at rest), no matter how violently the
  parts of the system push, pull, collide or explode among themselves.
```

**The exploding-shell picture — learn to draw this:**

```
                    explosion happens here
                            *
                          / | \
        . . . . . . . . *   |   *  . . .        <- fragments fly apart
      .                      \      \      .
    .                          \       \        .
   *                            (the CM keeps going on the
  fired                          ORIGINAL parabola, because
                                 gravity is the only external force)
```

> **TRAP:** Internal forces (the explosion, the collision, the muscles of a
> skater) can NEVER change the motion of the centre of mass. Only an
> **external** force can. Write the word "external" in your answer.

## WORKED EXAMPLE 5

*A 1 kg particle moves along +x at 4 m/s. A 3 kg particle moves along -x at 2 m/s.
Find the velocity of the centre of mass.*

```
  Take +x as positive, so v2 = -2 m/s.

               m1 v1 + m2 v2        (1 x 4) + (3 x -2)         4 - 6
      V_cm  =  --------------  =  ----------------------  =  ---------
                  m1 + m2                 1 + 3                  4

                                     -2
                                =  ------  =  -0.5 m/s
                                     4

  ANSWER:  0.5 m/s in the NEGATIVE x direction.
           (the heavier, slower particle wins the tug-of-war)
```

---

# TOPIC 6 — LINEAR MOMENTUM OF A SYSTEM AND ITS CONSERVATION

## Total momentum of a system

```
  P_total  =  p1 + p2 + ... + pn  =  m1 v1 + m2 v2 + ... + mn vn

  But we just saw that this sum equals M V_cm. Therefore:

  +---------------------------------------------------------------+
  |                                                               |
  |            P_total  =  M  V_cm                                |
  |                                                               |
  |   The total momentum of a system  =  (total mass) x (velocity |
  |   of the centre of mass).                                     |
  |                                                               |
  +---------------------------------------------------------------+


  Differentiating:      dP / dt  =  M A_cm  =  F_external
```

## Law of conservation of linear momentum

```
  +---------------------------------------------------------------+
  |                                                               |
  |   IF     F_external  =  0                                     |
  |                                                               |
  |   THEN   dP / dt  =  0     so     P_total  =  CONSTANT        |
  |                                                               |
  |   "When no net external force acts on a system, the total     |
  |    linear momentum of the system remains constant."           |
  |                                                               |
  +---------------------------------------------------------------+
```

**Everyday examples to quote:**

```
  Recoil of a gun          gun goes back, bullet goes forward
  Rocket propulsion        gas goes down, rocket goes up
  Explosion of a shell     fragments fly out, vector sum stays zero
  Man walking on a boat    boat slides backwards
  Rowing / swimming        push water back, you go forward
```

## WORKED EXAMPLE 6

*A 10 kg shell at rest explodes into two pieces of 4 kg and 6 kg. The 4 kg piece
flies east at 6 m/s. Find the velocity of the 6 kg piece.*

```
  STEP 1   No external force during the explosion, so momentum is conserved.

      P_before  =  P_after

  STEP 2   Before: the shell is at rest.
      P_before = 10 x 0 = 0

  STEP 3   After (take east as positive):
      P_after = (4 x 6)  +  (6 x v)  =  24 + 6v

  STEP 4   Set them equal.
      0  =  24 + 6v
      6v =  -24
      v  =  -4 m/s

  ANSWER:  4 m/s towards the WEST (opposite to the 4 kg piece).

  CHECK:  momentum after = (4)(+6) + (6)(-4) = 24 - 24 = 0.  Correct.
  NOTE :  the CM of the two fragments stays exactly where it was.
```

---

# TOPIC 7 — VECTOR PRODUCT (CROSS PRODUCT)

You cannot do torque or angular momentum without this. Ten minutes here saves
you the whole second half of the chapter.

## Definition

```
  +--------------------------------------------------------------+
  |                                                              |
  |     A x B   =   A B sin(theta)  n^                           |
  |                                                              |
  |   A, B      = magnitudes                                     |
  |   theta     = angle BETWEEN the two vectors                  |
  |   n^        = unit vector PERPENDICULAR to the plane of      |
  |               A and B, direction given by the RIGHT HAND     |
  |               SCREW RULE                                     |
  |                                                              |
  |   The result is a VECTOR.  (Dot product gives a NUMBER.)     |
  |                                                              |
  +--------------------------------------------------------------+
```

## Right hand rule — the picture

```
                    A x B  (points UP, out of the page)
                      ^
                      |
                      |
                      |
          B  <--------+
                     / \
                    /   \  theta
                   /     \
                  /       v
                 A

  Curl the fingers of your RIGHT hand from A towards B.
  Your THUMB points along A x B.
```

## Properties you must know

```
  1.  NOT commutative:      A x B  =  -( B x A )
  2.  Parallel vectors:     A x A  =  0        (theta = 0, sin 0 = 0)
  3.  Perpendicular:        |A x B| is MAXIMUM = A B   (theta = 90 deg)
  4.  Distributive:         A x (B + C) = A x B + A x C
  5.  Unit vectors:

          i x j  =  k          j x i  =  -k
          j x k  =  i          k x j  =  -i
          k x i  =  j          i x k  =  -j
          i x i  =  j x j  =  k x k  =  0

      Memory circle (go clockwise = +, anticlockwise = -):

                        i
                      /   \
                     /     \
                    k ----- j
```

## The determinant method (always use this in the exam)

```
                  |  i    j    k  |
      A x B   =   |  a1   a2   a3 |
                  |  b1   b2   b3 |

              =   i ( a2 b3 - a3 b2 )
                - j ( a1 b3 - a3 b1 )
                + k ( a1 b2 - a2 b1 )

  NOTE THE MINUS SIGN in front of j. That single sign costs the most marks
  in this whole topic.
```

## Physical quantities that ARE cross products

```
  Torque             tau  =  r  x  F
  Angular momentum   L    =  r  x  p
  Linear velocity    v    =  omega  x  r
  Force on a charge  F    =  q ( v  x  B )
  Area of triangle   =  (1/2) | AB x AC |
```

## WORKED EXAMPLE 7

*If A = 2i + 3j - k and B = i - j + 2k, find A x B and verify the answer.*

```
  STEP 1   Set up the determinant.

                  |  i    j    k  |
      A x B   =   |  2    3   -1  |
                  |  1   -1    2  |

  STEP 2   Expand.

      i component :   ( 3 x 2 )  -  ( -1 x -1 )   =   6 - 1   =   5
      j component : -[ ( 2 x 2 )  -  ( -1 x  1 ) ] = -[ 4 + 1 ] = -5
      k component :   ( 2 x -1 ) -  ( 3  x  1 )   =  -2 - 3   =  -5

      A x B  =  5i  -  5j  -  5k

  STEP 3   VERIFY (do this every time -- it is free marks insurance).
      The cross product must be perpendicular to BOTH A and B,
      so both dot products must be ZERO.

      (A x B) . A  =  (5)(2) + (-5)(3) + (-5)(-1)  =  10 - 15 + 5  =  0   GOOD
      (A x B) . B  =  (5)(1) + (-5)(-1) + (-5)(2)  =   5 +  5 - 10 =  0   GOOD

  ANSWER:  A x B  =  5i - 5j - 5k
```

---

# TOPIC 8 — ANGULAR VELOCITY, ANGULAR ACCELERATION, v = r omega

## Angular displacement

```
  When a body rotates, every particle sweeps the same ANGLE.

                          .
                     .    |  \
                 .        |     \  theta  (in RADIANS)
              +-----------+-------->
              axis        r

      arc length  s  =  r  theta          (theta MUST be in radians)

      1 revolution  =  2 pi radians  =  360 degrees
```

## Angular velocity

```
  +-------------------------------------------------------------+
  |                                                             |
  |   Average    omega  =  (angular displacement) / (time)      |
  |                                                             |
  |   Instant    omega  =  d(theta) / dt          unit: rad/s   |
  |                                                             |
  |   From rpm:  omega  =  2 pi N / 60      (N = rev per minute)|
  |                                                             |
  |   From frequency:  omega  =  2 pi n  =  2 pi / T            |
  |                                                             |
  +-------------------------------------------------------------+

  omega is a VECTOR. Its direction lies ALONG THE AXIS, given by the
  right hand rule (curl fingers with the rotation, thumb = omega).
```

## Angular acceleration

```
      alpha  =  d(omega) / dt              unit: rad/s^2

  For CONSTANT alpha, the three rotational equations are exact copies
  of the linear ones:

  +--------------------------------+--------------------------------+
  |  LINEAR                        |  ROTATIONAL                    |
  +--------------------------------+--------------------------------+
  |  v = u + a t                   |  w = w0 + alpha t              |
  |  s = u t + (1/2) a t^2         |  theta = w0 t + (1/2) alpha t^2|
  |  v^2 = u^2 + 2 a s             |  w^2 = w0^2 + 2 alpha theta    |
  +--------------------------------+--------------------------------+
```

## The relation v = r omega

```
                        v (tangential, always perpendicular to r)
                        ^
                        |
              +---------P
             axis   r

      s = r theta
      Differentiate with respect to time:      ds/dt = r d(theta)/dt

  +-----------------------------------------------------------+
  |                                                           |
  |          v  =  r omega          (vector form: v = w x r)  |
  |                                                           |
  |   Tangential acceleration       a_t  =  r alpha           |
  |   Centripetal acceleration      a_c  =  r omega^2 = v^2/r |
  |                                                           |
  +-----------------------------------------------------------+
```

> **TRAP:** `omega` is the SAME for every particle of a rigid body.
> `v` is DIFFERENT for every particle — bigger the further you are from the axis.
> Particles on the axis have `r = 0`, so `v = 0`.

## WORKED EXAMPLE 8

*A wheel of radius 0.5 m starts from rest and reaches 300 rpm in 10 s.
Find (a) the final angular velocity, (b) the angular acceleration,
(c) the speed of a point on the rim at the end.*

```
  (a)   omega  =  2 pi N / 60  =  (2 x 3.14 x 300) / 60

                =  1884 / 60   =   31.4 rad/s

  (b)   w = w0 + alpha t    with  w0 = 0

              w - w0        31.4 - 0
      alpha = --------  =  ----------  =  3.14 rad/s^2
                 t             10

  (c)   v  =  r omega  =  0.5 x 31.4  =  15.7 m/s

  ANSWER:  31.4 rad/s ,  3.14 rad/s^2 ,  15.7 m/s
```

---

# TOPIC 9 — TORQUE (MOMENT OF FORCE)

## The idea

A force makes a body **move**. A **torque** makes a body **turn**.

```
  Why is a door handle placed FAR from the hinge?

              hinge
                ||=================================> F
                ||          (long r  ->  big turning effect)
                ||
                ||===> F
                ||     (short r  ->  small turning effect, hard to open)

  Turning effect depends on BOTH the force AND how far from the axis it acts.
```

## Definition

```
  +---------------------------------------------------------------+
  |                                                               |
  |        tau  =  r  x  F                                        |
  |                                                               |
  |        | tau |  =  r F sin( theta )                           |
  |                                                               |
  |     r      = position vector from the AXIS to the point       |
  |              where the force acts                             |
  |     theta  = angle between r and F                            |
  |                                                               |
  |     UNIT:  newton metre (N m)      DIMENSIONS: [ M L^2 T^-2 ] |
  |     It is a VECTOR, along the axis of rotation.               |
  |                                                               |
  +---------------------------------------------------------------+
```

## The diagram to draw in the exam

```
                                          F
                                        /
                                      /
                                    /  theta
       O------------------------- P ------------------  (line of action of F)
       |<---------- r ---------->|
      axis                        \
                                    \
                                     |
        O.....                       |
              ......                 |
                    ......           |
       perpendicular distance  d  = r sin(theta)
       (also called the MOMENT ARM or LEVER ARM)


      tau  =  r F sin(theta)  =  F x ( r sin theta )  =  F  x  d

      "TORQUE  =  FORCE  x  PERPENDICULAR DISTANCE FROM THE AXIS"
```

## Key observations

```
  theta = 90 deg   ->  tau is MAXIMUM = r F      (push the door square on)
  theta = 0 or 180 ->  tau = 0                   (pulling along the door
                                                  gives no turning at all)
  r = 0            ->  tau = 0                   (a force at the hinge is useless)

  Torque is also called the MOMENT OF FORCE.
  Anticlockwise torque is taken POSITIVE, clockwise NEGATIVE (by convention).
```

> **TRAP:** Torque and work have the same dimensions `[M L^2 T^-2]` and the same
> unit size, but torque is a **vector measured in N m** and work is a **scalar
> measured in joules**. Never write torque in joules.

## WORKED EXAMPLE 9a (scalar)

*A spanner 25 cm long is pulled with a force of 20 N at 30 degrees to the spanner.
Find the torque about the nut.*

```
      tau  =  r F sin(theta)
           =  0.25 x 20 x sin(30 deg)
           =  0.25 x 20 x 0.5
           =  2.5 N m

  ANSWER:  2.5 N m

  NOTE: if the same force were applied at 90 degrees,
        tau = 0.25 x 20 x 1 = 5 N m -- DOUBLE. That is why you pull
        a spanner at right angles.
```

## WORKED EXAMPLE 9b (vector)

*A force F = 3i - 2j + 4k newton acts at the point r = 2i + 3j metre.
Find the torque about the origin.*

```
                    |  i    j    k  |
      tau = r x F = |  2    3    0  |
                    |  3   -2    4  |

      i :   ( 3 x 4 )  -  ( 0 x -2 )    =  12 - 0   =  12
      j : -[ ( 2 x 4 )  -  ( 0 x  3 ) ] = -[ 8 - 0 ] = -8
      k :   ( 2 x -2 ) -  ( 3 x  3 )    = -4 - 9    = -13

  ANSWER:  tau  =  12i - 8j - 13k   N m

  CHECK:  tau . F = (12)(3) + (-8)(-2) + (-13)(4) = 36 + 16 - 52 = 0   GOOD
```

---

# TOPIC 10 — ANGULAR MOMENTUM AND tau = dL/dt

## Angular momentum of a SINGLE PARTICLE

```
  Linear momentum p = m v is "quantity of straight-line motion".
  ANGULAR momentum is "quantity of turning motion".

  +---------------------------------------------------------------+
  |                                                               |
  |        L  =  r  x  p   =   r x ( m v )                        |
  |                                                               |
  |        | L |  =  r p sin(theta)  =  m v r sin(theta)          |
  |                                                               |
  |        UNIT:  kg m^2 / s   (or J s)                           |
  |        DIMENSIONS:  [ M L^2 T^-1 ]                            |
  |        It is a VECTOR, perpendicular to the plane of r and p. |
  |                                                               |
  +---------------------------------------------------------------+
```

## Angular momentum of a SYSTEM / RIGID BODY

```
  For a whole system:      L  =  L1 + L2 + ... + Ln  =  sum( ri x pi )

  For a RIGID BODY rotating about a fixed axis, every particle has the
  same omega, and it simplifies beautifully:

      L = sum( mi vi ri ) = sum( mi ri omega ri ) = [ sum( mi ri^2 ) ] omega

  +---------------------------------------------------------------+
  |                                                               |
  |             L  =  I  omega          (compare  p = m v )       |
  |                                                               |
  +---------------------------------------------------------------+
```

## The relation between torque and angular momentum

```
  DERIVATION (a standard 4-mark answer -- learn these five lines):

      L  =  r x p

      dL      d
      --- =  --- ( r x p )
      dt      dt

           =  ( dr/dt  x  p )   +   ( r  x  dp/dt )

           =  ( v  x  m v )     +   ( r  x  F )

      The first bracket is v x v times m, and any vector crossed with
      itself is ZERO. The second bracket is the torque.

  +---------------------------------------------------------------+
  |                                                               |
  |             tau  =  dL / dt              (compare  F = dp/dt) |
  |                                                               |
  |   "Torque is the rate of change of angular momentum."         |
  |                                                               |
  |   For a rigid body with constant I:                           |
  |                                                               |
  |             tau  =  d( I omega )/dt  =  I  alpha              |
  |                                                               |
  +---------------------------------------------------------------+
```

## WORKED EXAMPLE 10

*A particle of mass 2 kg is at r = 3i + 4j m and moves with velocity v = 5i m/s.
Find its angular momentum about the origin.*

```
  STEP 1   Momentum.
      p  =  m v  =  2 x 5i  =  10i    kg m/s

  STEP 2   Cross product.

                    |  i    j    k  |
      L = r x p  =  |  3    4    0  |
                    | 10    0    0  |

      i :   ( 4 x 0 ) - ( 0 x 0 )    =  0
      j : -[ ( 3 x 0 ) - ( 0 x 10 ) ] =  0
      k :   ( 3 x 0 ) - ( 4 x 10 )   = -40

  ANSWER:  L  =  -40 k   kg m^2/s
           magnitude 40 kg m^2/s, directed along the NEGATIVE z-axis
           (i.e. INTO the page -- the particle circulates clockwise).
```

---

# TOPIC 11 — CONSERVATION OF ANGULAR MOMENTUM

## The law

```
  +---------------------------------------------------------------+
  |                                                               |
  |   Since   tau_external  =  dL / dt                            |
  |                                                               |
  |   IF      tau_external  =  0                                  |
  |                                                               |
  |   THEN    dL/dt = 0    so    L  =  CONSTANT                   |
  |                                                               |
  |           I1 omega1   =   I2 omega2                           |
  |                                                               |
  |   "When the net external torque on a system is zero, its      |
  |    total angular momentum remains constant in magnitude       |
  |    and direction."                                            |
  |                                                               |
  +---------------------------------------------------------------+


  The practical reading of  I omega = constant :

      I goes DOWN   ->   omega goes UP     (spin faster)
      I goes UP     ->   omega goes DOWN   (spin slower)

  And you change I simply by moving mass TOWARDS or AWAY from the axis.
```

## The three examples the board asks for

```
  1. THE SPINNING ICE SKATER

        ARMS OUT                        ARMS PULLED IN
         \     |     /                        |
          \    O    /                         O
           \  /|\  /                         /|\
             / | \                            |
              / \                            / \

      mass far from axis            mass close to axis
      I is LARGE                    I is SMALL
      omega is SMALL (slow spin)    omega is LARGE (fast spin)

      No external torque acts (the ice is nearly frictionless), so
      I omega stays constant. Pulling the arms in reduces I, so
      omega must increase. THE SKATER SPINS FASTER.


  2. THE DIVER (somersault from a springboard)

      Leaving the board:  body stretched  ->  I large, omega small
      In mid air:         tucks into a ball -> I small, omega LARGE
                          => many fast somersaults
      Before entering water: straightens  ->  I large, omega small
                          => a clean, slow, vertical entry

      Gravity acts through the centre of gravity, so it produces NO
      torque about the CM. Hence L is conserved throughout the dive.


  3. THE PERSON ON A ROTATING STOOL WITH DUMBBELLS

              weights out                weights in
             o---[ ]     [ ]---o             o-[][]-o
                    \   /                       \ /
                     \ /                         |
                   ==stool==                 ==stool==
                      | |                       | |

      Set the stool spinning with the arms stretched out holding
      weights. Now pull the arms in:
          I decreases  ->  omega increases sharply.
      Stretch them out again and the spin slows down.
      This is the classroom demonstration of  I1 w1 = I2 w2.
```

**More examples worth a mark each:** a planet moves faster when nearer the Sun
(Kepler's second law is exactly conservation of angular momentum); a falling cat
twists to land on its feet; a ballet dancer's pirouette; a merry-go-round slows
when children move outward.

## WORKED EXAMPLE 11

*A skater spins at 2 rad/s with a moment of inertia of 6 kg m^2. She pulls her
arms in, reducing it to 2 kg m^2. Find (a) the new angular speed and
(b) the change in kinetic energy. Explain the energy change.*

```
  (a)   I1 w1  =  I2 w2

              I1 w1        6 x 2        12
        w2 = --------  =  -------  =  ------  =  6 rad/s
                I2           2           2

        She spins THREE TIMES faster.

  (b)   KE1  =  (1/2) I1 w1^2  =  0.5 x 6 x (2)^2  =  0.5 x 6 x 4  =  12 J
        KE2  =  (1/2) I2 w2^2  =  0.5 x 2 x (6)^2  =  0.5 x 2 x 36 =  36 J

        Increase = 36 - 12 = 24 J

  EXPLANATION:
        Angular momentum is conserved, but kinetic energy is NOT.
        The extra 24 J is the WORK DONE BY HER MUSCLES in pulling the
        arms inward against the outward centrifugal tendency.
```

> **TRAP:** In `I1 w1 = I2 w2`, angular momentum stays the same but the
> **kinetic energy always INCREASES when I decreases** (because
> `KE = L^2 / 2I`). Do not write "energy is also conserved".

---

# TOPIC 12 — EQUILIBRIUM OF A RIGID BODY, COUPLE, MOMENTS, LEVER

## The two conditions of equilibrium

```
  +---------------------------------------------------------------+
  |                                                               |
  |   1. TRANSLATIONAL EQUILIBRIUM                                |
  |         The vector sum of all external FORCES is zero.        |
  |            sum F  =  0                                        |
  |         => the linear momentum does not change, the CM does   |
  |            not accelerate.                                    |
  |                                                               |
  |   2. ROTATIONAL EQUILIBRIUM                                   |
  |         The vector sum of all external TORQUES is zero.       |
  |            sum tau  =  0                                      |
  |         => the angular momentum does not change, the body     |
  |            does not start spinning.                           |
  |                                                               |
  |   A rigid body is in MECHANICAL EQUILIBRIUM only when BOTH    |
  |   conditions hold together.                                   |
  |                                                               |
  +---------------------------------------------------------------+
```

## Couple

```
  A COUPLE = two equal, opposite, PARALLEL forces whose lines of
             action are DIFFERENT (not along the same line).

                          F
                    <-----------+
                                |
                                |  d     (perpendicular distance
                                |         between the two lines)
                    +----------->
                          F

      Net force   =  F - F  =  0        ->  NO translation
      Net torque  =  F x d  (NOT zero)  ->  PURE ROTATION

      MOMENT OF A COUPLE  =  F  x  d

  Examples: turning a steering wheel with two hands, winding a clock,
            turning a water tap, opening a bottle cap.

  IMPORTANT: the moment of a couple is the SAME about every point.
             You do not have to say "about which axis".
```

## Principle of moments (the see-saw / lever law)

```
  +---------------------------------------------------------------+
  |                                                               |
  |   For a body in rotational equilibrium about a pivot:         |
  |                                                               |
  |     sum of ANTICLOCKWISE moments = sum of CLOCKWISE moments   |
  |                                                               |
  |                  F1 d1   =   F2 d2                            |
  |                                                               |
  +---------------------------------------------------------------+


              d1                        d2
      |<---------------->|<--------------------------->|
      O------------------A-----------------------------O
      |                 /_\                            |
      F1  (load)      fulcrum                       F2 (effort)
```

## The lever

```
                 LOAD ARM              EFFORT ARM
      |<---- d_load ---->|<-------- d_effort -------->|
      +------------------/_\--------------------------+
      |                 fulcrum                       |
      v                                               v
     LOAD  L                                       EFFORT  E


      L x d_load  =  E x d_effort

                                 LOAD           d_effort
      MECHANICAL ADVANTAGE  =  --------   =   ------------
                                EFFORT          d_load

  If the effort arm is LONGER than the load arm, MA > 1:
  a small effort lifts a big load. That is the whole point of a
  crowbar, a spanner, a nutcracker, scissors and a wheelbarrow.
```

## WORKED EXAMPLE 12a

*A 40 kg boy sits 1.5 m from the pivot of a see-saw. Where must a 30 kg girl sit
on the other side to balance it?*

```
      Principle of moments:     m1 g d1  =  m2 g d2
      g cancels:                m1 d1    =  m2 d2

              m1 d1        40 x 1.5        60
        d2 = --------  =  ----------  =  ------  =  2 m
               m2             30           30

  ANSWER:  2 m from the pivot, on the opposite side.
           (lighter person sits FURTHER out -- matches everyday experience)
```

## WORKED EXAMPLE 12b

*A crowbar has an effort arm of 1 m and a load arm of 20 cm. What effort lifts a
500 N load, and what is the mechanical advantage?*

```
      L x d_load  =  E x d_effort

      500 x 0.20  =  E x 1.0

      100  =  E        ->    E  =  100 N

                              500
      Mechanical advantage = ------  =  5
                              100

  ANSWER:  100 N effort;  MA = 5.
```

---

# TOPIC 13 — CENTRE OF GRAVITY (AND HOW IT DIFFERS FROM CENTRE OF MASS)

## Definition

```
  CENTRE OF GRAVITY  =  the point through which the TOTAL WEIGHT of the
                        body acts, whatever the orientation of the body.

  Equivalently: the point about which the total gravitational torque
  on the body is ZERO --  sum ( ri x mi g )  =  0
```

## How to find it experimentally

```
     Balance the body on the tip of a finger / a knife edge.
     The point of balance is the centre of gravity, because there
     the clockwise and anticlockwise moments of weight cancel.

              body
        ==================
                /\
               /  \        <- reaction R = W acts here
              finger
                            The whole weight W acts downward
                            through the CG, directly above the
                            support. Net torque = 0, so it balances.
```

## The comparison table (a standard 2-mark question)

```
  +--------------------------+--------------------------------------+
  |  CENTRE OF MASS          |  CENTRE OF GRAVITY                   |
  +--------------------------+--------------------------------------+
  |  Point where the whole   |  Point where the whole WEIGHT of the |
  |  MASS is taken to be     |  body is taken to act                |
  |  concentrated            |                                      |
  +--------------------------+--------------------------------------+
  |  Depends ONLY on the     |  Depends on the mass distribution    |
  |  mass distribution and   |  AND on the gravitational field g    |
  |  the shape               |                                      |
  +--------------------------+--------------------------------------+
  |  Exists even where       |  Has no meaning where there is no    |
  |  there is NO gravity     |  gravitational field                 |
  |  (e.g. deep space)       |                                      |
  +--------------------------+--------------------------------------+
  |  Defined by              |  Defined by                          |
  |    sum( mi ri ) / M      |    sum( mi g ri ) / sum( mi g )      |
  +--------------------------+--------------------------------------+

  THEY COINCIDE when the body is small enough that g is UNIFORM over it.
  For every ordinary object in an exam question, CM = CG.

  THEY SEPARATE only for very tall / very large bodies where g varies
  from bottom to top -- for example a mountain, or a very tall building,
  where the CG lies slightly BELOW the CM (because g is stronger lower down).
```

---

# TOPIC 14 — MOMENT OF INERTIA AND RADIUS OF GYRATION

## The idea

```
  In straight-line motion, MASS measures how hard it is to change the
  velocity of a body.

  In rotation, the equivalent quantity is MOMENT OF INERTIA. It measures
  how hard it is to change the ANGULAR velocity -- so it is also called
  ROTATIONAL INERTIA.
```

**But there is one big difference.** Mass is a fixed number for a body.
Moment of inertia is **not** — the SAME body has DIFFERENT moments of inertia
about different axes.

## Definition

```
  +----------------------------------------------------------------+
  |                                                                |
  |     I  =  m1 r1^2 + m2 r2^2 + ... + mn rn^2  =  sum( mi ri^2 ) |
  |                                                                |
  |     r = PERPENDICULAR distance of each particle from the AXIS  |
  |                                                                |
  |     UNIT:  kg m^2        DIMENSIONS:  [ M L^2 T^0 ]            |
  |     It is a SCALAR (strictly, a tensor -- but treat it as a    |
  |     scalar for a fixed axis).                                  |
  |                                                                |
  |     For a continuous body:   I  =  INT r^2 dm                  |
  |                                                                |
  +----------------------------------------------------------------+
```

## What does I depend on?

```
  1.  The MASS of the body.
  2.  The way that mass is DISTRIBUTED about the axis
      (mass further out  ->  much larger I, because of the r^2).
  3.  The POSITION and DIRECTION of the AXIS of rotation.

  It does NOT depend on the angular velocity, the torque applied,
  or the material's colour/temperature.
```

> **TRAP:** "What is the moment of inertia of a disc?" is an **incomplete
> question**. You must always say **about which axis**. Always name the axis in
> your answer.

## Radius of gyration

```
  +---------------------------------------------------------------+
  |                                                               |
  |          I  =  M K^2          so         K  =  sqrt( I / M )  |
  |                                                               |
  |   K = RADIUS OF GYRATION                                      |
  |                                                               |
  |   It is the distance from the axis at which the WHOLE mass M  |
  |   could be placed as a single point, to give the SAME moment  |
  |   of inertia as the actual body.                              |
  |                                                               |
  |   UNIT: metre.   It depends on the axis, not on the mass.     |
  |                                                               |
  +---------------------------------------------------------------+


                   axis
                    |
                    |          real body, mass M, moment of inertia I
                    |    #########
                    |   ###########
                    |    #########
                    |
                    |<------ K ------> O   equivalent single point mass M
                    |
                    Both have the same I.
```

## THE TABLE — memorise every row

```
  +----------------------------------+------------------+------------+
  |  BODY  and  AXIS                 |  MOMENT OF       |  K^2 / R^2 |
  |                                  |  INERTIA  I      |            |
  +----------------------------------+------------------+------------+
  |  RING, axis through centre       |                  |            |
  |  perpendicular to its plane      |      M R^2       |     1      |
  +----------------------------------+------------------+------------+
  |  RING, about a DIAMETER          |   (1/2) M R^2    |            |
  +----------------------------------+------------------+------------+
  |  DISC, axis through centre       |                  |            |
  |  perpendicular to its plane      |   (1/2) M R^2    |    1/2     |
  +----------------------------------+------------------+------------+
  |  DISC, about a DIAMETER          |   (1/4) M R^2    |            |
  +----------------------------------+------------------+------------+
  |  ROD (length L), axis through    |                  |            |
  |  the CENTRE, perpendicular       |   (1/12) M L^2   |            |
  +----------------------------------+------------------+------------+
  |  ROD (length L), axis through    |                  |            |
  |  ONE END, perpendicular          |   (1/3) M L^2    |            |
  +----------------------------------+------------------+------------+
  |  SOLID SPHERE, about a diameter  |   (2/5) M R^2    |    2/5     |
  +----------------------------------+------------------+------------+
  |  HOLLOW SPHERE (thin shell),     |                  |            |
  |  about a diameter                |   (2/3) M R^2    |    2/3     |
  +----------------------------------+------------------+------------+
  |  SOLID CYLINDER, about its own   |                  |            |
  |  geometric axis                  |   (1/2) M R^2    |    1/2     |
  +----------------------------------+------------------+------------+
  |  HOLLOW CYLINDER (thin), about   |                  |            |
  |  its own axis                    |      M R^2       |     1      |
  +----------------------------------+------------------+------------+
  |  SOLID CYLINDER (length L),      |   M ( L^2/12     |            |
  |  axis through centre, perpend.   |      + R^2/4 )   |            |
  +----------------------------------+------------------+------------+
  |  RECTANGULAR LAMINA (l x b),     |   M ( l^2 + b^2 )|            |
  |  axis through centre perpend.    |   ---------------|            |
  |  to the plane                    |         12       |            |
  +----------------------------------+------------------+------------+

  PATTERN TO NOTICE:
      ring / hollow cylinder  (all mass at R)   ->  BIGGEST I  =  M R^2
      disc / solid cylinder                     ->  half of that
      solid sphere (mass packed near centre)    ->  SMALLEST, (2/5) M R^2
```

## WORKED EXAMPLE 14

*Four particles, each of mass 2 kg, sit at the corners of a square of side 2 m.
Find the moment of inertia about an axis through the centre of the square,
perpendicular to its plane. Also find the radius of gyration.*

```
  STEP 1   Find r, the distance of each corner from the centre.

        Diagonal of the square = side x sqrt(2) = 2 sqrt(2) m
        Half the diagonal      = sqrt(2) m

        So  r = sqrt(2) m  and  r^2 = 2 m^2  for every corner.

        O------------O
        |    \  /    |
        |     \/     |     r = half the diagonal = sqrt(2)
        |     /\     |
        |    /  \    |
        O------------O

  STEP 2   Apply  I = sum( m r^2 ).

        I  =  4 x ( 2 x 2 )  =  4 x 4  =  16 kg m^2

  STEP 3   Radius of gyration.  Total mass M = 4 x 2 = 8 kg.

              /  I  \        /  16  \
        K = sqrt| --- |  = sqrt| ---- |  =  sqrt(2)  =  1.414 m
              \  M  /        \   8  /

  ANSWER:  I = 16 kg m^2 ,  K = 1.414 m
```

---

# TOPIC 15 — THE TWO THEOREMS

These are the highest-value 4 marks in the whole chapter. Learn the statements
**word for word** and be able to draw both diagrams.

## THEOREM 1 — PARALLEL AXES THEOREM

```
  STATEMENT
  "The moment of inertia of a body about ANY axis is equal to the sum of
   its moment of inertia about a PARALLEL axis passing through its CENTRE
   OF MASS, and the product of its mass and the SQUARE OF THE PERPENDICULAR
   DISTANCE between the two axes."

  +---------------------------------------------------------------+
  |                                                               |
  |             I   =   I_cm   +   M d^2                          |
  |                                                               |
  +---------------------------------------------------------------+


  DIAGRAM
                axis through CM        the new parallel axis
                       |                        |
                       |                        |
                       |                        |
              #########|########                |
            #####################               |
            #########  X  #######               |
            #####################               |
              ##################                |
                       |                        |
                       |<--------- d ---------->|
                       |                        |

           I_cm about this axis      I about this axis = I_cm + M d^2


  WORKS FOR: any body, any shape, 2D or 3D.
  CONDITION: the two axes must be PARALLEL and one of them MUST pass
             through the CENTRE OF MASS.
  RESULT   : I is always SMALLEST about the axis through the CM,
             because M d^2 is never negative.
```

### Worked application of the parallel axes theorem

*(a) Find the moment of inertia of a rod about a perpendicular axis through
one end, given that about the centre it is M L^2 / 12.*

```
      I_cm  =  M L^2 / 12          d = L / 2

      I  =  I_cm  +  M d^2

               M L^2          / L \ 2         M L^2       M L^2
         =   ---------  +  M | --- |     =  ---------  + ---------
                 12           \ 2 /             12           4

               M L^2   +   3 M L^2         4 M L^2         M L^2
         =   ----------------------   =   ----------  =  ---------
                       12                     12              3

  ANSWER:  I = M L^2 / 3        (matches the standard table value.  GOOD)
```

*(b) Find the moment of inertia of a disc about a tangent lying in its plane.*

```
      About a DIAMETER:   I_cm = (1/4) M R^2
      A tangent in the plane is parallel to a diameter, at distance d = R.

      I  =  (1/4) M R^2  +  M R^2   =  (1/4 + 1) M R^2  =  (5/4) M R^2

  ANSWER:  I = (5/4) M R^2
```

**Ready-made results from the parallel axes theorem (memorise these four):**

```
  +---------------------------------------+---------------------+
  |  Ring, tangent in its plane           |   (3/2) M R^2       |
  |  Ring, tangent perpendicular to plane |    2    M R^2       |
  |  Disc, tangent perpendicular to plane |   (3/2) M R^2       |
  |  Solid sphere, about a TANGENT        |   (7/5) M R^2       |
  |  Hollow sphere, about a TANGENT       |   (5/3) M R^2       |
  +---------------------------------------+---------------------+
```

## THEOREM 2 — PERPENDICULAR AXES THEOREM

```
  STATEMENT
  "The moment of inertia of a PLANE LAMINA about an axis perpendicular to
   its plane is equal to the SUM of its moments of inertia about two
   mutually perpendicular axes lying IN the plane of the lamina and
   intersecting at the point where the perpendicular axis passes through it."

  +---------------------------------------------------------------+
  |                                                               |
  |             I_z   =   I_x   +   I_y                           |
  |                                                               |
  +---------------------------------------------------------------+


  DIAGRAM
                       Z  (perpendicular to the lamina)
                       ^
                       |
                       |
                       |
              #########|#########
            ###########|###########
          #############O##############---------> Y   (in the plane)
            ##########/############
              #######/#########
                    /
                   /
                  v
                 X   (in the plane, perpendicular to Y)


          I_z  =  I_x  +  I_y


  CONDITIONS -- state these or you lose marks:
      1. The body must be a PLANE LAMINA (a flat, two-dimensional sheet).
         It does NOT apply to a sphere, a cylinder or any 3D solid.
      2. X, Y and Z must be MUTUALLY PERPENDICULAR.
      3. All three axes must meet at ONE common point.
      4. X and Y lie IN the plane; Z is perpendicular to it.
```

### Worked application of the perpendicular axes theorem

*(a) Find the moment of inertia of a RING about its diameter.*

```
      Take Z as the axis through the centre, perpendicular to the ring.
          I_z  =  M R^2                (standard result)

      Take X and Y as two perpendicular DIAMETERS.
      By symmetry the ring looks identical about both, so
          I_x  =  I_y  =  I_d

      Perpendicular axes theorem:
          I_z  =  I_x  +  I_y
          M R^2  =  I_d  +  I_d  =  2 I_d

                    M R^2
          I_d   =  --------
                      2

  ANSWER:  I about a diameter  =  (1/2) M R^2       GOOD, matches the table.
```

*(b) Find the moment of inertia of a DISC about its diameter.*

```
          I_z  =  (1/2) M R^2
          I_x  =  I_y  =  I_d      (by symmetry)

          (1/2) M R^2  =  2 I_d

                       M R^2
          I_d  =   -----------
                        4

  ANSWER:  I about a diameter  =  (1/4) M R^2       GOOD.
```

> **TRAP:** Students apply the perpendicular axes theorem to a **sphere** or a
> **solid cylinder**. It is ONLY for **flat laminae**. The parallel axes theorem,
> on the other hand, works for **any** body.

## Both theorems in one problem

*Find the moment of inertia of a disc about a tangent perpendicular to its plane.*

```
  STEP 1  (perpendicular axes not needed here -- start from the table)
          I about the central perpendicular axis  =  (1/2) M R^2

  STEP 2  (parallel axes) shift that axis outwards by d = R:

          I  =  (1/2) M R^2  +  M R^2  =  (3/2) M R^2

  ANSWER:  (3/2) M R^2
```

---

# TOPIC 16 — ROTATIONAL ANALOGUES, KINETIC ENERGY, WORK AND POWER

## The translation table — learn this and the chapter halves in size

```
  +--------------------------+--------------------------+----------------+
  |  LINEAR MOTION           |  ROTATIONAL MOTION       |  RELATION      |
  +--------------------------+--------------------------+----------------+
  |  Displacement   s        |  Angular disp.  theta    |  s = r theta   |
  |  Velocity       v        |  Angular vel.   omega    |  v = r omega   |
  |  Acceleration   a        |  Angular acc.   alpha    |  a = r alpha   |
  |  Mass           m        |  Moment of inertia  I    |  I = sum m r^2 |
  |  Force          F        |  Torque         tau      |  tau = r x F   |
  |  Momentum       p = m v  |  Ang. momentum  L = I w  |  L = r x p     |
  +--------------------------+--------------------------+----------------+
  |  F = m a                 |  tau = I alpha           |                |
  |  F = dp/dt               |  tau = dL/dt             |                |
  |  KE = (1/2) m v^2        |  KE = (1/2) I omega^2    |                |
  |  W = F s                 |  W = tau theta           |                |
  |  P = F v                 |  P = tau omega           |                |
  |  Impulse = F t = dp      |  Ang. impulse = tau t=dL |                |
  +--------------------------+--------------------------+----------------+
  |  v = u + a t             |  w = w0 + alpha t        |                |
  |  s = u t + (1/2) a t^2   |  th = w0 t + (1/2)a t^2  |                |
  |  v^2 = u^2 + 2 a s       |  w^2 = w0^2 + 2 alpha th |                |
  +--------------------------+--------------------------+----------------+
  |  F = 0 => p constant     |  tau = 0 => L constant   |                |
  +--------------------------+--------------------------+----------------+
```

## Rotational kinetic energy — the derivation

```
  Take a body rotating with angular velocity omega. A particle of mass
  mi at distance ri from the axis moves with speed  vi = ri omega.

      KE of that particle  =  (1/2) mi vi^2  =  (1/2) mi ri^2 omega^2

  Add up over all the particles (omega is the same for all of them):

      KE  =  (1/2) [ sum( mi ri^2 ) ] omega^2

  +---------------------------------------------------------------+
  |                                                               |
  |          KE_rotational   =   (1/2)  I  omega^2                |
  |                                                               |
  |          also           =   L^2 / ( 2 I )                     |
  |                          =   (1/2) L omega                    |
  |                                                               |
  +---------------------------------------------------------------+


  PHYSICAL MEANING OF I:
      Compare  KE = (1/2) m v^2  with  KE = (1/2) I omega^2.
      I plays exactly the role that mass plays in linear motion.
      That is why I is called ROTATIONAL INERTIA -- it is the body's
      opposition to any change in its state of rotation.
```

## Work and power in rotation

```
      Work done by a constant torque:      W  =  tau  x  theta

      Work-energy theorem (rotational):

          W  =  (1/2) I w2^2  -  (1/2) I w1^2

      Power delivered by a torque:         P  =  tau  x  omega
```

## WORKED EXAMPLE 16

*A flywheel of moment of inertia 20 kg m^2 spins at 10 rad/s.
(a) Find its kinetic energy and angular momentum.
(b) A constant torque of 50 N m acts on it. Find the angular acceleration and
the power delivered at that instant.*

```
  (a)   KE  =  (1/2) I omega^2  =  0.5 x 20 x (10)^2
                                =  0.5 x 20 x 100   =  1000 J

        L   =  I omega  =  20 x 10  =  200 kg m^2/s

  (b)   tau = I alpha

                tau        50
        alpha = -----  =  ----  =  2.5 rad/s^2
                  I        20

        P  =  tau x omega  =  50 x 10  =  500 W

  ANSWER:  1000 J ,  200 kg m^2/s ,  2.5 rad/s^2 ,  500 W
```

---

# TOPIC 17 — ROLLING MOTION

## What rolling is

```
  ROLLING  =  TRANSLATION of the centre of mass  +  ROTATION about the
              centre of mass, happening at the same time.
```

## Condition for rolling WITHOUT SLIPPING

```
  +---------------------------------------------------------------+
  |                                                               |
  |            v_cm   =   R  omega                                |
  |                                                               |
  |   (and, if it is speeding up,   a_cm  =  R alpha )            |
  |                                                               |
  |   Physically: the point of the wheel touching the ground is   |
  |   INSTANTANEOUSLY AT REST. It does not slide.                 |
  |                                                               |
  +---------------------------------------------------------------+


  VELOCITIES AT DIFFERENT POINTS OF A ROLLING WHEEL

                    ------> 2 v      TOP  (fastest -- v from translation
                   .......             PLUS v from rotation)
                 .         .
                .           .
               .      C ----.--> v   CENTRE (moves with v)
                .           .
                 .         .
                   .......
      ================O================
                   BOTTOM  ->  ZERO velocity
                   (v forward from translation cancels
                    v backward from rotation)

      v_top = 2 v      v_centre = v      v_bottom = 0
```

## Total kinetic energy of a rolling body

```
      KE_total  =  KE_translational  +  KE_rotational

                =  (1/2) M v^2   +   (1/2) I omega^2

  Put  I = M K^2  and  omega = v / R :

                                          v^2
                =  (1/2) M v^2 + (1/2) M K^2 ----
                                          R^2
```

```
  +---------------------------------------------------------------+
  |                                                               |
  |                          1          /       K^2  \            |
  |         KE_total   =    ---  M v^2 |  1  +  ---   |           |
  |                          2          \       R^2  /            |
  |                                                               |
  +---------------------------------------------------------------+
```

```
  SPLIT OF THE ENERGY

      Rotational fraction  =  (K^2/R^2) / ( 1 + K^2/R^2 )
      Translational fraction =    1     / ( 1 + K^2/R^2 )

  +---------------------+--------------+--------------+-------------+
  |  BODY               |  K^2 / R^2   |  TRANSL. KE  |  ROT. KE    |
  +---------------------+--------------+--------------+-------------+
  |  Solid sphere       |     2/5      |     5/7      |    2/7      |
  |  Disc / solid cyl.  |     1/2      |     2/3      |    1/3      |
  |  Hollow sphere      |     2/3      |     3/5      |    2/5      |
  |  Ring / hollow cyl. |      1       |     1/2      |    1/2      |
  +---------------------+--------------+--------------+-------------+
```

## Rolling down an inclined plane

```
  THE DIAGRAM  --  draw exactly this

                              /|
                            /  |
                          /    |
                        /  O   |
                      /   ( )  |  <- body of mass M, radius R, rolling
                    /     ---  |     down without slipping
                  /   f  /|    |
                /       / |    | h
              /        /  |    |
            /   Mg sin(th) |Mg cos(th)
          /            |   |    |
        /       th     |Mg |    |
      /________________v___|____|
      |<----------- s ---------->|

      s = h / sin(theta)

      Forces along the slope:  Mg sin(theta)  down,  friction f  up.
      Friction supplies the TORQUE that makes it spin.
      Since the contact point does not slide, friction does NO WORK,
      so mechanical energy is CONSERVED.
```

### Derivation by energy conservation

```
      Loss in PE  =  gain in total KE

                          1          /      K^2 \
          M g h    =     ---  M v^2 | 1  +  --- |
                          2          \      R^2 /

  +---------------------------------------------------------------+
  |                                                                |
  |                    /        2 g h          \                   |
  |        v   =   sqrt|  ---------------------  |                 |
  |                    \    1  +  K^2 / R^2     /                  |
  |                                                                |
  +---------------------------------------------------------------+
```

### Acceleration, time, and the friction needed

```
  +---------------------------------------------------------------+
  |                                                                |
  |                     g sin( theta )                             |
  |         a   =   ---------------------                          |
  |                    1  +  K^2 / R^2                             |
  |                                                                |
  |                     1          /  2 h (1 + K^2/R^2)  \         |
  |         t   =   ----------- sqrt|  -------------------  |      |
  |                  sin(theta)     \          g          /        |
  |                                                                |
  |                    ( K^2 / R^2 ) tan( theta )                  |
  |         mu   >=   -----------------------------                |
  |                        1  +  K^2 / R^2                         |
  |             (minimum friction needed to avoid slipping)        |
  |                                                                |
  +---------------------------------------------------------------+
```

## WHICH BODY REACHES THE BOTTOM FIRST?

```
  Look at    a  =  g sin(theta) / ( 1 + K^2/R^2 ).

  Notice what is NOT in that formula:  M and R.
  So a big heavy ring and a small light ring arrive TOGETHER.
  Only the SHAPE matters, through K^2/R^2.

      SMALLER K^2/R^2  ->  LARGER a  ->  LARGER v  ->  arrives FIRST


  +--------------------+-----------+-----------------------+---------+
  |  BODY              | K^2 / R^2 |  a  (theta = 30 deg,  |  ORDER  |
  |                    |           |     g = 10 m/s^2)     |         |
  +--------------------+-----------+-----------------------+---------+
  |  Solid sphere      |    0.40   |   5 / 1.40  = 3.57    |   1st   |
  |  Disc / solid cyl. |    0.50   |   5 / 1.50  = 3.33    |   2nd   |
  |  Hollow sphere     |    0.67   |   5 / 1.67  = 3.00    |   3rd   |
  |  Ring / hollow cyl.|    1.00   |   5 / 2.00  = 2.50    |   last  |
  +--------------------+-----------+-----------------------+---------+

  THE ONE-LINE REASON (write this in the exam):
      "The solid sphere has the smallest K^2/R^2, so the smallest
       fraction of its energy goes into rotation and the largest
       fraction into translation. Hence it has the greatest linear
       acceleration and reaches the bottom first. The ring, with all
       its mass at the rim, has the largest K^2/R^2 and comes last."

  AND REMEMBER:
      A body SLIDING down a frictionless incline beats them ALL,
      because a = g sin(theta) with no rotation stealing energy.
```

## WORKED EXAMPLE 17a

*A solid sphere rolls without slipping down an incline from a height of 7 m.
Find its speed at the bottom. (g = 9.8 m/s^2)*

```
  For a solid sphere,  K^2/R^2 = 2/5 = 0.4

                 /      2 g h       \          /   2 x 9.8 x 7   \
      v  =   sqrt|  ---------------  |  =  sqrt |  --------------  |
                 \   1 + K^2/R^2    /          \    1  +  0.4    /

                 /  137.2  \
        =   sqrt |  -------  |   =   sqrt( 98 )   =   9.9 m/s
                 \   1.4   /

  ANSWER:  about 9.9 m/s

  COMPARE: a body simply SLIDING down would reach
           v = sqrt(2 g h) = sqrt(137.2) = 11.7 m/s -- faster,
           because none of its energy went into spinning.
```

## WORKED EXAMPLE 17b

*A disc of mass 2 kg rolls without slipping at 3 m/s. Find its total kinetic
energy and how it splits.*

```
  For a disc,  K^2/R^2 = 1/2

                  1          /      K^2 \
      KE_total = ---  M v^2 | 1  +  --- |
                  2          \      R^2 /

               =  0.5 x 2 x (3)^2 x ( 1 + 0.5 )

               =  0.5 x 2 x 9 x 1.5   =   13.5 J

  SPLIT:
      Translational  =  (1/2) M v^2   =  0.5 x 2 x 9  =  9 J    (2/3)
      Rotational     =  13.5 - 9      =  4.5 J                  (1/3)

  ANSWER:  13.5 J total;  9 J translational  +  4.5 J rotational
           Check the fractions: 9/13.5 = 2/3 and 4.5/13.5 = 1/3.  GOOD.
```

> **TRAP:** In rolling problems students use `KE = (1/2) M v^2` only, and lose
> the rotational part. Rolling ALWAYS has both terms. Write both, every time.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Every centre-of-mass answer divided by the TOTAL MASS, not by n.
  [ ]  Said "the CM may lie outside the body" if the question mentions
       a ring / shell / horseshoe.
  [ ]  Cross products expanded with the MINUS sign in front of j.
  [ ]  Verified each cross product by dotting it with the original
       vectors and getting zero.
  [ ]  Torque written in N m, work written in J -- never mixed up.
  [ ]  Every moment of inertia answer names THE AXIS it is about.
  [ ]  Parallel axes theorem used only with one axis through the CM.
  [ ]  Perpendicular axes theorem used ONLY on a flat lamina.
  [ ]  In conservation of angular momentum, said "no EXTERNAL torque",
       and did NOT claim kinetic energy is conserved as well.
  [ ]  Rolling kinetic energy includes BOTH the translational and the
       rotational terms.
  [ ]  Angles converted to RADIANS wherever theta, omega or alpha appear.
  [ ]  rpm converted with  omega = 2 pi N / 60.
  [ ]  Units written on every final answer:
           I -> kg m^2 , tau -> N m , L -> kg m^2/s , omega -> rad/s.
  [ ]  Diagrams drawn and LABELLED for torque, the two theorems, and
       the incline. Labelled diagrams carry marks on their own.
```
