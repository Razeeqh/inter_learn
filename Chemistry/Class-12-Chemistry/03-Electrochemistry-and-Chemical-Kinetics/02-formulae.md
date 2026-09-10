# Electrochemistry and Chemical Kinetics — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

This chapter is two chapters. Sections 0 to 8 are **ELECTROCHEMISTRY**.
Sections 9 to 15 are **CHEMICAL KINETICS**.

---

# 0. CONSTANTS YOU MUST KNOW BY HEART

```
  +-------------------------------+---------------------------------------+
  |  Faraday constant        F    |  96500  C mol-1                       |
  |                               |  (charge on 1 mole of electrons)      |
  |  Gas constant            R    |  8.314  J K-1 mol-1                   |
  |  2.303 x R                    |  19.147 J K-1 mol-1                   |
  |  2.303 R T / F  at 298 K      |  0.0591 V                             |
  |  Standard temperature         |  298 K  ( = 25 degrees C )            |
  |  Avogadro number         N    |  6.022 x 10^23                        |
  |  Charge on 1 electron    e    |  1.602 x 10^-19  C                    |
  |  log 2                        |  0.3010                               |
  |  1 / log 2                    |  3.32                                 |
  |  Molar volume at STP          |  22.4 L mol-1                         |
  |  E0 of the SHE                |  0.00 V   (by definition)             |
  +-------------------------------+---------------------------------------+

  UNIT CONVERSIONS THAT LOSE MARKS
      1 minute  =  60 s          1 hour  =  3600 s
      30 min    =  1800 s        1 h 20 min = 4800 s
      1 kJ      =  1000 J
      degrees C  ->  K :  add 273
```

---

# 1. EMF OF A CELL

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     E(cell)    =    E(cathode)    -    E(anode)                      |
  |                                                                      |
  |     E0(cell)   =    E0(cathode)   -    E0(anode)                     |
  |                                                                      |
  |                =    E0(right)     -    E0(left)                      |
  |                                                                      |
  |     BOTH values must be REDUCTION potentials.                        |
  |     Subtract the anode value TOGETHER WITH ITS OWN SIGN.             |
  |                                                                      |
  +----------------------------------------------------------------------+

  CELL NOTATION

      ANODE  |  ANODE ION  ||  CATHODE ION  |  CATHODE

      Zn  |  Zn2+ (1 M)  ||  Cu2+ (1 M)  |  Cu

      single line  |   =  phase boundary
      double line  ||  =  salt bridge
      anode on the LEFT , cathode on the RIGHT
```

| Formula | When to use |
|---------|-------------|
| `E0(cell) = E0(cath) - E0(anode)` | any "calculate the EMF" question |
| `E0(cell) positive` | reaction is spontaneous / cell is galvanic |
| `E0(cell) negative` | reaction is not spontaneous / needs a battery |
| more negative E0 is the anode | to decide which electrode is which |

---

# 2. THE NERNST EQUATION

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  GENERAL FORM  (any temperature)                                     |
  |                                                                      |
  |                            2.303 R T            [products]           |
  |    E(cell)  =  E0(cell) - -----------   log   -------------          |
  |                              n F                [reactants]          |
  |                                                                      |
  |                                                                      |
  |  AT 298 K  -  the working form                                       |
  |                                                                      |
  |                            0.0591              [products]            |
  |    E(cell)  =  E0(cell) - ---------   log   ---------------          |
  |                              n                 [reactants]           |
  |                                                                      |
  |                                                                      |
  |  FOR ONE ELECTRODE      M(n+)  +  n e-   ---->   M                   |
  |                                                                      |
  |                            0.0591                                    |
  |    E        =  E0       + ---------   log  [M n+]                    |
  |                              n                                       |
  |                                                                      |
  |  SOLIDS and PURE LIQUIDS are taken as 1 and NEVER enter the log.     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Worked template for `Zn + Cu2+ ---> Zn2+ + Cu`, n = 2:

```
                                 0.0591            [Zn2+]
      E(cell)   =    1.10    -   --------   log   ---------
                                    2              [Cu2+]
