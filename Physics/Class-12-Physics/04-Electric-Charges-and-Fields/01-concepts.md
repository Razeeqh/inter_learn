# Electric Charges and Fields — Concepts Explained Simply

Read this file slowly, with a pen. Every topic ends with a WORKED EXAMPLE.
Do the worked example yourself on paper BEFORE reading the solution.

---

# TOPIC 1 — What is electric charge?

Rub a plastic comb on dry hair and it picks up small bits of paper.
Something invisible got onto the comb. That something is **electric charge**.

Electric charge is a **property of matter**, exactly like mass. You cannot
hold "charge" in your hand any more than you can hold "mass" in your hand.
You can only hold an *object that has* charge.

```
  MASS                            CHARGE
  ----                            ------
  Only ONE kind (always +)        TWO kinds  (+ and -)
  Masses only ATTRACT             Like charges REPEL
                                  Unlike charges ATTRACT
  Cannot be destroyed             Cannot be created or destroyed
  Does not depend on speed        Does not depend on speed
```

## The two kinds

Benjamin Franklin named them:

```
  POSITIVE (+)   the charge on GLASS rubbed with SILK
  NEGATIVE (-)   the charge on EBONITE / plastic rubbed with FUR or WOOL
```

The names are just labels. Nature simply has two opposite kinds.

```
        + +                     - -                     + -
       ( ) ( )                 ( ) ( )                 ( ) ( )
        \   /                   \   /                   \   /
      <--     -->             <--     -->             -->     <--
        REPEL                   REPEL                   ATTRACT
```

## SI unit

```
  Unit of charge  =  COULOMB  (C)

  1 coulomb is the charge that flows in 1 second when the current is
  1 ampere.        Q = I t
```

One coulomb is a **huge** amount of charge. Real laboratory charges are
microcoulombs (10^-6 C) or nanocoulombs (10^-9 C).

---

## The THREE properties of charge (guaranteed 2-mark question)

### Property 1 — QUANTISATION

Charge does not come in any amount you like. It comes in packets, like eggs
in a tray. The smallest packet is the charge on one electron.

```
  +--------------------------------------------------------------+
  |                                                              |
  |            Q  =  n e         n = 0, ±1, ±2, ±3, ...           |
  |                                                              |
  |            e  =  1.6 x 10^-19  C                             |
  |                                                              |
  |   Charge of electron  =  - 1.6 x 10^-19 C                    |
  |   Charge of proton    =  + 1.6 x 10^-19 C                    |
  |   Charge of neutron   =  ZERO                                |
  |                                                              |
  +--------------------------------------------------------------+
```

You can have 1e, 2e, 3e of charge. You can **never** have 1.5e.

> **TRAP:** n must be a WHOLE number. If a question gives you a charge and
> asks for the number of electrons, and n comes out as a fraction, you have
> made an arithmetic mistake.

> **TRAP:** Quarks carry ±(1/3)e and ±(2/3)e, but quarks are never found
> free, so for your syllabus **e is the smallest free charge**.

### Property 2 — ADDITIVITY

Charge is a **scalar**. To find the total charge of a body, just add the
charges *with their signs*. No vectors, no angles.

```
  Body has  +5 C,  -3 C,  +2 C,  -8 C

  Total  =  (+5) + (-3) + (+2) + (-8)  =  -4 C
```

> **TRAP:** Do NOT add charges like vectors. Charge has no direction.
> Force between charges is a vector. The charge itself is not.

### Property 3 — CONSERVATION

Charge can be **transferred** from one body to another, but the **total
charge of an isolated system never changes**.

```
  BEFORE rubbing:      glass   0        silk   0        TOTAL 0
  AFTER  rubbing:      glass  +q        silk  -q        TOTAL 0
```

The glass did not "make" positive charge. Electrons simply moved from the
glass to the silk. Whatever one loses, the other gains.

Even in nuclear reactions this holds:

```
  A neutron decays:      n   ->   p    +    e-    +   antineutrino
  Charge:                0   ->  (+e)  +  (-e)   +      0        = 0
```

---

## WORKED EXAMPLE 1

**A body has a charge of -4.8 x 10^-17 C. How many electrons are in
excess on it?**

```
  Q = n e

           Q            4.8 x 10^-17
  n   =   ---     =   ----------------
           e            1.6 x 10^-19

      =   3 x 10^2     =   300 electrons

  The charge is NEGATIVE, so the body has 300 EXCESS electrons.
```

**Second part: what is the mass gained by the body?**

```
  mass of one electron  =  9.1 x 10^-31 kg

  mass gained  =  300 x 9.1 x 10^-31  =  2.73 x 10^-28 kg
```

---

# TOPIC 2 — How do we charge a body? (three methods)

An atom normally has equal numbers of protons and electrons, so it is
neutral. Charging a body simply means **moving electrons** onto it or off it.

```
  Protons live in the nucleus and CANNOT move.
  Electrons are on the outside and CAN move.

  Body GAINS electrons  ->  becomes NEGATIVE
  Body LOSES electrons  ->  becomes POSITIVE
```

## Method 1 — CHARGING BY FRICTION (rubbing)

Rub two different insulators together. One material grips electrons more
strongly and steals them from the other.

```
   BEFORE                          AFTER

   glass  silk                    glass    silk
   [ 0 ]  [ 0 ]     ---rub--->    [ + ]    [ - ]

   Electrons move  glass  ---->  silk
```

Both bodies get **equal and opposite** charges. Works only for insulators.

## Method 2 — CHARGING BY CONDUCTION (contact)

Touch a charged conductor to a neutral conductor. Charge flows across the
contact until both are at the same potential.

```
   BEFORE                                AFTER

   [ + + + + ]      [        ]           [ + + ]      [ + + ]
    charged          neutral              shares       shares

   Both end up with the SAME SIGN as the original charge.
```

For two **identical** spheres with charges q1 and q2, after touching and
separating each carries:

```
                q1 + q2
      q'  =   -----------
                   2
```

## Method 3 — CHARGING BY INDUCTION (no touching!)

This is the one that is asked in exams. **The charged rod never touches
the sphere, and the sphere ends up with the OPPOSITE charge.**

```
  STEP 1  Bring a POSITIVE rod near a neutral metal sphere.
          Electrons in the sphere are attracted to the near side.

              + + + +          _________
              [ ROD ]         /  - - +  \
              + + + +        |  -     + |
                              \  - - +  /
                               ---------
              near side NEGATIVE, far side POSITIVE
              (total charge on the sphere is still ZERO)


  STEP 2  EARTH the sphere (connect the far side to the ground)
          while the rod is still there.
          The repelled positive... actually electrons flow UP from
          the earth to neutralise the far side.

              + + + +          _________
              [ ROD ]         /  - - -  \
              + + + +        |  -     - |
                              \  - - -  /
                               ----+----
                                   |
                                 -----   earth
                                  ---


  STEP 3  REMOVE THE EARTH CONNECTION FIRST (this order matters!)

  STEP 4  Now remove the rod. The extra electrons spread out.

                               _________
                              /  -   -  \
                             | -   -   - |
                              \  -   -  /
                               ---------
                        SPHERE IS NOW NEGATIVE
```

```
  +-------------------------------------------------------------+
  |  INDUCTION GIVES THE OPPOSITE CHARGE TO THE INDUCING BODY.  |
  |  CONDUCTION GIVES THE SAME CHARGE.                          |
  |  The rod LOSES NOTHING in induction.                        |
  +-------------------------------------------------------------+
```

> **TRAP:** In induction you must remove the **earthing first**, and the
> **rod last**. If you remove the rod first, the electrons run back to the
> earth and the sphere stays neutral. Examiners award a mark for that order.

---

