# Systems of Particles and Rotational Motion — JEE Main / AP EAPCET / TG EAPCET

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 for wrong   |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from this chapter:**

```
  AP / TG EAPCET  (Physics, 40 questions)  ->  2 to 4
  JEE Main        (Physics, 25 questions)  ->  1 to 3
```

**This is one of the HIGHEST-YIELDING mechanics chapters in EAPCET.**
Nearly every question is answered by ONE of four things:
the CM formula, the moment-of-inertia table, `I1 w1 = I2 w2`, or `K^2/R^2`.

---

# PATTERN 1 — Centre of mass

### Q1
Two particles of masses 1 kg and 3 kg are separated by 4 m. The distance of the
centre of mass from the 1 kg mass is

(a) 1 m &nbsp; (b) 2 m &nbsp; (c) 3 m &nbsp; (d) 3.5 m

**ANSWER: (c)**
```
      Put the 1 kg at x = 0 and the 3 kg at x = 4 m.

                (1)(0) + (3)(4)        12
      X_cm  =  -----------------  =  ------  =  3 m
                     1 + 3               4
```
> **SHORTCUT:** the CM always sits closer to the heavier mass, in the inverse
> ratio of the masses. Masses 1 : 3 means distances 3 : 1.

---

### Q2
Three particles of masses 1 kg, 2 kg and 3 kg are at (1,1), (2,2) and (3,3) metre.
The centre of mass is at

(a) (2.33, 2.33) &nbsp; (b) (2, 2) &nbsp; (c) (3, 3) &nbsp; (d) (1.5, 1.5)

**ANSWER: (a)**
```
                (1)(1) + (2)(2) + (3)(3)       1 + 4 + 9       14
      X_cm  =  --------------------------  =  ------------  = ----  = 2.33
                        1 + 2 + 3                  6            6

      All the points lie on the line y = x, so Y_cm = 2.33 too.
```

---

### Q3
The centre of mass of which of the following lies OUTSIDE the material of the body?

(a) solid sphere &nbsp; (b) circular ring &nbsp; (c) solid cube &nbsp; (d) uniform rod

**ANSWER: (b)**
```
      The CM of a ring is at its geometric centre, which is empty space.
      Same for a hollow sphere, a bangle and a horseshoe.
```

---

### Q4
A shell fired from a cannon explodes in mid-air. The centre of mass of the
fragments

(a) stops at the point of explosion
(b) continues along the original parabolic path
(c) moves vertically downwards
(d) moves along a straight line

**ANSWER: (b)**
```
      The explosion supplies only INTERNAL forces, which cancel in
      action-reaction pairs. The only external force is gravity, so

              M A_cm  =  M g

      and the CM keeps moving on exactly the same parabola.
```
> **SHORTCUT:** internal forces can NEVER change the motion of the centre of mass.
> If you see "explodes", "collides", "pushes off", the answer is almost always
> "the CM is unaffected".

---

### Q5
The centre of mass of a uniform semicircular ring of radius R lies at a distance
from its centre of

(a) R/2 &nbsp; (b) 2R/pi &nbsp; (c) 4R/(3 pi) &nbsp; (d) 3R/8

**ANSWER: (b)**
```
      Semicircular RING   ->  2R / pi
      Semicircular DISC   ->  4R / (3 pi)
      Solid HEMISPHERE    ->  3R / 8
      Hemispherical SHELL ->  R / 2
      Solid CONE          ->  h / 4  from the base
```

---

### Q6
A man of mass 60 kg walks 4 m along a 120 kg boat floating on still water.
The boat moves through

(a) 1.33 m &nbsp; (b) 2 m &nbsp; (c) 2.67 m &nbsp; (d) 4 m

**ANSWER: (a)**
```
      No external horizontal force, so the CM does not move.

              m x_man   =   M x_boat        (opposite directions)

      and     x_man + x_boat = 4 m (the length walked relative to the boat)

                 m L          60 x 4        240
      x_boat = ---------  =  ---------  =  ------  =  1.33 m
               m + M          60 + 120       180

      Check: 60 x 2.67 = 160 = 120 x 1.33.  Balanced.
```

---

### Q7
Two bodies of masses m and 3m move towards each other with speeds 4 m/s and
2 m/s. The speed of their centre of mass is

