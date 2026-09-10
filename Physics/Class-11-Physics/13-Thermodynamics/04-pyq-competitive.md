# Thermodynamics — JEE Main / AP EAPCET / TG EAPCET Questions

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
  AP / TG EAPCET  (Physics, 40 questions)  ->  2 to 4
  JEE Main        (Physics, 25 questions)  ->  1 to 3
```

Thermodynamics is one of the **highest-yielding** chapters in Physics for EAPCET,
because most questions are single-formula substitutions.

**Before every question, do these two things:**
```
  1.  Convert every temperature to KELVIN.
  2.  Ask "which of Q, W, dU is ZERO here?"  One of them almost always is.
```

---

# PATTERN 1 — First law, signs and dU

### Q1
110 J of heat is added to a gas which does 40 J of work. The increase in internal
energy is

(a) 150 J &nbsp; (b) 70 J &nbsp; (c) 110 J &nbsp; (d) 40 J

**ANSWER: (b)**
```
  dU = dQ - dW = 110 - 40 = 70 J
```

---

### Q2
A gas is compressed by doing 100 J of work on it, and in the process it releases 50 J
of heat. The change in internal energy is

(a) +50 J &nbsp; (b) −50 J &nbsp; (c) +150 J &nbsp; (d) −150 J

**ANSWER: (a)**
```
  Work done ON the gas  ->  dW = -100 J
  Heat released         ->  dQ =  -50 J

  dU = dQ - dW = -50 - (-100) = -50 + 100 = +50 J
```
> **SHORTCUT:** Write the signs down before substituting. In Physics, W is the work
> done **BY** the gas, so "work done on the gas" always carries a minus.

---

### Q3
In a cyclic process, 400 J of heat is absorbed from the source and 300 J is rejected
to the sink. The net work done by the gas is

(a) 700 J &nbsp; (b) 100 J &nbsp; (c) 0 &nbsp; (d) 300 J

**ANSWER: (b)**
```
  Cyclic  ->  dU = 0  ->  W = Q(net) = 400 - 300 = 100 J
```

---

### Q4
500 calories of heat is supplied to a system which does 400 J of external work. The
increase in internal energy is (1 cal = 4.2 J)

(a) 1700 J &nbsp; (b) 2100 J &nbsp; (c) 2500 J &nbsp; (d) 100 J

**ANSWER: (a)**
```
  dQ = 500 x 4.2 = 2100 J
  dU = 2100 - 400 = 1700 J
```
> **SHORTCUT:** Whenever you see "calories" mixed with "joules", convert FIRST.

---

### Q5
Which of the following is a state function?

(a) Heat &nbsp; (b) Work &nbsp; (c) Internal energy &nbsp; (d) Both heat and work

**ANSWER: (c)** Internal energy depends only on the state (on T for an ideal gas).
Q and W depend on the path.

---

# PATTERN 2 — Work as the area under the P-V curve

### Q6
A gas expands at a constant pressure of `1 x 10^5 Pa` from `2 x 10^-3 m^3` to
`5 x 10^-3 m^3`. The work done is

(a) 300 J &nbsp; (b) 30 J &nbsp; (c) 3 J &nbsp; (d) 3000 J

**ANSWER: (a)**
```
  W = P (V2 - V1) = 1e5 x (5e-3 - 2e-3) = 1e5 x 3e-3 = 300 J
```

---

### Q7
A gas expands from 1 litre to 3 litres against a constant atmospheric pressure. The
work done is (1 atm = 1.013 x 10^5 Pa)

(a) 202.6 J &nbsp; (b) 101.3 J &nbsp; (c) 2026 J &nbsp; (d) 2 J

**ANSWER: (a)**
```
  dV = 2 litres = 2 x 10^-3 m^3
  W  = 1.013e5 x 2e-3 = 202.6 J
