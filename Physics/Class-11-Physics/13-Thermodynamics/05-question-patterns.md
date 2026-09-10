# Thermodynamics — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — STATE THE ZEROTH LAW / DEFINE TEMPERATURE            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the zeroth law." / "How does the zeroth law define
            temperature?" / "Define thermal equilibrium."
  METHOD    1. If A and B are each in thermal equilibrium with C, then
               A and B are in thermal equilibrium with each other.
            2. Add the significance: it proves the three bodies share a
               common property, and that property is TEMPERATURE.
            3. Mention that this is why a thermometer works.
  TRAP      Writing only the statement and not the significance. The
            significance is usually worth half the marks.
```

```
  PATTERN 2 — DEFINE A SYSTEM / WALL / STATE VARIABLE              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define open / closed / isolated system." /
            "Distinguish adiabatic and diathermic wall." /
            "What are extensive and intensive variables?"
  METHOD    Definition in ONE line + ONE example each.
            OPEN energy+matter , CLOSED energy only , ISOLATED neither.
            ADIABATIC no heat passes , DIATHERMIC heat passes.
            EXTENSIVE depends on amount (V, U, m) ,
            INTENSIVE does not (P, T, density).
  TRAP      Saying "isolated = no heat". Isolated means no heat, no work
            AND no matter.
```

```
  PATTERN 3 — STATE AND EXPLAIN THE FIRST LAW                    2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the first law of thermodynamics."
  METHOD    1.  dQ = dU + dW
            2.  Define EVERY symbol:
                  dQ = heat supplied TO the system
                  dU = increase in internal energy
                  dW = work done BY the system
            3.  Add: it is the law of conservation of energy applied to
                heat.
            4.  For 4 marks, also state what it does NOT tell you
                (direction of a process, efficiency limit).
  TRAP      Writing the CHEMISTRY version dU = q + w in a Physics answer.
            In Physics, W is the work done BY the gas.
```

```
  PATTERN 4 — FIRST-LAW NUMERICAL (find dQ, dU or dW)              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "X joules of heat is given, the gas does Y joules of work.
            Find the change in internal energy." (or any permutation)
  METHOD    1. Write the SIGNS FIRST, before substituting:
                  heat absorbed  dQ = +      heat released dQ = -
                  gas expands    dW = +      gas compressed dW = -
            2. Use  dU = dQ - dW.
            3. Say in words whether U increased or decreased.
  TRAP      Double negatives. "80 J of work is done ON the gas" means
            dW = -80 J, so  -(-80) = +80.  Write it out; do not do it
            in your head.
```

```
  PATTERN 5 — DERIVE W = INT P dV / AREA UNDER THE P-V CURVE       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the work done by a gas equals the area under the
            P-V curve." / "Derive an expression for the work done by a
            gas."
  METHOD    1. Gas at pressure P pushes a piston of area A through dx.
            2. F = P A , so dW = F dx = P A dx = P dV.
            3. Integrate:  W = INT(V1 to V2) P dV.
            4. An integral IS an area -> W = area under the P-V curve.
            5. DRAW the shaded P-V diagram. The diagram carries marks.
  TRAP      Forgetting to draw the diagram, and forgetting the sign rule
            (expansion positive, compression negative).
```

```
  PATTERN 6 — WORK FROM A GIVEN P-V GRAPH                        2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   A P-V graph is printed and you are asked for the work done
            along a path or around a loop.
  METHOD    1. Break the path into straight legs.
            2. VERTICAL leg  -> W = 0.
               HORIZONTAL leg -> W = P x (change in V).
               Sloping leg    -> area of the trapezium underneath.
            3. Moving RIGHT gives +, moving LEFT gives -.
            4. Add them up.
            5. If it is a CLOSED loop, just take the enclosed area:
               clockwise = +, anticlockwise = -.
  TRAP      Mixing units. Convert litres to m^3 (x 10^-3) and read the
            powers of ten off the axis labels before multiplying.
