# Wave Optics — Formula Sheet

Every formula in the chapter, grouped by topic, with a **"When to use"** column.
Nothing here is optional. The palm list is at the very bottom.

Units used throughout: distances in **metres**, wavelength in **metres**,
angles in **radians** unless "degrees" is written.

```
  CONVERSIONS YOU WILL NEED IN EVERY SINGLE NUMERICAL
  ---------------------------------------------------
     1 Angstrom (A)      =  10^-10 m
     1 nanometre (nm)    =  10^-9  m       (1 nm = 10 A)
     1 micrometre (um)   =  10^-6  m
     1 millimetre (mm)   =  10^-3  m
     1 centimetre (cm)   =  10^-2  m

     5000 A  =  5 x 10^-7 m  =  500 nm
     6000 A  =  6 x 10^-7 m  =  600 nm

     c  =  3 x 10^8  m s^-1     (speed of light in vacuum)
```

---

# SECTION 1 — WAVEFRONTS AND HUYGENS' PRINCIPLE

```
  +=====================================================================+
  |  1.1   A WAVEFRONT is the locus of all points vibrating in the       |
  |        SAME PHASE.                                                   |
  |                                                                      |
  |  1.2   A RAY is the NORMAL (perpendicular) to the wavefront, drawn   |
  |        in the direction of propagation.                              |
  |                                                                      |
  |  1.3   HUYGENS' PRINCIPLE                                            |
  |        (a) every point on a wavefront is a source of SECONDARY       |
  |            WAVELETS spreading with the speed of light in that        |
  |            medium;                                                   |
  |        (b) the FORWARD ENVELOPE (common tangent) of these wavelets   |
  |            after time t is the NEW wavefront.                        |
  |                                                                      |
  |  1.4   RADIUS OF EACH SECONDARY WAVELET   r  =  v t                  |
  +=====================================================================+
```

| Type of wavefront | Source | Amplitude falls as | Intensity falls as | When to use |
|---|---|---|---|---|
| SPHERICAL | point source | 1 / r | 1 / r^2 | bulb, candle, a point object nearby |
| CYLINDRICAL | line source / narrow slit | 1 / sqrt(r) | 1 / r | a slit, a tube light, a filament |
| PLANE | source at infinity | constant | constant | sunlight, a laser, light from a collimator, a distant star |

---

# SECTION 2 — REFLECTION AND REFRACTION BY HUYGENS

```
  +=====================================================================+
  |  2.1   LAWS OF REFLECTION                                            |
  |                                                                      |
  |            i  =  r                                                   |
  |                                                                      |
  |        and the incident ray, reflected ray and normal are COPLANAR.  |
  |                                                                      |
  |  2.2   SNELL'S LAW  (first law of refraction)                        |
  |                                                                      |
  |             sin i        v1        c / mu1        mu2                |
  |            -------  =  ------  =  ----------  =  ------  =  mu21     |
  |             sin r        v2        c / mu2        mu1                |
  |                                                                      |
  |        General form:      mu1 sin i   =   mu2 sin r                  |
  |                                                                      |
  |  2.3   ABSOLUTE REFRACTIVE INDEX                                     |
  |                                                                      |
  |                    c            speed of light in vacuum             |
  |            mu  =  ---   =   ----------------------------------       |
  |                    v            speed of light in the medium         |
  +=====================================================================+
```

```
  +=====================================================================+
  |  2.4   WHAT CHANGES WHEN LIGHT ENTERS A MEDIUM OF INDEX mu           |
  |                                                                      |
  |        FREQUENCY     nu'   =  nu           <-- NEVER CHANGES         |
  |                                                                      |
  |                              c                                       |
  |        SPEED         v     = ----                                    |
  |                              mu                                      |
  |                                                                      |
  |                              lam                                     |
  |        WAVELENGTH    lam'  = -----                                   |
  |                              mu                                      |
  |                                                                      |
  |        and always    v  =  nu  x  lam                                |
  |                                                                      |
  |  2.5   OPTICAL PATH  =  mu  x  (geometrical path)                    |
  |        (the equivalent distance the light would cover in vacuum)     |
  +=====================================================================+
```

