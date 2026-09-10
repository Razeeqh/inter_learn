# Electromagnetic Waves — Competitive Exam Questions

**AP EAPCET · TG EAPCET · JEE Main**

---

## HOW MUCH IS THIS CHAPTER WORTH?

```
  +---------------+----------------+-----------------+------------------+
  |  EXAM         |  PHYSICS Qs    |  FROM THIS      |  MARKING         |
  |               |  IN THE PAPER  |  CHAPTER        |                  |
  +---------------+----------------+-----------------+------------------+
  |  AP EAPCET    |      40        |   1 to 2        |  +1 , NO minus   |
  |  TG EAPCET    |      40        |   1 to 2        |  +1 , NO minus   |
  |  JEE Main     |      25        |   0 to 1        |  +4 , -1         |
  +---------------+----------------+-----------------+------------------+

  The EAPCET questions are almost always PURE RECALL and take about
  15 seconds each. There is NO NEGATIVE MARKING, so you must never
  leave one blank — even a guess is free.

  JEE Main occasionally mixes this with the photoelectric effect or
  with modern physics; the standalone questions are still easy.
```

```
  +-------------------------------------------------------------------+
  |  THE THREE THINGS THAT COME UP AGAIN AND AGAIN                    |
  |                                                                   |
  |   1.  "Displacement current is due to ..."   -> changing E field  |
  |   2.  "Which has the shortest wavelength?"   -> gamma rays        |
  |   3.  "E0/B0 = ?"                            -> c                 |
  |                                                                   |
  |  Learn those three and you have already covered most of what      |
  |  gets asked.                                                      |
  +-------------------------------------------------------------------+
```

---

# ===============================================================
# PATTERN 1 — WHAT IS DISPLACEMENT CURRENT?
# ===============================================================

### Q1
Displacement current arises due to
(a) motion of electrons
(b) motion of positive ions
(c) a time-varying electric field
(d) a time-varying magnetic field

**ANSWER: (c)** By definition, Id = eps0 d(PhiE)/dt — it needs a **changing
electric field**. Option (d) is Faraday's law, which gives an induced EMF, not
a displacement current.

---

### Q2
The dimensions of displacement current are the same as those of
(a) charge  (b) electric current  (c) electric flux  (d) magnetic flux

**ANSWER: (b)** It is a *current* — SI unit ampere, dimension [A]. That is the
whole point of Maxwell's construction.

---

### Q3
Maxwell modified Ampere's law because
(a) magnetic monopoles do not exist
(b) it gave different results for two surfaces bounded by the same loop
(c) the magnetic field is always zero inside a capacitor
(d) charge is not conserved

**ANSWER: (b)** The two-surface contradiction in a charging capacitor is the
exact reason.

> **SHORTCUT:** Any option containing the words "same loop, different surfaces"
> is the answer to this question shape.

---

### Q4
In a charging parallel plate capacitor, if the conduction current in the wire
is I, the displacement current between the plates is
(a) 0  (b) I/2  (c) I  (d) 2I

**ANSWER: (c)** Id = dq/dt = Ic = I. The total current must be continuous.

---

### Q5
A capacitor is fully charged and connected to a steady DC source. The
displacement current between its plates is
(a) equal to the conduction current  (b) infinite  (c) zero  (d) maximum

**ANSWER: (c)** The field is now constant, so d(PhiE)/dt = 0 and Id = 0.

> **SHORTCUT:** The words "fully charged" / "steady state" always kill the
> displacement current.

---

### Q6
Which of the following is the correct Ampere–Maxwell law?
(a) INT B.dl = mu0 Ic
(b) INT B.dl = mu0 Id
(c) INT B.dl = mu0 (Ic + Id)
(d) INT B.dl = mu0 (Ic − Id)

**ANSWER: (c)**

---

# ===============================================================
# PATTERN 2 — DISPLACEMENT CURRENT NUMERICALS
# ===============================================================

### Q7
The voltage across a 1.0 microfarad capacitor changes at the rate of
1.0 x 10^6 V/s. The displacement current is
(a) 0.1 A  (b) 1.0 A  (c) 10 A  (d) 100 A

