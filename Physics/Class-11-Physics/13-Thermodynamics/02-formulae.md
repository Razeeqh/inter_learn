# Thermodynamics — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
Every temperature in every formula on this page is in **KELVIN**.

---

# 1. THE BASICS

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   T (kelvin)  =  t (celsius)  +  273.15    (use 273 in exams)   |
  |                                                                 |
  |   IDEAL GAS EQUATION      P V  =  n R T                         |
  |                                                                 |
  |   R  =  8.314  J mol^-1 K^-1   =  1.98 cal mol^-1 K^-1          |
  |                                                                 |
  |   1 cal   =  4.186 J                                            |
  |   1 litre =  10^-3  m^3                                         |
  |   1 atm   =  1.013 x 10^5  Pa                                   |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `T = t + 273` | ALWAYS, before touching any thermodynamics formula |
| `PV = nRT` | to convert between P, V, T; to find n; to find missing state variable |
| `n = m / M` | when the question gives mass instead of moles |

---

# 2. HEAT, INTERNAL ENERGY AND WORK

```
  +--------------------------------------------------------------+
  |                                                              |
  |   INTERNAL ENERGY (any process, ideal gas)                   |
  |                                                              |
  |            dU  =  n Cv ( T2  -  T1 )                         |
  |                                                              |
  |   U depends ONLY on T.   dT = 0  =>  dU = 0                  |
  |                                                              |
  +--------------------------------------------------------------+

  +--------------------------------------------------------------+
  |                                                              |
  |   WORK DONE BY A GAS                                         |
  |                            V2                                |
  |            dW = P dV ,  W = INT   P dV                       |
  |                            V1                                |
  |                                                              |
  |            W  =  AREA UNDER THE P-V CURVE                    |
  |                                                              |
  +--------------------------------------------------------------+
```

| Quantity | Type | Symbol |
|---|---|---|
| Internal energy U | **STATE** function (path independent) | `dU` |
| Heat Q | PATH function | `dQ` |
| Work W | PATH function | `dW` |
| Pressure, Volume, Temperature | STATE variables | P, V, T |

---

# 3. SIGN CONVENTION — the table that saves your numericals

```
  +-------------------------------+---------+-----------------------------+
  |  WHAT HAPPENS                 |  SIGN   |  WHY                        |
  +-------------------------------+---------+-----------------------------+
  |  Heat ABSORBED by the system  |  Q > 0  |  energy comes in            |
  |  Heat RELEASED by the system  |  Q < 0  |  energy goes out            |
  |  Gas EXPANDS                  |  W > 0  |  gas does work on outside   |
  |  Gas is COMPRESSED            |  W < 0  |  work is done ON the gas    |
  |  Temperature RISES            | dU > 0  |  more internal energy       |
  |  Temperature FALLS            | dU < 0  |  less internal energy       |
  +-------------------------------+---------+-----------------------------+
```

```
  *** PHYSICS vs CHEMISTRY ***

  PHYSICS   :   dQ  =  dU  +  dW       W = work done BY the gas
  CHEMISTRY :   dU  =   q  +   w       w = work done ON the gas = -P dV

  W(physics)  =  - w(chemistry)

  IN THE PHYSICS PAPER, ALWAYS USE   dQ = dU + dW.
```

---

# 4. THE FIRST LAW

```
  +--------------------------------------------------------------+
  |                                                              |
  |          dQ   =   dU   +   dW                                |
  |                                                              |
  |          dQ   =   dU   +   P dV                              |
  |                                                              |
  |  Heat supplied = rise in internal energy + work done BY gas  |
  |                                                              |
  +--------------------------------------------------------------+
```

| Rearrangement | When to use |
|---|---|
| `dU = dQ - dW` | given heat and work, asked for internal energy |
| `dW = dQ - dU` | given heat and temperature change, asked for work |
| `dQ = dU + dW` | given work and temperature change, asked for heat |

---

# 5. THE FOUR PROCESSES — THE MASTER TABLE

