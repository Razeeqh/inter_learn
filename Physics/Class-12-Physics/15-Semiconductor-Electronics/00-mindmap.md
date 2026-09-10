# Semiconductor Electronics: Materials, Devices and Simple Circuits — Mind Map

**Physics 2nd Year · Chapter 15**
**A HIGH-YIELD, MOSTLY-THEORY chapter. Almost every mark comes from a
diagram you can draw and a paragraph you can recite. There is very little
hard calculation. This is one of the best chapters in the whole book for a
weak student to score in — so do NOT skip it.**

---

## THE WHOLE CHAPTER ON ONE PAGE

```
              SEMICONDUCTOR  ELECTRONICS
                          |
    +---------------+-----+------+---------------+
    |               |            |               |
 MATERIALS      JUNCTION      DEVICES        TRANSISTOR
 (energy         (p-n)        (special         + LOGIC
  bands)                       diodes)          GATES
    |               |            |               |
    |               |            |               |
 ---+---        ----+----     ---+----       ----+----
 |     |        |       |     |      |       |       |
CLASS  SEMI-  DEPLETION  BIAS  ZENER  LED    npn    LOGIC
IFY    COND.  LAYER      ing    |     PHOTO  pnp    GATES
 |       |        |        |    |     SOLAR   |       |
 |       |     barrier  FORWARD |            3       OR
 |       |     potential   |    voltage      terminals AND
 |       |     0.3 V Ge    |    regulator     |      NOT
 |       |     0.7 V Si  REVERSE            E,B,C    NAND
 |       |        |        |                  |      NOR
 |       |     diffusion   |               I(E)=I(B)  |
 |       |     + drift   V-I CURVE          + I(C)  universal
 |       |                  |                  |     gates
 |       |               knee V             alpha,beta
 |       |               breakdown V           |
 |       |                  |                CE mode
 |       |             RECTIFIER               |
 |       |                  |               input +
 |       |            +-----+-----+         output
 |       |            |           |         characteristics
 |       |         HALF-WAVE  FULL-WAVE        |
 |       |            |           |          3 regions
 |       |         ripple 1.21  ripple 0.48  cutoff
 |       |         eff 40.6%    eff 81.2%    active
 |       |            |           |          saturation
 |       |            +-----+-----+             |
 |       |                  |              +----+----+
 |       |               FILTER            |         |
 |       |               (capacitor)   AMPLIFIER   SWITCH
 |       |                                 |         |
 |       |                            gain + 180 deg  ON/OFF
 |       |                            phase reversal
 |       |                                 |
 |       |                            OSCILLATOR
 |       |                            (feedback)
 |       |
 |    INTRINSIC  ------  pure Si / Ge, n(e) = n(h) = n(i)
 |       |
 |    EXTRINSIC ---+--- n-TYPE : pentavalent (P,As,Sb,Bi)
 |                 |             donor level, majority = ELECTRONS
 |                 |
 |                 +--- p-TYPE : trivalent (B,Al,In,Ga)
 |                                acceptor level, majority = HOLES
 |
 +--- METAL      : band gap = 0  (bands overlap)
 +--- SEMICOND.  : band gap small, about 1 eV or less
 +--- INSULATOR  : band gap large, more than 3 eV
```

---

## THE 60-SECOND VERSION

```
  1.  Electrons in a solid live in BANDS. The gap between the last full
      band (valence) and the first empty band (conduction) decides
      everything.

         gap = 0        ->  METAL         (conducts always)
         gap ~ 1 eV     ->  SEMICONDUCTOR (conducts when heated / doped)
         gap > 3 eV     ->  INSULATOR     (never conducts)

  2.  A pure semiconductor is useless. So we ADD IMPURITY (doping):
         add 5-valent atom  ->  extra electron  ->  n-TYPE
         add 3-valent atom  ->  extra hole      ->  p-TYPE

  3.  Join a p piece and an n piece  ->  p-n JUNCTION (a DIODE).
      It allows current ONE WAY ONLY.

  4.  One-way current turns AC into DC  ->  RECTIFIER.

  5.  Sandwich three layers  ->  TRANSISTOR. A small base current
      controls a big collector current  ->  AMPLIFIER / SWITCH.

  6.  Wire switches in patterns  ->  LOGIC GATES  ->  computers.
```

That is the whole chapter. Everything else is detail hanging on those six lines.

---

## WHERE THE MARKS ARE (AP Inter Physics, 60-mark paper)

The AP 2nd year Physics paper is built like this:

```
  +-----------+----------------------+--------------+-----------+
  | SECTION   |  QUESTIONS           |  MARKS EACH  |  TOTAL    |
  +-----------+----------------------+--------------+-----------+
  |    A      |  10, answer ALL      |      2       |    20     |
  |    B      |  8, answer any 6     |      4       |    24     |
  |    C      |  3, answer any 2     |      8       |    16     |
  +-----------+----------------------+--------------+-----------+
                                       GRAND TOTAL  =    60
```

