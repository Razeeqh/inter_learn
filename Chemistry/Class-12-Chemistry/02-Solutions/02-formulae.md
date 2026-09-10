# Solutions — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

Notation used everywhere below:

```
  subscript 1  ->  SOLVENT        subscript 2  ->  SOLUTE

  w1 = mass of solvent (g)        w2 = mass of solute (g)
  M1 = molar mass of solvent      M2 = molar mass of solute
  n1 = moles of solvent           n2 = moles of solute
  x1 = mole fraction of solvent   x2 = mole fraction of solute
  d  = density of the SOLUTION in g/mL
  V  = volume of the SOLUTION
```

---

# 0. CONSTANTS AND DATA YOU MUST KNOW BY HEART

```
  +--------------------------------+--------------------------------------+
  |  Gas constant   R              |  0.0821  L atm / K mol               |
  |                                |  0.083   L bar / K mol               |
  |                                |  8.314   J / K mol                   |
  |  Kf of WATER                   |  1.86    K kg / mol                  |
  |  Kb of WATER                   |  0.52    K kg / mol                  |
  |  Freezing point of water       |  273.15 K   ( 0 C )                  |
  |  Boiling point of water        |  373.15 K   ( 100 C )                |
  |  Molar mass of water           |  18 g/mol                            |
  |  Moles of water in 1 litre     |  1000 / 18  =  55.5 mol              |
  |  1 atm                         |  1.01325 x 10^5 Pa  =  1.013 bar     |
  |                                |  =  760 mm Hg                        |
  |  1 bar                         |  10^5 Pa                             |
  |  T (kelvin)                    |  T (celsius)  +  273                 |
  +--------------------------------+--------------------------------------+
```

Common molar masses that appear again and again:

```
  +---------------------+---------+   +---------------------+---------+
  |  Water     H2O      |    18   |   |  NaCl               |   58.5  |
  |  Glucose   C6H12O6  |   180   |   |  KCl                |   74.5  |
  |  Sucrose   C12H22O11|   342   |   |  CaCl2              |   111   |
  |  Urea      NH2CONH2 |    60   |   |  K2SO4              |   174   |
  |  Benzene   C6H6     |    78   |   |  NaOH               |    40   |
  |  Toluene   C7H8     |    92   |   |  H2SO4              |    98   |
  |  Ethanol   C2H5OH   |    46   |   |  Benzoic acid       |   122   |
  |  Ethylene glycol    |    62   |   |  Acetic acid CH3COOH|    60   |
  |  C2H6O2             |         |   |  Sulphur  S8        |   256   |
  +---------------------+---------+   +---------------------+---------+
```

---

# 1. THE STARTING POINT — MOLES

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                    given mass in grams          w                    |
  |     moles   n  =  --------------------------  = ---                  |
  |                       molar mass                 M                   |
  |                                                                      |
  |     mass of solution  =  mass of solute  +  mass of solvent          |
  |                                                                      |
  |                                    mass of solution                  |
  |     volume of solution  =  ------------------------------            |
  |                                     density                          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 2. CONCENTRATION — THE PERCENTAGE TERMS AND ppm

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                            mass of solute                            |
  |    MASS %  (w/w)     =  ----------------------  x  100               |
  |                            mass of SOLUTION                          |
  |                                                                      |
  |                                                                      |
  |                            volume of solute                          |
  |    VOLUME %  (v/v)   =  ------------------------  x  100             |
  |                            volume of SOLUTION                        |
  |                                                                      |
  |                                                                      |
  |                            mass of solute in GRAMS                   |
  |    MASS/VOLUME % (w/v) = -----------------------------  x  100       |
  |                            volume of SOLUTION in mL                  |
  |                                                                      |
  |                                                                      |
  |                            mass of solute                            |
  |    ppm               =  ----------------------  x  10^6              |
  |                            mass of SOLUTION                          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use | Unit |
|---------|-------------|------|
| `mass % = (w2 / w solution) x 100` | any "x % w/w" label; the standard way of stating strength | none (%) |
| `volume % = (V2 / V solution) x 100` | liquid dissolved in liquid, e.g. antifreeze, alcohol | none (%) |
| `mass/volume % = (w2 in g / V in mL) x 100` | medicines, injections, saline | none (%) |
| `ppm = (w2 / w solution) x 10^6` | very dilute: pollutants, dissolved O2, hardness of water | none |
| `1 ppm = 1 mg per litre of water` | quick conversion for aqueous samples | mg/L |

