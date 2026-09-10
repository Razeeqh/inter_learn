# Electric Charges and Fields — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

---

# 1. CHARGE

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   QUANTISATION        Q  =  n e        n = 0, ±1, ±2, ±3, ...     |
  |                                                                  |
  |   e  =  1.6 x 10^-19  C                                          |
  |                                                                  |
  |   Number of electrons          Q                                 |
  |   for a given charge:    n = -----                               |
  |                                e                                 |
  |                                                                  |
  |   ADDITIVITY          Q_total = q1 + q2 + q3 + ...  (with signs) |
  |                                                                  |
  |   CONSERVATION        total charge of an isolated system         |
  |                       is constant                                |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
  +--------------------------------+--------------------------------+
  |  QUANTITY                      |  VALUE                         |
  +--------------------------------+--------------------------------+
  |  Charge of electron            |  - 1.6 x 10^-19 C              |
  |  Charge of proton              |  + 1.6 x 10^-19 C              |
  |  Charge of neutron             |  0                             |
  |  Mass of electron              |  9.1 x 10^-31 kg               |
  |  Mass of proton                |  1.67 x 10^-27 kg              |
  |  1 microC                      |  10^-6 C                       |
  |  1 nC                          |  10^-9 C                       |
  |  1 statcoulomb (esu)           |  3.33 x 10^-10 C               |
  +--------------------------------+--------------------------------+
```

**Two identical conductors touched together and separated:**

```
                    q1  +  q2
        q'    =   -------------              (each carries q')
                        2
```

---

# 2. COULOMB'S LAW  *** the most important box in the chapter ***

```
  +==================================================================+
  |                                                                  |
  |                    1          q1 q2          k q1 q2             |
  |        F   =   ---------- x ---------   =   ----------           |
  |                 4 pi e0        r^2             r^2               |
  |                                                                  |
  |         1                                                        |
  |     --------- = k = 9 x 10^9   N m^2 C^-2                        |
  |      4 pi e0                                                     |
  |                                                                  |
  |     e0  =  8.854 x 10^-12  C^2 N^-1 m^-2                         |
  |                          (or  F m^-1)                            |
  |                                                                  |
  |     Dimensions of e0 :   [ M^-1 L^-3 T^4 A^2 ]                   |
  |                                                                  |
  +==================================================================+
```

## Vector form

```
  +------------------------------------------------------------------+
  |    ->            1        q1 q2      ^                           |
  |    F12   =   ---------- x -------- x r21                         |
  |               4 pi e0       r^2                                  |
  |                                                                  |
  |    ^     ->    ->                                                |
  |    r21 = ( r1 - r2 ) / | r1 - r2 |                               |
  |                                                                  |
  |    ->        ->                                                  |
  |    F12  =  - F21                                                 |
  |                                                                  |
  |    Sign of q1 q2 :  +ve -> repulsion    -ve -> attraction        |
  +------------------------------------------------------------------+
```

## In a medium

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                     1          q1 q2                             |
  |    F_medium   =  --------- x ----------          e = e0 K        |
  |                   4 pi e        r^2                              |
  |                                                                  |
  |                    F_vacuum                                      |
  |    F_medium   =  ------------                                    |
  |                       K                                          |
  |                                                                  |
  |          F_vacuum        e                                       |
  |     K = -----------  = ------  =  dielectric constant            |
  |          F_medium       e0        (relative permittivity)        |
  |                                                                  |
  |     K has NO UNITS.   K(vacuum) = 1 ,  K(water) = 80 ,           |
  |                       K(metal) = infinity                        |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Equivalent distance trick

If a medium of dielectric constant K and thickness t is inserted between
two charges separated by r, the **effective** separation becomes:

```
        r_effective   =   ( r - t )  +  t sqrt(K)
```

## Comparison with gravitation

```
  +----------------------+----------------------------------------+
  |  RATIO               |  VALUE                                 |
  +----------------------+----------------------------------------+
  |  F_e / F_g between   |                                        |
  |  two protons         |  about  1.2 x 10^36                    |
  |  two electrons       |  about  4.2 x 10^42                    |
  |  electron and proton |  about  2.3 x 10^39                    |
  +----------------------+----------------------------------------+
