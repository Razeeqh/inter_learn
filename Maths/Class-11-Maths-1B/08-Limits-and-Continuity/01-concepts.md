# Limits and Continuity — Concepts, Explained From Zero

Read this with a pen. Copy every worked example onto paper as you go.
Do not read it like a story — calculus is learnt by the hand, not the eye.

---

# TOPIC 1 — WHAT A LIMIT ACTUALLY MEANS

## The everyday picture

You are walking towards a door. Someone asks:

> "Where will you be when you reach the door?"

You do not have to touch the door to answer. From ten steps away you can already
say "I am heading to the door". The **limit** is that answer: *where the function
is heading*, not where it actually lands.

## The precise idea, in plain words

```
       lim   f(x)  =  L
      x -> a
```

is read as:

> "As x gets closer and closer to a, f(x) gets closer and closer to L."

Two things you must burn into your head:

```
  +---------------------------------------------------------------+
  |                                                               |
  |   1.  x  NEVER  equals a.  It only sneaks up on a.            |
  |                                                               |
  |   2.  f(a) is IRRELEVANT to the limit.                        |
  |       f(a) may not even exist.  The limit can still exist.    |
  |                                                               |
  +---------------------------------------------------------------+
```

## See it with numbers

Take `f(x) = (x^2 - 4) / (x - 2)`.

At exactly x = 2 this is `0/0` — meaningless. The function has a **hole** there.
But watch what happens nearby:

```
      x     |  1.9   1.99   1.999  | 2 |  2.001   2.01   2.1
   ---------+----------------------+---+---------------------
      f(x)  |  3.9   3.99   3.999  | ? |  4.001   4.01   4.1
                                     ^
                             hole - f(2) does not exist
```

From both sides f(x) is clearly marching to **4**. So

```
       lim   (x^2 - 4)/(x - 2)  =  4        even though f(2) does not exist.
      x -> 2
```

## The picture

```
     y
     ^
   5 +                        /
     |                      /
   4 +- - - - - - - - - - -o        <-- OPEN CIRCLE = the point is MISSING
     |                   / |
   3 +                 /   |
     |               /     |
   2 +             /       |
     |           /         |
   1 +         /           |
     |       /             |
     +-----+---+---+---+---+---+---+----> x
           0   1       2   |   3
                           |
              the graph is the line y = x + 2
              with ONE point punched out at x = 2
```

The line is `y = x + 2` because `(x^2 - 4)/(x - 2) = (x-2)(x+2)/(x-2) = x + 2`
**for every x except 2**. The hole is at height 2 + 2 = 4. That is the limit.

> **TRAP:** Students write "the limit does not exist because f(2) is 0/0".
> Completely wrong. `0/0` is a signal to work harder, not a signal to give up.

---

# TOPIC 2 — LEFT HAND LIMIT AND RIGHT HAND LIMIT

## Two roads into the same town

x can approach a from two directions:

```
        from BELOW  (smaller values)      from ABOVE  (larger values)
        1.9, 1.99, 1.999  ---->    2   <----  2.001, 2.01, 2.1

            LEFT HAND LIMIT              RIGHT HAND LIMIT
                 LHL                            RHL
```

## Notation and the h-substitution

```
  +===============================================================+
  |                                                               |
  |   LHL  =    lim    f(x)   =   lim   f(a - h)                  |
  |            x -> a-             h -> 0                         |
  |                                                               |
  |   RHL  =    lim    f(x)   =   lim   f(a + h)                  |
  |            x -> a+             h -> 0                         |
  |                                                               |
  |            where  h > 0  and  h is small                      |
  |                                                               |
  +===============================================================+
```

The `a - h` / `a + h` trick is how you actually compute these in a piecewise
question: replacing x by `a - h` forces you into the "x < a" branch of the
definition, and `a + h` forces you into the "x > a" branch.

## THE EXISTENCE CONDITION

```
  +===============================================================+
  |                                                               |
  |         lim f(x)  EXISTS   if and only if                     |
  |        x->a                                                   |
  |                                                               |
  |               LHL  =  RHL   =  a finite number L              |
  |                                                               |
  |         and then    lim f(x)  =  L                            |
  |                    x->a                                       |
  |                                                               |
  |         If  LHL  is not equal to  RHL,                        |
  |         the limit DOES NOT EXIST.  Write that sentence.       |
  |                                                               |
  +===============================================================+
```

## WORKED EXAMPLE 2.1 — a limit that EXISTS

```
             { x + 1     if x < 2
     f(x) =  {
             { 3x - 3    if x >= 2

     Does  lim f(x)  exist?
          x->2
```

**Solution**

```
  LHL  =  lim  f(2 - h)                x < 2 branch, so use x + 1
          h->0
       =  lim  (2 - h) + 1
          h->0
       =  lim  (3 - h)   =   3

  RHL  =  lim  f(2 + h)                x > 2 branch, so use 3x - 3
          h->0
       =  lim  3(2 + h) - 3
          h->0
       =  lim  (3 + 3h)  =   3

  LHL = RHL = 3    ->   the limit EXISTS and equals 3.
```

```
     y
     ^
   4 +
     |                       /
   3 +- - - - - - - - - - -.*          both pieces arrive at height 3
     |                   ,/ |
   2 +                 ,/   |
     |               ,/     |
   1 +             ,/       |
     |                      |
     +------+------+--------+------> x
            0      1        2

     ,, = the line y = x + 1  (used to the left of 2)
     // = the line y = 3x - 3 (used from 2 onwards)
     They MEET at (2, 3).  No break.  Limit exists.
```

## WORKED EXAMPLE 2.2 — a limit that DOES NOT EXIST

```
     f(x) = |x| / x            Does  lim f(x)  exist?
                                    x->0
```

**Solution**

Remember `|x| = x` when `x > 0` and `|x| = -x` when `x < 0`.

```
  LHL  =   lim   |x|/x    =   lim   (-x)/x   =   lim  (-1)  =  -1
          x->0-                x->0-             x->0-

  RHL  =   lim   |x|/x    =   lim   ( x)/x   =   lim  ( 1)  =   1
          x->0+                x->0+             x->0+

  LHL = -1  ,  RHL = 1  ,  and  -1  is not  1.

  Therefore  lim |x|/x  DOES NOT EXIST.
             x->0
```

```
     y
     ^
   1 +                 o----------------      RHL = +1
     |
     +--------+--------+--------+-------> x
     |        |        0
  -1 +--------o                             LHL = -1
     |
              a clean JUMP of height 2 at x = 0
              the two arms never meet -> no limit
```

## WORKED EXAMPLE 2.3 — the greatest integer function

`[x]` means "the greatest integer that is less than or equal to x".

```
   [1.7] = 1     [2.0] = 2     [2.9] = 2     [-1.2] = -2   (careful!)
```

```
     Find  lim [x]  and  lim [x].
          x->2          x->2.5
```

**Solution**

```
  At x = 2:

     just to the LEFT of 2  (1.9 , 1.99 , 1.999)   ->  [x] = 1
     just to the RIGHT of 2 (2.001 , 2.01 , 2.1)   ->  [x] = 2

     LHL = 1  ,  RHL = 2  ->  NOT equal  ->  lim [x] DOES NOT EXIST.
                                            x->2

  At x = 2.5:

     everywhere near 2.5 (from 2.4 to 2.6)  ->  [x] = 2

     LHL = RHL = 2   ->   lim [x] = 2.
                          x->2.5
```

```
     y
     ^
   3 +                          o------
     |
   2 +               o----------*
     |
   1 +      o--------*
     |
   0 +------*
     |
     +------+--------+----------+------> x
            1        2          3

     *  = filled dot (value IS taken there)
     o  = open dot   (value is NOT taken there)

     The staircase JUMPS at every integer -> the limit fails at
     EVERY integer, and exists everywhere else.
```

> **TRAP:** `[-1.2]` is `-2`, not `-1`. "Greatest integer **not exceeding** x."
> On the negative side you go DOWN, not towards zero.

---

# TOPIC 3 — THE ALGEBRA OF LIMITS

If `lim f(x) = L` and `lim g(x) = M` (both as x -> a, both existing and finite):

