# Oscillations — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice. Grouped by **PATTERN**, because the same shapes come back
every single year with different numbers.

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
  AP / TG EAPCET  (Physics, 40 questions)  ->  2 to 4
  JEE Main        (Physics, 25 questions)  ->  1 to 2

  Oscillations is also the FOUNDATION of Waves, AC circuits and LC
  oscillations, so the effort you spend here pays three more times.
```

**The four numbers that solve half these questions:**

```
     omega = 2 pi / T        v_max = A omega       a_max = A omega^2

     E = (1/2) m omega^2 A^2
```

---

# PATTERN 1 — Read the equation, extract A, omega, T, n, phi

### Q1
The displacement of a particle is `y = 5 sin(pi t + pi/3)` m. Its time period is

(a) 1 s &nbsp; (b) 2 s &nbsp; (c) 3 s &nbsp; (d) 0.5 s

**ANSWER: (b)**
```
  omega = pi rad/s

        2 pi      2 pi
  T  =  ----  =  ------  =  2 s
        omega      pi
```
> **SHORTCUT:** the number sitting in front of `t` IS omega. Never anything else.

---

### Q2
A particle moves so that `x = A sin^2(omega t)`. The motion is

(a) not periodic &nbsp; (b) SHM with period `2 pi / omega`
(c) SHM with period `pi / omega` &nbsp; (d) periodic but not SHM

**ANSWER: (c)**
```
                    A                     A     A
  sin^2(wt) = ------------- (1 - cos 2wt) = --- - --- cos(2 omega t)
                    2                      2     2

  This is SHM about the point x = A/2, with angular frequency 2 omega.

        2 pi        pi
  T  =  ------  =  -----
        2 omega     omega
```
> **SHORTCUT:** any `sin^2` or `cos^2` DOUBLES the frequency and HALVES the period.

---

### Q3
Which of the following is simple harmonic?

(a) `y = sin(omega t) - cos(omega t)` &nbsp; (b) `y = sin^3(omega t)`
(c) `y = 1 + omega t + omega^2 t^2` &nbsp; (d) `y = e^(-omega t)`

**ANSWER: (a)**
```
  sin wt - cos wt  =  sqrt(2) sin( wt - pi/4 )

  A single sine of constant amplitude  ->  SHM.

  (b) sin^3 is periodic but NOT of the form A sin(wt + phi)  -> not SHM
  (c) and (d) never repeat  -> not even periodic
```

---

### Q4
A particle in SHM starts from the **extreme** position. Its displacement
equation is

(a) `A sin(omega t)` &nbsp; (b) `A cos(omega t)` &nbsp;
(c) `A sin(omega t + pi)` &nbsp; (d) `A tan(omega t)`

**ANSWER: (b)** At t = 0 we need y = A, and only `A cos(0) = A` gives that.
```
  Starts at MEAN     ->   y = A sin(omega t)
  Starts at EXTREME  ->   y = A cos(omega t)
```

---

# PATTERN 2 — Velocity and acceleration at a given displacement

### Q5
A particle executes SHM with amplitude A. At what displacement is its speed half
the maximum speed?

(a) A/2 &nbsp; (b) A/sqrt(2) &nbsp; (c) `A sqrt(3)/2` &nbsp; (d) A/4

**ANSWER: (c)**
```
                                          A omega
  omega sqrt(A^2 - y^2)  =  (1/2) v_max = ---------
                                             2

        A^2 - y^2  =  A^2 / 4

        y^2  =  3 A^2 / 4

              A sqrt(3)
        y  =  ---------  =  0.866 A
                  2
```

---

### Q6
At what displacement is the acceleration half of its maximum value?

**ANSWER: y = A/2**
```
  a = omega^2 y  and  a_max = omega^2 A

  omega^2 y  =  (1/2) omega^2 A     ->    y = A / 2
