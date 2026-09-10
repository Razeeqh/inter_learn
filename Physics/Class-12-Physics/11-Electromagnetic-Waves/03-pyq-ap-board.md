# Electromagnetic Waves — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Physics, 2nd Year, 60 marks · **Chapter 11 — Electromagnetic Waves**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> so these are grouped by how often they appear rather than tagged to a single
> year. Cross-check with the official papers at **bie.ap.gov.in** before your exam.
> Do not trust any book that claims a precise year for these — they rotate.

---

## WHERE THIS CHAPTER SITS IN THE PAPER

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  Section A  (2 marks each, answer ALL 10)                         |
  |        ->  ALMOST ALWAYS 1 question from this chapter.            |
  |            Occasionally 2.  THIS IS THE MAIN PRIZE.               |
  |                                                                   |
  |  Section B  (4 marks each, answer any 6 of 8)                     |
  |        ->  OCCASIONALLY 1 question — usually displacement         |
  |            current, or the properties of EM waves, or a short     |
  |            spectrum answer.                                       |
  |                                                                   |
  |  Section C  (8 marks each, answer any 2 of 3)                     |
  |        ->  ESSENTIALLY NEVER. This chapter is too short to        |
  |            support an 8-mark question, and BIEAP keeps the        |
  |            LAQ slots for Ray Optics, Current Electricity,         |
  |            Moving Charges & Magnetism, EMI/AC and Nuclei.         |
  |            DO NOT prepare a long answer here.                     |
  |                                                                   |
  |  EXPECTED HAUL:  2 marks almost guaranteed, 6 on a good day.      |
  |  TIME COST:      3 to 4 hours total.                              |
  |                                                                   |
  |  ==> Best marks-per-hour ratio in the 2nd year Physics syllabus.  |
  |      DO IT EARLY.                                                 |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

## Topic: Displacement current and Maxwell

### Q A1
What is displacement current? Write its expression.

**ANSWER:** Displacement current is the current produced by a **time-varying
(changing) electric field**, not by the motion of charges.

```
                d (PhiE)
   I_d = eps0 -----------          PhiE = electric flux
                   dt              eps0 = permittivity of free space

   SI unit: ampere (A)
```

---

### Q A2
What is the need for displacement current?

**ANSWER:** Ampere's circuital law fails for a charging capacitor: two
different surfaces bounded by the **same** Amperian loop give different
enclosed currents (one cuts the wire, one passes through the gap where no
charge flows). Maxwell added the displacement current so that the total
current **Ic + Id is continuous everywhere** and the law gives the same
answer for every surface.

---

### Q A3
State the Ampere–Maxwell law.

**ANSWER:**
```
   INT B . dl  =  mu0 ( I_c  +  I_d )

                                     d(PhiE)
               =  mu0 I_c  +  mu0 eps0 --------
                                         dt

   A magnetic field is produced BOTH by a conduction current
   AND by a changing electric field.
```

---

### Q A4
Give any two of Maxwell's equations and state what they mean.

**ANSWER:**
```
   (i)   INT E . dA  =  q / eps0
         Gauss's law for electricity — electric charges are the
         sources of the electric field.

   (ii)  INT B . dA  =  0
         Gauss's law for magnetism — magnetic field lines are closed
         loops; isolated magnetic poles (monopoles) do not exist.
```
(Any two of the four are acceptable.)

---

### Q A5
Does a capacitor carry a current when it is fully charged? Explain.

**ANSWER:** No. When fully charged the electric field between the plates is
**constant**, so d(PhiE)/dt = 0 and the displacement current is zero. The
conduction current is also zero. A large field is not enough — the field must
be **changing** to give a displacement current.

---

## Topic: Speed of EM waves

### Q A6
Give the expression for the velocity of electromagnetic waves in free space
and calculate its value.

**ANSWER:**
```
              1
   c  =  --------------
         sqrt(mu0 eps0)

   mu0 eps0 = (4 pi x 10^-7)(8.854 x 10^-12) = 1.1126 x 10^-17

   sqrt(mu0 eps0) = 3.336 x 10^-9

   c = 1 / (3.336 x 10^-9) = 3 x 10^8 m/s
```
This equals the measured speed of light, which is how Maxwell concluded that
**light is an electromagnetic wave**.

---

### Q A7
Write the expression for the speed of an electromagnetic wave in a material
medium.

**ANSWER:**
```
             1                              c
   v  =  -----------      =    ------------------------   =   c / n
         sqrt(mu eps)          sqrt( mu_r  eps_r )

   where mu = mu0 mu_r , eps = eps0 eps_r ,
   and the refractive index  n = sqrt(mu_r eps_r).

   Since mu_r and eps_r are greater than 1,  v is always LESS than c.
```