```
> **SHORTCUT:** `1 litre-atm = 101.3 J`. Two litre-atm = 202.6 J, straight away.

---

### Q8
For the process shown, the work done by the gas from A to B to C is

```
     P (x 10^5 Pa)
     ^
   2 |  A---------B
     |  |         |
   1 |  |         C
     +--+---------+------> V (x 10^-3 m^3)
        1         4
```

(a) 600 J &nbsp; (b) 900 J &nbsp; (c) 300 J &nbsp; (d) 0

**ANSWER: (a)**
```
  A -> B  isobaric:   W = 2e5 x (4e-3 - 1e-3) = 2e5 x 3e-3 = 600 J
  B -> C  isochoric:  W = 0
  TOTAL = 600 J
```
> **SHORTCUT:** A **vertical** line on a P-V graph always gives zero work. Ignore it.

---

### Q9
A gas is taken round the cycle shown. The net work done in one cycle is

```
     P (x 10^5 Pa)
     ^
   3 |   D---------C
     |   |         |
   1 |   A---------B
     +---+---------+------> V (x 10^-3 m^3)
         1         3
```
(path A -> B -> C -> D -> A)

(a) +400 J &nbsp; (b) −400 J &nbsp; (c) +800 J &nbsp; (d) 0

**ANSWER: (a)**
```
  Area of the rectangle = (3e5 - 1e5) x (3e-3 - 1e-3) = 2e5 x 2e-3 = 400 J

  A -> B -> C -> D -> A runs CLOCKWISE  ->  W is POSITIVE = +400 J
```
> **SHORTCUT:** Never add the four sides. Compute the enclosed area, then read the
> sign off the direction: **clockwise = positive = engine**.

---

### Q10
In a cyclic process the loop on the P-V diagram is traced **anticlockwise**. Then

(a) work is done by the gas &nbsp; (b) work is done on the gas
(c) no work is done &nbsp; (d) dU is not zero

**ANSWER: (b)** Anticlockwise means net work is negative — work is done ON the gas.
This is a refrigerator, not an engine.

---

# PATTERN 3 — Isothermal process

### Q11
One mole of an ideal gas at 300 K expands isothermally to twice its volume. The work
done is (R = 8.314)

(a) 1728 J &nbsp; (b) 2494 J &nbsp; (c) 5744 J &nbsp; (d) 864 J

**ANSWER: (a)**
```
  W = n R T ln(V2/V1) = 1 x 8.314 x 300 x ln 2
    = 2494.2 x 0.693 = 1728 J
```

---

### Q12
One mole of an ideal gas at 300 K expands isothermally until its volume becomes
10 times the original. The work done is

(a) 1728 J &nbsp; (b) 5744 J &nbsp; (c) 24942 J &nbsp; (d) 2303 J

**ANSWER: (b)**
```
  W = 8.314 x 300 x ln 10 = 2494.2 x 2.303 = 5744 J
```
> **SHORTCUT:** `nRT` first, then multiply by the log. `ln 2 = 0.693`,
> `ln 3 = 1.099`, `ln 10 = 2.303`.

---

### Q13
In an isothermal expansion of an ideal gas

(a) dU = 0, Q = W &nbsp; (b) Q = 0, dU = −W &nbsp; (c) W = 0 &nbsp; (d) Q = 0 and W = 0

**ANSWER: (a)** T is constant, so dU = 0, and the first law gives Q = W.

---

### Q14
The molar specific heat of a gas in an isothermal process is

(a) zero &nbsp; (b) R &nbsp; (c) Cv &nbsp; (d) infinity

**ANSWER: (d)**
```
  C = dQ/(n dT). Here dT = 0 while dQ is not zero  ->  C -> infinity.
