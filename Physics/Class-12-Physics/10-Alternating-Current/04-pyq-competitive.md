# Alternating Current — JEE Main / AP EAPCET / TG EAPCET Questions

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

  Almost all of them are ONE-FORMULA questions:
        XL,  XC,  Z,  f0,  Q,  power factor,  turns ratio.
  This is a HIGH-RETURN chapter for competitive exams.
```

---

# PATTERN 1 — RMS, MEAN AND PEAK VALUES

### Q1
The instantaneous current from an AC source is `i = 5 sin(314 t)` A. The rms current and
the frequency are

(a) 3.54 A, 50 Hz &nbsp; (b) 5 A, 50 Hz &nbsp; (c) 3.54 A, 314 Hz &nbsp; (d) 7.07 A, 50 Hz

**ANSWER: (a)**
```
  I0 = 5 A     ->   I_rms = 5 / 1.414 = 3.54 A

  omega = 314  ->   f = 314 / (2 pi) = 314 / 6.283 = 50 Hz
```
> **SHORTCUT:** `sin(314 t)` always means 50 Hz. Recognise it instantly.

---

### Q2
The peak value of an alternating current is 8 A. Its mean value over half a cycle is

(a) 5.66 A &nbsp; (b) 5.09 A &nbsp; (c) 4.00 A &nbsp; (d) 8.00 A

**ANSWER: (b)**
```
  I_mean = 2 I0 / pi = 0.637 x 8 = 5.09 A

  (5.66 A would be the RMS value, 0.707 x 8 - the standard trap option.)
```

---

### Q3
The ratio of the rms value to the mean value (form factor) of a sinusoidal AC is

(a) 1.414 &nbsp; (b) 1.11 &nbsp; (c) 0.707 &nbsp; (d) 0.637

**ANSWER: (b)**
```
  Form factor = (I0/sqrt2) / (2 I0/pi) = pi / (2 sqrt2) = 1.11
  (1.414 is the PEAK factor. Read the question carefully.)
```

---

### Q4
The rms value of the current `i = i1 cos(omega t) + i2 sin(omega t)` is

(a) `(i1 + i2)/sqrt(2)` &nbsp; (b) `sqrt(i1^2 + i2^2)` &nbsp;
(c) `sqrt( (i1^2 + i2^2)/2 )` &nbsp; (d) `(i1 + i2)/2`

**ANSWER: (c)**
```
  Mean of cos^2 = 1/2 , mean of sin^2 = 1/2 , mean of (sin x cos) = 0

  mean of i^2 = i1^2/2 + i2^2/2

  I_rms = sqrt[ (i1^2 + i2^2) / 2 ]
```
> **SHORTCUT:** for a sum of terms at different phases (or frequencies),
> **square each rms separately and add**, then take the root.

---

### Q5
A current `i = 3 + 4 sin(omega t)` ampere flows through a resistor. Its rms value is

(a) 5 A &nbsp; (b) 7 A &nbsp; (c) 4.12 A &nbsp; (d) 3.5 A

**ANSWER: (c)**
```
  mean of i^2 = mean of [ 9 + 24 sin(wt) + 16 sin^2(wt) ]
              =  9  +  0  +  16 x (1/2)
              =  9 + 8  =  17

  I_rms = sqrt(17) = 4.12 A
```
> **SHORTCUT:** DC part contributes its FULL square; AC part contributes
> HALF its peak squared.

---

### Q6
An AC of rms value I passed through a resistor produces three times the heat produced by
a 2 A direct current in the same resistor in the same time. Then I is

(a) 6 A &nbsp; (b) 3.46 A &nbsp; (c) 2.45 A &nbsp; (d) 12 A

**ANSWER: (b)**
```
  I^2 R t = 3 x (2)^2 R t     ->   I^2 = 12   ->   I = 2 sqrt(3) = 3.46 A
```

---

### Q7
The domestic AC supply is 230 V, 50 Hz. The equation of the instantaneous voltage is

(a) `230 sin(50 t)` &nbsp; (b) `230 sin(314 t)` &nbsp;
(c) `325 sin(314 t)` &nbsp; (d) `325 sin(50 t)`

**ANSWER: (c)**
```
  V0 = 1.414 x 230 = 325 V ;   omega = 2 pi (50) = 314 rad/s
