# Systems of Particles and Rotational Motion — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

---

# 1. CENTRE OF MASS

```
  TWO PARTICLES
                       m1 x1  +  m2 x2
            X_cm  =  --------------------            and     m1 d1 = m2 d2
                          m1  +  m2


  n PARTICLES
                       sum( mi xi )              sum( mi yi )
            X_cm  =  ---------------    Y_cm  = ---------------
                            M                          M

            M  =  total mass  =  sum( mi )


  VECTOR FORM
                       sum( mi ri )
            R_cm  =  ----------------          or       M R_cm = sum( mi ri )
                            M


  CONTINUOUS BODY
                       1
            R_cm  =   ---  INT  r  dm
                       M
```

| Formula | When to use |
|---|---|
| `X_cm = (m1x1 + m2x2)/(m1+m2)` | Any two-particle system on a line |
| `m1 d1 = m2 d2` | "How far from the CM is each mass?" / see-saw style |
| `X_cm = sum(mi xi)/M` | Three or more particles, or a system of point masses |
| `Y_cm`, `Z_cm` similarly | 2D or 3D arrangements — do each coordinate separately |
| `R_cm = (1/M) INT r dm` | Only if the question says "for a continuous body" |

---

# 2. CENTRE OF MASS OF STANDARD UNIFORM BODIES

```
  +---------------------------------+------------------------------------+
  |  BODY                           |  CENTRE OF MASS IS AT              |
  +---------------------------------+------------------------------------+
  |  Uniform rod, length L          |  the midpoint,  L/2                |
  |  Circular ring, radius R        |  the centre  (in EMPTY SPACE)      |
  |  Circular disc, radius R        |  the centre                        |
  |  Solid sphere                   |  the centre                        |
  |  Hollow sphere / shell          |  the centre  (in EMPTY SPACE)      |
  |  Cylinder                       |  midpoint of the axis              |
  |  Square / rectangular lamina    |  intersection of the diagonals     |
  |  TRIANGULAR lamina              |  the CENTROID                      |
  |                                 |  ( (x1+x2+x3)/3 , (y1+y2+y3)/3 )   |
  |  Cube / cuboid                  |  the centre of the body            |
  +---------------------------------+------------------------------------+

  EXTRA RESULTS (mostly for EAPCET / JEE)

  +---------------------------------+------------------------------------+
  |  Semicircular RING              |  2 R / pi        from the centre   |
  |  Semicircular DISC              |  4 R / (3 pi)    from the centre   |
  |  Solid HEMISPHERE               |  3 R / 8         from the flat face|
  |  Hemispherical SHELL            |  R / 2           from the flat face|
  |  Solid CONE, height h           |  h / 4           from the base     |
  +---------------------------------+------------------------------------+
```

---

# 3. MOTION OF THE CENTRE OF MASS AND LINEAR MOMENTUM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     M V_cm  =  m1 v1 + m2 v2 + ...        V_cm = sum(mi vi) / M    |
  |                                                                    |
  |     M A_cm  =  m1 a1 + m2 a2 + ...        A_cm = sum(mi ai) / M    |
  |                                                                    |
  |     P_total  =  M  V_cm                                            |
  |                                                                    |
  |     M A_cm  =  F_EXTERNAL         dP/dt  =  F_EXTERNAL             |
  |                                                                    |
  |     IF  F_external = 0   THEN   P = constant  and  V_cm = constant |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `V_cm = sum(mi vi)/M` | Velocity of the CM of two or more moving particles |
| `P = M V_cm` | Converting between total momentum and CM motion |
| `M A_cm = F_ext` | Proving internal forces cannot move the CM |
| `P_before = P_after` | Explosions, recoil, collisions, man-on-a-boat |
| "CM of an isolated system moves with constant velocity" | The exam sentence — write it exactly |

---

# 4. VECTOR (CROSS) PRODUCT

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |       A x B   =   A B sin( theta )  n^                             |
  |                                                                    |
  |                   |  i    j    k  |                                |
  |       A x B   =   |  a1   a2   a3 |                                |
  |                   |  b1   b2   b3 |                                |
  |                                                                    |
  |               =   i ( a2 b3 - a3 b2 )                              |
  |                 - j ( a1 b3 - a3 b1 )        <-- MINUS on j        |
  |                 + k ( a1 b2 - a2 b1 )                              |
  |                                                                    |
  +--------------------------------------------------------------------+

  RULES
      A x B  =  -( B x A )                       not commutative
      A x A  =  0                                parallel -> zero
      |A x B| is MAXIMUM = A B  when theta = 90 deg

      i x j = k      j x k = i      k x i = j
      j x i = -k     k x j = -i     i x k = -j
      i x i = j x j = k x k = 0

  AREA OF A TRIANGLE with sides as vectors A and B  =  (1/2) | A x B |
  AREA OF A PARALLELOGRAM with sides A and B        =  | A x B |