(a) 0.5 m/s &nbsp; (b) 1.0 m/s &nbsp; (c) 2.0 m/s &nbsp; (d) 3.0 m/s

**ANSWER: (a)**
```
      Take the first direction as positive:

                m(4) + 3m(-2)        4m - 6m        -2m
      V_cm  =  ---------------  =  -----------  =  ------  =  -0.5 m/s
                    m + 3m              4m           4m

      Speed = 0.5 m/s, directed along the motion of the 3m body.
```

---

# PATTERN 2 — Vector product and torque

### Q8
A force F = 2i + 3j N acts at the point r = i + j m. The torque about the origin is

(a) i N m &nbsp; (b) k N m &nbsp; (c) -k N m &nbsp; (d) 5k N m

**ANSWER: (b)**
```
                    |  i    j    k  |
      tau = r x F = |  1    1    0  |
                    |  2    3    0  |

      The i and j components are zero (third column of zeros).

      k component = (1)(3) - (1)(2) = 3 - 2 = 1

      tau  =  k  N m
```
> **SHORTCUT:** if both vectors lie in the x-y plane, the cross product has ONLY a
> k component. Compute `a1 b2 - a2 b1` and stop.

---

### Q9
If | A x B | = sqrt(3) ( A . B ), the angle between A and B is

(a) 30 deg &nbsp; (b) 45 deg &nbsp; (c) 60 deg &nbsp; (d) 90 deg

**ANSWER: (c)**
```
      A B sin(theta)  =  sqrt(3) A B cos(theta)

      tan( theta )  =  sqrt(3)      ->    theta  =  60 degrees
```

---

### Q10
The torque acting on a body is zero when the angle between r and F is

(a) 0 deg only &nbsp; (b) 90 deg &nbsp; (c) 0 deg or 180 deg &nbsp; (d) 45 deg

**ANSWER: (c)**
```
      tau = r F sin(theta).   sin 0 = sin 180 = 0.
      Torque is MAXIMUM at 90 degrees.
```

---

### Q11
A wheel of radius 0.4 m has a tangential force of 25 N applied at its rim. The
torque about the axle is

(a) 5 N m &nbsp; (b) 10 N m &nbsp; (c) 15 N m &nbsp; (d) 62.5 N m

**ANSWER: (b)**
```
      tau = r F sin(90 deg) = 0.4 x 25 x 1 = 10 N m
```

---

# PATTERN 3 — Angular kinematics

### Q12
A wheel starts from rest with an angular acceleration of 2 rad/s^2. The angle
turned in 5 s is

(a) 10 rad &nbsp; (b) 20 rad &nbsp; (c) 25 rad &nbsp; (d) 50 rad

**ANSWER: (c)**
```
      theta = w0 t + (1/2) alpha t^2
            = 0 + 0.5 x 2 x (5)^2
            = 25 rad
```

---

### Q13
A flywheel rotating at 120 rpm comes to rest uniformly in 10 s. The number of
revolutions it makes before stopping is

(a) 5 &nbsp; (b) 10 &nbsp; (c) 20 &nbsp; (d) 60

**ANSWER: (b)**
```
      Average rotation rate = ( 120 + 0 ) / 2 = 60 rpm

      Time = 10 s = 1/6 minute

      Revolutions = 60 x (1/6) = 10
```
> **SHORTCUT:** for uniform angular deceleration, use the AVERAGE rpm and the
> time in minutes. No radians needed at all.

---

### Q14
A body rotates at 300 rpm. Its angular velocity in rad/s is

(a) 5 pi &nbsp; (b) 10 pi &nbsp; (c) 20 pi &nbsp; (d) 300 pi

**ANSWER: (b)**
```
                2 pi N        2 pi x 300
      omega  =  --------  =  ------------  =  10 pi  =  31.4 rad/s
                   60             60
```

---

### Q15
Two points on a rotating disc are at distances 10 cm and 30 cm from the axis.
The ratio of their linear speeds is

(a) 1 : 1 &nbsp; (b) 1 : 3 &nbsp; (c) 3 : 1 &nbsp; (d) 1 : 9

