# Gravitation — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Physics, 1st Year, 60 marks · **Chapter 9 — Gravitation**

> **About the year tags:** BIEAP recycles the same questions across many sessions, so the
> questions below are grouped by **how often they appear**, not tagged to a single year.
> Cross-check against the official question papers at **bie.ap.gov.in** before your exam.
> Do not trust any source that claims an exact year for a question - including this one.

**Where this chapter appears in the paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually 1 question, sometimes 2
  Section B  (4 marks each, answer any 6)    ->  usually 1 question, very often
                                                 the "variation of g" one
  Section C  (8 marks each, answer any 2 of 3) -> occasionally, combined with
                                                 Kepler + g + escape velocity

  Realistic haul:  6 to 10 marks.
```

**Constants to use unless the paper says otherwise:**

```
  G = 6.67 x 10^-11 N m^2 kg^-2      M(Earth) = 6 x 10^24 kg
  R(Earth) = 6.4 x 10^6 m            g = 9.8 m s^-2       G M = 4.0 x 10^14
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

## Topic: Kepler's laws

### Q A1
State Kepler's laws of planetary motion.

**ANSWER:**
```
  1. LAW OF ORBITS   -  Every planet moves in an ELLIPSE with the SUN at
                        one FOCUS of the ellipse.

  2. LAW OF AREAS    -  The line joining a planet to the Sun sweeps out
                        EQUAL AREAS in EQUAL INTERVALS OF TIME.
                        ( dA / dt = constant )

  3. LAW OF PERIODS  -  The SQUARE of the period of revolution is
                        PROPORTIONAL to the CUBE of the semi-major axis.
                        ( T^2 = k a^3 )
```

---

### Q A2
Kepler's second law is a consequence of which conservation law? Justify in one line.

**ANSWER:** Of the **conservation of angular momentum**.
Gravity is a **central force**, so its torque about the Sun is `r x F = 0`, hence the
angular momentum L is constant. Since `dA/dt = L / 2m`, the areal velocity is constant.

---

### Q A3
A planet's mean distance from the Sun is 4 times that of the Earth. Find its period.

**ANSWER:**
```
   T^2 ~ a^3       ->     T^2 = 4^3 = 64      ->     T = 8 years
```

---

## Topic: Newton's law and G

### Q A4
State Newton's universal law of gravitation and write its formula.

**ANSWER:** Every body in the universe attracts every other body with a force directly
proportional to the product of their masses and inversely proportional to the square of
the distance between them, acting along the line joining them.
```
                       m1 m2
             F  =  G  --------
                        r^2
```

---

### Q A5
Write the vector form of Newton's law of gravitation. What does the minus sign show?

**ANSWER:**
```
        ->            G m1 m2      ^
        F 21   =   -  ---------    r          ( r_hat points from m1 to m2 )
                        r^2

   The MINUS sign shows that the force is ATTRACTIVE - it acts opposite to r_hat,
   i.e. towards the attracting mass.
```

---

### Q A6
Define the universal gravitational constant G. Give its SI unit and dimensional formula.

**ANSWER:**
```
   DEFINITION:  G is the force of attraction between two bodies of unit mass (1 kg
                each) separated by unit distance (1 m).

   VALUE      :  6.67 x 10^-11
   SI UNIT    :  N m^2 kg^-2
   DIMENSIONS :  [ M^-1 L^3 T^-2 ]
```

---

### Q A7
Distinguish between g and G (any two points).

**ANSWER:**
```
   G is a UNIVERSAL CONSTANT, the same everywhere in the universe;
   g is a VARIABLE, changing with height, depth, latitude and planet.

   G is a SCALAR with unit N m^2 kg^-2 ;
   g is a VECTOR (an acceleration) with unit m s^-2.
```

---

### Q A8
Two bodies of mass 1 kg each are placed 1 m apart. Find the force between them.

**ANSWER:**
```
   F = G (1)(1) / 1^2  =  6.67 x 10^-11  N
```

---

## Topic: Acceleration due to gravity

### Q A9
Write the relation between g and G. What is the mass of the Earth from it?

**ANSWER:**
```
              G M                      g R^2       9.8 x (6.4 x 10^6)^2
     g  =   --------     ->    M  =  --------  =  ----------------------
              R^2                       G             6.67 x 10^-11

                                   =   6 x 10^24  kg
```

---

### Q A10
What is the value of g at the centre of the Earth? Why?

**ANSWER:** **Zero.** By `g_d = g(1 - d/R)`, at the centre d = R so g = 0.
Physically, a body at the centre is surrounded by shells that pull it equally in all
directions, so the pulls cancel completely.

---

### Q A11
Where on the Earth's surface is g maximum and where is it minimum? Give the reason.

**ANSWER:**
```
   MAXIMUM at the POLES ( g = 9.83 m/s^2 )
   MINIMUM at the EQUATOR ( g = 9.78 m/s^2 )

   TWO REASONS, both act the same way:
     (i)  the polar radius is SMALLER (6357 km vs 6378 km) and g ~ 1/R^2
     (ii) the rotational reduction R omega^2 cos^2(lambda) is ZERO at the poles
          and MAXIMUM at the equator.
```

---

### Q A12
If the Earth suddenly stopped rotating, what would happen to g at the equator and at the
poles?

**ANSWER:** At the **equator g would INCREASE** by `R omega^2 = 0.034 m/s^2`
(the rotational reduction disappears).
At the **poles g would NOT change at all**, because rotation had no effect there
(`cos 90 = 0`).