```

| Formula | When to use |
|---------|-------------|
| `E = E0 - (0.0591/n) log(prod/react)` | concentrations are NOT 1 M |
| `E = E0 + (0.0591/n) log[M n+]` | a single electrode is asked for |
| `2.303RT/F = 0.0591` | only valid at 298 K — check the temperature |
| `E = E0` | when every concentration is exactly 1 M (log 1 = 0) |

---

# 3. EMF, GIBBS ENERGY AND THE EQUILIBRIUM CONSTANT

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     delta G      =    -  n  F  E(cell)                               |
  |                                                                      |
  |     delta G0     =    -  n  F  E0(cell)                              |
  |                                                                      |
  |     Answer comes out in JOULES.  Divide by 1000 for kJ.              |
  |                                                                      |
  |                                                                      |
  |                             0.0591                                   |
  |     E0(cell)     =        ----------     log  K                      |
  |                              n                                       |
  |                                                                      |
  |                          n  x  E0(cell)                              |
  |     log  K       =     --------------------                          |
  |                              0.0591                                  |
  |                                                                      |
  |                                                                      |
  |     delta G0     =    -  2.303  R  T   log  K                        |
  |                                                                      |
  |     Maximum work obtainable   W(max)   =   delta G   =   - n F E     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Sign of E | Sign of delta G | Meaning |
|-----------|-----------------|---------|
| positive | negative | spontaneous, galvanic cell, K > 1 |
| zero | zero | at equilibrium — the battery is dead |
| negative | positive | not spontaneous, needs an outside supply |

---

# 4. CONDUCTANCE AND CONDUCTIVITY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                          1                                           |
  |  CONDUCTANCE       G  =  ---            unit :  S  ( = ohm-1 )       |
  |                          R                                           |
  |                                                                      |
  |                              1                l                      |
  |  CONDUCTIVITY   kappa   =  -----   =   G  x  ---                     |
  |                             rho                A                     |
  |                                                                      |
  |                    unit :  S cm-1   (or S m-1)                       |
  |                                                                      |
  |                                l                                     |
  |  CELL CONSTANT     G*     =   ---   =   kappa  x  R                  |
  |                                A                                     |
  |                                                                      |
  |                    unit :  cm-1                                      |
  |                                                                      |
  |                                                                      |
  |                                 kappa   x   1000                     |
  |  MOLAR CONDUCTIVITY  Lambda = ---------------------                  |
  |                                        C                             |
  |                                                                      |
  |                    kappa in S cm-1 ,  C in mol L-1                   |
  |                    unit of Lambda :  S cm2 mol-1                     |
  |                                                                      |
  |                                                                      |
  |                            cell constant                             |
  |  From a measurement:  kappa = ----------------                       |
  |                             resistance R                             |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Quantity | Symbol | Unit | When to use |
|----------|--------|------|-------------|
| Conductance | G | S | you are given the resistance |
| Conductivity | kappa | S cm-1 | conductance of 1 cm3 of solution |
| Cell constant | l/A | cm-1 | calibrating a cell with standard KCl |
| Molar conductivity | Lambda(m) | S cm2 mol-1 | conductance of 1 mole of electrolyte |

```
  ON DILUTION           kappa  GOES DOWN          Lambda  GOES UP
                        (fewer ions per cm3)      (more ions per mole,
                                                   further apart)

  STRONG electrolyte :  Lambda = Lambda0  -  A  sqrt( C )
                        graph is nearly a STRAIGHT LINE
                        Lambda0 found by EXTRAPOLATION

  WEAK electrolyte   :  graph shoots up steeply near infinite dilution
                        Lambda0 CANNOT be extrapolated
                        use KOHLRAUSCH'S LAW instead