| Formula | When to use |
|---|---|
| `sin i / sin r = v1 / v2` | Huygens' derivation of Snell's law; also to find a speed ratio |
| `mu1 sin i = mu2 sin r` | any refraction numerical crossing a boundary |
| `mu = c / v` | "find the speed of light in the medium" |
| `lam' = lam / mu` | wavelength inside water/glass; fringe width in a liquid |
| `nu' = nu` | the 2-mark question "does the frequency change?" |
| optical path `= mu x d` | thin films, fringe shift by a sheet |

---

# SECTION 3 — DOPPLER EFFECT IN LIGHT

```
  +=====================================================================+
  |  3.1   For radial speed v much smaller than c :                      |
  |                                                                      |
  |           d(nu)             v                d(lam)          v       |
  |          -------   =   -  -----             --------  =  +  ---      |
  |            nu               c                  lam            c      |
  |                                                                      |
  |        (signs as written are for a RECEDING source)                  |
  |                                                                      |
  |  3.2   SPEED FROM AN OBSERVED SHIFT                                  |
  |                                                                      |
  |                     d(lam)                                           |
  |            v  =   ---------- x c                                     |
  |                      lam                                             |
  +=====================================================================+
```

| Observation | Name | Meaning | When to use |
|---|---|---|---|
| wavelength INCREASED | RED SHIFT | source RECEDING | galaxies moving away; expanding universe |
| wavelength DECREASED | BLUE SHIFT | source APPROACHING | a star moving towards us |
| `v = c d(lam)/lam` | — | radial speed | any "find the speed of the galaxy" numerical |

---

# SECTION 4 — SUPERPOSITION AND INTENSITY

```
  +=====================================================================+
  |  4.1   PRINCIPLE OF SUPERPOSITION      y  =  y1  +  y2              |
  |                                                                      |
  |  4.2   RESULTANT AMPLITUDE                                           |
  |                                                                      |
  |            R^2  =  a1^2 + a2^2 + 2 a1 a2 cos(phi)                    |
  |                                                                      |
  |  4.3   RESULTANT INTENSITY                                           |
  |                                                                      |
  |            I  =  I1 + I2 + 2 sqrt(I1 I2) cos(phi)                    |
  |                                                                      |
  |  4.4   FOR TWO EQUAL SOURCES (I1 = I2 = I0)                          |
  |                                                                      |
  |            I  =  4 I0 cos^2 ( phi / 2 )                              |
  |                                                                      |
  |            Imax = 4 I0        Imin = 0       Iaverage = 2 I0         |
  |                                                                      |
  |  4.5   MAXIMUM AND MINIMUM INTENSITY, GENERAL                        |
  |                                                                      |
  |            Imax  =  ( sqrt(I1)  +  sqrt(I2) )^2  =  (a1 + a2)^2      |
  |            Imin  =  ( sqrt(I1)  -  sqrt(I2) )^2  =  (a1 - a2)^2      |
  |                                                                      |
  |  4.6   THE RATIO EVERY MCQ USES                                      |
  |                                                                      |
  |             Imax       ( a1 + a2 )^2                                 |
  |            ------  =  --------------                                 |
  |             Imin       ( a1 - a2 )^2                                 |
  |                                                                      |
  |  4.7   INTENSITY AND AMPLITUDE                                       |
  |                                                                      |
  |            I is proportional to a^2                                  |
  |            I is proportional to (slit width) — for slits of          |
  |              unequal width, I1/I2 = w1/w2                            |
  +=====================================================================+
```

