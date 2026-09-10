# Differentiation — Concepts Explained Simply

Read one topic. Do its worked examples. Then move to the next.
Nothing here assumes you remember anything from Class 10.
There is no algebra used in this file that you have not seen before.

Write derivatives like this: **dy/dx**, **d/dx [ f(x) ]**, **f'(x)**.
All three mean exactly the same thing.

---

# TOPIC 1 — What differentiation actually means

Forget formulas for a minute.

Imagine you are riding a bike. Your **position** changes with **time**.
How fast is your position changing? That is your **speed**.

Differentiation is the machine that turns

```
   "how much of something you have"   ---->   "how fast it is changing"
```

- Position ---> speed
- Money in a bank ---> interest rate
- Height of a curve ---> steepness of the curve

If y depends on x, then **dy/dx** is the answer to:

> **"When x increases by a tiny amount, how much does y change per unit of x?"**

That is the whole idea. Everything else is technique.

**Notation you will see in the exam paper — all the same thing:**

```
   dy
   --        f'(x)        y'        y1        D y
   dx
```

For the second derivative (differentiate twice):

```
   d2y
   ---       f''(x)       y''       y2
   dx^2
```

> **TRAP:** dy/dx is NOT a fraction "dy divided by dx". It is one single symbol
> meaning "the derivative of y with respect to x". You may not cancel the d's.

---

# TOPIC 2 — The derivative as a limit (the real definition)

Take a function y = f(x). Move x by a tiny step h.

```
   old value of y  =  f(x)
   new value of y  =  f(x + h)

   change in y     =  f(x + h) - f(x)
   change in x     =  h

   average rate of change  =   f(x + h) - f(x)
                               -----------------
                                       h
```

Now shrink h down towards zero. What that average settles on is the derivative.

```
  +---------------------------------------------------+
  |                                                   |
  |                      f(x + h) - f(x)              |
  |     f'(x)  =   lim   -----------------            |
  |               h -> 0        h                     |
  |                                                   |
  +---------------------------------------------------+
```

This is called the **definition from FIRST PRINCIPLES** or the **ab-initio
method**. "Ab initio" is Latin for "from the beginning".

**Derivative at a particular point x = a:**

```
  +---------------------------------------------------+
  |                                                   |
  |                      f(a + h) - f(a)              |
  |     f'(a)  =   lim   -----------------            |
  |               h -> 0        h                     |
  |                                                   |
  |     or equivalently                               |
  |                                                   |
  |                      f(x) - f(a)                  |
  |     f'(a)  =   lim   -------------                |
  |               x -> a     x - a                    |
  |                                                   |
  +---------------------------------------------------+
```

**A function is differentiable at a point** only if this limit exists and is the
same from the left and from the right.

> **TRAP:** Differentiable ==> continuous. But continuous does NOT ==> differentiable.
> The standard counter-example is f(x) = |x| at x = 0: it is continuous there
> (no break) but has a sharp corner, so it has no single tangent, so no derivative.
> Left derivative = -1, right derivative = +1. They disagree. This is a 2-mark question.

---

# TOPIC 3 — Geometrical meaning: slope of the tangent

This is the picture the examiner wants you to know.

```
     y
     ^                                  . the CHORD PQ
     |                              .  /
     |                          Q *   /   slope of chord =
     |                        .      /      f(x+h) - f(x)
     |                    .         /       -------------
     |                .            /              h
     |            .               /
     |      P *  -  -  -  -  -  - +
     |       /                    | h
     |      /                     |
     |     /  the TANGENT at P
     |    /
     +---------------------------------------> x
          x                     x + h
```

- P is the point (x, f(x)). Q is the nearby point (x + h, f(x + h)).
- The straight line through P and Q is a **chord**. Its slope is
  [ f(x+h) - f(x) ] / h.
- Now slide Q down the curve towards P (that is, let h -> 0).
  The chord swings around and becomes the **TANGENT** at P.

```
  +--------------------------------------------------------------+
  |                                                              |
  |    dy/dx  at a point   =   SLOPE of the tangent at that      |
  |                            point                             |
  |                                                              |
  |    slope = tan(theta)  where theta is the angle the tangent  |
  |            makes with the positive x-axis                    |
  |                                                              |
  +--------------------------------------------------------------+
```

Quick reading of the sign:

| dy/dx at a point | What the curve is doing there |
|------------------|-------------------------------|
| positive | going UP as you move right (increasing) |
| negative | going DOWN as you move right (decreasing) |
| zero | flat — a peak, a valley, or a level spot |

This is the bridge into Chapter 10 (Applications of Derivatives), where you use
the same number to find tangents, normals, maxima and minima.

---

# TOPIC 4 — DIFFERENTIATION FROM FIRST PRINCIPLES (the ab-initio method)

**This is a guaranteed board question.** Sometimes 2 marks, often 4, sometimes
the full 7. Learn the method, not seven separate answers — the steps never change.

## The fixed 5-step recipe

```
  +----------------------------------------------------------------+
  |  STEP 1   Write   f(x) = ...                                   |
  |  STEP 2   Write   f(x + h) = ...   (replace every x by x + h)  |
  |  STEP 3   Write   f(x + h) - f(x)  and SIMPLIFY it as much     |
  |           as humanly possible (factorise, rationalise, use a   |
  |           trig transformation) until an  h  appears that you   |
  |           can cancel                                           |
  |  STEP 4   Divide by h                                          |
  |  STEP 5   Take the limit as h -> 0                             |
  +----------------------------------------------------------------+
```

**The four standard limits you will need in step 5 — memorise these:**

```
  +--------------------------------------------------------+
  |                                                        |
  |         sin(t)                        tan(t)           |
  |   lim  --------  =  1           lim  --------  =  1    |
  |  t->0     t                    t->0     t              |
  |                                                        |
  |         e^t - 1                      a^t - 1           |
  |   lim  ---------  =  1          lim  ---------  = log a|
  |  t->0      t                   t->0      t             |
  |                                                        |
  |         log(1 + t)                    t^n - a^n        |
  |   lim  ------------  =  1       lim   ----------- = n a^(n-1)
  |  t->0       t                  t->a      t - a         |
  |                                                        |
  +--------------------------------------------------------+
```

---

## 4.1 — First principles for f(x) = x^n

```
  f(x) = x^n

                x^n gets replaced by (x + h)^n
                but the neat way is to substitute  x + h = t
                so that  h = t - x , and  h -> 0  means  t -> x

                        f(x + h) - f(x)
   f'(x)  =   lim      -----------------
             h -> 0            h

                        t^n - x^n
          =   lim       ----------
             t -> x       t - x

          =   n x^(n-1)             (standard limit above)


  +-----------------------------------+
  |   d                               |
  |  ---- ( x^n )  =  n x^(n-1)       |
  |   dx                              |
  +-----------------------------------+
```

**Check it on a simple case:** d/dx (x^3) = 3x^2. Yes.

---

## 4.2 — First principles for f(x) = sqrt(x)

The trick here is **rationalising** (multiply top and bottom by the conjugate).

