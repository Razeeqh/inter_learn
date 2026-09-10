# Gravitation — Concepts Explained From Zero

**Physics 1st Year · Chapter 9**

Read this with a pen. Every ASCII box is meant to be copied by hand once.

---

# TOPIC 1 — WHAT GRAVITATION ACTUALLY IS

## The everyday picture

Drop a pen. It falls. Why? Because the Earth pulls it.

Now the surprise: **the pen also pulls the Earth.** With exactly the same size of force.
The Earth just doesn't visibly move because it is unimaginably heavier.

Newton's big idea was that this is not a special "Earth" effect. It is universal:

```
  EVERY particle of matter in the universe attracts EVERY other particle.
```

You and the person sitting next to you are attracting each other right now. The force is
around 10^-7 newton — far too small to notice, but it is really there.

## Why one chapter covers apples and planets

```
      apple falls to Earth                Moon "falls" towards Earth
              |                                     |
              |                                     |
        +-----+-------------------------------------+-----+
        |                                                 |
        |          SAME FORCE, SAME FORMULA               |
        |                 F = G m1 m2 / r^2               |
        |                                                 |
        +-------------------------------------------------+
```

The apple falls straight down because it has no sideways speed.
The Moon has a huge sideways speed, so while it falls it also moves sideways, and it
keeps *missing* the Earth. That "falling but always missing" is what an **orbit** is.

## Four properties of the gravitational force (2-mark question)

```
  1.  ALWAYS ATTRACTIVE.   There is no gravitational repulsion. Ever.

  2.  CENTRAL FORCE.       It acts along the line joining the two centres.

  3.  LONG RANGE.          It never becomes exactly zero, however far you go.

  4.  INDEPENDENT of the medium between the bodies, and independent of the
      presence of other bodies (it obeys the PRINCIPLE OF SUPERPOSITION:
      the net force is the vector sum of the individual forces).

  5.  It is the WEAKEST of the four fundamental forces
      (about 10^-38 times the strong nuclear force),
      but it dominates the universe because it is always attractive
      and never cancels out.
```

> **TRAP:** Students write "gravitational force depends on the medium". It does NOT.
> Unlike the electrostatic force, no dielectric constant appears anywhere.

---

# TOPIC 2 — KEPLER'S THREE LAWS OF PLANETARY MOTION

Johannes Kepler studied Tycho Brahe's naked-eye observations of Mars and found three
rules. He did not know *why* they were true. Newton later explained all three.

## LAW 1 — THE LAW OF ORBITS

```
  Every planet moves in an ELLIPSE with the SUN at one FOCUS of the ellipse.
```

```
                        planet
                          o
                       .     .
                   .             .
                .                   .
              .                       .
             .    S            S'      .        S  = Sun sits HERE (focus 1)
             .    x            x       .        S' = the OTHER focus - EMPTY
              .   |            |      .
                . |            |    .
                  |            |  .
          |-------|------------|--------|
          P       |            |        A
       PERIHELION |<-- 2 a --->|     APHELION
       (nearest)                     (farthest)

       a  = SEMI-MAJOR AXIS = (perihelion dist + aphelion dist) / 2
       e  = eccentricity;   for the Earth e = 0.017, so its orbit is
            almost a circle, but NOT exactly a circle.
```

Key words for the exam: **ellipse**, **Sun at one focus** (not at the centre!).

> **TRAP:** "The Sun is at the centre of the ellipse" is WRONG and loses the mark.
> The Sun is at a FOCUS. The other focus has nothing at all in it.

## LAW 2 — THE LAW OF AREAS

```
  The line joining a planet to the Sun sweeps out EQUAL AREAS in EQUAL TIMES.
  That is,  dA / dt  =  constant.
```

```
                          slow here (far from Sun)
                              ____
                         ....|    |....
                     ...     |AREA|      ...
                  ..         | A2 |          ..
                .            |____|            .
               .            /      \            .
              .           /          \           .
             .          /              \          .
             .        /                  \        .
             .      /         SUN          \      .
             .    /            x             \    .
              .  /            /|\             \  .
               ./            / | \             \.
               /   AREA A1  /  |  \             \
              /____________/___|___\_____________\
                  |<------->|
                fast here (close to Sun)

              AREA A1  =  AREA A2   if both are swept in the SAME time.
              Since A1 is short and fat, the planet must move FAST there.
              Since A2 is long and thin, the planet must move SLOW there.
```

**Meaning in one sentence:** a planet moves FASTEST when nearest the Sun (perihelion)
and SLOWEST when farthest (aphelion).

### Why it is true — conservation of angular momentum (4-mark derivation)

```
  In a small time dt the planet moves a small distance  dr  (a vector).
  The area swept is the area of the thin triangle with sides r and dr:

              1
      dA  =  --- | r x dr |            (half the cross product)
              2

  Divide by dt:

       dA        1  |     dr |        1
      ---- =   ---  | r x -- |  =   ---  | r x v |
       dt        2  |     dt |        2

  Now momentum  p = m v ,  so  v = p / m :

       dA        1                     L
      ---- =   ----- | r x p |  =  ---------          where L = angular momentum
       dt       2 m                  2 m

  GRAVITY IS A CENTRAL FORCE - it acts along r itself.
  So the torque about the Sun is       tau = r x F = 0     (parallel vectors)
  and therefore                        dL/dt = 0     ->    L = CONSTANT.

  Hence      dA / dt  =  L / (2 m)  =  CONSTANT.        PROVED.
```

```
  +---------------------------------------------------------------+
  |  KEPLER'S SECOND LAW IS SIMPLY THE CONSERVATION OF ANGULAR    |
  |  MOMENTUM, AND IT HOLDS FOR ANY CENTRAL FORCE - not just      |
  |  for the inverse square law.                                  |
  +---------------------------------------------------------------+
```

## LAW 3 — THE LAW OF PERIODS

```
  The square of the period of revolution of a planet is proportional to the
  CUBE of the semi-major axis of its orbit.

          T^2  =  k a^3           or        T^2 / a^3  =  the same constant
                                            for every planet of the Sun
```

```
  +---------+---------+---------+
  | PLANET  |  a (AU) |  T (yr) |         Check:  T^2 / a^3
  +---------+---------+---------+
  | Earth   |   1.00  |  1.00   |         1 / 1        = 1.00
  | Mars    |   1.52  |  1.88   |      3.53 / 3.51     = 1.01
  | Jupiter |   5.20  | 11.86   |     140.7 / 140.6    = 1.00
  +---------+---------+---------+

  Same number every time. That is the law.
```

### WORKED EXAMPLE 2.1
A planet's mean distance from the Sun is 4 times that of the Earth.
Find its period of revolution in Earth years.

```
  T^2 / a^3 = same for both

     T_p^2       T_E^2
   --------  =  --------
     a_p^3       a_E^3

  Take Earth units:  a_E = 1 ,  T_E = 1 ,  a_p = 4

     T_p^2  =  a_p^3  =  4^3  =  64

     T_p    =  8 years                       ANSWER:  8 years
```

### WORKED EXAMPLE 2.2
The period of a planet is 8 times that of the Earth. How far is it from the Sun,
in astronomical units?

```
   a^3 = T^2  ->  a^3 = 8^2 = 64  ->  a = 4 AU        ANSWER:  4 AU
```

> **TRAP:** Kepler's third law uses the SEMI-MAJOR AXIS, not the perihelion distance
> and not the "radius". For a circular orbit the semi-major axis IS the radius, which
> is why in satellite problems we just write `T^2 = k r^3`.

---

# TOPIC 3 — NEWTON'S UNIVERSAL LAW OF GRAVITATION

## Statement

```
  Every body in the universe attracts every other body with a force which is
  DIRECTLY PROPORTIONAL to the product of their masses and
  INVERSELY PROPORTIONAL to the square of the distance between them.
  The force acts along the line joining the two bodies.
```

## The formula

```
        m1                    r                    m2
       (o)<-----------------------------------> (o)
        |                                          |
        |------------------- F --------------->    |     each pulls the other
        |    <-------------- F -------------------||     with the SAME size of force
        +------------------------------------------+

              +-----------------------------+
              |                             |
              |              m1  m2         |
              |     F  =  G  ---------      |
              |                 r^2         |
              |                             |
              +-----------------------------+
```

## Vector form (often asked for 2 marks)

Let `r_vec` be the position vector pointing FROM mass m1 TO mass m2, and let
`r_hat = r_vec / r` be the unit vector along it. Then the force **on m2 due to m1** is

```
        +--------------------------------------------+
        |                                            |
        |    ->            G m1 m2      ^            |
        |    F 21   =  -  ----------    r            |
        |                    r^2                     |
        |                                            |
        +--------------------------------------------+

  The MINUS sign is the whole point: it says the force on m2 points BACK
  towards m1, i.e. opposite to r_hat. That is what "attractive" means.

  And by Newton's third law:      F12  =  - F21
```

## The universal gravitational constant G

