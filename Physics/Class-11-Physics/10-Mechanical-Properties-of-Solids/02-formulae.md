# Mechanical Properties of Solids — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

Everywhere below:
`F` = applied force, `A` = area of cross-section, `L` = original length,
`dL` = change in length, `V` = original volume, `dV` = change in volume,
`P` = hydraulic pressure, `Y` = Young's modulus, `B` = bulk modulus,
`eta` = rigidity (shear) modulus, `sigma` = Poisson's ratio,
`theta` = angle of shear, `alpha` = coefficient of linear expansion,
`rho` = density, `g` = 9.8 m/s².

---

# 1. STRESS AND STRAIN — THE TWO DEFINITIONS EVERYTHING RESTS ON

```
  +------------------------------------------------------------+
  |                                                            |
  |                internal restoring force        F           |
  |   STRESS   =  --------------------------  =   ---          |
  |                    area of section             A           |
  |                                                            |
  |   Unit  :  N/m^2  =  pascal (Pa)                           |
  |   Dim   :  [ M^1 L^-1 T^-2 ]      (same as pressure)       |
  |                                                            |
  +------------------------------------------------------------+

  +------------------------------------------------------------+
  |                                                            |
  |                    change in the dimension                 |
  |   STRAIN   =   ------------------------------              |
  |                    original dimension                      |
  |                                                            |
  |   Unit  :  NONE          Dim :  [ M^0 L^0 T^0 ]            |
  |   Reason:  it is a length / length ratio — units cancel.   |
  |                                                            |
  +------------------------------------------------------------+
```

## The three matching pairs

```
  +-------------------------+------------------------+------------------------+
  |  TYPE                   |  STRESS                |  STRAIN                |
  +-------------------------+------------------------+------------------------+
  |  LONGITUDINAL           |     F / A              |     dL / L             |
  |  (tensile if pulled,    |  force NORMAL to       |  fractional change     |
  |   compressive if pushed)|  the cross-section     |  in LENGTH             |
  +-------------------------+------------------------+------------------------+
  |  SHEARING / TANGENTIAL  |     F / A              |   theta  =  x / h      |
  |                         |  force PARALLEL to     |  the ANGLE OF SHEAR    |
  |                         |  the surface           |  (radians)             |
  +-------------------------+------------------------+------------------------+
  |  HYDRAULIC / VOLUME     |     P                  |     dV / V             |
  |                         |  pressure from ALL     |  fractional change     |
  |                         |  sides, always normal  |  in VOLUME             |
  +-------------------------+------------------------+------------------------+
```

| Formula | When to use |
|---|---|
| `stress = F / A` | any "find the stress in the wire / rod / rope" |
| `F = m g` | whenever the load is given as a MASS in kg |
| `A = pi r^2` | circular wire — **halve the diameter first** |
| `strain = dL / L` | stretching or compressing along the length |
| `theta = x / h` | the top face is slid sideways by `x` |
| `dV / V` | the body is squeezed by a fluid |

---

# 2. HOOKE'S LAW AND THE MODULUS OF ELASTICITY

```
  +--------------------------------------------------------------+
  |                                                              |
  |    HOOKE'S LAW                                               |
  |    Within the ELASTIC LIMIT, stress is directly              |
  |    proportional to strain.                                   |
  |                                                              |
  |          stress  ∝  strain                                   |
  |                                                              |
  |          stress  =  E  x  strain                             |
  |                                                              |
  |                       stress                                 |
  |             E   =   ----------      (modulus of elasticity)  |
  |                       strain                                 |
  |                                                              |
  |    Unit of E  :  Pa      Dim :  [ M L^-1 T^-2 ]              |
  |    (E has the same unit as stress because strain has none.)  |
  |                                                              |
  +--------------------------------------------------------------+
```

| Fact | Why it matters |
|---|---|
| Valid only up to the **proportional limit** | the standard "limits of validity" question |
| `E` depends on the **material and temperature only** | not on length, area or load |
| **Elastomers never obey it** | rubber is elastic but not Hookean |

---

# 3. YOUNG'S MODULUS  Y

