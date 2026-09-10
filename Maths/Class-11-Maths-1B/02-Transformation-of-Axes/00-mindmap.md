# Transformation of Axes — Mind Map

**Maths 1B · Chapter 2 · The smallest chapter in the paper, and the surest 2 marks**

This chapter is tiny. It has **two ideas** (slide the origin, spin the axes), about
**six formulas**, and roughly **four question shapes**. A weak student can finish the
whole chapter in one long evening and then collect the marks every single year.

Be honest about the size of the prize:

```
  +======================================================================+
  |                                                                      |
  |   TRANSFORMATION OF AXES IS A SECTION A CHAPTER.                     |
  |                                                                      |
  |   Section A (2 marks) ..... YES, reliably. Almost every paper has    |
  |                             one. You must answer ALL of Section A,   |
  |                             so this is a mark you cannot dodge -     |
  |                             and it is one of the easiest 2 marks     |
  |                             in the whole 75.                         |
  |                                                                      |
  |   Section B (4 marks) ..... SOMETIMES. A "remove the xy term" or     |
  |                             "transformed equation after rotation"    |
  |                             question turns up now and then.          |
  |                                                                      |
  |   Section C (7 marks) ..... NO. Never. Do not hunt for one.          |
  |                                                                      |
  |   REALISTIC HAUL:  2 marks guaranteed , 6 marks in a good year.      |
  |                                                                      |
  +======================================================================+
```

Two marks does not sound like much. But look at it this way: this is the **cheapest
mark-per-hour in the entire Maths IB syllabus**. Two hours of work here is worth more
than two hours spent half-learning Maxima and Minima. And the "shift the origin to
kill the first degree terms" idea comes back in **The Circle**, **The Parabola**, the
**Ellipse** and the **Hyperbola** in Maths IIB, where it is worth another 20-odd marks.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
TRANSFORMATION OF AXES
|
+-- 0. WHY WE DO IT AT ALL
|     |
|     +-- the CURVE never moves. Only the OBSERVER moves.
|     +-- we choose better axes so the equation gets SIMPLER
|     +-- ugly:  x^2 + y^2 - 4x + 6y - 12 = 0
|         nice:  X^2 + Y^2 = 25          (same circle, new origin)
|     +-- three moves are allowed:
|           TRANSLATION (slide) , ROTATION (spin) , BOTH
|
+-- 1. TRANSLATION OF AXES  (origin moves to (h,k), axes stay parallel)
|     |
|     +-- OLD from NEW      x = X + h        y = Y + k
|     +-- NEW from OLD      X = x - h        Y = y - k
|     |
|     +-- (a) NEW COORDINATES OF A POINT
|     |         just subtract:  (x - h , y - k)
|     |
|     +-- (b) FIND WHERE TO SHIFT so that a given point becomes
|     |       another given point:   h = x - X ,  k = y - Y
|     |
|     +-- (c) NEW EQUATION OF A CURVE
|     |         put  x = X + h  and  y = Y + k  and expand
|     |
|     +-- (d) OLD EQUATION FROM THE NEW ONE  (the reverse)
|     |         put  X = x - h  and  Y = y - k  and expand
|     |
|     +-- (e) *** THE BIG ONE ***
|               WHERE TO SHIFT TO KILL THE FIRST DEGREE TERMS
|               of  a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0
|
|                        h f - b g              g h - a f
|               alpha = -----------    beta =  -----------
|                        a b - h^2              a b - h^2
|
|               (comes from solving  ax + hy + g = 0
|                                and hx + by + f = 0)
|
|               new constant  c' = g.alpha + f.beta + c
|
|     +-- (f) WHAT DOES NOT CHANGE
|               a , h , b are untouched
|               distance between two points is untouched
|               area of a triangle is untouched
|
+-- 2. ROTATION OF AXES  (same origin, axes turned through theta)
|     |
|     +-- OLD from NEW      x = X cos t - Y sin t
|     |                     y = X sin t + Y cos t
|     |
|     +-- NEW from OLD      X =  x cos t + y sin t
|     |                     Y = -x sin t + y cos t
|     |
|     +-- memory hook: the NEW-from-OLD pair is the OLD-from-NEW pair
|     |                with the minus sign moved downstairs
|     |
|     +-- (a) NEW COORDINATES OF A POINT after a rotation
|     |
|     +-- (b) NEW EQUATION OF A CURVE after a rotation
|     |         substitute and collect X^2 , XY , Y^2
|     |
|     +-- (c) *** THE OTHER BIG ONE ***
|     |         ANGLE THAT KILLS THE xy TERM
|     |
|     |                              2h                  1        ( 2h  )
|     |               tan(2 theta) = ------    theta =  --- tan^-1 (-----)
|     |                              a - b               2        ( a-b )
|     |
|     |         SPECIAL CASE  a = b   ->   theta = 45 degrees
|     |         (because a - b = 0 makes tan(2t) infinite, so 2t = 90)
|     |
|     +-- (d) THE INVARIANTS  (things rotation cannot change)
|               a + b            stays the same
|               a b - h^2        stays the same
|               distance         stays the same
|               area             stays the same
|               (SHORTCUT: a' and b' are the roots of
|                          t^2 - (a+b) t + (ab - h^2) = 0 )
|
+-- 3. COMBINED TRANSFORMATION  (translate first, THEN rotate)
|     |
|     +-- x = h + X cos t - Y sin t
|     +-- y = k + X sin t + Y cos t
|     +-- ORDER MATTERS. Translate to kill x and y terms,
|         then rotate to kill the xy term.
|
+-- 4. WHAT SURVIVES EVERYTHING (rigid motion facts)
      |
      +-- length of a segment
      +-- area of a triangle / any figure
      +-- angle between two lines
      +-- the TYPE of conic (circle stays a circle, etc.)
      +-- NOT the coordinates of a point
      +-- NOT the coefficients g and f
