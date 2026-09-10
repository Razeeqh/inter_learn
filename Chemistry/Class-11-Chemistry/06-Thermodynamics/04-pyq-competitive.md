# Thermodynamics — Competitive Exam Questions (EAPCET · TG EAPCET · JEE Main)

**Chemistry 1st Year · Chapter 6**

```
  +---------------+-----------+-------------------------+------------------+
  |  EXAM         | CHEMISTRY |  FROM THIS CHAPTER      |  MARKING         |
  |               |  Qs TOTAL |  (typical)              |                  |
  +---------------+-----------+-------------------------+------------------+
  |  AP EAPCET    |    40     |  2 to 4 questions       |  +1 , NO minus   |
  |  TG EAPCET    |    40     |  2 to 4 questions       |  +1 , NO minus   |
  |  JEE Main     |    25     |  1 to 3 questions       |  +4 , -1         |
  +---------------+-----------+-------------------------+------------------+

  EAPCET has NO NEGATIVE MARKING  ->  NEVER leave a blank. Guess.
  JEE Main has -1               ->  skip what you genuinely do not know.

  Thermodynamics is a HIGH-YIELD chapter for all three, because most
  questions are one-line substitutions. Learn the 12 palm formulae and
  most of these become 20-second questions.
```

**Take R = 8.314 J/K/mol, 1 L atm = 101.3 J, 2.303 R T at 298 K = 5705 J.**

---

# ===============================================================
# PATTERN 1 — STATE FUNCTION vs PATH FUNCTION
# ===============================================================

### Q1
Which of the following is NOT a state function?
(a) Enthalpy  (b) Entropy  (c) Work  (d) Internal energy

**ANSWER: (c) Work**
```
  Only HEAT (q) and WORK (w) are path functions.
  U, H, S, G, p, V, T are all state functions.
```

---

### Q2
Which of the following is a state function?
(a) q  (b) w  (c) q + w  (d) q - w

**ANSWER: (c) q + w**
```
  q and w are individually path functions, but their SUM is delta U,
  which IS a state function. This exact question is a favourite.
```

> **SHORTCUT:** If it can be written as "final minus initial", it is a state function.

---

### Q3
For a cyclic process, which is always true?
(a) q = 0  (b) w = 0  (c) delta U = 0  (d) delta S(surroundings) = 0

**ANSWER: (c) delta U = 0**
```
  In a cycle the system returns to its starting state, so every STATE
  function returns to its original value: delta U = 0, delta H = 0,
  delta S = 0, delta G = 0.
  But q and w are NOT zero - they are equal and opposite:  q = - w.
```

---

# ===============================================================
# PATTERN 2 — EXTENSIVE vs INTENSIVE
# ===============================================================

### Q4
Which of the following is an intensive property?
(a) Volume  (b) Enthalpy  (c) Molar heat capacity  (d) Heat capacity

**ANSWER: (c) Molar heat capacity**
```
  "Per mole" or "per gram" makes it INTENSIVE.
  Heat capacity (of the whole object) is EXTENSIVE; molar heat capacity
  and specific heat are INTENSIVE.
```

---

### Q5
Which of the following sets contains only extensive properties?
(a) T, p, density
(b) U, H, S, V
(c) molarity, viscosity, b.p.
(d) p, V, T

**ANSWER: (b) U, H, S, V**

> **SHORTCUT:** Extensive / extensive = intensive. mass/volume = density (intensive).

---

# ===============================================================
# PATTERN 3 — TYPE OF SYSTEM
# ===============================================================

### Q6
A thermos flask containing hot coffee is an example of a
(a) open system  (b) closed system  (c) isolated system  (d) adiabatic wall only

**ANSWER: (c) isolated system**
```
  A thermos blocks BOTH matter and energy  ->  ISOLATED.
  The commonest wrong answer is "closed". Closed blocks matter ONLY.
```

---

### Q7
A reaction carried out in a sealed but heat-conducting steel vessel is
(a) open  (b) closed  (c) isolated  (d) adiabatic