```
+-------------+-----------+-----------------+----------------------+---------------+--------------+
| PROCESS     | CONSTANT  | EQUATION        |  WORK  W             |   dU          |  dQ          |
+-------------+-----------+-----------------+----------------------+---------------+--------------+
| ISOTHERMAL  |  T        | P V = const     | n R T ln(V2/V1)      |     0         |  = W         |
|             |           | (Boyle)         | = 2.303 nRT          |               |              |
|             |           |                 |   log10(V2/V1)       |               |              |
|             |           |                 | = n R T ln(P1/P2)    |               |              |
+-------------+-----------+-----------------+----------------------+---------------+--------------+
| ADIABATIC   |  Q = 0    | P V^g = const   | (P1V1 - P2V2)        |   - W         |    0         |
|             |           | T V^(g-1)= c    |  /(g - 1)            |               |              |
|             |           | T^g P^(1-g)=c   | = nR(T1 - T2)/(g-1)  | = n Cv dT     |              |
+-------------+-----------+-----------------+----------------------+---------------+--------------+
| ISOBARIC    |  P        | V/T = const     | P (V2 - V1)          | n Cv (T2-T1)  | n Cp (T2-T1) |
|             |           | (Charles)       | = n R (T2 - T1)      |               |              |
+-------------+-----------+-----------------+----------------------+---------------+--------------+
| ISOCHORIC   |  V        | P/T = const     |      0               | n Cv (T2-T1)  |  = dU        |
|             |           | (Gay-Lussac)    |                      |               |              |
+-------------+-----------+-----------------+----------------------+---------------+--------------+
| CYCLIC      | returns   | -               | AREA of the LOOP     |     0         |  = W         |
|             | to start  |                 | (+ if clockwise)     |               |              |
+-------------+-----------+-----------------+----------------------+---------------+--------------+
```

---

# 6. ISOTHERMAL PROCESS

```
  +--------------------------------------------------------------+
  |                                                              |
  |         P1 V1  =  P2 V2                                      |
  |                                                              |
  |                          +-  V2  -+                          |
  |         W  =  n R T  ln  | ------ |                          |
  |                          +-  V1  -+                          |
  |                                                              |
  |                                 +-  V2  -+                   |
  |            =  2.303 n R T log10 | ------ |                   |
  |                                 +-  V1  -+                   |
  |                                                              |
  |                          +-  P1  -+                          |
  |            =  n R T  ln  | ------ |                          |
  |                          +-  P2  -+                          |
  |                                                              |
  |         dU  =  0        and       dQ  =  W                   |
  |                                                              |
  |         Slope of the isotherm  =  - P / V                    |
  |         Specific heat in an isothermal process = INFINITY    |
  |                                                              |
  +--------------------------------------------------------------+

  Logs worth memorising:   ln 2 = 0.693    ln 3 = 1.099
                           ln 5 = 1.609    ln 10 = 2.303
```

---

# 7. ADIABATIC PROCESS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   THE THREE FORMS  ( g = gamma = Cp/Cv )                     |
  |                                                              |
  |      P V^g            =  constant    ->  P1 V1^g = P2 V2^g   |
  |      T V^(g-1)        =  constant    ->  T1 V1^(g-1)         |
  |                                            = T2 V2^(g-1)     |
  |      T^g P^(1-g)      =  constant    ->  T1^g P1^(1-g)       |
  |                                            = T2^g P2^(1-g)   |
  |                                                              |
  |                                                              |
  |            P1 V1  -  P2 V2        n R ( T1  -  T2 )          |
  |     W  =  -----------------   =  --------------------        |
  |                 g  -  1                 g  -  1              |
  |                                                              |
  |     Q  =  0      and     dU  =  - W                          |
  |                                                              |
  |     Slope of the adiabat  =  - gamma P / V   (STEEPER)       |
  |     Specific heat in an adiabatic process  =  ZERO           |
  |                                                              |
  +--------------------------------------------------------------+