```

---

### Q15
An ideal gas at pressure P and volume V expands isothermally to volume 4V. The final
pressure is

(a) 4P &nbsp; (b) P/4 &nbsp; (c) P/2 &nbsp; (d) 2P

**ANSWER: (b)** `P1 V1 = P2 V2` gives `P2 = P V / 4V = P/4`.

---

# PATTERN 4 — Adiabatic process

### Q16
A diatomic gas (gamma = 1.4) is compressed adiabatically to 1/32 of its original
volume. If the initial temperature is T, the final temperature is

(a) 2T &nbsp; (b) 4T &nbsp; (c) 8T &nbsp; (d) 32T

**ANSWER: (b)**
```
  T V^(g-1) = const     ->    T2 = T1 (V1/V2)^(g-1)
                             = T (32)^0.4
  32 = 2^5 ,  so (2^5)^0.4 = 2^2 = 4

  T2 = 4T
```
> **SHORTCUT:** In adiabatic MCQs the numbers are ALWAYS chosen so the power comes
> out whole. Write the volume ratio as a power of 2 or 3 first.

---

### Q17
An ideal monatomic gas at 27 °C is compressed adiabatically to 8/27 of its original
volume. The rise in temperature is

(a) 375 K &nbsp; (b) 675 K &nbsp; (c) 300 K &nbsp; (d) 275 K

**ANSWER: (a)**
```
  Monatomic:  gamma = 5/3 ,  gamma - 1 = 2/3
  T1 = 300 K

                        +- 27 -+ (2/3)      +- 3 -+ 2
  T2 = T1 (V1/V2)^(2/3) = 300 x | ---- |  = 300 x | --- |  = 300 x 2.25
                        +-  8 -+              +- 2 -+
     = 675 K

  RISE  =  675 - 300  =  375 K
```
> **TRAP:** The question asks for the **rise**, not the final temperature. (b) is the
> trap answer.

---

### Q18
In an adiabatic process, which of the following is correct?

(a) Q = 0, dU = −W &nbsp; (b) dU = 0 &nbsp; (c) W = 0 &nbsp; (d) Q = W

**ANSWER: (a)**

---

### Q19
The relation between T and P for an adiabatic process is

(a) `T P^gamma = const` &nbsp; (b) `T^gamma P^(1-gamma) = const`
(c) `T^(gamma-1) P = const` &nbsp; (d) `T P = const`

**ANSWER: (b)**
```
  From PV^g = c and PV = nRT :

     P V^g = c ,  V = nRT/P    ->   P (nRT/P)^g = c
                               ->   T^g P^(1-g) = constant
```

---

### Q20
The slope of an adiabatic curve compared with that of an isothermal curve at the same
point is

(a) equal &nbsp; (b) gamma times steeper &nbsp; (c) 1/gamma times &nbsp; (d) zero

**ANSWER: (b)**
```
  Isothermal:  PV = c    ->  dP/dV = -P/V
  Adiabatic:   PV^g = c  ->  dP/dV = -gamma P/V

  Ratio = gamma  ( > 1 )   ->   the adiabat is STEEPER.
```

---

### Q21
The work done in an adiabatic expansion from (P1, V1) to (P2, V2) is

(a) `(P1V1 - P2V2)/(gamma - 1)` &nbsp; (b) `(P2V2 - P1V1)/(gamma - 1)`
(c) `nRT ln(V2/V1)` &nbsp; (d) `P(V2 - V1)`

**ANSWER: (a)**

---

### Q22
A gas undergoes free expansion into a vacuum inside a rigid insulated container. Then

(a) T increases &nbsp; (b) T decreases &nbsp; (c) T stays the same &nbsp; (d) W is positive

**ANSWER: (c)**
```
  Q = 0 (insulated) ,  W = 0 (expands against nothing)
  ->  dU = 0  ->  for an ideal gas, T is UNCHANGED.
```
> **TRAP:** Free expansion is adiabatic but **not quasi-static**, so
> `T V^(g-1) = const` does NOT apply. Anyone who uses it gets (b) and loses the mark.

---

# PATTERN 5 — Cp, Cv, gamma and internal energy

### Q23
For a gas with `gamma = 1.4`, Cv equals

(a) 2.5 R &nbsp; (b) 1.5 R &nbsp; (c) 3.5 R &nbsp; (d) R

**ANSWER: (a)**
```
       R           R
  Cv = ------- = ------- = 2.5 R
       g - 1      0.4
