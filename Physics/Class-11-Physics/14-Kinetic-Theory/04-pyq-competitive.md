# Kinetic Theory — JEE Main / AP EAPCET / TG EAPCET Questions

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
                  (very often combined with Thermodynamics)
```

**Why this chapter is worth your time:** almost every question is one line of
substitution into a formula you already have. There is no long reasoning.

---

# PATTERN 1 — Ideal gas equation and molecule counting

### Q1
The number of molecules in 1 m^3 of an ideal gas at STP is

(a) 6.02 x 10^23 &nbsp; (b) 2.69 x 10^25 &nbsp; (c) 2.69 x 10^19 &nbsp; (d) 1.38 x 10^-23

**ANSWER: (b)**
```
  1 mole at STP occupies 22.4 x 10^-3 m^3

          6.022 x 10^23
   n  =  ----------------  =  2.69 x 10^25 per m^3     (Loschmidt number)
          22.4 x 10^-3
```
> **SHORTCUT:** 2.69 x 10^25 per m^3, or 2.69 x 10^19 per cm^3. Learn both.

---

### Q2
The relation between the universal gas constant R, the Boltzmann constant k and
the Avogadro number NA is

(a) `R = k / NA` &nbsp; (b) `k = R NA` &nbsp; (c) `R = NA k` &nbsp; (d) `NA = R k`

**ANSWER: (c)**
```
  P V = n R T  and  P V = N k T  with  N = n NA   ->   R = NA k

  CHECK:  6.022 x 10^23 x 1.38 x 10^-23  =  8.31    correct.
```

---

### Q3
A vessel of volume 8.3 litre contains an ideal gas at 300 K and 200 kPa. The
number of moles is

(a) 0.5 &nbsp; (b) 0.66 &nbsp; (c) 1.0 &nbsp; (d) 2.0

**ANSWER: (b)**
```
         P V         200 x 10^3 x 8.3 x 10^-3         1660
  n  =  -------  =  ---------------------------  =  ---------  =  0.666
          R T             8.314 x 300                 2494.2
```

---

### Q4
Equal volumes of hydrogen and oxygen at the same temperature and pressure
contain

(a) equal masses &nbsp; (b) equal numbers of molecules
(c) equal numbers of atoms &nbsp; (d) equal densities

**ANSWER: (b)** — Avogadro's hypothesis. The masses are in the ratio 2 : 32,
but the numbers of MOLECULES are equal. (The numbers of ATOMS also happen to be
equal here only because both are diatomic — do not generalise that.)

---

### Q5
A real gas behaves most nearly like an ideal gas at

(a) low P, low T &nbsp; (b) high P, high T &nbsp; (c) low P, high T &nbsp; (d) high P, low T

**ANSWER: (c)**
```
  Low P and high T  ->  molecules far apart  ->  their own volume and
  the forces between them are both negligible.
```

---

# PATTERN 2 — Pressure and kinetic energy density

### Q6
The pressure exerted by an ideal gas is

(a) `(1/3) rho c^2` &nbsp; (b) `(1/2) rho c^2` &nbsp; (c) `(2/3) rho c^2` &nbsp; (d) `rho c^2`

**ANSWER: (a)**
```
         1    m N              1
  P  =  --- x ----- c^2   =   --- rho c^2
         3      V              3
```

---

### Q7
If E is the kinetic energy per unit volume of a gas, its pressure is

(a) `E` &nbsp; (b) `(2/3) E` &nbsp; (c) `(3/2) E` &nbsp; (d) `(1/3) E`

**ANSWER: (b)**
```
        1                2   N   +- 1        -+       2
  P  = --- rho c^2   =  --- x-- x| --- m c^2  |   =  --- E
        3                3   V   +- 2        -+       3
```
> **SHORTCUT:** `P = (2/3) E` and `E = (3/2) P`. Both directions get asked.

---

### Q8
The pressure of a gas is 10^5 Pa and its density is 4 kg/m^3. The rms speed of
its molecules is

(a) 137 m/s &nbsp; (b) 274 m/s &nbsp; (c) 387 m/s &nbsp; (d) 500 m/s

**ANSWER: (b)**
```
            _______           _____________
           / 3 P             / 3 x 10^5              _______
  c   =   / -----     =     / ----------    =    \/ 75000    =  274 m/s
   rms  \/   rho          \/      4