```
  +--------------------------------------------------------------+
  |                                                              |
  |               longitudinal stress        F / A       F L     |
  |    Y   =    -----------------------  =  --------  =  -----   |
  |               longitudinal strain        dL / L      A dL    |
  |                                                              |
  |    For a circular wire of radius r carrying a mass m :       |
  |                                                              |
  |                    m g L                                     |
  |          Y   =   -----------                                 |
  |                   pi r^2 dL                                  |
  |                                                              |
  |    Rearranged (the version you will actually use):           |
  |                                                              |
  |                   F L            m g L                       |
  |         dL   =  --------  =   -----------                    |
  |                   A Y          pi r^2 Y                      |
  |                                                              |
  |    Unit  :  Pa       Dim :  [ M L^-1 T^-2 ]                  |
  |    Exists for SOLIDS only.                                   |
  |                                                              |
  +--------------------------------------------------------------+
```

## Proportionalities to quote instantly in MCQs

```
                    L                            1
      dL   ∝   ---------                dL  ∝   ---
                 r^2  Y                          Y

      Length x 2            ->   dL x 2
      Radius x 2            ->   dL / 4
      Diameter x 2          ->   dL / 4
      Y x 2                 ->   dL / 2
      Load x 2              ->   dL x 2
      Wire cut in half      ->   dL / 2  (breaking load UNCHANGED)
```

## The wire as a spring

```
                A Y
      k   =   -------           F  =  k dL
                 L

      SHORT and THICK  ->  large k  ->  stiff
      LONG and THIN    ->  small k  ->  floppy
```

| Formula | When to use |
|---|---|
| `Y = F L / (A dL)` | "find Young's modulus of the wire" |
| `dL = F L / (A Y)` | "find the extension / elongation" |
| `F = Y A dL / L` | "what force produces this extension" |
| `F = Y A` (strain = 1) | "force needed to DOUBLE the length" |
| `k = A Y / L` | wire treated as a spring, oscillations |
| `dL ∝ L / r^2` | any "ratio of elongations" MCQ |

## Typical values of Y

| Material | Y (Pa) | Material | Y (Pa) |
|---|---|---|---|
| Tungsten | `3.5 x 10^11` | Brass | `0.9 x 10^11` |
| Steel | `2.0 x 10^11` | Aluminium | `0.7 x 10^11` |
| Iron | `1.9 x 10^11` | Glass | `0.55 x 10^11` |
| Copper | `1.1 x 10^11` | Lead | `0.16 x 10^11` |
| | | Rubber | `10^6` to `10^8` |

---

# 4. BULK MODULUS  B  AND COMPRESSIBILITY  K

```
  +--------------------------------------------------------------+
  |                                                              |
  |             hydraulic stress             P             P V   |
  |    B   =   -------------------   =   - ---------  =  - ----- |
  |               volume strain            ( dV / V )       dV   |
  |                                                              |
  |    The MINUS SIGN is there because an increase in            |
  |    pressure always DECREASES the volume (dV is negative),    |
  |    so the minus makes B positive.                            |
  |                                                              |
  |    Unit  :  Pa       Dim :  [ M L^-1 T^-2 ]                  |
  |    Exists for SOLIDS, LIQUIDS and GASES.                     |
  |                                                              |
  +--------------------------------------------------------------+

  +--------------------------------------------------------------+
  |                                                              |
  |                                 1                            |
  |    COMPRESSIBILITY      K  =   ---                           |
  |                                 B                            |
  |                                                              |
  |    Unit  :  Pa^-1  =  m^2/N     Dim :  [ M^-1 L^1 T^2 ]      |
  |                                                              |
  +--------------------------------------------------------------+
```

## Useful rearrangements

```
       dV        P                                   P V
      ----  =  -----          |         dV   =   -  -----
        V        B            |                     B

       For a gas at constant temperature :   B(isothermal)  =  P
       For a gas, adiabatic               :   B(adiabatic)   =  gamma P
```

| Formula | When to use |
|---|---|
| `B = -P / (dV/V)` | "find the bulk modulus" |
| `dV/V = P / B` | "fractional / percentage change in volume" |
| `dV = P V / B` | "by how many cm³ does the volume shrink" |
| `K = 1 / B` | anything with the word "compressibility" |
| `P = h rho g` | deep-sea questions: first find the pressure at depth |

