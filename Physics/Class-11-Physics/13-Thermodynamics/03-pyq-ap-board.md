# Thermodynamics — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Physics, 1st Year, 60 marks · **Chapter 13**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> so these are grouped by how often they appear rather than tagged to a single year.
> Cross-check with the official papers at **bie.ap.gov.in** before your exam.

**Where this chapter appears in the paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually 1 or 2 questions
  Section B  (4 marks each, answer any 6)    ->  usually 1 question
  Section C  (8 marks each, answer any 2)    ->  the CARNOT ENGINE appears
                                                 very frequently
```

**Reminder before you start:** in the Physics paper the first law is written
`dQ = dU + dW` with **W = work done BY the gas**, and every temperature goes in
**kelvin**.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

## Topic: Zeroth law and basic ideas

### Q A1
State the zeroth law of thermodynamics.

**ANSWER:**
```
  If two systems A and B are each separately in thermal equilibrium
  with a third system C, then A and B are in thermal equilibrium
  with each other.

  Its importance: it shows that all three share a common property,
  and that property is called TEMPERATURE.
```

---

### Q A2
Define thermal equilibrium.

**ANSWER:** Two systems are in thermal equilibrium when there is **no net flow of
heat** between them when they are connected through a conducting (diathermic) wall.
They are then at the **same temperature**.

---

### Q A3
What is a thermodynamic system? Name its three types.

**ANSWER:**
```
  A definite quantity of matter, bounded by a surface, that is chosen
  for study.

  OPEN      -  exchanges both energy and matter
  CLOSED    -  exchanges energy only
  ISOLATED  -  exchanges neither energy nor matter
```

---

### Q A4
Distinguish between an adiabatic wall and a diathermic wall.

**ANSWER:**
```
  ADIABATIC WALL   -  does NOT allow heat to pass. (thermos flask)
  DIATHERMIC WALL  -  DOES allow heat to pass.     (thin copper sheet)
```

---

### Q A5
What are thermodynamic state variables? Give two examples of each type.

**ANSWER:**
```
  Quantities that describe the state of a system: P, V, T, U, n.

  EXTENSIVE (depend on the amount)  :  volume, internal energy, mass
  INTENSIVE (do not)                :  pressure, temperature, density
```

---

### Q A6
What is a quasi-static process?

**ANSWER:** A process carried out **infinitely slowly**, so that at every instant the
system is in thermal and mechanical equilibrium with its surroundings. Only such a
process can be drawn as a continuous curve on a P-V diagram.

---

## Topic: First law

### Q A7
State the first law of thermodynamics and give the meaning of each symbol.

**ANSWER:**
```
  The heat supplied to a system is used partly to increase its internal
  energy and partly to do external work.

               dQ  =  dU  +  dW

  dQ = heat supplied TO the system
  dU = increase in internal energy
  dW = work done BY the system
```

---

### Q A8
Which of Q, W and U is a state function? Why does it matter?

**ANSWER:** Only the **internal energy U** is a state function — it depends only on
the initial and final states. Q and W are **path functions**: they change if you take
a different path between the same two states.

---

### Q A9
200 J of heat is given to a system which does 150 J of work. Find the change in
internal energy.

**ANSWER:**
```
  dQ = +200 J ,  dW = +150 J

  dU  =  dQ - dW  =  200 - 150  =  + 50 J
```

---

### Q A10
A gas is compressed and 80 J of work is done on it. If it loses 30 J of heat, find dU.

**ANSWER:**
```
  Work done ON the gas   ->   dW = -80 J
  Heat lost by the gas   ->   dQ = -30 J

  dU  =  dQ - dW  =  -30 - (-80)  =  -30 + 80  =  + 50 J
```

---

## Topic: Processes

### Q A11
Define an isothermal process and write its equation.

**ANSWER:** A process in which the **temperature remains constant**. The gas is kept
in a conducting container and the change is made very slowly.
Equation: `P V = constant`. For it, `dU = 0` and `dQ = dW`.

---

### Q A12
Define an adiabatic process and write its equation.

**ANSWER:** A process in which **no heat enters or leaves** the system (`Q = 0`). The
gas is kept in an insulating container or the change is made very quickly.
Equation: `P V^gamma = constant`, where `gamma = Cp/Cv`.

---

### Q A13
Why does the temperature of a gas fall in an adiabatic expansion?

**ANSWER:**
```
  Q = 0, so the first law gives  dU = - W.
  In an expansion W is positive, so dU is negative.

  The gas does work using its OWN internal energy,
  so the internal energy - and hence the temperature - FALLS.
```

---

### Q A14
Draw an isothermal and an adiabatic curve from the same starting point.
Which is steeper?

**ANSWER:**
```
     P
     ^
     |  \\ *
     |   \\  *
     |    \\    *  *
     |      \\        *  *  *
     |         \\ \\ \\
     +---------------------------> V

     \\ = ADIABATIC (STEEPER)     * = ISOTHERMAL (flatter)

  Slope of isotherm = -P/V ,  slope of adiabat = -gamma P/V.
  Since gamma > 1, the ADIABATIC curve is steeper.
