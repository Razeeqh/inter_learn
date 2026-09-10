# Oscillations — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does
not. If you can name the pattern within five seconds of reading a question, you
already have half the marks.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

## GROUP A — DEFINITIONS AND BASIC TERMS

```
  PATTERN 1 — PERIODIC vs OSCILLATORY MOTION                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between periodic and oscillatory motion" /
            "Give two examples of periodic motion that are not
             oscillatory."
  METHOD    1. Periodic = repeats after equal intervals of time.
            2. Oscillatory = periodic AND to-and-fro about a mean
               position.
            3. Give one example of each: Earth round the Sun (periodic
               only), simple pendulum (oscillatory).
  TRAP      Do not say "all periodic motion is oscillatory". It is the
            other way round: all OSCILLATORY motion is periodic.
```

```
  PATTERN 2 — DEFINE SHM                                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define simple harmonic motion" / "What is SHM? Give two
            examples."
  METHOD    Write BOTH halves of the definition:
            1. acceleration is directly PROPORTIONAL to displacement
               from the mean position, AND
            2. always directed TOWARDS the mean position.
            3. Write  a = -omega^2 y
            4. Two examples: simple pendulum (small amplitude),
               loaded spring.
  TRAP      Writing only half the definition, or dropping the MINUS
            sign in a = -omega^2 y. Each costs a mark.
```

```
  PATTERN 3 — DEFINE AMPLITUDE / PERIOD / FREQUENCY /             2 marks
              PHASE / EPOCH
  ------------------------------------------------------------------------
  TRIGGER   "Define amplitude and phase" / "What is the epoch?"
  METHOD    Amplitude  = maximum displacement from the mean position.
            Time period = time for ONE complete oscillation.
            Frequency  = oscillations per second, n = 1/T, in hertz.
            Phase      = (omega t + phi); it fixes the position AND
                         the direction of motion.
            Epoch      = the phase at t = 0, i.e. phi. Also called the
                         initial phase or phase constant.
  TRAP      Amplitude is measured from the MEAN position to one
            extreme — NOT from extreme to extreme. If the total swing
            is 8 cm, the amplitude is 4 cm.
```

```
  PATTERN 4 — WRITE THE DIFFERENTIAL EQUATION OF SHM              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the differential equation of SHM and its solution."
  METHOD    d2y/dt2  +  omega^2 y  =  0
            Solution:  y = A sin(omega t + phi)
  TRAP      Do not write d2y/dt2 = omega^2 y (sign error) — that is
            NOT SHM, it is runaway growth.
```

```
  PATTERN 5 — READ A GIVEN DISPLACEMENT EQUATION                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "y = 4 sin(2t + pi/3). Find the amplitude, period,
            frequency and epoch."
  METHOD    1. Compare term by term with y = A sin(omega t + phi).
            2. A is the coefficient in front of sin.
            3. omega is the coefficient of t.
            4. T = 2 pi / omega ,  n = 1 / T ,  phi is the constant.
  TRAP      If the equation contains sin^2 or cos^2, first convert it
            using sin^2 x = (1 - cos 2x)/2. The frequency DOUBLES.
```

---

## GROUP B — VELOCITY, ACCELERATION AND GRAPHS

```
  PATTERN 6 — DERIVE v AND a IN SHM                               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive expressions for the velocity and acceleration of a
            particle in SHM and find their maximum values."
  METHOD    1. Start with  y = A sin(omega t + phi).
            2. v = dy/dt = A omega cos(omega t + phi).
            3. Replace cos by sqrt(1 - y^2/A^2)  ->
                     v = omega sqrt(A^2 - y^2)
            4. a = dv/dt = -A omega^2 sin(omega t + phi) = -omega^2 y
            5. v_max = A omega at the MEAN position.
               a_max = A omega^2 at the EXTREME position.
  TRAP      Swapping the two: many students write "v is maximum at the
            extreme". It is maximum at the MEAN position.
```

