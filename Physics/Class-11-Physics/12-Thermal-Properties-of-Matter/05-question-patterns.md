# Thermal Properties of Matter — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — HEAT vs TEMPERATURE                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between heat and temperature."
            "Define heat / temperature."
  METHOD    HEAT = energy IN TRANSIT due to a temperature difference,
                   unit joule.
            TEMPERATURE = degree of hotness, decides the DIRECTION of
                   heat flow, unit kelvin.
            Add one contrast: a spark is at 1000 degC but carries almost
            no heat; the sea is at 25 degC but carries an enormous amount.
  TRAP      Never write "a body contains heat". A body contains INTERNAL
            ENERGY. Heat is only the energy that is MOVING.
```

```
  PATTERN 2 — CONVERT BETWEEN TEMPERATURE SCALES                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Convert X degC into degF / K."
            "At what temperature do two scales read the same?"
            "A thermometer reads 2 degC in ice and 98 degC in steam ..."
  METHOD    1. Use the master ratio, which works for EVERY scale:

                   C - 0       F - 32       K - 273.15
                  -------  =  --------  =  ------------
                    100         180            100

            2. For "same reading", set the two expressions equal
               and solve one linear equation.
            3. For a FAULTY thermometer:

                   correct        reading - lower fixed point
                  ---------  =  -------------------------------
                     100          upper fixed pt - lower fixed pt

  TRAP      A temperature DIFFERENCE does not use the +32.
            dF = (9/5) dC only.
  LEARN     -40 degC = -40 degF. Asked constantly.
```

```
  PATTERN 3 — GAS THERMOMETER / ABSOLUTE ZERO                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Constant volume gas thermometer" / "What is absolute zero?"
  METHOD    T = 273.16 x ( P / P_tr )   kelvin
            Absolute zero = -273.15 degC = 0 K, the temperature at which
            the pressure and volume of an ideal gas would vanish.
  TRAP      273.16 (triple point) and 273.15 (ice point) are different
            numbers. The gas-thermometer formula uses 273.16.
```

```
  PATTERN 4 — LINEAR EXPANSION NUMERICAL                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A rod of length L at T1 is heated to T2. Find the new length /
            the increase in length / alpha."
  METHOD    1. dL = alpha L dT
            2. L2 = L1 ( 1 + alpha dT )
            3. If alpha is asked:  alpha = dL / ( L dT )
  TRAP      Keep L and dL in the SAME unit. Mixing metres and millimetres
            is the usual disaster.
```

```
  PATTERN 5 — DERIVE beta = 2 alpha AND gamma = 3 alpha           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the coefficient of areal expansion is twice the
            coefficient of linear expansion." (and the cubical version)
  METHOD    1. Square of side L  ->  L' = L(1 + alpha dT)
            2. A' = L'^2 = L^2 (1 + alpha dT)^2
            3. Expand: 1 + 2 alpha dT + (alpha dT)^2
            4. SAY that (alpha dT)^2 ~ 10^-10 is NEGLIGIBLE and drop it.
            5. Compare with A' = A(1 + beta dT)  ->  beta = 2 alpha
            6. Repeat with a CUBE and (1+x)^3 = 1+3x+3x^2+x^3
               ->  gamma = 3 alpha
            7. Finish with alpha : beta : gamma = 1 : 2 : 3
  TRAP      Omitting step 4 - the sentence about neglecting higher powers -
            costs a mark. The derivation is not exact without it.
  NOTE      *** ONE OF THE TOP THREE QUESTIONS IN THIS CHAPTER ***
```

```
  PATTERN 6 — AREAL OR CUBICAL EXPANSION NUMERICAL                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the increase in AREA of a sheet / VOLUME of a sphere."
  METHOD    1. Convert alpha to what you need:  beta = 2 alpha ,
               gamma = 3 alpha.
            2. dA = beta A dT      or      dV = gamma V dT
  TRAP      Using alpha directly for an area or a volume. Read the
            question: sheet/plate -> beta ; sphere/cube/block -> gamma.
```

```
  PATTERN 7 — THE EXPANDING HOLE / CAVITY                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A hole is cut in a plate and the plate is heated. What
            happens to the hole?"  /  "the cavity in a metal sphere"
  METHOD    State clearly: THE HOLE EXPANDS, exactly as if it were filled
            with the same metal. Then use dD = alpha D dT (or gamma for a
            cavity volume).
  TRAP      The instinct "the metal expands inward so the hole shrinks"
            is WRONG. Think of a photograph being enlarged - every gap
            in it grows too.