```

---

### Q A15
What is the work done in an isochoric process? Why?

**ANSWER:** **Zero.** Because `W = P dV` and the volume does not change, so `dV = 0`.
On a P-V diagram it is a vertical line, which has no area under it.

---

### Q A16
In a cyclic process, what is the change in internal energy? What follows from it?

**ANSWER:** `dU = 0`, because the system returns to its initial state and U is a state
function. Therefore `dQ = dW` — the net heat absorbed equals the net work done, which
is the **area enclosed by the loop**.

---

### Q A17
What is the specific heat of a gas in (i) an isothermal process (ii) an adiabatic
process?

**ANSWER:**
```
  C  =  dQ / (n dT)

  ISOTHERMAL:  dT = 0 but dQ is not zero  ->  C = INFINITY
  ADIABATIC :  dQ = 0 but dT is not zero  ->  C = ZERO
```

---

## Topic: Specific heats

### Q A18
Why is Cp greater than Cv?

**ANSWER:**
```
  At constant volume no work is done, so ALL the heat raises the
  temperature.

  At constant pressure the gas must ALSO expand and do work P dV,
  so EXTRA heat is needed for the same temperature rise.

  Hence Cp > Cv, and Cp - Cv = R.
```

---

### Q A19
State Mayer's relation. What is the value of gamma for a monatomic gas?

**ANSWER:** `Cp - Cv = R` (per mole). For a monatomic gas
`Cv = 3R/2`, `Cp = 5R/2`, so `gamma = 5/3 = 1.67`.

---

### Q A20
For a gas, Cp = 29.1 J/mol/K. Find Cv and gamma.

**ANSWER:**
```
  Cv    =  Cp - R  =  29.1 - 8.314  =  20.79 J/mol/K
  gamma =  29.1 / 20.79  =  1.40      ->  a DIATOMIC gas
```

---

## Topic: Engines, fridges, second law

### Q A21
Define the efficiency of a heat engine.

**ANSWER:**
```
                 work output        W        Q2
     eta   =   ---------------  =  ----  = 1 - ----
                 heat input         Q1        Q1
```

---

### Q A22
An engine absorbs 800 J and rejects 600 J per cycle. Find its efficiency.

**ANSWER:**
```
  W   =  Q1 - Q2  =  800 - 600  =  200 J
  eta =  W / Q1   =  200 / 800  =  0.25   =   25 %
```

---

### Q A23
A Carnot engine works between 500 K and 300 K. Find its efficiency.

**ANSWER:**
```
              T2           300
  eta = 1 -  ----  =  1 - -----  =  1 - 0.6  =  0.40  =  40 %
              T1           500
```

---

### Q A24
Why can no heat engine be 100% efficient?

**ANSWER:** For `eta = 1` the engine would have to reject no heat (`Q2 = 0`). Without a
sink the working substance cannot return to its initial state, so the cycle cannot be
completed. It would also violate the **Kelvin-Planck** statement of the second law.

---

### Q A25
State the Kelvin-Planck statement of the second law.

**ANSWER:** No process is possible whose **sole result** is the absorption of heat from
a reservoir and the **complete** conversion of that heat into work.

---

### Q A26
State the Clausius statement of the second law.

**ANSWER:** No process is possible whose **sole result** is the transfer of heat from a
**colder** body to a **hotter** body.

---

### Q A27
Can a room be cooled by leaving the refrigerator door open? Explain.

**ANSWER:**
```
  NO - the room gets WARMER.

  The fridge removes Q2 from the room and dumps Q1 = Q2 + W back into
  the SAME room through its coils. The net heat added to the room is W,
  the work done by the compressor. So the room heats up.
```

---

### Q A28
Define the coefficient of performance of a refrigerator.

**ANSWER:**
```
              heat removed from the cold body        Q2         T2
  alpha  =  ----------------------------------  =  ------  =  --------
                     work supplied                    W        T1 - T2
```

---

### Q A29
Give two examples of irreversible processes.

**ANSWER:** Free expansion of a gas into vacuum; conduction of heat across a finite
temperature difference. (Also: friction, diffusion, burning, rusting.)

---

### Q A30
In a free expansion of an ideal gas into vacuum, what happens to Q, W, dU and T?

**ANSWER:**
```
  Q = 0   (insulated)
  W = 0   (expands against nothing)
  dU = 0  ->  for an ideal gas the TEMPERATURE DOES NOT CHANGE.
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

### Q B1
State the first law of thermodynamics and apply it to (i) an isothermal process
(ii) an adiabatic process (iii) an isochoric process (iv) a cyclic process.