| Formula | When to use |
|---|---|
| `I = 4 I0 cos^2(phi/2)` | intensity at a general point of a Young's pattern |
| `Imax/Imin = (a1+a2)^2/(a1-a2)^2` | "intensities are in the ratio ...; find Imax:Imin" |
| `a = sqrt(I)` | convert an intensity ratio into an amplitude ratio first |
| `Iavg = I1 + I2` | proving energy is conserved in interference |

---

# SECTION 5 — PATH DIFFERENCE AND PHASE DIFFERENCE

```
  +=====================================================================+
  |  5.1                        2 pi                                     |
  |        phase difference =  ------  x  path difference                |
  |                             lam                                      |
  |                                                                      |
  |  5.2                        lam                                      |
  |        path difference  =  ------  x  phase difference               |
  |                            2 pi                                      |
  |                                                                      |
  |  5.3   CONSTRUCTIVE (BRIGHT)                                         |
  |            path difference  =  n lam            n = 0, 1, 2, ...     |
  |            phase difference =  2 n pi                                |
  |                                                                      |
  |  5.4   DESTRUCTIVE (DARK)                                            |
  |                                (2n - 1) lam                          |
  |            path difference  =  -------------    n = 1, 2, 3, ...     |
  |                                      2                               |
  |            phase difference =  (2n - 1) pi                           |
  +=====================================================================+
```

| Path difference | Phase difference | Result |
|---|---|---|
| 0 | 0 | bright (central) |
| lam / 2 | pi (180 deg) | dark |
| lam | 2 pi (360 deg) | bright |
| 3 lam / 2 | 3 pi | dark |
| 2 lam | 4 pi | bright |
| lam / 4 | pi / 2 (90 deg) | half-way, I = 2 I0 |

---

# SECTION 6 — YOUNG'S DOUBLE SLIT EXPERIMENT (the core of the chapter)

```
  +=====================================================================+
  |  6.1   PATH DIFFERENCE at a point y from the centre                  |
  |                                                                      |
  |                                        y d                           |
  |            path diff  =  d sin theta = -----     (D >> d, D >> y)    |
  |                                          D                           |
  |                                                                      |
  |  6.2   POSITION OF THE nth BRIGHT FRINGE                             |
  |                                                                      |
  |                    n D lam                                           |
  |            y(n) = ----------   =  n beta       n = 0, 1, 2, ...      |
  |                       d                                              |
  |                                                                      |
  |  6.3   POSITION OF THE nth DARK FRINGE                               |
  |                                                                      |
  |                    (2n - 1) D lam        (2n - 1)                    |
  |            y(n) = ----------------  =  ----------- beta   n=1,2,3... |
  |                          2 d                 2                       |
  |                                                                      |
  |  6.4   FRINGE WIDTH  (the single most important formula)             |
  |                                                                      |
  |            +=====================================+                   |
  |            |                D lam                 |                   |
  |            |     beta   =  -------                 |                   |
  |            |                  d                    |                   |
  |            +=====================================+                   |
  |                                                                      |
  |        Bright-to-bright spacing = dark-to-dark spacing = beta.       |
  |        ALL fringes are of EQUAL WIDTH and EQUAL INTENSITY.           |
  |                                                                      |
  |  6.5   ANGULAR FRINGE WIDTH                                          |
  |                                                                      |
  |                     beta       lam                                   |
  |            theta = ------  =  -----      (does NOT depend on D)      |
  |                       D          d                                   |
  |                                                                      |
  |  6.6   SEPARATION BETWEEN A BRIGHT AND THE NEXT DARK FRINGE          |
  |                                                                      |
  |            =  beta / 2                                               |
  |                                                                      |
  |  6.7   FRINGE WIDTH IN A LIQUID OF INDEX mu                          |
  |                                                                      |
  |                     beta                                             |
  |            beta' = ------            (fringes get NARROWER)          |
  |                      mu                                              |
  |                                                                      |
  |  6.8   NUMBER OF FRINGES IN A LENGTH L OF THE SCREEN                 |
  |                                                                      |
  |                     L                                                |
  |            N   =  ------                                             |
  |                    beta                                              |
  |                                                                      |
  |  6.9   SHIFT WHEN A SHEET (t, mu) COVERS ONE SLIT                    |
  |                                                                      |
  |                     D ( mu - 1 ) t                                   |
  |            shift = ----------------                                  |
  |                            d                                         |
  |                                                                      |
  |                                    ( mu - 1 ) t                      |
  |            number of fringes  =  ----------------                    |
  |                                        lam                           |
  |                                                                      |
  |            (the fringe WIDTH is unchanged; the pattern slides        |
  |             towards the covered slit)                                |
  |                                                                      |
  |  6.10  COINCIDENCE OF TWO WAVELENGTHS                                |
  |                                                                      |
  |            n1 lam1  =  n2 lam2      (find the smallest integers)     |
  +=====================================================================+
```

