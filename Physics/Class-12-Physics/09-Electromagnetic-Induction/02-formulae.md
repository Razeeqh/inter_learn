# Electromagnetic Induction — Formula Sheet

Every formula of the chapter, grouped by topic, with a **"when to use"** column.
Nothing here needs rendering — it reads correctly as plain text.

---

# SECTION 1 — MAGNETIC FLUX

```
  +----------------------------------------------------------------+
  |                                                                |
  |       phi  =  B A cos( theta )       =   B . A                 |
  |                                                                |
  |       theta is the angle between B and the NORMAL to the area  |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `phi = B A cos(theta)` | any flux question — the starting point of everything |
| `phi = B A` | when B is perpendicular to the coil face (theta = 0), maximum flux |
| `phi = 0` | when B lies in the plane of the coil (theta = 90) |
| `phi = N B A cos(theta)` | when the question asks for **flux LINKAGE** of an N-turn coil |
| `theta(normal) = 90 - theta(plane)` | when the angle is given **with the plane** of the coil |

```
  UNIT           weber (Wb)  =  T m^2  =  V s
  CGS UNIT       maxwell     ,   1 Wb = 10^8 maxwell
  DIMENSIONS     [ M L^2 T^-2 A^-1 ]
  NATURE         SCALAR (it is a dot product)
```

**Three ways to change the flux:** change `B`, change `A`, change `theta`.

---

# SECTION 2 — FARADAY'S LAWS

```
  +----------------------------------------------------------------+
  |                                                                |
  |                        d ( phi )                               |
  |          e   =   -  N  -----------                             |
  |                            dt                                  |
  |                                                                |
  |                       N ( phi2 - phi1 )                        |
  |          e   =   -  --------------------      (average EMF)    |
  |                              t                                 |
  |                                                                |
  |          the MINUS sign is LENZ'S LAW                          |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `e = - N d(phi)/dt` | flux given as a function of time — differentiate it |
| `e = - N (phi2 - phi1)/t` | flux changes from one value to another in a stated time |
| `I = e / R` | to get the induced current once you have the EMF |
| `q = N (phi2 - phi1) / R` | "how much CHARGE flows?" — independent of time |
| `q = I t` | to check the charge answer a second way |
| `H = I^2 R t = e^2 t / R` | heat produced by the induced current |

```
  +----------------------------------------------------------------+
  |   INDUCED CHARGE DOES NOT DEPEND ON TIME.                      |
  |   Fast or slow, the SAME charge flows for the same flux change.|
  +----------------------------------------------------------------+
```

---

# SECTION 3 — LENZ'S LAW (a rule, not a formula)

```
  The induced current always OPPOSES THE CAUSE that produces it.

  +-------------------------------+--------------------------------+
  |  SITUATION                    |  WHAT HAPPENS                  |
  +-------------------------------+--------------------------------+
  |  N pole moving TOWARDS coil   |  near face becomes N , REPELS  |
  |  N pole moving AWAY from coil |  near face becomes S , ATTRACTS|
  |  S pole moving TOWARDS coil   |  near face becomes S , REPELS  |
  |  S pole moving AWAY from coil |  near face becomes N , ATTRACTS|
  +-------------------------------+--------------------------------+

  FACE-ON VIEW SHORTCUT
     flux towards you INCREASING  ->  current CLOCKWISE
     flux towards you DECREASING  ->  current ANTICLOCKWISE

  Lenz's law is a consequence of the CONSERVATION OF ENERGY.
```

---

# SECTION 4 — MOTIONAL EMF

```
  +----------------------------------------------------------------+
  |                                                                |
  |          e  =  B l v            ( B , l , v mutually           |
  |                                   perpendicular )              |
  |                                                                |
  |          e  =  B l v sin( theta )   in general                 |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `e = B l v` | a straight rod slides on rails across a field |
| `e = B l v sin(theta)` | the velocity is not perpendicular to the field |
| `I = B l v / R` | current in the rails circuit |
| `F = B I l = B^2 l^2 v / R` | "force needed to keep the rod moving at constant speed" |
| `P = F v = B^2 l^2 v^2 / R` | mechanical power you must supply |
| `P = I^2 R = e^2/R = B^2 l^2 v^2 / R` | heat produced per second — equals the mechanical power |
| `e = (1/2) B omega l^2` | a rod ROTATING about one end |
| `e = (1/2) B l^2 (2 pi f)` | same, when the frequency of rotation is given |
| `a = - (B^2 l^2 / m R) v` | rod left free to decelerate (retardation is proportional to v) |

```
  +----------------------------------------------------------------+
  |   ENERGY BOOK-KEEPING                                          |
  |                                                                |
  |   MECHANICAL POWER SUPPLIED  =  ELECTRICAL POWER DISSIPATED    |
  |            F v                  =        I^2 R                 |
  |                                                                |
  |   Always check your two answers against each other.            |
  +----------------------------------------------------------------+