```
  f(x) = sqrt(x)          f(x + h) = sqrt(x + h)

                       sqrt(x + h) - sqrt(x)
   f'(x)  =   lim      ----------------------
             h -> 0             h

   Multiply top and bottom by  [ sqrt(x + h) + sqrt(x) ] :

                       (x + h) - x
          =   lim      -----------------------------------
             h -> 0    h [ sqrt(x + h) + sqrt(x) ]

                             h
          =   lim      -----------------------------------
             h -> 0    h [ sqrt(x + h) + sqrt(x) ]

                             1
          =   lim      ---------------------------
             h -> 0    sqrt(x + h) + sqrt(x)

                       1
          =      -------------
                  2 sqrt(x)


  +-------------------------------------+
  |   d                     1           |
  |  ---- ( sqrt(x) )  =  -------       |
  |   dx                  2 sqrt(x)     |
  +-------------------------------------+
```

> **TRAP:** you MUST cancel the h before putting h = 0. If you put h = 0 first you
> get 0/0, which is meaningless and scores zero.

---

## 4.3 — First principles for f(x) = sin x

You need one transformation formula:

```
   sin C - sin D  =  2 cos( (C + D)/2 ) sin( (C - D)/2 )
```

```
  f(x) = sin x            f(x + h) = sin(x + h)

                       sin(x + h) - sin x
   f'(x)  =   lim      -------------------
             h -> 0            h

   Apply the formula with  C = x + h ,  D = x :
       (C + D)/2 = x + h/2        (C - D)/2 = h/2

                       2 cos( x + h/2 ) sin( h/2 )
          =   lim      ---------------------------
             h -> 0                h

   Write h in the bottom as  2 x (h/2)  so the 2's cancel:

                                          sin( h/2 )
          =   lim   cos( x + h/2 )  x   -------------
             h -> 0                          h/2

          =   cos( x + 0 )  x  1                  [ using lim sin t / t = 1 ]

          =   cos x


  +--------------------------------+
  |   d                            |
  |  ---- ( sin x )  =  cos x      |
  |   dx                           |
  +--------------------------------+
```

---

## 4.4 — First principles for f(x) = cos x

Same idea, different formula:

```
   cos C - cos D  =  -2 sin( (C + D)/2 ) sin( (C - D)/2 )
```

```
                       cos(x + h) - cos x
   f'(x)  =   lim      -------------------
             h -> 0            h

                       -2 sin( x + h/2 ) sin( h/2 )
          =   lim      ----------------------------
             h -> 0                h

                                            sin( h/2 )
          =   lim   - sin( x + h/2 )   x   ------------
             h -> 0                            h/2

          =   - sin x  x  1

          =   - sin x


  +--------------------------------+
  |   d                            |
  |  ---- ( cos x )  =  - sin x    |
  |   dx                           |
  +--------------------------------+
```

> **TRAP:** the minus sign. Every "co-" function (cos, cot, cosec, arccos, arccot,
> arccosec) has a MINUS in its derivative. Use that as your memory hook.

---

## 4.5 — First principles for f(x) = tan x

Here you turn tan into sin/cos and combine the fractions.

```
  f(x) = tan x

                       tan(x + h) - tan x
   f'(x)  =   lim      -------------------
             h -> 0            h

   Write each tan as sin/cos and take the common denominator:

                 sin(x + h)     sin x         sin(x+h) cos x - cos(x+h) sin x
   tan(x+h)-tan x = ---------- - -------  =  -------------------------------
                 cos(x + h)     cos x              cos(x + h) cos x

   The top is exactly  sin( (x + h) - x )  =  sin h .   [ sin(A-B) formula ]

                              sin h
          =   lim      ------------------------
             h -> 0    h cos(x + h) cos x

                       sin h              1
          =   lim      ------  x   ------------------
             h -> 0      h         cos(x + h) cos x

          =   1  x   1 / ( cos x . cos x )

          =   1 / cos^2 x

          =   sec^2 x


  +-----------------------------------+
  |   d                               |
  |  ---- ( tan x )  =  sec^2 x       |
  |   dx                              |
  +-----------------------------------+
```

---

## 4.6 — First principles for f(x) = e^x

```
  f(x) = e^x              f(x + h) = e^(x + h) = e^x . e^h

                       e^x . e^h  -  e^x
   f'(x)  =   lim      -----------------
             h -> 0            h

                       e^x ( e^h - 1 )
          =   lim      ---------------
             h -> 0           h

                             e^h - 1
          =   e^x  x   lim   -------
                      h -> 0    h

          =   e^x  x  1

          =   e^x


  +----------------------------+
  |   d                        |
  |  ---- ( e^x )  =  e^x      |
  |   dx                       |
  +----------------------------+
```

**The same working with a instead of e** (using lim (a^h - 1)/h = log a):

```
  +---------------------------------------+
  |   d                                   |
  |  ---- ( a^x )  =  a^x . log a         |
  |   dx                                  |
  +---------------------------------------+
      (log means natural log, base e)
```

e^x is the only function that is its own derivative. That is why e is special.

---

## 4.7 — First principles for f(x) = log x

You need the log rule log A - log B = log (A/B).

```
  f(x) = log x            f(x + h) = log(x + h)

                       log(x + h) - log x
   f'(x)  =   lim      ------------------
             h -> 0           h

                       1        ( x + h )
          =   lim     ---  log  ( ------- )
             h -> 0    h        (    x    )

                       1
          =   lim     ---  log ( 1 + h/x )
             h -> 0    h

   Multiply and divide by x so the inside matches the standard limit:

                       1        log( 1 + h/x )
          =   lim     ---  x   ----------------
             h -> 0    x             h/x

          =   (1/x)  x  1               [ using lim log(1+t)/t = 1 ]

          =   1/x


  +----------------------------+
  |   d                 1      |
  |  ---- ( log x ) =  ---     |
  |   dx                x      |
  +----------------------------+
```

> **TRAP:** in Intermediate maths, "log x" ALWAYS means natural log (base e)
> unless a base is written. So d/dx (log x) = 1/x, not 1/(x log 10).

---

# TOPIC 5 — The standard derivatives you must know cold

Once you have proved the ones above, you are allowed to just QUOTE all of these.

| f(x) | f'(x) |
|------|-------|
| c (any constant) | 0 |
| x | 1 |
| x^n | n x^(n-1) |
| 1/x | -1/x^2 |
| sqrt(x) | 1 / (2 sqrt(x)) |
| e^x | e^x |
| a^x | a^x log a |
| log x | 1/x |
| log base a of x | 1 / (x log a) |
| sin x | cos x |
| cos x | -sin x |
| tan x | sec^2 x |
| cot x | -cosec^2 x |
| sec x | sec x tan x |
| cosec x | -cosec x cot x |

**Why the derivative of a constant is 0:** a constant never changes, so its rate
of change is nothing. The graph y = 5 is a flat horizontal line; a flat line has
slope 0.

### Worked example 5.1
Differentiate y = 7x^5 - 3x^2 + 4x - 9

```
  Term by term:

  d/dx ( 7x^5 )  =  7 . 5 x^4   =  35 x^4
  d/dx ( 3x^2 )  =  3 . 2 x     =   6 x
  d/dx ( 4x   )  =  4
  d/dx ( 9    )  =  0

  dy/dx  =  35 x^4  -  6x  +  4
```

