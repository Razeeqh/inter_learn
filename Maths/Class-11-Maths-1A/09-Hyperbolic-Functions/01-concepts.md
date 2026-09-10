# Hyperbolic Functions — Concepts From Zero

Read this with a pen in your hand. Every box in this file is something you will
write in the exam. Nothing here needs any maths beyond "what is `e^x`".

**What you need before you start:**
- `e` is just a number, `e = 2.71828...`, like `pi = 3.14159...`
- `e^x` is a normal function. `e^0 = 1`. `e^-x = 1 / e^x`.
- `log` in this chapter always means **natural log** (`log_e`, sometimes written `ln`).
  So `log e^k = k` and `e^(log k) = k`.
- That is genuinely all. If you know that, you can do this whole chapter.

---

# TOPIC 1 — WHERE THESE FUNCTIONS COME FROM

## 1.1 The idea: cut `e^x` into two halves

Take any function `f(x)`. There is a trick that splits it into an **even** part and
an **odd** part.

- **Even** means the graph is a mirror image about the y-axis: `f(-x) = f(x)`.
  (Like `x^2`, or `cos x`.)
- **Odd** means the graph is upside-down on the other side: `f(-x) = -f(x)`.
  (Like `x^3`, or `sin x`.)

The trick:

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                    f(x) + f(-x)         f(x) - f(-x)             |
  |        f(x)  =    ---------------   +   ---------------          |
  |                          2                     2                 |
  |                                                                  |
  |                     EVEN part              ODD part              |
  |                                                                  |
  +------------------------------------------------------------------+
```

Now put `f(x) = e^x`, so that `f(-x) = e^-x`:

```
                 e^x + e^-x                        e^x - e^-x
   EVEN part =  -------------        ODD part =  -------------
                      2                                2
```

**We give these two halves names.**

```
  +==================================================================+
  |                                                                  |
  |                       e^x - e^-x                                 |
  |          sinh x  =  -------------          "shine x"             |
  |                            2                                     |
  |                                                                  |
  |                       e^x + e^-x                                 |
  |          cosh x  =  -------------          "cosh x"              |
  |                            2                                     |
  |                                                                  |
  |          for EVERY real number x                                 |
  |                                                                  |
  +==================================================================+
```

## 1.2 The two facts that come free, immediately

Add the two definitions:

```
                  e^x - e^-x     e^x + e^-x       2 e^x
  sinh x + cosh x = ---------- + ----------  =  --------- = e^x
                        2             2             2
```

Subtract them:

```
                  e^x + e^-x     e^x - e^-x       2 e^-x
  cosh x - sinh x = ---------- - ----------  =  --------- = e^-x
                        2             2             2
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |        cosh x + sinh x  =  e^x                                   |
  |        cosh x - sinh x  =  e^-x                                  |
  |                                                                  |
  |   Two of the most useful lines in the chapter. Memorise both.    |
  |                                                                  |
  +------------------------------------------------------------------+
```

## 1.3 An everyday picture

Hang a chain loosely between two poles. The shape it makes is **not** a parabola —
it is `y = a cosh(x/a)`, called a **catenary**. That is a real hanging chain, a
power line between two pylons, the Gateway Arch in St Louis. `cosh` is literally
the shape of a hanging rope.

## 1.4 WORKED EXAMPLE — evaluate from the definition

**Find `sinh(log 2)` and `cosh(log 2)`.**

```
  Here x = log 2 , so   e^x = e^(log 2) = 2
                        e^-x = 1/2

               e^x - e^-x       2 - 1/2      3/2      3
  sinh(log 2) = ----------  =  ---------  =  ----  =  ---
                    2              2           2       4

               e^x + e^-x       2 + 1/2      5/2      5
  cosh(log 2) = ----------  =  ---------  =  ----  =  ---
                    2              2           2       4

  CHECK with the key identity:
        cosh^2 - sinh^2 = 25/16 - 9/16 = 16/16 = 1     CORRECT
```

Remember this pair `(3/4, 5/4)` — it turns up again and again in this chapter
because the numbers are so clean.

> **TRAP:** `sinh x` is **not** `sin` of anything. Do not reach for `30 deg`,
> `pi/6` or a calculator in degree mode. The input `x` is a plain real number.
> `sinh 1` means "put `x = 1` into `(e^x - e^-x)/2`", and equals `1.1752...`

---

# TOPIC 2 — ALL SIX HYPERBOLIC FUNCTIONS

The other four are built from the first two, in **exactly** the same way as in
ordinary trigonometry.

```
  +==================================================================+
  |                                                                  |
  |               e^x - e^-x                        e^x + e^-x       |
  |   sinh x  =  -------------          cosh x  =  -------------     |
  |                    2                                 2           |
  |                                                                  |
  |               sinh x        e^x - e^-x                           |
  |   tanh x  =  --------  =   -------------                         |
  |               cosh x        e^x + e^-x                           |
  |                                                                  |
  |                 1          cosh x         e^x + e^-x             |
  |   coth x  =  --------  =  --------  =    -------------  , x =/= 0|
  |               tanh x       sinh x         e^x - e^-x             |
  |                                                                  |
  |                 1              2                                 |
  |   sech x  =  --------  =  -------------                          |
  |               cosh x       e^x + e^-x                            |
  |                                                                  |
  |                  1              2                                |
  |  cosech x  =  --------  =  -------------  ,  x =/= 0             |
  |                sinh x       e^x - e^-x                           |
  |                                                                  |
  +==================================================================+
```

## 2.1 Values at `x = 0`

Put `x = 0`, so `e^0 = 1` and `e^-0 = 1`:

```
   sinh 0 = (1 - 1)/2 = 0/2 = 0
   cosh 0 = (1 + 1)/2 = 2/2 = 1
   tanh 0 = 0 / 1 = 0
   sech 0 = 1 / 1 = 1
   coth 0   -> 1/0     NOT DEFINED
  cosech 0  -> 1/0     NOT DEFINED
```

```
  +------------------------------------------------------------------+
  |   sinh 0 = 0     cosh 0 = 1     tanh 0 = 0     sech 0 = 1        |
  |   coth 0 and cosech 0 are NOT DEFINED                            |
  +------------------------------------------------------------------+
```

## 2.2 Odd or even?

Replace `x` by `-x`. Note that `e^-(-x) = e^x`, so the two exponentials simply
**swap places**.

```
                 e^-x - e^x        (e^x - e^-x)
  sinh(-x)  =  -------------  =  - -------------  =  - sinh x      ODD
                     2                   2

                 e^-x + e^x        e^x + e^-x
  cosh(-x)  =  -------------  =  -------------  =  + cosh x        EVEN
                     2                 2
```

Everything else follows from those two:

| Function | `f(-x)` equals | Odd or Even |
|---|---|---|
| `sinh x` | `- sinh x` | **ODD** |
| `cosh x` | `+ cosh x` | **EVEN** |
| `tanh x` = odd/even | `- tanh x` | **ODD** |
| `coth x` = even/odd | `- coth x` | **ODD** |
| `sech x` = 1/even | `+ sech x` | **EVEN** |
| `cosech x` = 1/odd | `- cosech x` | **ODD** |

```
  +------------------------------------------------------------------+
  |   ONLY cosh AND sech ARE EVEN.  The other four are ODD.          |
  |   (Same pattern as ordinary trig: only cos and sec are even.)    |
  +------------------------------------------------------------------+
```

## 2.3 WORKED EXAMPLE — all six at `x = log 3`

```
  e^x = 3 ,  e^-x = 1/3

  sinh x = (3 - 1/3)/2 = (8/3)/2 = 4/3
  cosh x = (3 + 1/3)/2 = (10/3)/2 = 5/3
  tanh x = (4/3)/(5/3) = 4/5
  coth x = 5/4
  sech x = 3/5
  cosech x = 3/4

  CHECK:  cosh^2 - sinh^2 = 25/9 - 16/9 = 9/9 = 1     CORRECT
