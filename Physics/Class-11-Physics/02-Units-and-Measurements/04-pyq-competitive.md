# Units and Measurements — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 for wrong   |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from this chapter:**

```
  AP / TG EAPCET  (Physics, 40 questions)  ->  2 to 3
  JEE Main        (Physics, 25 questions)  ->  1 to 2
```

**This is a HIGH-RETURN, LOW-EFFORT chapter for competitive exams.**

---

# PATTERN 1 — Find the dimensional formula

### Q1
The dimensional formula of the coefficient of viscosity is

(a) [ M L^-1 T^-1 ] &nbsp; (b) [ M L T^-1 ] &nbsp; (c) [ M L^-1 T^-2 ] &nbsp; (d) [ M L^2 T^-1 ]

**ANSWER: (a)**
```
                dv                       F              [ M L T^-2 ]
  From   F = n A --      ->      n  =  --------   =   -------------------
                dx                      A (dv/dx)      [ L^2 ] [ T^-1 ]

                                       =  [ M L^-1 T^-1 ]
```

---

### Q2
The dimensions of `(1/2) e0 E^2` (energy density of an electric field) are

(a) [ M L T^-1 ] &nbsp; (b) [ M L^-1 T^-2 ] &nbsp; (c) [ M L^2 T^-2 ] &nbsp; (d) [ M L^2 T^-1 ]

**ANSWER: (b)**
```
  This expression IS "energy per unit volume":

        [ M L^2 T^-2 ]
       ----------------   =   [ M L^-1 T^-2 ]
           [ L^3 ]
```
> **SHORTCUT:** never expand e0 and E separately.
> Recognise what the expression physically IS.

---

### Q3
The dimensions of `sqrt( 1 / (u0 e0) )` are

**ANSWER:** This equals the **speed of light c**, so the dimensions are `[ L T^-1 ]`

---

### Q4
The dimensional formula of magnetic flux is

**ANSWER:**
```
                    d(flux)
  From      e  =  - ---------      ->     [flux]  =  [e] x [T]
                       dt

  =  [ M L^2 T^-3 A^-1 ] x [ T ]  =  [ M L^2 T^-2 A^-1 ]
```

---

### Q5
`L/R` , `RC` and `sqrt(LC)` all have the dimensions of

**ANSWER: TIME , [ T ]** — these are the time constants of LR, RC and LC circuits.

---

### Q5b
The dimensional formula of thermal conductivity is

(a) [ M L T^-3 K^-1 ] &nbsp; (b) [ M L^2 T^-3 K^-1 ] &nbsp; (c) [ M L^-1 T^-3 K^-1 ] &nbsp; (d) [ M T^-3 K^-4 ]

**ANSWER: (a)**
```
                K A (delta T) t                    Q x
  From   Q  =  ----------------    ->      K  =  -------------
                       x                          A (delta T) t

           [ M L^2 T^-2 ] [ L ]
     =   -------------------------   =   [ M L T^-3 K^-1 ]
           [ L^2 ] [ K ] [ T ]
```

---

### Q5c
The dimensional formula of capacitance is

(a) [ M L^2 T^-3 A^-2 ] &nbsp; (b) [ M^-1 L^-2 T^4 A^2 ] &nbsp; (c) [ M L^2 T^-2 A^-2 ] &nbsp; (d) [ A T ]

**ANSWER: (b)**
```
            q             [ A T ]
  C  =  -------  =  ----------------------   =   [ M^-1 L^-2 T^4 A^2 ]
            V        [ M L^2 T^-3 A^-1 ]

  (subtract the indices:  T^(1-(-3)) = T^4 ,  A^(1-(-1)) = A^2 )
```

---

# PATTERN 2 — Which pair has the same dimensions?

### Q6
Which pair has the same dimensions?

(a) Torque and work &nbsp; (b) Angular momentum and work
(c) Energy and Young's modulus &nbsp; (d) Light year and wavelength

**ANSWER:** Both (a) `[ M L^2 T^-2 ]` and (d) `[ L ]` are genuine pairs.
Check the exact option list in your paper — the usual intended answer is **(a)**.

---

### Q7
Planck's constant has the same dimensions as

(a) work &nbsp; (b) power &nbsp; (c) angular momentum &nbsp; (d) linear momentum

**ANSWER: (c)** — both are `[ M L^2 T^-1 ]`

---

