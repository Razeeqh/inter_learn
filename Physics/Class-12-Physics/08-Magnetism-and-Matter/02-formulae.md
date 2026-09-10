# Magnetism and Matter — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

**The one constant you need all chapter:**

```
        mu0
      ------  =  10^-7   T m / A          (exactly)
       4 pi

        mu0  =  4 pi x 10^-7  =  1.2566 x 10^-6   T m / A

        1 gauss  =  10^-4  tesla
```

---

# 1. THE BAR MAGNET

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |    MAGNETIC DIPOLE MOMENT                                          |
  |                                                                    |
  |            M  =  m  x  2l                                          |
  |                                                                    |
  |            m  = pole strength      (A m)                           |
  |            2l = magnetic length    (m)                             |
  |            M  = magnetic moment    (A m^2  or  J/T)                |
  |                                                                    |
  |    Direction of M :  from  S  to  N  inside the magnet             |
  |                                                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |                                                                    |
  |    Force on a pole in a field B  :        F  =  m B                |
  |                                                                    |
  |    Magnetic length and geometric length :                          |
  |                                                                    |
  |            2l  =  (5/6)  x  L                                      |
  |                                                                    |
  |    Moment of a CURRENT LOOP of N turns, area A, current I :        |
  |                                                                    |
  |            M  =  N I A                                             |
  |                                                                    |
  |    Definition from torque :   M  =  tau(max) / B                   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Cutting a magnet

| Cut | Pole strength `m` | Length `2l` | Moment `M` | When to use |
|---|---|---|---|---|
| **Perpendicular** to the length, into `n` equal pieces | unchanged `= m` | `2l/n` | `M/n` | "cut into two/three equal parts across its length" |
| **Parallel** to the length, into `n` equal slabs | `m/n` | unchanged | `M/n` | "cut lengthwise into two halves" |
| Bent into a **semicircle** | unchanged | new `2l = 2R = 2L/pi` | `M x (2/pi)` | "a magnet is bent into a semicircle" |
| Bent into a **U shape / right angle** (two halves at 90 deg) | unchanged | `2l x sqrt(2)/2` per geometry | `M/sqrt(2)` | "bent at the middle at 90 degrees" |

```
  MEMORY:  a CUT always HALVES the moment (for 2 pieces),
           whichever way you cut it. Only the reason changes.
```

---

# 2. FIELD OF A BAR MAGNET

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |    AXIAL  (end-on, tan-A position)                                 |
  |                                                                    |
  |    EXACT :               mu0        2 M r                          |
  |                  B  =   ------  x  ----------------                |
  |                          4 pi       ( r^2 - l^2 )^2                |
  |                                                                    |
  |    SHORT MAGNET :        mu0        2 M                            |
  |                  B  =   ------  x  -------                         |
  |                          4 pi       r^3                            |
  |                                                                    |
  |    DIRECTION :  PARALLEL to M                                      |
  |                                                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |                                                                    |
  |    EQUATORIAL  (broadside-on, tan-B position)                      |
  |                                                                    |
  |    EXACT :               mu0             M                         |
  |                  B  =   ------  x  --------------------            |
  |                          4 pi       ( r^2 + l^2 )^(3/2)            |
  |                                                                    |
  |    SHORT MAGNET :        mu0          M                            |
  |                  B  =   ------  x  -------                         |
  |                          4 pi        r^3                           |
  |                                                                    |
  |    DIRECTION :  ANTI-PARALLEL to M                                 |
  |                                                                    |
  +--------------------------------------------------------------------+

              ***   B(axial)  =  2  x  B(equatorial)   ***
