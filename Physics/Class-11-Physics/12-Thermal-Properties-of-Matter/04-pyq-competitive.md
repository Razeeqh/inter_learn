# Thermal Properties of Matter — JEE Main / AP EAPCET / TG EAPCET Questions

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

  Combined with Thermodynamics + Kinetic Theory, "heat" is worth
  4 to 6 questions in EAPCET. Do the three chapters together.
```

**The single biggest source of wrong answers in this chapter: forgetting to
convert degC to KELVIN before using `T^4` or `lambda_m T`.**

---

# PATTERN 1 — Temperature scales

### Q1
The temperature at which the Celsius and Fahrenheit scales give the same
reading is

(a) 0 &nbsp; (b) -40 &nbsp; (c) -273 &nbsp; (d) 100

**ANSWER: (b)**
```
   x = (9/5)x + 32   ->   -(4/5)x = 32   ->   x = -40
```
> **SHORTCUT:** just remember the number **-40**. It is asked again and again.

---

### Q2
A temperature difference of 45 degF corresponds to a temperature difference of

(a) 45 degC &nbsp; (b) 25 degC &nbsp; (c) 81 degC &nbsp; (d) 13 degC

**ANSWER: (b)**
```
  For a DIFFERENCE only the scale factor matters - do NOT subtract 32.

     dC = (5/9) dF = (5/9)(45) = 25 degC
```
> **SHORTCUT:** if the question says "difference", "change" or "rise",
> **never use the +32**.

---

### Q3
On a new scale X, the ice point is 20 degX and the steam point is 220 degX.
A reading of 40 degX corresponds to

(a) 5 degC &nbsp; (b) 10 degC &nbsp; (c) 20 degC &nbsp; (d) 40 degC

**ANSWER: (b)**
```
     C - 0        X - 20         40 - 20        20
    -------  =  -----------  =  ---------  =  ------  =  0.1
      100         220 - 20         200          200

     C = 0.1 x 100 = 10 degC
```
> **SHORTCUT:** every scale question is the same ratio:
> `(reading - lower)/(upper - lower)` is the same on all scales.

---

### Q4
At what temperature do the Kelvin and Fahrenheit scales read the same?

(a) 40 &nbsp; (b) 273 &nbsp; (c) 574.6 &nbsp; (d) never

**ANSWER: (c)**
```
    F = 1.8 C + 32   and   C = K - 273.15

    F = 1.8 K - 491.67 + 32 = 1.8 K - 459.67

    Put F = K :    K = 1.8 K - 459.67
                   0.8 K = 459.67
                   K = 574.6
```

---

### Q5
In a constant-volume gas thermometer, the pressure at the triple point of water
is 20 kPa. When the bulb is placed in a bath the pressure is 25 kPa. The
temperature of the bath is

(a) 273.16 K &nbsp; (b) 341.45 K &nbsp; (c) 218.5 K &nbsp; (d) 300 K

**ANSWER: (b)**
```
   T = 273.16 x (P / P_tr) = 273.16 x (25/20) = 273.16 x 1.25 = 341.45 K
```

---

# PATTERN 2 — Linear, areal and cubical expansion

### Q6
The ratio `alpha : beta : gamma` is

(a) 1 : 2 : 3 &nbsp; (b) 3 : 2 : 1 &nbsp; (c) 1 : 3 : 2 &nbsp; (d) 2 : 1 : 3

**ANSWER: (a)**  `beta = 2 alpha`, `gamma = 3 alpha`.

---

### Q7
A rod of length `L` increases by 0.02% when heated through `dT`. A rod of the
same material of length `2L` heated through the same `dT` will increase by

(a) 0.01% &nbsp; (b) 0.02% &nbsp; (c) 0.04% &nbsp; (d) 0.08%

**ANSWER: (b)**
```
   dL/L = alpha dT  -  the PERCENTAGE increase does not depend on the
   original length at all. Only the material and dT matter.
```
> **SHORTCUT:** any question asking for a *fractional* or *percentage* change
> in this chapter is independent of the size of the object.

---

### Q8
A metal rod is 100 cm long at 0 degC and `alpha = 2 x 10^-5 /degC`.
At what temperature is it 100.1 cm long?

(a) 25 degC &nbsp; (b) 50 degC &nbsp; (c) 100 degC &nbsp; (d) 200 degC

**ANSWER: (b)**
```
   dL/L = 0.1/100 = 1 x 10^-3 = alpha dT

   dT = 1 x 10^-3 / 2 x 10^-5 = 50 degC
