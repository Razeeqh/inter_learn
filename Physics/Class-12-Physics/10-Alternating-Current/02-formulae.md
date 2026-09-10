# Alternating Current — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
Almost every numerical in this chapter is solved by four lines from this sheet.

---

# 1. THE BASIC AC QUANTITIES

```
  +--------------------------------------------------------------+
  |                                                              |
  |   v  =  V0 sin(omega t)          i  =  I0 sin(omega t)       |
  |                                                              |
  |   omega  =  2 pi f  =  2 pi / T          (rad / s)           |
  |                                                              |
  |   T  =  1 / f            f (India) = 50 Hz , T = 0.02 s      |
  |                                                              |
  |   omega for 50 Hz  =  314 rad/s      <-- memorise this pair  |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `v = V0 sin(omega t)` | to read off V0 and omega from a given equation |
| `omega = 2 pi f` | whenever the question gives f in Hz and you need omega |
| `T = 1/f` | time period questions; time to reach peak = T/4 |
| `f = omega / (2 pi)` | equation given as `sin(314 t)` and frequency is asked |

---

# 2. MEAN AND RMS VALUES  *** learn all six numbers ***

```
  +--------------------------------------------------------------+
  |                                                              |
  |                  I0                                          |
  |   RMS      I_rms = -------- = 0.707 I0                       |
  |                    sqrt(2)                                   |
  |                                                              |
  |                    V0                                        |
  |            V_rms = -------- = 0.707 V0                       |
  |                    sqrt(2)                                   |
  |                                                              |
  |            I0 = sqrt(2) I_rms = 1.414 I_rms                  |
  |                                                              |
  |                    2 I0                                      |
  |   MEAN     I_mean = ------ = 0.637 I0    (HALF cycle only)   |
  |                      pi                                      |
  |                                                              |
  |            mean over a FULL cycle = 0                        |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  +--------------------------------------------------------------+
  |                   RMS         pi                             |
  |   FORM FACTOR =  ------  =  --------- =  1.11                |
  |                   MEAN       2 sqrt2                         |
  |                                                              |
  |                   PEAK                                       |
  |   PEAK FACTOR =  ------  =  sqrt(2)   =  1.414               |
  |                   RMS                                        |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `I_rms = I0 / sqrt(2)` | peak given, rms asked (and every meter reading) |
| `I0 = 1.414 I_rms` | "230 V mains" given, peak voltage asked (= 325 V) |
| `I_mean = 2 I0 / pi` | "average value over half a cycle" |
| `form factor = 1.11` | direct 2-mark recall |
| `peak factor = 1.414` | direct 2-mark recall |

**The four numbers to burn in:** `0.707` `0.637` `1.11` `1.414`

---

# 3. THE THREE PURE COMPONENTS

```
  +-----------+----------------+--------------------+------------------+
  |  ELEMENT  |  OPPOSITION    |  PHASE OF CURRENT  |  AVERAGE POWER   |
  +-----------+----------------+--------------------+------------------+
  |           |                |                    |                  |
  |  R only   |  R             |  IN PHASE with V   |  V_rms I_rms     |
  |           |  (no f effect) |  phi = 0           |  = I_rms^2 R     |
  |           |                |                    |                  |
  +-----------+----------------+--------------------+------------------+
  |           |                |                    |                  |
  |  L only   |  XL = omega L  |  LAGS V by 90 deg  |  ZERO            |
  |           |     = 2 pi f L |  i = I0 sin(wt-90) |  (wattless)      |
  |           |                |                    |                  |
  +-----------+----------------+--------------------+------------------+
  |           |        1       |                    |                  |
  |  C only   |  XC = -------- |  LEADS V by 90 deg |  ZERO            |
  |           |       omega C  |  i = I0 sin(wt+90) |  (wattless)      |
  |           |                |                    |                  |
  |           |     =    1     |                    |                  |
  |           |       -------- |                    |                  |
  |           |       2 pi f C |                    |                  |
  +-----------+----------------+--------------------+------------------+
```

## Frequency behaviour (asked as 2-mark questions)

```
  +----------------+---------------------+--------------------------+
  |                |  at DC (f = 0)      |  at very HIGH frequency  |
  +----------------+---------------------+--------------------------+
  |  XL = 2 pi f L |  XL = 0             |  XL = very large         |
  |                |  inductor = a wire  |  inductor BLOCKS (choke) |
  +----------------+---------------------+--------------------------+
  |  XC = 1/(2pifC)|  XC = INFINITY      |  XC = almost zero        |
  |                |  capacitor BLOCKS DC|  capacitor PASSES AC     |
  +----------------+---------------------+--------------------------+
```