```
  Put  m1 = m2 = 1 kg  and  r = 1 m   in  F = G m1 m2 / r^2 :

              F  =  G

  DEFINITION:  G is the force of attraction between two bodies of unit mass
               (1 kg each) placed unit distance (1 m) apart.
```

```
  +----------------+--------------------------------------------------+
  |  VALUE         |  G = 6.67 x 10^-11   N m^2 kg^-2                  |
  |                |    ( = 6.67 x 10^-11 m^3 kg^-1 s^-2 )            |
  +----------------+--------------------------------------------------+
  |  SI UNITS      |  N m^2 kg^-2                                     |
  +----------------+--------------------------------------------------+
  |  DIMENSIONS    |  [ M^-1 L^3 T^-2 ]                               |
  +----------------+--------------------------------------------------+
  |  CGS VALUE     |  6.67 x 10^-8  dyne cm^2 g^-2                    |
  +----------------+--------------------------------------------------+
```

**How to get the dimensions (show this working, it earns the mark):**

```
          F r^2        [ M L T^-2 ] [ L^2 ]        [ M L^3 T^-2 ]
   G  =  --------  =  ---------------------- =  ------------------- = [ M^-1 L^3 T^-2 ]
          m1 m2              [ M ] [ M ]              [ M^2 ]
```

**G is a TRUE universal constant.** It has the same value everywhere in the universe,
on the Moon, inside a mine, in another galaxy. Contrast this with `g`, which changes
from place to place even on the Earth.

```
  +-------------------------------+-------------------------------+
  |          G                    |            g                  |
  +-------------------------------+-------------------------------+
  | Universal CONSTANT            | VARIABLE                      |
  | Same everywhere in universe   | Changes with height, depth,   |
  |                               | latitude, and from planet to  |
  |                               | planet                        |
  | 6.67 x 10^-11 N m^2 kg^-2     | 9.8 m s^-2 on Earth's surface |
  | Scalar                        | Vector (acceleration)         |
  | [M^-1 L^3 T^-2]               | [L T^-2]                      |
  +-------------------------------+-------------------------------+
```

### WORKED EXAMPLE 3.1
Two bodies of mass 100 kg each are 1 m apart. Find the gravitational force between them.

```
         G m1 m2       6.67 x 10^-11  x  100  x  100
   F  =  -------  =  -------------------------------
           r^2                    1^2

      =  6.67 x 10^-11  x  10^4

      =  6.67 x 10^-7  N                    ANSWER:  6.67 x 10^-7 N
```

That is less than the weight of a grain of sand. This is why you never *feel* the
attraction of other people. Gravity only becomes big when one of the masses is
planet-sized.

### WORKED EXAMPLE 3.2
Three 1 kg masses sit at the corners of an equilateral triangle of side 1 m.
Find the net force on any one of them.

```
                    C (1 kg)
                    /\
                   /  \
             1 m  /    \  1 m
                 /      \
                /________\
          A (1 kg)  1 m   B (1 kg)

  Force on A due to B:   F = G(1)(1)/1^2 = G = 6.67e-11 N   (along A -> B)
  Force on A due to C:   F = G = 6.67e-11 N                 (along A -> C)

  Angle between them = 60 degrees.

  Resultant  =  sqrt( F^2 + F^2 + 2 F F cos 60 )
             =  F sqrt( 1 + 1 + 2(0.5) )
             =  F sqrt(3)
             =  6.67 x 10^-11 x 1.732
             =  1.155 x 10^-10  N

  ANSWER:  1.155 x 10^-10 N, directed along the bisector towards the midpoint of BC.
```

> **TRAP:** Gravitational forces are VECTORS. Never just add the magnitudes. Use the
> parallelogram law.

---

# TOPIC 4 — HOW NEWTON DEDUCED THE INVERSE SQUARE LAW FROM KEPLER'S THIRD LAW

This is a favourite 4-mark question. It is only five lines of algebra.

```
  Assume a planet of mass m moves in a CIRCLE of radius r around the Sun,
  with period T. The force needed to keep it in the circle is the
  centripetal force:

              m v^2
      F  =  ---------
                r

  The speed is  (circumference) / (period) :

                2 pi r
      v   =  -----------
                  T

  Substitute:

              m       ( 2 pi r )^2         4 pi^2 m r
      F  =  ----- x   ------------   =   --------------          ... (1)
              r            T^2                 T^2

  Now bring in KEPLER'S THIRD LAW:      T^2  =  k r^3

              4 pi^2 m r          4 pi^2 m         1
      F  =  --------------  =   ----------- x   -------
                k r^3                k            r^2

  Since  4 pi^2 / k  is just a number,

      +-------------------------------------------------+
      |                                                 |
      |         F  is  PROPORTIONAL to  1 / r^2         |
      |                                                 |
      +-------------------------------------------------+

  Newton then argued F must also be proportional to m (by his second law)
  and to the Sun's mass M (by his third law - the force is mutual), giving

              F  =  G M m / r^2
```

## Newton's other check — the "Moon test"

Newton compared the acceleration of the Moon with the acceleration of a falling apple.

```
  Distance to the Moon  =  60 x (radius of the Earth)

  If the inverse square law is right, the Moon's acceleration towards the Earth
  should be  g / 60^2  =  9.8 / 3600  =  2.72 x 10^-3  m/s^2

  Actual centripetal acceleration of the Moon:
        a = 4 pi^2 r / T^2  with r = 3.84 x 10^8 m and T = 27.3 days = 2.36 x 10^6 s

        a = 4 (9.87)(3.84 x 10^8) / (2.36 x 10^6)^2
          = 1.516 x 10^10 / 5.57 x 10^12
          = 2.72 x 10^-3  m/s^2                        THEY MATCH.
```

That match is the moment gravity became a *universal* law rather than an Earth story.

---

# TOPIC 5 — A POINT MASS AND A SPHERICAL SHELL (THE SHELL THEOREMS)

The formula `F = G m1 m2 / r^2` is written for **point masses**. The Earth is not a point;
it is a huge ball. So why do we still use `r = radius of the Earth`?

Newton proved two results (he had to invent calculus to do it).

## SHELL THEOREM 1 — point mass OUTSIDE the shell

```
      +---------------------------------------------------------+
      |  A uniform spherical shell attracts a point mass placed  |
      |  OUTSIDE it as if the WHOLE MASS OF THE SHELL were       |
      |  concentrated at its CENTRE.                             |
      +---------------------------------------------------------+
```

```
              . - - - - - .
          .                   .
        .      SHELL, mass M    .                        m
       .                         .    <----- r ----->   (o)
       .            x C          .                       |
       .                         .                       |
        .                       .                        F = G M m / r^2
          .                   .                          |
              ' - - - - - '                    (r measured from the CENTRE C)
```

## SHELL THEOREM 2 — point mass INSIDE the shell

```
      +---------------------------------------------------------+
      |  The gravitational force on a point mass placed anywhere |
      |  INSIDE a uniform spherical shell is ZERO.               |
      +---------------------------------------------------------+
```

```
              . - - - - - .
          .                   .          The pull of the nearby small patch of
        .     m               .          shell is strong but the patch is small.
       .     (o)      x C     .          The pull of the far patch is weak but
       .      ^               .          the patch is big. They cancel EXACTLY -
       .      |               .          and they cancel from EVERY direction.
        .   force = 0        .
          .                   .          Note: force is zero, but the POTENTIAL
              ' - - - - - '              inside is NOT zero. It is constant.
```

## Why this matters

A solid sphere (like the Earth) is just a stack of shells, one inside the other.
So:

```
  OUTSIDE the Earth   ->   every shell acts from the centre
                           ->  F = G M m / r^2  with r from the CENTRE.
                           This is why we use R = 6400 km at the surface.

  INSIDE the Earth at depth d
                      ->   all the shells ABOVE you contribute ZERO,
                           only the inner sphere of radius (R - d) pulls you.
                           This is the reason g falls off with depth (Topic 8).
```

> **TRAP:** In `F = GMm/r^2` for the Earth, r is measured from the **centre of the Earth**,
> not from the ground. A satellite "at height h" is at r = R + h.

---

# TOPIC 6 — ACCELERATION DUE TO GRAVITY g, AND THE RELATION BETWEEN g AND G

## The bridge formula

```
  Take a body of mass m resting on the Earth's surface.

  Weight of the body (from Newton's 2nd law)     W  =  m g
  Gravitational pull (from the law of gravitation)  F  =  G M m / R^2

  These are the SAME force, so     m g  =  G M m / R^2

  Cancel m :

              +--------------------------+
              |                          |
              |             G M          |
              |     g  =  ---------      |
              |             R^2          |
              |                          |
              +--------------------------+

  M = mass of the Earth,  R = radius of the Earth.
```

**Notice what disappeared:** the mass `m` of the falling body cancelled out.
That is why a stone and a feather fall with the SAME acceleration in vacuum.

