# Gravitation — Formula Sheet

**Physics 1st Year · Chapter 9**

Copy this by hand into a notebook. Writing it once beats reading it ten times.
Every symbol used here:

```
  G   = universal gravitational constant = 6.67 x 10^-11 N m^2 kg^-2
  M   = mass of the planet (Earth: 6 x 10^24 kg)
  R   = radius of the planet (Earth: 6.4 x 10^6 m)
  m   = mass of the small body / satellite
  g   = acceleration due to gravity at the surface = 9.8 m s^-2
  h   = HEIGHT above the surface
  d   = DEPTH below the surface
  r   = distance from the CENTRE of the planet   ( r = R + h )
  omega  = angular velocity        lambda = latitude        rho = density
```

---

# 1. NEWTON'S LAW OF GRAVITATION

```
  +----------------------------------------------------------------+
  |                                                                |
  |                        m1  m2                                  |
  |          F   =   G   ---------                                 |
  |                         r^2                                    |
  |                                                                |
  |   VECTOR FORM (force on m2 due to m1) :                        |
  |                                                                |
  |         ->            G m1 m2      ^                           |
  |         F 21   =   -  ---------    r                           |
  |                          r^2                                   |
  |                                                                |
  |   the minus sign means ATTRACTION                              |
  |                                                                |
  |         F 12   =   -  F 21          (Newton's third law)       |
  |                                                                |
  +----------------------------------------------------------------+
```

## The constant G

```
  +-------------------+-----------------------------------------------+
  |  Value (SI)       |  6.67 x 10^-11   N m^2 kg^-2                   |
  |  Value (CGS)      |  6.67 x 10^-8    dyne cm^2 g^-2                |
  |  SI units         |  N m^2 kg^-2   =   m^3 kg^-1 s^-2              |
  |  DIMENSIONS       |  [ M^-1 L^3 T^-2 ]                             |
  |  Definition       |  the force between two 1 kg masses 1 m apart   |
  |  Nature           |  scalar, TRULY universal, same everywhere      |
  +-------------------+-----------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F = G m1 m2 / r^2` | any two point masses, or two spheres (r = centre to centre) |
| vector form with minus sign | when the question says "write the vector form" |
| `[M^-1 L^3 T^-2]` | "dimensions of G" - 2 marks, pure recall |
| superposition (vector sum) | three or more masses, e.g. masses at triangle corners |

## Shell theorems

```
  +------------------------------------------------------------------+
  |  OUTSIDE a uniform shell:  it acts as if all its mass were at    |
  |                            the CENTRE.   F = G M m / r^2         |
  |                                                                  |
  |  INSIDE a uniform shell:   the net force on a mass is ZERO.      |
  |                            (the potential inside is CONSTANT,    |
  |                             equal to -GM/R, not zero)            |
  +------------------------------------------------------------------+
```

---

# 2. KEPLER'S THREE LAWS

```
  +-------+-----------------+--------------------------------------------------+
  |  LAW  |  NAME           |  STATEMENT / FORMULA                             |
  +-------+-----------------+--------------------------------------------------+
  |   1   |  LAW OF ORBITS  |  Every planet moves in an ELLIPSE with the SUN   |
  |       |                 |  at one FOCUS.                                   |
  +-------+-----------------+--------------------------------------------------+
  |   2   |  LAW OF AREAS   |  The line joining planet to Sun sweeps EQUAL     |
  |       |                 |  AREAS in EQUAL TIMES.                           |
  |       |                 |                                                  |
  |       |                 |        dA        L                               |
  |       |                 |       ----  =  -------  =  constant              |
  |       |                 |        dt        2 m                             |
  |       |                 |                                                  |
  |       |                 |  (a consequence of the conservation of           |
  |       |                 |   ANGULAR MOMENTUM, since gravity is central)    |
  +-------+-----------------+--------------------------------------------------+
  |   3   |  LAW OF PERIODS |        T^2  =  k a^3                             |
  |       |                 |                                                  |
  |       |                 |   a = SEMI-MAJOR axis; for a circle a = r        |
  |       |                 |                                                  |
  |       |                 |        T1^2 / T2^2  =  a1^3 / a2^3               |
  +-------+-----------------+--------------------------------------------------+
```

## Useful consequences of Kepler 2

