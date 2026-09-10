# Transformation of Axes — Concepts From Zero

**Maths 1B · Chapter 2**

Read this with a pen. Every worked example is meant to be copied out by hand at least
once. This chapter is small enough that you can genuinely master all of it.

---

# TOPIC 1 — WHY WE TRANSFORM AXES AT ALL

## 1.1 The one idea in this chapter

Look at these two equations:

```
       x^2 + y^2 - 4x + 6y - 12 = 0

       X^2 + Y^2 = 25
```

They look completely different. **They are the same circle.**

The first one is that circle described by somebody standing at one spot. The second
one is that same circle described by somebody standing at a *better* spot — right at
the centre of it.

```
  +======================================================================+
  |                                                                      |
  |   THE CURVE NEVER MOVES.                                             |
  |   ONLY THE OBSERVER MOVES.                                           |
  |                                                                      |
  |   We do not change the shape. We change where we are standing        |
  |   when we describe it. A well-chosen viewpoint gives a much          |
  |   shorter equation.                                                  |
  |                                                                      |
  +======================================================================+
```

## 1.2 An everyday picture

Imagine a cricket ground with a big painted circle on the grass.

- You stand at the **entrance gate** and describe the circle: *"it starts 4 metres to
  my right, goes another 10 metres, and the far edge is 22 metres away, and it is also
  6 metres to the left of the sightscreen line..."* — long, ugly, full of numbers.

- Now you walk to the **middle of the circle** and describe it again: *"every point of
  it is 5 metres from me."* — one short sentence.

Same circle. Same grass. You just moved. That is a **translation of axes**.

Now suppose the painted shape is not a circle but a long thin ellipse lying at a
slant. Standing in its middle is good, but the description is still awkward because
the shape runs diagonally across your left-right and forward-back directions. So you
**turn on the spot** until you are looking straight along the long axis of the ellipse.
Now the description is short again. That is a **rotation of axes**.

```
    BEFORE                              AFTER
    (bad viewpoint)                     (good viewpoint)

         y                                     Y
         ^                                     ^
         |     _-'-_                           |     _-'-_
         |   _-     `-_                        |   ,'     `.
         | ,'          `-_                     |  |    O    |  --> X
         |'                `.                  |   `.     ,'
    -----+-------------------->  x             |     `-,-'
         |                                     |
    x^2 + 4xy + 5y^2 - 6x - 14y + 8 = 0        X^2/9 + Y^2/4 = 1

    SIX terms, nothing recognisable          TWO terms, obviously an ellipse
```

## 1.3 The three moves we are allowed

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  TRANSLATION   Slide the origin to a new point (h, k).                   |
  |                The axes keep pointing the same way (still parallel).     |
  |                PURPOSE: get rid of the  x  and  y  terms.                |
  |                                                                          |
  |  ROTATION      Keep the origin where it is. Turn BOTH axes through       |
  |                the same angle theta, anticlockwise.                      |
  |                PURPOSE: get rid of the  xy  term.                        |
  |                                                                          |
  |  BOTH          Translate first, then rotate. Gets rid of everything      |
  |                except the squares and the constant.                      |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

Notice we are **never** allowed to stretch, squash, or bend the axes. The two axes
always stay perpendicular to each other and the scale never changes. That is why
lengths, angles and areas survive untouched — more on that in TOPIC 7 and TOPIC 14.

> **TRAP:** Students constantly say "the curve is shifted to the right". **No.** The
> curve does not budge. The **origin** is shifted. If you get this backwards you will
> put a plus where a minus belongs, and lose the mark.

## 1.4 The notation used everywhere in this chapter

```
  small letters   x , y    ->  the OLD coordinates (measured from the OLD origin O)
  capitals        X , Y    ->  the NEW coordinates (measured from the NEW origin O')

  (h, k)   or   (alpha, beta)   ->  the new origin, written in OLD coordinates
  theta    (often just t)       ->  the angle of rotation, anticlockwise
```

Some textbooks use `(x', y')` instead of `(X, Y)`. Same thing. This book uses capitals
because dashes get lost in handwriting and cost people marks.

---

# TOPIC 2 — TRANSLATION OF AXES: THE FORMULAS

## 2.1 The set-up

The origin `O` moves to a new point `O'`. In the old system `O'` has coordinates
`(h, k)`. The new axes `O'X` and `O'Y` point in exactly the same directions as the old
axes `Ox` and `Oy` — they are just shifted.

```
         y (old)
         ^
         |                          Y (new)
         |                          ^
         |                          |                    * P
         |                          |                   /|
         |                          |                  / |
         |                          |             Y   /  |
         |                          |                /   |
         |        O'(h, k)  *-------+---------------+----+ ----> X (new)
         |                  |             X                    
         |                  |
         |          k       |
         |                  |
    -----O------------------+--------------------------------> x (old)
         |<------- h ------>|

    P measured from O   ->  (x, y)     the OLD coordinates
    P measured from O'  ->  (X, Y)     the NEW coordinates
```

Read the picture along the bottom edge. To get from `O` all the way across to `P`
horizontally you go `h` first (to reach `O'`) and then `X` more:

```
       x  =  h  +  X                that is,       x = X + h

Same story vertically:

       y  =  k  +  Y                that is,       y = Y + k
```

Rearranged the other way round:

```
       X  =  x - h                  Y  =  y - k
```

## 2.2 The formula box — learn this one first

```
  +==========================================================================+
  |                                                                          |
  |     TRANSLATION OF AXES     (origin moved from O to O'(h, k))            |
  |                                                                          |
  |     -------------------------------------------------------------       |
  |     OLD in terms of NEW      |      NEW in terms of OLD                  |
  |     (use when transforming   |      (use when transforming               |
  |      an EQUATION)            |       a POINT)                            |
  |     -------------------------------------------------------------       |
  |                              |                                           |
  |          x  =  X + h         |          X  =  x - h                      |
  |          y  =  Y + k         |          Y  =  y - k                      |
  |                              |                                           |
  +==========================================================================+
```

## 2.3 How to never mix up the sign

Use the origin itself as a test case. The new origin `O'` **is** the point `(h, k)` in
the old system, and it **is** the point `(0, 0)` in the new system.

```
  Put x = h and y = k into   X = x - h , Y = y - k :

        X = h - h = 0        Y = k - k = 0            CORRECT.

  Now try the wrong version   X = x + h :

        X = h + h = 2h       WRONG - the new origin cannot be at 2h.
```

Do this 5-second test in the exam hall if you ever blank out. It takes no time and it
is impossible to get wrong.

> **TRAP:** The single most common error in the whole chapter is writing `X = x + h`.
> Remember the sentence: **"to get new coordinates, SUBTRACT the new origin."**

---

# TOPIC 3 — TRANSLATION APPLIED TO A POINT

This is the easiest thing in the syllabus and it is asked in Section A over and over.

## 3.1 The two directions of the question

```
  QUESTION SHAPE A   "The origin is shifted to (h, k). Find the new
                      coordinates of the point (x, y)."
                      ->  answer  ( x - h , y - k )

  QUESTION SHAPE B   "Find the point to which the origin must be shifted
                      so that the point (x, y) becomes (X, Y)."
                      ->  answer  ( x - X , y - Y )
```

Shape B is just Shape A rearranged: from `X = x - h` we get `h = x - X`.

### WORKED EXAMPLE 3.1

**When the origin is shifted to (3, -4), find the new coordinates of the point (2, 5).**

```
  h = 3 ,  k = -4 ,  x = 2 ,  y = 5

  X = x - h = 2 - 3      = -1
  Y = y - k = 5 - (-4)   = 5 + 4  =  9
```

**New coordinates: (-1, 9)**

Check by going backwards: `x = X + h = -1 + 3 = 2` and `y = Y + k = 9 + (-4) = 5`.
Both come back to the original point, so it is right.

### WORKED EXAMPLE 3.2

**When the origin is shifted to (-1, 2), find the new coordinates of (0, 0) and of (4, -3).**

```
  h = -1 ,  k = 2

  For (0, 0):     X = 0 - (-1) = 1        Y = 0 - 2 = -2      ->  ( 1 , -2 )

  For (4, -3):    X = 4 - (-1) = 5        Y = -3 - 2 = -5     ->  ( 5 , -5 )
```

Notice: the **old origin** is not the new origin any more. Under the new system the
old origin sits at `(1, -2)`. That is perfectly normal and it is a favourite Section A
question.

### WORKED EXAMPLE 3.3

**Find the point to which the origin should be shifted so that the point (3, 0) may
change to (2, -3).**

```
  We need   X = 2   and   Y = -3   for the point   x = 3 , y = 0.

  X = x - h    ->    2 = 3 - h     ->    h = 3 - 2  =  1
  Y = y - k    ->   -3 = 0 - k     ->    k = 0 + 3  =  3
```

**The origin must be shifted to (1, 3).**

Check: `X = 3 - 1 = 2` and `Y = 0 - 3 = -3`. Correct.

### WORKED EXAMPLE 3.4

**The origin is shifted to (2, 3). The new coordinates of a point P are (4, -3).
Find the original coordinates of P.**

Here we are going the other way, so use the **old-from-new** formulas.

```
  x = X + h = 4 + 2   =  6
  y = Y + k = -3 + 3  =  0
```

**P was (6, 0).**

