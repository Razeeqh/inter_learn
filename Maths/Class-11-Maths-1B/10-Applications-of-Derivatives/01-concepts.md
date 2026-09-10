# Applications of Derivatives — Concepts Explained Simply

Read one topic. Do its worked example with a pen. Then move to the next.
Nothing here assumes you are good at maths. It only assumes you can find dy/dx
from Chapter 9. If you cannot, go back and do Chapter 9 first — this chapter is
built entirely on top of it.

---

# TOPIC 1 — What this chapter is really about

In Chapter 9 you learned to compute dy/dx. It was a mechanical skill: rules in,
answer out. You never asked what the answer MEANT.

dy/dx means two things, and both of them are true at the same time:

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   MEANING 1  (physical)                                           |
  |   dy/dx  =  how fast y changes when x changes                     |
  |             "rate of change of y with respect to x"               |
  |                                                                   |
  |   MEANING 2  (geometric)                                          |
  |   dy/dx  =  the SLOPE of the tangent line to the curve y = f(x)   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Picture it:

```
      y
      ^                                  . tangent line
      |                              .
      |                          .  P
      |                      . *
      |                  .  /
      |               .    /  curve y = f(x)
      |            .      /
      |         . _______/
      |      ..
      +-------------------------------------> x

   The tangent TOUCHES the curve at P and has the same
   direction as the curve there.  Its slope is dy/dx at P.
```

Every single question in this chapter is one of these two meanings dressed up in
a story. Once you see which meaning is being asked for, the question solves
itself.

> **TRAP:** dy/dx is a NUMBER only after you substitute a point. Before that it
> is a formula in x. "Find the slope" always means "find dy/dx AND substitute".

---

# TOPIC 2 — Errors and approximations: delta y and dy

### The idea in plain English

You measure the side of a cube as 10 cm. Your ruler is not perfect, so the real
side might be 10.02 cm. That extra 0.02 is an **error in x**.

Because the volume depends on the side, that small error in the side produces a
small error in the volume. This topic answers: **how big is that error?**

### The three symbols

```
  +------------------------------------------------------------------------+
  |                                                                        |
  |   delta x  (also written dx)                                           |
  |        =  the small change you make in x. YOU choose it.               |
  |           Always  dx = delta x .  They are the SAME thing.             |
  |                                                                        |
  |   delta y                                                              |
  |        =  the ACTUAL change in y                                       |
  |        =  f(x + delta x)  -  f(x)                                      |
  |                                                                        |
  |   dy                                                                   |
  |        =  the APPROXIMATE change in y  (the "differential")            |
  |        =  f'(x) . dx                                                   |
  |                                                                        |
  |   For small dx :        delta y   is approximately equal to   dy       |
  |                                                                        |
  +------------------------------------------------------------------------+
```

Why does dy work? Because for a tiny step, the curve and its tangent are almost
the same line:

```
      y
      ^                                 tangent
      |                            . - - - - -+
      |                       . -            ^|
      |                  . -                 ||  <- dy  (along the tangent)
      |             . *P                     v|
      |         . -  |. . . . . . . . . . . . |     delta y is along the CURVE
      |     . -      |                        |
      |              |<-------- dx ---------->|
      +-------------------------------------------> x
                    x                    x + dx

      The gap between the curve and the tangent is tiny, so
      delta y  ~  dy .  That gap is what we are ignoring.
```

### The approximation formula (this is the one you use)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     f(x + dx)   is approximately   f(x)  +  f'(x) . dx           |
  |                                                                  |
  |  In words:  new value = old value + (derivative) x (small step)  |
  |                                                                  |
  +------------------------------------------------------------------+
```

### How to choose x — the only skill you need here

To approximate sqrt(82) you must choose an x near 82 whose square root you
already KNOW. That is 81. Then dx = 82 - 81 = 1.

Rule: **pick the nearest perfect square / perfect cube / nice angle.**

### WORKED EXAMPLE 2.1 — Find the approximate value of sqrt(82)

```
  Step 1   Let f(x) = sqrt(x)

  Step 2   Choose x = 81   (because sqrt(81) = 9 is known)
           Then dx = 82 - 81 = 1

  Step 3   Differentiate:
                            1
              f'(x)  =  ----------
                         2 sqrt(x)

  Step 4   Substitute x = 81:
                            1            1         1
              f'(81) =  ----------  =  ------  =  ----
                         2 sqrt(81)     2 x 9      18

  Step 5   Apply the formula:

              f(82)  ~  f(81) + f'(81) . dx

                     ~  9  +  (1/18)(1)

                     ~  9  +  0.0556

              sqrt(82)  ~  9.0556
```
(The calculator value is 9.05539 — our answer is right to 4 decimal places.)

### WORKED EXAMPLE 2.2 — Find the approximate value of cube root of 65

```
  Step 1   f(x) = x^(1/3)

  Step 2   x = 64  (because 4^3 = 64),   dx = 65 - 64 = 1

  Step 3   f'(x) = (1/3) x^(-2/3)  =  --------------
                                       3 . x^(2/3)

                                1              1           1
  Step 4   f'(64)  =  --------------------  = ------  =  ----
                       3 . (64)^(2/3)          3 x 16      48

  Step 5   f(65)  ~  4 + (1/48)(1)  =  4 + 0.02083  =  4.02083
```

### WORKED EXAMPLE 2.3 — delta y and dy compared

If y = x^2 + 3x + 6 and x changes from 10 to 10.1, find delta y and dy.

```
  Here x = 10,  dx = 0.1

  ACTUAL change:
      f(10)    = 100 + 30 + 6      = 136
      f(10.1)  = 102.01 + 30.3 + 6 = 138.31
      delta y  = 138.31 - 136      = 2.31

  APPROXIMATE change:
      dy/dx = 2x + 3   ->   at x = 10 :  23
      dy = 23 x 0.1 = 2.3

  delta y = 2.31 ,  dy = 2.30 .   Difference = 0.01 . Very close, as promised.
```

> **TRAP:** dy is NEVER exactly equal to delta y. If a question asks for delta y
> you must compute f(x+dx) - f(x) honestly. If it asks for dy you use f'(x)dx.
> Reading the symbol wrongly loses the whole 2 marks.

---

# TOPIC 3 — Relative error and percentage error

An error of 1 cm is huge on a matchstick and meaningless on a road. So we
compare the error with the quantity itself.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                            delta y        dy                       |
  |   RELATIVE ERROR in y  =  ---------   ~   ----                     |
  |                               y             y                      |
  |                                                                    |
  |                                dy                                  |
  |   PERCENTAGE ERROR in y  =  ------ x 100                           |
  |                                y                                   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

### The shortcut that saves you every time

```
  If  y = x^n  then

        dy       n dx
       ----  =  ------            (relative errors just get MULTIPLIED by n)
         y         x

  So:   percentage error in y  =  n x (percentage error in x)
