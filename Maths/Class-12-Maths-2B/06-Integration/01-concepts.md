# Integration — Concepts Explained Simply

Read one topic. Do its worked examples. Then move to the next.
Nothing here assumes you remember anything except how to differentiate.

**The one promise of this chapter:** you can always check your own answer.
Differentiate what you wrote. If the question comes back, you are right.

---

# TOPIC 1 — What integration actually is

Differentiation is a machine. Put a function in, get its derivative out.

```
                 d/dx
      x^3   -------------->   3x^2
```

Integration is the SAME machine run **backwards**. You are told the answer
`3x^2` and asked: *what did I start with?*

```
                 INT ... dx
      3x^2  -------------->   x^3
```

We write this as

```
      INT 3x^2 dx  =  x^3  +  c
```

Read it out loud as: *"the integral of 3x squared, with respect to x".*

- The sign `INT` is the integral sign.
- `3x^2` is the **integrand** (the thing being integrated).
- `dx` says *the variable is x*. **Never leave it out.**
- `x^3` is the **antiderivative** or **primitive**.
- `c` is the **constant of integration**.

## Why + c must be there

The derivative of any constant is 0. So all of these give the same derivative:

```
   d/dx ( x^3      )  =  3x^2
   d/dx ( x^3 + 5  )  =  3x^2
   d/dx ( x^3 - 99 )  =  3x^2
   d/dx ( x^3 + c  )  =  3x^2      <-- c is ANY number
```

Running backwards you cannot possibly know which constant was there. So you
report **all** of them at once by writing `+ c`.

```
   +--------------------------------------------------------+
   |                                                        |
   |    INT f(x) dx  =  F(x) + c       where  F'(x) = f(x)  |
   |                                                        |
   +--------------------------------------------------------+
```

> **TRAP:** Missing `+ c` is the single most common lost mark in Maths IIB.
> Write it the moment you finish the last term, before you even look up.

## The first thing to do with ANY integral

Ask: **"what do I differentiate to get this?"** For easy ones that is the whole
method. You do not need a rule for `INT cos x dx` — you already know
`d/dx (sin x) = cos x`, so the answer is `sin x + c`.

### Worked example 1
Find `INT 5 dx`.

```
   What differentiates to 5 ?     5x

   INT 5 dx  =  5x + c

   CHECK:  d/dx (5x + c) = 5      correct
```

### Worked example 2
Find `INT sec^2 x dx`.

```
   You already know   d/dx (tan x) = sec^2 x

   INT sec^2 x dx  =  tan x + c
```

---

# TOPIC 2 — The power rule (the one you use most)

```
   +--------------------------------------------------+
   |                                                  |
   |                     x^(n + 1)                    |
   |    INT x^n dx  =   -----------   +  c            |
   |                       n + 1                      |
   |                                                  |
   |    valid for every n EXCEPT n = -1               |
   +--------------------------------------------------+
```

**In words: add one to the power, then divide by the new power.**

Why n = -1 is banned: if n = -1 the new power is 0 and you would divide by 0.
That single case has its own answer:

```
   INT (1/x) dx  =  log |x|  +  c
```

The bars `| |` are compulsory — `log` of a negative number does not exist, so we
take the size of x.

### Worked example 3

```
   INT x^5 dx    =  x^6 / 6  + c

   INT x dx      =  x^2 / 2  + c            (here n = 1)

   INT dx        =  x + c                   (here n = 0, since 1 = x^0)

   INT (1/x^3) dx =  INT x^-3 dx
                  =  x^-2 / (-2) + c
                  =  -1/(2x^2) + c

   CHECK:  d/dx ( -1/(2x^2) ) = d/dx ( -(1/2) x^-2 )
                              = -(1/2)(-2) x^-3 = x^-3 = 1/x^3     correct
```

### Worked example 4 — roots are powers in disguise

```
   INT sqrt(x) dx  =  INT x^(1/2) dx

                      x^(3/2)         2
                   = ---------  + c = --- x^(3/2) + c
                        3/2           3


   INT 1/sqrt(x) dx = INT x^(-1/2) dx

                      x^(1/2)
                   = ---------  + c  =  2 sqrt(x) + c
                        1/2
```

> **TRAP:** Students write `INT sqrt(x) dx = sqrt(x^2)/2`. Rubbish.
> ALWAYS convert every root to a power first, then use the rule.

---

# TOPIC 3 — THE STANDARD TABLE (learn this like the alphabet)

Every one of these is just a derivative you already know, written backwards.
Cover the right column and test yourself. You must reach the point where you
can write all 20 in three minutes.

| # | INT ... dx | = | Because d/dx of the answer is ... |
|---|-----------|---|-----------------------------------|
| 1 | x^n (n not -1) | x^(n+1)/(n+1) + c | the power rule |
| 2 | 1/x | log abs(x) + c | 1/x |
| 3 | e^x | e^x + c | e^x |
| 4 | a^x | a^x / log a + c | a^x log a |
| 5 | sin x | -cos x + c | -(-sin x) = sin x |
| 6 | cos x | sin x + c | cos x |
| 7 | tan x | log abs(sec x) + c , or -log abs(cos x) + c | see Topic 9 |
| 8 | cot x | log abs(sin x) + c | see Topic 9 |
| 9 | sec x | log abs(sec x + tan x) + c | see Topic 9 |
| 10 | cosec x | log abs(cosec x - cot x) + c | see Topic 9 |
| 11 | sec^2 x | tan x + c | sec^2 x |
| 12 | cosec^2 x | -cot x + c | -(-cosec^2 x) |
| 13 | sec x tan x | sec x + c | sec x tan x |
| 14 | cosec x cot x | -cosec x + c | -(-cosec x cot x) |
| 15 | 1/sqrt(1 - x^2) | Sin^-1 x + c | derivative of Sin^-1 x |
| 16 | -1/sqrt(1 - x^2) | Cos^-1 x + c | derivative of Cos^-1 x |
| 17 | 1/(1 + x^2) | Tan^-1 x + c | derivative of Tan^-1 x |
| 18 | -1/(1 + x^2) | Cot^-1 x + c | derivative of Cot^-1 x |
| 19 | 1/(x sqrt(x^2 - 1)) | Sec^-1 x + c | derivative of Sec^-1 x |
| 20 | -1/(x sqrt(x^2 - 1)) | Cosec^-1 x + c | derivative of Cosec^-1 x |

Also in the AP syllabus (hyperbolic functions):

| INT ... dx | = |
|-----------|---|
| sinh x | cosh x + c |
| cosh x | sinh x + c |
| sech^2 x | tanh x + c |
| cosech^2 x | -coth x + c |
| sech x tanh x | -sech x + c |
| cosech x coth x | -cosech x + c |

## The MINUS SIGN pattern — the memory hook that saves you

```
   +------------------------------------------------------------+
   |  Everything beginning with "CO" picks up a MINUS SIGN       |
   |  somewhere:                                                 |
   |                                                             |
   |     COsine     ->   INT sin x dx = -cos x                   |
   |     COtangent  ->   INT cosec^2 x dx = -cot x               |
   |     COsecant   ->   INT cosec x cot x dx = -cosec x         |
   |     COs^-1     ->   INT -1/sqrt(1-x^2) dx = Cos^-1 x        |
   |     COt^-1     ->   INT -1/(1+x^2) dx = Cot^-1 x            |
   +------------------------------------------------------------+
```

### Worked example 5

```
   INT ( 3 sin x + 4 sec^2 x - 5/x ) dx

   =  3(-cos x)  +  4 tan x  -  5 log|x|  +  c

   =  -3 cos x + 4 tan x - 5 log|x| + c
```

---

# TOPIC 4 — The rules of integration

There are only two, and they are both obvious.

```
   +----------------------------------------------------------+
   |                                                          |
   |  RULE 1 (sum rule)                                       |
   |     INT [ f(x) + g(x) ] dx  =  INT f(x) dx + INT g(x) dx |
   |                                                          |
   |  RULE 2 (constant multiple)                              |
   |     INT k f(x) dx  =  k INT f(x) dx      (k is a number) |
   |                                                          |
   +----------------------------------------------------------+
```

**In plain English: you may break a sum apart, and you may pull a NUMBER out
in front.**

