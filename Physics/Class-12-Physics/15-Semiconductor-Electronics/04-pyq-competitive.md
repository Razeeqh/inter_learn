# Semiconductor Electronics — JEE Main / AP EAPCET / TG EAPCET Questions

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
  JEE Main        (Physics, 25 questions)  ->  1 to 2
```

**This is one of the BEST chapters in the syllabus for competitive exams.**
Most questions are one-line recall (band gap, carrier type, ripple factor) or
one-step arithmetic (alpha to beta, gain). There is almost no long calculation.

---

# PATTERN 1 — Classify a material from its band gap

### Q1
A material has a forbidden energy gap of 6 eV. It is

(a) a conductor &nbsp; (b) a semiconductor &nbsp; (c) an insulator &nbsp; (d) a superconductor

**ANSWER: (c)**
```
   Eg  >  3 eV   ->   INSULATOR
   (6 eV is the band gap of diamond.)
```

---

### Q2
The energy band gaps of Ge and Si respectively are

(a) 1.1 eV and 0.72 eV &nbsp; (b) 0.72 eV and 1.1 eV &nbsp; (c) 0.3 eV and 0.7 eV &nbsp; (d) 1.1 eV and 3 eV

**ANSWER: (b)**
```
   Ge  ->  0.72 eV        Si  ->  1.1 eV

   Do NOT confuse these with the BARRIER (knee) voltages,
   which are Ge 0.3 V and Si 0.7 V.
```

> **SHORTCUT:** Ge is always the SMALLER number in every pair
> (0.72 < 1.1 for band gap, 0.3 < 0.7 for knee voltage).

---

### Q3
In a conductor the valence band and the conduction band

(a) are separated by 1 eV &nbsp; (b) are separated by more than 3 eV &nbsp; (c) overlap &nbsp; (d) are both empty

**ANSWER: (c)**
```
   In a metal the two bands OVERLAP, so Eg = 0 and free electrons
   are always available.
```

---

### Q4
A pure semiconductor at absolute zero behaves as

(a) a conductor &nbsp; (b) a perfect insulator &nbsp; (c) a superconductor &nbsp; (d) a p-type material

**ANSWER: (b)**
```
   At 0 K all covalent bonds are intact, the valence band is full and
   the conduction band is empty. No carriers -> perfect insulator.
```

---

### Q5
The band gap of a semiconductor is 1.24 eV. The longest wavelength of light
that can generate an electron-hole pair in it is about

(a) 500 nm &nbsp; (b) 1000 nm &nbsp; (c) 1500 nm &nbsp; (d) 2000 nm

**ANSWER: (b)**
```
                    1240
   lambda (nm)  =  --------      with Eg in eV
                    Eg (eV)

                    1240
                =  --------   =   1000  nm
                     1.24
```

> **SHORTCUT:** Memorise **lambda(nm) = 1240 / Eg(eV)**. It solves every
> LED, photodiode and solar-cell wavelength question in ten seconds.

---

# PATTERN 2 — Intrinsic vs extrinsic, doping and carrier type

### Q6
Silicon is doped with arsenic. The resulting material is

(a) p-type, majority carriers are holes
(b) n-type, majority carriers are electrons
(c) intrinsic
(d) p-type, majority carriers are electrons

**ANSWER: (b)**
```
   Arsenic (As) is PENTAVALENT  ->  DONOR  ->  n-type
   Majority carriers are ELECTRONS.
```

> **SHORTCUT:** Count the valence electrons of the dopant.
> **5 -> n-type (electrons). 3 -> p-type (holes).** That single rule
> answers most doping MCQs.

---

### Q7
Which of the following, when added to germanium, produces a p-type
semiconductor?

(a) Phosphorus &nbsp; (b) Antimony &nbsp; (c) Indium &nbsp; (d) Arsenic

**ANSWER: (c)**
```
   Indium is TRIVALENT  ->  ACCEPTOR  ->  p-type.
   P, Sb and As are all pentavalent.

   Pentavalent group : P, As, Sb, Bi
   Trivalent group   : B, Al, In, Ga
```

---

### Q8
In an n-type semiconductor, the donor energy level lies

(a) just above the valence band
(b) just below the conduction band
(c) in the middle of the forbidden gap
(d) inside the valence band

**ANSWER: (b)**
```
   DONOR level  ->  just BELOW the conduction band  (n-type)
   ACCEPTOR level -> just ABOVE the valence band    (p-type)
