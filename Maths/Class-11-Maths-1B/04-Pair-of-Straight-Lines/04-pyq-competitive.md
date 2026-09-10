# Pair of Straight Lines — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 wrong       |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from Pair of Straight Lines:**

```
  AP EAPCET  (Maths, 80 questions)  ->  2 to 3
  TG EAPCET  (Maths, 80 questions)  ->  2 to 3
  JEE Main   (Maths, 25 questions)  ->  0 to 1
                                        (usually hidden inside a circle or
                                         conic question that needs the
                                         HOMOGENISATION trick)
```

This is a **formula chapter**. Almost every EAPCET question here is finished in
under 45 seconds if you know six formulas. It is one of the best
marks-per-minute chapters in the whole paper.

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with the official papers before your exam.

**The six formulas that answer 90 percent of these questions:**

```
  +--------------------------------------------------------------------+
  |  1.  tan(theta) = 2 sqrt(h^2 - ab) / abs(a + b)                     |
  |  2.  PERPENDICULAR  <=>  a + b = 0                                  |
  |  3.  COINCIDENT     <=>  h^2 = ab                                   |
  |  4.  m1 + m2 = -2h/b  ,  m1 m2 = a/b                                |
  |  5.  BISECTORS:  (x^2 - y^2)/(a - b) = xy/h                         |
  |  6.  abc + 2fgh - af^2 - bg^2 - ch^2 = 0                            |
  |                                                                     |
  |      REMEMBER:  h, g, f are HALF the visible coefficient.           |
  +--------------------------------------------------------------------+
```

---

# PATTERN 1 — Angle between a homogeneous pair (the free mark)

### Q1
The angle between the lines `2x^2 - 3xy + y^2 = 0` is

(a) `Arctan(1/3)` &nbsp;&nbsp; (b) `Arctan(3)` &nbsp;&nbsp; (c) 45 deg &nbsp;&nbsp; (d) 90 deg

**ANSWER: (a)**
```
   a = 2 , h = -3/2 , b = 1
   h^2 - ab = 9/4 - 2 = 1/4        sqrt = 1/2
   a + b = 3
   tan(theta) = 2(1/2)/3 = 1/3
```
*Check: `(2x - y)(x - y) = 0`, slopes 2 and 1, `abs((2-1)/(1+2)) = 1/3`.*

---

### Q2
The angle between the lines `3x^2 + 10xy + 8y^2 = 0` is

(a) `Arctan(2/11)` &nbsp;&nbsp; (b) `Arctan(11/2)` &nbsp;&nbsp; (c) 30 deg &nbsp;&nbsp; (d) 60 deg

**ANSWER: (a)**
```
   a = 3 , h = 5 , b = 8
   h^2 - ab = 25 - 24 = 1          sqrt = 1
   a + b = 11
   tan(theta) = 2(1)/11 = 2/11
```
*Check: `(3x + 4y)(x + 2y) = 0`, slopes -3/4 and -1/2,
`abs((-3/4 + 1/2)/(1 + 3/8)) = (1/4)/(11/8) = 2/11`.*

---

### Q3
The angle between the lines `x^2 + 4xy + y^2 = 0` is

(a) 30 deg &nbsp;&nbsp; (b) 45 deg &nbsp;&nbsp; (c) 60 deg &nbsp;&nbsp; (d) 90 deg

**ANSWER: (c)**
```
   a = 1 , h = 2 , b = 1
   h^2 - ab = 4 - 1 = 3            sqrt = sqrt(3)
   a + b = 2
   tan(theta) = 2 sqrt(3)/2 = sqrt(3)      ->     theta = 60 degrees
```

---

### Q4
The angle between the lines `6x^2 - 5xy - 6y^2 = 0` is

(a) 30 deg &nbsp;&nbsp; (b) 45 deg &nbsp;&nbsp; (c) 60 deg &nbsp;&nbsp; (d) 90 deg

**ANSWER: (d)**
```
   a + b = 6 + (-6) = 0      ->     PERPENDICULAR, 90 degrees
```

> **SHORTCUT:** before doing ANY arithmetic, add the coefficient of `x^2` to the
> coefficient of `y^2`. If it is zero the answer is 90 degrees and you are done
> in two seconds. Examiners plant this option in almost every set.

---

### Q5
The angle between the lines `x^2 - 2xy sec(alpha) + y^2 = 0` is

(a) `alpha` &nbsp;&nbsp; (b) `2 alpha` &nbsp;&nbsp; (c) `alpha/2` &nbsp;&nbsp; (d) `90 - alpha`

