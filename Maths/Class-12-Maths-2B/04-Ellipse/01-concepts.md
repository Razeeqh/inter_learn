# Ellipse — Concepts From Zero

**Maths IIB · Chapter 4**

Read this file with a pen in your hand. Copy every box. Do not just read it.
Everything here assumes you know nothing. If a word is new, it is explained
before it is used.

---

# TOPIC 1 — WHAT A CONIC IS, AND WHERE THE ELLIPSE SITS

## 1.1 The one definition that makes all four curves

Fix a point `S`. Fix a straight line that does not pass through `S`.
Now pick a moving point `P` and measure two distances:

```
                     |
      the DIRECTRIX  |
      (a fixed line) |
                     |  M                        S = the FOCUS
                     +---------------------.     (a fixed point)
                     |                      P
                     |          |           |
                     |          |           |
                     |     PM = distance    SP = distance from P to S
                     |     from P to the
                     |     directrix (measured
                     |     PERPENDICULARLY)
```

Ask the ratio to stay constant:

```
  +==========================================================================+
  |                                                                          |
  |                    S P                                                   |
  |                  -------  =  e            (e is called the ECCENTRICITY) |
  |                    P M                                                   |
  |                                                                          |
  |             equivalently        S P  =  e * P M                          |
  |                                                                          |
  +==========================================================================+
```

The path traced by `P` is called a **conic section**, and which curve you get
depends only on the number `e`:

| Value of e | Curve you get | Plain-English meaning |
|---|---|---|
| e = 0 | **circle** | P stays a fixed distance from S. The directrix runs off to infinity. |
| 0 < e < 1 | **ELLIPSE** ← this chapter | P is always **closer to the focus** than to the directrix |
| e = 1 | parabola (Chapter 3) | P is **equally far** from both |
| e > 1 | hyperbola (Chapter 5) | P is always **further from the focus** than from the directrix |

> **TRAP:** Students write "e is the eccentricity" and stop. In the exam you must
> also be able to say what e *does*: it measures how **squashed** the ellipse is.
> `e` near 0 → almost a perfect circle. `e` near 1 → a long thin cigar.

```
     e = 0.0            e = 0.6                 e = 0.9

      _____             ________            _______________
    .'     `.         .'        `.        .'               `.
   |    .    |       |     . .    |      |  .             .  |
    `._____.'         `.________.'        `._______________.'
    perfect circle    a normal ellipse    nearly flat, foci far apart
```

## 1.2 The SECOND definition — two pins and a piece of string

This is the definition you can *feel*, and the board asks you to prove that the
two definitions agree.

```
     Push two drawing pins into a board at S and S'.
     Tie a loop of string of TOTAL length 2a around them.
     Put a pencil inside the loop, pull it tight, and drag it round.

                        . - - - - - - - - - .
                    . '            P          ' .
                 .'              /   \             `.
                |              /       \             |
                |        S' . '           ` . S      |
                |                                    |
                 `.                                .'
                    ` .                        . '
                        ` - - - - - - - - - '

     Because the string never changes length,  S P  +  S' P  =  2 a
     at every single position of the pencil.
```

```
  +==========================================================================+
  |                                                                          |
  |   SECOND DEFINITION OF AN ELLIPSE                                        |
  |                                                                          |
  |   An ellipse is the locus of a point P that moves so that the SUM of     |
  |   its distances from two fixed points S and S' (the two FOCI) is a       |
  |   CONSTANT, equal to 2a — the length of the major axis.                  |
  |                                                                          |
  |                        S P  +  S' P  =  2 a                              |
  |                                                                          |
  +==========================================================================+
```

Everyday examples: the orbit of the Earth round the Sun (the Sun sits at **one**
focus, not the centre); the shape of a whispering gallery; the shape you see when
you look at a round coffee cup from an angle.

**WORKED EXAMPLE 1.1**
Find the equation of the locus of a point the sum of whose distances from
`(0, 3)` and `(0, -3)` is `10`.

```
  Let P = ( x , y ) ,  S = ( 0 , 3 ) ,  S' = ( 0 , -3 )

  SP + S'P = 10

  sqrt( x^2 + (y - 3)^2 )  +  sqrt( x^2 + (y + 3)^2 )  =  10

  Move one root across and square:

  sqrt( x^2 + (y-3)^2 )  =  10 - sqrt( x^2 + (y+3)^2 )

  x^2 + y^2 - 6y + 9  =  100 - 20 sqrt( x^2 + (y+3)^2 ) + x^2 + y^2 + 6y + 9

              -6y      =  100 - 20 sqrt(...) + 6y

     20 sqrt( x^2 + (y+3)^2 )  =  100 + 12 y

      5 sqrt( x^2 + (y+3)^2 )  =  25 + 3 y          (divided by 4)

  Square again:

     25 ( x^2 + y^2 + 6y + 9 )  =  625 + 150 y + 9 y^2

     25 x^2 + 25 y^2 + 150 y + 225  =  625 + 150 y + 9 y^2

     25 x^2 + 16 y^2  =  400

              x^2     y^2
              --- +   --- =  1
              16       25

  CHECK: 2a = 10 so a = 5, and a^2 = 25 sits under y^2 — correct, because the
  two foci are on the y-axis, so the MAJOR axis is the y-axis. Also ae = 3,
  so e = 3/5, and b^2 = a^2(1 - e^2) = 25(1 - 9/25) = 16.  Matches.  TICK.
```

> **TRAP:** After the first squaring you still have a square root. You must isolate
> it and square a **second** time. Most lost marks in this question are here.

---

# TOPIC 2 — DERIVING THE STANDARD EQUATION (a guaranteed 7 marks)

This derivation is asked directly. Learn it as a sequence of moves.

## 2.1 Setting up the picture

```
     Let S be the focus and ZM the directrix.
     Drop a perpendicular from S to the directrix; call its foot Z.

              directrix
                  |
                Z |                        S
        ----------+-------A'------C--------+-----A---------------> the axis
                  |
                  |
     A and A' are the two points ON the line SZ that satisfy SP = e PM.
     A divides SZ INTERNALLY in the ratio e : 1
     A' divides SZ EXTERNALLY in the ratio e : 1
     C is the MIDPOINT of AA'.  Put  AA' = 2a , so  CA = CA' = a.
```

## 2.2 Locating the centre, the focus and the directrix

```
  A is on the conic:    S A  =  e * A Z            ... (1)
  A' is on the conic:   S A' =  e * A' Z           ... (2)

  ADD (1) and (2):
        S A + S A'  =  e ( A Z + A' Z )
              A A'  =  e ( CZ - CA  +  CZ + CA' )      [Z is left of A' ]
               2 a  =  e ( 2 CZ )

                                   a
                          C Z  =  ---            so the DIRECTRIX is  x = a/e
                                   e

  SUBTRACT (1) from (2):
        S A' - S A  =  e ( A' Z - A Z )
    ( CA' + CS ) - ( CA - CS )  =  e ( A A' )
                       2 C S    =  e ( 2 a )

                          C S  =  a e         so the FOCUS is  ( a e , 0 )
```

## 2.3 The derivation itself

```
  Take C as the ORIGIN and the axis of the conic as the x-axis.

        S = ( a e , 0 )                 directrix :  x = a / e

  Let P = ( x , y ) be any point on the ellipse. Then

        S P  =  e * P M          where PM is the distance from P to  x = a/e

        sqrt( ( x - a e )^2 + y^2 )   =   e * | a/e  -  x |

  SQUARE BOTH SIDES:

        ( x - a e )^2 + y^2   =   e^2 ( a/e - x )^2
                              =   ( a - e x )^2

        x^2 - 2 a e x + a^2 e^2 + y^2   =   a^2 - 2 a e x + e^2 x^2

        x^2 - e^2 x^2 + y^2   =   a^2 - a^2 e^2

        x^2 ( 1 - e^2 ) + y^2  =  a^2 ( 1 - e^2 )

  DIVIDE THROUGH by  a^2 ( 1 - e^2 ) :

               x^2            y^2
              -----  +  ---------------  =  1
               a^2       a^2 ( 1 - e^2 )

  Since e < 1 , the number a^2 ( 1 - e^2 ) is POSITIVE. Call it b^2 :

  +==========================================================================+
  |                                                                          |
  |          x^2      y^2                                                    |
  |          ---  +   ---  =  1        where     b^2  =  a^2 ( 1 - e^2 )     |
  |          a^2      b^2                                                    |
  |                                                                          |
  +==========================================================================+
```

## 2.4 The three ways to write the a-b-e relation

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |     b^2  =  a^2 ( 1 - e^2 )                <- the one to memorise        |
  |                                                                          |
  |                    b^2                        b^2                        |
  |     e^2  =  1  -   ---        so     e = sqrt( 1 - --- )                 |
  |                    a^2                        a^2                        |
  |                                                                          |
  |     a^2 e^2  =  a^2 - b^2      so    a e = sqrt( a^2 - b^2 )             |
  |                                                                          |
  |     ( a e ) is the distance from the CENTRE to a FOCUS.                  |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

The third form is the one you use fastest in the exam: **`ae = sqrt(a^2 - b^2)`**.

> **TRAP:** For an ellipse with the major axis along **y**, the roles of the
> denominators swap but `a` is STILL the semi-major axis. Write the equation as
> `x^2/b^2 + y^2/a^2 = 1` with `a > b`, and `b^2 = a^2(1 - e^2)` is unchanged.
> The letter `a` always belongs to the **long** axis.

**WORKED EXAMPLE 2.1** Find `e` for `x^2/25 + y^2/16 = 1`.

```
  25 > 16   ->   a^2 = 25 , b^2 = 16   ->   a = 5 , b = 4  (major along x)

  b^2 = a^2 ( 1 - e^2 )
   16 = 25 ( 1 - e^2 )
  16/25 = 1 - e^2
    e^2 = 1 - 16/25 = 9/25
      e = 3/5

  CHECK with the other form:  ae = sqrt(25 - 16) = 3 , and a = 5, so e = 3/5. TICK.
