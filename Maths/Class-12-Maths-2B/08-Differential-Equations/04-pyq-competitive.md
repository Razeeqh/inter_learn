# Differential Equations — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Differential Equations:**

```
  AP EAPCET  (Maths, 80 questions)  ->  3 to 5
  TG EAPCET  (Maths, 80 questions)  ->  3 to 5
  JEE Main   (Maths, 25 questions)  ->  1 to 2
```

Almost always at least ONE of them is a pure "order and degree" question, which
takes ten seconds. Never skip that one.

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — ORDER AND DEGREE (the free marks)

### Q1
The order and degree of

```
   (d2y/dx2)^3  +  (dy/dx)^4  +  y  =  0
```

(a) 2, 3 &nbsp;&nbsp; (b) 2, 4 &nbsp;&nbsp; (c) 3, 2 &nbsp;&nbsp; (d) 2, 1

**ANSWER: (a)**
```
  Highest derivative = d2y/dx2   ->  ORDER 2
  Power on it        = 3         ->  DEGREE 3
  The 4 on (dy/dx) is a decoy.
```

---

### Q2
The degree of

```
   sqrt( 1 + (dy/dx)^2 )  =  d2y/dx2
```

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) not defined

**ANSWER: (b)** — square both sides first: 1 + (dy/dx)^2 = (d2y/dx2)^2. Degree 2.

> **SHORTCUT:** In every EAPCET order/degree question, the first thing your pen
> does is square (or cube) both sides. If there is no radical, then the answer
> is whatever you can read off directly.

---

### Q3
If order = m and degree = n for

```
   [ 1 + (dy/dx)^2 ]^(3/2)  =  a ( d2y/dx2 )
```

then m + n =

(a) 3 &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 5 &nbsp;&nbsp; (d) 6

**ANSWER: (b)**
```
  Square both sides:   [1 + (dy/dx)^2]^3  =  a^2 (d2y/dx2)^2

  m = 2 , n = 2 , so m + n = 4
```

---

### Q4
The degree of d2y/dx2 + e^(dy/dx) = 0 is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 0 &nbsp;&nbsp; (d) not defined

**ANSWER: (d)** — dy/dx is inside an exponential, so the equation is not a
polynomial in the derivatives.

> **SHORTCUT:** sin, cos, tan, log, e^( ) wrapped around a DERIVATIVE means
> "degree not defined". Wrapped around x alone it means nothing at all.

---

### Q5
The degree of

```
   [ (d2y/dx2)^2  +  (dy/dx)^3 ]^(6/5)  =  6 y
```

(a) 5 &nbsp;&nbsp; (b) 6 &nbsp;&nbsp; (c) 10 &nbsp;&nbsp; (d) 12

**ANSWER: (d)**
```
  Raise both sides to the 5th power:

     [ (d2y/dx2)^2 + (dy/dx)^3 ]^6  =  (6y)^5

  Highest power of d2y/dx2  =  (d2y/dx2)^(2 x 6)  =  (d2y/dx2)^12
```

---

### Q6
The order of the differential equation of all circles of a fixed radius r is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
  A general circle of radius r is  (x - a)^2 + (y - b)^2 = r^2 .
  Two arbitrary constants a and b   ->   order 2.
```

> **SHORTCUT:** For "order of the D.E. of a family" questions, do not
> differentiate anything. Just COUNT the free constants.

---

### Q7
The degree of d3y/dx3 + (d2y/dx2)^3 + (dy/dx)^5 = 0 is

(a) 1 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 5 &nbsp;&nbsp; (d) 9

**ANSWER: (a)** — the highest derivative is d3y/dx3 and its power is 1.

---

### Q8
The degree of d2y/dx2 = [ 1 + (dy/dx)^2 ]^(1/3) is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) not defined

**ANSWER: (c)** — cube both sides: (d2y/dx2)^3 = 1 + (dy/dx)^2.

---

# PATTERN 2 — FORMING THE EQUATION / COUNTING CONSTANTS

### Q9
The order of the differential equation whose general solution is
y = c1 e^x + c2 e^(2x) + c3 e^(3x) is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 6

**ANSWER: (c)** — three arbitrary constants means order 3.

---

### Q10
The differential equation of all straight lines y = m x + c is

(a) dy/dx = 0 &nbsp;&nbsp; (b) d2y/dx2 = 0 &nbsp;&nbsp;
(c) d3y/dx3 = 0 &nbsp;&nbsp; (d) x dy/dx = y

**ANSWER: (b)**
```
  Two constants m and c  ->  differentiate twice.

     y'  =  m            y''  =  0