```

---

### Q24
The value of `Cp - Cv` for one mole of an ideal gas is

(a) R &nbsp; (b) R/2 &nbsp; (c) 2R &nbsp; (d) 0

**ANSWER: (a)** Mayer's relation.

---

### Q25
The internal energy of 2 moles of a monatomic ideal gas at 300 K is

(a) 7482 J &nbsp; (b) 4988 J &nbsp; (c) 12470 J &nbsp; (d) 2494 J

**ANSWER: (a)**
```
  U = (3/2) n R T = 1.5 x 2 x 8.314 x 300 = 7482.6 J
```

---

### Q26
One mole of helium is mixed with one mole of oxygen. The gamma of the mixture is

(a) 1.40 &nbsp; (b) 1.50 &nbsp; (c) 1.67 &nbsp; (d) 1.33

**ANSWER: (b)**
```
  He (mono):  Cv = 1.5 R        O2 (di):  Cv = 2.5 R

              n1 Cv1 + n2 Cv2      1(1.5R) + 1(2.5R)
  Cv(mix) =  -----------------  =  -----------------  =  2 R
                  n1 + n2                  2

  Cp(mix) =  Cv + R  =  3 R

  gamma   =  3R / 2R  =  1.5
```
> **SHORTCUT:** Mix equal moles of a monatomic and a diatomic gas and gamma is
> always exactly **1.5**. Worth remembering.

---

### Q27
For a gas, the degrees of freedom f = 5. Its gamma is

(a) 1.67 &nbsp; (b) 1.40 &nbsp; (c) 1.33 &nbsp; (d) 1.50

**ANSWER: (b)** `gamma = 1 + 2/f = 1 + 2/5 = 1.4` (diatomic).

---

### Q28
The molar heat capacity of a monatomic gas in the process `P V^2 = constant` is

(a) 0.5 R &nbsp; (b) 1.5 R &nbsp; (c) 2.5 R &nbsp; (d) zero

**ANSWER: (a)**
```
  For P V^n = constant:      C  =  Cv  +  R / (1 - n)

  Monatomic Cv = 1.5R , n = 2:

      C = 1.5R + R/(1 - 2) = 1.5R - R = 0.5 R
```
> **SHORTCUT:** The same formula covers everything: `n = 0` gives Cp, `n = 1` gives
> infinity (isothermal), `n = gamma` gives 0 (adiabatic), `n = infinity` gives Cv.

---

# PATTERN 6 — Heat engine efficiency

### Q29
An engine takes in 1000 J and rejects 750 J per cycle. Its efficiency is

(a) 25% &nbsp; (b) 33% &nbsp; (c) 75% &nbsp; (d) 50%

**ANSWER: (a)**
```
  eta = 1 - Q2/Q1 = 1 - 750/1000 = 0.25 = 25 %
```

---

### Q30
An engine of efficiency 20% delivers 400 J of work per cycle. The heat absorbed per
cycle is

(a) 2000 J &nbsp; (b) 80 J &nbsp; (c) 1600 J &nbsp; (d) 500 J

**ANSWER: (a)** `Q1 = W/eta = 400/0.20 = 2000 J`

---

### Q31
A Carnot engine works between 227 °C and 27 °C. Its efficiency is

(a) 88% &nbsp; (b) 40% &nbsp; (c) 60% &nbsp; (d) 20%

**ANSWER: (b)**
```
  T1 = 500 K , T2 = 300 K
  eta = 1 - 300/500 = 0.4 = 40 %