```
> **SHORTCUT:** acceleration is a **straight line** in y, velocity is an
> **ellipse**. Half the acceleration -> half the displacement. Half the speed
> -> 0.866 A, not A/2. Do not mix them up.

---

### Q7
A particle executes SHM with period 2 s and amplitude 10 cm. Its speed when the
displacement is 5 cm is about

(a) 13.6 cm/s &nbsp; (b) 27.2 cm/s &nbsp; (c) 31.4 cm/s &nbsp; (d) 6.8 cm/s

**ANSWER: (b)**
```
  omega = 2 pi / 2 = pi = 3.14 rad/s

  v = omega sqrt(A^2 - y^2) = 3.14 x sqrt(100 - 25)
    = 3.14 x sqrt(75) = 3.14 x 8.66 = 27.2 cm/s
```

---

### Q8
The maximum speed of a particle in SHM is 1 m/s and its maximum acceleration is
1.57 m/s^2. Its time period is

(a) 2 s &nbsp; (b) 4 s &nbsp; (c) 6.28 s &nbsp; (d) 1 s

**ANSWER: (b)**
```
  a_max        A omega^2
  ------  =   ----------- = omega  =  1.57 / 1  =  1.57 rad/s
  v_max         A omega

        2 pi       6.28
  T  =  -----  =  ------  =  4 s
        omega      1.57
```
> **SHORTCUT:** `omega = a_max / v_max` and `A = v_max^2 / a_max`. Two lines,
> no algebra.

---

### Q9
The acceleration-displacement graph of a body in SHM is a straight line with
slope `-4`. Its time period is

(a) pi s &nbsp; (b) 2 pi s &nbsp; (c) 4 pi s &nbsp; (d) pi/2 s

**ANSWER: (a)**
```
  a = -omega^2 y   ->   slope = -omega^2 = -4   ->   omega = 2 rad/s

  T = 2 pi / 2 = pi s
```

---

### Q10
The graph between velocity and displacement for a body in SHM is

(a) a straight line &nbsp; (b) a parabola &nbsp; (c) an ellipse &nbsp;
(d) a hyperbola

**ANSWER: (c)**
```
    v^2            y^2
  ----------  +  --------  =  1        ->  an ELLIPSE
  A^2 omega^2      A^2
```

---

# PATTERN 3 — Energy in SHM

### Q11
The kinetic energy of a particle in SHM equals its potential energy when the
displacement is

(a) A/2 &nbsp; (b) A/sqrt(2) &nbsp; (c) `A sqrt(3)/2` &nbsp; (d) A

**ANSWER: (b)**
```
  A^2 - y^2  =  y^2     ->     y = A / sqrt(2)  =  0.707 A
```
> **SHORTCUT:** memorise the three landmarks:
> `y = A/2  -> KE:PE = 3:1` , `y = A/sqrt2 -> 1:1` , `y = 0.866A -> 1:3`.

---

### Q12
At a displacement of A/2, the ratio of kinetic energy to potential energy is

(a) 1:3 &nbsp; (b) 3:1 &nbsp; (c) 1:1 &nbsp; (d) 4:1

**ANSWER: (b)**
```
   KE       A^2 - y^2       A^2 - A^2/4      (3/4) A^2
  ----  =  -----------  =  --------------  = ----------- = 3
   PE          y^2            A^2 / 4         (1/4) A^2
```

---

### Q13
If the amplitude of a particle in SHM is halved, its total energy becomes

(a) half &nbsp; (b) one fourth &nbsp; (c) double &nbsp; (d) unchanged

**ANSWER: (b)** `E is proportional to A^2`, so `A/2` gives `E/4`.

---

### Q14
The total energy of a particle of mass m in SHM of amplitude A and frequency n
is

(a) `2 pi^2 m n^2 A^2` &nbsp; (b) `pi^2 m n^2 A^2` &nbsp;
(c) `4 pi^2 m n^2 A^2` &nbsp; (d) `(1/2) m n^2 A^2`

**ANSWER: (a)**
```
  E = (1/2) m omega^2 A^2  =  (1/2) m (2 pi n)^2 A^2
    = (1/2) m x 4 pi^2 n^2 A^2  =  2 pi^2 m n^2 A^2
