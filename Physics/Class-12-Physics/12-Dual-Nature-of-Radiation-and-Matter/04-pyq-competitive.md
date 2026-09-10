# Dual Nature of Radiation and Matter — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 for wrong   |  Skip only if you truly   |
  |                  |                      |  do not know              |
  +------------------+----------------------+---------------------------+
```

**How many questions come from this chapter:**

```
  AP / TG EAPCET  (Physics, 40 questions)  ->  1 to 3 , almost every year
  JEE Main        (Physics, 25 questions)  ->  1 to 2

  The questions are SHORT and formula-based. This is one of the best
  marks-per-hour chapters in the whole syllabus.
```

**The two formulas that answer most of these in under 20 seconds:**

```
      E(eV)  =  12400 / lambda(A)           lambda = 12.27/sqrt(V)  A
```

---

# PATTERN 1 — Photon energy, momentum and number

### Q1
The energy of a photon of wavelength 6200 A is

(a) 1.0 eV &nbsp; (b) 2.0 eV &nbsp; (c) 3.1 eV &nbsp; (d) 6.2 eV

**ANSWER: (b)**
```
     E  =  12400 / 6200  =  2.0  eV
```
> **SHORTCUT:** never convert to joules first. Wavelength in angstrom straight
> into 12400/lambda.

---

### Q2
The momentum of a photon of wavelength 6630 A is (h = 6.63 x 10^-34 J s)

(a) 1 x 10^-27 kg m/s &nbsp; (b) 1 x 10^-24 kg m/s
(c) 1 x 10^-30 kg m/s &nbsp; (d) 1 x 10^-21 kg m/s

**ANSWER: (a)**
```
            h        6.63 x 10^-34
     p  =  ------ = ----------------  =  1.0 x 10^-27  kg m/s
           lambda    6630 x 10^-10
```

---

### Q3
A 60 W source emits monochromatic light of wavelength 6600 A. The number of
photons emitted per second is about

(a) 2 x 10^18 &nbsp; (b) 2 x 10^20 &nbsp; (c) 2 x 10^22 &nbsp; (d) 2 x 10^16

**ANSWER: (b)**
```
     E(one photon) = 12400/6600 = 1.879 eV = 3.01 x 10^-19 J

              P            60
     n  =  ------- = ----------------- =  2.0 x 10^20 per second
            E         3.01 x 10^-19
```

---

### Q4
The wavelength of a photon of energy 1 eV is

(a) 1240 A &nbsp; (b) 6200 A &nbsp; (c) 12400 A &nbsp; (d) 124 A

**ANSWER: (c)**
```
     lambda = 12400 / E(eV) = 12400 / 1 = 12400 A
```
> **SHORTCUT:** remember the anchor pair **1 eV <-> 12400 A** and
> **12.4 keV <-> 1 A**. Everything else scales from these.

---

### Q5
A photon and an electron have the same wavelength 1 A. The ratio of the energy
of the photon to the kinetic energy of the electron is nearly

(a) 1 &nbsp; (b) 43 &nbsp; (c) 82 &nbsp; (d) 1836

**ANSWER: (c)**
```
     PHOTON   :  E = 12400/1 = 12400 eV

     ELECTRON :  lambda = 12.27/sqrt(V) = 1  ->  sqrt(V) = 12.27
                 V = 150.5 , so K = 150.5 eV

     Ratio = 12400 / 150.5  =  82.4
```
> **SHORTCUT:** at the SAME wavelength the two have the SAME MOMENTUM, but the
> photon uses E = pc while the electron uses E = p^2/2m. Their energies are
> therefore completely different.

---

### Q6
Which of the following is TRUE for a photon?

(a) it has non-zero rest mass &nbsp; (b) it is deflected by a magnetic field
(c) its momentum is h/lambda &nbsp; (d) its speed depends on its frequency

**ANSWER: (c)** — a photon has zero rest mass, zero charge (so no deflection by
E or B fields) and always moves at c regardless of frequency.

---

# PATTERN 2 — Work function, threshold frequency and threshold wavelength

### Q7
The work function of a metal is 6.63 x 10^-19 J. Its threshold frequency is

(a) 10^15 Hz &nbsp; (b) 10^14 Hz &nbsp; (c) 10^16 Hz &nbsp; (d) 10^13 Hz

**ANSWER: (a)**
```
            W0        6.63 x 10^-19
     nu0 = ---- =  ------------------  =  1.0 x 10^15  Hz
             h        6.63 x 10^-34