```

---

## THE 60-SECOND VERSION

You are sitting in a train. Another train slides past the window. For a moment you
cannot tell whether **your** train moved or **theirs** did. That is this whole chapter.

The curve is painted on the ground. It does not move, ever. What we move is the
**graph paper** we lay over it. Move the graph paper cleverly and the same curve
gets a much shorter equation.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   TRANSLATION  =  slide the origin to a new point (h, k),            |
  |                   keeping the axes pointing the same way.            |
  |                   Kills the  x  and  y  terms.                       |
  |                                                                      |
  |                   x = X + h        y = Y + k                         |
  |                                                                      |
  |   ROTATION     =  keep the origin, turn both axes through theta.     |
  |                   Kills the  xy  term.                               |
  |                                                                      |
  |                   x = X cos t - Y sin t                              |
  |                   y = X sin t + Y cos t                              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Everything the examiner can ask is one of these four:

```
  1.  Where does this POINT go?                     -> subtract h and k
  2.  What does this CURVE become?                  -> substitute and expand
  3.  Where must I shift to lose the x and y terms? -> alpha, beta formula
  4.  How far must I turn to lose the xy term?      -> tan(2t) = 2h/(a-b)
```

That is the chapter. There is nothing else in it.

---

## THE PICTURE — SEE BOTH TRANSFORMATIONS AT ONCE

### TRANSLATION: the origin slides to (h, k)

```
         y (old)
         ^
         |                         Y (new)
         |                         ^
         |                         |               * P
         |                         |              /
         |                         |          Y  /
         |          O'(h, k) *-----+-------------+ ----> X (new)
         |                   |                X
         |            k      |
         |                   |
    -----O-------------------+--------------------------> x (old)
         |<------ h -------->|

    P has OLD coordinates (x, y)   measured from O
    P has NEW coordinates (X, Y)   measured from O'

         x = X + h                 X = x - h
         y = Y + k                 Y = y - k
```

Say it in words: **to get the new coordinates, subtract the new origin.**

### ROTATION: the axes spin through theta about O

```
         y (old)
         ^
         |   Y (new)
         |  \                                    . X (new)
         |   \                              . '
         |    \                        . '
         |     \                  . '
         |      \            . '
         |       \      . '
         |        \ . '
         |     . ' \
         |  . '     \
         |. '  theta \
    -----O============\============================> x (old)
         |             \

    Both new axes are still at right angles to each other.
    They have simply been turned anticlockwise by theta.

         x = X cos t - Y sin t          X =  x cos t + y sin t
         y = X sin t + Y cos t          Y = -x sin t + y cos t