**ANSWER: (b) closed**
```
  Sealed  ->  no matter can cross.  Heat-conducting  ->  energy CAN cross.
```

---

# ===============================================================
# PATTERN 4 — FIRST LAW SIGN NUMERICALS
# ===============================================================

### Q8
A system absorbs 300 J of heat and does 150 J of work on the surroundings.
The change in internal energy is
(a) +450 J  (b) +150 J  (c) -150 J  (d) -450 J

**ANSWER: (b) +150 J**
```
  q  =  + 300 J    (absorbed)
  w  =  - 150 J    (work done BY the system)

  delta U  =  q + w  =  300 - 150  =  + 150 J
```

---

### Q9
A gas releases 100 J of heat while 200 J of work is done on it. delta U is
(a) -300 J  (b) -100 J  (c) +100 J  (d) +300 J

**ANSWER: (c) +100 J**
```
  q  =  - 100 J   (released)
  w  =  + 200 J   (done ON the system)

  delta U  =  - 100 + 200  =  + 100 J
```

> **SHORTCUT:** Write the two signs FIRST, before you touch the arithmetic.
> "absorbs / on the system" = plus. "releases / by the system" = minus.

---

### Q10
In an adiabatic process, 50 J of work is done ON an ideal gas. Then
(a) delta U = -50 J and T falls
(b) delta U = +50 J and T rises
(c) delta U = 0
(d) q = +50 J

**ANSWER: (b) delta U = +50 J and T rises**
```
  Adiabatic  ->  q = 0  ->  delta U = w = + 50 J
  U rises, and for an ideal gas U depends only on T, so T rises.
  (Same reason a bicycle pump gets hot.)
```

---

# ===============================================================
# PATTERN 5 — WORK IN AN IRREVERSIBLE EXPANSION
# ===============================================================

### Q11
One mole of an ideal gas expands from 1 L to 11 L against a constant
external pressure of 1 atm. The work done is
(a) -10 J  (b) -1013 J  (c) +1013 J  (d) -101.3 J

**ANSWER: (b) -1013 J**
```
  w  =  - p(ext) ( V2 - V1 )  =  - 1 ( 11 - 1 )  =  - 10 L atm

     =  - 10 x 101.3  =  - 1013 J
```

---

### Q12
A gas is compressed from 10 L to 4 L at a constant external pressure of
2 atm. The work done is
(a) -12 L atm  (b) +12 L atm  (c) -8 L atm  (d) +8 L atm

**ANSWER: (b) +12 L atm**
```
  w  =  - 2 ( 4 - 10 )  =  - 2 ( - 6 )  =  + 12 L atm

  COMPRESSION  ->  work done ON the gas  ->  POSITIVE. Correct.
```

> **SHORTCUT:** Decide the SIGN by physics before calculating.
> Expansion = negative, compression = positive. If your arithmetic
> disagrees, you dropped a minus.

---

# ===============================================================
# PATTERN 6 — WORK IN A REVERSIBLE ISOTHERMAL EXPANSION
# ===============================================================

### Q13
One mole of an ideal gas expands reversibly and isothermally at 300 K from
1 L to 10 L. The work done is nearly
(a) -5.74 kJ  (b) -2.30 kJ  (c) -11.5 kJ  (d) -0.91 kJ

**ANSWER: (a) -5.74 kJ**
```
  w  =  - 2.303 n R T log ( V2 / V1 )
     =  - 2.303 x 1 x 8.314 x 300 x log 10
     =  - 5744 J   =   - 5.74 kJ
```

---

### Q14
Five moles of an ideal gas expand reversibly and isothermally at 300 K to
ten times their original volume. The work done is nearly
(a) -5.7 kJ  (b) -14.4 kJ  (c) -28.7 kJ  (d) -57.4 kJ

**ANSWER: (c) -28.7 kJ**
```
  w  =  - 2.303 x 5 x 8.314 x 300 x log 10
     =  - 5744 x 5   =   - 28721 J   =   - 28.7 kJ
```