---

### Q A8
A medium has relative permittivity 4 and relative permeability 1. Find the
speed of light in it.

**ANSWER:**
```
   n = sqrt(mu_r eps_r) = sqrt(1 x 4) = 2

   v = c / n = (3 x 10^8) / 2 = 1.5 x 10^8 m/s
```

---

## Topic: Nature and properties

### Q A9
What are electromagnetic waves? How are they produced?

**ANSWER:** Electromagnetic waves are waves in which mutually perpendicular
electric and magnetic fields oscillate in phase and travel through space,
requiring no material medium.
They are produced by **accelerating (oscillating) electric charges**. The
frequency of the wave equals the frequency of oscillation of the charge.

---

### Q A10
Give any four properties of electromagnetic waves.

**ANSWER:**
```
   1.  They are TRANSVERSE waves.
   2.  E and B are perpendicular to each other and both are
       perpendicular to the direction of propagation.
   3.  E and B oscillate IN PHASE, with  E0 / B0 = c.
   4.  They need NO material medium; they travel through vacuum
       at 3 x 10^8 m/s.
   (also: they carry energy and momentum; they are not deflected
    by electric or magnetic fields.)
```

---

### Q A11
Why are electromagnetic waves not deflected by an electric or a magnetic field?

**ANSWER:** Because electromagnetic waves are **electrically neutral — they
carry no charge**. A field can only exert a force on a charge, so there is
nothing for the field to push on. Their path is a straight line.

---

### Q A12
What is the relation between E0 and B0 in an electromagnetic wave? Which of
the two is larger in SI units?

**ANSWER:**
```
   E0 / B0  =  c        so   E0 = c B0 ,   B0 = E0 / c

   Since c = 3 x 10^8 , E0 is about 10^8 times larger than B0
   numerically. (B0 is typically of the order of 10^-7 tesla.)
```

---

### Q A13
The amplitude of the electric field in a plane electromagnetic wave is
6.0 V/m. Find the amplitude of the magnetic field.

**ANSWER:**
```
   B0 = E0 / c = 6.0 / (3 x 10^8) = 2.0 x 10^-8 T
```

---

### Q A14
In an electromagnetic wave the magnetic field amplitude is 510 nT. Find the
amplitude of the electric field.

**ANSWER:**
```
   B0 = 510 nT = 510 x 10^-9 T = 5.10 x 10^-7 T

   E0 = c B0 = (3 x 10^8)(5.10 x 10^-7) = 153 V/m
```

---

### Q A15
An electromagnetic wave travels along the +x direction with its electric field
along the +y direction. In which direction is the magnetic field?

**ANSWER:** Along the **+z direction**, because the direction of propagation is
along **E x B**, and (+y) x (+z) = (+x).

---

## Topic: Energy, intensity, radiation pressure

### Q A16
Show that the electric and magnetic energy densities in an electromagnetic wave
are equal.

**ANSWER:**
```
              B^2       (E/c)^2         E^2                 1
   u_B  =  --------- = ---------- = ---------- ,  and  --- = mu0 eps0
             2 mu0       2 mu0       2 mu0 c^2          c^2

        =  (1/2) eps0 E^2   =   u_E              PROVED
```
So the energy of an EM wave is shared **equally, half and half**, between its
electric and magnetic fields.

---

### Q A17
Write the expression for the average energy density of an electromagnetic wave.

**ANSWER:**
```
                                    B0^2
   < u >  =  (1/2) eps0 E0^2  =  ---------      (unit: J m^-3)
                                   2 mu0

   Also   < u >  =  I / c ,  where I is the intensity.
```

---

### Q A18
Define the intensity of an electromagnetic wave and give its unit.

**ANSWER:** Intensity is the **energy crossing unit area perpendicular to the
wave, per unit time**.
```
   I  =  < u >  x  c  =  (1/2) eps0 E0^2 c

   SI unit: watt per square metre (W m^-2)
```

---

### Q A19
What is radiation pressure? Write the expression for a perfectly reflecting
surface.

**ANSWER:** Radiation pressure is the **force per unit area exerted by an
electromagnetic wave on a surface it falls on**, because the wave carries
momentum.
```
   P  =  I / c        perfectly ABSORBING surface

   P  =  2 I / c      perfectly REFLECTING surface (momentum is reversed)
```

---

### Q A20
An electromagnetic wave delivers 30 J of energy to a perfectly absorbing
surface. What momentum does it transfer?

**ANSWER:**
```
   p = U / c = 30 / (3 x 10^8) = 1.0 x 10^-7  kg m s^-1
```