```

Notice the 3-4-5 triangle numbers appearing. That is not a coincidence — see Topic 5.

> **TRAP:** `cosh x` is never less than `1`. If a question says "`cosh x = 1/2`",
> the correct answer is **"no such real x exists"**, not a number. Similarly
> `tanh x = 2` is impossible, and `sech x = 3` is impossible.

---

# TOPIC 3 — DOMAIN AND RANGE (a straight 2-mark question)

## 3.1 Why `cosh x >= 1`

By the **AM-GM inequality**, for the two positive numbers `e^x` and `e^-x`:

```
   e^x + e^-x
  ------------  >=  sqrt( e^x * e^-x )  =  sqrt(1)  =  1
        2

  i.e.  cosh x  >=  1  , with equality only when e^x = e^-x , i.e. x = 0.
```

That single fact controls half the chapter.

## 3.2 Why `-1 < tanh x < 1`

```
                e^x - e^-x
  tanh x  =  -------------
                e^x + e^-x

  Multiply top and bottom by e^x :

                e^2x - 1              2
  tanh x  =  -----------  =  1  -  ---------
                e^2x + 1            e^2x + 1

  Now e^2x > 0 always, so e^2x + 1 > 1 , so  0 < 2/(e^2x + 1) < 2 .
  Therefore   1 - 2  <  tanh x  <  1 - 0
                -1   <  tanh x  <  1        and NEITHER end is reached.
```

## 3.3 THE TABLE — learn it exactly

```
  +-------------+------------------------+---------------------------------+
  |  FUNCTION   |  DOMAIN (allowed x)    |  RANGE (values it can take)     |
  +-------------+------------------------+---------------------------------+
  |  sinh x     |  R   (all reals)       |  R   (all reals)                |
  |  cosh x     |  R   (all reals)       |  [ 1 , infinity )               |
  |  tanh x     |  R   (all reals)       |  ( -1 , 1 )        OPEN         |
  |  coth x     |  R - {0}               |  ( -inf,-1 ) U ( 1, inf )       |
  |  sech x     |  R   (all reals)       |  ( 0 , 1 ]                      |
  |  cosech x   |  R - {0}               |  R - {0}                        |
  +-------------+------------------------+---------------------------------+

     [ ] = endpoint INCLUDED       ( ) = endpoint NOT included
     R - {0} means "every real number except zero"
```

**How to remember the range column without memorising:**

| Function | Reasoning |
|---|---|
| `sinh` | as `x -> +inf`, `e^x` blows up; as `x -> -inf`, `-e^-x` blows down. All of R. |
| `cosh` | `>= 1` by AM-GM, and grows to infinity. So `[1, inf)`. |
| `tanh` | proved above: strictly between `-1` and `1`. |
| `coth` | reciprocal of something in `(-1,1)` minus 0 -> outside `[-1,1]`. |
| `sech` | reciprocal of `[1, inf)` -> `(0, 1]`. Always positive, never 0. |
| `cosech` | reciprocal of `R - {0}` -> `R - {0}`. |

## 3.4 WORKED EXAMPLE

**Write the domain and range of `sech x` and of `coth x`.**

```
  sech x = 1 / cosh x .
     cosh x is defined for all x and is never 0 (cosh x >= 1),
     so DOMAIN of sech = R .
     cosh x runs over [1, inf) , so 1/cosh x runs over (0, 1] .
     RANGE of sech = (0, 1] .

  coth x = cosh x / sinh x .
     sinh x = 0 only at x = 0 , so DOMAIN of coth = R - {0} .
     tanh x runs over (-1,1) but is 0 only at x=0 (excluded),
     so tanh x runs over (-1,0) U (0,1) ,
     and its reciprocal runs over (-inf,-1) U (1, inf) .
     RANGE of coth = (-inf, -1) U (1, inf) .
```

> **TRAP:** Writing the range of `cosh` as `R` or as `(0, inf)`. It is `[1, inf)`.
> The square bracket matters — `cosh 0 = 1` is actually attained.
> Writing the range of `tanh` with square brackets is also wrong: `tanh x` gets
> as close as you like to `1` but never reaches it.

---

# TOPIC 4 — THE GRAPHS

You are unlikely to be asked to draw these for marks, but they make every other
fact obvious, so spend five minutes here.

## 4.1 `y = sinh x`

Odd, passes through the origin, always increasing, no limits.

```
                              y
                              |                          *
                              |                        *
                              |                      *
                              |                    *
                              |                 *
                              |              *
                              |          *
   ---------------------------O--------------------------------  x
                        *     |
                    *         |
                 *            |
               *              |
             *                |
           *                  |
         *                    |

   Slope at O is 1 (because cosh 0 = 1). Near the origin sinh x is
   almost exactly x. Far out it is almost exactly (1/2) e^x .
```

## 4.2 `y = cosh x`

Even, symmetric about the y-axis, **minimum value 1** at `x = 0`, never dips below.

```
        *                     y                       *
         *                    |                      *
          *                   |                     *
            *                 |                   *
              *               |                 *
                 *            |              *
                     *        |          *
    y = 1  - - - - - - - * * *|* * * - - - - - - - - -
   ---------------------------O--------------------------------  x
                              |

   This is the hanging-chain (catenary) shape. Lowest point (0, 1).
   cosh x is NEVER below the line y = 1.
```

## 4.3 `y = tanh x`

Odd, through the origin, squashed forever between `y = -1` and `y = +1`.

```
    y = +1 ------------------------------------------------ asymptote
                                     *   *   *   *   *   *
                                 *
                              *
                            *
   -------------------------O------------------------------  x
                         *
                       *
                   *
       *   *   *
    y = -1 ------------------------------------------------ asymptote

   Touches NEITHER dashed line. Slope at O is 1 (sech^2 0 = 1).
   This "S" shape is why tanh is used as an activation function
   in neural networks -- it turns any number into one between -1 and 1.
```

## 4.4 The three at a glance

| Graph | Through origin? | Symmetry | Bounded? |
|---|---|---|---|
| `sinh` | yes | odd (rotational) | no — covers all of R |
| `cosh` | no, through `(0,1)` | even (mirror) | below by 1, unbounded above |
| `tanh` | yes | odd (rotational) | yes, strictly inside `(-1, 1)` |

---

# TOPIC 5 — WHY THEY ARE CALLED "HYPERBOLIC"

## 5.1 The circle version you already know

In Chapter 6 you learned that for any angle `t`:

```
   cos^2 t + sin^2 t = 1
```

which says exactly: **the point `(cos t, sin t)` lies on the circle `x^2 + y^2 = 1`.**
As `t` runs from `0` to `2pi`, that point walks once around the circle. This is why
`cos` and `sin` are called **circular functions**.

## 5.2 The hyperbola version

We are about to prove (Topic 6) that for any real `t`:

```
   cosh^2 t - sinh^2 t = 1
```

which says exactly: **the point `(cosh t, sinh t)` lies on the curve `x^2 - y^2 = 1`.**
That curve is a **rectangular hyperbola**. Hence the name **hyperbolic functions**.

```
       CIRCULAR FUNCTIONS                 HYPERBOLIC FUNCTIONS

            y                                    y
            |                                    |    /
        ****|****                            \   |   /
      **    |    **                           \  |  /   *
     *      |      *  (cos t, sin t)           \ | /   *
    *       |       *                           \|/   *
  --*-------O-------*--- x       ---------------\+/---*----------- x
    *       |       *                           /|\    *
     *      |      *                           / | \    *
      **    |    **                           /  |  \   *
        ****|****                            /   |   \  (cosh t, sinh t)
            |                                    |       moves along the
                                                      RIGHT-HAND branch
       x^2 + y^2 = 1                            x^2 - y^2 = 1
