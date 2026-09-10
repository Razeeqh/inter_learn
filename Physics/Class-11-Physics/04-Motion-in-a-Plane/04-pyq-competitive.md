# Motion in a Plane — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice. Take **g = 10 m/s^2** unless stated otherwise.

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
  AP / TG EAPCET  (Physics, 40 questions)  ->  3 to 4
  JEE Main        (Physics, 25 questions)  ->  2 to 3

  Vectors alone are worth 1 to 2 of those. Projectile motion is worth 1 to 2.
  This is one of the TOP THREE scoring chapters in first-year Physics.
```

---

# PATTERN 1 — Resultant of two vectors, and the angle between them

### Q1
Two forces of 6 N and 8 N act at right angles to each other. The magnitude of their
resultant is

(a) 2 N &nbsp; (b) 10 N &nbsp; (c) 14 N &nbsp; (d) 48 N

**ANSWER: (b)**
```
  R = sqrt( 6^2 + 8^2 )  =  sqrt( 36 + 64 )  =  sqrt(100)  =  10 N
```
> **SHORTCUT:** memorise the Pythagorean triples 3-4-5, 6-8-10, 5-12-13, 8-15-17,
> 7-24-25. Perpendicular-vector questions are then instant.

---

### Q2
The resultant of two equal vectors is equal in magnitude to either of them. The angle
between them is

(a) 60 deg &nbsp; (b) 90 deg &nbsp; (c) 120 deg &nbsp; (d) 180 deg

**ANSWER: (c)**
```
  R = 2 A cos ( theta / 2 )  =  A     ->   cos ( theta/2 ) = 0.5
                                     ->   theta/2 = 60      ->   theta = 120 deg
```

---

### Q3
Two vectors have magnitudes 3 and 5. Which of the following CANNOT be the magnitude
of their resultant?

(a) 2 &nbsp; (b) 4 &nbsp; (c) 8 &nbsp; (d) 9

**ANSWER: (d)**
```
  | A - B |  <=  R  <=  A + B          ->     2  <=  R  <=  8

  9 lies outside this range, so it is impossible.
```
> **SHORTCUT:** this "which is not possible" question appears constantly.
> Just compute `A+B` and `|A-B|` and check the range.

---

### Q4
If | A + B | = | A - B |, then the angle between A and B is

(a) 0 deg &nbsp; (b) 45 deg &nbsp; (c) 90 deg &nbsp; (d) 180 deg

**ANSWER: (c)**
```
  Square both sides:
     A^2 + B^2 + 2AB cos t  =  A^2 + B^2 - 2AB cos t
              4 AB cos t  =  0    ->   cos t = 0   ->   t = 90 degrees
```

---

### Q5
The maximum and minimum resultants of two forces are 17 N and 7 N. The magnitude of
the resultant when they act at 90 degrees is

(a) 12 N &nbsp; (b) 13 N &nbsp; (c) 14 N &nbsp; (d) 15 N

**ANSWER: (b)**
```
     A + B  = 17          A - B = 7
     Adding: 2A = 24  ->  A = 12 ,  B = 5

     At 90 deg:  R = sqrt( 12^2 + 5^2 ) = sqrt( 144 + 25 ) = sqrt(169) = 13 N
```

---

### Q6
Two vectors of equal magnitude A satisfy | A + B | = sqrt(3) | A - B |. The angle
between them is

(a) 30 deg &nbsp; (b) 60 deg &nbsp; (c) 90 deg &nbsp; (d) 120 deg

**ANSWER: (b)**
```
  For equal vectors:  | A + B | = 2A cos(t/2)   ,   | A - B | = 2A sin(t/2)

     2A cos(t/2)  =  sqrt(3) x 2A sin(t/2)

     cot ( t/2 )  =  sqrt(3)     ->    t/2 = 30 deg    ->    t = 60 degrees
```

---

### Q7
Two vectors of magnitudes 10 units each act at 60 degrees to each other. Their
resultant is

(a) 10 &nbsp; (b) 14.1 &nbsp; (c) 17.3 &nbsp; (d) 20

**ANSWER: (c)**
```
  R = 2 A cos ( theta/2 ) = 2 x 10 x cos 30 = 20 x 0.866 = 17.3 units
