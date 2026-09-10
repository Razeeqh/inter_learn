# Electromagnetic Induction — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where the marks get lost

---

```
  PATTERN 1 — DEFINE MAGNETIC FLUX / ITS UNIT / ITS DIMENSIONS     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define magnetic flux." / "What is the SI unit of magnetic
            flux?" / "Write its dimensional formula." / "Define one weber."
  METHOD    1. Definition in words: the total number of field lines
               passing normally through the surface.
            2. The formula  phi = B A cos(theta) , with theta measured
               from the NORMAL.
            3. Unit weber (Wb) = T m^2 = V s.
            4. Dimensions [ M L^2 T^-2 A^-1 ].
            5. Add "flux is a SCALAR".
  TRAP      Writing only the formula with no words. The definition
            sentence carries half the marks.
```

```
  PATTERN 2 — CALCULATE THE FLUX THROUGH A COIL                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A coil of area A is placed in a field B at an angle ...
            Find the flux."
  METHOD    1. Convert cm^2 to m^2  ( 1 cm^2 = 10^-4 m^2 ).
            2. Decide the angle WITH THE NORMAL.
            3. phi = B A cos(theta) . Multiply by N if flux LINKAGE
               is asked.
  TRAP      If the angle is given WITH THE PLANE of the coil, you must
            use  90 - angle . This single mistake is the most common
            error in the whole chapter.
```

```
  PATTERN 3 — STATE FARADAY'S LAWS AND DERIVE THE EMF            2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Faraday's laws of electromagnetic induction."
            "Obtain the expression for the induced EMF."
  METHOD    1. FIRST LAW - flux change produces an EMF; it lasts only
               while the change lasts.
            2. SECOND LAW - the EMF is proportional to the RATE of
               change of flux linkage.
            3. Derive:  change in linkage = N ( phi2 - phi1 )
                        e = - N ( phi2 - phi1 ) / t  =  - N d(phi)/dt
            4. Say the minus sign is Lenz's law.
  TRAP      Leaving out N. And forgetting to explain the minus sign.
```

```
  PATTERN 4 — FLUX GIVEN AS A FUNCTION OF TIME                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "phi = 5 t^2 + 3 t + 16 . Find the EMF at t = 2 s."
  METHOD    1. DIFFERENTIATE phi with respect to t.
            2. THEN substitute the value of t.
            3. e = - d(phi)/dt ; quote the magnitude.
            4. Multiply by N if the coil has N turns.
  TRAP      Substituting t into phi itself and calling that the EMF.
            Differentiate FIRST, always.
```

```
  PATTERN 5 — AVERAGE EMF FOR A STATED FLUX CHANGE               2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The flux changes from 0.05 Wb to 0.01 Wb in 0.2 s in a
            coil of 100 turns. Find the EMF and the current."
  METHOD    1. e = N ( phi2 - phi1 ) / t   (take the magnitude)
            2. I = e / R
            3. If asked, H = I^2 R t .
  TRAP      Mixing up which flux is initial and which is final; and
            forgetting N again.
```

```
  PATTERN 6 — CHARGE INDUCED IN A CIRCUIT                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How much charge flows through the coil?"
  METHOD    1. q  =  N ( phi2 - phi1 ) / R
            2. State clearly: the charge does NOT depend on the time
               taken.
            3. Cross-check with q = I t if the time is known.
  TRAP      Trying to divide by the time. There is no time in this
            formula.
```

```
  PATTERN 7 — STATE LENZ'S LAW                                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Lenz's law." / "What does the negative sign in
            Faraday's law signify?"
  METHOD    One sentence: the induced current always flows in such a
            direction that it OPPOSES the cause producing it.
            Add: it is a consequence of the conservation of energy.
  TRAP      Saying "opposes the current" instead of "opposes the CHANGE
            OF FLUX / the cause".
```

