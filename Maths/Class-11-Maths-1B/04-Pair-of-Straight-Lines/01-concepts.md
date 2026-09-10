# Pair of Straight Lines — Concepts, Explained From Zero

**Maths 1B · Chapter 4**

Read this with a pen. Every worked example is done in FULL — copy each one out
by hand once. That is worth ten times more than reading it twice.

Throughout:
`sqrt(x)` = square root, `abs(x)` = absolute value (throw away the minus sign),
`x^2` = x squared, `theta` = the Greek letter for an angle.

---

# TOPIC 1 — WHY ONE EQUATION CAN HOLD TWO LINES

## The everyday idea

If I tell you `A x B = 0`, you know instantly that **A = 0 or B = 0**.
A product is zero only when one of the pieces is zero. That is all this chapter
is built on.

Now take two ordinary straight lines from Chapter 3:

```
        L1 :   2x +  y - 3 = 0
        L2 :    x - 7y + 2 = 0
```

Ask: which points (x, y) lie on **L1 or L2**?
Answer: exactly the points where `(2x + y - 3) x (x - 7y + 2) = 0`.

Multiply that product out:

```
   (2x + y - 3)(x - 7y + 2)

   = 2x.x  + 2x.(-7y) + 2x.2                     ->   2x^2 - 14xy + 4x
   +  y.x  +  y.(-7y) +  y.2                     ->    xy  -  7y^2 + 2y
   + (-3).x + (-3)(-7y) + (-3)(2)                ->   -3x  + 21y   - 6

   Collect:
        x^2 terms :   2x^2
        xy  terms :  -14xy + xy   =  -13xy
        y^2 terms :  -7y^2
        x   terms :   4x - 3x     =   x
        y   terms :   2y + 21y    =   23y
        constant  :  -6

   RESULT:    2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0
```

One equation. Second degree. But its graph is **two straight lines**, not a curve.

```
   The picture:

              y
              ^
              |          \
              |           \  L1 : 2x + y - 3 = 0
       -------+------------\------------------- 
              |          .  \
              |       .      \
              |    .          \
        ------+-------------------------------->  x
           .  |                \
              |                 \
                L2 : x - 7y + 2 = 0

     The single equation  2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0
     draws BOTH of these lines and nothing else.
```

## Reading it backwards

The exam never gives you `L1` and `L2`. It gives you the multiplied-out mess and
says *"show this is a pair of lines"*. So this chapter is the **reverse** journey:

```
   THE EXAM'S JOURNEY

     a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0
                        |
                        |  Is it really a pair of lines?  (the CONDITION)
                        v
                    YES it is
                        |
        +---------------+---------------+
        |               |               |
    What angle      Where do they    What are the
    do they make?   cross?           two separate
                                     equations?
```

## The standard names

Every textbook writes the general second degree equation like this:

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   S  =  a x^2  +  2h xy  +  b y^2  +  2g x  +  2f y  +  c  =  0    |
  |                                                                    |
  |         ^         ^         ^         ^         ^        ^         |
  |         a         2h        b         2g        2f       c         |
  |                                                                    |
  |   NOTE THE TWOS.  The middle three coefficients are written with   |
  |   a 2 in front so that later formulas come out clean.              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

### WORKED EXAMPLE 1.1 — read off a, h, b, g, f, c

Write down a, h, b, g, f, c for `3x^2 - 5xy + 2y^2 + 7x - y + 4 = 0`.

```
   Compare term by term:

     a x^2   = 3x^2       ->   a = 3
     2h xy   = -5xy       ->   2h = -5     ->   h = -5/2
     b y^2   = 2y^2       ->   b = 2
     2g x    = 7x         ->   2g = 7      ->   g = 7/2
     2f y    = -y         ->   2f = -1     ->   f = -1/2
     c       = 4          ->   c = 4
```

**ANSWER:** a = 3, h = -5/2, b = 2, g = 7/2, f = -1/2, c = 4

> **TRAP:** h, g and f are **HALF** the coefficient you see. Students who write
> h = -5 instead of h = -5/2 get every single later step wrong and lose all
> 7 marks. Make "halve the middle three" a reflex.

---

# TOPIC 2 — THE HOMOGENEOUS PAIR: TWO LINES THROUGH THE ORIGIN

## What "homogeneous" means

Homogeneous just means **every term has the same total degree**. In

```
        a x^2  +  2h xy  +  b y^2  =  0
```

every term is degree 2 (`x^2` is degree 2, `xy` is 1 + 1 = 2, `y^2` is degree 2).
There is no `x` term, no `y` term, no plain number.

## Why that forces the lines through the origin

Put `x = 0` and `y = 0` into the equation:

```
        a(0)^2 + 2h(0)(0) + b(0)^2  =  0 + 0 + 0  =  0     TRUE
```

The origin always satisfies it. So **both lines pass through (0, 0)**.

```
        y
        ^        L2
        |       /
        |      /
        |     /          L1
     \  |    /        /
      \ |   /      /
       \|  /    /
   -----O---------------------> x        BOTH lines pass through O.
       /|\    \
      / | \      \
     /  |  \        \
```

A line through the origin has equation `y = m x`, i.e. `y - m x = 0`.
Two of them multiplied:

```
     (y - m1 x)(y - m2 x)  =  0

     y^2 - m2 xy - m1 xy + m1 m2 x^2  =  0

     (m1 m2) x^2  -  (m1 + m2) xy  +  y^2  =  0
```

Compare that with `a x^2 + 2h xy + b y^2 = 0` after dividing the standard form by b:

```
        a          2h
       --- x^2  +  --- xy  +  y^2  =  0
        b           b
```

Matching the pieces:

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |          a                                    -2h                  |
  |   m1 m2 = ---                     m1 + m2  =  -----                |
  |          b                                     b                   |
  |                                                                    |
  |   PRODUCT of slopes = a/b       SUM of slopes = -2h/b              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The other way to see it — the slope equation

Take `a x^2 + 2h xy + b y^2 = 0` and divide every term by `x^2`:

```
                y            y  2
        a + 2h ---  +  b  ( --- )   =  0
                x            x

        Since  y/x = m  (the slope of the line from the origin to the point):

  +--------------------------------------------------------------------+
  |                                                                    |
  |              b m^2  +  2h m  +  a  =  0                            |
  |                                                                    |
  |   THE SLOPE EQUATION. Its two roots are the two slopes m1 and m2.  |
  |                                                                    |
  +--------------------------------------------------------------------+
```

This one line explains everything that follows:

- Sum of roots of `b m^2 + 2h m + a = 0` is `-2h/b`. That is `m1 + m2`.
- Product of roots is `a/b`. That is `m1 m2`.
- Discriminant is `(2h)^2 - 4ba = 4(h^2 - ab)`. So the **nature** of the two
  lines is decided by `h^2 - ab`.

> **TRAP:** if `b = 0` you cannot divide by `x^2` in that way — one of the lines
> is vertical (`x = 0` is a factor). Deal with `b = 0` by factorising directly.
> Example: `3x^2 + 5xy = 0` factorises as `x(3x + 5y) = 0`, giving `x = 0` and
> `3x + 5y = 0`.

### WORKED EXAMPLE 2.1 — find the two separate lines

Find the separate equations of the lines given by `3x^2 + 7xy + 2y^2 = 0`.

**METHOD A — straight factorising (fastest when the numbers are friendly)**

```
   Split the middle term 7xy so the two pieces multiply to 3 x 2 = 6
   and add to 7:      6 and 1.

     3x^2 + 6xy + xy + 2y^2  =  0
     3x(x + 2y) + y(x + 2y)  =  0
     (3x + y)(x + 2y)        =  0
```

**METHOD B — the slope equation (always works)**

```
   a = 3 ,  2h = 7 -> h = 7/2 ,  b = 2

     b m^2 + 2h m + a = 0
        2 m^2 + 7 m + 3 = 0
        (2m + 1)(m + 3) = 0
         m = -1/2   or   m = -3

   Lines:  y = -x/2   ->   x + 2y = 0
           y = -3x    ->   3x + y = 0
```

**ANSWER:** the two lines are `3x + y = 0` and `x + 2y = 0`.

**CHECK (always do this):**
```
   (3x + y)(x + 2y) = 3x^2 + 6xy + xy + 2y^2 = 3x^2 + 7xy + 2y^2   CORRECT
```

**CHECK the slope facts:**
```
   m1 + m2 = -3 + (-1/2) = -7/2 .    -2h/b = -7/2 .     MATCH
   m1 . m2 = (-3)(-1/2)  =  3/2 .     a/b  =  3/2 .     MATCH
```

---

# TOPIC 3 — THE NATURE OF THE PAIR: h^2 - ab DECIDES EVERYTHING

The slope equation `b m^2 + 2h m + a = 0` has discriminant `4(h^2 - ab)`.
So:

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   h^2 - ab  >  0    ->   REAL and DISTINCT lines                   |
  |                          two different lines crossing at O         |
  |                                                                    |
  |   h^2 - ab  =  0    ->   COINCIDENT lines                          |
  |                          the "two" lines are the same line,        |
  |                          drawn twice. The equation is a            |
  |                          perfect square.                           |
  |                                                                    |
  |   h^2 - ab  <  0    ->   IMAGINARY lines                           |
  |                          no real line at all; the ONLY real point  |
  |                          satisfying the equation is the origin.    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