### Q8
Which of the following is dimensionless?

(a) Strain &nbsp; (b) Force &nbsp; (c) Velocity gradient &nbsp; (d) Momentum

**ANSWER: (a)** — strain is length divided by length.

---

### Q8b
Impulse has the same dimensions as

(a) force &nbsp; (b) linear momentum &nbsp; (c) energy &nbsp; (d) power

**ANSWER: (b)**
```
  Impulse  =  F t  =  [ M L T^-2 ][ T ]  =  [ M L T^-1 ]

  Momentum =  m v  =  [ M ][ L T^-1 ]    =  [ M L T^-1 ]

  Not a coincidence: impulse EQUALS the change in momentum.
```

---

### Q8c
Surface tension has the same dimensions as

(a) pressure &nbsp; (b) spring constant &nbsp; (c) viscosity &nbsp; (d) power

**ANSWER: (b)**
```
  Surface tension  =  F / l  =  [ M L T^-2 ]/[ L ]  =  [ M T^-2 ]

  Spring constant  =  F / x  =  [ M L T^-2 ]/[ L ]  =  [ M T^-2 ]

  Surface ENERGY per unit AREA is also [ M T^-2 ].
```

---

# PATTERN 3 — Dimensional consistency: find the unknown constant

### Q9
In the van der Waals equation

```
   +-        -+
   |     a    |
   | P + ---- |  x  ( V - b )  =  R T
   |    V^2   |
   +-        -+
```

the dimensions of `a` are

(a) [ M L^5 T^-2 ] &nbsp; (b) [ M L^-1 T^-2 ] &nbsp; (c) [ L^3 ] &nbsp; (d) [ M L^2 T^-2 ]

**ANSWER: (a)**
```
  a / V^2 is ADDED to P, so it must have the dimensions of PRESSURE.

  [a]  =  [ pressure ] x [ V^2 ]
       =  [ M L^-1 T^-2 ]  x  [ L^6 ]
       =  [ M L^5 T^-2 ]

  Similarly  b  is SUBTRACTED from V , so  [b] = [ L^3 ]
```
> **RULE:** anything ADDED to a quantity must have the SAME dimensions as it.

---

### Q10
In `y = A sin( wt - kx )` , the dimensions of `k` are

**ANSWER:**
```
  The argument of sin must be DIMENSIONLESS.

  kx dimensionless   ->   [k]  =  [ L^-1 ]
  wt dimensionless   ->   [w]  =  [ T^-1 ]
```
> **RULE:** whatever sits inside `sin`, `cos`, `tan`, `e^x` or `log`
> is ALWAYS dimensionless.

---

### Q11
The force on a sphere of radius `a` moving with velocity `v` through a liquid
of viscosity `n` is `F = 6 pi n a v`. Check it dimensionally.

**ANSWER:**
```
  RHS  =  [ M L^-1 T^-1 ]  x  [ L ]  x  [ L T^-1 ]

       =  [ M L T^-2 ]   =   LHS       CORRECT
```

---

### Q12
If force F, velocity v and time T are taken as the fundamental units, the
dimensions of mass are

(a) [ F v T^-1 ] &nbsp; (b) [ F v^-1 T ] &nbsp; (c) [ F v T ] &nbsp; (d) [ F v^-1 T^-1 ]

**ANSWER: (b)**
```
          F           F            F T
  m  =  -----  =  ---------  =  --------   =   F v^-1 T
          a         v / T           v
```
> **METHOD for all "new fundamental units" questions:**
> write the ORDINARY defining formula and substitute the new symbols.

---

### Q12b
In the wave equation `y = a sin( b t - c x )`, the ratio `b / c` has the
dimensions of

(a) length &nbsp; (b) time &nbsp; (c) velocity &nbsp; (d) acceleration

**ANSWER: (c)**
```
  b t must be dimensionless    ->    [ b ]  =  [ T^-1 ]
  c x must be dimensionless    ->    [ c ]  =  [ L^-1 ]

    b        [ T^-1 ]
   ---  =  ------------   =   [ L T^-1 ]      =  VELOCITY
    c        [ L^-1 ]
```
> **SHORTCUT:** in every wave equation, `omega / k` is the wave speed.

---

### Q12c
In `N = N0 e^( - lambda t )`, the dimensions of lambda are

(a) [ T ] &nbsp; (b) [ T^-1 ] &nbsp; (c) dimensionless &nbsp; (d) [ M T^-1 ]