```

---

# TOPIC 3 — THE PARTS OF AN ELLIPSE (learn the vocabulary)

## 3.1 The full labelled sketch — major axis along the x-axis

```
                                    y
                                    ^
              x = -a/e              |               x = a/e
                 |             B ( 0 , b )             |
                 |                  |                  |
                 |         . - - - -+- - - - .         |
                 |     . '          |          ' .     |
                 | . '              |              ' . |
                 |                  |                  |
       A'(-a, 0) +--------+---------C---------+--------+ A ( a , 0 )
                 |     S'(-ae,0)  (0,0)     S(ae,0)    |
                 | . _              |              _ . |
                 |     ' - .        |        . - '     |
                 |            ' - - + - - '            |
                 |            B' ( 0 , -b )            |
                 |                  |                  |
              directrix                            directrix
```

| Name | Meaning | For `x^2/a^2 + y^2/b^2 = 1`, `a > b` |
|---|---|---|
| **Centre** `C` | midpoint of the two foci, and of the two vertices | `(0, 0)` |
| **Vertices** | ends of the MAJOR axis | `A(a, 0)`, `A'(-a, 0)` |
| Ends of the minor axis | `B`, `B'` (some books call these vertices too) | `(0, b)`, `(0, -b)` |
| **Major axis** | the LONGER axis of symmetry; length `2a` | the line `y = 0` |
| **Minor axis** | the SHORTER axis of symmetry; length `2b` | the line `x = 0` |
| **Foci** | the two special points `S`, `S'` | `(ae, 0)`, `(-ae, 0)` |
| **Directrices** | the two special lines | `x = a/e`, `x = -a/e` |
| **Eccentricity** | how squashed | `e = sqrt(1 - b^2/a^2)`, `0 < e < 1` |
| **Latus rectum** | focal chord PERPENDICULAR to the major axis | length `2b^2/a`, on `x = ±ae` |
| **Focal chord** | ANY chord passing through a focus | — |
| **Focal distance** | distance from a point on the curve to a focus | `SP = a - e x1`, `S'P = a + e x1` |

## 3.2 Why the latus rectum is `2b^2/a` — derive it, do not memorise blindly

```
  The latus rectum through S(ae, 0) is the vertical line  x = a e.
  Put x = ae into the ellipse:

        (ae)^2      y^2                       y^2
        ------  +   ---  =  1      ->        ---  =  1 - e^2
         a^2        b^2                      b^2

        y^2 = b^2 ( 1 - e^2 )

  But  b^2 = a^2 ( 1 - e^2 )  , so  ( 1 - e^2 ) = b^2 / a^2 . Therefore

                    b^2         b^4                     b^2
        y^2 = b^2 * ---  =     ----        ->    y  =  ± ---
                    a^2         a^2                       a

  +--------------------------------------------------------------------------+
  |                                            2 b^2                         |
  |    LENGTH OF THE LATUS RECTUM   =   L R = -------                        |
  |                                              a                           |
  |                                                                          |
  |    Ends of the latus rectum through S(ae, 0):                            |
  |                 ( a e , b^2/a )   and   ( a e , -b^2/a )                 |
  |    Ends of the latus rectum through S'(-ae, 0):                          |
  |                 ( -a e , b^2/a )  and   ( -a e , -b^2/a )                |
  +--------------------------------------------------------------------------+
```

> **TRAP:** `2b^2/a` — the SQUARE is on `b` (the short one) and the plain letter
> is `a` (the long one). Getting it upside-down is the single commonest error in
> this chapter. Sanity check: the latus rectum must be **shorter** than the major
> axis. `2b^2/a < 2a` because `b < a`. If your answer is bigger than `2a`, it is wrong.

**WORKED EXAMPLE 3.1**
For `9x^2 + 16y^2 = 144`, find the eccentricity, foci, directrices, length of the
latus rectum and the ends of the latera recta.

```
  STEP 1 — divide by 144 to make the right side 1:

        9x^2     16 y^2                x^2     y^2
        ---- +   ------  =  1    ->    ---  +  ---  =  1
        144       144                   16      9

  STEP 2 — 16 > 9 , and 16 is under x^2 , so the MAJOR axis is the x-axis.

        a^2 = 16 -> a = 4          b^2 = 9 -> b = 3

  STEP 3 — eccentricity:

        b^2 = a^2 (1 - e^2)  ->  9 = 16(1 - e^2)  ->  e^2 = 1 - 9/16 = 7/16

                    sqrt(7)
              e  =  -------
                       4

  STEP 4 — foci  ( ± a e , 0 ) :   a e = 4 * sqrt(7)/4 = sqrt(7)

              FOCI  ( sqrt(7) , 0 )  and  ( -sqrt(7) , 0 )

  STEP 5 — directrices  x = ± a/e :

              a       4              16
             --- =  ------- =  ----------
              e     sqrt(7)/4     sqrt(7)

              DIRECTRICES   x = 16/sqrt(7)   and   x = -16/sqrt(7)

  STEP 6 — latus rectum:

              2 b^2      2 * 9      9
              -----  =  -------  =  ---   =  4.5
                a          4         2

  STEP 7 — ends:  ( ± ae , ± b^2/a ) = ( ± sqrt(7) , ± 9/4 )

  SANITY CHECK: LR = 4.5 is much less than the major axis 2a = 8. TICK.
                e = sqrt(7)/4 = 2.6458/4 = 0.661 , which lies in (0,1). TICK.
```

---

# TOPIC 4 — BOTH ORIENTATIONS (the master table)

An ellipse in standard position has its centre at the origin and its axes along the
coordinate axes. There are exactly **two** cases.

## 4.1 Case 1 — MAJOR AXIS ALONG THE x-AXIS

```
                        x^2     y^2
                        --- +   --- = 1            with   a > b
                        a^2     b^2

                                    y
                                    ^
                                 (0,b)
                       . - - - - - -+- - - - - - .
                   . '              |              ' .
                 .                  |                  .
      (-a,0) ----+---------+--------C--------+---------+---- (a,0)  --> x
                 .      (-ae,0)     |     (ae,0)       .
                   ' .              |              . '
                       ' - - - - - -+- - - - - '
                                 (0,-b)

              WIDE and SHORT.  The two foci lie LEFT and RIGHT.
```

## 4.2 Case 2 — MAJOR AXIS ALONG THE y-AXIS

```
                        x^2     y^2
                        --- +   --- = 1            with   a > b
                        b^2     a^2

                                    y
                                    ^
                                 (0, a)
                                 . -+- .
                              .'    |    `.
                            .       |       .
                           |     (0, ae)    |
                   (-b,0) -+-------C--------+- (b,0)   --> x
                           |     (0,-ae)    |
                            .       |       .
                              `.    |    .'
                                 ' -+- '
                                 (0,-a)

              TALL and NARROW.  The two foci lie ABOVE and BELOW.
```

## 4.3 THE MASTER TABLE — copy this onto a card

| Element | Major axis along **x** : `x^2/a^2 + y^2/b^2 = 1` | Major axis along **y** : `x^2/b^2 + y^2/a^2 = 1` |
|---|---|---|
| Condition | `a > b` (bigger number under `x^2`) | `a > b` (bigger number under `y^2`) |
| Centre | `(0, 0)` | `(0, 0)` |
| Vertices (ends of major axis) | `(±a, 0)` | `(0, ±a)` |
| Ends of minor axis | `(0, ±b)` | `(±b, 0)` |
| Major axis: line, length | `y = 0`, length `2a` | `x = 0`, length `2a` |
| Minor axis: line, length | `x = 0`, length `2b` | `y = 0`, length `2b` |
| Foci | `(±ae, 0)` | `(0, ±ae)` |
| Distance between the foci | `2ae` | `2ae` |
| Directrices | `x = ±a/e` | `y = ±a/e` |
| Distance between directrices | `2a/e` | `2a/e` |
| Eccentricity | `b^2 = a^2(1 - e^2)` | `b^2 = a^2(1 - e^2)` |
| Latus rectum (length) | `2b^2/a` | `2b^2/a` |
| Latus rectum (lines) | `x = ae`, `x = -ae` | `y = ae`, `y = -ae` |
| Ends of latus rectum | `(±ae, ±b^2/a)` | `(±b^2/a, ±ae)` |
| Focal distances of `P(x1,y1)` | `a - e x1` and `a + e x1` | `a - e y1` and `a + e y1` |
| Parametric point | `(a cos theta, b sin theta)` | `(b cos theta, a sin theta)` |
| Auxiliary circle | `x^2 + y^2 = a^2` | `x^2 + y^2 = a^2` |
| Area | `pi a b` | `pi a b` |

> **NOTE ON NOTATION:** Some textbooks keep writing `x^2/a^2 + y^2/b^2 = 1` even for
> the tall ellipse and then say `b > a`, with `a^2 = b^2(1 - e^2)`, foci `(0, ±be)`,
> directrices `y = ±b/e` and latus rectum `2a^2/b`. **Both conventions are correct
> and both are accepted.** The safe habit, and the one used throughout these notes,
> is: *whatever letter you use, the semi-MAJOR value carries the `(1 - e^2)`, the foci
> sit at (semi-major) × e from the centre, and the latus rectum is
> `2 (semi-minor)^2 / (semi-major)`.*

**WORKED EXAMPLE 4.1** Find all the elements of `9x^2 + 4y^2 = 36`.