**ANSWER: (b)**
```
      v = r omega, and omega is the SAME for both points.

      v1 : v2  =  r1 : r2  =  10 : 30  =  1 : 3
```

---

# PATTERN 4 — Moment of inertia from the table

### Q16
The moment of inertia of a ring of mass M and radius R about a tangent
perpendicular to its plane is

(a) M R^2 &nbsp; (b) (3/2) M R^2 &nbsp; (c) 2 M R^2 &nbsp; (d) (5/4) M R^2

**ANSWER: (c)**
```
      Central perpendicular axis:   I_cm = M R^2
      Parallel axes theorem, d = R:

          I = M R^2 + M R^2 = 2 M R^2
```

---

### Q17
A solid sphere and a hollow sphere have the same mass and the same radius. The
ratio of their moments of inertia about a diameter is

(a) 2 : 3 &nbsp; (b) 3 : 5 &nbsp; (c) 5 : 3 &nbsp; (d) 3 : 2

**ANSWER: (b)**
```
      Solid  : (2/5) M R^2
      Hollow : (2/3) M R^2

      Ratio  =  (2/5) / (2/3)  =  (2/5) x (3/2)  =  3/5   =  3 : 5
```

---

### Q18
The radius of gyration of a disc of radius R about its central perpendicular axis is

(a) R &nbsp; (b) R/2 &nbsp; (c) R / sqrt(2) &nbsp; (d) R sqrt(2)

**ANSWER: (c)**
```
      I = M K^2 = (1/2) M R^2      ->     K^2 = R^2 / 2

      K = R / sqrt(2)  =  0.707 R
```
> **SHORTCUT:** `K = sqrt(K^2/R^2) x R`. Read `K^2/R^2` off the standard column
> (ring 1, disc 1/2, solid sphere 2/5, shell 2/3) and take the square root.

---

### Q19
Four thin rods, each of mass m and length l, form a square. The moment of inertia
about an axis through the centre, perpendicular to the plane of the square, is

(a) m l^2 / 3 &nbsp; (b) 2 m l^2 / 3 &nbsp; (c) 4 m l^2 / 3 &nbsp; (d) m l^2 / 12

**ANSWER: (c)**
```
      For ONE rod: its own centre is at distance l/2 from the axis,
      and its I about its own centre (perpendicular) is m l^2/12.

          I_rod = m l^2/12 + m (l/2)^2 = m l^2/12 + m l^2/4 = m l^2/3

      Four rods:      I  =  4 x m l^2 / 3  =  4 m l^2 / 3
```

---

### Q20
Three point masses, each m, are at the vertices of an equilateral triangle of
side a. The moment of inertia about an axis through the centroid perpendicular to
the plane is

(a) m a^2 &nbsp; (b) 3 m a^2 &nbsp; (c) m a^2 / 3 &nbsp; (d) 3 m a^2 / 2

**ANSWER: (a)**
```
      Distance of each vertex from the centroid:   r = a / sqrt(3)

      I = 3 x m x r^2 = 3 m ( a^2 / 3 ) = m a^2
```

---

### Q21
The same three masses, but the axis is now along one side of the triangle.
The moment of inertia is

(a) m a^2 &nbsp; (b) 3 m a^2 / 4 &nbsp; (c) m a^2 / 2 &nbsp; (d) 3 m a^2 / 2

**ANSWER: (b)**
```
      Two masses lie ON the axis, so their r = 0 and they contribute nothing.
      The third is at the height of the triangle,  h = a sqrt(3) / 2 .

      I = m h^2 = m ( 3 a^2 / 4 ) = 3 m a^2 / 4
```

---

### Q22
A circular hole of radius R/2 is cut from a uniform disc of mass M and radius R,
the hole's centre being at R/2 from the disc's centre. The moment of inertia of
the remaining part about the central axis perpendicular to the disc is

(a) M R^2 / 2 &nbsp; (b) 13 M R^2 / 32 &nbsp; (c) 15 M R^2 / 32 &nbsp; (d) 3 M R^2 / 8

