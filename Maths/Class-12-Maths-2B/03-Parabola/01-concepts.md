# Parabola — Concepts, Explained From Zero

**Maths IIB · Chapter 3**

Read this with a pen. Every worked example is written so that you can cover the answer
with your hand and try it first. Nothing here assumes you remember Class 11.

---

# TOPIC 1 — WHAT A CONIC SECTION IS

## 1.1 The cone story

Take two ice-cream cones and join them tip to tip, pointing in opposite directions.
That is a **double cone**. The joining point is the **vertex** (or apex). The line
through both tips is the **axis**. Any straight line lying on the surface is a
**generator** (a "slant side").

Now slice it with a flat sheet of glass. The shape of the cut edge is a **conic section**.

```
                  \       /                       THE DOUBLE CONE
                   \     /
                    \   /
                     \ /
                      X   <-- vertex (apex)
                     / \
                    /   \
                   /     \
                  /       \


   CUT 1: plane perpendicular      CUT 2: plane tilted, still         CUT 3: plane PARALLEL
   to the axis                     cutting only one nappe             to a slant side

        \       /                       \       /                        \       /
      ---+-----+---                   \   \   /                       \    \   /
          \   /                         ---+-+---                       \    +
           \ /                             \ /                            \ /|
                                                                            / |
        CIRCLE                            ELLIPSE                       PARABOLA
        e = 0                             e < 1                          e = 1


   CUT 4: plane steep enough to hit BOTH nappes        CUT 5: plane through the vertex

           |  \       /  |                                   \   /
           |   \     /   |                                    \ /
           |    \   /    |                                     X      -> a POINT,
           +-----\-/-----+                                    / \        one LINE, or a
                  X                                          /   \       PAIR OF LINES
           +-----/-\-----+                                =  DEGENERATE conics
           |    /   \    |
              HYPERBOLA
                e > 1
```

> **TRAP:** Students write "a parabola is a U-shaped curve". That is a description,
> not a definition. In the exam a definition must mention the **focus, the directrix
> and the eccentricity**. A drawing earns no marks by itself.

## 1.2 The focus-directrix definition (this is THE definition)

```
  +--------------------------------------------------------------------------+
  |  Fix a point  S  (the FOCUS) and a line  L  (the DIRECTRIX) not through S.|
  |  Fix a positive number  e  (the ECCENTRICITY).                            |
  |                                                                          |
  |  A CONIC is the set of all points P such that                            |
  |                                                                          |
  |                     SP                                                   |
  |                   ------  =  e          i.e.   SP = e * PM               |
  |                     PM                                                   |
  |                                                                          |
  |  where PM is the PERPENDICULAR distance from P to the directrix.         |
  +--------------------------------------------------------------------------+
```

| e | Name | Shape |
|---|---|---|
| e = 0 | circle | (special case, no directrix) |
| 0 < e < 1 | **ellipse** | closed oval |
| **e = 1** | **PARABOLA** | open, one branch |
| e > 1 | **hyperbola** | open, two branches |

So a **parabola is a conic with eccentricity exactly 1**: every point on it is
*equally far* from the focus and from the directrix.

## 1.3 The general second degree equation and the discriminant test

Every conic in the plane can be written as

```
  +--------------------------------------------------------------------------+
  |     S  =  a x^2  +  2h x y  +  b y^2  +  2g x  +  2f y  +  c  =  0       |
  +--------------------------------------------------------------------------+
```

Two numbers decide what it is.

**(i) The big determinant (also written Delta):**

```
        | a  h  g |
  Delta=| h  b  f |  =  a b c  +  2 f g h  -  a f^2  -  b g^2  -  c h^2
        | g  f  c |
```

**(ii) The small discriminant  h^2 - ab.**

```
  +--------------------------------------------------------------------------+
  |  IF Delta = 0   ->  the conic is DEGENERATE                              |
  |                     (a pair of lines, a single line, or a single point)  |
  |                                                                          |
  |  IF Delta != 0  ->  the conic is PROPER, and                             |
  |                                                                          |
  |        h^2 - a b  <  0  ->  ELLIPSE     (circle if a = b and h = 0)      |
  |        h^2 - a b  =  0  ->  PARABOLA                                     |
  |        h^2 - a b  >  0  ->  HYPERBOLA   (rectangular if a + b = 0)       |
  +--------------------------------------------------------------------------+
```

Memory hook: **"h squared equals ab" is the parabola**. `=` for the middle child.
Less than for the ellipse (the small, closed one), greater than for the hyperbola
(the big, open one).

### WORKED EXAMPLE 1.1
Which conic is `9x^2 - 12xy + 4y^2 + 68x - 54y + 153 = 0` ?

```
  Match term by term with  a x^2 + 2h xy + b y^2 + 2g x + 2f y + c:

      a = 9          2h = -12  ->  h = -6          b = 4
      2g = 68 -> g = 34        2f = -54 -> f = -27      c = 153

  h^2 - a b  =  (-6)^2 - (9)(4)  =  36 - 36  =  0        ->  PARABOLA
```
**ANSWER: a parabola** (this is in fact the parabola with focus (-2, 3) and
directrix 2x + 3y - 4 = 0 — see Worked Example 2.2).

### WORKED EXAMPLE 1.2
Classify `x^2 + 4xy + 4y^2 + 6x + 12y + 9 = 0`.

```
  a = 1 , h = 2 , b = 4 , g = 3 , f = 6 , c = 9

  h^2 - ab = 4 - 4 = 0        looks like a parabola ... CHECK Delta FIRST

  Delta = abc + 2fgh - af^2 - bg^2 - ch^2
        = (1)(4)(9) + 2(6)(3)(2) - (1)(36) - (4)(9) - (9)(4)
        = 36 + 72 - 36 - 36 - 36
        = 0                    ->  DEGENERATE
```
Indeed `x^2 + 4xy + 4y^2 + 6x + 12y + 9 = (x + 2y + 3)^2 = 0`, a **repeated straight line**,
not a parabola.

> **TRAP:** `h^2 = ab` alone does NOT prove a parabola. You must also say `Delta != 0`.
> Examiners give the mark for that sentence.

---

# TOPIC 2 — DERIVING THE STANDARD EQUATION y^2 = 4ax

This derivation is a complete 7-mark Section C question. Learn it as a fixed script.

## 2.1 Setting up the axes cleverly

Let the focus be `S` and the directrix be the line `L`. Drop a perpendicular from `S`
to `L`, meeting it at `Z`. Let `A` be the **midpoint of SZ**.

Because `A` is the midpoint, `AS = AZ`, so `A` itself satisfies "distance to focus =
distance to directrix". So **A is a point of the parabola** — it is the **vertex**.

Now choose axes to make life easy:
- take `A` as the **origin**,
- take the line `ZAS` as the **x-axis**,
- take the perpendicular to it at `A` as the **y-axis**.

Let `AS = a` (so `a > 0`). Then `S = (a, 0)` and `Z = (-a, 0)`, and the directrix,
being perpendicular to the x-axis through `Z`, is the line `x = -a`, i.e. `x + a = 0`.

```
              y
              ^                 directrix  x + a = 0
              |          |
              |  M       |                          .  P(x, y)
        <-----+----------|--------------------------
              |          |         (PM = perpendicular distance to directrix)
      --------+----Z-----A---------S----------------> x
              |  (-a,0) (0,0)    (a,0)
              |          |
              |          |
              |          |
                     <-a-><-a->
```

## 2.2 The algebra

```
  Let P(x, y) be any point on the parabola, and M the foot of the
  perpendicular from P to the directrix.

  BY DEFINITION (e = 1):            SP  =  PM

  SP  =  sqrt( (x - a)^2 + (y - 0)^2 )

  PM  =  perpendicular distance from (x,y) to the line x + a = 0

              | x + a |
         =   -----------   =  | x + a |
             sqrt(1^2)

  SQUARE BOTH SIDES:

        (x - a)^2 + y^2   =   (x + a)^2

        x^2 - 2ax + a^2 + y^2  =  x^2 + 2ax + a^2

        y^2  =  2ax + 2ax

  +--------------------------------------------------------------------------+
  |                          y^2  =  4 a x                                   |
  +--------------------------------------------------------------------------+
```