> **SHORTCUT:** At 300 K,  2.303 R T = 5744 J. So for a TENFOLD expansion
> (log 10 = 1) the work is simply **-5744 x n joules**. Memorise 5744 (300 K)
> and 5705 (298 K) and half these questions become mental arithmetic.

---

### Q15
For the same initial and final states, which is true?
(a) w(reversible) = w(irreversible)
(b) | w(reversible) | > | w(irreversible) |
(c) | w(reversible) | < | w(irreversible) |
(d) w depends only on the end states

**ANSWER: (b)**
```
  A reversible expansion delivers the MAXIMUM possible work.
  This also proves that w is a PATH function.
```

---

# ===============================================================
# PATTERN 7 — FREE EXPANSION AND ADIABATIC EXPANSION INTO VACUUM
# ===============================================================

### Q16
An ideal gas expands into a vacuum in an insulated container. Then
(a) w = 0, q = 0, delta U = 0
(b) w < 0, q = 0, delta U < 0
(c) w = 0, q > 0, delta U > 0
(d) delta T < 0

**ANSWER: (a) w = 0, q = 0, delta U = 0**
```
  Into a VACUUM  ->  p(ext) = 0  ->  w = - 0 x delta V = 0
  INSULATED      ->  q = 0
  Therefore delta U = 0, and for an ideal gas the temperature is unchanged.
```

---

### Q17
For an isothermal reversible expansion of an ideal gas, which is correct?
(a) delta U = 0, delta H = 0, q = -w
(b) delta U = 0, q = 0
(c) delta H = 0, w = 0
(d) q = w

**ANSWER: (a) delta U = 0, delta H = 0, q = -w**
```
  For an IDEAL gas both U and H depend only on T. Isothermal -> both zero.
  So  0 = q + w  ->  q = - w.
```

---

# ===============================================================
# PATTERN 8 — delta H versus delta U  ( delta n(g) )
# ===============================================================

### Q18
For which reaction is delta H equal to delta U?
(a) N2(g) + 3H2(g) -> 2NH3(g)
(b) CaCO3(s) -> CaO(s) + CO2(g)
(c) H2(g) + Cl2(g) -> 2HCl(g)
(d) 2SO2(g) + O2(g) -> 2SO3(g)

**ANSWER: (c) H2(g) + Cl2(g) -> 2HCl(g)**
```
  delta H = delta U only when delta n(g) = 0.

  (a)  2 - 4  = -2      (b)  1 - 0 = +1
  (c)  2 - 2  =  0   <--    (d)  2 - 3 = -1
```

---

### Q19
For 2 CO(g) + O2(g) -> 2 CO2(g) at 298 K, the value of
(delta H - delta U) is nearly
(a) +2.48 kJ  (b) -2.48 kJ  (c) 0  (d) -4.96 kJ

**ANSWER: (b) -2.48 kJ**
```
  delta n(g)  =  2  -  3   =   - 1

  delta H - delta U  =  delta n(g) R T
                     =  ( - 1 )( 8.314 x 10^-3 )( 298 )
                     =  - 2.478 kJ
```

---

### Q20
For which reaction is delta H greater than delta U?
(a) PCl5(g) -> PCl3(g) + Cl2(g)
(b) N2(g) + 3H2(g) -> 2NH3(g)
(c) C(s) + O2(g) -> CO2(g)
(d) 2NO2(g) -> N2O4(g)

**ANSWER: (a) PCl5(g) -> PCl3(g) + Cl2(g)**
```
  delta H > delta U  requires  delta n(g)  POSITIVE.

  (a)  2 - 1 = +1  <--     (b) -2      (c) 0      (d) 1 - 2 = -1
```

> **SHORTCUT:** Count gas moles: **more gas on the right -> delta H > delta U.**
> That single line answers this whole pattern.

---

### Q21
The enthalpy of combustion of a substance at constant volume is
-3263.9 kJ/mol for C6H6(l). Given delta n(g) = -1.5 at 298 K, delta H is
(a) -3260.2 kJ/mol  (b) -3267.6 kJ/mol  (c) -3263.9 kJ/mol  (d) -3271.3 kJ/mol