```

---

### Q8
The threshold wavelength of the metal in Q7 is

(a) 3000 A &nbsp; (b) 4000 A &nbsp; (c) 5000 A &nbsp; (d) 6000 A

**ANSWER: (a)**
```
                c         3 x 10^8
     lambda0 = ---- =  ------------- = 3 x 10^-7 m = 3000 A
               nu0        1 x 10^15

     Check: W0 = 6.63e-19 / 1.6e-19 = 4.14 eV ;  12400/4.14 = 2995 A. ok
```

---

### Q9
The work function of a metal is 3.1 eV. The longest wavelength that can eject
photoelectrons from it is

(a) 2000 A &nbsp; (b) 3000 A &nbsp; (c) 4000 A &nbsp; (d) 5000 A

**ANSWER: (c)**
```
     lambda0 = 12400 / 3.1 = 4000 A
```
> **SHORTCUT:** "longest wavelength" always means lambda0. Never compute
> anything else.

---

### Q10
Photoelectric emission occurs from a metal of threshold wavelength 5000 A when
it is illuminated with light of wavelength

(a) 6000 A &nbsp; (b) 5500 A &nbsp; (c) 7000 A &nbsp; (d) 4000 A

**ANSWER: (d)** — emission requires `lambda < lambda0`, i.e. a SHORTER
wavelength (higher frequency). Only 4000 A qualifies.

---

### Q11
The work function of a metal does NOT depend on

(a) the nature of the metal &nbsp; (b) the surface condition of the metal
(c) the intensity of the incident light &nbsp; (d) both (a) and (b)

**ANSWER: (c)** — the work function is a property of the metal alone.

---

# PATTERN 3 — Maximum kinetic energy and stopping potential

### Q12
Light of wavelength 2000 A falls on a metal of work function 4.2 eV. The
stopping potential is

(a) 1.0 V &nbsp; (b) 2.0 V &nbsp; (c) 4.2 V &nbsp; (d) 6.2 V

**ANSWER: (b)**
```
     E    = 12400/2000 = 6.2 eV
     Kmax = 6.2 - 4.2  = 2.0 eV
     V0   = 2.0 volt        (numerically equal to Kmax in eV)
```

---

### Q13
Light of frequency `2 nu0` is incident on a metal whose threshold frequency is
`nu0`. The maximum kinetic energy of the photoelectrons is

(a) `h nu0` &nbsp; (b) `2 h nu0` &nbsp; (c) `3 h nu0` &nbsp; (d) `0.5 h nu0`

**ANSWER: (a)**
```
     Kmax = h(nu - nu0) = h(2nu0 - nu0) = h nu0  =  W0
```
> **SHORTCUT:** for incident frequency `n nu0` the answer is always
> `(n - 1) W0`. At 3nu0 it is 2W0, at 1.5nu0 it is 0.5W0. Instant.

---

### Q14
Light of frequency `3 nu0` falls on a metal of threshold frequency `nu0`. If
the frequency is changed to `4 nu0`, the maximum kinetic energy becomes

(a) 4/3 times &nbsp; (b) 3/2 times &nbsp; (c) 2 times &nbsp; (d) 4 times

**ANSWER: (b)**
```
     Kmax(3nu0) = 2 h nu0
     Kmax(4nu0) = 3 h nu0

     ratio = 3/2
```
> **TRAP:** the ratio is NOT 4/3. Kmax is proportional to `(nu - nu0)`, not
> to `nu`.

---

### Q15
A metal of work function 2.0 eV is illuminated by light of energy 5.0 eV.
The maximum kinetic energy of the photoelectrons is

(a) 2.0 eV &nbsp; (b) 3.0 eV &nbsp; (c) 5.0 eV &nbsp; (d) 7.0 eV

**ANSWER: (b)** — `Kmax = 5.0 − 2.0 = 3.0 eV`. Subtract; never add.

---

### Q16
If the intensity of the incident light is doubled while the frequency is kept
constant, the stopping potential

(a) doubles &nbsp; (b) halves &nbsp; (c) remains the same &nbsp; (d) becomes four times

**ANSWER: (c)** — the stopping potential depends only on the frequency and the
work function. Intensity changes only the saturation current.

---

### Q17
A photosensitive surface emits photoelectrons when illuminated by a lamp at a
distance r. If the lamp is moved to a distance 2r, then

(a) the current becomes 1/4 and V0 becomes 1/2
(b) the current becomes 1/4 and V0 is unchanged
(c) both become 1/4
(d) both are unchanged

**ANSWER: (b)**
```
     Intensity ~ 1/r^2 , so doubling r makes the intensity 1/4
     -> saturation CURRENT becomes 1/4.

     The FREQUENCY has not changed, so V0 is UNCHANGED.