```

| Formula | When to use |
|---|---|
| Determinant expansion | Any "find A x B" or vector torque / vector L question |
| `(A x B) . A = 0` | To CHECK your cross product is right — always do it |
| `\|A x B\| = AB sin theta` | Finding the angle between two vectors |
| `(1/2)\|A x B\|` | Area of a triangle |

---

# 5. ANGULAR KINEMATICS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   theta in RADIANS               s  =  r theta                     |
  |                                                                    |
  |   omega  =  d(theta)/dt          alpha  =  d(omega)/dt             |
  |                                                                    |
  |                2 pi N                                              |
  |   omega  =  -----------   (N in rpm)      omega = 2 pi n = 2 pi/T  |
  |                  60                                                |
  |                                                                    |
  |   v  =  r omega            (vector form  v = omega x r )           |
  |                                                                    |
  |   a_tangential  =  r alpha                                         |
  |   a_centripetal =  r omega^2  =  v^2 / r                           |
  |                                                                    |
  +--------------------------------------------------------------------+

  EQUATIONS OF ROTATIONAL MOTION (constant alpha)

  +----------------------------------+---------------------------------+
  |  LINEAR                          |  ROTATIONAL                     |
  +----------------------------------+---------------------------------+
  |  v = u + a t                     |  w = w0 + alpha t               |
  |  s = u t + (1/2) a t^2           |  theta = w0 t + (1/2) alpha t^2 |
  |  v^2 = u^2 + 2 a s               |  w^2 = w0^2 + 2 alpha theta     |
  +----------------------------------+---------------------------------+
```

| Formula | When to use |
|---|---|
| `omega = 2 pi N / 60` | Question gives rpm (fan, wheel, motor) |
| `v = r omega` | Speed of a point on a rotating body / rolling condition |
| `w = w0 + alpha t` | "Reaches X rpm in t seconds" |
| `w^2 = w0^2 + 2 alpha theta` | Number of revolutions before stopping |
| Revolutions `= theta / (2 pi)` | Converting the angle turned into revolutions |

---

# 6. TORQUE

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |       tau  =  r  x  F                                              |
  |                                                                    |
  |     | tau |  =  r F sin( theta )  =  F x d                         |
  |                                                                    |
  |       d  =  r sin(theta)  =  perpendicular distance from the axis  |
  |             to the LINE OF ACTION of F  (the "moment arm")         |
  |                                                                    |
  |       tau  =  I  alpha           tau  =  dL / dt                   |
  |                                                                    |
  |       UNIT: N m        DIMENSIONS: [ M L^2 T^-2 ]                  |
  |                                                                    |
  |       MOMENT OF A COUPLE  =  F  x  d                               |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `tau = r F sin theta` | Force applied at an angle to a spanner/door/rod |
| `tau = F d` | When the perpendicular distance is directly given |
| `tau = r x F` (determinant) | When r and F are given in i, j, k form |
| `tau = I alpha` | Torque needed to give an angular acceleration |
| `tau = dL/dt` | Derivation questions, and "torque from change in L" |
| `F1 d1 = F2 d2` | See-saw, lever, balanced rod, principle of moments |

---

