# Applications of Derivatives — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Applications of Derivatives:**

```
  AP EAPCET  (Maths, 80 questions)  ->  3 to 5
  TG EAPCET  (Maths, 80 questions)  ->  3 to 5
  JEE Main   (Maths, 25 questions)  ->  2 to 3

  Add the neighbouring chapters (limits, differentiation) and calculus is
  the single biggest block in the Maths paper.
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — Errors and approximations (pure formula, free marks)

### Q1
The approximate value of sqrt(25.3) is

(a) 5.02 &nbsp;&nbsp; (b) 5.03 &nbsp;&nbsp; (c) 5.3 &nbsp;&nbsp; (d) 5.003

**ANSWER: (b)**
```
  x = 25 , dx = 0.3 ,  f'(x) = 1/(2 sqrt x) = 1/10

  sqrt(25.3)  ~  5 + (1/10)(0.3)  =  5 + 0.03  =  5.03
```

---

### Q2
If there is an error of 2 % in measuring the radius of a sphere, then the
percentage error in its volume is

(a) 2 % &nbsp;&nbsp; (b) 4 % &nbsp;&nbsp; (c) 6 % &nbsp;&nbsp; (d) 8 %

**ANSWER: (c)**

> **SHORTCUT:** V is proportional to r^3, so the percentage error is just
> **3 x 2 % = 6 %**. Never differentiate for these — read the power and multiply.
> Surface area (r^2) would give 4 %. Circumference (r^1) would give 2 %.

---

### Q3
If y = x^4 - 10 and x changes from 2 to 1.99, the approximate change in y is

(a) -0.32 &nbsp;&nbsp; (b) 0.32 &nbsp;&nbsp; (c) -0.16 &nbsp;&nbsp; (d) 3.2

**ANSWER: (a)**
```
  dy/dx = 4x^3 = 32 at x = 2 ,   dx = 1.99 - 2 = -0.01

  dy = 32 x (-0.01) = -0.32
```

> **SHORTCUT:** the sign of dx carries through. Going DOWN in x gives a negative
> dy for an increasing function. Two of the four options die instantly.

---

### Q4
The approximate value of (0.999)^(1/3) is

(a) 0.9999 &nbsp;&nbsp; (b) 0.9997 &nbsp;&nbsp; (c) 0.997 &nbsp;&nbsp; (d) 0.99

**ANSWER: (b)**
```
  x = 1 , dx = -0.001 ,  f'(1) = (1/3)(1)^(-2/3) = 1/3

  (0.999)^(1/3)  ~  1 + (1/3)(-0.001)  =  1 - 0.000333  =  0.99967  ~  0.9997
```

> **SHORTCUT:** for anything of the form (1 + h)^n with h tiny, use
> **(1 + h)^n ~ 1 + n h**. That is the whole topic in one line.

---

# PATTERN 2 — Rate of change and related rates

### Q5
The radius of a circle increases at 3 cm/s. When the radius is 10 cm, the area
is increasing at

(a) 30 pi &nbsp;&nbsp; (b) 60 pi &nbsp;&nbsp; (c) 100 pi &nbsp;&nbsp;
(d) 20 pi &nbsp;&nbsp; (square cm per second)

**ANSWER: (b)**
```
  A = pi r^2   ->   dA/dt = 2 pi r (dr/dt) = 2 pi (10)(3) = 60 pi
```

---

### Q6
Gas is pumped into a spherical balloon at 25 cubic cm per second. The radius is
increasing, when r = 5 cm, at the rate

(a) 1/(4 pi) &nbsp;&nbsp; (b) 1/(2 pi) &nbsp;&nbsp; (c) 4 pi &nbsp;&nbsp;
(d) 1/pi &nbsp;&nbsp; (cm/s)

**ANSWER: (a)**
```
  dV/dt = 4 pi r^2 (dr/dt)
  25 = 4 pi (25)(dr/dt) = 100 pi (dr/dt)
  dr/dt = 25/(100 pi) = 1/(4 pi)
```

---

### Q7
A ladder 13 m long rests against a wall. Its foot is pulled away at 1.5 m/s.
When the foot is 5 m from the wall, the top slides down at

(a) 0.625 m/s &nbsp;&nbsp; (b) 1.5 m/s &nbsp;&nbsp; (c) 2.6 m/s &nbsp;&nbsp;
(d) 3.6 m/s

**ANSWER: (a)**
```
  x = 5  ->  y = sqrt(169 - 25) = 12

  x (dx/dt) + y (dy/dt) = 0
  5(1.5) + 12 (dy/dt) = 0
  dy/dt = -7.5/12 = -0.625 m/s     (0.625 m/s downwards)
