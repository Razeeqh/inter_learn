# Electromagnetic Waves — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

This chapter has only about 22 distinct shapes in total — which is why it is
such cheap marks. Learn the shapes and you have learnt the chapter.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

# GROUP A — DISPLACEMENT CURRENT

```
  PATTERN 1 — DEFINE DISPLACEMENT CURRENT                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is displacement current?" / "Define displacement
            current and give its expression."
            THE SINGLE MOST ASKED QUESTION IN THIS CHAPTER.
  METHOD    1. One sentence in words: the current produced by a
               TIME-VARYING ELECTRIC FIELD, not by moving charges.
            2. The formula:   Id = eps0 d(PhiE)/dt
            3. State the SI unit: ampere.
  TRAP      Giving only the words, or only the formula, gets 1 mark.
            YOU NEED BOTH. Also do not say "current due to a changing
            magnetic field" — that is Faraday, a different thing.
```

```
  PATTERN 2 — WHY WAS AMPERE'S LAW MODIFIED?                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the inconsistency in Ampere's law?" /
            "Why did Maxwell modify Ampere's circuital law?"
  METHOD    1. Take a charging capacitor and one Amperian loop.
            2. Surface S1 cuts the WIRE      -> enclosed current = I
            3. Surface S2 passes through the GAP -> enclosed current = 0
            4. SAME LOOP, TWO ANSWERS -> the law is inconsistent.
            5. Maxwell added Id so that (Ic + Id) is the same for
               every surface.
            6. DRAW the two-surface diagram if it is a 4-mark question.
  TRAP      Writing "Ampere's law fails for a capacitor" and stopping.
            The MARK IS IN THE PHRASE "two different surfaces bounded
            by the same loop give different enclosed currents".
```

```
  PATTERN 3 — SHOW THAT Id = Ic                                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the displacement current equals the conduction
            current in a charging capacitor."
  METHOD    1. E between the plates = q / (eps0 A)
            2. PhiE = E A = q / eps0
            3. Id = eps0 d(PhiE)/dt = dq/dt = Ic
            4. Conclude: the TOTAL current (Ic + Id) is CONTINUOUS
               throughout the circuit.
  TRAP      Forgetting step 4. The continuity statement is a mark
            on its own.
```

```
  PATTERN 4 — DISPLACEMENT CURRENT NUMERICAL                    2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Any capacitor with a charging current, a rate of change of
            voltage, of field, or of flux.
  METHOD    Pick the right form and stop:
              given charging current I      ->  Id = I     (one line)
              given C and dV/dt             ->  Id = C dV/dt
              given area and dE/dt          ->  Id = eps0 A dE/dt
              given dPhiE/dt                ->  Id = eps0 dPhiE/dt
  TRAP      (i) cm^2 -> m^2 needs x 10^-4.
            (ii) pF -> F needs x 10^-12 , microF -> x 10^-6.
            (iii) Plate SEPARATION is usually spare data. Ignore it.
```

```
  PATTERN 5 — STATE THE AMPERE-MAXWELL LAW                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the modified Ampere's law."
  METHOD    INT B.dl = mu0 ( Ic + Id ) = mu0 Ic + mu0 eps0 d(PhiE)/dt
            Then one line of meaning: a magnetic field is produced BOTH
            by a current AND by a changing electric field.
  TRAP      Writing mu0 eps0 in the FIRST term as well. Only the second
            term carries eps0.
```

---

# GROUP B — MAXWELL'S EQUATIONS AND THE PREDICTION

```
  PATTERN 6 — STATE MAXWELL'S EQUATIONS WITH MEANING           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write Maxwell's equations." / "Give any two Maxwell
            equations and their physical significance."
  METHOD    Present as a 4-row table: equation | name | meaning.
              1. INT E.dA = q/eps0     Gauss (electricity) — charges
                                       are sources of E
              2. INT B.dA = 0          Gauss (magnetism) — NO monopoles
              3. INT E.dl = -dPhiB/dt  Faraday — changing B makes E
              4. INT B.dl = mu0 Ic +
                 mu0 eps0 dPhiE/dt     Ampere-Maxwell — current AND
                                       changing E make B
  TRAP      Just listing the equations with no meaning. The MEANING is
            worth as much as the equation.
```