```

---

### Q9
The mass of each molecule of a gas is halved and its rms speed is doubled, the
number density staying the same. The pressure becomes

(a) the same &nbsp; (b) doubled &nbsp; (c) halved &nbsp; (d) four times

**ANSWER: (b)**
```
  P  ~  m c^2

  m -> m/2   and   c^2 -> 4 c^2

  P -> (1/2) x 4  =  2 times
```

---

### Q10
A gas is enclosed in a vessel. If the number of molecules is doubled at the same
temperature and volume, the pressure

(a) is halved &nbsp; (b) is unchanged &nbsp; (c) is doubled &nbsp; (d) becomes four times

**ANSWER: (c)** — `P = (N/V) k T`, and T is unchanged, so `P ~ N`.

---

# PATTERN 3 — rms speed: calculate it

### Q11
The rms speed of oxygen molecules at 27 degC is (M = 32 g/mol)

(a) 342 m/s &nbsp; (b) 434 m/s &nbsp; (c) 484 m/s &nbsp; (d) 968 m/s

**ANSWER: (c)**
```
            ________            ____________________
           / 3 R T             / 3 x 8.314 x 300
  c   =   / -------    =      / -------------------   = sqrt(233831)
   rms  \/    M             \/      0.032

      =  484 m/s
```
> **SHORTCUT:** at room temperature, c_rms of O2 is about 480 m/s, of N2 about
> 515 m/s, of air about 500 m/s and of H2 about 1930 m/s. If your answer is not
> in the right ballpark, you slipped a factor of 1000 on the molar mass.

---

### Q12
At what temperature is the rms speed of hydrogen molecules equal to 1934 m/s?

(a) 27 K &nbsp; (b) 100 K &nbsp; (c) 300 K &nbsp; (d) 3000 K

**ANSWER: (c)**
```
             c^2 M        (1934)^2 x 0.002        3740356 x 0.002
  T   =    ---------  =  -------------------  =  -----------------
              3 R          3 x 8.314                 24.942

           7480.7
      =  ----------   =  300 K
           24.942
```

---

### Q13
The rms speed of a gas at 27 degC is v. At what temperature will it be 2v?

(a) 54 degC &nbsp; (b) 108 degC &nbsp; (c) 927 degC &nbsp; (d) 1200 degC

**ANSWER: (c)**
```
  c ~ sqrt(T)    ->    T2 = 4 T1 = 4 x 300 = 1200 K = 927 degC
```
> **TRAP:** (d) is the same number in kelvin. Read whether the options are in
> degC or K. This exact trick appears again and again.

---

### Q14
The rms speed of the molecules of a gas becomes 3 times its original value when
the absolute temperature is made

(a) 3 times &nbsp; (b) 6 times &nbsp; (c) 9 times &nbsp; (d) 1/9 times

**ANSWER: (c)** — `c ~ sqrt(T)`, so tripling c needs T x 9.

---

### Q15
The temperature at which the rms speed is doubled compared with its value at
-73 degC is

(a) 400 K &nbsp; (b) 800 K &nbsp; (c) 1200 K &nbsp; (d) 1600 K

**ANSWER: (b)**
```
  -73 degC  =  200 K

  T2  =  4 x 200  =  800 K
```

---

# PATTERN 4 — rms speed: compare two gases

### Q16
At the same temperature, the ratio of the rms speeds of hydrogen and oxygen
molecules is

(a) 1 : 4 &nbsp; (b) 4 : 1 &nbsp; (c) 1 : 16 &nbsp; (d) 16 : 1

**ANSWER: (b)**
```
             1                 c(H2)          32
   c   ~  --------      ->    -------  = sqrt----  =  4
    rms   sqrt(M)              c(O2)           2
```
> **SHORTCUT:** the ratio of speeds is the square root of the INVERSE ratio of
> the molar masses. Flip, then square-root.

---

### Q17
The rms speed of helium (M = 4) compared with that of oxygen (M = 32) at the same
temperature is

(a) 2 times &nbsp; (b) 2.83 times &nbsp; (c) 4 times &nbsp; (d) 8 times

**ANSWER: (b)**
```
   c(He)             32              __
  -------  =   sqrt -----  =   \/  8    =  2.83
   c(O2)              4