```
  PATTERN 8 — FIND THE DIRECTION OF THE INDUCED CURRENT          2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A magnet is moved towards / away from a coil. Find the
            direction of the induced current."
  METHOD    1. Which way does the original flux point through the coil?
            2. Is it increasing or decreasing?
            3. INCREASING -> induced field OPPOSES it.
               DECREASING -> induced field SUPPORTS it.
            4. Convert field direction to current direction with the
               right-hand grip rule.
            5. State the pole formed and whether it attracts or repels.
  TRAP      Not stating the pole. Remember:
            APPROACHING -> REPEL ,  RECEDING -> ATTRACT.
```

```
  PATTERN 9 — LENZ'S LAW FROM CONSERVATION OF ENERGY               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that Lenz's law is a consequence of the law of
            conservation of energy."      <-- MOST ASKED IN THIS CHAPTER
  METHOD    1. State Lenz's law.
            2. Draw the bar magnet approaching the coil.
            3. Say what actually happens: near face becomes N, repels.
            4. SUPPOSE THE OPPOSITE: the coil attracts the magnet.
               - the magnet accelerates by itself, gaining KE
               - AND heat I^2 R appears in the coil
               - energy would be created from nothing -> IMPOSSIBLE
            5. Conclude: the coil must oppose the motion.
            6. Finish with: the work you do in pushing the magnet
               equals the electrical energy produced.
  TRAP      Writing one line ("it obeys conservation of energy") and
            stopping. That is worth 1 mark out of 4. Write the whole
            contradiction argument.
```

```
  PATTERN 10 — THE EXPERIMENTS OF FARADAY AND HENRY                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Describe the experiments of Faraday and Henry."
  METHOD    1. Experiment 1: magnet + coil + galvanometer (diagram).
            2. Experiment 2: current-carrying coil moved near a
               second coil.
            3. Experiment 3: two FIXED coils with a key - press,
               hold, release.
            4. Conclusion: an EMF appears only while the flux is
               CHANGING, and its size depends on the RATE of change.
  TRAP      Forgetting Experiment 3, which is the important one because
            nothing moves in it.
```

```
  PATTERN 11 — DERIVE MOTIONAL EMF FROM THE FLUX RULE              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the EMF induced in a conductor
            moving in a uniform magnetic field."
  METHOD    1. Draw the rod on the two rails, B into the page, mark
               l , v , x and R.
            2. A = l x
            3. phi = B l x
            4. d(phi)/dt = B l ( dx/dt ) = B l v
            5. e = - d(phi)/dt , so |e| = B l v .
            6. Add the general case  e = B l v sin(theta).
  TRAP      No diagram = lost marks. Also, B, l and v must be mutually
            perpendicular for the simple form.
```

```
  PATTERN 12 — DERIVE MOTIONAL EMF FROM THE LORENTZ FORCE          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive e = B l v using the force on the free electrons."
  METHOD    1. Force on each free electron:  F = q v B .
            2. Electrons pile up at one end; the other end goes
               positive.
            3. An electric field E builds up inside the rod.
            4. Equilibrium:  q E = q v B   ->   E = v B .
            5. e = E l = B l v .
  TRAP      Stopping at E = v B without multiplying by the length l.
```

```
  PATTERN 13 — ROD ON RAILS: FORCE, POWER AND HEAT               4 / 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the force needed to keep the rod moving with constant
            velocity, the power supplied and the heat produced."
  METHOD    1. e = B l v
            2. I = e / R
            3. F = B I l  =  B^2 l^2 v / R      (retarding force)
               the APPLIED force is the same size, forwards
            4. P(mech) = F v = B^2 l^2 v^2 / R
            5. P(heat) = I^2 R = the same number
            6. Say explicitly: mechanical power = heat, energy is
               conserved.
  TRAP      Quoting F as the "net" force. At constant velocity the NET
            force is zero; F is the magnitude of each of the two equal
            and opposite forces.
```

