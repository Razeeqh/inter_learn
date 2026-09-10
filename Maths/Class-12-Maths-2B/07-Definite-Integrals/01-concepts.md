# Definite Integrals — Concepts From Zero

Read this with a pen in your hand. Every worked example is written out in full.
Copy them. Do not just read them.

**Before you start:** you must be able to do Chapter 6 integrals. If
`INT x sin x dx` and `INT dx/(x^2 + 4)` mean nothing to you, go back to
Chapter 6 first. This chapter is Chapter 6 with two numbers added on top of
the integral sign — but if the Chapter 6 part is missing, nothing here works.

---

# TOPIC 1 — WHAT A DEFINITE INTEGRAL IS

## 1.1 The difference in one line

```
   INDEFINITE                            DEFINITE

   INT f(x) dx                           INT from a to b of f(x) dx

   answer is a FUNCTION                  answer is a NUMBER
   you must write  + c                   NO  + c  ever
   INT x^2 dx = x^3/3 + c                INT 0 to 2 of x^2 dx = 8/3
```

The two numbers `a` and `b` are called the **limits of integration**:

```
       b
   INT   f(x) dx           a  =  LOWER limit  (bottom)
       a                   b  =  UPPER limit  (top)
```

Since we are not allowed LaTeX here, we write it in plain words:

```
   INT from a to b of f(x) dx
```

## 1.2 Why bother?

Because the answer means something physical:

| f(x) is ... | INT from a to b of f(x) dx is ... |
|---|---|
| the height of a curve | the AREA under it |
| speed | the DISTANCE travelled between time a and time b |
| a rate of flow | the total amount that flowed |
| force | the WORK done |

A definite integral is a **total accumulated over an interval**.

## 1.3 The everyday analogy

Imagine your speedometer. It shows speed at each instant. You want to know how
far you drove between 2 o'clock and 5 o'clock.

If the speed were constant at 60 km/h, easy: 60 x 3 = 180 km.
But the speed keeps changing. So you chop the 3 hours into thousands of tiny
slices. Inside each slice the speed is almost constant, so
distance in that slice = speed x tiny time. Then you add up all the slices.

**That adding-up-of-tiny-slices is exactly what the integral sign means.**
The `INT` symbol is a stretched letter S — it stands for **Sum**.

---

# TOPIC 2 — THE DEFINITE INTEGRAL AS THE LIMIT OF A SUM

This is the honest definition. The exam asks for it as "evaluate from
**first principles**" or "as the **limit of a sum**", worth 4 marks.

## 2.1 The picture

To find the area under y = f(x) from x = a to x = b, chop [a, b] into **n**
equal strips, each of width

```
             b - a
       h  =  -------
               n
```

Replace each curvy strip by a rectangle whose height is the value of f at the
LEFT edge of the strip.

```
        y
        ^                                        .--''
        |                                  .--''`|
        |                            .--''`      |   y = f(x)
        |                     _.--''`  |    |    |
        |             _.--''`  |   |   |    |    |
        |      _.--''` |   |   |   |   |    |    |
        |  |   |   |   |   |   |   |   |    |    |
        |  |   |   |   |   |   |   |   |    |    |
        |  |   |   |   |   |   |   |   |    |    |
        +--+---+---+---+---+---+---+---+----+----+-------> x
           a  a+h a+2h a+3h  ...              a+(n-1)h   b
           |<h>|
```

Area of one rectangle = (width) x (height) = h x f(a + rh).

Add all n of them:

```
   S_n  =  h [ f(a) + f(a + h) + f(a + 2h) + ... + f(a + (n-1)h) ]
```

The rectangles do not fit the curve exactly. But make n huge — a million,
a billion — and the mismatch shrinks to nothing.

```
   +==================================================================+
   |   THE DEFINITION                                                 |
   |                                                                  |
   |   INT from a to b of f(x) dx                                     |
   |                                                                  |
   |     =  lim   h [ f(a) + f(a+h) + f(a+2h) + ... + f(a+(n-1)h) ]   |
   |       n->inf                                                     |
   |                                                                  |
   |                       n-1                                        |
   |     =  lim      h  x  SUM   f( a + r h )                         |
   |       n->inf          r=0                                        |
   |                                                                  |
   |            b - a                                                 |
   |   where h = -------  , so that  n h = b - a                      |
   |               n                                                  |
   +==================================================================+
```

## 2.2 The three sum formulas you cannot do this without

```
   +-----------------------------------------------------------------+
   |                                  n ( n + 1 )                    |
   |   1 + 2 + 3 + ... + n       =  ---------------                  |
   |                                       2                         |
   |                                                                 |
   |                                  n ( n + 1 )( 2n + 1 )          |
   |   1^2 + 2^2 + ... + n^2     =  -----------------------          |
   |                                          6                      |
   |                                                                 |
   |                                [ n ( n + 1 ) ] 2                |
   |   1^3 + 2^3 + ... + n^3     =  [ ----------- ]                  |
   |                                [      2      ]                  |
   +-----------------------------------------------------------------+
```

Be careful: the sum in the definition runs from `r = 0` to `r = n - 1`.
So the "last" term uses `n - 1`, not `n`.

```
   0 + 1 + 2 + ... + (n-1)         =  ( n - 1 ) n / 2

   0^2 + 1^2 + ... + (n-1)^2       =  ( n - 1 ) n ( 2n - 1 ) / 6
```

## 2.3 WORKED EXAMPLE — INT from 0 to 2 of x^2 dx from first principles

```
   STEP 1.  Identify a, b, f.
            a = 0 ,  b = 2 ,  f(x) = x^2

   STEP 2.  h = (b - a)/n = 2/n .   The r-th sample point is
            a + r h  =  0 + r(2/n)  =  2r/n .

   STEP 3.  Write the sum.
                                 n-1
            S_n  =  h   x   SUM      f( 2r/n )
                                 r=0

                     2      n-1   ( 2r )2        2    4    n-1
                 =  ---  x  SUM   ( -- )     =  --- x --- x SUM  r^2
                     n      r=0   (  n )         n    n^2  r=0

                     8      n-1
                 =  ---  x  SUM  r^2
                    n^3     r=0

   STEP 4.  Put in the sum formula (note: up to n - 1).

            n-1              ( n - 1 ) n ( 2n - 1 )
            SUM  r^2    =   -------------------------
            r=0                        6

                     8       ( n - 1 ) n ( 2n - 1 )
            S_n  =  ---  x  -------------------------
                    n^3                6

                     8   ( n - 1 ) ( 2n - 1 )
                 =  --- x ---------------------
                     6            n^2

                     8   (      1 ) (      1 )
                 =  --- x ( 1 - - ) ( 2 -  - )
                     6   (      n ) (      n )

   STEP 5.  Let n -> infinity.  Then 1/n -> 0 .

                     8                    8         8
            LIMIT = --- x ( 1 )( 2 )  =  --- x 2 = ---
                     6                    6         3
```

```
   +-------------------------------------------------+
   |   INT from 0 to 2 of x^2 dx  =  8/3             |
   +-------------------------------------------------+
```

**CHECK by the shortcut method (Topic 3):**
F(x) = x^3/3, so F(2) - F(0) = 8/3 - 0 = **8/3**. Same answer. Good.

## 2.4 WORKED EXAMPLE — INT from 1 to 3 of (2x + 1) dx from first principles

```
   a = 1 , b = 3 , f(x) = 2x + 1 ,   h = 2/n

   f( 1 + rh )  =  2( 1 + rh ) + 1  =  3 + 2 r h

            n-1                          [       n-1     ]
   S_n = h  SUM ( 3 + 2 r h )   =    h   [ 3n + 2h SUM r ]
            r=0                          [       r=0     ]

                 [        ( n - 1 ) n ]
       =   h   x [ 3n + 2h ----------- ]  =  3 n h  +  h^2 n ( n - 1 )
                 [             2      ]

   Now  n h = 2 , so 3 n h = 6 .  And  h^2 n(n-1) = (4/n^2)( n^2 - n )
                                                  = 4 ( 1 - 1/n ) .

   S_n  =  6  +  4 ( 1 - 1/n )   ->   6 + 4  =  10   as n -> infinity
```

**CHECK:** F(x) = x^2 + x. F(3) - F(1) = (9 + 3) - (1 + 1) = 12 - 2 = **10**. Good.

## 2.5 WORKED EXAMPLE — INT from 0 to 1 of e^x dx (a geometric progression)

```
   a = 0 , b = 1 , h = 1/n ,   f( r h ) = e^( r h )

           n-1
   S_n = h SUM e^(rh)  =  h [ 1 + e^h + e^(2h) + ... + e^((n-1)h) ]
           r=0

   The bracket is a GP with first term 1 and common ratio e^h :

              e^( n h ) - 1            e^1 - 1
   S_n = h x ----------------  =  h x -----------      ( since n h = 1 )
                e^h - 1                e^h - 1

                         h
       = ( e - 1 )  x  -------
                       e^h - 1

   As n -> infinity , h -> 0 , and the standard limit is

            e^h - 1                     h
        lim --------- = 1   so     lim ------- = 1
        h->0    h                  h->0 e^h-1

   S_n  ->  ( e - 1 ) x 1  =  e - 1
```

**CHECK:** F(x) = e^x, F(1) - F(0) = e - 1. Good.

> **TRAP:** In a "limit of a sum" question you are **forbidden** from using
> F(b) - F(a). The examiner wants the sum, the sum formula, and the limit.
> Writing `= [x^3/3]` scores **zero** in that question, even though the number
> is right. Read the question stem.

> **TRAP:** The sum runs `r = 0` to `r = n - 1`, so use
> `(n-1)n/2` and `(n-1)n(2n-1)/6`, **not** `n(n+1)/2`.
> (The final limit comes out the same either way, but the working must be
> consistent or you lose method marks.)

---

# TOPIC 3 — THE FUNDAMENTAL THEOREM OF INTEGRAL CALCULUS

The limit-of-a-sum method is honest but painful. In 1670 Newton and Leibniz
found the shortcut, and it is the most important result in calculus.

```
   +==================================================================+
   |   FUNDAMENTAL THEOREM OF INTEGRAL CALCULUS                       |
   |                                                                  |
   |   Let f be continuous on [a, b] and let F be ANY antiderivative   |
   |   of f, that is  F'(x) = f(x) .   Then                           |
   |                                                                  |
   |                                          b                       |
   |     INT from a to b of f(x) dx  =  [ F(x) ]   =  F(b) - F(a)     |
   |                                          a                       |
   +==================================================================+
```

`F(b) - F(a)` is often written `[F(x)]` with `a` below and `b` above, and is
read "F of x, from a to b".

## 3.1 Why the + c does not matter

Suppose you use `F(x) + c` instead of `F(x)`:

```
   [ F(b) + c ]  -  [ F(a) + c ]   =   F(b) - F(a) + c - c
                                   =   F(b) - F(a)
```

The c cancels itself. **That is why a definite integral has no + c.**
Writing + c in a definite integral is not wrong mathematically, but it looks
like you do not understand — drop it.

## 3.2 WORKED EXAMPLE — the basic drill

```
   (i)   INT from 1 to 3 of x^2 dx

                x^3  3      27     1     27 - 1     26
         =  [  ----- ]   =  --- - ---  = -------- = ----
                 3   1       3     3        3        3

   (ii)  INT from 0 to pi/2 of cos x dx

         =  [ sin x ] from 0 to pi/2  =  sin(pi/2) - sin 0  =  1 - 0  =  1

   (iii) INT from 0 to 1 of dx/(1 + x^2)

         =  [ Tan^-1 x ] from 0 to 1  =  Tan^-1(1) - Tan^-1(0)
         =  pi/4 - 0  =  pi/4

   (iv)  INT from 1 to e of dx/x

         =  [ log|x| ] from 1 to e  =  log e - log 1  =  1 - 0  =  1

   (v)   INT from 0 to pi/4 of sec^2 x dx

         =  [ tan x ] from 0 to pi/4  =  1 - 0  =  1
