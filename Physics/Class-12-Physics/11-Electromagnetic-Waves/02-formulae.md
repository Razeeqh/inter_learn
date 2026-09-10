# Electromagnetic Waves — Formula and Fact Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
This chapter is half formulae and half FACTS, so both are here.

---

# 1. DISPLACEMENT CURRENT

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                          d (PhiE)                                 |
  |          I_d   =   eps0 -----------                               |
  |                              dt                                   |
  |                                                                   |
  |   PhiE = electric flux = E x A  (for uniform E perpendicular      |
  |                                  to the area)                     |
  |                                                                   |
  +-------------------------------------------------------------------+


  USEFUL EQUIVALENT FORMS (for a parallel plate capacitor)

  +-------------------------------------------------------------------+
  |                                                                   |
  |                       dE                                          |
  |     I_d  =  eps0  A  ----          (A = plate area)               |
  |                       dt                                          |
  |                                                                   |
  |               dq                                                  |
  |     I_d  =  ------  =  I_c         (numerically equal to the      |
  |               dt                    conduction current)           |
  |                                                                   |
  |                dV                                                 |
  |     I_d  =  C ----                 (C = capacitance)              |
  |                dt                                                 |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `Id = eps0 d(PhiE)/dt` | The **definition**. Write this whenever the word "displacement current" appears. |
| `Id = eps0 A dE/dt` | When you are given plate area / radius and the rate of change of E |
| `Id = Ic = dq/dt` | When you are given the charging current and asked for Id — one line, done |
| `Id = C dV/dt` | When you are given capacitance and the rate of change of voltage |

---

# 2. AMPERE-MAXWELL LAW

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     INT B . dl   =   mu0 ( I_c  +  I_d )                          |
  |                                                                   |
  |                                       d (PhiE)                    |
  |                  =   mu0 I_c  +  mu0 eps0 ----------              |
  |                                              dt                   |
  |                                                                   |
  |   ORIGINAL Ampere's law was just   INT B.dl = mu0 Ic              |
  |   Maxwell ADDED the second term.                                  |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# 3. MAXWELL'S FOUR EQUATIONS

```
  +---+------------------------+----------------------------------+
  | 1 |  INT E . dA = q / eps0 |  Gauss's law for ELECTRICITY     |
  |   |                        |  charges make electric fields    |
  +---+------------------------+----------------------------------+
  | 2 |  INT B . dA = 0        |  Gauss's law for MAGNETISM       |
  |   |                        |  no magnetic monopoles           |
  +---+------------------------+----------------------------------+
  | 3 |  INT E . dl =          |  FARADAY's law                   |
  |   |     - d(PhiB) / dt     |  changing B makes E              |
  +---+------------------------+----------------------------------+
  | 4 |  INT B . dl =          |  AMPERE - MAXWELL law            |
  |   |     mu0 Ic +           |  current AND changing E make B   |
  |   |     mu0 eps0 d(PhiE)/dt|                                  |
  +---+------------------------+----------------------------------+
```

---

# 4. SPEED OF ELECTROMAGNETIC WAVES

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   IN VACUUM                                                       |
  |                        1                                          |
  |          c   =   ----------------   =   3 x 10^8 m/s              |
  |                  sqrt(mu0 eps0)                                   |
  |                                                                   |
  |                                                                   |
  |   IN A MEDIUM                                                     |
  |                        1                                          |
  |          v   =   ----------------      mu  = mu0 mu_r             |
  |                  sqrt( mu eps )        eps = eps0 eps_r           |
  |                                                                   |
  |                                                                   |
  |                        c                    c                     |
  |          v   =   ----------------   =   -------                   |
  |                  sqrt(mu_r eps_r)          n                      |
  |                                                                   |
  |                                                                   |
  |   REFRACTIVE INDEX     n  =  sqrt( mu_r eps_r )                   |
  |                                                                   |
  |                        n  =  sqrt( eps_r )   if mu_r = 1          |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `c = 1/sqrt(mu0 eps0)` | Any "how did Maxwell find the speed of light" question |
