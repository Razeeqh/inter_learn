# Thermodynamics — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — CLASSIFY THE SYSTEM                                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What type of system is ...?" or "Define open / closed /
            isolated system with examples."
  METHOD    Ask two questions about the boundary:
                Can MATTER cross?      Can ENERGY cross?

                OPEN      matter YES , energy YES   open beaker, open cup
                CLOSED    matter NO  , energy YES   sealed steel tube
                ISOLATED  matter NO  , energy NO    thermos flask

            Always give the EXAMPLE - it carries half the mark.
  TRAP      A thermos flask is ISOLATED, not closed. "Closed" blocks
            matter only.
```

```
  PATTERN 2 — EXTENSIVE OR INTENSIVE                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Which of these is an intensive property?" / "Distinguish
            between extensive and intensive properties."
  METHOD    Test: take HALF the sample. Does the number change?
                CHANGES     -> EXTENSIVE  (m, V, n, U, H, S, G, C)
                UNCHANGED   -> INTENSIVE  (T, p, density, molarity,
                                           specific heat, molar Cp, b.p.)
            Rule:  EXTENSIVE / EXTENSIVE = INTENSIVE
  TRAP      HEAT CAPACITY is extensive, but SPECIFIC HEAT and MOLAR HEAT
            CAPACITY are intensive. Anything "per gram" or "per mole"
            is intensive.
```

```
  PATTERN 3 — STATE FUNCTION OR PATH FUNCTION                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a state function?" / "Which is a path function?"
  METHOD    STATE FUNCTION: value depends ONLY on the initial and final
            states.   U, H, S, G, p, V, T, n, density.
            PATH FUNCTION: depends on the route.  ONLY q and w.
            Add the killer line: "q and w are path functions individually,
            but their sum q + w = delta U is a state function."
  TRAP      Students list temperature or pressure as path functions.
            They are not. Memorise the short list: q and w. That's all.
```

```
  PATTERN 4 — NAME / DEFINE THE PROCESS                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define isothermal / adiabatic / isochoric / isobaric /
            cyclic / reversible process."
  METHOD    Give the CONSTANT quantity and the CONSEQUENCE:

              ISOTHERMAL  T constant   -> delta U = 0 -> q = -w
              ADIABATIC   q = 0        -> delta U = w
              ISOCHORIC   V constant   -> w = 0 -> delta U = q(v)
              ISOBARIC    p constant   -> q(p) = delta H
              CYCLIC      back to start-> delta U = 0 -> q = -w
  TRAP      Do not stop at the definition. The CONSEQUENCE line is worth
            the second mark.
```

```
  PATTERN 5 — REVERSIBLE vs IRREVERSIBLE                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between a reversible and an irreversible process."
  METHOD    Write four contrasts:
              speed        - infinitely slow / very fast
              equilibrium  - in equilibrium throughout / not
              reversal     - by an infinitesimal change / impossible
              work         - MAXIMUM work / less work
            Finish: "All real processes are irreversible."
  TRAP      "Reversible" does NOT mean "runs backwards". It means it could
            be reversed by an infinitesimally small change.
```

```
  PATTERN 6 — FIRST LAW: SIGN NUMERICAL                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A system absorbs ... J of heat and does ... J of work."
  METHOD    1. Write the SIGNS before any arithmetic:
                 absorbs heat        ->  q = + ve
                 releases heat       ->  q = - ve
                 work done ON system ->  w = + ve   (compression)
                 work done BY system ->  w = - ve   (expansion)
              2. delta U  =  q  +  w
              3. State what the sign of delta U means in words.
  TRAP      Using delta U = q - w (the old convention). The AP/NCERT
            syllabus uses  delta U = q + w  with w = work done ON the
            system. Never mix them.