**ANSWER: (b)**
```
   Id = C (dV/dt) = (1.0 x 10^-6)(1.0 x 10^6) = 1.0 A
```

---

### Q8
The electric flux between the plates of a capacitor changes at a rate of
1.0 x 10^9 V·m/s. The displacement current is about
(a) 8.85 mA  (b) 8.85 A  (c) 88.5 mA  (d) 0.885 mA

**ANSWER: (a)**
```
   Id = eps0 d(PhiE)/dt = (8.854 x 10^-12)(1.0 x 10^9)
      = 8.854 x 10^-3 A = 8.85 mA
```

---

### Q9
A parallel plate capacitor has plates of area 100 cm^2. The electric field
between them changes at 1.0 x 10^12 V m^-1 s^-1. The displacement current is
about
(a) 8.85 mA  (b) 88.5 mA  (c) 0.885 A  (d) 8.85 A

**ANSWER: (b)**
```
   A = 100 cm^2 = 100 x 10^-4 m^2 = 1.0 x 10^-2 m^2

   Id = eps0 A (dE/dt) = (8.854 x 10^-12)(1.0 x 10^-2)(1.0 x 10^12)
      = 8.854 x 10^-2 A = 88.5 mA
```

> **TRAP:** cm^2 to m^2 needs **10^-4**, not 10^-2. This is the single most
> common slip in this pattern.

---

### Q10
A capacitor of capacitance 100 pF is charged so that the potential difference
rises steadily at 10^5 V/s. The displacement current is
(a) 1 microA  (b) 10 microA  (c) 100 microA  (d) 1 mA

**ANSWER: (b)**
```
   Id = C (dV/dt) = (100 x 10^-12)(10^5) = 1.0 x 10^-5 A = 10 microA
```

---

# ===============================================================
# PATTERN 3 — MAXWELL'S EQUATIONS: WHICH ONE SAYS WHAT?
# ===============================================================

### Q11
The equation INT B.dA = 0 expresses the fact that
(a) charge is conserved
(b) magnetic monopoles do not exist
(c) a changing B produces an E
(d) light is an EM wave

**ANSWER: (b)** Magnetic field lines are closed loops, so as much flux enters a
closed surface as leaves it.

---

### Q12
Which Maxwell equation says that a changing magnetic field produces an electric
field?
(a) Gauss's law for electricity  (b) Gauss's law for magnetism
(c) Faraday's law  (d) Ampere–Maxwell law

**ANSWER: (c)**

---

### Q13
A magnetic field can be produced by
(a) only a conduction current
(b) only a changing electric field
(c) either a conduction current or a changing electric field
(d) a static electric field

**ANSWER: (c)** That is exactly what the Ampere–Maxwell law states.

---

# ===============================================================
# PATTERN 4 — SPEED OF EM WAVES
# ===============================================================

### Q14
The speed of electromagnetic waves in free space is given by
(a) sqrt(mu0 eps0)  (b) 1/sqrt(mu0 eps0)  (c) mu0 eps0  (d) 1/(mu0 eps0)

**ANSWER: (b)**

> **SHORTCUT:** Dimensional check — mu0 eps0 has dimensions of 1/(speed)^2, so
> the speed must be **one over the square root**. If you forget the formula,
> derive it from that in five seconds.

---

### Q15
In a medium with relative permittivity 4 and relative permeability 1, the speed
of light is
(a) 3 x 10^8 m/s  (b) 1.5 x 10^8 m/s  (c) 0.75 x 10^8 m/s  (d) 6 x 10^8 m/s

**ANSWER: (b)**
```
   n = sqrt(mu_r eps_r) = sqrt(4) = 2 ,   v = c/n = 1.5 x 10^8 m/s
```

---

### Q16
A medium has mu_r = 2 and eps_r = 2. Its refractive index is
(a) 1  (b) 2  (c) 4  (d) sqrt(2)

**ANSWER: (b)** n = sqrt(2 x 2) = 2.

---

### Q17
A dielectric has eps_r = 9 and mu_r = 1. The wavelength of light of vacuum
wavelength 600 nm inside this medium is
(a) 600 nm  (b) 300 nm  (c) 200 nm  (d) 1800 nm