**ANSWER: (a)**
```
   a = 1 , h = -sec(alpha) , b = 1
   h^2 - ab = sec^2(alpha) - 1 = tan^2(alpha)
   a + b = 2
   tan(theta) = 2 abs(tan alpha)/2 = abs(tan alpha)      ->     theta = alpha
```

---

# PATTERN 2 — Nature of the pair (real / coincident / imaginary)

### Q6
The equation `x^2 + 2xy + 2y^2 = 0` represents

(a) two real distinct lines &nbsp;&nbsp; (b) two coincident lines
(c) two imaginary lines &nbsp;&nbsp; (d) a circle

**ANSWER: (c)**
```
   a = 1 , h = 1 , b = 2
   h^2 - ab = 1 - 2 = -1 < 0     ->    imaginary; the only real point is (0,0)
```

---

### Q7
`x^2 + 4xy + k y^2 = 0` represents a pair of coincident lines if k =

(a) 2 &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) 16

**ANSWER: (b)**
```
   Coincident  <=>  h^2 = ab   ->   4 = k     ->     k = 4
   (indeed  x^2 + 4xy + 4y^2 = (x + 2y)^2 )
```

---

### Q8
`k x^2 + 6xy - 3y^2 = 0` represents a pair of perpendicular lines if k =

(a) -3 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 6 &nbsp;&nbsp; (d) 9

**ANSWER: (b)**
```
   a + b = 0    ->    k - 3 = 0    ->    k = 3
```

---

### Q9
`k x^2 - 8xy + y^2 = 0` represents perpendicular lines if k =

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) -8

**ANSWER: (b)**
```
   a + b = k + 1 = 0    ->    k = -1
```

---

# PATTERN 3 — Sum and product of slopes, and slope conditions

### Q10
The sum of the slopes of the lines `2x^2 + 5xy + 3y^2 = 0` is

(a) 5/3 &nbsp;&nbsp; (b) -5/3 &nbsp;&nbsp; (c) 2/3 &nbsp;&nbsp; (d) -2/3

**ANSWER: (b)**
```
   a = 2 , 2h = 5 , b = 3
   m1 + m2 = -2h/b = -5/3
```
*Check: `(2x + 3y)(x + y) = 0`, slopes -2/3 and -1; sum -5/3.*

---

### Q11
If the slope of one line of `2x^2 - 5xy + k y^2 = 0` is four times the slope of
the other, then k =

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 8

**ANSWER: (b)**
```
   Ratio p : q = 1 : 4  ->   4 p q h^2 = a b (p + q)^2
                            4 (1)(4) h^2 = a b (25)
                            16 h^2 = 25 a b

   h = -5/2 , a = 2 , b = k :   16 (25/4) = 25 (2) k
                                    100   = 50 k      ->      k = 2
```
*Check: `2x^2 - 5xy + 2y^2 = (2x - y)(x - 2y)`, slopes 2 and 1/2, and
`2 = 4 x (1/2)`. Correct.*

---

### Q12
If one line of `6x^2 - xy + 4c y^2 = 0` is `3x + 4y = 0`, then c =

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) -3

**ANSWER: (d)**
```
   y = m x is a line of the pair  <=>  b m^2 + 2h m + a = 0

   3x + 4y = 0  ->  m = -3/4 ;   a = 6 , 2h = -1 , b = 4c

        4c (9/16)  +  (-1)(-3/4)  +  6  =  0
        (9c/4)  +  3/4  +  6  =  0
        9c/4 = -27/4     ->     c = -3
```
*Check: `6x^2 - xy - 12y^2 = (3x + 4y)(2x - 3y)`. Correct.*

---

### Q13
The lines `a x^2 + 2h xy + b y^2 = 0` are equally inclined to the coordinate axes
if

(a) `a = b` &nbsp;&nbsp; (b) `h = 0` &nbsp;&nbsp; (c) `a + b = 0` &nbsp;&nbsp; (d) `h^2 = ab`

**ANSWER: (b)**
```
   Equally inclined to the axes means the slopes are m and -m, so
        m1 + m2 = -2h/b = 0      ->      h = 0
```

---

### Q14
The sum of the slopes of `a x^2 + 2h xy + b y^2 = 0` equals their product if

(a) `a + 2h = 0` &nbsp;&nbsp; (b) `b + 2h = 0` &nbsp;&nbsp; (c) `a + b = 0` &nbsp;&nbsp; (d) `h = 0`