**ANSWER: (b)**
```
      Mass removed (area ratio 1/4):    m = M / 4

      I of the removed disc about the ORIGINAL centre
      (parallel axes, d = R/2):

          I_hole = (1/2) m (R/2)^2  +  m (R/2)^2
                 = m R^2/8  +  m R^2/4
                 = 3 m R^2 / 8
                 = 3 (M/4) R^2 / 8   =   3 M R^2 / 32

      I_remaining = I_full - I_hole

                  = M R^2/2  -  3 M R^2/32
                  = 16 M R^2/32  -  3 M R^2/32
                  = 13 M R^2 / 32
```
> **SHORTCUT:** for any "hole cut out" problem, use
> `I_remaining = I_full - I_removed`, and always shift `I_removed` to the SAME
> axis with the parallel axes theorem first.

---

# PATTERN 5 — The two theorems

### Q23
The perpendicular axes theorem can be applied to

(a) a solid sphere &nbsp; (b) a solid cylinder &nbsp; (c) a plane lamina &nbsp; (d) any body

**ANSWER: (c)**
```
      The proof uses  ri^2 = xi^2 + yi^2 , which needs zi = 0 for every
      particle. That is true ONLY for a flat, two-dimensional lamina.

      The PARALLEL axes theorem, in contrast, works for ANY body.
```

---

### Q24
The moment of inertia of a disc of mass M and radius R about a tangent lying in
its plane is

(a) (1/4) M R^2 &nbsp; (b) (3/4) M R^2 &nbsp; (c) (5/4) M R^2 &nbsp; (d) (3/2) M R^2

**ANSWER: (c)**
```
      About a DIAMETER:  I_cm = (1/4) M R^2
      A tangent in the plane is parallel to a diameter, d = R:

          I = (1/4) M R^2 + M R^2 = (5/4) M R^2
```

---

### Q25
A square lamina of mass M and side a has a moment of inertia about an axis
through its centre perpendicular to its plane of M a^2 / 6. Its moment of inertia
about a diagonal is

(a) M a^2 / 6 &nbsp; (b) M a^2 / 12 &nbsp; (c) M a^2 / 24 &nbsp; (d) M a^2 / 3

**ANSWER: (b)**
```
      Take the two DIAGONALS as the in-plane axes x and y.
      By symmetry  I_x = I_y = I_d .

      Perpendicular axes theorem:

          I_z  =  I_x + I_y  =  2 I_d

          M a^2 / 6  =  2 I_d       ->      I_d  =  M a^2 / 12
```

---

### Q26
The moment of inertia of a body is minimum about an axis that

(a) passes through the centre of mass
(b) is a tangent to the body
(c) is perpendicular to the plane
(d) lies outside the body

**ANSWER: (a)**
```
      I = I_cm + M d^2 , and M d^2 is never negative.
      So I is smallest when d = 0, i.e. the axis passes through the CM.
```

---

# PATTERN 6 — Angular momentum and its conservation

### Q27
A skater spinning with moment of inertia I and angular speed w pulls her arms in,
halving her moment of inertia. Her new kinetic energy is

(a) half the original &nbsp; (b) the same &nbsp; (c) twice the original &nbsp; (d) four times

**ANSWER: (c)**
```
      I w = constant, so halving I doubles w.

      KE = L^2 / (2 I).  L is unchanged and I is halved,
      so KE DOUBLES.

      Check: KE1 = (1/2) I w^2 ;   KE2 = (1/2)(I/2)(2w)^2 = I w^2 = 2 KE1
```
> **SHORTCUT:** `KE = L^2 / 2I`. With L fixed, KE is inversely proportional to I.
> Never say "energy is conserved" — the muscles do the extra work.

---

### Q28
If the Earth suddenly shrank to half its present radius without any change of
mass, the length of the day would become

(a) 6 hours &nbsp; (b) 12 hours &nbsp; (c) 48 hours &nbsp; (d) 96 hours

**ANSWER: (a)**
```
      I proportional to R^2 (solid sphere, (2/5) M R^2).

      I w = constant   ->   R^2 / T = constant   ->   T proportional to R^2

              T2      / R2 \ 2      / 1 \ 2       1
             ----  = |  --- |   =  |  --- |   =  ---
              T1      \ R1 /        \ 2 /         4

      T2  =  24 / 4  =  6 hours
```

---

### Q29
A particle moves in a straight line with constant velocity. Its angular momentum
about a point NOT on that line