**ANSWER:**
```
  FIRST LAW:  dQ = dU + dW
  The heat supplied to a system is used partly to raise its internal
  energy and partly to do external work.

  (i)   ISOTHERMAL   T constant  ->  dU = 0
                     =>   dQ = dW
                     All the heat supplied is converted into work.

  (ii)  ADIABATIC    Q = 0
                     =>   dU = - dW
                     Work is done at the cost of internal energy,
                     so the gas cools when it expands.

  (iii) ISOCHORIC    V constant  ->  dW = P dV = 0
                     =>   dQ = dU
                     All the heat goes into internal energy.

  (iv)  CYCLIC       returns to initial state  ->  dU = 0
                     =>   dQ = dW
                     Net heat absorbed = net work done
                                       = area enclosed by the loop.
```

---

### Q B2
Derive an expression for the work done by a gas, and show that it is the area under
the P-V curve.

**ANSWER:**
```
  Let a gas at pressure P push a piston of area A outwards through
  a small distance dx.

     Force on the piston      F  =  P A
     Small work done          dW =  F dx  =  P A dx

  But A dx = dV, the small increase in volume.

                       dW  =  P dV

  For a change from V1 to V2, add up all such small bits:

                            V2
                   W  =  INT   P dV
                            V1

  GEOMETRIC MEANING
  An integral is an area, so W is the area under the P-V curve
  between V1 and V2, measured down to the V-axis.

     P
     ^
     | *
     |  ///*  *
     | //////////*  *  *
     | ////W//////////////
     +--+-----------------+---> V
       V1                V2

  Expansion (V increases)   ->  W positive
  Compression (V decreases) ->  W negative
```

---

### Q B3
Derive the work done in an isothermal expansion of an ideal gas.

**ANSWER:**
```
  For an isothermal process, T is constant and P V = n R T.

                        V2
              W  =  INT    P dV
                        V1

  Substituting P = n R T / V :

                        V2  n R T                   V2  dV
              W  =  INT    -------- dV  =  n R T INT   ----
                        V1     V                    V1   V

              W  =  n R T [ ln V ] from V1 to V2

                              +-  V2  -+
              W  =  n R T ln  | ------ |
                              +-  V1  -+

                                     +-  V2  -+
                =  2.303 n R T log10 | ------ |
                                     +-  V1  -+

  Since  P1 V1 = P2 V2 ,  this also equals  n R T ln (P1 / P2).

  Also, dU = 0 for an isothermal process, so dQ = W:
  ALL the heat absorbed is converted into work.
```

---

### Q B4
Derive the work done in an adiabatic process.

**ANSWER:**
```
  For an adiabatic process   P V^g = K (constant), so P = K / V^g.

                     V2               V2   dV
             W = INT    P dV  =  K INT    ------
                     V1               V1   V^g

                       +-  V^(1-g)  -+ V2         K
             W  =  K x | ----------- |     =  --------- [ V2^(1-g) - V1^(1-g) ]
                       +-   1 - g    -+ V1      1 - g

  Now write K as P2 V2^g for the first term and P1 V1^g for the second
  (both are equal to K):

                    1
             W = ------- [ P2 V2 - P1 V1 ]
                  1 - g

                    P1 V1  -  P2 V2         n R ( T1 - T2 )
             W  =  ------------------   =  ------------------
                        g  -  1                  g  -  1

  Since Q = 0, the first law gives  dU = - W:
  an adiabatic expansion COOLS the gas, a compression HEATS it.
```

---

### Q B5
Derive Mayer's relation Cp - Cv = R.

**ANSWER:**
```
  Take ONE MOLE of an ideal gas.

  STEP 1 - heat it at CONSTANT VOLUME through dT.
           No work is done (dV = 0), so the first law gives

                 dQ = dU        ->     Cv dT  =  dU          ...(1)

  STEP 2 - heat it at CONSTANT PRESSURE through the SAME dT.
           The internal energy of an ideal gas depends only on T,
           so dU is the SAME as in step 1.

                 dQ = dU + P dV
                 Cp dT  =  Cv dT  +  P dV                    ...(2)

  STEP 3 - for one mole,  P V = R T.
           Differentiating at constant P:

                 P dV  =  R dT                               ...(3)

  STEP 4 - put (3) into (2):

                 Cp dT  =  Cv dT  +  R dT

           Dividing throughout by dT:

                 +-------------------------+
                 |     Cp  -  Cv  =  R     |
                 +-------------------------+

  PHYSICAL MEANING: the extra heat needed at constant pressure is
  exactly the work R dT done by the gas as it expands.
```

---

### Q B6
Compare an isothermal process with an adiabatic process (any four points).

**ANSWER:**
```
  +----+--------------------------+---------------------------+
  |    |      ISOTHERMAL          |       ADIABATIC           |
  +----+--------------------------+---------------------------+
  | 1  | Temperature constant     | No heat exchange, Q = 0   |
  | 2  | Heat CAN flow in or out  | NO heat flows             |
  | 3  | Conducting walls needed  | Insulating walls needed   |
  | 4  | Must be carried out      | Must be carried out       |
  |    | VERY SLOWLY              | VERY QUICKLY              |
  | 5  | P V = constant           | P V^gamma = constant      |
  | 6  | dU = 0 , dQ = dW         | dU = - dW , dQ = 0        |
  | 7  | Curve is FLATTER         | Curve is STEEPER          |
  |    | slope = - P/V            | slope = - gamma P/V       |
  | 8  | Specific heat = infinity | Specific heat = zero      |
  +----+--------------------------+---------------------------+
```