```

---

# PATTERN 2 — REACTANCE OF L AND C

### Q8
A 0.1 H inductor is connected to a 50 Hz supply. Its reactance is

(a) 5 ohm &nbsp; (b) 31.4 ohm &nbsp; (c) 3.14 ohm &nbsp; (d) 314 ohm

**ANSWER: (b)**
```
  XL = 2 pi f L = 2 x 3.1416 x 50 x 0.1 = 31.4 ohm
```

---

### Q9
A 1 microfarad capacitor is connected to an AC source of angular frequency 100 rad/s.
Its reactance is

(a) 10^4 ohm &nbsp; (b) 10^-4 ohm &nbsp; (c) 100 ohm &nbsp; (d) 10^6 ohm

**ANSWER: (a)**
```
             1              1
  XC  =  ---------- = ---------------- = 10^4 ohm
          omega C      100 x 10^-6
```

---

### Q10
An alternating emf `e = 200 sqrt(2) sin(100 t)` volt is applied to a 1 microfarad
capacitor through an AC ammeter. The reading of the ammeter is

(a) 20 mA &nbsp; (b) 10 mA &nbsp; (c) 40 mA &nbsp; (d) 80 mA

**ANSWER: (a)**
```
  V0 = 200 sqrt(2)   ->   V_rms = 200 sqrt2 / sqrt2 = 200 V

  XC = 1/(omega C) = 1/(100 x 10^-6) = 10^4 ohm

  I_rms = 200 / 10^4 = 0.02 A = 20 mA
  (An AC ammeter always reads the RMS value.)
```

---

### Q11
If the frequency of the supply is doubled, the inductive reactance and the capacitive
reactance respectively become

(a) doubled, doubled &nbsp; (b) doubled, halved &nbsp;
(c) halved, doubled &nbsp; (d) unchanged, halved

**ANSWER: (b)**
```
  XL = 2 pi f L      -> proportional to f      -> DOUBLED
  XC = 1/(2 pi f C)  -> inversely prop. to f   -> HALVED
```

---

### Q12
A capacitor blocks DC because

(a) its resistance is infinite &nbsp; (b) `XC = 1/(2 pi f C)` becomes infinite at f = 0
(c) it stores charge &nbsp; (d) its resistance is zero

**ANSWER: (b)**

---

### Q13
A choke coil is preferred to a resistor for controlling AC current because

(a) it is cheaper &nbsp; (b) it consumes no power &nbsp;
(c) it increases the current &nbsp; (d) it works on DC as well

**ANSWER: (b)**
```
  In a pure inductor phi = 90 deg, so cos(phi) = 0 and P = 0.
  A resistor would waste the same energy as heat.
```

---

# PATTERN 3 — PHASE RELATIONS

### Q14
In a circuit the current lags behind the voltage by 90 degrees. The element is

(a) a pure resistor &nbsp; (b) a pure inductor &nbsp;
(c) a pure capacitor &nbsp; (d) an LCR circuit at resonance

**ANSWER: (b)** — "**ELI**": in **L**, **E** leads **I**, so the current lags.

---

### Q15
A voltage `v = 100 sin(100 t)` V produces a current `i = 5 sin(100 t + pi/3)` A in a
circuit. The circuit is

(a) purely resistive &nbsp; (b) inductive &nbsp;
(c) capacitive &nbsp; (d) at resonance

**ANSWER: (c)** — the current's phase angle is **larger**, so the current **leads**;
a leading current means the circuit is **capacitive** (XC > XL).

---

### Q16
In a series RL circuit the phase angle by which the current lags the voltage is given by

(a) `tan(phi) = R/XL` &nbsp; (b) `tan(phi) = XL/R` &nbsp;
(c) `tan(phi) = XL XC / R` &nbsp; (d) `tan(phi) = R/Z`

**ANSWER: (b)** — put XC = 0 in `tan(phi) = (XL - XC)/R`.

---

### Q17
The phase difference between the voltage across the inductor and the voltage across the
capacitor in a series LCR circuit is

(a) 0 &nbsp; (b) 45 deg &nbsp; (c) 90 deg &nbsp; (d) 180 deg

**ANSWER: (d)** — VL is 90 deg ahead of I and VC is 90 deg behind I, so they are
**exactly opposite** (180 deg apart). That is why they subtract.

---

# PATTERN 4 — IMPEDANCE OF A SERIES CIRCUIT

### Q18
A resistance of 3 ohm and an inductive reactance of 4 ohm are connected in series. The
impedance is

(a) 7 ohm &nbsp; (b) 1 ohm &nbsp; (c) 5 ohm &nbsp; (d) 12 ohm

**ANSWER: (c)**
```
  Z = sqrt(3^2 + 4^2) = sqrt(25) = 5 ohm