That is the **standard equation of a parabola**.

**Sanity checks you can write for extra confidence:**
- `x` can never be negative (since `y^2 >= 0` and `a > 0`) — the curve lies entirely
  to the right of the y-axis. Correct: it opens right.
- Replacing `y` by `-y` gives the same equation, so the curve is **symmetric about
  the x-axis**. The x-axis is therefore the **axis of the parabola**.
- Putting `x = 0` gives `y = 0` only — the curve meets its axis at exactly one point,
  the **vertex** (0, 0).

## 2.3 The shape

```
                        y
                        ^
        directrix       |
         x = -a         |        *
            |           |            *
            |           |               *   (a, 2a)  <- end of latus rectum
            |           |                 *
            |           |                  |*
            |           |                  | *
   ---------|-----------A------------------S-------------------> x
            |         (0,0)                |(a,0)
            |           |                  | *
            |           |                  |*
            |           |                 *
            |           |               *      (a, -2a) <- other end
            |           |            *
            |           |        *
                        |
                    <------ latus rectum, length 4a ---->
```

### WORKED EXAMPLE 2.1
Find the equation of the parabola whose focus is `(2, 0)` and whose directrix is `x = -2`.

```
  The focus is on the x-axis, the directrix is vertical, and the vertex
  (midpoint of (2,0) and (-2,0)) is the ORIGIN. So this IS a standard form.

  a = distance from vertex to focus = 2

  y^2 = 4(2)x   ->   y^2 = 8x
```
**ANSWER: y^2 = 8x**

*Check:* take `P = (2, 4)` on it (16 = 8*2 ✓). `SP = sqrt((2-2)^2 + 4^2) = 4`.
`PM = |2 + 2| = 4`. Equal ✓.

### WORKED EXAMPLE 2.2
Find the equation of the parabola with focus `(-2, 3)` and directrix `2x + 3y - 4 = 0`.

Here the axis is slanted, so we must go back to `SP = PM` from first principles.

```
  SP^2 = PM^2

                                     ( 2x + 3y - 4 )^2
     (x + 2)^2 + (y - 3)^2   =    ---------------------
                                       2^2 + 3^2

  MULTIPLY BY 13:

     13(x^2 + 4x + 4) + 13(y^2 - 6y + 9)  =  (2x + 3y - 4)^2

     13x^2 + 52x + 52 + 13y^2 - 78y + 117 = 4x^2 + 9y^2 + 16 + 12xy - 16x - 24y

     13x^2 + 13y^2 + 52x - 78y + 169      = 4x^2 + 9y^2 + 12xy - 16x - 24y + 16

  BRING EVERYTHING LEFT:

     9x^2 - 12xy + 4y^2 + 68x - 54y + 153 = 0
```
**ANSWER: 9x^2 - 12xy + 4y^2 + 68x - 54y + 153 = 0**

*Check:* `h = -6`, `a = 9`, `b = 4`, so `h^2 - ab = 36 - 36 = 0` ✓ it really is a parabola.

> **TRAP:** When squaring `(2x + 3y - 4)` you must remember the **three** cross terms:
> `2(2x)(3y) = 12xy`, `2(3y)(-4) = -24y`, `2(2x)(-4) = -16x`. Dropping one of these
> is the single commonest error in this question.

---

# TOPIC 3 — THE FOUR STANDARD FORMS

The parabola can open right, left, up or down. Same curve, four orientations.
`a` is always taken **positive**.

## 3.1 The four pictures

```
  (1)  y^2 = 4ax            OPENS RIGHT              (2)  y^2 = -4ax        OPENS LEFT
       ------------                                       -------------
             y  |  x = -a                                        y  |    x = a
             ^  |                                                ^  |
             |  |     *                                    *     |  |
             |  |   *                                        *   |  |
       ------+--|---S(a,0)--> x                     <--- S(-a,0)-|--+------ x
             |  |   *                                        *   |  |
             |  |     *                                    *     |  |
             |  |                                                |  |
        directrix x = -a                                  directrix x = a


  (3)  x^2 = 4ay            OPENS UP                 (4)  x^2 = -4ay        OPENS DOWN
       -----------                                        ------------
                 y                                          ------------ y = a
                 ^                                                 y
          *      |      *                                          ^
            *    |    *                                     -------|--------
              *  |  *                                              |
        ---------+---------> x                             ---------+---------> x
                 |   . F(0, a)                                      |  . F(0,-a)
        ---------------------  y = -a                        *      |      *
            directrix                                          *   |    *
                                                                  *|*
```

## 3.2 THE COMPARISON TABLE — learn this, not four derivations

| | **y^2 = 4ax** | **y^2 = -4ax** | **x^2 = 4ay** | **x^2 = -4ay** |
|---|---|---|---|---|
| Opens | RIGHT | LEFT | UPWARD | DOWNWARD |
| Vertex | (0, 0) | (0, 0) | (0, 0) | (0, 0) |
| **Focus** | **(a, 0)** | **(-a, 0)** | **(0, a)** | **(0, -a)** |
| **Directrix** | **x = -a** | **x = a** | **y = -a** | **y = a** |
| Axis | y = 0 (x-axis) | y = 0 (x-axis) | x = 0 (y-axis) | x = 0 (y-axis) |
| Tangent at vertex | x = 0 | x = 0 | y = 0 | y = 0 |
| **Latus rectum length** | **4a** | **4a** | **4a** | **4a** |
| Ends of latus rectum | (a, ±2a) | (-a, ±2a) | (±2a, a) | (±2a, -a) |
| Equation of latus rectum | x = a | x = -a | y = a | y = -a |
| Focal distance of (x1,y1) | x1 + a | a - x1 | y1 + a | a - y1 |
| Parametric point | (a t^2, 2at) | (-a t^2, 2at) | (2at, a t^2) | (2at, -a t^2) |

**How to read any of them in 5 seconds:**

```
  +--------------------------------------------------------------------------+
  |  1.  Which letter is SQUARED?                                            |
  |         y is squared  ->  axis is HORIZONTAL (opens left or right)       |
  |         x is squared  ->  axis is VERTICAL   (opens up or down)          |
  |                                                                          |
  |  2.  What is the SIGN on the other side?                                 |
  |         +  ->  opens towards +x (right)  or +y (up)                      |
  |         -  ->  opens towards -x (left)   or -y (down)                    |
  |                                                                          |
  |  3.  a = (the number in front) / 4.                                      |
  |                                                                          |
  |  4.  The FOCUS is that distance a INSIDE the curve.                      |
  |      The DIRECTRIX is the same distance a OUTSIDE, on the other side.    |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 3.1
Find the focus, directrix, axis and latus rectum of `y^2 = -12x`.

```
  y is squared, sign is MINUS  ->  opens LEFT, form y^2 = -4ax
  4a = 12  ->  a = 3

  Vertex          (0, 0)
  Focus           (-a, 0)  =  (-3, 0)
  Directrix       x = a    =>  x = 3
  Axis            y = 0
  Latus rectum    4a = 12,  ends (-3, 6) and (-3, -6)
```

### WORKED EXAMPLE 3.2
Find the focus and directrix of `x^2 = 6y`.

```
  x is squared, sign PLUS   ->  opens UP,  form x^2 = 4ay
  4a = 6  ->  a = 3/2

  Focus     (0, 3/2)
  Directrix y = -3/2
  Axis      x = 0
  LR        4a = 6 ,  ends ( 3, 3/2 ) and ( -3, 3/2 )
