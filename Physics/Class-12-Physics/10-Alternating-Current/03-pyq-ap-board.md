# Alternating Current — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Physics, 2nd Year, 60 marks · **Chapter 10 — Alternating Current**

> **About the year tags:** BIEAP recycles the same questions across many sessions, so the
> questions below are grouped by **how often they appear**, not tagged to one exact year.
> Do not quote a year in your answer sheet. Cross-check the official question papers at
> **bie.ap.gov.in** before your exam.

**Where this chapter appears in the paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually 1 or 2 questions
  Section B  (4 marks each, answer any 6)    ->  usually 1 question
  Section C  (8 marks each, answer any 2)    ->  the SERIES LCR / RESONANCE
                                                 question appears regularly

  Expected haul:  10 to 14 marks
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

## Topic: AC basics, mean and rms values

### Q A1
What is alternating current? Write its equation.

**ANSWER:** An electric current whose **magnitude changes continuously and whose
direction reverses periodically** is called alternating current.

```
        i  =  I0 sin(omega t)

  where I0 = peak value,  omega = 2 pi f = angular frequency.
  In India f = 50 Hz.
```

---

### Q A2
Define the **rms value** of an alternating current.

**ANSWER:** The rms (root-mean-square) value of an AC is that value of **steady direct
current** which produces the **same heat** in the same resistance in the same time as
the AC does.

```
        I_rms  =  I0 / sqrt(2)  =  0.707 I0

  It is also called the effective value or virtual value.
```

---

### Q A3
Write the relation between the peak value and the rms value of an alternating voltage.

**ANSWER:**
```
        V_rms = V0 / sqrt(2) = 0.707 V0        and       V0 = 1.414 V_rms
```

---

### Q A4
The domestic supply is stated as 230 V. What is the peak value of this voltage?

**ANSWER:**
```
        V0 = sqrt(2) x V_rms = 1.414 x 230  =  325.3 V

  (230 V is the RMS value — that is what every meter shows.)
```

---

### Q A5
Define the **mean value** of an alternating current. Why is it taken over half a cycle?

**ANSWER:**
```
        I_mean = 2 I0 / pi = 0.637 I0        (over ONE HALF cycle)

  Over a FULL cycle the positive half exactly cancels the negative half,
  so the full-cycle average is ZERO and is of no use. Hence the average
  is defined over half a cycle only.
```

---

### Q A6
Define **form factor** and **peak factor** for a sinusoidal AC. Give their values.

**ANSWER:**
```
                    rms value      I0/sqrt(2)        pi
  Form factor  =  -------------- = ----------- = --------- = 1.11
                    mean value      2 I0/pi       2 sqrt2

                    peak value        I0
  Peak factor  =  -------------- = ----------- = sqrt(2)  = 1.414
                    rms value       I0/sqrt2
```

---

### Q A7
What does an AC ammeter read? Why?

**ANSWER:** It reads the **rms value**. AC meters (hot-wire or moving-iron type) work on
the **heating or square-law effect**, whose response depends on `i^2`, which is always
positive. A moving-coil meter would read the full-cycle average, which is zero.

---

### Q A8
Why is AC preferred over DC for long-distance transmission? (any two reasons)

**ANSWER:**
```
  1. AC voltage can be STEPPED UP by a transformer; at high voltage the
     current is small, so the line loss  P_loss = I^2 R  becomes very small.
  2. AC generators and motors are cheaper, simpler and need less maintenance
     (no commutator or brushes).
```

---

## Topic: Reactance

### Q A9
Define **inductive reactance**. Give its SI unit and its dependence on frequency.

**ANSWER:** The opposition offered by a pure inductor to the flow of AC.

```
        XL  =  omega L  =  2 pi f L            unit: OHM

  XL is DIRECTLY proportional to f. For DC (f = 0), XL = 0.
```

---

### Q A10
Define **capacitive reactance**. Give its SI unit and its dependence on frequency.

**ANSWER:** The opposition offered by a pure capacitor to the flow of AC.

```
                 1              1
        XC  =  --------  =  ----------           unit: OHM
                omega C      2 pi f C

  XC is INVERSELY proportional to f. For DC (f = 0), XC = infinity.
```

---

### Q A11
Why does a capacitor block DC but allow AC to pass?

**ANSWER:**
```
        XC = 1 / (2 pi f C)

  For DC,  f = 0   ->   XC = INFINITY   ->   DC is completely blocked.
  For AC,  f is large enough that XC is finite and small,
           so charge surges back and forth and current flows in the circuit.
```

---

### Q A12
Why is an inductor called a **choke**?

**ANSWER:** Because `XL = 2 pi f L` increases with frequency, an inductor offers a very
large opposition to high-frequency AC and "chokes" it, while allowing DC and low
frequencies to pass almost freely. It does this **without consuming power**, so it is
used instead of a resistor to limit AC current.

---

### Q A13
What is the phase relation between voltage and current in (i) a pure inductor
(ii) a pure capacitor?

**ANSWER:**
```
  (i)  Pure INDUCTOR   :  current LAGS the voltage by 90 deg (pi/2)
                          i = I0 sin(omega t - pi/2)

  (ii) Pure CAPACITOR  :  current LEADS the voltage by 90 deg (pi/2)
                          i = I0 sin(omega t + pi/2)

  Memory:  "ELI the ICE man"
```

---

### Q A14
A 44 mH inductor is connected to a 220 V, 50 Hz supply. Find the rms current.

**ANSWER:**
```
  XL = 2 pi f L = 2 x 3.1416 x 50 x 44 x 10^-3  =  13.82 ohm

  I_rms = V_rms / XL = 220 / 13.82  =  15.9 A
```