```
  PATTERN 7 — FIND v OR a AT A GIVEN DISPLACEMENT                 2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the velocity when the displacement is 3 cm."
  METHOD    1. omega = 2 pi / T   (FIRST line, always)
            2. v = omega sqrt(A^2 - y^2)
            3. a = -omega^2 y
            4. State the units.
  TRAP      Not converting cm to m. This single mistake ruins more
            answers in this chapter than anything else.
```

```
  PATTERN 8 — GIVEN v_max AND a_max, FIND A AND T                 2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The maximum speed is 30 cm/s and the maximum acceleration
            is 60 cm/s^2. Find A and T."
  METHOD    1. omega = a_max / v_max
            2. A     = v_max / omega   (or v_max^2 / a_max)
            3. T     = 2 pi / omega
  TRAP      Dividing the wrong way round. Remember the UNITS:
            a_max/v_max has units of 1/s, which is omega.
```

```
  PATTERN 9 — TWO SPEEDS AT TWO DISPLACEMENTS                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "v1 at y1 and v2 at y2 are given. Find A and T."
  METHOD    1. Write v1^2 = w^2 (A^2 - y1^2) and v2^2 = w^2 (A^2 - y2^2)
            2. Divide one by the other to eliminate w.
            3. Solve for A.
            4. Substitute back to find w, then T = 2 pi / w.
  TRAP      Forgetting to SQUARE the velocities. Always work with v^2.
```

```
  PATTERN 10 — GRAPHS AND PHASE RELATIONS                         2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw graphs of y, v and a against time" /
            "What is the phase difference between y and a?"
  METHOD    y -> sine curve
            v -> cosine curve, LEADS y by pi/2 (90 deg)
            a -> inverted sine, OPPOSITE to y, pi (180 deg)
            v against y -> ELLIPSE
            a against y -> STRAIGHT LINE, slope -omega^2
  TRAP      Drawing the a-y graph with a POSITIVE slope. The negative
            slope IS the definition of SHM.
```

```
  PATTERN 11 — SHM AS THE PROJECTION OF CIRCULAR MOTION           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the projection of uniform circular motion on a
            diameter is SHM" / "What is a reference circle?"
  METHOD    1. Draw the circle of radius A with the particle P and its
               foot of perpendicular N on a diameter.
            2. Angle after time t = (omega t + phi).
            3. y = A sin(omega t + phi).
            4. Differentiate twice -> d2y/dt2 = -omega^2 y.
            5. Conclude: N executes SHM.
  TRAP      Forgetting to draw and LABEL the reference circle. The
            diagram carries marks on its own.
```

---

## GROUP C — ENERGY

```
  PATTERN 12 — DERIVE KE, PE AND TOTAL ENERGY                     4-8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive expressions for KE and PE in SHM and show that the
            total energy is constant."
  METHOD    1. KE = (1/2) m v^2 = (1/2) m omega^2 (A^2 - y^2)
            2. PE: restoring force F = -m omega^2 y; work done against
               it = INT (m omega^2 y) dy from 0 to y
                 = (1/2) m omega^2 y^2
            3. Add them: the y-terms CANCEL.
            4. E = (1/2) m omega^2 A^2 — no y, no t, hence CONSTANT.
            5. Draw the KE / PE / E versus y graph.
  TRAP      Skipping step 3's explicit cancellation. The examiner wants
            to SEE the y^2 terms cancel — that is the whole point.
```

```
  PATTERN 13 — ENERGY AT A GIVEN DISPLACEMENT                     2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find KE and PE when y = A/2" /
            "At what displacement is KE = PE?"
  METHOD    Use the ratio directly:

                 KE       A^2 - y^2
                ----  =  -----------
                 PE          y^2

            Landmarks worth memorising:
                 y = A/2       ->  KE:PE = 3:1
                 y = A/sqrt2   ->  KE:PE = 1:1
                 y = 0.866 A   ->  KE:PE = 1:3
  TRAP      Answering "A/2" for KE = PE. The correct answer is
            A/sqrt(2) = 0.707A.
```

