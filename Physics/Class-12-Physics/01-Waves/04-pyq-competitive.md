# Waves — JEE Main / AP EAPCET / TG EAPCET Questions

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
  +------------------+-------------------------+----------------------+
  |  EXAM            |  PHYSICS QUESTIONS      |  FROM WAVES          |
  +------------------+-------------------------+----------------------+
  |  AP EAPCET       |  40                     |  2  to  3            |
  |  TG EAPCET       |  40                     |  2  to  3            |
  |  JEE Main        |  25                     |  1  to  2            |
  +------------------+-------------------------+----------------------+

  Most of them are ONE-STEP substitutions into  v = f lambda ,
  f = (n/2L) sqrt(T/mu) ,  n = |f1 - f2|  or the Doppler formula.
  This is a HIGH-RETURN chapter. Do not skip it.
```

---

# PATTERN 1 — Read the data out of a given wave equation

> **SHORTCUT:** never re-derive anything. Compare with
> `y = A sin(omega t - k x)` and read off A, omega, k. Then
> `f = omega/2pi`, `lambda = 2pi/k`, `v = omega/k`.

### Q1
A wave is given by `y = 4 sin(5 t - 0.04 x)` in SI units. Its speed is

(a) 100 m/s &nbsp; (b) 125 m/s &nbsp; (c) 200 m/s &nbsp; (d) 0.008 m/s

**ANSWER: (b)**
```
  omega = 5 rad/s ,  k = 0.04 rad/m

              omega        5
       v  =  --------  =  ------  =  125 m/s
                 k         0.04
```

---

### Q2
For the wave `y = 2 sin 2pi( t/0.01 - x/30 )` where x is in cm, the frequency and
the wave speed are

(a) 100 Hz, 30 m/s &nbsp; (b) 100 Hz, 3 m/s &nbsp; (c) 50 Hz, 30 m/s &nbsp; (d) 100 Hz, 300 m/s

**ANSWER: (a)**
```
  Compare with  y = A sin 2pi( t/T - x/lambda )

  T = 0.01 s      ->   f = 1/T = 100 Hz
  lambda = 30 cm  =  0.30 m

  v = f lambda = 100 x 0.30 = 30 m/s
```

---

### Q3
The wave `y = A sin(k x - omega t)` travels along

(a) +x &nbsp; (b) -x &nbsp; (c) +y &nbsp; (d) it is stationary

**ANSWER: (a)**
```
  sin(kx - omega t)  =  - sin(omega t - k x)

  The bracket still has the form (omega t - k x), only flipped in sign
  overall (an inversion, not a change of direction).

  RULE: x and t carry OPPOSITE signs -> wave moves along +x
        x and t carry the SAME sign  -> wave moves along -x
```

---

### Q4
For `y = 0.02 sin(100 t - 2 x)` in SI units, the ratio of the maximum particle
velocity to the wave velocity is

(a) 1/25 &nbsp; (b) 25 &nbsp; (c) 1/50 &nbsp; (d) 2

**ANSWER: (a)**
```
  v(particle, max)  =  A omega  =  0.02 x 100  =  2 m/s

  v(wave)  =  omega / k  =  100 / 2  =  50 m/s

  ratio  =  2 / 50  =  1 / 25
```
> **SHORTCUT:** `v(particle,max) / v(wave) = A omega / (omega/k) = A k`.
> Here A k = 0.02 x 2 = 0.04 = 1/25. One line.

---

### Q5
Two points on a wave of wavelength 1 m are 25 cm apart. Their phase difference is

(a) pi/4 &nbsp; (b) pi/2 &nbsp; (c) pi &nbsp; (d) 2 pi

**ANSWER: (b)**
```
            2 pi                    2 pi
  phi  =  --------  x  delta x  =  ------  x  0.25  =  pi / 2
           lambda                    1
```

---

# PATTERN 2 — v = f lambda and change of medium

> **SHORTCUT:** frequency NEVER changes when the medium changes.
> Only v and lambda change, in the same ratio.

### Q6
A sound of frequency 500 Hz travels from air (340 m/s) into water (1500 m/s). In
water its wavelength is

(a) 0.68 m &nbsp; (b) 3 m &nbsp; (c) 0.3 m &nbsp; (d) 1.5 m

**ANSWER: (b)**
```
  Frequency stays 500 Hz.

  lambda  =  v / f  =  1500 / 500  =  3 m