```

---

### Q9
The coefficient of linear expansion of a metal is 1.1 x 10^-5 /degC. Its
coefficient of cubical expansion is

(a) 1.1 x 10^-5 &nbsp; (b) 2.2 x 10^-5 &nbsp; (c) 3.3 x 10^-5 &nbsp;
(d) 3.3 x 10^-6

**ANSWER: (c)**  `gamma = 3 alpha = 3.3 x 10^-5 /degC`

---

### Q10
Two rods of different metals, of coefficients `a1` and `a2` and lengths `l1` and
`l2`, are such that the DIFFERENCE of their lengths is independent of
temperature. Then

(a) `a1 l1 = a2 l2` &nbsp; (b) `a1 l2 = a2 l1` &nbsp; (c) `a1 = a2` &nbsp;
(d) `l1 = l2`

**ANSWER: (a)**
```
   For the difference to be constant, both rods must EXPAND BY THE SAME
   AMOUNT:

        a1 l1 dT  =  a2 l2 dT    ->    a1 l1 = a2 l2
```

---

### Q11
A circular hole is cut in a metal plate. On heating the plate, the diameter of
the hole

(a) increases &nbsp; (b) decreases &nbsp; (c) stays the same &nbsp;
(d) first decreases then increases

**ANSWER: (a)**
> **SHORTCUT:** a hole behaves exactly like a piece of the same metal.
> Everything on the plate is magnified by `(1 + alpha dT)`.

---

### Q12
A solid of coefficient of cubical expansion `3 x 10^-5 /degC` is heated through
100 degC. The percentage decrease in its density is about

(a) 0.03% &nbsp; (b) 0.3% &nbsp; (c) 3% &nbsp; (d) 30%

**ANSWER: (b)**
```
   rho2 = rho1 ( 1 - gamma dT )

   fractional decrease = gamma dT = 3 x 10^-5 x 100 = 3 x 10^-3

   percentage = 0.3%
```

---

### Q13
A pendulum clock keeps correct time at 20 degC. If the temperature rises by
10 degC, the time lost per day (alpha = 2 x 10^-5 /degC) is

(a) 4.32 s &nbsp; (b) 8.64 s &nbsp; (c) 17.28 s &nbsp; (d) 86.4 s

**ANSWER: (b)**
```
   time lost per day = (1/2) alpha dT x 86400
                     = (1/2)(2 x 10^-5)(10)(86400)
                     = (1 x 10^-4)(86400)
                     = 8.64 s
```
> **SHORTCUT:** memorise `(1/2) alpha dT x 86400`. It appears every year in
> some form. A hot clock LOSES time.

---

# PATTERN 3 — Thermal stress

### Q14
A rod is clamped rigidly between two walls and heated through 10 degC.
`Y = 2 x 10^11 N/m^2`, `alpha = 1.1 x 10^-5 /degC`. The thermal stress is

(a) 2.2 x 10^6 Pa &nbsp; (b) 2.2 x 10^7 Pa &nbsp; (c) 2.2 x 10^8 Pa &nbsp;
(d) 1.1 x 10^7 Pa

**ANSWER: (b)**
```
   stress = Y alpha dT = (2 x 10^11)(1.1 x 10^-5)(10)
                       = (2.2 x 10^6)(10)
                       = 2.2 x 10^7 N/m^2
```

---

### Q15
The thermal stress developed in a clamped rod depends on

(a) length only &nbsp; (b) area only &nbsp; (c) neither length nor area &nbsp;
(d) both

**ANSWER: (c)**
> **SHORTCUT:** `stress = Y alpha dT` — no `L`, no `A`. Only the *force*
> `F = Y A alpha dT` involves the area.

---

# PATTERN 4 — Expansion of liquids

### Q16
The apparent coefficient of expansion of a liquid in a glass vessel is
153 x 10^-6 /degC. If `alpha(glass) = 9 x 10^-6 /degC`, the real coefficient is

(a) 144 x 10^-6 &nbsp; (b) 162 x 10^-6 &nbsp; (c) 180 x 10^-6 &nbsp;
(d) 126 x 10^-6

**ANSWER: (c)**
```
   gamma(vessel) = 3 x 9 x 10^-6 = 27 x 10^-6

   gamma(real) = 153 x 10^-6 + 27 x 10^-6 = 180 x 10^-6 /degC