```
  PATTERN 7 — HOW MAXWELL PREDICTED THE SPEED OF LIGHT           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How did Maxwell conclude that light is an EM wave?" /
            "Give the expression for the velocity of EM waves in free
            space and find its value."
  METHOD    1. c = 1/sqrt(mu0 eps0)
            2. Substitute mu0 = 4 pi x 10^-7, eps0 = 8.854 x 10^-12
            3. mu0 eps0 = 1.11 x 10^-17 , sqrt = 3.34 x 10^-9
            4. c = 3 x 10^8 m/s
            5. This EQUALS the measured speed of light -> LIGHT IS AN
               ELECTROMAGNETIC WAVE.
  TRAP      Losing the powers of ten. Do it as
            (1.257 x 10^-6)(8.854 x 10^-12): multiply the numbers,
            ADD the exponents (-6 + -12 = -18, then shift).
            Sanity check: the answer MUST be 3 x 10^8.
```

```
  PATTERN 8 — SPEED / REFRACTIVE INDEX IN A MEDIUM                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   eps_r and mu_r are given; asked for v or n.
  METHOD    1. n = sqrt( mu_r eps_r )
            2. v = c / n     (or directly v = 1/sqrt(mu eps) )
            3. If wavelength is asked: lambda_medium = lambda_vacuum / n
  TRAP      FREQUENCY DOES NOT CHANGE inside a medium. If an option
            says the frequency drops, it is wrong.
```

```
  PATTERN 9 — WHAT PRODUCES AN EM WAVE?                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How are electromagnetic waves produced?"
  METHOD    An ACCELERATED (oscillating) CHARGE radiates EM waves.
            The frequency of the wave = the frequency of oscillation
            of the charge.
            Contrast: a charge at rest, or moving with constant
            velocity, does NOT radiate.
  TRAP      Saying "by a current". A steady current does not radiate.
            The word you need is ACCELERATED.
```

---

# GROUP C — NATURE AND PROPERTIES

```
  PATTERN 10 — LIST THE PROPERTIES OF EM WAVES                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Give four properties / characteristics of EM waves."
            (2 marks -> give 4 points.  4 marks -> give 6 to 8 points.)
  METHOD    Numbered list, one line each:
            1. transverse
            2. E _|_ B, both _|_ to direction of travel (along E x B)
            3. E and B in phase
            4. E0/B0 = c
            5. no medium needed
            6. not deflected by E or B fields (uncharged)
            7. carry energy and momentum -> radiation pressure
            8. same speed c in vacuum for all frequencies
  TRAP      Writing a vague paragraph. The examiner counts POINTS.
            Number them.
```

```
  PATTERN 11 — DRAW AN EM WAVE                                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw a diagram of a plane electromagnetic wave." /
            asked as part of a properties question.
  METHOD    Draw three mutually perpendicular axes. Put E as a sine
            curve in one plane, B as a sine curve in the perpendicular
            plane, arrow along the third axis for the direction.
            LABEL:  E, B, direction of propagation, E0, B0, lambda.
  TRAP      Drawing E and B out of step. They must peak at the SAME
            place — they are IN PHASE.
```

```
  PATTERN 12 — E0 / B0 = c CALCULATION                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "E0 = ... , find B0"  or  "B0 = ... , find E0"
  METHOD    B0 = E0 / c        or       E0 = c B0
  TRAP      B0 must come out TINY, around 10^-7 to 10^-8 T.
            If it comes out large, you multiplied instead of dividing.
            Also convert nT (x 10^-9) and microT (x 10^-6) first.
```

