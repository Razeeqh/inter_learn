# Atoms — Every Question Pattern That Can Be Asked

**Physics 2nd Year · Chapter 13**

A "pattern" is a question SHAPE. The numbers change every year. The shape does
not. For each one, learn:

- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — WHY THOMSON'S MODEL FAILED                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why was Thomson's model rejected?" /
            "What is the drawback of the plum pudding model?"
  METHOD    1. State the model: positive charge spread UNIFORMLY through a
               sphere of radius 10^-10 m, electrons embedded in it.
            2. Consequence: the internal field is WEAK.
            3. So an alpha particle could only be deflected by a FRACTION
               of a degree.
            4. But large-angle scattering (up to 180 deg) was observed.
            5. Therefore the model is wrong.
  TRAP      Writing only "because of the scattering experiment". You must
            give the REASON (a spread-out charge gives too weak a field).
```

```
  PATTERN 2 — DESCRIBE THE ALPHA SCATTERING EXPERIMENT            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Describe the Geiger-Marsden experiment" /
            "Explain Rutherford's alpha scattering experiment."
  METHOD    1. DRAW the apparatus and label: 214Bi source in a lead block,
               lead collimator, thin gold foil (2.1 x 10^-7 m), ZnS screen,
               rotating microscope, vacuum chamber.
            2. State the THREE observations.
            3. State N(theta) ~ 1 / sin^4(theta/2).
  TRAP      Drawing the apparatus but forgetting the observations, or the
            other way round. The diagram alone is not the full answer.
  BONUS     Mention the vacuum and why gold was chosen (malleable, high Z).
```

```
  PATTERN 3 — OBSERVATION -> CONCLUSION TABLE                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What conclusions did Rutherford draw?" /
            "State the observations and the inferences."
  METHOD    Write it as a TWO-COLUMN table. One conclusion per observation:

              most pass through      ->  atom is mostly EMPTY SPACE
              a few bend > 1 deg     ->  positive charge is CONCENTRATED
              1 in 8000 comes back   ->  that region holds nearly ALL the
                                          MASS and is extremely TINY
  TRAP      Merging all three into one vague sentence. The examiner is
            looking for THREE separate pairings.
```

```
  PATTERN 4 — IMPACT PARAMETER: DEFINE OR CALCULATE               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define impact parameter" / "Find b for a deflection of 90 deg"
  METHOD    1. Definition: the perpendicular distance of the INITIAL line
               of motion of the alpha from the CENTRE of the nucleus.
            2. Formula:   b = Z e^2 cot(theta/2) / (4 pi eps0 K)
            3. For a numerical: convert MeV -> J, get cot(theta/2), divide.
            4. State the relation: b large -> theta small; b = 0 ->
               theta = 180 deg.
  TRAP      Using theta instead of theta/2 inside the cot.
            cot(90/2) = cot 45 = 1, NOT cot 90 = 0.
```

```
  PATTERN 5 — DISTANCE OF CLOSEST APPROACH: DERIVE                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the distance of closest approach" /
            "Show that r0 = 2Ze^2 / (4 pi eps0 K)"
  METHOD    1. FAR AWAY:  KE = (1/2) m v^2 = K , PE = 0
            2. AT r0:     KE = 0 ,
                          PE = (1/4 pi eps0) x (2e)(Ze) / r0
            3. Energy conservation: initial KE = final PE.
            4. Rearrange:  r0 = 2 Z e^2 / (4 pi eps0 K)
            5. Add the physical meaning: r0 is an UPPER LIMIT on the
               nuclear size.
  TRAP      Forgetting that the alpha charge is +2e, so the numerator has
            a 2. For a PROTON that 2 disappears.
