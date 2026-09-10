# Chemical Equilibrium and Acids-Bases — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — WRITE THE Kc / Kp EXPRESSION                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the equilibrium constant expression for ..."
  METHOD    1. Products go on TOP, reactants at the BOTTOM.
            2. Each concentration is raised to its BALANCING NUMBER.
            3. Kc uses [ ] , Kp uses p( ).
            4. DELETE every pure SOLID and pure LIQUID.

                        [C]^c [D]^d              p(C)^c p(D)^d
              Kc  =  ---------------     Kp  =  ---------------
                        [A]^a [B]^b              p(A)^a p(B)^b

  TRAP      For CaCO3(s) <==> CaO(s) + CO2(g) the answer is just
            Kc = [CO2]. Students who include the solids lose the mark.
```

```
  PATTERN 2 — FIND dn AND CONVERT Kp <-> Kc                    2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Kp is given and Kc is asked (or the reverse), or "find dn".
  METHOD    1. dn = (moles of GASEOUS products)
                    - (moles of GASEOUS reactants)
            2. Kp = Kc (RT)^dn        Kc = Kp / (RT)^dn
            3. Use R = 0.0821 L atm K^-1 mol^-1 with T in KELVIN.
            4. Compute RT first, then raise it to the power dn.

  TRAP      COUNT GASES ONLY. In CaCO3(s) <==> CaO(s) + CO2(g), dn = +1.
            Also: T must be in kelvin. 27 C means 300 K.
  CHECK     dn negative -> Kp must come out SMALLER than Kc.
```

```
  PATTERN 3 — UNITS OF K                                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What are the units of Kc / Kp for ...?"
  METHOD    Units of Kc = ( mol L^-1 ) ^ dn
            Units of Kp = ( atm ) ^ dn
            dn = 0  ->  DIMENSIONLESS, no units.

            N2 + 3H2 <==> 2NH3   dn = -2  ->  L^2 mol^-2  and  atm^-2
            N2O4 <==> 2NO2       dn = +1  ->  mol L^-1    and  atm

  TRAP      A negative dn gives INVERTED units (L^2 mol^-2, not mol^2 L^-2).
```

```
  PATTERN 4 — MANIPULATING K (reverse / multiply / add)           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If K for this reaction is ..., what is K for ...?"
  METHOD    Reaction REVERSED           ->   1 / K
            Equation MULTIPLIED by n    ->   K ^ n
            Equation DIVIDED by 2       ->   sqrt ( K )
            Two reactions ADDED         ->   K1  x  K2
            One reaction SUBTRACTED     ->   K1  /  K2

  TRAP      "Doubled" means SQUARED, not multiplied by 2.
```

```
  PATTERN 5 — Kc FROM AN ICE TABLE                                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "x moles of ... are heated in a V litre vessel; at equilibrium
            y moles of ... are present. Calculate Kc."
  METHOD    1. Write the balanced equation.
            2. Three rows:  INITIAL / CHANGE / EQUILIBRIUM (in MOLES).
            3. Let the change be x, multiplied by each coefficient.
            4. Use the given data to solve for x.
            5. *** DIVIDE EVERY MOLE VALUE BY THE VOLUME ***
            6. Substitute into Kc and state the UNITS.

  TRAP      Forgetting step 5 when the volume is NOT 1 litre. This is
            the single most common 4-mark loss in the chapter.
  CHECK     Put your answer back into the Kc expression.
```

```
  PATTERN 6 — EQUILIBRIUM CONCENTRATIONS FROM A GIVEN K           4 marks
  ------------------------------------------------------------------------
  TRIGGER   K is given and you are asked for the equilibrium
            concentration of a species.
  METHOD    1. ICE table with x as the unknown change.
            2. Substitute into K and solve for x.
            3. If BOTH sides are perfect squares, take the SQUARE ROOT
               of the whole equation instead of forming a quadratic:

                     (2x)^2                     2x
                   ----------- = 64   ->     ------- = 8
                    (2 - x)^2                 2 - x

            4. Reject any root that gives a NEGATIVE concentration.

  TRAP      Both roots of a quadratic are mathematically valid but only
            one is chemically possible. Concentrations cannot be negative
            and cannot exceed the initial amount.