> **TRAP:** There is NO product rule and NO quotient rule for integration.
> ```
>    INT f(x) g(x) dx   is NOT   (INT f dx)(INT g dx)      <-- FALSE
>    INT [f/g] dx       is NOT   (INT f dx)/(INT g dx)     <-- FALSE
> ```
> Products need **integration by parts**. Quotients need **substitution** or
> **partial fractions**. Never split them by guessing.

You may only pull out a **constant**. You can NEVER pull out an x.

```
   INT x sin x dx   is NOT   x INT sin x dx        <-- FALSE, x is not a constant
```

### Worked example 6

```
   INT ( 2x^3 - 7x + 4 ) dx

   =  2 INT x^3 dx  -  7 INT x dx  +  4 INT dx

        x^4        x^2
   = 2 -----  - 7 -----  +  4x  + c
         4          2

        x^4      7x^2
   =  -------  - ------  +  4x  + c
         2          2
```

---

# TOPIC 5 — Tidy up the algebra FIRST

Half the "hard" integrals in the board paper become one-liners once you do
some Class-9 algebra on the integrand. **Always look for this before choosing
a method.**

## Trick A — Expand the bracket

### Worked example 7

```
   INT (2x + 3)^2 dx

   Expand:   (2x+3)^2 = 4x^2 + 12x + 9

   = INT (4x^2 + 12x + 9) dx

     4x^3
   = ------  +  6x^2  +  9x  +  c
       3
```

## Trick B — Split the fraction when the BOTTOM is a single term

### Worked example 8

```
        x^3 + 5x^2 - 2
   INT ---------------- dx
             x^2

                 x^3      5x^2       2
   Split:  INT [ ----  +  -----  -  ---- ] dx
                 x^2      x^2       x^2

   = INT ( x + 5 - 2x^-2 ) dx

      x^2              x^-1
   = -----  +  5x  - 2 ------  + c
       2                -1

      x^2            2
   = -----  +  5x + ---  +  c
       2             x
```

## Trick C — Long division when the top degree is >= the bottom degree

### Worked example 9

```
        x^2 + 1
   INT --------- dx
         x + 3

   Divide:   x^2 + 1  =  (x + 3)(x - 3)  +  10

        x^2 + 1                 10
   so  ---------  =  x - 3  +  -------
          x + 3                 x + 3

                              10
   INT [ x - 3 ]  dx  + INT ------- dx
                             x + 3

      x^2
   = -----  -  3x  +  10 log|x + 3|  +  c
       2
```

> **TRAP:** If the top has degree greater than or equal to the bottom, you MUST
> divide first. Jumping straight to partial fractions gives a wrong answer.

## Trick D — Rationalise a difference of roots

### Worked example 10

```
             1
   INT --------------- dx
       sqrt(x+1) + sqrt(x)

   Multiply top and bottom by  sqrt(x+1) - sqrt(x) :

       sqrt(x+1) - sqrt(x)        sqrt(x+1) - sqrt(x)
   =  ---------------------  =   ---------------------  =  sqrt(x+1) - sqrt(x)
        (x+1) - (x)                       1

   INT [ (x+1)^(1/2) - x^(1/2) ] dx

      2                2
   =  - (x+1)^(3/2) -  - x^(3/2)  +  c
      3                3
```

## Trick E — Use a trigonometric identity

### Worked example 11

```
   INT tan^2 x dx

   Identity:  tan^2 x = sec^2 x - 1

   = INT (sec^2 x - 1) dx  =  tan x  -  x  +  c

   CHECK:  d/dx (tan x - x) = sec^2 x - 1 = tan^2 x     correct
```

### Worked example 12

```
             1
   INT ------------ dx
        1 - cos x

   Identity:  1 - cos x = 2 sin^2 (x/2)

           1                 1
   = INT ---------- dx  =  --- INT cosec^2 (x/2) dx
         2 sin^2(x/2)       2

        1      -cot(x/2)
   =   --- x  -----------  + c        (the 1/2 from the (x/2) inside)
        2         1/2

   =  -cot(x/2) + c
```

### Worked example 13 — the "add and subtract" trick

```
        1
   INT ------- dx
       1 + e^x

   Write   1  =  (1 + e^x) - e^x

           (1 + e^x)          e^x
   = INT [ ----------  -  ---------- ] dx
            1 + e^x        1 + e^x

                       e^x
   = INT dx  -  INT --------- dx
                     1 + e^x

   The second one: top is the derivative of the bottom (Topic 7)

   =  x  -  log(1 + e^x)  +  c
```

---

# TOPIC 6 — The f(ax + b) rule (huge time saver)

If you know `INT f(x) dx = F(x) + c`, then for a **linear** inside function:

```
   +---------------------------------------------------------+
   |                                     1                   |
   |    INT f(ax + b) dx    =           ---  F(ax + b)  + c  |
   |                                     a                   |
   +---------------------------------------------------------+
```

**In words: do the integral as normal, then divide by the coefficient of x.**

Why? Because when you differentiate `F(ax+b)` the chain rule multiplies by `a`,
so we put a `1/a` in front to cancel it.

| Integral | Answer |
|----------|--------|
| INT sin(3x) dx | -(1/3) cos 3x + c |
| INT cos(2x + 5) dx | (1/2) sin(2x + 5) + c |
| INT e^(4x) dx | (1/4) e^(4x) + c |
| INT e^(7 - 2x) dx | -(1/2) e^(7 - 2x) + c |
| INT (3x + 1)^5 dx | (3x+1)^6 / 18 + c |
| INT 1/(5x - 2) dx | (1/5) log abs(5x - 2) + c |
| INT sec^2(4x) dx | (1/4) tan 4x + c |
| INT 1/sqrt(2x + 3) dx | sqrt(2x + 3) + c |

### Worked example 14

```
   INT (3x + 1)^5 dx

                  (3x+1)^6     1        (3x+1)^6
   =  (1/3) x  ------------  =  --- x  ----------  + c
                    6           3          6

        (3x + 1)^6
   =  ------------- + c
           18

   CHECK:  d/dx  (3x+1)^6/18  =  6(3x+1)^5 (3) / 18  =  (3x+1)^5   correct
```

> **TRAP:** This rule works ONLY when the inside is `ax + b` — a straight line.
> ```
>    INT sin(x^2) dx   is NOT   -(1/2x) cos(x^2)      <-- FALSE
> ```
> If the inside is x^2 or anything curved, you need substitution — and often
> the integral cannot be done at all at this level.

---

# TOPIC 7 — INTEGRATION BY SUBSTITUTION

This is the workhorse of the chapter. Section A and Section B are full of it.

## The idea

The integrand is a **mess**. You rename part of it as `t`, and the mess turns
into something from the standard table.

```
   +---------------------------------------------------------------+
   |  THE FOUR STEPS                                               |
   |                                                               |
   |  STEP 1   Choose  t = (the inside / awkward part)             |
   |  STEP 2   Differentiate:  dt = g'(x) dx                       |
   |  STEP 3   Replace EVERYTHING. No x may survive.               |
   |  STEP 4   Integrate in t, then put x back at the end.         |
   +---------------------------------------------------------------+
```

## How to choose t — the three signals

```
   SIGNAL 1   Something is INSIDE a bracket, a root, a power,
              e^(...) , sin(...) , log(...)
              ->  t = that inside thing

   SIGNAL 2   The derivative of one part is sitting somewhere else
              in the integrand (up to a constant)
              ->  t = that part

   SIGNAL 3   Top of a fraction = derivative of the bottom
              ->  t = the bottom
```

### Worked example 15

```
   INT 2x (x^2 + 1)^7 dx

   The bracket has (x^2 + 1) inside, and 2x (its derivative) is sitting outside.

   Put  t = x^2 + 1        =>   dt = 2x dx

                             t^8         (x^2 + 1)^8
   INT t^7 dt   =           -----  + c = ------------- + c
                              8               8

   CHECK:  d/dx (x^2+1)^8/8  =  8(x^2+1)^7 (2x) / 8  =  2x(x^2+1)^7   correct
```

### Worked example 16 — when the constant is not exact

