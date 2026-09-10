# Differential Equations — Concepts From Zero

**Maths IIB · Chapter 8**

Read this file with a pen in your hand. Do not just read it. Copy every worked
example onto paper as you go. This chapter is learnt by the hand, not by the eye.

Nothing here assumes you are good at maths. Everything is explained from the
beginning.

---

# TOPIC 1 — WHAT IS A DIFFERENTIAL EQUATION?

An ordinary equation contains numbers and letters:

```
   3x + 5 = 11
```

A **differential equation** contains a derivative as well:

```
   dy/dx  =  2x
```

That is the only difference. It is an equation with dy/dx (or d2y/dx2, or
d3y/dx3, ...) somewhere inside it.

## Where does it come from?

Think of what a derivative means: **dy/dx is the rate at which y changes as x
changes.** So a differential equation is a sentence about how fast something is
changing.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   ENGLISH SENTENCE                    DIFFERENTIAL EQUATION        |
  |   ------------------------------      ----------------------      |
  |   "y grows at a rate equal to y"      dy/dx = y                    |
  |                                                                   |
  |   "the slope at any point is 2x"      dy/dx = 2x                   |
  |                                                                   |
  |   "a body cools at a rate            dT/dt = -k(T - S)            |
  |    proportional to how much                                       |
  |    hotter it is than the room"                                    |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## Solving one

**Solving** a differential equation means removing the derivative and ending up
with an ordinary relation between x and y.

```
   Given:      dy/dx = 2x

   Integrate:  y = x^2 + c        <-- this is the SOLUTION
```

Notice the **+ c**. That c is not decoration. It is part of the answer.
Leaving it out loses a mark, every single time.

## Ordinary vs partial

In this chapter every derivative is with respect to ONE variable, so all our
equations are called **ordinary differential equations**. You will never see
partial derivatives in Inter. Do not worry about the word "ordinary".

> **TRAP:** An equation that just contains x and y with no derivative at all
> (like x^2 + y^2 = 25) is NOT a differential equation. It is a *solution* of one.

---

# TOPIC 2 — ORDER AND DEGREE

This is a guaranteed 2-mark question. It takes 30 seconds when you know the rule.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   ORDER   =  the order of the HIGHEST derivative in the equation   |
  |                                                                   |
  |   DEGREE  =  the POWER of that highest derivative,                 |
  |              AFTER the equation has been made free of              |
  |              radicals and fractional powers                        |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**Which derivative is "highest"?**

```
   dy/dx        is order 1
   d2y/dx2      is order 2      <-- higher than dy/dx
   d3y/dx3      is order 3      <-- higher than d2y/dx2
```

The order does NOT care about powers. d3y/dx3 beats (dy/dx)^100.

## WORKED EXAMPLE 2.1

Find the order and degree of

```
   d2y/dx2  +  3 (dy/dx)^2  -  5y  =  0
```

**Step 1 — any roots or fractional powers?** No. Nothing to clear.

**Step 2 — highest derivative?** d2y/dx2. So **order = 2**.

**Step 3 — what power is it raised to?** It appears as (d2y/dx2)^1.
So **degree = 1**.

The (dy/dx)^2 is a red herring. It is not the highest derivative, so its power
is irrelevant.

**ANSWER: order 2, degree 1.**

## WORKED EXAMPLE 2.2

```
   (d2y/dx2)^3  +  (dy/dx)^5  +  y  =  0
```

Highest derivative is d2y/dx2 → order 2.
Its power is 3 → degree 3.

**ANSWER: order 2, degree 3.**

## WORKED EXAMPLE 2.3 — the one with a square root

```
   sqrt( 1 + (dy/dx)^2 )  =  d2y/dx2
```

**Step 1 — CLEAR THE RADICAL FIRST.** Square both sides:

```
   1 + (dy/dx)^2  =  (d2y/dx2)^2
```

**Step 2 —** highest derivative d2y/dx2 → order 2.

**Step 3 —** its power is now 2 → degree 2.

**ANSWER: order 2, degree 2.**

> **TRAP:** If you had read the degree off the ORIGINAL equation you would have
> said degree 1. That is wrong and it is the commonest error in this chapter.
> **Clear the roots first. Always.**

## WORKED EXAMPLE 2.4 — a fractional power

```
   [ 1 + (dy/dx)^2 ]^(3/2)  =  a (d2y/dx2)
```

The fractional power 3/2 must go. Square both sides (that clears the halves):

```
   [ 1 + (dy/dx)^2 ]^3  =  a^2 (d2y/dx2)^2
```

Order = 2. The power of d2y/dx2 is now 2 → degree = 2.

**ANSWER: order 2, degree 2.**

## WORKED EXAMPLE 2.5 — the nasty AP favourite

```
   [ (d2y/dx2)^2  +  (dy/dx)^3 ]^(6/5)  =  6 y
```

**Step 1 — kill the 6/5.** Raise both sides to the power 5:

```
   [ (d2y/dx2)^2  +  (dy/dx)^3 ]^6  =  (6y)^5  =  7776 y^5
```

**Step 2 —** now expand only in your head far enough to find the biggest power
of d2y/dx2. The largest term of the bracket, raised to the 6th power, is

```
   [ (d2y/dx2)^2 ]^6  =  (d2y/dx2)^12
```

Order = 2, degree = 12.

**ANSWER: order 2, degree 12.**

## WORKED EXAMPLE 2.6 — degree NOT DEFINED

```
   d2y/dx2  +  sin( dy/dx )  =  0
```

Here dy/dx is trapped inside a sine. There is no algebraic way to pull it out,
so the equation can never be written as a polynomial in the derivatives.

**ANSWER: order 2, degree not defined.**

Same story for these:

| Equation | Order | Degree |
|----------|-------|--------|
| dy/dx + sin(dy/dx) = 0 | 1 | not defined |
| d2y/dx2 + e^(dy/dx) = 0 | 2 | not defined |
| dy/dx + log(dy/dx) = x | 1 | not defined |
| d2y/dx2 + cos(d2y/dx2) = 5 | 2 | not defined |

```
  +--------------------------------------------------------------------+
  |  RULE:  If a derivative sits inside  sin, cos, tan, log, e^( )      |
  |         or any function you cannot algebraically undo,             |
  |         then the DEGREE IS NOT DEFINED.                            |
  |         The ORDER is still perfectly fine — just read it off.      |
  +--------------------------------------------------------------------+
```

> **TRAP:** sin x or e^x on their own are harmless. It is only a problem when
> the DERIVATIVE is inside them. dy/dx = sin x has degree 1. dy/dx = sin(dy/dx)
> has no degree.

## MORE PRACTICE, ANSWERS BESIDE THEM

| Equation | Order | Degree |
|----------|-------|--------|
| dy/dx + y = x^2 | 1 | 1 |
| (dy/dx)^4 + y = 0 | 1 | 4 |
| d3y/dx3 + 2(d2y/dx2)^5 = 0 | 3 | 1 |
| (d3y/dx3)^2 - 3(dy/dx)^2 - e^x = 4 | 3 | 2 |
| x (d2y/dx2) + (dy/dx)^3 + y = 0 | 2 | 1 |
| sqrt(dy/dx) = x + y | 1 | 1 (square first: dy/dx = (x+y)^2) |
| (1 + (dy/dx)^2)^(1/2) = x | 1 | 2 |
| d2y/dx2 = (1 + (dy/dx)^2)^(1/3) | 2 | 3 (cube both sides) |

Check that last one: cubing gives (d2y/dx2)^3 = 1 + (dy/dx)^2, so degree 3.

---

# TOPIC 3 — SOLUTIONS: GENERAL AND PARTICULAR

## What counts as a solution

A relation between x and y is a **solution** if substituting it back into the
differential equation makes both sides equal.

## WORKED EXAMPLE 3.1

Show that y = A cos x + B sin x is a solution of d2y/dx2 + y = 0.

```
   y    =  A cos x + B sin x

   y'   =  -A sin x + B cos x

   y''  =  -A cos x - B sin x
        =  -(A cos x + B sin x)
        =  -y

   So   y'' + y  =  -y + y  =  0    TRUE.
```

**Hence it is a solution.**

## General solution vs particular solution

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  GENERAL SOLUTION    still contains the arbitrary constants        |
  |                      e.g.  y = x^2 + c                             |
  |                                                                    |
  |  PARTICULAR SOLUTION  the constants have been pinned down using    |
  |                       extra information given in the question      |
  |                       e.g.  y = x^2 + 3                            |
  |                                                                    |
  |  KEY FACT:  the general solution of an equation of ORDER n         |
  |             contains exactly n arbitrary constants.                |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## WORKED EXAMPLE 3.2

Solve dy/dx = 3x^2 given that y = 5 when x = 1.

```
   dy/dx = 3x^2

   dy = 3x^2 dx

   INT dy = INT 3x^2 dx

   y = x^3 + c                <-- GENERAL solution
```

Now use the extra information x = 1, y = 5:

```
   5 = 1^3 + c   ->   c = 4
```

```
   y = x^3 + 4                <-- PARTICULAR solution
```

**Check:** dy/dx of (x^3 + 4) is 3x^2. Correct. And at x = 1, y = 1 + 4 = 5. Correct.