```
*Check the ends:* put y = 3/2 into x^2 = 6y: x^2 = 9, x = ±3 ✓ length = 6 = 4a ✓.

### WORKED EXAMPLE 3.3
Find the latus rectum of `3y^2 = 5x`.

```
  DIVIDE BY 3 FIRST.        y^2 = (5/3) x
  4a = 5/3    ->    a = 5/12
  Latus rectum = 4a = 5/3
```

> **TRAP:** Never read `4a` off an equation that still has a number in front of the
> square term. `3y^2 = 5x` does NOT have `4a = 5`. Always make the coefficient of the
> squared term exactly 1 first.

---

# TOPIC 4 — THE VOCABULARY (every word can be a 2-mark question)

```
                            y
                            ^                      L  (end of latus rectum)
          directrix         |                      *
            x = -a          |                  *   |
              |             |               *      |
              |    M -------|------------ P(x1,y1) |         ...... DOUBLE ORDINATE
              |             |            *         |               (any chord
              |             |          *   \       |               perpendicular
              |             |        *      \      |               to the axis)
   -----------|-------------A--------*-------S-----|----------------> x
              |          VERTEX      *      /(a,0) |
              |          (0,0)         *   /       |
              |             |            * FOCAL   |
              |             |               *CHORD |
              |             |                  *   |
              |             |                      *
              |             |                      L'
              |<---- a ---->|<----- a ---->|
                        AXIS = the x-axis
```

| Word | Meaning | For y^2 = 4ax |
|---|---|---|
| **Focus** | the fixed point S | (a, 0) |
| **Directrix** | the fixed line | x = -a |
| **Axis** | line through focus perpendicular to directrix; the curve is symmetric about it | y = 0 |
| **Vertex** | the point where the curve meets its own axis (midpoint of S and Z) | (0, 0) |
| **Chord** | any segment joining two points of the parabola | — |
| **Focal chord** | a chord that passes **through the focus** | — |
| **Focal distance** | distance from a point of the curve to the focus | SP = x1 + a |
| **Double ordinate** | a chord **perpendicular to the axis** (not necessarily through S) | x = k |
| **Latus rectum** | the **focal chord perpendicular to the axis** — i.e. the double ordinate through the focus | x = a, length **4a** |
| **Tangent at the vertex** | the line touching the curve at the vertex | x = 0 |

## 4.1 Why the latus rectum is 4a — a two-line proof worth 2 marks

```
  The latus rectum is the double ordinate through the focus, so put x = a
  into  y^2 = 4ax :

           y^2 = 4a(a) = 4a^2      ->     y = +2a  or  y = -2a

  Ends are ( a , 2a ) and ( a , -2a ).

  LENGTH = 2a - (-2a) = 4a.
```

## 4.2 Double ordinate vs latus rectum

```
    Every LATUS RECTUM is a double ordinate.
    Not every double ordinate is a latus rectum
    (only the one that passes through the focus is).

    Length of the double ordinate at x = k  (on y^2 = 4ax):
              y^2 = 4ak  ->  y = ± 2 sqrt(ak)  ->  LENGTH = 4 sqrt(ak)
    Putting k = a gives 4 sqrt(a*a) = 4a, the latus rectum. Consistent.
```

### WORKED EXAMPLE 4.1
Find the length of the double ordinate of `y^2 = 8x` drawn at `x = 4`, and check
against the latus rectum.

```
  a = 2.
  At x = 4:  y^2 = 32  ->  y = ± 4 sqrt(2)
  LENGTH = 8 sqrt(2)  (approximately 11.31)

  Latus rectum = 4a = 8. The double ordinate is further from the vertex,
  so it is longer. Sensible.
```

---

# TOPIC 5 — FOCAL DISTANCE

## 5.1 The formula

For `y^2 = 4ax` and a point `P(x1, y1)` **on** the parabola:

```
  +--------------------------------------------------------------------------+
  |     Focal distance   S P   =   x1  +  a                                  |
  +--------------------------------------------------------------------------+
```

**Why:** by the very definition of the parabola, `SP = PM` = the perpendicular
distance from `P` to the directrix `x = -a`, which is `|x1 - (-a)| = x1 + a`
(and `x1 >= 0` on this curve, so no modulus is needed).

That is the whole proof. Two lines. It is regularly asked as a 2-mark question.

```
        directrix
         x = -a
           |
           | <------------ x1 + a ------------> |
           |                                    |
     M ----+------------------------------------ P(x1, y1)
           |                                   /
           |                                  /
           |                                 /  SP = PM  = x1 + a
           |                            S   /
   --------+-------------A------------(a,0)
```

The other three forms, by the same argument:

| Form | Focal distance of (x1, y1) |
|---|---|
| y^2 = 4ax | x1 + a |
| y^2 = -4ax | a - x1 |
| x^2 = 4ay | y1 + a |
| x^2 = -4ay | a - y1 |

## 5.2 Focal distance and the sum-of-distances idea

For an **ellipse** the sum of the distances to the **two** foci is constant.
A parabola is what happens when one focus runs off to infinity — so instead of
"sum of two focal distances", a parabola obeys

```
      distance to the FOCUS   =   distance to the DIRECTRIX
```

which is exactly the `SP = PM` relation. When you are asked "state the property
of the focal distance", write: **for every point of a parabola the focal distance
equals its perpendicular distance from the directrix**, and hence for `y^2 = 4ax`
it equals `x1 + a`, which grows linearly as the point moves away from the vertex.

A companion fact for the two ends of a **focal chord** `P(t1)`, `Q(t2)`:

```
      SP = a(t1^2 + 1)  ,  SQ = a(t2^2 + 1)

                                          1     1     1
      and with t1 t2 = -1  it follows    --- + ---  = ---
                                          SP    SQ     a

      i.e. the SEMI-LATUS RECTUM (2a) is the HARMONIC MEAN of the two
      pieces of any focal chord:      2a = 2 SP.SQ / (SP + SQ)
```

*Verify with the latus rectum itself:* there `SP = SQ = 2a`, and
`1/(2a) + 1/(2a) = 1/a` ✓.

### WORKED EXAMPLE 5.1
Find the point(s) on `y^2 = 12x` whose focal distance is 10.

```
  4a = 12  ->  a = 3
  x1 + a = 10   ->   x1 + 3 = 10   ->   x1 = 7
  y1^2 = 12(7) = 84   ->   y1 = ± sqrt(84) = ± 2 sqrt(21)
```
**ANSWER: ( 7 , 2 sqrt(21) ) and ( 7 , -2 sqrt(21) )**

*Check:* `SP = sqrt((7-3)^2 + 84) = sqrt(16 + 84) = sqrt(100) = 10` ✓

### WORKED EXAMPLE 5.2
The focal distance of a point on `y^2 = 16x` is 8. Find its abscissa.

```
  a = 4.    x1 + 4 = 8   ->   x1 = 4.
```
(That point is `(4, ±8)` — the ends of the latus rectum, and indeed each end is
`2a = 8` from the focus ✓.)

---

# TOPIC 6 — THE PARABOLA WITH VERTEX AT (h, k)

## 6.1 Shifting

Slide the whole picture so the vertex moves from `(0,0)` to `(h,k)`.
Replace `x` by `x - h` and `y` by `y - k`. The axis stays **parallel** to a coordinate axis.

```
  +--------------------------------------------------------------------------+
  |  (y - k)^2 =  4a(x - h)    opens RIGHT                                   |
  |  (y - k)^2 = -4a(x - h)    opens LEFT                                    |
  |  (x - h)^2 =  4a(y - k)    opens UP                                      |
  |  (x - h)^2 = -4a(y - k)    opens DOWN                                    |
  +--------------------------------------------------------------------------+