```
  +-----------------------------------------------------------------+
  |  THE MOST USEFUL SINGLE LINE IN THE CHAPTER:                    |
  |                                                                 |
  |                    G M  =  g R^2                                |
  |                                                                 |
  |  Use it to swap between "G and M" form and "g and R" form.      |
  +-----------------------------------------------------------------+
```

## Mass of the Earth

```
              g R^2
      M  =  ---------
                G

           9.8  x  (6.4 x 10^6)^2         9.8  x  4.096 x 10^13
      =  --------------------------  =  --------------------------
              6.67 x 10^-11                    6.67 x 10^-11

           4.014 x 10^14
      =  ------------------   =   6.02 x 10^24  kg
           6.67 x 10^-11

      MASS OF THE EARTH  =  about 6 x 10^24 kg
```

## Mean density of the Earth

```
  Treat the Earth as a uniform sphere:     M  =  (4/3) pi R^3 rho

              G M           G (4/3) pi R^3 rho          4
      g  =  -------  =  -------------------------  =  ----- pi G R rho
              R^2                  R^2                  3

  Rearranged:

              +----------------------------+
              |                            |
              |                3 g         |
              |     rho  =  -----------    |
              |              4 pi G R      |
              |                            |
              +----------------------------+

  Substituting:

                      3 x 9.8
      rho  =  --------------------------------------
               4 x 3.14 x 6.67 x 10^-11 x 6.4 x 10^6

                 29.4
           =  ------------   =   5.48 x 10^3  kg m^-3
              5.365 x 10^-3

      MEAN DENSITY OF THE EARTH  =  about 5.5 x 10^3 kg/m^3  ( = 5.5 g/cm^3 )
```

Surface rocks have a density of only about 2.7 g/cm^3. Since the *average* is 5.5,
the core must be far denser — that is how we know the Earth has an iron core.

### WORKED EXAMPLE 6.1
The mass of a planet is 4 times that of the Earth and its radius is 2 times.
Find g on the planet.

```
             G M                       G (4 M_E)        4   G M_E
   g_p  =  --------            =    --------------  =  --- --------   =  g_E
              R_p^2                    (2 R_E)^2        4    R_E^2

   ANSWER:  g_p = 9.8 m/s^2 - exactly the same as on the Earth.
```

### WORKED EXAMPLE 6.2
A planet has the same density as the Earth but half its radius. Find g on it.

```
   Use  g = (4/3) pi G R rho.
   Same rho, so   g  is PROPORTIONAL to R.

   R halved  ->  g halved.

   g_p = 9.8 / 2 = 4.9 m/s^2               ANSWER:  4.9 m/s^2
```

> **TRAP:** If the question gives DENSITY, use `g = (4/3) pi G R rho` (g goes as R).
> If it gives MASS, use `g = GM/R^2` (g goes as 1/R^2). Using the wrong one flips
> the answer completely.

---

# TOPIC 7 — VARIATION OF g WITH ALTITUDE (HEIGHT)

## Set-up

```
                                    o  body at height h
                                    |
                                    |   h
        .-------------------------- + ---------.
      .                         SURFACE          .
     .                             |              .
     .                             |  R            .
     .              x  CENTRE  ----+               .
     .                                             .
      .                                          .
        '  - - - - - - - - - - - - - - - - -  '

        Distance from the CENTRE  =  R + h
```

## The exact formula

```
  At the surface:            g   =  G M / R^2                  ... (1)

  At height h:               g_h =  G M / (R + h)^2            ... (2)

  Divide (2) by (1):

       g_h        R^2                        R^2
      -----  =  ---------      ->    g_h = g ---------
        g       (R + h)^2                    (R + h)^2

      +----------------------------------------------+
      |                    R^2                       |
      |     g_h  =  g  -----------      (EXACT)      |
      |                 (R + h)^2                    |
      +----------------------------------------------+
```

## The approximate formula for SMALL heights (h much less than R)

```
                 R^2                    1                    (      h )^-2
   g_h  =  g  ---------  =  g  ----------------  =  g x ( 1 + --- )
              (R + h)^2         (1 + h/R)^2              (      R )

   Use the binomial expansion  (1 + x)^-2 = 1 - 2x + 3x^2 - ...
   and since h/R is tiny, KEEP ONLY THE FIRST TWO TERMS:

      +----------------------------------------------+
      |                (       2 h )                 |
      |     g_h  =  g  ( 1  -  ----- )    (h << R)   |
      |                (        R  )                 |
      +----------------------------------------------+

   Loss of g  =  g - g_h  =  2 g h / R

   FRACTIONAL decrease  =  2 h / R          PERCENTAGE decrease = (2h/R) x 100
```

## The picture

```
   g
   |
 9.8 +----.
   |       ` .
   |           ` .
   |                ` .                  g falls off as 1 / (R+h)^2
   |                     ` .
2.45+ - - - - - - - - - - - - `  .
   |                          |        ` ` .  .  .
   |                          |                       . . . .
   +--------------------------+--------------------------------> h
   0                        h = R                (never reaches zero)

   At h = R (one Earth-radius up), g becomes g/4 = 2.45 m/s^2.
   At h = 2R,   g becomes  g/9.
   g becomes zero only at infinity.
```

### WORKED EXAMPLE 7.1
Find g at a height equal to the radius of the Earth.

```
                R^2               R^2          R^2         g       9.8
   g_h  =  g  ---------  =  g  ---------  = g -------  =  ---  =  ----- = 2.45
              (R + h)^2        (R + R)^2       4 R^2        4        4

   ANSWER:  2.45 m/s^2
```

### WORKED EXAMPLE 7.2
At what height does g fall to 1 % of its surface value... no — simpler and more common:
**At what height does g fall by 1 % ?** (R = 6400 km)

```
   A 1 % fall means      2 h / R  =  0.01

              0.01 x R       0.01 x 6400
       h  =  ----------  =  -------------  =  32  km
                  2               2

   ANSWER:  32 km
```

### WORKED EXAMPLE 7.3
Find the value of g at a height of 320 km (R = 6400 km, g = 9.8 m/s^2).
Use the exact formula.

```
   R + h = 6400 + 320 = 6720 km

              R^2               ( 6400 )^2
   g_h = g ----------- = 9.8 x  (------)     = 9.8 x (0.9524)^2
            (R + h)^2            ( 6720 )

       = 9.8 x 0.9070  =  8.89  m/s^2

   ANSWER:  8.89 m/s^2

   (Check with the approximation: g(1 - 2h/R) = 9.8(1 - 640/6400)
    = 9.8 x 0.9 = 8.82. Close, because h is only 5 % of R.)
```

> **TRAP:** The approximate formula `g(1 - 2h/R)` is only valid when h is much smaller
> than R. If the question says "h = R" or "h = R/2", you MUST use the exact formula.
> Using the approximation at h = R gives g(1 - 2) = -g, which is nonsense.

---

# TOPIC 8 — VARIATION OF g WITH DEPTH

## Set-up — the shell theorem does the work

```
        .- - - - - - - - - - - - - - - - .
      .          OUTER SHELL of              .
     .           thickness d                  .
     .    ______________________________      .
     .   /                              \     .        Body at depth d,
     .  /      INNER SPHERE               \   .        i.e. at distance
     .  |      radius (R - d)             |  o<--- (R - d) from the centre
     .  |      mass   M'                  |   .
     .   \             x C               /    .    OUTER SHELL pulls with ZERO force
     .    \___________________________ _/     .    (shell theorem 2)
      .                                     .
         ' - - - - - - - - - - - - - - '          Only M' matters.
```

## Derivation

```
  Assume the Earth has uniform density rho.

  Mass of the whole Earth        M   =  (4/3) pi R^3 rho
  Mass of the inner sphere       M'  =  (4/3) pi (R - d)^3 rho

  At the SURFACE:

              G M         G (4/3) pi R^3 rho          4
      g  =  -------  =  ---------------------- =   ----- pi G R rho
              R^2                R^2                 3

  At DEPTH d (distance R - d from the centre):

               G M'          G (4/3) pi (R-d)^3 rho        4
      g_d  =  --------  =  -------------------------- =  ----- pi G (R - d) rho
              (R-d)^2              (R - d)^2               3

  Divide:

       g_d      R - d              d
      -----  = -------  =   1  -  ---
        g         R               R

      +----------------------------------------------+
      |                (        d )                  |
      |     g_d  =  g  ( 1  -  --- )                 |
      |                (        R )                  |
      +----------------------------------------------+
```

## The picture — the FULL profile of g from the centre to space

```
   g
   |
   |              g_max = 9.8
 9.8|              *
   |             /|\
   |            / | \  .
   |           /  |   \    .
   |          /   |     \       .            OUTSIDE:  g = GM/r^2
   |         /    |       \          .                 (falls as 1/r^2)
   |        /     |         \              .  .
   |       /      |           \                      .  .  .
   |      /       |             \                              .  .
   |     /        |               \
   |    /  INSIDE:|   g = g(1 - d/R)
   |   /   STRAIGHT LINE, g goes as r
   |  /           |
   | /            |
   +--------------+---------------------------------------------> distance from centre
   C            SURFACE
 (centre)        r = R
   g = 0

   AT THE CENTRE OF THE EARTH  (d = R):   g = 0.
   A body at the centre of the Earth is WEIGHTLESS, pulled equally in all directions.