```
  PATTERN 14 — EFFECT OF CHANGING A, m OR n ON THE ENERGY         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The amplitude is doubled. What happens to the total
            energy?"
  METHOD    E = (1/2) m omega^2 A^2 = 2 pi^2 m n^2 A^2
            E is proportional to  m , A^2 , n^2 .
            So doubling A or n multiplies E by 4.
  TRAP      Saying "energy doubles". It goes as the SQUARE.
```

```
  PATTERN 15 — PERIOD OF THE ENERGY VARIATION                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "With what period does the KE of a particle in SHM vary?"
  METHOD    KE contains cos^2, PE contains sin^2. Using
            sin^2 x = (1 - cos 2x)/2 the frequency DOUBLES.
                 period of KE or PE = T / 2
                 frequency          = 2 n
            KE and PE each complete TWO cycles per oscillation.
  TRAP      Answering T. It is T/2.
```

---

## GROUP D — FORCE LAW AND SPRINGS

```
  PATTERN 16 — THE FORCE LAW AND THE FORCE CONSTANT               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define force constant" / "F = -20y N acts on a 0.5 kg
            body. Find T."
  METHOD    1. F = -k y ; compare to read off k.
            2. k = m omega^2  ->  omega = sqrt(k/m)
            3. T = 2 pi sqrt(m/k)
            k has unit N/m and dimensions [M T^-2].
  TRAP      Forgetting that k is the MAGNITUDE — always positive, even
            though the force equation carries a minus sign.
```

```
  PATTERN 17 — DERIVE T FOR A LOADED SPRING                       4-8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the time period of a mass attached to a spring."
  METHOD    The universal six-step recipe:
            1. Displace by y.
            2. Restoring force F = -k y (Hooke's law).
            3. F is proportional to -y  ->  SHM.
            4. a = -(k/m) y
            5. Compare with a = -omega^2 y  ->  omega = sqrt(k/m)
            6. T = 2 pi sqrt(m/k)
            For a VERTICAL spring, add: mg = ke at equilibrium, so
            those terms cancel and the SAME formula holds; also
            T = 2 pi sqrt(e/g).
  TRAP      Thinking gravity changes the period of a vertical spring.
            It only shifts the MEAN POSITION down by e.
```

```
  PATTERN 18 — SPRINGS IN SERIES AND PARALLEL                     2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two springs of constants k1 and k2 ... find the period."
  METHOD    SERIES (end to end, same force, extensions add):
                 1/k_s = 1/k1 + 1/k2 ,  k_s = k1k2/(k1+k2)
                 k_s is SMALLER -> T INCREASES
            PARALLEL (side by side, same extension, forces add):
                 k_p = k1 + k2
                 k_p is LARGER -> T DECREASES
            Then T = 2 pi sqrt(m / k_effective).
  TRAP      Using the resistor rules. Springs are the OPPOSITE of
            resistors: series springs add RECIPROCALS.
```

```
  PATTERN 19 — CUTTING A SPRING                                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A spring of constant k is cut into n equal parts ..."
  METHOD    k is inversely proportional to the length.
                 n equal parts -> each has k' = n k
                 cut in ratio a:b -> k1 = k(a+b)/a , k2 = k(a+b)/b
            Since T is proportional to 1/sqrt(k), cutting always
            DECREASES the period:  T' = T / sqrt(n).
  TRAP      Thinking a shorter spring is weaker. A SHORT spring is
            STIFFER (larger k), not softer.
```

```
  PATTERN 20 — SPRING vs PENDULUM UNDER CHANGED GRAVITY           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What happens to the period on the Moon / in a lift?"
  METHOD    PENDULUM: T = 2 pi sqrt(l/g) CONTAINS g -> it changes.
            SPRING  : T = 2 pi sqrt(m/k) has NO g   -> nothing changes.
  TRAP      Applying the lift correction to a spring. It does not
            apply. This is a deliberately set trap in EAPCET.
```

---

## GROUP E — THE SIMPLE PENDULUM

