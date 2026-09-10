# Electrostatic Potential and Capacitance — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — DEFINE POTENTIAL / POTENTIAL DIFFERENCE             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define electric potential." / "Define potential difference."
            / "Define one volt."
  METHOD    Work done in bringing a UNIT POSITIVE charge from INFINITY
            to the point, slowly and without acceleration.
            Write V = W / q , unit volt = J / C , and say it is a SCALAR.
  TRAP      Writing only the formula. The words "unit positive charge"
            and "from infinity" carry the marks.
```

```
  PATTERN 2 — WORK DONE IN MOVING A CHARGE                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the work done in moving q from A to B."
  METHOD    1. Find V(A) and V(B).
            2. W = q ( V(B) - V(A) ) for moving A -> B.
  TRAP      If A and B are on the SAME equipotential surface the answer
            is ZERO, whatever the distance. Look for that word first.
```

```
  PATTERN 3 — POTENTIAL DUE TO A SINGLE POINT CHARGE           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find V at a distance r from a charge q" /
            "Derive the potential due to a point charge."
  METHOD    NUMERICAL:  V = k q / r , with k = 9 x 10^9 and r in METRES.
            DERIVATION: force k Q q0 / x^2 , dW = -F dx , integrate from
            infinity to r, divide by q0, get V = k Q / r.
  TRAP      r in centimetres. Convert first, every single time.
```

```
  PATTERN 4 — POTENTIAL DUE TO SEVERAL CHARGES                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two or more charges at the corners of a square / triangle /
            on a line, "find the potential at the centre / midpoint".
  METHOD    1. Find the distance from EACH charge to THAT POINT.
            2. Compute k q / r for each, KEEPING the sign of q.
            3. ADD the numbers. No components, no directions.
  TRAP      Treating V as a vector. Potential is a SCALAR — the single
            biggest source of lost marks in this chapter.
```

```
  PATTERN 5 — POTENTIAL DUE TO A DIPOLE                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find V at a point on the axial / equatorial line of a dipole"
            / "Derive the potential due to a short dipole."
  METHOD    General point:   V  =  k p cos theta / r^2
            Axial   (theta = 0)   ->  V = + k p / r^2
            Axial   (theta = 180) ->  V = - k p / r^2
            Equatorial (90)       ->  V = 0
  TRAP      Using 1/r^3. That is the dipole FIELD. The dipole POTENTIAL
            goes as 1/r^2.
```

```
  PATTERN 6 — EQUIPOTENTIAL SURFACES: DEFINE AND LIST          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is an equipotential surface? State its properties."
  METHOD    Definition in one sentence, then the five properties:
              1. same V at every point
              2. no work done along it
              3. E always perpendicular to it
              4. two of them never intersect
              5. close spacing means a strong field
            Add a diagram if the question is worth 4 marks.
```

```
  PATTERN 7 — DRAW EQUIPOTENTIAL SURFACES                      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw the equipotential surfaces for ..."
  METHOD    POINT CHARGE  -> concentric circles, radial field lines.
            UNIFORM FIELD -> equally spaced parallel lines across E.
            DIPOLE        -> closed curves round each charge, with the
                             equatorial plane as the V = 0 surface.
  TRAP      Field lines and equipotentials must cross at 90 degrees in
            your drawing. Label which is which.
```

```
  PATTERN 8 — WHY IS E PERPENDICULAR TO AN EQUIPOTENTIAL?      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that the electric field is normal to an equipotential
            surface." / "Why can two equipotential surfaces not meet?"
  METHOD    Proof by contradiction:
            1. Assume E has a component ALONG the surface.
            2. Moving a charge along the surface would then need work.
            3. But V is constant, so the work must be zero.
            4. Contradiction, so the component must be zero.
            For intersection: a crossing point would need TWO potentials.
```

```
  PATTERN 9 — RELATION BETWEEN E AND V                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the relation between electric field and potential
            gradient."
  METHOD    Take two equipotential surfaces dr apart with potentials V
            and V + dV. Work per unit charge = -E dr = dV.
            Therefore E = - dV / dr.
            State that the minus sign means E points from high V to low V.
  TRAP      Dropping the minus sign. It is worth a mark on its own.
```

```
  PATTERN 10 — FIND E FROM A GIVEN V(x, y, z)                   objective
  ------------------------------------------------------------------------
  TRIGGER   "The potential in a region is V = 5x^2 - 3y ... find E."
  METHOD    1. Ex = -dV/dx , Ey = -dV/dy , Ez = -dV/dz
            2. Substitute the coordinates of the point.
            3. Magnitude = sqrt( Ex^2 + Ey^2 + Ez^2 )
  TRAP      Differentiating with respect to the wrong variable, and
            forgetting the overall minus sign.