> **TRAP:** Read the question three times to see which set of coordinates you have
> been handed. "Find the new coordinates" means subtract. "Find the original point"
> means add. Half the lost marks in this topic come from doing the right arithmetic
> in the wrong direction.

---

# TOPIC 4 — TRANSLATION APPLIED TO A CURVE

## 4.1 The method

To find the **new equation** of a curve you must express everything in the new letters.
So you replace every `x` by `X + h` and every `y` by `Y + k`, then expand and tidy up.

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   NEW EQUATION OF A CURVE AFTER TRANSLATION                              |
  |                                                                          |
  |   STEP 1   Write down  x = X + h  and  y = Y + k  with the actual        |
  |            numbers filled in.                                            |
  |   STEP 2   Substitute into the given equation.                           |
  |   STEP 3   Expand every bracket completely.                              |
  |   STEP 4   Collect X^2 , XY , Y^2 , X , Y and the constant.              |
  |   STEP 5   State the answer in capitals.                                 |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

> **TRAP:** People substitute `X - h` instead of `X + h`. When you are transforming an
> **equation** you need **old in terms of new**, which is `x = X + h`. When you are
> transforming a **point** you need **new in terms of old**, which is `X = x - h`.
> Equations get the PLUS. Points get the MINUS.

### WORKED EXAMPLE 4.1 (the standard board question)

**When the origin is shifted to the point (-1, 2) by the translation of axes, find the
transformed equation of `x^2 + y^2 + 2x - 4y + 1 = 0`.**

```
  h = -1 , k = 2       so       x = X - 1 ,   y = Y + 2

  Substitute:

     (X - 1)^2 + (Y + 2)^2 + 2(X - 1) - 4(Y + 2) + 1 = 0

  Expand each piece separately - do NOT try to do it in your head:

     (X - 1)^2   =   X^2 - 2X + 1
     (Y + 2)^2   =   Y^2 + 4Y + 4
     2(X - 1)    =   2X - 2
    -4(Y + 2)    =  -4Y - 8
     +1          =   1

  Now collect, column by column:

     X^2 terms :   X^2
     Y^2 terms :   Y^2
     X   terms :  -2X + 2X            =  0
     Y   terms :   4Y - 4Y            =  0
     constants :   1 + 4 - 2 - 8 + 1  = -4
```

**Transformed equation: `X^2 + Y^2 - 4 = 0`, that is `X^2 + Y^2 = 4`.**

**Verify with a point.** The point `(-1, 0)` — is it on the old curve?

```
  (-1)^2 + 0^2 + 2(-1) - 4(0) + 1  =  1 + 0 - 2 - 0 + 1  =  0        YES.

  Its new coordinates:  X = -1 - (-1) = 0 ,   Y = 0 - 2 = -2

  Put into the new equation:   0^2 + (-2)^2 = 4                      CORRECT.
```

**What did we learn?** The original was a circle with centre `(-1, 2)` and radius 2.
We shifted the origin to the centre, and the equation collapsed to `X^2 + Y^2 = 4`.
That is the whole point of the chapter.

### WORKED EXAMPLE 4.2

**When the origin is shifted to (3, 4), find the transformed equation of
`2x^2 + 4xy + 5y^2 = 0`.**

```
  x = X + 3 ,   y = Y + 4

  2(X + 3)^2       =  2(X^2 + 6X + 9)          =  2X^2 + 12X + 18
  4(X + 3)(Y + 4)  =  4(XY + 4X + 3Y + 12)     =  4XY + 16X + 12Y + 48
  5(Y + 4)^2       =  5(Y^2 + 8Y + 16)         =  5Y^2 + 40Y + 80

  Collect:

     X^2 :  2X^2
     XY  :  4XY
     Y^2 :  5Y^2
     X   :  12X + 16X       =  28X
     Y   :  12Y + 40Y       =  52Y
     const: 18 + 48 + 80    =  146
```

**Transformed equation: `2X^2 + 4XY + 5Y^2 + 28X + 52Y + 146 = 0`**

**Verify.** The old origin `(0, 0)` clearly satisfies `2x^2 + 4xy + 5y^2 = 0`.
Its new coordinates are `X = 0 - 3 = -3`, `Y = 0 - 4 = -4`.

```
  2(-3)^2 + 4(-3)(-4) + 5(-4)^2 + 28(-3) + 52(-4) + 146
    = 18 + 48 + 80 - 84 - 208 + 146
    = 146 - 292 + 146
    = 0                                                    CORRECT.
```

**Notice something important:** the coefficients `2`, `4`, `5` of `x^2`, `xy`, `y^2`
came out **completely unchanged**. That is always true for a translation, and TOPIC 7
explains why. It is also a free error-check.

### WORKED EXAMPLE 4.3

**Find the transformed equation of the straight line `3x - 4y + 7 = 0` when the origin
is shifted to (1, -2).**

```
  x = X + 1 ,   y = Y - 2

  3(X + 1) - 4(Y - 2) + 7  =  3X + 3 - 4Y + 8 + 7  =  3X - 4Y + 18
```

**Transformed equation: `3X - 4Y + 18 = 0`**

**Verify.** `(-1, 1)` is on the old line: `-3 - 4 + 7 = 0`. New coordinates
`X = -1 - 1 = -2`, `Y = 1 - (-2) = 3`. Then `3(-2) - 4(3) + 18 = -6 - 12 + 18 = 0`.
Correct.

**Notice:** the coefficients `3` and `-4` did not change, so the **slope of the line is
the same**. Of course it is — the axes never turned, so directions are untouched. Only
the constant changed.

---

# TOPIC 5 — GOING BACKWARDS: RECOVERING THE ORIGINAL EQUATION

Sometimes the paper gives you the **transformed** equation and asks for the original.
You use the other pair of formulas: `X = x - h`, `Y = y - k`.

### WORKED EXAMPLE 5.1 (a favourite 4-mark question)

**When the origin is shifted to the point (2, 3), the transformed equation of a curve
is `X^2 + 3XY - 2Y^2 + 17X - 7Y - 11 = 0`. Find the original equation of the curve.**

```
  h = 2 , k = 3     so     X = x - 2 ,   Y = y - 3

  Substitute piece by piece:

    X^2   = (x - 2)^2            =  x^2 - 4x + 4
    3XY   = 3(x - 2)(y - 3)      =  3(xy - 3x - 2y + 6)
                                 =  3xy - 9x - 6y + 18
   -2Y^2  = -2(y - 3)^2          = -2(y^2 - 6y + 9)
                                 = -2y^2 + 12y - 18
   17X    = 17(x - 2)            =  17x - 34
   -7Y    = -7(y - 3)            =  -7y + 21
   -11                           =  -11

  Collect:

    x^2   :   x^2
    xy    :   3xy
    y^2   :  -2y^2
    x     :  -4x - 9x + 17x            =   4x
    y     :  -6y + 12y - 7y            =  -1y  =  -y
    const :   4 + 18 - 18 - 34 + 21 - 11  =  -20
```

**Original equation: `x^2 + 3xy - 2y^2 + 4x - y - 20 = 0`**

**Verify with a point.** Take any old point, say `(5, 4)`. Its new coordinates are
`X = 3`, `Y = 1`. Put each into its own equation — the two sides must give the
**same number**:

```
  OLD side:  25 + 3(5)(4) - 2(16) + 4(5) - 4 - 20
           = 25 + 60 - 32 + 20 - 4 - 20   =   49

  NEW side:  9 + 3(3)(1) - 2(1) + 17(3) - 7(1) - 11
           = 9 + 9 - 2 + 51 - 7 - 11      =   49          MATCH. CORRECT.
```

> **TRAP:** Do not "reverse the signs of h and k and use the other formula". Just look
> at which letters you want to end up with. Want small letters at the end?
> Then substitute `X = x - h`. Want capitals at the end? Substitute `x = X + h`.

---

# TOPIC 6 — THE STAR QUESTION: REMOVING THE FIRST DEGREE TERMS

This is the single most-asked question of the chapter. Learn it properly.

## 6.1 What the question is really asking

You are given a second-degree equation

```
        a x^2  +  2h xy  +  b y^2  +  2g x  +  2f y  +  c  =  0
```

and asked: **where must I put the new origin so that the `X` term and the `Y` term
both vanish?**

Why would anyone want that? Because when the first-degree terms are gone you are left
with

```
        a X^2  +  2h XY  +  b Y^2  +  c'  =  0
```

which is a conic **centred at the new origin**. So finding that point is really
**finding the centre of the conic**. That is why this idea comes back all through
Maths IIB.

> **NOTE ON LETTERS:** the letter `h` is being used for the `xy` coefficient here, so
> from now on the new origin is called `(alpha, beta)` instead of `(h, k)`. Get used
> to it — this is how the textbook and the exam write it.

## 6.2 Method 1 — COMPLETING THE SQUARE (safe, always works, no xy term)

If there is **no xy term**, you never need a formula at all. Just complete the square
in `x` and in `y`, and read off the two numbers.

### WORKED EXAMPLE 6.1

**Find the point to which the origin is to be shifted so that the equation
`x^2 + y^2 - 4x + 6y - 12 = 0` has no first degree terms. Also find the new equation.**

