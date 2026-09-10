# Current Electricity — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — DEFINE A BASIC QUANTITY                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define electric current / current density / drift velocity /
            relaxation time / mobility / resistivity / conductivity /
            emf / terminal potential difference / internal resistance."
  METHOD    1. Give the DEFINITION in one clean sentence.
            2. Write the DEFINING FORMULA.
            3. Write the SI UNIT.
  TRAP      Writing only the formula. The examiner wants the sentence
            AND the unit. Three parts, three chances to score.
```

```
  PATTERN 2 — DERIVE  I = n A e vd                                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the current in a conductor in terms
            of drift velocity." / "Show that I = n A e vd."
  METHOD    1. Define n, A, vd, e.
            2. DRAW the block of length  vd t  with area A.
            3. Volume = A vd t .
            4. Number of electrons = n A vd t .
            5. Charge q = n A vd t e .
            6. I = q/t = n A e vd .
            7. Add  J = I/A = n e vd  as a bonus line.
  TRAP      Forgetting the diagram. It is worth a mark on its own.
  NOTE      *** ONE OF THE TWO MOST-ASKED 4-MARK DERIVATIONS ***
```

```
  PATTERN 3 — DERIVE  rho = m / (n e^2 tau)                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Obtain an expression for the resistivity of a conductor in
            terms of relaxation time." / "Deduce Ohm's law from the
            free-electron model."
  METHOD    1. a = e E / m , so  vd = e E tau / m .
            2. Put this into  I = n A e vd .
            3. Replace E by V / L .
            4. Compare with V = I R  ->  R = m L / (n e^2 tau A) .
            5. Compare with R = rho L / A  ->  rho = m / (n e^2 tau) .
            6. Add  sigma = n e^2 tau / m .
  TRAP      Skipping step 3. Without E = V/L you can never reach V = IR.
  NOTE      *** THE OTHER MOST-ASKED 4-MARK DERIVATION ***
```

```
  PATTERN 4 — DRIFT-VELOCITY NUMERICAL                            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wire of area ... carries a current of ... Find the drift
            velocity."  (n is always supplied.)
  METHOD    1. Convert the area to m^2 .   1 mm^2 = 10^-6 m^2
            2. vd = I / (n A e) .
            3. Do the powers of ten first, then the digits.
  TRAP      Using mm^2 directly. And forgetting that the answer must come
            out around 10^-4 m/s -- if it does not, you slipped.
```

```
  PATTERN 5 — OHM'S LAW: STATEMENT, GRAPHS AND LIMITATIONS        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Ohm's law." / "Distinguish ohmic and non-ohmic
            conductors." / "State the limitations of Ohm's law."
  METHOD    1. Statement:  I is proportional to V at constant temperature.
            2. DRAW both V-I graphs: a straight line through the origin
               for ohmic, a curve for non-ohmic.
            3. Examples: ohmic = copper, nichrome.
               Non-ohmic = diode, transistor, thermistor, electrolyte,
               discharge tube.
            4. Limitations: constant temperature only; fails for
               semiconductors, electrolytes and gases; some materials
               give a curved graph; a diode depends on the DIRECTION
               of V; it is not a fundamental law.
  TRAP      Drawing the ohmic graph NOT through the origin.
```

```
  PATTERN 6 — RESISTANCE FROM DIMENSIONS  ( R = rho L / A )       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the resistance of a wire of length ... and diameter ..."
            / "Find the resistivity of the material."
  METHOD    1. If the DIAMETER is given, halve it to get the radius.
            2. A = pi r^2 .
            3. R = rho L / A , or rho = R A / L .
  TRAP      Using the diameter as the radius. That makes the answer four
            times too small. Read the word "diameter" twice.
```

```
  PATTERN 7 — STRETCHING / CUTTING A WIRE                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wire is stretched to n times its length ..." /
            "... drawn so that its radius becomes half ..." /
            "... cut into n equal pieces joined in parallel."
  METHOD    Volume is CONSTANT, so:
                 length becomes n times     ->   R' = n^2 R
                 radius becomes 1/n times   ->   R' = n^4 R
                 cut into n pieces          ->   each = R / n
                 those n pieces in parallel ->   R / n^2
  TRAP      Answering n R instead of n^2 R. The wire also got thinner.