```

```
  PATTERN 7 — WHAT IS A QUASI-STATIC PROCESS?                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define a quasi-static process." / "Why must a process be
            quasi-static to be drawn on a P-V diagram?"
  METHOD    1. A process carried out infinitely slowly, so the system is
               in thermal and mechanical equilibrium at every instant.
            2. Only then does the gas have a single well-defined P and T
               at each instant, so it can be drawn as a CURVE.
            3. It is an idealisation; no real process is truly
               quasi-static.
```

```
  PATTERN 8 — DEFINE / DESCRIBE ONE OF THE FOUR PROCESSES          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define an isothermal / adiabatic / isobaric / isochoric
            process."
  METHOD    Give FOUR things every time:
            1. The condition (what is held constant).
            2. How it is achieved in practice (walls, speed).
            3. The equation of the curve.
            4. The consequence (dU = 0, or Q = 0, or W = 0).
  TRAP      Giving only the condition. Four short lines earns full marks;
            one line earns half.
```

```
  PATTERN 9 — DERIVE THE WORK IN AN ISOTHERMAL PROCESS             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the work done in an isothermal
            expansion of an ideal gas."
  METHOD    1. W = INT(V1 to V2) P dV
            2. P = nRT/V from PV = nRT.
            3. T is constant, so it comes OUT of the integral:
                  W = nRT INT dV/V = nRT ln(V2/V1)
            4. Also give   W = 2.303 nRT log10(V2/V1)
                    and    W = nRT ln(P1/P2)
            5. Finish with dU = 0 and therefore dQ = W.
  TRAP      Leaving T inside the integral. Saying "T is constant so it
            comes out" is a marked step.
```

```
  PATTERN 10 — DERIVE THE WORK IN AN ADIABATIC PROCESS             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the work done in an adiabatic
            process."
  METHOD    1. PV^g = K , so P = K/V^g.
            2. W = INT K V^-g dV = K [ V^(1-g) / (1-g) ] from V1 to V2.
            3. Replace K by P2 V2^g in the first term and by P1 V1^g in
               the second term.
            4. W = (P1 V1 - P2 V2)/(g - 1) = nR(T1 - T2)/(g - 1).
            5. Add Q = 0 and dU = -W.
  TRAP      Sign flip. Note carefully that 1/(1-g) = -1/(g-1); this is
            where the final expression gets its order (P1V1 first).
```

```
  PATTERN 11 — ADIABATIC NUMERICAL (find T2, V2 or P2)           2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A gas is compressed suddenly to 1/8 of its volume ..."
            The word SUDDEN or INSULATED means ADIABATIC.
  METHOD    1. Identify gamma from the type of gas (5/3, 7/5, 4/3).
            2. Pick the right relation:
                  T and V given ->  T1 V1^(g-1) = T2 V2^(g-1)
                  P and V given ->  P1 V1^g     = P2 V2^g
                  T and P given ->  T1^g P1^(1-g) = T2^g P2^(1-g)
            3. Write the volume ratio as a power of 2 or 3 so the index
               becomes a whole number.
            4. Work with W = nR(T1 - T2)/(g - 1) if work is asked.
  TRAP      The question often asks for the RISE in temperature, not the
            final temperature. Subtract at the end.
```

```
  PATTERN 12 — ISOTHERMAL vs ADIABATIC COMPARISON                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between isothermal and adiabatic processes."
  METHOD    Draw a TWO-COLUMN table with at least six rows:
            condition / heat flow / type of wall / speed / equation /
            dU and dQ / slope / specific heat.
            Add the combined P-V sketch showing the adiabat steeper.
  TRAP      Forgetting the slope point (-P/V versus -gamma P/V) and the
            specific-heat point (infinity versus zero). Those two lines
            are usually where the last mark is.
```

```
  PATTERN 13 — APPLY THE FIRST LAW TO ALL FOUR PROCESSES           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Apply the first law to isothermal, adiabatic, isochoric and
            cyclic processes."
  METHOD    One short paragraph each:
              ISOTHERMAL  dU = 0  =>  dQ = dW
              ADIABATIC   dQ = 0  =>  dU = -dW
              ISOCHORIC   dW = 0  =>  dQ = dU
              CYCLIC      dU = 0  =>  dQ = dW = area of the loop
  TRAP      Not saying WHY each term vanishes. "T constant so dU = 0"
            is the marked phrase.