```
  Group the x's and the y's:

     (x^2 - 4x)  +  (y^2 + 6y)  -  12  =  0

  Complete each square. Halve the middle coefficient, square it, add and subtract:

     x^2 - 4x  =  (x - 2)^2 - 4          [ half of -4 is -2 , and (-2)^2 = 4 ]
     y^2 + 6y  =  (y + 3)^2 - 9          [ half of  6 is  3 , and   3^2  = 9 ]

  So:

     (x - 2)^2 - 4  +  (y + 3)^2 - 9  -  12  =  0

     (x - 2)^2  +  (y + 3)^2  =  25

  Now compare with  X^2 + Y^2 = 25  where  X = x - 2  and  Y = y + 3 = y - (-3).

  That means  alpha = 2  and  beta = -3.
```

**The origin must be shifted to (2, -3). The new equation is `X^2 + Y^2 = 25`.**

**Verify.** `(7, -3)` is on the old curve: `49 + 9 - 28 - 18 - 12 = 0`. Yes.
New coordinates: `X = 7 - 2 = 5`, `Y = -3 + 3 = 0`. Then `25 + 0 = 25`. Correct.

Notice the whole story: this is the circle with centre `(2, -3)` and radius 5, and we
moved the origin to its centre.

### WORKED EXAMPLE 6.2

**Find the point to which the origin is to be shifted to remove the first degree terms
from `x^2 + y^2 - 5x + 2y - 5 = 0`.**

```
     (x^2 - 5x)  +  (y^2 + 2y)  -  5  =  0

     x^2 - 5x  =  (x - 5/2)^2 - 25/4
     y^2 + 2y  =  (y + 1)^2   - 1

     (x - 5/2)^2 - 25/4 + (y + 1)^2 - 1 - 5  =  0

                                        25            25 + 24        49
     (x - 5/2)^2 + (y + 1)^2   =   6 + ----    =    -----------  =  ----
                                         4                4           4
```

**Shift the origin to `(5/2, -1)`. New equation: `X^2 + Y^2 = 49/4`.**

Fractions are allowed and are often the correct answer. Do not panic and round off.

### WORKED EXAMPLE 6.3

**Remove the first degree terms from `4x^2 + 9y^2 - 8x + 36y + 4 = 0`.**

Here the squares have coefficients, so take them out of the bracket **first**.

```
     4(x^2 - 2x)  +  9(y^2 + 4y)  +  4  =  0

     4[ (x - 1)^2 - 1 ]  +  9[ (y + 2)^2 - 4 ]  +  4  =  0

     4(x - 1)^2 - 4  +  9(y + 2)^2 - 36  +  4  =  0

     4(x - 1)^2  +  9(y + 2)^2  =  36
```

**Shift the origin to `(1, -2)`. New equation: `4X^2 + 9Y^2 = 36`, i.e. `X^2/9 + Y^2/4 = 1`.**

**Verify by direct substitution** with `x = X + 1`, `y = Y - 2`:

```
   4(X + 1)^2  =  4X^2 +  8X +  4
   9(Y - 2)^2  =  9Y^2 - 36Y + 36
  -8(X + 1)    =        -8X -  8
  36(Y - 2)    =        36Y - 72
        +4     =               4

  X terms  :   8X - 8X      =  0                   GOOD
  Y terms  : -36Y + 36Y     =  0                   GOOD
  constants:   4 + 36 - 8 - 72 + 4  =  -36

  ->  4X^2 + 9Y^2 - 36 = 0                         MATCHES.
```

> **TRAP:** When the square has a coefficient (like the `4` and `9` above), you must
> take it outside the bracket **before** halving the middle term. Halving `-8` instead
> of `-2` gives `alpha = 4`, which is wrong.

### WORKED EXAMPLE 6.4

**Remove the first degree terms from `3x^2 + 2y^2 + 12x - 4y + 5 = 0`.**

```
     3(x^2 + 4x)  +  2(y^2 - 2y)  +  5  =  0

     3[ (x + 2)^2 - 4 ]  +  2[ (y - 1)^2 - 1 ]  +  5  =  0

     3(x + 2)^2 - 12  +  2(y - 1)^2 - 2  +  5  =  0

     3(x + 2)^2  +  2(y - 1)^2  =  9
```

**Shift the origin to `(-2, 1)`. New equation: `3X^2 + 2Y^2 = 9`.**

## 6.3 Method 2 — THE READY FORMULA (fast, and it handles the xy term)

Completing the square breaks down the moment an `xy` term appears, because you cannot
separate the `x`s from the `y`s. So we need the general result.

### Where the formula comes from

Substitute `x = X + alpha`, `y = Y + beta` into

```
        S  =  a x^2 + 2h xy + b y^2 + 2g x + 2f y + c
```

and collect the coefficient of `X` and the coefficient of `Y`. Doing that (patiently,
term by term) gives

```
        coefficient of X   =   2( a.alpha + h.beta + g )
        coefficient of Y   =   2( h.alpha + b.beta + f )
```

Setting both to zero gives the famous pair of equations:

```
  +==========================================================================+
  |                                                                          |
  |          a.alpha  +  h.beta  +  g   =   0                                |
  |                                                                          |
  |          h.alpha  +  b.beta  +  f   =   0                                |
  |                                                                          |
  |    (these are exactly  dS/dx = 0  and  dS/dy = 0  divided by 2 )         |
  |                                                                          |
  +==========================================================================+
```

Anyone who has met partial derivatives will recognise them. If you have not, do not
worry: they are just two ordinary simultaneous equations in `alpha` and `beta`.

Solving them by cross-multiplication:

```
  +==========================================================================+
  |                                                                          |
  |                 h f  -  b g                       g h  -  a f            |
  |    alpha  =  ----------------          beta  =  ----------------         |
  |                 a b  -  h^2                       a b  -  h^2            |
  |                                                                          |
  |    valid provided     a b - h^2   is NOT zero                            |
  |                                                                          |
  |    and the new constant term is                                          |
  |                                                                          |
  |         c'  =  g.alpha  +  f.beta  +  c                                  |
  |                                                                          |
  |    so the transformed equation is                                        |
  |                                                                          |
  |         a X^2  +  2h XY  +  b Y^2  +  c'  =  0                           |
  |                                                                          |
  +==========================================================================+
```

### Reading the coefficients off correctly

This is where beginners lose the mark. The equation must be matched against
`a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0` — note the **2s**.

| In the question you see | The letter is |
|---|---|
| coefficient of `x^2` | `a` — take it as it is |
| coefficient of `xy` | `2h`, so **halve it** to get `h` |
| coefficient of `y^2` | `b` — take it as it is |
| coefficient of `x` | `2g`, so **halve it** to get `g` |
| coefficient of `y` | `2f`, so **halve it** to get `f` |
| constant | `c` — take it as it is |

> **TRAP:** Forgetting to halve. If the equation has `- 4x`, then `2g = -4` so
> `g = -2`, **not** `-4`. Write a little table down the side of your answer sheet
> every single time. It costs ten seconds and saves the whole question.

### WORKED EXAMPLE 6.5 (the classic with an xy term)

**Find the point to which the origin is to be shifted so as to remove the first degree
terms from `2x^2 + 4xy + 5y^2 - 4x - 22y + 7 = 0`. Find the transformed equation too.**

**Step 1 — read off the letters.**

```
  a  = 2                     (coefficient of x^2)
  2h = 4    ->  h  = 2       (coefficient of xy , halved)
  b  = 5                     (coefficient of y^2)
  2g = -4   ->  g  = -2      (coefficient of x  , halved)
  2f = -22  ->  f  = -11     (coefficient of y  , halved)
  c  = 7
```

**Step 2 — compute the denominator.**

```
  a b - h^2  =  (2)(5) - (2)^2  =  10 - 4  =  6         (not zero, so we can go on)
```

**Step 3 — compute alpha and beta.**

```
             h f - b g       (2)(-11) - (5)(-2)      -22 + 10      -12
  alpha  =  -----------  =  --------------------  =  ----------  =  ----  =  -2
             a b - h^2               6                    6           6

             g h - a f       (-2)(2) - (2)(-11)       -4 + 22        18
  beta   =  -----------  =  --------------------  =  ----------  =  ----  =   3
             a b - h^2               6                    6           6
```

**The origin must be shifted to `(-2, 3)`.**

**Step 4 — the new constant.**

```
  c'  =  g.alpha + f.beta + c
      =  (-2)(-2)  +  (-11)(3)  +  7
      =  4  -  33  +  7
      =  -22
```

**Transformed equation: `2X^2 + 4XY + 5Y^2 - 22 = 0`**

**Step 5 — VERIFY by full substitution** with `x = X - 2`, `y = Y + 3`:

```
   2(X - 2)^2        =  2X^2  -  8X          +  8
   4(X - 2)(Y + 3)   =  4XY   + 12X  -  8Y   - 24
   5(Y + 3)^2        =  5Y^2         + 30Y   + 45
  -4(X - 2)          =        -  4X          +  8
 -22(Y + 3)          =               - 22Y   - 66
   +7                =                       +  7

  X   terms :  -8X + 12X - 4X          =   0                GOOD
  Y   terms :  -8Y + 30Y - 22Y         =   0                GOOD
  XY  term  :   4XY                     (unchanged)
  X^2 , Y^2 :   2X^2 , 5Y^2             (unchanged)
  constants :   8 - 24 + 45 + 8 - 66 + 7  =  -22            MATCHES c'.
```

Both first degree terms are gone. The answer is right.

### WORKED EXAMPLE 6.6

**Remove the first degree terms from `x^2 - 2xy + 3y^2 - 4x + 8y + 5 = 0`.**