```

---

# PATTERN 4 — Reading the graphs

### Q18
In the graph of stopping potential V0 against frequency nu, the slope is

(a) h &nbsp; (b) h/e &nbsp; (c) e/h &nbsp; (d) W0/e

**ANSWER: (b)**
```
     e V0 = h nu - W0    ->    V0 = (h/e) nu - W0/e

     slope = h/e = 4.14 x 10^-15 V s , the SAME for every metal.
```

---

### Q19
In the graph of maximum kinetic energy Kmax against frequency nu, the slope and
the magnitude of the y-intercept are respectively

(a) h and W0 &nbsp; (b) h/e and W0/e &nbsp; (c) h and nu0 &nbsp; (d) e and W0

**ANSWER: (a)**
```
     Kmax = h nu - W0     ->  slope = h , y-intercept = -W0
```
> **SHORTCUT:** look at the y-AXIS LABEL. If it says V0 the slope is h/e;
> if it says Kmax (or energy) the slope is h.

---

### Q20
Graphs of stopping potential against frequency are drawn for two metals A and
B. The lines are

(a) parallel &nbsp; (b) perpendicular &nbsp; (c) intersecting at nu0 &nbsp; (d) coincident

**ANSWER: (a)** — the slope h/e does not depend on the metal, so the lines are
always **parallel**. The one with the smaller work function starts further left
(smaller nu0).

---

### Q21
The slope of the V0-vs-nu graph is found to be 4.14 x 10^-15 V s. Planck's
constant is therefore

(a) 6.63 x 10^-34 J s &nbsp; (b) 6.63 x 10^-19 J s
(c) 4.14 x 10^-15 J s &nbsp; (d) 1.6 x 10^-19 J s

**ANSWER: (a)**
```
     h = e x slope = 1.6 x 10^-19 x 4.14 x 10^-15 = 6.63 x 10^-34 J s
```

---

### Q22
In the graph of photoelectric current against plate potential, the saturation
current depends on

(a) frequency only &nbsp; (b) intensity only &nbsp; (c) both &nbsp; (d) neither

**ANSWER: (b)** — saturation current is proportional to intensity;
the stopping potential is the one fixed by frequency.

---

# PATTERN 5 — Maximum velocity of the photoelectrons

### Q23
The maximum kinetic energy of the photoelectrons is 4.0 eV. Their maximum speed
is (m = 9.1 x 10^-31 kg)

(a) 1.19 x 10^6 m/s &nbsp; (b) 5.93 x 10^5 m/s
(c) 2.37 x 10^6 m/s &nbsp; (d) 8.4 x 10^5 m/s

**ANSWER: (a)**
```
     v = 5.93 x 10^5 x sqrt(4.0) = 5.93 x 10^5 x 2 = 1.19 x 10^6 m/s
```
> **SHORTCUT:** memorise `v = 5.93 x 10^5 sqrt(K in eV)`. It turns a
> three-line calculation into one multiplication.

---

### Q24
If the maximum kinetic energy of photoelectrons is quadrupled, their maximum
velocity becomes

(a) 2 times &nbsp; (b) 4 times &nbsp; (c) 16 times &nbsp; (d) unchanged

**ANSWER: (a)** — `v ~ sqrt(K)`, so quadrupling K doubles v.

---

### Q25
Light of wavelength 4000 A falls on a metal of work function 2.3 eV. The
maximum velocity of the emitted electrons is about

(a) 5.3 x 10^5 m/s &nbsp; (b) 8.4 x 10^5 m/s
(c) 1.2 x 10^6 m/s &nbsp; (d) 3.0 x 10^5 m/s

**ANSWER: (a)**
```
     E    = 12400/4000 = 3.10 eV
     Kmax = 3.10 - 2.30 = 0.80 eV
     v    = 5.93e5 x sqrt(0.80) = 5.93e5 x 0.894 = 5.30 x 10^5 m/s