```
  PATTERN 21 — DERIVE T = 2 pi sqrt(l/g)                          8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the motion of a simple pendulum is SHM and
            derive its time period."
            *** THE MOST REPEATED LONG ANSWER IN THE CHAPTER ***
  METHOD    1. Draw and LABEL the diagram: support, string length l,
               angle theta, bob mass m, mg, mg sin theta,
               mg cos theta, tension.
            2. Displace by a small angle theta; arc displacement
               x = l theta.
            3. mg cos theta is balanced by the tension.
            4. Restoring force F = -mg sin theta.
            5. Small angle: sin theta = theta, so F = -mg theta.
            6. theta = x/l  ->  F = -(mg/l) x
            7. State: F is proportional to -x, HENCE the motion is SHM.
            8. a = -(g/l) x  ->  omega^2 = g/l
            9. T = 2 pi / omega = 2 pi sqrt(l/g)
           10. Add the assumptions if there is space.
  TRAP      Omitting step 7. If you never write "hence the motion is
            simple harmonic", you lose marks even with a correct final
            formula. Also: sin theta = theta only works in RADIANS.
```

```
  PATTERN 22 — SECONDS PENDULUM                                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a seconds pendulum? Find its length."
  METHOD    T = 2 s exactly.
                 l = T^2 g / (4 pi^2) = 4 x 9.8 / 39.48 = 0.9927 m
            Frequency 0.5 Hz. It completes half an oscillation each
            second.
  TRAP      Saying its period is 1 second. It is 2 seconds — it ticks
            once per second, which is HALF an oscillation.
```

```
  PATTERN 23 — PENDULUM IN A LIFT / IN FREE FALL                  2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A pendulum in a lift accelerating upward/downward ..."
  METHOD    Replace g by g_effective:
                 lift UP with a        ->  g + a  ->  T DECREASES
                 lift DOWN with a      ->  g - a  ->  T INCREASES
                 constant velocity     ->  g      ->  NO CHANGE
                 free fall (a = g)     ->  0      ->  T INFINITE
            Then T = 2 pi sqrt(l / g_eff).
  TRAP      In free fall the answer is "T is infinite, the pendulum
            does not oscillate" — NOT "T is zero". Always give the
            reason: no restoring force.
```

```
  PATTERN 24 — EFFECT OF ALTITUDE, DEPTH, LATITUDE, PLANET        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A pendulum clock is taken up a mountain / into a mine /
            to the pole / to the Moon. Does it gain or lose time?"
  METHOD    1. Work out whether g increases or decreases:
                 altitude h : g(1 - 2h/R)     -> g DOWN
                 depth d    : g(1 - d/R)      -> g DOWN
                 pole       : g UP            equator: g DOWN
                 Moon       : g/6
            2. T is inversely proportional to sqrt(g).
            3. g DOWN -> T UP -> clock runs SLOW -> LOSES time.
               g UP   -> T DOWN -> clock runs FAST -> GAINS time.
  TRAP      Reversing "loses" and "gains". Say it out loud: bigger
            period means fewer ticks means the clock is SLOW.
```

```
  PATTERN 25 — PERCENTAGE CHANGE IN LENGTH OR g                   2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The length is increased by 21% / 4%. Find the new period."
  METHOD    T is proportional to sqrt(l), so
                 dT/T = (1/2)(dl/l)  -  (1/2)(dg/g)   in percent
            For LARGE changes use the ratio directly:
                 T_new / T_old = sqrt( l_new / l_old )
            21% increase -> sqrt(1.21) = 1.1 -> T becomes 1.1 times.
  TRAP      Using the half-rule for a 21% change. The half-rule
            (10.5%) is only valid for SMALL changes; here you must use
            sqrt(1.21) = 1.1, i.e. exactly 10%.
```