```

---

### Q8
The resultant of two forces P and Q is perpendicular to P. The angle between P and Q
is

(a) cos^-1 ( P/Q ) &nbsp; (b) cos^-1 ( -P/Q ) &nbsp; (c) sin^-1 ( P/Q ) &nbsp;
(d) 90 deg

**ANSWER: (b)**
```
  The resultant makes 90 deg with P, so tan alpha is infinite,
  which needs the DENOMINATOR to vanish:

        P  +  Q cos theta  =  0      ->     cos theta  =  - P / Q
```

---

# PATTERN 2 — Vectors in i, j, k form

### Q9
The magnitude of the vector A = 2 i - 3 j + 6 k is

(a) 5 &nbsp; (b) 7 &nbsp; (c) 11 &nbsp; (d) 49

**ANSWER: (b)**
```
  | A | = sqrt( 2^2 + (-3)^2 + 6^2 ) = sqrt( 4 + 9 + 36 ) = sqrt(49) = 7
```

---

### Q10
The unit vector along 6 i - 2 j + 3 k is

(a) (6i - 2j + 3k)/7 &nbsp; (b) (6i - 2j + 3k)/11 &nbsp; (c) (6i - 2j + 3k)/49 &nbsp;
(d) 6i - 2j + 3k

**ANSWER: (a)**
```
  | A | = sqrt( 36 + 4 + 9 ) = sqrt(49) = 7        ->    A-hat = A / 7
```

---

### Q11
The angle between the vectors ( i + j ) and ( j + k ) is

(a) 30 deg &nbsp; (b) 45 deg &nbsp; (c) 60 deg &nbsp; (d) 90 deg

**ANSWER: (c)**
```
  A . B = (1)(0) + (1)(1) + (0)(1)  =  1
  | A | = sqrt(2) ,  | B | = sqrt(2)

                 1          1
  cos theta = ---------- = ---     ->    theta = 60 degrees
              sqrt2 x sqrt2   2
```

---

### Q12
For what value of m are the vectors ( 2 i + 3 j ) and ( 4 i + m j ) perpendicular?

(a) 8/3 &nbsp; (b) -8/3 &nbsp; (c) 3/8 &nbsp; (d) -3/8

**ANSWER: (b)**
```
  Perpendicular  ->  A . B = 0

     (2)(4) + (3)(m) = 0      ->     8 + 3m = 0     ->     m = -8/3
```

---

### Q13
The area of the parallelogram whose adjacent sides are A = 2 i + j and B = i + 2 j is

(a) 2 &nbsp; (b) 3 &nbsp; (c) 4 &nbsp; (d) 5

**ANSWER: (b)**
```
  Area = | A x B |

           | i   j   k |
  A x B =  | 2   1   0 |  =  k ( 2 x 2  -  1 x 1 )  =  3 k
           | 1   2   0 |

  | A x B | = 3 square units
```

---

### Q14
If A . B = | A x B |, the angle between A and B is

(a) 30 deg &nbsp; (b) 45 deg &nbsp; (c) 60 deg &nbsp; (d) 90 deg

**ANSWER: (b)**
```
  AB cos theta  =  AB sin theta     ->     tan theta = 1    ->    theta = 45 deg
```
> **SHORTCUT:** whenever a question compares the dot and the cross product,
> it always collapses to a tan equation.

---

# PATTERN 3 — Projectile: straight substitution into T, H, R

### Q15
A body is projected with a speed of 20 m/s at 45 degrees. Its horizontal range is

(a) 20 m &nbsp; (b) 30 m &nbsp; (c) 40 m &nbsp; (d) 80 m

**ANSWER: (c)**
```
       u^2 sin 90       400 x 1
  R =  ------------  =  ---------  =  40 m
            g              10
```

---

### Q16
For the projectile in Q15, the maximum height is

(a) 5 m &nbsp; (b) 10 m &nbsp; (c) 20 m &nbsp; (d) 40 m

**ANSWER: (b)**
```
       u^2 sin^2 45      400 x 0.5      200
  H =  -------------- =  -----------  = -----  =  10 m
            2 g               20          20

  CHECK: at 45 degrees H = R/4 = 40/4 = 10 m   correct.