```

---

# 5. KOHLRAUSCH'S LAW

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   Lambda0(m)   =   v(+)  lambda0(+)   +   v(-)  lambda0(-)           |
  |                                                                      |
  |   v(+) , v(-)  =  number of each ion per formula unit                |
  |                                                                      |
  |   NaCl       :  Lambda0  =  lambda0(Na+)   +  lambda0(Cl-)           |
  |   BaCl2      :  Lambda0  =  lambda0(Ba2+)  + 2 lambda0(Cl-)          |
  |   Al2(SO4)3  :  Lambda0  =  2 lambda0(Al3+) + 3 lambda0(SO4 2-)      |
  |                                                                      |
  |                                                                      |
  |   FOR A WEAK ACID - build it from strong electrolytes:               |
  |                                                                      |
  |   Lambda0(CH3COOH) = Lambda0(CH3COONa) + Lambda0(HCl)                |
  |                                                         - Lambda0(NaCl)|
  |                                                                      |
  |                                                                      |
  |   DEGREE OF DISSOCIATION                                             |
  |                                                                      |
  |                    Lambda(m)      at the given concentration         |
  |     alpha    =   --------------                                      |
  |                    Lambda0(m)     at infinite dilution               |
  |                                                                      |
  |     alpha has NO UNIT and must lie between 0 and 1.                  |
  |                                                                      |
  |                                                                      |
  |   DISSOCIATION CONSTANT OF A WEAK ACID                               |
  |                                                                      |
  |                     C  alpha^2                                       |
  |     Ka      =    ----------------                                    |
  |                     1  -  alpha                                      |
  |                                                                      |
  |     If alpha is very small,  Ka  =  C alpha^2   (approximately)      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| `Lambda0 = sum of ion contributions` | any "find Lambda0 of ..." question |
| `Lambda0(HA) = Lambda0(NaA) + Lambda0(HCl) - Lambda0(NaCl)` | Lambda0 of a WEAK acid |
| `alpha = Lambda / Lambda0` | degree of dissociation of a weak electrolyte |
| `Ka = C alpha^2 / (1 - alpha)` | dissociation constant from alpha |

---

# 6. FARADAY'S LAWS OF ELECTROLYSIS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  FIRST LAW                                                           |
  |                                                                      |
  |      w   =   Z  Q   =   Z  I  t                                      |
  |                                                                      |
  |      Q  =  I  x  t                (charge in coulombs)               |
  |      I  =  current in AMPERES                                        |
  |      t  =  time in SECONDS       <---- ALWAYS SECONDS                |
  |                                                                      |
  |                 equivalent weight              M                     |
  |      Z   =   -----------------------   =   -------------             |
  |                     96500                   n  x  96500              |
  |                                                                      |
  |                                                                      |
  |  THE ONE FORMULA THAT SOLVES MOST SUMS                               |
  |                                                                      |
  |                  M   x   I   x   t                                   |
  |        w    =   ---------------------                                |
  |                    n   x   96500                                     |
  |                                                                      |
  |        M  =  molar mass                                              |
  |        n  =  electrons needed per ion                                |
  |                                                                      |
  |                                                                      |
  |  SECOND LAW  -  same current, different electrolytes in SERIES       |
  |                                                                      |
  |          w1           E1            equivalent weight of 1           |
  |        ------   =   ------   =   ---------------------------         |
  |          w2           E2            equivalent weight of 2           |
  |                                                                      |
  |                                                                      |
  |  MOLES OF ELECTRONS PASSED                                           |
  |                                                                      |
  |                       Q            I  x  t                           |
  |        moles e-  =  -------  =  -------------                        |
  |                      96500         96500                             |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  WHAT 1 FARADAY (96500 C) DEPOSITS

  +-----------+---------------+----------------+-------------------------+
  |  ION      |  n (electrons)|  MOLES DEPOSITED| MASS DEPOSITED         |
  +-----------+---------------+----------------+-------------------------+
  |  Ag+      |      1        |   1 mol         |  108 g                 |
  |  Cu2+     |      2        |   0.5 mol       |  31.75 g               |
  |  Zn2+     |      2        |   0.5 mol       |  32.7 g                |
  |  Al3+     |      3        |   1/3 mol       |  9 g                   |
  |  H+       |      1        |   0.5 mol H2    |  1 g  = 11.2 L at STP  |
  |  Cl-      |      1        |   0.5 mol Cl2   |  35.5 g = 11.2 L at STP|
  |  O (from  |      4 per O2 |   0.25 mol O2   |  8 g  = 5.6 L at STP   |
  |  water)   |               |                 |                        |
  +-----------+---------------+----------------+-------------------------+
```