```

## At any general point

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Point at distance r, making angle theta with the magnet's axis   |
  |                                                                    |
  |             mu0        M                                           |
  |     B  =   ------  x  -----  x  sqrt( 1 + 3 cos^2(theta) )         |
  |             4 pi       r^3                                         |
  |                                                                    |
  |   The field makes an angle alpha with r, where                     |
  |                                                                    |
  |             tan(alpha)  =  (1/2) tan(theta)                        |
  |                                                                    |
  |   CHECK:  theta = 0    ->  B = mu0 2M / (4 pi r^3)   (axial)       |
  |           theta = 90   ->  B = mu0  M / (4 pi r^3)   (equatorial)  |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `B = (mu0/4pi)(2M/r^3)` | "on the axis" / "end-on" / "axial line" / "N-S line extended" |
| `B = (mu0/4pi)(M/r^3)` | "on the perpendicular bisector" / "broadside-on" / "equatorial" |
| Exact forms with `l` | The question gives the magnetic LENGTH and does **not** say "short magnet" |
| `sqrt(1 + 3cos^2 th)` form | The point is at a general angle (mostly EAPCET / JEE) |

---

# 3. THE BAR MAGNET AS AN EQUIVALENT SOLENOID

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Solenoid : length 2l , radius a , n turns per metre, current I   |
  |                                                                    |
  |                    mu0 n I a^2      +l              dx             |
  |          B  =    --------------   INT   ----------------------     |
  |                        2            -l   [(r-x)^2 + a^2]^(3/2)     |
  |                                                                    |
  |   For  r >> l  and  r >> a :                                       |
  |                                                                    |
  |                    mu0 n (2l) I a^2         mu0      2 M           |
  |          B  =    --------------------  =   ------ x -------        |
  |                         2 r^3               4 pi      r^3          |
  |                                                                    |
  |   with       M  =  n (2l) I (pi a^2)  =  N I A                     |
  |                                                                    |
  |   ==>  A BAR MAGNET IS EQUIVALENT TO A SOLENOID.                   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

```
  Field INSIDE a long solenoid  :   B  =  mu0 n I
  Magnetic intensity inside it  :   H  =  n I
  With a core of permeability mu:   B  =  mu n I  =  mu(r) mu0 n I
```

---

# 4. DIPOLE IN A UNIFORM MAGNETIC FIELD

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   NET FORCE       =  ZERO      (in a UNIFORM field)                |
  |                                                                    |
  |                       ->    ->     ->                              |
  |   TORQUE            tau  =   M  x   B                              |
  |                                                                    |
  |                     tau  =  M B sin(theta)                         |
  |                                                                    |
  |   POTENTIAL         U    =  -  M . B  =  - M B cos(theta)          |
  |   ENERGY                                                           |
  |                                                                    |
  |   WORK to rotate    W    =  M B ( cos theta1  -  cos theta2 )      |
  |   from th1 to th2                                                  |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The special angles

```
  +-----------+------------------+---------------+---------------------+
  |  theta    |  tau             |  U            |  STATE              |
  +-----------+------------------+---------------+---------------------+
  |    0      |  0               |  - M B  (min) |  STABLE             |
  |   90      |  M B  (max)      |    0          |  perpendicular      |
  |  180      |  0               |  + M B  (max) |  UNSTABLE           |
  +-----------+------------------+---------------+---------------------+

  Work to flip 0  -> 180  :   W  =  2 M B
  Work to turn 0  ->  90  :   W  =    M B
  Work to turn 90 -> 180  :   W  =    M B
```

## Angular SHM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |               d2(theta)                                            |
  |           I ------------  =  - M B sin(theta)                      |
  |                dt^2                                                |
  |                                                                    |
  |   For small theta :      omega  =  sqrt( M B / I )                 |
  |                                                                    |
  |                                    +-       -+                     |
  |                                    |    I    |                     |
  |           T  =  2 pi  x  sqrt      | ------- |                     |
  |                                    |   M B   |                     |
  |                                    +-       -+                     |
  |                                                                    |
  |   Bar magnet, mass W, length L, breadth b :                        |
  |                                                                    |
  |                     W ( L^2  +  b^2 )                              |
  |           I   =   ---------------------                            |
  |                            12                                      |
  |                                                                    |
  |   Rearranged (vibration magnetometer) :                            |
  |                                                                    |
  |                    4 pi^2  I                    4 pi^2  I          |
  |           B   =   -----------          M   =   -----------         |
  |                     M  T^2                       B  T^2            |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Handy proportionalities

```
  T  proportional to  1 / sqrt(M)       T  proportional to  1 / sqrt(B)
  T  proportional to  sqrt(I)           f  proportional to  sqrt(B)

  Two magnets tied together (same direction) :   M(net) = M1 + M2
  Two magnets tied together (opposite)       :   M(net) = M1 - M2

              T1^2      M1 + M2
             ------  =  ---------      (T1 = opposite, T2 = same direction)
              T2^2      M1 - M2