```

---

### Q18
At what temperature will oxygen molecules have the same rms speed as hydrogen
molecules at 27 degC?

(a) 300 K &nbsp; (b) 1200 K &nbsp; (c) 2400 K &nbsp; (d) 4800 K

**ANSWER: (d)**
```
   T / M must be equal:

     T(O2)      300
    -------  = -----     ->     T(O2)  =  32 x 150  =  4800 K
       32        2
```

---

### Q19
Which of the following has the largest rms speed at a given temperature?

(a) O2 &nbsp; (b) N2 &nbsp; (c) He &nbsp; (d) H2

**ANSWER: (d)** — the LIGHTEST gas is always the fastest.
`c ~ 1/sqrt(M)`, and H2 has the smallest M.

---

### Q20
The rms speed of a gas at temperature T is c. If the temperature is made 4 times
and the molar mass is halved, the new rms speed is

(a) 2c &nbsp; (b) 2.83 c &nbsp; (c) 4c &nbsp; (d) 8c

**ANSWER: (b)**
```
            ________
           / 3 R T                     T          4 T
  c   =   / -------      ->  ratio = ------ ->  --------  =  8
        \/    M                        M         M / 2

  new c  =  sqrt(8) x c  =  2.83 c
```

---

# PATTERN 5 — Average kinetic energy and temperature

### Q21
The average kinetic energy of a gas molecule at 27 degC is

(a) 6.21 x 10^-21 J &nbsp; (b) 6.21 x 10^-20 J &nbsp; (c) 3741 J &nbsp; (d) 4.14 x 10^-21 J

**ANSWER: (a)**
```
        3
  KE = --- k T  =  1.5 x 1.38 x 10^-23 x 300  =  6.21 x 10^-21 J
        2
```
> **TRAP:** (c) is the answer PER MOLE, `(3/2) R T = 3741 J`. Read whether the
> question says molecule or mole.

---

### Q22
Two gases, helium and nitrogen, are at the same temperature. The ratio of the
average kinetic energies of one He molecule and one N2 molecule is

(a) 1 : 7 &nbsp; (b) 3 : 5 &nbsp; (c) 1 : 1 &nbsp; (d) 7 : 1

**ANSWER: (c)**
```
  Average (TRANSLATIONAL) KE = (3/2) k T, the same for ALL gases at
  the same temperature.
```
> **TRAP:** if the question had said "total INTERNAL energy of one mole",
> the answer would be `(3/2)RT : (5/2)RT = 3 : 5`, option (b).
> "Average kinetic energy" = translational only.

---

### Q23
The total internal energy of 2 moles of oxygen at 300 K is

(a) 3.74 kJ &nbsp; (b) 6.24 kJ &nbsp; (c) 12.47 kJ &nbsp; (d) 24.9 kJ

**ANSWER: (c)**
```
        f              5
  U  = --- n R T  =   --- x 2 x 8.314 x 300  =  2.5 x 4988.4  =  12471 J
        2              2
```

---

### Q24
The temperature at which the average kinetic energy of a molecule is equal to
1.38 x 10^-20 J is

(a) 100 K &nbsp; (b) 333 K &nbsp; (c) 667 K &nbsp; (d) 1000 K

**ANSWER: (c)**
```
        3                     2 KE        2 x 1.38 x 10^-20
  KE = --- k T   ->   T  =  --------  =  --------------------
        2                    3 k          3 x 1.38 x 10^-23

                                        =  2 x 10^3 / 3  =  667 K
```

---

### Q25
On the basis of kinetic theory, at absolute zero

(a) the gas liquefies &nbsp; (b) molecular motion ceases
(c) molecules move fastest &nbsp; (d) pressure is maximum

**ANSWER: (b)** — `(1/2) m c^2 = (3/2) k T`, so T = 0 gives c = 0 and P = 0.

---

# PATTERN 6 — The three speeds and the Maxwell distribution

### Q26
The correct order of the molecular speeds is

(a) `v_mp < v_av < c_rms` &nbsp; (b) `c_rms < v_av < v_mp`
(c) `v_av < v_mp < c_rms` &nbsp; (d) all are equal

**ANSWER: (a)**
```
  v_mp : v_av : c_rms  =  1 : 1.128 : 1.224
```
> **SHORTCUT:** alphabetical trick — Most probable is the Minimum, RMS is the
> maximum.

---

### Q27
The ratio of the most probable speed to the rms speed is

(a) `sqrt(2/3)` &nbsp; (b) `sqrt(3/2)` &nbsp; (c) `sqrt(8/(3 pi))` &nbsp; (d) `2/3`

**ANSWER: (a)**
```
   v_mp        sqrt(2RT/M)             2
  -------  =  --------------  =   sqrt---  =  0.816
   c_rms       sqrt(3RT/M)             3