| `v = 1/sqrt(mu eps)` | Speed inside glass, water, any dielectric |
| `n = sqrt(mu_r eps_r)` | Given eps_r and mu_r, asked for refractive index |
| `v = c/n` | Once you have n |
| `lambda_medium = lambda_vacuum / n` | Wavelength in a medium. **Frequency never changes.** |

---

# 5. THE WAVE ITSELF

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   E  =  E0 sin( kx - omega t )        E along y                   |
  |   B  =  B0 sin( kx - omega t )        B along z                   |
  |                                       wave travels along x        |
  |                                                                   |
  |   SAME bracket  ==>  E and B are IN PHASE                         |
  |                                                                   |
  |   omega  =  2 pi nu                                               |
  |                                                                   |
  |             2 pi                                                  |
  |   k      =  --------                                              |
  |             lambda                                                |
  |                                                                   |
  |              omega                                                |
  |   c   =   ----------   =   nu x lambda                            |
  |                k                                                  |
  |                                                                   |
  |   E0                          E                                   |
  |  ----  =  c        and       ---  =  c   at every instant         |
  |   B0                          B                                   |
  |                                                                   |
  |   E0  =  c B0            B0  =  E0 / c                            |
  |                                                                   |
  |   DIRECTION OF PROPAGATION is along   E x B                       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `c = nu lambda` | Converting between frequency and wavelength — the most used line in the chapter |
| `B0 = E0 / c` | Given the electric amplitude, asked for the magnetic one (answer is around 10^-7 T) |
| `omega = 2 pi nu` | Building the wave equation from a given frequency |
| `k = 2 pi / lambda = omega / c` | Building the wave equation; also reading nu off a given equation |
| `direction = E x B` | "In which direction does the wave travel?" MCQs |

---

# 6. ENERGY DENSITY

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   INSTANTANEOUS                                                   |
  |                                                                   |
  |        u_E  =  (1/2) eps0 E^2                                     |
  |                                                                   |
  |                   B^2                                             |
  |        u_B  =  ---------                                          |
  |                  2 mu0                                            |
  |                                                                   |
  |        u    =  u_E + u_B                                          |
  |                                                                   |
  |                                                                   |
  |   KEY RESULT :        u_E  =  u_B                                 |
  |   (the energy is shared EQUALLY between the two fields)           |
  |                                                                   |
  |   so          u  =  eps0 E^2  =  B^2 / mu0                        |
  |                                                                   |
  |                                                                   |
  |   AVERAGED OVER ONE CYCLE  (since <sin^2> = 1/2)                  |
  |                                                                   |
  |        < u_E >  =  (1/4) eps0 E0^2                                |
  |                                                                   |
  |                       B0^2                                        |
  |        < u_B >  =  ---------                                      |
  |                      4 mu0                                        |
  |                                                                   |
  |                                          B0^2                     |
  |        < u >    =  (1/2) eps0 E0^2  =  --------                   |
  |                                         2 mu0                     |
  |                                                                   |
  |                 =  eps0 E_rms^2         E_rms = E0 / sqrt(2)      |
  |                                                                   |
  |   UNIT:  J / m^3                                                  |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# 7. INTENSITY, MOMENTUM, RADIATION PRESSURE

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   INTENSITY (W / m^2)                                             |
  |                                                                   |
  |        I  =  < u >  x  c   =   (1/2) eps0 E0^2 c                  |
  |                                                                   |
  |        < u >  =  I / c                                            |
  |                                                                   |
  |                            P                                      |
  |        Point source:  I = --------                                |
  |                           4 pi r^2                                |
  |                                                                   |
  |                          Energy                                   |
  |        Also:      I  =  ---------                                 |
  |                          Area x time                              |
  |                                                                   |
  +-------------------------------------------------------------------+

  +-------------------------------------------------------------------+
  |                                                                   |
  |   MOMENTUM delivered when energy U falls on a surface             |
  |                                                                   |
  |        p  =  U / c        totally ABSORBED                        |
  |        p  =  2U / c       totally REFLECTED                       |
  |                                                                   |
  |                                                                   |
  |   RADIATION PRESSURE   (N/m^2 = pascal)                           |
  |                                                                   |
  |        P  =  I / c        totally ABSORBING (black) surface       |
  |        P  =  2I / c       totally REFLECTING (mirror)             |
  |                                                                   |
  |                                                                   |
  |   FORCE on area A :     F  =  P x A  =  I A / c                   |
  |                                                                   |
  |   Also    F  =  p / t   (momentum delivered per second)           |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `<u> = (1/2) eps0 E0^2` | Given E0, asked for average energy density |