```
  Divide by 36:          x^2     y^2
                         ---  +  ---  =  1
                          4       9

  9 > 4 and 9 is under y^2   ->   MAJOR AXIS IS THE y-AXIS (a tall ellipse)

        a^2 = 9  -> a = 3  (semi-major)      b^2 = 4 -> b = 2 (semi-minor)

  e :   b^2 = a^2(1 - e^2)  ->  4 = 9(1 - e^2)  ->  e^2 = 5/9  ->  e = sqrt(5)/3

  ae = 3 * sqrt(5)/3 = sqrt(5)

  Centre            ( 0 , 0 )
  Vertices          ( 0 , 3 )  and  ( 0 , -3 )
  Ends of minor     ( 2 , 0 )  and  ( -2 , 0 )
  Foci              ( 0 , sqrt(5) )  and  ( 0 , -sqrt(5) )
  Directrices       y = ± a/e = ± 3 / (sqrt(5)/3) = ± 9/sqrt(5)
  Major axis        along x = 0 , length 2a = 6
  Minor axis        along y = 0 , length 2b = 4
  Latus rectum      2b^2/a = 2*4/3 = 8/3
  Ends of LR        ( ± 8/6 , ± sqrt 5 ) = ( ± 4/3 , ± sqrt(5) )
  Area              pi a b = 6 pi

  CHECK: e = 2.236/3 = 0.745 lies in (0,1). TICK.
         LR = 8/3 = 2.67 < 2a = 6. TICK.
```

> **TRAP:** In Worked Example 4.1 the FIRST decision — "which denominator is bigger?" —
> decides all nine answers below it. Circle the bigger denominator on your answer
> sheet before you do anything else.

---

# TOPIC 5 — FOCAL DISTANCES AND THE `SP + S'P = 2a` PROOF

## 5.1 Deriving the focal distances

```
  Take  P ( x1 , y1 )  on   x^2/a^2 + y^2/b^2 = 1  ,  a > b.

  For the focus S(ae, 0), the corresponding directrix is  x = a/e :

        S P  =  e * P M  =  e * ( a/e  -  x1 )  =  a  -  e x1

  For the focus S'(-ae, 0), the corresponding directrix is  x = -a/e :

        S' P =  e * P M' =  e * ( x1  +  a/e )  =  a  +  e x1

  +==========================================================================+
  |                                                                          |
  |     S P  =  a - e x1          S' P  =  a + e x1                          |
  |                                                                          |
  |     S P  +  S' P  =  ( a - e x1 ) + ( a + e x1 )  =  2 a                 |
  |                                                                          |
  |     THE SUM OF THE FOCAL DISTANCES IS ALWAYS 2a — THE MAJOR AXIS.        |
  |                                                                          |
  +==========================================================================+
```

That completes the promise made in Topic 1: the focus-directrix definition and the
pin-and-string definition describe the same curve.

```
              MEMORY HOOK — "NEAR focus, MINUS"

              The focus S(ae, 0) is on the RIGHT.
              A point far to the right (x1 large) is CLOSE to S,
              so its distance to S must be SMALL:   SP = a - e x1.   MINUS.
              The other one gets the PLUS.
```

## 5.2 A useful consequence

For the ellipse with major axis along the **y**-axis, swap `x1` for `y1`:
`SP = a - e y1`, `S'P = a + e y1`.

**WORKED EXAMPLE 5.1**
`P(x1, y1)` lies on `x^2/25 + y^2/16 = 1` and its distance from one focus is `7`.
Find the distance from the other focus, and find `x1`.

```
  a^2 = 25 -> a = 5 ;  b^2 = 16 ;  ae = sqrt(25-16) = 3 ;  e = 3/5

  SP + S'P = 2a = 10   ->   S'P = 10 - 7 = 3

  Now find x1. If SP = a - e x1 = 7 :
        5 - (3/5) x1 = 7   ->   -(3/5) x1 = 2  ->  x1 = -10/3

  CHECK: S'P = a + e x1 = 5 + (3/5)(-10/3) = 5 - 2 = 3. TICK, matches.
  Also |x1| = 10/3 = 3.33 which is less than a = 5, so the point really is on
  the ellipse. TICK.
```

**WORKED EXAMPLE 5.2** (a classic locus question)
Find the equation of the ellipse whose focus is `(1, -1)`, whose directrix is
`x + y + 2 = 0` and whose eccentricity is `1/sqrt(2)`.

```
  Use  S P^2  =  e^2 * P M^2   directly.

  PM = perpendicular distance from (x, y) to  x + y + 2 = 0
                | x + y + 2 |
       PM  =   --------------
                  sqrt( 2 )

                                       1     ( x + y + 2 )^2
  ( x - 1 )^2 + ( y + 1 )^2   =        ---  * ---------------
                                        2            2

  4 [ ( x - 1 )^2 + ( y + 1 )^2 ]  =  ( x + y + 2 )^2

  LEFT  : 4 [ x^2 - 2x + 1 + y^2 + 2y + 1 ] = 4x^2 + 4y^2 - 8x + 8y + 8
  RIGHT : x^2 + y^2 + 4 + 2xy + 4x + 4y

  4x^2 + 4y^2 - 8x + 8y + 8 - x^2 - y^2 - 2xy - 4x - 4y - 4  =  0

        3 x^2  -  2 x y  +  3 y^2  -  12 x  +  4 y  +  4  =  0

  CHECK it really is an ellipse:  a = 3 , 2h = -2 so h = -1 , b = 3
        h^2 - ab = 1 - 9 = -8 < 0     ->  ELLIPSE. TICK.
```

> **TRAP:** `e = 1/sqrt(2)` means `e^2 = 1/2`, not `1/sqrt(2)`. Square the
> eccentricity, not the distance formula only.

---

# TOPIC 6 — ELLIPSE WITH CENTRE `(h, k)` AND COMPLETING THE SQUARE

## 6.1 The shifted form

Slide the whole picture so that the centre lands on `(h, k)`. Replace `x` by `x - h`
and `y` by `y - k`:

```
  +==========================================================================+
  |                                                                          |
  |     ( x - h )^2      ( y - k )^2                                         |
  |     -----------  +   -----------  =  1                                   |
  |         a^2              b^2                                             |
  |                                                                          |
  |     Centre        ( h , k )                                              |
  |     Vertices      ( h ± a , k )              (if a > b, major along x)   |
  |     Foci          ( h ± a e , k )                                        |
  |     Directrices     x  =  h ± a/e                                        |
  |     Major axis      y  =  k    (length 2a)                               |
  |     Minor axis      x  =  h    (length 2b)                               |
  |     Latus rectum   2 b^2 / a , on the lines x = h ± a e                  |
  |                                                                          |
  |   If instead b > a, the major axis is x = h and you swap the roles:      |
  |     Vertices ( h , k ± a ) , Foci ( h , k ± a e ) , Directrices y = k ± a/e |
  |                                                                          |
  +==========================================================================+
```

Everything is the same as the standard ellipse — just measured **from `(h, k)`
instead of from the origin**.

## 6.2 The recipe for a general equation

Any equation of the form `A x^2 + B y^2 + D x + E y + F = 0` with `A` and `B` both
positive but **different** is an ellipse with axes parallel to the coordinate axes.

```
  +--------------------------------------------------------------------------+
  |  STEP 1  Group the x-terms together, the y-terms together, constant right |
  |  STEP 2  Take out the coefficient of x^2 from the x-group, and the        |
  |          coefficient of y^2 from the y-group.                            |
  |  STEP 3  COMPLETE THE SQUARE inside each bracket:                         |
  |             x^2 + p x   ->   ( x + p/2 )^2  -  (p/2)^2                    |
  |  STEP 4  Tidy the constants onto the right-hand side.                    |
  |  STEP 5  DIVIDE so that the right-hand side becomes exactly 1.           |
  |  STEP 6  Read off h, k, a^2, b^2 . Then compute e, foci, directrices, LR. |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 6.1 (the classic 7-mark question)**
Find the centre, vertices, eccentricity, foci, equations of the directrices and the
length of the latus rectum of `9x^2 + 16y^2 - 36x + 32y - 92 = 0`.

```
  STEP 1-2   9( x^2 - 4x )  +  16( y^2 + 2y )  =  92

  STEP 3     x^2 - 4x = ( x - 2 )^2 - 4
             y^2 + 2y = ( y + 1 )^2 - 1

             9[ (x-2)^2 - 4 ]  +  16[ (y+1)^2 - 1 ]  =  92

  STEP 4     9 (x-2)^2 - 36 + 16 (y+1)^2 - 16  =  92
             9 (x-2)^2 + 16 (y+1)^2  =  92 + 36 + 16  =  144

  STEP 5     ( x - 2 )^2      ( y + 1 )^2
             -----------  +   -----------  =  1
                  16                9

  STEP 6     h = 2 , k = -1 .  16 > 9 and 16 is under x , so MAJOR AXIS is
             horizontal.       a = 4 , b = 3.

             e^2 = 1 - b^2/a^2 = 1 - 9/16 = 7/16   ->   e = sqrt(7)/4
             a e = 4 * sqrt(7)/4 = sqrt(7)
             a/e = 4 / ( sqrt(7)/4 ) = 16/sqrt(7)

  ANSWERS
       Centre         ( 2 , -1 )
       Vertices       ( 2 ± 4 , -1 )  =  ( 6 , -1 )  and  ( -2 , -1 )
       Ends of minor  ( 2 , -1 ± 3 )  =  ( 2 , 2 )  and  ( 2 , -4 )
       Eccentricity   sqrt(7) / 4
       Foci           ( 2 ± sqrt(7) , -1 )
       Directrices    x  =  2 ± 16/sqrt(7)
       Major axis     y = -1 , length 8
       Minor axis     x =  2 , length 6
       Latus rectum   2 b^2 / a = 2*9/4 = 9/2

  CHECK: put the centre-shift back — does ( 6 , -1 ) satisfy the original?
       9(36) + 16(1) - 36(6) + 32(-1) - 92 = 324 + 16 - 216 - 32 - 92 = 0. TICK.
