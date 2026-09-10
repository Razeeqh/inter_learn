# Systems of Particles and Rotational Motion — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Physics, 1st Year, 60 marks · **Chapter 7**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> so these are grouped by **how often they appear** rather than tagged to one exact
> year. Cross-check with the official question papers at **bie.ap.gov.in** before
> your exam. Never quote a year you have not verified.

**Where this chapter appears in the paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually 1 or 2 questions
  Section B  (4 marks each, answer any 6)    ->  usually 1 question
  Section C  (8 marks each, answer any 2)    ->  occasional; treat as a bonus

  Realistic haul:  6 to 10 marks out of 60.
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

## Topic: Centre of mass

### Q A1
Define centre of mass of a system of particles.

**ANSWER:** The centre of mass is the point at which the **entire mass of the
system may be considered to be concentrated**, so that the motion of that single
point represents the motion of the whole system.

```
                sum( mi ri )
      R_cm  =  --------------              M = total mass
                      M
```

---

### Q A2
Does the centre of mass of a body necessarily lie inside the body? Give one example.

**ANSWER:**
```
  NO. It need not lie in the material of the body at all.

  Examples where the CM lies in EMPTY SPACE:
      a circular RING          -- CM at the centre, no material there
      a hollow SPHERE / shell  -- CM at the centre
      a horseshoe, a bangle    -- CM outside the metal
```

---

### Q A3
Two particles of masses 2 kg and 4 kg are placed at x = 0 and x = 3 m. Find the
centre of mass.

**ANSWER:**
```
                m1 x1 + m2 x2        (2 x 0) + (4 x 3)         12
      X_cm  =  ---------------  =  --------------------  =  ------  =  2 m
                   m1 + m2                2 + 4                 6

  X_cm = 2 m from the 2 kg mass -- i.e. closer to the heavier 4 kg mass.
```

---

### Q A4
Where does the centre of mass lie for (i) a uniform rod (ii) a ring
(iii) a disc (iv) a uniform triangular lamina?

**ANSWER:**
```
  (i)   Uniform rod          ->  its midpoint (L/2)
  (ii)  Ring                 ->  the geometric centre (in empty space)
  (iii) Disc                 ->  the geometric centre
  (iv)  Triangular lamina    ->  the CENTROID, where the medians meet
                                 ( (x1+x2+x3)/3 , (y1+y2+y3)/3 )
```

---

### Q A5
Show that the centre of mass of an isolated system moves with constant velocity.

**ANSWER:**
```
      M A_cm  =  F_external

  For an ISOLATED system, F_external = 0, so A_cm = 0,
  and therefore V_cm = CONSTANT.

  Internal forces cancel in action-reaction pairs and can never
  change the motion of the centre of mass.
```

---

### Q A6
State the law of conservation of linear momentum. Give one example.

**ANSWER:** When the **net external force** on a system is zero, its total linear
momentum remains constant.
```
      F_ext = 0    =>    P_total = M V_cm = constant

  Example: the recoil of a gun -- the bullet goes forward and the gun
           goes back, so the total momentum stays zero.
```

---

## Topic: Vector product and angular kinematics

### Q A7
Write the values of i x j, j x k, k x i and A x A.

**ANSWER:**
```
      i x j  =  k
      j x k  =  i
      k x i  =  j
      A x A  =  0        (theta = 0, and sin 0 = 0)

  Also:  A x B  =  -( B x A )   -- the cross product is NOT commutative.
```

---

### Q A8
Write the relation between linear velocity and angular velocity. What is the
angular velocity of a body making 300 revolutions per minute?

**ANSWER:**
```
      v  =  r omega           (vector form:  v = omega x r )

              2 pi N       2 x 3.14 x 300      1884
      omega = --------  =  ----------------  = ------  =  31.4 rad/s
                 60               60             60
```

---

## Topic: Torque and angular momentum

### Q A9
Define torque. Give its SI unit and dimensional formula.

**ANSWER:** Torque (moment of force) is the **turning effect of a force about an
axis**, equal to the product of the force and the perpendicular distance of its
line of action from the axis.
```
      tau  =  r x F        | tau | = r F sin(theta) = F d

      SI unit      :  newton metre (N m)
      Dimensions   :  [ M L^2 T^-2 ]
      It is a VECTOR quantity.
```

---

### Q A10
When is the torque acting on a body (i) maximum and (ii) zero?

**ANSWER:**
```
  (i)  MAXIMUM when theta = 90 degrees, i.e. the force is perpendicular
       to the position vector.    tau_max = r F

  (ii) ZERO when
          - theta = 0 or 180 degrees (force along r), or
          - r = 0 (force applied at the axis itself), or
          - F = 0.
```

---

### Q A11
A force of 10 N acts at the end of a rod of length 0.5 m, perpendicular to it.
Find the torque about the other end.

**ANSWER:**
```
      tau  =  r F sin(theta)  =  0.5 x 10 x sin(90 deg)
           =  0.5 x 10 x 1
           =  5 N m
```

---

### Q A12
Define angular momentum. Give its unit and dimensional formula.

**ANSWER:** The angular momentum of a particle about a point is the **moment of
its linear momentum** about that point.
```
      L  =  r x p  =  r x ( m v )        | L | = m v r sin(theta)

      For a rigid body:   L  =  I omega

      SI unit      :  kg m^2 / s   (also written J s)
      Dimensions   :  [ M L^2 T^-1 ]
      It is a VECTOR quantity.
```

---

### Q A13
A body of moment of inertia 2 kg m^2 rotates at 5 rad/s. Find its angular
momentum and its rotational kinetic energy.

**ANSWER:**
```
      L   =  I omega        =  2 x 5          =  10 kg m^2/s

      KE  =  (1/2) I omega^2 =  0.5 x 2 x 25  =  25 J
```

---

### Q A14
Write the relation between torque and angular momentum.

**ANSWER:**
```
                 dL
      tau_ext = ------          "torque = rate of change of angular momentum"
                 dt

  This is the rotational analogue of  F = dp/dt.
  If tau_ext = 0, then L is constant -- conservation of angular momentum.
```

---

### Q A15
State the law of conservation of angular momentum.

**ANSWER:** When the **net external torque** acting on a system is zero, its total
angular momentum remains constant in both magnitude and direction.
```
      tau_ext = 0    =>    L = I omega = constant    =>    I1 w1 = I2 w2
```

---

### Q A16
Why does an ice skater spin faster when she pulls her arms in?