```

**Important detail:** since `cosh t >= 1` always, the point `(cosh t, sinh t)`
only ever traces the **right-hand branch** (`x >= 1`) of the hyperbola. It never
reaches the left branch. And unlike the circle it never comes back — as `t`
increases it runs off up the branch forever.

## 5.3 What does the parameter `t` mean?

For the circle, `t` is the **angle**, and also **twice the area** of the shaded
sector. For the hyperbola there is no angle, but `t` is still **twice the area**
of the corresponding hyperbolic sector. That is why the inverse functions are
sometimes written `arsinh` ("**ar**ea-sine") rather than `arcsinh`.

You do not need this for the exam. You do need the sentence in 5.2 — it is the
standard 2-mark "why are they called hyperbolic?" answer.

## 5.4 Model answer for the exam

```
  Q: Why are sinh and cosh called hyperbolic functions?

  A: Because cosh^2 t - sinh^2 t = 1 for every real t, so the point
     P(cosh t, sinh t) always satisfies x^2 - y^2 = 1 and therefore lies
     on the rectangular hyperbola x^2 - y^2 = 1 (right-hand branch, since
     cosh t >= 1). This is exactly parallel to (cos t, sin t) lying on the
     circle x^2 + y^2 = 1, which is why cos and sin are called circular
     functions.
```

---

# TOPIC 6 — THE THREE IDENTITIES (each proved)

These three are the only identities you must be able to **derive**. Everything
else can be quoted.

## 6.1 IDENTITY 1 — `cosh^2 x - sinh^2 x = 1`

**Proof method A — straight from the definitions (write this one in the exam):**

```
                 ( e^x + e^-x )^2      ( e^x - e^-x )^2
  cosh^2 x - sinh^2 x  =  -------------  -  -------------
                              4                   4

  Expand the two squares:
     (e^x + e^-x)^2 = e^2x + 2 (e^x)(e^-x) + e^-2x = e^2x + 2 + e^-2x
     (e^x - e^-x)^2 = e^2x - 2 (e^x)(e^-x) + e^-2x = e^2x - 2 + e^-2x

                 (e^2x + 2 + e^-2x) - (e^2x - 2 + e^-2x)
              =  ----------------------------------------
                                   4

                     4
              =    -----   =   1
                     4
```

**Proof method B — the one-liner (use it if you are short of time):**

```
  cosh^2 x - sinh^2 x = (cosh x + sinh x)(cosh x - sinh x)
                      = (e^x)(e^-x)
                      = e^(x - x)  =  e^0  =  1
```

That is the whole proof, in three lines. It is beautiful and it is fast.

```
  +==================================================================+
  |                                                                  |
  |          cosh^2 x  -  sinh^2 x  =  1                             |
  |                                                                  |
  |   Rearranged:   cosh^2 x = 1 + sinh^2 x                          |
  |                 sinh^2 x = cosh^2 x - 1                          |
  |                                                                  |
  +==================================================================+
```

## 6.2 IDENTITY 2 — `1 - tanh^2 x = sech^2 x`

Take Identity 1 and **divide every term by `cosh^2 x`** (legal, because
`cosh x >= 1`, so it is never zero):

```
     cosh^2 x     sinh^2 x         1
    ---------- - ---------- = ----------
     cosh^2 x     cosh^2 x     cosh^2 x

         1     -   tanh^2 x   =   sech^2 x
```

```
  +------------------------------------------------------------------+
  |     1 - tanh^2 x = sech^2 x        equivalently                  |
  |     sech^2 x + tanh^2 x = 1                                      |
  +------------------------------------------------------------------+
```

## 6.3 IDENTITY 3 — `coth^2 x - 1 = cosech^2 x`

Take Identity 1 again, this time **divide by `sinh^2 x`** (needs `x =/= 0`):

```
     cosh^2 x     sinh^2 x         1
    ---------- - ---------- = ----------
     sinh^2 x     sinh^2 x     sinh^2 x

       coth^2 x   -    1      =  cosech^2 x
```

```
  +------------------------------------------------------------------+
  |     coth^2 x - 1 = cosech^2 x      ,  x =/= 0                    |
  +------------------------------------------------------------------+
```

## 6.4 NUMERICAL VERIFICATION AT `x = 1`

Never trust a formula you have not tested. Here are the true values at `x = 1`,
computed from `e = 2.718281828`, `e^-1 = 0.367879441`:

```
  sinh 1   = (2.718281828 - 0.367879441)/2 = 2.350402387/2 = 1.175201194
  cosh 1   = (2.718281828 + 0.367879441)/2 = 3.086161270/2 = 1.543080635
  tanh 1   = 1.175201194 / 1.543080635     = 0.761594156
  coth 1   = 1 / 0.761594156               = 1.313035285
  sech 1   = 1 / 1.543080635               = 0.648054274
  cosech 1 = 1 / 1.175201194               = 0.850918128

  CHECK 1:  cosh^2 1 - sinh^2 1
            = 1.543080635^2 - 1.175201194^2
            = 2.381097845 - 1.381097845
            = 1.000000000                              CORRECT

  CHECK 2:  1 - tanh^2 1 = 1 - 0.580025659 = 0.419974341
            sech^2 1     = 0.648054274^2   = 0.419974341   CORRECT

  CHECK 3:  coth^2 1 - 1 = 1.724061634 - 1 = 0.724061634
            cosech^2 1   = 0.850918128^2   = 0.724061634   CORRECT
```

> **TRAP:** Writing `cosh^2 x + sinh^2 x = 1`. That is the **circular** identity
> with an `h` glued on, and it is false. Test it at `x = 1`:
> `2.3811 + 1.3811 = 3.7622`, not 1. The sign is a **minus**. Every year students
> lose the whole question on this one character.

---

# TOPIC 7 — ADDITION AND SUBTRACTION FORMULAS

## 7.1 `sinh(x + y)` — proved from the definitions

We want `sinh x cosh y + cosh x sinh y`. Expand the right-hand side:

```
  sinh x cosh y =  (e^x - e^-x)   (e^y + e^-y)
                   ------------ * ------------
                        2              2

                   e^(x+y) + e^(x-y) - e^(-x+y) - e^(-x-y)
                =  ---------------------------------------
                                    4

  cosh x sinh y =  (e^x + e^-x)   (e^y - e^-y)
                   ------------ * ------------
                        2              2

                   e^(x+y) - e^(x-y) + e^(-x+y) - e^(-x-y)
                =  ---------------------------------------
                                    4

  ADD them. The e^(x-y) terms cancel, the e^(-x+y) terms cancel:

                   2 e^(x+y) - 2 e^(-x-y)      e^(x+y) - e^-(x+y)
                =  ----------------------  =  --------------------
                             4                          2

                =  sinh(x + y)                                 PROVED
```

## 7.2 `cosh(x + y)` — same method

```
  cosh x cosh y =  e^(x+y) + e^(x-y) + e^(-x+y) + e^(-x-y)
                   ---------------------------------------
                                    4

  sinh x sinh y =  e^(x+y) - e^(x-y) - e^(-x+y) + e^(-x-y)
                   ---------------------------------------
                                    4

  ADD:             2 e^(x+y) + 2 e^-(x+y)
                =  ----------------------  =  cosh(x + y)      PROVED
                             4
```

Note carefully: for `cosh` we **ADD** the two products. In ordinary trigonometry
`cos(x+y) = cos x cos y - sin x sin y` has a **minus**. This is the sign flip.

## 7.3 The full set

```
  +==================================================================+
  |                                                                  |
  |   sinh(x + y) = sinh x cosh y + cosh x sinh y                    |
  |   sinh(x - y) = sinh x cosh y - cosh x sinh y                    |
  |                                                                  |
  |   cosh(x + y) = cosh x cosh y + sinh x sinh y                    |
  |   cosh(x - y) = cosh x cosh y - sinh x sinh y                    |
  |                                                                  |
  |                    tanh x + tanh y                               |
  |   tanh(x + y) = ----------------------                           |
  |                   1 + tanh x tanh y                              |
  |                                                                  |
  |                    tanh x - tanh y                               |
  |   tanh(x - y) = ----------------------                           |
  |                   1 - tanh x tanh y                              |
  |                                                                  |
  |                   coth x coth y + 1                              |
  |   coth(x + y) = ----------------------                           |
  |                   coth x + coth y                                |
  |                                                                  |
  +==================================================================+