---

### Q A15
A 60 microfarad capacitor is connected to a 110 V, 60 Hz supply. Find the rms current.

**ANSWER:**
```
                1                        1
  XC  =  ------------  =  ------------------------------  =  44.2 ohm
          2 pi f C         2 x 3.1416 x 60 x 60 x 10^-6

  I_rms = 110 / 44.2  =  2.49 A
```

---

## Topic: LCR, resonance, power

### Q A16
Define **impedance**. Write its expression for a series LCR circuit and give its unit.

**ANSWER:** The total opposition offered by an AC circuit to the flow of alternating
current.

```
        Z  =  V_rms / I_rms  =  sqrt[ R^2 + (XL - XC)^2 ]          unit: OHM
```

---

### Q A17
What is the condition for resonance in a series LCR circuit? Write the resonant
frequency.

**ANSWER:**
```
  CONDITION:      XL  =  XC

                                              1
  Resonant frequency        f0  =  ---------------------
                                     2 pi  sqrt( L C )
```

---

### Q A18
At resonance, what happens to the impedance and the current in a series LCR circuit?

**ANSWER:**
```
  Impedance is MINIMUM   ->   Z = R
  Current is MAXIMUM     ->   I = V / R
  Phase angle phi = 0, power factor = 1.
```

---

### Q A19
Define the **quality factor (Q)** of a series LCR circuit. Give its unit.

**ANSWER:** It measures the **sharpness of resonance** — the ratio of the resonant
angular frequency to the bandwidth.

```
            omega0        omega0 L        1        +-  L  -+
  Q  =  ------------  =  ----------  =   ---  sqrt |  ---  |
         bandwidth            R           R        +-  C  -+

  Q is a pure NUMBER; it has NO unit.
```

---

### Q A20
Define **power factor**. What is its value for (i) a pure resistor (ii) a pure inductor?

**ANSWER:**
```
                       true power           R
  Power factor  =  ----------------  =  ------  =  cos(phi)
                    apparent power          Z

  (i)  Pure resistor  ->  cos(phi) = 1     (phi = 0)
  (ii) Pure inductor  ->  cos(phi) = 0     (phi = 90 deg)
```

---

### Q A21
What is **wattless current**?

**ANSWER:** The component of the AC current that is **perpendicular to the voltage**
phasor, `I_rms sin(phi)`. It flows in the circuit but **consumes no power** over a
complete cycle. In a pure inductor or a pure capacitor the whole current is wattless.

---

### Q A22
What is the average power consumed by (i) a pure inductor (ii) a pure capacitor over
one complete cycle? Give the reason.

**ANSWER:** **Zero in both cases.** The phase difference is 90 degrees, so
`cos(phi) = cos 90 = 0`. Physically, the energy stored in the magnetic (or electric)
field during one quarter cycle is returned completely to the source in the next.

---

### Q A23
State the principle of a transformer. Write its turns-ratio relation.

**ANSWER:** **Mutual induction** — the changing flux produced by AC in the primary
induces an emf in the secondary through a common soft-iron core.

```
        Vs        Ns        Ip
       ----  =   ----  =   ----
        Vp        Np        Is
```

---

### Q A24
Why is the core of a transformer **laminated** and made of **soft iron**?

**ANSWER:**
```
  LAMINATED  ->  to break up the eddy-current paths and so reduce
                 eddy-current (iron) loss.

  SOFT IRON  ->  it has high permeability (carries the flux well) and a
                 very NARROW hysteresis loop, so hysteresis loss per
                 cycle is small.
```

---

### Q A25
What is the frequency of LC oscillations? Write the formula.

**ANSWER:**
```
                    1
        f0  =  ---------------------
                2 pi  sqrt( L C )

  Same expression as the resonant frequency of a series LCR circuit.
```

---

### Q A26
A series LCR circuit has R = 6 ohm, XL = 10 ohm and XC = 2 ohm. Find the impedance and
the power factor.

**ANSWER:**
```
  XL - XC = 10 - 2 = 8 ohm

  Z = sqrt( 6^2 + 8^2 ) = sqrt( 36 + 64 ) = sqrt(100)  =  10 ohm

  cos(phi) = R / Z = 6 / 10  =  0.6
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

### Q B1
Obtain an expression for the **rms value** of an alternating current.

**ANSWER:**
```
  Let      i = I0 sin(omega t)

  Heat produced in resistance R in time dt:      dH = i^2 R dt

  Heat in one complete cycle:

              T                          T
       H = INT  i^2 R dt  =  I0^2 R  INT   sin^2(omega t) dt
              0                          0

  Using   sin^2 A = (1 - cos 2A)/2 , and knowing that the integral of
  cos(2 omega t) over one full cycle is ZERO:

              I0^2 R
       H  =  --------  x  T
                 2

  If I_rms is the equivalent steady DC producing the same heat:

       I_rms^2 R T  =  I0^2 R T / 2

                            I0
       ->   I_rms  =  -----------  =  0.707 I0
                        sqrt(2)

  Similarly    V_rms = V0 / sqrt(2)