```

---

# 3. SUPERPOSITION

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    ->       ->     ->     ->            ->                       |
  |    F1   =   F12  + F13  + F14  + ... +  F1n     (VECTOR sum)     |
  |                                                                  |
  |    ->        q1     n      qi     ^                              |
  |    F1  =  --------  sum  ------ x r1i                            |
  |            4 pi e0  i=2   r1i^2                                  |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Adding two forces

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   R  =  sqrt( F1^2 + F2^2 + 2 F1 F2 cos(theta) )                 |
  |                                                                  |
  |                     F2 sin(theta)                                |
  |   tan(alpha)  =  --------------------                            |
  |                   F1 + F2 cos(theta)                             |
  |                                                                  |
  |   IF F1 = F2 = F :    R  =  2 F cos( theta / 2 )                 |
  |                                                                  |
  +------------------------------------------------------------------+

     theta = 60   ->  R = F sqrt(3)  = 1.732 F
     theta = 90   ->  R = F sqrt(2)  = 1.414 F
     theta = 120  ->  R = F
     theta = 180  ->  R = 0
```

## Null point (where the resultant field is zero)

```
  For LIKE charges q1 and q2 separated by d, the null point lies
  BETWEEN them at distance x from q1:

                       d
        x   =   ---------------------
                 1  +  sqrt( q2 / q1 )


  For UNLIKE charges the null point lies OUTSIDE, beyond the
  SMALLER charge, at distance x from it:

                       d
        x   =   ---------------------
                 sqrt( q_big / q_small )  -  1
```

---

# 4. ELECTRIC FIELD

```
  +==================================================================+
  |                                                                  |
  |    ->        ->                                                  |
  |    E   =     F  /  q0            (definition)                    |
  |                                                                  |
  |    ->      ->                                                    |
  |    F   =  q E                    (force on a charge in a field)  |
  |                                                                  |
  |    DUE TO A POINT CHARGE:                                        |
  |                                                                  |
  |                 1         Q            k Q                       |
  |    E   =   ---------- x ------   =   -------                     |
  |             4 pi e0      r^2           r^2                       |
  |                                                                  |
  |    UNITS:   N C^-1   or   V m^-1                                 |
  |    DIMENSIONS:  [ M L T^-3 A^-1 ]                                |
  |                                                                  |
  |    SUPERPOSITION:   E = E1 + E2 + E3 + ...  (VECTORS)            |
  |                                                                  |
  +==================================================================+
```

```
  +--------------------------------+---------------------------------+
  |  SIGN OF SOURCE CHARGE         |  DIRECTION OF E                 |
  +--------------------------------+---------------------------------+
  |  Positive                      |  radially OUTWARD (away)        |
  |  Negative                      |  radially INWARD (towards)      |
  +--------------------------------+---------------------------------+
  |  SIGN OF THE CHARGE PLACED     |  DIRECTION OF F relative to E   |
  +--------------------------------+---------------------------------+
  |  Positive                      |  SAME direction as E            |
  |  Negative                      |  OPPOSITE to E                  |
  +--------------------------------+---------------------------------+
```

## Charged particle moving in a uniform field

```
                     q E
  Acceleration  a = -----
                      m

  Deflection after travelling a horizontal distance x with speed v:

                  1     q E     x^2
         y   =   --- x ----- x -----
                  2      m      v^2
```

---

# 5. ELECTRIC FIELD LINES — the six properties

```
  +----+-------------------------------------------------------------+
  | 1  |  Start on +ve charge, end on -ve charge (or at infinity)     |
  | 2  |  Tangent at a point gives the direction of E there           |
  | 3  |  NEVER intersect (else E would have two directions at once)  |
  | 4  |  Crowding shows strength: close lines = strong field         |
  | 5  |  Continuous, no breaks, and NEVER form closed loops          |
  | 6  |  Perpendicular to a conductor's surface; none inside it      |
  +----+-------------------------------------------------------------+
```

---

# 6. ELECTRIC DIPOLE

```
  +==================================================================+
  |                                                                  |
  |    DIPOLE MOMENT      p  =  q  x  ( 2a )                         |
  |                                                                  |
  |    Direction: from  -q  towards  +q                              |
  |    Unit: C m       Dimensions: [ L T A ]                         |
  |                                                                  |
  +==================================================================+
```