---

### Q B7
Explain a heat engine with a block diagram and define its efficiency.

**ANSWER:**
```
  A heat engine converts heat into work continuously, working in a CYCLE.
  It has three parts: a SOURCE at T1, a WORKING SUBSTANCE, and a SINK
  at T2.

        +---------------------------------+
        |    SOURCE (hot)  at  T1         |
        +---------------------------------+
                     | Q1
                     v
            +-------------------+
            |  WORKING          |-------->  W = Q1 - Q2
            |  SUBSTANCE        |
            +-------------------+
                     | Q2
                     v
        +---------------------------------+
        |    SINK (cold)   at  T2         |
        +---------------------------------+

  In one cycle the system returns to its initial state, so dU = 0 and

             W  =  Q1  -  Q2

                     W       Q1 - Q2             Q2
           eta  =  ------ =  --------   =  1  -  ----
                     Q1         Q1                Q1

  eta is always less than 1 because Q2 can never be made zero.
```

---

### Q B8
Explain the working of a refrigerator with a block diagram and obtain its
coefficient of performance.

**ANSWER:**
```
  A refrigerator is a heat engine run in REVERSE. External work W is
  supplied by a compressor; heat Q2 is extracted from the cold body and
  Q1 = Q2 + W is delivered to the hot body (the room).

        +---------------------------------+
        |   HOT BODY (room)  at  T1       |
        +---------------------------------+
                     ^ Q1 = Q2 + W
                     |
            +-------------------+
      W --->|  WORKING          |
            |  SUBSTANCE        |
            +-------------------+
                     ^ Q2
                     |
        +---------------------------------+
        |  COLD BODY (inside) at  T2      |
        +---------------------------------+

  We measure it by the COEFFICIENT OF PERFORMANCE:

                heat removed         Q2          Q2
      alpha  =  ------------  =   -------  =  ---------
                work supplied        W         Q1 - Q2

  For an ideal (Carnot) refrigerator:

                    T2                       1 - eta
      alpha  =  ----------      and alpha = ---------
                 T1 - T2                       eta

  alpha can be GREATER than 1 - that is why it is not called efficiency.
```

---

### Q B9
State the second law of thermodynamics in both forms and show, in outline, that they
are equivalent.

**ANSWER:**
```
  KELVIN-PLANCK: No process is possible whose SOLE RESULT is the
  absorption of heat from a reservoir and the complete conversion of
  that heat into work.       (=> no 100% efficient engine)

  CLAUSIUS: No process is possible whose SOLE RESULT is the transfer
  of heat from a colder body to a hotter body.
                             (=> heat does not flow uphill by itself)

  EQUIVALENCE (outline):

  (a) Suppose K-P is violated: an engine E turns heat Q from the hot
      reservoir COMPLETELY into work W = Q. Feed that W into a normal
      refrigerator, which then pumps Q2 from the cold body and delivers
      Q2 + W to the hot body. The NET effect is that Q2 has gone from
      COLD to HOT with no external work - CLAUSIUS is violated.

  (b) Suppose Clausius is violated: a device moves Q2 from cold to hot
      with no work. Run a normal engine that takes Q1 from the hot body,
      does work W and rejects exactly Q2 to the cold body. The cold body
      ends unchanged, so the NET effect is heat from ONE reservoir turned
      entirely into work - KELVIN-PLANCK is violated.

  Each violation implies the other, so the two statements are equivalent.
```

---

### Q B10
Distinguish between reversible and irreversible processes. State the conditions for
reversibility.

**ANSWER:**
```
  REVERSIBLE: can be made to retrace its path exactly, so that BOTH the
  system and the surroundings are restored to their original states,
  leaving no change anywhere.

  IRREVERSIBLE: cannot be retraced. All real processes are irreversible.

  CONDITIONS FOR REVERSIBILITY
  1. The process must be QUASI-STATIC (infinitely slow).
  2. There must be NO dissipative forces - no friction, viscosity or
     electrical resistance.
  3. Heat exchange must take place across an infinitesimally small
     temperature difference.
  4. The system must remain in equilibrium at every stage.

  EXAMPLES OF IRREVERSIBLE PROCESSES: free expansion into vacuum,
  heat conduction across a finite temperature difference, friction,
  diffusion of gases, burning, rusting.
```

---

### Q B11
Explain a cyclic process. Show that the net work done equals the area enclosed by
the loop, and give the sign rule.

**ANSWER:**
```
  A CYCLIC PROCESS is one in which the system returns to its INITIAL
  state after a series of changes.

  Because U is a state function and the state is unchanged:

              dU  =  0     =>     dQ  =  dW

  So the net heat absorbed equals the net work done.

  The work in the outward (expansion) part is the area under that curve,
  and the work in the return (compression) part is minus the area under
  it. Subtracting leaves exactly the area ENCLOSED by the loop.

     P                                 P
     ^     ---->                       ^    <----
     |   //////\                       |   \\\\\\/
     |  /  AREA \                      |  / AREA \
     |   \______/                      |   \_____/
     |     <----                       |    ---->
     +--------------> V                +--------------> V
     CLOCKWISE: W POSITIVE             ANTICLOCKWISE: W NEGATIVE
     (a heat ENGINE)                   (a REFRIGERATOR)
```

