# Electrostatic Potential and Capacitance — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

**Constants you must know without looking:**

```
  +--------------------------------------------------------------+
  |   e0  =  8.85 x 10^-12   F m^-1   (permittivity of free space)|
  |                                                              |
  |          1                                                   |
  |   k  =  --------  =  9 x 10^9   N m^2 C^-2                   |
  |         4 pi e0                                              |
  |                                                              |
  |   e  =  1.6 x 10^-19  C     1 eV = 1.6 x 10^-19  J           |
  +--------------------------------------------------------------+
```

---

# 1. POTENTIAL AND POTENTIAL DIFFERENCE

```
                    W
      V   =   -----------            unit: volt (V) = J C^-1
                    q                SCALAR


      W   =   q ( V(A) - V(B) )      work done on a charge q


                      W (B -> A)
      V(A) - V(B) = --------------
                          q


      U   =   q V                    energy of a charge q at potential V
```

| Formula | When to use |
|---|---|
| `V = W / q` | Definition; asked as a 2-mark question |
| `W = q dV` | Work done in moving a charge between two points |
| `U = q V` | Energy of a single charge placed at a known potential |
| `W = 0` | Charge moved ALONG an equipotential surface |
| `1 eV = 1.6 x 10^-19 J` | Electron accelerated through 1 volt |

---

# 2. POTENTIAL DUE TO CHARGES

```
  +--------------------------------------------------------------+
  |                                                              |
  |  POINT CHARGE                1      q            q           |
  |                       V  =  ------ ---   =   k  ---          |
  |                             4pi e0  r            r           |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |  SYSTEM OF          1     +-  q1     q2     q3     -+        |
  |  CHARGES     V  = ------- |  ----  + ----  + ----+..|        |
  |                   4 pi e0 +-  r1     r2     r3     -+        |
  |                                                              |
  |              ADD THE NUMBERS WITH THEIR SIGNS. V is SCALAR.  |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |  DIPOLE                     1     p cos theta                |
  |  (general point)     V  = ------- --------------             |
  |                           4 pi e0      r^2                   |
  |                                                              |
  |     axial   (theta = 0)     ->   V = + k p / r^2             |
  |     axial   (theta = 180)   ->   V = - k p / r^2             |
  |     equatorial (theta = 90) ->   V = 0                       |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `V = k q / r` | One point charge; r measured from the charge to the POINT |
| `V = sum of k q_i / r_i` | Two or more charges anywhere |
| `V = k p cos theta / r^2` | Short dipole, any direction |
| `V = k p / r^2` | Dipole, axial point |
| `V = 0` | Dipole, equatorial point; also midpoint of +q and -q |

## Charged conducting SPHERE (radius R, charge Q)

```
  +-------------------+-----------------------+-----------------------+
  |  POSITION         |  FIELD  E             |  POTENTIAL  V         |
  +-------------------+-----------------------+-----------------------+
  |  Inside  (r < R)  |        0              |     k Q / R           |
  |  Surface (r = R)  |     k Q / R^2         |     k Q / R           |
  |  Outside (r > R)  |     k Q / r^2         |     k Q / r           |
  +-------------------+-----------------------+-----------------------+

  E jumps at the surface.  V does NOT jump — it is constant inside
  and equal to the SURFACE value.
```

---

# 3. FIELD AND POTENTIAL — THE LINK

```
  +--------------------------------------------------------------+
  |                                                              |
  |               - dV                                           |
  |        E  =  ------                dV  =  - E dr             |
  |                dr                                            |
  |                                                              |
  |        dV / dr  is the POTENTIAL GRADIENT                    |
  |                                                              |
  |        Unit of E :   V m^-1   =   N C^-1                     |
  |                                                              |
  +--------------------------------------------------------------+

  UNIFORM FIELD (parallel plates):

                    V
            E  =  -----                  V  =  E d
                    d