```

```
  PATTERN 7 — WORK, IRREVERSIBLE EXPANSION                     2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "expands against a CONSTANT external pressure of ..."
  METHOD    1.  w  =  -  p(ext) ( V2 - V1 )
              2. Answer comes out in L atm.
              3. Convert:   1 L atm  =  101.3 J
  TRAP      Use the EXTERNAL pressure, not the gas pressure.
            Expansion must give a NEGATIVE w; compression POSITIVE.
            Check your sign against physics before writing the answer.
```

```
  PATTERN 8 — WORK, REVERSIBLE ISOTHERMAL EXPANSION            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   The word "REVERSIBLY" together with "isothermally".
  METHOD                            +-  V2  -+            +-  p1  -+
              w  =  - 2.303 n R T log|  ----- |   =  ... log|  ----- |
                                     +-  V1  -+            +-  p2  -+
            Then, because delta U = 0 for an isothermal ideal gas,
                  q  =  - w   and   delta H = 0.
  TRAP      Volumes go V2/V1 but pressures go p1/p2 - they FLIP.
            Use log to base 10 with the 2.303, or ln without it. Not both.
  SHORTCUT  At 298 K, 2.303 R T = 5705 J. At 300 K it is 5744 J.
            So a tenfold expansion of n moles at 300 K gives -5744n J.
```

```
  PATTERN 9 — FREE EXPANSION / EXPANSION INTO VACUUM               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "expands into a vacuum" , "free expansion" , "p(ext) = 0"
  METHOD    p(ext) = 0   ->   w  =  0
            If it is ALSO insulated (adiabatic), q = 0, so delta U = 0
            and the temperature of an ideal gas does not change.
  TRAP      Students still apply -2.303 nRT log(V2/V1). No. Against a
            vacuum there is nothing to push, so the work is ZERO whether
            the expansion is reversible or not.
```

```
  PATTERN 10 — DERIVE THE WORK EXPRESSION                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the work done in a reversible
            isothermal expansion of an ideal gas."
  METHOD    1. Reversible => p(ext) = p = nRT / V
              2. dw = - p(ext) dV = - (nRT/V) dV
              3. Integrate V1 to V2 with T constant
              4. w = - nRT ln(V2/V1)
              5. w = - 2.303 nRT log(V2/V1) , and = -2.303 nRT log(p1/p2)
              6. Add:  delta U = 0, so q = - w.
  TRAP      Step 1 is the whole point of the derivation. If you do not
            state WHY p(ext) can be replaced by nRT/V, you lose marks.
```

```
  PATTERN 11 — delta H FROM delta U (or the reverse)           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Both delta H and delta U appear, or "at constant volume the
            heat of combustion is ...".
  METHOD    1. Write the balanced equation with STATE SYMBOLS.
              2. delta n(g) = (gas moles of products) - (gas moles of
                 reactants).  COUNT GASES ONLY.
              3. delta H = delta U + delta n(g) R T
              4. Keep units consistent: R = 8.314 x 10^-3 kJ/K/mol if the
                 enthalpies are in kJ.
  TRAP      Counting liquids and solids in delta n(g). H2O(l) does NOT
            count; H2O(g) does. Also, mixing kJ with J.
  SHORTCUT  At 298 K, RT = 2.478 kJ. So delta H - delta U = 2.478 x dn(g).
```

```
  PATTERN 12 — "IS delta H = delta U ?"                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "For which reaction is delta H equal to delta U?"
  METHOD    They are equal when  delta n(g)  =  0.
            Scan each option, count gas moles both sides, pick the one
            that balances.
            More gas on the right -> delta H > delta U.
            More gas on the left  -> delta H < delta U.
  TRAP      C(s) + O2(g) -> CO2(g) LOOKS unbalanced in moles, but the gas
            count is 1 -> 1, so delta n(g) = 0 and delta H = delta U.