---

# 3. CONCENTRATION — MOLE FRACTION, MOLARITY, MOLALITY, NORMALITY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                              n2                     n1               |
  |   MOLE FRACTION    x2  =  ---------      x1  =  ---------            |
  |                            n1 + n2               n1 + n2             |
  |                                                                      |
  |                    x1  +  x2  =  1              (NO UNIT)            |
  |                                                                      |
  |                                                                      |
  |                              moles of solute        w2 x 1000        |
  |   MOLARITY     M       =  ---------------------  = -------------     |
  |                            LITRES of SOLUTION       M2 x V(mL)       |
  |                                                                      |
  |                            UNIT:  mol/L   ( M )                      |
  |                                                                      |
  |                                                                      |
  |                              moles of solute        w2 x 1000        |
  |   MOLALITY     m       =  ---------------------  = -------------     |
  |                            KILOGRAMS of SOLVENT     M2 x w1(g)       |
  |                                                                      |
  |                            UNIT:  mol/kg  ( m )                      |
  |                                                                      |
  |                                                                      |
  |                            gram equivalents of solute                |
  |   NORMALITY    N       =  ----------------------------------         |
  |                            LITRES of SOLUTION                        |
  |                                                                      |
  |                                    molar mass                        |
  |            equivalent mass  =  ------------------                    |
  |                                     n-factor                         |
  |                                                                      |
  |            N   =   M   x   n-factor          UNIT:  eq/L  ( N )      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use | Unit |
|---------|-------------|------|
| `x2 = n2 / (n1 + n2)` | Raoult's law, Henry's law, relative lowering of VP | none |
| `M = n2 / V(L)` | titration, "0.1 M solution", osmotic pressure `pi = CRT` | mol/L |
| `m = n2 / w1(kg)` | ALL colligative properties (`delta Tb`, `delta Tf`) | mol/kg |
| `N = M x n-factor` | acid-base and redox titrations | eq/L |
| `N1 V1 = N2 V2` | titration / dilution problems | — |
| `M1 V1 = M2 V2` | dilution: adding water keeps the moles the same | — |

## n-factor table (needed for normality)

```
  +---------------------+------------+   +----------------+------------+
  |  HCl , HNO3         |  1         |   |  NaOH , KOH    |  1         |
  |  H2SO4 , H2CO3      |  2         |   |  Ca(OH)2       |  2         |
  |  H3PO4              |  3         |   |  Al(OH)3       |  3         |
  |  NaCl               |  1         |   |  Na2CO3        |  2         |
  |  CaCl2 , MgSO4      |  2         |   |  Al2(SO4)3     |  6         |
  +---------------------+------------+   +----------------+------------+
```

---

# 4. INTERCONVERSION OF CONCENTRATION TERMS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |    MOLARITY  ->  MOLALITY                                            |
  |                                                                      |
  |                       1000  x  M                                     |
  |          m   =   -------------------------                           |
  |                    1000 d   -   M  x  M2                             |
  |                                                                      |
  |                                                                      |
  |    MOLALITY  ->  MOLARITY                                            |
  |                                                                      |
  |                    1000  x  m  x  d                                  |
  |          M   =   ------------------------                            |
  |                    1000   +   m  x  M2                               |
  |                                                                      |
  |                                                                      |
  |    MOLALITY  ->  MOLE FRACTION  (aqueous solution, M1 = 18)          |
  |                                                                      |
  |                        m                                             |
  |          x2  =   ----------------                                    |
  |                   m   +   55.5                                       |
  |                                                                      |
  |                                                                      |
  |    MASS %  ->  MOLARITY                                              |
  |                                                                      |
  |                    10  x  (mass %)  x  d                             |
  |          M   =   -----------------------------                       |
  |                             M2                                       |
  |                                                                      |
  |    d is in g/mL ,  M2 is the molar mass of the SOLUTE                |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| take 100 g of solution and work step by step | ALWAYS SAFE — use this if you forget the shortcuts |
| `m = 1000M / (1000d - M M2)` | question gives molarity and density, asks molality |
| `M = 1000 m d / (1000 + m M2)` | question gives molality and density, asks molarity |
| `x2 = m / (m + 55.5)` | aqueous solution only; molality to mole fraction |
| `M = 10 x (mass %) x d / M2` | "x % w/w, density d, find molarity" in ONE line |