---

### Q A13
A body weighs 63 N on the surface of the Earth. What is the gravitational force on it at
a height equal to half the radius of the Earth?

**ANSWER:**
```
                R^2            R^2         ( 2 )^2      4
   g_h  =  g ----------- = g ---------  = g(---)    = --- g
              (R + R/2)^2     (1.5R)^2      ( 3 )      9

                        4
   New weight   =   63 x ---   =   28  N
                        9
```

---

### Q A14
What is the value of g in a mine 100 km deep? (R = 6400 km)

**ANSWER:**
```
                 (      d )              (     100  )
   g_d  =  g     ( 1 -  --- )  =  9.8  x ( 1 - ---- )  = 9.8 x 0.9844  = 9.65 m/s^2
                 (      R  )             (    6400  )
```

---

### Q A15
Which decreases faster - g going up by 1 km, or g going down by 1 km? Why?

**ANSWER:** **Going UP.** The fractional fall going up is `2h/R`, going down it is only
`d/R`. So for the same distance the loss going up is **twice** the loss going down.

---

## Topic: Potential and potential energy

### Q A16
Define gravitational potential. Give its SI unit and dimensional formula.

**ANSWER:** The work done in bringing a **unit mass** from infinity to that point.
```
     V = - G M / r        unit: J kg^-1        dimensions: [ L^2 T^-2 ]
```

---

### Q A17
Define gravitational field intensity. Give its unit.

**ANSWER:** The gravitational force experienced by a **unit mass** placed at that point.
```
     E = F / m = G M / r^2       unit: N kg^-1 (= m s^-2)     dimensions: [ L T^-2 ]
```
At the Earth's surface the field intensity is exactly `g`.

---

### Q A18
Why is the gravitational potential energy of a system negative?

**ANSWER:** Because gravity is **attractive** and we take U = 0 at infinite separation.
As the bodies come closer, gravity does positive work, so the system **loses** potential
energy from that zero level - giving a negative value. A negative U means the bodies
are **bound** and energy must be supplied from outside to separate them.

---

### Q A19
The gravitational potential energy of a body on the Earth's surface is written as
`U = -GMm/R`, but in mechanics we use `mgh`. Are they contradictory?

**ANSWER:** No. `mgh` is not a separate formula - it is the **change** in `-GMm/r`
for a small height h near the surface:
```
                        G M m h            G M m h        ( G M )
   Delta U   =    ---------------  =    -----------  =    (-----) m h  =  m g h
                     R ( R + h )            R^2           ( R^2 )
                                        (using h << R)
```

---

## Topic: Escape velocity

### Q A20
Define escape velocity. Give its value for the Earth.

**ANSWER:** The **minimum** velocity with which a body must be projected from the surface
of a planet so that it just escapes the planet's gravitational field and never returns.
```
     v_e = sqrt( 2 G M / R ) = sqrt( 2 g R ) = 11.2 km/s  for the Earth
```

---

### Q A21
Does the escape velocity depend on the mass of the body projected or on the direction of
projection? Explain.

**ANSWER:** **Neither.**
The mass m cancels in `(1/2) m v_e^2 = GMm/R`, so v_e is independent of the body's mass.
Energy is a scalar, so the direction of projection also does not matter (as long as the
body is not fired into the ground).

---

### Q A22
Why does the Moon have no atmosphere?

**ANSWER:** The escape velocity on the Moon is only **2.38 km/s** (its mass and radius
are small). This is comparable to, or less than, the rms speed of gas molecules at the
Moon's surface temperature, so gas molecules escape one by one. Over billions of years
all the gas has been lost.

---

### Q A23
Define orbital velocity. What is its value for a satellite close to the Earth's surface?

**ANSWER:** The velocity required to put a satellite into a stable circular orbit around
a planet.
```
     v_o = sqrt( G M / r )        near the surface  v_o = sqrt( g R ) = 7.9 km/s
```

---

### Q A24
Write the relation between escape velocity and orbital velocity.

**ANSWER:**
```
     v_e  =  sqrt(2)  x  v_o   =  1.414 v_o

     11.2 km/s = 1.414 x 7.9 km/s

  So a 41.4 % increase in the orbital speed makes the satellite escape.
```

---

## Topic: Satellites and weightlessness

### Q A25
What is a geostationary satellite? Give one use.

**ANSWER:** A satellite that revolves in the **equatorial plane** from **west to east**
with a period of exactly **24 hours**, so it appears permanently **fixed** at one point
in the sky. Height about **36 000 km**.
**Use:** television and DTH broadcasting (a fixed dish antenna works only because of it).

---

### Q A26
What is a polar satellite? Give one use.

**ANSWER:** A satellite whose orbit passes over the **north and south poles**, at a low
height of 500-800 km with a period of about 100 minutes. Because the Earth rotates
beneath it, it scans the whole globe in a day.
**Use:** remote sensing, mapping of natural resources, and detailed weather data.

---

### Q A27
What is the minimum possible period of a satellite of the Earth?

**ANSWER:**
```
                        (  R  )              ( 6.4 x 10^6 )
   T_min  =   2 pi sqrt (-----) = 2 x 3.14 x sqrt(----------) = 5077 s = 84.6 minutes
                        (  g  )              (     9.8    )
```

---

### Q A28
Why does the total energy of a satellite come out negative?