```

```
  PATTERN 8 — TEMPERATURE EFFECT / TEMPERATURE COEFFICIENT        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The resistance of a wire is ... at ... deg C and ... at ...
            deg C. Find alpha." / "Why does the resistance of a metal
            increase but that of a semiconductor decrease on heating?"
  METHOD    1. R2 = R1 [ 1 + alpha (t2 - t1) ] .
            2. alpha = (R2 - R1) / [ R1 (t2 - t1) ] .
            3. For the theory part, use rho = m/(n e^2 tau):
                  metal        -> tau falls, n unchanged -> rho RISES
                  semiconductor-> n rises hugely          -> rho FALLS
  TRAP      Using (t2 - t1) wrongly when the first temperature is not
            0 degree C. Use the two-temperature form, not R0 (1 + alpha t).
```

```
  PATTERN 9 — RESISTOR COLOUR CODE (both directions)              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A resistor has the bands ... Find its value." OR
            "Give the colour bands of a 4.7 kilo-ohm ± 5 % resistor."
  METHOD    Reading:   value = (digit1 digit2) x 10^(band3)  ± band4 %
            Writing:   first put the value in the form (2 digits) x 10^k
  TRAP      Forgetting the tolerance band. Gold = ± 5 %, Silver = ± 10 %,
            no band = ± 20 %.
  HELP      Full table in section 5 of 02-formulae.md.
```

```
  PATTERN 10 — SERIES AND PARALLEL DERIVATIONS                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the expression for the equivalent resistance of
            resistors in series and in parallel."
  METHOD    SERIES     : same I ; V = V1 + V2 + V3 ; divide by I
                         ->  Rs = R1 + R2 + R3
            PARALLEL   : same V ; I = I1 + I2 + I3 ; divide by V
                         ->  1/Rp = 1/R1 + 1/R2 + 1/R3
            DRAW both circuits.
  TRAP      Not stating WHY (same current in series, same voltage in
            parallel). That single sentence carries the logic mark.
```

```
  PATTERN 11 — NETWORK REDUCTION NUMERICAL                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   A diagram of several resistors with a battery; "find the
            equivalent resistance / the total current / the current in
            each branch."
  METHOD    1. Redraw the network cleanly.
            2. Work from the FAR END back towards the battery.
            3. Reduce every obvious parallel pair first, then series.
            4. Find the total current from the battery.
            5. Work forwards again to split the current or voltage.
  CHECK     Parallel answer must be SMALLER than the smallest resistor.
            Series answer must be BIGGER than the biggest resistor.
  TRAP      Treating two resistors as parallel when they do not share
            BOTH end points.
```

```
  PATTERN 12 — EMF, TERMINAL P.D. AND INTERNAL RESISTANCE         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A cell of emf ... and internal resistance ... is connected
            to ... Find the current and the terminal voltage." /
            "Define emf and terminal p.d. and relate them."
  METHOD    1. I = E / (R + r) .
            2. V = E - I r .
            3. Cross-check with V = I R .
            4. If r is wanted:  r = (E - V) R / V .
  TRAP      Using E = I R and forgetting r. Also: V must come out LESS
            than E. If it does not, you made a sign error.
```

```
  PATTERN 13 — GROUPING OF CELLS                                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "n cells each of emf E and internal resistance r are joined
            in series / parallel / m rows of n. Find the current." /
            "When is series grouping preferred?"
  METHOD    series   :  I = n E / (R + n r)      use when R >> r
            parallel :  I = m E / (m R + r)      use when R << r
            mixed    :  I = m n E / (m R + n r)
            maximum current in mixed grouping when  R = n r / m
  TRAP      Thinking the emf adds in a PARALLEL group. It does not --
            only the internal resistance falls.
```

```
  PATTERN 14 — CELLS IN OPPOSITION                                2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two cells are joined with their positive terminals facing
            each other ..." / "m of the n cells are reversed."
  METHOD    1. Net emf = E1 - E2  (or (n - 2m) E for m reversed cells).
            2. Internal resistances still ADD.
            3. I = net emf / total resistance.
  TRAP      Each reversed cell costs 2E, not E.
```

```
  PATTERN 15 — STATE KIRCHHOFF'S LAWS                             2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Kirchhoff's laws." / "On what conservation principles
            are they based?"
  METHOD    1. JUNCTION law + a junction diagram
                  -> conservation of CHARGE
            2. LOOP law  SUM(IR) = SUM(E)
                  -> conservation of ENERGY
            3. Write the SIGN CONVENTION as a separate block.
  TRAP      Naming the conservation laws the wrong way round.
            Junction = charge. Loop = energy.
