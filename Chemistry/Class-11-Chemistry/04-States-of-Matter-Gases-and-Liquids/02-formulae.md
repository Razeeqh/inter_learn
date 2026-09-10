# States of Matter: Gases and Liquids — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

---

# 0. CONSTANTS AND CONVERSIONS YOU MUST KNOW BY HEART

```
  +-----------------------------------+-----------------------------------+
  |  Gas constant       R             |  0.0821  L atm K^-1 mol^-1        |
  |                                   |  0.083   L bar K^-1 mol^-1        |
  |                                   |  8.314   J K^-1 mol^-1            |
  |                                   |  8.314   Pa m^3 K^-1 mol^-1       |
  |                                   |  2       cal K^-1 mol^-1 (1.987)  |
  |                                   |  62.4    L mm Hg K^-1 mol^-1      |
  +-----------------------------------+-----------------------------------+
  |  Boltzmann constant k  = R / NA   |  1.38 x 10^-23  J K^-1            |
  |  Avogadro constant  NA            |  6.022 x 10^23  mol^-1            |
  |  Molar volume at STP (0 C, 1 atm) |  22.4  L mol^-1                   |
  |  Molar volume at STP (0 C, 1 bar) |  22.7  L mol^-1                   |
  |  Molar volume at 25 C, 1 atm      |  24.4  L mol^-1                   |
  +-----------------------------------+-----------------------------------+
```

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   T (K)  =  t (degC)  +  273.15         (use +273 in exams)        |
  |                                                                    |
  |   1 atm  =  760 mm Hg  =  760 torr  =  101325 Pa                   |
  |          =  101.325 kPa  =  1.01325 bar                            |
  |   1 bar  =  10^5 Pa  =  100 kPa  =  0.9869 atm                     |
  |   1 Pa   =  1 N m^-2                                               |
  |   1 L    =  1 dm^3  =  1000 mL  =  1000 cm^3  =  10^-3 m^3         |
  |                                                                    |
  |   Molar mass in kg/mol  =  (molar mass in g/mol) / 1000            |
  |        O2 -> 0.032   N2 -> 0.028   H2 -> 0.002   CO2 -> 0.044      |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# 1. INTERMOLECULAR FORCES

| Force | Acts between | Depends on `1/r^?` | Example |
|---|---|---|---|
| **Dispersion (London)** | ALL molecules (esp. non-polar) | `1 / r^6` | He...He, Cl2...Cl2, CH4 |
| **Dipole-dipole** | two POLAR molecules | `1 / r^3` (fixed) or `1 / r^6` (rotating) | HCl...HCl, SO2 |
| **Dipole-induced dipole** | polar + non-polar | `1 / r^6` | HCl...Ar, O2 in water |
| **Hydrogen bonding** | H-F, H-O, H-N ... lone pair | strongest | H2O, HF, NH3, alcohols |

```
  +-------------------------------------------------------------------+
  |  STRENGTH ORDER                                                   |
  |                                                                   |
  |   dispersion < dipole-induced dipole < dipole-dipole < H-bond     |
  |     (all far weaker than covalent / ionic bonds)                  |
  |                                                                   |
  |  DISPERSION FORCE GROWS WITH:                                     |
  |     - number of electrons / molecular size / molar mass           |
  |     - polarisability                                              |
  |     - elongated (non-spherical) shape                             |
  |                                                                   |
  |  HYDROGEN BOND NEEDS:   H bonded to  F , O  or  N     ("FON")     |
  |     Strength ~ 10 to 40 kJ/mol                                    |
  +-------------------------------------------------------------------+
```

```
  THE STATE-OF-MATTER BALANCE

     intermolecular force  >>  thermal energy   ->   SOLID
     intermolecular force  ~=  thermal energy   ->   LIQUID
     intermolecular force  <<  thermal energy   ->   GAS
```

---