Picture it:

```
   h^2 - ab > 0              h^2 - ab = 0             h^2 - ab < 0
   (real, distinct)          (coincident)             (imaginary)

        \    /                     |                       .
         \  /                      |                    ( just the
          \/                       |                      point O )
          /\                       |
         /  \                      |                       O
        /    \                     |
```

### WORKED EXAMPLE 3.1

State the nature of the lines in each case.

```
  (i)   x^2 - 5xy + 4y^2 = 0
        a = 1 , h = -5/2 , b = 4
        h^2 - ab = 25/4 - 4 = 25/4 - 16/4 = 9/4  >  0
        ->  REAL and DISTINCT
        (indeed it factorises as (x - y)(x - 4y) = 0)

  (ii)  4x^2 + 12xy + 9y^2 = 0
        a = 4 , h = 6 , b = 9
        h^2 - ab = 36 - 36 = 0
        ->  COINCIDENT
        (indeed it is (2x + 3y)^2 = 0 , the single line 2x + 3y = 0 twice)

  (iii) x^2 + xy + y^2 = 0
        a = 1 , h = 1/2 , b = 1
        h^2 - ab = 1/4 - 1 = -3/4  <  0
        ->  IMAGINARY. The only real point on it is (0, 0).
```

> **TRAP:** "imaginary" does NOT mean the question is wrong. It means the answer
> to "find the lines" is *"there are no real lines; the equation represents only
> the point (0,0)"*. Writing that sentence earns the marks.

---

# TOPIC 4 — THE ANGLE BETWEEN THE PAIR

## Building it from Chapter 3

From The Straight Line you know:

```
                        m1 - m2
     tan(theta) = abs( ----------- )
                       1 + m1 m2
```

We know `m1 + m2` and `m1 m2`, but not `m1 - m2` directly. Use the identity:

```
     (m1 - m2)^2  =  (m1 + m2)^2  -  4 m1 m2

                       -2h  2         a
                  =  ( ---- )  -  4 ( --- )
                        b             b

                       4h^2      4a          4h^2 - 4ab       4(h^2 - ab)
                  =   ------  -  ----    =  -------------  =  -------------
                       b^2        b             b^2                b^2

                            2 sqrt(h^2 - ab)
     so   abs(m1 - m2)  =  ------------------
                                abs(b)
```

And the bottom:

```
                        a       a + b
     1 + m1 m2  =  1 + ---  =  -------
                        b         b
```

Divide:

```
                    2 sqrt(h^2 - ab)      abs(b)
     tan(theta) =  ------------------  x  --------
                         abs(b)           abs(a+b)

  +--------------------------------------------------------------------+
  |                                                                    |
  |                          2 sqrt( h^2 - ab )                        |
  |          tan(theta)  =  ----------------------                     |
  |                              abs( a + b )                          |
  |                                                                    |
  |   and the cosine version (handy when a + b = 0):                   |
  |                                                                    |
  |                            abs( a + b )                            |
  |          cos(theta)  =  --------------------------                 |
  |                          sqrt( (a-b)^2 + 4h^2 )                    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The two conditions that fall straight out

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PERPENDICULAR  (theta = 90)                                      |
  |        tan(90) is infinite -> the BOTTOM must be zero              |
  |                                                                    |
  |                    a + b = 0                                       |
  |                                                                    |
  |        In words: coefficient of x^2 + coefficient of y^2 = 0.      |
  |                                                                    |
  |   COINCIDENT / PARALLEL  (theta = 0)                               |
  |        tan(0) = 0 -> the TOP must be zero                          |
  |                                                                    |
  |                    h^2 = ab                                        |
  |                                                                    |
  +--------------------------------------------------------------------+
```

The perpendicular condition `a + b = 0` is the single most useful fact in the
chapter. It is a two-second check with no square roots.

### WORKED EXAMPLE 4.1

Find the angle between the lines `3x^2 + 7xy + 2y^2 = 0`.

```
   a = 3 ,  h = 7/2 ,  b = 2

   h^2 - ab  =  49/4 - 6  =  49/4 - 24/4  =  25/4
   sqrt(h^2 - ab) = 5/2

   a + b  =  5

                  2 x (5/2)        5
   tan(theta) =  ------------  =  ---  =  1
                      5            5

   theta = 45 degrees
```

**ANSWER: 45 degrees**

**CHECK** using the separate lines found in Example 2.1 (`m1 = -3`, `m2 = -1/2`):
```
                    -3 - (-1/2)             -5/2
   tan(theta) = abs(-------------) = abs( --------- ) = abs(-1) = 1   CORRECT
                    1 + (-3)(-1/2)          5/2
```

### WORKED EXAMPLE 4.2

Find the angle between the lines `x^2 - 7xy + 12y^2 = 0`.

```
   a = 1 ,  h = -7/2 ,  b = 12

   h^2 - ab = 49/4 - 12 = 49/4 - 48/4 = 1/4      sqrt = 1/2
   a + b = 13

                  2 x (1/2)        1
   tan(theta) =  -----------  =  -----
                      13           13

   theta = Arctan(1/13)
```

**ANSWER: theta = Arctan(1/13)**

**CHECK:** `x^2 - 7xy + 12y^2 = (x - 3y)(x - 4y)`, so `m1 = 1/3`, `m2 = 1/4`.
```
             1/3 - 1/4          1/12        1/12      1
   abs( --------------------) = ------ = ---------- = ----   CORRECT
          1 + (1/3)(1/4)        13/12      13/12       13
```

### WORKED EXAMPLE 4.3 — a k-question worth 2 marks

Find k if `k x^2 + 5xy - 3y^2 = 0` represents a pair of perpendicular lines.

```
   Perpendicular  <=>  a + b = 0
                       k + (-3) = 0
                       k = 3
```

**ANSWER: k = 3**

Check the pair is real: with k = 3, `h = 5/2`, so
`h^2 - ab = 25/4 - 3(-3) = 25/4 + 9 = 61/4 > 0`. Real and distinct. Good.

### WORKED EXAMPLE 4.4

Show that `x^2 + 2xy cot(alpha) - y^2 = 0` always represents a pair of
perpendicular lines.

```
   a = 1 ,  b = -1

   a + b  =  1 + (-1)  =  0        ->  ALWAYS perpendicular,
                                       whatever alpha is.
```

> **TRAP:** In the angle formula the bottom is `abs(a + b)` — the absolute value.
> If you forget it you can end up with a negative tangent and quote an obtuse
> angle. The convention is that "the angle between two lines" means the ACUTE one
> unless the question says otherwise.

---

# TOPIC 5 — THE BISECTORS OF THE ANGLES BETWEEN THE PAIR

## What a bisector is

Two crossing lines make four angles: two acute and two obtuse (equal in pairs).
The **bisectors** are the two lines that cut those angles exactly in half.
They are always **perpendicular to each other**.

```
                 bisector 2
                     |
         L2  \       |      /  L1
              \      |     /
               \     |    /
                \    |   /
                 \   |  /
   --------------------------------- bisector 1
                 /   |  \
                /    |   \
               /     |    \
              /      |     \
             /       |      \

   The two bisectors always cross at 90 degrees to each other.
```

## The derivation (this is asked as a 7-mark proof)

Let the pair be `a x^2 + 2h xy + b y^2 = 0`, i.e. lines `y = m1 x` and `y = m2 x`
with inclinations `alpha1` and `alpha2` (so `m1 = tan(alpha1)`, `m2 = tan(alpha2)`).

**Step 1.** A bisector sits exactly midway, so if its inclination is `theta`:

```
                alpha1 + alpha2
     theta  =  -----------------          hence     2 theta = alpha1 + alpha2
                       2
```

**Step 2.** Take the tangent of both sides and use `tan(A + B)`:

```
                        tan(alpha1) + tan(alpha2)            m1 + m2
     tan(2 theta)  =  -----------------------------   =   -------------
                       1 - tan(alpha1) tan(alpha2)          1 - m1 m2

                        -2h / b               -2h / b            -2h        2h
                   =  ------------    =    -------------   =   -------  =  -----
                        1 - a/b             (b - a)/b            b - a      a - b
```

**Step 3.** Now let `(x, y)` be any point on that bisector. Then `tan(theta) = y/x`,
so use the double-angle formula:

```
                        2 tan(theta)          2 (y/x)           2xy
     tan(2 theta)  =  ------------------  =  ------------  =  ---------
                       1 - tan^2(theta)       1 - y^2/x^2      x^2 - y^2
```

**Step 4.** The two expressions for `tan(2 theta)` must be equal:

```
          2xy             2h
       ---------   =   -------
        x^2 - y^2       a - b


  +--------------------------------------------------------------------+
  |                                                                    |
  |          x^2 - y^2           x y                                   |
  |         -------------  =  --------          THE BISECTOR PAIR      |
  |            a - b              h                                    |
  |                                                                    |
  |   or, cleared of fractions:                                        |
  |                                                                    |
  |          h ( x^2 - y^2 )  =  ( a - b ) x y                         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**Why it is automatically a perpendicular pair:** write it as
`h x^2 - (a - b) xy - h y^2 = 0`. Its "a" is `h` and its "b" is `-h`, and
`h + (-h) = 0`. Perpendicular. Every time. Use this as your instant check.

### WORKED EXAMPLE 5.1

Find the pair of bisectors of the angles between `x^2 - 5xy + 4y^2 = 0`.

```
   a = 1 ,  h = -5/2 ,  b = 4

      x^2 - y^2        xy
     -----------  =  ------
        1 - 4         -5/2

      x^2 - y^2         2 xy
     -----------  =  - ------
         -3               5

   Cross-multiply:      5 ( x^2 - y^2 )  =  -3 x (-2 xy)  ... careful, do it slowly:

      5 ( x^2 - y^2 )  =  (-3)(-2 xy)  =  6 xy

      5x^2 - 5y^2 - 6xy = 0
```

**ANSWER: `5x^2 - 6xy - 5y^2 = 0`**

**CHECK 1 (perpendicularity):** `5 + (-5) = 0`. Correct — bisectors must be
perpendicular.

**CHECK 2 (numerically):** `x^2 - 5xy + 4y^2 = (x - y)(x - 4y)`, so the original
slopes are 1 and 1/4, i.e. inclinations `45.000` and `14.036` degrees.
Bisector inclinations should be `(45 + 14.036)/2 = 29.518` and `29.518 + 90 = 119.518`.
Their tangents: `tan(29.518) = 0.5662` and `tan(119.518) = -1.7662`.
Now the answer pair `5x^2 - 6xy - 5y^2 = 0` has slope equation
`-5m^2 - 6m + 5 = 0`, i.e. `5m^2 + 6m - 5 = 0`, giving
`m = (-6 +/- sqrt(36 + 100))/10 = (-6 +/- 11.6619)/10`, that is
`0.5662` and `-1.7662`. **MATCH.**

> **TRAP:** if `h = 0` the formula has a zero denominator. That case means the
> pair is already symmetric about the axes (slopes m and -m), and the bisectors
> are simply `x = 0` and `y = 0`, i.e. `xy = 0`.
> If `a = b`, the other denominator vanishes: then the bisectors are
> `x^2 - y^2 = 0`, i.e. `y = x` and `y = -x`.

---

# TOPIC 6 — THE PAIR PERPENDICULAR TO A GIVEN PAIR (THROUGH THE ORIGIN)

If the given pair has slopes `m1` and `m2`, the perpendicular pair through the
origin has slopes `-1/m1` and `-1/m2`.

Derivation:

```
   Perpendicular pair:   ( y + x/m1 )( y + x/m2 ) = 0

                                1     1              1
        y^2  +  xy ( ---  +  --- )  +  x^2 ( ------- )  = 0
                       m1      m2             m1 m2

              m1 + m2        -2h/b       -2h                1        b
   but  ---------------  =  --------  =  -----     and   -------  = ---
             m1 m2            a/b          a              m1 m2      a

                    2h              b
        y^2  -  ---- xy   +   ---- x^2  =  0        (multiply by a)
                    a               a

  +--------------------------------------------------------------------+
  |                                                                    |
  |    Given   a x^2 + 2h xy + b y^2 = 0                               |
  |                                                                    |
  |    Perpendicular pair through O:                                   |
  |                                                                    |
  |            b x^2  -  2h xy  +  a y^2  =  0                         |
  |                                                                    |
  |    (SWAP a and b, and FLIP the sign of h.)                         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

### WORKED EXAMPLE 6.1

Find the pair through the origin perpendicular to `x^2 - 5xy + 4y^2 = 0`.

```
   a = 1 , 2h = -5 , b = 4

   Swap a and b, flip the middle sign:

        4x^2  +  5xy  +  y^2  =  0
```

**CHECK:** original lines have slopes 1 and 1/4, so the perpendicular ones have
slopes -1 and -4. Pair: `(y + x)(y + 4x) = y^2 + 5xy + 4x^2`. **MATCH.**

---

# TOPIC 7 — PRODUCT OF THE PERPENDICULARS FROM A POINT

This is a named 4-mark or 7-mark theorem in the AP syllabus.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Product of perpendicular distances from (alpha, beta) to the     |
  |   pair  a x^2 + 2h xy + b y^2 = 0  is                              |
  |                                                                    |
  |         abs( a alpha^2 + 2h alpha beta + b beta^2 )                |
  |        ----------------------------------------------             |
  |               sqrt( (a - b)^2 + 4 h^2 )                            |
  |                                                                    |
  |   In words: PUT THE POINT INTO THE EQUATION on top;                |
  |             sqrt((a-b)^2 + 4h^2) on the bottom.                    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**Proof sketch (write this out in the exam):** the lines are `m1 x - y = 0` and
`m2 x - y = 0`. The two distances multiply to

```
     abs(m1 alpha - beta) . abs(m2 alpha - beta)
    ---------------------------------------------
      sqrt(1 + m1^2) . sqrt(1 + m2^2)
```

Top `= abs( m1 m2 alpha^2 - (m1 + m2) alpha beta + beta^2 )`
`= abs( (a/b) alpha^2 + (2h/b) alpha beta + beta^2 )`
`= abs( a alpha^2 + 2h alpha beta + b beta^2 ) / abs(b)`.

Bottom squared `= 1 + (m1 + m2)^2 - 2 m1 m2 + (m1 m2)^2`
`= 1 + 4h^2/b^2 - 2a/b + a^2/b^2 = ((a - b)^2 + 4h^2)/b^2`,
so bottom `= sqrt((a-b)^2 + 4h^2)/abs(b)`. The `abs(b)` cancels. Done.

### WORKED EXAMPLE 7.1

Find the product of the perpendiculars from `(1, 1)` to `3x^2 + 7xy + 2y^2 = 0`.

```
   a = 3 , h = 7/2 , b = 2 ,  (alpha, beta) = (1, 1)

   Top   = abs( 3(1) + 7(1)(1) + 2(1) )  =  abs(3 + 7 + 2)  =  12
   Bottom= sqrt( (3 - 2)^2 + 4(7/2)^2 )  =  sqrt( 1 + 49 )  =  sqrt(50)

   Product = 12 / sqrt(50) = 12 / (5 sqrt 2) = 6 sqrt(2) / 5
```

**ANSWER: `6 sqrt(2) / 5`  (about 1.697)**

**CHECK directly** (lines are `3x + y = 0` and `x + 2y = 0` from Example 2.1):
```
   d1 = abs(3 + 1)/sqrt(9 + 1) = 4/sqrt(10) = 1.2649
   d2 = abs(1 + 2)/sqrt(1 + 4) = 3/sqrt(5)  = 1.3416
   product = 1.6971 .        6 sqrt(2)/5 = 1.6971 .   CORRECT
```

---

# TOPIC 8 — AREA OF THE TRIANGLE FORMED WITH A GIVEN LINE

The pair `a x^2 + 2h xy + b y^2 = 0` crosses at the origin; a third line
`l x + m y + n = 0` cuts across both. That makes a triangle.

```
        y
        ^
        |        A
        |       /|\
        |      / | \
        |     /  |  \
        |    /   |   \
        |   /    |    \  <-- the line  l x + m y + n = 0
        |  /     |     \
        | /      |      B
   -----O------------------------> x
       /                  \
      /                    \
   the two lines of  a x^2 + 2h xy + b y^2 = 0

   Triangle  O A B.
```

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                    n^2 . sqrt( h^2 - ab )                          |
  |      AREA   =   ---------------------------------                  |
  |                  abs( a m^2 - 2 h l m + b l^2 )                    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**How to remember the bottom:** it is the original expression `a X^2 + 2h XY + b Y^2`
with `X = m`, `Y = -l`. So put `m` where `x` was and `-l` where `y` was.

**Proof (7-mark version):** the vertices are `O(0,0)` and, solving `y = m1 x` with
the line, `A = ( -n/(l + m m1) , -n m1/(l + m m1) )`, and similarly `B` with `m2`.
Then `Area = (1/2) abs(x_A y_B - x_B y_A) = (1/2) n^2 abs(m2 - m1) / abs((l + m m1)(l + m m2))`.
Expand the bottom: `l^2 + lm(m1 + m2) + m^2 m1 m2 = (b l^2 - 2h l m + a m^2)/b`,
and `abs(m1 - m2) = 2 sqrt(h^2 - ab)/abs(b)`. The `abs(b)` cancels, leaving the
boxed formula.

### WORKED EXAMPLE 8.1

Find the area of the triangle formed by `18x^2 - 9xy + y^2 = 0` and `y = 9`.

```
   a = 18 ,  2h = -9 -> h = -9/2 ,  b = 1
   Line:  y = 9   ->   0.x + 1.y - 9 = 0    so  l = 0 , m = 1 , n = -9

   h^2 - ab = 81/4 - 18 = 81/4 - 72/4 = 9/4        sqrt = 3/2
   n^2 = 81

   a m^2 - 2h l m + b l^2  =  18(1) - 2(-9/2)(0)(1) + 1(0)  =  18

            81 x (3/2)      121.5
   Area  =  ------------  = -------  =  6.75  =  27/4
                18            18
```

**ANSWER: 27/4 square units**

