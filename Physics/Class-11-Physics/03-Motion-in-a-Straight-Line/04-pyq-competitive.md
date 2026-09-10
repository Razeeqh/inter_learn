# Motion in a Straight Line — JEE Main / AP EAPCET / TG EAPCET Questions

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
  AP / TG EAPCET  (Physics, 40 questions)  ->  2 to 4
  JEE Main        (Physics, 25 questions)  ->  1 to 2
```

**Take g = 10 m/s^2 in competitive exams unless told otherwise — it is almost
always chosen to keep the arithmetic clean.**

---

# PATTERN 1 — Average speed and average velocity

### Q1
A car covers the first half of a distance at 40 km/h and the second half at
60 km/h. Its average speed is

(a) 50 km/h &nbsp; (b) 48 km/h &nbsp; (c) 45 km/h &nbsp; (d) 100 km/h

**ANSWER: (b)**
```
  Equal DISTANCES  ->  harmonic mean

           2 v1 v2        2 (40)(60)        4800
   v  =  -----------  =  ------------  =  --------  =  48 km/h
           v1 + v2         40 + 60          100
```
> **SHORTCUT:** Equal distances -> `2 v1 v2 / (v1 + v2)`.
> Equal times -> `(v1 + v2)/2`. Learn which is which and you save 40 seconds.

---

### Q2
A body travels the first one-third of a distance at 10 m/s, the second third
at 20 m/s and the last third at 60 m/s. The average speed is

(a) 30 m/s &nbsp; (b) 18 m/s &nbsp; (c) 24 m/s &nbsp; (d) 20 m/s

**ANSWER: (b)**
```
                    3                      3                    3
   v  =  ---------------------  =  -----------------  =  ---------------
          1/10 + 1/20 + 1/60        (6 + 3 + 1)/60           10/60

      =  3 x 6   =   18 m/s
```

---

### Q3
A particle moves in a circle of radius R. After half a revolution, the ratio
of distance to displacement is

(a) 1 &nbsp; (b) 2 &nbsp; (c) pi / 2 &nbsp; (d) pi

**ANSWER: (c)**
```
   Distance (half circumference)  =  pi R
   Displacement (the diameter)    =  2 R

        pi R          pi
       -------   =   ----
         2 R           2
```

---

### Q4
A man walks 3 m east and then 4 m north. The ratio of distance to displacement
is

(a) 7 : 5 &nbsp; (b) 5 : 7 &nbsp; (c) 1 : 1 &nbsp; (d) 7 : 1

**ANSWER: (a)**
```
   Distance      =  3 + 4  =  7 m
   Displacement  =  sqrt( 3^2 + 4^2 )  =  sqrt(25)  =  5 m

   Ratio  =  7 : 5
```

---

### Q5
A body completes one full circle of radius r in time T. Its average velocity
over one complete revolution is

(a) 2 pi r / T &nbsp; (b) pi r / T &nbsp; (c) zero &nbsp; (d) r / T

**ANSWER: (c)** — after a full circle the body is back at the start, so the
displacement is zero and hence the average velocity is zero.
(The average **speed** would be `2 pi r / T`.)

---

# PATTERN 2 — Differentiate the position equation

### Q6
The position of a particle is `x = 2t^3 - 3t^2 + 4t + 5` (SI units). Its
acceleration at t = 2 s is

(a) 12 m/s^2 &nbsp; (b) 18 m/s^2 &nbsp; (c) 24 m/s^2 &nbsp; (d) 6 m/s^2

**ANSWER: (b)**
```
   v  =  dx/dt   =   6 t^2  -  6 t  +  4

   a  =  dv/dt   =   12 t   -  6

   At t = 2 :    a  =  12(2) - 6  =  24 - 6  =  18 m/s^2
```

---

### Q7
A particle moves so that `x = 4 - 2t + t^2`. Its velocity is zero at

(a) t = 0 &nbsp; (b) t = 1 s &nbsp; (c) t = 2 s &nbsp; (d) t = 4 s

**ANSWER: (b)**
```
   v  =  dx/dt  =  -2  +  2 t

   Put v = 0  ->  2 t = 2  ->  t = 1 s
```
> **SHORTCUT:** "Velocity is zero" means the body is turning around.
> Differentiate x once and set it to zero.

---

### Q8
The velocity of a particle is `v = 3t^2 + 2t`. The distance travelled in the
first 2 seconds is

(a) 8 m &nbsp; (b) 12 m &nbsp; (c) 16 m &nbsp; (d) 20 m

**ANSWER: (b)**
```
   x  =  integral of v dt  from 0 to 2

      =  [ t^3  +  t^2 ]  from 0 to 2

      =  ( 8 + 4 )  -  0   =   12 m