**ANSWER:**
```
  The ice is nearly frictionless, so no external torque acts and
  angular momentum is conserved:      I omega = constant.

  Pulling the arms in brings the mass CLOSER to the axis, which
  DECREASES the moment of inertia I. To keep I omega constant,
  omega must INCREASE. Hence she spins faster.
```

---

## Topic: Moment of inertia

### Q A17
Define moment of inertia. Give its SI unit and dimensions.

**ANSWER:** The moment of inertia of a body about an axis is the **sum of the
products of the mass of each particle and the square of its perpendicular
distance from that axis**.
```
      I  =  sum( mi ri^2 )

      SI unit      :  kg m^2
      Dimensions   :  [ M L^2 T^0 ]
      It is the ROTATIONAL analogue of mass ("rotational inertia").
```

---

### Q A18
On what factors does the moment of inertia of a body depend?

**ANSWER:**
```
      1. The MASS of the body.
      2. The DISTRIBUTION of that mass about the axis
         (mass further from the axis  ->  much larger I).
      3. The POSITION and DIRECTION of the AXIS of rotation.

  It does NOT depend on the angular velocity or the applied torque.
```

---

### Q A19
Define radius of gyration. Give its unit.

**ANSWER:** The radius of gyration is the **distance from the axis at which the
whole mass of the body may be supposed to be concentrated so as to give the same
moment of inertia**.
```
      I  =  M K^2          so        K  =  sqrt( I / M )

      SI unit: metre (m)      Dimensions: [ L ]
```

---

### Q A20
A ring of mass 2 kg and radius 0.5 m rotates about an axis through its centre
perpendicular to its plane. Find its moment of inertia and radius of gyration.

**ANSWER:**
```
      I  =  M R^2  =  2 x (0.5)^2  =  2 x 0.25  =  0.5 kg m^2

              /  I  \        /  0.5  \
      K = sqrt| ---- |  = sqrt| ----- |  =  sqrt(0.25)  =  0.5 m
              \  M  /        \   2   /

  Note: for a ring K = R exactly, because ALL the mass is at distance R.
```

---

### Q A21
State the parallel axes theorem.

**ANSWER:** The moment of inertia of a body about any axis equals its moment of
inertia about a **parallel axis through the centre of mass**, plus the product of
its mass and the square of the perpendicular distance between the two axes.
```
      I  =  I_cm  +  M d^2          (valid for ANY body)
```

---

### Q A22
State the perpendicular axes theorem. To what kind of body does it apply?

**ANSWER:** For a **plane lamina**, the moment of inertia about an axis
perpendicular to its plane equals the sum of the moments of inertia about two
mutually perpendicular axes lying in the plane and intersecting at the point
where the perpendicular axis crosses it.
```
      I_z  =  I_x  +  I_y

  APPLIES ONLY TO A FLAT (two-dimensional) LAMINA -- never to a sphere,
  a solid cylinder or any three-dimensional body.
```

---

## Topic: Equilibrium, centre of gravity, rolling

### Q A23
Distinguish between centre of mass and centre of gravity.

**ANSWER:**
```
  CENTRE OF MASS      -  the point where the whole MASS is taken to be
                         concentrated; depends only on the mass
                         distribution; exists even where there is no gravity.

  CENTRE OF GRAVITY   -  the point where the whole WEIGHT is taken to act;
                         depends on the gravitational field g as well.

  They COINCIDE when g is uniform over the body -- true for all
  ordinary objects.
```

---

### Q A24
Define a couple. Give one everyday example and write its moment.

**ANSWER:** A couple is a pair of **equal, opposite and parallel forces whose
lines of action are different**.
```
      Net force  = 0        ->  no translation
      Net torque = F x d    ->  pure rotation

      Moment of a couple  =  F x d   (d = perpendicular distance
                                      between the two forces)

      Example: turning a steering wheel with both hands;
               opening a water tap.
```

---

### Q A25
Write the two conditions for a rigid body to be in mechanical equilibrium.

**ANSWER:**
```
      1.  sum of all external FORCES  = 0    (translational equilibrium)
      2.  sum of all external TORQUES = 0    (rotational equilibrium)

  BOTH must be satisfied at the same time.
```

---

### Q A26
Write the condition for rolling without slipping. What is the velocity of the
point of contact?

**ANSWER:**
```
      v_cm  =  R omega            ( and  a_cm = R alpha )

  The velocity of the point of CONTACT with the ground is ZERO --
  it is instantaneously at rest. The topmost point moves at 2 v.
```

---

### Q A27
A ring and a solid sphere roll down the same inclined plane from the same height.
Which reaches the bottom first? Why?

**ANSWER:**
```
  THE SOLID SPHERE reaches the bottom first.

                    g sin(theta)
          a  =   ------------------
                   1  +  K^2/R^2

      solid sphere:  K^2/R^2 = 2/5  ->  larger a
      ring        :  K^2/R^2 = 1    ->  smaller a

  The sphere has the smaller K^2/R^2, so a smaller share of its energy
  goes into rotation and a larger share into translation. Hence it has
  the greater linear acceleration.
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

### Q B1
Define centre of mass. Derive the expression for the centre of mass of a
two-particle system and extend it to n particles.

**ANSWER:**
```
  DEFINITION
      The centre of mass is the point at which the whole mass of the
      system may be taken to be concentrated, so that the motion of
      that point describes the motion of the system as a whole.

  TWO PARTICLES
      Masses m1 and m2 at positions x1 and x2 on a line. The centre
      of mass is the point about which the mass moments balance:

          m1 ( X_cm - x1 )  =  m2 ( x2 - X_cm )

          m1 X_cm - m1 x1   =  m2 x2 - m2 X_cm

          ( m1 + m2 ) X_cm  =  m1 x1 + m2 x2

      +---------------------------------------------+
      |                m1 x1  +  m2 x2              |
      |     X_cm  =  --------------------           |
      |                   m1  +  m2                 |
      +---------------------------------------------+

  n PARTICLES
      Extending the same balance condition to n particles:

                    m1 x1 + m2 x2 + ... + mn xn        sum( mi xi )
          X_cm  =  ------------------------------  =  --------------
                       m1 + m2 + ... + mn                    M

      and similarly for Y_cm and Z_cm; in vector form

                    sum( mi ri )
          R_cm  =  ---------------          M R_cm = sum( mi ri )
                          M

  For a continuous body the sum becomes  R_cm = (1/M) INT r dm.