```
  At perihelion and aphelion the velocity is perpendicular to r, so

           m v1 r1   =   m v2 r2          ->        v1 r1  =  v2 r2

           v_perihelion  x  r_min   =   v_aphelion  x  r_max

  Planet is FASTEST at perihelion (nearest), SLOWEST at aphelion (farthest).
```

| Formula | When to use |
|---|---|
| `T^2 / a^3 = constant` | comparing two planets or two satellites |
| `T2/T1 = (a2/a1)^(3/2)` | "find the period of a planet 4 times as far" |
| `v1 r1 = v2 r2` | speed at perihelion vs aphelion |
| `dA/dt = L/2m` | "prove Kepler's second law" |

---

# 3. NEWTON FROM KEPLER — THE INVERSE SQUARE DEDUCTION

```
                        m v^2            4 pi^2 m r
  Circular orbit:   F = -------    =   --------------            [since v = 2 pi r / T]
                           r                 T^2

  Put Kepler 3,  T^2 = k r^3 :

                        4 pi^2 m r         4 pi^2 m       1
                    F = -----------   =   ---------- x  ------       ->   F  ~  1 / r^2
                          k r^3                k          r^2
```

---

# 4. ACCELERATION DUE TO GRAVITY

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |             G M                     4                              |
  |     g  =  --------      =        ------ pi G R rho                 |
  |             R^2                     3                              |
  |                                                                    |
  |     ***  G M  =  g R^2  ***     <-- THE SWAP THAT SOLVES           |
  |                                     HALF THE NUMERICALS            |
  +--------------------------------------------------------------------+

  MASS of the planet             M   =   g R^2 / G      = 6 x 10^24 kg (Earth)

  MEAN DENSITY of the planet     rho =   3 g / (4 pi G R) = 5.5 x 10^3 kg/m^3

  WEIGHT of a body               W   =   m g
```

| Formula | When to use |
|---|---|
| `g = GM/R^2` | question gives MASS of the planet |
| `g = (4/3) pi G R rho` | question gives DENSITY of the planet |
| `GM = gR^2` | question gives one set of data but the formula wants the other |
| `M = gR^2/G` | "find the mass of the Earth" |
| `rho = 3g/(4 pi G R)` | "find the mean density of the Earth" |

## Ratio results (fast MCQ tools)

```
   Same DENSITY:                g  is proportional to  R
   Same MASS:                   g  is proportional to  1 / R^2
   General:                     g  is proportional to  M / R^2

        g_p       ( M_p )    ( R_e )^2
       -----  =   (-----) x  (-----)
        g_e       ( M_e )    ( R_p )
```

---

# 5. VARIATION OF g — ALL FOUR CASES

## 5.1 WITH ALTITUDE (height h)

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   EXACT:                       R^2                  (        h  )^-2    |
  |               g_h   =   g   ----------      =   g   ( 1  +  ---- )      |
  |                              (R + h)^2              (         R  )      |
  |                                                                         |
  |   APPROXIMATE  (only when h << R) :                                     |
  |                                                                         |
  |                                (        2 h )                           |
  |               g_h   =   g      ( 1   -  ---- )                          |
  |                                (         R  )                           |
  |                                                                         |
  |   Fractional decrease  =  2h / R      Percentage decrease = (2h/R) x 100 |
  |                                                                         |
  +-------------------------------------------------------------------------+

   At  h = R    ->  g/4          At  h = 2R  ->  g/9         g = 0 only at infinity
```

## 5.2 WITH DEPTH (depth d)

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |                                (        d  )                            |
  |               g_d   =   g      ( 1   -  --- )       (NO factor of 2)    |
  |                                (         R  )                           |
  |                                                                         |
  |   Fractional decrease  =  d / R                                         |
  |                                                                         |
  |   At the CENTRE  (d = R)   ->    g = 0                                  |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

## 5.3 WITH SHAPE (the Earth is an oblate spheroid)

```
  +-------------------------------------------------------------------------+
  |   R_equator = 6378 km  >  R_pole = 6357 km      (difference 21 km)      |
  |                                                                         |
  |   since g ~ 1/R^2 :         g_pole   >   g_equator                      |
  |                                                                         |
  |   g_pole = 9.83 m/s^2       g_equator = 9.78 m/s^2                      |
  +-------------------------------------------------------------------------+
```