## Field on the AXIAL line

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                     1              2 p r                         |
  |     E_axial  =  ---------  x  -----------------     (exact)      |
  |                  4 pi e0        (r^2 - a^2)^2                    |
  |                                                                  |
  |                     1            2 p            2 k p            |
  |     E_axial  =  ---------  x  -------    =    --------           |
  |                  4 pi e0        r^3              r^3             |
  |                             (short dipole, r >> a)               |
  |                                                                  |
  |     Direction: PARALLEL to p                                     |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Field on the EQUATORIAL line

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                     1                p                           |
  |     E_eq  =     ---------  x  --------------------    (exact)    |
  |                  4 pi e0       (r^2 + a^2)^(3/2)                 |
  |                                                                  |
  |                     1             p             k p              |
  |     E_eq  =     ---------  x  --------   =    -------            |
  |                  4 pi e0        r^3             r^3              |
  |                             (short dipole, r >> a)               |
  |                                                                  |
  |     Direction: ANTI-PARALLEL to p                                |
  |                                                                  |
  +------------------------------------------------------------------+


           E_axial   =    2  x  E_equatorial          (same r)
```

## Field at ANY point (angle theta from the axis)

```
                       k p
        E   =        -------  x  sqrt( 3 cos^2(theta) + 1 )
                       r^3

                                 tan(theta)
        tan(alpha)   =        ---------------
                                     2

     alpha = angle between E and the line joining the point
             to the centre of the dipole

     theta = 0   ->  E = 2kp/r^3   (axial)
     theta = 90  ->  E = kp/r^3    (equatorial)
```

## Dipole in a UNIFORM external field

```
  +==================================================================+
  |                                                                  |
  |    NET FORCE     =    ZERO                                       |
  |                                                                  |
  |    TORQUE        tau  =  p E sin(theta)                          |
  |                                                                  |
  |                  ->      ->    ->                                |
  |                  tau  =  p  x  E                                 |
  |                                                                  |
  |    ENERGY        U    =  - p E cos(theta)                        |
  |                                                                  |
  |                            ->   ->                               |
  |                  U    =  - p  .  E                               |
  |                                                                  |
  |    WORK to turn from theta1 to theta2:                           |
  |                                                                  |
  |         W  =  p E [ cos(theta1)  -  cos(theta2) ]                |
  |                                                                  |
  +==================================================================+
```

```
  +-----------+--------------+---------------+----------------------+
  |  theta    |  TORQUE      |  ENERGY U     |  STATE               |
  +-----------+--------------+---------------+----------------------+
  |    0      |  0           |  - p E        |  STABLE equilibrium  |
  |   90      |  p E (max)   |   0           |  maximum torque      |
  |  180      |  0           |  + p E        |  UNSTABLE            |
  +-----------+--------------+---------------+----------------------+

  Work to flip completely (0 -> 180)  =  2 p E
  Work to turn from 0 to 90           =  p E
```

## Time period of a dipole oscillating in a field

```
                            +-       -+
                            |    I    |
        T   =   2 pi  sqrt  | ------- |         I = moment of inertia
                            |   p E   |
                            +-       -+
```

---

# 7. ELECTRIC FLUX

```
  +==================================================================+
  |                                                                  |
  |             ->    ->                                             |
  |    phi  =   E  .  A    =   E A cos(theta)                        |
  |                                                                  |
  |    theta is the angle between E and the NORMAL to the surface    |
  |                                                                  |
  |    General:   phi  =  integral ( E . dA )                        |
  |                                                                  |
  |    UNIT:  N m^2 C^-1   =   V m                                   |
  |    DIMENSIONS:  [ M L^3 T^-3 A^-1 ]                              |
  |    It is a SCALAR.                                               |
  |                                                                  |
  +==================================================================+
```

```
  +-------------------------------+---------------------------------+
  |  theta = 0   (E along normal) |  phi = E A       MAXIMUM        |
  |  theta = 90  (E in the plane) |  phi = 0                        |
  |  theta = 180                  |  phi = - E A                    |
  +-------------------------------+---------------------------------+
```

---

# 8. GAUSS'S LAW

```
  +==================================================================+
  |                                                                  |
  |                                            q(enclosed)           |
  |     phi  =  closed integral ( E . dA ) = ---------------         |
  |                                                 e0               |
  |                                                                  |
  |   * Only the charge INSIDE counts.                               |
  |   * The shape of the surface does not matter.                    |
  |   * A charge OUTSIDE gives ZERO net flux.                        |
  |                                                                  |
  +==================================================================+
```

## Useful flux results

```
  +-----------------------------------------+------------------------+
  |  SITUATION                              |  FLUX                  |
  +-----------------------------------------+------------------------+
  |  Charge q at the centre of any closed   |  q / e0                |
  |  surface                                |                        |
  |  Charge q at the centre of a cube,      |  q / (6 e0)            |
  |  through ONE face                       |                        |
  |  Charge q at a CORNER of a cube         |  q / (8 e0)            |
  |  Charge q at the centre of one FACE     |  q / (2 e0)            |
  |  Charge q OUTSIDE a closed surface      |  0                     |
  |  Charge q at the centre of a hemisphere |  q / (2 e0)            |
  |  (curved part only)                     |                        |
  +-----------------------------------------+------------------------+