```

---

### Q B2
Three particles of masses 1 kg, 2 kg and 3 kg are placed at the corners of an
equilateral triangle of side 1 m. Find the centre of mass.

**ANSWER:**
```
  STEP 1   Set up coordinates.
      Put the 1 kg at A(0, 0), the 2 kg at B(1, 0).
      The third corner of an equilateral triangle of side 1 is at

          C ( 0.5 , sqrt(3)/2 )  =  ( 0.5 , 0.866 )      -> the 3 kg

  STEP 2   Total mass.
      M = 1 + 2 + 3 = 6 kg

  STEP 3   X coordinate.

                (1)(0) + (2)(1) + (3)(0.5)      0 + 2 + 1.5      3.5
      X_cm  =  ----------------------------- = -------------- = -----
                            6                        6            6

            =  0.583 m

  STEP 4   Y coordinate.

                (1)(0) + (2)(0) + (3)(0.866)      2.598
      Y_cm  =  ------------------------------ = --------- = 0.433 m
                            6                       6

  ANSWER:  CM at ( 0.583 m , 0.433 m )

  Sanity check: the 3 kg mass is at the top, so the CM is pulled
  upward and towards C. It is.
```

---

### Q B3
Show that the total linear momentum of a system equals M V_cm, and hence state
and explain the law of conservation of linear momentum.

**ANSWER:**
```
  STEP 1   From the definition of the centre of mass:

          M R_cm  =  m1 r1 + m2 r2 + ... + mn rn

  STEP 2   Differentiate once with respect to time:

          M V_cm  =  m1 v1 + m2 v2 + ... + mn vn  =  p1 + p2 + ... + pn

      +----------------------------------------+
      |          P_total   =   M  V_cm         |
      +----------------------------------------+

  STEP 3   Differentiate again:

          M A_cm  =  m1 a1 + ... + mn an  =  sum of ALL forces

      Internal forces occur in equal and opposite pairs (Newton's third
      law) and cancel, leaving only the external forces:

      +----------------------------------------+
      |     M A_cm  =  F_external              |
      |     dP/dt   =  F_external              |
      +----------------------------------------+

  STEP 4   CONSERVATION
      If F_external = 0, then dP/dt = 0, so

          P_total  =  constant       and       V_cm = constant

      "When no net external force acts on a system, its total linear
       momentum remains constant."

  EXAMPLES: recoil of a gun, rocket propulsion, explosion of a shell,
            a man walking on a floating boat.
```

---

### Q B4
Define the vector product of two vectors. State four of its properties and find
A x B for A = 2i + 3j - k and B = i - j + 2k.

**ANSWER:**
```
  DEFINITION
      A x B  =  A B sin(theta) n^ ,  where n^ is the unit vector
      perpendicular to the plane of A and B, its direction given by the
      right-hand screw rule. The result is a VECTOR.

  PROPERTIES
      1.  A x B  =  -( B x A )                   (not commutative)
      2.  A x A  =  0                            (parallel vectors)
      3.  | A x B | is maximum ( = A B ) when theta = 90 degrees
      4.  A x (B + C)  =  A x B  +  A x C        (distributive)
          i x j = k ,  j x k = i ,  k x i = j ,  i x i = 0

  CALCULATION
                    |  i    j    k  |
      A x B    =    |  2    3   -1  |
                    |  1   -1    2  |

      i :   (3)(2) - (-1)(-1)      =  6 - 1  =   5
      j : -[ (2)(2) - (-1)(1) ]    = -( 4 + 1) =  -5
      k :   (2)(-1) - (3)(1)       = -2 - 3  =  -5

      A x B  =  5i - 5j - 5k

  VERIFICATION
      (A x B).A = 10 - 15 + 5 = 0        (A x B).B = 5 + 5 - 10 = 0
      Both zero, so the result is perpendicular to A and B.  CORRECT.
```

---

### Q B5
Define torque. Show that torque equals I alpha, and explain why a door handle is
fixed far from the hinges.

**ANSWER:**
```
  DEFINITION
      tau = r x F ,   | tau | = r F sin(theta) = F d ,
      where d is the perpendicular distance of the line of action of
      F from the axis. Unit N m, dimensions [M L^2 T^-2].

  DERIVATION OF tau = I alpha
      For a particle of mass mi at distance ri from the axis, the
      tangential force is

          Fi  =  mi ai  =  mi ri alpha

      Its torque about the axis is

          taui  =  Fi ri  =  mi ri^2 alpha

      Summing over the whole body (alpha is the same for all particles):

          tau  =  [ sum( mi ri^2 ) ] alpha

      +--------------------------------+
      |       tau  =  I  alpha         |     (analogue of F = m a)
      +--------------------------------+

  THE DOOR HANDLE
      tau = F d. For a fixed push F, the torque grows with d, the
      distance from the hinge. Putting the handle at the far edge makes
      d as large as possible, so the smallest push opens the door.
      A force applied at the hinge (d = 0) produces no torque at all.
```

---

### Q B6
Derive the relation between torque and angular momentum, tau = dL/dt.

**ANSWER:**
```
  STEP 1   Start from the definition of angular momentum:

          L  =  r  x  p

  STEP 2   Differentiate with respect to time, using the product rule
           for a cross product:

          dL      d                 dr              dp
          --- =  --- ( r x p )  =  ---- x p   +  r x ----
          dt      dt                dt              dt

  STEP 3   Now  dr/dt = v  and  p = m v , so the first term is

          v  x  ( m v )  =  m ( v x v )  =  0

           because any vector crossed with itself is zero.

  STEP 4   And  dp/dt = F , so the second term is

          r  x  F   =   tau

  RESULT
      +---------------------------------------------+
      |            tau_external  =  dL / dt         |
      +---------------------------------------------+

      "The rate of change of angular momentum of a system equals the
       net external torque acting on it."

      This is the rotational analogue of F = dp/dt, and it immediately
      gives the conservation law: if tau_ext = 0, then L is constant.