```

---

### Q11
The differential equation corresponding to y = A cos 3x + B sin 3x is

(a) y'' + 3y = 0 &nbsp;&nbsp; (b) y'' - 9y = 0 &nbsp;&nbsp;
(c) y'' + 9y = 0 &nbsp;&nbsp; (d) y'' + y = 0

**ANSWER: (c)**
```
  y'   =  -3A sin3x + 3B cos3x
  y''  =  -9A cos3x - 9B sin3x  =  -9 y      ->    y'' + 9y = 0
```

> **SHORTCUT:** For y = A cos(nx) + B sin(nx) the answer is ALWAYS
> y'' + n^2 y = 0. For y = A e^(nx) + B e^(-nx) it is ALWAYS y'' - n^2 y = 0.
> Learn both — they appear constantly.

---

### Q12
The differential equation of the family y = e^x (A cos x + B sin x) is

(a) y'' - 2y' + 2y = 0 &nbsp;&nbsp; (b) y'' + 2y' + 2y = 0 &nbsp;&nbsp;
(c) y'' - 2y' - 2y = 0 &nbsp;&nbsp; (d) y'' + y = 0

**ANSWER: (a)**
```
  Let  u = e^x (-A sin x + B cos x).  Then

    y'  =  y  +  u

    y'' =  y' +  ( u  -  y )          [ differentiating u again ]
        =  y' + ( y' - y ) - y
        =  2 y'  -  2 y

  So  y'' - 2y' + 2y = 0 .
```

> **SHORTCUT (JEE):** Test the options at A = 1, B = 0, i.e. y = e^x cos x.
> y' = e^x(cos x - sin x), y'' = -2 e^x sin x. Substitute into each option;
> only (a) gives 0.

---

### Q13
The differential equation of the family of parabolas y^2 = 4 a x is

(a) y = 2x dy/dx &nbsp;&nbsp; (b) 2y = x dy/dx &nbsp;&nbsp;
(c) y dy/dx = 2x &nbsp;&nbsp; (d) x dy/dx = 2y

**ANSWER: (a)**
```
  2 y (dy/dx)  =  4a           ->   4a  =  2y (dy/dx)

  y^2 = 4ax  =  2 x y (dy/dx)  ->   y   =  2 x (dy/dx)
```

---

# PATTERN 3 — VARIABLES SEPARABLE

### Q14
The solution of dy/dx = e^(x + y) is

(a) e^x + e^y = c &nbsp;&nbsp; (b) e^x + e^(-y) = c &nbsp;&nbsp;
(c) e^(-x) + e^y = c &nbsp;&nbsp; (d) e^x - e^y = c

**ANSWER: (b)**
```
  dy/dx = e^x e^y     ->     e^(-y) dy = e^x dx

  - e^(-y) = e^x + k    ->    e^x + e^(-y) = c
```

---

### Q15
The solution of x dy + y dx = 0 is

(a) x + y = c &nbsp;&nbsp; (b) x y = c &nbsp;&nbsp;
(c) x / y = c &nbsp;&nbsp; (d) x^2 + y^2 = c

**ANSWER: (b)** — the left side is exactly d(xy), so xy = c.

> **SHORTCUT:** Learn the four exact differentials. They turn a whole question
> into one line:
> x dy + y dx = d(xy) ; (x dy - y dx)/x^2 = d(y/x) ; x dx + y dy = (1/2)d(x^2+y^2).

---

### Q16
The solution of dy/dx = 2 x y with y = 1 at x = 0 is

(a) y = e^x &nbsp;&nbsp; (b) y = e^(x^2) &nbsp;&nbsp;
(c) y = e^(2x) &nbsp;&nbsp; (d) y = x^2 + 1

**ANSWER: (b)**
```
  dy/y = 2x dx    ->    log y = x^2 + c    ->    y = A e^(x^2)

  y(0) = 1  ->  A = 1  ->  y = e^(x^2)