```

---

# PATTERN 6 — de Broglie wavelength of an accelerated particle

### Q26
The de Broglie wavelength of an electron accelerated through 100 V is

(a) 12.27 A &nbsp; (b) 1.227 A &nbsp; (c) 0.1227 A &nbsp; (d) 122.7 A

**ANSWER: (b)**
```
     lambda = 12.27/sqrt(100) = 12.27/10 = 1.227 A
```

---

### Q27
The accelerating voltage of an electron is increased from 100 V to 400 V. Its
de Broglie wavelength becomes

(a) 4 times &nbsp; (b) 2 times &nbsp; (c) half &nbsp; (d) one-fourth

**ANSWER: (c)**
```
     lambda ~ 1/sqrt(V) . V x 4  ->  lambda / 2
```
> **SHORTCUT:** the voltage always enters under a SQUARE ROOT. Multiply V by
> 4, 9 or 16 and lambda is divided by 2, 3 or 4.

---

### Q28
The de Broglie wavelength of an electron whose kinetic energy is 1 keV is
about

(a) 0.39 A &nbsp; (b) 1.23 A &nbsp; (c) 3.9 A &nbsp; (d) 0.12 A

**ANSWER: (a)**
```
     K = 1000 eV is the same as accelerating through 1000 V

               12.27          12.27
     lambda = ---------- =  --------  =  0.388 A
              sqrt(1000)     31.62
```

---

### Q29
For an electron to have a de Broglie wavelength of 1 A, the accelerating
potential must be about

(a) 12.27 V &nbsp; (b) 150 V &nbsp; (c) 1227 V &nbsp; (d) 100 V

**ANSWER: (b)**
```
     lambda = 12.27/sqrt(V) = 1  ->  sqrt(V) = 12.27  ->  V = 150.5 V
```
> **SHORTCUT:** worth memorising: **1 A of electron wavelength = about 150 V**.

---

### Q30
A proton and an alpha particle are accelerated through the same potential
difference. The ratio of their de Broglie wavelengths (proton : alpha) is

(a) 1 : 1 &nbsp; (b) 2 : 1 &nbsp; (c) 2 sqrt(2) : 1 &nbsp; (d) 1 : 2 sqrt(2)

**ANSWER: (c)**
```
     lambda ~ 1 / sqrt( m q )

     alpha : m = 4 m_p , q = 2 q_p   ->   sqrt(mq) is sqrt(8) times bigger

     lambda(p) : lambda(alpha)  =  sqrt(8) : 1  =  2 sqrt(2) : 1  =  2.83 : 1
```

---

# PATTERN 7 — Comparing de Broglie wavelengths

### Q31
An electron and a proton have the SAME momentum. The ratio of their de Broglie
wavelengths is

(a) 1 : 1 &nbsp; (b) 1836 : 1 &nbsp; (c) 1 : 1836 &nbsp; (d) 43 : 1

**ANSWER: (a)** — `lambda = h/p` depends only on momentum. Same p, same lambda.

---

### Q32
An electron and a proton have the SAME kinetic energy. The ratio
lambda(electron) : lambda(proton) is about

(a) 1 : 1 &nbsp; (b) 43 : 1 &nbsp; (c) 1836 : 1 &nbsp; (d) 1 : 43

**ANSWER: (b)**
```
     lambda = h/sqrt(2mK) ,  same K  ->  lambda ~ 1/sqrt(m)

     ratio = sqrt(m_p / m_e) = sqrt(1836) = 42.8
```

---

### Q33
An electron and a proton move with the SAME SPEED. The ratio
lambda(electron) : lambda(proton) is

(a) 1 : 1 &nbsp; (b) 43 : 1 &nbsp; (c) 1836 : 1 &nbsp; (d) 1 : 1836

**ANSWER: (c)**
```
     lambda = h/(m v) , same v  ->  lambda ~ 1/m

     ratio = m_p / m_e = 1836
```
> **SHORTCUT — the three-line table that answers Q31 to Q33 instantly:**
> same **momentum** -> lambda EQUAL; same **speed** -> lambda ~ 1/m;
> same **kinetic energy** -> lambda ~ 1/sqrt(m).

---

### Q34
The de Broglie wavelength of a 150 g cricket ball moving at 30 m/s is of the
order of

(a) 10^-10 m &nbsp; (b) 10^-24 m &nbsp; (c) 10^-34 m &nbsp; (d) 10^-15 m

**ANSWER: (c)**
```
              6.63 x 10^-34
     lambda = ---------------  =  1.47 x 10^-34  m
                0.15 x 30
