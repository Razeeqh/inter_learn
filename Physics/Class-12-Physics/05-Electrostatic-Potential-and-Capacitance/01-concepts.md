# Electrostatic Potential and Capacitance — Concepts Explained Simply

Start here. Read slowly. Every idea in this chapter is built on ONE picture:
**a hill**. If you understand the hill, you understand the chapter.

You need only two things from the previous chapter:

```
                   1     q1 q2                        1     q
  COULOMB   F  =  ------ -------          FIELD  E = ------ ---
                  4pi e0   r^2                       4pi e0 r^2

  k = 1 / (4 pi e0) = 9 x 10^9 N m^2 C^-2      e0 = 8.85 x 10^-12 F m^-1
```

---

# TOPIC 1 — Work, energy, and why "potential" exists

## The hill analogy (learn this first)

```
  GRAVITY WORLD                        ELECTRIC WORLD
  --------------------------------     ---------------------------------
  The Earth makes a gravity field      A charge Q makes an electric field
  A point high up has HEIGHT h         A point has POTENTIAL V
  Carry a mass m up there              Carry a charge q up there
  Stored energy   U = m g h            Stored energy    U = q V
  Balls roll DOWN by themselves        + charges move to LOWER V
                                       - charges move to HIGHER V
  Steeper hill -> bigger force         Steeper V -> bigger field E
  Along a flat contour, no work        Along an equipotential, no work
```

So **potential is "electrical height"**. It belongs to the POINT, not to the
charge you bring there. An empty point in space still has a potential, just as
the top of a hill still has a height when nobody is standing on it.

## Why we are allowed to define it

The electrostatic force is a **conservative** force: the work done in moving a
charge from A to B does not depend on the path taken, only on where you start
and where you finish. Round a closed loop the work is zero.

```
       B                B                B
       o                o                o
      /|              _/               ..'
     / |             /                .'          All three paths need
    /  |            /               .'            EXACTLY the same work.
   o---+           o---------      o----
   A               A                A
```

Because of that we can attach one single number V to each point.

> **TRAP:** Potential V and potential energy U are NOT the same thing.
> V belongs to the point (unit: volt). U belongs to the charge sitting at that
> point (unit: joule). U = qV. Losing this distinction loses marks every year.

---

# TOPIC 2 — Electric potential and potential difference

## Definition

```
  +----------------------------------------------------------------+
  |  ELECTRIC POTENTIAL at a point                                 |
  |                                                                |
  |  = the WORK DONE by an external agent in bringing a UNIT       |
  |    POSITIVE charge from INFINITY to that point, slowly         |
  |    (without acceleration).                                     |
  |                                                                |
  |                       W                                        |
  |                  V = ---                                       |
  |                       q                                        |
  |                                                                |
  |  SI unit:   volt (V)  =  joule / coulomb  =  J C^-1            |
  |  It is a SCALAR.                                               |
  |  Dimensions: [ M L^2 T^-3 A^-1 ]                               |
  +----------------------------------------------------------------+
```

**One volt** is the potential of a point at which 1 joule of work is needed to
bring 1 coulomb of charge from infinity.

Infinity is chosen as the zero of potential, exactly as sea level is chosen as
the zero of height.

## Potential difference

```
  +----------------------------------------------------------------+
  |  POTENTIAL DIFFERENCE between A and B                          |
  |                                                                |
  |  = the work done in carrying a unit positive charge from       |
  |    B to A.                                                     |
  |                                                                |
  |                            W(B -> A)                           |
  |            V(A) - V(B) = -------------                         |
  |                                q                               |
  |                                                                |
  |  Work done on a charge q :   W  =  q ( V(A) - V(B) )           |
  +----------------------------------------------------------------+
```

Only DIFFERENCES of potential can ever be measured. The absolute value depends
on where you decided to put the zero.

## WORKED EXAMPLE 1

*80 J of work is done in carrying a charge of 4 C from point B to point A.
Find the potential difference V(A) - V(B).*

```
                  W          80 J
  V(A) - V(B) =  ---   =   --------   =   20 V
                  q          4 C

  Point A is 20 volts "higher up the hill" than point B.
```

## WORKED EXAMPLE 2

*How much work is needed to move a charge of 5 micro-coulomb through a
potential difference of 200 V?*

```
  W  =  q x V  =  ( 5 x 10^-6 C ) x ( 200 V )

     =  1000 x 10^-6  J   =   1 x 10^-3  J   =   1 mJ
```

> **TRAP:** "Slowly, without acceleration" is part of the definition. If the
> charge is allowed to speed up, some of the work goes into kinetic energy and
> the answer is no longer the potential.

---

# TOPIC 3 — Potential due to a single point charge (DERIVATION)

This derivation is worth 4 marks on its own and is part of several 8-mark
questions. Learn the picture first.

```
                              <---- F = k Q q0 / x^2
   Q                     q0
   o------------------->  o  ------> dx ------>          to INFINITY
   |                      |
   |<-------- x --------->|
   |<-------- r --------------------------->| P
```

## The steps

```
  STEP 1   Let a charge +Q sit at the origin. Take a test charge +q0 at a
           distance x from it.

  STEP 2   The force on the test charge is

                        1     Q q0
                F  =  ------ -------
                      4pi e0   x^2

  STEP 3   To push it a further distance dx TOWARDS Q, the external agent must
           push against this force, so the small work done is

                dW  =  - F dx        (the minus sign is because x DECREASES
                                      as we move inwards)

  STEP 4   Total work in bringing q0 from infinity up to the point P at
           distance r:

                       r                    r
                W  =  Int ( - F dx )  =  - Int   k Q q0 / x^2  dx
                     inf                  inf

                                    +-        -+ r
                W  =  - k Q q0  x   |  - 1 / x |
                                    +-        -+ inf

                              +- 1       1  -+           k Q q0
                W  =  k Q q0  | ---  -  ---- |    =    ----------
                              +-  r      inf -+             r

  STEP 5   By definition  V = W / q0 , so

           +---------------------------------------------+
           |                                             |
           |                 1        Q            Q     |
           |         V  =  ------  x ---   =   k  ---    |
           |               4 pi e0    r            r     |
           |                                             |
           +---------------------------------------------+
```

## What the formula tells you

```
  +---------------------------+------------------------------------+
  |  Charge Q is POSITIVE     |  V is POSITIVE (a hill)            |
  |  Charge Q is NEGATIVE     |  V is NEGATIVE (a valley)          |
  |  V varies as              |  1 / r                             |
  |  E varies as              |  1 / r^2       <-- different!       |
  |  At r = infinity          |  V = 0                             |
  +---------------------------+------------------------------------+
```