```
> **SHORTCUT:** memorise the triangles **3-4-5**, **6-8-10**, **5-12-13**.
> Exam setters use them constantly.

---

### Q19
In a series LCR circuit R = 6 ohm, XL = 9 ohm and XC = 1 ohm. The impedance is

(a) 16 ohm &nbsp; (b) 10 ohm &nbsp; (c) 14 ohm &nbsp; (d) 8 ohm

**ANSWER: (b)**
```
  XL - XC = 9 - 1 = 8

  Z = sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 ohm
```

---

### Q20
A 20 V AC source is applied to a series RL circuit. The voltage across R is 12 V. The
voltage across L is

(a) 8 V &nbsp; (b) 16 V &nbsp; (c) 32 V &nbsp; (d) 4 V

**ANSWER: (b)**
```
  V^2 = VR^2 + VL^2     ->   VL = sqrt(20^2 - 12^2) = sqrt(400 - 144) = 16 V
```
> **SHORTCUT:** voltages in an AC circuit add like the sides of a right
> triangle, **never** like ordinary numbers.

---

### Q21
In a series LCR circuit the voltages across R, L and C are 30 V, 70 V and 30 V
respectively. The supply voltage is

(a) 130 V &nbsp; (b) 50 V &nbsp; (c) 70 V &nbsp; (d) 100 V

**ANSWER: (b)**
```
  VL - VC = 70 - 30 = 40 V

  V = sqrt( 30^2 + 40^2 ) = sqrt(900 + 1600) = sqrt(2500) = 50 V
```

---

### Q22
A coil of resistance 30 ohm and inductive reactance 40 ohm is connected to a 200 V AC
source. The current is

(a) 4 A &nbsp; (b) 2.86 A &nbsp; (c) 5 A &nbsp; (d) 6.67 A

**ANSWER: (a)**
```
  Z = sqrt(30^2 + 40^2) = 50 ohm      ->   I = 200/50 = 4 A
```

---

# PATTERN 5 — RESONANCE

### Q23
The resonant frequency of a series circuit containing L = 1 H and C = 1 microfarad is
approximately

(a) 1000 Hz &nbsp; (b) 159 Hz &nbsp; (c) 500 Hz &nbsp; (d) 50 Hz

**ANSWER: (b)**
```
  L C = 1 x 10^-6      ->   sqrt(LC) = 10^-3

            1                  1
  f0 = ------------- = ------------------- = 159 Hz
        2 pi sqrt(LC)   6.283 x 10^-3
```
> **SHORTCUT:** first compute `sqrt(LC)`, then just divide 0.159 by it.
> (`f0 = 0.159 / sqrt(LC)`.)

---

### Q24
At resonance in a series LCR circuit

(a) impedance is maximum and current minimum
(b) impedance is minimum and current maximum
(c) both are maximum
(d) both are minimum

**ANSWER: (b)**
```
  XL = XC   ->   Z = R (minimum)   ->   I = V/R (maximum)
```
> **TRAP:** option (a) is true for a **parallel** LC (rejector) circuit,
> not for a series circuit. Check which one the question means.

---

### Q25
The power factor of a series LCR circuit at resonance is

(a) 0 &nbsp; (b) 0.5 &nbsp; (c) 1 &nbsp; (d) infinite

**ANSWER: (c)** — at resonance `phi = 0`, so `cos(phi) = 1` and `Z = R`.

---

### Q26
In a series LCR circuit at resonance, if L is doubled and C is halved, the resonant
frequency

(a) is doubled &nbsp; (b) is halved &nbsp; (c) becomes four times &nbsp; (d) is unchanged

**ANSWER: (d)**
```
  f0 depends on the PRODUCT L C.
  New product = (2L)(C/2) = L C , unchanged  ->  f0 unchanged.