## 5.4 WITH ROTATION / LATITUDE

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |         g'   =   g   -   R omega^2  cos^2 ( lambda )                    |
  |                                                                         |
  |         lambda = LATITUDE, measured from the equator                    |
  |         omega (Earth) = 2 pi / 86400 = 7.27 x 10^-5 rad/s               |
  |         R omega^2 = 0.0338 m/s^2  (the maximum possible reduction)      |
  |                                                                         |
  |   AT THE POLES   lambda = 90    cos = 0    ->  g' = g       MAXIMUM     |
  |   AT THE EQUATOR lambda =  0    cos = 1    ->  g' = g - R omega^2  MIN  |
  |                                                                         |
  |   WEIGHTLESS AT THE EQUATOR when  g = R omega^2 :                       |
  |                                                                         |
  |         omega  =  sqrt( g / R )  =  1.24 x 10^-3 rad/s                  |
  |         new day length T = 2 pi / omega = 84.6 min = 1.41 hours         |
  |         (about 17 times the present spin rate)                          |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `g_h = gR^2/(R+h)^2` | h is LARGE (h = R, h = R/2, "half of g") |
| `g_h = g(1 - 2h/R)` | h is SMALL (a few km, "1 % decrease") |
| `g_d = g(1 - d/R)` | any depth, mines, "at the centre" |
| `g' = g - R w^2 cos^2(lambda)` | latitude, rotation, "weight at the equator" |
| `omega = sqrt(g/R)` | "how fast must the Earth spin for weightlessness" |

## The one comparison they love to ask

```
  +-----------------------------------------------------------------------+
  |  SAME small distance x :                                              |
  |     going UP     ->  g falls by  2 x / R  (fraction)                  |
  |     going DOWN   ->  g falls by    x / R  (fraction)                  |
  |                                                                       |
  |  g DECREASES FASTER GOING UP THAN GOING DOWN.                         |
  |                                                                       |
  |  Setting them equal:  g at height h  =  g at depth d   ->   d = 2 h   |
  +-----------------------------------------------------------------------+
```

---

# 6. GRAVITATIONAL FIELD AND POTENTIAL

```
  +--------------------------+---------------------------+--------------------+
  |  QUANTITY                |  FORMULA                  |  UNIT / DIMENSIONS |
  +--------------------------+---------------------------+--------------------+
  |  Gravitational field     |     ->    ->                                   |
  |  INTENSITY  E            |     E  =  F / m  =  G M / r^2                  |
  |  (a VECTOR)              |  points TOWARDS M         |  N kg^-1           |
  |                          |  at the surface E = g     |  [ L T^-2 ]        |
  +--------------------------+---------------------------+--------------------+
  |  Gravitational           |                           |                    |
  |  POTENTIAL  V            |     V  =  -  G M / r      |  J kg^-1           |
  |  (a SCALAR)              |                           |  [ L^2 T^-2 ]      |
  +--------------------------+---------------------------+--------------------+
  |  Gravitational           |                           |                    |
  |  POTENTIAL ENERGY  U     |     U  =  -  G M m / r    |  J                 |
  |  (a SCALAR)              |        =  m V             |  [ M L^2 T^-2 ]    |
  +--------------------------+---------------------------+--------------------+

  RELATION BETWEEN FIELD AND POTENTIAL:        E   =   -  dV / dr
```

## Potential energy near the surface

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   EXACT change in PE from the surface to height h :                     |
  |                                                                         |
  |                        G M m h              m g h                       |
  |         Delta U  =   ------------  =    -------------                   |
  |                       R ( R + h )        1  +  h / R                    |
  |                                                                         |
  |   SPECIAL CASE, h << R :                                                |
  |                                                                         |
  |         Delta U  =   m g h              <--- this is where mgh comes    |
  |                                              from; it is an APPROXIMATION|
  |                                                                         |
  |   At height h = R exactly:      Delta U  =  m g R / 2                   |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

## Potential of a solid sphere / shell (for MCQs)

```
   OUTSIDE a sphere (r > R):        V = - G M / r          E = G M / r^2
   ON the surface   (r = R):        V = - G M / R          E = G M / R^2
   INSIDE a SHELL   (r < R):        V = - G M / R          E = 0     <-- constant V
   INSIDE a SOLID sphere:           V = - GM(3R^2-r^2)/2R^3   E = G M r / R^3
   At the CENTRE of a solid sphere: V = - 3 G M / (2 R)    E = 0
                                      = 1.5 x surface value
```