```

> **SHORTCUT:** "Donor gives an electron UP to the conduction band, so it
> sits near the TOP. Acceptor takes an electron UP from the valence band,
> so it sits near the BOTTOM."

---

### Q9
An n-type semiconductor crystal is

(a) negatively charged &nbsp; (b) positively charged &nbsp; (c) electrically neutral &nbsp; (d) charged only when biased

**ANSWER: (c)**
```
   Doping does not add net charge. Every donor atom contributes one
   free electron AND one extra positive nuclear charge.
   The crystal remains NEUTRAL.
```

---

### Q10
In a p-type semiconductor the minority carriers are

(a) holes &nbsp; (b) electrons &nbsp; (c) positive ions &nbsp; (d) negative ions

**ANSWER: (b)**
```
   p-type :  majority = HOLES ,  minority = ELECTRONS
   n-type :  majority = ELECTRONS , minority = HOLES
```

---

# PATTERN 3 — Mass action law and conductivity numericals

### Q11
For a silicon sample n(i) = 1.5 x 10^16 m^-3. If it is doped so that
n(e) = 4.5 x 10^22 m^-3, the hole concentration is

(a) 5 x 10^9 m^-3 &nbsp; (b) 5 x 10^10 m^-3 &nbsp; (c) 1.5 x 10^16 m^-3 &nbsp; (d) 4.5 x 10^22 m^-3

**ANSWER: (a)**
```
                 n(i)^2        ( 1.5 x 10^16 )^2       2.25 x 10^32
   n(h)   =   ------------  =  ------------------  =  ---------------
                  n(e)           4.5 x 10^22           4.5  x 10^22

          =   0.5 x 10^10   =   5 x 10^9   m^-3
```

---

### Q12
In a doped semiconductor n(e) = 8 x 10^12 m^-3 and n(h) = 5 x 10^12 m^-3.
The intrinsic concentration n(i) is

(a) 4 x 10^12 m^-3 &nbsp; (b) 6.32 x 10^12 m^-3 &nbsp; (c) 13 x 10^12 m^-3 &nbsp; (d) 3 x 10^12 m^-3

**ANSWER: (b)**
```
   n(i)^2  =  n(e) x n(h)  =  ( 8 x 10^12 )( 5 x 10^12 )

           =  40 x 10^24

   n(i)    =  sqrt( 40 x 10^24 )  =  6.32 x 10^12  m^-3
```

---

### Q13
A pure germanium sample has n(i) = 2.4 x 10^19 m^-3,
mu(e) = 0.39 m^2 V^-1 s^-1 and mu(h) = 0.19 m^2 V^-1 s^-1. Its conductivity is

(a) 1.12 S/m &nbsp; (b) 2.23 S/m &nbsp; (c) 3.84 S/m &nbsp; (d) 5.60 S/m

**ANSWER: (b)**
```
   sigma  =  e  n(i)  [ mu(e)  +  mu(h) ]

          =  (1.6 x 10^-19)(2.4 x 10^19)(0.39 + 0.19)

          =  3.84  x  0.58

          =  2.23   S/m
```

> **SHORTCUT:** 1.6 x 2.4 = 3.84 and the powers of ten cancel exactly.
> Look for that cancellation first; it saves the whole calculation.

---

### Q14
When the temperature of a pure semiconductor is increased, its

(a) resistance increases and conductivity decreases
(b) resistance decreases and conductivity increases
(c) both increase
(d) both decrease

**ANSWER: (b)**
```
   Heating breaks more bonds  ->  more electron-hole pairs
   ->  more carriers  ->  conductivity UP, resistance DOWN.

   Semiconductor: NEGATIVE temperature coefficient.
   Metal:         POSITIVE temperature coefficient.
```

---

# PATTERN 4 — p-n junction and biasing

### Q15
The depletion region of a p-n junction contains

(a) free electrons only
(b) holes only
(c) immobile ions and no free carriers
(d) neither ions nor carriers

**ANSWER: (c)**
```
   The depletion region is emptied of MOBILE carriers but is full of
   FIXED, charged, immobile ions: negative acceptor ions on the p
   side and positive donor ions on the n side.
```

---

### Q16
When a p-n junction is forward biased, the width of the depletion layer

(a) increases &nbsp; (b) decreases &nbsp; (c) remains the same &nbsp; (d) becomes zero

**ANSWER: (b)**
```
   FORWARD bias  ->  barrier reduced  ->  depletion layer THINNER
   REVERSE bias  ->  barrier raised   ->  depletion layer WIDER