```
   V                                     E
   |                                     |
   |\                                    |\
   | \                                   | \
   |  \____   V ~ 1/r                    |  \____   E ~ 1/r^2
   |       ----____                      |      \___
   +-----------------  r                 +----------------  r
                                          (falls off faster)
```

## WORKED EXAMPLE 3

*Find the potential at a point 30 cm from a charge of 4 x 10^-9 C.*

```
        k Q        ( 9 x 10^9 ) x ( 4 x 10^-9 )         36
  V  =  -----  =  ------------------------------  =   ------   =  120 V
          r                   0.30                     0.30
```

## WORKED EXAMPLE 4

*At what distance from a charge of 2 micro-coulomb is the potential 100 V?*

```
        k Q       ( 9 x 10^9 ) x ( 2 x 10^-6 )       18 x 10^3
  r  =  -----  =  ----------------------------  =   -----------  =  180 m
          V                   100                       100
```

> **TRAP:** Always put r in METRES. "30 cm" is 0.30 m, not 30.

---

# TOPIC 4 — Potential due to a system of charges

Potential is a **SCALAR**. There is no direction, no components, no
parallelogram law. You simply **add the numbers, keeping their signs**.

```
  +----------------------------------------------------------------+
  |                                                                |
  |          1     +-  q1     q2     q3        -+                  |
  |   V  =  ------ |  ----  + ----  + ----  + ...|                 |
  |         4pi e0 +-  r1     r2     r3        -+                  |
  |                                                                |
  |   r1, r2, r3  are the distances from each charge to the POINT  |
  +----------------------------------------------------------------+
```

```
        q1  o                          o  q2
             \                        /
              \  r1              r2  /
               \                    /
                \                  /
                 \                /
                   o------------o
                        P              V(P) = k q1/r1 + k q2/r2
```

## WORKED EXAMPLE 5

*Two charges +5 x 10^-8 C and -3 x 10^-8 C are 16 cm apart. Find the potential
at the midpoint of the line joining them.*

```
  The midpoint is 8 cm = 0.08 m from each charge.

  V  =  k q1 / r  +  k q2 / r

     =  ( 9 x 10^9 / 0.08 ) x ( 5 x 10^-8  -  3 x 10^-8 )

     =  ( 1.125 x 10^11 ) x ( 2 x 10^-8 )

     =  2250 V
```

## WORKED EXAMPLE 6 (a favourite)

*Two equal and opposite charges +q and -q are placed some distance apart.
What is the potential at the midpoint? What is the field there?*

```
  POTENTIAL:  V = k(+q)/r  +  k(-q)/r  =  0        (scalars cancel)

  FIELD:      the two fields both point from +q towards -q,
              so they ADD UP. E is NOT zero.
```

> **TRAP:** V = 0 does NOT mean E = 0, and E = 0 does NOT mean V = 0.
> Inside a charged hollow conductor E = 0 but V has a big non-zero value.
> At the midpoint of a dipole V = 0 but E is large. Examiners love this.

---

# TOPIC 5 — Potential due to an electric DIPOLE

A **dipole** is two equal and opposite charges +q and -q separated by a small
distance 2a. Its **dipole moment** is

```
  p  =  q x (2a)          direction: from  -q  TOWARDS  +q
                          unit: coulomb metre (C m)
```

## The general point

```
                                    o  P
                                   /|
                                  / |
                             r1  /  |
                                /   |  r
                               /    |
                              /     |
              -q       O     / theta|
              o--------+---------------->  axis
              |<- a ->|<- a ->|
                            \
                             \  r2
                              \
                               o (to the same P)
```

Take a point P at a distance r from the centre O, at an angle theta to the
dipole axis. For a **short dipole** (r much greater than a):

```
  +----------------------------------------------------------------+
  |                                                                |
  |             1      p cos theta                                 |
  |     V  =  ------- ---------------                              |
  |           4 pi e0       r^2                                    |
  |                                                                |
  |  Note:  V varies as  1 / r^2   for a dipole                    |
  |         (for a single point charge it was  1 / r )             |
  +----------------------------------------------------------------+
```

## Where it comes from (short version for the board)

```
                 1  +-  q       q  -+          q   +-  r2 - r1 -+
        V   =  ------|  ---  -  --- |   =   ------ | ---------- |
               4pi e0+-  r1      r2-+       4pi e0 +-   r1 r2   -+

  For a SHORT dipole:     r2 - r1  =  2a cos theta
                          r1 r2    =  r^2  (very nearly)

                  q ( 2a cos theta )         p cos theta
        V   =   ----------------------  =  ----------------
                    4 pi e0 r^2             4 pi e0 r^2
```

## The three special positions

```
  +--------------------+---------------+--------------------------------+
  |  POSITION          |  theta        |  POTENTIAL V                   |
  +--------------------+---------------+--------------------------------+
  |  AXIAL, near +q    |    0 deg      |  + p / (4 pi e0 r^2)  = + kp/r^2|
  |  AXIAL, near -q    |  180 deg      |  - p / (4 pi e0 r^2)            |
  |  EQUATORIAL        |   90 deg      |          ZERO                  |
  +--------------------+---------------+--------------------------------+
```

```
                           EQUATORIAL LINE
                                 |
                          V = 0  |  V = 0
                                 |
        V negative     -q        |        +q      V positive
      <-----------------o--------+--------o------------------->
            AXIAL                                  AXIAL
```

**Every point on the equatorial line has V = 0**, because it is equally far
from the +q and the -q, so the two contributions cancel exactly.

## WORKED EXAMPLE 7

*An electric dipole of moment 4 x 10^-9 C m is placed in air. Find the
potential at a point 0.6 m from its centre, in a direction making 60 degrees
with the axis.*

```
        k p cos theta      ( 9 x 10^9 ) x ( 4 x 10^-9 ) x cos 60
  V  =  ---------------  = -------------------------------------
             r^2                        ( 0.6 )^2

        36 x 0.5          18
     = -----------   =  -------   =   50 V
          0.36            0.36
```

> **TRAP:** The dipole potential falls off as 1/r^2 and the dipole FIELD falls
> off as 1/r^3. For a point charge those are 1/r and 1/r^2. Mixing them up is
> the commonest MCQ mistake.

---

# TOPIC 6 — EQUIPOTENTIAL SURFACES

## Definition

