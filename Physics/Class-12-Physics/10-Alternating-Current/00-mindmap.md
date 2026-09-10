# Alternating Current — Mind Map

**Physics 2nd Year · Chapter 10**
**One of the highest-return chapters in 2nd year Physics. The LCR circuit, resonance and
the transformer come back again and again, and every one of them is a formula + a diagram.
Learn the formulas and draw the diagrams — the marks are almost handed to you.**

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                         ALTERNATING  CURRENT
                                  |
   +--------------+---------------+---------------+----------------+
   |              |               |               |                |
 "WHAT IS      "HOW DO WE      "WHAT DOES     "HOW MUCH        "WHAT DO WE
  AC?"          MEASURE IT?"    IT DO IN       POWER IS         BUILD WITH
   |              |             A CIRCUIT?"    USED?"           IT?"
   |              |               |               |                |
   |              |               |               |                |
 i = I0 sin wt  MEAN VALUE      ----+----     P = Vrms Irms    TRANSFORMER
 v = V0 sin wt  over HALF          |            x cos(phi)         |
   |            cycle              |               |            Ns/Np = Vs/Vp
 f = 50 Hz      = 2 I0 / pi        |          POWER FACTOR      = Ip/Is
 in India       = 0.637 I0         |          cos(phi) = R/Z        |
   |              |                |               |            step-up
 Why AC          RMS VALUE         |          Wattless         step-down
 beats DC        = I0/sqrt(2)      |          current              |
 for transmission = 0.707 I0       |          = Irms sin(phi)   4 LOSSES
   |              |                |                               |
 easy to        AC ammeter         |                            copper
 step up/down   reads RMS          |                            eddy current
 with a           |                |                            hysteresis
 transformer    Form factor 1.11   |                            flux leakage
                Peak factor 1.414  |
                                   |
        +----------------+---------+---------+----------------+
        |                |                   |                |
   PURE R           PURE L              PURE C           SERIES LCR
        |                |                   |                |
   V and I in       XL = omega L        XC = 1/(omega C)   Z = sqrt(R^2
   PHASE            I LAGS V by 90      I LEADS V by 90        + (XL-XC)^2)
        |                |                   |                |
   P = Vrms Irms     P = 0 (wattless)   P = 0 (wattless)  tan(phi) =
                                                          (XL - XC) / R
                                                               |
                                                          RESONANCE
                                                          XL = XC
                                                               |
                                                    f0 = 1 / (2 pi sqrt(LC))
                                                    Z minimum = R
                                                    I maximum = V/R
                                                               |
                                                    Q = (1/R) sqrt(L/C)
                                                    Bandwidth = R / L
                                                               |
                                                    RADIO TUNING

                    ALSO:   LC OSCILLATIONS (like a mass on a spring)
                            AC GENERATOR   e = N B A omega sin(omega t)
```

---

## THE 60-SECOND VERSION

Direct current (DC) always flows one way. **Alternating current (AC) keeps reversing** —
in India, 50 complete reversals every second. It is drawn as a sine wave.

```
  1.  AC has no single "value", so we invent one:  the RMS value.
        I_rms = I0 / sqrt(2)       V_rms = V0 / sqrt(2)
      Every meter, every rating on every appliance is the RMS value.

  2.  Three components oppose AC in three different ways:
        RESISTOR   opposes by R            - current in step with voltage
        INDUCTOR   opposes by XL = wL      - current 90 deg BEHIND voltage
        CAPACITOR  opposes by XC = 1/wC    - current 90 deg AHEAD of voltage

  3.  Put all three in a line -> SERIES LCR CIRCUIT.
      Because the three oppositions are at different angles, you do NOT add them.
      You add them like the sides of a right triangle:
        Z = sqrt( R^2 + (XL - XC)^2 )

  4.  At one special frequency XL = XC, they cancel, Z drops to just R,
      and the current SHOOTS UP.  That is RESONANCE.  That is how a radio
      picks one station out of hundreds.

  5.  Because current and voltage are out of step, not all the "apparent"
      power is real power:
        P = V_rms I_rms cos(phi)          cos(phi) = the POWER FACTOR

  6.  A TRANSFORMER changes AC voltage up or down using mutual induction.
      This is the ONLY reason the whole world runs on AC and not DC.
```

**Memory sentence for the phase:** **"ELI the ICE man"**

```
  E L I   ->  in an inductor (L), E (voltage) comes before I (current).
              Current LAGS.
  I C E   ->  in a capacitor (C), I (current) comes before E (voltage).
              Current LEADS.
