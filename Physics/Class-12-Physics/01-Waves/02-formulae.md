# Waves — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
Everything in this chapter is built from `v = f lambda`.

---

# 1. THE BASIC WAVE RELATIONS

```
  +--------------------------------------------------------------+
  |                                                              |
  |            v   =   f   x   lambda          *** THE ONE ***   |
  |                                                              |
  |                    1                     1                   |
  |            f  =  -----          T  =  -------                |
  |                    T                     f                   |
  |                                                              |
  |            omega  =  2 pi f  =  2 pi / T        (rad/s)      |
  |                                                              |
  |                      2 pi                                    |
  |            k     =  --------                    (rad/m)      |
  |                     lambda                                   |
  |                                                              |
  |                    omega                                     |
  |            v  =  ---------                                   |
  |                      k                                       |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `v = f lambda` | ALWAYS. Any question with two of {v, f, lambda} |
| `f = 1/T` | converting between period and frequency |
| `omega = 2 pi f` | whenever a wave equation is given |
| `k = 2 pi / lambda` | reading lambda out of a wave equation |
| `v = omega / k` | fastest way to get speed from a given equation |

```
  MEMORY AID FOR NEW MEDIUM:

     f  stays the SAME       (fixed by the SOURCE)
     v  CHANGES             (fixed by the MEDIUM)
     lambda CHANGES         (because v = f lambda)
```

---

# 2. THE PROGRESSIVE WAVE EQUATION

```
  +--------------------------------------------------------------+
  |                                                              |
  |   y  =  A sin ( omega t  -  k x )     travels along  +x      |
  |                                                              |
  |   y  =  A sin ( omega t  +  k x )     travels along  -x      |
  |                                                              |
  |   (MINUS sign  ->  moving in the PLUS direction)             |
  |                                                              |
  +--------------------------------------------------------------+

  EQUIVALENT FORMS (all the same wave):

                    +-   t          x     -+
     y  =  A sin 2pi|  ----   -  --------  |
                    +-   T        lambda   -+


                  2 pi
     y  =  A sin ------- ( v t  -  x )
                lambda
```

```
  PHASE                    =  ( omega t  -  k x )

  PARTICLE VELOCITY        =  dy/dt  =  A omega cos(omega t - kx)

  MAX PARTICLE VELOCITY    =  A omega  =  2 pi f A

  MAX PARTICLE ACCELERATION=  A omega^2

  PARTICLE VELOCITY        =  - (wave speed) x (slope of the y-x curve)
```

| Formula | When to use |
|---|---|
| `y = A sin(omega t - kx)` | write / read a travelling wave |
| `v(max) = A omega` | "maximum velocity of a particle" questions |
| `a(max) = A omega^2` | "maximum acceleration of a particle" |
| sign of `kx` term | to state the direction of travel — 2 free marks |

---

# 3. PHASE DIFFERENCE AND PATH DIFFERENCE

```
  +--------------------------------------------------------------+
  |                                                              |
  |                          2 pi                                |
  |    PHASE DIFF   phi  =  --------  x  PATH DIFF               |
  |                         lambda                               |
  |                                                              |
  |                        lambda                                |
  |    PATH DIFF    =     --------  x  PHASE DIFF                |
  |                        2 pi                                  |
  |                                                              |
  |                          2 pi                                |
  |    PHASE DIFF   phi  =  --------  x  TIME DIFF               |
  |                           T                                  |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  QUICK CONVERSIONS

     path  lambda        <->   phase  2 pi   (360 deg)   in phase
     path  lambda / 2    <->   phase  pi     (180 deg)   opposite
     path  lambda / 4    <->   phase  pi / 2 ( 90 deg)
     path  lambda / 6    <->   phase  pi / 3 ( 60 deg)
```

---

# 4. SPEED OF WAVES IN DIFFERENT MEDIA

```
  +--------------------------------------------------------------+
  |                                                              |
  |                     +-                       -+              |
  |                     |   ELASTICITY of medium  |              |
  |       v   =   sqrt  |  ---------------------- |              |
  |                     |    DENSITY of medium    |              |
  |                     +-                       -+              |
  |                                                              |
  +--------------------------------------------------------------+