**ANSWER:** Because the satellite is **bound** to the Earth. `TE = -GMm/2r`. A negative
total energy means the satellite has less energy than the zero it would need to reach
infinity, so it can only move in a closed orbit.

---

### Q A29
What is weightlessness? Why does an astronaut in an orbiting satellite feel weightless?

**ANSWER:** Weightlessness is the state in which the **apparent weight (the normal
reaction N) is zero**. In an orbiting satellite, both the satellite and the astronaut are
in free fall with the **same acceleration** `g_h = GM/r^2`, so the floor does not have to
push the astronaut at all: `N = m(g_h - g_h) = 0`.
**Gravity is NOT zero there** - only the contact force is.

---

### Q A30
A man in a lift whose cable has snapped drops a coin. What happens to the coin as seen
by the man?

**ANSWER:** It appears to **float** beside him, motionless. Both the man and the coin are
falling with the same acceleration g, so relative to him the coin has zero acceleration
and zero relative velocity.

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

### Q B1  *** MOST ASKED ***
Derive an expression for the variation of acceleration due to gravity with **altitude**.

**ANSWER:**
```
                                       o body at height h
                                       |
             .-------------------------+---------.
           .            SURFACE        |           .
          .                            |  R         .
          .            x CENTRE  ------+             .
            .                                      .
               ' - - - - - - - - - - - - - - -  '

  At the SURFACE, distance from the centre = R :

              G M
      g   =  ------                                       ... (1)
              R^2

  At HEIGHT h, distance from the centre = R + h :

                  G M
      g_h  =  -----------                                 ... (2)
               (R + h)^2

  Dividing (2) by (1):

       g_h          R^2                                R^2
      -----  =  -----------          ->     g_h  =  g -----------      EXACT
        g        (R + h)^2                            (R + h)^2

  Writing (R + h)^2 = R^2 (1 + h/R)^2 :

                    (      h )^-2
      g_h  =   g    ( 1 + --- )
                    (      R )

  If h is MUCH SMALLER than R, expand by the binomial theorem and keep two terms:

      +-----------------------------------------+
      |                   (       2 h )         |
      |      g_h   =   g  ( 1  -  ---- )        |
      |                   (        R  )         |
      +-----------------------------------------+

  So g DECREASES with height. Fractional decrease = 2h/R.
  At h = R,  g_h = g/4 = 2.45 m/s^2.  g becomes zero only at infinity.
```

---

### Q B2  *** MOST ASKED ***
Derive an expression for the variation of acceleration due to gravity with **depth**.
What is the value of g at the centre of the Earth?

**ANSWER:**
```
        .- - - - - - - - - - - - - - .
      .        OUTER SHELL              .
     .     ____________________          .
     .    /  INNER SPHERE      \         .        body at depth d,
     .   |   radius (R - d)     |      o<-- at distance (R-d) from centre
     .   |   mass   M'          |        .
     .    \        x C         /         .
     .     \____________________/        .    OUTER SHELL exerts ZERO force
      .                                .         (shell theorem)
         ' - - - - - - - - - - - '

  Let the Earth have uniform density rho.

     Whole Earth:      M  = (4/3) pi R^3 rho
     Inner sphere:     M' = (4/3) pi (R - d)^3 rho

  At the SURFACE:

              G M         G (4/3) pi R^3 rho        4
      g  =  -------  =  ----------------------  = ----- pi G R rho        ... (1)
              R^2               R^2                 3

  At DEPTH d, only M' pulls the body (the shell above contributes nothing):

               G M'         G (4/3) pi (R-d)^3 rho       4
      g_d  =  --------  =  ------------------------ =  ----- pi G (R-d) rho   ...(2)
              (R-d)^2            (R - d)^2               3

  Dividing (2) by (1):

       g_d       R - d              d
      -----  =  -------  =   1  -  ---
        g          R                R

      +-----------------------------------------+
      |                   (        d )          |
      |      g_d   =   g  ( 1  -  --- )         |
      |                   (        R )          |
      +-----------------------------------------+

  AT THE CENTRE d = R, so g_d = 0. A body at the centre of the Earth is WEIGHTLESS.
```

---

### Q B3
Explain the variation of g with the **rotation of the Earth** (latitude). At which place
is the effect greatest, and at which place is it zero?

**ANSWER:**
```
                        N
                        |
              omega  <--+
                       /|
                     /  |
              . - -+- - + - - .
          .      /  \    |     P  .    <-- body at LATITUDE lambda
        .       /    \   |    /     .
       .    r  /      \  |   /       .        r = R cos ( lambda )
       .      +--------\-+--/ lambda .
       .                \|/          .
       .                 O           .
        .                            .
             ' - - - - - - - - - '

  A body at latitude lambda travels in a circle of radius  r = R cos(lambda)
  with the Earth's angular speed omega.

  Part of the gravitational pull is used up as the centripetal force for this
  circle, so the apparent (effective) value of g is reduced:

      +-------------------------------------------------------+
      |                                                       |
      |     g'   =   g   -   R omega^2  cos^2 ( lambda )      |
      |                                                       |
      +-------------------------------------------------------+

  AT THE EQUATOR  lambda = 0,   cos^2 = 1  ->  g' = g - R omega^2   MINIMUM
                  reduction  =  6.4x10^6 x (7.27x10^-5)^2 = 0.034 m/s^2

  AT THE POLES    lambda = 90,  cos^2 = 0  ->  g' = g                MAXIMUM
                  The effect is ZERO at the poles because a body there lies ON
                  the axis and does not move in a circle at all.
```