**ANSWER: (b)**
```
  The exponent  ( lambda t )  must be dimensionless.

       [ lambda ] [ T ]  =  1     ->     [ lambda ]  =  [ T^-1 ]

  That is why the decay constant is measured in s^-1.
```

---

# PATTERN 4 — Error propagation numericals

### Q13
The percentage errors in a, b, c, d are 1%, 3%, 2%, 4%.
Find the maximum percentage error in

```
          a^3  b^2
   P  =  -----------
            c  d
```

**ANSWER:**
```
   3 x 1  +  2 x 3  +  1 x 2  +  1 x 4
   =  3  +  6  +  2  +  4
   =  15 %
```

---

### Q14
```
            2 k^3  l^2
   X  =  ----------------
           m  x  sqrt(n)
```
Percentage errors in k, l, m, n are 1%, 2%, 3%, 4%. Find the % error in X.

**ANSWER:**
```
   3 x 1  +  2 x 2  +  1 x 3  +  (1/2) x 4
   =  3  +  4  +  3  +  2
   =  12 %
```
> Note the `1/2` for the square root.

---

### Q15
`R = V / I` where `V = 100 ± 5 volt` and `I = 10 ± 0.2 ampere`.
The percentage error in R is

(a) 5% &nbsp; (b) 2% &nbsp; (c) 7% &nbsp; (d) 3%

**ANSWER: (c)**
```
     5        0.2
   ----- +  ------  =  0.05  +  0.02  =  0.07   =   7 %
    100       10
```

---

### Q16
In a screw gauge experiment, a wire's diameter is `d = 2.00 ± 0.01 mm`.
The percentage error in the area of cross-section is

**ANSWER:**
```
          pi d^2               dA           dd            0.01
   A  =  --------    ->       ----  =   2  ----  =  2 x  ------  =  1 %
             4                  A            d            2.00
```

---

### Q16b
The density of a cylindrical wire is found from `rho = m / (pi r^2 l)` with
`m = 0.30 ± 0.003 g` , `r = 0.50 ± 0.005 cm` , `l = 6.0 ± 0.06 cm`.
The maximum percentage error in the density is

(a) 2 % &nbsp; (b) 4 % &nbsp; (c) 6 % &nbsp; (d) 8 %

**ANSWER: (b)**
```
  d(rho)      dm         dr        dl
  ------  =  ----  +  2 ----  +   ----
   rho         m          r         l

              0.003            0.005       0.06
        =   --------  +  2 x  -------  +  ------
              0.30             0.50         6.0

        =   0.01   +   2 x 0.01   +   0.01

        =   0.01   +   0.02   +   0.01   =   0.04    =    4 %
```

---

### Q16c
In a pendulum experiment `l = 20.0 cm` is measured with a scale of least count
`0.1 cm`, and the time for 100 oscillations is `90 s` on a watch of resolution
`1 s`. The percentage error in g is closest to

(a) 0.5 % &nbsp; (b) 1.4 % &nbsp; (c) 2.7 % &nbsp; (d) 5.4 %

**ANSWER: (c)**
```
           4 pi^2 l              dg        dl          dT
   g  =  -----------    ->      ----  =   ----  +   2 ----
              T^2                 g         l           T

   dl / l  =  0.1 / 20.0   =  0.005   =  0.5 %

   dT / T  =  1 / 90       =  0.0111  =  1.11 %

   dg / g  =  0.5  +  2 x 1.11   =   0.5 + 2.22   =   2.72 %
```
> **SHORTCUT:** use the TOTAL time and its resolution directly.
> Dividing both by the number of oscillations changes nothing.

---

# PATTERN 5 — Significant figures

### Q17
How many significant figures does 0.00305 have?

**ANSWER: 3** — leading zeros never count, but the middle zero does.

---

### Q18
`2.5 x 1.25` correct to significant figures is

(a) 3.125 &nbsp; (b) 3.13 &nbsp; (c) 3.1 &nbsp; (d) 3.0

**ANSWER: (c)** — 2.5 has only 2 significant figures, so the answer has 2.

---

### Q19
Add `3.8 x 10^-6` and `4.2 x 10^-5` with due regard to significant figures.

**ANSWER:**
```
   3.8 x 10^-6  =  0.38 x 10^-5

   0.38 x 10^-5  +  4.2 x 10^-5  =  4.58 x 10^-5

   4.2 has ONE decimal place  ->  answer  =  4.6 x 10^-5
```