```

> **SHORTCUT for every ladder MCQ:** dy/dt = -(x/y)(dx/dt). Memorise this single
> line and you never have to differentiate again.

---

### Q8
A particle moves so that s = t^3 - 6t^2 + 9t + 8. The particle is at rest at

(a) t = 1 and t = 3 &nbsp;&nbsp; (b) t = 2 only &nbsp;&nbsp;
(c) t = 0 and t = 3 &nbsp;&nbsp; (d) t = 1 only

**ANSWER: (a)**
```
  v = 3t^2 - 12t + 9 = 3(t - 1)(t - 3) = 0   ->   t = 1 , 3
```

---

# PATTERN 3 — Tangents and normals

### Q9
The slope of the normal to the curve y = 2x^2 + 3 sin x at x = 0 is

(a) 3 &nbsp;&nbsp; (b) 1/3 &nbsp;&nbsp; (c) -3 &nbsp;&nbsp; (d) -1/3

**ANSWER: (d)**
```
  dy/dx = 4x + 3 cos x   ->   at x = 0 :  m = 3
  slope of normal = -1/m = -1/3
```

> **SHORTCUT:** in any "slope of the normal" MCQ, compute the tangent slope, then
> flip and change the sign. Examiners put the tangent slope in as a distractor
> option — here that is option (a).

---

### Q10
The line y = x + 1 is a tangent to the curve y^2 = 4x at the point

(a) (1, 2) &nbsp;&nbsp; (b) (2, 1) &nbsp;&nbsp; (c) (1, -2) &nbsp;&nbsp;
(d) (-1, 2)

**ANSWER: (a)**
```
  Substitute:  (x + 1)^2 = 4x
               x^2 + 2x + 1 = 4x
               x^2 - 2x + 1 = 0
               (x - 1)^2 = 0   ->   x = 1  (a repeated root = it TOUCHES)
               y = 1 + 1 = 2
```

> **SHORTCUT:** a line is a tangent exactly when substituting it into the curve
> gives a REPEATED root (discriminant = 0). No calculus needed.

---

### Q11
The point on the curve y = x^2 - 4x + 3 at which the tangent is parallel to the
x-axis is

(a) (2, -1) &nbsp;&nbsp; (b) (0, 3) &nbsp;&nbsp; (c) (1, 0) &nbsp;&nbsp;
(d) (-2, 15)

**ANSWER: (a)**
```
  dy/dx = 2x - 4 = 0   ->   x = 2 ,  y = 4 - 8 + 3 = -1
```

---

### Q12
The equation of the normal to y = x^3 at the point (1, 1) is

(a) x + 3y = 4 &nbsp;&nbsp; (b) 3x + y = 4 &nbsp;&nbsp; (c) x - 3y = 4
&nbsp;&nbsp; (d) 3x - y = 2

**ANSWER: (a)**
```
  dy/dx = 3x^2 = 3 at (1,1) ,  normal slope = -1/3

  y - 1 = (-1/3)(x - 1)   ->   3y - 3 = -x + 1   ->   x + 3y = 4
```

---

### Q13
The tangent to the curve y = e^(2x) at the point (0, 1) meets the x-axis at

(a) (0, 0) &nbsp;&nbsp; (b) (2, 0) &nbsp;&nbsp; (c) (-1/2, 0) &nbsp;&nbsp;
(d) (1/2, 0)

**ANSWER: (c)**
```
  dy/dx = 2 e^(2x)  ->  at x = 0 :  m = 2

  Tangent:  y - 1 = 2(x - 0)   ->   y = 2x + 1

  y = 0  ->  x = -1/2
```

---

### Q14
The curve y = x^(1/5) has at the origin

(a) a vertical tangent &nbsp;&nbsp; (b) a horizontal tangent &nbsp;&nbsp;
(c) an oblique tangent &nbsp;&nbsp; (d) no tangent

**ANSWER: (a)**
```
  dy/dx = (1/5) x^(-4/5) = 1 / (5 x^(4/5))

  As x -> 0 the denominator -> 0 , so dy/dx -> infinity .
  Infinite slope means the tangent is VERTICAL: the line x = 0.