```
  a = 1 ,  2h = -2 -> h = -1 ,  b = 3 ,  2g = -4 -> g = -2 ,  2f = 8 -> f = 4 ,  c = 5

  a b - h^2  =  (1)(3) - (-1)^2  =  3 - 1  =  2

             h f - b g       (-1)(4) - (3)(-2)      -4 + 6       2
  alpha  =  -----------  =  -------------------  =  --------  =  ---  =  1
             a b - h^2              2                   2         2

             g h - a f       (-2)(-1) - (1)(4)       2 - 4       -2
  beta   =  -----------  =  -------------------  =  --------  =  ----  =  -1
             a b - h^2              2                   2         2

  c'  =  g.alpha + f.beta + c  =  (-2)(1) + (4)(-1) + 5  =  -2 - 4 + 5  =  -1
```

**Shift the origin to `(1, -1)`. New equation: `X^2 - 2XY + 3Y^2 - 1 = 0`.**

**Verify** with `x = X + 1`, `y = Y - 1`:

```
   (X + 1)^2        =   X^2 + 2X            +  1
  -2(X + 1)(Y - 1)  =  -2XY + 2X  -  2Y     +  2
   3(Y - 1)^2       =   3Y^2      -  6Y     +  3
  -4(X + 1)         =        - 4X           -  4
   8(Y - 1)         =              +  8Y    -  8
   +5               =                       +  5

  X terms :  2X + 2X - 4X       =  0                GOOD
  Y terms : -2Y - 6Y + 8Y       =  0                GOOD
  constants: 1 + 2 + 3 - 4 - 8 + 5  =  -1           MATCHES.
```

## 6.4 What if `ab - h^2 = 0` ?

Then the two simultaneous equations have no unique solution and **no such point
exists** — the conic has no centre. Geometrically it is a parabola (or a pair of
parallel lines). If you ever hit a zero denominator, do not panic and do not divide.
Write:

```
  ab - h^2 = 0 , so the equations  a.alpha + h.beta + g = 0
                              and  h.alpha + b.beta + f = 0
  have no unique solution. There is no point to which the origin can be
  shifted that removes both first degree terms.
```

That sentence is worth full marks. The board rarely sets this, but knowing it stops
you panicking.

## 6.5 Which method should you use in the exam?

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   NO xy TERM   ->  complete the square. Faster, and you cannot           |
  |                    misremember a formula. You also get the new           |
  |                    equation for free.                                    |
  |                                                                          |
  |   xy TERM      ->  you MUST use the alpha, beta formula.                 |
  |                    Completing the square is impossible.                  |
  |                                                                          |
  |   EITHER WAY   ->  quote the two equations                               |
  |                        a.alpha + h.beta + g = 0                          |
  |                        h.alpha + b.beta + f = 0                          |
  |                    before you use the fraction formula. Examiners        |
  |                    give a mark for showing where it came from.           |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

---

# TOPIC 7 — WHAT A TRANSLATION LEAVES ALONE

Three facts, all easy, all examinable as 2-mark questions.

## 7.1 The second degree coefficients a, h, b never change

Why? Because `x = X + h` only adds a constant. When you square `X + h` you get
`X^2 + ...`; the `X^2` still has coefficient 1. The extra bits from the constants land
in the **first degree** and **constant** slots, never in the second degree slot.

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   Under a TRANSLATION:                                                   |
  |                                                                          |
  |        a , h , b       DO NOT CHANGE                                     |
  |        g , f , c       DO change                                         |
  |                                                                          |
  |   Use this as a free check on every "transformed equation" answer.       |
  |   If the coefficient of X^2 came out different from the coefficient      |
  |   of x^2, you have made an algebra mistake.                              |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

## 7.2 The distance between two points never changes

Take `A(x1, y1)` and `B(x2, y2)`. After the shift, `A` is `(x1 - h, y1 - k)` and
`B` is `(x2 - h, y2 - k)`.

```
  X1 - X2  =  (x1 - h) - (x2 - h)  =  x1 - x2       ( the h's cancel )
  Y1 - Y2  =  (y1 - k) - (y2 - k)  =  y1 - y2       ( the k's cancel )

  so   (X1 - X2)^2 + (Y1 - Y2)^2   =   (x1 - x2)^2 + (y1 - y2)^2

  that is,    AB (new)  =  AB (old)
```

### WORKED EXAMPLE 7.1

**Show that the distance between `A(1, 2)` and `B(4, 6)` is unchanged when the origin
is shifted to `(-1, 3)`.**

```
  OLD:   AB^2 = (4 - 1)^2 + (6 - 2)^2 = 9 + 16 = 25   ->   AB = 5

  NEW coordinates:
     A' :  X = 1 - (-1) = 2 ,   Y = 2 - 3 = -1        ->   A'(2, -1)
     B' :  X = 4 - (-1) = 5 ,   Y = 6 - 3 =  3        ->   B'(5,  3)

  NEW:   A'B'^2 = (5 - 2)^2 + (3 - (-1))^2 = 9 + 16 = 25   ->   A'B' = 5
```

Same. Of course it is — sliding your graph paper cannot make two fence posts move
further apart.

## 7.3 The area of a triangle never changes

Same reason: the area formula only uses **differences** of coordinates, and the shifts
cancel out of every difference.

### WORKED EXAMPLE 7.2

**Triangle with vertices `(0, 0)`, `(4, 0)`, `(0, 3)`. Shift the origin to `(2, 1)` and
check the area.**

```
  OLD area  =  (1/2) x base x height  =  (1/2)(4)(3)  =  6

  NEW vertices:  (0-2, 0-1) = (-2, -1)
                 (4-2, 0-1) = ( 2, -1)
                 (0-2, 3-1) = (-2,  2)

  NEW area = (1/2) abs( x1(y2-y3) + x2(y3-y1) + x3(y1-y2) )
           = (1/2) abs( (-2)(-1 - 2) + (2)(2 - (-1)) + (-2)((-1) - (-1)) )
           = (1/2) abs( (-2)(-3) + (2)(3) + (-2)(0) )
           = (1/2) abs( 6 + 6 + 0 )
           = (1/2)(12)
           = 6
```

**Same area, 6 square units.**

---

# TOPIC 8 — ROTATION OF AXES: THE FORMULAS AND THE DERIVATION

## 8.1 The set-up

Now the origin stays put. Both axes turn anticlockwise through the same angle `theta`.
They are still perpendicular to each other; the whole cross has simply been spun.

```
         y (old)
         ^
         |    Y (new)
         |   ^
         |    \                                        , X (new)
         |     \                                 , ' 
         |      \                          , '            * P
         |       \                   , '                 /
         |        \            , '                      /
         |         \     , '                           /
         |          \, '                              /
         |       , ' \                               /
         |   , '      \                             /
         |, '  theta   \                           /
    -----O==============\========================================> x (old)
         |               \

    The new X-axis makes an angle theta with the old x-axis.
    The new Y-axis makes an angle theta with the old y-axis.
    The origin has not moved.
```

## 8.2 The derivation (worth writing out once)

Let `P` be any point. Write its position in **polar** form measured from `O`:

```
      OP = r ,   and the angle from the OLD x-axis is  phi

      so       x = r cos(phi)          y = r sin(phi)
```

Now measure the same point in the **new** system. The distance `OP` is still `r`
(the origin did not move). But the new X-axis is `theta` further round, so the angle
from the **new** X-axis is `phi - theta`:

```
      X = r cos(phi - theta)          Y = r sin(phi - theta)
```

Expand with the compound angle formulas:

```
  X = r cos(phi) cos(theta) + r sin(phi) sin(theta)
    =    x     cos(theta)  +    y     sin(theta)

  Y = r sin(phi) cos(theta) - r cos(phi) sin(theta)
    =    y     cos(theta)  -    x     sin(theta)
    = - x sin(theta) + y cos(theta)
```

That is the **new-from-old** pair. To get **old-from-new**, solve the two equations.
Multiply the first by `cos t`, the second by `-sin t`, and add:

```
   X cos t  =  x cos^2 t  +  y sin t cos t
  -Y sin t  =  x sin^2 t  -  y sin t cos t
  ---------------------------------------------- add
   X cos t - Y sin t = x (cos^2 t + sin^2 t) = x                    so  x = X cos t - Y sin t
```

Multiply the first by `sin t`, the second by `cos t`, and add:

```
   X sin t  =  x sin t cos t  +  y sin^2 t
   Y cos t  = -x sin t cos t  +  y cos^2 t
  ---------------------------------------------- add
   X sin t + Y cos t = y (sin^2 t + cos^2 t) = y                    so  y = X sin t + Y cos t
```

## 8.3 The formula box

```
  +==========================================================================+
  |                                                                          |
  |     ROTATION OF AXES     (same origin, axes turned through theta)        |
  |                                                                          |
  |     -------------------------------------------------------------       |
  |     OLD in terms of NEW       |      NEW in terms of OLD                 |
  |     (transform an EQUATION)   |      (transform a POINT)                 |
  |     -------------------------------------------------------------       |
  |                               |                                          |
  |      x = X cos t - Y sin t    |      X =   x cos t + y sin t             |
  |      y = X sin t + Y cos t    |      Y = - x sin t + y cos t             |
  |                               |                                          |
  +==========================================================================+
```

## 8.4 The memory trick for the signs

Write the four coefficients as a little square:

```
      OLD from NEW                    NEW from OLD

      +-------------------+           +-------------------+
      |  cos t   -sin t   |           |   cos t    sin t  |
      |  sin t    cos t   |           |  -sin t    cos t  |
      +-------------------+           +-------------------+

      the minus is UP TOP                the minus is DOWN LEFT
```

They are mirror images of each other across the diagonal. If you can remember
**one** of them and remember "flip it across the diagonal", you have both.

An even simpler sanity check: put `theta = 0` (no rotation at all). Then
`cos 0 = 1`, `sin 0 = 0`, and every formula collapses to `x = X`, `y = Y`. If your
version does not do that, you have written it wrong.

Second sanity check: put `theta = 90`. Then `cos = 0`, `sin = 1`, so
`x = -Y` and `y = X`, i.e. `X = y` and `Y = -x`. Draw it: after a quarter turn
anticlockwise the new X-axis lies along the old y-axis, so the new X-coordinate should
indeed be the old `y`. It works.

> **TRAP:** The rotation is always **anticlockwise** unless the question says
> otherwise. If a question ever says "clockwise through 30 degrees", use
> `theta = -30`, which means `cos t = cos 30` but `sin t = -sin 30`.

## 8.5 The angle values you will actually need

| theta | cos t | sin t |
|---|---|---|
| 30 degrees (pi/6) | sqrt(3)/2 | 1/2 |
| 45 degrees (pi/4) | 1/sqrt(2) | 1/sqrt(2) |
| 60 degrees (pi/3) | 1/2 | sqrt(3)/2 |
| 90 degrees (pi/2) | 0 | 1 |

For `theta = 45` the formulas become especially clean and this is by far the most
common case in the exam:

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |    theta = 45 degrees                                                    |
  |                                                                          |
  |            X - Y                     X + Y                               |
  |      x = ---------            y = ---------                              |
  |          sqrt(2)                   sqrt(2)                               |
  |                                                                          |
  |            x + y                     y - x                               |
  |      X = ---------            Y = ---------                              |
  |          sqrt(2)                   sqrt(2)                               |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

---

# TOPIC 9 — ROTATION APPLIED TO A POINT

Use the **new-from-old** pair: `X = x cos t + y sin t`, `Y = -x sin t + y cos t`.

### WORKED EXAMPLE 9.1

**Find the new coordinates of the point `(1, 1)` when the axes are rotated through 45
degrees.**

```
  cos 45 = sin 45 = 1/sqrt(2)

  X =  x cos t + y sin t  =  (1)(1/sqrt(2)) + (1)(1/sqrt(2))  =  2/sqrt(2)  =  sqrt(2)

  Y = -x sin t + y cos t  = -(1)(1/sqrt(2)) + (1)(1/sqrt(2))  =  0
```

**New coordinates: `( sqrt(2) , 0 )`**

**Does that make sense?** The point `(1, 1)` lies exactly on the line `y = x`, which
is at 45 degrees. After we turn the axes to 45 degrees, that point sits **right on the
new X-axis**, so its new Y-coordinate must be zero. It is. And its distance from the
origin is `sqrt(1 + 1) = sqrt(2)`, which matches. Correct.

### WORKED EXAMPLE 9.2

**Find the new coordinates of `(4, 3)` after a rotation of 30 degrees.**

```
  cos 30 = sqrt(3)/2 ,   sin 30 = 1/2

  X =  4(sqrt(3)/2) + 3(1/2)   =  2 sqrt(3) + 3/2   =  ( 4 sqrt(3) + 3 ) / 2

  Y = -4(1/2)       + 3(sqrt(3)/2)  =  -2 + (3 sqrt(3))/2  =  ( 3 sqrt(3) - 4 ) / 2
```

**New coordinates: `( (4 sqrt(3) + 3)/2 ,  (3 sqrt(3) - 4)/2 )`**

**Verify with the distance check.** Rotation cannot change the distance from the
origin, so `X^2 + Y^2` must equal `x^2 + y^2 = 16 + 9 = 25`:

```
             ( 4 sqrt(3) + 3 )^2        48 + 24 sqrt(3) + 9        57 + 24 sqrt(3)
  X^2  =   ----------------------  =  ----------------------  =  -----------------
                      4                          4                       4

             ( 3 sqrt(3) - 4 )^2        27 - 24 sqrt(3) + 16       43 - 24 sqrt(3)
  Y^2  =   ----------------------  =  ----------------------- =  -----------------
                      4                          4                       4

                    57 + 24 sqrt(3) + 43 - 24 sqrt(3)         100
  X^2 + Y^2   =   -----------------------------------   =   -------   =   25
                                  4                            4
```

The surds cancel and we get 25. **Correct.**

> This `X^2 + Y^2 = x^2 + y^2` check is free and it catches every sign error in a
> rotation-of-a-point question. Use it every time.

### WORKED EXAMPLE 9.3

**Find the new coordinates of `(-2, 4)` when the axes are rotated through 90 degrees.**

```
  cos 90 = 0 ,  sin 90 = 1

  X =  (-2)(0) + (4)(1)   =   4
  Y = -(-2)(1) + (4)(0)   =   2
```

**New coordinates: `(4, 2)`.**

Check: `16 + 4 = 20` and `4 + 16 = 20`. Same. Correct.

---

# TOPIC 10 — ROTATION APPLIED TO A CURVE

## 10.1 The method

Use the **old-from-new** pair and substitute:

```
      x = X cos t - Y sin t
      y = X sin t + Y cos t
```

then expand and collect. For a general second degree equation this is a fair amount of
algebra, so there is a shortcut worth learning.

## 10.2 The shortcut — the new coefficients directly

If

```
      a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0
```

is rotated through `theta`, the new equation is

```
      a' X^2 + 2h' XY + b' Y^2 + 2g' X + 2f' Y + c = 0
```

with

```
  +==========================================================================+
  |                                                                          |
  |     a'  =  a cos^2 t   +   2h sin t cos t   +   b sin^2 t                |
  |                                                                          |
  |     b'  =  a sin^2 t   -   2h sin t cos t   +   b cos^2 t                |
  |                                                                          |
  |     2h' =  2h cos(2t)  -  (a - b) sin(2t)                                |
  |                                                                          |
  |     g'  =   g cos t  +  f sin t                                          |
  |     f'  =  -g sin t  +  f cos t                                          |
  |                                                                          |
  |     c'  =   c            ( the constant NEVER changes under rotation )   |
  |                                                                          |
  +==========================================================================+
```

Notice `g'` and `f'` transform exactly like the coordinates of a point do. That is not
a coincidence.

You do **not** have to memorise all of these. In the exam it is usually safest to
substitute directly. But `a'`, `b'` and `2h'` are worth knowing because they are the
route to the "remove the xy term" question in TOPIC 11.

### WORKED EXAMPLE 10.1 (the most-set rotation question)

**When the axes are rotated through an angle `pi/6`, find the transformed equation of
`x^2 + 2 sqrt(3) xy - y^2 = 2a^2`.**

```
  theta = 30 degrees ,  cos t = sqrt(3)/2 ,  sin t = 1/2

  Read the letters:  A = 1 ,  2h = 2 sqrt(3) so h = sqrt(3) ,  B = -1
  (calling them A and B so they do not clash with the a in 2a^2)
```

Do it with the coefficient formulas. Write `s = sin t = 1/2` and `c = cos t = sqrt(3)/2`,
so `c^2 = 3/4`, `s^2 = 1/4`, and `2h.s.c = 2 sqrt(3) . (1/2) . (sqrt(3)/2) = 3/2`:

```
  A'  =  A c^2  +  2h s c  +  B s^2

      =  (1)(3/4)   +   3/2   +   (-1)(1/4)

      =   3/4   +   6/4   -   1/4      =    8/4    =    2

  B'  =  A s^2  -  2h s c  +  B c^2

      =  (1)(1/4)   -   3/2   +   (-1)(3/4)

      =   1/4   -   6/4   -   3/4      =   -8/4    =   -2

  2h' =  2h cos(2t) - (A - B) sin(2t)
      =  2 sqrt(3) cos 60  -  (1 - (-1)) sin 60
      =  2 sqrt(3) (1/2)   -  (2)(sqrt(3)/2)
      =  sqrt(3)  -  sqrt(3)
      =  0
```

So the transformed equation is

```
      2X^2  -  2Y^2  =  2a^2

      X^2   -  Y^2   =  a^2
```

**Transformed equation: `X^2 - Y^2 = a^2`** — a lovely clean rectangular hyperbola.

**Verify with a point.** Take the new point `(X, Y) = (a, 0)`. Its old coordinates:

```
  x = X cos t - Y sin t = a . sqrt(3)/2 - 0 = a sqrt(3)/2
  y = X sin t + Y cos t = a . 1/2      + 0 = a/2
```

Put those into the **old** equation:

```
  x^2 + 2 sqrt(3) xy - y^2

     3a^2                     a sqrt(3)     a        a^2
  = ------  +  2 sqrt(3) .  ----------- .  ---   -  -----
      4                          2          2         4

     3a^2      2 . 3 . a^2      a^2         3a^2     6a^2     a^2       8a^2
  = ------  +  ------------  -  ----   =   ------ + ------ - ------  = ------  =  2a^2
      4             4            4           4        4        4         4
```

That equals `2a^2`, which is exactly the right-hand side. **Correct.**

