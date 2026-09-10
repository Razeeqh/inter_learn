# Hyperbola — Concepts From Zero

**Maths IIB · Chapter 5**

Read this with a pen. Copy every box. Do every worked example yourself on paper
BEFORE reading the solution. Nothing here needs cleverness — only neatness.

If Chapter 4 (Ellipse) is fresh in your head, keep saying this to yourself as you read:

> **"Same chapter. Plus becomes minus."**

---

# TOPIC 1 — WHAT A CONIC IS, AND WHERE THE HYPERBOLA SITS

## 1.1 The one definition that makes all four curves

Fix a point `S` (call it the **FOCUS**) and a straight line `l` not passing through `S`
(call it the **DIRECTRIX**). Now pick a positive number `e`.

Ask: *which points `P` satisfy* `SP = e × (distance from P to l)` ?

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |                        S P                                               |
  |                      --------  =  e            ( e > 0 )                 |
  |                        P M                                               |
  |                                                                          |
  |     S  = FOCUS (a fixed point)                                           |
  |     l  = DIRECTRIX (a fixed line)                                        |
  |     PM = the PERPENDICULAR distance from P to the line l                 |
  |     e  = ECCENTRICITY                                                    |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

The whole family of conics comes out of that single sentence, just by changing `e`:

| `e` | Curve | Plain-English meaning |
|---|---|---|
| `e = 0` | circle | the focus and directrix collapse; all points equidistant from a centre |
| `0 < e < 1` | ellipse | P is always **closer** to the focus than to the directrix |
| `e = 1` | parabola | P is **exactly as far** from the focus as from the directrix |
| **`e > 1`** | **HYPERBOLA** | P is always **further** from the focus than from the directrix |

```
     the DIRECTRIX               S = the FOCUS
        |
        |   M...................P
        |   <---- PM ---->       \
        |                         \  <---- SP is BIGGER than PM ---->
        |                          .  S
        |
        e = SP / PM  >  1   ->   HYPERBOLA
```

Because P is allowed to be far from the focus, the curve is **not closed**. It runs
away to infinity in four directions and splits into **two separate branches**.

```
   WHY TWO BRANCHES? Because the cutting plane hits BOTH halves of the double cone.

              \      /                     Slice a double ice-cream cone with
               \    /                      a plane that is steep enough and you
                \  /                       cut BOTH the top cone and the bottom
                 \/          <- apex       cone. Two cuts = two branches.
                 /\
                /  \
               /    \
              /      \
```

> **TRAP:** students write "a hyperbola is an ellipse turned inside out" in the exam.
> That is not a definition and earns 0. The definition the examiner wants is
> `SP / PM = e` with `e > 1`, or the focal definition in 1.2.

---

## 1.2 The SECOND definition — the DIFFERENCE of two distances

An ellipse was "two pins and a string": `SP + S'P = 2a`, a fixed **SUM**.

A hyperbola is the same idea with a **DIFFERENCE**:

```
  +==========================================================================+
  |                                                                          |
  |   A HYPERBOLA is the set of points P such that the DIFFERENCE of the      |
  |   distances from two fixed points S and S' is a CONSTANT.                 |
  |                                                                          |
  |                       |  S' P   -   S P  |   =   2 a                      |
  |                                                                          |
  +==========================================================================+
```

Picture it:

```
                LEFT BRANCH                RIGHT BRANCH
                     \                          /
                      \                        /
                       )        S'  C  S      (        P
                      /                        \      /
                     /                          \    /

     For a point P on the RIGHT branch :   S'P - SP = 2a   (S is the nearer focus)
     For a point P on the LEFT  branch :   SP - S'P = 2a   (S' is the nearer focus)

     Either way the ABSOLUTE DIFFERENCE is the same number, 2a,
     and 2a is exactly the distance between the two vertices.
```

**Everyday analogy — the lightning strike.** You hear thunder at two microphones,
`S` and `S'`. The thunder reaches one microphone 0.4 seconds before the other.
Sound travels ~340 m/s, so the *difference* of the two distances is fixed at 136 m.
Every point where that could have happened lies on **one branch of a hyperbola** with
`2a = 136`. Two more microphones give a second hyperbola, and the intersection tells
you exactly where the lightning struck. That is how the old **LORAN** navigation
system found ships, and how modern systems locate gunshots in a city.

> **TRAP:** the ellipse uses a **SUM**, the hyperbola uses a **DIFFERENCE**.
> One word. Write the wrong one and the whole 7-mark proof is wrong.

---

## 1.3 Recognising a hyperbola from a general equation

For `S = a x^2 + 2h x y + b y^2 + 2g x + 2f y + c = 0`:

```
  +--------------------------------------------------------------------------+
  |            | a  h  g |                                                   |
  |   Delta =  | h  b  f |  =  a b c + 2 f g h - a f^2 - b g^2 - c h^2       |
  |            | g  f  c |                                                   |
  |                                                                          |
  |   Delta = 0  ->  DEGENERATE (a point, a line, or a PAIR OF LINES)        |
  |   Delta != 0 ->  a genuine conic, and then                               |
  |                                                                          |
  |          h^2 - a b  <  0    ELLIPSE   (and = circle if a = b, h = 0)     |
  |          h^2 - a b  =  0    PARABOLA                                     |
  |          h^2 - a b  >  0    HYPERBOLA          <---- ours                |
  |                                                                          |
  |   and if in addition   a + b = 0   the hyperbola is RECTANGULAR.         |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 1.1**
Show that `3x^2 - 5xy - 2y^2 + 5x + 11y - 8 = 0` represents a hyperbola.

```
  Match:  a = 3 ,  2h = -5  -> h = -5/2 ,  b = -2 ,
          2g = 5  -> g = 5/2 ,  2f = 11 -> f = 11/2 ,  c = -8

  h^2 - ab = ( -5/2 )^2 - ( 3 )( -2 ) = 25/4 + 6 = 49/4  >  0      HYPERBOLA

  Now check it is not degenerate:
      Delta = abc + 2fgh - af^2 - bg^2 - ch^2
            = (3)(-2)(-8) + 2(11/2)(5/2)(-5/2) - 3(11/2)^2 - (-2)(5/2)^2 - (-8)(25/4)
            = 48 + ( -275/4 ) - 363/4 + 25/2 + 50
            = 98 - 275/4 - 363/4 + 50/4
            = 98 - 588/4
            = 98 - 147
            = -49                                  ( Delta != 0 )   TICK
```
**It is a genuine hyperbola.** (Note `a + b = 3 - 2 = 1`, not 0, so it is *not*
rectangular.)

---

# TOPIC 2 — DERIVING THE STANDARD EQUATION (a guaranteed 7 marks)

This derivation appears again and again in Section C. Learn it as a *story* with
five beats. Do not try to memorise the algebra — memorise the picture.

## 2.1 Setting up the picture

Let `S` be the focus, `l` the directrix, `e > 1`. Drop a perpendicular from `S` to `l`
and call the foot `Z`. Everything happens on the line `SZ`, which will become the
**x-axis**.

```
        l  (the directrix)
        |
        |
   -----Z----A--------C--------A'----------------  (this line becomes the x-axis)
        |    ^        ^        ^
        |    |        |        |
        |  vertex   centre   the other vertex
        |
        S is somewhere on this line, on the far side of A
```

There are exactly **two** points of the line `SZ` that satisfy `SP = e·PM`:
the point `A` that divides `SZ` **internally** in the ratio `e : 1`, and the point `A'`
that divides it **externally** in the ratio `e : 1`. Both are on the curve — they are
the **VERTICES**.

Let `AA' = 2a`, and take the **midpoint C of AA' as the origin**, with `CA` along the
positive x-axis. So

```
        A = ( a , 0 )        A' = ( -a , 0 )        C = ( 0 , 0 )
```

## 2.2 Locating the focus and the directrix

Let the focus be `S = (c, 0)` with `c > 0`, and the directrix be the line `x = d`.

Because `A` and `A'` are both on the curve:

```
   For A ( a , 0 ) :     S A  = e * ( distance from A to the directrix )
                        c - a = e ( a - d )                     ... (1)

   For A' ( -a , 0 ) :   S A' = e * ( distance from A' to the directrix )
                        c + a = e ( a + d )                     ... (2)

   ADD (1) and (2):      2 c = 2 e a           ->      c  =  a e
   SUBTRACT (1) from (2): 2 a = 2 e d          ->      d  =  a / e
```

```
  +==========================================================================+
  |        FOCUS       S = ( a e , 0 )                                       |
  |        DIRECTRIX   x = a / e                                             |
  |                                                                          |
  |   Because e > 1 :   a e  >  a  >  a/e                                    |
  |   so the FOCUS is OUTSIDE the vertex and the DIRECTRIX is INSIDE it.     |
  |   (For an ellipse it was the same statement with e < 1 flipping it.)     |
  +==========================================================================+
```

## 2.3 The derivation itself

Take any point `P = (x, y)` on the curve. Its distance to the directrix `x = a/e`
is `| x - a/e |`. The defining condition `SP = e · PM` squared gives:

```
   ( x - a e )^2  +  y^2   =   e^2 ( x - a/e )^2

   x^2 - 2 a e x + a^2 e^2 + y^2  =  e^2 ( x^2 - 2 a x / e + a^2 / e^2 )

   x^2 - 2 a e x + a^2 e^2 + y^2  =  e^2 x^2 - 2 a e x + a^2

   ( the  -2 a e x  cancels on both sides — this always happens, do not panic )

   x^2 - e^2 x^2 + y^2  =  a^2 - a^2 e^2

   x^2 ( 1 - e^2 ) + y^2  =  a^2 ( 1 - e^2 )

   Divide throughout by  a^2 ( 1 - e^2 ) :

        x^2            y^2
       -----  +  --------------  =  1
        a^2       a^2 ( 1 - e^2 )
```

Now the **only** difference from the ellipse. Since `e > 1`, the number `1 - e^2` is
**negative**, so `a^2(1 - e^2)` is negative and cannot be called `b^2`. Instead write

```
        b^2  =  a^2 ( e^2 - 1 )     which is POSITIVE

   so   a^2 ( 1 - e^2 )  =  - b^2 ,  and the equation becomes
```

```
  +==========================================================================+
  |                                                                          |
  |                        x^2       y^2                                     |
  |                        ---   -   ---   =   1                             |
  |                        a^2       b^2                                     |
  |                                                                          |
  |                     with     b^2  =  a^2 ( e^2 - 1 )                     |
  |                                                                          |
  +==========================================================================+
```

**That is the whole 7-mark answer.** Write the picture, the two vertex equations,
`c = ae`, `d = a/e`, the squaring, the cancel, and the final box. Nothing else.

## 2.4 The three ways to write the a-b-e relation

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |     b^2  =  a^2 ( e^2 - 1 )               <-- the master relation        |
  |                                                                          |
  |     a^2 e^2  =  a^2  +  b^2                                              |
  |                                                                          |
  |     a e  =  sqrt( a^2 + b^2 )             distance centre -> focus       |
  |                                                                          |
  |                       b^2                             b^2                |
  |     e^2  =  1  +     -----      e  =  sqrt( 1  +     ----- )             |
  |                       a^2                             a^2                |
  |                                                                          |
  |     b  =  a sqrt( e^2 - 1 )                                              |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**Sanity check that costs 5 seconds and saves 7 marks:**
`e^2 = 1 + (a positive number)`, so **e is always bigger than 1**. If your answer
gives `e = 3/5` you have made a sign slip somewhere.