**CHECK by finding the vertices:** `18x^2 - 9xy + y^2 = (3x - y)(6x - y)`, so the
lines are `y = 3x` and `y = 6x`. With `y = 9`: points `(3, 9)` and `(3/2, 9)`.
```
   Area = (1/2) abs( x1 y2 - x2 y1 ) = (1/2) abs( 3(9) - (3/2)(9) )
        = (1/2)(27 - 13.5) = (1/2)(13.5) = 6.75 = 27/4      CORRECT
```

---

# TOPIC 9 — THE GENERAL EQUATION AND THE CONDITION

Now the lines can sit anywhere, not just through the origin.

```
     S  =  a x^2 + 2h xy + b y^2 + 2g x + 2f y + c  =  0
```

Not every such equation is a pair of lines — most are circles, parabolas,
ellipses or hyperbolas. There is one exact test.

```
  +====================================================================+
  |                                                                    |
  |   S = 0 REPRESENTS A PAIR OF STRAIGHT LINES  if and only if        |
  |                                                                    |
  |     (1)  a b c + 2 f g h - a f^2 - b g^2 - c h^2  =  0             |
  |                                                                    |
  |     (2)  h^2  >=  ab      (so the lines are real)                  |
  |                                                                    |
  |   Condition (1) written as a determinant:                          |
  |                                                                    |
  |            +-----------------+                                     |
  |            |  a    h    g    |                                     |
  |            |  h    b    f    |    =   0                            |
  |            |  g    f    c    |                                     |
  |            +-----------------+                                     |
  |                                                                    |
  +====================================================================+
```

## Expanding that determinant, slowly

If you have never expanded a 3x3 determinant, here it is step by step,
along the top row with the sign board `+ - +`:

```
      | a  h  g |
      | h  b  f |
      | g  f  c |

   = + a . | b  f |   - h . | h  f |   + g . | h  b |
           | f  c |         | g  c |         | g  f |

   = a ( bc - f^2 )  -  h ( hc - fg )  +  g ( hf - bg )

   = abc - a f^2  -  c h^2 + fgh  +  fgh - b g^2

   = a b c  +  2 f g h  -  a f^2  -  b g^2  -  c h^2
```

So the two forms are **the same thing**. Quote whichever you like; quoting both
looks good to an examiner.

## The memory rhyme

```
   abc  +  2fgh  -  af^2  -  bg^2  -  ch^2  =  0

   "a-b-c    plus   two-f-g-h    minus   a-f-squared,
    b-g-squared,    c-h-squared"

   Pattern for the last three: each of a, b, c is paired with the SQUARE of the
   letter it does NOT sit next to in the determinant:
        a with f ,  b with g ,  c with h.
```

### WORKED EXAMPLE 9.1 — the classic

Show that `2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0` represents a pair of straight lines.

**Step 1 — write the six numbers (HALVING the middle three):**

```
     a = 2                    2h = -13  ->  h = -13/2
     b = -7                   2g =   1  ->  g =   1/2
     c = -6                   2f =  23  ->  f =  23/2
```

**Step 2 — compute each of the five pieces separately.** Do not try to do it in
one line; that is where errors creep in.

```
     a b c   =  (2)(-7)(-6)                     =   84

                            23     1     -13
     2 f g h =  2 x ( ---- ) ( --- ) ( ----- )
                         2      2        2

             =  2 x ( 23 x 1 x (-13) ) / 8  =  2 x (-299/8)  =  -299/4  =  -74.75

     a f^2   =  2 x (23/2)^2   =  2 x 529/4    =  529/2   =  264.5

     b g^2   =  -7 x (1/2)^2   =  -7 x 1/4     =  -7/4    =  -1.75

     c h^2   =  -6 x (-13/2)^2 =  -6 x 169/4   =  -507/2  =  -253.5
```

**Step 3 — assemble:**

```
     abc + 2fgh - af^2 - bg^2 - ch^2

   =  84  +  (-74.75)  -  264.5  -  (-1.75)  -  (-253.5)

   =  84  -  74.75  -  264.5  +  1.75  +  253.5

   =  (84 + 1.75 + 253.5)  -  (74.75 + 264.5)

   =  339.25  -  339.25

   =  0                                            CONDITION SATISFIED
```

**Step 4 — check the lines are real:**

```
     h^2 = 169/4 = 42.25         ab = (2)(-7) = -14
     h^2 - ab = 42.25 + 14 = 56.25  > 0        REAL and DISTINCT
```

**CONCLUSION:** the equation represents a pair of real distinct straight lines.

---

# TOPIC 10 — SEPARATING THE TWO LINES OF THE GENERAL EQUATION

Two reliable methods.

## METHOD A — factorise the quadratic part first, then patch on constants

```
   STEP 1   Factorise only  a x^2 + 2h xy + b y^2  into  (L)(M).
   STEP 2   Write the answer as  (L + p)(M + q)  with unknowns p, q.
   STEP 3   Multiply out and match the x term, the y term and the constant.
            You get three equations; two of them fix p and q, and the third
            is a free CHECK.
```

### WORKED EXAMPLE 10.1

Separate the lines of `2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0`.

```
   STEP 1  2x^2 - 13xy - 7y^2 .  Split -13xy so pieces multiply to 2 x (-7) = -14
           and add to -13:      -14 and +1.

           2x^2 - 14xy + xy - 7y^2
           = 2x(x - 7y) + y(x - 7y)
           = (2x + y)(x - 7y)

   STEP 2  Assume    (2x + y + p)(x - 7y + q) = 0

   STEP 3  Multiply out and collect:

           x  terms:   2q x + p x        ->  coefficient  2q + p  =  1
           y  terms:   q y - 7p y        ->  coefficient  q - 7p  =  23
           constant:   p q               ->               p q     = -6

           From the first:  p = 1 - 2q
           Substitute:      q - 7(1 - 2q) = 23
                            q - 7 + 14q  = 23
                                    15q  = 30
                                      q  = 2
                            p = 1 - 4 = -3

           CHECK the constant:  p q = (-3)(2) = -6      CORRECT
```

**ANSWER: `2x + y - 3 = 0` and `x - 7y + 2 = 0`**

## METHOD B — treat it as a quadratic in x

Rewrite `S = 0` with x as the unknown and y as a "number", then use the quadratic
formula. This method NEVER fails and needs no guessing.

### WORKED EXAMPLE 10.2 — same equation, method B

```
     2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0

   Group by powers of x:

     2 x^2  +  x (1 - 13y)  +  (-7y^2 + 23y - 6)  =  0

   Quadratic formula with A = 2 , B = (1 - 13y) , C = (-7y^2 + 23y - 6):

     Discriminant = B^2 - 4AC
                  = (1 - 13y)^2  -  8(-7y^2 + 23y - 6)
                  = (169y^2 - 26y + 1)  +  (56y^2 - 184y + 48)
                  = 225y^2 - 210y + 49
                  = (15y - 7)^2                    <- a PERFECT SQUARE

   (It is a perfect square exactly when the equation IS a pair of lines.
    That is a second way of proving the condition!)

              -(1 - 13y)  +/-  (15y - 7)         (13y - 1) +/- (15y - 7)
     x  =  --------------------------------  =  -------------------------
                        4                                   4

     Plus sign :   x = (13y - 1 + 15y - 7)/4  =  (28y - 8)/4  =  7y - 2
                   ->    x - 7y + 2 = 0

     Minus sign:   x = (13y - 1 - 15y + 7)/4  =  (-2y + 6)/4  =  (3 - y)/2
                   ->    2x = 3 - y     ->     2x + y - 3 = 0
```

**Same two lines. CORRECT.**

> **TRAP:** in Method B always simplify the discriminant fully and check it is a
> perfect square in y. If it is not, the equation is NOT a pair of lines and you
> should say so.

---

# TOPIC 11 — THE POINT OF INTERSECTION (THE PARTIAL DERIVATIVE TRICK)

This is the neatest trick in Maths 1B and it appears in the 7-mark question
almost every year.

## The idea

Suppose `S = (L1)(L2)` where `L1` and `L2` are the two linear expressions.
Differentiate with respect to x, holding y fixed (that is what `dS/dx` means here):

```
     dS/dx  =  (dL1/dx) L2  +  L1 (dL2/dx)
```

At the point where the lines **cross**, BOTH `L1 = 0` and `L2 = 0`. So both terms
vanish and `dS/dx = 0` there. The same argument gives `dS/dy = 0`.

So the crossing point is found by solving those two easy LINEAR equations.

## Doing the differentiation

```
     S  =  a x^2 + 2h xy + b y^2 + 2g x + 2f y + c

     dS/dx  =  2a x  +  2h y  +  2g          (y treated as a constant)
     dS/dy  =  2h x  +  2b y  +  2f          (x treated as a constant)

   Set both to zero and cancel the 2:

  +--------------------------------------------------------------------+
  |                                                                    |
  |          a x  +  h y  +  g  =  0                                   |
  |                                                                    |
  |          h x  +  b y  +  f  =  0                                   |
  |                                                                    |
  |   Solve these TWO SIMULTANEOUS EQUATIONS for x and y.              |
  |                                                                    |
  |   Ready-made answer (cross-multiplication):                        |
  |                                                                    |
  |                h f  -  b g                 g h  -  a f             |
  |         x  =  --------------- ,    y  =  ---------------           |
  |                a b  -  h^2                 a b  -  h^2             |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**How to write the two equations without memorising them:** take the top two rows
of the 3x3 determinant and stick `x, y, 1` on them:

```
        | a   h   g |     ->    a x + h y + g = 0
        | h   b   f |     ->    h x + b y + f = 0
        | g   f   c |           (this row is not needed here)