```
> **SHORTCUT:** at 45 degrees always `H = R / 4`. No calculation needed.

---

### Q17
A projectile is fired at 40 m/s at 30 degrees. Its time of flight is

(a) 2 s &nbsp; (b) 4 s &nbsp; (c) 6 s &nbsp; (d) 8 s

**ANSWER: (b)**
```
       2 u sin theta      2 x 40 x 0.5      40
  T =  --------------- =  --------------  = ----  =  4 s
             g                 10            10
```

---

### Q18
The time of flight of a projectile is 4 s. Its maximum height is

(a) 10 m &nbsp; (b) 20 m &nbsp; (c) 40 m &nbsp; (d) 80 m

**ANSWER: (b)**
```
  H = (1/8) g T^2  =  (1/8) x 10 x 16  =  20 m
```
> **SHORTCUT:** `H = g T^2 / 8` saves you from finding u and theta separately.

---

### Q19
For a projectile, the horizontal range is 4 times the maximum height. The angle of
projection is

(a) 30 deg &nbsp; (b) 45 deg &nbsp; (c) 60 deg &nbsp; (d) 75 deg

**ANSWER: (b)**
```
                4 H
  tan theta =  -----      and here R = 4H , so
                 R

               4 H
  tan theta = ------  =  1      ->     theta = 45 degrees
               4 H
```

---

### Q20
For a projectile, the horizontal range is EQUAL to the maximum height. The angle of
projection is

(a) tan^-1 (1) &nbsp; (b) tan^-1 (2) &nbsp; (c) tan^-1 (4) &nbsp; (d) tan^-1 (1/4)

**ANSWER: (c)**
```
  tan theta = 4H / R = 4H / H = 4     ->     theta = tan^-1 (4)  =  76 deg approx.
```
> **SHORTCUT:** learn `tan theta = 4H / R`. It answers this whole family in one line.

---

### Q21
If the speed of projection of a projectile is doubled, keeping the angle the same,
its range becomes

(a) half &nbsp; (b) double &nbsp; (c) 4 times &nbsp; (d) unchanged

**ANSWER: (c)**
```
  R is proportional to u^2 .   (2u)^2 = 4 u^2    ->   4 times.

  Similarly H becomes 4 times, but T only becomes 2 times.
```

---

### Q22
Two bodies are projected with the same speed at 30 deg and 60 deg. The ratio of their
maximum heights is

(a) 1 : 1 &nbsp; (b) 1 : 2 &nbsp; (c) 1 : 3 &nbsp; (d) 3 : 1

**ANSWER: (c)**
```
  H is proportional to sin^2 theta

     H1 : H2  =  sin^2 30 : sin^2 60  =  (1/2)^2 : (sqrt3/2)^2
              =  1/4 : 3/4   =   1 : 3
```

---

### Q23
For the same two bodies of Q22, the ratio of the times of flight is

(a) 1 : 1 &nbsp; (b) 1 : sqrt3 &nbsp; (c) 1 : 3 &nbsp; (d) sqrt3 : 1

**ANSWER: (b)**
```
  T is proportional to sin theta

     T1 : T2  =  sin 30 : sin 60  =  0.5 : 0.866  =  1 : sqrt3
```

---

# PATTERN 4 — Given the equation of the trajectory

```
  MASTER RESULT — learn this and every question of this pattern is 10 seconds.

        For   y  =  a x  -  b x^2

  +---------------------------------------------------------------+
  |                                                               |
  |     angle of projection    tan theta  =  a                    |
  |                                                               |
  |     horizontal range       R  =  a / b                        |
  |                                                               |
  |     maximum height         H  =  a^2 / ( 4 b )                |
  |                                                               |
  |     launch speed           u^2 cos^2 theta  =  g / ( 2 b )    |
  |                                                               |
  +---------------------------------------------------------------+