| Formula | When to use |
|---------|-------------|
| `w = M I t / (n x 96500)` | mass deposited, or find I, or find t |
| `w1/w2 = E1/E2` | two cells in SERIES, one mass given |
| `moles of e- = It / 96500` | "how many faradays / moles of electrons" |
| `volume at STP = moles x 22.4` | a gas is liberated at an electrode |

---

# 7. PRODUCTS OF ELECTROLYSIS

```
  +--------------------+-------------------+------------------------------+
  |  ELECTROLYTE       |  CATHODE (-)      |  ANODE (+)                   |
  |                    |  REDUCTION        |  OXIDATION                   |
  +--------------------+-------------------+------------------------------+
  |  Molten NaCl       |  Na metal         |  Cl2 gas                     |
  |  Aqueous NaCl      |  H2 gas           |  Cl2 gas  (NaOH left behind) |
  |  Aqueous CuSO4     |  Cu metal         |  O2 gas                      |
  |   (Pt electrodes)  |                   |                              |
  |  Aqueous CuSO4     |  Cu metal         |  the Cu anode DISSOLVES      |
  |   (Cu electrodes)  |                   |                              |
  |  Dilute H2SO4      |  H2 gas           |  O2 gas                      |
  |  Molten Al2O3      |  Al metal         |  O2 gas                      |
  +--------------------+-------------------+------------------------------+

  THE RULE
     CATHODE  -  the cation with the HIGHER reduction potential wins.
     ANODE    -  the anion with the LOWER reduction potential wins.
     In water, H+ and OH- are always in the race and often win.
```

---

# 8. BATTERIES, FUEL CELLS AND CORROSION

```
  +------------------+----------+-------------+-------------+-------------+
  |  CELL            |  TYPE    |  ANODE      |  CATHODE    |  EMF        |
  +------------------+----------+-------------+-------------+-------------+
  |  Dry (Leclanche) | primary  |  Zn         | C rod +MnO2 | 1.5 V,      |
  |                  |          |  container  | + NH4Cl     | falls       |
  +------------------+----------+-------------+-------------+-------------+
  |  Mercury cell    | primary  |  Zn-Hg      | HgO + C     | 1.35 V,     |
  |                  |          |  amalgam    |             | CONSTANT    |
  +------------------+----------+-------------+-------------+-------------+
  |  Lead storage    | secondary|  Pb         | PbO2        | 2 V/cell,   |
  |  (38 % H2SO4)    |          |             |             | 12 V of 6   |
  +------------------+----------+-------------+-------------+-------------+
  |  Nickel-cadmium  | secondary|  Cd         | NiO2        | about 1.2 V |
  +------------------+----------+-------------+-------------+-------------+
  |  H2 - O2 fuel    |  fuel    | porous C,H2 | porous C,O2 | about 1.2 V |
  |  cell (KOH)      |  cell    |             |             | 70 % effic. |
  +------------------+----------+-------------+-------------+-------------+
```

```
  LEAD STORAGE BATTERY

    DISCHARGE :  Pb  +  PbO2  +  2 H2SO4   ---->   2 PbSO4  +  2 H2O
    CHARGING  :  2 PbSO4  +  2 H2O   ---->   Pb  +  PbO2  +  2 H2SO4


  H2 - O2 FUEL CELL

    Anode     :  2 H2  +  4 OH-   ---->   4 H2O  +  4 e-
    Cathode   :  O2  +  2 H2O  +  4 e-   ---->   4 OH-
    Overall   :  2 H2  +  O2   ---->   2 H2O


  CORROSION OF IRON

    Anode     :  Fe   ---->   Fe2+  +  2 e-             E0 = - 0.44 V
    Cathode   :  O2 + 4 H+ + 4 e-   ---->   2 H2O       E0 = + 1.23 V
    E0(cell)  =  1.23  -  ( - 0.44 )   =   + 1.67 V

    RUST      =   Fe2O3 . x H2O      (hydrated iron(III) oxide)

    PREVENTION:  barrier coating, galvanising with Zn, cathodic
                 (sacrificial) protection with Mg or Zn, electroplating,
                 alloying (stainless steel), anti-rust chemicals.
```