```
  +----------------------------------------------------------------+
  |  An EQUIPOTENTIAL SURFACE is a surface on which the electric    |
  |  potential has the SAME value at every point.                   |
  +----------------------------------------------------------------+
```

It is the electrical version of a **contour line on a map**. Walking along a
contour line, you never go up or down, so gravity does no work on you.

## Picture 1 — a single POINT CHARGE

Equipotentials are **concentric spheres** (circles in a flat drawing).

```
                . . . . . . . . . .
             .                       .
           .        - - - - - -        .
          .      .               .      .
         .     .     _ _ _ _ _    .      .
        .     .    .           .   .      .
        .     .   .     +q      .  .      .        <---- dotted = equipotential
    <---+-----+---+------o------+--+------+--->    <---- arrows  = field lines
        .     .   .             .  .      .
        .     .    . _ _ _ _ _ .   .      .
         .     .               .        .
           .      . - - - - - .       .
             .                      .
                . . . . . . . . .

    V = kq/r , so a bigger r means a SMALLER V.
    The circles get FURTHER APART as you move out, because E is weaker there.
```

## Picture 2 — a UNIFORM field (between parallel plates)

Equipotentials are **flat parallel planes perpendicular to E**.

```
     +++++++++++++++++++++++++++++    plate at high V

     - - - - - - - - - - - - - - -    V = 30 V   (equipotential plane)
          |     |     |     |
          v     v     v     v         E points from high V to low V
     - - - - - - - - - - - - - - -    V = 20 V
          |     |     |     |
          v     v     v     v
     - - - - - - - - - - - - - - -    V = 10 V

     ---------------------------      plate at low V

     Equally spaced, because E is the same everywhere.
```

## Picture 3 — a DIPOLE

```
                        equatorial plane
                            V = 0
                              |
            .-'''-.           |           .-'''-.
          ,'       `.         |         ,'       `.
         /   .---.   \        |        /   .---.   \
        |   /     \   |       |       |   /     \   |
        |  |  -q   |  |       |       |  |  +q   |  |
        |   \     /   |       |       |   \     /   |
         \   `---'   /        |        \   `---'   /
          `.       ,'         |         `.       ,'
            `-...-'           |           `-...-'
                              |
          V NEGATIVE          |          V POSITIVE

     The equipotentials are closed curves round each charge.
     The whole equatorial PLANE is one equipotential with V = 0.
```

## The properties (a guaranteed 4-mark list)

```
  1.  V is the same at every point on the surface.

  2.  NO WORK is done in moving a charge from one point to another
      point ON the same equipotential surface.
            W = q ( V(A) - V(B) ) = q x 0 = 0

  3.  The electric field is always PERPENDICULAR to the surface.

  4.  Two equipotential surfaces can NEVER intersect.

  5.  Where the surfaces are CLOSE together, E is STRONG.
      Where they are far apart, E is weak.        ( E = -dV/dr )

  6.  The surface of any charged CONDUCTOR is an equipotential surface,
      and so is its whole interior.
```

## WHY are they perpendicular to the field lines? (asked directly)

```
  Suppose E had a component ALONG the surface.

  Then moving a test charge a distance dl along the surface would need
  work         dW = q E(along) dl  ,  which is NOT zero.

  But all points on the surface have the SAME potential, so
               dW = q ( V - V ) = 0.

  The two statements contradict each other.
  Therefore E can have NO component along the surface.
  Therefore E must be entirely PERPENDICULAR to the surface.
```

## WHY can two equipotential surfaces never cross?

```
  If they crossed, the point of intersection would lie on BOTH surfaces
  and would therefore have TWO different potentials at the same time.
  Impossible. So they never intersect.
```

## WORKED EXAMPLE 8

*A charge of 6 micro-coulomb is moved along an equipotential surface of value
50 V through a distance of 2 m. Find the work done.*

```
  Same surface  ->  no change in potential  ->  W = q x 0 = ZERO joule.

  The distance and the value 50 V are both irrelevant. This is a trick
  question and it is asked very often.
```

---

# TOPIC 7 — The relation between E and V

Field and potential are two views of the same thing.

```
  +----------------------------------------------------------------+
  |                                                                |
  |                  - dV                                          |
  |           E  =  ------            and           dV = - E dr    |
  |                   dr                                           |
  |                                                                |
  |  dV / dr is called the POTENTIAL GRADIENT.                     |
  |                                                                |
  |  So another unit of E is  volt / metre  (V m^-1),              |
  |  which is exactly the same as newton / coulomb (N C^-1).       |
  +----------------------------------------------------------------+
```

## What the minus sign means

```
  E points in the direction in which V DECREASES most rapidly.

     high V  ------------------------------->  low V
                        E
     (a ball rolls DOWNHILL — a positive charge does too)
```

## For a uniform field between plates

```
                     V
             E  =  -----          V = E d
                     d

  This is the working formula for every parallel-plate numerical.
```

## WORKED EXAMPLE 9

*Two parallel plates 5 mm apart are connected to a 100 V supply. Find the
field between them.*

```
        V         100 V            100
  E  =  ---  =  -----------  =  ----------   =  2 x 10^4  V m^-1
        d        5 x 10^-3       0.005
```

## WORKED EXAMPLE 10

*The potential in a region varies as V = 5x + 3 volt. Find the electric field.*

```
        - dV        d
  E  =  ------ = - ---- ( 5x + 3 )   =   - 5  V m^-1
          dx        dx

  Magnitude 5 V m^-1, directed along the NEGATIVE x-axis.
```

> **TRAP:** Never write E = V / r for a point charge. That would give kq/r^2 by
> luck for the magnitude, but E = -dV/dr is the correct general statement, and
> for anything else V/r is simply wrong.

---

# TOPIC 8 — Potential ENERGY of a system of charges

## Two charges

To assemble a system, bring the charges in one at a time from infinity and add
up the work needed.

```
  Bring q1 first  ->  no field yet  ->  no work.

  Bring q2 to a distance r12 from q1  ->  work = q2 x V(due to q1)

  +----------------------------------------------------------------+
  |                                                                |
  |                   1        q1 q2                               |
  |          U   =  -------  ---------                             |
  |                 4 pi e0     r12                                |
  |                                                                |
  +----------------------------------------------------------------+

  U is POSITIVE if both charges have the same sign  (they repel;
        you had to PUSH them together, so energy is stored).

  U is NEGATIVE if the charges are unlike (they attract;
        they pulled themselves together and released energy).