---

### Q19b
The mass of a body is 4.237 g and its volume is 2.51 cm^3. Its density,
to the correct number of significant figures, is

(a) 1.688 &nbsp; (b) 1.69 &nbsp; (c) 1.7 &nbsp; (d) 1.6880

**ANSWER: (b)**
```
            4.237
   rho  =  -------   =   1.68804...  g/cm^3
            2.51

   2.51 has THREE significant figures, the fewest.

   ANSWER:   1.69 g/cm^3
```

---

# PATTERN 6 — Unit conversion

### Q20
If the unit of force is 100 N, the unit of length is 10 m and the unit of time
is 100 s, then the unit of mass in this system is

**ANSWER:**
```
          F        F T^2        100  x  (100)^2        100 x 10^4
   m  =  ---  =  ---------  =  -----------------  =  --------------  =  10^5 kg
          a          L                10                   10
```

---

### Q21
`G = 6.67 x 10^-11` N m^2 / kg^2 . Its value in CGS units is

**ANSWER:**
```
  [G] = [ M^-1 L^3 T^-2 ]     so   a = -1 , b = 3 , c = -2

  n2  =  6.67 x 10^-11  x  (10^3)^-1  x  (10^2)^3  x  1

      =  6.67 x 10^-11  x  10^-3  x  10^6

      =  6.67 x 10^-8   CGS units
```

---

### Q21b
One calorie equals 4.2 J. In a new system the unit of mass is `alpha` kg, the
unit of length is `beta` m and the unit of time is `gamma` s. The magnitude of
one calorie in this new system is

**ANSWER:**
```
  Energy  ->  [ M^1 L^2 T^-2 ]

              +-      -+ 1     +-      -+ 2     +-       -+ -2
              |  1 kg  |       |  1 m   |       |   1 s   |
  n2  =  4.2  | -------|   x   | -------|   x   | --------|
              | alpha  |       | beta   |       |  gamma  |
              +-      -+       +-      -+       +-       -+

      =  4.2  x  alpha^-1  x  beta^-2  x  gamma^2
```
> **SHORTCUT:** the powers in the answer are exactly the dimensional powers,
> with the sign flipped. Energy is [M L^2 T^-2], so you get
> alpha^-1 beta^-2 gamma^+2. You can write the answer without any algebra.

---

### Q21c
If the unit of mass is halved and the unit of length is doubled, the unit of
energy becomes

(a) half &nbsp; (b) twice &nbsp; (c) four times &nbsp; (d) unchanged

**ANSWER: (b)**
```
  Energy  =  [ M L^2 T^-2 ]

  new unit  =  (1/2) x (2)^2 x 1   =   (1/2) x 4   =   2  times the old unit

  and therefore the NUMBER measuring a given energy becomes HALF.
```
> **TRAP:** read carefully whether the question asks about the UNIT or about
> the NUMBER. They always move in opposite directions.

---

# PATTERN 7 — Astronomical / order of magnitude

### Q22
A star is 8.5 parsec away. Its distance in light years is

**ANSWER:** `8.5 x 3.26 = 27.7 light years`

---

### Q23
The order of magnitude of `2.5 x 10^6` is

**ANSWER:** `10^6` — because 2.5 is less than 5.
(If it were `6.5 x 10^6`, the order would be `10^7`.)

---

### Q23b
Arrange in increasing order: 1 angstrom, 1 astronomical unit, 1 light year,
1 parsec, 1 fermi.

**ANSWER:**
```
  1 fermi   =  10^-15   m
  1 angstrom=  10^-10   m
  1 AU      =  1.496 x 10^11  m
  1 ly      =  9.46  x 10^15  m
  1 parsec  =  3.08  x 10^16  m

  fermi  <  angstrom  <  AU  <  light year  <  parsec
```

---

# PATTERN 8 — Dimensions of an UNFAMILIAR constant

These look terrifying and are actually the easiest marks in the paper, because
you only ever need two rules: things that are ADDED share dimensions, and
anything inside a function is dimensionless.

### Q24
In the relation `P = ( a - t^2 ) / ( b x )`, where P is pressure, x is
distance and t is time, the dimensions of `a / b` are