### Worked example 5.2
Differentiate y = 1/x^3 + sqrt(x)

```
  Rewrite everything as a POWER first. Never differentiate a root or a
  reciprocal in its original shape.

    1/x^3   =  x^(-3)          sqrt(x)  =  x^(1/2)

  d/dx ( x^(-3) )   =  -3 x^(-4)    =  -3 / x^4

  d/dx ( x^(1/2) )  =  (1/2) x^(-1/2)  =  1 / (2 sqrt(x))

  dy/dx  =  -3/x^4  +  1/(2 sqrt(x))
```

> **TRAP:** the number ONE step that saves weak students marks — before you do
> anything else, rewrite every root as a fractional power and every 1/x^n as
> x^(-n). Then the single rule n x^(n-1) handles all of them.

---

# TOPIC 6 — Sum, difference and constant multiple rules

```
  +-------------------------------------------------------+
  |                                                       |
  |   d                        d          d               |
  |  ---- [ u + v ]  =        ---- u  +  ---- v           |
  |   dx                       dx         dx              |
  |                                                       |
  |   d                        d          d               |
  |  ---- [ u - v ]  =        ---- u  -  ---- v           |
  |   dx                       dx         dx              |
  |                                                       |
  |   d                          d                        |
  |  ---- [ k u ]    =    k  x  ---- u        (k constant)|
  |   dx                         dx                       |
  |                                                       |
  +-------------------------------------------------------+
```

In plain words: **you may differentiate a sum one piece at a time, and constants
just come along for the ride.**

### Worked example 6.1
y = 3 sin x - 5 e^x + 2 log x - 8

```
  dy/dx  =  3 cos x  -  5 e^x  +  2 (1/x)  -  0

         =  3 cos x  -  5 e^x  +  2/x
```

---

# TOPIC 7 — THE PRODUCT RULE

Use it when two functions are **MULTIPLIED**.

```
  +--------------------------------------------------------------+
  |                                                              |
  |    d                    dv          du                       |
  |   ---- ( u v )  =  u . ----   +  v . ----                    |
  |    dx                   dx           dx                      |
  |                                                              |
  |    or:   (uv)'  =  u' v  +  u v'                             |
  |                                                              |
  +--------------------------------------------------------------+
```

**Say it out loud while you write it:**
*"first times derivative of second, plus second times derivative of first."*

> **TRAP:** d/dx (uv) is **NOT** (du/dx)(dv/dx). This is the single most common
> wrong answer in the whole chapter. Multiplying the two derivatives is always wrong.

### Worked example 7.1
y = x^2 . sin x

```
  Choose:  u = x^2         v = sin x
           u' = 2x         v' = cos x

  dy/dx  =  u' v  +  u v'

         =  2x . sin x  +  x^2 . cos x

         =  2x sin x  +  x^2 cos x
```

### Worked example 7.2
y = e^x . log x

```
  u = e^x        v = log x
  u' = e^x       v' = 1/x

  dy/dx  =  e^x . log x  +  e^x . (1/x)

         =  e^x ( log x  +  1/x )
```

### Worked example 7.3
y = x^3 . e^x . sin x   (THREE functions)

For three factors the rule extends naturally: differentiate one at a time and
leave the others alone.

```
  (uvw)'  =  u' v w  +  u v' w  +  u v w'

  dy/dx  =  3x^2 . e^x . sin x
          +  x^3 . e^x . sin x
          +  x^3 . e^x . cos x

         =  x^2 e^x ( 3 sin x  +  x sin x  +  x cos x )
```

---

# TOPIC 8 — THE QUOTIENT RULE

Use it when one function is **DIVIDED** by another.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |               du          dv                                     |
  |          v . ----  -  u . ----                                   |
  |    d  ( u )   dx           dx                                    |
  |   --- ( - ) = -------------------                                |
  |    dx ( v )          v^2                                         |
  |                                                                  |
  |                                                                  |
  |    or:   (u/v)'  =  ( u' v  -  u v' ) / v^2                      |
  |                                                                  |
  +------------------------------------------------------------------+
```

**Say it out loud:**
*"bottom times derivative of top, MINUS top times derivative of bottom,
all over bottom squared."*

> **TRAP:** the ORDER matters here because of the minus sign. In the product rule
> you may write the two terms in any order; in the quotient rule you may not.
> Bottom-times-top-derivative comes FIRST.

### Worked example 8.1
y = sin x / x

```
  u = sin x      v = x
  u' = cos x     v' = 1

           u' v  -  u v'        x cos x  -  sin x
  dy/dx =  ---------------  =  -------------------
                v^2                    x^2
```

### Worked example 8.2 — deriving tan x from sin/cos

```
  y = tan x = sin x / cos x

  u = sin x      v = cos x
  u' = cos x     v' = -sin x

           cos x . cos x  -  sin x . (- sin x)
  dy/dx =  -----------------------------------
                       cos^2 x

           cos^2 x  +  sin^2 x            1
        =  --------------------   =   ---------   =  sec^2 x
                  cos^2 x              cos^2 x
```

That is why d/dx (tan x) = sec^2 x. You do not need to memorise it blindly.

### Worked example 8.3
y = (2x + 3) / (3x - 5)

```
  u = 2x + 3     v = 3x - 5
  u' = 2         v' = 3

           2(3x - 5)  -  (2x + 3)(3)         6x - 10 - 6x - 9
  dy/dx =  --------------------------   =   ------------------
                  (3x - 5)^2                    (3x - 5)^2

                -19
        =   ------------
             (3x - 5)^2
```

---

# TOPIC 9 — THE CHAIN RULE (function of a function)

This is the rule you will use most often in your life.

Use it when one function is **INSIDE** another: sin(3x), (2x + 1)^7,
e^(x^2), log(sin x).

```
  +----------------------------------------------------------+
  |                                                          |
  |    dy         dy        du                               |
  |   ----  =    ----  x   ----          where  y = f(u)     |
  |    dx         du        dx                  u = g(x)     |
  |                                                          |
  +----------------------------------------------------------+
```

**The practical version — "OUTSIDE first, then INSIDE":**

```
  +--------------------------------------------------------------+
  |                                                              |
  |   d                                                          |
  |  ---- [ f( g(x) ) ]  =  f'( g(x) )  x  g'(x)                 |
  |   dx                                                         |
  |                         ^^^^^^^^^      ^^^^^                 |
  |                       differentiate  then multiply by the    |
  |                       the OUTSIDE,    derivative of the      |
  |                       leaving the     INSIDE                 |
  |                       inside alone                           |
  +--------------------------------------------------------------+
```

Think of peeling an onion: strip one layer, multiply, strip the next layer,
multiply again, until nothing is left.

### Worked example 9.1
y = sin(3x)

```
  OUTSIDE  = sin( )      derivative = cos( )
  INSIDE   = 3x          derivative = 3

  dy/dx  =  cos(3x)  x  3   =   3 cos 3x
```

### Worked example 9.2
y = (2x + 1)^7

```
  OUTSIDE  = ( )^7       derivative = 7 ( )^6
  INSIDE   = 2x + 1      derivative = 2

  dy/dx  =  7 (2x + 1)^6  x  2   =   14 (2x + 1)^6
