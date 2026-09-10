# Alternating Current — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — READ OFF PEAK, omega, f, T FROM A GIVEN EQUATION      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "An AC is given by i = 5 sin(314 t). Find its peak value,
            frequency and time period."
  METHOD    1. Compare with  i = I0 sin(omega t).
            2. The number in front of sin  =  I0 (PEAK).
            3. The number multiplying t    =  omega.
            4. f = omega / (2 pi) ,  T = 1/f.
  TRAP      omega is NOT the frequency. Divide by 2 pi.
            Learn the pair:  omega = 314 rad/s  <->  f = 50 Hz.
```

```
  PATTERN 2 — CONVERT BETWEEN PEAK, RMS AND MEAN VALUES             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Peak current is 10 A, find the rms value" /
            "Mains is 230 V, find the peak voltage."
  METHOD        rms  = peak / 1.414 = 0.707 x peak
                peak = 1.414 x rms
                mean = 0.637 x peak      (over HALF a cycle)
  TRAP      1. Any value quoted in real life ("230 V mains", any meter
               reading) is the RMS value, not the peak.
            2. The mean over a FULL cycle is ZERO. Say so if asked.
```

```
  PATTERN 3 — DERIVE THE RMS VALUE                                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Obtain an expression for the rms value of an AC" /
            "Define rms value and derive I_rms = I0/sqrt(2)."
  METHOD    1. i = I0 sin(omega t) ; heat dH = i^2 R dt.
            2. Integrate over one full cycle.
            3. Use sin^2 A = (1 - cos2A)/2 ; the cos term averages to 0.
            4. Get H = I0^2 R T / 2.
            5. Equate to I_rms^2 R T  ->  I_rms = I0 / sqrt(2).
  TRAP      Start with the DEFINITION in words (the DC that gives the
            same heating). One mark is for that sentence.
```

```
  PATTERN 4 — AC THROUGH A PURE RESISTOR                            2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that current and voltage are in phase in a resistor."
  METHOD    1. v = V0 sin(wt) ; i = v/R = (V0/R) sin(wt).
            2. Same angle -> phi = 0 -> IN PHASE.
            3. Draw the waveform and the phasor (both on one line).
            4. P = V_rms I_rms = I_rms^2 R.
  TRAP      Do not forget that a resistor DOES consume power. Only L
            and C are wattless.
```

```
  PATTERN 5 — AC THROUGH A PURE INDUCTOR                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "An alternating voltage is applied to a pure inductor.
            Derive the current and show it lags by 90 degrees."
  METHOD    1. Draw the circuit.
            2. L di/dt = V0 sin(wt).
            3. Integrate:  i = -(V0/wL) cos(wt).
            4. Use -cos A = sin(A - pi/2)
                  ->  i = I0 sin(wt - pi/2),  I0 = V0/XL,  XL = wL.
            5. State: CURRENT LAGS VOLTAGE BY 90 DEGREES.
            6. Draw the phasor diagram (V up, I horizontal).
            7. Average power = 0.
  TRAP      Forgetting the phasor diagram. It carries its own mark.
```

```
  PATTERN 6 — AC THROUGH A PURE CAPACITOR                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the current in a pure capacitor and show it leads
            the voltage by 90 degrees."
  METHOD    1. q = C v = C V0 sin(wt).
            2. i = dq/dt = C V0 w cos(wt).
            3. Use cos A = sin(A + pi/2)
                  ->  i = I0 sin(wt + pi/2), I0 = V0/XC, XC = 1/(wC).
            4. State: CURRENT LEADS VOLTAGE BY 90 DEGREES.
            5. Phasor diagram (I up, V horizontal). Average power = 0.
  TRAP      Do NOT integrate here - you DIFFERENTIATE q to get i.
            (Inductor = integrate; capacitor = differentiate.)
```

```
  PATTERN 7 — FIND XL OR XC (NUMERICAL)                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the reactance of a 0.5 H coil at 50 Hz" /
            "of a 25 microfarad capacitor at 50 Hz."
  METHOD        XL = 2 pi f L
                XC = 1 / (2 pi f C)
            then I = V / X if the current is asked.
  TRAP      *** UNIT CONVERSION ***
            microfarad -> x 10^-6 ,  millihenry -> x 10^-3.
            This single slip loses more marks than anything else here.
```

```
  PATTERN 8 — FREQUENCY BEHAVIOUR OF L AND C                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why does a capacitor block DC?" / "Why is an inductor
            called a choke?" / "What happens to XL if f is doubled?"
  METHOD    XL = 2 pi f L    -> rises with f. At f = 0, XL = 0.
            XC = 1/(2 pi fC) -> falls with f. At f = 0, XC = infinity.
            So: C blocks DC, passes AC.  L passes DC, chokes high f.
  TRAP      Give the FORMULA as the reason, not just words.