```

---

### Q9
The displacement of a body is proportional to `t^3`. Its acceleration

(a) is constant &nbsp; (b) increases with time &nbsp; (c) decreases with time
&nbsp; (d) is zero

**ANSWER: (b)**
```
   x  =  k t^3        ->      v = 3 k t^2      ->      a = 6 k t

   a  is proportional to t , so it INCREASES with time.
```

---

# PATTERN 3 — Straight application of the equations of motion

### Q10
A body starting from rest with uniform acceleration covers 20 m in the first
2 s. The distance covered in the next 2 s is

(a) 20 m &nbsp; (b) 40 m &nbsp; (c) 60 m &nbsp; (d) 80 m

**ANSWER: (c)**
```
   From rest, distances in successive equal intervals are in
   the ratio     1 : 3 : 5 : 7 ...

   First 2 s   ->  20 m   (this is the "1")
   Next  2 s   ->  3 x 20  =  60 m
```
> **SHORTCUT:** The 1 : 3 : 5 : 7 ratio kills this question in five seconds.
> It works ONLY when the body starts from rest.

---

### Q11
A body moving with an initial velocity of 5 m/s and acceleration 2 m/s^2
travels a distance in the 4th second of

(a) 10 m &nbsp; (b) 11 m &nbsp; (c) 12 m &nbsp; (d) 13 m

**ANSWER: (c)**
```
   s(nth)  =  u  +  (a/2)( 2n - 1 )

           =  5  +  (2/2)( 8 - 1 )

           =  5  +  7   =   12 m
```

---

### Q12
The velocity of a car is reduced from 20 m/s to 10 m/s over a distance of
150 m. The retardation is

(a) 1 m/s^2 &nbsp; (b) 2 m/s^2 &nbsp; (c) 0.5 m/s^2 &nbsp; (d) 5 m/s^2

**ANSWER: (a)**
```
   v^2 - u^2  =  2 a s

   100 - 400  =  2 a (150)

      -300    =  300 a

         a    =  -1 m/s^2      ->  retardation 1 m/s^2
```

---

### Q13
A train moving at 90 km/h is stopped in 10 s. The distance travelled before
stopping is

(a) 125 m &nbsp; (b) 250 m &nbsp; (c) 500 m &nbsp; (d) 100 m

**ANSWER: (a)**
```
   90 km/h  =  90 x 5/18  =  25 m/s

   Use  s = ( (u + v)/2 ) t   =   ( (25 + 0)/2 ) x 10   =   12.5 x 10

      =  125 m
```
> **SHORTCUT:** When u, v and t are known and a is not asked, use
> `s = ((u+v)/2) t`. It avoids finding a first.

---

### Q14
A body moving with uniform acceleration has velocities 10 m/s and 30 m/s at
two points. Its velocity at the midpoint of the two positions is

(a) 20 m/s &nbsp; (b) 22.36 m/s &nbsp; (c) 25 m/s &nbsp; (d) 15 m/s

**ANSWER: (b)**
```
   At the MIDPOINT IN DISTANCE:

                    +--------------+
                    |  u^2 + v^2   |            +-----------------+
        v(mid) = sqrt| ------------ |   =   sqrt |  (100+900)/2   |
                    |       2      |            +-----------------+
                    +--------------+

              =  sqrt(500)  =  22.36 m/s
```
> **SHORTCUT:** Midpoint in **distance** -> root-mean-square `sqrt((u^2+v^2)/2)`.
> Midpoint in **time** -> ordinary mean `(u+v)/2` = 20 m/s.
> Examiners love to swap these two.

---

# PATTERN 4 — Motion under gravity: free fall

### Q15
A body falls freely from rest. The ratio of the distances covered in the 1st,
2nd and 3rd seconds is

(a) 1 : 2 : 3 &nbsp; (b) 1 : 3 : 5 &nbsp; (c) 1 : 4 : 9 &nbsp; (d) 1 : 1 : 1

**ANSWER: (b)**
```
   h(nth) = (g/2)( 2n - 1 )   ->   proportional to  ( 2n - 1 )

   n = 1 , 2 , 3   gives   1 , 3 , 5