---

### Q B4
At what angular speed must the Earth rotate so that bodies at the equator become
weightless? What would the length of the day be?

**ANSWER:**
```
  Weightless at the equator means the effective g there is zero:

           g   -   R omega^2   =   0

                        (  g  )         (     9.8      )
           omega  =  sqrt(-----)  =  sqrt(-------------)   =  sqrt(1.531 x 10^-6)
                        (  R  )         ( 6.4 x 10^6   )

                  =   1.24 x 10^-3  rad/s

              2 pi          2 x 3.1416
      T  =  --------  =  ----------------  =  5075 s  =  84.6 min  =  1.41 hours
             omega        1.24 x 10^-3

  ANSWER: omega = 1.24 x 10^-3 rad/s; the day would be about 1.4 hours,
          i.e. the Earth would have to spin about 17 TIMES FASTER.
```

---

### Q B5  *** MOST ASKED ***
Derive an expression for the **escape velocity** of a body from the surface of a planet.
Show that it is `sqrt(2gR)` and calculate its value for the Earth.

**ANSWER:**
```
  Let a body of mass m be projected vertically from the surface with speed v_e.

  ENERGY AT THE SURFACE (r = R):

       KE  =  (1/2) m v_e^2            PE  =  -  G M m / R

       TOTAL  =  (1/2) m v_e^2  -  G M m / R

  "JUST ESCAPES" means it reaches INFINITY with zero speed left:

       AT INFINITY   KE = 0 ,  PE = 0     ->     TOTAL = 0

  By CONSERVATION OF ENERGY:

       (1/2) m v_e^2   -   G M m / R   =   0

       (1/2) m v_e^2   =   G M m / R

               v_e^2   =   2 G M / R

      +-------------------------------------------------+
      |                                                 |
      |     v_e  =  sqrt ( 2 G M / R )                  |
      |                                                 |
      |     since  G M = g R^2 ,                        |
      |                                                 |
      |     v_e  =  sqrt ( 2 g R )                      |
      |                                                 |
      +-------------------------------------------------+

  FOR THE EARTH:

     v_e = sqrt( 2 x 9.8 x 6.4 x 10^6 ) = sqrt( 1.2544 x 10^8 )

         = 1.12 x 10^4 m/s  =  11.2 km/s

  NOTE: v_e is independent of the mass of the body and of the direction of projection.
```

---

### Q B6  *** MOST ASKED ***
Derive expressions for the **orbital velocity** of a satellite and its **time period**.

**ANSWER:**
```
                              . - - o - - .        o = satellite (mass m)
                          .        SAT      .
                       .            |         .
                      .             | F        .      r  =  R + h
                     .        . - - v - .       .
                     .      .   EARTH   .       .
                     .     .     x      .       .
                     .      .  M , R    .       .
                     .        ' - - - '         .
                       .                     .
                          .               .
                              ' - - - '

  For a circular orbit of radius r = R + h, the GRAVITATIONAL FORCE supplies
  exactly the CENTRIPETAL FORCE:

            m v_o^2            G M m
           ---------   =    ----------
               r                r^2

              v_o^2   =    G M / r

      +--------------------------------------------------------+
      |                (  G M  )          (   g R^2   )        |
      |     v_o = sqrt ( ------) = sqrt   ( --------- )        |
      |                (   r   )          (   R + h   )        |
      |                                                        |
      |     CLOSE TO THE SURFACE  (h = 0):                     |
      |          v_o = sqrt( g R ) = 7.9 km/s                  |
      +--------------------------------------------------------+

  TIME PERIOD = (circumference) / (speed):

               2 pi r              r^2                    r^3
      T  =  ------------ ,  T^2 = 4 pi^2 ------- = 4 pi^2 -----
                v_o                     G M / r            G M

      +--------------------------------------------------------+
      |                     (    r^3    )         (  (R+h)^3  )|
      |     T  =  2 pi sqrt ( --------- ) = 2 pi sqrt( -------- )|
      |                     (    G M    )         (   g R^2   )|
      |                                                        |
      |     Notice  T^2  is proportional to  r^3               |
      |     -  this is KEPLER'S THIRD LAW again.               |
      +--------------------------------------------------------+

  Least possible period (grazing orbit, h = 0):
      T_min = 2 pi sqrt(R/g) = 84.6 minutes.
```

---

### Q B7
Obtain expressions for the kinetic, potential and total energy of a satellite in a
circular orbit. Why is the total energy negative?

**ANSWER:**
```
  From the orbit condition       m v_o^2 / r  =  G M m / r^2
                          so     m v_o^2      =  G M m / r

                                                G M m
  KINETIC ENERGY     KE  =  (1/2) m v_o^2  =  --------        (POSITIVE)
                                                 2 r

                                                G M m
  POTENTIAL ENERGY   PE  =                  -  --------       (NEGATIVE)
                                                   r

  TOTAL ENERGY:

               G M m       G M m       G M m - 2 G M m            G M m
      E  =   --------  -  -------  =  ------------------   =   -  -------
                2 r          r               2 r                    2 r

      +------------------------------------------------------------+
      |                       G M m                                |
      |      TOTAL ENERGY = - -------  =  - KE  =  PE / 2          |
      |                        2 r                                 |
      |                                                            |
      |      KE : PE : TE   =   1 : -2 : -1                        |
      +------------------------------------------------------------+

  WHY NEGATIVE: because the satellite is BOUND. Zero total energy is the energy
  needed just to reach infinity; a negative value means the satellite falls short
  of that and can only travel on a closed orbit. The magnitude |E| = GMm/2r is
  called the BINDING ENERGY - the energy that must be supplied for it to escape.
```

