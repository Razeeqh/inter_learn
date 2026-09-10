# Semiconductor Electronics — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — CLASSIFY A MATERIAL FROM ITS BAND GAP              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A material has Eg = 5 eV. Classify it." /
            "How do you distinguish a conductor, semiconductor and
            insulator on the basis of energy bands?"
  METHOD    1. Eg = 0 (bands overlap)  ->  CONDUCTOR
            2. Eg about 1 eV           ->  SEMICONDUCTOR
            3. Eg more than 3 eV       ->  INSULATOR
            4. Quote the values: Ge = 0.72 eV, Si = 1.1 eV,
               diamond about 6 eV.
  TRAP      Do NOT quote 0.3 V and 0.7 V here. Those are the BARRIER
            (knee) voltages, not the band gaps.
```

```
  PATTERN 2 — DRAW THE THREE BAND DIAGRAMS                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the classification of solids on the basis of
            energy bands."
  METHOD    1. Draw all THREE diagrams side by side.
            2. Label conduction band, valence band and Eg on each.
            3. Show the bands OVERLAPPING for the metal.
            4. Write the band gap value under each diagram.
            5. Add the comparison table (resistivity, temperature
               coefficient, behaviour at 0 K).
  TRAP      Drawing the diagrams without LABELS loses half the marks.
            The overlap in the metal must be visible, not just stated.
```

```
  PATTERN 3 — DEFINE A HOLE / EXPLAIN HOLE CONDUCTION            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a hole?" / "How does a hole carry current?"
  METHOD    1. A hole is the VACANCY left in a covalent bond when an
               electron escapes.
            2. It behaves as a particle of charge +1.6 x 10^-19 C.
            3. Neighbouring bond electrons shift into it, so the hole
               appears to move towards the NEGATIVE terminal.
  TRAP      A hole is NOT a proton and NOT a positive ion. Saying so
            loses the mark outright.
```

```
  PATTERN 4 — INTRINSIC VS EXTRINSIC                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between intrinsic and extrinsic
            semiconductors."
  METHOD    Make a table with at least SIX rows:
               purity, carrier concentrations, conductivity,
               what it depends on, number of types, practical use.
            Include  n(e) = n(h) = n(i)  for intrinsic.
  TRAP      Writing only two rows. A 4-mark table needs at least four
            solid points of difference.
```

```
  PATTERN 5 — n-TYPE VS p-TYPE                                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the formation of n-type and p-type
            semiconductors." / "Distinguish between them."
  METHOD    1. n-type: PENTAVALENT dopant (P, As, Sb, Bi), DONOR,
               donor level just BELOW the conduction band,
               majority carriers ELECTRONS.
            2. p-type: TRIVALENT dopant (B, Al, In, Ga), ACCEPTOR,
               acceptor level just ABOVE the valence band,
               majority carriers HOLES.
            3. Draw BOTH band diagrams with the impurity level marked.
            4. State that BOTH crystals are electrically NEUTRAL.
  TRAP      Saying "n-type is negatively charged". It is neutral.
```

```
  PATTERN 6 — NAME THE DOPANT / IDENTIFY THE TYPE                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Ge is doped with indium. What type is formed?" /
            "Name two pentavalent impurities."
  METHOD    Count the valence electrons of the named element.
               5  ->  n-type, majority carriers electrons
               3  ->  p-type, majority carriers holes
  HELP      Pentavalent: P, As, Sb, Bi.  Trivalent: B, Al, In, Ga.
  TRAP      Aluminium and Boron are trivalent even though they look
            like "metals". Do not guess from the name.
```

```
  PATTERN 7 — MASS ACTION LAW NUMERICAL                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "n(i) and n(e) are given. Find n(h)." /
            "n(e) and n(h) are given. Find n(i)."
  METHOD    1. Write  n(e) x n(h) = n(i)^2.
            2. Rearrange:  n(h) = n(i)^2 / n(e).
            3. Square n(i) FIRST (including the power of ten).
            4. Divide, and give the answer in m^-3.
            5. State which carrier is the majority carrier and hence
               the type of the material.
  TRAP      Squaring 1.5 x 10^16 as 2.25 x 10^16 instead of
            2.25 x 10^32. Square the power of ten too.