```

| Situation | Formula | Symbols |
|---|---|---|
| Transverse wave on a stretched string | `v = sqrt( T / mu )` | T = tension (N), mu = mass/length (kg/m) |
| Same, wire of radius r, density rho | `v = sqrt( T / (pi r^2 rho) )` | mu = pi r^2 rho |
| Longitudinal wave in a solid ROD | `v = sqrt( Y / rho )` | Y = Young's modulus |
| Longitudinal wave in a LIQUID or GAS | `v = sqrt( B / rho )` | B = bulk modulus |
| Sound in a gas (Newton, WRONG) | `v = sqrt( P / rho )` | isothermal, B = P |
| Sound in a gas (Laplace, CORRECT) | `v = sqrt( gamma P / rho )` | adiabatic, B = gamma P |
| Sound in a gas from temperature | `v = sqrt( gamma R T / M )` | T in KELVIN, M = molar mass |

```
  LINEAR DENSITY

              mass       M
       mu  =  ------  =  ---   =  pi r^2 rho        (kg per METRE)
             length      L
```

---

# 5. NEWTON'S FORMULA AND LAPLACE'S CORRECTION  *** learn the numbers ***

```
  +---------------------------------------------------------------+
  |                                                               |
  |  NEWTON  (assumed ISOTHERMAL, B = P)                          |
  |                                                               |
  |          v  =  sqrt( P / rho )                                |
  |                                                               |
  |          =  sqrt( 1.013 x 10^5 / 1.293 )   =   280 m/s        |
  |                                                               |
  |          Experimental value is 332 m/s  ->  16% TOO LOW       |
  |                                                               |
  +---------------------------------------------------------------+
  |                                                               |
  |  LAPLACE  (correctly ADIABATIC, B = gamma P)                  |
  |                                                               |
  |          v  =  sqrt( gamma P / rho )      gamma = 1.41 (air)  |
  |                                                               |
  |          =  sqrt( 1.41 x 1.013 x 10^5 / 1.293 ) = 332 m/s     |
  |                                                               |
  |          MATCHES EXPERIMENT.                                  |
  |                                                               |
  |  REASON: air is a POOR CONDUCTOR of heat and the compressions |
  |  and rarefactions are TOO RAPID for heat to be exchanged.     |
  |                                                               |
  |  v(Laplace) = sqrt(gamma) x v(Newton) = 1.187 x 280 = 332     |
  |                                                               |
  +---------------------------------------------------------------+
```

## Standard data to memorise

```
  +----------------------------------+------------------------+
  |  Atmospheric pressure at NTP     |  1.013 x 10^5  N/m^2   |
  |  Density of air at NTP           |  1.293 kg/m^3          |
  |  gamma for air (diatomic)        |  1.41  (about 1.4)     |
  |  Speed of sound in air at 0 C    |  332 m/s               |
  |  Speed of sound in air at 20 C   |  343 m/s               |
  |  Speed of sound in water         |  1490 m/s              |
  |  Speed of sound in steel         |  5100 m/s              |
  |  Speed of light / all EM waves   |  3 x 10^8 m/s          |
  |  Audible range for humans        |  20 Hz  to  20000 Hz   |
  +----------------------------------+------------------------+
```

---

# 6. FACTORS AFFECTING THE SPEED OF SOUND IN A GAS

```
  +-----------------+------------------------+------------------------+
  |  FACTOR         |  RELATION              |  EFFECT                |
  +-----------------+------------------------+------------------------+
  |  DENSITY        |  v ~ 1 / sqrt(rho)     |  denser gas -> SLOWER  |
  |                 |  v1/v2 = sqrt(rho2/rho1)|                       |
  +-----------------+------------------------+------------------------+
  |  PRESSURE       |  P / rho = constant    |  *** NO EFFECT ***     |
  |                 |  at fixed temperature  |  (P and rho change     |
  |                 |                        |   together)            |
  +-----------------+------------------------+------------------------+
  |  TEMPERATURE    |  v ~ sqrt( T )         |  hotter -> FASTER      |
  |                 |  T in KELVIN           |                        |
  |                 |  v1/v2 = sqrt(T1/T2)   |                        |
  |                 |  v(t) = v(0) + 0.61 t  |  +0.61 m/s per deg C   |
  +-----------------+------------------------+------------------------+
  |  HUMIDITY       |  moist air is LESS     |  humid -> FASTER       |
  |                 |  dense (M(H2O)=18 <    |                        |
  |                 |  M(air)=29)            |                        |
  +-----------------+------------------------+------------------------+
  |  WIND           |  v(eff) = v + w cos th |  adds vectorially      |
  +-----------------+------------------------+------------------------+
  |  AMPLITUDE,     |                        |  *** NO EFFECT ***     |
  |  FREQUENCY,     |                        |                        |
  |  WAVELENGTH,    |                        |                        |
  |  PHASE, LOUDNESS|                        |                        |
  +-----------------+------------------------+------------------------+