## THE TEMPERATURE RULE (a guaranteed 2-mark question)

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   MOLARITY  depends on VOLUME.  Volume expands on heating.           |
  |             ==>  MOLARITY  CHANGES  WITH  TEMPERATURE.               |
  |                                                                      |
  |   MOLALITY  depends on MASS.    Mass never changes on heating.       |
  |             ==>  MOLALITY  DOES  NOT  CHANGE  WITH  TEMPERATURE.     |
  |                                                                      |
  |   Same reason: mass %, ppm and mole fraction are also                |
  |   TEMPERATURE-INDEPENDENT (they are all mass or mole ratios).        |
  |   Volume % and molarity are TEMPERATURE-DEPENDENT.                   |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 5. HENRY'S LAW (solubility of a gas in a liquid)

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |            p   =   K(H)   .   x                                      |
  |                                                                      |
  |                        p                                             |
  |            x   =   ---------                                         |
  |                       K(H)                                           |
  |                                                                      |
  |    p    = partial pressure of the gas above the liquid                |
  |    x    = mole fraction of the gas IN the liquid (its solubility)     |
  |    K(H) = Henry's constant.  UNIT = UNIT OF PRESSURE (bar/atm/Pa)     |
  |                                                                      |
  |    HIGH K(H)  ->  LOW  solubility                                    |
  |    LOW  K(H)  ->  HIGH solubility                                    |
  |                                                                      |
  |    K(H) INCREASES with temperature,                                  |
  |    so SOLUBILITY OF A GAS DECREASES with temperature.                |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula / fact | When to use |
|----------------|-------------|
| `p = K(H) x` | any question with the words "Henry", "solubility of a gas", "partial pressure" |
| `n(gas) = x  x  n(water)` | after finding x, to convert to moles (use n(water) = 1000/18 = 55.5 per litre) |
| `K(H) big -> gas insoluble` | comparison MCQs: which gas is most soluble |
| gas solubility falls as T rises | "why do bubbles form before water boils", "why is warm soda flat" |
| scuba / bends / soda / anoxia | the three application answers |

---

# 6. RAOULT'S LAW