```
> **SHORTCUT:** REAL = APPARENT + VESSEL. Always a PLUS.

---

### Q17
A vessel of volume `V` is partly filled with a liquid. The volume of the liquid
remaining above the mark is the same at all temperatures if the volume of
liquid `v` satisfies

(a) `v gamma_l = V gamma_g` &nbsp; (b) `v gamma_g = V gamma_l` &nbsp;
(c) `v = V` &nbsp; (d) `gamma_l = gamma_g`

**ANSWER: (a)**
```
   The empty space stays constant only if the liquid and the vessel
   expand by the SAME VOLUME:

        v gamma_l dT  =  V gamma_g dT    ->    v gamma_l = V gamma_g
```

---

### Q18
Water has its maximum density at

(a) 0 degC &nbsp; (b) 4 degC &nbsp; (c) 4 K &nbsp; (d) 100 degC

**ANSWER: (b)** 4 degC, where the density is 1000 kg/m^3.

---

# PATTERN 5 — Specific heat and calorimetry

### Q19
The substance with the highest specific heat capacity among the following is

(a) copper &nbsp; (b) lead &nbsp; (c) water &nbsp; (d) mercury

**ANSWER: (c)** water, 4186 J/kg/K.

---

### Q20
The heat required to raise the temperature of 1 kg of water from 20 degC to
100 degC is about

(a) 3.35 x 10^5 J &nbsp; (b) 3.35 x 10^4 J &nbsp; (c) 4.19 x 10^5 J &nbsp;
(d) 8.4 x 10^4 J

**ANSWER: (a)**
```
   Q = m c dT = 1 x 4186 x 80 = 334,880 J = 3.35 x 10^5 J
```

---

### Q21
Equal masses of water at 30 degC and 60 degC are mixed. The final temperature is

(a) 30 degC &nbsp; (b) 40 degC &nbsp; (c) 45 degC &nbsp; (d) 90 degC

**ANSWER: (c)**
> **SHORTCUT:** EQUAL masses of the SAME liquid always give the simple
> **average**: `(30 + 60)/2 = 45 degC`. No algebra needed.

---

### Q22
Masses `m` and `3m` of water at 20 degC and 60 degC are mixed. The final
temperature is

(a) 40 degC &nbsp; (b) 45 degC &nbsp; (c) 50 degC &nbsp; (d) 55 degC

**ANSWER: (c)**
```
   Weighted average:

        m(20) + 3m(60)      20 + 180      200
   T = ----------------- = ---------- = ------- = 50 degC
          m + 3m               4           4
```
> **SHORTCUT:** for the same substance, `T = (m1 T1 + m2 T2)/(m1 + m2)`.

---

### Q23
The molar specific heat capacity of water is about

(a) 4186 J/mol/K &nbsp; (b) 75 J/mol/K &nbsp; (c) 18 J/mol/K &nbsp;
(d) 8.3 J/mol/K

**ANSWER: (b)**
```
   C = M c = 0.018 x 4186 = 75.3 J mol^-1 K^-1
```

---

### Q24
The water equivalent of a copper calorimeter of mass 100 g is
(`c(Cu) = 0.093 cal/g/degC`)

(a) 9.3 g &nbsp; (b) 93 g &nbsp; (c) 0.93 g &nbsp; (d) 100 g

**ANSWER: (a)**
```
   w = (mass x c of calorimeter) / c(water)
     = (100 x 0.093) / 1
     = 9.3 g
```

---

# PATTERN 6 — Latent heat and mixtures

### Q25
The heat required to convert 1 g of ice at 0 degC into water at 0 degC is

(a) 1 cal &nbsp; (b) 80 cal &nbsp; (c) 540 cal &nbsp; (d) 100 cal

**ANSWER: (b)** `Q = m Lf = 1 x 80 = 80 cal`

---

### Q26
1 g of steam at 100 degC condenses to water at 100 degC. The heat released is

(a) 80 cal &nbsp; (b) 100 cal &nbsp; (c) 540 cal &nbsp; (d) 640 cal

**ANSWER: (c)** `Q = m Lv = 540 cal`

---

### Q27
1 kg of ice at 0 degC is mixed with 1 kg of water at 80 degC. The final state is

(a) all water at 0 degC &nbsp; (b) all ice at 0 degC &nbsp;
(c) water at 40 degC &nbsp; (d) half ice, half water at 0 degC

**ANSWER: (a)**
```
   Heat available = 1000 g x 1 x 80 = 80,000 cal
   Heat needed to melt all the ice = 1000 x 80 = 80,000 cal

   EXACTLY enough. All the ice melts, nothing is left over,
   so the final mixture is 2 kg of water at 0 degC.