> **TRAP:** The question will say "find the particular solution" or will give you
> a condition like "y(0) = 2". If you stop at the general solution you lose
> the last two marks. Always look for the extra condition.

---

# TOPIC 4 — FORMING A DIFFERENTIAL EQUATION

This is the reverse job. You are given a family of curves with letters in it
(A, B, c, a, b — the **arbitrary constants**) and asked to produce a differential
equation that has no letters left.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   THE GOLDEN RULE                                                  |
  |                                                                    |
  |   number of arbitrary constants  =  ORDER of the differential      |
  |                                     equation you will get          |
  |                                                                    |
  |   So: differentiate exactly that many times, then eliminate        |
  |       the constants between the equations you now have.            |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**Do NOT count x, y, or genuine numbers as arbitrary constants.**
Only the free letters count.

## WORKED EXAMPLE 4.1 — one constant

Form the differential equation of the family y = c x.

**Step 1 — count constants.** One (that is c). So we differentiate ONCE and the
answer will be order 1.

**Step 2 — differentiate.**

```
   y = c x
   dy/dx = c
```

**Step 3 — eliminate c.** We already have c = dy/dx. Put it into the original:

```
   y = x (dy/dx)
```

**ANSWER:**

```
   x (dy/dx) - y = 0
```

**Check by substituting back:** y = cx gives dy/dx = c, so x(c) - cx = 0. Correct.

## WORKED EXAMPLE 4.2 — circles about the origin

Form the D.E. of the family x^2 + y^2 = a^2.

One constant (a). Differentiate once with respect to x:

```
   2x + 2y (dy/dx) = 0
```

Divide by 2:

```
   x + y (dy/dx) = 0
```

The constant a has vanished on its own, because it was a^2 (a constant) whose
derivative is 0. Nothing more to do.

**ANSWER: x + y (dy/dx) = 0.**

## WORKED EXAMPLE 4.3 — two constants

Form the D.E. of y = A cos 3x + B sin 3x.

**Step 1 — two constants → differentiate twice → order 2.**

```
   y   =  A cos 3x + B sin 3x

   y'  =  -3A sin 3x + 3B cos 3x

   y'' =  -9A cos 3x - 9B sin 3x
       =  -9 (A cos 3x + B sin 3x)
       =  -9 y
```

**ANSWER:**

```
   d2y/dx2 + 9y = 0
```

**Check:** if y = A cos3x + B sin3x, we showed y'' = -9y, so y'' + 9y = 0. Correct.

## WORKED EXAMPLE 4.4 — two constants, needs real elimination

Form the D.E. of y = a x^2 + b x.

Two constants → differentiate twice.

```
   y   =  a x^2 + b x            .... (1)

   y'  =  2 a x + b              .... (2)

   y'' =  2 a                    .... (3)
```

From (3):

```
              y''
      a  =  -------
               2
```

Put that into (2) to get b:

```
   b  =  y' - 2 a x  =  y' - 2 x (y''/2)  =  y' - x y''
```

Now put a and b into (1):

```
   y  =  (y''/2) x^2  +  (y' - x y'') x

      =  (x^2 y'')/2  +  x y'  -  x^2 y''

      =  x y'  -  (x^2 y'')/2
```

Multiply everything by 2:

```
   2 y  =  2 x y'  -  x^2 y''
```

**ANSWER:**

```
   x^2 (d2y/dx2)  -  2x (dy/dx)  +  2y  =  0
```

**Check with y = x^2** (that is a = 1, b = 0): y' = 2x, y'' = 2.
x^2(2) - 2x(2x) + 2x^2 = 2x^2 - 4x^2 + 2x^2 = 0. Correct.
**Check with y = x** (a = 0, b = 1): y' = 1, y'' = 0.
0 - 2x(1) + 2x = 0. Correct.

## WORKED EXAMPLE 4.5 — the classic AP question

Form the D.E. corresponding to x y = a e^x + b e^(-x).

Two constants → differentiate twice.

```
   x y  =  a e^x + b e^(-x)                 .... (1)
```

Differentiate (1). The left side needs the product rule:

```
   x y' + y  =  a e^x - b e^(-x)            .... (2)
```

Differentiate (2). Left side product rule again:

```
   x y'' + y' + y'  =  a e^x + b e^(-x)

   x y'' + 2 y'     =  a e^x + b e^(-x)     .... (3)
```

But the right side of (3) is exactly the right side of (1), which equals x y.

```
   x y'' + 2 y'  =  x y
```

**ANSWER:**

```
   x (d2y/dx2)  +  2 (dy/dx)  -  x y  =  0
```

## WORKED EXAMPLE 4.6 — constant hidden in an exponent

Form the D.E. of y = c e^(3x).

```
   y  =  c e^(3x)

   y' =  3 c e^(3x)  =  3 y        (because c e^(3x) is just y)
```

**ANSWER: dy/dx - 3y = 0.**

This trick — spotting that part of the derivative is the original y — saves
enormous time. Look for it every time you see an exponential.

## WORKED EXAMPLE 4.7 — a constant that appears twice

Form the D.E. of y = c (x - c)^2.

Only ONE constant, so the answer has order 1 — but the elimination is harder
because c sits in two places.

```
   y   =  c (x - c)^2                     .... (1)

   y'  =  2 c (x - c)                     .... (2)
```

Divide (1) by (2):

```
      y        c (x - c)^2         x - c
   -------  =  -------------  =  ---------
      y'       2 c (x - c)            2

   so    x - c  =  2y / y'      and    c  =  x - 2y/y'
```

Now put x - c = 2y/y' into (2):

```
   y'  =  2 c (2y / y')

   (y')^2  =  4 c y      ->     c  =  (y')^2 / (4y)
```

Two expressions for c must be equal:

```
     (y')^2            2y
   ---------  =  x  -  ----
      4 y               y'
```

Multiply everything by 4 y y':

```
   (y')^3  =  4 x y y'  -  8 y^2
```

**ANSWER:**

```
   (dy/dx)^3  =  4 x y (dy/dx)  -  8 y^2
```

**Check with c = 1**, i.e. y = (x - 1)^2, y' = 2(x - 1):
LHS = 8(x-1)^3.
RHS = 4x(x-1)^2 · 2(x-1) - 8(x-1)^4 = 8(x-1)^3 [ x - (x-1) ] = 8(x-1)^3. Correct.

> **TRAP:** Note this equation has ORDER 1 but DEGREE 3. One constant always
> gives order 1, but it says nothing about the degree.

## The recipe in four lines

```
  +--------------------------------------------------------------------+
  |  1. Count the arbitrary constants.  Call it n.                     |
  |  2. Differentiate the given relation n times.                      |
  |  3. You now have n + 1 equations. Eliminate the n constants.       |
  |  4. Answer must contain x, y and derivatives ONLY. No letters.     |
  +--------------------------------------------------------------------+
```

---

# TOPIC 5 — VARIABLES SEPARABLE (the mother method)

This is the method everything else reduces to. Master it first.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  IF you can rearrange the equation into                            |
  |                                                                    |
  |        f(y) dy  =  g(x) dx                                         |
  |                                                                    |
  |  (all the y's with the dy, all the x's with the dx)                |
  |                                                                    |
  |  THEN just integrate both sides:                                   |
  |                                                                    |
  |        INT f(y) dy  =  INT g(x) dx  +  c                           |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## How to spot it

The right-hand side factorises into (something in x) times (something in y),
or it is entirely in x, or entirely in y.

```
   dy/dx = x^2 y            ->  yes, x^2 times y
   dy/dx = e^(x+y)          ->  yes, e^x times e^y
   dy/dx = (1+y^2)/(1+x^2)  ->  yes
   dy/dx = x + y            ->  NO, cannot be split
```

## WORKED EXAMPLE 5.1 (the simplest possible)

Solve dy/dx = x^2 y.

```
   dy/dx  =  x^2 y

   dy / y  =  x^2 dx                 <-- divided both sides by y, times dx

   INT dy/y  =  INT x^2 dx

   log|y|  =  x^3/3  +  c
```

**ANSWER: log|y| = x^3/3 + c.**

You may also write y = A e^(x^3 / 3) where A = e^c.

**Check:** y = A e^(x^3/3), so dy/dx = A e^(x^3/3) · x^2 = x^2 y. Correct.

## WORKED EXAMPLE 5.2

Solve dy/dx = (1 + y^2) / (1 + x^2).

```
      dy          dx
   --------  =  --------
   1 + y^2      1 + x^2
```

Integrate both sides:

```
   tan^-1 (y)  =  tan^-1 (x)  +  c
```

**ANSWER: tan^-1 y = tan^-1 x + c.**

**Check:** differentiate. 1/(1+y^2) · dy/dx = 1/(1+x^2), so dy/dx = (1+y^2)/(1+x^2).
Correct.

## WORKED EXAMPLE 5.3 — exponentials

Solve dy/dx = e^(x + y).

**Step 1 — split the exponential.** e^(x+y) = e^x · e^y. That is the whole trick.

```
   dy/dx  =  e^x e^y

   dy / e^y  =  e^x dx

   e^(-y) dy  =  e^x dx
```

**Step 2 — integrate.**

