# Laws of Motion — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

Throughout: `g = 9.8 m/s^2` (use `10 m/s^2` if the question says so),
`mu` = coefficient of friction, `theta` = angle, `N` = normal reaction.

---

# 1. THE THREE LAWS IN SYMBOLS

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   FIRST LAW      If  F_net = 0   then   a = 0                     |
  |                  (body stays at rest or at constant velocity)     |
  |                                                                   |
  |                       dp                                          |
  |   SECOND LAW     F = -----  =  m a       (m constant)             |
  |                       dt                                          |
  |                                                                   |
  |   THIRD LAW      F(A on B)  =  -  F(B on A)                       |
  |                  (they act on DIFFERENT bodies)                   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F_net = 0` | Body at rest OR moving with constant velocity |
| `F = ma` | Any body with a known net force |
| `F_x = m a_x` , `F_y = m a_y` | Whenever forces are slanted — resolve first |
| `F = dp/dt` | When the MASS changes (rocket, conveyor belt, sand) |

---

# 2. MOMENTUM AND IMPULSE

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   LINEAR MOMENTUM        p  =  m v                              |
  |                          unit kg m/s ,  [ M L T^-1 ] , VECTOR   |
  |                                                                 |
  |   IMPULSE                J  =  F t  =  m v  -  m u              |
  |                          unit N s ,     [ M L T^-1 ] , VECTOR   |
  |                                                                 |
  |   IMPULSE = AREA under the F-t graph                            |
  |                                                                 |
  |                              change in momentum                 |
  |   AVERAGE FORCE       F  =  --------------------                |
  |                                    time                         |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## Momentum and kinetic energy

```
                       p^2                                  +----------+
     KE   =   -------------            p  =   sqrt          | 2 m KE   |
                  2 m                                       +----------+
```

| Formula | When to use |
|---|---|
| `p = mv` | Any moving body |
| `J = F t` | Constant force acting for time t |
| `J = mv - mu` | Momentum change is known, force is not |
| `J = mv + mu` | Body REBOUNDS along the same line (sign flips) |
| `F = J / t` | "Find the average force during the impact" |
| `KE = p^2 / 2m` | Comparing momentum and energy of two bodies |

---

# 3. CONSERVATION OF LINEAR MOMENTUM

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   If the net EXTERNAL force is ZERO:                            |
  |                                                                 |
  |          m1 u1  +  m2 u2   =   m1 v1  +  m2 v2                  |
  |                                                                 |
  |          (total momentum BEFORE = total momentum AFTER)         |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## Ready-made results

```
  +--------------------------+--------------------------------------+
  |  RECOIL OF A GUN         |               m v                    |
  |  (both at rest before)   |    V  =  -  -------                  |
  |                          |               M                      |
  |                          |  M = gun mass , m = bullet mass      |
  +--------------------------+--------------------------------------+
  |  ROCKET (momentum form)  |    M V  =  m v                       |
  |                          |                                      |
  |                          |    Thrust  =  u  x  (dm / dt)        |
  |                          |    u = exhaust speed relative        |
  |                          |        to the rocket                 |
  +--------------------------+--------------------------------------+
  |  EXPLOSION FROM REST     |    m1 v1  +  m2 v2  =  0             |
  |  (two fragments)         |    they fly in OPPOSITE directions   |
  +--------------------------+--------------------------------------+
  |  BODIES STICK TOGETHER   |    m1 u1 + m2 u2 = (m1 + m2) v       |
  |  (perfectly inelastic)   |                                      |
  +--------------------------+--------------------------------------+
```

| Formula | When to use |
|---|---|
| `m1u1 + m2u2 = m1v1 + m2v2` | Collision, explosion, gun, any interaction with no outside force |
| `V = - mv/M` | Gun recoil, man jumping off a boat/trolley |
| `Thrust = u dm/dt` | Rocket questions |
| `(m1+m2)v` | The two bodies move off TOGETHER |

---

# 4. EQUILIBRIUM AND LAMI'S THEOREM

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   EQUILIBRIUM      sum of F_x  =  0                             |
  |                    sum of F_y  =  0                             |
  |                                                                 |
  +-----------------------------------------------------------------+


  LAMI'S THEOREM  (three concurrent forces in equilibrium)

                          F1
                           ^
                     gamma  \   alpha
                             \
              <---------------O---------------> F2
                             / beta
                            v
                          F3

           F1              F2              F3
       -----------  =  -----------  =  -----------
        sin(alpha)      sin(beta)      sin(gamma)

       alpha = angle BETWEEN THE OTHER TWO forces (F2 and F3)
```