```
> **TRAP:** Using 227 and 27 directly gives 88%, which is option (a). Always convert
> to kelvin.

---

### Q32
A Carnot engine has efficiency 40% with the sink at 300 K. To raise the efficiency to
60%, the source temperature must be increased by

(a) 250 K &nbsp; (b) 750 K &nbsp; (c) 150 K &nbsp; (d) 500 K

**ANSWER: (a)**
```
  0.4 = 1 - 300/T1   ->  T1  = 300/0.6 = 500 K
  0.6 = 1 - 300/T1'  ->  T1' = 300/0.4 = 750 K

  Increase = 750 - 500 = 250 K
```

---

### Q33
A Carnot engine of efficiency 50% has its sink at 300 K. To make the efficiency 70%
by changing the sink only, the new sink temperature must be

(a) 180 K &nbsp; (b) 210 K &nbsp; (c) 250 K &nbsp; (d) 150 K

**ANSWER: (a)**
```
  0.5 = 1 - 300/T1   ->  T1 = 600 K
  0.7 = 1 - T2'/600  ->  T2' = 0.3 x 600 = 180 K
```

---

### Q34
An inventor claims an engine working between 500 K and 300 K with an efficiency of
50%. The claim is

(a) valid &nbsp; (b) invalid &nbsp; (c) valid only for an ideal gas &nbsp; (d) cannot be judged

**ANSWER: (b)**
```
  Maximum possible (Carnot) efficiency = 1 - 300/500 = 40 %.
  A claim of 50% exceeds it, violating Carnot's theorem.
```
> **SHORTCUT:** Any claimed efficiency **above** `1 - T2/T1` is automatically false.

---

### Q35
For a Carnot engine, `Q1/Q2` equals

(a) `T1/T2` &nbsp; (b) `T2/T1` &nbsp; (c) `(T1 - T2)/T1` &nbsp; (d) `1`

**ANSWER: (a)** This is the defining Carnot relation `Q1/Q2 = T1/T2`.

---

# PATTERN 7 — Refrigerator and coefficient of performance

### Q36
A refrigerator with a coefficient of performance 5 removes 500 J of heat from the
food per cycle. The work supplied is

(a) 100 J &nbsp; (b) 2500 J &nbsp; (c) 600 J &nbsp; (d) 400 J

**ANSWER: (a)** `W = Q2/alpha = 500/5 = 100 J`

---

### Q37
A Carnot refrigerator maintains −3 °C inside while the room is at 27 °C. Its
coefficient of performance is

(a) 9 &nbsp; (b) 10 &nbsp; (c) 0.1 &nbsp; (d) 6.5

**ANSWER: (a)**
```
  T2 = 270 K , T1 = 300 K

              T2          270       270
  alpha =  --------  =  -------  =  ----  =  9
            T1 - T2     300-270      30
```

---

### Q38
If the efficiency of a Carnot engine is 25%, the coefficient of performance of the
same engine run as a refrigerator is

(a) 3 &nbsp; (b) 4 &nbsp; (c) 0.25 &nbsp; (d) 1.33

**ANSWER: (a)**
```
           1 - eta      1 - 0.25      0.75
  alpha =  --------  =  ---------  =  ------  =  3
             eta          0.25         0.25