```

---

### Q27
A series LCR circuit has R = 10 ohm, L = 2 H and C = 32 microfarad. Its quality factor is

(a) 2.5 &nbsp; (b) 25 &nbsp; (c) 250 &nbsp; (d) 12.5

**ANSWER: (b)**
```
       1      +- L -+      1      +-    2      -+
  Q = --- sqrt| --- | =  ---- sqrt| ----------- |
       R      +- C -+     10      +- 32 x 10^-6 -+

    = (1/10) sqrt(62500) = (1/10)(250) = 25
```

---

### Q28
The bandwidth of a series resonant circuit is

(a) `R/L` &nbsp; (b) `L/R` &nbsp; (c) `1/(RC)` &nbsp; (d) `R/C`

**ANSWER: (a)** — and `Q = omega0 / bandwidth = omega0 L / R`.

---

### Q29
In an LCR circuit R = 100 ohm. When the capacitor is removed the current lags the
voltage by 45 degrees; when the inductor is removed the current leads the voltage by
45 degrees. With both present and a 200 V supply, the power dissipated is

(a) 400 W &nbsp; (b) 200 W &nbsp; (c) 100 W &nbsp; (d) 50 W

**ANSWER: (a)**
```
  Capacitor removed -> the circuit is R-L, current lags:
        tan(45) = XL / R   ->   XL = R = 100 ohm

  Inductor removed  -> the circuit is R-C, current leads:
        tan(45) = XC / R   ->   XC = R = 100 ohm

  So XL = XC  ->  the full circuit is at RESONANCE  ->  Z = R = 100 ohm

  P = V^2 / R = (200)^2 / 100 = 400 W
```
> **SHORTCUT:** whenever XL comes out equal to XC, stop calculating —
> the circuit is at resonance, so `Z = R` and `P = V^2 / R`.

---

# PATTERN 6 — POWER AND POWER FACTOR

### Q30
An AC circuit draws 5 A from a 100 V supply with a phase angle of 60 degrees. The power
consumed is

(a) 500 W &nbsp; (b) 250 W &nbsp; (c) 433 W &nbsp; (d) 0 W

**ANSWER: (b)**
```
  P = V_rms I_rms cos(phi) = 100 x 5 x cos(60) = 100 x 5 x 0.5 = 250 W
```

---

### Q31
An inductor of reactance 1 ohm and a resistor of 2 ohm are connected in series across a
6 V (rms) AC source. The power dissipated in the circuit is

(a) 3 W &nbsp; (b) 8 W &nbsp; (c) 14.4 W &nbsp; (d) 18 W

**ANSWER: (c)**
```
  Z = sqrt(2^2 + 1^2) = sqrt(5) ohm

  I_rms = 6 / sqrt(5)     ->   I^2 = 36/5 = 7.2

  P = I^2 R = 7.2 x 2 = 14.4 W
```
> **SHORTCUT:** power is dissipated **only in R**. Use `P = I^2 R` and you
> never have to find the phase angle.

---

### Q32
The average power consumed by a pure capacitor over one complete cycle is

(a) `V I` &nbsp; (b) `V I / 2` &nbsp; (c) zero &nbsp; (d) `V^2 / XC`

**ANSWER: (c)** — `phi = 90 deg`, so `cos(phi) = 0`.

---

### Q33
The wattless component of a current of 5 A in a circuit with a phase angle of 30 degrees is

(a) 4.33 A &nbsp; (b) 2.5 A &nbsp; (c) 5 A &nbsp; (d) 0 A

**ANSWER: (b)**
```
  Wattless current = I sin(phi) = 5 x sin(30) = 5 x 0.5 = 2.5 A
  (4.33 A is I cos(phi), the POWER component - the trap option.)
```

---

### Q34
The power factor of a circuit having Z = 10 ohm and R = 8 ohm is

(a) 0.6 &nbsp; (b) 0.8 &nbsp; (c) 1.25 &nbsp; (d) 0.5

**ANSWER: (b)** — `cos(phi) = R/Z = 8/10 = 0.8`.

---

### Q35
The power factor of an inductive load is improved by connecting

(a) a resistor in series &nbsp; (b) an inductor in series &nbsp;
(c) a capacitor in parallel &nbsp; (d) a capacitor in series with the source only

**ANSWER: (c)** — the capacitor's leading current cancels part of the load's lagging
current, reducing phi.

---

# PATTERN 7 — TRANSFORMER

### Q36
A transformer has 500 turns in the primary and 5000 turns in the secondary. If 220 V is
applied to the primary, the secondary voltage is

(a) 22 V &nbsp; (b) 2200 V &nbsp; (c) 1100 V &nbsp; (d) 220 V

**ANSWER: (b)**
```
  Vs = Vp x (Ns/Np) = 220 x (5000/500) = 220 x 10 = 2200 V   (STEP-UP)