```

### Worked example 9.3
y = e^(x^2)

```
  OUTSIDE  = e^( )       derivative = e^( )
  INSIDE   = x^2         derivative = 2x

  dy/dx  =  e^(x^2)  x  2x   =   2x e^(x^2)
```

### Worked example 9.4
y = log(sin x)

```
  OUTSIDE  = log( )      derivative = 1/( )
  INSIDE   = sin x       derivative = cos x

               1                    cos x
  dy/dx  =  -------  x  cos x  =   -------  =  cot x
             sin x                  sin x
```

### Worked example 9.5 — THREE layers
y = sqrt( sin( x^3 ) )

Peel one layer at a time.

```
  Layer 1 (outermost)  sqrt( )       ->   1 / ( 2 sqrt( ) )
  Layer 2              sin( )        ->   cos( )
  Layer 3 (innermost)  x^3           ->   3x^2

                    1
  dy/dx  =  ------------------  x  cos( x^3 )  x  3x^2
             2 sqrt( sin(x^3) )

              3 x^2 cos( x^3 )
         =  ---------------------
             2 sqrt( sin( x^3 ) )
```

### Worked example 9.6 — chain rule inside the product rule
y = x^2 . cos(3x)

```
  u = x^2                v = cos(3x)
  u' = 2x                v' = -3 sin(3x)      <- chain rule used here

  dy/dx  =  2x . cos(3x)  +  x^2 . ( -3 sin 3x )

         =  2x cos 3x  -  3 x^2 sin 3x
```

> **TRAP:** forgetting to multiply by the derivative of the inside.
> d/dx sin(5x) is 5 cos 5x, NOT cos 5x. If your answer to a chain-rule question
> has no "extra" factor floating about, check it again.

**Quick chain-rule results worth memorising:**

| Function | Derivative |
|----------|------------|
| sin(ax + b) | a cos(ax + b) |
| cos(ax + b) | -a sin(ax + b) |
| tan(ax + b) | a sec^2(ax + b) |
| e^(ax + b) | a e^(ax + b) |
| log(ax + b) | a / (ax + b) |
| (ax + b)^n | n a (ax + b)^(n-1) |
| sqrt(ax + b) | a / (2 sqrt(ax + b)) |

---

# TOPIC 10 — Derivatives of the six inverse trigonometric functions

You are allowed to quote these. Memorise them in PAIRS — the "co-" partner is
just the same thing with a minus sign.

| f(x) | f'(x) | Valid for |
|------|-------|-----------|
| arcsin x (Sin^-1 x) | 1 / sqrt(1 - x^2) | -1 < x < 1 |
| arccos x (Cos^-1 x) | -1 / sqrt(1 - x^2) | -1 < x < 1 |
| arctan x (Tan^-1 x) | 1 / (1 + x^2) | all x |
| arccot x (Cot^-1 x) | -1 / (1 + x^2) | all x |
| arcsec x (Sec^-1 x) | 1 / ( abs(x) sqrt(x^2 - 1) ) | abs(x) > 1 |
| arccosec x (Cosec^-1 x) | -1 / ( abs(x) sqrt(x^2 - 1) ) | abs(x) > 1 |

Memory picture:

```
  +---------------------------------------------------------+
  |                                                         |
  |   arcsin / arccos     ->  sqrt(1 - x^2)  on the bottom  |
  |   arctan / arccot     ->  (1 + x^2)      on the bottom  |
  |   arcsec / arccosec   ->  abs(x) sqrt(x^2 - 1) on bottom|
  |                                                         |
  |   the "co-" one of each pair carries a MINUS sign       |
  |                                                         |
  +---------------------------------------------------------+
```

Useful consequence (worth 2 marks on its own):

```
   arcsin x + arccos x  =  pi/2   (a constant)

   so   d/dx [ arcsin x + arccos x ]  =  0
```

### Worked example 10.1
y = arctan(3x)

```
  chain rule:  outside arctan( ) -> 1/(1 + ( )^2) ,  inside 3x -> 3

                  1                        3
  dy/dx  =  ------------- x 3   =   --------------
             1 + (3x)^2              1 + 9 x^2
```

### Worked example 10.2
y = arcsin(x^2)

```
                  1                          2x
  dy/dx  =  ----------------- x 2x  =  ----------------
             sqrt(1 - (x^2)^2)          sqrt(1 - x^4)
```

---

# TOPIC 11 — Hyperbolic and inverse hyperbolic functions

**What they are.** They are built out of e^x and e^(-x):

```
             e^x - e^(-x)                e^x + e^(-x)
   sinh x = --------------      cosh x = --------------
                   2                           2

   tanh x = sinh x / cosh x        coth x = 1 / tanh x
   sech x = 1 / cosh x             cosech x = 1 / sinh x
```

**Their derivatives look like the trig ones but the sign pattern is different.**

| f(x) | f'(x) |
|------|-------|
| sinh x | cosh x |
| cosh x | sinh x |
| tanh x | sech^2 x |
| coth x | -cosech^2 x |
| sech x | -sech x tanh x |
| cosech x | -cosech x coth x |

> **TRAP:** d/dx (cosh x) = **+ sinh x**, with a PLUS.
> Compare d/dx (cos x) = -sin x, with a MINUS. This one difference is where
> nearly all hyperbolic marks are lost.

**Proof of the first one (easy 2-mark question):**

```
   d          d  ( e^x - e^(-x) )      e^x + e^(-x)
  ---- sinh x = --- ( ------------ ) = ------------ = cosh x
   dx         dx (       2       )          2

  (because d/dx e^(-x) = -e^(-x), and minus a minus gives plus)
```

**Inverse hyperbolic derivatives:**

| f(x) | f'(x) | Valid for |
|------|-------|-----------|
| sinh^-1 x | 1 / sqrt(x^2 + 1) | all x |
| cosh^-1 x | 1 / sqrt(x^2 - 1) | x > 1 |
| tanh^-1 x | 1 / (1 - x^2) | abs(x) < 1 |
| coth^-1 x | 1 / (1 - x^2) | abs(x) > 1 |
| sech^-1 x | -1 / ( x sqrt(1 - x^2) ) | 0 < x < 1 |
| cosech^-1 x | -1 / ( abs(x) sqrt(1 + x^2) ) | x not 0 |

Compare with the inverse trig ones and notice the pattern:

```
  arcsin x  ->  1 / sqrt(1 - x^2)         sinh^-1 x  ->  1 / sqrt(x^2 + 1)
  arctan x  ->  1 / (1 + x^2)             tanh^-1 x  ->  1 / (1 - x^2)

  the 1 and the x^2 SWAP PLACES / SWAP SIGNS. That is the only difference.
```

---

# TOPIC 12 — IMPLICIT differentiation

**When you use it:** when y is tangled up with x and you cannot get y by itself.
Example: x^2 + y^2 = 25, or x^3 + y^3 = 3axy, or x^y = y^x.

Such an equation is called an **implicit function**, written F(x, y) = 0.

## The method

```
  +---------------------------------------------------------------+
  |  STEP 1  Differentiate BOTH SIDES with respect to x.          |
  |  STEP 2  Every time you differentiate a term containing y,    |
  |          use the chain rule: you get the usual derivative     |
  |          MULTIPLIED BY dy/dx.                                 |
  |  STEP 3  Collect all the dy/dx terms on the left, everything  |
  |          else on the right.                                   |
  |  STEP 4  Factor out dy/dx and divide.                         |
  +---------------------------------------------------------------+