```

> **SHORTCUT:** dy/dx = 0 -> horizontal tangent. dy/dx = infinity -> vertical
> tangent. That single sentence answers a whole family of MCQs.

---

# PATTERN 4 — Subtangent, subnormal, and the classic constants

### Q15
The subnormal at any point on the curve y^2 = 4ax is

(a) 2a &nbsp;&nbsp; (b) 4a &nbsp;&nbsp; (c) 2x &nbsp;&nbsp; (d) a/2

**ANSWER: (a)**
```
  2y (dy/dx) = 4a   ->   m = 2a/y
  subnormal = y m = 2a   (a CONSTANT)
```

---

### Q16
The length of the subtangent at any point on the curve y = a e^(x/b) is

(a) a &nbsp;&nbsp; (b) b &nbsp;&nbsp; (c) ab &nbsp;&nbsp; (d) a/b

**ANSWER: (b)**
```
  dy/dx = (a/b) e^(x/b) = y/b

  subtangent = y / (dy/dx) = y / (y/b) = b     (a CONSTANT)
```

> **SHORTCUT — the two "constant" curves worth memorising:**
> parabola y^2 = 4ax has CONSTANT SUBNORMAL 2a;
> exponential y = a e^(x/b) has CONSTANT SUBTANGENT b.

---

### Q17
The length of the subtangent to the curve y = x^3 at the point (1, 1) is

(a) 3 &nbsp;&nbsp; (b) 1/3 &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) 9

**ANSWER: (b)**
```
  m = 3x^2 = 3 ,  y1 = 1
  subtangent = y1/m = 1/3
```

---

### Q18
The tangent at any point of the curve xy = c^2 forms a triangle with the
coordinate axes whose area is

(a) c^2 &nbsp;&nbsp; (b) 2c^2 &nbsp;&nbsp; (c) 4c^2 &nbsp;&nbsp;
(d) c^2 / 2

**ANSWER: (b)**
```
  xy = c^2  ->  y + x (dy/dx) = 0  ->  dy/dx = -y/x

  Tangent at (x1, y1):   y - y1 = -(y1/x1)(x - x1)

  Put y = 0 :  x = 2 x1        Put x = 0 :  y = 2 y1

  Area = (1/2)(2 x1)(2 y1) = 2 x1 y1 = 2 c^2      (same at EVERY point)
```

---

# PATTERN 5 — Angle between two curves

### Q19
The angle between the curves y^2 = 4x and x^2 = 4y at the point (4, 4) is

(a) Tan inverse (3/4) &nbsp;&nbsp; (b) Tan inverse (4/3) &nbsp;&nbsp;
(c) 90 degrees &nbsp;&nbsp; (d) 45 degrees

**ANSWER: (a)**
```
  m1 = 2/y = 1/2 ,   m2 = x/2 = 2

  tan A = |(1/2 - 2) / (1 + 1)| = |(-3/2)/2| = 3/4
```

---

### Q20
The curves y = x^3 and 6y = 7 - x^2 intersect at (1, 1). The angle between them
there is

(a) 30 degrees &nbsp;&nbsp; (b) 45 degrees &nbsp;&nbsp; (c) 60 degrees
&nbsp;&nbsp; (d) 90 degrees

**ANSWER: (d)**
```
  Curve 1:  dy/dx = 3x^2 = 3            ->  m1 = 3
  Curve 2:  6 (dy/dx) = -2x  ->  dy/dx = -x/3  ->  m2 = -1/3

  m1 m2 = 3 x (-1/3) = -1    ->    ORTHOGONAL, so the angle is 90 degrees.
```

> **SHORTCUT:** before touching the tan formula, multiply m1 by m2.
> If you get -1, the answer is 90 degrees and you are done in five seconds.

---

### Q21
The curves 2x = y^2 and 2xy = k cut each other orthogonally if k^2 =

(a) 2 &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) 16

**ANSWER: (c)**
```
  2x = y^2   ->  2 = 2y (dy/dx)   ->  m1 = 1/y

  2xy = k    ->  y + x (dy/dx) = 0  ->  m2 = -y/x

  Orthogonal:  m1 m2 = -1
               (1/y)(-y/x) = -1
               -1/x = -1     ->    x = 1

  Then y^2 = 2x = 2 , so y = sqrt(2) , and k = 2xy = 2 sqrt(2).

  k^2 = 8