| `<u> = I/c` | Given intensity, asked for energy density — fastest route |
| `I = (1/2) eps0 E0^2 c` | Given intensity, asked for E0 (rearrange and square-root) |
| `P = I/c` | Radiation pressure on a **black / absorbing** surface |
| `P = 2I/c` | Radiation pressure on a **mirror / reflecting** surface |
| `p = U/c` | Momentum from absorbed energy |
| `F = P x A` | Force on a given area |

---

# 8. PHOTON ENERGY (needed for "which is more energetic")

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                        h c                                        |
  |     E  =  h nu   =  ---------        h = 6.63 x 10^-34 J s        |
  |                      lambda                                       |
  |                                                                   |
  |     In electron volts:                                            |
  |                                                                   |
  |                    1240                                           |
  |     E (in eV)  =  --------      with lambda in NANOMETRES         |
  |                    lambda                                         |
  |                                                                   |
  |     1 eV = 1.6 x 10^-19 J                                         |
  |                                                                   |
  |     HIGHER frequency  =  SHORTER wavelength  =  MORE energy       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# 9. CONSTANTS AND CONVERSIONS

```
  +--------------------------------+----------------------------------+
  |  c                             |  3 x 10^8 m/s (2.998 x 10^8)     |
  |  mu0                           |  4 pi x 10^-7 = 1.257 x 10^-6    |
  |                                |  T m A^-1                        |
  |  eps0                          |  8.854 x 10^-12 C^2 N^-1 m^-2    |
  |  1/(4 pi eps0)                 |  9 x 10^9 N m^2 C^-2             |
  |  h                             |  6.63 x 10^-34 J s               |
  |  Solar constant at the Earth   |  about 1.4 kW/m^2                |
  +--------------------------------+----------------------------------+

  +--------------------------------+----------------------------------+
  |  1 nm                          |  10^-9 m                         |
  |  1 angstrom (A)                |  10^-10 m                        |
  |  1 pm                          |  10^-12 m                        |
  |  1 micrometre (micron)         |  10^-6 m                         |
  |  1 MHz                         |  10^6 Hz                         |
  |  1 GHz                         |  10^9 Hz                         |
  |  1 pascal                      |  1 N/m^2                         |
  +--------------------------------+----------------------------------+
```

---

# 10. THE SPECTRUM — MEMORY SHEET

```
  ORDER (long lambda -> short lambda):

     RADIO  ->  MICROWAVE  ->  INFRARED  ->  VISIBLE
            ->  ULTRAVIOLET  ->  X-RAYS  ->  GAMMA

     "RADIO   MAN   IN   VIZAG   USES   X-RAY   GUN"
        R      M     I      V      U      X       G
```

## 10.1 Wavelength and frequency at a glance

| Band | Wavelength | Frequency |
|---|---|---|
| Radio | > 0.1 m | 3 x 10^4 – 3 x 10^9 Hz |
| Microwave | 1 mm – 0.1 m | 3 x 10^9 – 3 x 10^11 Hz |
| Infrared | 700 nm – 1 mm | 3 x 10^11 – 4 x 10^14 Hz |
| Visible | 400 – 700 nm | 4 x 10^14 – 7.5 x 10^14 Hz |
| Ultraviolet | 1 nm – 400 nm | 7.5 x 10^14 – 3 x 10^16 Hz |
| X-rays | 1 pm – 1 nm | 3 x 10^16 – 3 x 10^19 Hz |
| Gamma rays | < 1 pm | > 3 x 10^18 Hz |

## 10.2 Source and detector at a glance