```
> **SHORTCUT:** because `Lf = 80 cal/g`, **1 g of water at 80 degC melts
> exactly 1 g of ice**. Very quick to use.

---

### Q28
What mass of steam at 100 degC is needed to just melt 100 g of ice at 0 degC?

(a) 8 g &nbsp; (b) 10 g &nbsp; (c) 12.5 g &nbsp; (d) 20 g

**ANSWER: (c)**
```
   Heat given by m grams of steam going to water at 0 degC
        = m(540) + m(1)(100) = 640 m

   Heat needed = 100 x 80 = 8000 cal

        640 m = 8000    ->    m = 12.5 g
```

---

### Q29
The total heat required to convert 1 kg of ice at -20 degC into steam at
120 degC is about

(a) 3.09 x 10^5 J &nbsp; (b) 3.09 x 10^6 J &nbsp; (c) 2.26 x 10^6 J &nbsp;
(d) 7.9 x 10^5 J

**ANSWER: (b)**
```
   42,000 + 333,000 + 418,600 + 2,260,000 + 40,200 = 3,093,800 J
```
> **SHORTCUT:** stage 4 (boiling, 2.26 x 10^6 J) alone is about 73% of the
> total. If the options are far apart, `m Lv` gets you the right order of
> magnitude in five seconds.

---

# PATTERN 7 — Conduction

### Q30
Two rods of the same length and cross-section, with conductivities `K1` and
`K2`, are joined END TO END. The equivalent conductivity is

(a) `(K1+K2)/2` &nbsp; (b) `2K1K2/(K1+K2)` &nbsp; (c) `K1K2` &nbsp;
(d) `K1 + K2`

**ANSWER: (b)** — end to end is **SERIES**, so the resistances add.

---

### Q31
The same two rods placed SIDE BY SIDE between the same two temperatures give an
equivalent conductivity

(a) `(K1+K2)/2` &nbsp; (b) `2K1K2/(K1+K2)` &nbsp; (c) `K1K2` &nbsp;
(d) `K1 - K2`

**ANSWER: (a)** — side by side is **PARALLEL**, so the conductances add.

> **SHORTCUT — the one line that solves both:**
> **SERIES = harmonic mean. PARALLEL = arithmetic mean.**
> (Exactly the reverse of electrical resistors, because `K` is like
> *conductance*, not resistance.)

---

### Q32
Two slabs of the same thickness and area, with conductivities `K` and `2K`, are
joined face to face. The outer faces are at 100 degC and 0 degC. The junction
temperature is

(a) 25 degC &nbsp; (b) 33.3 degC &nbsp; (c) 50 degC &nbsp; (d) 66.7 degC

**ANSWER: (b)**
```
   Same heat through both:

        K(100 - T)  =  2K( T - 0 )
        100 - T = 2T
        T = 33.3 degC
```
> **SHORTCUT:** the junction always lies **nearer the better conductor's
> outer face** — i.e. the better conductor takes the smaller share of the
> temperature drop.

---

### Q33
If the length of a conducting rod is doubled and its radius is also doubled,
the rate of flow of heat becomes

(a) half &nbsp; (b) the same &nbsp; (c) twice &nbsp; (d) four times

**ANSWER: (c)**
```
   H is proportional to A/L, i.e. to r^2 / L

   new / old = (2^2) / (2) = 4/2 = 2
```

---

### Q34
The SI unit of thermal resistance is

(a) W/K &nbsp; (b) K/W &nbsp; (c) W/mK &nbsp; (d) J/K

**ANSWER: (b)** `R = L/(KA)`, and `H = dT/R`, so `R = K/W`.

---

### Q35
Ice on a pond is 1 cm thick and takes time `t` to form. The time taken for the
thickness to grow from 1 cm to 2 cm is

(a) `t` &nbsp; (b) `2t` &nbsp; (c) `3t` &nbsp; (d) `4t`

**ANSWER: (c)**
```
   The time to form a thickness x is proportional to x^2.

        time for 0 -> 1 cm  is proportional to 1^2 = 1   ->  t
        time for 0 -> 2 cm  is proportional to 2^2 = 4   ->  4t

        time for 1 cm -> 2 cm  =  4t - t  =  3t
