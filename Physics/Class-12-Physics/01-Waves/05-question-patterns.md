# Waves — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — WHAT IS A WAVE / DOES IT CARRY MATTER?              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a wave?" / "Does a wave transport matter?"
  METHOD    1. A disturbance that travels through a medium.
            2. It carries ENERGY and MOMENTUM.
            3. It does NOT transport MATTER — the particles only vibrate
               about their own mean positions.
  TRAP      Writing only "a vibration" scores nothing. The words ENERGY
            and WITHOUT TRANSPORTING MATTER must both appear.
```

```
  PATTERN 2 — TRANSVERSE vs LONGITUDINAL                       2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between transverse and longitudinal waves."
  METHOD    Give a TABLE with at least these rows:
            1. direction of particle vibration (perpendicular / parallel)
            2. crests & troughs  /  compressions & rarefactions
            3. elasticity needed (rigidity / bulk modulus)
            4. media possible (solids only / all three)
            5. polarisation (yes / no)
            6. one example each
            Draw the two small ASCII diagrams if there is space.
  TRAP      "Sound is transverse" — the single most common error in the
            chapter. SOUND IN AIR IS LONGITUDINAL. LIGHT IS TRANSVERSE.
```

```
  PATTERN 3 — WHY A WAVE CAN OR CANNOT TRAVEL IN A MEDIUM         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why can transverse waves not travel in gases?" /
            "Why can sound not travel through vacuum?" /
            "Why is sound faster in solids?"
  METHOD    Always answer with the ELASTICITY reason:
            - transverse needs MODULUS OF RIGIDITY; gases and liquids
              have none.
            - sound is MECHANICAL and needs a material medium.
            - v = sqrt(E / rho); E rises far more than rho from gas to
              solid, so v is much larger in solids.
  TRAP      Do not say "because solids are denser" — density alone would
            make it SLOWER. It is the ELASTICITY that wins.
```

```
  PATTERN 4 — DEFINE A WAVE CHARACTERISTIC                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define amplitude / wavelength / frequency / time period /
            wave velocity."
  METHOD    Give the DEFINITION in words AND the SI unit.
            Wavelength = distance between two consecutive particles in the
            SAME PHASE (= two successive crests).
  TRAP      Writing "wavelength is the length of a wave" gets zero.
            Also: always add the unit.
```

```
  PATTERN 5 — SIMPLE  v = f lambda  NUMERICAL                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   Any question giving two of {v, f, lambda} and asking for the
            third.
  METHOD    1. Convert everything to SI (cm -> m, kHz -> Hz).
            2. v = f lambda.  Rearrange as needed.
            3. Write the unit.
  TRAP      Forgetting to convert cm to m. This is free marks — never
            lose them.
```

```
  PATTERN 6 — WAVE ENTERING A NEW MEDIUM                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Sound goes from air into water. What happens to f, v, lambda?"
  METHOD    1. FREQUENCY is UNCHANGED (fixed by the source).
            2. SPEED changes (fixed by the medium).
            3. WAVELENGTH changes in the SAME RATIO as the speed.
  TRAP      Saying the frequency increases. It never does.
```

```
  PATTERN 7 — READ THE DATA OUT OF A GIVEN WAVE EQUATION       2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "y = 0.02 sin(300 t - 2 x). Find lambda, f, v, direction."
  METHOD    1. Compare with  y = A sin(omega t - k x).
            2. A is the coefficient in front.
            3. f = omega / 2 pi
            4. lambda = 2 pi / k
            5. v = omega / k        <-- fastest
            6. Direction: MINUS sign -> +x , PLUS sign -> -x.
  TRAP      The direction rule feels backwards. Learn it as
            "MINUS means moving in the PLUS direction".
            Also watch the units of x (cm vs m) before quoting lambda.
```

```
  PATTERN 8 — WRITE THE EQUATION OF A WAVE                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the equation of a wave of amplitude ..., frequency ...,
            speed ... travelling along +x."
  METHOD    1. omega = 2 pi f
            2. lambda = v / f , then k = 2 pi / lambda
               (or straight from k = omega / v)
            3. y = A sin( omega t - k x )
  TRAP      Leaving A in centimetres while x is in metres. Keep one system.