```

**Getting the subtraction versions for free:** replace `y` by `-y` and use
`sinh(-y) = -sinh y`, `cosh(-y) = cosh y`, `tanh(-y) = -tanh y`. That is a
one-line justification worth writing in the exam.

## 7.4 Proof of `tanh(x + y)`

```
                    sinh(x+y)      sinh x cosh y + cosh x sinh y
   tanh(x + y)  =  -----------  =  ------------------------------
                    cosh(x+y)      cosh x cosh y + sinh x sinh y

   Divide EVERY term, top and bottom, by  cosh x cosh y :

                    tanh x + tanh y
               =  --------------------
                   1 + tanh x tanh y                          PROVED
```

## 7.5 NUMERICAL CHECK of the addition formulas

Take `x = 1`, `y = 2`. True values:

```
  sinh 1 = 1.175201194   cosh 1 = 1.543080635
  sinh 2 = 3.626860408   cosh 2 = 3.762195691
  sinh 3 = 10.017874927  cosh 3 = 10.067661996

  sinh(1+2) should be sinh 3 = 10.017874927
     sinh1 cosh2 + cosh1 sinh2
     = (1.175201194)(3.762195691) + (1.543080635)(3.626860408)
     = 4.421338          + 5.596538
     = 10.017876                          CORRECT (to rounding)

  cosh(1+2) should be cosh 3 = 10.067661996
     cosh1 cosh2 + sinh1 sinh2
     = (1.543080635)(3.762195691) + (1.175201194)(3.626860408)
     = 5.805372          + 4.262291
     = 10.067663                          CORRECT (to rounding)
```

> **TRAP:** Writing `cosh(x + y) = cosh x cosh y - sinh x sinh y` out of habit
> from trigonometry. For `cosh` the sign is **PLUS**. Check it at `x = y = 0`:
> `cosh 0 = 1`, and `1*1 + 0*0 = 1`. Both signs pass that test, so instead test at
> `x = y = 1`: `cosh 2 = 3.7622`, and `(1.5431)(1.5431) + (1.1752)(1.1752)
> = 2.3811 + 1.3811 = 3.7622`. Plus is right.

---

# TOPIC 8 — OSBORNE'S RULE (the biggest time-saver in the chapter)

You spent weeks learning trigonometric formulas in Chapter 6. **Osborne's Rule
converts every single one of them into its hyperbolic version, for free.**

## 8.1 The rule

```
  +==================================================================+
  |                        OSBORNE'S RULE                            |
  |                                                                  |
  |   Take any identity in ordinary trigonometric functions.         |
  |                                                                  |
  |   STEP 1.  Replace every trig function by the corresponding      |
  |            hyperbolic one:                                       |
  |               sin -> sinh    cos -> cosh    tan -> tanh          |
  |               cot -> coth    sec -> sech    cosec -> cosech      |
  |                                                                  |
  |   STEP 2.  CHANGE THE SIGN of every term that contains a         |
  |            PRODUCT OF TWO SINES (explicit or hidden).            |
  |                                                                  |
  +==================================================================+
```

## 8.2 "Product of two sines" — where they hide

This is the only part people get wrong. A term counts if it secretly contains
`sin * sin`:

```
   OBVIOUS                          HIDDEN
   -----------------------------    ---------------------------------------
   sin x sin y     -> flip          tan^2 x  = sin^2 x / cos^2 x  -> flip
   sin^2 x         -> flip          cot^2 x  = cos^2 x / sin^2 x  -> flip
   sin^2 x cos y   -> flip          tan x tan y                   -> flip
   sin^3 x = sin x . sin^2 x        cot x cot y                   -> flip
                   -> flip          sin^4 x = (sin^2 x)^2 : TWO pairs,
                                        flip TWICE = NO change
   -----------------------------    ---------------------------------------

   NOT a product of two sines (no change):
      sin x alone       sin x cos y       cos x cos y      cos^2 x
      tan x alone       cos^3 x           sec^2 x          sec x
```

## 8.3 Osborne's Rule in action — nine worked conversions

```
  1.  cos^2 x + sin^2 x = 1
      sin^2 has a sine-pair -> flip its sign
      cosh^2 x - sinh^2 x = 1                                CORRECT

  2.  sec^2 x = 1 + tan^2 x
      tan^2 has a hidden sine-pair -> flip
      sech^2 x = 1 - tanh^2 x                                CORRECT

  3.  cosec^2 x = 1 + cot^2 x
      cot^2 has a hidden sine-pair (in the denominator!) -> flip
      cosech^2 x = -1 + coth^2 x  i.e.  coth^2 x - 1 = cosech^2 x   CORRECT

  4.  sin(x+y) = sin x cos y + cos x sin y
      no term has TWO sines -> no change
      sinh(x+y) = sinh x cosh y + cosh x sinh y              CORRECT

  5.  cos(x+y) = cos x cos y - sin x sin y
      the second term has sin*sin -> flip the minus to plus
      cosh(x+y) = cosh x cosh y + sinh x sinh y              CORRECT

  6.  tan(x+y) = (tan x + tan y)/(1 - tan x tan y)
      tan x tan y hides sin*sin -> flip
      tanh(x+y) = (tanh x + tanh y)/(1 + tanh x tanh y)      CORRECT

  7.  sin 2x = 2 sin x cos x
      only ONE sine -> no change
      sinh 2x = 2 sinh x cosh x                              CORRECT

  8.  cos 2x = 1 - 2 sin^2 x
      sin^2 -> flip
      cosh 2x = 1 + 2 sinh^2 x                               CORRECT

  9.  sin 3x = 3 sin x - 4 sin^3 x
      sin^3 = sin x . sin^2 x  -> flip
      sinh 3x = 3 sinh x + 4 sinh^3 x                        CORRECT
```

And one where **nothing** changes:

```
 10.  cos 3x = 4 cos^3 x - 3 cos x
      no sines anywhere -> nothing to flip
      cosh 3x = 4 cosh^3 x - 3 cosh x                        CORRECT
```

## 8.4 Where Osborne's Rule does NOT apply

```
  +------------------------------------------------------------------+
  |  It converts IDENTITIES. It does NOT give you:                   |
  |    - periodicity (sin has period 2pi; sinh has NO period)        |
  |    - bounds (|sin x| <= 1 is true; |sinh x| <= 1 is FALSE)       |
  |    - special values (sin(pi/2) = 1 means nothing for sinh)       |
  |    - solutions of equations                                      |
  |  Use it only on algebraic identities.                            |
  +------------------------------------------------------------------+
```

## 8.5 WORKED EXAMPLE — use Osborne's Rule

**Write the hyperbolic version of `cos 2x = (1 - tan^2 x)/(1 + tan^2 x)`.**

```
  Term by term:
     cos 2x    -> cosh 2x
     tan^2 x   -> tanh^2 x , and it is a hidden sine-pair, so BOTH
                  occurrences change sign.

  Numerator   1 - tan^2 x   ->   1 + tanh^2 x
  Denominator 1 + tan^2 x   ->   1 - tanh^2 x

                  1 + tanh^2 x
  cosh 2x  =  ------------------
                  1 - tanh^2 x

  CHECK at x = 1 :  tanh^2 1 = 0.580025659
     RHS = 1.580025659 / 0.419974341 = 3.762195691
     cosh 2 = 3.762195691                              CORRECT
```

> **TRAP:** Applying Osborne's Rule to `sin^4 x`. That is `(sin^2 x)^2` — **two**
> sine-pairs — so the sign flips twice and ends up **unchanged**. Count pairs,
> not sines.

---

# TOPIC 9 — DOUBLE ANGLE FORMULAS

Set `y = x` in the addition formulas.

## 9.1 `sinh 2x`

```
  sinh 2x = sinh(x + x) = sinh x cosh x + cosh x sinh x = 2 sinh x cosh x
```

## 9.2 `cosh 2x` — FOUR forms, all needed

```
  cosh 2x = cosh(x + x) = cosh x cosh x + sinh x sinh x
          = cosh^2 x + sinh^2 x                          ... form (1)

  Using sinh^2 x = cosh^2 x - 1 :
          = cosh^2 x + cosh^2 x - 1 = 2 cosh^2 x - 1     ... form (2)

  Using cosh^2 x = 1 + sinh^2 x :
          = 1 + sinh^2 x + sinh^2 x = 1 + 2 sinh^2 x     ... form (3)

  Dividing form (1) top and bottom by cosh^2 x (see 8.5):
                1 + tanh^2 x
          =   ----------------                           ... form (4)
                1 - tanh^2 x