**WORKED EXAMPLE 2.1**
For `x^2/16 - y^2/9 = 1`, find `e`, the foci and the directrices.

```
   a^2 = 16 -> a = 4          b^2 = 9 -> b = 3

   a e = sqrt( a^2 + b^2 ) = sqrt( 16 + 9 ) = sqrt 25 = 5

   e = ( a e ) / a = 5 / 4                        ( 5/4 > 1  TICK )

   FOCI          ( ± a e , 0 )  =  ( 5 , 0 )  and  ( -5 , 0 )
   DIRECTRICES   x = ± a / e  =  ± 4 / (5/4)  =  ± 16 / 5
```
**e = 5/4 ; foci (±5, 0) ; directrices x = ±16/5.**

Check the ordering: `a/e = 3.2  <  a = 4  <  ae = 5`. Directrix inside, vertex,
focus outside. Exactly as promised. **TICK.**

---

# TOPIC 3 — THE PARTS OF A HYPERBOLA (learn the vocabulary)

## 3.1 The full labelled sketch — transverse axis along the x-axis

```
                                  y
                                  ^
             \ \                  |                  / /
                \ \               |               / /
                  \  \            |            /  /
                    \   \         |         /   /
                     \     \      |      /     /
                      |       \   |   /       |
      ------------+---+-----------C-----------+---+------------> x
                 S'  A'                       A   S
                      |       /   |   \       |
                     /     /      |      \     \
                    /   /         |         \   \
                  /  /            |            \  \
                / /               |               \ \
             / /                  |                  \ \

   LEGEND
     C  = ( 0 , 0 )          the CENTRE
     A  = ( a , 0 )          VERTEX          A' = ( -a , 0 )   VERTEX
     S  = ( a e , 0 )        FOCUS           S' = ( -a e , 0 ) FOCUS
     the two inner slanted lines are the ASYMPTOTES  y = ± ( b / a ) x
     the two outer curves are the two BRANCHES of the hyperbola
     directrices (not drawn) are the vertical lines x = ± a / e ,
     which sit BETWEEN the centre and the vertices
```

| Name | What it is | For `x^2/a^2 - y^2/b^2 = 1` |
|---|---|---|
| **Centre** | the midpoint of the two vertices; centre of symmetry | `(0, 0)` |
| **Vertices** | where the curve actually cuts an axis | `(±a, 0)` |
| **Foci** | the two special fixed points | `(±ae, 0)` |
| **Directrices** | the two fixed lines | `x = ±a/e` |
| **Transverse axis** | the axis the curve DOES cut, from `A'` to `A` | length `2a`, the x-axis |
| **Conjugate axis** | the axis the curve does NOT cut | length `2b`, the y-axis |
| **Eccentricity** | `SP / PM`, always `> 1` | `e = sqrt(1 + b^2/a^2)` |
| **Latus rectum** | the focal chord perpendicular to the transverse axis | length `2b^2/a` |
| **Focal chord** | any chord that passes through a focus | — |
| **Asymptotes** | the two lines the curve approaches forever | `y = ±(b/a)x` |
| **Auxiliary circle** | circle on the transverse axis as diameter | `x^2 + y^2 = a^2` |

> **TRAP — the words.** In an ellipse the axes are *major* and *minor*. In a hyperbola
> they are **transverse** and **conjugate**. Do not swap the vocabulary. And note the
> strange fact that the hyperbola **never touches** its conjugate axis: put `x = 0` in
> `x^2/a^2 - y^2/b^2 = 1` and you get `y^2 = -b^2`, which has no real solution. `b` is
> still a real, meaningful length — it is just measured on an axis the curve misses.

## 3.2 Why the latus rectum is `2b^2/a` — derive it, do not memorise blindly

The latus rectum is the chord through the focus `S(ae, 0)` perpendicular to the
transverse axis — that is, the piece of the vertical line `x = ae` cut off by the curve.

```
   Put  x = a e  into   x^2/a^2 - y^2/b^2 = 1 :

         a^2 e^2        y^2
         --------   -   ---   =   1
           a^2          b^2

              y^2
      e^2  -  ---  =  1        ->     y^2 / b^2  =  e^2 - 1
              b^2

      But   b^2 = a^2 ( e^2 - 1 )   so   e^2 - 1 = b^2 / a^2 . Therefore

              y^2      b^2                        b^4                b^2
              ---  =   ---     ->     y^2   =    -----   ->   y  =  ± ---
              b^2      a^2                        a^2                 a

   The two ends are  ( a e , b^2/a )  and  ( a e , -b^2/a ) .

                             2 b^2
        LENGTH  =            -----
                               a
```

```
  +--------------------------------------------------------------------------+
  |   LATUS RECTUM                                                           |
  |                                                                          |
  |      length = 2 b^2 / a         SEMI-latus rectum = b^2 / a              |
  |      the two LR lines are  x = a e  and  x = - a e                       |
  |      the four ends are  ( ± a e , ± b^2 / a )                            |
  |                                                                          |
  |   EXACTLY the same formula as the ellipse. This one does NOT change.     |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 3.1**
Find the length of the latus rectum and the ends of one latus rectum for
`9x^2 - 16y^2 = 144`.

```
   Divide by 144 :        x^2 / 16  -  y^2 / 9  =  1

   a^2 = 16 -> a = 4 ,   b^2 = 9 ,   a e = sqrt( 16 + 9 ) = 5 ,  e = 5/4

   LR = 2 b^2 / a = 2 ( 9 ) / 4 = 18/4 = 9/2 = 4.5

   Ends of the latus rectum through S(5,0) :  ( 5 , ± b^2/a ) = ( 5 , ± 9/4 )

   CHECK by substituting ( 5 , 9/4 ) into the curve:
        9 (25) - 16 ( 81/16 )  =  225 - 81  =  144            TICK
```
**LR = 9/2 ; ends (5, 9/4) and (5, -9/4).**

---

# TOPIC 4 — BOTH ORIENTATIONS (the master table)

Which axis is the transverse one is decided by **which term carries the plus sign** —
NOT by which denominator is bigger. This is the single biggest difference in habit
between the ellipse and the hyperbola.

## 4.1 Case 1 — TRANSVERSE AXIS ALONG THE x-AXIS

```
                        x^2       y^2
                        ---   -   ---   =   1          ( x-term positive )
                        a^2       b^2
```

```
                                  y
                                  ^
             \ \                  |                  / /
                \ \               |               / /
                  \  \            |            /  /
                    \   \         |         /   /
                     \     \      |      /     /
                      |       \   |   /       |
      ------------+---+-----------C-----------+---+------------> x
                 S'  A'                       A   S
                      |       /   |   \       |
                     /     /      |      \     \
                    /   /         |         \   \
                  /  /            |            \  \
                / /               |               \ \
             / /                  |                  \ \

     branches open LEFT and RIGHT       asymptotes  y = ± (b/a) x
     vertices ( ± a , 0 )               foci ( ± a e , 0 )
     directrices  x = ± a/e             transverse axis 2a on the x-axis
```

## 4.2 Case 2 — TRANSVERSE AXIS ALONG THE y-AXIS

```
                        y^2       x^2
                        ---   -   ---   =   1          ( y-term positive )
                        a^2       b^2
```

```
                            y
      \                     ^                     /
       \                    |                    /
        \  \                |                /  /
         \    \             |             /    /
          \      \__        |        __/      /
           \        `-.____ | ____.-'        /        <- UPPER branch,
            \               |               /            vertex ( 0 , a )
             \              |              /
   -----------\-------------C-------------/-------------> x
             /              |              \
            /               |               \
           /        _..---- | ----.._        \        <- LOWER branch,
          /      __/        |        \__      \          vertex ( 0 , -a )
         /    /             |             \    \
        /  /                |                \  \
       /                    |                    \
      /                     |                     \

     branches open UP and DOWN          asymptotes  y = ± (a/b) x
     vertices ( 0 , ± a )               foci ( 0 , ± a e )
     directrices  y = ± a/e             transverse axis 2a on the y-axis
```

> **TRAP — the asymptote slope flips too.** For `x^2/a^2 - y^2/b^2 = 1` the asymptotes
> are `y = ±(b/a)x`. For `y^2/a^2 - x^2/b^2 = 1` they are `y = ±(a/b)x`. Safest rule:
> **replace the 1 on the right-hand side by 0 and factorise.** That always works and
> you never have to remember which letter goes on top.

## 4.3 THE MASTER TABLE — copy this onto a card

| Element | Transverse along **x** : `x^2/a^2 - y^2/b^2 = 1` | Transverse along **y** : `y^2/a^2 - x^2/b^2 = 1` |
|---|---|---|
| Centre | `(0, 0)` | `(0, 0)` |
| Vertices | `(a, 0)`, `(-a, 0)` | `(0, a)`, `(0, -a)` |
| Ends of conjugate axis | `(0, b)`, `(0, -b)` (not on the curve) | `(b, 0)`, `(-b, 0)` (not on the curve) |
| Transverse axis line / length | `y = 0` / `2a` | `x = 0` / `2a` |
| Conjugate axis line / length | `x = 0` / `2b` | `y = 0` / `2b` |
| Foci | `(ae, 0)`, `(-ae, 0)` | `(0, ae)`, `(0, -ae)` |
| Distance between foci | `2ae` | `2ae` |
| Directrices | `x = a/e`, `x = -a/e` | `y = a/e`, `y = -a/e` |
| Distance between directrices | `2a/e` | `2a/e` |
| Relation | `b^2 = a^2(e^2 - 1)` | `b^2 = a^2(e^2 - 1)` |
| `ae` | `sqrt(a^2 + b^2)` | `sqrt(a^2 + b^2)` |
| Eccentricity | `e = sqrt(1 + b^2/a^2)` | `e = sqrt(1 + b^2/a^2)` |
| Latus rectum length | `2b^2/a` | `2b^2/a` |
| Latus rectum lines | `x = ae`, `x = -ae` | `y = ae`, `y = -ae` |
| Ends of latus rectum | `(±ae, ±b^2/a)` | `(±b^2/a, ±ae)` |
| Focal distances of `(x1,y1)` | `\|e·x1 - a\|` and `\|e·x1 + a\|` | `\|e·y1 - a\|` and `\|e·y1 + a\|` |
| Parametric point | `(a sec th, b tan th)` | `(b tan th, a sec th)` |
| **Asymptotes** | `y = ±(b/a)x`, i.e. `bx ± ay = 0` | `y = ±(a/b)x`, i.e. `ax ± by = 0` |
| Auxiliary circle | `x^2 + y^2 = a^2` | `x^2 + y^2 = a^2` |
| Director circle | `x^2 + y^2 = a^2 - b^2` | `x^2 + y^2 = a^2 - b^2` |
| Conjugate hyperbola | `y^2/b^2 - x^2/a^2 = 1` | `x^2/b^2 - y^2/a^2 = 1` |

**WORKED EXAMPLE 4.1**
Find all the elements of `16y^2 - 9x^2 = 144`.