## Effect of changing each quantity

| Change | Effect on beta = D lam / d | Remember it as |
|---|---|---|
| lam increased (red) | beta INCREASES | red gives the widest fringes |
| lam decreased (violet) | beta DECREASES | violet gives the narrowest |
| D increased | beta INCREASES | D is upstairs |
| d increased | beta DECREASES | d is downstairs |
| d made very large | fringes merge, uniform light | beta too small to see |
| dipped in liquid mu | beta becomes beta / mu | lam shrinks by mu |
| one slit covered | fringes vanish; single-slit diffraction appears | need TWO slits |
| source slit S widened | contrast falls, beta UNCHANGED | visibility problem, not a width problem |
| source slit S moved nearer | beta UNCHANGED, only brighter | D in the formula is slits-to-screen |
| white light used | white centre, few coloured fringes, then white blur | violet inside, red outside |

## Conditions for sustained interference (state all of these)

```
  1.  The two sources must be COHERENT (same frequency, constant
      phase difference).
  2.  They must come from a SINGLE original source.
  3.  The light should be MONOCHROMATIC.
  4.  The two waves must travel in nearly the SAME DIRECTION and be in
      the same state of POLARISATION.
  5.  The AMPLITUDES should be equal or nearly equal (for good contrast).
  6.  The SOURCE SLIT must be NARROW.
  7.  d should be SMALL and D should be LARGE.
```

---

# SECTION 7 — DIFFRACTION AT A SINGLE SLIT

```
  +=====================================================================+
  |  7.1   MINIMA (dark bands)                                           |
  |                                                                      |
  |            a sin theta   =   n lam         n = 1, 2, 3, ...          |
  |                                            (n = 0 is EXCLUDED)       |
  |                                                                      |
  |            small angles:      y(n)  =  n D lam / a                   |
  |                                                                      |
  |  7.2   SECONDARY MAXIMA (approximate)                                |
  |                                                                      |
  |                                            lam                       |
  |            a sin theta   =   ( 2n + 1 ) -------    n = 1, 2, 3, ...  |
  |                                             2                        |
  |                                                                      |
  |            i.e. at  3lam/2 , 5lam/2 , 7lam/2 , ...                   |
  |                                                                      |
  |  7.3   CENTRAL MAXIMUM at theta = 0  (path difference zero)          |
  |                                                                      |
  |  7.4   HALF-ANGULAR WIDTH of the central maximum                     |
  |                                                                      |
  |                        lam                                           |
  |            theta  =  -------                                         |
  |                         a                                            |
  |                                                                      |
  |  7.5   FULL ANGULAR WIDTH of the central maximum                     |
  |                                                                      |
  |                          2 lam                                       |
  |            2 theta  =  ---------                                     |
  |                            a                                         |
  |                                                                      |
  |  7.6   LINEAR WIDTH of the central maximum on a screen at D          |
  |                                                                      |
  |            +====================================+                    |
  |            |                    2 D lam          |                    |
  |            |     width   =    -----------        |                    |
  |            |                        a            |                    |
  |            +====================================+                    |
  |                                                                      |
  |  7.7   WIDTH OF EACH OTHER (secondary) BAND  =  D lam / a            |
  |        So the CENTRAL maximum is exactly TWICE as wide as any        |
  |        other band.                                                   |
  |                                                                      |
  |  7.8   RELATIVE INTENSITIES                                          |
  |            central : 1st sec : 2nd sec : 3rd sec                     |
  |               1    :  1/22   :  1/61   :  1/121                      |
  |            (100 % : 4.5 %   : 1.6 %   : 0.8 %)                       |
  |                                                                      |
  |  7.9   FRESNEL DISTANCE                                              |
  |                     a^2                                              |
  |            z(F) = -------      (ray optics is valid for z << z(F))   |
  |                     lam                                              |
  +=====================================================================+
```