```

```
  PATTERN 7 — DEGREE OF DISSOCIATION                          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   The words "% dissociated", "degree of dissociation", "alpha".
  METHOD                moles dissociated
            alpha  =  --------------------      % = alpha x 100
                       moles taken initially

            For A <==> 2B (like N2O4 <==> 2NO2):

                     4 alpha^2 P                4 C alpha^2
              Kp = --------------      Kc  =  ---------------
                     1 - alpha^2                 1 - alpha

            For A <==> B + C (like PCl5):

                       alpha^2 P                  C alpha^2
              Kp = ----------------      Kc  =  --------------
                      1 - alpha^2                 1 - alpha

            FROM VAPOUR DENSITY:   alpha = ( D - d ) / ( d ( n - 1 ) )

  TRAP      Kp uses (1 - alpha^2); Kc uses (1 - alpha). They are NOT the
            same because the total number of moles changes.
```

```
  PATTERN 8 — Q VERSUS K, PREDICT THE DIRECTION               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   A set of concentrations is given AND K is given, then
            "in which direction will the reaction proceed?"
  METHOD    1. Put the given concentrations into the SAME expression as K.
               Call the answer Q.
            2. Compare:
                  Q < K   ->  FORWARD  (more products form)
                  Q = K   ->  already at equilibrium
                  Q > K   ->  BACKWARD (products decompose)

  TRAP      Q uses whatever concentrations you are given; it is NOT the
            equilibrium value. Do not build an ICE table for this.
  MEMORY    The system always moves so that Q turns into K.
```

```
  PATTERN 9 — delta G AND K                                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Calculate delta G(standard) given K" or the reverse.
  METHOD    delta G(std) = - R T ln K = - 2.303 R T log K
            R = 8.314 J K^-1 mol^-1 , T in KELVIN.
            Answer comes out in JOULES per mole; divide by 1000 for kJ.

            Reverse direction:   K = e ^ ( - dG / RT )

  TRAP      Using R = 0.0821 here. That constant is for gas-law work only.
  CHECK     K > 1 must give a NEGATIVE dG. K < 1 must give a POSITIVE dG.
            If the signs disagree, you have made an arithmetic slip.
```

```
  PATTERN 10 — LE CHATELIER: WHICH WAY DOES IT SHIFT?         2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the effect of ... on the equilibrium ...?"
  METHOD    ADD a substance      -> shifts AWAY from it
            REMOVE a substance   -> shifts TOWARDS it
            INCREASE pressure    -> towards FEWER gas moles
            DECREASE pressure    -> towards MORE gas moles
            INCREASE temperature -> in the ENDOTHERMIC direction
            DECREASE temperature -> in the EXOTHERMIC direction
            CATALYST             -> NO SHIFT
            INERT GAS, const V   -> NO SHIFT
            INERT GAS, const P   -> towards MORE gas moles

  TRAP      Always add "and K remains unchanged" UNLESS the change was
            TEMPERATURE. Temperature is the only thing that changes K.
  BONUS     Say WHY, not just which way. "Because the system nullifies
            the disturbance" is worth a mark on its own.
```

```
  PATTERN 11 — LE CHATELIER APPLIED TO AN INDUSTRIAL PROCESS      8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Discuss the conditions for the manufacture of ammonia /
            sulphuric acid using Le Chatelier's principle."
  METHOD    1. STATE the principle (1 mark).
            2. WRITE the equation with dH and count the moles each side.
            3. PRESSURE  - which side has fewer moles? -> high P.
            4. TEMPERATURE - exothermic? -> low T IN THEORY, but too
               slow, so a COMPROMISE temperature is used in practice.
            5. CATALYST  - name it, and say it changes SPEED not YIELD.
            6. REMOVAL of product / EXCESS of a cheap reactant.
            7. Give the actual industrial numbers.

               HABER    N2 + 3H2 <==> 2NH3 , dH = -92.4 kJ , dn = -2
                        200-300 atm , 673-773 K , Fe + Mo promoter
               CONTACT  2SO2 + O2 <==> 2SO3 , dH = -196 kJ , dn = -1
                        1-2 atm , ~723 K , V2O5

  TRAP      Do not say "low temperature is used". Say a MODERATE
            temperature is used as a compromise between YIELD and RATE.
