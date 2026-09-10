# Oscillations — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
Every formula below comes from ONE equation: `a = -omega^2 y`.

---

# 1. PERIODIC MOTION — THE BASIC QUANTITIES

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                        1                                           |
  |     FREQUENCY     n = ---              unit: hertz (Hz)            |
  |                        T                                           |
  |                                                                    |
  |                                2 pi                                |
  |     ANGULAR                                                        |
  |     FREQUENCY   omega = 2 pi n = ------  unit: rad / s             |
  |                                   T                                |
  |                                                                    |
  |                            2 pi                                    |
  |     TIME PERIOD    T   =  ------                                   |
  |                           omega                                    |
  |                                                                    |
  |     TOTAL PATH in one oscillation  =  4 A                          |
  |                                                                    |
  |     Condition for periodicity:   y( t + T )  =  y( t )             |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `n = 1/T` | Converting between period and frequency |
| `omega = 2 pi / T` | Almost every numerical — the FIRST line you write |
| `omega = 2 pi n` | When the frequency is given in Hz |
| `T = time taken / number of oscillations` | When the question gives "40 oscillations in 20 s" |
| `path in one oscillation = 4A` | "Find the distance travelled in one period" |
| `distance in T/4 = A` | "Distance from mean to extreme" |

---

# 2. THE DEFINITION AND EQUATION OF SHM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   DEFINING CONDITION                                               |
  |                                                                    |
  |          a   =   - omega^2   y                                     |
  |                                                                    |
  |   "acceleration proportional to displacement AND directed          |
  |    towards the mean position"                                      |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   DIFFERENTIAL EQUATION                                            |
  |                                                                    |
  |          d2y                                                       |
  |          ----   +   omega^2  y   =   0                             |
  |          dt2                                                       |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   DISPLACEMENT (the solution)                                      |
  |                                                                    |
  |          y   =   A  sin( omega t  +  phi )                         |
  |                                                                    |
  |     or   y   =   A  cos( omega t  +  phi )                         |
  |                                                                    |
  |     A       = amplitude                                            |
  |     omega   = angular frequency                                    |
  |     phi     = phase constant / initial phase / EPOCH               |
  |     (omega t + phi) = PHASE at time t                              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `a = -omega^2 y` | To PROVE a motion is SHM; to find omega from a and y |
| `d2y/dt2 + omega^2 y = 0` | Whenever the question says "differential equation of SHM" |
| `y = A sin(omega t)` | Particle starts from the MEAN position |
| `y = A cos(omega t)` | Particle starts from an EXTREME position |
| `omega = sqrt( |a| / y )` | "Find T when a = 8 m/s^2 at y = 2 m" |

---

# 3. VELOCITY AND ACCELERATION

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   IN TERMS OF TIME                    IN TERMS OF DISPLACEMENT     |
  |                                                                    |
  |   y = A sin(wt + phi)                 -                            |
  |                                                                    |
  |   v = A w cos(wt + phi)               v = w sqrt( A^2 - y^2 )      |
  |                                                                    |
  |   a = -A w^2 sin(wt + phi)            a = - w^2 y                  |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   MAXIMUM VALUES                                                   |
  |                                                                    |
  |      v_max  =  A omega          at the MEAN position    (y = 0)    |
  |      a_max  =  A omega^2        at the EXTREME position (y = ±A)   |
  |                                                                    |
  |   USEFUL COMBINATIONS                                              |
  |                                                                    |
  |      a_max                          v_max^2                        |
  |      -----  =  omega        A  =  ----------                       |
  |      v_max                          a_max                          |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   THE AMPLITUDE EQUATION  (v and y known at one instant)           |
  |                                                                    |
  |            v^2            y^2                                      |
  |         ----------  +  --------  =  1        (an ELLIPSE)          |
  |         A^2 omega^2      A^2                                       |
  |                                                                    |
  |   GIVEN v1 at y1 AND v2 at y2:                                     |
  |                                                                    |
  |                    v1^2 - v2^2                                     |
  |     omega = sqrt( --------------- )                                |
  |                    y2^2 - y1^2                                     |
  |                                                                    |
  |                    v1^2 y2^2  -  v2^2 y1^2                         |
  |     A     = sqrt( --------------------------- )                    |
  |                          v1^2 - v2^2                               |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `v = omega sqrt(A^2 - y^2)` | Speed at a GIVEN displacement (the most used formula) |