| Formula | When to use |
|---|---|
| `a sin theta = n lam` | position of the nth DARK band; "first minimum at 30 deg, find a" |
| `2 D lam / a` | "width of the central maximum" — the most asked diffraction numerical |
| `2 lam / a` | when the question says **angular** width |
| `a sin theta = (2n+1) lam/2` | position of a secondary MAXIMUM |
| `z(F) = a^2 / lam` | "up to what distance is ray optics valid?" |

```
  DIRECTION OF THE EFFECT — LEARN THIS SENTENCE
  ---------------------------------------------
     a is DOWNSTAIRS, so:

        NARROWER slit  ->  WIDER  central maximum  (more spreading)
        WIDER    slit  ->  NARROWER central maximum (towards ray optics)

     Also:  longer wavelength (red) -> wider pattern
            shorter wavelength (violet) -> narrower pattern
```

---

# SECTION 8 — INTERFERENCE versus DIFFRACTION

```
  +----------------------+---------------------------+---------------------------+
  |  POINT               |  INTERFERENCE             |  DIFFRACTION              |
  +----------------------+---------------------------+---------------------------+
  |  Sources             |  TWO coherent wavefronts  |  parts of the SAME        |
  |                      |                           |  wavefront                |
  |  Depends on          |  d (slit SEPARATION)      |  a (slit WIDTH)           |
  |  Fringe width        |  all EQUAL, beta = Dlam/d |  central band is TWICE    |
  |                      |                           |  the others               |
  |  Intensity of maxima |  all EQUAL                |  falls fast: 100, 4.5,    |
  |                      |                           |  1.6, 0.8 %               |
  |  Minima              |  perfectly DARK           |  not perfectly dark       |
  |  Number of fringes   |  many                     |  few                      |
  |  MAXIMA condition    |  d sin th = n lam         |  a sin th = (2n+1) lam/2  |
  |  MINIMA condition    |  d sin th = (2n-1) lam/2  |  a sin th = n lam         |
  +----------------------+---------------------------+---------------------------+

   THE SWAP TO REMEMBER:
       n lam   in INTERFERENCE  ->  BRIGHT
       n lam   in DIFFRACTION   ->  DARK
```

---

# SECTION 9 — RESOLVING POWER

```
  +=====================================================================+
  |  9.1   RAYLEIGH CRITERION                                            |
  |        Two sources are JUST RESOLVED when the CENTRAL MAXIMUM of     |
  |        one falls on the FIRST MINIMUM of the other.                  |
  |                                                                      |
  |  9.2   TELESCOPE (objective diameter D)                              |
  |                                                                      |
  |                        1.22 lam                                      |
  |        d(theta)  =  --------------           (limit of resolution)   |
  |                            D                                         |
  |                                                                      |
  |                              1            D                          |
  |        RESOLVING POWER = ---------- = -----------                    |
  |                           d(theta)     1.22 lam                      |
  |                                                                      |
  |  9.3   MICROSCOPE (numerical aperture  mu sin beta)                  |
  |                                                                      |
  |                       1.22 lam                                       |
  |        d(min)  =  ------------------                                 |
  |                    2 mu sin(beta)                                    |
  |                                                                      |
  |                              1          2 mu sin(beta)               |
  |        RESOLVING POWER  =  -------  =  -----------------             |
  |                             d(min)         1.22 lam                  |
  +=====================================================================+
```