```

```
  PATTERN 13 — DERIVE  Cp - Cv = R                                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the relation between Cp and Cv" / "Show Cp - Cv = R"
  METHOD    1. Cv = (dU/dT) at constant V   (because w = 0 there)
              2. Cp = (dH/dT) at constant p (because q(p) = delta H)
              3. H = U + pV , and for 1 mole of ideal gas pV = RT,
                 so H = U + RT
              4. Differentiate w.r.t. T:  dH/dT = dU/dT + R
              5. Therefore  Cp = Cv + R , i.e.  Cp - Cv = R
              6. Explain: the extra R is the expansion work done against
                 the atmosphere. Hence Cp is always > Cv.
  TRAP      Forgetting that the relation is PER MOLE. For n moles it is
            Cp - Cv = nR.
```

```
  PATTERN 14 — HEAT / SPECIFIC HEAT NUMERICAL                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   A mass in grams and a specific heat, or "heat capacity of the
            calorimeter is ... J/K".
  METHOD    q  =  m  x  s  x  delta T        (mass and specific heat)
            q  =  C  x  delta T              (heat capacity of an object)
            q  =  n  x  Cm x  delta T        (moles and molar Cp or Cv)
  TRAP      delta T is the same number in kelvin and in degC, so no
            conversion is needed for a DIFFERENCE - but any ABSOLUTE
            temperature must be in kelvin.
```

```
  PATTERN 15 — CALORIMETRY: FIND delta U OR delta H                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "bomb calorimeter" or "coffee-cup / polystyrene calorimeter"
  METHOD    BOMB (rigid, constant V)  ->  gives delta U
                q = - C(cal) x delta T ;  delta U = q / moles

            COFFEE CUP (open, constant p) -> gives delta H
                q = m s delta T ;  delta H = - q / moles of limiting
                                              reactant
            Steps: (1) find q,  (2) put the MINUS sign in (heat gained by
            the water was lost by the reaction),  (3) divide by MOLES.
  TRAP      Forgetting to divide by the number of moles - the answer must
            be per mole. And forgetting the sign flip.
```

```
  PATTERN 16 — DEFINE A TYPE OF ENTHALPY CHANGE                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define the enthalpy of combustion / formation /
            neutralisation / atomisation / sublimation / solution."
  METHOD    Every definition needs THREE things:
              (1) the words "ONE MOLE"
              (2) the exact condition (from its elements / in excess
                  oxygen / in dilute solution / into gaseous atoms)
              (3) an EXAMPLE equation with a value.
  TRAP      Leaving out "one mole" costs half the mark every time.
            Also remember: delta H(f) of an ELEMENT in its standard state
            is ZERO.
```

```
  PATTERN 17 — HESS'S LAW NUMERICAL                                4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two or three thermochemical equations given, one unknown
            delta H asked.
  METHOD    1. WRITE THE TARGET EQUATION FIRST.
              2. For each given equation ask: does the species I need sit
                 on the correct side?
                    wrong side  -> REVERSE it and FLIP the sign
                    wrong count -> MULTIPLY it and multiply delta H
              3. ADD the adjusted equations. Everything unwanted must
                 cancel.
              4. Add the adjusted delta H values.
  TRAP      Forgetting to change the sign when reversing, or forgetting to
            multiply delta H when you multiply the equation.
            SELF-CHECK: if the leftovers do not cancel, your setup is wrong.
```

```
  PATTERN 18 — delta H FROM FORMATION ENTHALPIES                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   A table of delta H(f) values is supplied.
  METHOD    delta H = SUM[ n x dHf(PRODUCTS) ] - SUM[ n x dHf(REACTANTS) ]
            "PRODUCTS minus REACTANTS"
            Multiply each dHf by its coefficient. Elements contribute 0.
  TRAP      Forgetting the coefficient (2 H2O means 2 x dHf).
            Reversing the order and getting the sign wrong - a combustion
            answer MUST come out negative.
```

```
  PATTERN 19 — delta H FROM BOND ENTHALPIES                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   A table of BOND enthalpies (C-H, O=O, N==N ...) is supplied.
  METHOD    delta H = SUM(bonds BROKEN) - SUM(bonds FORMED)
            "REACTANTS minus PRODUCTS"
            1. Count every bond in the reactants that actually breaks.
              2. Count every bond formed in the products.
              3. Subtract.
  TRAP      *** THIS IS THE OPPOSITE WAY ROUND TO PATTERN 18. ***
            Also: in substitution reactions only SOME bonds break. In
            CH4 + Cl2 -> CH3Cl + HCl only ONE C-H bond breaks, not four.
            Bond enthalpy calculations are valid only for GASES.