| `v_max = A omega` | "Maximum speed", "speed at the mean position" |
| `a_max = A omega^2` | "Maximum acceleration", "acceleration at the extreme" |
| `omega = a_max / v_max` | Both maxima given, find T |
| `A = v_max^2 / a_max` | Both maxima given, find amplitude |
| `omega = sqrt((v1^2-v2^2)/(y2^2-y1^2))` | Two speeds at two positions given |

## Phase relations — one line to memorise

```
  +---------------------------------------------------------------+
  |                                                               |
  |    v  LEADS  y  by  pi/2  (90 degrees)                        |
  |    a  LEADS  v  by  pi/2  (90 degrees)                        |
  |    a  is OPPOSITE to  y :  phase difference  pi (180 deg)     |
  |                                                               |
  +---------------------------------------------------------------+

  Phase difference from a time lag:      d(phase) = (2 pi / T) x dt
```

---

# 4. GRAPHS — WHAT SHAPE IS IT?

```
  +----------------------+------------------------------------------------+
  |  GRAPH               |  SHAPE                                         |
  +----------------------+------------------------------------------------+
  |  y  against  t       |  sine curve                                    |
  |  v  against  t       |  cosine curve (leads y by 90 deg)              |
  |  a  against  t       |  inverted sine curve (180 deg out with y)      |
  +----------------------+------------------------------------------------+
  |  v  against  y       |  ELLIPSE                                       |
  |  a  against  y       |  STRAIGHT LINE through the origin,             |
  |                      |  slope = -omega^2  (NEGATIVE)                  |
  |  a  against  v       |  ELLIPSE                                       |
  |  F  against  y       |  STRAIGHT LINE, slope = -k (NEGATIVE)          |
  +----------------------+------------------------------------------------+
  |  KE against  y       |  DOWNWARD parabola, maximum at y = 0           |
  |  PE against  y       |  UPWARD parabola, zero at y = 0                |
  |  E  against  y       |  HORIZONTAL straight line (constant)           |
  |  KE, PE against t    |  each repeats TWICE per oscillation            |
  +----------------------+------------------------------------------------+
  |  T^2 against l       |  STRAIGHT LINE, slope = 4 pi^2 / g             |
  |  (pendulum)          |  -> used to find g in the lab                  |
  +----------------------+------------------------------------------------+
```

---

# 5. SHM AND UNIFORM CIRCULAR MOTION

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  SHM is the PROJECTION of uniform circular motion on any           |
  |  diameter of the REFERENCE CIRCLE.                                 |
  |                                                                    |
  |     radius of the circle       ->   amplitude  A                   |
  |     angular speed              ->   angular frequency  omega       |
  |     time for one revolution    ->   time period  T                 |
  |     tangential speed  A omega  ->   v_max                          |
  |     centripetal accn A omega^2 ->   a_max                          |
  |                                                                    |
  |     Projection on the Y-diameter:   y = A sin(omega t + phi)       |
  |     Projection on the X-diameter:   x = A cos(omega t + phi)       |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# 6. ENERGY IN SHM  *** always asked ***

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   KINETIC ENERGY                                                   |
  |                                                                    |
  |     KE  =  (1/2) m v^2  =  (1/2) m omega^2 ( A^2 - y^2 )           |
  |                                                                    |
  |         =  (1/2) m A^2 omega^2 cos^2(omega t + phi)                |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   POTENTIAL ENERGY                                                 |
  |                                                                    |
  |     PE  =  (1/2) m omega^2 y^2   =   (1/2) k y^2                   |
  |                                                                    |
  |         =  (1/2) m A^2 omega^2 sin^2(omega t + phi)                |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TOTAL ENERGY   ( THE ONE TO MEMORISE )                           |
  |                                                                    |
  |     E  =  KE + PE  =  (1/2) m omega^2 A^2                          |
  |                                                                    |
  |        =  (1/2) k A^2                                              |
  |                                                                    |
  |        =  2 pi^2 m n^2 A^2                                         |
  |                                                                    |
  |     E is CONSTANT — it does not depend on y or on t.               |
  |     E is proportional to  m ,  A^2  and  n^2 .                     |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Standard energy results — learn the table, skip the algebra