```

---

### Q17
The solution of sqrt(1 - x^2) dy + sqrt(1 - y^2) dx = 0 is

(a) sin^-1 x - sin^-1 y = c &nbsp;&nbsp; (b) sin^-1 x + sin^-1 y = c &nbsp;&nbsp;
(c) tan^-1 x + tan^-1 y = c &nbsp;&nbsp; (d) x + y = c

**ANSWER: (b)** — divide by sqrt(1-x^2) sqrt(1-y^2) and integrate term by term.

---

### Q18
The solution of dy/dx = (1 + y^2)/(1 + x^2) is

(a) tan^-1 y - tan^-1 x = c &nbsp;&nbsp; (b) tan^-1 y + tan^-1 x = c &nbsp;&nbsp;
(c) y = x + c &nbsp;&nbsp; (d) y x = c

**ANSWER: (a)** — dy/(1+y^2) = dx/(1+x^2) gives tan^-1 y = tan^-1 x + c.

---

# PATTERN 4 — HOMOGENEOUS EQUATIONS

### Q19
Which of these is a homogeneous differential equation?

(a) dy/dx = (x^2 + y)/(x + y) &nbsp;&nbsp; (b) dy/dx = (x^2 + y^2)/(x y)
(c) dy/dx = (x + y + 1)/(x - y) &nbsp;&nbsp; (d) dy/dx = x^2 + y

**ANSWER: (b)** — top and bottom are both degree 2. In (a) the top mixes
degree 2 and degree 1; in (c) the "+1" is degree 0; (d) mixes 2 and 1.

> **SHORTCUT:** Replace x by kx and y by ky. If every k cancels, it is
> homogeneous. Three seconds, no algebra.

---

### Q20
The substitution that solves dy/dx = (x^2 + y^2)/(x y) is

(a) x + y = v &nbsp;&nbsp; (b) y = v x &nbsp;&nbsp;
(c) v = y^(-1) &nbsp;&nbsp; (d) x = v + y

**ANSWER: (b)**

---

### Q21
The solution of dy/dx = y/x + tan(y/x) is

(a) sin(y/x) = c x &nbsp;&nbsp; (b) cos(y/x) = c x &nbsp;&nbsp;
(c) tan(y/x) = c x &nbsp;&nbsp; (d) y/x = c x

**ANSWER: (a)**
```
  y = vx  ->  v + x v' = v + tan v  ->  x v' = tan v

  cot v dv = dx/x   ->   log|sin v| = log|x| + log c   ->   sin v = c x
```

---

### Q22
The solution of x (dy/dx) = y + x is

(a) y = x(log x + c) &nbsp;&nbsp; (b) y = x log x &nbsp;&nbsp;
(c) y = c x &nbsp;&nbsp; (d) y = x^2 + c

**ANSWER: (a)**
```
  dy/dx = y/x + 1.  Put y = v x :

     v + x v'  =  v + 1     ->     x v' = 1     ->     dv = dx/x

     v = log|x| + c   ->   y/x = log|x| + c   ->   y = x(log|x| + c)
```

---

### Q23
The solution of dy/dx = (x + y)/(x - y) is

(a) tan^-1(y/x) = (1/2) log(x^2 + y^2) + c
(b) tan^-1(y/x) + log(x^2 + y^2) = c
(c) x^2 + y^2 = c
(d) x^2 - y^2 = c x

**ANSWER: (a)**
```
  y = v x :        v + x v'  =  (1 + v)/(1 - v)

                       1 + v - v + v^2        1 + v^2
        x v'  =       -----------------  =   ---------
                          1 - v                1 - v

      (1 - v) dv                dx
     -------------   =         ----
       1 + v^2                   x

     tan^-1 v  -  (1/2) log(1 + v^2)  =  log|x| + c

  Put v = y/x and log(1 + y^2/x^2) = log(x^2+y^2) - 2 log|x| :

     tan^-1(y/x) - (1/2)log(x^2+y^2) + log|x| = log|x| + c
```

---

# PATTERN 5 — LINEAR EQUATIONS AND INTEGRATING FACTORS

This is the biggest group. Most of these are pure recall of the IF.

### Q24
The integrating factor of dy/dx + y cot x = 2 cos x is

(a) sin x &nbsp;&nbsp; (b) cos x &nbsp;&nbsp; (c) sec x &nbsp;&nbsp; (d) cosec x

**ANSWER: (a)**
```
  INT cot x dx = log|sin x|      ->      IF = e^(log sin x) = sin x
```

---

### Q25
The integrating factor of x (dy/dx) - y = x^3 is

(a) x &nbsp;&nbsp; (b) 1/x &nbsp;&nbsp; (c) x^2 &nbsp;&nbsp; (d) log x

**ANSWER: (b)**
```
  DIVIDE BY x FIRST:      dy/dx  -  y/x  =  x^2

  P = -1/x  ->  INT P dx = - log x = log(1/x)  ->  IF = 1/x