---
---

# ==========================================================
# CHEMICAL KINETICS
# ==========================================================

---

# 9. RATE OF REACTION

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  For       a A   +   b B    ---->    c C   +   d D                   |
  |                                                                      |
  |               1    d[A]           1    d[B]                          |
  |   rate   =  - ---  ------   =  -  ---  ------                        |
  |               a     dt            b     dt                           |
  |                                                                      |
  |               1    d[C]           1    d[D]                          |
  |          =  + ---  ------   =  +  ---  ------                        |
  |               c     dt            d     dt                           |
  |                                                                      |
  |   MINUS for reactants, PLUS for products,                            |
  |   DIVIDE by the stoichiometric coefficient every time.               |
  |                                                                      |
  |   UNIT :  mol L-1 s-1                                                |
  |                                                                      |
  |                                                                      |
  |                          delta [X]                                   |
  |   AVERAGE RATE     =   ---------------      (over an interval)       |
  |                          delta  t                                    |
  |                                                                      |
  |   INSTANTANEOUS RATE = slope of the TANGENT to the                   |
  |                        concentration - time curve at that instant    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 10. RATE LAW, RATE CONSTANT, ORDER

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     Rate    =    k   [A]^x   [B]^y                                   |
  |                                                                      |
  |     ORDER   =    x   +   y            (found only by EXPERIMENT)     |
  |                                                                      |
  |     k  =  RATE CONSTANT  =  the rate when every concentration is     |
  |           1 mol L-1.                                                 |
  |                                                                      |
  |     k depends on TEMPERATURE and CATALYST.                           |
  |     k does NOT depend on concentration.                              |
  |                                                                      |
  |                                                         1 - n        |
  |     UNIT of k for overall order n :    ( mol L-1 )            s-1    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  +---------+-------------------+-------------------------------+
  |  ORDER  |  UNIT OF k        |  HOW TO SPOT IT               |
  +---------+-------------------+-------------------------------+
  |    0    |  mol L-1 s-1      |  [A] vs t is a straight line  |
  |    1    |  s-1              |  log[A] vs t is straight;     |
  |         |                   |  t(1/2) does not change       |
  |    2    |  L mol-1 s-1      |  1/[A] vs t is straight       |
  |    3    |  L2 mol-2 s-1     |                               |
  +---------+-------------------+-------------------------------+

  IF THE UNIT OF k IS s-1 , THE REACTION IS FIRST ORDER. Every time.