**ANSWER: (c)**
```
   n = sqrt(9) = 3 ,  lambda_medium = lambda_vacuum / n = 600/3 = 200 nm
```

> **SHORTCUT:** Frequency NEVER changes on entering a medium. Only speed and
> wavelength drop, both by the factor n.

---

### Q18
Which of these is TRUE for all electromagnetic waves in vacuum?
(a) they have the same frequency
(b) they have the same wavelength
(c) they have the same speed
(d) they have the same energy

**ANSWER: (c)** All EM waves travel at 3 x 10^8 m/s in vacuum regardless of
frequency.

---

# ===============================================================
# PATTERN 5 — READING A GIVEN WAVE EQUATION
# ===============================================================

```
  METHOD for  y = A sin( k x  ±  omega t )

     coefficient of x       ->  k       ->  lambda = 2 pi / k
     coefficient of t       ->  omega   ->  nu     = omega / (2 pi)
     omega / k              ->  speed   (must come out as 3 x 10^8)
     sign  ( kx - omega t ) ->  travels in the +x direction
     sign  ( kx + omega t ) ->  travels in the -x direction
```

### Q19
For a plane EM wave, B = 2.0 x 10^-7 sin(0.5 x 10^3 x + 1.5 x 10^11 t) tesla.
The wavelength is
(a) 1.26 cm  (b) 12.6 cm  (c) 1.26 m  (d) 0.126 cm

**ANSWER: (a)**
```
   k = 0.5 x 10^3 = 500 rad/m

   lambda = 2 pi / k = 6.283 / 500 = 1.26 x 10^-2 m = 1.26 cm
```

---

### Q20
For the same wave as Q19, the frequency is about
(a) 1.5 x 10^11 Hz  (b) 2.4 x 10^10 Hz  (c) 3.0 x 10^8 Hz  (d) 5.0 x 10^2 Hz

**ANSWER: (b)**
```
   nu = omega / (2 pi) = (1.5 x 10^11) / 6.283 = 2.39 x 10^10 Hz

   Check: c = nu lambda = (2.39 x 10^10)(1.26 x 10^-2) = 3.0 x 10^8. OK
```

---

### Q21
For the same wave, the amplitude of the electric field is
(a) 6.0 V/m  (b) 60 V/m  (c) 600 V/m  (d) 0.6 V/m

**ANSWER: (b)**
```
   E0 = c B0 = (3 x 10^8)(2.0 x 10^-7) = 60 V/m
```

---

### Q22
The wave of Q19 travels along
(a) +x  (b) −x  (c) +y  (d) −z

**ANSWER: (b)** The bracket is (kx **+** omega t), so it travels in the
**negative x** direction.

---

### Q23
An EM wave travels along the +z direction with its magnetic field along the +x
direction. The electric field is along
(a) +y  (b) −y  (c) +x  (d) −z

**ANSWER: (b)** The propagation direction is along **E x B**.
Try E along −y: (−y) x (+x) = −(y x x) = −(−z) = +z. Correct.

> **SHORTCUT:** Use right-hand rule with the ORDER **E, then B, then travel**.
> Curl fingers from E to B; the thumb gives the direction of travel.

---

# ===============================================================
# PATTERN 6 — THE E0 / B0 = c RELATION
# ===============================================================

### Q24
In an electromagnetic wave, the ratio of the amplitude of the electric field to
that of the magnetic field is
(a) 1  (b) c  (c) 1/c  (d) c^2

**ANSWER: (b)** E0/B0 = c.

---

### Q25
The electric field amplitude of an EM wave is 9 V/m. The magnetic field
amplitude is
(a) 3 x 10^-8 T  (b) 2.7 x 10^9 T  (c) 3 x 10^8 T  (d) 9 x 10^-8 T

**ANSWER: (a)** B0 = E0/c = 9/(3 x 10^8) = 3 x 10^-8 T.

---

### Q26
In an EM wave, at a given instant E = 6 V/m. The magnetic field at that instant
is
(a) 2 x 10^-8 T  (b) 1.8 x 10^9 T  (c) zero  (d) cannot be found

**ANSWER: (a)** Because E and B are **in phase**, E/B = c holds at *every*
instant, not just at the peaks. B = 6/(3 x 10^8) = 2 x 10^-8 T.