```

> **SHORTCUT:** Never read P off the equation until dy/dx has coefficient 1.
> This single mistake destroys more EAPCET marks than any other in the chapter.

---

### Q26
The integrating factor of (1 + x^2) dy/dx + 2 x y = cos x is

(a) 2x &nbsp;&nbsp; (b) 1 + x^2 &nbsp;&nbsp; (c) log(1 + x^2) &nbsp;&nbsp;
(d) x

**ANSWER: (b)** — P = 2x/(1+x^2), whose integral is log(1+x^2), so IF = 1 + x^2.

---

### Q27
The integrating factor of x log x (dy/dx) + y = 2 log x is

(a) x &nbsp;&nbsp; (b) log x &nbsp;&nbsp; (c) x log x &nbsp;&nbsp;
(d) 1/log x

**ANSWER: (b)**
```
  Divide by x log x :     dy/dx  +  y/(x log x)  =  2/x

               dx
  INT ---------------- = log ( log x )        [ put t = log x ]
        x log x

  IF = e^( log(log x) ) = log x
```

---

### Q28
The integrating factor of (1 + y^2) dx + (x - e^(-tan^-1 y)) dy = 0 is

(a) e^(tan^-1 y) &nbsp;&nbsp; (b) e^(-tan^-1 y) &nbsp;&nbsp;
(c) 1 + y^2 &nbsp;&nbsp; (d) tan^-1 y

**ANSWER: (a)**
```
  Rearrange as LINEAR IN x :

      dx          x            e^(-tan^-1 y)
      --  +  ----------  =  -----------------
      dy      1 + y^2            1 + y^2

  INT dy/(1 + y^2) = tan^-1 y      ->      IF = e^(tan^-1 y)
```

> **SHORTCUT:** If the options contain e^(tan^-1 y) or e^(-tan^-1 y), the
> question is a "linear in x" question. Flip to dx/dy before doing anything.

---

### Q29
The solution of dy/dx + y = e^(-x) is

(a) y = (x + c) e^(-x) &nbsp;&nbsp; (b) y = (x + c) e^x &nbsp;&nbsp;
(c) y = c e^(-x) &nbsp;&nbsp; (d) y = x e^x + c

**ANSWER: (a)**
```
  IF = e^x

  y e^x  =  INT e^(-x) . e^x dx  +  c  =  INT 1 dx  +  c  =  x + c

  y  =  (x + c) e^(-x)
```

---

### Q30
The solution of dy/dx + 2y = 0 with y(0) = 1 is

(a) y = e^(2x) &nbsp;&nbsp; (b) y = e^(-2x) &nbsp;&nbsp;
(c) y = 2 e^(-x) &nbsp;&nbsp; (d) y = 1 - 2x

**ANSWER: (b)** — separable: dy/y = -2 dx gives y = A e^(-2x), and y(0)=1 gives A=1.

---

### Q31
The solution of dy/dx + y/x = x^2 is

(a) 4 x y = x^4 + c &nbsp;&nbsp; (b) x y = x^3 + c &nbsp;&nbsp;
(c) y = x^4 + c &nbsp;&nbsp; (d) y x^2 = x^4 + c

**ANSWER: (a)**
```
  IF = x .    y x = INT x^3 dx + k = x^4/4 + k .    Multiply by 4.
```

---

### Q32
The solution of dy/dx + y tan x = sin 2x is

(a) y = c cos x - 2 cos^2 x &nbsp;&nbsp; (b) y = c sec x + 2 cos^2 x
(c) y = c cos x + 2 sin^2 x &nbsp;&nbsp; (d) y sec x = 2 cos x + c

**ANSWER: (a)**
```
  IF = sec x .

  y sec x  =  INT sin2x sec x dx + c  =  INT 2 sin x dx + c  =  -2 cos x + c

  y  =  -2 cos^2 x  +  c cos x