```
  PATTERN 26 — ASSUMPTIONS AND LAWS OF THE PENDULUM               2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the assumptions made in deriving T = 2 pi sqrt(l/g)"
            / "State the laws of the simple pendulum."
  METHOD    ASSUMPTIONS: small amplitude (sin theta = theta);
            weightless inextensible string; point-mass bob; no air
            resistance; rigid support; motion in a vertical plane.
            LAWS: law of length (T ~ sqrt l), law of acceleration
            (T ~ 1/sqrt g), law of mass (independent of m), law of
            isochronism (independent of amplitude).
  TRAP      Forgetting that the amplitude-independence only holds for
            SMALL amplitudes.
```

---

## GROUP F — DAMPED, FORCED AND RESONANCE

```
  PATTERN 27 — DAMPED OSCILLATIONS                                2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What are damped oscillations? Write the equation of
            motion and describe how the amplitude varies."
  METHOD    1. Definition: amplitude decreases with time because a
               resistive force dissipates energy.
            2. Damping force F = -b v.
            3. Equation:  m d2x/dt2 + b dx/dt + k x = 0
            4. Solution:  x = A e^(-bt/2m) cos(omega' t + phi)
            5. Amplitude A(t) = A e^(-bt/2m): EXPONENTIAL decay.
            6. Energy E(t) = (1/2) k A^2 e^(-bt/m): decays twice as
               fast.
            7. Draw the graph with the exponential envelope.
  TRAP      Saying the PERIOD keeps decreasing. It stays practically
            constant (in fact very slightly longer than undamped).
```

```
  PATTERN 28 — FREE, FORCED AND RESONANCE COMPARED                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain free, damped and forced oscillations. What is
            resonance?"
  METHOD    FREE   - oscillates at its own NATURAL frequency, constant
                     amplitude (ideal case).
            DAMPED - amplitude decays exponentially.
            FORCED - driven by an external periodic force; oscillates
                     at the DRIVING frequency, not its own.
            RESONANCE - driving frequency = natural frequency, so the
                     amplitude becomes MAXIMUM.
            Draw the resonance curve: peak at n0, taller and sharper
            when the damping is small.
  TRAP      Saying a forced oscillator vibrates at its natural
            frequency. In the steady state it vibrates at the
            DRIVER'S frequency.
```

```
  PATTERN 29 — EXAMPLES OF RESONANCE                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why do soldiers break step on a bridge?" /
            "Give examples of resonance."
  METHOD    Name the example AND explain the frequency match:
            1. Soldiers break step - marching applies a periodic force;
               if it matches a natural frequency of the bridge,
               resonance builds a destructive amplitude.
            2. Radio tuning - the circuit's natural frequency is set
               equal to the station's frequency.
            3. Tacoma Narrows bridge (1940) - wind drove the bridge at
               one of its natural frequencies and destroyed it.
            4. A child on a swing pushed once per swing.
            5. A wine glass shattered by a sung note.
  TRAP      Just naming the example without saying WHY. The frequency
            match is the mark-earning sentence.
```

---

## GROUP G — MIXED AND HIGHER-ORDER

```
  PATTERN 30 — PROVE A GIVEN MOTION IS SHM AND FIND T             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the given system executes SHM and find its
            period." (U-tube liquid, floating cylinder, a ball in a
            bowl, a body in a tunnel through the Earth.)
  METHOD    The same six-step recipe every time:
            1. Displace by y.
            2. Find the NET restoring force from the free-body diagram.
            3. Show F = -(constant) x y  ->  SHM.
            4. a = -(constant/m) y
            5. omega^2 = constant / m
            6. T = 2 pi / omega
  TRAP      Not stating explicitly that F is proportional to -y. That
            sentence is the proof, and it carries a mark.
```

```
  PATTERN 31 — TIME TAKEN BETWEEN TWO POSITIONS                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How long does the particle take to go from the mean
            position to y = A/2?"
  METHOD    1. Write y = A sin(2 pi t / T) if it starts at the MEAN
               position, or y = A cos(2 pi t / T) if it starts at an
               EXTREME.
            2. Substitute the given y and solve for t.
            Landmarks:
               from MEAN:     A/2 -> T/12 , A/sqrt2 -> T/8 ,
                              0.866A -> T/6 , A -> T/4
               from EXTREME:  0.866A -> T/12 , A/sqrt2 -> T/8 ,
                              A/2 -> T/6 , 0 -> T/4
  TRAP      Using the sine version when the particle starts at an
            extreme position. Read the question first.
```