```

```
  PATTERN 8 — CONDUCTIVITY NUMERICAL                             2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Mobilities and n(i) are given. Find the conductivity /
            resistivity."
  METHOD    1. sigma = e [ n(e) mu(e) + n(h) mu(h) ]
            2. For an intrinsic sample put n(e) = n(h) = n(i), giving
               sigma = e n(i) [ mu(e) + mu(h) ].
            3. rho = 1 / sigma if resistivity is asked.
            4. R = rho l / A if a bar of given size is described.
  TRAP      Forgetting to ADD the two mobilities before multiplying.
```

```
  PATTERN 9 — TEMPERATURE EFFECT: SEMICONDUCTOR VS METAL         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why does the resistance of a semiconductor decrease on
            heating while that of a metal increases?"
  METHOD    1. Semiconductor: heating breaks bonds -> MORE CARRIERS ->
               conductivity up, resistance down -> NEGATIVE temperature
               coefficient.
            2. Metal: the number of carriers is already maximum and
               cannot increase; only the lattice vibration and hence
               the collision rate increases -> resistance up ->
               POSITIVE temperature coefficient.
            3. Add: a pure semiconductor is a perfect insulator at 0 K.
            4. Sketch the two R vs T graphs.
  TRAP      Writing "mobility increases with temperature". It actually
            decreases; it is the CARRIER NUMBER that shoots up.
```

```
  PATTERN 10 — FORMATION OF THE p-n JUNCTION                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the formation of a p-n junction / the depletion
            region / the barrier potential."
  METHOD    A fixed five-step story:
            1. DIFFUSION of majority carriers across the boundary.
            2. RECOMBINATION near the junction, leaving no mobile
               carriers -> DEPLETION REGION.
            3. Fixed NEGATIVE acceptor ions on p, fixed POSITIVE donor
               ions on n.
            4. These set up an electric field from n to p; the
               potential difference is the BARRIER POTENTIAL
               (Ge 0.3 V, Si 0.7 V).
            5. The field opposes further diffusion -> EQUILIBRIUM,
               net current zero.
            Draw the labelled junction diagram.
  TRAP      Saying the depletion region is "empty". It is empty of
            MOBILE CARRIERS but full of fixed ions.
```

```
  PATTERN 11 — DIFFUSION CURRENT VS DRIFT CURRENT                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between diffusion and drift current."
  METHOD    DIFFUSION - MAJORITY carriers, due to the concentration
                        difference, direction p to n.
            DRIFT     - MINORITY carriers, due to the junction electric
                        field, direction n to p.
            At equilibrium the two are equal, so the net current is 0.
  TRAP      Mixing up which one is majority. Diffusion = majority.
```

```
  PATTERN 12 — FORWARD BIAS VS REVERSE BIAS                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the action of a p-n junction in forward and
            reverse bias." / "Distinguish between them."
  METHOD    1. Draw BOTH circuits. Forward: p to +. Reverse: p to -.
            2. For each state: effect on the barrier, effect on the
               depletion width, which carriers cross, the order of the
               current, and the junction resistance.
            3. Finish with the comparison table.
  TRAP      In reverse bias the current is NOT zero. Write "a small
            reverse saturation current due to MINORITY carriers".
```

```
  PATTERN 13 — DRAW AND EXPLAIN THE V-I CHARACTERISTIC           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw the V-I characteristic curve of a p-n junction
            diode and explain it."
  METHOD    1. Draw all four quadrant labels: forward V, forward I in
               mA, reverse V, reverse I in microamperes.
            2. Mark the KNEE VOLTAGE on the forward side with its
               value (Ge 0.3 V, Si 0.7 V).
            3. Mark the BREAKDOWN VOLTAGE on the reverse side.
            4. Explain: no current below the knee; sharp rise after;
               tiny flat reverse current; sudden rise at breakdown.
  TRAP      Drawing the reverse current on the same scale as the
            forward current. State clearly that the scales differ
            (mA versus microamperes).