**ANSWER: (a)**
```
   -2h/b = a/b     ->     -2h = a     ->     a + 2h = 0
```

---

# PATTERN 4 — Bisectors

### Q15
The pair of bisectors of the angles between `x^2 - 5xy + 4y^2 = 0` is

(a) `5x^2 - 6xy - 5y^2 = 0` &nbsp;&nbsp; (b) `5x^2 + 6xy - 5y^2 = 0`
(c) `3x^2 - 5xy - 3y^2 = 0` &nbsp;&nbsp; (d) `x^2 - y^2 = 0`

**ANSWER: (a)**
```
   a = 1 , h = -5/2 , b = 4 ,  a - b = -3

     (x^2 - y^2)/(-3) = xy/(-5/2)
     5(x^2 - y^2) = (-3)(-2xy) = 6xy
     5x^2 - 6xy - 5y^2 = 0
```

> **SHORTCUT:** a bisector pair ALWAYS satisfies
> `(coeff of x^2) + (coeff of y^2) = 0`. Here only (a) and (b) survive that test,
> and only one of them can have the right `xy` sign. That kills two options
> without any work.

---

### Q16
The pair of bisectors of `2x^2 - 3xy - 2y^2 = 0` is

(a) `3x^2 - 8xy - 3y^2 = 0` &nbsp;&nbsp; (b) `3x^2 + 8xy - 3y^2 = 0`
(c) `2x^2 + 3xy - 2y^2 = 0` &nbsp;&nbsp; (d) `x^2 + y^2 = 0`

**ANSWER: (b)**
```
   a = 2 , h = -3/2 , b = -2 ,  a - b = 4

     (x^2 - y^2)/4 = xy/(-3/2) = -2xy/3
     3(x^2 - y^2) = -8xy
     3x^2 + 8xy - 3y^2 = 0
```
*Check: the original slopes are -2 and 1/2 (inclinations 116.565 and 26.565 deg),
so the bisector inclinations are 71.565 and 161.565, i.e. slopes 3 and -1/3.
From `3x^2 + 8xy - 3y^2 = 0`: `3m^2 - 8m - 3 = 0`, roots 3 and -1/3. Correct.*

---

### Q17
The bisectors of the angles between `x^2 - y^2 = 0` are

(a) `x^2 - y^2 = 0` &nbsp;&nbsp; (b) `xy = 0` &nbsp;&nbsp; (c) `x^2 + y^2 = 0` &nbsp;&nbsp; (d) `x = y`

**ANSWER: (b)**
```
   a = 1 , b = -1 , h = 0 .   With h = 0 the relation
        h (x^2 - y^2) = (a - b) xy      becomes      2 xy = 0
```
*Sensible: `x^2 - y^2 = 0` is the pair `y = x`, `y = -x`, whose bisectors are the
two coordinate axes, i.e. `xy = 0`.*

---

### Q18
If `x^2 - 2p xy - y^2 = 0` and `x^2 - 2q xy - y^2 = 0` are such that each pair
bisects the angles between the other, then `p q` =

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) -2

**ANSWER: (b)**
```
   Bisectors of  x^2 - 2p xy - y^2 = 0   ( a = 1 , h = -p , b = -1 ) :

        h (x^2 - y^2) = (a - b) xy
        -p (x^2 - y^2) = 2 xy
        x^2 + (2/p) xy - y^2 = 0            (divide by -p)

   Comparing with  x^2 - 2q xy - y^2 = 0 :

        2/p = -2q     ->     p q = -1
```

---

# PATTERN 5 — Pairs built from other pairs

### Q19
The combined equation of the lines through the origin perpendicular to
`x^2 - 3xy + 2y^2 = 0` is

(a) `2x^2 + 3xy + y^2 = 0` &nbsp;&nbsp; (b) `2x^2 - 3xy + y^2 = 0`
(c) `x^2 + 3xy + 2y^2 = 0` &nbsp;&nbsp; (d) `y^2 - 3xy + 2x^2 = 0`

**ANSWER: (a)**
```
   Rule: swap a and b, flip the sign of h.
        a = 1 , 2h = -3 , b = 2    ->    2x^2 + 3xy + y^2 = 0
```
*Check: original slopes 1 and 1/2, so the perpendicular slopes are -1 and -2;
`(y + x)(y + 2x) = 2x^2 + 3xy + y^2`.*

---

### Q20
The combined equation of the lines through the origin perpendicular to
`2x^2 - 5xy + 2y^2 = 0` is