```

```
  PATTERN 12 — CHARACTERISTICS / MAGNITUDE OF K               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the characteristics of K" or "What does a large value
            of K indicate?"
  METHOD    CHARACTERISTICS: depends only on temperature ; reversing
            gives 1/K ; multiplying by n gives K^n ; adding reactions
            multiplies K ; a catalyst does not change it.

            MAGNITUDE:  K > 10^3    -> products dominate, nearly complete
                        10^-3 to 10^3 -> both present in comparable
                                         amounts
                        K < 10^-3   -> reactants dominate, hardly proceeds

  TRAP      K tells you the EXTENT of a reaction, never the SPEED. A
            reaction with a huge K can still be extremely slow.
```

```
  PATTERN 13 — PHYSICAL EQUILIBRIUM AND ITS CHARACTERISTICS   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Give examples of physical equilibrium" or "State the
            characteristics of equilibrium".
  METHOD    FOUR EXAMPLES:
              solid <==> liquid       ice/water at 273 K
              liquid <==> vapour      constant vapour pressure
              solid <==> solution     saturated solution / solubility
              gas <==> solution       Henry's law , soda bottle
            SIX CHARACTERISTICS:
              closed system ; dynamic ; observable properties constant ;
              reachable from either side ; catalyst does not shift it ;
              delta G = 0 at equilibrium.

  TRAP      "Dynamic" must be explained, not just stated: BOTH reactions
            continue at EQUAL rates. And equilibrium needs a CLOSED
            system - say so.
```

```
  PATTERN 14 — CONJUGATE ACID-BASE PAIRS                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the conjugate acid / conjugate base of ..." or
            "Identify the conjugate pairs in this reaction."
  METHOD    CONJUGATE ACID  =  the species  +  one H+
            CONJUGATE BASE  =  the species  -  one H+
            A pair always differs by EXACTLY ONE proton.
            Adjust the CHARGE by +1 or -1 as you add or remove H+.

               H2O -> OH- (base) or H3O+ (acid)
               HCO3- -> CO3 2- (base) or H2CO3 (acid)

  TRAP      Getting the charge wrong. Removing H+ makes the charge go
            DOWN by one:  HSO4-  ->  SO4 2-  , not SO4-.
  BONUS     "Stronger the acid, weaker its conjugate base" often earns
            an extra mark.
```

```
  PATTERN 15 — IDENTIFY / EXPLAIN LEWIS ACIDS AND BASES       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Which of these is a Lewis acid?" or "Explain the Lewis
            concept with examples."
  METHOD    LEWIS ACID  = electron pair ACCEPTOR
                incomplete octet  BF3 , AlCl3 , BeCl2
                all cations       H+ , Ag+ , Fe3+
                expandable octet  SiF4 , PF5
                multiple bonds    CO2 , SO2 , SO3
            LEWIS BASE  = electron pair DONOR
                all anions        OH- , CN- , Cl-
                lone pairs        NH3 , H2O , R-OH , CO
                pi systems        ethene , benzene

  TRAP      NH3 is a BASE, never an acid. Any species with a lone pair
            offered to another is the DONOR.
  BONUS     Always add the limitation: "Lewis theory does not explain
            relative strengths, and protonic acids like HCl are not
            electron pair acceptors."
```

```
  PATTERN 16 — COMPARE THE THREE ACID-BASE CONCEPTS               8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the Arrhenius, Bronsted-Lowry and Lewis concepts."
  METHOD    For EACH concept give: DEFINITION -> EXAMPLE with an
            equation -> LIMITATIONS.
            Arrhenius: H+ / OH- in water ; fails for NH3, AlCl3,
                       non-aqueous solvents.
            Bronsted : proton donor / acceptor ; conjugate pairs ;
                       amphoteric water ; fails when no proton moves.
            Lewis    : electron pair acceptor / donor ; coordinate bond ;
                       does not explain strengths.
            Finish with a comparison TABLE and the scope statement:
            Arrhenius is a subset of Bronsted, which is a subset of Lewis.

  TRAP      Limitations are worth roughly a third of the marks. Students
            who write only the definitions cap themselves at 5 out of 8.
