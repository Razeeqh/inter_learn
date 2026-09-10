# Magnetism and Matter — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — WHAT HAPPENS WHEN A MAGNET IS CUT                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A bar magnet is cut into two equal halves ... what
            happens to the pole strength / magnetic moment?"
  METHOD    1. State FIRST that each piece is a COMPLETE magnet with
               both an N and an S pole.
            2. Cut PERPENDICULAR to the length:
                  pole strength UNCHANGED, length HALVED, M -> M/2
            3. Cut PARALLEL to the length:
                  pole strength HALVED, length UNCHANGED, M -> M/2
            4. Conclude: in both cases the MOMENT is halved.
  TRAP      Writing "one piece becomes an N magnet and the other an S
            magnet". That is wrong and costs the whole mark.
```

```
  PATTERN 2 — WHY MAGNETIC MONOPOLES DO NOT EXIST                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Can an isolated magnetic pole be obtained?" /
            "Why do magnetic monopoles not exist?"
  METHOD    Give THREE reasons:
            1. Magnetism comes from CIRCULATING CURRENTS, and a
               current loop always has two faces.
            2. Cutting a magnet always produces two complete magnets.
            3. The net magnetic flux through any closed surface is
               ZERO (Gauss's law in magnetism).
  TRAP      Giving only "it has never been found" with no reason.
```

```
  PATTERN 3 — PROPERTIES OF MAGNETIC FIELD LINES                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the properties of magnetic lines of force."
  METHOD    Recite four or five, and ALWAYS include the first two:
            1. Continuous CLOSED curves; outside N -> S, inside S -> N.
            2. Tangent gives the DIRECTION of B.
            3. Crowding gives the STRENGTH of B.
            4. They never intersect.
            5. They contract lengthwise and repel sideways.
  TRAP      Saying only "they go from N to S" without adding
            "outside the magnet ... and S to N inside".
```

```
  PATTERN 4 — COMPARE ELECTRIC AND MAGNETIC FIELD LINES           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Give two differences between electric and magnetic
            field lines."
  METHOD    Pick the two strongest differences:
            1. Electric lines START on +q and END on -q.
               Magnetic lines have NO start and NO end (closed loops).
            2. Flux through a closed surface: q/e0 for E, but ZERO
               for B, because isolated poles do not exist.
            Optional third: shielding is possible for E, not for B.
  TRAP      Listing similarities instead of differences.
```

```
  PATTERN 5 — DEFINE THE BASIC MAGNETIC QUANTITIES                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define pole strength / magnetic dipole moment /
            magnetic length."
  METHOD    Always give THREE things:
            (a) the definition in words
            (b) the formula
            (c) the SI unit
            M = m x 2l   ->  A m^2  (= J/T)
            m : F = mB   ->  A m
            2l = (5/6) L
  TRAP      Forgetting the unit. Half the mark lives in the unit.
```

```
  PATTERN 6 — BAR MAGNET AS AN EQUIVALENT SOLENOID                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that a bar magnet is equivalent to a solenoid" /
            "Derive the magnetic moment of a current loop."
  METHOD    1. State Ampere's hypothesis and that the two field
               patterns are identical.
            2. Draw the solenoid: length 2l, radius a, n turns/metre,
               current I, point P on the axis at distance r.
            3. Take an element dx containing n dx turns and write
               dB = mu0 (n dx) I a^2 / { 2 [(r-x)^2 + a^2]^(3/2) }.
            4. Integrate from -l to +l.
            5. Apply r >> l and r >> a, so the bracket becomes r^3.
            6. Get B = mu0 n (2l) I a^2 / (2 r^3).
            7. Multiply and divide by 2 pi to reach
               B = (mu0/4pi)(2M/r^3) with M = n(2l) I (pi a^2) = N I A.
  TRAP      Skipping step 7. The whole point of the question is to
            SHOW the standard bar-magnet form appearing.
```

```
  PATTERN 7 — DERIVE THE AXIAL FIELD OF A BAR MAGNET              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the magnetic induction at a point on the axial
            line (end-on position) of a bar magnet."
  METHOD    1. Draw the magnet with -m, +m, length 2l, point P at
               distance r from the CENTRE.
            2. B(N) = (mu0/4pi) m/(r-l)^2 , directed O -> P.
            3. B(S) = (mu0/4pi) m/(r+l)^2 , directed P -> O.
            4. SUBTRACT (they are opposite).
            5. Take the LCM, simplify to (mu0/4pi) 2Mr/(r^2-l^2)^2.
            6. For a short magnet drop l^2 :  (mu0/4pi) 2M/r^3.
            7. State the direction: ALONG M.
  TRAP      Measuring r from the pole instead of the CENTRE.
```

```
  PATTERN 8 — DERIVE THE EQUATORIAL FIELD OF A BAR MAGNET         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the magnetic induction on the equatorial line
            (broadside-on position) of a bar magnet."
  METHOD    1. Draw P on the perpendicular bisector at distance r.
            2. Distance from each pole = sqrt(r^2 + l^2), so each
               pole gives (mu0/4pi) m/(r^2 + l^2).
            3. RESOLVE. The perpendicular components CANCEL; the
               components along the magnet ADD.
            4. B = 2 B(N) cos(theta), with cos(theta) = l/sqrt(r^2+l^2).
            5. Simplify to (mu0/4pi) M/(r^2+l^2)^(3/2).
            6. Short magnet: (mu0/4pi) M/r^3.
            7. State the direction: OPPOSITE to M.
  TRAP      Forgetting to say WHICH components cancel, and forgetting
            the "opposite to M" direction.
```

```
  PATTERN 9 — COMPARE AXIAL AND EQUATORIAL FIELDS                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The axial field of a short magnet is B. What is the
            equatorial field at the same distance?"
  METHOD    B(axial) = 2 x B(equatorial).
            So the answer is B/2, directed OPPOSITE to the moment.
  TRAP      Getting the factor upside down. Memory hook:
            "AXIAL has the TWO."
```

```
  PATTERN 10 — THE ELECTROSTATICS <-> MAGNETISM ANALOGY           2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Compare the electric dipole with the magnetic dipole" /
            "Write the magnetic analogue of ..."
  METHOD    Use the single conversion rule:

                 1                mu0
              --------  ---->   -------          p  ---->  M
               4 pi e0            4 pi

            Then every electrostatic formula converts directly:
               E axial 2p/r^3   ->  B axial 2M/r^3
               tau = p x E      ->  tau = M x B
               U   = -p . E     ->  U   = -M . B
            Add the ONE difference: $E.dS = q/e0 but $B.dS = 0,
            because isolated poles do not exist.
  TRAP      Using 9 x 10^9 in a magnetism formula. Magnetism uses
            mu0/(4pi) = 10^-7.
```

```
  PATTERN 11 — TORQUE ON A DIPOLE IN A UNIFORM FIELD              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the torque on a magnetic dipole
            placed in a uniform magnetic field."
  METHOD    1. Draw the magnet at angle theta to B.
            2. Force on N = mB along +B; on S = mB along -B.
            3. NET FORCE = ZERO -> state this explicitly, it carries
               a mark.
            4. The forces form a COUPLE.
            5. tau = (mB)(2l sin theta) = M B sin(theta).
            6. Vector form tau = M x B.
            7. Special cases: max at 90, zero at 0 and 180.
  TRAP      Not saying that the net force is zero, and not saying that
            this is true only in a UNIFORM field.
```

```
  PATTERN 12 — POTENTIAL ENERGY OF A DIPOLE                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the potential energy of a magnetic dipole in a
            uniform field" / "Find the work done in rotating a magnet."
  METHOD    1. dW = tau d(theta) = M B sin(theta) d(theta).
            2. Integrate from theta1 to theta2:
               W = M B (cos theta1 - cos theta2).
            3. Take U = 0 at theta = 90 degrees.
            4. U = - M B cos(theta) = - M . B.
            5. Quote the three special angles.
  TRAP      Losing the MINUS sign in U, and forgetting to state the
            reference U = 0 at 90 degrees.
```

```
  PATTERN 13 — NUMERICAL ON TORQUE / WORK / ENERGY                2 marks
  ------------------------------------------------------------------------
  TRIGGER   Numbers for M, B and an angle are given.
  METHOD    Pick the right one of the three:
               torque    tau = M B sin(theta)
               energy    U   = - M B cos(theta)
               work      W   = M B (cos th1 - cos th2)
            Flip 0 -> 180 :  W = 2 M B
  TRAP      Using sin where cos is needed. Torque uses SIN.
            Energy uses COS. Never mix them.
```

```
  PATTERN 14 — STABLE AND UNSTABLE EQUILIBRIUM                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the positions of stable and unstable equilibrium
            of a magnet in a uniform field."
  METHOD    theta = 0    : M parallel to B , U = -MB (minimum) , STABLE
            theta = 180  : M antiparallel  , U = +MB (maximum) , UNSTABLE
            In BOTH, the torque is zero. Say so.
  TRAP      Thinking "zero torque means stable". Both positions have
            zero torque; only the MINIMUM energy one is stable.
```

```
  PATTERN 15 — ANGULAR SHM OF A MAGNET                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that a magnet displaced in a uniform field executes
            SHM and find its period."
  METHOD    1. Restoring torque = - M B sin(theta).
            2. I d2(theta)/dt2 = - M B sin(theta).
            3. Small angle: sin(theta) = theta.
            4. d2(theta)/dt2 = -(MB/I) theta   -> SHM.
            5. omega = sqrt(MB/I) , T = 2 pi sqrt( I / (M B) ).
            6. For a bar magnet, I = W(L^2 + b^2)/12.
  TRAP      Forgetting the MINUS sign (which is what proves it is SHM)
            and forgetting to state the small-angle approximation.
```

```
  PATTERN 16 — PROPORTIONALITY IN OSCILLATION QUESTIONS           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A magnet makes n oscillations per minute. If B is made
            k times larger ..." / "the magnet is cut in half ..."
  METHOD    Use    T  proportional to  1/sqrt(B)   and   f  to  sqrt(B)
            B -> kB   gives   f -> f sqrt(k)
            Cut in half perpendicular to the length:
               I -> I/8 , M -> M/2  ==>  T -> T/2
  TRAP      Trying to compute I and M numerically. Use ratios only.
```

```
  PATTERN 17 — STATE AND EXPLAIN GAUSS'S LAW IN MAGNETISM         2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Gauss's law in magnetism" / "What does it imply?"
  METHOD    1. Statement: the net magnetic flux through ANY CLOSED
               surface is ZERO.
            2. Formula: $ B . dS = 0.
            3. Reason: field lines are closed loops, so lines in =
               lines out.
            4. Implication: magnetic MONOPOLES DO NOT EXIST.
            5. Contrast with $ E . dS = q/e0.
  TRAP      Writing "flux is zero" and stopping. The monopole
            conclusion is the whole point of the question.
```

```
  PATTERN 18 — DEFINE THE EARTH'S MAGNETIC ELEMENTS               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define the magnetic elements of the earth" /
            "Define declination, dip and the horizontal component."
  METHOD    1. DRAW the diagram first (it carries marks on its own):
               geographic meridian, magnetic meridian, angle D,
               B(H) horizontal, B(V) vertical, B total, angle of dip.
            2. Define geographic meridian and magnetic meridian.
            3. DECLINATION  = angle between the two meridians.
            4. DIP          = angle B makes with the HORIZONTAL.
            5. B(H)         = horizontal component of B in the
                              magnetic meridian.
            6. Give the relations:
                  B(H) = B cos(dip)
                  B(V) = B sin(dip)
                  tan(dip) = B(V)/B(H)
                  B = sqrt( B(H)^2 + B(V)^2 )
  TRAP      Defining dip from the VERTICAL. It is from the HORIZONTAL.
```

```
  PATTERN 19 — NUMERICAL ON DIP AND THE COMPONENTS                2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two of { B , B(H) , B(V) , dip } are given; find the rest.
  METHOD    Draw the right-angled triangle with B as the hypotenuse,
            B(H) along the base and B(V) vertical, with the dip
            between B and B(H). Then simply:
                  B(H) = B cos(dip)      B(V) = B sin(dip)
                  tan(dip) = B(V)/B(H)
            Standard values:  dip 0  -> B = B(H)
                              dip 45 -> B(H) = B(V), B = B(H) sqrt(2)
                              dip 90 -> B = B(V)
  TRAP      Mixing gauss and tesla. 1 gauss = 10^-4 tesla.
```

```
  PATTERN 20 — VALUES AT THE POLES AND THE EQUATOR                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the dip at the magnetic equator / poles?" /
            "Why does a compass fail near the magnetic poles?"
  METHOD    Magnetic EQUATOR : dip = 0 , B(V) = 0 , B = B(H)
            Magnetic POLES   : dip = 90 , B(H) = 0 , B = B(V)
            Compass failure: it can only turn horizontally, and at
            the poles B(H) = 0, so there is no aligning torque.
  TRAP      Confusing the GEOGRAPHIC poles with the MAGNETIC poles.
```

```
  PATTERN 21 — NEUTRAL POINTS                                     2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Neutral points are found at a distance d ... find M" /
            "Define neutral points."
  METHOD    1. Definition: the resultant of the magnet's field and
               B(H) is ZERO there.
            2. Decide WHICH line:
                  N pole to geographic NORTH -> EQUATORIAL line
                  N pole to geographic SOUTH -> AXIAL line
            3. Equate the magnet's field to B(H):
                  equatorial :  (mu0/4pi) M/d^3   = B(H)
                  axial      :  (mu0/4pi) 2M/d^3  = B(H)
            4. Solve for M or d. Use mu0/(4pi) = 10^-7.
  TRAP      Choosing the wrong line. Memory hook:
            "N to the North -> Not the 2."
```

```
  PATTERN 22 — MAGNETIC MAPS                                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What are isogonic / isoclinic / aclinic lines?"
  METHOD    isoGONIC   -> equal DECLINATION
            aGONIC     -> ZERO declination
            isoCLINIC  -> equal DIP
            aCLINIC    -> ZERO dip = the MAGNETIC EQUATOR
            isoDYNAMIC -> equal HORIZONTAL COMPONENT B(H)
            Mention the uses: navigation, prospecting, surveying.
  TRAP      Swapping "gonic" (declination) with "clinic" (dip).
            CLINIC = incline = dip.
```

```
  PATTERN 23 — CAUSE OF THE EARTH'S MAGNETISM                     2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the cause of the earth's magnetism."
  METHOD    Give the DYNAMO THEORY in four steps:
            1. The outer core is molten iron and nickel - a conductor.
            2. Convection plus the earth's rotation keeps it
               circulating.
            3. Circulating conducting fluid = huge current loops.
            4. Those current loops produce the field (self-exciting
               dynamo / geodynamo effect).
            Add: permanently magnetised ore is ruled out because the
            interior is far above the Curie temperature.
  TRAP      Saying "there is a giant bar magnet inside the earth".
            That is only a MODEL, not the cause.
```

```
  PATTERN 24 — DEFINE M, H, chi AND mu(r)                         2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define magnetisation / magnetic intensity /
            susceptibility / relative permeability."
  METHOD    Magnetisation M = net moment / volume         (A/m)
            Magnetic intensity H = the applied field, H = nI  (A/m)
            B = mu0 ( H + M )
            chi  = M / H                        (dimensionless)
            mu(r) = mu / mu0 = B / (mu0 H)      (dimensionless)
  TRAP      Giving the unit of chi. It has NO unit.
```

```
  PATTERN 25 — DERIVE mu(r) = 1 + chi                             2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Establish the relation between relative permeability and
            magnetic susceptibility."
  METHOD    1. B = mu0 (H + M).
            2. Substitute M = chi H:  B = mu0 H (1 + chi).
            3. Write B = mu H, so mu = mu0 (1 + chi).
            4. Divide by mu0:  mu(r) = 1 + chi.
  TRAP      Skipping the substitution M = chi H. It is the step that
            actually earns the mark.
```

```
  PATTERN 26 — NUMERICAL ON H, chi, M AND B                       2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A solenoid of n turns per metre carries I with a core of
            relative permeability mu(r). Find H, chi, M and B."
  METHOD    Fixed order, every time:
            1. H     =  n I
            2. chi   =  mu(r) - 1
            3. M     =  chi H
            4. B     =  mu0 (H + M)   =  mu(r) mu0 H
            Always CHECK step 4 both ways - they must agree.
  TRAP      Using mu0/(4pi) = 10^-7 here. In B = mu0(H+M) you need
            the FULL mu0 = 4 pi x 10^-7 = 1.2566 x 10^-6.
```

```
  PATTERN 27 — CLASSIFY DIA / PARA / FERRO                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between diamagnetic, paramagnetic and
            ferromagnetic substances."
  METHOD    Draw a THREE-COLUMN table and fill these SEVEN rows:
            1. CAUSE (no permanent moment / random moments / domains)
            2. Behaviour in a NON-UNIFORM field
            3. How the rod sets itself
            4. SIGN and SIZE of chi
            5. Value of mu(r) relative to 1
            6. Effect of TEMPERATURE
            7. Two EXAMPLES each
  TRAP      Giving examples only. The examiner wants the SIGN of chi
            and the value of mu(r) relative to 1 above everything else.
```

```
  PATTERN 28 — IDENTIFY THE MATERIAL FROM DATA                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A substance has mu(r) = 0.9998 / chi = 1.2 x 10^-5 /
            chi = 5000. Identify it."
  METHOD    chi negative, mu(r) < 1      ->  DIAMAGNETIC
            chi small positive, mu(r) > 1->  PARAMAGNETIC
            chi very large positive      ->  FERROMAGNETIC
            chi = -1 exactly, mu(r) = 0  ->  SUPERCONDUCTOR
                                             (perfect diamagnet,
                                              Meissner effect)
            Convert first if needed:  chi = mu(r) - 1
  TRAP      Rounding 0.9998 to 1 and calling it non-magnetic.
```

```
  PATTERN 29 — CURIE'S LAW AND THE CURIE TEMPERATURE              2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Curie's law" / "What is the Curie temperature?" /
            "chi at T1 is x; find chi at T2."
  METHOD    PARAMAGNETIC:   chi = C / T    ->    chi1 T1 = chi2 T2
            FERROMAGNETIC above Tc:  chi = C / (T - Tc)
            Curie temperature = the temperature above which a
            FERROMAGNET becomes PARAMAGNETIC (domains destroyed).
            Fe 1043 K , Co 1394 K , Ni 631 K , Gd 317 K.
  TRAP      Using degrees Celsius. Curie's law needs ABSOLUTE
            temperature in KELVIN.
```

```
  PATTERN 30 — HYSTERESIS, RETENTIVITY AND COERCIVITY             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain hysteresis with a B-H curve" / "Define
            retentivity and coercivity."
  METHOD    1. DRAW the loop and label the axes B (vertical) and
               H (horizontal).
            2. Mark SATURATION at the top of the virgin curve.
            3. Mark RETENTIVITY on the B axis (where H = 0).
            4. Mark COERCIVITY on the H axis (where B = 0).
            5. Define both, with units (tesla and A/m).
            6. State that the AREA = energy lost per unit volume
               per cycle.
  TRAP      Labelling the axes the wrong way round, and mixing up
            retentivity (B axis) with coercivity (H axis).
```

```
  PATTERN 31 — SOFT IRON VERSUS STEEL, AND THEIR USES             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is soft iron used for transformer cores and steel
            for permanent magnets?"
  METHOD    1. Draw the two loops side by side (narrow vs fat).
            2. Table: loop area, hysteresis loss, retentivity,
               coercivity, permeability.
            3. SOFT IRON: small area -> small loss per cycle;
               low coercivity -> demagnetises instantly;
               high permeability -> strong field for a small current.
               USE: electromagnets, transformer cores, motors.
            4. STEEL: HIGH COERCIVITY -> resists demagnetisation.
               USE: permanent magnets, compass needles.
  TRAP      Writing "steel has higher retentivity". The safe answer
            is COERCIVITY - that is the deciding property.
```

```
  PATTERN 32 — HYSTERESIS ENERGY-LOSS NUMERICAL                   2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The loop area is A J/m^3. The core volume is V and the
            frequency is f. Find the heat produced in time t."
  METHOD    1. Energy per cycle  =  (loop area) x (volume)
            2. Number of cycles  =  f x t
            3. Total energy      =  (area) x (volume) x f x t
            4. Power             =  (area) x (volume) x f
  TRAP      Forgetting to multiply by the frequency, or leaving the
            time in minutes instead of seconds.
```

```
  PATTERN 33 — PERMANENT MAGNETS AND ELECTROMAGNETS               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How is a permanent magnet made?" / "What is an
            electromagnet and what properties must its core have?"
  METHOD    PERMANENT MAGNET
              Methods: single touch, double touch, solenoid with DC
                       (best), hammering in the earth's field.
              Needs: HIGH retentivity, HIGH coercivity.
              Materials: steel, cobalt-steel, alnico, ticonal.
            ELECTROMAGNET
              A SOFT IRON core wound with an insulated coil; magnetic
              only while the current flows.
              Needs: HIGH permeability, LOW coercivity, LOW
                     retentivity, SMALL loop area.
              Uses: bells, relays, cranes, motors, MRI.
  TRAP      Giving the uses but not the REQUIRED PROPERTIES. The
            properties are what carry the marks.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +----------------------------------------------------+----------+
  |  QUESTION STEM                                     |  PATTERN |
  +----------------------------------------------------+----------+
  |  "A magnet is broken into two pieces ..."          |     1    |
  |  "Can an isolated N pole be obtained?"             |     2    |
  |  "State four properties of magnetic lines."        |     3    |
  |  "Two differences between E lines and B lines."    |     4    |
  |  "Define magnetic moment and give its unit."       |     5    |
  |  "Show that a bar magnet is like a solenoid."      |     6    |
  |  "Derive B on the end-on position."                |     7    |
  |  "Derive B on the broadside-on position."          |     8    |
  |  "Axial field is B; what is the equatorial field?" |     9    |
  |  "Compare the electric and magnetic dipole."       |    10    |
  |  "Derive the torque on a dipole in a uniform field"|    11    |
  |  "Derive U = -MB cos(theta)."                      |    12    |
  |  "Find the work done in rotating through 180 deg." |    13    |
  |  "Where is the magnet in stable equilibrium?"      |    14    |
  |  "Show the magnet executes SHM; find T."           |    15    |
  |  "B is made 9 times larger; find the new rate."    |    16    |
  |  "State Gauss's law in magnetism."                 |    17    |
  |  "Define declination and dip."                     |    18    |
  |  "B(H) = 0.34 G and dip = 30; find B."             |    19    |
  |  "Why does a compass fail at the magnetic poles?"  |    20    |
  |  "Neutral points are 20 cm away; find M."          |    21    |
  |  "What are isoclinic lines?"                       |    22    |
  |  "Explain the cause of the earth's magnetism."     |    23    |
  |  "Define magnetisation and magnetic intensity."    |    24    |
  |  "Prove mu(r) = 1 + chi."                          |    25    |
  |  "A solenoid with a core of mu(r) = 400 ..."       |    26    |
  |  "Distinguish dia, para and ferro."                |    27    |
  |  "A substance has mu(r) = 0.9998. Identify it."    |    28    |
  |  "State Curie's law."                              |    29    |
  |  "Explain hysteresis; define coercivity."          |    30    |
  |  "Why soft iron for a transformer core?"           |    31    |
  |  "Loop area 200 J/m^3, 50 Hz; find the heat."      |    32    |
  |  "How is a permanent magnet made?"                 |    33    |
  +----------------------------------------------------+----------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  TIER 1 — LEARN THESE FOUR AND YOU CANNOT SCORE ZERO
  ---------------------------------------------------------------
     PATTERN 18  Earth's magnetic elements (diagram + definitions
                 + the three relations)
     PATTERN 27  The dia / para / ferro comparison table
     PATTERN 6   Bar magnet as an equivalent solenoid
     PATTERN 11  Torque on a dipole in a uniform field

     These are the four most repeated questions in the chapter.
     Worth about 4 + 4 marks in Section B and 2 to 4 in Section A.
     Study time: about six hours.


  TIER 2 — ADD THESE FOR THE EASY SECTION A MARKS
  ---------------------------------------------------------------
     PATTERN 1   Cutting a magnet
     PATTERN 3   Properties of field lines
     PATTERN 17  Gauss's law in magnetism
     PATTERN 30  Hysteresis, retentivity, coercivity
     PATTERN 31  Soft iron versus steel
     PATTERN 29  Curie's law and the Curie temperature

     Every one of these is pure recall. No maths at all.
     Study time: about three hours. Worth 4 to 6 marks.


  TIER 3 — DO THESE IF YOU HAVE TIME
  ---------------------------------------------------------------
     PATTERN 7 and 8   The axial and equatorial derivations
     PATTERN 12 and 15 Potential energy and SHM derivations
     PATTERN 19 and 26 The two standard numericals
     PATTERN 21        Neutral points


  THE FIVE LINES YOU MUST BE ABLE TO WRITE WITHOUT THINKING
  ---------------------------------------------------------------
     1.   B(axial) = (mu0/4pi) 2M/r^3      B(eq) = (mu0/4pi) M/r^3
     2.   tau = M B sin(theta)             U = - M B cos(theta)
     3.   T = 2 pi sqrt( I / (M B) )
     4.   B(H) = B cos(dip)   B(V) = B sin(dip)   tan(dip)=B(V)/B(H)
     5.   B = mu0 (H + M)     chi = M/H     mu(r) = 1 + chi


  IN THE EXAM HALL
  ---------------------------------------------------------------
     DRAW THE DIAGRAM FIRST. In this chapter the earth's-magnetism
     diagram and the hysteresis loop carry marks on their own, even
     if the rest of your answer is thin. A labelled diagram takes
     ninety seconds and can rescue two marks.
```