# 2. THE GAS LAWS  (the four you must be able to state)

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  BOYLE'S LAW          (T, n constant)                                |
  |        V  ~  1/P            P V  =  k1          P1 V1  =  P2 V2      |
  |        graph: P vs V = hyperbola (ISOTHERM)                          |
  |               P vs 1/V = straight line through origin                |
  |               also  d  ~  P    (density proportional to pressure)    |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  CHARLES'S LAW        (P, n constant)                                |
  |         V                    V1        V2                            |
  |        ---  =  k2           ----  =   ----                           |
  |         T                    T1        T2                            |
  |        graph: V vs T(K) = straight line through origin (ISOBAR)      |
  |        V(t) = V0 ( 1 + t / 273.15 )                                  |
  |        extrapolates to ABSOLUTE ZERO = -273.15 degC = 0 K            |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  GAY-LUSSAC'S LAW     (V, n constant)                                |
  |         P                    P1        P2                            |
  |        ---  =  k3           ----  =   ----                           |
  |         T                    T1        T2                            |
  |        graph: P vs T(K) = straight line through origin (ISOCHORE)    |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  AVOGADRO'S LAW       (P, T constant)                                |
  |         V                    V1        V2                            |
  |        ---  =  k4           ----  =   ----          V  ~  n          |
  |         n                    n1        n2                            |
  |        Equal volumes, same T and P -> equal number of molecules      |
  |        1 mole of ANY gas at STP occupies 22.4 L                      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `P1 V1 = P2 V2` | temperature is constant, pressure or volume changes |
| `V1/T1 = V2/T2` | pressure is constant, temperature or volume changes |
| `P1/T1 = P2/T2` | volume is fixed (a sealed rigid cylinder), T changes |
| `V1/n1 = V2/n2` | more or less gas is added at fixed T and P |
| `n = V / 22.4` | volume at STP given, moles wanted |

---

# 3. THE IDEAL GAS EQUATION AND ITS FAMILY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |            P  V   =   n  R  T          <== THE MASTER EQUATION       |
  |                                                                      |
  |                                m                                     |
  |            P  V   =   -------------  R T                             |
  |                             M                                        |
  |                                                                      |
  |            P  V   =   N k T          (N = number of MOLECULES)       |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  COMBINED GAS LAW      (n fixed - no gas escapes)                    |
  |                                                                      |
  |            P1 V1          P2 V2                                      |
  |          ---------  =   ---------                                    |
  |             T1             T2                                        |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  DENSITY AND MOLAR MASS FORMS                                        |
  |                                                                      |
  |              P M                        d R T                        |
  |      d  =  ---------            M  =  ---------                      |
  |              R T                          P                          |
  |                                                                      |
  |      At STP:      M  =  d(g/L)  x  22.4                              |
  |                                                                      |
  |      M  =  2  x  vapour density                                      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `PV = nRT` | any single-state problem: find P, V, n or T |
| `P1V1/T1 = P2V2/T2` | a gas moves from one set of conditions to another |
| `n = m / M` | mass given instead of moles |
| `M = mRT / PV` | find the molar mass of an unknown gas from mass + P,V,T |
| `d = PM / RT` | find the density of a gas at given P and T |
| `M = d x 22.4` | density given at STP - fastest route to molar mass |
| `N = n x NA` | number of molecules wanted |

```
  READING OFF PROPORTIONALITIES from PV = nRT
  (very common in EAPCET/JEE one-liners)

     at constant T, n :   P ~ 1/V
     at constant P, n :   V ~ T
     at constant V, n :   P ~ T
     at constant P, T :   V ~ n
     at constant P, T :   d ~ M          (heavier gas = denser)
     at constant T    :   d ~ P
     at constant P    :   d ~ 1/T        (hot air rises)
```

---