```
This is why the wave nature of everyday objects can never be detected.

---

### Q35
The de Broglie wavelength of a thermal neutron (m = 1.67 x 10^-27 kg) at 300 K
is about (k = 1.38 x 10^-23 J/K)

(a) 0.15 A &nbsp; (b) 1.5 A &nbsp; (c) 15 A &nbsp; (d) 150 A

**ANSWER: (b)**
```
                     h
     lambda  =  ---------------
                sqrt(3 m k T)

     3 m k T = 3 x 1.67e-27 x 1.38e-23 x 300 = 2.07 x 10^-47
     sqrt    = 4.55 x 10^-24

     lambda  = 6.63e-34 / 4.55e-24 = 1.46 x 10^-10 m = 1.46 A
```

---

# PATTERN 8 — Davisson-Germer and matter-wave experiments

### Q36
In the Davisson-Germer experiment, a sharp peak in the scattered electron
intensity was observed at

(a) 54 V and 50 degrees &nbsp; (b) 50 V and 54 degrees
(c) 54 V and 65 degrees &nbsp; (d) 100 V and 50 degrees

**ANSWER: (a)**
```
     ACCELERATING VOLTAGE  =  54 volt
     SCATTERING ANGLE      =  50 degrees
     (65 degrees is the BRAGG GLANCING angle, = (180-50)/2 -- do not
      confuse the two)
```

---

### Q37
The de Broglie wavelength of the electrons in the Davisson-Germer experiment
(V = 54 V) is

(a) 1.65 A &nbsp; (b) 1.67 A &nbsp; (c) 0.91 A &nbsp; (d) 12.27 A

**ANSWER: (b)**
```
     lambda = 12.27/sqrt(54) = 12.27/7.348 = 1.67 A   (the PREDICTED value)

     1.65 A is the value MEASURED from the diffraction data;
     0.91 A is the interplanar spacing of nickel.
```

---

### Q38
The Davisson-Germer experiment used a target crystal of

(a) gold &nbsp; (b) nickel &nbsp; (c) sodium chloride &nbsp; (d) tungsten

**ANSWER: (b)** — **nickel**. (G.P. Thomson used a thin **gold** foil in the
independent confirmation.)

---

### Q39
The Davisson-Germer experiment established

(a) the particle nature of light
(b) the wave nature of the electron
(c) the existence of the neutron
(d) the quantisation of charge

**ANSWER: (b)**

---

# PATTERN 9 — Conceptual "which statement is correct"

### Q40
The photoelectric effect establishes the

(a) wave nature of light &nbsp; (b) particle nature of light
(c) wave nature of matter &nbsp; (d) particle nature of matter

**ANSWER: (b)** — and interference/diffraction establish the wave nature of
light, while Davisson-Germer establishes the wave nature of matter.

---

### Q41
The photoelectric emission from a metal surface is

(a) delayed by about one second
(b) instantaneous, with a lag under 10^-9 s
(c) delayed by hours for feeble light
(d) delayed in proportion to the intensity

**ANSWER: (b)**

---

### Q42
The wave theory of light fails to explain the photoelectric effect because it
cannot account for

(a) the existence of a threshold frequency
(b) the independence of Kmax from intensity
(c) the instantaneous emission
(d) all of the above

**ANSWER: (d)**

---

### Q43
Which of the following types of emission uses a very strong electric field?

(a) thermionic &nbsp; (b) photoelectric &nbsp; (c) field emission &nbsp; (d) secondary

**ANSWER: (c)** — field (cold cathode) emission, at fields of about 10^8 V/m.

---

### Q44
The minimum uncertainty in the momentum of an electron localised within
1.0 x 10^-10 m is about

(a) 5.3 x 10^-25 kg m/s &nbsp; (b) 6.6 x 10^-24 kg m/s
(c) 5.3 x 10^-35 kg m/s &nbsp; (d) 1.05 x 10^-34 kg m/s

**ANSWER: (a)**
```
                  h            6.63 x 10^-34
     delta p = ----------- = -------------------- = 5.28 x 10^-25 kg m/s
               4 pi delta x   12.57 x 1.0 x 10^-10