```

```
  PATTERN 14 — SIMPLE DIODE CIRCUIT NUMERICAL                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A Si diode is in series with R and a battery. Find I."
  METHOD    1. Check the bias. If reverse, the current is practically
               zero - say so and stop.
            2. If forward:  I = ( V - V(knee) ) / R
            3. V(knee) = 0.7 V for Si, 0.3 V for Ge, 0 for an "ideal"
               diode.
  TRAP      Forgetting to subtract the knee voltage, or subtracting
            0.7 V when the question says the diode is IDEAL.
```

```
  PATTERN 15 — DYNAMIC RESISTANCE FROM THE CHARACTERISTIC        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The current changes from ... to ... when the voltage
            changes from ... to ... Find the dynamic resistance."
  METHOD    1. r(d) = change in V divided by change in I.
            2. Convert mA and microampere to amperes BEFORE dividing.
  TRAP      Confusing dynamic resistance (dV/dI) with static
            resistance (V/I). Read which one is asked.
```

```
  PATTERN 16 — HALF-WAVE RECTIFIER: FULL EXPLANATION             8 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is rectification? Explain the working of a
            half-wave rectifier with a circuit diagram and waveforms."
  METHOD    A fixed six-part answer:
            1. Define rectification and state the one-way property of
               a diode.
            2. Draw the CIRCUIT (transformer, diode, load R(L)).
            3. Positive half cycle: diode forward biased, conducts,
               output appears.
            4. Negative half cycle: diode reverse biased, no
               conduction, output zero.
            5. Draw the INPUT and OUTPUT WAVEFORMS one below the other.
            6. Give the results: I(dc) = I(m)/pi, I(rms) = I(m)/2,
               r = 1.21, efficiency 40.6 %, output frequency f,
               PIV = V(m). Mention the need for a filter.
  NOTE      *** ONE OF THE TWO HIGHEST-FREQUENCY 8-MARK QUESTIONS ***
  TRAP      Skipping the waveforms. They carry a large share of the
            marks and take thirty seconds to draw.
```

```
  PATTERN 17 — FULL-WAVE RECTIFIER: FULL EXPLANATION             8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of a full-wave rectifier with a
            circuit diagram and waveforms."
  METHOD    1. Draw the CENTRE-TAPPED transformer with TWO diodes and
               the load between the diode junction and the centre tap.
            2. Positive half: D1 conducts, D2 off.
            3. Negative half: D2 conducts, D1 off.
            4. State the key point: the current through R(L) is in the
               SAME DIRECTION in both halves.
            5. Draw the input and output waveforms (no gaps in the
               output).
            6. Results: I(dc) = 2 I(m)/pi, I(rms) = I(m)/sqrt(2),
               r = 0.48, efficiency 81.2 %, output frequency 2f,
               PIV = 2 V(m).
            7. Add the half-wave versus full-wave comparison table.
  NOTE      *** THE OTHER HIGHEST-FREQUENCY 8-MARK QUESTION ***
  TRAP      Forgetting the CENTRE TAP. Without it the circuit does not
            work and the diagram earns nothing.
```

```
  PATTERN 18 — RIPPLE FACTOR / EFFICIENCY NUMERICAL              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find I(dc), I(rms) and the ripple factor." /
            "Compare the efficiency of the two rectifiers."
  METHOD    1. Identify half wave or full wave.
            2. Half: I(dc) = I(m)/pi , I(rms) = I(m)/2.
               Full: I(dc) = 2 I(m)/pi , I(rms) = I(m)/sqrt(2).
            3. r = sqrt( (I(rms)/I(dc))^2 - 1 ).
            4. Check against the standard values 1.21 and 0.48.
  TRAP      Using the half-wave formula for a full-wave circuit. Read
            the question for the words "both halves" or "two diodes".
```

```
  PATTERN 19 — THE FILTER                                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is a filter used?" / "Draw a capacitor filter."
  METHOD    1. The rectifier output is PULSATING DC, not steady.
            2. A capacitor is connected IN PARALLEL with the load.
            3. It charges to the peak when the voltage rises and
               discharges slowly through R(L) when it falls, filling
               in the dips.
            4. Larger C and larger R(L) give smaller ripple.
            5. Name the alternatives: series choke filter, pi-filter
               (C-L-C), which is the best.
  TRAP      Drawing the capacitor in SERIES. It must be in parallel.