```
   INT e^(-y) dy  =  INT e^x dx

   - e^(-y)  =  e^x  +  c
```

Multiply by -1 and rename the constant:

```
   e^x  +  e^(-y)  =  c
```

**ANSWER: e^x + e^(-y) = c.**

**Check:** differentiate: e^x - e^(-y) dy/dx = 0, so dy/dx = e^x / e^(-y) = e^x e^y
= e^(x+y). Correct.

## WORKED EXAMPLE 5.4 — the inverse-sine one

Solve sqrt(1 - x^2) dy + sqrt(1 - y^2) dx = 0.

Divide the whole equation by sqrt(1 - x^2) · sqrt(1 - y^2):

```
        dy                  dx
   -------------   +   -------------   =   0
   sqrt(1 - y^2)       sqrt(1 - x^2)
```

Now every term has only one variable. Integrate:

```
   sin^-1 (y)  +  sin^-1 (x)  =  c
```

**ANSWER: sin^-1 x + sin^-1 y = c.**

## WORKED EXAMPLE 5.5 — an AP favourite with integration by parts

Solve

```
   dy        x (2 log x + 1)
   --  =  ---------------------
   dx      sin y  +  y cos y
```

**Step 1 — separate.**

```
   (sin y + y cos y) dy  =  x (2 log x + 1) dx
```

**Step 2 — integrate the LEFT side.**

```
   INT sin y dy  +  INT y cos y dy
```

The second one needs integration by parts with u = y, dv = cos y dy:

```
   INT y cos y dy  =  y sin y  -  INT sin y dy  =  y sin y + cos y
```

So the left side total is:

```
   - cos y  +  y sin y  +  cos y   =   y sin y
```

Beautiful — the cosines cancel.

**Step 3 — integrate the RIGHT side.**

```
   INT (2 x log x  +  x) dx  =  2 INT x log x dx  +  INT x dx
```

For INT x log x dx use parts with u = log x, dv = x dx:

```
                        x^2              x^2   1
   INT x log x dx  =   ----- log x  -  INT --- . --- dx
                         2               2     x

                       x^2              x
                   =  ----- log x  - INT --- dx
                        2               2

                       x^2             x^2
                   =  ----- log x  -  -----
                        2               4
```

Therefore:

```
   2 INT x log x dx  =  x^2 log x  -  x^2 / 2
```

And INT x dx = x^2 / 2. Adding:

```
   x^2 log x  -  x^2/2  +  x^2/2   =   x^2 log x
```

Beautiful again — the x^2/2 terms cancel.

**ANSWER:**

```
   y sin y  =  x^2 log x  +  c
```

## WORKED EXAMPLE 5.6 — the completing-the-square one

Solve dy/dx + (y^2 + y + 1)/(x^2 + x + 1) = 0.

**Step 1 — separate.**

```
      dy                dx
   ----------  =  -  ----------
   y^2 + y + 1       x^2 + x + 1
```

**Step 2 — complete the square in each denominator.**

```
   y^2 + y + 1  =  (y + 1/2)^2  +  3/4
```

Recall the standard integral:

```
        dt              1        -1  ( t )
   INT ------- dt  =  -----  tan    ( - )
       t^2 + a^2         a           ( a )
```

Here a = sqrt(3)/2, so:

```
        dy            1          -1  ( y + 1/2 )        2         -1 ( 2y + 1 )
   INT --------- =  -------- tan    ( -------- ) =  ------- tan     ( ------- )
       y^2+y+1      sqrt3/2         ( sqrt3/2 )      sqrt3         ( sqrt3   )
```

The x-side is identical in shape.

**Step 3 — put it together.**

```
     2         -1 ( 2y + 1 )        2         -1 ( 2x + 1 )
   ----- tan     ( ------- )  =  - ----- tan     ( ------- )  +  c
   sqrt3         ( sqrt3   )       sqrt3         ( sqrt3   )
```

Multiply through by sqrt(3)/2 and rename the constant:

```
     -1 ( 2x + 1 )        -1 ( 2y + 1 )
  tan   ( ------- )  +  tan   ( ------- )  =  c
        ( sqrt3   )           ( sqrt3   )
```

**ANSWER: tan^-1((2x+1)/sqrt3) + tan^-1((2y+1)/sqrt3) = c.**

> **TRAP:** After integrating you MUST add + c. If you are separating a fraction,
> a good habit is to write "+ c" on the right the instant you write the integral
> signs, before you do any work at all.

## A time-saving habit

If the answer is going to have lots of logs, write the constant as **log c**
instead of c. Then:

```
   log|y|  =  log|x|  +  log c      ->     y = c x
```

instead of the ugly y = e^(log x + c). This is allowed and examiners like it.

---

# TOPIC 6 — REDUCIBLE TO SEPARABLE:  v = a x + b y + c

Sometimes the equation refuses to separate, but the whole right-hand side is a
function of ONE bracket, like (x + y) or (2x - 3y + 1).

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  IF     dy/dx  =  f( a x + b y + c )                               |
  |                                                                    |
  |  PUT    v  =  a x + b y + c                                        |
  |                                                                    |
  |  THEN   dv/dx  =  a  +  b (dy/dx)                                  |
  |                                                                    |
  |         so   dy/dx  =  ( dv/dx  -  a ) / b                         |
  |                                                                    |
  |  Substitute. The result ALWAYS separates.                          |
  |  At the end, put v = a x + b y + c back.                           |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## WORKED EXAMPLE 6.1

Solve dy/dx = (x + y)^2.

**Step 1 — choose the substitution.** The bracket is x + y, so put

```
   v  =  x + y
```

**Step 2 — differentiate the substitution.**

```
   dv/dx  =  1  +  dy/dx        ->      dy/dx  =  dv/dx  -  1
```

**Step 3 — substitute into the equation.**

```
   dv/dx  -  1  =  v^2

   dv/dx  =  1 + v^2
```

**Step 4 — separate and integrate.**

```
      dv
   --------  =  dx
   1 + v^2

   tan^-1 (v)  =  x  +  c
```

**Step 5 — put v back.**

```
   tan^-1 (x + y)  =  x  +  c
```

**ANSWER: tan^-1(x + y) = x + c, or equivalently x + y = tan(x + c).**

**Check:** from x + y = tan(x+c), differentiate: 1 + dy/dx = sec^2(x+c)
= 1 + tan^2(x+c) = 1 + (x+y)^2. So dy/dx = (x+y)^2. Correct.

## WORKED EXAMPLE 6.2

Solve dy/dx = sin(x + y) + cos(x + y).

Put v = x + y, so dy/dx = dv/dx - 1.

```
   dv/dx - 1  =  sin v + cos v

   dv/dx  =  1 + sin v + cos v

        dv
   -------------------  =  dx
   1 + sin v + cos v
```

Use the half-angle substitutions sin v = 2 sin(v/2) cos(v/2) and
1 + cos v = 2 cos^2(v/2):

```
   1 + sin v + cos v  =  2 cos^2(v/2)  +  2 sin(v/2) cos(v/2)

                      =  2 cos(v/2) [ cos(v/2) + sin(v/2) ]
```

So

```
                dv
   INT ------------------------------  =  INT dx
       2 cos(v/2)[cos(v/2)+sin(v/2)]
```

Divide top and bottom by cos^2(v/2):

```
          (1/2) sec^2(v/2) dv
   INT  ------------------------  =  INT dx
            1 + tan(v/2)
```

Now put t = 1 + tan(v/2). Then dt = (1/2) sec^2(v/2) dv — exactly the numerator.

```
   INT dt / t  =  INT dx

   log | t |  =  x + c

   log | 1 + tan(v/2) |  =  x + c
```

**ANSWER: log |1 + tan((x + y)/2)| = x + c.**

## WORKED EXAMPLE 6.3 — the AP standard one

Solve

```
   dy       4x + 6y + 5
   --  =  --------------
   dx       3y + 2x + 4
```

**Step 1 — look for a common bracket.**
Numerator: 4x + 6y + 5 = 2(2x + 3y) + 5.
Denominator: 2x + 3y + 4.
Both contain **2x + 3y**. So put

```
   v  =  2x + 3y
```

Then the equation reads

```
   dy       2v + 5
   --  =  ---------
   dx       v + 4
```

**Step 2 — differentiate the substitution.**

```
   dv/dx  =  2  +  3 (dy/dx)
```

**Step 3 — substitute.**

```
   dv           ( 2v + 5 )
   --  =  2 + 3 ( ------- )
   dx           (  v + 4 )

          2(v + 4)  +  3(2v + 5)
       =  ------------------------
                  v + 4

          2v + 8 + 6v + 15
       =  -------------------
                v + 4

          8v + 23
       =  ---------
           v + 4
```

**Step 4 — separate.**

```
    v + 4
   --------  dv   =   dx
   8v + 23
```

**Step 5 — do the division on the left.** Write v + 4 as a multiple of 8v + 23:

```
   v + 4  =  (1/8)(8v + 32)  =  (1/8)[ (8v + 23) + 9 ]
```

So

```
    v + 4          1            9
   --------  =   -----  +  -------------
   8v + 23         8        8(8v + 23)
```

**Step 6 — integrate.**