```

---

### Q B7
State the law of conservation of angular momentum. Explain it with the examples of
the ice skater, the diver and the rotating stool.

**ANSWER:**
```
  STATEMENT
      When the net external torque on a system is zero, its total
      angular momentum remains constant in magnitude and direction.

          tau_ext = dL/dt = 0     =>     L = I omega = constant
                                  =>     I1 w1 = I2 w2

      Since the product I omega is fixed, reducing I must increase
      omega, and increasing I must reduce omega.

  1. THE ICE SKATER
      Arms outstretched: mass far from the axis, I large, omega small.
      Arms pulled in   : mass near the axis, I small, so omega LARGE.
      Friction on ice is negligible, so no external torque acts and
      I omega stays constant -- she spins much faster.

  2. THE DIVER
      Leaving the board the body is stretched out (I large, slow spin).
      In mid-air the diver TUCKS into a ball: I falls sharply and omega
      rises, giving several fast somersaults. Straightening out again
      just before entry raises I and slows the rotation for a clean
      vertical entry. Gravity acts through the centre of gravity and so
      exerts no torque about the CM -- L is conserved throughout.

  3. THE PERSON ON A ROTATING STOOL
      A person holding dumbbells sits on a freely rotating stool and is
      set spinning with arms outstretched. Pulling the arms inward
      reduces I, and the spin speeds up dramatically. Stretching the
      arms out again slows it down. This is the standard laboratory
      demonstration of I1 w1 = I2 w2.

  NOTE: angular momentum is conserved but kinetic energy is NOT --
        since KE = L^2 / 2I, reducing I increases KE. The extra energy
        comes from the work done by the muscles.
```

---

### Q B8
State the parallel axes theorem. Using it, find the moment of inertia of
(i) a thin rod about a perpendicular axis through one end and (ii) a solid sphere
about a tangent.

**ANSWER:**
```
  STATEMENT
      The moment of inertia of a body about any axis is the sum of its
      moment of inertia about a parallel axis through the centre of
      mass and the product of its mass and the square of the
      perpendicular distance between the axes.

      +---------------------------------------+
      |         I  =  I_cm  +  M d^2          |
      +---------------------------------------+

      It applies to ANY body, provided one of the two parallel axes
      passes through the centre of mass.

              axis through CM          parallel axis
                     |                       |
              #######|########               |
            #########X##########             |
              ###############                |
                     |<--------- d --------->|

  (i)  THIN ROD ABOUT ONE END
       I_cm = M L^2 / 12 ,   d = L / 2

           I  =  M L^2/12  +  M (L/2)^2
              =  M L^2/12  +  M L^2/4
              =  ( M L^2 + 3 M L^2 ) / 12
              =  4 M L^2 / 12

       +---------------------------+
       |      I  =  M L^2 / 3      |
       +---------------------------+

  (ii) SOLID SPHERE ABOUT A TANGENT
       I_cm = (2/5) M R^2 ,   d = R

           I  =  (2/5) M R^2  +  M R^2
              =  ( 2/5 + 1 ) M R^2

       +---------------------------+
       |      I  =  (7/5) M R^2    |
       +---------------------------+
```

---

### Q B9
State the perpendicular axes theorem. Using it, find the moment of inertia of a
disc and of a ring about a diameter.

**ANSWER:**
```
  STATEMENT
      For a PLANE LAMINA, the moment of inertia about an axis
      perpendicular to its plane is the sum of its moments of inertia
      about two mutually perpendicular axes lying in the plane and
      meeting at the point where the perpendicular axis passes through.

      +---------------------------------------+
      |         I_z  =  I_x  +  I_y           |
      +---------------------------------------+

                       Z
                       ^
                       |
              #########|#########
            #############O###########------> Y
                        /
                       /
                      v X

      CONDITIONS: (a) plane lamina only, (b) the three axes mutually
      perpendicular, (c) all meeting at one point.

  (i)  DISC ABOUT A DIAMETER
       I_z = (1/2) M R^2 about the central perpendicular axis.
       By symmetry the two in-plane diameters give equal values, I_d.

           I_z  =  I_x + I_y  =  2 I_d

           (1/2) M R^2  =  2 I_d

       +----------------------------+
       |      I_d  =  M R^2 / 4     |
       +----------------------------+

  (ii) RING ABOUT A DIAMETER
       I_z = M R^2 ,  and by symmetry I_x = I_y = I_d

           M R^2  =  2 I_d

       +----------------------------+
       |      I_d  =  M R^2 / 2     |
       +----------------------------+
```

---

### Q B10
Define moment of inertia and radius of gyration. A solid sphere of mass 5 kg and
radius 0.2 m rotates about a diameter. Find its moment of inertia, its radius of
gyration, and its moment of inertia about a tangent.

**ANSWER:**
```
  DEFINITIONS
      I  =  sum( mi ri^2 )  -- the sum of the products of each particle's
            mass and the square of its perpendicular distance from the axis.
      K  =  sqrt( I / M )   -- the distance from the axis at which the whole
            mass could be placed to give the same moment of inertia.

  CALCULATION
      About a diameter:

          I  =  (2/5) M R^2  =  (2/5) x 5 x (0.2)^2
             =  2 x 0.04
             =  0.08 kg m^2

      Radius of gyration:

                  /  I  \        /  0.08  \
          K = sqrt| ---- |  = sqrt| ------ |  = sqrt(0.016) = 0.1265 m
                  \  M  /        \   5    /

      About a tangent (parallel axes theorem, d = R):

          I  =  (2/5) M R^2 + M R^2  =  (7/5) M R^2
             =  1.4 x 5 x 0.04
             =  0.28 kg m^2

  ANSWER:  0.08 kg m^2 ,  0.1265 m ,  0.28 kg m^2
```

---

### Q B11
Write the rotational analogues of the linear quantities and equations. Derive the
expression for rotational kinetic energy.

**ANSWER:**
```
  THE ANALOGUE TABLE

  +-----------------------------+-------------------------------------+
  |  LINEAR                     |  ROTATIONAL                         |
  +-----------------------------+-------------------------------------+
  |  displacement   s           |  angular displacement   theta       |
  |  velocity       v           |  angular velocity       omega       |
  |  acceleration   a           |  angular acceleration   alpha       |
  |  mass           m           |  moment of inertia      I           |
  |  force          F           |  torque                 tau         |
  |  p = m v                    |  L = I omega                        |
  |  F = m a                    |  tau = I alpha                      |
  |  F = dp/dt                  |  tau = dL/dt                        |
  |  KE = (1/2) m v^2           |  KE = (1/2) I omega^2               |
  |  W = F s ,  P = F v         |  W = tau theta ,  P = tau omega     |
  |  v = u + a t                |  w = w0 + alpha t                   |
  |  s = u t + (1/2) a t^2      |  theta = w0 t + (1/2) alpha t^2     |
  |  v^2 = u^2 + 2 a s          |  w^2 = w0^2 + 2 alpha theta         |
  +-----------------------------+-------------------------------------+

  DERIVATION OF ROTATIONAL KINETIC ENERGY
      Consider a rigid body rotating about a fixed axis with angular
      velocity omega. A particle of mass mi at perpendicular distance
      ri from the axis moves with speed

          vi  =  ri omega

      Its kinetic energy is

          (1/2) mi vi^2  =  (1/2) mi ri^2 omega^2

      Summing over all the particles (omega is common to all):

          KE  =  (1/2) [ sum( mi ri^2 ) ] omega^2

      +--------------------------------------------+
      |      KE  =  (1/2) I omega^2 = L^2 / (2 I)  |
      +--------------------------------------------+

      Comparing with KE = (1/2) m v^2 shows that I plays exactly the
      role of mass -- which is why I is called ROTATIONAL INERTIA.