```

```
  PATTERN 20 — ZENER DIODE AS A VOLTAGE REGULATOR                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of a Zener diode as a voltage
            regulator with a circuit diagram."
  METHOD    1. Define the Zener: heavily doped, works in REVERSE
               BREAKDOWN, voltage constant while current varies.
            2. Draw the circuit: unregulated input, series R(s), Zener
               in REVERSE across the load.
            3. Case 1 - input rises: I(z) rises, extra drop appears
               across R(s), output stays V(z).
            4. Case 2 - load current rises: I(z) falls by the same
               amount, total current unchanged, output stays V(z).
            5. Write V(i) = I R(s) + V(z) and I = I(z) + I(L).
            6. State the role of R(s).
  TRAP      Drawing the Zener in FORWARD bias. It must be reverse.
```

```
  PATTERN 21 — ZENER REGULATOR NUMERICAL                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "V(i), V(z), R(s) and R(L) are given. Find I(z)."
  METHOD    Always three steps, in this order:
            1. I    = ( V(i) - V(z) ) / R(s)
            2. I(L) = V(z) / R(L)
            3. I(z) = I - I(L)
  TRAP      Using V(i) instead of V(z) to find the load current. The
            load always sees V(z), never V(i).
```

```
  PATTERN 22 — LED: WORKING, MATERIALS, ADVANTAGES               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of an LED and state its advantages."
  METHOD    1. Heavily doped p-n junction in FORWARD bias.
            2. Electrons and holes are injected across the junction
               and RECOMBINE near it.
            3. The energy released (equal to Eg) is emitted as a
               PHOTON, so Eg = h c / lambda and the colour depends on
               the band gap.
            4. Materials: GaAs, GaAsP, GaP, GaN. Si and Ge are NOT
               used - they release the energy as heat.
            5. Give at least FOUR advantages.
  TRAP      Writing "reverse bias". An LED is always FORWARD biased.
```

```
  PATTERN 23 — PHOTODIODE AND SOLAR CELL                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of a photodiode / solar cell."
  METHOD    PHOTODIODE  - REVERSE bias; light generates electron-hole
                          pairs; the reverse current is proportional
                          to the intensity; reverse bias is used
                          because the change is then easy to detect.
            SOLAR CELL  - NO bias; light generates pairs; the built-in
                          field separates them; a photovoltage appears;
                          the top layer is very thin; band gap should
                          be about 1.0 to 1.8 eV.
  TRAP      Confusing the biasing. LED forward, photodiode reverse,
            Zener reverse breakdown, solar cell no bias.
```

```
  PATTERN 24 — LED / PHOTON WAVELENGTH NUMERICAL                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The band gap is X eV. Find the wavelength emitted."
  METHOD    1. Convert Eg to joules: multiply by 1.6 x 10^-19.
            2. lambda = h c / Eg with h = 6.63 x 10^-34, c = 3 x 10^8.
            3. Or use the shortcut  lambda(nm) = 1240 / Eg(eV).
            4. Name the colour if asked.
  TRAP      Forgetting the eV to joule conversion, which makes the
            answer wrong by a factor of about 10^19.
```

```
  PATTERN 25 — WORKING OF AN npn TRANSISTOR                      4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of an npn transistor."
  METHOD    1. Draw the three-layer structure AND the symbol (arrow on
               the emitter, pointing OUT for npn).
            2. E-B junction FORWARD biased, B-C junction REVERSE
               biased.
            3. The heavily doped emitter injects many electrons into
               the base.
            4. The base is thin and lightly doped, so only 2 to 5 per
               cent recombine there -> small I(B).
            5. The reverse-biased collector attracts the remaining
               95 to 98 per cent -> I(C).
            6. Therefore I(E) = I(B) + I(C) with I(C) >> I(B).
  TRAP      Drawing the arrow on the collector, or pointing the wrong
            way. npn = arrow OUT, pnp = arrow IN, always on the
            EMITTER.
```

```
  PATTERN 26 — WHY IS THE BASE THIN AND LIGHTLY DOPED?           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is the base of a transistor thin and lightly doped?"
  METHOD    1. Few holes in the base means few injected electrons
               recombine there.
            2. Almost all reach the collector.
            3. So I(B) is very small, I(C) is nearly equal to I(E),
               and beta = I(C)/I(B) is large.
  TRAP      Answering only "to make it work". State the recombination
            argument and the consequence for beta.