```
    v          9
   ---  +  ------- log | 8v + 23 |   =   x  +  c
    8        64
```

Multiply everything by 64:

```
   8 v  +  9 log | 8v + 23 |  =  64 x  +  c
```

**Step 7 — put v = 2x + 3y back.**

```
   8(2x + 3y)  +  9 log | 8(2x + 3y) + 23 |  =  64 x  +  c

   16x + 24y  +  9 log | 16x + 24y + 23 |  =  64x  +  c

   24y - 48x  +  9 log | 16x + 24y + 23 |  =  c
```

Divide by 3:

```
   8y  -  16x  +  3 log | 16x + 24y + 23 |  =  c
```

**ANSWER: 8y - 16x + 3 log|16x + 24y + 23| = c.**

> **TRAP:** In step 5, do not try to integrate (v+4)/(8v+23) directly. When the
> top and bottom are both linear, ALWAYS force the top to look like the bottom
> first. That converts it into "constant + constant/(linear)", both of which
> you can integrate instantly.

---

# TOPIC 7 — HOMOGENEOUS EQUATIONS

## What "homogeneous" means (in plain English)

A function is homogeneous of degree n if **every term has the same total power**
when you add up the powers of x and y.

```
   x^2 + 3xy + y^2       ->  powers: 2, 1+1=2, 2       ALL 2   -> homogeneous
   x^3 + x y^2 - y^3     ->  powers: 3, 1+2=3, 3       ALL 3   -> homogeneous
   x^2 + y               ->  powers: 2, 1              NOT the same -> not
   x^2 + 3x y + 5        ->  powers: 2, 2, 0           NOT the same -> not
```

A differential equation dy/dx = f(x,y) / g(x,y) is **homogeneous** if f and g are
both homogeneous **of the same degree**.

## The three-second test

Replace x by kx and y by ky everywhere. If every k cancels out, it is homogeneous.

```
   dy       x^2 + y^2                (kx)^2 + (ky)^2       k^2 (x^2 + y^2)
   --  =  -----------      ->       ----------------  =  ------------------
   dx        2 x y                     2 (kx)(ky)             k^2 (2xy)
```

The k^2 cancels. **Homogeneous.**

## The method

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   HOMOGENEOUS EQUATION                                             |
  |                                                                    |
  |   PUT       y  =  v x        (so v = y/x)                          |
  |                                                                    |
  |   THEN      dy          dv                                         |
  |             --  =  v +  --  x                                      |
  |             dx          dx                                         |
  |                                                                    |
  |   Substitute. The x's cancel, leaving an equation in v and x only.  |
  |   That equation ALWAYS separates.                                   |
  |                                                                    |
  |   FINALLY   replace  v  by  y/x .   DO NOT FORGET THIS.            |
  |                                                                    |
  +--------------------------------------------------------------------+
```

Why does dy/dx = v + x dv/dx? Because y = v·x is a product, and v depends on x:

```
   d(vx)/dx  =  v · d(x)/dx  +  x · d(v)/dx  =  v  +  x dv/dx
```

That is just the product rule. Write it out once and you will never forget it.

## WORKED EXAMPLE 7.1

Solve 2 x y (dy/dx) = x^2 + y^2.

**Step 0 — check.** Both sides are degree 2. Homogeneous. Good.

**Step 1 — make dy/dx the subject.**

```
   dy      x^2 + y^2
   --  =  -----------
   dx        2 x y
```

**Step 2 — put y = v x, dy/dx = v + x dv/dx.**

```
            dv       x^2 + v^2 x^2         x^2 (1 + v^2)        1 + v^2
   v  +  x  --  =  -----------------  =  ----------------  =  ---------
            dx        2 x (v x)              2 v x^2              2 v
```

The x^2 cancelled. That is the whole point of the substitution.

**Step 3 — get x dv/dx alone.**

```
      dv      1 + v^2               1 + v^2  -  2 v^2         1 - v^2
   x  --  =  ---------  -  v   =   -------------------   =   ---------
      dx        2 v                       2 v                   2 v
```

**Step 4 — separate.**

```
    2 v            dx
   --------  dv  =  ----
   1 - v^2           x
```

**Step 5 — integrate.** On the left let u = 1 - v^2, so du = -2v dv:

```
   INT 2v dv/(1 - v^2)  =  - INT du/u  =  - log | u |  =  - log | 1 - v^2 |
```

So

```
   - log | 1 - v^2 |  =  log | x |  +  log c

   0  =  log | x |  +  log | 1 - v^2 |  +  log c

   log | c x (1 - v^2) |  =  0
```

which means

```
   x ( 1 - v^2 )  =  C          (C is a new constant)
```

**Step 6 — put v = y/x back.**

```
        (      y^2 )
   x    ( 1 - ----- )  =  C
        (      x^2 )

     x^2 - y^2
   -------------  =  C
        x
```

**ANSWER: x^2 - y^2 = C x.**

**Check:** differentiate x^2 - y^2 = Cx:

```
   2x - 2y (dy/dx)  =  C  =  (x^2 - y^2)/x

   multiply by x:   2x^2 - 2xy (dy/dx)  =  x^2 - y^2

                    x^2 + y^2  =  2 x y (dy/dx)      <-- the original equation
```

Correct.

## WORKED EXAMPLE 7.2 — with a trig function

Solve dy/dx = y/x + tan(y/x).

**Step 1 — it is already written in terms of y/x, so it is homogeneous.**

Put y = vx, dy/dx = v + x dv/dx:

```
          dv
   v + x  --  =  v  +  tan v
          dx
```

The v's on both sides cancel:

```
      dv
   x  --  =  tan v
      dx
```

**Step 2 — separate.**

```
     dv          dx
   ------  =    ----
   tan v          x

   cot v dv  =  dx / x
```

**Step 3 — integrate.**

```
   log | sin v |  =  log | x |  +  log c

   sin v  =  c x
```

**Step 4 — put v = y/x back.**

**ANSWER: sin(y/x) = c x.**

## WORKED EXAMPLE 7.3 — the big AP 7-mark one

Solve (x^3 + 3 x y^2) dx + (y^3 + 3 x^2 y) dy = 0.

**Step 0 — check.** Every term is degree 3. Homogeneous.

**Step 1 — make dy/dx the subject.**

```
   dy          x^3 + 3 x y^2
   --  =  -  -----------------
   dx          y^3 + 3 x^2 y
```

**Step 2 — put y = v x.** Every x becomes x^3:

```
   numerator   =  x^3 + 3x(v^2 x^2)  =  x^3 (1 + 3 v^2)

   denominator =  v^3 x^3 + 3 x^2 (v x)  =  x^3 (v^3 + 3 v)
```

```
          dv          1 + 3 v^2
   v + x  --  =  -  -------------
          dx          v^3 + 3 v
```

**Step 3 — isolate x dv/dx.**

```
      dv        1 + 3v^2                  -(1 + 3v^2)  -  v(v^3 + 3v)
   x  --  =  - ----------  -  v    =    -------------------------------
      dx       v^3 + 3v                          v^3 + 3v

                                          -(1 + 3v^2 + v^4 + 3v^2)
                                     =   ---------------------------
                                                v^3 + 3v

                                          -(v^4 + 6v^2 + 1)
                                     =   -------------------
                                             v^3 + 3v
```

**Step 4 — separate.**

```
    v^3 + 3v                dx
   --------------  dv  =  - ----
   v^4 + 6v^2 + 1            x
```

**Step 5 — spot the derivative trick.** Differentiate the bottom of the left side:

```
   d
   -- ( v^4 + 6v^2 + 1 )  =  4v^3 + 12 v  =  4 ( v^3 + 3 v )
   dv
```

The top is exactly one quarter of that. So the left integral is

```
   (1/4) log | v^4 + 6v^2 + 1 |
```

**Step 6 — integrate.**

```
   (1/4) log | v^4 + 6 v^2 + 1 |  =  - log | x |  +  c

   log | v^4 + 6 v^2 + 1 |  +  4 log | x |  =  c'

   log | x^4 ( v^4 + 6 v^2 + 1 ) |  =  c'

   x^4 ( v^4 + 6 v^2 + 1 )  =  C
```

**Step 7 — put v = y/x back.**

```
        (  y^4        y^2      )
   x^4  ( -----  +  6 -----  + 1 )  =  C
        (  x^4        x^2      )

   y^4  +  6 x^2 y^2  +  x^4  =  C
```

**ANSWER: x^4 + 6 x^2 y^2 + y^4 = C.**

## WORKED EXAMPLE 7.4 — the square-root one

Solve x dy - y dx = sqrt(x^2 + y^2) dx.

**Step 1 — rearrange to dy/dx.**

```
   x dy  =  [ y  +  sqrt(x^2 + y^2) ] dx

   dy       y  +  sqrt(x^2 + y^2)
   --  =  ------------------------
   dx                x
```

Degree 1 on top (a square root of degree-2 things is degree 1) and degree 1
below. Homogeneous.

**Step 2 — put y = v x** (take x > 0, so sqrt(x^2) = x):

```
          dv       v x  +  sqrt(x^2 + v^2 x^2)       v x  +  x sqrt(1 + v^2)
   v + x  --  =  -----------------------------  =  -------------------------
          dx                  x                              x

                =  v  +  sqrt(1 + v^2)