---

## Topic: The spectrum

### Q A21
Write the electromagnetic spectrum in order of increasing frequency.

**ANSWER:**
```
   RADIO -> MICROWAVE -> INFRARED -> VISIBLE -> ULTRAVIOLET
         -> X-RAYS -> GAMMA RAYS

   ("Radio Man In Vizag Uses X-ray Gun")

   Frequency increases and wavelength decreases along this order.
```

---

### Q A22
Which electromagnetic radiation has (i) the longest wavelength (ii) the highest
frequency?

**ANSWER:** (i) **Radio waves** — longest wavelength, lowest frequency.
(ii) **Gamma rays** — highest frequency, shortest wavelength, highest energy
and greatest penetrating power.

---

### Q A23
Give any two uses of microwaves.

**ANSWER:**
```
   1.  RADAR systems and traffic speed guns (aircraft navigation).
   2.  Microwave ovens — the microwave frequency matches the natural
       frequency of water molecules, so food heats from within.
   (also: satellite and long-distance telecommunication)
```

---

### Q A24
How are X-rays produced? Give two uses.

**ANSWER:** X-rays are produced when **high-energy electrons are suddenly
stopped by a heavy metal target** (an X-ray or Coolidge tube).
Uses: (i) medical radiography of bones and fractures; (ii) studying crystal
structure by X-ray diffraction. (Also: cancer radiotherapy, airport security.)

---

### Q A25
How are gamma rays produced? Give one use. How do they differ from X-rays?

**ANSWER:** Gamma rays are emitted by **radioactive nuclei during nuclear
decay** — they come from *inside* the nucleus.
Use: radiotherapy for cancer; sterilising surgical instruments.
Difference: X-rays originate **outside** the nucleus (from electrons); gamma
rays originate **inside** the nucleus. Their wavelengths overlap, so the
**source** is what distinguishes them.

---

### Q A26
What is the wavelength range of visible light? Name the colours in order of
increasing wavelength.

**ANSWER:**
```
   400 nm to 700 nm   ( 4 x 10^-7 m  to  7 x 10^-7 m )

   Increasing wavelength:
   VIOLET, INDIGO, BLUE, GREEN, YELLOW, ORANGE, RED   (VIBGYOR)
```

---

### Q A27
Light of wavelength 5000 angstrom is used. Find its frequency.

**ANSWER:**
```
   lambda = 5000 A = 5000 x 10^-10 m = 5 x 10^-7 m

        c        3 x 10^8
   nu = ------ = ------------- = 6 x 10^14 Hz
       lambda    5 x 10^-7
```

---

### Q A28
A radio station broadcasts at 100 MHz. What is the wavelength of the waves?

**ANSWER:**
```
   nu = 100 MHz = 1.0 x 10^8 Hz

              c        3 x 10^8
   lambda = ------ = ------------- = 3 m
              nu       1.0 x 10^8
```

---

### Q A29
What is the greenhouse effect? Which radiation is responsible?

**ANSWER:** Short-wavelength solar radiation passes through the atmosphere and
warms the Earth. The warm Earth re-radiates **long-wavelength INFRARED**, which
is absorbed by greenhouse gases (CO2, water vapour, methane) and re-radiated
back to the surface, keeping the Earth warm. Excess CO2 traps too much
infrared and causes **global warming**.

---

### Q A30
What is the role of the ozone layer?

**ANSWER:** Ozone (O3) in the stratosphere, about 15–35 km up, **absorbs
harmful ultraviolet radiation** from the Sun. Without it, UV reaching the
ground would cause skin cancer, cataracts and damage to crops and plankton.
CFCs destroy ozone, producing the **ozone hole**.

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

### Q B1
What is displacement current? Show that it is equal to the conduction current
in a charging capacitor. **(most-asked 4-marker from this chapter)**

**ANSWER:**

```
  DEFINITION (1 mark)

              d (PhiE)
    I_d = eps0 ---------      = current due to a time-varying
                  dt            electric field, not to moving charges.


  PROOF (3 marks)

    In a parallel plate capacitor of plate area A carrying charge q,
    the field between the plates is

              q
    E  =  ---------
          eps0 A

    Electric flux through a surface between the plates:

                          q             q
    PhiE  =  E x A  =  --------- x A = ------
                       eps0 A           eps0

    Therefore

                 d(PhiE)             1     dq        dq
    I_d = eps0  --------- = eps0 x ------ ----- =  -----  =  I_c
                    dt              eps0    dt        dt


  CONCLUSION

    I_d  =  I_c

    The displacement current in the gap exactly equals the conduction
    current in the wire, so the TOTAL current (Ic + Id) is CONTINUOUS
    all the way round the circuit.
```