```

```
  PATTERN 20 — BORN-HABER CYCLE                              4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Calculate the lattice enthalpy of NaCl from the following
            data" / "Explain the Born-Haber cycle."
  METHOD    Draw the ladder:
              metal solid -> metal gas          (sublimation, +)
              metal gas -> metal ion            (ionisation, +)
              1/2 X2 -> X atom                  (half bond energy, +)
              X atom -> X- ion                  (electron gain, -)
              ions -> ionic solid               (lattice enthalpy, -)
            Then     dHf = S + IE + D/2 + EA + U
            and rearrange for whichever term is missing.
  TRAP      Using the FULL bond dissociation energy of Cl2 instead of HALF
            of it. And getting the sign of the electron gain enthalpy
            wrong (it is negative).
```

```
  PATTERN 21 — PREDICT THE SIGN OF delta S                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Predict whether delta S is positive or negative for ..."
  METHOD    1. COUNT MOLES OF GAS on each side.
                 gas moles INCREASE  ->  delta S POSITIVE
                 gas moles DECREASE  ->  delta S NEGATIVE
              2. If no gases change, use  S(gas) > S(liquid) > S(solid).
              3. Dissolving a solid, mixing, and heating all raise S.
  TRAP      Ignoring solids and liquids is CORRECT for counting, but if
            there are no gases at all you must reason from the phases.
```

```
  PATTERN 22 — ENTROPY OF A PHASE CHANGE                      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "enthalpy of fusion is ... at its melting point" or
            "enthalpy of vaporisation is ... at its boiling point".
  METHOD    delta S  =  delta H  /  T
              melting -> use the melting point in KELVIN
              boiling -> use the boiling point in KELVIN
  TRAP      delta H is given in kJ but the answer must be in J/K/mol.
            MULTIPLY BY 1000 FIRST. And the temperature MUST be in kelvin.
```

```
  PATTERN 23 — STATE A LAW                                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the first / second / third law of thermodynamics."
  METHOD    FIRST : Energy can neither be created nor destroyed, only
                    converted from one form to another. The total energy
                    of an isolated system is constant.   delta U = q + w
            SECOND: The entropy of the universe increases in every
                    spontaneous process.   delta S(total) > 0
                    (or) Heat cannot flow by itself from a cold body to a
                    hot body.
            THIRD : The entropy of a perfectly crystalline substance is
                    zero at absolute zero (0 K).
  TRAP      Write the FORMULA along with the words. It is often half the
            mark.
```

```
  PATTERN 24 — LIMITATIONS OF THE FIRST LAW                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is the first law inadequate?" / "What is the need for the
            second law?"
  METHOD    1. It gives no DIRECTION - heat flowing cold to hot would also
                 conserve energy, yet never happens.
              2. It gives no criterion of SPONTANEITY.
              3. It does not say why heat cannot be fully converted to work.
              4. Exothermicity is not a valid criterion either - melting
                 ice, evaporating water and dissolving NH4Cl are
                 ENDOTHERMIC yet spontaneous.
            Then introduce entropy and dS(total) > 0.
  TRAP      Give at least one ENDOTHERMIC SPONTANEOUS example. Without it
            the answer is incomplete.
```

```
  PATTERN 25 — GIBBS ENERGY NUMERICAL                         2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   delta H and delta S are both given; "is it spontaneous?"
  METHOD    1. CONVERT UNITS. delta H in kJ, delta S in J/K -> make both
                 the same (usually convert everything to joules).
              2. delta G = delta H - T delta S   (T in kelvin!)
              3. Conclude:  dG < 0 spontaneous, dG = 0 equilibrium,
                            dG > 0 non-spontaneous.
  TRAP      *** THE UNIT MISMATCH. *** delta H is in kJ/mol and delta S in
            J/K/mol. This single slip destroys more marks than anything
            else in the chapter.
            Also: when delta S is negative, "- T delta S" ADDS a positive
            number. Watch the double minus.