```

```
  PATTERN 27 — alpha AND beta: DEFINE AND RELATE                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define alpha and beta and derive the relation between
            them."
  METHOD    1. alpha = I(C)/I(E) at constant V(CB), always less than 1.
            2. beta  = I(C)/I(B) at constant V(CE), always much more
               than 1.
            3. Start from I(E) = I(B) + I(C) and divide throughout by
               I(C) to get 1/alpha = 1/beta + 1.
            4. Rearrange:  beta = alpha/(1-alpha),
                           alpha = beta/(1+beta).
  TRAP      Dividing by the wrong current. Divide by I(C), not I(E).
```

```
  PATTERN 28 — TRANSISTOR CURRENT NUMERICAL                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "alpha (or beta) and one current are given. Find the
            others."
  METHOD    1. Write I(E) = I(B) + I(C) FIRST.
            2. Convert alpha to beta, or beta to alpha, as needed.
            3. Use I(C) = alpha I(E) or I(C) = beta I(B).
            4. Subtract to get the third current.
            5. CHECK: is alpha less than 1 and beta more than 1?
  HELP      Ladder: 0.9 -> 9, 0.95 -> 19, 0.98 -> 49, 0.99 -> 99.
  TRAP      Reporting a beta smaller than 1 or an alpha bigger than 1.
            That is always an arithmetic slip.
```

```
  PATTERN 29 — CE INPUT AND OUTPUT CHARACTERISTICS               4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw and explain the input and output characteristics of
            a transistor in the CE configuration."
  METHOD    1. Draw the CE circuit with a microammeter in the base and
               a milliammeter in the collector.
            2. INPUT characteristic: I(B) against V(BE) at constant
               V(CE). It looks like a forward-biased diode curve.
               r(i) = change in V(BE) / change in I(B), LOW.
            3. OUTPUT characteristic: I(C) against V(CE) at constant
               I(B). A family of nearly flat curves.
               r(o) = change in V(CE) / change in I(C), HIGH.
            4. Mark the three regions on the output graph.
  TRAP      Swapping the axes. INPUT means I(B) versus V(BE);
            OUTPUT means I(C) versus V(CE).
```

```
  PATTERN 30 — THE THREE REGIONS OF OPERATION                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Name the three regions of a transistor and state how the
            junctions are biased in each."
  METHOD    CUT-OFF     : both junctions REVERSE, I(C) about 0,
                          switch OFF, output HIGH.
            ACTIVE      : E-B FORWARD, B-C REVERSE, I(C) = beta I(B),
                          used for AMPLIFICATION.
            SATURATION  : both junctions FORWARD, I(C) maximum,
                          switch ON, output LOW.
  TRAP      Saying the amplifier works in saturation. It works in the
            ACTIVE region.
```

```
  PATTERN 31 — TRANSISTOR AS AN AMPLIFIER (CE)                   8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the action of a transistor as an amplifier in
            the CE configuration."
  METHOD    1. Draw the circuit: R(B), R(C), V(CC), coupling
               capacitors, input at the base, output at the collector.
            2. State the biasing: E-B forward, B-C reverse, operating
               point in the middle of the active region.
            3. Small change in V(BE) -> appreciable change in I(B).
            4. I(C) = beta I(B), so the collector current changes beta
               times as much.
            5. That current flows through the large R(C), producing a
               large voltage change:
                    V(CE) = V(CC) - I(C) R(C)
            6. Give the gains: A(i) = beta, A(v) = beta R(C)/r(i),
               A(p) = A(v) x beta.
            7. Explain PHASE REVERSAL of 180 degrees and draw the two
               waveforms.
  TRAP      Omitting the phase reversal. It is worth marks on its own
            and is very often asked separately.
```

```
  PATTERN 32 — AMPLIFIER GAIN NUMERICAL                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "beta, r(i) and R(C) are given. Find the voltage gain /
            power gain / output voltage."
  METHOD    1. A(v) = beta x R(C) / r(i).
            2. A(i) = beta.
            3. A(p) = A(v) x A(i).
            4. Output voltage = A(v) x input voltage.
  TRAP      Mixing kilo-ohms and ohms. Convert both resistances to the
            SAME unit before dividing - the ratio then needs no
            conversion at all.
