# Electrochemistry and Chemical Kinetics — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Patterns 1 to 18 are **ELECTROCHEMISTRY**.
Patterns 19 to 30 are **CHEMICAL KINETICS**.

---

```
  PATTERN 1 — IDENTIFY ANODE AND CATHODE, WRITE CELL NOTATION     2 marks
  ------------------------------------------------------------------------
  TRIGGER   A redox equation is given and you are asked to "represent the
            cell" or "write the cell notation".
  METHOD    1. Find what is OXIDISED (loses electrons) -> that is the ANODE.
            2. Find what is REDUCED (gains electrons)  -> that is the CATHODE.
            3. Write   ANODE | ANODE ION || CATHODE ION | CATHODE
                 single line |   = phase boundary
                 double line ||  = salt bridge
            4. Put the concentration in brackets; assume 1 M if not given.
                 Zn | Zn2+ (1 M) || Cu2+ (1 M) | Cu
  TRAP      The anode is ALWAYS on the LEFT. On the left the METAL comes
            first; on the right the ION comes first. Everything reads
            outward from the salt bridge.
```

```
  PATTERN 2 — CALCULATE E0(cell) FROM TWO E0 VALUES               2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two standard electrode potentials are given and an EMF is asked.
  METHOD    1. The MORE NEGATIVE electrode is the ANODE.
            2. E0(cell) = E0(cathode) - E0(anode)
            3. Both must be REDUCTION potentials, and the anode value is
               subtracted WITH ITS OWN SIGN.
                 ( + 0.34 ) - ( - 0.76 )  =  + 1.10 V
  TRAP      Minus a minus becomes PLUS. Writing 0.34 - 0.76 = -0.42 V loses
            the whole question. Also, NEVER multiply E0 by the number of
            electrons - it is an intensive property.
```

```
  PATTERN 3 — SALT BRIDGE                                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a salt bridge?" / "Write its functions."
  METHOD    WHAT: a U-tube of agar-agar paste saturated with an inert
            electrolyte - KCl, KNO3 or NH4NO3 - whose cation and anion
            move at nearly the same speed.
            FUNCTIONS (give all four, one mark each pair):
              1. completes the electrical circuit
              2. maintains electrical neutrality in both half cells
              3. prevents the two solutions from mixing
              4. eliminates the liquid junction potential
  TRAP      Saying only "it completes the circuit" gets half the marks.
            Write at least two functions, ideally all four.
```

```
  PATTERN 4 — GALVANIC versus ELECTROLYTIC CELL               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between ..." / "What is an electrolytic cell?"
  METHOD    Give one point per line, in pairs:
              energy      chemical->electrical  |  electrical->chemical
              reaction    spontaneous           |  non-spontaneous
              E(cell)     positive              |  negative, needs battery
              delta G     negative              |  positive
              anode       NEGATIVE terminal     |  POSITIVE terminal
              set-up      two beakers + bridge  |  one container
  TRAP      Oxidation is at the ANODE in BOTH cells. Only the SIGN of the
            electrode flips. Learn the reaction, not the sign.
```

```
  PATTERN 5 — STANDARD HYDROGEN ELECTRODE                     2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a SHE?" / "How is the electrode potential of a metal
            determined?"
  METHOD    1. DRAW it: Pt foil coated with platinum black, in 1 M HCl,
               H2 gas at 1 bar bubbled over it, at 298 K.
            2. State  E0 = 0.00 V BY DEFINITION.
            3. Notation:  Pt , H2 (1 bar) | H+ (1 M)
            4. Half reaction:  2 H+ + 2 e-  <-->  H2
            5. To find E0 of a metal, couple it with the SHE and use
               E0(cell) = E0(cathode) - E0(anode).
  TRAP      Say WHY platinum black is used - it is inert and its large
            surface area adsorbs H2 so equilibrium comes quickly. That
            sentence is worth a mark.
```

```
  PATTERN 6 — ELECTROCHEMICAL SERIES AND ITS APPLICATIONS         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the electrochemical series? Give its applications."
  METHOD    Define it, then list applications with ONE EXAMPLE EACH:
              1. strength as an OXIDISING agent (higher E0 = stronger; F2)
              2. strength as a REDUCING agent  (lower E0 = stronger; Li)
              3. displacement of one metal by another (Zn displaces Cu)
              4. displacement of H2 from acids (negative E0 only)
              5. calculating the EMF of a cell
              6. predicting spontaneity
  TRAP      Examples carry marks. A bare list of six headings gets half.
```

