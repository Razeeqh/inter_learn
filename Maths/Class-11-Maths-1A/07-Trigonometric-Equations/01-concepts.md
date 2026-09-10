# Trigonometric Equations — Concepts

**Maths 1A · Chapter 7**

Read this with a pen in your hand. Every worked example is written out in full,
every step. Do not read the solution — cover it, try it, then check.

Everything here uses Chapter 6. If you cannot write the standard-angle table
and the sum-to-product formulas from memory, stop and go back for one hour.
You will save three.

---

# TOPIC 1 — IDENTITY versus EQUATION (the whole point of the chapter)

This is the single idea that the chapter is built on. Get it in the first
five minutes and everything else follows.

## 1.1 An identity

An **identity** is a statement that is true for **every** value of the angle.

```
  sin^2 A + cos^2 A = 1
```

Try it with A = 30 degrees:  (1/2)^2 + (sqrt3/2)^2 = 1/4 + 3/4 = 1.  True.
Try it with A = 137 degrees: sin137 = 0.6820, cos137 = -0.7314
                             0.4651 + 0.5349 = 1.0000.  True.
Try it with A = -812 degrees. Still true. It is true for **all** A.

There is nothing to "solve". The answer to "for which A is it true?" is
"all of them".

## 1.2 An equation

A **trigonometric equation** is a statement that is true only for **some**
values of the angle.

```
  sin A = 1/2
```

A = 30 degrees?  sin 30 = 1/2.  TRUE.
A = 40 degrees?  sin 40 = 0.6428. FALSE.
A = 150 degrees? sin 150 = 1/2.  TRUE.
A = 90 degrees?  sin 90 = 1.     FALSE.

So this statement picks out a **special set** of angles. Finding that set is
what "solving a trigonometric equation" means.

## 1.3 Put them side by side

```
  +----------------------+----------------------+---------------------------+
  |                      |  IDENTITY            |  EQUATION                 |
  +----------------------+----------------------+---------------------------+
  |  True for            |  EVERY angle         |  ONLY special angles      |
  |  Example             |  1 + tan^2 A = sec^2A|  tan A = 1                |
  |  Your job            |  PROVE it            |  SOLVE it                 |
  |  The answer is       |  a proof, ending     |  a FORMULA containing n   |
  |                      |  LHS = RHS           |  such as A = n pi + pi/4  |
  |  Which chapter       |  Chapter 6           |  Chapter 7 (this one)     |
  +----------------------+----------------------+---------------------------+
```

## 1.4 The everyday analogy

```
  IDENTITY   "Every human being has a mother."
             Nothing to find out. It is just true.

  EQUATION   "This person's mother is named Lakshmi."
             Now there is work to do: WHICH people?
             And the answer will be a LIST, not one person.
```

## 1.5 An equation can also have NO solution

```
  sin theta = 3        has NO solution, because sin never leaves [-1, 1].
  cos theta = -1.4     has NO solution, same reason.
  sec theta = 0.5      has NO solution, because |sec| is always >= 1.
```

> **TRAP:** if your working ends at `sin theta = 5/2`, do **not** panic and
> hunt for an arithmetic slip. Write "since sin theta lies in [-1, 1], this
> value is rejected". That sentence is worth marks.

## WORKED EXAMPLE 1.1

Say whether each is an identity or an equation. If it is an equation, give
one angle that satisfies it and one that does not.

```
  (a)  cos^2 A - sin^2 A = cos 2A
  (b)  cos 2A = 1/2
  (c)  tan A . cot A = 1
  (d)  2 sin A = sqrt3
```

**ANSWER:**
```
  (a) IDENTITY. It is the double-angle formula. True for every A.

  (b) EQUATION.  A = 30 deg works (cos60 = 1/2).
                 A = 45 deg fails (cos90 = 0).

  (c) IDENTITY (with a small print condition: A must not be a multiple of
      90 degrees, where tan or cot is undefined). True everywhere else.

  (d) EQUATION.  sin A = sqrt3 / 2.
                 A = 60 deg works.  A = 30 deg fails.
```

---

# TOPIC 2 — WHY THERE ARE INFINITELY MANY SOLUTIONS

## 2.1 The functions repeat

```
  sin(theta + 2 pi) = sin theta          period 2 pi   (360 degrees)
  cos(theta + 2 pi) = cos theta          period 2 pi   (360 degrees)
  tan(theta +   pi) = tan theta          period   pi   (180 degrees)
```

So if a particular angle solves the equation, then that angle **plus a whole
number of turns** also solves it. Turns are free.

```
  sin 30  = 1/2
  sin 390 = sin(30 + 360)  = 1/2      <- solution
  sin 750 = sin(30 + 720)  = 1/2      <- solution
  sin(-330) = sin(30 - 360) = 1/2     <- solution

  ... forever, in both directions.
```

## 2.2 The unit-circle picture

```
              y
              |
     P        |        Q                A point on the unit circle at angle th
      *-------+-------*   y = 1/2       has coordinates ( cos th , sin th ).
       \      |      /
        \     |     /                   "sin th = 1/2" asks:
         \    |    /                    WHICH points have HEIGHT 1/2 ?
          \   |   /
           \  |  /                      The horizontal line y = 1/2 cuts the
            \ | /                       circle in TWO points, P and Q.
             \|/
    ----------O----------------- x      Q sits at   th = 30 deg
              |                         P sits at   th = 150 deg
              |
              |                         And you may spin round the circle any
              |                         number of times before landing on
                                        either one. Infinitely many answers.
```

For **cos theta = 1/2** the picture is a **vertical** line x = 1/2, which also
cuts the circle twice — at `+60 deg` and `-60 deg`.

```
              y
              |
              |    * P  (60 deg)
              |   /
              |  /
     ---------O-/------------- x        cos th = 1/2  ->  th = +- 60 deg
              | \                       plus any number of full turns.
              |  \
              |   * Q  (-60 deg)
              |
            x = 1/2
```

**That difference in the picture is exactly why sin and cos have different
general-solution formulas.**

- sine: the two hits are `alpha` and `pi - alpha`  -> `n pi + (-1)^n alpha`
- cosine: the two hits are `alpha` and `- alpha`   -> `2 n pi +- alpha`

## 2.3 The graph picture

```
   sin theta
      1 |         ___                     ___
        |       /     \                 /     \
    1/2 |------/-------\---------------/-------\---------  y = 1/2
        |     /|        |\            /         \
      0 +----/-+--------+-\----------/-----------\-------> theta
        |   /  |        |  \        /             \
        | pi/6 |     5pi/6  \      /   2pi+pi/6    \
     -1 |                     \__/                  \__

        Every crossing of the line y = 1/2 is one solution.
        There are infinitely many crossings.  So: infinitely many solutions.
```

---

# TOPIC 3 — SOLUTION, PRINCIPAL SOLUTION, GENERAL SOLUTION

Three words that the exam uses precisely. Learn the difference.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  SOLUTION            any single angle that satisfies the         |
  |                      equation.  For sin th = 1/2, the angles     |
  |                      30, 150, 390, 510, -210 ... are all         |
  |                      solutions.                                  |
  |                                                                  |
  |  PRINCIPAL SOLUTION  THE ONE solution that lies inside the       |
  |                      PRINCIPAL RANGE of that ratio.             |
  |                      It is unique.                               |
  |                                                                  |
  |  GENERAL SOLUTION    the single formula, containing an integer   |
  |                      n, that produces EVERY solution and no      |
  |                      others.                                     |
  |                                                                  |
  +------------------------------------------------------------------+
```

## 3.1 The three principal ranges — memorise these

```
  +---------------------+--------------------------+------------------------+
  |  Equation           |  PRINCIPAL RANGE         |  in degrees            |
  +---------------------+--------------------------+------------------------+
  |  sin theta = k      |  [ -pi/2 , pi/2 ]        |  [ -90 , 90 ]          |
  |  ( |k| <= 1 )       |  closed both ends        |                        |
  +---------------------+--------------------------+------------------------+
  |  cos theta = k      |  [ 0 , pi ]              |  [ 0 , 180 ]           |
  |  ( |k| <= 1 )       |  closed both ends        |                        |
  +---------------------+--------------------------+------------------------+
  |  tan theta = k      |  ( -pi/2 , pi/2 )        |  ( -90 , 90 )          |
  |  ( any real k )     |  OPEN both ends          |                        |
  +---------------------+--------------------------+------------------------+
```

Why open for tan? Because `tan(pi/2)` does not exist, so `pi/2` cannot be
allowed in.

Why is cos different from sin? Because on `[-pi/2, pi/2]` the cosine takes the
value `1/2` twice (at `+pi/3` and `-pi/3`), so that range would not give a
*unique* answer. On `[0, pi]` it does. Each range is chosen to be an interval
on which the function hits every possible value **exactly once**.

## 3.2 Reading a principal solution off the circle

```
   sin th = 1/2                          cos th = -1/2
   allowed zone:  -90 to +90             allowed zone:  0 to 180

          y                                     y
          |                                     |
     -----|-----*  30 deg  <- IN            *   |          120 deg <- IN
     150  |    /   (keep)                    \  |
      *   |   /                               \ |
       \  |  /                          -------\+----------- x
   -----\-+-/------- x                          |
         \|/                                    |     -120 deg is NOT in
          O                                     |     [0, 180], reject it.
   150 deg is outside [-90, 90],
   so it is a solution but NOT
   the principal solution.

   PRINCIPAL SOLUTION = pi/6            PRINCIPAL SOLUTION = 2 pi / 3
```

## WORKED EXAMPLE 3.1

Find the principal solution of each.

```
  (a)  sin theta = 1 / sqrt2
  (b)  sin theta = - 1/2
  (c)  cos theta = - 1 / sqrt2
  (d)  tan theta = - sqrt3
  (e)  cos theta = 1
```

**ANSWER:**
```
  (a)  sin(pi/4) = 1/sqrt2 , and pi/4 lies in [-pi/2, pi/2].
       PRINCIPAL SOLUTION = pi / 4                        (45 deg)

  (b)  We need a NEGATIVE angle now, because sin is negative and the
       allowed zone is [-pi/2, pi/2].
       sin(-pi/6) = -1/2 .
       PRINCIPAL SOLUTION = - pi / 6                      (-30 deg)
       (Do NOT answer 7pi/6. It is a solution, but it is outside the range.)

  (c)  Allowed zone [0, pi]. Cos is negative in the second quadrant.
       cos(3pi/4) = -1/sqrt2 .
       PRINCIPAL SOLUTION = 3 pi / 4                      (135 deg)

  (d)  Allowed zone (-pi/2, pi/2). tan(-pi/3) = -sqrt3 .
       PRINCIPAL SOLUTION = - pi / 3                      (-60 deg)

  (e)  cos 0 = 1 and 0 lies in [0, pi].
       PRINCIPAL SOLUTION = 0
```

> **TRAP:** for a NEGATIVE value, sine and tangent go **below zero**
> (answer is a negative angle), while cosine goes into the **second
> quadrant** (answer is between 90 and 180 degrees). Mixing these two
> habits up is the most common 2-mark loss in this chapter.

## 3.3 Some books say "principal solutions in [0, 2 pi)"

Certain textbooks (and NCERT) use the phrase "principal solutions" to mean
**all** the solutions lying in `0 <= theta < 2 pi`. If a question says
"find the principal solutions" (plural, with an "s"), list the ones in
`[0, 2 pi)`. If it says "the principal solution" (singular) or "principal
value", use the ranges in the table above. Read the wording.

```
  sin theta = 1/2

     "the principal solution"     ->   pi/6                    (one value)
     "the principal solutionS"    ->   pi/6  and  5 pi/6       (two values)
     "the general solution"       ->   n pi + (-1)^n pi/6      (a formula)