| Formula | When to use |
|---|---|
| `sum F = 0` | Body at rest or at constant velocity |
| Lami's theorem | EXACTLY THREE concurrent forces, angles are given |
| Triangle law | Three forces, asked to prove equilibrium graphically |

---

# 5. BLOCK ON A HORIZONTAL SURFACE

```
  +--------------------------------------+---------------------------+
  |  SITUATION                           |  NORMAL REACTION N        |
  +--------------------------------------+---------------------------+
  |  Block resting on a floor            |  N  =  mg                 |
  |  Pulled by F at angle th ABOVE       |  N  =  mg - F sin(th)     |
  |  Pushed by F at angle th BELOW       |  N  =  mg + F sin(th)     |
  |  Inside a lift with acceleration a   |  N  =  m (g + a)  upward  |
  |  On an incline of angle th           |  N  =  mg cos(th)         |
  +--------------------------------------+---------------------------+
```

```
   SMOOTH floor, horizontal pull F   :      a  =  F / m

   ROUGH floor, horizontal pull F    :      F  -  mu mg   =  m a

                                                 F  -  mu m g
                                            a =  -------------
                                                       m
```

---

# 6. TWO CONNECTED BLOCKS  *** ready-made ***

```
                     T          T
              +-----+   ______   +-----+
              | m2  |==========  | m1  | <--- F
              +-----+            +-----+
             ///////////////////////////////


  +-----------------------------------------------------------------+
  |  SMOOTH SURFACE                                                 |
  |                                                                 |
  |                 F                            m2 F               |
  |       a  =  ---------            T  =   --------------          |
  |              m1 + m2                       m1 + m2              |
  |                                                                 |
  |  T  =  (mass on the FAR side of the string)  x  a               |
  +-----------------------------------------------------------------+

  +-----------------------------------------------------------------+
  |  ROUGH SURFACE (same mu under both)                             |
  |                                                                 |
  |             F  -  mu (m1 + m2) g                                |
  |       a  =  -----------------------      ,     T  =  m2(a + mu g)|
  |                   m1 + m2                                       |
  +-----------------------------------------------------------------+
```

### Three blocks in a row, pulled by F

```
     +----+   +----+   +----+
     | m3 |===| m2 |===| m1 | <-- F
     +----+   +----+   +----+
                T2       T1

                    F
        a  =  --------------
               m1 + m2 + m3

        T1  =  (m2 + m3) a          T2  =  m3 a

  RULE:  a tension equals (all the mass BEHIND it) x a
```

---

# 7. THE PULLEY — ATWOOD MACHINE  *** ready-made ***

```
                       _____
                      /     \
                     |   O   |
                      \_____/
                       |   |
                    +--+   +--+
                    |m1|   |m2|          m1  >  m2
                    +--+   +--+
                      |      |
                      v      v
                    m1 g   m2 g


  +-----------------------------------------------------------------+
  |                                                                 |
  |                 ( m1  -  m2 ) g                                 |
  |       a   =   -------------------                               |
  |                   m1  +  m2                                     |
  |                                                                 |
  |                   2 m1 m2 g                                     |
  |       T   =   ---------------                                   |
  |                  m1  +  m2                                      |
  |                                                                 |
  |                                    4 m1 m2 g                    |
  |       Force on the pulley = 2 T = ------------                  |
  |                                     m1 + m2                     |
  |                                                                 |
  +-----------------------------------------------------------------+

  CHECK YOUR ANSWER:      m2 g   <   T   <   m1 g       always.
```

### One block on a table, one hanging (a smooth table)

```
              +-----+       ___
              | m1  |======(   )
              +-----+       | |
           //////////       | |
                          +--+--+
                          | m2  |
                          +-----+
                             |
                             v  m2 g

                m2 g                       m1 m2 g
        a  =  ---------          T  =   -------------
               m1 + m2                    m1 + m2
```

### Same, but the table is ROUGH

```
               m2 g  -  mu m1 g                    m1 m2 g (1 + mu)
       a  =  --------------------        T  =   ---------------------
                  m1  +  m2                          m1  +  m2
```

---

# 8. BODY IN A LIFT — APPARENT WEIGHT  *** guaranteed question ***