```

### Q24
The path of a projectile is y = 10 x - 5 x^2 (in metres). Its horizontal range is

(a) 1 m &nbsp; (b) 2 m &nbsp; (c) 5 m &nbsp; (d) 10 m

**ANSWER: (b)**
```
  y = 0 at the landing point:    x ( 10 - 5 x ) = 0

     x = 0   (launch)      or      x = 10 / 5 = 2 m       ->  R = 2 m
```

---

### Q25
For the projectile of Q24, the maximum height is

(a) 2 m &nbsp; (b) 5 m &nbsp; (c) 10 m &nbsp; (d) 20 m

**ANSWER: (b)**
```
       a^2       10^2      100
  H = ------ =  ------  = -----  =  5 m
       4 b       4 x 5      20
```

---

### Q26
For the projectile of Q24, the angle of projection is

(a) 45 deg &nbsp; (b) 60 deg &nbsp; (c) tan^-1 (5) &nbsp; (d) tan^-1 (10)

**ANSWER: (d)**
```
  Comparing with  y = ( tan theta ) x  -  ...    ->   tan theta = 10
```

---

### Q27
The trajectory of a projectile is y = x - x^2 / 20 (metres, g = 10 m/s^2). Its speed
of projection is

(a) 10 m/s &nbsp; (b) 10 sqrt2 m/s &nbsp; (c) 14 m/s &nbsp; (d) 20 m/s

**ANSWER: (b)**
```
  Here a = 1 , b = 1/20 = 0.05

     tan theta = 1     ->    theta = 45 deg ,   cos^2 45 = 0.5

               g                          10
     b  =  ---------------    ->  0.05 = -----------------
            2 u^2 cos^2 t              2 u^2 x 0.5

                                0.05 u^2 = 10    ->   u^2 = 200

     u = sqrt(200) = 10 sqrt2 = 14.1 m/s
```

---

# PATTERN 5 — Velocity, speed and energy at a point of the path

### Q28
A projectile is thrown at 20 m/s at 60 degrees. Its speed at the highest point is

(a) 0 &nbsp; (b) 10 m/s &nbsp; (c) 17.3 m/s &nbsp; (d) 20 m/s

**ANSWER: (b)**
```
  At the top only the horizontal component survives:

        v = u cos theta = 20 x cos 60 = 20 x 0.5 = 10 m/s
```
> **SHORTCUT:** the speed at the top is ALWAYS `u cos theta`, never zero.

---

### Q29
A body is projected with kinetic energy E at 60 degrees. Its kinetic energy at the
highest point is

(a) E &nbsp; (b) E/2 &nbsp; (c) E/4 &nbsp; (d) 3E/4

**ANSWER: (c)**
```
  KE (top)  =  (1/2) m ( u cos theta )^2  =  E cos^2 theta

            =  E x cos^2 60  =  E x (0.5)^2  =  E / 4
```

---

### Q30
The change in momentum of a projectile of mass m over the whole flight is

(a) 0 &nbsp; (b) m u sin theta &nbsp; (c) 2 m u sin theta &nbsp; (d) 2 m u cos theta

**ANSWER: (c)**
```
  Horizontal momentum is unchanged (m u cos theta both times).

  Vertical:   initial = + m u sin theta ,   final = - m u sin theta

     | change |  =  2 m u sin theta      directed vertically DOWNWARD.
```

---

### Q31
A projectile is fired at 20 m/s at 30 degrees. Its velocity after 1 second is
(g = 10 m/s^2)

(a) 17.3 m/s &nbsp; (b) 20 m/s &nbsp; (c) 10 m/s &nbsp; (d) 14.1 m/s

**ANSWER: (a)**
```
  vx = 20 cos 30  =  17.32 m/s
  vy = 20 sin 30 - 10 x 1  =  10 - 10  =  0

  v = sqrt( 17.32^2 + 0 )  =  17.32 m/s     (this instant IS the highest point)
```

---

### Q32
The velocity of a projectile at the point of landing, compared with the velocity of
projection, has

(a) smaller magnitude &nbsp; (b) larger magnitude &nbsp;
(c) the same magnitude but a different direction &nbsp; (d) exactly the same velocity

**ANSWER: (c)**
```
  The landing speed = u  (energy is conserved, same height).
  The direction is theta BELOW the horizontal instead of above it.