```

---

# TOPIC 4 — THE THREE ZERO EQUATIONS, WITH DERIVATIONS

These are the base cases. Everything else reduces to them.

## 4.1 sin theta = 0

```
  +----------------------------------------------------------------+
  |                                                                |
  |     sin theta = 0     <=>     theta = n pi ,   n is an INTEGER |
  |                                                                |
  |     Condition: none. This is true for every integer n.         |
  +----------------------------------------------------------------+
```

**Derivation (from the circle):**
```
  sin theta is the HEIGHT (y-coordinate) of the point on the unit circle.

              y
              |
              |
   -----*-----O-----*-------- x      Height = 0 only ON the x-axis.
      180 deg     0 deg
                                     That happens at
                                        theta = 0, pi, 2pi, 3pi, ...
                                     and also
                                        theta = -pi, -2pi, ...

                                     Every one of these is a whole-number
                                     multiple of pi.

                                     So   theta = n pi .
```

Unfold it:  `n = 0 -> 0`, `n = 1 -> pi`, `n = 2 -> 2pi`, `n = -1 -> -pi`.
`sin` of every one of those is 0. Nothing is missed, nothing extra is caught.

## 4.2 cos theta = 0

```
  +----------------------------------------------------------------+
  |                                                                |
  |   cos theta = 0   <=>   theta = (2n + 1) pi / 2 ,  n integer   |
  |                                                                |
  |   i.e. theta is an ODD multiple of pi/2  (of 90 degrees).      |
  +----------------------------------------------------------------+
```

**Derivation:**
```
  cos theta is the WIDTH (x-coordinate).

              y
              |
              * 90 deg                Width = 0 only ON the y-axis.
              |
   -----------O----------- x          That happens at
              |                          theta = pi/2 , 3pi/2 , 5pi/2 , ...
              |                       and at
              * 270 deg                  theta = -pi/2 , -3pi/2 , ...

                                      These are  pi/2, 3pi/2, 5pi/2, ...
                                      = ODD multiples of pi/2
                                      = (2n + 1) pi / 2 .
```

Check: `n = 0 -> pi/2`, `n = 1 -> 3pi/2`, `n = 2 -> 5pi/2`, `n = -1 -> -pi/2`.
All correct.

> **TRAP:** the answer is **not** `n pi / 2`. That formula would also produce
> `0`, `pi`, `2 pi` — and `cos 0 = 1`, not 0. You must have the `(2n + 1)`.

## 4.3 tan theta = 0

```
  +----------------------------------------------------------------+
  |                                                                |
  |     tan theta = 0     <=>     theta = n pi ,   n is an integer |
  |                                                                |
  |     Condition: cos theta must not be 0 - but that is automatic,|
  |     because at theta = n pi, cos theta = +-1, never 0.         |
  +----------------------------------------------------------------+
```

**Derivation:**
```
              sin theta
  tan theta = ----------- = 0
              cos theta

  A fraction is zero exactly when its NUMERATOR is zero
  (and the denominator is not).

  So  sin theta = 0    ->    theta = n pi .

  At theta = n pi , cos theta = +1 or -1 , so the denominator is safe.
```

Notice: `sin theta = 0` and `tan theta = 0` have the **same** answer.
That is not a coincidence — tan is sin divided by something that is never
zero at those places.

## 4.4 The companions (same idea, worth knowing)

```
  +----------------------------------------------------------------+
  |   cot theta = 0    <=>   theta = (2n + 1) pi / 2               |
  |   ( cot = cos/sin , zero when cos = 0 )                        |
  |                                                                |
  |   sin theta = 1    <=>   theta = 2 n pi + pi/2                 |
  |   sin theta = -1   <=>   theta = 2 n pi - pi/2                 |
  |   cos theta = 1    <=>   theta = 2 n pi                        |
  |   cos theta = -1   <=>   theta = (2n + 1) pi                   |
  |                                                                |
  |   sec theta and cosec theta are NEVER zero.                    |
  +----------------------------------------------------------------+
```

---

# TOPIC 5 — sin theta = sin alpha  (and the famous (-1)^n)

```
  +----------------------------------------------------------------+
  |                                                                |
  |   sin theta = sin alpha                                        |
  |                                                                |
  |        =>    theta = n pi + (-1)^n alpha                       |
  |                                                                |
  |   where n is any INTEGER and alpha is in [-pi/2, pi/2]         |
  |   (take alpha to be the PRINCIPAL solution)                    |
  +----------------------------------------------------------------+
```

## 5.1 The derivation — you may be asked for this

```
  STEP 1   Bring everything to one side.

              sin theta - sin alpha = 0

  STEP 2   Use the Chapter 6 transformation
              sin C - sin D = 2 cos((C+D)/2) sin((C-D)/2)

                    theta + alpha         theta - alpha
              2 cos -------------  .  sin -------------  =  0
                          2                     2

  STEP 3   A product is zero when one of the factors is zero.
           Two cases.

  CASE 1        theta + alpha
            cos ------------- = 0
                      2

            Using  cos x = 0  =>  x = (2m + 1) pi / 2 :

                theta + alpha     (2m + 1) pi
                ------------- =  ------------
                      2               2

                theta = (2m + 1) pi - alpha            ... family A

  CASE 2        theta - alpha
            sin ------------- = 0
                      2

            Using  sin x = 0  =>  x = m pi :

                theta - alpha
                ------------- = m pi
                      2

                theta = 2 m pi + alpha                 ... family B

  STEP 4   Family B is "an EVEN multiple of pi, PLUS alpha".
           Family A is "an ODD  multiple of pi, MINUS alpha".

           Both are covered by the single formula

                theta = n pi + (-1)^n alpha

           because (-1)^n = +1 when n is even  -> gives family B
                   (-1)^n = -1 when n is odd   -> gives family A.
```

## 5.2 Unfold it and see it work

```
  Take  sin theta = sin(pi/6) = 1/2 ,  so alpha = pi/6 = 30 deg.

  +-----+------------------------+-------------+-------------------+
  |  n  |  n pi + (-1)^n (pi/6)  |  in degrees |  check sin theta  |
  +-----+------------------------+-------------+-------------------+
  | -2  |  -2pi + pi/6           |   -330      |  sin(-330) = 1/2  |
  | -1  |  -pi - pi/6            |   -210      |  sin(-210) = 1/2  |
  |  0  |   pi/6                 |     30      |  sin( 30)  = 1/2  |
  |  1  |   pi - pi/6            |    150      |  sin(150)  = 1/2  |
  |  2  |  2pi + pi/6            |    390      |  sin(390)  = 1/2  |
  |  3  |  3pi - pi/6            |    510      |  sin(510)  = 1/2  |
  +-----+------------------------+-------------+-------------------+

  Every single one checks out. The formula catches them all, in order,
  alternating between "the angle" and "its supplement".
```

## 5.3 What the (-1)^n is really doing

```
  sin 30 = sin 150 = 1/2 .

  30 and 150 are SUPPLEMENTARY: 30 + 150 = 180.

  So the solution set is really TWO interleaved ladders:

     ... -330 ,  30 ,  390 ,  750 , ...      (step 360, starts at alpha)
     ... -210 , 150 ,  510 ,  870 , ...      (step 360, starts at pi - alpha)

  Written together, sorted, they are

     ... , -330 , -210 , 30 , 150 , 390 , 510 , ...

  and the gaps alternate 120, 240, 120, 240 ... which is exactly what
  "n pi with an alternating +- alpha" produces.
```

> **TRAP:** never write `sin theta = sin alpha => theta = 2 n pi +- alpha`.
> That is the **cosine** formula. It would give you `-30 deg`, and
> `sin(-30) = -1/2`, not `+1/2`. Wrong family entirely.

## WORKED EXAMPLE 5.1

Solve `sin theta = sqrt3 / 2`.

**ANSWER:**
```
  STEP 1   Write sqrt3/2 as the sine of a known angle:
              sqrt3/2 = sin(pi/3)          so alpha = pi/3 .
           (pi/3 is inside [-pi/2, pi/2], so it is the principal value. Good.)

  STEP 2   sin theta = sin(pi/3)

  STEP 3   theta = n pi + (-1)^n (pi/3) ,   n is an integer.

  CHECK    n = 0 :  theta = pi/3 = 60 deg .  sin 60 = sqrt3/2 .   CORRECT
           n = 1 :  theta = pi - pi/3 = 2pi/3 = 120 deg .
                    sin 120 = sqrt3/2 .                           CORRECT
```

## WORKED EXAMPLE 5.2

Solve `sin theta = - 1 / sqrt2`.

**ANSWER:**
```
  STEP 1   The value is NEGATIVE, so alpha must be a NEGATIVE angle
           (the principal range for sine is [-pi/2, pi/2]).

              -1/sqrt2 = sin( - pi/4 )        so alpha = - pi/4 .

  STEP 2   sin theta = sin( - pi/4 )

  STEP 3   theta = n pi + (-1)^n ( - pi/4 )

                 = n pi - (-1)^n  pi/4 ,     n is an integer.

  CHECK    n = 0 :  theta = -pi/4 = -45 deg .   sin(-45) = -1/sqrt2 .  OK
           n = 1 :  theta = pi + pi/4 = 5pi/4 = 225 deg .
                    sin 225 = -1/sqrt2 .                              OK
           n = 2 :  theta = 2pi - pi/4 = 315 deg .
                    sin 315 = -1/sqrt2 .                              OK
```

> **TRAP:** do **not** write `alpha = pi/4` and then stick a minus sign
> somewhere at the end by guesswork. Put the minus **inside** alpha and let
> the formula do the work.

---

# TOPIC 6 — cos theta = cos alpha

```
  +----------------------------------------------------------------+
  |                                                                |
  |   cos theta = cos alpha                                        |
  |                                                                |
  |        =>    theta = 2 n pi  +-  alpha                         |
  |                                                                |
  |   where n is any INTEGER and alpha is in [0, pi]               |
  +----------------------------------------------------------------+
```

## 6.1 The derivation

```
  STEP 1   cos theta - cos alpha = 0

  STEP 2   Transformation:
              cos C - cos D = - 2 sin((C+D)/2) sin((C-D)/2)

                       theta + alpha         theta - alpha
              - 2  sin -------------  .  sin -------------  =  0
                             2                     2

  STEP 3   Product = 0, so two cases (using sin x = 0 => x = m pi).

  CASE 1        theta + alpha
            sin ------------- = 0    ->   theta + alpha = 2 m pi
                      2
                                     ->   theta = 2 m pi - alpha

  CASE 2        theta - alpha
            sin ------------- = 0    ->   theta - alpha = 2 m pi
                      2
                                     ->   theta = 2 m pi + alpha

  STEP 4   Both together:      theta = 2 n pi +- alpha .
```

Notice how clean this is compared with the sine case: **both** cases came out
with `2 m pi`, so there is no alternating sign to hide — just a `+-`.

## 6.2 Unfold it

```
  Take  cos theta = 1/2 = cos(pi/3) ,  alpha = pi/3 = 60 deg.

  +-----+--------------------+-------------+--------------------+
  |  n  |  2 n pi +- pi/3    |  in degrees |  check cos theta   |
  +-----+--------------------+-------------+--------------------+
  | -1  |  -2pi + pi/3       |   -300      |  cos(-300) = 1/2   |
  | -1  |  -2pi - pi/3       |   -420      |  cos(-420) = 1/2   |
  |  0  |   + pi/3           |     60      |  cos( 60)  = 1/2   |
  |  0  |   - pi/3           |    -60      |  cos(-60)  = 1/2   |
  |  1  |  2pi + pi/3        |    420      |  cos(420)  = 1/2   |
  |  1  |  2pi - pi/3        |    300      |  cos(300)  = 1/2   |
  +-----+--------------------+-------------+--------------------+