```

```
  PATTERN 6 — DISTANCE OF CLOSEST APPROACH: NUMERICAL             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "An alpha particle of X MeV is fired at a nucleus of Z = Y.
            Find the distance of closest approach."
  METHOD    1. K (in J) = X x 1.6 x 10^-13
            2. r0 = 9e9 x 2 x Z x (1.6e-19)^2 / K
            3. Note that 9e9 x 2 x (1.6e-19)^2 = 4.608 x 10^-28, so

                                4.608 x 10^-28  x  Z
                     r0   =   --------------------------
                                       K (in J)

            4. Answer will be of the order 10^-14 m. Sanity-check that.
  TRAP      Leaving the energy in MeV. Always convert: 1 MeV = 1.6e-13 J.
  SPEED     r0 x K = constant for the same target, so rescale rather than
            recompute when only the energy changes.
```

```
  PATTERN 7 — DRAWBACKS OF RUTHERFORD'S MODEL                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the limitations / drawbacks of Rutherford's model" /
            "Why is the classical atom unstable?"
  METHOD    TWO drawbacks, two marks each. Write both with the reasoning:
            1. STABILITY - a circling electron is accelerated; an
               accelerated charge radiates (Maxwell); losing energy the
               orbit shrinks; it spirals in within about 10^-8 s.
            2. SPECTRUM - as r changes continuously so does the frequency
               of revolution, so the emitted light would form a CONTINUOUS
               spectrum, whereas a sharp LINE spectrum is observed.
  TRAP      Writing only the spiral. Half the marks are in the spectrum.
  BONUS     Third point: it says nothing about electron arrangement, so it
            cannot explain the periodic table or chemical bonding.
```

```
  PATTERN 8 — STATE BOHR'S POSTULATES                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Bohr's postulates" / "Write Bohr's quantisation
            condition."
  METHOD    All THREE, with the formulae:
            1. Stationary orbits, no radiation.
            2. m v r = n h / (2 pi)
            3. h nu = E2 - E1
  TRAP      Writing the postulates in words but leaving out the two
            formulae. The formulae carry the marks.
```

```
  PATTERN 9 — DERIVE THE RADIUS OF THE nth ORBIT                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the radius of the nth Bohr orbit" /
            "Show that r ~ n^2."
  METHOD    1. Coulomb force = centripetal force:
                 (1/4 pi eps0)(Z e^2 / r^2) = m v^2 / r
                 => m v^2 = Z e^2 / (4 pi eps0 r)            ...(1)
            2. Postulate 2:  v = n h / (2 pi m r)            ...(2)
            3. Substitute (2) into (1), simplify.
            4. r_n = eps0 h^2 n^2 / (pi m e^2 Z)
            5. Numerical: r_n = 0.529 n^2 / Z angstrom.
            6. Conclude r ~ n^2.
  TRAP      Cancelling r wrongly in step 3. Write out the algebra fully.
```

```
  PATTERN 10 — DERIVE THE VELOCITY IN THE nth ORBIT               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the velocity of the electron in the nth orbit."
  METHOD    1. From postulate 2: v = n h / (2 pi m r_n)
            2. Substitute r_n from Pattern 9.
            3. v_n = Z e^2 / (2 eps0 n h) = 2.18e6 x Z/n m/s
            4. Note v ~ Z/n , and v(H, n=1) = c / 137.
  TRAP      Getting the n dependence upside down. Velocity DECREASES in
            outer orbits.
```

```
  PATTERN 11 — DERIVE THE ENERGY OF THE nth ORBIT                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the total energy of the electron in
            the nth orbit" / "Show that E = -13.6/n^2 eV."
  METHOD    1. K = (1/2) m v^2 = Z e^2 / (8 pi eps0 r)
            2. U = - Z e^2 / (4 pi eps0 r)
            3. E = K + U = - Z e^2 / (8 pi eps0 r)
            4. Substitute r = r_n.
            5. E_n = - m Z^2 e^4 / (8 eps0^2 n^2 h^2) = -13.6 Z^2/n^2 eV
            6. Explain the NEGATIVE sign (bound electron).
  TRAP      Forgetting the minus in U, which makes E come out positive.
            If your final answer is positive, you dropped a sign.
```

```
  PATTERN 12 — WHY IS THE ENERGY NEGATIVE?                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is the total energy of the electron negative?"
  METHOD    1. Zero of energy = free electron at rest at infinity.
            2. Inside the atom the electron is BOUND; work must be done
               to remove it.
            3. Energy below the free level = negative.
            4. |E_n| is exactly the energy needed to free it.
  TRAP      Answering "because the electron is negative". Wrong reason,
            zero marks.