| Band | PRODUCED BY | DETECTED BY |
|---|---|---|
| Radio | Oscillating LC circuit, antenna (accelerated charges in wires) | Receiving antenna + tuned circuit, rectifier detector |
| Microwave | Klystron, magnetron, Gunn diode | Point-contact diode, crystal detector |
| Infrared | Hot bodies; vibration of atoms and molecules | Thermopile, bolometer, thermocouple, IR photodiode |
| Visible | Atoms / molecules (electron transitions), incandescent bodies, Sun, LED | Eye, photocell, photographic film |
| Ultraviolet | Sun, mercury vapour lamps, arcs, very hot bodies | Photocell, photographic film, fluorescent screen |
| X-rays | High-energy electrons striking a metal target (Coolidge tube) | Photographic film, Geiger-Muller tube, ionisation chamber |
| Gamma | Radioactive nuclei, nuclear reactions | Geiger-Muller counter, scintillation counter |

## 10.3 ONE use each — the minimum you must know

```
  RADIO        ->  radio / TV broadcasting, mobile phones
  MICROWAVE    ->  RADAR, microwave ovens, satellite communication
  INFRARED     ->  remote controls, night vision, physiotherapy heating
  VISIBLE      ->  vision, photography, photosynthesis
  ULTRAVIOLET  ->  sterilising water, LASIK surgery, detecting fake notes
  X-RAYS       ->  bone radiography, crystal structure study
  GAMMA        ->  cancer radiotherapy, sterilising instruments
```

---

# 11. THE PROPERTIES LIST (fact, not formula — but examined more often)

```
  1.  TRANSVERSE
  2.  E perpendicular to B, both perpendicular to the direction of travel
  3.  E and B are IN PHASE
  4.  E0 / B0 = c
  5.  NO medium required — travel through vacuum
  6.  NOT deflected by electric or magnetic fields (they are uncharged)
  7.  Carry ENERGY and MOMENTUM -> exert RADIATION PRESSURE
  8.  Same speed c in vacuum for all frequencies
  9.  Produced by ACCELERATED charges
 10.  Show reflection, refraction, interference, diffraction, POLARISATION
```

---

# 12. QUICK ENVIRONMENT FACTS

```
  +-------------------------------------------------------------------+
  |  GREENHOUSE EFFECT — an INFRARED effect                           |
  |    Short-wave solar radiation enters; the warm Earth re-radiates  |
  |    LONG-WAVE INFRARED; CO2, water vapour, methane and ozone       |
  |    absorb it and send it back down -> the surface stays warm.     |
  |    Too much CO2 -> GLOBAL WARMING.                                |
  +-------------------------------------------------------------------+
  |  OZONE LAYER — an ULTRAVIOLET effect                              |
  |    O3 in the stratosphere (15-35 km) ABSORBS harmful UV.          |
  |    Without it: skin cancer, cataracts, crop damage.               |
  |    Destroyed by CFCs -> the "ozone hole" over Antarctica.         |
  +-------------------------------------------------------------------+
```

---

# THE 10 FORMULAE TO WRITE ON YOUR PALM

```
  +----+--------------------------------------------------------------+
  | 1  |   Id  =  eps0  d(PhiE)/dt              <-- THE definition    |
  +----+--------------------------------------------------------------+
  | 2  |   INT B.dl  =  mu0 ( Ic + Id )                               |
  +----+--------------------------------------------------------------+
  | 3  |   Id  =  Ic  (current is continuous)                         |
  +----+--------------------------------------------------------------+
  | 4  |   c   =  1 / sqrt(mu0 eps0)  =  3 x 10^8 m/s                 |
  +----+--------------------------------------------------------------+
  | 5  |   v   =  1 / sqrt(mu eps)  =  c / n ,   n = sqrt(mu_r eps_r) |
  +----+--------------------------------------------------------------+
  | 6  |   c   =  nu x lambda                                         |
  +----+--------------------------------------------------------------+
  | 7  |   E0 / B0  =  c                                              |
  +----+--------------------------------------------------------------+
  | 8  |   < u >  =  (1/2) eps0 E0^2  =  I / c                        |
  +----+--------------------------------------------------------------+
  | 9  |   P  =  I / c  (absorbing)   ,   P  =  2I / c  (reflecting)  |
  +----+--------------------------------------------------------------+
  | 10 |   RADIO MAN IN VIZAG USES X-RAY GUN                          |
  +----+--------------------------------------------------------------+
```

Number 10 is not a formula, but it will earn you more marks in this chapter
than numbers 1 to 9 put together. Learn it first.