```

## WORKED EXAMPLE 6.1

Solve `cos theta = - 1/2`.

**ANSWER:**
```
  STEP 1   Value is negative, and the principal range for cos is [0, pi],
           so alpha lands in the SECOND quadrant.

              cos(2pi/3) = cos(120 deg) = -1/2        so alpha = 2 pi / 3 .

  STEP 2   cos theta = cos(2 pi / 3)

  STEP 3   theta = 2 n pi  +-  2 pi / 3 ,     n is an integer.

  CHECK    n = 0, plus  :  theta = 120 deg , cos 120 = -1/2 .   OK
           n = 0, minus :  theta = -120 deg , cos(-120) = -1/2 . OK
           n = 1, minus :  theta = 360 - 120 = 240 deg ,
                           cos 240 = -1/2 .                      OK
```

## WORKED EXAMPLE 6.2

Solve `cos 3 theta = 0`.

**ANSWER:**
```
  Do NOT divide by 3 first. Solve for the WHOLE ANGLE, then divide.

  STEP 1   Let x = 3 theta. Then cos x = 0 , so
              x = (2n + 1) pi / 2 .

  STEP 2   3 theta = (2n + 1) pi / 2

  STEP 3   theta = (2n + 1) pi / 6 ,      n is an integer.

  CHECK    n = 0 :  theta = pi/6 = 30 deg . cos(3 x 30) = cos 90 = 0 .  OK
           n = 1 :  theta = 3pi/6 = pi/2 = 90 deg . cos 270 = 0 .       OK
           n = 2 :  theta = 5pi/6 = 150 deg . cos 450 = cos 90 = 0 .    OK
```

> **TRAP:** the commonest error in the entire chapter is dividing the angle
> by the coefficient at the START. `cos 3 theta = 0` does **not** become
> `cos theta = 0`. Solve for `3 theta` first, get the whole `n`-formula,
> and only **then** divide the whole formula by 3.

---

# TOPIC 7 — tan theta = tan alpha

```
  +----------------------------------------------------------------+
  |                                                                |
  |   tan theta = tan alpha                                        |
  |                                                                |
  |        =>    theta = n pi  +  alpha                            |
  |                                                                |
  |   where n is any INTEGER, alpha is in (-pi/2, pi/2), and       |
  |   CONDITION:  cos theta != 0 and cos alpha != 0                |
  |   (both tangents must actually exist)                          |
  +----------------------------------------------------------------+
```

## 7.1 The derivation

```
  STEP 1   tan theta = tan alpha

              sin theta       sin alpha
              ---------  =   ----------
              cos theta       cos alpha

  STEP 2   Cross-multiply (allowed, since neither cosine is zero):

              sin theta cos alpha  -  cos theta sin alpha  =  0

  STEP 3   The left side IS the compound-angle formula for sin(A - B):

              sin( theta - alpha ) = 0

  STEP 4   Therefore     theta - alpha = n pi

                         theta = n pi + alpha .
```

No `+-`, no `(-1)^n`. Tangent is the easy one, because its period is `pi`,
not `2 pi` — a single ladder of step `pi`, not two interleaved ladders.

## WORKED EXAMPLE 7.1

Solve `tan theta = - 1`.

**ANSWER:**
```
  STEP 1   Principal range for tan is (-pi/2, pi/2), and the value is
           negative, so alpha is negative:
              tan( - pi/4 ) = -1     so alpha = - pi/4 .

  STEP 2   theta = n pi - pi / 4 ,     n is an integer.

  CHECK    n = 0 :  theta = -45 deg .  tan(-45) = -1 .   OK
           n = 1 :  theta = 180 - 45 = 135 deg . tan 135 = -1 .  OK
           n = 2 :  theta = 360 - 45 = 315 deg . tan 315 = -1 .  OK
```

## WORKED EXAMPLE 7.2

Solve `tan 2 theta = sqrt3`.

**ANSWER:**
```
  STEP 1   sqrt3 = tan(pi/3) .

  STEP 2   Solve for the WHOLE angle first:
              2 theta = n pi + pi / 3

  STEP 3   theta = n pi / 2  +  pi / 6 ,      n is an integer.

  CHECK    n = 0 :  theta = 30 deg , tan 60 = sqrt3 .            OK
           n = 1 :  theta = 90 + 30 = 120 deg , tan 240 = sqrt3 . OK
                    (240 = 180 + 60, third quadrant, tan positive)
```

---

# TOPIC 8 — THE SQUARED FORMS (all three give the same answer)

```
  +----------------------------------------------------------------+
  |                                                                |
  |   sin^2 theta = sin^2 alpha                                    |
  |   cos^2 theta = cos^2 alpha       ALL THREE give               |
  |   tan^2 theta = tan^2 alpha                                    |
  |                                                                |
  |            theta  =  n pi  +-  alpha ,    n an integer         |
  |                                                                |
  |   (for the tan version, cos theta and cos alpha must not be 0) |
  +----------------------------------------------------------------+
```

## 8.1 Why they collapse into one formula — the derivation

```
  Start with   sin^2 theta = sin^2 alpha .

  Use the Chapter 6 identity   sin^2 x = (1 - cos 2x) / 2 :

        1 - cos 2 theta       1 - cos 2 alpha
        ---------------  =    ---------------
               2                     2

              cos 2 theta  =  cos 2 alpha

  Now apply the cosine rule from Topic 6:

              2 theta = 2 n pi  +-  2 alpha

              theta   = n pi  +-  alpha .            DONE.


  For  cos^2 theta = cos^2 alpha , use  cos^2 x = (1 + cos 2x)/2 .
  It gives  cos 2 theta = cos 2 alpha  again -> the SAME answer.

  For  tan^2 theta = tan^2 alpha , use

                          1 - tan^2 x
              cos 2x  =  -------------
                          1 + tan^2 x

  Equal tan-squares force equal cos 2x, so again cos 2 theta = cos 2 alpha
  -> the SAME answer.
```

**Memory line:** *a square forgets the sign, so the answer keeps both signs:
`n pi +- alpha`.*

## 8.2 Where these turn up

Any time you see a **squared** trigonometric term equal to a **number**:

```
  sin^2 theta = 1/4       ->   sin^2 theta = sin^2(pi/6)   ->  th = n pi +- pi/6
  cos^2 theta = 3/4       ->   cos^2 theta = cos^2(pi/6)   ->  th = n pi +- pi/6
  tan^2 theta = 3         ->   tan^2 theta = tan^2(pi/3)   ->  th = n pi +- pi/3
  4 cos^2 theta = 1       ->   cos^2 theta = cos^2(pi/3)   ->  th = n pi +- pi/3
  sec^2 theta = 4         ->   cos^2 theta = 1/4           ->  th = n pi +- pi/3
```

## WORKED EXAMPLE 8.1

Solve `2 sin^2 theta = 1`.

**ANSWER:**
```
  STEP 1   sin^2 theta = 1/2

  STEP 2   1/2 = (1/sqrt2)^2 = ( sin(pi/4) )^2      so alpha = pi/4 .

  STEP 3   sin^2 theta = sin^2 (pi/4)

  STEP 4   theta = n pi  +-  pi/4 ,      n is an integer.

  CHECK    n = 0, + :  theta = 45 deg .  2 sin^2 45 = 2(1/2) = 1 .   OK
           n = 0, - :  theta = -45 deg . 2 sin^2(-45) = 2(1/2) = 1 . OK
           n = 1, - :  theta = 135 deg . 2 sin^2 135 = 1 .           OK
```

## WORKED EXAMPLE 8.2

Solve `tan^2 theta = 3`.

**ANSWER:**
```
  STEP 1   tan^2 theta = 3 = ( sqrt3 )^2 = ( tan(pi/3) )^2

  STEP 2   theta = n pi  +-  pi/3 ,      n is an integer.

  CHECK    theta = 60 deg :  tan^2 60 = 3 .    OK
           theta = -60 deg : tan^2(-60) = (-sqrt3)^2 = 3 .  OK
           theta = 120 deg : tan^2 120 = (-sqrt3)^2 = 3 .   OK
```

> **TRAP:** do **not** take the square root first and then run two separate
> cases with `tan theta = sqrt3` and `tan theta = -sqrt3`. It is not wrong,
> but it doubles your work and the two answers `n pi + pi/3` and
> `n pi - pi/3` have to be merged back into `n pi +- pi/3` anyway. Use the
> squared formula directly.

---

# TOPIC 9 — TURNING A NUMBER INTO sin alpha / cos alpha / tan alpha

You will never be handed `sin theta = sin(pi/6)`. You will be handed
`sin theta = 1/2` and must supply the `pi/6` yourself. Here is the table.

```
  +---------+---------+---------+---------+---------+---------+--------+
  |  angle  |    0    |  pi/6   |  pi/4   |  pi/3   |  pi/2   |   pi   |
  |  (deg)  |    0    |   30    |   45    |   60    |   90    |  180   |
  +---------+---------+---------+---------+---------+---------+--------+
  |   sin   |    0    |   1/2   | 1/sqrt2 | sqrt3/2 |    1    |   0    |
  |   cos   |    1    | sqrt3/2 | 1/sqrt2 |   1/2   |    0    |  -1    |
  |   tan   |    0    | 1/sqrt3 |    1    |  sqrt3  |  undef  |   0    |
  +---------+---------+---------+---------+---------+---------+--------+
```

## 9.1 Handling a NEGATIVE value

```
  +-------------------+----------------------------+---------------------+
  |  Equation         |  Where alpha must live     |  Example            |
  +-------------------+----------------------------+---------------------+
  |  sin theta = -k   |  alpha is NEGATIVE         |  sin th = -1/2      |
  |  (k > 0)          |  alpha in [-pi/2, 0)       |  alpha = -pi/6      |
  +-------------------+----------------------------+---------------------+
  |  cos theta = -k   |  alpha is in QUADRANT II   |  cos th = -1/2      |
  |  (k > 0)          |  alpha in (pi/2, pi]       |  alpha = 2pi/3      |
  +-------------------+----------------------------+---------------------+
  |  tan theta = -k   |  alpha is NEGATIVE         |  tan th = -sqrt3    |
  |  (k > 0)          |  alpha in (-pi/2, 0)       |  alpha = -pi/3      |
  +-------------------+----------------------------+---------------------+

  The rule in one line:
      sin and tan  ->  use  - alpha        (because sin(-x) = -sin x)
      cos          ->  use  pi - alpha     (because cos(pi - x) = -cos x)
```

## 9.2 Converting the other ratios first

```
  sec theta = 2          ->   cos theta = 1/2
  cosec theta = -2       ->   sin theta = -1/2
  cot theta = sqrt3      ->   tan theta = 1/sqrt3
  cot theta = 0          ->   cos theta = 0    (NOT tan theta = infinity)
```

Always flip to sin / cos / tan **before** you reach for a general solution.
There are only three general-solution formulas and they only speak sin, cos
and tan.

## WORKED EXAMPLE 9.1

Solve `cosec theta = 2`.

**ANSWER:**
```
  STEP 1   cosec theta = 2   ->   sin theta = 1/2

  STEP 2   1/2 = sin(pi/6) ,  alpha = pi/6

  STEP 3   theta = n pi + (-1)^n (pi/6) ,   n is an integer.

  CHECK    theta = 30 deg :  cosec 30 = 1/(1/2) = 2 .  OK
           theta = 150 deg : cosec 150 = 2 .           OK