```
  PATTERN 14 — ROD ROTATING ABOUT ONE END                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A rod of length l rotates about one end with angular
            velocity omega in a field B. Find the EMF."
  METHOD    e  =  (1/2) B omega l^2 ,  with  omega = 2 pi f .
            If the speed is in rpm, omega = 2 pi (rpm) / 60 .
  TRAP      Forgetting the factor 1/2, or forgetting to square l.
            Sliding rod: no 1/2. Rotating rod: with 1/2.
```

```
  PATTERN 15 — COIL ROTATED OR FLIPPED THROUGH 180 DEGREES       2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A coil perpendicular to the field is turned through 180
            degrees in t seconds. Find the EMF and the charge."
  METHOD    1. N phi(initial) = + N B A
            2. N phi(final)   = - N B A     (the normal is reversed)
            3. CHANGE = 2 N B A             <-- note the factor 2
            4. e = 2 N B A / t ,  q = 2 N B A / R
  TRAP      Using N B A instead of 2 N B A. A 180-degree flip changes
            the SIGN of the flux, so the change is DOUBLE.
            (For a 90-degree turn the change is only N B A.)
```

```
  PATTERN 16 — WHAT ARE EDDY CURRENTS?                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What are eddy currents?" / "Why are they called Foucault
            currents?"
  METHOD    Definition: induced currents that circulate in closed loops
            within the body of a SOLID conductor placed in a CHANGING
            magnetic field. Direction given by Lenz's law.
            Also called Foucault currents.
  TRAP      Saying they flow "in a wire". The whole point is that they
            flow inside a solid block.
```

```
  PATTERN 17 — EDDY CURRENTS: HARM, CURE AND USES                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What are eddy currents? How are they minimised? Give their
            applications."
  METHOD    1. Definition (as above).
            2. HARM: I^2 R heating in transformer and motor cores,
               loss of efficiency, overheating, damage to insulation.
            3. CURE: LAMINATE the core - thin insulated sheets parallel
               to the field raise the resistance of each eddy loop;
               use silicon steel. Draw solid vs laminated core.
            4. USES: electromagnetic braking in trains, induction
               furnace, electric power meters, magnetic damping in a
               dead-beat galvanometer, induction cooker.
  TRAP      Giving only two uses. Four uses = four sub-marks.
```

```
  PATTERN 18 — WHY IS THE CORE LAMINATED?                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is the core of a transformer laminated?"
  METHOD    To reduce EDDY CURRENT losses. Thin insulated sheets
            increase the resistance of the eddy-current paths, so the
            currents and the I^2 R heat become very small.
  TRAP      Answering "to reduce hysteresis loss". Hysteresis is
            reduced by the CHOICE OF MATERIAL, not by lamination.
```

```
  PATTERN 19 — DEFINE SELF INDUCTANCE / ONE HENRY                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define self inductance." / "Define one henry."
  METHOD    1. L = N phi / I  - the flux linkage per unit current.
            2. Or from  e = - L dI/dt .
            3. One henry: an EMF of 1 volt is induced when the current
               changes at 1 ampere per second.
            4. Unit henry = Wb/A = V s /A ; dimensions
               [ M L^2 T^-2 A^-2 ].
  TRAP      Writing the formula without the definition sentence.
```

```
  PATTERN 20 — DERIVE THE SELF INDUCTANCE OF A SOLENOID            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Obtain an expression for the self inductance of a long
            solenoid."                       <-- VERY frequently asked
  METHOD    1. Draw the solenoid, mark l , A , N , I .
            2. B = mu0 n I  with  n = N / l .
            3. phi (one turn) = B A = mu0 n I A .
            4. N phi = ( n l )( mu0 n I A ) = mu0 n^2 A l I .
            5. Since N phi = L I ,   L = mu0 n^2 A l = mu0 N^2 A / l .
            6. With a core:  L = mu0 mu(r) n^2 A l .
  TRAP      Confusing n (turns per metre) with N (total turns).
            Write "n = N / l" explicitly in your answer.
```