```

```
  +==================================================================+
  |                                                                  |
  |   sinh 2x = 2 sinh x cosh x                                      |
  |                                                                  |
  |                         2 tanh x                                 |
  |   sinh 2x  =  ------------------------                           |
  |                     1 - tanh^2 x                                 |
  |                                                                  |
  |   cosh 2x = cosh^2 x + sinh^2 x        <-- use if BOTH known     |
  |           = 2 cosh^2 x - 1             <-- use if cosh known     |
  |           = 1 + 2 sinh^2 x             <-- use if sinh known     |
  |           = (1 + tanh^2 x)/(1 - tanh^2 x)  <-- if tanh known     |
  |                                                                  |
  |                       2 tanh x                                   |
  |   tanh 2x  =  ---------------------                              |
  |                   1 + tanh^2 x                                   |
  |                                                                  |
  +==================================================================+
```

**Choose the form that matches what you are given.** That single habit is what
turns the 2-mark question into a 15-second question.

## 9.3 WORKED EXAMPLE 1 — the classic 2-mark question

**If `sinh x = 3`, find `cosh 2x` and `sinh 2x`.**

```
  We are given sinh. So pick the form of cosh 2x written in sinh:

     cosh 2x = 1 + 2 sinh^2 x = 1 + 2(3)^2 = 1 + 18 = 19

  For sinh 2x we need cosh x as well:

     cosh^2 x = 1 + sinh^2 x = 1 + 9 = 10
     cosh x = sqrt(10)          (POSITIVE root: cosh is always >= 1)

     sinh 2x = 2 sinh x cosh x = 2 (3) sqrt(10) = 6 sqrt(10)

  CHECK:  cosh^2 2x - sinh^2 2x = 361 - 36(10) = 361 - 360 = 1   CORRECT
```

**Answer: `cosh 2x = 19`, `sinh 2x = 6 sqrt(10)`.**

## 9.4 WORKED EXAMPLE 2 — given `cosh`

**If `cosh x = 5/2`, find `cosh 2x` and `sinh 2x`.**

```
  Given cosh, so use  cosh 2x = 2 cosh^2 x - 1 :

     cosh 2x = 2 (25/4) - 1 = 25/2 - 1 = 23/2

  For sinh 2x :
     sinh^2 x = cosh^2 x - 1 = 25/4 - 1 = 21/4
     sinh x = +/- sqrt(21)/2      (sinh CAN be negative -- see the trap)
     Taking x > 0 :  sinh x = sqrt(21)/2

     sinh 2x = 2 sinh x cosh x = 2 (sqrt21 / 2)(5/2) = 5 sqrt(21) / 2

  CHECK:  (23/2)^2 - (5 sqrt21 / 2)^2 = 529/4 - 525/4 = 4/4 = 1   CORRECT
```

**Answer: `cosh 2x = 23/2`, `sinh 2x = 5 sqrt(21)/2`.**

## 9.5 WORKED EXAMPLE 3 — given `tanh`

**If `tanh x = 1/2`, find `cosh 2x` and `sinh 2x`.**

```
  tanh^2 x = 1/4

              1 + tanh^2 x      1 + 1/4      5/4      5
  cosh 2x =  --------------  =  --------  =  ---  =  ---
              1 - tanh^2 x      1 - 1/4      3/4      3

                 2 tanh x           2(1/2)       1        4
  sinh 2x =  ----------------  =  ---------  =  ----  =  ---
              1 - tanh^2 x          3/4          3/4      3

  CHECK:  25/9 - 16/9 = 9/9 = 1                              CORRECT
```

**Answer: `cosh 2x = 5/3`, `sinh 2x = 4/3`.**

## 9.6 NUMERICAL VERIFICATION AT `x = 1`

```
  sinh 2 = 3.626860408          cosh 2 = 3.762195691

  2 sinh 1 cosh 1 = 2 (1.175201194)(1.543080635)
                  = 2 (1.813430204) = 3.626860408          CORRECT

  cosh^2 1 + sinh^2 1 = 2.381097845 + 1.381097845 = 3.762195690  CORRECT
  2 cosh^2 1 - 1      = 4.762195690 - 1           = 3.762195690  CORRECT
  1 + 2 sinh^2 1      = 1 + 2.762195690           = 3.762195690  CORRECT

  tanh 2 = 0.964027580
  2 tanh 1 / (1 + tanh^2 1) = 1.523188312 / 1.580025659
                            = 0.964027580                   CORRECT
```

> **TRAP:** Taking `cosh x = -sqrt(10)` in Worked Example 1. `cosh x` is **never**
> negative. Always the **positive** square root.
> The opposite trap: assuming `sinh x` must be positive. It can be negative — if
> the question only gives you `cosh x` and does not tell you the sign of `x`,
> the honest answer for `sinh 2x` carries a `+/-`. BIEAP usually intends `x > 0`;
> write one line saying "taking `x > 0`" and you keep the marks either way.

---

# TOPIC 10 — TRIPLE ANGLE FORMULAS

## 10.1 `sinh 3x = 3 sinh x + 4 sinh^3 x` — full proof

```
  sinh 3x = sinh(2x + x)
          = sinh 2x cosh x + cosh 2x sinh x           [addition formula]

          = (2 sinh x cosh x) cosh x + (1 + 2 sinh^2 x) sinh x
                                        ^ chose the sinh form on purpose

          = 2 sinh x cosh^2 x + sinh x + 2 sinh^3 x

  Now replace cosh^2 x by 1 + sinh^2 x :

          = 2 sinh x (1 + sinh^2 x) + sinh x + 2 sinh^3 x
          = 2 sinh x + 2 sinh^3 x + sinh x + 2 sinh^3 x
          = 3 sinh x + 4 sinh^3 x                              PROVED
```

## 10.2 `cosh 3x = 4 cosh^3 x - 3 cosh x` — full proof

```
  cosh 3x = cosh(2x + x)
          = cosh 2x cosh x + sinh 2x sinh x           [addition formula]

          = (2 cosh^2 x - 1) cosh x + (2 sinh x cosh x) sinh x
                       ^ chose the cosh form on purpose

          = 2 cosh^3 x - cosh x + 2 cosh x sinh^2 x

  Now replace sinh^2 x by cosh^2 x - 1 :

          = 2 cosh^3 x - cosh x + 2 cosh x (cosh^2 x - 1)
          = 2 cosh^3 x - cosh x + 2 cosh^3 x - 2 cosh x
          = 4 cosh^3 x - 3 cosh x                              PROVED
```

## 10.3 `tanh 3x`

```
                  3 tanh x + tanh^3 x
   tanh 3x  =  -------------------------
                  1 + 3 tanh^2 x
```

(From `tan 3x = (3 tan x - tan^3 x)/(1 - 3 tan^2 x)` by Osborne's Rule: `tan^3`
and `tan^2` both carry a hidden sine-pair, so both signs flip.)

## 10.4 NUMERICAL VERIFICATION AT `x = 1`

```
  sinh 3 = 10.017874927        cosh 3 = 10.067661996

  3 sinh 1 + 4 sinh^3 1
     sinh^3 1 = 1.175201194^3 = 1.623068
     = 3(1.175201194) + 4(1.623068)
     = 3.525603582 + 6.492272 = 10.017876                CORRECT

  4 cosh^3 1 - 3 cosh 1
     cosh^3 1 = 1.543080635^3 = 3.674226
     = 4(3.674226) - 3(1.543080635)
     = 14.696904 - 4.629242 = 10.067662                  CORRECT