```
> **SHORTCUT:** remember `t is proportional to x^2` and always **subtract**.
> The answer 1 -> 2 is `3t`, and 2 -> 3 is `5t`. Odd numbers.

---

### Q36
A metal spoon feels colder than a wooden spoon at the same temperature because
metal has a larger

(a) specific heat &nbsp; (b) thermal conductivity &nbsp; (c) density &nbsp;
(d) latent heat

**ANSWER: (b)**

---

# PATTERN 8 — Stefan-Boltzmann law

### Q37
The temperature of a black body is raised from 227 degC to 727 degC. The energy
radiated per second becomes

(a) 4 times &nbsp; (b) 8 times &nbsp; (c) 16 times &nbsp; (d) 32 times

**ANSWER: (c)**
```
   CONVERT FIRST:  T1 = 500 K ,  T2 = 1000 K

   ratio = ( 1000 / 500 )^4 = 2^4 = 16
```
> **SHORTCUT:** in every Stefan question, convert to kelvin, take the ratio,
> then raise to the fourth power. `(727/227)^4` is the classic wrong answer
> the examiner plants in the options.

---

### Q38
The dimensional formula of Stefan's constant is

(a) `[M L^2 T^-3 K^-4]` &nbsp; (b) `[M T^-3 K^-4]` &nbsp;
(c) `[M L T^-3 K^-1]` &nbsp; (d) `[M L^0 T^-2 K^-4]`

**ANSWER: (b)**
```
   E = sigma T^4 , and E is power per unit area:

        [ M L^2 T^-3 ] / [ L^2 ] = [ M T^-3 ]

        sigma = [ M T^-3 ] / [ K^4 ] = [ M T^-3 K^-4 ]
```

---

### Q39
Two spheres of the same material have radii in the ratio 1 : 4 and absolute
temperatures in the ratio 2 : 1. The ratio of the energies radiated per second
is

(a) 1 : 1 &nbsp; (b) 1 : 4 &nbsp; (c) 4 : 1 &nbsp; (d) 16 : 1

**ANSWER: (a)**
```
   P is proportional to r^2 T^4

     P1     (1)^2 (2)^4      1 x 16      16      1
    ---- = ------------- = ---------- = ----- = ---
     P2     (4)^2 (1)^4      16 x 1       16      1
```

---

### Q40
A black body at 727 degC radiates energy per unit area per second of about

(a) 5.67 x 10^2 W/m^2 &nbsp; (b) 5.67 x 10^4 W/m^2 &nbsp;
(c) 5.67 x 10^6 W/m^2 &nbsp; (d) 5.67 x 10^-8 W/m^2

**ANSWER: (b)**
```
   T = 1000 K

   E = sigma T^4 = 5.67 x 10^-8 x 10^12 = 5.67 x 10^4 W/m^2
```
> **SHORTCUT:** at exactly **1000 K a black body radiates 5.67 x 10^4 W/m^2**.
> Learn that one value and scale it by `(T/1000)^4`.

---

# PATTERN 9 — Newton's law of cooling

### Q41
A body cools from 80 degC to 70 degC in 5 minutes in surroundings at 30 degC.
The time to cool from 70 degC to 60 degC is about

(a) 5 min &nbsp; (b) 6.4 min &nbsp; (c) 7.5 min &nbsp; (d) 4 min

**ANSWER: (b)**
```
   FIRST:   10/5 = k( (80+70)/2 - 30 ) = k(75 - 30) = 45k
            2 = 45k    ->   k = 2/45

   SECOND:  10/t = (2/45)( (70+60)/2 - 30 ) = (2/45)(65 - 30)
            10/t = (2/45)(35) = 70/45 = 1.5556
            t = 10 / 1.5556 = 6.43 min
```
> **SHORTCUT:** the second interval is ALWAYS longer than the first.
> If an option is shorter than or equal to the first time, delete it at once.

---

### Q42
A body cools from 60 degC to 50 degC in 10 minutes. The surroundings are at
25 degC. Its temperature after the next 10 minutes is about

(a) 40 degC &nbsp; (b) 42.9 degC &nbsp; (c) 45 degC &nbsp; (d) 47.5 degC

**ANSWER: (b)**
```
   FIRST:   (60-50)/10 = k(55 - 25)   ->   1 = 30k   ->   k = 1/30

   NEXT:    (50-T)/10 = (1/30)( (50+T)/2 - 25 ) = (1/30)(T/2) = T/60

            60(50 - T) = 10 T
            3000 = 70 T
            T = 42.86 degC