(a) `2x^2 + 5xy + 2y^2 = 0` &nbsp;&nbsp; (b) `2x^2 - 5xy + 2y^2 = 0`
(c) `5x^2 - 2xy + 5y^2 = 0` &nbsp;&nbsp; (d) `x^2 + y^2 = 0`

**ANSWER: (a)**
```
   a = b = 2 here, so swapping changes nothing; only the sign of h flips.
```

---

### Q21
The pair of lines through the origin parallel to
`2x^2 + 3xy - 2y^2 - 5x + 5y - 3 = 0` is

(a) `2x^2 + 3xy - 2y^2 = 0` &nbsp;&nbsp; (b) `2x^2 - 3xy - 2y^2 = 0`
(c) `2x^2 + 3xy + 2y^2 = 0` &nbsp;&nbsp; (d) `-5x + 5y - 3 = 0`

**ANSWER: (a)** Just delete the `g`, `f`, `c` terms — they shift, never tilt.

---

# PATTERN 6 — The general equation: is it a pair? find k

### Q22
`lambda x^2 + 10xy + 3y^2 - 15x - 21y + 18 = 0` represents a pair of straight
lines if `lambda` =

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
   a = lambda , h = 5 , b = 3 , g = -15/2 , f = -21/2 , c = 18

   abc = 54 lambda ;   2fgh = 787.5 ;   af^2 = 110.25 lambda ;
   bg^2 = 168.75 ;     ch^2 = 450

   54 lambda + 787.5 - 110.25 lambda - 168.75 - 450 = 0
   -56.25 lambda + 168.75 = 0     ->     lambda = 3
```
*Check: `3x^2 + 10xy + 3y^2 - 15x - 21y + 18 = (3x + y - 6)(x + 3y - 3)`.*

---

### Q23
`12x^2 + 7xy - 12y^2 - x + 7y + k = 0` represents a pair of straight lines if k =

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) -7

**ANSWER: (b)**
```
   a = 12 , h = 7/2 , b = -12 , g = -1/2 , f = 7/2 , c = k

   abc  = -144 k
   2fgh = 2 (7/2)(-1/2)(7/2)  = -49/4  = -12.25
   af^2 = 12 (49/4)           = 147
   bg^2 = -12 (1/4)           = -3
   ch^2 = k (49/4)            = 12.25 k

   -144k - 12.25 - 147 + 3 - 12.25 k = 0
   -156.25 k = 156.25       ->      k = -1
```
*Check: `12x^2 + 7xy - 12y^2 - x + 7y - 1 = (3x + 4y - 1)(4x - 3y + 1)`.*

> **SHORTCUT:** notice `a + b = 12 - 12 = 0`, so whatever k turns out to be, these
> two lines are PERPENDICULAR. If a follow-up part asks for the angle, it is 90
> degrees — no work at all.

---

### Q24
`x^2 - 3xy + lambda y^2 + 3x - 5y + 2 = 0` is a pair of lines if `lambda` =

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
   a = 1 , h = -3/2 , b = lambda , g = 3/2 , f = -5/2 , c = 2

   2 lambda + 11.25 - 6.25 - 2.25 lambda - 4.5 = 0
   -0.25 lambda + 0.5 = 0      ->     lambda = 2
```
*Check: it factorises as `(x - y + 2)(x - 2y + 1)`.*

---

# PATTERN 7 — Point of intersection of the pair

### Q25
The point of intersection of the lines `12x^2 + 7xy - 12y^2 - x + 7y - 1 = 0` is

(a) `(-1/25, 7/25)` &nbsp;&nbsp; (b) `(1/25, -7/25)` &nbsp;&nbsp; (c) `(1, -1)` &nbsp;&nbsp; (d) `(0, 0)`

**ANSWER: (a)**
```
   a = 12 , h = 7/2 , b = -12 , g = -1/2 , f = 7/2

        a x + h y + g = 0   ->   24x + 7y - 1 = 0
        h x + b y + f = 0   ->    7x - 24y + 7 = 0

   Solve:  24x + 7y = 1  and  7x - 24y = -7
        x 24 :  576x + 168y = 24
        x  7 :   49x - 168y = -49
        Add   :  625x = -25      ->     x = -1/25
        Then  24(-1/25) + 7y = 1  ->  7y = 1 + 24/25 = 49/25  ->  y = 7/25
```
*Check with the factorisation `(3x + 4y - 1)(4x - 3y + 1) = 0`:
`3(-1/25) + 4(7/25) - 1 = (-3 + 28 - 25)/25 = 0`, and
`4(-1/25) - 3(7/25) + 1 = (-4 - 21 + 25)/25 = 0`. Correct.*