```

```
  PATTERN 17 — pH OF A STRONG ACID OR STRONG BASE                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Calculate the pH of x M HCl / NaOH ..."
  METHOD    STRONG ACID:   [H+] = C  ->  pH = - log C
            STRONG BASE:   [OH-] = C ->  pOH = - log C ->  pH = 14 - pOH
            MULTIPLY BY 2 for  H2SO4 , Ca(OH)2 , Ba(OH)2.
            Use  - log ( a x 10^-n )  =  n  -  log a

  TRAP      1. Never take -log of a BASE concentration and call it pH.
            2. Ca(OH)2 gives TWO OH- ions.
            3. -log(2 x 10^-3) = 2.70 , NOT 3.30.
  CHECK     Acid -> pH must be below 7. Base -> pH must be above 7.
```

```
  PATTERN 18 — pH OF A WEAK ACID OR WEAK BASE                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   A concentration is given TOGETHER WITH Ka or Kb.
  METHOD    WEAK ACID:  [H+]  = sqrt ( Ka  x  C )   ->  pH = - log [H+]
            WEAK BASE:  [OH-] = sqrt ( Kb  x  C )   ->  pOH -> pH
            Alternative:  pH = (1/2)( pKa - log C )

            Make the power of 10 EVEN before taking the square root:
                sqrt( 1.8 x 10^-7 ) = sqrt( 18 x 10^-8 ) = 4.24 x 10^-4

  TRAP      Using [H+] = C for a weak acid. A weak acid is NOT fully
            ionised - the pH is always HIGHER than for a strong acid of
            the same concentration.
  CHECK     0.01 M HCl gives pH 2 ; 0.01 M acetic acid gives pH 3.37.
            If your weak-acid answer is lower than the strong-acid one,
            it is wrong.
```

```
  PATTERN 19 — OSTWALD'S DILUTION LAW / DEGREE OF IONISATION      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "% ionised", "degree of ionisation", "state and derive
            Ostwald's dilution law".
  METHOD    DERIVATION: ICE table on HA <==> H+ + A- with C and alpha:

                       C alpha^2
                Ka = -------------   ->  Ka = C alpha^2  when alpha << 1
                       1 - alpha

                alpha = sqrt ( Ka / C ) = sqrt ( Ka V )

            NUMERICAL both ways:
                given alpha, find Ka  ->  Ka = C alpha^2
                given Ka, find alpha  ->  alpha = sqrt ( Ka / C )

  TRAP      Convert a PERCENTAGE to a fraction first: 5 % is 0.05.
  BONUS     State the limitation - it fails for STRONG electrolytes.
```

```
  PATTERN 20 — COMMON ION EFFECT (theory)                     2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the common ion effect?" or "Explain why H2S is
            passed in acidic medium."
  METHOD    1. Definition: suppression of the ionisation of a WEAK
               electrolyte by a STRONG electrolyte having a COMMON ION.
            2. Explain with Le Chatelier: the added ion pushes the
               ionisation equilibrium BACKWARD.
            3. Give an example equation.
            4. Mention a use: buffers, qualitative analysis, salting out.

  TRAP      Say clearly that Ka (or Ksp) does NOT change - only the
            POSITION of the equilibrium moves.
```

```
  PATTERN 21 — BUFFER pH (HENDERSON EQUATION)                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   A WEAK acid together with its SALT (or a weak base with its
            salt), and pH is asked.
  METHOD    ACIDIC:  pH  = pKa + log ( [salt] / [acid] )
            BASIC :  pOH = pKb + log ( [salt] / [base] ) , pH = 14 - pOH
            1. Convert Ka to pKa  ( pKa = - log Ka ).
            2. Substitute the ratio. Concentrations may be left in moles
               if the volume is the same for both.
            3. log of a number less than 1 is NEGATIVE.

  TRAP      1. For a BASIC buffer the equation gives pOH, not pH.
            2. If "strong base added to excess weak acid" is described,
               the base CONVERTS acid into salt - work out the new
               amounts BEFORE using Henderson.
  SHORTCUT  Half-neutralised weak acid  ->  [salt] = [acid]  ->  pH = pKa.