| Formula | When to use |
|---|---|
| `V = -GM/r` | "gravitational potential at a point" |
| `U = -GMm/r` | "PE of a two-body system", "why is PE negative" |
| `Delta U = mgh` | ONLY for small h near the surface |
| `Delta U = mgR/2` | lifting a body to a height equal to R |
| `E = -dV/dr` | relation between field and potential |

---

# 7. ESCAPE VELOCITY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                 (   2 G M   )                                       |
  |     v_e  =  sqrt( --------- )   =   sqrt ( 2 g R )                  |
  |                 (     R     )                                       |
  |                                                                     |
  |     also    v_e  =  sqrt ( (8/3) pi G R^2 rho )   (density form)    |
  |                                                                     |
  |     FOR THE EARTH:      v_e  =  11.2  km/s                          |
  |                                                                     |
  |     RELATION TO ORBITAL VELOCITY:    v_e  =  sqrt(2)  x  v_o        |
  |                                                                     |
  +---------------------------------------------------------------------+

  DERIVED FROM:     (1/2) m v_e^2   =   G M m / R
                    (all the KE is used up climbing out of the potential well)
```

## Facts attached to escape velocity

```
   -  INDEPENDENT of the mass of the escaping body
   -  INDEPENDENT of the direction of projection
   -  DEPENDS on M and R of the planet only
   -  If projected with speed  n v_e , the speed left at infinity is
                 v  =  v_e  sqrt( n^2  -  1 )
   -  MOON HAS NO ATMOSPHERE because v_e (Moon) = 2.38 km/s is comparable to
      the rms speed of gas molecules there, so the gases have all escaped.
```

## Escape velocity table

```
  +-------------+----------------+           Ratio trick:
  |  Moon       |   2.38  km/s   |
  |  Mercury    |   4.3   km/s   |             v_e ~ sqrt( M / R )
  |  Mars       |   5.0   km/s   |
  |  EARTH      |  11.2   km/s   |             so if M -> nM and R -> pR,
  |  Jupiter    |  59.5   km/s   |             v_e -> v_e sqrt(n/p)
  |  Sun        | 618     km/s   |
  +-------------+----------------+
```

| Formula | When to use |
|---|---|
| `v_e = sqrt(2gR)` | g and R are given (fastest route for Earth problems) |
| `v_e = sqrt(2GM/R)` | G and M are given |
| `v_e = sqrt(2) v_o` | question links escape and orbital speeds |
| `v = v_e sqrt(n^2-1)` | "projected at 2 v_e, find speed at infinity" |

---

# 8. SATELLITES — ORBITAL VELOCITY, PERIOD, HEIGHT

```
  +---------------------------------------------------------------------------+
  |                                                                           |
  |   ORBITAL VELOCITY at radius r = R + h :                                  |
  |                                                                           |
  |                  (   G M   )        (    g R^2    )                       |
  |      v_o  =  sqrt( ------- )  = sqrt( ----------- )                       |
  |                  (    r    )        (    R + h    )                       |
  |                                                                           |
  |   CLOSE TO THE SURFACE (h = 0) :    v_o = sqrt( g R ) = 7.9 km/s          |
  |                                                                           |
  +---------------------------------------------------------------------------+
  |                                                                           |
  |   TIME PERIOD:                                                            |
  |                                                                           |
  |                2 pi r               (  ( R + h )^3  )          (   r^3  ) |
  |      T  =    ---------  =  2 pi sqrt( ------------- ) = 2pi sqrt( ------ ) |
  |                 v_o                 (    g R^2      )          (  G M   ) |
  |                                                                           |
  |   MINIMUM POSSIBLE PERIOD (grazing the surface):                          |
  |                                                                           |
  |      T_min  =  2 pi sqrt( R / g )  =  84.6 minutes  =  5077 s             |
  |                                                                           |
  +---------------------------------------------------------------------------+
  |                                                                           |
  |   HEIGHT from the period:                                                 |
  |                                                                           |
  |                (  g R^2 T^2  )^(1/3)                                      |
  |      R + h  =  ( ----------- )              then subtract R               |
  |                (   4 pi^2    )                                            |
  |                                                                           |
  +---------------------------------------------------------------------------+
  |                                                                           |
  |   ANGULAR VELOCITY:      omega  =  2 pi / T  =  v_o / r                   |
  |                                                                           |
  |   CENTRIPETAL ACCELERATION = value of g there =  G M / r^2                |
  |                                                                           |
  +---------------------------------------------------------------------------+