```

Say it in words: **the axes turn forwards, so the coordinates turn backwards.**

---

## WHERE THE MARKS ARE (AP Inter, Maths IB — total 75 marks)

**How the Maths IB paper is built:**

```
  SECTION A   10 questions x 2 marks   ANSWER ALL          =  20 marks
  SECTION B    7 questions x 4 marks   ANSWER ANY 5        =  20 marks
  SECTION C    7 questions x 7 marks   ANSWER ANY 5        =  35 marks
                                                             ----------
                                                     TOTAL  =  75 marks
```

| Topic | Section | Marks | How often |
|-------|---------|-------|-----------|
| New coordinates of a point after translation | A | 2 | very often |
| Find (h, k) so a given point becomes another given point | A | 2 | often |
| New equation of a curve after translation | A or B | 2 or 4 | very often |
| **Point to which origin is shifted to remove x and y terms** | A or B | 2 or 4 | **the most asked** |
| New coordinates of a point after rotation | A | 2 | often |
| New equation of a curve after rotation | B | 4 | fairly often |
| **Angle of rotation that removes the xy term** | A or B | 2 or 4 | **second most asked** |
| Original equation recovered from the transformed one | B | 4 | sometimes |
| Invariants: a + b and ab - h^2 | A | 2 | sometimes |
| Combined translation and rotation | B | 4 | rare |

**Realistic total from this one chapter: 2 marks nearly always, 6 marks in a good year.**

And remember: **Section A is compulsory.** In Section B you get to choose 5 of 7, so
you can dodge a topic you hate. In Section A there is no dodging. Every 2-mark topic
you have not learned is 2 marks gone for certain. That is exactly why this little
chapter deserves your evening.

---

## THE KEY BOX — THE FOUR THINGS THAT UNLOCK EVERYTHING

```
  +==========================================================================+
  |                                                                          |
  |   1.  TRANSLATION  (origin moved to (h, k))                              |
  |                                                                          |
  |          x = X + h              X = x - h                                |
  |          y = Y + k              Y = y - k                                |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   2.  ROTATION  (axes turned through theta, same origin)                 |
  |                                                                          |
  |          x = X cos t - Y sin t        X =  x cos t + y sin t             |
  |          y = X sin t + Y cos t        Y = -x sin t + y cos t             |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   3.  KILL THE FIRST DEGREE TERMS of                                     |
  |                                                                          |
  |          a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0                     |
  |                                                                          |
  |       Shift the origin to (alpha, beta) where                            |
  |                                                                          |
  |                 h f - b g                    g h - a f                   |
  |       alpha = -------------        beta =  -------------                 |
  |                 a b - h^2                    a b - h^2                   |
  |                                                                          |
  |       (valid only when  ab - h^2  is not zero)                           |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   4.  KILL THE xy TERM of                                                |
  |                                                                          |
  |          a x^2 + 2h xy + b y^2 + ... = 0                                 |
  |                                                                          |
  |       Rotate the axes through theta where                                |
  |                                                                          |
  |                              2h                                          |
  |               tan(2 theta) = ------           and if a = b,              |
  |                              a - b            theta = 45 degrees         |
  |                                                                          |
  +==========================================================================+
```

If you can write these four boxes from memory you already have the 2 marks.
Everything else in the chapter is arithmetic.

> **WATCH THE LETTER h.** It is used for TWO different things in this chapter:
> the **x-shift** of the origin, and the **coefficient** in `2h xy`. That is the
> textbook's fault, not yours. To stay safe, this book writes the shift as
> **(alpha, beta)** whenever an `xy` coefficient is also in the room.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1    Understand the ONE idea:
            the curve is fixed, the axes move
                |
  STEP 2    TRANSLATION formulas:  x = X + h , y = Y + k
            Write them 10 times. Learn which way the minus goes.
                |
  STEP 3    New coordinates of a POINT after a translation
            (pure subtraction - 5 minutes of practice)
                |
  STEP 4    Backwards: find (h, k) given the old and new coordinates
                |
  STEP 5    New EQUATION of a curve after a translation
            (substitute and expand carefully)
                |
  STEP 6    *** REMOVE THE FIRST DEGREE TERMS ***
            Learn BOTH ways:
              (i)  completing the square      (safe, always works)
              (ii) the alpha, beta formula    (fast, exam version)
                |
  STEP 7    Check what translation does NOT change:
            a , h , b , distance , area
                |
  STEP 8    ROTATION formulas. Derive them once, then memorise.
            The 2x2 sign pattern is the only hard bit.
                |
  STEP 9    New coordinates of a POINT after a rotation
                |
  STEP 10   New EQUATION of a curve after a rotation
            (the a' , h' , b' formulas save enormous time)
                |
  STEP 11   *** REMOVE THE xy TERM ***
            tan(2 theta) = 2h/(a - b) , and a = b gives 45 degrees
                |
  STEP 12   THE INVARIANTS  a + b  and  ab - h^2
            Use them to CHECK every rotation answer
                |
  STEP 13   Combined translation + rotation, and the order
                |
  STEP 14   Do 15 past 2-mark questions with a timer.
            Target: under 90 seconds each.
```