```
  +===============================================================+
  |                                                               |
  |   SUM          lim [ f(x) + g(x) ]   =   L + M                |
  |                                                               |
  |   DIFFERENCE   lim [ f(x) - g(x) ]   =   L - M                |
  |                                                               |
  |   CONSTANT     lim [ k . f(x) ]      =   k L                  |
  |   MULTIPLE                                                    |
  |                                                               |
  |   PRODUCT      lim [ f(x) . g(x) ]   =   L . M                |
  |                                                               |
  |                     f(x)         L                            |
  |   QUOTIENT     lim  ----   =    ---     provided  M is not 0  |
  |                     g(x)         M                            |
  |                                                               |
  |   POWER        lim [ f(x) ]^n        =   L^n                  |
  |                                                               |
  |   ROOT         lim  n-th root f(x)   =   n-th root of L       |
  |                                          (when it is defined) |
  |                                                               |
  |   MODULUS      lim  | f(x) |         =   | L |                |
  |                                                               |
  +===============================================================+
```

In one sentence: **the limit sign passes straight through +, -, x, /, powers
and roots** — as long as nothing blows up and no denominator hits 0.

## WORKED EXAMPLE 3.1

```
   Given  lim f(x) = 5  and  lim g(x) = -2  , find  lim [ 3 f(x) - g(x)^2 ] .
         x->1              x->1                    x->1
```

**Solution**

```
   lim [ 3 f(x) - g(x)^2 ]  =  3 . lim f(x)  -  ( lim g(x) )^2
   x->1

                            =  3(5)  -  (-2)^2

                            =  15 - 4   =   11
```

> **TRAP:** The quotient rule needs `M` NOT zero. If the bottom limit is 0 you
> are NOT allowed to use it — that is exactly the 0/0 case and you must do
> algebra first.

---

# TOPIC 4 — INDETERMINATE FORMS

## What "indeterminate" means

An indeterminate form is an expression whose value **cannot be decided from the
form alone**. It is not an error and it is not infinity. It is the algebra saying:

> "I need more information. Simplify me first."

## THE SEVEN FORMS

```
  +---------------------------------------------------------------+
  |   THE FIVE IN YOUR SYLLABUS          THE TWO EXTRA ONES       |
  |                                                               |
  |        0                                        0             |
  |       ---                                      0              |
  |        0                                                      |
  |                                                inf^0          |
  |       inf                                                     |
  |       ---                                                     |
  |       inf                                                     |
  |                                                               |
  |       inf - inf                                               |
  |                                                               |
  |       0 x inf                                                 |
  |                                                               |
  |       1^inf                                                   |
  +---------------------------------------------------------------+
```

## What is NOT indeterminate — learn these too

```
   5 / 0        ->  infinity (not indeterminate; the function blows up)
   0 / 5        ->  0          (a perfectly ordinary answer)
   inf + inf    ->  infinity
   inf x inf    ->  infinity
   5 / inf      ->  0
   0^inf        ->  0
```

## How to RECOGNISE each one, and the standard cure

| Form | It looks like | Standard cure |
|------|---------------|---------------|
| `0/0` | polynomial fraction, both top and bottom vanish at a | factorise & cancel, rationalise, or `x^n - a^n` formula |
| `inf/inf` | rational function as `x -> infinity` | divide top and bottom by the highest power of x |
| `inf - inf` | `sqrt(...) - sqrt(...)` or `sqrt(...) - x` as `x -> infinity` | rationalise (multiply by the conjugate) |
| `0 x inf` | `x . (1/x)` shapes, `x . sin(1/x)` | rewrite as a fraction so it becomes `0/0` or `inf/inf` |
| `1^inf` | `(something -> 1)^(something -> infinity)` | the exponential rule (Topic 13) |

## WORKED EXAMPLE 4.1 — name the form before you touch it

```
   (a)  lim  (x^2 - 9)/(x - 3)         put x = 3:  0/0          INDETERMINATE
       x->3

   (b)  lim  (2x^2 + 3)/(5x^2 - x)     x -> inf:  inf/inf       INDETERMINATE
       x->inf

   (c)  lim  ( sqrt(x^2 + x) - x )     x -> inf:  inf - inf     INDETERMINATE
       x->inf

   (d)  lim  (1 + 1/x)^x               x -> inf:  1^inf         INDETERMINATE
       x->inf

   (e)  lim  (x^2 + 1)/(x - 3)         put x = 3:  10/0         NOT indeterminate
       x->3                                                     (it is infinite)

   (f)  lim  (x - 3)/(x^2 + 1)         put x = 3:  0/10 = 0     NOT indeterminate
       x->3                                                     (the answer is 0)
```

> **TRAP:** Naming the form is worth writing down. Examiners like the line
> "This is of the form 0/0". It shows you know why you are about to factorise.

---

# TOPIC 5 — METHOD 1: DIRECT SUBSTITUTION

**Always do this first.** It costs five seconds and it solves most Section A
questions outright.

If the function is a polynomial, or a rational function whose denominator is
not zero at a, or `sin/cos/e^x/log` at a point where they are defined, then

```
       lim  f(x)  =  f(a)          <-- just plug a in
      x->a
```

## WORKED EXAMPLE 5.1

```
   lim  (x^2 + 3x - 1)   =   (2)^2 + 3(2) - 1   =   4 + 6 - 1   =   9
  x->2
```

## WORKED EXAMPLE 5.2

```
        x^2 + 1              9 + 1        10
   lim  -------      =      -------   =   --   =   2
  x->3   x + 2               3 + 2         5
```

## WORKED EXAMPLE 5.3

```
   lim  ( sin x + cos x )  =  sin(pi/2) + cos(pi/2)  =  1 + 0  =  1
  x->pi/2
```

## WORKED EXAMPLE 5.4

```
   lim  ( e^x + log x )   =   e^1 + log 1   =   e + 0   =   e
  x->1
```

> **TRAP:** After substituting, LOOK at the answer. `0/0` means keep working.
> A clean number means STOP and write it. Students often factorise a limit that
> did not need factorising and lose time.

---

# TOPIC 6 — METHOD 2: FACTORISE AND CANCEL

## Why it always works for 0/0 with polynomials

If both top and bottom become 0 at `x = a`, then by the **Factor Theorem**
`(x - a)` divides both of them. That common factor is the whole problem.
Cancel it — you are allowed to, because `x` is near a but **never equal to a**,
so `x - a` is never actually zero.

```
  +---------------------------------------------------------------+
  |   0/0 with polynomials  =  "there is a hidden (x - a) in       |
  |   both the top and the bottom. Find it. Cancel it."           |
  +---------------------------------------------------------------+
```

## WORKED EXAMPLE 6.1

```
        x^2 - 4
   lim  -------           put x = 2:  (4-4)/(2-2) = 0/0    INDETERMINATE
  x->2   x - 2

        (x - 2)(x + 2)
   =  lim ------------            cancel (x - 2), valid since x is not 2
     x->2    (x - 2)

   =  lim (x + 2)   =   2 + 2   =   4
     x->2
```

## WORKED EXAMPLE 6.2

```
        x^2 - 5x + 6
   lim  ------------          put x = 3:  (9-15+6)/(9-9) = 0/0
  x->3    x^2 - 9

        (x - 2)(x - 3)              factorise BOTH:
   =  lim ------------              top:    x^2-5x+6 = (x-2)(x-3)
     x->3 (x - 3)(x + 3)            bottom: x^2-9    = (x-3)(x+3)

        x - 2            3 - 2        1
   =  lim -----   =     -------   =   -
     x->3 x + 3          3 + 3        6
```

## WORKED EXAMPLE 6.3 — a cubic on top

```
        x^3 - 8
   lim  --------          put x = 2:  0/0
  x->2   x - 2

   Use  a^3 - b^3 = (a - b)(a^2 + ab + b^2)  with a = x , b = 2:

        (x - 2)(x^2 + 2x + 4)
   =  lim ---------------------
     x->2        (x - 2)

   =  lim (x^2 + 2x + 4)   =   4 + 4 + 4   =   12
     x->2
```

**Check with the `x^n - a^n` formula (Topic 8):** `n a^(n-1) = 3 . 2^2 = 12`. Same. Good.

## WORKED EXAMPLE 6.4 — a fraction inside a fraction

```
         1/x  -  1/3
   lim   -----------          put x = 3:  0/0
  x->3      x - 3

   Combine the top over a common denominator 3x:

         (3 - x) / (3x)                3 - x
   =  lim --------------     =    lim  ----------
     x->3     x - 3              x->3  3x (x - 3)

                     -(x - 3)                   -1              -1
              =  lim ----------    =     lim   -----    =      ----
                x->3 3x (x - 3)         x->3    3x              9
```

