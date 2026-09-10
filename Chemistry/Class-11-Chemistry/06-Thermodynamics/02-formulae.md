# Thermodynamics — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

---

# 0. CONSTANTS AND CONVERSIONS YOU MUST KNOW BY HEART

```
  +-----------------------------------+-------------------------------------+
  |  Gas constant      R              |  8.314   J / K / mol                |
  |                                   |  0.0821  L atm / K / mol            |
  |                                   |  1.987 (about 2) cal / K / mol      |
  |                                   |  8.314 x 10^-3  kJ / K / mol        |
  +-----------------------------------+-------------------------------------+
  |  1 litre atmosphere               |  101.3  J   (about 101.325 J)       |
  |  1 calorie                        |  4.184  J   (use 4.18)              |
  |  1 kilocalorie                    |  4.184  kJ                          |
  |  1 kJ                             |  1000  J                            |
  |  0 degC                           |  273.15 K  (use 273)                |
  |  T (K)                            |  t (degC)  +  273                   |
  |  1 bar                            |  10^5 Pa  (about 0.987 atm)         |
  |  1 atm                            |  101325 Pa  =  760 mm Hg            |
  |  Specific heat of water           |  4.18 J / g / K  =  1 cal / g / K   |
  |  Molar volume of a gas at STP     |  22.4 L                             |
  +-----------------------------------+-------------------------------------+

  AT 298 K THE MOST USEFUL PRE-COMPUTED NUMBERS:

       R T             =  8.314 x 298        =  2478  J   =  2.478 kJ
       2.303 R T       =  2.303 x 8.314 x 298 = 5705  J   =  5.705 kJ
```

---

# 1. THE VOCABULARY (no formulas, but free marks)

| Term | Meaning | When to use |
|---|---|---|
| System | the part of the universe under study | any definition question |
| Surroundings | everything outside the system | any definition question |
| Boundary | the wall separating them | 2-mark definition |
| OPEN system | matter YES, energy YES (open beaker) | classify-the-system questions |
| CLOSED system | matter NO, energy YES (sealed tube) | classify-the-system questions |
| ISOLATED system | matter NO, energy NO (thermos flask) | classify-the-system questions |
| Extensive property | depends on amount: m, V, n, U, H, S, G, C | "extensive or intensive?" |
| Intensive property | independent of amount: T, p, density, molarity, specific heat, molar heat capacity, b.p., m.p., viscosity, refractive index | "extensive or intensive?" |
| State function | depends only on initial and final state: U, H, S, G, p, V, T | 2-mark theory |
| Path function | depends on the route: **q and w only** | 2-mark theory |

```
  HANDY RULE:   EXTENSIVE  /  EXTENSIVE   =   INTENSIVE
                mass / volume  =  density
```

---

# 2. TYPES OF PROCESS — WHAT EACH ONE KILLS

```
  +---------------+-----------------+----------------+--------------------------+
  |  PROCESS      | CONSTANT        | WHAT DIES      | FIRST LAW BECOMES        |
  +---------------+-----------------+----------------+--------------------------+
  |  ISOTHERMAL   |  T              |  delta U = 0   |  q  =  - w               |
  |  ADIABATIC    |  no heat flow   |  q = 0         |  delta U  =  w           |
  |  ISOCHORIC    |  V              |  w = 0         |  delta U  =  q(v)        |
  |  ISOBARIC     |  p              |  -             |  q(p)  =  delta H        |
  |  CYCLIC       |  back to start  |  delta U = 0   |  q  =  - w               |
  |               |                 |  delta H = 0   |                          |
  |  FREE EXPAN.  |  p(ext) = 0     |  w = 0         |  delta U  =  q           |
  +---------------+-----------------+----------------+--------------------------+
```

| Process | When to use it |
|---|---|
| Isothermal | the word "at constant temperature" or "isothermally" appears |
| Adiabatic | the words "insulated", "no heat exchange", "adiabatic" appear |
| Isochoric | "sealed rigid vessel", "bomb calorimeter", "constant volume" |
| Isobaric | "open beaker", "at atmospheric pressure", "constant pressure" |
| Cyclic | "returns to its initial state", "completes a cycle" |
| Free expansion | "expands into vacuum", "p(ext) = 0" |

---