```
   Divide by 144 :        y^2 / 9  -  x^2 / 16  =  1

   The PLUS sign is on y^2 , so the TRANSVERSE AXIS IS THE y-AXIS.
        a^2 = 9  -> a = 3            b^2 = 16 -> b = 4
        ( note b > a — completely normal for a hyperbola )

   a e = sqrt( a^2 + b^2 ) = sqrt( 9 + 16 ) = 5      ->   e = 5 / 3

   Centre        ( 0 , 0 )
   Vertices      ( 0 , 3 ) and ( 0 , -3 )
   Foci          ( 0 , 5 ) and ( 0 , -5 )
   Directrices   y = ± a/e = ± 3 / (5/3) = ± 9/5
   Transverse axis  length 2a = 6 , along the y-axis
   Conjugate  axis  length 2b = 8 , along the x-axis
   Latus rectum  2 b^2 / a = 2(16)/3 = 32/3
   Asymptotes    put RHS = 0 :  y^2/9 - x^2/16 = 0  ->  y = ± (3/4) x
                                                    ->  3x ± 4y = 0
   CHECK  e = 5/3 = 1.67 > 1        TICK
```

---

# TOPIC 5 — FOCAL DISTANCES AND THE `S'P - SP = 2a` PROOF

## 5.1 Deriving the focal distances

Take `P = (x1, y1)` on the **right branch**, so `x1 >= a`.

```
   S = ( a e , 0 )  goes with the directrix  x = a / e
   S'= ( -a e, 0 )  goes with the directrix  x = -a / e

   By the definition  SP = e * PM  :

        S P  =  e * ( distance from P to the line x = a/e )
             =  e * ( x1 - a/e )                      [ x1 > a/e on this branch ]
             =  e x1  -  a

        S' P =  e * ( distance from P to the line x = -a/e )
             =  e * ( x1 + a/e )
             =  e x1  +  a
```

```
  +==========================================================================+
  |                                                                          |
  |   For a point ( x1 , y1 ) on the RIGHT branch of x^2/a^2 - y^2/b^2 = 1 : |
  |                                                                          |
  |            S P   =   e x1  -  a              ( the NEAR focus )          |
  |            S' P  =   e x1  +  a              ( the FAR focus )           |
  |                                                                          |
  |            S' P  -  S P   =   2 a            ALWAYS                      |
  |                                                                          |
  |   ( On the LEFT branch swap the roles:  SP = -(e x1 + a) in size, and    |
  |     the difference SP - S'P = 2a . Always quote the ABSOLUTE value. )    |
  |                                                                          |
  +==========================================================================+
```

Compare with the ellipse: there it was `SP = a - e x1` and the **sum** was `2a`.
Here it is `SP = e x1 - a` and the **difference** is `2a`. Same skeleton, sign flipped.

**WORKED EXAMPLE 5.1 (do this one twice — it is a favourite)**
Find the focal distances of the point on `x^2/16 - y^2/9 = 1` whose x-coordinate is 8,
and verify the difference is `2a`.

```
   a = 4 , b = 3 , a e = 5 , e = 5/4 .

   Find the point:  64/16 - y^2/9 = 1   ->   4 - y^2/9 = 1   ->  y^2 = 27
                    y = ± 3 sqrt 3  .   Take P = ( 8 , 3 sqrt 3 ) .

   BY FORMULA
        S P  = e x1 - a = (5/4)(8) - 4 = 10 - 4 =  6
        S' P = e x1 + a = (5/4)(8) + 4 = 10 + 4 = 14
        DIFFERENCE = 14 - 6 = 8 = 2 a       ( 2a = 8 )      TICK

   VERIFY BY DISTANCE FORMULA (always do this in practice, not in the exam)
        S = (5,0):   SP  = sqrt( (8-5)^2 + 27 ) = sqrt( 9 + 27 ) = sqrt 36 = 6
        S'= (-5,0):  S'P = sqrt( (8+5)^2 + 27 ) = sqrt( 169 + 27) = sqrt 196 = 14
                                                                       TICK
```

## 5.2 The full `S'P - SP = 2a` proof (Section C)

```
   Let P ( x1 , y1 ) lie on the right branch of  x^2/a^2 - y^2/b^2 = 1 .

   STEP 1   Foci S ( ae , 0 ) , S' ( -ae , 0 ) ,
            directrices x = a/e and x = -a/e .

   STEP 2   By the focus-directrix definition applied to ( S , x = a/e ) :
                 SP = e * PM = e ( x1 - a/e ) = e x1 - a .

   STEP 3   By the same definition applied to ( S' , x = -a/e ) :
                 S'P = e * PM' = e ( x1 + a/e ) = e x1 + a .

   STEP 4   Subtract :
                 S'P - SP = ( e x1 + a ) - ( e x1 - a ) = 2 a .

   STEP 5   This is independent of ( x1 , y1 ) , so the DIFFERENCE OF THE
            FOCAL DISTANCES IS CONSTANT and equals the transverse axis 2a.
                                                                    QED
```

**Alternative (pure distance-formula) version**, if the question forbids the
directrix shortcut:

```
   SP^2  = ( x1 - ae )^2 + y1^2 ,  and from the curve  y1^2 = b^2 ( x1^2/a^2 - 1 )
                                                            = ( a^2 e^2 - a^2 )( x1^2/a^2 - 1 )

   SP^2  = x1^2 - 2 a e x1 + a^2 e^2 + e^2 x1^2 - x1^2 - a^2 e^2 + a^2
         = e^2 x1^2 - 2 a e x1 + a^2
         = ( e x1 - a )^2                ->   SP  = | e x1 - a |

   Similarly  S'P = | e x1 + a | ,  and the difference is 2a.
```

*(Working for the middle line: `b^2 = a^2(e^2-1)`, so
`y1^2 = a^2(e^2-1)(x1^2/a^2 - 1) = (e^2-1)x1^2 - a^2(e^2-1) = e^2 x1^2 - x1^2 - a^2e^2 + a^2`.)*

---

# TOPIC 6 — ASYMPTOTES (the idea an ellipse does not have)

## 6.1 What an asymptote is

An **asymptote** is a straight line that the curve gets closer and closer to, without
ever meeting it. Think of a car on a slip road easing onto a motorway: it lines up
with the motorway more and more, but never actually merges.

```
   Solve  x^2/a^2 - y^2/b^2 = 1  for y :

              y^2      x^2                          b               a^2
              ---  =   ---  - 1      ->     y  =  ± --- x sqrt( 1 - --- )
              b^2      a^2                           a               x^2

   When x is HUGE, a^2/x^2 is almost 0, the square root is almost 1, and

                            b
                     y  ~  ± --- x
                             a
```

So far away the hyperbola is indistinguishable from the two straight lines
`y = (b/a)x` and `y = -(b/a)x`.

```
  +==========================================================================+
  |                                                                          |
  |    ASYMPTOTES of   x^2/a^2 - y^2/b^2 = 1                                 |
  |                                                                          |
  |         y  =  ( b / a ) x       and      y  =  - ( b / a ) x             |
  |                                                                          |
  |         i.e.   b x - a y = 0    and      b x + a y = 0                   |
  |                                                                          |
  |    COMBINED (pair) equation :                                            |
  |                                                                          |
  |                    x^2       y^2                                         |
  |                    ---   -   ---   =   0                                 |
  |                    a^2       b^2                                         |
  |                                                                          |
  |    THE RECIPE: take the equation of the hyperbola and REPLACE THE 1      |
  |    ON THE RIGHT BY 0. Then factorise. That is all.                       |
  |                                                                          |
  +==========================================================================+
```

## 6.2 Hyperbola, conjugate and asymptotes differ only by a CONSTANT

```
   HYPERBOLA        H :   x^2/a^2 - y^2/b^2 - 1  =  0
   ASYMPTOTE PAIR   A :   x^2/a^2 - y^2/b^2      =  0
   CONJUGATE        C :   x^2/a^2 - y^2/b^2 + 1  =  0

   All three have IDENTICAL second-degree parts. Only the constant changes:
   -1 , 0 , +1 .  Immediately:

  +--------------------------------------------------------------------------+
  |                        H  +  C   =   2 A                                 |
  |                                                                          |
  |   "hyperbola + conjugate hyperbola = twice the pair of asymptotes"       |
  +--------------------------------------------------------------------------+
```

This is why the asymptotes are exactly halfway between the two curves, and it gives
you a beautiful trick for the general case in 6.4.

## 6.3 The angle between the asymptotes

```
   Slopes are  m1 = b/a  and  m2 = -b/a .

                       m1 - m2         2 b / a           2 a b
        tan( 2 A ) = | --------- |  = |---------|  =  | ---------- |
                       1 + m1 m2      1 - b^2/a^2       a^2 - b^2

   Easier: the angle each asymptote makes with the x-axis is A = tan^-1 ( b/a ) ,
   so the angle BETWEEN them (the one containing the transverse axis) is
```

```
  +--------------------------------------------------------------------------+
  |            ANGLE BETWEEN THE ASYMPTOTES                                  |
  |                                                                          |
  |            2 A  =  2 tan^-1 ( b / a )   =   2 sec^-1 ( e )               |
  |                                                                          |
  |   because   sec^2 A = 1 + tan^2 A = 1 + b^2/a^2 = e^2 ,  so  sec A = e . |
  |                                                                          |
  |   Consequences you can quote instantly:                                  |
  |       a = b  ->  angle = 90 degrees  ->  RECTANGULAR hyperbola, e = sqrt2|
  |       angle = 60 deg  ->  A = 30 deg -> e = sec 30 = 2/sqrt3             |
  |       angle = 90 deg  ->  A = 45 deg -> e = sec 45 = sqrt 2              |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 6.1**
Find the asymptotes of `x^2/16 - y^2/9 = 1` and the angle between them.

```
   Replace 1 by 0 :     x^2/16 - y^2/9 = 0
                        9 x^2 - 16 y^2 = 0
                        ( 3x - 4y )( 3x + 4y ) = 0

   ASYMPTOTES :   3x - 4y = 0   and   3x + 4y = 0 ,  i.e.  y = ± (3/4) x

   Angle = 2 tan^-1 ( 3/4 ) .   Numerically tan^-1(0.75) = 36.87 deg ,
   so the angle is 73.74 degrees .

   CROSS-CHECK with 2 sec^-1(e):  e = 5/4 , sec^-1(1.25) = 36.87 deg .  TICK
   CROSS-CHECK with the tan(2A) formula:  2ab/(a^2-b^2) = 2(4)(3)/(16-9)
   = 24/7 = 3.4286 , and tan(73.74 deg) = 3.4286 .                      TICK
```

## 6.4 Asymptotes of a GENERAL hyperbola (a 7-mark question)

If `S = a x^2 + 2hxy + by^2 + 2gx + 2fy + c = 0` is a hyperbola, its pair of asymptotes
has the **same** `x^2, xy, y^2, x, y` terms and only a different constant:

```
  +==========================================================================+
  |   METHOD (learn these five lines by heart)                               |
  |                                                                          |
  |   1.  Write the asymptote pair as   S + lambda = 0 ,  i.e. replace the   |
  |       constant c by  c + lambda .                                        |
  |   2.  A PAIR OF STRAIGHT LINES must have  Delta = 0 .                    |
  |   3.  Put the new constant into                                          |
  |            Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0                   |
  |       and solve for lambda.                                              |
  |   4.  Substitute lambda back and FACTORISE into two straight lines.      |
  |   5.  The CONJUGATE hyperbola is then   S + 2 lambda = 0                 |
  |       ( because H + C = 2A ).                                            |
  +==========================================================================+