(a) increases with time &nbsp; (b) decreases with time
(c) is constant &nbsp; (d) is zero

**ANSWER: (c)**
```
      L = m v d , where d is the constant perpendicular distance of the
      line from the point. m, v and d are all constant, so L is constant.

      (Equivalently: no force acts, so no torque, so dL/dt = 0.)
      If the line PASSES THROUGH the point, then d = 0 and L = 0.
```

---

### Q30
The dimensional formula of angular momentum is

(a) [M L^2 T^-2] &nbsp; (b) [M L^2 T^-1] &nbsp; (c) [M L T^-1] &nbsp; (d) [M L^2 T^0]

**ANSWER: (b)**
```
      L = m v r  ->  [M][L T^-1][L]  =  [M L^2 T^-1]

      Compare:  torque [M L^2 T^-2]  ,  moment of inertia [M L^2 T^0]
      Angular momentum has the same dimensions as PLANCK'S CONSTANT.
```

---

### Q31
A torque of 10 N m acts on a body of moment of inertia 5 kg m^2 for 4 s, starting
from rest. The final angular momentum is

(a) 10 kg m^2/s &nbsp; (b) 20 kg m^2/s &nbsp; (c) 40 kg m^2/s &nbsp; (d) 50 kg m^2/s

**ANSWER: (c)**
```
      Angular impulse = change in angular momentum

          L  =  tau x t  =  10 x 4  =  40 kg m^2/s

      (You do not need I at all -- it is a distractor.)
```
> **SHORTCUT:** if the question gives torque AND time, use `L = tau t` directly.

---

# PATTERN 7 — Rotational energy, work and power

### Q32
A flywheel of moment of inertia 4 kg m^2 rotates at 20 rad/s. Its kinetic energy is

(a) 80 J &nbsp; (b) 400 J &nbsp; (c) 800 J &nbsp; (d) 1600 J

**ANSWER: (c)**
```
      KE = (1/2) I omega^2 = 0.5 x 4 x (20)^2 = 0.5 x 4 x 400 = 800 J
```

---

### Q33
The same flywheel is brought to rest in 100 radians. The retarding torque is

(a) 4 N m &nbsp; (b) 8 N m &nbsp; (c) 16 N m &nbsp; (d) 80 N m

**ANSWER: (b)**
```
      Work done against the torque = kinetic energy destroyed

          tau x theta  =  800

          tau  =  800 / 100  =  8 N m
```

---

### Q34
An engine develops 500 W while turning a shaft at 25 rad/s. The torque is

(a) 10 N m &nbsp; (b) 20 N m &nbsp; (c) 200 N m &nbsp; (d) 12500 N m

**ANSWER: (b)**
```
      P = tau omega     ->    tau = P / omega = 500 / 25 = 20 N m
```

---

### Q35
Two bodies have equal angular momenta. The one with the LARGER moment of inertia has

(a) larger kinetic energy &nbsp; (b) smaller kinetic energy
(c) equal kinetic energy &nbsp; (d) zero kinetic energy

**ANSWER: (b)**
```
      KE = L^2 / (2 I).   With L fixed, larger I means SMALLER KE.
```

---

# PATTERN 8 — Rolling motion

### Q36
For a solid sphere rolling without slipping, the ratio of rotational kinetic
energy to TOTAL kinetic energy is

(a) 2/5 &nbsp; (b) 2/7 &nbsp; (c) 5/7 &nbsp; (d) 1/3

**ANSWER: (b)**
```
                              K^2/R^2            2/5        2/5      2
      rotational fraction = -------------  =  ---------  = -----  = ---
                            1 + K^2/R^2        1 + 2/5      7/5      7

      (rotational : translational = 2 : 5 ;  rotational : total = 2 : 7)
```
> **SHORTCUT:** with `n = K^2/R^2`, the split is
> rotational `n/(1+n)` and translational `1/(1+n)`. One line, every body.

---

### Q37
A ring of mass M rolls without slipping with speed v. Its total kinetic energy is

(a) (1/2) M v^2 &nbsp; (b) M v^2 &nbsp; (c) (3/4) M v^2 &nbsp; (d) (3/2) M v^2