```

**Step 3 — the v's cancel.**

```
      dv
   x  --  =  sqrt( 1 + v^2 )
      dx
```

**Step 4 — separate and integrate.**

```
        dv               dx
   ---------------  =   ----
   sqrt(1 + v^2)          x

   log | v  +  sqrt(1 + v^2) |  =  log | x |  +  log c
```

(That left integral is a standard one: INT dv/sqrt(v^2 + a^2) = log|v + sqrt(v^2+a^2)|.)

```
   v  +  sqrt(1 + v^2)  =  c x
```

**Step 5 — put v = y/x back.**

```
    y         (      y^2 )
   ---  +  sqrt( 1 + ----- )  =  c x
    x         (      x^2 )

    y        sqrt(x^2 + y^2)
   ---  +  ------------------  =  c x
    x              x
```

Multiply by x:

```
   y  +  sqrt(x^2 + y^2)  =  c x^2
```

**ANSWER: y + sqrt(x^2 + y^2) = c x^2.**

## WORKED EXAMPLE 7.5

Solve dy/dx = (x - y)/(x + y).

Homogeneous (degree 1 top and bottom). Put y = vx:

```
          dv       x - v x       1 - v
   v + x  --  =  ----------  =  -------
          dx       x + v x       1 + v

      dv      1 - v              1 - v  -  v(1 + v)         1 - 2v - v^2
   x  --  =  -------  -  v  =  ----------------------  =  ---------------
      dx      1 + v                   1 + v                   1 + v
```

Separate:

```
      1 + v                dx
   -------------  dv  =   ----
   1 - 2v - v^2             x
```

Now note d/dv (1 - 2v - v^2) = -2 - 2v = -2(1 + v). So the left integral is

```
   - (1/2) log | 1 - 2v - v^2 |
```

Hence

```
   - (1/2) log | 1 - 2v - v^2 |  =  log | x |  +  c

   log | 1 - 2v - v^2 |  +  2 log | x |  =  c'

   x^2 ( 1 - 2v - v^2 )  =  C
```

Put v = y/x:

```
        (       2y      y^2 )
   x^2  ( 1  -  ---  -  --- )  =  C
        (        x      x^2 )

   x^2  -  2 x y  -  y^2  =  C
```

**ANSWER: x^2 - 2xy - y^2 = C.**

**Check:** differentiate: 2x - 2y - 2x(dy/dx) - 2y(dy/dx) = 0
→ (x - y) = (x + y)(dy/dx) → dy/dx = (x-y)/(x+y). Correct.

> **TRAP 1:** If you finish with an answer still containing v, you have not
> answered the question. **Always** substitute v = y/x back.

> **TRAP 2:** If the v's do NOT cancel after substituting, you have made an
> algebra slip, or the equation was not homogeneous in the first place.
> Stop and check the degrees again.

---

# TOPIC 8 — NON-HOMOGENEOUS EQUATIONS

These look homogeneous except that constants are spoiling it:

```
   dy       a x  +  b y  +  c
   --  =  ---------------------
   dx       A x  +  B y  +  C
```

The +c and +C are what stop it being homogeneous. Our job is to get rid of them.

**Everything depends on ONE test:**

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     Compare    a / A     with     b / B                            |
  |                                                                    |
  |     NOT EQUAL  ->  the two lines INTERSECT   ->  CASE 1            |
  |                    shift the origin to the meeting point           |
  |                                                                    |
  |     EQUAL      ->  the two lines are PARALLEL ->  CASE 2           |
  |                    put v = a x + b y                               |
  |                                                                    |
  +--------------------------------------------------------------------+
```

A quicker way to remember the test: the lines are parallel exactly when
a B - A b = 0.

## CASE 1 — lines intersect: shift the origin

```
  +--------------------------------------------------------------------+
  |  1. Solve  a x + b y + c = 0  and  A x + B y + C = 0  together.     |
  |     Say the solution is  x = h , y = k .                            |
  |                                                                    |
  |  2. Put   x = X + h ,   y = Y + k .                                |
  |     Then  dx = dX ,  dy = dY , so   dy/dx = dY/dX .                 |
  |                                                                    |
  |  3. The constants vanish and you get a HOMOGENEOUS equation in      |
  |     X and Y.  Solve it with  Y = v X .                             |
  |                                                                    |
  |  4. At the end put  X = x - h  and  Y = y - k .                    |
  +--------------------------------------------------------------------+
```

Why does it work? h and k were chosen precisely so that a h + b k + c = 0.
So when you expand a(X+h) + b(Y+k) + c you get aX + bY + (ah + bk + c) = aX + bY.
The constant is gone.

## WORKED EXAMPLE 8.1

Solve

```
   dy       2x + y - 3
   --  =  --------------
   dx       x - 2y + 1
```

**Step 1 — apply the test.** a/A = 2/1 = 2. b/B = 1/(-2) = -1/2.
Not equal → **lines intersect → Case 1.**

**Step 2 — find the meeting point.**

```
   2x + y - 3 = 0     .... (i)
    x - 2y + 1 = 0    .... (ii)
```

From (ii): x = 2y - 1. Put into (i):

```
   2(2y - 1) + y - 3  =  0
   4y - 2 + y - 3     =  0
   5y - 5             =  0
   y = 1        and then     x = 2(1) - 1 = 1
```

So h = 1, k = 1.

**Step 3 — shift.** Put x = X + 1, y = Y + 1. Then

```
   2x + y - 3  =  2(X+1) + (Y+1) - 3  =  2X + Y

   x - 2y + 1  =  (X+1) - 2(Y+1) + 1  =  X - 2Y
```

```
   dY       2X + Y
   --  =  ----------
   dX       X - 2Y
```

Homogeneous, as promised.

**Step 4 — put Y = v X, dY/dX = v + X dv/dX.**

```
          dv       2X + vX        2 + v
   v + X  --  =  -----------  =  --------
          dX       X - 2vX        1 - 2v

      dv      2 + v                2 + v - v(1 - 2v)         2 + v - v + 2v^2
   X  --  =  --------  -  v   =   -------------------  =   -------------------
      dX      1 - 2v                    1 - 2v                    1 - 2v

                                   2 ( 1 + v^2 )
                                =  ---------------
                                       1 - 2v
```

**Step 5 — separate.**

```
      1 - 2v                dX
   ---------------  dv  =   ----
   2 ( 1 + v^2 )             X
```

**Step 6 — integrate.** Split the left side into two easy pieces:

```
    1     [       dv                2v dv     ]
   ---    [ INT --------   -   INT --------   ]
    2     [      1 + v^2           1 + v^2    ]

    1
 = ---  [  tan^-1 (v)   -   log( 1 + v^2 )  ]
    2
```

So

```
   (1/2) tan^-1 (v)  -  (1/2) log(1 + v^2)  =  log | X |  +  c
```

Multiply by 2:

```
   tan^-1 (v)  -  log(1 + v^2)  =  2 log | X |  +  c'
```

**Step 7 — put v = Y/X.**

```
        -1 ( Y )        (      Y^2 )
   tan     ( - )  -  log( 1 + --- )  =  2 log | X |  +  c'
           ( X )        (     X^2  )

        -1 ( Y )        ( X^2 + Y^2 )
   tan     ( - )  -  log( --------- )  =  2 log | X |  +  c'
           ( X )        (    X^2    )

        -1 ( Y )
   tan     ( - )  -  log(X^2 + Y^2)  +  2 log|X|  =  2 log|X|  +  c'
           ( X )
```

The 2 log|X| terms cancel:

```
        -1 ( Y )
   tan     ( - )  -  log( X^2 + Y^2 )  =  c'
           ( X )
```

**Step 8 — put X = x - 1, Y = y - 1.**

**ANSWER:**

```
        -1 ( y - 1 )
   tan     ( ----- )  -  log[ (x - 1)^2 + (y - 1)^2 ]  =  c
           ( x - 1 )
```

## CASE 2 — lines parallel: put v = a x + b y

When a/A = b/B, the bottom is just a multiple of the top's x-and-y part.
So the ONE bracket a x + b y appears in both. Rename it.

## WORKED EXAMPLE 8.2

Solve

```
   dy         x - y + 3
   --  =  ----------------
   dx       2x - 2y + 5
```

**Step 1 — test.** a/A = 1/2. b/B = (-1)/(-2) = 1/2. **Equal → parallel → Case 2.**

**Step 2 — put v = x - y** (the repeated bracket).

```
   dv/dx  =  1  -  dy/dx        ->      dy/dx  =  1  -  dv/dx
```

**Step 3 — substitute.** Notice 2x - 2y + 5 = 2v + 5 and x - y + 3 = v + 3.

```
        dv       v + 3
   1 -  --  =  ---------
        dx       2v + 5

   dv          v + 3          2v + 5 - v - 3          v + 2
   --  =  1 - -------   =   ------------------  =  ----------
   dx          2v + 5            2v + 5              2v + 5
```

**Step 4 — separate.**

```
   2v + 5
   --------  dv  =  dx
    v + 2
```

**Step 5 — force the top to look like the bottom.**