```

**WORKED EXAMPLE 6.2 (the standard board question)**
Find the asymptotes of `3x^2 - 5xy - 2y^2 + 5x + 11y - 8 = 0`, the angle between them,
and the conjugate hyperbola.

```
   a = 3 , h = -5/2 , b = -2 , g = 5/2 , f = 11/2 , c = -8 + L   (L = lambda)

   Delta = a b c + 2 f g h - a f^2 - b g^2 - c h^2  =  0

   a b c  = (3)(-2)(-8+L) = 48 - 6L
   2 f g h= 2 (11/2)(5/2)(-5/2) = -275/4
   a f^2  = 3 (121/4) = 363/4
   b g^2  = (-2)(25/4) = -50/4
   c h^2  = (-8+L)(25/4) = -200/4 + 25L/4

   Delta = (48 - 6L) - 275/4 - 363/4 + 50/4 + 200/4 - 25L/4  =  0

   Multiply by 4 :   192 - 24L - 275 - 363 + 50 + 200 - 25L = 0
                     ( 192 - 275 - 363 + 50 + 200 ) - 49 L = 0
                                     -196            - 49 L = 0
                                                       L  = -4

   So the ASYMPTOTE PAIR is    3x^2 - 5xy - 2y^2 + 5x + 11y - 12 = 0 .

   FACTORISE.  First the quadratic part:
        3x^2 - 5xy - 2y^2 = ( 3x + y )( x - 2y )          [ check: 3x^2 -6xy +xy -2y^2 ]

   Write   ( 3x + y + p )( x - 2y + q ) = 0 and match:
        x  terms :  3q + p =  5
        y  terms :   q - 2p = 11
        constant :      p q = -12

   From the first,  p = 5 - 3q .  Then  q - 2(5 - 3q) = 11  ->  7q = 21 -> q = 3 ,
   so p = -4 , and p q = -12 .                                    TICK

   ASYMPTOTES :        3 x + y - 4 = 0        and        x - 2 y + 3 = 0

   CONJUGATE HYPERBOLA :  S + 2L = 0  ->  3x^2 - 5xy - 2y^2 + 5x + 11y - 16 = 0

   CENTRE (intersection of the asymptotes):
        3x + y = 4 , x - 2y = -3  ->  from the first y = 4 - 3x ,
        x - 2(4 - 3x) = -3  ->  7x = 5  ->  x = 5/7 , y = 4 - 15/7 = 13/7
        CENTRE = ( 5/7 , 13/7 )

   ANGLE between the asymptotes: slopes -3 and 1/2 ,
        tan th = | ( -3 - 1/2 ) / ( 1 + (-3)(1/2) ) | = | (-7/2) / (-1/2) | = 7
        angle = tan^-1 7 = 81.87 degrees .
```

> **TRAP:** after finding `lambda`, students forget to factorise and just leave the
> conic `S + lambda = 0`. The question asks for **asymptotes**, i.e. two STRAIGHT
> LINE equations. Factorising is worth 2 of the 7 marks.

---

# TOPIC 7 — THE CONJUGATE HYPERBOLA

## 7.1 What it is

Swap which axis is transverse and which is conjugate. Formally, change the sign of
the whole equation:

```
  +==========================================================================+
  |                                                                          |
  |   HYPERBOLA            x^2/a^2  -  y^2/b^2  =   1                        |
  |                                                                          |
  |   CONJUGATE HYPERBOLA  x^2/a^2  -  y^2/b^2  =  -1                        |
  |                                                                          |
  |                that is  y^2/b^2  -  x^2/a^2  =   1                       |
  |                                                                          |
  +==========================================================================+
```

They share the **same centre**, the **same asymptotes**, and their foci are the same
distance `sqrt(a^2 + b^2)` from the centre — but on perpendicular axes.

```
                              y
             \                ^                /
              \    __         |         __    /
               \     `-.______|______.-'     /       <- the CONJUGATE hyperbola
                \             |             /           opens UP and DOWN,
                 \            |            /            vertices ( 0 , ± b )
       )          \           |           /          (
        )          \          |          /          (
   ------)----------\---------C---------/----------(--------> x
        )          /          |          \          (
       )          /           |           \          (
                 /            |            \
                /             |             \        <- the ORIGINAL hyperbola
               /       _______|_______       \          opens LEFT and RIGHT,
              /   __.-'       |       `-.__   \         vertices ( ± a , 0 )
             /                |                \

        BOTH curves squeeze into the SAME pair of asymptotes.
```

| Item | Hyperbola `x^2/a^2 - y^2/b^2 = 1` | Conjugate `y^2/b^2 - x^2/a^2 = 1` |
|---|---|---|
| Transverse axis | `2a`, along x | `2b`, along y |
| Conjugate axis | `2b`, along y | `2a`, along x |
| Vertices | `(±a, 0)` | `(0, ±b)` |
| Foci | `(±ae1, 0)`, `ae1 = sqrt(a^2+b^2)` | `(0, ±be2)`, `be2 = sqrt(a^2+b^2)` |
| Eccentricity | `e1 = sqrt(1 + b^2/a^2)` | `e2 = sqrt(1 + a^2/b^2)` |
| Latus rectum | `2b^2/a` | `2a^2/b` |
| Directrices | `x = ±a/e1` | `y = ±b/e2` |
| Asymptotes | `y = ±(b/a)x` | **the same** `y = ±(b/a)x` |

## 7.2 The relation `1/e1^2 + 1/e2^2 = 1` (a 2-mark or 4-mark favourite)

```
   e1^2  =  1 + b^2/a^2  =  ( a^2 + b^2 ) / a^2          ->   1/e1^2 = a^2/(a^2+b^2)

   e2^2  =  1 + a^2/b^2  =  ( a^2 + b^2 ) / b^2          ->   1/e2^2 = b^2/(a^2+b^2)

            1       1        a^2  +  b^2
           ----  + ----  =  -------------  =  1                       QED
           e1^2    e2^2      a^2  +  b^2
```

```
  +--------------------------------------------------------------------------+
  |                        1        1                                        |
  |                       ----  +  ----   =   1                              |
  |                       e1^2     e2^2                                      |
  |                                                                          |
  |   Given one eccentricity, the other pops straight out.                   |
  |   e1 = 5/4  ->  1/e2^2 = 1 - 16/25 = 9/25  ->  e2 = 5/3                  |
  |   e1 = 2    ->  1/e2^2 = 1 - 1/4  = 3/4    ->  e2 = 2/sqrt3              |
  |   e1 = sqrt2 -> 1/e2^2 = 1 - 1/2  = 1/2    ->  e2 = sqrt2  (rectangular) |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 7.1**
Write the conjugate hyperbola of `x^2/9 - y^2/16 = 1`, find both eccentricities, and
verify `1/e1^2 + 1/e2^2 = 1`.

```
   CONJUGATE :  y^2/16 - x^2/9 = 1 .

   For the original :  a^2 = 9 , b^2 = 16 , e1 = sqrt( 1 + 16/9 ) = sqrt(25/9) = 5/3
   For the conjugate:  transverse semi-axis 4 , conjugate semi-axis 3 ,
                       e2 = sqrt( 1 + 9/16 ) = sqrt(25/16) = 5/4

   1/e1^2 + 1/e2^2 = 9/25 + 16/25 = 25/25 = 1                          TICK

   Foci of the original :  ( ± sqrt(9+16) , 0 ) = ( ±5 , 0 )
   Foci of the conjugate:  ( 0 , ± sqrt(9+16) ) = ( 0 , ±5 )
   Same distance 5 from the centre, on perpendicular axes.             TICK
```

---

# TOPIC 8 — THE RECTANGULAR (EQUILATERAL) HYPERBOLA

## 8.1 The form `x^2 - y^2 = a^2`

A hyperbola is **rectangular** (also called **equilateral**) when the transverse and
conjugate axes are equal:  `a = b`.

```
  +==========================================================================+
  |                                                                          |
  |   RECTANGULAR HYPERBOLA        x^2  -  y^2   =   a^2                     |
  |                                                                          |
  |   a = b        ->   e^2 = 1 + b^2/a^2 = 2      ->      e  =  sqrt 2      |
  |                                                                          |
  |   Asymptotes   y = x   and   y = -x     (perpendicular! hence the name   |
  |                                          "RECTANGULAR" = right-angled)   |
  |   Vertices     ( ± a , 0 )        Foci ( ± a sqrt2 , 0 )                 |
  |   Directrices  x = ± a / sqrt 2   Latus rectum = 2 b^2/a = 2 a           |
  |   The latus rectum EQUALS the transverse axis.                           |
  |                                                                          |
  +==========================================================================+
```

Its conjugate is `y^2 - x^2 = a^2`, and both have `e = sqrt 2` — the only case where
a hyperbola and its conjugate have the same eccentricity. (Check with
`1/2 + 1/2 = 1`. **TICK**)

```
                       y
          \            ^            /
            \          |          /
              \        |        /                 y = -x   and   y = x
                \      |      /                   at 90 degrees to each other
                  \    |    /
        )           \  |  /           (
   -------)-----------\|/-----------(---------> x
        )           /  |  \           (
                  /    |    \
                /      |      \
              /        |        \
            /          |          \
```

## 8.2 The form `x y = c^2` — the same curve, rotated 45 degrees

Rotate `x^2 - y^2 = a^2` by 45 degrees about the origin and the asymptotes land on the
coordinate axes. The equation becomes:

```
  +==========================================================================+
  |                                                                          |
  |                          x  y   =   c^2                                  |
  |                                                                          |
  |   ASYMPTOTES : the coordinate axes,  x = 0  and  y = 0                   |
  |   VERTICES   : ( c , c )  and  ( -c , -c )                               |
  |   TRANSVERSE AXIS : the line y = x , length 2 sqrt2 c   ( so a = c sqrt2)|
  |   FOCI       : ( c sqrt2 , c sqrt2 )  and  ( -c sqrt2 , -c sqrt2 )       |
  |   DIRECTRICES: x + y = ± c sqrt 2                                        |
  |   ECCENTRICITY : e = sqrt 2                                              |
  |   LATUS RECTUM : 2 sqrt2 c                                               |
  |                                                                          |
  |   PARAMETRIC POINT :        P ( t )  =  ( c t , c / t ) ,  t != 0        |
  |                                                                          |
  +==========================================================================+
```

*(Where `a = c sqrt2` comes from: rotating `x^2 - y^2 = a^2` by 45 degrees gives
`XY = a^2/2`, so `c^2 = a^2/2` and `a = c sqrt2`.)*

```
                        y
                        ^
              |         |
              |         |               x y = c^2 with c > 0 lives in the
               \        |               FIRST and THIRD quadrants.
                \       |
                  \     |               Branch 1: x > 0 , y > 0 , vertex (c,c)
                     \  |               Branch 2: x < 0 , y < 0 , vertex (-c,-c)
                        \_
      ------------------- ` - - - - - - - - - - -----------> x
        - - - - - - - - -_/
                       /  |
                    /     |             ( x y = -c^2 would sit in the
                  /       |               SECOND and FOURTH quadrants )
                /         |
              /           |
```

**Tangent and normal on `xy = c^2`** — worth memorising, they come up in EAPCET:

```
   Differentiate  x y = c^2 :   y + x dy/dx = 0   ->   dy/dx = - y / x

   At  P( t ) = ( c t , c/t ) :   dy/dx = - ( c/t ) / ( c t ) = - 1 / t^2

  +--------------------------------------------------------------------------+
  |   TANGENT at ( c t , c/t ) :        x  +  t^2 y   =   2 c t              |
  |                                                                          |
  |   NORMAL  at ( c t , c/t ) :        t^3 x  -  t y  =  c ( t^4 - 1 )      |
  |                                                                          |
  |   CHORD joining t1 and t2  :        x  +  t1 t2 y  =  c ( t1 + t2 )      |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 8.1**