```

---

### Q28
Four molecules have speeds 1, 2, 3 and 4 m/s. Their rms speed is

(a) 2.5 m/s &nbsp; (b) 2.74 m/s &nbsp; (c) 3.0 m/s &nbsp; (d) 7.5 m/s

**ANSWER: (b)**
```
          1 + 4 + 9 + 16        30
  c^2 = ------------------  = ------  =  7.5     ->   c = sqrt(7.5) = 2.74
                4                4
```
> **TRAP:** (a) is the simple AVERAGE speed. The rms is always bigger.

---

### Q29
When the temperature of a gas is increased, the Maxwell speed distribution curve

(a) becomes taller and narrower &nbsp; (b) shifts left
(c) becomes flatter and shifts right &nbsp; (d) does not change

**ANSWER: (c)**
```
  Higher T -> peak moves RIGHT (v_mp ~ sqrt T), the peak becomes LOWER
  and the curve BROADER. The AREA under the curve stays the same,
  because the number of molecules N has not changed.
```

---

### Q30
The area under the Maxwell speed distribution curve represents

(a) the average speed &nbsp; (b) the total number of molecules
(c) the total kinetic energy &nbsp; (d) the pressure

**ANSWER: (b)**

---

# PATTERN 7 — Degrees of freedom and equipartition

### Q31
The number of degrees of freedom of a diatomic gas molecule at ordinary
temperature is

(a) 3 &nbsp; (b) 5 &nbsp; (c) 6 &nbsp; (d) 7

**ANSWER: (b)** — 3 translational + 2 rotational. (It becomes 7 only when
vibration is excited at high temperature.)

---

### Q32
The energy associated with each degree of freedom per molecule is

(a) `k T` &nbsp; (b) `(1/2) k T` &nbsp; (c) `(3/2) k T` &nbsp; (d) `(1/2) R T`

**ANSWER: (b)** — law of equipartition. (`(1/2) R T` would be per MOLE.)

---

### Q33
A vibrational mode contributes an energy of

(a) `(1/2) k T` &nbsp; (b) `k T` &nbsp; (c) `(3/2) k T` &nbsp; (d) `2 k T`

**ANSWER: (b)** — a vibration has both a kinetic energy term and a potential
energy term, i.e. two squared terms, so `2 x (1/2) kT = kT`.

---

### Q34
For a diatomic gas, the ratio of the translational to the rotational kinetic
energy of a molecule is

(a) 1 : 1 &nbsp; (b) 3 : 2 &nbsp; (c) 5 : 3 &nbsp; (d) 2 : 3

**ANSWER: (b)**
```
  Translational: 3 degrees of freedom  ->  (3/2) k T
  Rotational   : 2 degrees of freedom  ->  (2/2) k T = k T

  Ratio  =  (3/2) : 1   =   3 : 2
```

---

### Q35
What fraction of the total internal energy of a diatomic gas is translational?

(a) 3/5 &nbsp; (b) 2/5 &nbsp; (c) 3/7 &nbsp; (d) 1/2

**ANSWER: (a)**
```
  Translational  (3/2) R T          3
  ------------ = ----------   =   -----   =  60 %
  Total          (5/2) R T          5
```

---

# PATTERN 8 — Cv, Cp and gamma

### Q36
For a monatomic gas, the value of gamma is

(a) 1.33 &nbsp; (b) 1.40 &nbsp; (c) 1.67 &nbsp; (d) 1.29

**ANSWER: (c)** — `gamma = 1 + 2/f = 1 + 2/3 = 5/3 = 1.67`

---

### Q37
The ratio of specific heats of a gas is 1.33. The gas is

(a) monatomic &nbsp; (b) diatomic &nbsp; (c) polyatomic &nbsp; (d) a vibrating diatomic

**ANSWER: (c)**
```
             2                 2              2
  f  =  ----------   =   -------------  =  -------   =  6      ->  polyatomic
         gamma - 1        1.33 - 1          0.33