```

**The one thing to remember:**

```
   d                                d
  ---- ( y^2 )  =  2y . dy/dx      ---- ( sin y )  =  cos y . dy/dx
   dx                               dx

   d
  ---- ( x y )  =  x . dy/dx  +  y        (PRODUCT rule, since it is x times y)
   dx
```

### Worked example 12.1
x^2 + y^2 = 25. Find dy/dx.

```
  Differentiate both sides w.r.t. x:

     2x  +  2y . dy/dx  =  0

     2y . dy/dx  =  -2x

     dy/dx  =  -x / y
```

### Worked example 12.2
x^3 + y^3 = 3 a x y. Find dy/dx.   (This is a standard board question.)

```
  Differentiate both sides w.r.t. x.
  Right side needs the PRODUCT rule on x times y.

     3x^2  +  3y^2 . dy/dx   =   3a [ x . dy/dx  +  y . 1 ]

  Divide everything by 3:

     x^2  +  y^2 . dy/dx   =   a x . dy/dx  +  a y

  Collect dy/dx on the left, the rest on the right:

     y^2 . dy/dx  -  a x . dy/dx   =   a y  -  x^2

     dy/dx ( y^2 - a x )   =   a y  -  x^2


              a y  -  x^2
     dy/dx = -------------
              y^2  -  a x
```

### Worked example 12.3
sin(xy) = x + y. Find dy/dx.

```
  Left side: chain rule outside (sin), product rule inside (xy).

     cos(xy) . [ x . dy/dx  +  y ]   =   1  +  dy/dx

     x cos(xy) . dy/dx  +  y cos(xy)   =   1  +  dy/dx

     x cos(xy) . dy/dx  -  dy/dx   =   1  -  y cos(xy)

     dy/dx [ x cos(xy)  -  1 ]   =   1  -  y cos(xy)


              1  -  y cos(xy)
     dy/dx = -----------------
              x cos(xy)  -  1
```

> **TRAP:** the answer to an implicit problem normally contains BOTH x and y.
> That is correct and expected. Do not panic and try to remove the y.

---

# TOPIC 13 — PARAMETRIC differentiation

**When you use it:** when x and y are BOTH given in terms of a third letter,
usually t or theta. That third letter is called the **parameter**.

```
  +------------------------------------------------------------+
  |                                                            |
  |    x = f(t)                                                |
  |    y = g(t)                                                |
  |                                                            |
  |               dy/dt          the t's "cancel"              |
  |    dy/dx  =  --------        (as a memory aid only)        |
  |               dx/dt                                        |
  |                                                            |
  |    valid provided  dx/dt is not zero                       |
  |                                                            |
  +------------------------------------------------------------+
```

## The method

```
  STEP 1   Differentiate x with respect to t   ->  dx/dt
  STEP 2   Differentiate y with respect to t   ->  dy/dt
  STEP 3   Divide:  dy/dx = (dy/dt) / (dx/dt)
  STEP 4   Simplify. The answer is usually in terms of t, and that is fine.
```

### Worked example 13.1
x = a cos t, y = a sin t. Find dy/dx.

```
  dx/dt  =  - a sin t
  dy/dt  =    a cos t

              a cos t          cos t
  dy/dx  =  -----------  =  - -------   =  - cot t
             - a sin t         sin t
```

### Worked example 13.2
x = a cos^3 t, y = a sin^3 t. Find dy/dx.

```
  dx/dt  =  a . 3 cos^2 t . ( - sin t )   =  - 3a cos^2 t sin t
  dy/dt  =  a . 3 sin^2 t . ( cos t )     =    3a sin^2 t cos t

              3a sin^2 t cos t             sin t
  dy/dx  =  ---------------------   =   - -------   =  - tan t
             - 3a cos^2 t sin t            cos t
```

### Worked example 13.3
x = a( cos t + t sin t ),  y = a( sin t - t cos t ). Find dy/dx.

```
  dx/dt  =  a [ - sin t  +  ( sin t . 1  +  t cos t ) ]      <- product rule on t sin t
         =  a [ - sin t  +  sin t  +  t cos t ]
         =  a t cos t

  dy/dt  =  a [ cos t  -  ( cos t . 1  +  t ( - sin t ) ) ]  <- product rule on t cos t
         =  a [ cos t  -  cos t  +  t sin t ]
         =  a t sin t

              a t sin t         sin t
  dy/dx  =  -------------  =  -------   =   tan t
              a t cos t         cos t
```

### Worked example 13.4
x = 3 cos t - 2 cos^3 t,  y = 3 sin t - 2 sin^3 t. Find dy/dx.

```
  dx/dt  =  - 3 sin t  -  6 cos^2 t ( - sin t )
         =  - 3 sin t  +  6 sin t cos^2 t
         =  - 3 sin t ( 1  -  2 cos^2 t )

  dy/dt  =    3 cos t  -  6 sin^2 t ( cos t )
         =    3 cos t ( 1  -  2 sin^2 t )

  Note  1 - 2 sin^2 t = cos 2t   and   1 - 2 cos^2 t = - cos 2t

              3 cos t . cos 2t              cos t
  dy/dx  =  --------------------------  =  -------  =  cot t
             - 3 sin t . ( - cos 2t )       sin t
```

> **TRAP:** do NOT try to eliminate t and then differentiate. That is legal but
> almost always ten times longer, and you will run out of time.

---

# TOPIC 14 — LOGARITHMIC differentiation

**When you use it — two clear signals:**

1. The function has **x in the exponent AND x in the base**:
   y = x^x, y = (sin x)^x, y = [f(x)]^g(x).
   None of the ordinary rules can touch this. Neither n x^(n-1) nor a^x log a
   applies, because in one the base is variable and in the other the power is.

2. The function is a **long product, quotient or root**, like
   y = (x-1)(x-2) / sqrt((x-3)(x-4)). Taking logs turns multiplication into
   addition and powers into multipliers, so the work collapses.

## The method

```
  +---------------------------------------------------------------+
  |  STEP 1   Take natural log of BOTH sides:  log y = ...        |
  |  STEP 2   Use log rules to break it up:                       |
  |             log(AB) = log A + log B                           |
  |             log(A/B) = log A - log B                          |
  |             log(A^n) = n log A                                |
  |  STEP 3   Differentiate both sides w.r.t. x.                  |
  |           The left side becomes  (1/y) . dy/dx                |
  |  STEP 4   Multiply both sides by y                            |
  |  STEP 5   Put the original expression back in place of y      |
  +---------------------------------------------------------------+
```

### Worked example 14.1 — the classic
y = x^x. Find dy/dx.

```
  STEP 1   log y  =  log ( x^x )

  STEP 2   log y  =  x . log x

  STEP 3   Differentiate both sides w.r.t. x.
           Left: chain rule.   Right: PRODUCT rule.

            1     dy                       1
           --- . ----   =   1 . log x  +  x . ---
            y     dx                          x

            1     dy
           --- . ----   =   log x  +  1
            y     dx

  STEP 4   dy/dx  =  y ( log x + 1 )

  STEP 5   dy/dx  =  x^x ( 1 + log x )