```

> **SHORTCUT:** "Forward = Fewer (thinner). Reverse = Raised (wider)."

---

### Q17
The current in a reverse-biased p-n junction diode is due to

(a) majority carriers &nbsp; (b) minority carriers &nbsp; (c) both equally &nbsp; (d) no carriers

**ANSWER: (b)**
```
   Reverse bias blocks the majority carriers completely.
   Only the few MINORITY carriers drift across, giving the
   small reverse saturation current.
```

---

### Q18
In an unbiased p-n junction the net current is zero because

(a) there are no carriers
(b) the diffusion current equals the drift current
(c) the barrier potential is zero
(d) both currents are zero

**ANSWER: (b)**
```
   diffusion current (majority, p to n)
        =  drift current (minority, n to p)
   ->  NET current = 0 at equilibrium.
```

---

### Q19
A silicon diode is connected in series with a 2 kilo-ohm resistor and a 10 V
battery in forward bias. The current in the circuit is

(a) 5 mA &nbsp; (b) 4.65 mA &nbsp; (c) 4.35 mA &nbsp; (d) 3.5 mA

**ANSWER: (b)**
```
   For Si the knee voltage is 0.7 V.

              10  -  0.7          9.3
     I   =   -------------  =  ---------  =  4.65 x 10^-3 A  =  4.65 mA
                 2000            2000
```

> **SHORTCUT:** Always subtract 0.7 V (Si) or 0.3 V (Ge) BEFORE dividing.
> If the question says "ideal diode", subtract nothing.

---

### Q20
In the V-I characteristic of a diode, the knee voltage is the forward
voltage at which

(a) the diode breaks down
(b) the current begins to increase rapidly
(c) the current becomes zero
(d) the diode becomes reverse biased

**ANSWER: (b)**
```
   KNEE (cut-in, threshold) voltage:  Ge 0.3 V , Si 0.7 V.
   BREAKDOWN voltage is on the REVERSE side - do not mix them up.
```

---

### Q21
The dynamic resistance of a diode whose current changes from 10 mA to 20 mA
when the voltage changes from 0.70 V to 0.72 V is

(a) 0.5 ohm &nbsp; (b) 1 ohm &nbsp; (c) 2 ohm &nbsp; (d) 20 ohm

**ANSWER: (c)**
```
              dV          0.72 - 0.70          0.02
   r(d)  =  ------  =  -----------------  =  ------------  =  2 ohm
              dI        (20 - 10) x 10^-3     10 x 10^-3
```

---

# PATTERN 5 — Rectifiers

### Q22
The ripple factor of a half-wave rectifier is

(a) 0.48 &nbsp; (b) 1.21 &nbsp; (c) 0.81 &nbsp; (d) 1.11

**ANSWER: (b)**
```
   Half-wave  r = 1.21 ,  efficiency 40.6 %
   Full-wave  r = 0.48 ,  efficiency 81.2 %
```

> **SHORTCUT:** Remember the pair **"1.21 / 40.6"** for half wave and
> **"0.48 / 81.2"** for full wave. Note 81.2 is exactly double 40.6.

---

### Q23
The input frequency of a full-wave rectifier is 50 Hz. The frequency of the
output ripple is

(a) 25 Hz &nbsp; (b) 50 Hz &nbsp; (c) 100 Hz &nbsp; (d) 200 Hz

**ANSWER: (c)**
```
   FULL-wave output frequency  =  2 f  =  2 x 50  =  100 Hz
   HALF-wave output frequency  =  f    =  50 Hz
```

---

### Q24
The peak current in a full-wave rectifier is 10 mA. The DC current is

(a) 3.18 mA &nbsp; (b) 5 mA &nbsp; (c) 6.37 mA &nbsp; (d) 7.07 mA

**ANSWER: (c)**
```
                2 I(m)        2 x 10          20
   I(dc)   =  ----------  =  ---------  =  ---------  =  6.37 mA
                  pi            3.14         3.14

   (For a HALF-wave rectifier it would be 10/3.14 = 3.18 mA,
    which is option (a) - the standard trap.)