```

---

### Q7
A wave has a wavelength of 1 m in medium 1 and 2 m in medium 2. The ratio of the
speeds v1 : v2 is

(a) 2 : 1 &nbsp; (b) 1 : 2 &nbsp; (c) 1 : 4 &nbsp; (d) 4 : 1

**ANSWER: (b)**
```
  f is the same in both media, and  v = f lambda ,
  so  v is directly proportional to lambda.

  v1 : v2  =  1 : 2
```

---

### Q8
Which quantity does NOT change when a wave passes from one medium to another?

(a) speed &nbsp; (b) wavelength &nbsp; (c) frequency &nbsp; (d) amplitude

**ANSWER: (c)** — frequency is fixed by the source, not by the medium.

---

### Q9
For a human audible range of 20 Hz to 20 kHz and v = 340 m/s, the wavelength
range of audible sound is about

(a) 17 m to 1.7 cm &nbsp; (b) 34 m to 3.4 cm &nbsp; (c) 17 cm to 1.7 m &nbsp; (d) 1.7 m to 17 cm

**ANSWER: (a)**
```
  lambda(max)  =  340 / 20      =  17 m
  lambda(min)  =  340 / 20000   =  0.017 m  =  1.7 cm
```

---

# PATTERN 3 — Speed of a wave in a medium

> **SHORTCUT:** every one of these is `v ~ sqrt(something)`. A square root
> HALVES the effect of a change: 4 times the tension only doubles the speed.

### Q10
If the tension in a stretched string is increased 4 times, the speed of a
transverse wave on it becomes

(a) 2 times &nbsp; (b) 4 times &nbsp; (c) 16 times &nbsp; (d) unchanged

**ANSWER: (a)** — `v ~ sqrt(T)` , and sqrt(4) = 2.

---

### Q11
Two wires of the same material and the same tension have radii in the ratio
1 : 2. The ratio of the transverse wave speeds in them is

(a) 1 : 2 &nbsp; (b) 2 : 1 &nbsp; (c) 1 : 4 &nbsp; (d) 4 : 1

**ANSWER: (b)**
```
  mu = pi r^2 rho    ->    mu ~ r^2    ->    mu1 : mu2  =  1 : 4

  v ~ 1 / sqrt(mu)   ->    v1 : v2  =  sqrt(4) : sqrt(1)  =  2 : 1
```

---

### Q12
The ratio of the speed of sound in air given by Laplace's formula to that given
by Newton's formula is

(a) 1 &nbsp; (b) gamma &nbsp; (c) sqrt(gamma) &nbsp; (d) 1/gamma

**ANSWER: (c)**
```
  v(Laplace)     sqrt( gamma P / rho )
  -----------  = ---------------------- = sqrt( gamma ) = sqrt(1.41) = 1.19
  v(Newton)         sqrt( P / rho )

  280 x 1.19  =  332 m/s.   Correct.
```

---

### Q13
The speed of sound in air at 0 deg C is 332 m/s. At 27 deg C it is about

(a) 340 m/s &nbsp; (b) 348 m/s &nbsp; (c) 359 m/s &nbsp; (d) 332 m/s

**ANSWER: (b)**
```
  Quick rule:  v = 332 + 0.61 x 27  =  332 + 16.5  =  348.5 m/s

  Exact:  v = 332 sqrt(300/273) = 332 x 1.0483 = 348 m/s
```
> **SHORTCUT:** use `+0.61 per deg C` in the exam hall. It is far faster
> than the square root and accurate to well within the options given.

---

### Q14
At what temperature will the speed of sound in air be twice its value at 0 deg C?

(a) 546 K &nbsp; (b) 819 deg C &nbsp; (c) 273 deg C &nbsp; (d) 1092 deg C

**ANSWER: (b)**
```
  v ~ sqrt(T)  ->  to double v, T must become 4 times.

  T2 = 4 x 273 = 1092 K   ->   t2 = 1092 - 273 = 819 deg C
```

---

### Q15
At the same temperature, the ratio of the speed of sound in hydrogen to that in
oxygen is (M(H2) = 2, M(O2) = 32, both diatomic)

(a) 1 : 4 &nbsp; (b) 4 : 1 &nbsp; (c) 16 : 1 &nbsp; (d) 1 : 16

**ANSWER: (b)**
```
  v  =  sqrt( gamma R T / M )    ->    v ~ 1 / sqrt(M)   (gamma equal)

  v(H2)      sqrt( 32 )
  -------  = ----------  =  sqrt(16)  =  4        ->  4 : 1
  v(O2)      sqrt(  2 )