---

### Q B8
Prove Kepler's second law (the law of areas) from the conservation of angular momentum.

**ANSWER:**
```
  In a small time dt the planet's position vector r changes by dr.
  The area swept out is the area of the thin triangle of sides r and dr :

               1     ->    ->
      dA  =   --- |  r  x  dr  |
               2

  Divide by dt :

       dA        1  |  ->     ->  |       1   |  ->   -> |
      ----  =   --- |  r  x   v   |   =  ---  |  r  x v  |
       dt        2  |             |       2   |          |

  With  p = m v ,  i.e.  v = p / m :

       dA        1    |  ->    -> |         L
      ----  =  -----  |  r  x  p  |   =   -------
       dt       2 m   |           |        2 m

  Gravity is a CENTRAL force: F is along r, so the torque about the Sun is

          ->      ->    ->
         tau  =   r  x  F   =   0            (parallel vectors)

  Hence      dL / dt  =  0     ->    L is CONSTANT.

  Therefore  dA / dt  =  L / 2m  =  CONSTANT.

  EQUAL AREAS ARE SWEPT IN EQUAL TIMES.                                 PROVED.

  CONSEQUENCE: near the Sun r is small, so v must be large - the planet moves
  FASTEST at perihelion and SLOWEST at aphelion.
```

---

### Q B9
Distinguish between a geostationary satellite and a polar satellite. Give two uses of each.

**ANSWER:**
```
  +----------------------+---------------------------+---------------------------+
  |                      |    GEOSTATIONARY          |    POLAR                  |
  +----------------------+---------------------------+---------------------------+
  |  Time period         |  exactly 24 hours         |  about 100 minutes        |
  |  Height              |  about 36 000 km          |  500 to 800 km            |
  |  Orbital speed       |  about 3.08 km/s          |  about 7.5 km/s           |
  |  Plane of orbit      |  EQUATORIAL plane         |  passes over BOTH POLES   |
  |  Direction           |  west to east, with Earth |  north - south            |
  |  Appears to          |  stand STILL in the sky   |  move rapidly             |
  |  Coverage            |  one fixed region always  |  the whole Earth each day |
  +----------------------+---------------------------+---------------------------+

  USES OF A GEOSTATIONARY SATELLITE:
     1. Television, DTH and radio broadcasting (a fixed dish always points at it)
     2. Telecommunication and weather watch over one fixed region
     ( Indian examples: INSAT, GSAT )

  USES OF A POLAR SATELLITE:
     1. Remote sensing of crops, forests, minerals and water resources
     2. Detailed weather / atmospheric data and military reconnaissance
     ( Indian examples: IRS, CARTOSAT, OCEANSAT )
```

---

### Q B10
Explain weightlessness in a lift and in an orbiting satellite.

**ANSWER:**
```
  What we FEEL as weight is the NORMAL REACTION N from the floor, not mg.

  IN A LIFT with acceleration a :        N  -  m g  =  m a   (taking up positive)

  +--------------------------------+---------------------+--------------------+
  |  Lift at rest / constant speed |   N = m g           |  normal            |
  |  Accelerating UPWARD           |   N = m ( g + a )   |  feels HEAVIER     |
  |  Accelerating DOWNWARD         |   N = m ( g - a )   |  feels LIGHTER     |
  |  CABLE SNAPS ( a = g )         |   N = 0             |  WEIGHTLESS        |
  +--------------------------------+---------------------+--------------------+

  IN FREE FALL the man, the lift and the weighing machine all fall with the SAME
  acceleration g. The floor need not push at all, so N = 0 and the machine reads zero.

  IN A SATELLITE:
      the satellite moves in a circle, so its centripetal acceleration is
                   a = G M / r^2 = g_h
      exactly the value of g at that height. The astronaut inside experiences the
      same g_h and so has the same acceleration. Therefore

                   N  =  m ( g_h  -  g_h )  =  0

      He floats. GRAVITY IS NOT ZERO (at 400 km, g is still about 8.7 m/s^2);
      it is the CONTACT FORCE that has vanished.
```

---

### Q B11
Calculate the mass and mean density of the Earth from g, G and R.

**ANSWER:**
```
  MASS:            G M                    g R^2
                 g = -----     ->     M = -------
                     R^2                    G

           9.8  x  (6.4 x 10^6)^2       9.8 x 4.096 x 10^13      4.014 x 10^14
     M  =  ------------------------  =  --------------------  =  ---------------
              6.67 x 10^-11               6.67 x 10^-11           6.67 x 10^-11

        =  6.02 x 10^24  kg

  DENSITY:      M = (4/3) pi R^3 rho    so    g = (4/3) pi G R rho

                     3 g                     3 x 9.8
        rho  =   -----------  =  -----------------------------------------
                  4 pi G R        4 x 3.1416 x 6.67 x 10^-11 x 6.4 x 10^6

                    29.4
             =  --------------   =   5.48 x 10^3  kg m^-3
                5.365 x 10^-3

  ANSWER:  M = 6 x 10^24 kg  ,   rho = 5.5 x 10^3 kg/m^3  ( = 5.5 g/cm^3 )

  NOTE: surface rock has a density of only 2.7 g/cm^3, so the Earth's core must
  be much denser - this is evidence for an iron core.
```