```
   2v + 5  =  2(v + 2)  +  1

   2v + 5             1
   --------  =  2  + -------
    v + 2             v + 2
```

**Step 6 — integrate.**

```
   2 v  +  log | v + 2 |  =  x  +  c
```

**Step 7 — put v = x - y back.**

```
   2(x - y)  +  log | x - y + 2 |  =  x  +  c

   2x - 2y  +  log | x - y + 2 |  =  x  +  c

   x  -  2y  +  log | x - y + 2 |  =  c
```

**ANSWER: x - 2y + log|x - y + 2| = c.**

**Check.** Differentiate the answer with respect to x, writing u = x - y + 2:

```
                     1 - dy/dx
   1  -  2 dy/dx  +  -----------  =  0
                          u
```

Multiply by u:

```
   u  -  2u (dy/dx)  +  1  -  dy/dx  =  0

   (dy/dx)(2u + 1)  =  u + 1

   dy       u + 1        (x - y + 2) + 1         x - y + 3
   --  =  --------  =  -------------------  =  --------------
   dx      2u + 1      2(x - y + 2) + 1         2x - 2y + 5
```

That is the original equation. Correct.

> **TRAP:** Doing Case 1's origin shift when the lines are parallel will not
> work — the two equations have no solution, so there is no point (h, k) to
> shift to. If you find yourself getting "0 = 5" while solving for h and k,
> that is the signal: switch to Case 2.

---

# TOPIC 9 — LINEAR DIFFERENTIAL EQUATIONS

This is the most important section in the chapter. Read it slowly.

## What "linear" means here

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     dy                                                             |
  |     --   +   P y   =   Q                                           |
  |     dx                                                             |
  |                                                                    |
  |   where P and Q are functions of x ONLY (or constants).            |
  |                                                                    |
  |   The key point:  y appears to the FIRST POWER and nowhere else.   |
  |   No y^2, no sqrt(y), no sin y, no y (dy/dx).                      |
  |                                                                    |
  +--------------------------------------------------------------------+
```

Examples:

```
   dy/dx + 3y = x^2                  LINEAR      (P = 3, Q = x^2)
   dy/dx + y tan x = sin x           LINEAR      (P = tan x, Q = sin x)
   dy/dx + y = y^2                   NOT linear  (y^2 on the right)
   y dy/dx + y = x                   NOT linear  (y multiplies dy/dx)
```

## The method

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  STEP 1   Write it in exactly the form   dy/dx + P y = Q .         |
  |           If there is anything in front of dy/dx, DIVIDE by it.    |
  |                                                                    |
  |  STEP 2   Find the INTEGRATING FACTOR:                             |
  |                                                                    |
  |               IF  =  e^( INT P dx )                                |
  |                                                                    |
  |  STEP 3   Write the solution:                                      |
  |                                                                    |
  |               y (IF)  =  INT  Q (IF) dx   +   c                    |
  |                                                                    |
  |  STEP 4   Divide by IF if the question wants y on its own.         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Why the integrating factor works (one paragraph, then forget it)

Multiply dy/dx + Py = Q by e^(INT P dx). The left side becomes exactly the
derivative of the product y · e^(INT P dx), by the product rule. So the whole
equation becomes d/dx [ y · IF ] = Q · IF, and integrating both sides gives the
formula in Step 3. You never have to reproduce this in the exam — but it is
why the recipe is legal.

## The three integrating factors you MUST recognise instantly

```
  +---------------------------+---------------------------------------+
  |  P                        |  IF = e^(INT P dx)                    |
  +---------------------------+---------------------------------------+
  |  k (a constant)           |  e^(k x)                              |
  |  1/x                      |  e^(log x)  =  x                      |
  |  n/x                      |  e^(n log x)  =  x^n                  |
  |  tan x                    |  e^(log sec x)  =  sec x              |
  |  cot x                    |  e^(log sin x)  =  sin x              |
  |  2x/(1 + x^2)             |  e^(log(1+x^2))  =  1 + x^2           |
  |  1/(1 + x^2)              |  e^(tan^-1 x)                         |
  +---------------------------+---------------------------------------+
```

The reason these are easy: **e^(log A) = A.** Whenever INT P dx comes out as a
logarithm, the IF is just whatever is inside the log.

## WORKED EXAMPLE 9.1 — the simplest kind

Solve dy/dx + (1/x) y = x^2.

**Step 1 — already in standard form.** P = 1/x, Q = x^2.

**Step 2 — integrating factor.**

```
   INT P dx  =  INT (1/x) dx  =  log x

   IF  =  e^(log x)  =  x
```

**Step 3 — the formula.**

```
   y . x  =  INT  x^2 . x dx  +  c

   y x  =  INT x^3 dx  +  c

           x^4
   y x  =  ----  +  c
            4
```

**Step 4 — divide by x.**

```
         x^3        c
   y  =  ----   +  ---
          4         x
```

**ANSWER: y = x^3/4 + c/x.**

**Check:** dy/dx = 3x^2/4 - c/x^2. Then dy/dx + y/x = 3x^2/4 - c/x^2 + x^2/4 + c/x^2
= x^2. Correct.

## WORKED EXAMPLE 9.2 — the tan x classic

Solve dy/dx + y tan x = sin 2x.

**Step 1 — standard form already.** P = tan x, Q = sin 2x.

**Step 2 — integrating factor.**

```
   INT tan x dx  =  log | sec x |

   IF  =  e^(log sec x)  =  sec x
```

**Step 3 — the formula.**

```
   y sec x  =  INT  sin 2x . sec x dx  +  c
```

Now simplify the integrand. Use sin 2x = 2 sin x cos x and sec x = 1/cos x:

```
                      2 sin x cos x
   sin 2x . sec x  =  --------------  =  2 sin x
                          cos x
```

So

```
   y sec x  =  INT 2 sin x dx  +  c  =  - 2 cos x  +  c
```

**Step 4 — multiply by cos x.**

```
   y  =  - 2 cos^2 x  +  c cos x
```

**ANSWER: y = c cos x - 2 cos^2 x.**

**Check:**

```
   y'  =  - c sin x  +  4 cos x sin x

   y tan x  =  (c cos x - 2cos^2 x)(sin x / cos x)  =  c sin x  -  2 sin x cos x

   y' + y tan x  =  4 cos x sin x  -  2 sin x cos x  =  2 sin x cos x  =  sin 2x
```

Correct.

## WORKED EXAMPLE 9.3 — divide first

Solve (1 + x^2) dy/dx + 2 x y = 4 x^2.

**Step 1 — there is (1 + x^2) in front of dy/dx. Divide everything by it.**

```
   dy        2x                4 x^2
   --  +  --------- y   =   ---------
   dx      1 + x^2           1 + x^2
```

So P = 2x/(1+x^2) and Q = 4x^2/(1+x^2).

**Step 2 — integrating factor.** The top 2x is exactly the derivative of the
bottom 1 + x^2, so this is a log:

```
   INT  2x/(1 + x^2) dx  =  log (1 + x^2)

   IF  =  e^( log(1+x^2) )  =  1 + x^2
```

**Step 3 — the formula.**

```
                  4 x^2
   y (1 + x^2)  =  INT ---------  . (1 + x^2) dx   +  c
                  1 + x^2

                =  INT 4 x^2 dx  +  c

                     4 x^3
                =   -------  +  c
                       3
```

**ANSWER:**

```
   y (1 + x^2)  =  (4 x^3)/3  +  c
```

Notice how the (1 + x^2) cancelled inside the integral. This happens constantly —
whenever you divided by something in step 1, the IF often puts it straight back.

## WORKED EXAMPLE 9.4 — a secant-cubed one

Solve cos x (dy/dx) + y sin x = sec^2 x.

**Step 1 — divide by cos x.**

```
   dy      sin x           sec^2 x
   --  +  -------- y  =  ----------  =  sec^3 x
   dx      cos x            cos x

   dy
   --  +  y tan x  =  sec^3 x
   dx
```

**Step 2 — IF = sec x** (same as before, P = tan x).

**Step 3.**

```
   y sec x  =  INT  sec^3 x . sec x dx  +  c  =  INT sec^4 x dx  +  c
```

**Step 4 — do that integral.** Split off one sec^2 x and use
sec^2 x = 1 + tan^2 x:

```
   INT sec^4 x dx  =  INT (1 + tan^2 x) sec^2 x dx
```

Put t = tan x, dt = sec^2 x dx:

```
                   =  INT (1 + t^2) dt  =  t  +  t^3/3

                   =  tan x  +  (tan^3 x)/3
```

**ANSWER:**

```
   y sec x  =  tan x  +  (tan^3 x)/3  +  c
```

## WORKED EXAMPLE 9.5 — constant P

Solve dy/dx - 3y = e^(2x).

P = -3, Q = e^(2x).

```
   INT P dx  =  -3x        IF  =  e^(-3x)

   y e^(-3x)  =  INT e^(2x) . e^(-3x) dx  +  c

              =  INT e^(-x) dx  +  c

              =  - e^(-x)  +  c
```

Multiply by e^(3x):

```
   y  =  - e^(2x)  +  c e^(3x)