```

### Worked example 14.2
y = (sin x)^(log x). Find dy/dx.

```
  log y  =  log x . log( sin x )

  Differentiate (product rule on the right):

   1    dy         1                                cos x
  --- . ---- =   --- . log(sin x)   +   log x  .  --------
   y    dx        x                                 sin x

   1    dy       log(sin x)
  --- . ---- =   ----------   +   log x . cot x
   y    dx            x


  dy/dx  =  (sin x)^(log x)  [  log(sin x)/x  +  cot x . log x  ]
```

### Worked example 14.3 — sum of two such terms
y = x^(tan x) + (sin x)^(cos x). Find dy/dx.

**You cannot take the log of a SUM.** Split it into two pieces first.

```
  Let  u = x^(tan x)   and   v = (sin x)^(cos x).   Then y = u + v
  and  dy/dx = du/dx + dv/dx. Handle each separately.

  --- piece u ---
  log u  =  tan x . log x

   1    du                            tan x
  --- . ---- =   sec^2 x . log x  +  -------
   u    dx                              x

  du/dx  =  x^(tan x) [ sec^2 x . log x  +  (tan x)/x ]


  --- piece v ---
  log v  =  cos x . log( sin x )

   1    dv                                        cos x
  --- . ---- =  ( - sin x ) log(sin x)  +  cos x . -----
   v    dx                                         sin x

  dv/dx  =  (sin x)^(cos x) [ cos x . cot x  -  sin x . log(sin x) ]


  --- add them ---
  dy/dx  =  x^(tan x) [ sec^2 x . log x  +  (tan x)/x ]
          + (sin x)^(cos x) [ cos x . cot x  -  sin x . log(sin x) ]
```

> **TRAP:** log(A + B) is NOT log A + log B. If your function is a SUM of two
> power-type terms, you MUST split first. Students lose all 7 marks here.

### Worked example 14.4 — long product and quotient

```
                 (x - 1)(x - 2)
  y  =  ---------------------------------
          sqrt( (x - 3)(x - 4)(x - 5) )

  log y  =  log(x-1) + log(x-2)
            - (1/2)[ log(x-3) + log(x-4) + log(x-5) ]

   1    dy       1         1        1  (   1        1        1    )
  --- . ---- = ----- +  ----- -   --- ( ----- +  ----- +  ----- )
   y    dx     x - 1    x - 2      2  ( x - 3    x - 4    x - 5 )

  dy/dx = y x [ that whole bracket ] , with y put back in.
```

Doing that by quotient rule directly would take a page. This takes four lines.

### Worked example 14.5 — implicit plus logarithmic
If x^y = e^(x - y), show that dy/dx = log x / (1 + log x)^2.

```
  Take log of both sides:

     y . log x   =   ( x - y ) . log e   =   x - y      (since log e = 1)

  Get y by itself:

     y log x  +  y   =   x
     y ( 1 + log x ) =   x

              x
     y  =  ----------
           1 + log x

  Now QUOTIENT rule:

               (1 + log x)(1)  -  x . (1/x)
     dy/dx  =  ----------------------------
                     (1 + log x)^2

                1 + log x  -  1              log x
            =  ------------------   =   ---------------
                 (1 + log x)^2           (1 + log x)^2      PROVED
```

---

# TOPIC 15 — Differentiating one function WITH RESPECT TO another

**The question sounds like:** "Find the derivative of f(x) with respect to g(x)."

You are being asked for **df/dg**, not df/dx.

```
  +-------------------------------------------------------+
  |                                                       |
  |     d u        du/dx                                  |
  |    ------  =  --------                                |
  |     d v        dv/dx                                  |
  |                                                       |
  |    differentiate the FIRST one normally,              |
  |    differentiate the SECOND one normally,             |
  |    then DIVIDE.                                       |
  |                                                       |
  +-------------------------------------------------------+
```

### Worked example 15.1
Differentiate x^3 with respect to x^2.

```
  u = x^3     ->  du/dx = 3x^2
  v = x^2     ->  dv/dx = 2x

   du     3x^2      3x
  ---- = ------  = ----
   dv      2x        2
```

### Worked example 15.2
Differentiate sin^2 x with respect to cos^2 x.

```
  u = sin^2 x   ->  du/dx = 2 sin x cos x
  v = cos^2 x   ->  dv/dx = 2 cos x ( - sin x )  =  - 2 sin x cos x

   du      2 sin x cos x
  ---- = -----------------  =  - 1
   dv     -2 sin x cos x
```

### Worked example 15.3
Differentiate arctan( 2x / (1 - x^2) ) with respect to arcsin( 2x / (1 + x^2) ).

```
  Both of these SIMPLIFY (see Topic 16). Do the simplification first:

     u = arctan( 2x/(1 - x^2) )  =  2 arctan x
     v = arcsin( 2x/(1 + x^2) )  =  2 arctan x

  du/dx  =  2 / (1 + x^2)
  dv/dx  =  2 / (1 + x^2)

   du
  ---- =  1
   dv
```

---

# TOPIC 16 — SUBSTITUTION for ugly inverse trigonometric expressions

**How to spot it:** you see arcsin, arccos or arctan wrapped around something
awkward — a fraction with x^2 in it, or a square root of a fraction.

**What NOT to do:** differentiate directly. You will fill a page and get it wrong.

**What to do:** substitute so that the ugly inside becomes a clean trig identity.

## Which substitution to choose

```
  +--------------------------------------+---------------------------+
  |  IF YOU SEE ...                      |  SUBSTITUTE               |
  +--------------------------------------+---------------------------+
  |  1 + x^2  , or 2x/(1 - x^2)          |  x = tan(theta)           |
  |  sqrt(1 - x^2) , or 3x - 4x^3        |  x = sin(theta)           |
  |  4x^3 - 3x , or sqrt((1-x)/(1+x))    |  x = cos(theta)           |
  |  a^2 - x^2                           |  x = a sin(theta)         |
  |  a^2 + x^2                           |  x = a tan(theta)         |
  |  x^2 - a^2                           |  x = a sec(theta)         |
  +--------------------------------------+---------------------------+
```

## The identities that make it work

```
                 2 tan(t)                          1 - tan^2(t)
   tan(2t)  =  ------------        cos(2t)  =  ------------------
                1 - tan^2(t)                      1 + tan^2(t)

                 2 tan(t)
   sin(2t)  =  ------------        sin(3t)  =  3 sin t - 4 sin^3 t
                1 + tan^2(t)

   cos(3t)  =  4 cos^3 t - 3 cos t