---

### Q B12
A satellite orbits the Earth at a height of 3600 km. Find its orbital velocity and its
period of revolution.

**ANSWER:**
```
  r = R + h = 6400 + 3600 = 10 000 km = 1 x 10^7 m
  G M = g R^2 = 9.8 x (6.4 x 10^6)^2 = 4.014 x 10^14 m^3 s^-2

               ( G M )         ( 4.014 x 10^14 )
  v_o = sqrt   (-----)  = sqrt (---------------)  = sqrt( 4.014 x 10^7 )
               (  r  )         (   1 x 10^7    )

      = 6.34 x 10^3  m/s   =  6.34 km/s

           2 pi r        2 x 3.1416 x 1 x 10^7
  T  =    --------  =   -----------------------  =  9910 s  =  165 minutes
             v_o             6.34 x 10^3

  ANSWER:  v_o = 6.34 km/s ,  T = 165 min (about 2 h 45 min)
```

---

### Q B13
At what height above the Earth's surface, and at what depth below it, does g fall by 2 %?
Compare the two answers.

**ANSWER:**
```
  HEIGHT:      fractional fall = 2h / R = 0.02

                     0.02 x 6400
               h  =  ------------  =  64  km
                          2

  DEPTH:       fractional fall = d / R = 0.02

               d  =  0.02 x 6400   =  128  km

  ANSWER:  h = 64 km ,  d = 128 km.

  COMPARISON:  d = 2h. You must go TWICE AS DEEP as you go high to lose the same
  fraction of g. In other words g falls off FASTER going up than going down.
```

---

### Q B14
Find the height and orbital speed of a **geostationary** satellite.

**ANSWER:**
```
  For a geostationary satellite  T = 24 h = 86 400 s.

                     ( r^3 )                        4 pi^2 r^3
     T  =  2 pi sqrt (-----)     ->      T^2  =  ---------------
                     ( G M )                          G M

              ( G M T^2 ) 1/3       ( 4.014 x 10^14  x  (86400)^2 ) 1/3
     r   =    (---------)      =    ( --------------------------- )
              ( 4 pi^2  )           (       4 x (3.1416)^2        )

              ( 4.014 x 10^14 x 7.465 x 10^9 ) 1/3      ( 2.996 x 10^24 ) 1/3
         =    ( ---------------------------- )      =   ( ------------- )
              (            39.478            )          (    39.478     )

         =    ( 7.59 x 10^22 ) 1/3    =    4.23 x 10^7  m   =  42 300 km

     HEIGHT   h  =  42 300  -  6 400   =   35 900 km   (about 36 000 km)

     SPEED    v  =  2 pi r / T  =  ( 2 x 3.1416 x 4.23 x 10^7 ) / 86400

                 =  3.08 x 10^3 m/s   =   3.08 km/s

  ANSWER:  h = about 36 000 km ,  v = 3.08 km/s
```

---

### Q B15
A rocket is fired vertically upward from the Earth's surface with a speed of 5 km/s.
How high does it rise? (Neglect air resistance; R = 6.4 x 10^6 m, GM = 4.014 x 10^14)

**ANSWER:**
```
  CONSERVE ENERGY between the surface and the highest point (where v = 0):

       1                G M m              G M m
      --- m v^2   -   ---------   =   -  ---------
       2                  R                  r

  Divide by m and substitute  G M = g R^2 = 4.014 x 10^14 :

       1                                  4.014 x 10^14
      --- (5 x 10^3)^2   -   6.272 x 10^7   =   -  --------------
       2                                                r

       1.25 x 10^7   -   6.272 x 10^7   =   -  4.014 x 10^14 / r

              - 5.022 x 10^7            =   -  4.014 x 10^14 / r

                    4.014 x 10^14
          r   =   -----------------   =   7.99 x 10^6  m
                    5.022 x 10^7

          h   =   7.99 x 10^6  -  6.4 x 10^6   =   1.59 x 10^6 m  =  1590 km

  ANSWER:  about 1600 km above the surface.

  ( CHECK: 5 km/s is well below the escape speed of 11.2 km/s, so it must come
    back down - and indeed it stops at a finite height. )
```

---

### Q B16
A planet has a mass 318 times that of the Earth and a radius 11.2 times that of the
Earth. Find its escape velocity.

**ANSWER:**
```
                ( M )                            ( M_p     R_e )
   v_e ~ sqrt  ( --- )       ->     v_p  =  v_e sqrt( ----- x ----- )
                ( R )                            ( M_e     R_p )

               ( 318 )
   v_p = 11.2 sqrt(-----)   =  11.2  x  sqrt( 28.39 )  = 11.2 x 5.33 = 59.7 km/s
               (11.2 )

   ANSWER:  about 59.7 km/s   (this planet is Jupiter)
```

---

### Q B17
The perihelion and aphelion distances of a planet are 1.0 AU and 1.8 AU. If its speed at
perihelion is 30 km/s, find its speed at aphelion.