**ANSWER: (b)**
```
                 1          /      K^2 \
      KE   =    ---  M v^2 | 1  +  --- |         with K^2/R^2 = 1
                 2          \      R^2 /

           =  (1/2) M v^2 x 2   =   M v^2
```

---

### Q38
A solid cylinder rolls without slipping down an incline from a height h.
Its speed at the bottom is

(a) sqrt(2 g h) &nbsp; (b) sqrt(4 g h / 3) &nbsp; (c) sqrt(10 g h / 7) &nbsp; (d) sqrt(g h)

**ANSWER: (b)**
```
                 /      2 g h      \          /   2 g h   \
      v  =  sqrt |  ---------------  |  = sqrt |  --------  |
                 \  1 + K^2 / R^2  /          \  1 + 1/2  /

                 /  2 g h  \          /  4 g h \
          = sqrt |  -------  |  = sqrt |  ------ |
                 \   3/2   /          \    3   /

      For reference: solid sphere sqrt(10gh/7), hollow sphere sqrt(6gh/5),
      ring sqrt(gh), sliding block sqrt(2gh).
```

---

### Q39
A ring rolls down an incline of 30 degrees without slipping. Its acceleration
(g = 10 m/s^2) is

(a) 2.5 m/s^2 &nbsp; (b) 3.33 m/s^2 &nbsp; (c) 5 m/s^2 &nbsp; (d) 10 m/s^2

**ANSWER: (a)**
```
                g sin(theta)        10 x 0.5         5
      a   =  ------------------  =  ----------  =  -----  =  2.5 m/s^2
               1 + K^2 / R^2          1 + 1          2
```

---

### Q40
A solid sphere, a disc and a ring of the same mass and radius are released from
the top of the same incline. The order in which they reach the bottom is

(a) ring, disc, sphere &nbsp; (b) sphere, disc, ring
(c) all together &nbsp; (d) disc, sphere, ring

**ANSWER: (b)**
```
      a = g sin(theta) / (1 + K^2/R^2). Smallest K^2/R^2 wins.

          solid sphere  2/5 = 0.40   ->  fastest
          disc          1/2 = 0.50
          ring          1            ->  slowest

      The answer does NOT depend on M or R.
```

---

### Q41
The minimum coefficient of friction needed for a solid sphere to roll without
slipping down an incline of angle theta is

(a) tan(theta) &nbsp; (b) (2/7) tan(theta) &nbsp; (c) (1/3) tan(theta) &nbsp; (d) (2/5) tan(theta)

**ANSWER: (b)**
```
                    ( K^2/R^2 ) tan(theta)          (2/5) tan(theta)
      mu_min  =  ----------------------------  =  --------------------
                       1  +  K^2/R^2                    1 + 2/5

                    (2/5) tan(theta)          2
              =  ---------------------  =  ------ tan(theta)
                          7/5                  7

      For a disc it is (1/3) tan theta ; for a ring, (1/2) tan theta.
```

---

### Q42
For a wheel rolling without slipping with centre speed v, the speed of the
topmost point is

(a) 0 &nbsp; (b) v &nbsp; (c) 2v &nbsp; (d) v/2

**ANSWER: (c)**
```
      Top     :  v (translation) + v (rotation)  =  2v
      Centre  :  v
      Contact :  v - v  =  0     <- instantaneously at rest
```

---

# PATTERN 9 — Equilibrium, couple and moments

### Q43
The moment of a couple about any point in its plane is

(a) zero
(b) different for different points
(c) the same for all points
(d) equal to the net force times the distance from the point

**ANSWER: (c)**
```
      The net FORCE of a couple is zero, so its moment does not depend
      on the choice of reference point. Moment of a couple = F x d,
      the same about every point.
```

---

### Q44
A rigid body is in mechanical equilibrium when

(a) sum of forces = 0 only
(b) sum of torques = 0 only
(c) both the sum of forces and the sum of torques are zero
(d) its kinetic energy is zero

**ANSWER: (c)**
```
      sum F = 0    ->  no translational acceleration
      sum tau = 0  ->  no angular acceleration
      BOTH are needed.
```

---

### Q45
A uniform metre scale is balanced at the 50 cm mark. A 20 g mass is hung at the
10 cm mark. To rebalance it, a 40 g mass must be hung at the