```

---

### Q16
A stone dropped from a height h reaches the ground with velocity v. To double
the striking velocity, the height must be made

(a) 2h &nbsp; (b) 4h &nbsp; (c) h/2 &nbsp; (d) sqrt(2) h

**ANSWER: (b)**
```
   v = sqrt( 2 g h )   ->    v is proportional to  sqrt(h)

   To DOUBLE v , h must become  4 TIMES.
```

---

### Q17
A body is dropped from a height of 45 m. Time taken to reach the ground
(g = 10 m/s^2) is

(a) 2 s &nbsp; (b) 3 s &nbsp; (c) 4.5 s &nbsp; (d) 9 s

**ANSWER: (b)**
```
   h = (1/2) g t^2    ->    45 = 5 t^2    ->    t^2 = 9    ->    t = 3 s
```

---

### Q18
A ball dropped from a tower covers three-fourths of the total height in the
last second of its fall. The total time of fall is

(a) 1 s &nbsp; (b) 2 s &nbsp; (c) 3 s &nbsp; (d) 4 s

**ANSWER: (b)**
```
   Total height in t seconds:            H  =  (1/2) g t^2
   Height in the last second:      (3/4) H  =  (g/2)( 2t - 1 )

   Divide the second equation by the first:

         3          2t - 1
       -----  =   ----------
         4            t^2

       3 t^2   =   8t  -  4

       3 t^2  -  8 t  +  4   =   0

               8  +/-  sqrt( 64 - 48 )        8  +/-  4
       t  =  ---------------------------  =  -----------
                        6                         6

       t  =  2 s      or      t = 2/3 s  (rejected: the fall must
                                          last more than 1 second)

   ANSWER   t = 2 s
```
> **SHORTCUT:** Whenever a question says "in the last second of its fall",
> write `h(last) = (g/2)(2t - 1)` and `H = (1/2)g t^2` and divide one by the
> other. The g cancels every time.

---

# PATTERN 5 — Motion under gravity: thrown vertically upward

### Q19
A ball thrown vertically upward returns to the thrower after 6 s. The maximum
height reached is (g = 10 m/s^2)

(a) 30 m &nbsp; (b) 45 m &nbsp; (c) 60 m &nbsp; (d) 90 m

**ANSWER: (b)**
```
   T = 2u/g   ->   6 = 2u/10   ->   u = 30 m/s

        u^2        900
   H = ------  =  ------  =  45 m
        2 g         20
```
> **SHORTCUT:** Half the total time is the time of ascent.
> Then `H = (1/2) g t(up)^2 = (1/2)(10)(9) = 45 m` — even faster.

---

### Q20
A body thrown vertically up with velocity u reaches a maximum height H. The
velocity at a height H/2 is

(a) u/2 &nbsp; (b) u / sqrt(2) &nbsp; (c) u sqrt(2) &nbsp; (d) u/4

**ANSWER: (b)**
```
   v^2  =  u^2  -  2 g (H/2)   =   u^2  -  g H

   But  H = u^2 / 2g , so  g H = u^2 / 2

   v^2  =  u^2  -  u^2/2   =   u^2 / 2

   v    =  u / sqrt(2)
```

---

### Q21
Two balls are thrown vertically upward with speeds u and 2u. The ratio of the
maximum heights reached is

(a) 1 : 2 &nbsp; (b) 1 : 4 &nbsp; (c) 2 : 1 &nbsp; (d) 4 : 1

**ANSWER: (b)**
```
   H  is proportional to  u^2

   Ratio  =  u^2 : (2u)^2  =  1 : 4
```

---

### Q22
A ball is thrown vertically upward with 20 m/s from the top of a tower 25 m
high. The time taken to hit the ground is (g = 10 m/s^2)

(a) 3 s &nbsp; (b) 4 s &nbsp; (c) 5 s &nbsp; (d) 6 s

**ANSWER: (c)**
```
   Up is positive:  u = +20 , a = -10 , s = -25

      -25  =  20 t  -  5 t^2

    5 t^2  -  20 t  -  25  =  0

      t^2  -   4 t  -   5  =  0

      ( t - 5 )( t + 1 )  =  0     ->     t = 5 s