```

```
  PATTERN 22 — BUFFER THEORY / BUFFER ACTION                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a buffer? Explain buffer action."
  METHOD    1. Definition: resists a change in pH on adding a small
               amount of a strong acid or base.
            2. Two types with examples:
                  acidic  CH3COOH + CH3COONa   (pH ~ 4.74)
                  basic   NH4OH   + NH4Cl      (pH ~ 9.26)
            3. Show BOTH mopping-up equations:
                  CH3COO- + H+  -->  CH3COOH
                  CH3COOH + OH- -->  CH3COO- + H2O
            4. Quote the Henderson equation.
            5. Mention blood (H2CO3 / HCO3-, pH 7.4) for the extra mark.

  TRAP      HCl + NaCl is NOT a buffer. A buffer needs a WEAK acid or
            base plus its salt.
```

```
  PATTERN 23 — SALT HYDROLYSIS: NATURE OF THE SOLUTION            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Is the aqueous solution of ... acidic, basic or neutral?"
  METHOD    1. Split the salt into its parent ACID and parent BASE.
            2. THE STRONGER PARENT WINS.
                  strong + strong  ->  NEUTRAL   (NaCl, KNO3)
                  weak acid + strong base -> BASIC    (CH3COONa, Na2CO3)
                  strong acid + weak base -> ACIDIC   (NH4Cl, CuSO4,
                                                       AlCl3)
                  weak + weak -> compare Ka and Kb
            3. Write the hydrolysis equation to justify it.

  TRAP      Know which parents are strong. Only HCl, HBr, HI, HNO3,
            H2SO4, HClO4 are strong acids; only the alkali and heavier
            alkaline-earth hydroxides are strong bases.
```

```
  PATTERN 24 — HYDROLYSIS pH AND Kh NUMERICAL                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   The pH of a SALT solution is asked, with Ka or Kb given.
  METHOD    weak acid + strong base:  Kh = Kw/Ka
                     pH = 7 + (1/2)pKa + (1/2) log C
            strong acid + weak base:  Kh = Kw/Kb
                     pH = 7 - (1/2)pKb - (1/2) log C
            weak acid + weak base:    Kh = Kw/(Ka Kb)
                     pH = 7 + (1/2)( pKa - pKb )
            Degree of hydrolysis  h = sqrt ( Kh / C )

  TRAP      log C is NEGATIVE for C < 1, so watch the signs carefully.
            For C = 0.1, (1/2)log C = -0.5.
  CHECK     A weak-acid salt MUST come out above 7; a weak-base salt
            MUST come out below 7. If not, you flipped a sign.
```

```
  PATTERN 25 — SOLUBILITY <-> SOLUBILITY PRODUCT              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Ksp is given and s is asked, or the reverse.
  METHOD    1. Write the dissociation and label each ion with s, 2s ...
            2. Use the correct relation:
                  AB   (AgCl, BaSO4)      Ksp = s^2      s = sqrt(Ksp)
                  AB2  (PbCl2, CaF2)      Ksp = 4 s^3    s = (Ksp/4)^(1/3)
                  A2B  (Ag2CrO4)          Ksp = 4 s^3    s = (Ksp/4)^(1/3)
                  AB3  (Fe(OH)3)          Ksp = 27 s^4
                  A3B2 (Ca3(PO4)2)        Ksp = 108 s^5
            3. Make the power of 10 divisible by 2 (square root) or by
               3 (cube root) before extracting the root.

  TRAP      If solubility is given in GRAMS PER LITRE, divide by the
            MOLAR MASS first. Ksp always uses mol/L.
  CHECK     Substitute s back into Ksp.