```

| Quantity | Depends on x as | Percentage error becomes |
|----------|-----------------|--------------------------|
| Circumference of circle | r^1 | 1 x (error in r) |
| Area of circle / surface of sphere | r^2 | 2 x (error in r) |
| Volume of sphere / cube | r^3 | 3 x (error in r) |
| Side of a cube from its volume | V^(1/3) | (1/3) x (error in V) |

### WORKED EXAMPLE 3.1

The side of a cube is measured as 10 cm with a possible error of 0.02 cm.
Find the approximate error, the relative error and the percentage error in the
volume.

```
  Step 1   V = x^3 ,  x = 10 ,  dx = 0.02

  Step 2   dV/dx = 3x^2  =  3(100)  =  300

  Step 3   APPROXIMATE ERROR
              dV = 300 x 0.02 = 6 cubic cm

  Step 4   RELATIVE ERROR
              dV     6        6
             ---- = ----- = ------ = 0.006
              V      x^3     1000

  Step 5   PERCENTAGE ERROR
              0.006 x 100 = 0.6 %

  CHECK with the shortcut:  V = x^3  so  n = 3.
     percentage error in x = (0.02/10) x 100 = 0.2 %
     percentage error in V = 3 x 0.2 = 0.6 %      SAME. Good.
```

### WORKED EXAMPLE 3.2

The radius of a sphere is measured as 7 cm with an error of 0.02 cm. Find the
approximate error in its surface area.

```
  S = 4 pi r^2
  dS/dr = 8 pi r = 8 pi (7) = 56 pi
  dS = 56 pi x 0.02 = 1.12 pi  =  3.52 square cm  (taking pi = 22/7)
```

> **TRAP:** Approximate error keeps the UNITS (cm, cm^2, cm^3). Relative error
> has NO units. Percentage error carries a % sign. Write the unit — it is a mark.

---

# TOPIC 4 — Rate of change

If a quantity Q depends on time t, then **dQ/dt is its rate of change**.

```
  dQ/dt  POSITIVE  ->  Q is INCREASING  (growing, rising, expanding)
  dQ/dt  NEGATIVE  ->  Q is DECREASING  (shrinking, falling, sliding down)
```

Common translations from English into symbols:

| English in the question | Symbol |
|--------------------------|--------|
| "the radius increases at 2 cm/s" | dr/dt = 2 |
| "the volume decreases at 5 cm^3/s" | dV/dt = -5 |
| "how fast is the area changing" | find dA/dt |
| "the ladder slides DOWN" | dy/dt is negative |
| "velocity" of a particle with distance s | v = ds/dt |
| "acceleration" | a = dv/dt = d^2s/dt^2 |

### WORKED EXAMPLE 4.1 — motion of a particle

A particle moves along a line so that s = t^3 - 6t^2 + 9t + 5 metres after
t seconds. Find (i) its velocity at t = 2 s, (ii) when it is at rest,
(iii) its acceleration at t = 4 s.

```
  (i)   v = ds/dt = 3t^2 - 12t + 9
        At t = 2 :  v = 12 - 24 + 9 = -3 m/s
        Negative means it is moving BACKWARDS.

  (ii)  At rest means v = 0 :
             3t^2 - 12t + 9 = 0
             3(t^2 - 4t + 3) = 0
             3(t - 1)(t - 3) = 0
             t = 1 s  and  t = 3 s

  (iii) a = dv/dt = 6t - 12
        At t = 4 :  a = 24 - 12 = 12 m/s^2
```

---

# TOPIC 5 — Related rates (the balloon / ladder / tank problems)

This is the 4-mark question that scares students. It should not. There is a
**fixed 5-step recipe** and it never changes.

```
  +======================================================================+
  |   THE RELATED-RATES RECIPE                                           |
  |                                                                      |
  |   1. DRAW the picture and NAME every changing length.                |
  |   2. WRITE the relation connecting them  (a geometry formula).       |
  |   3. DIFFERENTIATE the whole relation with respect to TIME t.        |
  |      Every letter gets a d.../dt attached by the chain rule.         |
  |   4. SUBSTITUTE the given numbers AT THAT INSTANT.                   |
  |   5. SOLVE for the unknown rate. Write the units.                    |
  |                                                                      |
  +======================================================================+
```

The formulas you will need:

```
  Circle:    A = pi r^2                Circumference = 2 pi r
  Sphere:    V = (4/3) pi r^3          S = 4 pi r^2
  Cube:      V = x^3                   S = 6 x^2
  Cylinder:  V = pi r^2 h
  Cone:      V = (1/3) pi r^2 h
  Right triangle (ladder):  x^2 + y^2 = L^2
```

### WORKED EXAMPLE 5.1 — the expanding balloon

A spherical balloon is inflated by pumping in gas at 900 cm^3 per second.
Find the rate at which the radius increases when the radius is 15 cm.

```
  Step 1   The sphere has radius r at time t.
           GIVEN  dV/dt = 900 ,   FIND  dr/dt  when  r = 15.

  Step 2   Relation:      V = (4/3) pi r^3

  Step 3   Differentiate w.r.t. t   (chain rule on r^3):

              dV        4          dr             dr
             ----  =  ---- pi . 3r^2 . ----  =  4 pi r^2 . ----
              dt        3              dt              dt

  Step 4   Substitute  dV/dt = 900 ,  r = 15 :

              900  =  4 pi (225) . dr/dt
              900  =  900 pi . dr/dt

  Step 5             900         1
              dr/dt = -------- = ---  cm/s
                       900 pi     pi
```

**Answer: 1/pi cm/s (about 0.318 cm/s).**

### WORKED EXAMPLE 5.2 — the sliding ladder

A ladder 5 m long leans against a wall. Its foot is pulled away from the wall at
2 m/s. How fast is the top sliding DOWN when the foot is 4 m from the wall?

```
                    |
                    |\
               wall | \  ladder = 5 m  (this length NEVER changes)
                    |  \
                  y |   \
                    |    \
                    +-----\------
                       x
                    <-- foot moves this way, dx/dt = +2

  Step 1   GIVEN dx/dt = 2 .  FIND dy/dt when x = 4.
           When x = 4 :  y = sqrt(25 - 16) = 3

  Step 2   Relation:   x^2 + y^2 = 25

  Step 3   Differentiate w.r.t. t :

                dx           dy
             2x ---- +  2y  ---- = 0
                dt           dt

  Step 4   Substitute  x = 4 , y = 3 , dx/dt = 2 :

             2(4)(2) + 2(3)(dy/dt) = 0
             16 + 6 (dy/dt) = 0

  Step 5     dy          16          8
            ----  =  -  ----  =  -  ---  =  -2.667 m/s
             dt           6           3