```

| | (y-k)^2 = 4a(x-h) | (y-k)^2 = -4a(x-h) | (x-h)^2 = 4a(y-k) | (x-h)^2 = -4a(y-k) |
|---|---|---|---|---|
| Vertex | (h, k) | (h, k) | (h, k) | (h, k) |
| Focus | (h + a, k) | (h - a, k) | (h, k + a) | (h, k - a) |
| Directrix | x = h - a | x = h + a | y = k - a | y = k + a |
| Axis | y = k | y = k | x = h | x = h |
| Latus rectum | 4a | 4a | 4a | 4a |

**The pattern in words:** the focus is `a` units from the vertex, *inside* the curve;
the directrix is `a` units from the vertex, *on the opposite side*.

## 6.2 Reducing a general equation by completing the square

This is the single most-asked 7-mark question in the chapter. Fixed procedure:

```
  +--------------------------------------------------------------------------+
  |  STEP 1  Spot which variable is squared. Put ALL of that variable's       |
  |          terms on the left, everything else on the right.                 |
  |                                                                          |
  |  STEP 2  Make the coefficient of the squared term equal to 1              |
  |          (divide the whole equation if necessary).                        |
  |                                                                          |
  |  STEP 3  COMPLETE THE SQUARE:  y^2 + py  ->  (y + p/2)^2 - (p/2)^2        |
  |                                                                          |
  |  STEP 4  Tidy the right side into  4a ( x - h )  form by taking the       |
  |          coefficient of x out as a factor.                                |
  |                                                                          |
  |  STEP 5  Read off h, k, 4a. Then write vertex, focus, directrix,          |
  |          axis and latus rectum from the table.                            |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 6.1 (the classic)
Find the vertex, focus, directrix, axis and latus rectum of
`y^2 - 4y + 4x + 8 = 0`.

```
  STEP 1   y^2 - 4y  =  -4x - 8

  STEP 2   coefficient of y^2 is already 1.

  STEP 3   y^2 - 4y + 4  =  -4x - 8 + 4          (add 4 to BOTH sides)
           (y - 2)^2     =  -4x - 4

  STEP 4   (y - 2)^2     =  -4 ( x + 1 )
                         =  -4 ( x - (-1) )

  STEP 5   Compare with (y - k)^2 = -4a(x - h):

              k = 2 ,  h = -1 ,  4a = 4  ->  a = 1
              MINUS sign  ->  OPENS LEFT

           VERTEX      ( h , k )      = ( -1 , 2 )
           FOCUS       ( h - a , k )  = ( -2 , 2 )
           DIRECTRIX   x = h + a      =>  x = 0     (the y-axis!)
           AXIS        y = k          =>  y = 2
           LATUS RECTUM  4a = 4
```

*Check by the definition:* take the vertex `(-1, 2)`. Distance to focus `(-2,2)` is 1.
Distance to the directrix `x = 0` is 1 ✓. Take another point: put `y = 0` in the
original equation: `0 - 0 + 4x + 8 = 0` → `x = -2`, so `(-2, 0)` is on the curve.
`S(-2,2)` to `(-2,0)` is 2. Distance to `x = 0` is 2 ✓.

```
                y
                ^          directrix x = 0
       *        |
          *     |
             *  |
   ------------ + ------  y = 2 (axis)
      V(-1,2)   |
   S(-2,2) .    |
             *  |
          *     |
       *        |
   -------------+------------------> x
                |
        opens LEFT
```

### WORKED EXAMPLE 6.2
Reduce `y^2 - 8y - x + 19 = 0` and find all its elements.

```
  y^2 - 8y      =  x - 19
  y^2 - 8y + 16 =  x - 19 + 16
  (y - 4)^2     =  x - 3
                =  1 ( x - 3 )

  4a = 1  ->  a = 1/4 ,  opens RIGHT

  VERTEX     ( 3 , 4 )
  FOCUS      ( 3 + 1/4 , 4 )  =  ( 13/4 , 4 )
  DIRECTRIX  x = 3 - 1/4      =>  x = 11/4
  AXIS       y = 4
  LATUS RECTUM  4a = 1
```

### WORKED EXAMPLE 6.3
Reduce `x^2 - 2x + 4y - 3 = 0`.

```
  x^2 - 2x      =  -4y + 3
  x^2 - 2x + 1  =  -4y + 3 + 1
  (x - 1)^2     =  -4y + 4  =  -4( y - 1 )

  4a = 4 -> a = 1 ,  OPENS DOWN

  VERTEX     ( 1 , 1 )
  FOCUS      ( 1 , 1 - 1 ) = ( 1 , 0 )
  DIRECTRIX  y = 1 + 1  =>  y = 2
  AXIS       x = 1
  LATUS RECTUM 4
```
*Check:* put `y = 0` in the original: `x^2 - 2x - 3 = 0` → `(x-3)(x+1) = 0` →
points `(3,0)` and `(-1,0)`. Distance from `(3,0)` to focus `(1,0)` is 2;
distance to directrix `y = 2` is 2 ✓.

### WORKED EXAMPLE 6.4
Find the equation of the parabola with vertex `(3, -2)` and focus `(3, 1)`.

```
  Vertex and focus have the SAME x, so the axis is VERTICAL: x = 3.
  The focus is ABOVE the vertex  ->  opens UP.
  a = distance from vertex to focus = |1 - (-2)| = 3.

  (x - 3)^2 = 4(3)( y + 2 )

  (x - 3)^2 = 12 ( y + 2 )
```
*Check:* directrix would be `y = -2 - 3 = -5`. Take `x = 9`: `36 = 12(y+2)` → `y = 1`.
Point `(9, 1)`: distance to focus `(3,1)` = 6; distance to `y = -5` = 6 ✓.

> **TRAP:** When completing the square, whatever you add on the left you must add on
> the right. Half the lost marks in this chapter come from adding 4 to only one side.

> **TRAP:** After factorising, `-4x - 4` becomes `-4(x + 1)`, so `h = -1`, NOT `+1`.
> Write the bracket as `(x - h)` explicitly: `-4(x - (-1))`.

---

# TOPIC 7 — PARAMETRIC FORM

## 7.1 The point (a t^2, 2 a t)

Instead of dragging around `x` and `y` tied by `y^2 = 4ax`, use one free number `t`:

```
  +--------------------------------------------------------------------------+
  |     x = a t^2        y = 2 a t          "the point t"  P(t)              |
  |                                                                          |
  |  CHECK:  y^2 = (2at)^2 = 4 a^2 t^2 = 4a (a t^2) = 4a x    ✓              |
  +--------------------------------------------------------------------------+
```

Useful values:

| t | Point | Which point |
|---|---|---|
| 0 | (0, 0) | vertex |
| 1 | (a, 2a) | upper end of latus rectum |
| -1 | (a, -2a) | lower end of latus rectum |
| 2 | (4a, 4a) | the point where y = x (other than the vertex) |
| t | (a t^2, 2at) | general |

To go **backwards** from a point to its parameter: `t = y1 / (2a)`.

### WORKED EXAMPLE 7.1
Find the parameter of the point `(8, 8)` on `y^2 = 8x`.

```
  a = 2.   t = y1/(2a) = 8/4 = 2.
  Check:  ( a t^2 , 2at ) = ( 2*4 , 2*2*2 ) = ( 8 , 8 )  ✓
```

## 7.2 The chord joining t1 and t2

```
  P = ( a t1^2 , 2 a t1 )         Q = ( a t2^2 , 2 a t2 )

                 2a t1 - 2a t2          2a ( t1 - t2 )              2
  SLOPE  m  =  -------------------  = -------------------------  = -------
                 a t1^2 - a t2^2        a (t1-t2)(t1+t2)            t1 + t2

  y - 2a t1  =  ------ ( x - a t1^2 )
                 t1+t2

  (t1 + t2) y - 2a t1(t1 + t2)  =  2x - 2a t1^2

  (t1 + t2) y - 2a t1^2 - 2a t1 t2  =  2x - 2a t1^2

  +--------------------------------------------------------------------------+
  |          ( t1 + t2 ) y  =  2 x  +  2 a t1 t2                             |
  |                                                       2                  |
  |          slope of the chord  =  --------------                           |
  |                                     t1 + t2                              |
  +--------------------------------------------------------------------------+
```