```

---

# 5. GAUSS'S LAW IN MAGNETISM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                     ->    ->                                       |
  |         phi(B) =  $ B  .  dS   =   0                               |
  |                                                                    |
  |    "The net magnetic flux through ANY closed surface is ZERO."     |
  |                                                                    |
  |    CONSEQUENCE : magnetic MONOPOLES do not exist.                  |
  |                  Field lines are CLOSED LOOPS.                     |
  |                                                                    |
  |    Compare :        ->   ->      q(enclosed)                       |
  |                   $ E  . dS  =  --------------                     |
  |                                       e0                           |
  |                                                                    |
  +--------------------------------------------------------------------+

  Magnetic flux through a FLAT area A :

            phi  =  B A cos(theta)          unit : weber (Wb)

            1 weber  =  1 tesla x 1 m^2
```

---

# 6. THE EARTH'S MAGNETISM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |    B(H)  =  B cos(delta)          delta = ANGLE OF DIP             |
  |                                                                    |
  |    B(V)  =  B sin(delta)                                           |
  |                                                                    |
  |                        B(V)                                        |
  |    tan(delta)   =    --------                                      |
  |                        B(H)                                        |
  |                                                                    |
  |    B     =  sqrt(  B(H)^2  +  B(V)^2  )                            |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The three magnetic elements

| Element | Symbol | Definition | Unit |
|---|---|---|---|
| **Declination** | `D` | Angle between the **geographic meridian** and the **magnetic meridian** | degrees |
| **Dip / Inclination** | `delta` | Angle the earth's **total field** makes with the **horizontal** | degrees |
| **Horizontal component** | `B(H)` | The horizontal part of the earth's field, in the magnetic meridian | tesla |

## Values at special places

```
  +-------------------------+-------+---------+---------+
  |  PLACE                  |  DIP  |  B(H)   |  B(V)   |
  +-------------------------+-------+---------+---------+
  |  MAGNETIC EQUATOR       |   0   |  = B    |    0    |
  |  MAGNETIC POLES         |  90   |    0    |  = B    |
  |  Dip circle at 45 deg   |  45   |  B(H) = B(V) ,  B = B(H) sqrt(2)  |
  +-------------------------+-------+---------+---------+

  Earth's magnetic dipole moment      :  about  8 x 10^22  A m^2
  Earth's field at the surface        :  0.3 to 0.6 gauss
                                         = 3 to 6 x 10^-5  T
  Tilt of the magnetic axis           :  about 11.3 degrees
```