## WORKED EXAMPLE 2

**Two identical metal spheres carry +6 microC and -2 microC. They are
touched together and separated. Find the charge on each.**

```
              q1 + q2        (+6) + (-2)         +4
      q'  =  ---------  =   -------------   =   ----   =  +2 microC
                 2                2               2

  EACH sphere now carries  +2 microC.

  Check conservation:   +2 + 2 = +4 microC = original total.  Correct.
```

---

# TOPIC 3 — Coulomb's law

This is the **most important law in the chapter**. Everything else is built
from it.

## Statement

> The force of attraction or repulsion between two **point charges at rest**
> is directly proportional to the **product of the magnitudes of the charges**
> and inversely proportional to the **square of the distance** between them.
> The force acts **along the line joining the two charges**.

```
  +====================================================================+
  |                                                                    |
  |            q1 q2                     1        q1 q2                |
  |   F  ~   --------     ->     F  =  -------- x -------              |
  |            r^2                     4 pi e0      r^2                |
  |                                                                    |
  |            1                                                       |
  |        --------  =  k  =  9 x 10^9   N m^2 C^-2                    |
  |         4 pi e0                                                    |
  |                                                                    |
  |        e0  =  8.854 x 10^-12   C^2 N^-1 m^-2                       |
  |            (permittivity of free space)                            |
  |                                                                    |
  +====================================================================+
```

## The picture

```
        q1                            q2
       (+)-------- r ----------------(+)
        |                             |
    <---+                             +--->
      F21                              F12

   LIKE charges: forces point AWAY from each other (repulsion)


        q1                            q2
       (+)-------- r ----------------(-)
        |                             |
        +--->                     <---+
       F21                            F12

   UNLIKE charges: forces point TOWARDS each other (attraction)
```

