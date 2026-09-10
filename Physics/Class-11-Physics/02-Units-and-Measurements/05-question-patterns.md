# Units and Measurements — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — LIST THE FUNDAMENTAL / SUPPLEMENTARY UNITS          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Name the fundamental quantities and their SI units."
  METHOD    Recite the 7 base units, plus the 2 supplementary units
            (radian and steradian).
  NOTE      Pure recall. NEVER lose this mark.
```

```
  PATTERN 2 — DEFINE A LARGE OR SMALL UNIT                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define light year / parsec / astronomical unit /
            angstrom / fermi / atomic mass unit."
  METHOD    Give the DEFINITION in words AND the numerical value in metres.
  TRAP      Giving only the value without the definition loses half the mark.
```

```
  PATTERN 3 — WRITE THE DIMENSIONAL FORMULA OF A QUANTITY         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the dimensional formula of X."
  METHOD    1. Recall the SIMPLEST defining equation for X.
            2. Replace each quantity in it by its dimensions.
            3. Simplify.
            4. Write the answer inside SQUARE BRACKETS.
  HELP      Lookup table at the end of 04-pyq-competitive.md.
```

```
  PATTERN 4 — QUANTITIES WITH THE SAME DIMENSIONAL FORMULA        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Name three quantities having dimensions [M L^2 T^-2]"
            or "Which pair has the same dimensions?"
  METHOD    Recall the grouping table in section 8 of 02-formulae.md.
```

```
  PATTERN 5 — IDENTIFY DIMENSIONLESS QUANTITIES                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Give examples of dimensionless quantities."
  METHOD    Any RATIO of two quantities of the same kind:
              strain, refractive index, relative density,
              coefficient of friction.
            Plus all angles and all trigonometric ratios.
```

```
  PATTERN 6 — FIND THE DIMENSIONS OF A CONSTANT INSIDE AN EQUATION  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "In ( P + a/V^2 )( V - b ) = RT , find the dimensions of a and b."
  METHOD    Only two rules are needed:
              RULE A - quantities that are ADDED must have the SAME dimensions
              RULE B - the argument of sin, cos, tan, e^x, log is DIMENSIONLESS
```

```
  PATTERN 7 — CONVERT A UNIT FROM ONE SYSTEM TO ANOTHER           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Convert 1 newton into dyne" / "Express G in CGS units."
  METHOD
                        +-      -+ a   +-      -+ b   +-      -+ c
                        |   M1   |     |   L1   |     |   T1   |
            n2  =  n1 x | ------ |  x  | ------ |  x  | ------ |
                        |   M2   |     |   L2   |     |   T2   |
                        +-      -+     +-      -+     +-      -+

            where [ M^a L^b T^c ] is the dimensional formula.
  TRAP      The ratio is  OLD UNIT / NEW UNIT , not the other way round.
```

```
  PATTERN 8 — CHECK THE CORRECTNESS OF AN EQUATION                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Check whether v^2 = u^2 + 2as is dimensionally correct."
  METHOD    1. Find the dimensions of EVERY term separately,
               including each term of a sum.
            2. If all of them match, the equation is dimensionally correct.
            3. Add the note that this does NOT guarantee physical correctness.
```

```
  PATTERN 9 — DERIVE A RELATION USING DIMENSIONS                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the time period of a simple pendulum" /
            "Assuming F depends on density, velocity and radius, derive ..."
  METHOD    A fixed 5-step recipe:
            1. Write   Q = k x A^a x B^b x C^c
            2. Substitute dimensional formulae on both sides.
            3. Equate the powers of M, L and T SEPARATELY.
            4. Solve for a, b, c.
            5. Write the final relation and state that k must come
               from experiment.
```

```
  PATTERN 10 — USES AND LIMITATIONS OF DIMENSIONAL ANALYSIS       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the uses / limitations of dimensional analysis."
  METHOD    3 USES        - conversion, checking, deriving
            6 LIMITATIONS - see question B5 in 03-pyq-ap-board.md
  NOTE      *** THE HIGHEST-FREQUENCY THEORY QUESTION IN THIS CHAPTER ***