| Formula | When to use |
|---|---|
| `XL = 2 pi f L` | inductor in the circuit; L given in H (convert mH!) |
| `XC = 1/(2 pi f C)` | capacitor in the circuit; C given in F (convert uF!) |
| `V_rms = I_rms XL` | current through a pure inductor |
| `V_rms = I_rms XC` | current through a pure capacitor |
| `P = 0` for pure L or C | "power consumed by a pure inductor/capacitor" |

**Memory:** `ELI the ICE man` — in **L**, **E** before **I** (current lags);
in **C**, **I** before **E** (current leads).

---

# 4. SERIES LCR CIRCUIT  *** the core of the chapter ***

```
  +--------------------------------------------------------------+
  |                                                              |
  |   IMPEDANCE     Z  =  sqrt[ R^2  +  ( XL - XC )^2 ]          |
  |                                                              |
  |                        V_rms         V0                      |
  |                 Z  =  -------  =  ------                     |
  |                        I_rms         I0                      |
  |                                                              |
  |                          XL - XC                             |
  |   PHASE ANGLE   tan(phi) = ---------                         |
  |                             R                                |
  |                                                              |
  |                           R                     XL - XC      |
  |                 cos(phi) = ---     sin(phi) = -----------    |
  |                            Z                       Z         |
  |                                                              |
  |   CURRENT       i  =  I0 sin( omega t  -  phi )              |
  |                                                              |
  |   VOLTAGES      V  =  sqrt[ VR^2 + ( VL - VC )^2 ]           |
  |                 VR = I R ,  VL = I XL ,  VC = I XC           |
  |                                                              |
  +--------------------------------------------------------------+
```

## The impedance triangle

```
                        /|
                      /  |
               Z    /    |
                  /      |  ( XL - XC )
                /        |
              /  phi     |
            +------------+
                  R
```

## Special series cases (short-cut impedances)

```
  +------------------+---------------------------------+
  |  CIRCUIT         |  IMPEDANCE Z                    |
  +------------------+---------------------------------+
  |  R only          |  R                              |
  |  L only          |  XL                             |
  |  C only          |  XC                             |
  |  R and L (RL)    |  sqrt( R^2 + XL^2 )             |
  |  R and C (RC)    |  sqrt( R^2 + XC^2 )             |
  |  L and C (LC)    |  | XL - XC |                    |
  |  R, L and C      |  sqrt( R^2 + (XL - XC)^2 )      |
  +------------------+---------------------------------+
```

| Formula | When to use |
|---|---|
| `Z = sqrt(R^2 + (XL-XC)^2)` | any series LCR numerical — always find XL and XC first |
| `I = V/Z` | current in an LCR circuit |
| `tan(phi) = (XL-XC)/R` | "find the phase angle" / "is it inductive or capacitive?" |
| `cos(phi) = R/Z` | power factor, without needing the angle |
| `Z = sqrt(R^2 + XL^2)` | RL circuit only (a choke coil with resistance) |
| `Z = sqrt(R^2 + XC^2)` | RC circuit only |

## The three cases

```
  XL > XC   ->  phi positive   ->  INDUCTIVE, current LAGS
  XL < XC   ->  phi negative   ->  CAPACITIVE, current LEADS
  XL = XC   ->  phi = 0        ->  RESISTIVE, RESONANCE
```

---

# 5. RESONANCE