```

```
  PATTERN 9 — PHASE DIFFERENCE  <->  PATH DIFFERENCE              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two points 25 cm apart on a wave of wavelength 1 m. Find the
            phase difference." (or the reverse)
  METHOD              2 pi
            phi  =  --------  x  (path difference)
                     lambda

            and       path  =  ( lambda / 2 pi ) x phi
  TRAP      Mixing degrees and radians. Convert first:
            180 deg = pi rad , 60 deg = pi/3 rad.
```

```
  PATTERN 10 — SPEED OF A TRANSVERSE WAVE ON A STRING          2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wire of length ... and mass ... under tension ... Find the
            wave speed."
  METHOD    1. mu = M / L  in kg per METRE.
            2. If a mass is hanging,  T = M g  (use g = 9.8 or 10).
            3. v = sqrt( T / mu ).
  TRAP      mu in g/m instead of kg/m. Divide by 1000.
            If the wire's radius is given, mu = pi r^2 rho.
```

```
  PATTERN 11 — NEWTON'S FORMULA AND LAPLACE'S CORRECTION          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Newton's formula for the speed of sound. What is
            Laplace's correction?"
  METHOD    1. NEWTON assumed ISOTHERMAL -> P V = const -> B = P
                 v = sqrt(P/rho) = 280 m/s
            2. Experimental value is 332 m/s -> 16% error, too big.
            3. LAPLACE: air is a POOR CONDUCTOR of heat and the
               compressions/rarefactions are TOO RAPID -> ADIABATIC.
            4. P V^gamma = const  ->  B = gamma P
                 v = sqrt(gamma P / rho) = 332 m/s.  Agrees.
  TRAP      Writing the formulas without the WORDS "isothermal" and
            "adiabatic" and without the REASON. That loses 2 of the 4 marks.
            Also quote the numbers 280 and 332 — the examiner looks for them.
```

```
  PATTERN 12 — FACTORS AFFECTING THE SPEED OF SOUND               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the factors affecting the speed of sound in a gas."
  METHOD    Give each factor WITH ITS REASON:
            1. DENSITY     v ~ 1/sqrt(rho)   denser -> slower
            2. PRESSURE    NO EFFECT, because P/rho is constant at a
                           fixed temperature
            3. TEMPERATURE v ~ sqrt(T) in KELVIN; v = v0 + 0.61 t
            4. HUMIDITY    moist air is LESS dense (M(H2O)=18 < M(air)=29)
                           so speed INCREASES
            5. WIND        adds vectorially
            State clearly: amplitude, frequency, wavelength and phase have
            NO effect.
  TRAP      Saying "pressure increases the speed". It does NOT.
```

```
  PATTERN 13 — TEMPERATURE NUMERICAL FOR THE SPEED OF SOUND       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Speed at 0 deg C is 332 m/s. Find it at 27 deg C."
            or "At what temperature does the speed double?"
  METHOD    Quick:   v(t) = v(0) + 0.61 t
            Exact:   v1/v2 = sqrt(T1/T2)  with T in KELVIN
            To multiply v by n, multiply the KELVIN temperature by n^2.
  TRAP      Using Celsius in the square root. ALWAYS convert to Kelvin
            (add 273).
```

```
  PATTERN 14 — STATE THE PRINCIPLE OF SUPERPOSITION               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the principle of superposition of waves."
  METHOD    When two or more waves travel through a medium at the same
            time, the resultant displacement of a particle is the VECTOR
            SUM of the individual displacements:  y = y1 + y2 + ...
            Add: each wave continues unchanged afterwards.
  TRAP      Writing "the waves add up" without the word VECTOR SUM and
            without the equation.
```

```
  PATTERN 15 — INTERFERENCE: CONDITIONS FOR MAXIMA AND MINIMA     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is interference of sound? State the conditions for
            constructive and destructive interference."
  METHOD    1. Definition (same frequency, constant phase difference).
            2. CONSTRUCTIVE: phase = 2 n pi , path = n lambda ,
                             A = A1 + A2 , I = (sqrtI1 + sqrtI2)^2
            3. DESTRUCTIVE : phase = (2n-1) pi , path = (2n-1) lambda/2 ,
                             A = |A1 - A2| , I = (sqrtI1 - sqrtI2)^2
            4. Say ENERGY IS CONSERVED — only redistributed.
  TRAP      Mixing up which one uses lambda and which uses lambda/2.
            LOUD = whole wavelengths. QUIET = half wavelengths.