---

## THE ONE HABIT THAT SAVES YOU EVERY TIME

Whatever you get as an answer, **test it with a single point**.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   1.  Pick ONE easy point that lies on the ORIGINAL curve.           |
  |   2.  Push it through your transformation to get (X, Y).             |
  |   3.  Put (X, Y) into your NEW equation.                             |
  |   4.  If it gives 0, your answer is right. If not, it is wrong.      |
  |                                                                      |
  |   This takes 30 seconds and it catches every sign slip.              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Example: you claim `x^2 + y^2 - 4x + 6y - 12 = 0` becomes `X^2 + Y^2 = 25` when the
origin moves to `(2, -3)`.

```
  Pick (7, -3).  Old curve:  49 + 9 - 28 - 18 - 12 = 0        YES, it is on it.
  New coords  :  X = 7 - 2 = 5 ,  Y = -3 - (-3) = 0
  New curve   :  5^2 + 0^2 = 25                               CORRECT.
```

Done. You can now hand that answer in with total confidence.

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning — translation, the whole thing (1.5 hours).**

Learn `x = X + h`, `y = Y + k` and its reverse. Then do ONLY these, five each:

```
  (a) "Find the new coordinates of (2, 5) when the origin is shifted to (3, -1)."
  (b) "Find the point to which the origin must be shifted so that (4, 5)
       becomes (1, 2)."
```

Both are subtraction. If you can do those two shapes you already have a real chance
at the Section A question.

**Day 1 evening — the star question (2 hours).**

Learn to remove the first degree terms. Do it by **completing the square** first,
because that always works and you cannot forget it. Then learn the `alpha, beta`
formula for speed. Do these five:

```
  x^2 + y^2 - 4x + 6y - 12 = 0
  x^2 + y^2 - 5x + 2y - 5  = 0
  3x^2 + 2y^2 + 12x - 4y + 5 = 0
  4x^2 + 9y^2 - 8x + 36y + 4 = 0
  2x^2 + 4xy + 5y^2 - 4x - 22y + 7 = 0     <- this one has an xy term
```

The answers are in `03-pyq-ap-board.md`. Check every one by substitution.

**Day 2 morning — rotation (2 hours).**

Write the four rotation formulas out ten times until the sign pattern is automatic.
Then do:

```
  (a) new coordinates of (1, 1) after a 45 degree rotation
  (b) new coordinates of (4, 3) after a 30 degree rotation
  (c) transform  x^2 + 2 sqrt(3) xy - y^2 = 2a^2  through 30 degrees
  (d) transform  3x^2 + 10xy + 3y^2 = 9           through 45 degrees
  (e) transform  17x^2 - 16xy + 17y^2 = 225       through 45 degrees
```

Check each one with `a + b` and `ab - h^2`. If those two numbers do not match,
you have made an arithmetic error — go back and find it.

**Day 2 evening — the angle question and a timed test (1.5 hours).**

Learn `tan(2 theta) = 2h/(a - b)` and the `a = b gives 45 degrees` shortcut.
Then work straight through `SECTION A` of `03-pyq-ap-board.md` with a clock running,
90 seconds per question. Anything you get wrong, redo it the next morning.

**That is the whole chapter, in about seven hours of honest work,
for a mark you will collect every year of your life.**