# 7. ANGULAR MOMENTUM AND ITS CONSERVATION

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     L  =  r  x  p  =  r x ( m v )                                  |
  |                                                                    |
  |   | L | =  m v r sin( theta )                                      |
  |                                                                    |
  |     L  =  I  omega          (rigid body about a fixed axis)        |
  |                                                                    |
  |     tau_ext  =  dL / dt                                            |
  |                                                                    |
  |     Angular impulse  =  tau x t  =  change in L                    |
  |                                                                    |
  |     UNIT: kg m^2 / s  (= J s)     DIMENSIONS: [ M L^2 T^-1 ]       |
  |                                                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |          CONSERVATION OF ANGULAR MOMENTUM                          |
  |                                                                    |
  |     IF  tau_EXTERNAL = 0   THEN   L = constant                     |
  |                                                                    |
  |                 I1 omega1   =   I2 omega2                          |
  |                                                                    |
  |     I down -> omega up          I up -> omega down                 |
  |                                                                    |
  |     Note:  KE = L^2 / (2 I)  ,  so when I falls, KE RISES          |
  |            (the extra energy comes from the muscles / motor)       |
  |                                                                    |
  +--------------------------------------------------------------------+

  EXAMPLES TO QUOTE:  ice skater pulling arms in, diver tucking,
                      person on a rotating stool with dumbbells,
                      planet speeding up near the Sun (Kepler's 2nd law),
                      a falling cat turning to land on its feet.
```

| Formula | When to use |
|---|---|
| `L = m v r sin theta` | Angular momentum of a single particle |
| `L = r x p` (determinant) | r and v given in i, j, k form |
| `L = I omega` | Any rigid body spinning about a fixed axis |
| `I1 w1 = I2 w2` | Skater / stool / shrinking-star problems |
| `KE = L^2 / 2I` | Comparing KE before and after I changes |

---

# 8. EQUILIBRIUM OF A RIGID BODY

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     1.  sum of FORCES   =  0      ->  translational equilibrium    |
  |     2.  sum of TORQUES  =  0      ->  rotational equilibrium       |
  |                                                                    |
  |     BOTH must hold for mechanical equilibrium.                     |
  |                                                                    |
  |     PRINCIPLE OF MOMENTS                                           |
  |         anticlockwise moments  =  clockwise moments                |
  |                    F1 d1  =  F2 d2                                 |
  |                                                                    |
  |     LEVER                                                          |
  |         Load x load arm  =  Effort x effort arm                    |
  |                                                                    |
  |                                 Load        effort arm             |
  |         Mechanical advantage = -------- = -------------            |
  |                                Effort       load arm               |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# 9. CENTRE OF MASS  vs  CENTRE OF GRAVITY

```
  +--------------------------+------------------------------------------+
  |  CENTRE OF MASS          |  CENTRE OF GRAVITY                       |
  +--------------------------+------------------------------------------+
  |  Whole MASS acts here    |  Whole WEIGHT acts here                  |
  |  sum( mi ri ) / M        |  sum( mi g ri ) / sum( mi g )            |
  |  Independent of g        |  Depends on g                            |
  |  Exists with no gravity  |  Meaningless with no gravity             |
  |  Fixed by shape and mass |  Can shift if g varies over the body     |
  +--------------------------+------------------------------------------+

  THEY COINCIDE whenever g is uniform over the body -- which is true for
  every ordinary object. They separate only for enormous bodies
  (mountains, very tall structures), where the CG lies slightly BELOW
  the CM because g is stronger nearer the Earth.
```

---

# 10. MOMENT OF INERTIA — THE MAIN TABLE  *** memorise all of this ***

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     I  =  sum( mi ri^2 )   =   INT r^2 dm   =   M K^2              |
  |                                                                    |
  |     K  =  sqrt( I / M )    =   RADIUS OF GYRATION                  |
  |                                                                    |
  |     UNIT: kg m^2       DIMENSIONS: [ M L^2 T^0 ]                   |
  |                                                                    |
  |     Depends on:  (1) mass                                          |
  |                  (2) distribution of that mass about the axis      |
  |                  (3) position and direction of the AXIS            |
  |                                                                    |
  +--------------------------------------------------------------------+


  +------------------------------------+------------------+------------+
  |  BODY  and  AXIS                   |  I               |  K^2 / R^2 |
  +------------------------------------+------------------+------------+
  |  RING, central perpendicular axis  |    M R^2         |     1      |
  |  RING, about a diameter            |  (1/2) M R^2     |            |
  |  RING, tangent in its plane        |  (3/2) M R^2     |            |
  |  RING, tangent perpendicular       |    2   M R^2     |            |
  +------------------------------------+------------------+------------+
  |  DISC, central perpendicular axis  |  (1/2) M R^2     |    1/2     |
  |  DISC, about a diameter            |  (1/4) M R^2     |            |
  |  DISC, tangent in its plane        |  (5/4) M R^2     |            |
  |  DISC, tangent perpendicular       |  (3/2) M R^2     |            |
  +------------------------------------+------------------+------------+
  |  ROD (length L), centre, perpend.  |  (1/12) M L^2    |            |
  |  ROD (length L), one END, perpend. |  (1/3)  M L^2    |            |
  +------------------------------------+------------------+------------+
  |  SOLID SPHERE, about a diameter    |  (2/5) M R^2     |    2/5     |
  |  SOLID SPHERE, about a tangent     |  (7/5) M R^2     |            |
  +------------------------------------+------------------+------------+
  |  HOLLOW SPHERE, about a diameter   |  (2/3) M R^2     |    2/3     |
  |  HOLLOW SPHERE, about a tangent    |  (5/3) M R^2     |            |
  +------------------------------------+------------------+------------+
  |  SOLID CYLINDER, own axis          |  (1/2) M R^2     |    1/2     |
  |  HOLLOW CYLINDER (thin), own axis  |    M R^2         |     1      |
  |  SOLID CYLINDER (length L),        |  M( L^2/12       |            |
  |     centre, perpendicular to axis  |     + R^2/4 )    |            |
  +------------------------------------+------------------+------------+
  |  RECTANGULAR LAMINA (l x b),       |  M( l^2 + b^2 )  |            |
  |     centre, perpendicular to plane |  ---------------  |            |
  |                                    |        12        |            |
  +------------------------------------+------------------+------------+
```

| Formula | When to use |
|---|---|
| `I = sum(mi ri^2)` | Point masses at the corners of a square/triangle/rod |
| `K = sqrt(I/M)` | Any "find the radius of gyration" question |
| Table value | Always — never try to integrate in the board exam |
| `K^2/R^2` column | Every rolling question. This column IS the rolling chapter |

---

# 11. THE TWO THEOREMS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PARALLEL AXES THEOREM                                            |
  |                                                                    |
  |            I  =  I_cm  +  M d^2                                    |
  |                                                                    |
  |   d = perpendicular distance between the two PARALLEL axes.        |
  |   One axis MUST pass through the centre of mass.                   |
  |   Works for ANY body -- 2D or 3D.                                  |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PERPENDICULAR AXES THEOREM                                       |
  |                                                                    |
  |            I_z  =  I_x  +  I_y                                     |
  |                                                                    |
  |   ONLY for a PLANE LAMINA.                                         |
  |   X and Y lie IN the plane; Z is perpendicular to it.              |
  |   All three axes meet at one point.                                |
  |                                                                    |
  +--------------------------------------------------------------------+

  QUICK PROOFS TO QUOTE

      Ring about a diameter:   I_z = M R^2 = 2 I_d   ->  I_d = M R^2 / 2
      Disc about a diameter:   I_z = M R^2/2 = 2 I_d ->  I_d = M R^2 / 4
      Rod about one end:       I = M L^2/12 + M(L/2)^2  =  M L^2 / 3
      Sphere about a tangent:  I = (2/5)M R^2 + M R^2  =  (7/5) M R^2
```

---

# 12. ROTATIONAL DYNAMICS, ENERGY, WORK AND POWER

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     tau  =  I  alpha                                               |
  |                                                                    |
  |     KE_rotational  =  (1/2) I omega^2  =  L^2 / (2 I) = (1/2)L w   |
  |                                                                    |
  |     W  =  tau  x  theta                                            |
  |                                                                    |
  |     W  =  (1/2) I w2^2  -  (1/2) I w1^2      (work-energy theorem) |
  |                                                                    |
  |     P  =  tau  x  omega                                            |
  |                                                                    |
  +--------------------------------------------------------------------+


  THE FULL ANALOGUE TABLE  --  learn this and half the chapter is free

  +-----------------------------+--------------------------------------+
  |  LINEAR                     |  ROTATIONAL                          |
  +-----------------------------+--------------------------------------+
  |  s   displacement           |  theta   angular displacement        |
  |  v   velocity               |  omega   angular velocity            |
  |  a   acceleration           |  alpha   angular acceleration        |
  |  m   mass                   |  I       moment of inertia           |
  |  F   force                  |  tau     torque                      |
  |  p = m v                    |  L = I omega                         |
  |  F = m a                    |  tau = I alpha                       |
  |  F = dp/dt                  |  tau = dL/dt                         |
  |  KE = (1/2) m v^2           |  KE = (1/2) I omega^2                |
  |  W = F s                    |  W = tau theta                       |
  |  P = F v                    |  P = tau omega                       |
  |  Impulse = F t = dp         |  Angular impulse = tau t = dL        |
  |  F = 0  =>  p constant      |  tau = 0  =>  L constant             |
  +-----------------------------+--------------------------------------+
```

---

# 13. ROLLING MOTION

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   CONDITION FOR ROLLING WITHOUT SLIPPING                           |
  |                                                                    |
  |             v_cm  =  R omega           a_cm  =  R alpha            |
  |                                                                    |
  |   Velocities:   top = 2v ,  centre = v ,  contact point = 0        |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TOTAL KINETIC ENERGY                                             |
  |                                                                    |
  |     KE  =  (1/2) M v^2  +  (1/2) I omega^2                         |
  |                                                                    |
  |               1          /       K^2  \                            |
  |         =    ---  M v^2 |  1  +  ----  |                           |
  |               2          \       R^2  /                            |
  |                                                                    |
  |     rotational fraction  =  (K^2/R^2) / (1 + K^2/R^2)              |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   ROLLING DOWN AN INCLINE of angle theta, height h                 |
  |                                                                    |
  |                    /      2 g h      \                             |
  |       v  =    sqrt |  ---------------  |                           |
  |                    \  1 + K^2 / R^2  /                             |
  |                                                                    |
  |                  g sin( theta )                                    |
  |       a  =   --------------------                                  |
  |                1 + K^2 / R^2                                       |
  |                                                                    |
  |                   1            /  2 h ( 1 + K^2/R^2 )  \           |
  |       t  =   ------------ sqrt |  ---------------------  |         |
  |               sin(theta)       \           g           /           |
  |                                                                    |
  |                  ( K^2/R^2 ) tan( theta )                          |
  |     mu_min  =   ---------------------------                        |
  |                     1  +  K^2 / R^2                                |
  |                                                                    |
  |   a and v do NOT depend on M or R -- only on the SHAPE.            |
  |                                                                    |
  +--------------------------------------------------------------------+


  THE RACE DOWN THE SLOPE

  +---------------------+-----------+------------+------------+---------+
  |  BODY               | K^2 / R^2 | TRANSL. KE |  ROT. KE   |  ORDER  |
  +---------------------+-----------+------------+------------+---------+
  |  Solid sphere       |    2/5    |    5/7     |    2/7     |   1st   |
  |  Disc / solid cyl.  |    1/2    |    2/3     |    1/3     |   2nd   |
  |  Hollow sphere      |    2/3    |    3/5     |    2/5     |   3rd   |
  |  Ring / hollow cyl. |     1     |    1/2     |    1/2     |   last  |
  +---------------------+-----------+------------+------------+---------+

  A body SLIDING on a frictionless incline beats them all:  a = g sin(theta)
```

| Formula | When to use |
|---|---|
| `v_cm = R omega` | Any "rolls without slipping" phrase |
| `KE = (1/2)Mv^2(1 + K^2/R^2)` | Total KE of a rolling body |
| `a = g sin(theta)/(1 + K^2/R^2)` | Acceleration on an incline |
| `v = sqrt(2gh/(1+K^2/R^2))` | Speed at the bottom of the incline |
| `K^2/R^2` comparison | "Which reaches the bottom first?" |
| `mu >= (K^2/R^2)tan(theta)/(1+K^2/R^2)` | Minimum friction for pure rolling |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+-------------------------------------------------------------+
  | 1  |  X_cm  =  ( m1 x1 + m2 x2 ) / ( m1 + m2 )                   |
  +----+-------------------------------------------------------------+
  | 2  |  P  =  M V_cm      and      M A_cm  =  F_external           |
  +----+-------------------------------------------------------------+
  | 3  |  A x B  by determinant, MINUS sign on j                     |
  +----+-------------------------------------------------------------+
  | 4  |  v  =  r omega        omega = 2 pi N / 60                   |
  +----+-------------------------------------------------------------+
  | 5  |  tau  =  r F sin(theta)  =  F d                             |
  +----+-------------------------------------------------------------+
  | 6  |  L  =  r x p  =  I omega                                    |
  +----+-------------------------------------------------------------+
  | 7  |  tau  =  dL / dt  =  I alpha                                |
  +----+-------------------------------------------------------------+
  | 8  |  tau_ext = 0  =>  I1 w1  =  I2 w2                           |
  +----+-------------------------------------------------------------+
  | 9  |  I  =  sum( m r^2 )  =  M K^2                               |
  +----+-------------------------------------------------------------+
  | 10 |  I  =  I_cm + M d^2       and       I_z  =  I_x + I_y       |
  +----+-------------------------------------------------------------+
  | 11 |  KE_rot = (1/2) I omega^2      W = tau theta   P = tau w    |
  +----+-------------------------------------------------------------+
  | 12 |  a  =  g sin(theta) / ( 1 + K^2/R^2 )                       |
  +----+-------------------------------------------------------------+

  AND THE FOUR NUMBERS:
        solid sphere 2/5  <  disc 1/2  <  hollow sphere 2/3  <  ring 1
```