```

## Height versus depth — the comparison they love to ask

```
  +---------------------------+---------------------------+
  |   GOING UP by h           |   GOING DOWN by d         |
  +---------------------------+---------------------------+
  |   g_h = g (1 - 2h/R)      |   g_d = g (1 - d/R)       |
  |   (for small h)           |   (always, uniform Earth) |
  +---------------------------+---------------------------+
  |   g becomes 0 only at     |   g becomes 0 at the      |
  |   INFINITY                |   CENTRE (d = R)          |
  +---------------------------+---------------------------+
  |   For the SAME small      |   the fall is HALF as     |
  |   distance the fall is    |   much                    |
  |   TWICE as much           |                           |
  +---------------------------+---------------------------+

  So:  g decreases FASTER as you go UP than as you go DOWN.
```

### WORKED EXAMPLE 8.1
At what depth is the value of g half of its value at the surface?

```
   g_d = g/2   ->   1 - d/R = 1/2   ->   d/R = 1/2   ->   d = R/2 = 3200 km

   ANSWER:  3200 km
```

### WORKED EXAMPLE 8.2
At what HEIGHT is g half its surface value? Compare with 8.1.

```
   Must use the EXACT formula (h is large):

        g       R^2
       ---  = ---------      ->    (R + h)^2 = 2 R^2   ->  R + h = sqrt(2) R
        2     (R+h)^2

       h = (sqrt(2) - 1) R = 0.414 x 6400 = 2650 km

   ANSWER:  2650 km, whereas the depth answer was 3200 km.
```

### WORKED EXAMPLE 8.3
At what depth does g decrease by 1 %? Compare with Example 7.2.

```
   d / R  =  0.01     ->   d = 0.01 x 6400 = 64 km

   ANSWER:  64 km   (going UP, only 32 km gave the same 1 % drop)
```

> **TRAP:** Writing `g_d = g(1 - 2d/R)`. The factor 2 belongs ONLY to the height formula.
> Depth has no 2.

---

# TOPIC 9 — VARIATION OF g WITH THE SHAPE OF THE EARTH

The Earth is not a perfect sphere. It is an **oblate spheroid** — flattened at the poles
and bulging at the equator.

```
                    NORTH POLE
                        |
                 . -----+----- .
             .                     .
          .        R_pole = 6357 km   .
        .              |                .
       .               |                 .
      .   <----------- + -----------> .            R_equator = 6378 km
       .        R_equator = 6378 km       .
        .                               .
          .                           .
             .                     .
                 ' ----- + ----- '
                    SOUTH POLE

        (drawn exaggerated - the real difference is only 21 km,
         about 0.3 %, so a photo of the Earth still looks round)
```

```
      Since   g  =  G M / R^2 ,   g is INVERSELY proportional to R^2.

      R_pole is SMALLER      ->    g at the POLES is LARGER
      R_equator is LARGER    ->    g at the EQUATOR is SMALLER

      +--------------------------------------------------------+
      |     g_pole  >  g_equator                               |
      |                                                        |
      |     g_pole    = 9.83 m/s^2                             |
      |     g_equator = 9.78 m/s^2                             |
      +--------------------------------------------------------+

      Roughly:      g_pole - g_equator (shape effect only) = about 0.018 m/s^2
```

Your body weighs slightly more in Antarctica than in Chennai. Not enough to notice,
but a sensitive spring balance sees it.

---

# TOPIC 10 — VARIATION OF g WITH THE ROTATION OF THE EARTH (LATITUDE)

This is the effect students find hardest, so go slowly.

## The idea

The Earth spins. Anything sitting on the surface (except at the poles) is going round in
a circle. Part of the gravitational pull is "used up" providing the centripetal force for
that circle, so less of it is left over to press you on the weighing machine.

**Result: your APPARENT weight is less than your true weight.**

## The geometry

```
                        N  (pole)
                        |
              omega     |
             <----------+
                       /|\
                     /  | \
                   /    |  \
              . -+- - - + - -+- .
          .   /   \     |     P  .   <---- a body at LATITUDE lambda
        .    /  r  \    |    /  \   .
       .    /       \   |   /     . .        r = radius of the circle
       .   +---------\--+--/-------+.            it travels in one day
       .   |  circle  \ | /  lambda |.
       .   |  of       \|/          |.        From the diagram:
       .   | rotation   O ----------+.
       .   |            |  R         .            r  =  R cos(lambda)
        .  |            |           .
          .             |          .          At the EQUATOR lambda = 0,  r = R
             .          |       .             At the POLES   lambda = 90, r = 0
                 ' -----+----- '

              lambda = LATITUDE (angle from the equator, measured at O)
```

## The derivation

```
  A body of mass m at latitude lambda moves in a circle of radius  r = R cos(lambda)
  with the Earth's angular speed omega.

  Centripetal acceleration needed  =  omega^2 r  =  omega^2 R cos(lambda)

  This centripetal acceleration must be supplied by part of g. But only the COMPONENT
  of that acceleration along the vertical (along R) reduces the apparent g, and that
  component brings in another factor of cos(lambda):

      +---------------------------------------------------------+
      |                                                         |
      |     g'  =  g  -  R omega^2 cos^2 ( lambda )             |
      |                                                         |
      +---------------------------------------------------------+

  where  g'  is the EFFECTIVE (apparent) value of g at latitude lambda.
```

## Reading the formula

```
  +-----------------+-----------+---------------------+------------------------+
  |  PLACE          |  lambda   |  cos^2(lambda)      |   g'                   |
  +-----------------+-----------+---------------------+------------------------+
  |  EQUATOR        |    0      |       1             |  g - R omega^2  (MIN)  |
  |  Latitude 45    |   45      |      1/2            |  g - R omega^2 / 2     |
  |  Latitude 60    |   60      |      1/4            |  g - R omega^2 / 4     |
  |  POLES          |   90      |       0             |  g            (MAX)    |
  +-----------------+-----------+---------------------+------------------------+

  AT THE POLES the rotation has NO effect at all, because a body at the pole
  sits on the axis and does not go round in a circle (r = 0). It merely spins
  on the spot.

  AT THE EQUATOR the effect is the largest.
```

## How big is the effect?

```
  Earth's angular speed:

               2 pi          2 x 3.1416
    omega  =  ------   =  ----------------  =  7.27 x 10^-5  rad/s
                T             86400 s

  Reduction at the equator:

    R omega^2 = 6.4 x 10^6 x (7.27 x 10^-5)^2
              = 6.4 x 10^6 x 5.285 x 10^-9
              = 0.0338  m/s^2      (about 0.034, i.e. only 0.35 %)
```

Small, but real. Combined with the shape effect (Topic 9) it explains the whole
0.05 m/s^2 difference between pole and equator.

## The famous question — how fast must the Earth spin to make us weightless?

```
  Weightlessness at the equator means the apparent g there is ZERO:

           g  -  R omega^2  =  0

                       g                9.8
           omega  =  sqrt( --- )  =  sqrt(-----------)
                       R              6.4 x 10^6

                  =  sqrt( 1.531 x 10^-6 )

                  =  1.24 x 10^-3   rad/s

  New length of the day:

                2 pi          2 x 3.1416
        T  =  --------  =  ----------------- = 5075 s = 84.6 minutes = 1.41 hours
               omega        1.24 x 10^-3

      +-------------------------------------------------------------+
      |  The Earth would have to spin about 17 TIMES FASTER          |
      |  (a day of about 1.4 hours) for bodies at the equator        |
      |  to become weightless.  omega = 1.24 x 10^-3 rad/s           |
      +-------------------------------------------------------------+
```

Notice this is exactly the same as the minimum period of a satellite (Topic 14) —
because "weightless at the surface" means "the surface itself is in orbit".

### WORKED EXAMPLE 10.1
Find the percentage decrease in the weight of a body at latitude 60 degrees due to
the Earth's rotation.

```
   Decrease  =  R omega^2 cos^2 60  =  0.0338 x (0.5)^2  =  0.0338 x 0.25
             =  8.45 x 10^-3  m/s^2

                        8.45 x 10^-3
   Percentage  =     ------------------  x 100   =   0.086 %
                           9.8

   ANSWER:  about 0.086 %
```

> **TRAP:** The formula has **cos SQUARED** lambda, not cos lambda. And lambda is the
> LATITUDE (angle from the equator), not the angle from the pole.

---

# TOPIC 11 — GRAVITATIONAL FIELD INTENSITY

## The idea

Instead of asking "what force does the Earth put on THIS particular body?", we ask
"what pull would there be at this point, per kilogram?" That per-kilogram pull is the
**gravitational field intensity**, and it belongs to the point in space, not to any
particular body.

```
      +-------------------------------------------------+
      |                                                 |
      |                 ->                              |
      |      ->         F              G M              |
      |      E   =   -------   =   ---------            |
      |                 m              r^2              |
      |                                                 |
      |   (directed TOWARDS the mass M)                 |
      +-------------------------------------------------+