```

---

# SECTION 5 — EDDY CURRENTS (facts, not formulae)

```
  +---------------------------+------------------------------------+
  |  POINT                    |  WHAT TO WRITE                     |
  +---------------------------+------------------------------------+
  |  Definition               |  induced currents that circulate   |
  |                           |  in closed loops inside the body   |
  |                           |  of a solid conductor placed in a  |
  |                           |  changing magnetic field           |
  |  Also called              |  Foucault currents                 |
  |  Direction                |  given by LENZ'S LAW               |
  |  Harm                     |  energy lost as heat (I^2 R),      |
  |                           |  overheating, lower efficiency     |
  |  Cure                     |  LAMINATE the core: thin insulated |
  |                           |  sheets parallel to the field,     |
  |                           |  which raises the resistance of    |
  |                           |  each eddy loop                    |
  |  Core material            |  silicon steel (high resistivity,  |
  |                           |  low hysteresis loss)              |
  |  USE 1                    |  electromagnetic braking in trains |
  |  USE 2                    |  induction furnace (melting metals)|
  |  USE 3                    |  electric power / energy meters    |
  |                           |  (the rotating aluminium disc)     |
  |  USE 4                    |  magnetic damping — dead-beat      |
  |                           |  galvanometer                      |
  |  USE 5                    |  induction cooker, speedometer,    |
  |                           |  metal detector                    |
  +---------------------------+------------------------------------+
```

---

# SECTION 6 — SELF INDUCTION

```
  +----------------------------------------------------------------+
  |                                                                |
  |       N phi  =  L I                                            |
  |                                                                |
  |                        d I                                     |
  |          e   =   -  L -----                                    |
  |                        d t                                     |
  |                                                                |
  |       SOLENOID:   L  =  mu0 n^2 A l   =   mu0 N^2 A / l        |
  |                                                                |
  |       with a core:  L  =  mu0 mu(r) n^2 A l                    |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `L = N phi / I` | "define self inductance" (flux definition) |
| `e = - L dI/dt` | back EMF when the current changes at a known rate |
| `L = - e / (dI/dt)` | L from a measured EMF and rate of change of current |
| `L = mu0 n^2 A l` | solenoid, when turns **per metre** `n` is given |
| `L = mu0 N^2 A / l` | solenoid, when the **total** number of turns `N` is given |
| `L = mu0 mu(r) n^2 A l` | when there is an iron / magnetic core |
| `L is proportional to N^2` | "turns are doubled — what happens to L?" -> 4 times |

```
  UNIT           henry (H)  =  Wb / A  =  V s / A
  DIMENSIONS     [ M L^2 T^-2 A^-2 ]
  1 HENRY        an EMF of 1 V is induced when the current changes
                 at 1 ampere per second

  L DEPENDS ON:  number of turns, area, length, core material (geometry)
  L DOES NOT DEPEND ON:  the current, or the EMF
```

---

# SECTION 7 — ENERGY STORED IN AN INDUCTOR

```
  +----------------------------------------------------------------+
  |                                                                |
  |          U   =   (1/2) L I^2                (joule)            |
  |                                                                |
  |                        B^2                                     |
  |          u   =   -------------              (J per m^3)        |
  |                     2 mu0                                      |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `U = (1/2) L I^2` | energy stored in a coil carrying a steady current |
| `U = (1/2) N phi I` | same energy, written using flux linkage |
| `u = B^2 / (2 mu0)` | energy per unit volume of a magnetic field |
| `U = B^2 A l / (2 mu0)` | total energy inside a solenoid of volume `A l` |
| `U goes as I^2` | "current doubled -> energy becomes 4 times" |

```
  COMPARE AND REMEMBER

     CAPACITOR   U = (1/2) C V^2      u = (1/2) e0 E^2
     INDUCTOR    U = (1/2) L I^2      u = B^2 / (2 mu0)
```

---

# SECTION 8 — MUTUAL INDUCTION

```
  +----------------------------------------------------------------+
  |                                                                |
  |       N2 phi2  =  M I1                                         |
  |                                                                |
  |                       d I1                                     |
  |          e2   =   - M ------                                   |
  |                        d t                                     |
  |                                                                |
  |       TWO COAXIAL SOLENOIDS:                                   |
  |                                                                |
  |          M  =  mu0 n1 n2 A l   =   mu0 N1 N2 A / l             |
  |                                                                |
  |          M12  =  M21  =  M      (RECIPROCITY)                  |
  |                                                                |
  |          M  =  k sqrt( L1 L2 )  ,   0 <= k <= 1                |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `M = N2 phi2 / I1` | "define mutual inductance" |
| `e2 = - M dI1/dt` | EMF in the secondary when the primary current changes |
| `M = mu0 n1 n2 A l` | two coaxial solenoids, turns per metre given |
| `M = mu0 N1 N2 A / l` | two coaxial solenoids, total turns given |
| `M = mu0 mu(r) N1 N2 A / l` | when a core is present |
| `M12 = M21` | any "prove the reciprocity" question |
| `k = M / sqrt(L1 L2)` | coefficient of coupling (dimensionless, 0 to 1) |
| `M(max) = sqrt(L1 L2)` | perfectly coupled coils (k = 1) |

```
  M DEPENDS ON:  turns in both coils, geometry, distance apart,
                 relative ORIENTATION of the axes, core material
  M DOES NOT DEPEND ON: the current

  axes coaxial      ->  M is MAXIMUM
  axes perpendicular ->  M = 0
```