```

**WORKED EXAMPLE 6.2** Reduce `4x^2 + y^2 - 8x + 2y + 1 = 0` to standard form and
find its foci.

```
  4( x^2 - 2x ) + ( y^2 + 2y ) = -1

  4[ (x-1)^2 - 1 ] + [ (y+1)^2 - 1 ] = -1

  4(x-1)^2 - 4 + (y+1)^2 - 1 = -1

  4(x-1)^2 + (y+1)^2 = 4

        ( x - 1 )^2      ( y + 1 )^2
        -----------  +   -----------  =  1
             1                4

  4 > 1 and 4 is under y  ->  MAJOR AXIS IS VERTICAL.
        a = 2 (semi-major) , b = 1 (semi-minor) , centre ( 1 , -1 )

        e^2 = 1 - 1/4 = 3/4    ->   e = sqrt(3)/2
        a e = 2 * sqrt(3)/2 = sqrt(3)

        FOCI      ( 1 , -1 + sqrt 3 )  and  ( 1 , -1 - sqrt 3 )
        VERTICES  ( 1 , 1 )  and  ( 1 , -3 )
        DIRECTRICES  y = -1 ± a/e = -1 ± 4/sqrt(3)
        LATUS RECTUM  2 b^2 / a = 2 * 1 / 2 = 1

  CHECK: does the vertex ( 1 , 1 ) satisfy the original equation?
        4(1) + 1 - 8(1) + 2(1) + 1 = 4 + 1 - 8 + 2 + 1 = 0. TICK.
```

> **TRAP:** After completing the square the right-hand side is often **not** 1.
> `9(x-2)^2 + 16(y+1)^2 = 144` is NOT yet standard form. Divide by 144. Students
> who read off `a^2 = 9` at this stage lose every mark that follows.

---

# TOPIC 7 — THE AUXILIARY CIRCLE, THE ECCENTRIC ANGLE, AND PARAMETRIC FORM

## 7.1 The auxiliary circle

Draw the circle whose diameter is the **major axis** of the ellipse.

```
  +--------------------------------------------------------------------------+
  |   AUXILIARY CIRCLE of  x^2/a^2 + y^2/b^2 = 1   is    x^2 + y^2 = a^2     |
  +--------------------------------------------------------------------------+

                                  y
                                  ^
                        . . . . . | . . . . .            <- auxiliary circle
                     .            |         Q  .            radius a
                   .        . - - + - - .    /   .
                  .      .        |       . /      .
                 .     .          |        P         .      <- ellipse
      -----------+-----+----------C--------+N--------+---------> x
                (-a,0)            |                 (a,0)
                 .     .          |         .        .
                   .      .       |      .         .
                     .        ' - + - '         .
                        . . . . . | . . . . .
```

Take any point `P(x1, y1)` on the ellipse. Draw the vertical line through `P`.
It meets the auxiliary circle at `Q`. The angle that `CQ` makes with the positive
`x`-axis is called the **ECCENTRIC ANGLE** of `P`, written `theta`.

```
      Q on the circle  ->  Q = ( a cos theta , a sin theta )
      P has the SAME x-coordinate as Q, so   x1 = a cos theta

      Put that in the ellipse:
             a^2 cos^2 th     y1^2
             ------------  +  ----  = 1
                  a^2          b^2

             y1^2 / b^2 = 1 - cos^2 th = sin^2 th     ->   y1 = b sin theta
```

```
  +==========================================================================+
  |                                                                          |
  |   PARAMETRIC POINT OF THE ELLIPSE                                        |
  |                                                                          |
  |        P ( theta )  =  ( a cos theta ,  b sin theta )                    |
  |                                                                          |
  |   Written short as "the point theta". Substituting confirms it lies on   |
  |   the ellipse:   (a cos th)^2/a^2 + (b sin th)^2/b^2 = cos^2 + sin^2 = 1 |
  |                                                                          |
  +==========================================================================+
```

> **TRAP:** The eccentric angle `theta` is **NOT** the angle that `CP` makes with the
> x-axis. It is the angle made by `CQ`, the point on the **auxiliary circle**.
> Only for a circle (`a = b`) do the two coincide.

## 7.2 The chord joining two eccentric angles

Let the chord join `P(alpha) = (a cos alpha, b sin alpha)` and
`Q(beta) = (a cos beta, b sin beta)`.

```
  +==========================================================================+
  |                                                                          |
  |     x        alpha + beta       y        alpha + beta        alpha - beta|
  |    ---  cos( ------------ )  + ---  sin( ------------ )  = cos( -------- )|
  |     a             2             b             2                    2     |
  |                                                                          |
  +==========================================================================+

  PROOF THAT IT PASSES THROUGH P(alpha) — substitute x = a cos alpha, y = b sin alpha:

     cos(alpha) cos( (a+b)/2 )  +  sin(alpha) sin( (a+b)/2 )

        = cos(  alpha - (alpha+beta)/2  )                [cos A cos B + sin A sin B]

        = cos(  (alpha - beta)/2  )                      = the right-hand side. TICK.

  By symmetry it passes through Q(beta) too, so it IS the chord.
```

**Letting `beta -> alpha` gives the TANGENT at `alpha`:**

```
        x cos alpha       y sin alpha
        -----------  +    -----------  =  cos( 0 )  =  1
             a                 b
```

which is the parametric tangent formula you will meet again in Topic 10.

## 7.3 Condition for a focal chord

```
  The chord above passes through the focus S( a e , 0 ) if

        e cos( (alpha+beta)/2 )  +  0  =  cos( (alpha-beta)/2 )

  Expanding both cosines and writing  C = cos(a/2)cos(b/2) , S = sin(a/2)sin(b/2) :

        e ( C - S )  =  C + S       ->      C ( e - 1 )  =  S ( e + 1 )

  +--------------------------------------------------------------------------+
  |          alpha        beta        e - 1                                  |
  |     tan( ----- ) tan( ---- )  =  -------      (chord through S(ae, 0))   |
  |            2           2          e + 1                                  |
  |                                                                          |
  |     For the other focus S'(-ae, 0) the right-hand side is ( e + 1 )/( e - 1 ). |
  +--------------------------------------------------------------------------+

  Since e < 1 , the right-hand side is NEGATIVE — a useful sign check.
```

**WORKED EXAMPLE 7.1**
Find the equation of the chord of `x^2/16 + y^2/9 = 1` joining the points with
eccentric angles `alpha = 60°` and `beta = 0°`.

```
  a = 4 , b = 3 ,  (alpha+beta)/2 = 30° ,  (alpha-beta)/2 = 30°

        x               y                              sqrt(3)
       --- cos 30°  +  --- sin 30°  =  cos 30°   ->   ------- (x/4) + (1/2)(y/3) = sqrt(3)/2
        4               3                                2

       Multiply by 12 :   3 sqrt(3) x / 2  +  2 y  =  6 sqrt(3)
       Multiply by 2   :   3 sqrt(3) x  +  4 y  =  12 sqrt(3)

  CHECK by substituting the point beta = 0 , which is ( 4 , 0 ) :
       3 sqrt(3)(4) + 0 = 12 sqrt(3). TICK.
  CHECK the point alpha = 60° , which is ( 4 cos60 , 3 sin60 ) = ( 2 , 3 sqrt3 / 2 ) :
       3 sqrt(3)(2) + 4(3 sqrt3 / 2) = 6 sqrt3 + 6 sqrt3 = 12 sqrt3. TICK.
```

---

# TOPIC 8 — WHERE IS A POINT? THE `S11` TEST

Write the ellipse in the "everything on the left" form:

```
  +==========================================================================+
  |                x^2     y^2                                               |
  |         S  =   --- +   ---  -  1                                         |
  |                a^2     b^2                                               |
  |                                                                          |
  |                x1^2    y1^2                                              |
  |        S11 =   ---- +  ----  -  1        (just put the point in)         |
  |                a^2     b^2                                               |
  |                                                                          |
  |        S11  <  0     P is INSIDE  the ellipse                            |
  |        S11  =  0     P is ON      the ellipse                            |
  |        S11  >  0     P is OUTSIDE the ellipse                            |
  +==========================================================================+
```

Why it works: the centre `(0,0)` gives `S11 = -1`, which is negative. So "negative
means inside" — check it against the centre if you ever forget.

```
                 S11 > 0  (outside)
                       *
              . - - - - - - - - .
          . '                     ' .
        .        S11 = 0 on the       .
       |   * S11 < 0   boundary        |
        .      (inside)               .
          ' .                     . '
              ' - - - - - - - - '
```

**WORKED EXAMPLE 8.1** Where do `(2, 3)`, `(1, 1)` and `(4, 0)` lie with respect to
`x^2/16 + y^2/9 = 1` ?

```
  (2, 3):   4/16 + 9/9 - 1  =  0.25 + 1 - 1  =  0.25  > 0   ->  OUTSIDE
  (1, 1):   1/16 + 1/9 - 1  =  0.0625 + 0.1111 - 1 = -0.826 < 0  ->  INSIDE
  (4, 0):   16/16 + 0 - 1   =  0                     ->  ON  (it is the vertex)