```

```
  PATTERN 13 — RADIUS / ENERGY NUMERICAL                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the radius / energy of the nth orbit of H or of an ion."
  METHOD    Just substitute:
                 r_n = 0.529 n^2 / Z  angstrom
                 E_n = -13.6 Z^2 / n^2  eV
  TRAP      "Second excited state" means n = 3, NOT n = 2.
            kth excited state -> n = k + 1.
  CHECK     Energy must come out NEGATIVE and smaller in magnitude than
            13.6 Z^2 eV.
```

```
  PATTERN 14 — REVERSE NUMERICAL: FIND n                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The energy of an electron in H is -0.85 eV. Find n / the
            radius / the orbit."
  METHOD    1. Set -13.6/n^2 = given value.
            2. n^2 = 13.6 / |E| , take the square root.
            3. Then answer whatever else was asked using that n.
  TRAP      Sign slips. Compare MAGNITUDES: n^2 = 13.6/0.85 = 16, n = 4.
```

```
  PATTERN 15 — KINETIC AND POTENTIAL ENERGY IN AN ORBIT           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the KE and PE of the electron in the nth orbit" /
            "If E = -3.4 eV find the kinetic energy."
  METHOD    Use the three fixed relations:
                 K  =  -E          U  =  2E          U  =  -2K
  TRAP      Signs. K is always POSITIVE, U and E are always NEGATIVE.
  CHECK     K + U must equal E. Do that check every time.
```

```
  PATTERN 16 — IONISATION / EXCITATION ENERGY                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the ionisation energy / the first excitation potential."
  METHOD    Ionisation energy from level n = 0 - E_n = 13.6 Z^2/n^2 eV
            Excitation energy (ground -> n) = E_n - E1
            Potential = the same number expressed in VOLTS.
  TRAP      Assuming ionisation is always 13.6 eV. If the question says
            "from the first excited state" the answer is 3.4 eV.
  NUMBERS   H: 1st excitation 10.2 eV, 2nd 12.09 eV, 3rd 12.75 eV,
            ionisation 13.6 eV.
```

```
  PATTERN 17 — WAVELENGTH OF A GIVEN TRANSITION                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the wavelength of the photon emitted when the electron
            jumps from n = a to n = b."
  METHOD    ROUTE 1 (fast):
                 Delta E = E(a) - E(b)  in eV
                 lambda (A) = 12400 / Delta E
            ROUTE 2 (Rydberg):
                 1/lambda = R Z^2 (1/n1^2 - 1/n2^2)
  TRAP      Putting the LOWER level as n2. In the Rydberg formula
            n1 is the LOWER (landing) level and n2 the UPPER one, so that
            1/lambda comes out POSITIVE.
  CHECK     Visible light is 4000 to 7000 A. If you get 65 A or 65000 A
            for a Balmer line, you slipped a power of ten.
```

```
  PATTERN 18 — IDENTIFY THE SERIES / THE REGION                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "To which series does the line of wavelength X belong?" /
            "Name the series lying in the visible region."
  METHOD    1. Find n1 (the landing level) from the transition.
            2. n1 = 1 Lyman UV, 2 Balmer VISIBLE, 3 Paschen IR,
               4 Brackett IR, 5 Pfund far IR.
            3. Memory: "LAZY BOYS PLAY BASKET BALL".
  TRAP      Confusing n1 with n2. The SERIES is named by where the
            electron LANDS, not where it starts.
```

```
  PATTERN 19 — LONGEST AND SHORTEST WAVELENGTH OF A SERIES        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the longest and shortest wavelength of the Lyman /
            Balmer series."
  METHOD    LONGEST  : n2 = n1 + 1 (the FIRST line, smallest energy gap)
            SHORTEST : n2 = infinity (the SERIES LIMIT)
                        lambda(min) = n1^2 / R
  TRAP      Swapping them. Small energy gap -> LONG wavelength.
            Big energy gap -> SHORT wavelength.
  NUMBERS   Lyman  1216 A to 912 A ;  Balmer 6563 A to 3646 A