```
  PATTERN 21 — SCALING QUESTIONS ON L                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If the number of turns is doubled, what happens to L?"
            "On what factors does L depend?"
  METHOD    Write L = mu0 N^2 A / l and replace each symbol by its
            multiple. L is proportional to N^2 , to A , and to 1/l
            (for fixed N).
            L does NOT depend on the current.
  TRAP      Saying L doubles when the turns double. It becomes FOUR
            times.
```

```
  PATTERN 22 — SELF-INDUCED (BACK) EMF NUMERICAL                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The current in a coil of L henry changes from I1 to I2 in
            t seconds. Find the induced EMF."
  METHOD    1. dI/dt = ( I2 - I1 ) / t
            2. |e| = L ( dI/dt )
            3. Add: the EMF opposes the change (Lenz).
  TRAP      Forgetting to divide by t, or forgetting to convert mH to H.
```

```
  PATTERN 23 — DERIVE THE ENERGY STORED IN AN INDUCTOR             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Obtain an expression for the energy stored in an inductor."
            "Find the magnetic energy density."
  METHOD    1. Back EMF  e = L dI/dt ; the source works against it.
            2. dW = e I dt = L I dI .
            3. Integrate from 0 to I :  U = (1/2) L I^2 .
            4. Say the energy is stored in the MAGNETIC FIELD.
            5. For the density, put L = mu0 n^2 A l and I = B/(mu0 n) :
                     U = B^2 A l / ( 2 mu0 )   ->   u = B^2 / ( 2 mu0 ).
  TRAP      Forgetting the integration step and just writing the answer.
            The integral is worth a mark on its own.
```

```
  PATTERN 24 — ENERGY NUMERICALS                                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the energy stored in a coil of L henry carrying I
            amperes." / "Find the energy density of a field B."
  METHOD    U = (1/2) L I^2      or      u = B^2 / ( 2 mu0 )
            with  mu0 = 4 pi x 10^-7 .
  TRAP      U goes with I^2 . "Current doubled" means FOUR times the
            energy, not twice.
```

```
  PATTERN 25 — DEFINE MUTUAL INDUCTANCE                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define mutual inductance and give its unit."
  METHOD    The flux linkage in the secondary per unit current in the
            primary:  N2 phi2 = M I1 , and  e2 = - M dI1/dt .
            Unit: henry.  Dimensions [ M L^2 T^-2 A^-2 ].
  TRAP      Describing SELF inductance by mistake. Mutual = TWO coils.
```

```
  PATTERN 26 — DERIVE M FOR TWO COAXIAL SOLENOIDS                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Obtain an expression for the mutual inductance of two long
            coaxial solenoids. Show that M12 = M21."
  METHOD    1. Draw the inner solenoid inside the outer one, same axis,
               same length l , area A , N1 and N2 turns.
            2. Current I1 in coil 1:  B1 = mu0 n1 I1 .
            3. phi2 = B1 A ;  N2 phi2 = mu0 n1 n2 A l I1 .
            4. M21 = mu0 n1 n2 A l .
            5. Repeat with the roles reversed to get the same M12.
            6. Conclude M12 = M21 = M = mu0 N1 N2 A / l  (RECIPROCITY).
  TRAP      Using the area of the OUTER solenoid. The flux that links
            both is limited by the INNER (smaller) area.
```

```
  PATTERN 27 — COEFFICIENT OF COUPLING                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define the coefficient of coupling." / "Find M given L1,
            L2 and k."
  METHOD    k = M / sqrt( L1 L2 )  ,  so  M = k sqrt( L1 L2 ) .
            0 <= k <= 1 ; k = 1 is perfect coupling, k = 0 no coupling.
            k is dimensionless.
  TRAP      Forgetting the square root, or writing k > 1 . M can never
            exceed sqrt( L1 L2 ).
```