```

---

### Q25
In a centre-tapped full-wave rectifier the peak secondary voltage between
either end and the centre tap is V(m). The peak inverse voltage across each
diode is

(a) V(m) / 2 &nbsp; (b) V(m) &nbsp; (c) 2 V(m) &nbsp; (d) 4 V(m)

**ANSWER: (c)**
```
   Centre-tap full wave :  PIV  =  2 V(m)
   Bridge full wave     :  PIV  =  V(m)
   Half wave            :  PIV  =  V(m)
```

---

### Q26
A capacitor filter is connected in a rectifier circuit

(a) in series with the load
(b) in parallel with the load
(c) in series with the diode
(d) across the transformer primary

**ANSWER: (b)**
```
   CAPACITOR filter  ->  in PARALLEL with the load
   INDUCTOR (choke)  ->  in SERIES with the load

   A capacitor opposes voltage change; an inductor opposes
   current change.
```

---

### Q27
The maximum efficiency of a full-wave rectifier is

(a) 40.6 % &nbsp; (b) 50 % &nbsp; (c) 81.2 % &nbsp; (d) 100 %

**ANSWER: (c)**

---

### Q28
In a half-wave rectifier the peak current is I(m). The ratio I(rms) / I(dc) is

(a) 1 &nbsp; (b) pi / 2 &nbsp; (c) 2 / pi &nbsp; (d) pi / (2 sqrt 2)

**ANSWER: (b)**
```
   I(rms) = I(m)/2        I(dc) = I(m)/pi

    I(rms)      I(m)/2         pi
   --------  =  ---------  =  ------  =  1.571
    I(dc)       I(m)/pi         2

   Check:  r = sqrt( 1.571^2 - 1 ) = sqrt(1.467) = 1.21   correct.
```

---

# PATTERN 6 — Zener diode and special diodes

### Q29
A Zener diode is always operated in

(a) forward bias &nbsp; (b) reverse bias below breakdown &nbsp; (c) reverse breakdown region &nbsp; (d) either bias

**ANSWER: (c)**
```
   The Zener works in the REVERSE BREAKDOWN region, where the voltage
   across it stays constant while the current varies widely.
```

---

### Q30
A 6 V Zener regulator has an input of 10 V, a series resistance of 100 ohm
and a load of 600 ohm. The Zener current is

(a) 10 mA &nbsp; (b) 20 mA &nbsp; (c) 30 mA &nbsp; (d) 40 mA

**ANSWER: (c)**
```
              V(i) - V(z)       10 - 6         4
   I     =   -------------  =  --------  =  --------  =  40 mA
                  R(s)           100          100


               V(z)         6
   I(L)  =   --------  =  --------  =  10 mA
               R(L)         600


   I(z)  =  I  -  I(L)  =  40  -  10  =  30  mA
```

> **SHORTCUT:** Three steps, always in this order:
> **total I from R(s), then I(L) from R(L), then subtract.**

---

### Q31
A photodiode is used in reverse bias because

(a) the forward current is too small
(b) the change caused by light is easier to measure against the small dark current
(c) it will not work in forward bias
(d) reverse bias produces more light

**ANSWER: (b)**
```
   In reverse bias the dark current is tiny, so the light-generated
   carriers dominate and the change in current with illumination is
   easily measured. In forward bias the huge majority current would
   swamp it.
```

---

### Q32
Which of the following is NOT used to manufacture LEDs?

(a) GaAs &nbsp; (b) GaP &nbsp; (c) GaAsP &nbsp; (d) Si

**ANSWER: (d)**
```
   In Si (and Ge) the recombination energy is released mostly as
   HEAT, not as light. LEDs use compound semiconductors such as
   GaAs, GaP, GaAsP and GaN.
```

---

### Q33
A solar cell operates

(a) in forward bias &nbsp; (b) in reverse bias &nbsp; (c) with no external bias &nbsp; (d) only in breakdown

**ANSWER: (c)**
```
   LED        -> FORWARD bias
   Photodiode -> REVERSE bias
   Zener      -> REVERSE breakdown
   Solar cell -> NO bias at all (photovoltaic effect)
```

---

# PATTERN 7 — Transistor current relations, alpha and beta

### Q34
If alpha = 0.95 for a transistor, the value of beta is

(a) 9 &nbsp; (b) 19 &nbsp; (c) 49 &nbsp; (d) 95

**ANSWER: (b)**
```
              alpha         0.95        0.95
   beta  =  -----------  =  ------  =  ------  =  19
             1 - alpha       0.05        0.05