Show that the portion of a tangent to `xy = c^2` cut off by the axes is bisected at the
point of contact, and that the triangle it makes with the axes has constant area.

```
   Tangent at P(t) :   x + t^2 y = 2 c t .

   Meets the x-axis ( y = 0 ) at   M = ( 2 c t , 0 )
   Meets the y-axis ( x = 0 ) at   N = ( 0 , 2 c / t )

   Midpoint of MN = ( ( 2ct + 0 )/2 , ( 0 + 2c/t )/2 ) = ( c t , c/t ) = P    TICK

   Area of triangle OMN = (1/2) * OM * ON = (1/2)( 2 c t )( 2 c / t ) = 2 c^2

   The t has cancelled: the area is 2 c^2 for EVERY tangent.                  TICK
```

**WORKED EXAMPLE 8.2**
For `xy = 16`, find the vertices, the foci, the eccentricity and the latus rectum.

```
   c^2 = 16  ->  c = 4 .

   Vertices    ( 4 , 4 ) and ( -4 , -4 )
   a = c sqrt2 = 4 sqrt2 ,  and since the curve is rectangular b = a .
   e = sqrt 2
   a e = 4 sqrt2 * sqrt2 = 8 , measured along the line y = x , so the foci are
        ( 8/sqrt2 , 8/sqrt2 ) = ( 4 sqrt2 , 4 sqrt2 )   and   ( -4sqrt2, -4sqrt2 )
   Latus rectum = 2 b^2 / a = 2 a = 8 sqrt 2
   Directrices : x + y = ± c sqrt2 = ± 4 sqrt 2

   CHECK the vertex is at distance a from the centre:
        dist of (4,4) from O = sqrt(16+16) = sqrt32 = 4 sqrt2 = a           TICK
```

---

# TOPIC 9 — HYPERBOLA WITH CENTRE `(h, k)`, AND COMPLETING THE SQUARE

## 9.1 The shifted form

Slide the whole picture so the centre lands at `(h, k)`. Replace `x` by `x - h` and
`y` by `y - k`:

```
  +==========================================================================+
  |                                                                          |
  |          ( x - h )^2       ( y - k )^2                                   |
  |          -----------   -   -----------   =   1                           |
  |              a^2               b^2                                       |
  |                                                                          |
  |   Centre        ( h , k )                                                |
  |   Vertices      ( h ± a , k )                                            |
  |   Foci          ( h ± a e , k )                                          |
  |   Directrices   x  =  h ± a / e                                          |
  |   Asymptotes    y - k  =  ± ( b / a ) ( x - h )                          |
  |   Transverse axis  y = k , length 2a  ;  conjugate axis x = h, length 2b |
  |   Latus rectum  2 b^2 / a , on the lines  x = h ± a e                    |
  |                                                                          |
  |   EVERY element is the standard one with h added to x and k added to y.  |
  +==========================================================================+
```

## 9.2 The recipe for a general equation (the most-asked 7-mark question)

```
  +--------------------------------------------------------------------------+
  |   1.  Group the x terms together and the y terms together.               |
  |   2.  Take out the coefficient of x^2 from the x group,                  |
  |       and the coefficient of y^2 (WITH ITS MINUS SIGN) from the y group. |
  |   3.  COMPLETE THE SQUARE inside each bracket.                           |
  |       ( half the coefficient of x , then square it )                     |
  |   4.  Move all the loose numbers to the right-hand side.                 |
  |   5.  DIVIDE so the right-hand side is exactly 1.                        |
  |   6.  Read off h, k, a^2, b^2 . a^2 is under the POSITIVE bracket.       |
  |   7.  Compute  ae = sqrt(a^2+b^2)  and  e = ae / a .                     |
  |   8.  List centre, vertices, foci, directrices, axes, LR, asymptotes.    |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 9.1 (learn this one line by line — it is the exam question)**
Find the centre, eccentricity, foci, directrices, the lengths of the axes, the latus
rectum and the asymptotes of

```
                9 x^2 - 16 y^2 - 36 x - 32 y - 124 = 0
```

```
   STEP 1-2   Group and factor out:
                9 ( x^2 - 4 x )  -  16 ( y^2 + 2 y )  =  124

              ( careful: -16y^2 - 32y = -16( y^2 + 2y ) , the sign goes OUTSIDE )

   STEP 3     Complete the squares:
                x^2 - 4x = ( x - 2 )^2 - 4
                y^2 + 2y = ( y + 1 )^2 - 1

                9 [ ( x-2 )^2 - 4 ] - 16 [ ( y+1 )^2 - 1 ]  =  124
                9 ( x-2 )^2 - 36 - 16 ( y+1 )^2 + 16        =  124

   STEP 4     9 ( x-2 )^2 - 16 ( y+1 )^2  =  124 + 36 - 16  =  144

   STEP 5     Divide by 144 :

                ( x - 2 )^2       ( y + 1 )^2
                -----------   -   -----------   =   1
                     16                9

   STEP 6     h = 2 , k = -1 ,  a^2 = 16 -> a = 4 ,  b^2 = 9 -> b = 3
              ( the PLUS sign is on the x-bracket, so the transverse axis
                is HORIZONTAL, along y = -1 )

   STEP 7     a e = sqrt( 16 + 9 ) = 5      ->     e = 5 / 4

   STEP 8     CENTRE            ( 2 , -1 )
              VERTICES          ( 2 ± 4 , -1 )  =  ( 6 , -1 ) and ( -2 , -1 )
              FOCI              ( 2 ± 5 , -1 )  =  ( 7 , -1 ) and ( -3 , -1 )
              DIRECTRICES       x = 2 ± a/e = 2 ± 16/5
                                  ->  x = 26/5   and   x = -6/5
              TRANSVERSE AXIS   length 2a = 8 , on the line y = -1
              CONJUGATE  AXIS   length 2b = 6 , on the line x = 2
              LATUS RECTUM      2 b^2 / a = 18/4 = 9/2 ,
                                on the lines x = 7 and x = -3
              ASYMPTOTES        y + 1 = ± (3/4)( x - 2 )
                                4y + 4 = ± 3( x - 2 )
                                ->  3x - 4y - 10 = 0   and   3x + 4y - 2 = 0

   CHECK the asymptotes pass through the centre ( 2 , -1 ) :
        3(2) - 4(-1) - 10 = 6 + 4 - 10 = 0        TICK
        3(2) + 4(-1) -  2 = 6 - 4 -  2 = 0        TICK
   CHECK a vertex is on the curve: put ( 6 , -1 ) into the original:
        9(36) - 16(1) - 36(6) - 32(-1) - 124 = 324 - 16 - 216 + 32 - 124 = 0  TICK
```

**WORKED EXAMPLE 9.2**
Reduce `16x^2 - 9y^2 + 32x + 36y - 164 = 0` and list everything.

```
   16 ( x^2 + 2x ) - 9 ( y^2 - 4y ) = 164
   16 [ (x+1)^2 - 1 ] - 9 [ (y-2)^2 - 4 ] = 164
   16 (x+1)^2 - 16 - 9 (y-2)^2 + 36 = 164
   16 (x+1)^2 - 9 (y-2)^2 = 144

           ( x + 1 )^2      ( y - 2 )^2
           -----------  -   -----------  =  1
                9               16

   h = -1 , k = 2 , a = 3 , b = 4 ,  a e = sqrt(9+16) = 5 ,  e = 5/3

   Centre      ( -1 , 2 )
   Vertices    ( 2 , 2 ) and ( -4 , 2 )
   Foci        ( 4 , 2 ) and ( -6 , 2 )
   Directrices x = -1 ± 9/5   ->   x = 4/5  and  x = -14/5
   Axes        transverse 6 ( on y = 2 ) , conjugate 8 ( on x = -1 )
   LR          2(16)/3 = 32/3
   Asymptotes  y - 2 = ± (4/3)( x + 1 )  ->  4x - 3y + 10 = 0 , 4x + 3y - 2 = 0

   CHECK vertex ( 2 , 2 ) in the original:
        16(4) - 9(4) + 32(2) + 36(2) - 164 = 64 - 36 + 64 + 72 - 164 = 0   TICK
```

> **TRAP:** when you factor out a **negative** coefficient, every sign inside the
> bracket flips. `-16y^2 - 32y` is `-16(y^2 + 2y)`, **not** `-16(y^2 - 2y)`.
> This one slip destroys the whole 7 marks. Check by expanding back.

---

# TOPIC 10 — PARAMETRIC FORM `(a sec theta, b tan theta)`

## 10.1 Where it comes from

For the ellipse we used `cos^2 + sin^2 = 1`. Here we need an identity with a MINUS:

```
                    sec^2 theta  -  tan^2 theta  =  1
```

So if we set `x = a sec theta` and `y = b tan theta`, then

```
        x^2/a^2 - y^2/b^2 = sec^2 th - tan^2 th = 1              TICK
```

```
  +==========================================================================+
  |     PARAMETRIC POINT     P ( theta )  =  ( a sec theta , b tan theta )   |
  |                                                                          |
  |     theta is called the ECCENTRIC ANGLE.                                 |
  |     theta in ( -pi/2 , pi/2 )      ->  RIGHT branch  ( sec th > 0 )      |
  |     theta in ( pi/2 , 3pi/2 )      ->  LEFT branch   ( sec th < 0 )      |
  |     theta = ± pi/2 is NOT allowed  ( sec and tan are undefined )         |
  |                                                                          |
  |     AUXILIARY CIRCLE :  x^2 + y^2 = a^2  ( on the transverse axis        |
  |                          as diameter ), exactly as for the ellipse.      |
  +==========================================================================+
```

**WORKED EXAMPLE 10.1**
Find the point on `x^2/9 - y^2/4 = 1` whose eccentric angle is 60 degrees.

```
   a = 3 , b = 2 .  sec 60 = 2 , tan 60 = sqrt 3 .

   P = ( 3 * 2 , 2 * sqrt3 ) = ( 6 , 2 sqrt 3 )

   CHECK :  36/9 - 12/4 = 4 - 3 = 1                                TICK
```

## 10.2 The chord joining two parameters

```
  +==========================================================================+
  |   CHORD joining  P(alpha)  and  Q(beta)  on  x^2/a^2 - y^2/b^2 = 1 :     |
  |                                                                          |
  |      x        alpha - beta        y        alpha + beta                  |
  |     ---  cos( ------------ )  -  ---  sin( ------------ )                |
  |      a              2             b              2                       |
  |                                                                          |
  |                                     alpha + beta                         |
  |                            =   cos( ------------ )                       |
  |                                           2                              |
  +==========================================================================+
```

Compare with the ellipse chord
`(x/a)cos((A+B)/2) + (y/b)sin((A+B)/2) = cos((A-B)/2)`.
Same ingredients, shuffled — so **do not guess**, learn the hyperbola one separately.

**Verification (so you trust it):** put `x = a sec alpha`, `y = b tan alpha`, write
`A = (alpha-beta)/2`, `B = (alpha+beta)/2`, so `alpha = A + B`:

```
     LHS = sec(A+B) cos A - tan(A+B) sin B
         = [ cos A - sin(A+B) sin B ] / cos(A+B)
         = [ cos A - ( sinA cosB + cosA sinB ) sinB ] / cos(A+B)
         = [ cos A cos^2 B - sin A sin B cos B ] / cos(A+B)
         = cos B [ cosA cosB - sinA sinB ] / cos(A+B)
         = cos B cos(A+B) / cos(A+B)
         = cos B   =   RHS                                        TICK