# 4. DALTON'S LAW OF PARTIAL PRESSURES

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |      P(total)  =  p1  +  p2  +  p3  +  ...                           |
  |                                                                      |
  |                                                n(i)                  |
  |      p(i)  =  x(i)  x  P(total)      where  x(i) = ---------         |
  |                                                     n(total)         |
  |                                                                      |
  |      x1 + x2 + x3 + ...  =  1                                        |
  |                                                                      |
  |      p(i)  =  n(i) R T / V           (each gas on its own)           |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  GAS COLLECTED OVER WATER                                            |
  |                                                                      |
  |      P(dry gas)  =  P(measured total)  -  AQUEOUS TENSION            |
  |                                                                      |
  |      aqueous tension = vapour pressure of water at that temperature  |
  |         23.8 mm Hg at 25 degC  ;  760 mm Hg at 100 degC              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `P = p1 + p2 + ...` | total pressure of a non-reacting mixture |
| `p(i) = x(i) P` | partial pressure when mole fractions are known |
| `P(dry) = P(total) - aq. tension` | gas collected over water |

---

# 5. KINETIC MOLECULAR THEORY AND THE KINETIC GAS EQUATION

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  KINETIC GAS EQUATION                                                |
  |                                                                      |
  |                    1                                                 |
  |          P V  =   ---  m  N  c^2                                     |
  |                    3                                                 |
  |                                                                      |
  |     m = mass of ONE molecule ,  N = number of molecules              |
  |     c^2 = mean square speed  ,  c = u(rms)                           |
  |                                                                      |
  |                            1                                         |
  |     For 1 mole:   P V  =  ---  M  c^2                                |
  |                            3                                         |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  KINETIC ENERGY                                                      |
  |                                                                      |
  |            3                3                                        |
  |     KE = --- P V   =      --- n R T     for n moles                  |
  |            2                2                                        |
  |                                                                      |
  |            3                                                         |
  |     KE = --- k T                        per MOLECULE                 |
  |            2                                                         |
  |                                                                      |
  |     AVERAGE KINETIC ENERGY DEPENDS ONLY ON TEMPERATURE.              |
  |     It is the SAME for every gas at the same T.                      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  THE NINE POSTULATES (short form for revision)

    1  gas = very large number of tiny particles
    2  volume of the molecules is NEGLIGIBLE
    3  NO attractive or repulsive forces between molecules
    4  constant, rapid, RANDOM motion
    5  collisions are PERFECTLY ELASTIC
    6  pressure = bombardment of the walls
    7  average KE  ~  absolute temperature
    8  different speeds, but same average KE for all gases at same T
    9  gravity has no effect
```

---

# 6. MOLECULAR SPEEDS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                      +-------------          +-------------          |
  |                     /   2 R T                /   2 P V               |
  |     u(mp)   =      /  ----------      =     /   --------             |
  |                  \/        M              \/        M                |
  |                                                                      |
  |                      +-------------                                  |
  |                     /   8 R T                                        |
  |     u(av)   =      /  ----------                                     |
  |                  \/     pi  M                                        |
  |                                                                      |
  |                      +-------------          +---------              |
  |                     /   3 R T                /  3 P                  |
  |     u(rms)  =      /  ----------      =     /  ------                |
  |                  \/        M              \/     d                   |
  |                                                                      |
  |                                                                      |
  |     RATIO :   u(mp) : u(av) : u(rms)  =  1 : 1.128 : 1.224           |
  |               = sqrt(2) : sqrt(8/pi) : sqrt(3)                       |
  |                                                                      |
  |     u(av)  = 0.9213 x u(rms)      u(mp) = 0.8165 x u(rms)            |
  |     u(av)  = 1.128  x u(mp)                                          |
  |                                                                      |
  |     ALWAYS:     u(mp)  <  u(av)  <  u(rms)                           |
  |                                                                      |
  |     T in KELVIN.  With R = 8.314, M must be in kg/mol.               |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `u(rms) = sqrt(3RT/M)` | default speed question; also linked to KE |
| `u(rms) = sqrt(3P/d)` | pressure and density given instead of T and M |
| `u(av) = sqrt(8RT/piM)` | "average speed" asked explicitly |
| `u(mp) = sqrt(2RT/M)` | "most probable speed", the peak of the curve |
| ratio `1 : 1.128 : 1.224` | convert one speed into another in one step |
| `u1/u2 = sqrt(T1 M2 / T2 M1)` | comparing two gases or two temperatures |

```
  MAXWELL DISTRIBUTION - THE FOUR FACTS TO STATE

    1. curve starts at the origin, rises to a peak at u(mp), then falls
       with a long tail to the right (NOT symmetrical)
    2. AREA under the curve = total number of molecules (constant)
    3. HIGHER TEMPERATURE  -> peak moves RIGHT, becomes LOWER and BROADER
    4. LOWER MOLAR MASS    -> peak moves RIGHT, becomes LOWER and BROADER
       (light gases are faster at the same temperature)
