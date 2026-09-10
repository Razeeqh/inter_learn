# Differential Equations — Mind Map

**Maths IIB · Chapter 8 · The most predictable chapter in the whole paper**
Every year: 1 long answer (7M) + 1 short answer (4M) + 1-2 very short answers (2M)

> **Read this twice.** This chapter has no theory to understand and no proofs to
> memorise. It is a small number of fixed recipes. You look at the equation,
> decide which recipe it is, and then follow the steps like a cooking instruction.
> A weak student can score EVERY mark here. Nothing clever is required —
> only recognition and practice. **Do this chapter before any other in IIB.**

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                D I F F E R E N T I A L   E Q U A T I O N S
                                  |
   +-------------+----------------+----------------+---------------+
   |             |                |                |               |
 BASICS       FORMING          THE FIVE        REDUCIBLE      APPLICATIONS
   |          THE D.E.          METHODS          FORMS             |
   |             |                |                |               |
 Order       Eliminate       1. VARIABLES     v = ax+by+c      Growth /
 = highest   arbitrary          SEPARABLE     turns a stuck    Decay
 derivative  constants          f(y)dy=g(x)dx equation into    dy/dt = k y
   |             |                |           a separable one      |
 Degree      Order of the    2. HOMOGENEOUS       |            Newton's Law
 = power of  answer          put y = v x      NON-HOMOGENEOUS  of Cooling
 the highest = NUMBER of         |            (ax+by+c)        dT/dt =
 derivative  constants       3. NON-HOMOG.    ---------        -k(T - S)
 after           |              shift origin  (Ax+By+C)            |
 clearing    Differentiate      or v-sub          |            Half-life
 radicals    that many          |             Case 1: lines    problems
   |         times, then     4. LINEAR        MEET  -> shift
 General     kill the           dy/dx+Py=Q    Case 2: lines
 solution    constants          IF=e^(INT     PARALLEL -> put
 (has c's)       |              P dx)         v = ax + by
   |         Order also         |
 Particular  = how many     5. BERNOULLI
 solution    times you          y^n on RHS
 (c found    differentiate      divide by y^n
 from data)                     put v = y^(1-n)
```

---

## THE 60-SECOND VERSION

A **differential equation** is just an equation that contains dy/dx
(or d2y/dx2, or d3y/dx3, ...).

**Solving it** means: get rid of the derivative and end up with an ordinary
relation between x and y, plus a constant c.

That is the whole subject. Everything else is bookkeeping.

| The job | What you actually do | Where it is asked |
|---------|----------------------|-------------------|
| Order and degree | Clear roots, then look at the highest derivative | Section A, 2 marks |
| Form the D.E. | Differentiate, then kill the constants | Section A / B |
| Separable | All y on one side, all x on the other, integrate | Section A / B |
| Homogeneous | Substitute y = vx | **Section C, 7 marks** |
| Linear | IF = e^(INT P dx), then y·IF = INT Q·IF dx | **Section C, 7 marks** |

---

## WHERE THE MARKS ARE (AP Inter, Maths IIB — total 75 marks)

**The paper:**

```
  SECTION A   Q1 - Q10     2 marks each    answer ALL 10       = 20 marks
  SECTION B   Q11 - Q17    4 marks each    answer any 5 of 7   = 20 marks
  SECTION C   Q18 - Q24    7 marks each    answer any 5 of 7   = 35 marks
                                                        TOTAL  = 75 marks
```

**Where this chapter sits:**

| Topic | Section | Usual Q. no. | Marks |
|-------|---------|--------------|-------|
| Order and degree of a given equation | A | Q9 or Q10 | 2 |
| Form a D.E. by eliminating constants | A | Q10 | 2 |
| Simple separable equation | A | Q10 | 2 |
| Separable / reducible to separable | B | Q17 | 4 |
| Small linear equation | B | Q17 | 4 |
| **Homogeneous equation** | **C** | **Q24** | **7** |
| **Linear equation dy/dx + Py = Q** | **C** | **Q24** | **7** |
| Non-homogeneous (ax+by+c)/(Ax+By+C) | C | Q24 | 7 |
| Bernoulli equation | C | Q24 | 7 |

**Total available from this one chapter: about 11-13 marks out of 75.**
And the 7-mark one is nearly free once you know the recipe.

---

## WHICH TYPE IS IT?  (the decision tree — memorise this shape)

Read the equation. Walk down the tree. Do not skip a branch.

```
              START: you are given an equation containing dy/dx
                                  |
                                  v
        Q1. Does it ask for ORDER / DEGREE only?
              |                          |
             YES                         NO
              |                          |
        Clear ALL roots and         go to Q2
        fractional powers
        first, THEN read off
        the two numbers
                                         |
                                         v
        Q2. Does it say "form the differential equation"
            or "eliminate the arbitrary constants"?
              |                          |
             YES                         NO
              |                          |
        Differentiate as many       go to Q3
        times as there are
        constants, then
        eliminate them
                                         |
                                         v
        Q3. Can you write it as   f(y) dy = g(x) dx  ?
            (every y on one side, every x on the other)
              |                          |
             YES                         NO
              |                          |
        *** VARIABLES               go to Q4
            SEPARABLE ***
        Integrate both sides.
        Add + c.
                                         |
                                         v
        Q4. Is the WHOLE right side a function of (ax + by + c) only?
            e.g.  dy/dx = (x + y + 1)^2   or   dy/dx = sin(x + y)
              |                          |
             YES                         NO
              |                          |
        Put  v = ax + by + c        go to Q5
        -> becomes SEPARABLE
                                         |
                                         v
        Q5. Is every term the SAME total degree in x and y?
            e.g. (x^2 + y^2) dx = 2xy dy      degree 2 everywhere
              |                          |
             YES                         NO
              |                          |
        *** HOMOGENEOUS ***         go to Q6
        Put  y = v x
        dy/dx = v + x dv/dx
        -> becomes SEPARABLE
                                         |
                                         v
        Q6. Is it of the form  dy/dx = (ax + by + c)/(Ax + By + C) ?
            (linear top, linear bottom, constants spoiling it)
              |                          |
             YES                         NO
              |                          |
        *** NON-HOMOGENEOUS ***     go to Q7
        Compare  a/A  with  b/B :
          NOT equal -> lines MEET
             x = X + h , y = Y + k
             -> becomes HOMOGENEOUS
          EQUAL -> lines PARALLEL
             put v = ax + by
             -> becomes SEPARABLE
                                         |
                                         v
        Q7. Can you write it as  dy/dx + P(x) y = Q(x) ?
            (y to the power 1 only; no y^2, no sin y, no e^y)
              |                          |
             YES                         NO
              |                          |
        *** LINEAR ***              go to Q8
        IF = e^(INT P dx)
        y (IF) = INT Q (IF) dx + c
                                         |
                                         v
        Q8. Is it  dy/dx + P y = Q y^n   (a power of y on the right)?
              |                          |
             YES                         NO
              |                          |
        *** BERNOULLI ***           Swap the roles of x and y:
        Divide through by y^n       is it  dx/dy + P(y) x = Q(y) ?
        Put v = y^(1-n)             If yes -> LINEAR IN x.
        -> becomes LINEAR           Same recipe, letters swapped.
```

---

## THE SAME TREE AS A ONE-LINE CHECKLIST

```
  +----+-------------------------------------------+------------------------+
  | No | What you see                              | What you do            |
  +----+-------------------------------------------+------------------------+
  | 1  | x's and y's already come apart            | separate and integrate |
  | 2  | RHS is a function of (ax + by + c)        | put v = ax + by + c    |
  | 3  | every term has the same total degree      | put y = vx             |
  | 4  | (ax+by+c)/(Ax+By+C) , a/A not equal b/B   | shift the origin       |
  | 5  | (ax+by+c)/(Ax+By+C) , a/A = b/B           | put v = ax + by        |
  | 6  | dy/dx + P y = Q                           | IF = e^(INT P dx)      |
  | 7  | dy/dx + P y = Q y^n                       | put v = y^(1-n)        |
  | 8  | messy in y, tidy in x                     | flip it to dx/dy       |
  +----+-------------------------------------------+------------------------+
```

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   What is a differential equation? Order and degree.
              |                                    (2-mark question)
              |
  STEP 2   Formation by eliminating arbitrary constants
              |                                    (2 or 4-mark question)
              |
  STEP 3   VARIABLES SEPARABLE  <-- the mother of all methods.
              |                    EVERY later method ends up here.
              |
     +--------+--------------------+
     |                             |
  STEP 4                        STEP 6
  Reducible to separable        HOMOGENEOUS
  v = ax + by + c               y = vx
     |                             |
     |                          STEP 7
     |                          NON-HOMOGENEOUS
     |                          (both cases)
     |                             |
     +--------+--------------------+
              |
  STEP 5   REVISE INTEGRATION  <-- you cannot finish ANY question
              |                    without INT dx/x = log|x| etc.
              |
  STEP 8   LINEAR   dy/dx + Py = Q ,   IF = e^(INT P dx)
              |
     +--------+--------+
     |                 |
  STEP 9          STEP 10
  Linear in x     BERNOULLI
  dx/dy + Px = Q  v = y^(1-n)
     |                 |
     +--------+--------+
              |
  STEP 11  APPLICATIONS: growth, decay, Newton's law of cooling
```

**Warning:** if your integration is weak, STEP 5 is not optional. Nine out of ten
lost marks in this chapter are lost at the integration stage, not at the
differential-equation stage.

---

## THE FIVE INTEGRALS YOU CANNOT SURVIVE WITHOUT

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   INT x^n dx  =  x^(n+1)/(n+1) + c        (n not equal to -1)   |
  |                                                                 |
  |   INT (1/x) dx  =  log|x| + c                                   |
  |                                                                 |
  |   INT e^x dx  =  e^x + c                                        |
  |                                                                 |
  |   INT (f'(x)/f(x)) dx  =  log|f(x)| + c    <-- used constantly  |
  |                                                                 |
  |   INT (1/(1 + x^2)) dx  =  tan^-1(x) + c                        |
  |                                                                 |
  +-----------------------------------------------------------------+
```

---

## THE ONE FORMULA THAT EARNS THE MOST MARKS

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   LINEAR EQUATION       dy/dx  +  P y  =  Q                       |
  |                                                                   |
  |   Step 1     IF  =  e^(INT P dx)                                  |
  |                                                                   |
  |   Step 2     y (IF)  =  INT  Q (IF) dx  +  c                      |
  |                                                                   |
  |   Say it out loud:                                                |
  |   "y times IF equals the integral of Q times IF."                 |
  |                                                                   |
  +-------------------------------------------------------------------+
```

If you learn nothing else in this chapter, learn that box. It alone is worth
7 marks almost every single year.

---

## THE FIVE SUBSTITUTIONS ON ONE CARD

```
  +--------------------------+------------------------------------------+
  |  SUBSTITUTION            |  WHY / WHEN                              |
  +--------------------------+------------------------------------------+
  |  y = v x                 |  homogeneous equations                   |
  |  dy/dx = v + x dv/dx     |                                          |
  +--------------------------+------------------------------------------+
  |  v = ax + by + c         |  RHS depends only on that bracket        |
  |  dv/dx = a + b dy/dx     |                                          |
  +--------------------------+------------------------------------------+
  |  x = X + h , y = Y + k   |  non-homogeneous, lines intersect        |
  |  dy/dx = dY/dX           |                                          |
  +--------------------------+------------------------------------------+
  |  v = ax + by             |  non-homogeneous, lines parallel         |
  +--------------------------+------------------------------------------+
  |  v = y^(1-n)             |  Bernoulli  dy/dx + Py = Q y^n           |
  |  dv/dx = (1-n) y^(-n) dy/dx                                         |
  +--------------------------+------------------------------------------+
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning — Order, degree, formation (2 hours).**
Pure 2-mark questions. Rule: clear the radicals FIRST, then the order is the
highest derivative and the degree is the power on it. For formation, the number
of arbitrary constants tells you how many times to differentiate. Do 10 of each.
These are the easiest marks in the whole IIB paper.

**Day 1 evening — Variables separable (2 hours).**
Learn to push every y to the left and every x to the right, then integrate.
Do 8 problems. Then do 4 of the type "put v = x + y".

**Day 2 morning — LINEAR equations (3 hours). This is the big one.**
Write the master box above on a card. Then drill these three until automatic:

```
   dy/dx + y tan x = sin 2x
   dy/dx + y/x = x^2
   (1 + x^2) dy/dx + 2xy = 4x^2
```

**Day 2 evening — Homogeneous equations (2 hours).**
Learn one line: **y = vx, so dy/dx = v + x dv/dx.** Substitute, the x's cancel,
it separates, integrate, then put v = y/x back at the very end. Do 5 problems.

**Skip if truly out of time:** non-homogeneous with a shifted origin, and
Bernoulli. Section C lets you leave out 2 of the 7 questions anyway.

That plan alone is worth about 11 of the 75 marks in Maths IIB — and it is the
most certain 11 marks on the paper.

---

## THE ONE-SENTENCE SUMMARY OF EACH METHOD

| Method | The one sentence |
|--------|------------------|
| Separable | Split the x's from the y's and integrate both sides. |
| v = ax + by + c | Rename the messy bracket as v; then it separates. |
| Homogeneous | Put y = vx; the x's cancel and it separates. |
| Non-homog (lines meet) | Slide the origin to the meeting point; it becomes homogeneous. |
| Non-homog (lines parallel) | Rename ax + by as v; it separates. |
| Linear | Multiply by IF = e^(INT P dx), then integrate. |
| Linear in x | Same as linear, with x and y swapped. |
| Bernoulli | Divide by y^n, rename y^(1-n) as v; it becomes linear. |

---

## AND FINALLY — THE THREE MISTAKES THAT COST THE MOST MARKS

```
  +---+---------------------------------------------------------------+
  | 1 | Forgetting  + c .  It is a mark. Every single time.            |
  +---+---------------------------------------------------------------+
  | 2 | Forgetting to put  v = y/x  back at the end of a homogeneous   |
  |   | question. The examiner wants x and y, not v.                   |
  +---+---------------------------------------------------------------+
  | 3 | Reading the degree BEFORE clearing the square roots.           |
  |   | Always clear radicals first, THEN read the degree.             |
  +---+---------------------------------------------------------------+
```
