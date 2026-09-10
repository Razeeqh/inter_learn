# Inverse Trigonometric Functions — Concepts From Zero

Read this with a pen. Every worked example is written out fully, every step shown.
Nothing here assumes you remember anything except `sin 30deg = 1/2`.

> **BEFORE ANYTHING ELSE:**
> `sin^-1 x` is read "**sine inverse x**" or "**arcsin x**".
> It means **"the angle whose sine is x"**.
> It is **NOT** `1/sin x`. That is `cosec x`. The `-1` is a *name*, not a power.
> Same for all six. `tan^-1 x` is not `1/tan x`.

Throughout, angles are in **radians** unless a `deg` is written.
Remember: `pi = 180deg`, `pi/2 = 90deg`, `pi/3 = 60deg`, `pi/4 = 45deg`, `pi/6 = 30deg`.

---

# TOPIC 1 — WHY A TRIGONOMETRIC FUNCTION NEEDS A RESTRICTED DOMAIN

## 1.1 What an inverse actually is

An inverse function undoes a function. If `f` sends 3 to 10, then `f^-1` sends 10 back to 3.

For that to work, `f` must be **one-one** (each input goes to a different output) and
**onto** (every value in the target set is actually hit). Then and only then does
`f^-1` exist.

## 1.2 The problem with sin

Look at what `sin` does:

```
     sin(pi/6)        = 1/2
     sin(5pi/6)       = 1/2
     sin(13pi/6)      = 1/2
     sin(-7pi/6)      = 1/2
     ... and infinitely many more
```

So if I ask "which angle has sine 1/2?", there is no single answer.
`sin` is **many-one** on all of R. A many-one function has **no inverse**.

Everyday analogy: a vending machine where buttons A, F and K all drop the same
packet of biscuits. Handed a packet of biscuits, you cannot say which button was
pressed. To make the machine reversible you must **disconnect** buttons F and K and
keep only button A. That "keeping only one" is exactly what a restricted domain does.

## 1.3 The fix

We **chop the domain down** to one stretch on which the function is one-one, and on
which it still produces **every** possible output value.

```
  sin x  on all of R              ->  many-one, no inverse
  sin x  on [ -pi/2 , pi/2 ]      ->  strictly increasing from -1 up to 1,
                                      hits every value in [-1, 1] exactly once
                                      ->  ONE-ONE and ONTO  ->  inverse EXISTS
```

```
    Full sine wave (many-one)                Chopped piece (one-one)

  1 |   ,-.        ,-.                     1 |            ,--
    |  /   \      /   \                      |         ,-'
  --+-'-----'----'-----'---              ----+--------'---------
    | /       \  /       \                   |      ,-'
 -1 |'         `'         `               -1 |  ,--'
    |                                        |
    -2pi  -pi   0   pi   2pi              -pi/2      0      pi/2

    A horizontal line cuts it              A horizontal line cuts it
    MANY times  ->  no inverse             EXACTLY once  ->  inverse exists
```

The chosen stretch is called the **principal branch**, and the outputs of the
inverse are called **principal values**.

> **TRAP:** the choice is a *convention*, agreed by mathematicians. It is not
> something you can derive. You must **memorise** it. Every mark in this chapter
> ultimately rests on that table.

## 1.4 The rule that follows from all this

```
  +------------------------------------------------------------------+
  |  The ANSWER of an inverse trigonometric function must ALWAYS      |
  |  lie inside its principal value range. No exceptions, ever.       |
  +------------------------------------------------------------------+
```

If your answer falls outside, your answer is **wrong**, even if the sine of it is right.

---

# TOPIC 2 — THE SIX FUNCTIONS: DOMAIN AND PRINCIPAL VALUE RANGE

**This is the heart of the chapter. Learn it before anything else.**

| Function | Domain (allowed x) | Principal value range (possible answers) |
|---|---|---|
| `sin^-1 x` | `[-1, 1]` | `[ -pi/2 , pi/2 ]` |
| `cos^-1 x` | `[-1, 1]` | `[ 0 , pi ]` |
| `tan^-1 x` | all real x, `R` | `( -pi/2 , pi/2 )` |
| `cot^-1 x` | all real x, `R` | `( 0 , pi )` |
| `sec^-1 x` | `(-inf, -1] U [1, inf)` i.e. `|x| >= 1` | `[ 0 , pi ]` except `pi/2` |
| `cosec^-1 x` | `(-inf, -1] U [1, inf)` i.e. `|x| >= 1` | `[ -pi/2 , pi/2 ]` except `0` |

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   THE SAME TABLE, DRAWN ON THE NUMBER LINE OF ANGLES                     |
  |                                                                          |
  |                -pi/2        0        pi/2         pi                     |
  |                  |          |          |          |                      |
  |   sin^-1        [==========================]      |     closed both ends |
  |   cosec^-1      [=========o================]      |     0 removed        |
  |                  |          |          |          |                      |
  |   cos^-1         |         [======================]     closed both ends |
  |   sec^-1         |         [==========o===========]     pi/2 removed     |
  |                  |          |          |          |                      |
  |   tan^-1        (==========================)      |     OPEN both ends   |
  |                  |          |          |          |                      |
  |   cot^-1         |         (======================)     OPEN both ends   |
  |                                                                          |
  |   [ or ]  = endpoint INCLUDED       ( or )  = endpoint NOT included      |
  |   o       = that single value is REMOVED from the range                  |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

## 2.1 How to remember it without cramming

```
  THE "SIN FAMILY"  ->  answers live around zero, from -pi/2 to +pi/2
        sin^-1 , cosec^-1 , tan^-1
        (these three can give NEGATIVE answers)

  THE "COS FAMILY"  ->  answers live from 0 to pi
        cos^-1 , sec^-1 , cot^-1
        (these three are NEVER negative)
```

That one sentence — *"cos, sec and cot never give a negative answer"* — saves you in
half the 2-mark questions.

**Why is `pi/2` thrown out of `sec^-1`?** Because `sec(pi/2) = 1/cos(pi/2) = 1/0`,
which does not exist. Same reason `0` is thrown out of `cosec^-1`: `cosec 0 = 1/0`.

**Why are `tan^-1` and `cot^-1` open at the ends?** Because `tan(pi/2)` does not
exist and `cot 0` does not exist. The graph shoots off to infinity there.

**Why is the domain of `sec^-1` and `cosec^-1` outside (-1, 1)?** Because
`sec x = 1/cos x` and `|cos x| <= 1`, so `|sec x| >= 1` always. There is no angle
whose secant is `0.5`. So `sec^-1(0.5)` is **undefined** — a legitimate 2-mark answer.

> **TRAP:** `sin^-1(2)` does not exist. `cos^-1(-3)` does not exist.
> `sec^-1(1/2)` does not exist. If a question hands you one of these, the answer
> is "not defined" and you say why. Do not try to compute it.

## WORKED EXAMPLE 2.1
State whether each is defined, and if so name the range the answer must lie in.

```
  (a) sin^-1(0.9)     domain is [-1,1], and 0.9 is inside   -> DEFINED,
                      answer lies in [-pi/2, pi/2]

  (b) cos^-1(-1.4)    -1.4 is outside [-1,1]                -> NOT DEFINED

  (c) tan^-1(-500)    domain is all of R                    -> DEFINED,
                      answer lies in (-pi/2, 0)  (negative, because x is negative)

  (d) cosec^-1(0.5)   need |x| >= 1, but 0.5 < 1            -> NOT DEFINED

  (e) sec^-1(-3)      |-3| = 3 >= 1                         -> DEFINED,
                      answer lies in (pi/2, pi]  (second quadrant, because x < 0)
```

---

# TOPIC 3 — FINDING A PRINCIPAL VALUE (POSITIVE ARGUMENT)

## 3.1 The three-step method

```
  STEP 1   Write the question as an equation:  let  y = sin^-1 x ,  so  sin y = x
  STEP 2   Recall which STANDARD angle has that value
  STEP 3   Check the angle is inside the principal range. If yes, done.
```

## 3.2 The standard-angle table you must know cold

| angle | 0 | pi/6 (30) | pi/4 (45) | pi/3 (60) | pi/2 (90) |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | 1/sqrt2 | sqrt3/2 | 1 |
| cos | 1 | sqrt3/2 | 1/sqrt2 | 1/2 | 0 |
| tan | 0 | 1/sqrt3 | 1 | sqrt3 | undefined |
| cot | undefined | sqrt3 | 1 | 1/sqrt3 | 0 |
| sec | 1 | 2/sqrt3 | sqrt2 | 2 | undefined |
| cosec | undefined | 2 | sqrt2 | 2/sqrt3 | 1 |

## WORKED EXAMPLE 3.1 — `sin^-1(sqrt3 / 2)`
```
  Let  y = sin^-1(sqrt3/2)      =>   sin y = sqrt3/2
  From the table,  sin(pi/3) = sqrt3/2
  Is pi/3 inside [-pi/2, pi/2] ?   pi/3 = 60deg , pi/2 = 90deg .  YES.

  ANSWER:  pi/3