```
  PATTERN 13 — READ OFF A GIVEN WAVE EQUATION                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "E = E0 sin(kx - omega t). Find lambda / nu / B0 /
            direction."
  METHOD    1. k = coefficient of x   ->  lambda = 2 pi / k
            2. omega = coefficient of t -> nu = omega / (2 pi)
            3. CHECK omega / k = 3 x 10^8   (if not, you misread)
            4. B0 = E0 / c
            5. ( kx - omega t ) -> travels along +x
               ( kx + omega t ) -> travels along -x
  TRAP      Confusing k with lambda, and omega with nu. Both need the
            2 pi. Always run the omega/k = c check.
```

```
  PATTERN 14 — DIRECTION OF E, B AND PROPAGATION                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wave travels along +z with E along +x. Find the
            direction of B." (or any permutation)
  METHOD    Direction of propagation is along  E x B.
            Use the cyclic order:  x -> y -> z -> x
            If E is along x and travel is along z, then B is along... 
            test with the cross product until it fits.
  TRAP      Reversing the order. It is E CROSS B, never B cross E.
```

```
  PATTERN 15 — SHOW E/B = c AT EVERY INSTANT                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the ratio of E to B is c at all times."
  METHOD    1. Write E = E0 sin(kx - omega t), B = B0 sin(kx - omega t)
            2. Note the identical bracket -> in phase
            3. Divide: E/B = E0/B0
            4. And E0/B0 = omega/k = c
  TRAP      Only proving it for the amplitudes. The point of the
            question is that being IN PHASE makes it true at every
            instant.
```

---

# GROUP D — ENERGY, INTENSITY, PRESSURE

```
  PATTERN 16 — PROVE uE = uB                                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the electric and magnetic energy densities of
            an EM wave are equal."
  METHOD    uB = B^2/(2 mu0) , put B = E/c , and 1/c^2 = mu0 eps0
                = E^2 mu0 eps0 / (2 mu0)
                = (1/2) eps0 E^2  =  uE
            Conclusion: the energy is shared EQUALLY, half and half.
  TRAP      Forgetting to substitute 1/c^2 = mu0 eps0. That single
            substitution is the whole proof.
```

```
  PATTERN 17 — ENERGY DENSITY NUMERICAL                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   E0 given, or I given, asked for average energy density.
  METHOD    From E0:   < u > = (1/2) eps0 E0^2
            From I :   < u > = I / c          <-- much faster
            From B0:   < u > = B0^2 / (2 mu0)
  TRAP      Using E instead of E0 without halving, or forgetting that
            the AVERAGE already contains the factor 1/2 from <sin^2>.
```

```
  PATTERN 18 — FIND E0 FROM INTENSITY                              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Sunlight of intensity 1.4 kW/m^2 ... find E0 and B0."
  METHOD    1. I = (1/2) eps0 E0^2 c
            2. E0^2 = 2 I / (eps0 c)
            3. E0 = sqrt( ... )
            4. B0 = E0 / c
            (For a lamp, first get I = P / (4 pi r^2).)
  TRAP      Forgetting the square root at step 3. Sanity check:
            E0 for sunlight is about 1000 V/m; for a 100 W bulb at a
            few metres it is a few tens of V/m.
```

```
  PATTERN 19 — RADIATION PRESSURE / FORCE                      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the radiation pressure / the force exerted by
            sunlight on ..."
  METHOD    1. Read the surface type.
                 ABSORBING / black    ->  P = I/c
                 REFLECTING / mirror  ->  P = 2I/c
            2. F = P x A
            3. If energy U is given instead: p = U/c (or 2U/c),
               and F = p / t.
  TRAP      THE FACTOR OF 2. It is the only thing being tested.
            Underline the word "absorbing" or "reflecting" in the
            question before you start.
```

```
  PATTERN 20 — MOMENTUM OF AN EM WAVE                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What momentum does an EM wave carrying energy U deliver?"
  METHOD    p = U / c   (absorbed)  ,   p = 2U / c   (reflected)
  TRAP      Dividing by c^2. It is c, not c squared.
```

---

# GROUP E — HERTZ AND THE SPECTRUM