And the new equation gives `a^2 - 0 = a^2`. Also correct.

### WORKED EXAMPLE 10.2

**When the axes are rotated through 45 degrees, find the transformed equation of
`3x^2 + 10xy + 3y^2 = 9`.**

At 45 degrees it is quickest to substitute directly:

```
        X - Y                 X + Y
  x = ---------        y = ---------
      sqrt(2)               sqrt(2)

               (X - Y)^2          3
  3x^2  =  3 . ----------   =   ---- (X^2 - 2XY + Y^2)
                   2              2

               (X + Y)^2          3
  3y^2  =  3 . ----------   =   ---- (X^2 + 2XY + Y^2)
                   2              2

               (X - Y)(X + Y)      10
  10xy  = 10 . --------------  =  ---- (X^2 - Y^2)  =  5(X^2 - Y^2)
                     2              2
```

Add the two 3-terms first; the `XY` parts cancel:

```
   3
  --- (X^2 - 2XY + Y^2)  +  --- (X^2 + 2XY + Y^2)   =   3X^2 + 3Y^2
   2                         2

  Total:   3X^2 + 3Y^2 + 5X^2 - 5Y^2   =   8X^2 - 2Y^2
```

**Transformed equation: `8X^2 - 2Y^2 = 9`**

**Check with the invariants** (TOPIC 12): `a + b = 3 + 3 = 6` and `a' + b' = 8 - 2 = 6`.
Match. And `ab - h^2 = 9 - 25 = -16`, while `a'b' - h'^2 = (8)(-2) - 0 = -16`. Match.
The answer is right.

### WORKED EXAMPLE 10.3

**When the axes are rotated through 45 degrees, find the transformed equation of
`17x^2 - 16xy + 17y^2 = 225`.**

```
  17x^2 + 17y^2  =  17(x^2 + y^2)  =  17(X^2 + Y^2)
                    ( because x^2 + y^2 is unchanged by rotation - see TOPIC 12 )

                       (X - Y)(X + Y)
  -16xy         = -16 . --------------  =  -8(X^2 - Y^2)  =  -8X^2 + 8Y^2
                              2

  Total:   17X^2 + 17Y^2 - 8X^2 + 8Y^2   =   9X^2 + 25Y^2
```

**Transformed equation: `9X^2 + 25Y^2 = 225`, that is `X^2/25 + Y^2/9 = 1`.**

An ellipse with semi-axes 5 and 3. The original slanted mess was an ellipse all along;
turning the axes to 45 degrees revealed it.

**Verify with a point.** New point `(5, 0)` should lie on it: `9(25) = 225`. Yes.
Its old coordinates: `x = 5 cos 45 = 5/sqrt(2)`, `y = 5 sin 45 = 5/sqrt(2)`.

```
  17 x^2 - 16 xy + 17 y^2
     =  17(25/2)  -  16(25/2)  +  17(25/2)
     =  (25/2)( 17 - 16 + 17 )
     =  (25/2)(18)
     =  225                                                  CORRECT.
```

### WORKED EXAMPLE 10.4 (the neat theory one)

**When the axes are rotated through an angle `alpha`, find the transformed equation of
`x cos(alpha) + y sin(alpha) = p`.**

```
  x = X cos a - Y sin a          y = X sin a + Y cos a

  x cos a + y sin a
     = (X cos a - Y sin a) cos a  +  (X sin a + Y cos a) sin a
     = X cos^2 a - Y sin a cos a  +  X sin^2 a + Y sin a cos a
     = X (cos^2 a + sin^2 a)  +  Y ( -sin a cos a + sin a cos a )
     = X (1)  +  Y (0)
     = X
```

**Transformed equation: `X = p`.**

Beautiful result, and easy to see why: `x cos a + y sin a = p` is the normal form of a
line whose perpendicular from the origin makes angle `alpha` with the x-axis. Turn the
axes through `alpha` and that perpendicular now lies along the new X-axis, so the line
is simply the vertical line `X = p`.

### WORKED EXAMPLE 10.5 (going backwards)

**When the axes are rotated through 45 degrees, the transformed equation of a curve is
`17X^2 - 16XY + 17Y^2 = 225`. Find the original equation.**

Now we need `X` and `Y` in terms of `x` and `y`:

```
        x + y                 y - x
  X = ---------        Y = ---------
      sqrt(2)               sqrt(2)

                    (x + y)^2         17
  17X^2   =   17 . -----------   =   ---- (x^2 + 2xy + y^2)
                        2              2

                    (y - x)^2         17
  17Y^2   =   17 . -----------   =   ---- (x^2 - 2xy + y^2)
                        2              2

  Add these two: the 2xy terms cancel

      17
     ---- ( 2x^2 + 2y^2 )   =   17x^2 + 17y^2
      2

                     (x + y)(y - x)          y^2 - x^2
  -16XY   =   -16 . ---------------- = -16 . -----------  =  -8y^2 + 8x^2
                            2                     2

  Total:   17x^2 + 17y^2 + 8x^2 - 8y^2   =   25x^2 + 9y^2
```

**Original equation: `25x^2 + 9y^2 = 225`, that is `x^2/9 + y^2/25 = 1`.**

Compare with WORKED EXAMPLE 10.3, which went the other way. The two answers are the
same ellipse seen from the two different viewpoints — one standing upright, one tilted
45 degrees. Consistent.

---

# TOPIC 11 — THE OTHER STAR QUESTION: REMOVING THE xy TERM

## 11.1 What we are doing and why

An `xy` term in a second degree equation means the curve is **tilted**. Get rid of it
and the curve lines up with the axes, and you can read off what it is at a glance.

From TOPIC 10 we already have

```
      2h'  =  2h cos(2 theta)  -  (a - b) sin(2 theta)
```

Set `h' = 0`:

```
      2h cos(2 theta)  =  (a - b) sin(2 theta)

        sin(2 theta)          2h
      ---------------   =   -------
        cos(2 theta)         a - b
```

```
  +==========================================================================+
  |                                                                          |
  |     TO REMOVE THE xy TERM FROM                                           |
  |                                                                          |
  |          a x^2  +  2h xy  +  b y^2  +  ...  =  0                         |
  |                                                                          |
  |     rotate the axes through theta, where                                 |
  |                                                                          |
  |                              2h                                          |
  |             tan(2 theta)  =  -------           ( when a is not b )       |
  |                              a - b                                       |
  |                                                                          |
  |                        1          ( 2h  )                                |
  |             theta  =  --- tan^-1  (-----)                                |
  |                        2          ( a-b )                                |
  |                                                                          |
  |     SPECIAL CASE:   if  a = b   then  a - b = 0,  so  tan(2 theta)       |
  |     is infinite, so  2 theta = 90 degrees, so                            |
  |                                                                          |
  |             theta  =  45 degrees   =   pi/4                              |
  |                                                                          |
  +==========================================================================+
```

> **TRAP number one:** the formula uses `2h`, the **whole** coefficient of `xy`, on
> top — but it also uses `a - b`, the plain coefficients of `x^2` and `y^2`, on the
> bottom. So for `3x^2 + 10xy + 3y^2` the top is `10` (not 5) and the bottom is
> `3 - 3 = 0`. Many students halve the wrong thing. Write the numerator as
> "the coefficient of xy" and you will never slip.

> **TRAP number two:** it is `tan(2 theta)`, not `tan(theta)`. You must **halve** at
> the end. Forgetting the halving is the number one way to lose this mark.

## 11.2 Why `a = b` gives 45 degrees, in plain English

If the coefficients of `x^2` and `y^2` are equal, the curve is symmetric about the
line `y = x` (swap `x` and `y` and the `x^2` and `y^2` terms trade places without
changing anything). So its axes of symmetry are `y = x` and `y = -x`, which are at
45 degrees. Turn the coordinate axes to 45 degrees and you are lined up with the
curve. Done.

### WORKED EXAMPLE 11.1

**Find the angle of rotation of the axes that removes the xy term from
`3x^2 + 10xy + 3y^2 = 9`. Find the new equation.**

```
  a = 3 ,  b = 3 ,  coefficient of xy = 10 so 2h = 10 , h = 5

  a = b , so immediately   theta = 45 degrees.
```

We already worked out the new equation in WORKED EXAMPLE 10.2:

**`theta = 45 degrees`, and the transformed equation is `8X^2 - 2Y^2 = 9`.**

There is a shortcut for the `a = b` case which is worth memorising:

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |    WHEN a = b AND theta = 45 :                                           |
  |                                                                          |
  |          a'  =  a + h            b'  =  a - h                            |
  |                                                                          |
  |    Check:  3x^2 + 10xy + 3y^2  ->  a = 3 , h = 5                         |
  |            a' = 3 + 5 = 8      b' = 3 - 5 = -2                           |
  |            giving  8X^2 - 2Y^2 . CORRECT.                                |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 11.2

**Find the angle through which the axes must be rotated to remove the xy term from
`x^2 + 2 sqrt(3) xy - y^2 = 2a^2`.**

```
  A = 1 ,  B = -1 ,  coefficient of xy = 2 sqrt(3)

                     2 sqrt(3)        2 sqrt(3)
  tan(2 theta)  =  ------------  =  ------------  =  sqrt(3)
                     1 - (-1)             2

  2 theta = 60 degrees          ->      theta = 30 degrees
```

**`theta = 30 degrees` (that is `pi/6`).**