```

---

# PATTERN 6 — Rolle's theorem and Lagrange's MVT

### Q22
The value of c given by Rolle's theorem for f(x) = x^2 - 4 on [-2, 2] is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) -1 &nbsp;&nbsp; (d) 2

**ANSWER: (a)** — f'(x) = 2x = 0 gives c = 0, which lies in (-2, 2).

---

### Q23
The value of c in Lagrange's mean value theorem for f(x) = x^3 on [1, 2] is

(a) sqrt(7/3) &nbsp;&nbsp; (b) 3/2 &nbsp;&nbsp; (c) sqrt(3/7) &nbsp;&nbsp;
(d) 7/3

**ANSWER: (a)**
```
           f(2) - f(1)      8 - 1
  f'(c) = ------------- =  -------  =  7
              2 - 1           1

  3 c^2 = 7   ->   c = sqrt(7/3) = 1.53 , which lies in (1, 2).
```

---

### Q24
Rolle's theorem is NOT applicable on [-1, 1] to

(a) f(x) = x^2 &nbsp;&nbsp; (b) f(x) = |x| &nbsp;&nbsp;
(c) f(x) = cos x &nbsp;&nbsp; (d) f(x) = x^4 - 1

**ANSWER: (b)**
```
  |x| is continuous on [-1, 1] and |−1| = |1| = 1 ,
  but it is NOT differentiable at x = 0, which lies inside (-1, 1).
  Condition (ii) fails.
```

> **SHORTCUT — the "not applicable" MCQ always hides one of these:**
> a MODULUS (corner), a 1/x (break), a tan x (asymptote), a cube-root type
> x^(1/3) (vertical tangent), or simply f(a) not equal to f(b).

---

### Q25
The value of c given by Rolle's theorem for f(x) = e^x sin x on [0, pi] is

(a) pi/4 &nbsp;&nbsp; (b) pi/2 &nbsp;&nbsp; (c) 3 pi/4 &nbsp;&nbsp;
(d) pi/3

**ANSWER: (c)**
```
  f(0) = 0 ,  f(pi) = e^pi sin(pi) = 0 .  Conditions hold.

  f'(x) = e^x sin x + e^x cos x = e^x (sin x + cos x)

  e^x is never zero, so   sin x + cos x = 0   ->   tan x = -1

  In (0, pi) that gives  x = 3 pi / 4
```

---

# PATTERN 7 — Increasing and decreasing

### Q26
f(x) = x^2 - 2x + 3 is increasing on

(a) (1, infinity) &nbsp;&nbsp; (b) (-infinity, 1) &nbsp;&nbsp;
(c) (0, infinity) &nbsp;&nbsp; (d) all of R

**ANSWER: (a)** — f'(x) = 2x - 2 > 0 gives x > 1.

> **SHORTCUT:** for any parabola y = ax^2 + bx + c with a > 0, the turning point
> is at x = -b/2a. It DECREASES to the left of it and INCREASES to the right.
> No differentiation needed.

---

### Q27
f(x) = 2x^3 - 3x^2 - 36x + 7 is decreasing on

(a) (-2, 3) &nbsp;&nbsp; (b) (3, infinity) &nbsp;&nbsp;
(c) (-infinity, -2) &nbsp;&nbsp; (d) (-3, 2)

**ANSWER: (a)**
```
  f'(x) = 6x^2 - 6x - 36 = 6(x - 3)(x + 2)

  A product of two brackets is NEGATIVE strictly BETWEEN its roots.
  Roots are -2 and 3 , so f is decreasing on (-2, 3).
```

> **SHORTCUT:** if f'(x) factorises into (x - p)(x - q) with a positive leading
> coefficient, the answer is always: **decreasing between the roots, increasing
> outside them.** You do not need a sign line in an MCQ.

---

### Q28
For x > 0, f(x) = x + 1/x is increasing on

(a) (0, 1) &nbsp;&nbsp; (b) (1, infinity) &nbsp;&nbsp;
(c) (0, infinity) &nbsp;&nbsp; (d) nowhere

**ANSWER: (b)**
```
  f'(x) = 1 - 1/x^2 > 0   ->   x^2 > 1   ->   x > 1  (since x > 0)