```

```
  PATTERN 26 — TEMPERATURE OF SPONTANEITY                     2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Above/below what temperature does the reaction become
            spontaneous?" or "At what temperature is it at equilibrium?"
  METHOD    Set delta G = 0:

                    T  =  delta H  /  delta S

            Then decide the direction from the signs:
                dH +ve, dS +ve  ->  spontaneous ABOVE that T
                dH -ve, dS -ve  ->  spontaneous BELOW that T
  TRAP      Units again - kJ over J/K gives an answer 1000 times too big.
            And you must state ABOVE or BELOW, not just the number.
```

```
  PATTERN 27 — THE FOUR SIGN CASES                            4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Discuss the effect of the signs of delta H and delta S on
            spontaneity."
  METHOD    Draw the four-row table:
                 dH -ve , dS +ve  ->  spontaneous at ALL temperatures
                 dH +ve , dS -ve  ->  NEVER spontaneous
                 dH -ve , dS -ve  ->  spontaneous at LOW temperature
                 dH +ve , dS +ve  ->  spontaneous at HIGH temperature
            Give ONE example per row and state T = dH/dS as the changeover.
  TRAP      Mixing up rows 3 and 4. Reason it out instead of memorising:
            T delta S must be big enough (or small enough) to flip the sign.
```

```
  PATTERN 28 — delta G AND THE EQUILIBRIUM CONSTANT           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   K is given and delta G asked, or the reverse.
  METHOD    delta G(standard)  =  - 2.303 R T log K

            To find delta G: compute log K, multiply by -2.303RT.
            To find K:  log K = - delta G / (2.303 R T) , then antilog.
            At 298 K:   2.303 R T = 5705 J = 5.705 kJ
  TRAP      Dropping the MINUS sign. Always sanity-check:
                delta G negative  <=>  K > 1
                delta G positive  <=>  K < 1
            If your two answers disagree, you dropped the minus.
```

```
  PATTERN 29 — SPONTANEITY THEORY QUESTION                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a spontaneous process?" / "Give examples."
  METHOD    "A process that occurs on its own, without external help, once
            initiated."  Add: it says NOTHING about speed - rusting is
            spontaneous but slow.
            Examples: heat hot -> cold, water downhill, gas filling a
            container, sugar dissolving, iron rusting.
  TRAP      Writing "spontaneous means fast". It does not.
```

```
  PATTERN 30 — THIRD LAW AND ABSOLUTE ENTROPY                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the third law" / "Why can absolute entropy be measured
            but not absolute enthalpy?"
  METHOD    Third law: S = 0 for a perfectly crystalline substance at 0 K,
            because there is only ONE possible arrangement, so no
            randomness.
            Consequence: it fixes a true zero, so ABSOLUTE entropies can
            be calculated - unlike U and H, where only CHANGES can be
            measured.
  TRAP      Saying entropy is zero for ANY substance at 0 K. It must be a
            PERFECT CRYSTAL.