```

---

### Q16
The speed of sound in a gas is NOT affected by a change in

(a) temperature &nbsp; (b) humidity &nbsp; (c) pressure &nbsp; (d) density

**ANSWER: (c)** — at constant temperature P/rho is constant, so v is unchanged.

---

# PATTERN 4 — Superposition and interference

> **SHORTCUT:** `I ~ A^2`. Convert intensities to amplitudes by taking square
> roots FIRST, then add or subtract, then square again.

### Q17
Two waves of intensity ratio 4 : 1 interfere. The ratio I(max) : I(min) is

(a) 9 : 1 &nbsp; (b) 4 : 1 &nbsp; (c) 3 : 1 &nbsp; (d) 5 : 3

**ANSWER: (a)**
```
  I1 : I2 = 4 : 1     ->    A1 : A2 = 2 : 1

  I(max)     ( 2 + 1 )^2       9
  -------  = -------------  = ---   =  9 : 1
  I(min)     ( 2 - 1 )^2       1
```

---

### Q18
Two waves of amplitude ratio 3 : 1 interfere. The ratio of maximum to minimum
intensity is

(a) 3 : 1 &nbsp; (b) 9 : 1 &nbsp; (c) 4 : 1 &nbsp; (d) 16 : 1

**ANSWER: (c)**
```
  I(max)     ( 3 + 1 )^2      16
  -------  = ------------  = ----  =  4 : 1
  I(min)     ( 3 - 1 )^2       4
```

---

### Q19
Destructive interference occurs when the path difference is

(a) n lambda &nbsp; (b) (2n-1) lambda / 2 &nbsp; (c) (2n-1) lambda / 4 &nbsp; (d) 2 n lambda

**ANSWER: (b)** — an ODD number of half wavelengths.

---

### Q20
Two coherent sources each of intensity I meet at a point with a phase difference
of 60 degrees. The resultant intensity is

(a) 2 I &nbsp; (b) 3 I &nbsp; (c) 4 I &nbsp; (d) I

**ANSWER: (b)**
```
  I(res)  =  I1 + I2 + 2 sqrt(I1 I2) cos(phi)

          =  I + I + 2 I cos 60      =  2 I + 2 I (0.5)   =  3 I
```

---

# PATTERN 5 — Stationary waves, nodes and antinodes

> **SHORTCUT:** the moment you see `sin(kx) cos(omega t)` or
> `cos(kx) sin(omega t)`, it is a STATIONARY wave. Node spacing = lambda/2.

### Q21
For the stationary wave `y = 5 sin(pi x / 3) cos(40 pi t)` (x in cm), the
distance between two consecutive nodes is

(a) 3 cm &nbsp; (b) 6 cm &nbsp; (c) 1.5 cm &nbsp; (d) 12 cm

**ANSWER: (a)**
```
  k = pi / 3  rad/cm

               2 pi        2 pi
  lambda  =  --------  =  --------  =  6 cm
                 k         pi / 3

  node spacing  =  lambda / 2  =  3 cm
```

---

### Q22
The distance between a node and the nearest antinode in a stationary wave is

(a) lambda &nbsp; (b) lambda/2 &nbsp; (c) lambda/4 &nbsp; (d) lambda/8

**ANSWER: (c)**

---

### Q23
In a stationary wave, all the particles lying between two consecutive nodes

(a) have the same amplitude &nbsp; (b) are in the same phase
(c) have the same velocity &nbsp; (d) have the same energy

**ANSWER: (b)** — they all reach their extremes and cross the mean position
together, though their amplitudes differ.

---

### Q24
The energy transported by a stationary wave across a node is

(a) maximum &nbsp; (b) minimum but not zero &nbsp; (c) ZERO &nbsp; (d) infinite

**ANSWER: (c)** — a stationary wave transports no net energy; the energy stays
trapped between the nodes.

---

# PATTERN 6 — Vibrations of a stretched string

> **SHORTCUT:** `f = (n / 2L) sqrt(T/mu)`. Only three variables can be changed.
> Halving L doubles f; quadrupling T doubles f; quadrupling mu halves f.

### Q25
The fundamental frequency of a string is 100 Hz. Its fourth harmonic is

(a) 200 Hz &nbsp; (b) 300 Hz &nbsp; (c) 400 Hz &nbsp; (d) 700 Hz

**ANSWER: (c)** — a string has ALL harmonics, so f4 = 4 f1 = 400 Hz.

---

### Q26
The fundamental frequency of a string is f. If its length is halved and its
tension made 4 times, the new fundamental frequency is

(a) 2 f &nbsp; (b) 4 f &nbsp; (c) f &nbsp; (d) 8 f

**ANSWER: (b)**
```
            1     +-      -+
  f   =   ----- x |  sqrt  |  T / mu
           2 L    +-      -+

  L -> L/2   multiplies f by 2
  T -> 4T    multiplies f by sqrt(4) = 2

  Together:  f  ->  2 x 2 x f  =  4 f