```

```
  PATTERN 9 — IDENTIFY THE NATURE OF A CIRCUIT FROM THE PHASE       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "v = 100 sin(wt), i = 5 sin(wt + pi/3). What is the circuit?"
  METHOD    1. Compare the two phase angles.
            2. If the current's angle is LARGER -> current LEADS
                  -> CAPACITIVE  (XC > XL).
            3. If SMALLER -> current LAGS -> INDUCTIVE (XL > XC).
            4. If equal -> resistive / at resonance.
  TRAP      "Leads" and "lags" get swapped under pressure.
            Use ELI the ICE man every single time.
```

```
  PATTERN 10 — SERIES LCR: FIND Z, I, phi, POWER                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "R = ..., L = ..., C = ... connected to a ... V, ... Hz
            supply. Find the impedance / current / phase / power."
  METHOD    The SAME five steps every time:
            1. XL = 2 pi f L
            2. XC = 1 / (2 pi f C)
            3. Z  = sqrt( R^2 + (XL - XC)^2 )
            4. I  = V / Z
            5. tan(phi) = (XL - XC)/R ,  cos(phi) = R/Z ,
               P = V I cos(phi) = I^2 R
  TRAP      Never write Z = R + XL + XC. Use Pythagoras.
            Keep the SIGN of (XL - XC) - it tells you inductive vs
            capacitive.
```

```
  PATTERN 11 — DERIVE THE IMPEDANCE BY THE PHASOR METHOD            8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Obtain the expression for the impedance of a series LCR
            circuit using phasors. Discuss the cases."
            *** THE BIGGEST QUESTION IN THE CHAPTER ***
  METHOD    1. Circuit diagram; state that i is the SAME in all three,
               so I is the reference phasor.
            2. VR = IR in phase; VL = I XL up 90; VC = I XC down 90.
            3. Draw the phasor diagram with (VL - VC) vertical.
            4. V = sqrt[ VR^2 + (VL - VC)^2 ] = I sqrt[R^2+(XL-XC)^2].
            5. Z = V/I = sqrt[ R^2 + (XL - XC)^2 ].
            6. tan(phi) = (XL - XC)/R ; draw the IMPEDANCE TRIANGLE.
            7. Three cases: XL>XC inductive, XL<XC capacitive,
               XL=XC resonance.
  TRAP      Missing any ONE of the three diagrams (circuit, phasor,
            impedance triangle) costs a mark each.
```

```
  PATTERN 12 — VOLTAGES ACROSS R, L, C ADD LIKE A TRIANGLE          2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "VR = 30 V, VL = 70 V, VC = 30 V. Find the supply voltage."
            or "A 20 V source, VR = 12 V, find VL."
  METHOD        V = sqrt[ VR^2 + (VL - VC)^2 ]
  TRAP      Do NOT add the voltmeter readings arithmetically.
            VL and VC are 180 degrees apart, so they SUBTRACT;
            the result is perpendicular to VR.
```

```
  PATTERN 13 — CONDITION FOR RESONANCE / RESONANT FREQUENCY         2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the condition for resonance?" /
            "Find the resonant frequency of L = ..., C = ..."
  METHOD    1. Condition: XL = XC.
            2. wL = 1/(wC)  ->  w0 = 1/sqrt(LC)
            3. f0 = 1 / (2 pi sqrt(LC))
            Speed form:   f0 = 0.159 / sqrt(LC)
  TRAP      R does NOT appear in f0. R only affects the SHARPNESS.
```

```
  PATTERN 14 — WHAT HAPPENS AT RESONANCE                            2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "At resonance, what is the impedance / current / power
            factor of a series LCR circuit?"
  METHOD    Z = R (MINIMUM) ; I = V/R (MAXIMUM) ; phi = 0 ;
            cos(phi) = 1 ; VL = VC and they cancel ;
            the circuit is purely resistive ; ACCEPTOR circuit.
  TRAP      In a SERIES circuit Z is minimum. Students confuse this
            with the PARALLEL (rejector) circuit, where Z is maximum
            and the current is minimum. Read which one is asked.