```
  PATTERN 28 — MUTUAL INDUCTANCE NUMERICALS                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The primary current changes at ... A/s and induces ... V
            in the secondary. Find M." (or the reverse)
  METHOD    |e2| = M ( dI1/dt )  ->  rearrange for whichever is unknown.
            For coaxial solenoids use  M = mu0 N1 N2 A / l .
  TRAP      Not converting cm^2 to m^2, and not converting the length
            to metres.
```

```
  PATTERN 29 — INDUCTORS IN SERIES AND PARALLEL                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two inductors L1 and L2 are connected in series / parallel.
            Find the equivalent inductance."
  METHOD    SERIES     L = L1 + L2      ( + 2M aiding , - 2M opposing )
            PARALLEL   1/L = 1/L1 + 1/L2 , i.e. L = L1 L2 /( L1 + L2 )
            Exactly like resistors.
  TRAP      Using the resistor rules the wrong way round. Series ADDS.
```

```
  PATTERN 30 — DISTINGUISH SELF AND MUTUAL INDUCTION               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between self induction and mutual induction."
  METHOD    Give a TABLE with at least four rows:
            number of coils / where the EMF appears / the formula /
            what it depends on / an application (choke vs transformer).
  TRAP      Writing paragraphs. A table earns the marks faster and
            more clearly.
```

```
  PATTERN 31 — THE AC GENERATOR (FULL LONG ANSWER)                 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Describe the construction and working of an AC generator.
            Derive the expression for the EMF induced."
  METHOD    1. PRINCIPLE - electromagnetic induction; mechanical to
               electrical energy.                                [1]
            2. CONSTRUCTION - armature, field magnet, SLIP RINGS,
               brushes.                                          [2]
            3. LABELLED DIAGRAM.                                 [2]
            4. WORKING - Fleming's right-hand rule; the current
               reverses every half rotation, so it is AC.        [1]
            5. THEORY -  phi = N B A cos( omega t )
                         e   = N B A omega sin( omega t )
                         e0  = N B A omega                       [2]
            6. GRAPH of e against t.
  TRAP      Writing "commutator". That is a DC generator.
            An AC generator has SLIP RINGS.
            Also: you must differentiate cos( omega t ) properly and
            keep the omega that comes out in front.
```

```
  PATTERN 32 — AC GENERATOR NUMERICAL                            2 / 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A coil of N turns and area A rotates at f rev/s (or rpm)
            in a field B. Find the peak EMF."
  METHOD    1. omega = 2 pi f      (or 2 pi x rpm / 60)
            2. e0 = N B A omega
            3. e = e0 sin( omega t ) if the instantaneous value is
               asked.
  TRAP      Using rpm directly as if it were rad/s. Divide by 60 first.
```

