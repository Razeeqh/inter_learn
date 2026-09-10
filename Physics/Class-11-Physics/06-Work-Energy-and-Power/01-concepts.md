# Work, Energy and Power — Concepts Explained Simply

Read this slowly. Every topic ends with a fully worked example where **every
single step is shown**. If you can reproduce the free-fall proof and the
elastic-collision derivation from memory, you will score 12-16 marks from
this chapter alone.

Take g = 9.8 m/s^2 everywhere, unless a question says otherwise. In quick
mental work you may use g = 10 m/s^2.

---

# TOPIC 1 — What "work" means in Physics

In ordinary life, "work" means effort. You say "I worked hard today" after
standing all day holding a heavy bag.

**In Physics that is ZERO work.**

```
  +----------------------------------------------------------------------+
  |  WORK IS DONE ONLY WHEN A FORCE MOVES ITS POINT OF APPLICATION.      |
  |                                                                      |
  |  No movement  ->  no work, no matter how tired you feel.             |
  +----------------------------------------------------------------------+
```

Two things must happen together:

```
  1.  A force must act.
  2.  The body must move (there must be a displacement).
  3.  The displacement must NOT be perpendicular to the force.
```

## The formula

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |            W  =  F  s  cos theta                                     |
  |                                                                      |
  |     F      =  magnitude of the constant force        (newton)        |
  |     s      =  magnitude of the displacement          (metre)         |
  |     theta  =  angle BETWEEN the force and the displacement           |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Picture it:

```
                          F
                         /
                        /
                       / theta
      body  [ ]-------/------------------------->  s
            |<--------- displacement s ---------->|

      Only the part of F ALONG s does work.
      That part is  F cos theta.

      So      W  =  (F cos theta) x s   =   F s cos theta
```

There is a second, equally correct way to read the same formula:

```
      W  =  F  x  (s cos theta)

           = (full force)  x  (displacement in the DIRECTION of the force)
```

Both readings give the same number. Use whichever the question makes easier.

## Work is a SCALAR

Work has magnitude but no direction. It can still be **positive or negative**,
just like temperature can be above or below zero. A negative sign on work does
NOT mean it points backwards; it means energy is being **taken out** of the body.

## Units and dimensions

```
  +---------------------+------------------------------------------------+
  |  SI unit            |  joule (J)                                     |
  |  1 joule            |  work done by 1 N moving a body 1 m along F    |
  |  CGS unit           |  erg                                           |
  |  1 joule            |  10^7 erg                                      |
  |  Dimensional formula|  [ M L^2 T^-2 ]                                |
  |  Other units        |  1 eV = 1.6 x 10^-19 J                         |
  |                     |  1 kWh = 3.6 x 10^6 J                          |
  |                     |  1 calorie = 4.186 J                           |
  +---------------------+------------------------------------------------+
```

> **TRAP:** theta is the angle between **force and displacement**.
> It is NOT the angle of the slope, and NOT the angle of the rope with the
> ground unless that also happens to be the force-displacement angle.
> Draw both arrows starting from the same point before you read off theta.

## WORKED EXAMPLE 1

*A man pulls a box 20 m along the floor with a rope. He pulls with a force of
50 N and the rope makes 60 degrees with the floor. Find the work done.*

```
  STEP 1  Write down what is given.
            F     = 50 N
            s     = 20 m
            theta = 60 degrees   (angle between rope force and floor motion)

  STEP 2  Write the formula.
            W = F s cos theta

  STEP 3  Put in the value of cos 60.
            cos 60 = 0.5

  STEP 4  Substitute.
            W = 50 x 20 x 0.5

  STEP 5  Multiply.
            W = 1000 x 0.5
            W = 500 J

  ANSWER:  500 joule of work is done by the man.
```

---

# TOPIC 2 — Positive, negative and zero work

This is a guaranteed 2-mark question. Learn the table and the examples.

Everything is decided by **cos theta**:

```
  +---------------------+----------------+---------------+-----------------+
  |  ANGLE theta        |  cos theta     |  WORK         |  ENERGY OF BODY |
  +---------------------+----------------+---------------+-----------------+
  |  theta = 0          |  +1            |  maximum +ve  |  increases      |
  |  0 < theta < 90     |  positive      |  POSITIVE     |  increases      |
  |  theta = 90         |  0             |  ZERO         |  unchanged      |
  |  90 < theta < 180   |  negative      |  NEGATIVE     |  decreases      |
  |  theta = 180        |  -1            |  maximum -ve  |  decreases      |
  +---------------------+----------------+---------------+-----------------+
```

Picture of the three cases:

```
  POSITIVE WORK                NEGATIVE WORK              ZERO WORK
  (force helps the motion)     (force opposes motion)     (force is sideways)

        F                            F                          F
        --->                       <---                         ^
      [ ]------> s               [ ]------> s                   |
                                                              [ ]------> s

   theta = 0                    theta = 180                 theta = 90
   W = + F s                    W = - F s                   W = 0
```

## Standard examples (write these in the exam)

```
  POSITIVE WORK
    - Gravity on a FALLING body (force down, motion down).
    - The engine force on an accelerating car.
    - A man lifting a bucket - the work done by the man's force.

  NEGATIVE WORK
    - FRICTION on a sliding block (friction always opposes motion).
    - Gravity on a body thrown UPWARD (force down, motion up).
    - Braking force on a moving car.
    - Air resistance on any moving body.

  ZERO WORK
    - A coolie carrying a load on his head walking on level ground.
      (Force is vertically up, displacement is horizontal, theta = 90.)
    - Centripetal force on a body in a circle
      (force towards the centre, velocity along the tangent, theta = 90).
    - The Earth's gravity on a satellite in a circular orbit.
    - Pushing a wall that does not move (s = 0).
    - The tension in the string of a swinging pendulum
      (tension is along the string, motion is perpendicular to it).
```

The coolie picture — the single most-asked example:

```
             load
            [====]
              ^   force by the coolie's head = N (UPWARD)
              |
             (o)
            /|\      walking ------------------->  displacement (HORIZONTAL)
            / \

        Angle between N (up) and s (horizontal) = 90 degrees
        cos 90 = 0
        Work done by the coolie on the load = ZERO
```

> **TRAP:** "Zero work" and "no force" are completely different.
> The coolie definitely exerts a force. He simply exerts it perpendicular to
> the motion, so the work is zero. Never write "there is no force".

> **TRAP:** Friction is not *always* negative. Friction on the *rear* wheel of
> a car that is driving forward pushes the car forward and does positive work
> on it. In the AP Inter syllabus stick to "friction on a sliding body does
> negative work", but do not say friction can never do positive work.

## WORKED EXAMPLE 2

*A block of mass 5 kg slides 4 m along a rough horizontal floor. The coefficient
of kinetic friction is 0.2. Find (i) the work done by friction (ii) the work
done by gravity (iii) the work done by the normal reaction.*

```
  STEP 1  Draw the forces.

                    N (up)
                    ^
                    |
        friction <--[ 5 kg ]-------> motion, s = 4 m
                    |
                    v
                    mg (down)

  STEP 2  Find the friction force.
            N  = m g = 5 x 9.8 = 49 N
            f  = mu N = 0.2 x 49 = 9.8 N

  STEP 3  Work done by friction.
            theta between friction and displacement = 180 degrees
            W(friction) = f s cos 180 = 9.8 x 4 x (-1)
            W(friction) = - 39.2 J

  STEP 4  Work done by gravity.
            mg points DOWN, s is HORIZONTAL, so theta = 90
            W(gravity) = m g s cos 90 = 0 J

  STEP 5  Work done by the normal reaction.
            N points UP, s is HORIZONTAL, so theta = 90
            W(normal) = 0 J

  ANSWER:  friction  = -39.2 J ,  gravity = 0 ,  normal = 0
           The negative sign means friction REMOVES 39.2 J of energy
           from the block (it turns into heat).
```