```

---

### Q29
The function f(x) = x^3 - 3x^2 + 3x - 100 is

(a) increasing on R &nbsp;&nbsp; (b) decreasing on R &nbsp;&nbsp;
(c) increasing on (0, 1) only &nbsp;&nbsp; (d) neither

**ANSWER: (a)**
```
  f'(x) = 3x^2 - 6x + 3 = 3(x^2 - 2x + 1) = 3 (x - 1)^2

  A square is never negative, so f'(x) >= 0 for every x.
  Hence f is increasing on the whole real line.
  (It is momentarily flat at x = 1, but it never decreases.)
```

---

# PATTERN 8 — Maxima and minima

### Q30
The minimum value of f(x) = x + 1/x for x > 0 is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  f'(x) = 1 - 1/x^2 = 0   ->   x = 1  (taking x > 0)
  f''(x) = 2/x^3  ->  f''(1) = 2 > 0   ->   MINIMUM
  Minimum value = 1 + 1 = 2
```

> **SHORTCUT (AM-GM):** for positive a, the least value of x + a/x is
> **2 sqrt(a)**, reached at x = sqrt(a). Here a = 1, so the answer is 2.

---

### Q31
The maximum value of sin x + cos x is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) sqrt(2) &nbsp;&nbsp;
(d) 1/sqrt(2)

**ANSWER: (c)**

> **SHORTCUT:** a sin x + b cos x always lies between -sqrt(a^2+b^2) and
> +sqrt(a^2+b^2). Here sqrt(1+1) = sqrt 2. No calculus at all.

---

### Q32
f(x) = x^3 - 3x has a local maximum value of

(a) 2 &nbsp;&nbsp; (b) -2 &nbsp;&nbsp; (c) 0 &nbsp;&nbsp; (d) 3

**ANSWER: (a)**
```
  f'(x) = 3x^2 - 3 = 0   ->   x = 1 , -1
  f''(x) = 6x

  At x = -1 :  f'' = -6 , NEGATIVE  ->  MAXIMUM
               f(-1) = -1 + 3 = 2
  At x = 1  :  f'' = 6 , POSITIVE   ->  MINIMUM, value -2
```

---

### Q33
Two positive numbers have sum 24. Their greatest possible product is

(a) 100 &nbsp;&nbsp; (b) 121 &nbsp;&nbsp; (c) 144 &nbsp;&nbsp; (d) 156

**ANSWER: (c)** — the product is greatest when the numbers are EQUAL:
12 x 12 = 144.

> **SHORTCUT:** fixed SUM -> product is greatest when the parts are EQUAL.
> Fixed PRODUCT -> sum is least when the parts are EQUAL. Two sentences that
> kill a large family of questions.

---

### Q34
The absolute maximum value of f(x) = 2x^3 - 24x + 107 on [1, 3] is

(a) 75 &nbsp;&nbsp; (b) 85 &nbsp;&nbsp; (c) 89 &nbsp;&nbsp; (d) 107

**ANSWER: (c)**
```
  f'(x) = 6x^2 - 24 = 0   ->   x = 2  (x = -2 is outside [1, 3], reject)

  f(1) = 2 - 24 + 107  =  85
  f(2) = 16 - 48 + 107 =  75
  f(3) = 54 - 72 + 107 =  89     <-- LARGEST

  Absolute maximum = 89 at x = 3.
```

> **SHORTCUT:** on a CLOSED interval you never need f''. Just list the interior
> critical points and the two endpoints and compare the numbers.

---

### Q35
The point on the curve x^2 = 2y which is nearest to the point (0, 5) is

(a) (2 sqrt2 , 4) &nbsp;&nbsp; (b) (2, 2) &nbsp;&nbsp; (c) (0, 0)
&nbsp;&nbsp; (d) (4, 8)

**ANSWER: (a)** — and (-2 sqrt2 , 4) by symmetry.
```
  D = d^2 = x^2 + (y - 5)^2 = 2y + (y - 5)^2      (using x^2 = 2y)

  dD/dy = 2 + 2(y - 5) = 2y - 8 = 0   ->   y = 4

  d^2D/dy^2 = 2 > 0   ->   MINIMUM

  x^2 = 2(4) = 8   ->   x = +/- 2 sqrt(2)
```

> **SHORTCUT:** always minimise d^2, never d. And use the curve equation to
> reduce to whichever variable makes the algebra shorter — here y, not x.

---