```

| If you are given | Use |
|---|---|
| P and V | `P1 V1^g = P2 V2^g` |
| T and V | `T1 V1^(g-1) = T2 V2^(g-1)` |
| T and P | `T1^g P1^(1-g) = T2^g P2^(1-g)` |
| the work | `W = nR(T1-T2)/(g-1)` — quickest when T is known |

```
  ADIABATIC EXPANSION    ->  gas COOLS   (dU = -W , W positive)
  ADIABATIC COMPRESSION  ->  gas HEATS   (dU = -W , W negative)
```

---

# 8. ISOBARIC AND ISOCHORIC

```
  +--------------------------------+--------------------------------+
  |          ISOBARIC              |          ISOCHORIC             |
  |          P constant            |          V constant            |
  +--------------------------------+--------------------------------+
  |   V1 / T1  =  V2 / T2          |   P1 / T1  =  P2 / T2          |
  |                                |                                |
  |   W  =  P (V2 - V1)            |   W  =  0                      |
  |      =  n R (T2 - T1)          |                                |
  |                                |                                |
  |   dU =  n Cv (T2 - T1)         |   dU =  n Cv (T2 - T1)         |
  |                                |                                |
  |   dQ =  n Cp (T2 - T1)         |   dQ =  n Cv (T2 - T1)  = dU   |
  |                                |                                |
  |   P-V graph: HORIZONTAL line   |   P-V graph: VERTICAL line     |
  +--------------------------------+--------------------------------+
```

---

# 9. SPECIFIC HEATS AND MAYER'S RELATION

```
  +--------------------------------------------------------------+
  |                                                              |
  |     MAYER'S RELATION        Cp  -  Cv  =  R                  |
  |                                                              |
  |     (per kg form)           cp  -  cv  =  R / M              |
  |                                                              |
  |     RATIO                   gamma  =  Cp / Cv    ( > 1 )     |
  |                                                              |
  |                    R                        gamma R          |
  |     Cv  =  --------------- ,     Cp  =  ---------------      |
  |              gamma  -  1                  gamma  -  1        |
  |                                                              |
  +--------------------------------------------------------------+
```

## Standard values (learn this table)

```
  +----------------+--------+----------+----------+---------+-------------------+
  |  GAS TYPE      | DEGREES|    Cv    |    Cp    |  gamma  |  EXAMPLES         |
  |                | OF FRE.|          |          |         |                   |
  +----------------+--------+----------+----------+---------+-------------------+
  |  MONATOMIC     |   3    | (3/2)R   | (5/2)R   |  5/3    |  He, Ne, Ar, Kr   |
  |                |        | = 12.47  | = 20.79  | = 1.67  |                   |
  +----------------+--------+----------+----------+---------+-------------------+
  |  DIATOMIC      |   5    | (5/2)R   | (7/2)R   |  7/5    |  H2, O2, N2, CO   |
  |                |        | = 20.79  | = 29.10  | = 1.40  |                   |
  +----------------+--------+----------+----------+---------+-------------------+
  |  POLYATOMIC    |   6    |  3 R     |  4 R     |  4/3    |  NH3, CH4, H2O    |
  |  (non-linear)  |        | = 24.94  | = 33.26  | = 1.33  |                   |
  +----------------+--------+----------+----------+---------+-------------------+

  General rule with f degrees of freedom:

        Cv = (f/2) R      Cp = (f/2 + 1) R      gamma = 1 + 2/f