(a) [ M T^-2 ] &nbsp; (b) [ M L^3 T^-1 ] &nbsp; (c) [ L T^-3 ] &nbsp; (d) [ M L T^-2 ]

**ANSWER: (a)**
```
  STEP 1   a is SUBTRACTED from t^2 , so    [ a ]  =  [ T^2 ]

  STEP 2   Rearrange for b :

                   a               [ T^2 ]
           b  =  -------   =   ---------------------------
                  P x           [ M L^-1 T^-2 ] [ L ]

                   [ T^2 ]
              =  ------------   =   [ M^-1 T^4 ]
                  [ M T^-2 ]

  STEP 3    a        [ T^2 ]
           ---  =  --------------   =   [ M T^-2 ]
            b       [ M^-1 T^4 ]
```

---

### Q25
In `F = a sqrt(x) + b t^2`, where F is force, x is distance and t is time,
the dimensions of `a / b` are

**ANSWER:**
```
  Each term must have the dimensions of FORCE.

           [ M L T^-2 ]
  [ a ] = -------------- =  [ M L^(1/2) T^-2 ]
           [ L^(1/2) ]

           [ M L T^-2 ]
  [ b ] = -------------- =  [ M L T^-4 ]
            [ T^2 ]

    a       [ M L^(1/2) T^-2 ]
   ---  =  --------------------   =   [ L^(-1/2) T^2 ]
    b        [ M L T^-4 ]
```

---

### Q26
The dimensions of the constant `k` in Coulomb's law `F = k q1 q2 / r^2` are

**ANSWER:**
```
            F r^2         [ M L T^-2 ] [ L^2 ]
   k   =  ---------  =  -------------------------   =   [ M L^3 T^-4 A^-2 ]
            q1 q2              [ A^2 T^2 ]
```

---

### Q27
In the van der Waals equation `( P + a/V^2 )( V - b ) = R T`, the dimensions of
`a / b` are

(a) [ M L^2 T^-2 ] &nbsp; (b) [ M L^5 T^-2 ] &nbsp; (c) [ L^3 ] &nbsp; (d) [ M L^-1 T^-2 ]

**ANSWER: (a)**
```
  [ a ]  =  [ M L^5 T^-2 ]          [ b ]  =  [ L^3 ]

    a       [ M L^5 T^-2 ]
   ---  =  ----------------   =   [ M L^2 T^-2 ]      =   ENERGY
    b          [ L^3 ]
```

---

### Q28
The Planck length is defined as `sqrt( h G / c^3 )`. Show that it really is
a length.

**ANSWER:**
```
  h    =  [ M L^2 T^-1 ]
  G    =  [ M^-1 L^3 T^-2 ]
  c^3  =  [ L^3 T^-3 ]

  h G  =  [ M L^2 T^-1 ][ M^-1 L^3 T^-2 ]   =   [ L^5 T^-3 ]

   h G       [ L^5 T^-3 ]
  -----  =  --------------   =   [ L^2 ]
   c^3       [ L^3 T^-3 ]

  sqrt( L^2 )  =  [ L ]        CONFIRMED - it is a length.
```
> **SHORTCUT for every question of this shape:** write the three constants
> one under the other, add the M powers, then the L powers, then the T powers.
> Do not try to do it in your head.

---

# PATTERN 9 — Error analysis in a NAMED experiment

### Q29
A screw gauge has a pitch of 0.5 mm and 50 divisions on its circular scale.
When a wire is placed between the jaws, the main scale reads 2.5 mm and the
20th circular division coincides. The diameter of the wire is

(a) 2.20 mm &nbsp; (b) 2.50 mm &nbsp; (c) 2.70 mm &nbsp; (d) 4.50 mm

**ANSWER: (c)**
```
            0.5
  LC   =  ------   =   0.01 mm
            50

  d    =  2.5  +  ( 20 x 0.01 )   =   2.5  +  0.20   =   2.70 mm
```

---

### Q30
In the same screw gauge, when the jaws are closed the 5th circular division
coincides with the reference line. A wire then gives a main scale reading of
1 mm and a circular scale reading of 27. The CORRECT diameter is

**ANSWER:**
```
  ZERO ERROR       =  + 5 x 0.01   =   + 0.05 mm
  ZERO CORRECTION  =  - 0.05 mm

  Observed reading =  1  +  ( 27 x 0.01 )   =   1  +  0.27   =   1.27 mm

  Correct diameter =  1.27  -  0.05   =   1.22 mm
```
> **TRAP:** a POSITIVE zero error is SUBTRACTED. If the zero reading had been
> the 95th division, the error would be (95 - 100) x 0.01 = -0.05 mm and you
> would ADD 0.05 mm.