```

## 3.3 The order of the three steps — write them in this order

```
   +-----------------------------------------------------------------+
   |   1.  Integrate.  Put the answer inside SQUARE BRACKETS with     |
   |       the limits written on the right edge.                      |
   |                                                                  |
   |   2.  Substitute the TOP limit.                                  |
   |                                                                  |
   |   3.  MINUS the value at the BOTTOM limit.                       |
   |                                                                  |
   |   Never mix step 2 and step 3 in your head. Write both values.   |
   +-----------------------------------------------------------------+
```

> **TRAP:** F(a) - F(b) instead of F(b) - F(a). Half the sign errors in the
> whole paper are this. Say "**top minus bottom**" out loud every time.

> **TRAP:** When F(a) itself is negative, brackets are essential.
> `INT from -1 to 1 of x^2 dx = [x^3/3] = 1/3 - (-1/3) = 2/3`, not
> `1/3 - 1/3 = 0`.

## 3.4 A second version of the theorem (asked as a 2-mark theory question)

```
   +-----------------------------------------------------------------+
   |            d    [   x            ]                              |
   |           ---   [ INT  f(t) dt   ]   =   f( x )                 |
   |            dx   [   a            ]                              |
   |                                                                 |
   |   "Differentiation undoes integration."                         |
   +-----------------------------------------------------------------+
```

Notice the dummy variable: inside the integral we write `t`, because `x` is
already being used as the upper limit. That is also why

```
   INT from a to b of f(x) dx   =   INT from a to b of f(t) dt
```

The letter does not matter. Only a, b and the shape of f matter.

---

# TOPIC 4 — THE GEOMETRICAL MEANING: AREA

## 4.1 The basic statement

If f(x) is **above the x-axis** on [a, b] (that is, f(x) >= 0), then

```
   INT from a to b of f(x) dx  =  AREA between the curve y = f(x),
                                  the x-axis, and the vertical lines
                                  x = a and x = b.
```

```
        y
        ^
        |                          y = f(x)
        |                 ______
        |            ,--''      ''--.
        |        ,--'  ///////////   '--.
        |     ,-'   ///////////////      '-.
        |   ,'   //////  AREA  /////////     '.
        |  |   ////////////////////////////    |
        |  |  ////////////////////////////// |
        |  | ///////////////////////////////  |
    ----+--+----------------------------------+--------> x
        O  x = a                            x = b
```

The area of a strip is `y dx` — height times tiny width. `INT` adds them up.

```
   +-----------------------------------------------------------------+
   |   AREA  =  INT from a to b of  y dx     where y is the height    |
   +-----------------------------------------------------------------+
```

## 4.2 WORKED EXAMPLE

**Find the area bounded by y = x^2, the x-axis, x = 0 and x = 3.**

```
        y
        ^
      9 |                              *
        |                            * |
        |                          *   |
        |                       *      |
        |                    *   ///   |
        |                 *   ///////  |
        |             *    //////////  |
        |        *      /////////////  |
        |   *        ////////////////  |
        +---*----*--*------------------+-------> x
        O                            x = 3

   Area  =  INT from 0 to 3 of x^2 dx

                x^3  3       27              
         =  [  ----- ]   =  ----  -  0  =  9   square units
                 3   0        3
```

Sanity check: the region sits inside the rectangle 3 wide and 9 tall
(area 27) and is clearly less than half of it. 9 out of 27 is a third.
That is exactly what you expect for a parabola. Sensible.

## 4.3 What if the curve is BELOW the axis?

Then `y` is negative, so `y dx` is negative, so the integral comes out
**negative**. An area can never be negative. The integral has told you
"this much area, sitting underneath".

```
        y
        ^
        |
    ----+----+--------------------+------------> x
        O   x=a       \\\\\\    x=b
        |        \      AREA   /
        |         '-.        .-'
        |            '-....-'      y = f(x)  (negative here)
        |
        INT from a to b of f(x) dx  =  -(that area)

        AREA  =  | INT from a to b of f(x) dx |
```

Full detail is in Topic 16. For now remember:

```
   +-----------------------------------------------------------------+
   |   THE INTEGRAL is a signed area.                                |
   |   THE AREA is  INT | y | dx  -  always positive.                |
   +-----------------------------------------------------------------+
```

> **TRAP:** `INT from 0 to 2pi of sin x dx = 0`. That is a correct integral.
> But the **area** between y = sin x and the x-axis from 0 to 2pi is **4**,
> because the hump below the axis cancelled the hump above. If the question
> says "area", you must split. If it says "evaluate the integral", you must not.

---

# TOPIC 5 — EVALUATING BY SUBSTITUTION (AND CHANGING THE LIMITS)

This is where most marks are lost in the whole chapter. Read it twice.

## 5.1 The golden rule

```
   +==================================================================+
   |                                                                  |
   |   WHEN YOU CHANGE THE VARIABLE, YOU MUST CHANGE THE LIMITS.      |
   |                                                                  |
   |   The old limits belong to x. They are meaningless for t.        |
   |                                                                  |
   |   If  t = g(x)  then                                             |
   |                                                                  |
   |      x = a  (bottom)   becomes   t = g(a)                        |
   |      x = b  (top)      becomes   t = g(b)                        |
   |                                                                  |
   |   INT from a to b of f(g(x)) g'(x) dx                            |
   |          =  INT from g(a) to g(b) of f(t) dt                     |
   |                                                                  |
   |   Once the limits are changed, you NEVER go back to x.           |
   +==================================================================+
```

Why? Because `INT from 0 to 1` means "x runs from 0 to 1". If you rename the
variable, the new variable does **not** run from 0 to 1; it runs from g(0) to
g(1). Leaving the old numbers there is like measuring a distance in kilometres
and then writing "miles" on the answer.

## 5.2 The two legal methods — pick ONE

**METHOD A (preferred, faster, fewer mistakes): change the limits.**

```
   INT from 0 to 1 of  x / ( x^2 + 1 )  dx

   Put  t = x^2 + 1  .   Then  dt = 2x dx  , so  x dx = dt/2 .

   NEW LIMITS:      x = 0  ->  t = 0 + 1 = 1
                    x = 1  ->  t = 1 + 1 = 2

              2                     2
        1    |  dt      1          |            1
   =   INT   |  ---  =  --- [ log t ]  =  --- ( log 2 - log 1 )
              1    t     2          1      2

        1
   =   --- log 2
        2
```

**METHOD B: keep the old limits, but put x back before substituting.**

```
   INT x/(x^2+1) dx  =  (1/2) log( x^2 + 1 )            (indefinite first)

   Then                                        1
        INT from 0 to 1  =  [ (1/2) log(x^2+1) ]
                                                0
        =  (1/2) log 2  -  (1/2) log 1  =  (1/2) log 2
```

Both are correct. **Method A is faster and is what the board expects.**
What is fatally wrong is mixing them:

> **TRAP — THE KILLER MISTAKE:**
> ```
>    WRONG:   INT from 0 to 1 of x/(x^2+1) dx
>                = (1/2) [ log t ]  from 0 to 1        <-- limits not changed!
>                = (1/2)( log 1 - log 0 )   ... nonsense
> ```
> The moment `t` appears, the numbers on the integral sign must be `t`-numbers.
> Write the words "when x = 0, t = 1; when x = 1, t = 2" in your answer.
> Examiners give a mark for that line alone.

## 5.3 WORKED EXAMPLE — trig substitution with new limits

**Evaluate INT from 0 to pi/2 of sin x / (1 + cos^2 x) dx**

```
   Put  t = cos x  .   Then  dt = - sin x dx  , so  sin x dx = - dt .

   NEW LIMITS:      x = 0     ->  t = cos 0     = 1
                    x = pi/2  ->  t = cos(pi/2) = 0

                 0    - dt              1     dt
        =   INT      ---------  =  INT  ---------      (swapping limits kills
                 1    1 + t^2           0  1 + t^2      the minus sign — that
                                                        is Property P1)

                             1
        =  [ Tan^-1 t ]       =  Tan^-1 1 - Tan^-1 0  =  pi/4 - 0
                             0

        =  pi/4
```

Notice how the minus sign and the reversed limits cancelled each other. That
happens **every time** you substitute t = cos x. Learn to expect it.

## 5.4 WORKED EXAMPLE — a root

**Evaluate INT from 0 to 4 of dx / sqrt(x^2 + 9)**

```
   No substitution needed — this is a standard form from Chapter 6:

        INT dx/sqrt(x^2 + a^2)  =  log | x + sqrt(x^2 + a^2) |  + c

   Here a = 3 .

                                        4
   =  [ log | x + sqrt(x^2 + 9) | ]
                                        0

   =  log( 4 + sqrt(16 + 9) )  -  log( 0 + sqrt(0 + 9) )

   =  log( 4 + 5 )  -  log 3   =  log 9  -  log 3  =  log ( 9/3 )

   =  log 3
```

**CHECK numerically:** log 3 = 1.0986. The integrand at x = 0 is 1/3 = 0.333,
at x = 4 is 1/5 = 0.2. Average height about 0.27, width 4, so roughly 1.08.
Matches. Good.

## 5.5 WORKED EXAMPLE — substitution that makes the limits equal

**Evaluate INT from 0 to pi of sin x cos x dx**

```
   Put  t = sin x  ,  dt = cos x dx .

   NEW LIMITS:   x = 0   ->  t = sin 0  = 0
                 x = pi  ->  t = sin pi = 0

                 0
   =  INT       t dt   =   0
                 0

   Because when the two limits are EQUAL, the integral is 0.
```

**CHECK the other way:** sin x cos x = (1/2) sin 2x, and
`INT from 0 to pi of (1/2) sin 2x dx = [-(1/4) cos 2x] from 0 to pi
= -(1/4)(1) + (1/4)(1) = 0`. Same. Good.

## 5.6 WORKED EXAMPLE — partial fractions with limits

**Evaluate INT from 1 to 2 of x / ((x+1)(x+2)) dx**

```
        x               A          B
   ------------  =   -------  +  -------
   (x+1)(x+2)         x + 1       x + 2

   x  =  A( x + 2 )  +  B( x + 1 )

   Put x = -1 :   -1 = A(1)             ->  A = -1
   Put x = -2 :   -2 = B(-1)            ->  B =  2

                       [   -1        2   ]
   INT from 1 to 2 of  [ ------- + ------- ] dx
                       [  x + 1     x + 2 ]

                                                 2
   =  [ - log(x+1)  +  2 log(x+2) ]
                                                 1

   At x = 2 :   - log 3 + 2 log 4  =  - log 3 + log 16  =  log (16/3)
   At x = 1 :   - log 2 + 2 log 3  =  - log 2 + log 9   =  log ( 9/2)

                16       9           16     2            32
   Answer =  log --  -  log -  =  log( -- x --- ) =  log( --- )
                 3        2            3     9            27
```

**CHECK numerically:** log(32/27) = log(1.185) = 0.170. The integrand at
x = 1 is 1/6 = 0.167, at x = 2 is 2/12 = 0.167. Width 1, so about 0.17.
Excellent match. Good.

---

# TOPIC 6 — DEFINITE INTEGRATION BY PARTS

## 6.1 The formula

```
   +==================================================================+
   |                                                                  |
   |   INT from a to b of u v dx                                      |
   |                                                                  |
   |          [            ] b        b  (  du            )           |
   |     =    [ u  INT v dx]     - INT   ( ---- INT v dx  ) dx        |
   |          [            ] a        a  (  dx            )           |
   |                                                                  |
   |   Choose u by  I L A T E :                                       |
   |     I nverse trig  >  L og  >  A lgebraic  >  T rig  >  E xp     |
   |                                                                  |
   |   Whichever comes FIRST in ILATE becomes u.                      |
   +==================================================================+