> **TRAP:** `3 - x` is `-(x - 3)`. Forgetting that minus sign flips the answer's
> sign and costs the whole mark. Write the `-(x - 3)` step explicitly.

## The factorisations you must have ready

```
   a^2 - b^2   =  (a - b)(a + b)
   a^3 - b^3   =  (a - b)(a^2 + ab + b^2)
   a^3 + b^3   =  (a + b)(a^2 - ab + b^2)
   x^2 + (p+q)x + pq  =  (x + p)(x + q)          <-- splitting the middle term
```

---

# TOPIC 7 — METHOD 3: RATIONALISATION (THE CONJUGATE TRICK)

## When to use it

The moment you see a **square root** and you got `0/0` or `inf - inf`.

## The idea

`sqrt` signs block cancellation. Multiply top and bottom by the **conjugate**
(the same expression with the middle sign flipped) and use

```
   (A - B)(A + B)  =  A^2 - B^2
```

The squaring destroys the square roots, and the hidden common factor appears.

```
  +---------------------------------------------------------------+
  |                                                               |
  |   see  sqrt(P) - sqrt(Q)   ->   multiply by  sqrt(P) + sqrt(Q)|
  |   see  sqrt(P) + sqrt(Q)   ->   multiply by  sqrt(P) - sqrt(Q)|
  |   see  sqrt(P) - c         ->   multiply by  sqrt(P) + c      |
  |                                                               |
  |   ALWAYS multiply the TOP and the BOTTOM by the same thing.   |
  |                                                               |
  +---------------------------------------------------------------+
```

## WORKED EXAMPLE 7.1

```
        sqrt(1 + x) - 1
   lim  ---------------          put x = 0:  (1 - 1)/0 = 0/0
  x->0         x

   Multiply top and bottom by  sqrt(1 + x) + 1 :

        ( sqrt(1+x) - 1 )( sqrt(1+x) + 1 )
   =  lim -----------------------------------
     x->0      x ( sqrt(1+x) + 1 )

             (1 + x) - 1                        x
   =  lim  -------------------    =    lim  -------------------
     x->0  x ( sqrt(1+x) + 1 )        x->0  x ( sqrt(1+x) + 1 )

                 1                       1             1
   =  lim  ---------------      =     -------      =   -
     x->0  sqrt(1+x) + 1               1 + 1           2
```

**Sanity check with numbers:** at x = 0.0001, `(sqrt(1.0001) - 1)/0.0001`
= `(1.00004999 - 1)/0.0001` = about `0.49999`. Yes, `1/2`. Correct.

## WORKED EXAMPLE 7.2 — two roots

```
        sqrt(1 + x) - sqrt(1 - x)
   lim  --------------------------           put x = 0:  0/0
  x->0             x

   Conjugate is  sqrt(1+x) + sqrt(1-x) :

             (1 + x) - (1 - x)
   =  lim  ------------------------------
     x->0  x ( sqrt(1+x) + sqrt(1-x) )

                  2x                              2
   =  lim  ------------------------  =  lim  -------------------
     x->0  x ( sqrt(1+x) + sqrt(1-x) )  x->0 sqrt(1+x)+sqrt(1-x)

           2         2
   =    -------  =  ---  =  1
         1 + 1       2
```

## WORKED EXAMPLE 7.3 — root on the bottom

```
             x
   lim  -----------------          put x = 0:  0/0
  x->0  sqrt(1+x) - sqrt(1-x)

   This is exactly the reciprocal of Example 7.2, so the answer is  1/1 = 1.

   The long way: multiply top and bottom by  sqrt(1+x) + sqrt(1-x)  :

        x ( sqrt(1+x) + sqrt(1-x) )         x ( sqrt(1+x) + sqrt(1-x) )
   =  lim ---------------------------  =  lim ---------------------------
     x->0     (1 + x) - (1 - x)          x->0            2x

         sqrt(1+x) + sqrt(1-x)          1 + 1
   =  lim ----------------------  =    -------   =   1
     x->0          2                      2
```

## WORKED EXAMPLE 7.4 — root minus a number, with a factor to cancel

```
        sqrt(x + 2) - 2
   lim  ---------------           put x = 2:  (2 - 2)/(2 - 2) = 0/0
  x->2       x - 2

             (x + 2) - 4                      x - 2
   =  lim  ----------------------   =  lim  ----------------------
     x->2  (x - 2)( sqrt(x+2) + 2 )    x->2 (x - 2)( sqrt(x+2) + 2 )

                1                   1          1
   =  lim  -------------    =     -----   =    -
     x->2  sqrt(x+2) + 2          2 + 2        4
```

> **TRAP:** After rationalising, do NOT expand the bottom bracket.
> Leave it as `( sqrt(...) + ... )` — you need it whole so you can substitute
> into it at the end.

---

# TOPIC 8 — METHOD 4: THE `x^n - a^n` STANDARD RESULT

```
  +===============================================================+
  |                                                               |
  |        lim    x^n  -  a^n                                     |
  |       x->a   -------------    =    n . a^(n-1)                |
  |                 x  -  a                                       |
  |                                                               |
  |        valid for EVERY real n:  whole, negative, fractional   |
  |                                                               |
  +===============================================================+
```

This is a shortcut for a whole family of `0/0` limits — including ones with
fractional powers, where factorising by hand would be horrible.

## WORKED EXAMPLE 8.1

```
        x^5 - 32                 x^5 - 2^5
   lim  ---------       =   lim  ----------    =   5 . 2^4   =   80
  x->2   x - 2             x->2    x - 2
```

## WORKED EXAMPLE 8.2 — the two-formula version

When BOTH top and bottom are of that shape, divide by `(x - a)` twice:

```
        x^5 - 32
   lim  ---------           put x = 2:  0/0
  x->2  x^3 - 8

   Divide top and bottom by (x - 2):

          (x^5 - 2^5)/(x - 2)          5 . 2^4        80        20
   =  lim ---------------------  =    ----------  =  ----   =   --
     x->2 (x^3 - 2^3)/(x - 2)          3 . 2^2        12         3
```

```
  +---------------------------------------------------------------+
  |   THE GENERAL SHORTCUT                                        |
  |                                                               |
  |        lim   x^n - a^n          n                             |
  |       x->a  ------------   =   ---  a^(n - m)                 |
  |              x^m - a^m          m                             |
  |                                                               |
  |   Check on 8.2:  n=5, m=3, a=2  ->  (5/3) . 2^2 = 20/3   YES  |
  +---------------------------------------------------------------+
```

## WORKED EXAMPLE 8.3 — fractional powers

```
        x^(3/2) - a^(3/2)          3                 3
   lim  -----------------   =     --- a^(1/2)   =   --- sqrt(a)
  x->a       x - a                 2                 2
```

## WORKED EXAMPLE 8.4 — negative power

```
        x^(-1) - a^(-1)                                    -1
   lim  ---------------   =   (-1) a^(-2)    =            ----
  x->a      x - a                                          a^2
```

**Check against Example 6.4:** there `a = 3` and we got `-1/9 = -1/3^2`. Matches.

## WORKED EXAMPLE 8.5 — the top and bottom have different centres of power

```
        x^(2/3) - a^(2/3)
   lim  -----------------          n = 2/3 , m = 1/2
  x->a  x^(1/2) - a^(1/2)

        (2/3)                        4
   =   -------  a^(2/3 - 1/2)   =   --- a^(1/6)
        (1/2)                        3
```

(Because `2/3 - 1/2 = 4/6 - 3/6 = 1/6`.)

> **TRAP:** The formula needs the bottom to be **exactly** `x - a`. If the
> bottom is `x - 2` then the top must be `x^n - 2^n`, with the SAME number.
> `(x^5 - 32)/(x - 3)` is not a 0/0 form at all — just substitute.

---

# TOPIC 9 — METHOD 5: LIMITS AS x -> INFINITY (RATIONAL FUNCTIONS)

## The one rule

```
  +===============================================================+
  |                                                               |
  |   DIVIDE EVERY TERM, TOP AND BOTTOM, BY THE HIGHEST POWER     |
  |   OF x THAT APPEARS ANYWHERE IN THE FRACTION.                 |
  |                                                               |
  |   Then use:      lim   1/x   =  0                             |
  |                 x->inf                                        |
  |                                                               |
  |                  lim   1/x^2 =  0 ,   1/x^3 = 0 , ...         |
  |                 x->inf                                        |
  |                                                               |
  +===============================================================+
```