```

```
  PATTERN 16 — INTENSITY / AMPLITUDE RATIO                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two waves of intensity ratio 9:1 interfere. Find Imax/Imin."
  METHOD    1. A ~ sqrt(I).  Take square roots first: 3 : 1.
            2. Imax/Imin = (A1+A2)^2 / (A1-A2)^2 = 16/4 = 4 : 1.
  TRAP      Forgetting the square root step and doing (9+1)^2/(9-1)^2.
```

```
  PATTERN 17 — REFLECTION AT A RIGID / FREE BOUNDARY              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What happens when a wave is reflected at a rigid boundary /
            free boundary?"
  METHOD    RIGID: displacement must be zero there -> pulse INVERTED,
                   phase change pi (= path lambda/2), a NODE forms.
                   For sound, a compression returns as a compression.
            FREE : end free to move -> pulse UPRIGHT, phase change ZERO,
                   an ANTINODE forms.
                   For sound, a compression returns as a rarefaction.
            Draw both little pulse diagrams.
  TRAP      The sound-pressure behaviour is the OPPOSITE of the
            displacement behaviour. Say "displacement node at the rigid
            end" to be safe.
```

```
  PATTERN 18 — DERIVE THE STATIONARY WAVE EQUATION                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Obtain the equation of a stationary wave and find the
            positions of nodes and antinodes."
  METHOD    1. y1 = A sin(omega t - kx) ,  y2 = A sin(omega t + kx)
            2. Add and use sin C + sin D = 2 sin((C+D)/2) cos((C-D)/2)
            3. y = 2A cos(kx) sin(omega t)
            4. Say: x and t are SEPARATED, so nothing travels.
            5. NODES: cos(kx) = 0 -> x = odd multiples of lambda/4
               ANTINODES: cos(kx) = +/-1 -> x = multiples of lambda/2
            6. Quote the distances: node-node = lambda/2,
               node-antinode = lambda/4.
  TRAP      Forgetting step 4 (the reason it is "stationary"). It is a
            whole mark.
```

```
  PATTERN 19 — NODE / ANTINODE DISTANCE NUMERICAL                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The distance between two consecutive nodes is 10 cm. Find the
            wavelength / the frequency."
  METHOD    node to node        = lambda / 2
            antinode to antinode= lambda / 2
            node to antinode    = lambda / 4
            Then use v = f lambda if a speed is given.
  TRAP      Reading "node to antinode" as "node to node". Read the words
            twice — this is the whole question.
```

```
  PATTERN 20 — PROGRESSIVE vs STATIONARY WAVES                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between progressive and stationary waves."
  METHOD    Table with at least 6 rows:
            travels / does not travel ; transports energy / does not ;
            amplitude same for all / varies 0 to 2A ; no nodes / nodes
            present ; all phases different / same phase within a loop ;
            no particle at rest / nodes always at rest.
            Add both equations.
  TRAP      Only writing 2 or 3 differences. One row = roughly half a mark;
            write six.
```

```
  PATTERN 21 — *** LAQ: STATIONARY WAVES IN A STRETCHED STRING     8 marks
               + THE LAWS OF TRANSVERSE VIBRATIONS ***
  ------------------------------------------------------------------------
  TRIGGER   "Explain the formation of stationary waves in a stretched
            string and hence deduce the laws of transverse waves."
  METHOD    1. FORMATION (2): incident wave + reflected wave superpose,
               y = 2A cos(kx) sin(omega t), nodes and antinodes.
            2. MODES (3): both ends FIXED -> node at each end ->
               L = n lambda / 2 -> lambda = 2L/n
               f = (n/2L) sqrt(T/mu).  DRAW the first three modes with
               loops labelled N and A.  All harmonics 1:2:3.
            3. THE THREE LAWS (3):
                 LAW OF LENGTH   f ~ 1/L        (T, mu constant)
                 LAW OF TENSION  f ~ sqrt(T)    (L, mu constant)
                 LAW OF MASS     f ~ 1/sqrt(mu) (L, T constant)
               Mention the SONOMETER and the paper rider.
  TRAP      Skipping the diagrams (worth 2 marks) or forgetting to state
            what is held CONSTANT in each law. Each law must name its
            two constants.