```

## WORKED EXAMPLE 3.2 — `cot^-1(sqrt3)`
```
  Let  y = cot^-1(sqrt3)        =>   cot y = sqrt3
  cot(pi/6) = sqrt3
  Is pi/6 inside (0, pi) ?  YES.

  ANSWER:  pi/6
```

## WORKED EXAMPLE 3.3 — `sec^-1(sqrt2)`
```
  sec y = sqrt2   =>   cos y = 1/sqrt2   =>   y = pi/4
  Is pi/4 inside [0, pi] and not equal to pi/2 ?  YES.

  ANSWER:  pi/4
```

> **TIP:** for `sec^-1` and `cosec^-1`, always **flip to cos and sin first**.
> `sec^-1 x = cos^-1(1/x)` and `cosec^-1 x = sin^-1(1/x)`. Then use the ordinary table.

---

# TOPIC 4 — PRINCIPAL VALUE WITH A NEGATIVE ARGUMENT

This is where students lose the 2 marks. A minus sign in front of x does **not**
simply put a minus sign in front of the answer — that only works for the sin family.

```
  +------------------------------------------------------------------------+
  |                    THE NEGATIVE-ARGUMENT RULES                         |
  |                                                                        |
  |   SIN FAMILY (answer flips sign):                                      |
  |      sin^-1(-x)   = - sin^-1(x)          for x in [-1, 1]              |
  |      tan^-1(-x)   = - tan^-1(x)          for x in R                    |
  |      cosec^-1(-x) = - cosec^-1(x)        for |x| >= 1                  |
  |                                                                        |
  |   COS FAMILY (answer is subtracted from pi):                           |
  |      cos^-1(-x)   = pi - cos^-1(x)       for x in [-1, 1]              |
  |      cot^-1(-x)   = pi - cot^-1(x)       for x in R                    |
  |      sec^-1(-x)   = pi - sec^-1(x)       for |x| >= 1                  |
  |                                                                        |
  +------------------------------------------------------------------------+
```

Why? Because `cos^-1` must return an answer in `[0, pi]`, and nothing in `[0, pi]`
is negative. So the answer is pushed into the **second quadrant** instead.

## WORKED EXAMPLE 4.1 — `sin^-1(-1/2)`
```
  sin^-1(-1/2) = - sin^-1(1/2) = - pi/6

  Check:  is -pi/6 inside [-pi/2, pi/2] ?  YES.
  Check:  sin(-pi/6) = -1/2 ?  YES.

  ANSWER:  -pi/6
```

## WORKED EXAMPLE 4.2 — `cos^-1(-1/2)`
```
  cos^-1(-1/2) = pi - cos^-1(1/2) = pi - pi/3 = 2pi/3

  Check:  is 2pi/3 = 120deg inside [0, pi] ?  YES.
  Check:  cos(120deg) = -1/2 ?  YES.

  ANSWER:  2pi/3         (NOT -pi/3 . cos^-1 is never negative.)
```

## WORKED EXAMPLE 4.3 — `tan^-1(-sqrt3)`
```
  tan^-1(-sqrt3) = - tan^-1(sqrt3) = - pi/3

  Check: -pi/3 inside (-pi/2, pi/2) ?  YES.

  ANSWER:  -pi/3
```

## WORKED EXAMPLE 4.4 — `cot^-1(-1)`
```
  cot^-1(-1) = pi - cot^-1(1) = pi - pi/4 = 3pi/4

  Check: 3pi/4 = 135deg inside (0, pi) ?  YES.
  Check: cot(135deg) = cos135/sin135 = (-1/sqrt2)/(1/sqrt2) = -1 ?  YES.

  ANSWER:  3pi/4         (a very common exam answer -- NOT -pi/4)
```

## WORKED EXAMPLE 4.5 — `sec^-1(-2)`
```
  sec^-1(-2) = pi - sec^-1(2) = pi - pi/3 = 2pi/3

  Check: sec(2pi/3) = 1/cos(120deg) = 1/(-1/2) = -2 ?  YES.

  ANSWER:  2pi/3
```

## WORKED EXAMPLE 4.6 — `cosec^-1(-2)`
```
  cosec^-1(-2) = - cosec^-1(2) = - pi/6

  Check: cosec(-pi/6) = 1/sin(-30deg) = 1/(-1/2) = -2 ?  YES.

  ANSWER:  -pi/6
```

## WORKED EXAMPLE 4.7 — `cos^-1(-sqrt3 / 2) + sin^-1(-1/2)`
```
  cos^-1(-sqrt3/2) = pi - cos^-1(sqrt3/2) = pi - pi/6 = 5pi/6
  sin^-1(-1/2)     = - sin^-1(1/2)        = - pi/6

  Sum = 5pi/6 - pi/6 = 4pi/6 = 2pi/3

  ANSWER:  2pi/3
```

## The full "negative principal value" reference

| Expression | Working | Answer |
|---|---|---|
| `sin^-1(-1)` | `-sin^-1(1)` | `-pi/2` |
| `sin^-1(-1/sqrt2)` | `-pi/4` | `-pi/4` |
| `sin^-1(-sqrt3/2)` | `-pi/3` | `-pi/3` |
| `cos^-1(-1)` | `pi - 0` | `pi` |
| `cos^-1(-1/sqrt2)` | `pi - pi/4` | `3pi/4` |
| `cos^-1(-sqrt3/2)` | `pi - pi/6` | `5pi/6` |
| `tan^-1(-1)` | `-pi/4` | `-pi/4` |
| `tan^-1(-1/sqrt3)` | `-pi/6` | `-pi/6` |
| `cot^-1(-sqrt3)` | `pi - pi/6` | `5pi/6` |
| `cot^-1(-1/sqrt3)` | `pi - pi/3` | `2pi/3` |
| `sec^-1(-sqrt2)` | `pi - pi/4` | `3pi/4` |
| `sec^-1(-1)` | `pi - 0` | `pi` |
| `cosec^-1(-sqrt2)` | `-pi/4` | `-pi/4` |
| `cosec^-1(-2/sqrt3)` | `-pi/3` | `-pi/3` |

> **TRAP:** `cos^-1(-1/2) = -pi/3` is the single most common wrong answer in this
> chapter. Before you write any `cos^-1`, `cot^-1` or `sec^-1` answer, ask:
> **"is it between 0 and pi?"** If it is negative, it is wrong.

---

# TOPIC 5 — GRAPHS OF arcsin, arccos AND arctan

The graph of `f^-1` is the graph of `f` **reflected in the line y = x**
(swap the x-axis and the y-axis). You do not have to plot points — just reflect.

## 5.1 `y = sin^-1 x`

```
     Domain:  x in [-1, 1]          Range:  y in [-pi/2, pi/2]
     Shape:   INCREASING everywhere, S-shaped, steep at the two ends

                        y
                        |
                pi/2  --+- - - - - - - - - -*  (1, pi/2)
                        |                 .'
                        |               .'
                pi/4  --+             .'
                        |          .-'
                        |       .-'
      ------+-----------+-----------+-----------+------ x
           -1        .-'|  0                    1
                  .-'   |
              .-'       +-- -pi/4
            .'          |
  (-1,-pi/2)*- - - - - -+-- -pi/2
                        |

     Passes through (0, 0),  (1, pi/2),  (-1, -pi/2).
     ODD function:  the graph has half-turn symmetry about the origin.
```

## 5.2 `y = cos^-1 x`

```
     Domain:  x in [-1, 1]          Range:  y in [0, pi]
     Shape:   DECREASING everywhere.  Starts high on the left, falls to zero.

                        y
                        |
      (-1, pi)  pi  ----*
                        |'.
                        |  '.
                        |    '.
              pi/2  ----+- - - -*  (0, pi/2)
                        |        '.
                        |          '.
                        |            '.
                 0  ----+--------------*------ x
                       -1      0        1
                                       (1, 0)

     Passes through (-1, pi),  (0, pi/2),  (1, 0).
     NEVER goes below the x-axis.  That is the whole point of the cos family.
```

## 5.3 `y = tan^-1 x`

```
     Domain:  all real x            Range:  y in (-pi/2, pi/2)  (OPEN)
     Shape:   increasing, flattens out towards two horizontal asymptotes

                        y
                        |
       pi/2  - - - - - -+- - - - - - - - - - - - -   ASYMPTOTE y = pi/2
                        |               ....------''
                        |         ..--''
                        |     .-''
       -----------------+---*--------------------------- x
                   ..--'|  0
              .-''      |
        ..--''          |
      -pi/2 - - - - - - + - - - - - - - - - - - - -   ASYMPTOTE y = -pi/2
                        |

     Passes through (0, 0).  Gets closer and closer to +-pi/2 but NEVER touches.
     That is exactly why the range is written with ROUND brackets.
     ODD function:  tan^-1(-x) = -tan^-1(x).