Why it works: as x becomes enormous, `4x` is nothing compared to `3x^2`. The
highest power dominates everything. Dividing makes that visible.

## WORKED EXAMPLE 9.1

```
        3x^2 + 4x + 5
   lim  --------------           x -> inf gives  inf/inf
  x->inf 2x^2 - 7x + 1

   Divide every term by x^2 :

        3 + 4/x + 5/x^2            3 + 0 + 0          3
   =  lim ----------------   =    -----------   =    ---
    x->inf 2 - 7/x + 1/x^2         2 - 0 + 0          2
```

## THE INSTANT ANSWER (use for MCQs)

Let the degree of the top be `p` and the degree of the bottom be `q`:

```
  +---------------------------------------------------------------+
  |                                                               |
  |    p  <  q     ->    limit  =  0        (bottom wins)         |
  |                                                               |
  |    p  =  q     ->    limit  =  (leading coeff of top)         |
  |                                --------------------------     |
  |                                (leading coeff of bottom)      |
  |                                                               |
  |    p  >  q     ->    limit  =  infinity  (top wins)           |
  |                                                               |
  +---------------------------------------------------------------+
```

## WORKED EXAMPLE 9.2

```
        2x + 3
   lim  --------      degree 1 over degree 2, so  p < q  ->  0
  x->inf x^2 + 1

   The long way:  divide by x^2  ->  (2/x + 3/x^2)/(1 + 1/x^2)  ->  0/1  =  0
```

## WORKED EXAMPLE 9.3 — brackets, so find the degree first

```
        (3x - 1)(4x + 2)
   lim  -----------------
  x->inf  (x + 8)(x - 1)

   Top expands to 12x^2 + ... , bottom to x^2 + ...    p = q = 2

                     12
   Limit  =         ----   =   12
                      1
```

## WORKED EXAMPLE 9.4 — a sneaky one

```
        x^3 + 2x
   lim  ---------      p = 3 , q = 2 , so  p > q  ->  the limit is  INFINITY
  x->inf 5x^2 + 1      (i.e. it does not exist as a finite number)
```

> **TRAP:** Divide by the highest power that appears in the **denominator**
> as your default. If after that the top still has an `x` left over, the answer
> is infinity — that is the honest answer, write it.

---

# TOPIC 10 — METHOD 6: SQUARE ROOTS AS x -> INFINITY (`inf - inf`)

Two tools are needed together: **rationalise**, then **divide by x**.

Also remember, for large positive x:

```
   sqrt(x^2)  =  |x|  =  x           when  x -> +infinity
   sqrt(x^2)  =  |x|  = -x           when  x -> -infinity      <-- the killer trap
```

## WORKED EXAMPLE 10.1

```
   lim  ( sqrt(x^2 + x)  -  x )            form: inf - inf
  x->inf

   Multiply and divide by the conjugate  sqrt(x^2 + x) + x :

        (x^2 + x) - x^2                     x
   =  lim ------------------   =   lim  ------------------
    x->inf sqrt(x^2+x) + x       x->inf sqrt(x^2 + x) + x

   Divide top and bottom by x  (and inside the root, by x^2):

                 1                          1              1
   =  lim  -------------------    =     ----------   =     -
    x->inf sqrt(1 + 1/x) + 1             1 + 1              2
```

**Sanity check:** at x = 1000, `sqrt(1000000 + 1000) = sqrt(1001000)` is about
`1000.4999`, minus 1000 gives `0.4999`. Yes, `1/2`. Correct.

## WORKED EXAMPLE 10.2 — the general pattern

```
   lim ( sqrt(x^2 + a x + b)  -  x )        =       a / 2
  x->inf
```

Proof by the same conjugate step: the top becomes `a x + b`, the bottom becomes
`sqrt(x^2 + ax + b) + x`; divide both by x and you get `a / (1 + 1) = a/2`.

```
   So   lim ( sqrt(x^2 + 5x + 2) - x )  =  5/2
       x->inf
```

## WORKED EXAMPLE 10.3

```
   lim  ( sqrt(x + 1)  -  sqrt(x) )         form: inf - inf
  x->inf

             (x + 1) - x                            1
   =  lim  ---------------------   =   lim  ---------------------   =   0
    x->inf sqrt(x+1) + sqrt(x)       x->inf sqrt(x+1) + sqrt(x)

   because the bottom grows without bound while the top stays at 1.
```

> **TRAP (the minus-infinity one):** if `x -> -infinity`, then `sqrt(x^2) = -x`,
> NOT `x`. Substitute `x = -t` with `t -> +infinity` and the trap disappears.

---

# TOPIC 11 — THE STANDARD TRIGONOMETRIC LIMITS

## THE RADIAN WARNING — read this before anything else

```
  +===============================================================+
  |                                                               |
  |   EVERY standard trigonometric limit below is TRUE ONLY IF    |
  |   THE ANGLE IS MEASURED IN RADIANS.                           |
  |                                                               |
  |   In degrees,  lim (sin x)/x  =  pi/180 ,  NOT 1.             |
  |               x->0                                            |
  |                                                               |
  |   In this chapter, x is always in radians unless a question   |
  |   shouts otherwise. If a question says "x in degrees",        |
  |   convert first:   x degrees  =  (pi x / 180) radians.        |
  |                                                               |
  +===============================================================+
```

## THE LIST

```
  +===============================================================+
  |                                                               |
  |        lim   sin x                     lim   tan x            |
  |       x->0  -------  =  1             x->0  -------  =  1     |
  |                x                               x              |
  |                                                               |
  |                                                               |
  |        lim   1 - cos x     1           lim   sin^-1 x         |
  |       x->0  ----------  =  -          x->0  ---------- =  1   |
  |                 x^2        2                    x             |
  |                                                               |
  |                                                               |
  |        lim   1 - cos x                 lim   tan^-1 x         |
  |       x->0  ----------  =  0          x->0  ---------- =  1   |
  |                  x                              x             |
  |                                                               |
  |        lim   sin x                     lim   cos x  =  1      |
  |      x->inf  ------  =  0             x->0                    |
  |                 x                                             |
  |                                                               |
  |   (sin^-1 = arcsin ,  tan^-1 = arctan ,  the INVERSE          |
  |    functions -- NOT 1/sin and 1/tan.)                         |
  |                                                               |
  +===============================================================+
```

## THE SCALING RULE — the thing that makes all of them usable

```
  +---------------------------------------------------------------+
  |                                                               |
  |     lim  sin(ax)         lim  tan(ax)                         |
  |    x->0  --------  = a  , x->0 --------  = a                  |
  |              x                     x                          |
  |                                                               |
  |     "whatever is inside the sin must also be underneath."     |
  |                                                               |
  |     TECHNIQUE:   sin(ax)     sin(ax)                          |
  |                  ------  =   ------- . a                      |
  |                     x           ax                            |
  |                              \_______/                        |
  |                                  -> 1                         |
  +---------------------------------------------------------------+
```

## WORKED EXAMPLE 11.1

```
        sin 7x               sin 7x
   lim  ------   =   lim   ( ------ ) . 7   =   1 . 7   =   7
  x->0    x         x->0       7x
```

## WORKED EXAMPLE 11.2 — ratio of two sines

```
        sin ax            (sin ax)/(ax)  .  ax             1 . a         a
   lim  ------   =   lim  ---------------------    =      -------   =   -
  x->0  sin bx      x->0  (sin bx)/(bx)  .  bx             1 . b         b
```

So `lim (sin 5x)/(sin 3x) = 5/3` as x -> 0.

## WORKED EXAMPLE 11.3 — the `1 - cos` family

```
        1 - cos 2x
   lim  ----------           put x = 0:  0/0
  x->0      x^2

   Use  1 - cos 2A = 2 sin^2 A   with  A = x :

        2 sin^2 x                sin x   2
   =  lim ---------   =   2 . lim ( ----- )    =   2 . 1^2   =   2
     x->0    x^2             x->0     x
```

**Cross-check with the standard form:** `(1 - cos ax)/x^2 -> a^2 / 2`.
Here `a = 2`, giving `4/2 = 2`. Same answer. Good.

```
  +---------------------------------------------------------------+
  |     lim   1 - cos(ax)         a^2                             |
  |    x->0  -------------   =   -----                            |
  |               x^2              2                              |
  +---------------------------------------------------------------+
```

## WORKED EXAMPLE 11.4