```

---

# 7. GRAHAM'S LAW OF DIFFUSION / EFFUSION

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |               1                    1                                 |
  |      r   ~  --------    ~       --------                             |
  |              sqrt(d)             sqrt(M)                             |
  |                                                                      |
  |       r1        +--------          +--------                         |
  |      ----  =   /   M2      =      /   d2                             |
  |       r2     \/    M1           \/    d1                             |
  |                                                                      |
  |      Same volume in different times:                                 |
  |                                                                      |
  |       r1        t2                                                   |
  |      ----  =  ------                                                 |
  |       r2        t1                                                   |
  |                                                                      |
  |      Also  M = 2 x vapour density, so densities/VDs may be used.     |
  |                                                                      |
  |      If pressures differ:   r  ~  P / sqrt(M)                        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `r1/r2 = sqrt(M2/M1)` | compare diffusion rates of two gases |
| `r1/r2 = t2/t1` | the same volume takes different times |
| `M = 64 / (ratio)^2` style rearrangement | find an unknown molar mass |

---

# 8. REAL GASES — COMPRESSIBILITY FACTOR

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |              P V          P V(m)         V(real)                     |
  |      Z  =  --------  =  ---------  =  -------------                  |
  |             n R T           R T          V(ideal)                    |
  |                                                                      |
  |      Z is DIMENSIONLESS.                                             |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  +---------+------------------------+--------------------------------+
  |  VALUE  |  MEANING               |  WHEN                          |
  +---------+------------------------+--------------------------------+
  |  Z = 1  |  IDEAL behaviour       |  low P, high T                 |
  |  Z < 1  |  ATTRACTION dominates  |  low to moderate P             |
  |         |  more compressible     |  (negative deviation)          |
  |  Z > 1  |  molecular SIZE /      |  high P; also H2 and He at     |
  |         |  repulsion dominates   |  ALL pressures                 |
  |         |  less compressible     |  (positive deviation)          |
  +---------+------------------------+--------------------------------+

  REAL GAS -> IDEAL at   LOW PRESSURE  and  HIGH TEMPERATURE
  MOST deviation: CO2, SO2, NH3 (easily liquefied)
  LEAST deviation: H2, He, Ne
```

---

# 9. THE VAN DER WAALS EQUATION

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |         +-             a n^2   -+                                    |
  |         |   P    +   ---------  |  (  V  -  n b  )   =   n R T       |
  |         +-               V^2   -+                                    |
  |                                                                      |
  |     for 1 mole:                                                      |
  |                                                                      |
  |         +-           a   -+                                          |
  |         |   P   +  ------ |  (  V  -  b  )   =   R T                 |
  |         +-          V^2  -+                                          |
  |                                                                      |
  |     Rearranged to give P directly:                                   |
  |                                                                      |
  |               n R T          a n^2                                   |
  |       P  =  ---------   -   -------                                  |
  |               V - n b         V^2                                    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  +---------+----------------------------+-----------------------------+
  | CONSTANT|  WHAT IT MEASURES          |  UNITS                      |
  +---------+----------------------------+-----------------------------+
  |    a    |  strength of intermolecular|  atm L^2 mol^-2             |
  |         |  ATTRACTION                |  (SI: Pa m^6 mol^-2)        |
  |         |  large a -> easily         |                             |
  |         |  liquefied, high Tc        |                             |
  +---------+----------------------------+-----------------------------+
  |    b    |  effective VOLUME of the   |  L mol^-1                   |
  |         |  molecules (excluded /     |  (SI: m^3 mol^-1)           |
  |         |  co-volume) ~ 4 x actual   |                             |
  |         |  volume of 1 mole          |                             |
  +---------+----------------------------+-----------------------------+

  IDEAL GAS  <->  a = 0  and  b = 0