```

---

### Q15
The kinetic energy of a particle in SHM of period T varies with a period of

(a) T &nbsp; (b) T/2 &nbsp; (c) 2T &nbsp; (d) T/4

**ANSWER: (b)**
```
  KE contains cos^2(wt), and cos^2 x = (1 + cos 2x)/2.
  The "2x" DOUBLES the frequency, so the period is HALVED.

  KE and PE each complete TWO full cycles per oscillation.
```

---

### Q16
A body of mass 0.1 kg executes SHM of amplitude 0.2 m and period 2 pi seconds.
Its maximum kinetic energy is

(a) 0.002 J &nbsp; (b) 0.02 J &nbsp; (c) 0.2 J &nbsp; (d) 2 J

**ANSWER: (a)**
```
  omega = 2 pi / (2 pi) = 1 rad/s

  KE_max = E = (1/2) m omega^2 A^2
             = 0.5 x 0.1 x 1 x (0.2)^2
             = 0.5 x 0.1 x 0.04  =  0.002 J
```

---

### Q17
The average kinetic energy of a particle in SHM over one full period is

(a) `(1/2) m omega^2 A^2` &nbsp; (b) `(1/4) m omega^2 A^2` &nbsp;
(c) zero &nbsp; (d) `m omega^2 A^2`

**ANSWER: (b)** The average of `cos^2` over a period is 1/2, so the average KE
is half the total energy: `E/2 = (1/4) m omega^2 A^2`.

---

# PATTERN 4 — The simple pendulum

### Q18
The length of a seconds pendulum on the Moon (g = 1.63 m/s^2) is about

(a) 0.99 m &nbsp; (b) 0.50 m &nbsp; (c) 0.165 m &nbsp; (d) 6.0 m

**ANSWER: (c)**
```
          T^2 g       4 x 1.63       6.52
  l  =  --------  =  ----------  =  -------  =  0.165 m
          4 pi^2       39.48        39.48

  About 16.5 cm — one sixth of the Earth value, as expected.
```

---

### Q19
The time period of a simple pendulum is doubled when its length is

(a) doubled &nbsp; (b) halved &nbsp; (c) made 4 times &nbsp; (d) made 1/4

**ANSWER: (c)** `T is proportional to sqrt(l)`, so to double T you must make l
four times bigger.

---

### Q20
A simple pendulum is in a lift accelerating **upward** with acceleration g/3.
Its new time period is

(a) `T sqrt(3)/2` &nbsp; (b) `2T/sqrt(3)` &nbsp; (c) `T/2` &nbsp; (d) `2T`

**ANSWER: (a)**
```
                       g       4g
  g_eff  =  g  +  a =  g  +  ---  =  ----
                        3       3

   T'          g              3
  ----  = sqrt(-----) = sqrt(---) = sqrt(3) / 2  =  0.866
   T          g_eff          4

  T' = 0.866 T   —  the clock runs FAST.
```
> **SHORTCUT:** lift UP -> g gets bigger -> T gets smaller. Lift DOWN -> the
> opposite. You can often answer without touching a calculator.

---

### Q21
A simple pendulum is suspended inside a lift in **free fall**. Its time period
is

(a) unchanged &nbsp; (b) zero &nbsp; (c) infinite &nbsp; (d) halved

**ANSWER: (c)** `g_eff = g - g = 0`, so `T = 2 pi sqrt(l/0) = infinity`. There
is no restoring force, so the pendulum does not oscillate at all.

---

### Q22
The time period of a simple pendulum does NOT depend on

(a) its length &nbsp; (b) the value of g &nbsp;
(c) the mass of the bob &nbsp; (d) all of these

**ANSWER: (c)** The mass cancels in the derivation. For small amplitudes T is
also independent of the amplitude (the law of isochronism).

---

### Q23
A hollow spherical bob of a pendulum is filled with water and has a small hole
at the bottom. As the water slowly drains out, the time period

(a) keeps increasing &nbsp; (b) keeps decreasing
(c) first increases then decreases, returning to the original value
(d) stays the same

**ANSWER: (c)**
```
  The effective length is measured to the CENTRE OF MASS of the bob.

  Full bob      ->  centre of mass at the centre         -> l normal
  Half empty    ->  centre of mass moves DOWN            -> l LARGER  -> T up
  Fully empty   ->  centre of mass back at the centre    -> l normal  -> T back

  A classic EAPCET / JEE favourite.