*Sanity check:* let `t2 -> t1`. The chord becomes the tangent at `t1`:
`2 t1 y = 2x + 2a t1^2` → `t1 y = x + a t1^2` — exactly the tangent formula in Topic 9 ✓.

### WORKED EXAMPLE 7.2
Find the chord of `y^2 = 8x` joining the points `t = 1` and `t = 3`.

```
  a = 2.   (t1 + t2) y = 2x + 2a t1 t2
           4 y = 2x + 2(2)(3)
           4 y = 2x + 12
            2y = x + 6      ->   x - 2y + 6 = 0
```
*Check:* `t=1` gives `(2, 4)`: `2 - 8 + 6 = 0` ✓. `t=3` gives `(18, 12)`:
`18 - 24 + 6 = 0` ✓.

---

# TOPIC 8 — POSITION OF A POINT (inside / on / outside)

Write the parabola as `S = y^2 - 4ax` (everything on the left, `= 0`).
Substitute the point to get `S1 = y1^2 - 4a x1`.

```
  +--------------------------------------------------------------------------+
  |      S1  <  0    ->   P lies INSIDE  the parabola (same side as focus)   |
  |      S1  =  0    ->   P lies ON      the parabola                        |
  |      S1  >  0    ->   P lies OUTSIDE the parabola                        |
  +--------------------------------------------------------------------------+
```

**How to remember which way round:** put in the focus itself, `(a, 0)`:
`S1 = 0 - 4a(a) = -4a^2`, which is **negative**. The focus is obviously inside.
So **negative = inside**. Never memorise it; regenerate it in three seconds.

```
              OUTSIDE  (S1 > 0)
                              *
                            *
                          *      INSIDE (S1 < 0)
                        *   . S
                          *
                            *
                              *
              OUTSIDE  (S1 > 0)
```

### WORKED EXAMPLE 8.1
Where do `(2, 3)`, `(1, 2)` and `(-1, 2)` lie with respect to `y^2 = 4x`?

```
  a = 1 ,  S = y^2 - 4x

  (2, 3):   S1 = 9 - 8   =  1  > 0   ->  OUTSIDE
  (1, 2):   S1 = 4 - 4   =  0        ->  ON the parabola
  (-1, 2):  S1 = 4 + 4   =  8  > 0   ->  OUTSIDE   (it is on the directrix x = -1)
```

**Why it matters:** you can draw **two real tangents** from a point only if it is
OUTSIDE (`S1 > 0`). From an inside point there are none. This is the first line of
every "pair of tangents" answer.

---

# TOPIC 9 — TANGENTS

## 9.1 Condition for y = mx + c to touch y^2 = 4ax

```
  Substitute  y = m x + c  into  y^2 = 4 a x :

        ( m x + c )^2 = 4 a x

        m^2 x^2 + 2 m c x + c^2 - 4 a x = 0

        m^2 x^2 + (2 m c - 4 a) x + c^2 = 0

  A TANGENT touches at ONE point, so this quadratic must have EQUAL roots:

        DISCRIMINANT = 0

        (2 m c - 4a)^2 - 4 m^2 c^2 = 0

        4 m^2 c^2 - 16 a m c + 16 a^2 - 4 m^2 c^2 = 0

        -16 a m c + 16 a^2 = 0

        a m c = a^2      ->      m c = a

  +--------------------------------------------------------------------------+
  |                            c  =  a / m                                   |
  |                                                                          |
  |     so every tangent of slope m is      y = m x + a/m   (m != 0)         |
  |                                                                          |
  |     POINT OF CONTACT     ( a / m^2 ,  2a / m )                           |
  +--------------------------------------------------------------------------+
```

**Point of contact:** with `c = a/m` the quadratic becomes
`m^2 x^2 - 2a x + a^2/m^2 = 0`, whose repeated root is `x = a/m^2`;
then `y = m(a/m^2) + a/m = 2a/m`.

*Check it is on the curve:* `(2a/m)^2 = 4a^2/m^2 = 4a(a/m^2)` ✓

The same test for a line in general form:

```
  +--------------------------------------------------------------------------+
  |    l x + m y + n = 0  touches  y^2 = 4 a x    <=>    l n  =  a m^2       |
  +--------------------------------------------------------------------------+
```
(Rearranged: `y = -(l/m)x - n/m`, so slope `M = -l/m`, `c = -n/m`, and `c = a/M`
gives `-n/m = -am/l`, i.e. `ln = am^2`.)

### WORKED EXAMPLE 9.1
Show that `2x - y + 2 = 0` touches `y^2 = 16x` and find the point of contact.

```
  Line:  y = 2x + 2   ->  m = 2 , c = 2
  Parabola: 4a = 16 -> a = 4
  Test:  a/m = 4/2 = 2 = c    ✓ IT IS A TANGENT

  Point of contact  ( a/m^2 , 2a/m ) = ( 4/4 , 8/2 ) = ( 1 , 4 )
```
*Check:* `4^2 = 16 = 16(1)` ✓ and `2(1) - 4 + 2 = 0` ✓.

### WORKED EXAMPLE 9.2
Find the tangent to `y^2 = 8x` that is **perpendicular** to `x + 2y - 3 = 0`.

```
  Given line slope = -1/2.  Perpendicular slope  m = 2.
  a = 2.
  Tangent:  y = m x + a/m  =  2x + 2/2  =  2x + 1

  ->  2x - y + 1 = 0 ,  point of contact ( a/m^2 , 2a/m ) = ( 1/2 , 2 )
```
*Check:* `2^2 = 4 = 8(1/2)` ✓.

## 9.2 Tangent at a given point (x1, y1) — the S1 = 0 form

Differentiate `y^2 = 4ax`: `2y (dy/dx) = 4a`, so the slope at `(x1,y1)` is `2a/y1`.

```
        y - y1 = (2a / y1)( x - x1 )
        y y1 - y1^2 = 2a x - 2a x1
        y y1 = 2a x - 2a x1 + y1^2          and y1^2 = 4a x1
        y y1 = 2a x - 2a x1 + 4a x1

  +--------------------------------------------------------------------------+
  |            y y1  =  2 a ( x + x1 )          [ this is  T = 0 ]           |
  +--------------------------------------------------------------------------+
```

## 9.3 Tangent at the parametric point t

Put `(x1, y1) = (a t^2, 2at)` into `y y1 = 2a(x + x1)`:

```
        y (2 a t) = 2a ( x + a t^2 )

  +--------------------------------------------------------------------------+
  |                 t y  =  x  +  a t^2         slope = 1 / t                |
  +--------------------------------------------------------------------------+
```

## 9.4 Where two tangents meet

Tangents at `t1` and `t2`: `t1 y = x + a t1^2` and `t2 y = x + a t2^2`.
Subtract: `(t1 - t2) y = a(t1^2 - t2^2)` → `y = a(t1 + t2)`.
Then `x = t1 y - a t1^2 = a t1 t2`.

```
  +--------------------------------------------------------------------------+
  |     Tangents at t1 and t2 meet at   (  a t1 t2  ,  a ( t1 + t2 )  )      |
  +--------------------------------------------------------------------------+
```

**Two beautiful consequences (both are exam favourites):**

```
  (i)  If the chord t1 t2 is a FOCAL CHORD then t1 t2 = -1, so the tangents
       meet at x = -a  ->  ON THE DIRECTRIX.

  (ii) Their slopes are 1/t1 and 1/t2, whose product is 1/(t1 t2) = -1,
       so THE TANGENTS ARE PERPENDICULAR.

  Therefore: the locus of the point from which two PERPENDICULAR tangents can
  be drawn to a parabola is its DIRECTRIX.
  (For a circle or ellipse this locus is called the "director circle".
   For a parabola it degenerates into the straight directrix.)
```

### WORKED EXAMPLE 9.3
Find the tangent to `y^2 = 12x` at the point `(3, -6)`, and again using the parameter.