```

> **SHORTCUT:** The denominator is just "1 minus alpha", so alpha = 0.95
> gives 0.95/0.05. Learn the ladder: **0.9 -> 9, 0.95 -> 19, 0.98 -> 49,
> 0.99 -> 99.** One of these appears almost every year.

---

### Q35
A transistor has beta = 49. Its alpha is

(a) 0.49 &nbsp; (b) 0.94 &nbsp; (c) 0.98 &nbsp; (d) 0.99

**ANSWER: (c)**
```
                beta          49         49
   alpha  =  ------------  =  ------  =  ------  =  0.98
              1 + beta         50         50
```

---

### Q36
In a transistor the emitter current is 10 mA and the base current is
0.1 mA. The collector current and beta are

(a) 9.9 mA, 99 &nbsp; (b) 10.1 mA, 101 &nbsp; (c) 9.9 mA, 100 &nbsp; (d) 10 mA, 100

**ANSWER: (a)**
```
   I(C)  =  I(E)  -  I(B)  =  10  -  0.1  =  9.9  mA

              I(C)        9.9
   beta  =  --------  =  ------  =  99
              I(B)        0.1
```

---

### Q37
In a transistor, 5 per cent of the electrons injected by the emitter
recombine in the base. The value of alpha is

(a) 0.05 &nbsp; (b) 0.5 &nbsp; (c) 0.95 &nbsp; (d) 1.05

**ANSWER: (c)**
```
   5 % recombine  ->  I(B) = 0.05 I(E)
   So             ->  I(C) = 0.95 I(E)

              I(C)
   alpha  =  --------  =  0.95
              I(E)
```

---

### Q38
For any transistor, which statement is always true?

(a) alpha > 1 and beta > 1
(b) alpha < 1 and beta > 1
(c) alpha > 1 and beta < 1
(d) alpha = beta

**ANSWER: (b)**
```
   alpha  =  I(C)/I(E)  and  I(C) < I(E)      ->  alpha < 1
   beta   =  I(C)/I(B)  and  I(C) >> I(B)     ->  beta  >> 1
```

---

# PATTERN 8 — Transistor as amplifier and switch

### Q39
In a common-emitter amplifier the output is

(a) in phase with the input
(b) 90 degrees out of phase
(c) 180 degrees out of phase
(d) 270 degrees out of phase

**ANSWER: (c)**
```
   V(CE)  =  V(CC)  -  I(C) R(C)

   Input up  ->  I(C) up  ->  V(CE) DOWN.
   So the output is inverted: 180 degree PHASE REVERSAL.

   (Common base and common collector do NOT invert.)
```

---

### Q40
A CE amplifier has beta = 50, input resistance 500 ohm and collector load
2 kilo-ohm. The voltage gain is

(a) 100 &nbsp; (b) 150 &nbsp; (c) 200 &nbsp; (d) 250

**ANSWER: (c)**
```
                       R(C)              2000
   A(v)  =  beta  x  --------  =  50 x --------  =  50 x 4  =  200
                       r(i)              500
```

---

### Q41
For the amplifier in Q40, the power gain is

(a) 2000 &nbsp; (b) 4000 &nbsp; (c) 10000 &nbsp; (d) 20000

**ANSWER: (c)**
```
   A(p)  =  A(v)  x  A(i)  =  200  x  50  =  10000

   (equivalently  beta^2 x R(C)/r(i)  =  2500 x 4  =  10000)
```

> **SHORTCUT:** Power gain = voltage gain x beta. Do not multiply by beta
> twice unless you are using the beta^2 form.

---

### Q42
For a transistor to work as an amplifier, its junctions must be biased as

(a) both forward &nbsp; (b) both reverse &nbsp; (c) E-B forward, B-C reverse &nbsp; (d) E-B reverse, B-C forward

**ANSWER: (c)**
```
   ACTIVE region     :  E-B FORWARD , B-C REVERSE   (amplifier)
   CUT-OFF region    :  both REVERSE                (switch OFF)
   SATURATION region :  both FORWARD                (switch ON)
```

---

### Q43
When a transistor is used as a switch in the ON state, it operates in the

(a) cut-off region &nbsp; (b) active region &nbsp; (c) saturation region &nbsp; (d) breakdown region

**ANSWER: (c)**
```
   SWITCH ON  ->  SATURATION, V(CE) almost 0, output LOW.
   SWITCH OFF ->  CUT-OFF, I(C) = 0, output = V(CC), HIGH.