```

---

### Q24
A pendulum clock keeping correct time on the Earth is taken to a planet where g
is 4 times that on Earth. In 24 hours it will show

(a) 12 hours &nbsp; (b) 24 hours &nbsp; (c) 48 hours &nbsp; (d) 6 hours

**ANSWER: (c)**
```
  T' = T / sqrt(4) = T / 2      ->   it ticks TWICE as fast

  In 24 real hours it completes twice as many ticks, so it SHOWS 48 hours.
```

---

### Q25
The time period of a simple pendulum of infinite length (or of a body dropped
into a tunnel through the Earth) is about

(a) 24 hours &nbsp; (b) 84.6 minutes &nbsp; (c) 1 hour &nbsp; (d) 12 hours

**ANSWER: (b)**
```
                    R              6.4 x 10^6
  T  =  2 pi  sqrt(---)  =  6.28 sqrt(------------)
                    g                     9.8

     =  6.28 x sqrt(6.53 x 10^5)  =  6.28 x 808  =  5075 s

     =  84.6 minutes
```

---

# PATTERN 5 — Springs

### Q26
A spring of force constant k is cut into two **equal** halves. The force
constant of each half is

(a) k/2 &nbsp; (b) k &nbsp; (c) 2k &nbsp; (d) 4k

**ANSWER: (c)** `k is inversely proportional to the length`. Half the length
gives twice the stiffness.
```
  Cut into n equal parts  ->  each part has  k' = n k
```

---

### Q27
A mass m on a spring has period T. The spring is cut into two equal halves and
the same mass is attached to one half. The new period is

(a) `T/2` &nbsp; (b) `T/sqrt(2)` &nbsp; (c) `T sqrt(2)` &nbsp; (d) `2T`

**ANSWER: (b)**
```
  k' = 2k    and   T is proportional to 1 / sqrt(k)

  T'  =  T / sqrt(2)
```

---

### Q28
Two identical springs, each of force constant k, are joined in **parallel** and
loaded with a mass m. The time period is

(a) `2 pi sqrt(m/k)` &nbsp; (b) `2 pi sqrt(m/2k)` &nbsp;
(c) `2 pi sqrt(2m/k)` &nbsp; (d) `pi sqrt(m/k)`

**ANSWER: (b)** Parallel: `k_p = k + k = 2k`, so `T = 2 pi sqrt(m / 2k)`.
```
  SERIES of two identical springs:  k_s = k/2  ->  T = 2 pi sqrt(2m/k)

  MEMORY HOOK:  parallel -> stiffer -> FASTER
                series   -> softer  -> SLOWER
```

---

### Q29
A spring-mass system oscillates with period T on the Earth. On the Moon its
period will be

(a) `T/sqrt(6)` &nbsp; (b) `T sqrt(6)` &nbsp; (c) T &nbsp; (d) 6T

**ANSWER: (c)** `T = 2 pi sqrt(m/k)` contains no g at all, so the Moon makes no
difference.
> **SHORTCUT:** g appears in the PENDULUM formula, not in the SPRING formula.
> This one line answers a huge number of MCQs.

---

### Q30
A body of mass 1 kg suspended from a spring stretches it by 10 cm. Its period of
oscillation is (g = 10 m/s^2)

(a) 0.628 s &nbsp; (b) 0.314 s &nbsp; (c) 1.256 s &nbsp; (d) 2 s

**ANSWER: (a)**
```
                    e                 0.1
  T  =  2 pi  sqrt( - )  =  6.28 sqrt(-----)  =  6.28 x sqrt(0.01)
                    g                  10

     =  6.28 x 0.1  =  0.628 s