| To improve | Do this | Why |
|---|---|---|
| telescope resolving power | use a BIGGER objective D, or shorter lam | D is upstairs in RP = D / 1.22 lam |
| microscope resolving power | use shorter lam (blue/UV/electrons) or oil immersion (bigger mu) | mu sin beta is upstairs |

---

# SECTION 10 — POLARISATION

```
  +=====================================================================+
  |  10.1  POLARISATION = restricting the vibrations of light to ONE     |
  |        plane.  Only TRANSVERSE waves can be polarised, so            |
  |        polarisation PROVES light is transverse.                      |
  |                                                                      |
  |  10.2  BREWSTER'S LAW                                                |
  |                                                                      |
  |            +---------------------------+                             |
  |            |    tan ( i(p) )  =  mu    |                             |
  |            +---------------------------+                             |
  |                                                                      |
  |        i(p) = polarising angle (Brewster angle) at which the         |
  |        REFLECTED light is COMPLETELY plane polarised.                |
  |                                                                      |
  |  10.3  AT THE POLARISING ANGLE                                       |
  |                                                                      |
  |            i(p)  +  r   =   90 degrees                               |
  |                                                                      |
  |        and the REFLECTED and REFRACTED rays are PERPENDICULAR.       |
  |                                                                      |
  |  10.4  MALUS' LAW                                                    |
  |                                                                      |
  |            +---------------------------------+                       |
  |            |     I   =   I0 cos^2 ( theta )   |                       |
  |            +---------------------------------+                       |
  |                                                                      |
  |        theta = angle between the pass axes of polariser and          |
  |                analyser.                                             |
  |                                                                      |
  |  10.5  UNPOLARISED LIGHT ON THE FIRST POLAROID                       |
  |                                                                      |
  |                     I(un)                                            |
  |            I   =  ---------      (always exactly HALF)               |
  |                       2                                              |
  |                                                                      |
  |  10.6  TWO POLAROIDS, UNPOLARISED LIGHT I0 INCIDENT                  |
  |                                                                      |
  |                     I0                                               |
  |            I   =  ------  cos^2 ( theta )                            |
  |                     2                                                |
  |                                                                      |
  |  10.7  RAYLEIGH SCATTERING                                           |
  |                                                                      |
  |                                          1                           |
  |        scattered intensity is prop to -------                        |
  |                                        lam^4                         |
  |                                                                      |
  |        -> blue sky, red sunrise/sunset, white clouds (big droplets)  |
  |                                                                      |
  |  10.8  SCATTERED LIGHT AT 90 DEGREES to the incident beam is         |
  |        COMPLETELY PLANE POLARISED.                                   |
  +=====================================================================+
```

## The Malus' law quick table

| theta | cos theta | cos^2 theta | I (from plane polarised I0) | I (from unpolarised I0) |
|---|---|---|---|---|
| 0 deg | 1 | 1 | I0 | I0 / 2 |
| 30 deg | sqrt(3)/2 | 3/4 | 3 I0 / 4 | 3 I0 / 8 |
| 45 deg | 1/sqrt(2) | 1/2 | I0 / 2 | I0 / 4 |
| 60 deg | 1/2 | 1/4 | I0 / 4 | I0 / 8 |
| 90 deg | 0 | 0 | 0 | 0 |

## Standard Brewster angles

| Medium | mu | i(p) = tan^-1(mu) |
|---|---|---|
| water | 1.33 | 53.1 deg |
| ordinary glass | 1.5 | 56.3 deg |
| dense flint glass | 1.732 | 60.0 deg |
| diamond | 2.42 | 67.5 deg |