```

```
  PATTERN 8 — DENSITY AFTER HEATING                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the density at the new temperature" /
            "percentage change in density"
  METHOD    Mass is constant, volume grows:

                        rho1
              rho2 = ------------- ~ rho1 ( 1 - gamma dT )
                     1 + gamma dT

            Fractional DECREASE in density = gamma dT.
  TRAP      Density goes DOWN on heating. A positive answer for the
            change means you have the sign wrong.
```

```
  PATTERN 9 — THERMAL STRESS IN A CLAMPED ROD                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A rod is clamped rigidly between two walls and heated.
            Find the stress / the force on the supports."
  METHOD    1. If free, it would expand by dL = alpha L dT.
            2. The walls compress it back, so strain = dL/L = alpha dT.
            3. Y = stress/strain  ->  STRESS = Y alpha dT
            4. FORCE = stress x A = Y A alpha dT
  TRAP      NO LENGTH APPEARS IN THE STRESS. If L is in your final
            expression you have gone wrong. Convert cm^2 to m^2 for
            the force.
```

```
  PATTERN 10 — PENDULUM CLOCK GAINS OR LOSES TIME                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How much time does a pendulum clock lose/gain per day when
            the temperature changes by dT?"
  METHOD    1. T = 2 pi sqrt(L/g), so T is proportional to sqrt(L).
            2. dT/T = (1/2)(dL/L) = (1/2) alpha dt
            3. Time lost per day = (1/2) alpha dt x 86400 seconds
            4. State the direction: HOTTER -> longer rod -> LOSES time.
                                    COLDER -> shorter rod -> GAINS time.
  TRAP      Forgetting the factor 1/2 (it comes from the square root),
            or using 24 instead of 86400.
```

```
  PATTERN 11 — APPLICATIONS OF EXPANSION (descriptive)            2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is a gap left between rails?" / "bimetallic strip" /
            "why does a glass tumbler crack?" / "expansion joints"
  METHOD    Always answer in TWO parts: (i) what expands, (ii) what would
            go wrong if it could not.
            * Rails/bridges: gap allows expansion; otherwise the stress
              Y alpha dT buckles them.
            * Bimetallic strip: two metals, different alpha; on heating it
              bends with the LARGER-alpha metal on the OUTSIDE.
              Used in thermostats and fire alarms.
            * Glass tumbler: the inner surface contracts/expands before
              the outer, so uneven stress cracks it. Pyrex has a tiny
              alpha and survives.
  TRAP      Saying only "because of expansion" with no mechanism scores
            about half.
```

```
  PATTERN 12 — APPARENT vs REAL EXPANSION OF A LIQUID             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "apparent coefficient" / "how much mercury overflows?"
  METHOD    1. gamma(vessel) = 3 x alpha(vessel material)
            2. gamma(real) = gamma(apparent) + gamma(vessel)
            3. Volume that OVERFLOWS = V x gamma(apparent) x dT
  TRAP      Overflow uses APPARENT expansion, never real. And the relation
            is a PLUS, not a minus, when going from apparent to real.
```

```
  PATTERN 13 — ANOMALOUS EXPANSION OF WATER + FISH                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the anomalous expansion of water."
            "Why do fish survive in a frozen lake?"
  METHOD    1. State the anomaly: from 0 to 4 degC water CONTRACTS on
               heating. Maximum density (1000 kg/m^3) at 4 degC.
            2. DRAW the density-vs-temperature graph with a clear peak
               at 4 degC. (Label both axes.)
            3. Give the five-step lake sequence:
               cools and sinks -> whole lake reaches 4 degC ->
               below 4 degC the surface water stays on top ->
               surface freezes, ice FLOATS ->
               ice insulates, bottom stays at 4 degC, fish survive.
  TRAP      Writing "the bottom of the lake is at 0 degC". It is 4 degC.
            Also: a graph without labelled axes earns nothing.