```
        1 - cos 2mx                 2 sin^2(mx)              2 m^2
   lim  -----------     =    lim   -------------    =       -------
  x->0  sin^2(nx)           x->0    sin^2(nx)                 n^2

   Working:  divide top and bottom by x^2 :

        2 . (sin(mx)/x)^2        2 . m^2
   =  lim ------------------  =  -------
     x->0  (sin(nx)/x)^2           n^2
```

## WORKED EXAMPLE 11.5 — sums of sines

```
        sin(a + bx) - sin(a - bx)
   lim  --------------------------
  x->0             x

   Use  sin C - sin D = 2 cos((C+D)/2) sin((C-D)/2) :

        C = a + bx , D = a - bx   ->   (C+D)/2 = a  ,  (C-D)/2 = bx

        2 cos(a) sin(bx)                     sin(bx)
   =  lim ----------------  =  2 cos(a) . lim -------   =  2 b cos a
     x->0        x                       x->0    x
```

## WORKED EXAMPLE 11.6 — a harder classic

```
        tan x - sin x
   lim  --------------           put x = 0:  0/0
  x->0       x^3

                sin x
        sin x . ----- ... let us do it properly:
                cos x

        tan x - sin x     =   sin x ( 1/cos x  -  1 )

                          =   sin x . ( 1 - cos x ) / cos x

        sin x   1 - cos x       1              1
   =  lim ----- . --------- . ------  =  1 .  ---  .  1   =   1/2
     x->0   x        x^2       cos x           2
```

## WORKED EXAMPLE 11.7 — inverse trig

```
        sin^-1(4x)               sin^-1(4x)                     4
   lim  ----------   =   lim  ( ------------ ) . 4   =   1 . 4 = 4
  x->0       x          x->0        4x
```

> **TRAP:** `lim (sin x)/x` as `x -> 2` is NOT 1. It is just `(sin 2)/2` by
> substitution. The standard limit only applies **as x -> 0**. Check the arrow.

> **TRAP:** `(1 - cos x)/x` is `0`, but `(1 - cos x)/x^2` is `1/2`.
> Count the powers of x underneath before you answer.

---

# TOPIC 12 — EXPONENTIAL AND LOGARITHMIC LIMITS

## THE LIST

```
  +===============================================================+
  |                                                               |
  |        lim   a^x - 1                    lim   e^x - 1         |
  |       x->0  ---------  =  log(a)       x->0  --------- = 1    |
  |                 x           e                     x           |
  |                                                               |
  |        (a > 0.  "log" here always means the NATURAL log,      |
  |         base e.  log(e) = 1, which is why the second one      |
  |         is just a special case of the first.)                 |
  |                                                               |
  |                                                               |
  |        lim   log(1 + x)                 lim   (1 + x)^(1/x)   |
  |       x->0  ------------  =  1         x->0                   |
  |                   x                            =   e          |
  |                                                               |
  |                                                               |
  |        lim   ( 1 + 1/x )^x   =   e                            |
  |      x->inf                                                   |
  |                                                               |
  |                                                               |
  |   USEFUL EXTRAS                                               |
  |                                                               |
  |        lim   e^x    =  infinity        lim   e^x   =   0      |
  |      x->inf                          x->-inf                  |
  |                                                               |
  |        lim   e^(-x) =  0               lim   log x = -infinity|
  |      x->inf                           x->0+                   |
  |                                                               |
  +===============================================================+
```

## THE SCALING RULE AGAIN

```
   lim  (a^(kx) - 1)/x    =   k log a
  x->0

   lim  (e^(kx) - 1)/x    =   k
  x->0

   lim  log(1 + kx)/x     =   k
  x->0

   lim  (1 + k/x)^x       =   e^k
  x->inf
```

## WORKED EXAMPLE 12.1

```
        e^(3x) - 1              e^(3x) - 1
   lim  -----------  =   lim  ( ---------- ) . 3   =   1 . 3   =   3
  x->0       x          x->0        3x
```

## WORKED EXAMPLE 12.2 — the difference of two exponentials

```
        a^x - b^x               (a^x - 1) - (b^x - 1)
   lim  ---------    =    lim   ---------------------
  x->0      x            x->0             x

        a^x - 1           b^x - 1
   =  lim -------  -  lim -------   =   log a  -  log b   =   log (a/b)
     x->0    x       x->0    x
```

```
  +---------------------------------------------------------------+
  |     lim   a^x - b^x                                           |
  |    x->0  -----------   =   log (a / b)          [base e]      |
  |               x                                               |
  +---------------------------------------------------------------+
```

**The trick to remember:** subtract 1 and add 1. `a^x - b^x = (a^x - 1) - (b^x - 1)`.

## WORKED EXAMPLE 12.3 — mixing an exponential with a surd

```
             e^x - 1
   lim  -------------------           put x = 0:  0/0
  x->0  sqrt(1 + x) - 1

   Divide top and bottom by x :

        (e^x - 1)/x                       1
   =  lim ---------------------  =      -----   =   2
     x->0 ( sqrt(1+x) - 1 )/x            1/2

   (using Example 7.1 for the bottom).
```

## WORKED EXAMPLE 12.4

```
        3^x - 1                (3^x - 1)/x                log 3
   lim  ---------------  =  lim -------------------  =   -------  =  2 log 3
  x->0  sqrt(1+x) - 1      x->0 (sqrt(1+x) - 1)/x         1/2
```

## WORKED EXAMPLE 12.5 — shifted exponential

```
        e^(3 + x) - e^3            e^3 ( e^x - 1 )
   lim  ---------------   =   lim  ---------------   =   e^3 . 1   =   e^3
  x->0        x              x->0         x
```

## WORKED EXAMPLE 12.6 — trig inside the exponential

```
        e^(sin x) - 1             e^(sin x) - 1     sin x
   lim  --------------  =   lim ( ------------- ) ( ----- )  = 1 . 1 = 1
  x->0        x            x->0        sin x           x
```

(As `x -> 0`, `sin x -> 0` too, so the first bracket is the standard limit
with `sin x` playing the role of the variable.)

## WORKED EXAMPLE 12.7 — mixed

```
        e^x - sin x - 1          e^x - 1        sin x
   lim  ----------------  =  lim ------- - lim -----  =  1 - 1  =  0
  x->0         x            x->0    x      x->0   x
```

> **TRAP:** `log` in this chapter means **natural log (base e)**, written `log`
> or `ln`. If a question really wants base 10 it will say `log_10`. Also
> `log(1 + x)/x -> 1`, but `log(x)/x` as `x -> 0` is NOT 1 — `log x` goes to
> minus infinity there. The `1 +` matters.

---

# TOPIC 13 — THE `1^infinity` FORM

## Why `1^infinity` is not simply 1

`1^100 = 1` and `1^1000000 = 1`, so surely `1^infinity = 1`? No. The base is not
exactly 1 — it is something *creeping towards* 1. It is a race between a base
sliding down to 1 and a power racing up to infinity. Either can win.

`(1 + 1/x)^x` is exactly that race, and the answer is `e = 2.71828...`, not 1.

## THE EXPONENTIAL RULE

```
  +===============================================================+
  |                                                               |
  |   If  lim f(x) = 1   and   lim g(x) = infinity,               |
  |                                                               |
  |   then                                                        |
  |                          lim  g(x) . [ f(x) - 1 ]             |
  |        lim f(x)^g(x)  =  e                                    |
  |                                                               |
  |   In words:  ANSWER  =  e  raised to                          |
  |              (the power) x (the base minus 1)                 |
  |                                                               |
  +===============================================================+
```

## HOW TO USE IT — three steps

```
   STEP 1   Confirm the form is 1^infinity  (substitute and check).
   STEP 2   Compute  L  =  lim  g(x) . ( f(x) - 1 )
   STEP 3   Write the answer as  e^L .
```

## WORKED EXAMPLE 13.1

```
   lim  ( 1 + 1/x )^x            base -> 1 , power -> inf ,  so 1^inf
  x->inf

   L  =  lim  x . ( 1 + 1/x  -  1 )   =   lim  x . (1/x)   =   1
        x->inf                           x->inf

   Answer  =  e^1  =  e
```

## WORKED EXAMPLE 13.2

```
   lim  ( 1 + 3/x )^x
  x->inf

   L  =  lim  x . (3/x)   =   3          ->    Answer  =  e^3
        x->inf
```

## WORKED EXAMPLE 13.3