```

```
  PATTERN 14 — WHY IS Cp GREATER THAN Cv?                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is Cp greater than Cv?"
  METHOD    At constant V the gas does no work, so all the heat raises T.
            At constant P the gas must ALSO do work P dV, so extra heat
            is needed for the same rise. The extra amount is exactly R.
  TRAP      Answering "because pressure is greater". That is meaningless.
            The reason is the WORK OF EXPANSION.
```

```
  PATTERN 15 — DERIVE MAYER'S RELATION  Cp - Cv = R                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive Cp - Cv = R." / "Prove Mayer's relation."
  METHOD    A fixed 4-step recipe, for ONE MOLE:
            1. Constant V:  dQ = dU   =>  Cv dT = dU
            2. Constant P:  dQ = dU + P dV  =>  Cp dT = Cv dT + P dV
               (state that dU is the SAME because U depends only on T)
            3. PV = RT , differentiate at constant P:  P dV = R dT
            4. Substitute and divide by dT:  Cp - Cv = R
  TRAP      Not saying that dU is the same in both cases. That sentence
            is the heart of the proof.
```

```
  PATTERN 16 — Cp, Cv, gamma NUMERICAL                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Given Cp = 29.1, find Cv and gamma." / "gamma = 1.67, find
            Cp and Cv." / "Identify the type of gas."
  METHOD    1. Cp - Cv = R = 8.314
            2. gamma = Cp/Cv , or Cv = R/(gamma - 1) , Cp = gR/(g-1)
            3. Match gamma:  1.67 mono , 1.40 di , 1.33 polyatomic.
  TRAP      Using R = 2 (calories) with Cp in joules. Keep one unit
            system throughout.
```

```
  PATTERN 17 — CYCLIC PROCESS / AREA OF THE LOOP                 2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a cyclic process?" / a closed loop is drawn and the
            net work or net heat is asked.
  METHOD    1. dU = 0 because U is a state function.
            2. Therefore Q = W.
            3. W = the AREA ENCLOSED by the loop.
            4. Clockwise -> W positive (engine).
               Anticlockwise -> W negative (refrigerator).
  TRAP      Trying to compute dU. It is always zero. Also, forgetting
            that the net HEAT equals the net WORK, so the same number
            answers both parts.
```

```
  PATTERN 18 — HEAT ENGINE: BLOCK DIAGRAM AND EFFICIENCY         4 / 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain a heat engine." / "Define efficiency."
  METHOD    1. DRAW the block diagram: SOURCE T1 -> Q1 -> working
               substance -> W , and Q2 down to the SINK T2.
            2. Name the three parts.
            3. Cyclic, so dU = 0 and W = Q1 - Q2.
            4. eta = W/Q1 = 1 - Q2/Q1.
            5. Explain why eta < 1 always.
  TRAP      Writing the formula without the block diagram. The diagram
            is worth marks on its own.
```

```
  PATTERN 19 — HEAT ENGINE NUMERICAL                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   Any two of Q1, Q2, W, eta are given and the rest are asked.
  METHOD    Three equations only:
                  W = Q1 - Q2 ,   eta = W/Q1 ,   eta = 1 - Q2/Q1
            Chain them:  eta and W  ->  Q1 = W/eta  ->  Q2 = Q1 - W.
  TRAP      Percentage versus fraction. 40% means 0.40 in the formula.
```

```
  PATTERN 20 — REFRIGERATOR: DIAGRAM AND COP                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of a refrigerator." / "Define the
            coefficient of performance."
  METHOD    1. DRAW the reversed block diagram: Q2 from the cold body,
               W supplied by the compressor, Q1 = Q2 + W to the room.
            2. alpha = Q2/W = Q2/(Q1 - Q2).
            3. Ideal (Carnot) case: alpha = T2/(T1 - T2).
            4. Note alpha can exceed 1, which is why it is not called
               efficiency.
  TRAP      Putting Q1 on top. The useful output of a FRIDGE is Q2, the
            heat removed from the COLD side. Q1 on top is a HEAT PUMP.
