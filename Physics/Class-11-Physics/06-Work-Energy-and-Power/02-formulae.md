# Work, Energy and Power — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

---

# 1. WORK

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   CONSTANT FORCE        W  =  F s cos theta   =   F . s              |
  |                                                                      |
  |   COMPONENT FORM        W  =  Fx sx + Fy sy + Fz sz                  |
  |                                                                      |
  |                                s2                                    |
  |   VARIABLE FORCE        W = INTEGRAL  F ds  =  AREA under the        |
  |                               s1               F - s graph           |
  |                                                                      |
  |   SPRING (0 to x)       W  =  (1/2) k x^2                            |
  |                                                                      |
  |   AGAINST GRAVITY       W  =  m g h                                  |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The sign of the work

```
  +---------------------+--------------+-------------+--------------------+
  |  theta              |  cos theta   |  WORK       |  EXAMPLE           |
  +---------------------+--------------+-------------+--------------------+
  |  0 degrees          |  +1          |  MAXIMUM +  |  falling body      |
  |  between 0 and 90   |  positive    |  POSITIVE   |  pulling a box     |
  |  90 degrees         |  0           |  ZERO       |  coolie on level   |
  |                     |              |             |  ground            |
  |  between 90 and 180 |  negative    |  NEGATIVE   |  braking           |
  |  180 degrees        |  -1          |  MAXIMUM -  |  friction sliding  |
  +---------------------+--------------+-------------+--------------------+
```

## Work — units and dimensions

```
  +----------------------+-----------------------------------------------+
  |  SI unit             |  joule (J)                                    |
  |  CGS unit            |  erg                                          |
  |  1 joule             |  10^7 erg                                     |
  |  1 electron volt     |  1.6 x 10^-19 J                               |
  |  1 calorie           |  4.186 J                                      |
  |  1 kilowatt-hour     |  3.6 x 10^6 J   (an ENERGY unit)              |
  |  Dimensions          |  [ M L^2 T^-2 ]                               |
  |  Nature              |  SCALAR (but may be + or -)                   |
  +----------------------+-----------------------------------------------+
```

---

# 2. THE SCALAR (DOT) PRODUCT

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |    A . B   =   A B cos theta            (result is a SCALAR)         |
  |                                                                      |
  |    A . B   =   Ax Bx  +  Ay By  +  Az Bz                             |
  |                                                                      |
  |                          A . B                                       |
  |    cos theta   =     -------------                                   |
  |                        |A|  |B|                                      |
  |                                                                      |
  |    i . i = j . j = k . k = 1                                         |
  |    i . j = j . k = k . i = 0                                         |
  |                                                                      |
  |    A . B = 0   ->   the vectors are PERPENDICULAR                    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 3. KINETIC ENERGY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                     1                                                |
  |             K  =   --- m v^2                                         |
  |                     2                                                |
  |                                                                      |
  |                     p^2                                              |
  |             K  =  -------            p  =  sqrt( 2 m K )             |
  |                    2 m                                               |
  |                                                                      |
  |             p  =  m v                                                |
  |                                                                      |
  |             K is NEVER negative.                                     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Quick scaling results

```
  +--------------------------------------+-------------------------------+
  |  IF ...                              |  THEN ...                     |
  +--------------------------------------+-------------------------------+
  |  speed is doubled                    |  K becomes 4 times            |
  |  speed is tripled                    |  K becomes 9 times            |
  |  momentum is doubled                 |  K becomes 4 times            |
  |  K is increased by 300 percent       |  momentum is doubled          |
  |  two bodies have the SAME p          |  the LIGHTER has more K       |
  |  two bodies have the SAME K          |  the HEAVIER has more p       |
  +--------------------------------------+-------------------------------+
```

---

# 4. THE WORK-ENERGY THEOREM  *** learn word for word ***

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |            W(net)   =   Kf   -   Ki                                  |
  |                                                                      |
  |                         1              1                             |
  |            W(net)  =   --- m v^2  -   --- m u^2                      |
  |                         2              2                             |
  |                                                                      |
  |  W(net) is the work of ALL forces added together,                    |
  |  including friction (which contributes a NEGATIVE amount).           |
  |                                                                      |
  |  Valid for CONSTANT and for VARIABLE forces.                         |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Standard applications