---

### Q B2
Explain the inconsistency in Ampere's circuital law and how Maxwell removed it.

**ANSWER:**

```
  THE INCONSISTENCY

    Ampere's law:   INT B.dl = mu0 I

    Take an Amperian loop around the wire that charges a capacitor,
    and stretch two different surfaces on it:

      SURFACE S1 : a flat disc cut by the WIRE
                   -->  enclosed current = I
                   -->  INT B.dl = mu0 I

      SURFACE S2 : a bag that bulges out and passes BETWEEN the
                   capacitor plates, where no charge crosses
                   -->  enclosed current = 0
                   -->  INT B.dl = 0

    SAME LOOP, TWO DIFFERENT ANSWERS.  The law is inconsistent.

           wire                       capacitor
      ------ I ------>              +---+   +---+
              |                     |   |   |   |
           ...|...                  | + |   | - |
           :  |  :  loop            |   |   |   |
           :__|__:                  +---+   +---+
              |                       ^       ^
        S1 cuts here            S2 passes through the GAP


  MAXWELL'S CORRECTION

    Between the plates the electric field is CHANGING, so there is a
    changing electric flux. Maxwell said this also produces a magnetic
    field, and defined the DISPLACEMENT CURRENT

              d(PhiE)
    I_d = eps0 --------
                 dt

    Since I_d = dq/dt = I_c , surface S2 now also encloses a current I.

    The modified (AMPERE-MAXWELL) law is

    INT B.dl  =  mu0 ( I_c + I_d )

    which gives the SAME answer for every surface. The inconsistency
    is removed.
```

---

### Q B3
State Maxwell's four equations and give the physical meaning of each.

**ANSWER:**

```
  1.  GAUSS'S LAW FOR ELECTRICITY        INT E.dA = q / eps0
      The electric flux out of a closed surface equals the enclosed
      charge divided by eps0.
      MEANING: charges are the sources of electric fields; field lines
      begin on + charge and end on - charge.

  2.  GAUSS'S LAW FOR MAGNETISM          INT B.dA = 0
      The magnetic flux out of any closed surface is zero.
      MEANING: magnetic field lines are closed loops; magnetic
      MONOPOLES do not exist.

  3.  FARADAY'S LAW                      INT E.dl = - d(PhiB)/dt
      The line integral of E round a loop equals minus the rate of
      change of magnetic flux.
      MEANING: a CHANGING MAGNETIC FIELD PRODUCES AN ELECTRIC FIELD.

  4.  AMPERE-MAXWELL LAW                 INT B.dl = mu0 Ic
                                                 + mu0 eps0 d(PhiE)/dt
      MEANING: a magnetic field is produced by a conduction current
      AND by a CHANGING ELECTRIC FIELD.

  TOGETHER, equations 3 and 4 say each changing field creates the
  other, so the pair can travel through empty space as an
  ELECTROMAGNETIC WAVE.
```

---

### Q B4
State any six properties of electromagnetic waves.

**ANSWER:**

```
  1.  They are TRANSVERSE waves.

  2.  The electric field E and the magnetic field B are perpendicular
      to each other, and BOTH are perpendicular to the direction of
      propagation. The direction of travel is along E x B.

  3.  E and B oscillate IN PHASE — maximum together, zero together.

  4.  Their amplitudes are related by  E0 / B0 = c.

  5.  They require NO MATERIAL MEDIUM and travel through vacuum with
      speed  c = 1/sqrt(mu0 eps0) = 3 x 10^8 m/s, the same for all
      frequencies.

  6.  They are NOT DEFLECTED by electric or magnetic fields, because
      they carry no charge.

  7.  They carry ENERGY and MOMENTUM and hence exert RADIATION
      PRESSURE.

  8.  They are produced by ACCELERATED charges, and show reflection,
      refraction, interference, diffraction and POLARISATION.


                  y
                  ^   E
                  |  /\      /\
                  | /  \    /  \
        ----------+/----\--/----\-------> x  (direction of travel)
                 /|      \/
                / |
               z  |   B is along z, in and out of the page,
                      in phase with E
```

---

### Q B5
Derive the relation between E0 and B0 for an electromagnetic wave and hence
show that E/B = c at every instant.

**ANSWER:**

```
  For a plane EM wave travelling along x:

      E = E0 sin(kx - omega t)          along y
      B = B0 sin(kx - omega t)          along z

  Applying Faraday's law and the Ampere-Maxwell law to this wave gives

      E0        omega
     ----  =   -------  =  c              (since  c = omega / k)
      B0          k

  Therefore     E0  =  c B0

  Because the two waves have the SAME sine factor (they are IN PHASE),
  dividing the two equations at any instant gives

      E       E0 sin(kx - omega t)       E0
     ---  =  ----------------------  =  ----  =  c
      B       B0 sin(kx - omega t)       B0

  So E / B = c at EVERY instant and EVERY point, not just at the peaks.
```