```

---

### Q45
In a photocell the cathode is coated with caesium because caesium has

(a) a high melting point &nbsp; (b) a very low work function
(c) a high density &nbsp; (d) a high threshold frequency

**ANSWER: (b)** — W0(Cs) = 2.14 eV, low enough that ordinary visible light can
eject electrons.

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY               |
  +--------------------------------------+------------------------------------+
  |  A wavelength in ANGSTROM and the    |  E = 12400 / lambda. Do NOT go     |
  |  word "energy"                       |  through joules.                   |
  +--------------------------------------+------------------------------------+
  |  "Threshold / longest wavelength"    |  lambda0 = 12400 / W0(eV)          |
  +--------------------------------------+------------------------------------+
  |  "Stopping potential" and Kmax in eV |  They are the SAME NUMBER.         |
  |                                      |  Write it down and move on.        |
  +--------------------------------------+------------------------------------+
  |  "Maximum velocity"                  |  v = 5.93e5 x sqrt(Kmax in eV)     |
  +--------------------------------------+------------------------------------+
  |  Incident frequency given as n nu0   |  Kmax = (n - 1) W0. One step.      |
  +--------------------------------------+------------------------------------+
  |  "INTENSITY is doubled/halved"       |  Only the CURRENT changes.         |
  |                                      |  V0 and Kmax are UNCHANGED.        |
  +--------------------------------------+------------------------------------+
  |  "Distance of the lamp is doubled"   |  Intensity -> 1/4, current -> 1/4, |
  |                                      |  V0 unchanged.                     |
  +--------------------------------------+------------------------------------+
  |  "Slope of the graph"                |  y-axis V0   -> slope h/e          |
  |                                      |  y-axis Kmax -> slope h            |
  +--------------------------------------+------------------------------------+
  |  Graphs for two different metals     |  PARALLEL lines. Always.           |
  +--------------------------------------+------------------------------------+
  |  Electron + an accelerating voltage  |  lambda = 12.27 / sqrt(V) angstrom |
  +--------------------------------------+------------------------------------+
  |  Electron + kinetic energy in eV     |  Same formula: 12.27/sqrt(K in eV) |
  +--------------------------------------+------------------------------------+
  |  "V is made 4 times"                 |  lambda is HALVED (1/sqrt(V))      |
  +--------------------------------------+------------------------------------+
  |  Same MOMENTUM                       |  wavelengths are EQUAL             |
  |  Same SPEED                          |  lambda ~ 1/m                      |
  |  Same KINETIC ENERGY                 |  lambda ~ 1/sqrt(m)                |
  |  Same ACCELERATING VOLTAGE           |  lambda ~ 1/sqrt(m q)              |
  +--------------------------------------+------------------------------------+
  |  Anything about 54 / 50 / nickel     |  Davisson-Germer.                  |
  |                                      |  54 VOLTS , 50 DEGREES ,           |
  |                                      |  1.67 A predicted, 1.65 A measured |
  +--------------------------------------+------------------------------------+
  |  A macroscopic object's wavelength   |  The answer is ~10^-34 m. Pick the |
  |                                      |  smallest option offered.          |
  +--------------------------------------+------------------------------------+
  |  "Photon: rest mass / charge /       |  ZERO , ZERO , NOT DEFLECTED.      |
  |  deflection by E or B"               |  But momentum = h/lambda IS        |
  |                                      |  non-zero.                         |
  +--------------------------------------+------------------------------------+
  |  You have 15 seconds left and it is  |  GUESS. EAPCET has no negative     |
  |  EAPCET                              |  marking. Never leave a blank.     |
  +--------------------------------------+------------------------------------+
```

---

# THE ONE-MINUTE REVISION BEFORE THE EXAM

```
  E(eV) = 12400 / lambda(A)               lambda0 = 12400 / W0(eV)
  h nu  = W0 + Kmax                       Kmax = e V0 = h(nu - nu0)
  v     = 5.93 x 10^5 sqrt(Kmax in eV)    slope of V0 vs nu = h/e
  lambda = h/p = h/sqrt(2mK)              lambda = 12.27/sqrt(V) A
  Davisson-Germer: Ni , 54 V , 50 deg , 1.65 A vs 1.67 A
  dx . dp >= h / 4pi
```