```

> **TRAP:** You MUST bring the equation to the `... = 1` form first. Testing
> `(2,3)` against `9x^2 + 16y^2 = 144` by computing `9(4) + 16(9) = 180 > 144` also
> works, but only because the coefficients are all positive. Stick to `S11`.

---

# TOPIC 9 — WHEN DOES A LINE TOUCH AN ELLIPSE?

## 9.1 The condition

Substitute `y = mx + c` into `x^2/a^2 + y^2/b^2 = 1`:

```
        b^2 x^2  +  a^2 ( m x + c )^2   =   a^2 b^2

        ( b^2 + a^2 m^2 ) x^2  +  2 a^2 m c x  +  a^2 c^2 - a^2 b^2  =  0   ... (*)

  This is a quadratic in x, so the line meets the ellipse in at most 2 points.

        Discriminant  D  =  ( 2 a^2 m c )^2  -  4 ( b^2 + a^2 m^2 )( a^2 c^2 - a^2 b^2 )

  D > 0   ->   the line CUTS the ellipse (2 points)  -> it is a SECANT
  D = 0   ->   the line TOUCHES it (1 point)         -> it is a TANGENT
  D < 0   ->   the line MISSES it (0 points)

  Set D = 0 :
        4 a^4 m^2 c^2  =  4 ( b^2 + a^2 m^2 ) a^2 ( c^2 - b^2 )
          a^2 m^2 c^2  =  ( b^2 + a^2 m^2 )( c^2 - b^2 )
          a^2 m^2 c^2  =  b^2 c^2 - b^4 + a^2 m^2 c^2 - a^2 m^2 b^2
                   0   =  b^2 ( c^2 - b^2 - a^2 m^2 )
```

```
  +==========================================================================+
  |                                                                          |
  |   CONDITION FOR  y = m x + c  TO BE A TANGENT TO x^2/a^2 + y^2/b^2 = 1   |
  |                                                                          |
  |                     c^2  =  a^2 m^2  +  b^2                              |
  |                                                                          |
  |   so the two tangents of slope m are                                     |
  |                                                                          |
  |            y  =  m x  ±  sqrt( a^2 m^2 + b^2 )                           |
  |                                                                          |
  +==========================================================================+
```

## 9.2 The point of contact

From `(*)`, when `D = 0` the repeated root is

```
        - 2 a^2 m c            a^2 m c          a^2 m           (using c^2 = a^2m^2+b^2
   x = --------------- =  -  -----------  =  -  -----            the denominator
       2( b^2 + a^2m^2 )      b^2+a^2m^2          c              b^2 + a^2m^2 = c^2 )

        y  =  m x + c  =  - a^2 m^2 / c  +  c  =  ( c^2 - a^2 m^2 ) / c  =  b^2 / c
```

```
  +==========================================================================+
  |                                          -a^2 m      b^2                 |
  |   POINT OF CONTACT of  y = mx + c   is  ( ------- ,  --- )               |
  |                                              c        c                  |
  |                                                                          |
  |   Equivalently, for  y = mx ± sqrt(a^2m^2 + b^2), the contact point is   |
  |                                                                          |
  |         (  ∓ a^2 m / sqrt(a^2m^2+b^2) ,  ± b^2 / sqrt(a^2m^2+b^2)  )     |
  |                                                                          |
  +==========================================================================+
```

**WORKED EXAMPLE 9.1**
Find the value of `k` so that `y = 2x + k` touches `x^2/16 + y^2/9 = 1`, and find the
point of contact.

```
  a^2 = 16 , b^2 = 9 , m = 2

  c^2 = a^2 m^2 + b^2 = 16(4) + 9 = 64 + 9 = 73     ->   k = ± sqrt(73)

  Take k = + sqrt(73). Point of contact:

        x = - a^2 m / c = - 32 / sqrt(73)
        y =   b^2 / c   =    9 / sqrt(73)

  CHECK it lies on the ellipse:
        x^2/16 + y^2/9 = (1024/73)/16 + (81/73)/9 = 64/73 + 9/73 = 73/73 = 1. TICK.
  CHECK it lies on the line:
        2x + sqrt(73) = -64/sqrt(73) + 73/sqrt(73) = 9/sqrt(73) = y. TICK.
```

**WORKED EXAMPLE 9.2**
Find the equations of the tangents to `x^2/9 + y^2/4 = 1` drawn from the external
point `(1, 2)`.

```
  Any line through (1,2):   y - 2 = m ( x - 1 )   ->   y = m x + ( 2 - m )
  So  c = 2 - m .

  Tangency condition:   c^2 = a^2 m^2 + b^2

        ( 2 - m )^2  =  9 m^2 + 4
        4 - 4m + m^2 =  9 m^2 + 4
             - 4 m   =  8 m^2
        8 m^2 + 4 m  =  0     ->     4m ( 2m + 1 ) = 0
             m = 0     or     m = -1/2

  m = 0    ->  c = 2      ->   y = 2
  m = -1/2 ->  c = 5/2    ->   y = -x/2 + 5/2   ->   x + 2 y = 5

  CHECK m = 0 :   c^2 = 4 ,  a^2m^2 + b^2 = 0 + 4 = 4. TICK.
  CHECK m = -1/2: c^2 = 25/4 , a^2m^2 + b^2 = 9(1/4) + 4 = 9/4 + 16/4 = 25/4. TICK.
  Both lines pass through (1,2): y = 2 does; 1 + 4 = 5 does. TICK.
```

> **TRAP:** A vertical line `x = k` has **no** slope, so it never appears from
> `y = mx + c`. If the external point has `x`-coordinate `±a`, check `x = ±a`
> separately as a possible tangent.

---

# TOPIC 10 — TANGENTS: THREE FORMS

```
  +==========================================================================+
  |                                                                          |
  |  (1)  AT A POINT ( x1 , y1 ) ON THE ELLIPSE      ["T = 0"]               |
  |                                                                          |
  |             x x1       y y1                                              |
  |             ----   +   ----   =   1                                      |
  |             a^2        b^2                                               |
  |                                                                          |
  |  (2)  AT THE PARAMETRIC POINT theta                                      |
  |                                                                          |
  |             x cos theta       y sin theta                                |
  |             -----------  +    -----------  =  1                          |
  |                  a                 b                                     |
  |                                                                          |
  |  (3)  WITH A GIVEN SLOPE m                                               |
  |                                                                          |
  |             y  =  m x  ±  sqrt( a^2 m^2 + b^2 )                          |
  |                                                                          |
  |             contact point   ( - a^2 m / c ,  b^2 / c )                   |
  |                                                                          |
  +==========================================================================+
```

## 10.1 Where form (1) comes from — differentiate

```
        x^2     y^2
        --- +   ---  =  1        differentiate both sides w.r.t. x :
        a^2     b^2

        2x     2y   dy                    dy       b^2 x
        --- +  --- ---- = 0      ->       ---  =  - -----
        a^2    b^2  dx                    dx        a^2 y

                                                   b^2 x1
        At ( x1 , y1 ) the SLOPE OF THE TANGENT = - ------
                                                   a^2 y1

        y - y1 = - (b^2 x1)/(a^2 y1) * ( x - x1 )

        a^2 y1 y - a^2 y1^2  =  - b^2 x1 x + b^2 x1^2

        b^2 x1 x + a^2 y1 y  =  b^2 x1^2 + a^2 y1^2

        Divide by a^2 b^2 :

        x x1     y y1        x1^2     y1^2
        ----  +  ----   =    ----  +  ----   =  1     (because (x1,y1) is ON it)
        a^2      b^2         a^2      b^2
```

## 10.2 The tangent/normal picture

```
                                y
                                ^
                                |            TANGENT at P
                    . - - - - - + - - - - .    /
                . '             |           ' /
              .                 |            /P
             .                  |          /  \
    ---------+------------------C---------/----+\-----------> x
             .                  |        /      \ NORMAL at P
              .                 |       /        \  (perpendicular to
                ' .             |      /          \  the tangent, and it
                    ' - - - - - + - - '            \ does NOT pass through
                                |                     the centre)

     tangent slope  = - b^2 x1 / ( a^2 y1 )
     normal  slope  = + a^2 y1 / ( b^2 x1 )        product = -1. TICK.
```

**WORKED EXAMPLE 10.1**
Find the tangent and the normal to `x^2/25 + y^2/16 = 1` at the end of the latus
rectum in the first quadrant.

```
  a = 5 , b = 4 ,  ae = sqrt(25 - 16) = 3 ,  e = 3/5 ,  b^2/a = 16/5

  End of latus rectum in the first quadrant :   P ( 3 , 16/5 )

  TANGENT  x x1 / 25 + y y1 / 16 = 1 :

        3x        (16/5) y             3x     y
        ---   +   --------  =  1  ->   --  +  -  =  1   ->   3 x  +  5 y  =  25
         25          16                25     5

  CHECK P on it:  3(3) + 5(16/5) = 9 + 16 = 25. TICK.

  NORMAL   a^2 x / x1  -  b^2 y / y1  =  a^2 - b^2 :

        25 x       16 y
        ----   -   -------  =  25 - 16 = 9
          3        (16/5)

        25x / 3  -  5 y  =  9        ->      25 x  -  15 y  =  27

  CHECK P on it: 25(3) - 15(16/5) = 75 - 48 = 27. TICK.
  CHECK perpendicular: tangent slope = -3/5 , normal slope = 25/15 = 5/3.
        Product = -3/5 * 5/3 = -1. TICK.