---

# TOPIC 3 — The scalar (dot) product, and why this chapter needs it

Two vectors can be multiplied in two ways. This chapter uses the **scalar
product**, also called the **dot product**, because work is a scalar.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |        A . B   =   A B cos theta        (a NUMBER, not a vector)     |
  |                                                                      |
  |  so                                                                  |
  |                                                                      |
  |        W  =  F . s   =   F s cos theta                               |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## In component form

If the force and the displacement are given with i, j, k:

```
  F  =  Fx i  +  Fy j  +  Fz k
  s  =  sx i  +  sy j  +  sz k

  Then

  W  =  F . s  =  Fx sx  +  Fy sy  +  Fz sz
```

Because:

```
  i . i = 1        j . j = 1        k . k = 1     (angle 0, cos 0 = 1)
  i . j = 0        j . k = 0        k . i = 0     (angle 90, cos 90 = 0)
```

## Properties worth one mark

```
  1.  A . B  =  B . A                        (commutative)
  2.  A . (B + C) = A . B + A . C            (distributive)
  3.  A . A  =  A^2                          (magnitude squared)
  4.  If A . B = 0 (and neither is zero), the vectors are PERPENDICULAR.
```

## WORKED EXAMPLE 3

*A force F = 3 i + 4 j - 5 k newton moves a body through
s = 2 i - j + 3 k metre. Find the work done and the angle between F and s.*

```
  STEP 1  Use the component form.
            W = Fx sx + Fy sy + Fz sz

  STEP 2  Multiply component by component.
            Fx sx = 3 x 2   = 6
            Fy sy = 4 x (-1) = -4
            Fz sz = (-5) x 3 = -15

  STEP 3  Add them.
            W = 6 - 4 - 15
            W = - 13 J

  STEP 4  For the angle, find the magnitudes.
            |F| = sqrt(3^2 + 4^2 + (-5)^2) = sqrt(9 + 16 + 25) = sqrt(50)
            |s| = sqrt(2^2 + (-1)^2 + 3^2) = sqrt(4 + 1 + 9)   = sqrt(14)

  STEP 5  Use W = F s cos theta.

                        W                 -13
            cos theta = -------  =  ------------------
                        |F| |s|      sqrt(50) sqrt(14)


                          -13            -13
                      = --------  =  ----------   =  - 0.491
                        sqrt(700)       26.46

  STEP 6  theta = cos inverse of (-0.491)  =  about 119 degrees

  ANSWER:  W = -13 J ,  theta = about 119 degrees.
           The angle is more than 90, which is exactly why the work
           came out negative. The two answers agree.
```

---

# TOPIC 4 — Work done by a VARIABLE force (area under the graph)

W = F s cos theta only works when F is **constant**. In real life forces change:
a spring gets harder to stretch, a rocket's thrust changes, air drag grows with
speed.

**The rule for a changing force:**

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   WORK DONE  =  AREA UNDER THE FORCE - DISPLACEMENT GRAPH            |
  |                                                                      |
  |   (Area above the s-axis is POSITIVE work.                           |
  |    Area below the s-axis is NEGATIVE work.)                          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Why the area? (this reasoning is worth marks)

```
  Force
    ^
    |         .-'''-.
    |      .-'   |   '-.
    |    .'      |      '.
    |   /        |        \
    |  /         |         \
    | /       |  |  |       \
    |/        |  |  |        \
    +---------+--+--+---------+------> displacement
              |<-->|
               ds   (a very small step)

  Over a VERY SMALL step ds, the force hardly changes,
  so we may treat it as constant over that step:

        small work  dW  =  F  x  ds   =  area of that thin strip

  Add up all the strips from s = s1 to s = s2:

        W  =  sum of all F ds   =   TOTAL AREA under the curve
```

In calculus language (write this line, it earns a mark):

```
              s2
         W = INTEGRAL  F ds
             s1
```

## Reading a graph in the exam

```
  F (N)
    ^
 10 |     +--------+
    |     |        |
    |     |        |\
  5 |     |        | \
    |     |        |  \
    |     |        |   \
    +-----+--------+----+--------> s (m)
    0     2        6    8

  Break the area into simple shapes:

    Rectangle  from s = 2 to s = 6 :   10 x 4  = 40 J

                                      1
    Triangle   from s = 6 to s = 8 :  --- x 2 x 10  = 10 J
                                      2

    TOTAL WORK  =  40 + 10  =  50 J
```

If part of the graph lies **below** the axis, that area is subtracted:

```
  F
    ^
    |  +-----+
    |  |  A  |
  --+--+-----+-----+-----+---> s
    |              |  B  |
    |              +-----+

    W  =  (area A)  -  (area B)
```

> **TRAP:** The area under a **force-displacement** graph is WORK.
> The area under a **velocity-time** graph is DISPLACEMENT.
> Students mix these two up every single year. Check the axis labels first.

## WORKED EXAMPLE 4

*A force acting on a body varies as F = 3 x^2 newton, where x is in metres.
Find the work done in moving the body from x = 0 to x = 2 m.*

```
  STEP 1  The force is NOT constant (it depends on x), so use the area rule.

              x2
         W = INTEGRAL  F dx
             x1

  STEP 2  Substitute F = 3 x^2 with limits 0 to 2.

              2
         W = INTEGRAL  3 x^2  dx
             0

  STEP 3  Integrate.  The integral of x^2 is x^3 / 3.

                    +-        -+  2         +-       -+ 2
                    |   3 x^3  |            |         |
         W    =     |  ------- |      =     |   x^3   |
                    |     3    |  0         |         | 0
                    +-        -+            +-       -+

  STEP 4  Apply the limits.
         W = (2)^3  -  (0)^3
         W = 8 - 0

  ANSWER:  W = 8 J
```

---

# TOPIC 5 — Kinetic energy

**Energy** is the capacity to do work. Its unit is the joule, the same as work,
and its dimensions are the same, [M L^2 T^-2].

**Kinetic energy** is the energy a body has **because it is moving**.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |              K  =  (1/2)  m  v^2                                     |
  |                                                                      |
  |   Also, since  p = m v :                                             |
  |                                                                      |
  |                    p^2                                               |
  |              K  = -------            and       p  =  sqrt(2 m K)     |
  |                    2 m                                               |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The two things to notice

```
  1.  K depends on v SQUARED.
      Double the speed  ->  FOUR times the kinetic energy.
      Triple the speed  ->  NINE times the kinetic energy.
      This is why a car at 80 km/h is far more dangerous than at 40 km/h.

  2.  K is NEVER negative.
      Both m and v^2 are positive, so K >= 0 always.
```

## Deriving K = (1/2) m v^2

```
  A body of mass m at rest is pushed by a constant force F.
  It gains speed v over a distance s.

  Work done on it :        W = F s
  Newton's second law:     F = m a
  Equation of motion  :    v^2 = u^2 + 2 a s  with u = 0

                                     v^2
                        so     a = -------
                                    2 s

  Substitute:
                                     v^2               1
            W  =  m a s   =   m  x  -------  x  s  =  --- m v^2
                                     2 s               2

  This work is stored in the body as its kinetic energy:

                          1
                    K =  --- m v^2
                          2
```