```

```
   +----------------+-----------------------------------------+
   |  SI unit       |  N kg^-1   (which is the same as m s^-2) |
   |  Dimensions    |  [ L T^-2 ]                              |
   |  Nature        |  VECTOR, always pointing towards the mass|
   +----------------+-----------------------------------------+
```

**Important realisation:** at the Earth's surface the field intensity IS the acceleration
due to gravity. `E = GM/R^2 = g`. Field intensity and g are the same quantity wearing
two different names.

## Field of a solid sphere — full picture

```
   E
   |
   |         E_max = GM/R^2
   |            *
   |           /|\
   |          / | \  .
   |         /  |   \     .
   |        /   |     \        .              OUTSIDE:  E = G M / r^2
   |       /    |       \            .
   |      /     |         \                 .   .
   |     /  INSIDE:        \                        .   .   .
   |    /   E = G M r / R^3 \
   |   /   (straight line)
   +--+-----------+------------------------------------> r
      C           R
```

---

# TOPIC 12 — GRAVITATIONAL POTENTIAL AND POTENTIAL ENERGY

## Gravitational potential V

```
  DEFINITION:  The gravitational potential at a point is the WORK DONE in bringing
               a unit mass from INFINITY to that point.

      +--------------------------------------+
      |                                      |
      |                 G M                  |
      |      V   =   -  -----                |
      |                  r                   |
      |                                      |
      +--------------------------------------+

   SI unit:      J kg^-1
   Dimensions:   [ L^2 T^-2 ]
   Nature:       SCALAR  (so potentials just ADD - no vector work needed)
```

## Gravitational potential energy U

```
  DEFINITION:  The gravitational potential energy of a system of two masses is the
               work done in bringing them from infinite separation to a separation r.

      +----------------------------------------+
      |                                        |
      |                 G M m                  |
      |      U   =   -  --------   =  m V      |
      |                    r                   |
      |                                        |
      +----------------------------------------+
```

## Derivation of U = - G M m / r

```
  We choose  U = 0  at  r = infinity  (the standard reference).

  Bring a mass m from infinity in to a distance r from M.
  At a distance x from M the attractive force on it is  F = G M m / x^2 ,
  directed INWARDS - that is, in the SAME direction as the motion.

  So the work done BY GRAVITY as the mass comes in from infinity to r is

              r                     r
      Wg =  INT  F dx   =    INT   ( G M m / x^2 ) dx
             inf                inf

                        [   -1  ] r             [   1        1   ]      G M m
         =   G M m   x   [ ----- ]      =  GMm  [ - --- +  ----- ]  =  -------
                        [   x   ] inf            [   r       inf  ]        r

  Gravity did POSITIVE work of  + G M m / r .

  The potential energy of the system is defined as the work done AGAINST gravity,
  i.e. the NEGATIVE of the work done by gravity:

      +------------------------------+
      |                  G M m       |
      |       U   =   -  -------     |
      |                     r        |
      +------------------------------+
```

## WHY IS IT NEGATIVE? (Guaranteed 2-mark question)

```
  +-----------------------------------------------------------------------+
  |                                                                       |
  |  Because gravity is ATTRACTIVE.                                       |
  |                                                                       |
  |  We define U = 0 when the two bodies are INFINITELY far apart.        |
  |  As they come closer, gravity does POSITIVE work on them              |
  |  (it pulls them the way they are already going), so the system        |
  |  LOSES potential energy.                                              |
  |                                                                       |
  |  Starting from zero and losing energy gives a NEGATIVE value.         |
  |                                                                       |
  |  Physical meaning: the mass is TRAPPED / BOUND. You must SUPPLY       |
  |  energy from outside to pull it back out to infinity.                 |
  |                                                                       |
  +-----------------------------------------------------------------------+
```

```
   U
   |
 0 +--------------------------------------------------------- r
   |    .
   |  .
   | .                                   .  .  .  .  .  U -> 0 as r -> infinity
   |.                          .  .  .
   |.                .  .
   |.        .
   |.  .
   | .
   |.
   |
   | U = -GMm/r,  very deep near r = 0  -  "the gravitational well"

   Getting out of the well = climbing to U = 0 = escaping.
```

## The special case: mgh near the Earth's surface

This is the derivation of `mgh`, and it is asked.

```
  Take a body of mass m lifted from the surface (r = R) to a height h (r = R + h).

     Change in PE  =  U_final  -  U_initial

                        (   G M m )     (   G M m )
                  =     ( - ------- ) - ( - ------- )
                        (    R + h )    (     R    )

                                 (   1        1    )
                  =     G M m    ( -----  - ------ )
                                 (   R       R + h )

                                 (   R + h  -  R   )              G M m h
                  =     G M m    ( --------------- )   =     ---------------
                                 (   R (R + h)     )            R (R + h)

  Now if  h  is MUCH SMALLER than R, then  R + h  is nearly  R :

                        G M m h        ( G M )
     Change in PE  =  ----------  =    (-----) m h   =   g m h
                          R^2          ( R^2 )

      +---------------------------------------------+
      |                                             |
      |     Delta U   =   m g h      (only for      |
      |                              h << R)        |
      +---------------------------------------------+
```

```
  +-------------------------------------------------------------------------+
  |  mgh IS NOT A NEW FORMULA. It is the CHANGE in the real potential       |
  |  energy -GMm/r, approximated for small heights near the surface.        |
  |  mgh gives a DIFFERENCE. -GMm/r gives an ABSOLUTE value.                |
  +-------------------------------------------------------------------------+
```

### WORKED EXAMPLE 12.1
Find the work required to lift a 1 kg body from the Earth's surface to a height
equal to the radius of the Earth. (R = 6.4 x 10^6 m, g = 9.8 m/s^2)

```
   Here h = R, which is NOT small, so mgh is not allowed. Use the exact expression:

                     G M m h              G M m R              G M m
      W  =    -------------------  =  -------------------  =  -------
                  R (R + h)               R (R + R)             2 R

   Now use  G M = g R^2 :

                g R^2 m         g R m         9.8 x 6.4 x 10^6 x 1
      W  =    -----------  =  ---------  =  -------------------------
                  2 R             2                    2

         =  3.136 x 10^7  J

   ANSWER:  3.136 x 10^7 J  (about 31.4 MJ)

   CHECK: the wrong "mgh" answer would be 9.8 x 6.4e6 = 6.27e7 J - twice too big.
   The exact result is HALF of it, which is what we expect since g weakens on the way up.
```

### WORKED EXAMPLE 12.2
Two bodies of mass 10 kg and 100 kg are 1 m apart. Find the gravitational potential
energy of the system.

```
             G m1 m2       6.67 x 10^-11 x 10 x 100
   U  =   -  --------  = - --------------------------  =  - 6.67 x 10^-8  J
                r                     1

   ANSWER:  - 6.67 x 10^-8 J
```

> **TRAP:** Forgetting the minus sign in U or V. It is not decoration — it is the
> physics. And do not confuse POTENTIAL (J/kg, for a point in space) with POTENTIAL
> ENERGY (J, for a pair of bodies).

---

# TOPIC 13 — ESCAPE VELOCITY

## The idea in words

Throw a ball up: it comes back. Throw it harder: it goes higher, still comes back.
Is there a speed at which it never comes back? Yes — the **escape velocity**.

```
  DEFINITION:  The escape velocity is the MINIMUM velocity with which a body must be
               projected from the surface of a planet so that it just escapes the
               planet's gravitational field and never returns.
```

## The derivation (4 marks, learn it exactly)

```
  Let the body of mass m be thrown up from the surface with speed v_e.

  AT THE SURFACE (r = R):

        Kinetic energy      =  (1/2) m v_e^2
        Potential energy    =  - G M m / R

        TOTAL  =  (1/2) m v_e^2  -  G M m / R

  "JUST ESCAPES" means it barely reaches INFINITY with ZERO speed left:

        AT INFINITY:   KE = 0  and  PE = 0     ->    TOTAL = 0

  By CONSERVATION OF ENERGY the two totals are equal:

        (1/2) m v_e^2  -  G M m / R   =   0

        (1/2) m v_e^2  =  G M m / R

               v_e^2  =  2 G M / R

      +--------------------------------------------------+
      |                                                  |
      |     v_e  =  sqrt ( 2 G M / R )                   |
      |                                                  |
      |     and since  G M = g R^2 :                     |
      |                                                  |
      |     v_e  =  sqrt ( 2 g R )                       |
      |                                                  |
      +--------------------------------------------------+