---

### Q31
A vernier has 10 divisions coinciding with 9 main scale divisions, and
1 MSD = 1 mm. The main scale reads 1.0 cm and the 4th vernier division
coincides. The reading is

(a) 1.04 cm &nbsp; (b) 1.4 cm &nbsp; (c) 1.004 cm &nbsp; (d) 1.40 cm

**ANSWER: (a)**
```
  LC  =  1 MSD / 10  =  1 mm / 10  =  0.1 mm  =  0.01 cm

  Reading  =  1.0  +  ( 4 x 0.01 )   =   1.04 cm
```

---

### Q32
The diameter of a wire measured with a screw gauge of least count 0.01 mm is
1.00 mm, and its length measured with a scale of least count 0.1 cm is 5.0 cm.
The maximum percentage error in the calculated VOLUME of the wire is

(a) 1 % &nbsp; (b) 2 % &nbsp; (c) 4 % &nbsp; (d) 6 %

**ANSWER: (c)**
```
            pi d^2 L                dV          dd        dL
   V   =   ----------      ->      ----   =  2 ----  +   ----
                4                    V           d         L

                    0.01          0.1
        =    2  x  ------   +   -------
                    1.00          5.0

        =    2 x 0.01   +   0.02    =    0.02 + 0.02   =   0.04   =   4 %
```

---

### Q33
In a pendulum experiment `l = 100.0 cm` (least count 1 mm) and the time for
100 oscillations is 100 s (resolution 0.1 s). The percentage error in g is

(a) 0.1 % &nbsp; (b) 0.3 % &nbsp; (c) 0.5 % &nbsp; (d) 1.0 %

**ANSWER: (b)**
```
   dl / l  =  0.1 cm / 100.0 cm   =   0.001   =   0.1 %

   dt / t  =  0.1 s  / 100 s      =   0.001   =   0.1 %

   dg / g  =  0.1 %  +  2 x 0.1 %   =   0.1 + 0.2   =   0.3 %
```

---

### Q34
In an Ohm's law experiment `V = 5.0 ± 0.1 V` and `I = 2.00 ± 0.01 A`.
The resistance should be reported as

**ANSWER:**
```
            5.0
   R   =  -------   =   2.5 ohm
            2.00

   dR        0.1        0.01
  ----  =  ------  +  --------   =   0.02   +   0.005   =   0.025   =   2.5 %
    R       5.0         2.00

   dR  =  0.025 x 2.5  =  0.0625  ~  0.06 ohm

   REPORT:    R  =  2.50  ±  0.06  ohm
```
> **SHORTCUT:** the answer options in these questions usually differ only in
> the LAST digit of the error. Work out the percentage first, then multiply.

---

# PATTERN 10 — Significant figures in a REPORTED result

### Q35
A box of mass 2.3 kg contains two gold pieces of mass 20.15 g and 20.17 g.
The total mass of the box with the gold, to the correct significant figures, is

(a) 2.34032 kg &nbsp; (b) 2.340 kg &nbsp; (c) 2.34 kg &nbsp; (d) 2.3 kg

**ANSWER: (d)**
```
  2.3  +  0.02015  +  0.02017   =   2.34032 kg

  2.3 has only ONE decimal place, the fewest.

  ANSWER:  2.3 kg     - the gold does not even show up.
```

---

### Q36
For the same two gold pieces, the DIFFERENCE in their masses, to the correct
significant figures, is

**ANSWER:**
```
  20.17  -  20.15   =   0.02 g

  Both numbers have TWO decimal places, so the answer keeps two.

  ANSWER:  0.02 g
```
> Note that the answer has only ONE significant figure even though both
> inputs had four. Subtraction throws precision away.

---

### Q37
The radius of a sphere is measured as 1.2 cm. Its volume, correct to
significant figures, is

(a) 7.238 cm^3 &nbsp; (b) 7.24 cm^3 &nbsp; (c) 7.2 cm^3 &nbsp; (d) 7 cm^3