```

## Three charges

Take the charges **in pairs**. Three charges make exactly **three pairs**.

```
                q1
                 o
                / \
          r12  /   \  r13
              /     \
             o-------o
            q2  r23   q3


  +----------------------------------------------------------------+
  |            1      +-  q1 q2      q2 q3      q3 q1  -+          |
  |    U  =  -------  |  --------  + -------- + --------|          |
  |          4 pi e0  +-   r12         r23        r31  -+          |
  +----------------------------------------------------------------+

  n charges  ->  n(n-1)/2 pairs.     4 charges -> 6 terms.
```

## WORKED EXAMPLE 11

*Three charges of +1 micro-C each sit at the corners of an equilateral triangle
of side 10 cm. Find the potential energy of the system.*

```
  All three pairs are identical, so

           3 k q^2       3 x ( 9 x 10^9 ) x ( 1 x 10^-6 )^2
  U   =   ---------  =  ------------------------------------
              a                        0.10

           3 x 9 x 10^9 x 10^-12          27 x 10^-3
      =   -----------------------   =   -------------  =  0.27 J
                    0.10                     0.10
```

## WORKED EXAMPLE 12

*Charges +2 micro-C and -3 micro-C are 30 cm apart. Find the potential energy.*

```
         k q1 q2      ( 9 x 10^9 )( 2 x 10^-6 )( -3 x 10^-6 )
  U  =  ---------  =  ---------------------------------------
            r                        0.30

         - 54 x 10^-3
      = --------------   =   - 0.18 J
             0.30

  Negative -> the system is BOUND. You must SUPPLY 0.18 J to pull
  the charges apart to infinity.
```

> **TRAP:** In the three-charge formula there are THREE terms, not six. Each
> pair is counted ONCE. Writing q1q2 and q2q1 separately doubles the answer.

---

# TOPIC 9 — Potential energy of a DIPOLE in a uniform external field

## The picture

```
              E ---->   E ---->   E ---->   E ---->

                              +q
                              o
                             /|
                            / |            force qE on +q  --->
                       2a  /  |
                          /   | theta
                         /    |
                        o-----+---------------->  direction of E
                       -q                        force qE on -q  <---

     Two equal opposite forces = a COUPLE = a TORQUE, no net force.
```

```
  TORQUE     tau  =  p E sin theta          (vector: tau = p x E)

  WORK to turn the dipole from theta1 to theta2:

             W  =  p E ( cos theta1  -  cos theta2 )

  POTENTIAL ENERGY, measuring from theta = 90 degrees:

  +----------------------------------------------------------------+
  |                                                                |
  |            U  =  -  p E cos theta                              |
  |                                                                |
  +----------------------------------------------------------------+
```

## The three positions to remember

```
  +-----------+-----------------+-------------+---------+---------------+
  |  theta    |  ORIENTATION    |  TORQUE     |    U    |  STATE        |
  +-----------+-----------------+-------------+---------+---------------+
  |   0 deg   |  p ALONG E      |     0       |  - p E  |  STABLE       |
  |  90 deg   |  p across E     |  p E (max)  |    0    |  --           |
  | 180 deg   |  p AGAINST E    |     0       |  + p E  |  UNSTABLE     |
  +-----------+-----------------+-------------+---------+---------------+

  Minimum energy = most stable.  A dipole always tries to line UP with E.
```

## WORKED EXAMPLE 13

*A dipole of moment 2 x 10^-6 C m is placed in a uniform field of
5 x 10^5 N C^-1. Find (a) the maximum torque (b) the work needed to turn it
from theta = 0 to theta = 180 degrees.*

```
  (a)  tau(max)  =  p E sin 90  =  ( 2 x 10^-6 )( 5 x 10^5 )( 1 )

                 =  1 N m

  (b)  W  =  p E ( cos 0 - cos 180 )  =  p E ( 1 - (-1) )  =  2 p E

          =  2 x 1  =  2 J
```

---

# TOPIC 10 — CONDUCTORS in electrostatics

A conductor is full of **free electrons**. If any field appeared inside, those
electrons would immediately move and rearrange themselves until the field
cancelled out. That single fact gives all the properties.

```
  +----------------------------------------------------------------+
  |                                                                |
  |  1.  The electric field INSIDE a conductor is ZERO.            |
  |                                                                |
  |  2.  All the excess CHARGE lies on the OUTER SURFACE.          |
  |                                                                |
  |  3.  Just OUTSIDE the surface, E is PERPENDICULAR to the       |
  |      surface, with magnitude   E = sigma / e0 .                |
  |                                                                |
  |  4.  The whole conductor — surface AND interior — is at ONE    |
  |      potential. It is an equipotential VOLUME.                 |
  |                                                                |
  |  5.  Charge density (and therefore E) is LARGEST at SHARP      |
  |      POINTS. This is why lightning conductors are pointed.     |
  |                                                                |
  +----------------------------------------------------------------+
```

## The picture

```
            +      +      +      +      +
         +   ____________________________   +      <- all charge on the surface
        +   /                            \   +
       +   |    E = 0 everywhere in here  |   +
       +   |    V = constant in here      |   +
        +   \____________________________/   +
         +      +      +      +      +      +
            |      |      |      |      |
            v      v      v      v      v
          field lines leave at 90 degrees to the surface
```

## ELECTROSTATIC SHIELDING (asked as a 2-mark or 4-mark question)

```
  Because E = 0 inside a conductor, the CAVITY inside a hollow conductor is
  completely protected from any outside electric field, no matter how strong.

              external field  E0  ---->
                  ____________________
                 /                    \
        ---->   |    ____________      |   ---->
        ---->   |   |            |     |   ---->
        ---->   |   |  E = 0     |     |   ---->
        ---->   |   |  SAFE      |     |   ---->
        ---->   |   |____________|     |   ---->
                 \____________________/

  This effect is called ELECTROSTATIC SHIELDING.
  The metal box is called a FARADAY CAGE.

  USES:  1. A car or an aeroplane protects you during lightning.
         2. Sensitive electronic instruments are kept in metal cases.
         3. Coaxial cables have a metal braid for the same reason.
```

## WORKED EXAMPLE 14

*A hollow metal sphere of radius 10 cm carries a charge of 5 micro-C. Find the
field and the potential (a) at the centre (b) on the surface.*

```
  (a)  CENTRE:   E  =  0            (inside a conductor)

                        k Q       ( 9 x 10^9 )( 5 x 10^-6 )
                 V  =  -----  =  ---------------------------  =  4.5 x 10^5 V
                         R                  0.10

       V inside = V on the surface. It is NOT zero.

  (b)  SURFACE:  same V = 4.5 x 10^5 V

                        k Q       ( 9 x 10^9 )( 5 x 10^-6 )
                 E  =  -----  =  ---------------------------  =  4.5 x 10^6 N/C
                        R^2              ( 0.10 )^2