```
  PATTERN 32 — AVERAGE SPEED AND AVERAGE VELOCITY                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the average speed / average velocity over one
            complete oscillation."
  METHOD    Path in one oscillation = 4A, so average speed = 4A/T.
            Displacement in one oscillation = 0, so average velocity
            = 0.
            Over a QUARTER period: average speed = A/(T/4) = 4A/T too.
  TRAP      Confusing average speed with v_max. Average speed is
            4A/T = 2 A omega / pi , which is about 0.64 v_max.
```

```
  PATTERN 33 — COMBINING TWO SHMs ON THE SAME LINE                2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "y1 = a sin wt and y2 = a sin(wt + phi). Find the
            resultant amplitude."
  METHOD    R = sqrt( a1^2 + a2^2 + 2 a1 a2 cos phi )
            For EQUAL amplitudes:  R = 2 a cos( phi / 2 )
            In phase (phi = 0)      -> R = 2a
            Out of phase (phi = pi) -> R = 0
  TRAP      Adding the amplitudes arithmetically regardless of the
            phase. Only valid when phi = 0.
```

```
  PATTERN 34 — IDENTIFY SHM FROM AN EQUATION                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Which of these represents SHM?"
  METHOD    It is SHM only if it can be written as a SINGLE sine or
            cosine of constant amplitude:
               sin wt - cos wt  =  sqrt2 sin(wt - pi/4)     -> SHM
               sin^2 wt         -> SHM about a shifted centre,
                                   period pi/omega
               sin^3 wt         -> periodic, NOT SHM
               e^(-wt), 1 + wt  -> not even periodic
  TRAP      Assuming anything containing "sin" is SHM. Check that it
            reduces to ONE sine of constant amplitude.
```