```

```
  PATTERN 33 — PHASE REVERSAL                                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is phase reversal in a CE amplifier? Explain."
  METHOD    1. Quote V(CE) = V(CC) - I(C) R(C).
            2. Input up -> I(C) up -> the drop I(C) R(C) up ->
               V(CE) DOWN.
            3. So the output is 180 degrees out of phase with the
               input.
            4. Note that CB and CC configurations do NOT reverse the
               phase.
  TRAP      Saying 90 degrees or 360 degrees. It is always 180.
```

```
  PATTERN 34 — TRANSISTOR AS A SWITCH                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain how a transistor is used as a switch."
  METHOD    1. Only the CUT-OFF and SATURATION regions are used.
            2. Input LOW  -> cut-off -> I(C) = 0 -> output = V(CC),
               HIGH -> switch OPEN.
            3. Input HIGH -> saturation -> I(C) maximum ->
               output about 0, LOW -> switch CLOSED.
            4. Draw the transfer characteristic (V(o) against V(i)).
            5. Note that the circuit behaves as a NOT gate.
  TRAP      Letting the transistor sit in the ACTIVE region. A good
            switch must cross it quickly.
```

```
  PATTERN 35 — TRANSISTOR OSCILLATOR                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of a transistor oscillator."
  METHOD    1. An oscillator gives AC output with NO AC input; it
               converts DC power into AC power.
            2. Draw the block diagram: amplifier plus feedback network.
            3. The L-C tank circuit starts a damped oscillation.
            4. The transistor amplifies it.
            5. POSITIVE (in-phase) feedback returns part of the output
               to the input, replacing the energy lost, so the
               oscillations become UNDAMPED.
            6. f = 1 / ( 2 pi sqrt( L C ) ).
  TRAP      Saying the feedback is negative. It must be POSITIVE.
```

```
  PATTERN 36 — OSCILLATOR FREQUENCY NUMERICAL                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "L and C are given. Find the frequency of oscillation."
  METHOD    1. Convert L to henry and C to farad.
            2. Compute the product L C.
            3. Take the square root (halve the power of ten).
            4. f = 1 / ( 2 pi sqrt(LC) ).
  TRAP      Forgetting that millihenry is 10^-3 and microfarad is
            10^-6. Convert before multiplying.
```

```
  PATTERN 37 — DRAW A GATE SYMBOL AND ITS TRUTH TABLE            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw the symbol and truth table of a NAND / NOR gate."
  METHOD    1. Draw the symbol, including the small INVERSION CIRCLE
               for NOT, NAND and NOR.
            2. Write the Boolean expression.
            3. Write ALL FOUR rows of the truth table: 00, 01, 10, 11.
  TRAP      Writing only three rows, or leaving out the inversion
            circle so that NAND looks like AND.
```

```
  PATTERN 38 — IDENTIFY A GATE FROM A TRUTH TABLE                2 marks
  ------------------------------------------------------------------------
  TRIGGER   A truth table is given and the gate is asked.
  METHOD    Look at just two rows:
            - Output 1 only for the ALL-ZERO input   ->  NOR
            - Output 0 only for the ALL-ONE input    ->  NAND
            - Output 1 only for the ALL-ONE input    ->  AND
            - Output 0 only for the ALL-ZERO input   ->  OR
  TRAP      Reading the rows in the wrong order. Always list them as
            00, 01, 10, 11.
```

```
  PATTERN 39 — COMBINATION OF GATES                              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The output of a NAND gate is fed to a NOT gate. Name the
            resulting gate."
  METHOD    1. Build the truth table column by column, one gate at a
               time.
            2. Compare the final column with the five standard tables.
            3. Quick results: NAND + NOT = AND, NOR + NOT = OR,
               NAND with joined inputs = NOT.
  TRAP      Trying to guess without writing the table. Write the
            table; it takes twenty seconds.