```

```
  PATTERN 20 — RATIO OF WAVELENGTHS                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The longest wavelength of Balmer is L. Find the longest
            wavelength of Lyman."
  METHOD    1. Write 1/lambda = R(1/n1^2 - 1/n2^2) for BOTH lines.
            2. R cancels in the ratio - never substitute its value.
            3. Take the ratio of the two brackets, then invert.
  EXAMPLE   Lyman longest  = 4/(3R) ; Balmer longest = 36/(5R)
            ratio = (4/3)/(36/5) = 5/27 , so lambda(Lyman) = 5L/27.
  TRAP      Forgetting to INVERT: the bracket is 1/lambda, not lambda.
```

```
  PATTERN 21 — NUMBER OF SPECTRAL LINES                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many spectral lines are emitted when hydrogen atoms are
            excited to n = 5?"
  METHOD    From level n down to the ground state:   N = n(n-1)/2
            From n1 up to n2:   N = (n2-n1)(n2-n1+1)/2
            Lines of ONE named series ending on n1: count = n - n1
  TRAP      1. "A single atom" can emit at most (n - 1) photons on the way
               down, not n(n-1)/2. The formula is for a SAMPLE.
            2. If the question asks only for BALMER lines, do not use
               n(n-1)/2.
  NUMBERS   n = 2 -> 1 ; n = 3 -> 3 ; n = 4 -> 6 ; n = 5 -> 10 ; n = 6 -> 15
```

```
  PATTERN 22 — DERIVE THE RYDBERG CONSTANT FROM BOHR'S THEORY     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the hydrogen spectrum using Bohr's theory" /
            "Obtain an expression for the Rydberg constant."
  METHOD    1. h nu = E(n2) - E(n1)
            2. Substitute E_n = - m e^4 / (8 eps0^2 n^2 h^2)
            3. Put nu = c / lambda
            4. Compare with 1/lambda = R (1/n1^2 - 1/n2^2)
            5. R = m e^4 / (8 eps0^2 h^3 c) = 1.097 x 10^7 m^-1
            6. State that the calculated value MATCHES the measured one -
               this is the great success of the model.
  TRAP      Stopping at step 4 without writing the expression for R.
```

```
  PATTERN 23 — DRAW THE ENERGY LEVEL DIAGRAM                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw the energy level diagram of hydrogen and mark the
            spectral series."
  METHOD    1. Horizontal lines for n = 1 to 5 plus n = infinity.
            2. Label energies: -13.6, -3.40, -1.51, -0.85, -0.54, 0.
            3. Levels get CLOSER as n increases.
            4. Downward arrows onto n=1 (Lyman, UV), onto n=2 (Balmer,
               visible), onto n=3 (Paschen, IR), n=4 (Brackett),
               n=5 (Pfund).
  TRAP      Drawing equally spaced levels. The spacing must shrink.
            Also: emission arrows point DOWN, absorption arrows point UP.
```

```
  PATTERN 24 — HYDROGEN-LIKE ATOMS (He+, Li2+, Be3+)              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the ionisation energy of He+" / "Radius of the 2nd orbit
            of Li2+" / "Extend Bohr's theory to hydrogen-like atoms."
  METHOD    Put Z back into all three results:
                 r_n = 0.529 n^2 / Z A
                 v_n = 2.18e6 Z/n m/s
                 E_n = -13.6 Z^2 / n^2 eV
                 1/lambda = R Z^2 (1/n1^2 - 1/n2^2)
  TRAP      Using Z instead of Z^2 in the energy, or Z^2 instead of Z in
            the radius. Energy gets the SQUARE. Radius gets the FIRST power.
  CHECK     He+ ionisation energy = 54.4 eV. Li2+ = 122.4 eV.