```
             x + 2   x
   lim   (  -------  )
  x->inf     x - 1

   Base  =  (x+2)/(x-1)  ->  1  as x -> inf.   Power -> inf.   So 1^inf.

              x + 2            x + 2 - x + 1            3
   base - 1 = ------  -  1  =  --------------  =      -----
              x - 1                x - 1               x - 1

                 3x                         Answer  =  e^3
   L  =  lim  -------   =   3
        x->inf x - 1
```

## WORKED EXAMPLE 13.4 — the `(1 + x)^(1/x)` shape

```
   lim  ( 1 + 5x )^(1 / 3x)         base -> 1 , power -> inf , so 1^inf
  x->0

              1                    5x           5                    5/3
   L  =  lim ---- . ( 5x )  =  lim ----  =     ---       Answer  =  e
        x->0  3x               x->0 3x          3
```

## WORKED EXAMPLE 13.5 — a base built from cos

```
   lim  ( cos x )^(1/x)            cos x -> 1 , 1/x -> inf ,  so 1^inf
  x->0+

                1                       cos x - 1
   L  =  lim   --- ( cos x - 1 )  =  lim ----------
        x->0    x                    x->0     x

         and  (1 - cos x)/x -> 0 , so this is  -0 = 0.

   Answer  =  e^0  =  1
```

> **TRAP:** Only use this rule when the base really goes to 1. If the base goes
> to 2, then `2^infinity = infinity` — an ordinary answer, no rule needed.

---

# TOPIC 14 — CONTINUITY AT A POINT

## The everyday picture

A function is **continuous** at `x = a` if you can draw its graph through that
point **without lifting your pen**. No holes. No jumps. No vertical explosions.

## THE THREE CONDITIONS — memorise them as a numbered list

```
  +===============================================================+
  |                                                               |
  |   f is CONTINUOUS at x = a  when all THREE hold:              |
  |                                                               |
  |   (1)  f(a) EXISTS                                            |
  |        the function has an actual value at a                  |
  |                                                               |
  |   (2)  lim f(x) EXISTS                                        |
  |        x->a                i.e.  LHL  =  RHL                  |
  |                                                               |
  |   (3)  lim f(x)  =  f(a)                                      |
  |        x->a                the journey ends where the         |
  |                            function is actually sitting       |
  |                                                               |
  |   ALL THREE IN ONE LINE:     LHL  =  RHL  =  f(a)             |
  |                                                               |
  |   If any ONE fails, f is DISCONTINUOUS at a.                  |
  |                                                               |
  +===============================================================+
```

## HOW TO WRITE THE ANSWER (this exact layout earns the marks)

```
   Step 1   f(a)  =  .........                       (from the "x = a" line)
   Step 2   LHL   =  lim f(a - h)  =  .........      (from the "x < a" branch)
                     h->0
   Step 3   RHL   =  lim f(a + h)  =  .........      (from the "x > a" branch)
                     h->0
   Step 4   Compare.  Conclude in a full sentence.
```

Even if your algebra collapses, those four labelled lines carry partial marks.

## WORKED EXAMPLE 14.1 — continuous

```
              { x^2 - 1
              { -------      if x is not 1
     f(x) =   {  x - 1
              {
              {   2          if x = 1

     Is f continuous at x = 1 ?
```

**Solution**

```
   f(1)  =  2                                              (given)

   lim f(x)  =  lim (x^2 - 1)/(x - 1)
   x->1        x->1

             =  lim (x-1)(x+1)/(x-1)   =   lim (x + 1)   =   2
               x->1                       x->1

   (the same value from both sides, since after cancelling it is
    just the polynomial x + 1)

   So  lim f(x)  =  2  =  f(1).

   Therefore f IS CONTINUOUS at x = 1.
```

## WORKED EXAMPLE 14.2 — NOT continuous

```
              { sin 2x
              { ------      if x is not 0
     f(x) =   {   x
              {
              {   1         if x = 0

     Is f continuous at x = 0 ?
```

**Solution**

```
   f(0)  =  1                                              (given)

   lim f(x)  =  lim (sin 2x)/x   =   2                     (Topic 11)
   x->0        x->0

   The limit is 2 but f(0) = 1.   2  is not  1.

   Therefore f is NOT continuous at x = 0.

   (It is a REMOVABLE discontinuity - redefining f(0) = 2 would fix it.)
```

## WORKED EXAMPLE 14.3 — a piecewise one with genuine LHL / RHL work

```
              { 2x + 1     if x < 1
     f(x) =   { 3          if x = 1
              { 5x - 2     if x > 1

     Test continuity at x = 1.
```

**Solution**

```
   f(1)  =  3

   LHL  =  lim f(1 - h)  =  lim [ 2(1 - h) + 1 ]  =  lim (3 - 2h)  =  3
           h->0             h->0                     h->0

   RHL  =  lim f(1 + h)  =  lim [ 5(1 + h) - 2 ]  =  lim (3 + 5h)  =  3
           h->0             h->0                     h->0

   LHL = RHL = f(1) = 3.

   Therefore f IS CONTINUOUS at x = 1.
```

## WORKED EXAMPLE 14.4 — the classic AP textbook one

```
              { cos ax  -  cos bx
              { ------------------      if x is not 0
     f(x) =   {         x^2
              {
              {   (1/2)( b^2 - a^2 )    if x = 0

     Show that f is continuous at x = 0.
```

**Solution**

```
   f(0)  =  (1/2)(b^2 - a^2)                               (given)

   For the limit, use   cos C - cos D  =  2 sin( (C+D)/2 ) sin( (D-C)/2 )

   with  C = ax , D = bx :

        (C + D)/2  =  (a + b)x / 2        (D - C)/2  =  (b - a)x / 2

        cos ax - cos bx   =   2 sin( (a+b)x/2 ) sin( (b-a)x/2 )

   So

        lim  2 sin((a+b)x/2) . sin((b-a)x/2)
        x->0 -----------------------------------
                          x^2

              sin((a+b)x/2)     (a+b)      sin((b-a)x/2)     (b-a)
   =  2 . lim -------------- .  -----  .   -------------- .  -----
         x->0   (a+b)x/2          2          (b-a)x/2          2

                (a + b)     (b - a)          (b^2 - a^2)
   =  2 . 1 . ---------- . ---------  =     -------------
                   2           2                  2

   This equals f(0).   Therefore f IS CONTINUOUS at x = 0.
```

**Sanity check with numbers:** put `a = 0, b = 2`. Then f becomes
`(1 - cos 2x)/x^2`, whose limit we found in Example 11.3 to be 2.
And `(b^2 - a^2)/2 = 4/2 = 2`. Matches.

> **TRAP:** Condition (1) is a real condition. If f is not even defined at a
> (say there is a `1/(x-2)` and `a = 2`), stop there — it is discontinuous,
> no matter how beautiful the limit is.

---

# TOPIC 15 — FIND k SO THAT f IS CONTINUOUS

This is **the** 4-mark board question from this chapter. It appears constantly.

## The recipe

```
  +===============================================================+
  |                                                               |
  |   1.  Write down f(a)   -- it will contain the unknown k.     |
  |                                                               |
  |   2.  Compute the limit of the OTHER branch(es).              |
  |                                                               |
  |   3.  SET them equal:      limit  =  f(a)                     |
  |                                                               |
  |   4.  Solve for k.                                            |
  |                                                               |
  |   If there are TWO branches plus a value, you may need        |
  |   LHL = RHL = f(a), which can give TWO equations.             |
  |                                                               |
  +===============================================================+
```

## WORKED EXAMPLE 15.1

```
              { x^2 - 9
              { --------     if x is not 3
     f(x) =   {  x - 3
              {
              {    k         if x = 3

     Find k so that f is continuous at x = 3.
```

**Solution**

```
   lim f(x)  =  lim (x-3)(x+3)/(x-3)  =  lim (x + 3)  =  6
   x->3        x->3                     x->3

   For continuity:   lim f(x)  =  f(3)     ->     6  =  k

   Therefore  k  =  6.
```

## WORKED EXAMPLE 15.2 — trigonometric

```
              { sin 5x
              { ------      if x is not 0
     f(x) =   {   3x
              {
              {   k         if x = 0                 Find k.
```

**Solution**

```
   lim  (sin 5x)/(3x)   =   lim ( sin5x / 5x ) . (5/3)   =   1 . 5/3  =  5/3
   x->0                     x->0

   So   k  =  5/3.
```

## WORKED EXAMPLE 15.3 — with a surd

```
              { sqrt(1 + x)  -  1
              { ------------------     if x is not 0
     f(x) =   {         x
              {
              {        k               if x = 0            Find k.
```