---

### Q B6
Describe Hertz's experiment for the production and detection of electromagnetic
waves.

**ANSWER:**

```
  APPARATUS (2 marks)

    TRANSMITTER : two metal plates attached to two brass spheres
                  separated by a small SPARK GAP, connected to an
                  INDUCTION COIL that provides a large oscillating
                  voltage.

    RECEIVER    : a copper wire ring with a very small gap, placed a
                  few metres away and NOT connected to anything.

      +--------+                          .-----------.
      | INDUC- |----[]                   /             \
      | TION   |     ||  <- spark gap    |   copper    |
      | COIL   |----[]                   \    ring    /
      +--------+                          '--- ) ( --'
                                            small gap

  OBSERVATION (1 mark)

    Each time a spark jumped across the transmitter gap, a small spark
    also appeared in the receiver gap, several metres away, with no
    connection between them.

  CONCLUSION (1 mark)

    Energy travelled across the empty space as an ELECTROMAGNETIC WAVE.
    Hertz further showed these waves could be reflected, refracted and
    POLARISED, and measured their speed as 3 x 10^8 m/s — exactly the
    value Maxwell had predicted.
    (Wavelength about 6 m, frequency about 5 x 10^7 Hz.)
```

---

### Q B7
Write a note on the electromagnetic spectrum. Name the bands in order and give
one use of each.

**ANSWER:**

```
  The electromagnetic spectrum is the ordered arrangement of all EM
  waves by wavelength (or frequency). All travel at 3 x 10^8 m/s in
  vacuum; only the frequency differs.

  ORDER (long wavelength -> short wavelength):

    RADIO -> MICROWAVE -> INFRARED -> VISIBLE -> ULTRAVIOLET
          -> X-RAYS -> GAMMA RAYS


  +--------------+-------------------+---------------------------+
  |  BAND        |  WAVELENGTH       |  ONE USE                  |
  +--------------+-------------------+---------------------------+
  |  Radio       |  > 0.1 m          |  Radio / TV broadcasting  |
  |  Microwave   |  1 mm to 0.1 m    |  RADAR, microwave ovens   |
  |  Infrared    |  700 nm to 1 mm   |  Remote controls, heating |
  |  Visible     |  400 to 700 nm    |  Vision, photography      |
  |  Ultraviolet |  1 nm to 400 nm   |  Sterilising water        |
  |  X-rays      |  1 pm to 1 nm     |  Bone radiography         |
  |  Gamma rays  |  < 1 pm           |  Cancer radiotherapy      |
  +--------------+-------------------+---------------------------+

  Along this order the wavelength decreases while the frequency,
  the photon energy (E = h nu) and the penetrating power increase.
```

---

### Q B8
Give the sources, detectors and uses of infrared and ultraviolet radiation.

**ANSWER:**

```
  INFRARED  (700 nm to 1 mm)

    SOURCE   : hot bodies; vibration of atoms and molecules.
               Any warm object emits IR.
    DETECTOR : thermopile, bolometer, thermocouple, IR photodiode,
               special photographic film.
    USES     : physiotherapy and heating; TV and AC remote controls;
               night-vision devices; long-distance photography
               through haze and fog; it produces the greenhouse
               effect that keeps the Earth warm.


  ULTRAVIOLET  (1 nm to 400 nm)

    SOURCE   : the Sun; mercury vapour lamps; arc lamps; very hot
               bodies.
    DETECTOR : photocells, photographic film, fluorescent screens.
    USES     : sterilising water and surgical instruments; LASIK eye
               surgery; detecting forged banknotes and invisible ink;
               producing vitamin D in the skin.
    NOTE     : most solar UV is absorbed by the OZONE layer;
               excess UV causes skin cancer and cataracts.
```

---

### Q B9
Distinguish between X-rays and gamma rays. Which is more penetrating?

**ANSWER:**