```
  a = 3.  Check the point:  (-6)^2 = 36 = 12(3)  ✓ on the curve.

  METHOD 1 (S1 = 0):     y y1 = 2a(x + x1)
                         y(-6) = 6( x + 3 )
                         -6y = 6x + 18
                         x + y + 3 = 0

  METHOD 2 (parameter):  t = y1/(2a) = -6/6 = -1
                         t y = x + a t^2
                         -y = x + 3      ->   x + y + 3 = 0     SAME  ✓
```

---

# TOPIC 10 — NORMALS

The **normal** at a point is the line through that point **perpendicular** to the
tangent there.

```
                            *  \  NORMAL (slope -y1/2a)
                          *     \
                        *        \
                   P  *===========X============  TANGENT (slope 2a/y1)
                    *
                  *
                *
```

## 10.1 The three forms

```
  Tangent slope at (x1,y1) = 2a / y1   ->   NORMAL slope = - y1 / (2a)

  +--------------------------------------------------------------------------+
  |  AT (x1, y1):        y - y1  =  - ( y1 / 2a ) ( x - x1 )                 |
  |                                                                          |
  |  AT the point t:     y + t x  =  2 a t  +  a t^3                         |
  |                      (slope = -t)                                        |
  |                                                                          |
  |  SLOPE FORM:         y  =  m x  -  2 a m  -  a m^3                       |
  |                      FOOT of the normal  =  ( a m^2 , -2 a m )           |
  +--------------------------------------------------------------------------+
```

**Deriving the parametric normal:** at `t` the tangent slope is `1/t`, so the normal
slope is `-t`. Through `(a t^2, 2at)`:
`y - 2at = -t(x - a t^2)` → `y - 2at = -tx + a t^3` → `y + tx = 2at + a t^3` ✓

**Deriving the slope form:** put `m = -t` (i.e. `t = -m`) into the above:
`y + (-m)x = 2a(-m) + a(-m)^3` → `y - mx = -2am - am^3` → `y = mx - 2am - am^3` ✓
and the foot is `(a t^2, 2at) = (a m^2, -2am)`.

> **TRAP:** For the TANGENT the slope-form constant is `+a/m`.
> For the NORMAL it is `-2am - am^3`. Students mix these two up constantly.
> Memory hook: **"tangent is short, normal is long."**

### WORKED EXAMPLE 10.1
Find the normal to `y^2 = 4x` that is parallel to `y - 2x + 5 = 0`.

```
  a = 1 ,   required slope m = 2.

  y = m x - 2am - a m^3
    = 2x - 2(1)(2) - (1)(8)
    = 2x - 4 - 8
    = 2x - 12

  ->   2x - y - 12 = 0

  FOOT:  ( a m^2 , -2 a m ) = ( 4 , -4 )
```
*Check:* `(-4)^2 = 16 = 4(4)` ✓ the foot is on the curve.
`2(4) - (-4) - 12 = 8 + 4 - 12 = 0` ✓ the line passes through it.
Tangent slope there = `2a/y1 = 2/(-4) = -1/2`; `(-1/2)(2) = -1` ✓ perpendicular.

### WORKED EXAMPLE 10.2
Find the normal to `y^2 = 8x` at the point `t = 2`.

```
  a = 2.  Point = ( a t^2 , 2at ) = ( 8 , 8 ).

  y + t x = 2at + a t^3
  y + 2x  = 2(2)(2) + 2(8) = 8 + 16 = 24

  ->  2x + y - 24 = 0
```
*Check:* at `(8,8)`: `16 + 8 - 24 = 0` ✓. Tangent slope `1/t = 1/2`;
normal slope `-2`; product `-1` ✓.

## 10.2 The normal at t1 meets the parabola again at t2

```
  The normal at t1 is         y = -t1 x + 2a t1 + a t1^3      (slope -t1)

  The chord from t1 to t2 is  (t1 + t2) y = 2x + 2a t1 t2     (slope 2/(t1+t2))

  These are the SAME line, so the slopes must match:

              2
        -------------  =  - t1        ->       t1 ( t1 + t2 ) = -2
          t1 + t2

  +--------------------------------------------------------------------------+
  |                              2                                           |
  |          t2   =   - t1  -  -----                                         |
  |                              t1                                          |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 10.3
The normal at `t = 1` on `y^2 = 4ax` meets the curve again at which point?

```
  t2 = -1 - 2/1 = -3

  Point  =  ( a t2^2 , 2 a t2 )  =  ( 9a , -6a )
```
*Check with a = 1:* normal at `t = 1` is `y + x = 2 + 1 = 3`.
Does `(9, -6)` satisfy it? `-6 + 9 = 3` ✓. And `(-6)^2 = 36 = 4(9)` ✓.

**A famous consequence:** take the point where `y = x` on the parabola (other than the
vertex). There `a t^2 = 2at` gives `t1 = 2`, so `t2 = -2 - 2/2 = -3`. That normal chord
subtends a **right angle at the focus** — a standard 7-mark proof done in the PYQ file.

## 10.3 Three normals from a point — the concurrency condition

Suppose the normal `y = mx - 2am - am^3` passes through a fixed point `(h, k)`:

```
        k = m h - 2 a m - a m^3

  +--------------------------------------------------------------------------+
  |         a m^3  +  ( 2a - h ) m  +  k  =  0          (in slopes)          |
  |                                                                          |
  |    or   a t^3  +  ( 2a - h ) t  -  k  =  0          (in parameters,      |
  |                                                      using t = -m)       |
  +--------------------------------------------------------------------------+
```

A cubic has **three** roots, so in general **three normals** can be drawn from a
point to a parabola. By the sum/product of roots:

```
        m1 + m2 + m3       =  0                (no m^2 term!)
        m1m2 + m2m3 + m3m1 =  ( 2a - h ) / a
        m1 m2 m3           =  - k / a

  and in parameters:

        t1 + t2 + t3       =  0
        t1t2 + t2t3 + t3t1 =  ( 2a - h ) / a
        t1 t2 t3           =  k / a
```

```
  +--------------------------------------------------------------------------+
  |  THE SUM OF THE SLOPES OF THE THREE CONCURRENT NORMALS IS ALWAYS ZERO,   |
  |  AND SO IS THE SUM OF THE THREE PARAMETERS.                              |
  |  (This single line answers a huge number of EAPCET questions.)           |
  +--------------------------------------------------------------------------+
```

Two more standard results that follow:
- Two of the three normals coincide (i.e. `(h,k)` is on the **evolute**) when the
  cubic has a repeated root; the condition is `27 a k^2 = 4 (h - 2a)^3`.
- Three **distinct real** normals exist only when `h > 2a`.

### WORKED EXAMPLE 10.4
Find the normals from `(9, 6)` to `y^2 = 4x`, and verify the slopes add to zero.

```
  a = 1 , h = 9 , k = 6.

  a m^3 + (2a - h) m + k = 0
      m^3 + (2 - 9) m + 6 = 0
      m^3 - 7m + 6 = 0

  m = 1 works:  1 - 7 + 6 = 0  ✓
  Factor:  (m - 1)(m^2 + m - 6) = 0  =  (m - 1)(m + 3)(m - 2)

  SLOPES:  m = 1 , 2 , -3        SUM = 1 + 2 - 3 = 0   ✓

  The three normals ( y = m x - 2m - m^3 ):
      m = 1 :  y =  x - 2 - 1  =  x - 3        ->  x - y - 3 = 0
      m = 2 :  y = 2x - 4 - 8  = 2x - 12       ->  2x - y - 12 = 0
      m = -3:  y = -3x + 6 + 27 = -3x + 33     ->  3x + y - 33 = 0