```

```
  PATTERN 15 — DRAW AND EXPLAIN THE RESONANCE CURVE                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw the variation of current with frequency in a series
            LCR circuit for different values of R."
  METHOD    1. Axes: current (y) against frequency (x).
            2. A peak at f0, height V/R.
            3. Draw TWO curves: small R = tall and sharp,
               large R = short and broad.
            4. Mark f1, f0, f2 and the half-power level Imax/sqrt(2).
            5. Bandwidth = f2 - f1.
  TRAP      Label the axes and mark f0. Unlabelled graphs get zero.
```

```
  PATTERN 16 — SHARPNESS, QUALITY FACTOR AND BANDWIDTH              2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define the quality factor" / "Find Q for L, C, R given"
  METHOD    Choose the form that matches the data:
                Q = omega0 L / R          (w0 and L known)
                Q = 1 / (omega0 C R)      (w0 and C known)
                Q = (1/R) sqrt(L/C)       (only L, C, R given)
                bandwidth = R / L ;  Q = omega0 / bandwidth
  TRAP      Q has NO unit. Small R gives a LARGE Q (sharper), not
            a small one.
```

```
  PATTERN 17 — RADIO TUNING (APPLICATION OF RESONANCE)              2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How is a series LCR circuit used to tune a radio?"
  METHOD    1. Many stations arrive together at the aerial.
            2. The receiver has an LCR circuit with a VARIABLE capacitor.
            3. Changing C changes f0 = 1/(2 pi sqrt(LC)).
            4. When f0 equals a station's frequency, resonance occurs:
               Z = R, current is maximum, only that station is heard.
            5. A HIGH Q is needed for good selectivity.
  TRAP      Say WHICH component is varied (the capacitor) and WHY
            (to change f0). Vague answers lose marks.
```

```
  PATTERN 18 — DERIVE THE AVERAGE POWER IN AN AC CIRCUIT            4/8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Obtain an expression for the average power in an AC
            circuit" / "Define power factor."
  METHOD    1. v = V0 sin(wt) , i = I0 sin(wt - phi).
            2. p = v i ; use 2 sinA sinB = cos(A-B) - cos(A+B).
            3. The cos(2wt - phi) term averages to ZERO over a cycle.
            4. P = (V0 I0 / 2) cos(phi) = V_rms I_rms cos(phi).
            5. Power factor cos(phi) = R/Z = true/apparent power.
  TRAP      Do not stop at V_rms I_rms. The cos(phi) is the whole point
            of the question.
```

```
  PATTERN 19 — POWER FACTOR AND WATTLESS CURRENT                    2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define power factor / wattless current. Find the wattless
            component of a 5 A current at 30 degrees."
  METHOD        power factor  = cos(phi) = R/Z
                power component  = I cos(phi)
                WATTLESS current = I sin(phi)
            Special values: R only -> 1 ; L or C only -> 0 ;
                            at resonance -> 1.
  TRAP      Wattless uses SIN, the power component uses COS.
            The examiner always offers both numbers as options.
```

```
  PATTERN 20 — IMPROVE A LOW POWER FACTOR                           2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How is the power factor of an inductive load improved?"
            "Why is a low power factor undesirable?"
  METHOD    1. Low cos(phi) -> for the same useful power the current
               I = P/(V cos phi) is LARGE -> large I^2 R line loss.
            2. Industrial loads are inductive (motors, chokes).
            3. Connect a CAPACITOR IN PARALLEL with the load; its
               leading current cancels part of the lagging current,
               so phi falls and cos(phi) -> 1.
  TRAP      Parallel, not series.
```

```
  PATTERN 21 — LC OSCILLATIONS AND THE SPRING ANALOGY               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain LC oscillations" / "Give the analogy between an
            LC circuit and a spring-mass system."
  METHOD    1. Describe the four stages of energy exchange between the
               electric field of C and the magnetic field of L.
            2. L d2q/dt2 + q/C = 0  ->  SHM in q.
            3. omega0 = 1/sqrt(LC) ,  f0 = 1/(2 pi sqrt(LC)).
            4. Analogy table: q<->x, i<->v, L<->m, 1/C<->k, R<->friction.
            5. Note: real circuits have R, so oscillations are DAMPED.
  TRAP      L is analogous to MASS (not to the spring constant).
            1/C is the spring constant.
```

```
  PATTERN 22 — TRANSFORMER: PRINCIPLE, WORKING, TURNS RATIO         4/8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of a transformer" /
            "Derive Vs/Vp = Ns/Np."
  METHOD    1. Principle: MUTUAL INDUCTION.
            2. Draw the labelled diagram (laminated soft-iron core,
               primary Np, secondary Ns).
            3. ep = -Np dphi/dt , es = -Ns dphi/dt ; divide.
            4. Vs/Vp = Ns/Np ; with Vp Ip = Vs Is get Ip/Is = Ns/Np.
            5. Ns > Np step-up ; Ns < Np step-down.
  TRAP      Voltage and turns go the SAME way; CURRENT IS INVERTED.
            A transformer never increases POWER or changes FREQUENCY.