```

**Point of intersection of the tangents at `alpha` and `beta`:**

```
  +--------------------------------------------------------------------------+
  |                a cos( (alpha - beta)/2 )              alpha + beta       |
  |         x  =  --------------------------- ,   y = b tan( ----------- )   |
  |                 cos( (alpha + beta)/2 )                        2         |
  +--------------------------------------------------------------------------+
```

---

# TOPIC 11 — WHERE IS A POINT? THE `S11` TEST

```
                    x^2     y^2
              S  =  --- -   --- -  1
                    a^2     b^2

                    x1^2    y1^2
             S11 =  ---- -  ---- - 1          ( just substitute the point )
                    a^2     b^2
```

```
  +==========================================================================+
  |                                                                          |
  |     S11  >  0    P lies INSIDE a branch  ( the region containing a FOCUS)|
  |     S11  =  0    P lies ON the hyperbola                                 |
  |     S11  <  0    P lies OUTSIDE  ( the region containing the CENTRE )    |
  |                                                                          |
  |   NOTE: this is the OPPOSITE of the ellipse convention. Take 10 seconds  |
  |   to sanity-check with the CENTRE (0,0): S11 = -1 < 0, and the centre is |
  |   obviously not inside either branch. And with a FOCUS (ae,0):           |
  |   S11 = e^2 - 1 > 0, and the focus IS inside a branch.                   |
  |                                                                          |
  +==========================================================================+
```

```
     the three regions

              \        |        /
               \  IN   |  OUT  /              OUT = the "waist" region that
     )   OUT    \      |      /    OUT             contains the centre
      )          \     |     /         (      IN  = the two pockets, each
       )   -------\----C----/-------  (            containing one focus
      )          /     |     \       (
     )   OUT    /      |      \    OUT
               /  IN   |  OUT  \
              /        |        \

     ( the wedge above and below the centre, between the asymptotes,
       is also "OUT" — anything not inside a branch is out )
```

**WORKED EXAMPLE 11.1**
Where do the points `(5, 2)`, `(3, -4)` and `(0, 0)` lie with respect to
`x^2/16 - y^2/9 = 1`?

```
   ( 5 , 2 ) :  S11 = 25/16 - 4/9 - 1
                    = 1.5625 - 0.4444 - 1 = 0.1181   > 0    ->  INSIDE a branch

   ( 3 , -4 ):  S11 =  9/16 - 16/9 - 1
                    = 0.5625 - 1.7778 - 1 = -2.2153  < 0    ->  OUTSIDE

   ( 0 , 0 ) :  S11 = 0 - 0 - 1 = -1               < 0    ->  OUTSIDE
                ( the centre — as expected )
```

---

# TOPIC 12 — WHEN DOES A LINE TOUCH A HYPERBOLA?

## 12.1 The condition

Substitute `y = mx + c` into `x^2/a^2 - y^2/b^2 = 1` and demand a repeated root.

```
        b^2 x^2  -  a^2 ( m x + c )^2   =   a^2 b^2

        b^2 x^2 - a^2 ( m^2x^2 + 2mcx + c^2 ) - a^2 b^2 = 0

        ( b^2 - a^2 m^2 ) x^2  -  2 a^2 m c x  -  ( a^2 c^2 + a^2 b^2 )  =  0

   TANGENT  <->  discriminant = 0 :

        4 a^4 m^2 c^2  +  4 ( b^2 - a^2 m^2 )( a^2 c^2 + a^2 b^2 )  =  0

   Divide by 4 a^2 :

        a^2 m^2 c^2  +  ( b^2 - a^2 m^2 )( c^2 + b^2 )  =  0

        a^2m^2c^2 + b^2c^2 + b^4 - a^2m^2c^2 - a^2m^2b^2 = 0

        b^2 c^2 + b^4 - a^2 m^2 b^2 = 0        divide by b^2

                    c^2  =  a^2 m^2  -  b^2
```

```
  +==========================================================================+
  |                                                                          |
  |    y = m x + c   is a TANGENT to  x^2/a^2 - y^2/b^2 = 1  if and only if  |
  |                                                                          |
  |                    c^2   =   a^2 m^2   -   b^2                           |
  |                                                                          |
  |    so the TANGENTS OF SLOPE m are                                        |
  |                                                                          |
  |                y  =  m x  ±  sqrt( a^2 m^2 - b^2 )                       |
  |                                                                          |
  |    and the POINT OF CONTACT is                                           |
  |                                                                          |
  |                      (   - a^2 m / c  ,   - b^2 / c   )                  |
  |                                                                          |
  +==========================================================================+
```

> **TRAP — the slope restriction.** `c^2 = a^2m^2 - b^2` needs the right-hand side
> to be `>= 0`, i.e. `|m| >= b/a`.
> ```
>   |m| >  b/a   two tangents of that slope exist (one on each branch)
>   |m| =  b/a   c = 0 : that "tangent" IS the asymptote y = ±(b/a)x
>   |m| <  b/a   NO tangent of that slope exists at all
> ```
> The ellipse had no such restriction. If a question asks for a tangent of slope
> `1/2` to `x^2/4 - y^2/9 = 1` the honest answer is "there is none", because
> `b/a = 3/2 > 1/2`.

## 12.2 Why the point of contact is `(-a^2m/c, -b^2/c)`

```
   The tangent at ( x1 , y1 ) is   x x1/a^2 - y y1/b^2 = 1 .
   The given line is  m x - y + c = 0 .  Compare coefficients:

        x1 / a^2       - y1 / b^2        -1
        --------  =    -----------  =   ----
           m               -1             c

   From the first and third :  x1 = - a^2 m / c
   From the second and third:  y1 / b^2 = -1/c   ->   y1 = - b^2 / c
```

**WORKED EXAMPLE 12.1**
Show that `y = x + 3` touches `x^2/25 - y^2/16 = 1` and find the point of contact.

```
   m = 1 , c = 3 , a^2 = 25 , b^2 = 16 .

   a^2 m^2 - b^2 = 25 ( 1 ) - 16 = 9 ,   and   c^2 = 9 .   EQUAL  ->  TANGENT

   Point of contact = ( - a^2 m / c , - b^2 / c ) = ( -25/3 , -16/3 )

   CHECK on the curve:  (625/9)/25 - (256/9)/16 = 25/9 - 16/9 = 9/9 = 1     TICK
   CHECK on the line :  -16/3  = ( -25/3 ) + 3 = -25/3 + 9/3 = -16/3        TICK
```

**WORKED EXAMPLE 12.2**
Find the equations of the tangents to `x^2/16 - y^2/9 = 1` that are parallel to
`2x - y + 5 = 0`.

```
   The required slope is m = 2 .   ( |m| = 2 > b/a = 3/4 , so they exist. )

   c^2 = a^2 m^2 - b^2 = 16(4) - 9 = 64 - 9 = 55   ->   c = ± sqrt 55

   TANGENTS :   y = 2 x + sqrt55      and      y = 2 x - sqrt55
```

---

# TOPIC 13 — TANGENTS: THREE FORMS

```
  +==========================================================================+
  |                                                                          |
  |   (1)  AT THE POINT ( x1 , y1 ) ON the curve      [ this is "T = 0" ]    |
  |                                                                          |
  |               x x1        y y1                                           |
  |               ----   -    ----   =   1                                   |
  |                a^2         b^2                                           |
  |                                                                          |
  |   (2)  AT THE PARAMETRIC POINT ( a sec th , b tan th )                   |
  |                                                                          |
  |               x sec th        y tan th                                   |
  |               --------   -    --------   =   1                           |
  |                   a               b                                      |
  |                                                                          |
  |   (3)  WITH A GIVEN SLOPE m                                              |
  |                                                                          |
  |               y  =  m x  ±  sqrt( a^2 m^2 - b^2 )                        |
  |                                                                          |
  +==========================================================================+
```

## 13.1 Where form (1) comes from — differentiate

```
        x^2/a^2 - y^2/b^2 = 1

        2x/a^2 - ( 2y / b^2 ) dy/dx = 0        ->      dy/dx  =  b^2 x / ( a^2 y )

   At ( x1 , y1 ) the slope is  m = b^2 x1 / ( a^2 y1 ) , so the tangent is

        y - y1  =  [ b^2 x1 / ( a^2 y1 ) ] ( x - x1 )

        a^2 y1 y - a^2 y1^2  =  b^2 x1 x - b^2 x1^2

   Divide by a^2 b^2 :

        y y1 / b^2  -  y1^2 / b^2  =  x x1 / a^2  -  x1^2 / a^2

        x x1/a^2 - y y1/b^2  =  x1^2/a^2 - y1^2/b^2  =  1     ( P is on the curve )
```

## 13.2 The tangent picture

```
                     the TANGENT touches at exactly one point;
                     the NORMAL is perpendicular to it there.

                              |  normal
                              |
                    ..........P
                   .          |\
                  .           | \    tangent
                 .            |  \
                .             |
   -------------.-------------+----------------> x
```

**WORKED EXAMPLE 13.1**
Find the tangent to `x^2/16 - y^2/9 = 1` at the point `(5, 9/4)`.

```
   FIRST check the point is on the curve:
        25/16 - (81/16)/9 = 25/16 - 9/16 = 16/16 = 1                TICK

   T = 0 :   x ( 5 ) / 16  -  y ( 9/4 ) / 9  =  1
             5x/16  -  y/4  =  1
   Multiply by 16 :     5 x  -  4 y  =  16
```
**Tangent: `5x - 4y = 16`.** (Check it passes through (5, 9/4): `25 - 9 = 16`. **TICK**)

**WORKED EXAMPLE 13.2**
Find the tangent to `x^2/9 - y^2/4 = 1` at the point with eccentric angle `theta = 60`.

```
   a = 3 , b = 2 , sec 60 = 2 , tan 60 = sqrt3 .   P = ( 6 , 2 sqrt3 ) .

   Form (2):   x ( 2 ) / 3  -  y ( sqrt3 ) / 2  =  1

   Multiply by 6 :     4 x  -  3 sqrt3 y  =  6

   CHECK at P :  4(6) - 3sqrt3 ( 2 sqrt3 ) = 24 - 18 = 6                TICK
```

---

# TOPIC 14 — NORMALS: THREE FORMS

The **normal** at a point is the line through that point perpendicular to the tangent.

```
  +==========================================================================+
  |                                                                          |
  |   (1)  AT THE POINT ( x1 , y1 )                                          |
  |                                                                          |
  |               a^2 x       b^2 y                                          |
  |               -----   +   -----   =   a^2  +  b^2                        |
  |                x1          y1                                            |
  |                                                                          |
  |   (2)  AT THE PARAMETRIC POINT ( a sec th , b tan th )                   |
  |                                                                          |
  |               a x cos th   +   b y cot th   =   a^2  +  b^2              |
  |                                                                          |
  |   (3)  WITH A GIVEN SLOPE m                                              |
  |                                                                          |
  |                              m ( a^2 + b^2 )                             |
  |               y  =  m x  ∓  ----------------------                       |
  |                              sqrt( a^2 - b^2 m^2 )                       |
  |                                                                          |
  +==========================================================================+