```
  +------------------------+---------------+---------------+------------+
  |  POSITION              |  KE           |  PE           |  KE : PE   |
  +------------------------+---------------+---------------+------------+
  |  y = 0  (mean)         |  E            |  0            |  all KE    |
  |  y = A/2               |  3E / 4       |  E / 4        |  3 : 1     |
  |  y = A / sqrt(2)       |  E / 2        |  E / 2        |  1 : 1     |
  |  y = A sqrt(3) / 2     |  E / 4        |  3E / 4       |  1 : 3     |
  |  y = A  (extreme)      |  0            |  E            |  all PE    |
  +------------------------+---------------+---------------+------------+

  General ratio at displacement y :

           KE        A^2 - y^2
          ----  =  -------------
           PE           y^2

  Averages over one full period:

          <KE>  =  <PE>  =  (1/4) m omega^2 A^2  =  E / 2
```

```
  +-------------------------------------------------------------------+
  |  FREQUENCY OF THE ENERGY VARIATION                                |
  |                                                                   |
  |     frequency of KE  =  frequency of PE  =  2n                    |
  |     period of KE     =  period of PE     =  T / 2                 |
  |                                                                   |
  |  KE and PE each complete TWO cycles in ONE oscillation.           |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `E = (1/2) m omega^2 A^2` | "Total energy", "energy of the oscillator" |
| `KE = (1/2) m omega^2 (A^2 - y^2)` | KE at a given displacement |
| `PE = (1/2) m omega^2 y^2` | PE at a given displacement |
| `KE/PE = (A^2-y^2)/y^2` | "At what displacement is KE = 3 PE?" |
| `y = A/sqrt(2)` | "Where is KE equal to PE?" |
| `E is proportional to A^2` | "Amplitude doubled — what happens to the energy?" |

---

# 7. THE FORCE LAW FOR SHM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |      F   =   - k y      =   - m omega^2 y                          |
  |                                                                    |
  |      k   =   m omega^2          FORCE CONSTANT , unit N / m        |
  |                                 dimensions [ M T^-2 ]              |
  |                                                                    |
  |                     k                            m                 |
  |      omega  =  sqrt(---)         T  =  2 pi sqrt(---)              |
  |                     m                            k                 |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The six-step recipe used in EVERY derivation

```
  1.  Displace by y            4.  Divide by m:  a = -(const/m) y
  2.  Find the restoring F     5.  Compare: omega^2 = const / m
  3.  Show F = -(const) y      6.  T = 2 pi / omega
```

---

# 8. THE SIMPLE PENDULUM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     Restoring force    F  =  - mg sin theta  =  - (mg / l) x       |
  |                                                                    |
  |                              g                                     |
  |     Acceleration       a = - - x        ->    omega^2 = g / l      |
  |                              l                                     |
  |                                                                    |
  |                             l                                      |
  |          T   =   2 pi  sqrt(---)                                   |
  |                             g                                      |
  |                                                                    |
  |                    1          g                                    |
  |          n   =   ------  sqrt(---)                                 |
  |                   2 pi        l                                    |
  |                                                                    |
  |                    4 pi^2  l                                       |
  |          g   =   -------------          (lab method: find g)       |
  |                       T^2                                          |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Seconds pendulum

```
  +---------------------------------------------------------------+
  |   T  =  2 s  EXACTLY                                          |
  |   l  =  0.9927 m   (about 1 metre)  at  g = 9.8 m/s^2         |
  |   Its frequency is 0.5 Hz.                                    |
  |   It completes HALF an oscillation each second.               |
  +---------------------------------------------------------------+
```

## Effective g in different situations

```
  +--------------------------------+-------------------+---------------+
  |  SITUATION                     |  g_effective      |  T            |
  +--------------------------------+-------------------+---------------+
  |  Lift accelerating UP  (a)     |  g + a            |  DECREASES    |
  |  Lift accelerating DOWN (a)    |  g - a            |  INCREASES    |
  |  Lift at constant velocity     |  g                |  UNCHANGED    |
  |  Lift in FREE FALL (a = g)     |  0                |  INFINITE     |
  |                                |                   |  (no oscill.) |
  +--------------------------------+-------------------+---------------+
  |  At height h above the surface |  g (1 - 2h/R)     |  INCREASES    |
  |  At depth d below the surface  |  g (1 - d/R)      |  INCREASES    |
  |  On the Moon                   |  g / 6            |  x 2.45       |
  |  At the poles                  |  maximum g        |  MINIMUM T    |
  |  At the equator                |  minimum g        |  MAXIMUM T    |
  +--------------------------------+-------------------+---------------+
  |  Car turning a corner with     |  sqrt(g^2 + a^2)  |  DECREASES    |
  |  horizontal acceleration a     |                   |               |
  +--------------------------------+-------------------+---------------+
