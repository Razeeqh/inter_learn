# Alternating Current — Concepts, Explained from Zero

Read this with a pen in your hand. Copy every ASCII diagram into your notebook.
In this chapter the **diagram IS the answer** — examiners give marks for the phasor
diagram even when the algebra goes wrong.

---

# ===============================================================
# TOPIC 1 — WHAT IS ALTERNATING CURRENT?
# ===============================================================

## The everyday picture

A **direct current (DC)** — from a cell or a battery — is like water flowing through a
pipe in one direction only. It never turns around.

An **alternating current (AC)** is like the water in a tube being pushed forward, then
pulled backward, then forward again, over and over. Nothing is "used up" by the
reversing; the electrons just jiggle back and forth. The energy still gets delivered.

In India the mains supply reverses **50 times a second** (frequency f = 50 Hz), so each
complete forward-and-back cycle takes T = 1/50 = 0.02 s.

## The equations

```
  +----------------------------------------------------------------+
  |                                                                |
  |   ALTERNATING VOLTAGE     v  =  V0 sin(omega t)                |
  |                                                                |
  |   ALTERNATING CURRENT     i  =  I0 sin(omega t)                |
  |                            (in a pure resistor)                |
  |                                                                |
  |   omega = 2 pi f = 2 pi / T      (angular frequency, rad/s)    |
  |                                                                |
  |   V0, I0  =  PEAK values (also called amplitude or             |
  |              maximum value)                                    |
  |                                                                |
  +----------------------------------------------------------------+
```

Small letters `v, i` mean the value **right now** (instantaneous).
Capital letters `V0, I0` mean the **peak** value.

## The waveform

```
   i
   ^
 I0|      ___                     ___
   |    /     \                 /     \
   |  /         \             /         \
  0|/-----------\-----------/-----------\-----------> t
   |  T/4   T/2   \  3T/4  /   T          \
   |               \     /                 \     /
-I0|                 \_/                     \_/

   |<--------- one full cycle,  T seconds --------->|

   In the FIRST half cycle the current flows one way (positive).
   In the SECOND half cycle it flows the opposite way (negative).
```

## Why the world uses AC and not DC for transmission

This is a favourite 2-mark and 4-mark question.

```
  +------------------------------------------------------------------+
  |  1. AC voltage can be STEPPED UP and STEPPED DOWN easily and     |
  |     almost losslessly by a TRANSFORMER. DC cannot (a transformer |
  |     needs a CHANGING flux).                                      |
  |                                                                  |
  |  2. Power lost as heat in a transmission line is  P_loss = I^2 R |
  |     To send the same power P = V I, if we make V very LARGE      |
  |     then I becomes very SMALL, and I^2 R collapses.              |
  |     Example: 10x the voltage -> 1/10 the current -> 1/100 the loss|
  |                                                                  |
  |  3. AC generators and AC motors are simpler, cheaper and need    |
  |     less maintenance (no commutator, no brushes to burn out).    |
  |                                                                  |
  |  4. AC can be converted to DC easily (a rectifier), but DC to AC |
  |     is harder and more expensive.                                |
  +------------------------------------------------------------------+
```

### WORKED EXAMPLE 1.1
An AC supply is written as `v = 311 sin(314 t)` volt. Find the peak voltage, the
angular frequency, the frequency and the time period.

```
  Compare with   v = V0 sin(omega t)

  Peak voltage      V0    = 311 V

  Angular freq.     omega = 314 rad/s

                            omega        314
  Frequency         f     = --------- = ------- = 50 Hz
                             2 pi        6.283

  Time period       T     = 1/f = 1/50 = 0.02 s
```

> **TRAP:** 314 is NOT the frequency. It is `omega`. You must divide by `2 pi`.
> Learn the pair by heart: **omega = 314 rad/s means f = 50 Hz.**

---

# ===============================================================
# TOPIC 2 — MEAN VALUE AND RMS VALUE
# ===============================================================

## The problem

If someone asks "what is the value of the mains current?", what do we say? It is
+5 A, then 0, then −5 A, then 0 ... The **average over a whole cycle is exactly ZERO**,
because the positive half exactly cancels the negative half.

```
   i
   ^
   |    ___                   ___
   |  /  +  \               /  +  \        area ABOVE  = area BELOW
  0|/--------\-------------/-------\----->  so the full-cycle
   |          \    -     /           \      average = 0
   |            \______/               \___
```

So a full-cycle average is useless. We use **two** other measures instead.

---

## 2A. MEAN (AVERAGE) VALUE — over HALF a cycle

The mean value of AC is defined as the average taken over **one half cycle only**.

**Derivation (write this out — it is asked):**

```
  Let      i  =  I0 sin(omega t)

  Mean over half cycle:

                    1        T/2
        I_mean  = ------  INT     I0 sin(omega t) dt
                   T/2      0

                   2 I0    +-  - cos(omega t) -+ T/2
                = ------   |  ---------------  |
                    T      +-      omega      -+ 0

                   2 I0
                = --------- [ 1 - cos(omega T/2) ]
                  T omega

  Now  omega = 2 pi / T ,  so  omega T/2 = pi ,  and  cos(pi) = -1

                     2 I0
        I_mean  =  ------------- x [ 1 - (-1) ]
                   T (2 pi / T)

                     2 I0            2 I0
                =  --------- x 2 = --------
                     2 pi             pi
```

```
  +--------------------------------------------------------------+
  |                                                              |
  |             2 I0                              2 V0           |
  |   I_mean = ------ = 0.637 I0      V_mean =  ------ = 0.637 V0|
  |              pi                               pi             |
  |                                                              |
  |   (average over ONE HALF CYCLE; over a full cycle it is 0)   |
  |                                                              |
  +--------------------------------------------------------------+
```

---

## 2B. ROOT MEAN SQUARE (RMS) VALUE — the important one

**Idea:** the square of the current is *always positive*, whichever way the current
flows. And heat produced (`i^2 R`) also does not care about direction. So we:

```
   1. SQUARE the current            (kills the minus signs)
   2. take the MEAN of the square   (over one full cycle)
   3. take the square ROOT          (to get back to amperes)

   Read the name BACKWARDS to get the order of operations:
        R-M-S   =   Root  of the  Mean  of the  Square
```

**Definition in words (learn this sentence):**

> The RMS value of an alternating current is that value of **steady direct current**
> which produces the **same amount of heat** in the same resistance in the same time
> as the AC does.

That is why it is also called the **virtual value** or **effective value**.

**Derivation:**

```
  Let      i  =  I0 sin(omega t)

  Heat produced in time dt in resistance R:     dH = i^2 R dt

  Heat in one full cycle:

                T                        T
        H  =  INT  i^2 R dt  =  I0^2 R INT  sin^2(omega t) dt
                0                        0

  Use the identity        sin^2 A = ( 1 - cos 2A ) / 2

                  I0^2 R    T
        H  =     -------- INT  [ 1 - cos(2 omega t) ] dt
                     2      0

  Over one complete cycle the integral of cos(2 omega t) is ZERO,
  so only the "1" survives:

                  I0^2 R
        H  =     -------- x T
                     2

  Now let I_rms be the STEADY DC that gives the same heat in the same time T:

        H  =  I_rms^2 R T

  Equate the two:
                                   I0^2 R T
        I_rms^2 R T   =   ---------------------
                                     2

                              I0^2                 I0
        I_rms^2   =   ---------       ->   I_rms = --------
                          2                        sqrt(2)
```