```

---

### Q43
Newton's law of cooling is a special case of

(a) Kirchhoff's law &nbsp; (b) Wien's law &nbsp;
(c) the Stefan-Boltzmann law &nbsp; (d) the zeroth law

**ANSWER: (c)** — obtained by expanding `T^4 - Ts^4` for a small excess
temperature and keeping only the first-order term.

---

### Q44
For a body cooling by Newton's law, a plot of `log_e (T - Ts)` against time is

(a) a parabola &nbsp; (b) a straight line with a negative slope &nbsp;
(c) an exponential curve &nbsp; (d) a horizontal line

**ANSWER: (b)**
```
   T = Ts + (T0 - Ts) e^(-kt)

   log_e (T - Ts) = log_e (T0 - Ts)  -  k t     <- straight line, slope -k
```

---

# PATTERN 10 — Radiation, black bodies, Kirchhoff and Wien

### Q45
For a perfectly black body, the absorptive power is

(a) 0 &nbsp; (b) 0.5 &nbsp; (c) 1 &nbsp; (d) infinite

**ANSWER: (c)**

---

### Q46
"A good absorber is a good emitter" is a statement of

(a) Stefan's law &nbsp; (b) Kirchhoff's law &nbsp; (c) Wien's law &nbsp;
(d) Newton's law of cooling

**ANSWER: (b)**

---

### Q47
The Fraunhofer lines in the solar spectrum are explained by

(a) Stefan's law &nbsp; (b) Wien's law &nbsp; (c) Kirchhoff's law &nbsp;
(d) Planck's law

**ANSWER: (c)** — the cooler chromosphere absorbs exactly the wavelengths its
own vapours would emit, leaving dark lines.

---

### Q48
If the absolute temperature of a black body is doubled, the wavelength of
maximum emission becomes

(a) doubled &nbsp; (b) halved &nbsp; (c) four times &nbsp; (d) unchanged

**ANSWER: (b)** — `lambda_m T = constant`, so `lambda_m` is inversely
proportional to `T`.

---

### Q49
The Sun's surface is at about 6000 K. Its wavelength of maximum emission
(`b = 2.9 x 10^-3 m K`) is about

(a) 483 nm &nbsp; (b) 4830 nm &nbsp; (c) 48.3 nm &nbsp; (d) 4.83 micrometre

**ANSWER: (a)**
```
   lambda_m = 2.9 x 10^-3 / 6000 = 4.83 x 10^-7 m = 483 nm