```

The only new thing versus Chapter 6 is that **the first piece gets evaluated
between the limits straight away**, and the leftover integral keeps the same
limits.

## 6.2 WORKED EXAMPLE — INT from 0 to pi/2 of x sin x dx

```
   ILATE:  x is Algebraic, sin x is Trig.  A comes before T, so  u = x .

   INT v dx  =  INT sin x dx  =  - cos x

                          pi/2         pi/2
   =  [ x ( - cos x ) ]        -   INT       ( 1 )( - cos x ) dx
                          0            0

                          pi/2         pi/2
   =  [ - x cos x ]            +   INT       cos x dx
                          0            0

                          pi/2                  pi/2
   =  [ - x cos x ]            +   [ sin x ]
                          0                      0

   First bracket:   - (pi/2) cos(pi/2)  -  ( - 0 . cos 0 )
                 =  - (pi/2)(0)  -  0   =   0

   Second bracket:  sin(pi/2) - sin 0   =   1 - 0  =  1

   ANSWER  =  0 + 1  =  1
```

**CHECK numerically:** x sin x on [0, pi/2] rises from 0 to (1.571)(1) = 1.571.
An average height near 0.64 over a width of 1.571 gives about 1.0. Good.

## 6.3 WORKED EXAMPLE — INT from 0 to 1 of x e^x dx

```
   ILATE:  u = x  (Algebraic beats Exponential).   INT v dx = e^x

                    1          1
   =  [ x e^x ]        -  INT     ( 1 )( e^x ) dx
                    0          0

                    1          1
   =  [ x e^x ]        -  [ e^x ]
                    0          0

   =  ( 1 . e  -  0 . 1 )  -  ( e  -  1 )

   =  e  -  e  +  1   =   1
```

## 6.4 WORKED EXAMPLE — INT from 1 to e of log x dx

```
   There is only one function. Write it as  ( log x ) x ( 1 ) .
   ILATE:  Log beats Algebraic, so u = log x , v = 1 .

   INT v dx = x

                       e         e  ( 1 )
   =  [ ( log x ) x ]     -  INT    ( --- ) x dx
                       1         1  (  x )

                       e         e
   =  [ x log x ]         -  INT    1 dx
                       1         1

                       e            e
   =  [ x log x ]         -  [ x ]
                       1            1

   =  ( e log e  -  1 log 1 )  -  ( e - 1 )

   =  ( e . 1  -  0 )  -  e  +  1   =   1
```

## 6.5 WORKED EXAMPLE — INT from 0 to 1 of Tan^-1 x dx

```
   u = Tan^-1 x  (Inverse trig is FIRST in ILATE) ,  v = 1 , INT v dx = x

                         1          1  (    1     )
   =  [ x Tan^-1 x ]        -  INT     ( -------- ) x dx
                         0          0  ( 1 + x^2  )

                         1          1     x
   =  [ x Tan^-1 x ]        -  INT     -------- dx
                         0          0   1 + x^2

   First part:  1 . Tan^-1 1  -  0  =  pi/4

   Second part: top is half the derivative of the bottom, so

        1     x                 1               1                     1
   INT     -------- dx  =  [ --- log(1 + x^2) ]   =  --- ( log 2 - 0 )
        0   1 + x^2            2               0      2

                    pi      1
   ANSWER   =      ----  -  --- log 2
                     4       2
```

**CHECK numerically:** pi/4 = 0.7854, (1/2)log2 = 0.3466, so answer 0.4388.
Tan^-1 x goes from 0 to 0.785 over width 1, average roughly 0.44. Good.

> **TRAP:** After the `[ ]` part is evaluated it becomes a **number**. The
> remaining `INT` still has its limits. Do not evaluate the bracket and then
> forget that the second integral also needs its limits put in.

---

# TOPIC 7 — PROPERTIES P1 AND P2 (the two easy ones)

## 7.1 P1 — swapping the limits flips the sign

```
   +-----------------------------------------------------------------+
   |                                                                 |
   |   INT from a to b of f(x) dx  =  -  INT from b to a of f(x) dx  |
   |                                                                 |
   |   and as a special case                                         |
   |                                                                 |
   |   INT from a to a of f(x) dx  =  0                              |
   +-----------------------------------------------------------------+
```

**PROOF.**
```
   INT from a to b of f(x) dx  =  F(b) - F(a)
   INT from b to a of f(x) dx  =  F(a) - F(b)  =  - [ F(b) - F(a) ]

   So the two are negatives of each other.

   And  INT from a to a  =  F(a) - F(a)  =  0 .
```

**WORKED EXAMPLE.**
```
   INT from 3 to 1 of x^2 dx  =  - INT from 1 to 3 of x^2 dx
                              =  - [ x^3/3 ] from 1 to 3
                              =  - ( 27/3 - 1/3 )  =  - 26/3

   Direct check:  [ x^3/3 ] from 3 to 1  =  1/3 - 27/3  =  -26/3 .  Same.
```

**Where you actually use it:** after substituting `t = cos x`, the limits
come out backwards. Flip them and change the minus sign. That is P1 at work
(you already saw it in section 5.3).

## 7.2 P2 — splitting at a middle point

```
   +-----------------------------------------------------------------+
   |                                                                 |
   |   INT from a to b of f(x) dx                                    |
   |                                                                 |
   |      =  INT from a to c of f(x) dx  +  INT from c to b of f(x) dx|
   |                                                                 |
   |   True for ANY c — even a c outside [a, b].                     |
   +-----------------------------------------------------------------+
```

**PROOF.**
```
   RHS  =  [ F(c) - F(a) ]  +  [ F(b) - F(c) ]
        =  F(c) - F(a) + F(b) - F(c)
        =  F(b) - F(a)
        =  LHS
```

The middle terms cancel. That is the whole proof.

```
   PICTURE:

        y
        |         ___
        |     .-''   ''-.
        |   .'  //// | \\ '.
        |  /  //////  |\\\\  \
        | | //////// | \\\\\\ |
        +-+-----------+--------+-------> x
          a           c        b
           <-- part 1 --><part 2>

        The two areas obviously add up to the whole area.
```

**WORKED EXAMPLE — this is what P2 is really for: MODULUS functions.**

**Evaluate INT from 0 to 4 of | x - 1 | dx**

```
   | x - 1 |  =   1 - x    when x < 1     (because x - 1 is negative)
              =   x - 1    when x > 1

   So split at c = 1 :

   I  =  INT from 0 to 1 of ( 1 - x ) dx  +  INT from 1 to 4 of ( x - 1 ) dx

                        x^2  1              x^2       4
      =  [   x   -   ------- ]   +   [   ------- - x  ]
                        2    0              2         1

      =  ( 1 - 1/2 ) - ( 0 )    +    ( 8 - 4 )  -  ( 1/2 - 1 )

      =  1/2  +  4  +  1/2

      =  5
```

**CHECK geometrically:**
```
        y
        |                                    *
      3 |                              *     |
        |                        *   / |     |
        |                  *       /   |     |
      1 |*             *         /     |     |
        | \ \ \    *   /  /  /  /      |     |
        |  \  \ *   /  /  /  /  /      |     |
        +---\--*--+---+---+---+--------+------> x
        0       1                       4

   Left triangle: base 1, height 1  ->  area 1/2
   Right triangle: base 3, height 3 ->  area 9/2
   Total = 1/2 + 9/2 = 5 .    Matches.
```

> **TRAP:** Never integrate a modulus directly. `INT |x-1| dx` is not
> `|x-1|^2 / 2`. Split at the point where the inside is zero. Same for
> `|sin x|`, `|x^2 - 4|`, and for any function defined piecewise.

---

# TOPIC 8 — P3 AND P4: THE REFLECTION PROPERTIES (the 7-mark machine)

These two win more marks than anything else in the chapter.

## 8.1 P3 — the 0 to a reflection

```
   +==================================================================+
   |                                                                  |
   |   INT from 0 to a of f(x) dx  =  INT from 0 to a of f(a - x) dx  |
   |                                                                  |
   +==================================================================+
```

**PROOF.**
```
   Let  I  =  INT from 0 to a of f(x) dx .

   In the RIGHT side, put   x = a - t  .   Then  dx = - dt .

   LIMITS:    x = 0  ->  a - t = 0  ->  t = a
              x = a  ->  a - t = a  ->  t = 0

                                          0
   INT from 0 to a of f(a - x) dx  =  INT     f( a - (a - t) ) ( - dt )
                                          a

                                          0
                                   =  INT     f( t ) ( - dt )
                                          a

                                          a
                                   =  INT     f( t ) dt          [ by P1 ]
                                          0

                                   =  I         [ t is only a dummy letter ]
```

**What it means in a picture.** Reflecting the graph in the vertical line
x = a/2 does not change the area under it.

```
        y                    |
        |     ___            |            ___
        |   .'   '.          |          .'   '.
        |  /  A    \         |         /   A'  \
        | /  /////  \        |        /  /////  \
        +/////////////\------|-------/////////////\----> x
        0                   a/2                     a

        f(x) on the left  <-->  f(a - x) on the right.
        Same area. That is all P3 says.
```

## 8.2 THE STANDARD TRICK — "call it I, write it twice, add"

```
   +-----------------------------------------------------------------+
   |   THE METHOD (memorise these five lines)                        |
   |                                                                 |
   |   1.  Let  I  =  INT from 0 to a of f(x) dx .          ...(1)   |
   |   2.  By P3,  I  =  INT from 0 to a of f(a - x) dx .   ...(2)   |
   |   3.  Simplify f(a - x) as far as it will go.                   |
   |   4.  ADD (1) and (2):  2I = INT [ f(x) + f(a-x) ] dx           |
   |   5.  The bracket collapses to something trivial (usually 1).   |
   |       Integrate it and divide by 2.                             |
   +-----------------------------------------------------------------+
```

## 8.3 WORKED EXAMPLE — the most-asked question in the chapter

**Evaluate INT from 0 to pi/2 of sin x / (sin x + cos x) dx**

```
   STEP 1.  Let
                       pi/2      sin x
            I  =  INT           ------------------  dx           ...(1)
                       0        sin x  +  cos x

   STEP 2.  Here a = pi/2 . Apply P3: replace x by (pi/2 - x) .

            sin( pi/2 - x ) = cos x        cos( pi/2 - x ) = sin x

                       pi/2      cos x
            I  =  INT           ------------------  dx           ...(2)
                       0        cos x  +  sin x

   STEP 3.  ADD (1) and (2). The bottoms are the same, so just add the tops:

                       pi/2   sin x  +  cos x            pi/2
            2 I  = INT       ------------------ dx = INT       1 dx
                       0      sin x  +  cos x            0

                              pi/2         pi
            2 I  =  [ x ]           =     ----
                              0            2

   STEP 4.
                            pi
                    I  =   ----
                            4
```

```
   +-------------------------------------------------+
   |   INT 0 to pi/2 of sinx/(sinx+cosx) dx = pi/4   |
   +-------------------------------------------------+