> **TRAP:** K = p^2 / 2m , not p^2 / 2. And when two bodies have the SAME
> momentum, the LIGHTER one has MORE kinetic energy. When they have the same
> kinetic energy, the HEAVIER one has more momentum. Read which is fixed.

## WORKED EXAMPLE 5

*A bullet of mass 20 g is moving at 400 m/s. Find (i) its kinetic energy
(ii) its momentum (iii) the kinetic energy if its speed doubles.*

```
  STEP 1  Convert the mass to kilograms.
            m = 20 g = 20 / 1000 = 0.02 kg

  STEP 2  Kinetic energy.
            K = (1/2) m v^2
            K = 0.5 x 0.02 x (400)^2
            K = 0.5 x 0.02 x 160000
            K = 0.01 x 160000
            K = 1600 J

  STEP 3  Momentum.
            p = m v = 0.02 x 400 = 8 kg m/s

  STEP 4  If the speed doubles, K becomes 4 times (because K goes as v^2).
            K(new) = 4 x 1600 = 6400 J

  ANSWER:  K = 1600 J ,  p = 8 kg m/s ,  new K = 6400 J
```

---

# TOPIC 6 — THE WORK-ENERGY THEOREM

This is the most useful single statement in the whole chapter.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  STATEMENT                                                           |
  |                                                                      |
  |  The NET work done by all the forces acting on a body is equal to    |
  |  the CHANGE in its kinetic energy.                                   |
  |                                                                      |
  |                W(net)  =  Kf  -  Ki                                  |
  |                                                                      |
  |                        =  (1/2) m v^2  -  (1/2) m u^2                |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Meaning in plain English:

```
  Positive net work  ->  the body SPEEDS UP.
  Negative net work  ->  the body SLOWS DOWN.
  Zero net work      ->  the speed does not change.
```

## PROOF 1 — for a CONSTANT force (learn this first)

```
  Let a constant force F act on a body of mass m.
  Initial speed u , final speed v , displacement s , acceleration a.

  STEP 1  From the third equation of motion:

              v^2  =  u^2  +  2 a s

  STEP 2  Rearrange:
                                 v^2  -  u^2
              a s   =   -----------------------
                                  2

  STEP 3  Multiply both sides by m:

                                 m ( v^2 - u^2 )
              m a s   =   ----------------------------
                                       2

  STEP 4  But  m a = F  (Newton's second law), and  F s = W. So the
          left-hand side is the work done, W.

  STEP 5  Split the right-hand side:

                        1              1
              W    =   --- m v^2  -   --- m u^2
                        2              2

  STEP 6  Which is exactly

              W  =  Kf  -  Ki                     PROVED
```

## PROOF 2 — for a VARIABLE force

```
  STEP 1  For a small displacement ds, the small work done is

              dW  =  F ds

  STEP 2  By Newton's second law,  F = m a = m (dv / dt)

              dW  =  m ( dv / dt ) ds

  STEP 3  Rearrange the order of ds and dt:

              dW  =  m dv ( ds / dt )   =   m v dv          [since ds/dt = v]

  STEP 4  Integrate from the initial speed u to the final speed v:

                       v
              W  =  INTEGRAL   m v dv
                      u

  STEP 5  The integral of v dv is v^2 / 2 :

                     +-           -+ v
                     |    m v^2    |
              W  =   |  ---------  |
                     |      2      | u
                     +-           -+

  STEP 6  Apply the limits:

                     1             1
              W  =  --- m v^2  -  --- m u^2   =   Kf  -  Ki      PROVED
                     2             2
```

```
  +----------------------------------------------------------------------+
  |  THE THEOREM HOLDS FOR CONSTANT FORCES AND VARIABLE FORCES ALIKE.    |
  |  It also holds when friction is present - friction simply             |
  |  contributes NEGATIVE work to W(net).                                |
  +----------------------------------------------------------------------+
```

> **TRAP:** It is the **NET** work, that is the work of ALL the forces added
> together. If you only use the applied force and forget friction, the answer
> is wrong. Also W(net) = Kf - Ki, not Ki - Kf. Final minus initial, always.

## WORKED EXAMPLE 6

*A car of mass 1000 kg moving at 20 m/s is brought to rest in 50 m by the
brakes. Find the braking force.*

```
  STEP 1  List what you know.
            m  = 1000 kg
            u  = 20 m/s
            v  = 0     (brought to rest)
            s  = 50 m
            F  = ?

  STEP 2  Use the work-energy theorem.
            W(net) = Kf - Ki

  STEP 3  Find the two kinetic energies.
            Ki = (1/2) x 1000 x (20)^2 = 500 x 400 = 200000 J
            Kf = (1/2) x 1000 x 0      = 0 J

  STEP 4  So the net work done is
            W = 0 - 200000 = - 200000 J

  STEP 5  The braking force opposes the motion, so theta = 180 and
            W = - F s

            - F x 50 = - 200000

  STEP 6  Solve for F.

                    200000
            F  =  ----------   =  4000 N
                      50

  ANSWER:  The braking force is 4000 N, directed opposite to the motion.
```

## WORKED EXAMPLE 7

*A bullet of mass 10 g moving at 500 m/s enters a wooden block and stops after
penetrating 20 cm. Find the average resistive force of the wood.*

```
  STEP 1  Convert everything to SI.
            m = 10 g = 0.01 kg
            u = 500 m/s
            v = 0
            s = 20 cm = 0.2 m

  STEP 2  Ki = (1/2) x 0.01 x (500)^2
             = 0.005 x 250000
             = 1250 J

  STEP 3  Kf = 0 , so  W(net) = 0 - 1250 = -1250 J

  STEP 4  The resistance opposes the motion:   W = - F s

            - F x 0.2  =  - 1250

  STEP 5              1250
            F   =   --------   =   6250 N
                      0.2

  ANSWER:  The average resistance is 6250 N.
```

---

# TOPIC 7 — Potential energy

**Potential energy** is the energy a body has because of its **POSITION** or
its **CONFIGURATION** (its shape or how much it is stretched).

It is "stored" energy. It is waiting to be released.

```
  Everyday pictures:

    A stone held on a rooftop      ->  stored by POSITION (gravitational PE)
    A stretched rubber band        ->  stored by SHAPE    (elastic PE)
    A compressed spring in a toy   ->  stored by SHAPE    (elastic PE)
    Water behind a dam             ->  gravitational PE, turned into
                                       electricity when released
```

## Gravitational potential energy

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |              U  =  m g h                                             |
  |                                                                      |
  |   m = mass (kg) ,  g = 9.8 m/s^2 ,  h = height above the             |
  |   chosen reference level (m)                                         |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Where does m g h come from?

```
  To lift a body of mass m slowly through a height h you must apply an
  upward force just equal to its weight, m g.

           F = mg (applied, upward)
              ^
              |                        the body rises by h,
            [ m ]                      force and displacement are
              |                        both UPWARD, so theta = 0
              v
             mg

  Work done by you  =  F h cos 0  =  m g h

  That work is not lost. It is stored in the body as potential energy:

                        U  =  m g h
```