```

> **SHORTCUT (JEE):** Differentiate the options instead of solving. Option (a):
> y' = -c sin x + 4 sin x cos x, and y tan x = c sin x - 2 sin x cos x.
> The sum is 2 sin x cos x = sin 2x. Done in 20 seconds.

---

# PATTERN 6 — BERNOULLI AND REDUCIBLE FORMS

### Q33
The substitution that reduces dy/dx + P y = Q y^3 to a linear equation is

(a) v = y^2 &nbsp;&nbsp; (b) v = y^(-2) &nbsp;&nbsp;
(c) v = y^(-3) &nbsp;&nbsp; (d) v = y x

**ANSWER: (b)** — for Bernoulli with y^n use v = y^(1-n); here n = 3 so
v = y^(-2).

---

### Q34
The solution of dy/dx = (x + y)^2 is

(a) tan^-1(x + y) = x + c &nbsp;&nbsp; (b) tan(x + y) = x + c
(c) log(x + y) = x + c &nbsp;&nbsp; (d) (x + y)^3 = 3x + c

**ANSWER: (a)**
```
  v = x + y  ->  dv/dx - 1 = v^2  ->  dv/(1 + v^2) = dx  ->  tan^-1 v = x + c
```

---

### Q35
The solution of dy/dx = cos(x + y) is

(a) tan((x + y)/2) = x + c &nbsp;&nbsp; (b) cot((x + y)/2) = x + c
(c) sin(x + y) = x + c &nbsp;&nbsp; (d) tan(x + y) = x + c

**ANSWER: (a)**
```
  v = x + y  ->  dv/dx = 1 + cos v = 2 cos^2 (v/2)

       dv                              1
  --------------- = dx     ->    INT  --- sec^2 (v/2) dv  =  INT dx
  2 cos^2 (v/2)                        2

  tan (v/2) = x + c
```

---

### Q36
The solution of dy/dx + y/x = y^2 is

(a) 1/y = x(c - log x) &nbsp;&nbsp; (b) y = x(c - log x)
(c) 1/y = c x - x^2 &nbsp;&nbsp; (d) y = c x + log x

**ANSWER: (a)**
```
  Bernoulli, n = 2. Divide by y^2 and put v = 1/y :

      - dv/dx  +  v/x  =  1     ->     dv/dx  -  v/x  =  -1

  IF = 1/x .    v/x = INT (-1)(1/x) dx + c = - log|x| + c

  v = x(c - log|x|) ,  and  v = 1/y .
```

---

# PATTERN 7 — "WHICH EQUATION DOES THIS SATISFY?"

These are the fastest marks on the paper because you never solve anything —
you only differentiate and substitute.

### Q37
y = A x + B/x satisfies

(a) x^2 y'' + x y' - y = 0 &nbsp;&nbsp; (b) x^2 y'' - x y' + y = 0
(c) y'' + y = 0 &nbsp;&nbsp; (d) x y'' + y' = 0

**ANSWER: (a)**
```
  y   =  A x  +  B x^(-1)

  y'  =  A  -  B x^(-2)

  y'' =  2 B x^(-3)

  x^2 y''  =  2B/x
  x y'     =  A x  -  B/x
  - y      =  - A x  -  B/x
  ------------------------------
  Sum      =  2B/x  -  B/x  -  B/x  =  0        (the Ax terms cancel too)
```

---

### Q38
The function y = e^(-x) is a solution of

(a) y' + y = 0 &nbsp;&nbsp; (b) y' - y = 0 &nbsp;&nbsp;
(c) y'' - y = 1 &nbsp;&nbsp; (d) y' = x y

**ANSWER: (a)** — y' = -e^(-x) = -y, so y' + y = 0.

---

### Q39
If y = c1 e^(2x) + c2 e^(-2x), the differential equation satisfied is

(a) y'' - 4y = 0 &nbsp;&nbsp; (b) y'' + 4y = 0 &nbsp;&nbsp;
(c) y'' - 2y = 0 &nbsp;&nbsp; (d) y' - 2y = 0

**ANSWER: (a)** — y'' = 4c1 e^(2x) + 4c2 e^(-2x) = 4y.

---

# PATTERN 8 — APPLICATIONS

### Q40
A radioactive substance has a half-life of 1600 years. The fraction remaining
after 800 years is

(a) 1/4 &nbsp;&nbsp; (b) 1/sqrt(2) &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp;
(d) 3/4

**ANSWER: (b)**
```
  M / M0  =  ( 1/2 )^( t / T )  =  ( 1/2 )^( 800/1600 )  =  (1/2)^(1/2)
          =  1 / sqrt(2)