```

## Numerical value for the Earth

```
   v_e  =  sqrt( 2 x 9.8 x 6.4 x 10^6 )

        =  sqrt( 1.2544 x 10^8 )

        =  1.12 x 10^4  m/s

      +-----------------------------------------------+
      |    ESCAPE VELOCITY FROM THE EARTH             |
      |         =  11.2  km/s   =  11200 m/s          |
      |         (about 40 000 km per hour)            |
      +-----------------------------------------------+
```

## Four facts about escape velocity that are asked as 2-markers

```
  1.  It does NOT depend on the mass of the escaping body.
      A pebble and a rocket need the same 11.2 km/s. (m cancelled in the derivation.)

  2.  It does NOT depend on the DIRECTION of projection
      (as long as it is not into the ground), because energy is a scalar.

  3.  It DOES depend on the mass and radius of the PLANET.

  4.  It is sqrt(2) = 1.414 times the orbital velocity near the surface.
      v_e = sqrt(2) x v_o
```

## Escape velocity in other places

```
  +-------------+---------------------+
  |  BODY       |  ESCAPE VELOCITY    |
  +-------------+---------------------+
  |  Moon       |   2.38  km/s        |
  |  Mercury    |   4.3   km/s        |
  |  Mars       |   5.0   km/s        |
  |  EARTH      |  11.2   km/s        |
  |  Jupiter    |  59.5   km/s        |
  |  Sun        | 618     km/s        |
  +-------------+---------------------+
```

## WHY THE MOON HAS NO ATMOSPHERE (a certain 2-mark question)

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  The escape velocity on the Moon is only 2.38 km/s, because the Moon     |
  |  has a small mass and a small radius.                                    |
  |                                                                          |
  |  The root-mean-square speed of gas molecules at the Moon's daytime       |
  |  temperature (which reaches about 400 K) is COMPARABLE TO OR GREATER     |
  |  THAN 2.38 km/s for light gases.                                         |
  |                                                                          |
  |  So gas molecules simply fly away one by one, and over billions of       |
  |  years every last one has escaped.                                       |
  |                                                                          |
  |  The Earth keeps its atmosphere because 11.2 km/s is far greater than    |
  |  the rms speed of air molecules (about 0.5 km/s at 300 K).               |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 13.1
Calculate the escape velocity from the Moon.
(Mass of Moon = 7.36 x 10^22 kg, radius = 1.74 x 10^6 m, G = 6.67 x 10^-11)

```
              2 G M           2 x 6.67 x 10^-11 x 7.36 x 10^22
   v_e^2  =  -------   =    -------------------------------------
                R                    1.74 x 10^6

                9.818 x 10^12
          =  ------------------   =   5.643 x 10^6
                1.74 x 10^6

   v_e  =  sqrt( 5.643 x 10^6 )  =  2.376 x 10^3  m/s

   ANSWER:  about 2.38 km/s
```

### WORKED EXAMPLE 13.2
A planet has twice the mass of the Earth and half its radius. Find its escape velocity.

```
                        2 G (2 M)          2 G M
   v_p  =  sqrt(  -------------- )  = sqrt( 4 x -------- )  =  2 x v_earth
                        (R/2)                R

   v_p  =  2 x 11.2  =  22.4  km/s          ANSWER:  22.4 km/s
```

### WORKED EXAMPLE 13.3
A body is projected from the Earth's surface with a speed of 2 v_e.
Find its speed when it is very far away (at infinity).

```
   Energy at surface  =  (1/2) m (2 v_e)^2  -  G M m / R
                      =  (1/2) m (4 v_e^2)  -  (1/2) m v_e^2      [since GMm/R = (1/2)m v_e^2]
                      =  2 m v_e^2  -  0.5 m v_e^2
                      =  1.5 m v_e^2

   Energy at infinity =  (1/2) m v^2  +  0

   Equate:   (1/2) m v^2  =  1.5 m v_e^2
                    v^2   =  3 v_e^2
                    v     =  sqrt(3) v_e  =  1.732 x 11.2  =  19.4 km/s

   ANSWER:  sqrt(3) v_e = 19.4 km/s

   GENERAL RESULT worth remembering:  if projected with speed  n v_e ,
   the speed left at infinity is  v_e sqrt(n^2 - 1).
```

> **TRAP:** "Escape velocity depends on the mass of the body" is WRONG.
> "Escape velocity depends on the angle of projection" is WRONG.
> Both are common MCQ distractors.

---

# TOPIC 14 — SATELLITES: ORBITAL VELOCITY, TIME PERIOD, HEIGHT

## What a satellite really is

```
   Fire a cannon horizontally from a very tall mountain:

                  ______
                 /      \       (D) too fast -> escapes altogether
                /        \
   MOUNTAIN    /          \
      /\      /            \
     /  \    /   (C) just right -> goes all the way round: AN ORBIT
    /    \--*----------------------------.
   /      \  \                            .
  /        \  \   (B) falls further away   .
 /  EARTH   \  \                            .
              \  (A) falls to the ground     .
               \                              .
                \____________________________.

   An orbit is FALLING FOREVER AND ALWAYS MISSING THE GROUND.
```

## The orbit diagram

```
                                    v  (tangential, always perpendicular to r)
                                    ^
                                    |
                              . - - o - - .          o = satellite, mass m
                          .        SAT      .
                       .            |         .
                      .             | F        .
                     .              v           .
                     .        . - - - - .       .
                     .      .           .       .
                     .     .   EARTH    .       .        r = R + h
                     .     .     x  <---|-------.
                     .     .   M, R     .       .
                     .      .           .       .
                     .        ' - - - '         .
                      .                        .
                       .                     .
                          .               .
                              ' - - - '

   The gravitational pull F SUPPLIES the centripetal force. Nothing else acts.
```

## Derivation of the orbital velocity

```
  For a circular orbit of radius  r = R + h :

           CENTRIPETAL FORCE REQUIRED   =   GRAVITATIONAL FORCE AVAILABLE

                    m v_o^2                 G M m
                   ---------      =       ---------
                       r                     r^2

  Cancel m and one r:

                    v_o^2   =    G M / r

      +------------------------------------------------------+
      |                                                      |
      |                 (   G M    )        (      G M     ) |
      |     v_o  =  sqrt( -------- ) = sqrt ( ------------ ) |
      |                 (    r     )        (     R + h    ) |
      |                                                      |
      |     Using  G M = g R^2 :                             |
      |                                                      |
      |                 (    g R^2   )                       |
      |     v_o  =  sqrt( ---------- )                       |
      |                 (    R + h   )                       |
      |                                                      |
      |     CLOSE TO THE SURFACE  (h = 0):                   |
      |                                                      |
      |     v_o  =  sqrt( g R )  =  7.9 km/s                 |
      |                                                      |
      +------------------------------------------------------+
```

```
   Check the near-surface number:

   v_o = sqrt(9.8 x 6.4 x 10^6) = sqrt(6.272 x 10^7) = 7.92 x 10^3 m/s = 7.92 km/s
```

**Key insight:** v_o depends only on r. Higher orbits are SLOWER, not faster.

## Time period of a satellite

```
                 circumference        2 pi r
        T  =   -----------------  =  --------
                     speed              v_o

                    2 pi r                             r^2                r^3
        T  =    ---------------- ,   and    T^2 = 4 pi^2 -------- = 4 pi^2 -----
                 sqrt( G M / r )                          G M / r          G M

                                                   (    r^3   )
        so             T   =    2 pi          sqrt ( -------- )
                                                   (   G M    )

      +----------------------------------------------------------+
      |                                                          |
      |                    (   ( R + h )^3   )                   |
      |     T  =  2 pi sqrt( ---------------- )                  |
      |                    (       G M       )                   |
      |                                                          |
      |     or, with G M = g R^2 :                               |
      |                                                          |
      |                    (   ( R + h )^3   )                   |
      |     T  =  2 pi sqrt( ---------------- )                  |
      |                    (     g R^2       )                   |
      |                                                          |
      |     NOTICE:   T^2  is proportional to  r^3               |
      |               <-- KEPLER'S THIRD LAW, all over again     |
      +----------------------------------------------------------+
```

## Least possible period (satellite grazing the surface)

```
                    (   R   )                (   6.4 x 10^6 )
   T_min = 2 pi sqrt( ----- )  =  2 x 3.14 sqrt( ----------- )
                    (   g   )                (      9.8     )

         = 6.283 x sqrt( 6.531 x 10^5 )  =  6.283 x 808  =  5077 s

         = 84.6 minutes  (about 1 hour 25 minutes)

   No satellite of the Earth can ever have a period shorter than 84.6 minutes.
```

## Height of a satellite from its period

Rearranging the period formula:

```
                (  g R^2 T^2  ) 1/3                          (  G M T^2  ) 1/3
   R + h  =     ( ----------- )         or        R + h  =   ( --------- )
                (   4 pi^2    )                              (  4 pi^2   )

              then         h  =  (that)  -  R