```

## 5.4 What the graphs tell you instantly

| Read off the graph | Fact |
|---|---|
| `sin^-1` and `tan^-1` pass through the origin | `sin^-1 0 = 0`, `tan^-1 0 = 0` |
| `cos^-1` cuts the y-axis at `pi/2` | `cos^-1 0 = pi/2` |
| `cos^-1` is above the x-axis always | `cos^-1` is never negative |
| `tan^-1` never reaches `pi/2` | `tan^-1 x < pi/2` for every real x |
| all three are one-one | each value of x gives exactly one answer |
| `sin^-1` and `tan^-1` are odd, `cos^-1` is neither | explains the negative-argument rules |

---

# TOPIC 6 — CANCELLING: `sin(sin^-1 x)` AND `sin^-1(sin x)`

There are two directions and they behave **completely differently**.

## 6.1 The easy direction — function outside, inverse inside

```
  +----------------------------------------------------------------+
  |   sin( sin^-1 x )   = x        for  x in [-1, 1]               |
  |   cos( cos^-1 x )   = x        for  x in [-1, 1]               |
  |   tan( tan^-1 x )   = x        for  x in R                     |
  |   cot( cot^-1 x )   = x        for  x in R                     |
  |   sec( sec^-1 x )   = x        for  |x| >= 1                   |
  |   cosec(cosec^-1 x) = x        for  |x| >= 1                   |
  +----------------------------------------------------------------+
```
These always cancel, provided x is in the domain. Nothing to think about.

## 6.2 The dangerous direction — inverse outside, function inside

```
  +----------------------------------------------------------------+
  |   sin^-1( sin x )  = x   ONLY IF  x is in [ -pi/2 , pi/2 ]     |
  |   cos^-1( cos x )  = x   ONLY IF  x is in [   0   ,  pi  ]     |
  |   tan^-1( tan x )  = x   ONLY IF  x is in ( -pi/2 , pi/2 )     |
  |   cot^-1( cot x )  = x   ONLY IF  x is in (   0   ,  pi  )     |
  |   sec^-1( sec x )  = x   ONLY IF  x is in [0, pi], x =/= pi/2  |
  |  cosec^-1(cosec x) = x   ONLY IF  x in [-pi/2,pi/2], x =/= 0   |
  +----------------------------------------------------------------+
```

If x is **outside** the range, the answer is **not x**. You must first replace the
angle by a **different angle with the same trig value** that *is* inside the range.

## 6.3 The repair kit

```
  For sin:      sin(x) = sin(pi - x) = sin(x + 2pi) = sin(x - 2pi)
  For cos:      cos(x) = cos(-x) = cos(2pi - x) = cos(x + 2pi)
  For tan:      tan(x) = tan(x + pi) = tan(x - pi)      (period is pi, not 2pi!)
```

**The routine:**
```
  STEP 1  Is the inside angle already in the principal range?  If yes -> answer = it.
  STEP 2  If not, add or subtract 2pi (for sin/cos) or pi (for tan) to drag it near.
  STEP 3  Still outside?  For sin use  pi - x .  For cos use  2pi - x  (or -x).
  STEP 4  Confirm the final angle is inside the range.
```

## WORKED EXAMPLE 6.1 — `sin^-1( sin(3pi/4) )`
```
  Is 3pi/4 = 135deg inside [-90deg, 90deg] ?   NO.

  Use  sin(3pi/4) = sin(pi - 3pi/4) = sin(pi/4)
  Is pi/4 = 45deg inside [-90deg, 90deg] ?  YES.

  ANSWER:  pi/4          (NOT 3pi/4)
```

## WORKED EXAMPLE 6.2 — `cos^-1( cos(4pi/3) )`
```
  Is 4pi/3 = 240deg inside [0deg, 180deg] ?   NO.

  Use  cos(4pi/3) = cos(2pi - 4pi/3) = cos(2pi/3)
  Is 2pi/3 = 120deg inside [0deg, 180deg] ?  YES.

  ANSWER:  2pi/3
```

## WORKED EXAMPLE 6.3 — `tan^-1( tan(7pi/6) )`
```
  Is 7pi/6 = 210deg inside (-90deg, 90deg) ?   NO.

  tan has period pi , so  tan(7pi/6) = tan(7pi/6 - pi) = tan(pi/6)
  Is pi/6 = 30deg inside (-90deg, 90deg) ?  YES.

  ANSWER:  pi/6
```

## WORKED EXAMPLE 6.4 — `sin^-1( sin(-7pi/6) )`
```
  Is -7pi/6 = -210deg inside [-90deg, 90deg] ?  NO.

  Add 2pi :   sin(-7pi/6) = sin(-7pi/6 + 2pi) = sin(5pi/6)
  Still 150deg, outside.  Now use  sin(5pi/6) = sin(pi - 5pi/6) = sin(pi/6)
  pi/6 is inside.  YES.

  Sanity check numerically: sin(-210deg) = +1/2 , and sin(30deg) = 1/2 . Match.

  ANSWER:  pi/6
```

## WORKED EXAMPLE 6.5 — `cos^-1( cos(13pi/6) )`
```
  13pi/6 = 390deg .  Subtract 2pi (= 360deg):  cos(13pi/6) = cos(pi/6)
  pi/6 = 30deg is inside [0, pi].  YES.

  ANSWER:  pi/6
```

## WORKED EXAMPLE 6.6 — `tan^-1( tan(3pi/4) )`
```
  3pi/4 = 135deg , outside (-90deg, 90deg).
  Subtract pi :  tan(3pi/4) = tan(3pi/4 - pi) = tan(-pi/4)
  -pi/4 = -45deg is inside.  YES.

  ANSWER:  -pi/4        (a favourite 2-mark question)
```

> **TRAP:** students write `sin^-1(sin(3pi/4)) = 3pi/4` because "they cancel".
> They do **not** cancel here. Always check the inside angle against the range
> **first**. If it is outside, you have work to do.

---

# TOPIC 7 — THE COMPLEMENTARY PROPERTIES

```
  +------------------------------------------------------------------------+
  |                                                                        |
  |   sin^-1 x  +  cos^-1 x   =  pi/2        for  x in [-1, 1]             |
  |                                                                        |
  |   tan^-1 x  +  cot^-1 x   =  pi/2        for  x in R                   |
  |                                                                        |
  |   sec^-1 x  + cosec^-1 x  =  pi/2        for  |x| >= 1                 |
  |                                                                        |
  +------------------------------------------------------------------------+
```

## 7.1 Where this comes from (the 2-line proof, sometimes asked)
```
  Let  sin^-1 x = A .  Then  sin A = x , with A in [-pi/2, pi/2].
  Now  cos(pi/2 - A) = sin A = x
  And if A is in [-pi/2, pi/2], then pi/2 - A is in [0, pi]  <-- exactly cos^-1's range
  So   cos^-1 x = pi/2 - A = pi/2 - sin^-1 x
  Hence  sin^-1 x + cos^-1 x = pi/2 .
```
The bit that earns the mark is the middle line: checking `pi/2 - A` lands in `[0, pi]`.

## WORKED EXAMPLE 7.1
If `sin^-1 x = pi/5`, find `cos^-1 x`.
```
  cos^-1 x = pi/2 - pi/5 = (5pi - 2pi)/10 = 3pi/10

  ANSWER:  3pi/10
```

## WORKED EXAMPLE 7.2
Find `sin^-1(3/5) + cos^-1(3/5) + tan^-1(7) + cot^-1(7)`.
```
  First pair = pi/2 .   Second pair = pi/2 .
  Total = pi

  ANSWER:  pi
```
No triangle work needed at all. Spotting the pairs is the whole question.

## WORKED EXAMPLE 7.3
If `sin^-1 x + sin^-1 y + sin^-1 z = 3pi/2`, find `x + y + z`.
```
  Each sin^-1 is at MOST pi/2 . Three of them sum to at most 3pi/2 .
  To reach exactly 3pi/2, EVERY term must be exactly pi/2 .
  So  sin^-1 x = sin^-1 y = sin^-1 z = pi/2  =>  x = y = z = 1

  ANSWER:  x + y + z = 3
```

---

# TOPIC 8 — THE RECIPROCAL RELATIONS

```
  +------------------------------------------------------------------------+
  |                                                                        |
  |   sin^-1 (1/x)  =  cosec^-1 x           for  |x| >= 1                  |
  |   cosec^-1(1/x) =  sin^-1 x             for  0 < |x| <= 1              |
  |                                                                        |
  |   cos^-1 (1/x)  =  sec^-1 x             for  |x| >= 1                  |
  |   sec^-1 (1/x)  =  cos^-1 x             for  0 < |x| <= 1              |
  |                                                                        |
  |   tan^-1 (1/x)  =  cot^-1 x             ONLY for  x > 0                |
  |   tan^-1 (1/x)  =  cot^-1 x  -  pi      for  x < 0                     |
  |                                                                        |
  +------------------------------------------------------------------------+
```

> **TRAP — the tan one is different from the other two.**
> `tan^-1(1/x) = cot^-1 x` is **false** when x is negative.
> Check with x = -1: `tan^-1(-1) = -pi/4`, but `cot^-1(-1) = 3pi/4`.
> They differ by exactly `pi`. That is where the `- pi` in the formula comes from.
>
> The sin/cos pairs have no such problem because `sin^-1` and `cosec^-1` share the
> same range, and `cos^-1` and `sec^-1` share the same range.

## WORKED EXAMPLE 8.1 — `cosec^-1(sqrt2) + sec^-1(2)`
```
  cosec^-1(sqrt2) = sin^-1(1/sqrt2) = pi/4
  sec^-1(2)       = cos^-1(1/2)     = pi/3

  Sum = pi/4 + pi/3 = 3pi/12 + 4pi/12 = 7pi/12

  ANSWER:  7pi/12