```

**Answer: the top slides down at 8/3 m/s.** The minus sign only says "downwards";
if the question asks "how fast is it sliding down", quote 8/3 m/s and explain the
sign.

> **TRAP:** Do NOT substitute x = 4 before differentiating. If you write
> 16 + y^2 = 25 first, then y becomes a constant and you get dy/dt = 0, which is
> nonsense. **Differentiate first, substitute last. Always.**

### WORKED EXAMPLE 5.3 — the rising water level in a cone

Water is poured into an inverted cone of semi-vertical angle 45 degrees at
8 cubic cm per second. Find the rate at which the water level rises when the
depth of water is 4 cm.

```
            \         r        /
             \<--------------->/     semi-vertical angle = 45
              \               /      so  r / h = tan 45 = 1
               \             /       therefore  r = h
              h \           /
                 \         /
                  \       /
                   \     /
                    \   /
                     \ /
                      V

  Step 2   V = (1/3) pi r^2 h ,  and r = h , so

              V = (1/3) pi h^3        <-- ONE variable only. This is the trick.

  Step 3   dV/dt = pi h^2 . dh/dt

  Step 4   8 = pi (16) . dh/dt

  Step 5   dh/dt = 8 / (16 pi) = 1 / (2 pi)  cm/s
```

> **TRAP:** In every cone problem you MUST eliminate r using the ratio r/h,
> otherwise you end up with two unknown rates and cannot finish.

### WORKED EXAMPLE 5.4 — the spreading oil slick

Oil spilt on water spreads as a circle. The radius grows at 2 cm/s.
How fast is the area growing when the radius is 10 cm?

```
  A = pi r^2
  dA/dt = 2 pi r . dr/dt  =  2 pi (10)(2)  =  40 pi  square cm per second
```

Notice: the area grows FASTER as the slick gets bigger, even though the radius
grows at a steady rate. That is what dA/dt = 2 pi r (dr/dt) is telling you.

---

# TOPIC 6 — Slope of the tangent and the normal

At the point P(x1, y1) on the curve y = f(x):

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   slope of TANGENT     m  =  [ dy/dx ]  at (x1, y1)                |
  |                                                                    |
  |                                  -1                                |
  |   slope of NORMAL      m'  =  --------                             |
  |                                dy/dx                               |
  |                                                                    |
  |   because tangent and normal are PERPENDICULAR:  m . m' = -1       |
  |                                                                    |
  +--------------------------------------------------------------------+
```

```
                          |  NORMAL (perpendicular to the curve)
                          |
                          |
        - - - - - - - - - * P - - - - - - - -   TANGENT (touches the curve)
                        /   \
                      /       \
                   curve y = f(x)
```

### Two special cases you must recognise instantly

```
  dy/dx = 0             ->  TANGENT is HORIZONTAL  (parallel to the x-axis)
                            its equation is  y = y1
                            NORMAL is vertical:  x = x1

  dy/dx = infinity      ->  TANGENT is VERTICAL (parallel to the y-axis)
  (denominator zero)        its equation is  x = x1
                            NORMAL is horizontal:  y = y1
```

### WORKED EXAMPLE 6.1

Find the slope of the tangent to y = 3x^4 - 4x at x = 4.

```
  dy/dx = 12x^3 - 4
  At x = 4 :  12(64) - 4 = 768 - 4 = 764
```

---

# TOPIC 7 — Equations of the tangent and the normal

Once you have the slope, you use the straight-line formula from Chapter 3
(Straight Lines): a line through (x1, y1) with slope m is y - y1 = m(x - x1).

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TANGENT at (x1, y1):        y - y1  =  m (x - x1)                |
  |                                                                    |
  |                                         -1                         |
  |   NORMAL  at (x1, y1):        y - y1 = ---- (x - x1)               |
  |                                          m                         |
  |                                                                    |
  |   or written without fractions:   m(y - y1) + (x - x1) = 0         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

### The 4-step routine

```
  1. If y1 is not given, find it by putting x1 into the curve.
  2. Differentiate to get dy/dx.
  3. Substitute (x1, y1) to get the number m.
  4. Write both line equations and tidy into the form ax + by + c = 0.
```

### WORKED EXAMPLE 7.1

Find the equations of the tangent and normal to y = x^3 + 4x^2 at (-1, 3).

```
  Step 1   Check the point:  (-1)^3 + 4(-1)^2 = -1 + 4 = 3   YES, it lies on it.

  Step 2   dy/dx = 3x^2 + 8x

  Step 3   At x = -1 :   m = 3(1) + 8(-1) = 3 - 8 = -5

  Step 4   TANGENT:   y - 3 = -5 (x + 1)
                      y - 3 = -5x - 5
                      5x + y + 2 = 0

           NORMAL:    y - 3 = (1/5)(x + 1)
                      5y - 15 = x + 1
                      x - 5y + 16 = 0
```

Quick self-check: multiply the slopes, (-5) x (1/5) = -1. Correct.

### WORKED EXAMPLE 7.2 — tangent PARALLEL to a given line

Find the point on the curve y = x^3 - 3x + 2 where the tangent is parallel to
the line y = 9x + 5, and write that tangent.

```
  Parallel  =>  SAME slope.  Slope of the given line = 9.

  dy/dx = 3x^2 - 3
  Set    3x^2 - 3 = 9
         3x^2 = 12
         x^2 = 4
         x = 2  or  x = -2

  At x = 2 :   y = 8 - 6 + 2 = 4     ->  point (2, 4)
  At x = -2 :  y = -8 + 6 + 2 = 0    ->  point (-2, 0)

  Tangent at (2, 4):    y - 4 = 9(x - 2)   ->  9x - y - 14 = 0
  Tangent at (-2, 0):   y - 0 = 9(x + 2)   ->  9x - y + 18 = 0
```

### WORKED EXAMPLE 7.3 — tangent PERPENDICULAR to a given line

```
  Perpendicular  =>  m x (slope of given line) = -1
                 =>  m = -1 / (slope of given line)

  Example: tangent perpendicular to  2x - y + 9 = 0  (slope 2)
           needs  m = -1/2 .  Then solve  dy/dx = -1/2 .
```

> **TRAP:** "Parallel to the x-axis" means slope = 0. "Parallel to the y-axis"
> means slope = infinity. Students mix these two up constantly.

---

# TOPIC 8 — Lengths of tangent, normal, subtangent, subnormal