```

**CHECK numerically:** pi/4 = 0.785. The integrand goes from 0 (at x = 0) to
1 (at x = pi/2), passing through 1/2 at x = pi/4. Average about 0.5, width
1.571, so about 0.79. Perfect match. Good.

**The same trick answers all of these instantly:**

| Question | Answer | Why |
|---|---|---|
| INT 0 to pi/2 of cosx/(sinx+cosx) dx | pi/4 | same working, roles swapped |
| INT 0 to pi/2 of dx/(1 + tan x) | pi/4 | 1/(1+tanx) = cosx/(cosx+sinx) |
| INT 0 to pi/2 of dx/(1 + cot x) | pi/4 | = sinx/(sinx+cosx) |
| INT 0 to pi/2 of sqrt(sinx)/(sqrt(sinx)+sqrt(cosx)) dx | pi/4 | identical structure |
| INT 0 to pi/2 of sin^n x/(sin^n x + cos^n x) dx | pi/4 | works for ANY n |

Once you see the shape `g / (g + h)` where swapping x -> a - x swaps g and h,
**the answer is always half the width of the interval.**

## 8.4 WORKED EXAMPLE — P3 with an extra step

**Evaluate INT from 0 to 1 of x (1 - x)^n dx**

```
   I  =  INT from 0 to 1 of x ( 1 - x )^n dx

   By P3 with a = 1, replace x by ( 1 - x ) :

   I  =  INT from 0 to 1 of ( 1 - x ) ( 1 - (1 - x) )^n dx

      =  INT from 0 to 1 of ( 1 - x ) x^n dx

      =  INT from 0 to 1 of ( x^n  -  x^(n+1) ) dx

           x^(n+1)      x^(n+2)   1          1            1
      = [ ---------  -  --------- ]     =  -------  -  -------
            n + 1        n + 2    0        n + 1        n + 2

                  ( n + 2 ) - ( n + 1 )              1
      =        ---------------------------  =  -----------------
                 ( n + 1 )( n + 2 )            (n + 1)( n + 2 )
```

**CHECK with n = 1:** formula gives 1/(2 x 3) = 1/6.
Direct: `INT 0 to 1 x(1-x) dx = INT (x - x^2) = 1/2 - 1/3 = 1/6`. Good.

Notice: expanding `x(1-x)^n` with the binomial theorem would have taken a page.
P3 turned it into two terms.

## 8.5 P4 — the a to b reflection

```
   +==================================================================+
   |                                                                  |
   |   INT from a to b of f(x) dx  =  INT from a to b of f(a+b-x) dx  |
   |                                                                  |
   +==================================================================+
```

This is P3 grown up. P3 is just P4 with a = 0.

**PROOF.**
```
   Put  x = a + b - t   in the right-hand side.   Then  dx = - dt .

   LIMITS:   x = a  ->  a + b - t = a  ->  t = b
             x = b  ->  a + b - t = b  ->  t = a

                                        a
   INT a to b of f(a+b-x) dx  =   INT       f( a + b - (a+b-t) ) ( - dt )
                                        b

                                        a
                              =   INT       f( t )( - dt )
                                        b

                                        b
                              =   INT       f( t ) dt        [ P1 ]
                                        a

                              =   INT from a to b of f(x) dx
```

The trick to remember it: **the two limits add to a + b, so replace x by
"(sum of limits) minus x".**

## 8.6 WORKED EXAMPLE — the classic P4 question

**Evaluate INT from 0 to pi/4 of log( 1 + tan x ) dx**

```
   Here a = 0, b = pi/4 , so  a + b = pi/4 .

   I  =  INT from 0 to pi/4 of log( 1 + tan x ) dx              ...(1)

   By P4, replace x by ( pi/4 - x ) :

                       tan(pi/4) - tan x        1 - tan x
   tan( pi/4 - x ) = --------------------- =  --------------
                     1 + tan(pi/4) tan x       1 + tan x

                                     1 - tan x        1 + tan x + 1 - tan x
   So  1 + tan( pi/4 - x )  =  1 + -------------  =  ----------------------
                                     1 + tan x            1 + tan x

                                        2
                            =    --------------
                                  1 + tan x

   Therefore

                       pi/4     (        2        )
        I  =    INT           log( ------------- ) dx
                       0          (  1 + tan x    )

                       pi/4
           =    INT           [ log 2  -  log( 1 + tan x ) ] dx
                       0

                       pi/4                pi/4
           =    INT           log 2 dx - INT     log(1 + tan x) dx
                       0                    0

                        pi
           =    log2 x ----   -   I                              ...(2)
                        4

   Bring I across:

                        pi                        pi
        2 I  =  log 2 x ----      so      I  =   ---- log 2
                        4                         8
```

```
   +-----------------------------------------------------+
   |  INT 0 to pi/4 of log(1 + tan x) dx = (pi/8) log 2  |
   +-----------------------------------------------------+
```

**CHECK numerically:** (pi/8)log2 = (0.3927)(0.6931) = 0.2722.
The integrand runs from log1 = 0 to log2 = 0.693 over a width of 0.785;
the average is a bit under half of 0.693, so around 0.27. Good.

## 8.7 WORKED EXAMPLE — P3 giving a doubling, not a cancellation

**Evaluate INT from 0 to pi of x sin x / (1 + cos^2 x) dx**

```
   I  =  INT from 0 to pi of  x sin x / ( 1 + cos^2 x ) dx        ...(1)

   By P3 with a = pi:  sin(pi - x) = sin x , cos(pi - x) = - cos x ,
   so cos^2 stays the same. Only the x in front changes.

                       pi   ( pi - x ) sin x
   I  =           INT       ------------------- dx                ...(2)
                       0       1 + cos^2 x

   ADD (1) and (2). The x and the (pi - x) add to pi :

                       pi        pi sin x
   2 I  =         INT           -------------- dx
                       0         1 + cos^2 x

                            pi     sin x
        =   pi   x   INT           ----------- dx
                            0     1 + cos^2 x

   Now substitute  t = cos x ,  dt = - sin x dx .
   LIMITS:  x = 0 -> t = 1 ;  x = pi -> t = -1 .

        pi  sin x            -1   - dt           1     dt
   INT       -------- dx = INT    -------  =  INT    -------
        0   1+cos^2x        1     1 + t^2      -1    1 + t^2

                              1
        =  [ Tan^-1 t ]           =  Tan^-1(1) - Tan^-1(-1)
                             -1

        =  pi/4 - ( - pi/4 )  =  pi/2

   So        2 I  =  pi x ( pi/2 )  =  pi^2 / 2

                            pi^2
                    I  =   ------
                             4
```

```
   +---------------------------------------------------------+
   |  INT 0 to pi of x sinx/(1 + cos^2 x) dx  =  pi^2 / 4    |
   +---------------------------------------------------------+
```

**CHECK numerically:** pi^2/4 = 2.467. Rough numeric estimate with a few
sample points (x = pi/4, pi/2, 3pi/4 give 0.370, 1.571, 1.111) over width pi
gives roughly 2.4. Good.

> **TRAP:** In P3 you replace **every** x by (a - x), including the ones
> outside the fraction. Students often change only the trig parts and leave
> the lone `x` alone. That kills the whole method.

---

# TOPIC 9 — P5: THE 0 TO 2a PROPERTY

```
   +==================================================================+
   |                                                                  |
   |   INT from 0 to 2a of f(x) dx                                    |
   |       =  INT from 0 to a of f(x) dx + INT from 0 to a of f(2a-x) dx|
   |                                                                  |
   |   CONSEQUENCES:                                                  |
   |                                                                  |
   |   If  f( 2a - x ) =   f( x )  ->  INT 0 to 2a = 2 INT 0 to a     |
   |                                                                  |
   |   If  f( 2a - x ) = - f( x )  ->  INT 0 to 2a = 0                |
   +==================================================================+
```

**PROOF.**
```
   By P2, split at the midpoint a :

   INT 0 to 2a f(x) dx  =  INT 0 to a f(x) dx  +  INT a to 2a f(x) dx

   In the SECOND integral put  x = 2a - t ,  dx = - dt .

   LIMITS:  x = a  -> 2a - t = a  -> t = a
            x = 2a -> 2a - t = 2a -> t = 0

                              0                       a
   INT a to 2a f(x) dx = INT     f(2a - t)(- dt) = INT   f(2a - t) dt
                              a                       0

   So      INT 0 to 2a f(x) dx = INT 0 to a f(x) dx + INT 0 to a f(2a-x) dx

   Now:
     if f(2a-x) = f(x) , the two pieces are identical  ->  2 INT 0 to a
     if f(2a-x) = -f(x), the two pieces cancel         ->  0
```

**The test in practice:** you are given limits `0 to 2a`. Compute `f(2a - x)`.
Compare with `f(x)`. That is all.

## 9.1 WORKED EXAMPLE — the doubling case

**Evaluate INT from 0 to pi of sin^2 x dx**

```
   Here 2a = pi , so a = pi/2 .

   TEST:  f( pi - x ) = sin^2( pi - x ) = ( sin x )^2 = sin^2 x = f(x)

   Same. So the integral DOUBLES:

   I  =  2 INT from 0 to pi/2 of sin^2 x dx

      =  2 x ( pi/4 )            [ by Wallis, Topic 12 ]

      =  pi/2
```

**CHECK directly:**
```
   sin^2 x = (1 - cos 2x)/2

   INT 0 to pi (1 - cos2x)/2 dx = (1/2)[ x - (sin 2x)/2 ] from 0 to pi
                                = (1/2)[ (pi - 0) - (0 - 0) ]  =  pi/2
```
Same. Good.

## 9.2 WORKED EXAMPLE — the vanishing case

**Evaluate INT from 0 to pi of cos^3 x dx**

```
   2a = pi , a = pi/2 .

   TEST:  f( pi - x ) = cos^3( pi - x ) = ( - cos x )^3 = - cos^3 x = - f(x)

   Opposite. So the integral is ZERO.

   I  =  0
```

**CHECK directly:** `INT cos^3 x dx = sin x - sin^3 x/3`. Between 0 and pi:
`(0 - 0) - (0 - 0) = 0`. Good.

## 9.3 WORKED EXAMPLE — a harder one

**Evaluate INT from 0 to pi of x sin^3 x dx**

Careful — the `x` in front spoils the simple test, so use **P3** instead.

```
   I = INT 0 to pi of x sin^3 x dx                                 ...(1)
   I = INT 0 to pi of (pi - x) sin^3 x dx     [ sin(pi-x) = sin x ] ...(2)

   ADD:   2 I  =  pi INT 0 to pi of sin^3 x dx

   Now sin^3 x DOES satisfy f(pi - x) = f(x) , so by P5

          INT 0 to pi sin^3 x dx  =  2 INT 0 to pi/2 sin^3 x dx
                                  =  2 x ( 2/3 )     [ Wallis ]
                                  =  4/3

          2 I  =  pi x ( 4/3 )    ->    I  =  2 pi / 3
```

**CHECK numerically:** 2pi/3 = 2.094. Rough sampling of x sin^3 x on [0, pi]
(peak about 1.6 near x = 1.9) over width 3.14 gives roughly 2.1. Good.

---

# TOPIC 10 — P6: EVEN AND ODD FUNCTIONS (the cheapest marks in the paper)

## 10.1 Reminder: what even and odd mean

```
   EVEN:   f( - x )  =    f( x )      graph is symmetric about the y-AXIS
                                      x^2 , x^4 , cos x , |x| , sec x

   ODD:    f( - x )  =  - f( x )      graph has 180-degree symmetry
                                      about the ORIGIN
                                      x , x^3 , sin x , tan x , Sin^-1 x
```

Quick rules:
```
   even  x  even  =  even          x^2 cos x  is EVEN
   odd   x  odd   =  even          x sin x    is EVEN
   even  x  odd   =  odd           x^3 cos x  is ODD
   constant       =  even