```

---

# 7. SUPERPOSITION AND INTERFERENCE

```
  +--------------------------------------------------------------+
  |                                                              |
  |  SUPERPOSITION:      y  =  y1  +  y2  +  y3  + ...           |
  |                                                              |
  |  RESULTANT AMPLITUDE of two waves with phase difference phi: |
  |                                                              |
  |     R  =  sqrt( A1^2 + A2^2 + 2 A1 A2 cos(phi) )             |
  |                                                              |
  |  RESULTANT INTENSITY:                                        |
  |                                                              |
  |     I  =  I1 + I2 + 2 sqrt(I1 I2) cos(phi)                   |
  |                                                              |
  |  and always      I  ~  A^2                                   |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  +----------------------+--------------------------+------------------+
  |                      |  CONSTRUCTIVE (LOUD)     | DESTRUCTIVE      |
  |                      |                          |  (QUIET)         |
  +----------------------+--------------------------+------------------+
  |  Phase difference    |  2 n pi                  |  (2n - 1) pi     |
  |                      |  0, 2pi, 4pi, ...        |  pi, 3pi, 5pi... |
  +----------------------+--------------------------+------------------+
  |  Path difference     |  n lambda                |  (2n-1) lambda/2 |
  |                      |  0, lambda, 2lambda...   |  l/2, 3l/2, 5l/2 |
  +----------------------+--------------------------+------------------+
  |  Amplitude           |  A1 + A2                 |  | A1 - A2 |     |
  +----------------------+--------------------------+------------------+
  |  Intensity           |  (sqrt I1 + sqrt I2)^2   | (sqrtI1-sqrtI2)^2|
  +----------------------+--------------------------+------------------+
  |  If A1 = A2 = A      |  R = 2A ,  I = 4 I0      |  R = 0 , I = 0   |
  +----------------------+--------------------------+------------------+
```

```
  USEFUL RATIO RESULT

     I(max)      ( A1 + A2 )^2      ( sqrt(I1) + sqrt(I2) )^2
    --------  =  --------------  =  --------------------------
     I(min)      ( A1 - A2 )^2      ( sqrt(I1) - sqrt(I2) )^2
```

---

# 8. REFLECTION OF WAVES

```
  +--------------+---------------+---------------+-----------------+
  |  BOUNDARY    | DISPLACEMENT  | PHASE CHANGE  |  FORMS          |
  +--------------+---------------+---------------+-----------------+
  |  RIGID       |  INVERTED     |  pi (180 deg) |  a NODE         |
  |  (denser)    |  crest ->     |  = path       |                 |
  |              |  trough       |    lambda/2   |                 |
  +--------------+---------------+---------------+-----------------+
  |  FREE        |  NOT inverted |  ZERO         |  an ANTINODE    |
  |  (rarer)     |  crest ->     |               |                 |
  |              |  crest        |               |                 |
  +--------------+---------------+---------------+-----------------+

  For SOUND at a rigid wall: a COMPRESSION returns as a COMPRESSION
  For SOUND at an open end : a COMPRESSION returns as a RAREFACTION

  Incident   y = A sin(omega t - kx)
  Rigid      y = -A sin(omega t + kx)     [inverted]
  Free       y =  A sin(omega t + kx)     [not inverted]

  ECHO: minimum distance to hear a separate echo
        d = v x 0.1 / 2  =  332 x 0.05  =  16.6 m  (about 17 m)