```

Note the **two sign changes** from the ellipse: a minus becomes a plus in the middle,
and `a^2 - b^2` becomes `a^2 + b^2` on the right. (Both come from `b^2 -> -b^2`.)

## 14.1 Deriving form (1)

```
   Tangent slope at ( x1 , y1 ) is  b^2 x1 / ( a^2 y1 )   [ from 13.1 ] ,
   so the NORMAL slope is the negative reciprocal :  - a^2 y1 / ( b^2 x1 ) .

        y - y1  =  - [ a^2 y1 / ( b^2 x1 ) ] ( x - x1 )

        b^2 x1 ( y - y1 )  =  - a^2 y1 ( x - x1 )

        a^2 y1 x  +  b^2 x1 y  =  a^2 y1 x1 + b^2 x1 y1  =  x1 y1 ( a^2 + b^2 )

   Divide by x1 y1 :        a^2 x / x1  +  b^2 y / y1  =  a^2 + b^2
```

## 14.2 Deriving form (2) from form (1)

```
   Put x1 = a sec th , y1 = b tan th :

        a^2 x / ( a sec th )  +  b^2 y / ( b tan th )  =  a^2 + b^2

        a x cos th   +   b y cot th   =   a^2 + b^2
```

**WORKED EXAMPLE 14.1**
Find the normal to `x^2/16 - y^2/9 = 1` at `(5, 9/4)`, and verify it is perpendicular
to the tangent found in Example 13.1.

```
   Form (1):   16 x / 5  +  9 y / ( 9/4 )  =  16 + 9  =  25

               16x/5  +  4 y  =  25

   Multiply by 5 :     16 x  +  20 y  =  125

   CHECK it passes through the point:  16(5) + 20(9/4) = 80 + 45 = 125     TICK

   PERPENDICULARITY :
        tangent  5x - 4y = 16   ->  slope =  5/4
        normal   16x + 20y = 125 -> slope = -16/20 = -4/5
        product = ( 5/4 )( -4/5 ) = -1                                     TICK
```

**WORKED EXAMPLE 14.2**
Find the normal to `x^2/9 - y^2/4 = 1` at the point with `theta = 60 degrees`.

```
   a = 3 , b = 2 , cos60 = 1/2 , cot60 = 1/sqrt3 , a^2 + b^2 = 13 .

   Form (2):   3 x ( 1/2 )  +  2 y ( 1/sqrt3 )  =  13

               (3/2) x  +  ( 2/sqrt3 ) y  =  13

   Multiply by 2 sqrt3 :      3 sqrt3 x  +  4 y  =  26 sqrt3

   CHECK at P ( 6 , 2 sqrt3 ) :  3sqrt3 (6) + 4( 2 sqrt3 ) = 18sqrt3 + 8sqrt3
                                                            = 26 sqrt3     TICK
   CHECK perpendicular to the tangent 4x - 3sqrt3 y = 6 :
        tangent slope = 4/(3 sqrt3) ,  normal slope = -3sqrt3/4 ,
        product = -1                                                       TICK
```

---

# TOPIC 15 — THE CHORD FAMILY: `T = 0`, `T = S11`, `S·S11 = T^2`

One expression `T` does four different jobs. Learn `T` once.

```
                       x x1       y y1
                 T  =  ----   -   ----   -   1
                        a^2        b^2
```

| Equation | What it gives you | When the point is |
|---|---|---|
| `T = 0` | the **tangent** at `(x1,y1)` | ON the curve |
| `T = 0` | the **chord of contact** of the tangents from `(x1,y1)` | OFF the curve |
| `T = 0` | the **polar** of `(x1,y1)` | anywhere |
| `T = S11` | the **chord whose midpoint** is `(x1,y1)` | inside/outside |
| `S · S11 = T^2` | the **pair of tangents** from `(x1,y1)` | OFF the curve |

## 15.1 Chord of contact

From an external point `P(x1, y1)` draw the two tangents; they touch at `Q` and `R`.
The line `QR` is the **chord of contact**, and its equation is simply `T = 0`.

```
              Q
             /|
            / |
      P----+  |          chord of contact  QR  :   x x1/a^2 - y y1/b^2 = 1
            \ |
             \|
              R
```

**WORKED EXAMPLE 15.1**
Find the chord of contact of the tangents drawn from `(3, 2)` to `x^2/9 - y^2/4 = 1`.

```
   T = 0 :    x ( 3 ) / 9   -   y ( 2 ) / 4   =   1

              x/3  -  y/2  =  1

   Multiply by 6 :        2 x  -  3 y  =  6
```

## 15.2 Chord with a given MIDPOINT

```
  +--------------------------------------------------------------------------+
  |   The chord of  S = 0  whose MIDPOINT is ( x1 , y1 ) is                  |
  |                                                                          |
  |                             T  =  S11                                    |
  |                                                                          |
  |   i.e.   x x1/a^2 - y y1/b^2 - 1  =  x1^2/a^2 - y1^2/b^2 - 1             |
  |                                                                          |
  |   The  -1  cancels on both sides, so in practice                         |
  |                                                                          |
  |             x x1/a^2 - y y1/b^2  =  x1^2/a^2 - y1^2/b^2                  |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 15.2**
Find the chord of `x^2 - 4y^2 = 4` which is bisected at `(3, 1)`.

```
   First put it in standard form :   x^2/4 - y^2/1 = 1 ,  so a^2 = 4 , b^2 = 1 .

   T = S11 :        x ( 3 ) / 4  -  y ( 1 ) / 1   =   9/4  -  1

                    3x/4  -  y  =  5/4

   Multiply by 4 :        3 x  -  4 y  =  5

   CHECK the midpoint really is ( 3 , 1 ) :
        y = ( 3x - 5 )/4 .  Put into x^2 - 4y^2 = 4 :
             x^2 - 4 ( 3x-5 )^2 / 16 = 4
             4 x^2 - ( 9x^2 - 30x + 25 ) = 16
             -5 x^2 + 30 x - 41 = 0     ->     5 x^2 - 30 x + 41 = 0
        Sum of roots = 30/5 = 6 , so the midpoint x = 6/2 = 3 .          TICK
        Discriminant = 900 - 820 = 80 > 0 , so the chord is REAL.        TICK
        Midpoint y = ( 3(3) - 5 )/4 = 1 .                                TICK
```

> **TRAP:** for a hyperbola, not every point can be the midpoint of a real chord.
> Always finish with the discriminant check if the question says "show that" —
> if the discriminant is negative, the honest answer is "no such chord exists".

## 15.3 The PAIR OF TANGENTS from an external point

```
  +--------------------------------------------------------------------------+
  |             S * S11   =   T^2                                            |
  |                                                                          |
  |   gives the COMBINED equation of the two tangents from ( x1 , y1 ).      |
  |   It is one second-degree equation representing two straight lines.      |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 15.3**
Find the pair of tangents from `(2, 1)` to `x^2 - y^2 = 4`, and separate them.

```
   Use  S = x^2 - y^2 - 4 .

   S11 = 4 - 1 - 4 = -1
   T   = x(2) - y(1) - 4 = 2x - y - 4

   S * S11 = T^2 :

        ( x^2 - y^2 - 4 )( -1 )  =  ( 2x - y - 4 )^2

        -x^2 + y^2 + 4  =  4x^2 + y^2 + 16 - 4xy - 16x + 8y

        0  =  5x^2 - 4xy - 16x + 8y + 12

   SEPARATE. Notice there is no y^2 term, so one factor has no y:

        5x^2 - 4xy - 16x + 8y + 12  =  ( 5x - 4y + p )( x + f )

        matching y :   -4f = 8  ->  f = -2
        matching x :   5f + p = -16  ->  -10 + p = -16  ->  p = -6
        constant   :   p f = ( -6 )( -2 ) = 12                          TICK

        =  ( 5x - 4y - 6 )( x - 2 )  =  0

   THE TWO TANGENTS :     x = 2      and      5 x - 4 y - 6 = 0

   CHECK both pass through ( 2 , 1 ) :  x = 2 does ;  5(2) - 4(1) - 6 = 0  TICK
   CHECK x = 2 touches:  4 - y^2 = 4 -> y = 0 (a repeated root) at the
        vertex ( 2 , 0 ) .                                               TICK
   CHECK 5x - 4y = 6 touches:  y = (5x-6)/4 ,
        x^2 - (5x-6)^2/16 = 4  ->  16x^2 - 25x^2 + 60x - 36 = 64
        -> 9x^2 - 60x + 100 = 0 -> ( 3x - 10 )^2 = 0 , repeated root
        x = 10/3 , y = 8/3 .  Check on the curve: 100/9 - 64/9 = 4 .     TICK
```

## 15.4 POLE and POLAR

```
  +--------------------------------------------------------------------------+
  |   The POLAR of the point ( x1 , y1 ) with respect to S = 0 is  T = 0 :   |
  |                                                                          |
  |                    x x1 / a^2   -   y y1 / b^2   =   1                   |
  |                                                                          |
  |   The POLE of the line  l x + m y + n = 0  is                            |
  |                                                                          |
  |                    (  - a^2 l / n   ,   + b^2 m / n  )                   |
  |                                                                          |
  |   ( for the ellipse it was ( -a^2 l/n , -b^2 m/n ) — the SECOND sign     |
  |    flips, because of the minus in the equation )                         |
  |                                                                          |
  |   Two points are CONJUGATE if each lies on the polar of the other:       |
  |          x1 x2 / a^2  -  y1 y2 / b^2  =  1                               |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 15.4**
Find the pole of `3x + 4y = 12` with respect to `x^2/16 - y^2/9 = 1`.

```
   Write the line as  3x + 4y - 12 = 0 , so  l = 3 , m = 4 , n = -12 .

   Pole = ( - a^2 l / n , + b^2 m / n )
        = ( - 16 (3) / (-12) , 9 (4) / (-12) )
        = ( 4 , -3 )

   CHECK by taking the polar of ( 4 , -3 ) :
        x(4)/16 - y(-3)/9 = 1   ->   x/4 + y/3 = 1   ->   3x + 4y = 12    TICK
```

---

# TOPIC 16 — THE DIRECTOR CIRCLE

**Question:** from which points can you draw **two perpendicular tangents**?

```
   Any tangent is  y = m x ± sqrt( a^2 m^2 - b^2 ) .
   Suppose it passes through ( h , k ) :

        k = m h ± sqrt( a^2 m^2 - b^2 )
        ( k - m h )^2  =  a^2 m^2 - b^2
        k^2 - 2 h k m + h^2 m^2 - a^2 m^2 + b^2  =  0

        ( h^2 - a^2 ) m^2  -  2 h k m  +  ( k^2 + b^2 )  =  0

   This quadratic in m has the two tangent slopes as roots. PERPENDICULAR means
   the product of the roots is -1 :

              k^2 + b^2
             -----------  =  -1     ->     k^2 + b^2 = -( h^2 - a^2 )
              h^2 - a^2

                                    ->     h^2 + k^2  =  a^2 - b^2
```

```
  +==========================================================================+
  |                                                                          |
  |     DIRECTOR CIRCLE of  x^2/a^2 - y^2/b^2 = 1  :                         |
  |                                                                          |
  |                    x^2  +  y^2   =   a^2  -  b^2                         |
  |                                                                          |
  |     IT ONLY EXISTS IF  a > b  ( equivalently  e < sqrt 2 ) .             |
  |                                                                          |
  |        a > b   ->  a real circle of radius sqrt( a^2 - b^2 )             |
  |        a = b   ->  radius 0 : the "circle" is just the CENTRE            |
  |                    ( rectangular hyperbola — the only perpendicular      |
  |                      pair is the pair of asymptotes )                    |
  |        a < b   ->  NO real points at all : you can never draw two        |
  |                    perpendicular tangents to such a hyperbola            |
  |                                                                          |
  +==========================================================================+
```