```

```
  BOYLE TEMPERATURE

              a
     T(B) = ------      the temperature at which a real gas obeys
             R b        the ideal gas law over a wide pressure range
```

---

# 10. LIQUEFACTION AND CRITICAL CONSTANTS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     T(c)  CRITICAL TEMPERATURE                                       |
  |           the temperature ABOVE which a gas cannot be liquefied      |
  |           no matter how great the pressure                           |
  |                                                                      |
  |     P(c)  CRITICAL PRESSURE                                          |
  |           the minimum pressure required to liquefy the gas AT T(c)   |
  |                                                                      |
  |     V(c)  CRITICAL VOLUME                                            |
  |           the volume of ONE MOLE at T(c) and P(c)                    |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |                8 a                    a                              |
  |     T(c)  =  ---------     P(c)  =  --------     V(c)  =  3 b        |
  |                27 R b                27 b^2                          |
  |                                                                      |
  |          P(c) V(c)          3                                        |
  |         ------------  =   -----  =  0.375     (same for every gas)   |
  |          R  T(c)            8                                        |
  |                                                                      |
  |     Inverse forms:      a = 3 P(c) V(c)^2      b = V(c) / 3          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  CRITICAL TEMPERATURES TO REMEMBER (the trend matters most)

     He     5.3 K       hardest to liquefy (weakest forces, smallest a)
     H2    33.2 K
     N2   126.0 K
     O2   154.3 K
     CO2  304.1 K  = 31.1 degC     <== the Andrews isotherm gas
     NH3  405.5 K  = 132.4 degC    easiest of these to liquefy

  HIGH T(c)  ->  strong intermolecular forces  ->  EASY to liquefy

  VAPOUR = gaseous substance BELOW its Tc  (can be liquefied by pressure)
  GAS    = gaseous substance ABOVE its Tc  (pressure alone will not work)
```

---

# 11. THE LIQUID STATE — DEFINITIONS AND UNITS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  VAPOUR PRESSURE                                                     |
  |    the pressure of the vapour in equilibrium with its own liquid     |
  |    at a given temperature.                                           |
  |    INCREASES with temperature.                                       |
  |    INCREASES when intermolecular forces are WEAK (volatile liquid).  |
  |    Does NOT depend on surface area or on the amount of liquid.       |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  BOILING POINT                                                       |
  |    the temperature at which vapour pressure = external pressure.     |
  |    NORMAL b.p.   -> external pressure = 1 atm  (water 100 degC)      |
  |    STANDARD b.p. -> external pressure = 1 bar  (water 99.6 degC)     |
  |    external pressure UP   ->  boiling point UP  (pressure cooker)    |
  |    external pressure DOWN ->  boiling point DOWN (hill station)      |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  SURFACE TENSION  (gamma)                                            |
  |    force acting per unit length on the surface of a liquid,          |
  |    at right angles to an imaginary line on that surface.             |
  |    = work needed to increase the surface area by 1 unit.             |
  |                                                                      |
  |         SI    :  N m^-1   =  J m^-2                                  |
  |         CGS   :  dyne cm^-1  =  erg cm^-2                            |
  |         1 N m^-1  =  1000 dyne cm^-1                                 |
  |         dimensions:  M T^-2                                          |
  |                                                                      |
  |    Water at 20 degC : 72.8 dyne/cm = 0.0728 N/m                      |
  |    TEMPERATURE UP  ->  surface tension DOWN (zero at Tc)             |
  |    Explains: spherical drops, insects on water, capillary rise       |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  VISCOSITY  (eta)                                                    |
  |    the resistance of a liquid to flow.                               |
  |                                du                                    |
  |            F   =   eta  A   -------                                  |
  |                                dz                                    |
  |    COEFFICIENT OF VISCOSITY eta = force per unit area needed to      |
  |    keep a unit velocity difference between two parallel layers       |
  |    a unit distance apart.                                            |
  |                                                                      |
  |         SI    :  N s m^-2  =  Pa s  =  kg m^-1 s^-1                  |
  |         CGS   :  POISE  =  g cm^-1 s^-1                              |
  |         1 poise = 0.1 Pa s        1 Pa s = 10 poise                  |
  |                                                                      |
  |    TEMPERATURE UP  ->  viscosity DOWN                                |
  |    Stronger H-bonding / longer chains  ->  viscosity UP              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  +-----------------------------------------------------------------+
  |   ON HEATING A LIQUID:                                          |
  |                                                                 |
  |       VAPOUR PRESSURE     ->   INCREASES                        |
  |       SURFACE TENSION     ->   DECREASES                        |
  |       VISCOSITY           ->   DECREASES                        |
  |                                                                 |
  |   Two DOWN, one UP. This is a guaranteed 2-mark question.       |
  +-----------------------------------------------------------------+