```

---

# 9. STATIONARY (STANDING) WAVES

```
  +--------------------------------------------------------------+
  |                                                              |
  |   y1 = A sin(omega t - kx)      y2 = A sin(omega t + kx)     |
  |                                                              |
  |   y  =  y1 + y2  =   2 A cos( k x )  sin( omega t )          |
  |                                                              |
  |   (or  y = 2A sin(kx) cos(omega t)  depending on the phase   |
  |    of the ends — both are accepted forms)                    |
  |                                                              |
  |   AMPLITUDE at position x  =  2 A cos( k x )                 |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  +---------------------------------------------+----------------+
  |  Positions of NODES (amplitude zero)        | odd x lambda/4 |
  |  Positions of ANTINODES (amplitude 2A)      | n x lambda/2   |
  +---------------------------------------------+----------------+
  |  Distance between consecutive NODES         |   lambda / 2   |
  |  Distance between consecutive ANTINODES     |   lambda / 2   |
  |  Distance between a NODE and next ANTINODE  |   lambda / 4   |
  +---------------------------------------------+----------------+
```

| Formula | When to use |
|---|---|
| `y = 2A cos(kx) sin(omega t)` | asked to "derive" or to identify a standing wave |
| node separation = `lambda/2` | given the node spacing, find lambda — very common 2-marker |
| node-to-antinode = `lambda/4` | same, but read the question carefully |
| amplitude `= 2A cos(kx)` | "find the amplitude at x = ..." |

---

# 10. STRETCHED STRING FIXED AT BOTH ENDS

```
  +--------------------------------------------------------------+
  |                                                              |
  |                       2 L                                    |
  |        lambda(n)  =  ------           n = 1, 2, 3, ...       |
  |                        n                                     |
  |                                                              |
  |                 n         +-      -+                         |
  |        f(n)  = ------  x  |  sqrt  |  T / mu                 |
  |                 2 L       +-      -+                         |
  |                                                              |
  |                                                              |
  |        FUNDAMENTAL (n = 1)                                   |
  |                                                              |
  |                 1         +-      -+                         |
  |        f(1)  = ------  x  |  sqrt  |  T / mu                 |
  |                 2 L       +-      -+                         |
  |                                                              |
  |        ALL HARMONICS PRESENT:  f1 : f2 : f3 = 1 : 2 : 3      |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  +--------------------------+------------------------------------+
  |  n-th harmonic           |  =  (n-1)-th overtone              |
  |  number of LOOPS         |  =  n                              |
  |  number of NODES         |  =  n + 1                          |
  |  number of ANTINODES     |  =  n                              |
  +--------------------------+------------------------------------+

  Tension from a hanging mass:      T  =  M g
```

## THE THREE LAWS OF TRANSVERSE VIBRATIONS

```
  +-------------------+-------------------------+--------------------+
  |  LAW              |  RELATION               |  CONSTANT          |
  +-------------------+-------------------------+--------------------+
  |  LAW OF LENGTH    |  f ~ 1 / L              |  T and mu fixed    |
  |                   |  f L = constant         |                    |
  +-------------------+-------------------------+--------------------+
  |  LAW OF TENSION   |  f ~ sqrt( T )          |  L and mu fixed    |
  |                   |  f / sqrt(T) = constant |                    |
  +-------------------+-------------------------+--------------------+
  |  LAW OF MASS      |  f ~ 1 / sqrt( mu )     |  L and T fixed     |
  |                   |  f sqrt(mu) = constant  |                    |
  +-------------------+-------------------------+--------------------+
```

```
  QUICK PROPORTION RESULTS (save time in the exam)

     L halved          ->  f doubles
     T made 4 times    ->  f doubles
     T made 9 times    ->  f triples
     mu made 4 times   ->  f halves
     radius doubled    ->  mu x4  ->  f halves