## 6.1 Two volatile liquids

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |      p(A)   =   p0(A)  .  x(A)                                       |
  |      p(B)   =   p0(B)  .  x(B)                                       |
  |                                                                      |
  |      p(total)  =  p(A) + p(B)  =  p0(A) x(A)  +  p0(B) x(B)          |
  |                                                                      |
  |      p(total)  =  p0(A)  +  [ p0(B)  -  p0(A) ]  x(B)                |
  |                                                                      |
  |   Composition of the VAPOUR (Dalton's law):                          |
  |                                                                      |
  |                    p(A)                       p(B)                   |
  |      y(A)  =  --------------      y(B)  = --------------             |
  |                  p(total)                    p(total)                |
  |                                                                      |
  |      x = mole fraction in the LIQUID                                 |
  |      y = mole fraction in the VAPOUR                                 |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## 6.2 Non-volatile solute

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |      p(solution)  =   p0(solvent)  .  x(solvent)                     |
  |                                                                      |
  |                   =   p0  .  x1                                      |
  |                                                                      |
  |   Only the solvent evaporates, so there is only ONE term.            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| `p(A) = p0(A) x(A)` | partial pressure of one volatile component |
| `p(total) = p0(A)x(A) + p0(B)x(B)` | total vapour pressure of two volatile liquids |
| `y(A) = p(A)/p(total)` | "find the composition of the vapour" |
| `p = p0 x1` | non-volatile solute (sugar, urea, glucose, salt) |
| Raoult is a special case of Henry with `K(H) = p0` | the standard 2-mark link question |

---

# 7. IDEAL AND NON-IDEAL SOLUTIONS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   IDEAL SOLUTION                                                     |
  |       obeys Raoult's law at ALL concentrations                       |
  |       delta H (mixing)  =  0                                         |
  |       delta V (mixing)  =  0                                         |
  |       A-B force  =  A-A force  =  B-B force                          |
  |                                                                      |
  |   POSITIVE DEVIATION                                                 |
  |       p(observed)  >  p(Raoult)                                      |
  |       delta H  >  0        delta V  >  0                             |
  |       A-B force  <  A-A , B-B                                        |
  |                                                                      |
  |   NEGATIVE DEVIATION                                                 |
  |       p(observed)  <  p(Raoult)                                      |
  |       delta H  <  0        delta V  <  0                             |
  |       A-B force  >  A-A , B-B                                        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Type | Examples to quote | Azeotrope formed |
|------|-------------------|------------------|
| Ideal | benzene + toluene; n-hexane + n-heptane; bromoethane + chloroethane; chlorobenzene + bromobenzene | none |
| Positive deviation | ethanol + water; ethanol + acetone; acetone + CS2; CCl4 + chloroform; acetone + benzene | MINIMUM boiling |
| Negative deviation | chloroform + acetone; HNO3 + water; HCl + water; phenol + aniline; chloroform + benzene | MAXIMUM boiling |

| Azeotrope | Formed by | Example | Boiling point |
|-----------|-----------|---------|---------------|
| Minimum boiling | large POSITIVE deviation | 95% ethanol + water | 351.1 K (below both) |
| Maximum boiling | large NEGATIVE deviation | 68% HNO3 + water | 393.5 K (above both) |

---

# 8. COLLIGATIVE PROPERTY 1 — RELATIVE LOWERING OF VAPOUR PRESSURE

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |      LOWERING of VP            =   p0  -  p                          |
  |                                                                      |
  |                                     p0  -  p                         |
  |      RELATIVE LOWERING of VP   =  -------------   =   x2             |
  |                                        p0                            |
  |                                                                      |
  |                                       n2                             |
  |                                =  -----------                        |
  |                                     n1 + n2                          |
  |                                                                      |
  |      For a DILUTE solution:                                          |
  |                                                                      |
  |          p0  -  p          n2         w2  x  M1                      |
  |        -------------  =  ------  =  --------------                   |
  |             p0             n1         M2  x  w1                      |
  |                                                                      |
  |      MOLAR MASS FORM:                                                |
  |                                                                      |
  |                    w2  x  M1  x  p0                                  |
  |          M2   =  ------------------------                            |
  |                    w1  x  ( p0  -  p )                               |
  |                                                                      |
  |      RELATIVE LOWERING HAS NO UNIT.                                  |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| `(p0 - p)/p0 = x2` | exact form; use when the solute amount is NOT small |
| `(p0 - p)/p0 = n2/n1` | dilute solution approximation; almost always fine |
| `M2 = w2 M1 p0 / (w1 (p0 - p))` | "find the molar mass from vapour pressure data" |
| `p = p0 x1` | "find the vapour pressure of the solution" |

---

# 9. COLLIGATIVE PROPERTY 2 — ELEVATION OF BOILING POINT

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |      delta Tb   =   Tb  -  Tb(0)                                     |
  |                                                                      |
  |      delta Tb   =   Kb   x   m                                       |
  |                                                                      |
  |                       1000  x  Kb  x  w2                             |
  |      M2       =   -----------------------------                      |
  |                       delta Tb   x   w1(g)                           |
  |                                                                      |
  |                       R  x  M1  x  Tb(0)^2                           |
  |      Kb       =   -----------------------------                      |
  |                       1000  x  delta H(vap)                          |
  |                                                                      |
  |      Kb : MOLAL ELEVATION CONSTANT  /  EBULLIOSCOPIC CONSTANT        |
  |           UNIT  K kg / mol                                           |
  |           MEANING: the rise in boiling point when 1 mole of solute   |
  |           is dissolved in 1 kg of that solvent                       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 10. COLLIGATIVE PROPERTY 3 — DEPRESSION OF FREEZING POINT

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |      delta Tf   =   Tf(0)  -  Tf                                     |
  |                                                                      |
  |      delta Tf   =   Kf   x   m                                       |
  |                                                                      |
  |                       1000  x  Kf  x  w2                             |
  |      M2       =   -----------------------------                      |
  |                       delta Tf   x   w1(g)                           |
  |                                                                      |
  |                       R  x  M1  x  Tf(0)^2                           |
  |      Kf       =   -----------------------------                      |
  |                       1000  x  delta H(fus)                          |
  |                                                                      |
  |      Kf : MOLAL DEPRESSION CONSTANT  /  CRYOSCOPIC CONSTANT          |
  |           UNIT  K kg / mol                                           |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Kb and Kf table

```
  +--------------------+---------+---------+-----------+-----------+
  |  SOLVENT           |   Kb    |   Kf    |  b.p. K   |  f.p. K   |
  +--------------------+---------+---------+-----------+-----------+
  |  WATER             |  0.52   |  1.86   |  373.15   |  273.15   |
  |  BENZENE           |  2.53   |  5.12   |  353.23   |  278.65   |
  |  Acetic acid       |  3.07   |  3.90   |  391.1    |  289.6    |
  |  Chloroform        |  3.63   |  4.79   |  334.4    |  209.6    |
  |  Carbon tetra-     |  5.03   | 29.8    |  349.9    |  250.5    |
  |  chloride          |         |         |           |           |
  |  Camphor           |  5.95   | 39.7    |  481.2    |  452.0    |
  |  Ethanol           |  1.20   |  1.99   |  351.5    |  155.7    |
  +--------------------+---------+---------+-----------+-----------+

  ALWAYS use the value GIVEN IN THE QUESTION if one is given.
```

| Formula | When to use |
|---------|-------------|
| `delta Tb = Kb m` | "at what temperature will the solution boil" |
| `delta Tf = Kf m` | "find the freezing point", antifreeze problems |
| `M2 = 1000 Kb w2 / (delta Tb w1)` | molar mass from boiling point data |
| `M2 = 1000 Kf w2 / (delta Tf w1)` | molar mass from freezing point data |
| new b.p. `= Tb(0) + delta Tb` | ADD for boiling |
| new f.p. `= Tf(0) - delta Tf` | SUBTRACT for freezing |

---

# 11. COLLIGATIVE PROPERTY 4 — OSMOTIC PRESSURE

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |      pi   =   C  R  T                                                |
  |                                                                      |
  |                    n2                                                |
  |      pi   =   ---------  R  T                                        |
  |                    V                                                 |
  |                                                                      |
  |      pi  V   =   n2  R  T                                            |
  |                                                                      |
  |                   w2   R   T                                         |
  |      M2   =   -------------------                                    |
  |                    pi   x   V                                        |
  |                                                                      |
  |      T in KELVIN ,  V in LITRES                                      |
  |      R = 0.0821 L atm/K mol   (use with pi in ATM)                   |
  |      R = 0.083  L bar/K mol   (use with pi in BAR)                   |
  |                                                                      |
  |      ISOTONIC SOLUTIONS:    pi(1)  =  pi(2)   ==>   C1  =  C2        |
  |                                                                      |
  |      REVERSE OSMOSIS:  applied pressure  >  osmotic pressure         |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula / term | When to use |
|----------------|-------------|
| `pi = CRT` | "calculate the osmotic pressure of ..." |
| `M2 = w2 R T / (pi V)` | molar mass of a PROTEIN or POLYMER — the preferred method |
| `C1 = C2` | isotonic solutions; "what concentration of urea is isotonic with ..." |
| ISOTONIC | same osmotic pressure; 0.9% w/v NaCl with blood |
| HYPERTONIC | higher pi; cell SHRINKS (plasmolysis) |
| HYPOTONIC | lower pi; cell SWELLS and may burst |
| REVERSE OSMOSIS | desalination of sea water; cellulose acetate membrane; pressure above about 30 atm |

---

# 12. ABNORMAL MOLAR MASS AND THE VAN'T HOFF FACTOR

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |            number of particles ACTUALLY present                      |
  |    i  =  --------------------------------------------                |
  |            number of particles EXPECTED                              |
  |                                                                      |
  |            OBSERVED colligative property                             |
  |       =  --------------------------------------                      |
  |            CALCULATED (normal) colligative property                  |
  |                                                                      |
  |            NORMAL (theoretical) molar mass                           |
  |       =  --------------------------------------                      |
  |            OBSERVED (abnormal) molar mass                            |
  |                                                                      |
  |    i = 1  ->  normal      i > 1  ->  DISSOCIATION                    |
  |                           i < 1  ->  ASSOCIATION                     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The four MODIFIED formulae

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |         p0  -  p                                                     |
  |       -------------   =   i  .  x2                                   |
  |             p0                                                       |
  |                                                                      |
  |       delta Tb    =   i  .  Kb  .  m                                 |
  |                                                                      |
  |       delta Tf    =   i  .  Kf  .  m                                 |
  |                                                                      |
  |       pi          =   i  .  C  .  R  .  T                            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Degree of dissociation and association

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   DISSOCIATION   (1 molecule  ->  n particles)                       |
  |                                                                      |
  |                    i  -  1                                           |
  |       alpha  =  ------------          i  =  1 + ( n - 1 ) alpha      |
  |                    n  -  1                                           |
  |                                                                      |
  |                                                                      |
  |   ASSOCIATION    (n molecules  ->  1 particle)                       |
  |                                                                      |
  |                       1  -  i                n ( 1  -  i )           |
  |       alpha  =  -------------------   =   -------------------        |
  |                   1  -  ( 1 / n )              n  -  1               |
  |                                                                      |
  |                          alpha                                       |
  |       i  =  1  -  alpha  +  -------                                  |
  |                             n                                        |
  |                                                                      |
  |   percentage  =  alpha  x  100                                       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## i values — just count the ions

```
  +-------------------+-------------------------+-------+---------------+
  |  SOLUTE           |  GIVES                  |   i   |  RANGE OF i   |
  +-------------------+-------------------------+-------+---------------+
  |  glucose, urea,   |  no ions                |   1   |  always 1     |
  |  sucrose          |                         |       |               |
  |  NaCl , KCl       |  2 ions                 |   2   |  1 to 2       |
  |  MgSO4            |  2 ions                 |   2   |  1 to 2       |
  |  CaCl2 , MgCl2    |  3 ions                 |   3   |  1 to 3       |
  |  K2SO4 , Na2SO4   |  3 ions                 |   3   |  1 to 3       |
  |  AlCl3            |  4 ions                 |   4   |  1 to 4       |
  |  K3[Fe(CN)6]      |  4 ions                 |   4   |  1 to 4       |
  |  Al2(SO4)3        |  5 ions                 |   5   |  1 to 5       |
  |  acetic / benzoic |  DIMER in benzene       |  0.5  |  0.5 to 1     |
  |  acid in benzene  |  (2 molecules -> 1)     |       |               |
  +-------------------+-------------------------+-------+---------------+
```

| Formula | When to use |
|---------|-------------|
| `i = normal M / observed M` | the question gives both molar masses |
| `i = observed delta Tf / calculated delta Tf` | the question gives an experimental temperature |
| `alpha = (i-1)/(n-1)` | DISSOCIATION — the solute is a salt or an acid in water |
| `alpha = (1-i)/(1-1/n)` | ASSOCIATION — an acid in benzene forming a dimer |
| `delta Tf = i Kf m` | any freezing point question with an IONIC solute |
| `pi = i C R T` | osmotic pressure of a salt solution |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +-----+---------------------------------------------------------------+
  |  1  |   n  =  w / M                                                 |
  +-----+---------------------------------------------------------------+
  |  2  |   x2  =  n2 / ( n1 + n2 )          and   x1 + x2 = 1          |
  +-----+---------------------------------------------------------------+
  |  3  |   M  =  moles of solute / litres of SOLUTION                  |
  +-----+---------------------------------------------------------------+
  |  4  |   m  =  moles of solute / kg of SOLVENT                       |
  +-----+---------------------------------------------------------------+
  |  5  |   p  =  K(H)  x            (HENRY)                            |
  +-----+---------------------------------------------------------------+
  |  6  |   p(total) = p0(A) x(A)  +  p0(B) x(B)      (RAOULT)          |
  +-----+---------------------------------------------------------------+
  |  7  |   ( p0 - p ) / p0   =   x2                                    |
  +-----+---------------------------------------------------------------+
  |  8  |   delta Tb  =  Kb m           Kb(water) = 0.52                |
  +-----+---------------------------------------------------------------+
  |  9  |   delta Tf  =  Kf m           Kf(water) = 1.86                |
  +-----+---------------------------------------------------------------+
  | 10  |   pi  =  C R T                R = 0.0821                      |
  +-----+---------------------------------------------------------------+
  | 11  |   M2  =  1000 K w2 / ( delta T  x  w1 )                       |
  |     |   (works for BOTH Kb and Kf - just swap the constant)          |
  +-----+---------------------------------------------------------------+
  | 12  |   i  =  normal M / observed M                                 |
  |     |   alpha = (i-1)/(n-1)  dissoc.   alpha = (1-i)/(1-1/n) assoc. |
  +-----+---------------------------------------------------------------+
```

**Formula 11 is the single most useful line in this chapter.** It answers
every "find the molar mass" question from either boiling point or freezing
point data:

```
                      1000   x   K   x   w2
        M2    =    ---------------------------
                      delta T    x    w1

        K = Kb   if the question mentions BOILING
        K = Kf   if the question mentions FREEZING or MELTING
        w1 = mass of the SOLVENT in GRAMS
```