Where THIS chapter lands:

```
  +--------------------------------------------+---------+-------+
  |  TOPIC                                     | SECTION | MARKS |
  +--------------------------------------------+---------+-------+
  |  Define hole / intrinsic / extrinsic       |    A    |   2   |
  |  What is doping? Name the dopants          |    A    |   2   |
  |  Barrier / knee / breakdown voltage        |    A    |   2   |
  |  Write alpha-beta relation                 |    A    |   2   |
  |  Truth table of NAND / NOR                 |    A    |   2   |
  |  Why is the base thin and lightly doped?   |    A    |   2   |
  +--------------------------------------------+---------+-------+
  |  Distinguish intrinsic vs extrinsic        |    B    |   4   |
  |  Distinguish n-type vs p-type              |    B    |   4   |
  |  p-n junction formation + depletion layer  |    B    |   4   |
  |  Forward vs reverse bias                   |    B    |   4   |
  |  Zener diode as voltage regulator          |    B    |   4   |
  |  LED / photodiode / solar cell             |    B    |   4   |
  |  Logic gates with truth tables             |    B    |   4   |
  +--------------------------------------------+---------+-------+
  |  HALF-WAVE + FULL-WAVE RECTIFIER, full     |    C    |   8   |
  |  working with circuit and waveforms        |         |       |
  |     <-- THE most repeated 8-mark question  |         |       |
  |  TRANSISTOR in CE mode: characteristics    |    C    |   8   |
  |  or transistor as an AMPLIFIER             |         |       |
  +--------------------------------------------+---------+-------+

  This chapter regularly supplies ONE of the three 8-mark long answers
  in Section C — usually the RECTIFIER or the TRANSISTOR.

  Realistic haul from this chapter:  10 to 16 marks out of 60.
```

**Read that again.** One long answer from here is 8 marks — that is more than
13% of the whole paper, and it is a question you can answer by drawing two
circuits and two waveforms plus a paragraph. Nothing else in the book is
that cheap.

---

## STUDY THIS ORDER

```
  STEP 1   ENERGY BANDS
           metal / semiconductor / insulator + band gap values
                  |
                  |   (nothing else makes sense without this)
                  v
  STEP 2   INTRINSIC semiconductor
           electron, HOLE, how conduction happens, n(e) = n(h) = n(i)
                  |
                  v
  STEP 3   EXTRINSIC semiconductor
                  |
          +-------+-------+
          |               |
      n-TYPE          p-TYPE
      pentavalent     trivalent
      donor level     acceptor level
      majority = e-   majority = holes
          |               |
          +-------+-------+
                  |
             MASS ACTION LAW    n(e) x n(h) = n(i)^2
                  |
             TEMPERATURE EFFECT (opposite to a metal)
                  |
                  v
  STEP 4   p-n JUNCTION
           depletion region, barrier potential, diffusion + drift
                  |
                  v
  STEP 5   FORWARD BIAS  and  REVERSE BIAS
           circuits + V-I characteristic + knee V + breakdown V
                  |
                  v
  STEP 6   RECTIFIERS          <-- 8-MARK QUESTION LIVES HERE
                  |
          +-------+-------+
          |               |
     HALF-WAVE       FULL-WAVE
     circuit         circuit
     waveform        waveform
          |               |
          +-------+-------+
                  |
              FILTER, ripple factor, efficiency
                  |
                  v
  STEP 7   SPECIAL DIODES
           ZENER (regulator) / photodiode / LED / solar cell
                  |
                  v
  STEP 8   TRANSISTOR
           npn, pnp, symbols, 3 terminals, why base is thin
           I(E) = I(B) + I(C),  alpha, beta
                  |
                  v
  STEP 9   COMMON EMITTER
           input + output characteristics, 3 regions
                  |
          +-------+-------+
          |               |
      AMPLIFIER        SWITCH
      gain + phase        |
      reversal         OSCILLATOR (outline)
                  |
                  v
  STEP 10  LOGIC GATES
           OR AND NOT NAND NOR, symbols, truth tables, Boolean
           NAND and NOR are UNIVERSAL
```

---

## THE ONE TABLE THAT EARNS THE MOST MARKS