```

---

# PATTERN 6 — Comparing two projectiles / complementary angles

### Q33
Two projectiles fired with the same speed have the same range. If one is fired at
20 degrees, the other is fired at

(a) 40 deg &nbsp; (b) 60 deg &nbsp; (c) 70 deg &nbsp; (d) 110 deg

**ANSWER: (c)**
```
  Complementary angles give the same range:   theta2 = 90 - 20 = 70 degrees
```

---

### Q34
Two complementary angles of projection give maximum heights h1 and h2 for the same
speed. The range R is

(a) sqrt( h1 h2 ) &nbsp; (b) 2 sqrt( h1 h2 ) &nbsp; (c) 4 sqrt( h1 h2 ) &nbsp;
(d) h1 + h2

**ANSWER: (c)**
```
        u^2 sin^2 t                    u^2 cos^2 t
  h1 = -------------          h2  =  --------------
           2 g                            2 g

                       u^2 sin t cos t      u^2 sin 2t        R
  sqrt( h1 h2 )   =   -----------------  =  -----------  =  -----
                             2 g                4 g            4

  ->  R = 4 sqrt( h1 h2 )
```

---

### Q35
For two complementary angles the times of flight are T1 and T2, and the common range
is R. Then

(a) T1 T2 = R/g &nbsp; (b) T1 T2 = 2R/g &nbsp; (c) T1 T2 = R/2g &nbsp;
(d) T1 T2 = 4R/g

**ANSWER: (b)**
```
        2u sin t             2u cos t
  T1 = ----------     T2 = -----------
            g                   g

               4 u^2 sin t cos t       2 u^2 sin 2t        2 R
  T1 T2  =   --------------------  =  --------------  =  -------
                     g^2                    g^2              g
```

---

### Q36
A projectile has the same range for angles of 15 deg and 75 deg with a speed of
20 m/s. That range is (g = 10 m/s^2)

(a) 10 m &nbsp; (b) 20 m &nbsp; (c) 30 m &nbsp; (d) 40 m

**ANSWER: (b)**
```
       u^2 sin ( 2 x 15 )      400 x sin 30      400 x 0.5
  R =  ------------------- =  --------------- =  ----------  =  20 m
               g                    10               10
```

---

# PATTERN 7 — Horizontal projectile from a height

### Q37
A ball rolls off a table 5 m high with a horizontal speed of 2 m/s. It lands at a
horizontal distance of (g = 10 m/s^2)

(a) 1 m &nbsp; (b) 2 m &nbsp; (c) 4 m &nbsp; (d) 5 m

**ANSWER: (b)**
```
  T = sqrt( 2h/g ) = sqrt( 2 x 5 / 10 ) = sqrt(1) = 1 s

  R = u T = 2 x 1 = 2 m
```

---

### Q38
Two balls are thrown horizontally from the same height with speeds 5 m/s and 20 m/s.
They reach the ground

(a) at the same time &nbsp; (b) the faster one first &nbsp; (c) the slower one first
&nbsp; (d) cannot say

**ANSWER: (a)**
```
  T = sqrt( 2h/g )  does not contain u at all.
  Horizontal and vertical motions are independent.
```
> **SHORTCUT:** for a horizontal projectile the TIME depends only on the HEIGHT.

---

### Q39
An aeroplane flying at 200 m/s at a height of 500 m drops a bomb. The horizontal
distance covered by the bomb before hitting the ground is (g = 10 m/s^2)

(a) 1000 m &nbsp; (b) 2000 m &nbsp; (c) 2500 m &nbsp; (d) 4000 m

**ANSWER: (b)**
```
  T = sqrt( 2 x 500 / 10 ) = sqrt(100) = 10 s

  R = u T = 200 x 10 = 2000 m
```

---

### Q40
A stone is projected horizontally with 15 m/s from a cliff 20 m high. The speed with
which it strikes the ground is (g = 10 m/s^2)

(a) 15 m/s &nbsp; (b) 20 m/s &nbsp; (c) 25 m/s &nbsp; (d) 35 m/s

**ANSWER: (c)**
```
  v = sqrt( u^2 + 2 g h )  =  sqrt( 225 + 2 x 10 x 20 )
    = sqrt( 225 + 400 )  =  sqrt(625)  =  25 m/s