**ANSWER:**
```
  At perihelion and aphelion the velocity is perpendicular to r, so angular
  momentum conservation gives

           m v1 r1  =  m v2 r2      ->      v1 r1  =  v2 r2

               v1 r1        30  x  1.0
       v2  =  --------  =  ------------   =   16.7  km/s
                 r2             1.8

  ANSWER:  16.7 km/s  (slower at aphelion, exactly as Kepler's second law demands)
```

---

### Q B18
State and explain the shell theorems. Why do we take r as the distance from the
**centre** of the Earth?

**ANSWER:**
```
  SHELL THEOREM 1 (mass OUTSIDE the shell):
      A uniform spherical shell attracts a point mass lying outside it as if the
      whole mass of the shell were concentrated at its CENTRE.

  SHELL THEOREM 2 (mass INSIDE the shell):
      The net gravitational force on a point mass placed anywhere inside a
      uniform spherical shell is ZERO. (The potential inside is not zero -
      it is constant at -GM/R.)

  WHY r IS FROM THE CENTRE:
      A solid sphere like the Earth is a stack of concentric shells. By theorem 1
      every one of those shells acts, on an external body, as though its mass sat
      at the centre. So the whole Earth behaves as a POINT MASS M at its centre,
      and the correct distance to use is measured from the CENTRE - which is why
      a body on the surface uses r = R = 6400 km and a satellite at height h uses
      r = R + h.

      Theorem 2 is what makes g fall off with depth: at depth d the shells above
      you pull with zero net force, so only the inner sphere of radius (R - d)
      counts.
```

---

# ===============================================================
# SECTION C — LONG ANSWER (8 marks)
# ===============================================================

### Q C1
State Kepler's laws of planetary motion. Derive the relation between g and G, and hence
find the mass and the mean density of the Earth.

**MODEL ANSWER — mark split**
```
  (a)  KEPLER'S THREE LAWS, stated in full                        ... 3 marks
       + a labelled ellipse diagram showing the Sun at a focus,
         and an equal-areas diagram

  (b)  RELATION BETWEEN g AND G                                    ... 2 marks
           weight of a body           W = m g
           gravitational pull         F = G M m / R^2
           these are the same force   ->   m g = G M m / R^2
                                      ->   g   = G M / R^2
           note that m cancels: all bodies fall at the same rate.

  (c)  MASS OF THE EARTH                                           ... 2 marks
           M = g R^2 / G = 9.8 x (6.4x10^6)^2 / 6.67x10^-11 = 6 x 10^24 kg

  (d)  MEAN DENSITY                                                ... 1 mark
           g = (4/3) pi G R rho   ->   rho = 3g / (4 pi G R) = 5.5 x 10^3 kg/m^3
           (remark: surface rock is only 2.7 g/cm^3, so the core is denser)
```

---

### Q C2
Derive expressions for the variation of acceleration due to gravity with altitude and
with depth. Compare the two and sketch the variation of g from the centre of the Earth
outwards.

**MODEL ANSWER — mark split**
```
  (a)  ALTITUDE, with diagram and full derivation                  ... 3 marks
           g_h = g R^2 / (R+h)^2   (exact)
           g_h = g (1 - 2h/R)      (h << R, binomial expansion)

  (b)  DEPTH, with diagram, using the shell theorem                ... 3 marks
           only the inner sphere of radius (R - d) contributes
           g_d = g (1 - d/R)  ;  at the centre g = 0

  (c)  COMPARISON + GRAPH                                          ... 2 marks

       g
       |            g_max
     9.8|              *
       |             /|\
       |            / | \  .
       |           /  |   \    .
       |          /   |     \       .           OUTSIDE: g ~ 1/r^2
       |         /    |       \           .
       |        /     |         \                 .   .
       |       /  INSIDE: g ~ r   \                        .  .
       |      /       |
       +-----+--------+------------------------------------------> r
             C        R
          (g = 0)  (surface)

       For the same small distance x, going UP loses 2x/R of g but going DOWN
       loses only x/R. Hence g falls FASTER with height than with depth, and
       g at height h equals g at depth d when d = 2h.
```

---

### Q C3
Define escape velocity and orbital velocity. Derive expressions for both, obtain the
relation between them, and explain why the Moon has no atmosphere.

**MODEL ANSWER — mark split**
```
  (a)  DEFINITIONS of escape velocity and orbital velocity          ... 1 mark

  (b)  ESCAPE VELOCITY - energy derivation                          ... 3 marks
           (1/2) m v_e^2  -  G M m / R  =  0   (total energy = 0 at infinity)
           v_e = sqrt(2 G M / R) = sqrt(2 g R) = 11.2 km/s
           independent of the mass of the body and of the direction

  (c)  ORBITAL VELOCITY - centripetal derivation, with diagram      ... 2 marks
           m v_o^2 / r = G M m / r^2   ->  v_o = sqrt(G M / r)
           near the surface  v_o = sqrt(g R) = 7.9 km/s

  (d)  RELATION                                                     ... 1 mark
           v_e = sqrt(2) x v_o  =  1.414 v_o
           an increase of 41.4 % in orbital speed makes a satellite escape

  (e)  WHY THE MOON HAS NO ATMOSPHERE                               ... 1 mark
           v_e (Moon) = 2.38 km/s, small because the Moon's mass and radius are
           small. This is comparable to the rms speed of gas molecules at the
           lunar surface temperature, so gas molecules escape steadily. Over
           geological time all the gas has been lost. The Earth's 11.2 km/s is
           far above the rms speed of air molecules (about 0.5 km/s), so the
           Earth keeps its atmosphere.
```