```

| Formula | When to use |
|---|---|
| `Cp - Cv = R` | given one, asked the other; or asked to prove it (4 marks) |
| `gamma = Cp/Cv` | to identify the type of gas |
| `Cv = R/(gamma-1)` | given gamma, need Cv fast |
| `gamma = 1 + 2/f` | when degrees of freedom are given |

---

# 10. HEAT ENGINE

```
  +--------------------------------------------------------------+
  |                                                              |
  |         W   =   Q1  -  Q2         (per cycle, since dU = 0)  |
  |                                                              |
  |                W       Q1 - Q2              Q2               |
  |       eta  =  ----  =  --------   =   1  -  ----             |
  |                Q1        Q1                  Q1              |
  |                                                              |
  |       % efficiency  =  eta  x  100                           |
  |                                                              |
  |       Q1 = heat taken from the SOURCE  (hot, T1)             |
  |       Q2 = heat given to the SINK      (cold, T2)            |
  |                                                              |
  +--------------------------------------------------------------+
```

| Given | Find |
|---|---|
| Q1, Q2 | `W = Q1 - Q2`, `eta = 1 - Q2/Q1` |
| eta, W | `Q1 = W/eta`, `Q2 = Q1 - W` |
| eta, Q1 | `W = eta x Q1`, `Q2 = Q1(1 - eta)` |

---

# 11. REFRIGERATOR AND HEAT PUMP

```
  +--------------------------------------------------------------+
  |                                                              |
  |   REFRIGERATOR                                               |
  |                                                              |
  |               Q2          Q2                                 |
  |    alpha  =  ----  =  -----------                            |
  |               W        Q1 - Q2                               |
  |                                                              |
  |    Carnot (ideal) refrigerator:                              |
  |                                                              |
  |                  T2                                          |
  |    alpha  =  -----------                                     |
  |               T1  -  T2                                      |
  |                                                              |
  |                    1 - eta                                   |
  |    alpha   =    -------------                                |
  |                      eta                                     |
  |                                                              |
  +--------------------------------------------------------------+

  +--------------------------------------------------------------+
  |                                                              |
  |   HEAT PUMP                                                  |
  |                                                              |
  |               Q1        Q1              T1                   |
  |    COP  =    ----  =  --------   =   ---------  = alpha + 1  |
  |               W       Q1 - Q2         T1 - T2                |
  |                                                              |
  +--------------------------------------------------------------+

  ALWAYS:      Q1  =  Q2  +  W
```

---

# 12. CARNOT ENGINE

```
  +--------------------------------------------------------------+
  |                                                              |
  |                        Q2               T2                   |
  |          eta   =  1 - ----    =    1 - ----                  |
  |                        Q1               T1                   |
  |                                                              |
  |          Q1        T1                                        |
  |         ----   =  ----          (the Carnot relation)        |
  |          Q2        T2                                        |
  |                                                              |
  |     T1 = SOURCE temperature (hot)   in KELVIN                |
  |     T2 = SINK   temperature (cold)  in KELVIN                |
  |                                                              |
  |     W  =  eta x Q1  =  Q1 ( 1 - T2/T1 )                      |
  |                                                              |
  +--------------------------------------------------------------+
```

## The four steps of the cycle

```
  +------+------------------------+------------------------------------+
  | STEP |  PROCESS               |  RESULT                            |
  +------+------------------------+------------------------------------+
  | A->B | Isothermal expansion   | Q1 = R T1 ln(V2/V1) absorbed       |
  |      | at T1                  | dU = 0                             |
  +------+------------------------+------------------------------------+
  | B->C | Adiabatic expansion    | W2 = R(T1-T2)/(g-1) , Q = 0        |
  |      | T1 -> T2               | gas COOLS                          |
  +------+------------------------+------------------------------------+
  | C->D | Isothermal compression | Q2 = R T2 ln(V3/V4) rejected       |
  |      | at T2                  | dU = 0                             |
  +------+------------------------+------------------------------------+
  | D->A | Adiabatic compression  | W4 = -R(T1-T2)/(g-1) , Q = 0       |
  |      | T2 -> T1               | gas HEATS, W4 cancels W2           |
  +------+------------------------+------------------------------------+

  The key step in the derivation:

        T1 V2^(g-1) = T2 V3^(g-1)        V2      V3
                                    ->  ---- =  ----
        T1 V1^(g-1) = T2 V4^(g-1)        V1      V4

  so the two logarithms CANCEL and only T1 and T2 survive.