### Q36
The height of the cone of maximum volume inscribed in a sphere of radius R is

(a) R &nbsp;&nbsp; (b) 2R/3 &nbsp;&nbsp; (c) 4R/3 &nbsp;&nbsp; (d) 3R/2

**ANSWER: (c)**
```
  With the base radius r and height h ,  r^2 = 2Rh - h^2

  V = (pi/3) r^2 h = (pi/3)(2R h^2 - h^3)

  dV/dh = (pi/3)(4R h - 3h^2) = 0   ->   h = 4R/3

  Maximum volume = 32 pi R^3 / 81
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +---------------------------------+-------------------------------------+
  |  IF YOU SEE THIS                |  DO THIS IMMEDIATELY                |
  +---------------------------------+-------------------------------------+
  |  "% error" and a power n        |  answer = n x (given % error)       |
  +---------------------------------+-------------------------------------+
  |  (1 + h)^n with h tiny          |  answer ~ 1 + n h                   |
  +---------------------------------+-------------------------------------+
  |  "approximate value of sqrt(N)" |  nearest perfect square, add        |
  |                                 |  dx / (2 sqrt x)                    |
  +---------------------------------+-------------------------------------+
  |  Ladder sliding                 |  dy/dt = -(x/y)(dx/dt)              |
  +---------------------------------+-------------------------------------+
  |  Balloon / sphere inflating     |  dV/dt = 4 pi r^2 (dr/dt)           |
  +---------------------------------+-------------------------------------+
  |  Cone filling with water        |  put r = k h FIRST, then            |
  |                                 |  dV/dt = pi k^2 h^2 (dh/dt)         |
  +---------------------------------+-------------------------------------+
  |  "slope of the normal"          |  find m, then flip and negate:      |
  |                                 |  -1/m . The value m itself is a     |
  |                                 |  planted wrong option.              |
  +---------------------------------+-------------------------------------+
  |  "is this line a tangent?"      |  substitute; tangent <=> repeated   |
  |                                 |  root <=> discriminant = 0          |
  +---------------------------------+-------------------------------------+
  |  dy/dx = 0                      |  horizontal tangent, y = y1         |
  |  dy/dx = infinity               |  vertical tangent,   x = x1         |
  +---------------------------------+-------------------------------------+
  |  y^2 = 4ax , subnormal          |  2a , constant                      |
  |  y = a e^(x/b) , subtangent     |  b , constant                       |
  |  xy = c^2 , triangle with axes  |  area 2 c^2 , constant              |
  +---------------------------------+-------------------------------------+
  |  "angle between two curves"     |  test m1 m2 = -1 FIRST. If it is    |
  |                                 |  -1, tick 90 degrees and move on.   |
  +---------------------------------+-------------------------------------+
  |  "Rolle NOT applicable"         |  hunt for |x| , 1/x , tan x ,       |
  |                                 |  x^(1/3) , or f(a) not = f(b)       |
  +---------------------------------+-------------------------------------+
  |  f'(x) = k(x - p)(x - q), k > 0 |  decreasing BETWEEN the roots,      |
  |                                 |  increasing OUTSIDE them            |
  +---------------------------------+-------------------------------------+
  |  f'(x) is a perfect square      |  the function is increasing         |
  |                                 |  everywhere                         |
  +---------------------------------+-------------------------------------+
  |  minimise x + a/x , x > 0       |  least value 2 sqrt(a) at           |
  |                                 |  x = sqrt(a)                        |
  +---------------------------------+-------------------------------------+
  |  a sin x + b cos x              |  range is -sqrt(a^2+b^2) to         |
  |                                 |  +sqrt(a^2+b^2)                     |
  +---------------------------------+-------------------------------------+
  |  fixed SUM, maximise product    |  the parts are EQUAL                |
  |  fixed PRODUCT, minimise sum    |  the parts are EQUAL                |
  +---------------------------------+-------------------------------------+
  |  max / min on a CLOSED interval |  compare f at critical points AND   |
  |                                 |  at both endpoints. No f'' needed.  |
  +---------------------------------+-------------------------------------+
  |  "shortest distance"            |  minimise d^2 , never d             |
  +---------------------------------+-------------------------------------+
  |  EAPCET and you are stuck       |  there is NO negative marking -     |
  |                                 |  eliminate two options and GUESS    |
  +---------------------------------+-------------------------------------+
```