---

### Q B12
Two moles of an ideal gas expand isothermally at 300 K from 10 litres to 20 litres.
Find the work done, the change in internal energy and the heat absorbed.

**ANSWER:**
```
  n = 2 ,  T = 300 K ,  V1 = 10 L , V2 = 20 L ,  R = 8.314

  W  =  n R T ln (V2 / V1)
     =  2 x 8.314 x 300 x ln 2
     =  4988.4 x 0.693
     =  3457 J        (about 3.46 kJ)

  dU =  0            (isothermal, dT = 0)

  dQ =  dU + W  =  0 + 3457  =  3457 J   absorbed.

  Note: the litres did NOT need converting, because only the RATIO
  V2/V1 appears.
```

---

### Q B13
One mole of a gas with gamma = 5/3 at 27 °C is compressed adiabatically to one-eighth
of its volume. Find the final temperature and the work done.

**ANSWER:**
```
  T1 = 300 K ,  V2 = V1 / 8 ,  gamma - 1 = 2/3

  ADIABATIC:      T1 V1^(g-1)  =  T2 V2^(g-1)

                       +- V1 -+ (2/3)
             T2 = T1 x | ---- |         =  300 x (8)^(2/3)
                       +- V2 -+

             (8)^(2/3) = (2^3)^(2/3) = 2^2 = 4

             T2 = 300 x 4  =  1200 K

  WORK:        n R (T1 - T2)      1 x 8.314 x (300 - 1200)
        W  =  ---------------  =  ------------------------
                 gamma - 1               2/3

              8.314 x (-900)      -7482.6
           = ----------------  =  ---------  =  - 11224 J
                  0.6667            0.6667

  W is negative, so 11224 J of work was done ON the gas.
  Check: dU = -W = +11224 J, the gas heated 300 K -> 1200 K.  Consistent.
```

---

### Q B14
A Carnot engine has an efficiency of 1/6. When the sink temperature is lowered by
65 K its efficiency doubles. Find the temperatures of the source and the sink.

**ANSWER:**
```
  CASE 1:   1/6  =  1 - T2 / T1                          ...(i)
  CASE 2:   1/3  =  1 - (T2 - 65) / T1                   ...(ii)

  Subtract (i) from (ii):

       1/3 - 1/6  =  [ T2 - (T2 - 65) ] / T1

           1/6    =  65 / T1

           T1     =  390 K

  From (i):   T2 / T1 = 1 - 1/6 = 5/6

              T2 = (5/6) x 390  =  325 K

  SOURCE = 390 K (117 C) ,   SINK = 325 K (52 C)

  Check: eta = 1 - 325/390 = 1 - 0.8333 = 0.1667 = 1/6.   Correct.
```

---

### Q B15
A Carnot engine works between 627 °C and 27 °C and absorbs 3 x 10^6 J of heat per
cycle. Find its efficiency, the work done and the heat rejected.

**ANSWER:**
```
  T1 = 627 + 273 = 900 K ,   T2 = 27 + 273 = 300 K

              300           1        2
  eta = 1 -  -----  =  1 - ---  =  ----  =  0.667  =  66.7 %
              900           3        3

  W   =  eta x Q1  =  (2/3) x 3 x 10^6  =  2 x 10^6  J

  Q2  =  Q1 - W    =  3 x 10^6 - 2 x 10^6  =  1 x 10^6  J

  Check: Q2/Q1 = 1/3 = T2/T1 = 300/900.    Correct.
```

---

### Q B16
Find the net work done by the gas in the cycle shown, and state the net heat absorbed.

```
     P (x 10^5 Pa)
     ^
   3 |   A-----------B
     |   |           |
     |   |           |
   1 |   D-----------C
     |   |           |
     +---+-----------+---------> V (x 10^-3 m^3)
         2           6
```
(The gas goes A -> B -> C -> D -> A.)

**ANSWER:**
```
  A -> B   isobaric at 3 x 10^5 Pa , V: 2e-3 -> 6e-3
           W = 3e5 x (6e-3 - 2e-3) = 3e5 x 4e-3 = + 1200 J

  B -> C   isochoric (V = 6e-3 fixed)            W = 0

  C -> D   isobaric at 1 x 10^5 Pa , V: 6e-3 -> 2e-3
           W = 1e5 x (2e-3 - 6e-3) = 1e5 x (-4e-3) = - 400 J

  D -> A   isochoric (V = 2e-3 fixed)            W = 0

  NET  W  =  1200 + 0 - 400 + 0  =  + 800 J

  SHORTCUT (area of the rectangle):
       (3e5 - 1e5) x (6e-3 - 2e-3) = 2e5 x 4e-3 = 800 J
       The loop runs CLOCKWISE, so W is POSITIVE.

  Cyclic  ->  dU = 0  ->  net heat absorbed  Q = W = + 800 J
```