```
                 +---------------------+
                 |        LIFT         |
                 |         N ^         |
                 |      +---------+    |
                 |      |    m    |    |
                 |      +---------+    |
                 |           v  mg     |
                 +---------------------+


  +-----------------------------------+-------------------+-----------+
  |  MOTION OF THE LIFT               |  APPARENT WEIGHT  | YOU FEEL  |
  +-----------------------------------+-------------------+-----------+
  |  At rest                          |   N = m g         |  normal   |
  |  Constant velocity, up or down    |   N = m g         |  normal   |
  |  Accelerating UP with a           |   N = m ( g + a ) |  HEAVIER  |
  |  Going DOWN and slowing down      |   N = m ( g + a ) |  HEAVIER  |
  |  Accelerating DOWN with a         |   N = m ( g - a ) |  LIGHTER  |
  |  Going UP and slowing down        |   N = m ( g - a ) |  LIGHTER  |
  |  FREE FALL, a = g                 |   N = 0           | WEIGHTLESS|
  +-----------------------------------+-------------------+-----------+

  DECIDE BY THE ACCELERATION, NEVER BY THE VELOCITY.
```

---

# 9. INCLINED PLANE  *** ready-made ***

```
                                  N
                                  ^
                            +-----+-----+
                           /|     m     |
                          / +-----------+
                         /       |      \
                        /        |       \  mg sin(theta)
                       /         v        v
                      /    mg cos(theta)
                     /  theta
                    /_________________________
```

```
  +-------------------------------------+---------------------------------+
  |  QUANTITY                           |  FORMULA                        |
  +-------------------------------------+---------------------------------+
  |  Component ALONG the slope          |  mg sin(theta)                  |
  |  Component PERPENDICULAR            |  mg cos(theta)                  |
  |  Normal reaction                    |  N = mg cos(theta)              |
  +-------------------------------------+---------------------------------+
  |  SMOOTH, sliding down               |  a = g sin(theta)               |
  |  ROUGH, sliding DOWN                |  a = g(sin th - mu cos th)      |
  |  ROUGH, moving UP (retardation)     |  a = g(sin th + mu cos th)      |
  |  Just about to slide (repose)       |  mu = tan(theta)                |
  |  Body at rest, th < angle of repose |  f = mg sin(theta)  (static)    |
  +-------------------------------------+---------------------------------+
  |  Speed at the bottom (smooth)       |  v = sqrt( 2 g L sin(theta) )   |
  |                                     |    = sqrt( 2 g h )              |
  |  Time to slide down length L        |  t = sqrt( 2L / (g sin th) )    |
  |  Min force to push UP at const speed|  F = mg(sin th + mu cos th)     |
  |  Min force to hold it from sliding  |  F = mg(sin th - mu cos th)     |
  +-------------------------------------+---------------------------------+
```

---

# 10. FRICTION

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   STATIC (self-adjusting)      f_s  <=  mu_s N                  |
  |                                                                 |
  |   LIMITING (the maximum)       f_L   =  mu_s N                  |
  |                                                                 |
  |   KINETIC (while sliding)      f_k   =  mu_k N                  |
  |                                                                 |
  |   ALWAYS                       mu_k  <   mu_s                   |
  |                                                                 |
  |                                     f                           |
  |   COEFFICIENT                mu  =  ---     (NO UNIT)           |
  |                                     N                           |
  |                                                                 |
  |   ANGLE OF FRICTION          mu  =  tan( theta_f )              |
  |                                                                 |
  |   ANGLE OF REPOSE            mu  =  tan( theta_r )              |
  |                                                                 |
  |   THEREFORE                  theta_f  =  theta_r                |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## The friction graph

```
    f  ^
       |        f_L
       |         *
       |       / |
       |     /   +---------------- f_k
       |   /     |
       | /       |
       +---------+--------------------> applied force
        STATIC   | KINETIC
```

## Stopping distance and retardation on a rough floor

```
   Retardation caused by friction:        a  =  mu g

                                                 v^2         v^2
   Stopping distance from speed v:        s  =  -------  =  --------
                                                 2 a         2 mu g

                                                  v          v
   Time to stop:                          t  =  -----  =  --------
                                                  a         mu  g
```

| Formula | When to use |
|---|---|
| `f_L = mu_s N` | "Just begins to move", "minimum force to move it" |
| `f_k = mu_k N` | The body IS sliding |
| `f_s = applied force` | Body is at rest and NOT on the verge of moving |
| `mu = tan(theta_r)` | "Just slides down the incline at angle theta" |
| `s = v^2 / (2 mu g)` | Braking / skidding distance |

---

# 11. CIRCULAR MOTION

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |                           m v^2                                 |
  |   CENTRIPETAL FORCE  F = --------  =  m r omega^2               |
  |                              r                                  |
  |                                                                 |
  |                             v^2                                 |
  |   CENTRIPETAL ACCELN   a = -----  =  r omega^2                  |
  |                              r                                  |
  |                                                                 |
  |   v  =  r omega                omega  =  2 pi / T               |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## Vehicle on a road — the three standard results