```
  +------------------+-----------+-------------------------------------+
  |  MATERIAL        | BAND GAP  |  BEHAVIOUR                          |
  +------------------+-----------+-------------------------------------+
  |  CONDUCTOR       |  zero     |  Valence and conduction bands       |
  |  (metal)         |  (bands   |  OVERLAP. Free electrons always.    |
  |                  | overlap)  |  Resistance INCREASES with temp.    |
  +------------------+-----------+-------------------------------------+
  |  SEMICONDUCTOR   |  small    |  Ge = 0.72 eV   Si = 1.1 eV         |
  |                  |  ~1 eV    |  Insulator at 0 K, conducts on      |
  |                  |           |  heating. Resistance DECREASES      |
  |                  |           |  with temperature.                  |
  +------------------+-----------+-------------------------------------+
  |  INSULATOR       |  large    |  more than 3 eV (diamond ~ 6 eV)    |
  |                  |  > 3 eV   |  No electron can cross. No current. |
  +------------------+-----------+-------------------------------------+
```

And the picture that goes with it — **learn to draw this in 30 seconds:**

```
     CONDUCTOR              SEMICONDUCTOR            INSULATOR

  ///////////////         ///////////////        ///////////////
  //  CONDUCTION//        //  CONDUCTION//       //  CONDUCTION//
  ////  BAND   ///        ////  BAND   ///       ////  BAND   ///
  ///////////////         ///////////////        ///////////////
  ///////////////              ^                        ^
  //// VALENCE //              |  Eg ~ 1 eV             |
  ////  BAND   ///             |  (small)               |  Eg > 3 eV
  ///////////////              v                        |  (large)
                          ///////////////               |
   BANDS OVERLAP          ////VALENCE ///               |
   Eg = 0                 ////  BAND  ///               v
                          ///////////////          ///////////////
                                                   ////VALENCE ///
                                                   ////  BAND  ///
                                                   ///////////////
```

---

## THE 5 DIAGRAMS THAT CARRY THE CHAPTER

If you can draw these five from memory you have already passed this chapter:

```
  +----+-------------------------------------------+----------------+
  | #  |  DIAGRAM                                  |  WORTH         |
  +----+-------------------------------------------+----------------+
  | 1  |  The three band diagrams (above)          |  2 or 4 marks  |
  | 2  |  p-n junction with depletion layer        |  2 or 4 marks  |
  | 3  |  V-I characteristic of a diode            |  4 marks       |
  | 4  |  Full-wave rectifier + waveforms          |  8 marks       |
  | 5  |  CE amplifier / output characteristics    |  8 marks       |
  +----+-------------------------------------------+----------------+
```

---

## IF YOU ONLY HAVE 2 DAYS

```
  ================================ DAY 1 ================================

  MORNING   (2 hours)
     - Three band diagrams + band gap values of Ge and Si.  (draw x5)
     - Intrinsic: electron, hole, n(e) = n(h) = n(i).
     - Doping: n-type (5-valent, donor, electrons)
               p-type (3-valent, acceptor, holes)
     - Mass action law  n(e) x n(h) = n(i)^2
     - Temperature effect and WHY it is opposite to a metal.

  AFTERNOON (2 hours)
     - p-n junction: depletion layer, barrier potential (Ge 0.3, Si 0.7).
     - Diffusion current vs drift current.
     - Forward bias circuit + reverse bias circuit. (draw x5)
     - V-I characteristic curve with knee voltage and breakdown voltage.

  NIGHT     (1 hour)
     - Redraw everything from the morning WITHOUT looking.

  ================================ DAY 2 ================================

  MORNING   (2.5 hours)   *** THE 8-MARK BLOCK ***
     - HALF-WAVE rectifier: circuit, working, input+output waveform.
     - FULL-WAVE rectifier: circuit, working, input+output waveform.
     - Filter (capacitor), ripple factor 1.21 / 0.48,
       efficiency 40.6% / 81.2%.
     - Practise writing the whole answer on paper in 12 minutes.

  AFTERNOON (2 hours)
     - Transistor: npn/pnp structure + symbols, why base is thin.
     - I(E) = I(B) + I(C),  alpha = I(C)/I(E),  beta = I(C)/I(B)
       and  beta = alpha / (1 - alpha).
     - CE configuration, input + output characteristics, 3 regions.
     - Transistor as amplifier: gain and 180 degree phase reversal.

  EVENING   (1.5 hours)
     - Zener as voltage regulator (circuit + working).
     - LED, photodiode, solar cell — 3 lines each.
     - Logic gates: 5 symbols + 5 truth tables + Boolean expressions.
       NAND and NOR are UNIVERSAL.

  NIGHT     (1 hour)
     - Write the FULL-WAVE RECTIFIER answer once more, closed book.
     - Write the 5 truth tables once more, closed book.
```

---

## THE HONEST BOTTOM LINE

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   You do not need to be good at maths to score in this chapter.  |
  |                                                                  |
  |   You need to be able to DRAW 5 diagrams and WRITE 10 short       |
  |   paragraphs. That is a memory job, not a brains job.             |
  |                                                                  |
  |   Target from this chapter alone:  12 marks out of 60.            |
  |                                                                  |
  +------------------------------------------------------------------+
```