```

## Percentage-change shortcuts (very fast for MCQs)

```
  Since  T  is proportional to  sqrt(l)  and  1 / sqrt(g) :

       dT           1   dl        1   dg
      ----  x 100 = - ( ---- ) -  - ( ---- )   , all in percent
       T            2    l         2    g

  Examples:
       length increased by 4 %      ->   T increases by 2 %
       length increased by 21 %     ->   T becomes 1.1 times (sqrt 1.21)
       g decreased by 2 %           ->   T increases by 1 %
       length made 4 times          ->   T becomes 2 times
       length made 1/4              ->   T becomes half
```

---

# 9. LOADED SPRING

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     Hooke's law        F  =  - k y                                 |
  |                                                                    |
  |                             m                                      |
  |     BOTH horizontal    T = 2 pi sqrt( - )                          |
  |     and vertical                      k                            |
  |                                                                    |
  |     Vertical spring, static extension e   (because m g = k e):     |
  |                                                                    |
  |                             e                       m g            |
  |                T = 2 pi sqrt( - )        and   k = -----           |
  |                             g                        e             |
  |                                                                    |
  |     T does NOT contain g -> the period is the SAME on the Moon     |
  |     and inside a freely falling lift.                              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Combinations of springs

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |    SERIES (end to end, same force)                                 |
  |                                                                    |
  |         1        1       1                    k1 k2                |
  |       -----  =  ----  + ----     ->   k_s = ---------              |
  |        k_s       k1      k2                  k1 + k2               |
  |                                                                    |
  |       k_s is SMALLER  ->  softer  ->  T INCREASES                  |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |    PARALLEL (side by side, same extension)                         |
  |                                                                    |
  |         k_p  =  k1  +  k2                                          |
  |                                                                    |
  |       k_p is LARGER  ->  stiffer  ->  T DECREASES                  |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |    CUTTING A SPRING     k is proportional to  1 / length           |
  |                                                                    |
  |       cut into n equal parts  ->  each part has  k' = n k          |
  |       cut in the ratio a : b  ->  k1 = k(a+b)/a , k2 = k(a+b)/b    |
  |                                                                    |
  |       cutting always makes k BIGGER, so T gets SMALLER             |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `T = 2 pi sqrt(m/k)` | Any spring-mass system, horizontal or vertical |
| `T = 2 pi sqrt(e/g)` | Static extension e given instead of k |
| `k = mg/e` | To find k from "the spring stretches e cm under mass m" |
| `1/k_s = 1/k1 + 1/k2` | Springs joined end to end |
| `k_p = k1 + k2` | Springs side by side |
| `k' = n k` | Spring cut into n equal parts |

---

# 10. DAMPED OSCILLATIONS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Damping force        F  =  - b v                                 |
  |                        b = damping constant, unit kg/s, [ M T^-1 ] |
  |                                                                    |
  |   Equation of motion                                               |
  |                                                                    |
  |            d2x        dx                                           |
  |          m ---  +  b  --  +  k x  =  0                             |
  |            dt2        dt                                           |
  |                                                                    |
  |   Solution                                                         |
  |                                                                    |
  |          x  =  A e^( -b t / 2m )  cos( omega' t + phi )            |
  |                                                                    |
  |   Amplitude at time t                                              |
  |                                                                    |
  |          A(t)  =  A  e^( -b t / 2m )     (EXPONENTIAL decay)       |
  |                                                                    |
  |   Damped angular frequency                                         |
  |                                                                    |
  |                       k        b^2                                 |
  |          omega' = sqrt( -  -  ------ )      (slightly less         |
  |                       m       4 m^2          than sqrt(k/m))       |
  |                                                                    |
  |   Energy at time t                                                 |
  |                                                                    |
  |          E(t)  =  (1/2) k A^2  e^( -b t / m )                      |
  |                                                                    |
  |          (energy dies at TWICE the rate of the amplitude)          |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# 11. FORCED OSCILLATIONS AND RESONANCE

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Driving force        F  =  F0 cos( omega_d t )                   |
  |                                                                    |
  |   Steady-state amplitude                                           |
  |                                                                    |
  |                              F0                                    |
  |     A  =  ------------------------------------------               |
  |            sqrt[ m^2 (w0^2 - wd^2)^2  +  b^2 wd^2 ]                |
  |                                                                    |
  |   RESONANCE:      omega_d  =  omega_0  =  sqrt( k / m )            |
  |                                                                    |
  |                   amplitude at resonance  =  F0 / (b omega_0)      |
  |                                                                    |
  |   Less damping  ->  taller and sharper resonance peak              |
  |   More damping  ->  shorter and broader peak                       |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Term | One-line definition |