```

## WORKED EXAMPLE 8.2 — `cot^-1(9) + cosec^-1(sqrt41 / 4) = pi/4` (prove it)
```
  cot^-1(9) = tan^-1(1/9)                         [9 > 0, so the plain rule applies]

  cosec^-1(sqrt41/4) = sin^-1(4/sqrt41)
        sin = 4/sqrt41  ->  opposite 4, hypotenuse sqrt41
        adjacent = sqrt(41 - 16) = sqrt25 = 5
        so it equals  tan^-1(4/5)

  Now add:   x = 1/9 , y = 4/5 ,  xy = 4/45 < 1   -> plain sum formula

              1/9 + 4/5        (5 + 36)/45        41/45
       ---------------------- = ----------- = ----------- = 1
          1 - (1/9)(4/5)        (45 - 4)/45       41/45

       So the sum is  tan^-1(1) = pi/4 .           PROVED
```

---

# TOPIC 9 — CONVERTING ONE INVERSE FUNCTION INTO ANOTHER

This is the single most useful practical skill in the chapter. Almost every 4-mark
proof starts by turning every `sin^-1` and `cos^-1` into `tan^-1`.

## 9.1 The method: draw a right triangle

`sin^-1(3/5)` means "an angle whose sine is 3/5". Sine = opposite / hypotenuse.
So draw a right triangle with opposite 3 and hypotenuse 5, then find the third side
by Pythagoras.

```
                 |\
                 | \
                 |  \
      opposite   |   \   hypotenuse
         = 3     |    \     = 5
                 |     \
                 |  A   \
                 +-------\
                 adjacent
                    = ?

      adjacent = sqrt( 5^2 - 3^2 ) = sqrt(25 - 9) = sqrt16 = 4
```

Now every ratio can be read straight off the picture:

```
      sin A = 3/5      cosec A = 5/3
      cos A = 4/5      sec   A = 5/4
      tan A = 3/4      cot   A = 4/3

   Therefore ALL of these are the SAME angle:

      sin^-1(3/5) = cos^-1(4/5) = tan^-1(3/4)
                  = cot^-1(4/3) = sec^-1(5/4) = cosec^-1(5/3)
```

## 9.2 The general conversion formulas (for `0 <= x <= 1`, i.e. first quadrant)

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |                             x                                            |
  |   sin^-1 x  =  tan^-1  -------------  =  cos^-1 ( sqrt(1 - x^2) )        |
  |                        sqrt(1 - x^2)                                     |
  |                                                                          |
  |                        sqrt(1 - x^2)                                     |
  |   cos^-1 x  =  tan^-1  -------------  =  sin^-1 ( sqrt(1 - x^2) )        |
  |                              x                                           |
  |                                                                          |
  |                             x                                            |
  |   tan^-1 x  =  sin^-1  -------------  =  cos^-1 ( 1 / sqrt(1 + x^2) )    |
  |                        sqrt(1 + x^2)                                     |
  |                                                                          |
  |   CONDITION: these hold for x >= 0 (and the sin/tan ones also for x < 0   |
  |   by oddness). For cos^-1 with x < 0 use  cos^-1(-x) = pi - cos^-1(x)    |
  |   FIRST, then convert.                                                   |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

## 9.3 The Pythagorean triples you will meet again and again

```
      3 -  4 -  5           sin^-1(3/5)   = tan^-1(3/4)
      5 - 12 - 13           sin^-1(5/13)  = tan^-1(5/12)
      8 - 15 - 17           sin^-1(8/17)  = tan^-1(8/15)
      7 - 24 - 25           sin^-1(7/25)  = tan^-1(7/24)
     20 - 21 - 29           sin^-1(20/29) = tan^-1(20/21)
     16 - 63 - 65           sin^-1(16/65) = tan^-1(16/63)
     33 - 56 - 65           sin^-1(33/65) = tan^-1(33/56)
```
Learn the first three. They cover 80% of AP questions.

## WORKED EXAMPLE 9.1 — Find `cos( sin^-1(4/5) )`
```
                 |\
               4 | \  5            adjacent = sqrt(25 - 16) = 3
                 |__\
                  3

  ANSWER:  3/5
```

## WORKED EXAMPLE 9.2 — Find `tan( cos^-1(12/13) )`
```
  cos = adj/hyp = 12/13  ->  adjacent 12, hypotenuse 13
  opposite = sqrt(169 - 144) = sqrt25 = 5

                 |\
               5 | \  13
                 |__\
                  12

  tan = opposite / adjacent = 5/12

  ANSWER:  5/12
```

## WORKED EXAMPLE 9.3 — Find `sin( cos^-1(3/5) + cos^-1(12/13) )`
```
  Let  A = cos^-1(3/5)   ->  cos A = 3/5 , sin A = 4/5     (3-4-5 triangle)
  Let  B = cos^-1(12/13) ->  cos B = 12/13 , sin B = 5/13  (5-12-13 triangle)

  Both A and B are in [0, pi] and both cosines are positive,
  so both A and B are in the FIRST quadrant, so both sines are POSITIVE. Good.

  sin(A + B) = sin A cos B + cos A sin B
             = (4/5)(12/13) + (3/5)(5/13)
             = 48/65 + 15/65
             = 63/65

  ANSWER:  63/65
```

> **TRAP:** deciding the **sign** of the third side. If the inverse function's
> answer sits in the first quadrant, every ratio is positive. If it sits in the
> second quadrant (a `cos^-1` of a negative number), then **sine stays positive but
> tangent and cosine go negative**. Always locate the quadrant before writing signs.

---

# TOPIC 10 — `tan^-1 x + tan^-1 y` : THE FORMULA THAT PAYS THE RENT

## 10.1 Where it comes from
```
  Let  A = tan^-1 x  and  B = tan^-1 y .  So  tan A = x , tan B = y .

                       tan A + tan B        x + y
      tan(A + B)  =  ------------------ = ---------
                     1 - tan A  tan B      1 - x y

  So  A + B  is AN angle whose tangent is (x+y)/(1-xy).
  But tan^-1 must return the angle in (-pi/2, pi/2).
  Is A + B in that interval?  NOT ALWAYS -- and that is where the cases come from.
```

## 10.2 The three cases — state them, always

```
  +---------------------------------------------------------------------------+
  |                                                                           |
  |                                       x + y                               |
  |  CASE 1   x y < 1                    -------                              |
  |           tan^-1 x + tan^-1 y = tan^-1  1 - xy                            |
  |                                                                           |
  |                                          x + y                            |
  |  CASE 2   x y > 1 , x > 0 , y > 0                                         |
  |           tan^-1 x + tan^-1 y = pi + tan^-1 -------                       |
  |                                             1 - xy                        |
  |                                                                           |
  |                                          x + y                            |
  |  CASE 3   x y > 1 , x < 0 , y < 0                                         |
  |           tan^-1 x + tan^-1 y = -pi + tan^-1 -------                      |
  |                                              1 - xy                       |
  |                                                                           |
  |  BOUNDARY x y = 1 :   sum = pi/2   if x > 0                               |
  |                       sum = -pi/2  if x < 0                               |
  |                                                                           |
  +---------------------------------------------------------------------------+
```

## 10.3 Why the `+pi` and `-pi` are there — the honest reason

```
  If x > 0 and y > 0 , then A > 0 and B > 0 , so  A + B > 0 .
  If in addition xy > 1 , then A + B is bigger than pi/2 -- it has escaped the
  principal range. So tan^-1 of the fraction gives you an angle that is pi TOO
  SMALL. You add pi to put it back.

  If x < 0 and y < 0 with xy > 1 , then A + B is below -pi/2 , and tan^-1 of the
  fraction gives an angle that is pi TOO BIG. You subtract pi.

  The sum A + B always lies in (-pi, pi) . The correction never exceeds one pi.
```

## WORKED EXAMPLE 10.1 — Case 1 (the normal one)
`tan^-1(1/2) + tan^-1(1/3)`
```
  xy = (1/2)(1/3) = 1/6 < 1     -> CASE 1

       x + y       1/2 + 1/3      5/6
      -------- = ------------ = ------- = 1
       1 - xy      1 - 1/6       5/6

  = tan^-1(1) = pi/4

  ANSWER:  pi/4
```

## WORKED EXAMPLE 10.2 — Case 2 (the trap)
`tan^-1(2) + tan^-1(3)`
```
  xy = 6 > 1 , and both x and y are POSITIVE   -> CASE 2 , add pi

       x + y        2 + 3        5
      -------- = ---------- = ------ = -1
       1 - xy      1 - 6       -5

  Sum = pi + tan^-1(-1) = pi - pi/4 = 3pi/4

  CHECK (decimal):  tan^-1 2 = 1.1071 , tan^-1 3 = 1.2490 , total = 2.3562
                    3pi/4 = 2.3562 .   MATCH.

  ANSWER:  3pi/4        (writing -pi/4 here loses every mark)