```
  +--------------------------------------------------------------+
  |                                                              |
  |             I0                           V0                  |
  |   I_rms = --------- = 0.707 I0    V_rms = --------- = 0.707 V0|
  |            sqrt(2)                        sqrt(2)            |
  |                                                              |
  |   equivalently   I0 = sqrt(2) I_rms = 1.414 I_rms            |
  |                                                              |
  +--------------------------------------------------------------+
```

## Why an AC ammeter reads the RMS value

```
  A moving-coil (DC) meter would read the AVERAGE over a full cycle,
  which is ZERO -> the needle would just sit still and vibrate.

  So AC meters are HOT-WIRE type or MOVING-IRON type. Both work on a
  HEATING or a SQUARE-LAW effect, and the deflection depends on i^2.
  Since i^2 is always positive, the meter responds to the MEAN of i^2
  -> and therefore its scale is calibrated to show sqrt(mean of i^2)
  -> that is exactly the RMS value.

  THEREFORE: every AC ammeter and voltmeter reads RMS.
```

**Everything you are told in real life is an RMS value.** "230 V mains" means
V_rms = 230 V. The wave actually peaks at V0 = 230 x 1.414 = **325 V**. That is why
insulation must be rated for 325 V, not 230 V.

## Form factor and peak factor

```
  +----------------------------------------------------------------+
  |                                                                |
  |                    RMS value       I0 / sqrt(2)        pi      |
  |   FORM FACTOR  =  -------------  = --------------  = --------- |
  |                    Mean value       2 I0 / pi        2 sqrt(2) |
  |                                                                |
  |                =  1.11                                         |
  |                                                                |
  |                                                                |
  |                    Peak value        I0                        |
  |   PEAK FACTOR  =  -------------  = ----------- = sqrt(2)       |
  |   (crest factor)   RMS value       I0/sqrt(2)                  |
  |                                                                |
  |                =  1.414                                        |
  |                                                                |
  |   (both values are for a SINE wave only)                       |
  +----------------------------------------------------------------+
```

### WORKED EXAMPLE 2.1
The peak value of an alternating current is 10 A. Find (i) the rms value
(ii) the mean value over half a cycle (iii) the form factor.

```
  (i)    I_rms  = I0 / sqrt(2) = 10 / 1.414   =  7.07 A

  (ii)   I_mean = 2 I0 / pi    = (2 x 10)/3.1416 = 6.37 A

  (iii)  Form factor = 7.07 / 6.37 = 1.11        (check: pi/(2 sqrt2) = 1.11)
```

### WORKED EXAMPLE 2.2
The domestic supply is 230 V, 50 Hz. Write the equation of the instantaneous voltage.

```
  V0    = sqrt(2) x V_rms = 1.414 x 230 = 325.3 V

  omega = 2 pi f = 2 x 3.1416 x 50 = 314 rad/s

  Therefore     v = 325.3 sin(314 t)  volt
```

> **TRAP:** Students write `v = 230 sin(314 t)`. WRONG. The number in front of
> `sin` is the PEAK value, and 230 V is the RMS value. Multiply by 1.414 first.

---

# ===============================================================
# TOPIC 3 — AC THROUGH A PURE RESISTOR
# ===============================================================

```
  CIRCUIT

        +---------[ R ]---------+
        |                       |
        |                       |
        +---------( ~ )---------+
                v = V0 sin(omega t)
```

## Working

```
  Applied voltage         v = V0 sin(omega t)

  By Ohm's law, at every instant:

              v      V0 sin(omega t)
        i  = ---  =  ----------------  =  I0 sin(omega t)
              R             R

                                        V0
                             where I0 = ----
                                         R
```

Compare `v = V0 sin(omega t)` with `i = I0 sin(omega t)`. They have the **same angle**.

```
  +--------------------------------------------------------------+
  |   In a pure resistor, the current and the voltage are        |
  |   ALWAYS IN PHASE.   Phase difference  phi = 0.               |
  |                                                              |
  |   Opposition = R only. R does NOT depend on frequency.       |
  +--------------------------------------------------------------+
```

## Waveform

```
   ^                v and i rise and fall TOGETHER
   |     v ___                       ___
   |     i/    \                   /    \
   |    /       \                 /      \
  0+---/---------\---------------/--------\---------> omega t
   |  0   pi/2    \   pi        /  3pi/2   \   2pi
   |               \           /            \
   |                \_________/              \____

   Both cross zero at the same instant, both peak at the same instant.
```

## Phasor diagram

A **phasor** is an arrow whose length = the peak (or rms) value, rotating anticlockwise
at `omega`. The angle between two arrows = the phase difference.

```
              I0
        ------------->  V0        (drawn one on top of the other,
                                   or side by side)

        Both point in the SAME direction.
        Angle between them = 0.
```

## Power

```
  Since phi = 0,   cos(phi) = 1

        P = V_rms I_rms cos(0) = V_rms I_rms = I_rms^2 R

  A resistor CONSUMES power. It gets hot. Nothing is returned to the source.
```

### WORKED EXAMPLE 3.1
A 100 ohm resistor is connected to a 220 V, 50 Hz supply. Find the rms current, the
peak current and the power consumed.

```
  I_rms = V_rms / R = 220 / 100        =  2.2 A

  I0    = sqrt(2) x I_rms = 1.414 x 2.2 =  3.11 A

  P     = V_rms I_rms = 220 x 2.2       =  484 W
          (check: I_rms^2 R = 2.2^2 x 100 = 484 W)
```

---

# ===============================================================
# TOPIC 4 — AC THROUGH A PURE INDUCTOR
# ===============================================================

## What an inductor does