```

| Formula | When to use |
|---|---|
| `E = -dV/dr` | V is given as a function of position; differentiate it |
| `E = V / d` | Uniform field between parallel plates |
| `V = E d` | Finding the p.d. across a plate gap |
| `E = sigma / e0` | Field between two oppositely charged plates |
| `E = sigma / (2 e0)` | Field of ONE isolated charged sheet |

---

# 4. POTENTIAL ENERGY OF A SYSTEM OF CHARGES

```
  +--------------------------------------------------------------+
  |                                                              |
  |  TWO CHARGES               1       q1 q2         k q1 q2     |
  |                     U  = -------  --------   =  ----------   |
  |                          4 pi e0    r12             r        |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |  THREE CHARGES        +-                                 -+  |
  |                       |  q1 q2      q2 q3      q3 q1      |  |
  |            U  =   k   | --------  + -------- + --------   |  |
  |                       |   r12         r23        r31      |  |
  |                       +-                                 -+  |
  |                                                              |
  |         n charges  ->  n(n-1)/2  terms                       |
  |         3 charges  ->  3 terms                               |
  |         4 charges  ->  6 terms                               |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  SIGN OF U

    like charges   ->  U POSITIVE   ->  work had to be DONE on the system
    unlike charges ->  U NEGATIVE   ->  the system is BOUND

  U = 0  when the charges are infinitely far apart.

  Work needed to break the system up completely  =  - U
```

| Formula | When to use |
|---|---|
| `U = k q1 q2 / r` | Two charges |
| `U = k (q1q2/r12 + q2q3/r23 + q3q1/r31)` | Three charges — 3 pairs |
| `W = U(final) - U(initial)` | Work to rearrange a system |
| `W = -U` | Work to separate the charges to infinity |

---

# 5. DIPOLE IN A UNIFORM EXTERNAL FIELD

```
  +--------------------------------------------------------------+
  |                                                              |
  |     DIPOLE MOMENT     p  =  q x (2a)      unit  C m          |
  |                          direction: from -q to +q            |
  |                                                              |
  |     TORQUE            tau  =  p E sin theta                  |
  |                       (vector form:  tau = p x E )           |
  |                                                              |
  |     POTENTIAL ENERGY    U   =   - p E cos theta              |
  |                                                              |
  |     WORK to turn from theta1 to theta2                       |
  |                       W  =  p E ( cos theta1 - cos theta2 )  |
  |                                                              |
  |     NET FORCE in a UNIFORM field  =  ZERO                    |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  +-----------+---------------+--------------+--------------------+
  |  theta    |  TORQUE       |      U       |  STATE             |
  +-----------+---------------+--------------+--------------------+
  |    0 deg  |      0        |    - p E     |  STABLE            |
  |   90 deg  |   p E  (MAX)  |      0       |  --                |
  |  180 deg  |      0        |    + p E     |  UNSTABLE          |
  +-----------+---------------+--------------+--------------------+

  Work to flip the dipole from 0 to 180 degrees  =  2 p E
```

---

# 6. CONDUCTORS AND DIELECTRICS

```
  +--------------------------------------------------------------+
  |  CONDUCTOR IN ELECTROSTATIC EQUILIBRIUM                      |
  |                                                              |
  |    E inside          =  0                                    |
  |    Net charge inside =  0   (all charge on the surface)      |
  |    E just outside    =  sigma / e0 , perpendicular to the    |
  |                         surface                              |
  |    V                 =  the SAME everywhere in and on it     |
  |                                                              |
  |    ELECTROSTATIC SHIELDING: the cavity inside is protected   |
  |    from any external field.                                  |
  +--------------------------------------------------------------+
  |  DIELECTRIC                                                  |
  |                                                              |
  |                        E0                                    |
  |    Field inside  E = -------                                 |
  |                      kappa                                   |
  |                                                              |
  |    kappa  =  e / e0  =  dielectric constant                  |
  |                      =  relative permittivity                |
  |                      >  1 always , NO UNITS                  |
  |                                                              |
  |    Reduced field  ->  reduced V  ->  INCREASED C             |
  +--------------------------------------------------------------+
```

| Quantity | Formula / value | When to use |
|---|---|---|
| Field inside a dielectric | `E = E0 / kappa` | Slab inserted in a known field |
| Permittivity of a medium | `e = kappa e0` | Any capacitor with a medium |
| Force between charges in a medium | `F = k q1 q2 / (kappa r^2)` | Coulomb's law in oil, water etc. |
| Dielectric strength | max field before breakdown, `V m^-1` | 2-mark definition |
| Air breakdown field | about `3 x 10^6 V m^-1` | Van de Graaff / sparking |

---

# 7. CAPACITANCE

```
  +--------------------------------------------------------------+
  |                                                              |
  |                     Q                                        |
  |             C  =  -----          Q  =  C V                   |
  |                     V                                        |
  |                                                              |
  |    Unit: FARAD (F) = C V^-1     Dimensions [M^-1 L^-2 T^4 A^2]|
  |                                                              |
  |    1 uF = 10^-6 F     1 nF = 10^-9 F     1 pF = 10^-12 F     |
  |                                                              |
  +--------------------------------------------------------------+

  ISOLATED SPHERE of radius R :      C  =  4 pi e0 R