---

### Q26
The lines `2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0` intersect at

(a) `(19/15, 7/15)` &nbsp;&nbsp; (b) `(7/15, 19/15)` &nbsp;&nbsp; (c) `(3, 2)` &nbsp;&nbsp; (d) `(-1, 1)`

**ANSWER: (a)**
```
        4x - 13y + 1 = 0
       13x + 14y - 23 = 0

   -> 225y = 105 , y = 7/15 ; x = 19/15
```

> **SHORTCUT for MCQs:** you do not need to solve anything. Just substitute each
> option into the ORIGINAL equation. The correct point makes it zero. With four
> options that is usually faster than the algebra.

---

# PATTERN 8 — Parallel pair and the distance between the lines

### Q27
The distance between the parallel lines
`x^2 + 2xy + y^2 - 8ax - 8ay - 9a^2 = 0` is

(a) `2 sqrt(2) abs(a)` &nbsp;&nbsp; (b) `5 sqrt(2) abs(a)` &nbsp;&nbsp; (c) `10 abs(a)` &nbsp;&nbsp; (d) `sqrt(5) abs(a)`

**ANSWER: (b)**
```
   Coefficients:  A = 1 , h = 1 , b = 1 , g = -4a , f = -4a , c = -9a^2
   (h^2 = 1 = ab , so they really are parallel)

                    g^2 - A c                16a^2 + 9a^2
   d = 2 sqrt( ----------------- ) = 2 sqrt( -------------- )
                   A ( A + b )                    2

                  25 a^2          10 abs(a)
     = 2 sqrt( ----------- )  =  ------------  =  5 sqrt(2) abs(a)
                    2               sqrt(2)
```
*Check: `x + y = -g +/- sqrt(g^2 - Ac) = 4a +/- 5a`, giving `x + y = 9a` and
`x + y = -a`; distance `= abs(9a + a)/sqrt(2) = 10 abs(a)/sqrt(2)`. Correct.*

---

### Q28
The distance between the parallel lines `9x^2 - 6xy + y^2 + 18x - 6y + 8 = 0` is

(a) `1/sqrt(10)` &nbsp;&nbsp; (b) `2/sqrt(10)` &nbsp;&nbsp; (c) `sqrt(10)` &nbsp;&nbsp; (d) `2 sqrt(10)`

**ANSWER: (b)**
```
   a = 9 , h = -3 , b = 1 , g = 9 , c = 8      ( h^2 = 9 = ab )

                    81 - 72                9              2
   d = 2 sqrt( ----------------- ) = 2 sqrt(----) = ------------
                    9 (10)                   90        sqrt(10)
```
*Check: the lines are `3x - y + 2 = 0` and `3x - y + 4 = 0`.*

---

# PATTERN 9 — Homogenisation (the JEE-flavoured pattern)

### Q29
The lines joining the origin to the points of intersection of `x^2 + y^2 = 4` and
`x + y = 2` are

(a) perpendicular &nbsp;&nbsp; (b) parallel &nbsp;&nbsp; (c) inclined at 60 deg &nbsp;&nbsp; (d) coincident

**ANSWER: (a)**
```
   Line as "= 1" :   (x + y)/2 = 1

   Homogenise:   x^2 + y^2 - 4 [ (x + y)/2 ]^2 = 0
                 x^2 + y^2 - (x + y)^2 = 0
                 x^2 + y^2 - x^2 - 2xy - y^2 = 0
                 -2xy = 0     ->     xy = 0

   That is the pair of coordinate axes  ->  PERPENDICULAR.
```
*Sanity check: the line meets the circle at `(2,0)` and `(0,2)`, so the two joining
lines really are the x-axis and the y-axis.*

---

### Q30
The chord `l x + m y = 1` of the circle `x^2 + y^2 = a^2` subtends a right angle
at the centre if

(a) `a^2(l^2 + m^2) = 1` &nbsp;&nbsp; (b) `a^2(l^2 + m^2) = 2`
(c) `a^2(l^2 + m^2) = 4` &nbsp;&nbsp; (d) `l^2 + m^2 = 2a^2`