(a) 60 cm mark &nbsp; (b) 65 cm mark &nbsp; (c) 70 cm mark &nbsp; (d) 80 cm mark

**ANSWER: (c)**
```
      Principle of moments about the 50 cm pivot:

          20 x ( 50 - 10 )  =  40 x d

                     800    =  40 d       ->     d = 20 cm from the pivot

      Scale reading  =  50 + 20  =  70 cm
```
> **SHORTCUT:** the moments equation gives the distance FROM THE PIVOT.
> Always add it back to the pivot reading before choosing an option — that
> last step is where most marks are lost in this question type.

---

# SPEED RULES FOR THE EXAM HALL

```
  +-------------------------------------+-------------------------------------+
  |  IF YOU SEE THIS ...                |  DO THIS IMMEDIATELY                |
  +-------------------------------------+-------------------------------------+
  |  "explodes" / "collides" /          |  The CM is UNAFFECTED. Internal     |
  |  "pushes off" / "walks on a boat"   |  forces never move the CM.          |
  +-------------------------------------+-------------------------------------+
  |  Two masses, "where is the CM?"     |  Distances split in the INVERSE     |
  |                                     |  ratio of the masses.               |
  +-------------------------------------+-------------------------------------+
  |  Both vectors lie in the x-y plane  |  The cross product has ONLY a k     |
  |                                     |  term:  ( a1 b2 - a2 b1 ) k         |
  +-------------------------------------+-------------------------------------+
  |  rpm given                          |  omega = 2 pi N / 60 .              |
  |                                     |  For "how many revolutions", use    |
  |                                     |  the AVERAGE rpm x time in minutes. |
  +-------------------------------------+-------------------------------------+
  |  "moment of inertia of a ..."       |  Read the TABLE. Never derive.      |
  +-------------------------------------+-------------------------------------+
  |  "about a tangent" / "about an end" |  PARALLEL axes:  I = I_cm + M d^2   |
  +-------------------------------------+-------------------------------------+
  |  "about a diameter" of a flat       |  PERPENDICULAR axes:  I_z = 2 I_d   |
  |  ring or disc                       |  so  I_d = I_z / 2                  |
  +-------------------------------------+-------------------------------------+
  |  A hole cut out of a disc           |  I_remaining = I_full - I_removed , |
  |                                     |  shifting I_removed with the        |
  |                                     |  parallel axes theorem first.       |
  +-------------------------------------+-------------------------------------+
  |  "pulls arms in" / "star shrinks" / |  I1 w1 = I2 w2 . Then KE = L^2/2I , |
  |  "Earth shrinks"                    |  so KE RISES when I falls.          |
  +-------------------------------------+-------------------------------------+
  |  Torque and TIME both given         |  L = tau x t. Ignore I.             |
  +-------------------------------------+-------------------------------------+
  |  Power and omega given              |  tau = P / omega                    |
  +-------------------------------------+-------------------------------------+
  |  "rolls without slipping"           |  Write n = K^2/R^2 first, then      |
  |                                     |  everything follows:                |
  |                                     |    KE = (1/2)Mv^2 (1+n)             |
  |                                     |    a  = g sin(theta)/(1+n)          |
  |                                     |    v  = sqrt( 2gh/(1+n) )           |
  |                                     |    rot fraction = n/(1+n)           |
  +-------------------------------------+-------------------------------------+
  |  "which reaches the bottom first?"  |  SOLID SPHERE first, RING last.     |
  |                                     |  Never depends on M or R.           |
  +-------------------------------------+-------------------------------------+
  |  A sliding block is one of the      |  It WINS -- a = g sin(theta), no    |
  |  options                            |  energy lost to rotation.           |
  +-------------------------------------+-------------------------------------+
  |  You are stuck in EAPCET            |  GUESS. There is NO negative        |
  |                                     |  marking. Leave nothing blank.      |
  +-------------------------------------+-------------------------------------+
  |  You are stuck in JEE Main          |  SKIP. -1 for a wrong answer.       |
  +-------------------------------------+-------------------------------------+
```

**The four numbers that answer half the questions in this chapter:**

```
        solid sphere  2/5   <   disc  1/2   <   hollow sphere  2/3   <   ring  1
```