```
> **SHORTCUT:** learn the four values of gamma as a look-up:
> `1.67 -> mono | 1.40 -> diatomic | 1.33 -> polyatomic | 1.29 -> vibrating diatomic`

---

### Q38
Cp - Cv for one mole of any ideal gas equals

(a) `R` &nbsp; (b) `R / 2` &nbsp; (c) `2 R` &nbsp; (d) `k`

**ANSWER: (a)** — Mayer's relation. It is `R` for EVERY ideal gas, whatever f is.

---

### Q39
If Cv of a gas is 20.79 J/mol/K, its Cp and gamma are

(a) 29.10 and 1.40 &nbsp; (b) 12.47 and 1.67 &nbsp; (c) 24.94 and 1.20 &nbsp; (d) 33.26 and 1.60

**ANSWER: (a)**
```
  Cp  =  Cv + R  =  20.79 + 8.314  =  29.10

               29.10
  gamma  =  ----------  =  1.40      ->  a diatomic gas
               20.79
```

---

### Q40
One mole of a monatomic gas is mixed with one mole of a diatomic gas. The gamma
of the mixture is

(a) 1.40 &nbsp; (b) 1.50 &nbsp; (c) 1.53 &nbsp; (d) 1.67

**ANSWER: (b)**
```
              1(1.5R) + 1(2.5R)          4R
  Cv(mix) = --------------------  =   -------  =  2 R
                     2                   2

  Cp(mix) = 2R + R = 3R

  gamma   = 3R / 2R  =  1.5
```
> **TRAP:** (c) is `(1.67 + 1.40)/2 = 1.535`, the classic wrong answer. You can
> NEVER average gamma. Average Cv, add R, then divide.

---

### Q41
One mole of helium is mixed with three moles of nitrogen. The gamma of the
mixture is

(a) 1.40 &nbsp; (b) 1.44 &nbsp; (c) 1.50 &nbsp; (d) 1.62

**ANSWER: (b)**
```
              1(1.5R) + 3(2.5R)        1.5R + 7.5R        9R
  Cv(mix) = --------------------  =  --------------  =  ------  =  2.25 R
                    1 + 3                   4              4

  Cp(mix) = 3.25 R

               3.25
  gamma   =  --------  =  1.444
               2.25
```

---

### Q42
The heat required to raise the temperature of 1 mole of a monatomic gas by 10 K
at constant pressure is

(a) 124.7 J &nbsp; (b) 207.9 J &nbsp; (c) 249.4 J &nbsp; (d) 291.0 J

**ANSWER: (b)**
```
  Q  =  n Cp delta T  =  1 x (5/2 x 8.314) x 10  =  20.785 x 10  =  207.9 J
```

---

### Q43
The molar specific heat of a solid according to the law of Dulong and Petit is

(a) `R` &nbsp; (b) `(3/2) R` &nbsp; (c) `3 R` &nbsp; (d) `9 R`

**ANSWER: (c)** — 3 vibrational modes per atom, each of energy `kT`, so
`U = 3RT` and `C = 3R = 25 J/mol/K`. (`9R` is the value for WATER.)

---

# PATTERN 9 — Mean free path

### Q44
The mean free path of a gas molecule is given by

(a) `1 / (sqrt2 pi d^2 n)` &nbsp; (b) `sqrt2 pi d^2 n` &nbsp; (c) `1 / (pi d n)` &nbsp; (d) `n / (pi d^2)`

**ANSWER: (a)**
```
                     1                  k T
  lambda  =  -----------------  =  ----------------
              sqrt2 pi d^2 n       sqrt2 pi d^2 P
```

---

### Q45
The mean free path of a gas varies with pressure (at constant temperature) as

(a) `lambda ~ P` &nbsp; (b) `lambda ~ 1/P` &nbsp; (c) `lambda ~ P^2` &nbsp; (d) independent of P

**ANSWER: (b)**

---

### Q46
The mean free path of a gas at 1 atm is 2 x 10^-7 m. At 10^-3 atm and the same
temperature it becomes

(a) 2 x 10^-10 m &nbsp; (b) 2 x 10^-7 m &nbsp; (c) 2 x 10^-4 m &nbsp; (d) 2 x 10^-3 m

**ANSWER: (c)**
```
  lambda ~ 1 / P      ->      P dropped by 10^3, so lambda rises by 10^3

  lambda  =  2 x 10^-7 x 10^3  =  2 x 10^-4 m