**ANSWER: (b)**
```
   Homogenise:  x^2 + y^2 - a^2 (l x + m y)^2 = 0

        (1 - a^2 l^2) x^2 - 2 a^2 l m xy + (1 - a^2 m^2) y^2 = 0

   Right angle  <=>  sum of the x^2 and y^2 coefficients = 0 :

        2 - a^2 (l^2 + m^2) = 0
```
*(For contrast: option (a) is the condition for the two lines to COINCIDE, which
happens when the line is a tangent.)*

---

### Q31
The lines joining the origin to the points of intersection of `y = m x + c` and
`x^2 + y^2 = a^2` are perpendicular if

(a) `2c^2 = a^2(1 + m^2)` &nbsp;&nbsp; (b) `c^2 = a^2(1 + m^2)`
(c) `c^2 = 2a^2(1 + m^2)` &nbsp;&nbsp; (d) `a^2 = 2c^2(1 + m^2)`

**ANSWER: (a)**
```
   Line as "= 1" :   (y - m x)/c = 1

   Homogenise:  x^2 + y^2 - a^2 (y - m x)^2 / c^2 = 0     (times c^2)

        c^2 x^2 + c^2 y^2 - a^2 (y^2 - 2 m x y + m^2 x^2) = 0

        coeff x^2 :  c^2 - a^2 m^2
        coeff y^2 :  c^2 - a^2

   Sum = 0 :   2 c^2 - a^2 (1 + m^2) = 0
```

---

### Q32
The lines joining the origin to the points of intersection of
`7x^2 - 4xy + 8y^2 + 2x - 4y - 8 = 0` and `3x - y = 2` are

(a) perpendicular &nbsp;&nbsp; (b) parallel &nbsp;&nbsp; (c) at 45 deg &nbsp;&nbsp; (d) coincident

**ANSWER: (a)**
```
   U = (3x - y)/2 = 1

   7x^2 - 4xy + 8y^2 + (2x - 4y)U - 8U^2 = 0

        (2x - 4y)(3x - y)/2 = (x - 2y)(3x - y) = 3x^2 - 7xy + 2y^2
        -8 (3x - y)^2/4 = -2(9x^2 - 6xy + y^2) = -18x^2 + 12xy - 2y^2

   x^2 :  7 + 3 - 18 = -8        y^2 :  8 + 2 - 2 = 8
   Sum = 0    ->    PERPENDICULAR
```

---

### Q33
The value of k for which the lines joining the origin to the points of
intersection of `2x^2 - 2xy + 3y^2 + 2x - y - 1 = 0` and `x + 2y = k` are
perpendicular is

(a) `k = 0` &nbsp;&nbsp; (b) `k = +/- 1` &nbsp;&nbsp; (c) `k = +/- 2` &nbsp;&nbsp; (d) `k = 5`

**ANSWER: (b)**
```
   U = (x + 2y)/k .   Homogenise and multiply by k^2 :

        2k^2 x^2 - 2k^2 xy + 3k^2 y^2 + k(2x - y)(x + 2y) - (x + 2y)^2 = 0

        (2x - y)(x + 2y) = 2x^2 + 3xy - 2y^2
        (x + 2y)^2       = x^2 + 4xy + 4y^2

        coeff x^2 :  2k^2 + 2k - 1
        coeff y^2 :  3k^2 - 2k - 4

   Sum = 0 :   5k^2 - 5 = 0     ->     k = +/- 1
```

---

# PATTERN 10 — Area of the triangle, product of perpendiculars

### Q34
The area of the triangle formed by `18x^2 - 9xy + y^2 = 0` and the line `y = 9` is

(a) 27/4 &nbsp;&nbsp; (b) 27/2 &nbsp;&nbsp; (c) 9/4 &nbsp;&nbsp; (d) 81/4

**ANSWER: (a)**
```
   a = 18 , h = -9/2 , b = 1 ;  line  0.x + 1.y - 9 = 0  ->  l = 0, m = 1, n = -9

   h^2 - ab = 9/4 ,  sqrt = 3/2
   a m^2 - 2hlm + b l^2 = 18

   Area = 81 (3/2)/18 = 27/4
```
*Check: the lines are `y = 3x`, `y = 6x`; vertices `(0,0)`, `(3,9)`, `(3/2,9)`;
area `= (1/2)(27 - 13.5) = 27/4`.*

---

### Q35
The area of the triangle formed by `x^2 - 3xy + 2y^2 = 0` and the line
`x + y = 5` is

(a) 25/12 &nbsp;&nbsp; (b) 25/6 &nbsp;&nbsp; (c) 5/12 &nbsp;&nbsp; (d) 25/4