```
> **SHORTCUT:** `v = sqrt(u^2 + 2gh)` goes straight from the data to the answer.
> Do not find the time first.

---

# PATTERN 8 — Uniform circular motion

### Q41
A particle moves on a circle of radius 5 m with a constant speed of 10 m/s. Its
centripetal acceleration is

(a) 2 m/s^2 &nbsp; (b) 10 m/s^2 &nbsp; (c) 20 m/s^2 &nbsp; (d) 50 m/s^2

**ANSWER: (c)**
```
       v^2       10^2      100
  a = -----  =  ------  = -----  =  20 m/s^2
        r          5         5
```

---

### Q42
A stone tied to a string of length 1 m is whirled at 2 revolutions per second. Its
centripetal acceleration is about

(a) 39.5 m/s^2 &nbsp; (b) 78.9 m/s^2 &nbsp; (c) 158 m/s^2 &nbsp; (d) 316 m/s^2

**ANSWER: (c)**
```
  a = 4 pi^2 n^2 r  =  4 x 9.87 x (2)^2 x 1  =  4 x 9.87 x 4  =  157.9 m/s^2
```
> **SHORTCUT:** `a = 4 pi^2 n^2 r` skips omega and v entirely when the
> frequency is given.

---

### Q43
The ratio of the angular velocities of the hour hand and the minute hand of a clock
is

(a) 1 : 12 &nbsp; (b) 12 : 1 &nbsp; (c) 1 : 60 &nbsp; (d) 60 : 1

**ANSWER: (a)**
```
  omega = 2 pi / T .   T(hour) = 12 h ,  T(minute) = 1 h

     omega(h) : omega(m)  =  (1/12) : (1/1)  =  1 : 12
```

---

### Q44
The angular velocity of the Earth about its own axis is approximately

(a) 7.3 x 10^-5 rad/s &nbsp; (b) 1.2 x 10^-3 rad/s &nbsp; (c) 2.6 x 10^-2 rad/s
&nbsp; (d) 0.26 rad/s

**ANSWER: (a)**
```
           2 pi        2 x 3.14        6.28
  omega = ------  =  ------------  =  --------  =  7.27 x 10^-5  rad/s
             T          86400          86400
```

---

### Q45
A particle in uniform circular motion completes half a revolution. The magnitude of
the change in its velocity is

(a) 0 &nbsp; (b) v &nbsp; (c) 2 v &nbsp; (d) v sqrt2

**ANSWER: (c)**
```
  After half a revolution the velocity has exactly REVERSED:

     | dv |  =  | ( -v ) - ( +v ) |  =  2 v
```

---

### Q46
A body in uniform circular motion of radius r completes a quarter of a revolution.
The ratio of the distance travelled to the magnitude of the displacement is

(a) 1 : 1 &nbsp; (b) pi : 2 sqrt2 &nbsp; (c) 2 : pi &nbsp; (d) pi : 2

**ANSWER: (b)**
```
  distance      =  (1/4) x 2 pi r  =  pi r / 2
  displacement  =  chord  =  r sqrt2      (right angle at the centre)

     ratio  =  ( pi r / 2 ) : ( r sqrt2 )  =  pi : 2 sqrt2
```

---

### Q47
A wheel rotates at 60 revolutions per minute. Its angular velocity is

(a) pi rad/s &nbsp; (b) 2 pi rad/s &nbsp; (c) 60 pi rad/s &nbsp; (d) 120 pi rad/s

**ANSWER: (b)**
```
             2 pi N        2 pi x 60
  omega  =  ---------  =  -----------  =  2 pi  rad/s
                60             60
```
> **SHORTCUT:** `rpm to rad/s -> multiply by 2 pi / 60 = pi / 30`.

---

### Q48
In uniform circular motion, which of the following remains constant?

(a) velocity &nbsp; (b) acceleration &nbsp; (c) speed &nbsp; (d) momentum

**ANSWER: (c)**
```
  Speed is constant. Velocity, acceleration and momentum are all VECTORS
  whose directions keep changing, so none of them is constant.