```

---

# 8. PARALLEL PLATE CAPACITOR

```
  +--------------------------------------------------------------+
  |                                                              |
  |   VACUUM / AIR                    e0 A                       |
  |   BETWEEN PLATES           C  =  -------                     |
  |                                     d                        |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   GAP COMPLETELY               kappa e0 A                    |
  |   FILLED                C  =  ------------  =  kappa C0      |
  |                                     d                        |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   SLAB of thickness t                  e0 A                  |
  |   PARTLY filling         C  =  ------------------------      |
  |   the gap                        ( d - t ) + t / kappa       |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   METAL slab of                    e0 A                      |
  |   thickness t            C  =  -----------                   |
  |   inserted                        d - t                      |
  |   (kappa = infinity)                                         |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  ALSO USEFUL

                 Q               sigma            Q
    sigma  =  -------      E = --------   =   -------      V = E d
                 A               e0            e0 A
```

| Situation | Formula | When to use |
|---|---|---|
| Air gap | `C = e0 A / d` | Standard derivation and numericals |
| Full dielectric | `C = kappa e0 A / d` | Gap completely filled |
| Partial slab | `C = e0 A / (d - t + t/kappa)` | Slab thinner than the gap |
| Metal slab | `C = e0 A / (d - t)` | Conducting slab inserted |
| Plates pulled apart | `C decreases` | d in the denominator |
| Area doubled | `C doubles` | A in the numerator |

## The battery ON / battery OFF table  *** memorise ***

```
  +--------------+--------------------------+--------------------------+
  |  QUANTITY    |  BATTERY CONNECTED       |  BATTERY REMOVED         |
  |              |  ( V constant )          |  ( Q constant )          |
  +--------------+--------------------------+--------------------------+
  |   C          |    x kappa               |    x kappa               |
  |   V          |    unchanged             |    / kappa               |
  |   Q          |    x kappa               |    unchanged             |
  |   E          |    unchanged             |    / kappa               |
  |   U          |    x kappa               |    / kappa               |
  +--------------+--------------------------+--------------------------+
```

---

# 9. COMBINATION OF CAPACITORS

```
  +-----------------------------+--------------------------------------+
  |  SERIES                     |  PARALLEL                            |
  +-----------------------------+--------------------------------------+
  |                             |                                      |
  |   ---||----||----||---      |        +--||--+                      |
  |     C1    C2    C3          |    ----+--||--+----                  |
  |                             |        +--||--+                      |
  |                             |                                      |
  |   SAME  Q  on each          |   SAME  V  across each               |
  |   V  =  V1 + V2 + V3        |   Q  =  Q1 + Q2 + Q3                 |
  |                             |                                      |
  |    1      1     1     1     |                                      |
  |   ---  = ---  + --- + ---   |     C  =  C1 + C2 + C3               |
  |    C      C1    C2    C3    |                                      |
  |                             |                                      |
  |   C is SMALLER than the     |   C is BIGGER than the               |
  |   smallest one              |   biggest one                        |
  |                             |                                      |
  +-----------------------------+--------------------------------------+

  TWO in series:              C1 C2            product
                       C  =  --------   =   -------------
                             C1 + C2             sum

  n IDENTICAL capacitors of value C :

        series   ->   C / n            parallel   ->   n C
```

```
  VOLTAGE SHARING IN SERIES (two capacitors)

               C2                              C1
     V1  =  --------- V            V2  =  ---------- V
            C1 + C2                        C1 + C2

     The SMALLER capacitor gets the LARGER voltage.


  CHARGE SHARING IN PARALLEL (two capacitors)

               C1                              C2
     Q1  =  --------- Q            Q2  =  ---------- Q
            C1 + C2                        C1 + C2

     The LARGER capacitor gets the LARGER charge.