```

## The five classics — learn these RESULTS by heart

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   arctan (  2x / (1 - x^2)  )    =   2 arctan x                      |
  |   arcsin (  2x / (1 + x^2)  )    =   2 arctan x                      |
  |   arccos ( (1 - x^2)/(1 + x^2) ) =   2 arctan x                      |
  |                                                                      |
  |        ALL THREE have the SAME derivative:   2 / (1 + x^2)           |
  |                                                                      |
  |   arcsin ( 3x - 4x^3 )           =   3 arcsin x                      |
  |                    derivative     =   3 / sqrt(1 - x^2)              |
  |                                                                      |
  |   arccos ( 4x^3 - 3x )           =   3 arccos x                      |
  |                    derivative     =  -3 / sqrt(1 - x^2)              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

### Worked example 16.1 — the full working the examiner wants
y = arctan( 2x / (1 - x^2) ). Find dy/dx.

```
  Put  x = tan(theta) ,  so  theta = arctan x .

                  (   2 tan(theta)   )
  y  =  arctan    ( ---------------- )
                  ( 1 - tan^2(theta) )

     =  arctan ( tan( 2 theta ) )            <- the double angle identity

     =  2 theta

     =  2 arctan x


  Now differentiate this SHORT version:

                      1                  2
  dy/dx  =  2  x  ---------   =   -------------
                   1 + x^2         1 + x^2
```

### Worked example 16.2
y = arcsin( 2x / (1 + x^2) ). Find dy/dx.

```
  Put x = tan(theta).

                  (   2 tan(theta)   )
  y  =  arcsin    ( ---------------- )   =  arcsin( sin 2theta )  =  2 theta
                  ( 1 + tan^2(theta) )

     =  2 arctan x

  dy/dx  =  2 / (1 + x^2)
```

### Worked example 16.3
y = arcsin( 3x - 4x^3 ). Find dy/dx.

```
  Put x = sin(theta) ,  so theta = arcsin x .

  3x - 4x^3  =  3 sin theta - 4 sin^3 theta  =  sin( 3 theta )

  y  =  arcsin( sin 3theta )  =  3 theta  =  3 arcsin x

                       1                  3
  dy/dx  =  3  x  --------------  =  --------------
                  sqrt(1 - x^2)      sqrt(1 - x^2)
```

### Worked example 16.4
y = arctan( sqrt( (1 - x) / (1 + x) ) ). Find dy/dx.

```
  Put  x = cos( 2 theta ) ,  so  theta = (1/2) arccos x .

  Use   1 - cos 2theta = 2 sin^2 theta
        1 + cos 2theta = 2 cos^2 theta

        ( 1 - x )       2 sin^2 theta
  sqrt  ( ----- )  = sqrt ( ------------- )  =  tan(theta)
        ( 1 + x )       2 cos^2 theta

  y  =  arctan( tan theta )  =  theta  =  (1/2) arccos x

              1   (       -1        )            -1
  dy/dx  =  --- x ( -------------   )   =   ----------------
              2   ( sqrt(1 - x^2)   )        2 sqrt(1 - x^2)
```

### Worked example 16.5
y = arctan( (a - x) / (1 + a x) ). Find dy/dx.

```
  Use the ADDITION formula for arctan instead of a substitution:

     arctan A - arctan B  =  arctan (  (A - B) / (1 + AB)  )

  So   y  =  arctan a  -  arctan x .

  arctan a is a CONSTANT (there is no x in it), so its derivative is 0.

                       -1
  dy/dx  =  0  -  ----------   =   - 1 / (1 + x^2)
                   1 + x^2
```

### Worked example 16.6
y = arctan( ( sqrt(1 + x^2) - 1 ) / x ). Find dy/dx.

```
  Put x = tan(theta).

  sqrt(1 + tan^2 theta)  =  sec theta

     sec theta - 1        (1/cos t) - 1        1 - cos t
   ----------------  =  ----------------  =  ------------  =  tan( t/2 )
        tan theta        (sin t / cos t)         sin t

  y  =  arctan( tan(theta/2) )  =  theta/2  =  (1/2) arctan x

              1        1                1
  dy/dx  =  ---  x  -------   =   -------------
              2     1 + x^2        2 (1 + x^2)
```

---

# TOPIC 17 — SECOND and HIGHER order derivatives

Differentiate once, you get **y1 = dy/dx**.
Differentiate y1 again, you get **y2 = d2y/dx2**. And so on.

```
  +--------------------------------------------------------+
  |                                                        |
  |          dy              d2y      d ( dy )             |
  |   y1  =  ----      y2 = -----  = --- ( ---- )          |
  |          dx              dx^2     dx ( dx )            |
  |                                                        |
  |   Also written  f''(x) , y'' , D^2 y                   |
  |                                                        |
  +--------------------------------------------------------+
```

### Worked example 17.1
y = x^5. Find y1, y2, y3.

```
  y1  =  5 x^4
  y2  =  20 x^3
  y3  =  60 x^2
```

### Worked example 17.2
y = sin(ax). Find d2y/dx2.

```
  y1  =  a cos(ax)
  y2  =  a . ( - a sin(ax) )   =   - a^2 sin(ax)   =   - a^2 y
```

Notice: y2 + a^2 y = 0. This kind of "relation" is the 7-mark question.

### Worked example 17.3
y = e^x . sin x. Find y2.

```
  y1  =  e^x sin x  +  e^x cos x    =   e^x ( sin x + cos x )

  y2  =  e^x ( sin x + cos x )  +  e^x ( cos x - sin x )        [product rule again]

      =  e^x ( sin x + cos x + cos x - sin x )

      =  2 e^x cos x
```

## Second derivative of a PARAMETRIC function — the biggest trap in the chapter

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    d2y        d  (  dy  )        d  (  dy  )       1             |
  |   -----  =   ---- ( ---- )  =   ---- ( ---- )  x  ------         |
  |    dx^2       dx  (  dx  )       dt  (  dx  )      dx/dt         |
  |                                                                  |
  +------------------------------------------------------------------+
```

> **TRAP:** d2y/dx2 is **NOT** (d2y/dt2) / (d2x/dt2). That is completely wrong and
> it is the mistake almost every student makes. You must differentiate dy/dx with
> respect to **t** and then divide by dx/dt.

### Worked example 17.4
x = a cos t, y = a sin t. Find d2y/dx2.

```
  dx/dt = - a sin t          dy/dt = a cos t

  dy/dx = ( a cos t ) / ( - a sin t )  =  - cot t

   d
  ---- ( - cot t )  =  cosec^2 t
   dt

   d2y            1                        1
  -----  =  cosec^2 t  x  --------  =  cosec^2 t  x  ----------
   dx^2                    dx/dt                     - a sin t

                       cosec^3 t
              =    -  -----------
                          a
```

## Second derivative of an IMPLICIT function

```
  STEP 1   Differentiate once, get dy/dx in terms of x and y.
  STEP 2   Differentiate AGAIN using the quotient rule.
  STEP 3   Wherever a dy/dx appears in the new expression, REPLACE it by
           the answer from step 1.
  STEP 4   Simplify, usually using the ORIGINAL equation.
```

### Worked example 17.5
x^2 + y^2 = a^2. Find d2y/dx2.

```
  STEP 1    2x + 2y y1 = 0     ->    y1 = - x / y

  STEP 2    Quotient rule on  ( - x / y ) :

                  y . (-1)  -  ( - x ) . y1          - y  +  x y1
            y2 = ----------------------------  =   ---------------
                            y^2                          y^2

  STEP 3    Put  y1 = - x/y :

                 - y  +  x ( - x / y )         - y  -  x^2 / y
            y2 = ----------------------  =   ------------------
                          y^2                       y^2

                   - ( y^2 + x^2 )
               =  -----------------
                         y^3

  STEP 4    But x^2 + y^2 = a^2 from the original equation. So


                   - a^2
            y2 =  --------
                    y^3
```