```

```
  PATTERN 11 — UNIFORM FIELD NUMERICALS ( E = V / d )          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two plates 5 mm apart at 200 V ... find the field."
  METHOD    E = V / d , or V = E d.
  TRAP      mm and cm. 5 mm = 0.005 m. Convert before you calculate.
```

```
  PATTERN 12 — POTENTIAL ENERGY OF TWO CHARGES                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the potential energy of two charges r apart."
  METHOD    U = k q1 q2 / r , carrying the SIGNS of both charges.
            Like charges -> U positive. Unlike -> U negative.
            Work to separate them to infinity = -U.
  TRAP      Dropping the minus sign on a negative charge, which turns a
            bound system into an unbound one.
```

```
  PATTERN 13 — POTENTIAL ENERGY OF THREE CHARGES                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Three charges at the corners of a triangle / square ...
            find the potential energy of the system."
  METHOD    1. Count the PAIRS:  n(n-1)/2 . Three charges -> 3 pairs.
            2. Write k q_i q_j / r_ij for each pair, ONCE only.
            3. Add them with signs.
  TRAP      Writing six terms instead of three. Each pair is counted once.
            For a square, remember the DIAGONAL pairs are a sqrt(2) apart.
```

```
  PATTERN 14 — DIPOLE IN A UNIFORM FIELD: TORQUE AND ENERGY       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the potential energy of a dipole in a uniform field"
            / "Find the work done in rotating the dipole from ... to ..."
  METHOD    tau = p E sin theta
            W   = p E ( cos theta1 - cos theta2 )
            U   = - p E cos theta
            State: theta = 0 is STABLE (U = -pE),
                   theta = 180 is UNSTABLE (U = +pE).
  TRAP      Forgetting the minus sign in U = -pE cos theta, and swapping
            theta1 and theta2 in the work formula.
```

```
  PATTERN 15 — PROPERTIES OF A CONDUCTOR                       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the properties of a conductor in electrostatic
            equilibrium." / "Why is E zero inside a conductor?"
  METHOD    Five points, one line of reasoning each:
              E inside = 0 ; charge on the surface ; E outside is
              perpendicular and equals sigma / e0 ; the whole conductor
              is one equipotential ; charge density is highest at
              sharp points.
```

```
  PATTERN 16 — ELECTROSTATIC SHIELDING                         2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is electrostatic shielding? Give its applications."
  METHOD    E = 0 inside a conductor, so the cavity is protected from any
            external field. This is the Faraday cage.
            Applications: cars and aeroplanes in lightning; metal cases
            for sensitive instruments; coaxial cable braiding.
```

```
  PATTERN 17 — E AND V FOR A CHARGED SPHERE                    2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find E and V at the centre / surface / outside a charged
            hollow sphere."
  METHOD    +-----------+---------------+---------------+
            | r < R     |   E = 0       |  V = k Q / R  |
            | r = R     |   E = kQ/R^2  |  V = k Q / R  |
            | r > R     |   E = kQ/r^2  |  V = k Q / r  |
            +-----------+---------------+---------------+
  TRAP      Writing V = 0 inside because E = 0 inside. WRONG.
            V is constant inside and equals the SURFACE value.
```

```
  PATTERN 18 — POLAR VS NON-POLAR / POLARISATION               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between polar and non-polar molecules."
            "Explain polarisation of a dielectric."
  METHOD    POLAR      - centres of charge separated, permanent dipole,
                         H2O and HCl. In a field they TURN.
            NON-POLAR  - centres coincide, no permanent dipole,
                         O2, N2, CO2. In a field they STRETCH.
            Polarisation: bound charge appears on the two FACES only,
            producing a field opposing E0, so E = E0 / kappa.
```

```
  PATTERN 19 — DIELECTRIC CONSTANT AND DIELECTRIC STRENGTH        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define dielectric constant / dielectric strength."
  METHOD    kappa = e / e0 = E0 / E , dimensionless, always > 1.
            Dielectric strength = the maximum field before breakdown,
            unit V m^-1 , about 3 x 10^6 V m^-1 for air.
  TRAP      Giving kappa a unit. It has none.
```

```
  PATTERN 20 — DEFINE CAPACITANCE / FACTORS AFFECTING IT          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define capacitance and the farad." / "On what factors does
            the capacitance of a parallel plate capacitor depend?"
  METHOD    C = Q / V , unit farad = C / V , dimensions [M^-1 L^-2 T^4 A^2].
            Factors: plate AREA, plate SEPARATION, the MEDIUM, and the
            shape of the conductors.
  TRAP      Saying that C depends on Q or V. It does NOT.
