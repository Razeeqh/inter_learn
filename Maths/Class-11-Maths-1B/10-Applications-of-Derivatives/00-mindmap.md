# Applications of Derivatives — Mind Map

**Maths 1B · Chapter 10 · The chapter that reliably supplies a 7-mark long answer**
Every year: 1 long answer (7M, almost always Maxima–Minima or Tangents/Normals)
+ 1-2 short answers (4M) + 2-3 very short answers (2M).

If you learn only ONE chapter in Maths IB properly, learn this one. It is the
highest marks-per-hour chapter in the whole paper.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                 A P P L I C A T I O N S   O F   D E R I V A T I V E S
                                        |
                          dy/dx means TWO things:
                          (1) a RATE of change
                          (2) the SLOPE of the tangent
                                        |
    +--------------+--------------+-----+------+--------------+--------------+
    |              |              |            |              |              |
  ERRORS &       RATE OF      TANGENTS &     MEAN VALUE   INCREASING /     MAXIMA &
  APPROX.        CHANGE        NORMALS       THEOREMS     DECREASING       MINIMA
    |              |              |            |              |              |
  dy = f'(x)dx  dA/dt, dV/dt   m = dy/dx    ROLLE'S       f'(x) > 0      f'(x) = 0
    |            = rate         at (x1,y1)  f(a) = f(b)   -> increasing  -> critical
  delta y ~ dy    |               |         -> f'(c) = 0       |          points
    |          Chain rule:     Tangent:         |          f'(x) < 0        |
  f(x + dx)    dV/dt =         y - y1 =     LAGRANGE      -> decreasing  1st DERIV.
   ~ f(x)      dV/dr x dr/dt   m(x - x1)    f'(c) =           |          TEST
   + f'(x)dx     |               |          f(b)-f(a)     SIGN LINE:     (sign of f')
    |          Balloon        Normal:        -------      + + | - - -       |
  Relative     Ladder         y - y1 =        b - a       increasing    2nd DERIV.
  error        Water tank     -(1/m)(x-x1)      |         then         TEST
  = dy/y         Oil slick       |          Verify 3      decreasing   f''(c) < 0 max
    |          Shadow        Lengths:       conditions        |        f''(c) > 0 min
  Percent      Cone/sphere   tangent           |          Turning          |
  error          |           normal        Geometry:      point        ABSOLUTE max/min
  = 100 dy/y   Related       subtangent    horizontal        |         on [a, b]
    |          rates         subnormal     tangent       Monotonic         |
  sqrt, cbrt   method:          |          exists        on interval    APPLIED
  approx       relate,       ANGLE                          |          OPTIMISATION
  values       differentiate BETWEEN                     Prove          (7 MARKS)
               w.r.t. t      TWO CURVES                  inequalities      |
                                |                                    Rectangle in
                             tan A =                                 circle, box
                             (m1-m2)                                 from sheet,
                             -------                                 cylinder min
                             (1+m1m2)                                surface, sum
                                |                                    fixed product
                             ORTHOGONAL                              max, shortest
                             m1 m2 = -1                              distance