```

---

### Q44
The base of a transistor is made thin and lightly doped so that

(a) the base current is large
(b) very few carriers recombine in the base
(c) the collector current is small
(d) the transistor becomes an insulator

**ANSWER: (b)**
```
   A thin, lightly doped base means few holes, so few injected
   electrons recombine there. Almost all reach the collector, making
   I(B) tiny and beta = I(C)/I(B) large.
```

---

### Q45
The common-emitter configuration is preferred for amplification because it
has the highest

(a) current gain only &nbsp; (b) voltage gain only &nbsp; (c) power gain &nbsp; (d) input resistance

**ANSWER: (c)**
```
   CE has LOW input resistance and HIGH output resistance, giving
   both a large voltage gain and a large current gain, hence the
   HIGHEST POWER GAIN of the three configurations.
```

---

# PATTERN 9 — Logic gates

### Q46
The Boolean expression of a NAND gate is

(a) Y = A + B &nbsp; (b) Y = A . B &nbsp; (c) Y = (A . B)' &nbsp; (d) Y = (A + B)'

**ANSWER: (c)**
```
   OR   :  A + B          AND  :  A . B         NOT : A'
   NAND :  ( A . B )'     NOR  :  ( A + B )'
```

---

### Q47
The output of a gate is 1 only when all its inputs are 0. The gate is

(a) OR &nbsp; (b) AND &nbsp; (c) NAND &nbsp; (d) NOR

**ANSWER: (d)**
```
   NOR : output 1 ONLY when ALL inputs are 0.
   NAND: output 0 ONLY when ALL inputs are 1.
   AND : output 1 ONLY when ALL inputs are 1.
   OR  : output 0 ONLY when ALL inputs are 0.
```

> **SHORTCUT:** Look for the words "ONLY when ALL". If the answer is 1 for
> all-zero input it is NOR; if the answer is 0 for all-one input it is NAND.

---

### Q48
Two inputs of a NAND gate are joined together. The circuit behaves as

(a) an AND gate &nbsp; (b) an OR gate &nbsp; (c) a NOT gate &nbsp; (d) a NOR gate

**ANSWER: (c)**
```
   With A = B:
       A = 0, B = 0  ->  Y = 1
       A = 1, B = 1  ->  Y = 0

   Output is the inverse of the input -> NOT gate (inverter).
   The same trick works with a NOR gate.
```

---

### Q49
NAND and NOR gates are called universal gates because

(a) they are the cheapest
(b) any other gate can be built using only them
(c) they have only one input
(d) they never fail

**ANSWER: (b)**

---

### Q50
The output of a NOR gate is fed to a NOT gate. The combination behaves as

(a) an AND gate &nbsp; (b) an OR gate &nbsp; (c) a NAND gate &nbsp; (d) a NOT gate

**ANSWER: (b)**
```
   +-----+-----+-----------+-------------------+
   |  A  |  B  |  NOR out  |  after NOT = Y    |
   +-----+-----+-----------+-------------------+
   |  0  |  0  |     1     |         0         |
   |  0  |  1  |     0     |         1         |
   |  1  |  0  |     0     |         1         |
   |  1  |  1  |     0     |         1         |
   +-----+-----+-----------+-------------------+

   Y is 1 if ANY input is 1  ->  OR gate.
```

> **SHORTCUT:** NOR followed by NOT = OR. NAND followed by NOT = AND.
> Inverting an inverted gate simply gives back the original gate.

---

### Q51
The Boolean identity ( A . B )' = A' + B' is known as

(a) the distributive law &nbsp; (b) De Morgan's theorem &nbsp; (c) the associative law &nbsp; (d) the idempotent law

**ANSWER: (b)**
```
   DE MORGAN'S THEOREMS

       ( A . B )'  =  A'  +  B'
       ( A + B )'  =  A'  .  B'
```

---

# PATTERN 10 — Oscillator

### Q52
The frequency of a transistor oscillator with L = 10 millihenry and
C = 0.1 microfarad is about

(a) 1.6 kHz &nbsp; (b) 5.0 kHz &nbsp; (c) 16 kHz &nbsp; (d) 50 kHz

**ANSWER: (b)**
```
   L C  =  ( 10 x 10^-3 )( 0.1 x 10^-6 )  =  1 x 10^-9

   sqrt( L C )  =  3.162 x 10^-5

                     1                       1
   f  =  -------------------------  =  ------------------
          2 x 3.14 x 3.162 x 10^-5      1.986 x 10^-4

      =  5035  Hz    =  about 5.0 kHz