```

## Relation between orbital and escape velocity

```
      v_e  =  sqrt( 2 g R )                v_o  =  sqrt( g R )      (near surface)

      +------------------------------------------------------+
      |                                                      |
      |     v_e   =   sqrt(2)  x  v_o   =   1.414  v_o       |
      |                                                      |
      |     11.2 km/s   =   1.414  x  7.9 km/s               |
      |                                                      |
      |     If the orbital speed is increased by 41.4 %,     |
      |     the satellite ESCAPES.                           |
      +------------------------------------------------------+
```

### WORKED EXAMPLE 14.1
A satellite orbits the Earth at a height of 3600 km. Find its orbital velocity and its
period. (R = 6400 km, g = 9.8 m/s^2)

```
   r  =  R + h  =  6400 + 3600  =  10000 km  =  1 x 10^7 m

   G M = g R^2 = 9.8 x (6.4 x 10^6)^2 = 9.8 x 4.096 x 10^13 = 4.014 x 10^14

                 (   G M  )        ( 4.014 x 10^14 )
   v_o  =  sqrt  ( ------ )  = sqrt( ------------- )  =  sqrt( 4.014 x 10^7 )
                 (   r    )        (   1 x 10^7    )

        =  6.34 x 10^3  m/s   =   6.34 km/s

              2 pi r        2 x 3.1416 x 1 x 10^7        6.2832 x 10^7
   T  =     ---------  =  --------------------------  = ----------------
                v_o             6.34 x 10^3               6.34 x 10^3

        =  9910 s   =  165 minutes  =  2 h 45 min

   ANSWER:  v_o = 6.34 km/s ,  T = about 165 minutes
```

### WORKED EXAMPLE 14.2
Two satellites A and B orbit the Earth at radii r and 4r. Find the ratio of
(i) their speeds (ii) their periods.

```
   (i)  v is proportional to  1 / sqrt(r)

            v_A       sqrt(4r)       2
           -----  =  ---------  =  ----  =  2 : 1
            v_B       sqrt(r)        1

   (ii) T^2 is proportional to r^3, so T is proportional to r^(3/2)

            T_A      ( r  )^3/2      ( 1 )^3/2      1
           -----  =  (----)      =   (---)      =  ----  =  1 : 8
            T_B      ( 4r )          ( 4 )           8

   ANSWER:  speeds 2 : 1 ,   periods 1 : 8
```

> **TRAP:** A higher satellite moves SLOWER but takes LONGER. Students often say
> "farther means faster". It is the opposite.

---

# TOPIC 15 — ENERGY OF AN ORBITING SATELLITE

Three quantities, one relationship, four marks.

## Kinetic energy

```
   From the orbit condition,      m v_o^2 / r  =  G M m / r^2
   so                             m v_o^2      =  G M m / r

                                              G M m
   KINETIC ENERGY   =  (1/2) m v_o^2   =   ----------      (POSITIVE)
                                              2 r
```

## Potential energy

```
                                          G M m
   POTENTIAL ENERGY   =    -    ----------------           (NEGATIVE)
                                            r
```

## Total energy

```
   TOTAL  =  KE  +  PE

               G M m         G M m
          =  ---------  -  ---------
               2 r             r

               G M m  -  2 G M m
          =  ---------------------
                     2 r

      +-------------------------------------------------------+
      |                                                       |
      |                          G M m                        |
      |     TOTAL ENERGY  E  =  -  ---------                  |
      |                            2 r                        |
      |                                                       |
      +-------------------------------------------------------+
```

## The three relations worth memorising

```
   +-----------------------------------------------------------+
   |                                                           |
   |     KE  =  + G M m / 2r        =   - E      =  - PE / 2   |
   |     PE  =  - G M m /  r        =   2 E      =  - 2 KE     |
   |     TE  =  - G M m / 2r        =   PE / 2   =  - KE       |
   |                                                           |
   |     So:      PE  =  2 x TE   =   - 2 x KE                 |
   |              KE  =  | TE |                                |
   |                                                           |
   |     RATIO   KE : PE : TE   =   1  :  -2  :  -1            |
   |                                                           |
   +-----------------------------------------------------------+
```

## WHY IS THE TOTAL ENERGY NEGATIVE? (2-mark question)

```
  +----------------------------------------------------------------------+
  |  Because the satellite is BOUND to the Earth.                        |
  |                                                                      |
  |  A negative total energy means the satellite does not have enough    |
  |  energy to reach infinity (where E would be zero). It is trapped     |
  |  in a closed orbit.                                                  |
  |                                                                      |
  |  If E were ZERO, the satellite would just barely escape (parabolic). |
  |  If E were POSITIVE, it would escape with speed to spare (hyperbolic)|
  +----------------------------------------------------------------------+
```

## Binding energy

```
   BINDING ENERGY = the energy that must be SUPPLIED to a satellite in orbit
                    to make it escape (to raise its total energy to zero).

                            G M m
      Binding energy  =   ---------   =   | Total energy |   =   KE
                             2 r

   For a satellite resting ON the surface (not orbiting), the binding energy is
   G M m / R, and it needs (1/2) m v_e^2 = G M m / R to escape.
```

### WORKED EXAMPLE 15.1
A satellite of mass 200 kg orbits at a height of 3600 km. Find its KE, PE, total energy
and binding energy. (Take G M = 4.014 x 10^14, R = 6400 km)

```
   r = 6400 + 3600 = 10000 km = 1 x 10^7 m

              G M m        4.014 x 10^14  x  200         8.028 x 10^16
   KE   =   ---------  =  ------------------------   =  ----------------
               2 r             2 x 1 x 10^7                 2 x 10^7

        =   4.014 x 10^9  J

   PE   =   - 2 x KE   =   - 8.028 x 10^9  J

   TE   =   - KE       =   - 4.014 x 10^9  J

   BINDING ENERGY  =  | TE |  =  4.014 x 10^9  J

   ANSWER:  KE = 4.01 x 10^9 J ,  PE = -8.03 x 10^9 J ,
            TE = -4.01 x 10^9 J ,  BE = 4.01 x 10^9 J
```

> **TRAP:** Do not write KE = (1/2) m v_e^2 for an orbiting satellite. Orbiting speed
> is v_o, not v_e. Also, the total energy is negative — if your answer is positive,
> you have dropped a sign.

---

# TOPIC 16 — GEOSTATIONARY AND POLAR SATELLITES

## GEOSTATIONARY (also called geosynchronous) SATELLITE

```
  DEFINITION:  A satellite that appears PERMANENTLY FIXED at one point in the sky
               as seen from the Earth.
```

```
                          N
                          |
                     _____|_____
                  .            .
                .    EARTH       .
               .        x        .
       - - - - .- - - - + - - - -.- - - - - - - - - - o SATELLITE
               .   (equatorial   .                    ^
                .    plane)     .                     |
                  '  _______  '                  h = 36 000 km
                          |                      T = 24 hours
                          S                      moves west -> east

        The satellite goes round once in exactly the same 24 hours in which
        the Earth turns once beneath it, in the same direction.
        Result: it never appears to move.
```

### The four conditions (all four must be quoted)

```
  1.  Its TIME PERIOD must be exactly 24 hours (23 h 56 min, one sidereal day).
  2.  Its orbit must lie in the EQUATORIAL PLANE of the Earth.
  3.  It must revolve from WEST to EAST, the same sense as the Earth's rotation.
  4.  Its orbit must be CIRCULAR (so its speed stays constant).
```

### Working out the height

```
                    ( R + h )^3
   T  =  2 pi sqrt  ( ---------- )     with  T = 24 h = 86400 s
                    (   G M     )

   Square both sides:

                4 pi^2 ( R + h )^3
   T^2  =   ------------------------
                     G M

                ( G M  T^2 )^(1/3)         ( 4.014 x 10^14  x  (86400)^2 )^(1/3)
   R + h  =     ( -------- )          =    ( --------------------------- )
                ( 4 pi^2   )               (        4 x (3.1416)^2       )

                ( 4.014 x 10^14  x  7.465 x 10^9 )^(1/3)
          =     ( ------------------------------- )
                (            39.478               )

                ( 2.996 x 10^24 )^(1/3)
          =     ( ------------- )        =   ( 7.59 x 10^22 )^(1/3)
                (    39.478     )

          =   4.23 x 10^7  m   =  42 300 km      (measured from the CENTRE)

   HEIGHT ABOVE THE SURFACE:

       h  =  42 300  -  6 400   =   35 900 km    (quoted as about 36 000 km)

   ORBITAL SPEED:

              2 pi r        2 x 3.1416 x 4.23 x 10^7
       v  =  --------  =  -----------------------------  =  3.08 x 10^3 m/s
                 T                   86400

              =  3.08 km/s
```

### Uses of a geostationary satellite

```
  -  Television and radio broadcasting (your DTH dish points at ONE fixed spot
     in the sky and never has to move - that is only possible because the
     satellite is geostationary)
  -  Telecommunication, telephone and internet relay
  -  Weather forecasting and cyclone tracking over a fixed region
  -  Continuous monitoring of one region of the Earth
  -  Indian examples: the INSAT and GSAT series

  NOTE: THREE geostationary satellites, spaced 120 degrees apart, can cover the
        whole Earth except the polar regions.