```

## 10.5 The memory hook

```
  TRIG                              HYPERBOLIC
  sin 3x = 3 sin x - 4 sin^3 x  ->  sinh 3x = 3 sinh x + 4 sinh^3 x   (flip)
  cos 3x = 4 cos^3 x - 3 cos x  ->  cosh 3x = 4 cosh^3 x - 3 cosh x   (same)

  Both hyperbolic versions have the SAME NUMBERS 3 and 4.
  Only the sinh one changes a sign.
```

---

# TOPIC 11 — HALF ANGLES AND CONVERTING ONE FUNCTION TO ANOTHER

## 11.1 Half angle results

From `cosh x = 1 + 2 sinh^2(x/2)` and `cosh x = 2 cosh^2(x/2) - 1`:

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     cosh x - 1 = 2 sinh^2 (x/2)                                  |
  |     cosh x + 1 = 2 cosh^2 (x/2)                                  |
  |                                                                  |
  |     Divide:                                                      |
  |                        cosh x - 1                                |
  |         tanh^2 (x/2) = -----------                               |
  |                        cosh x + 1                                |
  |                                                                  |
  +------------------------------------------------------------------+
```

This is the engine of the famous `cosh x = sec theta` question (Topic 14.3).

## 11.2 Expressing every function in terms of one other (for `x > 0`)

Let `s = sinh x`, `c = cosh x`, `t = tanh x`.

| Known | `sinh x` | `cosh x` | `tanh x` |
|---|---|---|---|
| `sinh x = s` | `s` | `sqrt(1 + s^2)` | `s / sqrt(1 + s^2)` |
| `cosh x = c` | `sqrt(c^2 - 1)` | `c` | `sqrt(c^2 - 1) / c` |
| `tanh x = t` | `t / sqrt(1 - t^2)` | `1 / sqrt(1 - t^2)` | `t` |

**How to rebuild any cell in ten seconds** — use the "hyperbolic triangle" trick:

```
   Given sinh x = s , imagine a right triangle with
        opposite = s ,  hypotenuse = sqrt(1 + s^2) ,  adjacent = 1

                        /|
       sqrt(1+s^2)     / |
                      /  |  s
                     /   |
                    /____|
                       1

   Then cosh x = hyp = sqrt(1+s^2) ,  tanh x = s / sqrt(1+s^2) .
   (It is only a memory aid -- there is no real triangle -- but every
    entry it produces is correct because of cosh^2 - sinh^2 = 1.)
```

## 11.3 WORKED EXAMPLE

**If `cosh x = 5/3` and `x > 0`, find all six hyperbolic functions of `x`.**

```
  sinh^2 x = cosh^2 x - 1 = 25/9 - 1 = 16/9
  sinh x = 4/3            (positive, since x > 0)

  tanh x   = (4/3)/(5/3) = 4/5
  coth x   = 5/4
  sech x   = 3/5
  cosech x = 3/4

  CHECK:  cosh^2 - sinh^2 = 25/9 - 16/9 = 1                CORRECT
  CHECK:  1 - tanh^2 = 1 - 16/25 = 9/25 = sech^2           CORRECT
```

Bonus: because `cosh x = 5/3` and `sinh x = 4/3`, we get `e^x = cosh x + sinh x
= 9/3 = 3`, so `x = log 3`. Compare Topic 2.3 — same numbers.

---

# TOPIC 12 — INVERSE HYPERBOLIC FUNCTIONS

## 12.1 What "inverse" means here

`sinh x = 3` asks: **which `x`?** The answer is written `x = sinh^-1 (3)`, also
written `arcsinh 3` or `arsinh 3`. All three notations mean the same thing.

```
  +------------------------------------------------------------------+
  |   y = sinh^-1 x     MEANS     x = sinh y                         |
  |   y = cosh^-1 x     MEANS     x = cosh y   (and y >= 0)          |
  |   y = tanh^-1 x     MEANS     x = tanh y                         |
  +------------------------------------------------------------------+
```

> **NOTATION WARNING:** `sinh^-1 x` does **NOT** mean `1 / sinh x`.
> `1 / sinh x` is `cosech x`. This is the same trap as in Chapter 8.

## 12.2 Why `cosh^-1` needs a restriction (and the others do not)

- `sinh` is **strictly increasing** over all of R, so every value is hit exactly
  once. Its inverse exists on all of R with no fuss.
- `tanh` is also strictly increasing, from `-1` up to `1`. Its inverse exists on
  `(-1, 1)`.
- `cosh` is **even** — `cosh(2) = cosh(-2)` — so it is many-to-one, exactly like
  `cos` in Chapter 8. We must chop it down. **We keep only `x >= 0`.**
  So by convention `cosh^-1 x` is always `>= 0`. Same for `sech^-1`.

## 12.3 THE DOMAIN AND RANGE TABLE FOR THE INVERSES

```
  +---------------+--------------------------+------------------------+
  |  FUNCTION     |  DOMAIN                  |  RANGE                 |
  +---------------+--------------------------+------------------------+
  |  sinh^-1 x    |  R                       |  R                     |
  |  cosh^-1 x    |  [ 1 , infinity )        |  [ 0 , infinity )      |
  |  tanh^-1 x    |  ( -1 , 1 )              |  R                     |
  |  coth^-1 x    |  (-inf,-1) U (1, inf)    |  R - {0}               |
  |  sech^-1 x    |  ( 0 , 1 ]               |  [ 0 , infinity )      |
  |  cosech^-1 x  |  R - {0}                 |  R - {0}               |
  +---------------+--------------------------+------------------------+

  SHORTCUT: the DOMAIN of an inverse is the RANGE of the original,
            and the RANGE of an inverse is the DOMAIN of the original
            (after any restriction). You do not need to memorise a
            second table -- just swap the columns of the Topic 3 table.
```

## 12.4 WORKED EXAMPLE

**Is `cosh^-1(0.5)` defined? Is `tanh^-1(2)` defined? Is `sinh^-1(-7)` defined?**

```
  cosh^-1(0.5) : domain of cosh^-1 is [1, inf). 0.5 < 1.
                 NOT DEFINED. (No real x has cosh x = 0.5, since cosh x >= 1.)

  tanh^-1(2)   : domain of tanh^-1 is (-1, 1). 2 is outside.
                 NOT DEFINED. (tanh x never reaches 2.)

  sinh^-1(-7)  : domain of sinh^-1 is R. -7 is fine.
                 DEFINED, and equals log(-7 + sqrt50) -- see Topic 13.
```

> **TRAP:** "Not defined" is a complete 2-mark answer. Do not try to compute it
> anyway. But you must add the one-line reason.

---

# TOPIC 13 — THE LOGARITHMIC FORMS (the 4-mark bookwork)

This is the most likely proof to be asked from this chapter. Learn **one** of the
derivations properly and the others follow the same three steps:

```
   STEP 1.  Put y = (the inverse function of x). Rewrite as x = (the function of y).
   STEP 2.  Substitute the exponential definition and let  t = e^y .
            You will always get a QUADRATIC in t.
   STEP 3.  Solve the quadratic, reject the impossible root, take logs.
```

## 13.1 DERIVATION — `sinh^-1 x = log(x + sqrt(x^2 + 1))`

```
  Let  y = sinh^-1 x  , so  x = sinh y .

  STEP 2:            e^y - e^-y
              x  =  -------------
                          2

            2x  =  e^y - e^-y

     Put t = e^y . Note t > 0 always. Then e^-y = 1/t .

            2x  =  t - 1/t

     Multiply through by t :

            2x t = t^2 - 1

            t^2 - 2x t - 1 = 0            <-- a quadratic in t

  STEP 3:  by the quadratic formula,

                2x +/- sqrt(4x^2 + 4)
          t  =  ----------------------  =  x +/- sqrt(x^2 + 1)
                          2

     WHICH SIGN?  We need t > 0 .
     Since x^2 + 1 > x^2 , we have sqrt(x^2 + 1) > |x| >= x ,
     so  x - sqrt(x^2 + 1)  <  0  and must be REJECTED.

          t = e^y = x + sqrt(x^2 + 1)

     Take natural logs of both sides:

          y = log( x + sqrt(x^2 + 1) )

  +==================================================================+
  |    sinh^-1 x  =  log( x + sqrt(x^2 + 1) )   for every real x     |
  +==================================================================+
```