```
  PATTERN 7 — WILL THIS REACTION HAPPEN?                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Will copper displace silver from AgNO3?" / "Predict whether
            the reaction is feasible."
  METHOD    1. Write the proposed reaction; decide which side is oxidised.
            2. E0(cell) = E0(cathode) - E0(anode)
            3. POSITIVE -> yes, spontaneous.
               NEGATIVE -> no; the reverse reaction happens instead.
  TRAP      Do not judge by "which metal looks more reactive". Compute the
            number. The sign is the answer.
```

```
  PATTERN 8 — NERNST EQUATION FOR A CELL - NUMERICAL              4 marks
  ------------------------------------------------------------------------
  TRIGGER   A cell is given with concentrations that are NOT 1 M.
  METHOD    1. E0(cell) = E0(cathode) - E0(anode)
            2. Write the balanced cell reaction and read off n.
            3. Apply

                                       0.0591          [products]
                 E  =  E0(cell)   -   ---------  log  -------------
                                          n            [reactants]

            4. Leave out every SOLID and PURE LIQUID.
            5. Work out the log, then subtract.
  TRAP      Three separate traps:
              (i)   n is the electrons in the BALANCED equation.
              (ii)  products go on TOP of the fraction.
              (iii) do not forget to DIVIDE 0.0591 by n.
```

```
  PATTERN 9 — NERNST FOR ONE ELECTRODE / pH / CONCENTRATION CELL
                                                        2 marks or objective
  ------------------------------------------------------------------------
  TRIGGER   "Find the electrode potential of Cu in 0.01 M CuSO4" , or a pH
            is given with a hydrogen electrode, or both half cells contain
            the SAME ion at different concentrations.
  METHOD    SINGLE ELECTRODE     M(n+) + n e- -> M

                 E   =   E0   +   ( 0.0591 / n )  log [M n+]

            HYDROGEN ELECTRODE at any pH

                 E   =   - 0.0591  x  pH

            CONCENTRATION CELL (same metal both sides, so E0 = 0)

                                0.0591          higher concentration
                 E   =         ---------  log  ----------------------
                                   n            lower concentration

  TRAP      Diluting the ion LOWERS a single electrode potential, because
            log of a number less than 1 is NEGATIVE.
```

```
  PATTERN 10 — delta G AND THE EQUILIBRIUM CONSTANT          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Calculate the Gibbs energy change" or "calculate K for the
            cell reaction".
  METHOD    delta G0  =  - n F E0          F = 96500 , answer in JOULES

                            n  x  E0(cell)
              log K   =   -------------------
                                0.0591

              then  K = antilog ( that number )
  TRAP      The answer of - n F E is in JOULES. Divide by 1000 if the
            question wants kJ. Keep the MINUS sign - a positive delta G
            for a working cell is always wrong.
```

```
  PATTERN 11 — DANIELL CELL, FULL DESCRIPTION            *** 8 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "What is a galvanic cell? Describe the Daniell cell." Usually
            combined with the Nernst equation and a numerical.
  METHOD    Write ALL FIVE parts:
              1. Definition of a galvanic cell.
              2. DRAW the labelled diagram (two beakers, rods, salt
                 bridge, voltmeter, arrows for electron flow).
              3. Anode reaction, cathode reaction, overall reaction,
                 cell notation, E0 = 1.10 V.
              4. Functions of the salt bridge.
              5. Nernst equation and a worked numerical.
  NOTE      *** THE MOST FREQUENTLY ASKED LONG ANSWER IN THE FIRST HALF
            OF THIS CHAPTER. The diagram alone carries 2 to 3 marks. ***
```

```
  PATTERN 12 — DEFINE CONDUCTANCE / CONDUCTIVITY / MOLAR
               CONDUCTIVITY / CELL CONSTANT                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define ... and give its unit."
  METHOD    G      = 1/R                            unit  S
            kappa  = 1/rho = G x (l/A)              unit  S cm-1
                     = conductance of 1 cm3 of the solution
            l/A    = cell constant = kappa x R      unit  cm-1
            Lambda = kappa x 1000 / C               unit  S cm2 mol-1
                     = conductance of all the ions from 1 MOLE
  TRAP      The UNIT is half the mark. Learn kappa -> S cm-1 and
            Lambda -> S cm2 mol-1 as a pair. They are easy to swap.
```