An inductor is just a **coil of wire**. When the current through it changes, the
changing magnetic flux induces a **back emf** that opposes the change (Lenz's law).
So an inductor **hates sudden changes of current**.

Analogy: an inductor is like the **inertia of a heavy flywheel**. Push it and it is
slow to start; it always lags behind what you are trying to make it do.

```
  CIRCUIT

        +--------[ L ]----------+          L = inductance, henry (H)
        |     (coil, UUUU)      |
        |                       |
        +---------( ~ )---------+
                v = V0 sin(omega t)
```

## Derivation

```
  The back emf across the inductor is  -L di/dt.
  For the loop (net emf = 0, no resistance):

             di
        v - L --  = 0            ->      L di/dt = V0 sin(omega t)
             dt

                     V0
             di  =  ---- sin(omega t) dt
                     L

  Integrate:

                V0                          V0
        i  =   ---- x  INT sin(omega t) dt = ---- x ( - cos(omega t) / omega )
                L                             L

                    V0
        i  =  -  --------- cos(omega t)
                 omega L

  Now use the identity      - cos(A)  =  sin( A - pi/2 )

  +----------------------------------------------------------+
  |                V0             +-           pi  -+        |
  |        i  =  --------- x sin  |  omega t - ---  |        |
  |               omega L         +-            2  -+        |
  |                                                          |
  |                                     V0                   |
  |           =  I0 sin(omega t - pi/2),   I0 = --------      |
  |                                             omega L      |
  +----------------------------------------------------------+
```

## Inductive reactance

```
  +--------------------------------------------------------------+
  |                                                              |
  |   XL  =  omega L  =  2 pi f L            unit: OHM           |
  |                                                              |
  |   V0 = I0 XL          V_rms = I_rms XL                       |
  |                                                              |
  |   XL is DIRECTLY PROPORTIONAL to frequency.                  |
  |     - for DC, f = 0  ->  XL = 0  -> an inductor is just a    |
  |       plain wire to DC                                       |
  |     - at high frequency XL is huge -> the inductor blocks it |
  |                                                              |
  |   THEREFORE an inductor is a "LOW PASS" device: it lets low  |
  |   frequencies (and DC) through and chokes high frequencies.  |
  |   That is why it is called a CHOKE.                          |
  +--------------------------------------------------------------+
```

## Phase relation — CURRENT LAGS VOLTAGE BY 90 degrees (pi/2)

```
  v = V0 sin(omega t)
  i = I0 sin(omega t - pi/2)      <-- the current's angle is SMALLER,
                                      so the current arrives LATER.
```

## Waveform

```
   ^
   |        v                        i is shifted RIGHT (later) by T/4
   |     ___                   ___
   |   /     \    i         /     \
   |  /       \  /  \      /       \  /   \
  0+-/---------\/----\----/---------\/-----\-------> omega t
   |/          /\     \  /          /\      \
   |          /  \     \/          /  \      \
   |    ____ /    \____/\_________/    \_____/
   |
   |<-- T/4 -->|
   voltage peaks FIRST, current peaks a quarter cycle LATER.
```

## Phasor diagram

```
                   ^  V0
                   |
                   |
                   |
                   +---------------->  I0
                   |    (phi = 90 deg)

        V0 is 90 degrees AHEAD of I0
        (phasors rotate ANTICLOCKWISE, so V0 sweeps past first)

        SAY IT AS:   "In L, current LAGS voltage by 90 degrees."
```

## No power is consumed

```
  Instantaneous power:

     p = v i = V0 sin(wt) x I0 sin(wt - pi/2)
             = - V0 I0 sin(wt) cos(wt)
             = - (V0 I0 / 2) sin(2 wt)

  The average of  sin(2 wt)  over a complete cycle is ZERO.

  +--------------------------------------------------------------+
  |   AVERAGE POWER IN A PURE INDUCTOR OVER A FULL CYCLE = 0     |
  +--------------------------------------------------------------+

  PHYSICALLY: in one quarter cycle the inductor STORES energy in its
  magnetic field; in the next quarter cycle it GIVES IT ALL BACK to
  the source. Nothing is dissipated. The current is called WATTLESS.
```

### WORKED EXAMPLE 4.1
A pure inductor of 0.5 H is connected across a 220 V, 50 Hz supply. Find the
inductive reactance and the current.

```
  XL   = 2 pi f L = 2 x 3.1416 x 50 x 0.5  =  157.1 ohm

  I_rms = V_rms / XL = 220 / 157.1         =  1.4 A

  Power consumed = 0   (pure inductor)
```

### WORKED EXAMPLE 4.2
The same inductor is now connected to a 220 V DC supply. What happens?

```
  For DC,  f = 0   ->   XL = 2 pi (0) L = 0

  The coil offers NO reactance, only its small ohmic resistance.
  The current becomes very large -> the coil will burn out.

  THIS IS WHY a fluorescent tube uses a CHOKE on AC, and why you must
  never connect a pure inductor across DC mains.
```

> **TRAP:** Reactance is measured in ohms, but it is **not** resistance. Resistance
> dissipates energy as heat; reactance only stores and returns it.

---

# ===============================================================
# TOPIC 5 — AC THROUGH A PURE CAPACITOR
# ===============================================================

## What a capacitor does

Two plates with an insulator between them. **No charge ever crosses the gap.** But when
the applied voltage changes, charge rushes onto one plate and off the other, and that
rush of charge in the wires **is** the current.

Analogy: a capacitor is like a **rubber membrane stretched across a pipe**. Water never
passes through, but push and pull the water and the membrane bulges back and forth —
so water does move in the pipe. Push slowly (low frequency) and almost nothing moves;
push fast (high frequency) and a lot moves.

```
  CIRCUIT

        +--------] [------------+         C = capacitance, farad (F)
        |      (plates)         |
        |                       |
        +---------( ~ )---------+
                v = V0 sin(omega t)
```

## Derivation

```
  Charge on the capacitor at any instant:

        q  =  C v  =  C V0 sin(omega t)

  Current is the rate of flow of charge:

              dq        d
        i  =  ---  =  C -- [ V0 sin(omega t) ]
              dt        dt

           =  C V0 omega cos(omega t)

  Use the identity      cos(A) = sin( A + pi/2 )

  +----------------------------------------------------------+
  |                    V0                +-          pi  -+  |
  |        i  =  --------------- x  sin  | omega t + ---  |  |
  |               1 / (omega C)          +-           2  -+  |
  |                                                          |
  |                                            V0            |
  |           =  I0 sin(omega t + pi/2),  I0 = -----------    |
  |                                            1/(omega C)   |
  +----------------------------------------------------------+
```

## Capacitive reactance

```
  +--------------------------------------------------------------+
  |                                                              |
  |              1              1                                |
  |   XC  =  ---------  =  ------------          unit: OHM       |
  |           omega C       2 pi f C                             |
  |                                                              |
  |   V0 = I0 XC          V_rms = I_rms XC                       |
  |                                                              |
  |   XC is INVERSELY PROPORTIONAL to frequency.                 |
  |     - for DC, f = 0  ->  XC = INFINITY -> a capacitor        |
  |       completely BLOCKS DC                                   |
  |     - at high frequency XC is tiny -> it passes AC easily    |
  |                                                              |
  |   THEREFORE a capacitor is a "HIGH PASS" device: it blocks   |
  |   DC and passes AC.                                          |
  +--------------------------------------------------------------+
```

## Phase relation — CURRENT LEADS VOLTAGE BY 90 degrees (pi/2)

```
  v = V0 sin(omega t)
  i = I0 sin(omega t + pi/2)      <-- the current's angle is LARGER,
                                      so the current arrives EARLIER.
```

## Waveform

```
   ^
   |     i                            i is shifted LEFT (earlier) by T/4
   |   ___          v
   | /     \      ___
   |/       \   /     \
  0+---------\-/-------\------/-----------> omega t
   |          X         \    /
   |         / \         \  /
   |   _____/   \_________\/

   |<-T/4->|
   current peaks FIRST, voltage peaks a quarter cycle LATER.
```

## Phasor diagram

```
                   ^  I0
                   |
                   |
                   |
                   +---------------->  V0
                        (phi = 90 deg)

        I0 is 90 degrees AHEAD of V0

        SAY IT AS:   "In C, current LEADS voltage by 90 degrees."
```

## No power is consumed

```
     p = v i = V0 sin(wt) x I0 sin(wt + pi/2)
             = V0 I0 sin(wt) cos(wt)
             = (V0 I0 / 2) sin(2 wt)

  Average of sin(2 wt) over one full cycle = 0.

  +--------------------------------------------------------------+
  |   AVERAGE POWER IN A PURE CAPACITOR OVER A FULL CYCLE = 0    |
  +--------------------------------------------------------------+

  The capacitor STORES energy in its electric field for a quarter cycle
  and RETURNS all of it in the next quarter cycle. Wattless again.
```

### WORKED EXAMPLE 5.1
A 25 microfarad capacitor is connected to a 220 V, 50 Hz supply. Find XC and the current.

```
  C = 25 x 10^-6 F

              1                        1
  XC  =  ------------  =  ------------------------------
          2 pi f C         2 x 3.1416 x 50 x 25 x 10^-6

              1
      =  -------------   =  127.3 ohm
         7.854 x 10^-3

  I_rms = 220 / 127.3  =  1.73 A          Power consumed = 0
```

## The "ELI the ICE man" memory trick

```
  +----------------------------------------------------------------+
  |                                                                |
  |     E  L  I            in inductance L, E (voltage) leads I    |
  |     ^  ^  ^                                                    |
  |     |  |  +-- current                                          |
  |     |  +----- inductor                                         |
  |     +-------- voltage (emf)                                    |
  |                                                                |
  |     I  C  E            in capacitance C, I (current) leads E   |
  |                                                                |
  +----------------------------------------------------------------+
```

---

# ===============================================================
# TOPIC 6 — SERIES LCR CIRCUIT (THE PHASOR METHOD)  *** 8 MARKS ***
# ===============================================================

This is the biggest question in the chapter. Learn to reproduce it exactly.

## The circuit

```
        +----[ R ]----[ L ]-----] [-----+
        |             UUUU              |
        |                               |
        +------------( ~ )--------------+
                 v = V0 sin(omega t)

        R, L and C are in SERIES, so the SAME current i flows
        through all three at every instant.
```

**Key idea:** because it is a series circuit, the **current is the common quantity**.
So we draw the current phasor first, along the reference direction, and hang all three
voltages off it.

## Step 1 — the three voltages

```
  Let      i  =  I0 sin(omega t)                (common current)

  +--------------+-----------------+-----------------------------+
  |  COMPONENT   |  VOLTAGE AMPL.  |  PHASE RELATIVE TO CURRENT  |
  +--------------+-----------------+-----------------------------+
  |  Resistor    |   VR = I0 R     |  IN PHASE with I            |
  |  Inductor    |   VL = I0 XL    |  90 deg AHEAD of I          |
  |  Capacitor   |   VC = I0 XC    |  90 deg BEHIND I            |
  +--------------+-----------------+-----------------------------+
```

## Step 2 — the phasor diagram

```
        VL  ^
            |
            |                              . V  (the resultant)
            |                          .
            |                      .
            |                  .
            |              .
            | (VL - VC).
            |      .
            |  .   phi
            +--------------------------------->  VR   and   I
            |                                    (reference direction)
            |
            |
        VC  v

  VL points UP (90 ahead).   VC points DOWN (90 behind).
  They are exactly OPPOSITE, so they partly cancel:
  their resultant is (VL - VC), drawn along the vertical.

  Now add (VL - VC) to VR as two PERPENDICULAR vectors.
```

## Step 3 — the resultant voltage

```
  By Pythagoras on the right-angled triangle:

        V^2  =  VR^2  +  ( VL - VC )^2

        V    =  sqrt[ VR^2 + (VL - VC)^2 ]

  Substitute VR = I0 R,  VL = I0 XL,  VC = I0 XC :

        V    =  sqrt[ (I0 R)^2 + (I0 XL - I0 XC)^2 ]

             =  I0 sqrt[ R^2 + (XL - XC)^2 ]
```

## Step 4 — impedance Z

```
  +--------------------------------------------------------------+
  |                                                              |
  |        V0            V_rms                                   |
  |   Z = ----   =   -----------    =  sqrt[ R^2 + (XL - XC)^2 ] |
  |        I0            I_rms                                   |
  |                                                              |
  |   Z is called the IMPEDANCE. Unit: OHM.                      |
  |   It is the TOTAL opposition of the circuit to AC.           |
  |                                                              |
  +--------------------------------------------------------------+
```

## Step 5 — the phase angle

```
  From the same triangle:

                 VL - VC       I0 XL - I0 XC        XL - XC
     tan(phi) = ---------  =  ---------------  =  -----------
                   VR              I0 R                R

  +--------------------------------------------------------------+
  |                                                              |
  |                 XL - XC                     R                |
  |   tan(phi) =  -----------      cos(phi) =  ---               |
  |                    R                        Z                |
  |                                                              |
  |   and the current is    i = I0 sin(omega t - phi)            |
  |                                                              |
  +--------------------------------------------------------------+
```

## THE IMPEDANCE TRIANGLE

Divide every side of the voltage triangle by I0 and you get the impedance triangle:

```
                                 /|
                               /  |
                        Z    /    |
                           /      |   (XL - XC)
                         /        |
                       /  phi     |
                     +------------+
                            R

              Z = sqrt( R^2 + (XL - XC)^2 )

              tan(phi) = (XL - XC) / R

              cos(phi) = R / Z          sin(phi) = (XL - XC) / Z
```

## THE THREE CASES — always write all three

```
  +---------------------+------------------+-------------------------------+
  |  CONDITION          |  PHASE ANGLE     |  NATURE OF THE CIRCUIT        |
  +---------------------+------------------+-------------------------------+
  |                     |                  |                               |
  |  XL  >  XC          |  phi is POSITIVE |  INDUCTIVE.                   |
  |                     |                  |  Voltage LEADS current.       |
  |                     |                  |  (current lags)               |
  |                     |                  |                               |
  +---------------------+------------------+-------------------------------+
  |                     |                  |                               |
  |  XL  <  XC          |  phi is NEGATIVE |  CAPACITIVE.                  |
  |                     |                  |  Current LEADS voltage.       |
  |                     |                  |                               |
  +---------------------+------------------+-------------------------------+
  |                     |                  |                               |
  |  XL  =  XC          |  phi = 0         |  PURELY RESISTIVE.            |
  |                     |                  |  Z = R (minimum)              |
  |                     |                  |  Current is MAXIMUM.          |
  |                     |                  |  *** RESONANCE ***            |
  |                     |                  |                               |
  +---------------------+------------------+-------------------------------+
```

### WORKED EXAMPLE 6.1
A series LCR circuit has R = 100 ohm, L = 0.5 H and C = 10 microfarad, connected to a
220 V, 50 Hz supply. Find (i) XL (ii) XC (iii) Z (iv) the current (v) the phase angle
(vi) the power factor (vii) the power consumed.

```
  (i)    XL = 2 pi f L = 2 x 3.1416 x 50 x 0.5              = 157.1 ohm

  (ii)             1                    1
         XC = ------------ = ------------------------------ = 318.3 ohm
               2 pi f C       2 x 3.1416 x 50 x 10 x 10^-6

  (iii)  XL - XC = 157.1 - 318.3 = -161.2 ohm

         Z = sqrt( R^2 + (XL - XC)^2 )
           = sqrt( 100^2 + (-161.2)^2 )
           = sqrt( 10000 + 25985 )
           = sqrt( 35985 )                                   = 189.7 ohm

  (iv)   I_rms = V_rms / Z = 220 / 189.7                     = 1.16 A

  (v)              XL - XC     -161.2
         tan(phi) = -------- = --------  =  -1.612
                       R          100

         phi = -58.2 degrees      (minus -> CURRENT LEADS, capacitive)

  (vi)   cos(phi) = R / Z = 100 / 189.7                      = 0.527

  (vii)  P = V_rms I_rms cos(phi) = 220 x 1.16 x 0.527       = 134.5 W

         CHECK using  P = I_rms^2 R = (1.16)^2 x 100 = 134.6 W   OK
```

> **TRAP 1:** Do **not** write `Z = R + XL + XC`. They are at different angles.
> You must use Pythagoras.
>
> **TRAP 2:** In the formula it is `(XL - XC)` and it is **squared**, so the order
> does not matter for Z. But for `tan(phi)` the **sign matters** — it tells you
> whether the circuit is inductive or capacitive.
>
> **TRAP 3:** Convert microfarad to farad (`x 10^-6`) and millihenry to henry
> (`x 10^-3`) before substituting. This single slip costs more marks than anything
> else in the chapter.

---

# ===============================================================
# TOPIC 7 — RESONANCE IN A SERIES LCR CIRCUIT
# ===============================================================

## The idea

`XL = omega L` grows as the frequency rises.
`XC = 1/(omega C)` shrinks as the frequency rises.
So there must be **one frequency where they are exactly equal**. At that frequency
they cancel completely and the circuit behaves as if only R were present.

```
   Reactance
      ^
      |\                                    /
      | \  XC = 1/(wC)                    /   XL = wL
      |  \                              /
      |    \                          /
      |      \                      /
      |         \                 /
      |            \            /
      |               \       /
      |                  \  /  <-- they cross here: XL = XC
      +-------------------X-----------------------> frequency
                          f0    = RESONANT FREQUENCY
```

## Resonant frequency

```
  At resonance:      XL  =  XC

                                  1
              omega0 L   =   -----------
                              omega0 C

                              1
              omega0^2  =  --------
                              L C

  +--------------------------------------------------------------+
  |                                                              |
  |                   1                          1               |
  |   omega0  =  ------------        f0  =  ---------------      |
  |               sqrt(L C)                  2 pi sqrt(L C)      |
  |                                                              |
  +--------------------------------------------------------------+
```

## What happens at resonance

```
  +-------------------------------------------------------------------+
  |  1.  XL = XC   ->  (XL - XC) = 0                                  |
  |  2.  Z = sqrt(R^2 + 0) = R          -> IMPEDANCE IS MINIMUM       |
  |  3.  I = V / R                      -> CURRENT IS MAXIMUM         |
  |  4.  tan(phi) = 0 / R = 0  -> phi = 0  -> V and I IN PHASE        |
  |  5.  Power factor cos(phi) = 1      -> MAXIMUM power transfer     |
  |  6.  The circuit behaves as a PURE RESISTANCE                     |
  |  7.  VL and VC are equal and opposite; they cancel each other.    |
  |      (Each may individually be much LARGER than the supply        |
  |       voltage — this is called voltage magnification.)            |
  +-------------------------------------------------------------------+

  A series resonant circuit is also called an ACCEPTOR CIRCUIT,
  because it "accepts" (draws maximum current at) one frequency.
```

## THE RESONANCE CURVE

```
    I
    ^
    |                    * *
Imax|                  *  |  *          <-- small R : TALL and SHARP peak
    |                 *   |   *             (highly selective, high Q)
    |                *    |    *
    |               *     |     *
Imax|- - - - - - - *------|------* - - - - - - -
sqrt|             *       |       *
(2) |           *  .......|.......  *   <-- half-power points
    |         *   .       |       .   *
    |      *     .        |        .     *   <-- large R : short, BROAD peak
    |   *      .          |          .        *      (poorly selective, low Q)
    | *      .            |            .           *
    +--------+------------+------------+---------------> frequency f
             f1           f0           f2

    BANDWIDTH  =  f2 - f1     (in angular terms, 2 delta w = R / L)

    f1 and f2 are the HALF-POWER points, where the current has fallen
    to Imax / sqrt(2), i.e. the power has fallen to half its maximum.
```

## Sharpness of resonance and the QUALITY FACTOR Q

A **sharp** peak means the circuit responds strongly to `f0` and almost ignores nearby
frequencies — it is **selective**. Sharpness is measured by the quality factor Q.

```
  +--------------------------------------------------------------+
  |                                                              |
  |            omega0            omega0 L          1             |
  |    Q  =  ------------   =  -----------  =  -------------     |
  |           bandwidth             R           omega0 C R       |
  |                                                              |
  |  and substituting omega0 = 1/sqrt(LC) :                      |
  |                                                              |
  |            1        +-  L  -+                                |
  |    Q  =   ---  sqrt |  ---  |                                |
  |            R        +-  C  -+                                |
  |                                                              |
  |    BANDWIDTH (angular) =  R / L                              |
  |                                                              |
  |    Q is a PURE NUMBER (no unit).                             |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  SMALL R  ->  large Q  ->  narrow bandwidth  ->  SHARP peak  ->  very selective
  LARGE R  ->  small Q  ->  wide bandwidth    ->  FLAT peak   ->  poorly selective
```

Q also equals the voltage magnification: `VL(at resonance) / V = VC / V = Q`.

## Application — TUNING A RADIO

```
  Hundreds of stations reach your aerial at the same time, each at a
  different frequency. The receiver contains a series LCR circuit with a
  VARIABLE CAPACITOR (the tuning knob).

  Turning the knob changes C, which changes  f0 = 1/(2 pi sqrt(LC)).

  When f0 is made equal to the frequency of ONE station, that station's
  signal drives a RESONANT (maximum) current in the circuit, while all
  the others produce almost nothing. That station alone is heard.

  A HIGH Q is essential; otherwise nearby stations bleed through.
```

### WORKED EXAMPLE 7.1
A series LCR circuit has L = 2.0 H, C = 32 microfarad and R = 10 ohm. Find the
resonant angular frequency, the resonant frequency, the Q factor and the bandwidth.

```
  C = 32 x 10^-6 F

                1                    1                     1
  omega0 = ------------ = --------------------------- = ----------- = 125 rad/s
            sqrt(L C)      sqrt(2.0 x 32 x 10^-6)        8 x 10^-3

           (because 2.0 x 32 x 10^-6 = 64 x 10^-6 , and sqrt = 8 x 10^-3)

           omega0        125
  f0  =  ---------- = ---------  =  19.9 Hz
            2 pi        6.283

           omega0 L      125 x 2.0
  Q   =  ----------- =  -----------  =  25
              R              10

  CHECK:   Q = (1/R) sqrt(L/C) = (1/10) sqrt( 2.0 / 32x10^-6 )
             = (1/10) sqrt( 62500 ) = (1/10)(250) = 25      OK

  Bandwidth (angular) = R / L = 10 / 2.0 = 5 rad/s
```

> **TRAP:** At resonance the current is maximum, **not** the impedance. Many students
> write "impedance is maximum" out of habit. In a **series** LCR circuit at resonance,
> **Z is MINIMUM and I is MAXIMUM**. (It is the *parallel* LC circuit — the rejector
> circuit — that has maximum impedance and minimum current at resonance.)

---

# ===============================================================
# TOPIC 8 — POWER IN AN AC CIRCUIT
# ===============================================================

## Instantaneous power

```
  Let      v = V0 sin(omega t)
           i = I0 sin(omega t - phi)

  Instantaneous power  p = v i

    p = V0 I0 sin(omega t) sin(omega t - phi)

  Use    2 sin A sin B  =  cos(A - B) - cos(A + B)

          V0 I0
    p =  ------- [ cos(phi)  -  cos(2 omega t - phi) ]
             2
```

## Average power over one full cycle

```
  Average of  cos(2 omega t - phi)  over a complete cycle  =  0.
  cos(phi) is a constant, so its average is itself.

           V0 I0
    P  =  ------- cos(phi)
              2

           V0        I0
       =  ------ x ------ x cos(phi)
          sqrt2     sqrt2

  +--------------------------------------------------------------+
  |                                                              |
  |     P  =  V_rms  x  I_rms  x  cos(phi)                       |
  |                                                              |
  |     "TRUE POWER  =  APPARENT POWER  x  POWER FACTOR"         |
  |                                                              |
  +--------------------------------------------------------------+
```

## Three names you must know

```
  +------------------+-----------------------+-------------------------+
  |  NAME            |  FORMULA              |  UNIT                   |
  +------------------+-----------------------+-------------------------+
  |  APPARENT power  |  V_rms x I_rms        |  volt-ampere (VA)       |
  |  TRUE (real)     |  V_rms I_rms cos(phi) |  watt (W)               |
  |  REACTIVE power  |  V_rms I_rms sin(phi) |  volt-ampere-reactive   |
  +------------------+-----------------------+-------------------------+
```

## POWER FACTOR

```
  +--------------------------------------------------------------+
  |                                                              |
  |                       True power        R                    |
  |   POWER FACTOR  =  ---------------  =  ---  =  cos(phi)      |
  |                     Apparent power      Z                    |
  |                                                              |
  |   It has NO UNIT. Its value lies between 0 and 1.            |
  |                                                              |
  +--------------------------------------------------------------+

  +-------------------------+-----------------+---------------------+
  |  CIRCUIT                |  cos(phi)       |  AVERAGE POWER      |
  +-------------------------+-----------------+---------------------+
  |  Pure resistor          |  1   (phi = 0)  |  V_rms I_rms  (max) |
  |  Pure inductor          |  0   (phi = 90) |  ZERO               |
  |  Pure capacitor         |  0   (phi = 90) |  ZERO               |
  |  Series LCR             |  R / Z          |  V I cos(phi)       |
  |  LCR at RESONANCE       |  1   (phi = 0)  |  V_rms I_rms  (max) |
  +-------------------------+-----------------+---------------------+
```

## WATTLESS CURRENT (idle current)

```
  Resolve the current phasor into two components along and perpendicular
  to the voltage:

              I  ^ . . . . . . .  I sin(phi)   <-- PERPENDICULAR component
                 |\                                = WATTLESS CURRENT
                 | \                                 (contributes ZERO power)
                 |  \  I
                 |   \
                 |phi \
                 +-----\------------> V
                 I cos(phi)
                 ^
                 +-- component ALONG V = the part that actually does work
                     (the "power component")

  +--------------------------------------------------------------+
  |   WATTLESS CURRENT  =  I_rms sin(phi)                        |
  |                                                              |
  |   It flows in the wires, heats them up, and needs thicker    |
  |   cable — but it delivers NO useful power. In a pure L or a  |
  |   pure C the WHOLE current is wattless.                      |
  +--------------------------------------------------------------+
```

## How to IMPROVE the power factor

Factories are charged penalties for a low power factor, because a low power factor means
a large current for the same useful power, which means large `I^2 R` losses in the lines.

```
  Most industrial loads (motors, transformers, chokes) are INDUCTIVE,
  so the current LAGS and cos(phi) is low (0.6 - 0.8).

  CURE:  connect a CAPACITOR IN PARALLEL with the load.

        +-------------------+-------------------+
        |                   |                   |
       ( ~ )              [ C ]           [ INDUCTIVE ]
        |                   |             [   LOAD    ]
        +-------------------+-------------------+

  The capacitor draws a LEADING current, which cancels part of the
  LAGGING current of the load. The net phase angle phi falls,
  cos(phi) rises towards 1, and the line current drops.

  (Large plants use "capacitor banks" or synchronous condensers.)
```

### WORKED EXAMPLE 8.1
A series LCR circuit draws 5 A from a 200 V, 50 Hz supply and the phase angle is
60 degrees. Find the apparent power, the true power and the wattless current.

```
  Apparent power  = V_rms I_rms = 200 x 5              = 1000 VA

  cos(60) = 0.5

  True power      = 200 x 5 x 0.5                      = 500 W

  Wattless current = I_rms sin(phi) = 5 x sin(60)
                   = 5 x 0.866                         = 4.33 A

  Power component  = I_rms cos(phi) = 5 x 0.5          = 2.5 A
```

### WORKED EXAMPLE 8.2
An electric lamp marked 100 W, 220 V is run on a 220 V, 50 Hz supply. Find its
resistance and the peak current.

```
  R = V^2 / P = (220)^2 / 100 = 48400 / 100            = 484 ohm

  I_rms = P / V = 100 / 220                            = 0.4545 A

  I0 = sqrt(2) x 0.4545                                = 0.643 A
```

---

# ===============================================================
# TOPIC 9 — LC OSCILLATIONS
# ===============================================================

## The set-up

Charge a capacitor, then connect it across an inductor with **no resistance at all**.
The charge does not simply drain away — it **oscillates** back and forth for ever.

```
        +-------] [-------+
        |    C            |
        |                 |
        +------ UUUU -----+
                  L
```

## The four stages of one cycle

```
  STAGE 1   Capacitor FULLY CHARGED.
            All energy is ELECTRIC:  U = q0^2 / (2C).  Current i = 0.

  STAGE 2   Capacitor discharges through L. Current grows.
            Energy transfers from the electric field to the MAGNETIC field.

  STAGE 3   Capacitor FULLY DISCHARGED (q = 0), current MAXIMUM.
            All energy is MAGNETIC:  U = (1/2) L I0^2.

  STAGE 4   The inductor's inertia keeps the current going, so the
            capacitor CHARGES UP THE OTHER WAY.

            ... and then the whole thing runs backwards. One cycle done.
```

## The analogy with a mass on a spring — learn this table

```
  +----------------------------+---------------------------------+
  |   LC CIRCUIT               |   MASS ON A SPRING              |
  +----------------------------+---------------------------------+
  |   charge          q        |   displacement       x          |
  |   current         i = dq/dt|   velocity           v = dx/dt  |
  |   inductance      L        |   mass               m          |
  |   1 / capacitance 1/C      |   spring constant    k          |
  |   electric energy q^2/(2C) |   potential energy   (1/2) k x^2|
  |   magnetic energy (1/2)L i^2|  kinetic energy     (1/2) m v^2|
  |   resistance      R        |   friction / damping            |
  +----------------------------+---------------------------------+

        Spring:   omega = sqrt( k / m )
        LC:       omega = sqrt( (1/C) / L ) = 1 / sqrt(LC)     SAME SHAPE
```

## The equation and the frequency

```
  Kirchhoff's loop rule for the LC loop:

              d^2 q          q
        L  x  -------  +   -----  =  0
               dt^2          C

              d^2 q         1
        ->   ------- = - ------ q       <--- exactly SHM in q
               dt^2        LC

  +--------------------------------------------------------------+
  |                     1                          1             |
  |    omega0  =  ------------        f0  =  ---------------     |
  |                sqrt(L C)                  2 pi sqrt(L C)     |
  |                                                              |
  |    q = q0 cos(omega0 t)                                      |
  |                                                              |
  |    Total energy  =  q0^2 / (2C)  =  (1/2) L I0^2  = CONSTANT |
  +--------------------------------------------------------------+
```

**In a real circuit** there is always some resistance, so the oscillations gradually die
away — they are **damped**, exactly like a real pendulum slowed by air friction.

### WORKED EXAMPLE 9.1
An LC circuit has L = 20 mH and C = 50 microfarad. Find the frequency of oscillation.

```
  L = 20 x 10^-3 H ,  C = 50 x 10^-6 F

  L C = 20 x 10^-3 x 50 x 10^-6 = 1000 x 10^-9 = 1 x 10^-6

  sqrt(LC) = 1 x 10^-3

                 1                1
  f0 =  ------------------ = --------------------  =  159.2 Hz
        2 pi x sqrt(LC)      6.283 x 1 x 10^-3
```

---

# ===============================================================
# TOPIC 10 — THE TRANSFORMER
# ===============================================================

## What it does

A transformer **changes an AC voltage** from one value to another. It cannot change DC.
It does **not** create energy — if voltage goes up, current goes down.

## Construction

```
                 SOFT IRON LAMINATED CORE
        +===================================+
        ||                                 ||
    ~~~ || (((((                     ))))) ||  ~~~
    AC  || (((((                     ))))) ||   to
   IN   || (((((                     ))))) ||  LOAD
        || (((((                     ))))) ||
        ||   ^                         ^   ||
        +===================================+
             |                         |
        PRIMARY COIL              SECONDARY COIL
        Np turns, Vp, Ip          Ns turns, Vs, Is

        The two coils are electrically SEPARATE.
        They are linked only by the MAGNETIC FLUX in the iron core.
        The core is made of thin LAMINATED sheets, insulated from
        each other (to cut down eddy currents).
```

## Principle — MUTUAL INDUCTION

```
  1.  AC in the primary produces a CHANGING magnetic flux.
  2.  The soft-iron core carries almost all this flux to the secondary
      (this is why the core is a closed loop of soft iron).
  3.  The changing flux through the secondary induces an emf in it
      (Faraday's law). This is MUTUAL INDUCTION.

  4.  If the same flux "phi" links every turn:

             emf in primary       ep = - Np  (d phi / dt)
             emf in secondary     es = - Ns  (d phi / dt)

      Divide one by the other -> the (d phi/dt) cancels:

             es / ep  =  Ns / Np
```

## The transformer equations

```
  +--------------------------------------------------------------+
  |                                                              |
  |      Vs        Ns        Ip                                  |
  |     ----  =   ----  =   ----   =   k   (the TURNS RATIO)     |
  |      Vp        Np        Is                                  |
  |                                                              |
  |   For an IDEAL (100% efficient) transformer:                 |
  |                                                              |
  |        Vp Ip   =   Vs Is         (power in = power out)      |
  |                                                              |
  +--------------------------------------------------------------+
```

> **NOTE the reversal:** voltage and turns go the **same** way (`Vs/Vp = Ns/Np`),
> but current goes the **opposite** way (`Ip/Is = Ns/Np`, i.e. `Is/Ip = Np/Ns`).

## Step-up and step-down

```
  +---------------+-------------+---------------+--------------------+
  |  TYPE         |  TURNS      |  VOLTAGE      |  CURRENT           |
  +---------------+-------------+---------------+--------------------+
  |  STEP-UP      |  Ns > Np    |  Vs > Vp      |  Is < Ip           |
  |               |  k > 1      |  raised       |  reduced           |
  +---------------+-------------+---------------+--------------------+
  |  STEP-DOWN    |  Ns < Np    |  Vs < Vp      |  Is > Ip           |
  |               |  k < 1      |  lowered      |  increased         |
  +---------------+-------------+---------------+--------------------+

  The step-up transformer has THIN wire (small current) on the secondary
  and THICK wire on the primary; the step-down transformer is the reverse.
```

## ENERGY LOSSES AND HOW EACH IS REDUCED — a guaranteed 4-mark question

```
  +---------------------+--------------------------------+------------------------+
  |  LOSS               |  CAUSE                         |  HOW IT IS MINIMISED   |
  +---------------------+--------------------------------+------------------------+
  |  1. COPPER LOSS     |  Heat produced in the          |  Use THICK copper wire |
  |     (I^2 R loss)    |  resistance of the windings    |  of LOW resistance     |
  |                     |                                |                        |
  +---------------------+--------------------------------+------------------------+
  |  2. IRON LOSS       |  The changing flux induces     |  Use a LAMINATED core  |
  |     (EDDY CURRENT)  |  swirling currents inside the  |  - thin sheets varnish-|
  |                     |  solid core, which heat it     |  ed / insulated from   |
  |                     |                                |  each other, so the    |
  |                     |                                |  eddy loops are broken |
  +---------------------+--------------------------------+------------------------+
  |  3. HYSTERESIS LOSS |  Energy spent repeatedly       |  Use a SOFT IRON core  |
  |                     |  magnetising and demagnetising |  (or silicon steel) -  |
  |                     |  the core each cycle           |  it has a very NARROW  |
  |                     |                                |  hysteresis loop       |
  +---------------------+--------------------------------+------------------------+
  |  4. FLUX LEAKAGE    |  Not all the flux of the       |  Wind the two coils    |
  |                     |  primary reaches the secondary |  ONE OVER THE OTHER on |
  |                     |                                |  the SAME limb of a    |
  |                     |                                |  closed core           |
  +---------------------+--------------------------------+------------------------+
  |  5. HUMMING /       |  Magnetostriction - the core   |  Clamp the core tightly|
  |     VIBRATION       |  vibrates at the AC frequency  |                        |
  +---------------------+--------------------------------+------------------------+
```

## Efficiency

```
  +--------------------------------------------------------------+
  |                                                              |
  |                   output power        Vs Is                  |
  |   efficiency  =  ---------------  =  -------  x 100 %        |
  |                   input power         Vp Ip                  |
  |                                                              |
  |   A good transformer reaches 95 % to 99 %.                   |
  |   It is the most efficient machine ever built - it has       |
  |   NO MOVING PARTS.                                           |
  +--------------------------------------------------------------+
```

## Transformers in long-distance power transmission

```
  POWER STATION        STEP-UP           LONG LINE          STEP-DOWN      HOMES
   11 kV  ---------->  [ T1 ]  ------ 220 kV / 400 kV -----> [ T2 ] ----> 230 V
   generated           raises          low current            lowers      safe
                       voltage         => tiny I^2 R loss     voltage     to use

  THE ARGUMENT (write this in the exam):

     Power to be sent  P = V I           ->    I = P / V

     Power lost in the line  P_loss = I^2 R  =  ( P / V )^2 R

     So P_loss is INVERSELY PROPORTIONAL to V^2.

     Multiply the transmission voltage by 20 (11 kV -> 220 kV)
     and the line loss falls by a factor of 400.

  THIS IS THE WHOLE REASON THE WORLD RUNS ON AC.
```

### WORKED EXAMPLE 10.1
A transformer has 100 turns in the primary and 500 turns in the secondary. The primary
is connected to 220 V AC. Find the secondary voltage. If the secondary current is 2 A,
find the primary current (assume ideal).

```
        Vs      Ns          Ns                500
        --- =  ----   ->    Vs = Vp x ---- = 220 x -----  =  1100 V
        Vp      Np                Np                100

        Step-UP transformer (Ns > Np).

        Ideal:   Vp Ip = Vs Is

                 Vs Is        1100 x 2       2200
        Ip  =  ---------  =  ----------  =  ------   =  10 A
                   Vp            220          220

        Note: voltage went UP 5 times, current went DOWN 5 times.
        Power = 2200 W on both sides.
```

### WORKED EXAMPLE 10.2
A transformer takes 2200 W from the mains and delivers 2090 W. Find its efficiency and
the power lost.

```
        efficiency = (2090 / 2200) x 100  =  95 %

        power lost = 2200 - 2090          =  110 W
```

> **TRAP:** "Can a transformer step up power?" **NO.** It steps up *voltage* only,
> and the current falls in exactly the same proportion. A transformer never creates
> energy. If a question says the output power is greater than the input, it is wrong.

---

# ===============================================================
# TOPIC 11 — THE AC GENERATOR (in brief)
# ===============================================================

```
  PRINCIPLE:  ELECTROMAGNETIC INDUCTION.
              A coil rotating in a magnetic field has a continuously
              changing flux linked with it, so an emf is induced.

  PARTS:      Armature (coil on a soft iron core)
              Field magnets (produce B)
              TWO SLIP RINGS (this is what makes it AC)
              Two carbon brushes

        +---------------------------------------------+
        |                                             |
        |   N  |    +-----------------+       |  S    |
        |      |    |     COIL        |       |       |
        |      |    +-----------------+       |       |
        |                   ||                        |
        |             ==(O)=====(O)==   two SLIP RINGS|
        |                \        \                   |
        |               brush     brush               |
        |                 |         |                 |
        +-----------------+---[ R ]-+-----------------+
```

```
  Flux through the coil     phi = N B A cos(omega t)

                                d phi
  Induced emf         e  =  -  -------   =  N B A omega sin(omega t)
                                 dt

  +--------------------------------------------------------------+
  |     e  =  e0 sin(omega t)        with   e0 = N B A omega     |
  +--------------------------------------------------------------+

  A DC generator is the SAME machine with a SPLIT-RING COMMUTATOR
  instead of two slip rings. The commutator flips the connections
  every half turn, so the output never goes negative.
```

## AC versus DC

```
  +----------------------+------------------------+-----------------------+
  |  POINT               |  AC                    |  DC                   |
  +----------------------+------------------------+-----------------------+
  |  Direction           |  reverses periodically |  always one way       |
  |  Magnitude           |  varies (sine wave)    |  constant             |
  |  Frequency (India)   |  50 Hz                 |  0 Hz                 |
  |  Voltage change      |  easy, by transformer  |  difficult, costly    |
  |  Transmission        |  cheap over long       |  expensive over long  |
  |                      |  distances             |  distances            |
  |  Generation          |  slip rings            |  split-ring commutator|
  |  Measured by         |  hot-wire / moving-iron|  moving-coil meter    |
  |  Effect on the body  |  more dangerous at the |  causes a single      |
  |                      |  same rms voltage      |  strong shock         |
  |  Electrolysis        |  cannot be used        |  used                 |
  |  Chemical/plating    |  no                    |  yes                  |
  +----------------------+------------------------+-----------------------+
```

---

# ===============================================================
# CHECKLIST BEFORE YOU HAND IN THE PAPER
# ===============================================================

```
  [ ]  Did I convert microfarad to farad (x 10^-6) and mH to H (x 10^-3)?
  [ ]  Did I use omega = 2 pi f  and NOT just f, in XL and XC?
  [ ]  Is my V (230 V mains) the RMS value? Did I multiply by 1.414
       when the question asked for the PEAK value?
  [ ]  In the LCR answer, did I DRAW the circuit diagram, the phasor
       diagram AND the impedance triangle? (marks are given for each)
  [ ]  Did I write Z = sqrt(R^2 + (XL - XC)^2) and NOT R + XL + XC?
  [ ]  Did I state all THREE cases (XL > XC, XL < XC, XL = XC)?
  [ ]  At resonance did I say IMPEDANCE MINIMUM and CURRENT MAXIMUM
       (series circuit)?
  [ ]  Did I include cos(phi) in the power formula? P = Vrms Irms cos(phi)
  [ ]  Did I say average power in a pure L or pure C is ZERO?
  [ ]  In the transformer, is it  Vs/Vp = Ns/Np = Ip/Is  (current inverted)?
  [ ]  Did I list all FOUR transformer losses AND how each is reduced?
  [ ]  Did I write the UNIT after every numerical answer
       (ohm, ampere, volt, watt, hertz)?
  [ ]  Did I underline / box my final answers?
```

**Last words:** in this chapter the examiner is looking for **diagrams and formulas**,
not essays. Draw the phasor diagram even if you are not sure of the numbers. Write the
formula before substituting. Both earn marks on their own.