This looks frightening and is actually the easiest 2 marks in the chapter,
because it is pure substitution into four formulas.

### The picture (learn the picture, the formulas follow from it)

```
        y
        ^                              tangent line
        |                    .
        |                .
        |            . P (x1, y1)
        |        . * |\
        |    .    /  | \
        |  .     /   |  \
        |.      /    |y1 \
    ----+------/-----+----\------------------> x
        |  T  /      M     \  N
        |    /              \
             |<--- ST --->|<-- SN -->|

   T = where the TANGENT cuts the x-axis
   N = where the NORMAL cuts the x-axis
   M = the foot of the perpendicular from P to the x-axis

   PT  = LENGTH OF TANGENT
   PN  = LENGTH OF NORMAL
   TM  = SUBTANGENT   (the shadow of the tangent on the x-axis)
   MN  = SUBNORMAL    (the shadow of the normal on the x-axis)
```

### The four formulas, with m = dy/dx at P(x1, y1)

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                       y1                                             |
  |    SUBTANGENT   =   ------                                           |
  |                       m                                              |
  |                                                                      |
  |    SUBNORMAL    =   y1 . m                                           |
  |                                                                      |
  |                       y1 . sqrt(1 + m^2)                             |
  |    LENGTH OF    =   ---------------------                            |
  |    TANGENT                   m                                       |
  |                                                                      |
  |    LENGTH OF    =   y1 . sqrt(1 + m^2)                               |
  |    NORMAL                                                            |
  |                                                                      |
  |    (take the MODULUS - lengths are never negative)                   |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Memory hook:
```
     SUBTANGENT  ->  y DIVIDED by m
     SUBNORMAL   ->  y TIMES   m
     the two LENGTHS  =  the two "sub" answers  x  sqrt(1 + m^2)
```

### WORKED EXAMPLE 8.1

Find the lengths of the subtangent and subnormal at any point on y^2 = 4ax.

```
  Differentiate implicitly:   2y (dy/dx) = 4a
                              dy/dx = 2a / y  = m

  SUBTANGENT  =  y / m  =  y / (2a/y)  =  y^2 / (2a)  =  4ax / (2a)  =  2x

  SUBNORMAL   =  y . m  =  y . (2a/y)  =  2a       <-- a CONSTANT
```

**Famous result: for a parabola the subnormal is constant and equals 2a.**

### WORKED EXAMPLE 8.2

Find the lengths of subtangent, subnormal, tangent and normal to
y = x^3 + 4x at the point (1, 5).

```
  Check the point:  1 + 4 = 5    YES.

  dy/dx = 3x^2 + 4   ->  at x = 1 :  m = 3 + 4 = 7 ,  y1 = 5

  SUBTANGENT  =  y1 / m  =  5/7

  SUBNORMAL   =  y1 . m  =  5 x 7  =  35

  sqrt(1 + m^2) = sqrt(1 + 49) = sqrt(50) = 5 sqrt(2)

  LENGTH OF TANGENT =  |y1 sqrt(1+m^2) / m|  =  5 . 5 sqrt2 / 7  =  25 sqrt2 / 7

  LENGTH OF NORMAL  =  |y1 sqrt(1+m^2)|     =  5 . 5 sqrt2      =  25 sqrt2
```

---

# TOPIC 9 — Angle between two curves; orthogonal curves

The angle between two curves at a point where they cross **is defined as the
angle between their TANGENTS at that point.**

```
                    curve 1
                       \        /  tangent 1
                        \  ,-'
                    ,-'  X  <-- angle A here
                 ,-'    / \
        tangent 2      /   \  curve 2
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                    | m1  -  m2 |                                  |
  |     tan A   =      | --------- |                                  |
  |                    | 1 + m1 m2 |                                  |
  |                                                                   |
  |     ORTHOGONAL (cut at right angles)   <=>   m1 . m2  =  -1       |
  |                                                                   |
  |     TOUCH each other (angle = 0)       <=>   m1  =  m2            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

### The 4-step routine

```
  1. Solve the two equations TOGETHER to find the point(s) of intersection.
  2. Find dy/dx for curve 1 -> substitute the point -> get m1.
  3. Find dy/dx for curve 2 -> substitute the point -> get m2.
  4. Put m1 and m2 into the tan A formula (or check m1 m2 = -1).
```

### WORKED EXAMPLE 9.1

Find the angle between the curves y^2 = 4x and x^2 = 4y at the point (4, 4).

```
  Curve 1:  y^2 = 4x    ->  2y (dy/dx) = 4   ->  dy/dx = 2/y
            At (4,4):  m1 = 2/4 = 1/2

  Curve 2:  x^2 = 4y    ->  2x = 4 (dy/dx)  ->  dy/dx = x/2
            At (4,4):  m2 = 4/2 = 2

                | (1/2) - 2 |     | -3/2 |     3/2      3
  tan A  =      | --------- |  =  | ---- |  =  -----  = ---
                | 1 + (1/2)(2)|   |  2   |      2        4

  A  =  Tan inverse (3/4)     (about 36 degrees 52 minutes)
```

### WORKED EXAMPLE 9.2 — proving curves are orthogonal

Show that the curves x^2 - y^2 = 5 and 4x^2 + 9y^2 = 72 cut each other
orthogonally.

```
  Step 1   Find the intersection.
           From the first:  y^2 = x^2 - 5
           Put into the second:
                4x^2 + 9(x^2 - 5) = 72
                4x^2 + 9x^2 - 45 = 72
                13x^2 = 117
                x^2 = 9    ->  x = 3 or -3
                y^2 = 9 - 5 = 4   ->  y = 2 or -2
           Take the point (3, 2).

  Step 2   Curve 1:  2x - 2y (dy/dx) = 0   ->  dy/dx = x / y
                     m1 = 3/2

  Step 3   Curve 2:  8x + 18y (dy/dx) = 0  ->  dy/dx = -4x / (9y)
                     m2 = -4(3) / (9 x 2) = -12/18 = -2/3

  Step 4   m1 . m2  =  (3/2) x (-2/3)  =  -1

           Therefore the curves cut ORTHOGONALLY.   Proved.
```

> **TRAP:** You cannot find the angle without first finding the point of
> intersection. dy/dx is a formula in x and y; it only becomes a number m at a
> specific point.

---

# TOPIC 10 — Rolle's Theorem

### The statement (learn it word for word — it is worth 1 mark by itself)

```
  +======================================================================+
  |                                                                      |
  |   ROLLE'S THEOREM                                                    |
  |                                                                      |
  |   If a function f satisfies ALL THREE conditions:                    |
  |                                                                      |
  |     (i)   f is CONTINUOUS on the closed interval [a, b]              |
  |     (ii)  f is DIFFERENTIABLE on the open interval (a, b)            |
  |     (iii) f(a) = f(b)                                                |
  |                                                                      |
  |   then there exists at least one c in (a, b) such that               |
  |                                                                      |
  |                       f'(c)  =  0                                    |
  |                                                                      |
  +======================================================================+