---

### Q C4
What is a satellite? Derive the expressions for its orbital velocity and time period.
Obtain the kinetic, potential and total energy of an orbiting satellite. What is a
geostationary satellite and what are its uses?

**MODEL ANSWER — mark split**
```
  (a)  DEFINITION + orbit diagram                                   ... 1 mark
       A satellite is a body revolving around a planet under the planet's
       gravitational attraction; the gravitational pull supplies the
       centripetal force, so it is in perpetual free fall.

  (b)  ORBITAL VELOCITY                                             ... 2 marks
           m v_o^2 / r = G M m / r^2   ->   v_o = sqrt(G M / r)
           near the surface v_o = sqrt(gR) = 7.9 km/s

  (c)  TIME PERIOD                                                  ... 2 marks
           T = 2 pi r / v_o = 2 pi sqrt(r^3 / G M)
           so T^2 ~ r^3 - Kepler's third law recovered
           least period = 2 pi sqrt(R/g) = 84.6 minutes

  (d)  ENERGY                                                       ... 2 marks
           KE = + G M m / 2r
           PE = - G M m / r
           TE = - G M m / 2r  =  - KE  =  PE/2      (NEGATIVE = bound orbit)
           binding energy = G M m / 2r

  (e)  GEOSTATIONARY SATELLITE                                      ... 1 mark
           T = 24 h, equatorial plane, west to east, circular orbit,
           h = 36 000 km, v = 3.08 km/s, appears fixed in the sky.

  (f)  USES                                                         ... 1 mark
           TV / DTH broadcasting, telecommunication, weather monitoring over a
           fixed region. Three of them 120 degrees apart cover the whole Earth
           except the poles. Indian examples: INSAT, GSAT.
```

---

### Q C5
Explain how the value of g varies with the shape and the rotation of the Earth. Explain
weightlessness in a freely falling lift and in an orbiting satellite.

**MODEL ANSWER — mark split**
```
  (a)  SHAPE                                                        ... 2 marks
       The Earth is an oblate spheroid: R_equator = 6378 km,
       R_pole = 6357 km. Since g = GM/R^2 varies as 1/R^2,
       g is GREATER at the poles than at the equator.

  (b)  ROTATION / LATITUDE, with diagram and derivation             ... 3 marks
       A body at latitude lambda moves in a circle of radius R cos(lambda);
       part of gravity supplies the centripetal force, so

              g'  =  g  -  R omega^2 cos^2 ( lambda )

       Maximum reduction at the equator (0.034 m/s^2), zero at the poles.
       Weightlessness at the equator would need omega = sqrt(g/R)
       = 1.24 x 10^-3 rad/s, a day of 1.4 hours.

  (c)  WEIGHTLESSNESS IN A FREELY FALLING LIFT                      ... 1.5 marks
       Apparent weight = normal reaction N.
       N = m(g - a); in free fall a = g so N = 0. The weighing machine reads
       zero and the man floats, though gravity is at full strength.

  (d)  WEIGHTLESSNESS IN A SATELLITE                                ... 1.5 marks
       The satellite's centripetal acceleration equals the local g_h; the
       astronaut has the same acceleration, so N = m(g_h - g_h) = 0.
       Gravity is NOT zero in orbit; only the contact force is.
```

---

# WHICH QUESTIONS REPEAT MOST

```
  +------+---------------------------------------------+---------+-------------+
  | RANK |  QUESTION TYPE                              | SECTION |  CHANCE     |
  +------+---------------------------------------------+---------+-------------+
  |   1  |  Variation of g with ALTITUDE and/or DEPTH  |    B    |  VERY HIGH  |
  |   2  |  Derive ESCAPE VELOCITY (+ its value)       |    B    |  VERY HIGH  |
  |   3  |  Orbital velocity and time period           |    B    |  VERY HIGH  |
  |   4  |  State KEPLER'S THREE LAWS                  |    A    |  VERY HIGH  |
  |   5  |  Relation between g and G / mass of Earth   |   A/B   |  HIGH       |
  |   6  |  Geostationary satellite - define + uses    |   A/B   |  HIGH       |
  |   7  |  Why the Moon has no atmosphere             |    A    |  HIGH       |
  |   8  |  Units and dimensions of G                  |    A    |  HIGH       |
  |   9  |  Why is gravitational PE (or TE) negative   |    A    |  HIGH       |
  |  10  |  Weightlessness (lift / satellite)          |   A/B   |  MEDIUM     |
  |  11  |  Variation of g with latitude / rotation    |    B    |  MEDIUM     |
  |  12  |  Energy of an orbiting satellite            |    B    |  MEDIUM     |
  |  13  |  Numerical: g at a given height or depth    |   A/B   |  MEDIUM     |
  |  14  |  Numerical: escape velocity of a planet     |   A/B   |  MEDIUM     |
  |  15  |  Polar satellite - define + uses            |    A    |  MEDIUM     |
  |  16  |  Kepler 2 from angular momentum (proof)     |    B    |  LOWER      |
  |  17  |  Shell theorems                             |    B    |  LOWER      |
  |  18  |  Height of a geostationary satellite (calc) |    B    |  LOWER      |
  +------+---------------------------------------------+---------+-------------+
```

**Your 20-minute revision the night before:**
write out B1, B2, B5 and B6 from memory. Those four derivations plus Kepler's three
laws cover the top five ranks on that table.