```

```
  PATTERN 21 — CAN A ROOM BE COOLED BY AN OPEN FRIDGE?             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Can a room be cooled by leaving the refrigerator door open?"
  METHOD    NO - the room gets WARMER.
            The fridge takes Q2 out of the room and dumps Q1 = Q2 + W
            back into the SAME room. The net addition is W, the
            compressor work, so the room heats up.
  TRAP      Answering only "no". You must give the Q1 = Q2 + W reason.
```

```
  PATTERN 22 — STATE THE SECOND LAW (BOTH FORMS)                 2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the second law of thermodynamics."
  METHOD    Give BOTH statements, word for word:
            KELVIN-PLANCK: no process is possible whose SOLE RESULT is
            the absorption of heat from a reservoir and its complete
            conversion into work.
            CLAUSIUS: no process is possible whose SOLE RESULT is the
            transfer of heat from a colder to a hotter body.
            For 4 marks, add what each one forbids (perfect engine,
            perfect refrigerator) and that they are equivalent.
  TRAP      Leaving out the words "SOLE RESULT". Without them the
            Clausius statement is factually wrong, because a fridge does
            move heat from cold to hot.
```

```
  PATTERN 23 — SHOW THE TWO STATEMENTS ARE EQUIVALENT              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the Kelvin-Planck and Clausius statements are
            equivalent."
  METHOD    Two halves, each by contradiction:
            (a) Violate K-P: an engine turns heat completely into work;
                feed that work to a normal fridge; the net result is
                heat moved cold -> hot with no work. Clausius broken.
            (b) Violate Clausius: a device moves Q2 cold -> hot free;
                run a normal engine rejecting exactly Q2; the cold body
                ends unchanged, so heat from ONE reservoir became pure
                work. Kelvin-Planck broken.
  TRAP      Forgetting to state the NET effect at the end of each half.
            The net effect IS the proof.
```

```
  PATTERN 24 — REVERSIBLE vs IRREVERSIBLE                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish reversible and irreversible processes." /
            "State the conditions for reversibility."
  METHOD    1. Definitions (system AND surroundings restored).
            2. FOUR conditions: quasi-static; no dissipative forces;
               infinitesimal temperature differences; equilibrium at
               every stage.
            3. Examples of irreversible processes: free expansion, heat
               conduction across a finite temperature difference,
               friction, diffusion, burning, rusting.
  TRAP      Saying "reversible means it can go backwards". It must
            restore the SURROUNDINGS too, leaving no change anywhere.
```

```
  PATTERN 25 — FREE EXPANSION                                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A gas expands into a vacuum in a rigid insulated container."
  METHOD    Q = 0 (insulated) , W = 0 (nothing to push against),
            therefore dU = 0 and for an ideal gas T IS UNCHANGED.
            State that it is irreversible and NOT quasi-static.
  TRAP      Using T V^(g-1) = constant. It does not apply, because the
            process is not quasi-static. This is a deliberate trap in
            EAPCET and JEE.
```

```
  PATTERN 26 — CARNOT ENGINE: FULL DERIVATION                      8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Describe the Carnot cycle and derive its efficiency."
            *** THE HIGHEST-VALUE QUESTION IN THIS CHAPTER ***
  METHOD    A fixed five-part answer:
            1. Parts of the engine (source, sink, insulating stand,
               cylinder, working substance).
            2. DRAW the P-V diagram with A, B, C, D and the four curves
               labelled. Two isotherms (flat) and two adiabats (steep).
            3. The four steps with their heats and works:
                  A->B isothermal expansion  Q1 = RT1 ln(V2/V1)
                  B->C adiabatic expansion   W2 = R(T1-T2)/(g-1)
                  C->D isothermal compression Q2 = RT2 ln(V3/V4)
                  D->A adiabatic compression W4 = -W2
            4. eta = W/Q1 = 1 - Q2/Q1, then substitute the two heats.
            5. Use the two adiabatic relations to show V2/V1 = V3/V4 so
               the logarithms CANCEL, giving eta = 1 - T2/T1.
  TRAP      Skipping step 5. The cancellation of the logs IS the
            derivation; without it you have only quoted the formula.