```

---

### Q47
The mean free path of the molecules of a gas at constant VOLUME, when the
temperature is raised, will

(a) increase &nbsp; (b) decrease &nbsp; (c) stay the same &nbsp; (d) become zero

**ANSWER: (c)**
```
  lambda = 1 / (sqrt2 pi d^2 n)  and at constant VOLUME the number
  density n does not change.  Temperature does not appear.
```
> **TRAP:** at constant PRESSURE the answer would be "increase", because
> `lambda = kT / (sqrt2 pi d^2 P)`. Always check what is being held fixed.

---

### Q48
The collision frequency of the molecules of a gas is given by

(a) `lambda / v_av` &nbsp; (b) `v_av / lambda` &nbsp; (c) `v_av x lambda` &nbsp; (d) `1 / (v_av lambda)`

**ANSWER: (b)** — collisions per second = speed divided by distance per
collision. A typical value is about 10^9 per second.

---

# PATTERN 10 — Graham's law and diffusion

### Q49
The rate of diffusion of methane (M = 16) compared with oxygen (M = 32) is

(a) 0.5 &nbsp; (b) 0.707 &nbsp; (c) 1.414 &nbsp; (d) 2

**ANSWER: (c)**
```
   r(CH4)              M(O2)              32           __
  --------  =   sqrt --------   =  sqrt ------  =   \/ 2   =  1.414
   r(O2)              M(CH4)              16
```

---

### Q50
Two gases A and B diffuse at rates in the ratio 1 : 4. The ratio of their molar
masses M(A) : M(B) is

(a) 1 : 4 &nbsp; (b) 4 : 1 &nbsp; (c) 1 : 16 &nbsp; (d) 16 : 1

**ANSWER: (d)**
```
   rA           MB              1            MB              MB       1
  ----  =  sqrt----      ->    ---  =  sqrt ----     ->     ----  =  ----
   rB           MA              4            MA              MA       16

   MA : MB   =   16 : 1