```
> **SHORTCUT:** when the static extension e is given, use `T = 2 pi sqrt(e/g)`
> directly. You never need to find k.

---

### Q31
A spring of force constant k is cut into three equal parts, and two of them are
joined in parallel. The force constant of the combination is

(a) 3k &nbsp; (b) 6k &nbsp; (c) 1.5k &nbsp; (d) k/6

**ANSWER: (b)**
```
  Each third has   k' = 3k

  Two of them in PARALLEL:   3k + 3k  =  6k
```

---

# PATTERN 6 — Time, phase and average values

### Q32
A particle starts from the mean position. The time it takes to reach a
displacement of A/2 is

(a) T/12 &nbsp; (b) T/8 &nbsp; (c) T/6 &nbsp; (d) T/4

**ANSWER: (a)**
```
              2 pi t          A
  y = A sin( -------- )  =  ----
                T             2

       2 pi t        pi                    T
      --------  =   ----      ->    t  =  ----
         T            6                    12
```

---

### Q33
A particle starts from the **extreme** position. The time it takes to reach a
displacement of A/2 is

(a) T/12 &nbsp; (b) T/8 &nbsp; (c) T/6 &nbsp; (d) T/4

**ANSWER: (c)**
```
              2 pi t        A                2 pi t       pi           T
  y = A cos( -------- ) =  ---   ->        --------  =  -----  ->  t = --
                T           2                 T            3           6
```
> **SHORTCUT:** the four "quarter landmarks" are worth memorising.
> ```
>   FROM THE MEAN POSITION       FROM THE EXTREME POSITION
>     to A/2       -> T/12         to A sqrt(3)/2  -> T/12
>     to A/sqrt2   -> T/8          to A/sqrt2      -> T/8
>     to A sqrt3/2 -> T/6          to A/2          -> T/6
>     to A         -> T/4          to 0            -> T/4
> ```

---

### Q34
The average speed of a particle in SHM over one complete oscillation is

(a) zero &nbsp; (b) `4A/T` &nbsp; (c) `2A/T` &nbsp; (d) `A omega`

**ANSWER: (b)**
```
  Total path in one oscillation  =  4A

                     4A
  Average SPEED  =  ----
                     T

  Average VELOCITY over a full oscillation = 0 (displacement is zero).
```

---

### Q35
Two particles execute SHM of the same amplitude and frequency along the same
straight line. They cross each other in opposite directions when their
displacement is half the amplitude. The phase difference between them is

(a) pi/6 &nbsp; (b) pi/3 &nbsp; (c) 2 pi/3 &nbsp; (d) pi

**ANSWER: (c)**
```
  A sin(phase) = A/2   ->   phase = pi/6  or  5 pi/6

  Moving in OPPOSITE directions means they are the two different roots.

  Phase difference = 5 pi/6  -  pi/6  =  4 pi / 6  =  2 pi / 3
```

---

### Q36
Two SHMs `y1 = a sin(omega t)` and `y2 = a sin(omega t + pi/3)` act on the same
particle along the same line. The resultant amplitude is

(a) `a` &nbsp; (b) `a sqrt(2)` &nbsp; (c) `a sqrt(3)` &nbsp; (d) `2a`

**ANSWER: (c)**
```
  R = sqrt( a^2 + a^2 + 2 a a cos(pi/3) )
    = sqrt( a^2 + a^2 + 2 a^2 x 0.5 )
    = sqrt( 3 a^2 )
    = a sqrt(3)

  Quick version for two EQUAL amplitudes:
        R  =  2 a cos( phase difference / 2 )  =  2a cos 30 deg = a sqrt3