**ANSWER: (a)**
```
   a = 1 , h = -3/2 , b = 2 ,  l = 1 , m = 1 , n = -5

   h^2 - ab = 9/4 - 2 = 1/4 ,  sqrt = 1/2
   a m^2 - 2hlm + b l^2 = 1 + 3 + 2 = 6

   Area = 25 (1/2)/6 = 25/12
```
*Check: the lines are `y = x` and `y = x/2`; they cut `x + y = 5` at `(2.5, 2.5)`
and `(10/3, 5/3)`; area `= (1/2) abs(2.5 x 5/3 - 10/3 x 2.5) = 25/12`.*

---

### Q36
The triangle formed by the lines `x^2 - 4xy + y^2 = 0` and `x + y = 1` is

(a) right angled &nbsp;&nbsp; (b) isosceles but not equilateral
(c) equilateral &nbsp;&nbsp; (d) scalene

**ANSWER: (c)**
```
   a = 1 , h = -2 , b = 1
   h^2 - ab = 3 ,  a + b = 2   ->   tan(theta) = 2 sqrt(3)/2 = sqrt(3)
   The angle at the ORIGIN is 60 degrees.

   Also a = b, so the pair is symmetric about the line y = x, and the line
   x + y = 1 is perpendicular to y = x.  A 60-degree apex with a symmetric
   base forces the other two angles to be 60 each.
```
*Check: the slopes satisfy `m^2 - 4m + 1 = 0`, so `m = 2 +/- sqrt(3)`, i.e.
inclinations 75 and 15 degrees. The line `x + y = 1` has inclination 135 degrees.
Angles: 135 - 75 = 60, and 180 - (135 - 15) = 60. All 60. Equilateral.*

> **SHORTCUT:** whenever `a = b` in the pair AND the third line is perpendicular to
> `y = x`, the triangle is isosceles. If on top of that the pair makes 60 degrees,
> it is equilateral.

---

### Q37
The product of the perpendiculars from `(1, 2)` to the pair
`x^2 + 4xy + y^2 = 0` is

(a) 13/4 &nbsp;&nbsp; (b) 4/13 &nbsp;&nbsp; (c) 13/2 &nbsp;&nbsp; (d) 9/4

**ANSWER: (a)**
```
                abs( a alpha^2 + 2h alpha beta + b beta^2 )
   Product  =  --------------------------------------------
                        sqrt( (a-b)^2 + 4 h^2 )

   Top    = abs( 1(1) + 4(1)(2) + 1(4) ) = abs(1 + 8 + 4) = 13
   Bottom = sqrt( 0 + 4(4) ) = 4

   Product = 13/4
```
*Check numerically: the slopes are `-2 +/- sqrt(3)`, i.e. -0.2679 and -3.7321.
Distances from (1,2): 2.1906 and 1.4835; product 3.2498 = 13/4. Correct.*

---

### Q38
The product of the perpendiculars from the origin to the pair
`2x^2 + 3xy + y^2 - 5x - 4y + 3 = 0` is

(a) `3/sqrt(10)` &nbsp;&nbsp; (b) `3/sqrt(5)` &nbsp;&nbsp; (c) `1/sqrt(10)` &nbsp;&nbsp; (d) `sqrt(10)/3`

**ANSWER: (a)**
```
                     abs(c)                       3                3
   Product  =  ---------------------  =  --------------------  = ---------
                sqrt((a-b)^2 + 4h^2)      sqrt(1 + 9)             sqrt(10)
```
*Check: the lines are `x + y - 1 = 0` and `2x + y - 3 = 0`; the perpendicular
distances from the origin are `1/sqrt(2)` and `3/sqrt(5)`, product `3/sqrt(10)`.*

---

# PATTERN 11 — Mixed / trick questions

### Q39
If `a x^2 + 2h xy + b y^2 = 0` has one line along the x-axis, then

(a) `a = 0` &nbsp;&nbsp; (b) `b = 0` &nbsp;&nbsp; (c) `h = 0` &nbsp;&nbsp; (d) `a + b = 0`

**ANSWER: (a)**
```
   The x-axis is  y = 0 .  Put y = 0 :   a x^2 = 0  for every x   ->   a = 0
```

---

### Q40
The equation `2x^2 + 3xy - 2y^2 - 5x + 5y - 3 = 0` represents two lines that meet
at