**WORKED EXAMPLE 16.1**
Find the director circle of `x^2/16 - y^2/9 = 1`, and say whether one exists for
`x^2/9 - y^2/16 = 1`.

```
   (i)  a^2 = 16 , b^2 = 9   ->   x^2 + y^2 = 16 - 9 = 7 .
        A real circle of radius sqrt 7 .
        ( e = 5/4 = 1.25 < sqrt2 = 1.414 , consistent. )

   (ii) a^2 = 9 , b^2 = 16   ->   x^2 + y^2 = 9 - 16 = -7 .
        NO real points. There is NO pair of perpendicular tangents.
        ( e = sqrt(1 + 16/9) = 5/3 = 1.67 > sqrt2 , consistent. )
```

---

# TOPIC 17 — THE PRETTY PROPERTIES (each is worth a clean 4 marks)

## 17.1 Product of the perpendiculars from the foci to any tangent is `b^2`

```
   Tangent : y = m x + c with c^2 = a^2 m^2 - b^2 , i.e. m x - y + c = 0 .

        p1 = | m ( ae ) + c | / sqrt( m^2 + 1 )
        p2 = | m ( -ae ) + c | / sqrt( m^2 + 1 )

        p1 p2 = | c^2 - a^2 e^2 m^2 | / ( m^2 + 1 )
              = | ( a^2m^2 - b^2 ) - ( a^2 + b^2 ) m^2 | / ( m^2 + 1 )
              = | - b^2 - b^2 m^2 | / ( m^2 + 1 )
              = b^2 ( 1 + m^2 ) / ( 1 + m^2 )
              = b^2                                                    QED
```

*(using `a^2e^2 = a^2 + b^2`)*

## 17.2 The foot of the perpendicular from a focus to a tangent lies on the auxiliary circle

The locus of that foot is `x^2 + y^2 = a^2` — the circle on the transverse axis as
diameter. Exactly the same statement as for the ellipse.

```
   Do not confuse the three circles:

        AUXILIARY circle   x^2 + y^2 = a^2         ( feet of perpendiculars )
        DIRECTOR  circle   x^2 + y^2 = a^2 - b^2   ( perpendicular tangents )
        the hyperbola itself  x^2/a^2 - y^2/b^2 = 1
```

## 17.3 The reflection property

A ray of light aimed at one focus of a hyperbolic mirror is reflected straight towards
the **other** focus.

```
                       incoming ray aimed at S'
                        - - - - - - - ->  \
                                           \  hyperbolic mirror
                                            )
                                           /  ->  reflected ray goes to S
                       S'          C        S
```

This is exactly why a **Cassegrain telescope** uses a small hyperbolic secondary mirror,
and it is the reason hyperbolic dishes appear in satellite antennas.

## 17.4 The tangent bisects the angle `S P S'`

At any point `P` on a hyperbola, the **tangent** bisects the angle between `PS` and
`PS'`. (For an ellipse it was the **normal** that did the bisecting.) That single
sentence is the geometric reason behind 17.3.

---

# TOPIC 18 — BUILDING A HYPERBOLA FROM GIVEN DATA

Every "find the equation" question is the same three-step dance:

```
  +--------------------------------------------------------------------------+
  |   1.  Decide which axis is the TRANSVERSE axis                           |
  |       ( it is the axis carrying the foci / vertices you were given ).    |
  |   2.  Extract  a  and  ae  from the data.                                |
  |          vertices   -> a          foci      -> a e                       |
  |          axes given -> 2a , 2b    LR given  -> 2b^2/a                    |
  |          directrices-> a/e        foci gap  -> 2ae                       |
  |   3.  b^2 = ( a e )^2 - a^2 = a^2 ( e^2 - 1 ) . Write the equation.      |
  |   4.  ALWAYS check e > 1 at the end.                                     |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 18.1**
Find the hyperbola whose foci are `(±5, 0)` and whose transverse axis has length 8.

```
   Foci on the x-axis  ->  transverse axis along x .
   2a = 8  ->  a = 4 .        a e = 5   ->   e = 5/4 .

   b^2 = ( a e )^2 - a^2 = 25 - 16 = 9

               x^2       y^2
               ---   -   ---   =   1              ( e = 5/4 > 1  TICK )
                16        9
```

**WORKED EXAMPLE 18.2**
Find the hyperbola whose foci are `(±5, 0)` and whose latus rectum is `9/2`.

```
   a e = 5 , so b^2 = 25 - a^2 .

   LR = 2 b^2 / a = 9/2      ->     2 ( 25 - a^2 ) = ( 9/2 ) a
                                    4 ( 25 - a^2 ) = 9 a
                                    100 - 4 a^2 = 9 a
                                    4 a^2 + 9 a - 100 = 0

                        -9 ± sqrt( 81 + 1600 )     -9 ± 41
                  a  =  ----------------------  =  --------
                                  8                    8

        a = 4   ( the other root -50/8 is negative, reject )

   b^2 = 25 - 16 = 9 .        x^2/16 - y^2/9 = 1 .

   CHECK LR = 2(9)/4 = 9/2                                             TICK
```

**WORKED EXAMPLE 18.3**
Find the hyperbola with focus `(2, 1)`, directrix `2x + 3y = 1` and `e = 2`.

```
   Use SP^2 = e^2 * PM^2 directly.

        ( x-2 )^2 + ( y-1 )^2  =  4 * ( 2x + 3y - 1 )^2 / ( 2^2 + 3^2 )

   Multiply by 13 :

        13[ x^2 - 4x + 4 + y^2 - 2y + 1 ]  =  4 ( 2x + 3y - 1 )^2

        13x^2 + 13y^2 - 52x - 26y + 65
                        =  4 [ 4x^2 + 9y^2 + 1 + 12xy - 4x - 6y ]
                        =  16x^2 + 36y^2 + 48xy - 16x - 24y + 4

   Bring everything to one side ( RHS - LHS ) :

        3 x^2 + 48 x y + 23 y^2 + 36 x + 2 y - 61  =  0

   CHECK it is a hyperbola:  a = 3 , h = 24 , b = 23 ,
        h^2 - ab = 576 - 69 = 507 > 0                                   TICK
```

**WORKED EXAMPLE 18.4**
Find the hyperbola whose asymptotes are `3x ± 5y = 0` and which passes through `(1, -1)`.

```
   The asymptote pair is  ( 3x - 5y )( 3x + 5y ) = 0 ,  i.e.  9x^2 - 25y^2 = 0 .

   A hyperbola with these asymptotes differs only by a CONSTANT :

                9 x^2 - 25 y^2  =  k

   Through ( 1 , -1 ) :   9 - 25 = -16  =  k

                9 x^2 - 25 y^2 = -16      i.e.      25 y^2 - 9 x^2 = 16

   Standard form :   y^2 / (16/25)  -  x^2 / (16/9)  =  1
        transverse axis along y ,  a = 4/5 ,  b = 4/3 .
        e = sqrt( 1 + b^2/a^2 ) = sqrt( 1 + (16/9)/(16/25) ) = sqrt( 1 + 25/9 )
          = sqrt( 34 ) / 3  =  1.944  >  1                              TICK
```

**WORKED EXAMPLE 18.5**
Find the hyperbola whose asymptotes are `x + 2y + 3 = 0` and `3x + 4y + 5 = 0` and
which passes through `(1, -1)`.

```
   Hyperbola = asymptote pair + constant :

        ( x + 2y + 3 )( 3x + 4y + 5 )  =  k

   At ( 1 , -1 ) :  ( 1 - 2 + 3 )( 3 - 4 + 5 ) = ( 2 )( 4 ) = 8  =  k

        ( x + 2y + 3 )( 3x + 4y + 5 )  =  8
```

---

# TOPIC 19 — THE HYPERBOLA IN REAL LIFE (worth a line in a long answer)

```
  +--------------------------------------------------------------------------+
  |   COOLING TOWERS at power stations are HYPERBOLOIDS. The straight-line   |
  |   generators make them strong and cheap to build from straight steel.    |
  |                                                                          |
  |   LORAN / GPS-style navigation uses the DIFFERENCE of arrival times      |
  |   of two signals, which pins you to one branch of a hyperbola.           |
  |                                                                          |
  |   The SONIC BOOM of a supersonic aircraft meets the ground along a       |
  |   hyperbola.                                                            |
  |                                                                          |
  |   BOYLE'S LAW  P V = constant  is exactly  x y = c^2 , a RECTANGULAR     |
  |   hyperbola. So is  "distance = speed x time"  at fixed distance.        |
  |                                                                          |
  |   The path of a comet that is NOT captured by the Sun is a hyperbola     |
  |   ( e > 1 ) ; a captured one is an ellipse ( e < 1 ).                    |
  |                                                                          |
  |   CASSEGRAIN TELESCOPES use a hyperbolic secondary mirror ( 17.3 ).      |
  +--------------------------------------------------------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ] Did I DIVIDE so that the right-hand side is exactly 1 before reading a and b?
  [ ] Did I take a^2 from the term with the PLUS sign — not the bigger number?
  [ ] Is my eccentricity GREATER than 1? (If not, I flipped a sign.)
  [ ] Did I use  ae = sqrt(a^2 + b^2)  — PLUS, not minus?
  [ ] Did I use  b^2 = a^2(e^2 - 1)  — not the ellipse version?
  [ ] Did I write BOTH foci, BOTH directrices, BOTH vertices, BOTH asymptotes?
  [ ] Did I call the axes TRANSVERSE and CONJUGATE, not major and minor?
  [ ] Is my latus rectum  2b^2/a  ? (Same as the ellipse — do not "correct" it.)
  [ ] For a shifted hyperbola, did I add h to every x-answer and k to every y-answer?
  [ ] When I factored out a negative coefficient, did I flip the signs inside?
  [ ] For a tangent of slope m, did I check |m| >= b/a before claiming it exists?
  [ ] Did I check the point of contact actually satisfies BOTH the line and the curve?
  [ ] For the director circle, did I check a > b before writing a radius?
  [ ] In the asymptote question, did I FACTORISE into two straight lines at the end?
  [ ] Did I put the point back into the equation to check "point on the curve" claims?
  [ ] Did I draw a small labelled sketch? It is often worth a mark on its own.
  [ ] Did I write the final answer on its own line, boxed or underlined?
```

```
  +==========================================================================+
  |                                                                          |
  |   THE FIVE LINES THAT CARRY THE CHAPTER                                  |
  |                                                                          |
  |     x^2/a^2 - y^2/b^2 = 1        b^2 = a^2 ( e^2 - 1 )                   |
  |     a e = sqrt( a^2 + b^2 )      LR  = 2 b^2 / a                         |
  |     asymptotes  y = ± ( b/a ) x  ( put the RHS to 0 and factorise )      |
  |     tangent  x x1/a^2 - y y1/b^2 = 1 ,  c^2 = a^2 m^2 - b^2              |
  |     normal   a^2 x/x1 + b^2 y/y1 = a^2 + b^2                            |
  |                                                                          |
  +==========================================================================+
```
