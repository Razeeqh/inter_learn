# Kinetic Theory — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

Every temperature in every formula on this page is in **KELVIN**.
Every molar mass `M` is in **kg/mol**.

---

# 1. CONSTANTS YOU MUST KNOW BY HEART

```
  +---------------------------+--------------------------------+
  |  Avogadro number   NA     |  6.022 x 10^23  per mole       |
  |  Universal gas constant R |  8.314  J mol^-1 K^-1          |
  |  Boltzmann constant  k    |  1.38 x 10^-23  J K^-1         |
  |  Molar volume at STP      |  22.4 litre = 22.4 x 10^-3 m^3 |
  |  Loschmidt number         |  2.69 x 10^25 molecules / m^3  |
  |  1 atmosphere             |  1.013 x 10^5  Pa              |
  |  STP                      |  273.15 K  and  1 atm          |
  |  Molecular diameter d     |  about 2 x 10^-10 m            |
  +---------------------------+--------------------------------+

          R
  k  =  ------            and          R  =  NA x k
          NA

  CHECK:   6.022 x 10^23  x  1.38 x 10^-23   =   8.31        correct
```

```
  R in other units:

     R  =  8.314   J mol^-1 K^-1        <- USE THIS ONE
        =  0.0821  litre-atm mol^-1 K^-1
        =  2       cal mol^-1 K^-1  (approximately)
        =  8.314 x 10^7  erg mol^-1 K^-1
```

| Symbol | Meaning | Unit |
|---|---|---|
| `P` | pressure | Pa (N/m^2) |
| `V` | volume | m^3 |
| `T` | absolute temperature | K |
| `n` | number of moles | mol |
| `N` | number of molecules | — |
| `m` | mass of ONE molecule | kg |
| `M` | molar mass | kg/mol |
| `rho` | density | kg/m^3 |
| `c^2` | mean square speed | m^2/s^2 |
| `f` | degrees of freedom | — |
| `lambda` | mean free path | m |
| `d` | molecular diameter | m |

---

# 2. MOLE AND MOLECULE COUNTING

```
                given mass in grams               given mass in kg
  n   =   ------------------------------   =   ---------------------
            molar mass in g per mole            molar mass in kg/mol


  Number of molecules      N   =   n x NA


                                    N        n NA          NA
  Number density           n_d  =  ---   =  -------  =  ----------
  (molecules per m^3)               V          V          V_molar


  Mass of one molecule      m   =   M / NA


  Volume occupied by                  M              1
  one molecule (estimate)  =  ---------------  =  ----------
                               rho  x  NA           n_d
```

| Formula | When to use |
|---|---|
| `n = mass / molar mass` | first line of nearly every numerical |
| `N = n NA` | "how many molecules ..." |
| `n_d = N/V` | mean free path, `P = n_d k T` |
| `m = M / NA` | when you need the mass of ONE molecule |

---

# 3. THE IDEAL (PERFECT) GAS EQUATION

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     P V   =   n R T             (n = number of MOLES)              |
  |                                                                    |
  |     P V   =   N k T             (N = number of MOLECULES)          |
  |                                                                    |
  |                m                                                   |
  |     P V   =  ----- R T          (m = mass of gas, M = molar mass)  |
  |                M                                                   |
  |                                                                    |
  |              rho R T                                               |
  |     P     =  ---------          (rho = density)                    |
  |                 M                                                  |
  |                                                                    |
  |     P     =  n_d k T            (n_d = number density N/V)         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The individual gas laws

```
  +------------------+---------------+-------------------------------+
  |  LAW             |  HELD FIXED   |  STATEMENT                    |
  +------------------+---------------+-------------------------------+
  |  Boyle           |  T , n        |  P V = constant               |
  |  Charles         |  P , n        |  V / T = constant             |
  |  Gay-Lussac      |  V , n        |  P / T = constant             |
  |  Avogadro        |  P , T        |  V ~ n                        |
  |  Dalton          |  V , T        |  P = P1 + P2 + P3 + ...       |
  |  Graham          |  P , T        |  rate ~ 1 / sqrt(M)           |
  +------------------+---------------+-------------------------------+

  COMBINED (fixed mass of gas):

           P1 V1          P2 V2
          -------   =   -------
             T1            T2
```