```
  PATTERN 33 — "WHEN IS THE EMF MAXIMUM / ZERO?"                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "In an AC generator, when is the induced EMF maximum?"
  METHOD    EMF is MAXIMUM when the flux is ZERO, i.e. the plane of the
            coil is PARALLEL to the field.
            EMF is ZERO when the flux is MAXIMUM, i.e. the plane is
            PERPENDICULAR to the field.
            They are 90 degrees out of phase.
  TRAP      Answering "when the flux is maximum". The EMF follows the
            RATE of change, not the size, of the flux.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right-hand column and try.

| Question stem | Pattern |
|---|---|
| "Define one weber." | 1 |
| "The field makes 30 degrees with the plane of the coil ..." | 2 |
| "State Faraday's laws." | 3 |
| "phi = 4 t^2 + 2 t . Find e at t = 1 s." | 4 |
| "The flux changes from 0.06 to 0.02 Wb in 0.5 s ..." | 5 |
| "How much charge flows through the coil?" | 6 |
| "State Lenz's law." | 7 |
| "Which way does the induced current flow?" | 8 |
| "Show that Lenz's law follows from conservation of energy." | 9 |
| "Describe the experiments of Faraday and Henry." | 10 |
| "Derive the EMF induced in a rod moving in a field." | 11 |
| "Derive e = B l v from the force on the free electrons." | 12 |
| "Find the force needed to keep the rod moving uniformly." | 13 |
| "A rod rotates about one end at 5 rev/s ..." | 14 |
| "The coil is turned through 180 degrees in 0.2 s ..." | 15 |
| "What are eddy currents?" | 16 |
| "How are eddy currents minimised? Give their uses." | 17 |
| "Why is the core of a transformer laminated?" | 18 |
| "Define self inductance / one henry." | 19 |
| "Obtain the self inductance of a long solenoid." | 20 |
| "The turns are doubled. What happens to L?" | 21 |
| "The current changes from 1 A to 5 A in 0.2 s in a 2 H coil ..." | 22 |
| "Derive the energy stored in an inductor." | 23 |
| "Find the energy density of a 0.2 T field." | 24 |
| "Define mutual inductance." | 25 |
| "Obtain M for two coaxial solenoids. Show M12 = M21." | 26 |
| "L1 = 4 H, L2 = 9 H, k = 0.5. Find M." | 27 |
| "The primary current changes at 10 A/s ..." | 28 |
| "Two inductors in parallel ..." | 29 |
| "Distinguish self induction from mutual induction." | 30 |
| "Describe the construction and working of an AC generator." | 31 |
| "A coil rotates at 120 rpm. Find the peak EMF." | 32 |
| "When is the EMF of a generator maximum?" | 33 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +----------------------------------------------------------------+
  |  STAGE 1  -  THE 2-MARK BANK   (about 1.5 hours of learning)   |
  +----------------------------------------------------------------+

     Learn patterns 1, 2, 3, 6, 7, 16, 18, 19, 25, 27, 33.
     These are pure recall and one-line formulas.

     Expected return:  2 to 4 marks in Section A, every time.


  +----------------------------------------------------------------+
  |  STAGE 2  -  THE 4-MARK BANK   (about 3 hours of learning)     |
  +----------------------------------------------------------------+

     Learn, in this order, and WRITE EACH ONE OUT ONCE BY HAND:

        Pattern 9   Lenz's law + conservation of energy   <- do first
        Pattern 20  Self inductance of a solenoid
        Pattern 11  Motional EMF from the flux rule
        Pattern 17  Eddy currents - harm, cure, uses
        Pattern 23  Energy stored in an inductor
        Pattern 26  Mutual inductance of coaxial solenoids

     Any Section B question from this chapter will be one of these six.

     Expected return:  4 marks in Section B, every time.


  +----------------------------------------------------------------+
  |  STAGE 3  -  THE 8-MARK ANSWER   (about 1 hour)                |
  +----------------------------------------------------------------+

     Pattern 31, the AC GENERATOR. Practise until you can produce,
     from memory:
        the labelled diagram , the four parts , the working ,
        the derivation , the sine graph.

     Expected return:  8 marks whenever it appears in Section C.


  +----------------------------------------------------------------+
  |  TOTAL REALISTIC HAUL                                          |
  |                                                                |
  |     Stage 1 only          ->   2 to 4 marks                    |
  |     Stages 1 + 2          ->   6 to 8 marks                    |
  |     Stages 1 + 2 + 3      ->  up to 16 marks                   |
  |                                                                |
  |  Remember the pass mark is 21 out of 60. Stages 1 and 2 of this |
  |  ONE chapter give you more than a third of the way there.      |
  +----------------------------------------------------------------+
```

```
  THE FIVE LINES THAT MUST BE IN YOUR HEAD ON EXAM MORNING

     1.  phi  =  B A cos(theta)        (theta from the NORMAL)
     2.  e    =  - N d(phi)/dt         (minus = Lenz = energy)
     3.  e    =  B l v                 (sliding rod)
     4.  L    =  mu0 n^2 A l           (solenoid) , U = (1/2) L I^2
     5.  e    =  N B A omega sin(omega t)   (AC generator)
```