# 3. THE SIGN CONVENTION

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |          WHAT THE SYSTEM  G A I N S  IS  POSITIVE                       |
  |                                                                         |
  |   q  =  + ve   heat ABSORBED BY the system      (endothermic)           |
  |   q  =  - ve   heat RELEASED BY the system      (exothermic)            |
  |   w  =  + ve   work done ON the system          (COMPRESSION)           |
  |   w  =  - ve   work done BY the system          (EXPANSION)             |
  |                                                                         |
  |                    "EXPANSION  =>  MINUS"                               |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

---

# 4. FIRST LAW OF THERMODYNAMICS

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |                   delta U   =   q   +   w                               |
  |                                                                         |
  |                   delta U   =   U(final)  -  U(initial)                 |
  |                                                                         |
  |   for a small change:      dU  =  dq  +  dw                             |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `delta U = q + w` | ANY first-law numerical, always start here |
| `delta U = q` (w = 0) | constant volume / rigid vessel / bomb calorimeter |
| `delta U = w` (q = 0) | adiabatic process, insulated container |
| `q = -w` (delta U = 0) | isothermal ideal gas, OR a cyclic process |

---

# 5. WORK OF EXPANSION

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |  GENERAL          w  =  -  INT p(ext) dV                                |
  |                                                                         |
  |  IRREVERSIBLE     w  =  -  p(ext) ( V2 - V1 )   =  - p(ext) delta V     |
  |  (constant p(ext))                                                      |
  |                                                                         |
  |  FREE EXPANSION   w  =  0            (because p(ext) = 0)               |
  |                                                                         |
  |  ISOCHORIC        w  =  0            (because delta V = 0)              |
  |                                                                         |
  |  REVERSIBLE                       +-  V2  -+                            |
  |  ISOTHERMAL       w  =  - n R T ln|  -----  |                           |
  |                                   +-  V1  -+                            |
  |                                                                         |
  |                                              +-  V2  -+                 |
  |                   w  =  - 2.303 n R T   log |  -----  |                 |
  |                                              +-  V1  -+                 |
  |                                                                         |
  |                                              +-  p1  -+                 |
  |                   w  =  - 2.303 n R T   log |  ------ |                 |
  |                                              +-  p2  -+                 |
  |                                                                         |
  +-------------------------------------------------------------------------+

  NOTE the FLIP:  V2 / V1   but   p1 / p2  .  (Boyle's law: p1V1 = p2V2)
```

| Formula | When to use |
|---|---|
| `w = -p(ext) delta V` | "against a constant external pressure of ..." |
| `w = -2.303 n R T log(V2/V1)` | the word **REVERSIBLE** + isothermal |
| `w = -2.303 n R T log(p1/p2)` | reversible isothermal, but PRESSURES are given |
| `w = 0` | "expands into a vacuum" or "rigid container" |
| answer x 101.3 | to change L atm into joules |

```
  MAXIMUM WORK RULE:
      | w(reversible) |   is ALWAYS  >   | w(irreversible) |
      A reversible expansion delivers the maximum possible work.
```

---

# 6. ENTHALPY

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |            H   =   U   +   p V                                          |
  |                                                                         |
  |            delta H  =  delta U  +  p delta V     (constant p)           |
  |                                                                         |
  |            delta H  =  delta U  +  delta n(g)  R  T                     |
  |                                                                         |
  |            delta n(g) = (moles of GASEOUS products)                     |
  |                            - (moles of GASEOUS reactants)               |
  |                                                                         |
  |            q ( at constant VOLUME )    =   delta U                      |
  |            q ( at constant PRESSURE )  =   delta H                      |
  |                                                                         |
  |            delta H  =  H(products)  -  H(reactants)                     |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `delta H = delta U + delta n(g) R T` | converting between delta H and delta U — the most-asked 4-mark sum |
| `delta n(g) = 0 => delta H = delta U` | equal moles of gas both sides |
| `q(v) = delta U` | bomb calorimeter, sealed steel vessel |
| `q(p) = delta H` | open beaker, coffee-cup calorimeter |

```
  delta H  <  0   ->  EXOTHERMIC   (heat given out, products lower in energy)
  delta H  >  0   ->  ENDOTHERMIC  (heat taken in, products higher in energy)
```

---

# 7. HEAT CAPACITY

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   HEAT CAPACITY          q  =  C  x  delta T             unit  J/K      |
  |                                                                         |
  |   SPECIFIC HEAT          q  =  m  x  s  x  delta T       unit  J/g/K    |
  |                                                                         |
  |   MOLAR HEAT CAPACITY    q  =  n  x  Cm x  delta T       unit  J/mol/K  |
  |                                                                         |
  |   AT CONSTANT VOLUME     q(v)  =  delta U  =  n Cv delta T              |
  |                                                                         |
  |   AT CONSTANT PRESSURE   q(p)  =  delta H  =  n Cp delta T              |
  |                                                                         |
  |            *****      Cp   -   Cv   =   R      *****                    |
  |                       (per mole; for n moles it is n R)                 |
  |                                                                         |
  |            gamma  =  Cp / Cv                                            |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

```
  +------------------+-----------+-----------+---------------------+
  |  TYPE OF GAS     |    Cv     |    Cp     |  gamma = Cp / Cv    |
  +------------------+-----------+-----------+---------------------+
  |  Monoatomic      |  (3/2) R  |  (5/2) R  |       1.67          |
  |  He, Ne, Ar      |  = 12.47  |  = 20.78  |                     |
  +------------------+-----------+-----------+---------------------+
  |  Diatomic        |  (5/2) R  |  (7/2) R  |       1.40          |
  |  H2, O2, N2      |  = 20.78  |  = 29.10  |                     |
  +------------------+-----------+-----------+---------------------+
```

| Formula | When to use |
|---|---|
| `q = m s delta T` | mass in grams and a specific heat are given (calorimetry) |
| `q = C delta T` | "heat capacity of the calorimeter is ..." |
| `Cp - Cv = R` | given one, find the other; also the 4-mark derivation |
| `Cp > Cv always` | conceptual/MCQ: extra heat is needed for the expansion work |

---

# 8. CALORIMETRY

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |  BOMB CALORIMETER  (rigid, constant VOLUME)   ->  gives  delta U        |
  |                                                                         |
  |        q  =  -  C(cal) x delta T                                        |
  |        delta U  =  q  /  moles of substance                             |
  |                                                                         |
  |                                                                         |
  |  COFFEE-CUP CALORIMETER (open, constant PRESSURE) -> gives  delta H     |
  |                                                                         |
  |        q(gained by solution)  =  m  x  s  x  delta T                    |
  |        delta H  =  -  q  /  moles of limiting reactant                  |
  |                                                                         |
  +-------------------------------------------------------------------------+

  The MINUS sign: heat GAINED by the water was LOST by the reaction.
```

---

# 9. THE STANDARD ENTHALPY CHANGES

| Symbol | Name | Definition in one line | Sign |
|---|---|---|---|
| `delta H(f)` | formation | 1 mol of compound from its ELEMENTS in standard states | either |
| `delta H(c)` | combustion | 1 mol completely burnt in excess O2 | always **-ve** |
| `delta H(neut)` | neutralisation | 1 mol of water formed from acid + base in dilute solution | always **-ve**, about -57.1 kJ/mol for strong+strong |
| `delta H(a)` | atomisation | 1 mol of substance broken into GASEOUS ATOMS | always **+ve** |
| `delta H(sub)` | sublimation | 1 mol of solid -> vapour directly | always **+ve** |
| `delta H(fus)` | fusion | 1 mol of solid -> liquid at m.p. | always **+ve** |
| `delta H(vap)` | vaporisation | 1 mol of liquid -> gas at b.p. | always **+ve** |
| `delta H(i)` | ionisation | 1 mol of electrons removed from 1 mol of gaseous atoms | always **+ve** |
| `delta H(eg)` | electron gain | 1 mol of electrons added to 1 mol of gaseous atoms | usually **-ve** |
| bond enthalpy | bond dissociation | breaking 1 mol of a bond in the gas phase | always **+ve** |
| `delta H(lattice)` | lattice | 1 mol of ionic solid -> gaseous ions | **+ve** in that direction |
| `delta H(sol)` | solution | 1 mol dissolved to infinite dilution | either |

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   delta H(sub)  =  delta H(fus)  +  delta H(vap)                        |
  |                                                                         |
  |   delta H(sol)  =  delta H(lattice)  +  delta H(hydration)              |
  |                                                                         |
  |   delta H(f) of any ELEMENT in its standard state  =  ZERO              |
  |        ( O2 gas, H2 gas, C graphite, S rhombic, Br2 liquid, Na solid )  |
  |                                                                         |
  |   mean bond enthalpy of C-H in CH4  =  delta H(atomisation) / 4         |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

---

# 10. HESS'S LAW AND REACTION ENTHALPIES

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |  HESS'S LAW                                                             |
  |     delta H  =  delta H1  +  delta H2  +  delta H3  + ...               |
  |                                                                         |
  |  RULE 1  reverse an equation      ->  change the SIGN of delta H        |
  |  RULE 2  multiply an equation     ->  MULTIPLY delta H by the same n    |
  |  RULE 3  add equations            ->  ADD the delta H values            |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |  FROM FORMATION ENTHALPIES     ->   " PRODUCTS  minus  REACTANTS "      |
  |                                                                         |
  |     delta H  =  SUM [ n x delta H(f) ]products                          |
  |                     -  SUM [ n x delta H(f) ]reactants                  |
  |                                                                         |
  |                                                                         |
  |  FROM BOND ENTHALPIES          ->   " REACTANTS  minus  PRODUCTS "      |
  |                                                                         |
  |     delta H  =  SUM ( bonds BROKEN )  -  SUM ( bonds FORMED )           |
  |                                                                         |
  |     (valid only when every species is a GAS)                            |
  |                                                                         |
  +-------------------------------------------------------------------------+

  ***  THESE TWO ARE BACK TO FRONT FROM EACH OTHER. LEARN THEM AS A PAIR. ***
```

```
  BORN-HABER CYCLE  (for NaCl-type solids)

  +-------------------------------------------------------------------------+
  |                                                                         |
  |   delta H(f)  =  S  +  IE  +  ( D / 2 )  +  EA  +  U                    |
  |                                                                         |
  |   S  = enthalpy of sublimation of the metal            (+)              |
  |   IE = ionisation enthalpy of the metal                (+)              |
  |   D/2= half the bond dissociation enthalpy of X2       (+)              |
  |   EA = electron gain enthalpy of the non-metal         (-)              |
  |   U  = lattice enthalpy of FORMATION of the solid      (-)              |
  |                                                                         |
  |   Rearrange to find whichever term is missing (usually U).              |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

---

# 11. ENTROPY

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |                          q ( reversible )                               |
  |         delta S   =   ---------------------      unit:  J / K / mol     |
  |                                 T                                       |
  |                                                                         |
  |         delta S(reaction) = SUM S(products) - SUM S(reactants)          |
  |                                                                         |
  |                          delta H (fus)                                  |
  |         delta S(fus)  =  ---------------          T(f) = melting point  |
  |                              T ( f )                                    |
  |                                                                         |
  |                          delta H (vap)                                  |
  |         delta S(vap)  =  ---------------          T(b) = boiling point  |
  |                              T ( b )                                    |
  |                                                                         |
  |         delta S(total) = delta S(system) + delta S(surroundings)        |
  |                                                                         |
  |                                   -  delta H (system)                   |
  |         delta S(surroundings) =  ----------------------                 |
  |                                             T                           |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `delta S = q(rev) / T` | heat and temperature are given |
| `delta S = delta H(fus) / T(f)` | melting / freezing question |
| `delta S = delta H(vap) / T(b)` | boiling / condensing question |
| `S(gas) > S(liquid) > S(solid)` | "predict the sign of delta S" |
| count moles of gas | fastest way to get the SIGN of delta S in a reaction |

---

# 12. THE SECOND LAW

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   "The entropy of the universe increases in every spontaneous process." |
  |                                                                         |
  |        delta S(total)  >  0    ->    SPONTANEOUS                        |
  |        delta S(total)  =  0    ->    EQUILIBRIUM                        |
  |        delta S(total)  <  0    ->    NON-SPONTANEOUS                    |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

---

# 13. GIBBS ENERGY  *** the biggest box in the chapter ***

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |            G   =   H   -   T S                                          |
  |                                                                         |
  |            delta G   =   delta H   -   T  delta S                       |
  |                                                                         |
  |            delta G   =   -  T  delta S(total)                           |
  |                                                                         |
  |            delta G  <  0   ->  SPONTANEOUS                              |
  |            delta G  =  0   ->  EQUILIBRIUM                              |
  |            delta G  >  0   ->  NON-SPONTANEOUS                          |
  |                                                                         |
  |            delta G  =  maximum useful (non-expansion) work obtainable   |
  |                                                                         |
  |            CROSS-OVER TEMPERATURE :    T  =  delta H / delta S          |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

```
  THE FOUR CASES

  +---------+---------+---------------------------+-------------------------+
  | delta H | delta S |        delta G            |   SPONTANEOUS ?         |
  +---------+---------+---------------------------+-------------------------+
  |    -    |    +    |  negative at all T        |  YES at ALL temperatures|
  |    +    |    -    |  positive at all T        |  NEVER                  |
  |    -    |    -    |  negative if T < dH/dS    |  YES at LOW temperature |
  |    +    |    +    |  negative if T > dH/dS    |  YES at HIGH temperature|
  +---------+---------+---------------------------+-------------------------+
```

> **UNIT WARNING:** delta H comes in **kJ/mol**, delta S comes in **J/K/mol**.
> Convert one of them before subtracting. Divide delta S by 1000, or multiply
> delta H by 1000. This single slip destroys more marks than anything else here.

---

# 14. GIBBS ENERGY AND THE EQUILIBRIUM CONSTANT

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |       delta G (standard)  =  -  R T  ln K                               |
  |                                                                         |
  |       delta G (standard)  =  -  2.303  R T  log K                       |
  |                                                                         |
  |       log K  =  -  delta G / ( 2.303 R T )                              |
  |                                                                         |
  |       K  =  antilog [ - delta G / ( 2.303 R T ) ]                       |
  |                                                                         |
  |       AT 298 K :    2.303 R T  =  5705 J  =  5.705 kJ                   |
  |                     delta G (kJ)  =  - 5.705 log K                      |
  |                                                                         |
  +-------------------------------------------------------------------------+

  +--------------------+------------------+-----------------------------+
  |  delta G(standard) |        K         |  MEANING                    |
  +--------------------+------------------+-----------------------------+
  |     NEGATIVE       |     K  >  1      |  products favoured          |
  |     ZERO           |     K  =  1      |  at equilibrium             |
  |     POSITIVE       |     K  <  1      |  reactants favoured         |
  +--------------------+------------------+-----------------------------+

  Also:   delta G  =  delta G(standard)  +  2.303 R T log Q
          At equilibrium delta G = 0 and Q = K, which gives the box above.
```

---

# 15. THE THIRD LAW

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   "The entropy of a PERFECTLY CRYSTALLINE substance is ZERO at          |
  |    ABSOLUTE ZERO (0 K)."                                                |
  |                                                                         |
  |   Consequence: ABSOLUTE entropies can be measured (unlike U and H,      |
  |   for which only changes can be measured).                              |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

---

# 16. SANITY CHECKS — use these to catch a wrong answer

```
  +---------------------------------------+---------------------------------+
  |  IF YOUR ANSWER IS ...                |  ... IT IS WRONG BECAUSE        |
  +---------------------------------------+---------------------------------+
  |  positive w for an expansion          |  expansion must give w NEGATIVE |
  |  positive delta H for a combustion    |  combustion is always exothermic|
  |  negative bond enthalpy               |  breaking bonds always costs    |
  |  negative ionisation enthalpy         |  removing an electron costs     |
  |  negative delta S for CaCO3 -> CaO+CO2|  gas is produced, so S rises    |
  |  delta G negative but K < 1           |  the two must agree             |
  |  temperature used in degC             |  always convert to KELVIN       |
  |  delta S in J subtracted from dH in kJ|  convert the units first        |
  +---------------------------------------+---------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   1.   delta U  =  q  +  w                                              |
  |                                                                         |
  |   2.   w  =  -  p(ext) delta V              (irreversible)              |
  |                                                                         |
  |   3.   w  =  -  2.303 n R T log ( V2 / V1 ) (reversible isothermal)     |
  |                                                                         |
  |   4.   H  =  U  +  p V                                                  |
  |                                                                         |
  |   5.   delta H  =  delta U  +  delta n(g) R T                           |
  |                                                                         |
  |   6.   Cp  -  Cv  =  R                                                  |
  |                                                                         |
  |   7.   q(v) = delta U        q(p) = delta H                             |
  |                                                                         |
  |   8.   delta H  =  SUM dHf(products)  -  SUM dHf(reactants)             |
  |                                                                         |
  |   9.   delta H  =  SUM (bonds broken)  -  SUM (bonds formed)            |
  |                                                                         |
  |  10.   delta S  =  q(rev) / T                                           |
  |                                                                         |
  |  11.   delta G  =  delta H  -  T delta S                                |
  |                                                                         |
  |  12.   delta G  =  -  2.303 R T log K                                   |
  |                                                                         |
  +-------------------------------------------------------------------------+

     R = 8.314 J/K/mol      1 L atm = 101.3 J      2.303 R T (298 K) = 5705 J
```