```
*Check each passes through (9, 6):*
`9 - 6 - 3 = 0` ✓  `18 - 6 - 12 = 0` ✓  `27 + 6 - 33 = 0` ✓

---

# TOPIC 11 — THE CHORD FAMILY (contact, midpoint, pair of tangents)

Everything here uses the same three expressions. Write them at the top of your answer.

```
  For  y^2 = 4ax :

     S   =  y^2  -  4 a x
     S1  =  y1^2 -  4 a x1
     T   =  y y1 -  2 a ( x + x1 )
```

## 11.1 Chord of contact

From an **external** point `P(x1,y1)` draw the two tangents. They touch at `A` and `B`.
The chord `AB` is the **chord of contact**.

```
                            *  A
                      *   /
                *      /
       P *----------/
                *      \
                      *   \
                            *  B

     Chord of contact AB :   T = 0    ->    y y1 = 2 a ( x + x1 )
```

Notice it looks **identical** to the tangent formula. It is the same expression `T = 0`;
the only difference is whether `(x1,y1)` is on the curve (tangent) or outside it
(chord of contact).

### WORKED EXAMPLE 11.1
Find the chord of contact of `y^2 = 4x` from the point `(2, 3)`.

```
  a = 1.  First check it is OUTSIDE:  S1 = 9 - 8 = 1 > 0  ✓

  T = 0 :   y(3) = 2(1)( x + 2 )
            3y = 2x + 4
            ->   2x - 3y + 4 = 0
```
*Check:* solve with the parabola. From the line `x = (3y - 4)/2`;
put into `y^2 = 4x`: `y^2 = 2(3y - 4)` → `y^2 - 6y + 8 = 0` → `y = 2, 4`.
Real and distinct ✓ so it genuinely is a chord. Contact points `(1,2)` and `(4,4)`.
Tangent at `(1,2)`: `2y = 2(x+1)` → `y = x + 1`, which passes through `(2,3)` ✓.

## 11.2 Chord with a given midpoint

```
  +--------------------------------------------------------------------------+
  |   Chord of  y^2 = 4ax  whose MIDPOINT is (x1, y1):                       |
  |                                                                          |
  |                          T  =  S1                                        |
  |                                                                          |
  |            y y1 - 2a( x + x1 )  =  y1^2 - 4 a x1                         |
  |                                                                          |
  |   Slope of that chord  =  2a / y1                                        |
  +--------------------------------------------------------------------------+
```

*(The midpoint must be INSIDE the parabola, `S1 < 0`, or no such chord exists.)*

### WORKED EXAMPLE 11.2
Find the chord of `y^2 = 16x` whose midpoint is `(2, 5)`.

```
  4a = 16 -> a = 4 ,  2a = 8.

  CHECK it is inside:  S1 = 25 - 16(2) = 25 - 32 = -7  < 0  ✓

  T = S1:      5y - 8( x + 2 )  =  -7
               5y - 8x - 16     =  -7
               8x - 5y + 9      =  0
```
*Check:* from the line `x = (5y - 9)/8`; sub into `y^2 = 16x`:
`y^2 = 2(5y - 9)` → `y^2 - 10y + 18 = 0`. Sum of roots `= 10`, so the mean of the
two y-values is `5` ✓ exactly the y of the midpoint.
Also mean of x: `x = y^2/16`, and `y1^2 + y2^2 = 100 - 36 = 64`, so mean `x = 64/32 = 2` ✓.

## 11.3 Pair of tangents from an external point

```
  +--------------------------------------------------------------------------+
  |         The COMBINED equation of the two tangents from (x1, y1)          |
  |                                                                          |
  |                          S  S1  =  T^2                                   |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 11.3
Find the pair of tangents from `(-1, 2)` to `y^2 = 4x`.

```
  a = 1.
  S  = y^2 - 4x
  S1 = 4 - 4(-1) = 8
  T  = 2y - 2( x - 1 ) = 2y - 2x + 2 = 2( y - x + 1 )

  S S1 = T^2 :
        8 ( y^2 - 4x )  =  4 ( y - x + 1 )^2
        2 ( y^2 - 4x )  =  ( y - x + 1 )^2
        2y^2 - 8x       =  y^2 + x^2 + 1 - 2xy + 2y - 2x

        0 = x^2 - y^2 - 2xy + 6x + 2y + 1

  ->    x^2 - 2xy - y^2 + 6x + 2y + 1 = 0
```
*Check:* it should be a pair of REAL lines: `h^2 - ab = (-1)^2 - (1)(-1) = 2 > 0` ✓.
And `a + b = 1 + (-1) = 0`, so the two tangents are **perpendicular**. That is exactly
right, because `(-1, 2)` lies on the directrix `x = -1` of `y^2 = 4x`.
Direct confirmation: `y = mx + 1/m` through `(-1,2)` gives `2 = -m + 1/m` →
`m^2 + 2m - 1 = 0` → `m = -1 ± sqrt(2)`, whose product is `-1` ✓.

---

# TOPIC 12 — FOCAL CHORDS

## 12.1 The condition t1 t2 = -1

```
  Chord joining t1 and t2 :   ( t1 + t2 ) y  =  2x  +  2 a t1 t2

  It is a FOCAL chord if it passes through S( a , 0 ) :

        ( t1 + t2 )( 0 )  =  2 a  +  2 a t1 t2
                       0  =  2a ( 1 + t1 t2 )

  +--------------------------------------------------------------------------+
  |                          t1  t2  =  -1                                   |
  |                                                                          |
  |    i.e. if one end is  t ,  the other end is  -1/t                       |
  +--------------------------------------------------------------------------+
```

## 12.2 Length of a focal chord

```
  With t2 = -1/t1 = -1/t :

     SP = focal distance of t   = a t^2 + a       = a ( t^2 + 1 )
     SQ = focal distance of -1/t = a/t^2 + a      = a ( 1/t^2 + 1 )

     PQ = SP + SQ = a ( t^2 + 2 + 1/t^2 )

  +--------------------------------------------------------------------------+
  |                                    1  2                                  |
  |     LENGTH OF FOCAL CHORD  =  a ( t + - )     =  4 a cosec^2 (theta)     |
  |                                       t                                  |
  |                                                                          |
  |     where theta is the angle the chord makes with the axis.              |
  +--------------------------------------------------------------------------+
```

**Minimum length:** `(t + 1/t)^2 >= 4` for every real `t != 0`, with equality at
`t = ±1`. So the **shortest focal chord is 4a — the latus rectum itself.**
(And `cosec^2 theta >= 1` says the same thing: minimum at `theta = 90 degrees`.)

### WORKED EXAMPLE 12.1
One end of a focal chord of `y^2 = 8x` is `(8, 8)`. Find the other end and the length.

```
  a = 2.  t = y1/(2a) = 8/4 = 2.

  Other end:  t2 = -1/t1 = -1/2
              ( a t2^2 , 2 a t2 ) = ( 2 * 1/4 , 4 * (-1/2) ) = ( 1/2 , -2 )

  Length = a ( t + 1/t )^2 = 2 ( 2 + 1/2 )^2 = 2 ( 5/2 )^2 = 2 * 25/4 = 25/2
```
*Check by the distance formula:*
`sqrt( (8 - 1/2)^2 + (8 + 2)^2 ) = sqrt( (15/2)^2 + 100 ) = sqrt( 225/4 + 400/4 )
= sqrt(625/4) = 25/2` ✓
*Check it passes through the focus (2, 0):* the chord `(t1+t2)y = 2x + 2a t1t2` is
`(3/2) y = 2x - 4`; at `(2,0)`: `0 = 4 - 4` ✓.

### WORKED EXAMPLE 12.2
Find the length of the focal chord of `y^2 = 4ax` making 60 degrees with the axis.

```
  Length = 4a cosec^2 60 = 4a / sin^2 60 = 4a / (3/4) = 16a / 3
```
*Check with the t-form:* the chord slope is `2/(t1 + t2) = 2/(t - 1/t) = tan(theta)`,
so `t - 1/t = 2 cot(theta)`. Then
`(t + 1/t)^2 = (t - 1/t)^2 + 4 = 4 cot^2(theta) + 4 = 4 cosec^2(theta)`.
At `theta = 60`: `4(1/3) + 4 = 16/3`, so the length is `a(16/3) = 16a/3` ✓ same.