```

## WORKED EXAMPLE 10.3 — Case 3
`tan^-1(-2) + tan^-1(-3)`
```
  xy = 6 > 1 , both NEGATIVE   -> CASE 3 , subtract pi

       (-2) + (-3)     -5
      ------------- = ----- = -1
        1 - 6          -5

  Sum = -pi + tan^-1(-1) = -pi - pi/4 = -5pi/4 ??

  STOP. -5pi/4 is outside (-pi, pi). Recheck: tan^-1(-1) = -pi/4,
  so sum = -pi + (-pi/4) = -5pi/4 . But the true sum is
  -1.1071 - 1.2490 = -2.3562 = -3pi/4 .

  The slip is in the fraction. Recompute:  1 - xy = 1 - 6 = -5 ,
  x + y = -5 , so the fraction is (-5)/(-5) = +1 , not -1 .
  tan^-1(+1) = pi/4 .

  Sum = -pi + pi/4 = -3pi/4 .   MATCHES the decimal check.

  ANSWER:  -3pi/4
```
(That deliberate slip is exactly how marks get lost. **Always** do the decimal check.)

## 10.4 The difference formula

```
  +---------------------------------------------------------------------------+
  |                                       x - y                               |
  |  CASE 1   x y > -1                                                        |
  |           tan^-1 x - tan^-1 y = tan^-1 -------                            |
  |                                        1 + xy                             |
  |                                                                           |
  |  CASE 2   x y < -1 , x > 0 , y < 0                                        |
  |           tan^-1 x - tan^-1 y = pi + tan^-1 (same fraction)               |
  |                                                                           |
  |  CASE 3   x y < -1 , x < 0 , y > 0                                        |
  |           tan^-1 x - tan^-1 y = -pi + tan^-1 (same fraction)              |
  +---------------------------------------------------------------------------+
```
(It is just the sum formula with `y` replaced by `-y`. Do not memorise it separately.)

## WORKED EXAMPLE 10.4
Prove that `tan^-1(x/y) - tan^-1((x - y)/(x + y)) = pi/4`, for `x, y > 0`.
```
  Let  a = x/y ,  b = (x - y)/(x + y) .   Both are fine, and ab > -1.

              a - b
      -------------------
              1 + ab

                x       x - y
                - -  -------
                y     x + y             x(x+y) - y(x-y)        x^2 + y^2
      =  --------------------------- = ------------------- = -----------
                  x   x - y             y(x+y) + x(x-y)       x^2 + y^2
            1 + --- . -----
                 y    x + y

      =  1

  So the difference is  tan^-1(1) = pi/4 .    PROVED
```

---

# TOPIC 11 — DOUBLE AND TRIPLE ANGLE FORMULAS

Each of these says the **same** angle written three different ways — but each version
has its **own condition**. Writing the condition is worth marks on its own.

```
  +---------------------------------------------------------------------------+
  |                                                                           |
  |                              2x                                           |
  |   2 tan^-1 x  =  tan^-1  ---------          for  |x| < 1                  |
  |                           1 - x^2                                         |
  |                                                                           |
  |                              2x                                           |
  |   2 tan^-1 x  =  sin^-1  ---------          for  |x| <= 1                 |
  |                           1 + x^2                                         |
  |                                                                           |
  |                           1 - x^2                                         |
  |   2 tan^-1 x  =  cos^-1  ---------          for  x >= 0                   |
  |                           1 + x^2                                         |
  |                                                                           |
  +---------------------------------------------------------------------------+
```

**Where each condition comes from:**
```
  tan form:  need 2 tan^-1 x inside (-pi/2, pi/2)
             -> tan^-1 x inside (-pi/4, pi/4)  ->  |x| < 1
  sin form:  need 2 tan^-1 x inside [-pi/2, pi/2]
             -> tan^-1 x inside [-pi/4, pi/4]  ->  |x| <= 1
  cos form:  need 2 tan^-1 x inside [0, pi]
             -> tan^-1 x inside [0, pi/2)      ->  x >= 0
```

```
  +---------------------------------------------------------------------------+
  |   2 sin^-1 x  =  sin^-1 ( 2x sqrt(1 - x^2) )    for  |x| <= 1/sqrt2       |
  |                                                                           |
  |   2 cos^-1 x  =  cos^-1 ( 2x^2 - 1 )            for  0 <= x <= 1          |
  |                                                                           |
  |   3 tan^-1 x  =  tan^-1 ( (3x - x^3)/(1 - 3x^2) ) for  |x| < 1/sqrt3      |
  |                                                                           |
  |   3 sin^-1 x  =  sin^-1 ( 3x - 4x^3 )           for  |x| <= 1/2           |
  |                                                                           |
  |   3 cos^-1 x  =  cos^-1 ( 4x^3 - 3x )           for  1/2 <= x <= 1        |
  +---------------------------------------------------------------------------+
```

## WORKED EXAMPLE 11.1 — check all three double-angle forms with x = 1/2
```
  2 tan^-1(1/2) = 2 (0.4636) = 0.9273 radians

  tan form:  2x/(1-x^2) = 1 / (3/4) = 4/3 ;  tan^-1(4/3) = 0.9273   OK  (|x|<1)
  sin form:  2x/(1+x^2) = 1 / (5/4) = 4/5 ;  sin^-1(4/5) = 0.9273   OK  (|x|<=1)
  cos form: (1-x^2)/(1+x^2) = (3/4)/(5/4) = 3/5 ; cos^-1(3/5) = 0.9273  OK (x>=0)

  All three agree.
```

## WORKED EXAMPLE 11.2 — Prove `sin^-1(4/5) + 2 tan^-1(1/3) = pi/2`
```
  STEP 1   Convert the sin^-1 to a tan^-1 using the 3-4-5 triangle:
                sin^-1(4/5) = tan^-1(4/3)

  STEP 2   Collapse the double angle.  x = 1/3 , |x| < 1 , so the tan form is legal:
                                    2(1/3)         2/3
                2 tan^-1(1/3) = tan^-1 -------- = tan^-1 ----- = tan^-1(3/4)
                                    1 - 1/9         8/9

  STEP 3   Now add.  x = 4/3 , y = 3/4 .  These are RECIPROCALS and both positive,
           so xy = 1 exactly -> the BOUNDARY case -> the sum is pi/2 .

           (Or quote:  tan^-1 a + tan^-1(1/a) = pi/2 for a > 0.)

  Hence  sin^-1(4/5) + 2 tan^-1(1/3) = pi/2 .     PROVED
```
Note how the answer would be **wrong** if you had blindly used the `xy < 1` formula:
`1 - xy = 0`, and you cannot divide by zero. Checking `xy` first is what saves you.

## WORKED EXAMPLE 11.3 — Prove `tan^-1( (sqrt(1 + x^2) - 1) / x ) = (1/2) tan^-1 x`, for `x > 0`
```
  Put  x = tan t ,  with t in (0, pi/2) since x > 0.  Then t = tan^-1 x .

  sqrt(1 + x^2) = sqrt(1 + tan^2 t) = sec t          [positive, since t is acute]

       sec t - 1        (1/cos t) - 1        1 - cos t
      ----------- = ------------------ = -------------
         tan t         sin t / cos t          sin t

                    2 sin^2(t/2)
                 = --------------- = tan(t/2)
                   2 sin(t/2)cos(t/2)

  So LHS = tan^-1( tan(t/2) ) .
  Since t is in (0, pi/2) , t/2 is in (0, pi/4) , which IS inside (-pi/2, pi/2),
  so the cancellation is legal:  LHS = t/2 = (1/2) tan^-1 x .    PROVED
```

---

# TOPIC 12 — `sin^-1 x + sin^-1 y` AND `cos^-1 x + cos^-1 y`

```
  +---------------------------------------------------------------------------+
  |                                                                           |
  |   sin^-1 x + sin^-1 y                                                     |
  |        = sin^-1 ( x sqrt(1-y^2) + y sqrt(1-x^2) )                         |
  |               if  x^2 + y^2 <= 1 ,  OR  (x^2 + y^2 > 1 and x y < 0)       |
  |                                                                           |
  |        = pi - sin^-1 ( same thing )                                       |
  |               if  x > 0 , y > 0  and  x^2 + y^2 > 1                       |
  |                                                                           |
  |        = -pi - sin^-1 ( same thing )                                      |
  |               if  x < 0 , y < 0  and  x^2 + y^2 > 1                       |
  |                                                                           |
  +---------------------------------------------------------------------------+

  +---------------------------------------------------------------------------+
  |                                                                           |
  |   sin^-1 x - sin^-1 y = sin^-1 ( x sqrt(1-y^2) - y sqrt(1-x^2) )          |
  |               if  x^2 + y^2 <= 1 ,  OR  (x^2 + y^2 > 1 and x y > 0)       |
  |                                                                           |
  +---------------------------------------------------------------------------+

  +---------------------------------------------------------------------------+
  |                                                                           |
  |   cos^-1 x + cos^-1 y                                                     |
  |        = cos^-1 ( x y - sqrt(1-x^2) sqrt(1-y^2) )      if  x + y >= 0     |
  |                                                                           |
  |        = 2pi - cos^-1 ( same thing )                   if  x + y < 0      |
  |                                                                           |
  |   cos^-1 x - cos^-1 y                                                     |
  |        = cos^-1 ( x y + sqrt(1-x^2) sqrt(1-y^2) )      if  x <= y         |
  |                                                                           |
  |        = - cos^-1 ( same thing )                       if  x >= y         |
  |                                                                           |
  +---------------------------------------------------------------------------+