```

## 10.2 The property

```
   +==================================================================+
   |                                                                  |
   |                    (   2 INT from 0 to a of f(x) dx , if f is    |
   |   INT from -a to a (                                     EVEN    |
   |   of f(x) dx    =  (                                             |
   |                    (   0                              , if f is  |
   |                    (                                     ODD     |
   +==================================================================+
```

**PROOF.**
```
   Split at 0 by P2:

   I  =  INT from -a to 0 of f(x) dx  +  INT from 0 to a of f(x) dx

   In the FIRST piece put  x = - t ,  dx = - dt .
   LIMITS:  x = -a -> t = a ;   x = 0 -> t = 0 .

                              0                        a
   INT -a to 0 f(x) dx = INT     f(- t)(- dt)  =  INT     f( - t ) dt
                              a                        0

   So      I  =  INT 0 to a f(-x) dx  +  INT 0 to a f(x) dx

   CASE 1 (EVEN):  f(-x) = f(x) , so both pieces are the same:
                   I = 2 INT 0 to a f(x) dx

   CASE 2 (ODD):   f(-x) = -f(x) , so the pieces cancel:
                   I = 0
```

## 10.3 Why it is obvious from the picture

```
   ODD FUNCTION (e.g. y = x^3)          EVEN FUNCTION (e.g. y = x^2)

        y                                    y
        |          /                         |  \           /
        |         /                          |   \  /////  /
        |        /                           |    \ ///// /
   -----+-------+-----> x                    |     \/////\/
       /|      a                        -----+------+----+-----> x
      / |                                   -a      0     a
     /  |  //// (below, negative)
    /   |                                    Left area = right area.
   -a   |                                    They ADD.
        |
   Left area (negative) exactly cancels
   right area (positive). Total 0.
```

## 10.4 WORKED EXAMPLES

```
   (i)   INT from -1 to 1 of x^3 dx

         f(-x) = (-x)^3 = -x^3 = -f(x)      ODD   ->   ANSWER 0

         Check:  [x^4/4] from -1 to 1 = 1/4 - 1/4 = 0 .   Good.


   (ii)  INT from -pi/2 to pi/2 of sin^5 x cos^2 x dx

         sin^5 is odd, cos^2 is even, odd x even = ODD  ->  ANSWER 0


   (iii) INT from -a to a of x^2 dx

         EVEN , so  = 2 INT 0 to a x^2 dx = 2 [x^3/3] from 0 to a
                    = 2 a^3 / 3

         Check:  [x^3/3] from -a to a = a^3/3 - (-a^3/3) = 2a^3/3 .  Good.


   (iv)  INT from -pi/2 to pi/2 of sin^2 x dx

         EVEN , so  = 2 INT 0 to pi/2 sin^2 x dx = 2 x pi/4 = pi/2


   (v)   INT from -1 to 1 of ( x^3 + x cos x + tan^5 x + 1 ) dx

         Look at each piece:
             x^3        ODD    -> 0
             x cos x    ODD    -> 0
             tan^5 x    ODD    -> 0
             1          EVEN   -> 2 INT 0 to 1 of 1 dx = 2

         ANSWER  =  2
```

Example (v) is a favourite. A monstrous-looking integrand where **everything
dies except one term**. If you see the limits `-a to a`, check odd/even
term by term before you do anything else.

> **TRAP:** `INT from -2 to 2 of x^2 dx` is **not** 0. `x^2` is EVEN, so it
> DOUBLES: `2 x 8/3 = 16/3`. Students see symmetric limits and write 0 out of
> habit. Always run the `f(-x)` test.

> **TRAP:** The limits must be **exactly** `-a` and `+a`. `INT from -1 to 2`
> gets no benefit from symmetry.

---

# TOPIC 11 — P7: PERIODIC FUNCTIONS

A function is **periodic with period T** if `f( x + T ) = f( x )` for all x.

```
   sin x , cos x        have period  2 pi
   sin^2 x , cos^2 x    have period    pi
   tan x , cot x        have period    pi
   | sin x |            has period     pi
```

```
   +==================================================================+
   |   If f has period T then                                         |
   |                                                                  |
   |   (a)  INT from a to a+T of f(x) dx = INT from 0 to T of f(x) dx |
   |        (a full period gives the same answer, wherever you start) |
   |                                                                  |
   |   (b)  INT from 0 to nT of f(x) dx = n INT from 0 to T of f(x) dx|
   |        (n whole periods = n copies of one period)                |
   |                                                                  |
   |   (c)  INT from a to a+nT of f(x) dx = n INT from 0 to T f(x) dx |
   +==================================================================+
```

**PROOF of (b).** Split into n blocks by P2:

```
   INT 0 to nT  =  INT 0 to T + INT T to 2T + ... + INT (n-1)T to nT

   In the block  INT from (k)T to (k+1)T , put  x = t + kT ,  dx = dt .
   LIMITS become  t = 0  to  t = T , and  f( t + kT ) = f( t )  by periodicity.

   So every block equals  INT from 0 to T of f(t) dt .
   There are n identical blocks.   Hence  n INT 0 to T f(x) dx .
```

```
   PICTURE (n = 3):

        y
        |   ___       ___       ___
        |  /   \     /   \     /   \
        | /  A  \   /  A  \   /  A  \
        |/ ///// \ / ///// \ / ///// \
        +----------+---------+---------+------> x
        0          T        2T        3T

        Same block, three times.  Total = 3A.
```

## 11.1 WORKED EXAMPLE

**Evaluate INT from 0 to 2pi of sin^2 x dx**

```
   sin^2 x has period pi , and 2pi = 2 x pi , so n = 2 , T = pi .

   I  =  2 INT from 0 to pi of sin^2 x dx
      =  2 x ( pi/2 )         [ from section 9.1 ]
      =  pi
```

**CHECK directly:** `INT (1-cos2x)/2 dx = (1/2)[x - sin2x/2]` from 0 to 2pi
`= (1/2)(2pi) = pi`. Good.

## 11.2 WORKED EXAMPLE

**Evaluate INT from 0 to 2pi of | sin x | dx**

```
   | sin x | has period pi , so with n = 2 :

   I  =  2 INT from 0 to pi of | sin x | dx

   On [0, pi] , sin x is never negative, so | sin x | = sin x .

      =  2 INT from 0 to pi of sin x dx
      =  2 [ - cos x ] from 0 to pi
      =  2 ( - cos pi  +  cos 0 )
      =  2 ( 1 + 1 )
      =  4
```

This is the number quoted in Topic 4: the true **area** of one full sine wave
is 4, even though `INT 0 to 2pi sin x dx = 0`.

---

# TOPIC 12 — REDUCTION FORMULAE

A reduction formula turns an integral with power **n** into the same integral
with power **n - 2**. Apply it again and again and the power drops to 0 or 1,
which you can do.

The **derivation** of the sin^n formula is a standard 7-mark question.
Learn to produce it, not just quote it.

## 12.1 The reduction formula for INT sin^n x dx

```
   Let   I_n  =  INT sin^n x dx .

   STEP 1.  Split off one sin x :

            I_n  =  INT ( sin^(n-1) x ) ( sin x ) dx

   STEP 2.  Integrate by parts with

               u  =  sin^(n-1) x           v  =  sin x
               du/dx = (n-1) sin^(n-2) x cos x      INT v dx = - cos x

            I_n = ( sin^(n-1) x )( - cos x )
                     -  INT ( n-1 ) sin^(n-2) x cos x ( - cos x ) dx

                = - sin^(n-1) x cos x  +  (n-1) INT sin^(n-2) x cos^2 x dx

   STEP 3.  Replace cos^2 x by 1 - sin^2 x :

            I_n = - sin^(n-1) x cos x
                     + (n-1) INT sin^(n-2) x ( 1 - sin^2 x ) dx

                = - sin^(n-1) x cos x + (n-1) INT sin^(n-2) x dx
                                      - (n-1) INT sin^n x dx

                = - sin^(n-1) x cos x + (n-1) I_(n-2)  -  (n-1) I_n

   STEP 4.  Collect the I_n terms:

            I_n + (n-1) I_n  =  - sin^(n-1) x cos x  +  (n-1) I_(n-2)

                  n I_n      =  - sin^(n-1) x cos x  +  (n-1) I_(n-2)
```

```
   +==================================================================+
   |                     sin^(n-1) x . cos x        n - 1             |
   |   INT sin^n x dx = - --------------------  +  ------- INT        |
   |                              n                   n       sin^(n-2) x dx
   +==================================================================+
```

## 12.2 The matching formula for cos^n x

Exactly the same working with the roles swapped (and one sign different,
because the derivative of cos is negative):

```
   +==================================================================+
   |                      cos^(n-1) x . sin x       n - 1             |
   |   INT cos^n x dx =  --------------------  +  ------- INT         |
   |                              n                  n        cos^(n-2) x dx
   +==================================================================+
```

## 12.3 Turning them into DEFINITE formulas on [0, pi/2]

Put the limits 0 and pi/2 into the first term of the sin formula:

```
                       pi/2
   [ - sin^(n-1)x cosx ]
                       0

   At x = pi/2 :   - sin^(n-1)(pi/2) . cos(pi/2)  =  - ( 1 )( 0 )  =  0
   At x = 0     :   - sin^(n-1)(0) . cos(0)       =  - ( 0 )( 1 )  =  0

   The whole first term VANISHES  (valid for n >= 2).
```

```
   +==================================================================+
   |   With  I_n = INT from 0 to pi/2 of sin^n x dx :                 |
   |                                                                  |
   |                    n - 1                                         |
   |          I_n  =   -------  I_(n-2)                               |
   |                      n                                           |
   |                                                                  |
   |   and exactly the same recursion for cos^n x .                   |
   |                                                                  |
   |   STARTING VALUES:                                               |
   |          I_0 = INT 0 to pi/2 of 1 dx    =  pi/2                  |
   |          I_1 = INT 0 to pi/2 of sin x dx = [-cos x] = 0 + 1 = 1  |
   +==================================================================+
```

## 12.4 Reduction formulae for tan^n x and sec^n x

**tan^n — no integration by parts needed, just an identity.**

```
   I_n  =  INT tan^n x dx  =  INT tan^(n-2) x . tan^2 x dx

        =  INT tan^(n-2) x ( sec^2 x - 1 ) dx

        =  INT tan^(n-2) x sec^2 x dx   -   INT tan^(n-2) x dx

   The first integral: put t = tan x , dt = sec^2 x dx , giving t^(n-1)/(n-1).
```

```
   +-----------------------------------------------------------------+
   |                       tan^(n-1) x                               |
   |   INT tan^n x dx  =  --------------  -  INT tan^(n-2) x dx      |
   |                          n - 1                                  |
   |                                                                 |
   |   Definite version on [0, pi/4] , where tan = 1 at the top:      |
   |                                                                 |
   |                          1                                      |
   |          I_n     =   ---------   -   I_(n-2)                    |
   |                        n - 1                                    |
   +-----------------------------------------------------------------+
```

**sec^n — this one does need by parts.**

```
   I_n  =  INT sec^n x dx  =  INT ( sec^(n-2) x )( sec^2 x ) dx

   u = sec^(n-2) x  ,  INT v dx = tan x

        = sec^(n-2) x tan x  -  INT (n-2) sec^(n-3)x . secx tanx . tanx dx

        = sec^(n-2) x tan x  -  (n-2) INT sec^(n-2) x tan^2 x dx

        = sec^(n-2) x tan x  -  (n-2) INT sec^(n-2) x ( sec^2 x - 1 ) dx

        = sec^(n-2) x tan x  -  (n-2) I_n  +  (n-2) I_(n-2)

   ( n - 1 ) I_n  =  sec^(n-2) x tan x  +  ( n - 2 ) I_(n-2)
```

```
   +-----------------------------------------------------------------+
   |                      sec^(n-2) x . tan x      n - 2             |
   |   INT sec^n x dx =  --------------------- + -------- INT        |
   |                            n - 1               n - 1     sec^(n-2)x dx
   +-----------------------------------------------------------------+
```

Similarly (same working, extra minus signs):

```
   INT cot^n x dx   =  - cot^(n-1) x /( n - 1 )   -  INT cot^(n-2) x dx

                        - cosec^(n-2) x . cot x       n - 2
   INT cosec^n x dx =  -------------------------  +  ------- INT cosec^(n-2)x dx
                                n - 1                 n - 1
```

## 12.5 WORKED EXAMPLE — using the tan reduction

**Evaluate INT from 0 to pi/4 of tan^4 x dx**

```
   I_4  =  1/3  -  I_2

   I_2  =  1/1  -  I_0

   I_0  =  INT from 0 to pi/4 of 1 dx  =  pi/4

   So   I_2  =  1  -  pi/4

        I_4  =  1/3  -  ( 1 - pi/4 )  =  pi/4  -  2/3
```

**CHECK numerically:** pi/4 - 2/3 = 0.7854 - 0.6667 = 0.1187.
tan^4 x on [0, pi/4] runs from 0 to 1 and is very small for most of the
range (at x = pi/8, tan = 0.414, tan^4 = 0.029). An average around 0.15
over a width of 0.785 gives about 0.12. Good.

---

# TOPIC 13 — THE WALLIS FORMULAE (guaranteed marks)

## 13.1 Where they come from

Apply `I_n = ((n-1)/n) I_(n-2)` over and over until you hit `I_1 = 1` (odd n)
or `I_0 = pi/2` (even n).

```
   n = 6 (even):   I_6 = (5/6) I_4 = (5/6)(3/4) I_2 = (5/6)(3/4)(1/2) I_0
                       = (5/6)(3/4)(1/2)(pi/2)

   n = 7 (odd) :   I_7 = (6/7) I_5 = (6/7)(4/5) I_3 = (6/7)(4/5)(2/3) I_1
                       = (6/7)(4/5)(2/3)(1)
```

```
   +==================================================================+
   |   WALLIS FORMULA                                                 |
   |                                                                  |
   |   INT 0 to pi/2 of sin^n x dx  =  INT 0 to pi/2 of cos^n x dx    |
   |                                                                  |
   |         n-1     n-3     n-5                                      |
   |    =   ----- x ----- x ----- x  ...  x  K                        |
   |          n      n-2     n-4                                      |
   |                                                                  |
   |    n EVEN :  keep going down to  1/2 ,  then  K = pi / 2         |
   |    n ODD  :  keep going down to  2/3 ,  then  K = 1              |
   |                                                                  |
   |   START AT (n-1)/n AND STEP DOWN BY 2 IN BOTH TOP AND BOTTOM.    |
   +==================================================================+
```

**Why sin and cos give the SAME answer:** by P3 with a = pi/2,
`INT 0 to pi/2 sin^n x dx = INT 0 to pi/2 sin^n(pi/2 - x) dx
= INT 0 to pi/2 cos^n x dx`. One line. That is a 2-mark question by itself.

## 13.2 The table you must know by heart

| n | INT 0 to pi/2 of sin^n x dx (= cos^n) | Working |
|---|---|---|
| 0 | pi/2 | — |
| 1 | 1 | [-cos x] |
| 2 | pi/4 | (1/2)(pi/2) |
| 3 | 2/3 | (2/3)(1) |
| 4 | 3 pi / 16 | (3/4)(1/2)(pi/2) |
| 5 | 8/15 | (4/5)(2/3)(1) |
| 6 | 5 pi / 32 | (5/6)(3/4)(1/2)(pi/2) |
| 7 | 16/35 | (6/7)(4/5)(2/3)(1) |
| 8 | 35 pi / 256 | (7/8)(5/6)(3/4)(1/2)(pi/2) |

**Memory hook:**
```
   EVEN n  ->  the answer contains  pi .
   ODD  n  ->  the answer is a plain fraction, no pi.

   If your "even" answer has no pi in it, you made a mistake.
   If your "odd" answer has a pi in it, you made a mistake.
```

## 13.3 The mixed formula: sin^m x cos^n x

```
   +==================================================================+
   |   INT from 0 to pi/2 of  sin^m x . cos^n x  dx                   |
   |                                                                  |
   |     [(m-1)(m-3)(m-5)...] x [(n-1)(n-3)(n-5)...]                  |
   |  =  ---------------------------------------------  x  K         |
   |     [ (m+n)(m+n-2)(m+n-4) ...                  ]                 |
   |                                                                  |
   |  Each bracket steps DOWN BY 2, stopping at 2 or 1.               |
   |                                                                  |
   |  K = pi/2   only if  m AND n are BOTH EVEN                       |
   |  K = 1      in every other case                                  |
   +==================================================================+
```

```
   THE RULE IN WORDS:

   Top    :  count down by 2 from (m-1) ,  and count down by 2 from (n-1)
   Bottom :  count down by 2 from (m+n)
   Tail   :  pi/2 only when BOTH powers are even.
```

## 13.4 WORKED EXAMPLES

```
   (a)  INT 0 to pi/2 of sin^2 x cos^2 x dx

        m = 2 , n = 2 , m + n = 4 .   Both EVEN , so K = pi/2 .

              ( 1 ) x ( 1 )     pi        1     pi       pi
        =   ---------------- x ----  =  ----- x ---- =  -----
                4  x  2          2        8      2       16
```
**CHECK independently:**
```
   sin^2 x cos^2 x = (1/4) sin^2 2x = (1/8)( 1 - cos 4x )

   INT 0 to pi/2 (1/8)(1 - cos4x) dx = (1/8)[ x - (sin4x)/4 ] from 0 to pi/2

   = (1/8)[ (pi/2 - 0) - (0 - 0) ]  =  pi/16 .    MATCHES.
```

```
   (b)  INT 0 to pi/2 of sin^3 x cos^2 x dx

        m = 3 , n = 2 , m + n = 5 .   Not both even , so K = 1 .

              ( 2 ) x ( 1 )            2
        =   ---------------- x 1  =  -----
                5  x  3               15
```
**CHECK independently:**
```
   sin^3 x cos^2 x = sin x ( 1 - cos^2 x ) cos^2 x .
   Put t = cos x , dt = - sin x dx ; limits 1 to 0 , flip to 0 to 1 :

   INT 0 to 1 ( 1 - t^2 ) t^2 dt = [ t^3/3 - t^5/5 ] from 0 to 1
                                 = 1/3 - 1/5 = 2/15 .    MATCHES.
```

```
   (c)  INT 0 to pi/2 of sin^4 x cos^5 x dx

        m = 4 , n = 5 , m + n = 9 .   Not both even , K = 1 .

        Top    :  ( 3 x 1 ) x ( 4 x 2 )  =  3 x 8  =  24
        Bottom :  9 x 7 x 5 x 3 x 1      =  945

              24        8
        =   ------  =  -----
              945       315
```
**CHECK independently:**
```
   Put t = sin x :  INT 0 to 1 t^4 ( 1 - t^2 )^2 dt
                  = INT 0 to 1 ( t^4 - 2 t^6 + t^8 ) dt
                  = 1/5 - 2/7 + 1/9
                  = ( 63 - 90 + 35 ) / 315
                  = 8 / 315 .        MATCHES.
```

```
   (d)  INT 0 to pi/2 of sin^6 x dx   ( this is m = 6 , n = 0 )

              ( 5 x 3 x 1 )     pi       15     pi       5 pi
        =   ---------------- x ----  =  ---- x ---- =  --------
              ( 6 x 4 x 2 )      2       48     2         32
```

> **TRAP:** The `pi/2` tail appears **only when both m and n are even**.
> `sin^3 cos^2` has one odd power, so **no pi**. Students who blindly attach
> pi/2 lose the whole question.

> **TRAP:** Wallis is for the limits **0 to pi/2 only**. For `0 to pi` first
> use P5 (Topic 9) to reduce to 0 to pi/2. For `0 to 2pi` use periodicity.

## 13.5 Stretching Wallis to other limits

```
   INT 0 to pi of sin^n x dx      =   2 INT 0 to pi/2 sin^n x dx
                                      (because sin(pi - x) = sin x)

   INT 0 to pi of cos^n x dx      =   0        if n is ODD
                                  =   2 INT 0 to pi/2 cos^n x dx  if n EVEN
                                      (because cos(pi - x) = - cos x)

   INT 0 to 2pi of sin^n x dx     =   0        if n is ODD
                                  =   4 INT 0 to pi/2 sin^n x dx  if n EVEN
```

**Example.** `INT 0 to pi of sin^4 x dx = 2 x (3pi/16) = 3pi/8`.

---

# TOPIC 14 — AREA UNDER A CURVE BETWEEN TWO ORDINATES

An **ordinate** is just a vertical line `x = something`.

```
   +-----------------------------------------------------------------+
   |   AREA between  y = f(x) , the x-axis , x = a and x = b         |
   |                                                                 |
   |          A  =  INT from a to b of  y  dx                        |
   |                                                                 |
   |   (valid when the curve is ABOVE the x-axis throughout)         |
   +-----------------------------------------------------------------+
```

## 14.1 The five-step method — follow it every time

```
   STEP 1.  SKETCH the curve. Mark the region and shade it.
   STEP 2.  Find the LIMITS. Either they are given (x = a, x = b),
            or you find them by solving for where the curve meets the
            x-axis, or where two curves meet.
   STEP 3.  Write  A = INT from a to b of y dx , with y replaced by f(x).
   STEP 4.  Integrate and substitute the limits.
   STEP 5.  Write "square units". Answer must be POSITIVE.
```

The sketch is not decoration. In BIEAP marking schemes the diagram is worth
about **1 of the 7 marks**, and it is what stops you getting the limits wrong.

## 14.2 WORKED EXAMPLE — area under y = sin x from 0 to pi

```
        y
        ^
      1 |         ,---.
        |      ,-'/////'-.
        |    ,'/////////// '.
        |  ,'/////////////// '.
        | //////////////////// \
        +/------------------------\------> x
        0        pi/2             pi

   A  =  INT from 0 to pi of sin x dx

      =  [ - cos x ] from 0 to pi

      =  ( - cos pi ) - ( - cos 0 )

      =  ( 1 )  -  ( - 1 )

      =  2   square units
```

Notice how big that is: the region fits inside a rectangle pi by 1 (area 3.14),
and the answer 2 is about 64% of it. That is the right sort of number for a
sine hump. Good.

## 14.3 WORKED EXAMPLE — area under a parabola

**Find the area bounded by y = 4 - x^2 and the x-axis.**

```
   STEP 1. Sketch. y = 4 - x^2 is an upside-down parabola, vertex (0, 4).

        y
        ^
      4 |         ___
        |      ,-'///'-.
        |    ,'///////// '.
      2 |  ,'///////////// '.
        | /|///////////////| \
        +--+---------------+-----> x
          -2       0        2

   STEP 2. It cuts the x-axis where 4 - x^2 = 0 , that is x = -2 and x = 2.
           Those are the limits — the question did not give them, the curve did.

   STEP 3.
        A  =  INT from -2 to 2 of ( 4 - x^2 ) dx

   Shortcut: the integrand is EVEN (P6), so

        A  =  2 INT from 0 to 2 of ( 4 - x^2 ) dx

   STEP 4.
                     x^3   2                8              16
        A  =  2 [ 4x - --- ]     =  2 ( 8 - --- )  =  2 x  ---
                       3    0                3              3

                32
        A  =   ----   square units
                3

   STEP 5.  32/3 = 10.67 square units.
```

**CHECK:** the region fits inside a 4-by-4 box (area 16). A parabolic segment
takes exactly two thirds of its bounding rectangle: (2/3)(16) = 32/3.
Exactly right. Good.

---

# TOPIC 15 — WHEN PART OF THE REGION IS BELOW THE X-AXIS

## 15.1 The rule

```
   +==================================================================+
   |   1.  Find where the curve CROSSES the x-axis (solve f(x) = 0)   |
   |       inside [a, b].                                             |
   |   2.  SPLIT the integral at each crossing.                       |
   |   3.  Work out each piece separately.                            |
   |   4.  Take the MODULUS of each piece.                            |
   |   5.  ADD them.                                                  |
   |                                                                  |
   |   AREA  =  | INT a to c |  +  | INT c to b |                     |
   +==================================================================+
```

## 15.2 WORKED EXAMPLE — the standard exam version

**Find the area between y = sin x, the x-axis, from x = 0 to x = 2pi.**

```
        y
        ^
      1 |    ,--.
        |  ,'////'.
        | /////////\
        +/-----------\-------------------------> x
        0     pi/2    \  pi       3pi/2      2pi
        |              \         /
        |               '.\\\\\.'
     -1 |                 '---'
                       (this hump is BELOW the axis)

   CROSSING POINTS in [0, 2pi]:  sin x = 0 at x = 0 , pi , 2pi .
   So split at pi.

   Piece 1:  INT 0 to pi of sin x dx  =  [ - cos x ] 0 to pi
                                      =  1 - ( -1 )  =   2

   Piece 2:  INT pi to 2pi of sin x dx = [ - cos x ] pi to 2pi
                                      =  ( -1 ) - ( 1 )  =  - 2

   AREA  =  | 2 |  +  | - 2 |  =  2 + 2  =  4   square units
```

Compare: `INT from 0 to 2pi of sin x dx = 2 + (-2) = 0`.
**The integral is 0. The area is 4.** Both statements are correct answers to
two different questions.

## 15.3 WORKED EXAMPLE — an odd polynomial

**Find the area bounded by y = x^3, the x-axis, x = -1 and x = 1.**

```
        y
        ^
        |            /
      1 |          /
        |        /
        |      /  ////
        +-----+/////-------> x
       -1   / |      1
        |  ///|
        |//   |
     -1 |/    |
        (left part is BELOW the axis)

   x^3 = 0 at x = 0 , which is inside [-1, 1]. Split there.

   Piece 1:  INT -1 to 0 of x^3 dx = [ x^4/4 ] = 0 - 1/4  =  - 1/4
   Piece 2:  INT  0 to 1 of x^3 dx = [ x^4/4 ] = 1/4 - 0  =    1/4

   AREA  =  1/4 + 1/4  =  1/2   square units

   ( whereas  INT from -1 to 1 of x^3 dx = 0 , because x^3 is ODD )
```

> **TRAP:** This is the most-punished mistake in the area section. If the
> question says **"find the area"** you must split at every crossing. If it
> says **"evaluate the integral"** you must not. Read the verb.

---

# TOPIC 16 — AREA WITH RESPECT TO THE Y-AXIS

Sometimes the region is easier to slice horizontally.

```
   +-----------------------------------------------------------------+
   |   AREA between  x = g(y) , the Y-AXIS , y = c and y = d         |
   |                                                                 |
   |          A  =  INT from c to d of  x  dy                        |
   |                                                                 |
   |   Rearrange the curve to get x in terms of y first.             |
   +-----------------------------------------------------------------+
```

```
        y
        ^
      d +-------.
        |///////'.            x = g(y)
        |/////////'.
        |///////////)
        |/////////,'
        |///////,'
      c +------'
        |
        +--------------------------> x
        O

   Horizontal strips: each has height dy and length x.
```

## 16.1 WORKED EXAMPLE

**Find the area bounded by the curve x = y^2, the y-axis, y = 0 and y = 2.**

```
        y
        ^
      2 +-------------.
        |//////////   |     x = y^2
        |///////  ,-'
        |//// ,-'
        |, -'
      0 +------------------> x
        O            4

   A  =  INT from 0 to 2 of x dy  =  INT from 0 to 2 of y^2 dy

           y^3   2       8
      =  [ --- ]     =  ---   square units
            3    0       3
```

**CHECK the other way round.** The whole rectangle from x = 0 to 4, y = 0 to 2
has area 8. The part to the RIGHT of the curve (under y = sqrt x, wait — using
vertical strips: `INT 0 to 4 of sqrt(x) dx = [ (2/3) x^(3/2) ] = (2/3)(8) = 16/3`).
Then 8 - 16/3 = 8/3. **Matches.** Good.

## 16.2 When to slice horizontally

| Slice VERTICALLY (INT y dx) | Slice HORIZONTALLY (INT x dy) |
|---|---|
| the curve is given as y = f(x) | the curve is given as x = g(y) |
| the region is bounded left/right by vertical lines | bounded above/below by horizontal lines |
| the question says "and the x-axis" | the question says "and the y-axis" |

---

# TOPIC 17 — AREA BETWEEN TWO CURVES

```
   +==================================================================+
   |                                                                  |
   |   A  =  INT from a to b of ( y_upper  -  y_lower ) dx            |
   |                                                                  |
   |   where a and b are the x-coordinates of the POINTS OF           |
   |   INTERSECTION of the two curves.                                |
   |                                                                  |
   |   TOP CURVE MINUS BOTTOM CURVE. Always in that order.            |
   +==================================================================+
```

```
        y
        ^
        |            ______  y = upper curve
        |        ,-''//////''-.
        |      ,'/////////////  '.
        |     /////////////////   \
        |    ,'''--..///////..--'''
        |   '        ''----''         y = lower curve
        +---+--------------------+-----------> x
            a                    b

   Each strip has height ( upper - lower ) and width dx.
```

**Why does this work even if part of the region is below the x-axis?**
Because `upper - lower` is the true height of the strip whatever their signs.
The subtraction handles it automatically. This is why "area between two
curves" questions do **not** need the modulus trick — as long as one curve
stays above the other over the whole interval.

## 17.1 The method

```
   STEP 1.  Solve the two equations simultaneously -> intersection points.
   STEP 2.  Sketch. Decide WHICH curve is on top (test one x-value between
            the intersections).
   STEP 3.  A = INT ( top - bottom ) dx , limits = the intersection x's.
   STEP 4.  Integrate, substitute, answer positive, "square units".
```

## 17.2 WORKED EXAMPLE — y = x^2 and y = 2x

```
   STEP 1.  x^2 = 2x   ->   x^2 - 2x = 0   ->   x( x - 2 ) = 0
            x = 0  and  x = 2 .
            Points: ( 0, 0 ) and ( 2, 4 ) .

   STEP 2.  Sketch. Test x = 1 :  line gives 2 ,  parabola gives 1 .
            So the LINE is on top.

        y
        ^
      4 |                 * (2,4)
        |               / |
        |             /   |
        |           / /// *
        |         /  ///
        |       /  //  *
        |     / ///  *
        |   / //  *
        | / /  *
        +*---------------------> x
        0        1        2

   STEP 3.
        A  =  INT from 0 to 2 of ( 2x  -  x^2 ) dx

   STEP 4.
                 x^3   2            8            8       12 - 8      4
      = [ x^2 - ----- ]    =  ( 4 - --- ) - 0 = 4 - --- = -------- = ---
                  3    0             3              3        3        3

        A  =  4/3   square units
```

**CHECK:** The triangle O(0,0), (2,0), (2,4) has area (1/2)(2)(4) = 4.
The area under the parabola from 0 to 2 is 8/3 = 2.67.
Region between line and parabola = 4 - 8/3 = 4/3. **Matches.** Good.

## 17.3 WORKED EXAMPLE — a parabola and a line, one below the axis

**Find the area bounded by y = x^2 and y = x + 2.**

```
   STEP 1.  x^2 = x + 2  ->  x^2 - x - 2 = 0  ->  ( x - 2 )( x + 1 ) = 0
            x = -1  and  x = 2 .

   STEP 2.  Test x = 0 : line gives 2 , parabola gives 0 .
            LINE on top.

        y
        ^
      4 |                        *(2,4)
        |                     ,-'|
        |                  ,-'///|
        |               ,-' /////|
      1 |    *(-1,1) ,-'  //////*
        |     \   ,-'   ///  ,-'
        |      \-'   //   ,-'
        +-------\--------'------------> x
              -1        0     2

   STEP 3.
        A  =  INT from -1 to 2 of [ ( x + 2 ) - x^2 ] dx

   STEP 4.
              x^2               x^3    2
        = [  -----  +  2x   -  ----- ]
               2                 3     -1

        At x =  2 :   2  +  4  -  8/3   =  6 - 8/3  =  10/3
        At x = -1 :  1/2 -  2  +  1/3   =  - 7/6

        A  =  10/3  -  ( - 7/6 )  =  20/6 + 7/6  =  27/6  =  9/2

        A  =  4.5   square units
```

## 17.4 WORKED EXAMPLE — two parabolas (a favourite 7-mark question)

**Find the area between y^2 = 4x and x^2 = 4y.**

```
   STEP 1.  From the second, y = x^2/4 . Put into the first:

            ( x^2/4 )^2  =  4x        ->   x^4 / 16  =  4x
            x^4  =  64 x             ->   x( x^3 - 64 ) = 0
            x = 0   or   x = 4 .
            Points: ( 0, 0 ) and ( 4, 4 ) .

   STEP 2.  Test x = 1 :  y^2 = 4x gives y = 2 ;  x^2 = 4y gives y = 0.25 .
            So  y = 2 sqrt(x)  is on TOP , y = x^2/4 is BELOW.

        y
        ^
      4 |                     *(4,4)
        |               ,-'''/|
        |            ,-'/////,'
        |         ,-'//////,'
        |      ,-'//////,-'
      2 |   ,-'/////,-'
        | ,'///, -'
        +*------------------------> x
        0        2        4

   STEP 3.
                       4  (              x^2 )
        A  =    INT       ( 2 sqrt(x)  - --- ) dx
                       0  (               4  )

   STEP 4.
                  2               x^3    4
        = [ 2 x --- x^(3/2)  -  ------ ]
                  3               12     0

               4                64
        = [   --- x^(3/2)  -  ------ ]  at x = 4 , minus 0
               3                12

               4                64          4              16
        =     --- ( 8 )    -   ----    =   ---- x 8   -   ----
               3                12          3               3

              32     16      16
        =    ----  - ----  = ----
               3      3       3

        A  =  16/3   square units
```

**CHECK:** By symmetry about the line y = x, the two curves are reflections
of each other. The square 4 by 4 has area 16. The region between them should
be a decent fraction of it: 16/3 = 5.33, exactly one third of 16. And the
area under y = 2 sqrt x from 0 to 4 is 32/3 = 10.67, while under y = x^2/4 it
is 16/3 = 5.33 — and 10.67 - 5.33 = 5.33. **Consistent.** Good.

---

# TOPIC 18 — AREAS OF THE CIRCLE, ELLIPSE AND PARABOLA

These three are near-guaranteed 7-mark questions. The working is almost the
same for all three, so learn them as one block.

## 18.1 The standard integral you need

```
   +-----------------------------------------------------------------+
   |                             x                    a^2       x    |
   |   INT sqrt( a^2 - x^2 ) dx = --- sqrt(a^2 - x^2) + --- Sin^-1 (---) + c
   |                              2                      2         a  |
   |                                                                 |
   |   Between 0 and a :                                             |
   |                                                                 |
   |         a                            a^2   pi     pi a^2        |
   |   INT     sqrt(a^2 - x^2) dx =  0 +  --- x ---- = --------      |
   |         0                             2     2        4          |
   +-----------------------------------------------------------------+
```

Check that boundary evaluation:
```
   At x = a :   (a/2) sqrt(a^2 - a^2)  +  (a^2/2) Sin^-1(1)
              =   0    +   (a^2/2)(pi/2)   =   pi a^2 / 4
   At x = 0 :    0     +   (a^2/2) Sin^-1(0)  =  0
```

**And that already IS one quarter of the circle's area.** Good sign.

## 18.2 AREA OF THE CIRCLE x^2 + y^2 = a^2

```
        y
        ^
        |     ,--+--.
        |   ,'////|////'.
        |  ///////|//////\
        | ///  Q1 |  ////  \
        +---------+---------+-----> x
       -a  \//////|//////  a
            '. ///|/// ,'
              '---+---'
                 -a

   By symmetry the circle is FOUR identical quarters. Work out the first
   quadrant piece and multiply by 4.

   In the first quadrant,  y = sqrt( a^2 - x^2 )  and x runs 0 to a.

                         a
        A  =  4  INT        sqrt( a^2 - x^2 ) dx
                         0

                 [  x                     a^2          x   ] a
           =  4  [ --- sqrt(a^2 - x^2) +  ---- Sin^-1( --- )]
                 [  2                      2           a   ] 0

           =  4 [ ( 0  +  (a^2/2)(pi/2) )  -  ( 0 + 0 ) ]

                    a^2     pi
           =  4  x  ---  x  ----
                     2       2

           =  pi a^2
```

```
   +-------------------------------------------+
   |   AREA OF A CIRCLE  =  pi a^2             |
   +-------------------------------------------+
```

You have just derived the formula you learned in class 6. That is what the
7 marks are for.

## 18.3 AREA OF THE ELLIPSE x^2/a^2 + y^2/b^2 = 1

```
        y
        ^
      b |     ,---+---.
        |  ,'///////|///////'.
        | ///////// | ////////\
        +-----------+----------+-----> x
       -a \/////////|////////  a
        |  './//////|///////,'
     -b |     '-----+-----'

   Rearrange for y :

        y^2      x^2            b
        --- = 1 - ---     ->   y = --- sqrt( a^2 - x^2 )     (upper half)
        b^2      a^2            a

   Four equal quadrants again:

                       b       a
        A  =  4   x   ---  INT     sqrt( a^2 - x^2 ) dx
                       a       0

                       b      pi a^2
           =  4   x   ---  x  --------
                       a         4

           =  pi a b
```

```
   +-------------------------------------------+
   |   AREA OF AN ELLIPSE  =  pi a b           |
   +-------------------------------------------+
```

**CHECK:** put b = a and you get pi a^2, the circle. A circle is an ellipse
with equal axes. The formula passes the test. Good.

**Numerical example.** For x^2/9 + y^2/4 = 1: a = 3, b = 2, so area = 6 pi
= 18.85 square units.

## 18.4 AREA OF A PARABOLA CUT OFF BY ITS LATUS RECTUM

For `y^2 = 4ax`, the latus rectum is the vertical line `x = a`.

```
        y
        ^
        |            | x = a
     2a |          ,-*  (a, 2a)
        |      ,-'////|
        |   ,-'///////|
        | ,'//////////|
        +*------------+-------------> x
        0 '.\\\\\\\\\\|
        |    '-.\\\\\\|
    -2a |       '-.\\\*  (a, -2a)
        |

   By symmetry about the x-axis, take the top half and double.

   Top half:  y = sqrt( 4 a x ) = 2 sqrt(a) sqrt(x) ,  x from 0 to a.

                        a
        A  =  2  INT        2 sqrt(a) . sqrt(x) dx
                        0

                                  a
           =  4 sqrt(a)  INT        x^(1/2) dx
                                  0

                          [  2          ] a
           =  4 sqrt(a) x [ --- x^(3/2) ]
                          [  3          ] 0

                8
           =   --- sqrt(a) . a^(3/2)
                3

                8 a^2
           =   -------
                  3
```

```
   +-------------------------------------------+
   |  AREA of y^2 = 4ax up to the latus        |
   |  rectum   =   8 a^2 / 3                   |
   +-------------------------------------------+
```

**CHECK:** The bounding rectangle runs x = 0 to a and y = -2a to 2a, so it is
`a` by `4a` = 4a^2. A parabolic segment takes two thirds of its rectangle:
(2/3)(4a^2) = 8a^2/3. **Matches.** Good.

**CHECK a second way, slicing horizontally:**
```
   x = y^2/(4a) , and the strip runs from the curve to x = a.

   A  =  INT from -2a to 2a of [ a - y^2/(4a) ] dy

      =  2 INT from 0 to 2a of [ a - y^2/(4a) ] dy      (even integrand)

              [        y^3    ] 2a         [        8a^3   ]
      =  2    [ a y - ------- ]      =  2  [ 2a^2 - ------ ]
              [        12 a   ] 0          [         12a   ]

      =  2 [ 2a^2  -  2a^2/3 ]  =  2 x ( 4a^2/3 )  =  8a^2/3     MATCHES.
```

## 18.5 A quick reference table

| Curve | Region | Area |
|---|---|---|
| x^2 + y^2 = a^2 | whole circle | pi a^2 |
| x^2/a^2 + y^2/b^2 = 1 | whole ellipse | pi a b |
| y^2 = 4ax | up to latus rectum x = a | 8 a^2 / 3 |
| y^2 = 4ax | up to x = h | (8/3) sqrt(a) h^(3/2) |
| y^2 = 4ax and x^2 = 4ay | between them | 16 a^2 / 3 |
| y = f(x) upper, y = g(x) lower | between them | INT (f - g) dx |

---

# TOPIC 19 — THE DEFINITE INTEGRAL AS A LIMIT OF A SUM, BACKWARDS
### (converting a limit into an integral — mostly EAPCET / JEE)

Topic 2 went from an integral to a sum. Now go the other way: you are handed
an ugly limit and asked for its value. Turn it into an integral.

```
   +==================================================================+
   |                     n                                            |
   |          lim   1   SUM      (  r  )              1               |
   |         n->inf --         f ( --- )    =    INT     f(x) dx      |
   |                 n   r=1       (  n )              0              |
   |                                                                  |
   |   RECIPE:                                                        |
   |     1.  Force a factor of  1/n  out at the front.  That is dx.   |
   |     2.  Replace every  r/n  by  x .                              |
   |     3.  Limits: lowest value of r/n -> lower limit               |
   |                 highest value of r/n -> upper limit              |
   +==================================================================+
```

## 19.1 WORKED EXAMPLE

```
             [    n         n           n              n     ]
   Find  lim [ ------- + ------- +  ------- + ... + --------- ]
        n->inf[ n^2+1^2   n^2+2^2   n^2+3^2         n^2 + n^2 ]

   The general term is   n / ( n^2 + r^2 ) , r = 1 to n .

   Divide top and bottom by n^2 :

          n              n / n^2               1/n
     ----------  =  ---------------------  =  ---------------
      n^2 + r^2      1  +  ( r/n )^2           1 + ( r/n )^2

   So the sum is

           n     1        1
          SUM   ---  x  ------------
           r=1   n       1 + (r/n)^2

   Now r/n runs from 1/n (-> 0) up to n/n = 1 .

                          1     dx                       1
   LIMIT  =        INT       ---------  =  [ Tan^-1 x ]      =  pi/4
                          0    1 + x^2                    0
```

## 19.2 More of the same shape

```
   lim (1/n)[ 1 + 2 + ... + n ] / n   ->  INT 0 to 1 of x dx  =  1/2

   lim SUM (r=1 to n) of  1/(n + r)   ->  INT 0 to 1 dx/(1+x) = log 2

   lim (1/n) SUM (r=1 to n) sin( r pi / n )
              ->  (1/pi) INT 0 to pi of sin x dx = 2/pi
```

---

# TOPIC 20 — PUTTING IT TOGETHER: A FULL 7-MARK ANSWER

**Evaluate INT from 0 to pi/2 of dx / ( 4 + 5 cos x ).**

This is Chapter 6's `t = tan(x/2)` substitution, done with limits.

```
   STEP 1.  Put   t = tan( x/2 ) .   Then the standard results are

                     2 dt                  1 - t^2                2t
            dx  =  --------  ,   cos x = ---------- ,   sin x = --------
                    1 + t^2               1 + t^2               1 + t^2

   STEP 2.  CHANGE THE LIMITS.

            x = 0      ->   t = tan 0     =  0
            x = pi/2   ->   t = tan(pi/4) =  1

   STEP 3.  Substitute.

                             1 - t^2       4( 1 + t^2 ) + 5( 1 - t^2 )
            4 + 5 cos x = 4+5 -------  =  ----------------------------
                             1 + t^2                1 + t^2

                              4 + 4t^2 + 5 - 5t^2        9 - t^2
                          =  ---------------------  =  -----------
                                    1 + t^2              1 + t^2

                        1      1 + t^2       2 dt              1    2 dt
            I  =   INT       ----------- x  --------  =   INT      --------
                        0      9 - t^2       1 + t^2           0    9 - t^2

   STEP 4.  Standard form:  INT dx/(a^2 - x^2) = (1/2a) log |(a+x)/(a-x)|
            Here a = 3 .

                            1        | 3 + t | 1
            I  =  2  x  --------- log| ----- |
                         2 ( 3 )     | 3 - t | 0

                   1  [     ( 3 + 1 )          ( 3 + 0 ) ]
               =  --- [ log ( ------- )  -  log( ------- )]
                   3  [     ( 3 - 1 )          ( 3 - 0 ) ]

                   1  [                    ]
               =  --- [ log 2   -   log 1  ]
                   3  [                    ]

                   1
            I  =  --- log 2
                   3
```

**CHECK numerically:** (1/3)(0.6931) = 0.231.
The integrand goes from 1/9 = 0.111 (at x = 0) to 1/4 = 0.25 (at x = pi/2),
and is convex, so an average around 0.147 over width 1.571 gives about 0.23.
**Matches.** Good.

---

# THE SEVEN MISTAKES THAT COST THE MOST MARKS

```
   +--+---------------------------------------+------------------------+
   | # | MISTAKE                              | FIX                    |
   +--+---------------------------------------+------------------------+
   | 1 | Substituting but not changing the    | Write "when x = a,     |
   |   | limits                               | t = ...". Every time.  |
   +--+---------------------------------------+------------------------+
   | 2 | F(a) - F(b) instead of F(b) - F(a)   | Say "TOP MINUS BOTTOM" |
   +--+---------------------------------------+------------------------+
   | 3 | Writing + c in a definite integral   | It cancels. Drop it.   |
   +--+---------------------------------------+------------------------+
   | 4 | "Area" answered with a negative      | Split at the crossings |
   |   | number, or with 0                    | and take moduli.       |
   +--+---------------------------------------+------------------------+
   | 5 | Attaching pi/2 in Wallis when one    | pi/2 ONLY if both      |
   |   | power is odd                         | powers are even.       |
   +--+---------------------------------------+------------------------+
   | 6 | Using -a to a symmetry when the      | Test f(-x) first.      |
   |   | function is EVEN and writing 0       | Even DOUBLES.          |
   +--+---------------------------------------+------------------------+
   | 7 | In P3, changing only the trig part   | Replace EVERY x by     |
   |   | and forgetting the lone x            | (a - x).               |
   +--+---------------------------------------+------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
   [ ]  Every definite integral answer is a NUMBER, with no + c.

   [ ]  Every substitution has a line saying what the NEW LIMITS are.

   [ ]  Every [ ] bracket was evaluated as TOP MINUS BOTTOM.

   [ ]  For limits -a to a, I tested f(-x) before doing any algebra.

   [ ]  For limits 0 to 2a, I tested f(2a - x).

   [ ]  For limits 0 to a or a to b with an ugly integrand, I tried
        "call it I, write it twice, add".

   [ ]  Every Wallis answer with an EVEN power contains pi;
        every one with an ODD power does not.

   [ ]  Every AREA question has a SKETCH with the region shaded.

   [ ]  Every AREA answer is POSITIVE and ends with "square units".

   [ ]  Where the curve dips below the x-axis, I split and took moduli.

   [ ]  In every "between two curves" question I wrote
        (upper minus lower), and I checked which one was upper.

   [ ]  Limits of intersection were found by SOLVING the two equations,
        not guessed from the picture.

   [ ]  Every "limit of a sum" question used h = (b-a)/n and the sum
        formulas — NOT F(b) - F(a).

   [ ]  I sanity-checked at least the big answers: is the number roughly
        (average height) x (width)? If not, something is wrong.
```

```
   +------------------------------------------------------------------+
   |  LAST WORD.                                                      |
   |                                                                  |
   |  Definite integrals are the one topic where you can check almost |
   |  every answer yourself:                                          |
   |                                                                  |
   |    - differentiate F(x) and see if you get f(x) back             |
   |    - estimate (average height) x (width) and compare             |
   |    - do an area a second way, slicing the other direction        |
   |                                                                  |
   |  Two minutes of checking has saved more marks in this chapter    |
   |  than two hours of extra practice.                               |
   +------------------------------------------------------------------+
```