```

```
  PATTERN 22 — SONOMETER / STRING NUMERICAL                    2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the fundamental frequency / the n-th harmonic of a wire."
            or "What must the tension be to double the frequency?"
  METHOD    1. mu = M/L in kg/m ; T = Mg if a mass hangs.
            2. f = (n / 2L) sqrt(T/mu).
            3. For "what if" questions use the PROPORTIONS instead:
                 L halved -> f doubles
                 T x 4    -> f doubles
                 mu x 4   -> f halves
                 radius x 2 -> mu x 4 -> f halves
  TRAP      Confusing harmonic with overtone. 3rd harmonic = 2nd overtone.
```

```
  PATTERN 23 — ORGAN PIPE FREQUENCY NUMERICAL                  2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the fundamental frequency of a closed / open pipe of
            length ..." or "the next two frequencies it can produce".
  METHOD    CLOSED:  f = (2n-1) v / 4L   ->  f1, 3f1, 5f1, ...
            OPEN  :  f = n v / 2L        ->  f1, 2f1, 3f1, ...
            Convert cm to m first.
  TRAP      Giving 2 f1 for a closed pipe. A closed pipe has NO even
            harmonics. Ever.
```

```
  PATTERN 24 — CLOSED PIPE vs OPEN PIPE COMPARISON                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between a closed and an open organ pipe." /
            "Why are only odd harmonics present in a closed pipe?"
  METHOD    Table: ends, node/antinode positions, f1 = v/4L vs v/2L,
            odd only vs all, quality of note, end correction 0.6r vs 1.2r.
            Add: for the same length f1(open) = 2 f1(closed).
            REASON for odd harmonics: node at the closed end, antinode at
            the open end, and node-to-antinode is always an ODD multiple
            of lambda/4.
  TRAP      Not giving the REASON when asked "why". The reason is the mark.
```

```
  PATTERN 25 — HARMONIC  <->  OVERTONE CONVERSION                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The third overtone of a closed pipe is which harmonic?"
  METHOD    STRING or OPEN PIPE:  n-th overtone = (n + 1)-th harmonic
            CLOSED PIPE       :  n-th overtone = (2n + 1)-th harmonic
            Check: 1st overtone of a closed pipe = 3rd harmonic. Correct.
  TRAP      Answering "3rd overtone = 3rd harmonic". It never is.
```

```
  PATTERN 26 — END CORRECTION / RESONANCE TUBE                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is end correction?" / "Describe the resonance tube
            experiment to find the speed of sound."
  METHOD    1. e = 0.6 r per open end; the antinode forms just OUTSIDE.
            2. Closed pipe: f = v / 4(L + 0.6r)
               Open pipe  : f = v / 2(L + 1.2r)
            3. Resonance tube: l1 + e = lambda/4 , l2 + e = 3 lambda/4
               Subtract:  lambda = 2 ( l2 - l1 )  ->  v = 2 f ( l2 - l1 )
               e = ( l2 - 3 l1 ) / 2
            4. Say that e CANCELS when you subtract — that is the point
               of taking two resonances.
  TRAP      Adding 0.6r to an OPEN pipe once instead of twice.
```

```
  PATTERN 27 — *** LAQ: BEATS ***                                 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "What are beats? Obtain an expression for the beat frequency.
            Where and how are beats made use of?"
  METHOD    1. DEFINITION (1): periodic rise and fall of intensity when two
               waves of slightly different frequencies superpose.
               One beat = one maximum + one minimum. Draw the envelope.
            2. DERIVATION (4):
                 y1 = A sin(2 pi f1 t) , y2 = A sin(2 pi f2 t)
                 add, use sin C + sin D formula
                 y = 2A cos[2pi(f1-f2)t/2] sin[2pi(f1+f2)t/2]
                 amplitude R = 2A cos[...]; R is maximum when the cosine
                 is +/-1, i.e. at t = 0, 1/(f1-f2), 2/(f1-f2), ...
                 ->  BEAT FREQUENCY = | f1 - f2 |
            3. Mention the 10 Hz limit (persistence of hearing 1/10 s).
            4. USES (3): tuning instruments; finding an unknown frequency
               (wax lowers, filing raises); detecting marsh gas in mines;
               radio superheterodyne; synchronising aircraft engines.
  TRAP      Writing only the definition and n = |f1 - f2|. The DERIVATION
            is 4 of the 8 marks and the APPLICATIONS are 3 more.