## Conditions for ideal behaviour

```
  A real gas behaves ideally at    LOW PRESSURE  and  HIGH TEMPERATURE
                                   (i.e. low density)

  van der Waals equation for a real gas:

        +-        a n^2  -+
        |  P  +  -------- |  ( V - n b )  =  n R T
        +-          V^2  -+

        a -> corrects for intermolecular ATTRACTION
        b -> corrects for the VOLUME of the molecules themselves
```

---

# 4. *** KINETIC INTERPRETATION OF PRESSURE ***

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |               1     m N               1                            |
  |      P   =   --- x ------ x c^2  =   --- rho c^2                   |
  |               3      V                3                            |
  |                                                                    |
  +--------------------------------------------------------------------+


  Rearranged forms:

                       1
      P V      =      --- m N c^2
                       3

                   _______
                  / 3 P                                _______
      c_rms  =   / ------              c_rms  =  sqrt(3 P V / (m N))
               \/   rho

                   2
      P      =    --- E              E = KINETIC ENERGY per unit VOLUME
                   3

                   3
      E      =    --- P              (energy density of a gas)
                   2
```

| Formula | When to use |
|---|---|
| `P = (1/3) rho c^2` | given density and speed, or given P and rho |
| `c = sqrt(3P/rho)` | "find c_rms of air at STP" — the classic |
| `P = (1/3)(mN/V)c^2` | given the number of molecules and their mass |
| `P = (2/3) E` | MCQ: "pressure = ? x kinetic energy density" |

## Key steps of the derivation (write these lines to earn the 4 marks)

```
  1.  Momentum change per collision on one wall   =   2 m vx
  2.  Time between two hits on the same wall      =   2 L / vx
  3.  Force by one molecule  =  2 m vx / (2L/vx)  =   m vx^2 / L
  4.  Force by all molecules =  (m/L) SUM(vx^2)
  5.  P  =  F / L^2  =  (m/V) SUM(vx^2)
  6.  Randomness:  SUM(vx^2) = SUM(vy^2) = SUM(vz^2) = (1/3) SUM(v^2)
  7.  SUM(v^2)  =  N c^2
  8.  P  =  (1/3)(m N / V) c^2  =  (1/3) rho c^2
```

---

# 5. *** KINETIC INTERPRETATION OF TEMPERATURE ***

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   AVERAGE KINETIC ENERGY                                           |
  |                                                                    |
  |     per MOLECULE      (1/2) m c^2    =    (3/2) k T                |
  |                                                                    |
  |     per MOLE          (1/2) M c^2    =    (3/2) R T                |
  |                                                                    |
  |     of n moles              KE       =    (3/2) n R T              |
  |                                                                    |
  |     per DEGREE OF FREEDOM            =    (1/2) k T                |
  |                                                                    |
  +--------------------------------------------------------------------+

  DEPENDS ONLY ON T.   Not on P, not on V, not on the gas.
```

```
  ABSOLUTE ZERO   T = 0 K = -273.15 degC

       c = 0   ->  molecular motion CEASES  ->  P = 0
```

| Formula | When to use |
|---|---|
| `KE = (3/2) k T` | "average KE of a molecule at ... degC" |
| `KE = (3/2) n R T` | total translational KE of a sample |
| `KE1/KE2 = T1/T2` | "at what temperature is the KE doubled?" |
| `E = (3/2) P` | energy per unit volume from pressure |

---