```

---

### Q50
In the black-body radiation curves drawn for several temperatures, the AREA
under each curve is proportional to

(a) `T` &nbsp; (b) `T^2` &nbsp; (c) `T^4` &nbsp; (d) `1/T`

**ANSWER: (c)** — the area is the total energy radiated, which is Stefan's law.

---

### Q51
Emissive power has the same dimensions as

(a) energy &nbsp; (b) power &nbsp; (c) intensity &nbsp; (d) force

**ANSWER: (c)** — energy per unit area per unit time, `[M T^-3]`, i.e. W/m^2,
which is exactly intensity.

---

### Q52
Heat transfer through a vacuum is possible only by

(a) conduction &nbsp; (b) convection &nbsp; (c) radiation &nbsp;
(d) all three

**ANSWER: (c)**

---

### Q53
A thermos flask is silvered on the inside and outside of its double wall in
order to reduce heat loss by

(a) conduction &nbsp; (b) convection &nbsp; (c) radiation &nbsp;
(d) evaporation

**ANSWER: (c)** — a silvered surface is a poor absorber and, by Kirchhoff's
law, a poor emitter. (The vacuum between the walls stops conduction and
convection.)

---

### Q54
The greenhouse effect is caused mainly by gases that

(a) reflect visible light &nbsp; (b) absorb infrared radiation &nbsp;
(c) absorb ultraviolet radiation &nbsp; (d) conduct heat well

**ANSWER: (b)** — CO2, water vapour, CH4 and CFCs absorb the long-wavelength
infrared radiated by the warm Earth.

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  T^4 anywhere, or lambda_m T      |  CONVERT TO KELVIN FIRST           |
  |                                   |                                    |
  |  "difference" / "rise" / "change" |  degC and K are identical; do NOT  |
  |  in temperature                   |  add 32 or 273                     |
  |                                   |                                    |
  |  "percentage change in length"    |  it is alpha dT - the original     |
  |                                   |  length is irrelevant              |
  |                                   |                                    |
  |  Any HOLE or CAVITY               |  it EXPANDS like solid metal       |
  |                                   |                                    |
  |  Clamped rod, thermal stress      |  Y alpha dT - no L, no A           |
  |                                   |                                    |
  |  Pendulum clock                   |  (1/2) alpha dT x 86400 seconds    |
  |                                   |  per day; hot clock LOSES time     |
  |                                   |                                    |
  |  Apparent / real expansion        |  REAL = APPARENT + VESSEL (a PLUS) |
  |                                   |                                    |
  |  EQUAL masses of the same liquid  |  final temperature is the simple   |
  |  mixed                            |  AVERAGE                           |
  |                                   |                                    |
  |  Unequal masses, same liquid      |  (m1T1 + m2T2)/(m1 + m2)           |
  |                                   |                                    |
  |  Ice + water mixture              |  CHECK the heat budget FIRST:      |
  |                                   |  can all the ice melt?             |
  |                                   |  1 g of water at 80 degC melts     |
  |                                   |  exactly 1 g of ice                |
  |                                   |                                    |
  |  Rods joined END TO END           |  SERIES -> harmonic mean           |
  |                                   |  K_eq = 2K1K2/(K1+K2)              |
  |                                   |                                    |
  |  Rods joined SIDE BY SIDE         |  PARALLEL -> arithmetic mean       |
  |                                   |  K_eq = (K1+K2)/2                  |
  |                                   |                                    |
  |  Ice thickness on a pond          |  time is proportional to x^2 ;     |
  |                                   |  1->2 takes 3t , 2->3 takes 5t     |
  |                                   |                                    |
  |  Stefan ratio question            |  ( T2/T1 )^4 in KELVIN             |
  |                                   |  and P also scales as r^2          |
  |                                   |                                    |
  |  Black body at 1000 K             |  E = 5.67 x 10^4 W/m^2 ; scale by  |
  |                                   |  (T/1000)^4                        |
  |                                   |                                    |
  |  Newton's cooling, second stage   |  it MUST take LONGER than the      |
  |                                   |  first - delete shorter options    |
  |                                   |                                    |
  |  Newton's cooling working form    |  use the AVERAGE of the two        |
  |                                   |  temperatures, minus Ts            |
  |                                   |                                    |
  |  "Good absorber = good emitter"   |  KIRCHHOFF                         |
  |  "E = sigma T^4"                  |  STEFAN-BOLTZMANN                  |
  |  "peak shifts with temperature"   |  WIEN                              |
  |  "rate proportional to excess"    |  NEWTON                            |
  |                                   |                                    |
  |  Heat through a VACUUM            |  RADIATION, always                 |
  |                                   |                                    |
  |  Stuck, and it's EAPCET           |  GUESS - there is no negative      |
  |                                   |  marking                           |
  +-----------------------------------+------------------------------------+
```

---

# THE FASTEST CHECKS WHEN YOU ARE OUT OF TIME

```
  +---------------------------------+-----------------------------------+
  |  QUESTION                       |  INSTANT SANITY CHECK             |
  +---------------------------------+-----------------------------------+
  |  Mixture final temperature      |  must lie BETWEEN the two         |
  |                                 |  starting temperatures            |
  |                                 |                                   |
  |  Newton cooling, later interval |  must be LONGER than the earlier  |
  |                                 |                                   |
  |  Junction temperature           |  must lie BETWEEN the two outer   |
  |                                 |  temperatures, nearer the face of |
  |                                 |  the BETTER conductor             |
  |                                 |                                   |
  |  Series K_eq                    |  must lie BETWEEN K1 and K2, and  |
  |                                 |  be CLOSER to the smaller one     |
  |                                 |                                   |
  |  Density after heating          |  must be SMALLER than before      |
  |                                 |                                   |
  |  Hotter body, lambda_m          |  must be SMALLER (bluer)          |
  +---------------------------------+-----------------------------------+
```