```
> **SHORTCUT:** Landing BELOW the throwing point means s is NEGATIVE.
> That single sign is where most students lose the question.

---

### Q23
A stone thrown vertically up returns to the ground. Which statement is
correct?

(a) acceleration is zero at the top &nbsp;
(b) velocity is zero at the top &nbsp;
(c) both are zero at the top &nbsp;
(d) neither is zero at the top

**ANSWER: (b)** — the velocity is zero at the top but the acceleration stays
`g = 9.8 m/s^2` downward throughout the flight.

---

# PATTERN 6 — Graph reading

### Q24
The slope of a velocity-time graph gives

(a) displacement &nbsp; (b) velocity &nbsp; (c) acceleration &nbsp;
(d) distance

**ANSWER: (c)**

---

### Q25
The area under an acceleration-time graph gives

(a) displacement &nbsp; (b) change in velocity &nbsp; (c) velocity &nbsp;
(d) jerk

**ANSWER: (b)** — area under a-t = `v - u`.

---

### Q26
Which of the following position-time graphs is impossible?

```
  (a)  x |    /            (b)  x |------
         |  /                     |
         |/                       |
         +-------- t              +-------- t

  (c)  x |   |             (d)  x |     .
         |   |                    |   .
         |   |                    | .
         +---+---- t              +-------- t
```

**ANSWER: (c)** — a vertical line means the body is at many positions at the
same instant, i.e. infinite velocity. Impossible.

---

### Q27
From the v-t graph shown, the displacement in the first 10 s is

```
   v |
(m/s)|
   10|        /|\
     |      /  | \
     |    /    |  \
     |  /      |   \
   0 +/--------+----\------- t (s)
     0    5         10
```

(a) 25 m &nbsp; (b) 50 m &nbsp; (c) 75 m &nbsp; (d) 100 m

**ANSWER: (b)**
```
   The figure is a triangle of base 10 s and height 10 m/s.

   Area  =  (1/2) x 10 x 10   =   50 m
```

---

### Q28
A body has a v-t graph that is a straight line passing through the origin.
The body is moving with

(a) uniform velocity &nbsp; (b) uniform acceleration &nbsp;
(c) increasing acceleration &nbsp; (d) zero acceleration

**ANSWER: (b)** — constant slope means constant acceleration, and passing
through the origin means it started from rest.

---

# PATTERN 7 — Relative velocity

### Q29
Two trains, 120 m and 80 m long, run on parallel tracks in opposite directions
at 20 m/s and 30 m/s. The time they take to cross each other is

(a) 2 s &nbsp; (b) 4 s &nbsp; (c) 5 s &nbsp; (d) 10 s

**ANSWER: (b)**
```
   Opposite directions  ->  relative speed  =  20 + 30  =  50 m/s

   Distance  =  120 + 80  =  200 m

   t  =  200 / 50   =   4 s
```

---

### Q30
A police jeep moving at 30 m/s chases a thief's car moving at 20 m/s. The gap
between them is 100 m. Time taken to catch the thief is

(a) 5 s &nbsp; (b) 10 s &nbsp; (c) 20 s &nbsp; (d) 25 s

**ANSWER: (b)**
```
   Same direction  ->  relative speed  =  30 - 20  =  10 m/s

   t  =  100 / 10   =   10 s
```
> **SHORTCUT:** All chase and overtake problems are
> `time = gap / relative speed`. Never track the two positions separately.

---

### Q31
Rain falls vertically downward at 8 m/s. A lift descends at 3 m/s. The speed
of the rain relative to a person in the lift is

(a) 11 m/s &nbsp; (b) 5 m/s &nbsp; (c) 8 m/s &nbsp; (d) 3 m/s

**ANSWER: (b)**
```
   Take down as positive:

   v(rain, lift)  =  8  -  3   =   5 m/s downwards
```

---

### Q32
Two bodies are dropped from the tops of two towers of heights h and 4h. The
ratio of the times they take to reach the ground is

(a) 1 : 2 &nbsp; (b) 1 : 4 &nbsp; (c) 2 : 1 &nbsp; (d) 1 : 16

**ANSWER: (a)**
```
   t = sqrt( 2h / g )   ->   t is proportional to  sqrt(h)

   Ratio  =  sqrt(h) : sqrt(4h)   =   1 : 2
```

---

# PATTERN 8 — Stopping distance

### Q33
The stopping distance of a car moving at speed v is d. If the speed is
doubled, the stopping distance (same braking force) becomes

(a) d &nbsp; (b) 2d &nbsp; (c) 4d &nbsp; (d) d/2

**ANSWER: (c)**
```
   d = v^2 / (2a)    ->    d is proportional to  v^2

   Double v  ->  4 times d.