This ties up perfectly with WORKED EXAMPLE 10.1, where rotating by exactly 30 degrees
made the `XY` coefficient come out zero. Two different routes, same answer.

### WORKED EXAMPLE 11.3

**Find the angle of rotation that removes the xy term from
`17x^2 - 16xy + 17y^2 = 225`.**

```
  a = 17 ,  b = 17 ,  so a = b     ->     theta = 45 degrees
```

Shortcut for the new coefficients: `2h = -16`, so `h = -8`.

```
  a' = a + h = 17 + (-8) =  9
  b' = a - h = 17 - (-8) = 25

  New equation:  9X^2 + 25Y^2 = 225
```

Which matches WORKED EXAMPLE 10.3 exactly. **Correct.**

### WORKED EXAMPLE 11.4

**Find the angle of rotation that removes the xy term from `4x^2 + 2 sqrt(3) xy + 2y^2 = 1`,
and find the new equation.**

```
  a = 4 ,  b = 2 ,  coefficient of xy = 2 sqrt(3) , so h = sqrt(3)

                     2 sqrt(3)
  tan(2 theta)  =  ------------  =  sqrt(3)      ->   2 theta = 60   ->   theta = 30
                       4 - 2
```

Now the new coefficients with `cos 30 = sqrt(3)/2`, `sin 30 = 1/2`:

```
  a' = a cos^2 t + 2h sin t cos t + b sin^2 t
     = 4 (3/4)  +  2 sqrt(3) . (1/2)(sqrt(3)/2)  +  2 (1/4)
     = 3        +  3/2                            +  1/2
     = 5

  b' = a sin^2 t - 2h sin t cos t + b cos^2 t
     = 4 (1/4)  -  3/2  +  2 (3/4)
     = 1        -  1.5  +  1.5
     = 1
```

**`theta = 30 degrees`, transformed equation `5X^2 + Y^2 = 1`.**

**Verify with the invariants:** `a + b = 6` and `a' + b' = 5 + 1 = 6`. Good.
`ab - h^2 = 8 - 3 = 5` and `a'b' - 0 = 5`. Good.

**Verify with a point** as well. The new point `(1/sqrt(5), 0)` is on `5X^2 + Y^2 = 1`.
Its old coordinates:

```
  x = X cos 30 = sqrt(3) / (2 sqrt(5))          y = X sin 30 = 1 / (2 sqrt(5))

  4x^2  =  4 . (3/20)   =  12/20  =  0.6

                            sqrt(3)          1            2 . 3
  2 sqrt(3) xy  =  2 sqrt(3) . --------- . ---------  =  -------  =  6/20  =  0.3
                            2 sqrt(5)    2 sqrt(5)         20

  2y^2  =  2 . (1/20)   =   2/20  =  0.1

  Total  =  0.6 + 0.3 + 0.1  =  1                              CORRECT.
```

### WORKED EXAMPLE 11.5 (when the angle is not a nice number)

**Find the angle of rotation that removes the xy term from `6x^2 + 5xy - 6y^2 = 0`.**

```
  a = 6 ,  b = -6 ,  coefficient of xy = 5

                        5            5
  tan(2 theta)  =  ----------  =  ------
                    6 - (-6)        12

                    1          ( 5  )
  theta  =         --- tan^-1  (----)
                    2          ( 12 )
```

**`theta = (1/2) tan^-1 (5/12)`**

That **is** the final answer. Do not reach for a calculator and do not try to force it
into a whole number of degrees. Leaving it in inverse-tan form is exactly what the
marking scheme wants.

### WORKED EXAMPLE 11.6

**Find the angle of rotation that removes the xy term from
`x^2 + 4xy + y^2 - 2x + 2y - 6 = 0`.**

The first degree terms are irrelevant to this question — only `a`, `h`, `b` matter.

```
  a = 1 ,  b = 1   ->   a = b   ->   theta = 45 degrees
```

**`theta = 45 degrees` (`pi/4`).**

> **TRAP:** Do not let the extra `-2x + 2y - 6` distract you. The `xy` coefficient is
> decided entirely by the three second degree coefficients. Cover the rest with your
> hand.

---

# TOPIC 12 — THE INVARIANTS: THINGS ROTATION CANNOT CHANGE

## 12.1 The two algebraic invariants

```
  +==========================================================================+
  |                                                                          |
  |    UNDER A ROTATION OF THE AXES:                                         |
  |                                                                          |
  |        a  +  b        is UNCHANGED         a' + b'   =  a + b            |
  |                                                                          |
  |        a b - h^2      is UNCHANGED         a'b' - h'^2  =  ab - h^2      |
  |                                                                          |
  |    (and the constant term c is unchanged too)                            |
  |                                                                          |
  +==========================================================================+
```

**Proof of the first one** (short enough to be a 2-mark answer):

```
  a' + b'  =  ( a cos^2 t + 2h sc + b sin^2 t ) + ( a sin^2 t - 2h sc + b cos^2 t )

           =  a (cos^2 t + sin^2 t)  +  b (sin^2 t + cos^2 t)  +  (2h sc - 2h sc)

           =  a  +  b  +  0

           =  a  +  b
```

The `2h sin t cos t` pieces are equal and opposite so they cancel, and each Pythagorean
bracket is 1. Done.

The second one, `a'b' - h'^2 = ab - h^2`, is proved the same way but the algebra is
longer. For the board exam it is enough to **state** it and **use** it.

## 12.2 Why you should care — the checking shortcut

Since a rotation that removes the `xy` term has `h' = 0`, the two invariants become

```
      a' + b'   =  a + b
      a' b'     =  ab - h^2
```

Sum and product! So `a'` and `b'` are the two roots of

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |        t^2  -  ( a + b ) t  +  ( a b - h^2 )   =   0                     |
  |                                                                          |
  |   Solve this quadratic and you get the new coefficients WITHOUT doing     |
  |   any trigonometry at all.                                                |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**Test it on the examples above:**

| Original | a + b | ab - h^2 | Quadratic | Roots | Answer found earlier |
|---|---|---|---|---|---|
| `3x^2 + 10xy + 3y^2` | 6 | `9 - 25 = -16` | `t^2 - 6t - 16 = 0` | 8, -2 | `8X^2 - 2Y^2` — matches |
| `17x^2 - 16xy + 17y^2` | 34 | `289 - 64 = 225` | `t^2 - 34t + 225 = 0` | 25, 9 | `9X^2 + 25Y^2` — matches |
| `4x^2 + 2sqrt3 xy + 2y^2` | 6 | `8 - 3 = 5` | `t^2 - 6t + 5 = 0` | 5, 1 | `5X^2 + Y^2` — matches |
| `x^2 + 2sqrt3 xy - y^2` | 0 | `-1 - 3 = -4` | `t^2 - 4 = 0` | 2, -2 | `2X^2 - 2Y^2` — matches |

Every one matches. This is a superb shortcut for a multiple-choice paper: it tells you
the **pair** of new coefficients in about fifteen seconds.

> **CAREFUL:** the quadratic tells you the two numbers but not which one belongs to
> `X^2` and which to `Y^2`. To settle that, compute `a'` properly from
> `a' = a cos^2 t + 2h sin t cos t + b sin^2 t`, or in the easy `a = b` case use
> `a' = a + h`.

## 12.3 The geometric invariants

Rotation is a **rigid** motion — nothing is stretched — so:

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |    UNCHANGED BY ROTATION:                                                |
  |                                                                          |
  |       distance of a point from the origin :   X^2 + Y^2 = x^2 + y^2      |
  |       distance between two points                                        |
  |       area of any triangle or figure                                     |
  |       angle between two lines                                            |
  |       the TYPE of conic (circle stays a circle, ellipse stays ellipse)   |
  |                                                                          |
  |    CHANGED BY ROTATION:                                                  |
  |                                                                          |
  |       the coordinates of a point                                         |
  |       a , h , b     (but a+b and ab-h^2 survive)                         |
  |       g and f       (they rotate like a point)                           |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**Proof that distance between two points is unchanged.** Let `u = x1 - x2` and
`v = y1 - y2`. Then

```
  X1 - X2  =  (x1 cos t + y1 sin t) - (x2 cos t + y2 sin t)  =  u cos t + v sin t

  Y1 - Y2  =  (-x1 sin t + y1 cos t) - (-x2 sin t + y2 cos t) = -u sin t + v cos t

  (X1-X2)^2 + (Y1-Y2)^2
     = (u cos t + v sin t)^2  +  (-u sin t + v cos t)^2
     = u^2 cos^2 + 2uv sin cos + v^2 sin^2  +  u^2 sin^2 - 2uv sin cos + v^2 cos^2
     = u^2 (cos^2 + sin^2)  +  v^2 (sin^2 + cos^2)      [ the cross terms cancel ]
     = u^2 + v^2
     = (x1 - x2)^2 + (y1 - y2)^2
```

**Same distance.** Which is obvious in real life — turning your head does not move the
lamp posts apart — but the exam wants to see the algebra.

---

# TOPIC 13 — COMBINED TRANSLATION AND ROTATION

## 13.1 The order matters

The standard convention (and the one the textbook uses) is:

```
  +==========================================================================+
  |                                                                          |
  |     STEP 1   TRANSLATE the origin to (h, k)   -> kills the x and y terms |
  |     STEP 2   ROTATE through theta             -> kills the xy term       |
  |                                                                          |
  |   Combined into one pair of formulas:                                    |
  |                                                                          |
  |        x  =  h  +  X cos t  -  Y sin t                                   |
  |        y  =  k  +  X sin t  +  Y cos t                                   |
  |                                                                          |
  +==========================================================================+
```

