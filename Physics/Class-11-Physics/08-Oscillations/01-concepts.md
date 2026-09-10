# Oscillations — Concepts Explained Simply

This chapter is about anything that swings, bounces or vibrates: a pendulum in a
clock, a mass on a spring, a tuning fork, your heartbeat, the atoms in a solid.

There is only ONE new idea in the whole chapter — simple harmonic motion — and
everything else is squeezed out of it by differentiating or by drawing a
free-body diagram. Read the topics in order. Do not jump to the pendulum.

---

# TOPIC 1 — Periodic motion and oscillatory motion

## Periodic motion

Any motion that **repeats itself after equal intervals of time** is periodic.

```
  EXAMPLES OF PERIODIC MOTION
  ---------------------------
    The Earth going round the Sun          (repeats every 365.25 days)
    The hands of a clock                   (repeats every 12 hours)
    The blades of a fan                    (repeats every rotation)
    A pendulum swinging                    (repeats every swing)
```

## Oscillatory (vibratory) motion

If the body moves **to and fro about a fixed point** (the mean position), the
periodic motion is called oscillatory.

```
  ALL OSCILLATORY MOTION IS PERIODIC.
  NOT ALL PERIODIC MOTION IS OSCILLATORY.

  +------------------------------------------------------------+
  |                                                            |
  |     +---------------- PERIODIC ---------------+            |
  |     |                                         |            |
  |     |   Earth round the Sun                   |            |
  |     |   fan blades                            |            |
  |     |   circular motion                       |            |
  |     |                                         |            |
  |     |     +------- OSCILLATORY -------+       |            |
  |     |     |                           |       |            |
  |     |     |  pendulum                 |       |            |
  |     |     |  mass on a spring         |       |            |
  |     |     |  tuning fork              |       |            |
  |     |     |  vibrating string         |       |            |
  |     |     |                           |       |            |
  |     |     +---------------------------+       |            |
  |     +-----------------------------------------+            |
  +------------------------------------------------------------+
```

The Earth going round the Sun is periodic but NOT oscillatory — it never goes
back and forth about a point; it keeps going round.

## The picture to keep in your head

```
                    the swing of a pendulum

           \        |        /
            \       |       /
             \      |      /
              \     |     /
               \    |    /
                \   |   /
                 \  |  /
                  \ | /
                   \|/
        LEFT        O        RIGHT
       EXTREME    MEAN      EXTREME
         (-A)   POSITION      (+A)
                 (y = 0)

    At the MEAN position    :  speed is MAXIMUM , acceleration is ZERO
    At the EXTREME positions:  speed is ZERO    , acceleration is MAXIMUM
```

Burn that box into your memory. It answers about six different 2-mark questions.

## Period and frequency

```
  +--------------------------------------------------------------+
  |                                                              |
  |  TIME PERIOD  T  =  the time taken for ONE complete           |
  |                     oscillation.        Unit: second (s)     |
  |                                                              |
  |  FREQUENCY    n  =  the number of oscillations in ONE second |
  |                                                              |
  |                          1                                   |
  |                     n = ---            Unit: hertz (Hz)      |
  |                          T                                   |
  |                                                              |
  |  ANGULAR FREQUENCY  omega  =  2 pi n  =  2 pi / T            |
  |                                        Unit: rad / s         |
  |                                                              |
  +--------------------------------------------------------------+
```

> **TRAP:** "One complete oscillation" means the body returns to the SAME point
> moving in the SAME direction. A pendulum going from the left extreme to the
> right extreme has done only HALF an oscillation, not one.

## The displacement function

For any periodic motion, the displacement at time t must satisfy

```
      y( t + T )  =  y( t )          for every t
```

Sine and cosine are the natural functions with this property, because
`sin(theta + 2 pi) = sin theta`. That is exactly why every oscillation formula
in Physics is built out of sines and cosines.

## WORKED EXAMPLE 1

*A body completes 300 oscillations in 1 minute. Find its time period, frequency
and angular frequency.*

```
  Number of oscillations  =  300
  Time                    =  1 minute  =  60 s

              time            60
  T   =  ---------------  =  -----  =  0.2 s
         no. of oscill.       300

              1        1
  n   =  ---------  = -----  =  5 Hz
              T        0.2

  omega  =  2 pi n  =  2 x 3.14 x 5  =  31.4 rad / s
```

---

# TOPIC 2 — Simple harmonic motion (SHM): the definition

This is the single most important paragraph in the chapter. Learn it word for
word.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   DEFINITION OF SHM                                              |
  |                                                                  |
  |   A body is said to be in simple harmonic motion if its          |
  |   ACCELERATION is                                                |
  |                                                                  |
  |       (i)  directly PROPORTIONAL to its displacement from        |
  |            the mean position, and                                |
  |                                                                  |
  |       (ii) always directed TOWARDS the mean position.            |
  |                                                                  |
  |   In symbols:                                                    |
  |                                                                  |
  |            a   is proportional to   -y                           |
  |                                                                  |
  |            a  =  - omega^2  y                                    |
  |                                                                  |
  |   where omega^2 is a positive constant.                          |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Why the minus sign matters more than anything else

```
      y is POSITIVE (body is to the RIGHT of the mean position)
                    |
                    v
      a = -omega^2 y  is NEGATIVE  ->  acceleration points LEFT
                                      i.e. back towards the middle


      y is NEGATIVE (body is to the LEFT of the mean position)
                    |
                    v
      a = -omega^2 y  is POSITIVE  ->  acceleration points RIGHT
                                      i.e. back towards the middle
```

So the minus sign is the mathematical way of saying **"always pushed back
home"**. That restoring push is what makes the motion repeat forever instead of
running away.

> **TRAP:** In the exam, writing only `a = omega^2 y` (no minus) costs you the
> mark, because without the minus sign the body would accelerate AWAY from the
> centre and never come back. Also, saying only "a is proportional to y" is a
> half answer. You must add "and directed towards the mean position".

## The differential equation of SHM

Acceleration is the second derivative of displacement, so

```
        d2y
        ----   =   - omega^2  y
        dt2

  which is written in the standard form


  +-----------------------------------------+
  |                                         |
  |      d2y                                |
  |      ----   +   omega^2  y   =   0      |
  |      dt2                                |
  |                                         |
  +-----------------------------------------+

  This is THE differential equation of SHM.
  Any body whose motion obeys it performs SHM.
```

## The solution — the displacement equation

The function whose second derivative is `-omega^2` times itself is a sine (or a
cosine). So the general solution is