**ANSWER: (b) -3267.6 kJ/mol**
```
  delta H  =  delta U + delta n(g) R T
           =  - 3263.9  +  ( -1.5 )( 2.4776 )
           =  - 3263.9  -  3.72   =   - 3267.6 kJ/mol
```

---

# ===============================================================
# PATTERN 9 — Cp , Cv AND gamma
# ===============================================================

### Q22
For a monoatomic ideal gas, Cp / Cv equals
(a) 1.40  (b) 1.33  (c) 1.67  (d) 1.00

**ANSWER: (c) 1.67**
```
  Monoatomic:  Cv = (3/2) R ,  Cp = (5/2) R
  gamma  =  (5/2) / (3/2)  =  5/3  =  1.67

  Diatomic:  Cv = (5/2) R , Cp = (7/2) R , gamma = 1.40
```

---

### Q23
The value of Cp - Cv for 3 moles of an ideal gas is
(a) 8.314 J/K  (b) 24.94 J/K  (c) 2.77 J/K  (d) 0

**ANSWER: (b) 24.94 J/K**
```
  For n moles,  Cp - Cv  =  n R  =  3 x 8.314  =  24.94 J/K
```

---

### Q24
Cp is greater than Cv because
(a) heat capacity increases with pressure
(b) at constant pressure extra energy is needed for the expansion work
(c) Cv includes electronic energy
(d) gases are compressible

**ANSWER: (b)**
```
  At constant volume ALL the heat raises U. At constant pressure the gas
  must ALSO push back the atmosphere, so more heat is needed.
  The extra amount is exactly R per mole per kelvin.
```

---

# ===============================================================
# PATTERN 10 — HESS'S LAW
# ===============================================================

### Q25
Given
```
   S(s) + O2(g) -> SO2(g)            delta H = - 298.2 kJ
   SO2(g) + 1/2 O2(g) -> SO3(g)      delta H = -  98.7 kJ
```
delta H for S(s) + 3/2 O2(g) -> SO3(g) is
(a) -199.5 kJ  (b) -396.9 kJ  (c) +396.9 kJ  (d) -298.2 kJ

**ANSWER: (b) -396.9 kJ**
```
  Both equations already point the right way, so simply ADD:

      S + O2 -> SO2                        - 298.2
      SO2 + 1/2 O2 -> SO3                  -  98.7
      -----------------------------------------------
      S + 3/2 O2 -> SO3                    - 396.9 kJ
```

---

### Q26
Given C(graphite) + O2 -> CO2, delta H = -393.5 kJ and
C(diamond) + O2 -> CO2, delta H = -395.4 kJ, then for
C(graphite) -> C(diamond) delta H is
(a) -1.9 kJ  (b) +1.9 kJ  (c) -788.9 kJ  (d) +788.9 kJ

**ANSWER: (b) +1.9 kJ**
```
  Keep the first, REVERSE the second (sign flips):

      C(graphite) + O2 -> CO2              - 393.5
      CO2 -> C(diamond) + O2               + 395.4
      ---------------------------------------------
      C(graphite) -> C(diamond)            +   1.9 kJ
```

> **SHORTCUT:** For "X -> Y" from two combustion enthalpies,
> **delta H = dHc(X) - dHc(Y)**. Here (-393.5) - (-395.4) = +1.9. One step.

---

# ===============================================================
# PATTERN 11 — delta H FROM FORMATION ENTHALPIES
# ===============================================================

### Q27
For 2 H2S(g) + 3 O2(g) -> 2 H2O(l) + 2 SO2(g), given delta H(f):
H2S = -20, H2O(l) = -286, SO2 = -297 kJ/mol, delta H is
(a) -1126 kJ  (b) -1166 kJ  (c) -563 kJ  (d) +1126 kJ