```

**Memory hook for the cos one:** it is just `cos(A + B) = cosA cosB - sinA sinB`
turned inside out. The minus sign in the bracket is the minus sign of `cos(A+B)`.

## WORKED EXAMPLE 12.1 — Prove `sin^-1(3/5) + sin^-1(8/17) = cos^-1(36/85)`
```
  x = 3/5 , y = 8/17 .
  x^2 + y^2 = 9/25 + 64/289 = (9 x 289 + 64 x 25)/7225 = (2601 + 1600)/7225
            = 4201/7225 < 1        -> plain formula, NO pi correction

  sqrt(1 - x^2) = sqrt(1 - 9/25) = 4/5
  sqrt(1 - y^2) = sqrt(1 - 64/289) = 15/17

  x sqrt(1-y^2) + y sqrt(1-x^2) = (3/5)(15/17) + (8/17)(4/5)
                                = 45/85 + 32/85 = 77/85

  So LHS = sin^-1(77/85) .

  Convert to cos^-1 :  if sin = 77/85 , then adjacent = sqrt(85^2 - 77^2)
                       = sqrt(7225 - 5929) = sqrt(1296) = 36
                       so  sin^-1(77/85) = cos^-1(36/85)

  Hence  sin^-1(3/5) + sin^-1(8/17) = cos^-1(36/85) .    PROVED
```

## WORKED EXAMPLE 12.2 — Prove `cos^-1(4/5) + cos^-1(12/13) = cos^-1(33/65)`
```
  x = 4/5 , y = 12/13 .  x + y > 0    -> plain formula, no 2pi correction.

  sqrt(1 - x^2) = 3/5 ,  sqrt(1 - y^2) = 5/13

  xy - sqrt(1-x^2) sqrt(1-y^2) = (4/5)(12/13) - (3/5)(5/13)
                               = 48/65 - 15/65 = 33/65

  Hence  cos^-1(4/5) + cos^-1(12/13) = cos^-1(33/65) .    PROVED
```

## WORKED EXAMPLE 12.3 — Prove `sin^-1(3/5) - sin^-1(8/17) = cos^-1(84/85)`
```
  x = 3/5 , y = 8/17 , x^2 + y^2 < 1  -> plain difference formula.

  x sqrt(1-y^2) - y sqrt(1-x^2) = (3/5)(15/17) - (8/17)(4/5)
                                = 45/85 - 32/85 = 13/85

  LHS = sin^-1(13/85) .
  If sin = 13/85 , adjacent = sqrt(7225 - 169) = sqrt(7056) = 84
  so  sin^-1(13/85) = cos^-1(84/85) .        PROVED
```

---

# TOPIC 13 — PROVING THREE-TERM IDENTITIES (the classic long answer)

## 13.1 The universal method
```
  STEP 1   Convert everything to tan^-1 using right triangles.
  STEP 2   Add the FIRST TWO terms with the sum formula.  Check xy first.
  STEP 3   Add the result to the THIRD term. Check xy again.
  STEP 4   Land on tan^-1(1) = pi/4 , or tan^-1 of the required value.
  STEP 5   Write the concluding sentence: "Hence proved."
```
Choosing which two to pair first is free — pick the pair that gives the neatest
fraction. Usually the two smallest.

## WORKED EXAMPLE 13.1 — `tan^-1(1/2) + tan^-1(1/5) + tan^-1(1/8) = pi/4`
```
  FIRST PAIR:  x = 1/2 , y = 1/5 ,  xy = 1/10 < 1     -> plain formula

       1/2 + 1/5       7/10       7
      ------------ = --------- = ---
       1 - 1/10        9/10       9

  So  tan^-1(1/2) + tan^-1(1/5) = tan^-1(7/9)

  NOW ADD THE THIRD:  x = 7/9 , y = 1/8 ,  xy = 7/72 < 1   -> plain formula

       7/9 + 1/8       (56 + 9)/72       65/72
      ------------- = ------------- = --------- = 1
       1 - 7/72        (72 - 7)/72       65/72

  = tan^-1(1) = pi/4                        HENCE PROVED
```

## WORKED EXAMPLE 13.2 — `tan^-1(1/3) + tan^-1(1/5) + tan^-1(1/7) + tan^-1(1/8) = pi/4`
```
  Pair them 1st-with-2nd and 3rd-with-4th (much cleaner than left to right).

  PAIR A:  x = 1/3 , y = 1/5 , xy = 1/15 < 1
              (1/3 + 1/5)/(1 - 1/15) = (8/15)/(14/15) = 8/14 = 4/7
           -> tan^-1(4/7)

  PAIR B:  x = 1/7 , y = 1/8 , xy = 1/56 < 1
              (1/7 + 1/8)/(1 - 1/56) = (15/56)/(55/56) = 15/55 = 3/11
           -> tan^-1(3/11)

  COMBINE: x = 4/7 , y = 3/11 , xy = 12/77 < 1
              (4/7 + 3/11)/(1 - 12/77) = ((44 + 21)/77)/((77 - 12)/77)
                                       = (65/77)/(65/77) = 1

  = tan^-1(1) = pi/4                        HENCE PROVED
```

## WORKED EXAMPLE 13.3 — `sin^-1(4/5) + sin^-1(5/13) + sin^-1(16/65) = pi/2`
```
  STEP 1  Convert each to tan^-1 with a triangle:
             sin^-1(4/5)   -> 3-4-5    -> tan^-1(4/3)
             sin^-1(5/13)  -> 5-12-13  -> tan^-1(5/12)
             sin^-1(16/65) -> 16-63-65 -> tan^-1(16/63)
                              (63 = sqrt(65^2 - 16^2) = sqrt(4225-256) = sqrt3969)

  STEP 2  Add the first two.  x = 4/3 , y = 5/12 ,  xy = 20/36 = 5/9 < 1

             (4/3 + 5/12)/(1 - 5/9) = ((16 + 5)/12)/(4/9)
                                    = (21/12)(9/4) = 189/48 = 63/16
          -> tan^-1(63/16)

  STEP 3  Add the third.  Notice 63/16 and 16/63 are RECIPROCALS, both positive.
          By the boundary rule,  tan^-1(a) + tan^-1(1/a) = pi/2  for a > 0.

  Total = pi/2 .                            HENCE PROVED
```

## WORKED EXAMPLE 13.4 — `4 tan^-1(1/5) - tan^-1(1/70) + tan^-1(1/99) = pi/4`
```
  STEP 1   2 tan^-1(1/5):   |1/5| < 1 , tan form legal
                  2(1/5)/(1 - 1/25) = (2/5)/(24/25) = 10/24 = 5/12
           -> tan^-1(5/12)

  STEP 2   4 tan^-1(1/5) = 2 tan^-1(5/12):   |5/12| < 1 , legal
                  2(5/12)/(1 - 25/144) = (5/6)/(119/144) = (5 x 144)/(6 x 119)
                                       = 720/714 = 120/119
           -> tan^-1(120/119)

  STEP 3   Subtract tan^-1(1/70).  xy = 120/(119 x 70) > -1 , plain formula.

                 120/119 - 1/70        (120x70 - 119)/(119x70)      8281/8330
            ----------------------- = -------------------------- = -----------
             1 + 120/(119 x 70)        (8330 + 120)/8330            8450/8330

            = 8281/8450 .   Now 8281 = 49 x 169 , 8450 = 50 x 169
            = 49/50
           -> tan^-1(49/50)

  STEP 4   Add tan^-1(1/99).  xy = 49/4950 < 1 , plain formula.

              49/50 + 1/99        (49x99 + 50)/4950        4901/4950
            ----------------- = --------------------- = ------------- = 1
             1 - 49/4950          (4950 - 49)/4950         4901/4950

           = tan^-1(1) = pi/4                HENCE PROVED
```

## 13.2 The CONDITIONAL identities (sum equals pi or pi/2)

These are the "if ... then prove ..." questions. The trick is always the same:
**name the three inverse functions A, B, C, then use an ordinary trigonometric
identity for a triangle.**

```
  +---------------------------------------------------------------------------+
  |                                                                           |
  |  IF  tan^-1 x + tan^-1 y + tan^-1 z = pi                                  |
  |  THEN  x + y + z = x y z                                                  |
  |                                                                           |
  |  IF  tan^-1 x + tan^-1 y + tan^-1 z = pi/2                                |
  |  THEN  x y + y z + z x = 1                                                |
  |                                                                           |
  |  IF  cos^-1 x + cos^-1 y + cos^-1 z = pi                                  |
  |  THEN  x^2 + y^2 + z^2 + 2 x y z = 1                                      |
  |                                                                           |
  |  IF  sin^-1 x + sin^-1 y + sin^-1 z = pi                                  |
  |  THEN  x sqrt(1-x^2) + y sqrt(1-y^2) + z sqrt(1-z^2) = 2 x y z            |
  |                                                                           |
  |  IF  sin^-1 x + sin^-1 y + sin^-1 z = 3pi/2   THEN  x = y = z = 1         |
  |  IF  cos^-1 x + cos^-1 y + cos^-1 z = 3pi     THEN  x = y = z = -1        |
  |                                                                           |
  +---------------------------------------------------------------------------+