---

# SECTION 9 — INDUCTORS IN COMBINATION

```
  +----------------------------------------------------------------+
  |                                                                |
  |   SERIES (no coupling)        L  =  L1 + L2 + L3 + ...         |
  |                                                                |
  |   SERIES, fields AIDING       L  =  L1 + L2 + 2M               |
  |   SERIES, fields OPPOSING     L  =  L1 + L2 - 2M               |
  |                                                                |
  |                               1        1       1               |
  |   PARALLEL (no coupling)     ---  =   ---  +  ---  + ...       |
  |                               L        L1      L2              |
  |                                                                |
  |   two in parallel             L  =  L1 L2 / ( L1 + L2 )        |
  |                                                                |
  +----------------------------------------------------------------+
```

Inductors combine **exactly like resistors**. That is the easiest way to
remember it.

---

# SECTION 10 — THE AC GENERATOR

```
  +----------------------------------------------------------------+
  |                                                                |
  |       phi  =  N B A cos( omega t )                             |
  |                                                                |
  |       e    =  N B A omega  sin( omega t )                      |
  |                                                                |
  |       e0   =  N B A omega   =   N B A ( 2 pi f )               |
  |                                                                |
  |       e    =  e0 sin( omega t )                                |
  |                                                                |
  |       I    =  ( e0 / R ) sin( omega t )                        |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `phi = N B A cos(omega t)` | flux at any instant in a rotating coil |
| `e = N B A omega sin(omega t)` | instantaneous EMF — the main derivation |
| `e0 = N B A omega` | peak EMF |
| `omega = 2 pi f = 2 pi / T` | when the speed is given in rev/s or rpm |
| `omega = 2 pi (rpm) / 60` | when the speed is given in **revolutions per minute** |
| `e = 0` | coil plane PERPENDICULAR to B (flux maximum) |
| `e = e0` | coil plane PARALLEL to B (flux zero) |

```
  SLIP RINGS  ->  AC generator
  SPLIT-RING COMMUTATOR  ->  DC generator

  Mains in India:  f = 50 Hz , T = 0.02 s ,
                   current reverses 100 times per second
```

---

# SECTION 11 — QUICK LOOK-UP TABLE OF UNITS AND DIMENSIONS

| Quantity | Symbol | SI unit | Dimensional formula |
|---|---|---|---|
| Magnetic flux density | B | tesla (T) | `[ M T^-2 A^-1 ]` |
| Magnetic flux | phi | weber (Wb) | `[ M L^2 T^-2 A^-1 ]` |
| EMF / potential difference | e | volt (V) | `[ M L^2 T^-3 A^-1 ]` |
| Self inductance | L | henry (H) | `[ M L^2 T^-2 A^-2 ]` |
| Mutual inductance | M | henry (H) | `[ M L^2 T^-2 A^-2 ]` |
| Energy stored | U | joule (J) | `[ M L^2 T^-2 ]` |
| Energy density | u | J / m^3 | `[ M L^-1 T^-2 ]` |
| Permeability of free space | mu0 | T m / A (or H/m) | `[ M L T^-2 A^-2 ]` |
| Coefficient of coupling | k | none | dimensionless |

```
  USEFUL CONSTANT       mu0  =  4 pi x 10^-7  T m / A
                             =  1.257 x 10^-6  H / m
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+----------------------------------------------------------+
  |  1 |  phi  =  B A cos( theta )                                |
  +----+----------------------------------------------------------+
  |  2 |  e  =  - N d(phi)/dt                                     |
  +----+----------------------------------------------------------+
  |  3 |  q  =  N ( phi2 - phi1 ) / R      (charge, no time in it)|
  +----+----------------------------------------------------------+
  |  4 |  e  =  B l v                      (motional EMF)         |
  +----+----------------------------------------------------------+
  |  5 |  F  =  B^2 l^2 v / R              (force on the rod)     |
  +----+----------------------------------------------------------+
  |  6 |  P  =  B^2 l^2 v^2 / R  =  I^2 R  (power = heat)         |
  +----+----------------------------------------------------------+
  |  7 |  e  =  - L dI/dt                                         |
  +----+----------------------------------------------------------+
  |  8 |  L  =  mu0 n^2 A l  =  mu0 N^2 A / l     (solenoid)      |
  +----+----------------------------------------------------------+
  |  9 |  U  =  (1/2) L I^2   ,   u = B^2 / (2 mu0)               |
  +----+----------------------------------------------------------+
  | 10 |  e2  =  - M dI1/dt  ,  M = mu0 N1 N2 A / l               |
  +----+----------------------------------------------------------+
  | 11 |  M  =  k sqrt( L1 L2 )                                   |
  +----+----------------------------------------------------------+
  | 12 |  e  =  N B A omega sin( omega t )  ,  e0 = N B A omega   |
  +----+----------------------------------------------------------+
```

> If you have room for only **one** line: `e = - N d(phi)/dt` with
> `phi = B A cos(theta)`. Every other formula in this chapter is
> that one, differentiated.