```
  +---------------------------------------------------------+
  |                                                         |
  |      y   =   A  sin ( omega t  +  phi )                 |
  |                                                         |
  |  y      displacement from the mean position at time t   |
  |  A      amplitude (the maximum displacement)            |
  |  omega  angular frequency  (rad / s)                    |
  |  phi    phase constant / initial phase / EPOCH          |
  |  (omega t + phi)   the PHASE at time t                  |
  |                                                         |
  +---------------------------------------------------------+
```

`y = A cos(omega t + phi)` is equally correct — cosine is just a sine shifted by
90 degrees. Use sine if the body starts at the mean position, cosine if it
starts at an extreme position.

```
   STARTS AT THE MEAN POSITION  (y = 0 at t = 0)   ->   y = A sin(omega t)
   STARTS AT AN EXTREME POINT   (y = A at t = 0)   ->   y = A cos(omega t)
```

## Check that it really is a solution

```
   y   =  A sin(omega t + phi)

   dy
   --  =  A omega cos(omega t + phi)
   dt

   d2y
   ---  =  -A omega^2 sin(omega t + phi)   =   - omega^2 y      TICK
   dt2
```

The second derivative came out equal to `-omega^2` times the original. That is
the proof, and it is worth 2 marks on its own.

## WORKED EXAMPLE 2

*The displacement of a particle is y = 5 sin(4 t + pi/6) metre. Find (a) the
amplitude (b) the angular frequency (c) the time period (d) the frequency
(e) the initial phase.*

```
  Compare with the standard form   y = A sin(omega t + phi)

  (a)  A      =  5 m

  (b)  omega  =  4 rad / s

              2 pi        2 x 3.14
  (c)  T  =  ------  =  ------------  =  1.57 s
             omega           4

              1         1
  (d)  n  =  ---  =  -------  =  0.637 Hz
              T        1.57

  (e)  phi    =  pi / 6  rad   =  30 degrees
```

---

# TOPIC 3 — Amplitude, phase, phase constant and epoch

These are pure-definition 2-mark questions. Learn them exactly.

```
  +----------------+--------------------------------------------------+
  |  TERM          |  MEANING                                         |
  +----------------+--------------------------------------------------+
  |  DISPLACEMENT  |  distance of the body from the MEAN position at  |
  |  y             |  any instant, with a sign.                       |
  +----------------+--------------------------------------------------+
  |  AMPLITUDE     |  the MAXIMUM displacement on either side of the  |
  |  A             |  mean position. Always positive.                 |
  |                |  Total path in one oscillation = 4A.             |
  +----------------+--------------------------------------------------+
  |  TIME PERIOD   |  time for one complete oscillation.              |
  |  T             |  T = 2 pi / omega                                |
  +----------------+--------------------------------------------------+
  |  FREQUENCY     |  oscillations per second, n = 1/T, in hertz.     |
  |  n             |                                                  |
  +----------------+--------------------------------------------------+
  |  ANGULAR       |  omega = 2 pi n = 2 pi / T, in rad/s.            |
  |  FREQUENCY     |  It fixes how FAST the oscillation runs.         |
  +----------------+--------------------------------------------------+
  |  PHASE         |  the whole angle (omega t + phi). It tells you   |
  |                |  the STATE of the particle: where it is and      |
  |                |  which way it is moving. Measured in radians.    |
  +----------------+--------------------------------------------------+
  |  PHASE         |  the value of the phase at t = 0, i.e. phi.      |
  |  CONSTANT      |  Also called the INITIAL PHASE or the EPOCH.     |
  |  (EPOCH)       |  It tells you where the motion started from.     |
  +----------------+--------------------------------------------------+
```

## What "phase" really means, in plain English

Two children on two identical swings, swinging with the same period:

```
   IN PHASE  (phase difference = 0)          They move forward together
        \  |  /        \  |  /               and backward together.
         \ | /          \ | /
          \|/            \|/


   OUT OF PHASE  (phase difference = pi)     One goes forward exactly
        \  |  /        \  |  /               when the other goes back.
         \ | /            /|
          \|/            / |
```

The phase difference is the "how far behind" number.

```
   phase difference  in RADIANS  =  (2 pi / T)  x  (time lag)

   phase difference  in RADIANS  =  (2 pi / lambda) x (path difference)
```

> **TRAP:** Amplitude is measured from the MEAN position to one extreme, not
> from one extreme to the other. If a pendulum swings 8 cm from the left extreme
> to the right extreme, the amplitude is 4 cm, not 8 cm.

## WORKED EXAMPLE 3

*A particle in SHM has a time period of 4 s. Find the phase difference between
its positions at t = 1 s and t = 2 s.*

```
  Time lag  =  2 - 1  =  1 s

                       2 pi                2 pi
  Phase difference  =  ----- x time lag = ------ x 1  =  pi/2 rad = 90 deg
                        T                    4
```

---

# TOPIC 4 — Velocity and acceleration in SHM (with derivations)

This derivation appears as a 4-mark Section B question again and again. Write it
in exactly this order.

## Derivation of velocity

```
  START     y  =  A sin(omega t + phi)

  STEP 1    Velocity is the rate of change of displacement:

                       dy       d
                 v  =  --  =   -- [ A sin(omega t + phi) ]
                       dt      dt

  STEP 2           v  =  A omega cos(omega t + phi)          ... (1)

  STEP 3    To get v in terms of y instead of t, use
            sin^2 + cos^2 = 1 :

                                    y
                 sin(omega t + phi) = ---
                                     A

                 cos(omega t + phi) = sqrt( 1 - y^2 / A^2 )

  STEP 4    Put this into (1):

                                          y^2
                 v  =  A omega  sqrt( 1 - ----- )
                                          A^2

  RESULT
            +--------------------------------------------+
            |                                            |
            |     v   =   omega  sqrt( A^2 - y^2 )       |
            |                                            |
            +--------------------------------------------+
```

## Derivation of acceleration

```
  START     v  =  A omega cos(omega t + phi)

  STEP 1    Acceleration is the rate of change of velocity:

                       dv       d
                 a  =  --  =   -- [ A omega cos(omega t + phi) ]
                       dt      dt

  STEP 2           a  =  - A omega^2 sin(omega t + phi)

  STEP 3    But  A sin(omega t + phi)  =  y , so

  RESULT
            +--------------------------------------------+
            |                                            |
            |     a   =   - omega^2  y                   |
            |                                            |
            +--------------------------------------------+

  This is exactly the defining condition of SHM, which PROVES that
  y = A sin(omega t + phi) describes simple harmonic motion.
```

## The maximum and minimum values — a guaranteed 2 marks