```

## POLAR SATELLITE (sun-synchronous satellite)

```
                        N
                        |
                        o  <-- satellite passes over the NORTH POLE
                    ____|____
                 .     |     .
               .       |       .
              .   EARTH|        .
              .    x   |        .      Orbit passes over BOTH poles,
              .        |        .      nearly perpendicular to the equator.
               .       |       .
                 . ____|____ .          h = 500 to 800 km
                        |                T = about 100 minutes
                        o
                        |
                        S

   The satellite orbits north-south while the Earth turns west-east UNDER it.
   Each pass sees a fresh strip of the Earth. In a day it scans the WHOLE globe.
```

### Uses of a polar satellite

```
  -  Remote sensing of natural resources, crops, forests, minerals
  -  Mapping and surveying
  -  Detailed weather and atmospheric data (they fly low, so images are sharp)
  -  Spying / military reconnaissance
  -  Indian examples: the IRS series, OCEANSAT, CARTOSAT
```

## The comparison table (a 4-mark question all by itself)

```
  +----------------------+---------------------------+---------------------------+
  |                      |    GEOSTATIONARY          |    POLAR                  |
  +----------------------+---------------------------+---------------------------+
  |  Plane of orbit      |  Equatorial plane         |  Passes over the poles    |
  |  Height              |  about 36 000 km          |  500 to 800 km            |
  |  Orbit radius        |  about 42 400 km          |  about 7 000 km           |
  |  Time period         |  24 hours                 |  about 100 minutes        |
  |  Orbital speed       |  about 3.1 km/s           |  about 7.5 km/s           |
  |  Appears to          |  STAY STILL in the sky    |  Move rapidly across      |
  |  Covers              |  One fixed region always  |  The whole Earth daily    |
  |  Main use            |  Communication, TV,       |  Remote sensing, weather  |
  |                      |  weather over one region  |  detail, spying           |
  |  Indian example      |  INSAT, GSAT              |  IRS, CARTOSAT            |
  +----------------------+---------------------------+---------------------------+
```

> **TRAP:** A geostationary satellite is NOT stationary. It is moving at 3.08 km/s.
> It only *appears* stationary because we are moving with it.

---

# TOPIC 17 — WEIGHTLESSNESS

## First, the correct idea of "weight"

```
   TRUE WEIGHT      =  m g          the actual gravitational pull

   APPARENT WEIGHT  =  N            the NORMAL REACTION from the floor / seat /
                                    weighing machine

   What you FEEL, and what a weighing machine READS, is N - not mg.
   "Weightless" means  N = 0.  It does NOT mean gravity has vanished.
```

## Case 1 — the lift (do all four cases, they get asked)

```
        +--------------+
        |     LIFT     |         Forces on the man:
        |   +------+   |             N  upwards (floor pushes him)
        |   |      |   |             mg downwards
        |   | MAN  |   |
        |   |      |   |         Newton's second law:   N - mg = m a
        |   +------+   |                                N = m (g + a)
        |  ##########  |
        +--------------+
```

```
  +--------------------------------+------------------+-----------------------+
  |  SITUATION                     |  APPARENT WEIGHT |   FEELING             |
  +--------------------------------+------------------+-----------------------+
  |  Lift at rest or at constant   |   N = m g        |  normal               |
  |  velocity           (a = 0)    |                  |                       |
  +--------------------------------+------------------+-----------------------+
  |  Lift accelerating UPWARD      |   N = m (g + a)  |  HEAVIER              |
  |                     (a up)     |                  |  (pressed to floor)   |
  +--------------------------------+------------------+-----------------------+
  |  Lift accelerating DOWNWARD    |   N = m (g - a)  |  LIGHTER              |
  |                     (a down)   |                  |                       |
  +--------------------------------+------------------+-----------------------+
  |  CABLE SNAPS - FREE FALL       |   N = m (g - g)  |  COMPLETELY           |
  |                     (a = g)    |     = 0          |  WEIGHTLESS           |
  +--------------------------------+------------------+-----------------------+
```

```
  IN FREE FALL:  the man AND the lift AND the weighing machine are all falling
  with the SAME acceleration g. The floor does not have to push him at all,
  so N = 0. A weighing machine under his feet reads ZERO. He floats.

  Gravity is at FULL strength the whole time. It is the CONTACT FORCE that vanished.
```

## Case 2 — weightlessness in a satellite

```
                       satellite (accelerating towards Earth at g_h)
                    +---------------------+
                    |                     |
                    |   o  astronaut      |     Both the astronaut AND the
                    |  /|\ (accelerating  |     satellite are in FREE FALL
                    |  / \  towards Earth |     towards the Earth, with the
                    |       at the SAME   |     SAME acceleration g_h = GM/r^2
                    |       g_h)          |
                    +---------------------+
                              |
                              |  both fall together
                              v
                       ( E A R T H )
```

```
  +------------------------------------------------------------------------+
  |  WHY ASTRONAUTS FLOAT - the correct explanation                        |
  |                                                                        |
  |  The satellite is in a circular orbit, so it is accelerating towards   |
  |  the Earth with the centripetal acceleration                           |
  |                                                                        |
  |            a  =  G M / r^2  =  g_h                                     |
  |                                                                        |
  |  which is exactly the gravitational acceleration at that height.       |
  |                                                                        |
  |  The astronaut inside is subject to the SAME gravitational field, so   |
  |  he accelerates at exactly the SAME g_h. Astronaut and floor fall      |
  |  together, so the floor never has to push him:                         |
  |                                                                        |
  |            N  =  m ( g_h  -  a )  =  m ( g_h - g_h )  =  0             |
  |                                                                        |
  |  APPARENT WEIGHT = 0. He floats. So does his pen, his water and        |
  |  everything else in the cabin.                                         |
  +------------------------------------------------------------------------+
```

## The single most common misconception

```
  +-----------------------------------------------------------------------+
  |  WRONG:  "There is no gravity in space, so astronauts float."         |
  |                                                                       |
  |  RIGHT:  At the height of the space station (about 400 km) the        |
  |          value of g is still about 8.7 m/s^2 - roughly 89 % of its    |
  |          surface value! Gravity is very much there.                   |
  |          It is precisely BECAUSE gravity is there that they are       |
  |          in orbit at all.                                             |
  |                                                                       |
  |          They float because they are in continuous FREE FALL,         |
  |          so the normal reaction is zero.                              |
  +-----------------------------------------------------------------------+
```

## Consequences of weightlessness (sometimes asked)

```
  -  Objects and liquids float; water forms spherical blobs (surface tension
     wins because there is no apparent weight to flatten it).
  -  Convection currents do not occur, so a candle flame is spherical and dim.
  -  A simple pendulum will NOT oscillate (its period T = 2 pi sqrt(L/g_eff)
     becomes infinite when g_eff = 0).
  -  A mercury barometer does not work.
  -  Astronauts lose bone density and muscle mass over long stays.
```

### WORKED EXAMPLE 17.1
A man of mass 60 kg stands on a weighing machine in a lift. What does the machine
read when (i) the lift moves up at 2 m/s^2 (ii) the lift falls freely?

```
   (i)   N = m(g + a) = 60 (9.8 + 2) = 60 x 11.8 = 708 N
         (a weighing machine in kg would show 708 / 9.8 = 72.2 kg)

   (ii)  N = m(g - g) = 0

   ANSWER:  (i) 708 N   (ii) 0 N - the machine reads zero
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write G = 6.67 x 10^-11 N m^2 kg^-2  with the units?
  [ ]  Did I put the MINUS sign on every U and every V?
  [ ]  Did I use r = R + h  (from the CENTRE), not just h?
  [ ]  Did I use the DEPTH formula g(1 - d/R) with NO factor of 2,
       and the HEIGHT formula g(1 - 2h/R) WITH the factor of 2?
  [ ]  Did I check that h is small before using the approximate height formula?
       (If h = R or h = R/2, use the EXACT formula.)
  [ ]  Is my latitude formula  g - R omega^2 cos^2(lambda)  - cos SQUARED?
  [ ]  Did I convert every km to m before substituting? (6400 km = 6.4 x 10^6 m)
  [ ]  Is my escape velocity about 11.2 km/s and my orbital velocity about 7.9 km/s?
       If not, I have made an arithmetic slip.
  [ ]  Is the TOTAL ENERGY of my satellite NEGATIVE?
  [ ]  Did I state the Sun is at a FOCUS, not the centre?
  [ ]  For weightlessness, did I say "normal reaction is zero", not "gravity is zero"?
  [ ]  Did I give the UNIT of every final numerical answer?
  [ ]  Did I draw the diagram? Diagrams carry marks in Section B and C.
```

**Final word.** Almost every numerical in this chapter is `GM = gR^2` plus one more
formula. If you get stuck, write down `GM = gR^2` and see what it turns into. That
single habit is worth several marks.