```

---

### Q27
A stretched wire 1 m long vibrates in 3 loops. The wavelength of the wave on it is

(a) 2 m &nbsp; (b) 1 m &nbsp; (c) 0.67 m &nbsp; (d) 0.33 m

**ANSWER: (c)**
```
  n loops  ->  L = n lambda / 2

  lambda  =  2 L / n  =  2 x 1 / 3  =  0.67 m
```

---

### Q28
To double the fundamental frequency of a sonometer wire without changing its
length, the tension must be made

(a) 2 times &nbsp; (b) 4 times &nbsp; (c) 8 times &nbsp; (d) half

**ANSWER: (b)** — `f ~ sqrt(T)`, so T must be 4 times.

---

### Q29
A string vibrating in its third harmonic has how many nodes (including the ends)?

(a) 3 &nbsp; (b) 4 &nbsp; (c) 6 &nbsp; (d) 2

**ANSWER: (b)**
```
  n-th harmonic  ->  n loops  ->  n antinodes  and  (n + 1) nodes

  n = 3   ->  4 nodes , 3 antinodes
```

---

# PATTERN 7 — Organ pipes

> **SHORTCUT:** CLOSED = `v/4L` and ODD only. OPEN = `v/2L` and ALL.
> Everything else follows.

### Q30
The fundamental frequency of a closed organ pipe is 100 Hz. The next possible
frequency it can produce is

(a) 150 Hz &nbsp; (b) 200 Hz &nbsp; (c) 300 Hz &nbsp; (d) 400 Hz

**ANSWER: (c)** — only ODD harmonics, so the next one is 3 f1 = 300 Hz.

---

### Q31
An open pipe of length L and a closed pipe of length L/2 have

(a) the same fundamental &nbsp; (b) the closed pipe is twice as high
(c) the open pipe is twice as high &nbsp; (d) no relation

**ANSWER: (a)**
```
  open pipe   :   f = v / (2 L)

  closed pipe :   f = v / (4 x L/2)  =  v / (2 L)

  They are EQUAL.
```

---

### Q32
The ratio of the fundamental frequencies of a closed pipe and an open pipe of the
same length is

(a) 1 : 2 &nbsp; (b) 2 : 1 &nbsp; (c) 1 : 4 &nbsp; (d) 1 : 1

**ANSWER: (a)**
```
   f(closed)     v/4L        1
  -----------  = ------  =  ---     ->  1 : 2
   f(open)       v/2L        2
```

---

### Q33
The third overtone of a closed organ pipe corresponds to which harmonic?

(a) 3rd &nbsp; (b) 4th &nbsp; (c) 6th &nbsp; (d) 7th

**ANSWER: (d)**
```
  Closed pipe harmonics:  1st , 3rd , 5th , 7th , ...
                          |     |     |     |
  Overtone number:        -    1st   2nd   3rd

  So the THIRD OVERTONE is the SEVENTH HARMONIC  =  7 f1.
```
> **SHORTCUT for closed pipes:** the n-th overtone = the (2n + 1)-th harmonic.

---

### Q34
An open pipe is suddenly closed at one end. Its fundamental frequency becomes

(a) double &nbsp; (b) half &nbsp; (c) unchanged &nbsp; (d) four times

**ANSWER: (b)**
```
  open:    v / 2L
  closed:  v / 4L      =   half of  v / 2L