```

```
  PATTERN 23 — TRANSFORMER NUMERICAL                                2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Np = 500, Ns = 5000, Vp = 220 V, find Vs and Ip."
  METHOD    1. Vs = Vp (Ns/Np).
            2. Ideal: Vp Ip = Vs Is  ->  Ip = Vs Is / Vp.
            3. If an efficiency is given:
                  input power = output power / efficiency.
  TRAP      With efficiency given, do NOT use Vp Ip = Vs Is directly.
            Divide by the efficiency first.
```

```
  PATTERN 24 — TRANSFORMER LOSSES AND THEIR REMEDIES                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the energy losses in a transformer and how each is
            minimised."
  METHOD    Learn the four pairs:
              copper (I^2 R)  -> thick, low-resistance windings
              eddy current    -> LAMINATED core
              hysteresis      -> SOFT IRON / silicon steel core
              flux leakage    -> coils wound on the same limb of a
                                 closed core
            Efficiency = (Vs Is)/(Vp Ip) x 100 %, typically 95-99 %.
  TRAP      Give the LOSS and its CURE together. Listing losses only
            gets half the marks.
```

```
  PATTERN 25 — WHY POWER IS TRANSMITTED AT HIGH VOLTAGE             2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is electric power transmitted at high voltage?" /
            "Explain the role of transformers in power transmission."
  METHOD    1. P = V I  ->  I = P/V.
            2. Line loss  P_loss = I^2 R = (P/V)^2 R.
            3. So the loss falls as 1/V^2.
            4. Step-up at the station (11 kV -> 220/400 kV),
               step-down near the consumer (-> 230 V).
  TRAP      Write the formula P_loss = (P/V)^2 R. A worded answer
            alone loses marks.
```

```
  PATTERN 26 — AC GENERATOR                                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the principle and working of an AC generator" /
            "Derive e = NBA omega sin(omega t)."
  METHOD    1. Principle: electromagnetic induction.
            2. Parts: armature, field magnets, TWO SLIP RINGS, brushes.
            3. phi = N B A cos(omega t).
            4. e = -dphi/dt = N B A omega sin(omega t) = e0 sin(wt).
            5. Slip rings -> AC ; split-ring commutator -> DC.
  TRAP      Mention the SLIP RINGS explicitly; that is what makes it AC.
```

```
  PATTERN 27 — DISTINGUISH AC FROM DC                               2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Give four differences between AC and DC."
  METHOD    Direction, magnitude, transformer/voltage change,
            transmission cost, generation (slip ring vs commutator),
            type of meter used, use in electroplating.
  TRAP      Answer in a TWO-COLUMN table. It is faster and scores better.
```

```
  PATTERN 28 — "WHAT DOES AN AC METER READ?"                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What does an AC ammeter measure?" / "Why does a moving-coil
            meter show zero on AC?"
  METHOD    1. Moving-coil reads the full-cycle AVERAGE = 0.
            2. AC meters (hot-wire, moving-iron) respond to i^2, which
               is always positive.
            3. Therefore they are calibrated to read the RMS value.
  TRAP      The answer is RMS, never peak and never mean.
```

```
  PATTERN 29 — SPECIAL COMBINATIONS (RL, RC, LC ONLY)               2/4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A coil of resistance R and inductance L across a supply..."
            "A resistor and capacitor in series..."
  METHOD    Use the master formula with the missing term set to zero:
                RL :  Z = sqrt(R^2 + XL^2) ,  tan phi =  XL/R
                RC :  Z = sqrt(R^2 + XC^2) ,  tan phi = -XC/R
                LC :  Z = | XL - XC |
  TRAP      A real "coil" always has BOTH R and L. If a resistance is
            quoted for the coil, you must include it.
```

```
  PATTERN 30 — VOLTAGE MAGNIFICATION AT RESONANCE                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "At resonance the voltage across L is how many times the
            supply voltage?"
  METHOD    VL = VC = Q x V , where Q = omega0 L / R.
            They are equal and opposite, so they cancel in the SUM,
            but each one individually can be far larger than V.
  TRAP      "VL = VC" does not mean either of them is zero.