```

## WORKED EXAMPLE 13.5 — If `tan^-1 x + tan^-1 y + tan^-1 z = pi`, prove `x + y + z = xyz`
```
  Let  A = tan^-1 x ,  B = tan^-1 y ,  C = tan^-1 z .
  So  tan A = x ,  tan B = y ,  tan C = z ,  and  A + B + C = pi .

  Then  A + B = pi - C , so

        tan(A + B) = tan(pi - C) = - tan C

         tan A + tan B
      ------------------ = - tan C
       1 - tanA tanB

           x + y
        ---------- = - z
          1 - x y

        x + y = -z (1 - xy) = -z + xyz

        x + y + z = x y z                     HENCE PROVED
```

## WORKED EXAMPLE 13.6 — If `tan^-1 x + tan^-1 y + tan^-1 z = pi/2`, prove `xy + yz + zx = 1`
```
  Let  A = tan^-1 x , B = tan^-1 y , C = tan^-1 z ,  A + B + C = pi/2 .

        A + B = pi/2 - C

        tan(A + B) = tan(pi/2 - C) = cot C = 1 / tan C = 1/z

          x + y        1
        ---------- = -----
          1 - xy       z

        z (x + y) = 1 - x y

        z x + z y + x y = 1                   HENCE PROVED
```

## WORKED EXAMPLE 13.7 — If `cos^-1 x + cos^-1 y + cos^-1 z = pi`, prove `x^2 + y^2 + z^2 + 2xyz = 1`
```
  Let  A = cos^-1 x , B = cos^-1 y , C = cos^-1 z .  So cos A = x etc., A+B+C = pi.

  A + B = pi - C   =>   cos(A + B) = cos(pi - C) = - cos C = -z

        cosA cosB - sinA sinB = -z
        x y - sinA sinB = -z
        sinA sinB = x y + z

  Now square both sides.  A and B are in [0, pi], so sinA, sinB are >= 0. Fine.

        (1 - x^2)(1 - y^2) = (x y + z)^2
        1 - x^2 - y^2 + x^2 y^2 = x^2 y^2 + 2 x y z + z^2
        1 - x^2 - y^2 = 2 x y z + z^2
        1 = x^2 + y^2 + z^2 + 2 x y z          HENCE PROVED
```

## WORKED EXAMPLE 13.8 — If `sin^-1 x + sin^-1 y + sin^-1 z = pi`, prove
`x sqrt(1-x^2) + y sqrt(1-y^2) + z sqrt(1-z^2) = 2 x y z`
```
  Let  A = sin^-1 x , B = sin^-1 y , C = sin^-1 z .  Then A + B + C = pi,
  so A, B, C behave exactly like the three angles of a triangle.

  Standard triangle identity:   sin2A + sin2B + sin2C = 4 sinA sinB sinC

  Now  sin 2A = 2 sinA cosA = 2 x sqrt(1 - x^2)     [cosA >= 0 is NOT automatic,
        but since A+B+C = pi with each A in [-pi/2, pi/2], all three must be
        non-negative and acute-or-right, so cosA = +sqrt(1 - x^2). ]

  Substituting:
        2x sqrt(1-x^2) + 2y sqrt(1-y^2) + 2z sqrt(1-z^2) = 4 x y z

  Divide by 2:
        x sqrt(1-x^2) + y sqrt(1-y^2) + z sqrt(1-z^2) = 2 x y z    HENCE PROVED
```

---

# TOPIC 14 — SOLVING EQUATIONS IN x

## 14.1 The method
```
  STEP 1   Collect the inverse functions so that ONE inverse stands on each side.
           (Use the sum / difference / double-angle formulas.)
  STEP 2   Take tan (or sin, or cos) of both sides -- OR simply cancel the two
           identical inverse functions, since they are one-one.
  STEP 3   Solve the resulting ORDINARY algebraic equation.
  STEP 4   *** SUBSTITUTE EVERY ROOT BACK. *** Reject any root that breaks a
           domain condition or lands the answer outside a principal range.
```

Step 4 is not optional. These questions are **designed** to produce a fake root.

## WORKED EXAMPLE 14.1 — Solve `tan^-1(x + 1) + tan^-1(x - 1) = tan^-1(8/31)`
```
  LHS:  a = x+1 , b = x-1 ,  a + b = 2x ,  ab = x^2 - 1

        Assume first that ab < 1 (we will check at the end):

               2x               2x
        LHS = tan^-1 ------------- = tan^-1 -------
                     1 - (x^2 - 1)          2 - x^2

  Equate the arguments (tan^-1 is one-one):

           2x        8
        -------- = ------
         2 - x^2     31

        62 x = 16 - 8 x^2
        8 x^2 + 62 x - 16 = 0
        4 x^2 + 31 x - 8 = 0
        (4x - 1)(x + 8) = 0
        x = 1/4    or    x = -8

  CHECK x = 1/4 :  ab = (1/16) - 1 = -15/16 < 1 . Good.
        tan^-1(1.25) + tan^-1(-0.75) = 0.8961 - 0.6435 = 0.2526
        tan^-1(8/31) = tan^-1(0.2581) = 0.2526 .   MATCHES.

  CHECK x = -8 :   a = -7 , b = -9 , both NEGATIVE and ab = 63 > 1
        -> CASE 3 applies, the sum is  -pi + tan^-1(8/31) , which is negative.
        But the RHS tan^-1(8/31) is positive.  CONTRADICTION.
        REJECT x = -8 .

  ANSWER:  x = 1/4
```

## WORKED EXAMPLE 14.2 — Solve `tan^-1((x-1)/(x-2)) + tan^-1((x+1)/(x+2)) = pi/4`
```
  a = (x-1)/(x-2) ,  b = (x+1)/(x+2)

        a + b = [ (x-1)(x+2) + (x+1)(x-2) ] / [ (x-2)(x+2) ]
              = [ (x^2 + x - 2) + (x^2 - x - 2) ] / (x^2 - 4)
              = (2x^2 - 4)/(x^2 - 4)

        ab    = (x^2 - 1)/(x^2 - 4)

        1 - ab = [ (x^2 - 4) - (x^2 - 1) ] / (x^2 - 4) = -3/(x^2 - 4)

         a + b      (2x^2 - 4)/(x^2-4)        2x^2 - 4
        -------- = --------------------- = -----------
         1 - ab      -3/(x^2 - 4)              -3

  Set equal to tan(pi/4) = 1 :

        2x^2 - 4 = -3
        2x^2 = 1
        x^2 = 1/2
        x = 1/sqrt2    or    x = -1/sqrt2

  CHECK x = 1/sqrt2 = 0.7071 :
        a = (-0.2929)/(-1.2929) = 0.2265 ,  b = (1.7071)/(2.7071) = 0.6306
        tan^-1(0.2265) + tan^-1(0.6306) = 0.2228 + 0.5623 = 0.7851
        pi/4 = 0.7854 .   MATCHES (rounding).

  CHECK x = -1/sqrt2 = -0.7071 :
        a = (-1.7071)/(-2.7071) = 0.6306 ,  b = (0.2929)/(1.2929) = 0.2265
        Same two numbers, so the sum is again pi/4 .   MATCHES.

  ANSWER:  x = +- 1/sqrt2       (both roots are genuine here)
```

## WORKED EXAMPLE 14.3 — Solve `tan^-1(x-1) + tan^-1(x) + tan^-1(x+1) = tan^-1(3x)`
```
  Pair the OUTER two:  a = x-1 , b = x+1 , ab = x^2 - 1

                                 2x                2x
        tan^-1(x-1)+tan^-1(x+1) = tan^-1 ------------- = tan^-1 -------
                                  1 - (x^2 - 1)        2 - x^2

  Move tan^-1 x to the right instead of adding it:

        tan^-1( 2x/(2-x^2) ) = tan^-1(3x) - tan^-1(x)

                                        3x - x            2x
        RHS = tan^-1 ------------------------- = tan^-1 ---------
                            1 + 3x^2                     1 + 3x^2

  Equate the arguments:

            2x            2x
        -------- = -----------
         2 - x^2     1 + 3x^2

        2x ( 1 + 3x^2 ) = 2x ( 2 - x^2 )
        2x [ (1 + 3x^2) - (2 - x^2) ] = 0
        2x ( 4x^2 - 1 ) = 0

        x = 0 ,  x = 1/2 ,  x = -1/2

  CHECK x = 0 :   tan^-1(-1)+tan^-1(0)+tan^-1(1) = -pi/4 + 0 + pi/4 = 0
                  RHS = tan^-1(0) = 0 .   MATCHES.
  CHECK x = 1/2 : LHS = tan^-1(-0.5)+tan^-1(0.5)+tan^-1(1.5)
                      = -0.4636 + 0.4636 + 0.9828 = 0.9828
                  RHS = tan^-1(1.5) = 0.9828 .   MATCHES.
  CHECK x = -1/2: by oddness both sides simply change sign.  MATCHES.

  ANSWER:  x = 0 , 1/2 , -1/2