---

# ===============================================================
# SECTION C — LONG ANSWER (8 marks)
# ===============================================================

### Q C1  *** THE MOST FREQUENTLY ASKED LONG ANSWER IN THIS CHAPTER ***
Describe the Carnot cycle. Draw its P-V diagram and derive an expression for the
efficiency of a Carnot engine.

**MODEL ANSWER**

```
  MARK SPLIT (guide):
     Parts of the engine ....................... 1
     P-V diagram, correctly labelled ........... 2
     The four steps with Q1, W2, Q2, W4 ........ 3
     Derivation of eta = 1 - T2/T1 ............. 2
                                          TOTAL  8
```

**1. Parts of a Carnot engine**
```
  (a) SOURCE  - an infinite hot reservoir at T1 with a perfectly
                conducting top.
  (b) SINK    - an infinite cold reservoir at T2, also perfectly
                conducting.
  (c) INSULATING STAND - used for the adiabatic steps.
  (d) CYLINDER - insulating walls, perfectly conducting base, fitted
                with a frictionless, insulating piston.
  (e) WORKING SUBSTANCE - one mole of an ideal gas.
```

**2. The P-V diagram**
```
     P
     ^
  P1 |  A
     |  | \
     |  |   \                 A -> B  isothermal expansion at T1
  P2 |  |     B               B -> C  adiabatic expansion  T1 -> T2
     |  |     |\              C -> D  isothermal compression at T2
     |  |     |  \            D -> A  adiabatic compression T2 -> T1
     |  |     |    \
  P4 |  D     |      \        The area A-B-C-D is the NET WORK
     |    \   |        \      done per cycle. The loop is CLOCKWISE.
     |      \ |          \
  P3 |        C            \
     +---+-----+-----+------+---------> V
        V1    V2    V4     V3
```

**3. The four steps**
```
  STEP 1  A(P1,V1,T1) -> B(P2,V2,T1)   ISOTHERMAL EXPANSION on the SOURCE
          dU = 0, so heat absorbed
                    Q1  =  W1  =  R T1 ln ( V2 / V1 )

  STEP 2  B(P2,V2,T1) -> C(P3,V3,T2)   ADIABATIC EXPANSION on the STAND
          Q = 0, gas cools from T1 to T2
                    W2  =  R ( T1 - T2 ) / ( gamma - 1 )

  STEP 3  C(P3,V3,T2) -> D(P4,V4,T2)   ISOTHERMAL COMPRESSION on the SINK
          dU = 0, so heat rejected
                    Q2  =  R T2 ln ( V3 / V4 )
                    W3  =  - Q2

  STEP 4  D(P4,V4,T2) -> A(P1,V1,T1)   ADIABATIC COMPRESSION on the STAND
          Q = 0, gas warms back from T2 to T1
                    W4  =  - R ( T1 - T2 ) / ( gamma - 1 )  =  - W2
```

**4. Derivation of the efficiency**
```
  NET WORK per cycle:
        W = W1 + W2 + W3 + W4 = W1 - Q2   (W4 cancels W2)
          = Q1 - Q2

                W       Q1 - Q2              Q2
      eta  =  ----- =  ---------   =   1  - ----          ...(1)
                Q1        Q1                 Q1

  Substituting the two isothermal heats:

        Q2       T2 ln ( V3 / V4 )
       ----  =  ---------------------                     ...(2)
        Q1       T1 ln ( V2 / V1 )

  Apply the adiabatic relation T V^(g-1) = constant to steps 2 and 4:

        B -> C :   T1 V2^(g-1)  =  T2 V3^(g-1)
        D -> A :   T1 V1^(g-1)  =  T2 V4^(g-1)

  Dividing the first by the second:

              +- V2 -+ (g-1)      +- V3 -+ (g-1)          V2      V3
              | ---- |        =   | ---- |          ->   ---- =  ----
              +- V1 -+            +- V4 -+                V1      V4

  Hence  ln(V2/V1) = ln(V3/V4) , and the logarithms in (2) CANCEL:

                    Q2        T2
                   ----  =  ------
                    Q1        T1

  Substituting into (1):

              +----------------------------------+
              |                     T2           |
              |      eta   =   1 - -----         |
              |                     T1           |
              +----------------------------------+

  CONCLUSIONS
  1. The efficiency depends ONLY on T1 and T2, not on the working
     substance.
  2. eta = 1 only if T2 = 0 K, which is unattainable. So no engine
     is 100% efficient.
  3. eta increases when T1 is raised or T2 is lowered.
  4. If T1 = T2, eta = 0: a temperature DIFFERENCE is essential.
```

---

### Q C2
State and explain the first law of thermodynamics. Apply it to the four
thermodynamic processes, deriving the work done in each, and draw the P-V diagram of
each.