```
  PATTERN 13 — CELL CONSTANT AND MOLAR CONDUCTIVITY NUMERICAL     4 marks
  ------------------------------------------------------------------------
  TRIGGER   A resistance and a standard KCl conductivity are given.
  METHOD    1. cell constant  =  kappa(KCl)  x  R(KCl)
            2. kappa(unknown) =  cell constant / R(unknown)
            3. Lambda         =  kappa x 1000 / C
  TRAP      Keep kappa in S cm-1 and C in mol L-1 so that the 1000 works.
            If the data is in SI (S m-1 and mol m-3) then Lambda = kappa/C
            with NO 1000.
```

```
  PATTERN 14 — VARIATION OF MOLAR CONDUCTIVITY WITH DILUTION      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain how molar conductivity varies with dilution for
            strong and weak electrolytes." Usually asks for a graph.
  METHOD    1. State the universal rule: on dilution kappa DECREASES but
               Lambda INCREASES, and explain WHY for each.
            2. STRONG: already fully ionised, ions just move further
               apart; nearly a straight line;
               Lambda = Lambda0 - A sqrt(C); Lambda0 by EXTRAPOLATION.
            3. WEAK: alpha rises sharply on dilution, so many more ions
               appear; the curve shoots up near infinite dilution and
               never meets the axis; Lambda0 needs KOHLRAUSCH'S LAW.
            4. DRAW both curves on one pair of axes, labelled.
  TRAP      Do not say Lambda0 of a weak acid can be extrapolated. That is
            the exact point the question is testing.
```

```
  PATTERN 15 — KOHLRAUSCH'S LAW - Lambda0 OF A WEAK ELECTROLYTE
                                                              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three Lambda0 values of STRONG electrolytes are given and the
            Lambda0 of a WEAK acid or base is asked. Or ion conductivities
            are given for a salt like CaCl2.
  METHOD    Lambda0 = v(+) lambda0(+) + v(-) lambda0(-)

            For a weak acid, combine strong electrolytes so the spare
            ions cancel:

              Lambda0(CH3COOH) = Lambda0(CH3COONa) + Lambda0(HCl)
                                                       - Lambda0(NaCl)

            Always CHECK by cancelling the ions on paper.
  TRAP      COUNT THE IONS. CaCl2 needs 2 x lambda0(Cl-);
            Al2(SO4)3 needs 2 x lambda0(Al3+) + 3 x lambda0(SO4 2-).
```

```
  PATTERN 16 — DEGREE OF DISSOCIATION AND Ka                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   A Lambda at a given concentration AND a Lambda0 are available,
            and alpha or Ka is asked.
  METHOD    1. If Lambda0 is not given directly, get it by Kohlrausch.
            2. alpha  =  Lambda  /  Lambda0
            3. Ka     =  C alpha^2 / ( 1 - alpha )
  TRAP      alpha has NO UNIT and must lie between 0 and 1. If it comes
            out above 1 you divided the wrong way round.
            Do NOT drop the (1 - alpha) unless alpha is very small.
```

```
  PATTERN 17 — FARADAY'S LAWS NUMERICAL                     4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   A current in amperes and a time are given, and a mass, a
            current or a time is asked.
  METHOD    1. Convert the TIME TO SECONDS.
            2. Find n = electrons per ion (Ag+ 1, Cu2+ 2, Al3+ 3).
            3. Apply
                            M  x  I  x  t
                    w  =  ------------------
                            n  x  96500
            4. Rearrange for whatever is asked.
            For two cells in SERIES use  w1 / w2 = E1 / E2 , where
            E = molar mass / n. Or, more safely, work in MOLES OF
            ELECTRONS:   moles e- = I t / 96500.
  TRAP      TIME IN SECONDS. 30 min = 1800 s, 1 hour = 3600 s.
            This single slip is the most common lost mark in the chapter.
```