```

### What it means in a picture

```
      y
      ^                _.-''-._      <-- here the tangent is FLAT: f'(c) = 0
      |             _-'        '-_
      |           .'              '.
      |  f(a)  ---*----------------*---  f(b)      f(a) = f(b), same height
      |          /                  \
      |         /                    \
      +--------+---------+-----------+--------> x
               a         c            b

  If you start and finish at the SAME HEIGHT, then somewhere in between
  you must have stopped climbing and started coming down (or the reverse).
  At that turning point the tangent is horizontal.
```

Everyday version: if you leave home and come back home, at some moment your
speed towards home was zero.

### WORKED EXAMPLE 10.1

Verify Rolle's theorem for f(x) = x^2 - 3x + 2 on [1, 2].

```
  Condition (i)   f is a polynomial, so it is continuous everywhere,
                  in particular on [1, 2].                          SATISFIED

  Condition (ii)  f is a polynomial, so it is differentiable everywhere,
                  in particular on (1, 2).                          SATISFIED

  Condition (iii) f(1) = 1 - 3 + 2 = 0
                  f(2) = 4 - 6 + 2 = 0
                  f(1) = f(2) = 0                                   SATISFIED

  So Rolle's theorem applies. Find c :

       f'(x) = 2x - 3
       f'(c) = 0   =>   2c - 3 = 0   =>   c = 3/2

  Is c inside (1, 2)?    1 < 1.5 < 2      YES.

  Hence Rolle's theorem is VERIFIED, with c = 3/2.
```

### WORKED EXAMPLE 10.2 — a harder one that the board likes

Verify Rolle's theorem for f(x) = x(x + 3) e^(-x/2) on [-3, 0].

```
  (i)   Product of a polynomial and an exponential -> continuous on [-3, 0].
  (ii)  Same reason -> differentiable on (-3, 0).
  (iii) f(-3) = (-3)(0) e^(3/2) = 0
        f(0)  = (0)(3) e^0     = 0        f(-3) = f(0) = 0.   SATISFIED

  Now differentiate.  Write f(x) = (x^2 + 3x) e^(-x/2)  and use the product rule:

     f'(x) = (2x + 3) e^(-x/2)  +  (x^2 + 3x) . (-1/2) e^(-x/2)

                 e^(-x/2)
           =  ------------ [ 2(2x + 3) - (x^2 + 3x) ]
                    2

                 e^(-x/2)
           =  ------------ [ -x^2 + x + 6 ]
                    2

                  -e^(-x/2)
           =  --------------- (x^2 - x - 6)
                    2

                  -e^(-x/2)
           =  --------------- (x - 3)(x + 2)
                    2

  e^(-x/2) is never zero, so  f'(c) = 0  gives  c = 3  or  c = -2.

  Which one lies in (-3, 0)?    c = -2 .    (c = 3 is outside, reject it.)

  Rolle's theorem is VERIFIED with c = -2.
```

> **TRAP:** If ANY one condition fails you must say "Rolle's theorem is NOT
> applicable" and stop. Example: f(x) = |x| on [-1, 1] has f(-1) = f(1) = 1, but
> it is not differentiable at x = 0, so the theorem does not apply.

---

# TOPIC 11 — Lagrange's Mean Value Theorem (LMVT)

Rolle's theorem is the special case where the two ends are at the same height.
Lagrange removes that restriction.

```
  +======================================================================+
  |                                                                      |
  |   LAGRANGE'S MEAN VALUE THEOREM                                      |
  |                                                                      |
  |   If  (i)  f is CONTINUOUS on [a, b]                                 |
  |       (ii) f is DIFFERENTIABLE on (a, b)                             |
  |                                                                      |
  |   then there exists at least one c in (a, b) such that               |
  |                                                                      |
  |                        f(b)  -  f(a)                                 |
  |            f'(c)  =  ------------------                              |
  |                          b  -  a                                     |
  |                                                                      |
  |   (only TWO conditions - there is NO f(a) = f(b) here)               |
  |                                                                      |
  +======================================================================+
```

### The picture

```
      y
      ^                                       * B (b, f(b))
      |                                 __--''
      |                        tangent at c is PARALLEL to the chord AB
      |            . - - - - - '
      |        _-'      _.-''
      |     .'      _.-'
      |  A *_ _.-''
      |
      +----+--------+---------+-------------> x
           a        c         b

   The CHORD AB has slope  (f(b) - f(a)) / (b - a) .
   Somewhere in between, the tangent is parallel to that chord.
```

Everyday version: if you drive 100 km in 2 hours, your average speed was
50 km/h, so at some instant your speedometer read exactly 50.

### WORKED EXAMPLE 11.1

Verify LMVT for f(x) = x^2 - 1 on [2, 3].

```
  (i)  polynomial -> continuous on [2, 3].              SATISFIED
  (ii) polynomial -> differentiable on (2, 3).          SATISFIED

  f(2) = 4 - 1 = 3        f(3) = 9 - 1 = 8

           f(3) - f(2)      8 - 3       5
  slope = -------------  =  -------  =  ---  =  5
             3 - 2          3 - 2       1

  f'(x) = 2x ,   so    2c = 5    ->    c = 5/2 = 2.5

  Is 2.5 in (2, 3)?   YES.

  LMVT is VERIFIED with c = 5/2.
```

### WORKED EXAMPLE 11.2

Verify LMVT for f(x) = sqrt(x - 1) on [1, 2].

```
  (i)  sqrt(x-1) is continuous for x >= 1, hence on [1, 2].       SATISFIED
  (ii) f'(x) = 1 / (2 sqrt(x - 1)) exists for every x > 1,
       hence on the OPEN interval (1, 2).                         SATISFIED
       (It fails at x = 1, but x = 1 is only an endpoint, and LMVT
        does not need differentiability at the endpoints.)

  f(1) = 0 ,   f(2) = 1

  slope of chord = (1 - 0)/(2 - 1) = 1

           1
  ---------------  =  1     ->   2 sqrt(c - 1) = 1
   2 sqrt(c - 1)

       sqrt(c - 1) = 1/2   ->   c - 1 = 1/4   ->   c = 5/4

  5/4 = 1.25 lies in (1, 2).    VERIFIED.