```

---

# 13. SECOND LAW — the two statements (word for word)

```
  KELVIN-PLANCK  (engines):
  "No process is possible whose SOLE RESULT is the absorption of heat
   from a reservoir and the complete conversion of the heat into work."

  CLAUSIUS  (refrigerators):
  "No process is possible whose SOLE RESULT is the transfer of heat from
   a colder body to a hotter body."

  THE TWO STATEMENTS ARE EQUIVALENT.
```

---

# 14. QUICK P-V DIAGRAM READING GUIDE

```
  +----------------------------+-----------------------------------------+
  |  WHAT YOU SEE              |  WHAT IT MEANS                          |
  +----------------------------+-----------------------------------------+
  |  Horizontal line           |  ISOBARIC.  W = P dV = area of rectangle|
  |  Vertical line             |  ISOCHORIC. W = 0                       |
  |  Hyperbola (flatter curve) |  ISOTHERMAL. dU = 0 , Q = W             |
  |  Steeper curve             |  ADIABATIC. Q = 0 , dU = -W             |
  |  Closed loop, CLOCKWISE    |  ENGINE.  W = +area inside              |
  |  Closed loop, ANTICLOCKWISE|  REFRIGERATOR.  W = -area inside        |
  |  Area under the curve      |  = WORK DONE BY the gas                 |
  |  Moving RIGHT              |  expansion, W positive                  |
  |  Moving LEFT               |  compression, W negative                |
  +----------------------------+-----------------------------------------+
```

---

# 15. USEFUL CONSTANTS AND CONVERSIONS

```
  R              =  8.314 J mol^-1 K^-1  =  1.98 cal mol^-1 K^-1
  1 cal          =  4.186 J
  1 litre        =  10^-3 m^3
  1 atm          =  1.013 x 10^5 N m^-2 (Pa)
  1 litre-atm    =  101.3 J
  0 degrees C    =  273 K
  Mechanical equivalent of heat  J  =  4.186 J/cal

  ln 2 = 0.693     ln 3 = 1.099     ln 5 = 1.609     ln 10 = 2.303
  2^0.4 = 1.32     2^0.67 = 1.59    ln x = 2.303 log10 x
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+---------------------------------------------------------------+
  | 1  |  dQ  =  dU  +  dW              (first law, PHYSICS sign)      |
  +----+---------------------------------------------------------------+
  | 2  |  dW  =  P dV  =  area under the P-V curve                     |
  +----+---------------------------------------------------------------+
  | 3  |  dU  =  n Cv dT               (true for EVERY process)        |
  +----+---------------------------------------------------------------+
  | 4  |  Isothermal:   W = n R T ln (V2 / V1) ,  dU = 0 , Q = W       |
  +----+---------------------------------------------------------------+
  | 5  |  Adiabatic:    P V^gamma = constant ,   Q = 0                 |
  +----+---------------------------------------------------------------+
  | 6  |  Adiabatic:    W = (P1V1 - P2V2)/(gamma - 1)                  |
  +----+---------------------------------------------------------------+
  | 7  |  Isobaric:     W = P (V2 - V1)      Isochoric:  W = 0         |
  +----+---------------------------------------------------------------+
  | 8  |  Cp  -  Cv  =  R              (Mayer)                         |
  +----+---------------------------------------------------------------+
  | 9  |  gamma = Cp/Cv :  5/3 mono , 7/5 di , 4/3 poly                |
  +----+---------------------------------------------------------------+
  | 10 |  Engine:       eta = 1 - Q2/Q1 ,   W = Q1 - Q2                |
  +----+---------------------------------------------------------------+
  | 11 |  Carnot:       eta = 1 - T2/T1     (KELVIN!)                  |
  +----+---------------------------------------------------------------+
  | 12 |  Fridge:       alpha = Q2/W = T2/(T1 - T2)                    |
  +----+---------------------------------------------------------------+
```