```

---

# PATTERN 9 — Non-uniform circular motion

### Q49
A particle moving on a circle has a tangential acceleration of 3 m/s^2 and a radial
acceleration of 4 m/s^2. Its net acceleration is

(a) 1 m/s^2 &nbsp; (b) 5 m/s^2 &nbsp; (c) 7 m/s^2 &nbsp; (d) 12 m/s^2

**ANSWER: (b)**
```
  a = sqrt( a_t^2 + a_r^2 ) = sqrt( 9 + 16 ) = sqrt(25) = 5 m/s^2
```

---

### Q50
A particle moves on a circle of radius 4 m with speed v = 2 t (SI units). At t = 2 s
its total acceleration is

(a) 2 m/s^2 &nbsp; (b) 4 m/s^2 &nbsp; (c) 4.47 m/s^2 &nbsp; (d) 6 m/s^2

**ANSWER: (c)**
```
  At t = 2 s :   v = 2 x 2 = 4 m/s

     a_t  =  dv/dt  =  2 m/s^2
     a_r  =  v^2 / r  =  16 / 4  =  4 m/s^2

     a  =  sqrt( 2^2 + 4^2 )  =  sqrt( 4 + 16 )  =  sqrt(20)  =  4.47 m/s^2
```

---

# PATTERN 10 — Relative velocity in two dimensions

### Q51
Car A moves east at 30 m/s and car B moves north at 40 m/s. The speed of A relative
to B is

(a) 10 m/s &nbsp; (b) 50 m/s &nbsp; (c) 70 m/s &nbsp; (d) 35 m/s

**ANSWER: (b)**
```
  v(A) = 30 i ,   v(B) = 40 j

  v(AB) = v(A) - v(B) = 30 i - 40 j

  | v(AB) | = sqrt( 900 + 1600 ) = sqrt(2500) = 50 m/s
```

---

### Q52
Rain falls vertically at 4 m/s. A man runs at 3 m/s. The rain appears to him to come
at a speed of

(a) 1 m/s &nbsp; (b) 5 m/s &nbsp; (c) 7 m/s &nbsp; (d) 12 m/s

**ANSWER: (b)**
```
  | v(rel) | = sqrt( 4^2 + 3^2 ) = sqrt(25) = 5 m/s

  Angle from the vertical: tan theta = 3/4  ->  theta = 37 deg (forward)
```

---

### Q53
A river 100 m wide flows at 4 m/s. A swimmer whose speed in still water is 5 m/s
wants to reach the point directly opposite. The time taken is

(a) 20 s &nbsp; (b) 25 s &nbsp; (c) 33.3 s &nbsp; (d) 50 s

**ANSWER: (c)**
```
  Effective speed across  =  sqrt( v_b^2 - v_r^2 )
                          =  sqrt( 25 - 16 )  =  sqrt(9)  =  3 m/s

  t  =  100 / 3  =  33.3 s
```
> **SHORTCUT:** "directly opposite" -> denominator `sqrt(vb^2 - vr^2)`.
> "shortest time" -> denominator `vb` alone.

---

### Q54
For the swimmer of Q53, the minimum time to cross the river (landing anywhere) is

(a) 20 s &nbsp; (b) 25 s &nbsp; (c) 33.3 s &nbsp; (d) 50 s

**ANSWER: (a)**
```
  Swim straight across:   t = d / v_b = 100 / 5 = 20 s
  (He is carried 4 x 20 = 80 m downstream, but the time is minimum.)
```

---

### Q55
A boat can move at 3 m/s in still water. It cannot reach the point directly opposite
if the river flows at

(a) 1 m/s &nbsp; (b) 2 m/s &nbsp; (c) 2.5 m/s &nbsp; (d) 4 m/s

**ANSWER: (d)**
```
  Landing directly opposite requires  sin theta = v_r / v_b  <=  1 ,
  i.e.  v_b  >  v_r .

  With v_r = 4 > v_b = 3 , it is impossible.