```
  PATTERN 18 — PRODUCTS OF ELECTROLYSIS AND GAS VOLUMES      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What are the products of electrolysis of ...?" or "what volume
            of gas at STP is liberated by n faradays?"
  METHOD    Learn the table by heart:
              molten NaCl    -> cathode Na  , anode Cl2
              aqueous NaCl   -> cathode H2  , anode Cl2 , NaOH in solution
              aqueous CuSO4  -> cathode Cu  , anode O2   (Pt electrodes)
              aqueous CuSO4  -> cathode Cu  , the Cu anode DISSOLVES
                                              (Cu electrodes)
            For a gas: moles of electrons = Q / 96500 , then use the
            electrode equation, then volume = moles x 22.4 L.
  TRAP      AQUEOUS NaCl gives HYDROGEN at the cathode, never sodium.
            Justify it with the E0 values: -2.71 V for Na+ against about
            0.00 V for H+.
```

```
  PATTERN 19 — BATTERIES: PRIMARY AND SECONDARY              4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write a note on the lead storage battery / dry cell / mercury
            cell / nickel-cadmium cell."
  METHOD    For EACH cell give four things:
              1. anode material
              2. cathode material
              3. electrolyte
              4. the electrode reactions and the EMF
            For the LEAD battery also give BOTH directions:
              discharge  Pb + PbO2 + 2 H2SO4  ->  2 PbSO4 + 2 H2O
              charging   the exact reverse
  TRAP      Say WHY the mercury cell has a CONSTANT voltage - no ion
            appears in its overall reaction. That is the marked point.
```

```
  PATTERN 20 — FUEL CELL                                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a fuel cell? Describe the H2-O2 fuel cell."
  METHOD    1. Definition: reactants supplied CONTINUOUSLY from outside.
            2. Draw: two porous carbon electrodes with a Pt catalyst,
               concentrated KOH between them.
            3. Anode    2 H2 + 4 OH-  ->  4 H2O + 4 e-
               Cathode  O2 + 2 H2O + 4 e-  ->  4 OH-
               Overall  2 H2 + O2  ->  2 H2O
            4. Advantages: about 70 % efficient, no pollution, continuous.
            5. Use: the Apollo space programme.
  TRAP      In an ALKALINE fuel cell the ions are OH-, not H+. Writing the
            acidic version loses marks.
```

```
  PATTERN 21 — CORROSION: MECHANISM AND PREVENTION                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is corrosion? Explain the rusting of iron." /
            "How can rusting be prevented?"
  METHOD    1. Define corrosion; give rust = Fe2O3 . x H2O.
            2. DRAW the water drop on the iron surface with an anode spot
               and a cathode spot.
            3. Anode   Fe -> Fe2+ + 2 e-              E0 = - 0.44 V
               Cathode O2 + 4 H+ + 4 e- -> 2 H2O      E0 = + 1.23 V
               E0(cell) = + 1.67 V , so it is spontaneous.
            4. Then Fe2+ is oxidised further and hydrated to rust.
            5. Prevention: barrier coating, GALVANISING, CATHODIC
               (sacrificial) protection, electroplating, alloying.
  TRAP      Both WATER and OXYGEN are needed. And rust is iron(III) even
            though the first step gives iron(II) - mention both.
```

```
  PATTERN 22 — RATE IN TERMS OF EACH SPECIES                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   A balanced equation with coefficients, and "express the rate
            in terms of ..." or "if H2 disappears at ..., find ...".
  METHOD                  1   d[A]           1   d[C]
              rate  =  -  --- ------   =  +  --- ------
                          a    dt            c    dt

            MINUS for reactants, PLUS for products, DIVIDE by the
            coefficient every time.
            For a numerical: the species change in the RATIO OF THE
            COEFFICIENTS. Find the rate of reaction first, then scale.
  TRAP      "Rate of the reaction" and "rate of disappearance of H2" are
            DIFFERENT numbers whenever the coefficient is not 1.
```

```
  PATTERN 23 — AVERAGE RATE NUMERICAL                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two concentrations at two times are given.
  METHOD                     - ( [A]2  -  [A]1 )
              average rate = ---------------------
                                  t2   -   t1
            Then convert to the unit the question wants.
  TRAP      Minutes versus seconds - a factor of 60. And the answer must
            come out POSITIVE; that is what the minus sign is for.
            Average rate uses a CHORD; instantaneous rate uses a TANGENT.
```