```
  +---------------------+--------------------+----------------------+
  |  FEATURE            |  X-RAYS            |  GAMMA RAYS          |
  +---------------------+--------------------+----------------------+
  |  ORIGIN             |  OUTSIDE the       |  INSIDE the NUCLEUS  |
  |                     |  nucleus (fast     |  (radioactive decay) |
  |                     |  electrons hitting |                      |
  |                     |  a metal target)   |                      |
  +---------------------+--------------------+----------------------+
  |  Wavelength         |  1 pm to 1 nm      |  less than 1 pm      |
  +---------------------+--------------------+----------------------+
  |  Frequency / energy |  lower             |  higher              |
  +---------------------+--------------------+----------------------+
  |  Penetrating power  |  high              |  VERY high (more     |
  |                     |                    |  than X-rays)        |
  +---------------------+--------------------+----------------------+
  |  Typical use        |  Radiography,      |  Radiotherapy,       |
  |                     |  crystallography   |  sterilisation       |
  +---------------------+--------------------+----------------------+

  Their wavelength ranges OVERLAP, so the SOURCE is what really
  distinguishes them. GAMMA RAYS are the more penetrating.
```

---

### Q B10
Sunlight of intensity 1.4 kW/m^2 falls normally on a surface. Calculate
(a) the average energy density, (b) the amplitude of the electric field,
(c) the amplitude of the magnetic field.

**ANSWER:**

```
  Given  I = 1400 W/m^2 , c = 3 x 10^8 m/s , eps0 = 8.854 x 10^-12


  (a)  < u > = I / c = 1400 / (3 x 10^8) = 4.67 x 10^-6 J m^-3


  (b)  I = (1/2) eps0 E0^2 c

                2 I                 2 x 1400
       E0^2 = --------- = ------------------------------
              eps0 c      (8.854 x 10^-12)(3 x 10^8)

                 2800
            = ------------- = 1.054 x 10^6
              2.656 x 10^-3

       E0 = 1.03 x 10^3 V/m       (about 1027 N/C)


  (c)  B0 = E0 / c = (1.03 x 10^3) / (3 x 10^8) = 3.4 x 10^-6 T
```

---

### Q B11
A 100 W lamp radiates uniformly in all directions. Assuming all the power is
converted to electromagnetic radiation, find the electric and magnetic field
amplitudes at a distance of 2 m from the lamp.

**ANSWER:**

```
  Intensity at 2 m:

             P            100              100
   I  =  ---------- = -------------- = ----------- = 1.99 W/m^2
         4 pi r^2     4 pi (2)^2         50.27


  Electric field amplitude:

              2 I               2 x 1.99
   E0^2 = ----------- = --------------------------- = 1.50 x 10^3
           eps0 c        2.656 x 10^-3

   E0 = sqrt(1.50 x 10^3) = 38.7 V/m


  Magnetic field amplitude:

   B0 = E0 / c = 38.7 / (3 x 10^8) = 1.29 x 10^-7 T
```

---

### Q B12
A parallel plate capacitor with circular plates of radius 12 cm is being
charged by a current of 0.15 A. Find (a) the displacement current between the
plates and (b) the rate of change of the electric field there.

**ANSWER:**

```
  (a)  The total current is continuous, so

       I_d  =  I_c  =  0.15 A


  (b)  A = pi r^2 = 3.1416 x (0.12)^2 = 0.04524 m^2

       I_d = eps0 A (dE/dt)

        dE          I_d                    0.15
       ---- = ------------- = ------------------------------------
        dt      eps0 A         (8.854 x 10^-12)(0.04524)

                  0.15
            = -------------- = 3.7 x 10^11  V m^-1 s^-1
              4.006 x 10^-13
```

---

### Q B13
A plane electromagnetic wave of frequency 50.0 MHz travels in free space. Its
electric field has amplitude 120 V/m. Find omega, k, lambda and B0, and write
down the equations for E and B.

**ANSWER:**

```
   nu = 50.0 MHz = 5.00 x 10^7 Hz

   omega = 2 pi nu = 2 x 3.1416 x 5.00 x 10^7
         = 3.14 x 10^8 rad/s

   lambda = c / nu = (3 x 10^8) / (5.00 x 10^7) = 6.00 m

   k = 2 pi / lambda = 6.283 / 6.00 = 1.05 rad/m
       (check: k = omega/c = 3.14e8 / 3e8 = 1.05  OK)

   B0 = E0 / c = 120 / (3 x 10^8) = 4.0 x 10^-7 T

   Taking the wave along x, E along y and B along z:

   E = 120 sin( 1.05 x - 3.14 x 10^8 t )  V/m      (along y)

   B = 4.0 x 10^-7 sin( 1.05 x - 3.14 x 10^8 t )  T   (along z)
```

---

### Q B14
An electromagnetic wave of intensity 20 W/m^2 falls normally on a surface of
area 0.5 m^2. Find the radiation pressure and the force if the surface is
(a) perfectly absorbing, (b) perfectly reflecting.

**ANSWER:**