```

---

### Q B12
What is rolling motion? Derive the expression for the total kinetic energy of a
rolling body and find the fraction that is rotational for a disc.

**ANSWER:**
```
  ROLLING MOTION
      Rolling is the combination of translation of the centre of mass
      and rotation about the centre of mass. For rolling WITHOUT
      slipping, the point of contact is instantaneously at rest and

          v_cm  =  R omega

  TOTAL KINETIC ENERGY
      KE  =  KE_translational  +  KE_rotational

          =  (1/2) M v^2  +  (1/2) I omega^2

      Put  I = M K^2  and  omega = v / R :

          =  (1/2) M v^2  +  (1/2) M K^2 ( v^2 / R^2 )

      +-------------------------------------------------+
      |                1          /       K^2 \         |
      |      KE  =    ---  M v^2 |  1  +  ---  |        |
      |                2          \       R^2 /         |
      +-------------------------------------------------+

  FRACTION THAT IS ROTATIONAL

                             K^2 / R^2
          fraction  =   -------------------
                         1  +  K^2 / R^2

      For a DISC, K^2/R^2 = 1/2 :

                          1/2         1/2        1
          fraction  =  ---------  =  ------  =  ---
                        1 + 1/2       3/2        3

      So one third of the kinetic energy is rotational and two thirds
      is translational.

  EXAMPLE: a 2 kg disc rolling at 3 m/s
          KE = 0.5 x 2 x 9 x 1.5 = 13.5 J
          translational = 9 J , rotational = 4.5 J
```

---

### Q B13
A body rolls down an inclined plane without slipping. Derive expressions for its
velocity at the bottom and its acceleration.

**ANSWER:**
```
  SET-UP
                              /|
                            /  |
                          /  O |
                        /   ( )|
                      /    ---  | h
                    /   f  /    |
                  /  Mg sin(th) |
                / th            |
              /_________________|

      Mass M, radius R, radius of gyration K, incline angle theta,
      height h. Since the point of contact does not slide, friction
      does NO work, so mechanical energy is conserved.

  VELOCITY AT THE BOTTOM (energy method)
      Loss in potential energy = gain in total kinetic energy

                          1          /      K^2 \
          M g h    =     ---  M v^2 | 1  +  --- |
                          2          \      R^2 /

      +--------------------------------------------+
      |                  /      2 g h      \       |
      |      v  =   sqrt |  ---------------  |     |
      |                  \  1 + K^2 / R^2  /       |
      +--------------------------------------------+

  ACCELERATION (dynamics method)
      Along the incline:      M g sin(theta) - f  =  M a
      Torque about the CM:    f R  =  I alpha  =  M K^2 ( a / R )

                                     M K^2 a
      so                    f  =  -------------
                                      R^2

      Substituting:
                                        M K^2 a
          M g sin(theta)  -  ------------------- = M a
                                        R^2

                                    /      K^2 \
          g sin(theta)   =    a    |  1 +  ---  |
                                    \      R^2 /

      +--------------------------------------------+
      |                   g sin( theta )           |
      |       a   =   --------------------         |
      |                  1  +  K^2 / R^2           |
      +--------------------------------------------+

  TIME TAKEN  (using s = h / sin theta and s = (1/2) a t^2)

                     1            /  2 h ( 1 + K^2/R^2 )  \
          t   =   ----------  sqrt |  --------------------- |
                  sin(theta)      \           g           /

  NOTE: a and v depend ONLY on the SHAPE (through K^2/R^2).
        They are independent of the mass M and the radius R.
```

---

### Q B14
Four bodies — a ring, a disc, a hollow sphere and a solid sphere — of the same
mass and radius roll down the same incline from the same height. In what order do
they reach the bottom? Justify.

**ANSWER:**
```
                    g sin( theta )
      a   =   --------------------            v = sqrt( 2gh / (1 + K^2/R^2) )
                 1  +  K^2 / R^2

  Both a and v get SMALLER as K^2/R^2 gets BIGGER. So the body with the
  SMALLEST K^2/R^2 wins.

  +---------------------+-----------+-----------------------+---------+
  |  BODY               | K^2 / R^2 |  a (th=30 deg, g=10)  |  ORDER  |
  +---------------------+-----------+-----------------------+---------+
  |  Solid sphere       |   0.40    |   5 / 1.40  = 3.57    |   1st   |
  |  Disc               |   0.50    |   5 / 1.50  = 3.33    |   2nd   |
  |  Hollow sphere      |   0.67    |   5 / 1.67  = 3.00    |   3rd   |
  |  Ring               |   1.00    |   5 / 2.00  = 2.50    |   4th   |
  +---------------------+-----------+-----------------------+---------+

  ORDER OF ARRIVAL:  solid sphere, disc, hollow sphere, ring.

  JUSTIFICATION
      The gravitational potential energy M g h must be shared between
      translation and rotation. A body with its mass concentrated far
      from the axis (the ring) has a large K^2/R^2, so a large share of
      the energy goes into spinning and only a small share is left for
      forward motion. The solid sphere has its mass packed near the
      centre, so it puts the least energy into rotation and the most
      into translation, giving the greatest acceleration.

      Note also: the answer does NOT depend on M or R. A heavy ring and
      a light ring arrive together.
      A body simply SLIDING down a frictionless incline would beat all
      four, since a = g sin(theta) with no rotation at all.