# 6. MOLECULAR SPEEDS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                    _______        _______        _______           |
  |                   / 3 R T        / 3 k T        / 3 P              |
  |     c      =     / -------  =   / -------  =   / -----             |
  |      rms       \/    M        \/    m        \/   rho              |
  |                                                                    |
  |                    ________       ________                         |
  |                   / 8 R T        / 8 k T                           |
  |     v      =     / -------  =   / -------                          |
  |      av        \/  pi M       \/  pi m                             |
  |                                                                    |
  |                    _______        _______                          |
  |                   / 2 R T        / 2 k T                           |
  |     v      =     / -------  =   / -------                          |
  |      mp        \/    M        \/    m                              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The ratio — write it on your palm

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   v_mp  :  v_av  :  c_rms  =  sqrt2 : sqrt(8/pi) : sqrt3           |
  |                                                                    |
  |                            =  1.414 : 1.596 : 1.732                |
  |                                                                    |
  |                            =    1   : 1.128 : 1.224                |
  |                                                                    |
  |   ALWAYS:      v_mp   <   v_av   <   c_rms                         |
  |                                                                    |
  +--------------------------------------------------------------------+

  QUICK CONVERSIONS

     v_av  =  0.921 x c_rms          c_rms =  1.085 x v_av
     v_mp  =  0.816 x c_rms          c_rms =  1.225 x v_mp
     v_mp  =  0.886 x v_av           v_av  =  1.128 x v_mp
```

## Proportionalities

```
                 ____                       1                     ____
    c     ~    \/ T           c     ~   ---------       c   ~   \/ P/rho
     rms                       rms       sqrt(M)         rms

    c_rms is INDEPENDENT of pressure alone and of volume alone.
```

```
  +--------------------------------------------+---------------------+
  |  CHANGE                                    |  c_rms BECOMES      |
  +--------------------------------------------+---------------------+
  |  T doubled                                 |  x 1.414            |
  |  T x 4                                     |  x 2                |
  |  T x 9                                     |  x 3                |
  |  M doubled                                 |  x 0.707            |
  |  M x 4                                     |  x 0.5              |
  |  P doubled at constant T                   |  UNCHANGED          |
  |  V halved at constant T                    |  UNCHANGED          |
  +--------------------------------------------+---------------------+
```

## Comparing two gases

```
    c1              T1 / M1               c1              M2
   ----  =   sqrt ------------          ----  =   sqrt  ------   (same T)
    c2              T2 / M2               c2              M1


    c1              T1
   ----  =   sqrt  ------                                  (same gas)
    c2              T2
```

## Ready-made values (worth memorising two of them)

```
  +-----------+----------+---------------+----------------+
  |  GAS      |  M       |  c_rms at 0degC|  c_rms at 27degC|
  +-----------+----------+---------------+----------------+
  |  H2       |  2  g    |   1845 m/s    |   1934 m/s     |
  |  He       |  4  g    |   1305 m/s    |   1368 m/s     |
  |  N2       |  28 g    |    493 m/s    |    517 m/s     |
  |  Air      |  29 g    |    485 m/s    |    508 m/s     |
  |  O2       |  32 g    |    461 m/s    |    484 m/s     |
  |  CO2      |  44 g    |    393 m/s    |    412 m/s     |
  +-----------+----------+---------------+----------------+

  SANITY CHECK: for ordinary gases at room temperature, c_rms is always
  a FEW HUNDRED m/s. Hydrogen and helium are the only ones in thousands.