```

---

### Q37
In an ideal step-up transformer, which of the following is **increased**?

(a) power &nbsp; (b) current &nbsp; (c) voltage &nbsp; (d) frequency

**ANSWER: (c)** — voltage rises, current falls, **power and frequency are unchanged**.

---

### Q38
A step-up transformer converts 220 V to 2200 V. Its efficiency is 90 % and the secondary
current is 2 A. The primary current is

(a) 20 A &nbsp; (b) 22.2 A &nbsp; (c) 2 A &nbsp; (d) 18 A

**ANSWER: (b)**
```
  Output power = 2200 x 2 = 4400 W

  Input power = output / efficiency = 4400 / 0.90 = 4889 W

  Ip = 4889 / 220 = 22.2 A
```

---

### Q39
A transformer does **not** work on DC because

(a) DC is dangerous &nbsp; (b) there is no changing flux, so no emf is induced
(c) the core saturates &nbsp; (d) the resistance is too high

**ANSWER: (b)** — mutual induction needs `d(phi)/dt` to be non-zero.

---

### Q40
Eddy current loss in a transformer is reduced by

(a) using a laminated core &nbsp; (b) using thick copper wire &nbsp;
(c) using a soft iron core &nbsp; (d) winding coils on separate limbs

**ANSWER: (a)**
```
  laminated core  ->  EDDY CURRENT loss
  thick copper    ->  COPPER (I^2 R) loss
  soft iron       ->  HYSTERESIS loss
  coils on the same limb -> FLUX LEAKAGE
  Learn this pairing - it is asked as a matching question.
```

---

### Q41
Electric power is transmitted at high voltage because

(a) it is easier to generate &nbsp; (b) the line loss `I^2 R` becomes small
(c) high voltage is safer &nbsp; (d) the cables become thicker

**ANSWER: (b)** — `P_loss = (P/V)^2 R`, so the loss falls as `1/V^2`.

---

# PATTERN 8 — LC OSCILLATIONS

### Q42
An LC circuit has L = 20 mH and C = 50 microfarad. The frequency of oscillation is

(a) 159 Hz &nbsp; (b) 1000 Hz &nbsp; (c) 50 Hz &nbsp; (d) 318 Hz

**ANSWER: (a)**
```
  L C = 20x10^-3 x 50x10^-6 = 10^-6   ->   sqrt(LC) = 10^-3

  f0 = 1 / (2 pi x 10^-3) = 159 Hz
```

---

### Q43
In LC oscillations the quantity analogous to the **mass** of a spring-mass system is

(a) capacitance C &nbsp; (b) inductance L &nbsp; (c) charge q &nbsp; (d) resistance R

**ANSWER: (b)**
```
  L <-> m ,   1/C <-> k ,   q <-> x ,   i <-> v ,   R <-> friction
```

---

### Q44
In an ideal LC circuit, when the charge on the capacitor is maximum, the

(a) current is maximum &nbsp; (b) current is zero &nbsp;
(c) magnetic energy is maximum &nbsp; (d) total energy is zero

**ANSWER: (b)** — all the energy is electric at that instant, so `i = 0`.

---

# PATTERN 9 — GRAPHS AND CONCEPTUAL

### Q45
The graph of inductive reactance against frequency is

(a) a straight line through the origin &nbsp; (b) a rectangular hyperbola &nbsp;
(c) a horizontal line &nbsp; (d) a parabola

**ANSWER: (a)**
```
  XL = (2 pi L) f          -> straight line through origin, slope 2 pi L

    XL ^          /                XC ^ \
       |        /                     |  \
       |      /                       |    \___
       |    /                         |        ----____
       +--------> f                   +---------------> f
        (STRAIGHT LINE)                (HYPERBOLA, XC = 1/(2 pi C f))