---

# SECTION 11 — QUICK NUMERICAL RECIPES

| The question says ... | Use ... |
|---|---|
| "find the fringe width" | `beta = D lam / d` |
| "distance of the nth bright fringe" | `y = n beta` |
| "distance of the nth dark fringe" | `y = (2n-1) beta / 2` |
| "distance between the 3rd and 8th bright fringe" | `(8 - 3) beta = 5 beta` — count GAPS |
| "apparatus immersed in water" | `beta' = beta / mu` |
| "find the wavelength from a fringe measurement" | `lam = beta d / D` |
| "two wavelengths coincide" | `n1 lam1 = n2 lam2` |
| "a sheet is placed over one slit" | `shift = D(mu-1)t / d` |
| "width of the central maximum" | `2 D lam / a` |
| "angular width of the central maximum" | `2 lam / a` |
| "first minimum is at angle theta" | `a sin theta = lam` |
| "intensity ratio Imax : Imin" | `(a1+a2)^2 : (a1-a2)^2` with `a = sqrt(I)` |
| "unpolarised light through two polaroids" | `I = (I0/2) cos^2 theta` |
| "polarising angle" | `tan i(p) = mu` |
| "limit of resolution of a telescope" | `1.22 lam / D` |
| "speed of a receding galaxy" | `v = c d(lam)/lam` |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +=====================================================================+
  |                                                                      |
  |   1.                D lam                                            |
  |         beta   =   -------            YOUNG'S FRINGE WIDTH           |
  |                       d                                              |
  |                                                                      |
  |   2.    BRIGHT :  path diff  =  n lam                                |
  |         DARK   :  path diff  =  (2n - 1) lam / 2                     |
  |                                                                      |
  |   3.                             y d                                 |
  |         path difference  =  d sin th  =  -----                       |
  |                                            D                         |
  |                                                                      |
  |   4.                lam                                              |
  |         beta'  =  -------  x  (D/d)     i.e.  beta' = beta / mu      |
  |                     mu                  IN A LIQUID                  |
  |                                                                      |
  |   5.    a sin theta  =  n lam           SINGLE SLIT MINIMA           |
  |                                                                      |
  |   6.                                2 D lam                          |
  |         central maximum width  =  -----------                        |
  |                                        a                             |
  |                                                                      |
  |   7.    tan ( i(p) )  =  mu             BREWSTER'S LAW               |
  |         i(p) + r = 90 degrees                                        |
  |                                                                      |
  |   8.    I  =  I0 cos^2 ( theta )        MALUS' LAW                   |
  |         (halve first if the light is UNPOLARISED)                    |
  |                                                                      |
  |   9.                c                    lam                         |
  |         v  =  ------  ,     lam'  =  -------  ,   nu unchanged       |
  |                mu                        mu                          |
  |                                                                      |
  |  10.     Imax        ( a1 + a2 )^2                                   |
  |         ------  =  ---------------- ,     a  =  sqrt(I)              |
  |          Imin        ( a1 - a2 )^2                                   |
  |                                                                      |
  |  11.                      2 pi                                       |
  |         phase diff  =   ------- x path diff                          |
  |                           lam                                        |
  |                                                                      |
  |  12.                     1.22 lam                                    |
  |         d(theta)  =  --------------      TELESCOPE RESOLUTION        |
  |                             D                                        |
  |                                                                      |
  +=====================================================================+
```

```
  AND THE THREE SENTENCES THAT ARE WORTH AS MUCH AS ANY FORMULA
  ------------------------------------------------------------
   *  "A wavefront is the locus of points vibrating in the same phase;
       a ray is the normal to the wavefront."

   *  "Every point on a wavefront is a source of secondary wavelets and
       the forward envelope of these wavelets gives the new wavefront."

   *  "Light can be polarised, and only transverse waves can be
       polarised, therefore light is a transverse wave."
```