```
   INT x e^(x^2) dx

   Put  t = x^2      =>   dt = 2x dx      =>   x dx = (1/2) dt

              1                1               1
   = INT e^t  - dt   =        --- e^t  + c  =  --- e^(x^2)  +  c
              2                2               2
```

> **TRAP:** You must convert `x dx` completely. Writing
> `INT e^t dt` and forgetting the 1/2 costs the whole mark.

### Worked example 17

```
   INT sin^3 x cos x dx

   cos x is the derivative of sin x.

   Put  t = sin x     =>   dt = cos x dx

                    t^4          sin^4 x
   INT t^3 dt  =   -----  + c = ---------  + c
                     4             4
```

### Worked example 18

```
   INT e^(tan x) sec^2 x dx

   sec^2 x is the derivative of tan x.

   Put  t = tan x     =>   dt = sec^2 x dx

   INT e^t dt  =  e^t + c  =  e^(tan x) + c
```

### Worked example 19

```
        sec^2 x
   INT ---------- dx
       sqrt(tan x)

   Put  t = tan x     =>   dt = sec^2 x dx

         dt
   INT ------- = INT t^(-1/2) dt  =  2 sqrt(t) + c  =  2 sqrt(tan x) + c
       sqrt(t)
```

### Worked example 20 — logs

```
          1
   INT ---------- dx
       x  log x

   Put  t = log x     =>   dt = (1/x) dx

         1
   INT  --- dt  =  log|t| + c  =  log |log x| + c
         t
```

### Worked example 21 — inverse trig inside

```
       (Tan^-1 x)^3
   INT -------------- dx
          1 + x^2

   Put  t = Tan^-1 x     =>   dt = 1/(1 + x^2) dx

                   t^4          (Tan^-1 x)^4
   INT t^3 dt  =  -----  + c = --------------- + c
                    4                4
```

---

# TOPIC 8 — The two substitution shapes you MUST recognise instantly

These two produce more 2-mark and 4-mark questions than anything else in IIB.

## SHAPE 1 — top is the derivative of the bottom

```
   +-----------------------------------------------------+
   |                                                     |
   |          f'(x)                                      |
   |    INT --------- dx   =   log | f(x) |  +  c        |
   |          f(x)                                       |
   |                                                     |
   +-----------------------------------------------------+
```

**How to spot it:** differentiate the bottom in your head. If you get the top
(or the top times a number), you are done in one line.

### Worked example 22

```
        2x + 1
   INT ------------ dx        d/dx (x^2 + x + 1) = 2x + 1     MATCH
       x^2 + x + 1

   =  log | x^2 + x + 1 |  +  c
```

### Worked example 23 — fix up the constant

```
          x
   INT --------- dx          d/dx (x^2 + 4) = 2x , top is only x
       x^2 + 4

           1        2x                1
   =      --- INT ------- dx   =     --- log ( x^2 + 4 )  +  c
           2      x^2 + 4             2
```

### Worked example 24 — this is where tan x comes from

```
                    sin x
   INT tan x dx = INT ------- dx
                    cos x

   d/dx (cos x) = -sin x , so the top is MINUS the derivative

           -sin x
   = -INT --------- dx  =  -log |cos x| + c  =  log |sec x| + c
            cos x
```

### More instant answers of this type

| Integral | Answer |
|----------|--------|
| INT (3x^2 + 2)/(x^3 + 2x) dx | log abs(x^3 + 2x) + c |
| INT e^x/(1 + e^x) dx | log(1 + e^x) + c |
| INT cot x dx = INT cos x/sin x dx | log abs(sin x) + c |
| INT 1/(x log x) dx | log abs(log x) + c |
| INT sec^2 x/tan x dx | log abs(tan x) + c |
| INT f'(x)/sqrt(f(x)) dx | 2 sqrt(f(x)) + c |

## SHAPE 2 — a function to a power, times its derivative

```
   +---------------------------------------------------------------+
   |                                                               |
   |                                     [ f(x) ]^(n+1)            |
   |    INT [ f(x) ]^n  f'(x) dx   =   ----------------- + c       |
   |                                          n + 1                |
   |                                                               |
   |    (n not equal to -1)                                        |
   +---------------------------------------------------------------+
```

### Worked example 25

```
   INT (log x)^4 (1/x) dx

   f = log x , f' = 1/x

        (log x)^5
   =   -----------  +  c
            5
```

### Worked example 26

```
   INT cos^5 x sin x dx

   Careful with the sign:  f = cos x , f' = -sin x

                                          cos^6 x
   = - INT (cos x)^5 (-sin x) dx  =   -  ---------  +  c
                                             6
```

### Worked example 27

```
   INT (2x + 3) sqrt(x^2 + 3x) dx

   f = x^2 + 3x , f' = 2x + 3       PERFECT MATCH

                                (x^2 + 3x)^(3/2)      2
   = INT f^(1/2) f' dx   =     ------------------ =   - (x^2 + 3x)^(3/2) + c
                                      3/2             3
```

---

# TOPIC 9 — Where tan, cot, sec, cosec come from (4-mark derivations)

The board sometimes asks you to **evaluate** these, and expects the working.

## INT tan x dx

```
                sin x
   INT tan x dx = INT ------- dx        put  t = cos x , dt = -sin x dx
                cos x

        -dt
   = INT ----- =  -log |t| + c  =  -log |cos x| + c  =  log |sec x| + c
          t
```

## INT cot x dx

```
                cos x
   INT cot x dx = INT ------- dx        put  t = sin x , dt = cos x dx
                sin x

         dt
   = INT ---- =  log |t| + c  =  log |sin x| + c
          t
```

## INT sec x dx  — the multiply-by-a-clever-1 trick

```
                        sec x + tan x
   INT sec x dx = INT sec x . -------------- dx
                        sec x + tan x

            sec^2 x + sec x tan x
   = INT  -------------------------- dx
              sec x + tan x

   Put  t = sec x + tan x
        dt = ( sec x tan x + sec^2 x ) dx        <-- EXACTLY the top

         dt
   = INT ---- =  log |t| + c  =  log | sec x + tan x |  +  c
          t

   Alternative accepted form:   log | tan( pi/4 + x/2 ) | + c
```

## INT cosec x dx

```
                          cosec x - cot x
   INT cosec x dx = INT cosec x . ------------------ dx
                          cosec x - cot x

            cosec^2 x - cosec x cot x
   = INT  ------------------------------- dx
                cosec x - cot x

   Put  t = cosec x - cot x
        dt = ( -cosec x cot x + cosec^2 x ) dx   <-- EXACTLY the top

   =  log | cosec x - cot x |  +  c

   Alternative accepted form:   log | tan( x/2 ) | + c
```

```
   +------------------------------------------------------------------+
   |  MEMORY LINE:                                                     |
   |     sec  goes with  (sec + tan)   -> both are "+"                 |
   |     cosec goes with (cosec - cot)  -> both are "-"                |
   |  and remember cosec/cot are the "CO" family, so a minus appears.  |
   +------------------------------------------------------------------+
```

---

# TOPIC 10 — Integrating products and powers of sin and cos

You can NEVER integrate `sin 3x cos 5x` directly. First you turn the PRODUCT
into a SUM using the transformation formulae, then integrate term by term.

## The transformation formulae (from Maths 1A)

```
   +-------------------------------------------------------------+
   |   2 sin A cos B  =  sin(A + B)  +  sin(A - B)               |
   |   2 cos A sin B  =  sin(A + B)  -  sin(A - B)               |
   |   2 cos A cos B  =  cos(A + B)  +  cos(A - B)               |
   |   2 sin A sin B  =  cos(A - B)  -  cos(A + B)               |
   +-------------------------------------------------------------+
```

Memory hook: **sin-cos gives sines, cos-cos and sin-sin give cosines**, and only
`2 sin A sin B` has the order (A - B) first.

### Worked example 28

```
   INT sin 3x cos 5x dx

                     1
   sin 3x cos 5x =  --- [ sin(3x + 5x) + sin(3x - 5x) ]
                     2

                     1                            1
                  = --- [ sin 8x + sin(-2x) ] =  --- [ sin 8x - sin 2x ]
                     2                            2

          1
   = INT --- ( sin 8x - sin 2x ) dx
          2

        1     -cos 8x     -cos 2x
   =   --- [ ---------  -  --------- ]  +  c
        2        8            2

          cos 8x       cos 2x
   =  -  --------  +  --------  +  c
            16            4
```