```

---

# ===============================================================
# SELF-TEST — can you name the pattern in 5 seconds?
# ===============================================================

```
  +----------------------------------------------------+-----------+
  |  QUESTION STEM                                     |  PATTERN  |
  +----------------------------------------------------+-----------+
  |  "i = 10 sin(314 t). Find f and T."                |     1     |
  |  "Mains 230 V. Find the peak voltage."             |     2     |
  |  "Derive I_rms = I0 / sqrt(2)."                    |     3     |
  |  "Show V and I are in phase in a resistor."        |     4     |
  |  "Show the current lags by 90 deg in a coil."      |     5     |
  |  "Show the current leads by 90 deg in a capacitor."|     6     |
  |  "Find XC of a 25 uF capacitor at 50 Hz."          |     7     |
  |  "Why does a capacitor block DC?"                  |     8     |
  |  "i = 5 sin(wt + pi/3). Nature of the circuit?"    |     9     |
  |  "R, L, C given. Find Z, I and the power."         |    10     |
  |  "Derive Z for a series LCR using phasors."        |    11     |
  |  "VR = 30, VL = 70, VC = 30. Find V."              |    12     |
  |  "Find the resonant frequency."                    |    13     |
  |  "What is the impedance at resonance?"             |    14     |
  |  "Draw current vs frequency for two values of R."  |    15     |
  |  "Find the quality factor / bandwidth."            |    16     |
  |  "How does a radio pick one station?"              |    17     |
  |  "Derive P = V I cos(phi)."                        |    18     |
  |  "Find the wattless current."                      |    19     |
  |  "How is a low power factor improved?"             |    20     |
  |  "Explain LC oscillations."                        |    21     |
  |  "Explain the working of a transformer."           |    22     |
  |  "Np = 500, Ns = 5000. Find Vs."                   |    23     |
  |  "Why is the core laminated?"                      |    24     |
  |  "Why transmit at high voltage?"                   |    25     |
  |  "Derive e = NBA omega sin(wt)."                   |    26     |
  |  "Four differences between AC and DC."             |    27     |
  |  "What does an AC ammeter read?"                   |    28     |
  |  "A coil of R = 30 and XL = 40 across 200 V."      |    29     |
  |  "VL at resonance compared with the supply."       |    30     |
  +----------------------------------------------------+-----------+
```

---

# ===============================================================
# GUARANTEED-MARKS PLAN FOR THIS CHAPTER
# ===============================================================

```
  STEP 1  --  THE ONE 8-MARK ANSWER  (patterns 11, 14, 15, 16)
  -----------------------------------------------------------------
  Write out the SERIES LCR phasor derivation on paper, from memory,
  three times. Circuit diagram -> phasor diagram -> Pythagoras -> Z
  -> tan(phi) -> impedance triangle -> three cases -> resonance.

  If a Section C question from this chapter appears, this single
  answer is 8 marks.


  STEP 2  --  THE 4-MARK BANKERS  (patterns 5, 6, 18, 22, 24)
  -----------------------------------------------------------------
  Four short derivations / descriptions, each about half a page:
       - AC through a pure inductor  (lag, phasor, P = 0)
       - AC through a pure capacitor (lead, phasor, P = 0)
       - Average power and power factor
       - Transformer: principle, turns ratio, losses + remedies

  One of these appears in Section B almost every year.  = 4 marks


  STEP 3  --  THE 2-MARK RECALL LIST  (patterns 2, 7, 8, 13, 19, 28)
  -----------------------------------------------------------------
  Learn these ten one-liners word for word:
       1.  I_rms = I0/sqrt(2) = 0.707 I0  (definition + formula)
       2.  I_mean = 0.637 I0 over half a cycle; zero over a full cycle
       3.  XL = 2 pi f L ; XC = 1/(2 pi f C) ; both in ohm
       4.  C blocks DC (XC infinite at f = 0); L chokes high f
       5.  In L the current lags 90 deg; in C it leads 90 deg
       6.  Z = sqrt(R^2 + (XL - XC)^2)
       7.  Resonance: XL = XC ; f0 = 1/(2 pi sqrt(LC))
       8.  At resonance Z is minimum, I is maximum, cos(phi) = 1
       9.  Power factor = cos(phi) = R/Z ; wattless current = I sin(phi)
      10.  Vs/Vp = Ns/Np = Ip/Is ; laminated core -> eddy current loss

  = 2 to 4 marks in Section A, for pure memory work.


  EXPECTED TOTAL FROM THIS CHAPTER:  10 to 14 marks out of 60.
```

**Final advice:** in every answer from this chapter, **draw first, calculate second**.
The circuit diagram, the phasor diagram, the impedance triangle and the resonance curve
each carry their own marks, and you can draw all four correctly even on a day when the
algebra will not come.