---

# TOPIC 18 — PROVING A RELATION in y, dy/dx and d2y/dx2 (the 7-mark question)

The question always looks like: *"If y = something, prove that
(some expression in y2, y1 and y) = 0."*

## The universal recipe

```
  +-------------------------------------------------------------------+
  |  STEP 1   Find y1 = dy/dx.                                        |
  |  STEP 2   LOOK at what you got. If it still contains the whole    |
  |           original y, write it as a neat relation between y1      |
  |           and y first (often after squaring to kill a square root)|
  |  STEP 3   Differentiate that relation ONCE more.                  |
  |  STEP 4   Cancel the common factor (usually y1 or 2y1).           |
  |  STEP 5   Rearrange to match exactly what you were asked to prove |
  |           and write "PROVED".                                     |
  +-------------------------------------------------------------------+
```

### Worked example 18.1
If y = a e^(mx) + b e^(-mx), prove that y2 = m^2 y.

```
  y1  =  a m e^(mx)  -  b m e^(-mx)

  y2  =  a m^2 e^(mx)  +  b m^2 e^(-mx)

      =  m^2 [ a e^(mx)  +  b e^(-mx) ]

      =  m^2 y                                          PROVED
```

### Worked example 18.2
If y = a cos(nx) + b sin(nx), prove that y2 + n^2 y = 0.

```
  y1  =  - a n sin(nx)  +  b n cos(nx)

  y2  =  - a n^2 cos(nx)  -  b n^2 sin(nx)

      =  - n^2 [ a cos(nx) + b sin(nx) ]

      =  - n^2 y

  So  y2 + n^2 y = 0                                    PROVED
```

### Worked example 18.3 — the squaring trick
If y = e^( a . arcsin x ), prove (1 - x^2) y2 - x y1 - a^2 y = 0.

```
  STEP 1   Chain rule:

                                       a                a y
           y1  =  e^(a arcsin x)  x  -----------  =  -------------
                                     sqrt(1-x^2)     sqrt(1 - x^2)

  STEP 2   Clear the root, then SQUARE both sides to remove it completely:

           sqrt(1 - x^2) . y1  =  a y

           ( 1 - x^2 ) y1^2  =  a^2 y^2

  STEP 3   Differentiate both sides w.r.t. x.
           Left needs product rule AND chain rule:

           ( 1 - x^2 ) . 2 y1 y2   +   y1^2 . ( - 2x )   =   a^2 . 2 y y1

  STEP 4   Every term has a factor 2 y1. Divide it out:

           ( 1 - x^2 ) y2  -  x y1  =  a^2 y

  STEP 5   ( 1 - x^2 ) y2  -  x y1  -  a^2 y  =  0       PROVED
```

### Worked example 18.4
If y = ( x + sqrt(1 + x^2) )^m, prove (1 + x^2) y2 + x y1 - m^2 y = 0.

```
  STEP 1
                                     (          x          )
   y1 = m ( x + sqrt(1+x^2) )^(m-1)  ( 1 + ------------- )
                                     (      sqrt(1+x^2)   )

                                     ( sqrt(1+x^2) + x )
      = m ( x + sqrt(1+x^2) )^(m-1)  ( --------------- )
                                     (   sqrt(1+x^2)   )

        m ( x + sqrt(1+x^2) )^m           m y
      = ------------------------   =   ------------
             sqrt(1 + x^2)             sqrt(1+x^2)

  STEP 2   sqrt(1 + x^2) . y1  =  m y

           Square:   ( 1 + x^2 ) y1^2  =  m^2 y^2

  STEP 3   Differentiate:

           ( 1 + x^2 ) 2 y1 y2  +  y1^2 ( 2x )  =  m^2 . 2 y y1

  STEP 4   Divide by 2 y1:

           ( 1 + x^2 ) y2  +  x y1  =  m^2 y

  STEP 5   ( 1 + x^2 ) y2  +  x y1  -  m^2 y  =  0        PROVED
```

> **TRAP:** in step 4 you divide by 2y1. Technically you should note y1 is not
> identically zero. Writing one line — "dividing throughout by 2y1" — is enough
> for full marks. Do not silently drop the factor.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Run through this. It takes two minutes and it routinely saves five marks.

```
  +-----------------------------------------------------------------------+
  |                                                                       |
  |  [ ]  Did I write  dy/dx =  (or f'(x) = ) at the start of every        |
  |       answer? Bare expressions lose a mark.                           |
  |                                                                       |
  |  [ ]  CHAIN RULE: did I multiply by the derivative of the INSIDE       |
  |       function every single time? Check every sin( ), e^( ), log( ),   |
  |       and ( )^n where the inside is not just plain x.                  |
  |                                                                       |
  |  [ ]  PRODUCT RULE: two terms in my answer, not one? If I only have    |
  |       one term I probably multiplied the derivatives. That is wrong.   |
  |                                                                       |
  |  [ ]  QUOTIENT RULE: is the MINUS in the middle, and is the            |
  |       bottom-times-top-derivative term FIRST?                          |
  |                                                                       |
  |  [ ]  Did I square the denominator in the quotient rule?               |
  |                                                                       |
  |  [ ]  SIGNS: cos, cot, cosec, arccos, arccot, arccosec all give a      |
  |       MINUS. But cosh gives a PLUS. Did I get every sign right?        |
  |                                                                       |
  |  [ ]  FIRST PRINCIPLES: did I actually write the limit symbol          |
  |       "lim h->0" on every line until the very last step? Missing       |
  |       limit signs cost marks even when the algebra is perfect.         |
  |                                                                       |
  |  [ ]  FIRST PRINCIPLES: did I cancel h BEFORE substituting h = 0?      |
  |                                                                       |
  |  [ ]  IMPLICIT: did I attach dy/dx to every term that contained y?     |
  |                                                                       |
  |  [ ]  PARAMETRIC second derivative: did I divide by dx/dt at the end,  |
  |       instead of dividing d2y/dt2 by d2x/dt2?                          |
  |                                                                       |
  |  [ ]  LOGARITHMIC: did I put y back in at the end, written out in      |
  |       full? An answer left as "y times [ ... ]" is incomplete.         |
  |                                                                       |
  |  [ ]  LOGARITHMIC on a SUM: did I split it into two pieces first?      |
  |                                                                       |
  |  [ ]  INVERSE TRIG with an ugly inside: did I try the SUBSTITUTION     |
  |       before brute force?                                             |
  |                                                                       |
  |  [ ]  PROVE-A-RELATION: does my final line read exactly like the       |
  |       line in the question paper? If not, rearrange until it does,     |
  |       then write PROVED.                                              |
  |                                                                       |
  |  [ ]  Did I answer exactly 5 questions in Section B and exactly 5 in   |
  |       Section C? Extra ones waste time and earn nothing.              |
  |                                                                       |
  +-----------------------------------------------------------------------+
```