|---|---|
| Free oscillation | Body oscillates at its own natural frequency with constant amplitude |
| Damped oscillation | Amplitude falls exponentially because of a resistive force |
| Forced oscillation | Body is driven by an external periodic force and vibrates at the DRIVER'S frequency |
| Resonance | Driving frequency = natural frequency, so the amplitude becomes maximum |
| Natural frequency | The frequency at which the body oscillates when left to itself |

---

# 12. OTHER SYSTEMS THAT PERFORM SHM

```
  +---------------------------------------+----------------------------+
  |  SYSTEM                               |  TIME PERIOD               |
  +---------------------------------------+----------------------------+
  |  Simple pendulum, length l            |  2 pi sqrt( l / g )        |
  |  Loaded spring                        |  2 pi sqrt( m / k )        |
  |  Vertical spring, extension e         |  2 pi sqrt( e / g )        |
  |  Liquid column of total length L in   |  2 pi sqrt( L / 2g )       |
  |  a U-tube                             |                            |
  |  Cylinder of length L, density rho,   |  2 pi sqrt(L rho /         |
  |  floating in a liquid of density s    |            (s g))          |
  |  Body dropped in a tunnel through     |  2 pi sqrt( R / g )        |
  |  the Earth                            |  = 84.6 minutes            |
  |  Pendulum of INFINITE length          |  2 pi sqrt( R / g )        |
  |  (l much greater than R)              |  = 84.6 minutes            |
  +---------------------------------------+----------------------------+
```

---

# 13. UNITS AND DIMENSIONS

```
  +-------------------------+----------------+-----------------------+
  |  QUANTITY               |  SI UNIT       |  DIMENSIONS           |
  +-------------------------+----------------+-----------------------+
  |  Time period  T         |  s             |  [ T ]                |
  |  Frequency  n           |  hertz (Hz)    |  [ T^-1 ]             |
  |  Angular frequency w    |  rad / s       |  [ T^-1 ]             |
  |  Amplitude  A           |  m             |  [ L ]                |
  |  Phase / phase constant |  radian        |  DIMENSIONLESS        |
  |  Force constant  k      |  N / m         |  [ M T^-2 ]           |
  |  Damping constant  b    |  kg / s        |  [ M T^-1 ]           |
  |  Energy  E              |  joule (J)     |  [ M L^2 T^-2 ]       |
  +-------------------------+----------------+-----------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+---------------------------------------------------------------+
  | 1  |  a  =  - omega^2 y                     (definition of SHM)    |
  +----+---------------------------------------------------------------+
  | 2  |  y  =  A sin( omega t + phi )                                 |
  +----+---------------------------------------------------------------+
  | 3  |  omega  =  2 pi / T  =  2 pi n                                |
  +----+---------------------------------------------------------------+
  | 4  |  v  =  omega sqrt( A^2 - y^2 )                                |
  +----+---------------------------------------------------------------+
  | 5  |  v_max = A omega   (mean)  ,  a_max = A omega^2  (extreme)    |
  +----+---------------------------------------------------------------+
  | 6  |  KE  =  (1/2) m omega^2 ( A^2 - y^2 )                         |
  +----+---------------------------------------------------------------+
  | 7  |  PE  =  (1/2) m omega^2 y^2                                   |
  +----+---------------------------------------------------------------+
  | 8  |  E   =  (1/2) m omega^2 A^2      (CONSTANT)                   |
  +----+---------------------------------------------------------------+
  | 9  |  F  =  -k y   ,   omega = sqrt( k / m )                       |
  +----+---------------------------------------------------------------+
  | 10 |  T  =  2 pi sqrt( l / g )              (simple pendulum)      |
  +----+---------------------------------------------------------------+
  | 11 |  T  =  2 pi sqrt( m / k )              (loaded spring)        |
  +----+---------------------------------------------------------------+
  | 12 |  series: 1/k = 1/k1 + 1/k2   ,   parallel: k = k1 + k2        |
  +----+---------------------------------------------------------------+
```

**If you can only remember TWO:** `a = -omega^2 y` and `T = 2 pi sqrt(l/g)`.
Those two alone are worth about 10 of the marks this chapter carries.