```
  PATTERN 24 — FIND THE ORDER FROM INITIAL RATE DATA              4 marks
  ------------------------------------------------------------------------
  TRIGGER   A table of experiments with [A], [B] and initial rates.
  METHOD    1. Pick two rows where ONLY [A] changes.
                 rate ratio = (concentration ratio) ^ x , solve for x.
                 x2 -> order 1 , x4 -> order 2 , x1 -> order 0
            2. Repeat with two rows where only [B] changes to get y.
            3. Rate law = k [A]^x [B]^y ; overall order = x + y.
            4. Put ONE row of data back in to find k.
            5. Give the UNIT of k from the overall order.
  TRAP      You must compare rows where only ONE concentration changed.
            Comparing rows where both changed gives nonsense.
```

```
  PATTERN 25 — ORDER versus MOLECULARITY                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between order and molecularity."
  METHOD    Give the two definitions, then four to six differences in a
            table:
              experimental        |  from the mechanism
              can be ZERO         |  never zero
              can be FRACTIONAL   |  always a whole number
              overall reaction    |  one elementary step only
              changes with        |  does not change
              conditions          |
            Add the line: for an ELEMENTARY reaction, order = molecularity.
  TRAP      Give a numbered table, not a paragraph. Each row is a mark.
```

```
  PATTERN 26 — UNITS OF k / IDENTIFY THE ORDER                 objective
  ------------------------------------------------------------------------
  TRIGGER   "The unit of k is ... , the order is ...", or the reverse.
  METHOD                                            1 - n
              unit of k   =   ( mol L-1 )                 s-1

                 order 0  ->  mol L-1 s-1
                 order 1  ->  s-1
                 order 2  ->  L mol-1 s-1
                 order 3  ->  L2 mol-2 s-1
  SHORTCUT  If k has NO concentration term in its unit (just s-1), the
            reaction is FIRST ORDER. Every time.
```

```
  PATTERN 27 — ZERO ORDER: EQUATION, GRAPH, HALF LIFE             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the integrated rate equation for a zero order
            reaction", or a numerical where the rate does not depend on
            concentration.
  METHOD    1. Rate = k, so - d[A] = k dt.
            2. Integrate:   [A] = [A]0 - k t
            3. k = ( [A]0 - [A] ) / t          unit mol L-1 s-1
            4. Graph: [A] against t is a straight line,
               slope = - k , intercept = [A]0.
            5. t(1/2) = [A]0 / 2k , and it IS proportional to [A]0.
            6. Time for complete reaction = [A]0 / k.
            Examples: NH3 on hot Pt, HI on gold.
  TRAP      Do NOT use 0.693/k here. That is first order only.
```

```
  PATTERN 28 — FIRST ORDER: DERIVATION + HALF LIFE       *** 8 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Derive the integrated rate equation for a first order
            reaction" / "show that the half life is independent of the
            initial concentration".
  METHOD    Write ALL FIVE parts:
              1. - d[A]/dt = k[A] , separate the variables.
              2. Integrate to ln[A] = -kt + C , find C at t = 0.
              3. Multiply by 2.303:

                              2.303              [A]0
                       k  =  --------    log   ---------
                                t                [A]

              4. Put [A] = [A]0/2 to get t(1/2) = 0.693 / k , and point
                 out that [A]0 CANCELLED.
              5. Draw the graphs: log[A] vs t (slope -k/2.303) and
                 log([A]0/[A]) vs t (through the origin).
  NOTE      *** THE MOST FREQUENTLY ASKED LONG ANSWER IN THE SECOND HALF
            OF THIS CHAPTER. Learn to write it without looking. ***
```

```
  PATTERN 29 — FIRST ORDER NUMERICAL (k, t, % COMPLETION,
               HALF LIFE)                                    2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Any of: "k = ... find t(1/2)" , "50 % complete in ... find k" ,
            "how long for 90 % completion" , "how much is left after ..."
  METHOD    1. Convert the words to numbers FIRST.
                 "90 % complete"  ->  [A]0 = 100 , [A] = 10
                 "75 % complete"  ->  [A]0 = 100 , [A] = 25
            2. Use
                              2.303              [A]0
                       k  =  --------    log   ---------
                                t                [A]
               or t(1/2) = 0.693 / k , whichever fits.
            3. Check with the shortcuts:
                 t(75 %)  = 2    t(1/2)
                 t(90 %)  = 3.32 t(1/2)
                 t(99 %)  = 6.64 t(1/2)
                 after n half lives, [A] = [A]0 / 2^n
  TRAP      "90 % complete" means 10 % is LEFT, not 90 %. Putting 90 in
            the denominator is the single commonest mistake in kinetics.
            Also, [A]0 goes on TOP of the log.
```