**ANSWER: (a) -1126 kJ**
```
  PRODUCTS  :  2( -286 ) + 2( -297 )  =  - 572 - 594  =  - 1166 kJ
  REACTANTS :  2( - 20 ) + 3( 0 )     =  - 40 kJ        (O2 is an element)

  delta H  =  - 1166  -  ( - 40 )  =  - 1126 kJ
```

---

### Q28
The standard enthalpy of formation is ZERO for
(a) Br2(g)  (b) C(diamond)  (c) O3(g)  (d) Br2(l)

**ANSWER: (d) Br2(l)**
```
  delta H(f) = 0 only for an element in its MOST STABLE (standard) form.
  Bromine is a LIQUID at 298 K, so Br2(l) has dHf = 0 but Br2(g) does not.
  Carbon's standard form is GRAPHITE, not diamond.
  Oxygen's standard form is O2, not O3.
```

> **SHORTCUT:** Remember the four traps: **Br2(l)**, **C(graphite)**,
> **O2(g)**, **S(rhombic)**. Everything else in that family is non-zero.

---

# ===============================================================
# PATTERN 12 — delta H FROM BOND ENTHALPIES
# ===============================================================

### Q29
For H2(g) + Br2(g) -> 2 HBr(g), given bond enthalpies H-H = 435,
Br-Br = 192, H-Br = 368 kJ/mol, delta H is
(a) -109 kJ  (b) +109 kJ  (c) -259 kJ  (d) -736 kJ

**ANSWER: (a) -109 kJ**
```
  delta H  =  SUM(bonds BROKEN)  -  SUM(bonds FORMED)

  BROKEN :  435 + 192  =  627 kJ
  FORMED :  2 x 368    =  736 kJ

  delta H  =  627 - 736  =  - 109 kJ
```

---

### Q30
For CH4(g) + Cl2(g) -> CH3Cl(g) + HCl(g), given C-H = 414, Cl-Cl = 243,
C-Cl = 331, H-Cl = 431 kJ/mol, delta H is
(a) -105 kJ  (b) +105 kJ  (c) -1419 kJ  (d) -25 kJ

**ANSWER: (a) -105 kJ**
```
  Only ONE C-H bond breaks; the other three survive unchanged.

  BROKEN :  1 C-H + 1 Cl-Cl  =  414 + 243  =  657 kJ
  FORMED :  1 C-Cl + 1 H-Cl  =  331 + 431  =  762 kJ

  delta H  =  657 - 762  =  - 105 kJ
```

> **SHORTCUT:** Bond enthalpies are the ONLY rule that goes
> "**reactants minus products**". Formation enthalpies go
> "**products minus reactants**". Remember them as an opposite pair.

---

### Q31
The mean C-H bond enthalpy in methane, given the enthalpy of atomisation
of CH4 is 1665 kJ/mol, is
(a) 1665 kJ/mol  (b) 832 kJ/mol  (c) 416 kJ/mol  (d) 333 kJ/mol

**ANSWER: (c) 416 kJ/mol**
```
  CH4 has FOUR C-H bonds.     1665 / 4  =  416.25 kJ/mol
```

---

# ===============================================================
# PATTERN 13 — ENTROPY: SIGN AND CALCULATION
# ===============================================================

### Q32
For which process is delta S positive?
(a) 2 SO2(g) + O2(g) -> 2 SO3(g)
(b) H2O(l) -> H2O(s)
(c) CaCO3(s) -> CaO(s) + CO2(g)
(d) N2(g) + 3H2(g) -> 2NH3(g)

**ANSWER: (c) CaCO3(s) -> CaO(s) + CO2(g)**
```
  Count gas moles:
    (a) 3 -> 2  decrease   (b) liquid -> solid, more ordered
    (c) 0 -> 1  INCREASE  <--   (d) 4 -> 2  decrease
```

> **SHORTCUT:** Gas moles up -> delta S positive. Nine out of ten entropy-sign
> questions are settled by counting gases alone.

---

### Q33
The enthalpy of vaporisation of a liquid is 30 kJ/mol at its boiling point
of 300 K. The entropy of vaporisation is
(a) 0.1 J/K/mol  (b) 10 J/K/mol  (c) 100 J/K/mol  (d) 9000 J/K/mol