**The "reject the negative root" line is worth a mark. Write it.**

## 13.2 DERIVATION — `cosh^-1 x = log(x + sqrt(x^2 - 1))`, `x >= 1`

```
  Let  y = cosh^-1 x  , so  x = cosh y  with  y >= 0 .

              e^y + e^-y
        x  =  -----------          =>    2x = t + 1/t      (t = e^y > 0)
                    2

        t^2 - 2x t + 1 = 0

                2x +/- sqrt(4x^2 - 4)
          t  =  ----------------------  =  x +/- sqrt(x^2 - 1)
                          2

     This time BOTH roots are positive (their product is 1, their sum is 2x > 0).
     In fact                                  1
          x - sqrt(x^2 - 1)  =  ---------------------
                                 x + sqrt(x^2 - 1)
     so one root is the reciprocal of the other, and their logs are
     negatives of each other.

     Since we require y >= 0 , we need t = e^y >= 1 , which forces

          t = x + sqrt(x^2 - 1)

  +==================================================================+
  |    cosh^-1 x  =  log( x + sqrt(x^2 - 1) )     for  x >= 1        |
  +==================================================================+

  (For x >= 1 the expression under the root is >= 0, which is exactly
   why the domain is [1, inf).)
```

## 13.3 DERIVATION — `tanh^-1 x = (1/2) log((1 + x)/(1 - x))`, `|x| < 1`

```
  Let  y = tanh^-1 x  , so  x = tanh y .

              e^y - e^-y
        x  =  ------------
              e^y + e^-y

     Multiply top and bottom by e^y :

              e^2y - 1
        x  =  ----------
              e^2y + 1

        x (e^2y + 1) = e^2y - 1

        x e^2y + x = e^2y - 1

        x + 1 = e^2y - x e^2y = e^2y (1 - x)

                 1 + x
        e^2y  =  -------          (needs 1 - x =/= 0, and the right side > 0,
                 1 - x            which is exactly the condition |x| < 1)

               1        1 + x
        y  =  ---  log -------
               2        1 - x

  +==================================================================+
  |                    1        1 + x                                |
  |   tanh^-1 x  =    ---  log -------        for  |x| < 1           |
  |                    2        1 - x                                |
  +==================================================================+
```

## 13.4 The reciprocal three

Get these by replacing `x` with `1/x` in the three above.

```
  +==================================================================+
  |                                                                  |
  |                        1        x + 1                            |
  |   coth^-1 x   =       ---  log -------      for  |x| > 1         |
  |                        2        x - 1                            |
  |                                                                  |
  |                          1 + sqrt(1 - x^2)                       |
  |   sech^-1 x   =  log  ----------------------   for 0 < x <= 1    |
  |                                 x                                |
  |                                                                  |
  |                          1 + sqrt(1 + x^2)                       |
  |  cosech^-1 x  =  log  ----------------------   for  x > 0        |
  |                                 x                                |
  |                                                                  |
  |                          1 - sqrt(1 + x^2)                       |
  |               =  log  ----------------------   for  x < 0        |
  |                                 x                                |
  |                                                                  |
  +==================================================================+
```

**Quick check of the `coth^-1` form:** `coth^-1 x = tanh^-1(1/x)
= (1/2) log((1 + 1/x)/(1 - 1/x))`. Multiply top and bottom inside by `x`:
`= (1/2) log((x + 1)/(x - 1))`. Same thing.

## 13.5 THE SIX LOG FORMS ON ONE CARD

```
  +--------------+--------------------------------------+---------------+
  |  FUNCTION    |  LOGARITHMIC FORM                    |  VALID FOR    |
  +--------------+--------------------------------------+---------------+
  | sinh^-1 x    |  log( x + sqrt(x^2 + 1) )            |  all real x   |
  | cosh^-1 x    |  log( x + sqrt(x^2 - 1) )            |  x >= 1       |
  | tanh^-1 x    |  (1/2) log( (1+x)/(1-x) )            |  -1 < x < 1   |
  | coth^-1 x    |  (1/2) log( (x+1)/(x-1) )            |  |x| > 1      |
  | sech^-1 x    |  log( (1 + sqrt(1 - x^2)) / x )      |  0 < x <= 1   |
  | cosech^-1 x  |  log( (1 + sqrt(1 + x^2)) / x )      |  x > 0        |
  +--------------+--------------------------------------+---------------+

   MEMORY HOOKS
     sinh^-1  ->  "+1 under the root"   (sinh accepts everything, so
                                         x^2 + 1 is never negative)
     cosh^-1  ->  "-1 under the root"   (needs x >= 1, or the root fails)
     tanh^-1  ->  the HALF outside, fraction (1+x)/(1-x) inside
     coth^-1  ->  same as tanh^-1 but the fraction is UPSIDE DOWN
```

## 13.6 WORKED EXAMPLE 1 — the standard 2-mark question

**If `sinh x = 3`, show that `x = log(3 + sqrt(10))`.**

```
  sinh x = 3   =>   x = sinh^-1 (3)

  Quote the log form:   sinh^-1 a = log( a + sqrt(a^2 + 1) )

     x = log( 3 + sqrt(9 + 1) ) = log( 3 + sqrt 10 )        PROVED

  CHECK numerically:
     sqrt 10 = 3.162277660 ,  3 + sqrt10 = 6.162277660
     x = log(6.162277660) = 1.818446459
     e^x = 6.162277660 ,  e^-x = 0.162277660
     sinh x = (6.162277660 - 0.162277660)/2 = 6.000000/2 = 3      CORRECT
```

**If you want to prove it without quoting the formula** (safer for full marks):

```
     3 = (e^x - e^-x)/2   =>   6 = e^x - e^-x
     Put t = e^x :  t^2 - 6t - 1 = 0
     t = (6 +/- sqrt(36 + 4))/2 = 3 +/- sqrt10
     t > 0 so t = 3 + sqrt10 ,  hence  x = log(3 + sqrt10)
```

## 13.7 WORKED EXAMPLE 2 — the clean-number set

**Evaluate `sinh^-1(3/4)`, `cosh^-1(5/4)` and `tanh^-1(3/5)`.**

```
  sinh^-1(3/4) = log( 3/4 + sqrt(9/16 + 1) )
               = log( 3/4 + sqrt(25/16) )
               = log( 3/4 + 5/4 )
               = log( 2 )

  cosh^-1(5/4) = log( 5/4 + sqrt(25/16 - 1) )
               = log( 5/4 + sqrt(9/16) )
               = log( 5/4 + 3/4 )
               = log( 2 )

  tanh^-1(3/5) = (1/2) log( (1 + 3/5)/(1 - 3/5) )
               = (1/2) log( (8/5)/(2/5) )
               = (1/2) log 4
               = (1/2)(2 log 2)
               = log 2

  ALL THREE EQUAL log 2 . Sanity check with Topic 1.4:
     sinh(log 2) = 3/4 , cosh(log 2) = 5/4 , tanh(log 2) = 3/5 .   CORRECT
```

Memorise the trio `sinh = 3/4, cosh = 5/4, tanh = 3/5, x = log 2`.
Examiners love these numbers because they come out clean.

## 13.8 WORKED EXAMPLE 3 — a negative argument

**Find `sinh^-1(-1)`.**

```
  sinh^-1(-1) = log( -1 + sqrt(1 + 1) ) = log( sqrt2 - 1 )

  Numerically: sqrt2 - 1 = 0.414213562 , log(0.414213562) = -0.881373587

  Cross-check using oddness:
     sinh^-1(1) = log(1 + sqrt2) = log(2.414213562) = +0.881373587
     and sinh^-1 is an ODD function, so sinh^-1(-1) = -0.881373587   CORRECT

  Neat identity worth noticing:
     sqrt2 - 1 = 1/(sqrt2 + 1) , so log(sqrt2 - 1) = -log(sqrt2 + 1) .
```