(a) `(1/5, 7/5)` &nbsp;&nbsp; (b) `(7/5, 1/5)` &nbsp;&nbsp; (c) `(1, 1)` &nbsp;&nbsp; (d) `(-1/5, -7/5)`

**ANSWER: (a)**
```
        4x + 3y - 5 = 0
        3x - 4y + 5 = 0
   ->   25x = 5 ,  x = 1/5 ,  y = 7/5

   Fast MCQ route: substitute each option into the original equation.
   For (1/5, 7/5):  2/25 + 3(7/25) - 2(49/25) - 1 + 7 - 3
                  = (2 + 21 - 98)/25 + 3 = -75/25 + 3 = -3 + 3 = 0   YES
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +----------------------------------+----------------------------------------+
  |  IF YOU SEE THIS ...             |  DO THIS IMMEDIATELY                   |
  +----------------------------------+----------------------------------------+
  |  Any pair-of-lines question      |  Write a, h, b (and g, f, c) with the  |
  |                                  |  MIDDLE THREE HALVED. Do it first.     |
  +----------------------------------+----------------------------------------+
  |  "Angle between the lines"       |  Add coeff(x^2) + coeff(y^2).          |
  |                                  |  If it is 0, the answer is 90 degrees. |
  |                                  |  Stop. Do not compute anything else.   |
  +----------------------------------+----------------------------------------+
  |  "Perpendicular" in the question |  Set  a + b = 0 . One line of algebra. |
  +----------------------------------+----------------------------------------+
  |  "Coincident" / "perfect square" |  Set  h^2 = ab .                       |
  +----------------------------------+----------------------------------------+
  |  "Imaginary" / "only the origin" |  Check  h^2 - ab < 0 .                 |
  +----------------------------------+----------------------------------------+
  |  "Bisectors"                     |  (x^2 - y^2)/(a - b) = xy/h .          |
  |                                  |  Then eliminate every option whose     |
  |                                  |  x^2 and y^2 coefficients do not sum   |
  |                                  |  to zero.                              |
  +----------------------------------+----------------------------------------+
  |  "Point of intersection" with    |  SUBSTITUTE the options into the       |
  |  four coordinate options         |  original equation. Faster than        |
  |                                  |  solving. The right one gives 0.       |
  +----------------------------------+----------------------------------------+
  |  "Find k so that ... is a pair"  |  abc + 2fgh - af^2 - bg^2 - ch^2 = 0 . |
  |                                  |  Or plug each option in and test.      |
  +----------------------------------+----------------------------------------+
  |  A CURVE and a LINE and the word |  HOMOGENISE. Write the line as U = 1,  |
  |  "origin"                        |  multiply degree-1 terms by U and the  |
  |                                  |  constant by U^2.                      |
  +----------------------------------+----------------------------------------+
  |  "... subtends a right angle at  |  Homogenise, then set                  |
  |  the origin / centre"            |  coeff(x^2) + coeff(y^2) = 0 .         |
  |                                  |  You never need the xy term.           |
  +----------------------------------+----------------------------------------+
  |  "Slope of one is n times the    |  4 p q h^2 = a b (p + q)^2             |
  |  other" (ratio p : q)            |  (n = 2 gives 8h^2 = 9ab)              |
  +----------------------------------+----------------------------------------+
  |  "y = mx is one of the lines"    |  b m^2 + 2h m + a = 0 . Substitute.    |
  +----------------------------------+----------------------------------------+
  |  Parallel pair, "distance"       |  d = 2 sqrt((g^2 - ac)/(a(a + b)))     |
  +----------------------------------+----------------------------------------+
  |  "Area of the triangle" with a   |  n^2 sqrt(h^2 - ab)                    |
  |  line lx + my + n = 0            |  / abs(am^2 - 2hlm + bl^2)             |
  +----------------------------------+----------------------------------------+
  |  You are STUCK and it is EAPCET  |  There is no negative marking.         |
  |                                  |  Eliminate what you can and guess.     |
  |                                  |  A bisector option must have           |
  |                                  |  coeff(x^2) + coeff(y^2) = 0.          |
  +----------------------------------+----------------------------------------+
  |  You are STUCK and it is JEE     |  -1 for a wrong answer. If you cannot  |
  |                                  |  eliminate at least two options,       |
  |                                  |  move on.                              |
  +----------------------------------+----------------------------------------+
```

**One final sanity rule that catches most careless errors:** the angle you
compute must satisfy `0 <= theta <= 90` degrees. If your `tan(theta)` comes out
negative, you forgot the `abs(a + b)` in the denominator.