```

---

# PATTERN 8 — Beats

> **SHORTCUT:** `n = |f1 - f2|`. For the "unknown fork" questions remember:
> **WAX LOWERS the frequency, FILING RAISES it.**

### Q35
A fork of 256 Hz gives 5 beats per second with an unknown fork. When the unknown
fork is FILED, the beats increase. The unknown frequency is

(a) 251 Hz &nbsp; (b) 261 Hz &nbsp; (c) 256 Hz &nbsp; (d) 266 Hz

**ANSWER: (b)**
```
  5 beats  ->  the unknown is 251 Hz or 261 Hz.

  FILING removes mass, so it RAISES the frequency.

  If the unknown were 251, filing moves it TOWARDS 256 -> beats DECREASE. X
  If the unknown were 261, filing moves it AWAY from 256 -> beats INCREASE. TICK

  Answer: 261 Hz
```

---

### Q36
Two tuning forks of 512 Hz and 508 Hz are sounded together. The number of beats
per second is

(a) 2 &nbsp; (b) 4 &nbsp; (c) 8 &nbsp; (d) 1020

**ANSWER: (b)** — `n = |512 - 508| = 4`.

---

### Q37
Beats can be heard only if the difference between the two frequencies is

(a) more than 10 Hz &nbsp; (b) less than about 10 Hz &nbsp; (c) exactly zero &nbsp; (d) more than 100 Hz

**ANSWER: (b)** — because the persistence of hearing is about 1/10 second.

---

### Q38
Two identical sonometer wires have a fundamental frequency of 500 Hz when kept
under the same tension. If the tension in one is increased by 2 percent, the
number of beats heard per second is about

(a) 10 &nbsp; (b) 5 &nbsp; (c) 2 &nbsp; (d) 20

**ANSWER: (b)**
```
  f ~ sqrt(T)     ->     delta f / f  =  (1/2) x ( delta T / T )

  delta f / f  =  0.5 x 2 %  =  1 %

  delta f  =  0.01 x 500  =  5 Hz     ->   5 beats per second
```
> **SHORTCUT:** for a square root, the percentage change is HALVED.

---

# PATTERN 9 — Doppler effect

> **SHORTCUT:** decide FIRST whether the pitch must rise or fall. Then pick the
> signs that give you that. Observer on TOP, source on the BOTTOM.

### Q39
A source of frequency f approaches a stationary observer with a speed v/10
(v = speed of sound). The apparent frequency is

(a) 0.9 f &nbsp; (b) 1.1 f &nbsp; (c) 1.11 f &nbsp; (d) 1.2 f

**ANSWER: (c)**
```
                  v                    v              10
  f'  =  f  ------------  =  f  --------------  =  f ----  =  1.11 f
             v  -  v/10           0.9 v               9
```

---

### Q40
An observer moves towards a stationary source of frequency f with a speed v/10.
The apparent frequency is

(a) 1.11 f &nbsp; (b) 1.1 f &nbsp; (c) 0.9 f &nbsp; (d) f

**ANSWER: (b)**
```
             v  +  v/10           1.1 v
  f'  =  f  ------------  =  f  ---------  =  1.1 f
                 v                  v
```
> **SHORTCUT / TRAP:** compare Q39 and Q40. Same relative speed, DIFFERENT
> answers (1.11 f versus 1.1 f). The Doppler effect for sound is NOT symmetric
> between source motion and observer motion, because sound needs a medium.
> Examiners love this pair.

---

### Q41
A source and an observer both move with the same velocity in the same direction.
The apparent frequency is

(a) greater than f &nbsp; (b) less than f &nbsp; (c) equal to f &nbsp; (d) zero

**ANSWER: (c)**
```
             v  -  vo
  f'  =  f  ----------      with   vo = vs
             v  -  vs

     =  f            (the distance between them never changes)
```

---

### Q42
A train moving at 30 m/s sounds a whistle of 600 Hz. A stationary observer ahead
of it hears (v = 330 m/s)

(a) 550 Hz &nbsp; (b) 600 Hz &nbsp; (c) 660 Hz &nbsp; (d) 690 Hz

**ANSWER: (c)**
```
                 330            330
  f'  =  600 x  --------  = 600 -----  =  660 Hz
                330 - 30        300
```

---

### Q43
A source of sound moves in a circle around a stationary observer at the centre.
The frequency heard by the observer is

(a) continuously increasing &nbsp; (b) continuously decreasing
(c) unchanged &nbsp; (d) alternately rising and falling

**ANSWER: (c)**
```
  On a circle the velocity is always PERPENDICULAR to the radius,
  i.e. perpendicular to the line joining source and observer.

  Component along that line  =  v cos(90 deg)  =  0

  ->  NO DOPPLER EFFECT.   f' = f.