```

```
  PATTERN 27 — CARNOT NUMERICAL (eta, W, Q1, Q2)                 2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two temperatures plus one of Q1, Q2, W.
  METHOD    1. Convert both temperatures to KELVIN.
            2. eta = 1 - T2/T1.
            3. W = eta Q1 , Q2 = Q1 - W.
            4. Check with Q2/Q1 = T2/T1.
  TRAP      Not converting to kelvin. Also, mixing up which temperature
            is the source: T1 is always the LARGER (hot) one.
```

```
  PATTERN 28 — "CHANGE THE TEMPERATURE TO CHANGE THE EFFICIENCY"   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Efficiency is 40%; by how much must the source temperature
            rise to make it 60%?" / "the sink is lowered by 65 K and the
            efficiency doubles ..."
  METHOD    1. Write eta = 1 - T2/T1 for BOTH cases.
            2. If one temperature is unchanged, solve each equation
               separately and subtract.
            3. If BOTH are unknown, SUBTRACT the two equations - the
               unknown cancels and one number drops out.
  TRAP      Answering with the new temperature when the question asked
            for the INCREASE. Read the last line of the question again.
```

```
  PATTERN 29 — "IS THIS ENGINE POSSIBLE?"                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "An inventor claims an engine that takes Q1 at T1 and does
            W of work rejecting heat at T2. Is the claim valid?"
  METHOD    1. Claimed efficiency = W/Q1.
            2. Maximum possible = 1 - T2/T1 (Carnot).
            3. If claimed > maximum, the claim VIOLATES Carnot's theorem
               and the second law, so it is FALSE.
  TRAP      Just saying "impossible". You must compute BOTH numbers and
            compare them.
```

```
  PATTERN 30 — CARNOT'S THEOREM                                  2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Carnot's theorem." / "Why is the Carnot engine the
            most efficient?"
  METHOD    (a) No engine between two given temperatures can beat a
                reversible (Carnot) engine between the same two.
            (b) Its efficiency is independent of the working substance.
            Proof idea: couple a hypothetical better engine to a Carnot
            engine run backwards; the combination would move heat from
            cold to hot with no work, violating Clausius.
```

```
  PATTERN 31 — REFRIGERATOR / HEAT PUMP NUMERICAL                2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "COP is 5 and 500 J is removed - find the work." /
            "Find the COP of a fridge at -3 C in a room at 27 C."
  METHOD    1. alpha = Q2/W ;  Q1 = Q2 + W.
            2. Ideal case: alpha = T2/(T1 - T2)   (kelvin!).
            3. From efficiency: alpha = (1 - eta)/eta.
            4. Heat pump: COP = Q1/W = T1/(T1 - T2) = alpha + 1.
  TRAP      Using T1 - T2 in Celsius. A DIFFERENCE of temperatures is the
            same in C and K, but the T2 on top is NOT - it must be in
            kelvin.
```

```
  PATTERN 32 — SPECIFIC HEAT IN A SPECIAL PROCESS                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the specific heat of a gas in an isothermal /
            adiabatic process?" or "for P V^n = constant"
  METHOD    C = dQ / (n dT).
            ISOTHERMAL: dT = 0 , dQ non-zero  ->  C = INFINITY.
            ADIABATIC : dQ = 0 , dT non-zero  ->  C = ZERO.
            General:    C = Cv + R/(1 - n) for P V^n = constant.
  TRAP      Reversing the two. Remember: no temperature change means you
            need infinite heat per degree.