```

---

# 11. AIR COLUMNS — ORGAN PIPES

```
  +--------------------------------------------------------------+
  |                                                              |
  |   CLOSED PIPE  (one end closed)                              |
  |                                                              |
  |                 ( 2n - 1 ) v                                 |
  |        f   =   ---------------            n = 1, 2, 3, ...   |
  |                     4 L                                      |
  |                                                              |
  |        f1 = v/4L    f2 = 3v/4L    f3 = 5v/4L                 |
  |                                                              |
  |        RATIO   1 : 3 : 5 : 7      ODD HARMONICS ONLY         |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   OPEN PIPE  (both ends open)                                |
  |                                                              |
  |                    n v                                       |
  |        f   =    ---------                 n = 1, 2, 3, ...   |
  |                    2 L                                       |
  |                                                              |
  |        f1 = v/2L    f2 = 2v/2L    f3 = 3v/2L                 |
  |                                                              |
  |        RATIO   1 : 2 : 3 : 4      ALL HARMONICS              |
  |                                                              |
  +--------------------------------------------------------------+

  For the SAME LENGTH:     f1(open)  =  2  x  f1(closed)
```

## END CORRECTION

```
  +--------------------------------------------------------------+
  |                                                              |
  |      END CORRECTION per open end      e  =  0.6 r            |
  |                              (r = radius of the pipe)        |
  |                                                              |
  |                                v                             |
  |      CLOSED PIPE:      f  =  --------------                  |
  |                              4 ( L + 0.6 r )                 |
  |                                                              |
  |                                v                             |
  |      OPEN PIPE:        f  =  --------------                  |
  |                              2 ( L + 1.2 r )                 |
  |                                                              |
  |      Effect: the true frequency is slightly LOWER than the   |
  |      uncorrected value.                                      |
  |                                                              |
  +--------------------------------------------------------------+
```

## RESONANCE TUBE (finding the speed of sound)

```
  First resonance   l1  +  e   =   lambda / 4
  Second resonance  l2  +  e   =   3 lambda / 4

  Subtract:         l2  -  l1  =   lambda / 2

       ->    lambda  =  2 ( l2 - l1 )
       ->    v  =  f x 2 ( l2 - l1 )         (end correction cancels!)

  and         e  =  ( l2  -  3 l1 ) / 2
```

---

# 12. BEATS

```
  +--------------------------------------------------------------+
  |                                                              |
  |     BEAT FREQUENCY     n   =   | f1  -  f2 |                 |
  |                                                              |
  |     TIME BETWEEN BEATS     =   1 / | f1 - f2 |               |
  |                                                              |
  |     Resultant wave:                                          |
  |                                                              |
  |       y = 2A cos[ 2pi (f1-f2) t / 2 ] sin[ 2pi (f1+f2) t /2 ]|
  |                                                              |
  |     heard frequency (the pitch) = ( f1 + f2 ) / 2            |
  |     loudness switched on/off at | f1 - f2 | per second       |
  |                                                              |
  |     Beats are heard ONLY IF | f1 - f2 |  <  about 10 Hz      |
  |     (persistence of hearing = 1/10 s)                        |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  THE WAX AND FILE RULE  (this one rule solves every "unknown fork" question)

     LOADING with WAX    ->  more mass  ->  frequency DECREASES
     FILING the prongs   ->  less mass  ->  frequency INCREASES

     After waxing the unknown fork:
        beats INCREASE  ->  the unknown fork was the LOWER one  (f - n)
        beats DECREASE  ->  the unknown fork was the HIGHER one (f + n)
```

---

# 13. DOPPLER EFFECT IN SOUND

```
  +---------------------------------------------------------------+
  |                                                               |
  |                          +-                -+                 |
  |                          |    v   +   vo    |                 |
  |            f'   =   f    |  --------------  |                 |
  |                          |    v   -   vs    |                 |
  |                          +-                -+                 |
  |                                                               |
  |   OBSERVER on TOP   ,   SOURCE on the BOTTOM                  |
  |                                                               |
  |   Observer moving TOWARDS the source   ->  TOP  is  + vo      |
  |   Observer moving AWAY                 ->  TOP  is  - vo      |
  |   Source moving TOWARDS the observer   ->  BOTTOM is - vs     |
  |   Source moving AWAY                   ->  BOTTOM is + vs     |
  |                                                               |
  |   *** ANYTHING THAT BRINGS THEM CLOSER RAISES f' ***          |
  |                                                               |
  +---------------------------------------------------------------+