```
  PATTERN 30 — PSEUDO FIRST ORDER REACTION                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a pseudo first order reaction? Give an example."
  METHOD    A reaction of higher order that BEHAVES as first order because
            one reactant is in such large EXCESS that its concentration
            stays practically constant.

               Rate = k[A][B]  with [B] constant  ->  Rate = k'[A]
               where k' = k[B]

            EXAMPLES:  acid hydrolysis of an ESTER
                       INVERSION OF CANE SUGAR
  TRAP      You must name the reactant in excess (water) AND give one of
            the two standard examples. A bare definition gets half.
```

```
  PATTERN 31 — ARRHENIUS NUMERICAL - FIND Ea                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two rate constants at two temperatures, or "the rate doubles
            when the temperature rises by 10 K".
  METHOD    1. Identify k1 with T1 (the LOWER temperature).
            2. Apply

                     k2           Ea            T2  -  T1
               log ------  =  ----------  x   --------------
                     k1         2.303 R           T1  T2

            3. 2.303 x R = 19.147 . Substitute and solve for Ea.
            4. Divide by 1000 to quote the answer in kJ mol-1.
  TRAP      T must be in KELVIN. Ea comes out in J mol-1 when R = 8.314.
            For "rate doubles over 10 K near room temperature" the answer
            is always around 50 to 55 kJ mol-1 - use that as a check.
```

```
  PATTERN 32 — ARRHENIUS GRAPH, ACTIVATION ENERGY, CATALYST       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the slope of log k against 1/T?" / "Define activation
            energy" / "How does a catalyst work?"
  METHOD    k = A e^(-Ea/RT)

              log k  =  log A  -  Ea / ( 2.303 R T )

              slope of log k vs 1/T   =   - Ea / ( 2.303 R )
              intercept               =   log A
              Ea  =  - 2.303 R  x  slope

            Ea = the minimum extra energy above the average that colliding
            molecules must have in order to react.

            A CATALYST lowers Ea by providing an alternative path. It does
            NOT change delta H, delta G or K, and it speeds up the forward
            and backward reactions equally.
  TRAP      The slope is NEGATIVE. Forgetting the minus sign gives a
            negative activation energy, which is impossible.
```