```

```
  PATTERN 33 — INTERNAL ENERGY OF AN IDEAL GAS                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the internal energy of n moles at temperature T." /
            "What is the change in internal energy in process X?"
  METHOD    1. dU = n Cv dT for EVERY process, not only isochoric.
            2. U = (f/2) n R T , so monatomic (3/2)nRT,
               diatomic (5/2)nRT.
            3. If dT = 0 (isothermal or cyclic), dU = 0 immediately.
  TRAP      Believing Cv can only be used at constant volume. It can be
            used always, because U depends only on T.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +----------------------------------------------------+-----------+
  |  QUESTION STEM                                     |  PATTERN  |
  +----------------------------------------------------+-----------+
  |  "Derive the efficiency of a Carnot engine"        |    26     |
  |  "Prove Cp - Cv = R"                               |    15     |
  |  "State the second law in two ways"                |    22     |
  |  "A gas is compressed suddenly to 1/8 its volume"  |    11     |
  |  "Explain the working of a refrigerator"           |    20     |
  |  "70 J of heat added, gas does 30 J of work"       |     4     |
  |  "Find the work done in the loop shown"            |     6, 17 |
  |  "Show W is the area under the P-V curve"          |     5     |
  |  "Why is Cp greater than Cv?"                      |    14     |
  |  "Gas expands into a vacuum, find T"               |    25     |
  |  "Efficiency 40%, make it 60%, find the rise"      |    28     |
  |  "An inventor claims 50% between 500 K and 300 K"  |    29     |
  |  "Distinguish isothermal and adiabatic"            |    12     |
  |  "If A and B are in equilibrium with C ..."        |     1     |
  |  "Can a room be cooled by an open fridge?"         |    21     |
  |  "COP of a fridge at -3 C in a room at 27 C"       |    31     |
  |  "Specific heat in an adiabatic process"           |    32     |
  |  "Work done in an isothermal expansion, derive"    |     9     |
  |  "Conditions for a process to be reversible"       |    24     |
  |  "What is a quasi-static process?"                 |     7     |
  |  "gamma = 1.4, find Cv"                            |    16     |
  |  "State Carnot's theorem"                          |    30     |
  |  "Change in internal energy in a cyclic process"   |    17, 33 |
  +----------------------------------------------------+-----------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  STAGE 1  -  THE ABSOLUTE MINIMUM  (about 2 hours, worth ~8 marks)
  ---------------------------------------------------------------------
   [ ] Learn  eta = 1 - T2/T1  and that T must be in KELVIN.
   [ ] Learn the FOUR STEPS of the Carnot cycle and DRAW the P-V loop.
   [ ] Write out the full Carnot derivation (Pattern 26) three times
       on blank paper.
       -> This alone is an 8-mark Section C answer.

  STAGE 2  -  THE SAFE CORE  (about 3 more hours, worth ~14 marks)
  ---------------------------------------------------------------------
   [ ] First law  dQ = dU + dW , with the PHYSICS sign convention.
   [ ] The four-process comparison table, from memory.
   [ ] Mayer's relation derivation (Pattern 15).
   [ ] Both statements of the second law, word for word (Pattern 22).
   [ ] Heat engine and refrigerator BLOCK DIAGRAMS (Patterns 18, 20).

  STAGE 3  -  THE POLISH  (about 2 more hours)
  ---------------------------------------------------------------------
   [ ] Isothermal and adiabatic work derivations (Patterns 9, 10).
   [ ] Ten numericals: three Carnot, three first-law, two adiabatic,
       two refrigerator.
   [ ] Reversibility conditions and the free-expansion trap.
   [ ] Practise reading work off a P-V graph (Pattern 6).

  WHAT TO WRITE IF YOU ARE STUCK IN THE EXAM
  ---------------------------------------------------------------------
   Any question mentioning an ENGINE and two temperatures:
        write  eta = 1 - T2/T1 , convert to kelvin, substitute.
   Any question mentioning heat and work:
        write  dQ = dU + dW  and define the three symbols.
   Any P-V diagram question:
        write "W = area under the curve" and shade the area.

   Those three lines will pick up partial marks on almost every
   question this chapter can throw at you.
```