```

```
  PATTERN 14 — SPECIFIC HEAT NUMERICAL                            2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How much heat is required to raise ... ?"
            "How long will a heater of power P take ... ?"
  METHOD    1. Q = m c dT
            2. For a heater:  t = Q / P
            3. For molar specific heat: C = M c
  TRAP      Mass in KILOGRAMS when c is in J/kg/K. Working in grams with
            4186 is the commonest arithmetic error in the chapter.
            (Or work entirely in grams and calories - but be consistent.)
```

```
  PATTERN 15 — METHOD OF MIXTURES / CALORIMETRY                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "X grams at T1 is mixed with Y grams at T2. Find the final
            temperature."  /  "Find the specific heat of the metal."
  METHOD    1. State the principle: HEAT LOST = HEAT GAINED.
            2. Let the final temperature be T.
            3. Heat lost   = m c (T_hot - T) for everything that cools.
               Heat gained = m c (T - T_cold) for everything that warms.
            4. Add the calorimeter's WATER EQUIVALENT w to the water mass.
            5. Solve; then CHECK that T lies between the two starting
               temperatures.
  SHORTCUT  Equal masses of the same liquid -> plain average.
            Unequal masses, same liquid  -> (m1T1 + m2T2)/(m1 + m2).
  TRAP      Forgetting the calorimeter. Or getting a final temperature
            outside the two starting values - that always means a sign
            error.
```

```
  PATTERN 16 — MIXTURE WITH A CHANGE OF STATE                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Ice at 0 degC is dropped into water at T degC."
            "Steam is passed into ice/water."
  METHOD    *** STEP A COMES FIRST, ALWAYS ***
            1. Compute the heat AVAILABLE if the hot body cools to
               0 degC (or 100 degC for steam).
            2. Compute the heat NEEDED to melt ALL the ice (m Lf), or to
               condense all the steam.
            3. COMPARE:
                 available > needed -> everything melts; now solve for T.
                 available < needed -> the answer is 0 degC with ice left;
                                       mass melted = available / Lf.
            4. Only then write the balance equation.
  SHORTCUT  Because Lf = 80 cal/g, ONE gram of water at 80 degC melts
            EXACTLY one gram of ice.
  TRAP      Jumping straight into an equation and getting an impossible
            answer like -12 degC or 130 degC.
```

```
  PATTERN 17 — HEAT REQUIRED FOR ICE -> STEAM (FIVE STAGES)       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the heat needed to convert m kg of ice at -X degC into
            steam at +Y degC."  (Often with "draw the graph".)
  METHOD    Five separate calculations, listed and then added:
              (1) m c(ice)   dT       ice up to 0 degC
              (2) m Lf                MELT              <- FLAT
              (3) m c(water) dT       water 0 -> 100
              (4) m Lv                BOIL              <- FLAT
              (5) m c(steam) dT       steam above 100
            Then draw the temperature-vs-heat graph with all five stages
            labelled, the two FLAT sections marked, and stage 4 drawn
            clearly LONGER than stage 2.
  TRAP      Missing a stage - almost always one of the flat latent-heat
            stages, because dT = 0 there and students think "no heat".
  LEARN     For 1 kg of ice at -20 degC to steam at 120 degC the answer
            is 3.09 x 10^6 J. Stage 4 alone is 73% of it.
```

```
  PATTERN 18 — LATENT HEAT / WHY STEAM BURNS                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define latent heat of fusion / vaporisation."
            "Why is a steam burn worse than a boiling-water burn?"
  METHOD    Definition + VALUE, both. Lf = 3.33e5 J/kg = 80 cal/g,
            Lv = 22.6e5 J/kg = 540 cal/g.
            For the burn: steam must CONDENSE first, releasing 540 cal/g
            before it even begins to cool.
  TRAP      Giving the definition without the numerical value (or the
            other way round) loses half the mark.
```

```
  PATTERN 19 — CHANGE OF STATE / PHASE DIAGRAM / TRIPLE POINT     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw the P-T phase diagram of water." / "Define triple point."
            "Effect of pressure on the melting/boiling point."
  METHOD    1. Draw three curves meeting at the triple point:
               fusion curve, vaporisation curve, sublimation curve,
               and mark the critical point on the vaporisation curve.
            2. Triple point of water = 273.16 K at 0.61 kPa.
            3. Pressure UP -> boiling point UP, always.
            4. Pressure UP -> melting point DOWN for substances that
               CONTRACT on melting (ICE, cast iron, bismuth), and UP for
               those that EXPAND on melting (wax, most metals).
            5. Mention REGELATION and the loaded-wire experiment.
  TRAP      Drawing the fusion curve of WATER with a positive slope.
            For water it must lean BACKWARDS (negative slope).