## Typical values

| Substance | B (Pa) | K (Pa⁻¹) |
|---|---|---|
| Steel | `1.6 x 10^11` | `6.3 x 10^-12` |
| Copper | `1.4 x 10^11` | `7.1 x 10^-12` |
| Glass | `0.37 x 10^11` | `2.7 x 10^-11` |
| Water | `2.2 x 10^9` | `4.5 x 10^-10` |
| Air (isothermal) | `1.0 x 10^5` | `1.0 x 10^-5` |

---

# 5. RIGIDITY (SHEAR) MODULUS  eta

```
  +--------------------------------------------------------------+
  |                                                              |
  |              shearing stress        F / A         F          |
  |   eta   =   ------------------  =  ---------  =  --------    |
  |              shearing strain         theta        A theta    |
  |                                                              |
  |   and with  theta = x / h :                                  |
  |                                                              |
  |                     F h                                      |
  |          eta  =   -------                                    |
  |                     A x                                      |
  |                                                              |
  |   Unit  :  Pa       Dim :  [ M L^-1 T^-2 ]                   |
  |   Exists for SOLIDS ONLY.  For liquids and gases  eta = 0.   |
  |                                                              |
  +--------------------------------------------------------------+
```

```
   For most metals :        eta   ~   Y / 3
   Usual ordering  :        Y   >   B   >   eta
   Meaning         :  changing a solid's SHAPE is easier than
                      changing its VOLUME or its LENGTH.
```

| Formula | When to use |
|---|---|
| `eta = F / (A theta)` | shear stress and angle given |
| `theta = F / (A eta)` | "find the angle of shear" |
| `x = theta h` | "find how far the top face moves" |
| `eta = 0` | "what is the rigidity modulus of a liquid?" |

## Typical values of eta

| Material | eta (Pa) | Material | eta (Pa) |
|---|---|---|---|
| Steel | `8.4 x 10^10` | Aluminium | `2.5 x 10^10` |
| Iron | `7.0 x 10^10` | Glass | `2.3 x 10^10` |
| Copper | `4.2 x 10^10` | Lead | `0.56 x 10^10` |

---

# 6. POISSON'S RATIO  sigma

```
  +--------------------------------------------------------------+
  |                                                              |
  |                 lateral strain          dd / d      dr / r   |
  |   sigma   =   ---------------------  =  -------- =  -------- |
  |                 longitudinal strain      dL / L      dL / L  |
  |                                                              |
  |   (a minus sign is included in the strict definition,        |
  |    because the two strains are always opposite in sign;      |
  |    in numericals use the magnitudes)                         |
  |                                                              |
  |   NO UNIT       NO DIMENSIONS      [ M^0 L^0 T^0 ]           |
  |                                                              |
  |   THEORETICAL range :   -1   to   +0.5                       |
  |   PRACTICAL   range :    0   to   +0.5                       |
  |   ACTUAL values     :   0.2  to    0.4  for most solids      |
  |                                                              |
  +--------------------------------------------------------------+
```

```
   Volume change of a stretched wire :

        dV                              dL
       ----  =  ( 1 - 2 sigma )   x    ----
         V                               L

        sigma = 0.5  ->  dV = 0 , volume unchanged (rubber)
        sigma < 0.5  ->  volume increases on stretching
```

## Relations between the moduli (bonus marks, not compulsory)

```
      Y  =  3 B ( 1 - 2 sigma )              Y  =  2 eta ( 1 + sigma )

       9        1        3                            3 B  -  2 eta
      ---  =   ---  +  -----          sigma  =    -----------------------
       Y        B       eta                         2 ( 3 B  +  eta )
```

---

# 7. ELASTIC POTENTIAL ENERGY