```

---

## WHERE THE MARKS ARE (AP Inter Physics, 60-mark paper)

```
  +--------------------------------------------------+---------+-------+
  |  TOPIC                                           | SECTION | MARKS |
  +--------------------------------------------------+---------+-------+
  |  Define rms value / peak value relation          |    A    |   2   |
  |  What is inductive / capacitive reactance        |    A    |   2   |
  |  Define power factor / wattless current          |    A    |   2   |
  |  Condition for resonance, resonant frequency     |    A    |   2   |
  |  Numerical on XL, XC or Z                        |    A    |   2   |
  |  AC through a pure inductor (derive, show lag)   |    B    |   4   |
  |  AC through a pure capacitor (derive, show lead) |    B    |   4   |
  |  Transformer - principle, working, losses        |    B    |   4   |
  |     <-- one of the most repeated 4-mark questions          |       |
  |  Power in an AC circuit / power factor           |    B    |   4   |
  |  LC oscillations                                 |    B    |   4   |
  |  SERIES LCR CIRCUIT by phasor method + resonance |    C    |   8   |
  |     <-- THE long-answer question of this chapter          |       |
  +--------------------------------------------------+---------+-------+

  Realistic haul from this chapter:  10 to 14 marks out of 60.
  If you learn ONLY the series LCR derivation and the transformer,
  you already have about 12 marks.
```

---

## STUDY THIS ORDER

```
  STEP 1   What AC is:  i = I0 sin(omega t),  omega = 2 pi f,  f = 50 Hz
              |
  STEP 2   MEAN value and RMS value       <-- do the derivation, it is asked
              |                               I_rms = I0 / sqrt(2)
              |
  STEP 3   AC through a pure RESISTOR     <-- easiest, sets up the method
              |
     +--------+--------+
     |                 |
  STEP 4            STEP 5
  Pure INDUCTOR     Pure CAPACITOR
  XL = omega L      XC = 1/(omega C)
  I lags by 90      I leads by 90
     |                 |
     +--------+--------+
              |
  STEP 6   SERIES LCR by the PHASOR method     *** THE 8-MARK ANSWER ***
              |    Z = sqrt(R^2 + (XL - XC)^2)
              |    tan(phi) = (XL - XC) / R
              |
  STEP 7   RESONANCE      f0 = 1 / (2 pi sqrt(LC))
              |           Q  = (1/R) sqrt(L/C),   bandwidth = R/L
              |
  STEP 8   POWER in AC     P = Vrms Irms cos(phi)
              |            power factor, wattless current
              |
     +--------+--------+
     |                 |
  STEP 9            STEP 10
  LC oscillations   TRANSFORMER          <-- pure theory, easy 4 marks
                    turns ratio + 4 losses
                         |
                    AC generator, AC vs DC
```

---

## THE KEY BOX — these two unlock most of the chapter

```
  +--------------------------------------------------------------+
  |                                                              |
  |          I0                          V0                      |
  |  I_rms = ------            V_rms = ------                    |
  |          sqrt(2)                   sqrt(2)                   |
  |                                                              |
  |        = 0.707 I0                = 0.707 V0                  |
  |                                                              |
  +--------------------------------------------------------------+

  +--------------------------------------------------------------+
  |                                                              |
  |   Z = sqrt( R^2 + (XL - XC)^2 )                              |
  |                                                              |
  |                XL - XC                                       |
  |   tan(phi) = -----------           XL = omega L              |
  |                   R                                          |
  |                                            1                 |
  |   V_rms = I_rms x Z                XC = ---------            |
  |                                          omega C             |
  +--------------------------------------------------------------+
```

Almost every numerical in this chapter is: **find XL, find XC, find Z, find I = V/Z,
find phi, find power.** Five steps. Same five steps every single time.

---

## IF YOU ONLY HAVE 2 DAYS

```
  DAY 1  (about 4 hours)
  ---------------------------------------------------------------
   1 hr   i = I0 sin(wt); mean value 2I0/pi; RMS derivation
          I_rms = I0/sqrt(2). Learn 0.707 and 0.637 by heart.
   1 hr   Pure R, pure L, pure C. Draw all three phasor diagrams
          five times each until you can do them from memory.
          Learn "ELI the ICE man".
   2 hr   SERIES LCR by the phasor method. Write the full 8-mark
          answer out on paper THREE times: circuit diagram,
          phasor diagram, impedance triangle, Z, tan(phi),
          three cases. This alone is 8 marks.

  DAY 2  (about 4 hours)
  ---------------------------------------------------------------
   1 hr   Resonance: XL = XC, f0 = 1/(2 pi sqrt(LC)), the resonance
          curve, Q factor, bandwidth, radio tuning.
   1 hr   Power: P = Vrms Irms cos(phi). Power factor = R/Z.
          Wattless current. How to improve the power factor.
   1 hr   TRANSFORMER: diagram, turns ratio, step-up/step-down,
          the FOUR losses and how each is reduced.
   1 hr   Work through 03-pyq-ap-board.md Section A completely.
```

**If you only have 2 HOURS:** learn the RMS relation, `Z = sqrt(R^2 + (XL - XC)^2)`,
`f0 = 1/(2 pi sqrt(LC))`, `P = Vrms Irms cos(phi)` and the transformer turns ratio.
Those five lines are worth roughly 8 marks on their own.