## Powers of sin and cos — the power-reducing identities

```
   +---------------------------------------------------------+
   |            1 - cos 2x                     1 + cos 2x     |
   |  sin^2 x = ------------        cos^2 x = ------------    |
   |                 2                             2          |
   |                                                          |
   |            3 sin x - sin 3x               3 cos x + cos 3x|
   |  sin^3 x = ----------------    cos^3 x = ----------------|
   |                  4                              4        |
   +---------------------------------------------------------+
```

### Worked example 29

```
   INT sin^2 x dx

          1 - cos 2x            1                 1     sin 2x
   = INT ------------ dx  =    --- [ x  -  ... ] = --- x - --------  + c
              2                2                   2       4

   Full working:
          1                    1        sin 2x           x     sin 2x
   =     --- INT (1 - cos2x) = --- [ x - -------- ] + c = --- - -------- + c
          2                    2           2              2       4
```

### Worked example 30

```
   INT cos^3 x dx

          3 cos x + cos 3x
   = INT ------------------ dx
                 4

        3               1     sin 3x
   =   --- sin x   +   --- x --------  +  c
        4               4       3

        3 sin x      sin 3x
   =  ----------  +  --------  +  c
          4             12
```

### Worked example 31 — an odd power, done by substitution instead

```
   INT sin^3 x dx

   Keep one sin x aside:  sin^3 x = sin^2 x . sin x = (1 - cos^2 x) sin x

   Put  t = cos x ,  dt = -sin x dx

   = INT (1 - t^2)(-dt)  =  INT (t^2 - 1) dt

        t^3                cos^3 x
   =   -----  -  t  + c = ---------  -  cos x  +  c
         3                    3
```

> **RULE OF THUMB for sin^m x cos^n x:**
> - If one power is **ODD**, peel one factor off and substitute the other.
> - If both are **EVEN**, use the power-reducing identities.

### Worked example 32 — a three-factor board favourite

```
   INT sin x sin 2x sin 3x dx

   Take the first two:   2 sin x sin 2x = cos(x) - cos(3x)
                          sin x sin 2x  = (1/2)( cos x - cos 3x )

   Multiply by sin 3x:
         1
       = --- ( sin 3x cos x  -  sin 3x cos 3x )
         2

   Now,  2 sin3x cos x = sin 4x + sin 2x  =>  sin3x cos x = (1/2)(sin4x + sin2x)
         2 sin3x cos3x = sin 6x           =>  sin3x cos3x = (1/2) sin 6x

         1    1                     1
       = --- [ --- (sin4x + sin2x) - --- sin 6x ]
         2    2                     2

         1
       = --- ( sin 4x + sin 2x - sin 6x )
         4

         1     -cos4x    -cos2x    cos6x
   INT = --- [ -------- + -------- + ------- ] + c
         4       4          2         6

           cos 4x     cos 2x     cos 6x
   =  -  --------  -  --------  + --------  +  c
             16          8           24
```

---

# TOPIC 11 — INTEGRATION BY PARTS

Use this when the integrand is a **product of two unrelated functions** —
one that gets simpler when differentiated, and one you can integrate.

```
   +-----------------------------------------------------------------+
   |                                                                 |
   |   INT u v dx  =  u  INT v dx   -   INT [ u' . ( INT v dx ) ] dx |
   |                                                                 |
   |   Short form:   INT u dv  =  u v  -  INT v du                   |
   |                                                                 |
   +-----------------------------------------------------------------+
```

**Say it out loud:** *"first times integral of second, minus integral of
(derivative of first times integral of second)."*

## Which one is u? — the ILATE rule

```
        I  -  Inverse trigonometric     Sin^-1 x , Tan^-1 x ...
        L  -  Logarithmic               log x
        A  -  Algebraic                 x , x^2 , x^3 ...
        T  -  Trigonometric             sin x , cos x
        E  -  Exponential               e^x , a^x

   Whichever letter comes FIRST in I-L-A-T-E is your  u .
   The other one is  v  (the one you integrate).
```

### Worked example 33

```
   INT x sin x dx

   ILATE:  x is Algebraic (A) , sin x is Trigonometric (T)
           A comes before T   =>   u = x ,  v = sin x

   INT v dx = -cos x

   = x(-cos x)  -  INT [ 1 . (-cos x) ] dx

   = -x cos x  +  INT cos x dx

   = -x cos x  +  sin x  +  c

   CHECK:  d/dx (-x cos x + sin x) = -cos x + x sin x + cos x = x sin x   correct
```

### Worked example 34

```
   INT x e^x dx

   ILATE:  A before E  =>  u = x , v = e^x

   = x e^x  -  INT (1)(e^x) dx  =  x e^x  -  e^x  +  c  =  e^x (x - 1) + c
```

### Worked example 35 — the log x trick (write it as 1 times log x)

```
   INT log x dx

   There is only ONE function. So write it as  (log x) x 1.
   ILATE: L before A  =>  u = log x , v = 1

   INT v dx = x

                       1
   = (log x)(x)  - INT --- . x dx   =  x log x  -  INT dx
                       x

   =  x log x  -  x  +  c

   CHECK:  d/dx (x log x - x) = log x + 1 - 1 = log x    correct
```

### Worked example 36 — same trick for inverse trig

```
   INT Tan^-1 x dx

   u = Tan^-1 x , v = 1

                            1
   = x Tan^-1 x  -  INT  -------- . x dx
                          1 + x^2

                           1        2x
   = x Tan^-1 x  -       --- INT -------- dx
                          2      1 + x^2

                        1
   = x Tan^-1 x  -     --- log ( 1 + x^2 )  +  c
                        2
```

### Worked example 37 — apply by parts TWICE

```
   INT x^2 e^x dx

   Round 1:   u = x^2 , v = e^x

   = x^2 e^x  -  INT 2x e^x dx

   Round 2 on  INT x e^x dx  (Worked example 34) = e^x (x - 1)

   = x^2 e^x  -  2 e^x (x - 1)  +  c

   = e^x ( x^2 - 2x + 2 )  +  c

   CHECK:  d/dx [ e^x(x^2-2x+2) ] = e^x(x^2-2x+2) + e^x(2x-2) = e^x x^2   correct
```

### Worked example 38

```
   INT x^2 log x dx

   ILATE: L before A  =>  u = log x , v = x^2 ,  INT v dx = x^3/3

        x^3               1     x^3
   =  ------- log x - INT --- . ----- dx
         3                x      3

        x^3            1
   =  ------- log x - --- INT x^2 dx
         3            3

        x^3            x^3
   =  ------- log x - -----  +  c
         3              9
```

## The "returning integral" trick (e^(ax) sin bx)

### Worked example 39

```
   INT e^x sin x dx        Call it  I.

   By parts with u = sin x , v = e^x :

   I = e^x sin x  -  INT e^x cos x dx

   By parts again on the new one with u = cos x , v = e^x :

   INT e^x cos x dx = e^x cos x  +  INT e^x sin x dx  =  e^x cos x  +  I

   So   I = e^x sin x  -  e^x cos x  -  I

       2I = e^x ( sin x - cos x )

            e^x
       I = ----- ( sin x - cos x )  +  c
             2
```

> **TRAP:** In round 2 you must keep the SAME choice of type for u
> (trigonometric again). If you swap, everything cancels and you get 0 = 0.

## Two ready-made formulae worth memorising

```
   +--------------------------------------------------------------+
   |                              e^(ax)                          |
   |  INT e^(ax) sin(bx) dx =  ------------ ( a sin bx - b cos bx )|
   |                            a^2 + b^2                          |
   |                                                               |
   |                              e^(ax)                          |
   |  INT e^(ax) cos(bx) dx =  ------------ ( a cos bx + b sin bx )|
   |                            a^2 + b^2                          |
   +--------------------------------------------------------------+
```

---

# TOPIC 12 — The e^x [ f(x) + f'(x) ] miracle