```

---

# 12. GRAPH SHAPES — ONE TABLE

| Plot | Conditions | Shape | Name |
|---|---|---|---|
| P vs V | T constant | rectangular hyperbola | isotherm |
| P vs 1/V | T constant | straight line through origin | — |
| V vs 1/P | T constant | straight line through origin | — |
| PV vs P | T constant | horizontal straight line (ideal) | — |
| V vs T (K) | P constant | straight line through origin | isobar |
| V vs t (degC) | P constant | straight line cutting T-axis at -273.15 | isobar |
| P vs T (K) | V constant | straight line through origin | isochore |
| V vs n | P, T constant | straight line through origin | — |
| Z vs P | real gas | dips below 1 then rises (H2, He only rise) | — |
| Fraction vs speed | Maxwell | skewed peak with a long right tail | Maxwell curve |
| P vs V (real, low T) | Andrews | curve with a FLAT portion | Andrews isotherm |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+-----------------------------------------------------------------+
  |  1 |   P V  =  n R T                    R = 0.0821 / 0.083 / 8.314   |
  +----+-----------------------------------------------------------------+
  |  2 |   P1 V1 / T1   =   P2 V2 / T2      (combined gas law)           |
  +----+-----------------------------------------------------------------+
  |  3 |   P1 V1 = P2 V2   |   V1/T1 = V2/T2   |   P1/T1 = P2/T2         |
  +----+-----------------------------------------------------------------+
  |  4 |   n = m / M  = V(at STP) / 22.4  = N / (6.022 x 10^23)          |
  +----+-----------------------------------------------------------------+
  |  5 |   d = P M / R T        M = d R T / P        M = d x 22.4 (STP)  |
  +----+-----------------------------------------------------------------+
  |  6 |   p(i) = x(i) x P(total)      P(dry) = P(total) - aq. tension   |
  +----+-----------------------------------------------------------------+
  |  7 |   u(rms) = sqrt( 3 R T / M )        M in kg/mol with R = 8.314  |
  +----+-----------------------------------------------------------------+
  |  8 |   u(mp) : u(av) : u(rms)  =  1 : 1.128 : 1.224                  |
  +----+-----------------------------------------------------------------+
  |  9 |   KE = (3/2) n R T  per n moles     KE = (3/2) k T per molecule |
  +----+-----------------------------------------------------------------+
  | 10 |   r1 / r2  =  sqrt( M2 / M1 )  =  t2 / t1      (Graham)         |
  +----+-----------------------------------------------------------------+
  | 11 |   Z = P V / n R T       Z<1 attraction , Z>1 size               |
  +----+-----------------------------------------------------------------+
  | 12 |   ( P + a n^2 / V^2 ) ( V - n b ) = n R T                       |
  |    |   a : atm L^2 mol^-2      b : L mol^-1                          |
  +----+-----------------------------------------------------------------+
```

**And the one line that saves you every time:**

```
        T (K)   =   t (degC)   +   273
```