```

---

### Q46
A moving-coil galvanometer connected to an AC source shows zero deflection because

(a) the current is too small &nbsp; (b) the average current over a cycle is zero
(c) the coil is damaged &nbsp; (d) AC cannot flow through a coil

**ANSWER: (b)** — a moving-coil meter responds to the mean value, which is zero for AC.
AC meters use the `i^2` (heating) effect instead and read the **rms** value.

---

### Q47
In a series LCR circuit at resonance, the voltage across the inductor compared with the
supply voltage is

(a) always smaller &nbsp; (b) equal &nbsp; (c) Q times larger &nbsp; (d) zero

**ANSWER: (c)** — `VL = VC = Q x V`. This "voltage magnification" is why VL can be far
larger than the supply voltage even though VL and VC cancel each other.

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+-----------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY                    |
  +-----------------------------------+-----------------------------------------+
  |  sin(314 t)                       |  f = 50 Hz , T = 0.02 s                 |
  +-----------------------------------+-----------------------------------------+
  |  "peak" given, "rms" asked        |  divide by 1.414  (x 0.707)             |
  +-----------------------------------+-----------------------------------------+
  |  "rms"/"mains" given, peak asked  |  multiply by 1.414                      |
  +-----------------------------------+-----------------------------------------+
  |  "average / mean value"           |  0.637 x peak   (half cycle)            |
  +-----------------------------------+-----------------------------------------+
  |  Any ammeter / voltmeter reading  |  it is the RMS value                    |
  +-----------------------------------+-----------------------------------------+
  |  "pure inductor" or "pure         |  POWER = 0. Answer it in one second.    |
  |   capacitor" + "power"            |                                         |
  +-----------------------------------+-----------------------------------------+
  |  Inductor + "phase"               |  current LAGS 90 deg   (ELI)            |
  +-----------------------------------+-----------------------------------------+
  |  Capacitor + "phase"              |  current LEADS 90 deg  (ICE)            |
  +-----------------------------------+-----------------------------------------+
  |  Any series AC circuit            |  Z = sqrt(R^2 + (XL - XC)^2)            |
  |                                   |  Voltages add like a right triangle.    |
  +-----------------------------------+-----------------------------------------+
  |  Numbers 3 & 4 / 6 & 8 / 5 & 12   |  Z = 5 / 10 / 13 . Don't use a          |
  |                                   |  calculator.                            |
  +-----------------------------------+-----------------------------------------+
  |  "XL = XC" anywhere in the stem   |  RESONANCE. Z = R, I = V/R,             |
  |                                   |  cos(phi) = 1, P = V^2 / R              |
  +-----------------------------------+-----------------------------------------+
  |  "resonant frequency"             |  f0 = 0.159 / sqrt(LC)                  |
  +-----------------------------------+-----------------------------------------+
  |  "L doubled, C halved"            |  LC unchanged -> f0 unchanged           |
  +-----------------------------------+-----------------------------------------+
  |  "quality factor" with L, C, R    |  Q = (1/R) sqrt(L/C)                    |
  +-----------------------------------+-----------------------------------------+
  |  "bandwidth"                      |  R / L                                  |
  +-----------------------------------+-----------------------------------------+
  |  "power dissipated" in any AC     |  P = I_rms^2 R . Only R burns power.    |
  |   circuit                         |                                         |
  +-----------------------------------+-----------------------------------------+
  |  "wattless current"               |  I sin(phi)   (NOT I cos phi)           |
  +-----------------------------------+-----------------------------------------+
  |  "improve the power factor"       |  capacitor IN PARALLEL                  |
  +-----------------------------------+-----------------------------------------+
  |  Transformer + voltages           |  Vs/Vp = Ns/Np ; current is INVERTED    |
  +-----------------------------------+-----------------------------------------+
  |  Transformer + "power" or         |  power and frequency NEVER change       |
  |  "frequency"                      |                                         |
  +-----------------------------------+-----------------------------------------+
  |  "laminated core"                 |  eddy current loss                      |
  |  "soft iron core"                 |  hysteresis loss                        |
  |  "thick copper wire"              |  copper (I^2 R) loss                    |
  +-----------------------------------+-----------------------------------------+
  |  LC oscillation frequency         |  same formula as resonance              |
  +-----------------------------------+-----------------------------------------+
  |  Unsure, and it is EAPCET         |  GUESS. There is no negative marking.   |
  +-----------------------------------+-----------------------------------------+
```

**Unit check before you tick the option:** microfarad means `x 10^-6`,
millihenry means `x 10^-3`. More marks are lost in this chapter to that one
conversion than to any physics mistake.