```
  PATTERN 33 — COLLISION THEORY                                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain collision theory" / "what is the significance of the
            factor P?"
  METHOD    Rate = P Z e^(-Ea/RT)
              Z = collision frequency
              e^(-Ea/RT) = fraction of collisions with enough energy
              P = steric / orientation factor
            Comparing with k = A e^(-Ea/RT) gives  A = P Z.
            TWO conditions for a successful collision:
              1. energy at or above Ea
              2. correct orientation
  TRAP      Not every collision produces products. Say BOTH conditions -
            energy AND orientation. Mentioning only energy gets half.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +----------------------------------------------------------+---------+
  |  QUESTION STEM                                           | PATTERN |
  +----------------------------------------------------------+---------+
  |  "Write the cell notation for Zn + Cu2+ -> Zn2+ + Cu"     |    1    |
  |  "E0(Mg) = -2.37, E0(Ag) = +0.80. Find the EMF"           |    2    |
  |  "What is a salt bridge? Write its functions"             |    3    |
  |  "Distinguish between galvanic and electrolytic cells"    |    4    |
  |  "Describe the standard hydrogen electrode"               |    5    |
  |  "Write four applications of the electrochemical series"  |    6    |
  |  "Will Cu displace Ag from AgNO3 solution?"               |    7    |
  |  "Find the EMF of Zn|Zn2+(0.1M)||Cu2+(0.01M)|Cu"          |    8    |
  |  "Find the potential of a H2 electrode at pH = 10"        |    9    |
  |  "E0 = 1.10 V, n = 2. Calculate delta G0 and K"           |   10    |
  |  "Describe the Daniell cell with a labelled diagram"      |   11    |
  |  "Define molar conductivity. Give its unit"               |   12    |
  |  "R of 0.001 M KCl is 1500 ohm ... find the cell constant"|   13    |
  |  "How does molar conductivity change on dilution?"        |   14    |
  |  "Lambda0(CH3COONa)=91.0, Lambda0(HCl)=426.2 ... find     |   15    |
  |   Lambda0 of acetic acid"                                 |         |
  |  "Lambda = 49.5, Lambda0 = 390.7. Find alpha and Ka"      |   16    |
  |  "5 A for 30 minutes through CuSO4. Find the mass of Cu"  |   17    |
  |  "Name the products of electrolysis of aqueous NaCl"      |   18    |
  |  "Write a note on the lead storage battery"               |   19    |
  |  "Describe the hydrogen-oxygen fuel cell"                 |   20    |
  |  "Explain the electrochemical mechanism of rusting"       |   21    |
  |  "H2 disappears at 0.03 mol/L/s. Find the rate of NH3     |   22    |
  |   formation"                                              |         |
  |  "[A] falls from 0.50 to 0.38 M in 10 min. Find the rate" |   23    |
  |  "From the table, find the order with respect to A and B" |   24    |
  |  "Distinguish between order and molecularity"             |   25    |
  |  "The unit of k is mol L-1 s-1. What is the order?"       |   26    |
  |  "Derive the rate equation for a zero order reaction"     |   27    |
  |  "Derive k = (2.303/t) log([A]0/[A]) and find t(1/2)"     |   28    |
  |  "A first order reaction is 50 % complete in 40 min ..."  |   29    |
  |  "What is a pseudo first order reaction? Give an example" |   30    |
  |  "k doubles from 298 K to 308 K. Find Ea"                 |   31    |
  |  "What is the slope of a plot of log k against 1/T?"      |   32    |
  |  "Why does not every collision lead to a reaction?"       |   33    |
  +----------------------------------------------------------+---------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

Learn these seven things and you comfortably secure **12 to 16 marks out of 60**:

```
  1.  THE DANIELL CELL DIAGRAM, drawn and fully labelled, plus the salt
      bridge functions, the cell notation, and
                E0(cell) = E0(cathode) - E0(anode).
      Practise DRAWING it five times until it takes two minutes.
          ->  the diagram alone is 2 to 3 marks inside an 8-mark answer,
              and the salt bridge is a 2-mark Section A question nearly
              every year

  2.  THE NERNST EQUATION and one worked sum:

                                   0.0591          [products]
             E  =  E0(cell)   -   ---------  log  -------------
                                      n            [reactants]

      Plus delta G = - n F E and log K = n E0 / 0.0591.
          ->  completes the 8-mark question and covers 2 more in Section A

  3.  FARADAY'S LAWS and the ONE formula

                            M  x  I  x  t
                     w  =  ----------------          t IN SECONDS
                            n  x  96500

      Work three sums with different numbers: find w, find I, find t.
          ->  one whole 4-mark question, and often part of an 8-marker

  4.  THE CONDUCTANCE SET - kappa, Lambda, cell constant, WITH UNITS,
      plus Kohlrausch's law, alpha = Lambda / Lambda0 and
      Ka = C alpha^2 / (1 - alpha).
          ->  2 to 4 marks, and the definitions alone are free marks

  5.  ORDER versus MOLECULARITY - the six-row table.
      Pure memory, no arithmetic, comes up nearly every year.
          ->  a full 4-mark question for ten minutes of learning

  6.  THE FIRST ORDER DERIVATION end to end:

                     2.303              [A]0                0.693
              k  =  --------    log   ---------  ,  t(1/2) = -------
                       t                [A]                    k

      with the graphs and the "90 % complete means 10 % left" rule.
          ->  the second 8-mark long answer of this chapter

  7.  THE ARRHENIUS TWO-TEMPERATURE FORM

                     k2            Ea          T2  -  T1
              log  ------  =   ----------  x  -------------
                     k1          2.303 R          T1 T2

      with T in KELVIN and 2.303 R = 19.147.
          ->  one 4-mark numerical, almost guaranteed
```

```
  THE FOUR NUMBERS THAT CARRY THIS ENTIRE CHAPTER

              F = 96500       R = 8.314       0.0591       0.693

  If you walk into the hall knowing only those four numbers and the seven
  items above, you will not fail this chapter. Everything else is a bonus.
```