```
  +----------------------------------+-----------------------------------+
  |  SITUATION                       |  RESULT                           |
  +----------------------------------+-----------------------------------+
  |  Body brought to rest by a       |            m u^2                  |
  |  resisting force F over          |     F  =  --------                |
  |  distance s                      |             2 s                   |
  |                                  |                                   |
  |  Bullet stopped by a block       |            m u^2                  |
  |  after penetration s             |     F  =  --------                |
  |                                  |             2 s                   |
  |                                  |                                   |
  |  Stopping distance of a vehicle  |            u^2         u^2        |
  |  braking with retardation a      |     s  =  ------  =  --------     |
  |                                  |            2 a       2 mu g       |
  |                                  |     (mu = coefficient of friction)|
  +----------------------------------+-----------------------------------+
```

---

# 5. POTENTIAL ENERGY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   GRAVITATIONAL (near Earth)      U   =   m g h                      |
  |                                                                      |
  |                                            1                         |
  |   SPRING (elastic)                U   =   --- k x^2                  |
  |                                            2                         |
  |                                                                      |
  |   SPRING FORCE (Hooke's law)      F   =   - k x                      |
  |                                                                      |
  |                                            dU                        |
  |   GENERAL LINK                    F   =  - -----                     |
  |                                            dx                        |
  |                                                                      |
  |   x is measured from the NATURAL LENGTH of the spring.               |
  |   h is measured from a chosen zero level.                            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Spring constant k

```
  +----------------------+-----------------------------------------------+
  |  Symbol              |  k  (force constant / spring constant)        |
  |  SI unit             |  N / m                                        |
  |  Dimensions          |  [ M T^-2 ]                                   |
  |  Large k             |  STIFF spring, hard to stretch                |
  |  Springs in SERIES   |  1/k = 1/k1 + 1/k2   (k gets SMALLER)         |
  |  Springs in PARALLEL |  k = k1 + k2         (k gets LARGER)          |
  |  Cut a spring in 2   |  each half has k' = 2 k                       |
  +----------------------+-----------------------------------------------+
```

---

# 6. CONSERVATION OF MECHANICAL ENERGY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |            K  +  U   =   CONSTANT                                    |
  |                                                                      |
  |            Ki  +  Ui   =   Kf  +  Uf                                 |
  |                                                                      |
  |   VALID ONLY when the forces doing work are CONSERVATIVE             |
  |   (no friction, no air resistance).                                  |
  |                                                                      |
  |   WITH friction present:                                             |
  |                                                                      |
  |            Ki + Ui  =  Kf + Uf  +  (work done against friction)      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Free-fall from a height h (the standard proof table)

```
  +--------------+---------------+----------------+------------------+
  |  POINT       |  KE           |  PE            |  TOTAL           |
  +--------------+---------------+----------------+------------------+
  |  Top         |      0        |     m g h      |     m g h        |
  |  After fall x|    m g x      |   m g (h - x)  |     m g h        |
  |  Ground      |    m g h      |       0        |     m g h        |
  +--------------+---------------+----------------+------------------+

  Speed after falling a height h :      v  =  sqrt( 2 g h )
  Speed at height y (dropped from h):   v  =  sqrt( 2 g (h - y) )
  KE = PE at exactly HALF the height,   y  =  h / 2
```

---

# 7. CONSERVATIVE vs NON-CONSERVATIVE FORCES

```
  +--------------------------+------------------------+--------------------+
  |  PROPERTY                |  CONSERVATIVE          |  NON-CONSERVATIVE  |
  +--------------------------+------------------------+--------------------+
  |  Work depends on path    |  NO                    |  YES               |
  |  Work in a closed loop   |  ZERO                  |  NOT zero          |
  |  PE can be defined       |  YES                   |  NO                |
  |  Mechanical energy       |  CONSERVED             |  NOT conserved     |
  |  Examples                |  gravity, spring,      |  friction, air     |
  |                          |  electrostatic         |  drag, viscosity   |
  +--------------------------+------------------------+--------------------+
```

---

# 8. THE VERTICAL CIRCLE  (radius L, or r)

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   MINIMUM SPEED AT THE TOP          v(top)     =  sqrt( g L )        |
  |                                                                      |
  |   MINIMUM SPEED AT THE BOTTOM       v(bottom)  =  sqrt( 5 g L )      |
  |                                                                      |
  |   MINIMUM SPEED AT THE SIDE         v(side)    =  sqrt( 3 g L )      |
  |                                                                      |
  |   TENSION DIFFERENCE                T(bot) - T(top)  =  6 m g        |
  |                                                                      |
  |   TENSION AT THE BOTTOM (min case)  T(bot)  =  6 m g                 |
  |                                                                      |
  |   TENSION AT THE TOP (min case)     T(top)  =  0                     |
  |                                                                      |
  |   Height of the top above bottom = 2 L                               |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## General tension at any point

```
  AT THE TOP:                       AT THE BOTTOM:

          m v^2                             m v^2
  T  =  --------  -  m g            T  =  --------  +  m g
            L                                 L
```

---

# 9. POWER

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                          W                                           |
  |    AVERAGE POWER    =   ---                                          |
  |                          t                                           |
  |                                                                      |
  |                          dW                                          |
  |    INSTANTANEOUS    =   -----   =   F . v   =   F v cos theta        |
  |    POWER                 dt                                          |
  |                                                                      |
  |    If F and v are in the same direction:    P  =  F v                |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Units of power

```
  +----------------------+-----------------------------------------------+
  |  SI unit             |  watt (W) = 1 J / s                           |
  |  1 kilowatt          |  1000 W                                       |
  |  1 megawatt          |  10^6 W                                       |
  |  1 horsepower        |  746 W                                        |
  |  Dimensions          |  [ M L^2 T^-3 ]                               |
  |  Nature              |  SCALAR                                       |
  |  1 kWh               |  an ENERGY unit = 3.6 x 10^6 J                |
  +----------------------+-----------------------------------------------+
```

## Standard power formulae

```
  +-------------------------------+--------------------------------------+
  |  SITUATION                    |  FORMULA                             |
  +-------------------------------+--------------------------------------+
  |  Lifting mass m through h     |          m g h                       |
  |  in time t                    |   P  =  --------                     |
  |                               |            t                         |
  |                               |                                      |
  |  A pump raising a liquid,     |   P  =  V rho g h / t                |
  |  volume V, density rho        |   (V rho = mass of liquid)           |
  |                               |                                      |
  |  Vehicle at constant speed v  |   P  =  F v                          |
  |  against resistance F         |                                      |
  |                               |                                      |
  |  Vehicle accelerating         |   P  =  ( F(resist) + m a ) v        |
  |                               |                                      |
  |  Machine of efficiency n      |   output power = n x input power     |
  |  (n as a fraction)            |                                      |
  |                               |                                      |
  |  Belt / conveyor / water jet  |   P  =  (dm/dt) v^2                  |
  |  of mass flow rate dm/dt      |                                      |
  |                               |                                      |
  |  Wind turbine of area A       |   P  =  (1/2) A rho v^3              |
  +-------------------------------+--------------------------------------+
```

---

# 10. COLLISIONS

## Always true

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   MOMENTUM IS CONSERVED IN EVERY COLLISION:                          |
  |                                                                      |
  |          m1 u1  +  m2 u2   =   m1 v1  +  m2 v2                       |
  |                                                                      |
  |   KINETIC ENERGY IS CONSERVED ONLY IF THE COLLISION IS ELASTIC:      |
  |                                                                      |
  |     (1/2) m1 u1^2 + (1/2) m2 u2^2 = (1/2) m1 v1^2 + (1/2) m2 v2^2    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Coefficient of restitution

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |          relative velocity of separation        v2  -  v1            |
  |   e  =  --------------------------------   =   -----------           |
  |          relative velocity of approach          u1  -  u2            |
  |                                                                      |
  |   e = 1        perfectly elastic                                     |
  |   0 < e < 1    partly inelastic                                      |
  |   e = 0        perfectly inelastic (bodies stick)                    |
  |                                                                      |
  |   e is DIMENSIONLESS and has NO UNITS.                               |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Ball bouncing on the floor

```
                        h1
  e   =   sqrt(  ----------  )         h  = drop height
                        h              h1 = rebound height

  After n bounces:      h(n)  =  h  e^(2 n)

  Speed after n bounces: v(n) =  e^n  x  sqrt( 2 g h )

                                     +-        -+
                              2h     |  1 + e   |
  Total time of all bounces =sqrt(----) |  ------- |
                               g     |  1 - e   |
                                     +-        -+

                                        +-         -+
                                        |  1 + e^2  |
  Total distance travelled  =   h    x   |  --------- |
                                        |  1 - e^2  |
                                        +-         -+
```

## ONE-DIMENSIONAL ELASTIC COLLISION — final velocities

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |            +-              -+           +-        -+                 |
  |            |   m1  -  m2    |           |  2 m2    |                 |
  |    v1  =   | -------------- | u1   +    | -------- | u2              |
  |            |   m1  +  m2    |           | m1 + m2  |                 |
  |            +-              -+           +-        -+                 |
  |                                                                      |
  |            +-              -+           +-        -+                 |
  |            |   m2  -  m1    |           |  2 m1    |                 |
  |    v2  =   | -------------- | u2   +    | -------- | u1              |
  |            |   m1  +  m2    |           | m1 + m2  |                 |
  |            +-              -+           +-        -+                 |
  |                                                                      |
  |   ALSO TRUE IN ANY ELASTIC COLLISION:                                |
  |                                                                      |
  |            u1  -  u2   =   v2  -  v1                                 |
  |            (approach speed = separation speed)                       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The three special cases (target at rest, u2 = 0)

```
  +---------------------------+-------------------+----------------------+
  |  CASE                     |  v1               |  v2                  |
  +---------------------------+-------------------+----------------------+
  |  m1 = m2  (equal masses)  |  0                |  u1                  |
  |                           |  (they EXCHANGE velocities)              |
  +---------------------------+-------------------+----------------------+
  |  m1 >> m2                 |  u1               |  2 u1                |
  |  (heavy hits light)       |  (barely slowed)  |  (flies off at 2u)   |
  +---------------------------+-------------------+----------------------+
  |  m1 << m2                 |  - u1             |  0 (nearly)          |
  |  (light hits heavy)       |  (bounces back)   |                      |
  +---------------------------+-------------------+----------------------+
```

## Fraction of energy transferred (m1 hits m2 at rest, elastic)

```
                          4 m1 m2
  Fraction transferred = -------------
                         ( m1 + m2 )^2

  This is MAXIMUM (equal to 1, i.e. 100 percent) when m1 = m2.
  That is why a moderator in a nuclear reactor uses LIGHT nuclei
  (hydrogen in water) to slow down neutrons.
```

## PERFECTLY INELASTIC COLLISION

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                       m1 u1  +  m2 u2                                |
  |   COMMON VELOCITY  v = -------------------                           |
  |                          m1  +  m2                                   |
  |                                                                      |
  |                       +-               -+                            |
  |                       |    m1  m2       |                            |
  |   LOSS OF KE     =    | --------------- |  ( u1  -  u2 )^2           |
  |                       |   2( m1 + m2 )  |                            |
  |                       +-               -+                            |
  |                                                                      |
  |   The loss is ALWAYS positive and is the MAXIMUM possible loss.      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Special sub-case — a bullet embedding in a hanging block (ballistic pendulum):

```
                m1 u1                                       v^2
  Common v  = ----------          Rise of the block  h  =  ------
              m1  +  m2                                     2 g
```

## TWO-DIMENSIONAL COLLISION

```
  ALONG X :    m1 u1  =  m1 v1 cos theta1  +  m2 v2 cos theta2

  ALONG Y :       0   =  m1 v1 sin theta1  -  m2 v2 sin theta2

  For an ELASTIC collision between EQUAL masses, one at rest:

                theta1  +  theta2   =   90 degrees
```

---

# 11. MASS-ENERGY EQUIVALENCE

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |              E   =   m  c^2                c = 3 x 10^8 m/s          |
  |                                                                      |
  |   1 kg of matter  ->  9 x 10^16 J                                    |
  |   1 g  of matter  ->  9 x 10^13 J                                    |
  |                                                                      |
  |   1 atomic mass unit (u)  =  931 MeV                                 |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 12. MASTER "WHEN TO USE" TABLE

```
  +------------------------------+---------------------------------------+
  |  FORMULA                     |  WHEN TO USE IT                       |
  +------------------------------+---------------------------------------+
  |  W = F s cos theta           |  A constant force at an angle.        |
  |                              |                                       |
  |  W = area under F - s graph  |  A graph is given, or F changes       |
  |                              |  with position.                       |
  |                              |                                       |
  |  W = Fx sx + Fy sy + Fz sz   |  Force and displacement given in      |
  |                              |  i, j, k form.                        |
  |                              |                                       |
  |  K = (1/2) m v^2             |  Speed given, energy wanted.          |
  |                              |                                       |
  |  K = p^2 / 2m                |  Momentum given, energy wanted        |
  |                              |  (or comparing two bodies).           |
  |                              |                                       |
  |  W(net) = Kf - Ki            |  Force and distance given, SPEED      |
  |                              |  wanted; or speeds given, FORCE or    |
  |                              |  DISTANCE wanted. Friction present.   |
  |                              |                                       |
  |  U = m g h                   |  Anything raised or lowered.          |
  |                              |                                       |
  |  U = (1/2) k x^2             |  Spring stretched or compressed.      |
  |                              |                                       |
  |  F = - k x                   |  Force of a spring; finding k.        |
  |                              |                                       |
  |  Ki + Ui = Kf + Uf           |  SMOOTH track, free fall, pendulum,   |
  |                              |  roller-coaster, spring launcher.     |
  |                              |  NO friction mentioned.               |
  |                              |                                       |
  |  v = sqrt(2 g h)             |  Body dropped from rest through h.    |
  |                              |                                       |
  |  v(top) = sqrt(g L)          |  "Just completes the vertical circle" |
  |  v(bot) = sqrt(5 g L)        |  "Minimum speed at the lowest point"  |
  |                              |                                       |
  |  P = W / t                   |  Total work and total time given.     |
  |                              |                                       |
  |  P = F v                     |  Constant speed against a resistance; |
  |                              |  engine power questions.              |
  |                              |                                       |
  |  m1u1 + m2u2 = m1v1 + m2v2   |  ANY collision or explosion.          |
  |                              |                                       |
  |  e = (v2 - v1)/(u1 - u2)     |  Question mentions "restitution" or   |
  |                              |  gives rebound heights.               |
  |                              |                                       |
  |  v = (m1u1 + m2u2)/(m1 + m2) |  Bodies STICK together after impact.  |
  |                              |                                       |
  |  Loss = m1m2(u1-u2)^2 /      |  "Find the loss of kinetic energy" in |
  |         2(m1+m2)             |  a perfectly inelastic collision.     |
  |                              |                                       |
  |  E = m c^2                   |  Nuclear energy, mass defect.         |
  +------------------------------+---------------------------------------+
```

---

# 13. USEFUL CONSTANTS AND CONVERSIONS

```
  +----------------------------+-----------------------------------------+
  |  g                         |  9.8 m/s^2   (use 10 for quick work)    |
  |  1 hp                      |  746 W                                  |
  |  1 J                       |  10^7 erg                               |
  |  1 eV                      |  1.6 x 10^-19 J                         |
  |  1 calorie                 |  4.186 J                                |
  |  1 kWh                     |  3.6 x 10^6 J                           |
  |  1 litre of water          |  1 kg                                   |
  |  density of water          |  1000 kg / m^3                          |
  |  c                         |  3 x 10^8 m/s                           |
  |  1 km/h                    |  5/18 m/s   =  0.278 m/s                |
  |  1 m/s                     |  18/5 km/h  =  3.6 km/h                 |
  +----------------------------+-----------------------------------------+
```

---

# THE 10 FORMULAE TO WRITE ON YOUR PALM

```
  +----+-----------------------------------------------------------------+
  | 1  |   W  =  F s cos theta                                           |
  +----+-----------------------------------------------------------------+
  | 2  |   W  =  area under the F - s graph                              |
  +----+-----------------------------------------------------------------+
  | 3  |   K  =  (1/2) m v^2   =   p^2 / 2m                              |
  +----+-----------------------------------------------------------------+
  | 4  |   W(net)  =  Kf  -  Ki           <-- the theorem                |
  +----+-----------------------------------------------------------------+
  | 5  |   U  =  m g h        and       U = (1/2) k x^2                  |
  +----+-----------------------------------------------------------------+
  | 6  |   F  =  - k x                                                   |
  +----+-----------------------------------------------------------------+
  | 7  |   K + U  =  constant             <-- the 8-mark question        |
  +----+-----------------------------------------------------------------+
  | 8  |   P  =  W / t   =   F v          and    1 hp = 746 W            |
  +----+-----------------------------------------------------------------+
  | 9  |   m1 u1 + m2 u2  =  m1 v1 + m2 v2                               |
  +----+-----------------------------------------------------------------+
  | 10 |   v(top) = sqrt(g L)  ,  v(bottom) = sqrt(5 g L)                |
  +----+-----------------------------------------------------------------+
```

If you can write those ten lines in the margin the moment the paper is handed
to you, you have already secured about 10 marks from this chapter.