```
   +-------------------------------------------------------------+
   |                                                             |
   |    INT e^x [ f(x)  +  f'(x) ] dx   =   e^x f(x)  +  c       |
   |                                                             |
   |    More generally:                                          |
   |    INT e^(ax) [ a f(x) + f'(x) ] dx  =  e^(ax) f(x)  +  c   |
   |                                                             |
   +-------------------------------------------------------------+
```

**Why it works:** by the product rule,
`d/dx [ e^x f(x) ] = e^x f(x) + e^x f'(x) = e^x [ f + f' ]`. That's all.

## How to use it in the exam

```
   STEP 1  Look at the bracket after e^x. It has two pieces.
   STEP 2  Ask: is one piece the DERIVATIVE of the other?
   STEP 3  If yes, the answer is  e^x times (the piece that is NOT the derivative).
   STEP 4  Write it down. One line. Full marks.
```

### Worked example 40

```
   INT e^x ( sin x + cos x ) dx

   f = sin x  ,  f' = cos x        MATCH

   =  e^x sin x  +  c
```

### Worked example 41

```
   INT e^x ( log x + 1/x ) dx

   f = log x  ,  f' = 1/x          MATCH

   =  e^x log x  +  c
```

### Worked example 42 — when you have to do algebra to see it

```
          x + 1
   INT e^x --------- dx
          (x + 2)^2

   Split the top:   x + 1 = (x + 2) - 1

         x + 2            1                 1            1
   =   ---------  -  ---------      =    ------- -  -----------
       (x+2)^2       (x+2)^2              x + 2      (x + 2)^2

   Now:  f = 1/(x+2)   =>   f' = -1/(x+2)^2         MATCH

              1
   =  e^x . ------- + c
             x + 2
```

### Worked example 43 — the famous one

```
        1 + sin x
   INT e^x ----------- dx
        1 + cos x

   Use half-angle:  1 + sin x = 1 + 2 sin(x/2) cos(x/2)
                    1 + cos x = 2 cos^2 (x/2)

    1 + sin x        1              2 sin(x/2) cos(x/2)
   ----------- = ------------- +  ---------------------
    1 + cos x    2 cos^2(x/2)        2 cos^2(x/2)

                    1
              =    --- sec^2 (x/2)   +   tan (x/2)
                    2

   Now:  f = tan(x/2)   =>   f' = (1/2) sec^2(x/2)      MATCH

   =  e^x tan (x/2)  +  c
```

### Worked example 44

```
   INT e^x ( 1/x - 1/x^2 ) dx

   f = 1/x   =>   f' = -1/x^2       MATCH

          e^x
   =     -----  +  c
           x
```

---

# TOPIC 13 — THE NINE STANDARD FORMS

These nine are the backbone of every 4-mark and 7-mark question in the chapter.
Learn them as three groups of three.

## GROUP 1 — no root, answer is Tan^-1 or a log

```
   +-------------------------------------------------------------+
   |          dx           1          x                          |
   |  INT ----------  =   --- Tan^-1 ---   +  c                  |
   |       x^2 + a^2       a          a                          |
   |                                                             |
   |          dx           1        | x - a |                    |
   |  INT ----------  =   ----- log | ----- |  +  c              |
   |       x^2 - a^2       2a       | x + a |                    |
   |                                                             |
   |          dx           1        | a + x |                    |
   |  INT ----------  =   ----- log | ----- |  +  c              |
   |       a^2 - x^2       2a       | a - x |                    |
   +-------------------------------------------------------------+
```

**How to remember the last two:** the answer always has *(the one that comes
first in the bottom) minus / plus*. In `x^2 - a^2` the x is first, so the log
is `(x-a)/(x+a)`. In `a^2 - x^2` the a is first, so it is `(a+x)/(a-x)`.

## GROUP 2 — one root on the bottom

```
   +---------------------------------------------------------------+
   |          dx                    x                              |
   |  INT --------------  =  Sin^-1 ---  +  c                      |
   |      sqrt(a^2 - x^2)           a                              |
   |                                                               |
   |          dx                                                   |
   |  INT --------------  =  log | x + sqrt(x^2 + a^2) |  + c      |
   |      sqrt(x^2 + a^2)                                          |
   |                        (also written  Sinh^-1 (x/a) + c )     |
   |                                                               |
   |          dx                                                   |
   |  INT --------------  =  log | x + sqrt(x^2 - a^2) |  + c      |
   |      sqrt(x^2 - a^2)                                          |
   |                        (also written  Cosh^-1 (x/a) + c )     |
   +---------------------------------------------------------------+
```

**Memory line:** *minus under the root gives Sin inverse; plus or the other
minus gives a LOG with the root repeated inside.*

## GROUP 3 — the root on TOP (these always have two terms)

```
   +----------------------------------------------------------------------+
   |                            x                    a^2         x        |
   |  INT sqrt(a^2 - x^2) dx = --- sqrt(a^2 - x^2) + ---- Sin^-1 ---  + c |
   |                            2                     2          a        |
   |                                                                      |
   |                            x                    a^2                  |
   |  INT sqrt(x^2 + a^2) dx = --- sqrt(x^2 + a^2) + ---- log|x+sqrt(x^2+a^2)| + c
   |                            2                     2                   |
   |                                                                      |
   |                            x                    a^2                  |
   |  INT sqrt(x^2 - a^2) dx = --- sqrt(x^2 - a^2) - ---- log|x+sqrt(x^2-a^2)| + c
   |                            2                     2                   |
   +----------------------------------------------------------------------+
```

**Pattern:** `(x/2) times the root` **plus/minus** `(a^2/2) times the matching
Group-2 answer`. The only minus sign is in the `x^2 - a^2` case.

### Proof-style check of the first one (this is a valid 4-mark answer)

```
   d      x                    x . (-x)         1
  ---- [ --- sqrt(a^2-x^2) ] = ------------- + --- sqrt(a^2 - x^2)
   dx     2                    2 sqrt(a^2-x^2)  2

                                (a^2 - x^2) - x^2        a^2 - 2x^2
                             = --------------------- = ----------------
                                2 sqrt(a^2 - x^2)      2 sqrt(a^2-x^2)

   d     a^2        x        a^2       1              a^2
  ---- [ ---- Sin^-1 --- ] = ----- . ---------------- = ----------------
   dx     2         a         2      sqrt(a^2 - x^2)   2 sqrt(a^2 - x^2)

   Add them:   (a^2 - 2x^2 + a^2) / (2 sqrt(a^2-x^2))
             = (2a^2 - 2x^2) / (2 sqrt(a^2-x^2))
             = (a^2 - x^2) / sqrt(a^2-x^2)
             = sqrt(a^2 - x^2)                    correct
```

### Worked example 45

```
        dx            dx           1          x
   INT -------- = INT --------- = --- Tan^-1 ---  +  c
       x^2 + 9       x^2 + 3^2     3          3
```

### Worked example 46

```
        dx           1       | x - 4 |
   INT -------- =  ------ log| ------- |  +  c
       x^2 - 16      8       | x + 4 |
```

### Worked example 47

```
          dx                        dx                            x
   INT ------------- =  INT --------------------  =  Sin^-1  ( ------- ) + c
       sqrt(25 - x^2)       sqrt(5^2 - x^2)                       5
```

### Worked example 48

```
   INT sqrt(9 - x^2) dx        here a = 3

        x                  9           x
   =   --- sqrt(9 - x^2) + --- Sin^-1 ---  +  c
        2                   2          3
```

### Worked example 49 — when the x^2 has a coefficient, factor it out first

```
        dx              dx            1        dx
   INT --------- = INT ----------- = --- INT ----------
       4x^2 + 9       4(x^2+9/4)      4      x^2+(3/2)^2

        1     1              x            1              2x
   =   --- . ----- Tan^-1 ------  + c  = --- Tan^-1  ( ------ ) + c
        4     3/2           3/2            6              3
```

---

# TOPIC 14 — COMPLETING THE SQUARE

Now the bottom is a full quadratic `ax^2 + bx + c`, not a clean `x^2 + a^2`.
The fix is always the same: **make the quadratic into (something)^2 + number**,
then it IS one of the nine standard forms.