```

**ANSWER: y = c e^(3x) - e^(2x).**

**Check:** y' = 3c e^(3x) - 2 e^(2x). Then y' - 3y = 3c e^(3x) - 2e^(2x) - 3c e^(3x)
+ 3 e^(2x) = e^(2x). Correct.

> **TRAP 1:** The equation MUST be written with dy/dx having coefficient 1
> before you read off P. Reading P off "(1+x^2) dy/dx + 2xy = ..." as P = 2x
> is the single most common mistake in the 7-mark question.

> **TRAP 2:** Do not put a "+ c" inside the exponent when computing the IF.
> Only one constant is needed, and it goes at the very end.

---

# TOPIC 10 — LINEAR IN x  (the flipped version)

Sometimes an equation is horrible if you treat y as the dependent variable, but
beautiful if you treat **x** as the dependent variable.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     dx                                                             |
  |     --   +   P x   =   Q         where P, Q are functions of y     |
  |     dy                                                             |
  |                                                                    |
  |     IF  =  e^( INT P dy )                                          |
  |                                                                    |
  |     x (IF)  =  INT  Q (IF) dy  +  c                                |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**How to spot it:** the equation is degree 1 in x but messy in y — for example
it contains log y, tan^-1 y, or e^y, but x appears only as a plain x.

**The mechanical fact you need:** dx/dy = 1 / (dy/dx). So you can always flip.

## WORKED EXAMPLE 10.1 — the AP classic

Solve (x + y + 1) dy/dx = 1.

**Step 1 — flip it.**

```
   dx
   --  =  x + y + 1
   dy
```

**Step 2 — put it in standard linear-in-x form.**

```
   dx
   --  -  x  =  y + 1
   dy
```

So P = -1 and Q = y + 1, both functions of y.

**Step 3 — integrating factor.**

```
   INT P dy  =  INT (-1) dy  =  - y

   IF  =  e^(-y)
```

**Step 4 — the formula.**

```
   x e^(-y)  =  INT ( y + 1 ) e^(-y) dy  +  c
```

**Step 5 — do the integral by parts** with u = y + 1, dv = e^(-y) dy so
v = -e^(-y):

```
   INT (y+1) e^(-y) dy  =  (y + 1)( - e^(-y) )  -  INT ( - e^(-y) ) . 1 dy

                        =  - (y + 1) e^(-y)  +  INT e^(-y) dy

                        =  - (y + 1) e^(-y)  -  e^(-y)

                        =  - ( y + 2 ) e^(-y)
```

**Step 6 — put it back.**

```
   x e^(-y)  =  - ( y + 2 ) e^(-y)  +  c
```

Multiply everything by e^y:

```
   x  =  - ( y + 2 )  +  c e^y
```

**ANSWER: x + y + 2 = c e^y.**

**Check:** from x = c e^y - y - 2 we get dx/dy = c e^y - 1.
Also x + y + 1 = c e^y - 1. So (x + y + 1) dy/dx = (c e^y - 1) · 1/(c e^y - 1) = 1.
Correct.

## WORKED EXAMPLE 10.2 — the tan-inverse one

Solve (1 + y^2) dx = ( tan^-1 y  -  x ) dy.

**Step 1 — divide by (1 + y^2) dy.**

```
   dx       tan^-1 y  -  x
   --  =  ------------------
   dy          1 + y^2
```

**Step 2 — collect the x on the left.**

```
   dx          x            tan^-1 y
   --  +  ---------  =   -------------
   dy      1 + y^2          1 + y^2
```

So P = 1/(1 + y^2) and Q = (tan^-1 y)/(1 + y^2).

**Step 3 — integrating factor.**

```
   INT dy/(1 + y^2)  =  tan^-1 y

               tan^-1 y
   IF  =  e^(          )
```

**Step 4 — the formula.**

```
       tan^-1 y          tan^-1 y     tan^-1 y
   x e^(       )  =  INT ---------- e^(       ) dy  +  c
                          1 + y^2
```

**Step 5 — substitute t = tan^-1 y**, so dt = dy/(1 + y^2):

```
   INT t e^t dt  =  t e^t  -  INT e^t dt  =  t e^t  -  e^t  =  ( t - 1 ) e^t
```

**Step 6 — put back t = tan^-1 y.**

```
       tan^-1 y                       tan^-1 y
   x e^(       )  =  ( tan^-1 y - 1 ) e^(     )  +  c
```

Divide by e^(tan^-1 y):

```
   x  =  tan^-1 y  -  1  +  c e^( - tan^-1 y )
```

**ANSWER: x = tan^-1 y - 1 + c e^(-tan^-1 y).**

> **TRAP:** When you flip to dx/dy, EVERYTHING changes role. The integrating
> factor uses INT P **dy**, not dx. Students who flip the equation but keep
> integrating with respect to x get nonsense.

---

# TOPIC 11 — BERNOULLI'S EQUATION

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |     dy                                                             |
  |     --   +   P y   =   Q y^n          (n is not 0 and not 1)       |
  |     dx                                                             |
  |                                                                    |
  |  STEP 1   Divide EVERY term by y^n :                                |
  |                                                                    |
  |               y^(-n) dy/dx  +  P y^(1-n)  =  Q                     |
  |                                                                    |
  |  STEP 2   Put   v  =  y^(1-n)                                       |
  |                                                                    |
  |               dv/dx  =  (1 - n) y^(-n) dy/dx                       |
  |                                                                    |
  |  STEP 3   The equation becomes                                      |
  |                                                                    |
  |               (1/(1-n)) dv/dx  +  P v  =  Q                        |
  |                                                                    |
  |           which is LINEAR in v. Solve it the usual way.            |
  |                                                                    |
  |  STEP 4   Put  v = y^(1-n)  back at the end.                       |
  |                                                                    |
  +--------------------------------------------------------------------+
```

Most exam versions have n = 2, in which case v = y^(-1) = 1/y.

## WORKED EXAMPLE 11.1

Solve dy/dx + (1/x) y = y^2.

**Step 0 — identify.** There is a y^2 on the right, so it is Bernoulli with n = 2.

**Step 1 — divide by y^2.**

```
    1     dy         1     1
   ----   --   +    --- . ---   =   1
   y^2    dx         x     y
```

or written with negative powers:

```
   y^(-2) dy/dx  +  (1/x) y^(-1)  =  1
```

**Step 2 — put v = y^(-1) = 1/y.**

```
   dv          -2  dy                          dy         dv
   --  =  - y      --        so     y^(-2)     --   =   - --
   dx              dx                          dx         dx
```

**Step 3 — substitute.**

```
      dv        v
   -  --   +   ---   =   1
      dx        x
```

Multiply by -1 to get the standard shape:

```
   dv        v
   --   -   ---   =   - 1
   dx        x
```

So it is linear with P = -1/x and Q = -1.

**Step 4 — integrating factor.**

```
   INT P dx  =  INT (-1/x) dx  =  - log x  =  log (1/x)

   IF  =  e^( log(1/x) )  =  1/x
```

**Step 5 — the linear formula.**

```
    v                1
   ---   =   INT (-1) . --- dx   +   c
    x                x

    v
   ---   =   - log | x |   +   c
    x
```

**Step 6 — solve for v, then for y.**

```
   v  =  x ( c  -  log | x | )

    1
   ---  =  x ( c - log|x| )
    y

                   1
   y  =  ---------------------
          x ( c  -  log | x | )
```

**ANSWER: 1/y = x(c - log|x|).**

## WORKED EXAMPLE 11.2

Solve x (dy/dx) + y = 2 x^2 y^2.

**Step 1 — divide by x to reach standard form.**

```
   dy       y
   --  +   ---  =  2 x y^2
   dx       x
```

Bernoulli with n = 2.

**Step 2 — divide by y^2.**

```
   y^(-2) dy/dx  +  (1/x) y^(-1)  =  2 x
```

**Step 3 — put v = 1/y, so y^(-2) dy/dx = - dv/dx.**

```
      dv       v
   -  --  +   ---  =  2 x

      dx       x

   dv        v
   --   -   ---   =   - 2 x
   dx        x
```

**Step 4 — IF.** P = -1/x, so IF = 1/x (as in the previous example).

**Step 5 — the formula.**

```
    v                    1
   ---  =  INT ( -2x ) . --- dx  +  c   =   INT ( -2 ) dx  +  c   =   -2x + c
    x                    x
```

**Step 6 — solve.**

```
   v  =  x ( c - 2x )  =  c x  -  2 x^2

    1
   ---  =  c x  -  2 x^2
    y
```

**ANSWER: 1/y = cx - 2x^2.**

**Check:** let D = cx - 2x^2 so y = 1/D and dy/dx = -D'/D^2 with D' = c - 4x.

```
                  - x (c - 4x)        1        - cx + 4x^2  +  cx - 2x^2
   x (dy/dx) + y = -------------  +  ---  =  ------------------------------
                       D^2            D                  D^2

                    2 x^2
                 =  -------  =  2 x^2 y^2
                     D^2
```

Correct.

## WORKED EXAMPLE 11.3 — a Bernoulli in disguise (trigonometric)

Solve dy/dx + x sin 2y = x^3 cos^2 y.

**Step 1 — divide every term by cos^2 y.**

Remember sin 2y = 2 sin y cos y, so sin 2y / cos^2 y = 2 tan y.