```

### How the two theorems relate

| | Rolle | Lagrange |
|---|-------|----------|
| Conditions | 3 (continuity, differentiability, f(a)=f(b)) | 2 (continuity, differentiability) |
| Conclusion | f'(c) = 0 | f'(c) = [f(b)-f(a)]/(b-a) |
| Picture | horizontal tangent | tangent parallel to the chord |
| Relationship | the case where f(a) = f(b) | the general case |

---

# TOPIC 12 — Increasing and decreasing functions

### The definitions in plain English

```
  INCREASING on an interval : as you move RIGHT, the graph goes UP.
  DECREASING on an interval : as you move RIGHT, the graph goes DOWN.
  MONOTONIC : it does one of the two things throughout, never both.
```

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |     f'(x) > 0  on an interval   ->   f is INCREASING there      |
  |                                                                 |
  |     f'(x) < 0  on an interval   ->   f is DECREASING there      |
  |                                                                 |
  |     f'(x) = 0  on an interval   ->   f is CONSTANT there        |
  |                                                                 |
  +-----------------------------------------------------------------+
```

Why? Because f'(x) is the slope. Positive slope = uphill. Negative slope =
downhill. That is the whole idea.

```
      INCREASING                      DECREASING
                  /                \
                 /                  \
                /                    \
               /                      \
        slope POSITIVE            slope NEGATIVE
        f'(x) > 0                 f'(x) < 0
```

### THE SIGN LINE — the tool that gets you the marks

```
  1. Find f'(x) and FACTORISE it completely.
  2. Set f'(x) = 0 and find the "critical" values. Mark them on a number line.
  3. Pick a test number in each region and find the SIGN of f'(x) there.
  4. Read off the answer.
```

### WORKED EXAMPLE 12.1

Find the intervals on which f(x) = 2x^3 - 3x^2 - 36x + 7 is increasing and
decreasing.

```
  Step 1   f'(x) = 6x^2 - 6x - 36
                 = 6(x^2 - x - 6)
                 = 6(x - 3)(x + 2)

  Step 2   f'(x) = 0  ->  x = -2  and  x = 3

  Step 3   SIGN LINE:

                        -2                  3
        ----------------+-------------------+----------------
          test x = -3      test x = 0          test x = 4
          6(-6)(-1)        6(-3)(2)            6(1)(6)
          = +36            = -36               = +36
          POSITIVE         NEGATIVE            POSITIVE

              /                \                   /
             /                  \                 /
        INCREASING           DECREASING       INCREASING

  Step 4   ANSWER
           Increasing on  (-infinity, -2)  and  (3, infinity)
           Decreasing on  (-2, 3)
```

The shape of the graph is now completely known:

```
              _.-''-._                              /
            .'        '.                          .'
       ----*------------'-.                    _.'
          -2                '-._          _.-'
                                 '-._  _.'
                                     '*
                                      3
     rises to x = -2, falls to x = 3, then rises again
```

### WORKED EXAMPLE 12.2

Show that f(x) = x^3 + 3x + 5 is increasing for all real x.

```
  f'(x) = 3x^2 + 3  =  3(x^2 + 1)

  x^2 is never negative, so x^2 + 1 is always at least 1,
  so f'(x) is always at least 3, which is POSITIVE.

  Since f'(x) > 0 for every real x, f is increasing on the whole real line.
```

> **TRAP:** The answer must be given as an INTERVAL, not as a point. Writing
> "increasing at x = 4" is meaningless. Write "increasing on (3, infinity)".

---

# TOPIC 13 — Maxima and minima: the basic ideas

```
      y
      ^          LOCAL MAXIMUM
      |            _.-''-._                     ABSOLUTE MAXIMUM
      |          .'        '.                       (highest of all)
      |        .'            '.                         *
      |      .'                '.                      /
      |     '                    '.                  .'
      |                            '._            _.'
      |                               '-._    _.-'
      |                                   '*'
      |                              LOCAL MINIMUM
      +-------------------------------------------------> x

   LOCAL (or relative) maximum : higher than its immediate neighbours.
                                 It is the top of a HILL.
   LOCAL (or relative) minimum : lower than its immediate neighbours.
                                 It is the bottom of a VALLEY.
   ABSOLUTE maximum/minimum    : the highest / lowest value in the WHOLE
                                 interval being considered.
```

**Key fact:** at the top of a hill and at the bottom of a valley the curve is
momentarily flat, so **f'(x) = 0** there. Points where f'(x) = 0 are called
**stationary points** or **critical points**.

But f'(x) = 0 is not enough by itself:

```
      /                     \                        _
     /                       \                   ___/
    /   f'=0 at top           \  f'=0 at bottom  /
   MAXIMUM                  MINIMUM         POINT OF INFLEXION
                                            (f' = 0 but NEITHER)
                                            example: y = x^3 at x = 0
```

So after solving f'(x) = 0 you must TEST each solution. There are two tests.

---

# TOPIC 14 — The FIRST derivative test

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Look at the SIGN of f'(x) just BEFORE and just AFTER x = c :     |
  |                                                                    |
  |    sign changes  +  to  -    ->   MAXIMUM at c   (up then down)    |
  |    sign changes  -  to  +    ->   MINIMUM at c   (down then up)    |
  |    no sign change            ->   NEITHER (point of inflexion)     |
  |                                                                    |
  +--------------------------------------------------------------------+
```

```
        + + + + +  |  - - - - -           - - - - -  |  + + + + +
                   c                                 c
              MAXIMUM                            MINIMUM
                 /\                                  \/
```

### WORKED EXAMPLE 14.1

Find the local maximum and minimum of f(x) = x^3 - 6x^2 + 9x + 15 using the
first derivative test.

```
  f'(x) = 3x^2 - 12x + 9  =  3(x^2 - 4x + 3)  =  3(x - 1)(x - 3)

  Critical points:  x = 1 ,  x = 3

  SIGN LINE:
                          1                   3
        ------------------+-------------------+------------------
           x = 0             x = 2               x = 4
           3(-1)(-3) = +9    3(1)(-1) = -3       3(3)(1) = +9
           POSITIVE          NEGATIVE            POSITIVE

              +      ->        -                    +
              (+ to -) at x = 1   ->  MAXIMUM
              (- to +) at x = 3   ->  MINIMUM

  Maximum value :  f(1) = 1 - 6 + 9 + 15 = 19
  Minimum value :  f(3) = 27 - 54 + 27 + 15 = 15