```
  +-----------+------------------+-----------------+---------------------+
  | POSITION  |  y               |  SPEED  v       |  ACCELERATION  a    |
  +-----------+------------------+-----------------+---------------------+
  | MEAN      |  y = 0           |  MAXIMUM        |  ZERO               |
  | position  |                  |  v = A omega    |  a = 0              |
  +-----------+------------------+-----------------+---------------------+
  | EXTREME   |  y = +A or -A    |  ZERO           |  MAXIMUM            |
  | position  |                  |  v = 0          |  a = A omega^2      |
  +-----------+------------------+-----------------+---------------------+

       v_max  =  A omega          a_max  =  A omega^2
```

Sanity check with common sense: at the far end of a swing the child is
momentarily at rest (v = 0) but is being yanked back hardest (a is maximum). At
the bottom, the child is flying fastest but feels no sideways pull. The maths
agrees with the playground.

## The three graphs against time (take y = A sin omega t, phi = 0)

```
       y = A sin(wt)
   +A  |     ,-''-.                    ,-''-.
       |   ,'      `.                ,'      `.
    y  |  /          \              /          \
     0 +-/------------\------------/------------\------> t
       |/    T/2       \   T      /              \
   -A  |                `.      ,'                `.
       |                  `-..-'                    `-..


       v = Aw cos(wt)               v LEADS y by pi/2 (90 deg)
  +Aw  |,-''-.                    ,-''-.
       |      `.                ,'      `.
    v  |        \              /          \
     0 +---------\------------/------------\--------> t
       |          \          /              \
  -Aw  |           `.      ,'                `.
       |             `-..-'                    `-..


       a = -Aw^2 sin(wt)            a is ANTI-PHASE with y (180 deg)
 +Aw^2 |                ,-''-.                   ,-''-.
       |              ,'      `.               ,'      `.
    a  |             /          \             /          \
     0 +------------/------------\-----------/------------\--> t
       |  \        /              \         /
 -Aw^2 |   `.    ,'                `.     ,'
       |     `-.'                    `-..'
```

```
  PHASE DIFFERENCES  -  memorise this line
  ---------------------------------------------------------------
     velocity     LEADS  displacement  by  pi/2   (90 degrees)
     acceleration LEADS  velocity      by  pi/2   (90 degrees)
     acceleration is OPPOSITE to displacement:  pi (180 degrees)
```

## The v-y graph and the a-y graph

```
  v AGAINST y   ->   an ELLIPSE

          v^2            y^2
       ----------  +  --------  =  1
       A^2 omega^2      A^2

                    v
              +Aw   |
                 ..-+-..
               .'   |   `.
        -------+----+----+------- y
              -A    |    +A
               `.   |   .'
                 ''-+-''
              -Aw   |

  If v is plotted against y the curve is an ellipse.
  (It becomes a CIRCLE only if omega = 1.)


  a AGAINST y   ->   a STRAIGHT LINE through the origin
                     with NEGATIVE slope equal to -omega^2

                    a
            +Aw^2   |
                  \ |
                   \|
        ------------+------------ y
              -A    |\    +A
                    | \
            -Aw^2   |  \

  slope  =  - omega^2      ->      omega = sqrt( -slope )
```

> **TRAP:** The a-y graph is a straight line with a NEGATIVE slope. Many
> students draw a positive slope and lose the mark. The negative slope IS the
> definition of SHM.

## WORKED EXAMPLE 4

*A particle executes SHM of amplitude 5 cm and period 2 s. Find its speed and
acceleration when it is 3 cm from the mean position.*

```
  A = 5 cm = 0.05 m ,  y = 3 cm = 0.03 m ,  T = 2 s

           2 pi      2 x 3.14
  omega =  ----  =  ----------  =  3.14 rad / s
            T           2

  v  =  omega sqrt(A^2 - y^2)
     =  3.14 x sqrt( 0.05^2 - 0.03^2 )
     =  3.14 x sqrt( 0.0025 - 0.0009 )
     =  3.14 x sqrt( 0.0016 )
     =  3.14 x 0.04
     =  0.1256 m / s      (about 12.6 cm/s)

  a  =  - omega^2 y
     =  - (3.14)^2 x 0.03
     =  - 9.86 x 0.03
     =  - 0.296 m / s^2

  The minus sign means the acceleration points back towards the mean
  position. Its magnitude is 0.296 m/s^2.
```

## WORKED EXAMPLE 5

*A body in SHM has a maximum speed of 30 cm/s and a maximum acceleration of
60 cm/s^2. Find the amplitude and period.*

```
  v_max  =  A omega       =  30
  a_max  =  A omega^2     =  60

  Divide:      a_max      A omega^2       60
              -------  =  ----------  =  -----     ->   omega = 2 rad/s
               v_max      A omega         30

  Then:       A  =  v_max / omega  =  30 / 2  =  15 cm

              T  =  2 pi / omega  =  2 x 3.14 / 2  =  3.14 s
```

---

# TOPIC 5 — SHM as the projection of uniform circular motion