```

```
  PATTERN 16 — SOLVE A TWO-LOOP CIRCUIT WITH KIRCHHOFF            4 marks
  ------------------------------------------------------------------------
  TRIGGER   A circuit with TWO cells that is neither series nor parallel;
            "find the current in each branch / in the ... ohm resistor."
  METHOD    1. Mark and NAME a current in each branch with an arrow.
            2. Use the junction rule at once:  I3 = I1 + I2 .
               (Never carry three unknowns.)
            3. Write ONE loop equation per remaining unknown.
            4. Solve the simultaneous equations.
            5. SUBSTITUTE BACK into both loop equations to check.
  TRAP      A negative answer is NOT a mistake -- it only means the real
            current flows the other way. Say so in one line.
```

```
  PATTERN 17 — WHEATSTONE BRIDGE: FULL DERIVATION                 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Kirchhoff's laws and use them to obtain the balance
            condition of a Wheatstone bridge." / "Deduce the condition
            for the balance of a Wheatstone bridge."
  METHOD    1. State both Kirchhoff laws + sign convention.
            2. DRAW the bridge ABCD with P, Q, R, S, the galvanometer
               between B and D and the cell between A and C. LABEL it.
            3. State that at balance Ig = 0, so B and D are at the same
               potential, and the current through Q is I1, through S is I2.
            4. Loop A B D A :   - I1 P - Ig G + I2 R = 0 -> I1 P = I2 R
            5. Loop B C D B :   - I1 Q + I2 S + Ig G = 0 -> I1 Q = I2 S
            6. Divide  ->  P / Q  =  R / S .
            7. Add: S = Q R / P , and the "why it is accurate" note.
  TRAP      Never writing the line "at balance Ig = 0". The whole proof
            hangs on it and the examiner looks for it first.
  NOTE      *** THE HIGHEST-VALUE ANSWER IN THIS CHAPTER ***
```

```
  PATTERN 18 — WHEATSTONE BRIDGE NUMERICAL                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "In a balanced Wheatstone bridge P = ..., Q = ..., R = ...
            Find S." / "Is this bridge balanced?"
  METHOD    P / Q = R / S     ->     S = Q R / P
            To TEST balance, just check whether P S = Q R .
  TRAP      In a multiple-choice network question, a BALANCED bridge means
            the middle resistor carries no current -- delete it and the
            network becomes simple series-parallel.
```

```
  PATTERN 19 — METRE BRIDGE: DESCRIPTION AND THEORY               8 marks
  ------------------------------------------------------------------------
  TRIGGER   "With a neat diagram, describe how a metre bridge is used to
            find the resistance / the resistivity of a wire."
  METHOD    1. State that it is a practical Wheatstone bridge.
            2. DRAW: two gaps (known R, unknown S), the one-metre wire AC,
               the jockey, the galvanometer, the cell and the key.
            3. Working: slide the jockey to the null point at length l.
            4. Theory: the wire resistances are rho' l and rho'(100 - l);
               rho' cancels; hence  S = R (100 - l) / l .
            5. Then rho = S pi r^2 / L for the specimen wire.
            6. List the PRECAUTIONS (uniform wire, tight connections,
               tap the jockey, avoid heating, balance near the middle).
  TRAP      Measuring l from the wrong end. l is measured from the end
            where the KNOWN resistance R is connected.
```

```
  PATTERN 20 — METRE BRIDGE NUMERICAL                             2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The balance point is at ... cm. Find the unknown resistance."
            / "Where does the balance point shift if the gaps are
            interchanged?"
  METHOD    1. S = R (100 - l) / l .
            2. On interchanging the gaps, the new balance length is
               simply  100 - l .
  TRAP      "40 cm from the RIGHT end" means l = 60 cm from the left.
```

```
  PATTERN 21 — POTENTIOMETER: PRINCIPLE AND COMPARISON OF EMFs    8 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the principle of a potentiometer and explain how the
            emfs of two cells are compared."
  METHOD    1. Principle: with a steady current in a uniform wire,
               V is proportional to l ; potential gradient k = V / L .
            2. DRAW the circuit: driver cell + key + rheostat across AB,
               the two cells through a two-way key, the galvanometer and
               the jockey. All POSITIVE terminals joined to end A.
            3. Balance for cell 1 at l1 :  E1 = k l1
               Balance for cell 2 at l2 :  E2 = k l2
            4. Divide:  E1 / E2 = l1 / l2 .
            5. Add the "why better than a voltmeter" paragraph.
  TRAP      Not stating that the driver emf must EXCEED the emf being
            measured, and not joining both positive terminals to the
            same end.
  NOTE      *** SECOND-HIGHEST-VALUE ANSWER IN THIS CHAPTER ***