```
  +--------------------------------------------------------------------+
  |  (1)  LEVEL ROAD  (friction alone)                                 |
  |                                                                    |
  |            m v^2                                                   |
  |           -------   <=   mu m g                                    |
  |               r                                                    |
  |                                                                    |
  |            v_max  =  sqrt( mu  g  r )                              |
  |                                                                    |
  |            (independent of the MASS of the vehicle)                |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  (2)  BANKED ROAD, NO friction                                     |
  |                                                                    |
  |            N sin(theta)  =  m v^2 / r                              |
  |            N cos(theta)  =  m g                                    |
  |                                                                    |
  |                                v^2                                 |
  |            tan(theta)   =   ---------                              |
  |                                r g                                 |
  |                                                                    |
  |            optimum speed  v  =  sqrt( r g tan(theta) )             |
  |                                                                    |
  |            banking angle  theta  =  arctan( v^2 / r g )            |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  (3)  BANKED ROAD, WITH friction                                   |
  |                                                                    |
  |                          +-                        -+              |
  |                          |  mu  +  tan(theta)       |              |
  |       v_max = sqrt   rg  | ----------------------   |              |
  |                          |  1  -  mu tan(theta)     |              |
  |                          +-                        -+              |
  |                                                                    |
  |                          +-                        -+              |
  |                          |  tan(theta)  -  mu       |              |
  |       v_min = sqrt   rg  | ----------------------   |              |
  |                          |  1  +  mu tan(theta)     |              |
  |                          +-                        -+              |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  (4)  BENDING OF A CYCLIST                                         |
  |                                                                    |
  |                                v^2                                 |
  |            tan(theta)   =   ---------      (theta from the         |
  |                                r g          VERTICAL)              |
  |                                                                    |
  |            Safety condition:   tan(theta)  <=  mu                  |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F = mv^2/r` | Any circular motion |
| `v_max = sqrt(mu g r)` | Flat/level road, "maximum speed without skidding" |
| `tan th = v^2/rg` | Banked road, cyclist, railway superelevation |
| `v = sqrt(rg tan th)` | "Optimum / safe / design speed" on a banked road |
| The long v_max formula | Banked road AND friction both given |

---

# 12. USEFUL CONVERSIONS AND CONSTANTS

```
  +---------------------------------+-------------------------------+
  |  1 N                            |  10^5 dyne                    |
  |  1 kgf (kilogram weight)        |  9.8 N                        |
  |  1 km/h                         |  1/3.6  =  0.278 m/s          |
  |  To convert km/h -> m/s         |  DIVIDE by 3.6                |
  |  To convert m/s -> km/h         |  MULTIPLY by 3.6              |
  |  g                              |  9.8 m/s^2  (use 10 if told)  |
  |  1 g (gram)                     |  0.001 kg                     |
  +---------------------------------+-------------------------------+

  USEFUL TRIG VALUES

  +---------+-------+--------+--------+--------+
  |  theta  |   0   |   30   |   45   |   60   |
  +---------+-------+--------+--------+--------+
  |  sin    |   0   |  0.5   | 0.707  | 0.866  |
  |  cos    |   1   | 0.866  | 0.707  |  0.5   |
  |  tan    |   0   | 0.577  |   1    | 1.732  |
  +---------+-------+--------+--------+--------+

  Also:   sin 37 = 0.6 , cos 37 = 0.8 , tan 37 = 0.75
          sin 53 = 0.8 , cos 53 = 0.6 , tan 53 = 1.33
```

---

# THE 10 FORMULAE TO WRITE ON YOUR PALM

```
   1.  F  =  m a                         and     p = m v

   2.  J  =  F t  =  m v  -  m u         (impulse = change in momentum)

   3.  m1 u1 + m2 u2  =  m1 v1 + m2 v2   (conservation of momentum)

   4.  LIFT:     N  =  m ( g  ±  a )     ( + going UP , - going DOWN )

                          F                          m2 F
   5.  TWO BLOCKS:  a = ---------    ,     T  =  ------------
                        m1 + m2                    m1 + m2

                         (m1 - m2) g                 2 m1 m2 g
   6.  ATWOOD:      a = -------------  ,    T  =  --------------
                          m1 + m2                   m1  +  m2

   7.  INCLINE:     N = mg cos(theta)  ,   a = g sin(theta)   (smooth)
                    a = g ( sin(theta)  -  mu cos(theta) )    (rough, down)

   8.  FRICTION:    f = mu N       mu = tan(theta_repose)     mu has NO unit

   9.  CIRCLE:      F = m v^2 / r       v_max(level) = sqrt( mu g r )

  10.  BANKING:     tan(theta) = v^2 / ( r g )
```