**ANSWER: (c)**
```
           4
   V  =  ----- x 3.1416 x (1.2)^3   =   4.18879 x 1.728   =   7.2382 cm^3
           3

   Only 1.2 was MEASURED, and it has 2 significant figures.
   ( 4 , 3 and pi are exact. )

   ANSWER:  7.2 cm^3
```

---

### Q38
A rectangle measures 5.06 m by 2.1 m. Its area, correct to significant
figures, is

(a) 10.626 m^2 &nbsp; (b) 10.63 m^2 &nbsp; (c) 10.6 m^2 &nbsp; (d) 11 m^2

**ANSWER: (d)**
```
   5.06  x  2.1   =   10.626 m^2

   2.1 has only TWO significant figures.

   ANSWER:  11 m^2
```
> **TRAP:** the answer looks brutally rounded, and it is still correct.
> Never keep more digits than your worst measurement allows.

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  Something ADDED to a quantity    |  it has the SAME dimensions as     |
  |                                   |  that quantity                     |
  |                                   |                                    |
  |  Inside sin, cos, e^x, log        |  DIMENSIONLESS                     |
  |                                   |                                    |
  |  L/R  ,  RC  ,  sqrt(LC)          |  TIME                              |
  |                                   |                                    |
  |  1 / sqrt(u0 e0)                  |  SPEED OF LIGHT                    |
  |                                   |                                    |
  |  (1/2) e0 E^2   or   B^2 / (2 u0) |  ENERGY DENSITY [ M L^-1 T^-2 ]    |
  |                                   |                                    |
  |  Percentage error asked           |  add (power x individual %) for    |
  |                                   |  every factor                      |
  |                                   |                                    |
  |  "New fundamental units"          |  write the ordinary formula and    |
  |                                   |  substitute the new symbols        |
  |                                   |                                    |
  |  Multiplication result            |  round to the FEWEST significant   |
  |                                   |  figures among the inputs          |
  |                                   |                                    |
  |  Stuck, and it's EAPCET           |  GUESS - no negative marking       |
  +-----------------------------------+------------------------------------+
```

## More triggers, added from the newer patterns

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  omega / k  in a wave equation    |  it is the WAVE SPEED [ L T^-1 ]   |
  |                                   |                                    |
  |  A constant multiplying t inside  |  it has dimensions [ T^-1 ]        |
  |  an exponential                   |                                    |
  |                                   |                                    |
  |  "unit of mass is alpha kg ..."   |  copy the dimensional powers and   |
  |                                   |  FLIP their signs                  |
  |                                   |                                    |
  |  "unit is doubled / halved"       |  the NUMBER moves the OPPOSITE way |
  |                                   |                                    |
  |  Screw gauge / vernier reading    |  reading = MSR + (division x LC),  |
  |                                   |  then subtract the zero error      |
  |                                   |                                    |
  |  Time for N oscillations given    |  use the TOTAL time and the        |
  |                                   |  TOTAL resolution - do not divide  |
  |                                   |                                    |
  |  A diameter in a volume or area   |  it carries a power of 2, so it    |
  |                                   |  DOUBLES its error contribution    |
  |                                   |                                    |
  |  Two big numbers subtracted       |  expect a huge percentage error    |
  |                                   |                                    |
  |  Answer must be reported with a   |  find the % error first, then      |
  |  ± value                          |  multiply it by the value          |
  |                                   |                                    |
  |  A formula built from h , G , c   |  stack the M, L and T powers in a  |
  |                                   |  column and add                    |
  +-----------------------------------+------------------------------------+
```

---

# FASTEST WAY TO GET A DIMENSIONAL FORMULA YOU FORGOT

Recall the SIMPLEST equation the quantity appears in, then substitute.

```
  +-----------------------+------------------------------------------+
  |  YOU FORGOT ...       |  USE THIS EQUATION                       |
  +-----------------------+------------------------------------------+
  |  G                    |  F = G m1 m2 / r^2                       |
  |  h  (Planck)          |  E = h x frequency                       |
  |  n  (viscosity)       |  F = 6 pi n r v                          |
  |  sigma (Stefan)       |  E = sigma T^4                           |
  |  e0 (permittivity)    |  F = q1 q2 / (4 pi e0 r^2)               |
  |  u0 (permeability)    |  B = u0 I / (2 pi r)                     |
  |  kB (Boltzmann)       |  E = (3/2) kB T                          |
  |  R  (gas constant)    |  P V = n R T                             |
  +-----------------------+------------------------------------------+
```