```
  +----------------------------------------------------------------+
  |                                                                |
  |    WORK DONE / ENERGY STORED in a stretched wire               |
  |                                                                |
  |            1                     1     Y A ( dL )^2            |
  |      U  =  -  x  F  x  dL   =    -  x  ---------------         |
  |            2                     2           L                 |
  |                                                                |
  |            1                                                   |
  |      U  =  -  x  stress  x  strain  x  VOLUME                  |
  |            2                                                   |
  |                                                                |
  |    Unit  :  joule (J)      Dim :  [ M L^2 T^-2 ]               |
  |                                                                |
  +----------------------------------------------------------------+

  +----------------------------------------------------------------+
  |                                                                |
  |    ENERGY PER UNIT VOLUME (energy density)                     |
  |                                                                |
  |            U        1                                          |
  |      u  =  ---  =   -  x  stress  x  strain                    |
  |            V        2                                          |
  |                                                                |
  |            1                       ( stress )^2                |
  |         =  -  Y ( strain )^2   =  ----------------             |
  |            2                            2 Y                    |
  |                                                                |
  |    Unit  :  J/m^3          Dim :  [ M L^-1 T^-2 ]              |
  |                                                                |
  |    u  =  the AREA UNDER the stress-strain graph                |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `U = (1/2) F dL` | force and extension both given |
| `U = (1/2) Y A (dL)^2 / L` | Y, dimensions and extension given |
| `U = (1/2) stress x strain x V` | the derivation question; also "energy per unit volume" |
| `u = stress^2 / (2Y)` | breaking-stress / energy-density MCQs |
| area under the curve | "what does the area under a stress-strain graph represent?" |

> **Remember the 1/2.** The stretching force grows from 0 to `F`, so the *average*
> force is `F/2`. Writing `U = F dL` loses the mark every single time.

---

# 8. SPECIAL STANDARD RESULTS

## 8.1 Wire elongating under its OWN WEIGHT

```
  +----------------------------------------------------------------+
  |                                                                |
  |                 M g L            rho g L^2                     |
  |        dL  =  ----------   =   -------------                   |
  |                 2 A Y               2 Y                        |
  |                                                                |
  |   The weight acts effectively at the CENTRE OF MASS,           |
  |   i.e. at L/2  ->  hence the factor 2 in the denominator.      |
  |                                                                |
  +----------------------------------------------------------------+
```

## 8.2 Thermal stress in a rod clamped at both ends

```
  +----------------------------------------------------------------+
  |                                                                |
  |     thermal strain  =  alpha  x  dT                            |
  |                                                                |
  |     THERMAL STRESS  =  Y  alpha  dT                            |
  |                                                                |
  |     THERMAL FORCE   =  Y  A  alpha  dT                         |
  |                                                                |
  |     NEITHER depends on the LENGTH of the rod.                  |
  |                                                                |
  +----------------------------------------------------------------+
```

## 8.3 Two wires joined in series (same force through both)

```
                    F L1          F L2
       dL(total) = --------  +  --------
                    A1 Y1         A2 Y2
```

## 8.4 Bending of a beam

```
  +----------------------------------------------------------------+
  |                                                                |
  |   SUPPORTED AT BOTH ENDS, LOAD W AT THE CENTRE                 |
  |                                                                |
  |                     W L^3                                      |
  |        delta  =  -------------                                 |
  |                   4 b d^3 Y                                    |
  |                                                                |
  |   CANTILEVER, LOAD W AT THE FREE END                           |
  |                                                                |
  |                    4 W L^3                                     |
  |        delta  =  ------------                                  |
  |                    Y b d^3                                     |
  |                                                                |
  |   b = breadth ,  d = DEPTH ,  L = span                         |
  |                                                                |
  |   delta ∝ L^3    delta ∝ 1/d^3    delta ∝ 1/b    delta ∝ 1/Y   |
  |                                                                |
  |   DEPTH is cubed, breadth is not  ->  make beams DEEP.         |
  |   That is the whole reason for the  I  cross-section.          |
  |                                                                |
  +----------------------------------------------------------------+
```

## 8.5 Maximum height of a mountain

```
  +----------------------------------------------------------------+
  |                                                                |
  |                          S                                     |
  |         h(max)   =   ---------                                 |
  |                        rho g                                   |
  |                                                                |
  |   S = elastic limit (breaking / shear stress) of rock          |
  |     ~ 3 x 10^8 Pa ,  rho ~ 3 x 10^3 kg/m^3                     |
  |                                                                |
  |   ->   h(max)  ~  10 km      (Everest is 8.85 km)              |
  |                                                                |
  +----------------------------------------------------------------+