```

---

# 9. APPLICATIONS OF GAUSS'S LAW  *** the 8-mark question ***

## 9.1 Infinite straight charged WIRE

```
  +==================================================================+
  |                                                                  |
  |                    lambda                  2 k lambda            |
  |        E    =    -------------      =    -------------           |
  |                   2 pi e0 r                    r                 |
  |                                                                  |
  |     lambda  =  linear charge density  (C / m)                    |
  |     Gaussian surface: a CYLINDER coaxial with the wire           |
  |     E  varies as   1 / r                                         |
  |                                                                  |
  +==================================================================+
```

## 9.2 Infinite plane charged SHEET

```
  +==================================================================+
  |                                                                  |
  |                    sigma                                         |
  |        E    =    ---------          (non-conducting thin sheet)  |
  |                    2 e0                                          |
  |                                                                  |
  |                    sigma                                         |
  |        E    =    ---------          (just outside a CONDUCTOR)   |
  |                     e0                                           |
  |                                                                  |
  |     sigma  =  surface charge density  (C / m^2)                  |
  |     Gaussian surface: a CYLINDER / PILLBOX through the sheet     |
  |     E is INDEPENDENT of the distance  ->  UNIFORM field          |
  |                                                                  |
  +==================================================================+
```

## 9.3 Two parallel sheets

```
  +------------------------+----------------+------------------------+
  |  SHEETS                |  BETWEEN       |  OUTSIDE               |
  +------------------------+----------------+------------------------+
  |  +sigma  and  -sigma   |  sigma / e0    |  0                     |
  |  +sigma  and  +sigma   |  0             |  sigma / e0            |
  |  +sig1   and  +sig2    |  |sig1-sig2|   |  (sig1+sig2) / (2 e0)  |
  |                        |  / (2 e0)      |                        |
  +------------------------+----------------+------------------------+
```

## 9.4 Uniformly charged thin SPHERICAL SHELL

```
  +==================================================================+
  |                                                                  |
  |    OUTSIDE  (r > R)         E  =  k Q / r^2                      |
  |                                (like a point charge at centre)   |
  |                                                                  |
  |    ON SURFACE (r = R)       E  =  k Q / R^2  =  sigma / e0       |
  |                                (MAXIMUM value)                   |
  |                                                                  |
  |    INSIDE   (r < R)         E  =  ZERO                           |
  |                                                                  |
  +==================================================================+
```

## 9.5 Uniformly charged SOLID sphere (for comparison — know the difference)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    OUTSIDE  (r > R)         E  =  k Q / r^2                      |
  |                                                                  |
  |                                    k Q r            rho r        |
  |    INSIDE   (r < R)         E  =  --------    =   ---------      |
  |                                     R^3             3 e0         |
  |                                                                  |
  |    E grows LINEARLY with r inside a solid sphere.                |
  |    E is ZERO inside a hollow SHELL.                              |
  |                                                                  |
  +------------------------------------------------------------------+
```

---

# 10. CONTINUOUS CHARGE DISTRIBUTIONS

```
  +---------------+-----------------------+---------+----------------+
  |  TYPE         |  DEFINITION           | SYMBOL  |  UNIT          |
  +---------------+-----------------------+---------+----------------+
  |  LINEAR       |  lambda  =  q / L     | lambda  |  C m^-1        |
  |  SURFACE      |  sigma   =  q / A     | sigma   |  C m^-2        |
  |  VOLUME       |  rho     =  q / V     | rho     |  C m^-3        |
  +---------------+-----------------------+---------+----------------+

  Charge enclosed by a Gaussian surface:

        q  =  lambda x (length inside)
        q  =  sigma  x (area inside)
        q  =  rho    x (volume inside)
```

---

# 11. MASTER TABLE — EVERY FIELD FORMULA WITH "WHEN TO USE"

```
  +-----------------------------+--------------------+------------------------+
```