```
  PATTERN 35 — FIND g FROM PENDULUM DATA (LAB / GRAPH)            2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A pendulum of length l has period T. Find g." /
            "A graph of T^2 against l is a straight line of slope s."
  METHOD    From T = 2 pi sqrt(l/g):

                       4 pi^2  l                       4 pi^2
                 g  = -----------        and  slope = --------
                          T^2                             g

                 so  g = 4 pi^2 / slope
  TRAP      Forgetting to SQUARE T. The formula has T^2 in the
            denominator, not T.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right-hand column and try.

```
  +--------------------------------------------------+---------------+
  |  QUESTION STEM                                   |  PATTERN No.  |
  +--------------------------------------------------+---------------+
  |  "Define simple harmonic motion."                |      2        |
  |  "Give two examples of periodic but not          |      1        |
  |   oscillatory motion."                           |               |
  |  "What is the epoch?"                            |      3        |
  |  "Write the differential equation of SHM."       |      4        |
  |  "y = 4 sin(2t + pi/3). Find T."                 |      5        |
  +--------------------------------------------------+---------------+
  |  "Derive v and a in SHM."                        |      6        |
  |  "Find the speed at a displacement of 3 cm."     |      7        |
  |  "v_max = 30 cm/s, a_max = 60 cm/s^2. Find A."   |      8        |
  |  "16 cm/s at 3 cm and 12 cm/s at 4 cm ..."       |      9        |
  |  "What is the phase difference between y and a?" |     10        |
  |  "Show that the projection of circular motion    |     11        |
  |   on a diameter is SHM."                         |               |
  +--------------------------------------------------+---------------+
  |  "Show that the total energy in SHM is constant."|     12        |
  |  "At what displacement is KE = PE?"              |     13        |
  |  "The amplitude is doubled. What about E?"       |     14        |
  |  "With what period does the KE vary?"            |     15        |
  +--------------------------------------------------+---------------+
  |  "Define force constant. Give its unit."         |     16        |
  |  "Derive T for a mass on a spring."              |     17        |
  |  "Two springs k1 and k2 in parallel ..."         |     18        |
  |  "A spring is cut into three equal parts ..."    |     19        |
  |  "A spring-mass system is taken to the Moon."    |     20        |
  +--------------------------------------------------+---------------+
  |  "Show that a simple pendulum executes SHM and   |     21        |
  |   derive its time period."                       |               |
  |  "What is a seconds pendulum?"                   |     22        |
  |  "A pendulum in a freely falling lift ..."       |     23        |
  |  "A pendulum clock is taken up a mountain."      |     24        |
  |  "The length is increased by 21% ..."            |     25        |
  |  "State the laws of the simple pendulum."        |     26        |
  +--------------------------------------------------+---------------+
  |  "What are damped oscillations?"                 |     27        |
  |  "Explain forced oscillations and resonance."    |     28        |
  |  "Why do soldiers break step on a bridge?"       |     29        |
  +--------------------------------------------------+---------------+
  |  "A liquid in a U-tube ... show it is SHM."      |     30        |
  |  "Time taken to go from the mean position to     |     31        |
  |   half the amplitude?"                           |               |
  |  "Average speed over one oscillation?"           |     32        |
  |  "y1 = a sin wt, y2 = a sin(wt + pi/3) ..."      |     33        |
  |  "Which of these represents SHM?"                |     34        |
  |  "A graph of T^2 against l has slope s. Find g." |     35        |
  +--------------------------------------------------+---------------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  TIER 1  -  LEARN THESE OR LEARN NOTHING       (about 10 marks)  |
  |                                                                  |
  |    Pattern 21  Simple pendulum derivation           8 marks      |
  |    Pattern 2   Define SHM                           2 marks      |
  |                                                                  |
  |    These two alone are worth about 10 of the 60 marks in the     |
  |    paper. The pendulum derivation is ONE page of writing that    |
  |    you can memorise in an evening.                               |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |  TIER 2  -  THE NEXT BEST RETURN               (about 6 marks)   |
  |                                                                  |
  |    Pattern 12  Energy in SHM (the other 8-mark option)           |
  |    Pattern 6   Derive v and a                       4 marks      |
  |    Pattern 22  Seconds pendulum                     2 marks      |
  |    Pattern 23  Pendulum in a lift / free fall       2 marks      |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |  TIER 3  -  CHEAP 2-MARK PICK-UPS                                |
  |                                                                  |
  |    Pattern 3   Amplitude / phase / epoch definitions             |
  |    Pattern 15  Period of the energy variation (T/2)              |
  |    Pattern 19  Cutting a spring                                  |
  |    Pattern 20  Spring vs pendulum under changed gravity          |
  |    Pattern 29  Examples of resonance                             |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |  TIER 4  -  ONLY IF EVERYTHING ELSE IS DONE                      |
  |                                                                  |
  |    Pattern 9   Two speeds at two displacements                   |
  |    Pattern 30  Prove a new system is SHM                         |
  |    Pattern 33  Combining two SHMs                                |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
  THE FIVE-MINUTE PRE-EXAM REVISION

     1.  a = -omega^2 y                       (definition of SHM)
     2.  v = omega sqrt(A^2 - y^2)
     3.  v_max = A omega (MEAN) , a_max = A omega^2 (EXTREME)
     4.  E = (1/2) m omega^2 A^2 = constant
     5.  T = 2 pi sqrt(l/g)   pendulum   (g matters)
     6.  T = 2 pi sqrt(m/k)   spring     (g does NOT matter)
     7.  Series springs: reciprocals add.  Parallel: add directly.
     8.  KE = PE at y = A/sqrt(2).
     9.  KE and PE repeat with period T/2.
    10.  Free fall -> the pendulum does not oscillate.

  Read those ten lines on the way into the hall. They cover about
  80 percent of what this chapter will ask you.
```