The two forces are **equal in magnitude and opposite in direction**
(Newton's third law), even if q1 is huge and q2 is tiny.

## Vector form (a 2 to 4-mark favourite)

```
  +--------------------------------------------------------------+
  |                                                              |
  |    ->            1        q1 q2      ^                       |
  |    F12   =    -------- x -------- x  r21                     |
  |                4 pi e0     r^2                               |
  |                                                              |
  |    ^                                                         |
  |    r21  =  unit vector pointing FROM charge 2 TOWARDS         |
  |            charge 1                                          |
  |                                                              |
  |    ->        ->                                              |
  |    F12  =  - F21          (Newton's third law)               |
  |                                                              |
  +--------------------------------------------------------------+
```

**Why the vector form is beautiful:** you do NOT decide attraction or
repulsion by hand. Put the charges in **with their signs**:

```
  Both charges same sign   ->  q1 q2 is POSITIVE  ->  F along +r  ->  REPULSION
  Opposite signs           ->  q1 q2 is NEGATIVE  ->  F along -r  ->  ATTRACTION
```

The algebra does the thinking for you.

## Effect of a medium — the dielectric constant

If the two charges sit inside a material (water, oil, glass, mica) instead
of vacuum, **the force gets weaker**.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                  1          q1 q2                                 |
  |     F_medium = --------- x --------                               |
  |                4 pi e         r^2                                 |
  |                                                                   |
  |     where     e   =   e0  x  K       (K = dielectric constant     |
  |                                       = relative permittivity)    |
  |                                                                   |
  |                    F_vacuum                                       |
  |     F_medium  =  ------------                                     |
  |                       K                                           |
  |                                                                   |
  |                   F_vacuum          e                             |
  |     So      K  = -----------  =  ------                           |
  |                   F_medium         e0                             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

```
  +---------------+-------------------+
  |  MEDIUM       |  K (approx)       |
  +---------------+-------------------+
  |  Vacuum       |  1  (exactly)     |
  |  Air          |  1.0006  (use 1)  |
  |  Paper        |  3.6              |
  |  Mica         |  6                |
  |  Water        |  80               |
  |  Metal        |  INFINITY         |
  +---------------+-------------------+
```

K is a **pure number** with no units. For a metal K is infinite, which is
just another way of saying the force inside a conductor becomes zero.

> **TRAP:** K is in the **denominator**. Putting charges in water makes the
> force 80 times SMALLER, not bigger.

## Comparison with the gravitational force

This is a standard 4-mark question. Learn the table.

```
  +-----------------------------+----------------------------------+
  |  COULOMB FORCE              |  GRAVITATIONAL FORCE             |
  +-----------------------------+----------------------------------+
  |  F = k q1 q2 / r^2          |  F = G m1 m2 / r^2               |
  |  Can ATTRACT or REPEL       |  Only ATTRACTS                   |
  |  Depends on the medium (K)  |  Does NOT depend on the medium   |
  |  Can be screened / shielded |  Cannot be screened              |
  |  k = 9 x 10^9               |  G = 6.67 x 10^-11               |
  |  VERY strong                |  VERY weak                       |
  +-----------------------------+----------------------------------+

  For two protons:     F_electric / F_gravitational  =  about 10^36

  For an electron and a proton:  about 10^39
```

**Both** obey the inverse-square law. **Both** act along the line joining
the bodies. **Both** are central forces and obey Newton's third law.

---

## WORKED EXAMPLE 3

**Two point charges of +3 microC and +6 microC are 30 cm apart in air.
Find the force between them. What is the force if they are placed in
water (K = 80)?**

```
  q1 = 3 x 10^-6 C      q2 = 6 x 10^-6 C      r = 30 cm = 0.30 m

           k q1 q2         9 x 10^9  x  3 x 10^-6  x  6 x 10^-6
  F   =   ----------  =  ----------------------------------------
             r^2                     (0.30)^2

           9 x 3 x 6 x 10^(9 - 6 - 6)          162 x 10^-3
      =   ----------------------------   =   ---------------
                    0.09                          0.09

      =   1.8   N        (REPULSIVE, both charges positive)


  In water:

             F           1.8
  F_water = ---   =   -------   =   0.0225  N   =  2.25 x 10^-2 N
             K           80
```

> **TRAP:** 30 cm is NOT 30. Convert to 0.30 m before squaring. This single
> mistake destroys more marks than anything else in the chapter.

---

# TOPIC 4 — The principle of superposition

Coulomb's law handles **two** charges. What if there are three, or five?

> **The force on any one charge due to a group of charges is the VECTOR SUM
> of the forces that each of the other charges would exert on it, acting
> alone. The presence of the other charges changes nothing.**

```
  +---------------------------------------------------------------+
  |    ->        ->     ->     ->            ->                   |
  |    F1   =    F12  + F13  + F14  + ... +  F1n                  |
  |                                                               |
  |    ->          q1     n     qi     ^                          |
  |    F1  =   -------- x sum ------- r1i                         |
  |             4 pi e0   i=2  r1i^2                              |
  +---------------------------------------------------------------+
```

The key phrase for the exam is: **"the force between two charges is not
affected by the presence of a third charge."**

## The fixed recipe for a superposition numerical

```
  1.  DRAW the arrangement. Mark every charge with its sign.
  2.  Pick the charge you are asked about.
  3.  For EACH other charge, draw the force arrow on the target charge.
      +  and  +   ->  arrow points AWAY
      +  and  -   ->  arrow points TOWARDS
  4.  Find the MAGNITUDE of each force from  F = k q1 q2 / r^2
      (use magnitudes only).
  5.  Resolve into x and y components.
  6.  Add all x-components. Add all y-components.
  7.  Resultant  =  sqrt( Fx^2 + Fy^2 )
      Direction  =  tan(theta) = Fy / Fx
```

Two special cases that save time:

```
  Two forces of equal size F at angle theta between them:

      R  =  sqrt( F^2 + F^2 + 2 F F cos(theta) )
         =  2 F cos(theta / 2)

  For theta = 60 deg  ->  R = F sqrt(3)
  For theta = 90 deg  ->  R = F sqrt(2)
  For theta = 120 deg ->  R = F
```

---

## WORKED EXAMPLE 4

**Three charges each of +1 microC are placed at the corners of an
equilateral triangle of side 10 cm. Find the force on any one of them.**

```
                        C (+1 microC)
                       / \
                      /   \
             10 cm   /     \  10 cm
                    /       \
                   /         \
        A (+1)----------------- B (+1)
                    10 cm

  Take the charge at A.

  Force from B on A:  along BA, pointing AWAY from B (both positive)
  Force from C on A:  along CA, pointing AWAY from C

  Both have the same magnitude:

           k q^2         9 x 10^9  x  (10^-6)^2        9 x 10^-3
  F   =   -------  =   --------------------------  =  ------------
             r^2              (0.10)^2                    0.01

      =   0.9  N

  The angle between the two force arrows at A is 60 degrees
  (the angle of the equilateral triangle).

  Resultant  =  2 F cos(60/2)  =  2 x 0.9 x cos(30)

             =  2 x 0.9 x 0.866   =   1.56  N

  DIRECTION: along the bisector of angle A, pointing AWAY from the
  triangle (outwards).
```

> **TRAP:** The angle between the two FORCE VECTORS is 60 degrees here
> because both point outward from the triangle. Always draw the arrows
> before choosing the angle.

---

## WORKED EXAMPLE 5

**Where on the line joining a +9 microC charge and a +4 microC charge,
which are 1 m apart, will the net field (or the force on a test charge)
be zero?**

```
      (+9 microC)                    (+4 microC)
          A -------- x --- P ------------ B
          |<----- x ---->|<-- (1-x) ---->|
          |<-------------- 1 m --------->|

  The null point lies BETWEEN them (both charges are positive).

  For the fields to cancel:

       k (9 microC)          k (4 microC)
      --------------   =   ---------------
          x^2                  (1 - x)^2

           9                  4
        -------      =     --------
          x^2              (1-x)^2

  Take square roots of both sides:

           3                  2
        ------       =     -------
           x                1 - x

        3 (1 - x)    =     2 x
        3 - 3x       =     2x
        3            =     5x
        x            =     0.6  m

  The null point is 0.6 m from the +9 microC charge
  (and 0.4 m from the +4 microC charge).
```

> **TRAP:** If the two charges have OPPOSITE signs, the null point lies
> **outside** the pair, on the side of the **smaller** charge.

---

# TOPIC 5 — The electric field

## The idea

Coulomb's law needs two charges. But a single charge, sitting alone, has
already changed the space around it. It has created an **electric field**.

Think of a hot stove. Even before you put your hand near it, the stove has
already filled the space around it with heat. The field is "there",
waiting. Bring your hand in and you feel it.

```
  Charge  ->  creates a FIELD in the space around it
              (this happens whether or not anyone is watching)

  Put another charge in that field  ->  it feels a FORCE
```

## Definition

> The **electric field intensity at a point** is the force experienced by a
> **unit positive test charge** placed at that point.

```
  +---------------------------------------------------------------+
  |                                                               |
  |     ->           ->                                           |
  |     E    =       F  /  q0                                     |
  |                                                               |
  |     More strictly:                                            |
  |                                                               |
  |     ->                ->                                      |
  |     E  =  limit  (   F  /  q0  )       as q0 -> 0             |
  |                                                               |
  |     UNIT:   N C^-1     or     V m^-1   (both correct)         |
  |                                                               |
  |     It is a VECTOR.                                           |
  |     Dimensions:  [ M L T^-3 A^-1 ]                            |
  |                                                               |
  +---------------------------------------------------------------+
```

**Why must the test charge be very small?** A big test charge would push the
original charges around and change the very field you are trying to measure.
So we imagine an infinitesimally small charge. That is why the limit is
written.

## Field due to a single point charge

```
  Put a test charge q0 at distance r from a source charge Q:

             k Q q0
   F   =    ---------
               r^2

             F         k Q               1        Q
   E   =    ----  =  --------   =    --------- x -----
             q0        r^2            4 pi e0     r^2
```

```
  +---------------------------------------------------------------+
  |                                                               |
  |                    1         Q                                |
  |        E   =   --------- x -----          (magnitude)         |
  |                 4 pi e0      r^2                              |
  |                                                               |
  |   DIRECTION:                                                  |
  |     Q positive  ->  E points AWAY from Q  (radially outward)   |
  |     Q negative  ->  E points TOWARDS Q    (radially inward)    |
  |                                                               |
  +---------------------------------------------------------------+
```

Then, once you know E, the force on **any** charge q placed there is:

```
        ->        ->
        F   =  q  E

   If q is positive, F is along E.
   If q is NEGATIVE, F is OPPOSITE to E.
```

## Superposition of fields

Exactly like forces — fields add as **vectors**:

```
        ->       ->     ->     ->            ->
        E   =    E1  +  E2  +  E3  + ... +   En
```

Each charge produces its own field as though the others did not exist.

---

## WORKED EXAMPLE 6

**Calculate the electric field at a point 30 cm from a charge of
2 x 10^-8 C. What force acts on an electron placed there?**

```
             k Q          9 x 10^9  x  2 x 10^-8
  E   =    -------  =   --------------------------
             r^2                (0.30)^2

             180                180
        =  --------   =    ------------   =   2000   N C^-1
             0.09              0.09

  E = 2 x 10^3 N/C, directed AWAY from the charge (Q is positive).


  Force on an electron:

  F  =  q E  =  1.6 x 10^-19  x  2 x 10^3   =  3.2 x 10^-16  N

  The electron is NEGATIVE, so the force is directed TOWARDS the
  charge, i.e. OPPOSITE to E.
```

---

## WORKED EXAMPLE 7

**Two charges +5 microC and -5 microC are placed 6 cm apart at A and B.
Find the field at the midpoint of AB.**

```
       A (+5)          M           B (-5)
        (+)------------|------------(-)
        |<-- 3 cm -->|<-- 3 cm -->|

  Field at M due to +5 at A:  points AWAY from A, i.e. A -> B  (right)
  Field at M due to -5 at B:  points TOWARDS B, i.e. A -> B    (right)

  BOTH POINT THE SAME WAY. So they ADD.

            k Q        9 x 10^9  x  5 x 10^-6      45 x 10^3
  E1  =   -------  =  -------------------------  = -----------
            r^2              (0.03)^2                9 x 10^-4

      =   5 x 10^7  N/C

  E2  =   the same  =  5 x 10^7  N/C

  E_total  =  E1 + E2  =  1 x 10^8  N/C , directed from A to B.
```

> **TRAP:** Students often subtract here "because one charge is negative".
> Do NOT. Draw the two arrows first. Here they point the same way, so add.

---

# TOPIC 6 — Electric field lines

A field line (line of force) is an **imaginary curve drawn in the field such
that the tangent to it at any point gives the direction of the electric
field at that point**.

They are a picture, not a real object. But they make the field visible.

## SINGLE POSITIVE CHARGE — lines go OUT

```
              \      |      /
               \     |     /
          \     \    |    /     /
           \     \   |   /     /
    ---------------(+)---------------
           /     /   |   \     \
          /     /    |    \     \
               /     |     \
              /      |      \

     Radially OUTWARD, in all directions.
     Think of a source, a fountain, a spray.
```

## SINGLE NEGATIVE CHARGE — lines come IN

```
              /      |      \
               \     |     /
          /     \    |    /     \
           \     \   v   /     /
    -------------->(-)<--------------
           /     /   ^   \     \
          \     /    |    \     /
               /     |     \
              /      |      \

     Radially INWARD, from all directions.
     Think of a sink, a drain.
```

## TWO LIKE CHARGES (both positive) — a NEUTRAL POINT between them

```
       \    |    /                 \    |    /
        \   |   /                   \   |   /
    -----( + )-----   .  N  .   -----( + )-----
        /   |   \                   /   |   \
       /    |    \                 /    |    \

              lines PUSH APART in the middle
              N = neutral point, where E = 0
              NO line passes through N
```

The lines seem to repel each other and bend away. Right at the midpoint the
two fields cancel exactly — this is the **neutral point**.

## UNLIKE CHARGES — THE DIPOLE

```
                  ......................
                .                        .
              .      _______________       .
            .      /                 \      .
          .      /    ___________     \      .
         .      /   /             \    \      .
        .      /   /   _______     \    \      .
       (+) -----> --> --------> --> ---> ---> (-)
        .      \   \   -------     /    /      .
         .      \   \             /    /      .
          .      \    -----------     /      .
            .      \_______________/       .
              .                          .
                ..........................

    Lines LEAVE the positive charge and ENTER the negative charge.
    They crowd together in the region BETWEEN the charges
    (that is where the field is strongest).
    There is NO neutral point between them.
```

## The PROPERTIES of field lines (learn all six — easy 2 or 4 marks)

```
  +----+--------------------------------------------------------------+
  | 1  |  They start on POSITIVE charges and end on NEGATIVE charges.  |
  |    |  (If only one charge exists, they start or end at infinity.)  |
  +----+--------------------------------------------------------------+
  | 2  |  The TANGENT at any point gives the DIRECTION of E there.     |
  +----+--------------------------------------------------------------+
  | 3  |  TWO FIELD LINES NEVER INTERSECT.                             |
  |    |  If they did, there would be TWO directions of E at one       |
  |    |  point, which is impossible.                                  |
  +----+--------------------------------------------------------------+
  | 4  |  Their CROWDING shows the STRENGTH. Closely packed lines      |
  |    |  mean a strong field; widely spaced lines mean a weak field.  |
  +----+--------------------------------------------------------------+
  | 5  |  They are CONTINUOUS CURVES with no breaks in a               |
  |    |  charge-free region, and they do NOT form closed loops        |
  |    |  (electrostatic field is conservative).                       |
  +----+--------------------------------------------------------------+
  | 6  |  They are always PERPENDICULAR to the surface of a            |
  |    |  conductor, and there are NO lines inside a conductor.        |
  +----+--------------------------------------------------------------+
```

Also worth one line: **a uniform field is drawn as equally spaced parallel
lines.**

```
   UNIFORM FIELD (e.g. between two parallel plates)

     ------------------------------->
     ------------------------------->
     ------------------------------->
     ------------------------------->

   Same spacing everywhere  ->  same strength everywhere.
```

> **TRAP:** "Field lines never intersect" — you must give the REASON to get
> full marks: *at the crossing point the field would have two directions at
> once, which is impossible.*

---

## WORKED EXAMPLE 8

**Why do two electric field lines never cross each other?**

```
  Suppose two lines DID cross at a point P.

              line 1
                \     /  line 2
                 \   /
                  \ /
                   P          <-- two different tangents here
                  / \
                 /   \
                /     \

  A tangent to line 1 at P gives one direction for E.
  A tangent to line 2 at P gives a DIFFERENT direction for E.

  That would mean the electric field at P has TWO directions at the
  same instant. A test charge placed at P would have to move in two
  directions at once, which is impossible.

  Therefore field lines can never intersect.
```

---

# TOPIC 7 — The electric dipole

## What it is

> An **electric dipole** is a pair of **equal and opposite point charges**
> separated by a **small distance**.

```
                     2a
        |<--------------------------->|

       (-q)                          (+q)
        O ---------------------------- O
        |                             |
        |------------ p ------------->|

    The dipole moment  p  points FROM  -q  TOWARDS  +q
```

## Dipole moment

```
  +---------------------------------------------------------------+
  |                                                               |
  |       ->                                                      |
  |       p   =   q  x  2a                                        |
  |                                                               |
  |   MAGNITUDE  =  (either charge) x (distance between them)     |
  |   DIRECTION  =  from  -q  to  +q                              |
  |   UNIT       =  coulomb metre  (C m)                          |
  |   DIMENSIONS =  [ L T A ]                                     |
  |   It is a VECTOR.                                             |
  |                                                               |
  +---------------------------------------------------------------+
```

Real examples: the water molecule H2O and HCl are permanent dipoles. CO2 is
not, because it is symmetric and the two moments cancel.

An **ideal (point) dipole** means 2a -> 0 while q -> infinity so that
p = q(2a) stays finite. In exams "short dipole" means you may assume
r >> 2a and drop a^2 compared with r^2.

---

## DERIVATION 1 — Field on the AXIAL line (the "end-on" position)

The axial line is the line **through both charges, extended**.

```
                    2a
        |<------------------->|

       (-q)                  (+q)                          P
        A ------- O --------- B ------------ r ----------- .
                  |                                        |
                  |<-------------- r -------------------->|
                  ( O is the centre of the dipole )

        Distance from +q to P  =  r - a
        Distance from -q to P  =  r + a
```

**Step 1 — field at P due to +q** (points AWAY from +q, i.e. to the right):

```
                    1            q
        E(+)  =  --------- x -----------
                  4 pi e0     (r - a)^2
```

**Step 2 — field at P due to -q** (points TOWARDS -q, i.e. to the left):

```
                    1            q
        E(-)  =  --------- x -----------
                  4 pi e0     (r + a)^2
```

**Step 3 — E(+) is bigger (P is nearer to +q), so the resultant points to
the right, i.e. along p. Subtract magnitudes:**

```
                                +-                        -+
                     q          |      1              1     |
   E_axial   =   ---------  x   |  -----------  -  ---------|
                  4 pi e0       |   (r - a)^2      (r + a)^2|
                                +-                        -+

                                +-                          -+
                     q          | (r+a)^2  -  (r-a)^2         |
             =   ---------  x   | -------------------------   |
                  4 pi e0       |   (r-a)^2 (r+a)^2           |
                                +-                          -+

   Numerator:  (r+a)^2 - (r-a)^2  =  4 a r
   Denominator: [ (r-a)(r+a) ]^2  =  ( r^2 - a^2 )^2

                     q              4 a r
             =   --------- x  -------------------
                  4 pi e0      ( r^2 - a^2 )^2
```

**Step 4 — use p = q(2a), so q(4ar) = 2 (q 2a) r = 2 p r:**

```
   +==============================================================+
   |                                                              |
   |                       1              2 p r                   |
   |     E_axial   =   ---------  x  -----------------            |
   |                    4 pi e0        (r^2 - a^2)^2              |
   |                                                              |
   |     FOR A SHORT DIPOLE  ( r >> a ),  drop a^2 :              |
   |                                                              |
   |                       1           2 p             2 k p      |
   |     E_axial   =   ---------  x  -------      =   -------     |
   |                    4 pi e0        r^3              r^3       |
   |                                                              |
   |     DIRECTION:  ALONG  p  (parallel to the dipole moment)    |
   |                                                              |
   +==============================================================+
```

---

## DERIVATION 2 — Field on the EQUATORIAL line (the "broadside-on" position)

The equatorial line is the perpendicular bisector of the dipole.

```
                                 P
                                 .
                               / | \
                             /   |   \
                           /     |     \
                  sqrt(r^2+a^2)  r   sqrt(r^2+a^2)
                       /         |         \
                     /           |           \
                   /  theta      |      theta  \
       (-q) ------O--------------O--------------O------ (+q)
                  A              |              B
                  |<---- a ----->|<---- a ----->|

  Distance from EACH charge to P  =  sqrt( r^2 + a^2 )   (equal!)
```

**Step 1 — magnitudes are equal:**

```
                                     1             q
        E(+)  =  E(-)   =        --------- x ---------------
                                  4 pi e0      ( r^2 + a^2 )
```

**Step 2 — resolve each into components.**

```
      E(+) points AWAY from +q  (up-and-left along the line BP extended)
      E(-) points TOWARDS -q    (down-and-left along PA)

                     E(-)  \     |    / E(+)
                            \    |   /
                             \   |  /
                    <---------- P ---------->
                       horizontal components
                       BOTH point from + towards -   (they ADD)

                       vertical components
                       point OPPOSITE ways            (they CANCEL)
```

```
      VERTICAL (perpendicular) components:
             E(+) sin(theta)  upward
             E(-) sin(theta)  downward       ->  CANCEL

      HORIZONTAL (parallel to the axis) components:
             E(+) cos(theta)  and  E(-) cos(theta)
             both point in the SAME direction     ->  ADD
```

**Step 3 — add the surviving components:**

```
   E_eq  =  E(+) cos(theta)  +  E(-) cos(theta)   =   2 E cos(theta)

                              a
   From the triangle: cos(theta) = -------------------
                                   sqrt( r^2 + a^2 )

                         1              q                     a
   E_eq  =  2  x    ---------- x  --------------  x  --------------------
                     4 pi e0       ( r^2 + a^2 )      sqrt( r^2 + a^2 )

                         1              q ( 2a )
         =           ---------- x  ---------------------
                      4 pi e0       ( r^2 + a^2 )^(3/2)
```

**Step 4 — put p = q(2a):**

```
   +==============================================================+
   |                                                              |
   |                       1                p                     |
   |     E_eq   =      ---------  x  ---------------------        |
   |                    4 pi e0       ( r^2 + a^2 )^(3/2)         |
   |                                                              |
   |     FOR A SHORT DIPOLE  ( r >> a ):                          |
   |                                                              |
   |                       1            p             k p         |
   |     E_eq   =      ---------  x  -------    =   -------       |
   |                    4 pi e0        r^3            r^3         |
   |                                                              |
   |     DIRECTION:  ANTI-PARALLEL to p                           |
   |                 (from +q side towards -q side)               |
   |                                                              |
   +==============================================================+
```

## THE COMPARISON (a guaranteed exam line)

```
  +-------------------+---------------------+-------------------------+
  |                   |  AXIAL              |  EQUATORIAL             |
  +-------------------+---------------------+-------------------------+
  |  Formula (short)  |  2 k p / r^3        |  k p / r^3              |
  |  Direction        |  PARALLEL to p      |  ANTI-PARALLEL to p     |
  |  Which is bigger  |  TWICE as big       |  half of axial          |
  |  Falls off as     |  1 / r^3            |  1 / r^3                |
  +-------------------+---------------------+-------------------------+

              E_axial   =   2  x   E_equatorial
```

> **TRAP:** Both fall off as 1/r^3, **not** 1/r^2. A dipole's field dies
> faster than a point charge's field because the + and - almost cancel at
> large distance.

---

## WORKED EXAMPLE 9

**An electric dipole consists of charges ±2 x 10^-8 C separated by
4 cm. Find (a) its dipole moment (b) the field at an axial point 20 cm
from the centre.**

```
  (a)  p  =  q x 2a  =  2 x 10^-8  x  0.04   =   8 x 10^-10  C m


  (b)  r = 0.20 m, a = 0.02 m.  r >> a, so use the short-dipole formula.

               2 k p        2 x 9 x 10^9  x  8 x 10^-10
  E_axial  =  -------  =  -------------------------------
                r^3                  (0.20)^3

                 14.4                14.4
           =  ----------    =    -----------   =   1800  N/C
                0.008              0.008

  E_axial  =  1.8 x 10^3  N/C , directed along p.


  At the same distance on the equatorial line it would be HALF:
  E_eq = 900 N/C, directed opposite to p.
```

---

# TOPIC 8 — Dipole in a uniform external field: torque and energy

## The set-up

Put a dipole in a uniform field E at an angle theta.

```
                                E  (uniform, pointing right)
        --------------------------------------------------->
        --------------------------------------------------->

                        (+q)
                        /  ^  F = qE  (to the RIGHT)
                       /
                      /
                     /   theta
              ------O------------------  (direction of E)
                   /
                  /
                 /
              (-q)
                |
                v  F = qE  (to the LEFT)
```

## Net force = ZERO

```
  Force on +q  =  + q E   (along E)
  Force on -q  =  - q E   (opposite to E)

  NET FORCE  =  qE - qE  =  ZERO      -> the dipole does not TRANSLATE
```

But the two forces are **equal, opposite and not along the same line**.
That is the definition of a **couple**. So the dipole **ROTATES**.

## Torque

```
  Torque of a couple  =  (either force)  x  (perpendicular distance
                                             between the two forces)

  Perpendicular distance  =  2a sin(theta)

     tau  =  ( q E ) x ( 2a sin(theta) )
          =  ( q 2a ) E sin(theta)
          =  p E sin(theta)
```

```
  +==============================================================+
  |                                                              |
  |      tau   =   p E sin(theta)                                |
  |                                                              |
  |      ->        ->     ->                                     |
  |      tau   =   p  x   E          (cross product)             |
  |                                                              |
  |      UNIT of torque:  N m                                    |
  |                                                              |
  |   SPECIAL CASES:                                             |
  |      theta = 0     ->  tau = 0        (STABLE equilibrium)   |
  |      theta = 90    ->  tau = p E      (MAXIMUM torque)       |
  |      theta = 180   ->  tau = 0        (UNSTABLE equilibrium) |
  |                                                              |
  +==============================================================+
```

**How to find p from this:** if theta = 90 degrees, tau = pE, so

```
              tau
       p  =  ------      "dipole moment = maximum torque per unit field"
               E
```

That sentence is an accepted alternative definition of dipole moment.

## Potential energy of a dipole

Work must be done to rotate the dipole against the torque:

```
  dW  =  tau d(theta)  =  p E sin(theta) d(theta)

  Integrating from theta1 to theta2:

  W  =  p E [ cos(theta1) - cos(theta2) ]

  Taking the zero of energy at theta = 90 degrees:
```

```
  +==============================================================+
  |                                                              |
  |      U   =   - p E cos(theta)                                |
  |                                                              |
  |      ->    ->                                                |
  |   U = - p . E        (dot product)                           |
  |                                                              |
  |   theta = 0    ->  U = - pE    MINIMUM  ->  STABLE           |
  |   theta = 90   ->  U =  0                                    |
  |   theta = 180  ->  U = + pE    MAXIMUM  ->  UNSTABLE         |
  |                                                              |
  |   Work to rotate from 0 to 180 degrees  =   2 p E            |
  |                                                              |
  +==============================================================+
```

**In plain words:** a dipole is happiest lined up WITH the field
(theta = 0). It is most unhappy pointing against it (theta = 180).

> **TRAP:** Do not forget the MINUS sign in U = -pE cos(theta). Half the
> marks in this question are for that sign.

> **TRAP:** In a **non-uniform** field the two forces are unequal, so the
> dipole feels a net force AND a torque. In a **uniform** field the net
> force is zero and there is only torque.

---

## WORKED EXAMPLE 10

**A dipole of moment 4 x 10^-9 C m is placed at 30 degrees to a uniform
field of 5 x 10^4 N/C. Find the torque and the work done in rotating
it from 0 to 60 degrees.**

```
  TORQUE:
  tau  =  p E sin(theta)
       =  4 x 10^-9  x  5 x 10^4  x  sin(30)
       =  4 x 5 x 10^-5  x  0.5
       =  1 x 10^-4   N m


  WORK from 0 to 60 degrees:
  W  =  p E [ cos(0) - cos(60) ]
     =  4 x 10^-9  x  5 x 10^4  x  [ 1 - 0.5 ]
     =  2 x 10^-4  x  0.5
     =  1 x 10^-4   J
```

---

# TOPIC 9 — Electric flux

## The idea

Imagine rain falling straight down and you hold a ring in the rain. How much
rain passes through the ring?

```
  Ring held FLAT (facing up)   ->  MAXIMUM rain passes through
  Ring held EDGE-ON            ->  ZERO rain passes through
  Ring tilted                  ->  something in between
```

Electric flux is exactly this counting, for field lines instead of rain.

> **Electric flux through a surface is the total number of electric field
> lines passing normally through that surface.**

```
  +---------------------------------------------------------------+
  |                                                               |
  |          ->    ->                                             |
  |   phi =  E  .  A    =   E A cos(theta)                        |
  |                                                               |
  |   theta = angle between E and the NORMAL to the surface       |
  |           (NOT the angle with the surface itself)             |
  |                                                               |
  |   For a curved / non-uniform case:                            |
  |                                                               |
  |                          ->    ->                             |
  |   phi  =   integral of ( E  .  dA )                           |
  |                                                               |
  |   UNIT:  N m^2 C^-1     (or volt metre, V m)                  |
  |   It is a SCALAR.                                             |
  |   Dimensions:  [ M L^3 T^-3 A^-1 ]                            |
  |                                                               |
  +---------------------------------------------------------------+
```

## The picture

```
                     normal n
                        ^
     E                  |    theta
     ------------------>|   /
     ------------------>|  /
     ------------------>| /
     ------------------>|/________________
                        /                 |
                       /   surface A      |
                      /___________________|

   theta =   0   ->  phi = E A      (MAXIMUM, field perpendicular
                                     to the surface)
   theta =  90   ->  phi = 0        (field PARALLEL to the surface,
                                     it just skims past)
   theta = 180   ->  phi = - E A    (field entering, NEGATIVE flux)
```

```
  +--------------------------------+-----------------------------+
  |  Lines LEAVING a closed surface|  POSITIVE flux              |
  |  Lines ENTERING it             |  NEGATIVE flux              |
  |  Lines going in AND out again  |  Net contribution ZERO      |
  +--------------------------------+-----------------------------+
```

> **TRAP:** theta is measured from the **NORMAL (area vector)**, not from
> the plane of the surface. If the field is "parallel to the surface", then
> theta = 90 degrees and flux = 0.

---

## WORKED EXAMPLE 11

**A uniform field of 3 x 10^3 N/C makes an angle of 60 degrees with the
plane of a square of side 10 cm. Find the flux through it.**

```
  CAREFUL: the angle given is with the PLANE, so the angle with the
  NORMAL is  90 - 60 = 30 degrees.

  A = (0.10)^2 = 0.01 m^2

  phi  =  E A cos(theta)
       =  3 x 10^3  x  0.01  x  cos(30)
       =  30  x  0.866
       =  25.98   N m^2 C^-1

  About 26 N m^2 / C.
```

---

# TOPIC 10 — Gauss's law

## Statement

> The total electric flux through **any closed surface** is equal to
> **1/e0 times the net charge enclosed** by that surface.

```
  +==============================================================+
  |                                                              |
  |                       ->    ->        q(enclosed)            |
  |     phi  =  integral( E  .  dA )  =  ---------------         |
  |             over a closed surface          e0                |
  |                                                              |
  |   The closed surface is called a GAUSSIAN SURFACE.           |
  |   It is IMAGINARY. You choose it yourself.                   |
  |                                                              |
  +==============================================================+
```

Three facts that carry marks:

```
  1.  Only the charge INSIDE the surface matters.
      A charge outside contributes ZERO NET flux
      (its lines go in one side and out the other).

  2.  The SHAPE and SIZE of the surface do not matter at all.
      A cube, a sphere, a potato — same flux for the same enclosed charge.

  3.  The FIELD E in the integral is the TOTAL field, due to ALL charges,
      inside and outside. Only the FLUX depends on the inside charge alone.
```

## PROOF for a point charge

```
  Take a point charge +q. Choose a SPHERE of radius r with the charge
  at the centre. (This is the smart choice: on this sphere E has the
  same magnitude everywhere and points radially outward, exactly along
  the area vector dA.)

                       . - - - - - - - .
                    .        ^  dA        .
                  .          |  ^           .
                 .        E  |   \           .
                .            |    \           .
                .      ------(+q)------>       .    <-- Gaussian sphere
                .            |    /            .        radius r
                 .           |   /            .
                  .          v  v            .
                    .                     .
                       ' - - - - - - - '

  On the sphere:
        E  =  k q / r^2     everywhere       (same magnitude)
        angle between E and dA  =  0         (both radial)

  phi  =  integral of  E dA cos(0)
       =  E  x  ( total area of the sphere )
       =  E  x  4 pi r^2

               1        q
       =   --------- x -----   x   4 pi r^2
            4 pi e0     r^2

               q
       =    ------
              e0

  PROVED.
```

Notice how r cancelled. The answer does not depend on the size of the
sphere — that is the whole point of Gauss's law.

## Why it is useful

Gauss's law is true for any surface, but it is only **useful for finding E**
when the charge distribution is symmetric enough that you can pull E out of
the integral. That means:

```
  Cylindrical symmetry  ->  long wire      ->  use a CYLINDER
  Planar symmetry       ->  sheet          ->  use a CYLINDER (pillbox)
  Spherical symmetry    ->  shell / sphere ->  use a SPHERE
```

---

## WORKED EXAMPLE 12

**A charge of 8.85 x 10^-8 C is placed at the centre of a cube of side
10 cm. Find (a) the total flux through the cube (b) the flux through
one face.**

```
  (a)   By Gauss's law the SHAPE does not matter:

                q            8.85 x 10^-8
        phi = ------   =   -----------------   =   10^4  N m^2 / C
                e0          8.85 x 10^-12


  (b)   A cube has SIX identical faces and the charge is at the centre,
        so by symmetry each face gets an equal share:

                    10^4
        phi_face = -------   =   1666.7   N m^2 / C
                      6

  The side length 10 cm was NOT needed. That was deliberate.
```

---

# TOPIC 11 — Continuous charge distributions

When charge is spread over a wire, a surface or a volume rather than sitting
at points, we describe it with a **charge density**.

```
  +--------------+--------------------------+------------+-------------+
  |  NAME        |  DEFINITION              |  SYMBOL    |  UNIT       |
  +--------------+--------------------------+------------+-------------+
  |  LINEAR      |  charge per unit LENGTH  |  lambda    |  C / m      |
  |              |  lambda = q / L          |            |             |
  +--------------+--------------------------+------------+-------------+
  |  SURFACE     |  charge per unit AREA    |  sigma     |  C / m^2    |
  |              |  sigma = q / A           |            |             |
  +--------------+--------------------------+------------+-------------+
  |  VOLUME      |  charge per unit VOLUME  |  rho       |  C / m^3    |
  |              |  rho = q / V             |            |             |
  +--------------+--------------------------+------------+-------------+
```

```
   LINEAR (a wire)        SURFACE (a sheet)        VOLUME (a solid ball)

   ----+--+--+--+----      + + + + + + + +           .-------.
                           + + + + + + + +          / + + + + \
   lambda = q / L          + + + + + + + +         | + + + + + |
                                                    \ + + + + /
                           sigma = q / A             '-------'
                                                    rho = q / V
```

Then the charge enclosed by a Gaussian surface is:

```
   q_enclosed  =  lambda x (length inside)
   q_enclosed  =  sigma  x (area inside)
   q_enclosed  =  rho    x (volume inside)
```

That single line is the bridge between Gauss's law and every derivation
in the next topic.

---

# TOPIC 12 — THE FOUR APPLICATIONS OF GAUSS'S LAW

*** This topic supplies the 8-mark Section C question. Learn all four. ***

Every derivation follows the SAME five steps:

```
  1.  Note the SYMMETRY. Say which way E points.
  2.  CHOOSE a Gaussian surface that follows the symmetry.
  3.  Compute the FLUX through each part of that surface.
  4.  Compute the CHARGE ENCLOSED.
  5.  Put them into  phi = q / e0  and solve for E.
```

---

## APPLICATION 1 — Infinitely long straight uniformly charged WIRE

```
  Given:  an infinite straight wire with linear charge density lambda.
  Find:   E at a perpendicular distance r from the wire.
```

**Step 1 — symmetry.** By symmetry E must point **radially outward**,
perpendicular to the wire. It cannot have a component along the wire
(the wire looks the same in both directions).

**Step 2 — Gaussian surface: a CYLINDER of radius r and length l, with
the wire along its axis.**

```
                       |<--------- l --------->|
                       
        ===============+=======================+=================
         wire (charge  |                       |
         density lam)  |                       |
                    ___|_______________________|___
                   /   |                       |   \
                  |    |          ^  E         |    |
     TOP CAP  --->|    |          |            |    |<--- BOTTOM CAP
     (flat, E is  |    |    ------+------>     |    |     (flat)
      parallel    |    |          |     r      |    |
      to it)       \___|_______________________|___/
                       |                       |
        ===============+=======================+=================
                       
                       CURVED SURFACE: E is perpendicular to it
                                       everywhere  ->  full flux
```

**Step 3 — flux.**

```
  CURVED surface:   E is parallel to the area vector (both radial)
                    -> flux  =  E x (curved area)  =  E x (2 pi r l)

  TWO FLAT CAPS:    E lies IN the plane of the caps
                    (E is radial, the cap normal is along the wire)
                    -> angle = 90 degrees  ->  flux = 0

  TOTAL FLUX  =  E x 2 pi r l
```

**Step 4 — charge enclosed.** Only the length l of wire is inside:

```
  q_enclosed  =  lambda x l
```

**Step 5 — apply Gauss's law.**

```
                    lambda l
   E x 2 pi r l  =  ---------
                       e0

                    lambda
   E   =   -------------------
             2 pi e0  r
```

```
  +==============================================================+
  |                                                              |
  |                     lambda                2 k lambda         |
  |        E   =   ------------------    =   ------------        |
  |                  2 pi e0  r                   r              |
  |                                                              |
  |        E is proportional to  1 / r                           |
  |                                                              |
  |        Direction: radially OUTWARD if lambda is positive,    |
  |                   radially INWARD  if lambda is negative.    |
  |                                                              |
  +==============================================================+
```

> **TRAP:** For a wire it is **1/r**, not 1/r^2. Also note the length l
> cancels — the answer must not contain l.

---

## APPLICATION 2 — Uniformly charged INFINITE PLANE SHEET

```
  Given:  an infinite plane sheet with surface charge density sigma.
  Find:   E at a distance r from the sheet.
```

**Step 1 — symmetry.** E must be **perpendicular to the sheet**, pointing
away on both sides (for positive sigma). It has the same magnitude at the
same distance on either side.

**Step 2 — Gaussian surface: a CYLINDER (a "pillbox") pushed through the
sheet, with its flat faces of area A parallel to the sheet and equidistant
from it.**

```
              |  SHEET (charge density sigma)
              |
              |
       <---   |   --->
              |
        ______|______
       /      |      \
      |       |       |
   <--| E   A |  A   E|-->      the two FLAT CAPS, each of area A
      |       |       |
       \______|______/
              |
        curved side: E is PARALLEL to it,
                     so NO flux through the curved surface
              |
              |
```

**Step 3 — flux.**

```
  TWO FLAT CAPS:  E is perpendicular to each cap, pointing outward
                  -> flux from each  =  E A
                  -> total from both =  2 E A

  CURVED SIDE:    E lies along the curved surface (angle 90 degrees)
                  -> flux = 0

  TOTAL FLUX  =  2 E A
```

**Step 4 — charge enclosed.** The piece of sheet inside the pillbox has
area A:

```
  q_enclosed  =  sigma x A
```

**Step 5 — apply Gauss's law.**

```
                   sigma A
   2 E A     =   -----------
                     e0

                   sigma
   E    =    -------------
                 2 e0
```

```
  +==============================================================+
  |                                                              |
  |                     sigma                                    |
  |        E   =   -------------                                 |
  |                    2 e0                                      |
  |                                                              |
  |    *** E DOES NOT DEPEND ON THE DISTANCE r AT ALL ***        |
  |                                                              |
  |    The field of an infinite sheet is UNIFORM.                |
  |    Direction: away from the sheet if sigma is positive.      |
  |                                                              |
  +==============================================================+
```

**Special case — a charged CONDUCTING plate** has charge on both faces, and
the field just outside is

```
        E  =  sigma / e0      (twice as much)
```

> **TRAP:** sigma / (2 e0) is for a thin **non-conducting** sheet.
> sigma / e0 is just outside a **conductor's** surface. Read the question.

---

## APPLICATION 3 — Field between TWO PARALLEL CHARGED SHEETS

Take two large sheets with densities +sigma and -sigma.

```
         SHEET 1 (+sigma)              SHEET 2 (-sigma)
             |                              |
             |                              |
   REGION I  |         REGION II            |   REGION III
             |                              |
             |                              |
   <---E1    |    E1--->        <---E2      |      E2--->
      E2--->  |    E2--->        <---E2 ... |
             |                              |
             |                              |

  Field of sheet 1 (positive): points AWAY from sheet 1 on both sides
  Field of sheet 2 (negative): points TOWARDS sheet 2 on both sides
```

Work out each region by adding the two constant fields:

```
  +--------------+---------------------------+---------------------+
  |  REGION      |  E1        E2             |  RESULT             |
  +--------------+---------------------------+---------------------+
  |  I  (left,   |  sig/2e0 left             |                     |
  |  outside)    |  sig/2e0 right            |  ZERO               |
  +--------------+---------------------------+---------------------+
  |  II (between)|  sig/2e0 right            |  sigma / e0         |
  |              |  sig/2e0 right            |  (pointing from     |
  |              |                           |   + sheet to -)     |
  +--------------+---------------------------+---------------------+
  |  III (right, |  sig/2e0 right            |                     |
  |  outside)    |  sig/2e0 left             |  ZERO               |
  +--------------+---------------------------+---------------------+
```

```
  +==============================================================+
  |                                                              |
  |   TWO SHEETS WITH  +sigma  AND  -sigma :                     |
  |                                                              |
  |      Between them   ->   E  =  sigma / e0                    |
  |      Outside        ->   E  =  0                             |
  |                                                              |
  |   TWO SHEETS BOTH WITH  +sigma :                             |
  |                                                              |
  |      Between them   ->   E  =  0                             |
  |      Outside        ->   E  =  sigma / e0                    |
  |                                                              |
  +==============================================================+
```

This is exactly how a **parallel plate capacitor** works — a uniform field
inside, nothing outside. That is why the next chapter starts here.

---

## APPLICATION 4 — Uniformly charged thin SPHERICAL SHELL

```
  Given:  a thin spherical shell of radius R carrying total charge Q
          spread uniformly over its surface (sigma = Q / 4 pi R^2).
  Find:   E outside, on the surface, and inside.
```

```
                     . - - - - - - - .
                  .   + + + + + + +    .
                .   +                +   .
               .  +                    +  .
               . +          O           + .          . P (outside)
               . +          |<--- R --->+ .          |
               .  +         |            +  .        |
                .   +       |<---------- r ---------->
                  .   + + + + + + +   .
                     ' - - - - - - '

     GAUSSIAN SURFACE for OUTSIDE:  a sphere of radius r > R
     GAUSSIAN SURFACE for INSIDE :  a sphere of radius r < R
```

### Case (a) — OUTSIDE the shell (r > R)

```
  Gaussian surface: a concentric sphere of radius r.
  By symmetry E is radial and constant in magnitude on it.

  Flux            =  E x 4 pi r^2
  Charge enclosed =  Q     (the whole shell is inside)

                        Q
  E x 4 pi r^2  =   ---------
                        e0

                     1        Q            k Q
  E     =        --------- x -----   =   -------
                  4 pi e0     r^2          r^2
```

```
  +--------------------------------------------------------------+
  |  OUTSIDE:   E = k Q / r^2                                    |
  |                                                              |
  |  This is EXACTLY the field of a point charge Q placed at the |
  |  CENTRE. A uniformly charged shell behaves, from outside, as |
  |  if all its charge were concentrated at its centre.          |
  +--------------------------------------------------------------+
```

### Case (b) — ON the surface (r = R)

```
                     k Q            sigma
        E    =     -------    =    -------
                     R^2             e0
```

This is the **maximum** value of E.

### Case (c) — INSIDE the shell (r < R)

```
  Gaussian surface: a concentric sphere of radius r < R.

                     . - - - - - - .
                  .  + + + + + + +   .
                .  +               +  .
               .  +   .- - - - .    +  .
               . +   .          .    + .
               . +  .     O      .   + .   <-- inner Gaussian
               . +   .          .    + .       sphere, radius r
                .  +   ' - - - '     +.
                 .  + + + + + + +   .
                     ' - - - - - '

  ALL the charge sits on the OUTER shell of radius R.
  So the charge INSIDE the Gaussian sphere is ZERO.

                        0
  E x 4 pi r^2   =   -------   =   0
                        e0

        E   =   0
```

```
  +==============================================================+
  |                                                              |
  |    THE FIELD IS ZERO EVERYWHERE INSIDE A UNIFORMLY           |
  |    CHARGED SPHERICAL SHELL.                                  |
  |                                                              |
  |    This is why a metal car or an aeroplane protects you in   |
  |    a thunderstorm.  (ELECTROSTATIC SHIELDING)                |
  |                                                              |
  +==============================================================+
```

### The graph (draw this — it earns a mark)

```
    E
    ^
    |
    |            * <-- maximum, E = kQ/R^2 = sigma/e0
    |            |*
    |            |  *
    |            |     *
    |            |         *  <-- E falls as 1/r^2
    |            |              *
    |            |                    *
    |            |                           *
  0 +------------+----------------------------------> r
    0            R

    E = 0 inside      E = kQ/r^2 outside

    NOTE: there is a JUMP at r = R.
```

> **TRAP:** For a **solid uniformly charged sphere** (not a shell) the
> inside field is NOT zero; it grows linearly:
> E_inside = k Q r / R^3 = rho r / (3 e0). Know the difference.

---

## WORKED EXAMPLE 13

**A long wire has a linear charge density of 5 x 10^-6 C/m. Find the
field at 20 cm from it.**

```
             2 k lambda        2 x 9 x 10^9  x  5 x 10^-6
  E   =   ---------------  =  -----------------------------
                r                        0.20

             9 x 10^4
        =  ------------   =   4.5 x 10^5   N / C
               0.20

  Directed radially OUTWARD (lambda is positive).
```

---

## WORKED EXAMPLE 14

**A large plane sheet has sigma = 2 x 10^-7 C/m^2. Find E just outside
it, and the force on a charge of 3 microC placed there.**

```
             sigma            2 x 10^-7
  E   =   ----------  =  ---------------------
             2 e0         2 x 8.854 x 10^-12

              2 x 10^-7
        =  ----------------   =   1.13 x 10^4   N / C
             1.77 x 10^-11

  Force  =  q E  =  3 x 10^-6  x  1.13 x 10^4  =  3.39 x 10^-2  N

  Note that the answer does NOT depend on how far the charge is
  from the sheet.
```

---

## WORKED EXAMPLE 15

**A spherical shell of radius 10 cm carries a charge of 6 microC. Find E
at (a) 20 cm from the centre (b) 10 cm from the centre (c) 5 cm from
the centre.**

```
  (a)  r = 0.20 m > R  ->  OUTSIDE

               k Q        9 x 10^9  x  6 x 10^-6         54 x 10^3
       E  =  -------  =  ------------------------   =  -------------
               r^2              (0.20)^2                    0.04

          =  1.35 x 10^6   N / C


  (b)  r = 0.10 m = R  ->  ON THE SURFACE

               k Q        54 x 10^3
       E  =  -------  =  -----------   =   5.4 x 10^6   N / C
               R^2          0.01


  (c)  r = 0.05 m < R  ->  INSIDE

       E  =  ZERO
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Tick every line. Each one is a mark that students routinely throw away.

```
  +----+-----------------------------------------------------------+
  | [] |  Did I convert every cm to METRES before squaring?         |
  +----+-----------------------------------------------------------+
  | [] |  Did I convert microC to 10^-6 C and nC to 10^-9 C?        |
  +----+-----------------------------------------------------------+
  | [] |  Did I use k = 9 x 10^9 (not 9 x 10^-9)?                   |
  +----+-----------------------------------------------------------+
  | [] |  Did I write the UNIT after every numerical answer?        |
  |    |  F -> N , E -> N/C , p -> C m , phi -> N m^2/C , U -> J    |
  +----+-----------------------------------------------------------+
  | [] |  Did I state the DIRECTION for every force and field?      |
  |    |  A vector answer without a direction is incomplete.        |
  +----+-----------------------------------------------------------+
  | [] |  In superposition, did I add as VECTORS and not as plain   |
  |    |  numbers?                                                  |
  +----+-----------------------------------------------------------+
  | [] |  In a derivation, did I DRAW the diagram? The diagram      |
  |    |  alone carries 1 to 2 marks in Section C.                  |
  +----+-----------------------------------------------------------+
  | [] |  In a Gauss's law answer, did I say WHY the flux through   |
  |    |  the caps (or curved side) is zero?                        |
  +----+-----------------------------------------------------------+
  | [] |  Did I write the final BOXED formula clearly at the end    |
  |    |  of each derivation?                                       |
  +----+-----------------------------------------------------------+
  | [] |  Dipole: is my answer 1/r^3 (dipole) and not 1/r^2         |
  |    |  (point charge)?                                           |
  +----+-----------------------------------------------------------+
  | [] |  Dipole energy: did I keep the MINUS sign in               |
  |    |  U = - p E cos(theta)?                                     |
  +----+-----------------------------------------------------------+
  | [] |  Medium: did I DIVIDE by K, not multiply?                  |
  +----+-----------------------------------------------------------+
  | [] |  Shell: E = 0 INSIDE, k Q / r^2 OUTSIDE. Did I not swap    |
  |    |  them?                                                     |
  +----+-----------------------------------------------------------+
  | [] |  Flux: is theta measured from the NORMAL and not from      |
  |    |  the plane?                                                |
  +----+-----------------------------------------------------------+
  | [] |  Did I attempt EVERY question in Section A? There is no    |
  |    |  choice there and no negative marking.                     |
  +----+-----------------------------------------------------------+
```