```

---

# ===============================================================
# SELF-TEST — can you name the pattern in 5 seconds?
# ===============================================================

```
  +----------------------------------------------------+-------------+
  |  QUESTION STEM                                     |  PATTERN #  |
  +----------------------------------------------------+-------------+
  |  "expands against a constant pressure of 2 atm"    |      7      |
  |  "expands reversibly and isothermally at 300 K"    |      8      |
  |  "expands into a vacuum"                           |      9      |
  |  "a thermos flask containing hot coffee"           |      1      |
  |  "which of these is an intensive property"         |      2      |
  |  "which is NOT a state function"                   |      3      |
  |  "define an adiabatic process"                     |      4      |
  |  "distinguish reversible and irreversible"         |      5      |
  |  "absorbs 500 J and does 200 J of work"            |      6      |
  |  "derive the work in a reversible isothermal ..."  |     10      |
  |  "heat of combustion at constant volume is ..."    |     11      |
  |  "for which reaction is delta H = delta U"         |     12      |
  |  "show that Cp - Cv = R"                           |     13      |
  |  "heat needed to warm 100 g of water by 50 K"      |     14      |
  |  "in a bomb calorimeter the temperature rose ..."  |     15      |
  |  "define the enthalpy of neutralisation"           |     16      |
  |  "given two equations, find delta H of the third"  |     17      |
  |  "delta H(f) values are given in the table"        |     18      |
  |  "bond enthalpies C-H = 414, Cl-Cl = 243 ..."      |     19      |
  |  "calculate the lattice enthalpy of NaCl"          |     20      |
  |  "predict the sign of delta S"                     |     21      |
  |  "enthalpy of fusion of ice is 6.0 kJ/mol"         |     22      |
  |  "state the second law of thermodynamics"          |     23      |
  |  "why is the first law inadequate"                 |     24      |
  |  "delta H = 30 kJ and delta S = 100 J/K, is it ..."|     25      |
  |  "above what temperature is it spontaneous"        |     26      |
  |  "discuss the effect of the signs of dH and dS"    |     27      |
  |  "K = 10 at 298 K, find delta G"                   |     28      |
  |  "what is a spontaneous process"                   |     29      |
  |  "entropy of a perfect crystal at 0 K"             |     30      |
  +----------------------------------------------------+-------------+
```

---

# ===============================================================
# GUARANTEED-MARKS PLAN FOR THIS CHAPTER
# ===============================================================

```
  TIER 1 - DO THESE FIRST. Pure memory, no calculation, ~6 marks.
  ------------------------------------------------------------------
     Pattern 1   types of system with examples
     Pattern 2   extensive vs intensive
     Pattern 3   state vs path function
     Pattern 4   the five process definitions
     Pattern 23  statements of the three laws
     Pattern 16  the enthalpy-change definitions
     Pattern 29  what "spontaneous" means

     These need ONE evening of copying by hand. They are the highest
     marks-per-minute in the entire chapter.

  TIER 2 - THE SHORT NUMERICALS. Fixed steps, ~8 marks.
  ------------------------------------------------------------------
     Pattern 6   first-law sign sums
     Pattern 7   w = -p(ext) delta V
     Pattern 11  delta H = delta U + delta n(g) R T     <- ASKED MOST
     Pattern 17  Hess's law
     Pattern 21  sign of delta S
     Pattern 22  delta S of a phase change
     Pattern 25  delta G = delta H - T delta S
     Pattern 28  delta G = -2.303 R T log K

     Do FIVE of each. After five, the pattern is automatic.

  TIER 3 - THE DERIVATIONS AND LONG ANSWERS, ~8 marks.
  ------------------------------------------------------------------
     Pattern 10  derive w = -2.303 nRT log(V2/V1)
     Pattern 13  derive Cp - Cv = R
     Pattern 15  the two calorimeters
     Pattern 18  delta H from formation enthalpies
     Pattern 19  delta H from bond enthalpies
     Pattern 20  Born-Haber cycle
     Pattern 27  the four sign cases

     Both derivations are SHORT (five lines each) and both repeat
     regularly. Learn them - they are the cheapest 4 marks available.

  ------------------------------------------------------------------
  THE THREE THINGS THAT LOSE THE MOST MARKS IN THIS CHAPTER

     1. THE SIGN of w. Expansion is NEGATIVE. Always.
     2. THE UNITS in delta G = delta H - T delta S.
        delta H is kJ, delta S is J/K. Convert before subtracting.
     3. COUNTING LIQUIDS AND SOLIDS in delta n(g). Count GASES ONLY.

     Fix those three and this chapter becomes one of the easiest in the
     whole syllabus.
  ------------------------------------------------------------------
```