```

---

## THE 60-SECOND VERSION

You already know how to FIND dy/dx (Chapter 9). This chapter only asks:
**"now that you have dy/dx, what is it good for?"**

There are exactly six answers:

| # | dy/dx is used as | The question sounds like | Marks |
|---|------------------|--------------------------|-------|
| 1 | a multiplier for small changes | "find approximate value of sqrt(82)" | 2 or 4 |
| 2 | a rate per second | "how fast is the radius increasing?" | 4 |
| 3 | the slope of the tangent | "find the tangent at (1, 2)" | 2 or 4 |
| 4 | zero somewhere in between | "verify Rolle's theorem" | 4 |
| 5 | a plus/minus sign | "find where f is increasing" | 4 |
| 6 | zero at a turning point | "find the maximum volume" | **7** |

That is the entire chapter. Six jobs, one derivative.

---

## WHERE THE MARKS ARE (AP Inter, Maths IB — total 75 marks)

**Paper shape:** Section A = 10 questions x 2 marks, **answer ALL**.
Section B = 7 questions x 4 marks, **answer any 5**.
Section C = 7 questions x 7 marks, **answer any 5**.

| Topic | Section | Marks | How certain |
|-------|---------|-------|-------------|
| Errors, approximations, dy and delta y | A | 2 | very likely |
| Slope / tangent / normal at a point | A | 2 | very likely |
| Subtangent, subnormal, lengths | A or B | 2 or 4 | likely |
| Rate of change (one-step) | A | 2 | likely |
| Related rates (balloon, ladder, tank) | B | 4 | very likely |
| Angle between two curves | B | 4 | likely |
| Rolle's / Lagrange verification | B | 4 | very likely |
| Increasing and decreasing intervals | B | 4 | likely |
| **Applied maxima-minima (optimisation)** | **C** | **7** | **near-certain** |
| Tangent/normal long problem | C | 7 | sometimes |

**Total realistically available from this one chapter: 15 to 19 marks out of 75.**

---

## THE KEY BOX — if you memorise nothing else, memorise this

```
  +==========================================================================+
  |                                                                          |
  |   SLOPE OF TANGENT at the point (x1, y1)                                 |
  |                                                                          |
  |        m  =  [ dy/dx ] evaluated at (x1, y1)                             |
  |                                                                          |
  |   SLOPE OF NORMAL at the same point                                      |
  |                                                                          |
  |                  -1                                                      |
  |        m'  =  --------      (normal is PERPENDICULAR to the tangent)     |
  |                dy/dx                                                     |
  |                                                                          |
  |   EQUATION OF TANGENT :   y - y1  =  m (x - x1)                          |
  |                                        -1                                |
  |   EQUATION OF NORMAL  :   y - y1  =  ------ (x - x1)                     |
  |                                         m                                |
  |                                                                          |
  +==========================================================================+


  +==========================================================================+
  |                                                                          |
  |   MAXIMA - MINIMA TEST  (the 7-mark question)                            |
  |                                                                          |
  |   STEP 1   Solve   f'(x) = 0     ->  gives the stationary point x = c    |
  |                                                                          |
  |   STEP 2   Find    f''(x)  and put x = c                                 |
  |                                                                          |
  |            f''(c) < 0   ->   MAXIMUM at x = c    (curve is a hill  /\ )  |
  |            f''(c) > 0   ->   MINIMUM at x = c    (curve is a valley \/ ) |
  |            f''(c) = 0   ->   test fails, use the first derivative test   |
  |                                                                          |
  |   STEP 3   Put x = c back into f(x) to get the maximum/minimum VALUE.    |
  |                                                                          |
  |   MEMORY HOOK :  second derivative NEGATIVE  ->  maximum                 |
  |                  (the signs are OPPOSITE to what you expect)             |
  |                                                                          |
  +==========================================================================+
```

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 0   Revise Chapter 9 differentiation
           (product, quotient, chain rule). Nothing here works without it.
              |
  STEP 1   Errors and approximations       <-- easiest, pure formula, 2 marks
              |
  STEP 2   Rate of change (one variable)
              |
  STEP 3   Related rates (two variables joined by a chain rule)
              |
  STEP 4   Slope of tangent = dy/dx
              |
     +--------+--------+
     |                 |
  STEP 5           STEP 6
  Tangent &        Lengths of tangent, normal,
  normal           subtangent, subnormal
  equations             |
     |                  |
  STEP 7   Angle between two curves / orthogonal curves
              |
  STEP 8   Rolle's theorem     (special case, easier)
              |
  STEP 9   Lagrange Mean Value Theorem    (general case)
              |
  STEP 10  Increasing / decreasing + SIGN LINE
              |
  STEP 11  Maxima and minima : first derivative test
              |
  STEP 12  Maxima and minima : second derivative test
              |
  STEP 13  Absolute maximum / minimum on a closed interval [a, b]
              |
  STEP 14  APPLIED OPTIMISATION  <-- THE 7-MARK QUESTION
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning (2 hours)** — Errors and approximations + slope, tangent, normal.
Do 8 problems. These are pure substitution. You will get every one of them right
and it will make you believe you can do this chapter.

**Day 1 afternoon (2 hours)** — Subtangent, subnormal, angle between curves.
Learn the four length formulas as a block. They are a guaranteed 2 or 4 marks.

**Day 1 evening (2 hours)** — Rolle's and Lagrange. Learn the THREE conditions
by heart, then do 4 verification problems. This is the most mechanical 4 marks
in the paper: state conditions, check them, solve f'(c) = 0, show c lies inside.

**Day 2 morning (3 hours)** — Increasing/decreasing with the sign line, then
maxima-minima with the second derivative test. Do 6 problems.

**Day 2 evening (3 hours)** — The five classic optimisation problems ONLY:
```
  1. Largest rectangle inscribed in a circle           -> a SQUARE
  2. Box of maximum volume from a square sheet         -> x = a/6
  3. Cylinder of given volume, minimum surface area    -> h = 2r
  4. Two numbers with fixed sum, maximum product       -> both equal
  5. Shortest distance from a point to a curve         -> minimise d^2
```
Learn the ANSWER of each one first, then learn the working backwards from it.
If you know the answer you cannot get lost in the algebra.

That alone is worth about 15 of the 75 marks in Maths IB.