```
  +----------------------------------------------------------------------+
  |  IMPORTANT:  h is measured from a level YOU choose.                  |
  |  Potential energy has no absolute value, only DIFFERENCES matter.    |
  |  In exam problems, take the ground (or the lowest point) as h = 0.   |
  +----------------------------------------------------------------------+
```

## Potential energy of a spring

A spring resists being stretched or compressed. **Hooke's law** says:

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |              F  =  - k x            (the SPRING FORCE)               |
  |                                                                      |
  |   x = displacement from the natural (unstretched) length             |
  |   k = spring constant or force constant, unit N/m,                   |
  |       dimensions [ M T^-2 ]                                          |
  |                                                                      |
  |   THE MINUS SIGN means the spring force is always OPPOSITE to the    |
  |   displacement - it always pulls back towards the natural length.    |
  |   That is why it is called a RESTORING force.                        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Picture:

```
  NATURAL LENGTH (x = 0)
  |/\/\/\/\/\/\/\/\/[ m ]
  |
  |
  STRETCHED (x positive, to the RIGHT)
  |/\/\/\/\/\/\/\/\/\/\/\/[ m ]
  |                   <----     spring force pulls LEFT (negative)
  |
  |
  COMPRESSED (x negative, to the LEFT)
  |/\/\/\/\/\/[ m ]
  |            ---->            spring force pushes RIGHT (positive)
  |

  In BOTH cases the force points back towards x = 0.
  Hence the minus sign in  F = -k x.
```

**A large k means a STIFF spring.** k = 2000 N/m is much harder to stretch than
k = 50 N/m.

## Deriving the spring potential energy

The spring force is not constant — it grows as you stretch. So we need the area
under the graph.

```
  Applied force (to stretch it) = + k x     (equal and opposite to the
                                             spring force)

  F
    ^
    |                    /|
    |                  /  |
    |                /    |
  kx|. . . . . . ./       |
    |          /  |       |
    |        /    |       |
    |      /      |       |
    |    /        |       |
    |  /          |       |
    +/------------+-------+------> x
    0                     x

  The graph is a STRAIGHT LINE through the origin.
  The work done is the AREA of the triangle:

                1                        1
        W  =   --- x base x height  =   --- x  x  x  (k x)
                2                        2

                1
        W  =   --- k x^2
                2

  With calculus, the same result:

              x                    +-        -+ x
        W = INTEGRAL  k x dx   =   |  k x^2 / 2 |     =  (1/2) k x^2
             0                     +-        -+ 0
```

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     POTENTIAL ENERGY OF A SPRING     U  =  (1/2) k x^2               |
  |                                                                      |
  |     It is the SAME for a stretch x and a compression x,              |
  |     because x is squared. It is never negative.                      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The general link between force and potential energy

```
                      dU
             F  =  -  ----
                      dx

  The force is minus the slope of the potential energy curve.
  Check it:   U = (1/2) k x^2  ->  dU/dx = k x  ->  F = -k x    Correct.
              U = m g h        ->  dU/dh = m g  ->  F = -m g    Correct
                                     (weight acts downward).
```

> **TRAP:** For a spring, U = (1/2) k x^2 where x is measured from the
> **natural length**, not from the floor and not from the hook. And do not
> write U = (1/2) k x — the square is essential.

## WORKED EXAMPLE 8

*A spring of force constant 800 N/m is stretched by 5 cm. Find (i) the energy
stored (ii) the extra work needed to stretch it from 5 cm to 10 cm.*

```
  STEP 1  Convert to SI.
            k  = 800 N/m
            x1 = 5 cm  = 0.05 m
            x2 = 10 cm = 0.10 m

  STEP 2  Energy stored at 5 cm.
            U1 = (1/2) k x1^2
               = 0.5 x 800 x (0.05)^2
               = 400 x 0.0025
               = 1 J

  STEP 3  Energy stored at 10 cm.
            U2 = (1/2) k x2^2
               = 0.5 x 800 x (0.10)^2
               = 400 x 0.01
               = 4 J

  STEP 4  Extra work needed = U2 - U1
                            = 4 - 1
                            = 3 J

  ANSWER:  (i) 1 J stored    (ii) 3 J extra work needed.

  NOTICE:  Doubling the stretch needed FOUR times the energy (1 J -> 4 J),
           because U goes as x SQUARED.  A very common exam point.
```

---

# TOPIC 8 — Conservative and non-conservative forces

```
  +----------------------------------------------------------------------+
  |  A CONSERVATIVE FORCE is one for which the work done depends ONLY    |
  |  on the starting point and the ending point, NOT on the path taken.  |
  |                                                                      |
  |  A NON-CONSERVATIVE FORCE is one for which the work DOES depend on   |
  |  the path.                                                           |
  +----------------------------------------------------------------------+
```

Picture of the idea:

```
                       B
                      /|\
                    /  |  \        Three different paths from A to B.
                  /    |    \
                /      |      \
              /        |        \
            A ---------+---------+

  GRAVITY (conservative)
      Work done is  - m g h  along EVERY one of those paths.
      Only the height difference matters.

  FRICTION (non-conservative)
      The LONGER the path, the MORE energy is lost.
      A long winding path loses far more than a short straight one.
```

## The three TESTS for a conservative force

```
  +----+-----------------------------------------------------------------+
  | 1  |  The work done in moving a body between two points is           |
  |    |  INDEPENDENT OF THE PATH.                                       |
  +----+-----------------------------------------------------------------+
  | 2  |  The work done in a COMPLETE ROUND TRIP (closed loop) is ZERO.  |
  +----+-----------------------------------------------------------------+
  | 3  |  A POTENTIAL ENERGY function can be defined for it,             |
  |    |  with  F = - dU / dx .                                          |
  +----+-----------------------------------------------------------------+

  If a force passes all three, it is conservative.
  If it FAILS any one of them, it is non-conservative.
```

## The comparison table (learn it, it is a 2 or 4 mark answer)

```
  +--------------------------+------------------------+--------------------+
  |  POINT                   |  CONSERVATIVE          |  NON-CONSERVATIVE  |
  +--------------------------+------------------------+--------------------+
  |  Work depends on path?   |  NO                    |  YES               |
  |  Work in a closed loop   |  ZERO                  |  NOT zero          |
  |  Potential energy exists?|  YES                   |  NO                |
  |  Energy recoverable?     |  YES, fully            |  NO, lost as heat  |
  |  Mechanical energy       |  CONSERVED             |  NOT conserved     |
  |  Examples                |  gravity, spring       |  friction, air     |
  |                          |  force, electrostatic  |  resistance,       |
  |                          |  force, magnetic       |  viscous force,    |
  |                          |  force between poles   |  tension in an     |
  |                          |                        |  inelastic string  |
  +--------------------------+------------------------+--------------------+
```

## Why friction fails the closed-loop test

```
  Push a block from A to B and back to A on a rough floor.

    A ------------------> B          friction acts LEFT   -> W = - f d
    A <------------------ B          friction acts RIGHT  -> W = - f d

    Total work by friction over the round trip  =  - 2 f d

  It is NOT zero, so friction is non-conservative.
  (Notice that friction reversed its own direction when the motion reversed.
  Gravity never does that - it always points down.)
```

> **TRAP:** "Non-conservative" does not mean energy is destroyed. Total energy
> is always conserved. Only the **mechanical** energy (KE + PE) is not
> conserved — the missing part became heat and sound.

---