```

## WORKED EXAMPLE 9.2

Solve `cot theta = - 1 / sqrt3`.

**ANSWER:**
```
  STEP 1   cot theta = -1/sqrt3   ->   tan theta = - sqrt3

  STEP 2   - sqrt3 = tan( - pi/3 ) ,   alpha = - pi/3

  STEP 3   theta = n pi - pi/3 ,   n is an integer.

  CHECK    n = 1 :  theta = 180 - 60 = 120 deg .
                    cot 120 = cos120/sin120 = (-1/2)/(sqrt3/2) = -1/sqrt3 . OK
```

---

# TOPIC 10 — METHOD 1: REDUCE EVERYTHING TO ONE RATIO

**Trigger:** one angle throughout, but a mixture of sin and cos (usually with
a square somewhere).

**Tool:** `sin^2 A + cos^2 A = 1`, and its friends
`1 + tan^2 A = sec^2 A`, `1 + cot^2 A = cosec^2 A`.

**Rule of thumb:** whichever ratio appears to the **first** power, keep that
one; convert the **squared** one.

## WORKED EXAMPLE 10.1  (a classic AP question)

Solve `2 cos^2 theta + sqrt3 sin theta + 1 = 0`.

**ANSWER:**
```
  STEP 1   sin appears to the FIRST power, cos is SQUARED.
           So convert cos^2 into sin.

              cos^2 theta = 1 - sin^2 theta

           2( 1 - sin^2 theta ) + sqrt3 sin theta + 1 = 0

  STEP 2   Expand and tidy.

           2 - 2 sin^2 theta + sqrt3 sin theta + 1 = 0
              - 2 sin^2 theta + sqrt3 sin theta + 3 = 0

           Multiply by -1 so the leading term is positive:

                2 sin^2 theta - sqrt3 sin theta - 3 = 0

  STEP 3   Put s = sin theta. Quadratic:  2 s^2 - sqrt3 s - 3 = 0 .

              Discriminant  =  (sqrt3)^2 - 4(2)(-3)  =  3 + 24  =  27
              sqrt(27) = 3 sqrt3

                    sqrt3 +- 3 sqrt3
              s  =  ----------------
                          4

              s = 4 sqrt3 / 4 = sqrt3          or    s = -2 sqrt3 / 4 = -sqrt3/2

  STEP 4   REJECT s = sqrt3 = 1.732 , because sin theta can never exceed 1.

           So    sin theta = - sqrt3 / 2 .

  STEP 5   -sqrt3/2 = sin( - pi/3 ) ,  alpha = - pi/3 .

              theta = n pi + (-1)^n ( - pi/3 )

              theta = n pi - (-1)^n  pi/3 ,     n is an integer.

  CHECK    n = 0 :  theta = -pi/3 = -60 deg .
              2 cos^2(-60) + sqrt3 sin(-60) + 1
            = 2 (1/2)^2 + sqrt3 (-sqrt3/2) + 1
            = 2(1/4) - 3/2 + 1
            = 0.5 - 1.5 + 1  =  0                              CORRECT

           n = 1 :  theta = pi + pi/3 = 240 deg .
              cos240 = -1/2 , sin240 = -sqrt3/2
            = 2(1/4) + sqrt3(-sqrt3/2) + 1 = 0.5 - 1.5 + 1 = 0  CORRECT
```

## WORKED EXAMPLE 10.2

Solve `tan theta + 3 cot theta = 5 sec theta`.

**ANSWER:**
```
  STEP 1   Write everything in sin and cos.

              sin th       cos th          5
              ------  + 3 -------   =   -------
              cos th       sin th        cos th

  STEP 2   Multiply through by sin th . cos th  (allowed provided
           sin th != 0 and cos th != 0 - note that for later).

              sin^2 th  +  3 cos^2 th  =  5 sin th

  STEP 3   sin appears to the first power on the right, so kill cos^2.

              sin^2 th + 3( 1 - sin^2 th ) = 5 sin th
              sin^2 th + 3 - 3 sin^2 th    = 5 sin th
                   - 2 sin^2 th - 5 sin th + 3 = 0
                     2 sin^2 th + 5 sin th - 3 = 0

  STEP 4   Factorise:   2s^2 + 5s - 3 = (2s - 1)(s + 3)

              (2 sin th - 1)( sin th + 3 ) = 0

              sin th = 1/2      or      sin th = -3   (REJECT, |sin| <= 1)

  STEP 5   sin theta = 1/2 = sin(pi/6)

              theta = n pi + (-1)^n  pi/6 ,   n is an integer.

           These have sin th = 1/2 != 0 and cos th = +- sqrt3/2 != 0,
           so the multiplication in STEP 2 was safe. Nothing is lost.

  CHECK    theta = 30 deg :
              tan30 + 3 cot30 = 1/sqrt3 + 3 sqrt3 = 0.5774 + 5.1962 = 5.7735
              5 sec30 = 5 / (sqrt3/2) = 10/sqrt3 = 5.7735               CORRECT