```

```
  PATTERN 21 — DERIVE C = e0 A / d           *** 8 marks, every year ***
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the capacitance of a parallel plate
            capacitor."
  METHOD    1. Draw and label the two plates, A, d, +Q and -Q.
            2. sigma = Q / A.
            3. One sheet gives E = sigma / (2 e0).
            4. Between the plates the two fields ADD: E = sigma / e0.
               Outside they cancel: E = 0.
            5. V = E d = Q d / ( e0 A ).
            6. C = Q / V = e0 A / d.
            7. Conclude: C depends only on geometry and the medium.
  TRAP      Skipping the labelled diagram (a whole mark), and skipping
            step 4, which is where the derivation actually happens.
```

```
  PATTERN 22 — DIELECTRIC SLAB IN THE GAP                      4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "A slab of thickness t and dielectric constant kappa is
            inserted between the plates ..."
  METHOD    V = E0 ( d - t ) + ( E0 / kappa ) t  , then C = Q / V :

                              e0 A
                 C  =  ---------------------------
                        ( d - t )  +  t / kappa

            Check it with t = 0 , t = d and kappa = infinity.
  TRAP      Using kappa e0 A / d when the slab only PARTLY fills the gap.
            Read the thickness carefully.
```

```
  PATTERN 23 — BATTERY CONNECTED OR DISCONNECTED               4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "... the battery remains connected" or "... the battery is
            then removed, and a dielectric is inserted."
  METHOD    Underline the phrase first, then use:

            BATTERY ON  ( V fixed ):  C x kappa , Q x kappa ,
                                      E same , U x kappa
            BATTERY OFF ( Q fixed ):  C x kappa , V / kappa ,
                                      E / kappa , U / kappa
  TRAP      Not reading which case it is. Every single answer changes.
```

```
  PATTERN 24 — SERIES COMBINATION (DERIVE OR CALCULATE)        4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the equivalent capacitance in series" /
            "Find the equivalent capacitance of 2, 3 and 6 uF in series."
  METHOD    DERIVATION: same Q on each, V = V1 + V2 + V3, substitute
            Q/C = Q/C1 + Q/C2 + Q/C3, cancel Q.
            NUMERICAL: 1/C = sum of 1/Ci , then TURN IT UPSIDE DOWN.
  TRAP      Forgetting to invert 1/C at the end. Sanity check: the answer
            must be smaller than the smallest capacitor.
```

```
  PATTERN 25 — PARALLEL COMBINATION (DERIVE OR CALCULATE)      4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the equivalent capacitance in parallel" /
            a circuit with all capacitors across the same two points.
  METHOD    DERIVATION: same V across each, Q = Q1 + Q2 + Q3,
            substitute CV = C1V + C2V + C3V, cancel V.
            NUMERICAL: just add.
  TRAP      Sanity check: the answer must be bigger than the biggest one.
```

```
  PATTERN 26 — CHARGE AND VOLTAGE SHARING IN A NETWORK            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the charge on and the voltage across each capacitor."
  METHOD    1. Reduce the network to one equivalent capacitance.
            2. Find the total charge Q = C V.
            3. SERIES   -> the same Q on each, then V_i = Q / C_i.
               PARALLEL -> the same V on each, then Q_i = C_i V.
            4. Check that the voltages add back up to the supply voltage.
  TRAP      Mixing up which quantity is common. Series = same CHARGE,
            parallel = same VOLTAGE.
```

```
  PATTERN 27 — ENERGY STORED IN A CAPACITOR                    4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the energy stored in a capacitor" / "Find the energy
            stored in a 10 uF capacitor charged to 100 V."
  METHOD    DERIVATION: dW = (q/C) dq , integrate 0 to Q, get Q^2 / 2C.
            Then give all three forms.
            NUMERICAL: choose the form that matches the data —
              V known -> (1/2) C V^2
              Q known -> Q^2 / (2C)
              both    -> (1/2) Q V
  TRAP      Forgetting the factor of one half. Also remember that the
            battery supplies QV, so half is lost as heat.
```

```
  PATTERN 28 — ENERGY DENSITY                                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define energy density" / "Find the energy per unit volume in
            a field of ..."
  METHOD    u = (1/2) e0 E^2 , unit J m^-3.
            Derive it from U / ( A d ) using C = e0A/d and V = Ed.
            With a dielectric, u = (1/2) kappa e0 E^2.
  TRAP      Squaring E but forgetting to square the power of ten.