```

### WORKED EXAMPLE 11.1

Find the point of intersection of the lines
`2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0`.

```
   a = 2 , h = -13/2 , b = -7 , g = 1/2 , f = 23/2

   Equation 1:   a x + h y + g = 0
                 2x  -  (13/2) y  +  1/2  =  0        (multiply by 2)
                 4x  -  13 y  +  1  =  0                          ... (I)

   Equation 2:   h x + b y + f = 0
                 -(13/2) x  -  7 y  +  23/2  =  0     (multiply by 2)
                 -13 x  -  14 y  +  23  =  0
                  13 x  +  14 y  -  23  =  0                      ... (II)

   Solve (I) and (II).  From (I):  4x = 13y - 1  ->  x = (13y - 1)/4

   Substitute in (II):
                13 (13y - 1)/4  +  14 y  -  23  =  0        (x4)
                13(13y - 1)  +  56 y  -  92  =  0
                169 y - 13 + 56 y - 92 = 0
                225 y = 105
                y = 105/225 = 7/15

                x = (13(7/15) - 1)/4 = (91/15 - 15/15)/4 = (76/15)/4 = 19/15
```

**ANSWER: the point of intersection is `(19/15 , 7/15)`**

**CHECK 1 — with the ready formula:**
```
   ab - h^2 = (2)(-7) - 169/4 = -14 - 42.25 = -56.25

   x = (h f - b g)/(ab - h^2) = ( (-13/2)(23/2) - (-7)(1/2) ) / (-56.25)
     = ( -74.75 + 3.5 ) / (-56.25) = (-71.25)/(-56.25) = 1.2667 = 19/15   OK

   y = (g h - a f)/(ab - h^2) = ( (1/2)(-13/2) - (2)(23/2) ) / (-56.25)
     = ( -3.25 - 23 ) / (-56.25) = (-26.25)/(-56.25) = 0.4667 = 7/15      OK
```

**CHECK 2 — with the separate lines from Example 10.1:**
```
   2x + y - 3 = 2(19/15) + 7/15 - 3 = 38/15 + 7/15 - 45/15 = 0    OK
   x - 7y + 2 = 19/15 - 49/15 + 30/15 = 0                          OK
```

> **TRAP:** if `ab - h^2 = 0` the ready formula blows up. That means the lines are
> PARALLEL (or coincident) — they have no single point of intersection. Say so.

---

# TOPIC 12 — THE ANGLE FOR THE GENERAL EQUATION

Here is the labour-saving fact of the chapter:

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   The lines of                                                     |
  |        a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0                 |
  |   are PARALLEL to the lines of                                     |
  |        a x^2 + 2h xy + b y^2 = 0                                   |
  |                                                                    |
  |   The g, f, c terms only SHIFT the pair; they never TILT it.       |
  |                                                                    |
  |   So the SAME angle formula works:                                 |
  |                                                                    |
  |                          2 sqrt( h^2 - ab )                        |
  |          tan(theta)  =  ----------------------                     |
  |                              abs( a + b )                          |
  |                                                                    |
  |          PERPENDICULAR  <=>  a + b = 0                             |
  |          PARALLEL       <=>  h^2 = ab                              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

Also, the pair through the ORIGIN parallel to a given pair is simply

```
        a x^2  +  2h xy  +  b y^2  =  0        (drop g, f, c)
```

and the pair through any point `(x0, y0)` parallel to it is

```
        a (x - x0)^2  +  2h (x - x0)(y - y0)  +  b (y - y0)^2  =  0
```

### WORKED EXAMPLE 12.1 — the complete 7-mark answer

Show that `2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0` represents a pair of straight
lines. Find the angle between them and their point of intersection.

```
   PART 1 (2 marks)  --  the condition
      Already done in Example 9.1:  abc + 2fgh - af^2 - bg^2 - ch^2 = 0
      and h^2 - ab = 56.25 > 0, so it IS a pair of real distinct lines.

   PART 2 (2 marks)  --  the angle
      h^2 - ab = 225/4      ->   sqrt(h^2 - ab) = 15/2
      a + b = 2 + (-7) = -5 ->   abs(a + b) = 5

                     2 x (15/2)        15
      tan(theta) =  ------------  =  -----  =  3
                         5             5

      theta = Arctan(3)  (about 71 degrees 34 minutes)

   PART 3 (3 marks)  --  the point of intersection
      Already done in Example 11.1:   (19/15 , 7/15)
```

**CHECK on the angle** using the separate lines `2x + y - 3 = 0` (slope -2) and
`x - 7y + 2 = 0` (slope 1/7):
```
             -2 - 1/7            -15/7
   abs( ------------------ ) = abs(-------) = 3         CORRECT
          1 + (-2)(1/7)            5/7
```

### WORKED EXAMPLE 12.2 — a perpendicular pair

Show that `2x^2 + 3xy - 2y^2 - 5x + 5y - 3 = 0` is a pair of lines and find the
angle between them.

```
   a = 2 , h = 3/2 , b = -2 , g = -5/2 , f = 5/2 , c = -3

   abc     = (2)(-2)(-3) = 12
   2fgh    = 2 (5/2)(-5/2)(3/2) = 2 x (-75/8) = -75/4 = -18.75
   af^2    = 2 (25/4) = 12.5
   bg^2    = -2 (25/4) = -12.5
   ch^2    = -3 (9/4) = -6.75

   Sum = 12 - 18.75 - 12.5 + 12.5 + 6.75 = 0                 IT IS A PAIR

   ANGLE:  a + b = 2 + (-2) = 0        ->  PERPENDICULAR, theta = 90 degrees

   POINT OF INTERSECTION:
       a x + h y + g = 0  ->   2x + (3/2)y - 5/2 = 0   ->  4x + 3y - 5 = 0
       h x + b y + f = 0  ->   (3/2)x - 2y + 5/2 = 0   ->  3x - 4y + 5 = 0

       Solve:  4x + 3y = 5  ... (I)
               3x - 4y = -5 ... (II)

       (I) x 4 :  16x + 12y =  20
       (II) x 3 :  9x - 12y = -15
       Add     :  25x       =   5    ->   x = 1/5
       From (I):  4/5 + 3y = 5  ->  3y = 21/5  ->  y = 7/5
```

**ANSWER: a pair of perpendicular lines meeting at `(1/5 , 7/5)`.**

**CHECK:** factorising, `2x^2 + 3xy - 2y^2 = (x + 2y)(2x - y)`, and matching
constants gives `(x + 2y - 3)(2x - y + 1) = 0`. Slopes `-1/2` and `2`; product
`= -1`, so perpendicular. And `(1/5) + 2(7/5) - 3 = 1/5 + 14/5 - 15/5 = 0`,
`2(1/5) - 7/5 + 1 = 2/5 - 7/5 + 5/5 = 0`. **CORRECT.**

---

# TOPIC 13 — WHEN THE PAIR IS PARALLEL, AND HOW FAR APART

```
  +====================================================================+
  |                                                                    |
  |   S = 0 is a pair of PARALLEL lines  when                          |
  |                                                                    |
  |        h^2 = ab        AND         a f^2 = b g^2                   |
  |                                                                    |
  |   and then the DISTANCE between them is                            |
  |                                                                    |
  |                            g^2 - a c                               |
  |        d  =  2 . sqrt( ----------------- )                         |
  |                          a ( a + b )                               |
  |                                                                    |
  |   or, equivalently,                                                |
  |                            f^2 - b c                               |
  |        d  =  2 . sqrt( ----------------- )                         |
  |                          b ( a + b )                               |
  |                                                                    |
  +====================================================================+
```

## The derivation (a 7-mark proof)

Multiply the whole equation by `a` and complete the square on the `x` part:

```
     a S  =  a^2 x^2 + 2 a h xy + a b y^2 + 2 a g x + 2 a f y + a c

   Since the pair is parallel we have  h^2 = ab , so  a b y^2 = h^2 y^2 :

     a S  =  (a x + h y)^2  +  2 a g x  +  2 a f y  +  a c

   Write  2 a g x = 2 g (a x + h y) - 2 g h y :

     a S  =  (a x + h y)^2  +  2 g (a x + h y)  +  2( a f - g h ) y  +  a c

   The condition  a f^2 = b g^2  (together with h^2 = ab) makes  a f - g h = 0,
   so that middle term disappears:

     a S  =  (a x + h y)^2  +  2 g (a x + h y)  +  a c   =  0

   That is a QUADRATIC in the single quantity  ( a x + h y ) :

     a x + h y  =  -g  +/-  sqrt( g^2 - a c )

   TWO PARALLEL LINES:
        a x + h y + g - sqrt(g^2 - ac) = 0
        a x + h y + g + sqrt(g^2 - ac) = 0

   Distance between parallel lines = abs(c1 - c2)/sqrt(A^2 + B^2)  (Chapter 3):

              2 sqrt(g^2 - ac)            2 sqrt(g^2 - ac)
        d  =  -----------------   =   ---------------------      (using h^2 = ab)
               sqrt(a^2 + h^2)          sqrt(a^2 + a b)

                        g^2 - a c
           =  2 . sqrt( ------------- )
                         a ( a + b )