```
  +--------------------------------------------------------------+
  |                                                              |
  |   CONDITION           XL  =  XC                              |
  |                                                              |
  |                          1                                   |
  |   omega0  =  ---------------------                           |
  |                    sqrt( L C )                               |
  |                                                              |
  |                          1                                   |
  |   f0      =  ---------------------                           |
  |                2 pi  sqrt( L C )                             |
  |                                                              |
  |   AT RESONANCE:                                              |
  |        Z  =  R          (MINIMUM)                            |
  |        I  =  V / R      (MAXIMUM)                            |
  |        phi = 0 ,  cos(phi) = 1                               |
  |        VL  =  VC   (they cancel)                             |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  +--------------------------------------------------------------+
  |                                                              |
  |                 omega0 L        1            1     +- L -+   |
  |   Q FACTOR = ------------ = ----------- =   ---sqrt| --- |   |
  |                    R         omega0 C R      R     +- C -+   |
  |                                                              |
  |                       R                                      |
  |   BANDWIDTH  =  2 dw = ---     (rad/s)                       |
  |                       L                                      |
  |                                                              |
  |                    omega0                                    |
  |   Q  =  --------------------                                 |
  |               bandwidth                                      |
  |                                                              |
  |   Also   Q  =  VL / V  =  VC / V   (voltage magnification)   |
  |                                                              |
  |   Q has NO UNIT.                                             |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `f0 = 1/(2 pi sqrt(LC))` | resonant frequency; also LC oscillation frequency |
| `XL = XC` | "condition for resonance"; also to FIND L or C given f0 |
| `I_max = V/R` | current at resonance |
| `Q = omega0 L / R` | Q asked and L, R, omega0 known |
| `Q = (1/R) sqrt(L/C)` | Q asked and only L, C, R given (no frequency) |
| `bandwidth = R/L` | sharpness / half-power width |

**Rule of thumb:** small R -> big Q -> sharp, selective circuit (good radio tuner).

---

# 6. POWER IN AC CIRCUITS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   INSTANTANEOUS   p  =  v i                                  |
  |                                                              |
  |                          V0 I0                               |
  |   AVERAGE         P  =  -------- cos(phi)                    |
  |                            2                                 |
  |                                                              |
  |                      =  V_rms  I_rms  cos(phi)               |
  |                                                              |
  |                      =  I_rms^2  R      (all real power is   |
  |                                          burnt in R only)    |
  |                                                              |
  |                           R                                  |
  |   POWER FACTOR    cos(phi) = ---                             |
  |                           Z                                  |
  |                                                              |
  |   APPARENT POWER  =  V_rms I_rms            (VA)             |
  |                                                              |
  |   WATTLESS CURRENT  =  I_rms sin(phi)                        |
  |   POWER COMPONENT   =  I_rms cos(phi)                        |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  +-------------------------+--------------+---------------------+
  |  CIRCUIT                |  cos(phi)    |  AVERAGE POWER      |
  +-------------------------+--------------+---------------------+
  |  Pure R                 |     1        |  V_rms I_rms        |
  |  Pure L                 |     0        |  0                  |
  |  Pure C                 |     0        |  0                  |
  |  Series LCR             |    R / Z     |  V_rms I_rms cos phi|
  |  LCR at resonance       |     1        |  V_rms I_rms (max)  |
  +-------------------------+--------------+---------------------+
```

| Formula | When to use |
|---|---|
| `P = V_rms I_rms cos(phi)` | any "power consumed" question in an LCR circuit |
| `P = I_rms^2 R` | fastest check — only R burns power |
| `cos(phi) = R/Z` | power factor asked |
| `I_rms sin(phi)` | "wattless current" |
| `R = V^2 / P` | appliance rated "100 W, 220 V", resistance asked |

**To improve a low power factor:** connect a **capacitor in parallel** with the
(inductive) load.

---

# 7. LC OSCILLATIONS

```
  +--------------------------------------------------------------+
  |                                                              |
  |     d^2 q          q                       1                 |
  |  L -------  +   ------  =  0   ->  omega0 = ----------       |
  |     dt^2           C                        sqrt(LC)         |
  |                                                              |
  |                     1                                        |
  |     f0  =  --------------------                              |
  |             2 pi  sqrt( L C )                                |
  |                                                              |
  |     q  =  q0 cos(omega0 t)                                   |
  |                                                              |
  |                              q0^2         1                  |
  |     TOTAL ENERGY  =  ---------  =  --- L I0^2  = constant    |
  |                              2 C          2                  |
  |                                                              |
  |     Electric energy = q^2 / (2C)                             |
  |     Magnetic energy = (1/2) L i^2                            |
  |                                                              |
  +--------------------------------------------------------------+
```

## The mechanical analogy

```
  +-------------------------+---------------------------+
  |  LC CIRCUIT             |  SPRING-MASS SYSTEM       |
  +-------------------------+---------------------------+
  |  q  (charge)            |  x  (displacement)        |
  |  i = dq/dt              |  v = dx/dt                |
  |  L  (inductance)        |  m  (mass)                |
  |  1/C                    |  k  (spring constant)     |
  |  R  (resistance)        |  damping / friction       |
  |  omega = 1/sqrt(LC)     |  omega = sqrt(k/m)        |
  +-------------------------+---------------------------+
```

---

# 8. THE TRANSFORMER