# TOPIC 9 — LAW OF CONSERVATION OF MECHANICAL ENERGY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  STATEMENT                                                           |
  |                                                                      |
  |  If only CONSERVATIVE forces act on a body, the total mechanical     |
  |  energy of the body (kinetic + potential) remains CONSTANT.          |
  |                                                                      |
  |               K  +  U  =  constant                                   |
  |                                                                      |
  |         or    Ki + Ui  =  Kf + Uf                                    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Short general proof

```
  STEP 1  By the work-energy theorem, the work done by the force is
              W  =  Kf  -  Ki

  STEP 2  For a CONSERVATIVE force, the work done also equals the LOSS
          of potential energy:
              W  =  Ui  -  Uf

  STEP 3  Equate the two expressions for W:
              Kf  -  Ki  =  Ui  -  Uf

  STEP 4  Rearrange, putting the initial terms together and the final
          terms together:
              Kf  +  Uf  =  Ki  +  Ui

  STEP 5  So the sum (K + U) has the same value before and after.
              K + U  =  CONSTANT                       PROVED
```

## THE CLASSIC PROOF — a body falling freely from a height h

This is the single most-asked 8-mark question in the chapter. Learn the picture,
the three points, and the table.

```
  A body of mass m is dropped from rest at A, at height h above the ground.
  Take the GROUND as the zero level for potential energy.
  Ignore air resistance, so only GRAVITY (a conservative force) acts.


        A  o  <---------------------------  v = 0        h = h
           |                     ^
           |                     |
           |                     |  (h - x)
           |          x          |
           |                     |
        B  o  <---------------- -+---------  v1 = sqrt(2 g x)   height = h - x
           |                     |
           |                     |  (h - x)
           |                     |
           |                     v
  //////// C ////////////////////////////   v2 = sqrt(2 g h)   h = 0
                  GROUND
```

### AT POINT A (the top, height h)

```
  It starts from rest, so  v = 0.

     KE  =  (1/2) m (0)^2   =   0
     PE  =  m g h

     TOTAL ENERGY  =  0  +  m g h   =   m g h            ... (1)
```

### AT POINT B (after falling a distance x, height h - x)

```
  Use  v^2 = u^2 + 2 a s   with  u = 0 , a = g , s = x :

     v1^2  =  0  +  2 g x   =   2 g x

                  1                1
     KE  =       --- m v1^2  =    --- m (2 g x)   =   m g x
                  2                2

     PE  =  m g (h - x)  =  m g h  -  m g x

     TOTAL ENERGY  =  m g x  +  m g h  -  m g x

                   =  m g h                                ... (2)
```

### AT POINT C (the ground, height 0)

```
  Use  v^2 = u^2 + 2 a s  with  u = 0 , a = g , s = h :

     v2^2  =  2 g h

                  1                1
     KE  =       --- m v2^2  =    --- m (2 g h)   =   m g h
                  2                2

     PE  =  m g (0)  =  0

     TOTAL ENERGY  =  m g h  +  0   =   m g h              ... (3)
```

### CONCLUSION

```
  +--------------+---------------+----------------+------------------+
  |  POINT       |  KINETIC KE   |  POTENTIAL PE  |  TOTAL KE + PE   |
  +--------------+---------------+----------------+------------------+
  |  A  (top)    |      0        |     m g h      |     m g h        |
  |  B  (middle) |    m g x      |   m g (h - x)  |     m g h        |
  |  C  (ground) |    m g h      |       0        |     m g h        |
  +--------------+---------------+----------------+------------------+

  From (1), (2) and (3), the total mechanical energy is m g h at every
  point of the fall.

  HENCE THE MECHANICAL ENERGY OF A FREELY FALLING BODY IS CONSERVED.
```

Draw the energy graph too — examiners like it:

```
    Energy
      ^
      |  PE
 mgh  |----\--------------------------  TOTAL (constant)
      |     \                    /
      |      \                  /
      |       \                /
      |        \              /
      |         \            /
      |          \          /
      |           \        /
      |            \      /
      |             \    /   KE
      |              \  /
      0 +-------------\/------------------> distance fallen
        top                       ground

    PE falls in a straight line, KE rises in a straight line,
    and their SUM is a flat horizontal line.
```

> **TRAP:** Conservation of mechanical energy holds **only if friction and air
> resistance are absent**. If the question says "rough surface" or "air
> resistance", you must write  Ki + Ui = Kf + Uf + (energy lost to friction).

## WORKED EXAMPLE 9

*A ball is dropped from a height of 20 m. Find its speed when it has fallen
half way, and its speed just before hitting the ground. Take g = 10 m/s^2.*

```
  STEP 1  Use conservation of energy, ground as zero level.
            (KE + PE) at the start = (KE + PE) at the point wanted

  STEP 2  At the start (h = 20 m, at rest):
            Total energy = m g h = m x 10 x 20 = 200 m   joule

  STEP 3  HALF WAY DOWN (height = 10 m):
            PE = m x 10 x 10 = 100 m
            So  KE = 200 m - 100 m = 100 m

            (1/2) m v^2 = 100 m
            v^2 = 200
            v   = sqrt(200) = 14.1 m/s

  STEP 4  AT THE GROUND (height = 0):
            PE = 0
            So  KE = 200 m

            (1/2) m v^2 = 200 m
            v^2 = 400
            v   = 20 m/s

  ANSWER:  14.1 m/s half way down ,  20 m/s at the ground.

  CHECK:   v = sqrt(2 g h) = sqrt(2 x 10 x 20) = sqrt(400) = 20 m/s. Agrees.
           Notice the mass CANCELLED. Speed does not depend on mass.
```

---

# TOPIC 10 — The vertical circle

A body tied to a string is whirled in a **vertical** circle of radius L. Gravity
helps it on the way down and fights it on the way up, so the speed changes
around the loop. This is a favourite 4-mark question.

```
                      v(top)
                     ----->
                  ......T.......
              ...     o TOP     ...
            ..        |            ..
          ..          | mg           ..
         .            v                .
        .                               .
        .              O  centre        .      radius = L
        .                               .
         .                             .
          ..                         ..
            ..         ^            ..
              ...      | T        ...
                 ......o.......
                    BOTTOM  | mg
                            v
                         v(bottom)
```

## At the TOP of the circle

```
  BOTH the tension T and the weight mg point DOWNWARD, towards the centre.
  Together they supply the centripetal force:

                                m v(top)^2
              T  +  m g   =   --------------
                                    L

  The string can only PULL, never push, so T cannot be negative.
  The slowest possible case is when the string just goes slack, T = 0:

                                m v(top)^2
                    m g    =   --------------
                                    L

                    v(top)^2  =  g L

              +----------------------------------------+
              |     v(top, minimum)  =  sqrt( g L )    |
              +----------------------------------------+
```

## At the BOTTOM of the circle

```
  Use energy conservation between the bottom and the top.
  The top is a height 2L above the bottom.

     (1/2) m v(bottom)^2  =  (1/2) m v(top)^2  +  m g (2 L)

  Put  v(top)^2 = g L :

     (1/2) v(bottom)^2  =  (1/2) (g L)  +  2 g L

           v(bottom)^2  =  g L  +  4 g L   =   5 g L

              +--------------------------------------------+
              |   v(bottom, minimum)  =  sqrt( 5 g L )     |
              +--------------------------------------------+
```

## Tension at the bottom