> **TRAP:** `log` of a negative number does not exist. If your log form ever
> produces a negative bracket, you have made a sign error or used the wrong
> formula. In `sinh^-1 x = log(x + sqrt(x^2+1))`, the bracket is **always
> positive**, even when `x` is very negative, because `sqrt(x^2+1) > |x|`.

---

# TOPIC 14 — THE PROOF QUESTIONS THAT ACTUALLY GET ASKED

## 14.1 `(cosh x + sinh x)^n = cosh nx + sinh nx`

```
  LHS = (cosh x + sinh x)^n
      = (e^x)^n                      [because cosh x + sinh x = e^x]
      = e^(nx)
      = cosh(nx) + sinh(nx)          [same fact, applied to nx]
      = RHS                                                    PROVED

  Similarly (cosh x - sinh x)^n = (e^-x)^n = e^(-nx)
                                = cosh nx - sinh nx .
```

Two lines. This is a gift of a question.

## 14.2 `cosh^4 x - sinh^4 x = cosh 2x`

```
  cosh^4 x - sinh^4 x
     = (cosh^2 x - sinh^2 x)(cosh^2 x + sinh^2 x)   [a^2 - b^2 factorisation]
     = (1)(cosh^2 x + sinh^2 x)                     [Identity 1]
     = cosh 2x                                      [double angle form (1)]
                                                              PROVED

  CHECK at x = 1 :
     cosh^4 1 = (2.381097845)^2 = 5.669626
     sinh^4 1 = (1.381097845)^2 = 1.907431
     difference = 3.762195   and cosh 2 = 3.762196          CORRECT
```

## 14.3 `cosh x = sec theta` implies `tanh^2(x/2) = tan^2(theta/2)`

This one appears regularly. It uses the half-angle result from Topic 11.1.

```
                      cosh x - 1
     tanh^2 (x/2)  =  ------------              [Topic 11.1]
                      cosh x + 1

                      sec theta - 1
                   =  ---------------           [given cosh x = sec theta]
                      sec theta + 1

     Now write sec theta = 1 / cos theta and multiply top and bottom
     by cos theta :

                      1 - cos theta
                   =  ---------------
                      1 + cos theta

     Use the standard half-angle results from Chapter 6:
          1 - cos theta = 2 sin^2 (theta/2)
          1 + cos theta = 2 cos^2 (theta/2)

                      2 sin^2 (theta/2)
                   =  -------------------  =  tan^2 (theta/2)
                      2 cos^2 (theta/2)
                                                              PROVED
```

## 14.4 `x = log(cot(pi/4 + theta))` implies `cosh x = sec 2theta`, `sinh x = -tan 2theta`

Also a favourite. Write `A = pi/4 + theta` to keep the algebra short.

```
     x = log(cot A)   =>   e^x = cot A  ,  e^-x = 1/cot A = tan A

              e^x + e^-x      cot A + tan A
     cosh x = -----------  =  ---------------
                   2                2

              (cos A / sin A) + (sin A / cos A)
            = ---------------------------------
                             2

              cos^2 A + sin^2 A            1              1
            = -------------------  =  -------------  =  -------
                2 sin A cos A           2 sinA cosA      sin 2A

     and  2A = pi/2 + 2theta , so  sin 2A = sin(pi/2 + 2theta) = cos 2theta .

              1
     cosh x = ---------- = sec 2theta                          PROVED
              cos 2theta


              e^x - e^-x      cot A - tan A      cos^2 A - sin^2 A
     sinh x = ----------- =  --------------- =  -------------------
                   2                2              2 sin A cos A

              cos 2A
            = --------  =  cot 2A  =  cot(pi/2 + 2theta)  =  - tan 2theta
              sin 2A
                                                               PROVED

     (and therefore  tanh x = sinh x / cosh x = -tan 2theta . cos 2theta
                            = - sin 2theta .)
```

**Sanity check with the key identity:**

```
     cosh^2 x - sinh^2 x = sec^2 2theta - tan^2 2theta = 1        CORRECT
```

## 14.5 `sinh^-1 x + sinh^-1 y` type manipulations

Rarely asked at board level but easy once you have the log forms:

```
  sinh^-1 (3/4) + sinh^-1 (3/4) = log 2 + log 2 = log 4

  Check with the addition formula instead:
     sinh(2u) where sinh u = 3/4 , cosh u = 5/4
        sinh 2u = 2 (3/4)(5/4) = 15/8
     so the answer should be sinh^-1 (15/8)
        = log( 15/8 + sqrt(225/64 + 1) )
        = log( 15/8 + sqrt(289/64) )
        = log( 15/8 + 17/8 )
        = log( 32/8 ) = log 4                            CORRECT, same answer
```

---

# TOPIC 15 — A NOTE ON WHERE THIS CHAPTER REAPPEARS

You will meet these functions again. A one-line preview so nothing surprises you:

```
  MATHS IB (Differentiation)
      d/dx (sinh x) = cosh x            d/dx (cosh x) = sinh x
      d/dx (tanh x) = sech^2 x
      (Note: NO minus sign on d/dx cosh x -- unlike d/dx cos x = -sin x.)

  MATHS IIB (Integration)
      INT dx / sqrt(x^2 + a^2)  =  sinh^-1 (x/a) + c
      INT dx / sqrt(x^2 - a^2)  =  cosh^-1 (x/a) + c
      This is why the log forms matter: the same integrals are often
      written as log( x + sqrt(x^2 + a^2) ) + c .

  PHYSICS / ENGINEERING
      Hanging cables, terminal velocity with air drag, and special
      relativity all use cosh and tanh.
```

You do not need any of this for Chapter 9. It is here so you recognise the
functions later instead of panicking.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write sinh x = (e^x - e^-x)/2 with the MINUS on top,
       and cosh x = (e^x + e^-x)/2 with the PLUS?

  [ ]  Did I use cosh^2 x - sinh^2 x = 1 with a MINUS?
       (cosh^2 + sinh^2 = 1 is FALSE.)

  [ ]  Did I take the POSITIVE square root for cosh x? cosh is never
       negative and never less than 1.

  [ ]  If the question only gave me cosh x, did I say one line about the
       sign of sinh x ("taking x > 0") before writing sinh 2x?

  [ ]  Did I pick the RIGHT form of cosh 2x?
          given sinh  ->  1 + 2 sinh^2 x
          given cosh  ->  2 cosh^2 x - 1
          given tanh  ->  (1 + tanh^2 x)/(1 - tanh^2 x)

  [ ]  In cosh(x + y), did I write PLUS sinh x sinh y? (Not minus.)

  [ ]  In tanh(x + y), did I write 1 PLUS tanh x tanh y in the denominator?

  [ ]  In sinh 3x, did I write 3 sinh x PLUS 4 sinh^3 x?
       In cosh 3x, did I write 4 cosh^3 x MINUS 3 cosh x?

  [ ]  In the log form of sinh^-1, is it sqrt(x^2 + 1)?
       In cosh^-1, is it sqrt(x^2 - 1)?

  [ ]  In the derivation of a log form, did I write the line
       "reject the negative root because e^y > 0"? (It carries a mark.)

  [ ]  Did I state the CONDITION with each log form?
          cosh^-1 needs x >= 1 ,  tanh^-1 needs |x| < 1 ,
          coth^-1 needs |x| > 1

  [ ]  Did I FINISH with a check? cosh^2(2x) - sinh^2(2x) should equal 1.
       This catches almost every arithmetic slip in 10 seconds.

  [ ]  Did I remember that "not defined" is a complete answer, with a reason?
```

---

## THE LAST WORD

This chapter is small, closed, and repeats itself. If you can write these five
lines from memory you will not lose the Section A mark:

```
   1.   sinh x = (e^x - e^-x)/2 ,  cosh x = (e^x + e^-x)/2
   2.   cosh^2 x - sinh^2 x = 1
   3.   sinh 2x = 2 sinh x cosh x
   4.   cosh 2x = 1 + 2 sinh^2 x = 2 cosh^2 x - 1
   5.   sinh^-1 x = log( x + sqrt(x^2 + 1) )
```

Two hours of work. Two marks guaranteed, four to six likely.
Go and take them.