```

---

### Q B2
Derive an expression for the current when an alternating voltage is applied to a
**pure inductor**. Show that the current lags the voltage by 90 degrees, and draw the
phasor diagram.

**ANSWER:**
```
  CIRCUIT

        +--------[ L ]----------+
        |      (UUUU)           |
        +---------( ~ )---------+
                v = V0 sin(omega t)

  Applying Kirchhoff's loop rule (no resistance):

             di                     di      V0
       v - L --  = 0     ->        ---  =  ---- sin(omega t)
             dt                     dt      L

  Integrating:

                V0                        V0
       i  =  -------  x ( - cos(omega t) ) = -  -------- cos(omega t)
              omega L                          omega L

  Since   - cos(A) = sin(A - pi/2) :

  +-----------------------------------------------------------+
  |                                                           |
  |     i  =  I0 sin( omega t  -  pi/2 )                      |
  |                                                           |
  |                    V0        V0                           |
  |     where   I0 = -------- = ----- ,   XL = omega L        |
  |                   omega L     XL                          |
  +-----------------------------------------------------------+

  The current's phase is  (omega t - pi/2), which is 90 deg BEHIND the
  voltage. Hence THE CURRENT LAGS THE VOLTAGE BY 90 DEGREES.

  PHASOR DIAGRAM                       WAVEFORM

           ^ V0                    v peaks first,
           |                       i peaks a quarter cycle later
           |
           |
           +---------> I0
                90 deg

  Average power = V I cos(90) = 0  ->  a pure inductor consumes NO power.