```

```
  PATTERN 25 — DE BROGLIE JUSTIFICATION OF POSTULATE 2            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain Bohr's second postulate using de Broglie's
            hypothesis" / "Show that 2 pi r = n lambda leads to
            m v r = n h / 2 pi."
  METHOD    1. lambda = h / (m v)
            2. The electron wave must join up with itself after one
               revolution, otherwise it interferes destructively.
            3. Standing wave condition: 2 pi r = n lambda
            4. Substitute: 2 pi r = n h / (m v)
            5. Rearrange: m v r = n h / (2 pi)   -- Bohr's postulate.
            6. DRAW the allowed (whole number of waves) and forbidden
               (mismatch) orbits.
  TRAP      Forgetting the diagram; it usually carries a mark.
            Also: the nth orbit holds exactly n wavelengths, not n^2.
```

```
  PATTERN 26 — LIMITATIONS OF BOHR'S MODEL                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the limitations / drawbacks of Bohr's model."
  METHOD    List at least four (six for a 4-mark question):
            1. Only hydrogen and one-electron ions.
            2. Cannot explain the relative INTENSITIES of the lines.
            3. Cannot explain FINE STRUCTURE.
            4. Cannot explain the ZEEMAN and STARK effects.
            5. Cannot explain molecules / chemical bonding.
            6. Violates HEISENBERG'S UNCERTAINTY PRINCIPLE.
            7. An arbitrary mix of classical and quantum ideas.
  TRAP      Writing "it cannot explain the stability of the atom". That is
            exactly what Bohr DID explain. Instant lost mark.
```

```
  PATTERN 27 — SCALING / PROPORTIONALITY (mostly EAPCET, JEE)     1 mark
  ------------------------------------------------------------------------
  TRIGGER   "The time period of revolution is proportional to ...?" /
            "The ratio of the radii of the 1st and 3rd orbits is ...?"
  METHOD    Never compute. Read off the exponent row:
                 r ~ n^2/Z    v ~ Z/n     E ~ Z^2/n^2   L ~ n
                 T ~ n^3/Z^2  f ~ Z^2/n^3 I ~ Z^2/n^3   a ~ Z^3/n^4
                 de Broglie lambda ~ n/Z
  TRAP      Angular momentum has NO Z dependence. It is n h / 2 pi, full
            stop. This is the single most tested trick in the chapter.