---

### Q27
Electromagnetic waves are not deflected by an electric field because
(a) they travel too fast
(b) they are uncharged
(c) they are transverse
(d) they have zero mass

**ANSWER: (b)** No charge means no electric force.

---

# ===============================================================
# PATTERN 7 — ENERGY DENSITY AND INTENSITY
# ===============================================================

### Q28
In an electromagnetic wave, the ratio of the energy density of the electric
field to that of the magnetic field is
(a) 1 : 1  (b) 1 : c  (c) c : 1  (d) 1 : c^2

**ANSWER: (a)** They are exactly equal — the energy is shared half and half.

> **SHORTCUT:** Whenever an option "1:1" appears in an energy-density question
> about EM waves, it is almost certainly the answer.

---

### Q29
The average energy density of an EM wave whose electric field amplitude is
6.0 V/m is about
(a) 1.6 x 10^-10 J/m^3  (b) 1.6 x 10^-8 J/m^3
(c) 3.2 x 10^-10 J/m^3  (d) 8.0 x 10^-11 J/m^3

**ANSWER: (a)**
```
   < u > = (1/2) eps0 E0^2 = 0.5 x (8.854 x 10^-12) x 36
         = 1.59 x 10^-10 J/m^3
```

---

### Q30
An EM wave has intensity 9.0 x 10^-4 W/m^2. Its average energy density is
(a) 3 x 10^-12 J/m^3  (b) 3 x 10^-4 J/m^3
(c) 2.7 x 10^5 J/m^3  (d) 3 x 10^8 J/m^3

**ANSWER: (a)**
```
   < u > = I / c = (9.0 x 10^-4) / (3 x 10^8) = 3.0 x 10^-12 J/m^3
```

> **SHORTCUT:** Intensity to energy density = **divide by c**. Energy density
> to intensity = **multiply by c**. That one line replaces two formulas.

---

### Q31
If the electric field amplitude of an EM wave is doubled, its intensity becomes
(a) half  (b) double  (c) four times  (d) unchanged

**ANSWER: (c)** I is proportional to E0^2.

---

### Q32
A point source radiates 200 W uniformly. The intensity at 5 m is about
(a) 0.64 W/m^2  (b) 6.4 W/m^2  (c) 0.064 W/m^2  (d) 40 W/m^2

**ANSWER: (a)**
```
        P            200            200
   I = -------- = ---------- = ------------ = 0.637 W/m^2
       4 pi r^2   4 pi (25)      314.2
```

---

# ===============================================================
# PATTERN 8 — MOMENTUM AND RADIATION PRESSURE
# ===============================================================

```
  THE ONE THING TO GET RIGHT:

     ABSORBING (black)   ->   p = U/c   ,   P = I/c
     REFLECTING (mirror) ->   p = 2U/c  ,   P = 2I/c
```

### Q33
An EM wave of intensity 30 W/m^2 falls normally on a perfectly reflecting
surface. The radiation pressure is
(a) 1.0 x 10^-7 Pa  (b) 2.0 x 10^-7 Pa
(c) 1.0 x 10^-8 Pa  (d) 9.0 x 10^9 Pa

**ANSWER: (b)**
```
   P = 2 I / c = (2 x 30) / (3 x 10^8) = 2.0 x 10^-7 N/m^2
```

---

### Q34
A totally absorbing surface receives 4.5 J of EM energy. The momentum
transferred is
(a) 1.5 x 10^-8 kg m/s  (b) 3.0 x 10^-8 kg m/s
(c) 1.5 x 10^8 kg m/s   (d) 1.35 x 10^9 kg m/s

**ANSWER: (a)** p = U/c = 4.5/(3 x 10^8) = 1.5 x 10^-8 kg m/s.

---

### Q35
For the same energy, the momentum transferred to a perfect mirror compared with
a perfectly black surface is
(a) the same  (b) half  (c) double  (d) four times

**ANSWER: (c)** The wave's momentum is reversed, so the change is 2U/c.

---

### Q36
Sunlight of intensity 1.4 kW/m^2 falls normally on a perfectly absorbing plate
of area 2.0 m^2. The force on the plate is about
(a) 9.3 x 10^-6 N  (b) 4.7 x 10^-6 N
(c) 9.3 x 10^-3 N  (d) 2.8 x 10^3 N