```

---

### Q56
Two trains 100 m and 150 m long move in opposite directions at 20 m/s and 30 m/s.
The time they take to cross each other completely is

(a) 2.5 s &nbsp; (b) 5 s &nbsp; (c) 10 s &nbsp; (d) 12.5 s

**ANSWER: (b)**
```
  Relative speed (opposite directions) = 20 + 30 = 50 m/s
  Total length to be covered = 100 + 150 = 250 m

  t = 250 / 50 = 5 s
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+-------------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY                |
  +--------------------------------------+-------------------------------------+
  |  Two vectors at 90 degrees           |  Pythagoras. Look for 3-4-5,        |
  |                                      |  6-8-10, 5-12-13.                   |
  +--------------------------------------+-------------------------------------+
  |  Two EQUAL vectors                   |  R = 2A cos(theta/2)                |
  +--------------------------------------+-------------------------------------+
  |  "Which cannot be the resultant?"    |  Test against |A-B| <= R <= A+B     |
  +--------------------------------------+-------------------------------------+
  |  | A + B | = | A - B |               |  Angle is 90 degrees. Full stop.    |
  +--------------------------------------+-------------------------------------+
  |  A . B = 0                           |  Perpendicular                      |
  |  A x B = 0                           |  Parallel                           |
  +--------------------------------------+-------------------------------------+
  |  Dot compared with cross             |  Turn it into tan theta = ...       |
  +--------------------------------------+-------------------------------------+
  |  "Maximum range"                     |  theta = 45 deg , R = u^2/g,        |
  |                                      |  H = R/4                            |
  +--------------------------------------+-------------------------------------+
  |  H and R both given                  |  tan theta = 4H / R                 |
  +--------------------------------------+-------------------------------------+
  |  Only T given, H asked               |  H = g T^2 / 8                      |
  +--------------------------------------+-------------------------------------+
  |  "Same range, two angles"            |  They add to 90 degrees.            |
  |                                      |  R = 4 sqrt(h1 h2) , T1T2 = 2R/g    |
  +--------------------------------------+-------------------------------------+
  |  "Speed / KE at the highest point"   |  v = u cos theta , KE = E cos^2 th. |
  |                                      |  NEVER zero.                        |
  +--------------------------------------+-------------------------------------+
  |  y = a x - b x^2 given               |  tan th = a , R = a/b , H = a^2/4b  |
  +--------------------------------------+-------------------------------------+
  |  "Thrown / dropped horizontally"     |  uy = 0 , T = sqrt(2h/g),           |
  |                                      |  R = uT , v = sqrt(u^2 + 2gh)       |
  +--------------------------------------+-------------------------------------+
  |  "Which lands first?"                |  Same height -> SAME TIME           |
  +--------------------------------------+-------------------------------------+
  |  rpm given                           |  omega = pi N / 30                  |
  +--------------------------------------+-------------------------------------+
  |  Frequency n given, a_c asked        |  a = 4 pi^2 n^2 r                   |
  +--------------------------------------+-------------------------------------+
  |  "What stays constant in UCM?"       |  SPEED only. Everything else is a   |
  |                                      |  vector and keeps changing.         |
  +--------------------------------------+-------------------------------------+
  |  Half a revolution                   |  | change in velocity | = 2v        |
  +--------------------------------------+-------------------------------------+
  |  Speed changing on a circle          |  a = sqrt( a_t^2 + a_r^2 )          |
  +--------------------------------------+-------------------------------------+
  |  "Cross straight opposite"           |  t = d / sqrt(vb^2 - vr^2)          |
  |  "Cross in least time"               |  t = d / vb , drift = vr d / vb     |
  +--------------------------------------+-------------------------------------+
  |  Rain + walking man                  |  sqrt(vr^2 + vm^2), tan th = vm/vr, |
  |                                      |  tilt FORWARD                       |
  +--------------------------------------+-------------------------------------+
  |  Two bodies moving, "relative"       |  v(AB) = v(A) - v(B). Draw it.      |
  +--------------------------------------+-------------------------------------+

  EAPCET: no negative marking. If you are stuck, eliminate the two silly options
  and pick between the remaining two. NEVER leave a blank.

  JEE Main: -1 for a wrong answer. If you cannot narrow it to two options,
  leave it.
```