```

```
  PATTERN 40 — UNIVERSAL GATES                                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why are NAND and NOR called universal gates?" /
            "Realise an OR gate using NAND gates only."
  METHOD    1. State: any gate can be built using only NAND, or only
               NOR.
            2. NOT from NAND: join the two inputs.
            3. AND from NAND: NAND followed by a NAND acting as NOT.
            4. OR from NAND: invert both inputs, then NAND them
               (De Morgan).
            5. Draw the circuits and the truth tables.
  TRAP      Just stating the fact without showing at least one
            construction when the question says "realise" or "obtain".
```

---

# SELF-TEST

Cover the right-hand column. If you cannot answer in ten seconds, that pattern
needs more work.

```
  +-----+-----------------------------------------+--------------------+
  |  #  |  QUESTION                               |  ANSWER            |
  +-----+-----------------------------------------+--------------------+
  |  1  |  Band gap of Ge and Si                  |  0.72 eV, 1.1 eV   |
  |  2  |  Band gap of an insulator               |  more than 3 eV    |
  |  3  |  Band gap of a conductor                |  zero, bands       |
  |     |                                         |  overlap           |
  |  4  |  Charge on a hole                       |  +1.6 x 10^-19 C   |
  |  5  |  Intrinsic: relation between carriers   |  n(e)=n(h)=n(i)    |
  |  6  |  Mass action law                        |  n(e)n(h) = n(i)^2 |
  |  7  |  Pentavalent dopants                    |  P, As, Sb, Bi     |
  |  8  |  Trivalent dopants                      |  B, Al, In, Ga     |
  |  9  |  n-type majority carriers               |  electrons         |
  | 10  |  p-type majority carriers               |  holes             |
  | 11  |  Donor level lies where?                |  just below the CB |
  | 12  |  Acceptor level lies where?             |  just above the VB |
  | 13  |  Temperature coefficient of a           |  NEGATIVE          |
  |     |  semiconductor                          |                    |
  | 14  |  Barrier potential of Ge and Si         |  0.3 V, 0.7 V      |
  | 15  |  Depletion layer width                  |  about 10^-6 m     |
  | 16  |  Diffusion current is due to            |  majority carriers |
  | 17  |  Drift current is due to                |  minority carriers |
  | 18  |  Forward bias: depletion layer          |  becomes THINNER   |
  | 19  |  Reverse bias: depletion layer          |  becomes WIDER     |
  | 20  |  Reverse current is carried by          |  minority carriers |
  | 21  |  Half-wave ripple factor and efficiency |  1.21 and 40.6 %   |
  | 22  |  Full-wave ripple factor and efficiency |  0.48 and 81.2 %   |
  | 23  |  Full-wave output frequency (50 Hz in)  |  100 Hz            |
  | 24  |  Half-wave I(dc)                        |  I(m) / pi         |
  | 25  |  Full-wave I(dc)                        |  2 I(m) / pi       |
  | 26  |  Capacitor filter is connected          |  in PARALLEL with  |
  |     |                                         |  the load          |
  | 27  |  Zener diode operates in                |  reverse breakdown |
  | 28  |  LED bias                               |  FORWARD           |
  | 29  |  Photodiode bias                        |  REVERSE           |
  | 30  |  Solar cell bias                        |  NO bias           |
  | 31  |  Two LED materials                      |  GaAs, GaP         |
  | 32  |  Transistor current relation            |  I(E)=I(B)+I(C)    |
  | 33  |  alpha definition                       |  I(C) / I(E)       |
  | 34  |  beta definition                        |  I(C) / I(B)       |
  | 35  |  beta from alpha                        |  alpha/(1-alpha)   |
  | 36  |  alpha = 0.98, so beta =                |  49                |
  | 37  |  Amplifier biasing                      |  E-B forward,      |
  |     |                                         |  B-C reverse       |
  | 38  |  CE voltage gain formula                |  beta R(C)/r(i)    |
  | 39  |  CE phase difference                    |  180 degrees       |
  | 40  |  Switch ON region                       |  saturation        |
  | 41  |  Switch OFF region                      |  cut-off           |
  | 42  |  Oscillator frequency                   |  1/(2 pi sqrt(LC)) |
  | 43  |  Feedback needed in an oscillator       |  POSITIVE          |
  | 44  |  NAND Boolean expression                |  ( A . B )'        |
  | 45  |  NOR Boolean expression                 |  ( A + B )'        |
  | 46  |  Universal gates                        |  NAND and NOR      |
  | 47  |  NAND with inputs joined                |  NOT gate          |
  | 48  |  NOR followed by NOT                    |  OR gate           |
  | 49  |  Gate that is 1 only for all-zero input |  NOR               |
  | 50  |  De Morgan: ( A . B )' =                |  A' + B'           |
  +-----+-----------------------------------------+--------------------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  ================== TIER 1 : DO THIS FIRST, NO EXCUSES ==================

  These four items alone can give you about 12 marks.

  +--------+--------------------------------------------+------------+
  |  ITEM  |  WHAT TO LEARN                             |  PATTERN   |
  +--------+--------------------------------------------+------------+
  |   1    |  FULL-WAVE RECTIFIER: circuit, working,    |     17     |
  |        |  both waveforms, the number table          |            |
  |        |  -> an 8-mark question on its own          |            |
  +--------+--------------------------------------------+------------+
  |   2    |  npn TRANSISTOR working + alpha, beta      |  25,27,31  |
  |        |  + CE AMPLIFIER with phase reversal        |            |
  |        |  -> the other 8-mark question              |            |
  +--------+--------------------------------------------+------------+
  |   3    |  THE THREE BAND DIAGRAMS + the             |    1, 2    |
  |        |  comparison table                          |            |
  |        |  -> 2 or 4 marks, appears almost always    |            |
  +--------+--------------------------------------------+------------+
  |   4    |  THE FIVE LOGIC GATES: symbols, truth      |  37,38,40  |
  |        |  tables, Boolean, universal gates          |            |
  |        |  -> the easiest marks in the paper         |            |
  +--------+--------------------------------------------+------------+

  Practise item 1 and item 2 by WRITING the full answer on paper with a
  timer set to twelve minutes. Do it three times. That is the single
  highest-value hour of study in this chapter.


  ================== TIER 2 : ADD THESE NEXT ============================

  +--------+--------------------------------------------+------------+
  |   5    |  n-type vs p-type table + band diagrams    |     5      |
  |   6    |  p-n junction formation, depletion region  |    10      |
  |   7    |  Forward vs reverse bias, both circuits    |    12      |
  |   8    |  Zener regulator: circuit + working        |    20      |
  |   9    |  V-I characteristic with knee and          |    13      |
  |        |  breakdown voltage                         |            |
  |  10    |  Why the base is thin and lightly doped    |    26      |
  +--------+--------------------------------------------+------------+


  ================== TIER 3 : IF TIME PERMITS ==========================

  +--------+--------------------------------------------+------------+
  |  11    |  Mass action law numericals                |     7      |
  |  12    |  LED, photodiode, solar cell               |  22, 23    |
  |  13    |  Temperature effect, semiconductor vs metal|     9      |
  |  14    |  Transistor as a switch                    |    34      |
  |  15    |  CE input / output characteristics         |    29      |
  |  16    |  Conductivity numericals                   |     8      |
  |  17    |  Oscillator (outline + frequency)          |  35, 36    |
  +--------+--------------------------------------------+------------+


  ================== THE ARITHMETIC OF YOUR SCORE =======================

  +------------------------------------------------+---------+
  |  One Section C long answer (rectifier or       |    8    |
  |  transistor) written completely with diagrams  |         |
  |  One Section B question from Tier 2            |    4    |
  |  One or two Section A questions                |  2 - 4  |
  +------------------------------------------------+---------+
  |  TOTAL FROM THIS ONE CHAPTER                   | 14 - 16 |
  +------------------------------------------------+---------+

  Out of 60 marks. From a chapter with almost no calculation in it.
  There is no cheaper set of marks anywhere in the Physics syllabus.
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   FINAL INSTRUCTION:                                             |
  |                                                                  |
  |   Take a blank sheet. Draw these five things from memory,        |
  |   every day for a week:                                          |
  |                                                                  |
  |      1.  The three band diagrams                                 |
  |      2.  The p-n junction with the depletion layer               |
  |      3.  The V-I characteristic curve                            |
  |      4.  The full-wave rectifier with both waveforms             |
  |      5.  The CE amplifier circuit                                |
  |                                                                  |
  |   Seven days of this and the chapter is finished.                |
  |                                                                  |
  +------------------------------------------------------------------+
```