```

### WORKED EXAMPLE 13.1

Show that `4x^2 + 12xy + 9y^2 + 8x + 12y - 5 = 0` represents a pair of parallel
lines and find the distance between them.

```
   a = 4 , h = 6 , b = 9 , g = 4 , f = 6 , c = -5

   PARALLEL TEST:
      h^2 = 36 ,  ab = 36        ->  h^2 = ab            YES
      a f^2 = 4(36) = 144 ,  b g^2 = 9(16) = 144         YES

   IS IT A PAIR AT ALL?
      abc     = (4)(9)(-5)        = -180
      2fgh    = 2(6)(4)(6)        =  288
      af^2    = 4(36)             =  144
      bg^2    = 9(16)             =  144
      ch^2    = (-5)(36)          = -180
      Sum = -180 + 288 - 144 - 144 + 180 = 0             YES

   DISTANCE:
                    g^2 - a c                 16 - (4)(-5)
      d = 2 sqrt( ------------- ) = 2 sqrt( ---------------- )
                   a ( a + b )                 4 (4 + 9)

                    16 + 20                36              6           6
        = 2 sqrt( ----------- ) = 2 sqrt( ---- ) = 2 x --------- = ---------
                      52                    52          sqrt(52)    sqrt(13)
```

**ANSWER: `d = 6/sqrt(13)`  (about 1.664)**

**CHECK by separating the lines** (use the derivation):
```
   a x + h y = -g +/- sqrt(g^2 - ac) = -4 +/- sqrt(36) = -4 +/- 6

      4x + 6y = 2    ->    2x + 3y - 1 = 0
      4x + 6y = -10  ->    2x + 3y + 5 = 0

   Distance = abs(-1 - 5)/sqrt(4 + 9) = 6/sqrt(13)          CORRECT
```

**CHECK with the other version of the formula:**
```
                f^2 - b c                36 - 9(-5)               81
   2 sqrt( ---------------- ) = 2 sqrt( ------------ ) = 2 sqrt( ----- )
              b ( a + b )                 9 (13)                  117

              9              18          6
   = 2 x ---------  =  ------------ = --------                    CORRECT
          sqrt(117)      3 sqrt(13)    sqrt(13)
```

---

# TOPIC 14 — BISECTORS FOR THE GENERAL EQUATION

The bisector formula of Topic 5 was built around the origin. If the lines cross at
`(x0, y0)` instead, just **shift the origin there**: replace `x` by `x - x0` and
`y` by `y - y0`.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   For  S = a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0             |
  |   meeting at  (x0, y0):                                            |
  |                                                                    |
  |         (x - x0)^2 - (y - y0)^2       (x - x0)(y - y0)             |
  |        ----------------------------  =  ------------------         |
  |                  a - b                          h                  |
  |                                                                    |
  |   i.e.  h [ (x-x0)^2 - (y-y0)^2 ]  =  (a - b)(x-x0)(y-y0)          |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**Order of work:** condition -> point of intersection -> bisectors. You cannot do
the bisectors until you know where the lines meet.

### WORKED EXAMPLE 14.1

Find the bisectors of the angles between the lines
`2x^2 + 3xy + y^2 - 5x - 4y + 3 = 0`.

```
   a = 2 , h = 3/2 , b = 1 , g = -5/2 , f = -2 , c = 3

   IS IT A PAIR?
      abc  = (2)(1)(3) = 6
      2fgh = 2(-2)(-5/2)(3/2) = 2(15/2) = 15
      af^2 = 2(4) = 8
      bg^2 = 1(25/4) = 6.25
      ch^2 = 3(9/4) = 6.75
      6 + 15 - 8 - 6.25 - 6.75 = 0                        YES

   POINT OF INTERSECTION:
      a x + h y + g = 0  ->  2x + 1.5y - 2.5 = 0  ->  4x + 3y - 5 = 0
      h x + b y + f = 0  ->  1.5x + y - 2 = 0     ->  3x + 2y - 4 = 0

      (I) x2 :  8x + 6y = 10
      (II) x3:  9x + 6y = 12
      Subtract:  x = 2 ,  then from 3x + 2y = 4 :  6 + 2y = 4 -> y = -1

      Meeting point  (2, -1)

   BISECTORS:  x0 = 2 , y0 = -1 ,  a - b = 1 ,  h = 3/2

      (3/2) [ (x - 2)^2 - (y + 1)^2 ]  =  (1)(x - 2)(y + 1)

      3 [ (x - 2)^2 - (y + 1)^2 ]  =  2 (x - 2)(y + 1)
```

**ANSWER: `3[(x - 2)^2 - (y + 1)^2] = 2(x - 2)(y + 1)`**

**CHECK:** factorising, `2x^2 + 3xy + y^2 = (x + y)(2x + y)`, and matching gives
`(x + y - 1)(2x + y - 3) = 0`. Both are satisfied at `(2, -1)`:
`2 - 1 - 1 = 0` and `4 - 1 - 3 = 0`. **CORRECT.**
Their slopes are `-1` and `-2`, i.e. inclinations `135` and `116.565` degrees, so
the bisectors should have inclinations `125.783` and `35.783`, with tangents
`-1.3874` and `0.7208`. Putting `X = x - 2`, `Y = y + 1`, the answer reads
`3X^2 - 2XY - 3Y^2 = 0`, whose slope equation is `3m^2 + 2m - 3 = 0`, giving
`m = (-2 +/- sqrt(40))/6 = 0.7208` and `-1.3874`. **CORRECT.**

---

# TOPIC 15 — HOMOGENISATION: LINES FROM THE ORIGIN TO A CHORD

This is the star 7-mark question. Learn the recipe and you own those marks.

## The situation

You are given a **curve** `S = 0` (second degree) and a **line** `L = 0`.
They cut each other at two points A and B. You want the equations of the two
lines `OA` and `OB` joining the ORIGIN to those points — **without ever finding
A and B**.

```
        y
        ^
        |            . - - - .
        |         .            .   A
        |       .               X
        |      .              .  .
        |      .           .      .        <- the line L
        |       .       .          .
        |         . X            .
        |       B    . - -  .
        |    /      /
        |   /     /
        |  /    /
   -----O------------------------------> x
       OB      OA

   The curve and the line meet at A and B.
   We want the PAIR of lines OA and OB, all in one homogeneous equation.
```

Since both `OA` and `OB` pass through the origin, their combined equation MUST be
homogeneous of degree 2: `A x^2 + 2H xy + B y^2 = 0`. So all we need is to
manufacture a homogeneous degree-2 equation that A and B both satisfy.

## The recipe

```
  +====================================================================+
  |                                                                    |
  |   STEP 1   Rearrange the LINE so the right-hand side is exactly 1. |
  |                                                                    |
  |               l x + m y + n = 0                                    |
  |                       l x + m y                                    |
  |               ->     -----------  =  1        call this   U = 1    |
  |                          -n                                        |
  |                                                                    |
  |   STEP 2   Take the curve  a x^2 + 2h xy + b y^2 + 2g x + 2f y + c |
  |            and RAISE EVERY TERM TO DEGREE 2 by multiplying by      |
  |            the right power of U (which is legally just 1):         |
  |                                                                    |
  |            degree 2 terms  ->  leave alone                         |
  |            degree 1 terms  ->  multiply by  U   (once)             |
  |            degree 0 term   ->  multiply by  U^2 (twice)            |
  |                                                                    |
  |            a x^2 + 2h xy + b y^2                                   |
  |                    + ( 2g x + 2f y ) . U   +   c . U^2   =   0     |
  |                                                                    |
  |   STEP 3   Expand and collect. You now have a homogeneous pair.    |
  |                                                                    |
  |   STEP 4   Apply any Topic 1-8 formula: angle, perpendicular,      |
  |            bisectors, whatever the question asked.                 |
  |                                                                    |
  +====================================================================+