```

## ORDER versus MOLECULARITY

| | ORDER | MOLECULARITY |
|---|-------|--------------|
| Found from | experiment (rate law) | the mechanism |
| Can be zero? | YES | NEVER |
| Can be a fraction? | YES | NO, whole number only |
| Applies to | overall reaction | one elementary step only |
| Changes with conditions? | YES | NO |

---

# 11. ZERO ORDER REACTIONS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   Rate  =  k  [A]^0  =  k        (rate does not depend on [A])       |
  |                                                                      |
  |   INTEGRATED EQUATION                                                |
  |                                                                      |
  |        [A]   =   [A]0   -   k t                                      |
  |                                                                      |
  |                     [A]0   -   [A]                                   |
  |        k     =   ---------------------                               |
  |                            t                                         |
  |                                                                      |
  |   UNIT of k :   mol L-1 s-1                                          |
  |                                                                      |
  |                        [A]0                                          |
  |   HALF LIFE   t(1/2) = --------      PROPORTIONAL to [A]0            |
  |                         2 k                                          |
  |                                                                      |
  |                        [A]0                                          |
  |   TIME TO FINISH   t = --------                                      |
  |                          k                                           |
  |                                                                      |
  |   GRAPH :  [A] against t is a STRAIGHT LINE                          |
  |            slope = - k ,  intercept = [A]0                           |
  |                                                                      |
  |   EXAMPLES : decomposition of NH3 on hot Pt,                         |
  |              decomposition of HI on gold,                            |
  |              H2 + Cl2 in sunlight                                    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 12. FIRST ORDER REACTIONS  *** the most important box ***

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   Rate  =  k  [A]                                                    |
  |                                                                      |
  |   INTEGRATED EQUATION                                                |
  |                                                                      |
  |               2.303                [A]0                              |
  |      k   =   ---------    log    ----------                          |
  |                 t                  [A]                               |
  |                                                                      |
  |   or, using a and x :                                                |
  |                                                                      |
  |               2.303                  a                               |
  |      k   =   ---------    log    -----------                         |
  |                 t                  a  -  x                           |
  |                                                                      |
  |      a      = initial amount                                         |
  |      x      = amount REACTED                                         |
  |      a - x  = amount LEFT                                            |
  |                                                                      |
  |   UNIT of k :   s-1   (or min-1)                                     |
  |                                                                      |
  |                                                                      |
  |                        0.693                                         |
  |   HALF LIFE   t(1/2) = --------    INDEPENDENT of [A]0               |
  |                           k                                          |
  |                                                                      |
  |                                                                      |
  |   GRAPHS                                                             |
  |      log [A]  against  t     ->  straight, slope = - k / 2.303       |
  |      log([A]0/[A]) against t ->  straight through the origin,        |
  |                                  slope = k / 2.303                   |
  |      rate against [A]        ->  straight through the origin,        |
  |                                  slope = k                           |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  HANDY PERCENTAGE SHORTCUTS  (first order only)

      t(50 %)   =   t(1/2)
      t(75 %)   =   2      x  t(1/2)
      t(87.5 %) =   3      x  t(1/2)
      t(90 %)   =   3.32   x  t(1/2)
      t(99 %)   =   6.64   x  t(1/2)
      t(99.9 %) =   10     x  t(1/2)

  AMOUNT LEFT AFTER n HALF LIVES  =  [A]0  /  2^n
```

| Formula | When to use |
|---------|-------------|
| `k = (2.303/t) log([A]0/[A])` | find k, or t, or the amount left |
| `t(1/2) = 0.693/k` | half life given or asked for |
| `t(90%) = 3.32 t(1/2)` | quick MCQ shortcut |
| `[A] = [A]0 / 2^n` | "after 3 half lives, how much is left?" |

---

# 13. PSEUDO FIRST ORDER REACTIONS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   A reaction that is really SECOND order but behaves as FIRST order  |
  |   because one reactant is in LARGE EXCESS and its concentration      |
  |   stays practically constant.                                        |
  |                                                                      |
  |     Rate  =  k [A] [B]      with [B] almost constant                 |
  |                                                                      |
  |     Rate  =  ( k [B] ) [A]   =   k'  [A]                             |
  |                                                                      |
  |     k'  =  k [B]     =  the pseudo first order rate constant         |
  |                                                                      |
  |   EXAMPLES                                                           |
  |     acid hydrolysis of an ESTER                                      |
  |         CH3COOC2H5 + H2O  --H+-->  CH3COOH + C2H5OH                  |
  |     INVERSION OF CANE SUGAR                                          |
  |         C12H22O11 + H2O  --H+-->  glucose + fructose                 |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 14. THE ARRHENIUS EQUATION

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                              - Ea / R T                              |
  |        k     =     A    e                                            |
  |                                                                      |
  |                                                                      |
  |   LOG FORM                                                           |
  |                                                                      |
  |                                     Ea            1                  |
  |        log k    =    log A    -   ---------   x  ---                 |
  |                                    2.303 R        T                  |
  |                                                                      |
  |        straight line of  log k  against  1/T                         |
  |                                                                      |
  |                             - Ea                                     |
  |        SLOPE        =    -----------          INTERCEPT  =  log A    |
  |                            2.303 R                                   |
  |                                                                      |
  |        Ea   =   - 2.303  R  x  slope                                 |
  |                                                                      |
  |                                                                      |
  |   TWO-TEMPERATURE FORM  -  the one used in numericals                |
  |                                                                      |
  |               k2             Ea         +-   1        1   -+         |
  |        log  ------   =   ---------   x  |  -----  -  ----- |         |
  |               k1           2.303 R      +-   T1       T2  -+         |
  |                                                                      |
  |               k2             Ea             ( T2  -  T1 )            |
  |        log  ------   =   ---------   x    ------------------         |
  |               k1           2.303 R              T1  T2               |
  |                                                                      |
  |        T1 = LOWER temperature (goes with k1)                         |
  |        T  in KELVIN ,  Ea in J mol-1 ,  R = 8.314                    |
  |        2.303 R  =  19.147                                            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| `k = A e^(-Ea/RT)` | definition; find k from A and Ea |