```

> **TRAP:** Inside a charged hollow conductor, E = 0 but V is NOT zero. V stays
> constant at the surface value all the way to the centre. This appears in the
> board paper and in EAPCET nearly every year.

---

# TOPIC 11 — DIELECTRICS and polarisation

A **dielectric** is an insulator — glass, mica, paper, oil, wax. It has no free
electrons, so charges cannot flow through it. But its molecules can still
**stretch and turn** a little in a field.

## Two kinds of molecule

```
  +---------------------------+--------------------------------------+
  |  NON-POLAR                |  POLAR                               |
  +---------------------------+--------------------------------------+
  |  Centres of positive and  |  Centres of positive and negative    |
  |  negative charge COINCIDE |  charge are SEPARATED even with      |
  |  when there is no field.  |  no field applied.                   |
  |                           |                                      |
  |  Permanent dipole moment  |  Permanent dipole moment is          |
  |  is ZERO.                 |  NON-ZERO.                           |
  |                           |                                      |
  |  Examples: H2, O2, N2,    |  Examples: H2O (water), HCl, NH3     |
  |  CO2, CH4, benzene        |                                      |
  |                           |                                      |
  |  In a field they get      |  In a field they simply TURN and     |
  |  STRETCHED into dipoles.  |  line up with the field.             |
  +---------------------------+--------------------------------------+
```

## Polarisation

```
  NO FIELD                             FIELD APPLIED  E0 ---->

   (o) (o) (o) (o)                     -(+) -(+) -(+) -(+)
   (o) (o) (o) (o)                     -(+) -(+) -(+) -(+)
   (o) (o) (o) (o)                     -(+) -(+) -(+) -(+)
   randomly arranged                    all lined up
   no net charge anywhere              INSIDE, the + of one molecule sits
                                       next to the - of the next, so they
                                       cancel. Only the two FACES are left
                                       with charge.

           |                                      |
          -|  + - + - + - + - + - + - + - +      |+
          -|  + - + - + - + - + - + - + - +      |+
          -|  + - + - + - + - + - + - + - +      |+
           |                                      |
      bound NEGATIVE                        bound POSITIVE
      charge on this face                   charge on this face
```

This appearance of bound charge on the two faces is called **polarisation**.
The bound charges set up their own field **Ep** pointing OPPOSITE to E0.

```
  +----------------------------------------------------------------+
  |                                                                |
  |    NET FIELD INSIDE THE DIELECTRIC                             |
  |                                                                |
  |                                    E0                          |
  |        E  =  E0  -  Ep     =    --------                       |
  |                                  kappa                         |
  |                                                                |
  |    kappa (also written K or e_r) = DIELECTRIC CONSTANT          |
  |                                  = relative permittivity       |
  |                                                                |
  |            kappa  =  e / e0   ,  no units, always > 1          |
  |                                                                |
  +----------------------------------------------------------------+
```

```
  +-------------------+---------+       +---------------------------------+
  |  MATERIAL         |  kappa  |       |  DIELECTRIC STRENGTH =          |
  +-------------------+---------+       |  the maximum field a material   |
  |  Vacuum           |   1     |       |  can stand before it breaks     |
  |  Air              |   1.0006|       |  down and starts conducting.    |
  |  Paper            |   3.6   |       |                                 |
  |  Mica             |   6     |       |  For air, about 3 x 10^6 V/m.   |
  |  Water            |   80    |       |  Unit: V m^-1.                  |
  |  Metal (conductor)| infinity|       +---------------------------------+
  +-------------------+---------+
```

## WORKED EXAMPLE 15

*The field between two plates is 4 x 10^5 V/m in air. A slab of dielectric
constant 5 is slipped in. What is the field inside the slab?*

```
        E0        4 x 10^5
  E  =  -----  =  ---------   =   0.8 x 10^5   =   8 x 10^4  V m^-1
        kappa         5
```

> **TRAP:** kappa is a pure number. It never carries a unit. And it is never
> less than 1 — a dielectric always REDUCES the field, never increases it.

---

# TOPIC 12 — CAPACITOR and CAPACITANCE

A **capacitor** is two conductors separated by an insulator, used to store
charge and electrical energy.

```
  Give a conductor a charge Q and its potential rises to V.
  Experiment shows that       Q  is proportional to  V.

  +----------------------------------------------------------------+
  |                                                                |
  |                    Q  =  C V              so     C = Q / V     |
  |                                                                |
  |   C = CAPACITANCE = the charge needed per volt of potential.   |
  |                                                                |
  |   SI unit:   FARAD (F)  =  coulomb / volt  =  C V^-1           |
  |   Dimensions: [ M^-1 L^-2 T^4 A^2 ]                            |
  |   It is a SCALAR and always POSITIVE.                          |
  +----------------------------------------------------------------+
```

**One farad** is the capacitance of a conductor whose potential rises by 1 volt
when 1 coulomb of charge is given to it.

The farad is enormous, so practical units are

```
  1 microfarad  ( 1 uF )  =  10^-6  F
  1 nanofarad   ( 1 nF )  =  10^-9  F
  1 picofarad   ( 1 pF )  =  10^-12 F
```

## Factors on which C depends

```
  1.  The AREA of the plates          C increases with A
  2.  The DISTANCE between them       C decreases as d increases
  3.  The MEDIUM between them         C increases kappa times
  4.  The SHAPE and arrangement of the conductors

  C does NOT depend on the charge Q or on the potential V.
  Putting more charge on simply raises V in the same proportion.
```

## WORKED EXAMPLE 16

*A capacitor stores 60 micro-C at 12 V. Find its capacitance.*

```
        Q        60 x 10^-6
  C  =  ---  =  ------------  =  5 x 10^-6  F  =  5 uF
        V           12
```

---

# TOPIC 13 — The PARALLEL PLATE CAPACITOR  *** the 8-mark derivation ***

Learn this one derivation properly. It appears in Section C over and over.

## The set-up

```
                          area A
     +Q   ============================================   plate 1
          |     |     |     |     |     |     |     |
          |     |     |     |     |     |     |     |    E = sigma / e0
          v     v     v     v     v     v     v     v    uniform
                                                          gap = d
     -Q   ============================================   plate 2

     surface charge density   sigma  =  Q / A