```

---

### Q44
Two trains approach each other, each at 20 m/s. One sounds a whistle of 500 Hz.
The driver of the other train hears (v = 340 m/s)

(a) 500 Hz &nbsp; (b) 530 Hz &nbsp; (c) 562.5 Hz &nbsp; (d) 590 Hz

**ANSWER: (c)**
```
  Both approaching:  TOP gets + vo , BOTTOM gets - vs

             v + vo             340 + 20            360
  f'  =  f ----------  =  500 x ----------  = 500 x -----  =  562.5 Hz
             v - vs             340 - 20            320
```

---

### Q45
Light from a distant galaxy shows a RED shift. This means the galaxy is

(a) approaching us &nbsp; (b) receding from us
(c) stationary &nbsp; (d) rotating

**ANSWER: (b)** — a red shift means a LOWER observed frequency, which happens
when the source recedes. This is the main evidence for the expanding universe.

---

# SPEED RULES FOR THE EXAM HALL

```
  +----------------------------------------+----------------------------------------+
  |  IF YOU SEE THIS ...                   |  DO THIS IMMEDIATELY                   |
  +----------------------------------------+----------------------------------------+
  |  y = A sin(omega t - k x) given        |  v = omega / k .  Do not find f and    |
  |                                        |  lambda separately.                    |
  +----------------------------------------+----------------------------------------+
  |  sin(kx) cos(omega t) form             |  It is a STATIONARY wave.              |
  |                                        |  Node spacing = lambda/2 = pi / k.     |
  +----------------------------------------+----------------------------------------+
  |  "wave enters another medium"          |  FREQUENCY IS UNCHANGED. Only v and    |
  |                                        |  lambda change, in the same ratio.     |
  +----------------------------------------+----------------------------------------+
  |  "tension made n times"                |  v and f change by sqrt(n).            |
  +----------------------------------------+----------------------------------------+
  |  "radius / thickness doubled"          |  mu becomes 4 times, so f HALVES.      |
  +----------------------------------------+----------------------------------------+
  |  "percentage change" + a square root   |  HALVE the percentage.                 |
  +----------------------------------------+----------------------------------------+
  |  Temperature change of sound           |  v = 332 + 0.61 t . Fastest route.     |
  +----------------------------------------+----------------------------------------+
  |  "effect of pressure on speed"         |  NONE. Tick it and move on.            |
  +----------------------------------------+----------------------------------------+
  |  "moist air / humidity"                |  Speed INCREASES (moist air is lighter)|
  +----------------------------------------+----------------------------------------+
  |  Intensity ratio given, want Imax/Imin |  Square-root the intensities to get    |
  |                                        |  amplitudes, then (A1+A2)^2/(A1-A2)^2. |
  +----------------------------------------+----------------------------------------+
  |  CLOSED pipe                           |  v/4L , and ONLY 1, 3, 5, 7 ...        |
  |                                        |  n-th overtone = (2n+1)-th harmonic.   |
  +----------------------------------------+----------------------------------------+
  |  OPEN pipe                             |  v/2L , and ALL of 1, 2, 3, 4 ...      |
  +----------------------------------------+----------------------------------------+
  |  Same length, open vs closed           |  open = 2 x closed.                    |
  +----------------------------------------+----------------------------------------+
  |  "beats"                               |  n = |f1 - f2| . Nothing else.         |
  +----------------------------------------+----------------------------------------+
  |  "loaded with WAX"                     |  frequency DECREASES.                  |
  |  "FILED"                               |  frequency INCREASES.                  |
  +----------------------------------------+----------------------------------------+
  |  Any Doppler question                  |  First decide: rise or fall?           |
  |                                        |  Then f' = f (v + vo)/(v - vs) with    |
  |                                        |  signs that give that answer.          |
  +----------------------------------------+----------------------------------------+
  |  Source moves in a CIRCLE around the   |  NO Doppler effect. f' = f.            |
  |  observer, or moves perpendicular      |                                        |
  +----------------------------------------+----------------------------------------+
  |  Source and observer move TOGETHER at  |  NO change. f' = f.                    |
  |  the same velocity                     |                                        |
  +----------------------------------------+----------------------------------------+
  |  Red shift / blue shift                |  RED = receding. BLUE = approaching.   |
  +----------------------------------------+----------------------------------------+
  |  You are out of time on an EAPCET      |  GUESS. There is no negative marking.  |
  |  Waves question                        |  For JEE Main, leave it blank instead. |
  +----------------------------------------+----------------------------------------+
```