```

```
  PATTERN 28 — WHICH PHOTON CAN BE ABSORBED?                      1 or 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Which of the following photon energies can a ground-state
            hydrogen atom absorb?"
  METHOD    Allowed absorption energies from n = 1 are
                 13.6 ( 1 - 1/n^2 )  =  10.2 , 12.09 , 12.75 , 13.06 ...
            Anything else passes straight through the atom.
            Any energy ABOVE 13.6 eV ionises it (the excess becomes the
            free electron's kinetic energy).
  TRAP      Assuming any photon can be absorbed. Only exact matches work.
```

```
  PATTERN 29 — TIME PERIOD, FREQUENCY, ORBITAL CURRENT            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the time period of revolution / the equivalent current
            of the electron in the ground state."
  METHOD    1. T = 2 pi r / v
            2. f = 1 / T
            3. I = e / T
  NUMBERS   H, n = 1:  T = 1.52 x 10^-16 s , f = 6.58 x 10^15 Hz ,
                       I = 1.05 mA
  TRAP      Using the diameter instead of the circumference. It is
            2 pi r, not 2 r.
```

```
  PATTERN 30 — THE FRANCK-HERTZ EXPERIMENT                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What does the Franck-Hertz experiment prove?"
  METHOD    1. Electrons accelerated through mercury vapour.
            2. The anode current dips at 4.9 V, 9.8 V, 14.7 V ...
            3. Below 4.9 eV collisions are ELASTIC; at 4.9 eV they become
               INELASTIC because the mercury atom is excited.
            4. Conclusion: atomic energy levels are DISCRETE, confirming
               Bohr's stationary states.
            5. The excited mercury then emits 2537 A UV light
               (check: 12400 / 4.9 = 2530 A).
  TRAP      Confusing it with the photoelectric effect. Franck-Hertz uses
            ELECTRON collisions, not light.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right-hand column and try.

| Question stem | Pattern |
|---|---|
| "Why did the plum pudding model fail?" | 1 |
| "Draw and describe the Geiger-Marsden apparatus." | 2 |
| "What did Rutherford conclude from the scattering?" | 3 |
| "Find b for a scattering angle of 60 degrees." | 4 |
| "Show that r0 = 2Ze^2/(4 pi eps0 K)." | 5 |
| "A 6 MeV alpha strikes a silver nucleus. Find r0." | 6 |
| "Why is the classical atom unstable?" | 7 |
| "Write the quantisation condition of angular momentum." | 8 |
| "Derive r_n for the hydrogen atom." | 9 |
| "Find the speed of the electron in the 3rd orbit." | 10 |
| "Show that E_n = -13.6/n^2 eV." | 11 |
| "Why is the total energy negative?" | 12 |
| "Find the radius of the 4th orbit of He+." | 13 |
| "The energy is -1.51 eV. Which orbit is it?" | 14 |
| "If E = -3.4 eV, find the potential energy." | 15 |
| "What is the first excitation potential of hydrogen?" | 16 |
| "Find the wavelength emitted in the jump n = 4 to n = 2." | 17 |
| "Which series lies in the visible region?" | 18 |
| "Find the shortest wavelength of the Paschen series." | 19 |
| "If the Balmer longest is L, find the Lyman longest." | 20 |
| "How many lines appear if hydrogen is excited to n = 5?" | 21 |
| "Obtain an expression for the Rydberg constant." | 22 |
| "Draw the energy level diagram with the series marked." | 23 |
| "Find the ionisation energy of Li2+." | 24 |
| "Explain the second postulate using matter waves." | 25 |
| "State the limitations of Bohr's model." | 26 |
| "The acceleration of the electron varies as ...?" | 27 |
| "Can a ground-state H atom absorb an 11 eV photon?" | 28 |
| "Find the equivalent current of the orbiting electron." | 29 |
| "What do the 4.9 V dips in the mercury tube prove?" | 30 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +---------------------------------------------------------------------+
  |  TIER 1 - LEARN THESE OR LEARN NOTHING     (about 3 hours)          |
  +---------------------------------------------------------------------+
  |   Patterns  5, 6, 7, 8, 13, 16, 18, 26                              |
  |                                                                     |
  |   That is:  distance of closest approach (derive + numerical),      |
  |             drawbacks of Rutherford, Bohr's 3 postulates,           |
  |             radius/energy plug-ins, ionisation & excitation,        |
  |             the 5 series table, limitations of Bohr.                |
  |                                                                     |
  |   EXPECTED RETURN:  6 to 8 marks in the board paper                 |
  |                     + almost every EAPCET question from the chapter |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |  TIER 2 - IF YOU HAVE ANOTHER 3 HOURS                               |
  +---------------------------------------------------------------------+
  |   Patterns  9, 11, 17, 19, 21, 23, 25                               |
  |                                                                     |
  |   That is:  the full derivations of r and E, transition             |
  |             wavelengths, longest/shortest in a series, the          |
  |             number of lines, the energy level diagram,              |
  |             the de Broglie explanation.                             |
  |                                                                     |
  |   EXPECTED RETURN:  takes you to 10 to 12 marks                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |  TIER 3 - POLISH                                                    |
  +---------------------------------------------------------------------+
  |   Patterns  1, 2, 3, 4, 10, 12, 14, 15, 20, 22, 24, 27, 28, 29, 30  |
  |                                                                     |
  |   Mostly one-liners and speed tricks. Read them the night before.   |
  +---------------------------------------------------------------------+
```

## The single most important habit for this chapter

```
  BEFORE you touch any numerical, write these five lines at the top of
  your rough work:

      r_n  =  0.529 n^2 / Z   angstrom
      v_n  =  2.18 x 10^6 Z / n   m/s
      E_n  =  - 13.6 Z^2 / n^2   eV
      K = -E ,   U = 2E
      lambda (A)  =  12400 / E (eV)

  Then read the question. Nine times out of ten the answer is one
  substitution away.
```