```

---

### Q53
For sustained oscillations in a transistor oscillator, the feedback must be

(a) negative &nbsp; (b) positive and in phase with the input &nbsp; (c) zero &nbsp; (d) 90 degrees out of phase

**ANSWER: (b)**
```
   POSITIVE (in-phase) feedback is required, and it must supply
   enough energy to make up the losses in the circuit so that the
   oscillations become UNDAMPED.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +-------------------------------------+----------------------------------+
  |  WHEN YOU SEE THIS                  |  DO THIS IMMEDIATELY             |
  +-------------------------------------+----------------------------------+
  |  A dopant name                      |  Count its valence electrons.    |
  |                                     |  5 -> n-type. 3 -> p-type.       |
  +-------------------------------------+----------------------------------+
  |  A band gap in eV, wavelength asked |  lambda(nm) = 1240 / Eg(eV)      |
  +-------------------------------------+----------------------------------+
  |  Eg value given, classify           |  0 -> metal. About 1 -> semi.    |
  |                                     |  Above 3 -> insulator.           |
  +-------------------------------------+----------------------------------+
  |  A carrier concentration given      |  n(e) x n(h) = n(i)^2.           |
  |                                     |  Divide, do not subtract.        |
  +-------------------------------------+----------------------------------+
  |  Diode in a series circuit          |  Subtract 0.7 V (Si) or          |
  |                                     |  0.3 V (Ge) FIRST, then divide.  |
  +-------------------------------------+----------------------------------+
  |  "Depletion layer width"            |  Forward -> thinner.             |
  |                                     |  Reverse -> wider.               |
  +-------------------------------------+----------------------------------+
  |  Reverse current asked              |  MINORITY carriers, microamperes.|
  +-------------------------------------+----------------------------------+
  |  Ripple factor / efficiency         |  Half: 1.21 and 40.6 %.          |
  |                                     |  Full: 0.48 and 81.2 %.          |
  +-------------------------------------+----------------------------------+
  |  Output frequency of a rectifier    |  Half -> f. Full -> 2f.          |
  +-------------------------------------+----------------------------------+
  |  Zener circuit with numbers         |  1. I = (Vi - Vz)/Rs             |
  |                                     |  2. IL = Vz/RL                   |
  |                                     |  3. Iz = I - IL                  |
  +-------------------------------------+----------------------------------+
  |  alpha given, beta asked            |  beta = alpha / (1 - alpha).     |
  |                                     |  0.9->9, 0.95->19, 0.98->49,     |
  |                                     |  0.99->99.                       |
  +-------------------------------------+----------------------------------+
  |  Three transistor currents          |  I(E) = I(B) + I(C). Write it    |
  |                                     |  down before anything else.      |
  +-------------------------------------+----------------------------------+
  |  Voltage gain asked                 |  A(v) = beta x R(C) / r(i).      |
  |                                     |  Power gain = A(v) x beta.       |
  +-------------------------------------+----------------------------------+
  |  "Phase" in a CE amplifier          |  180 degrees. Always.            |
  +-------------------------------------+----------------------------------+
  |  Amplifier biasing asked            |  E-B forward, B-C reverse.       |
  +-------------------------------------+----------------------------------+
  |  Switch ON / OFF asked              |  ON = saturation, output LOW.    |
  |                                     |  OFF = cut-off, output HIGH.     |
  +-------------------------------------+----------------------------------+
  |  A truth table with 1 in only the   |  All-zero row 1 -> NOR.          |
  |  first or only the last row         |  All-one row 1 -> AND.           |
  +-------------------------------------+----------------------------------+
  |  Gate followed by a NOT             |  NAND + NOT = AND.               |
  |                                     |  NOR  + NOT = OR.                |
  +-------------------------------------+----------------------------------+
  |  Bias of a special diode asked      |  LED forward, photodiode reverse,|
  |                                     |  Zener reverse breakdown,        |
  |                                     |  solar cell no bias.             |
  +-------------------------------------+----------------------------------+
  |  EAPCET and you are unsure          |  GUESS. There is no negative     |
  |                                     |  marking. Never leave a blank.   |
  +-------------------------------------+----------------------------------+
  |  JEE Main and you are unsure        |  Eliminate two options first.    |
  |                                     |  If still unsure, skip it.       |
  +-------------------------------------+----------------------------------+
```