```

## WORKED EXAMPLE 14.4 — Solve `sin^-1(1 - x) - 2 sin^-1(x) = pi/2`
```
  Let  sin^-1 x = t .  Then  sin^-1(1 - x) = pi/2 + 2t .

  Since sin^-1 can never exceed pi/2 , we need  pi/2 + 2t <= pi/2 , so t <= 0,
  i.e.  x <= 0 .   REMEMBER THIS.

  Take sine of both sides:
        1 - x = sin(pi/2 + 2t) = cos 2t = 1 - 2 sin^2 t = 1 - 2x^2

        1 - x = 1 - 2x^2
        2x^2 - x = 0
        x (2x - 1) = 0
        x = 0   or   x = 1/2

  CHECK x = 0 :   sin^-1(1) - 2 sin^-1(0) = pi/2 - 0 = pi/2 .   MATCHES.
  CHECK x = 1/2 : it violates x <= 0 .  Also directly:
                  sin^-1(1/2) - 2 sin^-1(1/2) = -sin^-1(1/2) = -pi/6 , not pi/2.
                  REJECT.

  ANSWER:  x = 0
```

## WORKED EXAMPLE 14.5 — Solve `tan^-1(1/(2x+1)) + tan^-1(1/(4x+1)) = tan^-1(2/x^2)`
```
                    1/(2x+1) + 1/(4x+1)            (4x+1) + (2x+1)
  LHS argument = -------------------------- = -----------------------------
                  1 - 1/[(2x+1)(4x+1)]         (2x+1)(4x+1) - 1

                     6x + 2                 6x + 2
               = ------------------ = ---------------
                  8x^2 + 6x + 1 - 1     8x^2 + 6x

  Equate to 2/x^2 :

        x^2 (6x + 2) = 2 (8x^2 + 6x)
        6x^3 + 2x^2 = 16x^2 + 12x
        6x^3 - 14x^2 - 12x = 0
        2x ( 3x^2 - 7x - 6 ) = 0
        2x (3x + 2)(x - 3) = 0

        x = 0  (rejected: 2/x^2 undefined)
        x = -2/3   or   x = 3

  CHECK x = 3 :  tan^-1(1/7) + tan^-1(1/13) ,  xy = 1/91 < 1
                 (1/7 + 1/13)/(1 - 1/91) = (20/91)/(90/91) = 2/9
                 RHS = tan^-1(2/9) .   MATCHES.

  CHECK x = -2/3 :  2x+1 = -1/3 so 1/(2x+1) = -3 ; 4x+1 = -5/3 so 1/(4x+1) = -3/5
                 Both negative with product 9/5 > 1  -> CASE 3, sum is NEGATIVE.
                 RHS = tan^-1(2/(4/9)) = tan^-1(4.5) , which is POSITIVE.
                 REJECT.

  ANSWER:  x = 3
```

## WORKED EXAMPLE 14.6 — Solve `2 tan^-1(cos x) = tan^-1(2 cosec x)`
```
  Double angle on the left ( |cos x| < 1 required, so x =/= 0, pi ):

                          2 cos x              2 cos x
        LHS = tan^-1 ---------------- = tan^-1 ---------
                       1 - cos^2 x             sin^2 x

  RHS argument = 2 cosec x = 2 / sin x

        2 cos x        2
       --------- = ---------
        sin^2 x      sin x

        2 cos x sin x = 2 sin^2 x            [multiply both sides by sin^2 x]
        2 sin x (cos x - sin x) = 0

        sin x = 0  ->  rejected (cosec x would be undefined)
        cos x = sin x  ->  tan x = 1  ->  x = pi/4  (principal solution)

  ANSWER:  x = pi/4   (general:  x = n pi + pi/4 )
```

## WORKED EXAMPLE 14.7 — Solve `tan^-1((1-x)/(1+x)) = (1/2) tan^-1 x`, for `x > 0`
```
  Notice  (1-x)/(1+x)  is exactly the "difference" pattern with 1 and x:

        tan^-1((1-x)/(1+x)) = tan^-1(1) - tan^-1(x) = pi/4 - tan^-1 x
        (legal because 1 . x = x > -1 , Case 1)

  So    pi/4 - tan^-1 x = (1/2) tan^-1 x
        pi/4 = (3/2) tan^-1 x
        tan^-1 x = pi/6
        x = tan(pi/6) = 1/sqrt3

  CHECK: (1 - 0.5774)/(1 + 0.5774) = 0.4226/1.5774 = 0.2679
         tan^-1(0.2679) = 0.2618 = pi/12
         (1/2) tan^-1(0.5774) = (1/2)(0.5236) = 0.2618 .   MATCHES.

  ANSWER:  x = 1/sqrt3
```

> **TRAP:** never "cancel the tan^-1" until you have got the equation down to
> **exactly one** inverse function on each side. Cancelling too early is the
> commonest way to lose 3 of the 4 marks.

---

# TOPIC 15 — THE HYPERBOLIC CONNECTION (one page, honest scope)

The AP Inter 1A syllabus keeps **hyperbolic functions in Chapter 9**, not Chapter 8.
So a Chapter 8 exam question will **not** ask you for `sinh^-1 x`. But the two chapters
sit next to each other, questions occasionally mix them, and the *logic* is identical
— so here is the bridge in one page.

## 15.1 The same idea, a different curve
```
  Circular:     a point on the circle    x^2 + y^2 = 1   ->  (cos t , sin t)
  Hyperbolic:   a point on the hyperbola x^2 - y^2 = 1   ->  (cosh t , sinh t)

  sinh t = (e^t - e^-t)/2        cosh t = (e^t + e^-t)/2       tanh t = sinh/cosh
```

`sinh` is already one-one on all of R, so `sinh^-1` needs **no restriction at all**.
`cosh` is many-one (it is even), so `cosh^-1` is restricted to `x >= 1` with a
non-negative answer — exactly the same reasoning as `cos^-1`.

## 15.2 The inverse hyperbolic functions in log form (Chapter 9 formulas)
```
  +---------------------------------------------------------------------------+
  |   sinh^-1 x   = log( x + sqrt(x^2 + 1) )              x in R              |
  |   cosh^-1 x   = log( x + sqrt(x^2 - 1) )              x >= 1              |
  |   tanh^-1 x   = (1/2) log( (1 + x)/(1 - x) )          |x| < 1             |
  |   coth^-1 x   = (1/2) log( (x + 1)/(x - 1) )          |x| > 1             |
  |   sech^-1 x   = log( (1 + sqrt(1 - x^2)) / x )        0 < x <= 1          |
  |  cosech^-1 x  = log( (1/x) + sqrt(1 + x^2)/|x| )      x =/= 0             |
  +---------------------------------------------------------------------------+
```

## WORKED EXAMPLE 15.1 — the crossover question
Show that `tanh^-1(1/2) = (1/2) log 3`.
```
        tanh^-1(1/2) = (1/2) log( (1 + 1/2)/(1 - 1/2) )
                     = (1/2) log( (3/2)/(1/2) )
                     = (1/2) log 3

  Check:  |1/2| < 1 , inside the domain.  Good.
```

## WORKED EXAMPLE 15.2 — the analogy question
```
  CIRCULAR                                 HYPERBOLIC
  ---------------------------------------  -------------------------------------
  sin^-1 x + cos^-1 x = pi/2               (no analogue -- hyperbolic angles are
                                            unbounded, so there is no "pi/2")
  sin(sin^-1 x) = x , |x| <= 1             sinh(sinh^-1 x) = x , all real x
  sin^-1 needs a restricted domain         sinh^-1 does NOT
  cos^-1 range is [0, pi]                  cosh^-1 range is [0, infinity)
```

> If a question in your paper mixes the two, it will be a Chapter 9 question
> wearing Chapter 8 clothes. Use the log formulas above; the restriction logic is
> the same.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write sin^-1 and never confuse it with 1/sin ?

  [ ]  Is every cos^-1 , cot^-1 and sec^-1 answer between 0 and pi
       (i.e. NOT negative) ?

  [ ]  Is every sin^-1 , tan^-1 and cosec^-1 answer between -pi/2 and pi/2 ?

  [ ]  For a negative argument, did I use  -sin^-1(x)  for the sin family and
       pi - cos^-1(x)  for the cos family, and NOT mix them up ?

  [ ]  For sin^-1(sin theta) , did I CHECK whether theta is inside the range
       before cancelling ?

  [ ]  Before using  tan^-1 x + tan^-1 y ,  did I write down the value of  x y
       and state which of the three cases applies ?

  [ ]  Did I write the CONDITION next to every formula I quoted ?
       (Examiners award a mark for it.)

  [ ]  For a double-angle formula, did I check the right condition
       ( |x| < 1 for tan form, |x| <= 1 for sin form, x >= 0 for cos form ) ?

  [ ]  In an equation, did I SUBSTITUTE every root back and reject the fake one ?

  [ ]  Are my angles in RADIANS with pi in them, not in degrees ?
       (Write pi/6 , not 30 . The board expects radians.)

  [ ]  Did I finish each proof with a concluding line ("Hence proved") ?
```

**The one-line summary of this whole chapter:**
*Find the angle, then force it into its principal range.*