```

```
  PATTERN 11 — TYPES OF ERRORS                                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What are the different types of errors?"
  METHOD    Systematic (instrumental / technique / personal)
            Random
            Least count
            Gross
            One line each, with an example.
```

```
  PATTERN 12 — COMPUTE ERRORS FROM A DATA SET                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   A list of repeated readings is given.
  METHOD    1. Find the mean.
            2. Find | mean - reading | for each reading.
            3. Average those to get the mean absolute error.
            4. Divide by the mean -> relative error.
            5. Multiply by 100 -> percentage error.
            6. Write the result as  a  ±  da
  TRAP      Absolute errors are ALWAYS taken as positive.
```

```
  PATTERN 13 — ERROR PROPAGATION NUMERICAL                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The percentage errors in ... are ... Find the maximum error in ..."
  METHOD    1. Write the formula.
            2. For every factor, add  (its power) x (its percentage error).
            3. Sum them. ALL SIGNS ARE PLUS.
  TRAP      A square root contributes 1/2.
            A quantity in the denominator STILL contributes a PLUS.
```

```
  PATTERN 14 — COUNT SIGNIFICANT FIGURES / ROUND OFF              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many significant figures in 0.002370?"
  METHOD    Apply the 7 counting rules.
            For rounding, use the EVEN-DIGIT rule when the dropped
            digit is exactly 5.
```

```
  PATTERN 15 — ARITHMETIC WITH SIGNIFICANT FIGURES                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Add / multiply these and give the correct number of
            significant figures."
  METHOD    Addition        ->  fewest DECIMAL PLACES
            Multiplication  ->  fewest SIGNIFICANT FIGURES
```

```
  PATTERN 16 — PARALLAX / ANGULAR DIAMETER NUMERICAL           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A star subtends a parallax of 0.5 arc-seconds ..." /
            "The angular diameter of the Sun is 1920 arc-seconds ..."
  METHOD    1. Convert arc-seconds to RADIANS   (1 arc-sec = 4.85 x 10^-6 rad)
            2. Apply   D = b / theta      or      d = D x alpha
  TRAP      Forgetting the degree-to-radian conversion. Marks lost every year.
```

```
  PATTERN 17 — ORDER OF MAGNITUDE                              objective
  ------------------------------------------------------------------------
  TRIGGER   "Find the order of magnitude of ..."
  METHOD    Write as  a x 10^b  with  1 <= a < 10.
              a  <  5   ->   order = 10^b
              a  >= 5   ->   order = 10^(b+1)
```

```
  PATTERN 18 — NEW FUNDAMENTAL UNITS                           objective
  ------------------------------------------------------------------------
  TRIGGER   "If force, velocity and time are the fundamental quantities,
            the dimensions of mass are ..."
  METHOD    Express the wanted quantity using its ORDINARY defining formula,
            then substitute the new symbols.
```

```
  PATTERN 19 — ACCURACY VS PRECISION                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between accuracy and precision."
  METHOD    Accuracy  = closeness to the TRUE value.
            Precision = resolution / repeatability.
            Give the zero-error example: precise but not accurate.
```

```
  PATTERN 20 — LEAST COUNT OF AN INSTRUMENT                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the least count of a vernier calliper / screw gauge?"
  METHOD    Vernier LC     = 1 main scale division - 1 vernier division
                           = 0.01 cm
            Screw gauge LC = pitch / number of circular scale divisions
                           = 0.001 cm
```

```
  PATTERN 21 — CONVERT INTO A BRAND-NEW SYSTEM OF UNITS        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "In a system where the unit of mass is 100 g, the unit of
            length is 10 cm and the unit of time is 1 minute, what is
            the value of 1 joule?"
            or "... unit of mass alpha kg, length beta m, time gamma s ..."
  METHOD    1. Write the dimensional formula [ M^a L^b T^c ].
            2. n2 = n1 (M1/M2)^a (L1/L2)^b (T1/T2)^c , with the OLD unit
               on top.
            3. Work out the three ratios separately before multiplying.
  SHORTCUT  With symbolic units the answer is just
                 n1 x alpha^-a x beta^-b x gamma^-c
            - the dimensional powers with their signs FLIPPED.
  TRAP      A time ratio raised to the power -2 becomes 3600, not 1/3600.