```

```
  PATTERN 26 — WILL A PRECIPITATE FORM?                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two solutions are MIXED and you are asked whether a
            precipitate appears.
  METHOD    1. If EQUAL volumes are mixed, HALVE both concentrations.
               (For unequal volumes use  C1V1 / (V1 + V2).)
            2. Compute the IONIC PRODUCT Qsp with those values.
            3. Compare:  Qsp > Ksp -> PRECIPITATE
                         Qsp = Ksp -> just saturated
                         Qsp < Ksp -> no precipitate
            4. State the conclusion in words.

  TRAP      Forgetting to dilute on mixing. Also remember the powers:
            for Ag2CrO4, Qsp = [Ag+]^2 [CrO4 2-].
```

```
  PATTERN 27 — SOLUBILITY IN THE PRESENCE OF A COMMON ION         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Calculate the solubility of AgCl in 0.1 M NaCl."
  METHOD    1. The common ion concentration comes almost entirely from
               the strong electrolyte; the salt's own contribution is
               negligible.
            2. For AB:   s  =  Ksp / [ common ion ]
            3. Compare with the solubility in pure water and comment
               that it has DECREASED.

  TRAP      Count how many common ions the added salt gives.
            CaCl2 gives TWO Cl-, so [Cl-] = 2 x its concentration.
  CHECK     The new solubility must be MUCH SMALLER than in pure water.
```

```
  PATTERN 28 — COMPARE THE SOLUBILITIES OF TWO SALTS           objective
  ------------------------------------------------------------------------
  TRIGGER   Two Ksp values given, "which is more soluble?"
  METHOD    SAME type (both AB)  ->  bigger Ksp = more soluble. Compare
                                     directly.
            DIFFERENT types      ->  you MUST convert each Ksp to s
                                     before comparing.
  TRAP      AgCl (Ksp 1.8 x 10^-10) is LESS soluble than Ag2CrO4
            (Ksp 1.1 x 10^-12), even though its Ksp is larger, because
            they are different types. This is a favourite trick.
```

```
  PATTERN 29 — Kw, TEMPERATURE AND NEUTRALITY                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define Kw", "What is the pH of pure water at 100 C?",
            "Why does Kw increase with temperature?"
  METHOD    Kw = [H+][OH-] = 1.0 x 10^-14 at 25 C.
            Ionisation of water is ENDOTHERMIC, so by Le Chatelier
            heating shifts it forward and Kw INCREASES.
            Higher Kw -> higher [H+] -> lower neutral pH.
            At 100 C, Kw = 51.3 x 10^-14 and the neutral pH is 6.14.

  TRAP      Water at 100 C with pH 6.14 is still NEUTRAL, because
            [H+] = [OH-]. Neutral means [H+] = [OH-], not "pH = 7".
```

```
  PATTERN 30 — pH OF A MIXTURE OF A STRONG ACID AND STRONG BASE   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "x mL of a M HCl is mixed with y mL of b M NaOH. Find the pH."
  METHOD    1. moles of H+  = a x (x/1000)
               moles of OH- = b x (y/1000)
            2. Subtract to find which is in EXCESS.
            3. Divide the excess moles by the TOTAL VOLUME in litres.
            4. If H+ is in excess -> pH = -log[H+].
               If OH- is in excess -> pOH first, then pH = 14 - pOH.
               If they are exactly equal -> pH = 7.

  TRAP      Using the original volume instead of the TOTAL volume in
            step 3. Also remember H2SO4 supplies 2 H+ per molecule.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