```
  PATTERN 21 — HERTZ'S EXPERIMENT                                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Describe Hertz's experiment."
  METHOD    1. TRANSMITTER: induction coil + two plates + spark gap
               between brass spheres. Charges oscillate violently
               across the gap -> accelerated charges -> radiation.
            2. RECEIVER: an unconnected copper ring with a tiny gap,
               placed metres away.
            3. OBSERVATION: a spark in the transmitter caused a spark
               in the receiver.
            4. CONCLUSION: EM waves are real; Hertz measured
               lambda about 6 m, nu about 5 x 10^7 Hz, giving
               speed 3 x 10^8 m/s — Maxwell's predicted value.
            5. He also showed reflection, refraction and POLARISATION.
  TRAP      Forgetting the CONCLUSION. The point of the experiment is
            the confirmation of Maxwell's prediction, not the sparks.
```

```
  PATTERN 22 — NAME THE BAND / ORDER THE SPECTRUM                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Arrange in increasing frequency" / "Which has the
            shortest wavelength?" / "Which lies between X and Y?"
  METHOD    Recite: RADIO MAN IN VIZAG USES X-RAY GUN
                    R     M   I    V     U      X     G
            Left to right: lambda DOWN, nu UP, energy UP.
            Anchor: VISIBLE = 400 to 700 nm.
  TRAP      Reading the question as "wavelength" when it says
            "frequency", or the reverse. Circle the word first.
```

```
  PATTERN 23 — WAVELENGTH <-> FREQUENCY CONVERSION                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the frequency of light of wavelength 5000 A." /
            "A station broadcasts at 100 MHz; find lambda."
  METHOD    c = nu lambda , so nu = c/lambda or lambda = c/nu.
            CONVERT FIRST:
               1 A  = 10^-10 m       1 nm = 10^-9 m
               1 MHz = 10^6 Hz       1 GHz = 10^9 Hz
  TRAP      Not converting angstroms or nanometres to metres. This
            single slip is the most common lost mark in the chapter.
```

```
  PATTERN 24 — SOURCE / DETECTOR / USES OF A BAND               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How are X-rays produced? Give two uses." /
            "Give the sources, detectors and uses of infrared."
  METHOD    Answer in THREE labelled lines:
               SOURCE   : ...
               DETECTOR : ...
               USES     : ... (give two or three)
            Include the wavelength range if the question asks for it.
  TRAP      Answering only the "uses" part when the question asked for
            production and detection too. Count the sub-parts and
            answer every one.
```

```
  PATTERN 25 — DISTINGUISH X-RAYS FROM GAMMA RAYS                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How do X-rays differ from gamma rays?"
  METHOD    The wavelength ranges OVERLAP, so the difference is the
            SOURCE:
               X-rays     -> from OUTSIDE the nucleus (electrons)
               Gamma rays -> from INSIDE the NUCLEUS (radioactivity)
            Add: gamma rays are more energetic and more penetrating.
  TRAP      Saying only "gamma rays have shorter wavelength". True on
            average, but the ranges overlap — the SOURCE is the real
            answer.
```

```
  PATTERN 26 — GREENHOUSE EFFECT                               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the greenhouse effect?"
  METHOD    1. Short-wave solar radiation passes through the
               atmosphere and warms the Earth.
            2. The warm Earth re-radiates LONG-WAVE INFRARED.
            3. CO2, water vapour, methane and ozone ABSORB that
               infrared and send it back down.
            4. Heat gets in easily but not out -> the surface stays
               warm (like greenhouse glass).
            5. Excess CO2 -> GLOBAL WARMING.
  TRAP      Not naming INFRARED. That word is the mark.
```