```

```
  PATTERN 22 — REPORT A RESULT AS  a ± da                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "V = 5.0 ± 0.1 V and I = 2.00 ± 0.01 A. Find the resistance."
            The question asks for a VALUE, not just a percentage.
  METHOD    1. Compute the value from the formula.
            2. Compute the relative error by adding the individual
               relative errors (times their powers).
            3. MULTIPLY the relative error back by the value to get da.
            4. Write  a ± da , rounding da to one or two digits.
  TRAP      Stopping at "2.5 %". The last mark is for the ± number.
```

```
  PATTERN 23 — READ A VERNIER OR SCREW GAUGE, WITH ZERO ERROR     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The main scale reads 2.5 mm and the 20th circular division
            coincides ..." / "With the jaws closed the 5th division shows."
  METHOD    1. LC = pitch / number of divisions   (or 1 MSD - 1 VSD).
            2. Reading = MSR + (coinciding division x LC).
            3. Corrected reading = reading - zero error.
  TRAP      A POSITIVE zero error is SUBTRACTED; a NEGATIVE one is ADDED.
            A reading of the 95th division out of 100 means -5 divisions,
            not +95.
```

```
  PATTERN 24 — WHICH EQUATION IS DIMENSIONALLY WRONG ?         2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Four formulas are listed and you must find the bad one.
  METHOD    1. Take each term of each equation SEPARATELY.
            2. Compare with the left-hand side.
            3. Stop at the first mismatch and move on.
  INSTANT   (i)   anything inside sin, cos, e^x or log must be dimensionless
  KILLS     (ii)  added or subtracted terms must match each other
            (iii) look for a missing or extra square
  TRAP      Do NOT conclude that a passing equation is "correct".
            Say "dimensionally correct", because the constant may still
            be wrong.
```

```
  PATTERN 25 — DIMENSIONS OF A CONSTANT IN AN UNFAMILIAR EQUATION 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "In P = (a - t^2)/(b x) find the dimensions of a/b."
            "In F = a sqrt(x) + b t^2 find a/b."
  METHOD    1. Use the ADDITION rule to fix the easy constant first
               (a is subtracted from t^2, so [a] = [T^2]).
            2. Rearrange the equation to isolate the other constant.
            3. Divide.
  TRAP      Never try to guess what the constant "physically is".
            Just follow the algebra.
```

```
  PATTERN 26 — ERROR ANALYSIS IN A NAMED EXPERIMENT               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "In a simple pendulum experiment ..." /
            "In a screw gauge experiment ..." /
            "In an Ohm's law experiment ..."
  METHOD    1. Write the formula the experiment uses:
                 g = 4 pi^2 l / T^2      rho = m / (pi r^2 l)
                 R = V / I               Y = 4 F L / (pi d^2 e)
            2. Convert each least count into a relative error
               ( least count / measured value ).
            3. Add, multiplying by the powers.
  EXTRA     If asked "which measurement should be improved?", name the
  MARK      term with the LARGEST contribution.
  TRAP      For N oscillations, use the TOTAL time and the TOTAL
            resolution. Do not divide either by N.
```

```
  PATTERN 27 — SIGNIFICANT FIGURES IN A REPORTED RESULT           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the area / volume / density to the correct number of
            significant figures."
  METHOD    1. Convert everything into one unit FIRST.
            2. Count the significant figures of every MEASURED input.
            3. The smallest count controls the answer.
            4. Compute with full precision, round only at the end.
  TRAP      Constants ( 2 , 4/3 , pi ) are exact and never limit the answer.
            A number like 2.01 cm has only 3 s.f. and can silently control
            a whole question.
```

```
  PATTERN 28 — DISTANCE BY THE REFLECTION METHOD              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A radar pulse returns after 7 minutes" /
            "The sonar echo is heard after 0.8 s."
  METHOD    1. Convert the time into seconds.
            2. d = ( v x t ) / 2
            3. Use v = 3 x 10^8 m/s for radar and laser,
               about 1450 m/s for sound in sea water.
  TRAP      FORGETTING TO HALVE. The pulse makes a round trip.