**ANSWER: (c) 100 J/K/mol**
```
  delta S  =  delta H(vap) / T(b)  =  30000 / 300  =  100 J/K/mol
```

---

### Q34
Which has the highest molar entropy at 298 K?
(a) H2O(s)  (b) H2O(l)  (c) H2O(g)  (d) all equal

**ANSWER: (c) H2O(g)**
```
  S(gas)  >  S(liquid)  >  S(solid)
```

---

### Q35
The entropy of a perfectly crystalline solid at 0 K is
(a) infinity  (b) zero  (c) negative  (d) equal to its enthalpy

**ANSWER: (b) zero**
```
  THIRD LAW of thermodynamics. At 0 K a perfect crystal has only ONE
  possible arrangement, hence no randomness at all.
```

---

# ===============================================================
# PATTERN 14 — GIBBS ENERGY NUMERICALS
# ===============================================================

### Q36
For a reaction delta H = -382 kJ and delta S = -145 J/K at 298 K.
delta G is nearly
(a) -338.8 kJ  (b) -425.2 kJ  (c) +338.8 kJ  (d) -382 kJ

**ANSWER: (a) -338.8 kJ**
```
  delta G  =  delta H  -  T delta S
           =  - 382000  -  ( 298 x ( - 145 ) )
           =  - 382000  +  43210
           =  - 338790 J   =   - 338.8 kJ
```

> **SHORTCUT:** Watch the DOUBLE minus. When delta S is negative,
> the -T delta S term ADDS a positive number.

---

### Q37
For a reaction delta H = 30 kJ/mol and delta S = 100 J/K/mol. The reaction
is at equilibrium at
(a) 300 K  (b) 3 K  (c) 3000 K  (d) 30 K

**ANSWER: (a) 300 K**
```
  At equilibrium delta G = 0, so

              T  =  delta H / delta S  =  30000 / 100  =  300 K
```

---

### Q38
A reaction has delta H positive and delta S positive. It will be spontaneous
(a) at all temperatures
(b) at no temperature
(c) at high temperature only
(d) at low temperature only

**ANSWER: (c) at high temperature only**
```
  delta G = delta H - T delta S. With both positive, only a LARGE T can
  make T delta S big enough to overcome delta H.
```

---

### Q39
A reaction with delta H negative and delta S positive is
(a) spontaneous at all temperatures
(b) never spontaneous
(c) spontaneous only above T = dH/dS
(d) spontaneous only below T = dH/dS

**ANSWER: (a) spontaneous at all temperatures**
```
  delta G  =  ( negative )  -  T ( positive )  =  always NEGATIVE.
  This is the "dream case".
```

---

# ===============================================================
# PATTERN 15 — delta G AND THE EQUILIBRIUM CONSTANT
# ===============================================================

### Q40
If the equilibrium constant of a reaction is 1, then delta G(standard) is
(a) positive  (b) negative  (c) zero  (d) infinity

**ANSWER: (c) zero**
```
  delta G  =  - 2.303 R T log K ;   log 1 = 0  ->  delta G = 0
```

---

### Q41
At 298 K, delta G(standard) for a reaction is -5.705 kJ/mol.
The equilibrium constant is
(a) 1  (b) 10  (c) 100  (d) 0.1

**ANSWER: (b) 10**
```
  At 298 K,  2.303 R T = 5.705 kJ

              - 5.705  =  - 5.705 log K
              log K    =  1        ->     K  =  10
```

---

### Q42
For a reaction K = 10^-3 at 298 K. delta G(standard) is
(a) -17.1 kJ/mol  (b) +17.1 kJ/mol  (c) -5.7 kJ/mol  (d) +5.7 kJ/mol

**ANSWER: (b) +17.1 kJ/mol**
```
  delta G  =  - 5.705 x log ( 10^-3 )
           =  - 5.705 x ( - 3 )
           =  + 17.1 kJ/mol

  K < 1  ->  delta G must be POSITIVE. Consistent.
```