```

```
  PATTERN 28 — BEAT FREQUENCY NUMERICAL                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two forks of 256 Hz and 260 Hz are sounded together. Find the
            number of beats per second."
  METHOD    n = | f1 - f2 | ;  time between beats = 1 / n.
            If two pipes or wires are given, first find each frequency,
            then subtract.
  TRAP      Forgetting the MODULUS — a beat frequency is never negative.
```

```
  PATTERN 29 — UNKNOWN TUNING FORK (WAX / FILING / TENSION)       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A fork of 256 Hz gives 4 beats with fork B. On loading B with
            wax the beats become 6. Find B."
  METHOD    1. From n beats, B is either (f + n) or (f - n).
            2. Apply the change rule:
                 WAX / LOADING   -> frequency DECREASES
                 FILING          -> frequency INCREASES
                 MORE TENSION    -> frequency INCREASES
                 LONGER wire     -> frequency DECREASES
            3. Test both candidates. Keep the one that matches the
               observed change in the beats.
            4. State the answer with the reasoning.
  TRAP      Guessing without testing both candidates. The examiner wants
            the REASONING, not just the number.
```

```
  PATTERN 30 — *** LAQ: DOPPLER EFFECT ***                        8 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the Doppler effect? Obtain an expression for the
            apparent frequency when the source is moving. Discuss the
            cases."
  METHOD    1. DEFINITION (1): apparent change in frequency due to
               RELATIVE MOTION between source and observer.
            2. SOURCE MOVING (4): in one period T the source moves vs T,
               so lambda' = (v -/+ vs)/f ; then f' = v / lambda'
                 towards:  f' = f v / (v - vs)     pitch RISES
                 away   :  f' = f v / (v + vs)     pitch FALLS
            3. OBSERVER MOVING (2): the wavelength is unchanged; the
               relative speed becomes (v +/- vo)
                 towards:  f' = f (v + vo) / v
                 away   :  f' = f (v - vo) / v
            4. GENERAL:  f' = f (v + vo) / (v - vs) with the sign
               convention stated (direction source -> observer positive).
            5. Add: NO Doppler effect for PERPENDICULAR motion, since
               the component along the line joining them is v cos90 = 0.
            6. APPLICATIONS (1): radar, sonar, medical ultrasound,
               red shift of galaxies.
  TRAP      Writing only the final formula. The DERIVATION of lambda' is
            where the marks are. Also, always state the SIGN CONVENTION.
```

```
  PATTERN 31 — DOPPLER NUMERICAL                               2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A train at 20 m/s sounds a 640 Hz whistle. What does a
            stationary observer hear before and after it passes?"
  METHOD    1. Write  f' = f ( v + vo ) / ( v - vs ).
            2. Decide FIRST whether f' must be bigger or smaller than f.
            3. Choose signs: observer TOWARDS -> +vo on top;
                             source TOWARDS   -> -vs on the bottom.
            4. Substitute, compute, and CHECK the answer fell on the
               side you predicted in step 2.
  TRAP      Sign errors. Also remember source motion and observer motion
            at the SAME speed give DIFFERENT answers — the effect is not
            symmetric for sound.
```

```
  PATTERN 32 — NO DOPPLER EFFECT SITUATIONS                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is there no Doppler effect when the source moves
            perpendicular to the line joining it to the observer?" /
            "A source moves in a circle around the observer."  /
            "Both move with the same velocity in the same direction."
  METHOD    Only the COMPONENT of velocity ALONG the line joining source
            and observer matters.
              - perpendicular motion: component = v cos 90 = 0  -> f' = f
              - circular motion about the observer: velocity is always
                perpendicular to the radius -> f' = f
              - both moving together: the separation never changes -> f' = f
  TRAP      Saying "because they are not moving". They ARE moving — the
            reason is that the SEPARATION is not changing.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right column. Read the stem. Say the pattern number out loud.