**MODEL ANSWER (skeleton with the mark split)**

```
  MARK SPLIT (guide):
     Statement of the first law + meaning of symbols ....... 1
     W = INT P dV and the area interpretation .............. 1
     ISOTHERMAL: diagram + derivation of W ................. 2
     ADIABATIC : diagram + derivation of W ................. 2
     ISOBARIC and ISOCHORIC: diagrams + W .................. 1
     Summary table ........................................ 1
                                                     TOTAL  8
```

```
  1.  FIRST LAW.   dQ = dU + dW.  Heat supplied to a system is used
      partly to increase its internal energy and partly to do external
      work. It is the law of conservation of energy including heat.
      (Here W is the work done BY the gas.)

  2.  WORK.   dW = P dV,  W = INT(V1 to V2) P dV = area under the P-V
      curve.

  3.  ISOTHERMAL (T constant, PV = const)
         P                        W = n R T ln(V2/V1)
         ^ *                      dU = 0 ,  dQ = W
         |  *  *
         |      *  *  *
         +-------------> V

      Derivation: W = INT (nRT/V) dV = nRT ln(V2/V1).

  4.  ADIABATIC (Q = 0, PV^g = const)
         P                        W = (P1V1 - P2V2)/(g - 1)
         ^ \\                       = nR(T1 - T2)/(g - 1)
         |  \\                    dU = -W , dQ = 0
         |    \\ \\
         +-------------> V

      Derivation: W = INT (K/V^g) dV = K[V^(1-g)]/(1-g) evaluated
      between the limits, then K = P1V1^g = P2V2^g gives the result.

  5.  ISOBARIC (P constant)
         P                        W = P (V2 - V1) = nR(T2 - T1)
         ^                        dU = n Cv dT , dQ = n Cp dT
         | ====== (horizontal)
         +-------------> V

  6.  ISOCHORIC (V constant)
         P                        W = 0
         ^   |                    dQ = dU = n Cv dT
         |   | (vertical)
         +-------------> V

  7.  SUMMARY TABLE  (reproduce the four-row comparison table).
```

---

### Q C3
Explain the working of a heat engine and a refrigerator with block diagrams. State
both forms of the second law of thermodynamics and explain why they forbid a perfect
engine and a perfect refrigerator.

**MODEL ANSWER (skeleton with the mark split)**

```
  MARK SPLIT (guide):
     Heat engine: block diagram + explanation ......... 2
     Efficiency eta = 1 - Q2/Q1 ....................... 1
     Refrigerator: block diagram + explanation ........ 2
     Coefficient of performance ....................... 1
     Kelvin-Planck and Clausius statements ............ 1
     Why a perfect engine / fridge is impossible ...... 1
                                               TOTAL   8
```

```
  1.  HEAT ENGINE - draw the block diagram (source T1 -> Q1 -> working
      substance -> W, and Q2 -> sink T2). It works in a cycle, so
      dU = 0 and W = Q1 - Q2, giving eta = W/Q1 = 1 - Q2/Q1.

  2.  REFRIGERATOR - draw the reversed block diagram (Q2 taken from the
      cold body, W supplied by the compressor, Q1 = Q2 + W delivered to
      the room). Its measure of merit is
              alpha = Q2 / W = Q2 / (Q1 - Q2) = T2 / (T1 - T2).

  3.  SECOND LAW
      KELVIN-PLANCK: no process is possible whose sole result is the
      absorption of heat from a reservoir and its complete conversion
      into work.
      CLAUSIUS: no process is possible whose sole result is the
      transfer of heat from a colder to a hotter body.

  4.  PERFECT ENGINE IMPOSSIBLE. eta = 1 needs Q2 = 0. Then heat from a
      single reservoir would be completely turned into work, violating
      Kelvin-Planck; also the cycle could not be completed without a
      sink.

  5.  PERFECT REFRIGERATOR IMPOSSIBLE. alpha = infinity needs W = 0.
      Then heat would flow from cold to hot with no work at all,
      violating Clausius.

  6.  The two statements are EQUIVALENT: violating either one allows a
      machine to be built that violates the other.
```

---

### Q C4
What is a Carnot engine? State and explain Carnot's theorem. A Carnot engine working
between 500 K and 400 K absorbs 1000 J per cycle. Find its efficiency, the work done
and the heat rejected. What would the efficiency become if the sink were at 300 K?

**ANSWER**