> **SHORTCUT:** At 298 K, **delta G (kJ) = -5.705 x log K**. If K is a clean
> power of ten, this is a five-second question.

---

### Q43
If delta G(standard) is negative, then
(a) K < 1, reactants favoured
(b) K > 1, products favoured
(c) K = 1
(d) the reaction is non-spontaneous

**ANSWER: (b) K > 1, products favoured**

---

# ===============================================================
# PATTERN 16 — CALORIMETRY AND HEAT
# ===============================================================

### Q44
A bomb calorimeter measures
(a) delta H  (b) delta U  (c) delta S  (d) delta G

**ANSWER: (b) delta U**
```
  The steel bomb is RIGID, so delta V = 0, w = 0 and q(v) = delta U.
  A coffee-cup calorimeter (open, constant pressure) measures delta H.
```

---

### Q45
The heat required to raise the temperature of 100 g of water from 20 degC
to 70 degC (s = 4.18 J/g/K) is
(a) 20.9 kJ  (b) 2.09 kJ  (c) 209 kJ  (d) 4.18 kJ

**ANSWER: (a) 20.9 kJ**
```
  q  =  m s delta T  =  100 x 4.18 x 50  =  20900 J  =  20.9 kJ
```

---

# ===============================================================
# PATTERN 17 — THEORY / DEFINITION MCQs
# ===============================================================

### Q46
The enthalpy of neutralisation of a strong acid by a strong base is
constant at about -57.1 kJ/mol because
(a) all acids are equally strong
(b) the only reaction occurring is H+ + OH- -> H2O
(c) water has a high specific heat
(d) the salt formed is always neutral

**ANSWER: (b)**
```
  Strong acids and bases are FULLY ionised, so the actual reaction is
  always the same one, whatever the acid and base.
  For a WEAK acid the value is LESS negative, because energy is used up
  in ionising it.
```

---

### Q47
The enthalpy of neutralisation of CH3COOH with NaOH is less negative than
-57.1 kJ/mol because
(a) acetic acid is a strong acid
(b) some energy is used to ionise the weak acid
(c) the reaction is endothermic
(d) more water is formed

**ANSWER: (b)**

---

### Q48
Which is always POSITIVE?
(a) enthalpy of combustion
(b) enthalpy of neutralisation
(c) bond dissociation enthalpy
(d) enthalpy of formation

**ANSWER: (c) bond dissociation enthalpy**
```
  Breaking a bond ALWAYS requires energy.
  Combustion and neutralisation are always negative;
  enthalpy of formation can be either sign.
```

---

### Q49
delta H(sublimation) equals
(a) delta H(fus) - delta H(vap)
(b) delta H(fus) + delta H(vap)
(c) delta H(vap) - delta H(fus)
(d) delta H(fus) x delta H(vap)

**ANSWER: (b) delta H(fus) + delta H(vap)**
```
  Hess's law: solid -> liquid -> gas is the same as solid -> gas.
```

---

### Q50
The correct expression for the first law used in the NCERT convention is
(a) delta U = q - w  (b) delta U = q + w  (c) delta H = q + w  (d) q = delta U + w