**ANSWER: (a)**
```
   P = I/c = 1400 / (3 x 10^8) = 4.67 x 10^-6 N/m^2

   F = P A = (4.67 x 10^-6)(2.0) = 9.3 x 10^-6 N
```

---

# ===============================================================
# PATTERN 9 — ORDERING THE SPECTRUM
# ===============================================================

### Q37
Which of the following has the shortest wavelength?
(a) X-rays  (b) gamma rays  (c) ultraviolet  (d) microwaves

**ANSWER: (b)** Gamma rays — shortest wavelength, highest frequency, highest
energy.

---

### Q38
Arrange in order of INCREASING frequency: infrared, ultraviolet, radio waves,
X-rays.
(a) radio, IR, UV, X-rays  (b) X-rays, UV, IR, radio
(c) IR, radio, UV, X-rays  (d) radio, UV, IR, X-rays

**ANSWER: (a)** Use **RADIO MAN IN VIZAG USES X-RAY GUN**.

---

### Q39
Which of these has a frequency of about 10^15 Hz?
(a) radio waves  (b) microwaves  (c) visible light  (d) gamma rays

**ANSWER: (c)** Visible light lies between 4 x 10^14 and 7.5 x 10^14 Hz, which
is of the order of 10^15 Hz. Nothing else is close.

---

### Q40
The wavelength of light of frequency 5 x 10^14 Hz is
(a) 600 nm  (b) 6000 nm  (c) 60 nm  (d) 6 nm

**ANSWER: (a)**
```
   lambda = c/nu = (3 x 10^8)/(5 x 10^14) = 6 x 10^-7 m = 600 nm
```

---

### Q41
Which band lies between visible light and X-rays?
(a) infrared  (b) ultraviolet  (c) microwaves  (d) gamma rays

**ANSWER: (b)**

---

### Q42
Which has the greatest penetrating power?
(a) infrared  (b) visible  (c) X-rays  (d) gamma rays

**ANSWER: (d)** Penetrating power rises with frequency.

---

# ===============================================================
# PATTERN 10 — SOURCE, DETECTOR AND USE
# ===============================================================

### Q43
Microwaves are produced by
(a) an oscillating LC circuit  (b) a klystron or magnetron
(c) radioactive nuclei  (d) hot bodies

**ANSWER: (b)**

---

### Q44
A microwave oven works because the frequency of microwaves matches the natural
frequency of
(a) carbon atoms  (b) water molecules  (c) oxygen molecules  (d) metal ions

**ANSWER: (b)** Water molecules in the food resonate and heat it from within.

---

### Q45
Infrared radiation is detected by
(a) a Geiger–Muller counter  (b) a bolometer or thermopile
(c) the human eye  (d) a point-contact diode

**ANSWER: (b)**

---

### Q46
The radiation used in a TV remote control is
(a) radio waves  (b) microwaves  (c) infrared  (d) ultraviolet

**ANSWER: (c)**

---

### Q47
X-rays are produced when
(a) a nucleus decays
(b) high-energy electrons strike a heavy metal target
(c) an LC circuit oscillates
(d) a hot body radiates

**ANSWER: (b)**

---

### Q48
Gamma rays originate from
(a) the electron cloud of an atom  (b) the nucleus of an atom
(c) an antenna  (d) a magnetron

**ANSWER: (b)** This is the key difference from X-rays, whose ranges overlap.

---

### Q49
Ultraviolet radiation is used for
(a) RADAR  (b) sterilising drinking water
(c) night photography  (d) cooking food

**ANSWER: (b)**

---

# ===============================================================
# PATTERN 11 — ENVIRONMENT AND ODD ONE OUT
# ===============================================================

### Q50
The greenhouse effect is due to the absorption of
(a) ultraviolet radiation  (b) infrared radiation
(c) X-rays  (d) radio waves

**ANSWER: (b)** Greenhouse gases absorb the long-wavelength **infrared**
re-radiated by the warm Earth.

---

### Q51
The ozone layer protects us by absorbing
(a) infrared  (b) ultraviolet  (c) gamma rays  (d) microwaves