```
  At the bottom, T acts UP (towards the centre) and mg acts DOWN:

                                 m v(bottom)^2
              T  -  m g   =   -------------------
                                       L

                                m (5 g L)
              T   =   m g  +  -------------   =   m g  +  5 m g   =   6 m g
                                    L
```

## The three results to memorise

```
  +--------------------------------------+-----------------------------+
  |  Minimum speed at the TOP            |  v = sqrt( g L )            |
  |  Minimum speed at the BOTTOM         |  v = sqrt( 5 g L )          |
  |  Tension difference                  |  T(bottom) - T(top) = 6 m g |
  |  Minimum tension at the bottom       |  6 m g                      |
  |  Tension at the top (minimum case)   |  0                          |
  |  Speed at the side (horizontal)      |  v = sqrt( 3 g L )          |
  +--------------------------------------+-----------------------------+
```

> **TRAP:** T(bottom) - T(top) = 6 m g is true for **every** speed, not just
> the minimum one. It is a very common one-mark shortcut in EAPCET.

> **TRAP:** A string can only pull. A rigid ROD can also push, so with a rod
> the minimum speed at the top is 0, not sqrt(gL). Read whether it is a string
> or a rod.

## WORKED EXAMPLE 10

*A stone of mass 0.5 kg is tied to a string of length 1 m and whirled in a
vertical circle. Find the minimum speed at the highest point and at the lowest
point. Take g = 10 m/s^2.*

```
  STEP 1  At the top:
            v(top) = sqrt(g L) = sqrt(10 x 1) = sqrt(10) = 3.16 m/s

  STEP 2  At the bottom:
            v(bottom) = sqrt(5 g L) = sqrt(5 x 10 x 1) = sqrt(50) = 7.07 m/s

  STEP 3  Tension at the bottom in this minimum case:
            T = 6 m g = 6 x 0.5 x 10 = 30 N

  ANSWER:  3.16 m/s at the top ,  7.07 m/s at the bottom ,
           tension at the bottom = 30 N.
```

---

# TOPIC 11 — Power

Two labourers each carry 50 bricks to the roof. One finishes in 10 minutes, the
other in 30 minutes. **They did the SAME work. The first one had more POWER.**

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  POWER is the RATE of doing work, or the work done per unit time.    |
  |                                                                      |
  |                        W                                             |
  |     AVERAGE POWER  =  ----                                           |
  |                        t                                             |
  |                                                                      |
  |                            dW                                        |
  |     INSTANTANEOUS  =     ------   =   F . v   =   F v cos theta      |
  |     POWER                  dt                                        |
  |                                                                      |
  |  Power is a SCALAR.                                                  |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Why P = F . v

```
  dW  =  F . ds

  Divide both sides by dt :

        dW          ds
      ------  =  F . ----      =   F . v
        dt          dt

  So        P  =  F . v   =   F v cos theta
```

If the force and the velocity are in the same direction (the usual case),
`P = F v`.

## Units

```
  +---------------------+------------------------------------------------+
  |  SI unit            |  watt (W)   =  1 joule per second              |
  |  1 kilowatt         |  1000 W                                        |
  |  1 megawatt         |  10^6 W                                        |
  |  1 horsepower (hp)  |  746 W                                         |
  |  Dimensional formula|  [ M L^2 T^-3 ]                                |
  |  1 kilowatt-hour    |  a unit of ENERGY, not power                   |
  |  (the "unit" on     |  = 1000 W x 3600 s  =  3.6 x 10^6 J            |
  |   an electric bill) |                                                |
  +---------------------+------------------------------------------------+
```

> **TRAP:** The kilowatt-hour is a unit of **energy**, not of power. Watt x hour
> = energy. Every year some students call it a unit of power and lose the mark.

## WORKED EXAMPLE 11

*A pump lifts 3000 litres of water per minute to a height of 10 m. Find the
power of the pump. Take g = 10 m/s^2 and the density of water as 1000 kg/m^3.*

```
  STEP 1  Find the mass lifted per minute.
            3000 litres = 3000 kg     (1 litre of water = 1 kg)

  STEP 2  Find the work done in that minute.
            W = m g h
              = 3000 x 10 x 10
              = 300000 J

  STEP 3  The time is 1 minute = 60 s.

  STEP 4  Power.
                    W          300000
            P  =  -----   =  ----------
                    t            60

            P  =  5000 W  =  5 kW

  STEP 5  In horsepower:
                   5000
            P  =  ------   =  6.7 hp
                    746

  ANSWER:  5000 W  (5 kW, about 6.7 hp).
```

## WORKED EXAMPLE 12

*A car of mass 1200 kg moves at a constant 20 m/s against a total resistance of
600 N. What power does the engine deliver?*

```
  STEP 1  The speed is CONSTANT, so the acceleration is zero.
          Therefore the engine force exactly balances the resistance:
            F = 600 N

  STEP 2  Use P = F v.
            P = 600 x 20
            P = 12000 W  =  12 kW

  ANSWER:  12 kW  (about 16 hp).

  NOTE:  the mass 1200 kg was NOT needed. Exam questions often include
         a number you do not use, to test whether you understand.
```

---

# TOPIC 12 — Collisions