```

**WORKED EXAMPLE 10.2**
Find the tangent and normal to `x^2/16 + y^2/9 = 1` at the point whose eccentric
angle is `60°`.

```
  a = 4 , b = 3 , theta = 60° , cos60 = 1/2 , sin60 = sqrt(3)/2

  POINT :  ( 4 * 1/2 , 3 * sqrt3/2 ) = ( 2 , 3 sqrt3 / 2 )

  TANGENT :   (x cos th)/a + (y sin th)/b = 1

        x (1/2)     y ( sqrt3 / 2 )                x        sqrt(3) y
        -------  +  ---------------  = 1    ->    ---  +   ---------  = 1
           4               3                       8            6

        Multiply by 24 :        3 x  +  4 sqrt(3) y  =  24

  CHECK: 3(2) + 4 sqrt3 (3 sqrt3 / 2) = 6 + 4*(9/2)... careful:
         4 sqrt3 * 3 sqrt3 / 2 = (4*3*3)/2 = 18.    6 + 18 = 24. TICK.

  NORMAL :   a x sec th  -  b y cosec th  =  a^2 - b^2

        4 x ( 2 )  -  3 y ( 2 / sqrt3 )  =  16 - 9  =  7

        8 x  -  ( 6 / sqrt3 ) y  =  7      ->      8 x  -  2 sqrt(3) y  =  7

  CHECK: 8(2) - 2 sqrt3 (3 sqrt3 / 2) = 16 - 9 = 7. TICK.
```

---

# TOPIC 11 — NORMALS: THREE FORMS

The **normal** at a point is the line through that point **perpendicular** to the
tangent there.

```
  +==========================================================================+
  |                                                                          |
  |  (1)  AT A POINT ( x1 , y1 ) ON THE ELLIPSE                              |
  |                                                                          |
  |             a^2 x       b^2 y                                            |
  |             -----   -   -----   =   a^2  -  b^2                          |
  |               x1          y1                                             |
  |                                                                          |
  |  (2)  AT THE PARAMETRIC POINT theta                                      |
  |                                                                          |
  |             a x sec theta  -  b y cosec theta  =  a^2 - b^2              |
  |                                                                          |
  |         (same thing:   a x / cos theta  -  b y / sin theta = a^2 - b^2 ) |
  |                                                                          |
  |  (3)  WITH A GIVEN SLOPE m                                               |
  |                                                                          |
  |                            m ( a^2  -  b^2 )                             |
  |             y  =  m x  ∓  --------------------                           |
  |                           sqrt( a^2 + b^2 m^2 )                          |
  |                                                                          |
  +==========================================================================+
```

## 11.1 Deriving form (1)

```
        slope of the tangent at (x1,y1)  = - b^2 x1 / ( a^2 y1 )
        slope of the NORMAL              = + a^2 y1 / ( b^2 x1 )

        y - y1  =  ( a^2 y1 / b^2 x1 ) ( x - x1 )

        b^2 x1 ( y - y1 )  =  a^2 y1 ( x - x1 )

        Divide both sides by  x1 y1 :

        b^2 ( y - y1 ) / y1  =  a^2 ( x - x1 ) / x1

        a^2 x / x1  -  a^2   =   b^2 y / y1  -  b^2

        a^2 x / x1  -  b^2 y / y1  =  a^2 - b^2
```

## 11.2 Deriving form (3) from form (2)

```
        Normal at theta:   a x sec th - b y cosec th = a^2 - b^2

        Rearranged:        y = ( a sin th / b cos th ) x  -  ( a^2 - b^2 ) sin th / b

        So the slope is    m = ( a / b ) tan theta   ->   tan theta = b m / a

        Then    sin theta =  b m / sqrt( a^2 + b^2 m^2 )
                cos theta =  a   / sqrt( a^2 + b^2 m^2 )

        Constant term  =  - ( a^2 - b^2 ) sin th / b
                       =  - ( a^2 - b^2 ) ( b m ) / ( b sqrt( a^2 + b^2 m^2 ) )
                       =  - m ( a^2 - b^2 ) / sqrt( a^2 + b^2 m^2 )       TICK.
```

> **TRAP:** The normal in slope form has `a^2 + b^2 m^2` under the square root,
> but the TANGENT in slope form has `a^2 m^2 + b^2`. They are different. If you
> mix them up you lose all 4 marks. Memory hook: *"tangent has m with a, normal
> has m with b"*.

**WORKED EXAMPLE 11.1**
Find the normal to `x^2/9 + y^2/4 = 1` at `(3/sqrt(2), sqrt(2))`.

```
  CHECK the point first:  (9/2)/9 + 2/4 = 1/2 + 1/2 = 1. TICK, it is on the ellipse.

        a^2 = 9 , b^2 = 4 ,  a^2 - b^2 = 5

        9 x            4 y
      ---------  -   -------  =  5
      3/sqrt(2)      sqrt(2)

        3 sqrt(2) x   -   2 sqrt(2) y   =   5

  CHECK: 3 sqrt2 (3/sqrt2) - 2 sqrt2 (sqrt2) = 9 - 4 = 5. TICK.
```

---

# TOPIC 12 — THE CHORD FAMILY: `T = 0`, `T = S1`, `S S11 = T^2`

All four results below use the SAME two expressions. Write them at the top of your
answer every time.

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |            x^2     y^2                      x1^2    y1^2                 |
  |     S  =   --- +   ---  -  1        S11 =   ---- +  ----  -  1           |
  |            a^2     b^2                      a^2     b^2                  |
  |                                                                          |
  |            x x1     y y1                                                 |
  |     T  =   ---- +   ----  -  1                                           |
  |            a^2      b^2                                                  |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

## 12.1 Chord of contact (point OUTSIDE)

From an outside point `P(x1, y1)` you can draw exactly **two** tangents. They touch
the ellipse at two points. The line joining those two points is the **chord of contact**.

```
                        chord of contact
                     .- - - -*- - - .
                 . '        /|       ' .
               .          /  |          .
              .         /    |           .
      --------+-------/------+------------+--------  P (x1, y1)
              .     /        |          . |         is OUTSIDE
                ' */- - - - -*- - - '     |
                  the two points of contact

  +--------------------------------------------------------------------------+
  |                              x x1     y y1                               |
  |    CHORD OF CONTACT   T = 0  :  ----  +  ----  =  1                      |
  |                              a^2      b^2                                |
  |                                                                          |
  |    (Exactly the same algebraic form as the tangent — but here (x1,y1)     |
  |     is OUTSIDE the curve, not on it.)                                    |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 12.1** Chord of contact from `(1, 2)` to `x^2/9 + y^2/4 = 1`.

```
        x (1)     y (2)              x     y
        -----  +  -----  =  1  ->   ---  + ---  =  1   ->   2 x  +  9 y  =  18
          9         4                9     2

  CHECK against Worked Example 9.2, where the two tangents from (1,2) were
  y = 2 and x + 2y = 5. Their points of contact are:
        y = 2      : m = 0 , c = 2   -> ( -9*0/2 , 4/2 ) = ( 0 , 2 )
        x + 2y = 5 : m = -1/2, c=5/2 -> ( -9(-1/2)/(5/2) , 4/(5/2) ) = ( 9/5 , 8/5 )

        ( 0 , 2 )    : 2(0) + 9(2)      = 18. TICK.
        ( 9/5 , 8/5 ): 2(9/5) + 9(8/5)  = 18/5 + 72/5 = 90/5 = 18. TICK.
```

## 12.2 Chord with a given MIDPOINT

```
  +--------------------------------------------------------------------------+
  |    The chord of the ellipse whose MIDPOINT is ( x1 , y1 ) is             |
  |                                                                          |
  |                          T  =  S11                                       |
  |                                                                          |
  |         x x1     y y1          x1^2    y1^2                              |
  |         ---- +   ----   =      ---- +  ----                              |
  |         a^2      b^2           a^2     b^2                               |
  |                                                                          |
  |    (the -1 on each side cancels)                                         |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 12.2**
Find the chord of `x^2/25 + y^2/16 = 1` whose midpoint is `(2, 1)`.

```
        T = S11 :

        2 x       y             4        1
        ---  +   ---     =     ---  +   ---
        25        16            25       16

        Multiply everything by 400 (the LCM of 25 and 16):

        32 x  +  25 y   =   64  +  25   =   89

  CHECK: is (2,1) the midpoint? Solve 32x + 25y = 89 with the ellipse.
        From the line, y = (89 - 32x)/25. Substitute into 16x^2 + 25y^2 = 400:
        16x^2 + 25 (89-32x)^2 / 625 = 400
        16x^2 + (89-32x)^2 / 25 = 400
        400x^2 + (89 - 32x)^2 = 10000
        400x^2 + 7921 - 5696x + 1024x^2 = 10000
        1424 x^2 - 5696 x - 2079 = 0
        Sum of the roots = 5696 / 1424 = 4 , so the average of the roots is 2. TICK,
        the midpoint really has x = 2.
```

> **TRAP:** `T = 0` and `T = S11` look almost identical. `T = 0` means "the point is
> the pole / the tangency point"; `T = S11` means "the point is the MIDPOINT".
> Read the question: the word **midpoint** or **bisected at** signals `T = S11`.

## 12.3 The PAIR OF TANGENTS from an external point

```
  +--------------------------------------------------------------------------+
  |    The combined equation of the two tangents from ( x1 , y1 ) is         |
  |                                                                          |
  |                       S  *  S11   =   T ^ 2                              |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 12.3** Pair of tangents from `(1, 2)` to `x^2/9 + y^2/4 = 1`.

```
        S   =  x^2/9 + y^2/4 - 1
        S11 =  1/9 + 4/4 - 1  =  1/9
        T   =  x/9 + y/2 - 1

        S * S11 = T^2 :

        (1/9)( x^2/9 + y^2/4 - 1 )  =  ( x/9 + y/2 - 1 )^2

        Multiply both sides by 9 :

        x^2/9 + y^2/4 - 1  =  9 ( x/9 + y/2 - 1 )^2
                           =  9 [ x^2/81 + y^2/4 + 1 + x y/9 - 2x/9 - y ]
                           =  x^2/9 + 9y^2/4 + 9 + x y - 2 x - 9 y

        0 = 2 y^2 + x y - 2 x - 9 y + 10

              x y  +  2 y^2  -  2 x  -  9 y  +  10   =   0

  CHECK by factorising:   ( y - 2 )( x + 2 y - 5 )
        = x y + 2y^2 - 5y - 2x - 4y + 10
        = x y + 2 y^2 - 2 x - 9 y + 10.  TICK — exactly the two tangents found in
        Worked Example 9.2.
```