## Apparent dip (when the dip circle is turned out of the meridian)

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   If the dip circle plane makes an angle  alpha  with the          |
  |   magnetic meridian, the APPARENT dip  d'  satisfies               |
  |                                                                    |
  |                          tan( d )                                  |
  |          tan( d' )  =  --------------                              |
  |                          cos( alpha )                              |
  |                                                                    |
  |   Two mutually perpendicular vertical planes :                     |
  |                                                                    |
  |          cot^2( d )  =  cot^2( d1 )  +  cot^2( d2 )                |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Neutral points

```
  +--------------------------------------+-----------------------------+
  |  MAGNET ORIENTATION                  |  NEUTRAL-POINT CONDITION    |
  +--------------------------------------+-----------------------------+
  |                                      |    mu0      M               |
  |  N pole pointing GEOGRAPHIC NORTH    |   ------ x -----  =  B(H)   |
  |  -> neutral points on the            |    4 pi     d^3             |
  |     EQUATORIAL line (E and W)        |                             |
  +--------------------------------------+-----------------------------+
  |                                      |    mu0     2 M              |
  |  N pole pointing GEOGRAPHIC SOUTH    |   ------ x -----  =  B(H)   |
  |  -> neutral points on the            |    4 pi     d^3             |
  |     AXIAL line (N and S)             |                             |
  +--------------------------------------+-----------------------------+
```

## Magnetic maps

| Name | Joins places of equal ... |
|---|---|
| **Isogonic** lines | Declination |
| **Agonic** line | Zero declination |
| **Isoclinic** lines | Dip |
| **Aclinic** line (magnetic equator) | Zero dip |
| **Isodynamic** lines | Horizontal component `B(H)` |

---

# 7. TANGENT LAW (used by magnetometers and deflection questions)

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   If a compass needle rests under TWO perpendicular fields         |
  |   B and B(H), and is deflected by an angle theta from B(H) :       |
  |                                                                    |
  |          B  =  B(H)  tan( theta )                                  |
  |                                                                    |
  |   TAN-A position (end-on / axial) :                                |
  |          mu0      2 M                                              |
  |         ------ x ------   =   B(H) tan(theta)                      |
  |          4 pi     d^3                                              |
  |                                                                    |
  |   TAN-B position (broadside-on / equatorial) :                     |
  |          mu0       M                                               |
  |         ------ x ------   =   B(H) tan(theta)                      |
  |          4 pi     d^3                                              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# 8. MAGNETISED MATTER — THE FOUR QUANTITIES

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                        net magnetic moment                         |
  |   MAGNETISATION   M = ----------------------      unit  A / m      |
  |                              volume                                |
  |                                                                    |
  |                                                                    |
  |   MAGNETIC INTENSITY (magnetising field)   H       unit  A / m     |
  |                                                                    |
  |          inside a solenoid :   H  =  n I                           |
  |                                                                    |
  |                                                                    |
  |   ***      B   =   mu0 ( H  +  M )      ***       unit  tesla      |
  |                                                                    |
  |                                                                    |
  |                                M                                   |
  |   SUSCEPTIBILITY      chi  =  ---              (dimensionless)     |
  |                                H                                   |
  |                                                                    |
  |                                                                    |
  |   PERMEABILITY        mu   =  mu0 ( 1 + chi )     B = mu H         |
  |                                                                    |
  |                                mu         B                        |
  |   RELATIVE            mu(r) = ------  = -------  =  1 + chi        |
  |   PERMEABILITY                 mu0       mu0 H                     |
  |                                                                    |
  |                                                                    |
  |         ****     mu(r)  =  1  +  chi     ****                      |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Quantity | Symbol | SI unit | Dimensions | When to use |
|---|---|---|---|---|
| Pole strength | `m` | A m | `[L A]` | Given the magnet's length and moment |
| Magnetic moment | `M` | A m^2 (J/T) | `[L^2 A]` | Every dipole question |
| Magnetic field | `B` | tesla (T) | `[M T^-2 A^-1]` | The actual field |
| Magnetic intensity | `H` | A/m | `[L^-1 A]` | Field you applied (`H = nI`) |
| Magnetisation | `M` | A/m | `[L^-1 A]` | Moment per unit volume |
| Susceptibility | `chi` | none | none | Classifying the material |
| Permeability | `mu` | T m/A | `[M L T^-2 A^-2]` | `B = mu H` |
| Relative permeability | `mu(r)` | none | none | `mu(r) = 1 + chi` |
| Magnetic flux | `phi` | weber (Wb) | `[M L^2 T^-2 A^-1]` | Gauss's law |

---

# 9. THE THREE TYPES OF MAGNETIC MATERIAL

```
  +----------------+----------------+----------------+------------------+
  |  PROPERTY      |  DIAMAGNETIC   |  PARAMAGNETIC  |  FERROMAGNETIC   |
  +----------------+----------------+----------------+------------------+
  |  chi (sign)    |   NEGATIVE     |   POSITIVE     |  POSITIVE, HUGE  |
  |  chi (value)   |   about -10^-5 |  10^-5 to 10^-3|   10^3 to 10^5   |
  |  chi (range)   |  -1 <= chi < 0 |  0 < chi < eps |    chi >> 1      |
  +----------------+----------------+----------------+------------------+
  |  mu(r)         |  0 <= mu(r) <1 |   mu(r) > 1    |   mu(r) >> 1     |
  |  mu            |   mu  <  mu0   |   mu  >  mu0   |   mu  >>  mu0    |
  +----------------+----------------+----------------+------------------+
  |  In a          |  strong -> weak|  weak -> strong|  weak -> strong  |
  |  NON-UNIFORM   |  (REPELLED)    |  (weakly       |  (STRONGLY       |
  |  field         |                |   attracted)   |   attracted)     |
  +----------------+----------------+----------------+------------------+
  |  Rod sets      | PERPENDICULAR  |   PARALLEL     |  PARALLEL,       |
  |  itself        |  to the field  |  to the field  |  very fast       |
  +----------------+----------------+----------------+------------------+
  |  Temperature   |  INDEPENDENT   |  chi = C / T   |  chi = C/(T-Tc)  |
  |  dependence    |                |  (CURIE'S LAW) |  above Tc only   |
  +----------------+----------------+----------------+------------------+
  |  Atoms have a  |      NO        |      YES       |   YES + DOMAINS  |
  |  permanent     |                |  (but random)  |                  |
  |  moment?       |                |                |                  |
  +----------------+----------------+----------------+------------------+
  |  EXAMPLES      | Bi, Cu, Pb, Si | Al, Na, Ca,    | Fe, Co, Ni, Gd,  |
  |                | H2O, NaCl, Au, | O2, CuCl2, Pt, | Fe3O4, alnico    |
  |                | N2, diamond    | Cr             |                  |
  +----------------+----------------+----------------+------------------+
```

## Curie's law and the Curie temperature

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PARAMAGNETIC :                C                                  |
  |                      chi  =  -------                               |
  |                                 T                                  |
  |                                                                    |
  |                      chi1 T1  =  chi2 T2                           |
  |                                                                    |
  |                                C B                                 |
  |                      M    =   -----                                |
  |                                 T                                  |
  |                                                                    |
  |   FERROMAGNETIC ABOVE Tc (Curie-Weiss law) :                       |
  |                                                                    |
  |                                C                                   |
  |                      chi  =  ---------       ( T > Tc )            |
  |                               T  -  Tc                             |
  |                                                                    |
  |   Above Tc, a FERROMAGNET becomes PARAMAGNETIC.                    |
  |                                                                    |
  +--------------------------------------------------------------------+

  +-----------------+------------------+
  |  Cobalt         |   1394  K        |
  |  Iron           |   1043  K        |
  |  Nickel         |    631  K        |
  |  Gadolinium     |    317  K        |
  +-----------------+------------------+

  SUPERCONDUCTOR = PERFECT DIAMAGNET :   chi = -1 ,  mu(r) = 0 ,  B = 0
                                         (MEISSNER EFFECT)
```

---

# 10. HYSTERESIS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   RETENTIVITY (remanence) Br                                       |
  |       the value of B left when H is brought back to ZERO           |
  |       unit : tesla                                                 |
  |                                                                    |
  |   COERCIVITY  Hc                                                   |
  |       the REVERSE H needed to make B zero again                    |
  |       unit : ampere / metre                                        |
  |                                                                    |
  |   ENERGY LOST PER CYCLE PER UNIT VOLUME  =  AREA OF THE B-H LOOP   |
  |                                                                    |
  |       Energy per cycle  =  (loop area) x (volume)                  |
  |                                                                    |
  |       Energy in time t  =  (loop area) x (volume) x f x t          |
  |                                                                    |
  |       loop area is in  J / m^3  per cycle                          |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Soft iron versus steel

```
  +---------------------------+-------------------+--------------------+
  |  PROPERTY                 |  SOFT IRON        |  STEEL             |
  +---------------------------+-------------------+--------------------+
  |  Hysteresis loop          |  NARROW, thin     |  WIDE, fat         |
  |  Area of loop / loss      |  SMALL            |  LARGE             |
  |  Retentivity              |  HIGH             |  lower             |
  |  Coercivity               |  LOW              |  HIGH              |
  |  Permeability             |  VERY HIGH        |  lower             |
  |  Susceptibility           |  VERY HIGH        |  lower             |
  |                           |                   |                    |
  |  USED FOR                 |  ELECTROMAGNETS   |  PERMANENT         |
  |                           |  TRANSFORMER      |  MAGNETS,          |
  |                           |  CORES, motors,   |  compass needles,  |
  |                           |  generators       |  loudspeakers      |
  +---------------------------+-------------------+--------------------+
```

| Requirement | For a PERMANENT magnet | For an ELECTROMAGNET |
|---|---|---|
| Retentivity | High | Low |
| **Coercivity** | **HIGH** | **LOW** |
| Loop area | Large is acceptable | Must be small |
| Permeability | Moderate | Very high |
| Material | Steel, alnico, ticonal, NdFeB | Soft iron, permalloy, mu-metal |

---

# 11. THE ELECTROSTATICS <-> MAGNETISM DICTIONARY

```
  +--------------------------------+---------------------------------+
  |  ELECTRIC DIPOLE               |  MAGNETIC DIPOLE                |
  +--------------------------------+---------------------------------+
  |   1 / (4 pi e0)  =  9 x 10^9   |   mu0 / (4 pi)  =  10^-7        |
  |   p  =  q (2a)                 |   M  =  m (2l)                  |
  |                                |                                 |
  |          1      2 p            |         mu0      2 M            |
  |   E = -------- -----           |   B  = ------ x -----           |
  |        4 pi e0  r^3            |         4 pi     r^3            |
  |          (axial)               |         (axial)                 |
  |                                |                                 |
  |          1        p            |         mu0       M             |
  |   E = -------- -----           |   B  = ------ x -----           |
  |        4 pi e0  r^3            |         4 pi     r^3            |
  |        (equatorial)            |       (equatorial)              |
  |                                |                                 |
  |   tau = p x E = pE sin(th)     |   tau = M x B = MB sin(th)      |
  |   U   = - p . E = -pE cos(th)  |   U   = - M . B = -MB cos(th)   |
  |   W   = pE(cos th1 - cos th2)  |   W   = MB(cos th1 - cos th2)   |
  |                                |                                 |
  |   $ E.dS = q / e0              |   $ B.dS = 0                    |
  |   isolated charge EXISTS       |   isolated pole DOES NOT EXIST  |
  +--------------------------------+---------------------------------+

  CONVERSION RULE :     1/(4 pi e0) -> mu0/(4 pi)      and      p -> M
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+---------------------------------------------------------------+
  |  1 |   M  =  m x 2l        and       M  =  N I A                   |
  +----+---------------------------------------------------------------+
  |  2 |   AXIAL       B  =  (mu0 / 4pi) x 2M / r^3                    |
  +----+---------------------------------------------------------------+
  |  3 |   EQUATORIAL  B  =  (mu0 / 4pi) x  M / r^3                    |
  +----+---------------------------------------------------------------+
  |  4 |   tau  =  M B sin(theta)                                      |
  +----+---------------------------------------------------------------+
  |  5 |   U    =  - M B cos(theta)                                    |
  +----+---------------------------------------------------------------+
  |  6 |   W    =  M B ( cos theta1 - cos theta2 )     flip: 2 M B     |
  +----+---------------------------------------------------------------+
  |  7 |   T    =  2 pi sqrt( I / (M B) )                              |
  +----+---------------------------------------------------------------+
  |  8 |   $ B . dS  =  0        (Gauss's law in magnetism)            |
  +----+---------------------------------------------------------------+
  |  9 |   B(H) = B cos(dip)     B(V) = B sin(dip)                     |
  |    |   tan(dip) = B(V)/B(H)                                        |
  +----+---------------------------------------------------------------+
  | 10 |   B  =  mu0 ( H + M )                                         |
  +----+---------------------------------------------------------------+
  | 11 |   chi = M/H       mu(r) = 1 + chi       B = mu(r) mu0 H       |
  +----+---------------------------------------------------------------+
  | 12 |   chi = C / T   (Curie)      loop area = energy lost / cycle  |
  +----+---------------------------------------------------------------+

              AND THE ONE CONSTANT :     mu0 / (4 pi)  =  10^-7
```