```

```
  PATTERN 22 — POTENTIOMETER: INTERNAL RESISTANCE OF A CELL       8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain how a potentiometer is used to find the internal
            resistance of a cell. Derive the formula."
  METHOD    1. DRAW the circuit with the resistance box R and key K1
               connected ACROSS the test cell.
            2. K1 OPEN  -> no current from the cell -> balances against
               E at length l1 .
            3. K1 CLOSED -> cell drives current through R -> balances
               against V at length l2 .
            4. E / V = l1 / l2 .
            5. r = (E - V) R / V = R (l1 - l2) / l2 .
  TRAP      Swapping l1 and l2. l1 (key open) is ALWAYS the longer one,
            so r comes out positive.
```

```
  PATTERN 23 — WHY A POTENTIOMETER BEATS A VOLTMETER              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is a potentiometer preferred to a voltmeter for
            measuring emf?" / "What is the advantage of a null method?"
  METHOD    1. A voltmeter has finite resistance -> it draws current ->
               it reads V = E - I r , which is LESS than E.
            2. A potentiometer at balance draws ZERO current -> I r = 0
               -> it reads the TRUE emf.
            3. Conclude: it acts as a voltmeter of INFINITE resistance.
  TRAP      Saying only "it is more accurate". State the ZERO-CURRENT
            reason -- that is where the mark is.
```

```
  PATTERN 24 — POTENTIOMETER NUMERICAL                            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The potential gradient is ..." / "A cell balances at ... cm."
  METHOD    1. k = V / L (watch the units: V/m or V/cm, stay consistent).
            2. E = k l  for a single cell.
            3. E1 / E2 = l1 / l2  for two cells.
            4. r = R (l1 - l2) / l2  for internal resistance.
  TRAP      Mixing cm and m in the same calculation. Convert first.
```

```
  PATTERN 25 — POWER AND RATED APPLIANCES                         2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A bulb is marked 60 W, 240 V. Find its resistance / the
            current it draws."
  METHOD    R = V^2 / P        and        I = P / V
            For combined bulbs of the same rated voltage:
               parallel  P = P1 + P2
               series    P = P1 P2 / (P1 + P2)
  TRAP      Using V = I R first. Always start from the rating.
```

```
  PATTERN 26 — WHICH BULB GLOWS BRIGHTER?                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two bulbs of 60 W and 100 W are connected in series /
            parallel. Which glows brighter?"
  METHOD    R = V^2 / P , so a LOWER wattage means a HIGHER resistance.
               SERIES   -> same I -> P = I^2 R -> the LOWER-wattage
                           bulb is BRIGHTER.
               PARALLEL -> same V -> P = V^2/R -> the HIGHER-wattage
                           bulb is BRIGHTER.
  TRAP      Answering "the 100 W bulb" automatically. In SERIES it is the
            60 W bulb. Read the word series/parallel first.
```

```
  PATTERN 27 — KILOWATT-HOUR / ELECTRICITY BILL                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the number of units consumed / the monthly bill."
  METHOD    1. Units (kWh) = (total watt x hours) / 1000 .
            2. Cost = units x rate.
            3. If joules are wanted: 1 kWh = 3.6 x 10^6 J .
  TRAP      Forgetting to multiply by the NUMBER of appliances and by the
            number of DAYS.
```

```
  PATTERN 28 — MAXIMUM POWER TRANSFER                             2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "For what value of R is the power delivered maximum?" /
            "Find the maximum power delivered by the cell."
  METHOD    1. P = E^2 R / (R + r)^2 .
            2. dP/dR = 0  gives  R = r .
            3. P(max) = E^2 / (4 r) .
            4. State that the efficiency is then only 50 %.
  TRAP      Writing P(max) = E^2 / r . The 4 is not optional.
```

```
  PATTERN 29 — JOULE'S LAW AND THE HEATING EFFECT                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Joule's law of heating." / "Find the heat produced in
            ... minutes." / "Why is a fuse wire made of a low-melting
            alloy?"
  METHOD    1. H = I^2 R t joule ; in calories divide by 4.18 .
            2. Convert minutes to SECONDS first.
            3. The three proportionalities: H is proportional to I^2, R
               and t separately.
            4. Fuse: low melting point + high resistivity, in SERIES.
  TRAP      Leaving the time in minutes. Always convert to seconds.