```

```
  PATTERN 20 — CONDUCTION: DEFINE K AND USE THE FORMULA           2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define thermal conductivity." / "Find the rate of heat flow
            through a rod / wall / window."
  METHOD    1. H = K A (T1 - T2) / L
            2. Definition: the rate of flow of heat per unit area per unit
               temperature gradient in the steady state.
            3. Unit W m^-1 K^-1 , dimensions [ M L T^-3 K^-1 ].
            4. Mention STEADY STATE: every point has a temperature that no
               longer changes with time.
  TRAP      Units. cm^2 -> m^2 (divide by 10^4), mm -> m (divide by 1000).
            One missed conversion changes the answer by a factor of 10^4.
```

```
  PATTERN 21 — COMPOUND SLAB: SERIES OR PARALLEL                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two slabs/rods joined, and you are asked for the junction
            temperature or the equivalent conductivity.
  METHOD    1. DRAW THE PICTURE and decide:
                 face to face (one behind the other) = SERIES
                 side by side                        = PARALLEL
            2. SERIES: the SAME HEAT flows through both. Set H1 = H2 and
               solve for the junction temperature T:

                     (K1 T1/L1) + (K2 T2/L2)
                T = --------------------------
                      (K1/L1)  +  (K2/L2)

               Equivalent: K_eq = (L1+L2)/(L1/K1 + L2/K2)
                           equal L -> 2 K1 K2/(K1+K2)   (harmonic mean)

            3. PARALLEL: the SAME dT acts across both, and heats ADD.
                           K_eq = (K1 A1 + K2 A2)/(A1 + A2)
                           equal A -> (K1+K2)/2         (arithmetic mean)
  SHORTCUT  SERIES = harmonic mean. PARALLEL = arithmetic mean.
  TRAP      Confusing the two. Also: the junction temperature must lie
            BETWEEN the two outer temperatures, nearer the outer face of
            the BETTER conductor.
```

```
  PATTERN 22 — CONVECTION, DESCRIPTIVE                            2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the land and sea breeze." / "natural vs forced
            convection" / "why is a ventilator near the ceiling?"
  METHOD    1. Always start from the mechanism: heated fluid EXPANDS ->
               becomes LESS DENSE -> RISES -> cooler fluid flows in.
            2. Sea breeze: DAY, sea -> land. Land breeze: NIGHT,
               land -> sea. Cause: water has a much higher specific heat,
               so land heats and cools faster.
            3. Natural = driven by gravity + density difference.
               Forced  = driven by a pump, fan or blower.
            4. Trade winds = the same thing on a planetary scale, bent by
               the Earth's rotation.
  TRAP      Getting the direction backwards. Remember: SEA breeze comes
            FROM the sea; LAND breeze comes FROM the land.
```

```
  PATTERN 23 — COMPARE THE THREE MODES OF HEAT TRANSFER           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Compare conduction, convection and radiation."
            "Which mode needs no medium?"
  METHOD    Draw a three-column table with rows:
            medium needed? / occurs in / does matter move? / mechanism /
            speed / path / example.
            The headline: RADIATION alone needs no medium and travels at
            the speed of light in straight lines.
  TRAP      Writing prose instead of a table. The table itself carries
            marks and is faster to write.
```

```
  PATTERN 24 — BLACK BODY, ABSORPTIVE AND EMISSIVE POWER          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a perfectly black body?" / "Distinguish between
            absorptive power and emissive power."
  METHOD    Black body: absorbs ALL radiation of ALL wavelengths;
                        a = 1, r = 0, t = 0, e = 1;
                        realised by Fery's hollow blackened sphere with
                        a small hole - THE HOLE is the black body.
            Absorptive power = absorbed/incident -> a RATIO, no unit.
            Emissive power   = energy emitted per unit area per unit time
                               -> W m^-2 , [ M T^-3 ].
  TRAP      Forgetting that one has NO unit and the other does. That
            contrast is what the question is really testing.