```

## Quick proportionalities (MCQ gold)

```
   v_o  ~  1 / sqrt(r)          higher orbit  ->  SLOWER
   T    ~  r^(3/2)              higher orbit  ->  LONGER period
   KE   ~  1 / r                higher orbit  ->  LESS kinetic energy
   TE   ~  - 1 / r              higher orbit  ->  total energy LESS negative
```

| Formula | When to use |
|---|---|
| `v_o = sqrt(GM/r)` | any orbital speed |
| `v_o = sqrt(gR)` | satellite "close to the Earth's surface" |
| `T = 2 pi sqrt(r^3/GM)` | period from height |
| `T_min = 2 pi sqrt(R/g)` | "least period of a satellite" |
| `T ~ r^(3/2)` | ratio of two satellites' periods |

---

# 9. ENERGY OF AN ORBITING SATELLITE

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |     KINETIC ENERGY        KE  =   +  G M m / ( 2 r )                     |
  |                                                                          |
  |     POTENTIAL ENERGY      PE  =   -  G M m /  r                          |
  |                                                                          |
  |     TOTAL ENERGY          TE  =   -  G M m / ( 2 r )     <-- NEGATIVE    |
  |                                                                          |
  |     BINDING ENERGY        BE  =   +  G M m / ( 2 r )  =  | TE |          |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |     KE  =  - TE   =   - PE / 2                                           |
  |     PE  =  2 TE   =   - 2 KE                                             |
  |     TE  =  - KE   =   PE / 2                                             |
  |                                                                          |
  |     KE  :  PE  :  TE     =     1  :  -2  :  -1                           |
  +--------------------------------------------------------------------------+
```

```
   WHY IS THE TOTAL ENERGY NEGATIVE?
       Because the satellite is BOUND. It has less energy than it needs to
       reach infinity (where E = 0). A negative total energy = a closed orbit.

   TE < 0   ->  closed (elliptical / circular) orbit, bound
   TE = 0   ->  parabolic path, just escapes
   TE > 0   ->  hyperbolic path, escapes with speed to spare
```

```
   ENERGY NEEDED TO PUT A BODY OF MASS m INTO A CLOSE ORBIT from rest on the
   ground:                       E  =  (1/2) m g R    =  (1/2) m v_o^2

   ENERGY NEEDED TO MAKE IT ESCAPE FROM THE GROUND:
                                 E  =  m g R          =  (1/2) m v_e^2

   So escaping needs TWICE the energy of orbiting.
```

---

# 10. GEOSTATIONARY AND POLAR SATELLITES

```
  +----------------------+---------------------------+---------------------------+
  |                      |    GEOSTATIONARY          |    POLAR                  |
  +----------------------+---------------------------+---------------------------+
  |  Time period         |  24 hours (86400 s)       |  about 100 minutes        |
  |  Height h            |  about 36 000 km          |  500 to 800 km            |
  |  Orbit radius r      |  about 42 400 km          |  about 7 000 km           |
  |  Orbital speed       |  about 3.08 km/s          |  about 7.5 km/s           |
  |  Plane of orbit      |  EQUATORIAL plane         |  passes over BOTH POLES   |
  |  Sense of revolution |  WEST to EAST (with Earth)|  north-south              |
  |  Shape of orbit      |  circular                 |  nearly circular          |
  |  Appears to          |  stand STILL in the sky   |  move fast across the sky |
  |  Coverage            |  one fixed region         |  entire globe each day    |
  |  Uses                |  TV, DTH, telecom,        |  remote sensing, mapping, |
  |                      |  weather over one region  |  spying, detailed weather |
  |  India's examples    |  INSAT , GSAT             |  IRS , CARTOSAT , OCEANSAT|
  +----------------------+---------------------------+---------------------------+

  FOUR CONDITIONS FOR A GEOSTATIONARY SATELLITE:
      1. T = 24 hours exactly
      2. orbit in the equatorial plane
      3. revolves west to east
      4. circular orbit

  Three geostationary satellites 120 degrees apart cover the whole Earth
  except the poles.
```

---

# 11. WEIGHTLESSNESS