```

---

### Q39
Leaving a refrigerator door open in a closed room will

(a) cool the room &nbsp; (b) warm the room &nbsp; (c) not change the temperature
(d) first cool then warm

**ANSWER: (b)** The net heat added to the room per cycle equals the compressor work W,
because Q1 = Q2 + W is dumped back into the same room.

---

# PATTERN 8 — Second law and reversibility (concept MCQs)

### Q40
The Kelvin-Planck statement of the second law implies

(a) heat cannot flow from cold to hot &nbsp; (b) no engine can be 100% efficient
(c) energy is conserved &nbsp; (d) entropy always decreases

**ANSWER: (b)**

---

### Q41
Which of the following is a reversible process?

(a) Free expansion &nbsp; (b) Diffusion of gases &nbsp; (c) A very slow isothermal
expansion with no friction &nbsp; (d) A bullet stopping in a block

**ANSWER: (c)** Reversibility needs a quasi-static (infinitely slow) process with no
dissipative forces.

---

### Q42
The zeroth law of thermodynamics leads to the concept of

(a) internal energy &nbsp; (b) work &nbsp; (c) temperature &nbsp; (d) entropy

**ANSWER: (c)**

---

### Q43
Which quantity remains constant in a cyclic process?

(a) Heat &nbsp; (b) Work &nbsp; (c) Internal energy &nbsp; (d) Pressure

**ANSWER: (c)** After a full cycle the system returns to its initial state, so
`dU = 0`.

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
+----------------------------------+------------------------------------------+
|  IF YOU SEE THIS ...             |  DO THIS IMMEDIATELY                     |
+----------------------------------+------------------------------------------+
|  Any temperature in degrees C    |  ADD 273. Do it before anything else.    |
+----------------------------------+------------------------------------------+
|  "isothermal"                    |  Write dU = 0 , so Q = W.                |
|                                  |  W = nRT ln(V2/V1)                       |
+----------------------------------+------------------------------------------+
|  "adiabatic" / "sudden" /        |  Write Q = 0 , so dU = -W.               |
|  "insulated"                     |  Use PV^g = c , TV^(g-1) = c             |
+----------------------------------+------------------------------------------+
|  "constant pressure" / "isobaric"|  W = P dV = nR dT , dQ = n Cp dT         |
+----------------------------------+------------------------------------------+
|  "rigid vessel" / "constant      |  W = 0 straight away. dQ = dU = n Cv dT  |
|  volume" / "isochoric"           |                                          |
+----------------------------------+------------------------------------------+
|  "cyclic" / "returns to initial  |  dU = 0 , so Q = W = AREA of the loop.   |
|  state" / a closed loop drawn    |  Clockwise +ve , anticlockwise -ve.      |
+----------------------------------+------------------------------------------+
|  A VERTICAL line on a P-V graph  |  W = 0 for that leg. Skip it.            |
+----------------------------------+------------------------------------------+
|  A HORIZONTAL line on P-V        |  W = P x (change in V). Rectangle area.  |
+----------------------------------+------------------------------------------+
|  "free expansion into vacuum"    |  Q = 0, W = 0, dU = 0, T UNCHANGED.      |
|                                  |  Do NOT use PV^g = constant.             |
+----------------------------------+------------------------------------------+
|  "Carnot" + two temperatures     |  eta = 1 - T2/T1 . Nothing else needed.  |
+----------------------------------+------------------------------------------+
|  "efficiency" + Q1 and Q2        |  eta = 1 - Q2/Q1 , W = Q1 - Q2           |
+----------------------------------+------------------------------------------+
|  "coefficient of performance"    |  alpha = Q2/W = T2/(T1-T2) = (1-eta)/eta |
+----------------------------------+------------------------------------------+
|  A claimed efficiency            |  Compare with 1 - T2/T1. Bigger => FALSE |
+----------------------------------+------------------------------------------+
|  gamma given as 1.67 / 1.4 / 1.33|  monatomic / diatomic / polyatomic       |
+----------------------------------+------------------------------------------+
|  "Cv" or "Cp" asked from gamma   |  Cv = R/(g-1) , Cp = gR/(g-1)            |
+----------------------------------+------------------------------------------+
|  P V^n = constant (any n)        |  C = Cv + R/(1-n)                        |
+----------------------------------+------------------------------------------+
|  Volume ratio like 8, 27, 32     |  Write it as 2^k or 3^k FIRST, then the  |
|                                  |  adiabatic power becomes a whole number. |
+----------------------------------+------------------------------------------+
|  Answer comes out with eta > 1   |  You made a mistake. Recheck the kelvins.|
+----------------------------------+------------------------------------------+
```

**Last line of defence for EAPCET (no negative marking):** if a question gives you
two temperatures and asks anything about an engine, put `1 - T2/T1` on the answer
sheet. It is right far more often than chance.