```

```
  PATTERN 25 — STATE AND PROVE KIRCHHOFF'S LAW                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State and prove Kirchhoff's law." / "Explain the Fraunhofer
            lines." / "Why is a cooking vessel blackened at the bottom?"
  METHOD    1. STATEMENT: at a given temperature and wavelength, e/a is
               the same for all bodies and equals E, the emissive power of
               a black body at that temperature.
            2. PROOF: put the body inside a black enclosure at temperature
               T; at equilibrium absorbed = emitted, so aE = e, giving
               e/a = E; E depends only on T, not on the material.
            3. MEANING: A GOOD ABSORBER IS A GOOD EMITTER.
            4. APPLICATIONS: blackened vessel bottom, polished sides,
               silvered thermos, sodium vapour experiment, and the
               FRAUNHOFER LINES (the cool chromosphere absorbs exactly the
               wavelengths its own vapours would emit).
  TRAP      Giving the statement without the enclosure proof. The proof is
            half the marks.
  NOTE      *** THE SINGLE MOST ASKED 4-MARK QUESTION HERE ***
```

```
  PATTERN 26 — STEFAN-BOLTZMANN NUMERICAL                         2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the energy radiated ..." / "By what factor does the
            radiation increase when the temperature rises from ... ?"
  METHOD    1. CONVERT EVERY TEMPERATURE TO KELVIN.
            2. Per unit area of a black body:  E = sigma T^4
            3. Total power of a body:          P = e sigma A T^4
            4. In surroundings at Ts:  P(net) = e sigma A (T^4 - Ts^4)
            5. For a ratio, use (T2/T1)^4 and, if the sizes differ,
               multiply by (r2/r1)^2.
  TRAP      Using degrees Celsius. (327/27)^4 is the classic wrong answer
            planted in the options. Convert first, every time.
```

```
  PATTERN 27 — DERIVE NEWTON'S LAW OF COOLING                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Newton's law of cooling and deduce it from Stefan's
            law."
  METHOD    1. Statement: rate of loss of heat is proportional to the
               excess temperature, provided that excess is SMALL.
            2. Start from  -dQ/dt = e sigma A (T^4 - Ts^4)
            3. Put T = Ts + x with x small.
            4. Expand (1 + x/Ts)^4 ~ 1 + 4x/Ts  and keep only the
               first-order term, giving T^4 - Ts^4 ~ 4 Ts^3 x.
            5. So -dQ/dt = 4 e sigma A Ts^3 (T - Ts) = K (T - Ts).
            6. Since dQ = m c dT,  -dT/dt = k (T - Ts).
            7. State the LIMITATION: valid only for small excess
               temperature, because higher powers were neglected.
  TRAP      Trying to derive Stefan's law from Newton's. It is the other
            way round: Newton's is the approximation.
  NOTE      *** TOP-TWO 4-MARK QUESTION ***
```

```
  PATTERN 28 — NEWTON'S COOLING NUMERICAL                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A body cools from A to B in t minutes. How long to cool from
            C to D?"  /  "What is its temperature after another t minutes?"
  METHOD    Use the AVERAGE-temperature form, twice:

                T1 - T2          [  T1 + T2         ]
               ----------  =  k  [ ----------  - Ts ]
                    t            [      2           ]

            1. Stage 1 gives k.
            2. Substitute k into stage 2 and solve for t (or for T).
  TRAP      Using the STARTING temperature instead of the AVERAGE.
  CHECK     The later interval must always take LONGER, and each
            successive temperature drop must be SMALLER. If not, redo it.
```

```
  PATTERN 29 — COOLING CURVE / GRAPH QUESTION                     2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw the cooling curve." / "What does a graph of
            log(T - Ts) against t look like?"
  METHOD    1. T = Ts + (T0 - Ts) e^(-kt): an exponential decay that
               flattens towards Ts and never touches it (asymptote).
            2. log_e (T - Ts) = -kt + constant: a STRAIGHT LINE of
               slope -k. This is how the law is verified experimentally.
  TRAP      Drawing the curve reaching Ts and stopping. It approaches Ts
            asymptotically. Draw the dashed asymptote and label it.