```
  +---------------------------------------------------------------------------+
  |   APPARENT WEIGHT  =  NORMAL REACTION  N ,   NOT  mg                      |
  |                                                                           |
  |   In a lift accelerating with acceleration a :                            |
  |                                                                           |
  |        moving UP        N  =  m ( g + a )      feels HEAVIER              |
  |        moving DOWN      N  =  m ( g - a )      feels LIGHTER              |
  |        at rest / const. N  =  m g              normal                     |
  |        FREE FALL a = g  N  =  0                WEIGHTLESS                 |
  |                                                                           |
  |   In a SATELLITE:  the satellite's centripetal acceleration equals the    |
  |   local g_h , and the astronaut has the same acceleration, so             |
  |                                                                           |
  |        N  =  m ( g_h  -  g_h )  =  0           WEIGHTLESS                 |
  |                                                                           |
  |   *** Gravity is NOT zero. The CONTACT FORCE is zero. ***                 |
  +---------------------------------------------------------------------------+

  Also weightless:  at the CENTRE of the Earth (g = 0)
                    at a point where the Earth's and Moon's pulls cancel
                    at the equator IF the Earth spun 17 times faster
```

---

# 12. STANDARD DATA — LEARN THESE NUMBERS

```
  +--------------------------------------+-------------------------------------+
  |  G                                   |  6.67 x 10^-11 N m^2 kg^-2          |
  |  Mass of the Earth       M           |  5.98 x 10^24 kg  (use 6 x 10^24)   |
  |  Radius of the Earth     R           |  6.4 x 10^6 m  =  6400 km           |
  |  G M for the Earth                   |  4.0 x 10^14 m^3 s^-2               |
  |  g at the surface                    |  9.8 m s^-2                         |
  |  Mean density of the Earth           |  5.5 x 10^3 kg m^-3                 |
  |  omega of the Earth                  |  7.27 x 10^-5 rad s^-1              |
  |  R omega^2 at the equator            |  0.0338 m s^-2                      |
  |  Escape velocity (Earth)             |  11.2 km/s                          |
  |  Orbital velocity near surface       |  7.9 km/s                           |
  |  Least period of a satellite         |  84.6 minutes                       |
  |  Geostationary height                |  36 000 km ; radius 42 400 km       |
  |  Geostationary speed                 |  3.08 km/s                          |
  |  Mass of the Moon                    |  7.36 x 10^22 kg                    |
  |  Radius of the Moon                  |  1.74 x 10^6 m                      |
  |  g on the Moon                       |  1.63 m s^-2  (about g/6)           |
  |  Escape velocity (Moon)              |  2.38 km/s                          |
  |  Earth - Moon distance               |  3.84 x 10^8 m  (about 60 R)        |
  |  Moon's period round the Earth       |  27.3 days                          |
  +--------------------------------------+-------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+---------------------------------------------------------------------+
  |  1 |   F   =   G m1 m2 / r^2                                             |
  +----+---------------------------------------------------------------------+
  |  2 |   G   =   6.67 x 10^-11 N m^2 kg^-2 ,  [ M^-1 L^3 T^-2 ]            |
  +----+---------------------------------------------------------------------+
  |  3 |   g   =   G M / R^2          so       G M  =  g R^2                 |
  +----+---------------------------------------------------------------------+
  |  4 |   g_h =   g ( 1 - 2h/R )     (small h)   or  g R^2/(R+h)^2 (exact)  |
  +----+---------------------------------------------------------------------+
  |  5 |   g_d =   g ( 1 - d/R )                                             |
  +----+---------------------------------------------------------------------+
  |  6 |   g'  =   g - R omega^2 cos^2 ( lambda )                            |
  +----+---------------------------------------------------------------------+
  |  7 |   V   =   - G M / r          U  =  - G M m / r                      |
  +----+---------------------------------------------------------------------+
  |  8 |   Delta U  =  m g h          (only for h << R)                      |
  +----+---------------------------------------------------------------------+
  |  9 |   v_e =   sqrt( 2 G M / R )  =  sqrt( 2 g R )  =  11.2 km/s         |
  +----+---------------------------------------------------------------------+
  | 10 |   v_o =   sqrt( G M / r )    =  sqrt( g R ) near surface = 7.9 km/s |
  +----+---------------------------------------------------------------------+
  | 11 |   T   =   2 pi sqrt( r^3 / G M )        and     T^2  ~  r^3         |
  +----+---------------------------------------------------------------------+
  | 12 |   KE = GMm/2r  ,  PE = -GMm/r  ,  TE = -GMm/2r  =  -KE              |
  +----+---------------------------------------------------------------------+

  If you learn nothing else, learn number 3.  G M = g R^2  is the hinge of the
  entire chapter.
```