| QUESTION STEM | PATTERN |
|---|---|
| "Does a wave transport matter?" | 1 |
| "Distinguish between transverse and longitudinal waves." | 2 |
| "Why can sound not travel through vacuum?" | 3 |
| "Define wavelength and amplitude." | 4 |
| "A wave of 400 Hz has wavelength 0.85 m. Find v." | 5 |
| "Sound goes from air into water. What changes?" | 6 |
| "y = 0.02 sin(300 t - 2 x). Find lambda and v." | 7 |
| "Write the equation of a wave of amplitude 0.05 m ..." | 8 |
| "Two points 25 cm apart, lambda = 1 m. Phase difference?" | 9 |
| "A wire of mass 10 g, length 2 m, tension 100 N. Find v." | 10 |
| "State Newton's formula. What is Laplace's correction?" | 11 |
| "Explain the factors affecting the speed of sound." | 12 |
| "Speed at 0 C is 332 m/s. Find it at 27 C." | 13 |
| "State the principle of superposition." | 14 |
| "Conditions for constructive and destructive interference." | 15 |
| "Two waves of intensity ratio 9:1. Find Imax/Imin." | 16 |
| "What happens on reflection at a rigid boundary?" | 17 |
| "Derive the stationary wave equation." | 18 |
| "Distance between consecutive nodes is 10 cm. Find lambda." | 19 |
| "Distinguish between progressive and stationary waves." | 20 |
| "Explain stationary waves in a string and deduce the laws." | **21 (LAQ)** |
| "Find the fundamental frequency of a sonometer wire." | 22 |
| "Fundamental frequency of a 50 cm closed pipe?" | 23 |
| "Why only odd harmonics in a closed pipe?" | 24 |
| "The third overtone of a closed pipe is which harmonic?" | 25 |
| "What is end correction?" | 26 |
| "What are beats? Derive the beat frequency. Uses?" | **27 (LAQ)** |
| "Forks of 512 and 516 Hz. How many beats?" | 28 |
| "On waxing, the beats increase from 4 to 6. Find B." | 29 |
| "What is the Doppler effect? Derive the apparent frequency." | **30 (LAQ)** |
| "A train at 20 m/s sounds a whistle. What is heard?" | 31 |
| "Source moves in a circle around the observer. f' = ?" | 32 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +--------------------------------------------------------------------+
  |  TIER 1 — LEARN THESE FIRST. THEY ALONE ARE WORTH 8 to 10 MARKS.   |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PATTERN 21   stationary waves in a string + the three laws  (8)  |
  |   PATTERN 27   beats: derivation + applications              (8)  |
  |   PATTERN 30   Doppler effect: derivation + all cases        (8)  |
  |                                                                    |
  |   ONE of these three appears in Section C almost every session.    |
  |   Learn all three and your 8-mark question is guaranteed.          |
  |   Write each one out from memory TWICE, including the diagrams.    |
  |                                                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  TIER 2 — THE SECTION B ANSWERS. 4 marks each, pure memory.        |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PATTERN 11   Newton's formula + Laplace's correction             |
  |   PATTERN 12   factors affecting the speed of sound                |
  |   PATTERN 2    transverse vs longitudinal (table)                  |
  |   PATTERN 20   progressive vs stationary (table)                   |
  |   PATTERN 24   closed vs open organ pipe (table)                   |
  |   PATTERN 17   reflection at rigid and free boundaries             |
  |                                                                    |
  |   Four tables and two short theory answers. No maths at all.       |
  |   This is the cheapest 4 to 8 marks in the whole paper.            |
  |                                                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  TIER 3 — THE 2-MARK FREEBIES. Do 20 of each in one sitting.       |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PATTERN 5    v = f lambda                                        |
  |   PATTERN 28   beat frequency = |f1 - f2|                          |
  |   PATTERN 19   node / antinode distances                           |
  |   PATTERN 23   organ pipe frequencies                              |
  |   PATTERN 7    reading a wave equation                             |
  |                                                                    |
  |   Each of these is one substitution. They take 30 seconds each     |
  |   and they appear in Section A and in EAPCET every single year.    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

```
  THE MINIMUM VIABLE VERSION
  ==========================
  If you are short on time and can only do FOUR things:

     1.  Learn PATTERN 21 (string + laws) completely, with diagrams.
     2.  Learn PATTERN 27 (beats) completely, with the derivation.
     3.  Learn the twelve formulas from 02-formulae.md.
     4.  Do 20 numericals mixing v = f lambda, beats and Doppler.

  That is realistically 12 marks out of 60 from one chapter — more than
  half of what you need to pass, from about six hours of work.
```