```
        dy
   sec^2 y --  +  2 x tan y  =  x^3
        dx
```

**Step 2 — put v = tan y**, since dv/dx = sec^2 y (dy/dx).

```
   dv
   --  +  2 x v  =  x^3
   dx
```

Linear in v. P = 2x, Q = x^3.

**Step 3 — IF.**

```
   INT 2x dx  =  x^2         IF  =  e^(x^2)
```

**Step 4 — the formula.**

```
   v e^(x^2)  =  INT  x^3 e^(x^2) dx  +  c
```

**Step 5 — do that integral.** Write x^3 = x^2 · x and substitute t = x^2,
so dt = 2x dx, i.e. x dx = dt/2:

```
   INT x^2 e^(x^2) . x dx  =  INT t e^t . (dt/2)  =  (1/2) INT t e^t dt

                           =  (1/2) [ t e^t  -  e^t ]

                           =  (1/2) ( t - 1 ) e^t

                           =  (1/2) ( x^2 - 1 ) e^(x^2)
```

**Step 6 — put it together and divide by e^(x^2).**

```
   v e^(x^2)  =  (1/2)( x^2 - 1 ) e^(x^2)  +  c

   v  =  (x^2 - 1)/2  +  c e^( - x^2 )
```

**Step 7 — put v = tan y back.**

**ANSWER: tan y = (x^2 - 1)/2 + c e^(-x^2).**

> **TRAP:** Students see sin 2y and panic. The move is always the same: divide by
> the highest power of cos y present, and a tan y appears. Then v = tan y.

---

# TOPIC 12 — APPLICATIONS

Two situations only appear at Inter level. Both are just separable equations
dressed in words.

## 12A — Growth and decay

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  ENGLISH: "the rate of change is proportional to the amount        |
  |            present"                                                |
  |                                                                    |
  |  MATHS:   dN/dt  =  k N                                            |
  |                                                                    |
  |  SOLUTION (separate and integrate):                                |
  |                                                                    |
  |      dN/N = k dt   ->   log N = k t + c   ->   N = N0 e^(k t)      |
  |                                                                    |
  |  N0 is the amount at time t = 0.                                   |
  |  k > 0 means GROWTH.  k < 0 means DECAY.                            |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## WORKED EXAMPLE 12.1 — half-life

Radium decays at a rate proportional to the amount present. Half of it
disappears in 1600 years. What percentage disappears in 100 years?

**Step 1 — set up.**

```
   dM/dt  =  - k M         ->        M  =  M0 e^( - k t )
```

**Step 2 — use the half-life to find k.**
At t = 1600, M = M0 / 2:

```
   M0 / 2  =  M0 e^( -1600 k )

   1/2  =  e^( -1600 k )

   log(1/2)  =  -1600 k

   - log 2  =  - 1600 k

              log 2
   k  =  -------------
             1600
```

**Step 3 — find M at t = 100.**

```
   M                        (          100 log 2 )
   ---  =  e^(-100k)  =  exp( -  ---------------  )  =  exp( - (log 2)/16 )
   M0                       (        1600        )
```

Now (log 2)/16 = 0.6931/16 = 0.04332, and e^(-0.04332) = 0.9576.

**Step 4 — read the answer.** 95.76% remains, so about **4.24% has decayed**.

## WORKED EXAMPLE 12.2 — doubling and tripling

A population doubles in 40 years. Assuming the rate of growth is proportional to
the population, in how many years will it triple?

```
   N  =  N0 e^(k t)
```

**Doubling gives k:**

```
   2 N0  =  N0 e^(40 k)      ->      2 = e^(40k)      ->      40 k = log 2

                                                             k = (log 2)/40
```

**Tripling:**

```
   3  =  e^(k t)      ->      k t  =  log 3

              log 3          log 3
   t  =  ---------  =  40 . -------
              k              log 2
```

Numerically log 3 = 1.0986, log 2 = 0.6931, so log3/log2 = 1.585.

```
   t  =  40 x 1.585  =  63.4 years  (about 63 years)
```

## 12B — Newton's law of cooling

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  ENGLISH: "a body cools at a rate proportional to the difference   |
  |            between its temperature and the surroundings"           |
  |                                                                    |
  |  MATHS:   dT/dt  =  - k ( T  -  S )                                |
  |                                                                    |
  |           T = temperature of the body at time t                    |
  |           S = temperature of the surroundings (a constant)         |
  |                                                                    |
  |  SOLUTION:                                                          |
  |                                                                    |
  |      dT/(T - S)  =  - k dt                                         |
  |      log (T - S)  =  - k t  +  c                                   |
  |                                                                    |
  |      T  -  S   =   ( T0  -  S ) e^( - k t )                        |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## WORKED EXAMPLE 12.3

A body at 80 degrees C cools to 60 degrees C in 20 minutes. The room is at
20 degrees C. Find its temperature after a further 20 minutes.

**Step 1 — write the solution with the numbers in.**
S = 20, T0 = 80, so T0 - S = 60.

```
   T  -  20  =  60 e^( - k t )
```

**Step 2 — use the given data at t = 20, T = 60.**

```
   60 - 20  =  60 e^( - 20 k )

   40  =  60 e^( -20 k )

   e^( -20 k )  =  40/60  =  2/3
```

**Step 3 — go to t = 40.** Notice e^(-40k) = [e^(-20k)]^2:

```
                     ( 2 )^2         4
   T - 20  =  60  x  ( - )     =  60 x ---   =   80/3   =   26.67
                     ( 3 )             9
```

**Step 4 — answer.**

```
   T  =  20  +  26.67  =  46.67 degrees C
```

**ANSWER: about 46.7 degrees C (that is 46 and 2/3 degrees).**

> **TRAP:** Do not compute k as a decimal unless you have to. Working with
> e^(-20k) = 2/3 and then squaring it is far faster and avoids rounding errors.

---

# TOPIC 13 — TWO SHORTCUTS WORTH KNOWING

These are not compulsory, but they save time when a question looks stuck.

## Recognise exact differentials

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   x dy  +  y dx      is    d ( x y )                               |
  |                                                                    |
  |   x dy  -  y dx                    ( y )                           |
  |   -------------      is    d       ( - )                           |
  |       x^2                          ( x )                           |
  |                                                                    |
  |   y dx  -  x dy                    ( x )                           |
  |   -------------      is    d       ( - )                           |
  |       y^2                          ( y )                           |
  |                                                                    |
  |   x dx  +  y dy      is    (1/2) d ( x^2 + y^2 )                   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

Example: x dy + y dx = 0 gives d(xy) = 0 immediately, so **xy = c**.
No method needed at all.

## Flip when y is trapped

If the equation contains something like (y^2 + x) dy/dx = y or
dy/dx = 1/(x + y), turn it upside down and look for a linear-in-x equation.
This works far more often than students expect.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Go through this for every differential-equation answer you wrote.

```
  +----+------------------------------------------------------------------+
  |  1 | Did I write  + c  ?  In EVERY solution?                          |
  +----+------------------------------------------------------------------+
  |  2 | For order/degree: did I CLEAR the radicals and fractional        |
  |    | powers BEFORE reading the degree?                                |
  +----+------------------------------------------------------------------+
  |  3 | For formation: does my final answer contain any letters like     |
  |    | a, b, c ?  It must not. Only x, y and derivatives.               |
  +----+------------------------------------------------------------------+
  |  4 | For formation: is the ORDER of my answer equal to the NUMBER     |
  |    | of arbitrary constants I started with?                           |
  +----+------------------------------------------------------------------+
  |  5 | For a homogeneous question: did I put  v = y/x  back at the      |
  |    | end?  No v should remain in the final line.                      |
  +----+------------------------------------------------------------------+
  |  6 | For a non-homogeneous question: did I put  X = x - h  and        |
  |    | Y = y - k  back at the end?                                      |
  +----+------------------------------------------------------------------+
  |  7 | For a linear question: was the coefficient of dy/dx equal to 1   |
  |    | BEFORE I read off P ?                                            |
  +----+------------------------------------------------------------------+
  |  8 | For a linear question: did I use  y (IF) = INT Q (IF) dx  and    |
  |    | NOT  y (IF) = INT Q dx ?                                         |
  +----+------------------------------------------------------------------+
  |  9 | Did I write the IF explicitly on its own line?  Examiners give   |
  |    | a mark just for stating the correct integrating factor.          |
  +----+------------------------------------------------------------------+
  | 10 | Was a particular solution asked for?  If a condition like        |
  |    | "y = 1 when x = 0" was given, did I use it to find c ?           |
  +----+------------------------------------------------------------------+
  | 11 | Did I substitute my answer back to check?  Even 30 seconds of    |
  |    | checking catches most sign errors.                               |
  +----+------------------------------------------------------------------+
  | 12 | Are all my logs written as log|...| with the modulus bars?       |
  +----+------------------------------------------------------------------+
```

**One last piece of advice.** In this chapter the examiner gives marks for the
METHOD, step by step — for identifying the type, for stating the substitution,
for the integrating factor, for the separated form. So even if your final
integration goes wrong, **write every step out**. A half-finished answer with
clear steps scores far more than a blank space.