## 12.4 POLE and POLAR

```
  +--------------------------------------------------------------------------+
  |    The POLAR of the point ( x1 , y1 ) with respect to the ellipse is     |
  |                                                                          |
  |               x x1     y y1                                              |
  |          T =  ---- +   ----  -  1  =  0                                  |
  |               a^2      b^2                                               |
  |                                                                          |
  |    The point is called the POLE of that line.                            |
  |                                                                          |
  |    POLE of the line   l x + m y + n = 0   is                             |
  |                                                                          |
  |               (  - a^2 l / n  ,  - b^2 m / n  )                          |
  +--------------------------------------------------------------------------+
```

Three cases, one formula:

| Where the point is | What the polar is |
|---|---|
| ON the ellipse | the **tangent** at that point |
| OUTSIDE | the **chord of contact** |
| INSIDE | a line that does not meet the ellipse |

**Conjugate points / conjugate lines:** two points are *conjugate* if each lies on
the polar of the other. Two lines are *conjugate* if the pole of each lies on the other.

**WORKED EXAMPLE 12.4** Find the pole of `2x + 3y = 6` with respect to `x^2/9 + y^2/4 = 1`.

```
  Write the line as   2x + 3y - 6 = 0  ->  l = 2 , m = 3 , n = -6

        Pole = ( -a^2 l / n , -b^2 m / n ) = ( -9(2)/(-6) , -4(3)/(-6) ) = ( 3 , 2 )

  CHECK: polar of (3,2) is  3x/9 + 2y/4 = 1  ->  x/3 + y/2 = 1  ->  2x + 3y = 6. TICK.
```

---

# TOPIC 13 — THE DIRECTOR CIRCLE

**Question:** from which points can you draw **two perpendicular tangents** to an ellipse?

```
  A line of slope m through ( h , k ) is   y - k = m ( x - h ) , i.e. c = k - m h.

  It is a tangent when   c^2 = a^2 m^2 + b^2 :

        ( k - m h )^2  =  a^2 m^2 + b^2

        k^2 - 2 m h k + m^2 h^2  =  a^2 m^2 + b^2

        m^2 ( h^2 - a^2 )  -  2 h k m  +  ( k^2 - b^2 )  =  0        ... quadratic in m

  Its two roots m1 , m2 are the slopes of the two tangents from ( h , k ).

        product of roots     m1 m2  =  ( k^2 - b^2 ) / ( h^2 - a^2 )

  For PERPENDICULAR tangents we need  m1 m2 = -1 :

        k^2 - b^2  =  - ( h^2 - a^2 )      ->      h^2 + k^2  =  a^2 + b^2
```

```
  +==========================================================================+
  |                                                                          |
  |    DIRECTOR CIRCLE of  x^2/a^2 + y^2/b^2 = 1   is                        |
  |                                                                          |
  |                     x^2  +  y^2   =   a^2  +  b^2                        |
  |                                                                          |
  |    It is the locus of the point from which the two tangents drawn to     |
  |    the ellipse are PERPENDICULAR to each other.                          |
  |                                                                          |
  |    Centre ( 0 , 0 ) , radius  sqrt( a^2 + b^2 )                          |
  |                                                                          |
  +==========================================================================+
```

```
                 . . . . . . . . . . . .          <- director circle
              .                          .           radius sqrt(a^2+b^2)
            .          . - - - - .        .
          .        . '            ' .      .
          .      .        ELLIPSE     .    .
          .        ' .            . '      .
            .          ' - - - - '        .
              .                          .
                 . . . . . *. . . . . .
                          / \
                         /   \    the two tangents from a point ON the
                        /     \   director circle meet at 90 degrees
```

Compare with the Parabola: there, the "director circle" degenerates into the
**directrix**, because a parabola is an ellipse with `a` pushed off to infinity.

**WORKED EXAMPLE 13.1**
Find the director circle of `x^2/16 + y^2/9 = 1` and verify with a point on it.

```
        x^2 + y^2 = 16 + 9 = 25      (a circle of radius 5)

  Take the point ( 5 , 0 ), which is on it. Tangents from ( 5 , 0 ):
        c = 0 - 5m = -5m ;   c^2 = a^2m^2 + b^2
        25 m^2 = 16 m^2 + 9   ->   9 m^2 = 9   ->   m = ± 1
  The two slopes are +1 and -1 ; their product is -1 , so they ARE
  perpendicular. TICK.
```

---

# TOPIC 14 — CONJUGATE DIAMETERS

A **diameter** of an ellipse is any chord through the centre — so every diameter is
a line `y = m x`.

```
     A diameter BISECTS a whole family of parallel chords.

                        y = m2 x  (the chords)
              . - - - - - - - - - - .
          . '     /      /      /     ' .
        .        /      /      /         .
       *========*======*======*===========*   y = m1 x  (the diameter that
        .      /      /      /            .              bisects them all)
          ' . /      /      /         . '
              ' - - - - - - - - - '

     Then y = m1 x and y = m2 x are called CONJUGATE DIAMETERS.
```

```
  +==========================================================================+
  |                                                                          |
  |    CONDITION FOR CONJUGATE DIAMETERS                                     |
  |                                                                          |
  |                                b^2                                       |
  |                m1 * m2  =  -  -----                                      |
  |                                a^2                                       |
  |                                                                          |
  |    PROPERTIES                                                            |
  |                                                                          |
  |    1. If P is an end of one diameter with eccentric angle theta, then    |
  |       the end D of the conjugate diameter has eccentric angle            |
  |       theta + 90°.  So   P = ( a cos th , b sin th )                     |
  |                          D = ( -a sin th , b cos th )                    |
  |                                                                          |
  |    2. SUM OF THE SQUARES of two conjugate SEMI-diameters is constant:    |
  |                                                                          |
  |               C P^2  +  C D^2   =   a^2  +  b^2                          |
  |                                                                          |
  |    3. The PARALLELOGRAM formed by the tangents at the ends of a pair of  |
  |       conjugate diameters has CONSTANT area  =  4 a b .                  |
  |                                                                          |
  |    4. EQUICONJUGATE diameters (the pair of equal length) have            |
  |       m1 = -m2 = b/a , and each has length  sqrt( 2( a^2 + b^2 ) ).      |
  |                                                                          |
  +==========================================================================+
```

**Proof of property 2** (short, and worth full marks):

```
        C P^2  =  a^2 cos^2 th  +  b^2 sin^2 th
        C D^2  =  a^2 sin^2 th  +  b^2 cos^2 th        [ using theta + 90° ]
        ------------------------------------------------
        SUM    =  a^2 ( cos^2 + sin^2 )  +  b^2 ( sin^2 + cos^2 )
               =  a^2  +  b^2                                     TICK
```

**Proof of the condition `m1 m2 = -b^2/a^2`:**

```
        Take chords parallel to  y = m2 x . Let one such chord have midpoint (x1,y1).
        By T = S11 its equation is   x x1 / a^2  +  y y1 / b^2  =  x1^2/a^2 + y1^2/b^2

        Its slope is    - b^2 x1 / ( a^2 y1 )  =  m2

        So the locus of the midpoints satisfies   y1 / x1  =  - b^2 / ( a^2 m2 )

        But y1 / x1 is exactly the slope m1 of the line of midpoints. Hence

                 m1  =  - b^2 / ( a^2 m2 )      ->      m1 m2  =  - b^2 / a^2   TICK
```

**WORKED EXAMPLE 14.1**
If `y = 2x` is one diameter of `x^2/16 + y^2/9 = 1`, find its conjugate diameter,
and verify property 2 for the pair.

```
        m1 m2 = - b^2/a^2 = -9/16 .  With m1 = 2 :   m2 = -9/32

        CONJUGATE DIAMETER :   y = -9x/32 , i.e.  9 x + 32 y = 0

  VERIFY property 2 numerically. Find P, the end of y = 2x on the ellipse:
        x^2/16 + 4x^2/9 = 1  ->  x^2 ( 9 + 64 ) / 144 = 1  ->  x^2 = 144/73
        C P^2 = x^2 + y^2 = x^2 + 4x^2 = 5 x^2 = 720/73

  Find D, the end of 9x + 32y = 0 , i.e. y = -9x/32 :
        x^2/16 + (81 x^2 / 1024)/9 = 1  ->  x^2/16 + 9x^2/1024 = 1
        x^2 ( 64 + 9 ) / 1024 = 1   ->   x^2 = 1024/73
        C D^2 = x^2 + 81x^2/1024 = x^2 ( 1024 + 81 )/1024 = (1024/73)(1105/1024)
              = 1105/73

        C P^2 + C D^2 = ( 720 + 1105 ) / 73 = 1825 / 73 = 25 = 16 + 9 = a^2 + b^2. TICK.
```

---

# TOPIC 15 — AREA, AND THE PRETTY PROPERTIES

## 15.1 Area of an ellipse

```
  +==========================================================================+
  |                                                                          |
  |            AREA  OF  AN  ELLIPSE   =    pi  *  a  *  b                   |
  |                                                                          |
  |    (a = semi-major axis, b = semi-minor axis)                            |
  |                                                                          |
  |    Sanity check: if a = b = r you get pi r^2 , the area of a circle.     |
  |                                                                          |
  +==========================================================================+
```