```
   +-------------------------------------------------------------------+
   |  THE RECIPE                                                       |
   |                                                                   |
   |  1. If there is a number in front of x^2, take it out of the       |
   |     WHOLE quadratic first.                                        |
   |  2. Half the coefficient of x, square it, add and subtract it.    |
   |  3. Write as ( x + b/2a )^2  ±  k                                 |
   |  4. Put  X = x + b/2a  and read off the standard form.            |
   +-------------------------------------------------------------------+
```

## Type A — INT dx / (ax^2 + bx + c)

### Worked example 50

```
            dx
   INT ---------------
        x^2 + 4x + 13

   Complete the square:
       x^2 + 4x + 13 = ( x^2 + 4x + 4 ) + 9 = (x + 2)^2 + 3^2

            dx                 1            x + 2
   = INT -------------- =     --- Tan^-1 ( ------- )  +  c
       (x+2)^2 + 3^2           3              3
```

### Worked example 51

```
            dx
   INT ---------------
        x^2 - 6x + 5

   x^2 - 6x + 5 = (x^2 - 6x + 9) - 4 = (x - 3)^2 - 2^2

        1        | (x - 3) - 2 |         1        | x - 5 |
   =  ----- log  | ----------- | + c = ----- log  | ------- | + c
       2(2)      | (x - 3) + 2 |         4        | x - 1 |
```

### Worked example 52 — coefficient in front of x^2

```
             dx
   INT ----------------
        2x^2 + x - 1

           1              dx
   =      --- INT -----------------
           2       x^2 + x/2 - 1/2

   x^2 + x/2 - 1/2 = ( x + 1/4 )^2 - 1/16 - 1/2 = ( x + 1/4 )^2 - 9/16

           1              dx
   =      --- INT ----------------------
           2      (x + 1/4)^2 - (3/4)^2

        1      1        | (x + 1/4) - 3/4 |
   =   --- . -------log | --------------- | + c
        2    2(3/4)     | (x + 1/4) + 3/4 |

        1        | x - 1/2 |        1        | 2x - 1 |
   =   --- log   | -------- | + c = --- log  | ------- |  +  c
        3        |  x + 1   |        3       | 2x + 2 |
```

## Type B — INT dx / sqrt(ax^2 + bx + c)

### Worked example 53

```
             dx
   INT -------------------
       sqrt(x^2 + 2x + 5)

   x^2 + 2x + 5 = (x + 1)^2 + 4 = (x + 1)^2 + 2^2

   =  log | (x + 1) + sqrt(x^2 + 2x + 5) |  +  c
```

### Worked example 54

```
             dx
   INT --------------------
       sqrt(5 - 2x - x^2)

   5 - 2x - x^2 = -(x^2 + 2x - 5) = -( (x+1)^2 - 6 ) = 6 - (x + 1)^2

              dx                            x + 1
   = INT --------------------- = Sin^-1  ( --------- )  +  c
         sqrt( (sqrt6)^2 - (x+1)^2 )        sqrt 6
```

### Worked example 55

```
             dx
   INT --------------------
       sqrt(3x^2 + 4x + 5)

              1              dx
   =      --------- INT -------------------
          sqrt 3        sqrt(x^2 + 4x/3 + 5/3)

   x^2 + 4x/3 + 5/3 = ( x + 2/3 )^2 - 4/9 + 5/3 = ( x + 2/3 )^2 + 11/9

           1
   =  --------- log | ( x + 2/3 ) + sqrt( x^2 + 4x/3 + 5/3 ) |  +  c
      sqrt 3
```

> **TRAP:** When you pull `1/sqrt(3)` out, everything inside the root must be
> divided by 3 as well. Half the class forgets the `5/3`.

---

# TOPIC 15 — (px + q) ON TOP  —  the classic 7-mark question

Now the numerator is a linear expression. **You split it into two pieces.**

```
   +---------------------------------------------------------------------+
   |  THE MASTER MOVE                                                    |
   |                                                                     |
   |     px + q   =   A ( derivative of the quadratic )  +  B            |
   |                                                                     |
   |     i.e.  px + q  =  A ( 2ax + b )  +  B                            |
   |                                                                     |
   |  Compare coefficients of x to get A, then constants to get B.       |
   |                                                                     |
   |  PIECE 1 (with A):  becomes  INT f'/f  or  INT f'/sqrt(f)           |
   |  PIECE 2 (with B):  becomes  a completing-the-square standard form  |
   +---------------------------------------------------------------------+
```

## Type C — (px + q)/(ax^2 + bx + c)

### Worked example 56

```
          x + 3
   INT -------------- dx
       x^2 + 4x + 13

   Derivative of the bottom = 2x + 4

   Write:   x + 3  =  A(2x + 4)  +  B

   Coefficient of x :   1 = 2A       =>   A = 1/2
   Constant          :   3 = 4A + B  =>   3 = 2 + B  =>  B = 1

           1        2x + 4                     dx
   =      --- INT ------------- dx  +  1 INT -------------
           2      x^2 + 4x + 13              x^2 + 4x + 13

   FIRST PIECE:  top is derivative of bottom

           1
   =      --- log | x^2 + 4x + 13 |
           2

   SECOND PIECE:  (x + 2)^2 + 3^2   (Worked example 50)

           1            x + 2
   =      --- Tan^-1 ( ------- )
           3              3

   FINAL ANSWER:

        1                          1            x + 2
   =   --- log | x^2 + 4x + 13 | + --- Tan^-1 ( ------- )  +  c
        2                          3               3
```

## Type D — (px + q)/sqrt(ax^2 + bx + c)   ** the most-asked 7 marks **

### Worked example 57

```
          2x + 5
   INT ------------------- dx
       sqrt(x^2 + 2x + 5)

   Derivative of the inside = 2x + 2

   Write:  2x + 5 = A(2x + 2) + B

   x terms:  2 = 2A        =>  A = 1
   constants: 5 = 2A + B   =>  5 = 2 + B  =>  B = 3

            2x + 2                            dx
   = INT ------------------ dx  +  3 INT -------------------
         sqrt(x^2 + 2x + 5)             sqrt(x^2 + 2x + 5)

   FIRST PIECE:  INT f'/sqrt(f) = 2 sqrt(f)

   =  2 sqrt( x^2 + 2x + 5 )

   SECOND PIECE:  (x+1)^2 + 2^2   (Worked example 53)

   =  3 log | (x + 1) + sqrt(x^2 + 2x + 5) |

   FINAL ANSWER:

   = 2 sqrt(x^2 + 2x + 5) + 3 log | (x+1) + sqrt(x^2+2x+5) |  +  c
```

### Worked example 58

```
           x + 1
   INT ------------------- dx
       sqrt(x^2 + 3x + 12)

   Derivative of inside = 2x + 3

   x + 1 = A(2x + 3) + B
   x terms:   1 = 2A        =>  A = 1/2
   constants: 1 = 3A + B    =>  1 = 3/2 + B  =>  B = -1/2

        1          2x + 3                 1              dx
   =   --- INT ------------------ dx  -  --- INT --------------------
        2      sqrt(x^2+3x+12)            2      sqrt(x^2 + 3x + 12)

   FIRST:   (1/2) . 2 sqrt(x^2+3x+12)  =  sqrt(x^2 + 3x + 12)

   SECOND:  x^2 + 3x + 12 = (x + 3/2)^2 + 12 - 9/4 = (x + 3/2)^2 + 39/4

              1
        =  - --- log | ( x + 3/2 ) + sqrt(x^2 + 3x + 12) |
              2

   FINAL:

                              1
   = sqrt(x^2 + 3x + 12)  -  --- log | (x + 3/2) + sqrt(x^2 + 3x + 12) | + c
                              2
```

> **TRAP:** Students split `px + q` as `A(ax^2+bx+c) + B`. WRONG. You split it
> against the **DERIVATIVE** `2ax + b`, because that is what makes piece 1
> integrate instantly.

---

# TOPIC 16 — INTEGRATION BY PARTIAL FRACTIONS

Use this when the integrand is `polynomial / polynomial` and **the bottom
factorises**. You break one horrible fraction into two or three easy ones.

```
   +--------------------------------------------------------------------+
   |  STEP 0   If degree(top) >= degree(bottom), DIVIDE first.          |
   |  STEP 1   Factorise the bottom completely.                         |
   |  STEP 2   Write the correct shape of partial fractions (table).    |
   |  STEP 3   Multiply through by the bottom, find A, B, C.            |
   |  STEP 4   Integrate each small piece.                              |
   +--------------------------------------------------------------------+
```