```
  +--------------------------------------------------------------+
  |                                                              |
  |     Vs        Ns        Ip                                   |
  |    ----  =   ----  =   ----   =  k   (turns ratio)           |
  |     Vp        Np        Is                                   |
  |                                                              |
  |    IDEAL:     Vp Ip  =  Vs Is                                |
  |                                                              |
  |                        Vs Is                                 |
  |    EFFICIENCY  =  -----------  x  100 %                      |
  |                        Vp Ip                                 |
  |                                                              |
  |    k > 1  ->  STEP-UP    (Ns > Np, V up, I down)             |
  |    k < 1  ->  STEP-DOWN  (Ns < Np, V down, I up)             |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  +--------------------------------------------------------------+
  |   TRANSMISSION LOSS                                          |
  |                                                              |
  |                        +-  P  -+ 2                           |
  |   P_loss = I^2 R   =   | ----- |   R                         |
  |                        +-  V  -+                             |
  |                                                              |
  |   -> loss falls as 1 / V^2 . Hence transmit at HIGH voltage. |
  +--------------------------------------------------------------+
```

## The four losses (and their cures) — pure recall marks

```
  +-------------------+-------------------------------------------+
  |  LOSS             |  CURE                                     |
  +-------------------+-------------------------------------------+
  |  Copper (I^2 R)   |  thick, low-resistance copper windings    |
  |  Eddy current     |  LAMINATED core, sheets insulated         |
  |  Hysteresis       |  SOFT IRON / silicon steel core           |
  |                   |  (narrow hysteresis loop)                 |
  |  Flux leakage     |  coils wound one over the other on the    |
  |                   |  same limb of a closed core               |
  +-------------------+-------------------------------------------+
```

---

# 9. THE AC GENERATOR

```
  +--------------------------------------------------------------+
  |                                                              |
  |   phi  =  N B A cos(omega t)                                 |
  |                                                              |
  |            d phi                                             |
  |   e  =  - -------  =  N B A omega sin(omega t)               |
  |             dt                                               |
  |                                                              |
  |   e  =  e0 sin(omega t)      with    e0 = N B A omega        |
  |                                                              |
  |   AC generator -> two SLIP RINGS                             |
  |   DC generator -> SPLIT-RING COMMUTATOR                      |
  +--------------------------------------------------------------+
```

---

# 10. USEFUL CONSTANTS AND CONVERSIONS

```
  +----------------------------+-----------------------------+
  |  sqrt(2)                   |  1.414                      |
  |  1 / sqrt(2)               |  0.707                      |
  |  2 / pi                    |  0.637                      |
  |  pi                        |  3.1416                     |
  |  2 pi                      |  6.283                      |
  |  2 pi x 50                 |  314 rad/s                  |
  |  1 microfarad (uF)         |  10^-6 F                    |
  |  1 picofarad (pF)          |  10^-12 F                   |
  |  1 millihenry (mH)         |  10^-3 H                    |
  |  1 microhenry (uH)         |  10^-6 H                    |
  |  Mains in India            |  230 V rms, 50 Hz           |
  |  Peak of 230 V rms         |  325 V                      |
  +----------------------------+-----------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+--------------------------------------------------------------+
  | 1  |  I_rms = I0 / sqrt(2) = 0.707 I0                             |
  +----+--------------------------------------------------------------+
  | 2  |  I_mean = 2 I0 / pi = 0.637 I0   (half cycle)                |
  +----+--------------------------------------------------------------+
  | 3  |  XL = 2 pi f L                                               |
  +----+--------------------------------------------------------------+
  | 4  |  XC = 1 / (2 pi f C)                                         |
  +----+--------------------------------------------------------------+
  | 5  |  Z = sqrt( R^2 + (XL - XC)^2 )                               |
  +----+--------------------------------------------------------------+
  | 6  |  tan(phi) = (XL - XC) / R                                    |
  +----+--------------------------------------------------------------+
  | 7  |  I = V / Z                                                   |
  +----+--------------------------------------------------------------+
  | 8  |  f0 = 1 / ( 2 pi sqrt(L C) )                                 |
  +----+--------------------------------------------------------------+
  | 9  |  Q = (1/R) sqrt(L / C)      bandwidth = R / L                |
  +----+--------------------------------------------------------------+
  | 10 |  P = V_rms I_rms cos(phi)                                    |
  +----+--------------------------------------------------------------+
  | 11 |  cos(phi) = R / Z            wattless current = I sin(phi)   |
  +----+--------------------------------------------------------------+
  | 12 |  Vs/Vp = Ns/Np = Ip/Is                                       |
  +----+--------------------------------------------------------------+
```

**If you can write those 12 lines from memory, you can attempt every numerical
this chapter has ever produced.**