**ANSWER: (b)**

---

### Q52
Which of the following is NOT a property of electromagnetic waves?
(a) they are transverse
(b) they require a material medium
(c) they carry momentum
(d) they travel at 3 x 10^8 m/s in vacuum

**ANSWER: (b)** They need **no** medium — that is one of their defining
properties.

---

### Q53
Electromagnetic waves are produced by
(a) a charge at rest
(b) a charge moving with constant velocity
(c) an accelerated charge
(d) a neutral particle

**ANSWER: (c)**

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-------------------------------------+-----------------------------------+
  |  IF YOU SEE THIS ...                |  DO THIS IMMEDIATELY              |
  +-------------------------------------+-----------------------------------+
  |  "displacement current is due to"   |  answer: CHANGING ELECTRIC FIELD  |
  +-------------------------------------+-----------------------------------+
  |  "shortest wavelength / highest     |  answer: GAMMA RAYS               |
  |   frequency / most penetrating"     |                                   |
  +-------------------------------------+-----------------------------------+
  |  "longest wavelength / lowest       |  answer: RADIO WAVES              |
  |   frequency"                        |                                   |
  +-------------------------------------+-----------------------------------+
  |  "E0 / B0 = ?"                      |  answer: c                        |
  +-------------------------------------+-----------------------------------+
  |  "ratio of electric to magnetic     |  answer: 1 : 1                    |
  |   energy density"                   |                                   |
  +-------------------------------------+-----------------------------------+
  |  Given intensity, want energy       |  DIVIDE by c                      |
  |  density                            |                                   |
  +-------------------------------------+-----------------------------------+
  |  Given energy density, want         |  MULTIPLY by c                    |
  |  intensity                          |                                   |
  +-------------------------------------+-----------------------------------+
  |  "perfectly reflecting / mirror"    |  put the FACTOR 2 in (2I/c, 2U/c) |
  +-------------------------------------+-----------------------------------+
  |  "perfectly absorbing / black"      |  NO factor 2  (I/c , U/c)         |
  +-------------------------------------+-----------------------------------+
  |  "fully charged capacitor"          |  displacement current = ZERO      |
  +-------------------------------------+-----------------------------------+
  |  Wave equation with ( kx + omega t )|  wave moves in the -x direction   |
  +-------------------------------------+-----------------------------------+
  |  Wave equation given                |  lambda = 2 pi / k ,              |
  |                                     |  nu = omega / 2 pi ,              |
  |                                     |  check omega/k = 3 x 10^8         |
  +-------------------------------------+-----------------------------------+
  |  eps_r and mu_r given               |  n = sqrt(mu_r eps_r) , v = c/n   |
  +-------------------------------------+-----------------------------------+
  |  "enters a medium"                  |  FREQUENCY UNCHANGED;             |
  |                                     |  speed and wavelength / n         |
  +-------------------------------------+-----------------------------------+
  |  "greenhouse effect"                |  INFRARED                         |
  +-------------------------------------+-----------------------------------+
  |  "ozone layer"                      |  ULTRAVIOLET                      |
  +-------------------------------------+-----------------------------------+
  |  Options include "requires a        |  that option is the odd one out   |
  |  medium"                            |  / the FALSE statement            |
  +-------------------------------------+-----------------------------------+
  |  Any B0 answer bigger than 10^-4 T  |  you MULTIPLIED by c instead of   |
  |                                     |  dividing. Redo it.               |
  +-------------------------------------+-----------------------------------+
  |  cm^2 in the question               |  convert with 10^-4, not 10^-2    |
  +-------------------------------------+-----------------------------------+
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  EAPCET has NO NEGATIVE MARKING.                                  |
  |  If a question from this chapter appears and you are unsure,      |
  |  guess "gamma rays" for anything extreme (shortest / highest /    |
  |  most penetrating) and "radio waves" for anything at the other    |
  |  end. You will be right more often than not.                      |
  |                                                                   |
  |  JEE Main has -1. Here, if you genuinely do not know, skip.       |
  |  But the questions from this chapter are so simple that you       |
  |  should almost never need to.                                     |
  |                                                                   |
  +-------------------------------------------------------------------+
```