```

```
  PATTERN 30 — WIEN'S LAW AND THE BLACK-BODY SPECTRUM             2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Wien's law." / "Find the wavelength of maximum
            emission." / "Draw the black-body spectrum."
  METHOD    1. lambda_m x T = b = 2.9 x 10^-3 m K , with T in KELVIN.
            2. For a ratio: lambda1 T1 = lambda2 T2.
            3. For the graph, draw at least TWO curves and state all four
               readings: peak moves LEFT as T rises; whole curve rises;
               energy is emitted at every wavelength; and the AREA under a
               curve is proportional to T^4 (Stefan).
  TRAP      Kelvin again. And drawing only one curve - the question is
            about how the curve CHANGES with temperature.
```

```
  PATTERN 31 — SOLAR CONSTANT / TEMPERATURE OF THE SUN            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define the solar constant." / "Estimate the surface
            temperature of the Sun."
  METHOD    1. S = solar energy per unit area per unit time on a surface
               perpendicular to the rays, just outside the atmosphere,
               = 1.388 x 10^3 W/m^2.
            2. Equate the power leaving the Sun with the power crossing a
               sphere of radius r:

                    4 pi R^2 sigma T^4  =  4 pi r^2 S

                                S r^2
                       T^4  =  --------
                               sigma R^2

            3. Take the fourth root - do it as sqrt of the sqrt.
               Gives about 5800 K.
  TRAP      Mixing up R (radius of the Sun, 7 x 10^8 m) with r (Earth-Sun
            distance, 1.5 x 10^11 m).
```

```
  PATTERN 32 — GREENHOUSE EFFECT                                  2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the greenhouse effect?" / "Why is the Earth warmer
            than it would otherwise be?"
  METHOD    Four steps:
            1. Short-wavelength sunlight passes through and warms the
               ground.
            2. The warm ground (288 K) re-radiates at about 10 micrometre
               - INFRARED (quote Wien to get this).
            3. CO2, H2O vapour, CH4, N2O, O3 and CFCs ABSORB infrared and
               send part of it back down.
            4. Numbers: without it, -18 degC; with it, +15 degC; worth
               about 33 degC. The ENHANCED effect from burning fossil
               fuels causes GLOBAL WARMING.
  TRAP      Confusing it with the ozone hole. Ozone depletion is about UV
            getting IN; the greenhouse effect is about infrared not
            getting OUT.
```

```
  PATTERN 33 — "WHY DOES ..." EVERYDAY EXPLANATION                2 marks
  ------------------------------------------------------------------------
  TRIGGER   Any short "why" question: metal feels colder than wood /
            two thin blankets / ventilator near the ceiling / blackened
            cooking vessel / thermos flask / pressure cooker / eskimo
            igloo / white clothes in summer.
  METHOD    Name the PHYSICAL QUANTITY first, then one sentence of
            mechanism. Never just describe the situation.
            metal colder      -> high thermal CONDUCTIVITY
            two blankets      -> trapped STILL AIR, tiny K
            ventilator high   -> CONVECTION, hot air rises
            blackened vessel  -> KIRCHHOFF, good absorber
            thermos silvered  -> poor emitter, cuts RADIATION
            pressure cooker   -> boiling point rises with pressure
            water as coolant  -> highest SPECIFIC HEAT
  TRAP      "Because metal is colder" - it is NOT colder, it is at the
            same temperature. Say so explicitly; that is the mark.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right-hand column and try.