| `log k = log A - Ea/(2.303RT)` | one temperature; or reading a graph |
| `log(k2/k1) = Ea(T2-T1)/(2.303 R T1 T2)` | k at TWO temperatures — find Ea |
| `Ea = -2.303 R x slope` | a log k vs 1/T graph is given |
| `fraction reacting = e^(-Ea/RT)` | "what fraction of molecules can react" |

---

# 15. COLLISION THEORY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                                    - Ea / R T                        |
  |        Rate    =    P    Z    e                                      |
  |                                                                      |
  |        Z  =  collision frequency (collisions per second per unit     |
  |              volume)                                                 |
  |        P  =  steric / probability factor (correct orientation)       |
  |        e^(-Ea/RT)  =  fraction of collisions with enough energy      |
  |                                                                      |
  |        Comparing with  k = A e^(-Ea/RT) :        A   =   P  Z        |
  |                                                                      |
  |   TWO CONDITIONS FOR A SUCCESSFUL COLLISION                          |
  |        1.  energy at or above Ea                                     |
  |        2.  correct orientation                                       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---
---

# THE 15 FORMULAE TO WRITE ON YOUR PALM

```
  +----+----------------------------------------------------------------+
  | 1  |  E(cell) = E(cathode) - E(anode)                               |
  +----+----------------------------------------------------------------+
  | 2  |  E = E0 - (0.0591 / n) log ( products / reactants )            |
  +----+----------------------------------------------------------------+
  | 3  |  E = E0 + (0.0591 / n) log [M n+]        (single electrode)    |
  +----+----------------------------------------------------------------+
  | 4  |  delta G = - n F E            F = 96500                        |
  +----+----------------------------------------------------------------+
  | 5  |  log K = n E0(cell) / 0.0591                                   |
  +----+----------------------------------------------------------------+
  | 6  |  kappa = G x (l / A)          cell constant = kappa x R        |
  +----+----------------------------------------------------------------+
  | 7  |  Lambda(m) = kappa x 1000 / C            unit S cm2 mol-1      |
  +----+----------------------------------------------------------------+
  | 8  |  Lambda0(CH3COOH) = Lambda0(CH3COONa) + Lambda0(HCl)           |
  |    |                                          - Lambda0(NaCl)       |
  +----+----------------------------------------------------------------+
  | 9  |  alpha = Lambda / Lambda0      and    Ka = C alpha^2/(1-alpha) |
  +----+----------------------------------------------------------------+
  | 10 |  w = ( M x I x t ) / ( n x 96500 )       t in SECONDS          |
  +----+----------------------------------------------------------------+
  | 11 |  w1 / w2 = E1 / E2             (cells in series)               |
  +----+----------------------------------------------------------------+
  | 12 |  rate = - (1/a) d[A]/dt = + (1/c) d[C]/dt                      |
  +----+----------------------------------------------------------------+
  | 13 |  ZERO order :   k = ([A]0 - [A]) / t     t(1/2) = [A]0 / 2k    |
  +----+----------------------------------------------------------------+
  | 14 |  FIRST order:   k = (2.303 / t) log([A]0 / [A])                |
  |    |                 t(1/2) = 0.693 / k                             |
  +----+----------------------------------------------------------------+
  | 15 |  log (k2/k1) = [ Ea / (2.303 R) ] x ( T2 - T1 ) / ( T1 T2 )    |
  +----+----------------------------------------------------------------+
```

```
  AND THE FOUR NUMBERS:

        F = 96500        R = 8.314        0.0591        0.693

  If you remember nothing else, remember these four and the fifteen
  boxes above. That is the whole chapter's arithmetic.
```