```
  (a)  PERFECTLY ABSORBING

       P = I / c = 20 / (3 x 10^8) = 6.67 x 10^-8 N/m^2

       F = P A = (6.67 x 10^-8)(0.5) = 3.33 x 10^-8 N


  (b)  PERFECTLY REFLECTING   (momentum is reversed, so double)

       P = 2 I / c = 2 x 6.67 x 10^-8 = 1.33 x 10^-7 N/m^2

       F = P A = (1.33 x 10^-7)(0.5) = 6.67 x 10^-8 N
```

---

### Q B15
Write a short note on the greenhouse effect and its link with infrared
radiation.

**ANSWER:**

```
  1.  The Sun, being very hot, emits mostly SHORT-wavelength radiation
      (visible and near infrared). The atmosphere is transparent to it,
      so it reaches the ground and warms the Earth.

  2.  The Earth is far cooler (about 300 K), so it re-radiates energy
      as LONG-WAVELENGTH INFRARED.

  3.  Greenhouse gases — carbon dioxide, water vapour, methane,
      nitrous oxide and ozone — strongly ABSORB long-wavelength
      infrared and re-radiate part of it back down to the surface.

  4.  Heat therefore enters easily but leaves with difficulty, exactly
      as the glass of a greenhouse behaves. The surface stays about
      33 degrees warmer than it otherwise would.

  5.  The natural greenhouse effect is ESSENTIAL for life. Burning
      fossil fuels increases CO2, traps extra infrared, and produces
      GLOBAL WARMING and climate change.
```

---

### Q B16
Explain the importance of the ozone layer and how it is being damaged.

**ANSWER:**

```
  1.  Ozone (O3) is concentrated in the stratosphere, roughly 15 to
      35 km above the Earth.

  2.  It strongly ABSORBS solar ULTRAVIOLET radiation through the
      repeating cycle
            O2 + UV -> O + O ,  O2 + O -> O3 ,  O3 + UV -> O2 + O

  3.  This shields living things from UV, which is high-energy and
      damaging. Without the layer, UV at ground level would cause
      SKIN CANCER, CATARACTS, immune damage, and would kill crops
      and ocean plankton.

  4.  CFCs (chlorofluorocarbons) from old refrigerators and aerosol
      sprays drift up and break ozone molecules apart. This produced
      the "OZONE HOLE" detected over Antarctica in the 1980s.

  5.  CFCs are being phased out worldwide under the Montreal Protocol,
      and the layer is slowly recovering.
```

---

# ===============================================================
# SECTION C — LONG ANSWER (8 marks)
# ===============================================================

> **HONEST WARNING — READ THIS.**
> Electromagnetic Waves is **not** a Section C chapter in the BIEAP Physics
> paper. The three 8-mark slots are reserved for the big chapters
> (Ray Optics, Current Electricity, Moving Charges and Magnetism,
> Electromagnetic Induction and AC, Dual Nature / Atoms / Nuclei).
> The questions below are here only so that you are not caught out if an
> unusual paper combines this chapter with another. **Do not spend your
> revision time here.** If you have limited time, stop at Section B.

---

### Q C1 (combined-topic skeleton)
Explain the inconsistency in Ampere's law, define the displacement current,
state the Ampere–Maxwell law, and list Maxwell's four equations with their
physical meanings.

**MODEL ANSWER SKELETON (mark split)**

```
  PART 1  — The inconsistency, with the two-surface diagram     [2 marks]
            (see Q B2 above — reproduce the diagram)

  PART 2  — Definition of displacement current
            Id = eps0 d(PhiE)/dt , with the proof Id = Ic        [2 marks]
            (see Q B1 above)

  PART 3  — Statement of the Ampere-Maxwell law and the note
            that (Ic + Id) is continuous everywhere              [1 mark]

  PART 4  — Maxwell's four equations, each with its one-line
            physical meaning                                     [2 marks]
            (see Q B3 above)

  PART 5  — Conclusion: equations 3 and 4 together predict a
            self-sustaining wave of speed c = 1/sqrt(mu0 eps0)
            = 3 x 10^8 m/s, equal to the speed of light, so
            LIGHT IS AN EM WAVE                                  [1 mark]
```

---

### Q C2 (combined-topic skeleton)
Describe the nature and properties of electromagnetic waves. Derive the
relation between their energy densities and obtain expressions for intensity
and radiation pressure.

**MODEL ANSWER SKELETON (mark split)**