**ANSWER: (b) delta U = q + w**
```
  With w defined as work done ON the system.
```

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-------------------------------------+-----------------------------------+
  |  IF YOU SEE THIS ...                |  DO THIS IMMEDIATELY              |
  +-------------------------------------+-----------------------------------+
  |  "state function or path function"  |  q and w are the ONLY path        |
  |                                     |  functions. Everything else is a  |
  |                                     |  state function.                  |
  +-------------------------------------+-----------------------------------+
  |  "extensive or intensive"           |  If it is "per gram" or "per mole"|
  |                                     |  it is INTENSIVE.                 |
  +-------------------------------------+-----------------------------------+
  |  "thermos flask"                    |  ISOLATED. (Not closed.)          |
  +-------------------------------------+-----------------------------------+
  |  "absorbs / does work / releases"   |  Write the SIGNS first:           |
  |                                     |  absorbs +q, releases -q,         |
  |                                     |  work BY -w, work ON +w.          |
  |                                     |  Then delta U = q + w.            |
  +-------------------------------------+-----------------------------------+
  |  "against a constant pressure"      |  w = -p(ext)(V2-V1). Answer in    |
  |                                     |  L atm, then multiply by 101.3.   |
  +-------------------------------------+-----------------------------------+
  |  "reversibly and isothermally"      |  w = -2.303 nRT log(V2/V1)        |
  |                                     |  At 300 K: 2.303RT = 5744 J.      |
  |                                     |  At 298 K: 2.303RT = 5705 J.      |
  +-------------------------------------+-----------------------------------+
  |  "into a vacuum" / "free expansion" |  w = 0. Full stop.                |
  +-------------------------------------+-----------------------------------+
  |  "adiabatic"                        |  q = 0, so delta U = w.           |
  +-------------------------------------+-----------------------------------+
  |  "cyclic"                           |  delta U = 0, delta H = 0,        |
  |                                     |  so q = -w.                       |
  +-------------------------------------+-----------------------------------+
  |  "delta H or delta U bigger?"       |  Count GAS moles only.            |
  |                                     |  More gas right -> dH > dU.       |
  +-------------------------------------+-----------------------------------+
  |  delta H = delta U asked            |  Look for delta n(g) = 0.         |
  +-------------------------------------+-----------------------------------+
  |  "Cp - Cv"                          |  = R per mole, = nR for n moles.  |
  |                                     |  Mono 1.67, di 1.40.              |
  +-------------------------------------+-----------------------------------+
  |  Two equations, find a third        |  HESS. Reverse -> flip the sign.  |
  |                                     |  Multiply -> multiply delta H.    |
  +-------------------------------------+-----------------------------------+
  |  delta H(f) values given            |  PRODUCTS minus REACTANTS.        |
  +-------------------------------------+-----------------------------------+
  |  Bond enthalpies given              |  REACTANTS minus PRODUCTS.        |
  |                                     |  (the OPPOSITE way round!)        |
  +-------------------------------------+-----------------------------------+
  |  "delta H(f) = 0 for which?"        |  Br2(l), C(graphite), O2(g),      |
  |                                     |  S(rhombic). Watch the traps.     |
  +-------------------------------------+-----------------------------------+
  |  "sign of delta S"                  |  Count moles of GAS. Up -> +ve.   |
  +-------------------------------------+-----------------------------------+
  |  "entropy of fusion/vaporisation"   |  delta S = delta H / T.           |
  |                                     |  Convert kJ to J first.           |
  +-------------------------------------+-----------------------------------+
  |  delta H and delta S both given     |  delta G = dH - T dS.             |
  |                                     |  CONVERT dS from J to kJ FIRST.   |
  +-------------------------------------+-----------------------------------+
  |  "at what temperature spontaneous"  |  T = delta H / delta S.           |
  +-------------------------------------+-----------------------------------+
  |  K given, delta G asked (298 K)     |  delta G (kJ) = -5.705 log K.     |
  +-------------------------------------+-----------------------------------+
  |  delta G given, K asked             |  log K = -delta G / (2.303 R T)   |
  |                                     |  then take the antilog.           |
  +-------------------------------------+-----------------------------------+
  |  "entropy at 0 K"                   |  ZERO (third law).                |
  +-------------------------------------+-----------------------------------+
  |  Answer looks wrong                 |  Combustion must be -ve.          |
  |                                     |  Bond breaking must be +ve.       |
  |                                     |  Expansion work must be -ve.      |
  |                                     |  dG -ve <=> K > 1.                |
  +-------------------------------------+-----------------------------------+
```

```
  LAST TWO REMINDERS

    EAPCET  -  no negative marking. If two options survive, GUESS. Never
               leave a thermodynamics question blank; half of them are
               one-line substitutions you can partly reason out.

    JEE     -  -1 for a wrong answer. If you cannot decide the SIGN,
               skip it. A wrong sign is the commonest way to get a
               thermodynamics MCQ wrong.
```