```

```
  PATTERN 29 — ESTIMATING A VERY SMALL DISTANCE                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A drop of oleic acid spreads into a film of area ..."
  METHOD    thickness = volume of the liquid / area of the film,
            and that thickness is roughly the size of one molecule.
  CHECK     The answer should come out around 10^-9 to 10^-10 m.
            If it does not, you have a unit slip.
```

```
  PATTERN 30 — BASE UNITS, PREFIXES AND DERIVED UNITS             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Express the newton / joule / watt / volt in base SI units."
            "What is the SI unit of ...?"  "What does nano / pico mean?"
  METHOD    Write the simplest defining equation and replace each symbol
            by its base unit:
               N = kg m s^-2      J = kg m^2 s^-2     W = kg m^2 s^-3
               Pa = kg m^-1 s^-2  C = A s             V = kg m^2 s^-3 A^-1
  NOTE      This is the same skill as writing a dimensional formula, so
            revising Pattern 3 covers this one for free.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +--------------------------------------------------------+---------+
  |  QUESTION STEM                                         | PATTERN |
  +--------------------------------------------------------+---------+
  |  "State the limitations of dimensional analysis"       |   10    |
  |  "The percentage errors in mass and speed are ..."     |   13    |
  |  "Derive T = 2 pi sqrt(l/g)"                           |    9    |
  |  "Convert 1 joule into erg"                            |    7    |
  |  "Find the dimensions of a in van der Waals equation"  |    6    |
  |  "Define parsec"                                       |    2    |
  |  "How many significant figures in 0.007 m^2 ?"         |   14    |
  |  "Name three quantities with dimensions [M L^2 T^-2]"  |    4    |
  |  "Distinguish accuracy and precision"                  |   19    |
  |  "A star subtends a parallax of 0.5 arc-seconds"       |   16    |
  +--------------------------------------------------------+---------+
```

## SELF-TEST, ROUND 2 — the harder half

```
  +--------------------------------------------------------+---------+
  |  QUESTION STEM                                         | PATTERN |
  +--------------------------------------------------------+---------+
  |  "In a system where the unit of mass is 100 g ..."     |   21    |
  |  "V = 5.0 ± 0.1 V and I = 2.00 ± 0.01 A. Find R."      |   22    |
  |  "The 20th circular division coincides ..."            |   23    |
  |  "Which of the following is dimensionally incorrect?"  |   24    |
  |  "In P = (a - t^2)/(bx), find a/b"                     |   25    |
  |  "In a pendulum experiment l = 20.0 cm ..."            |   26    |
  |  "Give the volume to the correct significant figures"  |   27    |
  |  "The sonar echo returns after 0.8 s"                  |   28    |
  |  "A drop of oleic acid spreads into a film"            |   29    |
  |  "Express the watt in base SI units"                   |   30    |
  |  "What is the order of magnitude of 8.7 x 10^4 ?"      |   17    |
  |  "The unit of length is doubled. The number is ..."    |   21    |
  +--------------------------------------------------------+---------+
```

---

# HOW THE 30 PATTERNS GROUP TOGETHER

If thirty looks frightening, look again — there are really only SIX ideas.

```
  UNITS AND DEFINITIONS ............  1 , 2 , 17 , 30
  DIMENSIONS ......................  3 , 4 , 5 , 6 , 25
  USING DIMENSIONS ................  7 , 8 , 9 , 10 , 21 , 24
  ERRORS ..........................  11 , 12 , 13 , 19 , 20 , 22 , 23 , 26
  SIGNIFICANT FIGURES .............  14 , 15 , 27
  MEASURING DISTANCES .............  16 , 18 , 28 , 29
```

Learn one pattern from each row and you can already attempt something in
every question this chapter can throw at you.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

Learn only these four things and you score about **8 out of 60** in Physics I:

```
  1.  The 7 base units.
  2.  The dimensional formulae of force, work, power and pressure.
  3.  The three error-combination rules.
  4.  The six limitations of dimensional analysis.
```

Total study time needed: about **two hours**.

If you can name the pattern, you already know the first three steps of the answer.
**That is the entire point of this file.**