```

Note the odd-looking fact: the "maximum" value 19 is bigger than the "minimum"
value 15, but they are LOCAL. That is normal and correct.

---

# TOPIC 15 — The SECOND derivative test (use this one in the exam)

```
  +====================================================================+
  |                                                                    |
  |   STEP 1   Solve  f'(x) = 0   ->  gives x = c                      |
  |   STEP 2   Compute f''(x) and substitute x = c                     |
  |                                                                    |
  |        f''(c)  <  0    ->   MAXIMUM at x = c                       |
  |        f''(c)  >  0    ->   MINIMUM at x = c                       |
  |        f''(c)  =  0    ->   TEST FAILS, go back to the first       |
  |                             derivative test                        |
  |                                                                    |
  |   STEP 3   The maximum/minimum VALUE is f(c).                      |
  |                                                                    |
  +====================================================================+
```

Memory hook that never fails:

```
    NEGATIVE second derivative   ->   the curve bends DOWNWARDS   /\   MAXIMUM
    POSITIVE second derivative   ->   the curve bends UPWARDS     \/   MINIMUM

    "n" for negative, "n" for maximum? No -
    just remember the SIGNS ARE THE OPPOSITE of what you would guess.
```

### WORKED EXAMPLE 15.1

Same function, f(x) = x^3 - 6x^2 + 9x + 15, by the second derivative test.

```
  f'(x)  = 3x^2 - 12x + 9  =  3(x-1)(x-3)   ->  c = 1 , 3
  f''(x) = 6x - 12

  At x = 1 :  f''(1) = 6 - 12 = -6  which is NEGATIVE  ->  MAXIMUM
              maximum value f(1) = 19

  At x = 3 :  f''(3) = 18 - 12 = +6 which is POSITIVE  ->  MINIMUM
              minimum value f(3) = 15
```

Two lines of work instead of a whole sign line. **This is why you use the second
derivative test in the exam.**

### WORKED EXAMPLE 15.2 — when the test fails

f(x) = x^4. Then f'(x) = 4x^3 = 0 gives x = 0, and f''(x) = 12x^2 gives
f''(0) = 0. The test fails. Use the first derivative test: f' is negative for
x < 0 and positive for x > 0, so x = 0 is a MINIMUM.

---

# TOPIC 16 — Absolute maximum and minimum on a closed interval [a, b]

On a closed interval the biggest value might happen at a turning point OR at one
of the two ends. So you must check both.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   1. Solve f'(x) = 0 and keep ONLY the roots lying inside [a, b].  |
  |   2. Make a LIST:  those roots, plus a, plus b.                    |
  |   3. Compute f at every value on the list.                         |
  |   4. The LARGEST number is the absolute maximum.                   |
  |      The SMALLEST number is the absolute minimum.                  |
  |                                                                    |
  |   NO second derivative test needed. Just compare the numbers.      |
  |                                                                    |
  +--------------------------------------------------------------------+
```

### WORKED EXAMPLE 16.1

Find the absolute maximum and minimum of f(x) = 2x^3 - 3x^2 - 12x on [-2, 3].

```
  Step 1   f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1)
           Roots:  x = 2  and  x = -1 .  Both lie inside [-2, 3].  Keep both.

  Step 2   List:  x = -2 , -1 , 2 , 3

  Step 3   f(-2) = 2(-8) - 3(4) - 12(-2) = -16 - 12 + 24  =  -4
           f(-1) = 2(-1) - 3(1) - 12(-1) =  -2 -  3 + 12  =   7
           f(2)  = 2(8)  - 3(4) - 12(2)  =  16 - 12 - 24  = -20
           f(3)  = 2(27) - 3(9) - 12(3)  =  54 - 27 - 36  =  -9

  Step 4   Compare  -4 , 7 , -20 , -9

           ABSOLUTE MAXIMUM  =  7    at x = -1
           ABSOLUTE MINIMUM  = -20   at x =  2
```

> **TRAP:** Do not forget the endpoints. In this problem the absolute minimum
> happened at an interior point, but very often it sits at x = a or x = b, and
> students who skip the endpoints lose half the marks.

---

# TOPIC 17 — APPLIED OPTIMISATION (the 7-mark question)

This is the highest-value topic in the chapter. The story changes but the method
never does.

```
  +======================================================================+
  |   THE OPTIMISATION RECIPE                                            |
  |                                                                      |
  |   1. DRAW a figure and name the variables.                           |
  |   2. Write the quantity to be maximised / minimised. Call it Q.      |
  |   3. Use the CONSTRAINT given in the question to eliminate all but   |
  |      ONE variable.  (This is the step students skip - do not.)       |
  |   4. Differentiate Q and set dQ/dx = 0. Solve.                       |
  |   5. Use the SECOND derivative test to confirm max or min.           |
  |   6. Answer the question that was actually asked                     |
  |      (sometimes the dimensions, sometimes the value).                |
  +======================================================================+
```

## CLASSIC 1 — The largest rectangle inscribed in a circle

Show that the rectangle of maximum area inscribed in a circle of radius r is a
SQUARE.

```
          ___________
       ,-'     |     '-.
     ,'   +----+----+   ',
    /     |    |    |     \
   |      |    O----+---- r|          the diagonal of the rectangle
   |      |         |      |          is the DIAMETER = 2r
    \     +----+----+     /
     ',         |       ,'
       '-.___________,-'

   Let the sides be x and y.   Then  x^2 + y^2 = (2r)^2 = 4r^2
```

```
  Step 2   Area  A = x y

  Step 3   From the constraint,  y = sqrt(4r^2 - x^2)
           So   A = x sqrt(4r^2 - x^2)

           Square roots are ugly to differentiate, so maximise A^2 instead.
           (A is positive, so A is largest exactly when A^2 is largest.)

           Let  S = A^2 = x^2 (4r^2 - x^2) = 4r^2 x^2 - x^4

  Step 4   dS/dx = 8 r^2 x - 4x^3 = 4x (2r^2 - x^2)

           dS/dx = 0  ->  x = 0 (rejected, no rectangle) or x^2 = 2r^2
                      ->  x = r sqrt(2)

  Step 5   d^2S/dx^2 = 8r^2 - 12x^2
           At x^2 = 2r^2 :  8r^2 - 24r^2 = -16r^2  which is NEGATIVE
           -> MAXIMUM.

  Step 6   y = sqrt(4r^2 - 2r^2) = sqrt(2r^2) = r sqrt(2) = x

           Since x = y, the rectangle is a SQUARE.       Proved.

           Maximum area = x y = (r sqrt2)(r sqrt2) = 2 r^2
```

## CLASSIC 2 — The box of maximum volume from a square sheet

From a square sheet of side a, equal squares of side x are cut from the four
corners and the flaps are folded up to form an open box. Find x so that the
volume is greatest.