```

---

### Q B3
Derive an expression for the current when an alternating voltage is applied to a
**pure capacitor**. Show that the current leads the voltage by 90 degrees.

**ANSWER:**
```
  CIRCUIT

        +--------] [------------+
        +---------( ~ )---------+
                v = V0 sin(omega t)

  Charge on the capacitor:      q = C v = C V0 sin(omega t)

                dq
  Current  i = ----  =  C V0 omega cos(omega t)
                dt

  Since   cos(A) = sin(A + pi/2) :

  +-----------------------------------------------------------+
  |                                                           |
  |     i  =  I0 sin( omega t  +  pi/2 )                      |
  |                                                           |
  |                         V0                1               |
  |     where   I0 = C V0 omega = ----- ,  XC = --------      |
  |                               XC            omega C       |
  +-----------------------------------------------------------+

  The current's phase is (omega t + pi/2), 90 deg AHEAD of the voltage.
  Hence THE CURRENT LEADS THE VOLTAGE BY 90 DEGREES.

  PHASOR DIAGRAM

           ^ I0
           |
           |
           +---------> V0
                90 deg

  Average power = V I cos(90) = 0  ->  a pure capacitor consumes NO power.
```

---

### Q B4
Show that in a purely **resistive** AC circuit the current is in phase with the voltage,
and find the power consumed.

**ANSWER:**
```
  v = V0 sin(omega t)

  By Ohm's law at every instant:

           v      V0
      i = --- =  ---- sin(omega t)  =  I0 sin(omega t),   I0 = V0/R
           R      R

  Both v and i contain sin(omega t) with the SAME angle
  -> phase difference phi = 0 -> they are IN PHASE.

  Both reach zero together and peak together.

  PHASOR:      I0 and V0 drawn along the SAME line.

  POWER:   P = V_rms I_rms cos(0) = V_rms I_rms = I_rms^2 R
           A resistor DOES consume power (it heats up).
```

---

### Q B5
Derive the expression for **average power** in an AC circuit and define the **power
factor**.

**ANSWER:**
```
  Let      v = V0 sin(omega t)
           i = I0 sin(omega t - phi)

  Instantaneous power   p = v i = V0 I0 sin(wt) sin(wt - phi)

  Using   2 sin A sin B = cos(A - B) - cos(A + B) :

             V0 I0
      p  =  ------- [ cos(phi) - cos(2 omega t - phi) ]
               2

  Over one full cycle the average of cos(2 omega t - phi) is ZERO.

             V0 I0            V0        I0
      P  =  ------- cos(phi) = ----- x ----- x cos(phi)
               2              sqrt2     sqrt2

  +-----------------------------------------------------------+
  |       P  =  V_rms  I_rms  cos(phi)                        |
  +-----------------------------------------------------------+

  POWER FACTOR  cos(phi) = R / Z
              = (true power) / (apparent power).
  It is a pure number lying between 0 and 1.

  cos(phi) = 1 for a pure resistor and at resonance;
  cos(phi) = 0 for a pure inductor or a pure capacitor.
```

---

### Q B6
What is **wattless current**? Explain, and state how a low power factor is improved.

**ANSWER:**
```
  Resolve the current phasor into two components:

             ^
             | I sin(phi)  <-- PERPENDICULAR to V : the WATTLESS component
             |\
             | \  I
             |  \
             |phi\
             +----\--------> V
              I cos(phi)    <-- ALONG V : the power component

  Power delivered by the perpendicular component
        = V I sin(phi) cos(90) = 0

  So the current  I_rms sin(phi)  flows through the circuit but does
  NO WORK. It is called the WATTLESS or IDLE current.

  In a pure inductor or capacitor phi = 90 deg, so the WHOLE current
  is wattless.

  WHY A LOW POWER FACTOR IS BAD:
     for the same useful power P, a small cos(phi) means a LARGE current
     I = P / (V cos phi), hence large I^2 R heating in the cables.

  HOW TO IMPROVE IT:
     industrial loads are inductive (motors, chokes), so the current lags.
     Connect a CAPACITOR IN PARALLEL with the load. Its leading current
     cancels part of the lagging current, phi falls and cos(phi) -> 1.
```

---

### Q B7
Explain the construction and working of a **transformer**. State the losses in a
transformer.

**ANSWER:**
```
  CONSTRUCTION

                 SOFT IRON LAMINATED CORE
        +===================================+
        ||                                 ||
    ~~~ || (((((                     ))))) ||  ~~~
    AC  || (((((                     ))))) ||  to load
        || (((((                     ))))) ||
        +===================================+
             |                         |
        PRIMARY (Np)              SECONDARY (Ns)

  Two coils, electrically insulated, wound on a closed core of thin
  laminated soft-iron sheets.

  PRINCIPLE:  MUTUAL INDUCTION.

  WORKING
    AC in the primary sets up a changing flux in the core. Practically
    all of this flux links the secondary and induces an emf in it.

        ep = - Np (d phi/dt)          es = - Ns (d phi/dt)

    Dividing:      Vs / Vp  =  Ns / Np

    For an ideal transformer  Vp Ip = Vs Is , so

  +-----------------------------------------------------------+
  |         Vs        Ns        Ip                            |
  |        ----  =   ----  =   ----                           |
  |         Vp        Np        Is                            |
  +-----------------------------------------------------------+

    Ns > Np  ->  STEP-UP  (V raised, I lowered)
    Ns < Np  ->  STEP-DOWN (V lowered, I raised)

  LOSSES
    1. COPPER LOSS      - I^2 R heating of the windings
    2. EDDY CURRENT     - swirling currents induced in the core
       (iron) LOSS
    3. HYSTERESIS LOSS  - energy used in repeatedly magnetising and
                          demagnetising the core
    4. FLUX LEAKAGE     - some primary flux misses the secondary
    5. Humming (magnetostriction) - a small mechanical loss
```

---

### Q B8
How are the losses in a transformer **minimised**? Define its efficiency.

**ANSWER:**
```
  +-------------------+-------------------------------------------+
  |  LOSS             |  HOW IT IS REDUCED                        |
  +-------------------+-------------------------------------------+
  |  Copper (I^2 R)   |  thick copper wire of low resistance      |
  |  Eddy current     |  LAMINATED core - thin sheets insulated   |
  |                   |  from each other, breaking the eddy loops |
  |  Hysteresis       |  SOFT IRON / silicon steel core, which    |
  |                   |  has a very narrow hysteresis loop        |
  |  Flux leakage     |  wind the coils one over the other on the |
  |                   |  same limb of a CLOSED core               |
  |  Humming          |  clamp the laminations tightly            |
  +-------------------+-------------------------------------------+

                      output power       Vs Is
      EFFICIENCY  =  --------------- =  ------- x 100 %
                      input power        Vp Ip

  A good transformer reaches 95 % - 99 % because it has NO moving parts.
```

---

### Q B9
Explain **LC oscillations** and draw the analogy with a mass on a spring.

**ANSWER:**
```
  A charged capacitor connected across an ideal inductor (R = 0) does not
  simply discharge - the charge OSCILLATES back and forth for ever.

        +-------] [-------+
        |    C            |
        +------ UUUU -----+
                  L

  STAGE 1  capacitor fully charged : all energy ELECTRIC, i = 0
  STAGE 2  it discharges through L : energy moves to the MAGNETIC field
  STAGE 3  q = 0, current MAXIMUM  : all energy MAGNETIC
  STAGE 4  the inductor's inertia charges C the OPPOSITE way
           ... and the cycle repeats.

  Kirchhoff's loop rule gives:

        d^2 q         1
       ------- = -  ----- q          <-- the equation of SHM in q
        dt^2         LC

                       1                        1
       omega0  =  -----------   ->   f0 = ---------------
                   sqrt(LC)                2 pi sqrt(LC)

  ANALOGY
  +----------------------+--------------------------+
  |  q       (charge)    |  x   (displacement)      |
  |  i = dq/dt           |  v = dx/dt               |
  |  L       (inductance)|  m   (mass)              |
  |  1/C                 |  k   (spring constant)   |
  |  q^2/2C  (electric)  |  (1/2)k x^2 (potential)  |
  |  (1/2)L i^2 (magnetic)| (1/2)m v^2  (kinetic)   |
  |  R       (resistance)|  friction (damping)      |
  +----------------------+--------------------------+

  In a real circuit R is never zero, so the oscillations are DAMPED and
  die away, exactly like a pendulum stopped by air friction.
```

---

### Q B10
Explain **resonance** in a series LCR circuit and draw the resonance curve.

**ANSWER:**
```
  XL = omega L increases with frequency; XC = 1/(omega C) decreases with it.
  At one frequency they become equal - that is RESONANCE.

  CONDITION      XL = XC

                                  1                       1
      omega0 L = --------  ->  omega0 = ----------  , f0 = -------------
                 omega0 C               sqrt(LC)          2 pi sqrt(LC)

  AT RESONANCE
      Z = sqrt(R^2 + 0) = R   (MINIMUM)
      I = V / R               (MAXIMUM)
      phi = 0, power factor = 1, circuit is purely RESISTIVE
      VL and VC are equal and opposite and cancel.

  RESONANCE CURVE

     I
     ^
     |            * *
 Imax|          *  |  *        small R -> tall, SHARP peak
     |         *   |   *
     |       *     |     *
     |     *   .   |   .   *   large R -> short, BROAD peak
     |  *    .     |     .    *
     | *   .       |       .    *
     +-----+-------+-------+-------> frequency
           f1      f0      f2

  Bandwidth = f2 - f1 (the half-power width).
  A series resonant circuit is called an ACCEPTOR circuit.
```

---

### Q B11
Define the **sharpness of resonance** and the **quality factor**. On what does it
depend?

**ANSWER:**
```
  Sharpness = how narrow the resonance peak is. It is measured by Q.

  +-----------------------------------------------------------+
  |            omega0         omega0 L        1     +- L -+   |
  |    Q  =  ------------  =  ---------  =   --- sqrt| --- |  |
  |           bandwidth           R           R     +- C -+   |
  |                                                           |
  |    bandwidth (angular)  =  R / L        Q has NO unit.    |
  +-----------------------------------------------------------+

  SMALL R -> LARGE Q -> narrow bandwidth -> SHARP, highly selective
  LARGE R -> SMALL Q -> wide bandwidth   -> FLAT, poorly selective

  Q also equals the voltage magnification:  VL/V = VC/V = Q.

  A high Q is essential in a radio tuner so that only one station
  is picked up.
```

---

### Q B12
Explain how a series LCR circuit is used to **tune a radio receiver**.

**ANSWER:**
```
  Signals from hundreds of broadcasting stations, each at its own
  frequency, arrive at the aerial together.

  The receiver contains a series LCR circuit in which the CAPACITOR IS
  VARIABLE (the tuning knob).

  Turning the knob changes C, which changes the natural frequency

              1
      f0 = ---------------
            2 pi sqrt(LC)

  When f0 is made equal to the frequency of ONE station, that signal
  drives the circuit into RESONANCE: Z falls to R and a large current
  flows for that frequency alone. All other stations are far from
  resonance and produce almost no current, so only the tuned station
  is heard.

  A HIGH Q (small R) is needed, otherwise neighbouring stations bleed in.
```

---

### Q B13
A series LCR circuit with R = 20 ohm, L = 1.5 H and C = 35 microfarad is connected to a
variable-frequency 200 V AC supply. When the frequency of the supply equals the natural
frequency of the circuit, find the average power transferred.

**ANSWER:**
```
  At resonance    XL = XC   ->   Z = R = 20 ohm

  I_rms = V / Z = 200 / 20                      =  10 A

  Power factor at resonance = 1

  P = V_rms I_rms cos(phi) = 200 x 10 x 1       =  2000 W  =  2 kW

  (Check: P = I^2 R = 10^2 x 20 = 2000 W.)
```

---

### Q B14
A series LCR circuit has L = 5.0 H, C = 20 microfarad and R = 40 ohm, connected to a
100 V variable-frequency supply. Find (i) the resonant angular frequency (ii) the
maximum current (iii) the Q factor (iv) the bandwidth.

**ANSWER:**
```
  L C = 5.0 x 20 x 10^-6 = 100 x 10^-6 = 1 x 10^-4
  sqrt(LC) = 1 x 10^-2

  (i)   omega0 = 1 / sqrt(LC) = 1 / 0.01           =  100 rad/s
        ( f0 = 100 / 6.283 = 15.9 Hz )

  (ii)  At resonance Z = R = 40 ohm
        I_max = V / R = 100 / 40                   =  2.5 A

  (iii) Q = omega0 L / R = (100 x 5.0) / 40        =  12.5
        CHECK: Q = (1/R) sqrt(L/C)
                 = (1/40) sqrt( 5.0 / 20x10^-6 )
                 = (1/40) sqrt( 250000 )
                 = (1/40)(500)  = 12.5            OK

  (iv)  Bandwidth = R / L = 40 / 5.0               =  8 rad/s
```

---

### Q B15
Explain the working of an **AC generator** and write the expression for the induced emf.

**ANSWER:**
```
  PRINCIPLE:  Electromagnetic induction. A coil rotating in a magnetic
              field has a continuously changing flux linked with it, so
              an alternating emf is induced.

  PARTS:  armature coil, field magnets, TWO SLIP RINGS, two brushes.

        +---------------------------------------------+
        |   N  |    +-----------------+       |  S    |
        |      |    |     COIL        |       |       |
        |      |    +-----------------+       |       |
        |             ==(O)=====(O)==  slip rings     |
        |                \        \                   |
        |              brush     brush                |
        +-----------------+---[ R ]-+-----------------+

  Flux linked          phi = N B A cos(omega t)

                          d phi
  Induced emf     e = -  -------  =  N B A omega sin(omega t)
                           dt

  +-----------------------------------------------------------+
  |      e  =  e0 sin(omega t)     with   e0 = N B A omega     |
  +-----------------------------------------------------------+

  The two SLIP RINGS keep each end of the coil permanently joined to the
  same brush, so the output reverses every half turn -> AC.
  Replace them by a SPLIT-RING COMMUTATOR and you get a DC generator.
```

---

### Q B16
Distinguish between AC and DC (any four points).

**ANSWER:**
```
  +---------------------+---------------------+----------------------+
  |  POINT              |  AC                 |  DC                  |
  +---------------------+---------------------+----------------------+
  |  Direction          |  reverses regularly |  always the same     |
  |  Magnitude          |  varies as a sine   |  constant            |
  |  Voltage change     |  easy - transformer |  difficult, costly   |
  |  Transmission       |  cheap, low loss    |  expensive over long |
  |                     |  at high voltage    |  distances           |
  |  Generation         |  slip rings         |  split-ring          |
  |                     |                     |  commutator          |
  |  Measured by        |  hot-wire /         |  moving-coil meter   |
  |                     |  moving-iron meter  |                      |
  |  Electroplating     |  cannot be used     |  used                |
  +---------------------+---------------------+----------------------+
```

---

### Q B17
A transformer has 4000 turns in the primary and 400 turns in the secondary. The primary
is connected to 2200 V AC. Find the secondary voltage. If the load draws 20 A, find the
primary current (ideal transformer) and the power handled.

**ANSWER:**
```
        Ns              400
  Vs =  ---- x Vp  =  -------- x 2200          =  220 V   (STEP-DOWN)
        Np             4000

  Ideal:   Vp Ip = Vs Is

        Vs Is       220 x 20       4400
  Ip = -------- = ----------- = ----------     =  2 A
          Vp          2200         2200

  Power  =  Vs Is  =  220 x 20                 =  4400 W  =  4.4 kW
            (same on both sides for an ideal transformer)
```

---

# ===============================================================
# SECTION C — LONG ANSWER (8 marks)
# ===============================================================

### Q C1  *** THE MOST IMPORTANT LONG ANSWER IN THIS CHAPTER ***
Obtain an expression for the **impedance of a series LCR circuit** using the phasor
method. Discuss the three possible cases. Draw the circuit, the phasor diagram and the
impedance triangle.

**MODEL ANSWER (mark split shown)**

```
  ---- 1 mark : CIRCUIT DIAGRAM -------------------------------------

        +----[ R ]----[ L ]-----] [-----+
        |             UUUU              |
        +------------( ~ )--------------+
                v = V0 sin(omega t)

  Because R, L and C are in SERIES, the SAME current flows through
  all three at every instant. So the CURRENT is taken as the reference
  phasor.

  ---- 1 mark : THE THREE VOLTAGES ----------------------------------

     Let    i = I0 sin(omega t)

     Across R :  VR = I0 R      IN PHASE with i
     Across L :  VL = I0 XL     90 deg AHEAD of i        XL = omega L
     Across C :  VC = I0 XC     90 deg BEHIND i          XC = 1/(omega C)

  ---- 2 marks : PHASOR DIAGRAM -------------------------------------

        VL  ^
            |                              . V
            |                          .
            |                      .
            |                  .
            | (VL - VC).
            |      .
            |  .  phi
            +--------------------------------->  VR   and   I
            |
        VC  v

     VL is drawn UP, VC is drawn DOWN. They are opposite, so their
     resultant is (VL - VC) along the vertical axis.

  ---- 2 marks : RESULTANT AND IMPEDANCE ----------------------------

     VR and (VL - VC) are PERPENDICULAR, so by Pythagoras:

        V  =  sqrt[ VR^2 + (VL - VC)^2 ]

           =  sqrt[ (I0 R)^2 + (I0 XL - I0 XC)^2 ]

           =  I0 sqrt[ R^2 + (XL - XC)^2 ]

     Therefore the impedance is

     +--------------------------------------------------------+
     |        V0                                              |
     |   Z = ----  =  sqrt[ R^2 + ( XL - XC )^2 ]             |
     |        I0                                              |
     +--------------------------------------------------------+

  ---- 1 mark : PHASE ANGLE AND IMPEDANCE TRIANGLE ------------------

                  VL - VC       XL - XC
     tan(phi)  =  --------  =  ---------
                     VR            R

                             /|
                           /  |
                    Z    /    |
                       /      | (XL - XC)
                     /  phi   |
                   +----------+
                         R

     cos(phi) = R / Z            i = I0 sin(omega t - phi)

  ---- 1 mark : THE THREE CASES -------------------------------------

     (a)  XL > XC : phi is POSITIVE. The circuit is INDUCTIVE;
                    the voltage LEADS the current.

     (b)  XL < XC : phi is NEGATIVE. The circuit is CAPACITIVE;
                    the current LEADS the voltage.

     (c)  XL = XC : phi = 0. The circuit is purely RESISTIVE.
                    Z = R is MINIMUM and the current I = V/R is
                    MAXIMUM. This is the condition of RESONANCE.
```

---

### Q C2
Explain **resonance** in a series LCR circuit. Derive the resonant frequency, draw the
resonance curve, define the sharpness of resonance and the quality factor, and mention
one application.

**MODEL ANSWER**

```
  ---- 1 mark : IDEA ------------------------------------------------

     In a series LCR circuit  Z = sqrt[R^2 + (XL - XC)^2].
     XL = omega L rises with frequency; XC = 1/(omega C) falls with it.
     At one particular frequency they are equal and cancel out.
     The circuit is then said to be in RESONANCE.

  ---- 2 marks : RESONANT FREQUENCY ---------------------------------

     Condition:      XL  =  XC

                                    1
                omega0 L   =   -----------
                                omega0 C

                                1
                omega0^2  =  --------
                                L C

     +-------------------------------------------------------+
     |                 1                          1          |
     |  omega0  =  ----------- ,      f0  =  --------------- |
     |              sqrt(LC)                  2pi sqrt(LC)   |
     +-------------------------------------------------------+

  ---- 2 marks : WHAT HAPPENS AT RESONANCE --------------------------

     Z  =  sqrt(R^2 + 0)  =  R          MINIMUM impedance
     I  =  V / R                        MAXIMUM current
     phi = 0, cos(phi) = 1              purely resistive, max power
     VL = VC, equal and opposite - they cancel each other
     (each may be Q times the supply voltage: voltage magnification)

     Such a circuit is called an ACCEPTOR circuit.

  ---- 1 mark : RESONANCE CURVE -------------------------------------

     I
     ^
     |            * *
 Imax|          *  |  *          small R : SHARP peak (high Q)
     |         *   |   *
     |       *     |     *
Imax |- - - *- - - | - - -*- - -  half-power level
/sq2 |     *   .   |   .   *
     |  *    .     |     .    *   large R : BROAD peak (low Q)
     | *   .       |       .    *
     +-----+-------+-------+---------> frequency
           f1      f0      f2

     BANDWIDTH = f2 - f1 ;  in angular measure  2 dw = R / L

  ---- 1 mark : SHARPNESS AND QUALITY FACTOR ------------------------

     +-------------------------------------------------------+
     |           omega0        omega0 L        1     +- L -+ |
     |  Q  =  -----------  =  ----------  =   --- sqrt| --- ||
     |         bandwidth           R           R     +- C -+ |
     +-------------------------------------------------------+

     Small R -> large Q -> narrow band -> very selective circuit.
     Q is a pure number.

  ---- 1 mark : APPLICATION -----------------------------------------

     RADIO / TV TUNING. The receiver has a series LCR circuit with a
     variable capacitor. Adjusting C makes f0 equal to the frequency of
     the desired station; only that station drives a large resonant
     current, so only it is heard. A high Q keeps other stations out.
```

---

### Q C3
Derive an expression for the **average power** in an AC circuit. Define **power factor**
and **wattless current**, and discuss the special cases.

**MODEL ANSWER**

```
  ---- 2 marks : INSTANTANEOUS POWER --------------------------------

     Let      v = V0 sin(omega t)
              i = I0 sin(omega t - phi)

     p = v i = V0 I0 sin(omega t) sin(omega t - phi)

     Using  2 sin A sin B = cos(A - B) - cos(A + B):

              V0 I0
       p  =  ------- [ cos(phi) - cos(2 omega t - phi) ]
                2

  ---- 2 marks : AVERAGE OVER A COMPLETE CYCLE ----------------------

     The average of cos(2 omega t - phi) over one complete cycle is ZERO.
     cos(phi) is a constant.

              V0 I0             V0        I0
       P  =  ------- cos(phi) = ----- x ------- cos(phi)
                2               sqrt2    sqrt2

     +-------------------------------------------------------+
     |      P  =  V_rms  I_rms  cos(phi)                     |
     +-------------------------------------------------------+

     V_rms I_rms       is called the APPARENT power (VA)
     V I cos(phi)      is the TRUE or real power (W)

  ---- 1 mark : POWER FACTOR ----------------------------------------

                          true power         R
     Power factor  =  ----------------  =  -----  =  cos(phi)
                       apparent power        Z

     A pure number between 0 and 1, with no unit.

  ---- 1 mark : WATTLESS CURRENT ------------------------------------

     Resolving I into components along and perpendicular to V:

         I cos(phi)   -> along V, does the work
         I sin(phi)   -> perpendicular to V, delivers ZERO average
                         power  = the WATTLESS (idle) current

  ---- 2 marks : SPECIAL CASES --------------------------------------

     +-----------------------+-----------+---------------------+
     |  CIRCUIT              | cos(phi)  |  AVERAGE POWER      |
     +-----------------------+-----------+---------------------+
     |  Pure resistance      |    1      |  V_rms I_rms  (max) |
     |  Pure inductance      |    0      |  ZERO               |
     |  Pure capacitance     |    0      |  ZERO               |
     |  Series LCR           |   R / Z   |  V I cos(phi)       |
     |  LCR at resonance     |    1      |  V_rms I_rms  (max) |
     +-----------------------+-----------+---------------------+

     A low power factor means a large current for the same useful power
     and hence large I^2 R losses. It is improved by connecting a
     CAPACITOR IN PARALLEL with the inductive load.
```

---

### Q C4
Describe the construction, principle and working of a **transformer**. Discuss its
energy losses and how they are reduced, and explain its role in the transmission of
electrical power.

**MODEL ANSWER**

```
  ---- 1 mark : PRINCIPLE -------------------------------------------

     MUTUAL INDUCTION. An alternating current in one coil produces a
     changing magnetic flux which induces an emf in a neighbouring coil
     linked by the same core.

  ---- 2 marks : CONSTRUCTION ---------------------------------------

                 SOFT IRON LAMINATED CORE
        +===================================+
        ||                                 ||
    ~~~ || (((((                     ))))) ||  ~~~
    AC  || (((((                     ))))) ||   to
   IN   || (((((                     ))))) ||  LOAD
        || (((((                     ))))) ||
        +===================================+
             |                         |
        PRIMARY, Np turns         SECONDARY, Ns turns

     Two insulated coils wound on a CLOSED core built from thin
     laminated sheets of soft iron. The coils are electrically separate;
     they are linked only by the magnetic flux.

  ---- 2 marks : WORKING AND THE TURNS RATIO ------------------------

     AC in the primary makes the core flux change. If the same flux phi
     links every turn of both coils, Faraday's law gives:

        ep = - Np (d phi / dt)          es = - Ns (d phi / dt)

     Dividing, the (d phi/dt) cancels:

     +-----------------------------------------------------+
     |        Vs        Ns        Ip                       |
     |       ----  =   ----  =   ----  =  k                |
     |        Vp        Np        Is                       |
     +-----------------------------------------------------+

     from  Vp Ip = Vs Is  for an ideal transformer.

        Ns > Np  ->  STEP-UP    : voltage raised, current lowered
        Ns < Np  ->  STEP-DOWN  : voltage lowered, current raised

     A transformer NEVER increases power. Whatever is gained in voltage
     is lost in current.

  ---- 2 marks : LOSSES AND THEIR REMEDIES --------------------------

     +-------------------+-----------------------------------------+
     |  LOSS             |  REMEDY                                 |
     +-------------------+-----------------------------------------+
     |  Copper (I^2 R)   |  thick, low-resistance copper windings  |
     |  Eddy current     |  LAMINATED core; the thin insulated     |
     |  (iron loss)      |  sheets break the eddy-current paths    |
     |  Hysteresis       |  SOFT IRON / silicon steel core with a  |
     |                   |  narrow hysteresis loop                 |
     |  Flux leakage     |  coils wound one over the other on the  |
     |                   |  same limb of a closed core             |
     |  Humming          |  clamp the laminations tightly          |
     +-------------------+-----------------------------------------+

                       Vs Is
        efficiency =  ------- x 100 %      (95 % to 99 % in practice)
                       Vp Ip

  ---- 1 mark : POWER TRANSMISSION ----------------------------------

   POWER STATION      STEP-UP          LONG LINE        STEP-DOWN   HOMES
     11 kV  ------->  [ T1 ]  ---- 220 kV / 400 kV ---> [ T2 ] ---> 230 V

     To send power P at voltage V the line current is  I = P / V,
     and the line loss is

                                 +-  P  -+ 2
          P_loss  =  I^2 R   =   | ----- |   R
                                 +-  V  -+

     The loss falls as 1/V^2. Raising 11 kV to 220 kV (a factor of 20)
     cuts the line loss by a factor of 400. Near the consumer a
     step-down transformer brings it back to a safe 230 V.

     This is the whole reason electricity is distributed as AC.
```

---

### Q C5
An alternating voltage `v = V0 sin(omega t)` is applied separately to a pure resistor,
a pure inductor and a pure capacitor. In each case obtain the current, state the phase
relation, draw the phasor diagram and find the average power.

**MODEL ANSWER (skeleton with mark split)**

```
  ---- PART 1 : PURE RESISTOR (2 marks) -----------------------------

      i = v/R = (V0/R) sin(omega t) = I0 sin(omega t)

      phi = 0 : current IN PHASE with voltage.
      Phasor:      I0 and V0 along the SAME line.
      P = V_rms I_rms cos(0) = V_rms I_rms = I_rms^2 R   (power IS used)

  ---- PART 2 : PURE INDUCTOR (3 marks) -----------------------------

      L di/dt = V0 sin(omega t)

      i = -(V0 / omega L) cos(omega t) = I0 sin(omega t - pi/2)

                        V0
      with        I0 = ------ ,      XL = omega L
                        XL

      Current LAGS voltage by 90 deg.

      Phasor:      ^ V0
                   |
                   +------> I0

      P = V_rms I_rms cos(90) = 0     (wattless; energy stored in the
                                       magnetic field is returned)

  ---- PART 3 : PURE CAPACITOR (3 marks) ----------------------------

      q = C V0 sin(omega t)

      i = dq/dt = C V0 omega cos(omega t) = I0 sin(omega t + pi/2)

                        V0                     1
      with        I0 = ------ ,      XC = ----------
                        XC                 omega C

      Current LEADS voltage by 90 deg.

      Phasor:      ^ I0
                   |
                   +------> V0

      P = V_rms I_rms cos(90) = 0     (wattless; energy stored in the
                                       electric field is returned)

  ---- SUMMARY TABLE (write it, it earns marks) ---------------------

  +-----------+---------------+---------------------+--------------+
  |  ELEMENT  |  OPPOSITION   |  PHASE OF CURRENT   |  AVG POWER   |
  +-----------+---------------+---------------------+--------------+
  |  R        |  R            |  in phase           |  V I         |
  |  L        |  XL = wL      |  lags by 90 deg     |  0           |
  |  C        |  XC = 1/(wC)  |  leads by 90 deg    |  0           |
  +-----------+---------------+---------------------+--------------+
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST
# ===============================================================

```
  +------+-------------------------------------------+---------+-----------+
  | RANK |  QUESTION TYPE                            | SECTION |  CHANCE   |
  +------+-------------------------------------------+---------+-----------+
  |  1   |  Series LCR by the phasor method:         |    C    |  VERY     |
  |      |  Z, phase angle, three cases              |         |  HIGH     |
  +------+-------------------------------------------+---------+-----------+
  |  2   |  Transformer - principle, working,        |   B/C   |  VERY     |
  |      |  losses and how they are reduced          |         |  HIGH     |
  +------+-------------------------------------------+---------+-----------+
  |  3   |  Resonance: condition, f0, resonance      |   B/C   |  HIGH     |
  |      |  curve, Q factor, radio tuning            |         |           |
  +------+-------------------------------------------+---------+-----------+
  |  4   |  AC through a pure inductor / capacitor - |    B    |  HIGH     |
  |      |  derive i, show the 90 deg lag / lead     |         |           |
  +------+-------------------------------------------+---------+-----------+
  |  5   |  Average power, power factor, wattless    |   B/C   |  HIGH     |
  |      |  current                                  |         |           |
  +------+-------------------------------------------+---------+-----------+
  |  6   |  Define rms value / relation with peak    |    A    |  HIGH     |
  +------+-------------------------------------------+---------+-----------+
  |  7   |  Define XL, XC and their frequency        |    A    |  HIGH     |
  |      |  dependence; why C blocks DC              |         |           |
  +------+-------------------------------------------+---------+-----------+
  |  8   |  Condition for resonance and f0 formula   |    A    |  HIGH     |
  +------+-------------------------------------------+---------+-----------+
  |  9   |  Numerical: find XL, XC, Z, I, cos(phi)   |   A/B   |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  | 10   |  LC oscillations and the spring analogy   |    B    |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  | 11   |  Why the core is laminated / soft iron    |    A    |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  | 12   |  Quality factor - definition and formula  |    A    |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  | 13   |  AC generator; difference between AC & DC |    B    |  MEDIUM   |
  +------+-------------------------------------------+---------+-----------+
  | 14   |  Form factor / peak factor / mean value   |    A    |  LOW      |
  +------+-------------------------------------------+---------+-----------+
```

**If you are short of time, learn items 1, 2, 3 and 5. They alone cover
roughly 12 of the 14 marks this chapter can give you.**