Why: take the auxiliary circle of area `pi a^2` and squash every `y`-coordinate by
the factor `b/a`. Areas shrink by the same factor, so the ellipse has area
`pi a^2 × (b/a) = pi a b`.

The **perimeter** has no simple exact formula (it needs an elliptic integral), so
the board never asks for it. An approximation sometimes quoted is
`pi [ 3(a+b) - sqrt( (3a+b)(a+3b) ) ]` (Ramanujan). Do not memorise it.

## 15.2 Three properties that carry full marks

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  PROPERTY 1 — The product of the perpendicular distances from the two    |
  |               FOCI to any tangent is  b^2 (a constant).                  |
  |                                                                          |
  |  PROPERTY 2 — The foot of the perpendicular dropped from a focus onto    |
  |               any tangent lies on the AUXILIARY CIRCLE x^2 + y^2 = a^2.  |
  |                                                                          |
  |  PROPERTY 3 (REFLECTION) — A ray of light leaving one focus reflects off |
  |               the ellipse and passes exactly through the other focus.    |
  |               The normal at any point BISECTS the angle S P S'.          |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**Proof of Property 1:**

```
        Tangent :  y = m x + c   with  c^2 = a^2 m^2 + b^2 ,
        written as  m x - y + c = 0.

        Perpendicular from S ( a e , 0 ) :   p1 = | m a e + c | / sqrt( m^2 + 1 )
        Perpendicular from S'( -a e , 0 ):   p2 = | -m a e + c | / sqrt( m^2 + 1 )

                     | c^2  -  m^2 a^2 e^2 |
        p1 * p2  =  -------------------------
                            m^2 + 1

        Now  a^2 e^2 = a^2 - b^2 , and  c^2 = a^2 m^2 + b^2 :

        c^2 - m^2 ( a^2 - b^2 )  =  a^2 m^2 + b^2 - a^2 m^2 + b^2 m^2
                                 =  b^2 ( 1 + m^2 )

                     b^2 ( 1 + m^2 )
        p1 * p2  =  -----------------  =   b^2                     TICK
                        1 + m^2
```

Real-world use: **whispering galleries** (a whisper at one focus is heard clearly at
the other), and **lithotripsy** (shock waves generated at one focus of an elliptical
reflector are focused onto a kidney stone placed at the other).

---

# TOPIC 16 — BUILDING AN ELLIPSE FROM GIVEN DATA

Most Section A and Section B questions are "here are two facts, find the equation".
Everything reduces to finding `a^2` and `b^2`.

| If you are given | Use this |
|---|---|
| major axis length | `2a` |
| minor axis length | `2b` |
| distance between the foci | `2ae` |
| distance between the directrices | `2a/e` |
| length of the latus rectum | `2b^2/a` |
| eccentricity and one of a, b | `b^2 = a^2(1-e^2)` |
| a point that the ellipse passes through | substitute it |
| two points | substitute both, solve two equations |

**WORKED EXAMPLE 16.1**
Find the equation of the ellipse whose latus rectum is `15/2` and whose distance
between the foci is `2`, with the major axis along the `x`-axis.

```
        2 b^2 / a  =  15/2      ...(1)
        2 a e      =  2   ->  a e = 1   ->   a^2 e^2 = 1
        b^2 = a^2 - a^2 e^2 = a^2 - 1   ...(2)

        Put (2) into (1):     2 ( a^2 - 1 ) / a  =  15/2

              4 ( a^2 - 1 )  =  15 a
              4 a^2 - 15 a - 4  =  0

                    15 ± sqrt( 225 + 64 )      15 ± 17
              a  =  ----------------------  =  -------      ->  a = 4 (reject -1/4)
                             8                     8

              b^2 = 16 - 1 = 15

                              x^2     y^2
                              ---  +  ---  =  1
                              16       15

  CHECK: LR = 2(15)/4 = 30/4 = 15/2. TICK.
         ae = 1 with a = 4 gives e = 1/4 ; 2ae = 2. TICK.  e < 1. TICK.
```

**WORKED EXAMPLE 16.2**
Find the equation of the ellipse (centre at the origin, axes along the coordinate
axes) that passes through `(-2, 2)` and `(3, -1)`.

```
        Let the ellipse be   x^2 / A  +  y^2 / B  =  1

        Through (-2, 2):     4/A  +  4/B  =  1
        Through ( 3, -1):    9/A  +  1/B  =  1

        Put u = 1/A , v = 1/B :

              4 u + 4 v = 1
              9 u +   v = 1     ->   v = 1 - 9u

              4u + 4( 1 - 9u ) = 1  ->  4u + 4 - 36u = 1  ->  -32u = -3
              u = 3/32   ,   v = 1 - 27/32 = 5/32

              A = 32/3 ,  B = 32/5

              3 x^2 / 32  +  5 y^2 / 32  =  1     ->     3 x^2  +  5 y^2  =  32

  CHECK (-2,2): 3(4) + 5(4) = 12 + 20 = 32. TICK.
  CHECK (3,-1): 3(9) + 5(1) = 27 +  5 = 32. TICK.
  Standard form: x^2/(32/3) + y^2/(32/5) = 1 . Since 32/3 > 32/5 the major axis
  is the x-axis, a^2 = 32/3, b^2 = 32/5. TICK (an ellipse, as required).
```

**WORKED EXAMPLE 16.3**
Find the equation of the ellipse with centre at the origin, major axis along the
`x`-axis, eccentricity `2/3`, passing through `(-3, 1)`.

```
        b^2 = a^2 ( 1 - 4/9 ) = 5 a^2 / 9

              9        1
             ---  +  -------  =  1
             a^2     5a^2/9

              9        9
             ---  +  -----  =  1
             a^2     5 a^2

             ( 45 + 9 ) / ( 5 a^2 )  =  1    ->    5 a^2 = 54    ->   a^2 = 54/5

             b^2 = (5/9)(54/5) = 6

              x^2         y^2                 5 x^2      y^2
             ------  +   -----  =  1   ->    ------  +  -----  =  1
             54/5          6                    54         6

                          5 x^2  +  9 y^2  =  54

  CHECK (-3,1): 5(9) + 9(1) = 45 + 9 = 54. TICK.
  CHECK e: a^2 = 54/5 = 10.8 , b^2 = 6 , e^2 = 1 - 6/10.8 = 1 - 0.5555 = 0.4444
           e = 0.6667 = 2/3. TICK.
```

---

# TOPIC 17 — THE ELLIPSE IN REAL LIFE (worth a line in a long answer)

```
  +--------------------------------------------------------------------------+
  |  Planetary orbits  Kepler's First Law: every planet moves in an ellipse  |
  |                    with the SUN AT ONE FOCUS (not at the centre).        |
  |                    Earth's orbit has e = 0.0167 — almost a circle.       |
  |                                                                          |
  |  Whispering        The dome is a half-ellipsoid. A whisper at one focus  |
  |  galleries         is heard clearly at the other focus and nowhere else. |
  |                                                                          |
  |  Lithotripsy       Shock waves made at one focus of an elliptical bowl   |
  |                    converge on a kidney stone placed at the other focus. |
  |                                                                          |
  |  Gears and cams    Elliptical gears give a varying speed ratio.          |
  |                                                                          |
  |  Architecture      Elliptical arches carry load more evenly than         |
  |                    semicircular ones for the same span.                  |
  +--------------------------------------------------------------------------+
```

---

# COMMON MISTAKES — the ten that cost the most marks

```
  1.  Not dividing by the constant term first.
      9x^2 + 16y^2 = 144  is NOT  a^2 = 9. Divide by 144 FIRST.

  2.  Taking a as the smaller number. a is ALWAYS the semi-MAJOR axis, a > b.

  3.  Latus rectum written as 4a. That is a PARABOLA. Here it is 2b^2/a.

  4.  Writing b^2 = a^2(1 - e^2) for a TALL ellipse without swapping the roles.
      The letter attached to the LONG axis carries the (1 - e^2).

  5.  Giving only one focus / one directrix. There are always TWO of each.

  6.  Confusing 2ae (distance between foci) with 2a/e (distance between
      directrices).

  7.  Mixing the tangent and normal slope forms:
        tangent  y = mx ± sqrt( a^2 m^2 + b^2 )
        normal   y = mx ∓ m(a^2 - b^2) / sqrt( a^2 + b^2 m^2 )

  8.  Using T = 0 when the question said "midpoint" (that needs T = S11).

  9.  Forgetting to square e. e = 1/sqrt(2) means e^2 = 1/2.

  10. Leaving the answer as a decimal when the question wants an exact surd.
      Write sqrt(7)/4 , not 0.661.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I divide the equation so that the right-hand side is exactly 1 ?
  [ ]  Did I circle the BIGGER denominator and name the major axis correctly ?
  [ ]  Is my a bigger than my b ?
  [ ]  Is my e strictly between 0 and 1 ?
  [ ]  Did I use b^2 = a^2 ( 1 - e^2 ) the right way round ?
  [ ]  Did I give BOTH foci and BOTH directrices ?
  [ ]  Is the latus rectum 2b^2 / a  (and is it smaller than 2a) ?
  [ ]  Are the directrices written as EQUATIONS ( x = ... ) not as points ?
  [ ]  For a shifted ellipse, did I add h and k back to every coordinate ?
  [ ]  Did I substitute my point back into the original equation to check ?
  [ ]  For a tangent, did I check c^2 = a^2 m^2 + b^2 numerically ?
  [ ]  For a normal, did I check that (tangent slope)(normal slope) = -1 ?
  [ ]  Did I draw a rough sketch ? It is worth a mark and it catches sign errors.
  [ ]  Did I answer what was asked — length, or equation, or coordinates ?
```