## The shapes you are allowed to write

| Factor on the bottom | What you write |
|----------------------|----------------|
| (x - a) | A/(x - a) |
| (x - a)(x - b) | A/(x - a) + B/(x - b) |
| (x - a)^2 | A/(x - a) + B/(x - a)^2 |
| (x - a)^3 | A/(x-a) + B/(x-a)^2 + C/(x-a)^3 |
| (x^2 + a^2) — cannot factorise | (Ax + B)/(x^2 + a^2) |

**Rule:** a linear factor gets a **constant** on top. A quadratic factor that
does not factorise gets a **linear** expression `Ax + B` on top.

### Worked example 59 — two distinct linear factors

```
              dx
   INT ---------------
       (x + 1)(x + 2)

          1              A          B
      ------------  =  ------  +  ------
      (x+1)(x+2)        x+1        x+2

   Multiply by (x+1)(x+2):     1 = A(x + 2) + B(x + 1)

   Put x = -1:   1 = A(1)     =>  A = 1
   Put x = -2:   1 = B(-1)    =>  B = -1

            dx           dx
   = INT ------- - INT -------
           x+1          x+2

                                          | x + 1 |
   = log|x+1| - log|x+2| + c  =  log      | ------- |  +  c
                                          | x + 2 |
```

> **SHORTCUT (cover-up rule):** to find A, cover up `(x+1)` in the original
> fraction and put `x = -1` into what's left: `1/(-1+2) = 1`. That IS A.
> Same for B: cover `(x+2)`, put `x = -2`: `1/(-2+1) = -1`. That IS B.
> This turns a 3-minute job into 15 seconds.

### Worked example 60

```
          2x + 3
   INT ------------- dx
       (x-1)(x+2)

     2x + 3        A         B
   ----------- = ------ + ------
   (x-1)(x+2)     x-1      x+2

   2x + 3 = A(x + 2) + B(x - 1)

   x = 1  :   5 = 3A      =>  A = 5/3
   x = -2 :  -1 = -3B     =>  B = 1/3

        5              1
   =   --- log|x-1| + --- log|x+2|  +  c
        3              3
```

### Worked example 61 — a repeated factor

```
          3x - 2
   INT ------------------ dx
       (x + 1)^2 (x + 3)

      3x - 2            A          B            C
   --------------- = ------- + ----------- + -------
   (x+1)^2 (x+3)      x + 1     (x + 1)^2     x + 3

   3x - 2 = A(x+1)(x+3) + B(x+3) + C(x+1)^2

   x = -1 :   -5 = B(2)          =>  B = -5/2
   x = -3 :  -11 = C(4)          =>  C = -11/4
   coeff of x^2 :  0 = A + C     =>  A = 11/4

        11               5     1        11
   =   ---- log|x+1| +  --- . ------ - ---- log|x+3|  +  c
         4               2     x+1       4

   (because  INT B/(x+1)^2 dx = B . (-1/(x+1)) = (-5/2)(-1/(x+1)) = 5/(2(x+1)) )

        11        | x + 1 |          5
   =   ---- log   | ------- |   +  --------  +  c
         4        | x + 3 |        2(x + 1)
```

### Worked example 62 — a quadratic factor that will not factorise

```
             dx
   INT --------------
       (x-1)(x^2+1)

        1            A        Bx + C
   -------------- = ------ + ---------
   (x-1)(x^2+1)      x-1      x^2 + 1

   1 = A(x^2 + 1) + (Bx + C)(x - 1)

   x = 1        :  1 = 2A            =>  A = 1/2
   coeff of x^2 :  0 = A + B         =>  B = -1/2
   constant     :  1 = A - C         =>  C = A - 1 = -1/2

        1        dx        1        x + 1
   =   --- INT ------  -  --- INT --------- dx
        2        x-1       2       x^2 + 1

        1              1          x            1        dx
   =   --- log|x-1| - --- INT --------- dx  - --- INT --------
        2              2       x^2+1          2       x^2+1

        1              1                   1
   =   --- log|x-1| - --- log(x^2 + 1)  - --- Tan^-1 x  +  c
        2              4                   2
```

### Worked example 63 — substitution turns it into partial fractions

```
             dx
   INT ---------------
       x ( x^n + 1 )

   Multiply top and bottom by x^(n-1) :

              x^(n-1) dx
   = INT --------------------      put  t = x^n , dt = n x^(n-1) dx
          x^n ( x^n + 1 )

        1          dt              1                 1        1
   =   --- INT ------------  =    --- INT [  ---  -  ------ ] dt
        n        t (t+1)           n           t       t+1

        1        | t |            1        |  x^n   |
   =   --- log   | ----- | + c = --- log   | ------ |  +  c
        n        | t+1 |          n        | x^n+1 |
```

---

# TOPIC 17 — THE t = tan(x/2) SUBSTITUTION  (the other 7-mark machine)

Use this the moment you see a **1 over (sin x and/or cos x plus a constant)**.

```
   +---------------------------------------------------------------+
   |                                                               |
   |     Put   t = tan (x/2)                                       |
   |                                                               |
   |                 2t                    1 - t^2                 |
   |     sin x  =  --------      cos x =  ---------                |
   |               1 + t^2                 1 + t^2                 |
   |                                                               |
   |                 2 dt                                          |
   |     dx     =  ---------                                       |
   |                1 + t^2                                        |
   |                                                               |
   |     (also  tan x = 2t/(1 - t^2)  if you ever need it)         |
   +---------------------------------------------------------------+
```

**What always happens:** every `1 + t^2` cancels, and you are left with a plain
quadratic in t on the bottom — which is Topic 14 again.

### Worked example 64 — Type 1/(a + b cos x)

```
             dx
   INT -------------
       3 + 2 cos x

   Put t = tan(x/2) :

                       1 - t^2       3(1+t^2) + 2(1 - t^2)      t^2 + 5
   3 + 2 cos x = 3 + 2 --------  =  ----------------------- =  ---------
                       1 + t^2             1 + t^2              1 + t^2

          2 dt / (1 + t^2)             2 dt
   = INT ------------------- =  INT ----------
        ( t^2 + 5 )/(1+t^2)          t^2 + 5

           1              t                  2                t
   = 2 . -------- Tan^-1 -------  + c  =  -------- Tan^-1  -------- + c
         sqrt 5          sqrt 5           sqrt 5            sqrt 5

          2                tan(x/2)
   =  -------- Tan^-1  ( ---------- )  +  c
      sqrt 5               sqrt 5
```

### Worked example 65 — Type 1/(a + b sin x), and the bottom factorises

```
             dx
   INT -------------
       4 + 5 sin x

                        2t          4(1+t^2) + 10 t       4t^2 + 10t + 4
   4 + 5 sin x = 4 + 5 -------- =  ----------------  =  -----------------
                       1 + t^2         1 + t^2               1 + t^2

              2 dt                    dt                  dt
   = INT ---------------- = INT --------------- = INT ---------------
         4t^2 + 10t + 4         2t^2 + 5t + 2        (2t + 1)(t + 2)

   Partial fractions:

           1              A          B
     --------------- = -------- + -------
     (2t+1)(t+2)        2t + 1     t + 2

     1 = A(t + 2) + B(2t + 1)

     t = -2   :   1 = -3B      =>  B = -1/3
     t = -1/2 :   1 = (3/2)A   =>  A = 2/3

        2      1                  1
   =   --- .  --- log|2t+1|   -  --- log|t+2|      (the 1/2 from d(2t+1)=2dt)
        3      2                  3

        1        | 2t + 1 |          1        | 2 tan(x/2) + 1 |
   =   --- log   | -------- |  + c = --- log  | -------------- |  +  c
        3        |  t + 2  |          3       |  tan(x/2) + 2  |
```

### Worked example 66 — Type 1/(a sin x + b cos x + c)