A **collision** is a short, strong interaction between two bodies in which their
momenta change. The bodies do not even have to touch (think of two magnets
repelling, or a comet swinging past a planet).

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  IN EVERY COLLISION, LINEAR MOMENTUM IS CONSERVED.                   |
  |  (because the colliding pair forms an isolated system - the          |
  |   collision forces are internal, and they are equal and opposite     |
  |   by Newton's third law)                                             |
  |                                                                      |
  |  KINETIC ENERGY IS CONSERVED ONLY IN AN ELASTIC COLLISION.           |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The classification

```
                          COLLISIONS
                               |
             +-----------------+-----------------+
             |                                   |
         ELASTIC                            INELASTIC
             |                                   |
   momentum conserved                  momentum conserved
   KE conserved                        KE NOT conserved
   e = 1                               e < 1
             |                                   |
   Examples:                     +---------------+---------------+
   collisions between            |                               |
   atoms and molecules,      PARTLY INELASTIC          PERFECTLY INELASTIC
   ideal steel balls,        (0 < e < 1)               (e = 0)
   alpha particle with       most real collisions      bodies STICK TOGETHER
   a nucleus                                           and move as one
                                                       MAXIMUM loss of KE
                                                       Example: a bullet
                                                       embedding in a block
```

## Comparison table (a standard 2 or 4 mark question)

```
  +---------------------------+-------------------+----------------------+
  |  POINT                    |  ELASTIC          |  INELASTIC           |
  +---------------------------+-------------------+----------------------+
  |  Momentum conserved?      |  YES              |  YES                 |
  |  Kinetic energy conserved?|  YES              |  NO                  |
  |  Total energy conserved?  |  YES              |  YES                 |
  |  Coefficient e            |  1                |  less than 1         |
  |  Forces involved          |  conservative     |  non-conservative    |
  |  Bodies deform            |  temporarily,     |  permanently, or     |
  |                           |  fully recover    |  stick together      |
  |  Example                  |  molecular /      |  a lump of clay      |
  |                           |  atomic           |  hitting a floor     |
  +---------------------------+-------------------+----------------------+
```

## Coefficient of restitution

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |            relative velocity of SEPARATION        v2  -  v1          |
  |    e  =  ------------------------------------  = -----------         |
  |            relative velocity of APPROACH          u1  -  u2          |
  |                                                                      |
  |    e = 1        perfectly ELASTIC                                    |
  |    0 < e < 1    partly inelastic (real collisions)                   |
  |    e = 0        perfectly INELASTIC (they stick together)            |
  |                                                                      |
  |    e has NO UNITS and NO DIMENSIONS.                                 |
  |                                                                      |
  +----------------------------------------------------------------------+
```

For a ball dropped on the floor:

```
  Dropped from height h , it rebounds to height h1.

                   speed of rebound        sqrt(2 g h1)         h1
        e  =  ------------------------  = --------------  = sqrt( ---- )
                   speed of impact         sqrt(2 g h)            h

  After n bounces:      h(n)  =  h  x  e^(2n)
```

## ONE-DIMENSIONAL ELASTIC COLLISION — the full derivation

This is the standard 8-mark question. Learn it step by step.

```
  BEFORE                                    AFTER

   u1 ->        u2 ->                        v1 ->      v2 ->
  ( m1 )       ( m2 )                       ( m1 )     ( m2 )
  ------------------------>                 ------------------------>
                                     (all velocities along one line)
```

```
  STEP 1  CONSERVATION OF MOMENTUM

            m1 u1  +  m2 u2   =   m1 v1  +  m2 v2

          Group the m1 terms and the m2 terms:

            m1 ( u1 - v1 )  =  m2 ( v2 - u2 )                 ... (1)


  STEP 2  CONSERVATION OF KINETIC ENERGY (elastic, so this is allowed)

            (1/2) m1 u1^2 + (1/2) m2 u2^2 = (1/2) m1 v1^2 + (1/2) m2 v2^2

          Cancel the 1/2 and group:

            m1 ( u1^2 - v1^2 )  =  m2 ( v2^2 - u2^2 )         ... (2)


  STEP 3  DIVIDE equation (2) by equation (1)

            m1 (u1 - v1)(u1 + v1)         m2 (v2 - u2)(v2 + u2)
            ----------------------   =    -----------------------
                m1 (u1 - v1)                    m2 (v2 - u2)

          The brackets cancel, leaving

            u1  +  v1   =   v2  +  u2

          Rearranged:

            u1  -  u2   =   v2  -  v1                          ... (3)

          IN WORDS:  in an elastic collision, the relative velocity of
          APPROACH equals the relative velocity of SEPARATION.
          (This is exactly why e = 1 for an elastic collision.)


  STEP 4  From (3),  v2 = v1 + u1 - u2 . Put this into the momentum
          equation and solve for v1:

                    +-              -+           +-        -+
                    |   m1  -  m2    |           |  2 m2    |
            v1  =   | -------------- | u1   +    | -------- | u2
                    |   m1  +  m2    |           | m1 + m2  |
                    +-              -+           +-        -+


  STEP 5  Similarly for v2 (just swap the labels 1 and 2):

                    +-              -+           +-        -+
                    |   m2  -  m1    |           |  2 m1    |
            v2  =   | -------------- | u2   +    | -------- | u1
                    |   m1  +  m2    |           | m1 + m2  |
                    +-              -+           +-        -+
```

```
  +----------------------------------------------------------------------+
  |  THESE TWO BOXED RESULTS ARE THE ANSWER TO THE 8-MARK QUESTION.      |
  |  Write BOTH, then discuss the three special cases below.             |
  +----------------------------------------------------------------------+
```

## THE THREE SPECIAL CASES (always asked with the derivation)

Take the very common situation where the target is at rest, u2 = 0.

### CASE 1 — Equal masses (m1 = m2)

```
  Put m1 = m2 = m and u2 = 0 :

              m - m                    0
      v1  =  --------- u1     =     -------  =  0
              m + m                   2m

              2 m                   2 m
      v2  =  --------- u1     =    ------- u1   =   u1
              m + m                  2 m

  +--------------------------------------------------------------+
  |  v1 = 0  and  v2 = u1                                        |
  |  THE TWO BODIES EXCHANGE VELOCITIES.                         |
  |  The first stops dead; the second moves off with the         |
  |  first one's original speed.                                 |
  |  Seen in: carrom, billiards, Newton's cradle,                |
  |           a neutron colliding with a proton.                 |
  +--------------------------------------------------------------+
```

### CASE 2 — A HEAVY body strikes a LIGHT one at rest (m1 >> m2)

```
  Neglect m2 beside m1 :

              m1 - m2            m1
      v1  =  ---------- u1  =  ------ u1  =  u1        (almost unchanged)
              m1 + m2            m1

              2 m1               2 m1
      v2  =  ---------- u1  =  -------- u1  =  2 u1
              m1 + m2             m1

  +--------------------------------------------------------------+
  |  v1 = u1        the heavy body ploughs on, barely slowed      |
  |  v2 = 2 u1      the light body flies off at TWICE the speed   |
  |                                                              |
  |  Example: a moving truck hitting a football.                 |
  +--------------------------------------------------------------+
```

### CASE 3 — A LIGHT body strikes a HEAVY one at rest (m1 << m2)

```
  Neglect m1 beside m2 :

              m1 - m2            - m2
      v1  =  ---------- u1  =  -------- u1  =  - u1
              m1 + m2             m2

              2 m1               2 m1
      v2  =  ---------- u1  =  -------- u1  =  0    (almost)
              m1 + m2             m2

  +--------------------------------------------------------------+
  |  v1 = - u1      the light body BOUNCES STRAIGHT BACK with     |
  |                 the same speed                               |
  |  v2 = 0         the heavy body barely moves                  |
  |                                                              |
  |  Example: a rubber ball bouncing off a wall or the floor.    |
  +--------------------------------------------------------------+
```

Summary picture:

```
  EQUAL MASSES            HEAVY hits LIGHT          LIGHT hits HEAVY

  ->o    o                ->[]   o                  ->o      []
   m1   m2                  M    m                    m       M

     o  ->o                 ->[]  ->->o             o<-       []
    stops  moves            keeps  flies off        bounces   barely
           off              going  at 2u            back      moves
```

## PERFECTLY INELASTIC COLLISION

The bodies stick together and move as ONE.

```
  BEFORE                                AFTER

   u1 ->       u2 ->                     v ->
  ( m1 )      ( m2 )                   ( m1 + m2 )
  ---------------------->              ---------------------->

  Momentum conservation:

        m1 u1  +  m2 u2   =   ( m1 + m2 ) v

                    m1 u1  +  m2 u2
        v   =   -----------------------
                     m1  +  m2
```

If the second body was at rest (u2 = 0), the usual exam case:

```
                m1 u1
        v  =  ----------
              m1  +  m2
```

### Loss of kinetic energy

```
  Loss  =  KE(before)  -  KE(after)

        =  (1/2) m1 u1^2  +  (1/2) m2 u2^2  -  (1/2)(m1 + m2) v^2

  Doing the algebra with the value of v gives the standard result:

              +-              -+
              |    m1  m2      |
  LOSS  =     | -------------- |  ( u1  -  u2 )^2
              |   2( m1 + m2 ) |
              +-              -+

  With u2 = 0 :

              +-              -+
              |    m1  m2      |
  LOSS  =     | -------------- |  u1^2
              |   2( m1 + m2 ) |
              +-              -+
```

```
  The loss is ALWAYS positive (a square times positive masses),
  so kinetic energy is always LOST, never gained.
  It becomes heat, sound and permanent deformation.

  THE LOSS IS MAXIMUM in a perfectly inelastic collision.
```

## TWO-DIMENSIONAL COLLISIONS (brief)

When the bodies do not move along one line, momentum is conserved
**separately in each direction**.

```
                                        v1
                                       /
                                     /
                                   / theta1
    ->  u1                        /
   ( m1 ) --------------------- ( m2 ) ---------------------
                                  \  at rest
                                    \ theta2
                                      \
                                        \
                                          v2

  ALONG X (the original direction):

        m1 u1  =  m1 v1 cos theta1  +  m2 v2 cos theta2

  ALONG Y (perpendicular; the total was zero before):

           0   =  m1 v1 sin theta1  -  m2 v2 sin theta2

  If the collision is also ELASTIC, add a third equation:

        (1/2) m1 u1^2 = (1/2) m1 v1^2  +  (1/2) m2 v2^2
```

```
  USEFUL RESULT:  when a body makes an ELASTIC collision with an
  identical body at rest, and the collision is not head-on, the two
  bodies move off at right angles to each other,
  that is  theta1 + theta2 = 90 degrees.
```

> **TRAP:** In a two-dimensional problem you cannot just add the speeds. You
> must resolve into x and y components and conserve momentum in each direction
> separately.

> **TRAP:** Momentum is a VECTOR. In a head-on collision, a velocity to the
> LEFT must be given a MINUS sign. Forgetting the sign is the most common
> mistake in the whole chapter.

## WORKED EXAMPLE 13

*A body of mass 2 kg moving at 6 m/s collides head-on with a stationary body of
mass 4 kg. If the collision is perfectly inelastic, find (i) the common velocity
(ii) the loss of kinetic energy.*

```
  STEP 1  List the data.
            m1 = 2 kg ,  u1 = 6 m/s
            m2 = 4 kg ,  u2 = 0
            They stick together, so both move with common velocity v.

  STEP 2  Conserve momentum.
            m1 u1 + m2 u2 = (m1 + m2) v
            (2 x 6) + (4 x 0) = (2 + 4) v
            12 = 6 v

  STEP 3       12
            v = ----  =  2 m/s
                 6

  STEP 4  Kinetic energy BEFORE.
            Ki = (1/2)(2)(6)^2 + 0
               = 1 x 36
               = 36 J

  STEP 5  Kinetic energy AFTER.
            Kf = (1/2)(6)(2)^2
               = 3 x 4
               = 12 J

  STEP 6  Loss = 36 - 12 = 24 J

  ANSWER:  common velocity 2 m/s ,  loss of KE = 24 J.

  CHECK with the formula:

            m1 m2                   2 x 4
        --------------- u1^2  =  ----------- x 36  =  (8/12) x 36 = 24 J
         2 (m1 + m2)              2 x 6

        Same answer. Good.
```

## WORKED EXAMPLE 14

*A ball is dropped from a height of 5 m and rebounds to 1.8 m. Find the
coefficient of restitution.*

```
  STEP 1  For a ball bouncing on the floor,

                        h1
            e  =  sqrt( ---- )
                         h

  STEP 2  Substitute h = 5 m and h1 = 1.8 m.

                        1.8
            e  =  sqrt( ----- )   =  sqrt( 0.36 )
                         5

  STEP 3   e  =  0.6

  ANSWER:  e = 0.6 . Since it lies between 0 and 1, the collision is
           partly inelastic.
```

---

# TOPIC 13 — Mass-energy equivalence, E = m c^2 (outline)

Einstein showed in 1905 that **mass itself is a form of energy**.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |              E   =   m  c^2                                          |
  |                                                                      |
  |   E = energy (joule)                                                 |
  |   m = mass (kg)                                                      |
  |   c = speed of light in vacuum = 3 x 10^8 m/s                        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Because c^2 is an enormous number (9 x 10^16), a tiny mass carries a huge
energy.

```
  1 gram of matter, completely converted:

      E  =  m c^2
         =  0.001  x  ( 3 x 10^8 )^2
         =  0.001  x  9 x 10^16
         =  9 x 10^13  J

  That is enough to run a small town for weeks.
```

Where it matters:

```
  NUCLEAR FISSION   - a heavy nucleus splits; the products have slightly
                      LESS total mass. The missing mass (the "mass defect")
                      appears as energy. This runs nuclear power stations.

  NUCLEAR FUSION    - light nuclei join; again some mass disappears as
                      energy. This is how the SUN shines.

  PAIR PRODUCTION / ANNIHILATION - an electron and a positron meet and
                      vanish, becoming pure energy as gamma rays.
```

```
  +----------------------------------------------------------------------+
  |  THE MODERN LAW OF CONSERVATION OF ENERGY                            |
  |                                                                      |
  |  Energy can neither be created nor destroyed. It can only be         |
  |  converted from one form to another, INCLUDING conversion between    |
  |  mass and energy. The total energy of the universe is constant.      |
  +----------------------------------------------------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  +----+-----------------------------------------------------------------+
  |    |  CHECK                                                          |
  +----+-----------------------------------------------------------------+
  | 1  |  In every W = F s cos theta, did I use the angle between        |
  |    |  FORCE and DISPLACEMENT (not the slope angle)?                  |
  +----+-----------------------------------------------------------------+
  | 2  |  Did I put the MINUS sign on work done by friction, air         |
  |    |  resistance and braking forces?                                 |
  +----+-----------------------------------------------------------------+
  | 3  |  Did I convert grams to kilograms and centimetres to metres     |
  |    |  BEFORE substituting?                                           |
  +----+-----------------------------------------------------------------+
  | 4  |  In K = (1/2) m v^2 , did I actually SQUARE the v?              |
  +----+-----------------------------------------------------------------+
  | 5  |  Is my work-energy theorem written  Kf - Ki , final minus       |
  |    |  initial?                                                       |
  +----+-----------------------------------------------------------------+
  | 6  |  Did I include ALL the forces when finding the NET work?        |
  +----+-----------------------------------------------------------------+
  | 7  |  For the spring, is x measured from the NATURAL LENGTH,         |
  |    |  and did I square it?                                           |
  +----+-----------------------------------------------------------------+
  | 8  |  Before using KE + PE = constant, did I check that there is     |
  |    |  no friction or air resistance in the question?                 |
  +----+-----------------------------------------------------------------+
  | 9  |  In collisions, did I give leftward velocities a MINUS sign?    |
  +----+-----------------------------------------------------------------+
  | 10 |  Did I remember that momentum is conserved in ALL collisions    |
  |    |  but kinetic energy ONLY in elastic ones?                       |
  +----+-----------------------------------------------------------------+
  | 11 |  Did I write the UNIT after every final answer                  |
  |    |  (J, W, N, m/s, kg m/s)?                                        |
  +----+-----------------------------------------------------------------+
  | 12 |  Did I draw the diagram? Diagrams carry marks in Section B      |
  |    |  and Section C, especially the free-fall and vertical-circle    |
  |    |  figures.                                                       |
  +----+-----------------------------------------------------------------+
```

```
  +----------------------------------------------------------------------+
  |  LAST WORD                                                           |
  |                                                                      |
  |  If a problem gives you FORCE and DISTANCE and asks for SPEED,       |
  |  or gives you HEIGHTS and asks for SPEED,                            |
  |  do NOT reach for the equations of motion.                           |
  |                                                                      |
  |  Use  W(net) = Kf - Ki   or   KE + PE = constant.                    |
  |  It is shorter, safer, and it earns the same marks.                  |
  +----------------------------------------------------------------------+
```