**Why translate first?** Because the rotation does not disturb the fact that the
first degree terms are gone. Look: after the translation the equation is
`aX^2 + 2hXY + bY^2 + c' = 0` with `g = f = 0`. Now rotate; the rotation rules give
`g' = g cos t + f sin t = 0` and `f' = -g sin t + f cos t = 0`. Still zero. So the
translation's work survives the rotation.

Go the other way round and the rotation would give you an `xy`-free equation, but then
completing the square for the translation would generally be fine too — the trouble is
you would have to find the centre in the rotated frame, which is extra work. So:
**translate, then rotate.**

## 13.2 A full worked example

### WORKED EXAMPLE 13.1

**Reduce `3x^2 + 10xy + 3y^2 - 2x - 14y - 13 = 0` to its simplest form using a
translation followed by a rotation. Name the curve.**

**Part 1 — the translation.**

```
  a = 3 ,  2h = 10 -> h = 5 ,  b = 3 ,  2g = -2 -> g = -1 ,  2f = -14 -> f = -7 ,  c = -13

  a b - h^2  =  9 - 25  =  -16

              h f - b g       (5)(-7) - (3)(-1)       -35 + 3       -32
  alpha  =  -----------   =  -------------------  =  ---------  =  -----  =  2
              a b - h^2             -16                 -16         -16

              g h - a f       (-1)(5) - (3)(-7)        -5 + 21        16
  beta   =  -----------   =  -------------------  =  ----------  =  -----  =  -1
              a b - h^2             -16                 -16          -16

  c'  =  g.alpha + f.beta + c  =  (-1)(2) + (-7)(-1) + (-13)  =  -2 + 7 - 13  =  -8
```

**Shift the origin to `(2, -1)`. The equation becomes `3X^2 + 10XY + 3Y^2 - 8 = 0`.**

**Verify** by substituting `x = X + 2`, `y = Y - 1`:

```
   3(X + 2)^2       =  3X^2 + 12X          + 12
  10(X + 2)(Y - 1)  = 10XY  - 10X  + 20Y   - 20
   3(Y - 1)^2       =  3Y^2        -  6Y   +  3
  -2(X + 2)         =       -  2X          -  4
 -14(Y - 1)         =              - 14Y   + 14
  -13               =                      - 13

  X terms   :   12X - 10X - 2X       =  0                    GOOD
  Y terms   :   20Y -  6Y - 14Y      =  0                    GOOD
  constants :   12 - 20 + 3 - 4 + 14 - 13   =  -8            MATCHES.
```

**Part 2 — the rotation.**

```
  Now  a = 3 ,  b = 3 ,  so  a = b   ->   theta = 45 degrees

  a' = a + h = 3 + 5 = 8
  b' = a - h = 3 - 5 = -2
```

So `3X^2 + 10XY + 3Y^2 = 8` becomes

```
      8 X'^2  -  2 Y'^2  =  8

  Divide throughout by 8:

                   Y'^2
      X'^2   -   --------   =   1
                    4
```

**Final form: `X'^2 - Y'^2/4 = 1` — a HYPERBOLA** with its centre at the point
`(2, -1)` of the original system and its axes tilted 45 degrees.

**Check with the invariants:** before rotation `a + b = 6`, `ab - h^2 = 9 - 25 = -16`.
After rotation `a' + b' = 8 - 2 = 6` and `a'b' = -16`. Both match. Correct.

That single ugly six-term equation is really just `X^2 - Y^2/4 = 1` viewed from an
awkward chair.

---

# TOPIC 14 — AREA AND DISTANCE UNDER ANY TRANSFORMATION

We have now proved these one piece at a time. Here is the whole picture together.

```
  +==========================================================================+
  |                                                                          |
  |   TRANSLATION and ROTATION are both RIGID MOTIONS of the axes.           |
  |   Nothing is stretched, squashed or reflected.                           |
  |   Therefore, for ANY figure:                                             |
  |                                                                          |
  |       LENGTH of a segment    ->  unchanged                               |
  |       AREA of a triangle     ->  unchanged                               |
  |       AREA of any polygon    ->  unchanged                               |
  |       ANGLE between lines    ->  unchanged                               |
  |       PERPENDICULARITY       ->  unchanged                               |
  |       the SHAPE of the curve ->  unchanged                               |
  |                                                                          |
  |   Only the NUMBERS we use to label points change.                        |
  |                                                                          |
  +==========================================================================+
```

### WORKED EXAMPLE 14.1

**Show that the area of the triangle with vertices `(0, 0)`, `(4, 0)`, `(0, 3)` is
unchanged when the axes are rotated through 45 degrees.**

```
  OLD area  =  (1/2)(4)(3)  =  6      (right-angled triangle, base 4, height 3)

  New coordinates,  cos 45 = sin 45 = 1/sqrt(2) :

    (0, 0)  ->  X = 0 ,                    Y = 0                 ->  (0, 0)

    (4, 0)  ->  X = 4/sqrt(2) = 2 sqrt(2) ,
                Y = -4/sqrt(2) = -2 sqrt(2)                      ->  (2 sqrt(2), -2 sqrt(2))

    (0, 3)  ->  X = 3/sqrt(2) ,
                Y = 3/sqrt(2)                                    ->  (3/sqrt(2), 3/sqrt(2))

  NEW area = (1/2) abs( x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2) )

           = (1/2) abs( 0 . (...)  +  2 sqrt(2) . (3/sqrt(2) - 0)
                                    +  (3/sqrt(2)) . (0 - (-2 sqrt(2))) )

           = (1/2) abs(  2 sqrt(2) . 3/sqrt(2)   +   (3/sqrt(2)) . 2 sqrt(2)  )

           = (1/2) abs(  6  +  6  )

           = (1/2)(12)

           = 6
```

**Same area: 6 square units.** The `sqrt(2)`s cancel exactly, as they must.

### WORKED EXAMPLE 14.2

**The distance between two points is 10. What is it after the origin is shifted to
`(3, -7)` and the axes are then rotated through 37 degrees?**

**ANSWER: 10.** Neither operation changes any distance. Write one sentence explaining
that translation and rotation are rigid motions, and you have the 2 marks. You are not
expected to compute anything.

> **TRAP:** Some students see "37 degrees" and start hunting for `sin 37`. There is
> nothing to compute. Recognising an invariance question and writing one clean
> sentence is the whole answer.

---

# TOPIC 15 — PUTTING IT ALL TOGETHER: THE DECISION TREE

```
                 READ THE QUESTION
                        |
        +---------------+----------------+
        |                                |
   Is a POINT being                 Is a CURVE being
   transformed?                     transformed?
        |                                |
        |                                |
   Use NEW-from-OLD                 Use OLD-from-NEW
        |                                |
        |                                |
   translation: X = x - h           translation: x = X + h
                Y = y - k                        y = Y + k
        |                                |
   rotation:  X =  x cos t + y sin t rotation: x = X cos t - Y sin t
              Y = -x sin t + y cos t           y = X sin t + Y cos t


                 SPECIAL REQUESTS
                        |
        +---------------+----------------+
        |                                |
  "remove the FIRST                "remove the
   DEGREE terms"                    xy TERM"
        |                                |
        |                                |
  TRANSLATION                       ROTATION
        |                                |
  no xy?  complete the square       tan(2 theta) = 2h/(a-b)
  has xy? alpha = (hf-bg)/(ab-h^2)  a = b?  theta = 45 degrees
          beta  = (gh-af)/(ab-h^2)
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Tick every one of these before you move on from a Transformation of Axes question.

```
  [ ]  Did I decide whether I am transforming a POINT or an EQUATION?
       POINT -> subtract the origin.  EQUATION -> substitute x = X + h.

  [ ]  For a translation, did I get the SIGN right?
       Test: put the new origin in. It must come out as (0, 0).

  [ ]  When reading a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0,
       did I HALVE the coefficients of xy , x and y to get h , g and f?

  [ ]  For "remove the first degree terms", did I check that
       ab - h^2 is not zero before dividing by it?

  [ ]  Did I substitute my (alpha, beta) back in and confirm that BOTH
       the X term and the Y term really do vanish?

  [ ]  Did I compute the new constant  c' = g.alpha + f.beta + c
       and write the FULL new equation, not just the point?

  [ ]  For a rotation, did I write cos and sin the right way round
       and put the minus sign in the right place?
       Test with theta = 0: everything must reduce to x = X , y = Y.

  [ ]  For "remove the xy term", did I use tan(2 THETA), and did I
       remember to HALVE the angle at the end?

  [ ]  If a = b, did I go straight to theta = 45 degrees instead of
       dividing by zero?

  [ ]  Did I check my rotated equation with the invariants
       a + b  and  ab - h^2 ?

  [ ]  Did I verify the whole answer by pushing ONE point through
       the transformation and into the new equation?

  [ ]  Did I state the final answer in CAPITAL X and Y (or say clearly
       which letters mean which system)?

  [ ]  Did I NAME the curve if the question asked me to?

  [ ]  If it was an invariance question (distance, area), did I resist
       the urge to calculate and just write the one-sentence reason?
```

**If all of those are ticked, this question is worth full marks. Move on.**