```
     +---+---------------------+---+
     | x |                     | x |        cut the shaded corners
     +---+                     +---+
     |                             |
     |         a - 2x              |        base of the box
     |                             |        is (a - 2x) by (a - 2x)
     |                             |
     +---+                     +---+
     | x |                     | x |        height of the box is x
     +---+---------------------+---+
                   a
```

```
  Step 2   V = (a - 2x)^2 . x

  Step 3   Already in ONE variable x, with 0 < x < a/2.

  Step 4   dV/dx = (a - 2x)^2 . 1  +  x . 2(a - 2x)(-2)

                 = (a - 2x) [ (a - 2x)  -  4x ]

                 = (a - 2x)(a - 6x)

           dV/dx = 0  ->  x = a/2  or  x = a/6

           x = a/2 makes the base zero, so REJECT it.
           Therefore  x = a/6.

  Step 5   dV/dx = a^2 - 8ax + 12x^2
           d^2V/dx^2 = -8a + 24x
           At x = a/6 :  -8a + 4a = -4a  which is NEGATIVE  ->  MAXIMUM.

  Step 6   Maximum volume
                    a         2a  2       a    4a^2      2 a^3
              V  = ---  ( a - --- )   =  --- . -----  =  -------
                    6          3          6      9         27
```

**Answer: cut squares of side a/6; maximum volume = 2a^3 / 27.**

## CLASSIC 3 — Cylinder of given volume with minimum surface area

A closed cylindrical can must hold a fixed volume V. Show that the total surface
area is least when the height equals the diameter.

```
       +---------+          radius r ,  height h
       |         |
       |         |  h       VOLUME   V = pi r^2 h        (this is FIXED)
       |         |
       +---------+          SURFACE  S = 2 pi r^2 + 2 pi r h
        <-- 2r -->                     (two circular ends + the curved side)
```

```
  Step 3   From the constraint,   h = V / (pi r^2)

                                        V              2V
           S = 2 pi r^2 + 2 pi r . ---------  =  2 pi r^2  +  ----
                                     pi r^2                     r

  Step 4   dS/dr = 4 pi r  -  2V / r^2

           Set to zero:   4 pi r = 2V / r^2
                          4 pi r^3 = 2V
                          V = 2 pi r^3

  Step 5   d^2S/dr^2 = 4 pi + 4V / r^3 , which is POSITIVE  ->  MINIMUM.

  Step 6   But V = pi r^2 h , so
                pi r^2 h  =  2 pi r^3
                        h  =  2 r  =  the DIAMETER.        Proved.
```

## CLASSIC 4 — Two numbers with a fixed sum

Find two positive numbers whose sum is 16 and whose PRODUCT is maximum.

```
  Let the numbers be x and 16 - x.

  P = x(16 - x) = 16x - x^2

  dP/dx = 16 - 2x = 0   ->   x = 8

  d^2P/dx^2 = -2  which is NEGATIVE  ->  MAXIMUM.

  The numbers are 8 and 8, and the maximum product is 64.
```

**General rule worth remembering: for a fixed SUM, the product is greatest when
the numbers are EQUAL.**

A harder version the board likes:

```
  Find x and y with x + y = 60 such that  x y^3  is maximum.

  x = 60 - y ,   so   f(y) = (60 - y) y^3 = 60 y^3 - y^4

  f'(y) = 180 y^2 - 4 y^3 = 4y^2 (45 - y)

  f'(y) = 0  ->  y = 0 (reject) or y = 45

  f''(y) = 360 y - 12 y^2 ; at y = 45 : 16200 - 24300 = -8100 , NEGATIVE
  -> MAXIMUM.

  So  y = 45  and  x = 60 - 45 = 15.
```

## CLASSIC 5 — Shortest distance from a point to a curve

Find the point on the curve y^2 = 2x which is nearest to the point (1, 4).

```
  Let P(x, y) be any point on the curve.  Then  x = y^2 / 2.

  Distance    d = sqrt( (x - 1)^2 + (y - 4)^2 )

  KEY TRICK:  minimise d^2 instead of d. The square root disappears and the
              minimising point is exactly the same.

                              y^2         2
  Step 3      D = d^2  =  (  ----- - 1  )   +  ( y - 4 )^2
                              2

  Step 4      dD          y^2
             ----  =  2 ( ---- - 1 ) . y   +   2 ( y - 4 )
              dy           2

                   =  y^3 - 2y + 2y - 8

                   =  y^3 - 8

             Set to zero:   y^3 = 8   ->   y = 2

  Step 5     d^2D / dy^2 = 3 y^2 = 12 at y = 2 , which is POSITIVE
             -> MINIMUM.

  Step 6     x = y^2 / 2 = 4/2 = 2 .   The nearest point is  (2, 2).

             Shortest distance = sqrt( (2-1)^2 + (2-4)^2 ) = sqrt(1 + 4)
                               = sqrt(5)
```

> **TRAP:** Never differentiate the square root itself. Always minimise the
> SQUARE of the distance. This single trick turns a hard question into an easy
> one and is expected in the model answer.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Go through this list for every question you attempted from this chapter.

| # | Check | Why it matters |
|---|-------|----------------|
| 1 | Did I write dy/dx BEFORE substituting the point? | Substituting early kills the derivative |
| 2 | In a related-rates question, did I differentiate w.r.t. **t** and not x? | Every letter needs d.../dt |
| 3 | Did I put the UNITS on every rate and every error? | cm/s, cm^3/s, cm^2 — a free mark |
| 4 | Approximate error has units; relative error has none; percentage error has % | Easy mark to lose |
| 5 | For a tangent, did I check the point actually lies on the curve? | Sometimes it does not |
| 6 | Did I check tangent slope x normal slope = -1? | Instant self-verification |
| 7 | For Rolle / LMVT, did I WRITE OUT all the conditions before using them? | Marks are given for stating them |
| 8 | Did I show that c lies INSIDE the open interval? | The verification is incomplete without it |
| 9 | Did I reject the roots of f'(x)=0 that fall outside the interval? | Common source of a wrong answer |
| 10 | Increasing/decreasing answers written as INTERVALS, not points? | "at x = 2" scores zero |
| 11 | Did I apply the second derivative test and state its SIGN? | f''<0 max, f''>0 min |
| 12 | For a closed interval, did I also evaluate f(a) and f(b)? | Half the marks live there |
| 13 | In an optimisation problem, did I reduce to ONE variable first? | Otherwise you cannot differentiate |
| 14 | Did I REJECT the impossible root (negative length, zero side)? | Examiners look for this line |
| 15 | Did I answer what was asked — dimensions, or value, or both? | Finishing the question is a mark |
| 16 | Is every diagram labelled? | Optimisation marks start with the figure |

**If you can tick all sixteen, you have the full 15-19 marks this chapter offers.**