```

## Why it is legal

At the points A and B, BOTH the curve equation and `U = 1` are true.
Multiplying a term by `U` there is multiplying by 1 — it changes nothing.
So A and B still satisfy the new equation. And the new equation is homogeneous,
which means whatever it represents passes through the origin. A homogeneous second
degree equation passing through A and B *is* the pair `OA`, `OB`.

## The killer application

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   The chord AB subtends a RIGHT ANGLE at the origin                |
  |                                                                    |
  |             <=>     OA is perpendicular to OB                      |
  |                                                                    |
  |             <=>   (coefficient of x^2) + (coefficient of y^2) = 0  |
  |                    in the homogenised equation                     |
  |                                                                    |
  |   You never even need the xy term for this one.                    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

### WORKED EXAMPLE 15.1 — the standard 7-mark question

Find the angle between the lines joining the origin to the points of intersection
of the curve `x^2 + 2xy + y^2 + 2x + 2y - 5 = 0` and the line `3x - y + 1 = 0`.

```
   STEP 1   Make the line read "something = 1".

            3x - y + 1 = 0     ->     1 = y - 3x
            So    U  =  y - 3x        and     U = 1.

   STEP 2   Homogenise. Degree-1 terms get one U, the constant gets U^2.

            x^2 + 2xy + y^2  +  (2x + 2y)(y - 3x)  -  5 (y - 3x)^2  =  0

   STEP 3   Expand each bracket carefully.

            (2x + 2y)(y - 3x)
              = 2x.y + 2x.(-3x) + 2y.y + 2y.(-3x)
              = 2xy - 6x^2 + 2y^2 - 6xy
              = -6x^2 - 4xy + 2y^2

            (y - 3x)^2 = y^2 - 6xy + 9x^2
            times (-5):  -5y^2 + 30xy - 45x^2

   Collect:
            x^2 :     1  -  6  -  45   =  -50
            xy  :     2  -  4  +  30   =   28
            y^2 :     1  +  2  -   5   =   -2

            -50 x^2 + 28 xy - 2 y^2 = 0

   Divide by -2 (always tidy up):

            25 x^2  -  14 xy  +  y^2  =  0            <- the pair OA, OB

   STEP 4   Angle.   a = 25 ,  2h = -14 -> h = -7 ,  b = 1

            h^2 - ab = 49 - 25 = 24        sqrt(24) = 2 sqrt(6)
            a + b = 26

                           2 x 2 sqrt(6)      4 sqrt(6)      2 sqrt(6)
            tan(theta) =  ---------------  =  ----------  =  ----------
                                26                26             13
```

**ANSWER: `theta = Arctan( 2 sqrt(6) / 13 )`  (about 20 degrees 39 minutes)**

**FULL CHECK — let us actually find A and B and confirm.**
```
   The curve is  (x + y)^2 + 2(x + y) - 5 = 0.  Put u = x + y:
        u^2 + 2u - 5 = 0   ->   u = -1 +/- sqrt(6)

   On the line, y = 3x + 1, so u = x + y = 4x + 1.
        4x + 1 = -1 +/- sqrt(6)   ->   x = (-2 +/- sqrt(6))/4

   A:  x = (-2 + 2.4495)/4 = 0.11237 ,  y = 3(0.11237) + 1 = 1.33712
       slope OA = 1.33712 / 0.11237 = 11.899

   B:  x = (-2 - 2.4495)/4 = -1.11237 ,  y = 3(-1.11237) + 1 = -2.33712
       slope OB = (-2.33712)/(-1.11237) = 2.101

   Do these satisfy  25x^2 - 14xy + y^2 = 0 ,  i.e.  m^2 - 14m + 25 = 0 ?
        m = (14 +/- sqrt(196 - 100))/2 = 7 +/- sqrt(24) = 7 +/- 4.899
          = 11.899  and  2.101                                    MATCH

   Angle:  abs( (11.899 - 2.101)/(1 + 11.899 x 2.101) )
         = abs( 9.798 / 26.00 ) = 0.37685

   And  2 sqrt(6)/13 = 4.89898/13 = 0.37685                       CORRECT
```

### WORKED EXAMPLE 15.2 — the "right angle" version

Show that the lines joining the origin to the points of intersection of
`x^2 - xy + y^2 + 3x + 3y - 2 = 0` and `x - y - sqrt(2) = 0` are mutually
perpendicular.

```
   STEP 1   x - y = sqrt(2)      ->      (x - y)/sqrt(2)  =  1  =  U

   STEP 2   x^2 - xy + y^2 + (3x + 3y).U - 2.U^2 = 0

              x - y                      3 ( x^2 - y^2 )
   (3x + 3y) --------  =  3 (x + y)(x - y)/sqrt(2)  =  ----------------
              sqrt(2)                                      sqrt(2)

              ( x - y )^2         (x - y)^2
   2 . U^2 = 2 ------------  =  2 ----------- = (x - y)^2 = x^2 - 2xy + y^2
                    2                  2

   STEP 3   Put it together:

        x^2 - xy + y^2  +  (3/sqrt2) x^2  -  (3/sqrt2) y^2  -  x^2 + 2xy - y^2 = 0

        x^2 :    1  +  3/sqrt2  -  1   =   3/sqrt2
        xy  :   -1  +  2               =   1
        y^2 :    1  -  3/sqrt2  -  1   =  -3/sqrt2

        (3/sqrt2) x^2  +  xy  -  (3/sqrt2) y^2  =  0

   Multiply through by sqrt(2):

        3 x^2  +  sqrt(2) xy  -  3 y^2  =  0

   STEP 4   Coefficient of x^2 + coefficient of y^2  =  3 + (-3)  =  0
```

**Hence the two lines are PERPENDICULAR. Proved.**

### WORKED EXAMPLE 15.3 — another right-angle proof

Show that the lines joining the origin to the points of intersection of
`7x^2 - 4xy + 8y^2 + 2x - 4y - 8 = 0` and `3x - y = 2` are perpendicular.

```
   STEP 1   3x - y = 2   ->   (3x - y)/2 = 1 = U

   STEP 2   7x^2 - 4xy + 8y^2 + (2x - 4y).U - 8.U^2 = 0

            (2x - 4y)(3x - y)/2 = (x - 2y)(3x - y)
                                = 3x^2 - xy - 6xy + 2y^2
                                = 3x^2 - 7xy + 2y^2

            8 U^2 = 8 (3x - y)^2 / 4 = 2 (9x^2 - 6xy + y^2)
                  = 18x^2 - 12xy + 2y^2      ... with the minus sign:
                  -18x^2 + 12xy - 2y^2

   STEP 3   x^2 :   7  +  3  -  18  =  -8
            xy  :  -4  -  7  +  12  =   1
            y^2 :   8  +  2  -   2  =   8

            -8x^2 + xy + 8y^2 = 0

   STEP 4   -8 + 8 = 0        ->    PERPENDICULAR.   Proved.
```

### WORKED EXAMPLE 15.4 — a condition question

Find the condition that the chord `l x + m y = 1` of the circle `x^2 + y^2 = a^2`
subtends a right angle at the centre (the origin).

```
   The line already reads "= 1", so U = l x + m y.

   Homogenise the circle  x^2 + y^2 - a^2 = 0  :

        x^2 + y^2  -  a^2 ( l x + m y )^2  =  0

        x^2 + y^2  -  a^2 ( l^2 x^2 + 2 l m x y + m^2 y^2 )  =  0

        ( 1 - a^2 l^2 ) x^2  -  2 a^2 l m x y  +  ( 1 - a^2 m^2 ) y^2  =  0

   Right angle  <=>  coefficient of x^2 + coefficient of y^2 = 0 :

        ( 1 - a^2 l^2 ) + ( 1 - a^2 m^2 )  =  0

        2  -  a^2 ( l^2 + m^2 )  =  0
```

**ANSWER: `a^2 ( l^2 + m^2 ) = 2`**

**CHECK with a concrete case:** take `a = 2` (circle `x^2 + y^2 = 4`) and the line
`x + y = 2`, i.e. `l = m = 1/2`. Then `a^2(l^2 + m^2) = 4(1/4 + 1/4) = 2`.
The condition holds, so the chord should subtend 90 degrees.
Indeed the line meets the circle at `(2, 0)` and `(0, 2)`; the lines from the
origin are the x-axis and the y-axis — perpendicular. **CORRECT.**

*(Bonus: the same working shows the lines COINCIDE when `h^2 = ab`, which works
out to `a^2(l^2 + m^2) = 1`. That is exactly the condition for the line to be a
TANGENT — and a tangent meets the circle at one point, so OA and OB collapse into
one line. The algebra agrees with the geometry.)*

> **TRAP 1:** Students forget to square U for the constant term. If the curve has
> `- 5` at the end, it becomes `- 5 U^2`, not `- 5 U`.
>
> **TRAP 2:** If the line passes through the origin, homogenisation is impossible
> (you cannot make the right side 1). But then the whole question is meaningless,
> so this never appears.
>
> **TRAP 3:** Always simplify the final pair by dividing out any common factor.
> Marks are given for a tidy final line.

---

# TOPIC 16 — THE SMALL CONDITIONS EXAMINERS LIKE

These come up as 2-mark questions. Each is one line of algebra from
`m1 + m2 = -2h/b` and `m1 m2 = a/b`.

| Condition asked | Set up | Result |
|---|---|---|
| Sum of slopes = 0 (equally inclined to the axes) | `-2h/b = 0` | **h = 0** |
| Sum of slopes = product of slopes | `-2h/b = a/b` | **a + 2h = 0** |
| One line is the x-axis (`y = 0`) | put y = 0: `a x^2 = 0` | **a = 0** |
| One line is the y-axis (`x = 0`) | put x = 0: `b y^2 = 0` | **b = 0** |
| `y = k x` is one of the lines | root of slope equation | **b k^2 + 2h k + a = 0** |
| Slopes in the ratio `p : q` | `m1 = pt, m2 = qt` | **4 p q h^2 = a b (p + q)^2** |
| One slope is TWICE the other (`1 : 2`) | put p=1, q=2 | **8 h^2 = 9 a b** |
| One slope is THRICE the other (`1 : 3`) | put p=1, q=3 | **3 h^2 = 4 a b** |

### WORKED EXAMPLE 16.1 — deriving the ratio condition

If the slopes of `a x^2 + 2h xy + b y^2 = 0` are in the ratio `p : q`, prove that
`4 p q h^2 = a b (p + q)^2`.

```
   Let  m1 = p t   and   m2 = q t   for some number t.

        m1 + m2 = t (p + q)  =  -2h / b        ...(1)
        m1 m2   = p q t^2    =   a / b         ...(2)

   From (1):    t  =  -2h / ( b (p + q) )

   Put into (2):
                          4 h^2              a
        p q  x  --------------------  =   -----
                  b^2 ( p + q )^2            b

        4 p q h^2  =  a b ( p + q )^2                        PROVED