**Solution**

```
   From Example 7.1,  the limit is  1/2.

   So   k  =  1/2.
```

## WORKED EXAMPLE 15.4 — a quadratic in k (two answers!)

```
              { k^2 x  -  k      if x >= 1
     f(x) =   {
              {      2           if x < 1

     Find the values of k for which f is continuous at x = 1.
```

**Solution**

```
   f(1)  =  k^2 (1) - k  =  k^2 - k          (x = 1 uses the "x >= 1" branch)

   LHL  =  lim f(1 - h)  =  lim  2   =   2
           h->0             h->0

   RHL  =  lim f(1 + h)  =  lim [ k^2 (1 + h) - k ]  =  k^2 - k
           h->0             h->0

   For continuity:   LHL = RHL = f(1)

            2  =  k^2 - k

            k^2 - k - 2  =  0

            (k - 2)(k + 1)  =  0

            k  =  2    or    k  =  -1
```

```
   CHECK k = 2 :   k^2 - k = 4 - 2 = 2.  Equals LHL.  Correct.
   CHECK k = -1:   k^2 - k = 1 + 1 = 2.  Equals LHL.  Correct.
```

> **TRAP:** Notice which branch owns the equality sign. Here `x >= 1` includes
> x = 1, so `f(1)` comes from that branch. If it had said `x > 1`, then f(1)
> would come from the other side. Read the inequality signs like a hawk.

## WORKED EXAMPLE 15.5 — two unknowns

```
              { 3x + a      if x <= 1
     f(x) =   {
              { bx + 2      if x > 1

     Find a and b if f is continuous at x = 1 and f(1) = 5.
```

**Solution**

```
   f(1)  =  3(1) + a  =  3 + a        and we are told f(1) = 5

            3 + a = 5    ->    a = 2

   LHL  =  lim [ 3(1 - h) + a ]  =  3 + a  =  5
           h->0

   RHL  =  lim [ b(1 + h) + 2 ]  =  b + 2
           h->0

   Continuity needs RHL = 5:      b + 2 = 5    ->    b = 3

   Therefore  a = 2 , b = 3.
```

---

# TOPIC 16 — TYPES OF DISCONTINUITY

```
                          DISCONTINUITY at x = a
                                  |
              +-------------------+-------------------+
              |                                       |
        REMOVABLE                              NON-REMOVABLE
     (limit EXISTS but                     (limit does NOT exist)
      is not f(a), or                              |
      f(a) is missing)                    +--------+--------+
              |                           |                 |
       fix it by simply              JUMP (finite)      INFINITE
       redefining f(a)             LHL and RHL both   one side runs
       to be the limit             exist but differ   off to infinity
```

## TYPE 1 — REMOVABLE DISCONTINUITY

The limit exists. The value is either missing or wrong. Patch the single point
and the function becomes continuous — hence "removable".

```
  EXAMPLE:  f(x) = (x^2 - 4)/(x - 2)  ,  x is not 2  ;  f(2) = 1


     y
     ^
   5 +                        /
     |                      /
   4 +- - - - - - - - - - -o        <-- the LIMIT is here (4), but empty
     |                   / |
   3 +                 /   |
     |               /     |
   2 +             /       |
     |           /         |
   1 +- - - - - - - - - - -*        <-- f(2) = 1 sits here, in the WRONG place
     |                     |
     +-----+---+---+---+---+---+---> x
           0   1       2

     LHL = RHL = 4   (so the limit EXISTS)
     f(2) = 1        (so condition 3 FAILS)

     REMOVABLE: redefine f(2) = 4 and the graph closes up perfectly.
```

## TYPE 2 — JUMP DISCONTINUITY (non-removable, "first kind")

Both one-sided limits exist and are finite, but they are different numbers.
There is a cliff. No single value of `f(a)` can ever fix it.

```
  EXAMPLE:  f(x) = { x + 1   if x < 2
                   { x + 4   if x >= 2


     y
     ^
   7 +                        /
     |                      /
   6 +                    *           <-- f(2) = 6 = RHL   (filled dot)
     |                    :
   5 +                    :
     |                    :           THE JUMP, height 3
   4 +           /        :
     |         /          :
   3 +       o - - - - - -+           <-- LHL = 3  (open dot: not taken)
     |     /
   2 +   /
     | /
     +----+----+----+----+----+---> x
          0    1    2    3

     LHL = 2 + 1 = 3
     RHL = 2 + 4 = 6
     3 is not 6   ->  the LIMIT DOES NOT EXIST  ->  NON-REMOVABLE.

     The size of the jump is  | RHL - LHL |  =  3.
```

Other everyday jump examples: `|x|/x` at 0, and `[x]` at every integer.

## TYPE 3 — INFINITE DISCONTINUITY (non-removable, "second kind")

At least one one-sided limit is `+infinity` or `-infinity`. The graph has a
vertical asymptote.

```
  EXAMPLE:  f(x) = 1/x   at   x = 0


                 y
                 ^
                 |     |
                 |     |
                 |      \
                 |       \_
                 |         \____
     ------------+--------------+------> x
            ____/|              0
           /     |
         _/      |
        |        |
        |        |
                 |

     LHL  =  lim  1/x  =  -infinity
            x->0-

     RHL  =  lim  1/x  =  +infinity
            x->0+

     Also f(0) does not even exist.  NON-REMOVABLE, INFINITE type.
```

Another one: `f(x) = 1/(x - 2)^2` at x = 2 has both sides `+infinity` — the
limit is still not a finite number, so it is still an infinite discontinuity.

## A COMPARISON TABLE

| | Limit exists? | f(a) exists? | Fixable? | Name |
|---|---|---|---|---|
| hole, no value | yes | no | yes | removable |
| hole, wrong value | yes | yes (wrong) | yes | removable |
| cliff | no (LHL != RHL) | maybe | no | jump / non-removable |
| explosion | no (infinite) | usually no | no | infinite / non-removable |

## WORKED EXAMPLE 16.1 — classify it

```
             { x^2 - 1
             { -------     if x is not 1
    f(x) =   {  x - 1
             {   5         if x = 1
```

```
   Limit  =  lim (x + 1)  =  2       (exists)
   f(1)   =  5                       (exists, but different)

   ->  DISCONTINUOUS at x = 1, of the REMOVABLE kind.
   ->  Redefining f(1) = 2 would make it continuous.
```

## WORKED EXAMPLE 16.2 — classify it

```
    f(x)  =  |x - 3| / (x - 3)      at   x = 3
```

```
   For x > 3 :  |x - 3| = x - 3   ->   f(x) =  1   ->   RHL =  1
   For x < 3 :  |x - 3| = -(x-3)  ->   f(x) = -1   ->   LHL = -1

   LHL is not RHL  ->  NON-REMOVABLE JUMP discontinuity at x = 3.
   f(3) is not defined at all (0/0).
```

> **TRAP:** "Removable" does NOT mean "not a discontinuity". If the question asks
> "is f continuous at a?", a removable discontinuity still gets the answer **NO**.

---

# TOPIC 17 — CONTINUITY OF STANDARD FUNCTIONS

## The good news list — continuous on their WHOLE domain

```
  +---------------------------------------------------------------+
  |                                                               |
  |   FUNCTION                          CONTINUOUS ON             |
  |   ------------------------------    ------------------------- |
  |   constant   f(x) = c               all real x                |
  |   identity   f(x) = x               all real x                |
  |   polynomial  a0 + a1 x + ...       all real x                |
  |   modulus    f(x) = |x|             all real x  (yes, even 0) |
  |   sin x , cos x                     all real x                |
  |   e^x , a^x                         all real x                |
  |   sinh x , cosh x                   all real x                |
  |                                                               |
  |   rational  p(x)/q(x)               all x where q(x) is not 0 |
  |   tan x , sec x                     all x except odd multiples|
  |                                        of pi/2                |
  |   cot x , cosec x                   all x except multiples    |
  |                                        of pi                  |
  |   log x                             x > 0  only               |
  |   sqrt(x)                           x >= 0  only              |
  |                                                               |
  |   [x]  greatest integer             all x EXCEPT the integers |
  |   1/x                               all x except 0            |
  |                                                               |
  +---------------------------------------------------------------+
```

## Why `|x|` IS continuous at 0 (a favourite 2-mark question)