| FORMULA | GIVES | WHEN TO USE |
|---|---|---|
| `F = k q1 q2 / r^2` | Force between two charges | Two point charges, distance given |
| `F_med = F_vac / K` | Force in a medium | "placed in water / oil / mica" |
| `q' = (q1+q2)/2` | Charge after contact | Two IDENTICAL spheres touched |
| `Q = n e` | Number of electrons | "How many electrons?" |
| `E = F / q` | Field from a measured force | Force on a test charge is given |
| `E = k Q / r^2` | Field of a point charge | A single point charge |
| `E = 2 F cos(theta/2)` | Resultant of two equal forces | Equilateral triangle / square problems |
| `E = 2 k p / r^3` | Dipole field, axial | Point on the LINE of the dipole |
| `E = k p / r^3` | Dipole field, equatorial | Point on the PERPENDICULAR bisector |
| `p = q x 2a` | Dipole moment | Two equal opposite charges |
| `tau = p E sin(theta)` | Torque on a dipole | Dipole tilted in a uniform field |
| `U = - p E cos(theta)` | Potential energy | "energy of the dipole" |
| `W = pE(cos t1 - cos t2)` | Work to rotate | "work done in turning the dipole" |
| `phi = E A cos(theta)` | Flux | A flat surface in a uniform field |
| `phi = q / e0` | Total flux | Any CLOSED surface |
| `phi = q / (6 e0)` | Flux per face | Charge at the CENTRE of a cube |
| `E = lambda / (2 pi e0 r)` | Field of a wire | Long straight charged wire |
| `E = sigma / (2 e0)` | Field of a sheet | Infinite thin charged sheet |
| `E = sigma / e0` | Field between plates | Two oppositely charged sheets / plates |
| `E = k Q / r^2` | Shell, outside | r > R for a charged shell |
| `E = 0` | Shell, inside | r < R for a charged shell |
| `E = k Q r / R^3` | Solid sphere, inside | r < R for a SOLID charged sphere |

```
  +-----------------------------+--------------------+------------------------+
```

---

# 12. UNITS AND DIMENSIONS TABLE

```
  +---------------------+--------------+----------------------------+
  |  QUANTITY           |  SI UNIT     |  DIMENSIONS                |
  +---------------------+--------------+----------------------------+
  |  Charge  Q          |  C           |  [ T A ]                   |
  |  Force   F          |  N           |  [ M L T^-2 ]              |
  |  Electric field E   |  N/C , V/m   |  [ M L T^-3 A^-1 ]         |
  |  Dipole moment p    |  C m         |  [ L T A ]                 |
  |  Electric flux phi  |  N m^2 / C   |  [ M L^3 T^-3 A^-1 ]       |
  |  Permittivity e0    |  C^2/N m^2   |  [ M^-1 L^-3 T^4 A^2 ]     |
  |  lambda             |  C / m       |  [ L^-1 T A ]              |
  |  sigma              |  C / m^2     |  [ L^-2 T A ]              |
  |  rho                |  C / m^3     |  [ L^-3 T A ]              |
  |  Dielectric const K |  none        |  DIMENSIONLESS             |
  +---------------------+--------------+----------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

If you learn nothing else, learn these twelve.

```
  +----+-----------------------------------------------------------+
  | 1  |   F  =  k q1 q2 / r^2        k = 9 x 10^9 N m^2 C^-2       |
  +----+-----------------------------------------------------------+
  | 2  |   F_medium  =  F_vacuum / K                                |
  +----+-----------------------------------------------------------+
  | 3  |   E  =  F / q     and     E  =  k Q / r^2                  |
  +----+-----------------------------------------------------------+
  | 4  |   Q  =  n e       e = 1.6 x 10^-19 C                       |
  +----+-----------------------------------------------------------+
  | 5  |   p  =  q x 2a       (points from  -  to  + )              |
  +----+-----------------------------------------------------------+
  | 6  |   E_axial       =  2 k p / r^3                             |
  +----+-----------------------------------------------------------+
  | 7  |   E_equatorial  =    k p / r^3                             |
  +----+-----------------------------------------------------------+
  | 8  |   tau  =  p E sin(theta)      U  =  - p E cos(theta)       |
  +----+-----------------------------------------------------------+
  | 9  |   phi  =  E A cos(theta)                                   |
  +----+-----------------------------------------------------------+
  | 10 |   phi  =  q_enclosed / e0          (GAUSS'S LAW)           |
  +----+-----------------------------------------------------------+
  | 11 |   Wire   E = lambda / (2 pi e0 r)                          |
  |    |   Sheet  E = sigma / (2 e0)                                |
  +----+-----------------------------------------------------------+
  | 12 |   Shell  E = k Q / r^2 outside ,   E = 0 inside            |
  +----+-----------------------------------------------------------+
```

**Write these twelve on one side of a card. Read the card every morning
for a week. That is the whole chapter's formula work done.**