```
                dx
   INT --------------------
       4 cos x + 3 sin x + 5

   Put t = tan(x/2) :

        1 - t^2         2t              4 - 4t^2 + 6t + 5 + 5t^2
   4 . --------- + 3 . -------- + 5 =  --------------------------
        1 + t^2        1 + t^2                 1 + t^2

                                        t^2 + 6t + 9        (t + 3)^2
                                    =  --------------  =  -------------
                                         1 + t^2             1 + t^2

              2 dt
   = INT ------------- = 2 INT (t + 3)^-2 dt
         ( t + 3 )^2

               -1                 -2                    -2
   = 2 .  ----------- + c   =   ---------  + c   =  ----------------  +  c
             t + 3                t + 3              tan(x/2) + 3
```

> **TRAP:** After the substitution, EVERY `x` must be gone, including in `dx`.
> If you still see an x anywhere, you have made a mistake.

> **TIP:** When `a sin x + b cos x` appears, the alternative method is to write
> `a sin x + b cos x = r sin(x + A)` with `r = sqrt(a^2 + b^2)`. Both are
> accepted, but `t = tan(x/2)` never fails, so learn that one first.

---

# TOPIC 18 — REDUCTION FORMULAE

A reduction formula lets you step a big power DOWN to a smaller one, over and
over, until you reach something you know. The board asks you to **derive** one
of these as a 7-mark question.

```
   +----------------------------------------------------------------------+
   |                        - sin^(n-1) x cos x       n - 1                |
   |  INT sin^n x dx   =   ---------------------- + ------- INT sin^(n-2)x dx
   |                                n                  n                   |
   |                                                                       |
   |                          cos^(n-1) x sin x        n - 1               |
   |  INT cos^n x dx   =   --------------------- + ------- INT cos^(n-2)x dx
   |                                n                  n                   |
   |                                                                       |
   |                        tan^(n-1) x                                    |
   |  INT tan^n x dx   =   ------------ -  INT tan^(n-2) x dx              |
   |                          n - 1                                        |
   |                                                                       |
   |                       sec^(n-2) x tan x       n - 2                   |
   |  INT sec^n x dx   =  ------------------- + --------- INT sec^(n-2)x dx|
   |                             n - 1             n - 1                   |
   +----------------------------------------------------------------------+
```

### Worked derivation — INT sin^n x dx  (7-mark answer)

```
   Let  I(n) = INT sin^n x dx  =  INT sin^(n-1) x . sin x dx

   By parts:  u = sin^(n-1) x  ,  v = sin x   (so INT v dx = -cos x)

   I(n) = sin^(n-1)x (-cos x) - INT (n-1) sin^(n-2)x cos x . (-cos x) dx

        = -sin^(n-1)x cos x + (n-1) INT sin^(n-2)x cos^2 x dx

   Replace  cos^2 x = 1 - sin^2 x :

        = -sin^(n-1)x cos x + (n-1) INT sin^(n-2)x dx
                             - (n-1) INT sin^n x dx

        = -sin^(n-1)x cos x + (n-1) I(n-2) - (n-1) I(n)

   Bring the last term over:

   I(n) + (n-1) I(n) = -sin^(n-1)x cos x + (n-1) I(n-2)

           n I(n)    = -sin^(n-1)x cos x + (n-1) I(n-2)

                        - sin^(n-1)x cos x      n - 1
           I(n)      = -------------------- + ------- I(n-2)
                                n                n
```

### Worked example 67 — use it

```
   INT sin^4 x dx           (n = 4)

        - sin^3 x cos x      3
   =   ----------------- +  --- INT sin^2 x dx
              4              4

   And  INT sin^2 x dx = x/2 - (sin 2x)/4

        - sin^3 x cos x      3       x     sin 2x
   =   ----------------- +  --- (  ---  - -------- )  +  c
              4              4      2        4

        - sin^3 x cos x      3x       3 sin 2x
   =   ----------------- + ------  -  ---------  +  c
              4              8            16
```

---

# TOPIC 19 — Putting it all together: how to attack ANY integral

```
   +------------------------------------------------------------------+
   |  1. CLEAN IT UP.   Expand, split, divide, use a trig identity.    |
   |  2. IS IT STANDARD?  Look at your table of 20.                    |
   |  3. IS IT f(ax+b)?   Then just divide by a.                       |
   |  4. IS THE TOP THE DERIVATIVE OF THE BOTTOM?  -> log|f|           |
   |  5. IS SOMETHING'S DERIVATIVE LYING AROUND?   -> substitution     |
   |  6. IS IT A PRODUCT OF UNRELATED THINGS?      -> by parts, ILATE  |
   |  7. IS IT e^x [ f + f' ] ?                    -> e^x f(x)         |
   |  8. IS IT A FRACTION WITH A FACTORISABLE BOTTOM? -> partial fracs |
   |  9. IS THERE A QUADRATIC?  -> complete the square, standard form  |
   | 10. IS IT 1/(a + b cos x) TYPE?  -> t = tan(x/2)                  |
   | 11. STILL STUCK?  Try t = 1/x , or x = a sin(theta) ,             |
   |     or x = a tan(theta).                                          |
   +------------------------------------------------------------------+
```

## The trigonometric substitutions (when a root appears with no derivative help)

| You see | Put | Because then |
|---------|-----|--------------|
| sqrt(a^2 - x^2) | x = a sin(theta) | root becomes a cos(theta) |
| sqrt(a^2 + x^2) | x = a tan(theta) | root becomes a sec(theta) |
| sqrt(x^2 - a^2) | x = a sec(theta) | root becomes a tan(theta) |

### Worked example 68

```
             dx
   INT ---------------
       (1 + x^2)^(3/2)

   Put  x = tan(theta)  =>  dx = sec^2(theta) d(theta)
        1 + x^2 = sec^2(theta) ,  (1+x^2)^(3/2) = sec^3(theta)

         sec^2 (theta)
   = INT --------------- d(theta) = INT cos(theta) d(theta) = sin(theta) + c
         sec^3 (theta)

   From x = tan(theta):   sin(theta) = x / sqrt(1 + x^2)

              x
   =  ---------------  +  c
      sqrt(1 + x^2)
```

---

# TOPIC 20 — The mistakes that cost most marks

```
   +--------------------------------+---------------------------------------+
   |  WRONG                          |  RIGHT                               |
   +--------------------------------+---------------------------------------+
   |  Forgetting  + c                |  Always write + c                    |
   |  INT (1/x) dx = log x           |  = log |x|  (bars are compulsory)    |
   |  INT f g dx = (INT f)(INT g)    |  Use INTEGRATION BY PARTS            |
   |  Pulling x out of the integral  |  Only NUMBERS come out               |
   |  INT sin(x^2) dx = -cos(x^2)/2x |  Not doable by that rule at all      |
   |  Substituting but leaving an x  |  Every x must go, including in dx    |
   |  Forgetting 1/a in f(ax+b)      |  Divide by the coefficient of x      |
   |  Partial fractions with         |  DIVIDE FIRST if deg(top)>=deg(bot)  |
   |  degree(top) >= degree(bottom)  |                                      |
   |  Splitting px+q against the     |  Split against the DERIVATIVE        |
   |  quadratic itself               |  2ax + b                             |
   |  Wrong sign: INT sin = cos      |  INT sin x dx = -cos x               |
   |  Losing the a^2/2 in the        |  (x/2)sqrt(...) + (a^2/2)(log or     |
   |  sqrt forms                     |  Sin^-1)                             |
   +--------------------------------+---------------------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write  + c  on EVERY indefinite integral ?
  [ ]  Did I put the modulus bars in every log ?
  [ ]  When I substituted, did I convert dx as well ?
  [ ]  Did I put x back at the end (no t left in the final answer) ?
  [ ]  In by parts, did I follow ILATE for choosing u ?
  [ ]  In (px+q) questions, did I split against the DERIVATIVE of the
       quadratic — and did I actually find both A and B ?
  [ ]  In completing the square, did I take the coefficient of x^2 out
       of the WHOLE quadratic first ?
  [ ]  In partial fractions, did I check the degree of the top first ?
  [ ]  Did I DIFFERENTIATE my answer to check ?
       (30 seconds per question. It is the only chapter where you can
       mark yourself. Use it on the 7-mark question at least.)
  [ ]  Did I answer exactly 5 questions in Section B and 5 in Section C ?
```