This gives you a picture of where the sine comes from, and it is a standard
4-mark question ("Show that the projection of uniform circular motion on a
diameter is SHM").

```
                        THE REFERENCE CIRCLE

                            Y
                            |
                       .----+----.
                    .'      |      `.
                  .'    P   |        `.        P moves round the circle
                 /       \  |          \       with constant angular
                /         \ |           \      speed omega.
               |           \|            |
               |         N  +------------|--- X        N is the FOOT of the
               |            | \          |             perpendicular from P
                \           |  \        /              onto the Y axis
                 \          |   \      /               (its "shadow").
                  `.        |    \   .'
                    `.      |     `.'
                       `----+----'
                            |

     Angle turned in time t  =  omega t + phi
     Radius of circle        =  A

     Projection on the Y axis:   y  =  A sin( omega t + phi )
```

**The proof, in five lines:**

```
  1.  P moves on a circle of radius A with constant angular speed omega.
  2.  After time t its angular position is (omega t + phi).
  3.  Its projection on the Y-diameter is  y = A sin(omega t + phi).
  4.  Differentiating twice:  d2y/dt2 = -omega^2 A sin(omega t + phi)
                                      = -omega^2 y
  5.  Acceleration is proportional to displacement and directed towards
      the centre, so N executes SIMPLE HARMONIC MOTION.

  CONCLUSION:  SHM is the projection of uniform circular motion on any
               diameter of the reference circle.
```

Why this is useful:

```
  The circle radius       ->  the AMPLITUDE  A
  The angular speed       ->  the ANGULAR FREQUENCY omega
  Time for one revolution ->  the TIME PERIOD  T
  Centripetal accn A w^2  ->  the MAXIMUM ACCELERATION
  Tangential speed A w    ->  the MAXIMUM SPEED
```

Everything in SHM is the shadow of something in circular motion. If you ever
forget `v_max = A omega`, remember that it is just `v = r omega` for a circle.

---

# TOPIC 6 — Energy in SHM

The second big 8-mark question. Do all three derivations.

## 1. Kinetic energy

```
  KE  =  (1/2) m v^2

  and     v  =  omega sqrt(A^2 - y^2)     so  v^2 = omega^2 (A^2 - y^2)

  +---------------------------------------------------------+
  |                                                         |
  |    KE  =  (1/2) m omega^2 ( A^2 - y^2 )                 |
  |                                                         |
  |    In terms of time:                                    |
  |    KE  =  (1/2) m A^2 omega^2 cos^2(omega t + phi)      |
  |                                                         |
  +---------------------------------------------------------+

  At the mean position   (y = 0)   ->   KE is MAXIMUM = (1/2) m omega^2 A^2
  At the extreme         (y = A)   ->   KE = 0
```

## 2. Potential energy

```
  The restoring force is   F  =  -k y   =  - m omega^2 y

  Work done AGAINST this force in moving a further small distance dy is

        dW  =  ( m omega^2 y )  dy

  Total work stored as PE in moving from 0 to y:

        PE  =  INT ( m omega^2 y ) dy   from 0 to y

            =  m omega^2 [ y^2 / 2 ]  from 0 to y

  +---------------------------------------------------------+
  |                                                         |
  |    PE  =  (1/2) m omega^2 y^2      =   (1/2) k y^2      |
  |                                                         |
  |    In terms of time:                                    |
  |    PE  =  (1/2) m A^2 omega^2 sin^2(omega t + phi)      |
  |                                                         |
  +---------------------------------------------------------+

  At the mean position   (y = 0)   ->   PE = 0
  At the extreme         (y = A)   ->   PE is MAXIMUM = (1/2) m omega^2 A^2
```

## 3. Total energy

```
  E  =  KE  +  PE

     =  (1/2) m omega^2 (A^2 - y^2)   +   (1/2) m omega^2 y^2

     =  (1/2) m omega^2 A^2  -  (1/2) m omega^2 y^2
                             +  (1/2) m omega^2 y^2

  +---------------------------------------------------------------+
  |                                                               |
  |    E  =  (1/2) m omega^2 A^2   =   (1/2) k A^2                |
  |                                                               |
  |    =  2 pi^2 m n^2 A^2         (using omega = 2 pi n)         |
  |                                                               |
  |    The y terms CANCEL, so the total energy does NOT depend    |
  |    on y. It is CONSTANT throughout the motion.                |
  |                                                               |
  +---------------------------------------------------------------+
```

**Total energy in SHM is proportional to:**

```
     the MASS                m
     the SQUARE of the amplitude    A^2
     the SQUARE of the frequency    n^2  (or omega^2)
```

So doubling the amplitude makes the energy **four** times larger. Doubling the
frequency also makes it four times larger.

## The energy graph against displacement

```
   ENERGY
      |
   E  |\                                             /|
      | \                                           / |   <-- PE = (1/2) m w^2 y^2
      |  \                                         /  |       (parabola opening UP)
      |   \                                       /   |
      |----\-------------------------------------/----|--- TOTAL E (a flat line)
      |     \                                   /     |
      |      \                                 /      |
      |       \                               /       |
      |        \             KE              /        |   <-- KE = (1/2) m w^2 (A^2-y^2)
      |         \         ______            /         |       (parabola opening DOWN)
      |          \  ____--      --____     /          |
      |           -'                  '-  /           |
    0 +-----------+---------+---------+---+---------- y
                 -A         0        +A

    At y = 0   :  KE = maximum , PE = 0
    At y = ±A  :  KE = 0       , PE = maximum
    At every y :  KE + PE = E = constant   (the flat horizontal line)
```

## The energy graph against TIME — the "two cycles" point

```
      |    KE          PE          KE          PE
      |   ,-.         ,-.         ,-.         ,-.
      |  /   \       /   \       /   \       /   \
      | /     \     /     \     /     \     /     \
    0 +/-------\---/-------\---/-------\---/-------\---> t
      |    T/4     T/2    3T/4    T
      |<--------- ONE FULL OSCILLATION --------->|
```

```
  +----------------------------------------------------------------+
  |  IMPORTANT AND OFTEN ASKED:                                    |
  |                                                                |
  |  KE and PE each go from zero to maximum and back to zero       |
  |  TWICE in one complete oscillation.                            |
  |                                                                |
  |  So the FREQUENCY of the energy variation is 2n,               |
  |  and its PERIOD is T/2 — DOUBLE the frequency of the           |
  |  displacement, HALF the period.                                |
  |                                                                |
  |  Reason: KE contains cos^2 and PE contains sin^2, and          |
  |  sin^2 x = (1 - cos 2x)/2  — the "2x" is the doubling.         |
  +----------------------------------------------------------------+
```

## Average energies over one full period

```
  Average KE  =  (1/4) m omega^2 A^2   =   E / 2
  Average PE  =  (1/4) m omega^2 A^2   =   E / 2

  (because the average value of sin^2 and of cos^2 over a period is 1/2)
```

## WORKED EXAMPLE 6

*A body of mass 0.2 kg executes SHM with an amplitude of 10 cm and a period of
2 s. Find (a) the total energy (b) the KE and PE when the displacement is 5 cm.*

```
  m = 0.2 kg ,  A = 0.1 m ,  T = 2 s ,  y = 0.05 m

  omega  =  2 pi / T  =  3.14 rad/s      ->   omega^2 = 9.86

  (a)  E  =  (1/2) m omega^2 A^2
          =  0.5 x 0.2 x 9.86 x (0.1)^2
          =  0.5 x 0.2 x 9.86 x 0.01
          =  9.86 x 10^-3  J        (about 0.00986 J)

  (b)  PE =  (1/2) m omega^2 y^2
          =  0.5 x 0.2 x 9.86 x (0.05)^2
          =  0.5 x 0.2 x 9.86 x 0.0025
          =  2.465 x 10^-3  J

       KE =  E - PE
          =  9.86 x 10^-3  -  2.465 x 10^-3
          =  7.395 x 10^-3  J

  CHECK: at y = A/2 the PE should be E/4 and the KE 3E/4.
         2.465 / 9.86 = 0.25  TICK        7.395 / 9.86 = 0.75  TICK
```

## Two results worth memorising

```
  At  y  =  A / 2      ->   PE = E/4 ,  KE = 3E/4
  At  y  =  A / sqrt2  ->   PE = E/2 ,  KE = E/2   (they are EQUAL here)
```

> **TRAP:** KE = PE happens at `y = A/sqrt(2)`, i.e. at 0.707 A — **not** at
> y = A/2. This is a favourite EAPCET question.

---

# TOPIC 7 — The force law for SHM

## From acceleration to force

```
  Newton's second law:      F  =  m a

  In SHM:                   a  =  - omega^2 y

  Therefore:                F  =  - m omega^2 y

  Write   k = m omega^2   (a positive constant):

  +--------------------------------------------------+
  |                                                  |
  |        F   =   - k y                             |
  |                                                  |
  |   k is the FORCE CONSTANT (or spring constant)   |
  |   Unit of k :   N / m                            |
  |   Dimensions:   [ M T^-2 ]                       |
  |                                                  |
  +--------------------------------------------------+
```

**Alternative definition of SHM (force version):** *SHM is the motion of a body
under a restoring force which is directly proportional to the displacement from
the mean position and always directed towards it.*

## The two relations that fall out of it

```
                k                                       m
  omega  =  sqrt(-)              T  =  2 pi  sqrt( ----- )
                m                                       k

  Both come from  k = m omega^2  and  T = 2 pi / omega.
```

## The universal six-step recipe for ANY oscillation problem

```
  +--------------------------------------------------------------------+
  |  STEP 1   Displace the body a small distance y from equilibrium.   |
  |  STEP 2   Draw the free-body diagram and find the NET restoring    |
  |           force F.                                                 |
  |  STEP 3   Show it has the form  F = -(constant) x y                |
  |  STEP 4   Divide by mass:  a = -(constant / m) x y                 |
  |  STEP 5   Compare with a = -omega^2 y  ->  omega^2 = constant / m  |
  |  STEP 6   T = 2 pi / omega                                         |
  +--------------------------------------------------------------------+
```

Learn this once. It derives the pendulum, both springs, a floating cylinder and
a liquid oscillating in a U-tube.

## WORKED EXAMPLE 7

*A body of mass 0.5 kg oscillates under a force F = -20 y newton. Find the force
constant, the angular frequency and the time period.*

```
  Comparing with  F = -k y :        k = 20 N / m

  omega = sqrt(k/m) = sqrt(20 / 0.5) = sqrt(40) = 6.32 rad/s

  T = 2 pi / omega = 6.28 / 6.32 = 0.99 s   (about 1 s)
```

---

# TOPIC 8 — The simple pendulum

**This is THE 8-mark question of the chapter.** Copy this derivation by hand
three times.

## What a simple pendulum is

```
  IDEAL SIMPLE PENDULUM  =  a point mass (heavy bob) suspended by a
                            weightless, inextensible, perfectly flexible
                            string from a rigid support, free to swing
                            in a vertical plane.
```

## The diagram

```
                    ///////////  rigid support
                        |\
                        | \
                        |  \  string, length l
                theta   |   \
                        |    \
                        |     \
                        |      \
                        |       O   bob, mass m
                        |      /|\
                        |     / | \
                        |    /  |  \
                     mean     /  |   \
                   position  /   |    \
                            /    |     \
                   mg sin theta  |   mg cos theta
                    (restoring)  |    (balanced by
                                 |     the tension)
                                 v
                                mg
```

## THE DERIVATION — write it exactly like this

```
  STEP 1   Let the bob be displaced through a small angle theta.
           Its displacement along the arc is  x = l theta.

  STEP 2   The weight mg is resolved into two components:

             mg cos theta   along the string  -> balanced by tension T
             mg sin theta   perpendicular to the string
                            -> this is the RESTORING force

  STEP 3   The restoring force is directed back towards the mean
           position, so

                  F  =  - mg sin theta

  STEP 4   For SMALL angles (theta less than about 4 degrees, in
           RADIANS),

                  sin theta  is approximately equal to  theta

           so     F  =  - mg theta

  STEP 5   From the geometry,   theta = x / l , therefore

                          m g
                  F  =  - ---  x
                           l

           F is proportional to -x, so the motion is SIMPLE HARMONIC.

  STEP 6   Acceleration:

                  F        g
           a  =  ---  =  - -  x
                  m        l

  STEP 7   Compare with the SHM condition  a = - omega^2 x :

                          g                          g
           omega^2  =  ------      ->   omega = sqrt(---)
                          l                          l

  STEP 8   Time period:

                  2 pi
           T  =  ------
                 omega

  +----------------------------------------------------------+
  |                                                          |
  |                            l                             |
  |          T   =   2 pi  sqrt( - )                         |
  |                            g                             |
  |                                                          |
  |          and the frequency                               |
  |                                                          |
  |                     1          g                         |
  |          n   =   ------  sqrt( - )                       |
  |                   2 pi         l                         |
  |                                                          |
  +----------------------------------------------------------+
```

## The assumptions (worth 2 marks by themselves)

```
  1.  The amplitude is SMALL (theta less than about 4 degrees), so that
      sin theta = theta.
  2.  The string is inextensible, weightless and perfectly flexible.
  3.  The bob is a point mass (its size is negligible compared with l).
  4.  There is no air resistance and no friction at the support.
  5.  The support is rigid and does not move.
  6.  The bob swings in a vertical plane (not in a cone).
  7.  g is constant over the swing.
```

## The four laws of the simple pendulum

```
  +-------------------+--------------------------------------------------+
  |  LAW OF LENGTH    |  T is proportional to sqrt(l)                    |
  +-------------------+--------------------------------------------------+
  |  LAW OF           |  T is inversely proportional to sqrt(g)          |
  |  ACCELERATION     |                                                  |
  +-------------------+--------------------------------------------------+
  |  LAW OF MASS      |  T does NOT depend on the mass or the material   |
  |                   |  of the bob                                      |
  +-------------------+--------------------------------------------------+
  |  LAW OF           |  T does NOT depend on the amplitude              |
  |  ISOCHRONISM      |  (for small amplitudes)                          |
  +-------------------+--------------------------------------------------+
```

> **TRAP:** "Does the period change if the bob is made heavier?" — **NO.**
> m cancels out in Step 6. This is asked almost every year.

## The seconds pendulum

```
  A SECONDS PENDULUM is one whose time period is EXACTLY 2 SECONDS.
  (It ticks once every second — one second per half-swing.)

  Its length:

             T^2 g          (2)^2 x 9.8       4 x 9.8
      l  =  --------  =  ---------------  =  ---------  =  0.9927 m
             4 pi^2        4 x (3.14)^2       39.48

      l  is about  0.993 m ,  i.e. very nearly 1 metre.
```

## Effect of changing things — the summary table

```
  +-----------------------------------+------------------+---------------+
  |  CHANGE                           |  g_effective     |  TIME PERIOD  |
  +-----------------------------------+------------------+---------------+
  |  Length increased                 |  unchanged       |  INCREASES    |
  |  Mass of bob increased            |  unchanged       |  NO CHANGE    |
  |  Amplitude increased (still small)|  unchanged       |  NO CHANGE    |
  +-----------------------------------+------------------+---------------+
  |  Taken to a MOUNTAIN (altitude h) |  g(1 - 2h/R)     |  INCREASES    |
  |  Taken into a MINE (depth d)      |  g(1 - d/R)      |  INCREASES    |
  |  Taken to the MOON (g/6)          |  g / 6           |  INCREASES    |
  |                                   |                  |  (x sqrt 6    |
  |                                   |                  |   = 2.45)     |
  |  Taken to the POLES (g larger)    |  larger          |  DECREASES    |
  |  Taken to the EQUATOR             |  smaller         |  INCREASES    |
  +-----------------------------------+------------------+---------------+
  |  LIFT moving UP with accn a       |  g + a           |  DECREASES    |
  |  LIFT moving DOWN with accn a     |  g - a           |  INCREASES    |
  |  LIFT moving with CONSTANT speed  |  g               |  NO CHANGE    |
  |  LIFT in FREE FALL (a = g)        |  0               |  INFINITE     |
  |                                   |                  |  (does not    |
  |                                   |                  |   oscillate)  |
  +-----------------------------------+------------------+---------------+
```

## The lift, explained properly

```
              LIFT ACCELERATING UPWARD with acceleration a

                    +----------------+
                    |     ^  a       |
                    |     |          |          The bob feels an extra
                    |     |\         |          downward pseudo-force ma.
                    |     | \        |
                    |     |  O       |          g_eff  =  g + a
                    |                |                         l
                    +----------------+          T = 2 pi sqrt(-----)
                                                              g + a
                    T DECREASES  (it ticks faster)


              LIFT ACCELERATING DOWNWARD with acceleration a

                    g_eff  =  g - a
                                                     l
                    T  =  2 pi  sqrt( ------------- )
                                          g - a

                    T INCREASES  (it ticks slower)


              LIFT IN FREE FALL  ( a = g )

                    g_eff  =  g - g  =  0

                    T  =  2 pi sqrt( l / 0 )  =  INFINITY

                    The bob is WEIGHTLESS. There is no restoring force,
                    so the pendulum DOES NOT OSCILLATE at all — it just
                    floats with the string slack.
```

> **TRAP:** In free fall the answer is *"the pendulum does not oscillate; T is
> infinite"* — not *"T becomes zero"*. Write the reason: no restoring force
> because the effective gravity is zero.

## WORKED EXAMPLE 8

*Find the length of a simple pendulum whose time period is 2 s at a place where
g = 9.8 m/s^2. What would its period be on the Moon, where g = 1.63 m/s^2?*

```
  PART 1

              l                        T^2 g       4 x 9.8
  T = 2 pi sqrt(-)     ->     l  =  ---------  =  ---------  =  0.993 m
              g                       4 pi^2        39.48


  PART 2   On the Moon, l is the same but g is 1.63.

                        0.993
  T  =  2 x 3.14 x sqrt(-------)  =  6.28 x sqrt(0.609)
                         1.63

     =  6.28 x 0.7804  =  4.9 s

  SHORT CHECK:   T_moon / T_earth = sqrt(9.8 / 1.63) = sqrt(6.01) = 2.45
                 2 x 2.45 = 4.9 s      TICK
```

## WORKED EXAMPLE 9

*The length of a seconds pendulum is increased by 21 percent. Find the new time
period.*

```
  T is proportional to sqrt(l).

  New length  =  1.21  l

  T_new                             T_new
  ------  =  sqrt(1.21)  =  1.1      ->    ------ = 1.1
  T_old                             2

  T_new  =  2 x 1.1  =  2.2 s
```

---

# TOPIC 9 — Oscillations of a loaded spring

## The horizontal spring

```
        wall
        |///|~~~~~~~~~~~~~~[ m ]        <- equilibrium, spring natural length
        |///|
        |///|~~~~~~~~~~~~~~~~~~[ m ]    <- pulled out by y
        |///|      <--- F = -k y
```

```
  STEP 1   Pull the block a distance y from equilibrium.
  STEP 2   By Hooke's law the spring pulls back with  F = -k y.
  STEP 3   F is proportional to -y   ->  the motion is SHM.
  STEP 4   a = F/m = -(k/m) y
  STEP 5   Comparing with a = -omega^2 y :   omega = sqrt(k/m)
  STEP 6

           +--------------------------------------------+
           |                             m              |
           |     T   =   2 pi  sqrt( ------- )          |
           |                             k              |
           +--------------------------------------------+
```

## The vertical spring — and the neat trick

```
        ///////////
            $
            $  spring, force constant k
            $
            $              natural length
        - - + - - - - - - - - - - - - - - -
            $
            $   e   (extension caused by hanging the mass)
            $
           [m]  <---- equilibrium position:   m g  =  k e
            |
            |   y  (further displacement)
            |
           [m]
```

```
  At equilibrium:      m g  =  k e            ...(1)

  Pull down a further y. The net upward force is

        F  =  - [ k(e + y) - m g ]  =  - [ k e + k y - m g ]

  Using (1),  k e = m g , so the first and last terms cancel:

        F  =  - k y                   ->   SHM again!

  So the SAME formula holds for the vertical spring:

              m                                   e
  T = 2 pi sqrt(-)      and, using (1),  T = 2 pi sqrt(-)
              k                                   g
```

```
  +----------------------------------------------------------------+
  |  IMPORTANT CONSEQUENCE                                         |
  |                                                                |
  |  T = 2 pi sqrt(m/k) does NOT contain g.                        |
  |                                                                |
  |  So a loaded SPRING has the SAME time period on the Moon       |
  |  as on the Earth. A PENDULUM does not.                         |
  |  (In a freely falling lift a spring keeps oscillating          |
  |   normally, while a pendulum stops.)                           |
  +----------------------------------------------------------------+
```

> **TRAP:** Gravity only shifts the mean position of a vertical spring
> downwards by e. It does not change the period. Almost everyone gets this
> wrong the first time.

## Springs in series and in parallel

```
  SERIES  -  springs joined end to end, the SAME force acts through both

        ///////
           $ k1
           $
           $
           $ k2
           $
          [m]

        Total extension  =  e1 + e2

               F      F      F
              ---  =  --  +  --
              k_s     k1     k2

        +-------------------------------------+
        |    1        1        1              |
        |  -----  =  ----  +  ----            |
        |   k_s       k1       k2             |
        |                                     |
        |            k1 k2                    |
        |   k_s  =  --------                  |
        |           k1 + k2                   |
        +-------------------------------------+

        k_s is SMALLER than either spring  ->  T INCREASES (softer)


  PARALLEL  -  springs side by side, the SAME extension in both

        ///////////////
           $ k1   $ k2
           $      $
           +------+
             [ m ]

        Total force  =  F1 + F2  =  k1 y + k2 y

        +-------------------------------------+
        |                                     |
        |     k_p  =  k1  +  k2               |
        |                                     |
        +-------------------------------------+

        k_p is LARGER than either spring  ->  T DECREASES (stiffer)
```

```
  MEMORY HOOK (it is the OPPOSITE of resistors, the SAME as capacitors):

     SERIES springs    ->   add the RECIPROCALS   ->  softer  ->  T up
     PARALLEL springs  ->   add DIRECTLY          ->  stiffer ->  T down
```

## Cutting a spring

```
  The force constant depends on the length:      k  is proportional to  1/l

  A LONG spring is FLOPPY (small k).
  A SHORT spring is STIFF (large k).

  +-------------------------------------------------------------+
  |  Cut a spring of constant k into n EQUAL parts:             |
  |                                                             |
  |       each piece has constant   k'  =  n k                  |
  |                                                             |
  |  Cut it in the ratio 1 : 2 (lengths l/3 and 2l/3):          |
  |                                                             |
  |       k1 = 3k   (the short one)   ,   k2 = 1.5 k            |
  |                                                             |
  |  Since T is proportional to 1/sqrt(k), cutting a spring     |
  |  always DECREASES the time period.                          |
  +-------------------------------------------------------------+
```

## WORKED EXAMPLE 10

*A spring stretches by 5 cm when a mass of 0.5 kg is hung from it. Find its
force constant and the period of oscillation of the mass. Take g = 10 m/s^2.*

```
  e = 0.05 m ,  m = 0.5 kg ,  g = 10

  At equilibrium:   m g  =  k e

              m g       0.5 x 10        5
       k  =  -----  =  ----------  =  ------  =  100 N / m
               e          0.05         0.05

                    m                0.5
  T  =  2 pi  sqrt(---)  =  6.28 sqrt(-----)  =  6.28 x sqrt(0.005)
                    k                100

     =  6.28 x 0.0707  =  0.444 s

  CROSS-CHECK using T = 2 pi sqrt(e/g):
     6.28 x sqrt(0.05 / 10) = 6.28 x sqrt(0.005) = 0.444 s     TICK
```

## WORKED EXAMPLE 11

*Two springs of force constants 100 N/m and 300 N/m are attached to a 3 kg mass.
Find the period when they are (a) in parallel (b) in series.*

```
  (a) PARALLEL:   k_p = 100 + 300 = 400 N / m

                          3
      T  =  6.28 x sqrt( ---- )  =  6.28 x sqrt(0.0075)
                         400
         =  6.28 x 0.0866  =  0.544 s

  (b) SERIES:     k_s = (100 x 300) / (100 + 300) = 30000 / 400 = 75 N/m

                          3
      T  =  6.28 x sqrt( ---- )  =  6.28 x sqrt(0.04)
                          75
         =  6.28 x 0.2  =  1.256 s

  Note the series arrangement gives the LONGER period, as expected.
```

---

# TOPIC 10 — Damped oscillations

## The idea

In real life a pendulum stops. Energy leaks away as heat and sound because of
air resistance and friction at the support.

```
  DAMPED OSCILLATIONS  =  oscillations whose AMPLITUDE decreases
                          steadily with time because of a resistive
                          (dissipative) force.
```

## The damping force

```
  For slow speeds the resisting force is proportional to the velocity
  and opposite to it:

            +-----------------------------+
            |                             |
            |     F_damping  =  - b v     |
            |                             |
            +-----------------------------+

  b  =  the DAMPING CONSTANT
        unit:  kg / s   (or N s / m)
        dimensions:  [ M T^-1 ]
```

## The equation of motion

```
  Net force  =  restoring force  +  damping force

        d2x            dx
      m ---   =   -k x  -  b --
        dt2            dt

  +----------------------------------------------------+
  |                                                    |
  |       d2x        dx                                |
  |     m ---   +  b --   +   k x   =   0              |
  |       dt2        dt                                |
  |                                                    |
  +----------------------------------------------------+
```

## The solution — exponential decay of amplitude

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |     x(t)  =  A  e^( -b t / 2m )  cos( omega' t  +  phi )        |
  |                                                                 |
  |     The AMPLITUDE at time t is                                  |
  |                                                                 |
  |         A(t)  =  A  e^( -b t / 2m )                             |
  |                                                                 |
  |     The new (slower) angular frequency is                       |
  |                                                                 |
  |                      k        b^2                               |
  |         omega' = sqrt( -  -  ------ )                           |
  |                      m       4 m^2                              |
  |                                                                 |
  |     The ENERGY decays twice as fast:                            |
  |                                                                 |
  |         E(t)  =  (1/2) k A^2  e^( -b t / m )                    |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## The graph

```
    x |
      |  .--.        the dashed curve  A e^(-bt/2m)  is the ENVELOPE
   +A |-'    `.
      | /  .   \  .--.
      |/    \   \'    `.  .-.
      |      \       '    '   `. .-.
    0 +-------\-------------------'---'---.---.----.---.-----> t
      |        \  /     `. .'      `-'  `-'   '--'
      |         `'        '
   -A |- - - - - - - - - - - - - - - - - - - - - -
      |     `-._
      |         `--..____
      |                   `------------------

    * The oscillation keeps the SAME period (almost),
      but the peaks get smaller and smaller.
    * The decay of the peaks is EXPONENTIAL, not linear.
    * Eventually the body stops at the mean position.
```

```
  +-----------------------------------------------------------------+
  |  THREE KINDS OF DAMPING                                         |
  |                                                                 |
  |  UNDER-DAMPED     small b   -> it oscillates, slowly dying out  |
  |                              (a swinging door with a weak       |
  |                               closer)                           |
  |                                                                 |
  |  CRITICALLY       just      -> returns to rest in the SHORTEST  |
  |  DAMPED           enough b     possible time WITHOUT            |
  |                                oscillating (a car shock         |
  |                                absorber, a galvanometer needle) |
  |                                                                 |
  |  OVER-DAMPED      large b   -> creeps slowly back, no           |
  |                                oscillation (a door closer in    |
  |                                thick oil)                       |
  +-----------------------------------------------------------------+
```

> **TRAP:** In damped oscillation the AMPLITUDE decreases but the TIME PERIOD
> stays practically the same (slightly longer). Do not write "the period keeps
> getting shorter".

---

# TOPIC 11 — Forced oscillations and resonance

## Free, damped and forced — the three-way comparison

```
  +------------+-----------------------+---------------+-----------------+
  |  TYPE      |  WHAT DRIVES IT       |  AMPLITUDE    |  FREQUENCY      |
  +------------+-----------------------+---------------+-----------------+
  |  FREE      |  nothing; displaced   |  CONSTANT     |  natural        |
  |            |  once and released    |  (ideal case) |  frequency n0   |
  +------------+-----------------------+---------------+-----------------+
  |  DAMPED    |  nothing, plus a      |  DECREASES    |  slightly less  |
  |            |  resistive force      |  exponentially|  than n0        |
  +------------+-----------------------+---------------+-----------------+
  |  FORCED    |  an external periodic |  CONSTANT     |  the DRIVING    |
  |            |  force applied all    |  after a      |  frequency n,   |
  |            |  the time             |  while        |  NOT n0         |
  +------------+-----------------------+---------------+-----------------+
```

**Key point about forced oscillation:** the body is eventually forced to vibrate
at the **driver's** frequency, not at its own natural frequency.

## Resonance

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  RESONANCE                                                       |
  |                                                                  |
  |  When the frequency of the applied periodic force becomes        |
  |  EQUAL to the natural frequency of the body, the amplitude of    |
  |  the forced oscillation becomes MAXIMUM.                         |
  |                                                                  |
  |  This condition is called RESONANCE, and the amplitude is        |
  |  limited only by the amount of damping present.                  |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The resonance curve

```
   Amplitude
      |
      |                    |
      |                   /|\      <-- very small damping: a tall, sharp peak
      |                  / | \
      |                 /  |  \
      |                /   |   \
      |            .--'    |    `--.   <-- more damping: shorter, broader peak
      |        ..-'        |        `-..
      |   ..--'            |            `--..
      +--------------------+---------------------> driving frequency n
                          n0
                    (natural frequency)

   * The peak sits at n = n0.
   * LESS damping -> TALLER and SHARPER peak.
   * MORE damping -> SHORTER and BROADER peak.
   * With zero damping the amplitude would become infinite (in theory).
```

## Everyday examples you must be able to quote

```
  1.  SOLDIERS BREAK STEP ON A BRIDGE
      Marching in step applies a periodic force. If its frequency
      matches the natural frequency of the bridge, resonance builds a
      huge amplitude and the bridge can collapse. So troops are ordered
      to break step.

  2.  TUNING A RADIO
      Turning the tuning knob changes the natural frequency of the
      receiver circuit. When it matches the frequency of one station,
      that station resonates and is heard loudly while the others are
      not.

  3.  THE TACOMA NARROWS BRIDGE (USA, 1940)
      Wind produced a periodic force whose frequency matched a natural
      frequency of the bridge. The amplitude grew enormously and the
      bridge tore itself apart. The classic real-world resonance
      disaster.

  4.  A CHILD ON A SWING
      You push once per swing — exactly at the natural frequency — and
      the swing goes higher and higher.

  5.  A SHATTERING WINE GLASS
      A singer holding a note at the glass's natural frequency can make
      it vibrate so hard it breaks.

  6.  THE TROOPS / EARTHQUAKE CASE
      Buildings whose natural frequency matches the frequency of
      seismic waves suffer the worst damage.
```

> **TRAP:** Resonance is a *special case* of forced oscillation, not a
> different thing. Define forced oscillation first, then say "when the driving
> frequency equals the natural frequency, we call it resonance".

## WORKED EXAMPLE 12

*A 4 kg mass hangs from a spring of force constant 400 N/m. At what frequency of
an applied periodic force will resonance occur?*

```
  Resonance occurs when the driving frequency equals the NATURAL frequency.

              k          400
  omega0 = sqrt(-) = sqrt(----) = sqrt(100) = 10 rad/s
              m            4

             omega0        10
  n0    =   --------  =  ------  =  1.59 Hz
              2 pi        6.28
```

---

# TOPIC 12 — Quick reference: other systems that perform SHM

You will not be asked to derive all of these, but recognising them is worth easy
MCQ marks.

```
  +--------------------------------+---------------------------------------+
  |  SYSTEM                        |  TIME PERIOD                          |
  +--------------------------------+---------------------------------------+
  |  Simple pendulum               |  T = 2 pi sqrt( l / g )               |
  |  Loaded spring                 |  T = 2 pi sqrt( m / k )               |
  |  Vertical spring, extension e  |  T = 2 pi sqrt( e / g )               |
  |  Liquid column of length L     |  T = 2 pi sqrt( L / 2g )              |
  |  in a U-tube                   |                                       |
  |  Cylinder of length L, density |  T = 2 pi sqrt( L rho / (rho_liq g) ) |
  |  rho floating in a liquid      |                                       |
  |  Tunnel through the Earth      |  T = 2 pi sqrt( R / g )  = 84 minutes |
  +--------------------------------+---------------------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write the MINUS sign in  a = -omega^2 y  ?
  [ ]  Did I write BOTH parts of the SHM definition — proportional to
       displacement AND directed towards the mean position?
  [ ]  Did I convert every length to METRES before substituting?
       (cm -> m is the number one source of lost marks)
  [ ]  Did I use omega = 2 pi / T, not omega = 1 / T ?
  [ ]  In the pendulum derivation, did I state the small-angle
       assumption sin theta = theta ?
  [ ]  In the pendulum derivation, did I actually SAY "hence the motion
       is simple harmonic" before writing T = 2 pi / omega ?
  [ ]  Did I draw and LABEL the diagram (mg, mg sin theta, mg cos theta,
       tension, length l, angle theta)? The diagram carries marks.
  [ ]  Did I remember  v_max = A omega  at the MEAN position and
       a_max = A omega^2  at the EXTREME position — not the other way round?
  [ ]  For energy questions, did I write E = (1/2) m omega^2 A^2 and say
       that it is CONSTANT?
  [ ]  Did I remember that KE and PE repeat TWICE per oscillation?
  [ ]  For springs: series -> reciprocals add; parallel -> add directly.
  [ ]  For a spring, T does NOT depend on g. For a pendulum, it DOES.
  [ ]  In free fall, the pendulum does NOT oscillate (T is infinite).
  [ ]  Did I write the UNIT on every final answer (s, m, m/s, m/s^2, J)?
  [ ]  Did I answer the 8-mark question with a diagram + derivation +
       final boxed formula? All three are needed for full marks.
```