```

## The derivation

```
  STEP 1   Two large parallel plates carry charges +Q and -Q, each of
           area A, separated by a small distance d, with vacuum (or air)
           between them.

                       Q
           sigma  =  -----
                       A

  STEP 2   Field due to ONE infinite charged sheet (from Gauss's law)

                       sigma
           E1  =  ------------
                     2 e0

  STEP 3   BETWEEN the plates the two fields point the SAME way and add:

                     sigma       sigma        sigma            Q
           E  =  ---------- + ---------- =  --------   =   --------
                    2 e0         2 e0          e0            e0 A

           OUTSIDE the plates they point in opposite directions
           and cancel, so E = 0 outside.

  STEP 4   The field is uniform, so the potential difference is

                                              Q d
           V  =  E x d      =>       V  =  ---------
                                             e0 A

  STEP 5   By definition C = Q / V , so

                        Q                 Q
           C   =   ---------   =   -----------------
                       V             Q d / ( e0 A )

           +---------------------------------------------+
           |                                             |
           |                     e0 A                    |
           |            C   =   -------                  |
           |                       d                     |
           |                                             |
           +---------------------------------------------+

  STEP 6   If the whole gap is filled with a dielectric of constant kappa,

                        kappa e0 A
           C   =   -----------------      =   kappa x C(vacuum)
                            d
```

**Conclusion in words:** the capacitance depends only on the **geometry**
(area A and separation d) and on the **medium** (kappa). It does NOT depend on
the charge or on the voltage.

## WORKED EXAMPLE 17

*A parallel plate capacitor has plates of area 100 cm^2 separated by 1 mm of
air. Find its capacitance. (e0 = 8.85 x 10^-12 F/m)*

```
  A = 100 cm^2 = 100 x 10^-4 m^2 = 1 x 10^-2 m^2
  d = 1 mm     = 1 x 10^-3 m

        e0 A       ( 8.85 x 10^-12 ) x ( 1 x 10^-2 )
  C  =  ------  =  ----------------------------------
          d                 1 x 10^-3

     =  8.85 x 10^-11  F   =   88.5  pF
```

## WORKED EXAMPLE 18

*The same capacitor is filled with mica (kappa = 6). Find the new C.*

```
  C'  =  kappa x C  =  6 x 88.5 pF  =  531 pF
```

> **TRAP:** Convert cm^2 to m^2 by dividing by 10^4, not by 100.
> 100 cm^2 = 0.01 m^2. Getting this wrong is the single commonest arithmetic
> error in the whole chapter.

---

# TOPIC 14 — Inserting a DIELECTRIC SLAB

## (a) Slab that PARTLY fills the gap

```
     +Q   ============================================
          |                                          |
          |            gap  d - t  (air)             |
          |                                          |
          ############################################   slab, thickness t,
          ############################################   constant kappa
          |                                          |
     -Q   ============================================
```

```
  In the air gaps the field is       E0  =  sigma / e0
  Inside the slab it is reduced to   E0 / kappa

  Total potential difference:

        V  =  E0 ( d - t )  +  ( E0 / kappa ) t

  Putting  E0 = Q / ( e0 A )  and using  C = Q / V :

  +----------------------------------------------------------------+
  |                                                                |
  |                        e0 A                                    |
  |          C   =   -----------------------                       |
  |                    ( d - t )  +  t / kappa                     |
  |                                                                |
  +----------------------------------------------------------------+

  CHECK IT:   t = 0        ->   C = e0 A / d          (no slab)
              t = d        ->   C = kappa e0 A / d    (slab fills the gap)
              kappa = inf  ->   C = e0 A / ( d - t )  (a metal slab)
```

A dielectric slab **always increases** the capacitance, wherever it is placed
in the gap.

## (b) The two exam situations — BATTERY ON or BATTERY OFF

This table is worth memorising line by line. It is asked directly.

```
  +--------------+------------------------------+------------------------------+
  |  QUANTITY    |  BATTERY STILL CONNECTED     |  BATTERY DISCONNECTED        |
  |              |  ( V stays FIXED )           |  ( Q stays FIXED )           |
  +--------------+------------------------------+------------------------------+
  |  C           |  increases  kappa times      |  increases  kappa times      |
  |  V           |  UNCHANGED                   |  falls to  V / kappa         |
  |  Q           |  rises to   kappa Q          |  UNCHANGED                   |
  |  E           |  UNCHANGED  ( E = V/d )      |  falls to  E / kappa         |
  |  U (energy)  |  rises to   kappa U          |  falls to  U / kappa         |
  +--------------+------------------------------+------------------------------+

  THE ONE-LINE RULE:
      Battery ON   ->  V is the constant. Use  Q = CV  and  U = (1/2) C V^2.
      Battery OFF  ->  Q is the constant. Use  V = Q/C  and  U = Q^2 / (2C).
```

## WORKED EXAMPLE 19

*A 4 uF capacitor is charged to 100 V and then DISCONNECTED from the battery.
A slab of kappa = 2 is inserted. Find the new C, V, Q and U.*

```
  Before:  C = 4 uF , V = 100 V

           Q = C V = ( 4 x 10^-6 )( 100 ) = 4 x 10^-4 C

           U = (1/2) C V^2 = (1/2)( 4 x 10^-6 )( 100 )^2 = 2 x 10^-2 J

  Battery DISCONNECTED  ->  Q stays at 4 x 10^-4 C.

  After:   C' = kappa C = 8 uF

           V' = V / kappa = 100 / 2 = 50 V

           U' = U / kappa = ( 2 x 10^-2 ) / 2 = 1 x 10^-2 J

  Energy HALVED. The missing energy was used to pull the slab in —
  the slab is sucked into the gap by the field.
```

## WORKED EXAMPLE 20

*Repeat with the battery still CONNECTED.*

```
  V stays at 100 V.

  C' = 8 uF
  Q' = C' V = ( 8 x 10^-6 )( 100 ) = 8 x 10^-4 C     (DOUBLED)
  U' = (1/2) C' V^2 = (1/2)( 8 x 10^-6 )( 10^4 ) = 4 x 10^-2 J   (DOUBLED)

  The extra energy came from the battery.
```

> **TRAP:** Read the question twice. "Battery is removed" versus "battery
> remains connected" changes every single answer. Underline that phrase before
> you start.

---

# TOPIC 15 — Capacitors in SERIES and in PARALLEL

## SERIES

```
       ---||-----------||-----------||---
          C1           C2           C3
      |<-V1->|     |<-V2->|     |<-V3->|

      |<---------------- V ------------------>|

   SAME CHARGE Q on every capacitor.
   The voltages ADD:   V = V1 + V2 + V3
```

**Why the charge is the same:** the inner plates are isolated. Whatever charge
-Q is induced on one, +Q must appear on the next. Charge is conserved.

```
  DERIVATION

        V   =  V1 + V2 + V3

        Q          Q       Q       Q
       ---   =    ----  + ----  + ----
        C          C1      C2      C3

  Cancel Q :

  +----------------------------------------------------------------+
  |                                                                |
  |          1        1       1       1                            |
  |        -----  =  ----  + ----  + ----                          |
  |          C        C1      C2      C3                           |
  |                                                                |
  +----------------------------------------------------------------+

  The equivalent C is SMALLER than the smallest capacitor in the chain.

  For just TWO in series:          C1 C2
                            C  =  ---------
                                  C1 + C2
```

## PARALLEL

```
                +------||------+
                |      C1      |
                |              |
         -------+------||------+-------
                |      C2      |
                |              |
                +------||------+
                       C3

         |<----------- V ------------>|

   SAME VOLTAGE V across every capacitor.
   The charges ADD:   Q = Q1 + Q2 + Q3
```

```
  DERIVATION

        Q   =  Q1 + Q2 + Q3

      C V   =  C1 V  +  C2 V  +  C3 V

  Cancel V :

  +----------------------------------------------------------------+
  |                                                                |
  |             C  =  C1  +  C2  +  C3                             |
  |                                                                |
  +----------------------------------------------------------------+

  The equivalent C is BIGGER than the biggest one.
```

## Side-by-side summary

```
  +---------------------+----------------------+----------------------+
  |                     |  SERIES              |  PARALLEL            |
  +---------------------+----------------------+----------------------+
  |  Same for all       |  CHARGE  Q           |  VOLTAGE  V          |
  |  Quantity that adds |  VOLTAGE  V          |  CHARGE  Q           |
  |  Formula            |  1/C = sum of 1/Ci   |  C = sum of Ci       |
  |  Result             |  C gets SMALLER      |  C gets BIGGER       |
  |  Used to            |  stand a HIGHER      |  store MORE charge   |
  |                     |  voltage             |                      |
  +---------------------+----------------------+----------------------+
```

## WORKED EXAMPLE 21

*Three capacitors 2 uF, 3 uF and 6 uF. Find the equivalent capacitance
(a) in series (b) in parallel.*

```
  (a) SERIES

       1        1       1       1        3 + 2 + 1        6
      ---  =   ---  +  ---  +  ---  =  -----------  =   ----   =  1
       C        2       3       6           6             6

      C  =  1 uF          (smaller than the smallest, 2 uF — correct)

  (b) PARALLEL

      C  =  2 + 3 + 6  =  11 uF     (bigger than the biggest — correct)
```

## WORKED EXAMPLE 22

*Two capacitors 3 uF and 6 uF are joined in series across 90 V. Find the charge
on each and the voltage across each.*

```
        C1 C2        3 x 6        18
  C  =  -------  =  --------  =  ----  =  2 uF
       C1 + C2       3 + 6         9

  Q  =  C V  =  ( 2 x 10^-6 )( 90 )  =  1.8 x 10^-4 C

  Series -> the SAME 1.8 x 10^-4 C sits on both.

        Q       1.8 x 10^-4
  V1 = ---- =  -------------  =  60 V
        C1       3 x 10^-6

        Q       1.8 x 10^-4
  V2 = ---- =  -------------  =  30 V
        C2       6 x 10^-6

  Check:  60 + 30 = 90 V.  Correct.

  Notice: the SMALLER capacitor takes the BIGGER share of the voltage.
```

> **TRAP:** In series the equivalent capacitance is NOT C1 + C2. And after
> computing 1/C you must remember to TURN IT UPSIDE DOWN to get C. Half the
> lost marks in this topic come from forgetting that last step.

---

# TOPIC 16 — ENERGY stored in a capacitor

## The derivation

Charging a capacitor is like filling a bucket. The first drop of charge is easy
to add, but as the capacitor fills up the potential rises and each further drop
is harder to push in.

```
  STEP 1   Let the capacitor already hold a charge q. Its potential is

                     q
             V   =  ---
                     C

  STEP 2   The small work done in adding a further charge dq is

                                       q
             dW  =  V dq          =   --- dq
                                       C

  STEP 3   Total work in charging from 0 up to Q:

                     Q                        +-      -+ Q
                    Int   q                   |  q^2   |
             W  =   ---- --- dq     =   (1/C) | ------ |
                     0    C                   |   2    | 0
                                              +-      -+

                     Q^2
             W  =  -------
                    2 C

  STEP 4   This work is stored as electrostatic potential energy:

           +--------------------------------------------------------+
           |                                                        |
           |           Q^2         1              1                 |
           |    U  =  ------  =   --- Q V   =    --- C V^2          |
           |           2 C         2              2                 |
           |                                                        |
           +--------------------------------------------------------+
```

## Which of the three forms to use

```
  +-------------------------+-------------------------------------------+
  |  U = Q^2 / (2C)         |  when the CHARGE is fixed                 |
  |                         |  (battery disconnected)                   |
  +-------------------------+-------------------------------------------+
  |  U = (1/2) C V^2        |  when the VOLTAGE is fixed                |
  |                         |  (battery still connected)                |
  +-------------------------+-------------------------------------------+
  |  U = (1/2) Q V          |  when you happen to know both Q and V     |
  +-------------------------+-------------------------------------------+
```

## Why the factor of one half?

```
  The battery pushes a charge Q through a fixed voltage V, so it spends  Q V.
  The capacitor only stores  (1/2) Q V .
  The other half is lost as HEAT in the connecting wires and the battery.
  Efficiency of charging a capacitor is therefore only 50 percent.
```

## ENERGY DENSITY

The energy is really stored in the **electric field** in the gap, not on the
plates.

```
                    U                (1/2) C V^2
  Energy density  = -------------  = ---------------      with C = e0 A/d
                    volume A d            A d

                    (1/2) ( e0 A / d ) ( E d )^2         1
                  = -----------------------------   =   --- e0 E^2
                              A d                        2

  +----------------------------------------------------------------+
  |                                                                |
  |            u  =  (1/2) e0 E^2         unit:  J m^-3            |
  |                                                                |
  |  With a dielectric:     u  =  (1/2) kappa e0 E^2               |
  |                                                                |
  +----------------------------------------------------------------+
```

## WORKED EXAMPLE 23

*A 10 uF capacitor is charged to 200 V. Find the energy stored and the charge.*

```
  U  =  (1/2) C V^2  =  (1/2)( 10 x 10^-6 )( 200 )^2

     =  (1/2)( 10 x 10^-6 )( 4 x 10^4 )  =  0.2 J

  Q  =  C V  =  ( 10 x 10^-6 )( 200 )  =  2 x 10^-3 C  =  2 mC
```

## WORKED EXAMPLE 24

*A capacitor of 5 uF carries a charge of 1 x 10^-3 C. Find the stored energy.*

```
         Q^2        ( 1 x 10^-3 )^2         1 x 10^-6
  U  =  ------  =  ------------------  =  -------------  =  0.1 J
         2 C        2 x 5 x 10^-6           1 x 10^-5
```

---

# TOPIC 17 — Loss of energy when two capacitors are connected

Charge two capacitors to different voltages and then wire them together. Charge
flows from the higher voltage one to the lower until they share a **common
potential**. Some energy always disappears as heat and as radiation from the
wires.

```
   BEFORE                                AFTER

   C1 at V1        C2 at V2              both at the same V

   ---||---        ---||---              ---||-------||---
                                            C1        C2
```

```
  CHARGE IS CONSERVED:

                 total charge      C1 V1  +  C2 V2
        V     =  --------------  = -----------------
       common    total C               C1  +  C2


  ENERGY LOST:

  +----------------------------------------------------------------+
  |                                                                |
  |                  C1 C2 ( V1 - V2 )^2                           |
  |    dU     =    -------------------------                       |
  |     loss           2 ( C1 + C2 )                               |
  |                                                                |
  +----------------------------------------------------------------+

  This is ALWAYS positive (there is a square in it), so energy is
  ALWAYS lost — never gained. It is zero only when V1 = V2.
```

## WORKED EXAMPLE 25

*A 2 uF capacitor charged to 100 V is connected to an uncharged 3 uF capacitor.
Find the common potential and the energy lost.*

```
  Uncharged means V2 = 0.

              C1 V1 + C2 V2        ( 2 )( 100 ) + 0        200
  V(common) = ---------------  =  ------------------  =  -------  =  40 V
                C1 + C2                 2 + 3               5

              C1 C2 ( V1 - V2 )^2       ( 2 x 10^-6 )( 3 x 10^-6 )( 100 )^2
  dU(loss) = ---------------------- =  ------------------------------------
                 2 ( C1 + C2 )                2 ( 5 x 10^-6 )

              ( 6 x 10^-12 )( 10^4 )        6 x 10^-8
           = ------------------------  =  ------------  =  6 x 10^-3 J
                    1 x 10^-5               1 x 10^-5

  Energy lost = 6 mJ, given out as heat in the wires.
```

---

# TOPIC 18 — The Van de Graaff generator (outline only)

A machine that builds up a very large potential — a few million volts — used to
accelerate charged particles for nuclear experiments.

```
                     .-'''''''-.
                   ,'           `.        large hollow METAL SPHERE
                  /   + + + + +   \       (charge collects on the OUTSIDE)
                 |  +           +  |
                 |                 |
                  \       ^       /
                   `.     |     ,'
                     `----|----'
                          |  <---- comb of sharp points (collector)
                     ||   |   ||
                     ||   |   ||
                     ||  BELT ||   insulating belt, moving up
                     ||   |   ||
                     ||   |   ||
                          |
                       ^  |  ^
                       |  |  |  <---- comb of sharp points (spray)
                    ----------------
                       PULLEY, driven by a motor
                          |
                       10 kV source
```

## The two ideas it works on

```
  1.  ACTION OF SHARP POINTS (corona discharge)
      Charge density is huge at a sharp point, so the air there breaks down
      and charge leaks off. This sprays charge onto the belt at the bottom
      and collects it at the top.

  2.  CHARGE ON A CONDUCTOR ALWAYS GOES TO THE OUTER SURFACE.
      So the inside of the sphere stays uncharged and more charge can
      always be delivered, however high the sphere's potential already is.
```

```
  WORKING (four lines for the exam)
    - A motor drives an insulating belt over two pulleys.
    - The lower comb sprays positive charge onto the belt.
    - The belt carries it up inside the metal sphere.
    - The upper comb removes it; the charge moves to the OUTER surface
      of the sphere, so the sphere's potential keeps rising.

  LIMIT:  the potential stops rising when the surrounding air breaks down.
          Enclosing the machine in high-pressure nitrogen raises the limit.

  USE:    to accelerate protons, deuterons and ions to high energies for
          nuclear disintegration experiments.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  UNITS AND NUMBERS
  [ ]  Every distance converted to METRES  (cm -> /100 , mm -> /1000)
  [ ]  Every area converted to m^2         (cm^2 -> /10^4)
  [ ]  Every capacitance in FARAD          (uF -> x 10^-6 , pF -> x 10^-12)
  [ ]  Every charge in COULOMB             (uC -> x 10^-6 , nC -> x 10^-9)
  [ ]  k = 9 x 10^9  and  e0 = 8.85 x 10^-12 written down where used

  SIGNS
  [ ]  Negative charges carried into the formula WITH their minus sign
  [ ]  U for unlike charges came out NEGATIVE
  [ ]  E = -dV/dr : the minus sign written, not dropped

  POTENTIAL
  [ ]  V added as SCALARS (no components, no parallelogram law)
  [ ]  Distances in V = kq/r measured from each charge TO THE POINT
  [ ]  Dipole: V goes as 1/r^2 , and V = 0 on the equatorial line

  ENERGY
  [ ]  Three charges -> exactly THREE pair terms
  [ ]  Each pair counted only ONCE
  [ ]  Correct energy formula chosen for battery ON / battery OFF

  CAPACITORS
  [ ]  Series: 1/C computed AND then inverted to get C
  [ ]  Series answer smaller than the smallest capacitor
  [ ]  Parallel answer bigger than the biggest capacitor
  [ ]  "Battery connected" or "battery removed" underlined in the question

  DIAGRAMS AND WORDS
  [ ]  Diagram drawn and LABELLED for every derivation
  [ ]  Every derivation ends with the final boxed formula
  [ ]  Definitions written in a full sentence, not just a formula
  [ ]  SI unit written after every numerical answer
```