```

---

### Q B15
State the two conditions for the equilibrium of a rigid body. State the principle
of moments and apply it: a 40 kg boy sits 1.5 m from the pivot of a see-saw. Where
must a 30 kg girl sit to balance it?

**ANSWER:**
```
  CONDITIONS OF EQUILIBRIUM
      1. TRANSLATIONAL:  the vector sum of all external forces is zero,
                         sum F = 0. The centre of mass does not accelerate.
      2. ROTATIONAL   :  the vector sum of all external torques is zero,
                         sum tau = 0. The body does not start spinning.
      Both must hold together for mechanical equilibrium.

  PRINCIPLE OF MOMENTS
      For a body in rotational equilibrium about a pivot,
      the sum of the anticlockwise moments equals the sum of the
      clockwise moments:

          F1 d1  =  F2 d2

  APPLICATION
              1.5 m                       d2
      |<---------------->|<--------------------------->|
      O------------------A-----------------------------O
      40 kg             /_\                          30 kg
                      pivot

          m1 g d1  =  m2 g d2         ( g cancels )

          40 x 1.5  =  30 x d2

              60  =  30 d2      ->     d2  =  2 m

  ANSWER:  The girl must sit 2 m from the pivot on the opposite side.
           The lighter person sits further out -- exactly what you see
           on a real see-saw.
```

---

### Q B16
Explain the terms centre of gravity and centre of mass. Under what conditions do
they coincide? How can the centre of gravity of an irregular body be found?

**ANSWER:**
```
  CENTRE OF MASS
      The point at which the whole MASS of a body may be taken to be
      concentrated.       R_cm = sum( mi ri ) / M
      It depends only on the shape and mass distribution and exists
      even where there is no gravitational field.

  CENTRE OF GRAVITY
      The point through which the whole WEIGHT of the body acts,
      whatever its orientation. It is the point about which the total
      gravitational torque is zero:   sum ( ri x mi g ) = 0
      Its position depends on the gravitational field as well.

  WHEN THEY COINCIDE
      Whenever g is UNIFORM over the whole body. This is true for every
      ordinary object, so in practice CM and CG are the same point.
      They separate only for very large bodies (a mountain, a very tall
      structure), where g varies from bottom to top; then the CG lies
      slightly BELOW the CM because g is stronger lower down.

  FINDING THE CG OF AN IRREGULAR BODY
      1. Suspend the body freely from a point near its edge.
      2. Hang a plumb line from the same point and draw the vertical
         line on the body -- the CG lies somewhere on this line, because
         in equilibrium the weight must act along the line of support.
      3. Repeat by suspending from a second, different point.
      4. The INTERSECTION of the two lines is the centre of gravity.
      (A quick check: the body balances when supported at that point.)