```

## The four standard cases

| Case | Formula | Result |
|---|---|---|
| Source TOWARDS, observer at rest | `f' = f v / (v - vs)` | f' > f, pitch RISES |
| Source AWAY, observer at rest | `f' = f v / (v + vs)` | f' < f, pitch FALLS |
| Observer TOWARDS, source at rest | `f' = f (v + vo) / v` | f' > f, pitch RISES |
| Observer AWAY, source at rest | `f' = f (v - vo) / v` | f' < f, pitch FALLS |
| Both approaching | `f' = f (v + vo)/(v - vs)` | biggest rise |
| Both receding | `f' = f (v - vo)/(v + vs)` | biggest fall |
| Same direction, source chasing observer | `f' = f (v - vo)/(v - vs)` | depends on speeds |

## Extras

```
  APPARENT WAVELENGTH in front of a moving source:

        lambda'  =  ( v - vs ) / f          (squashed, shorter)

  APPARENT WAVELENGTH behind a moving source:

        lambda'  =  ( v + vs ) / f          (stretched, longer)


  WITH WIND of speed w blowing from the source to the observer:

                   ( v + w ) + vo
        f'  =  f  -----------------
                   ( v + w ) - vs


  MOTION AT AN ANGLE theta to the line joining them:

        use  vs cos(theta)  and  vo cos(theta)

        theta = 90 degrees  ->  cos 90 = 0  ->  NO DOPPLER EFFECT


  FRACTIONAL CHANGE for small speeds (light / distant galaxies):

        delta f / f   =   v / c        (RED SHIFT if receding)
```

> The Doppler formula only applies when vs and vo are both **less than v**.
> If the source moves faster than sound you get a **shock wave / sonic boom**
> instead, and the formula breaks down.

---

# 14. QUICK PROPORTIONALITIES — use these to skip full calculations

```
  +----------------------------+----------------------------------+
  |  String                    |  f ~ (1/L) sqrt(T/mu)            |
  |  Organ pipe                |  f ~ v / L                       |
  |  Sound in a gas            |  v ~ sqrt(T)  ,  v ~ 1/sqrt(rho) |
  |                            |  v ~ sqrt(gamma / M)             |
  |  Intensity                 |  I ~ A^2                         |
  |  Intensity from a point    |  I ~ 1 / r^2                     |
  |    source                  |                                  |
  +----------------------------+----------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+----------------------------------------------------------+
  | 1  |  v  =  f lambda                                          |
  +----+----------------------------------------------------------+
  | 2  |  y  =  A sin( omega t - k x )   ,  k = 2pi/lambda        |
  +----+----------------------------------------------------------+
  | 3  |  phase diff  =  (2 pi / lambda) x path diff              |
  +----+----------------------------------------------------------+
  | 4  |  v  =  sqrt( T / mu )                                    |
  +----+----------------------------------------------------------+
  | 5  |  v  =  sqrt( gamma P / rho )   = 332 m/s   (LAPLACE)     |
  +----+----------------------------------------------------------+
  | 6  |  v(t)  =  332  +  0.61 t                                 |
  +----+----------------------------------------------------------+
  | 7  |  node to node  =  lambda / 2  ;  node to antinode = l/4  |
  +----+----------------------------------------------------------+
  | 8  |  y  =  2A cos(kx) sin(omega t)      standing wave        |
  +----+----------------------------------------------------------+
  | 9  |  f  =  (n / 2L) sqrt( T / mu )      string, ALL harmonics|
  +----+----------------------------------------------------------+
  | 10 |  CLOSED pipe  f = (2n-1) v / 4L     ODD harmonics only   |
  |    |  OPEN   pipe  f = n v / 2L          ALL harmonics        |
  +----+----------------------------------------------------------+
  | 11 |  beat frequency  =  | f1 - f2 |                          |
  +----+----------------------------------------------------------+
  | 12 |  f'  =  f ( v + vo ) / ( v - vs )   DOPPLER              |
  |    |  observer on TOP, source on the BOTTOM                   |
  +----+----------------------------------------------------------+
```