```
   LHL  =  lim |x|  =  lim (-x)  =  0
          x->0-        x->0-

   RHL  =  lim |x|  =  lim ( x)  =  0
          x->0+        x->0+

   f(0) =  |0|  =  0

   LHL = RHL = f(0) = 0   ->   CONTINUOUS at 0.
```

```
     y
     ^
   3 +  \                    /
     |    \                /
   2 +      \            /
     |        \        /
   1 +          \    /
     |            \/
     +-------------*-------------> x
                   0

     A sharp CORNER is still one unbroken curve.
     Continuous?  YES.   (It is not DIFFERENTIABLE there - that is
     a different question, and it belongs to Chapter 9.)
```

```
  +---------------------------------------------------------------+
  |   DIFFERENTIABLE  =>  CONTINUOUS                              |
  |   CONTINUOUS      does NOT =>  DIFFERENTIABLE                 |
  |                                                               |
  |   |x| at x = 0 is the proof: continuous, but not              |
  |   differentiable (the corner).                                |
  +---------------------------------------------------------------+
```

## ALGEBRA OF CONTINUOUS FUNCTIONS

If `f` and `g` are both continuous at `x = a`, then so are:

```
  +===============================================================+
  |                                                               |
  |     f + g            f - g            k . f                   |
  |                                                               |
  |     f . g            | f |            f^n                     |
  |                                                               |
  |      f                                                        |
  |     ---     is continuous at a  PROVIDED  g(a) is not 0       |
  |      g                                                        |
  |                                                               |
  +===============================================================+
```

That is why every polynomial is continuous: it is built from `x` and constants
using only `+`, `-` and `x`.

## CONTINUITY OF A COMPOSITE FUNCTION

```
  +===============================================================+
  |                                                               |
  |   If  g is continuous at  a                                   |
  |   and f is continuous at  g(a) ,                              |
  |                                                               |
  |   then  ( f o g )(x)  =  f( g(x) )  is continuous at  a.      |
  |                                                               |
  |   "continuous inside + continuous outside = continuous"       |
  |                                                               |
  +===============================================================+
```

### WORKED EXAMPLE 17.1

```
   Show that  h(x) = sin( x^2 + 1 )  is continuous for all real x.

   Let  g(x) = x^2 + 1     -- a polynomial, continuous everywhere.
   Let  f(u) = sin u       -- continuous everywhere.

   Then h = f o g is continuous everywhere by the composite rule.
```

### WORKED EXAMPLE 17.2

```
   Where is  h(x) = log( x - 3 )  continuous?

   Inside:  g(x) = x - 3, continuous everywhere.
   Outside: log u  needs  u > 0.

   So we need  x - 3 > 0 , i.e.  x > 3.

   h is continuous on  (3 , infinity).
```

### WORKED EXAMPLE 17.3

```
   Where is  f(x) = (x^2 + 1)/(x^2 - 5x + 6)  continuous?

   Bottom:  x^2 - 5x + 6 = (x - 2)(x - 3) , zero at x = 2 and x = 3.

   f is continuous for all real x EXCEPT x = 2 and x = 3.
```

## CONTINUITY ON AN INTERVAL

```
  +---------------------------------------------------------------+
  |                                                               |
  |   OPEN INTERVAL (a, b):                                       |
  |      f is continuous at every point strictly inside.          |
  |                                                               |
  |   CLOSED INTERVAL [a, b]:                                     |
  |      f is continuous at every point of (a, b),   AND          |
  |                                                               |
  |         lim  f(x)  =  f(a)      (only from the RIGHT at a)    |
  |        x->a+                                                  |
  |                                                               |
  |         lim  f(x)  =  f(b)      (only from the LEFT at b)     |
  |        x->b-                                                  |
  |                                                               |
  |   At the two END points you only check the side that exists.  |
  |                                                               |
  +---------------------------------------------------------------+
```

### WORKED EXAMPLE 17.4 — the multi-piece interval question

```
              { 4 - x^2       if  x <= 0
              { x - 5         if  0 < x <= 1
     f(x) =   { 4x^2 - 9      if  1 < x < 2
              { 3x + 4        if  x >= 2

     Discuss the continuity of f at the joining points x = 0, 1, 2.
```

**Solution — check each joint separately.**

```
   AT x = 0 :
      f(0)  =  4 - 0^2   =   4                       (from the x <= 0 branch)
      LHL   =  lim (4 - x^2)  =  4
              x->0-
      RHL   =  lim (x - 5)    =  -5
              x->0+
      4  is not  -5   ->   DISCONTINUOUS at x = 0  (jump of size 9)

   AT x = 1 :
      f(1)  =  1 - 5   =   -4                        (from the 0 < x <= 1 branch)
      LHL   =  lim (x - 5)     =  -4
              x->1-
      RHL   =  lim (4x^2 - 9)  =  4 - 9  =  -5
              x->1+
      -4  is not  -5   ->   DISCONTINUOUS at x = 1  (jump of size 1)

   AT x = 2 :
      f(2)  =  3(2) + 4   =   10                     (from the x >= 2 branch)
      LHL   =  lim (4x^2 - 9)  =  16 - 9  =  7
              x->2-
      RHL   =  lim (3x + 4)    =  10
              x->2+
      7  is not  10   ->   DISCONTINUOUS at x = 2  (jump of size 3)

   CONCLUSION: f is discontinuous at x = 0, 1 and 2, and continuous
   everywhere else (each piece is a polynomial).
```

---

# TOPIC 18 — PUTTING IT ALL TOGETHER: THE MASTER ROUTINE

```
   +--------------------------------------------------------------+
   |  A LIMIT QUESTION                                            |
   |                                                              |
   |  1. Substitute x = a.                                        |
   |  2. Got a number?  ->  write it and stop.                    |
   |  3. Got 0/0 ?      ->  factorise / rationalise / x^n-a^n     |
   |  4. Got inf/inf ?  ->  divide by the highest power of x      |
   |  5. Got inf - inf? ->  rationalise, then divide by x         |
   |  6. See sin/tan/cos, e^x, a^x, log ?  ->  standard limits    |
   |  7. Got 1^inf ?    ->  answer = e^( power x (base - 1) )     |
   |  8. Piecewise / modulus / [x] ?  ->  do LHL and RHL          |
   +--------------------------------------------------------------+

   +--------------------------------------------------------------+
   |  A CONTINUITY QUESTION                                       |
   |                                                              |
   |  1. Write f(a) from the branch that OWNS x = a.              |
   |  2. Write LHL using the "x < a" branch.                      |
   |  3. Write RHL using the "x > a" branch.                      |
   |  4. Compare all three, then write a full-sentence conclusion.|
   |  5. If a constant k is involved, SET them equal and solve.   |
   +--------------------------------------------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I try DIRECT SUBSTITUTION first on every limit?

  [ ]  Did I write the words "this is of the form 0/0" (or inf/inf, 1^inf)
       before starting the algebra?

  [ ]  When I cancelled (x - a), did I check it really was a common factor
       of BOTH the numerator and the denominator?

  [ ]  In a rationalisation, did I multiply the TOP and the BOTTOM by the
       conjugate, not just the top?

  [ ]  Did I leave the conjugate bracket UNEXPANDED so I could substitute at
       the end?

  [ ]  In a sin(ax)/x limit, did I put ax underneath and multiply by a
       outside, rather than just writing 1?

  [ ]  Are all my angles in RADIANS?

  [ ]  Did I check whether it was  /x  or  /x^2  under a (1 - cos x)?

  [ ]  In a limit as x -> infinity, did I divide by the HIGHEST power of x?

  [ ]  With a sqrt as x -> -infinity, did I remember sqrt(x^2) = -x?

  [ ]  For a 1^infinity form, did I write  e^( g(x) . (f(x) - 1) )?

  [ ]  For continuity, did I write THREE separate labelled lines:
       f(a)  ,  LHL  ,  RHL ?

  [ ]  Did I look at the inequality signs to see which branch owns x = a?
       (x <= a  versus  x < a  changes the answer.)

  [ ]  Did I finish with a full sentence such as
       "Therefore f is continuous at x = 2" rather than just a tick?

  [ ]  If I got a quadratic in k, did I give BOTH roots?

  [ ]  Did I write "the limit does not exist" in words wherever LHL is not
       RHL, instead of leaving the answer blank?

  [ ]  Did I state the TYPE of discontinuity when the question asked me to
       classify (removable / jump / infinite)?
```

```
   Nothing in this chapter is clever. It is a chapter of habits.
   Build the habit of substituting first and writing LHL/RHL as
   separate lines, and these marks are yours every single year.
```