| Question stem | Pattern |
|---|---|
| "Write the expression for Kp of `CaCO3(s) <==> CaO(s) + CO2(g)`" | 1 |
| "Kc = 0.061 at 500 K, calculate Kp" | 2 |
| "What are the units of Kp for `2SO2 + O2 <==> 2SO3`?" | 3 |
| "If K = 9 for the forward reaction, K for the reverse is ..." | 4 |
| "2 mol of PCl5 in a 5 L vessel; 0.8 mol dissociates. Find Kc" | 5 |
| "Kc = 64. Starting with 2 M each, find [HI] at equilibrium" | 6 |
| "N2O4 is 20 % dissociated at 1 atm. Calculate Kp" | 7 |
| "Kc = 50 and Q = 80. Which way does it go?" | 8 |
| "K = 10 at 300 K. Find delta G" | 9 |
| "What happens if the pressure is doubled?" | 10 |
| "Discuss the conditions of the Haber process" | 11 |
| "What does K = 4.8 x 10^-31 tell you?" | 12 |
| "Give examples of physical equilibrium" | 13 |
| "Write the conjugate base of `HSO4-`" | 14 |
| "Which of these is a Lewis acid?" | 15 |
| "Explain the Arrhenius, Bronsted and Lewis theories" | 16 |
| "Find the pH of 0.005 M Ca(OH)2" | 17 |
| "pH of 0.01 M acetic acid, Ka = 1.8 x 10^-5" | 18 |
| "A 0.1 M weak acid is 1.34 % ionised. Find Ka" | 19 |
| "Why is H2S passed in acidic medium?" | 20 |
| "0.2 M CH3COOH + 0.1 M CH3COONa. Find the pH" | 21 |
| "What is a buffer? How does it work?" | 22 |
| "Is `Na2CO3` solution acidic or basic?" | 23 |
| "Find the pH of 0.1 M `NH4Cl`, Kb = 1.8 x 10^-5" | 24 |
| "Ksp of `Ag2CrO4` is 1.1 x 10^-12. Find its solubility" | 25 |
| "Equal volumes of 0.02 M `AgNO3` and 0.02 M `NaCl` are mixed" | 26 |
| "Find the solubility of AgCl in 0.1 M NaCl" | 27 |
| "AgCl or `Ag2CrO4` — which is more soluble?" | 28 |
| "Why does the pH of pure water fall at 100 C?" | 29 |
| "100 mL of 0.2 M HCl + 100 mL of 0.1 M NaOH. Find the pH" | 30 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +---------------------------------------------------------------------+
  |  TIER 1 - LEARN THESE FIRST. THEY CANNOT BE SKIPPED.                 |
  |            Patterns 1, 2, 3, 10, 17, 21, 23, 25                      |
  |            (Kc expression, dn and Kp/Kc, units, Le Chatelier         |
  |             direction, strong-acid pH, buffer pH, salt nature,       |
  |             Ksp and solubility)                                      |
  |            These are almost all 2-mark Section A questions and       |
  |            every single one is pure substitution.                    |
  |            REALISTIC RETURN:  6 to 8 marks.                          |
  +---------------------------------------------------------------------+
  |  TIER 2 - THE SECTION C ANSWER YOU WILL ACTUALLY ATTEMPT.            |
  |            Patterns 11 and 16                                        |
  |            (Le Chatelier with Haber/Contact ; the three acid-base    |
  |             concepts)                                                |
  |            One of these two appears nearly every year. Learn BOTH    |
  |            so you always have a choice.                              |
  |            REALISTIC RETURN:  8 marks.                               |
  +---------------------------------------------------------------------+
  |  TIER 3 - THE SECTION B WORKHORSES.                                  |
  |            Patterns 5, 18, 19, 22, 24, 26, 27                        |
  |            (ICE tables, weak-acid pH, Ostwald, buffer theory,        |
  |             hydrolysis pH, precipitation, common ion solubility)     |
  |            REALISTIC RETURN:  4 to 8 marks.                          |
  +---------------------------------------------------------------------+
  |  TIER 4 - FINISH THESE ONLY IF TIME REMAINS.                         |
  |            Patterns 6, 7, 9, 12, 13, 14, 15, 20, 28, 29, 30          |
  +---------------------------------------------------------------------+

  TOTAL REALISTIC HAUL:  14 to 18 marks out of 60.
  The pass mark for the whole paper is 21.
  This ONE chapter gets you most of the way there.
```

**Three sentences to carry into the exam hall:**

```
  1. Products on top, coefficients as powers, solids and liquids deleted.

  2. Le Chatelier: the system always UNDOES what you did to it -
     and TEMPERATURE is the only thing that changes K.

  3. For a base, always find pOH first, then pH = 14 - pOH.
```

Never leave a Section A question blank — all ten are compulsory, and even a
correct definition with one example earns marks.