```

```
  PATTERN 30 — CONCEPTUAL "WHY" QUESTION                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why does a bulb light instantly although drift velocity is
            tiny?" / "Why are alloys used for standard resistances?" /
            "Why is the potentiometer wire made of manganin?" /
            "Why does the resistance of a metal rise on heating?"
  METHOD    Answer in ONE reason sentence, then ONE supporting sentence.
            Keep it to two lines; extra padding earns nothing.
  TRAP      Writing a paragraph of vague words. The examiner is looking
            for one specific keyword: "electric field travels at the
            speed of light", "temperature coefficient nearly zero",
            "relaxation time decreases", "draws no current".
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +-------------------------------------------------------------+---------+
  |  QUESTION STEM                                              | PATTERN |
  +-------------------------------------------------------------+---------+
  |  "State Kirchhoff's laws and derive the balance condition   |   17    |
  |   of a Wheatstone bridge"                                   |         |
  |  "Show that I = n A e vd"                                   |    2    |
  |  "Obtain rho = m / (n e^2 tau)"                             |    3    |
  |  "How are the emfs of two cells compared?"                  |   21    |
  |  "A wire is stretched to twice its length"                  |    7    |
  |  "The balance point is at 40 cm from the left end"          |   20    |
  |  "A cell of emf 2 V and internal resistance 0.5 ohm"        |   12    |
  |  "Which bulb glows brighter in series?"                     |   26    |
  |  "Bands are Red, Violet, Orange, Gold"                      |    9    |
  |  "n cells are joined in m rows"                             |   13    |
  |  "Two cells of 8 V and 7 V in parallel across 4 ohm"        |   16    |
  |  "Why is a potentiometer better than a voltmeter?"          |   23    |
  |  "Find the monthly electricity bill"                        |   27    |
  |  "R is 10 ohm at 20 deg C and 12 ohm at 120 deg C"          |    8    |
  |  "For what R is the power delivered maximum?"               |   28    |
  |  "Heat produced in 5 minutes"                               |   29    |
  |  "Define mobility and give its unit"                        |    1    |
  |  "Describe the metre bridge with precautions"               |   19    |
  |  "Key open at 80 cm, key closed at 60 cm"                   |   22    |
  |  "Why does a bulb light up instantly?"                      |   30    |
  +-------------------------------------------------------------+---------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

## Level 1 — the absolute minimum (about 3 hours of work)

```
  1.  The nine DEFINITIONS (Pattern 1).                     ->  2-4 marks
  2.  V = E - I r  and  I = E/(R+r)  numericals (Pattern 12)->  4 marks
  3.  Series and parallel derivations (Pattern 10).         ->  4 marks
```

## Level 2 — add the two big derivations (about 2 more hours)

```
  4.  I = n A e vd            (Pattern 2)                   ->  4 marks
  5.  rho = m / (n e^2 tau)   (Pattern 3)                   ->  4 marks
```

## Level 3 — the 8-mark machine (about 3 more hours)

```
  6.  Kirchhoff's laws + Wheatstone bridge  (Pattern 17)    ->  8 marks
  7.  Potentiometer: principle + emf comparison (Pattern 21)->  8 marks
  8.  Metre bridge with precautions (Pattern 19)            ->  8 marks
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  THE ARITHMETIC OF THIS CHAPTER                                     |
  |                                                                     |
  |    2 questions in Section A   x  2 marks   =   4 marks              |
  |    1 question  in Section B   x  4 marks   =   4 marks              |
  |    1 question  in Section C   x  8 marks   =   8 marks              |
  |                                        ---------------------        |
  |                                  TOTAL  =    16 marks out of 60     |
  |                                                                     |
  |  No other chapter in 2nd Year Physics gives you this much for       |
  |  this little effort. Do Level 1 today, Level 2 tomorrow and         |
  |  Level 3 the day after.                                             |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The five things to write on the last page of your notebook

```
  1.  P / Q  =  R / S                    (Wheatstone, at balance Ig = 0)
  2.  S  =  R (100 - l) / l              (metre bridge)
  3.  E1 / E2  =  l1 / l2                (potentiometer, comparing emfs)
  4.  r  =  R (l1 - l2) / l2             (potentiometer, internal r)
  5.  V  =  E  -  I r                    (terminal potential difference)
```

If you can name the pattern, you already know the first three steps of the answer.
**That is the entire point of this file.**