```

---

# PATTERN 11 — Mixed / concept checks

### Q51
The average kinetic energy of a gas molecule depends on

(a) pressure only &nbsp; (b) volume only &nbsp; (c) temperature only &nbsp; (d) the nature of the gas

**ANSWER: (c)** — **the single most repeated idea in this chapter.**

---

### Q52
A gas is compressed isothermally to half its volume. The rms speed of its
molecules

(a) doubles &nbsp; (b) halves &nbsp; (c) becomes sqrt2 times &nbsp; (d) is unchanged

**ANSWER: (d)** — `c_rms = sqrt(3RT/M)` depends only on T and M. Isothermal
means T is fixed.

---

### Q53
Brownian motion of a suspended particle becomes more vigorous when

(a) the temperature is lowered &nbsp; (b) the particle is made heavier
(c) the temperature is raised &nbsp; (d) the fluid viscosity is increased

**ANSWER: (c)** — hotter fluid means faster molecules and bigger unbalanced
impacts. Brownian motion is also faster for SMALLER particles and in LESS
viscous fluids.

---

### Q54
Brownian motion provides direct evidence for

(a) the wave nature of light &nbsp; (b) the random motion of molecules
(c) the conservation of energy &nbsp; (d) Newton's third law

**ANSWER: (b)**

---

### Q55
The dimensional formula of the Boltzmann constant is

(a) `[M L^2 T^-2 K^-1]` &nbsp; (b) `[M L T^-2]` &nbsp; (c) `[M L^2 T^-1]` &nbsp; (d) `[M L^-1 T^-2]`

**ANSWER: (a)** — k is energy per unit temperature, `[M L^2 T^-2] / [K]`.
R has the same dimensions.

---

### Q56
For a gas obeying `P V = n R T`, the graph of `P V` against `T` at fixed n is

(a) a parabola &nbsp; (b) a straight line through the origin
(c) a hyperbola &nbsp; (d) a horizontal line

**ANSWER: (b)**
```
   PV
    ^
    |                 /
    |               /
    |             /        PV = (nR) T
    |           /          slope = n R
    |         /
    |       /
    |     /
    |   /
    | /
    +-------------------------> T
    0

  For a fixed mass of gas, the graph of P against V at constant T
  (Boyle's law) is a RECTANGULAR HYPERBOLA.
```

---

### Q57
Three moles of an ideal monatomic gas and two moles of an ideal diatomic gas are
mixed. The number of degrees of freedom of the mixture per molecule is

(a) 3 &nbsp; (b) 3.8 &nbsp; (c) 4.5 &nbsp; (d) 5

**ANSWER: (b)**
```
             n1 f1 + n2 f2         3(3) + 2(5)         9 + 10        19
  f(mix) = -----------------  =  ---------------  =  ---------  =  ------
                n1 + n2                 5                 5           5

         =  3.8
```

---

### Q58
1 g of helium and 1 g of hydrogen are at the same temperature. The ratio of their
total translational kinetic energies is

(a) 1 : 1 &nbsp; (b) 1 : 2 &nbsp; (c) 2 : 1 &nbsp; (d) 1 : 4

**ANSWER: (b)**
```
  KE = (3/2) n R T , so at the same T the ratio is the ratio of MOLES.

     n(He)  =  1 / 4   =  0.25 mol
     n(H2)  =  1 / 2   =  0.50 mol

     ratio  =  0.25 : 0.50   =   1 : 2
```
> **SHORTCUT:** whenever masses are equal, the ratio of anything "per mole" is
> just the INVERSE ratio of the molar masses.

---

# SPEED RULES FOR THE EXAM HALL

```
  +-------------------------------------+--------------------------------------+
  |  IF YOU SEE THIS ...                |  DO THIS IMMEDIATELY                 |
  +-------------------------------------+--------------------------------------+
  |  "average kinetic energy of a       |  (3/2) k T. Same for ALL gases.      |
  |   molecule"                         |  Ignore the gas named in the question|
  +-------------------------------------+--------------------------------------+
  |  "average kinetic energy per mole"  |  (3/2) R T                           |
  +-------------------------------------+--------------------------------------+
  |  "internal energy" or "total        |  (f/2) n R T  - now the gas type     |
  |   energy"                           |  DOES matter                         |
  +-------------------------------------+--------------------------------------+
  |  Two gases, same T, compare speeds  |  c1/c2 = sqrt(M2/M1). Flip, root.    |
  +-------------------------------------+--------------------------------------+
  |  Same gas, compare speeds at two T  |  c1/c2 = sqrt(T1/T2)                 |
  +-------------------------------------+--------------------------------------+
  |  "rms speed doubled"                |  Temperature x 4                     |
  |  "rms speed tripled"                |  Temperature x 9                     |
  +-------------------------------------+--------------------------------------+
  |  P and rho given, speed asked       |  c = sqrt(3P/rho). Nothing else.     |
  +-------------------------------------+--------------------------------------+
  |  gamma given, gas asked             |  1.67 mono | 1.40 diatomic           |
  |                                     |  1.33 polyatomic | 1.29 di + vib     |
  +-------------------------------------+--------------------------------------+
  |  gamma given, f asked               |  f = 2 / (gamma - 1)                 |
  +-------------------------------------+--------------------------------------+
  |  Mixture of gases                   |  Average Cv (weighted by moles).     |
  |                                     |  NEVER average gamma.                |
  +-------------------------------------+--------------------------------------+
  |  "isothermal" + "rms speed"         |  UNCHANGED. Do no working.           |
  +-------------------------------------+--------------------------------------+
  |  Mean free path + pressure          |  lambda ~ 1/P  (at constant T)       |
  +-------------------------------------+--------------------------------------+
  |  Mean free path + temperature       |  Check what is fixed!                |
  |                                     |  fixed P -> lambda ~ T               |
  |                                     |  fixed V -> lambda UNCHANGED         |
  +-------------------------------------+--------------------------------------+
  |  Rate of diffusion / effusion       |  r ~ 1/sqrt(M) - Graham's law        |
  +-------------------------------------+--------------------------------------+
  |  Anything about degrees of freedom  |  3 mono | 5 diatomic | 6 polyatomic  |
  +-------------------------------------+--------------------------------------+
  |  Options in degC and K both present |  It is a TRAP. Convert carefully.    |
  +-------------------------------------+--------------------------------------+
  |  Molar mass in the formula          |  Put it in kg/mol. Divide g/mol      |
  |                                     |  by 1000 FIRST.                      |
  +-------------------------------------+--------------------------------------+
```

```
  FINAL REMINDER

     AP / TG EAPCET  ->  no negative marking.
                         Even a guess is worth making. NEVER leave a blank.

     JEE Main        ->  -1 for a wrong answer.
                         If you cannot narrow it to two options, skip it.
```