```
  PART 1  — Definition and production by accelerated charges     [1 mark]

  PART 2  — The E-B-propagation diagram, transverse nature,
            mutual perpendicularity, in-phase oscillation        [2 marks]
            (see Q B4)

  PART 3  — Speed c = 1/sqrt(mu0 eps0) and E0/B0 = c             [1 mark]

  PART 4  — Energy densities and the proof u_E = u_B             [2 marks]
                 uE = (1/2) eps0 E^2 ,  uB = B^2/(2 mu0)
                 using B = E/c and 1/c^2 = mu0 eps0 -> uE = uB
                 average:  <u> = (1/2) eps0 E0^2

  PART 5  — Intensity I = <u> c , momentum p = U/c               [1 mark]

  PART 6  — Radiation pressure P = I/c (absorbing),
            P = 2I/c (reflecting); mention comet tails and
            solar sails as evidence                              [1 mark]
```

---

### Q C3 (combined-topic skeleton)
Write a detailed account of the electromagnetic spectrum, giving for each band
the wavelength range, method of production, method of detection and uses.
Add a note on the greenhouse effect and the ozone layer.

**MODEL ANSWER SKELETON (mark split)**

```
  PART 1  — Statement that all EM waves travel at c in vacuum and
            differ only in frequency; the ordered list with the
            memory sentence, plus the ASCII spectrum line         [1 mark]

  PART 2  — The full seven-row table:
            band | wavelength | production | detection | uses     [5 marks]
            (reproduce the big table from 01-concepts.md
             TOPIC 8.2 — roughly 3/4 mark per band)

  PART 3  — Greenhouse effect: short waves in, long INFRARED
            trapped by CO2 / water vapour / methane, global
            warming                                              [1 mark]

  PART 4  — Ozone layer: O3 at 15-35 km absorbs ULTRAVIOLET,
            CFCs destroy it, the ozone hole, skin cancer          [1 mark]
```

---

# WHICH QUESTIONS REPEAT MOST

```
  +------+--------------------------------------+---------+------------+
  | RANK |  QUESTION TYPE                       | SECTION | CHANCE     |
  +------+--------------------------------------+---------+------------+
  |  1   |  Define displacement current /       |    A    |  VERY HIGH |
  |      |  write its expression                |         |            |
  +------+--------------------------------------+---------+------------+
  |  2   |  Uses of a named band (microwaves /  |    A    |  VERY HIGH |
  |      |  UV / IR / X-rays / gamma)           |         |            |
  +------+--------------------------------------+---------+------------+
  |  3   |  Highest / lowest frequency or       |    A    |  HIGH      |
  |      |  wavelength band in the spectrum     |         |            |
  +------+--------------------------------------+---------+------------+
  |  4   |  c = 1/sqrt(mu0 eps0) — write it /   |    A    |  HIGH      |
  |      |  find the value                      |         |            |
  +------+--------------------------------------+---------+------------+
  |  5   |  Simple nu = c/lambda or B0 = E0/c   |    A    |  HIGH      |
  |      |  calculation                         |         |            |
  +------+--------------------------------------+---------+------------+
  |  6   |  Properties / characteristics of     |   A/B   |  HIGH      |
  |      |  EM waves                            |         |            |
  +------+--------------------------------------+---------+------------+
  |  7   |  Why Ampere's law needed correction; |    B    |  MEDIUM    |
  |      |  show Id = Ic                        |         |            |
  +------+--------------------------------------+---------+------------+
  |  8   |  Maxwell's four equations in words   |    B    |  MEDIUM    |
  +------+--------------------------------------+---------+------------+
  |  9   |  Greenhouse effect / ozone layer     |   A/B   |  MEDIUM    |
  +------+--------------------------------------+---------+------------+
  | 10   |  Spectrum table with production and  |    B    |  MEDIUM    |
  |      |  detection                           |         |            |
  +------+--------------------------------------+---------+------------+
  | 11   |  Hertz's experiment                  |    B    |  LOW       |
  +------+--------------------------------------+---------+------------+
  | 12   |  Energy density / intensity /        |   A/B   |  LOW       |
  |      |  radiation pressure numerical        |         |            |
  +------+--------------------------------------+---------+------------+
  | 13   |  Anything at all                     |    C    |  ALMOST    |
  |      |                                      |         |  ZERO      |
  +------+--------------------------------------+---------+------------+
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   IF YOU LEARN ONLY RANKS 1 TO 5 — about 90 minutes of work —     |
  |   YOU WILL ALMOST CERTAINLY BANK THE 2 MARKS THIS CHAPTER         |
  |   OFFERS IN SECTION A.                                            |
  |                                                                   |
  |   Add ranks 6 to 8 (another 90 minutes) and you are covered       |
  |   for the occasional 4-mark question too.                         |
  |                                                                   |
  |   THEN STOP AND GO STUDY A HARDER CHAPTER.                        |
  |                                                                   |
  +-------------------------------------------------------------------+
```