```

---

# ===============================================================
# SECTION C — LONG ANSWER (8 marks)
# ===============================================================

### Q C1
State and prove the parallel axes theorem and the perpendicular axes theorem.
Apply each to obtain two standard results.

**MODEL ANSWER — mark split shown**

```
  [1 mark]  PARALLEL AXES THEOREM -- STATEMENT
      The moment of inertia of a body about any axis equals its moment
      of inertia about a parallel axis through the centre of mass, plus
      the product of its mass and the square of the perpendicular
      distance between the two axes.

              I  =  I_cm  +  M d^2

  [2 marks] PROOF (with diagram)

              axis through CM            parallel axis
                     |                        |
                     |    O mi                |
                     |   /|                   |
                     |  / | xi                |
              -------X----+-------------------+------
                     |<-------- d ----------->|

      Take the CM as origin. A particle mi is at perpendicular
      distance ri from the CM axis, with coordinate xi measured
      towards the second axis. Its distance from the new axis satisfies

          ri'^2  =  ri^2  +  d^2  -  2 d xi           (well, in the
                    plane geometry of the two parallel axes)

      Summing:

          I  =  sum( mi ri'^2 )
             =  sum( mi ri^2 ) + d^2 sum( mi ) - 2 d sum( mi xi )

      The first term is I_cm ; the second is M d^2 ; and the third
      vanishes because sum( mi xi ) = M X_cm = 0, the origin being the
      centre of mass. Hence

              I  =  I_cm  +  M d^2                    (proved)

  [1 mark]  APPLICATION 1 -- rod about one end
              I = M L^2/12 + M (L/2)^2 = M L^2/12 + M L^2/4 = M L^2/3

  [1 mark]  PERPENDICULAR AXES THEOREM -- STATEMENT
      For a plane lamina, the moment of inertia about an axis
      perpendicular to the plane equals the sum of the moments of
      inertia about two mutually perpendicular axes lying in the plane
      and intersecting at the point where the perpendicular axis passes.

              I_z  =  I_x  +  I_y

  [2 marks] PROOF (with diagram)

                       Z
                       ^
                       |
                       |         O mi  at (xi, yi)
                       |        /
              #########|#######/#####
            ###########O------+------------> Y
                      /|      xi
                     / |
                    v  |
                   X

      For a particle mi at (xi, yi) in the plane, its distance from
      the Z axis is  ri, with  ri^2 = xi^2 + yi^2 .

          I_z  =  sum( mi ri^2 )  =  sum( mi ( xi^2 + yi^2 ) )
               =  sum( mi yi^2 )  +  sum( mi xi^2 )

      Now sum( mi yi^2 ) is the moment of inertia about the X axis and
      sum( mi xi^2 ) is that about the Y axis. Hence

              I_z  =  I_x  +  I_y                     (proved)

      CONDITION: valid only for a PLANE LAMINA, because the proof uses
      zi = 0 for every particle.

  [1 mark]  APPLICATION 2 -- disc about a diameter
              I_z = (1/2) M R^2 ,  and by symmetry I_x = I_y = I_d
              (1/2) M R^2 = 2 I_d      ->     I_d = M R^2 / 4

      Similarly for a ring:  M R^2 = 2 I_d   ->   I_d = M R^2 / 2
```

---

### Q C2
Define moment of inertia and radius of gyration. Explain the physical significance
of the moment of inertia, list the factors it depends on, and give the moments of
inertia of a ring, disc, rod, solid sphere, hollow sphere and cylinder about their
standard axes.

**MODEL ANSWER — mark split shown**

```
  [1 mark]  DEFINITION
      The moment of inertia of a body about a given axis is the sum of
      the products of the mass of each particle and the square of its
      perpendicular distance from the axis.

          I  =  m1 r1^2 + m2 r2^2 + ... = sum( mi ri^2 )  =  INT r^2 dm

          SI unit kg m^2 ,  dimensions [ M L^2 T^0 ]

  [1 mark]  RADIUS OF GYRATION
      The distance from the axis at which the whole mass of the body
      could be concentrated to give the same moment of inertia.

          I  =  M K^2        K  =  sqrt( I / M )      unit: metre

  [2 marks] PHYSICAL SIGNIFICANCE
      Compare the two kinetic energies and the two equations of motion:

          KE = (1/2) m v^2      <->      KE = (1/2) I omega^2
          F  = m a              <->      tau = I alpha
          p  = m v              <->      L   = I omega

      In every rotational equation, I stands exactly where m stands in
      the linear equation. Therefore I measures the OPPOSITION of a body
      to any change in its state of rotation -- it is the ROTATIONAL
      INERTIA of the body. A large I means a large torque is needed to
      produce even a small angular acceleration.

      This is why a flywheel is made heavy and with its mass at the rim:
      a large I stores rotational energy and keeps the machine running
      smoothly through the gaps between power strokes.

      Unlike mass, I is NOT a fixed property of the body -- the same
      body has different values of I about different axes.

  [1 mark]  FACTORS ON WHICH I DEPENDS
      1. the mass of the body
      2. the distribution of that mass about the axis (the r^2 factor
         makes distant mass count far more)
      3. the position and direction of the axis of rotation

  [3 marks] THE STANDARD TABLE

  +-------------------------------------+---------------------+
  |  BODY  and  AXIS                    |  MOMENT OF INERTIA  |
  +-------------------------------------+---------------------+
  |  Ring, central perpendicular axis   |     M R^2           |
  |  Ring, about a diameter             |   (1/2) M R^2       |
  |  Disc, central perpendicular axis   |   (1/2) M R^2       |
  |  Disc, about a diameter             |   (1/4) M R^2       |
  |  Rod (length L), centre, perpend.   |   (1/12) M L^2      |
  |  Rod (length L), one end, perpend.  |   (1/3)  M L^2      |
  |  Solid sphere, about a diameter     |   (2/5) M R^2       |
  |  Hollow sphere, about a diameter    |   (2/3) M R^2       |
  |  Solid cylinder, about its own axis |   (1/2) M R^2       |
  |  Hollow cylinder, about its own axis|     M R^2           |
  +-------------------------------------+---------------------+

      Pattern: for the SAME M and R, the ring (all mass at the rim) has
      the largest I, and the solid sphere (mass packed near the centre)
      the smallest.
```

---

### Q C3
Define centre of mass. Obtain the expression for the centre of mass of a system of
n particles and for its velocity and acceleration. Hence show that the centre of
mass of an isolated system moves with constant velocity, and state the law of
conservation of linear momentum.

**MODEL ANSWER — mark split shown**

```
  [1 mark]  DEFINITION
      The centre of mass of a system is the point at which the whole
      mass of the system may be regarded as concentrated, so that the
      motion of that point describes the motion of the system as a whole.

  [2 marks] POSITION OF THE CENTRE OF MASS

      TWO PARTICLES:   balancing the mass moments about the CM,

              m1 ( X_cm - x1 )  =  m2 ( x2 - X_cm )

                            m1 x1  +  m2 x2
              X_cm   =   ---------------------
                              m1  +  m2

      n PARTICLES:

                       sum( mi xi )                sum( mi ri )
              X_cm  = --------------      R_cm  = --------------
                            M                           M

              M R_cm  =  m1 r1 + m2 r2 + ... + mn rn

      CONTINUOUS BODY:   R_cm  =  (1/M) INT r dm

  [2 marks] VELOCITY AND ACCELERATION OF THE CM
      Differentiate M R_cm = sum( mi ri ) once:

              M V_cm  =  m1 v1 + m2 v2 + ... = P_total

                          sum( mi vi )
              V_cm   =  ---------------
                              M

      Differentiate again:

              M A_cm  =  m1 a1 + m2 a2 + ... = sum of all forces

  [2 marks] ONLY EXTERNAL FORCES MATTER
      Internal forces occur in equal and opposite pairs by Newton's
      third law, so they cancel in the sum. Hence

              M A_cm  =  F_EXTERNAL              dP/dt  =  F_EXTERNAL

      The centre of mass moves exactly as if the whole mass were
      concentrated there and all the external forces acted there.

      If the system is ISOLATED, F_external = 0, so A_cm = 0 and

              V_cm  =  CONSTANT

      The centre of mass of an isolated system moves with constant
      velocity (and stays at rest if it began at rest), no matter how
      violently the parts collide or explode among themselves.

  [1 mark]  CONSERVATION OF LINEAR MOMENTUM
      Since P = M V_cm, F_external = 0 gives

              P_total  =  constant

      "When no net external force acts on a system, its total linear
       momentum remains constant."

      Examples: recoil of a gun, rocket propulsion, explosion of a
      shell in flight (the fragments fly apart but the CM continues on
      the original parabola), a man walking on a floating boat.
```

---

### Q C4
Define angular momentum and torque. Derive the relation between them. State the law
of conservation of angular momentum and explain it with three everyday examples.

**MODEL ANSWER — mark split shown**

```
  [1 mark]  TORQUE
      The turning effect of a force about an axis.
          tau = r x F ,   | tau | = r F sin(theta) = F d
          unit N m , dimensions [M L^2 T^-2] , a vector.

                                              F
                                            /
              O------------------------- P /
              |<---------- r ----------->|
             axis        d = r sin(theta)

  [1 mark]  ANGULAR MOMENTUM
      The moment of linear momentum about a point.
          L = r x p = r x ( m v ) ,   | L | = m v r sin(theta)
          For a rigid body about a fixed axis,  L = I omega.
          unit kg m^2/s , dimensions [M L^2 T^-1] , a vector.

  [3 marks] RELATION BETWEEN THEM

          L  =  r  x  p

          dL      d               dr           dp
          --- =  --- (r x p)  =  --- x p  +  r x ---
          dt      dt              dt            dt

      First term  :  v x ( m v ) = m ( v x v ) = 0
      Second term :  r x F = tau

      +---------------------------------------+
      |          tau_external  =  dL / dt     |
      +---------------------------------------+

      "The net external torque equals the rate of change of angular
       momentum" -- the rotational analogue of F = dp/dt.
      For constant I this gives tau = I alpha.

  [1 mark]  CONSERVATION LAW
      If tau_external = 0, then dL/dt = 0, so

              L  =  I omega  =  constant       =>     I1 w1 = I2 w2

      "When the net external torque on a system is zero, its total
       angular momentum remains constant in magnitude and direction."

  [2 marks] THREE EXAMPLES

      1. ICE SKATER -- with arms outstretched I is large and the spin
         slow; pulling the arms in reduces I, so omega must rise and
         she spins much faster.

      2. DIVER -- leaving the board stretched out (large I, slow spin),
         then tucking into a ball (small I, fast somersaults), then
         straightening again for a slow, clean entry into the water.
         Gravity acts through the CG and exerts no torque about the CM,
         so L is conserved throughout the dive.

      3. PERSON ON A ROTATING STOOL -- spinning with dumbbells held out
         and then pulled in: I falls, omega rises sharply. This is the
         classroom demonstration of I1 w1 = I2 w2.

      (Also acceptable: a planet moves faster near the Sun -- Kepler's
       second law; a falling cat twisting to land on its feet.)

      NOTE: L is conserved but kinetic energy is NOT, since
      KE = L^2 / 2I rises when I falls. The extra energy comes from
      the work done by the muscles.
```

---

### Q C5
What is rolling motion? Derive expressions for the total kinetic energy of a
rolling body and for its acceleration and velocity while rolling down an inclined
plane. Discuss which body reaches the bottom first.

**MODEL ANSWER — mark split shown**

```
  [1 mark]  ROLLING MOTION
      Rolling is translation of the centre of mass together with
      rotation about the centre of mass. For rolling without slipping
      the contact point is instantaneously at rest, giving

              v_cm  =  R omega        and       a_cm  =  R alpha

                    ------> 2v
                   .......
                 .         .
                .     C ---.--> v
                 .         .
                   .......
      ================O================
                   v = 0  at the contact point

  [2 marks] TOTAL KINETIC ENERGY

          KE  =  (1/2) M v^2  +  (1/2) I omega^2

      with  I = M K^2  and  omega = v/R :

          +--------------------------------------------+
          |             1          /       K^2 \       |
          |    KE  =   ---  M v^2 |  1  +  ---  |      |
          |             2          \       R^2 /       |
          +--------------------------------------------+

  [2 marks] VELOCITY AT THE BOTTOM OF AN INCLINE
      Friction at the contact point does no work (the point does not
      slide), so mechanical energy is conserved:

                            1          /      K^2 \
              M g h    =   ---  M v^2 | 1  +  --- |
                            2          \      R^2 /

          +--------------------------------------------+
          |                  /      2 g h      \       |
          |      v  =   sqrt |  ---------------  |     |
          |                  \  1 + K^2 / R^2  /       |
          +--------------------------------------------+

  [2 marks] ACCELERATION DOWN THE INCLINE

              M g sin(theta)  -  f   =   M a
              f R  =  I alpha  =  M K^2 ( a / R )   ->  f = M K^2 a / R^2

              M g sin(theta)  -  M K^2 a / R^2  =  M a

          +--------------------------------------------+
          |                  g sin( theta )            |
          |      a   =   --------------------          |
          |                 1  +  K^2 / R^2            |
          +--------------------------------------------+

              and    t  =  (1/sin theta) sqrt( 2h(1 + K^2/R^2) / g )

  [1 mark]  WHICH BODY WINS

  +---------------------+-----------+---------+
  |  BODY               | K^2 / R^2 |  ORDER  |
  +---------------------+-----------+---------+
  |  Solid sphere       |    2/5    |   1st   |
  |  Disc / solid cyl.  |    1/2    |   2nd   |
  |  Hollow sphere      |    2/3    |   3rd   |
  |  Ring / hollow cyl. |     1     |   last  |
  +---------------------+-----------+---------+

      The solid sphere has the smallest K^2/R^2, so it puts the least
      energy into rotation, has the greatest linear acceleration, and
      reaches the bottom first. The ring, with all its mass at the rim,
      comes last. The result is independent of M and R -- only the
      SHAPE matters. A body sliding on a frictionless incline
      ( a = g sin theta ) beats them all.
```

---

# WHICH QUESTIONS REPEAT MOST

```
  +------+---------------------------------------------+---------+----------+
  | RANK |  QUESTION TYPE                              | SECTION |  CHANCE  |
  +------+---------------------------------------------+---------+----------+
  |  1   |  State / explain the PARALLEL AXES and      |    B    |  VERY    |
  |      |  PERPENDICULAR AXES theorems, with an       |         |  HIGH    |
  |      |  application                                |         |          |
  +------+---------------------------------------------+---------+----------+
  |  2   |  Define moment of inertia and radius of     |   A/B   |  VERY    |
  |      |  gyration; factors it depends on            |         |  HIGH    |
  +------+---------------------------------------------+---------+----------+
  |  3   |  Conservation of angular momentum + the     |   A/B   |  VERY    |
  |      |  skater / diver / stool explanation         |         |  HIGH    |
  +------+---------------------------------------------+---------+----------+
  |  4   |  Define torque / angular momentum; units    |    A    |  HIGH    |
  |      |  and dimensions                             |         |          |
  +------+---------------------------------------------+---------+----------+
  |  5   |  Centre of mass of a two- or three-particle |   A/B   |  HIGH    |
  |      |  system (numerical)                         |         |          |
  +------+---------------------------------------------+---------+----------+
  |  6   |  Derive tau = dL/dt                         |    B    |  HIGH    |
  +------+---------------------------------------------+---------+----------+
  |  7   |  Rolling down an incline: a, v, and which   |   B/C   |  HIGH    |
  |      |  body reaches the bottom first              |         |          |
  +------+---------------------------------------------+---------+----------+
  |  8   |  Difference between centre of mass and      |    A    |  MEDIUM  |
  |      |  centre of gravity                          |         |          |
  +------+---------------------------------------------+---------+----------+
  |  9   |  Rotational analogue table + rotational KE  |    B    |  MEDIUM  |
  +------+---------------------------------------------+---------+----------+
  | 10   |  Moment of inertia of a standard body       |    A    |  MEDIUM  |
  |      |  (straight table recall)                    |         |          |
  +------+---------------------------------------------+---------+----------+
  | 11   |  Conditions of equilibrium / couple /       |   A/B   |  MEDIUM  |
  |      |  principle of moments / lever               |         |          |
  +------+---------------------------------------------+---------+----------+
  | 12   |  Vector product: properties and a numerical |    A    |  MEDIUM  |
  +------+---------------------------------------------+---------+----------+
  | 13   |  Show the CM of an isolated system moves    |   A/C   |  LOW-MED |
  |      |  with constant velocity                     |         |          |
  +------+---------------------------------------------+---------+----------+


  IF YOU LEARN ONLY THE TOP FIVE ROWS, you have covered almost every
  mark this chapter has ever been worth in Section A and Section B.
```