```

| Formula | When to use |
|---|---|
| `1/C = sum 1/Ci` | Series — then INVERT to get C |
| `C = C1 C2 / (C1 + C2)` | Exactly two in series |
| `C = sum Ci` | Parallel |
| `C/n` and `nC` | n identical capacitors |
| `V1 = C2 V / (C1+C2)` | Voltage across each capacitor in a series pair |

---

# 10. ENERGY STORED AND ENERGY DENSITY

```
  +--------------------------------------------------------------+
  |                                                              |
  |            1              1            Q^2                   |
  |     U  =  --- Q V   =    --- C V^2 =  ------                 |
  |            2              2            2 C                   |
  |                                                              |
  |                                                              |
  |     ENERGY DENSITY (energy per unit volume of the field)     |
  |                                                              |
  |            1                                                 |
  |     u  =  --- e0 E^2               unit  J m^-3              |
  |            2                                                 |
  |                                                              |
  |     with a dielectric    u  =  (1/2) kappa e0 E^2            |
  |                                                              |
  +--------------------------------------------------------------+

  Energy supplied by the battery         =  Q V
  Energy stored in the capacitor         =  (1/2) Q V
  Energy lost as heat while charging     =  (1/2) Q V
  Efficiency of charging                 =  50 per cent
```

| Formula | When to use |
|---|---|
| `U = (1/2) C V^2` | V is known / battery still connected |
| `U = Q^2 / (2C)` | Q is known / battery disconnected |
| `U = (1/2) Q V` | Both Q and V given |
| `u = (1/2) e0 E^2` | Asked for energy per unit volume |
| `U = u x A d` | Converting energy density back to total energy |

---

# 11. TWO CAPACITORS CONNECTED TOGETHER

```
  +--------------------------------------------------------------+
  |                                                              |
  |    COMMON POTENTIAL     C1 V1  +  C2 V2       Q1 + Q2        |
  |                  V  =  -----------------  =  ----------      |
  |                            C1  +  C2          C1 + C2        |
  |                                                              |
  |                                                              |
  |    ENERGY LOST          C1 C2 ( V1 - V2 )^2                  |
  |               dU  =   -------------------------              |
  |                            2 ( C1 + C2 )                     |
  |                                                              |
  |    ALWAYS POSITIVE.  Energy is always LOST, never gained.    |
  |    Zero only if V1 = V2.                                     |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `V = (C1V1 + C2V2)/(C1+C2)` | Two charged capacitors joined by a wire |
| `dU = C1C2(V1-V2)^2 / [2(C1+C2)]` | "Find the energy lost" |
| `V = C1V1/(C1+C2)` | One of them is initially UNCHARGED (V2 = 0) |

---

# 12. VAN DE GRAAFF GENERATOR

```
  +--------------------------------------------------------------+
  |  Builds up a potential of a few MILLION volts.               |
  |                                                              |
  |  Two principles:                                             |
  |    1. Charge leaks off SHARP POINTS (corona discharge)       |
  |    2. Charge given to a hollow conductor moves to the        |
  |       OUTER surface, so more can always be added.            |
  |                                                              |
  |  Limit set by the DIELECTRIC STRENGTH of the surrounding air |
  |  (about 3 x 10^6 V m^-1).                                    |
  |                                                              |
  |  Used to accelerate protons, deuterons and ions.             |
  +--------------------------------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+----------------------------------------------------------+
  |  1 |   V  =  W / q                          (volt = J / C)    |
  +----+----------------------------------------------------------+
  |  2 |   V  =  k q / r                        (point charge)    |
  +----+----------------------------------------------------------+
  |  3 |   V  =  k p cos theta / r^2            (dipole)          |
  +----+----------------------------------------------------------+
  |  4 |   E  =  - dV / dr        and     E = V / d               |
  +----+----------------------------------------------------------+
  |  5 |   U  =  k q1 q2 / r                    (two charges)     |
  +----+----------------------------------------------------------+
  |  6 |   U  =  - p E cos theta  ,  tau = p E sin theta          |
  +----+----------------------------------------------------------+
  |  7 |   C  =  Q / V                          (farad)           |
  +----+----------------------------------------------------------+
  |  8 |   C  =  e0 A / d                       *** THE ONE ***   |
  +----+----------------------------------------------------------+
  |  9 |   C  =  e0 A / ( d - t + t / kappa )   (slab)            |
  +----+----------------------------------------------------------+
  | 10 |   1/C = 1/C1 + 1/C2      and      C = C1 + C2            |
  +----+----------------------------------------------------------+
  | 11 |   U  =  (1/2) C V^2  =  (1/2) Q V  =  Q^2 / 2C           |
  +----+----------------------------------------------------------+
  | 12 |   u  =  (1/2) e0 E^2                   (energy density)  |
  +----+----------------------------------------------------------+

  Plus the two constants:   k = 9 x 10^9      e0 = 8.85 x 10^-12
```