## 12.3 The tangents at the ends of a focal chord

Already proved in 9.4, but it is so often asked that it deserves its own box:

```
  +--------------------------------------------------------------------------+
  |   The tangents at the two ends of a FOCAL CHORD                          |
  |         (i)  intersect ON THE DIRECTRIX,   and                           |
  |         (ii) are PERPENDICULAR to each other.                            |
  |                                                                          |
  |   Proof: they meet at ( a t1 t2 , a(t1+t2) ). Focal chord => t1t2 = -1,  |
  |   so x = -a (the directrix). Slopes 1/t1 and 1/t2 multiply to            |
  |   1/(t1 t2) = -1.                                                        |
  +--------------------------------------------------------------------------+
```

Two more focal-chord facts worth one line each:
- The **circle drawn on a focal chord as diameter touches the directrix.**
- The **circle drawn on any focal radius (SP) as diameter touches the tangent at the vertex.**

---

# TOPIC 13 — THE REFLECTION PROPERTY

## 13.1 The statement

```
  +--------------------------------------------------------------------------+
  |  A ray travelling PARALLEL TO THE AXIS strikes the parabola and is       |
  |  reflected straight THROUGH THE FOCUS.                                    |
  |                                                                          |
  |  Run it backwards: a source placed AT THE FOCUS sends out a beam of      |
  |  rays that all leave PARALLEL TO THE AXIS.                                |
  +--------------------------------------------------------------------------+
```

```
   incoming rays parallel to the axis
        ------------------->  *
                            *  \
        ------------------->     \
                          *        \
        ------------------->         \
                        *              . S  (all reflected rays meet here)
        ------------------->         /
                          *        /
        ------------------->     /
                            *  /
        ------------------->  *
```

## 13.2 Why it works (the one-line reason)

At any point `P` of the parabola, the tangent makes **equal angles** with
(i) the focal radius `SP` and (ii) the line through `P` parallel to the axis.
Since the law of reflection says angle of incidence = angle of reflection about the
tangent, a ray coming in parallel to the axis must leave along `PS`.

A quick way to see this: the tangent at `t` is `ty = x + a t^2`, meeting the x-axis
at `T(-a t^2, 0)`. The focus is `S(a, 0)` and `P = (a t^2, 2at)`.

```
   ST = a + a t^2 = a( 1 + t^2 )
   SP = a t^2 + a = a( 1 + t^2 )        (focal distance)

   ST = SP , so triangle STP is ISOSCELES,
   so angle STP = angle SPT.
   But angle STP equals the angle the tangent makes with the axis, which
   equals the angle between the tangent and the parallel-to-axis ray at P.
   Hence  angle(SPT) = angle(ray, tangent).       QED
```

## 13.3 Where it is used

| Application | How the parabola is used |
|---|---|
| Car headlight / torch | bulb at the focus → beam comes out parallel |
| Satellite / TV dish antenna | parallel signals from space → all collected at the focus (where the LNB sits) |
| Radio telescope | same, with the receiver at the focus |
| Solar cooker / solar furnace | sunlight is parallel → concentrated at the focus, cooking pot placed there |
| Reflecting telescope (Newtonian) | parabolic primary mirror focuses starlight |
| Microphone (parabolic "shotgun" mic) | distant sound collected at the focus |
| Suspension bridge cables, projectile paths | the shape itself is a parabola (not reflection) |

> **TRAP:** For a 2-mark "state the reflection property" question, you must say BOTH
> halves: rays parallel to the axis pass through the focus, AND rays from the focus
> emerge parallel to the axis. One half only = half the marks.

---

# TOPIC 14 — A COLLECTION OF STANDARD RESULTS TO QUOTE

Any of these can be quoted directly in Section B or C after one line of proof.

```
  +--------------------------------------------------------------------------+
  |  1.  Tangents at t1, t2 meet at  ( a t1 t2 , a(t1 + t2) )                |
  |  2.  Focal chord  <=>  t1 t2 = -1                                        |
  |  3.  Normal at t1 meets again at t2 = -t1 - 2/t1                         |
  |  4.  Perpendicular tangents meet on the DIRECTRIX                        |
  |  5.  The foot of the perpendicular from the FOCUS to any tangent lies    |
  |      on the TANGENT AT THE VERTEX (x = 0)                                |
  |  6.  The circle on a focal chord as diameter TOUCHES the directrix       |
  |  7.  The circle on a focal radius as diameter touches x = 0              |
  |  8.  Sum of the slopes of the 3 concurrent normals = 0                   |
  |  9.  Semi-latus rectum = harmonic mean of the two parts of a focal chord |
  | 10.  A chord joining t1, t2 subtends a RIGHT ANGLE AT THE VERTEX         |
  |      <=>  t1 t2 = -4 ;  such a chord always passes through (4a, 0)       |
  | 11.  Area of the triangle formed by the tangents at t1, t2, t3           |
  |          =  (a^2 / 2) | (t1 - t2)(t2 - t3)(t3 - t1) |                    |
  | 12.  The chord t1t2 subtends a right angle at the FOCUS  <=>             |
  |      the normal-chord condition of Result 3 with t1 = 2, t2 = -3         |
  +--------------------------------------------------------------------------+
```

**Proof of Result 10** (it takes three lines and is worth 4 marks):
```
  P = (a t1^2, 2a t1),  Q = (a t2^2, 2a t2),  vertex A = (0,0).

  slope AP = 2a t1 / (a t1^2) = 2 / t1        slope AQ = 2 / t2

  Right angle at A  =>  (2/t1)(2/t2) = -1  =>  t1 t2 = -4.

  Then the chord (t1+t2) y = 2x + 2a t1 t2 = 2x - 8a passes through
  y = 0, x = 4a.  So EVERY such chord goes through the fixed point (4a, 0).
```

**Proof of Result 5:**
```
  Tangent at t:   t y = x + a t^2 ,  i.e.  x - t y + a t^2 = 0.
  Perpendicular from S(a,0) has slope -t : y = -t(x - a).
  Solve:  x - t(-t)(x - a) + a t^2 = 0  ->  x + t^2 x - a t^2 + a t^2 = 0
          x (1 + t^2) = 0    ->    x = 0.
  So the foot lies on x = 0, the tangent at the vertex.   QED
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I make the coefficient of the squared term equal to 1 before
       reading off 4a?

  [ ]  Is my  a  POSITIVE? (a is always positive in the standard forms;
       the direction comes from the sign in front of 4a, not from a.)

  [ ]  Did I say which way the parabola OPENS?

  [ ]  Vertex, focus, directrix, axis, latus rectum — did I write all FIVE?
       Each one carries marks in the 7-mark question.

  [ ]  Is the directrix written as an EQUATION (x = -a), not as a point?

  [ ]  Is the focus written as a POINT (a, 0), not as an equation?

  [ ]  When completing the square, did I add the same number to BOTH sides?

  [ ]  Did I factor the right-hand side properly, so the bracket really is
       (x - h) and I read the sign of h correctly?

  [ ]  Tangent slope-form is y = mx + a/m.
       Normal slope-form is y = mx - 2am - am^3.  Did I use the right one?

  [ ]  For a chord of contact / midpoint chord, did I first check whether the
       point is OUTSIDE (S1 > 0) or INSIDE (S1 < 0)?

  [ ]  For "chord with a given midpoint" did I use  T = S1  (not T = 0)?

  [ ]  For a focal chord, did I use t1 t2 = -1 (not +1)?

  [ ]  Did I substitute my final point back into the original equation
       to check it really lies on the curve?

  [ ]  Did I draw a rough sketch? It costs 30 seconds, it catches sign
       errors, and examiners give credit for it.

  [ ]  Units / brackets / "= 0" on every equation. Free marks.
```