```

```
  PATTERN 29 — TWO CAPACITORS JOINED: COMMON V AND ENERGY LOSS    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A capacitor charged to V1 is connected to another charged to
            V2. Find the common potential and the energy lost."
  METHOD    1. V(common) = ( C1V1 + C2V2 ) / ( C1 + C2 )   [charge is
               conserved]
            2. Loss = C1 C2 ( V1 - V2 )^2 / [ 2 ( C1 + C2 ) ]
            3. Say the lost energy appears as HEAT in the wires.
  TRAP      The loss formula has a SQUARE, so it is always positive.
            An answer of "energy gained" is always wrong.
```

```
  PATTERN 30 — VAN DE GRAAFF GENERATOR                         2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Describe the principle and working of a Van de Graaff
            generator."
  METHOD    PRINCIPLE  1. Corona discharge from sharp points.
                       2. Charge given to a hollow conductor moves to the
                          OUTER surface, so more can always be added.
            WORKING    Belt sprayed with charge at the bottom comb,
                       carried up, removed by the top comb inside the
                       sphere, moves to the outer surface, V keeps rising.
            LIMIT      The dielectric strength of the surrounding air.
            USE        Accelerating protons and ions for nuclear physics.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

| # | The question you are shown | Pattern |
|---|---|---|
| 1 | "Find the work done in moving 2 C along an equipotential surface." | 2 |
| 2 | "Derive an expression for the capacitance of a parallel plate capacitor." | 21 |
| 3 | "Four charges at the corners of a square: find V at the centre." | 4 |
| 4 | "Prove that E is normal to an equipotential surface." | 8 |
| 5 | "V = 3x^2 + 2y. Find E at (1, 2)." | 10 |
| 6 | "The battery is removed and a slab of kappa = 3 is inserted." | 23 |
| 7 | "Three charges at the corners of a triangle: find U." | 13 |
| 8 | "Find the equivalent capacitance of 2, 4 and 4 uF in series." | 24 |
| 9 | "Find the potential at an equatorial point of a dipole." | 5 |
| 10 | "Why can a car protect you from lightning?" | 16 |
| 11 | "Find the energy stored in a 5 uF capacitor at 200 V." | 27 |
| 12 | "Find E and V at the centre of a charged hollow sphere." | 17 |
| 13 | "A 2 uF at 100 V is joined to an uncharged 3 uF. Find the common V." | 29 |
| 14 | "A slab of thickness t is inserted in a gap d." | 22 |
| 15 | "Work done in rotating a dipole from 0 to 90 degrees." | 14 |
| 16 | "Distinguish between H2O and CO2 molecules in a field." | 18 |
| 17 | "Define the farad." | 20 |
| 18 | "Two plates 4 mm apart at 80 V. Find E." | 11 |
| 19 | "Find the energy per unit volume in a field of 10^4 V/m." | 28 |
| 20 | "Draw the equipotential surfaces of a dipole." | 7 |

```
  SCORE YOURSELF

    18 - 20   You are ready for the exam.
    12 - 17   Re-read 05-question-patterns.md once more.
     0 - 11   Go back to 01-concepts.md before doing anything else.
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +--------+------------------------------------------+---------+--------+
  | ORDER  |  WHAT TO LEARN                           | PATTERN | MARKS  |
  +--------+------------------------------------------+---------+--------+
  |   1    |  Derive C = e0 A / d , with the diagram  |   21    |   8    |
  |   2    |  Dielectric slab + battery on/off table  |  22, 23 |   4-8  |
  |   3    |  Series and parallel derivations         |  24, 25 |   4-8  |
  |   4    |  Energy stored + energy density          |  27, 28 |   4     |
  |   5    |  Equipotential surfaces + 3 diagrams     |  6, 7   |   4     |
  |   6    |  Potential due to a point charge         |   3     |   4     |
  |   7    |  Potential energy of 2 and 3 charges     |  12, 13 |   4     |
  |   8    |  Dipole in a field: torque and U         |   14    |   4     |
  |   9    |  All the 2-mark definitions              | 1,19,20 |   2-6   |
  |  10    |  Conductors + shielding + Van de Graaff  | 15,16,30|   2-4   |
  +--------+------------------------------------------+---------+--------+

  IF YOU LEARN ONLY ROWS 1 TO 4
      you can attempt one 8-mark long answer and one or two 4-mark
      questions, which is 12 to 16 marks out of 60 from a single chapter.

  IF YOU LEARN ONLY ROW 1
      you still walk in with an 8-mark answer already written in your head.
      That alone is worth more than half of Section C.

  THE THREE THINGS TO DO ON THE MORNING OF THE EXAM
      1.  Write C = e0 A / d with its full derivation, from memory, once.
      2.  Re-read the battery ON / battery OFF table.
      3.  Re-read the twelve palm formulae in 02-formulae.md.
```