```

---

# 7. THE GAS LAWS FROM KINETIC THEORY

```
  MASTER EQUATION       P V   =   (1/3) m N c^2   =   N k T


  +----------------+---------------------------------------------------+
  |  BOYLE         |  T fixed -> c^2 fixed -> P V = constant           |
  +----------------+---------------------------------------------------+
  |  CHARLES       |  P fixed -> V = (N k / P) T -> V ~ T              |
  +----------------+---------------------------------------------------+
  |  GAY-LUSSAC    |  V fixed -> P = (N k / V) T -> P ~ T              |
  +----------------+---------------------------------------------------+
  |  AVOGADRO      |  same P, V, T  ->  N1 m1 c1^2 = N2 m2 c2^2        |
  |                |  and  m1 c1^2 = m2 c2^2  ->  N1 = N2              |
  +----------------+---------------------------------------------------+
  |  DALTON        |  no intermolecular forces, so each gas acts alone |
  |                |  P = P1 + P2 + P3 + ...                           |
  +----------------+---------------------------------------------------+
  |  GRAHAM        |  rate ~ c_rms ~ 1/sqrt(rho) ~ 1/sqrt(M)           |
  |                |     r1 / r2  =  sqrt( M2 / M1 )                   |
  +----------------+---------------------------------------------------+
```

---

# 8. DEGREES OF FREEDOM

```
  f  =  3 N_atoms  -  (number of constraints)

  +---------------------------+-------+------+------+-----------+
  |  MOLECULE                 | TRANS | ROT  | VIB  |  TOTAL f  |
  +---------------------------+-------+------+------+-----------+
  |  Monatomic  He, Ne, Ar    |   3   |  0   |  0   |     3     |
  |  Diatomic rigid  O2,N2,H2 |   3   |  2   |  0   |     5     |
  |  Diatomic vibrating       |   3   |  2   |  2   |     7     |
  |  Linear triatomic  CO2    |   3   |  2   | 2f_v |  5 + 2f_v |
  |  Non-linear  H2O,NH3,CH4  |   3   |  3   | 2f_v |  6 + 2f_v |
  +---------------------------+-------+------+------+-----------+

  UNLESS THE QUESTION SAYS "with vibration", use  3 / 5 / 6.
```

---

# 9. LAW OF EQUIPARTITION OF ENERGY

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   In thermal equilibrium the total energy of a system is           |
  |   distributed EQUALLY among all its degrees of freedom, and        |
  |   the energy per degree of freedom is  (1/2) k T per molecule.     |
  |                                                                    |
  |     each TRANSLATIONAL degree of freedom  ->  (1/2) k T            |
  |     each ROTATIONAL    degree of freedom  ->  (1/2) k T            |
  |     each VIBRATIONAL   MODE               ->        k T            |
  |            (because it has BOTH a KE term and a PE term)           |
  |                                                                    |
  +--------------------------------------------------------------------+


  ENERGY PER MOLECULE  =  (f/2) k T

  ENERGY PER MOLE      =  (f/2) R T

  +----------------------------------------+
  |                    f                   |
  |     U   =    ---- n R T                |     internal energy of
  |                    2                   |     n moles
  +----------------------------------------+
```

```
  +----------------+-----------------------+--------------------------+
  |  GAS           |  U per mole           |  U of n moles at T       |
  +----------------+-----------------------+--------------------------+
  |  Monatomic     |  (3/2) R T            |  (3/2) n R T             |
  |  Diatomic      |  (5/2) R T            |  (5/2) n R T             |
  |  Polyatomic    |    3   R T            |    3   n R T             |
  +----------------+-----------------------+--------------------------+

  TRANSLATIONAL part is (3/2) n R T for EVERY gas.
```

---