```
  PATTERN 27 — OZONE LAYER                                     2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the importance of the ozone layer?"
  METHOD    1. O3 in the stratosphere, 15 to 35 km up.
            2. It ABSORBS harmful ULTRAVIOLET radiation.
            3. Without it: skin cancer, cataracts, crop and plankton
               damage.
            4. CFCs destroy ozone -> the ozone hole over Antarctica.
  TRAP      Not naming ULTRAVIOLET. Same mistake as pattern 26.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right-hand column and go.

| Question stem | Pattern |
|---|---|
| "Define displacement current." | **1** |
| "Why is Ampere's law inconsistent?" | **2** |
| "Show that Id = Ic for a capacitor." | **3** |
| "A 2 microF capacitor's voltage rises at 10^5 V/s. Find Id." | **4** |
| "Write the Ampere–Maxwell law." | **5** |
| "State Maxwell's four equations and their meanings." | **6** |
| "How did Maxwell find the speed of light?" | **7** |
| "eps_r = 4, mu_r = 1. Find the speed of light in the medium." | **8** |
| "How are electromagnetic waves produced?" | **9** |
| "Give six properties of EM waves." | **10** |
| "Draw a plane electromagnetic wave." | **11** |
| "B0 = 510 nT. Find E0." | **12** |
| "E = 60 sin(500x + 1.5 x 10^11 t). Find lambda." | **13** |
| "Wave travels along +z, E along +x. Where is B?" | **14** |
| "Show that E/B = c at every instant." | **15** |
| "Prove the two energy densities are equal." | **16** |
| "E0 = 6 V/m. Find the average energy density." | **17** |
| "Sunlight is 1.4 kW/m^2. Find E0 and B0." | **18** |
| "Find the force of sunlight on a 2 m^2 mirror." | **19** |
| "How much momentum does 30 J of light deliver?" | **20** |
| "Describe how Hertz produced EM waves." | **21** |
| "Which has the highest frequency?" | **22** |
| "Light of 5000 A — find its frequency." | **23** |
| "How are microwaves produced and detected?" | **24** |
| "Distinguish X-rays from gamma rays." | **25** |
| "Why is the Earth getting warmer?" | **26** |
| "Why is the ozone hole dangerous?" | **27** |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   BE REALISTIC. This chapter offers you 2 marks nearly every      |
  |   year in Section A, and a 4-mark question now and then in        |
  |   Section B. It is NOT a Section C chapter.                       |
  |                                                                   |
  |   So buy the cheap marks and walk away.                           |
  |                                                                   |
  +-------------------------------------------------------------------+


  TIER 1  —  90 MINUTES  ->  locks the Section A mark
  --------------------------------------------------------------------
     Pattern 1    Define displacement current
     Pattern 7    c = 1/sqrt(mu0 eps0) = 3 x 10^8 m/s
     Pattern 12   B0 = E0/c
     Pattern 22   The spectrum order (RADIO MAN IN VIZAG USES X-RAY GUN)
     Pattern 23   c = nu lambda conversions
     Pattern 24   One source and one use for each band

     -> After this you can answer almost any 2-mark question this
        chapter can throw at you.


  TIER 2  —  ANOTHER 90 MINUTES  ->  covers the occasional Section B
  --------------------------------------------------------------------
     Pattern 2    The two-surface inconsistency (with the diagram)
     Pattern 3    Proof that Id = Ic
     Pattern 6    Maxwell's four equations in words
     Pattern 10   The properties list, numbered
     Pattern 26   Greenhouse effect
     Pattern 27   Ozone layer


  TIER 3  —  ONLY IF YOU HAVE SPARE TIME
  --------------------------------------------------------------------
     Pattern 16   Proof uE = uB
     Pattern 18   E0 from intensity
     Pattern 19   Radiation pressure with the factor of 2
     Pattern 21   Hertz's experiment
     Pattern 13   Reading a wave equation

     These appear rarely in the board paper, but patterns 13, 19 and
     22 are common in EAPCET, so do them if you are writing EAPCET.


  DO NOT DO
  --------------------------------------------------------------------
     Do not memorise every wavelength boundary to three digits.
     Do not prepare an 8-mark answer.
     Do not spend a second day on this chapter.
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   THE HONEST SUMMARY:                                             |
  |                                                                   |
  |   Small chapter. Small marks. But the marks are almost FREE,      |
  |   and they take almost no time to collect.                        |
  |                                                                   |
  |   Do it in week one, keep the spectrum sentence alive with a      |
  |   ten-second revision each week, and never lose those 2 marks     |
  |   again.                                                          |
  |                                                                   |
  +-------------------------------------------------------------------+
```