```

## 8.6 Crane rope / safe load

```
       Safe load   =   safe working stress   x   A

       A  =  F / (safe stress)          then      r = sqrt( A / pi )

       Rope is made of MANY THIN STRANDS: same area -> same strength,
       but FLEXIBLE enough to pass over the pulleys.
```

## 8.7 Breaking stress and breaking length

```
       Breaking force  =  breaking stress  x  A
          -> independent of the LENGTH of the wire
          -> ∝ A , so ∝ r^2

       Maximum length of a wire that can hang without breaking
       under its own weight:

                        breaking stress
              L(max) = -----------------
                            rho g
```

---

# 9. STRESS–STRAIN CURVE — THE LABELS ARE THE FORMULA

```
  stress
    ^                                D
    |                           **********
    |                       ****          ****
    |                    ***                  **  E  (fracture)
    |                  **
    |            B   **
    |         A  x  *
    |          x*  |
    |        **    |
    |      **      |
    |    **        |
    |  **          |
    +--------------+---------------------------------> strain
    O
       O - A   straight line, HOOKE'S LAW obeyed
       A       PROPORTIONAL LIMIT
       B       ELASTIC LIMIT / YIELD POINT  (yield strength sigma_y)
       B - D   PLASTIC REGION, permanent set on unloading
       D       ULTIMATE TENSILE STRENGTH  (sigma_u)  <- the PEAK
       D - E   necking
       E       FRACTURE POINT
```

| Region asked about | The answer |
|---|---|
| Slope of `OA` | Young's modulus `Y` |
| Area under the curve | energy per unit volume |
| Total area up to `E` | toughness |
| Long `B–E` stretch | **ductile** material |
| Almost no `B–E` stretch | **brittle** material |
| No straight portion, huge strain | **elastomer** |

---

# 10. QUICK CONVERSIONS AND CONSTANTS

```
   1 mm   =  10^-3 m           1 mm^2  =  10^-6 m^2
   1 cm   =  10^-2 m           1 cm^2  =  10^-4 m^2
   1 cm^3 =  10^-6 m^3         1 litre =  10^-3 m^3
   1 GPa  =  10^9 Pa           1 MPa   =  10^6 Pa
   1 kgf  =  9.8 N             1 tonne =  1000 kg

   g  =  9.8 m/s^2   (use 10 only if the question says so)
   pi =  3.14
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+---------------------------------------------------------------+
  | 1  |  stress  =  F / A            unit Pa , [M L^-1 T^-2]          |
  +----+---------------------------------------------------------------+
  | 2  |  strain  =  change / original       NO UNITS                  |
  +----+---------------------------------------------------------------+
  | 3  |  HOOKE :  stress = E x strain   (within the elastic limit)    |
  +----+---------------------------------------------------------------+
  | 4  |  Y  =  F L / (A dL)         ->     dL = F L / (A Y)           |
  +----+---------------------------------------------------------------+
  | 5  |  B  =  - P / (dV / V)        and   K = 1 / B                  |
  +----+---------------------------------------------------------------+
  | 6  |  eta  =  F / (A theta) ,  theta = x / h ,  eta = 0 for fluids |
  +----+---------------------------------------------------------------+
  | 7  |  sigma  =  (dd/d) / (dL/L) ,  no units ,  0 to 0.5            |
  +----+---------------------------------------------------------------+
  | 8  |  U  =  (1/2) F dL  =  (1/2) stress x strain x volume          |
  +----+---------------------------------------------------------------+
  | 9  |  u  =  (1/2) Y (strain)^2  =  stress^2 / (2 Y)                |
  +----+---------------------------------------------------------------+
  | 10 |  own weight :   dL  =  M g L / (2 A Y)  =  rho g L^2 / (2 Y)  |
  +----+---------------------------------------------------------------+
  | 11 |  thermal stress  =  Y alpha dT ,  force = Y A alpha dT        |
  +----+---------------------------------------------------------------+
  | 12 |  beam :  delta = W L^3 / (4 b d^3 Y)   ->  I-section girder   |
  +----+---------------------------------------------------------------+
```