# 10. *** SPECIFIC HEAT CAPACITIES OF GASES ***

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |             f                                                      |
  |    Cv  =   --- R                                                   |
  |             2                                                      |
  |                                                                    |
  |    Cp  =   Cv  +  R                       (MAYER'S RELATION)       |
  |                                                                    |
  |             Cp             2                          2            |
  |  gamma =   ----   =  1  + ---        and     f  =  ---------       |
  |             Cv             f                        gamma - 1      |
  |                                                                    |
  +--------------------------------------------------------------------+

  Also useful:                       R                     gamma R
                             Cv = ----------        Cp  =  -----------
                                  gamma - 1                gamma - 1
```

## THE BIG TABLE

```
  +------------------+---+-----------+-----------+-----------+-----------+
  |  GAS TYPE        | f |    Cv     |    Cp     |  gamma    | Cv in SI  |
  +------------------+---+-----------+-----------+-----------+-----------+
  |  MONATOMIC       | 3 |  (3/2) R  |  (5/2) R  | 5/3 = 1.67|   12.47   |
  |  He, Ne, Ar, Xe  |   |           |           |           |           |
  +------------------+---+-----------+-----------+-----------+-----------+
  |  DIATOMIC        | 5 |  (5/2) R  |  (7/2) R  | 7/5 = 1.40|   20.79   |
  |  H2, O2, N2, CO  |   |           |           |           |           |
  +------------------+---+-----------+-----------+-----------+-----------+
  |  DIATOMIC        | 7 |  (7/2) R  |  (9/2) R  | 9/7 = 1.29|   29.10   |
  |  with vibration  |   |           |           |           |           |
  +------------------+---+-----------+-----------+-----------+-----------+
  |  POLYATOMIC      | 6 |    3 R    |    4 R    | 4/3 = 1.33|   24.94   |
  |  H2O, NH3, CH4   |   |           |           |           |           |
  +------------------+---+-----------+-----------+-----------+-----------+

  Cp in SI:   mono 20.79  |  diatomic 29.10  |  diatomic-vib 37.41
              polyatomic 33.26         (all J mol^-1 K^-1)
```

| Formula | When to use |
|---|---|
| `Cv = (f/2) R` | "find Cv of a diatomic gas" |
| `Cp - Cv = R` | any question mentioning both |
| `gamma = 1 + 2/f` | find gamma when the gas type is given |
| `f = 2/(gamma - 1)` | gamma given, identify the gas |
| `Q = n Cv dT` | heating at CONSTANT VOLUME |
| `Q = n Cp dT` | heating at CONSTANT PRESSURE |
| `W = n R dT` | work done during constant-pressure heating |

## Mixture of two gases

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |               n1 Cv1  +  n2 Cv2                                    |
  |     Cv    =  ---------------------                                 |
  |    (mix)          n1  +  n2                                        |
  |                                                                    |
  |               n1 Cp1  +  n2 Cp2                                    |
  |     Cp    =  ---------------------      =   Cv(mix)  +  R          |
  |    (mix)          n1  +  n2                                        |
  |                                                                    |
  |                          Cp(mix)                                   |
  |     gamma(mix)    =    -----------                                 |
  |                          Cv(mix)                                   |
  |                                                                    |
  |     Also   f(mix) = ( n1 f1 + n2 f2 ) / ( n1 + n2 )                |
  |                                                                    |
  +--------------------------------------------------------------------+

  NEVER average gamma directly.
```

## Solids and water

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   SOLIDS (LAW OF DULONG AND PETIT)                                 |
  |                                                                    |
  |      3 vibrational modes per atom  x  k T  =  3 k T per atom       |
  |                                                                    |
  |      U = 3 R T   ->   C  =  3 R  =  24.9  =  about 25 J/mol/K      |
  |                                                                    |
  |      For solids  Cp  is nearly equal to  Cv .                      |
  |      FAILS at low temperature and for diamond / boron / beryllium. |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   WATER (treated as a solid with 3 atoms per molecule)             |
  |                                                                    |
  |      U = 3 x (3 R T) = 9 R T   ->   C = 9 R = 74.8 J/mol/K         |
  |                                                                    |
  |      measured 75.2 J/mol/K   =   about 4200 J kg^-1 K^-1           |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# 11. MEAN FREE PATH

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                        1                     k T                   |
  |     lambda   =  -------------------  =  -------------------        |
  |                  sqrt2 pi d^2 n_d        sqrt2 pi d^2 P            |
  |                                                                    |
  |                        m                                           |
  |               =  ---------------------                             |
  |                   sqrt2 pi d^2 rho                                 |
  |                                                                    |
  |     n_d = number density (per m^3)      d = molecular diameter     |
  |                                                                    |
  +--------------------------------------------------------------------+

  Without the Maxwell sqrt2 correction (simple estimate):

                        1
     lambda   =  ---------------
                   pi d^2 n_d
```

```
  +-------------------------------+------------------------------------+
  |  DEPENDENCE                   |  NOTE                              |
  +-------------------------------+------------------------------------+
  |  lambda ~ 1 / n_d             |  fewer molecules -> longer path    |
  |  lambda ~ 1 / d^2             |  smaller molecules -> longer path  |
  |  lambda ~ 1 / P   (T fixed)   |  lower pressure -> longer path     |
  |  lambda ~ T       (P fixed)   |  hotter -> longer path             |
  |  lambda ~ 1 / rho             |                                    |
  |  INDEPENDENT of T at fixed V  |  because n_d does not change       |
  |  INDEPENDENT of molecular     |  lambda is a DISTANCE, not a speed |
  |  speed                        |                                    |
  +-------------------------------+------------------------------------+
```

```
  COLLISION FREQUENCY                    v_av
                            Z    =   ------------      (per second)
                                        lambda

  RELAXATION TIME                       lambda
  (mean time between       tau   =   ------------
   collisions)                           v_av

  TOTAL number of collisions per second in a gas of N molecules
                                  =  (1/2) N Z


  TYPICAL VALUES at STP:     lambda  ~  10^-7 m
                             Z       ~  10^9  per second
                             lambda / d  ~  1000
```

---

# 12. BROWNIAN MOTION — THE FACTS

```
  DEFINITION   The continuous, random, zig-zag motion of small particles
               suspended in a fluid.

  CAUSE        Unbalanced bombardment by the molecules of the fluid.

  SIGNIFICANCE Direct visible evidence for the molecular nature of matter
               and for continuous random molecular motion.

  FASTER WHEN  temperature is HIGHER
               particle is SMALLER and LIGHTER
               fluid viscosity is LOWER
               fluid density is LOWER
```

---

# 13. UNIT AND SANITY CHECKS

```
  +-----------------------+---------------------------+-----------------+
  |  QUANTITY             |  SI UNIT                  |  TYPICAL SIZE   |
  +-----------------------+---------------------------+-----------------+
  |  c_rms                |  m/s                      |  400 - 2000     |
  |  KE per molecule      |  J                        |  ~ 10^-21       |
  |  KE per mole          |  J                        |  ~ 3700         |
  |  Mean free path       |  m                        |  ~ 10^-7        |
  |  Collision frequency  |  s^-1                     |  ~ 10^9         |
  |  Molecular diameter   |  m                        |  ~ 2 x 10^-10   |
  |  Cv , Cp             |  J mol^-1 K^-1            |  12 - 40        |
  |  Number density (STP) |  m^-3                     |  2.7 x 10^25    |
  +-----------------------+---------------------------+-----------------+
```

```
  DIMENSIONAL FORMULAE  (asked occasionally)

     R  and  k    ->    [ M L^2 T^-2 K^-1 ]    (energy per temperature)
     Cv , Cp      ->    [ M L^2 T^-2 K^-1 ]    per mole
     lambda       ->    [ L ]
     gamma        ->    dimensionless
     NA           ->    [ mol^-1 ]
```

---

# 14. STANDARD GRAPHS OF THIS CHAPTER

```
  (1) BOYLE'S LAW              (2) BOYLE'S LAW, other axes
      P against V                  P against 1/V

    P                            P
    ^                            ^
    |\                           |            /
    | \                          |          /
    |  \                         |        /
    |   \__                      |      /
    |      \___                  |    /
    |          \______           |  /
    +-------------------> V      +/-----------------> 1/V
    RECTANGULAR HYPERBOLA        STRAIGHT LINE through the origin


  (3) CHARLES' LAW             (4) GAY-LUSSAC'S LAW
      V against T (kelvin)         P against T (kelvin)

    V                            P
    ^         /                  ^         /
    |       /                    |       /
    |     /                      |     /
    |   /                        |   /
    | /                          | /
    +/-------------------> T     +/-----------------> T
    0                            0
    STRAIGHT LINE through 0      STRAIGHT LINE through 0
    (extrapolates back to        (extrapolates back to
     -273.15 degC)                -273.15 degC = ZERO PRESSURE)


  (5) PV against T              (6) AVERAGE KE against T

    PV                          KE
    ^         /                  ^         /
    |       /                    |       /      slope = (3/2) k
    |     /  slope = n R         |     /        per molecule
    |   /                        |   /
    | /                          | /
    +/-------------------> T     +/-----------------> T
    0                            0


  (7) c_rms against T           (8) c_rms against 1/sqrt(M)
                                    (at fixed T)
    c
    ^        _____               c
    |    ___/                    ^         /
    |  _/         parabola-like  |       /   STRAIGHT LINE
    | /           c ~ sqrt(T)    |     /
    |/                           |   /
    +-------------------> T      | /
    0                            +/-----------------> 1 / sqrt(M)


  (9) REAL GAS: PV/nRT against P       (10) MAXWELL DISTRIBUTION

   PV/nRT                              dN/dv
     ^                                   ^
     |                    ___ real       |     ****
   1 |----------------------------       |   **    **   T1
     |   \             __/  IDEAL        |  *   __   *
     |    \_______ ___/                  | * _/  \__  **   T2
     |            V                      |*/        \___*****
     +-------------------------> P       +-------------------> v
     0                                   0
     dip = attraction dominates          higher T -> peak right,
     rise = molecular volume dominates   lower and broader
```

```
  GRAPHS THAT ARE STRAIGHT LINES THROUGH THE ORIGIN
     P against 1/V  |  V against T  |  P against T  |  PV against T
     KE against T   |  c_rms against 1/sqrt(M)

  GRAPHS THAT ARE HORIZONTAL LINES
     PV against P for an IDEAL gas at constant T
     PV/nRT against P for an IDEAL gas
```

---

# 15. THE RATIO METHOD — the fastest way to do numericals

Most exam numericals give you a change and ask for the effect. Never plug in
`R = 8.314`; just take a ratio and cancel.

```
  +------------------------------+------------------------------------------+
  |  QUANTITY                    |  RATIO FORM TO USE                       |
  +------------------------------+------------------------------------------+
  |  c_rms, same gas             |  c2/c1  =  sqrt( T2 / T1 )               |
  |  c_rms, same T               |  c1/c2  =  sqrt( M2 / M1 )               |
  |  c_rms, both changing        |  c2/c1  =  sqrt( (T2/M2) / (T1/M1) )     |
  |  Average KE                  |  KE2/KE1  =  T2 / T1                     |
  |  Internal energy, same gas   |  U2/U1  =  (n2 T2) / (n1 T1)             |
  |  Internal energy, same n,T   |  U1/U2  =  f1 / f2                       |
  |  Pressure, fixed V and n     |  P2/P1  =  T2 / T1                       |
  |  Volume, fixed P and n       |  V2/V1  =  T2 / T1                       |
  |  Mean free path, fixed T     |  L2/L1  =  P1 / P2                       |
  |  Mean free path, fixed P     |  L2/L1  =  T2 / T1                       |
  |  Rate of diffusion           |  r1/r2  =  sqrt( M2 / M1 )               |
  +------------------------------+------------------------------------------+
```

## The five results you can quote without working

```
  1.  rms speed DOUBLED     ->  absolute temperature x 4
  2.  rms speed TRIPLED     ->  absolute temperature x 9
  3.  Average KE DOUBLED    ->  absolute temperature x 2
  4.  Pressure DOUBLED at constant T  ->  c_rms UNCHANGED
  5.  Volume HALVED at constant T     ->  c_rms UNCHANGED, lambda HALVED
```

## Standard conversions you will need

```
  degC  ->  K            add 273     (27 degC = 300 K, 127 degC = 400 K)
  g/mol ->  kg/mol       divide by 1000
  litre ->  m^3          x 10^-3
  cm^3  ->  m^3          x 10^-6
  atm   ->  Pa           x 1.013 x 10^5
  cm of Hg -> Pa         P = h rho g  with rho(Hg) = 13600 kg/m^3
  angstrom -> m          x 10^-10
```

---

# 16. THE COMMON ERROR LIST

```
  +----+---------------------------------------------------------------+
  |  1 |  Temperature left in degC. ALWAYS convert to kelvin.           |
  +----+---------------------------------------------------------------+
  |  2 |  Molar mass left in g/mol. It must be kg/mol in SI formulas.   |
  +----+---------------------------------------------------------------+
  |  3 |  Using R where k is needed. R = per MOLE, k = per MOLECULE.    |
  +----+---------------------------------------------------------------+
  |  4 |  "Average kinetic energy" means TRANSLATIONAL, (3/2)kT, the    |
  |    |  same for every gas. "Internal energy" means (f/2)nRT.         |
  +----+---------------------------------------------------------------+
  |  5 |  Averaging gamma for a mixture. Average Cv, then add R.        |
  +----+---------------------------------------------------------------+
  |  6 |  Writing Cp = Cv - R. It is ALWAYS Cp = Cv + R.                |
  +----+---------------------------------------------------------------+
  |  7 |  Giving a diatomic molecule 3 rotational degrees of freedom.   |
  |    |  It gets only 2.                                              |
  +----+---------------------------------------------------------------+
  |  8 |  Using (1/2)kT for a vibrational mode. A vibration gets kT.    |
  +----+---------------------------------------------------------------+
  |  9 |  Saying lambda increases with T without checking whether P     |
  |    |  or V is being held constant.                                 |
  +----+---------------------------------------------------------------+
  | 10 |  Calling c^2 the "square of the average speed". It is the      |
  |    |  MEAN OF THE SQUARES.                                         |
  +----+---------------------------------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+---------------------------------------------------------------+
  |  1 |   P V  =  n R T   =   N k T          and    R  =  NA k        |
  +----+---------------------------------------------------------------+
  |  2 |   P  =  (1/3) rho c^2  =  (1/3)(m N / V) c^2                  |
  +----+---------------------------------------------------------------+
  |  3 |   c_rms  =  sqrt( 3 P / rho )                                 |
  +----+---------------------------------------------------------------+
  |  4 |   (1/2) m c^2  =  (3/2) k T        (per MOLECULE)             |
  +----+---------------------------------------------------------------+
  |  5 |   c_rms = sqrt(3RT/M)   v_av = sqrt(8RT/piM)                  |
  |    |   v_mp  = sqrt(2RT/M)                                         |
  +----+---------------------------------------------------------------+
  |  6 |   v_mp : v_av : c_rms  =  1 : 1.128 : 1.224                   |
  +----+---------------------------------------------------------------+
  |  7 |   Energy per degree of freedom  =  (1/2) k T                  |
  +----+---------------------------------------------------------------+
  |  8 |   U  =  (f/2) n R T                                           |
  +----+---------------------------------------------------------------+
  |  9 |   Cv = (f/2) R      Cp = Cv + R      gamma = 1 + 2/f          |
  +----+---------------------------------------------------------------+
  | 10 |   f = 3 mono | 5 diatomic | 7 diatomic-vib | 6 polyatomic     |
  +----+---------------------------------------------------------------+
  | 11 |   lambda  =  1 / ( sqrt2 pi d^2 n_d )  =  kT/(sqrt2 pi d^2 P) |
  +----+---------------------------------------------------------------+
  | 12 |   C(solid) = 3R = 25    C(water) = 9R = 75  J/mol/K           |
  +----+---------------------------------------------------------------+
```

If you can write those twelve lines from memory in five minutes at the start of
the exam, you will not lose a single mark in this chapter.