```

---

### Q34
A car moving at 20 m/s stops in 4 s after the brakes are applied. The stopping
distance is

(a) 20 m &nbsp; (b) 40 m &nbsp; (c) 80 m &nbsp; (d) 100 m

**ANSWER: (b)**
```
   s  =  ( (u + v)/2 ) t   =   ( (20 + 0)/2 ) x 4   =   10 x 4   =   40 m
```

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  "Half the distance at v1, half   |  2 v1 v2 / ( v1 + v2 )             |
  |  at v2"                           |                                    |
  |                                   |                                    |
  |  "First hour at v1, next hour     |  ( v1 + v2 ) / 2                   |
  |  at v2"                           |                                    |
  |                                   |                                    |
  |  Body returns to the start        |  displacement = 0 ,                |
  |                                   |  average velocity = 0              |
  |                                   |                                    |
  |  "Starts from rest", successive   |  1 : 3 : 5 : 7  for the intervals  |
  |  equal time intervals             |  1 : 4 : 9 : 16 for the totals     |
  |                                   |                                    |
  |  "In the nth second"              |  s = u + (a/2)(2n - 1)             |
  |                                   |  NOT ut + (1/2)at^2                |
  |                                   |                                    |
  |  Time is NOT given and NOT asked  |  v^2 - u^2 = 2 a s                 |
  |                                   |                                    |
  |  a is NOT given and NOT asked     |  s = ( (u+v)/2 ) t                 |
  |                                   |                                    |
  |  x given as a polynomial in t     |  differentiate once for v,         |
  |                                   |  twice for a                       |
  |                                   |                                    |
  |  v given as a function of t,      |  INTEGRATE                         |
  |  displacement asked               |                                    |
  |                                   |                                    |
  |  "Maximum height"                 |  H = u^2 / 2g                      |
  |                                   |                                    |
  |  "Time to return to the thrower"  |  T = 2u / g                        |
  |                                   |                                    |
  |  Thrown UP from a tower           |  s is NEGATIVE at landing;         |
  |                                   |  solve the quadratic, keep t > 0   |
  |                                   |                                    |
  |  Midpoint IN DISTANCE             |  sqrt( (u^2 + v^2) / 2 )           |
  |  Midpoint IN TIME                 |  ( u + v ) / 2                     |
  |                                   |                                    |
  |  Two bodies, both under gravity   |  relative acceleration = 0 ,       |
  |                                   |  so time = gap / relative velocity |
  |                                   |                                    |
  |  Chase / overtake / cross         |  time = distance / relative speed  |
  |                                   |                                    |
  |  Same direction / opposite        |  SUBTRACT the speeds / ADD them    |
  |                                   |                                    |
  |  v-t graph, displacement asked    |  find the AREA                     |
  |  v-t graph, acceleration asked    |  find the SLOPE                    |
  |                                   |                                    |
  |  A VERTICAL line on any x-t or    |  the graph is IMPOSSIBLE           |
  |  v-t graph                        |                                    |
  |                                   |                                    |
  |  Speed doubled, stopping distance |  4 times (proportional to v^2)     |
  |                                   |                                    |
  |  Stuck, and it's EAPCET           |  GUESS - no negative marking       |
  +-----------------------------------+------------------------------------+
```

---

# THE UNIT-CONVERSION TABLE TO KEEP IN YOUR HEAD

```
  +-------------+------------+          +-------------+------------+
  |  18 km/h    |   5 m/s    |          |  72 km/h    |  20 m/s    |
  |  36 km/h    |  10 m/s    |          |  90 km/h    |  25 m/s    |
  |  54 km/h    |  15 m/s    |          | 108 km/h    |  30 m/s    |
  +-------------+------------+          +-------------+------------+

  km/h  ->  m/s :  multiply by  5/18
  m/s   ->  km/h:  multiply by  18/5
```

---

# PROPORTIONALITIES THAT ANSWER "RATIO" QUESTIONS INSTANTLY

```
  +------------------------------------+------------------------------+
  |  Free fall: time to fall height h  |  t  prop.  sqrt(h)           |
  |  Free fall: striking speed         |  v  prop.  sqrt(h)           |
  |  Free fall: height in time t       |  h  prop.  t^2               |
  |  Thrown up: maximum height         |  H  prop.  u^2               |
  |  Thrown up: time of flight         |  T  prop.  u                 |
  |  Braking distance                  |  d  prop.  v^2               |
  |  From rest: distance in time t     |  s  prop.  t^2               |
  +------------------------------------+------------------------------+
```