```
  PART 1 - THE CARNOT ENGINE
  An ideal, completely reversible heat engine working between two
  temperatures T1 (source) and T2 (sink) through a cycle of
  two isothermal and two adiabatic steps. Its efficiency is the
  MAXIMUM possible between those two temperatures:
             eta = 1 - T2/T1.

  PART 2 - CARNOT'S THEOREM
  (a) No engine working between two given temperatures can be more
      efficient than a reversible (Carnot) engine working between the
      same two temperatures.
  (b) The efficiency of a Carnot engine is INDEPENDENT of the nature of
      the working substance.

  Proof idea: suppose an engine X had eta(X) > eta(Carnot). Use X to
  drive the Carnot engine backwards as a refrigerator between the same
  reservoirs. The combined machine would transfer heat from the cold to
  the hot reservoir with NO net external work, violating the Clausius
  statement of the second law. So no such X can exist.

  PART 3 - NUMERICAL
  T1 = 500 K , T2 = 400 K , Q1 = 1000 J

                400
    eta = 1 -  -----  =  1 - 0.8  =  0.20   =   20 %
                500

    W   = eta x Q1  =  0.20 x 1000  =  200 J

    Q2  = Q1 - W    =  1000 - 200   =  800 J

    Check:  Q2/Q1 = 800/1000 = 0.8 = T2/T1 = 400/500.   Correct.

  PART 4 - NEW SINK AT 300 K
                300
    eta' = 1 - -----  =  1 - 0.6  =  0.40  =  40 %

    The efficiency DOUBLES. Lowering the sink temperature raises the
    efficiency, but T2 = 0 K is unattainable, so eta can never reach 1.
```

---

### Q C5
Define the two molar specific heats of a gas. Explain why Cp is greater than Cv and
derive Mayer's relation. Hence find Cp, Cv and gamma for a monatomic and a diatomic
gas.

**ANSWER**

```
  MARK SPLIT (guide):
     Definitions of Cp and Cv ...................... 2
     Why Cp > Cv .................................. 1
     Derivation of Cp - Cv = R .................... 3
     Values for monatomic and diatomic gases ...... 2
                                            TOTAL   8

  1.  DEFINITIONS
      Cv = the heat required to raise the temperature of 1 mole of gas
           through 1 K at CONSTANT VOLUME.
      Cp = the heat required to raise the temperature of 1 mole of gas
           through 1 K at CONSTANT PRESSURE.

  2.  WHY Cp > Cv
      At constant volume the gas does no work, so all the heat raises
      the temperature. At constant pressure the gas must also expand
      and do work P dV, so extra heat is needed for the same
      temperature rise. Hence Cp > Cv.

  3.  DERIVATION (for 1 mole)
      Constant volume:    dQ = dU        ->  Cv dT = dU
      Constant pressure:  dQ = dU + P dV ->  Cp dT = Cv dT + P dV
      Ideal gas, 1 mole:  P V = R T      ->  P dV  = R dT  (P constant)
      Therefore           Cp dT = Cv dT + R dT

                          +-------------------+
                          |   Cp - Cv  =  R   |
                          +-------------------+

  4.  VALUES
      MONATOMIC (f = 3):  Cv = 3R/2 = 12.47 , Cp = 5R/2 = 20.79 ,
                          gamma = 5/3 = 1.67      (He, Ne, Ar)

      DIATOMIC  (f = 5):  Cv = 5R/2 = 20.79 , Cp = 7R/2 = 29.10 ,
                          gamma = 7/5 = 1.40      (H2, O2, N2)

      In general  Cv = (f/2)R ,  Cp = (f/2 + 1)R ,  gamma = 1 + 2/f.
```

---

# WHICH QUESTIONS REPEAT MOST

```
  +------+-------------------------------------------+---------+-----------+
  | RANK |  QUESTION TYPE                            | SECTION |  CHANCE   |
  +------+-------------------------------------------+---------+-----------+
  |  1   | Carnot cycle: 4 steps, P-V diagram and    |    C    |  VERY     |
  |      | derivation of eta = 1 - T2/T1             |         |  HIGH     |
  +------+-------------------------------------------+---------+-----------+
  |  2   | Derive Mayer's relation  Cp - Cv = R      |    B    |  HIGH     |
  +------+-------------------------------------------+---------+-----------+
  |  3   | First law + its application to the four   |    B    |  HIGH     |
  |      | processes                                 |         |           |
  +------+-------------------------------------------+---------+-----------+
  |  4   | Second law - both statements              |   A/B   |  HIGH     |
  +------+-------------------------------------------+---------+-----------+
  |  5   | Refrigerator: block diagram + COP         |    B    |  HIGH     |
  +------+-------------------------------------------+---------+-----------+
  |  6   | Isothermal vs adiabatic comparison        |    B    |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  |  7   | Small Carnot efficiency numerical         |    A    |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  |  8   | Why is Cp greater than Cv?                |    A    |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  |  9   | Can a room be cooled by an open fridge?   |    A    |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  | 10   | State the zeroth law / define temperature |    A    |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  | 11   | Work done in an isothermal expansion      |    B    |  MEDIUM   |
  |      | (derivation or numerical)                 |         |           |
  +------+-------------------------------------------+---------+-----------+
  | 12   | Reversible vs irreversible processes      |    B    |  LOWER    |
  +------+-------------------------------------------+---------+-----------+
  | 13   | Cyclic process / area of the loop         |   A/B   |  LOWER    |
  +------+-------------------------------------------+---------+-----------+
```

**Strategy:** if you learn only ONE thing in this chapter, learn the Carnot engine
answer (Q C1). It is worth 8 marks on its own and it also answers half of Section A
and Section B along the way.