```

> **SHORTCUT:** Never write e^(-kt) in a half-life MCQ. Use
> **M/M0 = (1/2)^(t/T)** where T is the half-life. It answers the question in
> one line.

---

### Q41
A body cools from 100 degrees C to 60 degrees C in 10 minutes in surroundings
at 20 degrees C. Its temperature after another 10 minutes is

(a) 40 degrees C &nbsp;&nbsp; (b) 36 degrees C &nbsp;&nbsp;
(c) 30 degrees C &nbsp;&nbsp; (d) 45 degrees C

**ANSWER: (a)**
```
  T - S  =  ( T0 - S ) e^( - k t )

  Start:  T0 - S = 80.    At t = 10:   60 - 20 = 40 = 80 e^(-10k)

          so  e^(-10k)  =  1/2

  At t = 20:   T - 20  =  80 (1/2)^2  =  20      ->      T = 40
```

> **SHORTCUT:** In every two-stage cooling problem the ratio
> (T1 - S)/(T0 - S) repeats itself in the next equal time interval. Here it
> is 1/2, so the excess temperature halves every 10 minutes: 80, 40, 20, 10.

---

### Q42
A population grows at a rate proportional to its size and doubles in 20 years.
The time taken to become 8 times its original size is

(a) 40 years &nbsp;&nbsp; (b) 60 years &nbsp;&nbsp;
(c) 80 years &nbsp;&nbsp; (d) 160 years

**ANSWER: (b)** — 8 = 2^3, so it takes 3 doubling periods: 3 x 20 = 60 years.

> **SHORTCUT:** Whenever the target is a power of the growth factor
> (4, 8, 16 ...), just count doublings. No logs needed.

---

# SPEED RULES FOR THE EXAM HALL

```
  +----------------------------------+---------------------------------------+
  |  IF YOU SEE                      |  DO THIS IMMEDIATELY                  |
  +----------------------------------+---------------------------------------+
  |  a square root or ^(p/q) in an   |  square / raise to the qth power      |
  |  order-degree question           |  BEFORE reading anything              |
  +----------------------------------+---------------------------------------+
  |  a derivative inside sin/log/e   |  answer is "degree not defined"       |
  +----------------------------------+---------------------------------------+
  |  "order of the D.E. of the       |  count the arbitrary constants.       |
  |  family ..."                     |  Do not differentiate at all.         |
  +----------------------------------+---------------------------------------+
  |  y = A cos nx + B sin nx         |  answer is  y'' + n^2 y = 0           |
  +----------------------------------+---------------------------------------+
  |  y = A e^(nx) + B e^(-nx)        |  answer is  y'' - n^2 y = 0           |
  +----------------------------------+---------------------------------------+
  |  "find the integrating factor"   |  divide until dy/dx has coefficient 1 |
  |                                  |  FIRST, then IF = e^(INT P dx)        |
  +----------------------------------+---------------------------------------+
  |  INT P dx comes out as a log     |  IF is simply whatever is inside the  |
  |                                  |  log, because e^(log A) = A           |
  +----------------------------------+---------------------------------------+
  |  e^(tan^-1 y) among the options  |  it is a LINEAR IN x question.        |
  |                                  |  Flip to dx/dy .                      |
  +----------------------------------+---------------------------------------+
  |  a full SOLUTION in the options  |  differentiate the options instead of |
  |                                  |  solving. Far faster.                 |
  +----------------------------------+---------------------------------------+
  |  x dy + y dx anywhere            |  it is d(xy) . Answer  xy = c .       |
  +----------------------------------+---------------------------------------+
  |  y^n on the right of a linear    |  Bernoulli.  v = y^(1-n) .            |
  |  looking equation                |  For y^2 that means v = 1/y .         |
  +----------------------------------+---------------------------------------+
  |  (ax+by+c)/(Ax+By+C)             |  compare a/A with b/B .               |
  |                                  |  Same -> v = ax + by .                |
  |                                  |  Different -> shift the origin.       |
  +----------------------------------+---------------------------------------+
  |  a half-life problem             |  use  M/M0 = (1/2)^(t/T) .            |
  +----------------------------------+---------------------------------------+
  |  a cooling problem in two equal  |  the excess temperature (T - S) is    |
  |  time steps                      |  multiplied by the SAME ratio again.  |
  +----------------------------------+---------------------------------------+
  |  a growth problem asking for     |  count doublings: 4 = 2 doublings,    |
  |  4x, 8x, 16x                     |  8 = 3, 16 = 4. No logarithms.        |
  +----------------------------------+---------------------------------------+
  |  you are stuck with 30 seconds   |  EAPCET has no negative marking.      |
  |  left                            |  Fill every bubble.                   |
  +----------------------------------+---------------------------------------+
```