```
  +------------------------------------------------------+-------------+
  |  QUESTION STEM                                       |  PATTERN    |
  +------------------------------------------------------+-------------+
  |  "Convert 45 degC into Fahrenheit"                   |      2      |
  |  "At what temperature are C and F equal?"            |      2      |
  |  "Show that gamma = 3 alpha"                         |      5      |
  |  "A hole is cut in a plate and heated ..."           |      7      |
  |  "Find the force on the clamps"                      |      9      |
  |  "How many seconds does the clock lose per day?"     |     10      |
  |  "Why is a gap left between rails?"                  |     11      |
  |  "How much mercury overflows?"                       |     12      |
  |  "Why do fish survive in a frozen lake?"             |     13      |
  |  "How long will a 2 kW heater take ...?"             |     14      |
  |  "200 g at 80 degC mixed with 300 g at 20 degC"      |     15      |
  |  "Ice at 0 degC dropped into water at 40 degC"       |     16      |
  |  "Ice at -20 degC converted to steam at 120 degC"    |     17      |
  |  "Why does steam burn more than boiling water?"      |     18      |
  |  "Draw the P-T diagram / define the triple point"    |     19      |
  |  "Find the rate of heat flow through the window"     |     20      |
  |  "Find the junction temperature of the two slabs"    |     21      |
  |  "Explain the sea breeze"                            |     22      |
  |  "Compare the three modes of heat transfer"          |     23      |
  |  "Distinguish absorptive and emissive power"         |     24      |
  |  "State and prove Kirchhoff's law"                   |     25      |
  |  "Explain the Fraunhofer lines"                      |     25      |
  |  "By what factor does the radiation increase?"       |     26      |
  |  "Deduce Newton's law from Stefan's law"             |     27      |
  |  "Cools from 80 to 64 in 5 min; find the next time"  |     28      |
  |  "Plot log(T - Ts) against t"                        |     29      |
  |  "Find the wavelength of maximum emission"           |     30      |
  |  "Estimate the surface temperature of the Sun"       |     31      |
  |  "What is the greenhouse effect?"                    |     32      |
  |  "Why does a metal chair feel colder?"               |     33      |
  +------------------------------------------------------+-------------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +---------------------------------------------------------------------+
  |  STEP 1  -  LEARN FIVE THINGS PERFECTLY  (about 2 hours)            |
  |                                                                     |
  |    1. Kirchhoff's law: statement + enclosure proof + Fraunhofer     |
  |       lines.                          -> Pattern 25                 |
  |    2. Newton's law of cooling: statement + derivation from          |
  |       Stefan's law + limitation.      -> Pattern 27                 |
  |    3. beta = 2 alpha and gamma = 3 alpha, both derivations.         |
  |                                       -> Pattern 5                  |
  |    4. Anomalous expansion of water: graph + frozen-lake story.      |
  |                                       -> Pattern 13                 |
  |    5. Ice-to-steam five-stage calculation + graph.                  |
  |                                       -> Pattern 17                 |
  |                                                                     |
  |    Those five alone cover the Section B question in most papers.    |
  +---------------------------------------------------------------------+
  |  STEP 2  -  LEARN THE SIX ONE-LINERS  (about 30 minutes)            |
  |                                                                     |
  |    Q = m c dT        |  Q = m L                                     |
  |    H = K A dT / L    |  E = sigma T^4                               |
  |    lambda_m T = b    |  stress = Y alpha dT                         |
  |                                                                     |
  |    Plus the four numbers: 4186 , 3.33e5 , 22.6e5 , 5.67e-8          |
  +---------------------------------------------------------------------+
  |  STEP 3  -  DRILL THE THREE NUMERICAL SHAPES  (about 1 hour)        |
  |                                                                     |
  |    * calorimetry / mixture with ice     -> Patterns 15, 16          |
  |    * conduction and compound slabs      -> Patterns 20, 21          |
  |    * Newton's cooling two-stage problem -> Pattern 28               |
  |                                                                     |
  |    Do three of each. Not thirty. Three, done properly.              |
  +---------------------------------------------------------------------+
  |  STEP 4  -  COLLECT THE FREE 2-MARK ANSWERS  (about 30 minutes)     |
  |                                                                     |
  |    Heat vs temperature, -40, define alpha, define specific heat,    |
  |    define latent heat with values, triple point, regelation,        |
  |    define a black body, absorptive vs emissive power, state         |
  |    Stefan / Wien / Newton / Kirchhoff, solar constant, and the      |
  |    five "why" questions in Pattern 33.                              |
  |                                                                     |
  |    Every one of these is pure recall. None of them needs thinking.  |
  +---------------------------------------------------------------------+

  REALISTIC OUTCOME:  6 to 10 marks out of 60, for about 4 hours of work.
  Do Chapters 12, 13 and 14 together and the return is far higher.
```

## THE THREE MISTAKES THAT COST THE MOST MARKS

```
  1.  DEGREES CELSIUS IN A RADIATION LAW.
      T^4 and lambda_m T are KELVIN ONLY. No exceptions, ever.

  2.  A MISSING LATENT-HEAT STAGE.
      The flat parts of the graph are where dT = 0 but the heat is
      still huge. Q4 alone is 73% of the ice-to-steam answer.

  3.  SERIES AND PARALLEL SWAPPED IN A SLAB PROBLEM.
      Face to face = SERIES = same heat = harmonic mean.
      Side by side = PARALLEL = same dT = arithmetic mean.
      Draw the picture before you write anything.
```