```

### WORKED EXAMPLE 16.2

If one line of `x^2 + 2h xy + 2y^2 = 0` has slope twice the other, find `h`.

```
   8 h^2 = 9 a b   with  a = 1 , b = 2

   8 h^2 = 18      ->    h^2 = 9/4    ->    h = +/- 3/2
```

**CHECK with `h = 3/2`:** the equation is `x^2 + 3xy + 2y^2 = 0`,
i.e. `(x + y)(x + 2y) = 0`, so the slopes are `-1` and `-1/2`.
`-1 = 2 x (-1/2)`. **One IS twice the other. CORRECT.**

---

# TOPIC 17 — FINDING A MISSING CONSTANT (THE EASIEST 4 MARKS)

The question: *"Find k / lambda so that the equation represents a pair of
straight lines."*

The method is pure arithmetic — write the six letters, substitute into the
condition, solve the little equation.

### WORKED EXAMPLE 17.1

Find `k` if `2x^2 + k xy - 6y^2 + 3x + y + 1 = 0` represents a pair of lines.
Then, for that value, find the angle and the point of intersection.

```
   a = 2 ,  h = k/2 ,  b = -6 ,  g = 3/2 ,  f = 1/2 ,  c = 1

   abc   = (2)(-6)(1)                     = -12
   2fgh  = 2 (1/2)(3/2)(k/2) = 2 (3k/8)   =  3k/4
   af^2  = 2 (1/4)                        =  1/2
   bg^2  = -6 (9/4)                       = -27/2
   ch^2  = 1 (k^2/4)                      =  k^2/4

   Condition:   -12 + 3k/4 - 1/2 - (-27/2) - k^2/4  =  0

                -12 + 13.5 - 0.5 + 0.75k - 0.25 k^2 = 0
                 1 + 0.75 k - 0.25 k^2 = 0            (x by -4)
                 k^2 - 3k - 4 = 0
                 (k - 4)(k + 1) = 0
                 k = 4    or    k = -1
```

**ANSWER: k = 4 or k = -1** (both genuinely work; boards usually take **k = 4**).

**Now take k = 4:** `2x^2 + 4xy - 6y^2 + 3x + y + 1 = 0`.

```
   ANGLE:   a = 2 , h = 2 , b = -6
            h^2 - ab = 4 + 12 = 16      sqrt = 4
            a + b = -4                  abs(a+b) = 4
            tan(theta) = 2(4)/4 = 2     ->   theta = Arctan(2)

   POINT OF INTERSECTION:
            a x + h y + g = 0   ->   2x + 2y + 3/2 = 0   ->  4x + 4y + 3 = 0
            h x + b y + f = 0   ->   2x - 6y + 1/2 = 0   ->  4x - 12y + 1 = 0

            Subtract:   16 y + 2 = 0    ->   y = -1/8
            Then  4x + 4(-1/8) + 3 = 0  ->  4x - 1/2 + 3 = 0
                                        ->  4x = -5/2   ->  x = -5/8
```

**ANSWER: `theta = Arctan(2)`, meeting at `(-5/8 , -1/8)`.**

**CHECK by factorising:** `2x^2 + 4xy - 6y^2 = 2(x + 3y)(x - y)`. Write the pair
as `(x + 3y + p)(2x - 2y + q)`. Matching: `q + 2p = 3`, `3q - 2p = 1`, `pq = 1`.
Adding the first two: `4q = 4`, so `q = 1`, `p = 1`, and `pq = 1`. Correct.
Lines: `x + 3y + 1 = 0` and `2x - 2y + 1 = 0`.
At `(-5/8, -1/8)`: `-5/8 - 3/8 + 1 = 0` and `-10/8 + 2/8 + 1 = 0`. **CORRECT.**
Slopes `-1/3` and `1`; `abs((-1/3 - 1)/(1 - 1/3)) = abs((-4/3)/(2/3)) = 2`. **CORRECT.**

### WORKED EXAMPLE 17.2

Find `lambda` if `x^2 - 3xy + lambda y^2 + 3x - 5y + 2 = 0` is a pair of lines.

```
   a = 1 , h = -3/2 , b = lambda , g = 3/2 , f = -5/2 , c = 2

   abc  = 2 lambda
   2fgh = 2 (-5/2)(3/2)(-3/2) = 2 (45/8) = 45/4 = 11.25
   af^2 = 1 (25/4) = 6.25
   bg^2 = lambda (9/4) = 2.25 lambda
   ch^2 = 2 (9/4) = 4.5

   2 lambda + 11.25 - 6.25 - 2.25 lambda - 4.5 = 0
   -0.25 lambda + 0.5 = 0
   lambda = 2
```

**ANSWER: lambda = 2**

**CHECK:** with `lambda = 2` the equation is `x^2 - 3xy + 2y^2 + 3x - 5y + 2 = 0`.
Quadratic part `= (x - y)(x - 2y)`. Write `(x - y + p)(x - 2y + q)`:
`p + q = 3`, `-2p - q = -5` so `2p + q = 5`, and `pq = 2`.
Subtracting: `p = 2`, `q = 1`, `pq = 2`. Correct.
Lines: `x - y + 2 = 0` and `x - 2y + 1 = 0`, crossing at `(-3, -1)`.
Verify: `-3 + 1 + 2 = 0` and `-3 + 2 + 1 = 0`. **CORRECT.**

### WORKED EXAMPLE 17.3

Find `lambda` if `lambda x^2 + 10xy + 3y^2 - 15x - 21y + 18 = 0` is a pair of lines.

```
   a = lambda , h = 5 , b = 3 , g = -15/2 , f = -21/2 , c = 18

   abc  = lambda (3)(18) = 54 lambda
   2fgh = 2 (-21/2)(-15/2)(5) = 2 (315/4)(5) = 2 (1575/4) = 787.5
   af^2 = lambda (441/4) = 110.25 lambda
   bg^2 = 3 (225/4) = 168.75
   ch^2 = 18 (25) = 450

   54 lambda + 787.5 - 110.25 lambda - 168.75 - 450 = 0
   -56.25 lambda + 168.75 = 0
   lambda = 3
```

**ANSWER: lambda = 3**

**CHECK:** `3x^2 + 10xy + 3y^2 = (3x + y)(x + 3y)`. Write `(3x + y + p)(x + 3y + q)`:
`3q + p = -15`, `q + 3p = -21`, `pq = 18`.
From the first `p = -15 - 3q`; substituting: `q - 45 - 9q = -21`, so `-8q = 24`,
`q = -3`, `p = -6`, and `pq = 18`. Correct.
Lines: `3x + y - 6 = 0` and `x + 3y - 3 = 0`. **CORRECT.**

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Tick each one mentally on every pair-of-lines question.

```
[ ]  Did I write  a = _ , h = _ , b = _ , g = _ , f = _ , c = _  as line 1?

[ ]  Did I HALVE the coefficients of xy, x and y to get h, g, f?

[ ]  Signs: did I carry every minus sign into h, g, f?

[ ]  For the condition, did I compute the five pieces SEPARATELY
     (abc, 2fgh, af^2, bg^2, ch^2) before adding?

[ ]  Did I also check  h^2 >= ab  and say the lines are real?

[ ]  Angle: is my denominator  abs(a + b)  and not just  (a + b) ?

[ ]  Did I spot  a + b = 0  first?  If so the angle is 90 degrees and there
     is no calculation to do at all.

[ ]  Point of intersection: did I check my answer by substituting it back
     into BOTH  a x + h y + g = 0  and  h x + b y + f = 0 ?

[ ]  Bisectors of a GENERAL pair: did I shift to (x0, y0) first?

[ ]  Bisectors: does my answer satisfy  (coeff x^2) + (coeff y^2) = 0 ?
     If not, I have made a mistake.

[ ]  Homogenisation: is the line written as  something = 1  ?

[ ]  Homogenisation: linear terms x U (once), constant term x U^2 (twice)?

[ ]  Did I simplify the final homogeneous pair by dividing out common factors?

[ ]  Did I FACTORISE and verify at least once when time allowed?

[ ]  Did I state the final answer in a sentence, not just leave a number
     floating at the bottom of the page?
```

**One last piece of advice.** In the 7-mark question the marks are split roughly:
2 for the condition, 2 for the angle, 3 for the point of intersection. Those three
parts are independent. Even if you cannot finish one of them, do the other two.
Never leave the question blank because one part went wrong.