```

## WORKED EXAMPLE 10.3  (divide by cos^2 when EVERY term is degree 2)

Solve `1 + sin^2 theta = 3 sin theta cos theta`.

**ANSWER:**
```
  STEP 1   Notice that every term is "degree 2" in sin/cos, once you write
           the 1 as sin^2 + cos^2 :

              sin^2 th + cos^2 th + sin^2 th = 3 sin th cos th

           When that happens, DIVIDE BY cos^2 theta to get a tan equation.
           (cos th = 0 is not a solution: putting cos th = 0 gives
            1 + 1 = 0, false. So dividing is safe.)

  STEP 2   Divide the ORIGINAL equation by cos^2 theta :

              sec^2 th + tan^2 th = 3 tan th

  STEP 3   Replace sec^2 by 1 + tan^2 :

              1 + tan^2 th + tan^2 th = 3 tan th
              2 tan^2 th - 3 tan th + 1 = 0

  STEP 4   Factorise:  (2 tan th - 1)( tan th - 1 ) = 0

              tan theta = 1/2        or        tan theta = 1

  STEP 5   tan theta = 1 = tan(pi/4)   ->  theta = n pi + pi/4

           tan theta = 1/2  is not a standard angle, so we name it:
              let alpha = Arctan(1/2)   (about 26 deg 34')
              ->  theta = n pi + alpha

           GENERAL SOLUTION:
              theta = n pi + pi/4       or      theta = n pi + Arctan(1/2)

  CHECK    theta = 45 deg :  LHS = 1 + 1/2 = 1.5
                             RHS = 3 (1/sqrt2)(1/sqrt2) = 3/2 = 1.5   CORRECT

           tan th = 1/2 means sin th = 1/sqrt5 , cos th = 2/sqrt5 .
                             LHS = 1 + 1/5 = 1.2
                             RHS = 3 (1/sqrt5)(2/sqrt5) = 6/5 = 1.2   CORRECT
```

---

# TOPIC 11 — METHOD 2: FACTORISE (product = 0)

**The golden rule of this whole chapter:**

```
  +----------------------------------------------------------------+
  |                                                                |
  |   NEVER CANCEL A TRIGONOMETRIC FACTOR FROM BOTH SIDES.         |
  |                                                                |
  |   Bring everything to one side, factorise, and set EACH        |
  |   factor equal to zero.                                        |
  |                                                                |
  |   Cancelling  cos theta  silently DELETES every solution       |
  |   with  cos theta = 0 .  Those are usually half the marks.     |
  +----------------------------------------------------------------+
```

## 11.1 Watch the damage cancelling does

```
  Solve   sin 2 theta = cos theta .

  THE WRONG WAY                        THE RIGHT WAY
  -------------                        -------------
  2 sin th cos th = cos th             2 sin th cos th - cos th = 0

  cancel cos th :                      cos th ( 2 sin th - 1 ) = 0

  2 sin th = 1                         cos th = 0
  sin th = 1/2                            -> th = (2n+1) pi/2
  th = n pi + (-1)^n pi/6              OR
                                       sin th = 1/2
  HALF THE ANSWER IS MISSING.             -> th = n pi + (-1)^n pi/6

  Test theta = 90 deg :                Both families are kept.
     sin180 = 0 , cos90 = 0 .          FULL MARKS.
     0 = 0 . It IS a solution,
     and the wrong method lost it.
```

## WORKED EXAMPLE 11.1

Solve `sin 2 theta + sin theta = 0`.

**ANSWER:**
```
  STEP 1   Expand the double angle.

              2 sin th cos th + sin th = 0

  STEP 2   Factorise (common factor sin th).

              sin th ( 2 cos th + 1 ) = 0

  STEP 3   CASE 1:  sin theta = 0     ->   theta = n pi

           CASE 2:  2 cos theta + 1 = 0
                    cos theta = -1/2 = cos( 2 pi / 3 )
                                       ->   theta = 2 n pi +- 2 pi / 3

  GENERAL SOLUTION:   theta = n pi     or     theta = 2 n pi +- 2 pi / 3

  CHECK    theta = 180 deg :  sin360 + sin180 = 0 + 0 = 0 .        CORRECT
           theta = 120 deg :  sin240 + sin120 = -sqrt3/2 + sqrt3/2 = 0. CORRECT
           theta = 240 deg :  sin480 + sin240 = sin120 + sin240
                            = sqrt3/2 - sqrt3/2 = 0 .              CORRECT
```

## WORKED EXAMPLE 11.2

Solve `tan theta + tan 2 theta + tan theta . tan 2 theta . tan 3 theta = ...`

Actually, solve the cleaner classic: `sin 4 theta = sin 2 theta`.

**ANSWER:**
```
  STEP 1   Bring to one side and use  sinC - sinD = 2 cos((C+D)/2) sin((C-D)/2).

              sin 4th - sin 2th = 0
              2 cos( 3 theta ) sin( theta ) = 0

  STEP 2   CASE 1:  cos 3 theta = 0
                    3 theta = (2n + 1) pi / 2
                    theta   = (2n + 1) pi / 6

           CASE 2:  sin theta = 0   ->  theta = n pi

  CHECK    theta = pi/6 = 30 deg :  sin120 = sqrt3/2 , sin60 = sqrt3/2 . OK
           theta = pi/2 = 90 deg :  sin360 = 0 , sin180 = 0 .            OK
           theta = pi   = 180 deg : sin720 = 0 , sin360 = 0 .            OK
```

## WORKED EXAMPLE 11.3

Solve `2 sin^2 theta + sin^2 2 theta = 2`.

**ANSWER:**
```
  STEP 1   Expand sin 2 theta.

              2 sin^2 th + 4 sin^2 th cos^2 th = 2

  STEP 2   Move the 2 across and use 2 - 2 sin^2 th = 2 cos^2 th :

              4 sin^2 th cos^2 th = 2 - 2 sin^2 th = 2 cos^2 th

              4 sin^2 th cos^2 th - 2 cos^2 th = 0

  STEP 3   FACTORISE. (Do not cancel cos^2 th !)

              2 cos^2 th ( 2 sin^2 th - 1 ) = 0

  STEP 4   CASE 1:  cos theta = 0     ->   theta = (2n + 1) pi / 2

           CASE 2:  sin^2 theta = 1/2 = sin^2 ( pi/4 )
                                       ->   theta = n pi +- pi/4

  CHECK    theta = 90 deg :  2 sin^2 90 + sin^2 180 = 2(1) + 0 = 2 .  CORRECT
           theta = 45 deg :  2 (1/2) + sin^2 90 = 1 + 1 = 2 .         CORRECT
           theta = 135 deg : 2 (1/2) + sin^2 270 = 1 + 1 = 2 .        CORRECT
```

---

# TOPIC 12 — METHOD 3: TREAT IT AS A QUADRATIC

**Trigger:** only ONE ratio appears (after any reduction), and it appears
squared as well as plain.

```
  +----------------------------------------------------------------+
  |  a (sin th)^2 + b (sin th) + c = 0                              |
  |                                                                |
  |  Put  s = sin theta.  Solve  a s^2 + b s + c = 0  by            |
  |  factorising, or with                                          |
  |                                                                |
  |            - b  +-  sqrt( b^2 - 4 a c )                        |
  |      s =  ----------------------------                         |
  |                       2 a                                      |
  |                                                                |
  |  THEN: reject any root outside [-1, 1] for sin or cos.         |
  |        (tan may take ANY real value - never reject a tan root.)|
  |                                                                |
  |  Solve EACH surviving root separately, and write BOTH answers. |
  +----------------------------------------------------------------+
```

## WORKED EXAMPLE 12.1

Solve `2 sin^2 theta - 3 sin theta + 1 = 0`.

**ANSWER:**
```
  STEP 1   Put s = sin theta:   2 s^2 - 3 s + 1 = 0

  STEP 2   Factorise:  ( 2s - 1 )( s - 1 ) = 0
                       s = 1/2      or      s = 1

           Both are inside [-1, 1], so both survive.

  STEP 3   sin theta = 1/2 = sin(pi/6)
                 ->   theta = n pi + (-1)^n  pi/6

           sin theta = 1 = sin(pi/2)
                 ->   theta = n pi + (-1)^n  pi/2
                 (this can also be written 2 n pi + pi/2 , which is neater,
                  because pi - pi/2 = pi/2 gives nothing new)

  GENERAL SOLUTION:
           theta = n pi + (-1)^n pi/6      or      theta = 2 n pi + pi/2

  CHECK    theta = 30 deg :  2(1/4) - 3(1/2) + 1 = 0.5 - 1.5 + 1 = 0 . OK
           theta = 90 deg :  2(1) - 3(1) + 1 = 0 .                     OK
           theta = 150 deg : 2(1/4) - 3(1/2) + 1 = 0 .                 OK
```

## WORKED EXAMPLE 12.2  (an AP favourite)

Solve `4 cos^2 theta + sqrt3 = 2 ( sqrt3 + 1 ) cos theta`.

**ANSWER:**
```
  STEP 1   Bring everything to one side.

              4 cos^2 th - 2( sqrt3 + 1 ) cos th + sqrt3 = 0

  STEP 2   Split the middle term. We need two numbers multiplying to
           4 x sqrt3 = 4 sqrt3 and adding to -2( sqrt3 + 1 ) = -2 sqrt3 - 2 .
           Those are  -2 sqrt3  and  -2 .

              4 cos^2 th - 2 sqrt3 cos th - 2 cos th + sqrt3 = 0
              2 cos th ( 2 cos th - sqrt3 ) - 1( 2 cos th - sqrt3 ) = 0
              ( 2 cos th - sqrt3 )( 2 cos th - 1 ) = 0

  STEP 3   CASE 1:  cos theta = sqrt3 / 2 = cos( pi/6 )
                        ->   theta = 2 n pi  +-  pi/6

           CASE 2:  cos theta = 1/2 = cos( pi/3 )
                        ->   theta = 2 n pi  +-  pi/3

  CHECK    theta = 30 deg :  4(3/4) + 1.7321 = 3 + 1.7321 = 4.7321
                             2(2.7321)(0.8660) = 4.7321                CORRECT
           theta = 60 deg :  4(1/4) + 1.7321 = 1 + 1.7321 = 2.7321
                             2(2.7321)(0.5) = 2.7321                   CORRECT
```

## WORKED EXAMPLE 12.3  (roots restricted to an interval)

Solve `cot^2 x - ( sqrt3 + 1 ) cot x + sqrt3 = 0` for `0 < x < pi/2`.

**ANSWER:**
```
  STEP 1   Put c = cot x .   c^2 - (sqrt3 + 1) c + sqrt3 = 0

  STEP 2   The two roots multiply to sqrt3 and add to sqrt3 + 1 :
           they are  sqrt3  and  1 .

              ( c - sqrt3 )( c - 1 ) = 0

  STEP 3   CASE 1:  cot x = sqrt3   ->   tan x = 1/sqrt3   ->   x = pi/6
                    General: x = n pi + pi/6 . In (0, pi/2): x = pi/6 only.

           CASE 2:  cot x = 1       ->   tan x = 1          ->   x = pi/4
                    General: x = n pi + pi/4 . In (0, pi/2): x = pi/4 only.

  ANSWER:  x = pi/6   and   x = pi/4       (i.e. 30 deg and 45 deg)

  CHECK    x = 30 : cot30 = sqrt3 = 1.7321
                    3 - 2.7321(1.7321) + 1.7321 = 3 - 4.7321 + 1.7321 = 0 . OK
           x = 45 : cot45 = 1
                    1 - 2.7321 + 1.7321 = 0 .                               OK
```

## WORKED EXAMPLE 12.4  (a root must be rejected)

Solve `2 cos^2 theta - 5 cos theta + 2 = 0`.

**ANSWER:**
```
  STEP 1   ( 2 cos th - 1 )( cos th - 2 ) = 0

  STEP 2   cos theta = 2 is IMPOSSIBLE. The cosine of a real angle can
           never be bigger than 1. REJECT it. Say so on the paper -
           the examiner is looking for that sentence.

  STEP 3   cos theta = 1/2 = cos(pi/3)

              theta = 2 n pi  +-  pi / 3 ,    n is an integer.

  CHECK    theta = 60 deg :  2(1/4) - 5(1/2) + 2 = 0.5 - 2.5 + 2 = 0 . CORRECT
```

---

# TOPIC 13 — METHOD 4: TURN A SUM INTO A PRODUCT

**Trigger:** three (or four) sine terms, or three cosine terms, with
**different** angles, added and set to zero.

**Tool:** the Chapter 6 transformation formulas.

```
  +----------------------------------------------------------------+
  |                    C + D          C - D                        |
  |   sin C + sin D = 2 sin ------ cos ------                      |
  |                           2            2                       |
  |                                                                |
  |                    C + D          C - D                        |
  |   sin C - sin D = 2 cos ------ sin ------                      |
  |                           2            2                       |
  |                                                                |
  |                    C + D          C - D                        |
  |   cos C + cos D = 2 cos ------ cos ------                      |
  |                           2            2                       |
  |                                                                |
  |                       C + D          C - D                     |
  |   cos C - cos D = - 2 sin ------ sin ------                    |
  |                             2            2                     |
  +----------------------------------------------------------------+
```

**The trick:** pair the **outer two** terms (the first and the last), because
their half-sum is the middle angle. Then the middle term factors out.

## WORKED EXAMPLE 13.1  (the most-asked question in this chapter)

Solve `sin theta + sin 2 theta + sin 3 theta = 0`.

**ANSWER:**
```
  STEP 1   Pair the OUTER two: sin theta and sin 3 theta.

              sin 3th + sin th = 2 sin( (3th + th)/2 ) cos( (3th - th)/2 )
                               = 2 sin( 2 theta ) cos( theta )

  STEP 2   Put it back:

              2 sin 2th cos th + sin 2th = 0

  STEP 3   FACTORISE (do not cancel!):

              sin 2 theta ( 2 cos theta + 1 ) = 0

  STEP 4   CASE 1:  sin 2 theta = 0
                    2 theta = n pi
                    theta   = n pi / 2

           CASE 2:  cos theta = -1/2 = cos( 2 pi / 3 )
                    theta = 2 n pi  +-  2 pi / 3

  GENERAL SOLUTION:  theta = n pi / 2   or   theta = 2 n pi +- 2 pi/3

  CHECK    theta = 90 deg :  sin90 + sin180 + sin270 = 1 + 0 - 1 = 0 .  CORRECT
           theta = 120 deg : sin120 + sin240 + sin360
                           = 0.8660 - 0.8660 + 0 = 0 .                  CORRECT
           theta = 240 deg : sin240 + sin480 + sin720
                           = -0.8660 + sin120 + 0
                           = -0.8660 + 0.8660 = 0 .                     CORRECT
```

## WORKED EXAMPLE 13.2

Solve `cos theta + cos 2 theta + cos 3 theta = 0`.

**ANSWER:**
```
  STEP 1   Pair the outer two:

              cos 3th + cos th = 2 cos( 2 theta ) cos( theta )

  STEP 2   2 cos 2th cos th + cos 2th = 0

  STEP 3   cos 2 theta ( 2 cos theta + 1 ) = 0

  STEP 4   CASE 1:  cos 2 theta = 0
                    2 theta = (2n + 1) pi / 2
                    theta   = (2n + 1) pi / 4

           CASE 2:  cos theta = -1/2      ->    theta = 2 n pi +- 2 pi / 3

  CHECK    theta = 45 deg :  cos45 + cos90 + cos135
                           = 0.7071 + 0 - 0.7071 = 0 .        CORRECT
           theta = 120 deg : cos120 + cos240 + cos360
                           = -0.5 - 0.5 + 1 = 0 .             CORRECT
```

## WORKED EXAMPLE 13.3

Solve `sin x + sin 5x = sin 3x`.

**ANSWER:**
```
  STEP 1   sin 5x + sin x = 2 sin( 3x ) cos( 2x )

  STEP 2   2 sin 3x cos 2x = sin 3x
           2 sin 3x cos 2x - sin 3x = 0
           sin 3x ( 2 cos 2x - 1 ) = 0

  STEP 3   CASE 1:  sin 3x = 0  ->  3x = n pi  ->  x = n pi / 3

           CASE 2:  cos 2x = 1/2 = cos(pi/3)
                    2x = 2 n pi +- pi/3
                    x  = n pi +- pi/6

  CHECK    x = 60 deg :  sin60 + sin300 = 0.8660 - 0.8660 = 0 ,
                         sin180 = 0 .                             CORRECT
           x = 30 deg :  sin30 + sin150 = 0.5 + 0.5 = 1 ,
                         sin90 = 1 .                              CORRECT
```

## WORKED EXAMPLE 13.4  (mixing sin and cos: convert one of them)

Solve `cos 3 theta = sin 2 theta`.

**ANSWER:**
```
  STEP 1   You cannot compare a cos with a sin. Turn the sine into a cosine
           using  sin A = cos( pi/2 - A ) .

              cos 3 theta = cos( pi/2 - 2 theta )

  STEP 2   Apply  cos X = cos Y  =>  X = 2 n pi +- Y .

              3 theta = 2 n pi  +-  ( pi/2 - 2 theta )

  STEP 3   CASE 1 (the + sign):

              3 theta = 2 n pi + pi/2 - 2 theta
              5 theta = 2 n pi + pi/2
              theta   = ( 4 n + 1 ) pi / 10

              [ because 2n pi + pi/2 = (4n + 1) pi / 2 , then divide by 5 ]

           CASE 2 (the - sign):

              3 theta = 2 n pi - pi/2 + 2 theta
              theta   = 2 n pi - pi / 2

  CHECK    n = 0, case 1 :  theta = pi/10 = 18 deg .
              cos 54 = 0.5878 ,  sin 36 = 0.5878 .                CORRECT
           n = 1, case 1 :  theta = 5 pi / 10 = pi/2 = 90 deg .
              cos 270 = 0 ,  sin 180 = 0 .                        CORRECT
           n = 0, case 2 :  theta = -90 deg .
              cos(-270) = 0 ,  sin(-180) = 0 .                    CORRECT
```

## WORKED EXAMPLE 13.5  (product on one side)

Solve `4 sin theta . sin 2 theta . sin 4 theta = sin 3 theta`.

**ANSWER:**
```
  STEP 1   Deal with the product of the two "far apart" factors first, using
              2 sin A sin B = cos(A - B) - cos(A + B) .

              2 sin 2th sin 4th = cos( 2th ) - cos( 6th )

           So the left side is

              2 sin th [ cos 2th - cos 6th ]

  STEP 2   Expand using  2 sin A cos B = sin(A + B) - sin(B - A) :

              2 sin th cos 2th = sin 3th - sin th
              2 sin th cos 6th = sin 7th - sin 5th

           LHS = ( sin 3th - sin th ) - ( sin 7th - sin 5th )

  STEP 3   Set LHS = sin 3 theta :

              sin 3th - sin th - sin 7th + sin 5th = sin 3th
                      - sin th - sin 7th + sin 5th = 0
                        sin 5th - sin 7th = sin th

  STEP 4   sin 5th - sin 7th = 2 cos( 6th ) sin( -th ) = -2 cos 6th sin th

              - 2 cos 6th sin th = sin th
              sin th ( 2 cos 6th + 1 ) = 0

  STEP 5   CASE 1:  sin theta = 0    ->   theta = n pi

           CASE 2:  cos 6 theta = -1/2 = cos( 2 pi / 3 )
                    6 theta = 2 n pi  +-  2 pi / 3
                    theta   = n pi / 3  +-  pi / 9

  CHECK    theta = pi/9 = 20 deg :
              LHS = 4 sin20 sin40 sin80
                  = 4 ( 0.3420 )( 0.6428 )( 0.9848 ) = 4 ( 0.21651 ) = 0.8660
              RHS = sin 60 = 0.8660 .                              CORRECT
           theta = 180 deg : LHS = 4 (0)(0)(0) = 0 , RHS = sin540 = 0. CORRECT
```

---

# TOPIC 14 — METHOD 5: a cos theta + b sin theta = c

This is the **exam favourite** of the chapter. Learn the routine until it is
automatic.

## 14.1 The idea

```
  You have TWO different ratios. You want ONE.
  So you fold  a cos th + b sin th  into a SINGLE cosine.

  Draw a right triangle with legs a and b:

                     /|
                    / |
      sqrt(a^2+b^2)/  |  b                     a
                  /   |            cos alpha = -------------
                 / al |                        sqrt(a^2+b^2)
                +-----+
                   a                           b
                                   sin alpha = -------------
                                               sqrt(a^2+b^2)

  Then       a cos th + b sin th
           = r ( cos al cos th + sin al sin th )        where r = sqrt(a^2+b^2)
           = r cos( theta - alpha )

  So the equation becomes         r cos( theta - alpha ) = c

                                  cos( theta - alpha ) = c / r
```

## 14.2 The existence condition — state it EVERY time

```
  +----------------------------------------------------------------+
  |                                                                |
  |   a cos theta + b sin theta = c   HAS A SOLUTION               |
  |                                                                |
  |            if and only if      | c |  <=  sqrt( a^2 + b^2 )    |
  |                                                                |
  |            equivalently        c^2  <=  a^2 + b^2              |
  |                                                                |
  |   REASON: cos( theta - alpha ) can only take values in         |
  |   [-1, 1], so  c / r  must lie in [-1, 1].                     |
  |                                                                |
  |   It also says:                                                |
  |       MAXIMUM value of a cos th + b sin th =  + sqrt(a^2+b^2)  |
  |       MINIMUM value of a cos th + b sin th =  - sqrt(a^2+b^2)  |
  +----------------------------------------------------------------+
```

## 14.3 The full recipe

```
  STEP 1   Compute  r = sqrt( a^2 + b^2 ) .
  STEP 2   CHECK  |c| <= r .  If not, write "NO SOLUTION" and stop.
  STEP 3   Divide the whole equation by r.
  STEP 4   Recognise the two new coefficients as cos alpha and sin alpha
           for a standard angle alpha, and compress to cos(theta - alpha).
  STEP 5   Write c/r as cos beta for a standard angle beta.
  STEP 6   theta - alpha = 2 n pi +- beta
           theta = 2 n pi +- beta + alpha .
```

> You may equally fold into a **sine**: `a cos th + b sin th = r sin(th + al)`
> with `sin al = a/r`, `cos al = b/r`. Both are correct. Choose whichever
> makes `alpha` a standard angle. The answers look different but describe
> the same set of angles.

## WORKED EXAMPLE 14.1  (the standard AP question)

Solve `sqrt3 cos theta + sin theta = 1`.

**ANSWER:**
```
  STEP 1   a = sqrt3 , b = 1 , c = 1 .
              r = sqrt( 3 + 1 ) = 2 .

  STEP 2   |c| = 1 <= 2 .  A solution EXISTS. Continue.

  STEP 3   Divide by 2:

              sqrt3            1                1
              -----  cos th + --- sin th   =   ---
                2              2                2

  STEP 4   sqrt3/2 = cos(pi/6) and 1/2 = sin(pi/6) , so the left side is

              cos(pi/6) cos th + sin(pi/6) sin th  =  cos( theta - pi/6 )

              cos( theta - pi/6 ) = 1/2

  STEP 5   1/2 = cos( pi/3 ) .

  STEP 6   theta - pi/6 = 2 n pi  +-  pi/3

              theta = 2 n pi  +  pi/6  +-  pi/3

           Two families, written out:

              theta = 2 n pi + pi/6 + pi/3 = 2 n pi + pi/2
              theta = 2 n pi + pi/6 - pi/3 = 2 n pi - pi/6

  GENERAL SOLUTION:   theta = 2 n pi + pi/2    or    theta = 2 n pi - pi/6

  CHECK    theta = pi/2 = 90 deg :
              sqrt3 cos90 + sin90 = 0 + 1 = 1 .                 CORRECT
           theta = -pi/6 = -30 deg :
              sqrt3 cos(-30) + sin(-30)
            = sqrt3 (sqrt3/2) + (-1/2) = 1.5 - 0.5 = 1 .        CORRECT
```

## WORKED EXAMPLE 14.2

Solve `cos theta + sqrt3 sin theta = sqrt2`.

**ANSWER:**
```
  STEP 1   a = 1 , b = sqrt3 , c = sqrt2 .   r = sqrt(1 + 3) = 2 .

  STEP 2   |c| = 1.414 <= 2 . Solution exists.

  STEP 3   Divide by 2:

              (1/2) cos th + (sqrt3/2) sin th = sqrt2 / 2 = 1/sqrt2

  STEP 4   1/2 = cos(pi/3) , sqrt3/2 = sin(pi/3) :

              cos( theta - pi/3 ) = 1 / sqrt2

  STEP 5   1/sqrt2 = cos( pi/4 ) .

  STEP 6   theta - pi/3 = 2 n pi +- pi/4

              theta = 2 n pi  +-  pi/4  +  pi/3

  CHECK    n = 0, plus :  theta = pi/4 + pi/3 = 7pi/12 = 105 deg
              cos105 + sqrt3 sin105 = -0.2588 + 1.7321(0.9659)
                                    = -0.2588 + 1.6730 = 1.4142 = sqrt2 . OK
           n = 0, minus:  theta = -pi/4 + pi/3 = pi/12 = 15 deg
              cos15 + sqrt3 sin15 = 0.9659 + 1.7321(0.2588)
                                  = 0.9659 + 0.4483 = 1.4142 = sqrt2 .    OK
```

## WORKED EXAMPLE 14.3  (folding into a SINE instead)

Solve `sqrt2 ( sin theta + cos theta ) = sqrt3`.

**ANSWER:**
```
  STEP 1   Divide by sqrt2 first to clean it up:

              sin theta + cos theta = sqrt3 / sqrt2

           Here a = 1 (with cos), b = 1 (with sin), so r = sqrt(1+1) = sqrt2 .

  STEP 2   |c| = sqrt3/sqrt2 = 1.2247 <= sqrt2 = 1.4142 . Solution exists.

  STEP 3   Divide by sqrt2 :

               1                1                 sqrt3
              ---- sin th  +  ---- cos th   =    -------
              sqrt2           sqrt2                 2

  STEP 4   1/sqrt2 = cos(pi/4) AND 1/sqrt2 = sin(pi/4) , so the left side is

              sin th cos(pi/4) + cos th sin(pi/4)  =  sin( theta + pi/4 )

              sin( theta + pi / 4 ) = sqrt3 / 2

  STEP 5   sqrt3/2 = sin( pi/3 ) .   Use the SINE general solution now.

  STEP 6   theta + pi/4 = n pi + (-1)^n ( pi/3 )

              theta = n pi + (-1)^n  pi/3  -  pi/4 ,    n is an integer.

  CHECK    n = 0 :  theta = pi/3 - pi/4 = pi/12 = 15 deg
              sqrt2 ( sin15 + cos15 ) = 1.4142 ( 0.2588 + 0.9659 )
                                      = 1.4142 ( 1.2247 ) = 1.7321 = sqrt3 . OK
           n = 1 :  theta = pi - pi/3 - pi/4 = 5 pi / 12 = 75 deg
              sqrt2 ( sin75 + cos75 ) = 1.4142 ( 0.9659 + 0.2588 )
                                      = 1.7321 = sqrt3 .                     OK
```

## WORKED EXAMPLE 14.4  (NO solution — and that is the answer)

Show that `3 cos theta + 4 sin theta = 6` has no solution.

**ANSWER:**
```
  r = sqrt( 3^2 + 4^2 ) = sqrt(9 + 16) = sqrt25 = 5 .

  So for every angle theta,

        - 5   <=   3 cos theta + 4 sin theta   <=   5 .

  But 6 > 5 . The left side can never reach 6.

  Therefore the equation has NO SOLUTION.
```

> **TRAP:** if you skip the existence check you will happily write
> `cos(theta - alpha) = 6/5` and then produce a nonsense answer. Two seconds
> of checking `c^2 <= a^2 + b^2` protects the whole question.

## WORKED EXAMPLE 14.5  (find the values of k)

Find all values of `k` for which `cos theta + sin theta = k` has a solution.

**ANSWER:**
```
  r = sqrt( 1^2 + 1^2 ) = sqrt2 .

  A solution exists  <=>  | k | <= sqrt2

                     <=>  - sqrt2  <=  k  <=  sqrt2 .
```

---

# TOPIC 15 — METHOD 6: SQUARING, AND EXTRANEOUS ROOTS

## 15.1 Why squaring is dangerous

```
  Squaring both sides of an equation can CREATE solutions that were never
  there. Look at the simplest possible case:

        x = 3            has exactly one solution.
        x^2 = 9          has TWO:  x = 3  and  x = -3 .

  The -3 is an EXTRANEOUS ROOT. It solves the squared equation but not
  the original.

  +----------------------------------------------------------------+
  |                                                                |
  |   IF YOU SQUARE, YOU MUST CHECK EVERY ROOT IN THE ORIGINAL     |
  |   EQUATION. No exceptions. The checking IS part of the answer. |
  |                                                                |
  +----------------------------------------------------------------+
```

## WORKED EXAMPLE 15.1

Solve `sin theta + cos theta = 1`.

**ANSWER — first by squaring (to see the danger):**
```
  STEP 1   Square both sides:

              ( sin th + cos th )^2 = 1
              sin^2 th + 2 sin th cos th + cos^2 th = 1
              1 + sin 2 theta = 1
              sin 2 theta = 0

  STEP 2   2 theta = n pi     ->     theta = n pi / 2

  STEP 3   NOW CHECK EVERY FAMILY MEMBER in the ORIGINAL equation.

           theta = 0    :  0 + 1  =  1     KEEP
           theta = pi/2 :  1 + 0  =  1     KEEP
           theta = pi   :  0 - 1  = -1     REJECT (extraneous)
           theta = 3pi/2:  -1 + 0 = -1     REJECT (extraneous)
           theta = 2pi  :  0 + 1  =  1     KEEP

           So the survivors are  0, pi/2, 2pi, 5pi/2, ...  i.e.

              theta = 2 n pi        or       theta = 2 n pi + pi/2 .
```

**ANSWER — the safe way (no squaring), which gives the same thing:**
```
  STEP 1   r = sqrt(1 + 1) = sqrt2 . Divide by sqrt2 :

              (1/sqrt2) sin th + (1/sqrt2) cos th = 1/sqrt2

              sin( theta + pi/4 ) = 1/sqrt2 = sin( pi/4 )

  STEP 2   theta + pi/4 = n pi + (-1)^n ( pi/4 )

  STEP 3   n EVEN, n = 2m :  theta = 2 m pi + pi/4 - pi/4 = 2 m pi
           n ODD , n = 2m+1: theta = (2m+1) pi - pi/4 - pi/4
                                   = 2 m pi + pi - pi/2
                                   = 2 m pi + pi/2

  SAME ANSWER:   theta = 2 n pi    or    theta = 2 n pi + pi/2 .
                 No extraneous roots ever appeared.
```

> **Moral:** if you can avoid squaring, avoid it. If you cannot, check.

## WORKED EXAMPLE 15.2  (roots that break the domain)

Solve `tan theta + sec theta = sqrt3`.

**ANSWER:**
```
  STEP 0   FIRST note the domain: sec and tan need cos theta != 0.
           Write that down now.

  STEP 1   Write in sin and cos:

              sin th        1
              ------  +  ------  =  sqrt3
              cos th     cos th

              1 + sin theta  =  sqrt3 cos theta

  STEP 2   Rearrange into the a cos + b sin form:

              sqrt3 cos theta - sin theta = 1

  STEP 3   r = sqrt( 3 + 1 ) = 2 .  |c| = 1 <= 2 , solution exists.
           Divide by 2:

              (sqrt3/2) cos th - (1/2) sin th = 1/2

              cos(pi/6) cos th - sin(pi/6) sin th = 1/2

              cos( theta + pi/6 ) = 1/2 = cos( pi/3 )

  STEP 4   theta + pi/6 = 2 n pi +- pi/3

              theta = 2 n pi + pi/3 - pi/6 = 2 n pi + pi/6      ... family 1
              theta = 2 n pi - pi/3 - pi/6 = 2 n pi - pi/2      ... family 2

  STEP 5   CHECK AGAINST THE DOMAIN.

           Family 2 gives theta = -pi/2 , 3pi/2 , ... where cos theta = 0 .
           At those angles tan theta and sec theta DO NOT EXIST.
           REJECT family 2 entirely.

           Family 1: theta = pi/6 . cos(pi/6) = sqrt3/2 != 0 . Fine.

  ANSWER:  theta = 2 n pi + pi / 6 ,      n is an integer.

  CHECK    theta = 30 deg :
              tan30 + sec30 = 0.5774 + 1.1547 = 1.7321 = sqrt3 .   CORRECT
```

## WORKED EXAMPLE 15.3

Solve `cos theta - sin theta = 1`.

**ANSWER:**
```
  STEP 1   r = sqrt(1 + 1) = sqrt2 . Divide by sqrt2 :

              (1/sqrt2) cos th - (1/sqrt2) sin th = 1/sqrt2

              cos(pi/4) cos th - sin(pi/4) sin th = 1/sqrt2

              cos( theta + pi/4 ) = 1/sqrt2 = cos( pi/4 )

  STEP 2   theta + pi/4 = 2 n pi +- pi/4

              theta = 2 n pi              (taking the + sign)
              theta = 2 n pi - pi / 2     (taking the - sign)

  CHECK    theta = 0     :  1 - 0 = 1 .                CORRECT
           theta = -pi/2 :  cos(-90) - sin(-90) = 0 + 1 = 1 .  CORRECT
           theta = 3pi/2 :  0 - (-1) = 1 .             CORRECT
```

---

# TOPIC 16 — FINDING THE SOLUTIONS IN A GIVEN INTERVAL

A very common part (ii) of a board question: *"...hence find the solutions in
`0 <= theta <= 2 pi`"*.

## 16.1 The systematic method

```
  +----------------------------------------------------------------+
  |                                                                |
  |   1.  Get the GENERAL SOLUTION first. Always.                  |
  |                                                                |
  |   2.  Take one family at a time.                               |
  |                                                                |
  |   3.  Substitute n = 0, then n = 1, 2, 3, ... until the value  |
  |       goes past the right-hand end of the interval.            |
  |                                                                |
  |   4.  Then substitute n = -1, -2, ... until the value goes     |
  |       past the left-hand end.                                  |
  |                                                                |
  |   5.  Keep only the values INSIDE the interval. Watch whether  |
  |       the endpoints are included ( <= ) or not ( < ).          |
  |                                                                |
  |   6.  Write the survivors in INCREASING order.                 |
  |                                                                |
  |   7.  If the equation had sec/tan/cot/cosec in it, throw out   |
  |       any survivor that makes them undefined.                  |
  |                                                                |
  +----------------------------------------------------------------+
```

## WORKED EXAMPLE 16.1

Solve `sqrt3 cos theta + sin theta = 1` for `0 <= theta <= 2 pi`.

**ANSWER:**
```
  From Worked Example 14.1 the general solution is

        theta = 2 n pi + pi/2        ... family 1
        theta = 2 n pi - pi/6        ... family 2

  FAMILY 1
     n = 0  ->  theta = pi/2 = 90 deg          IN  [0, 2pi]   KEEP
     n = 1  ->  theta = 2pi + pi/2 = 450 deg   OUT (too big)
     n = -1 ->  theta = -3pi/2 = -270 deg      OUT (too small)

  FAMILY 2
     n = 0  ->  theta = -pi/6 = -30 deg        OUT (negative)
     n = 1  ->  theta = 2pi - pi/6 = 11pi/6 = 330 deg   IN   KEEP
     n = 2  ->  theta = 4pi - pi/6 = 690 deg   OUT

  ANSWER:  theta = pi/2   and   theta = 11 pi / 6      (90 deg and 330 deg)

  CHECK    theta = 90  :  sqrt3(0) + 1 = 1 .                        CORRECT
           theta = 330 :  sqrt3 cos330 + sin330
                        = 1.7321(0.8660) + (-0.5) = 1.5 - 0.5 = 1 . CORRECT
```

## WORKED EXAMPLE 16.2

Find all `x` in `[0, 2 pi]` such that `cos 2x = sin x`.

**ANSWER:**
```
  STEP 1   Reduce to one ratio. Use cos 2x = 1 - 2 sin^2 x .

              1 - 2 sin^2 x = sin x
              2 sin^2 x + sin x - 1 = 0

  STEP 2   ( 2 sin x - 1 )( sin x + 1 ) = 0

              sin x = 1/2      or      sin x = -1

  STEP 3   sin x = 1/2  ->  x = n pi + (-1)^n pi/6
              n = 0 :  pi/6   = 30 deg    IN
              n = 1 :  5pi/6  = 150 deg   IN
              n = 2 :  2pi + pi/6 = 390   OUT
              n = -1:  -pi - pi/6 = -210  OUT

           sin x = -1  ->  x = 2 n pi - pi/2
              n = 0 :  -pi/2 = -90 deg    OUT
              n = 1 :  2pi - pi/2 = 3pi/2 = 270 deg   IN

  ANSWER:  x = pi/6 ,  5 pi / 6 ,  3 pi / 2       (30, 150, 270 degrees)

  CHECK    x = 30  : cos60 = 0.5 , sin30 = 0.5 .      CORRECT
           x = 150 : cos300 = 0.5 , sin150 = 0.5 .    CORRECT
           x = 270 : cos540 = cos180 = -1 , sin270 = -1 .  CORRECT
```

## WORKED EXAMPLE 16.3

Find the number of solutions of `2 sin^2 x + 5 sin x - 3 = 0` in `[0, 3 pi]`.

**ANSWER:**
```
  STEP 1   ( 2 sin x - 1 )( sin x + 3 ) = 0
              sin x = 1/2   or   sin x = -3  (REJECT, out of [-1, 1])

  STEP 2   x = n pi + (-1)^n pi/6 .   Note 3 pi = 540 degrees.

              n = 0 :   pi/6        =  30 deg     IN
              n = 1 :   5 pi/6      = 150 deg     IN
              n = 2 :   2pi + pi/6  = 390 deg     IN
              n = 3 :   3pi - pi/6  = 510 deg     IN
              n = 4 :   4pi + pi/6  = 750 deg     OUT
              n = -1:   -pi - pi/6  = -210 deg    OUT

  ANSWER:  4 solutions -  pi/6 , 5pi/6 , 13pi/6 , 17pi/6 .
```

## 16.2 A faster picture for interval questions

```
   sin x
      1 |      ___                       ___
        |    /     \                   /     \
    1/2 |---/-------\-----------------/-------\---------- y = 1/2
        |  /|        |\              /|        |\
      0 +-/-+--------+-\------------/-+--------+-\------> x
        | 30       150  \          / 390     510  \
        |                \        /                \
     -1 |                  \____/                    \__
        0                    2pi                      3pi

   Count the crossings inside your interval. Four crossings -> four solutions.
   Sketching this takes ten seconds and it catches counting mistakes.
```

---

# TOPIC 17 — SIMULTANEOUS TRIGONOMETRIC EQUATIONS

**The set-up:** two equations, ONE unknown angle. You want the values that
satisfy **both**.

```
  +----------------------------------------------------------------+
  |                                                                |
  |   METHOD                                                       |
  |                                                                |
  |   1. Solve each equation on its own. Write both general        |
  |      solutions.                                                |
  |   2. Use the SIGNS of the two given values to decide which     |
  |      single QUADRANT the angle is in (ASTC).                   |
  |   3. Find the ONE angle in [0, 2 pi) that satisfies both.      |
  |      Call it beta.                                             |
  |   4. Since both sin and cos have period 2 pi, the answer is    |
  |                                                                |
  |            theta = 2 n pi + beta ,   n an integer.             |
  |                                                                |
  |   NOTE the 2 n pi. Even if one equation was a tan equation,    |
  |   the COMBINED answer repeats every 2 pi, not every pi.        |
  |                                                                |
  +----------------------------------------------------------------+
```

## WORKED EXAMPLE 17.1

Solve `sin theta = 1/2` and `cos theta = - sqrt3 / 2` together.

**ANSWER:**
```
  STEP 1   sin theta = 1/2       ->  theta = n pi + (-1)^n pi/6
                                     values in [0,2pi): 30 deg , 150 deg

           cos theta = -sqrt3/2  ->  theta = 2 n pi +- 5 pi/6
                                     values in [0,2pi): 150 deg , 210 deg

  STEP 2   The value COMMON to both lists is 150 deg = 5 pi / 6 .

           (Sanity check with ASTC: sin is POSITIVE and cos is NEGATIVE,
            so theta is in QUADRANT II. 150 deg is in quadrant II. Good.)

  STEP 3   theta = 2 n pi + 5 pi / 6 ,     n is an integer.

  CHECK    theta = 150 deg :  sin150 = 1/2 , cos150 = -sqrt3/2 .  CORRECT
```

## WORKED EXAMPLE 17.2

Solve `tan theta = - 1` and `cos theta = 1 / sqrt2` together.

**ANSWER:**
```
  STEP 1   tan theta = -1   ->  theta = n pi - pi/4
                               values in [0, 2pi): 135 deg , 315 deg

           cos theta = 1/sqrt2 -> theta = 2 n pi +- pi/4
                               values in [0, 2pi): 45 deg , 315 deg

  STEP 2   Common value: 315 deg = 7 pi / 4 .

           (ASTC check: tan negative and cos positive -> QUADRANT IV. Yes.)

  STEP 3   theta = 2 n pi + 7 pi / 4 ,   n an integer.
           (You may also write  theta = 2 n pi - pi/4 . Same set.)

  CHECK    theta = 315 deg : tan315 = -1 , cos315 = 1/sqrt2 .   CORRECT
```

## WORKED EXAMPLE 17.3  (no common solution)

Solve `sin theta = 1/2` and `cos theta = 1/2` together.

**ANSWER:**
```
  sin theta = 1/2  ->  theta = 30 deg or 150 deg  (in [0, 2pi))
  cos theta = 1/2  ->  theta = 60 deg or 300 deg  (in [0, 2pi))

  There is NO value in both lists.

  Cross-check by identity: if both were true then
        sin^2 th + cos^2 th = 1/4 + 1/4 = 1/2 ,  but it must equal 1.
        Contradiction.

  ANSWER:  NO SOLUTION.
```

---

# TOPIC 18 — DOMAIN TRAPS: sec, cosec, tan, cot

```
  +--------------+------------------------+---------------------------+
  |  Ratio       |  Undefined when        |  i.e. at theta =          |
  +--------------+------------------------+---------------------------+
  |  tan , sec   |  cos theta = 0         |  (2n + 1) pi / 2          |
  |  cot , cosec |  sin theta = 0         |  n pi                     |
  +--------------+------------------------+---------------------------+

  RULES
   - If the ORIGINAL equation contains tan or sec, no answer may have
     cos theta = 0.
   - If it contains cot or cosec, no answer may have sin theta = 0.
   - |sec theta| >= 1 and |cosec theta| >= 1 always. So sec th = 0.5 or
     cosec th = -0.3 have NO solution.
   - tan theta and cot theta can equal ANY real number. Never reject a
     tan root for being "too big".
```

## WORKED EXAMPLE 18.1

Solve `sec theta = 2`, and say why `sec theta = 1/2` has no solution.

**ANSWER:**
```
  sec theta = 2   ->   cos theta = 1/2 = cos(pi/3)

        theta = 2 n pi  +-  pi / 3 ,   n an integer.

  sec theta = 1/2 would mean cos theta = 2 , which is impossible
  because | cos theta | <= 1 .   NO SOLUTION.
```

## WORKED EXAMPLE 18.2

Solve `cot theta + tan theta = 2`.

**ANSWER:**
```
  STEP 0   Domain: sin theta != 0 and cos theta != 0 .

  STEP 1   cos th / sin th + sin th / cos th = 2

              cos^2 th + sin^2 th
              -------------------  =  2
                sin th cos th

                      1
              --------------- = 2
               sin th cos th

  STEP 2   Multiply up:  2 sin th cos th = 1  ->  sin 2 theta = 1

  STEP 3   sin 2 theta = 1 = sin(pi/2)

              2 theta = 2 n pi + pi/2
              theta   = n pi + pi / 4

  STEP 4   Domain check: at theta = n pi + pi/4 ,
           sin theta = +- 1/sqrt2 != 0 and cos theta = +- 1/sqrt2 != 0 . Safe.

  CHECK    theta = 45 deg :  cot45 + tan45 = 1 + 1 = 2 .   CORRECT
           theta = 225 deg : cot225 + tan225 = 1 + 1 = 2 . CORRECT
```

---

# TOPIC 19 — THREE MORE CLASSIC SHAPES WORTH KNOWING

## 19.1 sin A = cos B  (complementary angles)

```
  sin A = cos B   <=>   cos(pi/2 - A) = cos B   <=>   A + B = pi/2
                                                      (for acute angles)
```

**WORKED EXAMPLE 19.1**
If `x` is acute and `sin(x + 10 deg) = cos(3x - 68 deg)`, find `x`.

**ANSWER:**
```
  Both angles acute, so they must be COMPLEMENTARY:

        ( x + 10 ) + ( 3x - 68 ) = 90
                     4x - 58     = 90
                          4x     = 148
                           x     = 37 degrees

  CHECK   sin(37 + 10) = sin 47 = 0.7314
          cos(111 - 68) = cos 43 = 0.7314 .                CORRECT
```

## 19.2 tan A + tan B + tan A tan B tan C style

```
  The identity behind it:

        if  A + B + C = n pi   then   tan A + tan B + tan C
                                    = tan A . tan B . tan C

  and, rearranged,

        tan A + tan B = tan(A + B) ( 1 - tan A tan B )
```

**WORKED EXAMPLE 19.2**
Solve `tan theta + tan 2 theta + sqrt3 tan theta tan 2 theta = sqrt3`.

**ANSWER:**
```
  STEP 1   Group the sqrt3 terms.

              tan th + tan 2th = sqrt3 - sqrt3 tan th tan 2th
              tan th + tan 2th = sqrt3 ( 1 - tan th tan 2th )

  STEP 2   Divide both sides by ( 1 - tan th tan 2th ) :

              tan th + tan 2th
              -----------------  =  sqrt3
              1 - tan th tan 2th

           The left side is exactly tan( th + 2th ) = tan 3 theta .

  STEP 3   tan 3 theta = sqrt3 = tan( pi / 3 )

              3 theta = n pi + pi / 3
              theta   = n pi / 3  +  pi / 9

  CHECK    theta = pi/9 = 20 deg :
              tan20 + tan40 + sqrt3 tan20 tan40
            = 0.3640 + 0.8391 + 1.7321 ( 0.3640 )( 0.8391 )
            = 1.2031 + 1.7321 ( 0.30543 )
            = 1.2031 + 0.5290 = 1.7321 = sqrt3 .              CORRECT
```

## 19.3 A ratio of two tangents (componendo and dividendo)

**WORKED EXAMPLE 19.3**
Solve `3 tan( theta - 15 deg ) = tan( theta + 15 deg )`.

**ANSWER:**
```
  STEP 1   Write as a ratio.

              tan( theta + 15 )        3
              ------------------  =   ---
              tan( theta - 15 )        1

  STEP 2   Expand both tangents as sin/cos:

              sin(th + 15) cos(th - 15)        3
              -------------------------   =   ---
              cos(th + 15) sin(th - 15)        1

  STEP 3   COMPONENDO AND DIVIDENDO
           (if p/q = r/s then (p + q)/(p - q) = (r + s)/(r - s)) :

              sin(th+15)cos(th-15) + cos(th+15)sin(th-15)      3 + 1
              -------------------------------------------  =  -------
              sin(th+15)cos(th-15) - cos(th+15)sin(th-15)      3 - 1

           Numerator  = sin( (th+15) + (th-15) ) = sin 2 theta
           Denominator= sin( (th+15) - (th-15) ) = sin 30 deg = 1/2

              sin 2 theta        4
              -----------  =    ---  = 2
                  1/2            2

              sin 2 theta = 1

  STEP 4   2 theta = 2 n pi + pi/2
           theta   = n pi + pi / 4                (i.e. 45 deg + multiples of 180)

  CHECK    theta = 45 deg :
              3 tan 30 = 3 ( 0.5774 ) = 1.7321
              tan 60   = 1.7321 .                             CORRECT
```

---

# TOPIC 20 — HOW TO WRITE THE ANSWER SO YOU KEEP EVERY MARK

```
  +----------------------------------------------------------------+
  |                                                                |
  |  A full-mark Section B answer has these six things:            |
  |                                                                |
  |   1.  The reduction step, with the identity NAMED or written.  |
  |   2.  A clear "= 0" line before factorising.                   |
  |   3.  BOTH (or all) cases written out, labelled CASE 1, CASE 2.|
  |   4.  Any rejected root, with the REASON in words              |
  |       ("rejected since |sin theta| <= 1").                     |
  |   5.  The final line of each family, ending with               |
  |            " , where n is an integer "                         |
  |   6.  If an interval was asked for, a short list in increasing |
  |       order.                                                   |
  |                                                                |
  +----------------------------------------------------------------+
```

**A model layout to copy:**

```
  Q.  Solve  sin theta + sin 2 theta + sin 3 theta = 0 .

  Sol.  sin 3 theta + sin theta = 2 sin 2 theta cos theta      [ sinC + sinD ]

        Therefore  2 sin 2th cos th + sin 2th = 0

                   sin 2 theta ( 2 cos theta + 1 ) = 0

        CASE 1 :  sin 2 theta = 0
                  => 2 theta = n pi
                  => theta = n pi / 2 ,  n an integer

        CASE 2 :  cos theta = - 1/2 = cos ( 2 pi / 3 )
                  => theta = 2 n pi +- 2 pi / 3 ,  n an integer

        Hence  theta = n pi / 2   or   theta = 2 n pi +- 2 pi / 3 ,
        where n is an integer.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write "where n is an integer" at the end of EVERY
       general solution?

  [ ]  Did I use the RIGHT formula for the ratio?
          sin  ->  n pi + (-1)^n alpha
          cos  ->  2 n pi +- alpha
          tan  ->  n pi + alpha
          any SQUARE  ->  n pi +- alpha

  [ ]  Did I FACTORISE instead of cancelling? (Cancelling cos theta
       destroys a whole family of solutions.)

  [ ]  Did I write out ALL the cases, not just the first one?

  [ ]  Did I reject any root with |sin| > 1 or |cos| > 1, and SAY WHY
       in words?

  [ ]  For a cos th + b sin th = c , did I state and check
       c^2 <= a^2 + b^2 ?

  [ ]  If I squared anywhere, did I substitute every root back into the
       ORIGINAL equation?

  [ ]  If the equation had tan / sec, did I throw out roots with
       cos theta = 0?  If it had cot / cosec, roots with sin theta = 0?

  [ ]  For "sin 3 theta = ..." did I solve for 3 theta FIRST and divide
       the whole general solution by 3 at the END?

  [ ]  If an interval was given, did I substitute n = 0, 1, 2, -1, ...
       and list the answers in increasing order?

  [ ]  Are all my angles in the SAME unit throughout - radians or
       degrees, not a mixture?

  [ ]  Did I substitute at least one answer back to check? It takes
       twenty seconds and it has saved more marks than any other habit.
```

---

# THE TEN SENTENCES THAT ARE THIS CHAPTER

```
   1.  An identity is true for all angles; an equation only for some.
   2.  Because the ratios repeat, one solution means infinitely many.
   3.  The principal solution is the single one inside
       [-pi/2, pi/2] for sin, [0, pi] for cos, (-pi/2, pi/2) for tan.
   4.  sin th = 0 -> n pi ;  cos th = 0 -> (2n+1) pi/2 ;  tan th = 0 -> n pi.
   5.  sin th = sin al -> n pi + (-1)^n al .
   6.  cos th = cos al -> 2 n pi +- al .
   7.  tan th = tan al -> n pi + al .
   8.  Any SQUARED equation -> n pi +- al .
   9.  Never cancel - always factorise.
  10.  a cos th + b sin th = c needs c^2 <= a^2 + b^2 , then divide by
       sqrt(a^2 + b^2) and compress to a single cosine.
```