```

---

# PATTERN 7 — Damped and forced oscillations, resonance

### Q37
In a damped oscillation `x = A e^(-bt/2m) cos(omega' t)`, the amplitude falls to
`1/e` of its initial value after a time

(a) `m/b` &nbsp; (b) `2m/b` &nbsp; (c) `b/2m` &nbsp; (d) `b/m`

**ANSWER: (b)**
```
  e^( -b t / 2m )  =  e^-1     ->     b t / 2m  =  1

        t  =  2m / b

  The ENERGY falls to 1/e in HALF that time, m/b, because E depends on
  the SQUARE of the amplitude.
```

---

### Q38
In a forced oscillation, the body finally oscillates with

(a) its own natural frequency &nbsp; (b) the frequency of the driving force
(c) the average of both &nbsp; (d) zero frequency

**ANSWER: (b)** In the steady state the driver wins: the body vibrates at the
**driving** frequency, whatever its own natural frequency happens to be.

---

### Q39
The amplitude of a forced oscillation is maximum when

(a) the driving frequency is much less than the natural frequency
(b) the driving frequency is much greater than the natural frequency
(c) the driving frequency equals the natural frequency
(d) damping is zero

**ANSWER: (c)** That is the definition of **resonance**.

---

### Q40
The Tacoma Narrows bridge collapse and soldiers breaking step on a bridge are
both examples of

(a) damping &nbsp; (b) free oscillation &nbsp; (c) resonance &nbsp;
(d) interference

**ANSWER: (c)** In both cases a periodic driving force matched a natural
frequency of the structure and the amplitude built up destructively.

---

### Q41
In a damped oscillation, as time goes on

(a) the amplitude decreases and the period decreases
(b) the amplitude decreases and the period stays practically the same
(c) both stay constant
(d) the amplitude stays the same and the period increases

**ANSWER: (b)** Only the amplitude dies away (exponentially). The period is
essentially unchanged — very slightly longer than the undamped period, since
`omega' = sqrt(k/m - b^2/4m^2)` is a little smaller than `sqrt(k/m)`.

---

# THE LOOKUP TABLE — answer these in 5 seconds

```
  +-------------------------------+-------------------------------------+
  |  ASKED                        |  ANSWER                             |
  +-------------------------------+-------------------------------------+
  |  v_max                        |  A omega    (at the MEAN position)  |
  |  a_max                        |  A omega^2  (at the EXTREME)        |
  |  omega from both maxima       |  a_max / v_max                      |
  |  A from both maxima           |  v_max^2 / a_max                    |
  +-------------------------------+-------------------------------------+
  |  where KE = PE                |  y = A / sqrt(2)  =  0.707 A        |
  |  where KE = 3 PE              |  y = A / 2                          |
  |  where PE = 3 KE              |  y = 0.866 A                        |
  |  where speed = v_max / 2      |  y = 0.866 A                        |
  |  where a = a_max / 2          |  y = A / 2                          |
  +-------------------------------+-------------------------------------+
  |  period of KE or PE variation |  T / 2   (frequency 2n)             |
  |  average KE = average PE      |  E / 2                              |
  |  E depends on                 |  m , A^2 , n^2                      |
  +-------------------------------+-------------------------------------+
  |  mean -> A/2                  |  T / 12                             |
  |  mean -> A/sqrt2              |  T / 8                              |
  |  mean -> extreme              |  T / 4                              |
  |  extreme -> A/2               |  T / 6                              |
  |  average speed over one T     |  4A / T                             |
  +-------------------------------+-------------------------------------+
  |  spring cut into n parts      |  each has k' = n k                  |
  |  springs in parallel          |  k1 + k2   (stiffer, T down)        |
  |  springs in series            |  k1k2/(k1+k2)  (softer, T up)       |
  |  spring on the Moon           |  SAME period (no g in the formula)  |
  |  pendulum on the Moon         |  T x 2.45                           |
  +-------------------------------+-------------------------------------+
  |  amplitude falls to 1/e       |  t = 2m / b                         |
  |  energy falls to 1/e          |  t = m / b                          |
  +-------------------------------+-------------------------------------+
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +----------------------------------+----------------------------------+
  |  IF YOU SEE THIS ...             |  DO THIS IMMEDIATELY             |
  +----------------------------------+----------------------------------+
  |  Any equation with sin or cos    |  The number in front of t IS     |
  |  of t                            |  omega. Write T = 2 pi / omega.  |
  +----------------------------------+----------------------------------+
  |  sin^2 or cos^2 anywhere         |  Frequency DOUBLES, period       |
  |                                  |  HALVES. Answer is pi / omega.   |
  +----------------------------------+----------------------------------+
  |  "maximum velocity" AND          |  omega = a_max / v_max ,         |
  |  "maximum acceleration" given    |  A = v_max^2 / a_max             |
  +----------------------------------+----------------------------------+
  |  "speed at displacement y"       |  v = omega sqrt(A^2 - y^2).      |
  |                                  |  Never differentiate.            |
  +----------------------------------+----------------------------------+
  |  "KE = PE"                       |  y = A / sqrt(2). Do not derive. |
  +----------------------------------+----------------------------------+
  |  "amplitude doubled / halved"    |  E changes by the SQUARE factor  |
  |  and energy asked                |  (x4 or /4).                     |
  +----------------------------------+----------------------------------+
  |  "period of KE variation"        |  T/2. It is NEVER T.             |
  +----------------------------------+----------------------------------+
  |  A LIFT is mentioned with a      |  Pendulum: replace g by g ± a.   |
  |  pendulum                        |  UP -> g+a -> T smaller.         |
  |                                  |  DOWN -> g-a -> T larger.        |
  |                                  |  FREE FALL -> T infinite.        |
  +----------------------------------+----------------------------------+
  |  A LIFT or the MOON is mentioned |  NOTHING CHANGES. There is no g  |
  |  with a SPRING                   |  in T = 2 pi sqrt(m/k).          |
  +----------------------------------+----------------------------------+
  |  "spring cut into n parts"       |  k becomes n times bigger,       |
  |                                  |  T becomes sqrt(n) times smaller.|
  +----------------------------------+----------------------------------+
  |  Two springs drawn side by side  |  PARALLEL: add k directly.       |
  |  Two springs drawn end to end    |  SERIES: add the reciprocals.    |
  +----------------------------------+----------------------------------+
  |  "percentage change in length"   |  dT/T = (1/2)(dl/l). Halve the   |
  |  of a pendulum                   |  percentage. Done.               |
  +----------------------------------+----------------------------------+
  |  "time to go from ... to ..."    |  Use the T/12, T/8, T/6, T/4     |
  |                                  |  landmark table.                 |
  +----------------------------------+----------------------------------+
  |  "graph of a against y"          |  STRAIGHT LINE, negative slope,  |
  |                                  |  slope = -omega^2.               |
  +----------------------------------+----------------------------------+
  |  "graph of v against y"          |  ELLIPSE.                        |
  +----------------------------------+----------------------------------+
  |  Bridge, radio tuning, swing,    |  The answer is RESONANCE.        |
  |  wine glass, earthquake          |                                  |
  +----------------------------------+----------------------------------+
  |  You are stuck, and it is        |  GUESS. There is NO negative     |
  |  EAPCET                          |  marking. Never leave a blank.   |
  +----------------------------------+----------------------------------+
  |  You are stuck, and it is        |  SKIP it. A wrong answer costs   |
  |  JEE Main                        |  you 1 mark.                     |
  +----------------------------------+----------------------------------+
```

```
  UNIT WARNING — the number one cause of wrong answers in this chapter:

      cm  ->  m       divide by 100
      cm/s -> m/s     divide by 100
      g   ->  kg      divide by 1000

  Convert EVERYTHING to SI before you touch a formula.
```
